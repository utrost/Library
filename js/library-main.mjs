// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ae = {}, pn = [], ht = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vr = (e) => e.startsWith("onUpdate:"), Pe = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ml = Object.prototype.hasOwnProperty, ie = (e, t) => Ml.call(e, t), B = Array.isArray, Mt = (e) => Wn(e) === "[object Map]", Qt = (e) => Wn(e) === "[object Set]", li = (e) => Wn(e) === "[object Date]", J = (e) => typeof e == "function", _e = (e) => typeof e == "string", mt = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", oo = (e) => (le(e) || J(e)) && J(e.then) && J(e.catch), lo = Object.prototype.toString, Wn = (e) => lo.call(e), Ll = (e) => Wn(e).slice(8, -1), ao = (e) => Wn(e) === "[object Object]", Cs = (e) => _e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, nt = Ar(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, en = Ar(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = Ar(
  (e) => e ? `on${co(e)}` : ""
), St = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
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
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = _e(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (_e(e) || le(e))
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
  if (_e(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ xs(Vl);
function fo(e) {
  return !!e || e === "";
}
function Wl(e, t) {
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
  if (n = mt(e), r = mt(t), n || r)
    return e === t;
  if (n = B(e), r = B(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = le(e), r = le(t), n || r) {
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
function Bl(e, t) {
  return e.findIndex((n) => Lt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), P = (e) => _e(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === lo || !J(e.toString)) ? po(e) ? P(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : mt(t) ? Yr(t) : le(t) && !B(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Oe;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes || (Oe.scopes = [])).push(
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
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Oe, Oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Oe === this)
        Oe = this.prevScope;
      else {
        let t = Oe;
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
  return Oe;
}
let fe;
const qr = /* @__PURE__ */ new WeakSet();
class mo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
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
    const t = fe, n = rt;
    fe = this, rt = !0;
    try {
      return this.fn();
    } finally {
      yo(this), fe = t, rt = n, this.flags &= -3;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kn) || (e.globalVersion = kn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ps(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = fe, r = rt;
  fe = e, rt = !0;
  try {
    bo(e);
    const s = e.fn(e._value);
    (t.version === 0 || St(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    fe = n, rt = r, yo(e), e.flags &= -3;
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
let rt = !0;
const Eo = [];
function wt() {
  Eo.push(rt), rt = !1;
}
function Ct() {
  const e = Eo.pop();
  rt = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = fe;
    fe = void 0;
    try {
      t();
    } finally {
      fe = n;
    }
  }
}
let kn = 0;
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
    if (!fe || !rt || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new ql(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, vo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = r);
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
const hs = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), Hn = /* @__PURE__ */ Symbol(
  ""
);
function Ie(e, t, n) {
  if (rt && fe) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function vt(e, t, n, r, s, i) {
  const o = hs.get(e);
  if (!o) {
    kn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Is(), t === "clear")
    o.forEach(l);
  else {
    const c = B(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((b, x) => {
        (x === "length" || x === Hn || !mt(x) && x >= d) && l(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Hn)), t) {
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
  const t = /* @__PURE__ */ oe(e);
  return t === e ? t : (Ie(t, "iterate", Hn), /* @__PURE__ */ st(e) ? t : t.map(Ot));
}
function Cr(e) {
  return Ie(e = /* @__PURE__ */ oe(e), "iterate", Hn), e;
}
function dt(e, t) {
  return /* @__PURE__ */ Ft(e) ? _n(/* @__PURE__ */ Jt(e) ? Ot(t) : t) : Ot(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => dt(this, e));
  },
  concat(...e) {
    return cn(this).concat(
      ...e.map((t) => B(t) ? cn(t) : t)
    );
  },
  entries() {
    return Xr(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
  },
  every(e, t) {
    return yt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return yt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => dt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return yt(
      this,
      "find",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return yt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yt(
      this,
      "findLast",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return yt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return yt(this, "forEach", e, t, void 0, arguments);
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
    return yt(this, "map", e, t, void 0, arguments);
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
    return yt(this, "some", e, t, void 0, arguments);
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
    return Xr(this, "values", (e) => dt(this, e));
  }
};
function Xr(e, t, n) {
  const r = Cr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ st(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Jl = Array.prototype;
function yt(e, t, n, r, s, i) {
  const o = Cr(e), l = o !== e && !/* @__PURE__ */ st(e), c = o[t];
  if (c !== Jl[t]) {
    const b = c.apply(e, i);
    return l ? Ot(b) : b;
  }
  let h = n;
  o !== e && (l ? h = function(b, x) {
    return n.call(this, dt(e, b), x, e);
  } : n.length > 2 && (h = function(b, x) {
    return n.call(this, b, x, e);
  }));
  const d = c.call(o, h, r);
  return l && s ? s(d) : d;
}
function fi(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ st(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(h, d, b) {
    return l && (l = !1, h = dt(e, h)), n.call(this, h, dt(e, d), b, e);
  }) : n.length > 3 && (o = function(h, d, b) {
    return n.call(this, h, d, b, e);
  }));
  const c = s[t](o, ...r);
  return l ? dt(e, c) : c;
}
function Jr(e, t, n) {
  const r = /* @__PURE__ */ oe(e);
  Ie(r, "iterate", Hn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  wt(), Is();
  const r = (/* @__PURE__ */ oe(e))[t].apply(e, n);
  return Ps(), Ct(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Ao = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mt)
);
function Ql(e) {
  mt(e) || (e = String(e));
  const t = /* @__PURE__ */ oe(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
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
    const o = B(t);
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
    if ((mt(n) ? Ao.has(n) : Zl(n)) || (s || Ie(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ue(l)) {
      const c = o && Cs(n) ? l : l.value;
      return s && le(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return le(l) ? s ? /* @__PURE__ */ _s(l) : /* @__PURE__ */ Or(l) : l;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = B(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ft(i);
      if (!/* @__PURE__ */ st(r) && !/* @__PURE__ */ Ft(r) && (i = /* @__PURE__ */ oe(i), r = /* @__PURE__ */ oe(r)), !o && /* @__PURE__ */ Ue(i) && !/* @__PURE__ */ Ue(r))
        return h || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ue(t) ? t : s
    );
    return t === /* @__PURE__ */ oe(s) && c && (l ? St(r, i) && vt(t, "set", n, r) : vt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ie(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && vt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!mt(n) || !Ao.has(n)) && Ie(t, "has", n), r;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      B(t) ? "length" : Xt
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
    const s = this.__v_raw, i = /* @__PURE__ */ oe(s), o = Mt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? _n : Ot;
    return !t && Ie(
      i,
      "iterate",
      c ? ms : Xt
    ), Pe(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: x } = h.next();
          return x ? { value: b, done: x } : {
            value: l ? [d(b[0]), d(b[1])] : d(b),
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
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(s);
      e || (St(s, l) && Ie(o, "get", s), Ie(o, "get", l));
      const { has: c } = rr(o), h = t ? gs : e ? _n : Ot;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, l))
        return h(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ie(/* @__PURE__ */ oe(s), "iterate", Xt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ oe(i), l = /* @__PURE__ */ oe(s);
      return e || (St(s, l) && Ie(o, "has", s), Ie(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ oe(l), h = t ? gs : e ? _n : Ot;
      return !e && Ie(c, "iterate", Xt), l.forEach((d, b) => s.call(i, h(d), h(b), o));
    }
  };
  return Pe(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ oe(this), o = rr(i), l = /* @__PURE__ */ oe(s), c = !t && !/* @__PURE__ */ st(s) && !/* @__PURE__ */ Ft(s) ? l : s;
        return o.has.call(i, c) || St(s, c) && o.has.call(i, s) || St(l, c) && o.has.call(i, l) || (i.add(c), vt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ st(i) && !/* @__PURE__ */ Ft(i) && (i = /* @__PURE__ */ oe(i));
        const o = /* @__PURE__ */ oe(this), { has: l, get: c } = rr(o);
        let h = l.call(o, s);
        h || (s = /* @__PURE__ */ oe(s), h = l.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? St(i, d) && vt(o, "set", s, i) : vt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ oe(this), { has: o, get: l } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ oe(s), c = o.call(i, s)), l && l.call(i, s);
        const h = i.delete(s);
        return c && vt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ oe(this), i = s.size !== 0, o = s.clear();
        return i && vt(
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
    ie(n, s) && s in r ? n : r,
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
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
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
function st(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ oe(t) : e;
}
function da(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && uo(e, "__v_skip", !0), e;
}
const Ot = (e) => le(e) ? /* @__PURE__ */ Or(e) : e, _n = (e) => le(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function H(e) {
  return /* @__PURE__ */ Ue(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : H(Reflect.get(e, t, n)),
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new So(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
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
  return J(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Kt;
function ga(e, t = !1, n = Kt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = ae) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, h = (L) => s ? L : /* @__PURE__ */ st(L) || s === !1 || s === 0 ? At(L, 1) : At(L);
  let d, b, x, A, D = !1, F = !1;
  if (/* @__PURE__ */ Ue(e) ? (b = () => e.value, D = /* @__PURE__ */ st(e)) : /* @__PURE__ */ Jt(e) ? (b = () => h(e), D = !0) : B(e) ? (F = !0, D = e.some((L) => /* @__PURE__ */ Jt(L) || /* @__PURE__ */ st(L)), b = () => e.map((L) => {
    if (/* @__PURE__ */ Ue(L))
      return L.value;
    if (/* @__PURE__ */ Jt(L))
      return h(L);
    if (J(L))
      return c ? c(L, 2) : L();
  })) : J(e) ? t ? b = c ? () => c(e, 2) : e : b = () => {
    if (x) {
      wt();
      try {
        x();
      } finally {
        Ct();
      }
    }
    const L = Kt;
    Kt = d;
    try {
      return c ? c(e, 3, [A]) : e(A);
    } finally {
      Kt = L;
    }
  } : b = ht, t && s) {
    const L = b, te = s === !0 ? 1 / 0 : s;
    b = () => At(L(), te);
  }
  const Y = Gl(), $ = () => {
    d.stop(), Y && Y.active && ws(Y.effects, d);
  };
  if (i && t) {
    const L = t;
    t = (...te) => {
      const be = L(...te);
      return $(), be;
    };
  }
  let q = F ? new Array(e.length).fill(ir) : ir;
  const Z = (L) => {
    if (!(!(d.flags & 1) || !d.dirty && !L))
      if (t) {
        const te = d.run();
        if (L || s || D || (F ? te.some((be, ne) => St(be, q[ne])) : St(te, q))) {
          x && x();
          const be = Kt;
          Kt = d;
          try {
            const ne = [
              te,
              // pass undefined as the old value when it's changed for the first time
              q === ir ? void 0 : F && q[0] === ir ? [] : q,
              A
            ];
            q = te, c ? c(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            Kt = be;
          }
        }
      } else
        d.run();
  };
  return l && l(Z), d = new mo(b), d.scheduler = o ? () => o(Z, !1) : Z, A = (L) => ga(L, !1, d), x = d.onStop = () => {
    const L = pr.get(d);
    if (L) {
      if (c)
        c(L, 4);
      else
        for (const te of L) te();
      pr.delete(d);
    }
  }, t ? r ? Z(!0) : q = d.run() : o ? o(Z.bind(null, !0), !0) : d.run(), $.pause = d.pause.bind(d), $.resume = d.resume.bind(d), $.stop = $, $;
}
function At(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ue(e))
    At(e.value, t, n);
  else if (B(e))
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
function Bn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Rr(s, t, n);
  }
}
function it(e, t, n, r) {
  if (J(e)) {
    const s = Bn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (B(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(it(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ae;
  if (t) {
    let l = t.parent;
    const c = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let b = 0; b < d.length; b++)
          if (d[b](e, c, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      wt(), Bn(i, null, 10, [
        e,
        c,
        h
      ]), Ct();
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
let ft = -1;
const hn = [];
let Nt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Do(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = ft + 1, n = Le.length;
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
  if (!B(e))
    Nt && e.id === -1 ? Nt.splice(fn + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      hn.push(e[t]);
  No();
}
function di(e, t, n = ft + 1) {
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
    for (ft = 0; ft < Le.length; ft++) {
      const t = Le[ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ft < Le.length; ft++) {
      const t = Le[ft];
      t && (t.flags &= -2);
    }
    ft = -1, Le.length = 0, Mo(), hr = null, (Le.length || hn.length) && Lo();
  }
}
let Qe = null, Fo = null;
function mr(e) {
  const t = Qe;
  return Qe = e, Fo = e && e.type.__scopeId || null, t;
}
function Ea(e, t = Qe, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && vi(-1);
    const i = mr(t), o = Zt.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = Zt.length; c > o; c--) ol();
      mr(i), r._d && vi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ze(e, t) {
  if (Qe === null)
    return e;
  const n = Mr(Qe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = ae] = t[s];
    i && (J(i) && (i = {
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
    c && (wt(), it(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ct());
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
      return n && J(t) ? t.call(r && r.proxy) : t;
  }
}
const va = /* @__PURE__ */ Symbol.for("v-scx"), Aa = () => ur(va);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = ae) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Pe({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const A = Aa();
      h = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!c) {
      const A = () => {
      };
      return A.stop = ht, A.resume = ht, A.pause = ht, A;
    }
  }
  const d = Fe;
  l.call = (A, D, F) => it(A, d, D, F);
  let b = !1;
  i === "post" ? l.scheduler = (A) => {
    ze(A, d && d.suspense);
  } : i !== "sync" && (b = !0, l.scheduler = (A, D) => {
    D ? A() : Fs(A);
  }), l.augmentJob = (A) => {
    t && (A.flags |= 4), b && (A.flags |= 2, d && (A.id = d.uid, A.i = d));
  };
  const x = _a(e, t, l);
  return zn && (h ? h.push(x) : c && x()), x;
}
function xa(e, t, n) {
  const r = this.proxy, s = _e(e) ? e.includes(".") ? ko(r, e) : () => r[e] : e.bind(r, r);
  let i;
  J(t) ? i = t : (i = t.handler, n = t);
  const o = Kn(this), l = Uo(s, i.bind(r), n);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Rt) {
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
    if (t & 32 && J(n.default))
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
const gr = /* @__PURE__ */ new WeakMap();
function Ln(e, t, n, r, s = !1) {
  if (B(e)) {
    e.forEach(
      (F, Y) => Ln(
        F,
        t && (B(t) ? t[Y] : t),
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
  const i = r.shapeFlag & 4 ? Mr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, h = t && t.r, d = l.refs === ae ? l.refs = {} : l.refs, b = l.setupState, x = /* @__PURE__ */ oe(b), A = b === ae ? io : (F) => pi(d, F) ? !1 : ie(x, F), D = (F, Y) => !(Y && pi(d, Y));
  if (h != null && h !== c) {
    if (hi(t), _e(h))
      d[h] = null, A(h) && (b[h] = null);
    else if (/* @__PURE__ */ Ue(h)) {
      const F = t;
      D(h, F.k) && (h.value = null), F.k && (d[F.k] = null);
    }
  }
  if (J(c))
    Bn(c, l, 12, [o, d]);
  else {
    const F = _e(c), Y = /* @__PURE__ */ Ue(c);
    if (F || Y) {
      const $ = () => {
        if (e.f) {
          const q = F ? A(c) ? b[c] : d[c] : D() || !e.k ? c.value : d[e.k];
          if (s)
            B(q) && ws(q, i);
          else if (B(q))
            q.includes(i) || q.push(i);
          else if (F)
            d[c] = [i], A(c) && (b[c] = d[c]);
          else {
            const Z = [i];
            D(c, e.k) && (c.value = Z), e.k && (d[e.k] = Z);
          }
        } else F ? (d[c] = o, A(c) && (b[c] = o)) : Y && (D(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const q = () => {
          $(), gr.delete(e);
        };
        q.id = -1, gr.set(e, q), ze(q, n);
      } else
        hi(e), $();
    }
  }
}
function hi(e) {
  const t = gr.get(e);
  t && (t.flags |= 8, gr.delete(e));
}
wr().requestIdleCallback;
wr().cancelIdleCallback;
const Fn = (e) => !!e.type.__asyncLoader, ks = (e) => e.type.__isKeepAlive;
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
  Vo(() => {
    ws(r[t], s);
  }, n);
}
function Pr(e, t, n = Fe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      wt();
      const l = Kn(n), c = it(t, n, e, o);
      return l(), Ct(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const It = (e) => (t, n = Fe) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = It("bm"), Da = It("m"), Na = It(
  "bu"
), Ma = It("u"), La = It(
  "bum"
), Vo = It("um"), Fa = It(
  "sp"
), Ua = It("rtg"), ka = It("rtc");
function Ha(e, t = Fe) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function Ke(e, t, n, r) {
  let s;
  const i = n, o = B(e);
  if (o || _e(e)) {
    const l = o && /* @__PURE__ */ Jt(e);
    let c = !1, h = !1;
    l && (c = !/* @__PURE__ */ st(e), h = /* @__PURE__ */ Ft(e), e = Cr(e)), s = new Array(e.length);
    for (let d = 0, b = e.length; d < b; d++)
      s[d] = t(
        c ? h ? _n(Ot(e[d])) : Ot(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (le(e))
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
  /* @__PURE__ */ Pe(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== ae && !e.__isScriptSetup && ie(e, t), $a = {
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
        if (s !== ae && ie(s, t))
          return o[t] = 2, s[t];
        if (ie(i, t))
          return o[t] = 3, i[t];
        if (n !== ae && ie(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
      }
    }
    const h = Un[t];
    let d, b;
    if (h)
      return t === "$attrs" && Ie(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ae && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = c.config.globalProperties, ie(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== ae && ie(r, t) ? (r[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ae && l[0] !== "$" && ie(e, l) || es(t, l) || ie(i, l) || ie(r, l) || ie(Un, l) || ie(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return B(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ys = !0;
function Va(e) {
  const t = Wo(e), n = e.proxy, r = e.ctx;
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
    beforeMount: b,
    mounted: x,
    beforeUpdate: A,
    updated: D,
    activated: F,
    deactivated: Y,
    beforeDestroy: $,
    beforeUnmount: q,
    destroyed: Z,
    unmounted: L,
    render: te,
    renderTracked: be,
    renderTriggered: ne,
    errorCaptured: U,
    serverPrefetch: g,
    // public API
    expose: Ae,
    inheritAttrs: gt,
    // assets
    components: Ut,
    directives: ot,
    filters: tn
  } = t;
  if (h && za(h, r, null), o)
    for (const de in o) {
      const se = o[de];
      J(se) && (r[de] = se.bind(n));
    }
  if (s) {
    const de = s.call(n, n);
    le(de) && (e.data = /* @__PURE__ */ Or(de));
  }
  if (ys = !0, i)
    for (const de in i) {
      const se = i[de], et = J(se) ? se.bind(n, n) : J(se.get) ? se.get.bind(n, n) : ht, kt = !J(se) && J(se.set) ? se.set.bind(n) : ht, bt = Ve({
        get: et,
        set: kt
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (Xe) => bt.value = Xe
      });
    }
  if (l)
    for (const de in l)
      zo(l[de], r, n, de);
  if (c) {
    const de = J(c) ? c.call(n) : c;
    Reflect.ownKeys(de).forEach((se) => {
      Sa(se, de[se]);
    });
  }
  d && gi(d, e, "c");
  function Ce(de, se) {
    B(se) ? se.forEach((et) => de(et.bind(n))) : se && de(se.bind(n));
  }
  if (Ce(Pa, b), Ce(Da, x), Ce(Na, A), Ce(Ma, D), Ce(Oa, F), Ce(Ra, Y), Ce(Ha, U), Ce(ka, be), Ce(Ua, ne), Ce(La, q), Ce(Vo, L), Ce(Fa, g), B(Ae))
    if (Ae.length) {
      const de = e.exposed || (e.exposed = {});
      Ae.forEach((se) => {
        Object.defineProperty(de, se, {
          get: () => n[se],
          set: (et) => n[se] = et,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === ht && (e.render = te), gt != null && (e.inheritAttrs = gt), Ut && (e.components = Ut), ot && (e.directives = ot), g && jo(e);
}
function za(e, t, n = ht) {
  B(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    le(s) ? "default" in s ? i = ur(
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
  it(
    B(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? ko(n, r) : () => n[r];
  if (_e(e)) {
    const i = t[e];
    J(i) && Zr(s, i);
  } else if (J(e))
    Zr(s, e.bind(n));
  else if (le(e))
    if (B(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(i) && Zr(s, i, e);
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
    (h) => _r(c, h, o, !0)
  ), _r(c, t, o)), le(t) && i.set(t, c), c;
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
  inject: Ba
};
function _i(e, t) {
  return t ? e ? function() {
    return Pe(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ba(e, t) {
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
function Me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rn(e, t) {
  return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pe(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Me(e[r], t[r]);
  return n;
}
function Bo() {
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
    J(r) || (r = Pe({}, r)), s != null && !le(s) && (s = null);
    const i = Bo(), o = /* @__PURE__ */ new WeakSet(), l = [];
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
      use(d, ...b) {
        return o.has(d) || (d && J(d.install) ? (o.add(d), d.install(h, ...b)) : J(d) && (o.add(d), d(h, ...b))), h;
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), h;
      },
      component(d, b) {
        return b ? (i.components[d] = b, h) : i.components[d];
      },
      directive(d, b) {
        return b ? (i.directives[d] = b, h) : i.directives[d];
      },
      mount(d, b, x) {
        if (!c) {
          const A = h._ceVNode || xt(r, s);
          return A.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(A, d, x), c = !0, h._container = d, d.__vue_app__ = h, Mr(A.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (it(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, b) {
        return i.provides[d] = b, h;
      },
      runWithContext(d) {
        const b = mn;
        mn = h;
        try {
          return d();
        } finally {
          mn = b;
        }
      }
    };
    return h;
  };
}
let mn = null;
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nt(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ae;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => _e(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let l, c = r[l = Gr(t)] || // also try camelCase event handler (#2249)
  r[l = Gr(nt(t))];
  !c && i && (c = r[l = Gr(en(t))]), c && it(
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
    e.emitted[l] = !0, it(
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
  if (!J(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (l = !0, Pe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (le(e) && r.set(e, null), null) : (B(i) ? i.forEach((c) => o[c] = null) : Pe(o, i), le(e) && r.set(e, o), o);
}
function Dr(e, t) {
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, en(t)) || ie(e, t));
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
    props: b,
    data: x,
    setupState: A,
    ctx: D,
    inheritAttrs: F
  } = e, Y = mr(e);
  let $, q;
  try {
    if (n.shapeFlag & 4) {
      const L = s || r, te = L;
      $ = pt(
        h.call(
          te,
          L,
          d,
          b,
          A,
          x,
          D
        )
      ), q = l;
    } else {
      const L = t;
      $ = pt(
        L.length > 1 ? L(
          b,
          { attrs: l, slots: o, emit: c }
        ) : L(
          b,
          null
        )
      ), q = t.props ? l : Za(l);
    }
  } catch (L) {
    Zt.length = 0, Rr(L, e, 1), $ = xt(Rt);
  }
  let Z = $;
  if (q && F !== !1) {
    const L = Object.keys(q), { shapeFlag: te } = Z;
    L.length && te & 7 && (i && L.some(vr) && (q = Qa(
      q,
      i
    )), Z = bn(Z, q, !1, !0));
  }
  if (n.dirs && (Z = bn(Z, null, !1, !0), Z.dirs = Z.dirs ? Z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const L = Ir(Z.type) && Ho(Z) || Z;
    Us(L, n.transition);
  }
  return $ = Z, mr(Y), $;
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
      for (let b = 0; b < d.length; b++) {
        const x = d[b];
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
  return n === "style" && le(r) && le(s) ? !Lt(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ oe(s), [c] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let b = 0; b < d.length; b++) {
        let x = d[b];
        if (Dr(e.emitsOptions, x))
          continue;
        const A = t[x];
        if (c)
          if (ie(i, x))
            A !== i[x] && (i[x] = A, h = !0);
          else {
            const D = nt(x);
            s[D] = Es(
              c,
              l,
              D,
              A,
              e,
              !1
            );
          }
        else
          A !== i[x] && (i[x] = A, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const b in l)
      (!t || // for camelCase
      !ie(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = en(b)) === b || !ie(t, d))) && (c ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[d] !== void 0) && (s[b] = Es(
        c,
        l,
        b,
        void 0,
        e,
        !0
      )) : delete s[b]);
    if (i !== l)
      for (const b in i)
        (!t || !ie(t, b)) && (delete i[b], h = !0);
  }
  h && vt(e.attrs, "set", "");
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
      s && ie(s, d = nt(c)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Dr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ oe(n), h = l || ae;
    for (let d = 0; d < i.length; d++) {
      const b = i[d];
      n[b] = Es(
        s,
        c,
        b,
        h[b],
        e,
        !ie(h, b)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && J(c)) {
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
  if (!J(e)) {
    const d = (b) => {
      c = !0;
      const [x, A] = Zo(b, t, !0);
      Pe(o, x), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return le(e) && r.set(e, pn), pn;
  if (B(i))
    for (let d = 0; d < i.length; d++) {
      const b = nt(i[d]);
      Ei(b) && (o[b] = ae);
    }
  else if (i)
    for (const d in i) {
      const b = nt(d);
      if (Ei(b)) {
        const x = i[d], A = o[b] = B(x) || J(x) ? { type: x } : Pe({}, x), D = A.type;
        let F = !1, Y = !0;
        if (B(D))
          for (let $ = 0; $ < D.length; ++$) {
            const q = D[$], Z = J(q) && q.name;
            if (Z === "Boolean") {
              F = !0;
              break;
            } else Z === "String" && (Y = !1);
          }
        else
          F = J(D) && D.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = F, A[
          1
          /* shouldCastTrue */
        ] = Y, (F || ie(A, "default")) && l.push(b);
      }
    }
  const h = [o, l];
  return le(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Dn(e);
}
const Hs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => B(e) ? e.map(pt) : [pt(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Hs(s)) continue;
    const i = e[s];
    if (J(i))
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
  const r = e.slots = qo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (tl(r, t, n), n && uo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = ae;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Hs(l) && o[l] == null && delete s[l];
}, ze = dc;
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
    parentNode: b,
    nextSibling: x,
    setScopeId: A = ht,
    insertStaticContent: D
  } = e, F = (u, f, m, S = null, _ = null, T = null, C = void 0, O = null, R = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !xn(u, f) && (S = nn(u), Xe(u, _, T, !0), u = null), f.patchFlag === -2 && (R = !1, f.dynamicChildren = null);
    const { type: y, ref: V, shapeFlag: N } = f;
    switch (y) {
      case Nr:
        Y(u, f, m, S);
        break;
      case Rt:
        $(u, f, m, S);
        break;
      case ns:
        u == null && q(f, m, S, C);
        break;
      case ge:
        Ut(
          u,
          f,
          m,
          S,
          _,
          T,
          C,
          O,
          R
        );
        break;
      default:
        N & 1 ? te(
          u,
          f,
          m,
          S,
          _,
          T,
          C,
          O,
          R
        ) : N & 6 ? ot(
          u,
          f,
          m,
          S,
          _,
          T,
          C,
          O,
          R
        ) : (N & 64 || N & 128) && y.process(
          u,
          f,
          m,
          S,
          _,
          T,
          C,
          O,
          R,
          jt
        );
    }
    V != null && _ ? Ln(V, u && u.ref, T, f || u, !f) : V == null && u && u.ref != null && Ln(u.ref, null, T, u, !0);
  }, Y = (u, f, m, S) => {
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
  }, $ = (u, f, m, S) => {
    u == null ? r(
      f.el = c(f.children || ""),
      m,
      S
    ) : f.el = u.el;
  }, q = (u, f, m, S) => {
    [u.el, u.anchor] = D(
      u.children,
      f,
      m,
      S,
      u.el,
      u.anchor
    );
  }, Z = ({ el: u, anchor: f }, m, S) => {
    let _;
    for (; u && u !== f; )
      _ = x(u), r(u, m, S), u = _;
    r(f, m, S);
  }, L = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, te = (u, f, m, S, _, T, C, O, R) => {
    if (f.type === "svg" ? C = "svg" : f.type === "math" && (C = "mathml"), u == null)
      be(
        f,
        m,
        S,
        _,
        T,
        C,
        O,
        R
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), g(
          u,
          f,
          _,
          T,
          C,
          O,
          R
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, be = (u, f, m, S, _, T, C, O) => {
    let R, y;
    const { props: V, shapeFlag: N, transition: j, dirs: z } = u;
    if (R = u.el = o(
      u.type,
      T,
      V && V.is,
      V
    ), N & 8 ? d(R, u.children) : N & 16 && U(
      u.children,
      R,
      null,
      S,
      _,
      ts(u, T),
      C,
      O
    ), z && zt(u, null, S, "created"), ne(R, u, u.scopeId, C, S), V) {
      for (const ee in V)
        ee !== "value" && !Dn(ee) && i(R, ee, null, V[ee], T, S);
      "value" in V && i(R, "value", null, V.value, T), (y = V.onVnodeBeforeMount) && ct(y, S, u);
    }
    z && zt(u, null, S, "beforeMount");
    const X = uc(_, j);
    X && j.beforeEnter(R), r(R, f, m), ((y = V && V.onVnodeMounted) || X || z) && ze(() => {
      y && ct(y, S, u), X && j.enter(R), z && zt(u, null, S, "mounted");
    }, _);
  }, ne = (u, f, m, S, _) => {
    if (m && A(u, m), S)
      for (let T = 0; T < S.length; T++)
        A(u, S[T]);
    if (_) {
      let T = _.subTree;
      if (f === T || il(T.type) && (T.ssContent === f || T.ssFallback === f)) {
        const C = _.vnode;
        ne(
          u,
          C,
          C.scopeId,
          C.slotScopeIds,
          _.parent
        );
      }
    }
  }, U = (u, f, m, S, _, T, C, O, R = 0) => {
    for (let y = R; y < u.length; y++) {
      const V = u[y] = O ? Et(u[y]) : pt(u[y]);
      F(
        null,
        V,
        f,
        m,
        S,
        _,
        T,
        C,
        O
      );
    }
  }, g = (u, f, m, S, _, T, C) => {
    const O = f.el = u.el;
    let { patchFlag: R, dynamicChildren: y, dirs: V } = f;
    R |= u.patchFlag & 16;
    const N = u.props || ae, j = f.props || ae;
    let z;
    if (m && Wt(m, !1), (z = j.onVnodeBeforeUpdate) && ct(z, m, f, u), V && zt(f, u, m, "beforeUpdate"), m && Wt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (R = 0, C = !1, y = null), (N.innerHTML && j.innerHTML == null || N.textContent && j.textContent == null) && d(O, ""), y ? Ae(
      u.dynamicChildren,
      y,
      O,
      m,
      S,
      ts(f, _),
      T
    ) : C || se(
      u,
      f,
      O,
      null,
      m,
      S,
      ts(f, _),
      T,
      !1
    ), R > 0) {
      if (R & 16)
        gt(O, N, j, m, _);
      else if (R & 2 && N.class !== j.class && i(O, "class", null, j.class, _), R & 4 && i(O, "style", N.style, j.style, _), R & 8) {
        const X = f.dynamicProps;
        for (let ee = 0; ee < X.length; ee++) {
          const Q = X[ee], pe = N[Q], me = j[Q];
          (me !== pe || Q === "value") && i(O, Q, pe, me, _, m);
        }
      }
      R & 1 && u.children !== f.children && d(O, f.children);
    } else !C && y == null && gt(O, N, j, m, _);
    ((z = j.onVnodeUpdated) || V) && ze(() => {
      z && ct(z, m, f, u), V && zt(f, u, m, "updated");
    }, S);
  }, Ae = (u, f, m, S, _, T, C) => {
    for (let O = 0; O < f.length; O++) {
      const R = u[O], y = f[O], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        R.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (R.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(R, y) || // - In the case of a component, it could contain anything.
        R.shapeFlag & 198) ? b(R.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      F(
        R,
        y,
        V,
        null,
        S,
        _,
        T,
        C,
        !0
      );
    }
  }, gt = (u, f, m, S, _) => {
    if (f !== m) {
      if (f !== ae)
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
        const C = m[T], O = f[T];
        C !== O && T !== "value" && i(u, T, O, C, _, S);
      }
      "value" in m && i(u, "value", f.value, m.value, _);
    }
  }, Ut = (u, f, m, S, _, T, C, O, R) => {
    const y = f.el = u ? u.el : l(""), V = f.anchor = u ? u.anchor : l("");
    let { patchFlag: N, dynamicChildren: j, slotScopeIds: z } = f;
    z && (O = O ? O.concat(z) : z), u == null ? (r(y, m, S), r(V, m, S), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      V,
      _,
      T,
      C,
      O,
      R
    )) : N > 0 && N & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (Ae(
      u.dynamicChildren,
      j,
      m,
      _,
      T,
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
    )) : se(
      u,
      f,
      m,
      V,
      _,
      T,
      C,
      O,
      R
    );
  }, ot = (u, f, m, S, _, T, C, O, R) => {
    f.slotScopeIds = O, u == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      m,
      S,
      C,
      R
    ) : tn(
      f,
      m,
      S,
      _,
      T,
      C,
      R
    ) : _t(u, f, R);
  }, tn = (u, f, m, S, _, T, C) => {
    const O = u.component = yc(
      u,
      S,
      _
    );
    if (ks(u) && (O.ctx.renderer = jt), Ec(O, !1, C), O.asyncDep) {
      if (_ && _.registerDep(O, Ce, C), !u.el) {
        const R = O.subTree = xt(Rt);
        $(null, R, f, m), u.placeholder = R.el;
      }
    } else
      Ce(
        O,
        u,
        f,
        m,
        _,
        T,
        C
      );
  }, _t = (u, f, m) => {
    const S = f.component = u.component;
    if (ec(u, f, m))
      if (S.asyncDep && !S.asyncResolved) {
        de(S, f, m);
        return;
      } else
        S.next = f, S.update();
    else
      f.el = u.el, S.vnode = f;
  }, Ce = (u, f, m, S, _, T, C) => {
    const O = () => {
      if (u.isMounted) {
        let { next: N, bu: j, u: z, parent: X, vnode: ee } = u;
        {
          const ke = rl(u);
          if (ke) {
            N && (N.el = ee.el, de(u, N, C)), ke.asyncDep.then(() => {
              ze(() => {
                u.isUnmounted || y();
              }, _);
            });
            return;
          }
        }
        let Q = N, pe;
        Wt(u, !1), N ? (N.el = ee.el, de(u, N, C)) : N = ee, j && cr(j), (pe = N.props && N.props.onVnodeBeforeUpdate) && ct(pe, X, N, ee), Wt(u, !0);
        const me = yi(u), De = u.subTree;
        u.subTree = me, F(
          De,
          me,
          // parent may have changed if it's in a teleport
          b(De.el),
          // anchor may have changed if it's in a fragment
          nn(De),
          u,
          _,
          T
        ), N.el = me.el, Q === null && tc(u, me.el), z && ze(z, _), (pe = N.props && N.props.onVnodeUpdated) && ze(
          () => ct(pe, X, N, ee),
          _
        );
      } else {
        let N;
        const { el: j, props: z } = f, { bm: X, m: ee, parent: Q, root: pe, type: me } = u, De = Fn(f);
        Wt(u, !1), X && cr(X), !De && (N = z && z.onVnodeBeforeMount) && ct(N, Q, f), Wt(u, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            me,
            u.parent ? u.parent.type : void 0
          );
          const ke = u.subTree = yi(u);
          F(
            null,
            ke,
            m,
            S,
            u,
            _,
            T
          ), f.el = ke.el;
        }
        if (ee && ze(ee, _), !De && (N = z && z.onVnodeMounted)) {
          const ke = f;
          ze(
            () => ct(N, Q, ke),
            _
          );
        }
        (f.shapeFlag & 256 || Q && Fn(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && ze(u.a, _), u.isMounted = !0, f = m = S = null;
      }
    };
    u.scope.on();
    const R = u.effect = new mo(O);
    u.scope.off();
    const y = u.update = R.run.bind(R), V = u.job = R.runIfDirty.bind(R);
    V.i = u, V.id = u.uid, R.scheduler = () => Fs(V), Wt(u, !0), y();
  }, de = (u, f, m) => {
    f.component = u;
    const S = u.vnode.props;
    u.vnode = f, u.next = null, rc(u, f.props, S, m), lc(u, f.children, m), wt(), di(u), Ct();
  }, se = (u, f, m, S, _, T, C, O, R = !1) => {
    const y = u && u.children, V = u ? u.shapeFlag : 0, N = f.children, { patchFlag: j, shapeFlag: z } = f;
    if (j > 0) {
      if (j & 128) {
        kt(
          y,
          N,
          m,
          S,
          _,
          T,
          C,
          O,
          R
        );
        return;
      } else if (j & 256) {
        et(
          y,
          N,
          m,
          S,
          _,
          T,
          C,
          O,
          R
        );
        return;
      }
    }
    z & 8 ? (V & 16 && Ht(y, _, T), N !== y && d(m, N)) : V & 16 ? z & 16 ? kt(
      y,
      N,
      m,
      S,
      _,
      T,
      C,
      O,
      R
    ) : Ht(y, _, T, !0) : (V & 8 && d(m, ""), z & 16 && U(
      N,
      m,
      S,
      _,
      T,
      C,
      O,
      R
    ));
  }, et = (u, f, m, S, _, T, C, O, R) => {
    u = u || pn, f = f || pn;
    const y = u.length, V = f.length, N = Math.min(y, V);
    let j;
    for (j = 0; j < N; j++) {
      const z = f[j] = R ? Et(f[j]) : pt(f[j]);
      F(
        u[j],
        z,
        m,
        null,
        _,
        T,
        C,
        O,
        R
      );
    }
    y > V ? Ht(
      u,
      _,
      T,
      !0,
      !1,
      N
    ) : U(
      f,
      m,
      S,
      _,
      T,
      C,
      O,
      R,
      N
    );
  }, kt = (u, f, m, S, _, T, C, O, R) => {
    let y = 0;
    const V = f.length;
    let N = u.length - 1, j = V - 1;
    for (; y <= N && y <= j; ) {
      const z = u[y], X = f[y] = R ? Et(f[y]) : pt(f[y]);
      if (xn(z, X))
        F(
          z,
          X,
          m,
          null,
          _,
          T,
          C,
          O,
          R
        );
      else
        break;
      y++;
    }
    for (; y <= N && y <= j; ) {
      const z = u[N], X = f[j] = R ? Et(f[j]) : pt(f[j]);
      if (xn(z, X))
        F(
          z,
          X,
          m,
          null,
          _,
          T,
          C,
          O,
          R
        );
      else
        break;
      N--, j--;
    }
    if (y > N) {
      if (y <= j) {
        const z = j + 1, X = z < V ? f[z].el : S;
        for (; y <= j; )
          F(
            null,
            f[y] = R ? Et(f[y]) : pt(f[y]),
            m,
            X,
            _,
            T,
            C,
            O,
            R
          ), y++;
      }
    } else if (y > j)
      for (; y <= N; )
        Xe(u[y], _, T, !0), y++;
    else {
      const z = y, X = y, ee = /* @__PURE__ */ new Map();
      for (y = X; y <= j; y++) {
        const xe = f[y] = R ? Et(f[y]) : pt(f[y]);
        xe.key != null && ee.set(xe.key, y);
      }
      let Q, pe = 0;
      const me = j - X + 1;
      let De = !1, ke = 0;
      const Je = new Array(me);
      for (y = 0; y < me; y++) Je[y] = 0;
      for (y = z; y <= N; y++) {
        const xe = u[y];
        if (pe >= me) {
          Xe(xe, _, T, !0);
          continue;
        }
        let Be;
        if (xe.key != null)
          Be = ee.get(xe.key);
        else
          for (Q = X; Q <= j; Q++)
            if (Je[Q - X] === 0 && xn(xe, f[Q])) {
              Be = Q;
              break;
            }
        Be === void 0 ? Xe(xe, _, T, !0) : (Je[Be - X] = y + 1, Be >= ke ? ke = Be : De = !0, F(
          xe,
          f[Be],
          m,
          null,
          _,
          T,
          C,
          O,
          R
        ), pe++);
      }
      const $t = De ? fc(Je) : pn;
      for (Q = $t.length - 1, y = me - 1; y >= 0; y--) {
        const xe = X + y, Be = f[xe], Tn = f[xe + 1], En = xe + 1 < V ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Tn.el || sl(Tn)
        ) : S;
        Je[y] === 0 ? F(
          null,
          Be,
          m,
          En,
          _,
          T,
          C,
          O,
          R
        ) : De && (Q < 0 || y !== $t[Q] ? bt(Be, m, En, 2) : Q--);
      }
    }
  }, bt = (u, f, m, S, _ = null) => {
    const { el: T, type: C, transition: O, children: R, shapeFlag: y } = u;
    if (y & 6) {
      bt(u.component.subTree, f, m, S);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, m, S);
      return;
    }
    if (y & 64) {
      C.move(u, f, m, jt);
      return;
    }
    if (C === ge) {
      r(T, f, m);
      for (let N = 0; N < R.length; N++)
        bt(R[N], f, m, S);
      r(u.anchor, f, m);
      return;
    }
    if (C === ns) {
      Z(u, f, m);
      return;
    }
    if (S !== 2 && y & 1 && O)
      if (S === 0)
        O.persisted && !T[Qr] ? r(T, f, m) : (O.beforeEnter(T), r(T, f, m), ze(() => O.enter(T), _));
      else {
        const { leave: N, delayLeave: j, afterLeave: z } = O, X = () => {
          u.ctx.isUnmounted ? s(T) : r(T, f, m);
        }, ee = () => {
          const Q = T._isLeaving || !!T[Qr];
          T._isLeaving && T[Qr](
            !0
            /* cancelled */
          ), O.persisted && !Q ? X() : N(T, () => {
            X(), z && z();
          });
        };
        j ? j(T, X, ee) : ee();
      }
    else
      r(T, f, m);
  }, Xe = (u, f, m, S = !1, _ = !1) => {
    const {
      type: T,
      props: C,
      ref: O,
      children: R,
      dynamicChildren: y,
      shapeFlag: V,
      patchFlag: N,
      dirs: j,
      cacheIndex: z,
      memo: X
    } = u;
    if (N === -2 && (_ = !1), O != null && (wt(), Ln(O, null, m, u, !0), Ct()), z != null && (f.renderCache[z] = void 0), V & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const ee = V & 1 && j, Q = !Fn(u);
    let pe;
    if (Q && (pe = C && C.onVnodeBeforeUnmount) && ct(pe, f, u), V & 6)
      Lr(u.component, m, S);
    else {
      if (V & 128) {
        u.suspense.unmount(m, S);
        return;
      }
      ee && zt(u, null, f, "beforeUnmount"), V & 64 ? u.type.remove(
        u,
        f,
        m,
        jt,
        S
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== ge || N > 0 && N & 64) ? Ht(
        y,
        f,
        m,
        !1,
        !0
      ) : (T === ge && N & 384 || !_ && V & 16) && Ht(R, f, m), S && Gn(u);
    }
    const me = X != null && z == null;
    (Q && (pe = C && C.onVnodeUnmounted) || ee || me) && ze(() => {
      pe && ct(pe, f, u), ee && zt(u, null, f, "unmounted"), me && (u.el = null);
    }, m);
  }, Gn = (u) => {
    const { type: f, el: m, anchor: S, transition: _ } = u;
    if (f === ge) {
      ce(m, S);
      return;
    }
    if (f === ns) {
      L(u);
      return;
    }
    const T = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: C, delayLeave: O } = _, R = () => C(m, T);
      O ? O(u.el, T, R) : R();
    } else
      T();
  }, ce = (u, f) => {
    let m;
    for (; u !== f; )
      m = x(u), s(u), u = m;
    s(f);
  }, Lr = (u, f, m) => {
    const { bum: S, scope: _, job: T, subTree: C, um: O, m: R, a: y } = u;
    Si(R), Si(y), S && cr(S), _.stop(), T && (T.flags |= 8, Xe(C, u, f, m)), O && ze(O, f), ze(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ht = (u, f, m, S = !1, _ = !1, T = 0) => {
    for (let C = T; C < u.length; C++)
      Xe(u[C], f, m, S, _);
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
    let S;
    u == null ? f._vnode && (Xe(f._vnode, null, null, !0), S = f._vnode.component) : F(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, yn || (yn = !0, di(S), Mo(), yn = !1);
  }, jt = {
    p: F,
    um: Xe,
    m: bt,
    r: Gn,
    mt: tn,
    mc: U,
    pc: se,
    pbc: Ae,
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
function Wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (B(r) && B(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Et(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && nl(o, l)), l.type === Nr && (l.patchFlag === -1 && (l = s[i] = Et(l)), l.el = o.el), l.type === Rt && !l.el && (l.el = o.el);
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
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), Rt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Zt = [];
let qe = null;
function W(e = !1) {
  Zt.push(qe = e ? null : []);
}
function ol() {
  Zt.pop(), qe = Zt[Zt.length - 1] || null;
}
let $n = 1;
function vi(e, t = !1) {
  $n += e, e < 0 && qe && t && (qe.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? qe || pn : null, ol(), $n > 0 && qe && qe.push(e), e;
}
function G(e, t, n, r, s, i) {
  return ll(
    w(
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
    xt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? _e(e) || /* @__PURE__ */ Ue(e) || J(e) ? { i: Qe, r: e, k: t, f: !!n } : e : null);
function w(e, t = null, n = null, r = 0, s = null, i = e === ge ? 0 : 1, o = !1, l = !1) {
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
    ctx: Qe
  };
  return l ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= _e(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  qe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && qe.push(c), c;
}
const xt = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = Rt), al(e)) {
    const l = bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(l, n), $n > 0 && !i && qe && (l.shapeFlag & 6 ? qe[qe.indexOf(e)] = l : qe.push(l)), l.patchFlag = -2, l;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: l, style: c } = t;
    l && !_e(l) && (t.class = Rs(l)), le(c) && (/* @__PURE__ */ Ls(c) && !B(c) && (c = Pe({}, c)), t.style = Os(c));
  }
  const o = _e(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : le(e) ? 4 : J(e) ? 2 : 0;
  return w(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Pe({}, e) : e : null;
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
      n && i ? B(i) ? i.concat(fr(t)) : [i, fr(t)] : fr(t)
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
    patchFlag: t && e.type !== ge ? o === -1 ? 16 : o | 16 : o,
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
function Se(e = " ", t = 0) {
  return xt(Nr, null, e, t);
}
function $e(e = "", t = !1) {
  return t ? (W(), pc(Rt, null, e)) : xt(Rt, null, e);
}
function pt(e) {
  return e == null || typeof e == "boolean" ? xt(Rt) : B(e) ? xt(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? Et(e) : xt(Nr, null, String(e));
}
function Et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bn(e);
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
      !s && !Xo(t) ? t._ctx = Qe : s === 3 && Qe && (Qe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Qe }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Se(t)]) : n = 8;
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
        o && i !== o && !(B(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function ct(e, t, n, r = null) {
  it(e, t, 7, [
    n,
    r
  ]);
}
const _c = Bo();
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
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
const Tc = () => Fe || Qe;
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
}, Ai = () => {
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
    wt();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Kn(e), o = Bn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = oo(o);
    if (Ct(), i(), (l || e.sp) && !Fn(e) && jo(e), l) {
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
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Io(t)), fl(e);
}
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ht);
  {
    const s = Kn(e);
    wt();
    try {
      Va(e);
    } finally {
      Ct(), s();
    }
  }
}
const vc = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
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
  return J(e) && "__vccOpts" in e;
}
const Ve = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", Tt = typeof document < "u" ? document : null, Ci = Tt && /* @__PURE__ */ Tt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Tt.createElementNS(Cc, e) : t === "mathml" ? Tt.createElementNS(Oc, e) : n ? Tt.createElement(e, { is: n }) : Tt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Tt.createTextNode(e),
  createComment: (e) => Tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tt.querySelector(e),
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
  const r = e.style, s = _e(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (_e(t))
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
        !_e(t) && t ? t[o] : void 0,
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
  if (B(n))
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
  let r = nt(t);
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
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && _e(r) && n === r;
}
const Ii = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, r, s, i = zl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !fo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : mt(n) ? String(n) : n
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
function kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ni = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, r, s = null) {
  const i = e[Ni] || (e[Ni] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Vc(t);
    if (r) {
      const h = i[t] = Bc(
        r,
        s
      );
      Yt(e, l, h, c);
    } else o && (kc(e, l, o, c), i[t] = void 0);
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
const zc = /* @__PURE__ */ Promise.resolve(), Wc = () => ss || (zc.then(() => ss = 0), ss = Date.now());
function Bc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (B(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const h = o[c];
        h && it(
          h,
          t,
          5,
          l
        );
      }
    } else
      it(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Wc(), n;
}
const Mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? vr(t) || Hc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Di(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !_e(r))) ? Di(e, nt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Mi(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Mi(t) && _e(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = nt(t);
  return Array.isArray(n) ? n.some((s) => nt(s) === r) : Object.keys(n).some((s) => nt(s) === r);
}
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => cr(t, n) : t;
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
}, ut = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Yt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Qt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? B(o) ? s.slice() : s : o
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
  if (!n || B(e)) return Lt(e, t);
  if (Qt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = B(t);
  if (!(n && !r && !Qt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Er(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(l)) : o.selected = Bl(t, l) > -1;
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
const Jc = /* @__PURE__ */ Pe({ patchProp: Kc }, Rc);
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
    !J(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return _e(e) ? document.querySelector(e) : e;
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
    if (typeof e == "string") return Hi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hi(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, au = Object.isFrozen, cu = Object.getPrototypeOf, uu = Object.getOwnPropertyDescriptor;
let ve = Object.freeze, we = Object.seal, dn = Object.create, hl = typeof Reflect < "u" && Reflect, vs = hl.apply, As = hl.construct;
ve || (ve = function(t) {
  return t;
});
we || (we = function(t) {
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
const Gt = Ee(Array.prototype.forEach), fu = Ee(Array.prototype.lastIndexOf), $i = Ee(Array.prototype.pop), wn = Ee(Array.prototype.push), du = Ee(Array.prototype.splice), gn = Array.isArray, Pn = Ee(String.prototype.toLowerCase), os = Ee(String.prototype.toString), Vi = Ee(String.prototype.match), Cn = Ee(String.prototype.replace), zi = Ee(String.prototype.indexOf), pu = Ee(String.prototype.trim), hu = Ee(Number.prototype.toString), mu = Ee(Boolean.prototype.toString), Wi = typeof BigInt > "u" ? null : Ee(BigInt.prototype.toString), Bi = typeof Symbol > "u" ? null : Ee(Symbol.prototype.toString), We = Ee(Object.prototype.hasOwnProperty), On = Ee(Object.prototype.toString), Re = Ee(RegExp.prototype.test), Bt = gu(TypeError);
function Ee(e) {
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
function re(e, t) {
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
    We(e, t) || (e[t] = null);
  return e;
}
function Ye(e) {
  const t = dn(null);
  for (const r of pl(e)) {
    var n = ou(r, 2);
    const s = n[0], i = n[1];
    We(e, s) && (gn(i) ? t[s] = _u(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = Ye(i) : t[s] = i);
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
      return Wi ? Wi(e) : "0";
    case "symbol":
      return Bi ? Bi(e) : "Symbol()";
    case "undefined":
      return On(e);
    case "function":
    case "object": {
      if (e === null)
        return On(e);
      const t = e, n = tt(t, "toString");
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
function tt(e, t) {
  for (; e !== null; ) {
    const r = uu(e, t);
    if (r) {
      if (r.get)
        return Ee(r.get);
      if (typeof r.value == "function")
        return Ee(r.value);
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
    return Re(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ki = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Tu = ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Eu = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = ve(["#text"]), Yi = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), us = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = ve(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Su = we(/{{[\w\W]*|^[\w\W]*}}/g), vu = we(/<%[\w\W]*|^[\w\W]*%>/g), Au = we(/\${[\w\W]*/g), xu = we(/^data-[\-\w.\u00B7-\uFFFF]+$/), wu = we(/^aria-[\-\w]+$/), Xi = we(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cu = we(/^(?:\w+script|data):/i), Ou = we(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ru = we(/^html$/i), Iu = we(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = we(/<[/\w!]/g), Zi = we(/<[/\w]/g), Pu = we(/<\/no(script|embed|frames)/i), Du = we(/\/>/i), Ge = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Nu = ve(re({}, ml)), Mu = (function() {
  const e = {};
  return Gt(ml, (t) => {
    e[t] = we(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), ve(e);
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
  return We(t, n) && gn(t[n]) ? re(s.base ? Ye(s.base) : {}, t[n], s.transform) : r;
}, fs = function(t, n, r) {
  const s = We(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? Ye(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lu();
  const t = (v) => gl(v);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Ge.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, b = e.trustedTypes, x = l.prototype, A = tt(x, "cloneNode"), D = tt(x, "remove"), F = tt(x, "nextSibling"), Y = tt(x, "childNodes"), $ = tt(x, "parentNode"), q = tt(x, "shadowRoot"), Z = tt(x, "attributes"), L = o && o.prototype ? tt(o.prototype, "nodeType") : null, te = o && o.prototype ? tt(o.prototype, "nodeName") : null, be = o && o.prototype ? tt(o.prototype, "ownerDocument") : null, ne = function(a) {
    return L ? L(a) : a.nodeType;
  }, U = function(a) {
    return te ? te(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const v = n.createElement("template");
    v.content && v.content.ownerDocument && (n = v.content.ownerDocument);
  }
  let g, Ae = "", gt, Ut = !1, ot = 0;
  const tn = function() {
    if (ot > 0)
      throw Bt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, _t = function(a) {
    tn(), ot++;
    try {
      return g.createHTML(a);
    } finally {
      ot--;
    }
  }, Ce = function(a) {
    tn(), ot++;
    try {
      return g.createScriptURL(a);
    } finally {
      ot--;
    }
  }, de = function() {
    return Ut || (gt = Fu(b, s), Ut = !0), gt;
  }, se = n, et = se.implementation, kt = se.createNodeIterator, bt = se.createDocumentFragment, Xe = se.getElementsByTagName, Gn = r.importNode;
  let ce = Qi();
  t.isSupported = typeof pl == "function" && typeof $ == "function" && et && et.createHTMLDocument !== void 0;
  const Lr = Su, Ht = vu, nn = Au, yn = xu, Yn = wu, jt = Cu, Fr = Ou, u = Iu;
  let f = Xi, m = null;
  const S = re({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let _ = null;
  const T = re({}, [...Yi, ...us, ...qi, ...ar]);
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
  let V = !0, N = !0, j = !1, z = !0, X = !1, ee = !0, Q = !1, pe = !1, me = null, De = null, ke = !1, Je = !1, $t = !1, xe = !1, Be = !0, Tn = !1;
  const En = "user-content-";
  let Ur = !0, kr = !1, rn = {}, sn = null;
  const $s = re({}, [
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
  const zs = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ws = null;
  const Bs = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Xn = "http://www.w3.org/2000/svg", lt = "http://www.w3.org/1999/xhtml";
  let on = lt, Hr = !1, jr = null;
  const bl = re({}, [qn, Xn, lt], os), Ks = ve(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = re({}, Ks);
  const Gs = ve(["annotation-xml"]);
  let Vr = re({}, Gs);
  const yl = re({}, ["title", "style", "font", "a", "script"]);
  let Sn = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let ye = null, ln = null;
  const Sl = n.createElement("form"), Ys = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ln && ln === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = Ye(a), Sn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? El : a.PARSER_MEDIA_TYPE, ye = Sn === "application/xhtml+xml" ? os : Pn, m = Dt(a, "ALLOWED_TAGS", S, {
      transform: ye
    }), _ = Dt(a, "ALLOWED_ATTR", T, {
      transform: ye
    }), jr = Dt(a, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Ws = Dt(a, "ADD_URI_SAFE_ATTR", Bs, {
      transform: ye,
      base: Bs
    }), Vs = Dt(a, "ADD_DATA_URI_TAGS", zs, {
      transform: ye,
      base: zs
    }), sn = Dt(a, "FORBID_CONTENTS", $s, {
      transform: ye
    }), O = Dt(a, "FORBID_TAGS", Ye({}), {
      transform: ye
    }), R = Dt(a, "FORBID_ATTR", Ye({}), {
      transform: ye
    }), rn = We(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? Ye(a.USE_PROFILES) : a.USE_PROFILES : !1, V = a.ALLOW_ARIA_ATTR !== !1, N = a.ALLOW_DATA_ATTR !== !1, j = a.ALLOW_UNKNOWN_PROTOCOLS || !1, z = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = a.SAFE_FOR_TEMPLATES || !1, ee = a.SAFE_FOR_XML !== !1, Q = a.WHOLE_DOCUMENT || !1, Je = a.RETURN_DOM || !1, $t = a.RETURN_DOM_FRAGMENT || !1, xe = a.RETURN_TRUSTED_TYPE || !1, ke = a.FORCE_BODY || !1, Be = a.SANITIZE_DOM !== !1, Tn = a.SANITIZE_NAMED_PROPS || !1, Ur = a.KEEP_CONTENT !== !1, kr = a.IN_PLACE || !1, f = yu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Xi, on = typeof a.NAMESPACE == "string" ? a.NAMESPACE : lt, $r = fs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => re({}, Ks)
      // Default built-in map
    ), Vr = fs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => re({}, Gs)
      // Default built-in map
    );
    const p = fs(a, "CUSTOM_ELEMENT_HANDLING", () => dn(null));
    if (C = dn(null), We(p, "tagNameCheck") && Ys(p.tagNameCheck) && (C.tagNameCheck = p.tagNameCheck), We(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (C.attributeNameCheck = p.attributeNameCheck), We(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (C.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), we(C), X && (N = !1), $t && (Je = !0), rn && (m = re({}, Gi), _ = dn(null), rn.html === !0 && (re(m, Ki), re(_, Yi)), rn.svg === !0 && (re(m, ls), re(_, us), re(_, ar)), rn.svgFilters === !0 && (re(m, as), re(_, us), re(_, ar)), rn.mathMl === !0 && (re(m, cs), re(_, qi), re(_, ar))), y.tagCheck = null, y.attributeCheck = null, We(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? y.tagCheck = a.ADD_TAGS : gn(a.ADD_TAGS) && (m === S && (m = Ye(m)), re(m, a.ADD_TAGS, ye))), We(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? y.attributeCheck = a.ADD_ATTR : gn(a.ADD_ATTR) && (_ === T && (_ = Ye(_)), re(_, a.ADD_ATTR, ye))), We(a, "ADD_FORBID_CONTENTS") && gn(a.ADD_FORBID_CONTENTS) && (sn === $s && (sn = Ye(sn)), re(sn, a.ADD_FORBID_CONTENTS, ye)), Ur && (m["#text"] = !0), Q && re(m, ["html", "head", "body"]), m.table && (re(m, ["tbody"]), delete O.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Bt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const E = g;
      g = a.TRUSTED_TYPES_POLICY;
      try {
        Ae = _t("");
      } catch (M) {
        throw g = E, M;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (g = void 0, Ae = "") : (g === void 0 && (g = de()), g && typeof Ae == "string" && (Ae = _t("")));
    ve && ve(a), ln = a;
  }, qs = re({}, [...ls, ...as, ...Tu]), Xs = re({}, [...cs, ...Eu]), vl = function(a, p, E) {
    return p.namespaceURI === lt ? a === "svg" : p.namespaceURI === qn ? a === "svg" && (E === "annotation-xml" || $r[E]) : !!qs[a];
  }, Al = function(a, p, E) {
    return p.namespaceURI === lt ? a === "math" : p.namespaceURI === Xn ? a === "math" && Vr[E] : !!Xs[a];
  }, xl = function(a, p, E) {
    return p.namespaceURI === Xn && !Vr[E] || p.namespaceURI === qn && !$r[E] ? !1 : !Xs[a] && (yl[a] || !qs[a]);
  }, wl = function(a) {
    let p = $(a);
    (!p || !p.tagName) && (p = {
      namespaceURI: on,
      tagName: "template"
    });
    const E = Pn(a.tagName), M = Pn(p.tagName);
    return jr[a.namespaceURI] ? a.namespaceURI === Xn ? vl(E, p, M) : a.namespaceURI === qn ? Al(E, p, M) : a.namespaceURI === lt ? xl(E, p, M) : !!(Sn === "application/xhtml+xml" && jr[a.namespaceURI]) : !1;
  }, Pt = function(a) {
    wn(t.removed, {
      element: a
    });
    try {
      $(a).removeChild(a);
    } catch {
      if (D(a), !$(a))
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
    const p = Y(a);
    if (p) {
      const M = [];
      Gt(p, (k) => {
        wn(M, k);
      }), Gt(M, (k) => {
        try {
          D(k);
        } catch {
        }
      });
    }
    const E = Z(a);
    if (E)
      for (let M = E.length - 1; M >= 0; --M) {
        const k = E[M], K = k && k.name;
        typeof K == "string" && Js(a, k, K);
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
      if (Je || $t)
        try {
          Pt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(a, "");
        } catch {
        }
  }, Cl = function(a) {
    const p = Z(a);
    if (p)
      for (let E = p.length - 1; E >= 0; --E) {
        const M = p[E], k = M && M.name;
        typeof k != "string" || _[ye(k)] || Js(a, M, k);
      }
  }, Zn = function(a) {
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop();
      ne(E) === Ge.element && Cl(E);
      const k = Y(E);
      if (k)
        for (let K = k.length - 1; K >= 0; --K)
          p.push(k[K]);
    }
  }, Zs = function(a, p) {
    return ee ? a === "patchsrc" ? !0 : a === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(a) {
    if (!ee)
      return;
    const p = [a];
    for (; p.length > 0; ) {
      const E = p.pop(), M = ne(E);
      if (M === Ge.processingInstruction || M === Ge.comment && Re(Zi, E.data)) {
        try {
          D(E);
        } catch {
        }
        continue;
      }
      if (M === Ge.element) {
        const K = E, ue = ye(U(E));
        try {
          K.hasAttribute && K.hasAttribute("patchsrc") && K.removeAttribute("patchsrc"), K.hasAttribute && K.hasAttribute("for") && Zs("for", ue) && K.removeAttribute("for");
        } catch {
        }
      }
      const k = Y(E);
      if (k)
        for (let K = k.length - 1; K >= 0; --K)
          p.push(k[K]);
    }
  }, Qs = function(a) {
    let p = null, E = null;
    if (ke)
      a = "<remove></remove>" + a;
    else {
      const K = Vi(a, /^[\r\n\t ]+/);
      E = K && K[0];
    }
    Sn === "application/xhtml+xml" && on === lt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const M = g ? _t(a) : a;
    if (on === lt)
      try {
        p = new d().parseFromString(M, Sn);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = et.createDocument(on, "template", null);
      try {
        p.documentElement.innerHTML = Hr ? Ae : M;
      } catch {
      }
    }
    const k = p.body || p.documentElement;
    return a && E && k.insertBefore(n.createTextNode(E), k.childNodes[0] || null), on === lt ? Xe.call(p, Q ? "html" : "body")[0] : Q ? p.documentElement : k;
  }, ei = function(a) {
    const p = be ? be(a) : a.ownerDocument;
    return kt.call(
      p || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(a) {
    return a = Cn(a, Lr, " "), a = Cn(a, Ht, " "), a = Cn(a, nn, " "), a;
  }, Wr = function(a) {
    var p;
    a.normalize();
    const E = be ? be(a) : a.ownerDocument, M = kt.call(
      E || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let k = M.nextNode();
    for (; k; )
      k.data = Qn(k.data), k = M.nextNode();
    const K = (p = a.querySelectorAll) === null || p === void 0 ? void 0 : p.call(a, "template");
    K && Gt(K, (ue) => {
      an(ue.content) && Wr(ue.content);
    });
  }, er = function(a) {
    const p = te ? te(a) : null;
    return typeof p != "string" || ye(p) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== Z(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    a.childNodes !== Y(a);
  }, an = function(a) {
    if (!L || typeof a != "object" || a === null)
      return !1;
    try {
      return L(a) === Ge.documentFragment;
    } catch {
      return !1;
    }
  }, vn = function(a) {
    if (!L || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof L(a) == "number";
    } catch {
      return !1;
    }
  };
  function at(v, a, p) {
    v.length !== 0 && Gt(v, (E) => {
      E.call(t, a, p, ln);
    });
  }
  const Rl = function(a, p) {
    return !!(ee && a.hasChildNodes() && !vn(a.firstElementChild) && Re(Ji, a.textContent) && Re(Ji, a.innerHTML) || ee && a.namespaceURI === lt && Nu[p] && (vn(a.firstElementChild) || typeof a.textContent == "string" && Re(Mu[p], a.textContent)) || a.nodeType === Ge.processingInstruction || ee && a.nodeType === Ge.comment && Re(Zi, a.data));
  }, tr = function(a, p) {
    if (a instanceof RegExp)
      return Re(a, p);
    if (a instanceof Function) {
      for (var E = arguments.length, M = new Array(E > 2 ? E - 2 : 0), k = 2; k < E; k++)
        M[k - 2] = arguments[k];
      return !!a(p, ...M);
    }
    return !1;
  }, Il = function(a, p, E) {
    if (!O[p] && ii(p) && tr(C.tagNameCheck, p))
      return !1;
    if (Ur && !sn[p]) {
      const M = $(a), k = Y(a);
      if (k && M) {
        const K = k.length;
        for (let ue = K - 1; ue >= 0; --ue) {
          const he = a === E ? A(k[ue], !0) : k[ue];
          M.insertBefore(he, F(a));
        }
      }
    }
    return Pt(a), !0;
  }, ti = function(a, p, E, M) {
    return a.length === 0 ? p : p === E || p === M ? Ye(p) : p;
  }, ni = function(a, p) {
    return a === p || $(a) !== null ? !1 : (kr && Zn(a), !0);
  }, ri = function(a, p) {
    if (at(ce.beforeSanitizeElements, a, null), ni(a, p))
      return !0;
    if (er(a))
      return Pt(a), !0;
    const E = ye(U(a));
    if (m = ti(ce.uponSanitizeElement, m, S, me), at(ce.uponSanitizeElement, a, {
      tagName: E,
      allowedTags: m
    }), ni(a, p))
      return !0;
    if (Rl(a, E))
      return Pt(a), !0;
    if (O[E] || !(y.tagCheck instanceof Function && y.tagCheck(E)) && !m[E]) {
      const k = Il(a, E, p);
      return k === !1 && at(ce.afterSanitizeElements, a, null), k;
    }
    if (ne(a) === Ge.element && !wl(a) || (E === "noscript" || E === "noembed" || E === "noframes") && Re(Pu, a.innerHTML))
      return Pt(a), !0;
    if (X && a.nodeType === Ge.text) {
      const k = Qn(a.textContent);
      a.textContent !== k && (wn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = k);
    }
    return at(ce.afterSanitizeElements, a, null), !1;
  }, si = function(a, p, E) {
    if (R[p] || Zs(p, a) || Be && (p === "id" || p === "name") && (E in n || E in Sl))
      return !1;
    const M = _[p] || y.attributeCheck instanceof Function && y.attributeCheck(p, a);
    return N && Re(yn, p) || V && Re(Yn, p) ? !0 : M ? Ws[p] || Re(f, Cn(E, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && a !== "script" && zi(E, "data:") === 0 && Vs[a] || j && !Re(jt, Cn(E, Fr, "")) ? !0 : !E : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(a) && tr(C.tagNameCheck, a) && tr(C.attributeNameCheck, p, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && C.allowCustomizedBuiltInElements && tr(C.tagNameCheck, E)
    );
  }, Pl = re({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(a) {
    return !Pl[Pn(a)] && Re(u, a);
  }, Dl = function(a, p, E, M) {
    if (g && typeof b == "object" && typeof b.getAttributeType == "function" && !E)
      switch (b.getAttributeType(a, p)) {
        case "TrustedHTML":
          return _t(M);
        case "TrustedScriptURL":
          return Ce(M);
      }
    return M;
  }, Nl = function(a, p, E, M) {
    try {
      E ? a.setAttributeNS(E, p, M) : a.setAttribute(p, M), er(a) ? Pt(a) : $i(t.removed);
    } catch {
      Vt(p, a);
    }
  }, oi = function(a) {
    at(ce.beforeSanitizeAttributes, a, null);
    const p = a.attributes;
    if (!p || er(a))
      return;
    _ = ti(ce.uponSanitizeAttribute, _, T, De);
    const E = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let M = p.length;
    const k = ye(a.nodeName);
    for (; M--; ) {
      const K = p[M], ue = K.name, he = K.namespaceURI, He = K.value, je = ye(ue), Kr = He;
      let Ne = ue === "value" ? Kr : pu(Kr);
      if (E.attrName = je, E.attrValue = Ne, E.keepAttr = !0, E.forceKeepAttr = void 0, at(ce.uponSanitizeAttribute, a, E), Ne = E.attrValue, Tn && (je === "id" || je === "name") && zi(Ne, En) !== 0 && (Vt(ue, a, K), Ne = En + Ne), ee && Re(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ne)) {
        Vt(ue, a, K);
        continue;
      }
      if (je === "attributename" && Vi(Ne, "href")) {
        Vt(ue, a, K);
        continue;
      }
      if (!E.forceKeepAttr) {
        if (!E.keepAttr) {
          Vt(ue, a, K);
          continue;
        }
        if (!z && Re(Du, Ne)) {
          Vt(ue, a, K);
          continue;
        }
        if (X && (Ne = Qn(Ne)), !si(k, je, Ne)) {
          Vt(ue, a, K);
          continue;
        }
        Ne = Dl(k, je, he, Ne), Ne !== Kr && Nl(a, ue, he, Ne);
      }
    }
    at(ce.afterSanitizeAttributes, a, null);
  }, nr = function(a) {
    let p = null;
    const E = ei(a);
    for (at(ce.beforeSanitizeShadowDOM, a, null); p = E.nextNode(); )
      if (at(ce.uponSanitizeShadowNode, p, null), ri(p, a), oi(p), an(p.content) && nr(p.content), ne(p) === Ge.element) {
        const M = q(p);
        an(M) && (Br(M), nr(M));
      }
    at(ce.afterSanitizeShadowDOM, a, null);
  }, Br = function(a) {
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
      const M = E.node, K = ne(M) === Ge.element, ue = Y(M);
      if (ue)
        for (let he = ue.length - 1; he >= 0; --he)
          p.push({
            node: ue[he],
            shadow: null
          });
      if (K) {
        const he = te ? te(M) : null;
        if (typeof he == "string" && ye(he) === "template") {
          const He = M.content;
          an(He) && p.push({
            node: He,
            shadow: null
          });
        }
      }
      if (K) {
        const he = q(M);
        an(he) && p.push({
          node: null,
          shadow: he
        }, {
          node: he,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(v) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, E = null, M = null, k = null;
    if (Hr = !v, Hr && (v = "<!-->"), typeof v != "string" && !vn(v) && (v = bu(v), typeof v != "string"))
      throw Bt("dirty is not a string, aborting");
    if (!t.isSupported)
      return v;
    pe ? (m = me, _ = De) : zr(a), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (m = Ye(m)), ce.uponSanitizeAttribute.length > 0 && (_ = Ye(_)), t.removed = [];
    const K = kr && typeof v != "string" && vn(v);
    if (K) {
      Ol(v);
      const He = U(v);
      if (typeof He == "string") {
        const je = ye(He);
        if (!m[je] || O[je])
          throw Jn(v), Bt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(v))
        throw Jn(v), Bt("root node is clobbered and cannot be sanitized in-place");
      try {
        Br(v);
      } catch (je) {
        throw Jn(v), je;
      }
    } else if (vn(v))
      p = Qs("<!---->"), E = p.ownerDocument.importNode(v, !0), E.nodeType === Ge.element && E.nodeName === "BODY" || E.nodeName === "HTML" ? p = E : p.appendChild(E), Br(E);
    else {
      if (!Je && !X && !Q && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return g && xe ? _t(v) : v;
      if (p = Qs(v), !p)
        return Je ? null : xe ? Ae : "";
    }
    p && ke && Pt(p.firstChild);
    const ue = K ? v : p;
    try {
      const He = ei(ue);
      for (; M = He.nextNode(); )
        ri(M, ue), oi(M), an(M.content) && nr(M.content);
    } catch (He) {
      throw K && (Jn(v), Gt(t.removed, (je) => {
        je.element && Zn(je.element);
      })), He;
    }
    if (K)
      return Gt(t.removed, (He) => {
        He.element && Zn(He.element);
      }), X && Wr(v), v;
    if (Je) {
      if (X && Wr(p), $t)
        for (k = bt.call(p.ownerDocument); p.firstChild; )
          k.appendChild(p.firstChild);
      else
        k = p;
      return (_.shadowroot || _.shadowrootmode) && (k = Gn.call(r, k, !0)), k;
    }
    let he = Q ? p.outerHTML : p.innerHTML;
    return Q && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && Re(Ru, p.ownerDocument.doctype.name) && (he = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + he), X && (he = Qn(he)), g && xe ? _t(he) : he;
  }, t.setConfig = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(v), pe = !0, me = m, De = _;
  }, t.clearConfig = function() {
    ln = null, pe = !1, me = null, De = null, g = gt, Ae = "";
  }, t.isValidAttribute = function(v, a, p) {
    ln || zr({});
    const E = ye(v), M = ye(a);
    return si(E, M, p);
  }, t.addHook = function(v, a) {
    typeof a == "function" && We(ce, v) && wn(ce[v], a);
  }, t.removeHook = function(v, a) {
    if (We(ce, v)) {
      if (a !== void 0) {
        const p = fu(ce[v], a);
        return p === -1 ? void 0 : du(ce[v], p, 1)[0];
      }
      return $i(ce[v]);
    }
  }, t.removeHooks = function(v) {
    We(ce, v) && (ce[v] = []);
  }, t.removeAllHooks = function() {
    ce = Qi();
  }, t;
}
var Uu = gl();
function ku(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, eo;
function Hu() {
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
function I(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (F) => F, h = (l.sanitize ? Uu.sanitize : c) || c, d = l.escape ? to : c, b = (F) => typeof F == "string" || typeof F == "number", x = (F, Y, $) => F.replace(/%n/g, "" + $).replace(/{([^{}]*)}/g, (q, Z) => {
    if (Y === void 0 || !(Z in Y))
      return d(q);
    const L = Y[Z];
    return b(L) ? d(`${L}`) : typeof L == "object" && b(L.value) ? (L.escape !== !1 ? to : c)(`${L.value}`) : d(q);
  });
  let D = (s?.bundle ?? $u(e)).translations[t] || t;
  return D = Array.isArray(D) ? D[0] : D, h(typeof i == "object" || o !== void 0 ? x(
    D,
    i,
    o
  ) : D);
}
const Vu = { class: "library-vue-catalogue" }, zu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Wu = { id: "library-catalogue-heading" }, Bu = { class: "library-muted" }, Ku = ["aria-label"], Gu = { value: "" }, Yu = ["value"], qu = { value: "" }, Xu = ["value"], Ju = { value: "" }, Zu = ["value"], Qu = { value: "" }, ef = ["value"], tf = { value: "" }, nf = ["value"], rf = { value: "" }, sf = ["value"], of = { value: "" }, lf = ["value"], af = { value: "" }, cf = ["value"], uf = { value: "" }, ff = { value: "1" }, df = { value: "title" }, pf = { value: "recent" }, hf = { value: "publicationDate" }, mf = { value: "publication" }, gf = { value: "lastOpened" }, _f = { value: "format" }, bf = ["value"], yf = ["value"], Tf = ["aria-label"], Ef = ["aria-label"], Sf = ["aria-label"], vf = ["href", "aria-label"], Af = ["aria-label"], xf = ["href"], wf = {
  key: 1,
  class: "library-muted"
}, Cf = ["href"], Of = {
  key: 3,
  class: "library-muted"
}, Rf = {
  key: 1,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, If = { id: "library-periodical-groups-heading" }, Pf = { class: "library-muted" }, Df = ["href"], Nf = { class: "library-muted" }, Mf = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Lf = { id: "library-periodical-groups-empty-heading" }, Ff = { class: "library-muted" }, Uf = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, kf = { class: "library-muted" }, Hf = {
  key: 4,
  class: "library-cover-gallery"
}, jf = ["href", "aria-label"], $f = ["src", "alt"], Vf = { class: "library-cover-summary" }, zf = { class: "library-cover-primary" }, Wf = ["aria-label"], Bf = ["href"], Kf = { class: "library-cover-details" }, Gf = ["aria-label"], Yf = { class: "library-cover-meta" }, qf = {
  key: 0,
  class: "library-creator"
}, Xf = { class: "library-muted" }, Jf = { key: 0 }, Zf = { key: 1 }, Qf = { key: 2 }, ed = { key: 3 }, td = { key: 4 }, nd = { key: 5 }, rd = {
  key: 1,
  class: "library-muted library-cover-description"
}, sd = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, id = { key: 0 }, od = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, ld = {
  key: 0,
  class: "library-muted"
}, ad = { class: "library-cover-actions" }, cd = ["href"], ud = ["href"], fd = ["href"], dd = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, pd = { class: "library-hero-actions" }, hd = ["href"], md = ["href"], gd = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Ve(() => t.state.items || []), i = Ve(() => t.state.shelves || []), o = Ve(() => t.state.formats || []), l = Ve(() => t.state.publications || []), c = Ve(() => t.state.publicationSummaries || []), h = Ve(() => t.state.publicationYears || []), d = Ve(() => t.state.creators || []), b = Ve(() => t.state.scanStatuses || []), x = Ve(() => t.state.workflowStatuses || []), A = Ve(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ Or({
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
      starred: t.state.activeFilters?.starred || "",
      sort: t.state.activeFilters?.sort || "title"
    }), F = Ve(() => t.state.settingsUrl || ""), Y = Ve(() => t.state.metadataExportUrl || ""), $ = {
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
      starred: "Starred"
    }, q = Ve(() => Object.entries($).map(([ne, U]) => ({ key: ne, label: U, value: D[ne] || "" })).filter((ne) => String(ne.value).trim() !== ""));
    function Z(ne) {
      const U = new URLSearchParams(window.location.search);
      U.delete(ne), U.delete("page");
      const g = U.toString();
      return g ? `?${g}` : "?";
    }
    function L(ne) {
      return String(ne || "").toUpperCase();
    }
    function te(ne) {
      return ne.nextcloudTags || [];
    }
    function be(ne) {
      const U = new URLSearchParams(window.location.search);
      return U.set("publication", ne), U.set("sort", "publication"), U.delete("page"), `?${U.toString()}`;
    }
    return (ne, U) => (W(), G("div", Vu, [
      w("section", zu, [
        w("h2", Wu, P(H(I)("library", "Publication catalogue")), 1),
        w("p", Bu, P(H(I)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        w("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": H(I)("library", "Catalogue search and filters")
        }, [
          w("label", null, [
            Se(P(H(I)("library", "Search title / author")) + " ", 1),
            Ze(w("input", {
              "onUpdate:modelValue": U[0] || (U[0] = (g) => D.q = g),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, D.q]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Type")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (g) => D.type = g),
              name: "type"
            }, [
              w("option", Gu, P(H(I)("library", "All types")), 1),
              (W(), G(ge, null, Ke(n, (g) => w("option", {
                key: g,
                value: g
              }, P(g), 9, Yu)), 64))
            ], 512), [
              [ut, D.type]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Series / periodical")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (g) => D.publication = g),
              name: "publication"
            }, [
              w("option", qu, P(H(I)("library", "All series and periodicals")), 1),
              (W(!0), G(ge, null, Ke(l.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, Xu))), 128))
            ], 512), [
              [ut, D.publication]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Publication year")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[3] || (U[3] = (g) => D.year = g),
              name: "year"
            }, [
              w("option", Ju, P(H(I)("library", "All years")), 1),
              (W(!0), G(ge, null, Ke(h.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, Zu))), 128))
            ], 512), [
              [ut, D.year]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Creator")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[4] || (U[4] = (g) => D.creator = g),
              name: "creator",
              title: "Exact full-field creator matches only"
            }, [
              w("option", Qu, P(H(I)("library", "All creators")), 1),
              (W(!0), G(ge, null, Ke(d.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, ef))), 128))
            ], 512), [
              [ut, D.creator]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Nextcloud tag")) + " ", 1),
            Ze(w("input", {
              "onUpdate:modelValue": U[5] || (U[5] = (g) => D.tag = g),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, D.tag]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Format")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[6] || (U[6] = (g) => D.format = g),
              name: "format"
            }, [
              w("option", tf, P(H(I)("library", "All formats")), 1),
              (W(!0), G(ge, null, Ke(o.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(L(g)), 9, nf))), 128))
            ], 512), [
              [ut, D.format]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Shelf")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[7] || (U[7] = (g) => D.shelf = g),
              name: "shelf"
            }, [
              w("option", rf, P(H(I)("library", "All shelves")), 1),
              (W(!0), G(ge, null, Ke(i.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, sf))), 128))
            ], 512), [
              [ut, D.shelf]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Scan status")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[8] || (U[8] = (g) => D.status = g),
              name: "status"
            }, [
              w("option", of, P(H(I)("library", "All scan statuses")), 1),
              (W(!0), G(ge, null, Ke(b.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, lf))), 128))
            ], 512), [
              [ut, D.status]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Workflow status")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[9] || (U[9] = (g) => D.workflowStatus = g),
              name: "workflowStatus"
            }, [
              w("option", af, P(H(I)("library", "All workflow statuses")), 1),
              (W(!0), G(ge, null, Ke(x.value, (g) => (W(), G("option", {
                key: g,
                value: g
              }, P(g), 9, cf))), 128))
            ], 512), [
              [ut, D.workflowStatus]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Starred")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[10] || (U[10] = (g) => D.starred = g),
              name: "starred"
            }, [
              w("option", uf, P(H(I)("library", "All publications")), 1),
              w("option", ff, P(H(I)("library", "Starred only")), 1)
            ], 512), [
              [ut, D.starred]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Sort")) + " ", 1),
            Ze(w("select", {
              "onUpdate:modelValue": U[11] || (U[11] = (g) => D.sort = g),
              name: "sort"
            }, [
              w("option", df, P(H(I)("library", "Title")), 1),
              w("option", pf, P(H(I)("library", "Recently added")), 1),
              w("option", hf, P(H(I)("library", "Publication date")), 1),
              w("option", mf, P(H(I)("library", "Series / periodical")), 1),
              w("option", gf, P(H(I)("library", "Recently opened")), 1),
              w("option", _f, P(H(I)("library", "Format")), 1)
            ], 512), [
              [ut, D.sort]
            ])
          ]),
          w("label", null, [
            Se(P(H(I)("library", "Page size")) + " ", 1),
            w("select", {
              value: A.value.limit,
              name: "limit"
            }, [
              (W(), G(ge, null, Ke(r, (g) => w("option", {
                key: g,
                value: g
              }, P(g), 9, yf)), 64))
            ], 8, bf)
          ]),
          w("button", {
            type: "submit",
            class: "button primary",
            "aria-label": H(I)("library", "Apply catalogue filters")
          }, P(H(I)("library", "Apply filters")), 9, Tf),
          w("a", {
            href: "?",
            class: "button secondary",
            "aria-label": H(I)("library", "Clear catalogue filters")
          }, P(H(I)("library", "Clear")), 9, Ef)
        ], 8, Ku),
        q.value.length > 0 ? (W(), G("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": H(I)("library", "Active filters")
        }, [
          w("span", null, P(H(I)("library", "Active filters")), 1),
          (W(!0), G(ge, null, Ke(q.value, (g) => (W(), G("a", {
            key: g.key,
            href: Z(g.key),
            class: "library-filter-chip",
            "aria-label": `${H(I)("library", "Remove filter")}: ${g.label}`
          }, [
            w("strong", null, P(g.label) + ":", 1),
            Se(" " + P(g.value) + " ", 1),
            U[12] || (U[12] = w("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, vf))), 128))
        ], 8, Sf)) : $e("", !0),
        w("nav", {
          class: "library-pagination",
          "aria-label": H(I)("library", "Catalogue pagination")
        }, [
          w("span", null, "Showing " + P(A.value.from) + "–" + P(A.value.to) + " of " + P(A.value.total) + " catalogue items", 1),
          A.value.previousUrl ? (W(), G("a", {
            key: 0,
            href: A.value.previousUrl
          }, P(H(I)("library", "Previous")), 9, xf)) : (W(), G("span", wf, P(H(I)("library", "Previous")), 1)),
          A.value.nextUrl ? (W(), G("a", {
            key: 2,
            href: A.value.nextUrl
          }, P(H(I)("library", "Next")), 9, Cf)) : (W(), G("span", Of, P(H(I)("library", "Next")), 1))
        ], 8, Af),
        c.value.length > 0 ? (W(), G("section", Rf, [
          w("h3", If, P(H(I)("library", "Top series and periodicals")), 1),
          w("p", Pf, P(H(I)("library", "Jump into recurring publications with one click.")), 1),
          w("ul", null, [
            (W(!0), G(ge, null, Ke(c.value, (g) => (W(), G("li", {
              key: g.publication
            }, [
              w("a", {
                href: be(g.publication)
              }, P(g.publication), 9, Df),
              w("span", Nf, P(g.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : c.value.length === 0 ? (W(), G("section", Mf, [
          w("h3", Lf, P(H(I)("library", "No series or periodicals found yet")), 1),
          w("p", Ff, P(H(I)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : $e("", !0),
        s.value.length === 0 ? (W(), G("div", Uf, [
          w("h3", null, P(H(I)("library", "No catalogue items match")), 1),
          w("p", kf, P(H(I)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (W(), G("div", Hf, [
          (W(!0), G(ge, null, Ke(s.value, (g) => (W(), G("article", {
            key: g.id,
            class: "library-cover-card"
          }, [
            w("a", {
              class: "library-cover-link",
              href: g.openUrl,
              "aria-label": `Read ${g.title}`
            }, [
              w("img", {
                class: "library-cover-image",
                src: g.coverUrl,
                alt: `Cover for ${g.title}`,
                loading: "lazy"
              }, null, 8, $f)
            ], 8, jf),
            w("div", Vf, [
              w("div", zf, [
                w("h3", null, [
                  g.starred ? (W(), G("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": H(I)("library", "Starred")
                  }, "★", 8, Wf)) : $e("", !0),
                  Se(P(g.title), 1)
                ]),
                w("a", {
                  class: "library-cover-read",
                  href: g.openUrl
                }, P(H(I)("library", "Read")), 9, Bf)
              ]),
              w("details", Kf, [
                w("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${H(I)("library", "Show details and actions")}: ${g.title}`
                }, P(H(I)("library", "Details")), 9, Gf),
                w("div", Yf, [
                  g.creators ? (W(), G("p", qf, P(g.creators), 1)) : $e("", !0),
                  w("p", Xf, [
                    w("span", null, P(g.publicationType), 1),
                    g.publication ? (W(), G("span", Jf, " · " + P(g.publication), 1)) : $e("", !0),
                    g.publicationDate ? (W(), G("span", Zf, " · " + P(g.publicationDate), 1)) : $e("", !0),
                    g.workflowStatus ? (W(), G("span", Qf, " · Workflow status: " + P(g.workflowStatus), 1)) : $e("", !0),
                    g.lastOpenedAt ? (W(), G("span", ed, " · Last opened: " + P(g.lastOpenedAt), 1)) : $e("", !0),
                    g.extension ? (W(), G("span", td, " · Format: " + P(L(g.extension)), 1)) : $e("", !0),
                    g.shelf ? (W(), G("span", nd, " · Shelf: " + P(g.shelf), 1)) : $e("", !0)
                  ]),
                  g.description ? (W(), G("p", rd, P(g.description), 1)) : $e("", !0),
                  g.scanStatus !== "indexed" || g.scanError ? (W(), G("p", sd, [
                    Se(" scanStatus: " + P(g.scanStatus || "unknown"), 1),
                    g.scanError ? (W(), G("span", id, " · scanError: " + P(g.scanError), 1)) : $e("", !0)
                  ])) : $e("", !0),
                  w("div", od, [
                    te(g).length === 0 ? (W(), G("span", ld, "No Nextcloud tags")) : (W(!0), G(ge, { key: 1 }, Ke(te(g), (Ae) => (W(), G("span", {
                      key: Ae.id,
                      class: "library-tag"
                    }, P(Ae.name), 1))), 128))
                  ]),
                  w("p", ad, [
                    w("a", {
                      href: g.filesUrl
                    }, P(H(I)("library", "Show in Files")), 9, cd),
                    U[13] || (U[13] = Se(" · ", -1)),
                    w("a", {
                      href: g.downloadUrl
                    }, P(H(I)("library", "Download source")), 9, ud),
                    U[14] || (U[14] = Se(" · ", -1)),
                    w("a", {
                      href: g.detailsUrl
                    }, P(H(I)("library", "Details")), 9, fd)
                  ])
                ])
              ])
            ])
          ]))), 128))
        ]))
      ]),
      w("section", dd, [
        U[15] || (U[15] = w("div", null, [
          w("h2", null, "Library"),
          w("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        w("div", pd, [
          w("a", {
            href: F.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, hd),
          Y.value ? (W(), G("a", {
            key: 0,
            href: Y.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, md)) : $e("", !0)
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
function _d(e, t, n, r = Te) {
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
function un(e, t, n, r, s, i, o = Te) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), _d(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function bd(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", I("library", "Catalogue search and filters")), so(r, I("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), un(r, I("library", "Type"), "type", n.type, I("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, I("library", "Nextcloud tag"), "tag", n.tag, "photography"), un(r, I("library", "Format"), "format", n.format, I("library", "All formats"), e.formats || [], _l), un(r, I("library", "Shelf"), "shelf", n.shelf, I("library", "All shelves"), e.shelves || []), un(r, I("library", "Scan status"), "status", n.status, I("library", "All scan statuses"), e.scanStatuses || []), un(r, I("library", "Sort"), "sort", n.sort || "title", I("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), un(r, I("library", "Page size"), "limit", t.limit || 100, I("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", I("library", "Apply catalogue filters")), s.textContent = I("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", I("library", "Clear catalogue filters")), i.textContent = I("library", "Clear"), r.append(s, i), r;
}
function yd(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Te(e.settingsUrl || ""), i = Te(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("h2");
  c.id = "library-catalogue-heading", c.textContent = I("library", "Publication catalogue"), l.appendChild(c);
  const h = document.createElement("p");
  h.className = "library-muted", h.textContent = I("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), l.appendChild(h), l.appendChild(bd(e, r));
  const d = document.createElement("nav");
  d.className = "library-pagination", d.setAttribute("aria-label", I("library", "Catalogue pagination"));
  const b = document.createElement("span");
  if (b.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, d.appendChild(b), l.appendChild(d), n.length === 0) {
    const x = document.createElement("div");
    x.className = "library-empty-content", x.setAttribute("role", "status");
    const A = document.createElement("h3");
    A.textContent = I("library", "No catalogue items match");
    const D = document.createElement("p");
    D.className = "library-muted", D.textContent = I("library", "Scan enabled roots or clear the active filters."), x.append(A, D), l.appendChild(x);
  } else {
    const x = document.createElement("div");
    x.className = "library-cover-gallery";
    for (const A of n) {
      const D = document.createElement("article");
      D.className = "library-cover-card";
      const F = document.createElement("a");
      F.className = "library-cover-link", F.href = Te(A.openUrl || "#"), F.setAttribute("aria-label", `Read ${Te(A.title || "publication")}`);
      const Y = document.createElement("img");
      Y.className = "library-cover-image", Y.src = Te(A.coverUrl || ""), Y.alt = `Cover for ${Te(A.title || "publication")}`, Y.loading = "lazy", F.appendChild(Y);
      const $ = document.createElement("div");
      $.className = "library-cover-summary";
      const q = document.createElement("h3");
      if (q.textContent = Te(A.title || "Untitled publication"), $.appendChild(q), A.creators) {
        const g = document.createElement("p");
        g.className = "library-creator", g.textContent = Te(A.creators), $.appendChild(g);
      }
      const Z = document.createElement("p");
      Z.className = "library-muted", Z.textContent = [
        Te(A.publicationType || "other"),
        A.extension ? `Format: ${_l(A.extension)}` : "",
        A.shelf ? `Shelf: ${Te(A.shelf)}` : ""
      ].filter(Boolean).join(" · "), $.appendChild(Z);
      const L = document.createElement("p"), te = document.createElement("a");
      te.href = Te(A.openUrl || "#"), te.textContent = I("library", "Read");
      const be = document.createElement("a");
      be.href = Te(A.filesUrl || "#"), be.textContent = I("library", "Show in Files");
      const ne = document.createElement("a");
      ne.href = Te(A.downloadUrl || "#"), ne.textContent = I("library", "Download source");
      const U = document.createElement("a");
      U.href = Te(A.detailsUrl || "#"), U.textContent = I("library", "Details"), L.append(te, document.createTextNode(" · "), be, document.createTextNode(" · "), ne, document.createTextNode(" · "), U), $.appendChild(L), D.append(F, $), x.appendChild(D);
    }
    l.appendChild(x);
  }
  if (o.appendChild(l), s || i) {
    const x = document.createElement("section");
    x.className = "library-hero library-secondary-panel", x.setAttribute("aria-label", "Library settings");
    const A = document.createElement("div"), D = document.createElement("h2");
    D.textContent = "Library";
    const F = document.createElement("p");
    F.className = "library-lede", F.textContent = "Browse publications already stored in Nextcloud.", A.append(D, F);
    const Y = document.createElement("div");
    if (Y.className = "library-hero-actions", s) {
      const $ = document.createElement("a");
      $.href = s, $.className = "button secondary", $.setAttribute("aria-label", "Open Library settings"), $.textContent = "Library settings", Y.appendChild($);
    }
    if (i) {
      const $ = document.createElement("a");
      $.href = i, $.className = "button secondary", $.setAttribute("aria-label", "Export corrected metadata"), $.textContent = "Export corrected metadata", Y.appendChild($);
    }
    x.append(A, Y), o.appendChild(x);
  }
  return o;
}
if (dr)
  try {
    Qc(gd, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(yd(ro));
  }
//# sourceMappingURL=library-main.mjs.map
