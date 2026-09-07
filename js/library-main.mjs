// @__NO_SIDE_EFFECTS__
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = {}, pn = [], Tt = () => {
}, oo = () => !1, Ar = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xr = (e) => e.startsWith("onUpdate:"), ke = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ll = Object.prototype.hasOwnProperty, le = (e, t) => Ll.call(e, t), G = Array.isArray, Ut = (e) => Kn(e) === "[object Map]", en = (e) => Kn(e) === "[object Set]", li = (e) => Kn(e) === "[object Date]", ee = (e) => typeof e == "function", Ae = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", lo = (e) => (ue(e) || ee(e)) && ee(e.then) && ee(e.catch), ao = Object.prototype.toString, Kn = (e) => ao.call(e), Fl = (e) => Kn(e).slice(8, -1), co = (e) => Kn(e) === "[object Object]", Os = (e) => Ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mn = /* @__PURE__ */ ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ul = /-\w/g, ut = wr(
  (e) => e.replace(Ul, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, tn = wr(
  (e) => e.replace(kl, "-$1").toLowerCase()
), uo = wr((e) => e.charAt(0).toUpperCase() + e.slice(1)), qr = wr(
  (e) => e ? `on${uo(e)}` : ""
), xt = (e, t) => !Object.is(e, t), fr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fo = (e, t, n, r = !1) => {
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
      const r = e[n], s = Ae(r) ? Vl(r) : Rs(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Ae(e) || ue(e))
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
function Hn(e) {
  let t = "";
  if (Ae(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = Hn(e[n]);
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
    return n && r ? Wl(e, t) : !1;
  if (n = ue(e), r = ue(t), n || r) {
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
function Kl(e, t) {
  return e.findIndex((n) => kt(n, t));
}
const ho = (e) => !!(e && e.__v_isRef === !0), w = (e) => Ae(e) ? e : e == null ? "" : G(e) || ue(e) && (e.toString === ao || !ee(e.toString)) ? ho(e) ? w(e.value) : JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => ho(t) ? mo(e, t.value) : Ut(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : en(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : Et(t) ? Yr(t) : ue(t) && !G(t) && !co(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let De;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && De && (De.active ? (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(
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
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = De, De = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (De === this)
        De = this.prevScope;
      else {
        let t = De;
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
  return De;
}
let he;
const Xr = /* @__PURE__ */ new WeakSet();
class go {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
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
    const t = he, n = ft;
    he = this, ft = !0;
    try {
      return this.fn();
    } finally {
      To(this), he = t, ft = n, this.flags &= -3;
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
let bo = 0, Dn, Ln;
function yo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ln, Ln = e;
    return;
  }
  e.next = Dn, Dn = e;
}
function Ps() {
  bo++;
}
function Is() {
  if (--bo > 0)
    return;
  if (Ln) {
    let t = Ln;
    for (Ln = void 0; t; ) {
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
function _o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function To(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ns(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jn) || (e.globalVersion = jn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = he, r = ft;
  he = e, ft = !0;
  try {
    _o(e);
    const s = e.fn(e._value);
    (t.version === 0 || xt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    he = n, ft = r, To(e), e.flags &= -3;
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
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ft = !0;
const vo = [];
function Rt() {
  vo.push(ft), ft = !1;
}
function Pt() {
  const e = vo.pop();
  ft = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = he;
    he = void 0;
    try {
      t();
    } finally {
      he = n;
    }
  }
}
let jn = 0;
class Xl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class So {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!he || !ft || he === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== he)
      n = this.activeLink = new Xl(he, this), he.deps ? (n.prevDep = he.depsTail, he.depsTail.nextDep = n, he.depsTail = n) : he.deps = he.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = he.depsTail, n.nextDep = void 0, he.depsTail.nextDep = n, he.depsTail = n, he.deps === n && (he.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, jn++, this.notify(t);
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
const ms = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
), $n = /* @__PURE__ */ Symbol(
  ""
);
function Ue(e, t, n) {
  if (ft && he) {
    let r = ms.get(e);
    r || ms.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function wt(e, t, n, r, s, i) {
  const o = ms.get(e);
  if (!o) {
    jn++;
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
      o.forEach((y, N) => {
        (N === "length" || N === $n || !Et(N) && N >= d) && l(y);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), m && l(o.get($n)), t) {
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
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (Ue(t, "iterate", $n), /* @__PURE__ */ dt(e) ? t : t.map(It));
}
function Rr(e) {
  return Ue(e = /* @__PURE__ */ ce(e), "iterate", $n), e;
}
function yt(e, t) {
  return /* @__PURE__ */ Ht(e) ? yn(/* @__PURE__ */ Zt(e) ? It(t) : t) : It(t);
}
const Jl = {
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
    return xn(this, "pop");
  },
  push(...e) {
    return xn(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return vt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xn(this, "splice", e);
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
    return xn(this, "unshift", e);
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
const Zl = Array.prototype;
function vt(e, t, n, r, s, i) {
  const o = Rr(e), l = o !== e && !/* @__PURE__ */ dt(e), c = o[t];
  if (c !== Zl[t]) {
    const y = c.apply(e, i);
    return l ? It(y) : y;
  }
  let m = n;
  o !== e && (l ? m = function(y, N) {
    return n.call(this, yt(e, y), N, e);
  } : n.length > 2 && (m = function(y, N) {
    return n.call(this, y, N, e);
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
  const r = /* @__PURE__ */ ce(e);
  Ue(r, "iterate", $n);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), r[t](...n)) : s;
}
function xn(e, t, n = []) {
  Rt(), Ps();
  const r = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return Is(), Pt(), r;
}
const Ql = /* @__PURE__ */ ws("__proto__,__v_isRef,__isVue"), xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function ea(e) {
  Et(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return Ue(t, "has", e), t.hasOwnProperty(e);
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
    const o = G(t);
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
      /* @__PURE__ */ qe(t) ? t : r
    );
    if ((Et(n) ? xo.has(n) : Ql(n)) || (s || Ue(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ qe(l)) {
      const c = o && Os(n) ? l : l.value;
      return s && ue(c) ? /* @__PURE__ */ ys(c) : c;
    }
    return ue(l) ? s ? /* @__PURE__ */ ys(l) : /* @__PURE__ */ hn(l) : l;
  }
}
class Co extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = G(t) && Os(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ Ht(i);
      if (!/* @__PURE__ */ dt(r) && !/* @__PURE__ */ Ht(r) && (i = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(r)), !o && /* @__PURE__ */ qe(i) && !/* @__PURE__ */ qe(r))
        return m || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : le(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ qe(t) ? t : s
    );
    return t === /* @__PURE__ */ ce(s) && c && (l ? xt(r, i) && wt(t, "set", n, r) : wt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = le(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && wt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Et(n) || !xo.has(n)) && Ue(t, "has", n), r;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      G(t) ? "length" : Jt
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
const bs = (e) => e, ir = (e) => Reflect.getPrototypeOf(e);
function ia(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ce(s), o = Ut(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, m = s[e](...r), d = n ? bs : t ? yn : It;
    return !t && Ue(
      i,
      "iterate",
      c ? gs : Jt
    ), ke(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: y, done: N } = m.next();
          return N ? { value: y, done: N } : {
            value: l ? [d(y[0]), d(y[1])] : d(y),
            done: N
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
function oa(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      e || (xt(s, l) && Ue(o, "get", s), Ue(o, "get", l));
      const { has: c } = ir(o), m = t ? bs : e ? yn : It;
      if (c.call(o, s))
        return m(i.get(s));
      if (c.call(o, l))
        return m(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ue(/* @__PURE__ */ ce(s), "iterate", Jt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      return e || (xt(s, l) && Ue(o, "has", s), Ue(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ce(l), m = t ? bs : e ? yn : It;
      return !e && Ue(c, "iterate", Jt), l.forEach((d, y) => s.call(i, m(d), m(y), o));
    }
  };
  return ke(
    n,
    e ? {
      add: or("add"),
      set: or("set"),
      delete: or("delete"),
      clear: or("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ce(this), o = ir(i), l = /* @__PURE__ */ ce(s), c = !t && !/* @__PURE__ */ dt(s) && !/* @__PURE__ */ Ht(s) ? l : s;
        return o.has.call(i, c) || xt(s, c) && o.has.call(i, s) || xt(l, c) && o.has.call(i, l) || (i.add(c), wt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ dt(i) && !/* @__PURE__ */ Ht(i) && (i = /* @__PURE__ */ ce(i));
        const o = /* @__PURE__ */ ce(this), { has: l, get: c } = ir(o);
        let m = l.call(o, s);
        m || (s = /* @__PURE__ */ ce(s), m = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), m ? xt(i, d) && wt(o, "set", s, i) : wt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ce(this), { has: o, get: l } = ir(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ce(s), c = o.call(i, s)), l && l.call(i, s);
        const m = i.delete(s);
        return c && wt(i, "delete", s, void 0), m;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), i = s.size !== 0, o = s.clear();
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
    n[s] = ia(s, e, t);
  }), n;
}
function Ms(e, t) {
  const n = oa(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    le(n, s) && s in r ? n : r,
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
function hn(e) {
  return /* @__PURE__ */ Ht(e) ? e : Ds(
    e,
    !1,
    na,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return Ds(
    e,
    !1,
    sa,
    aa,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return Ds(
    e,
    !0,
    ra,
    ca,
    Po
  );
}
function Ds(e, t, n, r, s) {
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
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function pa(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && fo(e, "__v_skip", !0), e;
}
const It = (e) => ue(e) ? /* @__PURE__ */ hn(e) : e, yn = (e) => ue(e) ? /* @__PURE__ */ ys(e) : e;
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function D(e) {
  return /* @__PURE__ */ qe(e) ? e.value : e;
}
const ha = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ qe(s) && !/* @__PURE__ */ qe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Zt(e) ? e : new Proxy(e, ha);
}
class ma {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new So(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    he !== this)
      return yo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Eo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ga(e, t, n = !1) {
  let r, s;
  return ee(e) ? r = e : (r = e.get, s = e.set), new ma(r, s, n);
}
const lr = {}, mr = /* @__PURE__ */ new WeakMap();
let Gt;
function ba(e, t = !1, n = Gt) {
  if (n) {
    let r = mr.get(n);
    r || mr.set(n, r = []), r.push(e);
  }
}
function ya(e, t, n = fe) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, m = (A) => s ? A : /* @__PURE__ */ dt(A) || s === !1 || s === 0 ? Ct(A, 1) : Ct(A);
  let d, y, N, U, q = !1, k = !1;
  if (/* @__PURE__ */ qe(e) ? (y = () => e.value, q = /* @__PURE__ */ dt(e)) : /* @__PURE__ */ Zt(e) ? (y = () => m(e), q = !0) : G(e) ? (k = !0, q = e.some((A) => /* @__PURE__ */ Zt(A) || /* @__PURE__ */ dt(A)), y = () => e.map((A) => {
    if (/* @__PURE__ */ qe(A))
      return A.value;
    if (/* @__PURE__ */ Zt(A))
      return m(A);
    if (ee(A))
      return c ? c(A, 2) : A();
  })) : ee(e) ? t ? y = c ? () => c(e, 2) : e : y = () => {
    if (N) {
      Rt();
      try {
        N();
      } finally {
        Pt();
      }
    }
    const A = Gt;
    Gt = d;
    try {
      return c ? c(e, 3, [U]) : e(U);
    } finally {
      Gt = A;
    }
  } : y = Tt, t && s) {
    const A = y, Z = s === !0 ? 1 / 0 : s;
    y = () => Ct(A(), Z);
  }
  const X = ql(), F = () => {
    d.stop(), X && X.active && Cs(X.effects, d);
  };
  if (i && t) {
    const A = t;
    t = (...Z) => {
      const oe = A(...Z);
      return F(), oe;
    };
  }
  let J = k ? new Array(e.length).fill(lr) : lr;
  const z = (A) => {
    if (!(!(d.flags & 1) || !d.dirty && !A))
      if (t) {
        const Z = d.run();
        if (A || s || q || (k ? Z.some((oe, re) => xt(oe, J[re])) : xt(Z, J))) {
          N && N();
          const oe = Gt;
          Gt = d;
          try {
            const re = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              J === lr ? void 0 : k && J[0] === lr ? [] : J,
              U
            ];
            J = Z, c ? c(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Gt = oe;
          }
        }
      } else
        d.run();
  };
  return l && l(z), d = new go(y), d.scheduler = o ? () => o(z, !1) : z, U = (A) => ba(A, !1, d), N = d.onStop = () => {
    const A = mr.get(d);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const Z of A) Z();
      mr.delete(d);
    }
  }, t ? r ? z(!0) : J = d.run() : o ? o(z.bind(null, !0), !0) : d.run(), F.pause = d.pause.bind(d), F.resume = d.resume.bind(d), F.stop = F, F;
}
function Ct(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qe(e))
    Ct(e.value, t, n);
  else if (G(e))
    for (let r = 0; r < e.length; r++)
      Ct(e[r], t, n);
  else if (en(e) || Ut(e))
    e.forEach((r) => {
      Ct(r, t, n);
    });
  else if (co(e)) {
    for (const r in e)
      Ct(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ct(e[r], t, n);
  }
  return e;
}
function Gn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Pr(s, t, n);
  }
}
function pt(e, t, n, r) {
  if (ee(e)) {
    const s = Gn(e, t, n, r);
    return s && lo(s) && s.catch((i) => {
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
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || fe;
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
      Rt(), Gn(i, null, 10, [
        e,
        c,
        m
      ]), Pt();
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
const Ke = [];
let bt = -1;
const mn = [];
let Ft = null, fn = 0;
const No = /* @__PURE__ */ Promise.resolve();
let gr = null;
function Mo(e) {
  const t = gr || No;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ta(e) {
  let t = bt + 1, n = Ke.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ke[r], i = Vn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = Vn(e), n = Ke[Ke.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vn(n) ? Ke.push(e) : Ke.splice(Ta(t), 0, e), e.flags |= 1, Do();
  }
}
function Do() {
  gr || (gr = No.then(Fo));
}
function Ea(e) {
  if (!G(e))
    Ft && e.id === -1 ? Ft.splice(fn + 1, 0, e) : e.flags & 1 || (mn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      mn.push(e[t]);
  Do();
}
function di(e, t, n = bt + 1) {
  for (; n < Ke.length; n++) {
    const r = Ke[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Lo(e) {
  if (mn.length) {
    const t = [...new Set(mn)].sort(
      (n, r) => Vn(n) - Vn(r)
    );
    if (mn.length = 0, Ft) {
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
function Fo(e) {
  try {
    for (bt = 0; bt < Ke.length; bt++) {
      const t = Ke[bt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; bt < Ke.length; bt++) {
      const t = Ke[bt];
      t && (t.flags &= -2);
    }
    bt = -1, Ke.length = 0, Lo(), gr = null, (Ke.length || mn.length) && Fo();
  }
}
let lt = null, Uo = null;
function br(e) {
  const t = lt;
  return lt = e, Uo = e && e.type.__scopeId || null, t;
}
function va(e, t = lt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Si(-1);
    const i = br(t), o = Qt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Qt.length; c > o; c--) ll();
      br(i), r._d && Si(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ze(e, t) {
  if (lt === null)
    return e;
  const n = Lr(lt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = fe] = t[s];
    i && (ee(i) && (i = {
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
function Sa(e, t) {
  if (Ge) {
    let n = Ge.provides;
    const r = Ge.parent && Ge.parent.provides;
    r === n && (n = Ge.provides = Object.create(r)), n[e] = t;
  }
}
function dr(e, t, n = !1) {
  const r = Ec();
  if (r || gn) {
    let s = gn ? gn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), xa = () => dr(Aa);
function Qr(e, t, n) {
  return ko(e, t, n);
}
function ko(e, t, n = fe) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = ke({}, n), c = t && r || !t && i !== "post";
  let m;
  if (Wn) {
    if (i === "sync") {
      const U = xa();
      m = U.__watcherHandles || (U.__watcherHandles = []);
    } else if (!c) {
      const U = () => {
      };
      return U.stop = Tt, U.resume = Tt, U.pause = Tt, U;
    }
  }
  const d = Ge;
  l.call = (U, q, k) => pt(U, d, q, k);
  let y = !1;
  i === "post" ? l.scheduler = (U) => {
    Ze(U, d && d.suspense);
  } : i !== "sync" && (y = !0, l.scheduler = (U, q) => {
    q ? U() : Fs(U);
  }), l.augmentJob = (U) => {
    t && (U.flags |= 4), y && (U.flags |= 2, d && (U.id = d.uid, U.i = d));
  };
  const N = ya(e, t, l);
  return Wn && (m ? m.push(N) : c && N()), N;
}
function wa(e, t, n) {
  const r = this.proxy, s = Ae(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ee(t) ? i = t : (i = t.handler, n = t);
  const o = qn(this), l = ko(s, i.bind(r), n);
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
const Ca = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, es = /* @__PURE__ */ Symbol("_leaveCb");
function Oa(e) {
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
function jo(e) {
  if (!ks(e))
    return Ir(e.type) && e.children ? Oa(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function Us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Us(
      Ir(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $o(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yr = /* @__PURE__ */ new WeakMap();
function Fn(e, t, n, r, s = !1) {
  if (G(e)) {
    e.forEach(
      (k, X) => Fn(
        k,
        t && (G(t) ? t[X] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Un(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Fn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Lr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, m = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, y = l.setupState, N = /* @__PURE__ */ ce(y), U = y === fe ? oo : (k) => pi(d, k) ? !1 : le(N, k), q = (k, X) => !(X && pi(d, X));
  if (m != null && m !== c) {
    if (hi(t), Ae(m))
      d[m] = null, U(m) && (y[m] = null);
    else if (/* @__PURE__ */ qe(m)) {
      const k = t;
      q(m, k.k) && (m.value = null), k.k && (d[k.k] = null);
    }
  }
  if (ee(c))
    Gn(c, l, 12, [o, d]);
  else {
    const k = Ae(c), X = /* @__PURE__ */ qe(c);
    if (k || X) {
      const F = () => {
        if (e.f) {
          const J = k ? U(c) ? y[c] : d[c] : q() || !e.k ? c.value : d[e.k];
          if (s)
            G(J) && Cs(J, i);
          else if (G(J))
            J.includes(i) || J.push(i);
          else if (k)
            d[c] = [i], U(c) && (y[c] = d[c]);
          else {
            const z = [i];
            q(c, e.k) && (c.value = z), e.k && (d[e.k] = z);
          }
        } else k ? (d[c] = o, U(c) && (y[c] = o)) : X && (q(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const J = () => {
          F(), yr.delete(e);
        };
        J.id = -1, yr.set(e, J), Ze(J, n);
      } else
        hi(e), F();
    }
  }
}
function hi(e) {
  const t = yr.get(e);
  t && (t.flags |= 8, yr.delete(e));
}
Or().requestIdleCallback;
Or().cancelIdleCallback;
const Un = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Ra(e, t) {
  Vo(e, "a", t);
}
function Pa(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = Ge) {
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
      ks(s.parent.vnode) && Ia(r, t, n, s), s = s.parent;
  }
}
function Ia(e, t, n, r) {
  const s = Nr(
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
function Nr(e, t, n = Ge, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Rt();
      const l = qn(n), c = pt(t, n, e, o);
      return l(), Pt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Mt = (e) => (t, n = Ge) => {
  (!Wn || e === "sp") && Nr(e, (...r) => t(...r), n);
}, Na = Mt("bm"), Ma = Mt("m"), Da = Mt(
  "bu"
), La = Mt("u"), Fa = Mt(
  "bum"
), zo = Mt("um"), Ua = Mt(
  "sp"
), ka = Mt("rtg"), Ha = Mt("rtc");
function ja(e, t = Ge) {
  Nr("ec", e, t);
}
const $a = /* @__PURE__ */ Symbol.for("v-ndc");
function Be(e, t, n, r) {
  let s;
  const i = n, o = G(e);
  if (o || Ae(e)) {
    const l = o && /* @__PURE__ */ Zt(e);
    let c = !1, m = !1;
    l && (c = !/* @__PURE__ */ dt(e), m = /* @__PURE__ */ Ht(e), e = Rr(e)), s = new Array(e.length);
    for (let d = 0, y = e.length; d < y; d++)
      s[d] = t(
        c ? m ? yn(It(e[d])) : It(e[d]) : e[d],
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
const _s = (e) => e ? fl(e) ? Lr(e) : _s(e.parent) : null, kn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => wa.bind(e)
  })
), ts = (e, t) => e !== fe && !e.__isScriptSetup && le(e, t), Va = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const N = o[t];
      if (N !== void 0)
        switch (N) {
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
    const m = kn[t];
    let d, y;
    if (m)
      return t === "$attrs" && Ue(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== fe && le(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = c.config.globalProperties, le(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ts(s, t) ? (s[t] = n, !0) : r !== fe && le(r, t) ? (r[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== fe && l[0] !== "$" && le(e, l) || ts(t, l) || le(i, l) || le(r, l) || le(kn, l) || le(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
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
    beforeMount: y,
    mounted: N,
    beforeUpdate: U,
    updated: q,
    activated: k,
    deactivated: X,
    beforeDestroy: F,
    beforeUnmount: J,
    destroyed: z,
    unmounted: A,
    render: Z,
    renderTracked: oe,
    renderTriggered: re,
    errorCaptured: te,
    serverPrefetch: ae,
    // public API
    expose: _e,
    inheritAttrs: Le,
    // assets
    components: Ie,
    directives: we,
    filters: at
  } = t;
  if (m && Ba(m, r, null), o)
    for (const B in o) {
      const C = o[B];
      ee(C) && (r[B] = C.bind(n));
    }
  if (s) {
    const B = s.call(n, n);
    ue(B) && (e.data = /* @__PURE__ */ hn(B));
  }
  if (Ts = !0, i)
    for (const B in i) {
      const C = i[B], h = ee(C) ? C.bind(n, n) : ee(C.get) ? C.get.bind(n, n) : Tt, ge = !ee(C) && ee(C.set) ? C.set.bind(n) : Tt, je = Ce({
        get: h,
        set: ge
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (it) => je.value = it
      });
    }
  if (l)
    for (const B in l)
      Bo(l[B], r, n, B);
  if (c) {
    const B = ee(c) ? c.call(n) : c;
    Reflect.ownKeys(B).forEach((C) => {
      Sa(C, B[C]);
    });
  }
  d && gi(d, e, "c");
  function Te(B, C) {
    G(C) ? C.forEach((h) => B(h.bind(n))) : C && B(C.bind(n));
  }
  if (Te(Na, y), Te(Ma, N), Te(Da, U), Te(La, q), Te(Ra, k), Te(Pa, X), Te(ja, te), Te(Ha, oe), Te(ka, re), Te(Fa, J), Te(zo, A), Te(Ua, ae), G(_e))
    if (_e.length) {
      const B = e.exposed || (e.exposed = {});
      _e.forEach((C) => {
        Object.defineProperty(B, C, {
          get: () => n[C],
          set: (h) => n[C] = h,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === Tt && (e.render = Z), Le != null && (e.inheritAttrs = Le), Ie && (e.components = Ie), we && (e.directives = we), ae && $o(e);
}
function Ba(e, t, n = Tt) {
  G(e) && (e = Es(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ue(s) ? "default" in s ? i = dr(
      s.from || r,
      s.default,
      !0
    ) : i = dr(s.from || r) : i = dr(s), /* @__PURE__ */ qe(i) ? Object.defineProperty(t, r, {
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
function Bo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (Ae(e)) {
    const i = t[e];
    ee(i) && Qr(s, i);
  } else if (ee(e))
    Qr(s, e.bind(n));
  else if (ue(e))
    if (G(e))
      e.forEach((i) => Bo(i, t, n, r));
    else {
      const i = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(i) && Qr(s, i, e);
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
    (m) => _r(c, m, o, !0)
  ), _r(c, t, o)), ue(t) && i.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, n, !0), s && s.forEach(
    (o) => _r(e, o, n, !0)
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
  methods: Pn,
  computed: Pn,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: Pn,
  directives: Pn,
  // watch
  watch: Ga,
  // provide / inject
  provide: bi,
  inject: Ka
};
function bi(e, t) {
  return t ? e ? function() {
    return ke(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ka(e, t) {
  return Pn(Es(e), Es(t));
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
function We(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pn(e, t) {
  return e ? ke(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yi(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ke(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ke(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = We(e[r], t[r]);
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
    ee(r) || (r = ke({}, r)), s != null && !ue(s) && (s = null);
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
      use(d, ...y) {
        return o.has(d) || (d && ee(d.install) ? (o.add(d), d.install(m, ...y)) : ee(d) && (o.add(d), d(m, ...y))), m;
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
      mount(d, y, N) {
        if (!c) {
          const U = m._ceVNode || Ot(r, s);
          return U.appContext = i, N === !0 ? N = "svg" : N === !1 && (N = void 0), e(U, d, N), c = !0, m._container = d, d.__vue_app__ = m, Lr(U.component);
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
        const y = gn;
        gn = m;
        try {
          return d();
        } finally {
          gn = y;
        }
      }
    };
    return m;
  };
}
let gn = null;
const Xa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ut(t)}Modifiers`] || e[`${tn(t)}Modifiers`];
function Ja(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || fe;
  let s = n;
  const i = t.startsWith("update:"), o = i && Xa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => Ae(d) ? d.trim() : d)), o.number && (s = s.map(Cr)));
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
const Za = /* @__PURE__ */ new WeakMap();
function Go(e, t, n = !1) {
  const r = n ? Za : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const c = (m) => {
      const d = Go(m, t, !0);
      d && (l = !0, ke(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (ue(e) && r.set(e, null), null) : (G(i) ? i.forEach((c) => o[c] = null) : ke(o, i), ue(e) && r.set(e, o), o);
}
function Mr(e, t) {
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
    data: N,
    setupState: U,
    ctx: q,
    inheritAttrs: k
  } = e, X = br(e);
  let F, J;
  try {
    if (n.shapeFlag & 4) {
      const A = s || r, Z = A;
      F = _t(
        m.call(
          Z,
          A,
          d,
          y,
          U,
          N,
          q
        )
      ), J = l;
    } else {
      const A = t;
      F = _t(
        A.length > 1 ? A(
          y,
          { attrs: l, slots: o, emit: c }
        ) : A(
          y,
          null
        )
      ), J = t.props ? l : Qa(l);
    }
  } catch (A) {
    Qt.length = 0, Pr(A, e, 1), F = Ot(Nt);
  }
  let z = F;
  if (J && k !== !1) {
    const A = Object.keys(J), { shapeFlag: Z } = z;
    A.length && Z & 7 && (i && A.some(xr) && (J = ec(
      J,
      i
    )), z = _n(z, J, !1, !0));
  }
  if (n.dirs && (z = _n(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const A = Ir(z.type) && jo(z) || z;
    Us(A, n.transition);
  }
  return F = z, br(X), F;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ar(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const r in e)
    (!xr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
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
      for (let y = 0; y < d.length; y++) {
        const N = d[y];
        if (qo(o, r, N) && !Mr(m, N))
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
    if (qo(t, e, i) && !Mr(n, i))
      return !0;
  }
  return !1;
}
function qo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && ue(r) && ue(s) ? !kt(r, s) : r !== s;
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
      for (let y = 0; y < d.length; y++) {
        let N = d[y];
        if (Mr(e.emitsOptions, N))
          continue;
        const U = t[N];
        if (c)
          if (le(i, N))
            U !== i[N] && (i[N] = U, m = !0);
          else {
            const q = ut(N);
            s[q] = vs(
              c,
              l,
              q,
              U,
              e,
              !1
            );
          }
        else
          U !== i[N] && (i[N] = U, m = !0);
      }
    }
  } else {
    Zo(e, t, s, i) && (m = !0);
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
function Zo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Mn(c))
        continue;
      const m = t[c];
      let d;
      s && le(s, d = ut(c)) ? !i || !i.includes(d) ? n[d] = m : (l || (l = {}))[d] = m : Mr(e.emitsOptions, c) || (!(c in r) || m !== r[c]) && (r[c] = m, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ce(n), m = l || fe;
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
      if (o.type !== Function && !o.skipFactory && ee(c)) {
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
const ic = /* @__PURE__ */ new WeakMap();
function Qo(e, t, n = !1) {
  const r = n ? ic : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!ee(e)) {
    const d = (y) => {
      c = !0;
      const [N, U] = Qo(y, t, !0);
      ke(o, N), U && l.push(...U);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return ue(e) && r.set(e, pn), pn;
  if (G(i))
    for (let d = 0; d < i.length; d++) {
      const y = ut(i[d]);
      Ei(y) && (o[y] = fe);
    }
  else if (i)
    for (const d in i) {
      const y = ut(d);
      if (Ei(y)) {
        const N = i[d], U = o[y] = G(N) || ee(N) ? { type: N } : ke({}, N), q = U.type;
        let k = !1, X = !0;
        if (G(q))
          for (let F = 0; F < q.length; ++F) {
            const J = q[F], z = ee(J) && J.name;
            if (z === "Boolean") {
              k = !0;
              break;
            } else z === "String" && (X = !1);
          }
        else
          k = ee(q) && q.name === "Boolean";
        U[
          0
          /* shouldCast */
        ] = k, U[
          1
          /* shouldCastTrue */
        ] = X, (k || le(U, "default")) && l.push(y);
      }
    }
  const m = [o, l];
  return ue(e) && r.set(e, m), m;
}
function Ei(e) {
  return e[0] !== "$" && !Mn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => G(e) ? e.map(_t) : [_t(e)], oc = (e, t, n) => {
  if (t._n)
    return t;
  const r = va((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, el = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (ee(i))
      t[s] = oc(s, i, r);
    else if (i != null) {
      const o = js(i);
      t[s] = () => o;
    }
  }
}, tl = (e, t) => {
  const n = js(t);
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
}, Ze = pc;
function cc(e) {
  return uc(e);
}
function uc(e, t) {
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
    nextSibling: N,
    setScopeId: U = Tt,
    insertStaticContent: q
  } = e, k = (u, f, g, x = null, b = null, v = null, R = void 0, P = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !wn(u, f) && (x = nn(u), it(u, b, v, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: _, ref: W, shapeFlag: M } = f;
    switch (_) {
      case Dr:
        X(u, f, g, x);
        break;
      case Nt:
        F(u, f, g, x);
        break;
      case rs:
        u == null && J(f, g, x, R);
        break;
      case ye:
        Ie(
          u,
          f,
          g,
          x,
          b,
          v,
          R,
          P,
          I
        );
        break;
      default:
        M & 1 ? Z(
          u,
          f,
          g,
          x,
          b,
          v,
          R,
          P,
          I
        ) : M & 6 ? we(
          u,
          f,
          g,
          x,
          b,
          v,
          R,
          P,
          I
        ) : (M & 64 || M & 128) && _.process(
          u,
          f,
          g,
          x,
          b,
          v,
          R,
          P,
          I,
          $t
        );
    }
    W != null && b ? Fn(W, u && u.ref, v, f || u, !f) : W == null && u && u.ref != null && Fn(u.ref, null, v, u, !0);
  }, X = (u, f, g, x) => {
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
  }, F = (u, f, g, x) => {
    u == null ? r(
      f.el = c(f.children || ""),
      g,
      x
    ) : f.el = u.el;
  }, J = (u, f, g, x) => {
    [u.el, u.anchor] = q(
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
      b = N(u), r(u, g, x), u = b;
    r(f, g, x);
  }, A = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = N(u), s(u), u = g;
    s(f);
  }, Z = (u, f, g, x, b, v, R, P, I) => {
    if (f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), u == null)
      oe(
        f,
        g,
        x,
        b,
        v,
        R,
        P,
        I
      );
    else {
      const _ = u.el && u.el._isVueCE ? u.el : null;
      try {
        _ && _._beginPatch(), ae(
          u,
          f,
          b,
          v,
          R,
          P,
          I
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, oe = (u, f, g, x, b, v, R, P) => {
    let I, _;
    const { props: W, shapeFlag: M, transition: $, dirs: K } = u;
    if (I = u.el = o(
      u.type,
      v,
      W && W.is,
      W
    ), M & 8 ? d(I, u.children) : M & 16 && te(
      u.children,
      I,
      null,
      x,
      b,
      ns(u, v),
      R,
      P
    ), K && Bt(u, null, x, "created"), re(I, u, u.scopeId, R, x), W) {
      for (const se in W)
        se !== "value" && !Mn(se) && i(I, se, null, W[se], v, x);
      "value" in W && i(I, "value", null, W.value, v), (_ = W.onVnodeBeforeMount) && gt(_, x, u);
    }
    K && Bt(u, null, x, "beforeMount");
    const Q = fc(b, $);
    Q && $.beforeEnter(I), r(I, f, g), ((_ = W && W.onVnodeMounted) || Q || K) && Ze(() => {
      _ && gt(_, x, u), Q && $.enter(I), K && Bt(u, null, x, "mounted");
    }, b);
  }, re = (u, f, g, x, b) => {
    if (g && U(u, g), x)
      for (let v = 0; v < x.length; v++)
        U(u, x[v]);
    if (b) {
      let v = b.subTree;
      if (f === v || ol(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const R = b.vnode;
        re(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          b.parent
        );
      }
    }
  }, te = (u, f, g, x, b, v, R, P, I = 0) => {
    for (let _ = I; _ < u.length; _++) {
      const W = u[_] = P ? At(u[_]) : _t(u[_]);
      k(
        null,
        W,
        f,
        g,
        x,
        b,
        v,
        R,
        P
      );
    }
  }, ae = (u, f, g, x, b, v, R) => {
    const P = f.el = u.el;
    let { patchFlag: I, dynamicChildren: _, dirs: W } = f;
    I |= u.patchFlag & 16;
    const M = u.props || fe, $ = f.props || fe;
    let K;
    if (g && Wt(g, !1), (K = $.onVnodeBeforeUpdate) && gt(K, g, f, u), W && Bt(f, u, g, "beforeUpdate"), g && Wt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!u.dynamicChildren || u.dynamicChildren.length !== _.length) && (I = 0, R = !1, _ = null), (M.innerHTML && $.innerHTML == null || M.textContent && $.textContent == null) && d(P, ""), _ ? _e(
      u.dynamicChildren,
      _,
      P,
      g,
      x,
      ns(f, b),
      v
    ) : R || C(
      u,
      f,
      P,
      null,
      g,
      x,
      ns(f, b),
      v,
      !1
    ), I > 0) {
      if (I & 16)
        Le(P, M, $, g, b);
      else if (I & 2 && M.class !== $.class && i(P, "class", null, $.class, b), I & 4 && i(P, "style", M.style, $.style, b), I & 8) {
        const Q = f.dynamicProps;
        for (let se = 0; se < Q.length; se++) {
          const ne = Q[se], be = M[ne], ve = $[ne];
          (ve !== be || ne === "value") && i(P, ne, be, ve, b, g);
        }
      }
      I & 1 && u.children !== f.children && d(P, f.children);
    } else !R && _ == null && Le(P, M, $, g, b);
    ((K = $.onVnodeUpdated) || W) && Ze(() => {
      K && gt(K, g, f, u), W && Bt(f, u, g, "updated");
    }, x);
  }, _e = (u, f, g, x, b, v, R) => {
    for (let P = 0; P < f.length; P++) {
      const I = u[P], _ = f[P], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wn(I, _) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? y(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      k(
        I,
        _,
        W,
        null,
        x,
        b,
        v,
        R,
        !0
      );
    }
  }, Le = (u, f, g, x, b) => {
    if (f !== g) {
      if (f !== fe)
        for (const v in f)
          !Mn(v) && !(v in g) && i(
            u,
            v,
            f[v],
            null,
            b,
            x
          );
      for (const v in g) {
        if (Mn(v)) continue;
        const R = g[v], P = f[v];
        R !== P && v !== "value" && i(u, v, P, R, b, x);
      }
      "value" in g && i(u, "value", f.value, g.value, b);
    }
  }, Ie = (u, f, g, x, b, v, R, P, I) => {
    const _ = f.el = u ? u.el : l(""), W = f.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: $, slotScopeIds: K } = f;
    K && (P = P ? P.concat(K) : K), u == null ? (r(_, g, x), r(W, g, x), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      W,
      b,
      v,
      R,
      P,
      I
    )) : M > 0 && M & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === $.length ? (_e(
      u.dynamicChildren,
      $,
      g,
      b,
      v,
      R,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && rl(
      u,
      f,
      !0
      /* shallow */
    )) : C(
      u,
      f,
      g,
      W,
      b,
      v,
      R,
      P,
      I
    );
  }, we = (u, f, g, x, b, v, R, P, I) => {
    f.slotScopeIds = P, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      g,
      x,
      R,
      I
    ) : at(
      f,
      g,
      x,
      b,
      v,
      R,
      I
    ) : He(u, f, I);
  }, at = (u, f, g, x, b, v, R) => {
    const P = u.component = Tc(
      u,
      x,
      b
    );
    if (ks(u) && (P.ctx.renderer = $t), vc(P, !1, R), P.asyncDep) {
      if (b && b.registerDep(P, Te, R), !u.el) {
        const I = P.subTree = Ot(Nt);
        F(null, I, f, g), u.placeholder = I.el;
      }
    } else
      Te(
        P,
        u,
        f,
        g,
        b,
        v,
        R
      );
  }, He = (u, f, g) => {
    const x = f.component = u.component;
    if (tc(u, f, g))
      if (x.asyncDep && !x.asyncResolved) {
        B(x, f, g);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = u.el, x.vnode = f;
  }, Te = (u, f, g, x, b, v, R) => {
    const P = () => {
      if (u.isMounted) {
        let { next: M, bu: $, u: K, parent: Q, vnode: se } = u;
        {
          const Ye = sl(u);
          if (Ye) {
            M && (M.el = se.el, B(u, M, R)), Ye.asyncDep.then(() => {
              Ze(() => {
                u.isUnmounted || _();
              }, b);
            });
            return;
          }
        }
        let ne = M, be;
        Wt(u, !1), M ? (M.el = se.el, B(u, M, R)) : M = se, $ && fr($), (be = M.props && M.props.onVnodeBeforeUpdate) && gt(be, Q, M, se), Wt(u, !0);
        const ve = _i(u), $e = u.subTree;
        u.subTree = ve, k(
          $e,
          ve,
          // parent may have changed if it's in a teleport
          y($e.el),
          // anchor may have changed if it's in a fragment
          nn($e),
          u,
          b,
          v
        ), M.el = ve.el, ne === null && nc(u, ve.el), K && Ze(K, b), (be = M.props && M.props.onVnodeUpdated) && Ze(
          () => gt(be, Q, M, se),
          b
        );
      } else {
        let M;
        const { el: $, props: K } = f, { bm: Q, m: se, parent: ne, root: be, type: ve } = u, $e = Un(f);
        Wt(u, !1), Q && fr(Q), !$e && (M = K && K.onVnodeBeforeMount) && gt(M, ne, f), Wt(u, !0);
        {
          be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(
            ve,
            u.parent ? u.parent.type : void 0
          );
          const Ye = u.subTree = _i(u);
          k(
            null,
            Ye,
            g,
            x,
            u,
            b,
            v
          ), f.el = Ye.el;
        }
        if (se && Ze(se, b), !$e && (M = K && K.onVnodeMounted)) {
          const Ye = f;
          Ze(
            () => gt(M, ne, Ye),
            b
          );
        }
        (f.shapeFlag & 256 || ne && Un(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && Ze(u.a, b), u.isMounted = !0, f = g = x = null;
      }
    };
    u.scope.on();
    const I = u.effect = new go(P);
    u.scope.off();
    const _ = u.update = I.run.bind(I), W = u.job = I.runIfDirty.bind(I);
    W.i = u, W.id = u.uid, I.scheduler = () => Fs(W), Wt(u, !0), _();
  }, B = (u, f, g) => {
    f.component = u;
    const x = u.vnode.props;
    u.vnode = f, u.next = null, sc(u, f.props, x, g), ac(u, f.children, g), Rt(), di(u), Pt();
  }, C = (u, f, g, x, b, v, R, P, I = !1) => {
    const _ = u && u.children, W = u ? u.shapeFlag : 0, M = f.children, { patchFlag: $, shapeFlag: K } = f;
    if ($ > 0) {
      if ($ & 128) {
        ge(
          _,
          M,
          g,
          x,
          b,
          v,
          R,
          P,
          I
        );
        return;
      } else if ($ & 256) {
        h(
          _,
          M,
          g,
          x,
          b,
          v,
          R,
          P,
          I
        );
        return;
      }
    }
    K & 8 ? (W & 16 && jt(_, b, v), M !== _ && d(g, M)) : W & 16 ? K & 16 ? ge(
      _,
      M,
      g,
      x,
      b,
      v,
      R,
      P,
      I
    ) : jt(_, b, v, !0) : (W & 8 && d(g, ""), K & 16 && te(
      M,
      g,
      x,
      b,
      v,
      R,
      P,
      I
    ));
  }, h = (u, f, g, x, b, v, R, P, I) => {
    u = u || pn, f = f || pn;
    const _ = u.length, W = f.length, M = Math.min(_, W);
    let $;
    for ($ = 0; $ < M; $++) {
      const K = f[$] = I ? At(f[$]) : _t(f[$]);
      k(
        u[$],
        K,
        g,
        null,
        b,
        v,
        R,
        P,
        I
      );
    }
    _ > W ? jt(
      u,
      b,
      v,
      !0,
      !1,
      M
    ) : te(
      f,
      g,
      x,
      b,
      v,
      R,
      P,
      I,
      M
    );
  }, ge = (u, f, g, x, b, v, R, P, I) => {
    let _ = 0;
    const W = f.length;
    let M = u.length - 1, $ = W - 1;
    for (; _ <= M && _ <= $; ) {
      const K = u[_], Q = f[_] = I ? At(f[_]) : _t(f[_]);
      if (wn(K, Q))
        k(
          K,
          Q,
          g,
          null,
          b,
          v,
          R,
          P,
          I
        );
      else
        break;
      _++;
    }
    for (; _ <= M && _ <= $; ) {
      const K = u[M], Q = f[$] = I ? At(f[$]) : _t(f[$]);
      if (wn(K, Q))
        k(
          K,
          Q,
          g,
          null,
          b,
          v,
          R,
          P,
          I
        );
      else
        break;
      M--, $--;
    }
    if (_ > M) {
      if (_ <= $) {
        const K = $ + 1, Q = K < W ? f[K].el : x;
        for (; _ <= $; )
          k(
            null,
            f[_] = I ? At(f[_]) : _t(f[_]),
            g,
            Q,
            b,
            v,
            R,
            P,
            I
          ), _++;
      }
    } else if (_ > $)
      for (; _ <= M; )
        it(u[_], b, v, !0), _++;
    else {
      const K = _, Q = _, se = /* @__PURE__ */ new Map();
      for (_ = Q; _ <= $; _++) {
        const Ne = f[_] = I ? At(f[_]) : _t(f[_]);
        Ne.key != null && se.set(Ne.key, _);
      }
      let ne, be = 0;
      const ve = $ - Q + 1;
      let $e = !1, Ye = 0;
      const ot = new Array(ve);
      for (_ = 0; _ < ve; _++) ot[_] = 0;
      for (_ = K; _ <= M; _++) {
        const Ne = u[_];
        if (be >= ve) {
          it(Ne, b, v, !0);
          continue;
        }
        let et;
        if (Ne.key != null)
          et = se.get(Ne.key);
        else
          for (ne = Q; ne <= $; ne++)
            if (ot[ne - Q] === 0 && wn(Ne, f[ne])) {
              et = ne;
              break;
            }
        et === void 0 ? it(Ne, b, v, !0) : (ot[et - Q] = _ + 1, et >= Ye ? Ye = et : $e = !0, k(
          Ne,
          f[et],
          g,
          null,
          b,
          v,
          R,
          P,
          I
        ), be++);
      }
      const Vt = $e ? dc(ot) : pn;
      for (ne = Vt.length - 1, _ = ve - 1; _ >= 0; _--) {
        const Ne = Q + _, et = f[Ne], En = f[Ne + 1], vn = Ne + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          En.el || il(En)
        ) : x;
        ot[_] === 0 ? k(
          null,
          et,
          g,
          vn,
          b,
          v,
          R,
          P,
          I
        ) : $e && (ne < 0 || _ !== Vt[ne] ? je(et, g, vn, 2) : ne--);
      }
    }
  }, je = (u, f, g, x, b = null) => {
    const { el: v, type: R, transition: P, children: I, shapeFlag: _ } = u;
    if (_ & 6) {
      je(u.component.subTree, f, g, x);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, g, x);
      return;
    }
    if (_ & 64) {
      R.move(u, f, g, $t);
      return;
    }
    if (R === ye) {
      r(v, f, g);
      for (let M = 0; M < I.length; M++)
        je(I[M], f, g, x);
      r(u.anchor, f, g);
      return;
    }
    if (R === rs) {
      z(u, f, g);
      return;
    }
    if (x !== 2 && _ & 1 && P)
      if (x === 0)
        P.persisted && !v[es] ? r(v, f, g) : (P.beforeEnter(v), r(v, f, g), Ze(() => P.enter(v), b));
      else {
        const { leave: M, delayLeave: $, afterLeave: K } = P, Q = () => {
          u.ctx.isUnmounted ? s(v) : r(v, f, g);
        }, se = () => {
          const ne = v._isLeaving || !!v[es];
          v._isLeaving && v[es](
            !0
            /* cancelled */
          ), P.persisted && !ne ? Q() : M(v, () => {
            Q(), K && K();
          });
        };
        $ ? $(v, Q, se) : se();
      }
    else
      r(v, f, g);
  }, it = (u, f, g, x = !1, b = !1) => {
    const {
      type: v,
      props: R,
      ref: P,
      children: I,
      dynamicChildren: _,
      shapeFlag: W,
      patchFlag: M,
      dirs: $,
      cacheIndex: K,
      memo: Q
    } = u;
    if (M === -2 && (b = !1), P != null && (Rt(), Fn(P, null, g, u, !0), Pt()), K != null && (f.renderCache[K] = void 0), W & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const se = W & 1 && $, ne = !Un(u);
    let be;
    if (ne && (be = R && R.onVnodeBeforeUnmount) && gt(be, f, u), W & 6)
      Fr(u.component, g, x);
    else {
      if (W & 128) {
        u.suspense.unmount(g, x);
        return;
      }
      se && Bt(u, null, f, "beforeUnmount"), W & 64 ? u.type.remove(
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
      (v !== ye || M > 0 && M & 64) ? jt(
        _,
        f,
        g,
        !1,
        !0
      ) : (v === ye && M & 384 || !b && W & 16) && jt(I, f, g), x && Yn(u);
    }
    const ve = Q != null && K == null;
    (ne && (be = R && R.onVnodeUnmounted) || se || ve) && Ze(() => {
      be && gt(be, f, u), se && Bt(u, null, f, "unmounted"), ve && (u.el = null);
    }, g);
  }, Yn = (u) => {
    const { type: f, el: g, anchor: x, transition: b } = u;
    if (f === ye) {
      de(g, x);
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
      const { leave: R, delayLeave: P } = b, I = () => R(g, v);
      P ? P(u.el, v, I) : I();
    } else
      v();
  }, de = (u, f) => {
    let g;
    for (; u !== f; )
      g = N(u), s(u), u = g;
    s(f);
  }, Fr = (u, f, g) => {
    const { bum: x, scope: b, job: v, subTree: R, um: P, m: I, a: _ } = u;
    vi(I), vi(_), x && fr(x), b.stop(), v && (v.flags |= 8, it(R, u, f, g)), P && Ze(P, f), Ze(() => {
      u.isUnmounted = !0;
    }, f);
  }, jt = (u, f, g, x = !1, b = !1, v = 0) => {
    for (let R = v; R < u.length; R++)
      it(u[R], f, g, x, b);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = N(u.anchor || u.el), g = f && f[Ca];
    return g ? N(g) : f;
  };
  let Tn = !1;
  const Xn = (u, f, g) => {
    let x;
    u == null ? f._vnode && (it(f._vnode, null, null, !0), x = f._vnode.component) : k(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, Tn || (Tn = !0, di(x), Lo(), Tn = !1);
  }, $t = {
    p: k,
    um: it,
    m: je,
    r: Yn,
    mt: at,
    mc: te,
    pc: C,
    pbc: _e,
    n: nn,
    o: e
  };
  return {
    render: Xn,
    hydrate: void 0,
    createApp: Ya(Xn)
  };
}
function ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (G(r) && G(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = At(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && rl(o, l)), l.type === Dr && (l.patchFlag === -1 && (l = s[i] = At(l)), l.el = o.el), l.type === Nt && !l.el && (l.el = o.el);
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
function vi(e) {
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
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Ea(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Dr = /* @__PURE__ */ Symbol.for("v-txt"), Nt = /* @__PURE__ */ Symbol.for("v-cmt"), rs = /* @__PURE__ */ Symbol.for("v-stc"), Qt = [];
let st = null;
function j(e = !1) {
  Qt.push(st = e ? null : []);
}
function ll() {
  Qt.pop(), st = Qt[Qt.length - 1] || null;
}
let zn = 1;
function Si(e, t = !1) {
  zn += e, e < 0 && st && t && (st.hasOnce = !0);
}
function al(e) {
  return e.dynamicChildren = zn > 0 ? st || pn : null, ll(), zn > 0 && st && st.push(e), e;
}
function V(e, t, n, r, s, i) {
  return al(
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
function hc(e, t, n, r, s) {
  return al(
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
function cl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ul = ({ key: e }) => e ?? null, pr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ae(e) || /* @__PURE__ */ qe(e) || ee(e) ? { i: lt, r: e, k: t, f: !!n } : e : null);
function E(e, t = null, n = null, r = 0, s = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ul(t),
    ref: t && pr(t),
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
    ctx: lt
  };
  return l ? (Tr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ae(n) ? 8 : 16), zn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  st && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && st.push(c), c;
}
const Ot = mc;
function mc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === $a) && (e = Nt), cl(e)) {
    const l = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tr(l, n), zn > 0 && !i && st && (l.shapeFlag & 6 ? st[st.indexOf(e)] = l : st.push(l)), l.patchFlag = -2, l;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: l, style: c } = t;
    l && !Ae(l) && (t.class = Hn(l)), ue(c) && (/* @__PURE__ */ Ls(c) && !G(c) && (c = ke({}, c)), t.style = Rs(c));
  }
  const o = Ae(e) ? 1 : ol(e) ? 128 : Ir(e) ? 64 : ue(e) ? 4 : ee(e) ? 2 : 0;
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
function gc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Jo(e) ? ke({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
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
    ssContent: e.ssContent && _n(e.ssContent),
    ssFallback: e.ssFallback && _n(e.ssFallback),
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
function Se(e = " ", t = 0) {
  return Ot(Dr, null, e, t);
}
function Re(e = "", t = !1) {
  return t ? (j(), hc(Nt, null, e)) : Ot(Nt, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? Ot(Nt) : G(e) ? Ot(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cl(e) ? At(e) : Ot(Dr, null, String(e));
}
function At(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
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
      !s && !Jo(t) ? t._ctx = lt : s === 3 && lt && (lt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (r & 65) {
      Tr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: lt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Se(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Hn([t.class, r.class]));
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
let Ge = null;
const Ec = () => Ge || lt;
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
    (n) => Ge = n
  ), Bn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wn = n
  );
}
const qn = (e) => {
  const t = Ge;
  return Er(e), e.scope.on(), () => {
    e.scope.off(), Er(t);
  };
}, Ai = () => {
  Ge && Ge.scope.off(), Er(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Wn = !1;
function vc(e, t = !1, n = !1) {
  t && Bn(t);
  const { props: r, children: s } = e.vnode, i = fl(e);
  rc(e, r, i, t), lc(e, s, n || t);
  const o = i ? Sc(e, t) : void 0;
  return t && Bn(!1), o;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Va);
  const { setup: r } = n;
  if (r) {
    Rt();
    const s = e.setupContext = r.length > 1 ? xc(e) : null, i = qn(e), o = Gn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = lo(o);
    if (Pt(), i(), (l || e.sp) && !Un(e) && $o(e), l) {
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
    dl(e);
}
function xi(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = Io(t)), dl(e);
}
function dl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Tt);
  {
    const s = qn(e);
    Rt();
    try {
      za(e);
    } finally {
      Pt(), s();
    }
  }
}
const Ac = {
  get(e, t) {
    return Ue(e, "get", ""), e[t];
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
function Lr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(pa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in kn)
        return kn[n](e);
    },
    has(t, n) {
      return n in t || n in kn;
    }
  })) : e.proxy;
}
function wc(e) {
  return ee(e) && "__vccOpts" in e;
}
const Ce = (e, t) => /* @__PURE__ */ ga(e, t, Wn), Cc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Oc = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Ci = St && /* @__PURE__ */ St.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? St.createElementNS(Oc, e) : t === "mathml" ? St.createElementNS(Rc, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
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
}, Ic = /* @__PURE__ */ Symbol("_vtc");
function Nc(e, t, n) {
  const r = e[Ic];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Mc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function Fc(e, t, n) {
  const r = e.style, s = Ae(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Ae(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && In(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && In(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? kc(
        e,
        o,
        !Ae(t) && t ? t[o] : void 0,
        l
      ) || In(r, o, l) : In(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Dc];
      o && (n += ";" + o), r.cssText = n, i = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Mc] && (r.display = "none"));
}
const ar = /\s*!important$/;
function In(e, t, n) {
  if (G(n))
    n.forEach((r) => In(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ar.test(n) ? e.setProperty(t, n.replace(ar, ""), "important") : e.setProperty(t, n);
  else {
    const r = Uc(e, t);
    ar.test(n) ? e.setProperty(
      tn(r),
      n.replace(ar, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], ss = {};
function Uc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let r = ut(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ae(r) && n === r;
}
const Pi = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, r, s, i = Bl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n) : n == null || i && !po(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Et(n) ? String(n) : n
  );
}
function Ni(e, t, n, r, s) {
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
function Yt(e, t, n, r) {
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
      const m = i[t] = Kc(
        r,
        s
      );
      Yt(e, l, m, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
  }
}
const $c = /(Once|Passive|Capture)$/, Vc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match($c)) && !Vc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
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
  return n.value = e, n.attached = Wc(), n;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Nc(e, r, o) : t === "style" ? Fc(e, n, r) : Ar(t) ? xr(t) || jc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, r, o)) ? (Ni(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ii(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ae(r))) ? Ni(e, ut(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ii(e, t, r, o));
};
function qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Di(t) && Ae(n) ? !1 : t in e;
}
function Yc(e, t) {
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
function Xc(e) {
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
    }), t || (Yt(e, "compositionstart", Xc), Yt(e, "compositionend", Li), Yt(e, "change", Li));
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
}, tt = {
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
        Mo(() => {
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
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Jc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Jc(e, t, n) {
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
          c === "string" || c === "number" ? o.selected = t.some((m) => String(m) === String(l)) : o.selected = Kl(t, l) > -1;
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
}, eu = /* @__PURE__ */ ke({ patchProp: Gc }, Pc);
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
    !ee(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return Ae(e) ? document.querySelector(e) : e;
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
    if (typeof e == "string") return ji(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ji(e, t) : void 0;
  }
}
const hl = Object.entries, $i = Object.setPrototypeOf, fu = Object.isFrozen, du = Object.getPrototypeOf, pu = Object.getOwnPropertyDescriptor;
let Pe = Object.freeze, Me = Object.seal, dn = Object.create, ml = typeof Reflect < "u" && Reflect, As = ml.apply, xs = ml.construct;
Pe || (Pe = function(t) {
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
const qt = Oe(Array.prototype.forEach), hu = Oe(Array.prototype.lastIndexOf), Vi = Oe(Array.prototype.pop), Cn = Oe(Array.prototype.push), mu = Oe(Array.prototype.splice), bn = Array.isArray, Nn = Oe(String.prototype.toLowerCase), ls = Oe(String.prototype.toString), zi = Oe(String.prototype.match), On = Oe(String.prototype.replace), Bi = Oe(String.prototype.indexOf), gu = Oe(String.prototype.trim), bu = Oe(Number.prototype.toString), yu = Oe(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : Oe(BigInt.prototype.toString), Ki = typeof Symbol > "u" ? null : Oe(Symbol.prototype.toString), Qe = Oe(Object.prototype.hasOwnProperty), Rn = Oe(Object.prototype.toString), Fe = Oe(RegExp.prototype.test), Kt = _u(TypeError);
function Oe(e) {
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
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nn;
  if ($i && $i(e, null), !bn(t))
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
    Qe(e, t) || (e[t] = null);
  return e;
}
function rt(e) {
  const t = dn(null);
  for (const r of hl(e)) {
    var n = cu(r, 2);
    const s = n[0], i = n[1];
    Qe(e, s) && (bn(i) ? t[s] = Tu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = rt(i) : t[s] = i);
  }
  return t;
}
function Eu(e) {
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
      return Rn(e);
    case "function":
    case "object": {
      if (e === null)
        return Rn(e);
      const t = e, n = ct(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Rn(r);
      }
      return Rn(e);
    }
    default:
      return Rn(e);
  }
}
function ct(e, t) {
  for (; e !== null; ) {
    const r = pu(e, t);
    if (r) {
      if (r.get)
        return Oe(r.get);
      if (typeof r.value == "function")
        return Oe(r.value);
    }
    e = du(e);
  }
  function n() {
    return null;
  }
  return n;
}
function vu(e) {
  try {
    return Fe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gi = Pe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), as = Pe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cs = Pe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Su = Pe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), us = Pe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Au = Pe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qi = Pe(["#text"]), Yi = Pe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fs = Pe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xi = Pe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ur = Pe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xu = Me(/{{[\w\W]*|^[\w\W]*}}/g), wu = Me(/<%[\w\W]*|^[\w\W]*%>/g), Cu = Me(/\${[\w\W]*/g), Ou = Me(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ru = Me(/^aria-[\-\w]+$/), Ji = Me(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pu = Me(/^(?:\w+script|data):/i), Iu = Me(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Nu = Me(/^html$/i), Mu = Me(/^[a-z][.\w]*(-[.\w]+)+$/i), Zi = Me(/<[/\w!]/g), Qi = Me(/<[/\w]/g), Du = Me(/<\/no(script|embed|frames)/i), Lu = Me(/\/>/i), nt = {
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
}, gl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Fu = Pe(ie({}, gl)), Uu = (function() {
  const e = {};
  return qt(gl, (t) => {
    e[t] = Me(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Pe(e);
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
}, Lt = function(t, n, r, s) {
  return Qe(t, n) && bn(t[n]) ? ie(s.base ? rt(s.base) : {}, t[n], s.transform) : r;
}, ds = function(t, n, r) {
  const s = Qe(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? rt(s) : r();
};
function bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ku();
  const t = (O) => bl(O);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, y = e.trustedTypes, N = l.prototype, U = ct(N, "cloneNode"), q = ct(N, "remove"), k = ct(N, "nextSibling"), X = ct(N, "childNodes"), F = ct(N, "parentNode"), J = ct(N, "shadowRoot"), z = ct(N, "attributes"), A = o && o.prototype ? ct(o.prototype, "nodeType") : null, Z = o && o.prototype ? ct(o.prototype, "nodeName") : null, oe = o && o.prototype ? ct(o.prototype, "ownerDocument") : null, re = function(a) {
    return A ? A(a) : a.nodeType;
  }, te = function(a) {
    return Z ? Z(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const O = n.createElement("template");
    O.content && O.content.ownerDocument && (n = O.content.ownerDocument);
  }
  let ae, _e = "", Le, Ie = !1, we = 0;
  const at = function() {
    if (we > 0)
      throw Kt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(a) {
    at(), we++;
    try {
      return ae.createHTML(a);
    } finally {
      we--;
    }
  }, Te = function(a) {
    at(), we++;
    try {
      return ae.createScriptURL(a);
    } finally {
      we--;
    }
  }, B = function() {
    return Ie || (Le = Hu(y, s), Ie = !0), Le;
  }, C = n, h = C.implementation, ge = C.createNodeIterator, je = C.createDocumentFragment, it = C.getElementsByTagName, Yn = r.importNode;
  let de = eo();
  t.isSupported = typeof hl == "function" && typeof F == "function" && h && h.createHTMLDocument !== void 0;
  const Fr = xu, jt = wu, nn = Cu, Tn = Ou, Xn = Ru, $t = Pu, Ur = Iu, u = Mu;
  let f = Ji, g = null;
  const x = ie({}, [...Gi, ...as, ...cs, ...us, ...qi]);
  let b = null;
  const v = ie({}, [...Yi, ...fs, ...Xi, ...ur]);
  let R = Object.seal(dn(null, {
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
  })), P = null, I = null;
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
  let W = !0, M = !0, $ = !1, K = !0, Q = !1, se = !0, ne = !1, be = !1, ve = null, $e = null, Ye = !1, ot = !1, Vt = !1, Ne = !1, et = !0, En = !1;
  const vn = "user-content-";
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
  const _l = ie({}, [Jn, Zn, ht], ls), Ks = Pe(["mi", "mo", "mn", "ms", "mtext"]);
  let Vr = ie({}, Ks);
  const Gs = Pe(["annotation-xml"]);
  let zr = ie({}, Gs);
  const Tl = ie({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const El = ["application/xhtml+xml", "text/html"], vl = "text/html";
  let xe = null, ln = null;
  const Sl = n.createElement("form"), qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Br = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = rt(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    El.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? vl : a.PARSER_MEDIA_TYPE, xe = Sn === "application/xhtml+xml" ? ls : Nn, g = Lt(a, "ALLOWED_TAGS", x, {
      transform: xe
    }), b = Lt(a, "ALLOWED_ATTR", v, {
      transform: xe
    }), $r = Lt(a, "ALLOWED_NAMESPACES", _l, {
      transform: ls
    }), Bs = Lt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: xe,
      base: Ws
    }), Vs = Lt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: xe,
      base: zs
    }), sn = Lt(a, "FORBID_CONTENTS", $s, {
      transform: xe
    }), P = Lt(a, "FORBID_TAGS", rt({}), {
      transform: xe
    }), I = Lt(a, "FORBID_ATTR", rt({}), {
      transform: xe
    }), rn = Qe(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? rt(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, M = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, K = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = a.SAFE_FOR_TEMPLATES || !1, se = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, ot = a.RETURN_DOM || !1, Vt = a.RETURN_DOM_FRAGMENT || !1, Ne = a.RETURN_TRUSTED_TYPE || !1, Ye = a.FORCE_BODY || !1, et = a.SANITIZE_DOM !== !1, En = a.SANITIZE_NAMED_PROPS || !1, kr = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = vu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Ji, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : ht, Vr = ds(
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
    const p = ds(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (R = dn(null), Qe(p, "tagNameCheck") && qs(p.tagNameCheck) && (R.tagNameCheck = p.tagNameCheck), Qe(p, "attributeNameCheck") && qs(p.attributeNameCheck) && (R.attributeNameCheck = p.attributeNameCheck), Qe(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Me(R), Q && (M = !1), Vt && (ot = !0), rn && (g = ie({}, qi), b = dn(null), rn.html === !0 && (ie(g, Gi), ie(b, Yi)), rn.svg === !0 && (ie(g, as), ie(b, fs), ie(b, ur)), rn.svgFilters === !0 && (ie(g, cs), ie(b, fs), ie(b, ur)), rn.mathMl === !0 && (ie(g, us), ie(b, Xi), ie(b, ur))), _.tagCheck = null, _.attributeCheck = null, Qe(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? _.tagCheck = a.ADD_TAGS : bn(a.ADD_TAGS) && (g === x && (g = rt(g)), ie(g, a.ADD_TAGS, xe))), Qe(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? _.attributeCheck = a.ADD_ATTR : bn(a.ADD_ATTR) && (b === v && (b = rt(b)), ie(b, a.ADD_ATTR, xe))), Qe(a, "ADD_FORBID_CONTENTS") && bn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = rt(sn)), ie(sn, a.ADD_FORBID_CONTENTS, xe)), kr && (g["#text"] = !0), ne && ie(g, ["html", "head", "body"]), g.table && (ie(g, ["tbody"]), delete P.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const S = ae;
      ae = a.TRUSTED_TYPES_POLICY;
      try {
        _e = He("");
      } catch (L) {
        throw ae = S, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ae = void 0, _e = "") : (ae === void 0 && (ae = B()), ae && typeof _e == "string" && (_e = He("")));
    Pe && Pe(a), ln = a;
  }, Ys = ie({}, [...as, ...cs, ...Su]), Xs = ie({}, [...us, ...Au]), Al = function(a, p, S) {
    return p.namespaceURI === ht ? a === "svg" : p.namespaceURI === Jn ? a === "svg" && (S === "annotation-xml" || Vr[S]) : !!Ys[a];
  }, xl = function(a, p, S) {
    return p.namespaceURI === ht ? a === "math" : p.namespaceURI === Zn ? a === "math" && zr[S] : !!Xs[a];
  }, wl = function(a, p, S) {
    return p.namespaceURI === Zn && !zr[S] || p.namespaceURI === Jn && !Vr[S] ? !1 : !Xs[a] && (Tl[a] || !Ys[a]);
  }, Cl = function(a) {
    let p = F(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const S = Nn(a.tagName), L = Nn(p.tagName);
    return $r[a.namespaceURI] ? a.namespaceURI === Zn ? Al(S, p, L) : a.namespaceURI === Jn ? xl(S, p, L) : a.namespaceURI === ht ? wl(S, p, L) : !!(Sn === "application/xhtml+xml" && $r[a.namespaceURI]) : !1;
  }, Dt = function(a) {
    Cn(t.removed, {
      element: a
    });
    try {
      F(a).removeChild(a);
    } catch {
      if (q(a), !F(a))
        throw Kt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(a, p, S) {
    try {
      a.removeAttributeNode(p);
    } catch {
      try {
        a.removeAttribute(S);
      } catch {
      }
    }
  }, Qn = function(a) {
    er(a);
    const p = X(a);
    if (p) {
      const L = [];
      qt(p, (H) => {
        Cn(L, H);
      }), qt(L, (H) => {
        try {
          q(H);
        } catch {
        }
      });
    }
    const S = z(a);
    if (S)
      for (let L = S.length - 1; L >= 0; --L) {
        const H = S[L], Y = H && H.name;
        typeof Y == "string" && Js(a, H, Y);
      }
  }, zt = function(a, p, S) {
    if (!S)
      try {
        S = p.getAttributeNode(a);
      } catch {
        S = null;
      }
    Cn(t.removed, {
      attribute: S || null,
      from: p
    });
    try {
      S ? p.removeAttributeNode(S) : p.removeAttribute(a);
    } catch {
      try {
        p.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ot || Vt)
        try {
          Dt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Ol = function(a) {
    const p = z(a);
    if (p)
      for (let S = p.length - 1; S >= 0; --S) {
        const L = p[S], H = L && L.name;
        typeof H != "string" || b[xe(H)] || Js(a, L, H);
      }
  }, er = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const S = p.pop();
      re(S) === nt.element && Ol(S);
      const H = X(S);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Zs = function(a, p) {
    return se ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Rl = function(a) {
    if (!se)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const S = p.pop(), L = re(S);
      if (L === nt.processingInstruction || L === nt.comment && Fe(Qi, S.data)) {
        try {
          q(S);
        } catch {
        }
        continue;
      }
      if (L === nt.element) {
        const Y = S, pe = xe(te(S));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && Zs("for", pe) && Y.removeAttribute("for");
        } catch {
        }
      }
      const H = X(S);
      if (H)
        for (let Y = H.length - 1; Y >= 0; --Y)
          p.push(H[Y]);
    }
  }, Qs = function(a) {
    let p = null, S = null;
    if (Ye)
      a = "<remove></remove>" + a;
    else {
      const Y = zi(a, /^[\r\n\t ]+/);
      S = Y && Y[0];
    }
    Sn === "application/xhtml+xml" && on === ht && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = ae ? He(a) : a;
    if (on === ht)
      try {
        p = new d().parseFromString(L, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = h.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = jr ? _e : L;
      } catch {
      }
    }
    const H = p.body || p.documentElement;
    return a && S && H.insertBefore(n.createTextNode(S), H.childNodes[0] || null), on === ht ? it.call(p, ne ? "html" : "body")[0] : ne ? p.documentElement : H;
  }, ei = function(a) {
    const p = oe ? oe(a) : a.ownerDocument;
    return ge.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, tr = function(a) {
    return a = On(a, Fr, " "), a = On(a, jt, " "), a = On(a, nn, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const S = oe ? oe(a) : a.ownerDocument, L = ge.call(
      S || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = L.nextNode();
    for (; H; )
      H.data = tr(H.data), H = L.nextNode();
    const Y = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    Y && qt(Y, (pe) => {
      an(pe.content) && Wr(pe.content);
    });
  }, nr = function(a) {
    const p = Z ? Z(a) : null;
    return typeof p != "string" || xe(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    a.childNodes !== X(a);
  }, an = function(a) {
    if (!A || typeof a != "object" || a === null)
      return !1;
    try {
      return A(a) === nt.documentFragment;
    } catch {
      return !1;
    }
  }, An = function(a) {
    if (!A || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof A(a) == "number";
    } catch {
      return !1;
    }
  };
  function mt(O, a, p) {
    O.length !== 0 && qt(O, (S) => {
      S.call(t, a, p, ln);
    });
  }
  const Pl = function(a, p) {
    return !!(se && a.hasChildNodes() && !An(a.firstElementChild) && Fe(Zi, a.textContent) && Fe(Zi, a.innerHTML) || se && a.namespaceURI === ht && Fu[p] && (An(a.firstElementChild) || typeof a.textContent == "string" && Fe(Uu[p], a.textContent)) || a.nodeType === nt.processingInstruction || se && a.nodeType === nt.comment && Fe(Qi, a.data));
  }, rr = function(a, p) {
    if (a instanceof RegExp)
      return Fe(a, p);
    if (a instanceof Function) {
      for (var S = arguments.length, L = new Array(S > 2 ? S - 2 : 0), H = 2; H < S; H++)
        L[H - 2] = arguments[H];
      return !!a(p, ...L);
    }
    return !1;
  }, Il = function(a, p, S) {
    if (!P[p] && ii(p) && rr(R.tagNameCheck, p))
      return !1;
    if (kr && !sn[p]) {
      const L = F(a), H = X(a);
      if (H && L) {
        const Y = H.length;
        for (let pe = Y - 1; pe >= 0; --pe) {
          const Ee = a === S ? U(H[pe], !0) : H[pe];
          L.insertBefore(Ee, k(a));
        }
      }
    }
    return Dt(a), !0;
  }, ti = function(a, p, S, L) {
    return a.length === 0 ? p : p === S || p === L ? rt(p) : p;
  }, ni = function(a, p) {
    return a === p || F(a) !== null ? !1 : (Hr && er(a), !0);
  }, ri = function(a, p) {
    if (mt(de.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (nr(a))
      return Dt(a), !0;
    const S = xe(te(a));
    if (g = ti(de.uponSanitizeElement, g, x, ve), mt(de.uponSanitizeElement, a, {
      tagName: S,
      allowedTags: g
    }), ni(a, p))
      return !0;
    if (Pl(a, S))
      return Dt(a), !0;
    if (P[S] || !(_.tagCheck instanceof Function && _.tagCheck(S)) && !g[S]) {
      const H = Il(a, S, p);
      return H === !1 && mt(de.afterSanitizeElements, a, null), H;
    }
    if (re(a) === nt.element && !Cl(a) || (S === "noscript" || S === "noembed" || S === "noframes") && Fe(Du, a.innerHTML))
      return Dt(a), !0;
    if (Q && a.nodeType === nt.text) {
      const H = tr(a.textContent);
      a.textContent !== H && (Cn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return mt(de.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, S) {
    if (I[p] || Zs(p, a) || et && (p === "id" || p === "name") && (S in n || S in Sl))
      return !1;
    const L = b[p] || _.attributeCheck instanceof Function && _.attributeCheck(p, a);
    return M && Fe(Tn, p) || W && Fe(Xn, p) ? !0 : L ? Bs[p] || Fe(f, On(S, Ur, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && Bi(S, "data:") === 0 && Vs[a] || $ && !Fe($t, On(S, Ur, "")) ? !0 : !S : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && rr(R.tagNameCheck, a) && rr(R.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && R.allowCustomizedBuiltInElements && rr(R.tagNameCheck, S)
    );
  }, Nl = ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Nl[Nn(a)] && Fe(u, a);
  }, Ml = function(a, p, S, L) {
    if (ae && typeof y == "object" && typeof y.getAttributeType == "function" && !S)
      switch (y.getAttributeType(a, p)) {
        case "TrustedHTML":
          return He(L);
        case "TrustedScriptURL":
          return Te(L);
      }
    return L;
  }, Dl = function(a, p, S, L) {
    try {
      S ? a.setAttributeNS(S, p, L) : a.setAttribute(p, L), nr(a) ? Dt(a) : Vi(t.removed);
    } catch {
      zt(p, a);
    }
  }, oi = function(a) {
    mt(de.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || nr(a))
      return;
    b = ti(de.uponSanitizeAttribute, b, v, $e);
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let L = p.length;
    const H = xe(a.nodeName);
    for (; L--; ) {
      const Y = p[L], pe = Y.name, Ee = Y.namespaceURI, Xe = Y.value, Je = xe(pe), Gr = Xe;
      let Ve = pe === "value" ? Gr : gu(Gr);
      if (S.attrName = Je, S.attrValue = Ve, S.keepAttr = !0, S.forceKeepAttr = void 0, mt(de.uponSanitizeAttribute, a, S), Ve = S.attrValue, En && (Je === "id" || Je === "name") && Bi(Ve, vn) !== 0 && (zt(pe, a, Y), Ve = vn + Ve), se && Fe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ve)) {
        zt(pe, a, Y);
        continue;
      }
      if (Je === "attributename" && zi(Ve, "href")) {
        zt(pe, a, Y);
        continue;
      }
      if (!S.forceKeepAttr) {
        if (!S.keepAttr) {
          zt(pe, a, Y);
          continue;
        }
        if (!K && Fe(Lu, Ve)) {
          zt(pe, a, Y);
          continue;
        }
        if (Q && (Ve = tr(Ve)), !si(H, Je, Ve)) {
          zt(pe, a, Y);
          continue;
        }
        Ve = Ml(H, Je, Ee, Ve), Ve !== Gr && Dl(a, pe, Ee, Ve);
      }
    }
    mt(de.afterSanitizeAttributes, a, null);
  }, sr = function(a) {
    let p = null;
    const S = ei(a);
    for (mt(de.beforeSanitizeShadowDOM, a, null); p = S.nextNode(); )
      if (mt(de.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && sr(p.content), re(p) === nt.element) {
        const L = J(p);
        an(L) && (Kr(L), sr(L));
      }
    mt(de.afterSanitizeShadowDOM, a, null);
  }, Kr = function(a) {
    const p = [{
      node: a,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const S = p.pop();
      if (S.shadow) {
        sr(S.shadow);
        continue;
      }
      const L = S.node, Y = re(L) === nt.element, pe = X(L);
      if (pe)
        for (let Ee = pe.length - 1; Ee >= 0; --Ee)
          p.push({
            node: pe[Ee],
            shadow: null
          });
      if (Y) {
        const Ee = Z ? Z(L) : null;
        if (typeof Ee == "string" && xe(Ee) === "template") {
          const Xe = L.content;
          an(Xe) && p.push({
            node: Xe,
            shadow: null
          });
        }
      }
      if (Y) {
        const Ee = J(L);
        an(Ee) && p.push({
          node: null,
          shadow: Ee
        }, {
          node: Ee,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(O) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, S = null, L = null, H = null;
    if (jr = !O, jr && (O = "<!-->"), typeof O != "string" && !An(O) && (O = Eu(O), typeof O != "string"))
      throw Kt("dirty is not a string, aborting");
    if (!t.isSupported)
      return O;
    be ? (g = ve, b = $e) : Br(a), (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && (g = rt(g)), de.uponSanitizeAttribute.length > 0 && (b = rt(b)), t.removed = [];
    const Y = Hr && typeof O != "string" && An(O);
    if (Y) {
      Rl(O);
      const Xe = te(O);
      if (typeof Xe == "string") {
        const Je = xe(Xe);
        if (!g[Je] || P[Je])
          throw Qn(O), Kt("root node is forbidden and cannot be sanitized in-place");
      }
      if (nr(O))
        throw Qn(O), Kt("root node is clobbered and cannot be sanitized in-place");
      try {
        Kr(O);
      } catch (Je) {
        throw Qn(O), Je;
      }
    } else if (An(O))
      p = Qs("<!---->"), S = p.ownerDocument.importNode(O, !0), S.nodeType === nt.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? p = S : p.appendChild(S), Kr(S);
    else {
      if (!ot && !Q && !ne && // eslint-disable-next-line unicorn/prefer-includes
      O.indexOf("<") === -1)
        return ae && Ne ? He(O) : O;
      if (p = Qs(O), !p)
        return ot ? null : Ne ? _e : "";
    }
    p && Ye && Dt(p.firstChild);
    const pe = Y ? O : p;
    try {
      const Xe = ei(pe);
      for (; L = Xe.nextNode(); )
        ri(L, pe), oi(L), an(L.content) && sr(L.content);
    } catch (Xe) {
      throw Y && (Qn(O), qt(t.removed, (Je) => {
        Je.element && er(Je.element);
      })), Xe;
    }
    if (Y)
      return qt(t.removed, (Xe) => {
        Xe.element && er(Xe.element);
      }), Q && Wr(O), O;
    if (ot) {
      if (Q && Wr(p), Vt)
        for (H = je.call(p.ownerDocument); p.firstChild; )
          H.appendChild(p.firstChild);
      else
        H = p;
      return (b.shadowroot || b.shadowrootmode) && (H = Yn.call(r, H, !0)), H;
    }
    let Ee = ne ? p.outerHTML : p.innerHTML;
    return ne && g["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Fe(Nu, p.ownerDocument.doctype.name) && (Ee = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + Ee), Q && (Ee = tr(Ee)), ae && Ne ? He(Ee) : Ee;
  }, t.setConfig = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Br(O), be = !0, ve = g, $e = b;
  }, t.clearConfig = function() {
    ln = null, be = !1, ve = null, $e = null, ae = Le, _e = "";
  }, t.isValidAttribute = function(O, a, p) {
    ln || Br({});
    const S = xe(O), L = xe(a);
    return si(S, L, p);
  }, t.addHook = function(O, a) {
    typeof a == "function" && Qe(de, O) && Cn(de[O], a);
  }, t.removeHook = function(O, a) {
    if (Qe(de, O)) {
      if (a !== void 0) {
        const p = hu(de[O], a);
        return p === -1 ? void 0 : mu(de[O], p, 1)[0];
      }
      return Vi(de[O]);
    }
  }, t.removeHooks = function(O) {
    Qe(de, O) && (de[O] = []);
  }, t.removeAllHooks = function() {
    de = eo();
  }, t;
}
var ju = bl();
function $u(e) {
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
function T(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (k) => k, m = (l.sanitize ? ju.sanitize : c) || c, d = l.escape ? no : c, y = (k) => typeof k == "string" || typeof k == "number", N = (k, X, F) => k.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (J, z) => {
    if (X === void 0 || !(z in X))
      return d(J);
    const A = X[z];
    return y(A) ? d(`${A}`) : typeof A == "object" && y(A.value) ? (A.escape !== !1 ? no : c)(`${A.value}`) : d(J);
  });
  let q = (s?.bundle ?? Bu(e)).translations[t] || t;
  return q = Array.isArray(q) ? q[0] : q, m(typeof i == "object" || o !== void 0 ? N(
    q,
    i,
    o
  ) : q);
}
const Wu = { class: "library-vue-catalogue" }, Ku = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Gu = { id: "library-catalogue-heading" }, qu = { class: "library-muted" }, Yu = { class: "library-filter-panel" }, Xu = { class: "library-filter-panel-summary" }, Ju = ["aria-label"], Zu = { value: "" }, Qu = ["value"], ef = { value: "" }, tf = ["value"], nf = { value: "" }, rf = ["value"], sf = { value: "" }, of = ["value"], lf = { value: "" }, af = ["value"], cf = { value: "" }, uf = ["value"], ff = { value: "" }, df = ["value"], pf = { value: "" }, hf = ["value"], mf = { value: "" }, gf = ["value"], bf = { value: "" }, yf = ["value"], _f = { value: "" }, Tf = { value: "1" }, Ef = { value: "" }, vf = { value: "1" }, Sf = { value: "title" }, Af = { value: "recent" }, xf = { value: "publicationDate" }, wf = { value: "publication" }, Cf = { value: "lastOpened" }, Of = { value: "format" }, Rf = ["value"], Pf = ["value"], If = ["aria-label"], Nf = ["aria-label"], Mf = ["href"], Df = ["aria-label"], Lf = ["href", "aria-label"], Ff = ["aria-label"], Uf = ["href"], kf = {
  key: 1,
  class: "library-muted"
}, Hf = ["href"], jf = {
  key: 3,
  class: "library-muted"
}, $f = {
  key: 1,
  class: "library-periodical-groups"
}, Vf = { class: "library-periodical-groups-summary" }, zf = { id: "library-periodical-groups-heading" }, Bf = { class: "library-muted" }, Wf = ["href"], Kf = { class: "library-muted" }, Gf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, qf = { class: "library-periodical-groups-summary" }, Yf = { id: "library-periodical-groups-empty-heading" }, Xf = { class: "library-muted" }, Jf = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Zf = { class: "library-muted" }, Qf = {
  key: 4,
  class: "library-cover-gallery"
}, ed = ["href", "aria-label"], td = ["src", "alt"], nd = ["action", "onSubmit"], rd = ["value"], sd = ["value"], id = ["aria-pressed", "title", "aria-label", "onClick"], od = { class: "library-cover-summary" }, ld = { class: "library-cover-primary" }, ad = ["aria-label"], cd = ["href"], ud = ["onToggle"], fd = ["aria-label"], dd = { class: "library-cover-meta" }, pd = {
  key: 0,
  class: "library-creator"
}, hd = { class: "library-muted" }, md = { key: 0 }, gd = { key: 1 }, bd = { key: 2 }, yd = { key: 3 }, _d = { key: 4 }, Td = { key: 5 }, Ed = { key: 6 }, vd = { key: 7 }, Sd = { key: 8 }, Ad = {
  key: 1,
  class: "library-muted library-cover-description"
}, xd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, wd = { key: 0 }, Cd = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Od = {
  key: 0,
  class: "library-muted"
}, Rd = { class: "library-cover-actions" }, Pd = ["href"], Id = ["href"], Nd = ["href"], Md = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Dd = { class: "library-hero-actions" }, Ld = ["href"], Fd = ["href"], Ud = ["href"], kd = ["href"], Hd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ hn((t.state.items || []).map((B) => ({ ...B }))), i = Ce(() => s), o = Ce(() => t.state.shelves || []), l = Ce(() => t.state.formats || []), c = Ce(() => t.state.publications || []), m = Ce(() => t.state.publicationSummaries || []), d = Ce(() => t.state.publicationYears || []), y = Ce(() => t.state.creators || []), N = Ce(() => t.state.scanStatuses || []), U = Ce(() => t.state.workflowStatuses || []), q = Ce(() => t.state.genres || []), k = Ce(() => t.state.classifications || []), X = Ce(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: i.value.length,
      visible: i.value.length,
      from: i.value.length > 0 ? 1 : 0,
      to: i.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ hn({
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
    }), J = Ce(() => t.state.settingsUrl || ""), z = Ce(() => t.state.requestToken || ""), A = Ce(() => t.state.metadataExportUrl || ""), Z = Ce(() => t.state.metadataSidecarManifestUrl || ""), oe = Ce(() => t.state.metadataSidecarBundleUrl || ""), re = Ce(() => t.state.scannerConflictReviewUrl || "?scannerConflicts=1"), te = {
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
    }, ae = Ce(() => Object.entries(te).map(([B, C]) => ({ key: B, label: C, value: F[B] || "" })).filter((B) => String(B.value).trim() !== "")), _e = /* @__PURE__ */ hn({});
    function Le(B) {
      const C = new URLSearchParams(window.location.search);
      C.delete(B), C.delete("page");
      const h = C.toString();
      return h ? `?${h}` : "?";
    }
    function Ie(B) {
      return String(B || "").toUpperCase();
    }
    function we(B) {
      return B.nextcloudTags || [];
    }
    function at(B) {
      const C = new URLSearchParams(window.location.search);
      return C.set("publication", B), C.set("sort", "publication"), C.delete("page"), `?${C.toString()}`;
    }
    function He(B, C) {
      _e[B] = !!C?.currentTarget?.open;
    }
    async function Te(B, C) {
      const h = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!h || !B?.starUrl) return;
      const ge = !!B.starred;
      B.starred = !ge;
      try {
        (await fetch(B.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (B.starred = ge);
      } catch {
        B.starred = ge;
      }
    }
    return (B, C) => (j(), V("div", Wu, [
      E("section", Ku, [
        E("h2", Gu, w(D(T)("library", "Publication catalogue")), 1),
        E("p", qu, w(D(T)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        E("details", Yu, [
          E("summary", Xu, w(D(T)("library", "Show catalogue filters")), 1),
          E("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": D(T)("library", "Catalogue search and filters")
          }, [
            E("label", null, [
              Se(w(D(T)("library", "Search title / author")) + " ", 1),
              ze(E("input", {
                "onUpdate:modelValue": C[0] || (C[0] = (h) => F.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [Fi, F.q]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Type")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[1] || (C[1] = (h) => F.type = h),
                name: "type"
              }, [
                E("option", Zu, w(D(T)("library", "All types")), 1),
                (j(), V(ye, null, Be(n, (h) => E("option", {
                  key: h,
                  value: h
                }, w(h), 9, Qu)), 64))
              ], 512), [
                [tt, F.type]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Series / periodical")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[2] || (C[2] = (h) => F.publication = h),
                name: "publication"
              }, [
                E("option", ef, w(D(T)("library", "All series and periodicals")), 1),
                (j(!0), V(ye, null, Be(c.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, tf))), 128))
              ], 512), [
                [tt, F.publication]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Publication year")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[3] || (C[3] = (h) => F.year = h),
                name: "year"
              }, [
                E("option", nf, w(D(T)("library", "All years")), 1),
                (j(!0), V(ye, null, Be(d.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, rf))), 128))
              ], 512), [
                [tt, F.year]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Creator")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[4] || (C[4] = (h) => F.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                E("option", sf, w(D(T)("library", "All creators")), 1),
                (j(!0), V(ye, null, Be(y.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, of))), 128))
              ], 512), [
                [tt, F.creator]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Nextcloud tag")) + " ", 1),
              ze(E("input", {
                "onUpdate:modelValue": C[5] || (C[5] = (h) => F.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fi, F.tag]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Format")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (h) => F.format = h),
                name: "format"
              }, [
                E("option", lf, w(D(T)("library", "All formats")), 1),
                (j(!0), V(ye, null, Be(l.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(Ie(h)), 9, af))), 128))
              ], 512), [
                [tt, F.format]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Shelf")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (h) => F.shelf = h),
                name: "shelf"
              }, [
                E("option", cf, w(D(T)("library", "All shelves")), 1),
                (j(!0), V(ye, null, Be(o.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, uf))), 128))
              ], 512), [
                [tt, F.shelf]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Scan status")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[8] || (C[8] = (h) => F.status = h),
                name: "status"
              }, [
                E("option", ff, w(D(T)("library", "All scan statuses")), 1),
                (j(!0), V(ye, null, Be(N.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, df))), 128))
              ], 512), [
                [tt, F.status]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Workflow status")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (h) => F.workflowStatus = h),
                name: "workflowStatus"
              }, [
                E("option", pf, w(D(T)("library", "All workflow statuses")), 1),
                (j(!0), V(ye, null, Be(U.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, hf))), 128))
              ], 512), [
                [tt, F.workflowStatus]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Genre")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[10] || (C[10] = (h) => F.genre = h),
                name: "genre"
              }, [
                E("option", mf, w(D(T)("library", "All genres")), 1),
                (j(!0), V(ye, null, Be(q.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, gf))), 128))
              ], 512), [
                [tt, F.genre]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Classification")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (h) => F.classification = h),
                name: "classification"
              }, [
                E("option", bf, w(D(T)("library", "All classifications")), 1),
                (j(!0), V(ye, null, Be(k.value, (h) => (j(), V("option", {
                  key: h,
                  value: h
                }, w(h), 9, yf))), 128))
              ], 512), [
                [tt, F.classification]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Scanner conflicts")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (h) => F.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                E("option", _f, w(D(T)("library", "All metadata")), 1),
                E("option", Tf, w(D(T)("library", "Needs review")), 1)
              ], 512), [
                [tt, F.scannerConflicts]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Starred")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (h) => F.starred = h),
                name: "starred"
              }, [
                E("option", Ef, w(D(T)("library", "All publications")), 1),
                E("option", vf, w(D(T)("library", "Starred only")), 1)
              ], 512), [
                [tt, F.starred]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Sort")) + " ", 1),
              ze(E("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (h) => F.sort = h),
                name: "sort"
              }, [
                E("option", Sf, w(D(T)("library", "Title")), 1),
                E("option", Af, w(D(T)("library", "Recently added")), 1),
                E("option", xf, w(D(T)("library", "Publication date")), 1),
                E("option", wf, w(D(T)("library", "Series / periodical")), 1),
                E("option", Cf, w(D(T)("library", "Recently opened")), 1),
                E("option", Of, w(D(T)("library", "Format")), 1)
              ], 512), [
                [tt, F.sort]
              ])
            ]),
            E("label", null, [
              Se(w(D(T)("library", "Page size")) + " ", 1),
              E("select", {
                value: X.value.limit,
                name: "limit"
              }, [
                (j(), V(ye, null, Be(r, (h) => E("option", {
                  key: h,
                  value: h
                }, w(h), 9, Pf)), 64))
              ], 8, Rf)
            ]),
            E("button", {
              type: "submit",
              class: "button primary",
              "aria-label": D(T)("library", "Apply catalogue filters")
            }, w(D(T)("library", "Apply filters")), 9, If),
            E("a", {
              href: "?",
              class: "button secondary",
              "aria-label": D(T)("library", "Clear catalogue filters")
            }, w(D(T)("library", "Clear")), 9, Nf),
            E("a", {
              href: re.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, w(D(T)("library", "Review scanner conflicts")), 9, Mf)
          ], 8, Ju)
        ]),
        ae.value.length > 0 ? (j(), V("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": D(T)("library", "Active filters")
        }, [
          E("span", null, w(D(T)("library", "Active filters")), 1),
          (j(!0), V(ye, null, Be(ae.value, (h) => (j(), V("a", {
            key: h.key,
            href: Le(h.key),
            class: "library-filter-chip",
            "aria-label": `${D(T)("library", "Remove filter")}: ${h.label}`
          }, [
            E("strong", null, w(h.label) + ":", 1),
            Se(" " + w(h.value) + " ", 1),
            C[15] || (C[15] = E("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Lf))), 128))
        ], 8, Df)) : Re("", !0),
        E("nav", {
          class: "library-pagination",
          "aria-label": D(T)("library", "Catalogue pagination")
        }, [
          E("span", null, "Showing " + w(X.value.from) + "–" + w(X.value.to) + " of " + w(X.value.total) + " catalogue items", 1),
          X.value.previousUrl ? (j(), V("a", {
            key: 0,
            href: X.value.previousUrl
          }, w(D(T)("library", "Previous")), 9, Uf)) : (j(), V("span", kf, w(D(T)("library", "Previous")), 1)),
          X.value.nextUrl ? (j(), V("a", {
            key: 2,
            href: X.value.nextUrl
          }, w(D(T)("library", "Next")), 9, Hf)) : (j(), V("span", jf, w(D(T)("library", "Next")), 1))
        ], 8, Ff),
        m.value.length > 0 ? (j(), V("details", $f, [
          E("summary", Vf, w(D(T)("library", "Show top series and periodicals")), 1),
          E("h3", zf, w(D(T)("library", "Top series and periodicals")), 1),
          E("p", Bf, w(D(T)("library", "Jump into recurring publications with one click.")), 1),
          E("ul", null, [
            (j(!0), V(ye, null, Be(m.value, (h) => (j(), V("li", {
              key: h.publication
            }, [
              E("a", {
                href: at(h.publication)
              }, w(h.publication), 9, Wf),
              E("span", Kf, w(h.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (j(), V("details", Gf, [
          E("summary", qf, w(D(T)("library", "Show top series and periodicals")), 1),
          E("h3", Yf, w(D(T)("library", "No series or periodicals found yet")), 1),
          E("p", Xf, w(D(T)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Re("", !0),
        i.value.length === 0 ? (j(), V("div", Jf, [
          E("h3", null, w(D(T)("library", "No catalogue items match")), 1),
          E("p", Zf, w(D(T)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (j(), V("div", Qf, [
          (j(!0), V(ye, null, Be(i.value, (h) => (j(), V("article", {
            key: h.id,
            class: Hn(["library-cover-card", { "library-cover-card--open": _e[h.id] }])
          }, [
            E("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              E("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, td)
            ], 8, ed),
            E("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: ki((ge) => Te(h, ge), ["prevent"])
            }, [
              E("input", {
                type: "hidden",
                name: "requesttoken",
                value: z.value
              }, null, 8, rd),
              C[16] || (C[16] = E("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              E("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, sd),
              E("button", {
                type: "submit",
                class: Hn(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? D(T)("library", "Unstar this publication") : D(T)("library", "Star this publication"),
                "aria-label": h.starred ? D(T)("library", "Unstar this publication") : D(T)("library", "Star this publication"),
                onClick: ki((ge) => Te(h, ge), ["prevent"])
              }, w(h.starred ? "★" : "☆"), 11, id)
            ], 40, nd),
            E("div", od, [
              E("div", ld, [
                E("h3", null, [
                  h.starred ? (j(), V("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": D(T)("library", "Starred")
                  }, "★", 8, ad)) : Re("", !0),
                  Se(w(h.title), 1)
                ]),
                E("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, w(D(T)("library", "Read")), 9, cd)
              ]),
              E("details", {
                class: "library-cover-details",
                onToggle: (ge) => He(h.id, ge)
              }, [
                E("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${D(T)("library", "Show details and actions")}: ${h.title}`
                }, w(D(T)("library", "Details")), 9, fd),
                E("div", dd, [
                  h.creators ? (j(), V("p", pd, w(h.creators), 1)) : Re("", !0),
                  E("p", hd, [
                    E("span", null, w(h.publicationType), 1),
                    h.publication ? (j(), V("span", md, " · " + w(h.publication), 1)) : Re("", !0),
                    h.publicationDate ? (j(), V("span", gd, " · " + w(h.publicationDate), 1)) : Re("", !0),
                    h.workflowStatus ? (j(), V("span", bd, " · Workflow status: " + w(h.workflowStatus), 1)) : Re("", !0),
                    h.genres?.length ? (j(), V("span", yd, " · Genres: " + w(h.genres.join("; ")), 1)) : Re("", !0),
                    h.classifications?.length ? (j(), V("span", _d, " · Classifications: " + w(h.classifications.join("; ")), 1)) : Re("", !0),
                    h.hasScannerConflict ? (j(), V("span", Td, " · Needs scanner review: " + w(h.scannerConflictCount) + " fields", 1)) : Re("", !0),
                    h.lastOpenedAt ? (j(), V("span", Ed, " · Last opened: " + w(h.lastOpenedAt), 1)) : Re("", !0),
                    h.extension ? (j(), V("span", vd, " · Format: " + w(Ie(h.extension)), 1)) : Re("", !0),
                    h.shelf ? (j(), V("span", Sd, " · Shelf: " + w(h.shelf), 1)) : Re("", !0)
                  ]),
                  h.description ? (j(), V("p", Ad, w(h.description), 1)) : Re("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (j(), V("p", xd, [
                    Se(" scanStatus: " + w(h.scanStatus || "unknown"), 1),
                    h.scanError ? (j(), V("span", wd, " · scanError: " + w(h.scanError), 1)) : Re("", !0)
                  ])) : Re("", !0),
                  E("div", Cd, [
                    we(h).length === 0 ? (j(), V("span", Od, "No Nextcloud tags")) : (j(!0), V(ye, { key: 1 }, Be(we(h), (ge) => (j(), V("span", {
                      key: ge.id,
                      class: "library-tag"
                    }, w(ge.name), 1))), 128))
                  ]),
                  E("p", Rd, [
                    E("a", {
                      href: h.filesUrl
                    }, w(D(T)("library", "Show in Files")), 9, Pd),
                    C[17] || (C[17] = Se(" · ", -1)),
                    E("a", {
                      href: h.downloadUrl
                    }, w(D(T)("library", "Download source")), 9, Id),
                    C[18] || (C[18] = Se(" · ", -1)),
                    E("a", {
                      href: h.detailsUrl
                    }, w(D(T)("library", "Details")), 9, Nd)
                  ])
                ])
              ], 40, ud)
            ])
          ], 2))), 128))
        ]))
      ]),
      E("section", Md, [
        C[19] || (C[19] = E("div", null, [
          E("h2", null, "Library"),
          E("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        E("div", Dd, [
          E("a", {
            href: J.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Ld),
          A.value ? (j(), V("a", {
            key: 0,
            href: A.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Fd)) : Re("", !0),
          Z.value ? (j(), V("a", {
            key: 1,
            href: Z.value,
            class: "button secondary",
            "aria-label": "Export sidecar manifest"
          }, "Export sidecar manifest", 8, Ud)) : Re("", !0),
          oe.value ? (j(), V("a", {
            key: 2,
            href: oe.value,
            class: "button secondary",
            "aria-label": "Export sidecar ZIP"
          }, "Export sidecar ZIP", 8, kd)) : Re("", !0)
        ])
      ])
    ]));
  }
}, ro = iu("library", "catalogue", {}), hr = document.querySelector("#library-vue-root"), so = {
  ...ro,
  requestToken: hr?.dataset.requestToken || ro.requestToken || ""
};
function me(e) {
  return String(e ?? "");
}
function yl(e) {
  return me(e).toUpperCase();
}
function jd(e, t, n, r = me) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = me(s), i.textContent = r(s), me(s) === me(n) && (i.selected = !0), e.appendChild(i);
  }
}
function io(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = me(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = me) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const m = document.createElement("option");
  m.value = "", m.textContent = s, c.appendChild(m), jd(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function $d(e) {
  const t = me(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Vd(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function zd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", T("library", "Catalogue search and filters")), io(r, T("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, T("library", "Type"), "type", n.type, T("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), io(r, T("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, T("library", "Format"), "format", n.format, T("library", "All formats"), e.formats || [], yl), un(r, T("library", "Shelf"), "shelf", n.shelf, T("library", "All shelves"), e.shelves || []), un(r, T("library", "Scan status"), "status", n.status, T("library", "All scan statuses"), e.scanStatuses || []), un(r, T("library", "Sort"), "sort", n.sort || "title", T("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, T("library", "Page size"), "limit", t.limit || 100, T("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", T("library", "Apply catalogue filters")), s.textContent = T("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", T("library", "Clear catalogue filters")), i.textContent = T("library", "Clear"), r.append(s, i), r;
}
function Bd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = me(e.settingsUrl || ""), i = me(e.metadataExportUrl || ""), o = document.createElement("div");
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
  y.className = "library-filter-panel-summary", y.textContent = T("library", "Show catalogue filters"), d.append(y, zd(e, r)), l.appendChild(d);
  const N = document.createElement("nav");
  N.className = "library-pagination", N.setAttribute("aria-label", T("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, N.appendChild(U), l.appendChild(N);
  const q = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], k = document.createElement("details");
  k.className = q.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const X = document.createElement("summary");
  X.className = "library-periodical-groups-summary", X.textContent = T("library", "Show top series and periodicals"), k.appendChild(X);
  const F = document.createElement("h3");
  F.textContent = q.length > 0 ? T("library", "Top series and periodicals") : T("library", "No series or periodicals found yet");
  const J = document.createElement("p");
  if (J.className = "library-muted", J.textContent = q.length > 0 ? T("library", "Jump into recurring publications with one click.") : T("library", "Add publication or series names in item details to build this shortcut panel."), k.append(F, J), q.length > 0) {
    const z = document.createElement("ul");
    for (const A of q) {
      const Z = document.createElement("li"), oe = document.createElement("a");
      oe.href = Vd(me(A.publication)), oe.textContent = me(A.publication);
      const re = document.createElement("span");
      re.className = "library-muted", re.textContent = `${A.itemCount} items`, Z.append(oe, re), z.appendChild(Z);
    }
    k.appendChild(z);
  }
  if (l.appendChild(k), n.length === 0) {
    const z = document.createElement("div");
    z.className = "library-empty-content", z.setAttribute("role", "status");
    const A = document.createElement("h3");
    A.textContent = T("library", "No catalogue items match");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = T("library", "Scan enabled roots or clear the active filters."), z.append(A, Z), l.appendChild(z);
  } else {
    const z = document.createElement("div");
    z.className = "library-cover-gallery";
    for (const A of n) {
      const Z = document.createElement("article");
      Z.className = "library-cover-card";
      const oe = document.createElement("a");
      oe.className = "library-cover-link", oe.href = me(A.openUrl || "#"), oe.setAttribute("aria-label", `Read ${me(A.title || "publication")}`);
      const re = document.createElement("img");
      re.className = "library-cover-image", re.src = me(A.coverUrl || ""), re.alt = `Cover for ${me(A.title || "publication")}`, re.loading = "lazy", oe.appendChild(re);
      const te = $d(e), ae = document.createElement("form");
      ae.method = "post", ae.action = me(A.starUrl || ""), ae.className = "library-cover-star-form", te && ae.appendChild(te);
      const _e = document.createElement("input");
      _e.type = "hidden", _e.name = "returnTo", _e.value = "catalogue";
      const Le = document.createElement("input");
      Le.type = "hidden", Le.name = "starred", Le.value = A.starred ? "0" : "1";
      const Ie = document.createElement("button");
      Ie.type = "submit", Ie.className = A.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Ie.setAttribute("aria-pressed", A.starred ? "true" : "false"), Ie.setAttribute("aria-label", A.starred ? T("library", "Unstar this publication") : T("library", "Star this publication")), Ie.title = A.starred ? T("library", "Unstar this publication") : T("library", "Star this publication"), Ie.textContent = A.starred ? "★" : "☆", ae.append(_e, Le, Ie);
      const we = document.createElement("div");
      we.className = "library-cover-summary";
      const at = document.createElement("h3");
      if (at.textContent = me(A.title || "Untitled publication"), we.appendChild(at), A.creators) {
        const je = document.createElement("p");
        je.className = "library-creator", je.textContent = me(A.creators), we.appendChild(je);
      }
      const He = document.createElement("p");
      He.className = "library-muted", He.textContent = [
        me(A.publicationType || "other"),
        A.extension ? `Format: ${yl(A.extension)}` : "",
        A.shelf ? `Shelf: ${me(A.shelf)}` : ""
      ].filter(Boolean).join(" · "), we.appendChild(He);
      const Te = document.createElement("p"), B = document.createElement("a");
      B.href = me(A.openUrl || "#"), B.textContent = T("library", "Read");
      const C = document.createElement("a");
      C.href = me(A.filesUrl || "#"), C.textContent = T("library", "Show in Files");
      const h = document.createElement("a");
      h.href = me(A.downloadUrl || "#"), h.textContent = T("library", "Download source");
      const ge = document.createElement("a");
      ge.href = me(A.detailsUrl || "#"), ge.textContent = T("library", "Details"), Te.append(B, document.createTextNode(" · "), C, document.createTextNode(" · "), h, document.createTextNode(" · "), ge), we.appendChild(Te), Z.append(oe, ae, we), z.appendChild(Z);
    }
    l.appendChild(z);
  }
  if (o.appendChild(l), s || i) {
    const z = document.createElement("section");
    z.className = "library-hero library-secondary-panel", z.setAttribute("aria-label", "Library settings");
    const A = document.createElement("div"), Z = document.createElement("h2");
    Z.textContent = "Library";
    const oe = document.createElement("p");
    oe.className = "library-lede", oe.textContent = "Browse publications already stored in Nextcloud.", A.append(Z, oe);
    const re = document.createElement("div");
    if (re.className = "library-hero-actions", s) {
      const te = document.createElement("a");
      te.href = s, te.className = "button secondary", te.setAttribute("aria-label", "Open Library settings"), te.textContent = "Library settings", re.appendChild(te);
    }
    if (i) {
      const te = document.createElement("a");
      te.href = i, te.className = "button secondary", te.setAttribute("aria-label", "Export corrected metadata"), te.textContent = "Export corrected metadata", re.appendChild(te);
    }
    if (e.metadataSidecarManifestUrl) {
      const te = document.createElement("a");
      te.href = e.metadataSidecarManifestUrl, te.className = "button secondary", te.setAttribute("aria-label", "Export sidecar manifest"), te.textContent = "Export sidecar manifest", re.appendChild(te);
    }
    if (e.metadataSidecarBundleUrl) {
      const te = document.createElement("a");
      te.href = e.metadataSidecarBundleUrl, te.className = "button secondary", te.setAttribute("aria-label", "Export sidecar ZIP"), te.textContent = "Export sidecar ZIP", re.appendChild(te);
    }
    z.append(A, re), o.appendChild(z);
  }
  return o;
}
if (hr)
  try {
    nu(Hd, { state: so }).mount(hr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), hr.replaceChildren(Bd(so));
  }
//# sourceMappingURL=library-main.mjs.map
