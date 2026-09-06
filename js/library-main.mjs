// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, pn = [], ct = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Re = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), V = Array.isArray, Nt = (e) => Bn(e) === "[object Map]", Zt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", K = (e) => typeof e == "function", he = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", oo = (e) => (se(e) || K(e)) && K(e.then) && K(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, Ze = vr(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, Qt = vr(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = vr(
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
const wr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Os(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = he(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (he(e) || se(e))
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
  if (he(e))
    t = e;
  else if (V(e))
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
    n = Mt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Mt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Mt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ut(e), r = ut(t), n || r)
    return e === t;
  if (n = V(e), r = V(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = se(e), r = se(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Nt(e), r = Nt(t), n || r || (n = Zt(e), r = Zt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Mt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Mt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), j = (e) => he(e) ? e : e == null ? "" : V(e) || se(e) && (e.toString === lo || !K(e.toString)) ? po(e) ? j(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Zt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : ut(t) ? Yr(t) : se(t) && !V(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ve;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ve && (ve.active ? (this.parent = ve, this.index = (ve.scopes || (ve.scopes = [])).push(
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
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ve === this)
        ve = this.prevScope;
      else {
        let t = ve;
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
  return ve;
}
let ae;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && (ve.active ? ve.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qr.has(this) && (qr.delete(this), this.trigger()));
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
    this.flags & 64 ? qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
    r.version === -1 ? (r === n && (n = s), Ds(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const Eo = [];
function St() {
  Eo.push(Qe), Qe = !1;
}
function At() {
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
class ql {
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
      n = this.activeLink = new ql(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, Ao(n);
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
const hs = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ Symbol(
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
  const l = (c) => {
    c && c.trigger();
  };
  if (Is(), t === "clear")
    o.forEach(l);
  else {
    const c = V(e), h = c && Cs(n);
    if (c && n === "length") {
      const f = Number(r);
      o.forEach((b, v) => {
        (v === "length" || v === kn || !ut(v) && v >= f) && l(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(kn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(qt)), Nt(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(qt)), Nt(e) && l(o.get(ms)));
          break;
        case "set":
          Nt(e) && l(o.get(qt));
          break;
      }
  }
  Ps();
}
function an(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Oe(t, "iterate", kn), /* @__PURE__ */ et(e) ? t : t.map(vt));
}
function Cr(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", kn), e;
}
function lt(e, t) {
  return /* @__PURE__ */ Lt(e) ? _n(/* @__PURE__ */ Xt(e) ? vt(t) : t) : vt(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => lt(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => V(t) ? an(t) : t)
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
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ et(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function ht(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ et(e), c = o[t];
  if (c !== Jl[t]) {
    const b = c.apply(e, i);
    return l ? vt(b) : b;
  }
  let h = n;
  o !== e && (l ? h = function(b, v) {
    return n.call(this, lt(e, b), v, e);
  } : n.length > 2 && (h = function(b, v) {
    return n.call(this, b, v, e);
  }));
  const f = c.call(o, h, r);
  return l && s ? s(f) : f;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ et(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, f, b) {
    return l && (l = !1, h = lt(e, h)), n.call(this, h, lt(e, f), b, e);
  }) : n.length > 3 && (o = function(h, f, b) {
    return n.call(this, h, f, b, e);
  }));
  const c = s[t](o, ...r);
  return l ? lt(e, c) : c;
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
  return Ps(), At(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), vo = new Set(
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
      return r === (s ? i ? ca : Ro : i ? Oo : Co).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = V(t);
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
      /* @__PURE__ */ Fe(t) ? t : r
    );
    if ((ut(n) ? vo.has(n) : Zl(n)) || (s || Oe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Fe(l)) {
      const c = o && Cs(n) ? l : l.value;
      return s && se(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return se(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Or(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = V(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Lt(i);
      if (!/* @__PURE__ */ et(r) && !/* @__PURE__ */ Lt(r) && (i = /* @__PURE__ */ re(i), r = /* @__PURE__ */ re(r)), !o && /* @__PURE__ */ Fe(i) && !/* @__PURE__ */ Fe(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ne(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Fe(t) ? t : s
    );
    return t === /* @__PURE__ */ re(s) && c && (l ? bt(r, i) && yt(t, "set", n, r) : yt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && yt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ut(n) || !vo.has(n)) && Oe(t, "has", n), r;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      V(t) ? "length" : qt
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
const gs = (e) => e, rr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ re(s), o = Nt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), f = n ? gs : t ? _n : vt;
    return !t && Oe(
      i,
      "iterate",
      c ? ms : qt
    ), Re(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: v } = h.next();
          return v ? { value: b, done: v } : {
            value: l ? [f(b[0]), f(b[1])] : f(b),
            done: v
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
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), l = /* @__PURE__ */ re(s);
      e || (bt(s, l) && Oe(o, "get", s), Oe(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : vt;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ re(s), "iterate", qt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), l = /* @__PURE__ */ re(s);
      return e || (bt(s, l) && Oe(o, "has", s), Oe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ re(l), h = t ? gs : e ? _n : vt;
      return !e && Oe(c, "iterate", qt), l.forEach((f, b) => s.call(i, h(f), h(b), o));
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
        const i = /* @__PURE__ */ re(this), o = rr(i), l = /* @__PURE__ */ re(s), c = !t && !/* @__PURE__ */ et(s) && !/* @__PURE__ */ Lt(s) ? l : s;
        return o.has.call(i, c) || bt(s, c) && o.has.call(i, s) || bt(l, c) && o.has.call(i, l) || (i.add(c), yt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ et(i) && !/* @__PURE__ */ Lt(i) && (i = /* @__PURE__ */ re(i));
        const o = /* @__PURE__ */ re(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ re(s), h = l.call(o, s));
        const f = c.call(o, s);
        return o.set(s, i), h ? bt(i, f) && yt(o, "set", s, i) : yt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ re(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ re(s), c = o.call(i, s)), l && l.call(i, s);
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
function Or(e) {
  return /* @__PURE__ */ Lt(e) ? e : Ms(
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
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
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
const vt = (e) => se(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => se(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Y(e) {
  return /* @__PURE__ */ Fe(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : Y(Reflect.get(e, t, n)),
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
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (N) => s ? N : /* @__PURE__ */ et(N) || s === !1 || s === 0 ? Tt(N, 1) : Tt(N);
  let f, b, v, O, H = !1, P = !1;
  if (/* @__PURE__ */ Fe(e) ? (b = () => e.value, H = /* @__PURE__ */ et(e)) : /* @__PURE__ */ Xt(e) ? (b = () => h(e), H = !0) : V(e) ? (P = !0, H = e.some((N) => /* @__PURE__ */ Xt(N) || /* @__PURE__ */ et(N)), b = () => e.map((N) => {
    if (/* @__PURE__ */ Fe(N))
      return N.value;
    if (/* @__PURE__ */ Xt(N))
      return h(N);
    if (K(N))
      return c ? c(N, 2) : N();
  })) : K(e) ? t ? b = c ? () => c(e, 2) : e : b = () => {
    if (v) {
      St();
      try {
        v();
      } finally {
        At();
      }
    }
    const N = Wt;
    Wt = f;
    try {
      return c ? c(e, 3, [O]) : e(O);
    } finally {
      Wt = N;
    }
  } : b = ct, t && s) {
    const N = b, Z = s === !0 ? 1 / 0 : s;
    b = () => Tt(N(), Z);
  }
  const D = Gl(), _ = () => {
    f.stop(), D && D.active && ws(D.effects, f);
  };
  if (i && t) {
    const N = t;
    t = (...Z) => {
      const ye = N(...Z);
      return _(), ye;
    };
  }
  let B = P ? new Array(e.length).fill(ir) : ir;
  const G = (N) => {
    if (!(!(f.flags & 1) || !f.dirty && !N))
      if (t) {
        const Z = f.run();
        if (N || s || H || (P ? Z.some((ye, _e) => bt(ye, B[_e])) : bt(Z, B))) {
          v && v();
          const ye = Wt;
          Wt = f;
          try {
            const _e = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              B === ir ? void 0 : P && B[0] === ir ? [] : B,
              O
            ];
            B = Z, c ? c(t, 3, _e) : (
              // @ts-expect-error
              t(..._e)
            );
          } finally {
            Wt = ye;
          }
        }
      } else
        f.run();
  };
  return l && l(G), f = new mo(b), f.scheduler = o ? () => o(G, !1) : G, O = (N) => ga(N, !1, f), v = f.onStop = () => {
    const N = pr.get(f);
    if (N) {
      if (c)
        c(N, 4);
      else
        for (const Z of N) Z();
      pr.delete(f);
    }
  }, t ? r ? G(!0) : B = f.run() : o ? o(G.bind(null, !0), !0) : f.run(), _.pause = f.pause.bind(f), _.resume = f.resume.bind(f), _.stop = _, _;
}
function Tt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fe(e))
    Tt(e.value, t, n);
  else if (V(e))
    for (let r = 0; r < e.length; r++)
      Tt(e[r], t, n);
  else if (Zt(e) || Nt(e))
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
  if (V(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(tt(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ie;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let b = 0; b < f.length; b++)
          if (f[b](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      St(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), At();
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
const hn = [];
let Dt = null, fn = 0;
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
  if (!V(e))
    Dt && e.id === -1 ? Dt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
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
  if (hn.length) {
    const t = [...new Set(hn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (hn.length = 0, Dt) {
      for (let n = 0; n < t.length; n++)
        Dt.push(t[n]);
      return;
    }
    for (Dt = t, fn = 0; fn < Dt.length; fn++) {
      const n = Dt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Dt = null, fn = 0;
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
    ot = -1, Me.length = 0, Mo(), hr = null, (Me.length || hn.length) && Lo();
  }
}
let qe = null, Fo = null;
function mr(e) {
  const t = qe;
  return qe = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = qe, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ai(-1);
    const i = mr(t), o = Jt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Jt.length; c > o; c--) ol();
      mr(i), r._d && Ai(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ot(e, t) {
  if (qe === null)
    return e;
  const n = Mr(qe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ie] = t[s];
    i && (K(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Tt(o), r.push({
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
function Vt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (St(), tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), At());
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
  if (r || mn) {
    let s = mn ? mn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), va = () => ur(Aa);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ie) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Re({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const O = va();
      h = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!c) {
      const O = () => {
      };
      return O.stop = ct, O.resume = ct, O.pause = ct, O;
    }
  }
  const f = Le;
  l.call = (O, H, P) => tt(O, f, H, P);
  let b = !1;
  i === "post" ? l.scheduler = (O) => {
    $e(O, f && f.suspense);
  } : i !== "sync" && (b = !0, l.scheduler = (O, H) => {
    H ? O() : Fs(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), b && (O.flags |= 2, f && (O.id = f.uid, O.i = f));
  };
  const v = _a(e, t, l);
  return zn && (h ? h.push(v) : c && v()), v;
}
function xa(e, t, n) {
  const r = this.proxy, s = he(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  K(t) ? i = t : (i = t.handler, n = t);
  const o = Kn(this), l = Uo(s, i.bind(r), n);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
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
  if (V(e)) {
    e.forEach(
      (P, D) => Ln(
        P,
        t && (V(t) ? t[D] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, f = l.refs === ie ? l.refs = {} : l.refs, b = l.setupState, v = /* @__PURE__ */ re(b), O = b === ie ? io : (P) => pi(f, P) ? !1 : ne(v, P), H = (P, D) => !(D && pi(f, D));
  if (h != null && h !== c) {
    if (hi(t), he(h))
      f[h] = null, O(h) && (b[h] = null);
    else if (/* @__PURE__ */ Fe(h)) {
      const P = t;
      H(h, P.k) && (h.value = null), P.k && (f[P.k] = null);
    }
  }
  if (K(c))
    Wn(c, l, 12, [o, f]);
  else {
    const P = he(c), D = /* @__PURE__ */ Fe(c);
    if (P || D) {
      const _ = () => {
        if (e.f) {
          const B = P ? O(c) ? b[c] : f[c] : H() || !e.k ? c.value : f[e.k];
          if (s)
            V(B) && ws(B, i);
          else if (V(B))
            B.includes(i) || B.push(i);
          else if (P)
            f[c] = [i], O(c) && (b[c] = f[c]);
          else {
            const G = [i];
            H(c, e.k) && (c.value = G), e.k && (f[e.k] = G);
          }
        } else P ? (f[c] = o, O(c) && (b[c] = o)) : D && (H(c, e.k) && (c.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const B = () => {
          _(), gr.delete(e);
        };
        B.id = -1, gr.set(e, B), $e(B, n);
      } else
        hi(e), _();
    }
  }
}
function hi(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
wr().requestIdleCallback;
wr().cancelIdleCallback;
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
    ws(r[t], s);
  }, n);
}
function Pr(e, t, n = Le, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      St();
      const l = Kn(n), c = tt(t, n, e, o);
      return l(), At(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const wt = (e) => (t, n = Le) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = wt("bm"), Da = wt("m"), Na = wt(
  "bu"
), Ma = wt("u"), La = wt(
  "bum"
), Vo = wt("um"), Fa = wt(
  "sp"
), Ua = wt("rtg"), Ha = wt("rtc");
function ka(e, t = Le) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function Rt(e, t, n, r) {
  let s;
  const i = n, o = V(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ Xt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ et(e), h = /* @__PURE__ */ Lt(e), e = Cr(e)), s = new Array(e.length);
    for (let f = 0, b = e.length; f < b; f++)
      s[f] = t(
        c ? h ? _n(vt(e[f])) : vt(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (se(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, h = l.length; c < h; c++) {
        const f = l[c];
        s[c] = t(e[f], f, c, i);
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
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
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
    let f, b;
    if (h)
      return t === "$attrs" && Oe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== ie && ne(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = c.config.globalProperties, ne(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== ie && ne(r, t) ? (r[t] = n, !0) : ne(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ie && l[0] !== "$" && ne(e, l) || es(t, l) || ne(i, l) || ne(r, l) || ne(Un, l) || ne(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ne(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return V(e) ? e.reduce(
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
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: f,
    beforeMount: b,
    mounted: v,
    beforeUpdate: O,
    updated: H,
    activated: P,
    deactivated: D,
    beforeDestroy: _,
    beforeUnmount: B,
    destroyed: G,
    unmounted: N,
    render: Z,
    renderTracked: ye,
    renderTriggered: _e,
    errorCaptured: we,
    serverPrefetch: fe,
    // public API
    expose: Ie,
    inheritAttrs: ft,
    // assets
    components: Ft,
    directives: nt,
    filters: en
  } = t;
  if (h && za(h, r, null), o)
    for (const ce in o) {
      const Q = o[ce];
      K(Q) && (r[ce] = Q.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    se(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, i)
    for (const ce in i) {
      const Q = i[ce], Xe = K(Q) ? Q.bind(n, n) : K(Q.get) ? Q.get.bind(n, n) : ct, Ut = !K(Q) && K(Q.set) ? Q.set.bind(n) : ct, pt = mt({
        get: Xe,
        set: Ut
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Ge) => pt.value = Ge
      });
    }
  if (l)
    for (const ce in l)
      zo(l[ce], r, n, ce);
  if (c) {
    const ce = K(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((Q) => {
      Sa(Q, ce[Q]);
    });
  }
  f && gi(f, e, "c");
  function Ae(ce, Q) {
    V(Q) ? Q.forEach((Xe) => ce(Xe.bind(n))) : Q && ce(Q.bind(n));
  }
  if (Ae(Pa, b), Ae(Da, v), Ae(Na, O), Ae(Ma, H), Ae(Oa, P), Ae(Ra, D), Ae(ka, we), Ae(Ha, ye), Ae(Ua, _e), Ae(La, B), Ae(Vo, N), Ae(Fa, fe), V(Ie))
    if (Ie.length) {
      const ce = e.exposed || (e.exposed = {});
      Ie.forEach((Q) => {
        Object.defineProperty(ce, Q, {
          get: () => n[Q],
          set: (Xe) => n[Q] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === ct && (e.render = Z), ft != null && (e.inheritAttrs = ft), Ft && (e.components = Ft), nt && (e.directives = nt), fe && jo(e);
}
function za(e, t, n = ct) {
  V(e) && (e = Ts(e));
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
    V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (he(e)) {
    const i = t[e];
    K(i) && Zr(s, i);
  } else if (K(e))
    Zr(s, e.bind(n));
  else if (se(e))
    if (V(e))
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
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
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
      const l = Ba[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
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
  if (V(e)) {
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
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Re(
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
function Ya(e, t) {
  return function(r, s = null) {
    K(r) || (r = Re({}, r)), s != null && !se(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const h = i.app = {
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
      set config(f) {
      },
      use(f, ...b) {
        return o.has(f) || (f && K(f.install) ? (o.add(f), f.install(h, ...b)) : K(f) && (o.add(f), f(h, ...b))), h;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), h;
      },
      component(f, b) {
        return b ? (i.components[f] = b, h) : i.components[f];
      },
      directive(f, b) {
        return b ? (i.directives[f] = b, h) : i.directives[f];
      },
      mount(f, b, v) {
        if (!c) {
          const O = h._ceVNode || Et(r, s);
          return O.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(O, f, v), c = !0, h._container = f, f.__vue_app__ = h, Mr(O.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (tt(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, b) {
        return i.provides[f] = b, h;
      },
      runWithContext(f) {
        const b = mn;
        mn = h;
        try {
          return f();
        } finally {
          mn = b;
        }
      }
    };
    return h;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${Qt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ie;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((f) => he(f) ? f.trim() : f)), o.number && (s = s.map(xr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(Ze(t))];
  !c && i && (c = r[l = Gr(Qt(t))]), c && tt(
    c,
    e,
    6,
    s
  );
  const h = r[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, tt(
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
  let o = {}, l = !1;
  if (!K(e)) {
    const c = (h) => {
      const f = Ko(h, t, !0);
      f && (l = !0, Re(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (se(e) && r.set(e, null), null) : (V(i) ? i.forEach((c) => o[c] = null) : Re(o, i), se(e) && r.set(e, o), o);
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
    attrs: l,
    emit: c,
    render: h,
    renderCache: f,
    props: b,
    data: v,
    setupState: O,
    ctx: H,
    inheritAttrs: P
  } = e, D = mr(e);
  let _, B;
  try {
    if (n.shapeFlag & 4) {
      const N = s || r, Z = N;
      _ = at(
        h.call(
          Z,
          N,
          f,
          b,
          O,
          v,
          H
        )
      ), B = l;
    } else {
      const N = t;
      _ = at(
        N.length > 1 ? N(
          b,
          { attrs: l, slots: o, emit: c }
        ) : N(
          b,
          null
        )
      ), B = t.props ? l : Za(l);
    }
  } catch (N) {
    Jt.length = 0, Rr(N, e, 1), _ = Et(xt);
  }
  let G = _;
  if (B && P !== !1) {
    const N = Object.keys(B), { shapeFlag: Z } = G;
    N.length && Z & 7 && (i && N.some(Ar) && (B = Qa(
      B,
      i
    )), G = bn(G, B, !1, !0));
  }
  if (n.dirs && (G = bn(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const N = Ir(G.type) && ko(G) || G;
    Us(N, n.transition);
  }
  return _ = G, mr(D), _;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qa = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ar(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ec(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ti(r, o, h) : !!o;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        const v = f[b];
        if (Go(o, r, v) && !Dr(h, v))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ti(r, o, h) : !0 : !!o;
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
  return n === "style" && se(r) && se(s) ? !Mt(r, s) : r !== s;
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
const Yo = {}, qo = () => Object.create(Yo), Xo = (e) => Object.getPrototypeOf(e) === Yo;
function nc(e, t, n, r = !1) {
  const s = {}, i = qo();
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
  } = e, l = /* @__PURE__ */ re(s), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        let v = f[b];
        if (Dr(e.emitsOptions, v))
          continue;
        const O = t[v];
        if (c)
          if (ne(i, v))
            O !== i[v] && (i[v] = O, h = !0);
          else {
            const H = Ze(v);
            s[H] = Es(
              c,
              l,
              H,
              O,
              e,
              !1
            );
          }
        else
          O !== i[v] && (i[v] = O, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let f;
    for (const b in l)
      (!t || // for camelCase
      !ne(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Qt(b)) === b || !ne(t, f))) && (c ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[b] = Es(
        c,
        l,
        b,
        void 0,
        e,
        !0
      )) : delete s[b]);
    if (i !== l)
      for (const b in i)
        (!t || !ne(t, b)) && (delete i[b], h = !0);
  }
  h && yt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Dn(c))
        continue;
      const h = t[c];
      let f;
      s && ne(s, f = Ze(c)) ? !i || !i.includes(f) ? n[f] = h : (l || (l = {}))[f] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ re(n), h = l || ie;
    for (let f = 0; f < i.length; f++) {
      const b = i[f];
      n[b] = Es(
        s,
        c,
        b,
        h[b],
        e,
        !ne(h, b)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ne(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && K(c)) {
        const { propsDefaults: h } = s;
        if (n in h)
          r = h[n];
        else {
          const f = Kn(s);
          r = h[n] = c.call(
            null,
            t
          ), f();
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
    ] && (r === "" || r === Qt(n)) && (r = !0));
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
  if (!K(e)) {
    const f = (b) => {
      c = !0;
      const [v, O] = Zo(b, t, !0);
      Re(o, v), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return se(e) && r.set(e, pn), pn;
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      const b = Ze(i[f]);
      Ei(b) && (o[b] = ie);
    }
  else if (i)
    for (const f in i) {
      const b = Ze(f);
      if (Ei(b)) {
        const v = i[f], O = o[b] = V(v) || K(v) ? { type: v } : Re({}, v), H = O.type;
        let P = !1, D = !0;
        if (V(H))
          for (let _ = 0; _ < H.length; ++_) {
            const B = H[_], G = K(B) && B.name;
            if (G === "Boolean") {
              P = !0;
              break;
            } else G === "String" && (D = !1);
          }
        else
          P = K(H) && H.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = P, O[
          1
          /* shouldCastTrue */
        ] = D, (P || ne(O, "default")) && l.push(b);
      }
    }
  const h = [o, l];
  return se(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => V(e) ? e.map(at) : [at(e)], ic = (e, t, n) => {
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
  const r = e.slots = qo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && uo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = ie;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !ks(l) && o[l] == null && delete s[l];
}, $e = dc;
function ac(e) {
  return cc(e);
}
function cc(e, t) {
  const n = wr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: h,
    setElementText: f,
    parentNode: b,
    nextSibling: v,
    setScopeId: O = ct,
    insertStaticContent: H
  } = e, P = (u, d, m, S = null, g = null, T = null, x = void 0, w = null, C = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !xn(u, d) && (S = tn(u), Ge(u, g, T, !0), u = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: y, ref: k, shapeFlag: R } = d;
    switch (y) {
      case Nr:
        D(u, d, m, S);
        break;
      case xt:
        _(u, d, m, S);
        break;
      case ns:
        u == null && B(d, m, S, x);
        break;
      case xe:
        Ft(
          u,
          d,
          m,
          S,
          g,
          T,
          x,
          w,
          C
        );
        break;
      default:
        R & 1 ? Z(
          u,
          d,
          m,
          S,
          g,
          T,
          x,
          w,
          C
        ) : R & 6 ? nt(
          u,
          d,
          m,
          S,
          g,
          T,
          x,
          w,
          C
        ) : (R & 64 || R & 128) && y.process(
          u,
          d,
          m,
          S,
          g,
          T,
          x,
          w,
          C,
          kt
        );
    }
    k != null && g ? Ln(k, u && u.ref, T, d || u, !d) : k == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, D = (u, d, m, S) => {
    if (u == null)
      r(
        d.el = l(d.children),
        m,
        S
      );
    else {
      const g = d.el = u.el;
      d.children !== u.children && h(g, d.children);
    }
  }, _ = (u, d, m, S) => {
    u == null ? r(
      d.el = c(d.children || ""),
      m,
      S
    ) : d.el = u.el;
  }, B = (u, d, m, S) => {
    [u.el, u.anchor] = H(
      u.children,
      d,
      m,
      S,
      u.el,
      u.anchor
    );
  }, G = ({ el: u, anchor: d }, m, S) => {
    let g;
    for (; u && u !== d; )
      g = v(u), r(u, m, S), u = g;
    r(d, m, S);
  }, N = ({ el: u, anchor: d }) => {
    let m;
    for (; u && u !== d; )
      m = v(u), s(u), u = m;
    s(d);
  }, Z = (u, d, m, S, g, T, x, w, C) => {
    if (d.type === "svg" ? x = "svg" : d.type === "math" && (x = "mathml"), u == null)
      ye(
        d,
        m,
        S,
        g,
        T,
        x,
        w,
        C
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), fe(
          u,
          d,
          g,
          T,
          x,
          w,
          C
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (u, d, m, S, g, T, x, w) => {
    let C, y;
    const { props: k, shapeFlag: R, transition: U, dirs: $ } = u;
    if (C = u.el = o(
      u.type,
      T,
      k && k.is,
      k
    ), R & 8 ? f(C, u.children) : R & 16 && we(
      u.children,
      C,
      null,
      S,
      g,
      ts(u, T),
      x,
      w
    ), $ && Vt(u, null, S, "created"), _e(C, u, u.scopeId, x, S), k) {
      for (const X in k)
        X !== "value" && !Dn(X) && i(C, X, null, k[X], T, S);
      "value" in k && i(C, "value", null, k.value, T), (y = k.onVnodeBeforeMount) && it(y, S, u);
    }
    $ && Vt(u, null, S, "beforeMount");
    const W = uc(g, U);
    W && U.beforeEnter(C), r(C, d, m), ((y = k && k.onVnodeMounted) || W || $) && $e(() => {
      y && it(y, S, u), W && U.enter(C), $ && Vt(u, null, S, "mounted");
    }, g);
  }, _e = (u, d, m, S, g) => {
    if (m && O(u, m), S)
      for (let T = 0; T < S.length; T++)
        O(u, S[T]);
    if (g) {
      let T = g.subTree;
      if (d === T || il(T.type) && (T.ssContent === d || T.ssFallback === d)) {
        const x = g.vnode;
        _e(
          u,
          x,
          x.scopeId,
          x.slotScopeIds,
          g.parent
        );
      }
    }
  }, we = (u, d, m, S, g, T, x, w, C = 0) => {
    for (let y = C; y < u.length; y++) {
      const k = u[y] = w ? _t(u[y]) : at(u[y]);
      P(
        null,
        k,
        d,
        m,
        S,
        g,
        T,
        x,
        w
      );
    }
  }, fe = (u, d, m, S, g, T, x) => {
    const w = d.el = u.el;
    let { patchFlag: C, dynamicChildren: y, dirs: k } = d;
    C |= u.patchFlag & 16;
    const R = u.props || ie, U = d.props || ie;
    let $;
    if (m && zt(m, !1), ($ = U.onVnodeBeforeUpdate) && it($, m, d, u), k && Vt(d, u, m, "beforeUpdate"), m && zt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (C = 0, x = !1, y = null), (R.innerHTML && U.innerHTML == null || R.textContent && U.textContent == null) && f(w, ""), y ? Ie(
      u.dynamicChildren,
      y,
      w,
      m,
      S,
      ts(d, g),
      T
    ) : x || Q(
      u,
      d,
      w,
      null,
      m,
      S,
      ts(d, g),
      T,
      !1
    ), C > 0) {
      if (C & 16)
        ft(w, R, U, m, g);
      else if (C & 2 && R.class !== U.class && i(w, "class", null, U.class, g), C & 4 && i(w, "style", R.style, U.style, g), C & 8) {
        const W = d.dynamicProps;
        for (let X = 0; X < W.length; X++) {
          const q = W[X], ue = R[q], pe = U[q];
          (pe !== ue || q === "value") && i(w, q, ue, pe, g, m);
        }
      }
      C & 1 && u.children !== d.children && f(w, d.children);
    } else !x && y == null && ft(w, R, U, m, g);
    (($ = U.onVnodeUpdated) || k) && $e(() => {
      $ && it($, m, d, u), k && Vt(d, u, m, "updated");
    }, S);
  }, Ie = (u, d, m, S, g, T, x) => {
    for (let w = 0; w < d.length; w++) {
      const C = u[w], y = d[w], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(C, y) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? b(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      P(
        C,
        y,
        k,
        null,
        S,
        g,
        T,
        x,
        !0
      );
    }
  }, ft = (u, d, m, S, g) => {
    if (d !== m) {
      if (d !== ie)
        for (const T in d)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            d[T],
            null,
            g,
            S
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const x = m[T], w = d[T];
        x !== w && T !== "value" && i(u, T, w, x, g, S);
      }
      "value" in m && i(u, "value", d.value, m.value, g);
    }
  }, Ft = (u, d, m, S, g, T, x, w, C) => {
    const y = d.el = u ? u.el : l(""), k = d.anchor = u ? u.anchor : l("");
    let { patchFlag: R, dynamicChildren: U, slotScopeIds: $ } = d;
    $ && (w = w ? w.concat($) : $), u == null ? (r(y, m, S), r(k, m, S), we(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      k,
      g,
      T,
      x,
      w,
      C
    )) : R > 0 && R & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === U.length ? (Ie(
      u.dynamicChildren,
      U,
      m,
      g,
      T,
      x,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || g && d === g.subTree) && nl(
      u,
      d,
      !0
      /* shallow */
    )) : Q(
      u,
      d,
      m,
      k,
      g,
      T,
      x,
      w,
      C
    );
  }, nt = (u, d, m, S, g, T, x, w, C) => {
    d.slotScopeIds = w, u == null ? d.shapeFlag & 512 ? g.ctx.activate(
      d,
      m,
      S,
      x,
      C
    ) : en(
      d,
      m,
      S,
      g,
      T,
      x,
      C
    ) : dt(u, d, C);
  }, en = (u, d, m, S, g, T, x) => {
    const w = u.component = yc(
      u,
      S,
      g
    );
    if (Hs(u) && (w.ctx.renderer = kt), Ec(w, !1, x), w.asyncDep) {
      if (g && g.registerDep(w, Ae, x), !u.el) {
        const C = w.subTree = Et(xt);
        _(null, C, d, m), u.placeholder = C.el;
      }
    } else
      Ae(
        w,
        u,
        d,
        m,
        g,
        T,
        x
      );
  }, dt = (u, d, m) => {
    const S = d.component = u.component;
    if (ec(u, d, m))
      if (S.asyncDep && !S.asyncResolved) {
        ce(S, d, m);
        return;
      } else
        S.next = d, S.update();
    else
      d.el = u.el, S.vnode = d;
  }, Ae = (u, d, m, S, g, T, x) => {
    const w = () => {
      if (u.isMounted) {
        let { next: R, bu: U, u: $, parent: W, vnode: X } = u;
        {
          const Ue = rl(u);
          if (Ue) {
            R && (R.el = X.el, ce(u, R, x)), Ue.asyncDep.then(() => {
              $e(() => {
                u.isUnmounted || y();
              }, g);
            });
            return;
          }
        }
        let q = R, ue;
        zt(u, !1), R ? (R.el = X.el, ce(u, R, x)) : R = X, U && cr(U), (ue = R.props && R.props.onVnodeBeforeUpdate) && it(ue, W, R, X), zt(u, !0);
        const pe = yi(u), Pe = u.subTree;
        u.subTree = pe, P(
          Pe,
          pe,
          // parent may have changed if it's in a teleport
          b(Pe.el),
          // anchor may have changed if it's in a fragment
          tn(Pe),
          u,
          g,
          T
        ), R.el = pe.el, q === null && tc(u, pe.el), $ && $e($, g), (ue = R.props && R.props.onVnodeUpdated) && $e(
          () => it(ue, W, R, X),
          g
        );
      } else {
        let R;
        const { el: U, props: $ } = d, { bm: W, m: X, parent: q, root: ue, type: pe } = u, Pe = Fn(d);
        zt(u, !1), W && cr(W), !Pe && (R = $ && $.onVnodeBeforeMount) && it(R, q, d), zt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            pe,
            u.parent ? u.parent.type : void 0
          );
          const Ue = u.subTree = yi(u);
          P(
            null,
            Ue,
            m,
            S,
            u,
            g,
            T
          ), d.el = Ue.el;
        }
        if (X && $e(X, g), !Pe && (R = $ && $.onVnodeMounted)) {
          const Ue = d;
          $e(
            () => it(R, q, Ue),
            g
          );
        }
        (d.shapeFlag & 256 || q && Fn(q.vnode) && q.vnode.shapeFlag & 256) && u.a && $e(u.a, g), u.isMounted = !0, d = m = S = null;
      }
    };
    u.scope.on();
    const C = u.effect = new mo(w);
    u.scope.off();
    const y = u.update = C.run.bind(C), k = u.job = C.runIfDirty.bind(C);
    k.i = u, k.id = u.uid, C.scheduler = () => Fs(k), zt(u, !0), y();
  }, ce = (u, d, m) => {
    d.component = u;
    const S = u.vnode.props;
    u.vnode = d, u.next = null, rc(u, d.props, S, m), lc(u, d.children, m), St(), di(u), At();
  }, Q = (u, d, m, S, g, T, x, w, C = !1) => {
    const y = u && u.children, k = u ? u.shapeFlag : 0, R = d.children, { patchFlag: U, shapeFlag: $ } = d;
    if (U > 0) {
      if (U & 128) {
        Ut(
          y,
          R,
          m,
          S,
          g,
          T,
          x,
          w,
          C
        );
        return;
      } else if (U & 256) {
        Xe(
          y,
          R,
          m,
          S,
          g,
          T,
          x,
          w,
          C
        );
        return;
      }
    }
    $ & 8 ? (k & 16 && Ht(y, g, T), R !== y && f(m, R)) : k & 16 ? $ & 16 ? Ut(
      y,
      R,
      m,
      S,
      g,
      T,
      x,
      w,
      C
    ) : Ht(y, g, T, !0) : (k & 8 && f(m, ""), $ & 16 && we(
      R,
      m,
      S,
      g,
      T,
      x,
      w,
      C
    ));
  }, Xe = (u, d, m, S, g, T, x, w, C) => {
    u = u || pn, d = d || pn;
    const y = u.length, k = d.length, R = Math.min(y, k);
    let U;
    for (U = 0; U < R; U++) {
      const $ = d[U] = C ? _t(d[U]) : at(d[U]);
      P(
        u[U],
        $,
        m,
        null,
        g,
        T,
        x,
        w,
        C
      );
    }
    y > k ? Ht(
      u,
      g,
      T,
      !0,
      !1,
      R
    ) : we(
      d,
      m,
      S,
      g,
      T,
      x,
      w,
      C,
      R
    );
  }, Ut = (u, d, m, S, g, T, x, w, C) => {
    let y = 0;
    const k = d.length;
    let R = u.length - 1, U = k - 1;
    for (; y <= R && y <= U; ) {
      const $ = u[y], W = d[y] = C ? _t(d[y]) : at(d[y]);
      if (xn($, W))
        P(
          $,
          W,
          m,
          null,
          g,
          T,
          x,
          w,
          C
        );
      else
        break;
      y++;
    }
    for (; y <= R && y <= U; ) {
      const $ = u[R], W = d[U] = C ? _t(d[U]) : at(d[U]);
      if (xn($, W))
        P(
          $,
          W,
          m,
          null,
          g,
          T,
          x,
          w,
          C
        );
      else
        break;
      R--, U--;
    }
    if (y > R) {
      if (y <= U) {
        const $ = U + 1, W = $ < k ? d[$].el : S;
        for (; y <= U; )
          P(
            null,
            d[y] = C ? _t(d[y]) : at(d[y]),
            m,
            W,
            g,
            T,
            x,
            w,
            C
          ), y++;
      }
    } else if (y > U)
      for (; y <= R; )
        Ge(u[y], g, T, !0), y++;
    else {
      const $ = y, W = y, X = /* @__PURE__ */ new Map();
      for (y = W; y <= U; y++) {
        const Ee = d[y] = C ? _t(d[y]) : at(d[y]);
        Ee.key != null && X.set(Ee.key, y);
      }
      let q, ue = 0;
      const pe = U - W + 1;
      let Pe = !1, Ue = 0;
      const Ye = new Array(pe);
      for (y = 0; y < pe; y++) Ye[y] = 0;
      for (y = $; y <= R; y++) {
        const Ee = u[y];
        if (ue >= pe) {
          Ge(Ee, g, T, !0);
          continue;
        }
        let ze;
        if (Ee.key != null)
          ze = X.get(Ee.key);
        else
          for (q = W; q <= U; q++)
            if (Ye[q - W] === 0 && xn(Ee, d[q])) {
              ze = q;
              break;
            }
        ze === void 0 ? Ge(Ee, g, T, !0) : (Ye[ze - W] = y + 1, ze >= Ue ? Ue = ze : Pe = !0, P(
          Ee,
          d[ze],
          m,
          null,
          g,
          T,
          x,
          w,
          C
        ), ue++);
      }
      const jt = Pe ? fc(Ye) : pn;
      for (q = jt.length - 1, y = pe - 1; y >= 0; y--) {
        const Ee = W + y, ze = d[Ee], Tn = d[Ee + 1], En = Ee + 1 < k ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : S;
        Ye[y] === 0 ? P(
          null,
          ze,
          m,
          En,
          g,
          T,
          x,
          w,
          C
        ) : Pe && (q < 0 || y !== jt[q] ? pt(ze, m, En, 2) : q--);
      }
    }
  }, pt = (u, d, m, S, g = null) => {
    const { el: T, type: x, transition: w, children: C, shapeFlag: y } = u;
    if (y & 6) {
      pt(u.component.subTree, d, m, S);
      return;
    }
    if (y & 128) {
      u.suspense.move(d, m, S);
      return;
    }
    if (y & 64) {
      x.move(u, d, m, kt);
      return;
    }
    if (x === xe) {
      r(T, d, m);
      for (let R = 0; R < C.length; R++)
        pt(C[R], d, m, S);
      r(u.anchor, d, m);
      return;
    }
    if (x === ns) {
      G(u, d, m);
      return;
    }
    if (S !== 2 && y & 1 && w)
      if (S === 0)
        w.persisted && !T[Qr] ? r(T, d, m) : (w.beforeEnter(T), r(T, d, m), $e(() => w.enter(T), g));
      else {
        const { leave: R, delayLeave: U, afterLeave: $ } = w, W = () => {
          u.ctx.isUnmounted ? s(T) : r(T, d, m);
        }, X = () => {
          const q = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), w.persisted && !q ? W() : R(T, () => {
            W(), $ && $();
          });
        };
        U ? U(T, W, X) : X();
      }
    else
      r(T, d, m);
  }, Ge = (u, d, m, S = !1, g = !1) => {
    const {
      type: T,
      props: x,
      ref: w,
      children: C,
      dynamicChildren: y,
      shapeFlag: k,
      patchFlag: R,
      dirs: U,
      cacheIndex: $,
      memo: W
    } = u;
    if (R === -2 && (g = !1), w != null && (St(), Ln(w, null, m, u, !0), At()), $ != null && (d.renderCache[$] = void 0), k & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const X = k & 1 && U, q = !Fn(u);
    let ue;
    if (q && (ue = x && x.onVnodeBeforeUnmount) && it(ue, d, u), k & 6)
      Lr(u.component, m, S);
    else {
      if (k & 128) {
        u.suspense.unmount(m, S);
        return;
      }
      X && Vt(u, null, d, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        d,
        m,
        kt,
        S
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== xe || R > 0 && R & 64) ? Ht(
        y,
        d,
        m,
        !1,
        !0
      ) : (T === xe && R & 384 || !g && k & 16) && Ht(C, d, m), S && Gn(u);
    }
    const pe = W != null && $ == null;
    (q && (ue = x && x.onVnodeUnmounted) || X || pe) && $e(() => {
      ue && it(ue, d, u), X && Vt(u, null, d, "unmounted"), pe && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: d, el: m, anchor: S, transition: g } = u;
    if (d === xe) {
      oe(m, S);
      return;
    }
    if (d === ns) {
      N(u);
      return;
    }
    const T = () => {
      s(m), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (u.shapeFlag & 1 && g && !g.persisted) {
      const { leave: x, delayLeave: w } = g, C = () => x(m, T);
      w ? w(u.el, T, C) : C();
    } else
      T();
  }, oe = (u, d) => {
    let m;
    for (; u !== d; )
      m = v(u), s(u), u = m;
    s(d);
  }, Lr = (u, d, m) => {
    const { bum: S, scope: g, job: T, subTree: x, um: w, m: C, a: y } = u;
    Si(C), Si(y), S && cr(S), g.stop(), T && (T.flags |= 8, Ge(x, u, d, m)), w && $e(w, d), $e(() => {
      u.isUnmounted = !0;
    }, d);
  }, Ht = (u, d, m, S = !1, g = !1, T = 0) => {
    for (let x = T; x < u.length; x++)
      Ge(u[x], d, m, S, g);
  }, tn = (u) => {
    if (u.shapeFlag & 6)
      return tn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = v(u.anchor || u.el), m = d && d[wa];
    return m ? v(m) : d;
  };
  let yn = !1;
  const Yn = (u, d, m) => {
    let S;
    u == null ? d._vnode && (Ge(d._vnode, null, null, !0), S = d._vnode.component) : P(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = u, yn || (yn = !0, di(S), Mo(), yn = !1);
  }, kt = {
    p: P,
    um: Ge,
    m: pt,
    r: Gn,
    mt: en,
    mc: we,
    pc: Q,
    pbc: Ie,
    n: tn,
    o: e
  };
  return {
    render: Yn,
    hydrate: void 0,
    createApp: Ya(Yn)
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
  if (V(r) && V(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = _t(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = _t(l)), l.el = o.el), l.type === xt && !l.el && (l.el = o.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const h = e[r];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < h ? i = l + 1 : o = l;
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
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const xe = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let Ke = null;
function ee(e = !1) {
  Jt.push(Ke = e ? null : []);
}
function ol() {
  Jt.pop(), Ke = Jt[Jt.length - 1] || null;
}
let $n = 1;
function Ai(e, t = !1) {
  $n += e, e < 0 && Ke && t && (Ke.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? Ke || pn : null, ol(), $n > 0 && Ke && Ke.push(e), e;
}
function te(e, t, n, r, s, i) {
  return ll(
    L(
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
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, fr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ Fe(e) || K(e) ? { i: qe, r: e, k: t, f: !!n } : e : null);
function L(e, t = null, n = null, r = 0, s = null, i = e === xe ? 0 : 1, o = !1, l = !1) {
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
    ctx: qe
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= he(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ke.push(c), c;
}
const Et = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = xt), al(e)) {
    const l = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(l, n), $n > 0 && !i && Ke && (l.shapeFlag & 6 ? Ke[Ke.indexOf(e)] = l : Ke.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !he(l) && (t.class = Rs(l)), se(c) && (/* @__PURE__ */ Ls(c) && !V(c) && (c = Re({}, c)), t.style = Os(c));
  }
  const o = he(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : se(e) ? 4 : K(e) ? 2 : 0;
  return L(
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
function bn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? gc(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && cl(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? V(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
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
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && bn(e.ssContent),
    ssFallback: e.ssFallback && bn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Us(
    f,
    c.clone(f)
  ), f;
}
function je(e = " ", t = 0) {
  return Et(Nr, null, e, t);
}
function It(e = "", t = !1) {
  return t ? (ee(), pc(xt, null, e)) : Et(xt, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? Et(xt) : V(e) ? Et(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? _t(e) : Et(Nr, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), br(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Xo(t) ? t._ctx = qe : s === 3 && qe && (qe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (K(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: qe }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [je(t)]) : n = 8;
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
        o && i !== o && !(V(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ar(s) && (t[s] = o);
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
const Tc = () => Le || qe;
let yr, Vn;
{
  const e = wr(), t = (n, r) => {
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
}, vi = () => {
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
    const s = e.setupContext = r.length > 1 ? vc(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (At(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
      if (o.then(vi, vi), t)
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
      At(), s();
    }
  }
}
const Ac = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function vc(e) {
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
const mt = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null, Ci = gt && /* @__PURE__ */ gt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? gt.createElementNS(Cc, e) : t === "mathml" ? gt.createElementNS(Oc, e) : n ? gt.createElement(e, { is: n }) : gt.createElement(e);
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
}, Ic = /* @__PURE__ */ Symbol("_vtc");
function Pc(e, t, n) {
  const r = e[Ic];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Nc = /* @__PURE__ */ Symbol(""), Mc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const r = e.style, s = he(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (he(t))
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
      l != null ? Uc(
        e,
        o,
        !he(t) && t ? t[o] : void 0,
        l
      ) || In(r, o, l) : In(r, o, "");
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
  if (V(n))
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(r) && n === r;
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
    const [l, c] = Vc(t);
    if (r) {
      const h = i[t] = Wc(
        r,
        s
      );
      Gt(e, l, h, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
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
    if (V(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
        h && tt(
          h,
          t,
          5,
          l
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
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? Ar(t) || kc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(r))) ? Di(e, Ze(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
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
  return Mi(t) && he(n) ? !1 : t in e;
}
function Yc(e, t) {
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
  return V(t) ? (n) => cr(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Yt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Yt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    Gt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Yt](is(e.value, n, i));
    }), (n || i) && Gt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (Gt(e, "compositionstart", qc), Gt(e, "compositionend", Li), Gt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Yt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[Yt] = Tr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, cn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Gt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Zt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? V(o) ? s.slice() : s : o
      ];
      try {
        e[Yt](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Yt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Yt] = Tr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || V(e)) return Mt(e, t);
  if (Zt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = V(t);
  if (!(n && !r && !Zt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Mt(Er(o), t)) {
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
  return he(e) ? document.querySelector(e) : e;
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
    var r, s, i, o, l = [], c = !0, h = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (f) {
      h = !0, s = f;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw s;
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
    if (typeof e == "string") return ki(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let Te = Object.freeze, Se = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, vs = hl.construct;
Te || (Te = function(t) {
  return t;
});
Se || (Se = function(t) {
  return t;
});
As || (As = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
vs || (vs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const Kt = be(Array.prototype.forEach), fu = be(Array.prototype.lastIndexOf), $i = be(Array.prototype.pop), wn = be(Array.prototype.push), du = be(Array.prototype.splice), gn = Array.isArray, Pn = be(String.prototype.toLowerCase), os = be(String.prototype.toString), Vi = be(String.prototype.match), Cn = be(String.prototype.replace), zi = be(String.prototype.indexOf), pu = be(String.prototype.trim), hu = be(Number.prototype.toString), mu = be(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : be(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : be(Symbol.prototype.toString), Ve = be(Object.prototype.hasOwnProperty), On = be(Object.prototype.toString), Ce = be(RegExp.prototype.test), Bt = gu(TypeError);
function be(e) {
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
    return vs(e, n);
  };
}
function J(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pn;
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
function _u(e) {
  for (let t = 0; t < e.length; t++)
    Ve(e, t) || (e[t] = null);
  return e;
}
function We(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    Ve(e, s) && (gn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = We(i) : t[s] = i);
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
        return be(r.get);
      if (typeof r.value == "function")
        return be(r.value);
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
const Ki = Te(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Te(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Te(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Te(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Te(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Te(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Te(["#text"]), Yi = Te(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Te(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Te(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Se(/{{[\w\W]*|^[\w\W]*}}/g), Au = Se(/<%[\w\W]*|^[\w\W]*%>/g), vu = Se(/\${[\w\W]*/g), xu = Se(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Se(/^aria-[\-\w]+$/), Xi = Se(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Se(/^(?:\w+script|data):/i), Ou = Se(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Se(/^html$/i), Iu = Se(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Se(/<[/\w!]/g), Zi = Se(/<[/\w]/g), Pu = Se(/<\/no(script|embed|frames)/i), Du = Se(/\/>/i), Be = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Te(J({}, ml)), Mu = (function() {
  const e = {};
  return Kt(ml, (t) => {
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
}, Pt = function(t, n, r, s) {
  return Ve(t, n) && gn(t[n]) ? J(s.base ? We(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Ve(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? We(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (A) => gl(A);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Be.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, b = e.trustedTypes, v = l.prototype, O = Je(v, "cloneNode"), H = Je(v, "remove"), P = Je(v, "nextSibling"), D = Je(v, "childNodes"), _ = Je(v, "parentNode"), B = Je(v, "shadowRoot"), G = Je(v, "attributes"), N = o && o.prototype ? Je(o.prototype, "nodeType") : null, Z = o && o.prototype ? Je(o.prototype, "nodeName") : null, ye = o && o.prototype ? Je(o.prototype, "ownerDocument") : null, _e = function(a) {
    return N ? N(a) : a.nodeType;
  }, we = function(a) {
    return Z ? Z(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const A = n.createElement("template");
    A.content && A.content.ownerDocument && (n = A.content.ownerDocument);
  }
  let fe, Ie = "", ft, Ft = !1, nt = 0;
  const en = function() {
    if (nt > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, dt = function(a) {
    en(), nt++;
    try {
      return fe.createHTML(a);
    } finally {
      nt--;
    }
  }, Ae = function(a) {
    en(), nt++;
    try {
      return fe.createScriptURL(a);
    } finally {
      nt--;
    }
  }, ce = function() {
    return Ft || (ft = Fu(b, s), Ft = !0), ft;
  }, Q = n, Xe = Q.implementation, Ut = Q.createNodeIterator, pt = Q.createDocumentFragment, Ge = Q.getElementsByTagName, Gn = r.importNode;
  let oe = Qi();
  t.isSupported = typeof pl == "function" && typeof _ == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = Su, Ht = Au, tn = vu, yn = xu, Yn = wu, kt = Cu, Fr = Ou, u = Iu;
  let d = Xi, m = null;
  const S = J({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let g = null;
  const T = J({}, [...Yi, ...us, ...qi, ...ar]);
  let x = Object.seal(dn(null, {
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
  })), w = null, C = null;
  const y = Object.seal(dn(null, {
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
  let k = !0, R = !0, U = !1, $ = !0, W = !1, X = !0, q = !1, ue = !1, pe = null, Pe = null, Ue = !1, Ye = !1, jt = !1, Ee = !1, ze = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, Hr = !1, nn = {}, rn = null;
  const $s = J({}, [
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
  const zs = J({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = J({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", rt = "http://www.w3.org/1999/xhtml";
  let sn = rt, kr = !1, jr = null;
  const bl = J({}, [qn, Xn, rt], os), Ks = Te(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = J({}, Ks);
  const Gs = Te(["annotation-xml"]);
  let Vr = J({}, Gs);
  const yl = J({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let me = null, on = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = We(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, me = Sn === "application/xhtml+xml" ? os : Pn, m = Pt(a, "ALLOWED_TAGS", S, {
      transform: me
    }), g = Pt(a, "ALLOWED_ATTR", T, {
      transform: me
    }), jr = Pt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Pt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: me,
      base: Ws
    }), Vs = Pt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: me,
      base: zs
    }), rn = Pt(a, "FORBID_CONTENTS", $s, {
      transform: me
    }), w = Pt(a, "FORBID_TAGS", We({}), {
      transform: me
    }), C = Pt(a, "FORBID_ATTR", We({}), {
      transform: me
    }), nn = Ve(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? We(a.USE_PROFILES) : a.USE_PROFILES : !1, k = a.ALLOW_ARIA_ATTR !== !1, R = a.ALLOW_DATA_ATTR !== !1, U = a.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = a.SAFE_FOR_TEMPLATES || !1, X = a.SAFE_FOR_XML !== !1, q = a.WHOLE_DOCUMENT || !1, Ye = a.RETURN_DOM || !1, jt = a.RETURN_DOM_FRAGMENT || !1, Ee = a.RETURN_TRUSTED_TYPE || !1, Ue = a.FORCE_BODY || !1, ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, d = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, sn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : rt, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => J({}, Ks)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => J({}, Gs)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (x = dn(null), Ve(p, "tagNameCheck") && Ys(p.tagNameCheck) && (x.tagNameCheck = p.tagNameCheck), Ve(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (x.attributeNameCheck = p.attributeNameCheck), Ve(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Se(x), W && (R = !1), jt && (Ye = !0), nn && (m = J({}, Gi), g = dn(null), nn.html === !0 && (J(m, Ki), J(g, Yi)), nn.svg === !0 && (J(m, ls), J(g, us), J(g, ar)), nn.svgFilters === !0 && (J(m, as), J(g, us), J(g, ar)), nn.mathMl === !0 && (J(m, cs), J(g, qi), J(g, ar))), y.tagCheck = null, y.attributeCheck = null, Ve(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === S && (m = We(m)), J(m, a.ADD_TAGS, me))), Ve(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (g === T && (g = We(g)), J(g, a.ADD_ATTR, me))), Ve(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (rn === $s && (rn = We(rn)), J(rn, a.ADD_FORBID_CONTENTS, me)), Ur && (m["#text"] = !0), q && J(m, ["html", "head", "body"]), m.table && (J(m, ["tbody"]), delete w.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = fe;
      fe = a.TRUSTED_TYPES_POLICY;
      try {
        Ie = dt("");
      } catch (I) {
        throw fe = E, I;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (fe = void 0, Ie = "") : (fe === void 0 && (fe = ce()), fe && typeof Ie == "string" && (Ie = dt("")));
    Te && Te(a), on = a;
  }, qs = J({}, [...ls, ...as, ...Tu]), Xs = J({}, [...cs, ...Eu]), Al = function(a, p, E) {
    return p.namespaceURI === rt ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, vl = function(a, p, E) {
    return p.namespaceURI === rt ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = _(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: sn,
      tagName: "template"
    });
    const E = Pn(a.tagName), I = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? Al(E, p, I) : a.namespaceURI === qn ? vl(E, p, I) : a.namespaceURI === rt ? xl(E, p, I) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Ct = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      _(a).removeChild(a);
    } catch {
      if (H(a), !_(a))
        throw Bt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(a, p, E) {
    try {
      a.removeAttributeNode(p);
    } catch {
      try {
        a.removeAttribute(E);
      } catch {
      }
    }
  }, Jn = function(a) {
    Zn(a);
    const p = D(a);
    if (p) {
      const I = [];
      Kt(p, (F) => {
        wn(I, F);
      }), Kt(I, (F) => {
        try {
          H(F);
        } catch {
        }
      });
    }
    const E = G(a);
    if (E)
      for (let I = E.length - 1; I >= 0; --I) {
        const F = E[I], z = F && F.name;
        typeof z == "string" && Js(a, F, z);
      }
  }, $t = function(a, p, E) {
    if (!E)
      try {
        E = p.getAttributeNode(a);
      } catch {
        E = null;
      }
    wn(t.removed, {
      attribute: E || null,
      from: p
    });
    try {
      E ? p.removeAttributeNode(E) : p.removeAttribute(a);
    } catch {
      try {
        p.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (Ye || jt)
        try {
          Ct(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = G(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const I = p[E], F = I && I.name;
        typeof F != "string" || g[me(F)] || Js(a, I, F);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      _e(E) === Be.element && Cl(E);
      const F = D(E);
      if (F)
        for (let z = F.length - 1; z >= 0; --z)
          p.push(F[z]);
    }
  }, Zs = function(a, p) {
    return X ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!X)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), I = _e(E);
      if (I === Be.processingInstruction || I === Be.comment && Ce(Zi, E.data)) {
        try {
          H(E);
        } catch {
        }
        continue;
      }
      if (I === Be.element) {
        const z = E, le = me(we(E));
        try {
          z.hasAttribute && z.hasAttribute("patchsrc") && z.removeAttribute("patchsrc"), z.hasAttribute && z.hasAttribute("for") && Zs("for", le) && z.removeAttribute("for");
        } catch {
        }
      }
      const F = D(E);
      if (F)
        for (let z = F.length - 1; z >= 0; --z)
          p.push(F[z]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (Ue)
      a = "<remove></remove>" + a;
    else {
      const z = Vi(a, /^[\r\n\t ]+/);
      E = z && z[0];
    }
    Sn === "application/xhtml+xml" && sn === rt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const I = fe ? dt(a) : a;
    if (sn === rt)
      try {
        p = new f().parseFromString(I, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(sn, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Ie : I;
      } catch {
      }
    }
    const F = p.body || p.documentElement;
    return a && E && F.insertBefore(n.createTextNode(E), F.childNodes[0] || null), sn === rt ? Ge.call(p, q ? "html" : "body")[0] : q ? p.documentElement : F;
  }, ei = function(a) {
    const p = ye ? ye(a) : a.ownerDocument;
    return Ut.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, Ht, " "), a = Cn(a, tn, " "), a;
  }, Br = function(a) {
    var p;
    a.normalize();
    const E = ye ? ye(a) : a.ownerDocument, I = Ut.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let F = I.nextNode();
    for (; F; )
      F.data = Qn(F.data), F = I.nextNode();
    const z = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    z && Kt(z, (le) => {
      ln(le.content) && Br(le.content);
    });
  }, er = function(a) {
    const p = Z ? Z(a) : null;
    return typeof p != "string" || me(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    a.nodeType !== N(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== D(a);
  }, ln = function(a) {
    if (!N || typeof a != "object" || a === null)
      return !1;
    try {
      return N(a) === Be.documentFragment;
    } catch {
      return !1;
    }
  }, An = function(a) {
    if (!N || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof N(a) == "number";
    } catch {
      return !1;
    }
  };
  function st(A, a, p) {
    A.length !== 0 && Kt(A, (E) => {
      E.call(t, a, p, on);
    });
  }
  const Rl = function(a, p) {
    return !!(X && a.hasChildNodes() && !An(a.firstElementChild) && Ce(Ji, a.textContent) && Ce(Ji, a.innerHTML) || X && a.namespaceURI === rt && Nu[p] && (An(a.firstElementChild) || typeof a.textContent == "string" && Ce(Mu[p], a.textContent)) || a.nodeType === Be.processingInstruction || X && a.nodeType === Be.comment && Ce(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Ce(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, I = new Array(E > 2 ? E - 2 : 0), F = 2; F < E; F++)
        I[F - 2] = arguments[F];
      return !!a(p, ...I);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!w[p] && ii(p) && tr(x.tagNameCheck, p))
      return !1;
    if (Ur && !rn[p]) {
      const I = _(a), F = D(a);
      if (F && I) {
        const z = F.length;
        for (let le = z - 1; le >= 0; --le) {
          const de = a === E ? O(F[le], !0) : F[le];
          I.insertBefore(de, P(a));
        }
      }
    }
    return Ct(a), !0;
  }, ti = function(a, p, E, I) {
    return a.length === 0 ? p : p === E || p === I ? We(p) : p;
  }, ni = function(a, p) {
    return a === p || _(a) !== null ? !1 : (Hr && Zn(a), !0);
  }, ri = function(a, p) {
    if (st(oe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Ct(a), !0;
    const E = me(we(a));
    if (m = ti(oe.uponSanitizeElement, m, S, pe), st(oe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Ct(a), !0;
    if (w[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const F = Il(a, E, p);
      return F === !1 && st(oe.afterSanitizeElements, a, null), F;
    }
    if (_e(a) === Be.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Ce(Pu, a.innerHTML))
      return Ct(a), !0;
    if (W && a.nodeType === Be.text) {
      const F = Qn(a.textContent);
      a.textContent !== F && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = F);
    }
    return st(oe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (C[p] || Zs(p, a) || ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const I = g[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return R && Ce(yn, p) || k && Ce(Yn, p) ? !0 : I ? Bs[p] || Ce(d, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || U && !Ce(kt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(x.tagNameCheck, a) && tr(x.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && x.allowCustomizedBuiltInElements && tr(x.tagNameCheck, E)
    );
  }, Pl = J({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Ce(u, a);
  }, Dl = function(a, p, E, I) {
    if (fe && typeof b == "object" && typeof b.getAttributeType == "function" && !E)
      switch (b.getAttributeType(a, p)) {
        case "TrustedHTML":
          return dt(I);
        case "TrustedScriptURL":
          return Ae(I);
      }
    return I;
  }, Nl = function(a, p, E, I) {
    try {
      E ? a.setAttributeNS(E, p, I) : a.setAttribute(p, I), er(a) ? Ct(a) : $i(t.removed);
    } catch {
      $t(p, a);
    }
  }, oi = function(a) {
    st(oe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    g = ti(oe.uponSanitizeAttribute, g, T, Pe);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: g,
      forceKeepAttr: void 0
    };
    let I = p.length;
    const F = me(a.nodeName);
    for (; I--; ) {
      const z = p[I], le = z.name, de = z.namespaceURI, He = z.value, ke = me(le), Kr = He;
      let De = le === "value" ? Kr : pu(Kr);
      if (E.attrName = ke, E.attrValue = De, E.keepAttr = !0, E.forceKeepAttr = void 0, st(oe.uponSanitizeAttribute, a, E), De = E.attrValue, Tn && (ke === "id" || ke === "name") && zi(De, En) !== 0 && ($t(le, a, z), De = En + De), X && Ce(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, De)) {
        $t(le, a, z);
        continue;
      }
      if (ke === "attributename" && Vi(De, "href")) {
        $t(le, a, z);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          $t(le, a, z);
          continue;
        }
        if (!$ && Ce(Du, De)) {
          $t(le, a, z);
          continue;
        }
        if (W && (De = Qn(De)), !si(F, ke, De)) {
          $t(le, a, z);
          continue;
        }
        De = Dl(F, ke, de, De), De !== Kr && Nl(a, le, de, De);
      }
    }
    st(oe.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (st(oe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (st(oe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), ln(p.content) && nr(p.content), _e(p) === Be.element) {
        const I = B(p);
        ln(I) && (Wr(I), nr(I));
      }
    st(oe.afterSanitizeShadowDOM, a, null);
  }, Wr = function(a) {
    const p = [{
      node: a,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const E = p.pop();
      if (E.shadow) {
        nr(E.shadow);
        continue;
      }
      const I = E.node, z = _e(I) === Be.element, le = D(I);
      if (le)
        for (let de = le.length - 1; de >= 0; --de)
          p.push({
            node: le[de],
            shadow: null
          });
      if (z) {
        const de = Z ? Z(I) : null;
        if (typeof de == "string" && me(de) === "template") {
          const He = I.content;
          ln(He) && p.push({
            node: He,
            shadow: null
          });
        }
      }
      if (z) {
        const de = B(I);
        ln(de) && p.push({
          node: null,
          shadow: de
        }, {
          node: de,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(A) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, I = null, F = null;
    if (kr = !A, kr && (A = "<!-->"), typeof A != "string" && !An(A) && (A = bu(A), typeof A != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return A;
    ue ? (m = pe, g = Pe) : zr(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (m = We(m)), oe.uponSanitizeAttribute.length > 0 && (g = We(g)), t.removed = [];
    const z = Hr && typeof A != "string" && An(A);
    if (z) {
      Ol(A);
      const He = we(A);
      if (typeof He == "string") {
        const ke = me(He);
        if (!m[ke] || w[ke])
          throw Jn(A), Bt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(A))
        throw Jn(A), Bt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(A);
      } catch (ke) {
        throw Jn(A), ke;
      }
    } else if (An(A))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(A, !0), E.nodeType === Be.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Wr(E);
    else {
      if (!Ye && !W && !q && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return fe && Ee ? dt(A) : A;
      if (p = Qs(A), !p)
        return Ye ? null : Ee ? Ie : "";
    }
    p && Ue && Ct(p.firstChild);
    const le = z ? A : p;
    try {
      const He = ei(le);
      for (; I = He.nextNode(); )
        ri(I, le), oi(I), ln(I.content) && nr(I.content);
    } catch (He) {
      throw z && (Jn(A), Kt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      })), He;
    }
    if (z)
      return Kt(t.removed, (He) => {
        He.element && Zn(He.element);
      }), W && Br(A), A;
    if (Ye) {
      if (W && Br(p), jt)
        for (F = pt.call(p.ownerDocument); p.firstChild; )
          F.appendChild(p.firstChild);
      else
        F = p;
      return (g.shadowroot || g.shadowrootmode) && (F = Gn.call(r, F, !0)), F;
    }
    let de = q ? p.outerHTML : p.innerHTML;
    return q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Ce(Ru, p.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + de), W && (de = Qn(de)), fe && Ee ? dt(de) : de;
  }, t.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(A), ue = !0, pe = m, Pe = g;
  }, t.clearConfig = function() {
    on = null, ue = !1, pe = null, Pe = null, fe = ft, Ie = "";
  }, t.isValidAttribute = function(A, a, p) {
    on || zr({});
    const E = me(A), I = me(a);
    return si(E, I, p);
  }, t.addHook = function(A, a) {
    typeof a == "function" && Ve(oe, A) && wn(oe[A], a);
  }, t.removeHook = function(A, a) {
    if (Ve(oe, A)) {
      if (a !== void 0) {
        const p = fu(oe[A], a);
        return p === -1 ? void 0 : du(oe[A], p, 1)[0];
      }
      return $i(oe[A]);
    }
  }, t.removeHooks = function(A) {
    Ve(oe, A) && (oe[A] = []);
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
function M(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (P) => P, h = (l.sanitize ? Uu.sanitize : c) || c, f = l.escape ? to : c, b = (P) => typeof P == "string" || typeof P == "number", v = (P, D, _) => P.replace(/%n/g, "" + _).replace(/{([^{}]*)}/g, (B, G) => {
    if (D === void 0 || !(G in D))
      return f(B);
    const N = D[G];
    return b(N) ? f(`${N}`) : typeof N == "object" && b(N.value) ? (N.escape !== !1 ? to : c)(`${N.value}`) : f(B);
  });
  let H = (s?.bundle ?? $u(e)).translations[t] || t;
  return H = Array.isArray(H) ? H[0] : H, h(typeof i == "object" || o !== void 0 ? v(
    H,
    i,
    o
  ) : H);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "title" }, sf = { value: "recent" }, of = { value: "publicationDate" }, lf = { value: "publication" }, af = { value: "format" }, cf = ["value"], uf = ["value"], ff = ["aria-label"], df = ["aria-label"], pf = ["aria-label"], hf = ["href"], mf = {
  key: 1,
  class: "library-muted"
}, gf = ["href"], _f = {
  key: 3,
  class: "library-muted"
}, bf = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, yf = { class: "library-muted" }, Tf = {
  key: 1,
  class: "library-cover-gallery"
}, Ef = ["href", "aria-label"], Sf = ["src", "alt"], Af = { class: "library-cover-summary" }, vf = {
  key: 0,
  class: "library-creator"
}, xf = { class: "library-muted" }, wf = { key: 0 }, Cf = { key: 1 }, Of = { key: 2 }, Rf = { key: 3 }, If = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, Pf = { key: 0 }, Df = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Nf = {
  key: 0,
  class: "library-muted"
}, Mf = ["href"], Lf = ["href"], Ff = ["href"], Uf = ["href"], Hf = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, kf = { class: "library-hero-actions" }, jf = ["href"], $f = ["href"], Vf = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = mt(() => t.state.items || []), i = mt(() => t.state.shelves || []), o = mt(() => t.state.formats || []), l = mt(() => t.state.publications || []), c = mt(() => t.state.scanStatuses || []), h = mt(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), f = /* @__PURE__ */ Or({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), b = mt(() => t.state.settingsUrl || ""), v = mt(() => t.state.metadataExportUrl || "");
    function O(P) {
      return String(P || "").toUpperCase();
    }
    function H(P) {
      return P.nextcloudTags || [];
    }
    return (P, D) => (ee(), te("div", Vu, [
      L("section", zu, [
        L("h2", Bu, j(Y(M)("library", "Publication catalogue")), 1),
        L("p", Wu, j(Y(M)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        L("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": Y(M)("library", "Catalogue search and filters")
        }, [
          L("label", null, [
            je(j(Y(M)("library", "Search title / author")) + " ", 1),
            Ot(L("input", {
              "onUpdate:modelValue": D[0] || (D[0] = (_) => f.q = _),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, f.q]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Type")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[1] || (D[1] = (_) => f.type = _),
              name: "type"
            }, [
              L("option", Gu, j(Y(M)("library", "All types")), 1),
              (ee(), te(xe, null, Rt(n, (_) => L("option", {
                key: _,
                value: _
              }, j(_), 9, Yu)), 64))
            ], 512), [
              [cn, f.type]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Series / periodical")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[2] || (D[2] = (_) => f.publication = _),
              name: "publication"
            }, [
              L("option", qu, j(Y(M)("library", "All series and periodicals")), 1),
              (ee(!0), te(xe, null, Rt(l.value, (_) => (ee(), te("option", {
                key: _,
                value: _
              }, j(_), 9, Xu))), 128))
            ], 512), [
              [cn, f.publication]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Nextcloud tag")) + " ", 1),
            Ot(L("input", {
              "onUpdate:modelValue": D[3] || (D[3] = (_) => f.tag = _),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, f.tag]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Format")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[4] || (D[4] = (_) => f.format = _),
              name: "format"
            }, [
              L("option", Ju, j(Y(M)("library", "All formats")), 1),
              (ee(!0), te(xe, null, Rt(o.value, (_) => (ee(), te("option", {
                key: _,
                value: _
              }, j(O(_)), 9, Zu))), 128))
            ], 512), [
              [cn, f.format]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Shelf")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[5] || (D[5] = (_) => f.shelf = _),
              name: "shelf"
            }, [
              L("option", Qu, j(Y(M)("library", "All shelves")), 1),
              (ee(!0), te(xe, null, Rt(i.value, (_) => (ee(), te("option", {
                key: _,
                value: _
              }, j(_), 9, ef))), 128))
            ], 512), [
              [cn, f.shelf]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Scan status")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[6] || (D[6] = (_) => f.status = _),
              name: "status"
            }, [
              L("option", tf, j(Y(M)("library", "All scan statuses")), 1),
              (ee(!0), te(xe, null, Rt(c.value, (_) => (ee(), te("option", {
                key: _,
                value: _
              }, j(_), 9, nf))), 128))
            ], 512), [
              [cn, f.status]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Sort")) + " ", 1),
            Ot(L("select", {
              "onUpdate:modelValue": D[7] || (D[7] = (_) => f.sort = _),
              name: "sort"
            }, [
              L("option", rf, j(Y(M)("library", "Title")), 1),
              L("option", sf, j(Y(M)("library", "Recently added")), 1),
              L("option", of, j(Y(M)("library", "Publication date")), 1),
              L("option", lf, j(Y(M)("library", "Series / periodical")), 1),
              L("option", af, j(Y(M)("library", "Format")), 1)
            ], 512), [
              [cn, f.sort]
            ])
          ]),
          L("label", null, [
            je(j(Y(M)("library", "Page size")) + " ", 1),
            L("select", {
              value: h.value.limit,
              name: "limit"
            }, [
              (ee(), te(xe, null, Rt(r, (_) => L("option", {
                key: _,
                value: _
              }, j(_), 9, uf)), 64))
            ], 8, cf)
          ]),
          L("button", {
            type: "submit",
            class: "button primary",
            "aria-label": Y(M)("library", "Apply catalogue filters")
          }, j(Y(M)("library", "Apply filters")), 9, ff),
          L("a", {
            href: "?",
            class: "button secondary",
            "aria-label": Y(M)("library", "Clear catalogue filters")
          }, j(Y(M)("library", "Clear")), 9, df)
        ], 8, Ku),
        L("nav", {
          class: "library-pagination",
          "aria-label": Y(M)("library", "Catalogue pagination")
        }, [
          L("span", null, "Showing " + j(h.value.from) + "–" + j(h.value.to) + " of " + j(h.value.total) + " catalogue items", 1),
          h.value.previousUrl ? (ee(), te("a", {
            key: 0,
            href: h.value.previousUrl
          }, j(Y(M)("library", "Previous")), 9, hf)) : (ee(), te("span", mf, j(Y(M)("library", "Previous")), 1)),
          h.value.nextUrl ? (ee(), te("a", {
            key: 2,
            href: h.value.nextUrl
          }, j(Y(M)("library", "Next")), 9, gf)) : (ee(), te("span", _f, j(Y(M)("library", "Next")), 1))
        ], 8, pf),
        s.value.length === 0 ? (ee(), te("div", bf, [
          L("h3", null, j(Y(M)("library", "No catalogue items match")), 1),
          L("p", yf, j(Y(M)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (ee(), te("div", Tf, [
          (ee(!0), te(xe, null, Rt(s.value, (_) => (ee(), te("article", {
            key: _.id,
            class: "library-cover-card"
          }, [
            L("a", {
              class: "library-cover-link",
              href: _.openUrl,
              "aria-label": `Read ${_.title}`
            }, [
              L("img", {
                class: "library-cover-image",
                src: _.coverUrl,
                alt: `Cover for ${_.title}`,
                loading: "lazy"
              }, null, 8, Sf)
            ], 8, Ef),
            L("div", Af, [
              L("h3", null, j(_.title), 1),
              _.creators ? (ee(), te("p", vf, j(_.creators), 1)) : It("", !0),
              L("p", xf, [
                L("span", null, j(_.publicationType), 1),
                _.publication ? (ee(), te("span", wf, " · " + j(_.publication), 1)) : It("", !0),
                _.publicationDate ? (ee(), te("span", Cf, " · " + j(_.publicationDate), 1)) : It("", !0),
                _.extension ? (ee(), te("span", Of, " · Format: " + j(O(_.extension)), 1)) : It("", !0),
                _.shelf ? (ee(), te("span", Rf, " · Shelf: " + j(_.shelf), 1)) : It("", !0)
              ]),
              _.scanStatus !== "indexed" || _.scanError ? (ee(), te("p", If, [
                je(" scanStatus: " + j(_.scanStatus || "unknown"), 1),
                _.scanError ? (ee(), te("span", Pf, " · scanError: " + j(_.scanError), 1)) : It("", !0)
              ])) : It("", !0),
              L("div", Df, [
                H(_).length === 0 ? (ee(), te("span", Nf, "No Nextcloud tags")) : (ee(!0), te(xe, { key: 1 }, Rt(H(_), (B) => (ee(), te("span", {
                  key: B.id,
                  class: "library-tag"
                }, j(B.name), 1))), 128))
              ]),
              L("p", null, [
                L("a", {
                  href: _.openUrl
                }, j(Y(M)("library", "Read")), 9, Mf),
                D[8] || (D[8] = je(" · ", -1)),
                L("a", {
                  href: _.filesUrl
                }, j(Y(M)("library", "Show in Files")), 9, Lf),
                D[9] || (D[9] = je(" · ", -1)),
                L("a", {
                  href: _.downloadUrl
                }, j(Y(M)("library", "Download source")), 9, Ff),
                D[10] || (D[10] = je(" · ", -1)),
                L("a", {
                  href: _.detailsUrl
                }, j(Y(M)("library", "Details")), 9, Uf)
              ])
            ])
          ]))), 128))
        ]))
      ]),
      L("section", Hf, [
        D[11] || (D[11] = L("div", null, [
          L("h2", null, "Library"),
          L("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        L("div", kf, [
          L("a", {
            href: b.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, jf),
          v.value ? (ee(), te("a", {
            key: 0,
            href: v.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, $f)) : It("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function ge(e) {
  return String(e ?? "");
}
function _l(e) {
  return ge(e).toUpperCase();
}
function zf(e, t, n, r = ge) {
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
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), zf(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Bf(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", M("library", "Catalogue search and filters")), so(r, M("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, M("library", "Type"), "type", n.type, M("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, M("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, M("library", "Format"), "format", n.format, M("library", "All formats"), e.formats || [], _l), un(r, M("library", "Shelf"), "shelf", n.shelf, M("library", "All shelves"), e.shelves || []), un(r, M("library", "Scan status"), "status", n.status, M("library", "All scan statuses"), e.scanStatuses || []), un(r, M("library", "Sort"), "sort", n.sort || "title", M("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, M("library", "Page size"), "limit", t.limit || 100, M("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", M("library", "Apply catalogue filters")), s.textContent = M("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", M("library", "Clear catalogue filters")), i.textContent = M("library", "Clear"), r.append(s, i), r;
}
function Wf(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ge(e.settingsUrl || ""), i = ge(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = M("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = M("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(Bf(e, r));
  const f = document.createElement("nav");
  f.className = "library-pagination", f.setAttribute("aria-label", M("library", "Catalogue pagination"));
  const b = document.createElement("span");
  if (b.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, f.appendChild(b), l.appendChild(f), n.length === 0) {
    const v = document.createElement("div");
    v.className = "library-empty-content", v.setAttribute("role", "status");
    const O = document.createElement("h3");
    O.textContent = M("library", "No catalogue items match");
    const H = document.createElement("p");
    H.className = "library-muted", H.textContent = M("library", "Scan enabled roots or clear the active filters."), v.append(O, H), l.appendChild(v);
  } else {
    const v = document.createElement("div");
    v.className = "library-cover-gallery";
    for (const O of n) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const P = document.createElement("a");
      P.className = "library-cover-link", P.href = ge(O.openUrl || "#"), P.setAttribute("aria-label", `Read ${ge(O.title || "publication")}`);
      const D = document.createElement("img");
      D.className = "library-cover-image", D.src = ge(O.coverUrl || ""), D.alt = `Cover for ${ge(O.title || "publication")}`, D.loading = "lazy", P.appendChild(D);
      const _ = document.createElement("div");
      _.className = "library-cover-summary";
      const B = document.createElement("h3");
      if (B.textContent = ge(O.title || "Untitled publication"), _.appendChild(B), O.creators) {
        const fe = document.createElement("p");
        fe.className = "library-creator", fe.textContent = ge(O.creators), _.appendChild(fe);
      }
      const G = document.createElement("p");
      G.className = "library-muted", G.textContent = [
        ge(O.publicationType || "other"),
        O.extension ? `Format: ${_l(O.extension)}` : "",
        O.shelf ? `Shelf: ${ge(O.shelf)}` : ""
      ].filter(Boolean).join(" · "), _.appendChild(G);
      const N = document.createElement("p"), Z = document.createElement("a");
      Z.href = ge(O.openUrl || "#"), Z.textContent = M("library", "Read");
      const ye = document.createElement("a");
      ye.href = ge(O.filesUrl || "#"), ye.textContent = M("library", "Show in Files");
      const _e = document.createElement("a");
      _e.href = ge(O.downloadUrl || "#"), _e.textContent = M("library", "Download source");
      const we = document.createElement("a");
      we.href = ge(O.detailsUrl || "#"), we.textContent = M("library", "Details"), N.append(Z, document.createTextNode(" · "), ye, document.createTextNode(" · "), _e, document.createTextNode(" · "), we), _.appendChild(N), H.append(P, _), v.appendChild(H);
    }
    l.appendChild(v);
  }
  if (o.appendChild(l), s || i) {
    const v = document.createElement("section");
    v.className = "library-hero library-secondary-panel", v.setAttribute("aria-label", "Library settings");
    const O = document.createElement("div"), H = document.createElement("h2");
    H.textContent = "Library";
    const P = document.createElement("p");
    P.className = "library-lede", P.textContent = "Browse publications already stored in Nextcloud.", O.append(H, P);
    const D = document.createElement("div");
    if (D.className = "library-hero-actions", s) {
      const _ = document.createElement("a");
      _.href = s, _.className = "button secondary", _.setAttribute("aria-label", "Open Library settings"), _.textContent = "Library settings", D.appendChild(_);
    }
    if (i) {
      const _ = document.createElement("a");
      _.href = i, _.className = "button secondary", _.setAttribute("aria-label", "Export corrected metadata"), _.textContent = "Export corrected metadata", D.appendChild(_);
    }
    v.append(O, D), o.appendChild(v);
  }
  return o;
}
if (dr)
  try {
    Qc(Vf, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(Wf(ro));
  }
//# sourceMappingURL=library-main.mjs.map
