// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, pn = [], ft = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Re = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), z = Array.isArray, Nt = (e) => Bn(e) === "[object Map]", Qt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", Y = (e) => typeof e == "function", he = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", oo = (e) => (se(e) || Y(e)) && Y(e.then) && Y(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, Qe = vr(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, en = vr(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = vr(
  (e) => e ? `on${co(e)}` : ""
), Et = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
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
  if (n = dt(e), r = dt(t), n || r)
    return e === t;
  if (n = z(e), r = z(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = se(e), r = se(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Nt(e), r = Nt(t), n || r || (n = Qt(e), r = Qt(t), n || r))
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
const po = (e) => !!(e && e.__v_isRef === !0), L = (e) => he(e) ? e : e == null ? "" : z(e) || se(e) && (e.toString === lo || !Y(e.toString)) ? po(e) ? L(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Nt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : dt(t) ? Yr(t) : se(t) && !z(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
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
    const t = ae, n = et;
    ae = this, et = !0;
    try {
      return this.fn();
    } finally {
      yo(this), ae = t, et = n, this.flags &= -3;
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
  const t = e.dep, n = ae, r = et;
  ae = e, et = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || Et(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ae = n, et = r, yo(e), e.flags &= -3;
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
let et = !0;
const Eo = [];
function xt() {
  Eo.push(et), et = !1;
}
function wt() {
  const e = Eo.pop();
  et = e === void 0 ? !0 : e;
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
    if (!ae || !et || ae === this.computed)
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
const hs = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (et && ae) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function St(e, t, n, r, s, i) {
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
      o.forEach((_, S) => {
        (S === "length" || S === kn || !dt(S) && S >= d) && l(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(kn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(Xt)), Nt(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(Xt)), Nt(e) && l(o.get(ms)));
          break;
        case "set":
          Nt(e) && l(o.get(Xt));
          break;
      }
  }
  Ps();
}
function cn(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Oe(t, "iterate", kn), /* @__PURE__ */ tt(e) ? t : t.map(Ct));
}
function Cr(e) {
  return Oe(e = /* @__PURE__ */ re(e), "iterate", kn), e;
}
function ct(e, t) {
  return /* @__PURE__ */ Lt(e) ? _n(/* @__PURE__ */ Jt(e) ? Ct(t) : t) : Ct(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => ct(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => z(t) ? cn(t) : t)
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
    return cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
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
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vn(this, "splice", e);
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
    return vn(this, "unshift", e);
  },
  values() {
    return Xr(this, "values", (e) => ct(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ tt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function gt(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ tt(e), c = o[t];
  if (c !== Jl[t]) {
    const _ = c.apply(e, i);
    return l ? Ct(_) : _;
  }
  let h = n;
  o !== e && (l ? h = function(_, S) {
    return n.call(this, ct(e, _), S, e);
  } : n.length > 2 && (h = function(_, S) {
    return n.call(this, _, S, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ tt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, _) {
    return l && (l = !1, h = ct(e, h)), n.call(this, h, ct(e, d), _, e);
  }) : n.length > 3 && (o = function(h, d, _) {
    return n.call(this, h, d, _, e);
  }));
  const c = s[t](o, ...r);
  return l ? ct(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ re(e);
  Oe(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), r[t](...n)) : s;
}
function vn(e, t, n = []) {
  xt(), Is();
  const r = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ps(), wt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), vo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function Ql(e) {
  dt(e) || (e = String(e));
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
      /* @__PURE__ */ Ue(t) ? t : r
    );
    if ((dt(n) ? vo.has(n) : Zl(n)) || (s || Oe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ue(l)) {
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
      if (!/* @__PURE__ */ tt(r) && !/* @__PURE__ */ Lt(r) && (i = /* @__PURE__ */ re(i), r = /* @__PURE__ */ re(r)), !o && /* @__PURE__ */ Ue(i) && !/* @__PURE__ */ Ue(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ne(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ue(t) ? t : s
    );
    return t === /* @__PURE__ */ re(s) && c && (l ? Et(r, i) && St(t, "set", n, r) : St(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ne(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && St(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!dt(n) || !vo.has(n)) && Oe(t, "has", n), r;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      z(t) ? "length" : Xt
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
    const s = this.__v_raw, i = /* @__PURE__ */ re(s), o = Nt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : Ct;
    return !t && Oe(
      i,
      "iterate",
      c ? ms : Xt
    ), Re(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: _, done: S } = h.next();
          return S ? { value: _, done: S } : {
            value: l ? [d(_[0]), d(_[1])] : d(_),
            done: S
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
      e || (Et(s, l) && Oe(o, "get", s), Oe(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : Ct;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ re(s), "iterate", Xt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), l = /* @__PURE__ */ re(s);
      return e || (Et(s, l) && Oe(o, "has", s), Oe(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ re(l), h = t ? gs : e ? _n : Ct;
      return !e && Oe(c, "iterate", Xt), l.forEach((d, _) => s.call(i, h(d), h(_), o));
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
        const i = /* @__PURE__ */ re(this), o = rr(i), l = /* @__PURE__ */ re(s), c = !t && !/* @__PURE__ */ tt(s) && !/* @__PURE__ */ Lt(s) ? l : s;
        return o.has.call(i, c) || Et(s, c) && o.has.call(i, s) || Et(l, c) && o.has.call(i, l) || (i.add(c), St(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ tt(i) && !/* @__PURE__ */ Lt(i) && (i = /* @__PURE__ */ re(i));
        const o = /* @__PURE__ */ re(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ re(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? Et(i, d) && St(o, "set", s, i) : St(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ re(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ re(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && St(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ re(this), i = s.size !== 0, o = s.clear();
        return i && St(
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
function Jt(e) {
  return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
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
const Ct = (e) => se(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => se(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function K(e) {
  return /* @__PURE__ */ Ue(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : K(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Ue(s) && !/* @__PURE__ */ Ue(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, pa);
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
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = ie) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (g) => s ? g : /* @__PURE__ */ tt(g) || s === !1 || s === 0 ? At(g, 1) : At(g);
  let d, _, S, O, k = !1, M = !1;
  if (/* @__PURE__ */ Ue(e) ? (_ = () => e.value, k = /* @__PURE__ */ tt(e)) : /* @__PURE__ */ Jt(e) ? (_ = () => h(e), k = !0) : z(e) ? (M = !0, k = e.some((g) => /* @__PURE__ */ Jt(g) || /* @__PURE__ */ tt(g)), _ = () => e.map((g) => {
    if (/* @__PURE__ */ Ue(g))
      return g.value;
    if (/* @__PURE__ */ Jt(g))
      return h(g);
    if (Y(g))
      return c ? c(g, 2) : g();
  })) : Y(e) ? t ? _ = c ? () => c(e, 2) : e : _ = () => {
    if (S) {
      xt();
      try {
        S();
      } finally {
        wt();
      }
    }
    const g = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [O]) : e(O);
    } finally {
      Kt = g;
    }
  } : _ = ft, t && s) {
    const g = _, Q = s === !0 ? 1 / 0 : s;
    _ = () => At(g(), Q);
  }
  const W = Gl(), H = () => {
    d.stop(), W && W.active && ws(W.effects, d);
  };
  if (i && t) {
    const g = t;
    t = (...Q) => {
      const ye = g(...Q);
      return H(), ye;
    };
  }
  let V = M ? new Array(e.length).fill(ir) : ir;
  const I = (g) => {
    if (!(!(d.flags & 1) || !d.dirty && !g))
      if (t) {
        const Q = d.run();
        if (g || s || k || (M ? Q.some((ye, _e) => Et(ye, V[_e])) : Et(Q, V))) {
          S && S();
          const ye = Kt;
          Kt = d;
          try {
            const _e = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              V === ir ? void 0 : M && V[0] === ir ? [] : V,
              O
            ];
            V = Q, c ? c(t, 3, _e) : (
              // @ts-expect-error
              t(..._e)
            );
          } finally {
            Kt = ye;
          }
        }
      } else
        d.run();
  };
  return l && l(I), d = new mo(_), d.scheduler = o ? () => o(I, !1) : I, O = (g) => ga(g, !1, d), S = d.onStop = () => {
    const g = pr.get(d);
    if (g) {
      if (c)
        c(g, 4);
      else
        for (const Q of g) Q();
      pr.delete(d);
    }
  }, t ? r ? I(!0) : V = d.run() : o ? o(I.bind(null, !0), !0) : d.run(), H.pause = d.pause.bind(d), H.resume = d.resume.bind(d), H.stop = H, H;
}
function At(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ue(e))
    At(e.value, t, n);
  else if (z(e))
    for (let r = 0; r < e.length; r++)
      At(e[r], t, n);
  else if (Qt(e) || Nt(e))
    e.forEach((r) => {
      At(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      At(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && At(e[r], t, n);
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
function nt(e, t, n, r) {
  if (Y(e)) {
    const s = Wn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (z(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(nt(e[i], t, n, r));
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
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      xt(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), wt();
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
const Le = [];
let at = -1;
const hn = [];
let Dt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = at + 1, n = Le.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Le[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Le[Le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Le.push(e) : Le.splice(ya(t), 0, e), e.flags |= 1, No();
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
function di(e, t, n = at + 1) {
  for (; n < Le.length; n++) {
    const r = Le[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Le.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
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
    for (at = 0; at < Le.length; at++) {
      const t = Le[at];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; at < Le.length; at++) {
      const t = Le[at];
      t && (t.flags &= -2);
    }
    at = -1, Le.length = 0, Mo(), hr = null, (Le.length || hn.length) && Lo();
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
    const i = mr(t), o = Zt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Zt.length; c > o; c--) ol();
      mr(i), r._d && Ai(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function _t(e, t) {
  if (qe === null)
    return e;
  const n = Mr(qe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ie] = t[s];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && At(o), r.push({
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
    c && (xt(), nt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), wt());
  }
}
function Sa(e, t) {
  if (Fe) {
    let n = Fe.provides;
    const r = Fe.parent && Fe.parent.provides;
    r === n && (n = Fe.provides = Object.create(r)), n[e] = t;
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
      return O.stop = ft, O.resume = ft, O.pause = ft, O;
    }
  }
  const d = Fe;
  l.call = (O, k, M) => nt(O, d, k, M);
  let _ = !1;
  i === "post" ? l.scheduler = (O) => {
    $e(O, d && d.suspense);
  } : i !== "sync" && (_ = !0, l.scheduler = (O, k) => {
    k ? O() : Fs(O);
  }), l.augmentJob = (O) => {
    t && (O.flags |= 4), _ && (O.flags |= 2, d && (O.id = d.uid, O.i = d));
  };
  const S = _a(e, t, l);
  return zn && (h ? h.push(S) : c && S()), S;
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
      if (n.type !== Ot) {
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
      (M, W) => Ln(
        M,
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ie ? l.refs = {} : l.refs, _ = l.setupState, S = /* @__PURE__ */ re(_), O = _ === ie ? io : (M) => pi(d, M) ? !1 : ne(S, M), k = (M, W) => !(W && pi(d, W));
  if (h != null && h !== c) {
    if (hi(t), he(h))
      d[h] = null, O(h) && (_[h] = null);
    else if (/* @__PURE__ */ Ue(h)) {
      const M = t;
      k(h, M.k) && (h.value = null), M.k && (d[M.k] = null);
    }
  }
  if (Y(c))
    Wn(c, l, 12, [o, d]);
  else {
    const M = he(c), W = /* @__PURE__ */ Ue(c);
    if (M || W) {
      const H = () => {
        if (e.f) {
          const V = M ? O(c) ? _[c] : d[c] : k() || !e.k ? c.value : d[e.k];
          if (s)
            z(V) && ws(V, i);
          else if (z(V))
            V.includes(i) || V.push(i);
          else if (M)
            d[c] = [i], O(c) && (_[c] = d[c]);
          else {
            const I = [i];
            k(c, e.k) && (c.value = I), e.k && (d[e.k] = I);
          }
        } else M ? (d[c] = o, O(c) && (_[c] = o)) : W && (k(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const V = () => {
          H(), gr.delete(e);
        };
        V.id = -1, gr.set(e, V), $e(V, n);
      } else
        hi(e), H();
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
function $o(e, t, n = Fe) {
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
function Pr(e, t, n = Fe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      xt();
      const l = Kn(n), c = nt(t, n, e, o);
      return l(), wt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Rt = (e) => (t, n = Fe) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = Rt("bm"), Da = Rt("m"), Na = Rt(
  "bu"
), Ma = Rt("u"), La = Rt(
  "bum"
), Vo = Rt("um"), Fa = Rt(
  "sp"
), Ua = Rt("rtg"), Ha = Rt("rtc");
function ka(e, t = Fe) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function ot(e, t, n, r) {
  let s;
  const i = n, o = z(e);
  if (o || he(e)) {
    const l = o && /* @__PURE__ */ Jt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ tt(e), h = /* @__PURE__ */ Lt(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, _ = e.length; d < _; d++)
      s[d] = t(
        c ? h ? _n(Ct(e[d])) : Ct(e[d]) : e[d],
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
      const S = o[t];
      if (S !== void 0)
        switch (S) {
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
    let d, _;
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
      _ = c.config.globalProperties, ne(_, t)
    )
      return _[t];
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
    beforeMount: _,
    mounted: S,
    beforeUpdate: O,
    updated: k,
    activated: M,
    deactivated: W,
    beforeDestroy: H,
    beforeUnmount: V,
    destroyed: I,
    unmounted: g,
    render: Q,
    renderTracked: ye,
    renderTriggered: _e,
    errorCaptured: we,
    serverPrefetch: fe,
    // public API
    expose: Ie,
    inheritAttrs: pt,
    // assets
    components: Ft,
    directives: rt,
    filters: tn
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
      const te = i[ce], Xe = Y(te) ? te.bind(n, n) : Y(te.get) ? te.get.bind(n, n) : ft, Ut = !Y(te) && Y(te.set) ? te.set.bind(n) : ft, mt = Je({
        get: Xe,
        set: Ut
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => mt.value,
        set: (Ge) => mt.value = Ge
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
  if (ve(Pa, _), ve(Da, S), ve(Na, O), ve(Ma, k), ve(Oa, M), ve(Ra, W), ve(ka, we), ve(Ha, ye), ve(Ua, _e), ve(La, V), ve(Vo, g), ve(Fa, fe), z(Ie))
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
  Q && e.render === ft && (e.render = Q), pt != null && (e.inheritAttrs = pt), Ft && (e.components = Ft), rt && (e.directives = rt), fe && jo(e);
}
function za(e, t, n = ft) {
  z(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    se(s) ? "default" in s ? i = ur(
      s.from || r,
      s.default,
      !0
    ) : i = ur(s.from || r) : i = ur(s), /* @__PURE__ */ Ue(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  nt(
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
      use(d, ..._) {
        return o.has(d) || (d && Y(d.install) ? (o.add(d), d.install(h, ..._)) : Y(d) && (o.add(d), d(h, ..._))), h;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), h;
      },
      component(d, _) {
        return _ ? (i.components[d] = _, h) : i.components[d];
      },
      directive(d, _) {
        return _ ? (i.directives[d] = _, h) : i.directives[d];
      },
      mount(d, _, S) {
        if (!c) {
          const O = h._ceVNode || vt(r, s);
          return O.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(O, d, S), c = !0, h._container = d, d.__vue_app__ = h, Mr(O.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (nt(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, _) {
        return i.provides[d] = _, h;
      },
      runWithContext(d) {
        const _ = mn;
        mn = h;
        try {
          return d();
        } finally {
          mn = _;
        }
      }
    };
    return h;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Qe(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ie;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => he(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(Qe(t))];
  !c && i && (c = r[l = Gr(en(t))]), c && nt(
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
    e.emitted[l] = !0, nt(
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
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ne(e, t[0].toLowerCase() + t.slice(1)) || ne(e, en(t)) || ne(e, t));
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
    props: _,
    data: S,
    setupState: O,
    ctx: k,
    inheritAttrs: M
  } = e, W = mr(e);
  let H, V;
  try {
    if (n.shapeFlag & 4) {
      const g = s || r, Q = g;
      H = ut(
        h.call(
          Q,
          g,
          d,
          _,
          O,
          S,
          k
        )
      ), V = l;
    } else {
      const g = t;
      H = ut(
        g.length > 1 ? g(
          _,
          { attrs: l, slots: o, emit: c }
        ) : g(
          _,
          null
        )
      ), V = t.props ? l : Za(l);
    }
  } catch (g) {
    Zt.length = 0, Rr(g, e, 1), H = vt(Ot);
  }
  let I = H;
  if (V && M !== !1) {
    const g = Object.keys(V), { shapeFlag: Q } = I;
    g.length && Q & 7 && (i && g.some(Ar) && (V = Qa(
      V,
      i
    )), I = bn(I, V, !1, !0));
  }
  if (n.dirs && (I = bn(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const g = Ir(I.type) && ko(I) || I;
    Us(g, n.transition);
  }
  return H = I, mr(W), H;
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
      for (let _ = 0; _ < d.length; _++) {
        const S = d[_];
        if (Go(o, r, S) && !Dr(h, S))
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
      for (let _ = 0; _ < d.length; _++) {
        let S = d[_];
        if (Dr(e.emitsOptions, S))
          continue;
        const O = t[S];
        if (c)
          if (ne(i, S))
            O !== i[S] && (i[S] = O, h = !0);
          else {
            const k = Qe(S);
            s[k] = Es(
              c,
              l,
              k,
              O,
              e,
              !1
            );
          }
        else
          O !== i[S] && (i[S] = O, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const _ in l)
      (!t || // for camelCase
      !ne(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = en(_)) === _ || !ne(t, d))) && (c ? n && // for camelCase
      (n[_] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[_] = Es(
        c,
        l,
        _,
        void 0,
        e,
        !0
      )) : delete s[_]);
    if (i !== l)
      for (const _ in i)
        (!t || !ne(t, _)) && (delete i[_], h = !0);
  }
  h && St(e.attrs, "set", "");
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
      s && ne(s, d = Qe(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ re(n), h = l || ie;
    for (let d = 0; d < i.length; d++) {
      const _ = i[d];
      n[_] = Es(
        s,
        c,
        _,
        h[_],
        e,
        !ne(h, _)
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
    ] && (r === "" || r === en(n)) && (r = !0));
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
    const d = (_) => {
      c = !0;
      const [S, O] = Zo(_, t, !0);
      Re(o, S), O && l.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return se(e) && r.set(e, pn), pn;
  if (z(i))
    for (let d = 0; d < i.length; d++) {
      const _ = Qe(i[d]);
      Ei(_) && (o[_] = ie);
    }
  else if (i)
    for (const d in i) {
      const _ = Qe(d);
      if (Ei(_)) {
        const S = i[d], O = o[_] = z(S) || Y(S) ? { type: S } : Re({}, S), k = O.type;
        let M = !1, W = !0;
        if (z(k))
          for (let H = 0; H < k.length; ++H) {
            const V = k[H], I = Y(V) && V.name;
            if (I === "Boolean") {
              M = !0;
              break;
            } else I === "String" && (W = !1);
          }
        else
          M = Y(k) && k.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = M, O[
          1
          /* shouldCastTrue */
        ] = W, (M || ne(O, "default")) && l.push(_);
      }
    }
  const h = [o, l];
  return se(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => z(e) ? e.map(ut) : [ut(e)], ic = (e, t, n) => {
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
    parentNode: _,
    nextSibling: S,
    setScopeId: O = ft,
    insertStaticContent: k
  } = e, M = (u, f, m, A = null, b = null, T = null, x = void 0, w = null, C = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (A = nn(u), Ge(u, b, T, !0), u = null), f.patchFlag === -2 && (C = !1, f.dynamicChildren = null);
    const { type: y, ref: j, shapeFlag: R } = f;
    switch (y) {
      case Nr:
        W(u, f, m, A);
        break;
      case Ot:
        H(u, f, m, A);
        break;
      case ns:
        u == null && V(f, m, A, x);
        break;
      case Te:
        Ft(
          u,
          f,
          m,
          A,
          b,
          T,
          x,
          w,
          C
        );
        break;
      default:
        R & 1 ? Q(
          u,
          f,
          m,
          A,
          b,
          T,
          x,
          w,
          C
        ) : R & 6 ? rt(
          u,
          f,
          m,
          A,
          b,
          T,
          x,
          w,
          C
        ) : (R & 64 || R & 128) && y.process(
          u,
          f,
          m,
          A,
          b,
          T,
          x,
          w,
          C,
          kt
        );
    }
    j != null && b ? Ln(j, u && u.ref, T, f || u, !f) : j == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, W = (u, f, m, A) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        A
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && h(b, f.children);
    }
  }, H = (u, f, m, A) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      A
    ) : f.el = u.el;
  }, V = (u, f, m, A) => {
    [u.el, u.anchor] = k(
      u.children,
      f,
      m,
      A,
      u.el,
      u.anchor
    );
  }, I = ({ el: u, anchor: f }, m, A) => {
    let b;
    for (; u && u !== f; )
      b = S(u), r(u, m, A), u = b;
    r(f, m, A);
  }, g = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = S(u), s(u), u = m;
    s(f);
  }, Q = (u, f, m, A, b, T, x, w, C) => {
    if (f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"), u == null)
      ye(
        f,
        m,
        A,
        b,
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
          b,
          T,
          x,
          w,
          C
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ye = (u, f, m, A, b, T, x, w) => {
    let C, y;
    const { props: j, shapeFlag: R, transition: U, dirs: $ } = u;
    if (C = u.el = o(
      u.type,
      T,
      j && j.is,
      j
    ), R & 8 ? d(C, u.children) : R & 16 && we(
      u.children,
      C,
      null,
      A,
      b,
      ts(u, T),
      x,
      w
    ), $ && Vt(u, null, A, "created"), _e(C, u, u.scopeId, x, A), j) {
      for (const Z in j)
        Z !== "value" && !Dn(Z) && i(C, Z, null, j[Z], T, A);
      "value" in j && i(C, "value", null, j.value, T), (y = j.onVnodeBeforeMount) && lt(y, A, u);
    }
    $ && Vt(u, null, A, "beforeMount");
    const G = uc(b, U);
    G && U.beforeEnter(C), r(C, f, m), ((y = j && j.onVnodeMounted) || G || $) && $e(() => {
      y && lt(y, A, u), G && U.enter(C), $ && Vt(u, null, A, "mounted");
    }, b);
  }, _e = (u, f, m, A, b) => {
    if (m && O(u, m), A)
      for (let T = 0; T < A.length; T++)
        O(u, A[T]);
    if (b) {
      let T = b.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const x = b.vnode;
        _e(
          u,
          x,
          x.scopeId,
          x.slotScopeIds,
          b.parent
        );
      }
    }
  }, we = (u, f, m, A, b, T, x, w, C = 0) => {
    for (let y = C; y < u.length; y++) {
      const j = u[y] = w ? Tt(u[y]) : ut(u[y]);
      M(
        null,
        j,
        f,
        m,
        A,
        b,
        T,
        x,
        w
      );
    }
  }, fe = (u, f, m, A, b, T, x) => {
    const w = f.el = u.el;
    let { patchFlag: C, dynamicChildren: y, dirs: j } = f;
    C |= u.patchFlag & 16;
    const R = u.props || ie, U = f.props || ie;
    let $;
    if (m && zt(m, !1), ($ = U.onVnodeBeforeUpdate) && lt($, m, f, u), j && Vt(f, u, m, "beforeUpdate"), m && zt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (C = 0, x = !1, y = null), (R.innerHTML && U.innerHTML == null || R.textContent && U.textContent == null) && d(w, ""), y ? Ie(
      u.dynamicChildren,
      y,
      w,
      m,
      A,
      ts(f, b),
      T
    ) : x || te(
      u,
      f,
      w,
      null,
      m,
      A,
      ts(f, b),
      T,
      !1
    ), C > 0) {
      if (C & 16)
        pt(w, R, U, m, b);
      else if (C & 2 && R.class !== U.class && i(w, "class", null, U.class, b), C & 4 && i(w, "style", R.style, U.style, b), C & 8) {
        const G = f.dynamicProps;
        for (let Z = 0; Z < G.length; Z++) {
          const X = G[Z], ue = R[X], pe = U[X];
          (pe !== ue || X === "value") && i(w, X, ue, pe, b, m);
        }
      }
      C & 1 && u.children !== f.children && d(w, f.children);
    } else !x && y == null && pt(w, R, U, m, b);
    (($ = U.onVnodeUpdated) || j) && $e(() => {
      $ && lt($, m, f, u), j && Vt(f, u, m, "updated");
    }, A);
  }, Ie = (u, f, m, A, b, T, x) => {
    for (let w = 0; w < f.length; w++) {
      const C = u[w], y = f[w], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(C, y) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? _(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        C,
        y,
        j,
        null,
        A,
        b,
        T,
        x,
        !0
      );
    }
  }, pt = (u, f, m, A, b) => {
    if (f !== m) {
      if (f !== ie)
        for (const T in f)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            b,
            A
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const x = m[T], w = f[T];
        x !== w && T !== "value" && i(u, T, w, x, b, A);
      }
      "value" in m && i(u, "value", f.value, m.value, b);
    }
  }, Ft = (u, f, m, A, b, T, x, w, C) => {
    const y = f.el = u ? u.el : l(""), j = f.anchor = u ? u.anchor : l("");
    let { patchFlag: R, dynamicChildren: U, slotScopeIds: $ } = f;
    $ && (w = w ? w.concat($) : $), u == null ? (r(y, m, A), r(j, m, A), we(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      j,
      b,
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
      b,
      T,
      x,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : te(
      u,
      f,
      m,
      j,
      b,
      T,
      x,
      w,
      C
    );
  }, rt = (u, f, m, A, b, T, x, w, C) => {
    f.slotScopeIds = w, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      m,
      A,
      x,
      C
    ) : tn(
      f,
      m,
      A,
      b,
      T,
      x,
      C
    ) : ht(u, f, C);
  }, tn = (u, f, m, A, b, T, x) => {
    const w = u.component = yc(
      u,
      A,
      b
    );
    if (Hs(u) && (w.ctx.renderer = kt), Ec(w, !1, x), w.asyncDep) {
      if (b && b.registerDep(w, ve, x), !u.el) {
        const C = w.subTree = vt(Ot);
        H(null, C, f, m), u.placeholder = C.el;
      }
    } else
      ve(
        w,
        u,
        f,
        m,
        b,
        T,
        x
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
  }, ve = (u, f, m, A, b, T, x) => {
    const w = () => {
      if (u.isMounted) {
        let { next: R, bu: U, u: $, parent: G, vnode: Z } = u;
        {
          const He = rl(u);
          if (He) {
            R && (R.el = Z.el, ce(u, R, x)), He.asyncDep.then(() => {
              $e(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let X = R, ue;
        zt(u, !1), R ? (R.el = Z.el, ce(u, R, x)) : R = Z, U && cr(U), (ue = R.props && R.props.onVnodeBeforeUpdate) && lt(ue, G, R, Z), zt(u, !0);
        const pe = yi(u), Pe = u.subTree;
        u.subTree = pe, M(
          Pe,
          pe,
          // parent may have changed if it's in a teleport
          _(Pe.el),
          // anchor may have changed if it's in a fragment
          nn(Pe),
          u,
          b,
          T
        ), R.el = pe.el, X === null && tc(u, pe.el), $ && $e($, b), (ue = R.props && R.props.onVnodeUpdated) && $e(
          () => lt(ue, G, R, Z),
          b
        );
      } else {
        let R;
        const { el: U, props: $ } = f, { bm: G, m: Z, parent: X, root: ue, type: pe } = u, Pe = Fn(f);
        zt(u, !1), G && cr(G), !Pe && (R = $ && $.onVnodeBeforeMount) && lt(R, X, f), zt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            pe,
            u.parent ? u.parent.type : void 0
          );
          const He = u.subTree = yi(u);
          M(
            null,
            He,
            m,
            A,
            u,
            b,
            T
          ), f.el = He.el;
        }
        if (Z && $e(Z, b), !Pe && (R = $ && $.onVnodeMounted)) {
          const He = f;
          $e(
            () => lt(R, X, He),
            b
          );
        }
        (f.shapeFlag & 256 || X && Fn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && $e(u.a, b), u.isMounted = !0, f = m = A = null;
      }
    };
    u.scope.on();
    const C = u.effect = new mo(w);
    u.scope.off();
    const y = u.update = C.run.bind(C), j = u.job = C.runIfDirty.bind(C);
    j.i = u, j.id = u.uid, C.scheduler = () => Fs(j), zt(u, !0), y();
  }, ce = (u, f, m) => {
    f.component = u;
    const A = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, A, m), lc(u, f.children, m), xt(), di(u), wt();
  }, te = (u, f, m, A, b, T, x, w, C = !1) => {
    const y = u && u.children, j = u ? u.shapeFlag : 0, R = f.children, { patchFlag: U, shapeFlag: $ } = f;
    if (U > 0) {
      if (U & 128) {
        Ut(
          y,
          R,
          m,
          A,
          b,
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
          A,
          b,
          T,
          x,
          w,
          C
        );
        return;
      }
    }
    $ & 8 ? (j & 16 && Ht(y, b, T), R !== y && d(m, R)) : j & 16 ? $ & 16 ? Ut(
      y,
      R,
      m,
      A,
      b,
      T,
      x,
      w,
      C
    ) : Ht(y, b, T, !0) : (j & 8 && d(m, ""), $ & 16 && we(
      R,
      m,
      A,
      b,
      T,
      x,
      w,
      C
    ));
  }, Xe = (u, f, m, A, b, T, x, w, C) => {
    u = u || pn, f = f || pn;
    const y = u.length, j = f.length, R = Math.min(y, j);
    let U;
    for (U = 0; U < R; U++) {
      const $ = f[U] = C ? Tt(f[U]) : ut(f[U]);
      M(
        u[U],
        $,
        m,
        null,
        b,
        T,
        x,
        w,
        C
      );
    }
    y > j ? Ht(
      u,
      b,
      T,
      !0,
      !1,
      R
    ) : we(
      f,
      m,
      A,
      b,
      T,
      x,
      w,
      C,
      R
    );
  }, Ut = (u, f, m, A, b, T, x, w, C) => {
    let y = 0;
    const j = f.length;
    let R = u.length - 1, U = j - 1;
    for (; y <= R && y <= U; ) {
      const $ = u[y], G = f[y] = C ? Tt(f[y]) : ut(f[y]);
      if (xn($, G))
        M(
          $,
          G,
          m,
          null,
          b,
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
      const $ = u[R], G = f[U] = C ? Tt(f[U]) : ut(f[U]);
      if (xn($, G))
        M(
          $,
          G,
          m,
          null,
          b,
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
        const $ = U + 1, G = $ < j ? f[$].el : A;
        for (; y <= U; )
          M(
            null,
            f[y] = C ? Tt(f[y]) : ut(f[y]),
            m,
            G,
            b,
            T,
            x,
            w,
            C
          ), y++;
      }
    } else if (y > U)
      for (; y <= R; )
        Ge(u[y], b, T, !0), y++;
    else {
      const $ = y, G = y, Z = /* @__PURE__ */ new Map();
      for (y = G; y <= U; y++) {
        const Se = f[y] = C ? Tt(f[y]) : ut(f[y]);
        Se.key != null && Z.set(Se.key, y);
      }
      let X, ue = 0;
      const pe = U - G + 1;
      let Pe = !1, He = 0;
      const Ye = new Array(pe);
      for (y = 0; y < pe; y++) Ye[y] = 0;
      for (y = $; y <= R; y++) {
        const Se = u[y];
        if (ue >= pe) {
          Ge(Se, b, T, !0);
          continue;
        }
        let ze;
        if (Se.key != null)
          ze = Z.get(Se.key);
        else
          for (X = G; X <= U; X++)
            if (Ye[X - G] === 0 && xn(Se, f[X])) {
              ze = X;
              break;
            }
        ze === void 0 ? Ge(Se, b, T, !0) : (Ye[ze - G] = y + 1, ze >= He ? He = ze : Pe = !0, M(
          Se,
          f[ze],
          m,
          null,
          b,
          T,
          x,
          w,
          C
        ), ue++);
      }
      const jt = Pe ? fc(Ye) : pn;
      for (X = jt.length - 1, y = pe - 1; y >= 0; y--) {
        const Se = G + y, ze = f[Se], Tn = f[Se + 1], En = Se + 1 < j ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : A;
        Ye[y] === 0 ? M(
          null,
          ze,
          m,
          En,
          b,
          T,
          x,
          w,
          C
        ) : Pe && (X < 0 || y !== jt[X] ? mt(ze, m, En, 2) : X--);
      }
    }
  }, mt = (u, f, m, A, b = null) => {
    const { el: T, type: x, transition: w, children: C, shapeFlag: y } = u;
    if (y & 6) {
      mt(u.component.subTree, f, m, A);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, A);
      return;
    }
    if (y & 64) {
      x.move(u, f, m, kt);
      return;
    }
    if (x === Te) {
      r(T, f, m);
      for (let R = 0; R < C.length; R++)
        mt(C[R], f, m, A);
      r(u.anchor, f, m);
      return;
    }
    if (x === ns) {
      I(u, f, m);
      return;
    }
    if (A !== 2 && y & 1 && w)
      if (A === 0)
        w.persisted && !T[Qr] ? r(T, f, m) : (w.beforeEnter(T), r(T, f, m), $e(() => w.enter(T), b));
      else {
        const { leave: R, delayLeave: U, afterLeave: $ } = w, G = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, Z = () => {
          const X = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), w.persisted && !X ? G() : R(T, () => {
            G(), $ && $();
          });
        };
        U ? U(T, G, Z) : Z();
      }
    else
      r(T, f, m);
  }, Ge = (u, f, m, A = !1, b = !1) => {
    const {
      type: T,
      props: x,
      ref: w,
      children: C,
      dynamicChildren: y,
      shapeFlag: j,
      patchFlag: R,
      dirs: U,
      cacheIndex: $,
      memo: G
    } = u;
    if (R === -2 && (b = !1), w != null && (xt(), Ln(w, null, m, u, !0), wt()), $ != null && (f.renderCache[$] = void 0), j & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const Z = j & 1 && U, X = !Fn(u);
    let ue;
    if (X && (ue = x && x.onVnodeBeforeUnmount) && lt(ue, f, u), j & 6)
      Lr(u.component, m, A);
    else {
      if (j & 128) {
        u.suspense.unmount(m, A);
        return;
      }
      Z && Vt(u, null, f, "beforeUnmount"), j & 64 ? u.type.remove(
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
      (T !== Te || R > 0 && R & 64) ? Ht(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === Te && R & 384 || !b && j & 16) && Ht(C, f, m), A && Gn(u);
    }
    const pe = G != null && $ == null;
    (X && (ue = x && x.onVnodeUnmounted) || Z || pe) && $e(() => {
      ue && lt(ue, f, u), Z && Vt(u, null, f, "unmounted"), pe && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: A, transition: b } = u;
    if (f === Te) {
      oe(m, A);
      return;
    }
    if (f === ns) {
      g(u);
      return;
    }
    const T = () => {
      s(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: x, delayLeave: w } = b, C = () => x(m, T);
      w ? w(u.el, T, C) : C();
    } else
      T();
  }, oe = (u, f) => {
    let m;
    for (; u !== f; )
      m = S(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: A, scope: b, job: T, subTree: x, um: w, m: C, a: y } = u;
    Si(C), Si(y), A && cr(A), b.stop(), T && (T.flags |= 8, Ge(x, u, f, m)), w && $e(w, f), $e(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ht = (u, f, m, A = !1, b = !1, T = 0) => {
    for (let x = T; x < u.length; x++)
      Ge(u[x], f, m, A, b);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = S(u.anchor || u.el), m = f && f[wa];
    return m ? S(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let A;
    u == null ? f._vnode && (Ge(f._vnode, null, null, !0), A = f._vnode.component) : M(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(A), Mo(), yn = !1);
  }, kt = {
    p: M,
    um: Ge,
    m: mt,
    r: Gn,
    mt: tn,
    mc: we,
    pc: te,
    pbc: Ie,
    n: nn,
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Tt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = Tt(l)), l.el = o.el), l.type === Ot && !l.el && (l.el = o.el);
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
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Zt = [];
let Ke = null;
function q(e = !1) {
  Zt.push(Ke = e ? null : []);
}
function ol() {
  Zt.pop(), Ke = Zt[Zt.length - 1] || null;
}
let $n = 1;
function Ai(e, t = !1) {
  $n += e, e < 0 && Ke && t && (Ke.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? Ke || pn : null, ol(), $n > 0 && Ke && Ke.push(e), e;
}
function J(e, t, n, r, s, i) {
  return ll(
    N(
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
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, fr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || /* @__PURE__ */ Ue(e) || Y(e) ? { i: qe, r: e, k: t, f: !!n } : e : null);
function N(e, t = null, n = null, r = 0, s = null, i = e === Te ? 0 : 1, o = !1, l = !1) {
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
const vt = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Ot), al(e)) {
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
  return N(
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
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
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
function Me(e = " ", t = 0) {
  return vt(Nr, null, e, t);
}
function bt(e = "", t = !1) {
  return t ? (q(), pc(Ot, null, e)) : vt(Ot, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? vt(Ot) : z(e) ? vt(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? Tt(e) : vt(Nr, null, String(e));
}
function Tt(e) {
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
    t = String(t), r & 64 ? (n = 16, t = [Me(t)]) : n = 8;
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
function lt(e, t, n, r = null) {
  nt(e, t, 7, [
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
let Fe = null;
const Tc = () => Fe || qe;
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
    (n) => Fe = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Kn = (e) => {
  const t = Fe;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, vi = () => {
  Fe && Fe.scope.off(), yr(null);
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
    xt();
    const s = e.setupContext = r.length > 1 ? vc(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (wt(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
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
  e.render || (e.render = r.render || ft);
  {
    const s = Kn(e);
    xt();
    try {
      Va(e);
    } finally {
      wt(), s();
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
const Je = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", yt = typeof document < "u" ? document : null, Ci = yt && /* @__PURE__ */ yt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? yt.createElementNS(Cc, e) : t === "mathml" ? yt.createElementNS(Oc, e) : n ? yt.createElement(e, { is: n }) : yt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => yt.createTextNode(e),
  createComment: (e) => yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yt.querySelector(e),
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
      en(r),
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
  let r = Qe(t);
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
    i ? "" : dt(n) ? String(n) : n
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
function Yt(e, t, n, r) {
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
      Yt(e, l, h, c);
    } else o && (Hc(e, l, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : en(e.slice(2)), t];
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
        h && nt(
          h,
          t,
          5,
          l
        );
      }
    } else
      nt(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(r))) ? Di(e, Qe(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
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
  const r = Qe(t);
  return Array.isArray(n) ? n.some((s) => Qe(s) === r) : Object.keys(n).some((s) => Qe(s) === r);
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
const qt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[qt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    Yt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[qt](is(e.value, n, i));
    }), (n || i) && Yt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (Yt(e, "compositionstart", qc), Yt(e, "compositionend", Li), Yt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[qt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[qt] = Tr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? xr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Bt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Qt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? z(o) ? s.slice() : s : o
      ];
      try {
        e[qt](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
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
  if (!n || z(e)) return Mt(e, t);
  if (Qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = z(t);
  if (!(n && !r && !Qt(t))) {
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
let Ee = Object.freeze, Ae = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, vs = hl.construct;
Ee || (Ee = function(t) {
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
const Gt = be(Array.prototype.forEach), fu = be(Array.prototype.lastIndexOf), $i = be(Array.prototype.pop), wn = be(Array.prototype.push), du = be(Array.prototype.splice), gn = Array.isArray, Pn = be(String.prototype.toLowerCase), os = be(String.prototype.toString), Vi = be(String.prototype.match), Cn = be(String.prototype.replace), zi = be(String.prototype.indexOf), pu = be(String.prototype.trim), hu = be(Number.prototype.toString), mu = be(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : be(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : be(Symbol.prototype.toString), Ve = be(Object.prototype.hasOwnProperty), On = be(Object.prototype.toString), Ce = be(RegExp.prototype.test), Wt = gu(TypeError);
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
function ee(e, t) {
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
      const t = e, n = Ze(t, "toString");
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
function Ze(e, t) {
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
const Ki = Ee(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Ee(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Ee(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = Ee(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Ee(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = Ee(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Ee(["#text"]), Yi = Ee(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = Ee(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Ee(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Ee(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = Ae(/{{[\w\W]*|^[\w\W]*}}/g), Au = Ae(/<%[\w\W]*|^[\w\W]*%>/g), vu = Ae(/\${[\w\W]*/g), xu = Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = Ae(/^aria-[\-\w]+$/), Xi = Ae(
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = Ee(ee({}, ml)), Mu = (function() {
  const e = {};
  return Gt(ml, (t) => {
    e[t] = Ae(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ee(e);
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
  return Ve(t, n) && gn(t[n]) ? ee(s.base ? We(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Ve(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? We(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (v) => gl(v);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Be.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, S = l.prototype, O = Ze(S, "cloneNode"), k = Ze(S, "remove"), M = Ze(S, "nextSibling"), W = Ze(S, "childNodes"), H = Ze(S, "parentNode"), V = Ze(S, "shadowRoot"), I = Ze(S, "attributes"), g = o && o.prototype ? Ze(o.prototype, "nodeType") : null, Q = o && o.prototype ? Ze(o.prototype, "nodeName") : null, ye = o && o.prototype ? Ze(o.prototype, "ownerDocument") : null, _e = function(a) {
    return g ? g(a) : a.nodeType;
  }, we = function(a) {
    return Q ? Q(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const v = n.createElement("template");
    v.content && v.content.ownerDocument && (n = v.content.ownerDocument);
  }
  let fe, Ie = "", pt, Ft = !1, rt = 0;
  const tn = function() {
    if (rt > 0)
      throw Wt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ht = function(a) {
    tn(), rt++;
    try {
      return fe.createHTML(a);
    } finally {
      rt--;
    }
  }, ve = function(a) {
    tn(), rt++;
    try {
      return fe.createScriptURL(a);
    } finally {
      rt--;
    }
  }, ce = function() {
    return Ft || (pt = Fu(_, s), Ft = !0), pt;
  }, te = n, Xe = te.implementation, Ut = te.createNodeIterator, mt = te.createDocumentFragment, Ge = te.getElementsByTagName, Gn = r.importNode;
  let oe = Qi();
  t.isSupported = typeof pl == "function" && typeof H == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = Su, Ht = Au, nn = vu, yn = xu, Yn = wu, kt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const A = ee({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let b = null;
  const T = ee({}, [...Yi, ...us, ...qi, ...ar]);
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
  let j = !0, R = !0, U = !1, $ = !0, G = !1, Z = !0, X = !1, ue = !1, pe = null, Pe = null, He = !1, Ye = !1, jt = !1, Se = !1, ze = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, Hr = !1, rn = {}, sn = null;
  const $s = ee({}, [
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
  const zs = ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bs = null;
  const Ws = ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let on = st, kr = !1, jr = null;
  const bl = ee({}, [qn, Xn, st], os), Ks = Ee(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = ee({}, Ks);
  const Gs = Ee(["annotation-xml"]);
  let Vr = ee({}, Gs);
  const yl = ee({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let me = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = We(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, me = Sn === "application/xhtml+xml" ? os : Pn, m = Pt(a, "ALLOWED_TAGS", A, {
      transform: me
    }), b = Pt(a, "ALLOWED_ATTR", T, {
      transform: me
    }), jr = Pt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Pt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: me,
      base: Ws
    }), Vs = Pt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: me,
      base: zs
    }), sn = Pt(a, "FORBID_CONTENTS", $s, {
      transform: me
    }), w = Pt(a, "FORBID_TAGS", We({}), {
      transform: me
    }), C = Pt(a, "FORBID_ATTR", We({}), {
      transform: me
    }), rn = Ve(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? We(a.USE_PROFILES) : a.USE_PROFILES : !1, j = a.ALLOW_ARIA_ATTR !== !1, R = a.ALLOW_DATA_ATTR !== !1, U = a.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = a.SAFE_FOR_TEMPLATES || !1, Z = a.SAFE_FOR_XML !== !1, X = a.WHOLE_DOCUMENT || !1, Ye = a.RETURN_DOM || !1, jt = a.RETURN_DOM_FRAGMENT || !1, Se = a.RETURN_TRUSTED_TYPE || !1, He = a.FORCE_BODY || !1, ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : st, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ee({}, Ks)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ee({}, Gs)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (x = dn(null), Ve(p, "tagNameCheck") && Ys(p.tagNameCheck) && (x.tagNameCheck = p.tagNameCheck), Ve(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (x.attributeNameCheck = p.attributeNameCheck), Ve(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ae(x), G && (R = !1), jt && (Ye = !0), rn && (m = ee({}, Gi), b = dn(null), rn.html === !0 && (ee(m, Ki), ee(b, Yi)), rn.svg === !0 && (ee(m, ls), ee(b, us), ee(b, ar)), rn.svgFilters === !0 && (ee(m, as), ee(b, us), ee(b, ar)), rn.mathMl === !0 && (ee(m, cs), ee(b, qi), ee(b, ar))), y.tagCheck = null, y.attributeCheck = null, Ve(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === A && (m = We(m)), ee(m, a.ADD_TAGS, me))), Ve(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (b === T && (b = We(b)), ee(b, a.ADD_ATTR, me))), Ve(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = We(sn)), ee(sn, a.ADD_FORBID_CONTENTS, me)), Ur && (m["#text"] = !0), X && ee(m, ["html", "head", "body"]), m.table && (ee(m, ["tbody"]), delete w.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = fe;
      fe = a.TRUSTED_TYPES_POLICY;
      try {
        Ie = ht("");
      } catch (P) {
        throw fe = E, P;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (fe = void 0, Ie = "") : (fe === void 0 && (fe = ce()), fe && typeof Ie == "string" && (Ie = ht("")));
    Ee && Ee(a), ln = a;
  }, qs = ee({}, [...ls, ...as, ...Tu]), Xs = ee({}, [...cs, ...Eu]), Al = function(a, p, E) {
    return p.namespaceURI === st ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, vl = function(a, p, E) {
    return p.namespaceURI === st ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = H(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), P = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? Al(E, p, P) : a.namespaceURI === qn ? vl(E, p, P) : a.namespaceURI === st ? xl(E, p, P) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, It = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      H(a).removeChild(a);
    } catch {
      if (k(a), !H(a))
        throw Wt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
      Gt(p, (F) => {
        wn(P, F);
      }), Gt(P, (F) => {
        try {
          k(F);
        } catch {
        }
      });
    }
    const E = I(a);
    if (E)
      for (let P = E.length - 1; P >= 0; --P) {
        const F = E[P], B = F && F.name;
        typeof B == "string" && Js(a, F, B);
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
          It(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = I(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const P = p[E], F = P && P.name;
        typeof F != "string" || b[me(F)] || Js(a, P, F);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      _e(E) === Be.element && Cl(E);
      const F = W(E);
      if (F)
        for (let B = F.length - 1; B >= 0; --B)
          p.push(F[B]);
    }
  }, Zs = function(a, p) {
    return Z ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!Z)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), P = _e(E);
      if (P === Be.processingInstruction || P === Be.comment && Ce(Zi, E.data)) {
        try {
          k(E);
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
      const F = W(E);
      if (F)
        for (let B = F.length - 1; B >= 0; --B)
          p.push(F[B]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (He)
      a = "<remove></remove>" + a;
    else {
      const B = Vi(a, /^[\r\n\t ]+/);
      E = B && B[0];
    }
    Sn === "application/xhtml+xml" && on === st && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const P = fe ? ht(a) : a;
    if (on === st)
      try {
        p = new d().parseFromString(P, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Ie : P;
      } catch {
      }
    }
    const F = p.body || p.documentElement;
    return a && E && F.insertBefore(n.createTextNode(E), F.childNodes[0] || null), on === st ? Ge.call(p, X ? "html" : "body")[0] : X ? p.documentElement : F;
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
    return a = Cn(a, Lr, " "), a = Cn(a, Ht, " "), a = Cn(a, nn, " "), a;
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
    let F = P.nextNode();
    for (; F; )
      F.data = Qn(F.data), F = P.nextNode();
    const B = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    B && Gt(B, (le) => {
      an(le.content) && Br(le.content);
    });
  }, er = function(a) {
    const p = Q ? Q(a) : null;
    return typeof p != "string" || me(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== I(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== g(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, an = function(a) {
    if (!g || typeof a != "object" || a === null)
      return !1;
    try {
      return g(a) === Be.documentFragment;
    } catch {
      return !1;
    }
  }, An = function(a) {
    if (!g || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof g(a) == "number";
    } catch {
      return !1;
    }
  };
  function it(v, a, p) {
    v.length !== 0 && Gt(v, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(Z && a.hasChildNodes() && !An(a.firstElementChild) && Ce(Ji, a.textContent) && Ce(Ji, a.innerHTML) || Z && a.namespaceURI === st && Nu[p] && (An(a.firstElementChild) || typeof a.textContent == "string" && Ce(Mu[p], a.textContent)) || a.nodeType === Be.processingInstruction || Z && a.nodeType === Be.comment && Ce(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Ce(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, P = new Array(E > 2 ? E - 2 : 0), F = 2; F < E; F++)
        P[F - 2] = arguments[F];
      return !!a(p, ...P);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!w[p] && ii(p) && tr(x.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const P = H(a), F = W(a);
      if (F && P) {
        const B = F.length;
        for (let le = B - 1; le >= 0; --le) {
          const de = a === E ? O(F[le], !0) : F[le];
          P.insertBefore(de, M(a));
        }
      }
    }
    return It(a), !0;
  }, ti = function(a, p, E, P) {
    return a.length === 0 ? p : p === E || p === P ? We(p) : p;
  }, ni = function(a, p) {
    return a === p || H(a) !== null ? !1 : (Hr && Zn(a), !0);
  }, ri = function(a, p) {
    if (it(oe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return It(a), !0;
    const E = me(we(a));
    if (m = ti(oe.uponSanitizeElement, m, A, pe), it(oe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return It(a), !0;
    if (w[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const F = Il(a, E, p);
      return F === !1 && it(oe.afterSanitizeElements, a, null), F;
    }
    if (_e(a) === Be.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Ce(Pu, a.innerHTML))
      return It(a), !0;
    if (G && a.nodeType === Be.text) {
      const F = Qn(a.textContent);
      a.textContent !== F && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = F);
    }
    return it(oe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (C[p] || Zs(p, a) || ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const P = b[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return R && Ce(yn, p) || j && Ce(Yn, p) ? !0 : P ? Bs[p] || Ce(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || U && !Ce(kt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(x.tagNameCheck, a) && tr(x.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && x.allowCustomizedBuiltInElements && tr(x.tagNameCheck, E)
    );
  }, Pl = ee({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Ce(u, a);
  }, Dl = function(a, p, E, P) {
    if (fe && typeof _ == "object" && typeof _.getAttributeType == "function" && !E)
      switch (_.getAttributeType(a, p)) {
        case "TrustedHTML":
          return ht(P);
        case "TrustedScriptURL":
          return ve(P);
      }
    return P;
  }, Nl = function(a, p, E, P) {
    try {
      E ? a.setAttributeNS(E, p, P) : a.setAttribute(p, P), er(a) ? It(a) : $i(t.removed);
    } catch {
      $t(p, a);
    }
  }, oi = function(a) {
    it(oe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    b = ti(oe.uponSanitizeAttribute, b, T, Pe);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let P = p.length;
    const F = me(a.nodeName);
    for (; P--; ) {
      const B = p[P], le = B.name, de = B.namespaceURI, ke = B.value, je = me(le), Kr = ke;
      let De = le === "value" ? Kr : pu(Kr);
      if (E.attrName = je, E.attrValue = De, E.keepAttr = !0, E.forceKeepAttr = void 0, it(oe.uponSanitizeAttribute, a, E), De = E.attrValue, Tn && (je === "id" || je === "name") && zi(De, En) !== 0 && ($t(le, a, B), De = En + De), Z && Ce(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, De)) {
        $t(le, a, B);
        continue;
      }
      if (je === "attributename" && Vi(De, "href")) {
        $t(le, a, B);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          $t(le, a, B);
          continue;
        }
        if (!$ && Ce(Du, De)) {
          $t(le, a, B);
          continue;
        }
        if (G && (De = Qn(De)), !si(F, je, De)) {
          $t(le, a, B);
          continue;
        }
        De = Dl(F, je, de, De), De !== Kr && Nl(a, le, de, De);
      }
    }
    it(oe.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (it(oe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (it(oe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), _e(p) === Be.element) {
        const P = V(p);
        an(P) && (Wr(P), nr(P));
      }
    it(oe.afterSanitizeShadowDOM, a, null);
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
        const de = Q ? Q(P) : null;
        if (typeof de == "string" && me(de) === "template") {
          const ke = P.content;
          an(ke) && p.push({
            node: ke,
            shadow: null
          });
        }
      }
      if (B) {
        const de = V(P);
        an(de) && p.push({
          node: null,
          shadow: de
        }, {
          node: de,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(v) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, P = null, F = null;
    if (kr = !v, kr && (v = "<!-->"), typeof v != "string" && !An(v) && (v = bu(v), typeof v != "string"))
      throw Wt("dirty is not a string, aborting");
    if (!t.isSupported)
      return v;
    ue ? (m = pe, b = Pe) : zr(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (m = We(m)), oe.uponSanitizeAttribute.length > 0 && (b = We(b)), t.removed = [];
    const B = Hr && typeof v != "string" && An(v);
    if (B) {
      Ol(v);
      const ke = we(v);
      if (typeof ke == "string") {
        const je = me(ke);
        if (!m[je] || w[je])
          throw Jn(v), Wt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(v))
        throw Jn(v), Wt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(v);
      } catch (je) {
        throw Jn(v), je;
      }
    } else if (An(v))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(v, !0), E.nodeType === Be.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Wr(E);
    else {
      if (!Ye && !G && !X && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return fe && Se ? ht(v) : v;
      if (p = Qs(v), !p)
        return Ye ? null : Se ? Ie : "";
    }
    p && He && It(p.firstChild);
    const le = B ? v : p;
    try {
      const ke = ei(le);
      for (; P = ke.nextNode(); )
        ri(P, le), oi(P), an(P.content) && nr(P.content);
    } catch (ke) {
      throw B && (Jn(v), Gt(t.removed, (je) => {
        je.element && Zn(je.element);
      })), ke;
    }
    if (B)
      return Gt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      }), G && Br(v), v;
    if (Ye) {
      if (G && Br(p), jt)
        for (F = mt.call(p.ownerDocument); p.firstChild; )
          F.appendChild(p.firstChild);
      else
        F = p;
      return (b.shadowroot || b.shadowrootmode) && (F = Gn.call(r, F, !0)), F;
    }
    let de = X ? p.outerHTML : p.innerHTML;
    return X && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Ce(Ru, p.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + de), G && (de = Qn(de)), fe && Se ? ht(de) : de;
  }, t.setConfig = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(v), ue = !0, pe = m, Pe = b;
  }, t.clearConfig = function() {
    ln = null, ue = !1, pe = null, Pe = null, fe = pt, Ie = "";
  }, t.isValidAttribute = function(v, a, p) {
    ln || zr({});
    const E = me(v), P = me(a);
    return si(E, P, p);
  }, t.addHook = function(v, a) {
    typeof a == "function" && Ve(oe, v) && wn(oe[v], a);
  }, t.removeHook = function(v, a) {
    if (Ve(oe, v)) {
      if (a !== void 0) {
        const p = fu(oe[v], a);
        return p === -1 ? void 0 : du(oe[v], p, 1)[0];
      }
      return $i(oe[v]);
    }
  }, t.removeHooks = function(v) {
    Ve(oe, v) && (oe[v] = []);
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
function D(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (M) => M, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, _ = (M) => typeof M == "string" || typeof M == "number", S = (M, W, H) => M.replace(/%n/g, "" + H).replace(/{([^{}]*)}/g, (V, I) => {
    if (W === void 0 || !(I in W))
      return d(V);
    const g = W[I];
    return _(g) ? d(`${g}`) : typeof g == "object" && _(g.value) ? (g.escape !== !1 ? to : c)(`${g.value}`) : d(V);
  });
  let k = (s?.bundle ?? $u(e)).translations[t] || t;
  return k = Array.isArray(k) ? k[0] : k, h(typeof i == "object" || o !== void 0 ? S(
    k,
    i,
    o
  ) : k);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "title" }, lf = { value: "recent" }, af = { value: "publicationDate" }, cf = { value: "publication" }, uf = { value: "format" }, ff = ["value"], df = ["value"], pf = ["aria-label"], hf = ["aria-label"], mf = ["aria-label"], gf = ["href"], _f = {
  key: 1,
  class: "library-muted"
}, bf = ["href"], yf = {
  key: 3,
  class: "library-muted"
}, Tf = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Ef = { id: "library-periodical-groups-heading" }, Sf = { class: "library-muted" }, Af = ["href"], vf = { class: "library-muted" }, xf = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, wf = { id: "library-periodical-groups-empty-heading" }, Cf = { class: "library-muted" }, Of = {
  key: 2,
  class: "library-empty-content",
  role: "status"
}, Rf = { class: "library-muted" }, If = {
  key: 3,
  class: "library-cover-gallery"
}, Pf = ["href", "aria-label"], Df = ["src", "alt"], Nf = { class: "library-cover-summary" }, Mf = {
  key: 0,
  class: "library-creator"
}, Lf = { class: "library-muted" }, Ff = { key: 0 }, Uf = { key: 1 }, Hf = { key: 2 }, kf = { key: 3 }, jf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, $f = { key: 0 }, Vf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, zf = {
  key: 0,
  class: "library-muted"
}, Bf = ["href"], Wf = ["href"], Kf = ["href"], Gf = ["href"], Yf = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, qf = { class: "library-hero-actions" }, Xf = ["href"], Jf = ["href"], Zf = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Je(() => t.state.items || []), i = Je(() => t.state.shelves || []), o = Je(() => t.state.formats || []), l = Je(() => t.state.publications || []), c = Je(() => t.state.publicationSummaries || []), h = Je(() => t.state.publicationYears || []), d = Je(() => t.state.scanStatuses || []), _ = Je(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), S = /* @__PURE__ */ Or({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      publication: t.state.activeFilters?.publication || "",
      year: t.state.activeFilters?.year || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), O = Je(() => t.state.settingsUrl || ""), k = Je(() => t.state.metadataExportUrl || "");
    function M(V) {
      return String(V || "").toUpperCase();
    }
    function W(V) {
      return V.nextcloudTags || [];
    }
    function H(V) {
      const I = new URLSearchParams(window.location.search);
      return I.set("publication", V), I.set("sort", "publication"), I.delete("page"), `?${I.toString()}`;
    }
    return (V, I) => (q(), J("div", Vu, [
      N("section", zu, [
        N("h2", Bu, L(K(D)("library", "Publication catalogue")), 1),
        N("p", Wu, L(K(D)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        N("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": K(D)("library", "Catalogue search and filters")
        }, [
          N("label", null, [
            Me(L(K(D)("library", "Search title / author")) + " ", 1),
            _t(N("input", {
              "onUpdate:modelValue": I[0] || (I[0] = (g) => S.q = g),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, S.q]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Type")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[1] || (I[1] = (g) => S.type = g),
              name: "type"
            }, [
              N("option", Gu, L(K(D)("library", "All types")), 1),
              (q(), J(Te, null, ot(n, (g) => N("option", {
                key: g,
                value: g
              }, L(g), 9, Yu)), 64))
            ], 512), [
              [Bt, S.type]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Series / periodical")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[2] || (I[2] = (g) => S.publication = g),
              name: "publication"
            }, [
              N("option", qu, L(K(D)("library", "All series and periodicals")), 1),
              (q(!0), J(Te, null, ot(l.value, (g) => (q(), J("option", {
                key: g,
                value: g
              }, L(g), 9, Xu))), 128))
            ], 512), [
              [Bt, S.publication]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Publication year")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[3] || (I[3] = (g) => S.year = g),
              name: "year"
            }, [
              N("option", Ju, L(K(D)("library", "All years")), 1),
              (q(!0), J(Te, null, ot(h.value, (g) => (q(), J("option", {
                key: g,
                value: g
              }, L(g), 9, Zu))), 128))
            ], 512), [
              [Bt, S.year]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Nextcloud tag")) + " ", 1),
            _t(N("input", {
              "onUpdate:modelValue": I[4] || (I[4] = (g) => S.tag = g),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, S.tag]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Format")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[5] || (I[5] = (g) => S.format = g),
              name: "format"
            }, [
              N("option", Qu, L(K(D)("library", "All formats")), 1),
              (q(!0), J(Te, null, ot(o.value, (g) => (q(), J("option", {
                key: g,
                value: g
              }, L(M(g)), 9, ef))), 128))
            ], 512), [
              [Bt, S.format]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Shelf")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[6] || (I[6] = (g) => S.shelf = g),
              name: "shelf"
            }, [
              N("option", tf, L(K(D)("library", "All shelves")), 1),
              (q(!0), J(Te, null, ot(i.value, (g) => (q(), J("option", {
                key: g,
                value: g
              }, L(g), 9, nf))), 128))
            ], 512), [
              [Bt, S.shelf]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Scan status")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[7] || (I[7] = (g) => S.status = g),
              name: "status"
            }, [
              N("option", rf, L(K(D)("library", "All scan statuses")), 1),
              (q(!0), J(Te, null, ot(d.value, (g) => (q(), J("option", {
                key: g,
                value: g
              }, L(g), 9, sf))), 128))
            ], 512), [
              [Bt, S.status]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Sort")) + " ", 1),
            _t(N("select", {
              "onUpdate:modelValue": I[8] || (I[8] = (g) => S.sort = g),
              name: "sort"
            }, [
              N("option", of, L(K(D)("library", "Title")), 1),
              N("option", lf, L(K(D)("library", "Recently added")), 1),
              N("option", af, L(K(D)("library", "Publication date")), 1),
              N("option", cf, L(K(D)("library", "Series / periodical")), 1),
              N("option", uf, L(K(D)("library", "Format")), 1)
            ], 512), [
              [Bt, S.sort]
            ])
          ]),
          N("label", null, [
            Me(L(K(D)("library", "Page size")) + " ", 1),
            N("select", {
              value: _.value.limit,
              name: "limit"
            }, [
              (q(), J(Te, null, ot(r, (g) => N("option", {
                key: g,
                value: g
              }, L(g), 9, df)), 64))
            ], 8, ff)
          ]),
          N("button", {
            type: "submit",
            class: "button primary",
            "aria-label": K(D)("library", "Apply catalogue filters")
          }, L(K(D)("library", "Apply filters")), 9, pf),
          N("a", {
            href: "?",
            class: "button secondary",
            "aria-label": K(D)("library", "Clear catalogue filters")
          }, L(K(D)("library", "Clear")), 9, hf)
        ], 8, Ku),
        N("nav", {
          class: "library-pagination",
          "aria-label": K(D)("library", "Catalogue pagination")
        }, [
          N("span", null, "Showing " + L(_.value.from) + "–" + L(_.value.to) + " of " + L(_.value.total) + " catalogue items", 1),
          _.value.previousUrl ? (q(), J("a", {
            key: 0,
            href: _.value.previousUrl
          }, L(K(D)("library", "Previous")), 9, gf)) : (q(), J("span", _f, L(K(D)("library", "Previous")), 1)),
          _.value.nextUrl ? (q(), J("a", {
            key: 2,
            href: _.value.nextUrl
          }, L(K(D)("library", "Next")), 9, bf)) : (q(), J("span", yf, L(K(D)("library", "Next")), 1))
        ], 8, mf),
        c.value.length > 0 ? (q(), J("section", Tf, [
          N("h3", Ef, L(K(D)("library", "Top series and periodicals")), 1),
          N("p", Sf, L(K(D)("library", "Jump into recurring publications with one click.")), 1),
          N("ul", null, [
            (q(!0), J(Te, null, ot(c.value, (g) => (q(), J("li", {
              key: g.publication
            }, [
              N("a", {
                href: H(g.publication)
              }, L(g.publication), 9, Af),
              N("span", vf, L(g.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (q(), J("section", xf, [
          N("h3", wf, L(K(D)("library", "No series or periodicals found yet")), 1),
          N("p", Cf, L(K(D)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : bt("", !0),
        s.value.length === 0 ? (q(), J("div", Of, [
          N("h3", null, L(K(D)("library", "No catalogue items match")), 1),
          N("p", Rf, L(K(D)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (q(), J("div", If, [
          (q(!0), J(Te, null, ot(s.value, (g) => (q(), J("article", {
            key: g.id,
            class: "library-cover-card"
          }, [
            N("a", {
              class: "library-cover-link",
              href: g.openUrl,
              "aria-label": `Read ${g.title}`
            }, [
              N("img", {
                class: "library-cover-image",
                src: g.coverUrl,
                alt: `Cover for ${g.title}`,
                loading: "lazy"
              }, null, 8, Df)
            ], 8, Pf),
            N("div", Nf, [
              N("h3", null, L(g.title), 1),
              g.creators ? (q(), J("p", Mf, L(g.creators), 1)) : bt("", !0),
              N("p", Lf, [
                N("span", null, L(g.publicationType), 1),
                g.publication ? (q(), J("span", Ff, " · " + L(g.publication), 1)) : bt("", !0),
                g.publicationDate ? (q(), J("span", Uf, " · " + L(g.publicationDate), 1)) : bt("", !0),
                g.extension ? (q(), J("span", Hf, " · Format: " + L(M(g.extension)), 1)) : bt("", !0),
                g.shelf ? (q(), J("span", kf, " · Shelf: " + L(g.shelf), 1)) : bt("", !0)
              ]),
              g.scanStatus !== "indexed" || g.scanError ? (q(), J("p", jf, [
                Me(" scanStatus: " + L(g.scanStatus || "unknown"), 1),
                g.scanError ? (q(), J("span", $f, " · scanError: " + L(g.scanError), 1)) : bt("", !0)
              ])) : bt("", !0),
              N("div", Vf, [
                W(g).length === 0 ? (q(), J("span", zf, "No Nextcloud tags")) : (q(!0), J(Te, { key: 1 }, ot(W(g), (Q) => (q(), J("span", {
                  key: Q.id,
                  class: "library-tag"
                }, L(Q.name), 1))), 128))
              ]),
              N("p", null, [
                N("a", {
                  href: g.openUrl
                }, L(K(D)("library", "Read")), 9, Bf),
                I[9] || (I[9] = Me(" · ", -1)),
                N("a", {
                  href: g.filesUrl
                }, L(K(D)("library", "Show in Files")), 9, Wf),
                I[10] || (I[10] = Me(" · ", -1)),
                N("a", {
                  href: g.downloadUrl
                }, L(K(D)("library", "Download source")), 9, Kf),
                I[11] || (I[11] = Me(" · ", -1)),
                N("a", {
                  href: g.detailsUrl
                }, L(K(D)("library", "Details")), 9, Gf)
              ])
            ])
          ]))), 128))
        ]))
      ]),
      N("section", Yf, [
        I[12] || (I[12] = N("div", null, [
          N("h2", null, "Library"),
          N("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        N("div", qf, [
          N("a", {
            href: O.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Xf),
          k.value ? (q(), J("a", {
            key: 0,
            href: k.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Jf)) : bt("", !0)
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
function Qf(e, t, n, r = ge) {
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
  h.value = "", h.textContent = s, c.appendChild(h), Qf(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function ed(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", D("library", "Catalogue search and filters")), so(r, D("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, D("library", "Type"), "type", n.type, D("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, D("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, D("library", "Format"), "format", n.format, D("library", "All formats"), e.formats || [], _l), un(r, D("library", "Shelf"), "shelf", n.shelf, D("library", "All shelves"), e.shelves || []), un(r, D("library", "Scan status"), "status", n.status, D("library", "All scan statuses"), e.scanStatuses || []), un(r, D("library", "Sort"), "sort", n.sort || "title", D("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, D("library", "Page size"), "limit", t.limit || 100, D("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", D("library", "Apply catalogue filters")), s.textContent = D("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", D("library", "Clear catalogue filters")), i.textContent = D("library", "Clear"), r.append(s, i), r;
}
function td(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ge(e.settingsUrl || ""), i = ge(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = D("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = D("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(ed(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", D("library", "Catalogue pagination"));
  const _ = document.createElement("span");
  if (_.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(_), l.appendChild(d), n.length === 0) {
    const S = document.createElement("div");
    S.className = "library-empty-content", S.setAttribute("role", "status");
    const O = document.createElement("h3");
    O.textContent = D("library", "No catalogue items match");
    const k = document.createElement("p");
    k.className = "library-muted", k.textContent = D("library", "Scan enabled roots or clear the active filters."), S.append(O, k), l.appendChild(S);
  } else {
    const S = document.createElement("div");
    S.className = "library-cover-gallery";
    for (const O of n) {
      const k = document.createElement("article");
      k.className = "library-cover-card";
      const M = document.createElement("a");
      M.className = "library-cover-link", M.href = ge(O.openUrl || "#"), M.setAttribute("aria-label", `Read ${ge(O.title || "publication")}`);
      const W = document.createElement("img");
      W.className = "library-cover-image", W.src = ge(O.coverUrl || ""), W.alt = `Cover for ${ge(O.title || "publication")}`, W.loading = "lazy", M.appendChild(W);
      const H = document.createElement("div");
      H.className = "library-cover-summary";
      const V = document.createElement("h3");
      if (V.textContent = ge(O.title || "Untitled publication"), H.appendChild(V), O.creators) {
        const fe = document.createElement("p");
        fe.className = "library-creator", fe.textContent = ge(O.creators), H.appendChild(fe);
      }
      const I = document.createElement("p");
      I.className = "library-muted", I.textContent = [
        ge(O.publicationType || "other"),
        O.extension ? `Format: ${_l(O.extension)}` : "",
        O.shelf ? `Shelf: ${ge(O.shelf)}` : ""
      ].filter(Boolean).join(" · "), H.appendChild(I);
      const g = document.createElement("p"), Q = document.createElement("a");
      Q.href = ge(O.openUrl || "#"), Q.textContent = D("library", "Read");
      const ye = document.createElement("a");
      ye.href = ge(O.filesUrl || "#"), ye.textContent = D("library", "Show in Files");
      const _e = document.createElement("a");
      _e.href = ge(O.downloadUrl || "#"), _e.textContent = D("library", "Download source");
      const we = document.createElement("a");
      we.href = ge(O.detailsUrl || "#"), we.textContent = D("library", "Details"), g.append(Q, document.createTextNode(" · "), ye, document.createTextNode(" · "), _e, document.createTextNode(" · "), we), H.appendChild(g), k.append(M, H), S.appendChild(k);
    }
    l.appendChild(S);
  }
  if (o.appendChild(l), s || i) {
    const S = document.createElement("section");
    S.className = "library-hero library-secondary-panel", S.setAttribute("aria-label", "Library settings");
    const O = document.createElement("div"), k = document.createElement("h2");
    k.textContent = "Library";
    const M = document.createElement("p");
    M.className = "library-lede", M.textContent = "Browse publications already stored in Nextcloud.", O.append(k, M);
    const W = document.createElement("div");
    if (W.className = "library-hero-actions", s) {
      const H = document.createElement("a");
      H.href = s, H.className = "button secondary", H.setAttribute("aria-label", "Open Library settings"), H.textContent = "Library settings", W.appendChild(H);
    }
    if (i) {
      const H = document.createElement("a");
      H.href = i, H.className = "button secondary", H.setAttribute("aria-label", "Export corrected metadata"), H.textContent = "Export corrected metadata", W.appendChild(H);
    }
    S.append(O, W), o.appendChild(S);
  }
  return o;
}
if (dr)
  try {
    Qc(Zf, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(td(ro));
  }
//# sourceMappingURL=library-main.mjs.map
