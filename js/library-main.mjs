// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, dn = [], ct = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vr = (e) => e.startsWith("onUpdate:"), Re = Object.assign, Cs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), z = Array.isArray, Pt = (e) => Bn(e) === "[object Map]", Zt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", K = (e) => typeof e == "function", pe = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", oo = (e) => (se(e) || K(e)) && K(e.then) && K(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", ws = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, Ze = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, Qt = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = Ar(
  (e) => e ? `on${co(e)}` : ""
), bt = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uo = (e, t, n, r = !1) => {
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
let ai;
const Cr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Os(e) {
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = pe(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (pe(e) || se(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, kl = /:([^]+)/, jl = /\/\*[^]*?\*\//g;
function $l(e) {
  const t = {};
  return e.replace(jl, "").split(Hl).forEach((n) => {
    if (n) {
      const r = n.split(kl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Rs(e) {
  let t = "";
  if (pe(e))
    t = e;
  else if (z(e))
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
function fo(e) {
  return !!e || e === "";
}
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Dt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Dt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Dt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ut(e), r = ut(t), n || r)
    return e === t;
  if (n = z(e), r = z(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = se(e), r = se(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Pt(e), r = Pt(t), n || r || (n = Zt(e), r = Zt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (a && !c || !a && c || !Dt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Dt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), F = (e) => pe(e) ? e : e == null ? "" : z(e) || se(e) && (e.toString === lo || !K(e.toString)) ? po(e) ? F(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[qr(r, i) + " =>"] = s, n),
    {}
  )
} : Zt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qr(n))
} : ut(t) ? qr(t) : se(t) && !z(t) && !ao(t) ? String(t) : t, qr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ce;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ce && (Ce.active ? (this.parent = Ce, this.index = (Ce.scopes || (Ce.scopes = [])).push(
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
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ce, Ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ce === this)
        Ce = this.prevScope;
      else {
        let t = Ce;
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
  return Ce;
}
let ae;
const Yr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && (Ce.active ? Ce.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _o(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), bo(this);
    const t = ae, n = Qe;
    ae = this, Qe = !0;
    try {
      return this.fn();
    } finally {
      yo(this), ae = t, Qe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ds(t);
      this.deps = this.depsTail = void 0, ui(this), this.onStop && this.onStop(), this.flags &= -2;
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
let go = 0, Nn, Mn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mn, Mn = e;
    return;
  }
  e.next = Nn, Nn = e;
}
function Is() {
  go++;
}
function Ps() {
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
  for (; Nn; ) {
    let t = Nn;
    for (Nn = void 0; t; ) {
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
function bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function yo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Ds(r), ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hn) || (e.globalVersion = Hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ae, r = Qe;
  ae = e, Qe = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || bt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ae = n, Qe = r, yo(e), e.flags &= -3;
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
function ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const Eo = [];
function St() {
  Eo.push(Qe), Qe = !1;
}
function vt() {
  const e = Eo.pop();
  Qe = e === void 0 ? !0 : e;
}
function ui(e) {
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
let Hn = 0;
class Yl {
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
    if (!ae || !Qe || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new Yl(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, vo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t);
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
function vo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        vo(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const hs = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (Qe && ae) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function yt(e, t, n, r, s, i) {
  const o = hs.get(e);
  if (!o) {
    Hn++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if (Is(), t === "clear")
    o.forEach(a);
  else {
    const c = z(e), h = c && ws(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((g, x) => {
        (x === "length" || x === kn || !ut(x) && x >= d) && a(g);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), h && a(o.get(kn)), t) {
        case "add":
          c ? h && a(o.get("length")) : (a(o.get(Yt)), Pt(e) && a(o.get(ms)));
          break;
        case "delete":
          c || (a(o.get(Yt)), Pt(e) && a(o.get(ms)));
          break;
        case "set":
          Pt(e) && a(o.get(Yt));
          break;
      }
  }
  Ps();
}
function an(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Oe(t, "iterate", kn), /* @__PURE__ */ et(e) ? t : t.map(At));
}
function wr(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", kn), e;
}
function lt(e, t) {
  return /* @__PURE__ */ Nt(e) ? gn(/* @__PURE__ */ Xt(e) ? At(t) : t) : At(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => lt(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => z(t) ? an(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = lt(this, e[1]), e));
  },
  every(e, t) {
    return ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ht(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => lt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ht(
      this,
      "find",
      e,
      t,
      (n) => lt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ht(
      this,
      "findLast",
      e,
      t,
      (n) => lt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ht(this, "forEach", e, t, void 0, arguments);
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
    return ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vn(this, "pop");
  },
  push(...e) {
    return vn(this, "push", e);
  },
  reduce(e, ...t) {
    return fi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fi(this, "reduceRight", e, t);
  },
  shift() {
    return vn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vn(this, "splice", e);
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
    return vn(this, "unshift", e);
  },
  values() {
    return Xr(this, "values", (e) => lt(this, e));
  }
};
function Xr(e, t, n) {
  const r = wr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ et(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function ht(e, t, n, r, s, i) {
  const o = wr(e), a = o !== e && !/* @__PURE__ */ et(e), c = o[t];
  if (c !== Jl[t]) {
    const g = c.apply(e, i);
    return a ? At(g) : g;
  }
  let h = n;
  o !== e && (a ? h = function(g, x) {
    return n.call(this, lt(e, g), x, e);
  } : n.length > 2 && (h = function(g, x) {
    return n.call(this, g, x, e);
  }));
  const d = c.call(o, h, r);
  return a && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = wr(e), i = s !== e && !/* @__PURE__ */ et(e);
  let o = n, a = !1;
  s !== e && (i ? (a = r.length === 0, o = function(h, d, g) {
    return a && (a = !1, h = lt(e, h)), n.call(this, h, lt(e, d), g, e);
  }) : n.length > 3 && (o = function(h, d, g) {
    return n.call(this, h, d, g, e);
  }));
  const c = s[t](o, ...r);
  return a ? lt(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ re(e);
  Oe(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), r[t](...n)) : s;
}
function vn(e, t, n = []) {
  St(), Is();
  const r = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ps(), vt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function Ql(e) {
  ut(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
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
      return r === (s ? i ? ca : Ro : i ? Oo : wo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = z(t);
    if (!s) {
      let c;
      if (o && (c = Xl[n]))
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
    if ((ut(n) ? Ao.has(n) : Zl(n)) || (s || Oe(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ Fe(a)) {
      const c = o && ws(n) ? a : a.value;
      return s && se(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return se(a) ? s ? /* @__PURE__ */ _s(a) : /* @__PURE__ */ Or(a) : a;
  }
}
class Co extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = z(t) && ws(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Nt(i);
      if (!/* @__PURE__ */ et(r) && !/* @__PURE__ */ Nt(r) && (i = /* @__PURE__ */ re(i), r = /* @__PURE__ */ re(r)), !o && /* @__PURE__ */ Fe(i) && !/* @__PURE__ */ Fe(r))
        return h || (i.value = r), !0;
    }
    const a = o ? Number(n) < t.length : ne(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Fe(t) ? t : s
    );
    return t === /* @__PURE__ */ re(s) && c && (a ? bt(r, i) && yt(t, "set", n, r) : yt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && yt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ut(n) || !Ao.has(n)) && Oe(t, "has", n), r;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      z(t) ? "length" : Yt
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
const ta = /* @__PURE__ */ new Co(), na = /* @__PURE__ */ new ea(), ra = /* @__PURE__ */ new Co(!0);
const gs = (e) => e, rr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ re(s), o = Pt(i), a = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? gn : At;
    return !t && Oe(
      i,
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
function ia(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), a = /* @__PURE__ */ re(s);
      e || (bt(s, a) && Oe(o, "get", s), Oe(o, "get", a));
      const { has: c } = rr(o), h = t ? gs : e ? gn : At;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, a))
        return h(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ re(s), "iterate", Yt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), a = /* @__PURE__ */ re(s);
      return e || (bt(s, a) && Oe(o, "has", s), Oe(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a);
    },
    forEach(s, i) {
      const o = this, a = o.__v_raw, c = /* @__PURE__ */ re(a), h = t ? gs : e ? gn : At;
      return !e && Oe(c, "iterate", Yt), a.forEach((d, g) => s.call(i, h(d), h(g), o));
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
        const i = /* @__PURE__ */ re(this), o = rr(i), a = /* @__PURE__ */ re(s), c = !t && !/* @__PURE__ */ et(s) && !/* @__PURE__ */ Nt(s) ? a : s;
        return o.has.call(i, c) || bt(s, c) && o.has.call(i, s) || bt(a, c) && o.has.call(i, a) || (i.add(c), yt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ et(i) && !/* @__PURE__ */ Nt(i) && (i = /* @__PURE__ */ re(i));
        const o = /* @__PURE__ */ re(this), { has: a, get: c } = rr(o);
        let h = a.call(o, s);
        h || (s = /* @__PURE__ */ re(s), h = a.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? bt(i, d) && yt(o, "set", s, i) : yt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ re(this), { has: o, get: a } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ re(s), c = o.call(i, s)), a && a.call(i, s);
        const h = i.delete(s);
        return c && yt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ re(this), i = s.size !== 0, o = s.clear();
        return i && yt(
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
function Ns(e, t) {
  const n = ia(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ne(n, s) && s in r ? n : r,
    s,
    i
  );
}
const oa = {
  get: /* @__PURE__ */ Ns(!1, !1)
}, la = {
  get: /* @__PURE__ */ Ns(!1, !0)
}, aa = {
  get: /* @__PURE__ */ Ns(!0, !1)
};
const wo = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ Nt(e) ? e : Ms(
    e,
    !1,
    ta,
    oa,
    wo
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
function _s(e) {
  return Ms(
    e,
    !0,
    na,
    aa,
    Ro
  );
}
function Ms(e, t, n, r, s) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ua(Ll(e));
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return /* @__PURE__ */ Nt(e) ? /* @__PURE__ */ Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
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
  return !ne(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const At = (e) => se(e) ? /* @__PURE__ */ Or(e) : e, gn = (e) => se(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return /* @__PURE__ */ Fe(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : X(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Fe(s) && !/* @__PURE__ */ Fe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Xt(e) ? e : new Proxy(e, pa);
}
class ha {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new So(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return _o(this, !0), !0;
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
  return K(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Wt;
function ga(e, t = !1, n = Wt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = ie) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: a, call: c } = n, h = (M) => s ? M : /* @__PURE__ */ et(M) || s === !1 || s === 0 ? Tt(M, 1) : Tt(M);
  let d, g, x, P, j = !1, N = !1;
  if (/* @__PURE__ */ Fe(e) ? (g = () => e.value, j = /* @__PURE__ */ et(e)) : /* @__PURE__ */ Xt(e) ? (g = () => h(e), j = !0) : z(e) ? (N = !0, j = e.some((M) => /* @__PURE__ */ Xt(M) || /* @__PURE__ */ et(M)), g = () => e.map((M) => {
    if (/* @__PURE__ */ Fe(M))
      return M.value;
    if (/* @__PURE__ */ Xt(M))
      return h(M);
    if (K(M))
      return c ? c(M, 2) : M();
  })) : K(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (x) {
      St();
      try {
        x();
      } finally {
        vt();
      }
    }
    const M = Wt;
    Wt = d;
    try {
      return c ? c(e, 3, [P]) : e(P);
    } finally {
      Wt = M;
    }
  } : g = ct, t && s) {
    const M = g, ee = s === !0 ? 1 / 0 : s;
    g = () => Tt(M(), ee);
  }
  const T = Gl(), b = () => {
    d.stop(), T && T.active && Cs(T.effects, d);
  };
  if (i && t) {
    const M = t;
    t = (...ee) => {
      const be = M(...ee);
      return b(), be;
    };
  }
  let H = N ? new Array(e.length).fill(ir) : ir;
  const G = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const ee = d.run();
        if (M || s || j || (N ? ee.some((be, me) => bt(be, H[me])) : bt(ee, H))) {
          x && x();
          const be = Wt;
          Wt = d;
          try {
            const me = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              H === ir ? void 0 : N && H[0] === ir ? [] : H,
              P
            ];
            H = ee, c ? c(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            Wt = be;
          }
        }
      } else
        d.run();
  };
  return a && a(G), d = new mo(g), d.scheduler = o ? () => o(G, !1) : G, P = (M) => ga(M, !1, d), x = d.onStop = () => {
    const M = pr.get(d);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const ee of M) ee();
      pr.delete(d);
    }
  }, t ? r ? G(!0) : H = d.run() : o ? o(G.bind(null, !0), !0) : d.run(), b.pause = d.pause.bind(d), b.resume = d.resume.bind(d), b.stop = b, b;
}
function Tt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fe(e))
    Tt(e.value, t, n);
  else if (z(e))
    for (let r = 0; r < e.length; r++)
      Tt(e[r], t, n);
  else if (Zt(e) || Pt(e))
    e.forEach((r) => {
      Tt(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      Tt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Tt(e[r], t, n);
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
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (z(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(tt(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ie;
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
    if (i) {
      St(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), vt();
      return;
    }
  }
  ba(e, n, s, r, o);
}
function ba(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Me = [];
let ot = -1;
const pn = [];
let It = null, un = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = ot + 1, n = Me.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Me[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Me[Me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Me.push(e) : Me.splice(ya(t), 0, e), e.flags |= 1, No();
  }
}
function No() {
  hr || (hr = Po.then(Lo));
}
function Ta(e) {
  if (!z(e))
    It && e.id === -1 ? It.splice(un + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      pn.push(e[t]);
  No();
}
function di(e, t, n = ot + 1) {
  for (; n < Me.length; n++) {
    const r = Me[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Mo(e) {
  if (pn.length) {
    const t = [...new Set(pn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (pn.length = 0, It) {
      for (let n = 0; n < t.length; n++)
        It.push(t[n]);
      return;
    }
    for (It = t, un = 0; un < It.length; un++) {
      const n = It[un];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    It = null, un = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (ot = 0; ot < Me.length; ot++) {
      const t = Me[ot];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ot < Me.length; ot++) {
      const t = Me[ot];
      t && (t.flags &= -2);
    }
    ot = -1, Me.length = 0, Mo(), hr = null, (Me.length || pn.length) && Lo();
  }
}
let Ye = null, Fo = null;
function mr(e) {
  const t = Ye;
  return Ye = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && vi(-1);
    const i = mr(t), o = Jt.length;
    let a;
    try {
      a = e(...s);
    } finally {
      for (let c = Jt.length; c > o; c--) ol();
      mr(i), r._d && vi(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function jt(e, t) {
  if (Ye === null)
    return e;
  const n = Mr(Ye), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, c = ie] = t[s];
    i && (K(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Tt(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function $t(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let c = a.dir[r];
    c && (St(), tt(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), vt());
  }
}
function Sa(e, t) {
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
const va = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(va);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ie) {
  const { immediate: r, deep: s, flush: i, once: o } = n, a = Re({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const P = Aa();
      h = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!c) {
      const P = () => {
      };
      return P.stop = ct, P.resume = ct, P.pause = ct, P;
    }
  }
  const d = Le;
  a.call = (P, j, N) => tt(P, d, j, N);
  let g = !1;
  i === "post" ? a.scheduler = (P) => {
    je(P, d && d.suspense);
  } : i !== "sync" && (g = !0, a.scheduler = (P, j) => {
    j ? P() : Fs(P);
  }), a.augmentJob = (P) => {
    t && (P.flags |= 4), g && (P.flags |= 2, d && (P.id = d.uid, P.i = d));
  };
  const x = _a(e, t, a);
  return zn && (h ? h.push(x) : c && x()), x;
}
function xa(e, t, n) {
  const r = this.proxy, s = pe(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  K(t) ? i = t : (i = t.handler, n = t);
  const o = Kn(this), a = Uo(s, i.bind(r), n);
  return o(), a;
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
const Ca = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function wa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== xt) {
        t = n;
        break;
      }
  }
  return t;
}
function ko(e) {
  if (!Hs(e))
    return Ir(e.type) && e.children ? wa(e.children) : e;
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
      Ir(n.type) && ko(n) || n,
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
const gr = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (z(e)) {
    e.forEach(
      (N, T) => Ln(
        N,
        t && (z(t) ? t[T] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: a, r: c } = e, h = t && t.r, d = a.refs === ie ? a.refs = {} : a.refs, g = a.setupState, x = /* @__PURE__ */ re(g), P = g === ie ? io : (N) => pi(d, N) ? !1 : ne(x, N), j = (N, T) => !(T && pi(d, T));
  if (h != null && h !== c) {
    if (hi(t), pe(h))
      d[h] = null, P(h) && (g[h] = null);
    else if (/* @__PURE__ */ Fe(h)) {
      const N = t;
      j(h, N.k) && (h.value = null), N.k && (d[N.k] = null);
    }
  }
  if (K(c))
    Wn(c, a, 12, [o, d]);
  else {
    const N = pe(c), T = /* @__PURE__ */ Fe(c);
    if (N || T) {
      const b = () => {
        if (e.f) {
          const H = N ? P(c) ? g[c] : d[c] : j() || !e.k ? c.value : d[e.k];
          if (s)
            z(H) && Cs(H, i);
          else if (z(H))
            H.includes(i) || H.push(i);
          else if (N)
            d[c] = [i], P(c) && (g[c] = d[c]);
          else {
            const G = [i];
            j(c, e.k) && (c.value = G), e.k && (d[e.k] = G);
          }
        } else N ? (d[c] = o, P(c) && (g[c] = o)) : T && (j(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const H = () => {
          b(), gr.delete(e);
        };
        H.id = -1, gr.set(e, H), je(H, n);
      } else
        hi(e), b();
    }
  }
}
function hi(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
Cr().requestIdleCallback;
Cr().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, Hs = (e) => e.type.__isKeepAlive;
function Oa(e, t) {
  $o(e, "a", t);
}
function Ra(e, t) {
  $o(e, "da", t);
}
function $o(e, t, n = Le) {
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
      Hs(s.parent.vnode) && Ia(r, t, n, s), s = s.parent;
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
  Vo(() => {
    Cs(r[t], s);
  }, n);
}
function Pr(e, t, n = Le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      St();
      const a = Kn(n), c = tt(t, n, e, o);
      return a(), vt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Ct = (e) => (t, n = Le) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Ct("bm"), Da = Ct("m"), Na = Ct(
  "bu"
), Ma = Ct("u"), La = Ct(
  "bum"
), Vo = Ct("um"), Fa = Ct(
  "sp"
), Ua = Ct("rtg"), Ha = Ct("rtc");
function ka(e, t = Le) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function mt(e, t, n, r) {
  let s;
  const i = n, o = z(e);
  if (o || pe(e)) {
    const a = o && /* @__PURE__ */ Xt(e);
    let c = !1, h = !1;
    a && (c = !/* @__PURE__ */ et(e), h = /* @__PURE__ */ Nt(e), e = wr(e)), s = new Array(e.length);
    for (let d = 0, g = e.length; d < g; d++)
      s[d] = t(
        c ? h ? gn(At(e[d])) : At(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, i);
  } else if (se(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, c) => t(a, c, void 0, i)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, h = a.length; c < h; c++) {
        const d = a[c];
        s[c] = t(e[d], d, c, i);
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
    $options: (e) => Bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== ie && !e.__isScriptSetup && ne(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: c } = e;
    if (t[0] !== "$") {
      const x = o[t];
      if (x !== void 0)
        switch (x) {
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
        if (es(r, t))
          return o[t] = 1, r[t];
        if (s !== ie && ne(s, t))
          return o[t] = 2, s[t];
        if (ne(i, t))
          return o[t] = 3, i[t];
        if (n !== ie && ne(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
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
    if (n !== ie && ne(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, ne(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== ie && ne(r, t) ? (r[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, a) {
    let c;
    return !!(n[a] || e !== ie && a[0] !== "$" && ne(e, a) || es(t, a) || ne(i, a) || ne(r, a) || ne(Un, a) || ne(s.config.globalProperties, a) || (c = o.__cssModules) && c[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ys = !0;
function Va(e) {
  const t = Bo(e), n = e.proxy, r = e.ctx;
  ys = !1, t.beforeCreate && gi(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: c,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: g,
    mounted: x,
    beforeUpdate: P,
    updated: j,
    activated: N,
    deactivated: T,
    beforeDestroy: b,
    beforeUnmount: H,
    destroyed: G,
    unmounted: M,
    render: ee,
    renderTracked: be,
    renderTriggered: me,
    errorCaptured: Ke,
    serverPrefetch: ye,
    // public API
    expose: Ie,
    inheritAttrs: ft,
    // assets
    components: Mt,
    directives: nt,
    filters: en
  } = t;
  if (h && za(h, r, null), o)
    for (const ce in o) {
      const te = o[ce];
      K(te) && (r[ce] = te.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    se(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, i)
    for (const ce in i) {
      const te = i[ce], Xe = K(te) ? te.bind(n, n) : K(te.get) ? te.get.bind(n, n) : ct, Lt = !K(te) && K(te.set) ? te.set.bind(n) : ct, pt = Rt({
        get: Xe,
        set: Lt
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Ge) => pt.value = Ge
      });
    }
  if (a)
    for (const ce in a)
      zo(a[ce], r, n, ce);
  if (c) {
    const ce = K(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((te) => {
      Sa(te, ce[te]);
    });
  }
  d && gi(d, e, "c");
  function xe(ce, te) {
    z(te) ? te.forEach((Xe) => ce(Xe.bind(n))) : te && ce(te.bind(n));
  }
  if (xe(Pa, g), xe(Da, x), xe(Na, P), xe(Ma, j), xe(Oa, N), xe(Ra, T), xe(ka, Ke), xe(Ha, be), xe(Ua, me), xe(La, H), xe(Vo, M), xe(Fa, ye), z(Ie))
    if (Ie.length) {
      const ce = e.exposed || (e.exposed = {});
      Ie.forEach((te) => {
        Object.defineProperty(ce, te, {
          get: () => n[te],
          set: (Xe) => n[te] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ee && e.render === ct && (e.render = ee), ft != null && (e.inheritAttrs = ft), Mt && (e.components = Mt), nt && (e.directives = nt), ye && jo(e);
}
function za(e, t, n = ct) {
  z(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    se(s) ? "default" in s ? i = ur(
      s.from || r,
      s.default,
      !0
    ) : i = ur(s.from || r) : i = ur(s), /* @__PURE__ */ Fe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  tt(
    z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (pe(e)) {
    const i = t[e];
    K(i) && Zr(s, i);
  } else if (K(e))
    Zr(s, e.bind(n));
  else if (se(e))
    if (z(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(i) && Zr(s, i, e);
    }
}
function Bo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = i.get(t);
  let c;
  return a ? c = a : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (h) => _r(c, h, o, !0)
  ), _r(c, t, o)), se(t) && i.set(t, c), c;
}
function _r(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, n, !0), s && s.forEach(
    (o) => _r(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = Ba[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Ba = {
  data: _i,
  props: bi,
  emits: bi,
  // objects
  methods: Rn,
  computed: Rn,
  // lifecycle
  beforeCreate: Ne,
  created: Ne,
  beforeMount: Ne,
  mounted: Ne,
  beforeUpdate: Ne,
  updated: Ne,
  beforeDestroy: Ne,
  beforeUnmount: Ne,
  destroyed: Ne,
  unmounted: Ne,
  activated: Ne,
  deactivated: Ne,
  errorCaptured: Ne,
  serverPrefetch: Ne,
  // assets
  components: Rn,
  directives: Rn,
  // watch
  watch: Ka,
  // provide / inject
  provide: _i,
  inject: Wa
};
function _i(e, t) {
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
  if (z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? z(e) && z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Re(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ne(e[r], t[r]);
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
let Ga = 0;
function qa(e, t) {
  return function(r, s = null) {
    K(r) || (r = Re({}, r)), s != null && !se(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let c = !1;
    const h = i.app = {
      _uid: Ga++,
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
      use(d, ...g) {
        return o.has(d) || (d && K(d.install) ? (o.add(d), d.install(h, ...g)) : K(d) && (o.add(d), d(h, ...g))), h;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), h;
      },
      component(d, g) {
        return g ? (i.components[d] = g, h) : i.components[d];
      },
      directive(d, g) {
        return g ? (i.directives[d] = g, h) : i.directives[d];
      },
      mount(d, g, x) {
        if (!c) {
          const P = h._ceVNode || Et(r, s);
          return P.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(P, d, x), c = !0, h._container = d, d.__vue_app__ = h, Mr(P.component);
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
        return i.provides[d] = g, h;
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
  const r = e.vnode.props || ie;
  let s = n;
  const i = t.startsWith("update:"), o = i && Ya(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => pe(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let a, c = r[a = Gr(t)] || // also try camelCase event handler (#2249)
  r[a = Gr(Ze(t))];
  !c && i && (c = r[a = Gr(Qt(t))]), c && tt(
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
function Ko(e, t, n = !1) {
  const r = n ? Ja : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, a = !1;
  if (!K(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (a = !0, Re(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !a ? (se(e) && r.set(e, null), null) : (z(i) ? i.forEach((c) => o[c] = null) : Re(o, i), se(e) && r.set(e, o), o);
}
function Dr(e, t) {
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, Qt(t)) || ne(e, t));
}
function yi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: c,
    render: h,
    renderCache: d,
    props: g,
    data: x,
    setupState: P,
    ctx: j,
    inheritAttrs: N
  } = e, T = mr(e);
  let b, H;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, ee = M;
      b = at(
        h.call(
          ee,
          M,
          d,
          g,
          P,
          x,
          j
        )
      ), H = a;
    } else {
      const M = t;
      b = at(
        M.length > 1 ? M(
          g,
          { attrs: a, slots: o, emit: c }
        ) : M(
          g,
          null
        )
      ), H = t.props ? a : Za(a);
    }
  } catch (M) {
    Jt.length = 0, Rr(M, e, 1), b = Et(xt);
  }
  let G = b;
  if (H && N !== !1) {
    const M = Object.keys(H), { shapeFlag: ee } = G;
    M.length && ee & 7 && (i && M.some(vr) && (H = Qa(
      H,
      i
    )), G = _n(G, H, !1, !0));
  }
  if (n.dirs && (G = _n(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Ir(G.type) && ko(G) || G;
    Us(M, n.transition);
  }
  return b = G, mr(T), b;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!vr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: a, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, h) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        const x = d[g];
        if (Go(o, r, x) && !Dr(h, x))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, h) : !0 : !!o;
  return !1;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Go(t, e, i) && !Dr(n, i))
      return !0;
  }
  return !1;
}
function Go(e, t, n) {
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
  } = e, a = /* @__PURE__ */ re(s), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        let x = d[g];
        if (Dr(e.emitsOptions, x))
          continue;
        const P = t[x];
        if (c)
          if (ne(i, x))
            P !== i[x] && (i[x] = P, h = !0);
          else {
            const j = Ze(x);
            s[j] = Es(
              c,
              a,
              j,
              P,
              e,
              !1
            );
          }
        else
          P !== i[x] && (i[x] = P, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
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
    if (i !== a)
      for (const g in i)
        (!t || !ne(t, g)) && (delete i[g], h = !0);
  }
  h && yt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let c in t) {
      if (Dn(c))
        continue;
      const h = t[c];
      let d;
      s && ne(s, d = Ze(c)) ? !i || !i.includes(d) ? n[d] = h : (a || (a = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ re(n), h = a || ie;
    for (let d = 0; d < i.length; d++) {
      const g = i[d];
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
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = ne(o, "default");
    if (a && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: h } = s;
        if (n in h)
          r = h[n];
        else {
          const d = Kn(s);
          r = h[n] = c.call(
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
    ] && (i && !a ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Qt(n)) && (r = !0));
  }
  return r;
}
const sc = /* @__PURE__ */ new WeakMap();
function Zo(e, t, n = !1) {
  const r = n ? sc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, a = [];
  let c = !1;
  if (!K(e)) {
    const d = (g) => {
      c = !0;
      const [x, P] = Zo(g, t, !0);
      Re(o, x), P && a.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return se(e) && r.set(e, dn), dn;
  if (z(i))
    for (let d = 0; d < i.length; d++) {
      const g = Ze(i[d]);
      Ei(g) && (o[g] = ie);
    }
  else if (i)
    for (const d in i) {
      const g = Ze(d);
      if (Ei(g)) {
        const x = i[d], P = o[g] = z(x) || K(x) ? { type: x } : Re({}, x), j = P.type;
        let N = !1, T = !0;
        if (z(j))
          for (let b = 0; b < j.length; ++b) {
            const H = j[b], G = K(H) && H.name;
            if (G === "Boolean") {
              N = !0;
              break;
            } else G === "String" && (T = !1);
          }
        else
          N = K(j) && j.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = N, P[
          1
          /* shouldCastTrue */
        ] = T, (N || ne(P, "default")) && a.push(g);
      }
    }
  const h = [o, a];
  return se(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => z(e) ? e.map(at) : [at(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ks(s)) continue;
    const i = e[s];
    if (K(i))
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
    (n || !ks(r)) && (e[r] = t[r]);
}, oc = (e, t, n) => {
  const r = e.slots = Yo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && uo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = ie;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const a in s)
      !ks(a) && o[a] == null && delete s[a];
}, je = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = Cr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: c,
    setText: h,
    setElementText: d,
    parentNode: g,
    nextSibling: x,
    setScopeId: P = ct,
    insertStaticContent: j
  } = e, N = (u, f, m, A = null, _ = null, E = null, w = void 0, O = null, R = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !An(u, f) && (A = tn(u), Ge(u, _, E, !0), u = null), f.patchFlag === -2 && (R = !1, f.dynamicChildren = null);
    const { type: y, ref: $, shapeFlag: I } = f;
    switch (y) {
      case Nr:
        T(u, f, m, A);
        break;
      case xt:
        b(u, f, m, A);
        break;
      case ns:
        u == null && H(f, m, A, w);
        break;
      case Ee:
        Mt(
          u,
          f,
          m,
          A,
          _,
          E,
          w,
          O,
          R
        );
        break;
      default:
        I & 1 ? ee(
          u,
          f,
          m,
          A,
          _,
          E,
          w,
          O,
          R
        ) : I & 6 ? nt(
          u,
          f,
          m,
          A,
          _,
          E,
          w,
          O,
          R
        ) : (I & 64 || I & 128) && y.process(
          u,
          f,
          m,
          A,
          _,
          E,
          w,
          O,
          R,
          Ut
        );
    }
    $ != null && _ ? Ln($, u && u.ref, E, f || u, !f) : $ == null && u && u.ref != null && Ln(u.ref, null, E, u, !0);
  }, T = (u, f, m, A) => {
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
  }, b = (u, f, m, A) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      A
    ) : f.el = u.el;
  }, H = (u, f, m, A) => {
    [u.el, u.anchor] = j(
      u.children,
      f,
      m,
      A,
      u.el,
      u.anchor
    );
  }, G = ({ el: u, anchor: f }, m, A) => {
    let _;
    for (; u && u !== f; )
      _ = x(u), r(u, m, A), u = _;
    r(f, m, A);
  }, M = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, ee = (u, f, m, A, _, E, w, O, R) => {
    if (f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), u == null)
      be(
        f,
        m,
        A,
        _,
        E,
        w,
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
          E,
          w,
          O,
          R
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, be = (u, f, m, A, _, E, w, O) => {
    let R, y;
    const { props: $, shapeFlag: I, transition: k, dirs: V } = u;
    if (R = u.el = o(
      u.type,
      E,
      $ && $.is,
      $
    ), I & 8 ? d(R, u.children) : I & 16 && Ke(
      u.children,
      R,
      null,
      A,
      _,
      ts(u, E),
      w,
      O
    ), V && $t(u, null, A, "created"), me(R, u, u.scopeId, w, A), $) {
      for (const Y in $)
        Y !== "value" && !Dn(Y) && i(R, Y, null, $[Y], E, A);
      "value" in $ && i(R, "value", null, $.value, E), (y = $.onVnodeBeforeMount) && it(y, A, u);
    }
    V && $t(u, null, A, "beforeMount");
    const W = uc(_, k);
    W && k.beforeEnter(R), r(R, f, m), ((y = $ && $.onVnodeMounted) || W || V) && je(() => {
      y && it(y, A, u), W && k.enter(R), V && $t(u, null, A, "mounted");
    }, _);
  }, me = (u, f, m, A, _) => {
    if (m && P(u, m), A)
      for (let E = 0; E < A.length; E++)
        P(u, A[E]);
    if (_) {
      let E = _.subTree;
      if (f === E || il(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const w = _.vnode;
        me(
          u,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, Ke = (u, f, m, A, _, E, w, O, R = 0) => {
    for (let y = R; y < u.length; y++) {
      const $ = u[y] = O ? _t(u[y]) : at(u[y]);
      N(
        null,
        $,
        f,
        m,
        A,
        _,
        E,
        w,
        O
      );
    }
  }, ye = (u, f, m, A, _, E, w) => {
    const O = f.el = u.el;
    let { patchFlag: R, dynamicChildren: y, dirs: $ } = f;
    R |= u.patchFlag & 16;
    const I = u.props || ie, k = f.props || ie;
    let V;
    if (m && Vt(m, !1), (V = k.onVnodeBeforeUpdate) && it(V, m, f, u), $ && $t(f, u, m, "beforeUpdate"), m && Vt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (R = 0, w = !1, y = null), (I.innerHTML && k.innerHTML == null || I.textContent && k.textContent == null) && d(O, ""), y ? Ie(
      u.dynamicChildren,
      y,
      O,
      m,
      A,
      ts(f, _),
      E
    ) : w || te(
      u,
      f,
      O,
      null,
      m,
      A,
      ts(f, _),
      E,
      !1
    ), R > 0) {
      if (R & 16)
        ft(O, I, k, m, _);
      else if (R & 2 && I.class !== k.class && i(O, "class", null, k.class, _), R & 4 && i(O, "style", I.style, k.style, _), R & 8) {
        const W = f.dynamicProps;
        for (let Y = 0; Y < W.length; Y++) {
          const q = W[Y], ue = I[q], de = k[q];
          (de !== ue || q === "value") && i(O, q, ue, de, _, m);
        }
      }
      R & 1 && u.children !== f.children && d(O, f.children);
    } else !w && y == null && ft(O, I, k, m, _);
    ((V = k.onVnodeUpdated) || $) && je(() => {
      V && it(V, m, f, u), $ && $t(f, u, m, "updated");
    }, A);
  }, Ie = (u, f, m, A, _, E, w) => {
    for (let O = 0; O < f.length; O++) {
      const R = u[O], y = f[O], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !An(R, y) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? g(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      N(
        R,
        y,
        $,
        null,
        A,
        _,
        E,
        w,
        !0
      );
    }
  }, ft = (u, f, m, A, _) => {
    if (f !== m) {
      if (f !== ie)
        for (const E in f)
          !Dn(E) && !(E in m) && i(
            u,
            E,
            f[E],
            null,
            _,
            A
          );
      for (const E in m) {
        if (Dn(E)) continue;
        const w = m[E], O = f[E];
        w !== O && E !== "value" && i(u, E, O, w, _, A);
      }
      "value" in m && i(u, "value", f.value, m.value, _);
    }
  }, Mt = (u, f, m, A, _, E, w, O, R) => {
    const y = f.el = u ? u.el : a(""), $ = f.anchor = u ? u.anchor : a("");
    let { patchFlag: I, dynamicChildren: k, slotScopeIds: V } = f;
    V && (O = O ? O.concat(V) : V), u == null ? (r(y, m, A), r($, m, A), Ke(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      $,
      _,
      E,
      w,
      O,
      R
    )) : I > 0 && I & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === k.length ? (Ie(
      u.dynamicChildren,
      k,
      m,
      _,
      E,
      w,
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
    )) : te(
      u,
      f,
      m,
      $,
      _,
      E,
      w,
      O,
      R
    );
  }, nt = (u, f, m, A, _, E, w, O, R) => {
    f.slotScopeIds = O, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      A,
      w,
      R
    ) : en(
      f,
      m,
      A,
      _,
      E,
      w,
      R
    ) : dt(u, f, R);
  }, en = (u, f, m, A, _, E, w) => {
    const O = u.component = yc(
      u,
      A,
      _
    );
    if (Hs(u) && (O.ctx.renderer = Ut), Ec(O, !1, w), O.asyncDep) {
      if (_ && _.registerDep(O, xe, w), !u.el) {
        const R = O.subTree = Et(xt);
        b(null, R, f, m), u.placeholder = R.el;
      }
    } else
      xe(
        O,
        u,
        f,
        m,
        _,
        E,
        w
      );
  }, dt = (u, f, m) => {
    const A = f.component = u.component;
    if (ec(u, f, m))
      if (A.asyncDep && !A.asyncResolved) {
        ce(A, f, m);
        return;
      } else
        A.next = f, A.update();
    else
      f.el = u.el, A.vnode = f;
  }, xe = (u, f, m, A, _, E, w) => {
    const O = () => {
      if (u.isMounted) {
        let { next: I, bu: k, u: V, parent: W, vnode: Y } = u;
        {
          const Ue = rl(u);
          if (Ue) {
            I && (I.el = Y.el, ce(u, I, w)), Ue.asyncDep.then(() => {
              je(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let q = I, ue;
        Vt(u, !1), I ? (I.el = Y.el, ce(u, I, w)) : I = Y, k && cr(k), (ue = I.props && I.props.onVnodeBeforeUpdate) && it(ue, W, I, Y), Vt(u, !0);
        const de = yi(u), Pe = u.subTree;
        u.subTree = de, N(
          Pe,
          de,
          // parent may have changed if it's in a teleport
          g(Pe.el),
          // anchor may have changed if it's in a fragment
          tn(Pe),
          u,
          _,
          E
        ), I.el = de.el, q === null && tc(u, de.el), V && je(V, _), (ue = I.props && I.props.onVnodeUpdated) && je(
          () => it(ue, W, I, Y),
          _
        );
      } else {
        let I;
        const { el: k, props: V } = f, { bm: W, m: Y, parent: q, root: ue, type: de } = u, Pe = Fn(f);
        Vt(u, !1), W && cr(W), !Pe && (I = V && V.onVnodeBeforeMount) && it(I, q, f), Vt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            de,
            u.parent ? u.parent.type : void 0
          );
          const Ue = u.subTree = yi(u);
          N(
            null,
            Ue,
            m,
            A,
            u,
            _,
            E
          ), f.el = Ue.el;
        }
        if (Y && je(Y, _), !Pe && (I = V && V.onVnodeMounted)) {
          const Ue = f;
          je(
            () => it(I, q, Ue),
            _
          );
        }
        (f.shapeFlag & 256 || q && Fn(q.vnode) && q.vnode.shapeFlag & 256) && u.a && je(u.a, _), u.isMounted = !0, f = m = A = null;
      }
    };
    u.scope.on();
    const R = u.effect = new mo(O);
    u.scope.off();
    const y = u.update = R.run.bind(R), $ = u.job = R.runIfDirty.bind(R);
    $.i = u, $.id = u.uid, R.scheduler = () => Fs($), Vt(u, !0), y();
  }, ce = (u, f, m) => {
    f.component = u;
    const A = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, A, m), lc(u, f.children, m), St(), di(u), vt();
  }, te = (u, f, m, A, _, E, w, O, R = !1) => {
    const y = u && u.children, $ = u ? u.shapeFlag : 0, I = f.children, { patchFlag: k, shapeFlag: V } = f;
    if (k > 0) {
      if (k & 128) {
        Lt(
          y,
          I,
          m,
          A,
          _,
          E,
          w,
          O,
          R
        );
        return;
      } else if (k & 256) {
        Xe(
          y,
          I,
          m,
          A,
          _,
          E,
          w,
          O,
          R
        );
        return;
      }
    }
    V & 8 ? ($ & 16 && Ft(y, _, E), I !== y && d(m, I)) : $ & 16 ? V & 16 ? Lt(
      y,
      I,
      m,
      A,
      _,
      E,
      w,
      O,
      R
    ) : Ft(y, _, E, !0) : ($ & 8 && d(m, ""), V & 16 && Ke(
      I,
      m,
      A,
      _,
      E,
      w,
      O,
      R
    ));
  }, Xe = (u, f, m, A, _, E, w, O, R) => {
    u = u || dn, f = f || dn;
    const y = u.length, $ = f.length, I = Math.min(y, $);
    let k;
    for (k = 0; k < I; k++) {
      const V = f[k] = R ? _t(f[k]) : at(f[k]);
      N(
        u[k],
        V,
        m,
        null,
        _,
        E,
        w,
        O,
        R
      );
    }
    y > $ ? Ft(
      u,
      _,
      E,
      !0,
      !1,
      I
    ) : Ke(
      f,
      m,
      A,
      _,
      E,
      w,
      O,
      R,
      I
    );
  }, Lt = (u, f, m, A, _, E, w, O, R) => {
    let y = 0;
    const $ = f.length;
    let I = u.length - 1, k = $ - 1;
    for (; y <= I && y <= k; ) {
      const V = u[y], W = f[y] = R ? _t(f[y]) : at(f[y]);
      if (An(V, W))
        N(
          V,
          W,
          m,
          null,
          _,
          E,
          w,
          O,
          R
        );
      else
        break;
      y++;
    }
    for (; y <= I && y <= k; ) {
      const V = u[I], W = f[k] = R ? _t(f[k]) : at(f[k]);
      if (An(V, W))
        N(
          V,
          W,
          m,
          null,
          _,
          E,
          w,
          O,
          R
        );
      else
        break;
      I--, k--;
    }
    if (y > I) {
      if (y <= k) {
        const V = k + 1, W = V < $ ? f[V].el : A;
        for (; y <= k; )
          N(
            null,
            f[y] = R ? _t(f[y]) : at(f[y]),
            m,
            W,
            _,
            E,
            w,
            O,
            R
          ), y++;
      }
    } else if (y > k)
      for (; y <= I; )
        Ge(u[y], _, E, !0), y++;
    else {
      const V = y, W = y, Y = /* @__PURE__ */ new Map();
      for (y = W; y <= k; y++) {
        const ve = f[y] = R ? _t(f[y]) : at(f[y]);
        ve.key != null && Y.set(ve.key, y);
      }
      let q, ue = 0;
      const de = k - W + 1;
      let Pe = !1, Ue = 0;
      const qe = new Array(de);
      for (y = 0; y < de; y++) qe[y] = 0;
      for (y = V; y <= I; y++) {
        const ve = u[y];
        if (ue >= de) {
          Ge(ve, _, E, !0);
          continue;
        }
        let Ve;
        if (ve.key != null)
          Ve = Y.get(ve.key);
        else
          for (q = W; q <= k; q++)
            if (qe[q - W] === 0 && An(ve, f[q])) {
              Ve = q;
              break;
            }
        Ve === void 0 ? Ge(ve, _, E, !0) : (qe[Ve - W] = y + 1, Ve >= Ue ? Ue = Ve : Pe = !0, N(
          ve,
          f[Ve],
          m,
          null,
          _,
          E,
          w,
          O,
          R
        ), ue++);
      }
      const Ht = Pe ? fc(qe) : dn;
      for (q = Ht.length - 1, y = de - 1; y >= 0; y--) {
        const ve = W + y, Ve = f[ve], yn = f[ve + 1], Tn = ve + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          yn.el || sl(yn)
        ) : A;
        qe[y] === 0 ? N(
          null,
          Ve,
          m,
          Tn,
          _,
          E,
          w,
          O,
          R
        ) : Pe && (q < 0 || y !== Ht[q] ? pt(Ve, m, Tn, 2) : q--);
      }
    }
  }, pt = (u, f, m, A, _ = null) => {
    const { el: E, type: w, transition: O, children: R, shapeFlag: y } = u;
    if (y & 6) {
      pt(u.component.subTree, f, m, A);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, A);
      return;
    }
    if (y & 64) {
      w.move(u, f, m, Ut);
      return;
    }
    if (w === Ee) {
      r(E, f, m);
      for (let I = 0; I < R.length; I++)
        pt(R[I], f, m, A);
      r(u.anchor, f, m);
      return;
    }
    if (w === ns) {
      G(u, f, m);
      return;
    }
    if (A !== 2 && y & 1 && O)
      if (A === 0)
        O.persisted && !E[Qr] ? r(E, f, m) : (O.beforeEnter(E), r(E, f, m), je(() => O.enter(E), _));
      else {
        const { leave: I, delayLeave: k, afterLeave: V } = O, W = () => {
          u.ctx.isUnmounted ? s(E) : r(E, f, m);
        }, Y = () => {
          const q = E._isLeaving || !!E[Qr];
          E._isLeaving && E[Qr](
            !0
            /* cancelled */
          ), O.persisted && !q ? W() : I(E, () => {
            W(), V && V();
          });
        };
        k ? k(E, W, Y) : Y();
      }
    else
      r(E, f, m);
  }, Ge = (u, f, m, A = !1, _ = !1) => {
    const {
      type: E,
      props: w,
      ref: O,
      children: R,
      dynamicChildren: y,
      shapeFlag: $,
      patchFlag: I,
      dirs: k,
      cacheIndex: V,
      memo: W
    } = u;
    if (I === -2 && (_ = !1), O != null && (St(), Ln(O, null, m, u, !0), vt()), V != null && (f.renderCache[V] = void 0), $ & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const Y = $ & 1 && k, q = !Fn(u);
    let ue;
    if (q && (ue = w && w.onVnodeBeforeUnmount) && it(ue, f, u), $ & 6)
      Lr(u.component, m, A);
    else {
      if ($ & 128) {
        u.suspense.unmount(m, A);
        return;
      }
      Y && $t(u, null, f, "beforeUnmount"), $ & 64 ? u.type.remove(
        u,
        f,
        m,
        Ut,
        A
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Ee || I > 0 && I & 64) ? Ft(
        y,
        f,
        m,
        !1,
        !0
      ) : (E === Ee && I & 384 || !_ && $ & 16) && Ft(R, f, m), A && Gn(u);
    }
    const de = W != null && V == null;
    (q && (ue = w && w.onVnodeUnmounted) || Y || de) && je(() => {
      ue && it(ue, f, u), Y && $t(u, null, f, "unmounted"), de && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: A, transition: _ } = u;
    if (f === Ee) {
      oe(m, A);
      return;
    }
    if (f === ns) {
      M(u);
      return;
    }
    const E = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: O } = _, R = () => w(m, E);
      O ? O(u.el, E, R) : R();
    } else
      E();
  }, oe = (u, f) => {
    let m;
    for (; u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: A, scope: _, job: E, subTree: w, um: O, m: R, a: y } = u;
    Si(R), Si(y), A && cr(A), _.stop(), E && (E.flags |= 8, Ge(w, u, f, m)), O && je(O, f), je(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ft = (u, f, m, A = !1, _ = !1, E = 0) => {
    for (let w = E; w < u.length; w++)
      Ge(u[w], f, m, A, _);
  }, tn = (u) => {
    if (u.shapeFlag & 6)
      return tn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = x(u.anchor || u.el), m = f && f[Ca];
    return m ? x(m) : f;
  };
  let bn = !1;
  const qn = (u, f, m) => {
    let A;
    u == null ? f._vnode && (Ge(f._vnode, null, null, !0), A = f._vnode.component) : N(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, bn || (bn = !0, di(A), Mo(), bn = !1);
  }, Ut = {
    p: N,
    um: Ge,
    m: pt,
    r: Gn,
    mt: en,
    mc: Ke,
    pc: te,
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
function Vt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (z(r) && z(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = _t(s[i]), a.el = o.el), !n && a.patchFlag !== -2 && nl(o, a)), a.type === Nr && (a.patchFlag === -1 && (a = s[i] = _t(a)), a.el = o.el), a.type === xt && !a.el && (a.el = o.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const h = e[r];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        a = i + o >> 1, e[n[a]] < h ? i = a + 1 : o = a;
      h < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
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
function Si(e) {
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
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let We = null;
function J(e = !1) {
  Jt.push(We = e ? null : []);
}
function ol() {
  Jt.pop(), We = Jt[Jt.length - 1] || null;
}
let $n = 1;
function vi(e, t = !1) {
  $n += e, e < 0 && We && t && (We.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? We || dn : null, ol(), $n > 0 && We && We.push(e), e;
}
function Q(e, t, n, r, s, i) {
  return ll(
    v(
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
    Et(
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
function v(e, t = null, n = null, r = 0, s = null, i = e === Ee ? 0 : 1, o = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && fr(t),
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
    ctx: Ye
  };
  return a ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  We && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && We.push(c), c;
}
const Et = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = xt), al(e)) {
    const a = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(a, n), $n > 0 && !i && We && (a.shapeFlag & 6 ? We[We.indexOf(e)] = a : We.push(a)), a.patchFlag = -2, a;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: a, style: c } = t;
    a && !pe(a) && (t.class = Rs(a)), se(c) && (/* @__PURE__ */ Ls(c) && !z(c) && (c = Re({}, c)), t.style = Os(c));
  }
  const o = pe(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : se(e) ? 4 : K(e) ? 2 : 0;
  return v(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Re({}, e) : e : null;
}
function _n(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: a, transition: c } = e, h = t ? gc(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && cl(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? z(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
    ) : i,
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
    patchFlag: t && e.type !== Ee ? o === -1 ? 16 : o | 16 : o,
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
function ge(e = " ", t = 0) {
  return Et(Nr, null, e, t);
}
function zt(e = "", t = !1) {
  return t ? (J(), pc(xt, null, e)) : Et(xt, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? Et(xt) : z(e) ? Et(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? _t(e) : Et(Nr, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (z(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = Ye : s === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ye }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ge(t)]) : n = 8;
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
      else if (Sr(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(z(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function it(e, t, n, r = null) {
  tt(e, t, 7, [
    n,
    r
  ]);
}
const _c = Wo();
let bc = 0;
function yc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || _c, i = {
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
    propsOptions: Zo(r, s),
    emitsOptions: Ko(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
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
let Le = null;
const Tc = () => Le || Ye;
let yr, Vn;
{
  const e = Cr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
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
const Kn = (e) => {
  const t = Le;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, Ai = () => {
  Le && Le.scope.off(), yr(null);
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Ec(e, t = !1, n = !1) {
  t && Vn(t);
  const { props: r, children: s } = e.vnode, i = ul(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? Sc(e, t) : void 0;
  return t && Vn(!1), o;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    St();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = oo(o);
    if (vt(), i(), (a || e.sp) && !Fn(e) && jo(e), a) {
      if (o.then(Ai, Ai), t)
        return o.then((c) => {
          Vn(!0);
          try {
            xi(e, c, t);
          } finally {
            Vn(!1);
          }
        }).catch((c) => {
          Rr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      xi(e, o);
  } else
    fl(e);
}
function xi(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ct);
  {
    const s = Kn(e);
    St();
    try {
      Va(e);
    } finally {
      vt(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function Ac(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(da(e.exposed)), {
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
const Rt = (e, t) => /* @__PURE__ */ ma(e, t, zn), Cc = "3.5.42";
let Ss;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    Ss = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, wc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null, wi = gt && /* @__PURE__ */ gt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? gt.createElementNS(wc, e) : t === "mathml" ? gt.createElementNS(Oc, e) : n ? gt.createElement(e, { is: n }) : gt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => gt.createTextNode(e),
  createComment: (e) => gt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => gt.querySelector(e),
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
      wi.innerHTML = dl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = wi.content;
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
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ic = /* @__PURE__ */ Symbol("_vtc");
function Pc(e, t, n) {
  const r = e[Ic];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Nc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = pe(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (pe(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && In(r, a, "");
        }
      else
        for (const o in t)
          n[o] == null && In(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const a = n[o];
      a != null ? Uc(
        e,
        o,
        !pe(t) && t ? t[o] : void 0,
        a
      ) || In(r, o, a) : In(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Nc];
      o && (n += ";" + o), r.cssText = n, i = Mc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Dc] && (r.display = "none"));
}
const or = /\s*!important$/;
function In(e, t, n) {
  if (z(n))
    n.forEach((r) => In(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    or.test(n) ? e.setProperty(t, n.replace(or, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    or.test(n) ? e.setProperty(
      Qt(r),
      n.replace(or, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], rs = {};
function Fc(e, t) {
  const n = rs[t];
  if (n)
    return n;
  let r = Ze(t);
  if (r !== "filter" && r in e)
    return rs[t] = r;
  r = co(r);
  for (let s = 0; s < Ri.length; s++) {
    const i = Ri[s] + r;
    if (i in e)
      return rs[t] = i;
  }
  return t;
}
function Uc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && pe(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(n) ? String(n) : n
  );
}
function Di(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? dl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = fo(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Gt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Hc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ni = /* @__PURE__ */ Symbol("_vei");
function kc(e, t, n, r, s = null) {
  const i = e[Ni] || (e[Ni] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [a, c] = Vc(t);
    if (r) {
      const h = i[t] = Wc(
        r,
        s
      );
      Gt(e, a, h, c);
    } else o && (Hc(e, a, o, c), i[t] = void 0);
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
    if (z(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), a = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
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
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? vr(t) || kc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(r))) ? Di(e, Ze(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && pe(n) ? !1 : t in e;
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
  return z(t) ? (n) => cr(t, n) : t;
};
function Yc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[qt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    Gt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[qt](is(e.value, n, i));
    }), (n || i) && Gt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (Gt(e, "compositionstart", Yc), Gt(e, "compositionend", Li), Gt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[qt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[qt] = Tr(o), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (a === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, xn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Gt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Zt(e._modelValue) ? new Set(s) : s : s[0], a = e._pendingValue = [
        i,
        i ? z(o) ? s.slice() : s : o
      ];
      try {
        e[qt](o);
      } finally {
        Do(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[qt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[qt] = Tr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || z(e)) return Dt(e, t);
  if (Zt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = z(t);
  if (!(n && !r && !Zt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], a = Er(o);
      if (n)
        if (r) {
          const c = typeof a;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(a)) : o.selected = Wl(t, a) > -1;
        } else
          o.selected = t.has(a);
      else if (Dt(Er(o), t)) {
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
const Jc = /* @__PURE__ */ Re({ patchProp: Kc }, Rc);
let Hi;
function Zc() {
  return Hi || (Hi = ac(Jc));
}
const Qc = ((...e) => {
  const t = Zc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = tu(r);
    if (!s) return;
    const i = t._component;
    !K(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
    const i = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(r, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function ki(e, t) {
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
    var r, s, i, o, a = [], c = !0, h = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (d) {
      h = !0, s = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw s;
      }
    }
    return a;
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
    if (typeof e == "string") return ki(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Se = Object.freeze, Ae = Object.seal, fn = Object.create, hl = typeof Reflect < "u" && Reflect, vs = hl.apply, As = hl.construct;
Se || (Se = function(t) {
  return t;
});
Ae || (Ae = function(t) {
  return t;
});
vs || (vs = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
As || (As = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Kt = _e(Array.prototype.forEach), fu = _e(Array.prototype.lastIndexOf), $i = _e(Array.prototype.pop), Cn = _e(Array.prototype.push), du = _e(Array.prototype.splice), mn = Array.isArray, Pn = _e(String.prototype.toLowerCase), os = _e(String.prototype.toString), Vi = _e(String.prototype.match), wn = _e(String.prototype.replace), zi = _e(String.prototype.indexOf), pu = _e(String.prototype.trim), hu = _e(Number.prototype.toString), mu = _e(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : _e(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : _e(Symbol.prototype.toString), $e = _e(Object.prototype.hasOwnProperty), On = _e(Object.prototype.toString), we = _e(RegExp.prototype.test), Bt = gu(TypeError);
function _e(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return vs(e, t, r);
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
  if (ji && ji(e, null), !mn(t))
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
function _u(e) {
  for (let t = 0; t < e.length; t++)
    $e(e, t) || (e[t] = null);
  return e;
}
function Be(e) {
  const t = fn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    $e(e, s) && (mn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = Be(i) : t[s] = i);
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
      return Bi ? Bi(e) : "0";
    case "symbol":
      return Wi ? Wi(e) : "Symbol()";
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
    return we(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ki = Se(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Se(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Se(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Se(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Se(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Se(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Se(["#text"]), qi = Se(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Se(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yi = Se(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Se(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ae(/{{[\w\W]*|^[\w\W]*}}/g), vu = Ae(/<%[\w\W]*|^[\w\W]*%>/g), Au = Ae(/\${[\w\W]*/g), xu = Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cu = Ae(/^aria-[\-\w]+$/), Xi = Ae(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wu = Ae(/^(?:\w+script|data):/i), Ou = Ae(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ae(/^html$/i), Iu = Ae(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ae(/<[/\w!]/g), Zi = Ae(/<[/\w]/g), Pu = Ae(/<\/no(script|embed|frames)/i), Du = Ae(/\/>/i), ze = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Se(Z({}, ml)), Mu = (function() {
  const e = {};
  return Kt(ml, (t) => {
    e[t] = Ae(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Se(e);
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
}, Ot = function(t, n, r, s) {
  return $e(t, n) && mn(t[n]) ? Z(s.base ? Be(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = $e(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Be(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (C) => gl(C);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ze.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, g = e.trustedTypes, x = a.prototype, P = Je(x, "cloneNode"), j = Je(x, "remove"), N = Je(x, "nextSibling"), T = Je(x, "childNodes"), b = Je(x, "parentNode"), H = Je(x, "shadowRoot"), G = Je(x, "attributes"), M = o && o.prototype ? Je(o.prototype, "nodeType") : null, ee = o && o.prototype ? Je(o.prototype, "nodeName") : null, be = o && o.prototype ? Je(o.prototype, "ownerDocument") : null, me = function(l) {
    return M ? M(l) : l.nodeType;
  }, Ke = function(l) {
    return ee ? ee(l) : l.nodeName;
  };
  if (typeof i == "function") {
    const C = n.createElement("template");
    C.content && C.content.ownerDocument && (n = C.content.ownerDocument);
  }
  let ye, Ie = "", ft, Mt = !1, nt = 0;
  const en = function() {
    if (nt > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, dt = function(l) {
    en(), nt++;
    try {
      return ye.createHTML(l);
    } finally {
      nt--;
    }
  }, xe = function(l) {
    en(), nt++;
    try {
      return ye.createScriptURL(l);
    } finally {
      nt--;
    }
  }, ce = function() {
    return Mt || (ft = Fu(g, s), Mt = !0), ft;
  }, te = n, Xe = te.implementation, Lt = te.createNodeIterator, pt = te.createDocumentFragment, Ge = te.getElementsByTagName, Gn = r.importNode;
  let oe = Qi();
  t.isSupported = typeof pl == "function" && typeof b == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = Su, Ft = vu, tn = Au, bn = xu, qn = Cu, Ut = wu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const A = Z({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let _ = null;
  const E = Z({}, [...qi, ...us, ...Yi, ...ar]);
  let w = Object.seal(fn(null, {
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
  let $ = !0, I = !0, k = !1, V = !0, W = !1, Y = !0, q = !1, ue = !1, de = null, Pe = null, Ue = !1, qe = !1, Ht = !1, ve = !1, Ve = !0, yn = !1;
  const Tn = "user-content-";
  let Ur = !0, Hr = !1, nn = {}, rn = null;
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
  let sn = rt, kr = !1, jr = null;
  const bl = Z({}, [Yn, Xn, rt], os), Ks = Se(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = Z({}, Ks);
  const Gs = Se(["annotation-xml"]);
  let Vr = Z({}, Gs);
  const yl = Z({}, ["title", "style", "font", "a", "script"]);
  let En = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let he = null, on = null;
  const Sl = n.createElement("form"), qs = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, zr = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === l)
      return;
    (!l || typeof l != "object") && (l = {}), l = Be(l), En = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? El : l.PARSER_MEDIA_TYPE, he = En === "application/xhtml+xml" ? os : Pn, m = Ot(l, "ALLOWED_TAGS", A, {
      transform: he
    }), _ = Ot(l, "ALLOWED_ATTR", E, {
      transform: he
    }), jr = Ot(l, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Ot(l, "ADD_URI_SAFE_ATTR", Ws, {
      transform: he,
      base: Ws
    }), Vs = Ot(l, "ADD_DATA_URI_TAGS", zs, {
      transform: he,
      base: zs
    }), rn = Ot(l, "FORBID_CONTENTS", $s, {
      transform: he
    }), O = Ot(l, "FORBID_TAGS", Be({}), {
      transform: he
    }), R = Ot(l, "FORBID_ATTR", Be({}), {
      transform: he
    }), nn = $e(l, "USE_PROFILES") ? l.USE_PROFILES && typeof l.USE_PROFILES == "object" ? Be(l.USE_PROFILES) : l.USE_PROFILES : !1, $ = l.ALLOW_ARIA_ATTR !== !1, I = l.ALLOW_DATA_ATTR !== !1, k = l.ALLOW_UNKNOWN_PROTOCOLS || !1, V = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = l.SAFE_FOR_TEMPLATES || !1, Y = l.SAFE_FOR_XML !== !1, q = l.WHOLE_DOCUMENT || !1, qe = l.RETURN_DOM || !1, Ht = l.RETURN_DOM_FRAGMENT || !1, ve = l.RETURN_TRUSTED_TYPE || !1, Ue = l.FORCE_BODY || !1, Ve = l.SANITIZE_DOM !== !1, yn = l.SANITIZE_NAMED_PROPS || !1, Ur = l.KEEP_CONTENT !== !1, Hr = l.IN_PLACE || !1, f = yu(l.ALLOWED_URI_REGEXP) ? l.ALLOWED_URI_REGEXP : Xi, sn = typeof l.NAMESPACE == "string" ? l.NAMESPACE : rt, $r = fs(
      l,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Z({}, Ks)
      // Default built-in map
    ), Vr = fs(
      l,
      "HTML_INTEGRATION_POINTS",
      () => Z({}, Gs)
      // Default built-in map
    );
    const p = fs(l, "CUSTOM_ELEMENT_HANDLING", () => fn(null));
    if (w = fn(null), $e(p, "tagNameCheck") && qs(p.tagNameCheck) && (w.tagNameCheck = p.tagNameCheck), $e(p, "attributeNameCheck") && qs(p.attributeNameCheck) && (w.attributeNameCheck = p.attributeNameCheck), $e(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ae(w), W && (I = !1), Ht && (qe = !0), nn && (m = Z({}, Gi), _ = fn(null), nn.html === !0 && (Z(m, Ki), Z(_, qi)), nn.svg === !0 && (Z(m, ls), Z(_, us), Z(_, ar)), nn.svgFilters === !0 && (Z(m, as), Z(_, us), Z(_, ar)), nn.mathMl === !0 && (Z(m, cs), Z(_, Yi), Z(_, ar))), y.tagCheck = null, y.attributeCheck = null, $e(l, "ADD_TAGS") && (typeof l.ADD_TAGS == "function" ? y.tagCheck = l.ADD_TAGS : mn(l.ADD_TAGS) && (m === A && (m = Be(m)), Z(m, l.ADD_TAGS, he))), $e(l, "ADD_ATTR") && (typeof l.ADD_ATTR == "function" ? y.attributeCheck = l.ADD_ATTR : mn(l.ADD_ATTR) && (_ === E && (_ = Be(_)), Z(_, l.ADD_ATTR, he))), $e(l, "ADD_FORBID_CONTENTS") && mn(l.ADD_FORBID_CONTENTS) && (rn === $s && (rn = Be(rn)), Z(rn, l.ADD_FORBID_CONTENTS, he)), Ur && (m["#text"] = !0), q && Z(m, ["html", "head", "body"]), m.table && (Z(m, ["tbody"]), delete O.tbody), l.TRUSTED_TYPES_POLICY) {
      if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const S = ye;
      ye = l.TRUSTED_TYPES_POLICY;
      try {
        Ie = dt("");
      } catch (D) {
        throw ye = S, D;
      }
    } else l.TRUSTED_TYPES_POLICY === null ? (ye = void 0, Ie = "") : (ye === void 0 && (ye = ce()), ye && typeof Ie == "string" && (Ie = dt("")));
    Se && Se(l), on = l;
  }, Ys = Z({}, [...ls, ...as, ...Tu]), Xs = Z({}, [...cs, ...Eu]), vl = function(l, p, S) {
    return p.namespaceURI === rt ? l === "svg" : p.namespaceURI === Yn ? l === "svg" && (S === "annotation-xml" || $r[S]) : !!Ys[l];
  }, Al = function(l, p, S) {
    return p.namespaceURI === rt ? l === "math" : p.namespaceURI === Xn ? l === "math" && Vr[S] : !!Xs[l];
  }, xl = function(l, p, S) {
    return p.namespaceURI === Xn && !Vr[S] || p.namespaceURI === Yn && !$r[S] ? !1 : !Xs[l] && (yl[l] || !Ys[l]);
  }, Cl = function(l) {
    let p = b(l);
    (!p || !p.tagName) && (p = {
      namespaceURI: sn,
      tagName: "template"
    });
    const S = Pn(l.tagName), D = Pn(p.tagName);
    return jr[l.namespaceURI] ? l.namespaceURI === Xn ? vl(S, p, D) : l.namespaceURI === Yn ? Al(S, p, D) : l.namespaceURI === rt ? xl(S, p, D) : !!(En === "application/xhtml+xml" && jr[l.namespaceURI]) : !1;
  }, wt = function(l) {
    Cn(t.removed, {
      element: l
    });
    try {
      b(l).removeChild(l);
    } catch {
      if (j(l), !b(l))
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
    const p = T(l);
    if (p) {
      const D = [];
      Kt(p, (U) => {
        Cn(D, U);
      }), Kt(D, (U) => {
        try {
          j(U);
        } catch {
        }
      });
    }
    const S = G(l);
    if (S)
      for (let D = S.length - 1; D >= 0; --D) {
        const U = S[D], B = U && U.name;
        typeof B == "string" && Js(l, U, B);
      }
  }, kt = function(l, p, S) {
    if (!S)
      try {
        S = p.getAttributeNode(l);
      } catch {
        S = null;
      }
    Cn(t.removed, {
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
          wt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(l, "");
        } catch {
        }
  }, wl = function(l) {
    const p = G(l);
    if (p)
      for (let S = p.length - 1; S >= 0; --S) {
        const D = p[S], U = D && D.name;
        typeof U != "string" || _[he(U)] || Js(l, D, U);
      }
  }, Zn = function(l) {
    const p = [l];
    for (; p.length > 0; ) {
      const S = p.pop();
      me(S) === ze.element && wl(S);
      const U = T(S);
      if (U)
        for (let B = U.length - 1; B >= 0; --B)
          p.push(U[B]);
    }
  }, Zs = function(l, p) {
    return Y ? l === "patchsrc" ? !0 : l === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(l) {
    if (!Y)
      return;
    const p = [l];
    for (; p.length > 0; ) {
      const S = p.pop(), D = me(S);
      if (D === ze.processingInstruction || D === ze.comment && we(Zi, S.data)) {
        try {
          j(S);
        } catch {
        }
        continue;
      }
      if (D === ze.element) {
        const B = S, le = he(Ke(S));
        try {
          B.hasAttribute && B.hasAttribute("patchsrc") && B.removeAttribute("patchsrc"), B.hasAttribute && B.hasAttribute("for") && Zs("for", le) && B.removeAttribute("for");
        } catch {
        }
      }
      const U = T(S);
      if (U)
        for (let B = U.length - 1; B >= 0; --B)
          p.push(U[B]);
    }
  }, Qs = function(l) {
    let p = null, S = null;
    if (Ue)
      l = "<remove></remove>" + l;
    else {
      const B = Vi(l, /^[\r\n\t ]+/);
      S = B && B[0];
    }
    En === "application/xhtml+xml" && sn === rt && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const D = ye ? dt(l) : l;
    if (sn === rt)
      try {
        p = new d().parseFromString(D, En);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(sn, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Ie : D;
      } catch {
      }
    }
    const U = p.body || p.documentElement;
    return l && S && U.insertBefore(n.createTextNode(S), U.childNodes[0] || null), sn === rt ? Ge.call(p, q ? "html" : "body")[0] : q ? p.documentElement : U;
  }, ei = function(l) {
    const p = be ? be(l) : l.ownerDocument;
    return Lt.call(
      p || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(l) {
    return l = wn(l, Lr, " "), l = wn(l, Ft, " "), l = wn(l, tn, " "), l;
  }, Br = function(l) {
    var p;
    l.normalize();
    const S = be ? be(l) : l.ownerDocument, D = Lt.call(
      S || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let U = D.nextNode();
    for (; U; )
      U.data = Qn(U.data), U = D.nextNode();
    const B = (p = l.querySelectorAll) === null || p === void 0 ? void 0 : p.call(l, "template");
    B && Kt(B, (le) => {
      ln(le.content) && Br(le.content);
    });
  }, er = function(l) {
    const p = ee ? ee(l) : null;
    return typeof p != "string" || he(p) !== "form" ? !1 : typeof l.nodeName != "string" || typeof l.textContent != "string" || typeof l.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    l.attributes !== G(l) || typeof l.removeAttribute != "function" || typeof l.setAttribute != "function" || typeof l.namespaceURI != "string" || typeof l.insertBefore != "function" || typeof l.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    l.nodeType !== M(l) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    l.childNodes !== T(l);
  }, ln = function(l) {
    if (!M || typeof l != "object" || l === null)
      return !1;
    try {
      return M(l) === ze.documentFragment;
    } catch {
      return !1;
    }
  }, Sn = function(l) {
    if (!M || typeof l != "object" || l === null)
      return !1;
    try {
      return typeof M(l) == "number";
    } catch {
      return !1;
    }
  };
  function st(C, l, p) {
    C.length !== 0 && Kt(C, (S) => {
      S.call(t, l, p, on);
    });
  }
  const Rl = function(l, p) {
    return !!(Y && l.hasChildNodes() && !Sn(l.firstElementChild) && we(Ji, l.textContent) && we(Ji, l.innerHTML) || Y && l.namespaceURI === rt && Nu[p] && (Sn(l.firstElementChild) || typeof l.textContent == "string" && we(Mu[p], l.textContent)) || l.nodeType === ze.processingInstruction || Y && l.nodeType === ze.comment && we(Zi, l.data));
  }, tr = function(l, p) {
    if (l instanceof RegExp)
      return we(l, p);
    if (l instanceof Function) {
      for (var S = arguments.length, D = new Array(S > 2 ? S - 2 : 0), U = 2; U < S; U++)
        D[U - 2] = arguments[U];
      return !!l(p, ...D);
    }
    return !1;
  }, Il = function(l, p, S) {
    if (!O[p] && ii(p) && tr(w.tagNameCheck, p))
      return !1;
    if (Ur && !rn[p]) {
      const D = b(l), U = T(l);
      if (U && D) {
        const B = U.length;
        for (let le = B - 1; le >= 0; --le) {
          const fe = l === S ? P(U[le], !0) : U[le];
          D.insertBefore(fe, N(l));
        }
      }
    }
    return wt(l), !0;
  }, ti = function(l, p, S, D) {
    return l.length === 0 ? p : p === S || p === D ? Be(p) : p;
  }, ni = function(l, p) {
    return l === p || b(l) !== null ? !1 : (Hr && Zn(l), !0);
  }, ri = function(l, p) {
    if (st(oe.beforeSanitizeElements, l, null), ni(l, p))
      return !0;
    if (er(l))
      return wt(l), !0;
    const S = he(Ke(l));
    if (m = ti(oe.uponSanitizeElement, m, A, de), st(oe.uponSanitizeElement, l, {
      tagName: S,
      allowedTags: m
    }), ni(l, p))
      return !0;
    if (Rl(l, S))
      return wt(l), !0;
    if (O[S] || !(y.tagCheck instanceof Function && y.tagCheck(S)) && !m[S]) {
      const U = Il(l, S, p);
      return U === !1 && st(oe.afterSanitizeElements, l, null), U;
    }
    if (me(l) === ze.element && !Cl(l) || (S === "noscript" || S === "noembed" || S === "noframes") && we(Pu, l.innerHTML))
      return wt(l), !0;
    if (W && l.nodeType === ze.text) {
      const U = Qn(l.textContent);
      l.textContent !== U && (Cn(t.removed, {
        element: l.cloneNode()
      }), l.textContent = U);
    }
    return st(oe.afterSanitizeElements, l, null), !1;
  }, si = function(l, p, S) {
    if (R[p] || Zs(p, l) || Ve && (p === "id" || p === "name") && (S in n || S in Sl))
      return !1;
    const D = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, l);
    return I && we(bn, p) || $ && we(qn, p) ? !0 : D ? Bs[p] || we(f, wn(S, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && l !== "script" && zi(S, "data:") === 0 && Vs[l] || k && !we(Ut, wn(S, Fr, "")) ? !0 : !S : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(l) && tr(w.tagNameCheck, l) && tr(w.attributeNameCheck, p, l) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && w.allowCustomizedBuiltInElements && tr(w.tagNameCheck, S)
    );
  }, Pl = Z({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(l) {
    return !Pl[Pn(l)] && we(u, l);
  }, Dl = function(l, p, S, D) {
    if (ye && typeof g == "object" && typeof g.getAttributeType == "function" && !S)
      switch (g.getAttributeType(l, p)) {
        case "TrustedHTML":
          return dt(D);
        case "TrustedScriptURL":
          return xe(D);
      }
    return D;
  }, Nl = function(l, p, S, D) {
    try {
      S ? l.setAttributeNS(S, p, D) : l.setAttribute(p, D), er(l) ? wt(l) : $i(t.removed);
    } catch {
      kt(p, l);
    }
  }, oi = function(l) {
    st(oe.beforeSanitizeAttributes, l, null);
    const p = l.attributes;
    if (!p || er(l))
      return;
    _ = ti(oe.uponSanitizeAttribute, _, E, Pe);
    const S = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let D = p.length;
    const U = he(l.nodeName);
    for (; D--; ) {
      const B = p[D], le = B.name, fe = B.namespaceURI, He = B.value, ke = he(le), Kr = He;
      let De = le === "value" ? Kr : pu(Kr);
      if (S.attrName = ke, S.attrValue = De, S.keepAttr = !0, S.forceKeepAttr = void 0, st(oe.uponSanitizeAttribute, l, S), De = S.attrValue, yn && (ke === "id" || ke === "name") && zi(De, Tn) !== 0 && (kt(le, l, B), De = Tn + De), Y && we(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, De)) {
        kt(le, l, B);
        continue;
      }
      if (ke === "attributename" && Vi(De, "href")) {
        kt(le, l, B);
        continue;
      }
      if (!S.forceKeepAttr) {
        if (!S.keepAttr) {
          kt(le, l, B);
          continue;
        }
        if (!V && we(Du, De)) {
          kt(le, l, B);
          continue;
        }
        if (W && (De = Qn(De)), !si(U, ke, De)) {
          kt(le, l, B);
          continue;
        }
        De = Dl(U, ke, fe, De), De !== Kr && Nl(l, le, fe, De);
      }
    }
    st(oe.afterSanitizeAttributes, l, null);
  }, nr = function(l) {
    let p = null;
    const S = ei(l);
    for (st(oe.beforeSanitizeShadowDOM, l, null); p = S.nextNode(); )
      if (st(oe.uponSanitizeShadowNode, p, null), ri(p, l), oi(p), ln(p.content) && nr(p.content), me(p) === ze.element) {
        const D = H(p);
        ln(D) && (Wr(D), nr(D));
      }
    st(oe.afterSanitizeShadowDOM, l, null);
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
      const D = S.node, B = me(D) === ze.element, le = T(D);
      if (le)
        for (let fe = le.length - 1; fe >= 0; --fe)
          p.push({
            node: le[fe],
            shadow: null
          });
      if (B) {
        const fe = ee ? ee(D) : null;
        if (typeof fe == "string" && he(fe) === "template") {
          const He = D.content;
          ln(He) && p.push({
            node: He,
            shadow: null
          });
        }
      }
      if (B) {
        const fe = H(D);
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
  return t.sanitize = function(C) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, S = null, D = null, U = null;
    if (kr = !C, kr && (C = "<!-->"), typeof C != "string" && !Sn(C) && (C = bu(C), typeof C != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return C;
    ue ? (m = de, _ = Pe) : zr(l), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (m = Be(m)), oe.uponSanitizeAttribute.length > 0 && (_ = Be(_)), t.removed = [];
    const B = Hr && typeof C != "string" && Sn(C);
    if (B) {
      Ol(C);
      const He = Ke(C);
      if (typeof He == "string") {
        const ke = he(He);
        if (!m[ke] || O[ke])
          throw Jn(C), Bt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(C))
        throw Jn(C), Bt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(C);
      } catch (ke) {
        throw Jn(C), ke;
      }
    } else if (Sn(C))
      p = Qs("<!---->"), S = p.ownerDocument.importNode(C, !0), S.nodeType === ze.element && S.nodeName === "BODY" || S.nodeName === "HTML" ? p = S : p.appendChild(S), Wr(S);
    else {
      if (!qe && !W && !q && // eslint-disable-next-line unicorn/prefer-includes
      C.indexOf("<") === -1)
        return ye && ve ? dt(C) : C;
      if (p = Qs(C), !p)
        return qe ? null : ve ? Ie : "";
    }
    p && Ue && wt(p.firstChild);
    const le = B ? C : p;
    try {
      const He = ei(le);
      for (; D = He.nextNode(); )
        ri(D, le), oi(D), ln(D.content) && nr(D.content);
    } catch (He) {
      throw B && (Jn(C), Kt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      })), He;
    }
    if (B)
      return Kt(t.removed, (He) => {
        He.element && Zn(He.element);
      }), W && Br(C), C;
    if (qe) {
      if (W && Br(p), Ht)
        for (U = pt.call(p.ownerDocument); p.firstChild; )
          U.appendChild(p.firstChild);
      else
        U = p;
      return (_.shadowroot || _.shadowrootmode) && (U = Gn.call(r, U, !0)), U;
    }
    let fe = q ? p.outerHTML : p.innerHTML;
    return q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && we(Ru, p.ownerDocument.doctype.name) && (fe = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + fe), W && (fe = Qn(fe)), ye && ve ? dt(fe) : fe;
  }, t.setConfig = function() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(C), ue = !0, de = m, Pe = _;
  }, t.clearConfig = function() {
    on = null, ue = !1, de = null, Pe = null, ye = ft, Ie = "";
  }, t.isValidAttribute = function(C, l, p) {
    on || zr({});
    const S = he(C), D = he(l);
    return si(S, D, p);
  }, t.addHook = function(C, l) {
    typeof l == "function" && $e(oe, C) && Cn(oe[C], l);
  }, t.removeHook = function(C, l) {
    if ($e(oe, C)) {
      if (l !== void 0) {
        const p = fu(oe[C], l);
        return p === -1 ? void 0 : du(oe[C], p, 1)[0];
      }
      return $i(oe[C]);
    }
  }, t.removeHooks = function(C) {
    $e(oe, C) && (oe[C] = []);
  }, t.removeAllHooks = function() {
    oe = Qi();
  }, t;
}
var Uu = gl();
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, eo;
function ku() {
  if (eo) return ds;
  eo = 1;
  var e = /["'&<>]/;
  ds = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var i, o = "", a = 0, c = 0;
    for (a = s.index; a < r.length; a++) {
      switch (r.charCodeAt(a)) {
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
      c !== a && (o += r.substring(c, a)), c = a + 1, o += i;
    }
    return c !== a ? o + r.substring(c, a) : o;
  }
  return ds;
}
var ju = ku();
const to = /* @__PURE__ */ Hu(ju);
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
function L(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, a = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (N) => N, h = (a.sanitize ? Uu.sanitize : c) || c, d = a.escape ? to : c, g = (N) => typeof N == "string" || typeof N == "number", x = (N, T, b) => N.replace(/%n/g, "" + b).replace(/{([^{}]*)}/g, (H, G) => {
    if (T === void 0 || !(G in T))
      return d(H);
    const M = T[G];
    return g(M) ? d(`${M}`) : typeof M == "object" && g(M.value) ? (M.escape !== !1 ? to : c)(`${M.value}`) : d(H);
  });
  let j = (s?.bundle ?? $u(e)).translations[t] || t;
  return j = Array.isArray(j) ? j[0] : j, h(typeof i == "object" || o !== void 0 ? x(
    j,
    i,
    o
  ) : j);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, qu = ["value"], Yu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "title" }, nf = { value: "recent" }, rf = { value: "publicationDate" }, sf = { value: "format" }, of = ["value"], lf = ["value"], af = ["aria-label"], cf = ["aria-label"], uf = ["aria-label"], ff = ["href"], df = {
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
}, Sf = { class: "library-muted" }, vf = { key: 0 }, Af = { key: 1 }, xf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, Cf = { key: 0 }, wf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Of = {
  key: 0,
  class: "library-muted"
}, Rf = ["href"], If = ["href"], Pf = ["href"], Df = { class: "library-item-metadata" }, Nf = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, Mf = {
  key: 0,
  class: "library-muted"
}, Lf = { class: "library-comment-list" }, Ff = { class: "library-muted" }, Uf = ["action"], Hf = ["value"], kf = ["action"], jf = ["value"], $f = ["value"], Vf = ["value"], zf = ["value"], Bf = ["value"], Wf = ["value"], Kf = ["value"], Gf = ["value"], qf = ["value"], Yf = ["value"], Xf = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Jf = { class: "library-hero-actions" }, Zf = ["href"], Qf = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Rt(() => t.state.items || []), i = Rt(() => t.state.shelves || []), o = Rt(() => t.state.formats || []), a = Rt(() => t.state.scanStatuses || []), c = Rt(() => t.state.cataloguePagination || {
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
    }), d = Rt(() => t.state.settingsUrl || ""), g = Rt(() => t.state.requestToken || "");
    function x(N) {
      return String(N || "").toUpperCase();
    }
    function P(N) {
      return N.nextcloudTags || [];
    }
    function j(N) {
      return N.nextcloudComments || { count: 0, recent: [] };
    }
    return (N, T) => (J(), Q("div", Vu, [
      v("section", zu, [
        v("h2", Bu, F(X(L)("library", "Publication catalogue")), 1),
        v("p", Wu, F(X(L)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        v("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": X(L)("library", "Catalogue search and filters")
        }, [
          v("label", null, [
            ge(F(X(L)("library", "Search title / author")) + " ", 1),
            jt(v("input", {
              "onUpdate:modelValue": T[0] || (T[0] = (b) => h.q = b),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, h.q]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Type")) + " ", 1),
            jt(v("select", {
              "onUpdate:modelValue": T[1] || (T[1] = (b) => h.type = b),
              name: "type"
            }, [
              v("option", Gu, F(X(L)("library", "All types")), 1),
              (J(), Q(Ee, null, mt(n, (b) => v("option", {
                key: b,
                value: b
              }, F(b), 9, qu)), 64))
            ], 512), [
              [xn, h.type]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Nextcloud tag")) + " ", 1),
            jt(v("input", {
              "onUpdate:modelValue": T[2] || (T[2] = (b) => h.tag = b),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, h.tag]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Format")) + " ", 1),
            jt(v("select", {
              "onUpdate:modelValue": T[3] || (T[3] = (b) => h.format = b),
              name: "format"
            }, [
              v("option", Yu, F(X(L)("library", "All formats")), 1),
              (J(!0), Q(Ee, null, mt(o.value, (b) => (J(), Q("option", {
                key: b,
                value: b
              }, F(x(b)), 9, Xu))), 128))
            ], 512), [
              [xn, h.format]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Shelf")) + " ", 1),
            jt(v("select", {
              "onUpdate:modelValue": T[4] || (T[4] = (b) => h.shelf = b),
              name: "shelf"
            }, [
              v("option", Ju, F(X(L)("library", "All shelves")), 1),
              (J(!0), Q(Ee, null, mt(i.value, (b) => (J(), Q("option", {
                key: b,
                value: b
              }, F(b), 9, Zu))), 128))
            ], 512), [
              [xn, h.shelf]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Scan status")) + " ", 1),
            jt(v("select", {
              "onUpdate:modelValue": T[5] || (T[5] = (b) => h.status = b),
              name: "status"
            }, [
              v("option", Qu, F(X(L)("library", "All scan statuses")), 1),
              (J(!0), Q(Ee, null, mt(a.value, (b) => (J(), Q("option", {
                key: b,
                value: b
              }, F(b), 9, ef))), 128))
            ], 512), [
              [xn, h.status]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Sort")) + " ", 1),
            jt(v("select", {
              "onUpdate:modelValue": T[6] || (T[6] = (b) => h.sort = b),
              name: "sort"
            }, [
              v("option", tf, F(X(L)("library", "Title")), 1),
              v("option", nf, F(X(L)("library", "Recently added")), 1),
              v("option", rf, F(X(L)("library", "Publication date")), 1),
              v("option", sf, F(X(L)("library", "Format")), 1)
            ], 512), [
              [xn, h.sort]
            ])
          ]),
          v("label", null, [
            ge(F(X(L)("library", "Page size")) + " ", 1),
            v("select", {
              value: c.value.limit,
              name: "limit"
            }, [
              (J(), Q(Ee, null, mt(r, (b) => v("option", {
                key: b,
                value: b
              }, F(b), 9, lf)), 64))
            ], 8, of)
          ]),
          v("button", {
            type: "submit",
            class: "button primary",
            "aria-label": X(L)("library", "Apply catalogue filters")
          }, F(X(L)("library", "Apply filters")), 9, af),
          v("a", {
            href: "?",
            class: "button secondary",
            "aria-label": X(L)("library", "Clear catalogue filters")
          }, F(X(L)("library", "Clear")), 9, cf)
        ], 8, Ku),
        v("nav", {
          class: "library-pagination",
          "aria-label": X(L)("library", "Catalogue pagination")
        }, [
          v("span", null, "Showing " + F(c.value.from) + "–" + F(c.value.to) + " of " + F(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? (J(), Q("a", {
            key: 0,
            href: c.value.previousUrl
          }, F(X(L)("library", "Previous")), 9, ff)) : (J(), Q("span", df, F(X(L)("library", "Previous")), 1)),
          c.value.nextUrl ? (J(), Q("a", {
            key: 2,
            href: c.value.nextUrl
          }, F(X(L)("library", "Next")), 9, pf)) : (J(), Q("span", hf, F(X(L)("library", "Next")), 1))
        ], 8, uf),
        s.value.length === 0 ? (J(), Q("div", mf, [
          v("h3", null, F(X(L)("library", "No catalogue items match")), 1),
          v("p", gf, F(X(L)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (J(), Q("div", _f, [
          (J(!0), Q(Ee, null, mt(s.value, (b) => (J(), Q("article", {
            key: b.id,
            class: "library-cover-card"
          }, [
            v("a", {
              class: "library-cover-link",
              href: b.openUrl,
              "aria-label": `Read ${b.title}`
            }, [
              v("img", {
                class: "library-cover-image",
                src: b.coverUrl,
                alt: `Cover for ${b.title}`,
                loading: "lazy"
              }, null, 8, yf)
            ], 8, bf),
            v("div", Tf, [
              v("h3", null, F(b.title), 1),
              b.creators ? (J(), Q("p", Ef, F(b.creators), 1)) : zt("", !0),
              v("p", Sf, [
                v("span", null, F(b.publicationType), 1),
                b.extension ? (J(), Q("span", vf, " · Format: " + F(x(b.extension)), 1)) : zt("", !0),
                b.shelf ? (J(), Q("span", Af, " · Shelf: " + F(b.shelf), 1)) : zt("", !0)
              ]),
              b.scanStatus !== "indexed" || b.scanError ? (J(), Q("p", xf, [
                ge(" scanStatus: " + F(b.scanStatus || "unknown"), 1),
                b.scanError ? (J(), Q("span", Cf, " · scanError: " + F(b.scanError), 1)) : zt("", !0)
              ])) : zt("", !0),
              v("div", wf, [
                P(b).length === 0 ? (J(), Q("span", Of, "No Nextcloud tags")) : (J(!0), Q(Ee, { key: 1 }, mt(P(b), (H) => (J(), Q("span", {
                  key: H.id,
                  class: "library-tag"
                }, F(H.name), 1))), 128))
              ]),
              v("p", null, [
                v("a", {
                  href: b.openUrl
                }, F(X(L)("library", "Read")), 9, Rf),
                T[7] || (T[7] = ge(" · ", -1)),
                v("a", {
                  href: b.filesUrl
                }, F(X(L)("library", "Show in Files")), 9, If),
                T[8] || (T[8] = ge(" · ", -1)),
                v("a", {
                  href: b.detailsUrl
                }, F(X(L)("library", "Details")), 9, Pf)
              ])
            ]),
            v("details", null, [
              T[29] || (T[29] = v("summary", null, "Details / edit metadata", -1)),
              v("dl", Df, [
                T[9] || (T[9] = v("dt", null, "publicationType", -1)),
                v("dd", null, F(b.publicationType), 1),
                T[10] || (T[10] = v("dt", null, "metadataSource", -1)),
                v("dd", null, F(b.metadataSource), 1),
                T[11] || (T[11] = v("dt", null, "userEdited", -1)),
                v("dd", null, F(b.userEdited ? "yes" : "no"), 1),
                T[12] || (T[12] = v("dt", null, "path", -1)),
                v("dd", null, F(b.cachedPath), 1),
                T[13] || (T[13] = v("dt", null, "publication", -1)),
                v("dd", null, F(b.publication || "—"), 1),
                T[14] || (T[14] = v("dt", null, "date", -1)),
                v("dd", null, F(b.publicationDate || "—"), 1),
                T[15] || (T[15] = v("dt", null, "language", -1)),
                v("dd", null, F(b.language || "—"), 1),
                T[16] || (T[16] = v("dt", null, "publisher", -1)),
                v("dd", null, F(b.publisher || "—"), 1)
              ]),
              v("div", Nf, [
                T[19] || (T[19] = v("strong", null, "Nextcloud comments", -1)),
                T[20] || (T[20] = ge()),
                T[21] || (T[21] = v("span", { class: "library-muted" }, "(file-level notes)", -1)),
                T[22] || (T[22] = ge(": ", -1)),
                j(b).count === 0 ? (J(), Q("span", Mf, "No Nextcloud comments")) : (J(), Q(Ee, { key: 1 }, [
                  v("span", null, F(j(b).count) + " total", 1),
                  v("ul", Lf, [
                    (J(!0), Q(Ee, null, mt(j(b).recent, (H) => (J(), Q("li", {
                      key: `${H.actorId}-${H.createdAt}-${H.message}`
                    }, [
                      v("span", Ff, F(H.actorId) + " · " + F(H.createdAt), 1),
                      v("span", null, F(H.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                v("form", {
                  method: "post",
                  action: b.commentUrl,
                  class: "library-comment-form"
                }, [
                  g.value ? (J(), Q("input", {
                    key: 0,
                    type: "hidden",
                    name: "requesttoken",
                    value: g.value
                  }, null, 8, Hf)) : zt("", !0),
                  T[17] || (T[17] = v("label", null, [
                    ge(" Add Nextcloud comment "),
                    v("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1)),
                  T[18] || (T[18] = v("button", { type: "submit" }, "Add comment", -1))
                ], 8, Uf)
              ]),
              v("form", {
                method: "post",
                action: b.updateUrl,
                class: "library-item-form"
              }, [
                g.value ? (J(), Q("input", {
                  key: 0,
                  type: "hidden",
                  name: "requesttoken",
                  value: g.value
                }, null, 8, jf)) : zt("", !0),
                v("label", null, [
                  T[23] || (T[23] = ge(" Title ", -1)),
                  v("input", {
                    type: "text",
                    name: "title",
                    value: b.title
                  }, null, 8, $f)
                ]),
                v("label", null, [
                  T[24] || (T[24] = ge(" Type ", -1)),
                  v("select", {
                    name: "publicationType",
                    value: b.publicationType
                  }, [
                    (J(), Q(Ee, null, mt(n, (H) => v("option", {
                      key: H,
                      value: H
                    }, F(H), 9, zf)), 64))
                  ], 8, Vf)
                ]),
                v("label", null, [
                  T[25] || (T[25] = ge(" Creators ", -1)),
                  v("input", {
                    type: "text",
                    name: "creators",
                    value: b.creators
                  }, null, 8, Bf)
                ]),
                v("label", null, [
                  T[26] || (T[26] = ge(" Publication ", -1)),
                  v("input", {
                    type: "text",
                    name: "publication",
                    value: b.publication
                  }, null, 8, Wf)
                ]),
                v("label", null, [
                  T[27] || (T[27] = ge(" Date ", -1)),
                  v("input", {
                    type: "text",
                    name: "publicationDate",
                    value: b.publicationDate
                  }, null, 8, Kf)
                ]),
                v("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: b.subtitle
                }, null, 8, Gf),
                v("input", {
                  type: "hidden",
                  name: "language",
                  value: b.language
                }, null, 8, qf),
                v("input", {
                  type: "hidden",
                  name: "publisher",
                  value: b.publisher
                }, null, 8, Yf),
                T[28] || (T[28] = v("button", { type: "submit" }, "Save metadata", -1))
              ], 8, kf)
            ])
          ]))), 128))
        ]))
      ]),
      v("section", Xf, [
        T[30] || (T[30] = v("div", null, [
          v("h2", null, "Library"),
          v("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        v("div", Jf, [
          v("a", {
            href: d.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Zf)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function Te(e) {
  return String(e ?? "");
}
function _l(e) {
  return Te(e).toUpperCase();
}
function ed(e, t, n, r = Te) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = Te(s), i.textContent = r(s), Te(s) === Te(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = Te(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function cn(e, t, n, r, s, i, o = Te) {
  const a = document.createElement("label");
  a.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), ed(c, i, r, o), a.appendChild(c), e.appendChild(a);
}
function td(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", L("library", "Catalogue search and filters")), so(r, L("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), cn(r, L("library", "Type"), "type", n.type, L("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, L("library", "Nextcloud tag"), "tag", n.tag, "photography"), cn(r, L("library", "Format"), "format", n.format, L("library", "All formats"), e.formats || [], _l), cn(r, L("library", "Shelf"), "shelf", n.shelf, L("library", "All shelves"), e.shelves || []), cn(r, L("library", "Scan status"), "status", n.status, L("library", "All scan statuses"), e.scanStatuses || []), cn(r, L("library", "Sort"), "sort", n.sort || "title", L("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), cn(r, L("library", "Page size"), "limit", t.limit || 100, L("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", L("library", "Apply catalogue filters")), s.textContent = L("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", L("library", "Clear catalogue filters")), i.textContent = L("library", "Clear"), r.append(s, i), r;
}
function nd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Te(e.settingsUrl || ""), i = document.createElement("div");
  i.className = "library-vue-catalogue library-vue-fallback", i.dataset.vueFallback = "true";
  const o = document.createElement("section");
  o.className = "library-panel", o.setAttribute("aria-labelledby", "library-catalogue-heading");
  const a = document.createElement("h2");
  a.id = "library-catalogue-heading", a.textContent = L("library", "Publication catalogue"), o.appendChild(a);
  const c = document.createElement("p");
  c.className = "library-muted", c.textContent = L("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), o.appendChild(c), o.appendChild(td(e, r));
  const h = document.createElement("nav");
  h.className = "library-pagination", h.setAttribute("aria-label", L("library", "Catalogue pagination"));
  const d = document.createElement("span");
  if (d.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, h.appendChild(d), o.appendChild(h), n.length === 0) {
    const g = document.createElement("div");
    g.className = "library-empty-content", g.setAttribute("role", "status");
    const x = document.createElement("h3");
    x.textContent = L("library", "No catalogue items match");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = L("library", "Scan enabled roots or clear the active filters."), g.append(x, P), o.appendChild(g);
  } else {
    const g = document.createElement("div");
    g.className = "library-cover-gallery";
    for (const x of n) {
      const P = document.createElement("article");
      P.className = "library-cover-card";
      const j = document.createElement("a");
      j.className = "library-cover-link", j.href = Te(x.openUrl || "#"), j.setAttribute("aria-label", `Read ${Te(x.title || "publication")}`);
      const N = document.createElement("img");
      N.className = "library-cover-image", N.src = Te(x.coverUrl || ""), N.alt = `Cover for ${Te(x.title || "publication")}`, N.loading = "lazy", j.appendChild(N);
      const T = document.createElement("div");
      T.className = "library-cover-summary";
      const b = document.createElement("h3");
      if (b.textContent = Te(x.title || "Untitled publication"), T.appendChild(b), x.creators) {
        const me = document.createElement("p");
        me.className = "library-creator", me.textContent = Te(x.creators), T.appendChild(me);
      }
      const H = document.createElement("p");
      H.className = "library-muted", H.textContent = [
        Te(x.publicationType || "other"),
        x.extension ? `Format: ${_l(x.extension)}` : "",
        x.shelf ? `Shelf: ${Te(x.shelf)}` : ""
      ].filter(Boolean).join(" · "), T.appendChild(H);
      const G = document.createElement("p"), M = document.createElement("a");
      M.href = Te(x.openUrl || "#"), M.textContent = L("library", "Read");
      const ee = document.createElement("a");
      ee.href = Te(x.filesUrl || "#"), ee.textContent = L("library", "Show in Files");
      const be = document.createElement("a");
      be.href = Te(x.detailsUrl || "#"), be.textContent = L("library", "Details"), G.append(M, document.createTextNode(" · "), ee, document.createTextNode(" · "), be), T.appendChild(G), P.append(j, T), g.appendChild(P);
    }
    o.appendChild(g);
  }
  if (i.appendChild(o), s) {
    const g = document.createElement("section");
    g.className = "library-hero library-secondary-panel", g.setAttribute("aria-label", "Library settings");
    const x = document.createElement("div"), P = document.createElement("h2");
    P.textContent = "Library";
    const j = document.createElement("p");
    j.className = "library-lede", j.textContent = "Browse publications already stored in Nextcloud.", x.append(P, j);
    const N = document.createElement("div");
    N.className = "library-hero-actions";
    const T = document.createElement("a");
    T.href = s, T.className = "button secondary", T.setAttribute("aria-label", "Open Library settings"), T.textContent = "Library settings", N.appendChild(T), g.append(x, N), i.appendChild(g);
  }
  return i;
}
if (dr)
  try {
    Qc(Qf, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(nd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
