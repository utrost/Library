// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, pn = [], ut = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Re = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), z = Array.isArray, Nt = (e) => Bn(e) === "[object Map]", Zt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", Y = (e) => typeof e == "function", he = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", oo = (e) => (se(e) || Y(e)) && Y(e.then) && Y(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
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
), Tt = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
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
  if (z(e)) {
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
  if (n = ft(e), r = ft(t), n || r)
    return e === t;
  if (n = z(e), r = z(t), n || r)
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
const po = (e) => !!(e && e.__v_isRef === !0), U = (e) => he(e) ? e : e == null ? "" : z(e) || se(e) && (e.toString === lo || !Y(e.toString)) ? po(e) ? U(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Zt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : ft(t) ? Yr(t) : se(t) && !z(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let xe;
class Kl {
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
function Gl() {
  return xe;
}
let ae;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && (xe.active ? xe.effects.push(this) : this.flags &= -2);
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
    (t.version === 0 || Tt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
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
function vt() {
  Eo.push(Qe), Qe = !1;
}
function xt() {
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
function Et(e, t, n, r, s, i) {
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
    const c = z(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((g, v) => {
        (v === "length" || v === kn || !ft(v) && v >= d) && l(g);
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
  return t === e ? t : (Oe(t, "iterate", kn), /* @__PURE__ */ et(e) ? t : t.map(wt));
}
function Cr(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", kn), e;
}
function at(e, t) {
  return /* @__PURE__ */ Lt(e) ? _n(/* @__PURE__ */ Xt(e) ? wt(t) : t) : wt(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => at(this, e));
  },
  concat(...e) {
    return an(this).concat(
      ...e.map((t) => z(t) ? an(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = at(this, e[1]), e));
  },
  every(e, t) {
    return mt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return mt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => at(this, r)),
      arguments
    );
  },
  find(e, t) {
    return mt(
      this,
      "find",
      e,
      t,
      (n) => at(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return mt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return mt(
      this,
      "findLast",
      e,
      t,
      (n) => at(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return mt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return mt(this, "forEach", e, t, void 0, arguments);
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
    return mt(this, "map", e, t, void 0, arguments);
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
    return mt(this, "some", e, t, void 0, arguments);
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
    return Xr(this, "values", (e) => at(this, e));
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
function mt(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ et(e), c = o[t];
  if (c !== Jl[t]) {
    const g = c.apply(e, i);
    return l ? wt(g) : g;
  }
  let h = n;
  o !== e && (l ? h = function(g, v) {
    return n.call(this, at(e, g), v, e);
  } : n.length > 2 && (h = function(g, v) {
    return n.call(this, g, v, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ et(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, g) {
    return l && (l = !1, h = at(e, h)), n.call(this, h, at(e, d), g, e);
  }) : n.length > 3 && (o = function(h, d, g) {
    return n.call(this, h, d, g, e);
  }));
  const c = s[t](o, ...r);
  return l ? at(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ re(e);
  Oe(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), r[t](...n)) : s;
}
function vn(e, t, n = []) {
  vt(), Is();
  const r = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ps(), xt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), vo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Ql(e) {
  ft(e) || (e = String(e));
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
    const o = z(t);
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
    if ((ft(n) ? vo.has(n) : Zl(n)) || (s || Oe(t, "get", n), i))
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
    const o = z(t) && Cs(n);
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
    return t === /* @__PURE__ */ re(s) && c && (l ? Tt(r, i) && Et(t, "set", n, r) : Et(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Et(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ft(n) || !vo.has(n)) && Oe(t, "has", n), r;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      z(t) ? "length" : qt
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
    const s = this.__v_raw, i = /* @__PURE__ */ re(s), o = Nt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : wt;
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
          const { value: g, done: v } = h.next();
          return v ? { value: g, done: v } : {
            value: l ? [d(g[0]), d(g[1])] : d(g),
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
      e || (Tt(s, l) && Oe(o, "get", s), Oe(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : wt;
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
      return e || (Tt(s, l) && Oe(o, "has", s), Oe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ re(l), h = t ? gs : e ? _n : wt;
      return !e && Oe(c, "iterate", qt), l.forEach((d, g) => s.call(i, h(d), h(g), o));
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
        return o.has.call(i, c) || Tt(s, c) && o.has.call(i, s) || Tt(l, c) && o.has.call(i, l) || (i.add(c), Et(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ et(i) && !/* @__PURE__ */ Lt(i) && (i = /* @__PURE__ */ re(i));
        const o = /* @__PURE__ */ re(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ re(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? Tt(i, d) && Et(o, "set", s, i) : Et(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ re(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ re(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && Et(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ re(this), i = s.size !== 0, o = s.clear();
        return i && Et(
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
const wt = (e) => se(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => se(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return /* @__PURE__ */ Fe(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : G(Reflect.get(e, t, n)),
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
  return Y(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
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
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (D) => s ? D : /* @__PURE__ */ et(D) || s === !1 || s === 0 ? St(D, 1) : St(D);
  let d, g, v, O, j = !1, L = !1;
  if (/* @__PURE__ */ Fe(e) ? (g = () => e.value, j = /* @__PURE__ */ et(e)) : /* @__PURE__ */ Xt(e) ? (g = () => h(e), j = !0) : z(e) ? (L = !0, j = e.some((D) => /* @__PURE__ */ Xt(D) || /* @__PURE__ */ et(D)), g = () => e.map((D) => {
    if (/* @__PURE__ */ Fe(D))
      return D.value;
    if (/* @__PURE__ */ Xt(D))
      return h(D);
    if (Y(D))
      return c ? c(D, 2) : D();
  })) : Y(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (v) {
      vt();
      try {
        v();
      } finally {
        xt();
      }
    }
    const D = Wt;
    Wt = d;
    try {
      return c ? c(e, 3, [O]) : e(O);
    } finally {
      Wt = D;
    }
  } : g = ut, t && s) {
    const D = g, ee = s === !0 ? 1 / 0 : s;
    g = () => St(D(), ee);
  }
  const W = Gl(), F = () => {
    d.stop(), W && W.active && ws(W.effects, d);
  };
  if (i && t) {
    const D = t;
    t = (...ee) => {
      const ye = D(...ee);
      return F(), ye;
    };
  }
  let I = L ? new Array(e.length).fill(ir) : ir;
  const b = (D) => {
    if (!(!(d.flags & 1) || !d.dirty && !D))
      if (t) {
        const ee = d.run();
        if (D || s || j || (L ? ee.some((ye, _e) => Tt(ye, I[_e])) : Tt(ee, I))) {
          v && v();
          const ye = Wt;
          Wt = d;
          try {
            const _e = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              I === ir ? void 0 : L && I[0] === ir ? [] : I,
              O
            ];
            I = ee, c ? c(t, 3, _e) : (
              // @ts-expect-error
              t(..._e)
            );
          } finally {
            Wt = ye;
          }
        }
      } else
        d.run();
  };
  return l && l(b), d = new mo(g), d.scheduler = o ? () => o(b, !1) : b, O = (D) => ga(D, !1, d), v = d.onStop = () => {
    const D = pr.get(d);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const ee of D) ee();
      pr.delete(d);
    }
  }, t ? r ? b(!0) : I = d.run() : o ? o(b.bind(null, !0), !0) : d.run(), F.pause = d.pause.bind(d), F.resume = d.resume.bind(d), F.stop = F, F;
}
function St(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fe(e))
    St(e.value, t, n);
  else if (z(e))
    for (let r = 0; r < e.length; r++)
      St(e[r], t, n);
  else if (Zt(e) || Nt(e))
    e.forEach((r) => {
      St(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      St(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && St(e[r], t, n);
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
  if (Y(e)) {
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
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let g = 0; g < d.length; g++)
          if (d[g](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      vt(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), xt();
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
let lt = -1;
const hn = [];
let Dt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = lt + 1, n = Me.length;
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
    Dt && e.id === -1 ? Dt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  No();
}
function di(e, t, n = lt + 1) {
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
    for (lt = 0; lt < Me.length; lt++) {
      const t = Me[lt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; lt < Me.length; lt++) {
      const t = Me[lt];
      t && (t.flags &= -2);
    }
    lt = -1, Me.length = 0, Mo(), hr = null, (Me.length || hn.length) && Lo();
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
function It(e, t) {
  if (qe === null)
    return e;
  const n = Mr(qe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ie] = t[s];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && St(o), r.push({
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
    c && (vt(), tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), xt());
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
      return n && Y(t) ? t.call(r && r.proxy) : t;
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
      return O.stop = ut, O.resume = ut, O.pause = ut, O;
    }
  }
  const d = Le;
  l.call = (O, j, L) => tt(O, d, j, L);
  let g = !1;
  i === "post" ? l.scheduler = (O) => {
    $e(O, d && d.suspense);
  } : i !== "sync" && (g = !0, l.scheduler = (O, j) => {
    j ? O() : Fs(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), g && (O.flags |= 2, d && (O.id = d.uid, O.i = d));
  };
  const v = _a(e, t, l);
  return zn && (h ? h.push(v) : c && v()), v;
}
function xa(e, t, n) {
  const r = this.proxy, s = he(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Y(t) ? i = t : (i = t.handler, n = t);
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
      if (n.type !== Ct) {
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
    if (t & 32 && Y(n.default))
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
      (L, W) => Ln(
        L,
        t && (z(t) ? t[W] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ie ? l.refs = {} : l.refs, g = l.setupState, v = /* @__PURE__ */ re(g), O = g === ie ? io : (L) => pi(d, L) ? !1 : ne(v, L), j = (L, W) => !(W && pi(d, W));
  if (h != null && h !== c) {
    if (hi(t), he(h))
      d[h] = null, O(h) && (g[h] = null);
    else if (/* @__PURE__ */ Fe(h)) {
      const L = t;
      j(h, L.k) && (h.value = null), L.k && (d[L.k] = null);
    }
  }
  if (Y(c))
    Wn(c, l, 12, [o, d]);
  else {
    const L = he(c), W = /* @__PURE__ */ Fe(c);
    if (L || W) {
      const F = () => {
        if (e.f) {
          const I = L ? O(c) ? g[c] : d[c] : j() || !e.k ? c.value : d[e.k];
          if (s)
            z(I) && ws(I, i);
          else if (z(I))
            I.includes(i) || I.push(i);
          else if (L)
            d[c] = [i], O(c) && (g[c] = d[c]);
          else {
            const b = [i];
            j(c, e.k) && (c.value = b), e.k && (d[e.k] = b);
          }
        } else L ? (d[c] = o, O(c) && (g[c] = o)) : W && (j(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const I = () => {
          F(), gr.delete(e);
        };
        I.id = -1, gr.set(e, I), $e(I, n);
      } else
        hi(e), F();
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
      vt();
      const l = Kn(n), c = tt(t, n, e, o);
      return l(), xt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Ot = (e) => (t, n = Le) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Ot("bm"), Da = Ot("m"), Na = Ot(
  "bu"
), Ma = Ot("u"), La = Ot(
  "bum"
), Vo = Ot("um"), Fa = Ot(
  "sp"
), Ua = Ot("rtg"), Ha = Ot("rtc");
function ka(e, t = Le) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function gt(e, t, n, r) {
  let s;
  const i = n, o = z(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ Xt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ et(e), h = /* @__PURE__ */ Lt(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, g = e.length; d < g; d++)
      s[d] = t(
        c ? h ? _n(wt(e[d])) : wt(e[d]) : e[d],
        d,
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
        const d = l[c];
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
    let d, g;
    if (h)
      return t === "$attrs" && Oe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
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
  }, l) {
    let c;
    return !!(n[l] || e !== ie && l[0] !== "$" && ne(e, l) || es(t, l) || ne(i, l) || ne(r, l) || ne(Un, l) || ne(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
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
    watch: l,
    provide: c,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: g,
    mounted: v,
    beforeUpdate: O,
    updated: j,
    activated: L,
    deactivated: W,
    beforeDestroy: F,
    beforeUnmount: I,
    destroyed: b,
    unmounted: D,
    render: ee,
    renderTracked: ye,
    renderTriggered: _e,
    errorCaptured: we,
    serverPrefetch: fe,
    // public API
    expose: Ie,
    inheritAttrs: dt,
    // assets
    components: Ft,
    directives: nt,
    filters: en
  } = t;
  if (h && za(h, r, null), o)
    for (const ce in o) {
      const te = o[ce];
      Y(te) && (r[ce] = te.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    se(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, i)
    for (const ce in i) {
      const te = i[ce], Xe = Y(te) ? te.bind(n, n) : Y(te.get) ? te.get.bind(n, n) : ut, Ut = !Y(te) && Y(te.set) ? te.set.bind(n) : ut, ht = ot({
        get: Xe,
        set: Ut
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ge) => ht.value = Ge
      });
    }
  if (l)
    for (const ce in l)
      zo(l[ce], r, n, ce);
  if (c) {
    const ce = Y(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((te) => {
      Sa(te, ce[te]);
    });
  }
  d && gi(d, e, "c");
  function ve(ce, te) {
    z(te) ? te.forEach((Xe) => ce(Xe.bind(n))) : te && ce(te.bind(n));
  }
  if (ve(Pa, g), ve(Da, v), ve(Na, O), ve(Ma, j), ve(Oa, L), ve(Ra, W), ve(ka, we), ve(Ha, ye), ve(Ua, _e), ve(La, I), ve(Vo, D), ve(Fa, fe), z(Ie))
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
  ee && e.render === ut && (e.render = ee), dt != null && (e.inheritAttrs = dt), Ft && (e.components = Ft), nt && (e.directives = nt), fe && jo(e);
}
function za(e, t, n = ut) {
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
  if (he(e)) {
    const i = t[e];
    Y(i) && Zr(s, i);
  } else if (Y(e))
    Zr(s, e.bind(n));
  else if (se(e))
    if (z(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(i) && Zr(s, i, e);
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
      Y(e) ? e.call(this, this) : e,
      Y(t) ? t.call(this, this) : t
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
function Ya(e, t) {
  return function(r, s = null) {
    Y(r) || (r = Re({}, r)), s != null && !se(s) && (s = null);
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
      set config(d) {
      },
      use(d, ...g) {
        return o.has(d) || (d && Y(d.install) ? (o.add(d), d.install(h, ...g)) : Y(d) && (o.add(d), d(h, ...g))), h;
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
      mount(d, g, v) {
        if (!c) {
          const O = h._ceVNode || At(r, s);
          return O.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(O, d, v), c = !0, h._container = d, d.__vue_app__ = h, Mr(O.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (tt(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, g) {
        return i.provides[d] = g, h;
      },
      runWithContext(d) {
        const g = mn;
        mn = h;
        try {
          return d();
        } finally {
          mn = g;
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
  o && (o.trim && (s = n.map((d) => he(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
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
  if (!Y(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (l = !0, Re(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (se(e) && r.set(e, null), null) : (z(i) ? i.forEach((c) => o[c] = null) : Re(o, i), se(e) && r.set(e, o), o);
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
    renderCache: d,
    props: g,
    data: v,
    setupState: O,
    ctx: j,
    inheritAttrs: L
  } = e, W = mr(e);
  let F, I;
  try {
    if (n.shapeFlag & 4) {
      const D = s || r, ee = D;
      F = ct(
        h.call(
          ee,
          D,
          d,
          g,
          O,
          v,
          j
        )
      ), I = l;
    } else {
      const D = t;
      F = ct(
        D.length > 1 ? D(
          g,
          { attrs: l, slots: o, emit: c }
        ) : D(
          g,
          null
        )
      ), I = t.props ? l : Za(l);
    }
  } catch (D) {
    Jt.length = 0, Rr(D, e, 1), F = At(Ct);
  }
  let b = F;
  if (I && L !== !1) {
    const D = Object.keys(I), { shapeFlag: ee } = b;
    D.length && ee & 7 && (i && D.some(Ar) && (I = Qa(
      I,
      i
    )), b = bn(b, I, !1, !0));
  }
  if (n.dirs && (b = bn(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = Ir(b.type) && ko(b) || b;
    Us(D, n.transition);
  }
  return F = b, mr(W), F;
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
      const d = t.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        const v = d[g];
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
      const d = e.vnode.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        let v = d[g];
        if (Dr(e.emitsOptions, v))
          continue;
        const O = t[v];
        if (c)
          if (ne(i, v))
            O !== i[v] && (i[v] = O, h = !0);
          else {
            const j = Ze(v);
            s[j] = Es(
              c,
              l,
              j,
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
    let d;
    for (const g in l)
      (!t || // for camelCase
      !ne(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Qt(g)) === g || !ne(t, d))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[g] = Es(
        c,
        l,
        g,
        void 0,
        e,
        !0
      )) : delete s[g]);
    if (i !== l)
      for (const g in i)
        (!t || !ne(t, g)) && (delete i[g], h = !0);
  }
  h && Et(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Dn(c))
        continue;
      const h = t[c];
      let d;
      s && ne(s, d = Ze(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ re(n), h = l || ie;
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
    const l = ne(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Y(c)) {
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
  if (!Y(e)) {
    const d = (g) => {
      c = !0;
      const [v, O] = Zo(g, t, !0);
      Re(o, v), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return se(e) && r.set(e, pn), pn;
  if (z(i))
    for (let d = 0; d < i.length; d++) {
      const g = Ze(i[d]);
      Ei(g) && (o[g] = ie);
    }
  else if (i)
    for (const d in i) {
      const g = Ze(d);
      if (Ei(g)) {
        const v = i[d], O = o[g] = z(v) || Y(v) ? { type: v } : Re({}, v), j = O.type;
        let L = !1, W = !0;
        if (z(j))
          for (let F = 0; F < j.length; ++F) {
            const I = j[F], b = Y(I) && I.name;
            if (b === "Boolean") {
              L = !0;
              break;
            } else b === "String" && (W = !1);
          }
        else
          L = Y(j) && j.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = L, O[
          1
          /* shouldCastTrue */
        ] = W, (L || ne(O, "default")) && l.push(g);
      }
    }
  const h = [o, l];
  return se(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => z(e) ? e.map(ct) : [ct(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ks(s)) continue;
    const i = e[s];
    if (Y(i))
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
    setElementText: d,
    parentNode: g,
    nextSibling: v,
    setScopeId: O = ut,
    insertStaticContent: j
  } = e, L = (u, f, m, S = null, _ = null, T = null, x = void 0, w = null, C = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (S = tn(u), Ge(u, _, T, !0), u = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: y, ref: $, shapeFlag: R } = f;
    switch (y) {
      case Nr:
        W(u, f, m, S);
        break;
      case Ct:
        F(u, f, m, S);
        break;
      case ns:
        u == null && I(f, m, S, x);
        break;
      case Se:
        Ft(
          u,
          f,
          m,
          S,
          _,
          T,
          x,
          w,
          C
        );
        break;
      default:
        R & 1 ? ee(
          u,
          f,
          m,
          S,
          _,
          T,
          x,
          w,
          C
        ) : R & 6 ? nt(
          u,
          f,
          m,
          S,
          _,
          T,
          x,
          w,
          C
        ) : (R & 64 || R & 128) && y.process(
          u,
          f,
          m,
          S,
          _,
          T,
          x,
          w,
          C,
          kt
        );
    }
    $ != null && _ ? Ln($, u && u.ref, T, f || u, !f) : $ == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, W = (u, f, m, S) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        S
      );
    else {
      const _ = f.el = u.el;
      f.children !== u.children && h(_, f.children);
    }
  }, F = (u, f, m, S) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      S
    ) : f.el = u.el;
  }, I = (u, f, m, S) => {
    [u.el, u.anchor] = j(
      u.children,
      f,
      m,
      S,
      u.el,
      u.anchor
    );
  }, b = ({ el: u, anchor: f }, m, S) => {
    let _;
    for (; u && u !== f; )
      _ = v(u), r(u, m, S), u = _;
    r(f, m, S);
  }, D = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = v(u), s(u), u = m;
    s(f);
  }, ee = (u, f, m, S, _, T, x, w, C) => {
    if (f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"), u == null)
      ye(
        f,
        m,
        S,
        _,
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
          f,
          _,
          T,
          x,
          w,
          C
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (u, f, m, S, _, T, x, w) => {
    let C, y;
    const { props: $, shapeFlag: R, transition: k, dirs: V } = u;
    if (C = u.el = o(
      u.type,
      T,
      $ && $.is,
      $
    ), R & 8 ? d(C, u.children) : R & 16 && we(
      u.children,
      C,
      null,
      S,
      _,
      ts(u, T),
      x,
      w
    ), V && Vt(u, null, S, "created"), _e(C, u, u.scopeId, x, S), $) {
      for (const X in $)
        X !== "value" && !Dn(X) && i(C, X, null, $[X], T, S);
      "value" in $ && i(C, "value", null, $.value, T), (y = $.onVnodeBeforeMount) && it(y, S, u);
    }
    V && Vt(u, null, S, "beforeMount");
    const K = uc(_, k);
    K && k.beforeEnter(C), r(C, f, m), ((y = $ && $.onVnodeMounted) || K || V) && $e(() => {
      y && it(y, S, u), K && k.enter(C), V && Vt(u, null, S, "mounted");
    }, _);
  }, _e = (u, f, m, S, _) => {
    if (m && O(u, m), S)
      for (let T = 0; T < S.length; T++)
        O(u, S[T]);
    if (_) {
      let T = _.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const x = _.vnode;
        _e(
          u,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, we = (u, f, m, S, _, T, x, w, C = 0) => {
    for (let y = C; y < u.length; y++) {
      const $ = u[y] = w ? yt(u[y]) : ct(u[y]);
      L(
        null,
        $,
        f,
        m,
        S,
        _,
        T,
        x,
        w
      );
    }
  }, fe = (u, f, m, S, _, T, x) => {
    const w = f.el = u.el;
    let { patchFlag: C, dynamicChildren: y, dirs: $ } = f;
    C |= u.patchFlag & 16;
    const R = u.props || ie, k = f.props || ie;
    let V;
    if (m && zt(m, !1), (V = k.onVnodeBeforeUpdate) && it(V, m, f, u), $ && Vt(f, u, m, "beforeUpdate"), m && zt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (C = 0, x = !1, y = null), (R.innerHTML && k.innerHTML == null || R.textContent && k.textContent == null) && d(w, ""), y ? Ie(
      u.dynamicChildren,
      y,
      w,
      m,
      S,
      ts(f, _),
      T
    ) : x || te(
      u,
      f,
      w,
      null,
      m,
      S,
      ts(f, _),
      T,
      !1
    ), C > 0) {
      if (C & 16)
        dt(w, R, k, m, _);
      else if (C & 2 && R.class !== k.class && i(w, "class", null, k.class, _), C & 4 && i(w, "style", R.style, k.style, _), C & 8) {
        const K = f.dynamicProps;
        for (let X = 0; X < K.length; X++) {
          const q = K[X], ue = R[q], pe = k[q];
          (pe !== ue || q === "value") && i(w, q, ue, pe, _, m);
        }
      }
      C & 1 && u.children !== f.children && d(w, f.children);
    } else !x && y == null && dt(w, R, k, m, _);
    ((V = k.onVnodeUpdated) || $) && $e(() => {
      V && it(V, m, f, u), $ && Vt(f, u, m, "updated");
    }, S);
  }, Ie = (u, f, m, S, _, T, x) => {
    for (let w = 0; w < f.length; w++) {
      const C = u[w], y = f[w], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(C, y) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      L(
        C,
        y,
        $,
        null,
        S,
        _,
        T,
        x,
        !0
      );
    }
  }, dt = (u, f, m, S, _) => {
    if (f !== m) {
      if (f !== ie)
        for (const T in f)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            _,
            S
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const x = m[T], w = f[T];
        x !== w && T !== "value" && i(u, T, w, x, _, S);
      }
      "value" in m && i(u, "value", f.value, m.value, _);
    }
  }, Ft = (u, f, m, S, _, T, x, w, C) => {
    const y = f.el = u ? u.el : l(""), $ = f.anchor = u ? u.anchor : l("");
    let { patchFlag: R, dynamicChildren: k, slotScopeIds: V } = f;
    V && (w = w ? w.concat(V) : V), u == null ? (r(y, m, S), r($, m, S), we(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      $,
      _,
      T,
      x,
      w,
      C
    )) : R > 0 && R & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === k.length ? (Ie(
      u.dynamicChildren,
      k,
      m,
      _,
      T,
      x,
      w
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
      T,
      x,
      w,
      C
    );
  }, nt = (u, f, m, S, _, T, x, w, C) => {
    f.slotScopeIds = w, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      S,
      x,
      C
    ) : en(
      f,
      m,
      S,
      _,
      T,
      x,
      C
    ) : pt(u, f, C);
  }, en = (u, f, m, S, _, T, x) => {
    const w = u.component = yc(
      u,
      S,
      _
    );
    if (Hs(u) && (w.ctx.renderer = kt), Ec(w, !1, x), w.asyncDep) {
      if (_ && _.registerDep(w, ve, x), !u.el) {
        const C = w.subTree = At(Ct);
        F(null, C, f, m), u.placeholder = C.el;
      }
    } else
      ve(
        w,
        u,
        f,
        m,
        _,
        T,
        x
      );
  }, pt = (u, f, m) => {
    const S = f.component = u.component;
    if (ec(u, f, m))
      if (S.asyncDep && !S.asyncResolved) {
        ce(S, f, m);
        return;
      } else
        S.next = f, S.update();
    else
      f.el = u.el, S.vnode = f;
  }, ve = (u, f, m, S, _, T, x) => {
    const w = () => {
      if (u.isMounted) {
        let { next: R, bu: k, u: V, parent: K, vnode: X } = u;
        {
          const Ue = rl(u);
          if (Ue) {
            R && (R.el = X.el, ce(u, R, x)), Ue.asyncDep.then(() => {
              $e(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let q = R, ue;
        zt(u, !1), R ? (R.el = X.el, ce(u, R, x)) : R = X, k && cr(k), (ue = R.props && R.props.onVnodeBeforeUpdate) && it(ue, K, R, X), zt(u, !0);
        const pe = yi(u), Pe = u.subTree;
        u.subTree = pe, L(
          Pe,
          pe,
          // parent may have changed if it's in a teleport
          g(Pe.el),
          // anchor may have changed if it's in a fragment
          tn(Pe),
          u,
          _,
          T
        ), R.el = pe.el, q === null && tc(u, pe.el), V && $e(V, _), (ue = R.props && R.props.onVnodeUpdated) && $e(
          () => it(ue, K, R, X),
          _
        );
      } else {
        let R;
        const { el: k, props: V } = f, { bm: K, m: X, parent: q, root: ue, type: pe } = u, Pe = Fn(f);
        zt(u, !1), K && cr(K), !Pe && (R = V && V.onVnodeBeforeMount) && it(R, q, f), zt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            pe,
            u.parent ? u.parent.type : void 0
          );
          const Ue = u.subTree = yi(u);
          L(
            null,
            Ue,
            m,
            S,
            u,
            _,
            T
          ), f.el = Ue.el;
        }
        if (X && $e(X, _), !Pe && (R = V && V.onVnodeMounted)) {
          const Ue = f;
          $e(
            () => it(R, q, Ue),
            _
          );
        }
        (f.shapeFlag & 256 || q && Fn(q.vnode) && q.vnode.shapeFlag & 256) && u.a && $e(u.a, _), u.isMounted = !0, f = m = S = null;
      }
    };
    u.scope.on();
    const C = u.effect = new mo(w);
    u.scope.off();
    const y = u.update = C.run.bind(C), $ = u.job = C.runIfDirty.bind(C);
    $.i = u, $.id = u.uid, C.scheduler = () => Fs($), zt(u, !0), y();
  }, ce = (u, f, m) => {
    f.component = u;
    const S = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, S, m), lc(u, f.children, m), vt(), di(u), xt();
  }, te = (u, f, m, S, _, T, x, w, C = !1) => {
    const y = u && u.children, $ = u ? u.shapeFlag : 0, R = f.children, { patchFlag: k, shapeFlag: V } = f;
    if (k > 0) {
      if (k & 128) {
        Ut(
          y,
          R,
          m,
          S,
          _,
          T,
          x,
          w,
          C
        );
        return;
      } else if (k & 256) {
        Xe(
          y,
          R,
          m,
          S,
          _,
          T,
          x,
          w,
          C
        );
        return;
      }
    }
    V & 8 ? ($ & 16 && Ht(y, _, T), R !== y && d(m, R)) : $ & 16 ? V & 16 ? Ut(
      y,
      R,
      m,
      S,
      _,
      T,
      x,
      w,
      C
    ) : Ht(y, _, T, !0) : ($ & 8 && d(m, ""), V & 16 && we(
      R,
      m,
      S,
      _,
      T,
      x,
      w,
      C
    ));
  }, Xe = (u, f, m, S, _, T, x, w, C) => {
    u = u || pn, f = f || pn;
    const y = u.length, $ = f.length, R = Math.min(y, $);
    let k;
    for (k = 0; k < R; k++) {
      const V = f[k] = C ? yt(f[k]) : ct(f[k]);
      L(
        u[k],
        V,
        m,
        null,
        _,
        T,
        x,
        w,
        C
      );
    }
    y > $ ? Ht(
      u,
      _,
      T,
      !0,
      !1,
      R
    ) : we(
      f,
      m,
      S,
      _,
      T,
      x,
      w,
      C,
      R
    );
  }, Ut = (u, f, m, S, _, T, x, w, C) => {
    let y = 0;
    const $ = f.length;
    let R = u.length - 1, k = $ - 1;
    for (; y <= R && y <= k; ) {
      const V = u[y], K = f[y] = C ? yt(f[y]) : ct(f[y]);
      if (xn(V, K))
        L(
          V,
          K,
          m,
          null,
          _,
          T,
          x,
          w,
          C
        );
      else
        break;
      y++;
    }
    for (; y <= R && y <= k; ) {
      const V = u[R], K = f[k] = C ? yt(f[k]) : ct(f[k]);
      if (xn(V, K))
        L(
          V,
          K,
          m,
          null,
          _,
          T,
          x,
          w,
          C
        );
      else
        break;
      R--, k--;
    }
    if (y > R) {
      if (y <= k) {
        const V = k + 1, K = V < $ ? f[V].el : S;
        for (; y <= k; )
          L(
            null,
            f[y] = C ? yt(f[y]) : ct(f[y]),
            m,
            K,
            _,
            T,
            x,
            w,
            C
          ), y++;
      }
    } else if (y > k)
      for (; y <= R; )
        Ge(u[y], _, T, !0), y++;
    else {
      const V = y, K = y, X = /* @__PURE__ */ new Map();
      for (y = K; y <= k; y++) {
        const Ee = f[y] = C ? yt(f[y]) : ct(f[y]);
        Ee.key != null && X.set(Ee.key, y);
      }
      let q, ue = 0;
      const pe = k - K + 1;
      let Pe = !1, Ue = 0;
      const Ye = new Array(pe);
      for (y = 0; y < pe; y++) Ye[y] = 0;
      for (y = V; y <= R; y++) {
        const Ee = u[y];
        if (ue >= pe) {
          Ge(Ee, _, T, !0);
          continue;
        }
        let ze;
        if (Ee.key != null)
          ze = X.get(Ee.key);
        else
          for (q = K; q <= k; q++)
            if (Ye[q - K] === 0 && xn(Ee, f[q])) {
              ze = q;
              break;
            }
        ze === void 0 ? Ge(Ee, _, T, !0) : (Ye[ze - K] = y + 1, ze >= Ue ? Ue = ze : Pe = !0, L(
          Ee,
          f[ze],
          m,
          null,
          _,
          T,
          x,
          w,
          C
        ), ue++);
      }
      const jt = Pe ? fc(Ye) : pn;
      for (q = jt.length - 1, y = pe - 1; y >= 0; y--) {
        const Ee = K + y, ze = f[Ee], Tn = f[Ee + 1], En = Ee + 1 < $ ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : S;
        Ye[y] === 0 ? L(
          null,
          ze,
          m,
          En,
          _,
          T,
          x,
          w,
          C
        ) : Pe && (q < 0 || y !== jt[q] ? ht(ze, m, En, 2) : q--);
      }
    }
  }, ht = (u, f, m, S, _ = null) => {
    const { el: T, type: x, transition: w, children: C, shapeFlag: y } = u;
    if (y & 6) {
      ht(u.component.subTree, f, m, S);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, S);
      return;
    }
    if (y & 64) {
      x.move(u, f, m, kt);
      return;
    }
    if (x === Se) {
      r(T, f, m);
      for (let R = 0; R < C.length; R++)
        ht(C[R], f, m, S);
      r(u.anchor, f, m);
      return;
    }
    if (x === ns) {
      b(u, f, m);
      return;
    }
    if (S !== 2 && y & 1 && w)
      if (S === 0)
        w.persisted && !T[Qr] ? r(T, f, m) : (w.beforeEnter(T), r(T, f, m), $e(() => w.enter(T), _));
      else {
        const { leave: R, delayLeave: k, afterLeave: V } = w, K = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, X = () => {
          const q = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), w.persisted && !q ? K() : R(T, () => {
            K(), V && V();
          });
        };
        k ? k(T, K, X) : X();
      }
    else
      r(T, f, m);
  }, Ge = (u, f, m, S = !1, _ = !1) => {
    const {
      type: T,
      props: x,
      ref: w,
      children: C,
      dynamicChildren: y,
      shapeFlag: $,
      patchFlag: R,
      dirs: k,
      cacheIndex: V,
      memo: K
    } = u;
    if (R === -2 && (_ = !1), w != null && (vt(), Ln(w, null, m, u, !0), xt()), V != null && (f.renderCache[V] = void 0), $ & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const X = $ & 1 && k, q = !Fn(u);
    let ue;
    if (q && (ue = x && x.onVnodeBeforeUnmount) && it(ue, f, u), $ & 6)
      Lr(u.component, m, S);
    else {
      if ($ & 128) {
        u.suspense.unmount(m, S);
        return;
      }
      X && Vt(u, null, f, "beforeUnmount"), $ & 64 ? u.type.remove(
        u,
        f,
        m,
        kt,
        S
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Se || R > 0 && R & 64) ? Ht(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === Se && R & 384 || !_ && $ & 16) && Ht(C, f, m), S && Gn(u);
    }
    const pe = K != null && V == null;
    (q && (ue = x && x.onVnodeUnmounted) || X || pe) && $e(() => {
      ue && it(ue, f, u), X && Vt(u, null, f, "unmounted"), pe && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: S, transition: _ } = u;
    if (f === Se) {
      oe(m, S);
      return;
    }
    if (f === ns) {
      D(u);
      return;
    }
    const T = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: w } = _, C = () => x(m, T);
      w ? w(u.el, T, C) : C();
    } else
      T();
  }, oe = (u, f) => {
    let m;
    for (; u !== f; )
      m = v(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: S, scope: _, job: T, subTree: x, um: w, m: C, a: y } = u;
    Si(C), Si(y), S && cr(S), _.stop(), T && (T.flags |= 8, Ge(x, u, f, m)), w && $e(w, f), $e(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ht = (u, f, m, S = !1, _ = !1, T = 0) => {
    for (let x = T; x < u.length; x++)
      Ge(u[x], f, m, S, _);
  }, tn = (u) => {
    if (u.shapeFlag & 6)
      return tn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = v(u.anchor || u.el), m = f && f[wa];
    return m ? v(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let S;
    u == null ? f._vnode && (Ge(f._vnode, null, null, !0), S = f._vnode.component) : L(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(S), Mo(), yn = !1);
  }, kt = {
    p: L,
    um: Ge,
    m: ht,
    r: Gn,
    mt: en,
    mc: we,
    pc: te,
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
  if (z(r) && z(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = yt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = yt(l)), l.el = o.el), l.type === Ct && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const Se = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), Ct = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let Ke = null;
function J(e = !1) {
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
function Z(e, t, n, r, s, i) {
  return ll(
    M(
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
    At(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ Fe(e) || Y(e) ? { i: qe, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, r = 0, s = null, i = e === Se ? 0 : 1, o = !1, l = !1) {
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
const At = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Ct), al(e)) {
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
    l && !he(l) && (t.class = Rs(l)), se(c) && (/* @__PURE__ */ Ls(c) && !z(c) && (c = Re({}, c)), t.style = Os(c));
  }
  const o = he(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : se(e) ? 4 : Y(e) ? 2 : 0;
  return M(
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
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, h = t ? gc(s || {}, t) : s, d = {
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
    patchFlag: t && e.type !== Se ? o === -1 ? 16 : o | 16 : o,
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
    d,
    c.clone(d)
  ), d;
}
function je(e = " ", t = 0) {
  return At(Nr, null, e, t);
}
function _t(e = "", t = !1) {
  return t ? (J(), pc(Ct, null, e)) : At(Ct, null, e);
}
function ct(e) {
  return e == null || typeof e == "boolean" ? At(Ct) : z(e) ? At(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? yt(e) : At(Nr, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
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
      !s && !Xo(t) ? t._ctx = qe : s === 3 && qe && (qe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
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
        o && i !== o && !(z(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
    vt();
    const s = e.setupContext = r.length > 1 ? vc(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (xt(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
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
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ut);
  {
    const s = Kn(e);
    vt();
    try {
      Va(e);
    } finally {
      xt(), s();
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
  return Y(e) && "__vccOpts" in e;
}
const ot = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, Ci = bt && /* @__PURE__ */ bt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? bt.createElementNS(Cc, e) : t === "mathml" ? bt.createElementNS(Oc, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && he(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
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
    if (z(s)) {
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
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && Y(n));
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
  return z(t) ? (n) => cr(t, n) : t;
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
        i ? z(o) ? s.slice() : s : o
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
  if (!n || z(e)) return Mt(e, t);
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
    !Y(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
    } catch (d) {
      h = !0, s = d;
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
let Te = Object.freeze, Ae = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, vs = hl.construct;
Te || (Te = function(t) {
  return t;
});
Ae || (Ae = function(t) {
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
function Q(e, t) {
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
const Ki = Te(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Te(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Te(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Te(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Te(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Te(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Te(["#text"]), Yi = Te(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Te(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Te(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ae(/{{[\w\W]*|^[\w\W]*}}/g), Au = Ae(/<%[\w\W]*|^[\w\W]*%>/g), vu = Ae(/\${[\w\W]*/g), xu = Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ae(/^aria-[\-\w]+$/), Xi = Ae(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = Ae(/^(?:\w+script|data):/i), Ou = Ae(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = Ae(/^html$/i), Iu = Ae(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Ae(/<[/\w!]/g), Zi = Ae(/<[/\w]/g), Pu = Ae(/<\/no(script|embed|frames)/i), Du = Ae(/\/>/i), Be = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Te(Q({}, ml)), Mu = (function() {
  const e = {};
  return Kt(ml, (t) => {
    e[t] = Ae(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
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
  return Ve(t, n) && gn(t[n]) ? Q(s.base ? We(s.base) : {}, t[n], s.transform) : r;
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
  const d = e.DOMParser, g = e.trustedTypes, v = l.prototype, O = Je(v, "cloneNode"), j = Je(v, "remove"), L = Je(v, "nextSibling"), W = Je(v, "childNodes"), F = Je(v, "parentNode"), I = Je(v, "shadowRoot"), b = Je(v, "attributes"), D = o && o.prototype ? Je(o.prototype, "nodeType") : null, ee = o && o.prototype ? Je(o.prototype, "nodeName") : null, ye = o && o.prototype ? Je(o.prototype, "ownerDocument") : null, _e = function(a) {
    return D ? D(a) : a.nodeType;
  }, we = function(a) {
    return ee ? ee(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const A = n.createElement("template");
    A.content && A.content.ownerDocument && (n = A.content.ownerDocument);
  }
  let fe, Ie = "", dt, Ft = !1, nt = 0;
  const en = function() {
    if (nt > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, pt = function(a) {
    en(), nt++;
    try {
      return fe.createHTML(a);
    } finally {
      nt--;
    }
  }, ve = function(a) {
    en(), nt++;
    try {
      return fe.createScriptURL(a);
    } finally {
      nt--;
    }
  }, ce = function() {
    return Ft || (dt = Fu(g, s), Ft = !0), dt;
  }, te = n, Xe = te.implementation, Ut = te.createNodeIterator, ht = te.createDocumentFragment, Ge = te.getElementsByTagName, Gn = r.importNode;
  let oe = Qi();
  t.isSupported = typeof pl == "function" && typeof F == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = Su, Ht = Au, tn = vu, yn = xu, Yn = wu, kt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const S = Q({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let _ = null;
  const T = Q({}, [...Yi, ...us, ...qi, ...ar]);
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
  let $ = !0, R = !0, k = !1, V = !0, K = !1, X = !0, q = !1, ue = !1, pe = null, Pe = null, Ue = !1, Ye = !1, jt = !1, Ee = !1, ze = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, Hr = !1, nn = {}, rn = null;
  const $s = Q({}, [
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
  const zs = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = Q({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", rt = "http://www.w3.org/1999/xhtml";
  let sn = rt, kr = !1, jr = null;
  const bl = Q({}, [qn, Xn, rt], os), Ks = Te(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = Q({}, Ks);
  const Gs = Te(["annotation-xml"]);
  let Vr = Q({}, Gs);
  const yl = Q({}, ["title", "style", "font", "a", "script"]);
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
    }), _ = Pt(a, "ALLOWED_ATTR", T, {
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
    }), nn = Ve(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? We(a.USE_PROFILES) : a.USE_PROFILES : !1, $ = a.ALLOW_ARIA_ATTR !== !1, R = a.ALLOW_DATA_ATTR !== !1, k = a.ALLOW_UNKNOWN_PROTOCOLS || !1, V = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, K = a.SAFE_FOR_TEMPLATES || !1, X = a.SAFE_FOR_XML !== !1, q = a.WHOLE_DOCUMENT || !1, Ye = a.RETURN_DOM || !1, jt = a.RETURN_DOM_FRAGMENT || !1, Ee = a.RETURN_TRUSTED_TYPE || !1, Ue = a.FORCE_BODY || !1, ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, sn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : rt, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Q({}, Ks)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => Q({}, Gs)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (x = dn(null), Ve(p, "tagNameCheck") && Ys(p.tagNameCheck) && (x.tagNameCheck = p.tagNameCheck), Ve(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (x.attributeNameCheck = p.attributeNameCheck), Ve(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ae(x), K && (R = !1), jt && (Ye = !0), nn && (m = Q({}, Gi), _ = dn(null), nn.html === !0 && (Q(m, Ki), Q(_, Yi)), nn.svg === !0 && (Q(m, ls), Q(_, us), Q(_, ar)), nn.svgFilters === !0 && (Q(m, as), Q(_, us), Q(_, ar)), nn.mathMl === !0 && (Q(m, cs), Q(_, qi), Q(_, ar))), y.tagCheck = null, y.attributeCheck = null, Ve(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === S && (m = We(m)), Q(m, a.ADD_TAGS, me))), Ve(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (_ === T && (_ = We(_)), Q(_, a.ADD_ATTR, me))), Ve(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (rn === $s && (rn = We(rn)), Q(rn, a.ADD_FORBID_CONTENTS, me)), Ur && (m["#text"] = !0), q && Q(m, ["html", "head", "body"]), m.table && (Q(m, ["tbody"]), delete w.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = fe;
      fe = a.TRUSTED_TYPES_POLICY;
      try {
        Ie = pt("");
      } catch (P) {
        throw fe = E, P;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (fe = void 0, Ie = "") : (fe === void 0 && (fe = ce()), fe && typeof Ie == "string" && (Ie = pt("")));
    Te && Te(a), on = a;
  }, qs = Q({}, [...ls, ...as, ...Tu]), Xs = Q({}, [...cs, ...Eu]), Al = function(a, p, E) {
    return p.namespaceURI === rt ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, vl = function(a, p, E) {
    return p.namespaceURI === rt ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = F(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: sn,
      tagName: "template"
    });
    const E = Pn(a.tagName), P = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? Al(E, p, P) : a.namespaceURI === qn ? vl(E, p, P) : a.namespaceURI === rt ? xl(E, p, P) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Rt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      F(a).removeChild(a);
    } catch {
      if (j(a), !F(a))
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
    const p = W(a);
    if (p) {
      const P = [];
      Kt(p, (H) => {
        wn(P, H);
      }), Kt(P, (H) => {
        try {
          j(H);
        } catch {
        }
      });
    }
    const E = b(a);
    if (E)
      for (let P = E.length - 1; P >= 0; --P) {
        const H = E[P], B = H && H.name;
        typeof B == "string" && Js(a, H, B);
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
          Rt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = b(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const P = p[E], H = P && P.name;
        typeof H != "string" || _[me(H)] || Js(a, P, H);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      _e(E) === Be.element && Cl(E);
      const H = W(E);
      if (H)
        for (let B = H.length - 1; B >= 0; --B)
          p.push(H[B]);
    }
  }, Zs = function(a, p) {
    return X ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!X)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), P = _e(E);
      if (P === Be.processingInstruction || P === Be.comment && Ce(Zi, E.data)) {
        try {
          j(E);
        } catch {
        }
        continue;
      }
      if (P === Be.element) {
        const B = E, le = me(we(E));
        try {
          B.hasAttribute && B.hasAttribute("patchsrc") && B.removeAttribute("patchsrc"), B.hasAttribute && B.hasAttribute("for") && Zs("for", le) && B.removeAttribute("for");
        } catch {
        }
      }
      const H = W(E);
      if (H)
        for (let B = H.length - 1; B >= 0; --B)
          p.push(H[B]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (Ue)
      a = "<remove></remove>" + a;
    else {
      const B = Vi(a, /^[\r\n\t ]+/);
      E = B && B[0];
    }
    Sn === "application/xhtml+xml" && sn === rt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const P = fe ? pt(a) : a;
    if (sn === rt)
      try {
        p = new d().parseFromString(P, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(sn, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Ie : P;
      } catch {
      }
    }
    const H = p.body || p.documentElement;
    return a && E && H.insertBefore(n.createTextNode(E), H.childNodes[0] || null), sn === rt ? Ge.call(p, q ? "html" : "body")[0] : q ? p.documentElement : H;
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
    const E = ye ? ye(a) : a.ownerDocument, P = Ut.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = P.nextNode();
    for (; H; )
      H.data = Qn(H.data), H = P.nextNode();
    const B = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    B && Kt(B, (le) => {
      ln(le.content) && Br(le.content);
    });
  }, er = function(a) {
    const p = ee ? ee(a) : null;
    return typeof p != "string" || me(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== b(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== D(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== W(a);
  }, ln = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return D(a) === Be.documentFragment;
    } catch {
      return !1;
    }
  }, An = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof D(a) == "number";
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
      for (var E = arguments.length, P = new Array(E > 2 ? E - 2 : 0), H = 2; H < E; H++)
        P[H - 2] = arguments[H];
      return !!a(p, ...P);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!w[p] && ii(p) && tr(x.tagNameCheck, p))
      return !1;
    if (Ur && !rn[p]) {
      const P = F(a), H = W(a);
      if (H && P) {
        const B = H.length;
        for (let le = B - 1; le >= 0; --le) {
          const de = a === E ? O(H[le], !0) : H[le];
          P.insertBefore(de, L(a));
        }
      }
    }
    return Rt(a), !0;
  }, ti = function(a, p, E, P) {
    return a.length === 0 ? p : p === E || p === P ? We(p) : p;
  }, ni = function(a, p) {
    return a === p || F(a) !== null ? !1 : (Hr && Zn(a), !0);
  }, ri = function(a, p) {
    if (st(oe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Rt(a), !0;
    const E = me(we(a));
    if (m = ti(oe.uponSanitizeElement, m, S, pe), st(oe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Rt(a), !0;
    if (w[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const H = Il(a, E, p);
      return H === !1 && st(oe.afterSanitizeElements, a, null), H;
    }
    if (_e(a) === Be.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Ce(Pu, a.innerHTML))
      return Rt(a), !0;
    if (K && a.nodeType === Be.text) {
      const H = Qn(a.textContent);
      a.textContent !== H && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = H);
    }
    return st(oe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (C[p] || Zs(p, a) || ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const P = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return R && Ce(yn, p) || $ && Ce(Yn, p) ? !0 : P ? Bs[p] || Ce(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || k && !Ce(kt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(x.tagNameCheck, a) && tr(x.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && x.allowCustomizedBuiltInElements && tr(x.tagNameCheck, E)
    );
  }, Pl = Q({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Ce(u, a);
  }, Dl = function(a, p, E, P) {
    if (fe && typeof g == "object" && typeof g.getAttributeType == "function" && !E)
      switch (g.getAttributeType(a, p)) {
        case "TrustedHTML":
          return pt(P);
        case "TrustedScriptURL":
          return ve(P);
      }
    return P;
  }, Nl = function(a, p, E, P) {
    try {
      E ? a.setAttributeNS(E, p, P) : a.setAttribute(p, P), er(a) ? Rt(a) : $i(t.removed);
    } catch {
      $t(p, a);
    }
  }, oi = function(a) {
    st(oe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    _ = ti(oe.uponSanitizeAttribute, _, T, Pe);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let P = p.length;
    const H = me(a.nodeName);
    for (; P--; ) {
      const B = p[P], le = B.name, de = B.namespaceURI, He = B.value, ke = me(le), Kr = He;
      let De = le === "value" ? Kr : pu(Kr);
      if (E.attrName = ke, E.attrValue = De, E.keepAttr = !0, E.forceKeepAttr = void 0, st(oe.uponSanitizeAttribute, a, E), De = E.attrValue, Tn && (ke === "id" || ke === "name") && zi(De, En) !== 0 && ($t(le, a, B), De = En + De), X && Ce(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, De)) {
        $t(le, a, B);
        continue;
      }
      if (ke === "attributename" && Vi(De, "href")) {
        $t(le, a, B);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          $t(le, a, B);
          continue;
        }
        if (!V && Ce(Du, De)) {
          $t(le, a, B);
          continue;
        }
        if (K && (De = Qn(De)), !si(H, ke, De)) {
          $t(le, a, B);
          continue;
        }
        De = Dl(H, ke, de, De), De !== Kr && Nl(a, le, de, De);
      }
    }
    st(oe.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (st(oe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (st(oe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), ln(p.content) && nr(p.content), _e(p) === Be.element) {
        const P = I(p);
        ln(P) && (Wr(P), nr(P));
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
      const P = E.node, B = _e(P) === Be.element, le = W(P);
      if (le)
        for (let de = le.length - 1; de >= 0; --de)
          p.push({
            node: le[de],
            shadow: null
          });
      if (B) {
        const de = ee ? ee(P) : null;
        if (typeof de == "string" && me(de) === "template") {
          const He = P.content;
          ln(He) && p.push({
            node: He,
            shadow: null
          });
        }
      }
      if (B) {
        const de = I(P);
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
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, P = null, H = null;
    if (kr = !A, kr && (A = "<!-->"), typeof A != "string" && !An(A) && (A = bu(A), typeof A != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return A;
    ue ? (m = pe, _ = Pe) : zr(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (m = We(m)), oe.uponSanitizeAttribute.length > 0 && (_ = We(_)), t.removed = [];
    const B = Hr && typeof A != "string" && An(A);
    if (B) {
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
      if (!Ye && !K && !q && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return fe && Ee ? pt(A) : A;
      if (p = Qs(A), !p)
        return Ye ? null : Ee ? Ie : "";
    }
    p && Ue && Rt(p.firstChild);
    const le = B ? A : p;
    try {
      const He = ei(le);
      for (; P = He.nextNode(); )
        ri(P, le), oi(P), ln(P.content) && nr(P.content);
    } catch (He) {
      throw B && (Jn(A), Kt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      })), He;
    }
    if (B)
      return Kt(t.removed, (He) => {
        He.element && Zn(He.element);
      }), K && Br(A), A;
    if (Ye) {
      if (K && Br(p), jt)
        for (H = ht.call(p.ownerDocument); p.firstChild; )
          H.appendChild(p.firstChild);
      else
        H = p;
      return (_.shadowroot || _.shadowrootmode) && (H = Gn.call(r, H, !0)), H;
    }
    let de = q ? p.outerHTML : p.innerHTML;
    return q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Ce(Ru, p.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + de), K && (de = Qn(de)), fe && Ee ? pt(de) : de;
  }, t.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(A), ue = !0, pe = m, Pe = _;
  }, t.clearConfig = function() {
    on = null, ue = !1, pe = null, Pe = null, fe = dt, Ie = "";
  }, t.isValidAttribute = function(A, a, p) {
    on || zr({});
    const E = me(A), P = me(a);
    return si(E, P, p);
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
function N(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (L) => L, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, g = (L) => typeof L == "string" || typeof L == "number", v = (L, W, F) => L.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (I, b) => {
    if (W === void 0 || !(b in W))
      return d(I);
    const D = W[b];
    return g(D) ? d(`${D}`) : typeof D == "object" && g(D.value) ? (D.escape !== !1 ? to : c)(`${D.value}`) : d(I);
  });
  let j = (s?.bundle ?? $u(e)).translations[t] || t;
  return j = Array.isArray(j) ? j[0] : j, h(typeof i == "object" || o !== void 0 ? v(
    j,
    i,
    o
  ) : j);
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
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, yf = { id: "library-periodical-groups-heading" }, Tf = { class: "library-muted" }, Ef = ["href"], Sf = { class: "library-muted" }, Af = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, vf = { id: "library-periodical-groups-empty-heading" }, xf = { class: "library-muted" }, wf = {
  key: 2,
  class: "library-empty-content",
  role: "status"
}, Cf = { class: "library-muted" }, Of = {
  key: 3,
  class: "library-cover-gallery"
}, Rf = ["href", "aria-label"], If = ["src", "alt"], Pf = { class: "library-cover-summary" }, Df = {
  key: 0,
  class: "library-creator"
}, Nf = { class: "library-muted" }, Mf = { key: 0 }, Lf = { key: 1 }, Ff = { key: 2 }, Uf = { key: 3 }, Hf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, kf = { key: 0 }, jf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, $f = {
  key: 0,
  class: "library-muted"
}, Vf = ["href"], zf = ["href"], Bf = ["href"], Wf = ["href"], Kf = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Gf = { class: "library-hero-actions" }, Yf = ["href"], qf = ["href"], Xf = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = ot(() => t.state.items || []), i = ot(() => t.state.shelves || []), o = ot(() => t.state.formats || []), l = ot(() => t.state.publications || []), c = ot(() => t.state.publicationSummaries || []), h = ot(() => t.state.scanStatuses || []), d = ot(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), g = /* @__PURE__ */ Or({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), v = ot(() => t.state.settingsUrl || ""), O = ot(() => t.state.metadataExportUrl || "");
    function j(F) {
      return String(F || "").toUpperCase();
    }
    function L(F) {
      return F.nextcloudTags || [];
    }
    function W(F) {
      const I = new URLSearchParams(window.location.search);
      return I.set("publication", F), I.set("sort", "publication"), I.delete("page"), `?${I.toString()}`;
    }
    return (F, I) => (J(), Z("div", Vu, [
      M("section", zu, [
        M("h2", Bu, U(G(N)("library", "Publication catalogue")), 1),
        M("p", Wu, U(G(N)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        M("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": G(N)("library", "Catalogue search and filters")
        }, [
          M("label", null, [
            je(U(G(N)("library", "Search title / author")) + " ", 1),
            It(M("input", {
              "onUpdate:modelValue": I[0] || (I[0] = (b) => g.q = b),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, g.q]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Type")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[1] || (I[1] = (b) => g.type = b),
              name: "type"
            }, [
              M("option", Gu, U(G(N)("library", "All types")), 1),
              (J(), Z(Se, null, gt(n, (b) => M("option", {
                key: b,
                value: b
              }, U(b), 9, Yu)), 64))
            ], 512), [
              [cn, g.type]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Series / periodical")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[2] || (I[2] = (b) => g.publication = b),
              name: "publication"
            }, [
              M("option", qu, U(G(N)("library", "All series and periodicals")), 1),
              (J(!0), Z(Se, null, gt(l.value, (b) => (J(), Z("option", {
                key: b,
                value: b
              }, U(b), 9, Xu))), 128))
            ], 512), [
              [cn, g.publication]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Nextcloud tag")) + " ", 1),
            It(M("input", {
              "onUpdate:modelValue": I[3] || (I[3] = (b) => g.tag = b),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, g.tag]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Format")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[4] || (I[4] = (b) => g.format = b),
              name: "format"
            }, [
              M("option", Ju, U(G(N)("library", "All formats")), 1),
              (J(!0), Z(Se, null, gt(o.value, (b) => (J(), Z("option", {
                key: b,
                value: b
              }, U(j(b)), 9, Zu))), 128))
            ], 512), [
              [cn, g.format]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Shelf")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[5] || (I[5] = (b) => g.shelf = b),
              name: "shelf"
            }, [
              M("option", Qu, U(G(N)("library", "All shelves")), 1),
              (J(!0), Z(Se, null, gt(i.value, (b) => (J(), Z("option", {
                key: b,
                value: b
              }, U(b), 9, ef))), 128))
            ], 512), [
              [cn, g.shelf]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Scan status")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[6] || (I[6] = (b) => g.status = b),
              name: "status"
            }, [
              M("option", tf, U(G(N)("library", "All scan statuses")), 1),
              (J(!0), Z(Se, null, gt(h.value, (b) => (J(), Z("option", {
                key: b,
                value: b
              }, U(b), 9, nf))), 128))
            ], 512), [
              [cn, g.status]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Sort")) + " ", 1),
            It(M("select", {
              "onUpdate:modelValue": I[7] || (I[7] = (b) => g.sort = b),
              name: "sort"
            }, [
              M("option", rf, U(G(N)("library", "Title")), 1),
              M("option", sf, U(G(N)("library", "Recently added")), 1),
              M("option", of, U(G(N)("library", "Publication date")), 1),
              M("option", lf, U(G(N)("library", "Series / periodical")), 1),
              M("option", af, U(G(N)("library", "Format")), 1)
            ], 512), [
              [cn, g.sort]
            ])
          ]),
          M("label", null, [
            je(U(G(N)("library", "Page size")) + " ", 1),
            M("select", {
              value: d.value.limit,
              name: "limit"
            }, [
              (J(), Z(Se, null, gt(r, (b) => M("option", {
                key: b,
                value: b
              }, U(b), 9, uf)), 64))
            ], 8, cf)
          ]),
          M("button", {
            type: "submit",
            class: "button primary",
            "aria-label": G(N)("library", "Apply catalogue filters")
          }, U(G(N)("library", "Apply filters")), 9, ff),
          M("a", {
            href: "?",
            class: "button secondary",
            "aria-label": G(N)("library", "Clear catalogue filters")
          }, U(G(N)("library", "Clear")), 9, df)
        ], 8, Ku),
        M("nav", {
          class: "library-pagination",
          "aria-label": G(N)("library", "Catalogue pagination")
        }, [
          M("span", null, "Showing " + U(d.value.from) + "–" + U(d.value.to) + " of " + U(d.value.total) + " catalogue items", 1),
          d.value.previousUrl ? (J(), Z("a", {
            key: 0,
            href: d.value.previousUrl
          }, U(G(N)("library", "Previous")), 9, hf)) : (J(), Z("span", mf, U(G(N)("library", "Previous")), 1)),
          d.value.nextUrl ? (J(), Z("a", {
            key: 2,
            href: d.value.nextUrl
          }, U(G(N)("library", "Next")), 9, gf)) : (J(), Z("span", _f, U(G(N)("library", "Next")), 1))
        ], 8, pf),
        c.value.length > 0 ? (J(), Z("section", bf, [
          M("h3", yf, U(G(N)("library", "Top series and periodicals")), 1),
          M("p", Tf, U(G(N)("library", "Jump into recurring publications with one click.")), 1),
          M("ul", null, [
            (J(!0), Z(Se, null, gt(c.value, (b) => (J(), Z("li", {
              key: b.publication
            }, [
              M("a", {
                href: W(b.publication)
              }, U(b.publication), 9, Ef),
              M("span", Sf, U(b.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (J(), Z("section", Af, [
          M("h3", vf, U(G(N)("library", "No series or periodicals found yet")), 1),
          M("p", xf, U(G(N)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : _t("", !0),
        s.value.length === 0 ? (J(), Z("div", wf, [
          M("h3", null, U(G(N)("library", "No catalogue items match")), 1),
          M("p", Cf, U(G(N)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (J(), Z("div", Of, [
          (J(!0), Z(Se, null, gt(s.value, (b) => (J(), Z("article", {
            key: b.id,
            class: "library-cover-card"
          }, [
            M("a", {
              class: "library-cover-link",
              href: b.openUrl,
              "aria-label": `Read ${b.title}`
            }, [
              M("img", {
                class: "library-cover-image",
                src: b.coverUrl,
                alt: `Cover for ${b.title}`,
                loading: "lazy"
              }, null, 8, If)
            ], 8, Rf),
            M("div", Pf, [
              M("h3", null, U(b.title), 1),
              b.creators ? (J(), Z("p", Df, U(b.creators), 1)) : _t("", !0),
              M("p", Nf, [
                M("span", null, U(b.publicationType), 1),
                b.publication ? (J(), Z("span", Mf, " · " + U(b.publication), 1)) : _t("", !0),
                b.publicationDate ? (J(), Z("span", Lf, " · " + U(b.publicationDate), 1)) : _t("", !0),
                b.extension ? (J(), Z("span", Ff, " · Format: " + U(j(b.extension)), 1)) : _t("", !0),
                b.shelf ? (J(), Z("span", Uf, " · Shelf: " + U(b.shelf), 1)) : _t("", !0)
              ]),
              b.scanStatus !== "indexed" || b.scanError ? (J(), Z("p", Hf, [
                je(" scanStatus: " + U(b.scanStatus || "unknown"), 1),
                b.scanError ? (J(), Z("span", kf, " · scanError: " + U(b.scanError), 1)) : _t("", !0)
              ])) : _t("", !0),
              M("div", jf, [
                L(b).length === 0 ? (J(), Z("span", $f, "No Nextcloud tags")) : (J(!0), Z(Se, { key: 1 }, gt(L(b), (D) => (J(), Z("span", {
                  key: D.id,
                  class: "library-tag"
                }, U(D.name), 1))), 128))
              ]),
              M("p", null, [
                M("a", {
                  href: b.openUrl
                }, U(G(N)("library", "Read")), 9, Vf),
                I[8] || (I[8] = je(" · ", -1)),
                M("a", {
                  href: b.filesUrl
                }, U(G(N)("library", "Show in Files")), 9, zf),
                I[9] || (I[9] = je(" · ", -1)),
                M("a", {
                  href: b.downloadUrl
                }, U(G(N)("library", "Download source")), 9, Bf),
                I[10] || (I[10] = je(" · ", -1)),
                M("a", {
                  href: b.detailsUrl
                }, U(G(N)("library", "Details")), 9, Wf)
              ])
            ])
          ]))), 128))
        ]))
      ]),
      M("section", Kf, [
        I[11] || (I[11] = M("div", null, [
          M("h2", null, "Library"),
          M("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        M("div", Gf, [
          M("a", {
            href: v.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Yf),
          O.value ? (J(), Z("a", {
            key: 0,
            href: O.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, qf)) : _t("", !0)
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
function Jf(e, t, n, r = ge) {
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
  h.value = "", h.textContent = s, c.appendChild(h), Jf(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Zf(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", N("library", "Catalogue search and filters")), so(r, N("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, N("library", "Type"), "type", n.type, N("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, N("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, N("library", "Format"), "format", n.format, N("library", "All formats"), e.formats || [], _l), un(r, N("library", "Shelf"), "shelf", n.shelf, N("library", "All shelves"), e.shelves || []), un(r, N("library", "Scan status"), "status", n.status, N("library", "All scan statuses"), e.scanStatuses || []), un(r, N("library", "Sort"), "sort", n.sort || "title", N("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, N("library", "Page size"), "limit", t.limit || 100, N("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", N("library", "Apply catalogue filters")), s.textContent = N("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", N("library", "Clear catalogue filters")), i.textContent = N("library", "Clear"), r.append(s, i), r;
}
function Qf(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ge(e.settingsUrl || ""), i = ge(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = N("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = N("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(Zf(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", N("library", "Catalogue pagination"));
  const g = document.createElement("span");
  if (g.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(g), l.appendChild(d), n.length === 0) {
    const v = document.createElement("div");
    v.className = "library-empty-content", v.setAttribute("role", "status");
    const O = document.createElement("h3");
    O.textContent = N("library", "No catalogue items match");
    const j = document.createElement("p");
    j.className = "library-muted", j.textContent = N("library", "Scan enabled roots or clear the active filters."), v.append(O, j), l.appendChild(v);
  } else {
    const v = document.createElement("div");
    v.className = "library-cover-gallery";
    for (const O of n) {
      const j = document.createElement("article");
      j.className = "library-cover-card";
      const L = document.createElement("a");
      L.className = "library-cover-link", L.href = ge(O.openUrl || "#"), L.setAttribute("aria-label", `Read ${ge(O.title || "publication")}`);
      const W = document.createElement("img");
      W.className = "library-cover-image", W.src = ge(O.coverUrl || ""), W.alt = `Cover for ${ge(O.title || "publication")}`, W.loading = "lazy", L.appendChild(W);
      const F = document.createElement("div");
      F.className = "library-cover-summary";
      const I = document.createElement("h3");
      if (I.textContent = ge(O.title || "Untitled publication"), F.appendChild(I), O.creators) {
        const fe = document.createElement("p");
        fe.className = "library-creator", fe.textContent = ge(O.creators), F.appendChild(fe);
      }
      const b = document.createElement("p");
      b.className = "library-muted", b.textContent = [
        ge(O.publicationType || "other"),
        O.extension ? `Format: ${_l(O.extension)}` : "",
        O.shelf ? `Shelf: ${ge(O.shelf)}` : ""
      ].filter(Boolean).join(" · "), F.appendChild(b);
      const D = document.createElement("p"), ee = document.createElement("a");
      ee.href = ge(O.openUrl || "#"), ee.textContent = N("library", "Read");
      const ye = document.createElement("a");
      ye.href = ge(O.filesUrl || "#"), ye.textContent = N("library", "Show in Files");
      const _e = document.createElement("a");
      _e.href = ge(O.downloadUrl || "#"), _e.textContent = N("library", "Download source");
      const we = document.createElement("a");
      we.href = ge(O.detailsUrl || "#"), we.textContent = N("library", "Details"), D.append(ee, document.createTextNode(" · "), ye, document.createTextNode(" · "), _e, document.createTextNode(" · "), we), F.appendChild(D), j.append(L, F), v.appendChild(j);
    }
    l.appendChild(v);
  }
  if (o.appendChild(l), s || i) {
    const v = document.createElement("section");
    v.className = "library-hero library-secondary-panel", v.setAttribute("aria-label", "Library settings");
    const O = document.createElement("div"), j = document.createElement("h2");
    j.textContent = "Library";
    const L = document.createElement("p");
    L.className = "library-lede", L.textContent = "Browse publications already stored in Nextcloud.", O.append(j, L);
    const W = document.createElement("div");
    if (W.className = "library-hero-actions", s) {
      const F = document.createElement("a");
      F.href = s, F.className = "button secondary", F.setAttribute("aria-label", "Open Library settings"), F.textContent = "Library settings", W.appendChild(F);
    }
    if (i) {
      const F = document.createElement("a");
      F.href = i, F.className = "button secondary", F.setAttribute("aria-label", "Export corrected metadata"), F.textContent = "Export corrected metadata", W.appendChild(F);
    }
    v.append(O, W), o.appendChild(v);
  }
  return o;
}
if (dr)
  try {
    Qc(Xf, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(Qf(ro));
  }
//# sourceMappingURL=library-main.mjs.map
