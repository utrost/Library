// @__NO_SIDE_EFFECTS__
function Oi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ge = {}, _n = [], Ct = () => {
}, oo = () => !1, Cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), qe = Object.assign, Ri = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ll = Object.prototype.hasOwnProperty, ue = (e, t) => Ll.call(e, t), X = Array.isArray, Wt = (e) => Xn(e) === "[object Map]", an = (e) => Xn(e) === "[object Set]", cs = (e) => Xn(e) === "[object Date]", te = (e) => typeof e == "function", Oe = (e) => typeof e == "string", Ot = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", lo = (e) => (he(e) || te(e)) && te(e.then) && te(e.catch), ao = Object.prototype.toString, Xn = (e) => ao.call(e), Fl = (e) => Xn(e).slice(8, -1), co = (e) => Xn(e) === "[object Object]", Pi = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ Oi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ul = /-\w/g, mt = Rr(
  (e) => e.replace(Ul, (t) => t.slice(1).toUpperCase())
), kl = /\B([A-Z])/g, cn = Rr(
  (e) => e.replace(kl, "-$1").toLowerCase()
), uo = Rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = Rr(
  (e) => e ? `on${uo(e)}` : ""
), Dt = (e, t) => !Object.is(e, t), hr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let us;
const Nr = () => us || (us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ni(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Oe(r) ? Vl(r) : Ni(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Oe(e) || he(e))
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
  if (Oe(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bl = /* @__PURE__ */ Oi(zl);
function po(e) {
  return !!e || e === "";
}
function Wl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = qt(e[r], t[r]);
  return n;
}
function fs(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && qt(i, n[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function qt(e, t) {
  if (e === t) return !0;
  let n = cs(e), r = cs(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ot(e), r = Ot(t), n || r)
    return e === t;
  if (n = X(e), r = X(t), n || r)
    return n && r ? Wl(e, t) : !1;
  if (n = he(e), r = he(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Wt(e), r = Wt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? fs(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !qt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ql(e, t) {
  return e.findIndex((n) => qt(n, t));
}
const ho = (e) => !!(e && e.__v_isRef === !0), _ = (e) => Oe(e) ? e : e == null ? "" : X(e) || he(e) && (e.toString === ao || !te(e.toString)) ? ho(e) ? _(e.value) : JSON.stringify(e, mo, 2) : String(e), mo = (e, t) => ho(t) ? mo(e, t.value) : Wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[Xr(r, s) + " =>"] = i, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xr(n))
} : Ot(t) ? Xr(t) : he(t) && !X(t) && !co(t) ? String(t) : t, Xr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let je;
class Kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && je && (je.active ? (this.parent = je, this.index = (je.scopes || (je.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = je;
      try {
        return je = this, t();
      } finally {
        je = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = je, je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (je === this)
        je = this.prevScope;
      else {
        let t = je;
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
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Gl() {
  return je;
}
let ve;
const Jr = /* @__PURE__ */ new WeakSet();
class go {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && (je.active ? je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jr.has(this) && (Jr.delete(this), this.trigger()));
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
    this.flags |= 2, ds(this), _o(this);
    const t = ve, n = gt;
    ve = this, gt = !0;
    try {
      return this.fn();
    } finally {
      vo(this), ve = t, gt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mi(t);
      this.deps = this.depsTail = void 0, ds(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gi(this) && this.run();
  }
  get dirty() {
    return gi(this);
  }
}
let bo = 0, kn, Hn;
function yo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hn, Hn = e;
    return;
  }
  e.next = kn, kn = e;
}
function Ii() {
  bo++;
}
function Di() {
  if (--bo > 0)
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
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Mi(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (To(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function To(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bn) || (e.globalVersion = Bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ve, r = gt;
  ve = e, gt = !0;
  try {
    _o(e);
    const i = e.fn(e._value);
    (t.version === 0 || Dt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ve = n, gt = r, vo(e), e.flags &= -3;
  }
}
function Mi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Mi(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let gt = !0;
const So = [];
function Ut() {
  So.push(gt), gt = !1;
}
function kt() {
  const e = So.pop();
  gt = e === void 0 ? !0 : e;
}
function ds(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ve;
    ve = void 0;
    try {
      t();
    } finally {
      ve = n;
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
    if (!ve || !gt || ve === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ve)
      n = this.activeLink = new Xl(ve, this), ve.deps ? (n.prevDep = ve.depsTail, ve.depsTail.nextDep = n, ve.depsTail = n) : ve.deps = ve.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ve.depsTail, n.nextDep = void 0, ve.depsTail.nextDep = n, ve.depsTail = n, ve.deps === n && (ve.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bn++, this.notify(t);
  }
  notify(t) {
    Ii();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Di();
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
const bi = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), yi = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function We(e, t, n) {
  if (gt && ve) {
    let r = bi.get(e);
    r || bi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Eo()), i.map = r, i.key = n), i.track();
  }
}
function Mt(e, t, n, r, i, s) {
  const o = bi.get(e);
  if (!o) {
    Bn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ii(), t === "clear")
    o.forEach(l);
  else {
    const c = X(e), g = c && Pi(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((T, R) => {
        (R === "length" || R === Wn || !Ot(R) && R >= d) && l(T);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), g && l(o.get(Wn)), t) {
        case "add":
          c ? g && l(o.get("length")) : (l(o.get(sn)), Wt(e) && l(o.get(yi)));
          break;
        case "delete":
          c || (l(o.get(sn)), Wt(e) && l(o.get(yi)));
          break;
        case "set":
          Wt(e) && l(o.get(sn));
          break;
      }
  }
  Di();
}
function mn(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (We(t, "iterate", Wn), /* @__PURE__ */ bt(e) ? t : t.map(Ht));
}
function Ir(e) {
  return We(e = /* @__PURE__ */ pe(e), "iterate", Wn), e;
}
function xt(e, t) {
  return /* @__PURE__ */ Kt(e) ? En(/* @__PURE__ */ on(e) ? Ht(t) : t) : Ht(t);
}
const Jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zr(this, Symbol.iterator, (e) => xt(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => X(t) ? mn(t) : t)
    );
  },
  entries() {
    return Zr(this, "entries", (e) => (e[1] = xt(this, e[1]), e));
  },
  every(e, t) {
    return Pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => xt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Pt(
      this,
      "find",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pt(
      this,
      "findLast",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qr(this, "includes", e);
  },
  indexOf(...e) {
    return Qr(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return ps(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ps(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rn(this, "unshift", e);
  },
  values() {
    return Zr(this, "values", (e) => xt(this, e));
  }
};
function Zr(e, t, n) {
  const r = Ir(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ bt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const Zl = Array.prototype;
function Pt(e, t, n, r, i, s) {
  const o = Ir(e), l = o !== e && !/* @__PURE__ */ bt(e), c = o[t];
  if (c !== Zl[t]) {
    const T = c.apply(e, s);
    return l ? Ht(T) : T;
  }
  let g = n;
  o !== e && (l ? g = function(T, R) {
    return n.call(this, xt(e, T), R, e);
  } : n.length > 2 && (g = function(T, R) {
    return n.call(this, T, R, e);
  }));
  const d = c.call(o, g, r);
  return l && i ? i(d) : d;
}
function ps(e, t, n, r) {
  const i = Ir(e), s = i !== e && !/* @__PURE__ */ bt(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(g, d, T) {
    return l && (l = !1, g = xt(e, g)), n.call(this, g, xt(e, d), T, e);
  }) : n.length > 3 && (o = function(g, d, T) {
    return n.call(this, g, d, T, e);
  }));
  const c = i[t](o, ...r);
  return l ? xt(e, c) : c;
}
function Qr(e, t, n) {
  const r = /* @__PURE__ */ pe(e);
  We(r, "iterate", Wn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ui(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), r[t](...n)) : i;
}
function Rn(e, t, n = []) {
  Ut(), Ii();
  const r = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return Di(), kt(), r;
}
const Ql = /* @__PURE__ */ Oi("__proto__,__v_isRef,__isVue"), xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ot)
);
function ea(e) {
  Ot(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
class wo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? ua : Po : s ? Ro : Oo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = X(t);
    if (!i) {
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
      /* @__PURE__ */ Qe(t) ? t : r
    );
    if ((Ot(n) ? xo.has(n) : Ql(n)) || (i || We(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ Qe(l)) {
      const c = o && Pi(n) ? l : l.value;
      return i && he(c) ? /* @__PURE__ */ vi(c) : c;
    }
    return he(l) ? i ? /* @__PURE__ */ vi(l) : /* @__PURE__ */ nn(l) : l;
  }
}
class Co extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = X(t) && Pi(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ Kt(s);
      if (!/* @__PURE__ */ bt(r) && !/* @__PURE__ */ Kt(r) && (s = /* @__PURE__ */ pe(s), r = /* @__PURE__ */ pe(r)), !o && /* @__PURE__ */ Qe(s) && !/* @__PURE__ */ Qe(r))
        return g || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ue(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Qe(t) ? t : i
    );
    return t === /* @__PURE__ */ pe(i) && c && (l ? Dt(r, s) && Mt(t, "set", n, r) : Mt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ue(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Mt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ot(n) || !xo.has(n)) && We(t, "has", n), r;
  }
  ownKeys(t) {
    return We(
      t,
      "iterate",
      X(t) ? "length" : sn
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
const na = /* @__PURE__ */ new Co(), ra = /* @__PURE__ */ new ta(), ia = /* @__PURE__ */ new Co(!0);
const _i = (e) => e, lr = (e) => Reflect.getPrototypeOf(e);
function sa(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ pe(i), o = Wt(s), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, g = i[e](...r), d = n ? _i : t ? En : Ht;
    return !t && We(
      s,
      "iterate",
      c ? yi : sn
    ), qe(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: T, done: R } = g.next();
          return R ? { value: T, done: R } : {
            value: l ? [d(T[0]), d(T[1])] : d(T),
            done: R
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
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ pe(s), l = /* @__PURE__ */ pe(i);
      e || (Dt(i, l) && We(o, "get", i), We(o, "get", l));
      const { has: c } = lr(o), g = t ? _i : e ? En : Ht;
      if (c.call(o, i))
        return g(s.get(i));
      if (c.call(o, l))
        return g(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && We(/* @__PURE__ */ pe(i), "iterate", sn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ pe(s), l = /* @__PURE__ */ pe(i);
      return e || (Dt(i, l) && We(o, "has", i), We(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ pe(l), g = t ? _i : e ? En : Ht;
      return !e && We(c, "iterate", sn), l.forEach((d, T) => i.call(s, g(d), g(T), o));
    }
  };
  return qe(
    n,
    e ? {
      add: ar("add"),
      set: ar("set"),
      delete: ar("delete"),
      clear: ar("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ pe(this), o = lr(s), l = /* @__PURE__ */ pe(i), c = !t && !/* @__PURE__ */ bt(i) && !/* @__PURE__ */ Kt(i) ? l : i;
        return o.has.call(s, c) || Dt(i, c) && o.has.call(s, i) || Dt(l, c) && o.has.call(s, l) || (s.add(c), Mt(s, "add", c, c)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ bt(s) && !/* @__PURE__ */ Kt(s) && (s = /* @__PURE__ */ pe(s));
        const o = /* @__PURE__ */ pe(this), { has: l, get: c } = lr(o);
        let g = l.call(o, i);
        g || (i = /* @__PURE__ */ pe(i), g = l.call(o, i));
        const d = c.call(o, i);
        return o.set(i, s), g ? Dt(s, d) && Mt(o, "set", i, s) : Mt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ pe(this), { has: o, get: l } = lr(s);
        let c = o.call(s, i);
        c || (i = /* @__PURE__ */ pe(i), c = o.call(s, i)), l && l.call(s, i);
        const g = s.delete(i);
        return c && Mt(s, "delete", i, void 0), g;
      },
      clear() {
        const i = /* @__PURE__ */ pe(this), s = i.size !== 0, o = i.clear();
        return s && Mt(
          i,
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
  ].forEach((i) => {
    n[i] = sa(i, e, t);
  }), n;
}
function Li(e, t) {
  const n = oa(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ue(n, i) && i in r ? n : r,
    i,
    s
  );
}
const la = {
  get: /* @__PURE__ */ Li(!1, !1)
}, aa = {
  get: /* @__PURE__ */ Li(!1, !0)
}, ca = {
  get: /* @__PURE__ */ Li(!0, !1)
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
function nn(e) {
  return /* @__PURE__ */ Kt(e) ? e : Fi(
    e,
    !1,
    na,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return Fi(
    e,
    !1,
    ia,
    aa,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return Fi(
    e,
    !0,
    ra,
    ca,
    Po
  );
}
function Fi(e, t, n, r, i) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = fa(Fl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
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
const Ht = (e) => he(e) ? /* @__PURE__ */ nn(e) : e, En = (e) => he(e) ? /* @__PURE__ */ vi(e) : e;
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function E(e) {
  return /* @__PURE__ */ Qe(e) ? e.value : e;
}
const ha = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Qe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function No(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, ha);
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
    ve !== this)
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
function ga(e, t, n = !1) {
  let r, i;
  return te(e) ? r = e : (r = e.get, i = e.set), new ma(r, i, n);
}
const cr = {}, yr = /* @__PURE__ */ new WeakMap();
let Qt;
function ba(e, t = !1, n = Qt) {
  if (n) {
    let r = yr.get(n);
    r || yr.set(n, r = []), r.push(e);
  }
}
function ya(e, t, n = ge) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: c } = n, g = (L) => i ? L : /* @__PURE__ */ bt(L) || i === !1 || i === 0 ? Lt(L, 1) : Lt(L);
  let d, T, R, U, J = !1, k = !1;
  if (/* @__PURE__ */ Qe(e) ? (T = () => e.value, J = /* @__PURE__ */ bt(e)) : /* @__PURE__ */ on(e) ? (T = () => g(e), J = !0) : X(e) ? (k = !0, J = e.some((L) => /* @__PURE__ */ on(L) || /* @__PURE__ */ bt(L)), T = () => e.map((L) => {
    if (/* @__PURE__ */ Qe(L))
      return L.value;
    if (/* @__PURE__ */ on(L))
      return g(L);
    if (te(L))
      return c ? c(L, 2) : L();
  })) : te(e) ? t ? T = c ? () => c(e, 2) : e : T = () => {
    if (R) {
      Ut();
      try {
        R();
      } finally {
        kt();
      }
    }
    const L = Qt;
    Qt = d;
    try {
      return c ? c(e, 3, [U]) : e(U);
    } finally {
      Qt = L;
    }
  } : T = Ct, t && i) {
    const L = T, oe = i === !0 ? 1 / 0 : i;
    T = () => Lt(L(), oe);
  }
  const Q = Gl(), z = () => {
    d.stop(), Q && Q.active && Ri(Q.effects, d);
  };
  if (s && t) {
    const L = t;
    t = (...oe) => {
      const Re = L(...oe);
      return z(), Re;
    };
  }
  let D = k ? new Array(e.length).fill(cr) : cr;
  const G = (L) => {
    if (!(!(d.flags & 1) || !d.dirty && !L))
      if (t) {
        const oe = d.run();
        if (L || i || J || (k ? oe.some((Re, Ae) => Dt(Re, D[Ae])) : Dt(oe, D))) {
          R && R();
          const Re = Qt;
          Qt = d;
          try {
            const Ae = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              D === cr ? void 0 : k && D[0] === cr ? [] : D,
              U
            ];
            D = oe, c ? c(t, 3, Ae) : (
              // @ts-expect-error
              t(...Ae)
            );
          } finally {
            Qt = Re;
          }
        }
      } else
        d.run();
  };
  return l && l(G), d = new go(T), d.scheduler = o ? () => o(G, !1) : G, U = (L) => ba(L, !1, d), R = d.onStop = () => {
    const L = yr.get(d);
    if (L) {
      if (c)
        c(L, 4);
      else
        for (const oe of L) oe();
      yr.delete(d);
    }
  }, t ? r ? G(!0) : D = d.run() : o ? o(G.bind(null, !0), !0) : d.run(), z.pause = d.pause.bind(d), z.resume = d.resume.bind(d), z.stop = z, z;
}
function Lt(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Qe(e))
    Lt(e.value, t, n);
  else if (X(e))
    for (let r = 0; r < e.length; r++)
      Lt(e[r], t, n);
  else if (an(e) || Wt(e))
    e.forEach((r) => {
      Lt(r, t, n);
    });
  else if (co(e)) {
    for (const r in e)
      Lt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Lt(e[r], t, n);
  }
  return e;
}
function Jn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Dr(i, t, n);
  }
}
function yt(e, t, n, r) {
  if (te(e)) {
    const i = Jn(e, t, n, r);
    return i && lo(i) && i.catch((s) => {
      Dr(s, t, n);
    }), i;
  }
  if (X(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(yt(e[s], t, n, r));
    return i;
  }
}
function Dr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ge;
  if (t) {
    let l = t.parent;
    const c = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let T = 0; T < d.length; T++)
          if (d[T](e, c, g) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Ut(), Jn(s, null, 10, [
        e,
        c,
        g
      ]), kt();
      return;
    }
  }
  _a(e, n, i, r, o);
}
function _a(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Je = [];
let At = -1;
const vn = [];
let Bt = null, bn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let _r = null;
function Do(e) {
  const t = _r || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function va(e) {
  let t = At + 1, n = Je.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Je[r], s = qn(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ki(e) {
  if (!(e.flags & 1)) {
    const t = qn(e), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qn(n) ? Je.push(e) : Je.splice(va(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  _r || (_r = Io.then(Fo));
}
function Ta(e) {
  if (!X(e))
    Bt && e.id === -1 ? Bt.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      vn.push(e[t]);
  Mo();
}
function hs(e, t, n = At + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Lo(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, r) => qn(n) - qn(r)
    );
    if (vn.length = 0, Bt) {
      for (let n = 0; n < t.length; n++)
        Bt.push(t[n]);
      return;
    }
    for (Bt = t, bn = 0; bn < Bt.length; bn++) {
      const n = Bt[bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Bt = null, bn = 0;
  }
}
const qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fo(e) {
  try {
    for (At = 0; At < Je.length; At++) {
      const t = Je[At];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; At < Je.length; At++) {
      const t = Je[At];
      t && (t.flags &= -2);
    }
    At = -1, Je.length = 0, Lo(), _r = null, (Je.length || vn.length) && Fo();
  }
}
let pt = null, Uo = null;
function vr(e) {
  const t = pt;
  return pt = e, Uo = e && e.type.__scopeId || null, t;
}
function Sa(e, t = pt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && xs(-1);
    const s = vr(t), o = ln.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let c = ln.length; c > o; c--) ll();
      vr(s), r._d && xs(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ue(e, t) {
  if (pt === null)
    return e;
  const n = kr(pt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, l, c = ge] = t[i];
    s && (te(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Lt(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let c = l.dir[r];
    c && (Ut(), yt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), kt());
  }
}
function Ea(e, t) {
  if (Ze) {
    let n = Ze.provides;
    const r = Ze.parent && Ze.parent.provides;
    r === n && (n = Ze.provides = Object.create(r)), n[e] = t;
  }
}
function mr(e, t, n = !1) {
  const r = Tc();
  if (r || Tn) {
    let i = Tn ? Tn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), xa = () => mr(Aa);
function ei(e, t, n) {
  return ko(e, t, n);
}
function ko(e, t, n = ge) {
  const { immediate: r, deep: i, flush: s, once: o } = n, l = qe({}, n), c = t && r || !t && s !== "post";
  let g;
  if (Yn) {
    if (s === "sync") {
      const U = xa();
      g = U.__watcherHandles || (U.__watcherHandles = []);
    } else if (!c) {
      const U = () => {
      };
      return U.stop = Ct, U.resume = Ct, U.pause = Ct, U;
    }
  }
  const d = Ze;
  l.call = (U, J, k) => yt(U, d, J, k);
  let T = !1;
  s === "post" ? l.scheduler = (U) => {
    st(U, d && d.suspense);
  } : s !== "sync" && (T = !0, l.scheduler = (U, J) => {
    J ? U() : ki(U);
  }), l.augmentJob = (U) => {
    t && (U.flags |= 4), T && (U.flags |= 2, d && (U.id = d.uid, U.i = d));
  };
  const R = ya(e, t, l);
  return Yn && (g ? g.push(R) : c && R()), R;
}
function wa(e, t, n) {
  const r = this.proxy, i = Oe(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let s;
  te(t) ? s = t : (s = t.handler, n = t);
  const o = Zn(this), l = ko(i, s.bind(r), n);
  return o(), l;
}
function Ho(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ca = /* @__PURE__ */ Symbol("_vte"), Mr = (e) => e.__isTeleport, ti = /* @__PURE__ */ Symbol("_leaveCb");
function Oa(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== jt) {
        t = n;
        break;
      }
  }
  return t;
}
function jo(e) {
  if (!ji(e))
    return Mr(e.type) && e.children ? Oa(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && te(n.default))
      return n.default();
  }
}
function Hi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Hi(
      Mr(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $o(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ms(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tr = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, r, i = !1) {
  if (X(e)) {
    e.forEach(
      (k, Q) => jn(
        k,
        t && (X(t) ? t[Q] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if ($n(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && jn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? kr(r.component) : r.el, o = i ? null : s, { i: l, r: c } = e, g = t && t.r, d = l.refs === ge ? l.refs = {} : l.refs, T = l.setupState, R = /* @__PURE__ */ pe(T), U = T === ge ? oo : (k) => ms(d, k) ? !1 : ue(R, k), J = (k, Q) => !(Q && ms(d, Q));
  if (g != null && g !== c) {
    if (gs(t), Oe(g))
      d[g] = null, U(g) && (T[g] = null);
    else if (/* @__PURE__ */ Qe(g)) {
      const k = t;
      J(g, k.k) && (g.value = null), k.k && (d[k.k] = null);
    }
  }
  if (te(c))
    Jn(c, l, 12, [o, d]);
  else {
    const k = Oe(c), Q = /* @__PURE__ */ Qe(c);
    if (k || Q) {
      const z = () => {
        if (e.f) {
          const D = k ? U(c) ? T[c] : d[c] : J() || !e.k ? c.value : d[e.k];
          if (i)
            X(D) && Ri(D, s);
          else if (X(D))
            D.includes(s) || D.push(s);
          else if (k)
            d[c] = [s], U(c) && (T[c] = d[c]);
          else {
            const G = [s];
            J(c, e.k) && (c.value = G), e.k && (d[e.k] = G);
          }
        } else k ? (d[c] = o, U(c) && (T[c] = o)) : Q && (J(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const D = () => {
          z(), Tr.delete(e);
        };
        D.id = -1, Tr.set(e, D), st(D, n);
      } else
        gs(e), z();
    }
  }
}
function gs(e) {
  const t = Tr.get(e);
  t && (t.flags |= 8, Tr.delete(e));
}
Nr().requestIdleCallback;
Nr().cancelIdleCallback;
const $n = (e) => !!e.type.__asyncLoader, ji = (e) => e.type.__isKeepAlive;
function Ra(e, t) {
  Vo(e, "a", t);
}
function Pa(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = Ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Lr(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ji(i.parent.vnode) && Na(r, t, n, i), i = i.parent;
  }
}
function Na(e, t, n, r) {
  const i = Lr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  zo(() => {
    Ri(r[t], i);
  }, n);
}
function Lr(e, t, n = Ze, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = Zn(n), c = yt(t, n, e, o);
      return l(), kt(), c;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const $t = (e) => (t, n = Ze) => {
  (!Yn || e === "sp") && Lr(e, (...r) => t(...r), n);
}, Ia = $t("bm"), Da = $t("m"), Ma = $t(
  "bu"
), La = $t("u"), Fa = $t(
  "bum"
), zo = $t("um"), Ua = $t(
  "sp"
), ka = $t("rtg"), Ha = $t("rtc");
function ja(e, t = Ze) {
  Lr("ec", e, t);
}
const $a = /* @__PURE__ */ Symbol.for("v-ndc");
function He(e, t, n, r) {
  let i;
  const s = n, o = X(e);
  if (o || Oe(e)) {
    const l = o && /* @__PURE__ */ on(e);
    let c = !1, g = !1;
    l && (c = !/* @__PURE__ */ bt(e), g = /* @__PURE__ */ Kt(e), e = Ir(e)), i = new Array(e.length);
    for (let d = 0, T = e.length; d < T; d++)
      i[d] = t(
        c ? g ? En(Ht(e[d])) : Ht(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (he(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, g = l.length; c < g; c++) {
        const d = l[c];
        i[c] = t(e[d], d, c, s);
      }
    }
  else
    i = [];
  return i;
}
const Ti = (e) => e ? fl(e) ? kr(e) : Ti(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ti(e.parent),
    $root: (e) => Ti(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ki(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => wa.bind(e)
  })
), ni = (e, t) => e !== ge && !e.__isScriptSetup && ue(e, t), Va = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const R = o[t];
      if (R !== void 0)
        switch (R) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (ni(r, t))
          return o[t] = 1, r[t];
        if (i !== ge && ue(i, t))
          return o[t] = 2, i[t];
        if (ue(s, t))
          return o[t] = 3, s[t];
        if (n !== ge && ue(n, t))
          return o[t] = 4, n[t];
        Si && (o[t] = 0);
      }
    }
    const g = Vn[t];
    let d, T;
    if (g)
      return t === "$attrs" && We(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ge && ue(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      T = c.config.globalProperties, ue(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return ni(i, t) ? (i[t] = n, !0) : r !== ge && ue(r, t) ? (r[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ge && l[0] !== "$" && ue(e, l) || ni(t, l) || ue(s, l) || ue(r, l) || ue(Vn, l) || ue(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bs(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Si = !0;
function za(e) {
  const t = Wo(e), n = e.proxy, r = e.ctx;
  Si = !1, t.beforeCreate && ys(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: c,
    inject: g,
    // lifecycle
    created: d,
    beforeMount: T,
    mounted: R,
    beforeUpdate: U,
    updated: J,
    activated: k,
    deactivated: Q,
    beforeDestroy: z,
    beforeUnmount: D,
    destroyed: G,
    unmounted: L,
    render: oe,
    renderTracked: Re,
    renderTriggered: Ae,
    errorCaptured: K,
    serverPrefetch: q,
    // public API
    expose: de,
    inheritAttrs: me,
    // assets
    components: Te,
    directives: Pe,
    filters: $e
  } = t;
  if (g && Ba(g, r, null), o)
    for (const ne in o) {
      const re = o[ne];
      te(re) && (r[ne] = re.bind(n));
    }
  if (i) {
    const ne = i.call(n, n);
    he(ne) && (e.data = /* @__PURE__ */ nn(ne));
  }
  if (Si = !0, s)
    for (const ne in s) {
      const re = s[ne], ze = te(re) ? re.bind(n, n) : te(re.get) ? re.get.bind(n, n) : Ct, lt = !te(re) && te(re.set) ? re.set.bind(n) : Ct, et = Ce({
        get: ze,
        set: lt
      });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Le) => et.value = Le
      });
    }
  if (l)
    for (const ne in l)
      Bo(l[ne], r, n, ne);
  if (c) {
    const ne = te(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((re) => {
      Ea(re, ne[re]);
    });
  }
  d && ys(d, e, "c");
  function Se(ne, re) {
    X(re) ? re.forEach((ze) => ne(ze.bind(n))) : re && ne(re.bind(n));
  }
  if (Se(Ia, T), Se(Da, R), Se(Ma, U), Se(La, J), Se(Ra, k), Se(Pa, Q), Se(ja, K), Se(Ha, Re), Se(ka, Ae), Se(Fa, D), Se(zo, L), Se(Ua, q), X(de))
    if (de.length) {
      const ne = e.exposed || (e.exposed = {});
      de.forEach((re) => {
        Object.defineProperty(ne, re, {
          get: () => n[re],
          set: (ze) => n[re] = ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Ct && (e.render = oe), me != null && (e.inheritAttrs = me), Te && (e.components = Te), Pe && (e.directives = Pe), q && $o(e);
}
function Ba(e, t, n = Ct) {
  X(e) && (e = Ei(e));
  for (const r in e) {
    const i = e[r];
    let s;
    he(i) ? "default" in i ? s = mr(
      i.from || r,
      i.default,
      !0
    ) : s = mr(i.from || r) : s = mr(i), /* @__PURE__ */ Qe(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function ys(e, t, n) {
  yt(
    X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Bo(e, t, n, r) {
  let i = r.includes(".") ? Ho(n, r) : () => n[r];
  if (Oe(e)) {
    const s = t[e];
    te(s) && ei(i, s);
  } else if (te(e))
    ei(i, e.bind(n));
  else if (he(e))
    if (X(e))
      e.forEach((s) => Bo(s, t, n, r));
    else {
      const s = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(s) && ei(i, s, e);
    }
}
function Wo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (g) => Sr(c, g, o, !0)
  ), Sr(c, t, o)), he(t) && s.set(t, c), c;
}
function Sr(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && Sr(e, s, n, !0), i && i.forEach(
    (o) => Sr(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Wa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Wa = {
  data: _s,
  props: vs,
  emits: vs,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Ka,
  // provide / inject
  provide: _s,
  inject: qa
};
function _s(e, t) {
  return t ? e ? function() {
    return qe(
      te(e) ? e.call(this, this) : e,
      te(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qa(e, t) {
  return Mn(Ei(e), Ei(t));
}
function Ei(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mn(e, t) {
  return e ? qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vs(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : qe(
    /* @__PURE__ */ Object.create(null),
    bs(e),
    bs(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Xe(e[r], t[r]);
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
  return function(r, i = null) {
    te(r) || (r = qe({}, r)), i != null && !he(i) && (i = null);
    const s = qo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const g = s.app = {
      _uid: Ga++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Cc,
      get config() {
        return s.config;
      },
      set config(d) {
      },
      use(d, ...T) {
        return o.has(d) || (d && te(d.install) ? (o.add(d), d.install(g, ...T)) : te(d) && (o.add(d), d(g, ...T))), g;
      },
      mixin(d) {
        return s.mixins.includes(d) || s.mixins.push(d), g;
      },
      component(d, T) {
        return T ? (s.components[d] = T, g) : s.components[d];
      },
      directive(d, T) {
        return T ? (s.directives[d] = T, g) : s.directives[d];
      },
      mount(d, T, R) {
        if (!c) {
          const U = g._ceVNode || Ft(r, i);
          return U.appContext = s, R === !0 ? R = "svg" : R === !1 && (R = void 0), e(U, d, R), c = !0, g._container = d, d.__vue_app__ = g, kr(U.component);
        }
      },
      onUnmount(d) {
        l.push(d);
      },
      unmount() {
        c && (yt(
          l,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(d, T) {
        return s.provides[d] = T, g;
      },
      runWithContext(d) {
        const T = Tn;
        Tn = g;
        try {
          return d();
        } finally {
          Tn = T;
        }
      }
    };
    return g;
  };
}
let Tn = null;
const Xa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function Ja(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ge;
  let i = n;
  const s = t.startsWith("update:"), o = s && Xa(r, t.slice(7));
  o && (o.trim && (i = n.map((d) => Oe(d) ? d.trim() : d)), o.number && (i = i.map(Pr)));
  let l, c = r[l = Yr(t)] || // also try camelCase event handler (#2249)
  r[l = Yr(mt(t))];
  !c && s && (c = r[l = Yr(cn(t))]), c && yt(
    c,
    e,
    6,
    i
  );
  const g = r[l + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, yt(
      g,
      e,
      6,
      i
    );
  }
}
const Za = /* @__PURE__ */ new WeakMap();
function Ko(e, t, n = !1) {
  const r = n ? Za : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, l = !1;
  if (!te(e)) {
    const c = (g) => {
      const d = Ko(g, t, !0);
      d && (l = !0, qe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (he(e) && r.set(e, null), null) : (X(s) ? s.forEach((c) => o[c] = null) : qe(o, s), he(e) && r.set(e, o), o);
}
function Fr(e, t) {
  return !e || !Cr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, cn(t)) || ue(e, t));
}
function Ts(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: c,
    render: g,
    renderCache: d,
    props: T,
    data: R,
    setupState: U,
    ctx: J,
    inheritAttrs: k
  } = e, Q = vr(e);
  let z, D;
  try {
    if (n.shapeFlag & 4) {
      const L = i || r, oe = L;
      z = wt(
        g.call(
          oe,
          L,
          d,
          T,
          U,
          R,
          J
        )
      ), D = l;
    } else {
      const L = t;
      z = wt(
        L.length > 1 ? L(
          T,
          { attrs: l, slots: o, emit: c }
        ) : L(
          T,
          null
        )
      ), D = t.props ? l : Qa(l);
    }
  } catch (L) {
    ln.length = 0, Dr(L, e, 1), z = Ft(jt);
  }
  let G = z;
  if (D && k !== !1) {
    const L = Object.keys(D), { shapeFlag: oe } = G;
    L.length && oe & 7 && (s && L.some(Or) && (D = ec(
      D,
      s
    )), G = An(G, D, !1, !0));
  }
  if (n.dirs && (G = An(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const L = Mr(G.type) && jo(G) || G;
    Hi(L, n.transition);
  }
  return z = G, vr(Q), z;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const r in e)
    (!Or(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function tc(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: c } = t, g = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ss(r, o, g) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        const R = d[T];
        if (Go(o, r, R) && !Fr(g, R))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ss(r, o, g) : !0 : !!o;
  return !1;
}
function Ss(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (Go(t, e, s) && !Fr(n, s))
      return !0;
  }
  return !1;
}
function Go(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && he(r) && he(i) ? !qt(r, i) : r !== i;
}
function nc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Yo = {}, Xo = () => Object.create(Yo), Jo = (e) => Object.getPrototypeOf(e) === Yo;
function rc(e, t, n, r = !1) {
  const i = {}, s = Xo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zo(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ da(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function ic(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ pe(i), [c] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let T = 0; T < d.length; T++) {
        let R = d[T];
        if (Fr(e.emitsOptions, R))
          continue;
        const U = t[R];
        if (c)
          if (ue(s, R))
            U !== s[R] && (s[R] = U, g = !0);
          else {
            const J = mt(R);
            i[J] = Ai(
              c,
              l,
              J,
              U,
              e,
              !1
            );
          }
        else
          U !== s[R] && (s[R] = U, g = !0);
      }
    }
  } else {
    Zo(e, t, i, s) && (g = !0);
    let d;
    for (const T in l)
      (!t || // for camelCase
      !ue(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = cn(T)) === T || !ue(t, d))) && (c ? n && // for camelCase
      (n[T] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[T] = Ai(
        c,
        l,
        T,
        void 0,
        e,
        !0
      )) : delete i[T]);
    if (s !== l)
      for (const T in s)
        (!t || !ue(t, T)) && (delete s[T], g = !0);
  }
  g && Mt(e.attrs, "set", "");
}
function Zo(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Un(c))
        continue;
      const g = t[c];
      let d;
      i && ue(i, d = mt(c)) ? !s || !s.includes(d) ? n[d] = g : (l || (l = {}))[d] = g : Fr(e.emitsOptions, c) || (!(c in r) || g !== r[c]) && (r[c] = g, o = !0);
    }
  if (s) {
    const c = /* @__PURE__ */ pe(n), g = l || ge;
    for (let d = 0; d < s.length; d++) {
      const T = s[d];
      n[T] = Ai(
        i,
        c,
        T,
        g[T],
        e,
        !ue(g, T)
      );
    }
  }
  return o;
}
function Ai(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const l = ue(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && te(c)) {
        const { propsDefaults: g } = i;
        if (n in g)
          r = g[n];
        else {
          const d = Zn(i);
          r = g[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const sc = /* @__PURE__ */ new WeakMap();
function Qo(e, t, n = !1) {
  const r = n ? sc : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, l = [];
  let c = !1;
  if (!te(e)) {
    const d = (T) => {
      c = !0;
      const [R, U] = Qo(T, t, !0);
      qe(o, R), U && l.push(...U);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !c)
    return he(e) && r.set(e, _n), _n;
  if (X(s))
    for (let d = 0; d < s.length; d++) {
      const T = mt(s[d]);
      Es(T) && (o[T] = ge);
    }
  else if (s)
    for (const d in s) {
      const T = mt(d);
      if (Es(T)) {
        const R = s[d], U = o[T] = X(R) || te(R) ? { type: R } : qe({}, R), J = U.type;
        let k = !1, Q = !0;
        if (X(J))
          for (let z = 0; z < J.length; ++z) {
            const D = J[z], G = te(D) && D.name;
            if (G === "Boolean") {
              k = !0;
              break;
            } else G === "String" && (Q = !1);
          }
        else
          k = te(J) && J.name === "Boolean";
        U[
          0
          /* shouldCast */
        ] = k, U[
          1
          /* shouldCastTrue */
        ] = Q, (k || ue(U, "default")) && l.push(T);
      }
    }
  const g = [o, l];
  return he(e) && r.set(e, g), g;
}
function Es(e) {
  return e[0] !== "$" && !Un(e);
}
const $i = (e) => e === "_" || e === "_ctx" || e === "$stable", Vi = (e) => X(e) ? e.map(wt) : [wt(e)], oc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Sa((...i) => Vi(t(...i)), n);
  return r._c = !1, r;
}, el = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if ($i(i)) continue;
    const s = e[i];
    if (te(s))
      t[i] = oc(i, s, r);
    else if (s != null) {
      const o = Vi(s);
      t[i] = () => o;
    }
  }
}, tl = (e, t) => {
  const n = Vi(t);
  e.slots.default = () => n;
}, nl = (e, t, n) => {
  for (const r in t)
    (n || !$i(r)) && (e[r] = t[r]);
}, lc = (e, t, n) => {
  const r = e.slots = Xo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (nl(r, t, n), n && fo(r, "_", i, !0)) : el(t, r);
  } else t && tl(e, t);
}, ac = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, o = ge;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : nl(i, t, n) : (s = !t.$stable, el(t, i)), o = t;
  } else t && (tl(e, t), o = { default: 1 });
  if (s)
    for (const l in i)
      !$i(l) && o[l] == null && delete i[l];
}, st = pc;
function cc(e) {
  return uc(e);
}
function uc(e, t) {
  const n = Nr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: c,
    setText: g,
    setElementText: d,
    parentNode: T,
    nextSibling: R,
    setScopeId: U = Ct,
    insertStaticContent: J
  } = e, k = (u, f, b, w = null, v = null, A = null, P = void 0, N = null, I = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Pn(u, f) && (w = C(u), Le(u, v, A, !0), u = null), f.patchFlag === -2 && (I = !1, f.dynamicChildren = null);
    const { type: S, ref: W, shapeFlag: M } = f;
    switch (S) {
      case Ur:
        Q(u, f, b, w);
        break;
      case jt:
        z(u, f, b, w);
        break;
      case ii:
        u == null && D(f, b, w, P);
        break;
      case _e:
        Te(
          u,
          f,
          b,
          w,
          v,
          A,
          P,
          N,
          I
        );
        break;
      default:
        M & 1 ? oe(
          u,
          f,
          b,
          w,
          v,
          A,
          P,
          N,
          I
        ) : M & 6 ? Pe(
          u,
          f,
          b,
          w,
          v,
          A,
          P,
          N,
          I
        ) : (M & 64 || M & 128) && S.process(
          u,
          f,
          b,
          w,
          v,
          A,
          P,
          N,
          I,
          tt
        );
    }
    W != null && v ? jn(W, u && u.ref, A, f || u, !f) : W == null && u && u.ref != null && jn(u.ref, null, A, u, !0);
  }, Q = (u, f, b, w) => {
    if (u == null)
      r(
        f.el = l(f.children),
        b,
        w
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && g(v, f.children);
    }
  }, z = (u, f, b, w) => {
    u == null ? r(
      f.el = c(f.children || ""),
      b,
      w
    ) : f.el = u.el;
  }, D = (u, f, b, w) => {
    [u.el, u.anchor] = J(
      u.children,
      f,
      b,
      w,
      u.el,
      u.anchor
    );
  }, G = ({ el: u, anchor: f }, b, w) => {
    let v;
    for (; u && u !== f; )
      v = R(u), r(u, b, w), u = v;
    r(f, b, w);
  }, L = ({ el: u, anchor: f }) => {
    let b;
    for (; u && u !== f; )
      b = R(u), i(u), u = b;
    i(f);
  }, oe = (u, f, b, w, v, A, P, N, I) => {
    if (f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), u == null)
      Re(
        f,
        b,
        w,
        v,
        A,
        P,
        N,
        I
      );
    else {
      const S = u.el && u.el._isVueCE ? u.el : null;
      try {
        S && S._beginPatch(), q(
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
  }, Re = (u, f, b, w, v, A, P, N) => {
    let I, S;
    const { props: W, shapeFlag: M, transition: V, dirs: Y } = u;
    if (I = u.el = o(
      u.type,
      A,
      W && W.is,
      W
    ), M & 8 ? d(I, u.children) : M & 16 && K(
      u.children,
      I,
      null,
      w,
      v,
      ri(u, A),
      P,
      N
    ), Y && Xt(u, null, w, "created"), Ae(I, u, u.scopeId, P, w), W) {
      for (const se in W)
        se !== "value" && !Un(se) && s(I, se, null, W[se], A, w);
      "value" in W && s(I, "value", null, W.value, A), (S = W.onVnodeBeforeMount) && Et(S, w, u);
    }
    Y && Xt(u, null, w, "beforeMount");
    const ee = fc(v, V);
    ee && V.beforeEnter(I), r(I, f, b), ((S = W && W.onVnodeMounted) || ee || Y) && st(() => {
      S && Et(S, w, u), ee && V.enter(I), Y && Xt(u, null, w, "mounted");
    }, v);
  }, Ae = (u, f, b, w, v) => {
    if (b && U(u, b), w)
      for (let A = 0; A < w.length; A++)
        U(u, w[A]);
    if (v) {
      let A = v.subTree;
      if (f === A || ol(A.type) && (A.ssContent === f || A.ssFallback === f)) {
        const P = v.vnode;
        Ae(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          v.parent
        );
      }
    }
  }, K = (u, f, b, w, v, A, P, N, I = 0) => {
    for (let S = I; S < u.length; S++) {
      const W = u[S] = N ? It(u[S]) : wt(u[S]);
      k(
        null,
        W,
        f,
        b,
        w,
        v,
        A,
        P,
        N
      );
    }
  }, q = (u, f, b, w, v, A, P) => {
    const N = f.el = u.el;
    let { patchFlag: I, dynamicChildren: S, dirs: W } = f;
    I |= u.patchFlag & 16;
    const M = u.props || ge, V = f.props || ge;
    let Y;
    if (b && Jt(b, !1), (Y = V.onVnodeBeforeUpdate) && Et(Y, b, f, u), W && Xt(f, u, b, "beforeUpdate"), b && Jt(b, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!u.dynamicChildren || u.dynamicChildren.length !== S.length) && (I = 0, P = !1, S = null), (M.innerHTML && V.innerHTML == null || M.textContent && V.textContent == null) && d(N, ""), S ? de(
      u.dynamicChildren,
      S,
      N,
      b,
      w,
      ri(f, v),
      A
    ) : P || re(
      u,
      f,
      N,
      null,
      b,
      w,
      ri(f, v),
      A,
      !1
    ), I > 0) {
      if (I & 16)
        me(N, M, V, b, v);
      else if (I & 2 && M.class !== V.class && s(N, "class", null, V.class, v), I & 4 && s(N, "style", M.style, V.style, v), I & 8) {
        const ee = f.dynamicProps;
        for (let se = 0; se < ee.length; se++) {
          const ie = ee[se], Ee = M[ie], we = V[ie];
          (we !== Ee || ie === "value") && s(N, ie, Ee, we, v, b);
        }
      }
      I & 1 && u.children !== f.children && d(N, f.children);
    } else !P && S == null && me(N, M, V, b, v);
    ((Y = V.onVnodeUpdated) || W) && st(() => {
      Y && Et(Y, b, f, u), W && Xt(f, u, b, "updated");
    }, w);
  }, de = (u, f, b, w, v, A, P) => {
    for (let N = 0; N < f.length; N++) {
      const I = u[N], S = f[N], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(I, S) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 198) ? T(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      k(
        I,
        S,
        W,
        null,
        w,
        v,
        A,
        P,
        !0
      );
    }
  }, me = (u, f, b, w, v) => {
    if (f !== b) {
      if (f !== ge)
        for (const A in f)
          !Un(A) && !(A in b) && s(
            u,
            A,
            f[A],
            null,
            v,
            w
          );
      for (const A in b) {
        if (Un(A)) continue;
        const P = b[A], N = f[A];
        P !== N && A !== "value" && s(u, A, N, P, v, w);
      }
      "value" in b && s(u, "value", f.value, b.value, v);
    }
  }, Te = (u, f, b, w, v, A, P, N, I) => {
    const S = f.el = u ? u.el : l(""), W = f.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: V, slotScopeIds: Y } = f;
    Y && (N = N ? N.concat(Y) : Y), u == null ? (r(S, b, w), r(W, b, w), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      b,
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
      b,
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
      b,
      W,
      v,
      A,
      P,
      N,
      I
    );
  }, Pe = (u, f, b, w, v, A, P, N, I) => {
    f.slotScopeIds = N, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      b,
      w,
      P,
      I
    ) : $e(
      f,
      b,
      w,
      v,
      A,
      P,
      I
    ) : Ve(u, f, I);
  }, $e = (u, f, b, w, v, A, P) => {
    const N = u.component = vc(
      u,
      w,
      v
    );
    if (ji(u) && (N.ctx.renderer = tt), Sc(N, !1, P), N.asyncDep) {
      if (v && v.registerDep(N, Se, P), !u.el) {
        const I = N.subTree = Ft(jt);
        z(null, I, f, b), u.placeholder = I.el;
      }
    } else
      Se(
        N,
        u,
        f,
        b,
        v,
        A,
        P
      );
  }, Ve = (u, f, b) => {
    const w = f.component = u.component;
    if (tc(u, f, b))
      if (w.asyncDep && !w.asyncResolved) {
        ne(w, f, b);
        return;
      } else
        w.next = f, w.update();
    else
      f.el = u.el, w.vnode = f;
  }, Se = (u, f, b, w, v, A, P) => {
    const N = () => {
      if (u.isMounted) {
        let { next: M, bu: V, u: Y, parent: ee, vnode: se } = u;
        {
          const nt = il(u);
          if (nt) {
            M && (M.el = se.el, ne(u, M, P)), nt.asyncDep.then(() => {
              st(() => {
                u.isUnmounted || S();
              }, v);
            });
            return;
          }
        }
        let ie = M, Ee;
        Jt(u, !1), M ? (M.el = se.el, ne(u, M, P)) : M = se, V && hr(V), (Ee = M.props && M.props.onVnodeBeforeUpdate) && Et(Ee, ee, M, se), Jt(u, !0);
        const we = Ts(u), Ke = u.subTree;
        u.subTree = we, k(
          Ke,
          we,
          // parent may have changed if it's in a teleport
          T(Ke.el),
          // anchor may have changed if it's in a fragment
          C(Ke),
          u,
          v,
          A
        ), M.el = we.el, ie === null && nc(u, we.el), Y && st(Y, v), (Ee = M.props && M.props.onVnodeUpdated) && st(
          () => Et(Ee, ee, M, se),
          v
        );
      } else {
        let M;
        const { el: V, props: Y } = f, { bm: ee, m: se, parent: ie, root: Ee, type: we } = u, Ke = $n(f);
        Jt(u, !1), ee && hr(ee), !Ke && (M = Y && Y.onVnodeBeforeMount) && Et(M, ie, f), Jt(u, !0);
        {
          Ee.ce && Ee.ce._hasShadowRoot() && Ee.ce._injectChildStyle(
            we,
            u.parent ? u.parent.type : void 0
          );
          const nt = u.subTree = Ts(u);
          k(
            null,
            nt,
            b,
            w,
            u,
            v,
            A
          ), f.el = nt.el;
        }
        if (se && st(se, v), !Ke && (M = Y && Y.onVnodeMounted)) {
          const nt = f;
          st(
            () => Et(M, ie, nt),
            v
          );
        }
        (f.shapeFlag & 256 || ie && $n(ie.vnode) && ie.vnode.shapeFlag & 256) && u.a && st(u.a, v), u.isMounted = !0, f = b = w = null;
      }
    };
    u.scope.on();
    const I = u.effect = new go(N);
    u.scope.off();
    const S = u.update = I.run.bind(I), W = u.job = I.runIfDirty.bind(I);
    W.i = u, W.id = u.uid, I.scheduler = () => ki(W), Jt(u, !0), S();
  }, ne = (u, f, b) => {
    f.component = u;
    const w = u.vnode.props;
    u.vnode = f, u.next = null, ic(u, f.props, w, b), ac(u, f.children, b), Ut(), hs(u), kt();
  }, re = (u, f, b, w, v, A, P, N, I = !1) => {
    const S = u && u.children, W = u ? u.shapeFlag : 0, M = f.children, { patchFlag: V, shapeFlag: Y } = f;
    if (V > 0) {
      if (V & 128) {
        lt(
          S,
          M,
          b,
          w,
          v,
          A,
          P,
          N,
          I
        );
        return;
      } else if (V & 256) {
        ze(
          S,
          M,
          b,
          w,
          v,
          A,
          P,
          N,
          I
        );
        return;
      }
    }
    Y & 8 ? (W & 16 && B(S, v, A), M !== S && d(b, M)) : W & 16 ? Y & 16 ? lt(
      S,
      M,
      b,
      w,
      v,
      A,
      P,
      N,
      I
    ) : B(S, v, A, !0) : (W & 8 && d(b, ""), Y & 16 && K(
      M,
      b,
      w,
      v,
      A,
      P,
      N,
      I
    ));
  }, ze = (u, f, b, w, v, A, P, N, I) => {
    u = u || _n, f = f || _n;
    const S = u.length, W = f.length, M = Math.min(S, W);
    let V;
    for (V = 0; V < M; V++) {
      const Y = f[V] = I ? It(f[V]) : wt(f[V]);
      k(
        u[V],
        Y,
        b,
        null,
        v,
        A,
        P,
        N,
        I
      );
    }
    S > W ? B(
      u,
      v,
      A,
      !0,
      !1,
      M
    ) : K(
      f,
      b,
      w,
      v,
      A,
      P,
      N,
      I,
      M
    );
  }, lt = (u, f, b, w, v, A, P, N, I) => {
    let S = 0;
    const W = f.length;
    let M = u.length - 1, V = W - 1;
    for (; S <= M && S <= V; ) {
      const Y = u[S], ee = f[S] = I ? It(f[S]) : wt(f[S]);
      if (Pn(Y, ee))
        k(
          Y,
          ee,
          b,
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
      const Y = u[M], ee = f[V] = I ? It(f[V]) : wt(f[V]);
      if (Pn(Y, ee))
        k(
          Y,
          ee,
          b,
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
        const Y = V + 1, ee = Y < W ? f[Y].el : w;
        for (; S <= V; )
          k(
            null,
            f[S] = I ? It(f[S]) : wt(f[S]),
            b,
            ee,
            v,
            A,
            P,
            N,
            I
          ), S++;
      }
    } else if (S > V)
      for (; S <= M; )
        Le(u[S], v, A, !0), S++;
    else {
      const Y = S, ee = S, se = /* @__PURE__ */ new Map();
      for (S = ee; S <= V; S++) {
        const Fe = f[S] = I ? It(f[S]) : wt(f[S]);
        Fe.key != null && se.set(Fe.key, S);
      }
      let ie, Ee = 0;
      const we = V - ee + 1;
      let Ke = !1, nt = 0;
      const dt = new Array(we);
      for (S = 0; S < we; S++) dt[S] = 0;
      for (S = Y; S <= M; S++) {
        const Fe = u[S];
        if (Ee >= we) {
          Le(Fe, v, A, !0);
          continue;
        }
        let at;
        if (Fe.key != null)
          at = se.get(Fe.key);
        else
          for (ie = ee; ie <= V; ie++)
            if (dt[ie - ee] === 0 && Pn(Fe, f[ie])) {
              at = ie;
              break;
            }
        at === void 0 ? Le(Fe, v, A, !0) : (dt[at - ee] = S + 1, at >= nt ? nt = at : Ke = !0, k(
          Fe,
          f[at],
          b,
          null,
          v,
          A,
          P,
          N,
          I
        ), Ee++);
      }
      const Gt = Ke ? dc(dt) : _n;
      for (ie = Gt.length - 1, S = we - 1; S >= 0; S--) {
        const Fe = ee + S, at = f[Fe], xn = f[Fe + 1], wn = Fe + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || sl(xn)
        ) : w;
        dt[S] === 0 ? k(
          null,
          at,
          b,
          wn,
          v,
          A,
          P,
          N,
          I
        ) : Ke && (ie < 0 || S !== Gt[ie] ? et(at, b, wn, 2) : ie--);
      }
    }
  }, et = (u, f, b, w, v = null) => {
    const { el: A, type: P, transition: N, children: I, shapeFlag: S } = u;
    if (S & 6) {
      et(u.component.subTree, f, b, w);
      return;
    }
    if (S & 128) {
      u.suspense.move(f, b, w);
      return;
    }
    if (S & 64) {
      P.move(u, f, b, tt);
      return;
    }
    if (P === _e) {
      r(A, f, b);
      for (let M = 0; M < I.length; M++)
        et(I[M], f, b, w);
      r(u.anchor, f, b);
      return;
    }
    if (P === ii) {
      G(u, f, b);
      return;
    }
    if (w !== 2 && S & 1 && N)
      if (w === 0)
        N.persisted && !A[ti] ? r(A, f, b) : (N.beforeEnter(A), r(A, f, b), st(() => N.enter(A), v));
      else {
        const { leave: M, delayLeave: V, afterLeave: Y } = N, ee = () => {
          u.ctx.isUnmounted ? i(A) : r(A, f, b);
        }, se = () => {
          const ie = A._isLeaving || !!A[ti];
          A._isLeaving && A[ti](
            !0
            /* cancelled */
          ), N.persisted && !ie ? ee() : M(A, () => {
            ee(), Y && Y();
          });
        };
        V ? V(A, ee, se) : se();
      }
    else
      r(A, f, b);
  }, Le = (u, f, b, w = !1, v = !1) => {
    const {
      type: A,
      props: P,
      ref: N,
      children: I,
      dynamicChildren: S,
      shapeFlag: W,
      patchFlag: M,
      dirs: V,
      cacheIndex: Y,
      memo: ee
    } = u;
    if (M === -2 && (v = !1), N != null && (Ut(), jn(N, null, b, u, !0), kt()), Y != null && (f.renderCache[Y] = void 0), W & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const se = W & 1 && V, ie = !$n(u);
    let Ee;
    if (ie && (Ee = P && P.onVnodeBeforeUnmount) && Et(Ee, f, u), W & 6)
      vt(u.component, b, w);
    else {
      if (W & 128) {
        u.suspense.unmount(b, w);
        return;
      }
      se && Xt(u, null, f, "beforeUnmount"), W & 64 ? u.type.remove(
        u,
        f,
        b,
        tt,
        w
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== _e || M > 0 && M & 64) ? B(
        S,
        f,
        b,
        !1,
        !0
      ) : (A === _e && M & 384 || !v && W & 16) && B(I, f, b), w && _t(u);
    }
    const we = ee != null && Y == null;
    (ie && (Ee = P && P.onVnodeUnmounted) || se || we) && st(() => {
      Ee && Et(Ee, f, u), se && Xt(u, null, f, "unmounted"), we && (u.el = null);
    }, b);
  }, _t = (u) => {
    const { type: f, el: b, anchor: w, transition: v } = u;
    if (f === _e) {
      ae(b, w);
      return;
    }
    if (f === ii) {
      L(u);
      return;
    }
    const A = () => {
      i(b), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: P, delayLeave: N } = v, I = () => P(b, A);
      N ? N(u.el, A, I) : I();
    } else
      A();
  }, ae = (u, f) => {
    let b;
    for (; u !== f; )
      b = R(u), i(u), u = b;
    i(f);
  }, vt = (u, f, b) => {
    const { bum: w, scope: v, job: A, subTree: P, um: N, m: I, a: S } = u;
    As(I), As(S), w && hr(w), v.stop(), A && (A.flags |= 8, Le(P, u, f, b)), N && st(N, f), st(() => {
      u.isUnmounted = !0;
    }, f);
  }, B = (u, f, b, w = !1, v = !1, A = 0) => {
    for (let P = A; P < u.length; P++)
      Le(u[P], f, b, w, v);
  }, C = (u) => {
    if (u.shapeFlag & 6)
      return C(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = R(u.anchor || u.el), b = f && f[Ca];
    return b ? R(b) : f;
  };
  let m = !1;
  const be = (u, f, b) => {
    let w;
    u == null ? f._vnode && (Le(f._vnode, null, null, !0), w = f._vnode.component) : k(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      b
    ), f._vnode = u, m || (m = !0, hs(w), Lo(), m = !1);
  }, tt = {
    p: k,
    um: Le,
    m: et,
    r: _t,
    mt: $e,
    mc: K,
    pc: re,
    pbc: de,
    n: C,
    o: e
  };
  return {
    render: be,
    hydrate: void 0,
    createApp: Ya(be)
  };
}
function ri({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rl(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (X(r) && X(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = It(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && rl(o, l)), l.type === Ur && (l.patchFlag === -1 && (l = i[s] = It(l)), l.el = o.el), l.type === jt && !l.el && (l.el = o.el);
    }
}
function dc(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const g = e[r];
    if (g !== 0) {
      if (i = n[n.length - 1], e[i] < g) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < g ? s = l + 1 : o = l;
      g < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function il(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : il(t);
}
function As(e) {
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
function pc(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const _e = /* @__PURE__ */ Symbol.for("v-fgt"), Ur = /* @__PURE__ */ Symbol.for("v-txt"), jt = /* @__PURE__ */ Symbol.for("v-cmt"), ii = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let ft = null;
function H(e = !1) {
  ln.push(ft = e ? null : []);
}
function ll() {
  ln.pop(), ft = ln[ln.length - 1] || null;
}
let Kn = 1;
function xs(e, t = !1) {
  Kn += e, e < 0 && ft && t && (ft.hasOnce = !0);
}
function al(e) {
  return e.dynamicChildren = Kn > 0 ? ft || _n : null, ll(), Kn > 0 && ft && ft.push(e), e;
}
function j(e, t, n, r, i, s) {
  return al(
    y(
      e,
      t,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function hc(e, t, n, r, i) {
  return al(
    Ft(
      e,
      t,
      n,
      r,
      i,
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
const ul = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || /* @__PURE__ */ Qe(e) || te(e) ? { i: pt, r: e, k: t, f: !!n } : e : null);
function y(e, t = null, n = null, r = 0, i = null, s = e === _e ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ul(t),
    ref: t && gr(t),
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return l ? (Er(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= Oe(n) ? 8 : 16), Kn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ft && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ft.push(c), c;
}
const Ft = mc;
function mc(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === $a) && (e = jt), cl(e)) {
    const l = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Er(l, n), Kn > 0 && !s && ft && (l.shapeFlag & 6 ? ft[ft.indexOf(e)] = l : ft.push(l)), l.patchFlag = -2, l;
  }
  if (wc(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: l, style: c } = t;
    l && !Oe(l) && (t.class = zn(l)), he(c) && (/* @__PURE__ */ Ui(c) && !X(c) && (c = qe({}, c)), t.style = Ni(c));
  }
  const o = Oe(e) ? 1 : ol(e) ? 128 : Mr(e) ? 64 : he(e) ? 4 : te(e) ? 2 : 0;
  return y(
    e,
    t,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function gc(e) {
  return e ? /* @__PURE__ */ Ui(e) || Jo(e) ? qe({}, e) : e : null;
}
function An(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: c } = e, g = t ? bc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && ul(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? X(s) ? s.concat(gr(t)) : [s, gr(t)] : gr(t)
    ) : s,
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
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
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
  return c && r && Hi(
    d,
    c.clone(d)
  ), d;
}
function fe(e = " ", t = 0) {
  return Ft(Ur, null, e, t);
}
function De(e = "", t = !1) {
  return t ? (H(), hc(jt, null, e)) : Ft(jt, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? Ft(jt) : X(e) ? Ft(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cl(e) ? It(e) : Ft(Ur, null, String(e));
}
function It(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e);
}
function Er(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Er(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Jo(t) ? t._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (te(t)) {
    if (r & 65) {
      Er(e, { default: t });
      return;
    }
    t = { default: t, _ctx: pt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [fe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (i === "style")
        t.style = Ni([t.style, r.style]);
      else if (Cr(i)) {
        const s = t[i], o = r[i];
        o && s !== o && !(X(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Or(i) && (t[i] = o);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Et(e, t, n, r = null) {
  yt(e, t, 7, [
    n,
    r
  ]);
}
const yc = qo();
let _c = 0;
function vc(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || yc, s = {
    uid: _c++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
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
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qo(r, i),
    emitsOptions: Ko(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ge,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ge,
    data: ge,
    props: ge,
    attrs: ge,
    slots: ge,
    refs: ge,
    setupState: ge,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ja.bind(null, s), e.ce && e.ce(s), s;
}
let Ze = null;
const Tc = () => Ze || pt;
let Ar, Gn;
{
  const e = Nr(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Ar = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), Gn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const Zn = (e) => {
  const t = Ze;
  return Ar(e), e.scope.on(), () => {
    e.scope.off(), Ar(t);
  };
}, ws = () => {
  Ze && Ze.scope.off(), Ar(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function Sc(e, t = !1, n = !1) {
  t && Gn(t);
  const { props: r, children: i } = e.vnode, s = fl(e);
  rc(e, r, s, t), lc(e, i, n || t);
  const o = s ? Ec(e, t) : void 0;
  return t && Gn(!1), o;
}
function Ec(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Va);
  const { setup: r } = n;
  if (r) {
    Ut();
    const i = e.setupContext = r.length > 1 ? xc(e) : null, s = Zn(e), o = Jn(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = lo(o);
    if (kt(), s(), (l || e.sp) && !$n(e) && $o(e), l) {
      if (o.then(ws, ws), t)
        return o.then((c) => {
          Gn(!0);
          try {
            Cs(e, c, t);
          } finally {
            Gn(!1);
          }
        }).catch((c) => {
          Dr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Cs(e, o);
  } else
    dl(e);
}
function Cs(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = No(t)), dl(e);
}
function dl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ct);
  {
    const i = Zn(e);
    Ut();
    try {
      za(e);
    } finally {
      kt(), i();
    }
  }
}
const Ac = {
  get(e, t) {
    return We(e, "get", ""), e[t];
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
function kr(e) {
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
function wc(e) {
  return te(e) && "__vccOpts" in e;
}
const Ce = (e, t) => /* @__PURE__ */ ga(e, t, Yn), Cc = "3.5.42";
let xi;
const Os = typeof window < "u" && window.trustedTypes;
if (Os)
  try {
    xi = /* @__PURE__ */ Os.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const pl = xi ? (e) => xi.createHTML(e) : (e) => e, Oc = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Rs = Nt && /* @__PURE__ */ Nt.createElement("template"), Pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Nt.createElementNS(Oc, e) : t === "mathml" ? Nt.createElementNS(Rc, e) : n ? Nt.createElement(e, { is: n }) : Nt.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Nt.createTextNode(e),
  createComment: (e) => Nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Rs.innerHTML = pl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Rs.content;
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
const Ps = /* @__PURE__ */ Symbol("_vod"), Dc = /* @__PURE__ */ Symbol("_vsh"), Mc = /* @__PURE__ */ Symbol(""), Lc = /(?:^|;)\s*display\s*:/;
function Fc(e, t, n) {
  const r = e.style, i = Oe(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Oe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ln(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ln(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? kc(
        e,
        o,
        !Oe(t) && t ? t[o] : void 0,
        l
      ) || Ln(r, o, l) : Ln(r, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = r[Mc];
      o && (n += ";" + o), r.cssText = n, s = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ps in e && (e[Ps] = s ? r.display : "", e[Dc] && (r.display = "none"));
}
const ur = /\s*!important$/;
function Ln(e, t, n) {
  if (X(n))
    n.forEach((r) => Ln(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ur.test(n) ? e.setProperty(t, n.replace(ur, ""), "important") : e.setProperty(t, n);
  else {
    const r = Uc(e, t);
    ur.test(n) ? e.setProperty(
      cn(r),
      n.replace(ur, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ns = ["Webkit", "Moz", "ms"], si = {};
function Uc(e, t) {
  const n = si[t];
  if (n)
    return n;
  let r = mt(t);
  if (r !== "filter" && r in e)
    return si[t] = r;
  r = uo(r);
  for (let i = 0; i < Ns.length; i++) {
    const s = Ns[i] + r;
    if (s in e)
      return si[t] = s;
  }
  return t;
}
function kc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Oe(r) && n === r;
}
const Is = "http://www.w3.org/1999/xlink";
function Ds(e, t, n, r, i, s = Bl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Is, t.slice(6, t.length)) : e.setAttributeNS(Is, t, n) : n == null || s && !po(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Ot(n) ? String(n) : n
  );
}
function Ms(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pl(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
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
  o && e.removeAttribute(i || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Hc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ls = /* @__PURE__ */ Symbol("_vei");
function jc(e, t, n, r, i = null) {
  const s = e[Ls] || (e[Ls] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = zc(t);
    if (r) {
      const g = s[t] = qc(
        r,
        i
      );
      tn(e, l, g, c);
    } else o && (Hc(e, l, o, c), s[t] = void 0);
  }
}
const $c = /(Once|Passive|Capture)$/, Vc = /^on:?(?:Once|Passive|Capture)$/;
function zc(e) {
  let t, n;
  for (; (n = e.match($c)) && !Vc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let oi = 0;
const Bc = /* @__PURE__ */ Promise.resolve(), Wc = () => oi || (Bc.then(() => oi = 0), oi = Date.now());
function qc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (X(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = i.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const g = o[c];
        g && yt(
          g,
          t,
          5,
          l
        );
      }
    } else
      yt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Wc(), n;
}
const Fs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? Ic(e, r, o) : t === "style" ? Fc(e, n, r) : Cr(t) ? Or(t) || jc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Ms(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ds(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Oe(r))) ? Ms(e, mt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ds(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fs(t) && te(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Fs(t) && Oe(n) ? !1 : t in e;
}
function Yc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = mt(t);
  return Array.isArray(n) ? n.some((i) => mt(i) === r) : Object.keys(n).some((i) => mt(i) === r);
}
const xr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return X(t) ? (n) => hr(t, n) : t;
};
function Xc(e) {
  e.target.composing = !0;
}
function Us(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), fr = /* @__PURE__ */ Symbol("_initialValue");
function li(e, t, n) {
  return t && (e = e.trim()), n && (e = Pr(e)), e;
}
const ai = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[fr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[fr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = xr(i);
    const s = r || i.props && i.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](li(e.value, n, s));
    }), (n || s) && tn(e, "change", () => {
      e.value = li(e.value, n, s);
    }), t || (tn(e, "compositionstart", Xc), tn(e, "compositionend", Us), tn(e, "change", Us));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", s = e[fr];
    delete e[fr], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[rn](li(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } }, o) {
    if (e[rn] = xr(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Pr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, Ye = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Pr(wr(c)) : wr(c)
      ), s = e.multiple, o = s ? an(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        s,
        s ? X(o) ? i.slice() : i : o
      ];
      try {
        e[rn](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = xr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ks(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = xr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Jc(t, n[1], n[0])) && ks(e, t);
  }
};
function Jc(e, t, n) {
  if (!n || X(e)) return qt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function ks(e, t) {
  const n = e.multiple, r = X(t);
  if (!(n && !r && !an(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], l = wr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((g) => String(g) === String(l)) : o.selected = ql(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (qt(wr(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wr(e) {
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
}, dr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = Qc[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, eu = /* @__PURE__ */ qe({ patchProp: Kc }, Pc);
let Hs;
function tu() {
  return Hs || (Hs = cc(eu));
}
const nu = ((...e) => {
  const t = tu().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = iu(r);
    if (!i) return;
    const s = t._component;
    !te(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, ru(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function ru(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function iu(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
function su(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(r);
  if (i === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(r, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function js(e, t) {
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
    var r, i, s, o, l = [], c = !0, g = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (d) {
      g = !0, i = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (g) throw i;
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
    if (typeof e == "string") return js(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? js(e, t) : void 0;
  }
}
const hl = Object.entries, $s = Object.setPrototypeOf, fu = Object.isFrozen, du = Object.getPrototypeOf, pu = Object.getOwnPropertyDescriptor;
let Me = Object.freeze, ke = Object.seal, yn = Object.create, ml = typeof Reflect < "u" && Reflect, wi = ml.apply, Ci = ml.construct;
Me || (Me = function(t) {
  return t;
});
ke || (ke = function(t) {
  return t;
});
wi || (wi = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
Ci || (Ci = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const en = Ie(Array.prototype.forEach), hu = Ie(Array.prototype.lastIndexOf), Vs = Ie(Array.prototype.pop), Nn = Ie(Array.prototype.push), mu = Ie(Array.prototype.splice), Sn = Array.isArray, Fn = Ie(String.prototype.toLowerCase), ci = Ie(String.prototype.toString), zs = Ie(String.prototype.match), In = Ie(String.prototype.replace), Bs = Ie(String.prototype.indexOf), gu = Ie(String.prototype.trim), bu = Ie(Number.prototype.toString), yu = Ie(Boolean.prototype.toString), Ws = typeof BigInt > "u" ? null : Ie(BigInt.prototype.toString), qs = typeof Symbol > "u" ? null : Ie(Symbol.prototype.toString), ot = Ie(Object.prototype.hasOwnProperty), Dn = Ie(Object.prototype.toString), Be = Ie(RegExp.prototype.test), Zt = _u(TypeError);
function Ie(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return wi(e, t, r);
  };
}
function _u(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ci(e, n);
  };
}
function le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fn;
  if ($s && $s(e, null), !Sn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (fu(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function vu(e) {
  for (let t = 0; t < e.length; t++)
    ot(e, t) || (e[t] = null);
  return e;
}
function ut(e) {
  const t = yn(null);
  for (const r of hl(e)) {
    var n = cu(r, 2);
    const i = n[0], s = n[1];
    ot(e, i) && (Sn(s) ? t[i] = vu(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ut(s) : t[i] = s);
  }
  return t;
}
function Tu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return bu(e);
    case "boolean":
      return yu(e);
    case "bigint":
      return Ws ? Ws(e) : "0";
    case "symbol":
      return qs ? qs(e) : "Symbol()";
    case "undefined":
      return Dn(e);
    case "function":
    case "object": {
      if (e === null)
        return Dn(e);
      const t = e, n = ht(t, "toString");
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
function ht(e, t) {
  for (; e !== null; ) {
    const r = pu(e, t);
    if (r) {
      if (r.get)
        return Ie(r.get);
      if (typeof r.value == "function")
        return Ie(r.value);
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
    return Be(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ks = Me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ui = Me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fi = Me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Eu = Me(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), di = Me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Au = Me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gs = Me(["#text"]), Ys = Me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pi = Me(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xs = Me(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pr = Me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xu = ke(/{{[\w\W]*|^[\w\W]*}}/g), wu = ke(/<%[\w\W]*|^[\w\W]*%>/g), Cu = ke(/\${[\w\W]*/g), Ou = ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ru = ke(/^aria-[\-\w]+$/), Js = ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pu = ke(/^(?:\w+script|data):/i), Nu = ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Iu = ke(/^html$/i), Du = ke(/^[a-z][.\w]*(-[.\w]+)+$/i), Zs = ke(/<[/\w!]/g), Qs = ke(/<[/\w]/g), Mu = ke(/<\/no(script|embed|frames)/i), Lu = ke(/\/>/i), ct = {
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
}, gl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Fu = Me(le({}, gl)), Uu = (function() {
  const e = {};
  return en(gl, (t) => {
    e[t] = ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Me(e);
})(), ku = function() {
  return typeof window > "u" ? null : window;
}, Hu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
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
}, zt = function(t, n, r, i) {
  return ot(t, n) && Sn(t[n]) ? le(i.base ? ut(i.base) : {}, t[n], i.transform) : r;
}, hi = function(t, n, r) {
  const i = ot(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? ut(i) : r();
};
function bl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ku();
  const t = (O) => bl(O);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ct.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, g = e.NamedNodeMap;
  g === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, T = e.trustedTypes, R = l.prototype, U = ht(R, "cloneNode"), J = ht(R, "remove"), k = ht(R, "nextSibling"), Q = ht(R, "childNodes"), z = ht(R, "parentNode"), D = ht(R, "shadowRoot"), G = ht(R, "attributes"), L = o && o.prototype ? ht(o.prototype, "nodeType") : null, oe = o && o.prototype ? ht(o.prototype, "nodeName") : null, Re = o && o.prototype ? ht(o.prototype, "ownerDocument") : null, Ae = function(a) {
    return L ? L(a) : a.nodeType;
  }, K = function(a) {
    return oe ? oe(a) : a.nodeName;
  };
  if (typeof s == "function") {
    const O = n.createElement("template");
    O.content && O.content.ownerDocument && (n = O.content.ownerDocument);
  }
  let q, de = "", me, Te = !1, Pe = 0;
  const $e = function() {
    if (Pe > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ve = function(a) {
    $e(), Pe++;
    try {
      return q.createHTML(a);
    } finally {
      Pe--;
    }
  }, Se = function(a) {
    $e(), Pe++;
    try {
      return q.createScriptURL(a);
    } finally {
      Pe--;
    }
  }, ne = function() {
    return Te || (me = Hu(T, i), Te = !0), me;
  }, re = n, ze = re.implementation, lt = re.createNodeIterator, et = re.createDocumentFragment, Le = re.getElementsByTagName, _t = r.importNode;
  let ae = eo();
  t.isSupported = typeof hl == "function" && typeof z == "function" && ze && ze.createHTMLDocument !== void 0;
  const vt = xu, B = wu, C = Cu, m = Ou, be = Ru, tt = Pu, Rt = Nu, u = Du;
  let f = Js, b = null;
  const w = le({}, [...Ks, ...ui, ...fi, ...di, ...Gs]);
  let v = null;
  const A = le({}, [...Ys, ...pi, ...Xs, ...pr]);
  let P = Object.seal(yn(null, {
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
  const S = Object.seal(yn(null, {
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
  let W = !0, M = !0, V = !1, Y = !0, ee = !1, se = !0, ie = !1, Ee = !1, we = null, Ke = null, nt = !1, dt = !1, Gt = !1, Fe = !1, at = !0, xn = !1;
  const wn = "user-content-";
  let Hr = !0, jr = !1, un = {}, fn = null;
  const zi = le({}, [
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
  let Bi = null;
  const Wi = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let qi = null;
  const Ki = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qn = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", Tt = "http://www.w3.org/1999/xhtml";
  let dn = Tt, $r = !1, Vr = null;
  const _l = le({}, [Qn, er, Tt], ci), Gi = Me(["mi", "mo", "mn", "ms", "mtext"]);
  let zr = le({}, Gi);
  const Yi = Me(["annotation-xml"]);
  let Br = le({}, Yi);
  const vl = le({}, ["title", "style", "font", "a", "script"]);
  let Cn = null;
  const Tl = ["application/xhtml+xml", "text/html"], Sl = "text/html";
  let Ne = null, pn = null;
  const El = n.createElement("form"), Xi = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Wr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ut(a), Cn = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Sl : a.PARSER_MEDIA_TYPE, Ne = Cn === "application/xhtml+xml" ? ci : Fn, b = zt(a, "ALLOWED_TAGS", w, {
      transform: Ne
    }), v = zt(a, "ALLOWED_ATTR", A, {
      transform: Ne
    }), Vr = zt(a, "ALLOWED_NAMESPACES", _l, {
      transform: ci
    }), qi = zt(a, "ADD_URI_SAFE_ATTR", Ki, {
      transform: Ne,
      base: Ki
    }), Bi = zt(a, "ADD_DATA_URI_TAGS", Wi, {
      transform: Ne,
      base: Wi
    }), fn = zt(a, "FORBID_CONTENTS", zi, {
      transform: Ne
    }), N = zt(a, "FORBID_TAGS", ut({}), {
      transform: Ne
    }), I = zt(a, "FORBID_ATTR", ut({}), {
      transform: Ne
    }), un = ot(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ut(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, M = a.ALLOW_DATA_ATTR !== !1, V = a.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = a.SAFE_FOR_TEMPLATES || !1, se = a.SAFE_FOR_XML !== !1, ie = a.WHOLE_DOCUMENT || !1, dt = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, Fe = a.RETURN_TRUSTED_TYPE || !1, nt = a.FORCE_BODY || !1, at = a.SANITIZE_DOM !== !1, xn = a.SANITIZE_NAMED_PROPS || !1, Hr = a.KEEP_CONTENT !== !1, jr = a.IN_PLACE || !1, f = Su(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Js, dn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : Tt, zr = hi(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => le({}, Gi)
      // Default built-in map
    ), Br = hi(
      a,
      "HTML_INTEGRATION_POINTS",
      () => le({}, Yi)
      // Default built-in map
    );
    const h = hi(a, "CUSTOM_ELEMENT_HANDLING", () => yn(null));
    if (P = yn(null), ot(h, "tagNameCheck") && Xi(h.tagNameCheck) && (P.tagNameCheck = h.tagNameCheck), ot(h, "attributeNameCheck") && Xi(h.attributeNameCheck) && (P.attributeNameCheck = h.attributeNameCheck), ot(h, "allowCustomizedBuiltInElements") && typeof h.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = h.allowCustomizedBuiltInElements), ke(P), ee && (M = !1), Gt && (dt = !0), un && (b = le({}, Gs), v = yn(null), un.html === !0 && (le(b, Ks), le(v, Ys)), un.svg === !0 && (le(b, ui), le(v, pi), le(v, pr)), un.svgFilters === !0 && (le(b, fi), le(v, pi), le(v, pr)), un.mathMl === !0 && (le(b, di), le(v, Xs), le(v, pr))), S.tagCheck = null, S.attributeCheck = null, ot(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? S.tagCheck = a.ADD_TAGS : Sn(a.ADD_TAGS) && (b === w && (b = ut(b)), le(b, a.ADD_TAGS, Ne))), ot(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? S.attributeCheck = a.ADD_ATTR : Sn(a.ADD_ATTR) && (v === A && (v = ut(v)), le(v, a.ADD_ATTR, Ne))), ot(a, "ADD_FORBID_CONTENTS") && Sn(a.ADD_FORBID_CONTENTS) && (fn === zi && (fn = ut(fn)), le(fn, a.ADD_FORBID_CONTENTS, Ne)), Hr && (b["#text"] = !0), ie && le(b, ["html", "head", "body"]), b.table && (le(b, ["tbody"]), delete N.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const x = q;
      q = a.TRUSTED_TYPES_POLICY;
      try {
        de = Ve("");
      } catch (F) {
        throw q = x, F;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (q = void 0, de = "") : (q === void 0 && (q = ne()), q && typeof de == "string" && (de = Ve("")));
    Me && Me(a), pn = a;
  }, Ji = le({}, [...ui, ...fi, ...Eu]), Zi = le({}, [...di, ...Au]), Al = function(a, h, x) {
    return h.namespaceURI === Tt ? a === "svg" : h.namespaceURI === Qn ? a === "svg" && (x === "annotation-xml" || zr[x]) : !!Ji[a];
  }, xl = function(a, h, x) {
    return h.namespaceURI === Tt ? a === "math" : h.namespaceURI === er ? a === "math" && Br[x] : !!Zi[a];
  }, wl = function(a, h, x) {
    return h.namespaceURI === er && !Br[x] || h.namespaceURI === Qn && !zr[x] ? !1 : !Zi[a] && (vl[a] || !Ji[a]);
  }, Cl = function(a) {
    let h = z(a);
    (!h || !h.tagName) && (h = {
      namespaceURI: dn,
      tagName: "template"
    });
    const x = Fn(a.tagName), F = Fn(h.tagName);
    return Vr[a.namespaceURI] ? a.namespaceURI === er ? Al(x, h, F) : a.namespaceURI === Qn ? xl(x, h, F) : a.namespaceURI === Tt ? wl(x, h, F) : !!(Cn === "application/xhtml+xml" && Vr[a.namespaceURI]) : !1;
  }, Vt = function(a) {
    Nn(t.removed, {
      element: a
    });
    try {
      z(a).removeChild(a);
    } catch {
      if (J(a), !z(a))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Qi = function(a, h, x) {
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
    const h = Q(a);
    if (h) {
      const F = [];
      en(h, ($) => {
        Nn(F, $);
      }), en(F, ($) => {
        try {
          J($);
        } catch {
        }
      });
    }
    const x = G(a);
    if (x)
      for (let F = x.length - 1; F >= 0; --F) {
        const $ = x[F], Z = $ && $.name;
        typeof Z == "string" && Qi(a, $, Z);
      }
  }, Yt = function(a, h, x) {
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
      if (dt || Gt)
        try {
          Vt(h);
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
        typeof $ != "string" || v[Ne($)] || Qi(a, F, $);
      }
  }, nr = function(a) {
    const h = [a];
    for (; h.length > 0; ) {
      const x = h.pop();
      Ae(x) === ct.element && Ol(x);
      const $ = Q(x);
      if ($)
        for (let Z = $.length - 1; Z >= 0; --Z)
          h.push($[Z]);
    }
  }, es = function(a, h) {
    return se ? a === "patchsrc" ? !0 : a === "for" && h !== "label" && h !== "output" : !1;
  }, Rl = function(a) {
    if (!se)
      return;
    const h = [a];
    for (; h.length > 0; ) {
      const x = h.pop(), F = Ae(x);
      if (F === ct.processingInstruction || F === ct.comment && Be(Qs, x.data)) {
        try {
          J(x);
        } catch {
        }
        continue;
      }
      if (F === ct.element) {
        const Z = x, ye = Ne(K(x));
        try {
          Z.hasAttribute && Z.hasAttribute("patchsrc") && Z.removeAttribute("patchsrc"), Z.hasAttribute && Z.hasAttribute("for") && es("for", ye) && Z.removeAttribute("for");
        } catch {
        }
      }
      const $ = Q(x);
      if ($)
        for (let Z = $.length - 1; Z >= 0; --Z)
          h.push($[Z]);
    }
  }, ts = function(a) {
    let h = null, x = null;
    if (nt)
      a = "<remove></remove>" + a;
    else {
      const Z = zs(a, /^[\r\n\t ]+/);
      x = Z && Z[0];
    }
    Cn === "application/xhtml+xml" && dn === Tt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const F = q ? Ve(a) : a;
    if (dn === Tt)
      try {
        h = new d().parseFromString(F, Cn);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = ze.createDocument(dn, "template", null);
      try {
        h.documentElement.innerHTML = $r ? de : F;
      } catch {
      }
    }
    const $ = h.body || h.documentElement;
    return a && x && $.insertBefore(n.createTextNode(x), $.childNodes[0] || null), dn === Tt ? Le.call(h, ie ? "html" : "body")[0] : ie ? h.documentElement : $;
  }, ns = function(a) {
    const h = Re ? Re(a) : a.ownerDocument;
    return lt.call(
      h || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, rr = function(a) {
    return a = In(a, vt, " "), a = In(a, B, " "), a = In(a, C, " "), a;
  }, qr = function(a) {
    var h;
    a.normalize();
    const x = Re ? Re(a) : a.ownerDocument, F = lt.call(
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
    Z && en(Z, (ye) => {
      hn(ye.content) && qr(ye.content);
    });
  }, ir = function(a) {
    const h = oe ? oe(a) : null;
    return typeof h != "string" || Ne(h) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    a.childNodes !== Q(a);
  }, hn = function(a) {
    if (!L || typeof a != "object" || a === null)
      return !1;
    try {
      return L(a) === ct.documentFragment;
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
  function St(O, a, h) {
    O.length !== 0 && en(O, (x) => {
      x.call(t, a, h, pn);
    });
  }
  const Pl = function(a, h) {
    return !!(se && a.hasChildNodes() && !On(a.firstElementChild) && Be(Zs, a.textContent) && Be(Zs, a.innerHTML) || se && a.namespaceURI === Tt && Fu[h] && (On(a.firstElementChild) || typeof a.textContent == "string" && Be(Uu[h], a.textContent)) || a.nodeType === ct.processingInstruction || se && a.nodeType === ct.comment && Be(Qs, a.data));
  }, sr = function(a, h) {
    if (a instanceof RegExp)
      return Be(a, h);
    if (a instanceof Function) {
      for (var x = arguments.length, F = new Array(x > 2 ? x - 2 : 0), $ = 2; $ < x; $++)
        F[$ - 2] = arguments[$];
      return !!a(h, ...F);
    }
    return !1;
  }, Nl = function(a, h, x) {
    if (!N[h] && ls(h) && sr(P.tagNameCheck, h))
      return !1;
    if (Hr && !fn[h]) {
      const F = z(a), $ = Q(a);
      if ($ && F) {
        const Z = $.length;
        for (let ye = Z - 1; ye >= 0; --ye) {
          const xe = a === x ? U($[ye], !0) : $[ye];
          F.insertBefore(xe, k(a));
        }
      }
    }
    return Vt(a), !0;
  }, rs = function(a, h, x, F) {
    return a.length === 0 ? h : h === x || h === F ? ut(h) : h;
  }, is = function(a, h) {
    return a === h || z(a) !== null ? !1 : (jr && nr(a), !0);
  }, ss = function(a, h) {
    if (St(ae.beforeSanitizeElements, a, null), is(a, h))
      return !0;
    if (ir(a))
      return Vt(a), !0;
    const x = Ne(K(a));
    if (b = rs(ae.uponSanitizeElement, b, w, we), St(ae.uponSanitizeElement, a, {
      tagName: x,
      allowedTags: b
    }), is(a, h))
      return !0;
    if (Pl(a, x))
      return Vt(a), !0;
    if (N[x] || !(S.tagCheck instanceof Function && S.tagCheck(x)) && !b[x]) {
      const $ = Nl(a, x, h);
      return $ === !1 && St(ae.afterSanitizeElements, a, null), $;
    }
    if (Ae(a) === ct.element && !Cl(a) || (x === "noscript" || x === "noembed" || x === "noframes") && Be(Mu, a.innerHTML))
      return Vt(a), !0;
    if (ee && a.nodeType === ct.text) {
      const $ = rr(a.textContent);
      a.textContent !== $ && (Nn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = $);
    }
    return St(ae.afterSanitizeElements, a, null), !1;
  }, os = function(a, h, x) {
    if (I[h] || es(h, a) || at && (h === "id" || h === "name") && (x in n || x in El))
      return !1;
    const F = v[h] || S.attributeCheck instanceof Function && S.attributeCheck(h, a);
    return M && Be(m, h) || W && Be(be, h) ? !0 : F ? qi[h] || Be(f, In(x, Rt, "")) || (h === "src" || h === "xlink:href" || h === "href") && a !== "script" && Bs(x, "data:") === 0 && Bi[a] || V && !Be(tt, In(x, Rt, "")) ? !0 : !x : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ls(a) && sr(P.tagNameCheck, a) && sr(P.attributeNameCheck, h, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      h === "is" && P.allowCustomizedBuiltInElements && sr(P.tagNameCheck, x)
    );
  }, Il = le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ls = function(a) {
    return !Il[Fn(a)] && Be(u, a);
  }, Dl = function(a, h, x, F) {
    if (q && typeof T == "object" && typeof T.getAttributeType == "function" && !x)
      switch (T.getAttributeType(a, h)) {
        case "TrustedHTML":
          return Ve(F);
        case "TrustedScriptURL":
          return Se(F);
      }
    return F;
  }, Ml = function(a, h, x, F) {
    try {
      x ? a.setAttributeNS(x, h, F) : a.setAttribute(h, F), ir(a) ? Vt(a) : Vs(t.removed);
    } catch {
      Yt(h, a);
    }
  }, as = function(a) {
    St(ae.beforeSanitizeAttributes, a, null);
    const h = a.attributes;
    if (!h || ir(a))
      return;
    v = rs(ae.uponSanitizeAttribute, v, A, Ke);
    const x = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: v,
      forceKeepAttr: void 0
    };
    let F = h.length;
    const $ = Ne(a.nodeName);
    for (; F--; ) {
      const Z = h[F], ye = Z.name, xe = Z.namespaceURI, rt = Z.value, it = Ne(ye), Gr = rt;
      let Ge = ye === "value" ? Gr : gu(Gr);
      if (x.attrName = it, x.attrValue = Ge, x.keepAttr = !0, x.forceKeepAttr = void 0, St(ae.uponSanitizeAttribute, a, x), Ge = x.attrValue, xn && (it === "id" || it === "name") && Bs(Ge, wn) !== 0 && (Yt(ye, a, Z), Ge = wn + Ge), se && Be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ge)) {
        Yt(ye, a, Z);
        continue;
      }
      if (it === "attributename" && zs(Ge, "href")) {
        Yt(ye, a, Z);
        continue;
      }
      if (!x.forceKeepAttr) {
        if (!x.keepAttr) {
          Yt(ye, a, Z);
          continue;
        }
        if (!Y && Be(Lu, Ge)) {
          Yt(ye, a, Z);
          continue;
        }
        if (ee && (Ge = rr(Ge)), !os($, it, Ge)) {
          Yt(ye, a, Z);
          continue;
        }
        Ge = Dl($, it, xe, Ge), Ge !== Gr && Ml(a, ye, xe, Ge);
      }
    }
    St(ae.afterSanitizeAttributes, a, null);
  }, or = function(a) {
    let h = null;
    const x = ns(a);
    for (St(ae.beforeSanitizeShadowDOM, a, null); h = x.nextNode(); )
      if (St(ae.uponSanitizeShadowNode, h, null), ss(h, a), as(h), hn(h.content) && or(h.content), Ae(h) === ct.element) {
        const F = D(h);
        hn(F) && (Kr(F), or(F));
      }
    St(ae.afterSanitizeShadowDOM, a, null);
  }, Kr = function(a) {
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
      const F = x.node, Z = Ae(F) === ct.element, ye = Q(F);
      if (ye)
        for (let xe = ye.length - 1; xe >= 0; --xe)
          h.push({
            node: ye[xe],
            shadow: null
          });
      if (Z) {
        const xe = oe ? oe(F) : null;
        if (typeof xe == "string" && Ne(xe) === "template") {
          const rt = F.content;
          hn(rt) && h.push({
            node: rt,
            shadow: null
          });
        }
      }
      if (Z) {
        const xe = D(F);
        hn(xe) && h.push({
          node: null,
          shadow: xe
        }, {
          node: xe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(O) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = null, x = null, F = null, $ = null;
    if ($r = !O, $r && (O = "<!-->"), typeof O != "string" && !On(O) && (O = Tu(O), typeof O != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return O;
    Ee ? (b = we, v = Ke) : Wr(a), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (b = ut(b)), ae.uponSanitizeAttribute.length > 0 && (v = ut(v)), t.removed = [];
    const Z = jr && typeof O != "string" && On(O);
    if (Z) {
      Rl(O);
      const rt = K(O);
      if (typeof rt == "string") {
        const it = Ne(rt);
        if (!b[it] || N[it])
          throw tr(O), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (ir(O))
        throw tr(O), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Kr(O);
      } catch (it) {
        throw tr(O), it;
      }
    } else if (On(O))
      h = ts("<!---->"), x = h.ownerDocument.importNode(O, !0), x.nodeType === ct.element && x.nodeName === "BODY" || x.nodeName === "HTML" ? h = x : h.appendChild(x), Kr(x);
    else {
      if (!dt && !ee && !ie && // eslint-disable-next-line unicorn/prefer-includes
      O.indexOf("<") === -1)
        return q && Fe ? Ve(O) : O;
      if (h = ts(O), !h)
        return dt ? null : Fe ? de : "";
    }
    h && nt && Vt(h.firstChild);
    const ye = Z ? O : h;
    try {
      const rt = ns(ye);
      for (; F = rt.nextNode(); )
        ss(F, ye), as(F), hn(F.content) && or(F.content);
    } catch (rt) {
      throw Z && (tr(O), en(t.removed, (it) => {
        it.element && nr(it.element);
      })), rt;
    }
    if (Z)
      return en(t.removed, (rt) => {
        rt.element && nr(rt.element);
      }), ee && qr(O), O;
    if (dt) {
      if (ee && qr(h), Gt)
        for ($ = et.call(h.ownerDocument); h.firstChild; )
          $.appendChild(h.firstChild);
      else
        $ = h;
      return (v.shadowroot || v.shadowrootmode) && ($ = _t.call(r, $, !0)), $;
    }
    let xe = ie ? h.outerHTML : h.innerHTML;
    return ie && b["!doctype"] && h.ownerDocument && h.ownerDocument.doctype && h.ownerDocument.doctype.name && Be(Iu, h.ownerDocument.doctype.name) && (xe = "<!DOCTYPE " + h.ownerDocument.doctype.name + `>
` + xe), ee && (xe = rr(xe)), q && Fe ? Ve(xe) : xe;
  }, t.setConfig = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wr(O), Ee = !0, we = b, Ke = v;
  }, t.clearConfig = function() {
    pn = null, Ee = !1, we = null, Ke = null, q = me, de = "";
  }, t.isValidAttribute = function(O, a, h) {
    pn || Wr({});
    const x = Ne(O), F = Ne(a);
    return os(x, F, h);
  }, t.addHook = function(O, a) {
    typeof a == "function" && ot(ae, O) && Nn(ae[O], a);
  }, t.removeHook = function(O, a) {
    if (ot(ae, O)) {
      if (a !== void 0) {
        const h = hu(ae[O], a);
        return h === -1 ? void 0 : mu(ae[O], h, 1)[0];
      }
      return Vs(ae[O]);
    }
  }, t.removeHooks = function(O) {
    ot(ae, O) && (ae[O] = []);
  }, t.removeAllHooks = function() {
    ae = eo();
  }, t;
}
var ju = bl();
function $u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mi, to;
function Vu() {
  if (to) return mi;
  to = 1;
  var e = /["'&<>]/;
  mi = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, o = "", l = 0, c = 0;
    for (l = i.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
        case 34:
          s = "&quot;";
          break;
        case 38:
          s = "&amp;";
          break;
        case 39:
          s = "&#39;";
          break;
        case 60:
          s = "&lt;";
          break;
        case 62:
          s = "&gt;";
          break;
        default:
          continue;
      }
      c !== l && (o += r.substring(c, l)), c = l + 1, o += s;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return mi;
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
function p(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, c = (k) => k, g = (l.sanitize ? ju.sanitize : c) || c, d = l.escape ? no : c, T = (k) => typeof k == "string" || typeof k == "number", R = (k, Q, z) => k.replace(/%n/g, "" + z).replace(/{([^{}]*)}/g, (D, G) => {
    if (Q === void 0 || !(G in Q))
      return d(D);
    const L = Q[G];
    return T(L) ? d(`${L}`) : typeof L == "object" && T(L.value) ? (L.escape !== !1 ? no : c)(`${L.value}`) : d(D);
  });
  let J = (i?.bundle ?? Bu(e)).translations[t] || t;
  return J = Array.isArray(J) ? J[0] : J, g(typeof s == "object" || o !== void 0 ? R(
    J,
    s,
    o
  ) : J);
}
const Wu = { class: "library-vue-catalogue" }, qu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Ku = { class: "library-catalogue-header" }, Gu = { id: "library-catalogue-heading" }, Yu = { class: "library-muted" }, Xu = ["aria-label"], Ju = ["href"], Zu = ["href"], Qu = ["href"], ef = ["href"], tf = ["aria-label"], nf = ["name", "value"], rf = { class: "library-quick-filter-search" }, sf = { value: "title" }, of = { value: "recent" }, lf = { value: "publicationDate" }, af = { value: "publication" }, cf = { value: "lastOpened" }, uf = { value: "format" }, ff = { value: "" }, df = { value: "1" }, pf = ["value"], hf = ["value"], mf = ["aria-label"], gf = ["aria-label"], bf = { class: "library-filter-panel" }, yf = { class: "library-filter-panel-summary" }, _f = ["aria-label"], vf = { value: "" }, Tf = ["value"], Sf = { value: "" }, Ef = ["value"], Af = { value: "" }, xf = ["value"], wf = { value: "" }, Cf = ["value"], Of = { value: "" }, Rf = ["value"], Pf = { value: "" }, Nf = ["value"], If = { value: "" }, Df = ["value"], Mf = { value: "" }, Lf = ["value"], Ff = { value: "" }, Uf = ["value"], kf = { value: "" }, Hf = ["value"], jf = { value: "" }, $f = { value: "1" }, Vf = { value: "" }, zf = { value: "1" }, Bf = { value: "title" }, Wf = { value: "recent" }, qf = { value: "publicationDate" }, Kf = { value: "publication" }, Gf = { value: "lastOpened" }, Yf = { value: "format" }, Xf = ["value"], Jf = ["value"], Zf = ["aria-label"], Qf = ["aria-label"], ed = ["href"], td = { class: "library-muted library-filter-result-summary" }, nd = { key: 0 }, rd = { href: "?" }, id = ["aria-label"], sd = ["href", "aria-label"], od = ["aria-label"], ld = { class: "library-pagination-range" }, ad = { key: 0 }, cd = ["href"], ud = {
  key: 1,
  class: "library-muted"
}, fd = ["href"], dd = {
  key: 3,
  class: "library-muted"
}, pd = {
  key: 1,
  class: "library-periodical-groups"
}, hd = { class: "library-periodical-groups-summary" }, md = { id: "library-periodical-groups-heading" }, gd = { class: "library-muted" }, bd = ["href"], yd = { class: "library-muted" }, _d = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, vd = { class: "library-periodical-groups-summary" }, Td = { id: "library-periodical-groups-empty-heading" }, Sd = { class: "library-muted" }, Ed = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Ad = { class: "library-muted" }, xd = { class: "library-empty-actions" }, wd = {
  href: "?",
  class: "button secondary"
}, Cd = ["href"], Od = {
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
}, rp = { class: "library-cover-actions" }, ip = ["href"], sp = ["href"], op = ["href"], lp = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], i = /* @__PURE__ */ nn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ nn((i.items || []).map((B) => ({ ...B }))), o = Ce(() => s), l = Ce(() => i.shelves || []), c = Ce(() => i.formats || []), g = Ce(() => i.publications || []), d = Ce(() => i.publicationSummaries || []), T = Ce(() => i.publicationYears || []), R = Ce(() => i.creators || []), U = Ce(() => i.scanStatuses || []), J = Ce(() => i.workflowStatuses || []), k = Ce(() => i.genres || []), Q = Ce(() => i.classifications || []), z = Ce(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ nn({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      sort: i.activeFilters?.sort || "title"
    }), G = Ce(() => i.settingsUrl || ""), L = Ce(() => i.requestToken || ""), oe = Ce(() => i.metadataExportUrl || ""), Re = Ce(() => i.metadataSidecarManifestUrl || ""), Ae = Ce(() => i.metadataSidecarBundleUrl || ""), K = Ce(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), q = Ce(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), de = {
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
    }, me = Ce(() => Object.entries(de).map(([B, C]) => ({ key: B, label: C, value: D[B] || "" })).filter((B) => String(B.value).trim() !== "")), Te = Ce(() => Object.entries(D).filter(([B, C]) => !["q", "sort", "starred"].includes(B) && String(C || "").trim() !== "").map(([B, C]) => ({ key: B, value: C }))), Pe = /* @__PURE__ */ nn({});
    let $e = null;
    function Ve(B) {
      const C = new URLSearchParams(new FormData(B));
      return C.delete("page"), C;
    }
    function Se(B) {
      s.splice(0, s.length, ...(B.items || []).map((C) => ({ ...C })));
      for (const C of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(B, C) && (i[C] = B[C]);
      Object.assign(D, B.activeFilters || {});
    }
    async function ne(B) {
      const C = B?.currentTarget?.tagName === "FORM" ? B.currentTarget : B?.currentTarget?.form;
      if (!C) return;
      const be = Ve(C).toString(), tt = be ? `?${be}` : "", Rt = await fetch(K.value + tt, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Rt.ok) {
        C.submit();
        return;
      }
      Se(await Rt.json()), history.replaceState({}, "", be ? `?${be}` : window.location.pathname);
    }
    function re(B) {
      ne(B);
    }
    function ze(B) {
      window.clearTimeout($e), $e = window.setTimeout(() => re(B), 350);
    }
    function lt(B) {
      const C = new URLSearchParams(window.location.search);
      C.delete(B), C.delete("page");
      const m = C.toString();
      return m ? `?${m}` : "?";
    }
    function et(B) {
      return String(B || "").toUpperCase();
    }
    function Le(B) {
      return B.nextcloudTags || [];
    }
    function _t(B) {
      const C = new URLSearchParams(window.location.search);
      return C.set("publication", B), C.set("sort", "publication"), C.delete("page"), `?${C.toString()}`;
    }
    function ae(B, C) {
      Pe[B] = !!C?.currentTarget?.open;
    }
    async function vt(B, C) {
      const m = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!m || !B?.starUrl) return;
      const be = !!B.starred;
      B.starred = !be;
      try {
        (await fetch(B.starUrl, {
          method: "POST",
          body: new FormData(m),
          credentials: "same-origin"
        })).ok || (B.starred = be);
      } catch {
        B.starred = be;
      }
    }
    return (B, C) => (H(), j("div", Wu, [
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
              href: G.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, _(E(p)("library", "Settings")), 9, Ju),
            oe.value ? (H(), j("a", {
              key: 0,
              href: oe.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, _(E(p)("library", "Export corrected metadata")), 9, Zu)) : De("", !0),
            Re.value ? (H(), j("a", {
              key: 1,
              href: Re.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, _(E(p)("library", "Sidecar manifest")), 9, Qu)) : De("", !0),
            Ae.value ? (H(), j("a", {
              key: 2,
              href: Ae.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, _(E(p)("library", "Sidecar ZIP")), 9, ef)) : De("", !0)
          ], 8, Xu)
        ]),
        y("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": E(p)("library", "Quick catalogue filters"),
          onSubmit: dr(ne, ["prevent"])
        }, [
          (H(!0), j(_e, null, He(Te.value, (m) => (H(), j("input", {
            key: m.key,
            type: "hidden",
            name: m.key,
            value: m.value
          }, null, 8, nf))), 128)),
          y("label", rf, [
            fe(_(E(p)("library", "Search")) + " ", 1),
            Ue(y("input", {
              "onUpdate:modelValue": C[0] || (C[0] = (m) => D.q = m),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: ze
            }, null, 544), [
              [ai, D.q]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Sort")) + " ", 1),
            Ue(y("select", {
              "onUpdate:modelValue": C[1] || (C[1] = (m) => D.sort = m),
              name: "sort",
              onChange: ne
            }, [
              y("option", sf, _(E(p)("library", "Title")), 1),
              y("option", of, _(E(p)("library", "Recently added")), 1),
              y("option", lf, _(E(p)("library", "Publication date")), 1),
              y("option", af, _(E(p)("library", "Series")), 1),
              y("option", cf, _(E(p)("library", "Recently opened")), 1),
              y("option", uf, _(E(p)("library", "Format")), 1)
            ], 544), [
              [Ye, D.sort]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Starred")) + " ", 1),
            Ue(y("select", {
              "onUpdate:modelValue": C[2] || (C[2] = (m) => D.starred = m),
              name: "starred",
              onChange: ne
            }, [
              y("option", ff, _(E(p)("library", "All")), 1),
              y("option", df, _(E(p)("library", "Starred")), 1)
            ], 544), [
              [Ye, D.starred]
            ])
          ]),
          y("label", null, [
            fe(_(E(p)("library", "Size")) + " ", 1),
            y("select", {
              value: z.value.limit,
              name: "limit",
              onChange: ne
            }, [
              (H(), j(_e, null, He(r, (m) => y("option", {
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
          }, _(E(p)("library", "Clear all")), 9, gf)
        ], 40, tf),
        y("details", bf, [
          y("summary", yf, _(E(p)("library", "Show catalogue filters")), 1),
          y("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": E(p)("library", "Catalogue search and filters"),
            onSubmit: dr(ne, ["prevent"])
          }, [
            y("label", null, [
              fe(_(E(p)("library", "Search title / author")) + " ", 1),
              Ue(y("input", {
                "onUpdate:modelValue": C[3] || (C[3] = (m) => D.q = m),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [ai, D.q]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Type")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[4] || (C[4] = (m) => D.type = m),
                name: "type"
              }, [
                y("option", vf, _(E(p)("library", "All types")), 1),
                (H(), j(_e, null, He(n, (m) => y("option", {
                  key: m,
                  value: m
                }, _(m), 9, Tf)), 64))
              ], 512), [
                [Ye, D.type]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Series / periodical")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[5] || (C[5] = (m) => D.publication = m),
                name: "publication"
              }, [
                y("option", Sf, _(E(p)("library", "All series and periodicals")), 1),
                (H(!0), j(_e, null, He(g.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Ef))), 128))
              ], 512), [
                [Ye, D.publication]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Publication year")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (m) => D.year = m),
                name: "year"
              }, [
                y("option", Af, _(E(p)("library", "All years")), 1),
                (H(!0), j(_e, null, He(T.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, xf))), 128))
              ], 512), [
                [Ye, D.year]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Creator")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (m) => D.creator = m),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                y("option", wf, _(E(p)("library", "All creators")), 1),
                (H(!0), j(_e, null, He(R.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Cf))), 128))
              ], 512), [
                [Ye, D.creator]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Nextcloud tag")) + " ", 1),
              Ue(y("input", {
                "onUpdate:modelValue": C[8] || (C[8] = (m) => D.tag = m),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [ai, D.tag]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Format")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (m) => D.format = m),
                name: "format"
              }, [
                y("option", Of, _(E(p)("library", "All formats")), 1),
                (H(!0), j(_e, null, He(c.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(et(m)), 9, Rf))), 128))
              ], 512), [
                [Ye, D.format]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Shelf")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[10] || (C[10] = (m) => D.shelf = m),
                name: "shelf"
              }, [
                y("option", Pf, _(E(p)("library", "All shelves")), 1),
                (H(!0), j(_e, null, He(l.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Nf))), 128))
              ], 512), [
                [Ye, D.shelf]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Scan status")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (m) => D.status = m),
                name: "status"
              }, [
                y("option", If, _(E(p)("library", "All scan statuses")), 1),
                (H(!0), j(_e, null, He(U.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Df))), 128))
              ], 512), [
                [Ye, D.status]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Workflow status")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (m) => D.workflowStatus = m),
                name: "workflowStatus"
              }, [
                y("option", Mf, _(E(p)("library", "All workflow statuses")), 1),
                (H(!0), j(_e, null, He(J.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Lf))), 128))
              ], 512), [
                [Ye, D.workflowStatus]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Genre")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (m) => D.genre = m),
                name: "genre"
              }, [
                y("option", Ff, _(E(p)("library", "All genres")), 1),
                (H(!0), j(_e, null, He(k.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Uf))), 128))
              ], 512), [
                [Ye, D.genre]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Classification")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (m) => D.classification = m),
                name: "classification"
              }, [
                y("option", kf, _(E(p)("library", "All classifications")), 1),
                (H(!0), j(_e, null, He(Q.value, (m) => (H(), j("option", {
                  key: m,
                  value: m
                }, _(m), 9, Hf))), 128))
              ], 512), [
                [Ye, D.classification]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Scanner conflicts")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[15] || (C[15] = (m) => D.scannerConflicts = m),
                name: "scannerConflicts"
              }, [
                y("option", jf, _(E(p)("library", "All metadata")), 1),
                y("option", $f, _(E(p)("library", "Needs review")), 1)
              ], 512), [
                [Ye, D.scannerConflicts]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Starred")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[16] || (C[16] = (m) => D.starred = m),
                name: "starred"
              }, [
                y("option", Vf, _(E(p)("library", "All publications")), 1),
                y("option", zf, _(E(p)("library", "Starred only")), 1)
              ], 512), [
                [Ye, D.starred]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Sort")) + " ", 1),
              Ue(y("select", {
                "onUpdate:modelValue": C[17] || (C[17] = (m) => D.sort = m),
                name: "sort"
              }, [
                y("option", Bf, _(E(p)("library", "Title")), 1),
                y("option", Wf, _(E(p)("library", "Recently added")), 1),
                y("option", qf, _(E(p)("library", "Publication date")), 1),
                y("option", Kf, _(E(p)("library", "Series / periodical")), 1),
                y("option", Gf, _(E(p)("library", "Recently opened")), 1),
                y("option", Yf, _(E(p)("library", "Format")), 1)
              ], 512), [
                [Ye, D.sort]
              ])
            ]),
            y("label", null, [
              fe(_(E(p)("library", "Page size")) + " ", 1),
              y("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (H(), j(_e, null, He(r, (m) => y("option", {
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
              href: q.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, _(E(p)("library", "Review scanner conflicts")), 9, ed)
          ], 40, _f)
        ]),
        y("p", td, [
          fe(_(E(p)("library", "Showing")) + " " + _(z.value.from) + "–" + _(z.value.to) + " " + _(E(p)("library", "of")) + " " + _(z.value.total) + " " + _(E(p)("library", "catalogue items")), 1),
          me.value.length > 0 ? (H(), j("span", nd, [
            C[18] || (C[18] = fe(" · ", -1)),
            y("a", rd, _(E(p)("library", "Clear all filters")), 1)
          ])) : De("", !0)
        ]),
        me.value.length > 0 ? (H(), j("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": E(p)("library", "Active filters")
        }, [
          y("span", null, _(E(p)("library", "Active filters")), 1),
          (H(!0), j(_e, null, He(me.value, (m) => (H(), j("a", {
            key: m.key,
            href: lt(m.key),
            class: "library-filter-chip",
            "aria-label": `${E(p)("library", "Remove filter")}: ${m.label}`
          }, [
            y("strong", null, _(m.label) + ":", 1),
            fe(" " + _(m.value) + " ", 1),
            C[19] || (C[19] = y("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, sd))), 128))
        ], 8, id)) : De("", !0),
        y("nav", {
          class: "library-pagination",
          "aria-label": E(p)("library", "Catalogue pagination")
        }, [
          y("span", ld, [
            fe(_(E(p)("library", "Page")) + " " + _(z.value.page), 1),
            z.value.total > 0 ? (H(), j("span", ad, " · " + _(z.value.from) + "–" + _(z.value.to), 1)) : De("", !0)
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
        d.value.length > 0 ? (H(), j("details", pd, [
          y("summary", hd, _(E(p)("library", "Show top series and periodicals")), 1),
          y("h3", md, _(E(p)("library", "Top series and periodicals")), 1),
          y("p", gd, _(E(p)("library", "Jump into recurring publications with one click.")), 1),
          y("ul", null, [
            (H(!0), j(_e, null, He(d.value, (m) => (H(), j("li", {
              key: m.publication
            }, [
              y("a", {
                href: _t(m.publication)
              }, _(m.publication), 9, bd),
              y("span", yd, _(m.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : d.value.length === 0 ? (H(), j("details", _d, [
          y("summary", vd, _(E(p)("library", "Show top series and periodicals")), 1),
          y("h3", Td, _(E(p)("library", "No series or periodicals found yet")), 1),
          y("p", Sd, _(E(p)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : De("", !0),
        o.value.length === 0 ? (H(), j("div", Ed, [
          y("h3", null, _(E(p)("library", "No catalogue items match")), 1),
          y("p", Ad, _(E(p)("library", "Scan enabled roots or clear the active filters.")), 1),
          y("p", xd, [
            y("a", wd, _(E(p)("library", "Clear all filters")), 1),
            y("a", {
              href: G.value,
              class: "button primary"
            }, _(E(p)("library", "Run a scan from settings")), 9, Cd)
          ])
        ])) : (H(), j("div", Od, [
          (H(!0), j(_e, null, He(o.value, (m) => (H(), j("article", {
            key: m.id,
            class: zn(["library-cover-card", { "library-cover-card--open": Pe[m.id] }])
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
              onSubmit: dr((be) => vt(m, be), ["prevent"])
            }, [
              y("input", {
                type: "hidden",
                name: "requesttoken",
                value: L.value
              }, null, 8, Id),
              C[20] || (C[20] = y("input", {
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
                onClick: dr((be) => vt(m, be), ["prevent"])
              }, _(m.starred ? "★" : "☆"), 11, Md)
            ], 40, Nd),
            y("div", Ld, [
              y("div", Fd, [
                y("h3", null, [
                  m.starred ? (H(), j("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": E(p)("library", "Starred")
                  }, "★", 8, Ud)) : De("", !0),
                  fe(_(m.title), 1)
                ]),
                y("a", {
                  class: "library-cover-read",
                  href: m.openUrl
                }, _(E(p)("library", "Read")), 9, kd)
              ]),
              y("details", {
                class: "library-cover-details",
                onToggle: (be) => ae(m.id, be)
              }, [
                y("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${E(p)("library", "Show details and actions")}: ${m.title}`
                }, _(E(p)("library", "Details")), 9, jd),
                y("div", $d, [
                  m.creators ? (H(), j("p", Vd, _(m.creators), 1)) : De("", !0),
                  y("dl", zd, [
                    y("div", Bd, [
                      y("dt", null, _(E(p)("library", "Type")), 1),
                      y("dd", null, _(m.publicationType), 1)
                    ]),
                    m.publication ? (H(), j("div", Wd, [
                      y("dt", null, _(E(p)("library", "Series")), 1),
                      y("dd", null, _(m.publication), 1)
                    ])) : De("", !0),
                    m.publicationDate ? (H(), j("div", qd, [
                      y("dt", null, _(E(p)("library", "Date")), 1),
                      y("dd", null, _(m.publicationDate), 1)
                    ])) : De("", !0),
                    m.workflowStatus ? (H(), j("div", Kd, [
                      y("dt", null, _(E(p)("library", "Status")), 1),
                      y("dd", null, _(m.workflowStatus), 1)
                    ])) : De("", !0),
                    m.hasScannerConflict ? (H(), j("div", Gd, [
                      y("dt", null, _(E(p)("library", "Review")), 1),
                      y("dd", null, _(m.scannerConflictCount) + " fields", 1)
                    ])) : De("", !0),
                    m.lastOpenedAt ? (H(), j("div", Yd, [
                      y("dt", null, _(E(p)("library", "Last opened")), 1),
                      y("dd", null, _(m.lastOpenedAt), 1)
                    ])) : De("", !0),
                    m.extension ? (H(), j("div", Xd, [
                      y("dt", null, _(E(p)("library", "Format")) + ":", 1),
                      y("dd", null, _(et(m.extension)), 1)
                    ])) : De("", !0),
                    m.shelf ? (H(), j("div", Jd, [
                      y("dt", null, _(E(p)("library", "Shelf")), 1),
                      y("dd", null, _(m.shelf), 1)
                    ])) : De("", !0)
                  ]),
                  m.description ? (H(), j("p", Zd, _(m.description), 1)) : De("", !0),
                  m.scanStatus !== "indexed" || m.scanError ? (H(), j("p", Qd, [
                    fe(" scanStatus: " + _(m.scanStatus || "unknown"), 1),
                    m.scanError ? (H(), j("span", ep, " · scanError: " + _(m.scanError), 1)) : De("", !0)
                  ])) : De("", !0),
                  y("div", tp, [
                    Le(m).length === 0 ? (H(), j("span", np, "No Nextcloud tags")) : (H(!0), j(_e, { key: 1 }, He(Le(m), (be) => (H(), j("span", {
                      key: be.id,
                      class: "library-tag"
                    }, _(be.name), 1))), 128))
                  ]),
                  y("p", rp, [
                    y("a", {
                      href: m.filesUrl
                    }, _(E(p)("library", "Show in Files")), 9, ip),
                    C[21] || (C[21] = fe(" · ", -1)),
                    y("a", {
                      href: m.downloadUrl
                    }, _(E(p)("library", "Download source")), 9, sp),
                    C[22] || (C[22] = fe(" · ", -1)),
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
}, ro = su("library", "catalogue", {}), br = document.querySelector("#library-vue-root"), io = {
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
  for (const i of t) {
    const s = document.createElement("option");
    s.value = ce(i), s.textContent = r(i), ce(i) === ce(n) && (s.selected = !0), e.appendChild(s);
  }
}
function so(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ce(r), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function gn(e, t, n, r, i, s, o = ce) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const g = document.createElement("option");
  g.value = "", g.textContent = i, c.appendChild(g), ap(c, s, r, o), l.appendChild(c), e.appendChild(l);
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
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", p("library", "Catalogue search and filters")), so(r, p("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), gn(r, p("library", "Type"), "type", n.type, p("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, p("library", "Nextcloud tag"), "tag", n.tag, "photography"), gn(r, p("library", "Format"), "format", n.format, p("library", "All formats"), e.formats || [], yl), gn(r, p("library", "Shelf"), "shelf", n.shelf, p("library", "All shelves"), e.shelves || []), gn(r, p("library", "Scan status"), "status", n.status, p("library", "All scan statuses"), e.scanStatuses || []), gn(r, p("library", "Sort"), "sort", n.sort || "title", p("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), gn(r, p("library", "Page size"), "limit", t.limit || 100, p("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", p("library", "Apply catalogue filters")), i.textContent = p("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", p("library", "Clear catalogue filters")), s.textContent = p("library", "Clear"), r.append(i, s), r;
}
function dp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", p("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [T, R] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(T) || ce(R).trim() === "") continue;
    const U = document.createElement("input");
    U.type = "hidden", U.name = T, U.value = ce(R), r.appendChild(U);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = p("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = ce(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", s), o.appendChild(l), r.appendChild(o);
  const c = [
    [p("library", "Sort"), "sort", n.sort || "title", [["title", p("library", "Title")], ["recent", p("library", "Recently added")], ["publicationDate", p("library", "Publication date")], ["publication", p("library", "Series")], ["lastOpened", p("library", "Recently opened")], ["format", p("library", "Format")]]],
    [p("library", "Starred"), "starred", n.starred || "", [["", p("library", "All")], ["1", p("library", "Starred")]]],
    [p("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [T, R, U, J] of c) {
    const k = document.createElement("label");
    k.textContent = T;
    const Q = document.createElement("select");
    Q.name = R;
    for (const [z, D] of J) {
      const G = document.createElement("option");
      G.value = ce(z), G.textContent = ce(D), ce(z) === ce(U) && (G.selected = !0), Q.appendChild(G);
    }
    Q.addEventListener("change", () => r.requestSubmit()), k.appendChild(Q), r.appendChild(k);
  }
  const g = document.createElement("button");
  g.type = "submit", g.className = "button primary", g.setAttribute("aria-label", p("library", "Apply catalogue filters")), g.textContent = p("library", "Apply filters");
  const d = document.createElement("a");
  return d.href = "?", d.className = "button secondary", d.setAttribute("aria-label", p("library", "Clear catalogue filters")), d.textContent = p("library", "Clear all"), r.append(g, d), r;
}
function pp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = ce(e.settingsUrl || ""), s = ce(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("div");
  c.className = "library-catalogue-header";
  const g = document.createElement("div"), d = document.createElement("h2");
  d.id = "library-catalogue-heading", d.textContent = p("library", "Publication catalogue");
  const T = document.createElement("p");
  T.className = "library-muted", T.textContent = p("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), g.append(d, T);
  const R = document.createElement("nav");
  if (R.className = "library-catalogue-toolbar", R.setAttribute("aria-label", p("library", "Library actions")), i) {
    const K = document.createElement("a");
    K.href = i, K.className = "button secondary", K.setAttribute("aria-label", "Open Library settings"), K.textContent = p("library", "Settings"), R.appendChild(K);
  }
  if (s) {
    const K = document.createElement("a");
    K.href = s, K.className = "button secondary", K.setAttribute("aria-label", "Export corrected metadata"), K.textContent = p("library", "Export corrected metadata"), R.appendChild(K);
  }
  if (e.metadataSidecarManifestUrl) {
    const K = document.createElement("a");
    K.href = e.metadataSidecarManifestUrl, K.className = "button secondary", K.setAttribute("aria-label", "Export sidecar manifest"), K.textContent = p("library", "Sidecar manifest"), R.appendChild(K);
  }
  if (e.metadataSidecarBundleUrl) {
    const K = document.createElement("a");
    K.href = e.metadataSidecarBundleUrl, K.className = "button secondary", K.setAttribute("aria-label", "Export sidecar ZIP"), K.textContent = p("library", "Sidecar ZIP"), R.appendChild(K);
  }
  c.append(g, R), l.appendChild(c), l.appendChild(dp(e, r));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const J = document.createElement("summary");
  J.className = "library-filter-panel-summary", J.textContent = p("library", "Show catalogue filters"), U.append(J, fp(e, r)), l.appendChild(U);
  const k = document.createElement("p");
  k.className = "library-muted library-filter-result-summary", k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const Q = document.createElement("a");
  Q.href = "?", Q.textContent = ` ${p("library", "Clear all filters")}`, k.appendChild(Q), l.appendChild(k);
  const z = document.createElement("nav");
  z.className = "library-pagination", z.setAttribute("aria-label", p("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, z.appendChild(D), l.appendChild(z);
  const G = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], L = document.createElement("details");
  L.className = G.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const oe = document.createElement("summary");
  oe.className = "library-periodical-groups-summary", oe.textContent = p("library", "Show top series and periodicals"), L.appendChild(oe);
  const Re = document.createElement("h3");
  Re.textContent = G.length > 0 ? p("library", "Top series and periodicals") : p("library", "No series or periodicals found yet");
  const Ae = document.createElement("p");
  if (Ae.className = "library-muted", Ae.textContent = G.length > 0 ? p("library", "Jump into recurring publications with one click.") : p("library", "Add publication or series names in item details to build this shortcut panel."), L.append(Re, Ae), G.length > 0) {
    const K = document.createElement("ul");
    for (const q of G) {
      const de = document.createElement("li"), me = document.createElement("a");
      me.href = up(ce(q.publication)), me.textContent = ce(q.publication);
      const Te = document.createElement("span");
      Te.className = "library-muted", Te.textContent = `${q.itemCount} items`, de.append(me, Te), K.appendChild(de);
    }
    L.appendChild(K);
  }
  if (l.appendChild(L), n.length === 0) {
    const K = document.createElement("div");
    K.className = "library-empty-content", K.setAttribute("role", "status");
    const q = document.createElement("h3");
    q.textContent = p("library", "No catalogue items match");
    const de = document.createElement("p");
    de.className = "library-muted", de.textContent = p("library", "Scan enabled roots or clear the active filters.");
    const me = document.createElement("p");
    me.className = "library-empty-actions";
    const Te = document.createElement("a");
    Te.href = "?", Te.className = "button secondary", Te.textContent = p("library", "Clear all filters");
    const Pe = document.createElement("a");
    Pe.href = i, Pe.className = "button primary", Pe.textContent = p("library", "Run a scan from settings"), me.append(Te, Pe), K.append(q, de, me), l.appendChild(K);
  } else {
    const K = document.createElement("div");
    K.className = "library-cover-gallery";
    for (const q of n) {
      const de = document.createElement("article");
      de.className = "library-cover-card";
      const me = document.createElement("a");
      me.className = "library-cover-link", me.href = ce(q.openUrl || "#"), me.setAttribute("aria-label", `Read ${ce(q.title || "publication")}`);
      const Te = document.createElement("img");
      Te.className = "library-cover-image", Te.src = ce(q.coverUrl || ""), Te.alt = `Cover for ${ce(q.title || "publication")}`, Te.loading = "lazy", me.appendChild(Te);
      const Pe = cp(e), $e = document.createElement("form");
      $e.method = "post", $e.action = ce(q.starUrl || ""), $e.className = "library-cover-star-form", Pe && $e.appendChild(Pe);
      const Ve = document.createElement("input");
      Ve.type = "hidden", Ve.name = "returnTo", Ve.value = "catalogue";
      const Se = document.createElement("input");
      Se.type = "hidden", Se.name = "starred", Se.value = q.starred ? "0" : "1";
      const ne = document.createElement("button");
      ne.type = "submit", ne.className = q.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ne.setAttribute("aria-pressed", q.starred ? "true" : "false"), ne.setAttribute("aria-label", q.starred ? p("library", "Unstar this publication") : p("library", "Star this publication")), ne.title = q.starred ? p("library", "Unstar this publication") : p("library", "Star this publication"), ne.textContent = q.starred ? "★" : "☆", $e.append(Ve, Se, ne);
      const re = document.createElement("div");
      re.className = "library-cover-summary";
      const ze = document.createElement("h3");
      if (ze.textContent = ce(q.title || "Untitled publication"), re.appendChild(ze), q.creators) {
        const C = document.createElement("p");
        C.className = "library-creator", C.textContent = ce(q.creators), re.appendChild(C);
      }
      const lt = document.createElement("dl");
      lt.className = "library-cover-detail-list";
      const et = [
        ["Type", ce(q.publicationType || "other")],
        ["Format", q.extension ? yl(q.extension) : ""],
        ["Shelf", q.shelf ? ce(q.shelf) : ""]
      ].filter(([, C]) => C !== "");
      for (const [C, m] of et) {
        const be = document.createElement("div");
        be.className = "library-cover-detail-chip";
        const tt = document.createElement("dt");
        tt.textContent = C;
        const Rt = document.createElement("dd");
        Rt.textContent = m, be.append(tt, Rt), lt.appendChild(be);
      }
      re.appendChild(lt);
      const Le = document.createElement("p"), _t = document.createElement("a");
      _t.href = ce(q.openUrl || "#"), _t.textContent = p("library", "Read");
      const ae = document.createElement("a");
      ae.href = ce(q.filesUrl || "#"), ae.textContent = p("library", "Show in Files");
      const vt = document.createElement("a");
      vt.href = ce(q.downloadUrl || "#"), vt.textContent = p("library", "Download source");
      const B = document.createElement("a");
      B.href = ce(q.detailsUrl || "#"), B.textContent = p("library", "Details"), Le.append(_t, document.createTextNode(" · "), ae, document.createTextNode(" · "), vt, document.createTextNode(" · "), B), re.appendChild(Le), de.append(me, $e, re), K.appendChild(de);
    }
    l.appendChild(K);
  }
  return o.appendChild(l), o;
}
if (br)
  try {
    nu(lp, { state: io }).mount(br);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), br.replaceChildren(pp(io));
  }
//# sourceMappingURL=library-main.mjs.map
