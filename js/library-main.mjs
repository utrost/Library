// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = {}, pn = [], dt = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ne = (e, t) => Ml.call(e, t), V = Array.isArray, Mt = (e) => Bn(e) === "[object Map]", Qt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", q = (e) => typeof e == "function", me = (e) => typeof e == "string", pt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", oo = (e) => (se(e) || q(e)) && q(e.then) && q(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, et = vr(
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
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = me(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (me(e) || se(e))
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
  if (me(e))
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
    n = Lt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Lt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Lt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = pt(e), r = pt(t), n || r)
    return e === t;
  if (n = V(e), r = V(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = se(e), r = se(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Mt(e), r = Mt(t), n || r || (n = Qt(e), r = Qt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Lt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Lt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), L = (e) => me(e) ? e : e == null ? "" : V(e) || se(e) && (e.toString === lo || !q(e.toString)) ? po(e) ? L(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : pt(t) ? Yr(t) : se(t) && !V(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
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
    const t = ae, n = tt;
    ae = this, tt = !0;
    try {
      return this.fn();
    } finally {
      yo(this), ae = t, tt = n, this.flags &= -3;
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
  const t = e.dep, n = ae, r = tt;
  ae = e, tt = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || Et(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ae = n, tt = r, yo(e), e.flags &= -3;
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
let tt = !0;
const Eo = [];
function xt() {
  Eo.push(tt), tt = !1;
}
function wt() {
  const e = Eo.pop();
  tt = e === void 0 ? !0 : e;
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
    if (!ae || !tt || ae === this.computed)
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
function Re(e, t, n) {
  if (tt && ae) {
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
    const c = V(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((_, x) => {
        (x === "length" || x === kn || !pt(x) && x >= d) && l(_);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(kn)), t) {
        case "add":
          c ? h && l(o.get("length")) : (l(o.get(Xt)), Mt(e) && l(o.get(ms)));
          break;
        case "delete":
          c || (l(o.get(Xt)), Mt(e) && l(o.get(ms)));
          break;
        case "set":
          Mt(e) && l(o.get(Xt));
          break;
      }
  }
  Ps();
}
function cn(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e ? t : (Re(t, "iterate", kn), /* @__PURE__ */ nt(e) ? t : t.map(Ct));
}
function Cr(e) {
  return Re(e = /* @__PURE__ */ re(e), "iterate", kn), e;
}
function ut(e, t) {
  return /* @__PURE__ */ Ft(e) ? _n(/* @__PURE__ */ Jt(e) ? Ct(t) : t) : Ct(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => ut(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => V(t) ? cn(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
  },
  every(e, t) {
    return _t(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return _t(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => ut(this, r)),
      arguments
    );
  },
  find(e, t) {
    return _t(
      this,
      "find",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return _t(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return _t(
      this,
      "findLast",
      e,
      t,
      (n) => ut(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return _t(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return _t(this, "forEach", e, t, void 0, arguments);
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
    return _t(this, "map", e, t, void 0, arguments);
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
    return _t(this, "some", e, t, void 0, arguments);
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
    return Xr(this, "values", (e) => ut(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ nt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function _t(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ nt(e), c = o[t];
  if (c !== Jl[t]) {
    const _ = c.apply(e, i);
    return l ? Ct(_) : _;
  }
  let h = n;
  o !== e && (l ? h = function(_, x) {
    return n.call(this, ut(e, _), x, e);
  } : n.length > 2 && (h = function(_, x) {
    return n.call(this, _, x, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ nt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, _) {
    return l && (l = !1, h = ut(e, h)), n.call(this, h, ut(e, d), _, e);
  }) : n.length > 3 && (o = function(h, d, _) {
    return n.call(this, h, d, _, e);
  }));
  const c = s[t](o, ...r);
  return l ? ut(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ re(e);
  Re(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), r[t](...n)) : s;
}
function vn(e, t, n = []) {
  xt(), Is();
  const r = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Ps(), wt(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), vo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pt)
);
function Ql(e) {
  pt(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Re(t, "has", e), t.hasOwnProperty(e);
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
      /* @__PURE__ */ Ue(t) ? t : r
    );
    if ((pt(n) ? vo.has(n) : Zl(n)) || (s || Re(t, "get", n), i))
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
    const o = V(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ft(i);
      if (!/* @__PURE__ */ nt(r) && !/* @__PURE__ */ Ft(r) && (i = /* @__PURE__ */ re(i), r = /* @__PURE__ */ re(r)), !o && /* @__PURE__ */ Ue(i) && !/* @__PURE__ */ Ue(r))
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
    return (!pt(n) || !vo.has(n)) && Re(t, "has", n), r;
  }
  ownKeys(t) {
    return Re(
      t,
      "iterate",
      V(t) ? "length" : Xt
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
    const s = this.__v_raw, i = /* @__PURE__ */ re(s), o = Mt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : Ct;
    return !t && Re(
      i,
      "iterate",
      c ? ms : Xt
    ), Ie(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: _, done: x } = h.next();
          return x ? { value: _, done: x } : {
            value: l ? [d(_[0]), d(_[1])] : d(_),
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
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), l = /* @__PURE__ */ re(s);
      e || (Et(s, l) && Re(o, "get", s), Re(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : Ct;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Re(/* @__PURE__ */ re(s), "iterate", Xt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ re(i), l = /* @__PURE__ */ re(s);
      return e || (Et(s, l) && Re(o, "has", s), Re(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ re(l), h = t ? gs : e ? _n : Ct;
      return !e && Re(c, "iterate", Xt), l.forEach((d, _) => s.call(i, h(d), h(_), o));
    }
  };
  return Ie(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ re(this), o = rr(i), l = /* @__PURE__ */ re(s), c = !t && !/* @__PURE__ */ nt(s) && !/* @__PURE__ */ Ft(s) ? l : s;
        return o.has.call(i, c) || Et(s, c) && o.has.call(i, s) || Et(l, c) && o.has.call(i, l) || (i.add(c), St(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ nt(i) && !/* @__PURE__ */ Ft(i) && (i = /* @__PURE__ */ re(i));
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
  return /* @__PURE__ */ Ft(e) ? e : Ms(
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
  return /* @__PURE__ */ Ft(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
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
function W(e) {
  return /* @__PURE__ */ Ue(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : W(Reflect.get(e, t, n)),
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
  return q(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
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
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (A) => s ? A : /* @__PURE__ */ nt(A) || s === !1 || s === 0 ? At(A, 1) : At(A);
  let d, _, x, S, j = !1, M = !1;
  if (/* @__PURE__ */ Ue(e) ? (_ = () => e.value, j = /* @__PURE__ */ nt(e)) : /* @__PURE__ */ Jt(e) ? (_ = () => h(e), j = !0) : V(e) ? (M = !0, j = e.some((A) => /* @__PURE__ */ Jt(A) || /* @__PURE__ */ nt(A)), _ = () => e.map((A) => {
    if (/* @__PURE__ */ Ue(A))
      return A.value;
    if (/* @__PURE__ */ Jt(A))
      return h(A);
    if (q(A))
      return c ? c(A, 2) : A();
  })) : q(e) ? t ? _ = c ? () => c(e, 2) : e : _ = () => {
    if (x) {
      xt();
      try {
        x();
      } finally {
        wt();
      }
    }
    const A = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [S]) : e(S);
    } finally {
      Kt = A;
    }
  } : _ = dt, t && s) {
    const A = _, b = s === !0 ? 1 / 0 : s;
    _ = () => At(A(), b);
  }
  const K = Gl(), H = () => {
    d.stop(), K && K.active && ws(K.effects, d);
  };
  if (i && t) {
    const A = t;
    t = (...b) => {
      const pe = A(...b);
      return H(), pe;
    };
  }
  let G = M ? new Array(e.length).fill(ir) : ir;
  const B = (A) => {
    if (!(!(d.flags & 1) || !d.dirty && !A))
      if (t) {
        const b = d.run();
        if (A || s || j || (M ? b.some((pe, be) => Et(pe, G[be])) : Et(b, G))) {
          x && x();
          const pe = Kt;
          Kt = d;
          try {
            const be = [
              b,
              // pass undefined as the old value when it's changed for the first time
              G === ir ? void 0 : M && G[0] === ir ? [] : G,
              S
            ];
            G = b, c ? c(t, 3, be) : (
              // @ts-expect-error
              t(...be)
            );
          } finally {
            Kt = pe;
          }
        }
      } else
        d.run();
  };
  return l && l(B), d = new mo(_), d.scheduler = o ? () => o(B, !1) : B, S = (A) => ga(A, !1, d), x = d.onStop = () => {
    const A = pr.get(d);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const b of A) b();
      pr.delete(d);
    }
  }, t ? r ? B(!0) : G = d.run() : o ? o(B.bind(null, !0), !0) : d.run(), H.pause = d.pause.bind(d), H.resume = d.resume.bind(d), H.stop = H, H;
}
function At(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ue(e))
    At(e.value, t, n);
  else if (V(e))
    for (let r = 0; r < e.length; r++)
      At(e[r], t, n);
  else if (Qt(e) || Mt(e))
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
function rt(e, t, n, r) {
  if (q(e)) {
    const s = Wn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (V(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(rt(e[i], t, n, r));
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
let ct = -1;
const hn = [];
let Nt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = ct + 1, n = Le.length;
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
  if (!V(e))
    Nt && e.id === -1 ? Nt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  No();
}
function di(e, t, n = ct + 1) {
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
    if (hn.length = 0, Nt) {
      for (let n = 0; n < t.length; n++)
        Nt.push(t[n]);
      return;
    }
    for (Nt = t, fn = 0; fn < Nt.length; fn++) {
      const n = Nt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nt = null, fn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (ct = 0; ct < Le.length; ct++) {
      const t = Le[ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ct < Le.length; ct++) {
      const t = Le[ct];
      t && (t.flags &= -2);
    }
    ct = -1, Le.length = 0, Mo(), hr = null, (Le.length || hn.length) && Lo();
  }
}
let Xe = null, Fo = null;
function mr(e) {
  const t = Xe;
  return Xe = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = Xe, n) {
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
function lt(e, t) {
  if (Xe === null)
    return e;
  const n = Mr(Xe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ie] = t[s];
    i && (q(i) && (i = {
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
function zt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (xt(), rt(c, n, 8, [
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
      return n && q(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), va = () => ur(Aa);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ie) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ie({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const S = va();
      h = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!c) {
      const S = () => {
      };
      return S.stop = dt, S.resume = dt, S.pause = dt, S;
    }
  }
  const d = Fe;
  l.call = (S, j, M) => rt(S, d, j, M);
  let _ = !1;
  i === "post" ? l.scheduler = (S) => {
    $e(S, d && d.suspense);
  } : i !== "sync" && (_ = !0, l.scheduler = (S, j) => {
    j ? S() : Fs(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), _ && (S.flags |= 2, d && (S.id = d.uid, S.i = d));
  };
  const x = _a(e, t, l);
  return zn && (h ? h.push(x) : c && x()), x;
}
function xa(e, t, n) {
  const r = this.proxy, s = me(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  q(t) ? i = t : (i = t.handler, n = t);
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
    if (t & 32 && q(n.default))
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
      (M, K) => Ln(
        M,
        t && (V(t) ? t[K] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ie ? l.refs = {} : l.refs, _ = l.setupState, x = /* @__PURE__ */ re(_), S = _ === ie ? io : (M) => pi(d, M) ? !1 : ne(x, M), j = (M, K) => !(K && pi(d, K));
  if (h != null && h !== c) {
    if (hi(t), me(h))
      d[h] = null, S(h) && (_[h] = null);
    else if (/* @__PURE__ */ Ue(h)) {
      const M = t;
      j(h, M.k) && (h.value = null), M.k && (d[M.k] = null);
    }
  }
  if (q(c))
    Wn(c, l, 12, [o, d]);
  else {
    const M = me(c), K = /* @__PURE__ */ Ue(c);
    if (M || K) {
      const H = () => {
        if (e.f) {
          const G = M ? S(c) ? _[c] : d[c] : j() || !e.k ? c.value : d[e.k];
          if (s)
            V(G) && ws(G, i);
          else if (V(G))
            G.includes(i) || G.push(i);
          else if (M)
            d[c] = [i], S(c) && (_[c] = d[c]);
          else {
            const B = [i];
            j(c, e.k) && (c.value = B), e.k && (d[e.k] = B);
          }
        } else M ? (d[c] = o, S(c) && (_[c] = o)) : K && (j(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const G = () => {
          H(), gr.delete(e);
        };
        G.id = -1, gr.set(e, G), $e(G, n);
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
      const l = Kn(n), c = rt(t, n, e, o);
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
function Ze(e, t, n, r) {
  let s;
  const i = n, o = V(e);
  if (o || me(e)) {
    const l = o && /* @__PURE__ */ Jt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ nt(e), h = /* @__PURE__ */ Ft(e), e = Cr(e)), s = new Array(e.length);
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
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
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
    let d, _;
    if (h)
      return t === "$attrs" && Re(e.attrs, "get", ""), h(e);
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
    created: d,
    beforeMount: _,
    mounted: x,
    beforeUpdate: S,
    updated: j,
    activated: M,
    deactivated: K,
    beforeDestroy: H,
    beforeUnmount: G,
    destroyed: B,
    unmounted: A,
    render: b,
    renderTracked: pe,
    renderTriggered: be,
    errorCaptured: we,
    serverPrefetch: fe,
    // public API
    expose: Pe,
    inheritAttrs: ht,
    // assets
    components: Ut,
    directives: st,
    filters: tn
  } = t;
  if (h && za(h, r, null), o)
    for (const ce in o) {
      const te = o[ce];
      q(te) && (r[ce] = te.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    se(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, i)
    for (const ce in i) {
      const te = i[ce], Je = q(te) ? te.bind(n, n) : q(te.get) ? te.get.bind(n, n) : dt, Ht = !q(te) && q(te.set) ? te.set.bind(n) : dt, gt = qe({
        get: Je,
        set: Ht
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => gt.value,
        set: (Ge) => gt.value = Ge
      });
    }
  if (l)
    for (const ce in l)
      zo(l[ce], r, n, ce);
  if (c) {
    const ce = q(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((te) => {
      Sa(te, ce[te]);
    });
  }
  d && gi(d, e, "c");
  function ve(ce, te) {
    V(te) ? te.forEach((Je) => ce(Je.bind(n))) : te && ce(te.bind(n));
  }
  if (ve(Pa, _), ve(Da, x), ve(Na, S), ve(Ma, j), ve(Oa, M), ve(Ra, K), ve(ka, we), ve(Ha, pe), ve(Ua, be), ve(La, G), ve(Vo, A), ve(Fa, fe), V(Pe))
    if (Pe.length) {
      const ce = e.exposed || (e.exposed = {});
      Pe.forEach((te) => {
        Object.defineProperty(ce, te, {
          get: () => n[te],
          set: (Je) => n[te] = Je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  b && e.render === dt && (e.render = b), ht != null && (e.inheritAttrs = ht), Ut && (e.components = Ut), st && (e.directives = st), fe && jo(e);
}
function za(e, t, n = dt) {
  V(e) && (e = Ts(e));
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
  rt(
    V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (me(e)) {
    const i = t[e];
    q(i) && Zr(s, i);
  } else if (q(e))
    Zr(s, e.bind(n));
  else if (se(e))
    if (V(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(i) && Zr(s, i, e);
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
  beforeCreate: Me,
  created: Me,
  beforeMount: Me,
  mounted: Me,
  beforeUpdate: Me,
  updated: Me,
  beforeDestroy: Me,
  beforeUnmount: Me,
  destroyed: Me,
  unmounted: Me,
  activated: Me,
  deactivated: Me,
  errorCaptured: Me,
  serverPrefetch: Me,
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
    return Ie(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
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
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Me(e[r], t[r]);
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
    q(r) || (r = Ie({}, r)), s != null && !se(s) && (s = null);
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
        return o.has(d) || (d && q(d.install) ? (o.add(d), d.install(h, ..._)) : q(d) && (o.add(d), d(h, ..._))), h;
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
      mount(d, _, x) {
        if (!c) {
          const S = h._ceVNode || vt(r, s);
          return S.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(S, d, x), c = !0, h._container = d, d.__vue_app__ = h, Mr(S.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (rt(
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
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ie;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => me(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(et(t))];
  !c && i && (c = r[l = Gr(en(t))]), c && rt(
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
    e.emitted[l] = !0, rt(
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
  if (!q(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (l = !0, Ie(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (se(e) && r.set(e, null), null) : (V(i) ? i.forEach((c) => o[c] = null) : Ie(o, i), se(e) && r.set(e, o), o);
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
    data: x,
    setupState: S,
    ctx: j,
    inheritAttrs: M
  } = e, K = mr(e);
  let H, G;
  try {
    if (n.shapeFlag & 4) {
      const A = s || r, b = A;
      H = ft(
        h.call(
          b,
          A,
          d,
          _,
          S,
          x,
          j
        )
      ), G = l;
    } else {
      const A = t;
      H = ft(
        A.length > 1 ? A(
          _,
          { attrs: l, slots: o, emit: c }
        ) : A(
          _,
          null
        )
      ), G = t.props ? l : Za(l);
    }
  } catch (A) {
    Zt.length = 0, Rr(A, e, 1), H = vt(Ot);
  }
  let B = H;
  if (G && M !== !1) {
    const A = Object.keys(G), { shapeFlag: b } = B;
    A.length && b & 7 && (i && A.some(Ar) && (G = Qa(
      G,
      i
    )), B = bn(B, G, !1, !0));
  }
  if (n.dirs && (B = bn(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const A = Ir(B.type) && ko(B) || B;
    Us(A, n.transition);
  }
  return H = B, mr(K), H;
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
        const x = d[_];
        if (Go(o, r, x) && !Dr(h, x))
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
  return n === "style" && se(r) && se(s) ? !Lt(r, s) : r !== s;
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
        let x = d[_];
        if (Dr(e.emitsOptions, x))
          continue;
        const S = t[x];
        if (c)
          if (ne(i, x))
            S !== i[x] && (i[x] = S, h = !0);
          else {
            const j = et(x);
            s[j] = Es(
              c,
              l,
              j,
              S,
              e,
              !1
            );
          }
        else
          S !== i[x] && (i[x] = S, h = !0);
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
      s && ne(s, d = et(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
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
      if (o.type !== Function && !o.skipFactory && q(c)) {
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
  if (!q(e)) {
    const d = (_) => {
      c = !0;
      const [x, S] = Zo(_, t, !0);
      Ie(o, x), S && l.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return se(e) && r.set(e, pn), pn;
  if (V(i))
    for (let d = 0; d < i.length; d++) {
      const _ = et(i[d]);
      Ei(_) && (o[_] = ie);
    }
  else if (i)
    for (const d in i) {
      const _ = et(d);
      if (Ei(_)) {
        const x = i[d], S = o[_] = V(x) || q(x) ? { type: x } : Ie({}, x), j = S.type;
        let M = !1, K = !0;
        if (V(j))
          for (let H = 0; H < j.length; ++H) {
            const G = j[H], B = q(G) && G.name;
            if (B === "Boolean") {
              M = !0;
              break;
            } else B === "String" && (K = !1);
          }
        else
          M = q(j) && j.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = M, S[
          1
          /* shouldCastTrue */
        ] = K, (M || ne(S, "default")) && l.push(_);
      }
    }
  const h = [o, l];
  return se(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => V(e) ? e.map(ft) : [ft(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ks(s)) continue;
    const i = e[s];
    if (q(i))
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
    nextSibling: x,
    setScopeId: S = dt,
    insertStaticContent: j
  } = e, M = (u, f, m, v = null, g = null, T = null, C = void 0, O = null, R = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (v = nn(u), Ge(u, g, T, !0), u = null), f.patchFlag === -2 && (R = !1, f.dynamicChildren = null);
    const { type: y, ref: k, shapeFlag: I } = f;
    switch (y) {
      case Nr:
        K(u, f, m, v);
        break;
      case Ot:
        H(u, f, m, v);
        break;
      case ns:
        u == null && G(f, m, v, C);
        break;
      case ye:
        Ut(
          u,
          f,
          m,
          v,
          g,
          T,
          C,
          O,
          R
        );
        break;
      default:
        I & 1 ? b(
          u,
          f,
          m,
          v,
          g,
          T,
          C,
          O,
          R
        ) : I & 6 ? st(
          u,
          f,
          m,
          v,
          g,
          T,
          C,
          O,
          R
        ) : (I & 64 || I & 128) && y.process(
          u,
          f,
          m,
          v,
          g,
          T,
          C,
          O,
          R,
          jt
        );
    }
    k != null && g ? Ln(k, u && u.ref, T, f || u, !f) : k == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, K = (u, f, m, v) => {
    if (u == null)
      r(
        f.el = l(f.children),
        m,
        v
      );
    else {
      const g = f.el = u.el;
      f.children !== u.children && h(g, f.children);
    }
  }, H = (u, f, m, v) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      v
    ) : f.el = u.el;
  }, G = (u, f, m, v) => {
    [u.el, u.anchor] = j(
      u.children,
      f,
      m,
      v,
      u.el,
      u.anchor
    );
  }, B = ({ el: u, anchor: f }, m, v) => {
    let g;
    for (; u && u !== f; )
      g = x(u), r(u, m, v), u = g;
    r(f, m, v);
  }, A = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, b = (u, f, m, v, g, T, C, O, R) => {
    if (f.type === "svg" ? C = "svg" : f.type === "math" && (C = "mathml"), u == null)
      pe(
        f,
        m,
        v,
        g,
        T,
        C,
        O,
        R
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), fe(
          u,
          f,
          g,
          T,
          C,
          O,
          R
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, pe = (u, f, m, v, g, T, C, O) => {
    let R, y;
    const { props: k, shapeFlag: I, transition: U, dirs: $ } = u;
    if (R = u.el = o(
      u.type,
      T,
      k && k.is,
      k
    ), I & 8 ? d(R, u.children) : I & 16 && we(
      u.children,
      R,
      null,
      v,
      g,
      ts(u, T),
      C,
      O
    ), $ && zt(u, null, v, "created"), be(R, u, u.scopeId, C, v), k) {
      for (const Q in k)
        Q !== "value" && !Dn(Q) && i(R, Q, null, k[Q], T, v);
      "value" in k && i(R, "value", null, k.value, T), (y = k.onVnodeBeforeMount) && at(y, v, u);
    }
    $ && zt(u, null, v, "beforeMount");
    const Y = uc(g, U);
    Y && U.beforeEnter(R), r(R, f, m), ((y = k && k.onVnodeMounted) || Y || $) && $e(() => {
      y && at(y, v, u), Y && U.enter(R), $ && zt(u, null, v, "mounted");
    }, g);
  }, be = (u, f, m, v, g) => {
    if (m && S(u, m), v)
      for (let T = 0; T < v.length; T++)
        S(u, v[T]);
    if (g) {
      let T = g.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const C = g.vnode;
        be(
          u,
          C,
          C.scopeId,
          C.slotScopeIds,
          g.parent
        );
      }
    }
  }, we = (u, f, m, v, g, T, C, O, R = 0) => {
    for (let y = R; y < u.length; y++) {
      const k = u[y] = O ? Tt(u[y]) : ft(u[y]);
      M(
        null,
        k,
        f,
        m,
        v,
        g,
        T,
        C,
        O
      );
    }
  }, fe = (u, f, m, v, g, T, C) => {
    const O = f.el = u.el;
    let { patchFlag: R, dynamicChildren: y, dirs: k } = f;
    R |= u.patchFlag & 16;
    const I = u.props || ie, U = f.props || ie;
    let $;
    if (m && Bt(m, !1), ($ = U.onVnodeBeforeUpdate) && at($, m, f, u), k && zt(f, u, m, "beforeUpdate"), m && Bt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (R = 0, C = !1, y = null), (I.innerHTML && U.innerHTML == null || I.textContent && U.textContent == null) && d(O, ""), y ? Pe(
      u.dynamicChildren,
      y,
      O,
      m,
      v,
      ts(f, g),
      T
    ) : C || te(
      u,
      f,
      O,
      null,
      m,
      v,
      ts(f, g),
      T,
      !1
    ), R > 0) {
      if (R & 16)
        ht(O, I, U, m, g);
      else if (R & 2 && I.class !== U.class && i(O, "class", null, U.class, g), R & 4 && i(O, "style", I.style, U.style, g), R & 8) {
        const Y = f.dynamicProps;
        for (let Q = 0; Q < Y.length; Q++) {
          const Z = Y[Q], ue = I[Z], he = U[Z];
          (he !== ue || Z === "value") && i(O, Z, ue, he, g, m);
        }
      }
      R & 1 && u.children !== f.children && d(O, f.children);
    } else !C && y == null && ht(O, I, U, m, g);
    (($ = U.onVnodeUpdated) || k) && $e(() => {
      $ && at($, m, f, u), k && zt(f, u, m, "updated");
    }, v);
  }, Pe = (u, f, m, v, g, T, C) => {
    for (let O = 0; O < f.length; O++) {
      const R = u[O], y = f[O], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(R, y) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? _(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        R,
        y,
        k,
        null,
        v,
        g,
        T,
        C,
        !0
      );
    }
  }, ht = (u, f, m, v, g) => {
    if (f !== m) {
      if (f !== ie)
        for (const T in f)
          !Dn(T) && !(T in m) && i(
            u,
            T,
            f[T],
            null,
            g,
            v
          );
      for (const T in m) {
        if (Dn(T)) continue;
        const C = m[T], O = f[T];
        C !== O && T !== "value" && i(u, T, O, C, g, v);
      }
      "value" in m && i(u, "value", f.value, m.value, g);
    }
  }, Ut = (u, f, m, v, g, T, C, O, R) => {
    const y = f.el = u ? u.el : l(""), k = f.anchor = u ? u.anchor : l("");
    let { patchFlag: I, dynamicChildren: U, slotScopeIds: $ } = f;
    $ && (O = O ? O.concat($) : $), u == null ? (r(y, m, v), r(k, m, v), we(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      k,
      g,
      T,
      C,
      O,
      R
    )) : I > 0 && I & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === U.length ? (Pe(
      u.dynamicChildren,
      U,
      m,
      g,
      T,
      C,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || g && f === g.subTree) && nl(
      u,
      f,
      !0
      /* shallow */
    )) : te(
      u,
      f,
      m,
      k,
      g,
      T,
      C,
      O,
      R
    );
  }, st = (u, f, m, v, g, T, C, O, R) => {
    f.slotScopeIds = O, u == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      m,
      v,
      C,
      R
    ) : tn(
      f,
      m,
      v,
      g,
      T,
      C,
      R
    ) : mt(u, f, R);
  }, tn = (u, f, m, v, g, T, C) => {
    const O = u.component = yc(
      u,
      v,
      g
    );
    if (Hs(u) && (O.ctx.renderer = jt), Ec(O, !1, C), O.asyncDep) {
      if (g && g.registerDep(O, ve, C), !u.el) {
        const R = O.subTree = vt(Ot);
        H(null, R, f, m), u.placeholder = R.el;
      }
    } else
      ve(
        O,
        u,
        f,
        m,
        g,
        T,
        C
      );
  }, mt = (u, f, m) => {
    const v = f.component = u.component;
    if (ec(u, f, m))
      if (v.asyncDep && !v.asyncResolved) {
        ce(v, f, m);
        return;
      } else
        v.next = f, v.update();
    else
      f.el = u.el, v.vnode = f;
  }, ve = (u, f, m, v, g, T, C) => {
    const O = () => {
      if (u.isMounted) {
        let { next: I, bu: U, u: $, parent: Y, vnode: Q } = u;
        {
          const He = rl(u);
          if (He) {
            I && (I.el = Q.el, ce(u, I, C)), He.asyncDep.then(() => {
              $e(() => {
                u.isUnmounted || y();
              }, g);
            });
            return;
          }
        }
        let Z = I, ue;
        Bt(u, !1), I ? (I.el = Q.el, ce(u, I, C)) : I = Q, U && cr(U), (ue = I.props && I.props.onVnodeBeforeUpdate) && at(ue, Y, I, Q), Bt(u, !0);
        const he = yi(u), De = u.subTree;
        u.subTree = he, M(
          De,
          he,
          // parent may have changed if it's in a teleport
          _(De.el),
          // anchor may have changed if it's in a fragment
          nn(De),
          u,
          g,
          T
        ), I.el = he.el, Z === null && tc(u, he.el), $ && $e($, g), (ue = I.props && I.props.onVnodeUpdated) && $e(
          () => at(ue, Y, I, Q),
          g
        );
      } else {
        let I;
        const { el: U, props: $ } = f, { bm: Y, m: Q, parent: Z, root: ue, type: he } = u, De = Fn(f);
        Bt(u, !1), Y && cr(Y), !De && (I = $ && $.onVnodeBeforeMount) && at(I, Z, f), Bt(u, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            he,
            u.parent ? u.parent.type : void 0
          );
          const He = u.subTree = yi(u);
          M(
            null,
            He,
            m,
            v,
            u,
            g,
            T
          ), f.el = He.el;
        }
        if (Q && $e(Q, g), !De && (I = $ && $.onVnodeMounted)) {
          const He = f;
          $e(
            () => at(I, Z, He),
            g
          );
        }
        (f.shapeFlag & 256 || Z && Fn(Z.vnode) && Z.vnode.shapeFlag & 256) && u.a && $e(u.a, g), u.isMounted = !0, f = m = v = null;
      }
    };
    u.scope.on();
    const R = u.effect = new mo(O);
    u.scope.off();
    const y = u.update = R.run.bind(R), k = u.job = R.runIfDirty.bind(R);
    k.i = u, k.id = u.uid, R.scheduler = () => Fs(k), Bt(u, !0), y();
  }, ce = (u, f, m) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, v, m), lc(u, f.children, m), xt(), di(u), wt();
  }, te = (u, f, m, v, g, T, C, O, R = !1) => {
    const y = u && u.children, k = u ? u.shapeFlag : 0, I = f.children, { patchFlag: U, shapeFlag: $ } = f;
    if (U > 0) {
      if (U & 128) {
        Ht(
          y,
          I,
          m,
          v,
          g,
          T,
          C,
          O,
          R
        );
        return;
      } else if (U & 256) {
        Je(
          y,
          I,
          m,
          v,
          g,
          T,
          C,
          O,
          R
        );
        return;
      }
    }
    $ & 8 ? (k & 16 && kt(y, g, T), I !== y && d(m, I)) : k & 16 ? $ & 16 ? Ht(
      y,
      I,
      m,
      v,
      g,
      T,
      C,
      O,
      R
    ) : kt(y, g, T, !0) : (k & 8 && d(m, ""), $ & 16 && we(
      I,
      m,
      v,
      g,
      T,
      C,
      O,
      R
    ));
  }, Je = (u, f, m, v, g, T, C, O, R) => {
    u = u || pn, f = f || pn;
    const y = u.length, k = f.length, I = Math.min(y, k);
    let U;
    for (U = 0; U < I; U++) {
      const $ = f[U] = R ? Tt(f[U]) : ft(f[U]);
      M(
        u[U],
        $,
        m,
        null,
        g,
        T,
        C,
        O,
        R
      );
    }
    y > k ? kt(
      u,
      g,
      T,
      !0,
      !1,
      I
    ) : we(
      f,
      m,
      v,
      g,
      T,
      C,
      O,
      R,
      I
    );
  }, Ht = (u, f, m, v, g, T, C, O, R) => {
    let y = 0;
    const k = f.length;
    let I = u.length - 1, U = k - 1;
    for (; y <= I && y <= U; ) {
      const $ = u[y], Y = f[y] = R ? Tt(f[y]) : ft(f[y]);
      if (xn($, Y))
        M(
          $,
          Y,
          m,
          null,
          g,
          T,
          C,
          O,
          R
        );
      else
        break;
      y++;
    }
    for (; y <= I && y <= U; ) {
      const $ = u[I], Y = f[U] = R ? Tt(f[U]) : ft(f[U]);
      if (xn($, Y))
        M(
          $,
          Y,
          m,
          null,
          g,
          T,
          C,
          O,
          R
        );
      else
        break;
      I--, U--;
    }
    if (y > I) {
      if (y <= U) {
        const $ = U + 1, Y = $ < k ? f[$].el : v;
        for (; y <= U; )
          M(
            null,
            f[y] = R ? Tt(f[y]) : ft(f[y]),
            m,
            Y,
            g,
            T,
            C,
            O,
            R
          ), y++;
      }
    } else if (y > U)
      for (; y <= I; )
        Ge(u[y], g, T, !0), y++;
    else {
      const $ = y, Y = y, Q = /* @__PURE__ */ new Map();
      for (y = Y; y <= U; y++) {
        const Se = f[y] = R ? Tt(f[y]) : ft(f[y]);
        Se.key != null && Q.set(Se.key, y);
      }
      let Z, ue = 0;
      const he = U - Y + 1;
      let De = !1, He = 0;
      const Ye = new Array(he);
      for (y = 0; y < he; y++) Ye[y] = 0;
      for (y = $; y <= I; y++) {
        const Se = u[y];
        if (ue >= he) {
          Ge(Se, g, T, !0);
          continue;
        }
        let ze;
        if (Se.key != null)
          ze = Q.get(Se.key);
        else
          for (Z = Y; Z <= U; Z++)
            if (Ye[Z - Y] === 0 && xn(Se, f[Z])) {
              ze = Z;
              break;
            }
        ze === void 0 ? Ge(Se, g, T, !0) : (Ye[ze - Y] = y + 1, ze >= He ? He = ze : De = !0, M(
          Se,
          f[ze],
          m,
          null,
          g,
          T,
          C,
          O,
          R
        ), ue++);
      }
      const $t = De ? fc(Ye) : pn;
      for (Z = $t.length - 1, y = he - 1; y >= 0; y--) {
        const Se = Y + y, ze = f[Se], Tn = f[Se + 1], En = Se + 1 < k ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : v;
        Ye[y] === 0 ? M(
          null,
          ze,
          m,
          En,
          g,
          T,
          C,
          O,
          R
        ) : De && (Z < 0 || y !== $t[Z] ? gt(ze, m, En, 2) : Z--);
      }
    }
  }, gt = (u, f, m, v, g = null) => {
    const { el: T, type: C, transition: O, children: R, shapeFlag: y } = u;
    if (y & 6) {
      gt(u.component.subTree, f, m, v);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, v);
      return;
    }
    if (y & 64) {
      C.move(u, f, m, jt);
      return;
    }
    if (C === ye) {
      r(T, f, m);
      for (let I = 0; I < R.length; I++)
        gt(R[I], f, m, v);
      r(u.anchor, f, m);
      return;
    }
    if (C === ns) {
      B(u, f, m);
      return;
    }
    if (v !== 2 && y & 1 && O)
      if (v === 0)
        O.persisted && !T[Qr] ? r(T, f, m) : (O.beforeEnter(T), r(T, f, m), $e(() => O.enter(T), g));
      else {
        const { leave: I, delayLeave: U, afterLeave: $ } = O, Y = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, Q = () => {
          const Z = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), O.persisted && !Z ? Y() : I(T, () => {
            Y(), $ && $();
          });
        };
        U ? U(T, Y, Q) : Q();
      }
    else
      r(T, f, m);
  }, Ge = (u, f, m, v = !1, g = !1) => {
    const {
      type: T,
      props: C,
      ref: O,
      children: R,
      dynamicChildren: y,
      shapeFlag: k,
      patchFlag: I,
      dirs: U,
      cacheIndex: $,
      memo: Y
    } = u;
    if (I === -2 && (g = !1), O != null && (xt(), Ln(O, null, m, u, !0), wt()), $ != null && (f.renderCache[$] = void 0), k & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const Q = k & 1 && U, Z = !Fn(u);
    let ue;
    if (Z && (ue = C && C.onVnodeBeforeUnmount) && at(ue, f, u), k & 6)
      Lr(u.component, m, v);
    else {
      if (k & 128) {
        u.suspense.unmount(m, v);
        return;
      }
      Q && zt(u, null, f, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        f,
        m,
        jt,
        v
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== ye || I > 0 && I & 64) ? kt(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === ye && I & 384 || !g && k & 16) && kt(R, f, m), v && Gn(u);
    }
    const he = Y != null && $ == null;
    (Z && (ue = C && C.onVnodeUnmounted) || Q || he) && $e(() => {
      ue && at(ue, f, u), Q && zt(u, null, f, "unmounted"), he && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: v, transition: g } = u;
    if (f === ye) {
      oe(m, v);
      return;
    }
    if (f === ns) {
      A(u);
      return;
    }
    const T = () => {
      s(m), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (u.shapeFlag & 1 && g && !g.persisted) {
      const { leave: C, delayLeave: O } = g, R = () => C(m, T);
      O ? O(u.el, T, R) : R();
    } else
      T();
  }, oe = (u, f) => {
    let m;
    for (; u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: v, scope: g, job: T, subTree: C, um: O, m: R, a: y } = u;
    Si(R), Si(y), v && cr(v), g.stop(), T && (T.flags |= 8, Ge(C, u, f, m)), O && $e(O, f), $e(() => {
      u.isUnmounted = !0;
    }, f);
  }, kt = (u, f, m, v = !1, g = !1, T = 0) => {
    for (let C = T; C < u.length; C++)
      Ge(u[C], f, m, v, g);
  }, nn = (u) => {
    if (u.shapeFlag & 6)
      return nn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = x(u.anchor || u.el), m = f && f[wa];
    return m ? x(m) : f;
  };
  let yn = !1;
  const Yn = (u, f, m) => {
    let v;
    u == null ? f._vnode && (Ge(f._vnode, null, null, !0), v = f._vnode.component) : M(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(v), Mo(), yn = !1);
  }, jt = {
    p: M,
    um: Ge,
    m: gt,
    r: Gn,
    mt: tn,
    mc: we,
    pc: te,
    pbc: Pe,
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
function Bt({ effect: e, job: t }, n) {
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
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Zt = [];
let Ke = null;
function X(e = !1) {
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
    P(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ Ue(e) || q(e) ? { i: Xe, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, r = 0, s = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
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
    ctx: Xe
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= me(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
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
    l && !me(l) && (t.class = Rs(l)), se(c) && (/* @__PURE__ */ Ls(c) && !V(c) && (c = Ie({}, c)), t.style = Os(c));
  }
  const o = me(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : se(e) ? 4 : q(e) ? 2 : 0;
  return P(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Ie({}, e) : e : null;
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
function Ce(e = " ", t = 0) {
  return vt(Nr, null, e, t);
}
function bt(e = "", t = !1) {
  return t ? (X(), pc(Ot, null, e)) : vt(Ot, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? vt(Ot) : V(e) ? vt(
    ye,
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
      !s && !Xo(t) ? t._ctx = Xe : s === 3 && Xe && (Xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (q(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Xe }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Ce(t)]) : n = 8;
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
function at(e, t, n, r = null) {
  rt(e, t, 7, [
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
const Tc = () => Fe || Xe;
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
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || dt);
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
    return Re(e, "get", ""), e[t];
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
  return q(e) && "__vccOpts" in e;
}
const qe = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
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
  const r = e.style, s = me(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (me(t))
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
        !me(t) && t ? t[o] : void 0,
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
  let r = et(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && me(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : pt(n) ? String(n) : n
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
    if (V(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
        h && rt(
          h,
          t,
          5,
          l
        );
      }
    } else
      rt(
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !me(r))) ? Di(e, et(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && me(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = et(t);
  return Array.isArray(n) ? n.some((s) => et(s) === r) : Object.keys(n).some((s) => et(s) === r);
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
}, Pt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Qt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? V(o) ? s.slice() : s : o
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
  if (!n || V(e)) return Lt(e, t);
  if (Qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = V(t);
  if (!(n && !r && !Qt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Wl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Lt(Er(o), t)) {
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
const Jc = /* @__PURE__ */ Ie({ patchProp: Kc }, Rc);
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
    !q(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return me(e) ? document.querySelector(e) : e;
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
const Gt = Te(Array.prototype.forEach), fu = Te(Array.prototype.lastIndexOf), $i = Te(Array.prototype.pop), wn = Te(Array.prototype.push), du = Te(Array.prototype.splice), gn = Array.isArray, Pn = Te(String.prototype.toLowerCase), os = Te(String.prototype.toString), Vi = Te(String.prototype.match), Cn = Te(String.prototype.replace), zi = Te(String.prototype.indexOf), pu = Te(String.prototype.trim), hu = Te(Number.prototype.toString), mu = Te(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : Te(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : Te(Symbol.prototype.toString), Ve = Te(Object.prototype.hasOwnProperty), On = Te(Object.prototype.toString), Oe = Te(RegExp.prototype.test), Wt = gu(TypeError);
function Te(e) {
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
      const t = e, n = Qe(t, "toString");
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
function Qe(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return Te(r.get);
      if (typeof r.value == "function")
        return Te(r.value);
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
    return Oe(e, ""), !0;
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
}, Dt = function(t, n, r, s) {
  return Ve(t, n) && gn(t[n]) ? ee(s.base ? We(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = Ve(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? We(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (w) => gl(w);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Be.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, x = l.prototype, S = Qe(x, "cloneNode"), j = Qe(x, "remove"), M = Qe(x, "nextSibling"), K = Qe(x, "childNodes"), H = Qe(x, "parentNode"), G = Qe(x, "shadowRoot"), B = Qe(x, "attributes"), A = o && o.prototype ? Qe(o.prototype, "nodeType") : null, b = o && o.prototype ? Qe(o.prototype, "nodeName") : null, pe = o && o.prototype ? Qe(o.prototype, "ownerDocument") : null, be = function(a) {
    return A ? A(a) : a.nodeType;
  }, we = function(a) {
    return b ? b(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let fe, Pe = "", ht, Ut = !1, st = 0;
  const tn = function() {
    if (st > 0)
      throw Wt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, mt = function(a) {
    tn(), st++;
    try {
      return fe.createHTML(a);
    } finally {
      st--;
    }
  }, ve = function(a) {
    tn(), st++;
    try {
      return fe.createScriptURL(a);
    } finally {
      st--;
    }
  }, ce = function() {
    return Ut || (ht = Fu(_, s), Ut = !0), ht;
  }, te = n, Je = te.implementation, Ht = te.createNodeIterator, gt = te.createDocumentFragment, Ge = te.getElementsByTagName, Gn = r.importNode;
  let oe = Qi();
  t.isSupported = typeof pl == "function" && typeof H == "function" && Je && Je.createHTMLDocument !== void 0;
  const Lr = Su, kt = Au, nn = vu, yn = xu, Yn = wu, jt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const v = ee({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let g = null;
  const T = ee({}, [...Yi, ...us, ...qi, ...ar]);
  let C = Object.seal(dn(null, {
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
  let k = !0, I = !0, U = !1, $ = !0, Y = !1, Q = !0, Z = !1, ue = !1, he = null, De = null, He = !1, Ye = !1, $t = !1, Se = !1, ze = !0, Tn = !1;
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
  const Ws = ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let on = it, kr = !1, jr = null;
  const bl = ee({}, [qn, Xn, it], os), Ks = Ee(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = ee({}, Ks);
  const Gs = Ee(["annotation-xml"]);
  let Vr = ee({}, Gs);
  const yl = ee({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let ge = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = We(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, ge = Sn === "application/xhtml+xml" ? os : Pn, m = Dt(a, "ALLOWED_TAGS", v, {
      transform: ge
    }), g = Dt(a, "ALLOWED_ATTR", T, {
      transform: ge
    }), jr = Dt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Dt(a, "ADD_URI_SAFE_ATTR", Ws, {
      transform: ge,
      base: Ws
    }), Vs = Dt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: ge,
      base: zs
    }), sn = Dt(a, "FORBID_CONTENTS", $s, {
      transform: ge
    }), O = Dt(a, "FORBID_TAGS", We({}), {
      transform: ge
    }), R = Dt(a, "FORBID_ATTR", We({}), {
      transform: ge
    }), rn = Ve(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? We(a.USE_PROFILES) : a.USE_PROFILES : !1, k = a.ALLOW_ARIA_ATTR !== !1, I = a.ALLOW_DATA_ATTR !== !1, U = a.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = a.SAFE_FOR_TEMPLATES || !1, Q = a.SAFE_FOR_XML !== !1, Z = a.WHOLE_DOCUMENT || !1, Ye = a.RETURN_DOM || !1, $t = a.RETURN_DOM_FRAGMENT || !1, Se = a.RETURN_TRUSTED_TYPE || !1, He = a.FORCE_BODY || !1, ze = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, Hr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : it, $r = fs(
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
    if (C = dn(null), Ve(p, "tagNameCheck") && Ys(p.tagNameCheck) && (C.tagNameCheck = p.tagNameCheck), Ve(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (C.attributeNameCheck = p.attributeNameCheck), Ve(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (C.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Ae(C), Y && (I = !1), $t && (Ye = !0), rn && (m = ee({}, Gi), g = dn(null), rn.html === !0 && (ee(m, Ki), ee(g, Yi)), rn.svg === !0 && (ee(m, ls), ee(g, us), ee(g, ar)), rn.svgFilters === !0 && (ee(m, as), ee(g, us), ee(g, ar)), rn.mathMl === !0 && (ee(m, cs), ee(g, qi), ee(g, ar))), y.tagCheck = null, y.attributeCheck = null, Ve(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === v && (m = We(m)), ee(m, a.ADD_TAGS, ge))), Ve(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (g === T && (g = We(g)), ee(g, a.ADD_ATTR, ge))), Ve(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = We(sn)), ee(sn, a.ADD_FORBID_CONTENTS, ge)), Ur && (m["#text"] = !0), Z && ee(m, ["html", "head", "body"]), m.table && (ee(m, ["tbody"]), delete O.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = fe;
      fe = a.TRUSTED_TYPES_POLICY;
      try {
        Pe = mt("");
      } catch (N) {
        throw fe = E, N;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (fe = void 0, Pe = "") : (fe === void 0 && (fe = ce()), fe && typeof Pe == "string" && (Pe = mt("")));
    Ee && Ee(a), ln = a;
  }, qs = ee({}, [...ls, ...as, ...Tu]), Xs = ee({}, [...cs, ...Eu]), Al = function(a, p, E) {
    return p.namespaceURI === it ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, vl = function(a, p, E) {
    return p.namespaceURI === it ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = H(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), N = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? Al(E, p, N) : a.namespaceURI === qn ? vl(E, p, N) : a.namespaceURI === it ? xl(E, p, N) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, It = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      H(a).removeChild(a);
    } catch {
      if (j(a), !H(a))
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
    const p = K(a);
    if (p) {
      const N = [];
      Gt(p, (F) => {
        wn(N, F);
      }), Gt(N, (F) => {
        try {
          j(F);
        } catch {
        }
      });
    }
    const E = B(a);
    if (E)
      for (let N = E.length - 1; N >= 0; --N) {
        const F = E[N], z = F && F.name;
        typeof z == "string" && Js(a, F, z);
      }
  }, Vt = function(a, p, E) {
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
      if (Ye || $t)
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
    const p = B(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const N = p[E], F = N && N.name;
        typeof F != "string" || g[ge(F)] || Js(a, N, F);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      be(E) === Be.element && Cl(E);
      const F = K(E);
      if (F)
        for (let z = F.length - 1; z >= 0; --z)
          p.push(F[z]);
    }
  }, Zs = function(a, p) {
    return Q ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!Q)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), N = be(E);
      if (N === Be.processingInstruction || N === Be.comment && Oe(Zi, E.data)) {
        try {
          j(E);
        } catch {
        }
        continue;
      }
      if (N === Be.element) {
        const z = E, le = ge(we(E));
        try {
          z.hasAttribute && z.hasAttribute("patchsrc") && z.removeAttribute("patchsrc"), z.hasAttribute && z.hasAttribute("for") && Zs("for", le) && z.removeAttribute("for");
        } catch {
        }
      }
      const F = K(E);
      if (F)
        for (let z = F.length - 1; z >= 0; --z)
          p.push(F[z]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (He)
      a = "<remove></remove>" + a;
    else {
      const z = Vi(a, /^[\r\n\t ]+/);
      E = z && z[0];
    }
    Sn === "application/xhtml+xml" && on === it && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const N = fe ? mt(a) : a;
    if (on === it)
      try {
        p = new d().parseFromString(N, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Je.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Pe : N;
      } catch {
      }
    }
    const F = p.body || p.documentElement;
    return a && E && F.insertBefore(n.createTextNode(E), F.childNodes[0] || null), on === it ? Ge.call(p, Z ? "html" : "body")[0] : Z ? p.documentElement : F;
  }, ei = function(a) {
    const p = pe ? pe(a) : a.ownerDocument;
    return Ht.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, kt, " "), a = Cn(a, nn, " "), a;
  }, Br = function(a) {
    var p;
    a.normalize();
    const E = pe ? pe(a) : a.ownerDocument, N = Ht.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let F = N.nextNode();
    for (; F; )
      F.data = Qn(F.data), F = N.nextNode();
    const z = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    z && Gt(z, (le) => {
      an(le.content) && Br(le.content);
    });
  }, er = function(a) {
    const p = b ? b(a) : null;
    return typeof p != "string" || ge(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== B(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    a.childNodes !== K(a);
  }, an = function(a) {
    if (!A || typeof a != "object" || a === null)
      return !1;
    try {
      return A(a) === Be.documentFragment;
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
  function ot(w, a, p) {
    w.length !== 0 && Gt(w, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(Q && a.hasChildNodes() && !An(a.firstElementChild) && Oe(Ji, a.textContent) && Oe(Ji, a.innerHTML) || Q && a.namespaceURI === it && Nu[p] && (An(a.firstElementChild) || typeof a.textContent == "string" && Oe(Mu[p], a.textContent)) || a.nodeType === Be.processingInstruction || Q && a.nodeType === Be.comment && Oe(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Oe(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, N = new Array(E > 2 ? E - 2 : 0), F = 2; F < E; F++)
        N[F - 2] = arguments[F];
      return !!a(p, ...N);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!O[p] && ii(p) && tr(C.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const N = H(a), F = K(a);
      if (F && N) {
        const z = F.length;
        for (let le = z - 1; le >= 0; --le) {
          const de = a === E ? S(F[le], !0) : F[le];
          N.insertBefore(de, M(a));
        }
      }
    }
    return It(a), !0;
  }, ti = function(a, p, E, N) {
    return a.length === 0 ? p : p === E || p === N ? We(p) : p;
  }, ni = function(a, p) {
    return a === p || H(a) !== null ? !1 : (Hr && Zn(a), !0);
  }, ri = function(a, p) {
    if (ot(oe.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return It(a), !0;
    const E = ge(we(a));
    if (m = ti(oe.uponSanitizeElement, m, v, he), ot(oe.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return It(a), !0;
    if (O[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const F = Il(a, E, p);
      return F === !1 && ot(oe.afterSanitizeElements, a, null), F;
    }
    if (be(a) === Be.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Oe(Pu, a.innerHTML))
      return It(a), !0;
    if (Y && a.nodeType === Be.text) {
      const F = Qn(a.textContent);
      a.textContent !== F && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = F);
    }
    return ot(oe.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (R[p] || Zs(p, a) || ze && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const N = g[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return I && Oe(yn, p) || k && Oe(Yn, p) ? !0 : N ? Bs[p] || Oe(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || U && !Oe(jt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(C.tagNameCheck, a) && tr(C.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && C.allowCustomizedBuiltInElements && tr(C.tagNameCheck, E)
    );
  }, Pl = ee({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Oe(u, a);
  }, Dl = function(a, p, E, N) {
    if (fe && typeof _ == "object" && typeof _.getAttributeType == "function" && !E)
      switch (_.getAttributeType(a, p)) {
        case "TrustedHTML":
          return mt(N);
        case "TrustedScriptURL":
          return ve(N);
      }
    return N;
  }, Nl = function(a, p, E, N) {
    try {
      E ? a.setAttributeNS(E, p, N) : a.setAttribute(p, N), er(a) ? It(a) : $i(t.removed);
    } catch {
      Vt(p, a);
    }
  }, oi = function(a) {
    ot(oe.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    g = ti(oe.uponSanitizeAttribute, g, T, De);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: g,
      forceKeepAttr: void 0
    };
    let N = p.length;
    const F = ge(a.nodeName);
    for (; N--; ) {
      const z = p[N], le = z.name, de = z.namespaceURI, ke = z.value, je = ge(le), Kr = ke;
      let Ne = le === "value" ? Kr : pu(Kr);
      if (E.attrName = je, E.attrValue = Ne, E.keepAttr = !0, E.forceKeepAttr = void 0, ot(oe.uponSanitizeAttribute, a, E), Ne = E.attrValue, Tn && (je === "id" || je === "name") && zi(Ne, En) !== 0 && (Vt(le, a, z), Ne = En + Ne), Q && Oe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        Vt(le, a, z);
        continue;
      }
      if (je === "attributename" && Vi(Ne, "href")) {
        Vt(le, a, z);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          Vt(le, a, z);
          continue;
        }
        if (!$ && Oe(Du, Ne)) {
          Vt(le, a, z);
          continue;
        }
        if (Y && (Ne = Qn(Ne)), !si(F, je, Ne)) {
          Vt(le, a, z);
          continue;
        }
        Ne = Dl(F, je, de, Ne), Ne !== Kr && Nl(a, le, de, Ne);
      }
    }
    ot(oe.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (ot(oe.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (ot(oe.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), be(p) === Be.element) {
        const N = G(p);
        an(N) && (Wr(N), nr(N));
      }
    ot(oe.afterSanitizeShadowDOM, a, null);
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
      const N = E.node, z = be(N) === Be.element, le = K(N);
      if (le)
        for (let de = le.length - 1; de >= 0; --de)
          p.push({
            node: le[de],
            shadow: null
          });
      if (z) {
        const de = b ? b(N) : null;
        if (typeof de == "string" && ge(de) === "template") {
          const ke = N.content;
          an(ke) && p.push({
            node: ke,
            shadow: null
          });
        }
      }
      if (z) {
        const de = G(N);
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
  return t.sanitize = function(w) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, N = null, F = null;
    if (kr = !w, kr && (w = "<!-->"), typeof w != "string" && !An(w) && (w = bu(w), typeof w != "string"))
      throw Wt("dirty is not a string, aborting");
    if (!t.isSupported)
      return w;
    ue ? (m = he, g = De) : zr(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (m = We(m)), oe.uponSanitizeAttribute.length > 0 && (g = We(g)), t.removed = [];
    const z = Hr && typeof w != "string" && An(w);
    if (z) {
      Ol(w);
      const ke = we(w);
      if (typeof ke == "string") {
        const je = ge(ke);
        if (!m[je] || O[je])
          throw Jn(w), Wt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(w))
        throw Jn(w), Wt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(w);
      } catch (je) {
        throw Jn(w), je;
      }
    } else if (An(w))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(w, !0), E.nodeType === Be.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Wr(E);
    else {
      if (!Ye && !Y && !Z && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return fe && Se ? mt(w) : w;
      if (p = Qs(w), !p)
        return Ye ? null : Se ? Pe : "";
    }
    p && He && It(p.firstChild);
    const le = z ? w : p;
    try {
      const ke = ei(le);
      for (; N = ke.nextNode(); )
        ri(N, le), oi(N), an(N.content) && nr(N.content);
    } catch (ke) {
      throw z && (Jn(w), Gt(t.removed, (je) => {
        je.element && Zn(je.element);
      })), ke;
    }
    if (z)
      return Gt(t.removed, (ke) => {
        ke.element && Zn(ke.element);
      }), Y && Br(w), w;
    if (Ye) {
      if (Y && Br(p), $t)
        for (F = gt.call(p.ownerDocument); p.firstChild; )
          F.appendChild(p.firstChild);
      else
        F = p;
      return (g.shadowroot || g.shadowrootmode) && (F = Gn.call(r, F, !0)), F;
    }
    let de = Z ? p.outerHTML : p.innerHTML;
    return Z && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Oe(Ru, p.ownerDocument.doctype.name) && (de = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + de), Y && (de = Qn(de)), fe && Se ? mt(de) : de;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(w), ue = !0, he = m, De = g;
  }, t.clearConfig = function() {
    ln = null, ue = !1, he = null, De = null, fe = ht, Pe = "";
  }, t.isValidAttribute = function(w, a, p) {
    ln || zr({});
    const E = ge(w), N = ge(a);
    return si(E, N, p);
  }, t.addHook = function(w, a) {
    typeof a == "function" && Ve(oe, w) && wn(oe[w], a);
  }, t.removeHook = function(w, a) {
    if (Ve(oe, w)) {
      if (a !== void 0) {
        const p = fu(oe[w], a);
        return p === -1 ? void 0 : du(oe[w], p, 1)[0];
      }
      return $i(oe[w]);
    }
  }, t.removeHooks = function(w) {
    Ve(oe, w) && (oe[w] = []);
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
  }, c = (M) => M, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, _ = (M) => typeof M == "string" || typeof M == "number", x = (M, K, H) => M.replace(/%n/g, "" + H).replace(/{([^{}]*)}/g, (G, B) => {
    if (K === void 0 || !(B in K))
      return d(G);
    const A = K[B];
    return _(A) ? d(`${A}`) : typeof A == "object" && _(A.value) ? (A.escape !== !1 ? to : c)(`${A.value}`) : d(G);
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
}, Bu = { id: "library-catalogue-heading" }, Wu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "title" }, cf = { value: "recent" }, uf = { value: "publicationDate" }, ff = { value: "publication" }, df = { value: "format" }, pf = ["value"], hf = ["value"], mf = ["aria-label"], gf = ["aria-label"], _f = ["aria-label"], bf = ["href"], yf = {
  key: 1,
  class: "library-muted"
}, Tf = ["href"], Ef = {
  key: 3,
  class: "library-muted"
}, Sf = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Af = { id: "library-periodical-groups-heading" }, vf = { class: "library-muted" }, xf = ["href"], wf = { class: "library-muted" }, Cf = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Of = { id: "library-periodical-groups-empty-heading" }, Rf = { class: "library-muted" }, If = {
  key: 2,
  class: "library-empty-content",
  role: "status"
}, Pf = { class: "library-muted" }, Df = {
  key: 3,
  class: "library-cover-gallery"
}, Nf = ["href", "aria-label"], Mf = ["src", "alt"], Lf = { class: "library-cover-summary" }, Ff = {
  key: 0,
  class: "library-creator"
}, Uf = { class: "library-muted" }, Hf = { key: 0 }, kf = { key: 1 }, jf = { key: 2 }, $f = { key: 3 }, Vf = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, zf = { key: 0 }, Bf = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Wf = {
  key: 0,
  class: "library-muted"
}, Kf = ["href"], Gf = ["href"], Yf = ["href"], qf = ["href"], Xf = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Jf = { class: "library-hero-actions" }, Zf = ["href"], Qf = ["href"], ed = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = qe(() => t.state.items || []), i = qe(() => t.state.shelves || []), o = qe(() => t.state.formats || []), l = qe(() => t.state.publications || []), c = qe(() => t.state.publicationSummaries || []), h = qe(() => t.state.publicationYears || []), d = qe(() => t.state.creators || []), _ = qe(() => t.state.scanStatuses || []), x = qe(() => t.state.cataloguePagination || {
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
      creator: t.state.activeFilters?.creator || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), j = qe(() => t.state.settingsUrl || ""), M = qe(() => t.state.metadataExportUrl || "");
    function K(B) {
      return String(B || "").toUpperCase();
    }
    function H(B) {
      return B.nextcloudTags || [];
    }
    function G(B) {
      const A = new URLSearchParams(window.location.search);
      return A.set("publication", B), A.set("sort", "publication"), A.delete("page"), `?${A.toString()}`;
    }
    return (B, A) => (X(), J("div", Vu, [
      P("section", zu, [
        P("h2", Bu, L(W(D)("library", "Publication catalogue")), 1),
        P("p", Wu, L(W(D)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        P("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": W(D)("library", "Catalogue search and filters")
        }, [
          P("label", null, [
            Ce(L(W(D)("library", "Search title / author")) + " ", 1),
            lt(P("input", {
              "onUpdate:modelValue": A[0] || (A[0] = (b) => S.q = b),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, S.q]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Type")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (b) => S.type = b),
              name: "type"
            }, [
              P("option", Gu, L(W(D)("library", "All types")), 1),
              (X(), J(ye, null, Ze(n, (b) => P("option", {
                key: b,
                value: b
              }, L(b), 9, Yu)), 64))
            ], 512), [
              [Pt, S.type]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Series / periodical")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (b) => S.publication = b),
              name: "publication"
            }, [
              P("option", qu, L(W(D)("library", "All series and periodicals")), 1),
              (X(!0), J(ye, null, Ze(l.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(b), 9, Xu))), 128))
            ], 512), [
              [Pt, S.publication]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Publication year")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (b) => S.year = b),
              name: "year"
            }, [
              P("option", Ju, L(W(D)("library", "All years")), 1),
              (X(!0), J(ye, null, Ze(h.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(b), 9, Zu))), 128))
            ], 512), [
              [Pt, S.year]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Creator")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[4] || (A[4] = (b) => S.creator = b),
              name: "creator",
              title: "Exact full-field creator matches only"
            }, [
              P("option", Qu, L(W(D)("library", "All creators")), 1),
              (X(!0), J(ye, null, Ze(d.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(b), 9, ef))), 128))
            ], 512), [
              [Pt, S.creator]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Nextcloud tag")) + " ", 1),
            lt(P("input", {
              "onUpdate:modelValue": A[5] || (A[5] = (b) => S.tag = b),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, S.tag]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Format")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[6] || (A[6] = (b) => S.format = b),
              name: "format"
            }, [
              P("option", tf, L(W(D)("library", "All formats")), 1),
              (X(!0), J(ye, null, Ze(o.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(K(b)), 9, nf))), 128))
            ], 512), [
              [Pt, S.format]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Shelf")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[7] || (A[7] = (b) => S.shelf = b),
              name: "shelf"
            }, [
              P("option", rf, L(W(D)("library", "All shelves")), 1),
              (X(!0), J(ye, null, Ze(i.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(b), 9, sf))), 128))
            ], 512), [
              [Pt, S.shelf]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Scan status")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[8] || (A[8] = (b) => S.status = b),
              name: "status"
            }, [
              P("option", of, L(W(D)("library", "All scan statuses")), 1),
              (X(!0), J(ye, null, Ze(_.value, (b) => (X(), J("option", {
                key: b,
                value: b
              }, L(b), 9, lf))), 128))
            ], 512), [
              [Pt, S.status]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Sort")) + " ", 1),
            lt(P("select", {
              "onUpdate:modelValue": A[9] || (A[9] = (b) => S.sort = b),
              name: "sort"
            }, [
              P("option", af, L(W(D)("library", "Title")), 1),
              P("option", cf, L(W(D)("library", "Recently added")), 1),
              P("option", uf, L(W(D)("library", "Publication date")), 1),
              P("option", ff, L(W(D)("library", "Series / periodical")), 1),
              P("option", df, L(W(D)("library", "Format")), 1)
            ], 512), [
              [Pt, S.sort]
            ])
          ]),
          P("label", null, [
            Ce(L(W(D)("library", "Page size")) + " ", 1),
            P("select", {
              value: x.value.limit,
              name: "limit"
            }, [
              (X(), J(ye, null, Ze(r, (b) => P("option", {
                key: b,
                value: b
              }, L(b), 9, hf)), 64))
            ], 8, pf)
          ]),
          P("button", {
            type: "submit",
            class: "button primary",
            "aria-label": W(D)("library", "Apply catalogue filters")
          }, L(W(D)("library", "Apply filters")), 9, mf),
          P("a", {
            href: "?",
            class: "button secondary",
            "aria-label": W(D)("library", "Clear catalogue filters")
          }, L(W(D)("library", "Clear")), 9, gf)
        ], 8, Ku),
        P("nav", {
          class: "library-pagination",
          "aria-label": W(D)("library", "Catalogue pagination")
        }, [
          P("span", null, "Showing " + L(x.value.from) + "–" + L(x.value.to) + " of " + L(x.value.total) + " catalogue items", 1),
          x.value.previousUrl ? (X(), J("a", {
            key: 0,
            href: x.value.previousUrl
          }, L(W(D)("library", "Previous")), 9, bf)) : (X(), J("span", yf, L(W(D)("library", "Previous")), 1)),
          x.value.nextUrl ? (X(), J("a", {
            key: 2,
            href: x.value.nextUrl
          }, L(W(D)("library", "Next")), 9, Tf)) : (X(), J("span", Ef, L(W(D)("library", "Next")), 1))
        ], 8, _f),
        c.value.length > 0 ? (X(), J("section", Sf, [
          P("h3", Af, L(W(D)("library", "Top series and periodicals")), 1),
          P("p", vf, L(W(D)("library", "Jump into recurring publications with one click.")), 1),
          P("ul", null, [
            (X(!0), J(ye, null, Ze(c.value, (b) => (X(), J("li", {
              key: b.publication
            }, [
              P("a", {
                href: G(b.publication)
              }, L(b.publication), 9, xf),
              P("span", wf, L(b.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (X(), J("section", Cf, [
          P("h3", Of, L(W(D)("library", "No series or periodicals found yet")), 1),
          P("p", Rf, L(W(D)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : bt("", !0),
        s.value.length === 0 ? (X(), J("div", If, [
          P("h3", null, L(W(D)("library", "No catalogue items match")), 1),
          P("p", Pf, L(W(D)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (X(), J("div", Df, [
          (X(!0), J(ye, null, Ze(s.value, (b) => (X(), J("article", {
            key: b.id,
            class: "library-cover-card"
          }, [
            P("a", {
              class: "library-cover-link",
              href: b.openUrl,
              "aria-label": `Read ${b.title}`
            }, [
              P("img", {
                class: "library-cover-image",
                src: b.coverUrl,
                alt: `Cover for ${b.title}`,
                loading: "lazy"
              }, null, 8, Mf)
            ], 8, Nf),
            P("div", Lf, [
              P("h3", null, L(b.title), 1),
              b.creators ? (X(), J("p", Ff, L(b.creators), 1)) : bt("", !0),
              P("p", Uf, [
                P("span", null, L(b.publicationType), 1),
                b.publication ? (X(), J("span", Hf, " · " + L(b.publication), 1)) : bt("", !0),
                b.publicationDate ? (X(), J("span", kf, " · " + L(b.publicationDate), 1)) : bt("", !0),
                b.extension ? (X(), J("span", jf, " · Format: " + L(K(b.extension)), 1)) : bt("", !0),
                b.shelf ? (X(), J("span", $f, " · Shelf: " + L(b.shelf), 1)) : bt("", !0)
              ]),
              b.scanStatus !== "indexed" || b.scanError ? (X(), J("p", Vf, [
                Ce(" scanStatus: " + L(b.scanStatus || "unknown"), 1),
                b.scanError ? (X(), J("span", zf, " · scanError: " + L(b.scanError), 1)) : bt("", !0)
              ])) : bt("", !0),
              P("div", Bf, [
                H(b).length === 0 ? (X(), J("span", Wf, "No Nextcloud tags")) : (X(!0), J(ye, { key: 1 }, Ze(H(b), (pe) => (X(), J("span", {
                  key: pe.id,
                  class: "library-tag"
                }, L(pe.name), 1))), 128))
              ]),
              P("p", null, [
                P("a", {
                  href: b.openUrl
                }, L(W(D)("library", "Read")), 9, Kf),
                A[10] || (A[10] = Ce(" · ", -1)),
                P("a", {
                  href: b.filesUrl
                }, L(W(D)("library", "Show in Files")), 9, Gf),
                A[11] || (A[11] = Ce(" · ", -1)),
                P("a", {
                  href: b.downloadUrl
                }, L(W(D)("library", "Download source")), 9, Yf),
                A[12] || (A[12] = Ce(" · ", -1)),
                P("a", {
                  href: b.detailsUrl
                }, L(W(D)("library", "Details")), 9, qf)
              ])
            ])
          ]))), 128))
        ]))
      ]),
      P("section", Xf, [
        A[13] || (A[13] = P("div", null, [
          P("h2", null, "Library"),
          P("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        P("div", Jf, [
          P("a", {
            href: j.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Zf),
          M.value ? (X(), J("a", {
            key: 0,
            href: M.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Qf)) : bt("", !0)
        ])
      ])
    ]));
  }
}, no = nu("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function _e(e) {
  return String(e ?? "");
}
function _l(e) {
  return _e(e).toUpperCase();
}
function td(e, t, n, r = _e) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = _e(s), i.textContent = r(s), _e(s) === _e(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = _e(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function un(e, t, n, r, s, i, o = _e) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), td(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function nd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", D("library", "Catalogue search and filters")), so(r, D("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, D("library", "Type"), "type", n.type, D("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, D("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, D("library", "Format"), "format", n.format, D("library", "All formats"), e.formats || [], _l), un(r, D("library", "Shelf"), "shelf", n.shelf, D("library", "All shelves"), e.shelves || []), un(r, D("library", "Scan status"), "status", n.status, D("library", "All scan statuses"), e.scanStatuses || []), un(r, D("library", "Sort"), "sort", n.sort || "title", D("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, D("library", "Page size"), "limit", t.limit || 100, D("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", D("library", "Apply catalogue filters")), s.textContent = D("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", D("library", "Clear catalogue filters")), i.textContent = D("library", "Clear"), r.append(s, i), r;
}
function rd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = _e(e.settingsUrl || ""), i = _e(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = D("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = D("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(nd(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", D("library", "Catalogue pagination"));
  const _ = document.createElement("span");
  if (_.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(_), l.appendChild(d), n.length === 0) {
    const x = document.createElement("div");
    x.className = "library-empty-content", x.setAttribute("role", "status");
    const S = document.createElement("h3");
    S.textContent = D("library", "No catalogue items match");
    const j = document.createElement("p");
    j.className = "library-muted", j.textContent = D("library", "Scan enabled roots or clear the active filters."), x.append(S, j), l.appendChild(x);
  } else {
    const x = document.createElement("div");
    x.className = "library-cover-gallery";
    for (const S of n) {
      const j = document.createElement("article");
      j.className = "library-cover-card";
      const M = document.createElement("a");
      M.className = "library-cover-link", M.href = _e(S.openUrl || "#"), M.setAttribute("aria-label", `Read ${_e(S.title || "publication")}`);
      const K = document.createElement("img");
      K.className = "library-cover-image", K.src = _e(S.coverUrl || ""), K.alt = `Cover for ${_e(S.title || "publication")}`, K.loading = "lazy", M.appendChild(K);
      const H = document.createElement("div");
      H.className = "library-cover-summary";
      const G = document.createElement("h3");
      if (G.textContent = _e(S.title || "Untitled publication"), H.appendChild(G), S.creators) {
        const fe = document.createElement("p");
        fe.className = "library-creator", fe.textContent = _e(S.creators), H.appendChild(fe);
      }
      const B = document.createElement("p");
      B.className = "library-muted", B.textContent = [
        _e(S.publicationType || "other"),
        S.extension ? `Format: ${_l(S.extension)}` : "",
        S.shelf ? `Shelf: ${_e(S.shelf)}` : ""
      ].filter(Boolean).join(" · "), H.appendChild(B);
      const A = document.createElement("p"), b = document.createElement("a");
      b.href = _e(S.openUrl || "#"), b.textContent = D("library", "Read");
      const pe = document.createElement("a");
      pe.href = _e(S.filesUrl || "#"), pe.textContent = D("library", "Show in Files");
      const be = document.createElement("a");
      be.href = _e(S.downloadUrl || "#"), be.textContent = D("library", "Download source");
      const we = document.createElement("a");
      we.href = _e(S.detailsUrl || "#"), we.textContent = D("library", "Details"), A.append(b, document.createTextNode(" · "), pe, document.createTextNode(" · "), be, document.createTextNode(" · "), we), H.appendChild(A), j.append(M, H), x.appendChild(j);
    }
    l.appendChild(x);
  }
  if (o.appendChild(l), s || i) {
    const x = document.createElement("section");
    x.className = "library-hero library-secondary-panel", x.setAttribute("aria-label", "Library settings");
    const S = document.createElement("div"), j = document.createElement("h2");
    j.textContent = "Library";
    const M = document.createElement("p");
    M.className = "library-lede", M.textContent = "Browse publications already stored in Nextcloud.", S.append(j, M);
    const K = document.createElement("div");
    if (K.className = "library-hero-actions", s) {
      const H = document.createElement("a");
      H.href = s, H.className = "button secondary", H.setAttribute("aria-label", "Open Library settings"), H.textContent = "Library settings", K.appendChild(H);
    }
    if (i) {
      const H = document.createElement("a");
      H.href = i, H.className = "button secondary", H.setAttribute("aria-label", "Export corrected metadata"), H.textContent = "Export corrected metadata", K.appendChild(H);
    }
    x.append(S, K), o.appendChild(x);
  }
  return o;
}
if (dr)
  try {
    Qc(ed, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(rd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
