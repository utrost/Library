// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const oe = {}, dn = [], ft = () => {
}, ii = () => !1, vr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sr = (e) => e.startsWith("onUpdate:"), Re = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), B = Array.isArray, Nt = (e) => Bn(e) === "[object Map]", Zt = (e) => Bn(e) === "[object Set]", lo = (e) => Bn(e) === "[object Date]", K = (e) => typeof e == "function", pe = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", li = (e) => (se(e) || K(e)) && K(e.then) && K(e.catch), ai = Object.prototype.toString, Bn = (e) => ai.call(e), Ll = (e) => Bn(e).slice(8, -1), ci = (e) => Bn(e) === "[object Object]", Cs = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Nn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, Ze = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, Qt = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), ui = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = Ar(
  (e) => e ? `on${ui(e)}` : ""
), yt = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fi = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, xr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ao;
const wr = () => ao || (ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Os(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = pe(r) ? $l(r) : Os(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (pe(e) || se(e))
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
function Rs(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ xs(Vl);
function di(e) {
  return !!e || e === "";
}
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Dt(e[r], t[r]);
  return n;
}
function co(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let o = -1;
    for (let i = 0; i < n.length; i++)
      if (!r[i] && Dt(s, n[i])) {
        o = i;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Dt(e, t) {
  if (e === t) return !0;
  let n = lo(e), r = lo(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = dt(e), r = dt(t), n || r)
    return e === t;
  if (n = B(e), r = B(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = se(e), r = se(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Nt(e), r = Nt(t), n || r || (n = Zt(e), r = Zt(t), n || r))
      return n && r ? co(e, t) : !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !Dt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Dt(n, t));
}
const pi = (e) => !!(e && e.__v_isRef === !0), F = (e) => pe(e) ? e : e == null ? "" : B(e) || se(e) && (e.toString === ai || !K(e.toString)) ? pi(e) ? F(e.value) : JSON.stringify(e, hi, 2) : String(e), hi = (e, t) => pi(t) ? hi(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[qr(r, o) + " =>"] = s, n),
    {}
  )
} : Zt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qr(n))
} : dt(t) ? qr(t) : se(t) && !B(t) && !ci(t) ? String(t) : t, qr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class Gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && xe && (xe.active ? (this.parent = xe, this.index = (xe.scopes || (xe.scopes = [])).push(
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
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xe, xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (xe === this)
        xe = this.prevScope;
      else {
        let t = xe;
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
  return xe;
}
let ae;
const Yr = /* @__PURE__ */ new WeakSet();
class mi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && (xe.active ? xe.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yr.has(this) && (Yr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, uo(this), bi(this);
    const t = ae, n = Qe;
    ae = this, Qe = !0;
    try {
      return this.fn();
    } finally {
      yi(this), ae = t, Qe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ns(t);
      this.deps = this.depsTail = void 0, uo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ps(this) && this.run();
  }
  get dirty() {
    return ps(this);
  }
}
let gi = 0, Dn, Mn;
function _i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Dn, Dn = e;
}
function Is() {
  gi++;
}
function Ps() {
  if (--gi > 0)
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
function bi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yi(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ns(r), ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ti(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ti(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kn) || (e.globalVersion = kn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ae, r = Qe;
  ae = e, Qe = !0;
  try {
    bi(e);
    const s = e.fn(e._value);
    (t.version === 0 || yt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ae = n, Qe = r, yi(e), e.flags &= -3;
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ns(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const Ei = [];
function St() {
  Ei.push(Qe), Qe = !1;
}
function At() {
  const e = Ei.pop();
  Qe = e === void 0 ? !0 : e;
}
function uo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ae;
    ae = void 0;
    try {
      t();
    } finally {
      ae = n;
    }
  }
}
let kn = 0;
class Yl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ae || !Qe || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new Yl(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, Si(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, kn++, this.notify(t);
  }
  notify(t) {
    Is();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ps();
    }
  }
}
function Si(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Si(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hs = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (Qe && ae) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new vi()), s.map = r, s.key = n), s.track();
  }
}
function Tt(e, t, n, r, s, o) {
  const i = hs.get(e);
  if (!i) {
    kn++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if (Is(), t === "clear")
    i.forEach(a);
  else {
    const c = B(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      i.forEach((g, x) => {
        (x === "length" || x === Hn || !dt(x) && x >= d) && a(g);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), h && a(i.get(Hn)), t) {
        case "add":
          c ? h && a(i.get("length")) : (a(i.get(Yt)), Nt(e) && a(i.get(ms)));
          break;
        case "delete":
          c || (a(i.get(Yt)), Nt(e) && a(i.get(ms)));
          break;
        case "set":
          Nt(e) && a(i.get(Yt));
          break;
      }
  }
  Ps();
}
function an(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Oe(t, "iterate", Hn), /* @__PURE__ */ et(e) ? t : t.map(xt));
}
function Cr(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", Hn), e;
}
function ct(e, t) {
  return /* @__PURE__ */ Mt(e) ? gn(/* @__PURE__ */ Xt(e) ? xt(t) : t) : xt(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => ct(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => B(t) ? an(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => ct(this, r)),
      arguments
    );
  },
  find(e, t) {
    return gt(
      this,
      "find",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(
      this,
      "findLast",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jr(this, "includes", e);
  },
  indexOf(...e) {
    return Jr(this, "indexOf", e);
  },
  join(e) {
    return an(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Sn(this, "pop");
  },
  push(...e) {
    return Sn(this, "push", e);
  },
  reduce(e, ...t) {
    return fo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fo(this, "reduceRight", e, t);
  },
  shift() {
    return Sn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Sn(this, "splice", e);
  },
  toReversed() {
    return an(this).toReversed();
  },
  toSorted(e) {
    return an(this).toSorted(e);
  },
  toSpliced(...e) {
    return an(this).toSpliced(...e);
  },
  unshift(...e) {
    return Sn(this, "unshift", e);
  },
  values() {
    return Xr(this, "values", (e) => ct(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ et(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.done || (o.value = n(o.value)), o;
  }), s;
}
const Jl = Array.prototype;
function gt(e, t, n, r, s, o) {
  const i = Cr(e), a = i !== e && !/* @__PURE__ */ et(e), c = i[t];
  if (c !== Jl[t]) {
    const g = c.apply(e, o);
    return a ? xt(g) : g;
  }
  let h = n;
  i !== e && (a ? h = function(g, x) {
    return n.call(this, ct(e, g), x, e);
  } : n.length > 2 && (h = function(g, x) {
    return n.call(this, g, x, e);
  }));
  const d = c.call(i, h, r);
  return a && s ? s(d) : d;
}
function fo(e, t, n, r) {
  const s = Cr(e), o = s !== e && !/* @__PURE__ */ et(e);
  let i = n, a = !1;
  s !== e && (o ? (a = r.length === 0, i = function(h, d, g) {
    return a && (a = !1, h = ct(e, h)), n.call(this, h, ct(e, d), g, e);
  }) : n.length > 3 && (i = function(h, d, g) {
    return n.call(this, h, d, g, e);
  }));
  const c = s[t](i, ...r);
  return a ? ct(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ re(e);
  Oe(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), r[t](...n)) : s;
}
function Sn(e, t, n = []) {
  St(), Is();
  const r = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ps(), At(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ai = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function Ql(e) {
  dt(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
}
class xi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? ca : Ri : o ? Oi : Ci).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = B(t);
    if (!s) {
      let c;
      if (i && (c = Xl[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ql;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Fe(t) ? t : r
    );
    if ((dt(n) ? Ai.has(n) : Zl(n)) || (s || Oe(t, "get", n), o))
      return a;
    if (/* @__PURE__ */ Fe(a)) {
      const c = i && Cs(n) ? a : a.value;
      return s && se(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return se(a) ? s ? /* @__PURE__ */ _s(a) : /* @__PURE__ */ Or(a) : a;
  }
}
class wi extends xi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    const i = B(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Mt(o);
      if (!/* @__PURE__ */ et(r) && !/* @__PURE__ */ Mt(r) && (o = /* @__PURE__ */ re(o), r = /* @__PURE__ */ re(r)), !i && /* @__PURE__ */ Fe(o) && !/* @__PURE__ */ Fe(r))
        return h || (o.value = r), !0;
    }
    const a = i ? Number(n) < t.length : ne(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Fe(t) ? t : s
    );
    return t === /* @__PURE__ */ re(s) && c && (a ? yt(r, o) && Tt(t, "set", n, r) : Tt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Tt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!dt(n) || !Ai.has(n)) && Oe(t, "has", n), r;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      B(t) ? "length" : Yt
    ), Reflect.ownKeys(t);
  }
}
class ea extends xi {
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
const ta = /* @__PURE__ */ new wi(), na = /* @__PURE__ */ new ea(), ra = /* @__PURE__ */ new wi(!0);
const gs = (e) => e, rr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = /* @__PURE__ */ re(s), i = Nt(o), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, h = s[e](...r), d = n ? gs : t ? gn : xt;
    return !t && Oe(
      o,
      "iterate",
      c ? ms : Yt
    ), Re(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: g, done: x } = h.next();
          return x ? { value: g, done: x } : {
            value: a ? [d(g[0]), d(g[1])] : d(g),
            done: x
          };
        }
      }
    );
  };
}
function sr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function oa(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ re(o), a = /* @__PURE__ */ re(s);
      e || (yt(s, a) && Oe(i, "get", s), Oe(i, "get", a));
      const { has: c } = rr(i), h = t ? gs : e ? gn : xt;
      if (c.call(i, s))
        return h(o.get(s));
      if (c.call(i, a))
        return h(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ re(s), "iterate", Yt), s.size;
    },
    has(s) {
      const o = this.__v_raw, i = /* @__PURE__ */ re(o), a = /* @__PURE__ */ re(s);
      return e || (yt(s, a) && Oe(i, "has", s), Oe(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, c = /* @__PURE__ */ re(a), h = t ? gs : e ? gn : xt;
      return !e && Oe(c, "iterate", Yt), a.forEach((d, g) => s.call(o, h(d), h(g), i));
    }
  };
  return Re(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const o = /* @__PURE__ */ re(this), i = rr(o), a = /* @__PURE__ */ re(s), c = !t && !/* @__PURE__ */ et(s) && !/* @__PURE__ */ Mt(s) ? a : s;
        return i.has.call(o, c) || yt(s, c) && i.has.call(o, s) || yt(a, c) && i.has.call(o, a) || (o.add(c), Tt(o, "add", c, c)), this;
      },
      set(s, o) {
        !t && !/* @__PURE__ */ et(o) && !/* @__PURE__ */ Mt(o) && (o = /* @__PURE__ */ re(o));
        const i = /* @__PURE__ */ re(this), { has: a, get: c } = rr(i);
        let h = a.call(i, s);
        h || (s = /* @__PURE__ */ re(s), h = a.call(i, s));
        const d = c.call(i, s);
        return i.set(s, o), h ? yt(o, d) && Tt(i, "set", s, o) : Tt(i, "add", s, o), this;
      },
      delete(s) {
        const o = /* @__PURE__ */ re(this), { has: i, get: a } = rr(o);
        let c = i.call(o, s);
        c || (s = /* @__PURE__ */ re(s), c = i.call(o, s)), a && a.call(o, s);
        const h = o.delete(s);
        return c && Tt(o, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ re(this), o = s.size !== 0, i = s.clear();
        return o && Tt(
          s,
          "clear",
          void 0,
          void 0
        ), i;
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
  const n = oa(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ne(n, s) && s in r ? n : r,
    s,
    o
  );
}
const ia = {
  get: /* @__PURE__ */ Ds(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ds(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ds(!0, !1)
};
const Ci = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
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
function Or(e) {
  return /* @__PURE__ */ Mt(e) ? e : Ms(
    e,
    !1,
    ta,
    ia,
    Ci
  );
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return Ms(
    e,
    !1,
    ra,
    la,
    Oi
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Ms(
    e,
    !0,
    na,
    aa,
    Ri
  );
}
function Ms(e, t, n, r, s) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = ua(Ll(e));
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return /* @__PURE__ */ Mt(e) ? /* @__PURE__ */ Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ re(t) : e;
}
function da(e) {
  return !ne(e, "__v_skip") && Object.isExtensible(e) && fi(e, "__v_skip", !0), e;
}
const xt = (e) => se(e) ? /* @__PURE__ */ Or(e) : e, gn = (e) => se(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function te(e) {
  return /* @__PURE__ */ Fe(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : te(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Fe(s) && !/* @__PURE__ */ Fe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ii(e) {
  return /* @__PURE__ */ Xt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return _i(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ti(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ma(e, t, n = !1) {
  let r, s;
  return K(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const or = {}, pr = /* @__PURE__ */ new WeakMap();
let Wt;
function ga(e, t = !1, n = Wt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = oe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: c } = n, h = (D) => s ? D : /* @__PURE__ */ et(D) || s === !1 || s === 0 ? Et(D, 1) : Et(D);
  let d, g, x, I, j = !1, M = !1;
  if (/* @__PURE__ */ Fe(e) ? (g = () => e.value, j = /* @__PURE__ */ et(e)) : /* @__PURE__ */ Xt(e) ? (g = () => h(e), j = !0) : B(e) ? (M = !0, j = e.some((D) => /* @__PURE__ */ Xt(D) || /* @__PURE__ */ et(D)), g = () => e.map((D) => {
    if (/* @__PURE__ */ Fe(D))
      return D.value;
    if (/* @__PURE__ */ Xt(D))
      return h(D);
    if (K(D))
      return c ? c(D, 2) : D();
  })) : K(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (x) {
      St();
      try {
        x();
      } finally {
        At();
      }
    }
    const D = Wt;
    Wt = d;
    try {
      return c ? c(e, 3, [I]) : e(I);
    } finally {
      Wt = D;
    }
  } : g = ft, t && s) {
    const D = g, Q = s === !0 ? 1 / 0 : s;
    g = () => Et(D(), Q);
  }
  const $ = Kl(), E = () => {
    d.stop(), $ && $.active && ws($.effects, d);
  };
  if (o && t) {
    const D = t;
    t = (...Q) => {
      const be = D(...Q);
      return E(), be;
    };
  }
  let b = M ? new Array(e.length).fill(or) : or;
  const U = (D) => {
    if (!(!(d.flags & 1) || !d.dirty && !D))
      if (t) {
        const Q = d.run();
        if (D || s || j || (M ? Q.some((be, we) => yt(be, b[we])) : yt(Q, b))) {
          x && x();
          const be = Wt;
          Wt = d;
          try {
            const we = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              b === or ? void 0 : M && b[0] === or ? [] : b,
              I
            ];
            b = Q, c ? c(t, 3, we) : (
              // @ts-expect-error
              t(...we)
            );
          } finally {
            Wt = be;
          }
        }
      } else
        d.run();
  };
  return a && a(U), d = new mi(g), d.scheduler = i ? () => i(U, !1) : U, I = (D) => ga(D, !1, d), x = d.onStop = () => {
    const D = pr.get(d);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const Q of D) Q();
      pr.delete(d);
    }
  }, t ? r ? U(!0) : b = d.run() : i ? i(U.bind(null, !0), !0) : d.run(), E.pause = d.pause.bind(d), E.resume = d.resume.bind(d), E.stop = E, E;
}
function Et(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fe(e))
    Et(e.value, t, n);
  else if (B(e))
    for (let r = 0; r < e.length; r++)
      Et(e[r], t, n);
  else if (Zt(e) || Nt(e))
    e.forEach((r) => {
      Et(r, t, n);
    });
  else if (ci(e)) {
    for (const r in e)
      Et(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Et(e[r], t, n);
  }
  return e;
}
function Wn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Rr(s, t, n);
  }
}
function tt(e, t, n, r) {
  if (K(e)) {
    const s = Wn(e, t, n, r);
    return s && li(s) && s.catch((o) => {
      Rr(o, t, n);
    }), s;
  }
  if (B(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(tt(e[o], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || oe;
  if (t) {
    let a = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let g = 0; g < d.length; g++)
          if (d[g](e, c, h) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      St(), Wn(o, null, 10, [
        e,
        c,
        h
      ]), At();
      return;
    }
  }
  ba(e, n, s, r, i);
}
function ba(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Me = [];
let at = -1;
const pn = [];
let Pt = null, un = 0;
const Pi = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Ni(e) {
  const t = hr || Pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = at + 1, n = Me.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Me[r], o = jn(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Me[Me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Me.push(e) : Me.splice(ya(t), 0, e), e.flags |= 1, Di();
  }
}
function Di() {
  hr || (hr = Pi.then(Li));
}
function Ta(e) {
  if (!B(e))
    Pt && e.id === -1 ? Pt.splice(un + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      pn.push(e[t]);
  Di();
}
function po(e, t, n = at + 1) {
  for (; n < Me.length; n++) {
    const r = Me[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mi(e) {
  if (pn.length) {
    const t = [...new Set(pn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (pn.length = 0, Pt) {
      for (let n = 0; n < t.length; n++)
        Pt.push(t[n]);
      return;
    }
    for (Pt = t, un = 0; un < Pt.length; un++) {
      const n = Pt[un];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pt = null, un = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Li(e) {
  try {
    for (at = 0; at < Me.length; at++) {
      const t = Me[at];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; at < Me.length; at++) {
      const t = Me[at];
      t && (t.flags &= -2);
    }
    at = -1, Me.length = 0, Mi(), hr = null, (Me.length || pn.length) && Li();
  }
}
let Ye = null, Fi = null;
function mr(e) {
  const t = Ye;
  return Ye = e, Fi = e && e.type.__scopeId || null, t;
}
function Ea(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ao(-1);
    const o = mr(t), i = Jt.length;
    let a;
    try {
      a = e(...s);
    } finally {
      for (let c = Jt.length; c > i; c--) il();
      mr(o), r._d && Ao(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function $t(e, t) {
  if (Ye === null)
    return e;
  const n = Mr(Ye), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, c = oe] = t[s];
    o && (K(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Et(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function Vt(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let c = a.dir[r];
    c && (St(), tt(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), At());
  }
}
function va(e, t) {
  if (Le) {
    let n = Le.provides;
    const r = Le.parent && Le.parent.provides;
    r === n && (n = Le.provides = Object.create(r)), n[e] = t;
  }
}
function ur(e, t, n = !1) {
  const r = Tc();
  if (r || hn) {
    let s = hn ? hn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(r && r.proxy) : t;
  }
}
const Sa = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(Sa);
function Zr(e, t, n) {
  return Ui(e, t, n);
}
function Ui(e, t, n = oe) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = Re({}, n), c = t && r || !t && o !== "post";
  let h;
  if (zn) {
    if (o === "sync") {
      const I = Aa();
      h = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!c) {
      const I = () => {
      };
      return I.stop = ft, I.resume = ft, I.pause = ft, I;
    }
  }
  const d = Le;
  a.call = (I, j, M) => tt(I, d, j, M);
  let g = !1;
  o === "post" ? a.scheduler = (I) => {
    je(I, d && d.suspense);
  } : o !== "sync" && (g = !0, a.scheduler = (I, j) => {
    j ? I() : Fs(I);
  }), a.augmentJob = (I) => {
    t && (I.flags |= 4), g && (I.flags |= 2, d && (I.id = d.uid, I.i = d));
  };
  const x = _a(e, t, a);
  return zn && (h ? h.push(x) : c && x()), x;
}
function xa(e, t, n) {
  const r = this.proxy, s = pe(e) ? e.includes(".") ? ki(r, e) : () => r[e] : e.bind(r, r);
  let o;
  K(t) ? o = t : (o = t.handler, n = t);
  const i = Gn(this), a = Ui(s, o.bind(r), n);
  return i(), a;
}
function ki(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== wt) {
        t = n;
        break;
      }
  }
  return t;
}
function Hi(e) {
  if (!ks(e))
    return Ir(e.type) && e.children ? Ca(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && K(n.default))
      return n.default();
  }
}
function Us(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Us(
      Ir(n.type) && Hi(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ho(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const gr = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (B(e)) {
    e.forEach(
      (M, $) => Ln(
        M,
        t && (B(t) ? t[$] : t),
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
  const o = r.shapeFlag & 4 ? Mr(r.component) : r.el, i = s ? null : o, { i: a, r: c } = e, h = t && t.r, d = a.refs === oe ? a.refs = {} : a.refs, g = a.setupState, x = /* @__PURE__ */ re(g), I = g === oe ? ii : (M) => ho(d, M) ? !1 : ne(x, M), j = (M, $) => !($ && ho(d, $));
  if (h != null && h !== c) {
    if (mo(t), pe(h))
      d[h] = null, I(h) && (g[h] = null);
    else if (/* @__PURE__ */ Fe(h)) {
      const M = t;
      j(h, M.k) && (h.value = null), M.k && (d[M.k] = null);
    }
  }
  if (K(c))
    Wn(c, a, 12, [i, d]);
  else {
    const M = pe(c), $ = /* @__PURE__ */ Fe(c);
    if (M || $) {
      const E = () => {
        if (e.f) {
          const b = M ? I(c) ? g[c] : d[c] : j() || !e.k ? c.value : d[e.k];
          if (s)
            B(b) && ws(b, o);
          else if (B(b))
            b.includes(o) || b.push(o);
          else if (M)
            d[c] = [o], I(c) && (g[c] = d[c]);
          else {
            const U = [o];
            j(c, e.k) && (c.value = U), e.k && (d[e.k] = U);
          }
        } else M ? (d[c] = i, I(c) && (g[c] = i)) : $ && (j(c, e.k) && (c.value = i), e.k && (d[e.k] = i));
      };
      if (i) {
        const b = () => {
          E(), gr.delete(e);
        };
        b.id = -1, gr.set(e, b), je(b, n);
      } else
        mo(e), E();
    }
  }
}
function mo(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
wr().requestIdleCallback;
wr().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  $i(e, "a", t);
}
function Ra(e, t) {
  $i(e, "da", t);
}
function $i(e, t, n = Le) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Pr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ks(s.parent.vnode) && Ia(r, t, n, s), s = s.parent;
  }
}
function Ia(e, t, n, r) {
  const s = Pr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Vi(() => {
    ws(r[t], s);
  }, n);
}
function Pr(e, t, n = Le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      St();
      const a = Gn(n), c = tt(t, n, e, i);
      return a(), At(), c;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Ct = (e) => (t, n = Le) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Ct("bm"), Na = Ct("m"), Da = Ct(
  "bu"
), Ma = Ct("u"), La = Ct(
  "bum"
), Vi = Ct("um"), Fa = Ct(
  "sp"
), Ua = Ct("rtg"), ka = Ct("rtc");
function Ha(e, t = Le) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function ot(e, t, n, r) {
  let s;
  const o = n, i = B(e);
  if (i || pe(e)) {
    const a = i && /* @__PURE__ */ Xt(e);
    let c = !1, h = !1;
    a && (c = !/* @__PURE__ */ et(e), h = /* @__PURE__ */ Mt(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, g = e.length; d < g; d++)
      s[d] = t(
        c ? h ? gn(xt(e[d])) : xt(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (se(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, c) => t(a, c, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, h = a.length; c < h; c++) {
        const d = a[c];
        s[c] = t(e[d], d, c, o);
      }
    }
  else
    s = [];
  return s;
}
const bs = (e) => e ? ul(e) ? Mr(e) : bs(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bs(e.parent),
    $root: (e) => bs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ni.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== oe && !e.__isScriptSetup && ne(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c } = e;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (es(r, t))
          return i[t] = 1, r[t];
        if (s !== oe && ne(s, t))
          return i[t] = 2, s[t];
        if (ne(o, t))
          return i[t] = 3, o[t];
        if (n !== oe && ne(n, t))
          return i[t] = 4, n[t];
        ys && (i[t] = 0);
      }
    }
    const h = Un[t];
    let d, g;
    if (h)
      return t === "$attrs" && Oe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== oe && ne(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, ne(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== oe && ne(r, t) ? (r[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i }
  }, a) {
    let c;
    return !!(n[a] || e !== oe && a[0] !== "$" && ne(e, a) || es(t, a) || ne(o, a) || ne(r, a) || ne(Un, a) || ne(s.config.globalProperties, a) || (c = i.__cssModules) && c[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function go(e) {
  return B(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ys = !0;
function Va(e) {
  const t = Bi(e), n = e.proxy, r = e.ctx;
  ys = !1, t.beforeCreate && _o(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: c,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: g,
    mounted: x,
    beforeUpdate: I,
    updated: j,
    activated: M,
    deactivated: $,
    beforeDestroy: E,
    beforeUnmount: b,
    destroyed: U,
    unmounted: D,
    render: Q,
    renderTracked: be,
    renderTriggered: we,
    errorCaptured: Ge,
    serverPrefetch: ye,
    // public API
    expose: Ie,
    inheritAttrs: pt,
    // assets
    components: Lt,
    directives: nt,
    filters: en
  } = t;
  if (h && za(h, r, null), i)
    for (const ce in i) {
      const ee = i[ce];
      K(ee) && (r[ce] = ee.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    se(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, o)
    for (const ce in o) {
      const ee = o[ce], Xe = K(ee) ? ee.bind(n, n) : K(ee.get) ? ee.get.bind(n, n) : ft, Ft = !K(ee) && K(ee.set) ? ee.set.bind(n) : ft, mt = It({
        get: Xe,
        set: Ft
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => mt.value,
        set: (Ke) => mt.value = Ke
      });
    }
  if (a)
    for (const ce in a)
      zi(a[ce], r, n, ce);
  if (c) {
    const ce = K(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((ee) => {
      va(ee, ce[ee]);
    });
  }
  d && _o(d, e, "c");
  function Ae(ce, ee) {
    B(ee) ? ee.forEach((Xe) => ce(Xe.bind(n))) : ee && ce(ee.bind(n));
  }
  if (Ae(Pa, g), Ae(Na, x), Ae(Da, I), Ae(Ma, j), Ae(Oa, M), Ae(Ra, $), Ae(Ha, Ge), Ae(ka, be), Ae(Ua, we), Ae(La, b), Ae(Vi, D), Ae(Fa, ye), B(Ie))
    if (Ie.length) {
      const ce = e.exposed || (e.exposed = {});
      Ie.forEach((ee) => {
        Object.defineProperty(ce, ee, {
          get: () => n[ee],
          set: (Xe) => n[ee] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Q && e.render === ft && (e.render = Q), pt != null && (e.inheritAttrs = pt), Lt && (e.components = Lt), nt && (e.directives = nt), ye && ji(e);
}
function za(e, t, n = ft) {
  B(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let o;
    se(s) ? "default" in s ? o = ur(
      s.from || r,
      s.default,
      !0
    ) : o = ur(s.from || r) : o = ur(s), /* @__PURE__ */ Fe(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function _o(e, t, n) {
  tt(
    B(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zi(e, t, n, r) {
  let s = r.includes(".") ? ki(n, r) : () => n[r];
  if (pe(e)) {
    const o = t[e];
    K(o) && Zr(s, o);
  } else if (K(e))
    Zr(s, e.bind(n));
  else if (se(e))
    if (B(e))
      e.forEach((o) => zi(o, t, n, r));
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(o) && Zr(s, o, e);
    }
}
function Bi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (h) => _r(c, h, i, !0)
  ), _r(c, t, i)), se(t) && o.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && _r(e, o, n, !0), s && s.forEach(
    (i) => _r(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = Ba[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ba = {
  data: bo,
  props: yo,
  emits: yo,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: De,
  created: De,
  beforeMount: De,
  mounted: De,
  beforeUpdate: De,
  updated: De,
  beforeDestroy: De,
  beforeUnmount: De,
  destroyed: De,
  unmounted: De,
  activated: De,
  deactivated: De,
  errorCaptured: De,
  serverPrefetch: De,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ga,
  // provide / inject
  provide: bo,
  inject: Wa
};
function bo(e, t) {
  return t ? e ? function() {
    return Re(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Ts(e), Ts(t));
}
function Ts(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function De(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yo(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Re(
    /* @__PURE__ */ Object.create(null),
    go(e),
    go(t ?? {})
  ) : t;
}
function Ga(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = De(e[r], t[r]);
  return n;
}
function Wi() {
  return {
    app: null,
    config: {
      isNativeTag: ii,
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
    K(r) || (r = Re({}, r)), s != null && !se(s) && (s = null);
    const o = Wi(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const h = o.app = {
      _uid: Ka++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: wc,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...g) {
        return i.has(d) || (d && K(d.install) ? (i.add(d), d.install(h, ...g)) : K(d) && (i.add(d), d(h, ...g))), h;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), h;
      },
      component(d, g) {
        return g ? (o.components[d] = g, h) : o.components[d];
      },
      directive(d, g) {
        return g ? (o.directives[d] = g, h) : o.directives[d];
      },
      mount(d, g, x) {
        if (!c) {
          const I = h._ceVNode || vt(r, s);
          return I.appContext = o, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(I, d, x), c = !0, h._container = d, d.__vue_app__ = h, Mr(I.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        c && (tt(
          a,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, g) {
        return o.provides[d] = g, h;
      },
      runWithContext(d) {
        const g = hn;
        hn = h;
        try {
          return d();
        } finally {
          hn = g;
        }
      }
    };
    return h;
  };
}
let hn = null;
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${Qt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || oe;
  let s = n;
  const o = t.startsWith("update:"), i = o && Ya(r, t.slice(7));
  i && (i.trim && (s = n.map((d) => pe(d) ? d.trim() : d)), i.number && (s = s.map(xr)));
  let a, c = r[a = Kr(t)] || // also try camelCase event handler (#2249)
  r[a = Kr(Ze(t))];
  !c && o && (c = r[a = Kr(Qt(t))]), c && tt(
    c,
    e,
    6,
    s
  );
  const h = r[a + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, tt(
      h,
      e,
      6,
      s
    );
  }
}
const Ja = /* @__PURE__ */ new WeakMap();
function Gi(e, t, n = !1) {
  const r = n ? Ja : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!K(e)) {
    const c = (h) => {
      const d = Gi(h, t, !0);
      d && (a = !0, Re(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !a ? (se(e) && r.set(e, null), null) : (B(o) ? o.forEach((c) => i[c] = null) : Re(i, o), se(e) && r.set(e, i), i);
}
function Nr(e, t) {
  return !e || !vr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Qt(t)) || ne(e, t));
}
function To(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: c,
    render: h,
    renderCache: d,
    props: g,
    data: x,
    setupState: I,
    ctx: j,
    inheritAttrs: M
  } = e, $ = mr(e);
  let E, b;
  try {
    if (n.shapeFlag & 4) {
      const D = s || r, Q = D;
      E = ut(
        h.call(
          Q,
          D,
          d,
          g,
          I,
          x,
          j
        )
      ), b = a;
    } else {
      const D = t;
      E = ut(
        D.length > 1 ? D(
          g,
          { attrs: a, slots: i, emit: c }
        ) : D(
          g,
          null
        )
      ), b = t.props ? a : Za(a);
    }
  } catch (D) {
    Jt.length = 0, Rr(D, e, 1), E = vt(wt);
  }
  let U = E;
  if (b && M !== !1) {
    const D = Object.keys(b), { shapeFlag: Q } = U;
    D.length && Q & 7 && (o && D.some(Sr) && (b = Qa(
      b,
      o
    )), U = _n(U, b, !1, !0));
  }
  if (n.dirs && (U = _n(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = Ir(U.type) && Hi(U) || U;
    Us(D, n.transition);
  }
  return E = U, mr($), E;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: c } = t, h = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Eo(r, i, h) : !!i;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        const x = d[g];
        if (Ki(i, r, x) && !Nr(h, x))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Eo(r, i, h) : !0 : !!i;
  return !1;
}
function Eo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (Ki(t, e, o) && !Nr(n, o))
      return !0;
  }
  return !1;
}
function Ki(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && se(r) && se(s) ? !Dt(r, s) : r !== s;
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
const qi = {}, Yi = () => Object.create(qi), Xi = (e) => Object.getPrototypeOf(e) === qi;
function nc(e, t, n, r = !1) {
  const s = {}, o = Yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ji(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ fa(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function rc(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = /* @__PURE__ */ re(s), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        let x = d[g];
        if (Nr(e.emitsOptions, x))
          continue;
        const I = t[x];
        if (c)
          if (ne(o, x))
            I !== o[x] && (o[x] = I, h = !0);
          else {
            const j = Ze(x);
            s[j] = Es(
              c,
              a,
              j,
              I,
              e,
              !1
            );
          }
        else
          I !== o[x] && (o[x] = I, h = !0);
      }
    }
  } else {
    Ji(e, t, s, o) && (h = !0);
    let d;
    for (const g in a)
      (!t || // for camelCase
      !ne(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Qt(g)) === g || !ne(t, d))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[g] = Es(
        c,
        a,
        g,
        void 0,
        e,
        !0
      )) : delete s[g]);
    if (o !== a)
      for (const g in o)
        (!t || !ne(t, g)) && (delete o[g], h = !0);
  }
  h && Tt(e.attrs, "set", "");
}
function Ji(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let c in t) {
      if (Nn(c))
        continue;
      const h = t[c];
      let d;
      s && ne(s, d = Ze(c)) ? !o || !o.includes(d) ? n[d] = h : (a || (a = {}))[d] = h : Nr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, i = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ re(n), h = a || oe;
    for (let d = 0; d < o.length; d++) {
      const g = o[d];
      n[g] = Es(
        s,
        c,
        g,
        h[g],
        e,
        !ne(h, g)
      );
    }
  }
  return i;
}
function Es(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = ne(i, "default");
    if (a && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && K(c)) {
        const { propsDefaults: h } = s;
        if (n in h)
          r = h[n];
        else {
          const d = Gn(s);
          r = h[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Qt(n)) && (r = !0));
  }
  return r;
}
const sc = /* @__PURE__ */ new WeakMap();
function Zi(e, t, n = !1) {
  const r = n ? sc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let c = !1;
  if (!K(e)) {
    const d = (g) => {
      c = !0;
      const [x, I] = Zi(g, t, !0);
      Re(i, x), I && a.push(...I);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c)
    return se(e) && r.set(e, dn), dn;
  if (B(o))
    for (let d = 0; d < o.length; d++) {
      const g = Ze(o[d]);
      vo(g) && (i[g] = oe);
    }
  else if (o)
    for (const d in o) {
      const g = Ze(d);
      if (vo(g)) {
        const x = o[d], I = i[g] = B(x) || K(x) ? { type: x } : Re({}, x), j = I.type;
        let M = !1, $ = !0;
        if (B(j))
          for (let E = 0; E < j.length; ++E) {
            const b = j[E], U = K(b) && b.name;
            if (U === "Boolean") {
              M = !0;
              break;
            } else U === "String" && ($ = !1);
          }
        else
          M = K(j) && j.name === "Boolean";
        I[
          0
          /* shouldCast */
        ] = M, I[
          1
          /* shouldCastTrue */
        ] = $, (M || ne(I, "default")) && a.push(g);
      }
    }
  const h = [i, a];
  return se(e) && r.set(e, h), h;
}
function vo(e) {
  return e[0] !== "$" && !Nn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => B(e) ? e.map(ut) : [ut(e)], oc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qi = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const o = e[s];
    if (K(o))
      t[s] = oc(s, o, r);
    else if (o != null) {
      const i = js(o);
      t[s] = () => i;
    }
  }
}, el = (e, t) => {
  const n = js(t);
  e.slots.default = () => n;
}, tl = (e, t, n) => {
  for (const r in t)
    (n || !Hs(r)) && (e[r] = t[r]);
}, ic = (e, t, n) => {
  const r = e.slots = Yi();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && fi(r, "_", s, !0)) : Qi(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = oe;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : tl(s, t, n) : (o = !t.$stable, Qi(t, s)), i = t;
  } else t && (el(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !Hs(a) && i[a] == null && delete s[a];
}, je = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = wr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: c,
    setText: h,
    setElementText: d,
    parentNode: g,
    nextSibling: x,
    setScopeId: I = ft,
    insertStaticContent: j
  } = e, M = (u, f, m, A = null, _ = null, v = null, C = void 0, O = null, R = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !An(u, f) && (A = tn(u), Ke(u, _, v, !0), u = null), f.patchFlag === -2 && (R = !1, f.dynamicChildren = null);
    const { type: y, ref: V, shapeFlag: P } = f;
    switch (y) {
      case Dr:
        $(u, f, m, A);
        break;
      case wt:
        E(u, f, m, A);
        break;
      case ns:
        u == null && b(f, m, A, C);
        break;
      case ge:
        Lt(
          u,
          f,
          m,
          A,
          _,
          v,
          C,
          O,
          R
        );
        break;
      default:
        P & 1 ? Q(
          u,
          f,
          m,
          A,
          _,
          v,
          C,
          O,
          R
        ) : P & 6 ? nt(
          u,
          f,
          m,
          A,
          _,
          v,
          C,
          O,
          R
        ) : (P & 64 || P & 128) && y.process(
          u,
          f,
          m,
          A,
          _,
          v,
          C,
          O,
          R,
          kt
        );
    }
    V != null && _ ? Ln(V, u && u.ref, v, f || u, !f) : V == null && u && u.ref != null && Ln(u.ref, null, v, u, !0);
  }, $ = (u, f, m, A) => {
    if (u == null)
      r(
        f.el = a(f.children),
        m,
        A
      );
    else {
      const _ = f.el = u.el;
      f.children !== u.children && h(_, f.children);
    }
  }, E = (u, f, m, A) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      A
    ) : f.el = u.el;
  }, b = (u, f, m, A) => {
    [u.el, u.anchor] = j(
      u.children,
      f,
      m,
      A,
      u.el,
      u.anchor
    );
  }, U = ({ el: u, anchor: f }, m, A) => {
    let _;
    for (; u && u !== f; )
      _ = x(u), r(u, m, A), u = _;
    r(f, m, A);
  }, D = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, Q = (u, f, m, A, _, v, C, O, R) => {
    if (f.type === "svg" ? C = "svg" : f.type === "math" && (C = "mathml"), u == null)
      be(
        f,
        m,
        A,
        _,
        v,
        C,
        O,
        R
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), ye(
          u,
          f,
          _,
          v,
          C,
          O,
          R
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, be = (u, f, m, A, _, v, C, O) => {
    let R, y;
    const { props: V, shapeFlag: P, transition: k, dirs: z } = u;
    if (R = u.el = i(
      u.type,
      v,
      V && V.is,
      V
    ), P & 8 ? d(R, u.children) : P & 16 && Ge(
      u.children,
      R,
      null,
      A,
      _,
      ts(u, v),
      C,
      O
    ), z && Vt(u, null, A, "created"), we(R, u, u.scopeId, C, A), V) {
      for (const J in V)
        J !== "value" && !Nn(J) && o(R, J, null, V[J], v, A);
      "value" in V && o(R, "value", null, V.value, v), (y = V.onVnodeBeforeMount) && lt(y, A, u);
    }
    z && Vt(u, null, A, "beforeMount");
    const G = uc(_, k);
    G && k.beforeEnter(R), r(R, f, m), ((y = V && V.onVnodeMounted) || G || z) && je(() => {
      y && lt(y, A, u), G && k.enter(R), z && Vt(u, null, A, "mounted");
    }, _);
  }, we = (u, f, m, A, _) => {
    if (m && I(u, m), A)
      for (let v = 0; v < A.length; v++)
        I(u, A[v]);
    if (_) {
      let v = _.subTree;
      if (f === v || ol(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const C = _.vnode;
        we(
          u,
          C,
          C.scopeId,
          C.slotScopeIds,
          _.parent
        );
      }
    }
  }, Ge = (u, f, m, A, _, v, C, O, R = 0) => {
    for (let y = R; y < u.length; y++) {
      const V = u[y] = O ? bt(u[y]) : ut(u[y]);
      M(
        null,
        V,
        f,
        m,
        A,
        _,
        v,
        C,
        O
      );
    }
  }, ye = (u, f, m, A, _, v, C) => {
    const O = f.el = u.el;
    let { patchFlag: R, dynamicChildren: y, dirs: V } = f;
    R |= u.patchFlag & 16;
    const P = u.props || oe, k = f.props || oe;
    let z;
    if (m && zt(m, !1), (z = k.onVnodeBeforeUpdate) && lt(z, m, f, u), V && Vt(f, u, m, "beforeUpdate"), m && zt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (R = 0, C = !1, y = null), (P.innerHTML && k.innerHTML == null || P.textContent && k.textContent == null) && d(O, ""), y ? Ie(
      u.dynamicChildren,
      y,
      O,
      m,
      A,
      ts(f, _),
      v
    ) : C || ee(
      u,
      f,
      O,
      null,
      m,
      A,
      ts(f, _),
      v,
      !1
    ), R > 0) {
      if (R & 16)
        pt(O, P, k, m, _);
      else if (R & 2 && P.class !== k.class && o(O, "class", null, k.class, _), R & 4 && o(O, "style", P.style, k.style, _), R & 8) {
        const G = f.dynamicProps;
        for (let J = 0; J < G.length; J++) {
          const X = G[J], ue = P[X], de = k[X];
          (de !== ue || X === "value") && o(O, X, ue, de, _, m);
        }
      }
      R & 1 && u.children !== f.children && d(O, f.children);
    } else !C && y == null && pt(O, P, k, m, _);
    ((z = k.onVnodeUpdated) || V) && je(() => {
      z && lt(z, m, f, u), V && Vt(f, u, m, "updated");
    }, A);
  }, Ie = (u, f, m, A, _, v, C) => {
    for (let O = 0; O < f.length; O++) {
      const R = u[O], y = f[O], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !An(R, y) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? g(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        R,
        y,
        V,
        null,
        A,
        _,
        v,
        C,
        !0
      );
    }
  }, pt = (u, f, m, A, _) => {
    if (f !== m) {
      if (f !== oe)
        for (const v in f)
          !Nn(v) && !(v in m) && o(
            u,
            v,
            f[v],
            null,
            _,
            A
          );
      for (const v in m) {
        if (Nn(v)) continue;
        const C = m[v], O = f[v];
        C !== O && v !== "value" && o(u, v, O, C, _, A);
      }
      "value" in m && o(u, "value", f.value, m.value, _);
    }
  }, Lt = (u, f, m, A, _, v, C, O, R) => {
    const y = f.el = u ? u.el : a(""), V = f.anchor = u ? u.anchor : a("");
    let { patchFlag: P, dynamicChildren: k, slotScopeIds: z } = f;
    z && (O = O ? O.concat(z) : z), u == null ? (r(y, m, A), r(V, m, A), Ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      V,
      _,
      v,
      C,
      O,
      R
    )) : P > 0 && P & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === k.length ? (Ie(
      u.dynamicChildren,
      k,
      m,
      _,
      v,
      C,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : ee(
      u,
      f,
      m,
      V,
      _,
      v,
      C,
      O,
      R
    );
  }, nt = (u, f, m, A, _, v, C, O, R) => {
    f.slotScopeIds = O, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      A,
      C,
      R
    ) : en(
      f,
      m,
      A,
      _,
      v,
      C,
      R
    ) : ht(u, f, R);
  }, en = (u, f, m, A, _, v, C) => {
    const O = u.component = yc(
      u,
      A,
      _
    );
    if (ks(u) && (O.ctx.renderer = kt), Ec(O, !1, C), O.asyncDep) {
      if (_ && _.registerDep(O, Ae, C), !u.el) {
        const R = O.subTree = vt(wt);
        E(null, R, f, m), u.placeholder = R.el;
      }
    } else
      Ae(
        O,
        u,
        f,
        m,
        _,
        v,
        C
      );
  }, ht = (u, f, m) => {
    const A = f.component = u.component;
    if (ec(u, f, m))
      if (A.asyncDep && !A.asyncResolved) {
        ce(A, f, m);
        return;
      } else
        A.next = f, A.update();
    else
      f.el = u.el, A.vnode = f;
  }, Ae = (u, f, m, A, _, v, C) => {
    const O = () => {
      if (u.isMounted) {
        let { next: P, bu: k, u: z, parent: G, vnode: J } = u;
        {
          const Ue = rl(u);
          if (Ue) {
            P && (P.el = J.el, ce(u, P, C)), Ue.asyncDep.then(() => {
              je(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let X = P, ue;
        zt(u, !1), P ? (P.el = J.el, ce(u, P, C)) : P = J, k && cr(k), (ue = P.props && P.props.onVnodeBeforeUpdate) && lt(ue, G, P, J), zt(u, !0);
        const de = To(u), Pe = u.subTree;
        u.subTree = de, M(
          Pe,
          de,
          // parent may have changed if it's in a teleport
          g(Pe.el),
          // anchor may have changed if it's in a fragment
          tn(Pe),
          u,
          _,
          v
        ), P.el = de.el, X === null && tc(u, de.el), z && je(z, _), (ue = P.props && P.props.onVnodeUpdated) && je(
          () => lt(ue, G, P, J),
          _
        );
      } else {
        let P;
        const { el: k, props: z } = f, { bm: G, m: J, parent: X, root: ue, type: de } = u, Pe = Fn(f);
        zt(u, !1), G && cr(G), !Pe && (P = z && z.onVnodeBeforeMount) && lt(P, X, f), zt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            de,
            u.parent ? u.parent.type : void 0
          );
          const Ue = u.subTree = To(u);
          M(
            null,
            Ue,
            m,
            A,
            u,
            _,
            v
          ), f.el = Ue.el;
        }
        if (J && je(J, _), !Pe && (P = z && z.onVnodeMounted)) {
          const Ue = f;
          je(
            () => lt(P, X, Ue),
            _
          );
        }
        (f.shapeFlag & 256 || X && Fn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && je(u.a, _), u.isMounted = !0, f = m = A = null;
      }
    };
    u.scope.on();
    const R = u.effect = new mi(O);
    u.scope.off();
    const y = u.update = R.run.bind(R), V = u.job = R.runIfDirty.bind(R);
    V.i = u, V.id = u.uid, R.scheduler = () => Fs(V), zt(u, !0), y();
  }, ce = (u, f, m) => {
    f.component = u;
    const A = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, A, m), lc(u, f.children, m), St(), po(u), At();
  }, ee = (u, f, m, A, _, v, C, O, R = !1) => {
    const y = u && u.children, V = u ? u.shapeFlag : 0, P = f.children, { patchFlag: k, shapeFlag: z } = f;
    if (k > 0) {
      if (k & 128) {
        Ft(
          y,
          P,
          m,
          A,
          _,
          v,
          C,
          O,
          R
        );
        return;
      } else if (k & 256) {
        Xe(
          y,
          P,
          m,
          A,
          _,
          v,
          C,
          O,
          R
        );
        return;
      }
    }
    z & 8 ? (V & 16 && Ut(y, _, v), P !== y && d(m, P)) : V & 16 ? z & 16 ? Ft(
      y,
      P,
      m,
      A,
      _,
      v,
      C,
      O,
      R
    ) : Ut(y, _, v, !0) : (V & 8 && d(m, ""), z & 16 && Ge(
      P,
      m,
      A,
      _,
      v,
      C,
      O,
      R
    ));
  }, Xe = (u, f, m, A, _, v, C, O, R) => {
    u = u || dn, f = f || dn;
    const y = u.length, V = f.length, P = Math.min(y, V);
    let k;
    for (k = 0; k < P; k++) {
      const z = f[k] = R ? bt(f[k]) : ut(f[k]);
      M(
        u[k],
        z,
        m,
        null,
        _,
        v,
        C,
        O,
        R
      );
    }
    y > V ? Ut(
      u,
      _,
      v,
      !0,
      !1,
      P
    ) : Ge(
      f,
      m,
      A,
      _,
      v,
      C,
      O,
      R,
      P
    );
  }, Ft = (u, f, m, A, _, v, C, O, R) => {
    let y = 0;
    const V = f.length;
    let P = u.length - 1, k = V - 1;
    for (; y <= P && y <= k; ) {
      const z = u[y], G = f[y] = R ? bt(f[y]) : ut(f[y]);
      if (An(z, G))
        M(
          z,
          G,
          m,
          null,
          _,
          v,
          C,
          O,
          R
        );
      else
        break;
      y++;
    }
    for (; y <= P && y <= k; ) {
      const z = u[P], G = f[k] = R ? bt(f[k]) : ut(f[k]);
      if (An(z, G))
        M(
          z,
          G,
          m,
          null,
          _,
          v,
          C,
          O,
          R
        );
      else
        break;
      P--, k--;
    }
    if (y > P) {
      if (y <= k) {
        const z = k + 1, G = z < V ? f[z].el : A;
        for (; y <= k; )
          M(
            null,
            f[y] = R ? bt(f[y]) : ut(f[y]),
            m,
            G,
            _,
            v,
            C,
            O,
            R
          ), y++;
      }
    } else if (y > k)
      for (; y <= P; )
        Ke(u[y], _, v, !0), y++;
    else {
      const z = y, G = y, J = /* @__PURE__ */ new Map();
      for (y = G; y <= k; y++) {
        const Ee = f[y] = R ? bt(f[y]) : ut(f[y]);
        Ee.key != null && J.set(Ee.key, y);
      }
      let X, ue = 0;
      const de = k - G + 1;
      let Pe = !1, Ue = 0;
      const qe = new Array(de);
      for (y = 0; y < de; y++) qe[y] = 0;
      for (y = z; y <= P; y++) {
        const Ee = u[y];
        if (ue >= de) {
          Ke(Ee, _, v, !0);
          continue;
        }
        let Ve;
        if (Ee.key != null)
          Ve = J.get(Ee.key);
        else
          for (X = G; X <= k; X++)
            if (qe[X - G] === 0 && An(Ee, f[X])) {
              Ve = X;
              break;
            }
        Ve === void 0 ? Ke(Ee, _, v, !0) : (qe[Ve - G] = y + 1, Ve >= Ue ? Ue = Ve : Pe = !0, M(
          Ee,
          f[Ve],
          m,
          null,
          _,
          v,
          C,
          O,
          R
        ), ue++);
      }
      const Ht = Pe ? fc(qe) : dn;
      for (X = Ht.length - 1, y = de - 1; y >= 0; y--) {
        const Ee = G + y, Ve = f[Ee], yn = f[Ee + 1], Tn = Ee + 1 < V ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          yn.el || sl(yn)
        ) : A;
        qe[y] === 0 ? M(
          null,
          Ve,
          m,
          Tn,
          _,
          v,
          C,
          O,
          R
        ) : Pe && (X < 0 || y !== Ht[X] ? mt(Ve, m, Tn, 2) : X--);
      }
    }
  }, mt = (u, f, m, A, _ = null) => {
    const { el: v, type: C, transition: O, children: R, shapeFlag: y } = u;
    if (y & 6) {
      mt(u.component.subTree, f, m, A);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, A);
      return;
    }
    if (y & 64) {
      C.move(u, f, m, kt);
      return;
    }
    if (C === ge) {
      r(v, f, m);
      for (let P = 0; P < R.length; P++)
        mt(R[P], f, m, A);
      r(u.anchor, f, m);
      return;
    }
    if (C === ns) {
      U(u, f, m);
      return;
    }
    if (A !== 2 && y & 1 && O)
      if (A === 0)
        O.persisted && !v[Qr] ? r(v, f, m) : (O.beforeEnter(v), r(v, f, m), je(() => O.enter(v), _));
      else {
        const { leave: P, delayLeave: k, afterLeave: z } = O, G = () => {
          u.ctx.isUnmounted ? s(v) : r(v, f, m);
        }, J = () => {
          const X = v._isLeaving || !!v[Qr];
          v._isLeaving && v[Qr](
            !0
            /* cancelled */
          ), O.persisted && !X ? G() : P(v, () => {
            G(), z && z();
          });
        };
        k ? k(v, G, J) : J();
      }
    else
      r(v, f, m);
  }, Ke = (u, f, m, A = !1, _ = !1) => {
    const {
      type: v,
      props: C,
      ref: O,
      children: R,
      dynamicChildren: y,
      shapeFlag: V,
      patchFlag: P,
      dirs: k,
      cacheIndex: z,
      memo: G
    } = u;
    if (P === -2 && (_ = !1), O != null && (St(), Ln(O, null, m, u, !0), At()), z != null && (f.renderCache[z] = void 0), V & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const J = V & 1 && k, X = !Fn(u);
    let ue;
    if (X && (ue = C && C.onVnodeBeforeUnmount) && lt(ue, f, u), V & 6)
      Lr(u.component, m, A);
    else {
      if (V & 128) {
        u.suspense.unmount(m, A);
        return;
      }
      J && Vt(u, null, f, "beforeUnmount"), V & 64 ? u.type.remove(
        u,
        f,
        m,
        kt,
        A
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== ge || P > 0 && P & 64) ? Ut(
        y,
        f,
        m,
        !1,
        !0
      ) : (v === ge && P & 384 || !_ && V & 16) && Ut(R, f, m), A && Kn(u);
    }
    const de = G != null && z == null;
    (X && (ue = C && C.onVnodeUnmounted) || J || de) && je(() => {
      ue && lt(ue, f, u), J && Vt(u, null, f, "unmounted"), de && (u.el = null);
    }, m);
  }, Kn = (u) => {
    const { type: f, el: m, anchor: A, transition: _ } = u;
    if (f === ge) {
      ie(m, A);
      return;
    }
    if (f === ns) {
      D(u);
      return;
    }
    const v = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: C, delayLeave: O } = _, R = () => C(m, v);
      O ? O(u.el, v, R) : R();
    } else
      v();
  }, ie = (u, f) => {
    let m;
    for (; u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: A, scope: _, job: v, subTree: C, um: O, m: R, a: y } = u;
    So(R), So(y), A && cr(A), _.stop(), v && (v.flags |= 8, Ke(C, u, f, m)), O && je(O, f), je(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ut = (u, f, m, A = !1, _ = !1, v = 0) => {
    for (let C = v; C < u.length; C++)
      Ke(u[C], f, m, A, _);
  }, tn = (u) => {
    if (u.shapeFlag & 6)
      return tn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = x(u.anchor || u.el), m = f && f[wa];
    return m ? x(m) : f;
  };
  let bn = !1;
  const qn = (u, f, m) => {
    let A;
    u == null ? f._vnode && (Ke(f._vnode, null, null, !0), A = f._vnode.component) : M(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, bn || (bn = !0, po(A), Mi(), bn = !1);
  }, kt = {
    p: M,
    um: Ke,
    m: mt,
    r: Kn,
    mt: en,
    mc: Ge,
    pc: ee,
    pbc: Ie,
    n: tn,
    o: e
  };
  return {
    render: qn,
    hydrate: void 0,
    createApp: qa(qn)
  };
}
function ts({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function zt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (B(r) && B(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = bt(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && nl(i, a)), a.type === Dr && (a.patchFlag === -1 && (a = s[o] = bt(a)), a.el = i.el), a.type === wt && !a.el && (a.el = i.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const h = e[r];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < h ? o = a + 1 : i = a;
      h < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function rl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rl(t);
}
function So(e) {
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
const ol = (e) => e.__isSuspense;
function dc(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Dr = /* @__PURE__ */ Symbol.for("v-txt"), wt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let We = null;
function q(e = !1) {
  Jt.push(We = e ? null : []);
}
function il() {
  Jt.pop(), We = Jt[Jt.length - 1] || null;
}
let $n = 1;
function Ao(e, t = !1) {
  $n += e, e < 0 && We && t && (We.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? We || dn : null, il(), $n > 0 && We && We.push(e), e;
}
function Y(e, t, n, r, s, o) {
  return ll(
    T(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function pc(e, t, n, r, s) {
  return ll(
    vt(
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
function An(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, fr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ Fe(e) || K(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function T(e, t = null, n = null, r = 0, s = null, o = e === ge ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && fr(t),
    scopeId: Fi,
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
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ye
  };
  return a ? (br(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  We && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && We.push(c), c;
}
const vt = hc;
function hc(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === ja) && (e = wt), al(e)) {
    const a = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(a, n), $n > 0 && !o && We && (a.shapeFlag & 6 ? We[We.indexOf(e)] = a : We.push(a)), a.patchFlag = -2, a;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: a, style: c } = t;
    a && !pe(a) && (t.class = Rs(a)), se(c) && (/* @__PURE__ */ Ls(c) && !B(c) && (c = Re({}, c)), t.style = Os(c));
  }
  const i = pe(e) ? 1 : ol(e) ? 128 : Ir(e) ? 64 : se(e) ? 4 : K(e) ? 2 : 0;
  return T(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function mc(e) {
  return e ? /* @__PURE__ */ Ls(e) || Xi(e) ? Re({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: c } = e, h = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && cl(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? B(o) ? o.concat(fr(t)) : [o, fr(t)] : fr(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i,
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
function me(e = " ", t = 0) {
  return vt(Dr, null, e, t);
}
function it(e = "", t = !1) {
  return t ? (q(), pc(wt, null, e)) : vt(wt, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? vt(wt) : B(e) ? vt(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? bt(e) : vt(Dr, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xi(t) ? t._ctx = Ye : s === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ye }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [me(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function gc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Rs([t.class, r.class]));
      else if (s === "style")
        t.style = Os([t.style, r.style]);
      else if (vr(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(B(o) && o.includes(i)) ? t[s] = o ? [].concat(o, i) : i : i == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sr(s) && (t[s] = i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function lt(e, t, n, r = null) {
  tt(e, t, 7, [
    n,
    r
  ]);
}
const _c = Wi();
let bc = 0;
function yc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || _c, o = {
    uid: bc++,
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
    propsOptions: Zi(r, s),
    emitsOptions: Gi(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Xa.bind(null, o), e.ce && e.ce(o), o;
}
let Le = null;
const Tc = () => Le || Ye;
let yr, Vn;
{
  const e = wr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  yr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Le = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Gn = (e) => {
  const t = Le;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, xo = () => {
  Le && Le.scope.off(), yr(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Ec(e, t = !1, n = !1) {
  t && Vn(t);
  const { props: r, children: s } = e.vnode, o = ul(e);
  nc(e, r, o, t), ic(e, s, n || t);
  const i = o ? vc(e, t) : void 0;
  return t && Vn(!1), i;
}
function vc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    St();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, o = Gn(e), i = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = li(i);
    if (At(), o(), (a || e.sp) && !Fn(e) && ji(e), a) {
      if (i.then(xo, xo), t)
        return i.then((c) => {
          Vn(!0);
          try {
            wo(e, c, t);
          } finally {
            Vn(!1);
          }
        }).catch((c) => {
          Rr(c, e, 0);
        });
      e.asyncDep = i;
    } else
      wo(e, i);
  } else
    fl(e);
}
function wo(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Ii(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ft);
  {
    const s = Gn(e);
    St();
    try {
      Va(e);
    } finally {
      At(), s();
    }
  }
}
const Sc = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
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
function Mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ii(da(e.exposed)), {
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
  return K(e) && "__vccOpts" in e;
}
const It = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let vs;
const Co = typeof window < "u" && window.trustedTypes;
if (Co)
  try {
    vs = /* @__PURE__ */ Co.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = vs ? (e) => vs.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", _t = typeof document < "u" ? document : null, Oo = _t && /* @__PURE__ */ _t.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? _t.createElementNS(Cc, e) : t === "mathml" ? _t.createElementNS(Oc, e) : n ? _t.createElement(e, { is: n }) : _t.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => _t.createTextNode(e),
  createComment: (e) => _t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _t.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Oo.innerHTML = dl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Oo.content;
      if (r === "svg" || r === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ic = /* @__PURE__ */ Symbol("_vtc");
function Pc(e, t, n) {
  const r = e[Ic];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ro = /* @__PURE__ */ Symbol("_vod"), Nc = /* @__PURE__ */ Symbol("_vsh"), Dc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = pe(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (pe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && In(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && In(r, i, "");
    for (const i in n) {
      i === "display" && (o = !0);
      const a = n[i];
      a != null ? Uc(
        e,
        i,
        !pe(t) && t ? t[i] : void 0,
        a
      ) || In(r, i, a) : In(r, i, "");
    }
  } else if (s) {
    if (t !== n) {
      const i = r[Dc];
      i && (n += ";" + i), r.cssText = n, o = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ro in e && (e[Ro] = o ? r.display : "", e[Nc] && (r.display = "none"));
}
const ir = /\s*!important$/;
function In(e, t, n) {
  if (B(n))
    n.forEach((r) => In(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ir.test(n) ? e.setProperty(t, n.replace(ir, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    ir.test(n) ? e.setProperty(
      Qt(r),
      n.replace(ir, ""),
      "important"
    ) : e[r] = n;
  }
}
const Io = ["Webkit", "Moz", "ms"], rs = {};
function Fc(e, t) {
  const n = rs[t];
  if (n)
    return n;
  let r = Ze(t);
  if (r !== "filter" && r in e)
    return rs[t] = r;
  r = ui(r);
  for (let s = 0; s < Io.length; s++) {
    const o = Io[s] + r;
    if (o in e)
      return rs[t] = o;
  }
  return t;
}
function Uc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(r) && n === r;
}
const Po = "http://www.w3.org/1999/xlink";
function No(e, t, n, r, s, o = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Po, t.slice(6, t.length)) : e.setAttributeNS(Po, t, n) : n == null || o && !di(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : dt(n) ? String(n) : n
  );
}
function Do(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dl(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = di(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function Kt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Mo = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const o = e[Mo] || (e[Mo] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, c] = Vc(t);
    if (r) {
      const h = o[t] = Wc(
        r,
        s
      );
      Kt(e, a, h, c);
    } else i && (kc(e, a, i, c), o[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Qt(e.slice(2)), t];
}
let ss = 0;
const zc = /* @__PURE__ */ Promise.resolve(), Bc = () => ss || (zc.then(() => ss = 0), ss = Date.now());
function Wc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (B(s)) {
      const o = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        o.call(r), r._stopped = !0;
      };
      const i = s.slice(), a = [r];
      for (let c = 0; c < i.length && !r._stopped; c++) {
        const h = i[c];
        h && tt(
          h,
          t,
          5,
          a
        );
      }
    } else
      tt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Bc(), n;
}
const Lo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? Pc(e, r, i) : t === "style" ? Lc(e, n, r) : vr(t) ? Sr(t) || Hc(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, i)) ? (Do(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && No(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(r))) ? Do(e, Ze(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), No(e, t, r, i));
};
function Kc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Lo(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Lo(t) && pe(n) ? !1 : t in e;
}
function qc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Ze(t);
  return Array.isArray(n) ? n.some((s) => Ze(s) === r) : Object.keys(n).some((s) => Ze(s) === r);
}
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => cr(t, n) : t;
};
function Yc(e) {
  e.target.composing = !0;
}
function Fo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function os(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Uo = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[qt] = Tr(s);
    const o = r || s.props && s.props.type === "number";
    Kt(e, t ? "change" : "input", (i) => {
      i.target.composing || e[qt](os(e.value, n, o));
    }), (n || o) && Kt(e, "change", () => {
      e.value = os(e.value, n, o);
    }), t || (Kt(e, "compositionstart", Yc), Kt(e, "compositionend", Fo), Kt(e, "change", Fo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", o = e[lr];
    delete e[lr], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[qt](os(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[qt] = Tr(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (a === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, xn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Kt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), o = e.multiple, i = o ? Zt(e._modelValue) ? new Set(s) : s : s[0], a = e._pendingValue = [
        o,
        o ? B(i) ? s.slice() : s : i
      ];
      try {
        e[qt](i);
      } finally {
        Ni(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[qt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ko(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[qt] = Tr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && ko(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || B(e)) return Dt(e, t);
  if (Zt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function ko(e, t) {
  const n = e.multiple, r = B(t);
  if (!(n && !r && !Zt(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s], a = Er(i);
      if (n)
        if (r) {
          const c = typeof a;
          c === "string" || c === "number" ? i.selected = t.some((h) => String(h) === String(a)) : i.selected = Wl(t, a) > -1;
        } else
          i.selected = t.has(a);
      else if (Dt(Er(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Er(e) {
  return "_value" in e ? e._value : e.value;
}
const Jc = /* @__PURE__ */ Re({ patchProp: Gc }, Rc);
let Ho;
function Zc() {
  return Ho || (Ho = ac(Jc));
}
const Qc = ((...e) => {
  const t = Zc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = tu(r);
    if (!s) return;
    const o = t._component;
    !K(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, eu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tu(e) {
  return pe(e) ? document.querySelector(e) : e;
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
    const o = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(r, o), o;
  } catch (o) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: o }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: o });
  }
}
function jo(e, t) {
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
    var r, s, o, i, a = [], c = !0, h = !1;
    try {
      if (o = (n = n.call(e)).next, t !== 0) for (; !(c = (r = o.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (d) {
      h = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (h) throw s;
      }
    }
    return a;
  }
}
function ou() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iu(e, t) {
  return ru(e) || su(e, t) || lu(e, t) || ou();
}
function lu(e, t) {
  if (e) {
    if (typeof e == "string") return jo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jo(e, t) : void 0;
  }
}
const pl = Object.entries, $o = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Te = Object.freeze, Se = Object.seal, fn = Object.create, hl = typeof Reflect < "u" && Reflect, Ss = hl.apply, As = hl.construct;
Te || (Te = function(t) {
  return t;
});
Se || (Se = function(t) {
  return t;
});
Ss || (Ss = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    s[o - 2] = arguments[o];
  return t.apply(n, s);
});
As || (As = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Gt = _e(Array.prototype.forEach), fu = _e(Array.prototype.lastIndexOf), Vo = _e(Array.prototype.pop), wn = _e(Array.prototype.push), du = _e(Array.prototype.splice), mn = Array.isArray, Pn = _e(String.prototype.toLowerCase), is = _e(String.prototype.toString), zo = _e(String.prototype.match), Cn = _e(String.prototype.replace), Bo = _e(String.prototype.indexOf), pu = _e(String.prototype.trim), hu = _e(Number.prototype.toString), mu = _e(Boolean.prototype.toString), Wo = typeof BigInt > "u" ? null : _e(BigInt.prototype.toString), Go = typeof Symbol > "u" ? null : _e(Symbol.prototype.toString), $e = _e(Object.prototype.hasOwnProperty), On = _e(Object.prototype.toString), Ce = _e(RegExp.prototype.test), Bt = gu(TypeError);
function _e(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Ss(e, t, r);
  };
}
function gu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return As(e, n);
  };
}
function Z(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pn;
  if ($o && $o(e, null), !mn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (au(t) || (t[r] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function _u(e) {
  for (let t = 0; t < e.length; t++)
    $e(e, t) || (e[t] = null);
  return e;
}
function Be(e) {
  const t = fn(null);
  for (const r of pl(e)) {
    var n = iu(r, 2);
    const s = n[0], o = n[1];
    $e(e, s) && (mn(o) ? t[s] = _u(o) : o && typeof o == "object" && o.constructor === Object ? t[s] = Be(o) : t[s] = o);
  }
  return t;
}
function bu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hu(e);
    case "boolean":
      return mu(e);
    case "bigint":
      return Wo ? Wo(e) : "0";
    case "symbol":
      return Go ? Go(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = Je(t, "toString");
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
function Je(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return _e(r.get);
      if (typeof r.value == "function")
        return _e(r.value);
    }
    e = cu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function yu(e) {
  try {
    return Ce(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ko = Te(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Te(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Te(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Te(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Te(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Te(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qo = Te(["#text"]), Yo = Te(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Te(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xo = Te(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vu = Se(/{{[\w\W]*|^[\w\W]*}}/g), Su = Se(/<%[\w\W]*|^[\w\W]*%>/g), Au = Se(/\${[\w\W]*/g), xu = Se(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Se(/^aria-[\-\w]+$/), Jo = Se(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Se(/^(?:\w+script|data):/i), Ou = Se(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Se(/^html$/i), Iu = Se(/^[a-z][.\w]*(-[.\w]+)+$/i), Zo = Se(/<[/\w!]/g), Qo = Se(/<[/\w]/g), Pu = Se(/<\/no(script|embed|frames)/i), Nu = Se(/\/>/i), ze = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Du = Te(Z({}, ml)), Mu = (function() {
  const e = {};
  return Gt(ml, (t) => {
    e[t] = Se(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Te(e);
})(), Lu = function() {
  return typeof window > "u" ? null : window;
}, Fu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(o, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, ei = function() {
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
}, Rt = function(t, n, r, s) {
  return $e(t, n) && mn(t[n]) ? Z(s.base ? Be(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = $e(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Be(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (w) => gl(w);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ze.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, i = e.Node, a = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, g = e.trustedTypes, x = a.prototype, I = Je(x, "cloneNode"), j = Je(x, "remove"), M = Je(x, "nextSibling"), $ = Je(x, "childNodes"), E = Je(x, "parentNode"), b = Je(x, "shadowRoot"), U = Je(x, "attributes"), D = i && i.prototype ? Je(i.prototype, "nodeType") : null, Q = i && i.prototype ? Je(i.prototype, "nodeName") : null, be = i && i.prototype ? Je(i.prototype, "ownerDocument") : null, we = function(l) {
    return D ? D(l) : l.nodeType;
  }, Ge = function(l) {
    return Q ? Q(l) : l.nodeName;
  };
  if (typeof o == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let ye, Ie = "", pt, Lt = !1, nt = 0;
  const en = function() {
    if (nt > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ht = function(l) {
    en(), nt++;
    try {
      return ye.createHTML(l);
    } finally {
      nt--;
    }
  }, Ae = function(l) {
    en(), nt++;
    try {
      return ye.createScriptURL(l);
    } finally {
      nt--;
    }
  }, ce = function() {
    return Lt || (pt = Fu(g, s), Lt = !0), pt;
  }, ee = n, Xe = ee.implementation, Ft = ee.createNodeIterator, mt = ee.createDocumentFragment, Ke = ee.getElementsByTagName, Kn = r.importNode;
  let ie = ei();
  t.isSupported = typeof pl == "function" && typeof E == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = vu, Ut = Su, tn = Au, bn = xu, qn = wu, kt = Cu, Fr = Ou, u = Iu;
  let f = Jo, m = null;
  const A = Z({}, [...Ko, ...ls, ...as, ...cs, ...qo]);
  let _ = null;
  const v = Z({}, [...Yo, ...us, ...Xo, ...ar]);
  let C = Object.seal(fn(null, {
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
  })), O = null, R = null;
  const y = Object.seal(fn(null, {
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
  let V = !0, P = !0, k = !1, z = !0, G = !1, J = !0, X = !1, ue = !1, de = null, Pe = null, Ue = !1, qe = !1, Ht = !1, Ee = !1, Ve = !0, yn = !1;
  const Tn = "user-content-";
  let Ur = !0, kr = !1, nn = {}, rn = null;
  const $s = Z({}, [
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
  const zs = Z({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = Z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", rt = "http://www.w3.org/1999/xhtml";
  let sn = rt, Hr = !1, jr = null;
  const bl = Z({}, [Yn, Xn, rt], is), Gs = Te(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = Z({}, Gs);
  const Ks = Te(["annotation-xml"]);
  let Vr = Z({}, Ks);
  const yl = Z({}, ["title", "style", "font", "a", "script"]);
  let En = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let he = null, on = null;
  const vl = n.createElement("form"), qs = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, zr = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === l)
      return;
    (!l || typeof l != "object") && (l = {}), l = Be(l), En = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? El : l.PARSER_MEDIA_TYPE, he = En === "application/xhtml+xml" ? is : Pn, m = Rt(l, "ALLOWED_TAGS", A, {
      transform: he
    }), _ = Rt(l, "ALLOWED_ATTR", v, {
      transform: he
    }), jr = Rt(l, "ALLOWED_NAMESPACES", bl, {
      transform: is
    }), Bs = Rt(l, "ADD_URI_SAFE_ATTR", Ws, {
      transform: he,
      base: Ws
    }), Vs = Rt(l, "ADD_DATA_URI_TAGS", zs, {
      transform: he,
      base: zs
    }), rn = Rt(l, "FORBID_CONTENTS", $s, {
      transform: he
    }), O = Rt(l, "FORBID_TAGS", Be({}), {
      transform: he
    }), R = Rt(l, "FORBID_ATTR", Be({}), {
      transform: he
    }), nn = $e(l, "USE_PROFILES") ? l.USE_PROFILES && typeof l.USE_PROFILES == "object" ? Be(l.USE_PROFILES) : l.USE_PROFILES : !1, V = l.ALLOW_ARIA_ATTR !== !1, P = l.ALLOW_DATA_ATTR !== !1, k = l.ALLOW_UNKNOWN_PROTOCOLS || !1, z = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = l.SAFE_FOR_TEMPLATES || !1, J = l.SAFE_FOR_XML !== !1, X = l.WHOLE_DOCUMENT || !1, qe = l.RETURN_DOM || !1, Ht = l.RETURN_DOM_FRAGMENT || !1, Ee = l.RETURN_TRUSTED_TYPE || !1, Ue = l.FORCE_BODY || !1, Ve = l.SANITIZE_DOM !== !1, yn = l.SANITIZE_NAMED_PROPS || !1, Ur = l.KEEP_CONTENT !== !1, kr = l.IN_PLACE || !1, f = yu(l.ALLOWED_URI_REGEXP) ? l.ALLOWED_URI_REGEXP : Jo, sn = typeof l.NAMESPACE == "string" ? l.NAMESPACE : rt, $r = fs(
      l,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Z({}, Gs)
      // Default built-in map
    ), Vr = fs(
      l,
      "HTML_INTEGRATION_POINTS",
      () => Z({}, Ks)
      // Default built-in map
    );
    const p = fs(l, "CUSTOM_ELEMENT_HANDLING", () => fn(null));
    if (C = fn(null), $e(p, "tagNameCheck") && qs(p.tagNameCheck) && (C.tagNameCheck = p.tagNameCheck), $e(p, "attributeNameCheck") && qs(p.attributeNameCheck) && (C.attributeNameCheck = p.attributeNameCheck), $e(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (C.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Se(C), G && (P = !1), Ht && (qe = !0), nn && (m = Z({}, qo), _ = fn(null), nn.html === !0 && (Z(m, Ko), Z(_, Yo)), nn.svg === !0 && (Z(m, ls), Z(_, us), Z(_, ar)), nn.svgFilters === !0 && (Z(m, as), Z(_, us), Z(_, ar)), nn.mathMl === !0 && (Z(m, cs), Z(_, Xo), Z(_, ar))), y.tagCheck = null, y.attributeCheck = null, $e(l, "ADD_TAGS") && (typeof l.ADD_TAGS == "function" ? y.tagCheck = l.ADD_TAGS : mn(l.ADD_TAGS) && (m === A && (m = Be(m)), Z(m, l.ADD_TAGS, he))), $e(l, "ADD_ATTR") && (typeof l.ADD_ATTR == "function" ? y.attributeCheck = l.ADD_ATTR : mn(l.ADD_ATTR) && (_ === v && (_ = Be(_)), Z(_, l.ADD_ATTR, he))), $e(l, "ADD_FORBID_CONTENTS") && mn(l.ADD_FORBID_CONTENTS) && (rn === $s && (rn = Be(rn)), Z(rn, l.ADD_FORBID_CONTENTS, he)), Ur && (m["#text"] = !0), X && Z(m, ["html", "head", "body"]), m.table && (Z(m, ["tbody"]), delete O.tbody), l.TRUSTED_TYPES_POLICY) {
      if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const S = ye;
      ye = l.TRUSTED_TYPES_POLICY;
      try {
        Ie = ht("");
      } catch (N) {
        throw ye = S, N;
      }
    } else l.TRUSTED_TYPES_POLICY === null ? (ye = void 0, Ie = "") : (ye === void 0 && (ye = ce()), ye && typeof Ie == "string" && (Ie = ht("")));
    Te && Te(l), on = l;
  }, Ys = Z({}, [...ls, ...as, ...Tu]), Xs = Z({}, [...cs, ...Eu]), Sl = function(l, p, S) {
    return p.namespaceURI === rt ? l === "svg" : p.namespaceURI === Yn ? l === "svg" && (S === "annotation-xml" || $r[S]) : !!Ys[l];
  }, Al = function(l, p, S) {
    return p.namespaceURI === rt ? l === "math" : p.namespaceURI === Xn ? l === "math" && Vr[S] : !!Xs[l];
  }, xl = function(l, p, S) {
    return p.namespaceURI === Xn && !Vr[S] || p.namespaceURI === Yn && !$r[S] ? !1 : !Xs[l] && (yl[l] || !Ys[l]);
  }, wl = function(l) {
    let p = E(l);
    (!p || !p.tagName) && (p = {
      namespaceURI: sn,
      tagName: "template"
    });
    const S = Pn(l.tagName), N = Pn(p.tagName);
    return jr[l.namespaceURI] ? l.namespaceURI === Xn ? Sl(S, p, N) : l.namespaceURI === Yn ? Al(S, p, N) : l.namespaceURI === rt ? xl(S, p, N) : !!(En === "application/xhtml+xml" && jr[l.namespaceURI]) : !1;
  }, Ot = function(l) {
    wn(t.removed, {
      element: l
    });
    try {
      E(l).removeChild(l);
    } catch {
      if (j(l), !E(l))
        throw Bt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(l, p, S) {
    try {
      l.removeAttributeNode(p);
    } catch {
      try {
        l.removeAttribute(S);
      } catch {
      }
    }
  }, Jn = function(l) {
    Zn(l);
    const p = $(l);
    if (p) {
      const N = [];
      Gt(p, (L) => {
        wn(N, L);
      }), Gt(N, (L) => {
        try {
          j(L);
        } catch {
        }
      });
    }
    const S = U(l);
    if (S)
      for (let N = S.length - 1; N >= 0; --N) {
        const L = S[N], W = L && L.name;
        typeof W == "string" && Js(l, L, W);
      }
  }, jt = function(l, p, S) {
    if (!S)
      try {
        S = p.getAttributeNode(l);
      } catch {
        S = null;
      }
    wn(t.removed, {
      attribute: S || null,
      from: p
    });
    try {
      S ? p.removeAttributeNode(S) : p.removeAttribute(l);
    } catch {
      try {
        p.removeAttribute(l);
      } catch {
      }
    }
    if (l === "is")
      if (qe || Ht)
        try {
          Ot(p);
        } catch {
        }
      else
        try {
          p.setAttribute(l, "");
        } catch {
        }
  }, Cl = function(l) {
    const p = U(l);
    if (p)
      for (let S = p.length - 1; S >= 0; --S) {
        const N = p[S], L = N && N.name;
        typeof L != "string" || _[he(L)] || Js(l, N, L);
      }
  }, Zn = function(l) {
    const p = [l];
    for (; p.length > 0; ) {
      const S = p.pop();
      we(S) === ze.element && Cl(S);
      const L = $(S);
      if (L)
        for (let W = L.length - 1; W >= 0; --W)
          p.push(L[W]);
    }
  }, Zs = function(l, p) {
    return J ? l === "patchsrc" ? !0 : l === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(l) {
    if (!J)
      return;
    const p = [l];
    for (; p.length > 0; ) {
      const S = p.pop(), N = we(S);
      if (N === ze.processingInstruction || N === ze.comment && Ce(Qo, S.data)) {
        try {
          j(S);
        } catch {
        }
        continue;
      }
      if (N === ze.element) {
        const W = S, le = he(Ge(S));
        try {
          W.hasAttribute && W.hasAttribute("patchsrc") && W.removeAttribute("patchsrc"), W.hasAttribute && W.hasAttribute("for") && Zs("for", le) && W.removeAttribute("for");
        } catch {
        }
      }
      const L = $(S);
      if (L)
        for (let W = L.length - 1; W >= 0; --W)
          p.push(L[W]);
    }
  }, Qs = function(l) {
    let p = null, S = null;
    if (Ue)
      l = "<remove></remove>" + l;
    else {
      const W = zo(l, /^[\r\n\t ]+/);
      S = W && W[0];
    }
    En === "application/xhtml+xml" && sn === rt && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const N = ye ? ht(l) : l;
    if (sn === rt)
      try {
        p = new d().parseFromString(N, En);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(sn, "template", null);
      try {
        p.documentElement.innerHTML = Hr ? Ie : N;
      } catch {
      }
    }
    const L = p.body || p.documentElement;
    return l && S && L.insertBefore(n.createTextNode(S), L.childNodes[0] || null), sn === rt ? Ke.call(p, X ? "html" : "body")[0] : X ? p.documentElement : L;
  }, eo = function(l) {
    const p = be ? be(l) : l.ownerDocument;
    return Ft.call(
      p || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(l) {
    return l = Cn(l, Lr, " "), l = Cn(l, Ut, " "), l = Cn(l, tn, " "), l;
  }, Br = function(l) {
    var p;
    l.normalize();
    const S = be ? be(l) : l.ownerDocument, N = Ft.call(
      S || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let L = N.nextNode();
    for (; L; )
      L.data = Qn(L.data), L = N.nextNode();
    const W = (p = l.querySelectorAll) === null || p === void 0 ? void 0 : p.call(l, "template");
    W && Gt(W, (le) => {
      ln(le.content) && Br(le.content);
    });
  }, er = function(l) {
    const p = Q ? Q(l) : null;
    return typeof p != "string" || he(p) !== "form" ? !1 : typeof l.nodeName != "string" || typeof l.textContent != "string" || typeof l.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    l.attributes !== U(l) || typeof l.removeAttribute != "function" || typeof l.setAttribute != "function" || typeof l.namespaceURI != "string" || typeof l.insertBefore != "function" || typeof l.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    l.nodeType !== D(l) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    l.childNodes !== $(l);
  }, ln = function(l) {
    if (!D || typeof l != "object" || l === null)
      return !1;
    try {
      return D(l) === ze.documentFragment;
    } catch {
      return !1;
    }
  }, vn = function(l) {
    if (!D || typeof l != "object" || l === null)
      return !1;
    try {
      return typeof D(l) == "number";
    } catch {
      return !1;
    }
  };
  function st(w, l, p) {
    w.length !== 0 && Gt(w, (S) => {
      S.call(t, l, p, on);
    });
  }
  const Rl = function(l, p) {
    return !!(J && l.hasChildNodes() && !vn(l.firstElementChild) && Ce(Zo, l.textContent) && Ce(Zo, l.innerHTML) || J && l.namespaceURI === rt && Du[p] && (vn(l.firstElementChild) || typeof l.textContent == "string" && Ce(Mu[p], l.textContent)) || l.nodeType === ze.processingInstruction || J && l.nodeType === ze.comment && Ce(Qo, l.data));
  }, tr = function(l, p) {
    if (l instanceof RegExp)
      return Ce(l, p);
    if (l instanceof Function) {
      for (var S = arguments.length, N = new Array(S > 2 ? S - 2 : 0), L = 2; L < S; L++)
        N[L - 2] = arguments[L];
      return !!l(p, ...N);
    }
    return !1;
  }, Il = function(l, p, S) {
    if (!O[p] && oo(p) && tr(C.tagNameCheck, p))
      return !1;
    if (Ur && !rn[p]) {
      const N = E(l), L = $(l);
      if (L && N) {
        const W = L.length;
        for (let le = W - 1; le >= 0; --le) {
          const fe = l === S ? I(L[le], !0) : L[le];
          N.insertBefore(fe, M(l));
        }
      }
    }
    return Ot(l), !0;
  }, to = function(l, p, S, N) {
    return l.length === 0 ? p : p === S || p === N ? Be(p) : p;
  }, no = function(l, p) {
    return l === p || E(l) !== null ? !1 : (kr && Zn(l), !0);
  }, ro = function(l, p) {
    if (st(ie.beforeSanitizeElements, l, null), no(l, p))
      return !0;
    if (er(l))
      return Ot(l), !0;
    const S = he(Ge(l));
    if (m = to(ie.uponSanitizeElement, m, A, de), st(ie.uponSanitizeElement, l, {
      tagName: S,
      allowedTags: m
    }), no(l, p))
      return !0;
    if (Rl(l, S))
      return Ot(l), !0;
    if (O[S] || !(y.tagCheck instanceof Function && y.tagCheck(S)) && !m[S]) {
      const L = Il(l, S, p);
      return L === !1 && st(ie.afterSanitizeElements, l, null), L;
    }
    if (we(l) === ze.element && !wl(l) || (S === "noscript" || S === "noembed" || S === "noframes") && Ce(Pu, l.innerHTML))
      return Ot(l), !0;
    if (G && l.nodeType === ze.text) {
      const L = Qn(l.textContent);
      l.textContent !== L && (wn(t.removed, {
        element: l.cloneNode()
      }), l.textContent = L);
    }
    return st(ie.afterSanitizeElements, l, null), !1;
  }, so = function(l, p, S) {
    if (R[p] || Zs(p, l) || Ve && (p === "id" || p === "name") && (S in n || S in vl))
      return !1;
    const N = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, l);
    return P && Ce(bn, p) || V && Ce(qn, p) ? !0 : N ? Bs[p] || Ce(f, Cn(S, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && l !== "script" && Bo(S, "data:") === 0 && Vs[l] || k && !Ce(kt, Cn(S, Fr, "")) ? !0 : !S : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      oo(l) && tr(C.tagNameCheck, l) && tr(C.attributeNameCheck, p, l) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && C.allowCustomizedBuiltInElements && tr(C.tagNameCheck, S)
    );
  }, Pl = Z({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), oo = function(l) {
    return !Pl[Pn(l)] && Ce(u, l);
  }, Nl = function(l, p, S, N) {
    if (ye && typeof g == "object" && typeof g.getAttributeType == "function" && !S)
      switch (g.getAttributeType(l, p)) {
        case "TrustedHTML":
          return ht(N);
        case "TrustedScriptURL":
          return Ae(N);
      }
    return N;
  }, Dl = function(l, p, S, N) {
    try {
      S ? l.setAttributeNS(S, p, N) : l.setAttribute(p, N), er(l) ? Ot(l) : Vo(t.removed);
    } catch {
      jt(p, l);
    }
  }, io = function(l) {
    st(ie.beforeSanitizeAttributes, l, null);
    const p = l.attributes;
    if (!p || er(l))
      return;
    _ = to(ie.uponSanitizeAttribute, _, v, Pe);
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let N = p.length;
    const L = he(l.nodeName);
    for (; N--; ) {
      const W = p[N], le = W.name, fe = W.namespaceURI, ke = W.value, He = he(le), Gr = ke;
      let Ne = le === "value" ? Gr : pu(Gr);
      if (S.attrName = He, S.attrValue = Ne, S.keepAttr = !0, S.forceKeepAttr = void 0, st(ie.uponSanitizeAttribute, l, S), Ne = S.attrValue, yn && (He === "id" || He === "name") && Bo(Ne, Tn) !== 0 && (jt(le, l, W), Ne = Tn + Ne), J && Ce(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        jt(le, l, W);
        continue;
      }
      if (He === "attributename" && zo(Ne, "href")) {
        jt(le, l, W);
        continue;
      }
      if (!S.forceKeepAttr) {
        if (!S.keepAttr) {
          jt(le, l, W);
          continue;
        }
        if (!z && Ce(Nu, Ne)) {
          jt(le, l, W);
          continue;
        }
        if (G && (Ne = Qn(Ne)), !so(L, He, Ne)) {
          jt(le, l, W);
          continue;
        }
        Ne = Nl(L, He, fe, Ne), Ne !== Gr && Dl(l, le, fe, Ne);
      }
    }
    st(ie.afterSanitizeAttributes, l, null);
  }, nr = function(l) {
    let p = null;
    const S = eo(l);
    for (st(ie.beforeSanitizeShadowDOM, l, null); p = S.nextNode(); )
      if (st(ie.uponSanitizeShadowNode, p, null), ro(p, l), io(p), ln(p.content) && nr(p.content), we(p) === ze.element) {
        const N = b(p);
        ln(N) && (Wr(N), nr(N));
      }
    st(ie.afterSanitizeShadowDOM, l, null);
  }, Wr = function(l) {
    const p = [{
      node: l,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const S = p.pop();
      if (S.shadow) {
        nr(S.shadow);
        continue;
      }
      const N = S.node, W = we(N) === ze.element, le = $(N);
      if (le)
        for (let fe = le.length - 1; fe >= 0; --fe)
          p.push({
            node: le[fe],
            shadow: null
          });
      if (W) {
        const fe = Q ? Q(N) : null;
        if (typeof fe == "string" && he(fe) === "template") {
          const ke = N.content;
          ln(ke) && p.push({
            node: ke,
            shadow: null
          });
        }
      }
      if (W) {
        const fe = b(N);
        ln(fe) && p.push({
          node: null,
          shadow: fe
        }, {
          node: fe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(w) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, S = null, N = null, L = null;
    if (Hr = !w, Hr && (w = "<!-->"), typeof w != "string" && !vn(w) && (w = bu(w), typeof w != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return w;
    ue ? (m = de, _ = Pe) : zr(l), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (m = Be(m)), ie.uponSanitizeAttribute.length > 0 && (_ = Be(_)), t.removed = [];
    const W = kr && typeof w != "string" && vn(w);
    if (W) {
      Ol(w);
      const ke = Ge(w);
      if (typeof ke == "string") {
        const He = he(ke);
        if (!m[He] || O[He])
          throw Jn(w), Bt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(w))
        throw Jn(w), Bt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(w);
      } catch (He) {
        throw Jn(w), He;
      }
    } else if (vn(w))
      p = Qs("<!---->"), S = p.ownerDocument.importNode(w, !0), S.nodeType === ze.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? p = S : p.appendChild(S), Wr(S);
    else {
      if (!qe && !G && !X && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return ye && Ee ? ht(w) : w;
      if (p = Qs(w), !p)
        return qe ? null : Ee ? Ie : "";
    }
    p && Ue && Ot(p.firstChild);
    const le = W ? w : p;
    try {
      const ke = eo(le);
      for (; N = ke.nextNode(); )
        ro(N, le), io(N), ln(N.content) && nr(N.content);
    } catch (ke) {
      throw W && (Jn(w), Gt(t.removed, (He) => {
        He.element && Zn(He.element);
      })), ke;
    }
    if (W)
      return Gt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      }), G && Br(w), w;
    if (qe) {
      if (G && Br(p), Ht)
        for (L = mt.call(p.ownerDocument); p.firstChild; )
          L.appendChild(p.firstChild);
      else
        L = p;
      return (_.shadowroot || _.shadowrootmode) && (L = Kn.call(r, L, !0)), L;
    }
    let fe = X ? p.outerHTML : p.innerHTML;
    return X && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Ce(Ru, p.ownerDocument.doctype.name) && (fe = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + fe), G && (fe = Qn(fe)), ye && Ee ? ht(fe) : fe;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(w), ue = !0, de = m, Pe = _;
  }, t.clearConfig = function() {
    on = null, ue = !1, de = null, Pe = null, ye = pt, Ie = "";
  }, t.isValidAttribute = function(w, l, p) {
    on || zr({});
    const S = he(w), N = he(l);
    return so(S, N, p);
  }, t.addHook = function(w, l) {
    typeof l == "function" && $e(ie, w) && wn(ie[w], l);
  }, t.removeHook = function(w, l) {
    if ($e(ie, w)) {
      if (l !== void 0) {
        const p = fu(ie[w], l);
        return p === -1 ? void 0 : du(ie[w], p, 1)[0];
      }
      return Vo(ie[w]);
    }
  }, t.removeHooks = function(w) {
    $e(ie, w) && (ie[w] = []);
  }, t.removeAllHooks = function() {
    ie = ei();
  }, t;
}
var Uu = gl();
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, ti;
function Hu() {
  if (ti) return ds;
  ti = 1;
  var e = /["'&<>]/;
  ds = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var o, i = "", a = 0, c = 0;
    for (a = s.index; a < r.length; a++) {
      switch (r.charCodeAt(a)) {
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
      c !== a && (i += r.substring(c, a)), c = a + 1, i += o;
    }
    return c !== a ? i + r.substring(c, a) : i;
  }
  return ds;
}
var ju = Hu();
const ni = /* @__PURE__ */ ku(ju);
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
function H(e, t, n, r, s) {
  const o = typeof n == "object" ? n : void 0, i = typeof r == "number" ? r : typeof n == "number" ? n : void 0, a = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (M) => M, h = (a.sanitize ? Uu.sanitize : c) || c, d = a.escape ? ni : c, g = (M) => typeof M == "string" || typeof M == "number", x = (M, $, E) => M.replace(/%n/g, "" + E).replace(/{([^{}]*)}/g, (b, U) => {
    if ($ === void 0 || !(U in $))
      return d(b);
    const D = $[U];
    return g(D) ? d(`${D}`) : typeof D == "object" && g(D.value) ? (D.escape !== !1 ? ni : c)(`${D.value}`) : d(b);
  });
  let j = (s?.bundle ?? $u(e)).translations[t] || t;
  return j = Array.isArray(j) ? j[0] : j, h(typeof o == "object" || i !== void 0 ? x(
    j,
    o,
    i
  ) : j);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Gu = ["aria-label"], Ku = { value: "" }, qu = ["value"], Yu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "title" }, nf = { value: "recent" }, rf = { value: "publicationDate" }, sf = { value: "format" }, of = ["value"], lf = ["value"], af = ["aria-label"], cf = ["aria-label"], uf = ["aria-label"], ff = ["href"], df = {
  key: 1,
  class: "library-muted"
}, pf = ["href"], hf = {
  key: 3,
  class: "library-muted"
}, mf = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, gf = { class: "library-muted" }, _f = {
  key: 1,
  class: "library-cover-gallery"
}, bf = ["href", "aria-label"], yf = ["src", "alt"], Tf = { class: "library-cover-summary" }, Ef = {
  key: 0,
  class: "library-creator"
}, vf = { class: "library-muted" }, Sf = { key: 0 }, Af = { key: 1 }, xf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, wf = { key: 0 }, Cf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Of = {
  key: 0,
  class: "library-muted"
}, Rf = ["href"], If = ["href"], Pf = { class: "library-item-metadata" }, Nf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, Df = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, Mf = { class: "library-tag" }, Lf = ["action"], Ff = ["value"], Uf = ["action"], kf = ["value"], Hf = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, jf = {
  key: 0,
  class: "library-muted"
}, $f = { class: "library-comment-list" }, Vf = { class: "library-muted" }, zf = ["action"], Bf = ["value"], Wf = ["action"], Gf = ["value"], Kf = ["value"], qf = ["value"], Yf = ["value"], Xf = ["value"], Jf = ["value"], Zf = ["value"], Qf = ["value"], ed = ["value"], td = ["value"], nd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, rd = { class: "library-hero-actions" }, sd = ["href"], od = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = It(() => t.state.items || []), o = It(() => t.state.shelves || []), i = It(() => t.state.formats || []), a = It(() => t.state.scanStatuses || []), c = It(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), h = /* @__PURE__ */ Or({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), d = It(() => t.state.settingsUrl || ""), g = It(() => t.state.requestToken || "");
    function x($) {
      return String($ || "").toUpperCase();
    }
    function I($) {
      return $.nextcloudTags || [];
    }
    function j($) {
      return $.nextcloudComments || { count: 0, recent: [] };
    }
    function M($, E) {
      return String($.tagRemoveBaseUrl || "").replace("__TAG_ID__", String(E.id));
    }
    return ($, E) => (q(), Y("div", Vu, [
      T("section", zu, [
        T("h2", Bu, F(te(H)("library", "Publication catalogue")), 1),
        T("p", Wu, F(te(H)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        T("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": te(H)("library", "Catalogue search and filters")
        }, [
          T("label", null, [
            me(F(te(H)("library", "Search title / author")) + " ", 1),
            $t(T("input", {
              "onUpdate:modelValue": E[0] || (E[0] = (b) => h.q = b),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Uo, h.q]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Type")) + " ", 1),
            $t(T("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (b) => h.type = b),
              name: "type"
            }, [
              T("option", Ku, F(te(H)("library", "All types")), 1),
              (q(), Y(ge, null, ot(n, (b) => T("option", {
                key: b,
                value: b
              }, F(b), 9, qu)), 64))
            ], 512), [
              [xn, h.type]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Nextcloud tag")) + " ", 1),
            $t(T("input", {
              "onUpdate:modelValue": E[2] || (E[2] = (b) => h.tag = b),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Uo, h.tag]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Format")) + " ", 1),
            $t(T("select", {
              "onUpdate:modelValue": E[3] || (E[3] = (b) => h.format = b),
              name: "format"
            }, [
              T("option", Yu, F(te(H)("library", "All formats")), 1),
              (q(!0), Y(ge, null, ot(i.value, (b) => (q(), Y("option", {
                key: b,
                value: b
              }, F(x(b)), 9, Xu))), 128))
            ], 512), [
              [xn, h.format]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Shelf")) + " ", 1),
            $t(T("select", {
              "onUpdate:modelValue": E[4] || (E[4] = (b) => h.shelf = b),
              name: "shelf"
            }, [
              T("option", Ju, F(te(H)("library", "All shelves")), 1),
              (q(!0), Y(ge, null, ot(o.value, (b) => (q(), Y("option", {
                key: b,
                value: b
              }, F(b), 9, Zu))), 128))
            ], 512), [
              [xn, h.shelf]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Scan status")) + " ", 1),
            $t(T("select", {
              "onUpdate:modelValue": E[5] || (E[5] = (b) => h.status = b),
              name: "status"
            }, [
              T("option", Qu, F(te(H)("library", "All scan statuses")), 1),
              (q(!0), Y(ge, null, ot(a.value, (b) => (q(), Y("option", {
                key: b,
                value: b
              }, F(b), 9, ef))), 128))
            ], 512), [
              [xn, h.status]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Sort")) + " ", 1),
            $t(T("select", {
              "onUpdate:modelValue": E[6] || (E[6] = (b) => h.sort = b),
              name: "sort"
            }, [
              T("option", tf, F(te(H)("library", "Title")), 1),
              T("option", nf, F(te(H)("library", "Recently added")), 1),
              T("option", rf, F(te(H)("library", "Publication date")), 1),
              T("option", sf, F(te(H)("library", "Format")), 1)
            ], 512), [
              [xn, h.sort]
            ])
          ]),
          T("label", null, [
            me(F(te(H)("library", "Page size")) + " ", 1),
            T("select", {
              value: c.value.limit,
              name: "limit"
            }, [
              (q(), Y(ge, null, ot(r, (b) => T("option", {
                key: b,
                value: b
              }, F(b), 9, lf)), 64))
            ], 8, of)
          ]),
          T("button", {
            type: "submit",
            class: "button primary",
            "aria-label": te(H)("library", "Apply catalogue filters")
          }, F(te(H)("library", "Apply filters")), 9, af),
          T("a", {
            href: "?",
            class: "button secondary",
            "aria-label": te(H)("library", "Clear catalogue filters")
          }, F(te(H)("library", "Clear")), 9, cf)
        ], 8, Gu),
        T("nav", {
          class: "library-pagination",
          "aria-label": te(H)("library", "Catalogue pagination")
        }, [
          T("span", null, "Showing " + F(c.value.from) + "–" + F(c.value.to) + " of " + F(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? (q(), Y("a", {
            key: 0,
            href: c.value.previousUrl
          }, F(te(H)("library", "Previous")), 9, ff)) : (q(), Y("span", df, F(te(H)("library", "Previous")), 1)),
          c.value.nextUrl ? (q(), Y("a", {
            key: 2,
            href: c.value.nextUrl
          }, F(te(H)("library", "Next")), 9, pf)) : (q(), Y("span", hf, F(te(H)("library", "Next")), 1))
        ], 8, uf),
        s.value.length === 0 ? (q(), Y("div", mf, [
          T("h3", null, F(te(H)("library", "No catalogue items match")), 1),
          T("p", gf, F(te(H)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (q(), Y("div", _f, [
          (q(!0), Y(ge, null, ot(s.value, (b) => (q(), Y("article", {
            key: b.id,
            class: "library-cover-card"
          }, [
            T("a", {
              class: "library-cover-link",
              href: b.openUrl,
              "aria-label": `Read ${b.title}`
            }, [
              T("img", {
                class: "library-cover-image",
                src: b.coverUrl,
                alt: `Cover for ${b.title}`,
                loading: "lazy"
              }, null, 8, yf)
            ], 8, bf),
            T("div", Tf, [
              T("h3", null, F(b.title), 1),
              b.creators ? (q(), Y("p", Ef, F(b.creators), 1)) : it("", !0),
              T("p", vf, [
                T("span", null, F(b.publicationType), 1),
                b.extension ? (q(), Y("span", Sf, " · Format: " + F(x(b.extension)), 1)) : it("", !0),
                b.shelf ? (q(), Y("span", Af, " · Shelf: " + F(b.shelf), 1)) : it("", !0)
              ]),
              b.scanStatus !== "indexed" || b.scanError ? (q(), Y("p", xf, [
                me(" scanStatus: " + F(b.scanStatus || "unknown"), 1),
                b.scanError ? (q(), Y("span", wf, " · scanError: " + F(b.scanError), 1)) : it("", !0)
              ])) : it("", !0),
              T("div", Cf, [
                I(b).length === 0 ? (q(), Y("span", Of, "No Nextcloud tags")) : (q(!0), Y(ge, { key: 1 }, ot(I(b), (U) => (q(), Y("span", {
                  key: U.id,
                  class: "library-tag"
                }, F(U.name), 1))), 128))
              ]),
              T("p", null, [
                T("a", {
                  href: b.openUrl
                }, "Read", 8, Rf),
                E[7] || (E[7] = me(" · ", -1)),
                T("a", {
                  href: b.filesUrl
                }, "Show in Files", 8, If)
              ])
            ]),
            T("details", null, [
              E[32] || (E[32] = T("summary", null, "Details / edit metadata", -1)),
              T("dl", Pf, [
                E[8] || (E[8] = T("dt", null, "publicationType", -1)),
                T("dd", null, F(b.publicationType), 1),
                E[9] || (E[9] = T("dt", null, "metadataSource", -1)),
                T("dd", null, F(b.metadataSource), 1),
                E[10] || (E[10] = T("dt", null, "userEdited", -1)),
                T("dd", null, F(b.userEdited ? "yes" : "no"), 1),
                E[11] || (E[11] = T("dt", null, "path", -1)),
                T("dd", null, F(b.cachedPath), 1),
                E[12] || (E[12] = T("dt", null, "publication", -1)),
                T("dd", null, F(b.publication || "—"), 1),
                E[13] || (E[13] = T("dt", null, "date", -1)),
                T("dd", null, F(b.publicationDate || "—"), 1),
                E[14] || (E[14] = T("dt", null, "language", -1)),
                T("dd", null, F(b.language || "—"), 1),
                E[15] || (E[15] = T("dt", null, "publisher", -1)),
                T("dd", null, F(b.publisher || "—"), 1)
              ]),
              T("div", Nf, [
                E[19] || (E[19] = T("strong", null, "Nextcloud tags", -1)),
                I(b).length > 0 ? (q(), Y("ul", Df, [
                  (q(!0), Y(ge, null, ot(I(b), (U) => (q(), Y("li", {
                    key: U.id
                  }, [
                    T("span", Mf, F(U.name), 1),
                    T("form", {
                      method: "post",
                      action: M(b, U),
                      class: "library-inline-form"
                    }, [
                      g.value ? (q(), Y("input", {
                        key: 0,
                        type: "hidden",
                        name: "requesttoken",
                        value: g.value
                      }, null, 8, Ff)) : it("", !0),
                      E[16] || (E[16] = T("button", { type: "submit" }, "Remove tag", -1))
                    ], 8, Lf)
                  ]))), 128))
                ])) : it("", !0),
                T("form", {
                  method: "post",
                  action: b.tagUrl,
                  class: "library-tag-form"
                }, [
                  g.value ? (q(), Y("input", {
                    key: 0,
                    type: "hidden",
                    name: "requesttoken",
                    value: g.value
                  }, null, 8, kf)) : it("", !0),
                  E[17] || (E[17] = T("label", null, [
                    me(" Add Nextcloud tag "),
                    T("input", {
                      type: "text",
                      name: "nextcloudTagName",
                      placeholder: "photography, project-library..."
                    })
                  ], -1)),
                  E[18] || (E[18] = T("button", { type: "submit" }, "Add tag", -1))
                ], 8, Uf)
              ]),
              T("div", Hf, [
                E[22] || (E[22] = T("strong", null, "Nextcloud comments", -1)),
                E[23] || (E[23] = me()),
                E[24] || (E[24] = T("span", { class: "library-muted" }, "(file-level notes)", -1)),
                E[25] || (E[25] = me(": ", -1)),
                j(b).count === 0 ? (q(), Y("span", jf, "No Nextcloud comments")) : (q(), Y(ge, { key: 1 }, [
                  T("span", null, F(j(b).count) + " total", 1),
                  T("ul", $f, [
                    (q(!0), Y(ge, null, ot(j(b).recent, (U) => (q(), Y("li", {
                      key: `${U.actorId}-${U.createdAt}-${U.message}`
                    }, [
                      T("span", Vf, F(U.actorId) + " · " + F(U.createdAt), 1),
                      T("span", null, F(U.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                T("form", {
                  method: "post",
                  action: b.commentUrl,
                  class: "library-comment-form"
                }, [
                  g.value ? (q(), Y("input", {
                    key: 0,
                    type: "hidden",
                    name: "requesttoken",
                    value: g.value
                  }, null, 8, Bf)) : it("", !0),
                  E[20] || (E[20] = T("label", null, [
                    me(" Add Nextcloud comment "),
                    T("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1)),
                  E[21] || (E[21] = T("button", { type: "submit" }, "Add comment", -1))
                ], 8, zf)
              ]),
              T("form", {
                method: "post",
                action: b.updateUrl,
                class: "library-item-form"
              }, [
                g.value ? (q(), Y("input", {
                  key: 0,
                  type: "hidden",
                  name: "requesttoken",
                  value: g.value
                }, null, 8, Gf)) : it("", !0),
                T("label", null, [
                  E[26] || (E[26] = me(" Title ", -1)),
                  T("input", {
                    type: "text",
                    name: "title",
                    value: b.title
                  }, null, 8, Kf)
                ]),
                T("label", null, [
                  E[27] || (E[27] = me(" Type ", -1)),
                  T("select", {
                    name: "publicationType",
                    value: b.publicationType
                  }, [
                    (q(), Y(ge, null, ot(n, (U) => T("option", {
                      key: U,
                      value: U
                    }, F(U), 9, Yf)), 64))
                  ], 8, qf)
                ]),
                T("label", null, [
                  E[28] || (E[28] = me(" Creators ", -1)),
                  T("input", {
                    type: "text",
                    name: "creators",
                    value: b.creators
                  }, null, 8, Xf)
                ]),
                T("label", null, [
                  E[29] || (E[29] = me(" Publication ", -1)),
                  T("input", {
                    type: "text",
                    name: "publication",
                    value: b.publication
                  }, null, 8, Jf)
                ]),
                T("label", null, [
                  E[30] || (E[30] = me(" Date ", -1)),
                  T("input", {
                    type: "text",
                    name: "publicationDate",
                    value: b.publicationDate
                  }, null, 8, Zf)
                ]),
                T("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: b.subtitle
                }, null, 8, Qf),
                T("input", {
                  type: "hidden",
                  name: "language",
                  value: b.language
                }, null, 8, ed),
                T("input", {
                  type: "hidden",
                  name: "publisher",
                  value: b.publisher
                }, null, 8, td),
                E[31] || (E[31] = T("button", { type: "submit" }, "Save metadata", -1))
              ], 8, Wf)
            ])
          ]))), 128))
        ]))
      ]),
      T("section", nd, [
        E[33] || (E[33] = T("div", null, [
          T("h2", null, "Library"),
          T("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        T("div", rd, [
          T("a", {
            href: d.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, sd)
        ])
      ])
    ]));
  }
}, ri = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), si = {
  ...ri,
  requestToken: dr?.dataset.requestToken || ri.requestToken || ""
};
function ve(e) {
  return String(e ?? "");
}
function _l(e) {
  return ve(e).toUpperCase();
}
function id(e, t, n, r = ve) {
  for (const s of t) {
    const o = document.createElement("option");
    o.value = ve(s), o.textContent = r(s), ve(s) === ve(n) && (o.selected = !0), e.appendChild(o);
  }
}
function oi(e, t, n, r, s = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const i = document.createElement("input");
  i.type = n === "q" ? "search" : "text", i.name = n, i.value = ve(r), i.placeholder = s, o.appendChild(i), e.appendChild(o);
}
function cn(e, t, n, r, s, o, i = ve) {
  const a = document.createElement("label");
  a.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), id(c, o, r, i), a.appendChild(c), e.appendChild(a);
}
function ld(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", H("library", "Catalogue search and filters")), oi(r, H("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), cn(r, H("library", "Type"), "type", n.type, H("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), oi(r, H("library", "Nextcloud tag"), "tag", n.tag, "photography"), cn(r, H("library", "Format"), "format", n.format, H("library", "All formats"), e.formats || [], _l), cn(r, H("library", "Shelf"), "shelf", n.shelf, H("library", "All shelves"), e.shelves || []), cn(r, H("library", "Scan status"), "status", n.status, H("library", "All scan statuses"), e.scanStatuses || []), cn(r, H("library", "Sort"), "sort", n.sort || "title", H("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), cn(r, H("library", "Page size"), "limit", t.limit || 100, H("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", H("library", "Apply catalogue filters")), s.textContent = H("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", H("library", "Clear catalogue filters")), o.textContent = H("library", "Clear"), r.append(s, o), r;
}
function ad(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ve(e.settingsUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const i = document.createElement("section");
  i.className = "library-panel", i.setAttribute("aria-labelledby", "library-catalogue-heading");
  const a = document.createElement("h2");
  a.id = "library-catalogue-heading", a.textContent = H("library", "Publication catalogue"), i.appendChild(a);
  const c = document.createElement("p");
  c.className = "library-muted", c.textContent = H("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), i.appendChild(c), i.appendChild(ld(e, r));
  const h = document.createElement("nav");
  h.className = "library-pagination", h.setAttribute("aria-label", H("library", "Catalogue pagination"));
  const d = document.createElement("span");
  if (d.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, h.appendChild(d), i.appendChild(h), n.length === 0) {
    const g = document.createElement("div");
    g.className = "library-empty-content", g.setAttribute("role", "status");
    const x = document.createElement("h3");
    x.textContent = H("library", "No catalogue items match");
    const I = document.createElement("p");
    I.className = "library-muted", I.textContent = H("library", "Scan enabled roots or clear the active filters."), g.append(x, I), i.appendChild(g);
  } else {
    const g = document.createElement("div");
    g.className = "library-cover-gallery";
    for (const x of n) {
      const I = document.createElement("article");
      I.className = "library-cover-card";
      const j = document.createElement("a");
      j.className = "library-cover-link", j.href = ve(x.openUrl || "#"), j.setAttribute("aria-label", `Read ${ve(x.title || "publication")}`);
      const M = document.createElement("img");
      M.className = "library-cover-image", M.src = ve(x.coverUrl || ""), M.alt = `Cover for ${ve(x.title || "publication")}`, M.loading = "lazy", j.appendChild(M);
      const $ = document.createElement("div");
      $.className = "library-cover-summary";
      const E = document.createElement("h3");
      if (E.textContent = ve(x.title || "Untitled publication"), $.appendChild(E), x.creators) {
        const be = document.createElement("p");
        be.className = "library-creator", be.textContent = ve(x.creators), $.appendChild(be);
      }
      const b = document.createElement("p");
      b.className = "library-muted", b.textContent = [
        ve(x.publicationType || "other"),
        x.extension ? `Format: ${_l(x.extension)}` : "",
        x.shelf ? `Shelf: ${ve(x.shelf)}` : ""
      ].filter(Boolean).join(" · "), $.appendChild(b);
      const U = document.createElement("p"), D = document.createElement("a");
      D.href = ve(x.openUrl || "#"), D.textContent = "Read";
      const Q = document.createElement("a");
      Q.href = ve(x.filesUrl || "#"), Q.textContent = "Show in Files", U.append(D, document.createTextNode(" · "), Q), $.appendChild(U), I.append(j, $), g.appendChild(I);
    }
    i.appendChild(g);
  }
  if (o.appendChild(i), s) {
    const g = document.createElement("section");
    g.className = "library-hero library-secondary-panel", g.setAttribute("aria-label", "Library settings");
    const x = document.createElement("div"), I = document.createElement("h2");
    I.textContent = "Library";
    const j = document.createElement("p");
    j.className = "library-lede", j.textContent = "Browse publications already stored in Nextcloud.", x.append(I, j);
    const M = document.createElement("div");
    M.className = "library-hero-actions";
    const $ = document.createElement("a");
    $.href = s, $.className = "button secondary", $.setAttribute("aria-label", "Open Library settings"), $.textContent = "Library settings", M.appendChild($), g.append(x, M), o.appendChild(g);
  }
  return o;
}
if (dr)
  try {
    Qc(od, { state: si }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(ad(si));
  }
//# sourceMappingURL=library-main.mjs.map
