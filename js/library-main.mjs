// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const se = {}, dn = [], ct = () => {
}, io = () => !1, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ar = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dl = Object.prototype.hasOwnProperty, ee = (e, t) => Dl.call(e, t), j = Array.isArray, It = (e) => Bn(e) === "[object Map]", Jt = (e) => Bn(e) === "[object Set]", li = (e) => Bn(e) === "[object Date]", W = (e) => typeof e == "function", pe = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", oo = (e) => (ne(e) || W(e)) && W(e.then) && W(e.catch), lo = Object.prototype.toString, Bn = (e) => lo.call(e), Ll = (e) => Bn(e).slice(8, -1), ao = (e) => Bn(e) === "[object Object]", Cs = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mn = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Fl = /-\w/g, Ze = vr(
  (e) => e.replace(Fl, (t) => t.slice(1).toUpperCase())
), Ul = /\B([A-Z])/g, Zt = vr(
  (e) => e.replace(Ul, "-$1").toLowerCase()
), co = vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gr = vr(
  (e) => e ? `on${co(e)}` : ""
), _t = (e, t) => !Object.is(e, t), cr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fo = (e, t, n, r = !1) => {
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
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = pe(r) ? $l(r) : Os(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (pe(e) || ne(e))
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
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const r = Rs(e[n]);
      r && (t += r + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ xs(Vl);
function uo(e) {
  return !!e || e === "";
}
function Bl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Pt(e[r], t[r]);
  return n;
}
function ci(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Pt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Pt(e, t) {
  if (e === t) return !0;
  let n = li(e), r = li(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), r = ft(t), n || r)
    return e === t;
  if (n = j(e), r = j(t), n || r)
    return n && r ? Bl(e, t) : !1;
  if (n = ne(e), r = ne(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = It(e), r = It(t), n || r || (n = Jt(e), r = Jt(t), n || r))
      return n && r ? ci(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const a = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (a && !c || !a && c || !Pt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wl(e, t) {
  return e.findIndex((n) => Pt(n, t));
}
const po = (e) => !!(e && e.__v_isRef === !0), V = (e) => pe(e) ? e : e == null ? "" : j(e) || ne(e) && (e.toString === lo || !W(e.toString)) ? po(e) ? V(e.value) : JSON.stringify(e, ho, 2) : String(e), ho = (e, t) => po(t) ? ho(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Yr(r, i) + " =>"] = s, n),
    {}
  )
} : Jt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yr(n))
} : ft(t) ? Yr(t) : ne(t) && !j(t) && !ao(t) ? String(t) : t, Yr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
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
    this.flags |= 2, fi(this), bo(this);
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
        Ms(t);
      this.deps = this.depsTail = void 0, fi(this), this.onStop && this.onStop(), this.flags &= -2;
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
let go = 0, Nn, Dn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dn, Dn = e;
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
  if (Dn) {
    let t = Dn;
    for (Dn = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = s), Ms(r), Yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
    (t.version === 0 || _t(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ae = n, Qe = r, yo(e), e.flags &= -3;
  }
}
function Ms(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ms(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const Eo = [];
function Et() {
  Eo.push(Qe), Qe = !1;
}
function St() {
  const e = Eo.pop();
  Qe = e === void 0 ? !0 : e;
}
function fi(e) {
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
const hs = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
), kn = /* @__PURE__ */ Symbol(
  ""
);
function Ce(e, t, n) {
  if (Qe && ae) {
    let r = hs.get(e);
    r || hs.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new So()), s.map = r, s.key = n), s.track();
  }
}
function bt(e, t, n, r, s, i) {
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
    const c = j(e), h = c && Cs(n);
    if (c && n === "length") {
      const d = Number(r);
      o.forEach((g, A) => {
        (A === "length" || A === kn || !ft(A) && A >= d) && a(g);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), h && a(o.get(kn)), t) {
        case "add":
          c ? h && a(o.get("length")) : (a(o.get(Yt)), It(e) && a(o.get(ms)));
          break;
        case "delete":
          c || (a(o.get(Yt)), It(e) && a(o.get(ms)));
          break;
        case "set":
          It(e) && a(o.get(Yt));
          break;
      }
  }
  Ps();
}
function ln(e) {
  const t = /* @__PURE__ */ te(e);
  return t === e ? t : (Ce(t, "iterate", kn), /* @__PURE__ */ et(e) ? t : t.map(At));
}
function Cr(e) {
  return Ce(e = /* @__PURE__ */ te(e), "iterate", kn), e;
}
function lt(e, t) {
  return /* @__PURE__ */ Mt(e) ? gn(/* @__PURE__ */ qt(e) ? At(t) : t) : At(t);
}
const Xl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xr(this, Symbol.iterator, (e) => lt(this, e));
  },
  concat(...e) {
    return ln(this).concat(
      ...e.map((t) => j(t) ? ln(t) : t)
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
    return ln(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return An(this, "pop");
  },
  push(...e) {
    return An(this, "push", e);
  },
  reduce(e, ...t) {
    return ui(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ui(this, "reduceRight", e, t);
  },
  shift() {
    return An(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return An(this, "splice", e);
  },
  toReversed() {
    return ln(this).toReversed();
  },
  toSorted(e) {
    return ln(this).toSorted(e);
  },
  toSpliced(...e) {
    return ln(this).toSpliced(...e);
  },
  unshift(...e) {
    return An(this, "unshift", e);
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
  const o = Cr(e), a = o !== e && !/* @__PURE__ */ et(e), c = o[t];
  if (c !== Jl[t]) {
    const g = c.apply(e, i);
    return a ? At(g) : g;
  }
  let h = n;
  o !== e && (a ? h = function(g, A) {
    return n.call(this, lt(e, g), A, e);
  } : n.length > 2 && (h = function(g, A) {
    return n.call(this, g, A, e);
  }));
  const d = c.call(o, h, r);
  return a && s ? s(d) : d;
}
function ui(e, t, n, r) {
  const s = Cr(e), i = s !== e && !/* @__PURE__ */ et(e);
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
  const r = /* @__PURE__ */ te(e);
  Ce(r, "iterate", kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), r[t](...n)) : s;
}
function An(e, t, n = []) {
  Et(), Is();
  const r = (/* @__PURE__ */ te(e))[t].apply(e, n);
  return Ps(), St(), r;
}
const Zl = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), vo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Ql(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ te(this);
  return Ce(t, "has", e), t.hasOwnProperty(e);
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
    const o = j(t);
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
      /* @__PURE__ */ Le(t) ? t : r
    );
    if ((ft(n) ? vo.has(n) : Zl(n)) || (s || Ce(t, "get", n), i))
      return a;
    if (/* @__PURE__ */ Le(a)) {
      const c = o && Cs(n) ? a : a.value;
      return s && ne(c) ? /* @__PURE__ */ _s(c) : c;
    }
    return ne(a) ? s ? /* @__PURE__ */ _s(a) : /* @__PURE__ */ Or(a) : a;
  }
}
class wo extends xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = j(t) && Cs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Mt(i);
      if (!/* @__PURE__ */ et(r) && !/* @__PURE__ */ Mt(r) && (i = /* @__PURE__ */ te(i), r = /* @__PURE__ */ te(r)), !o && /* @__PURE__ */ Le(i) && !/* @__PURE__ */ Le(r))
        return h || (i.value = r), !0;
    }
    const a = o ? Number(n) < t.length : ee(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Le(t) ? t : s
    );
    return t === /* @__PURE__ */ te(s) && c && (a ? _t(r, i) && bt(t, "set", n, r) : bt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ee(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && bt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ft(n) || !vo.has(n)) && Ce(t, "has", n), r;
  }
  ownKeys(t) {
    return Ce(
      t,
      "iterate",
      j(t) ? "length" : Yt
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
    const s = this.__v_raw, i = /* @__PURE__ */ te(s), o = It(i), a = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, h = s[e](...r), d = n ? gs : t ? gn : At;
    return !t && Ce(
      i,
      "iterate",
      c ? ms : Yt
    ), Oe(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: g, done: A } = h.next();
          return A ? { value: g, done: A } : {
            value: a ? [d(g[0]), d(g[1])] : d(g),
            done: A
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
      const i = this.__v_raw, o = /* @__PURE__ */ te(i), a = /* @__PURE__ */ te(s);
      e || (_t(s, a) && Ce(o, "get", s), Ce(o, "get", a));
      const { has: c } = rr(o), h = t ? gs : e ? gn : At;
      if (c.call(o, s))
        return h(i.get(s));
      if (c.call(o, a))
        return h(i.get(a));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ce(/* @__PURE__ */ te(s), "iterate", Yt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ te(i), a = /* @__PURE__ */ te(s);
      return e || (_t(s, a) && Ce(o, "has", s), Ce(o, "has", a)), s === a ? i.has(s) : i.has(s) || i.has(a);
    },
    forEach(s, i) {
      const o = this, a = o.__v_raw, c = /* @__PURE__ */ te(a), h = t ? gs : e ? gn : At;
      return !e && Ce(c, "iterate", Yt), a.forEach((d, g) => s.call(i, h(d), h(g), o));
    }
  };
  return Oe(
    n,
    e ? {
      add: sr("add"),
      set: sr("set"),
      delete: sr("delete"),
      clear: sr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ te(this), o = rr(i), a = /* @__PURE__ */ te(s), c = !t && !/* @__PURE__ */ et(s) && !/* @__PURE__ */ Mt(s) ? a : s;
        return o.has.call(i, c) || _t(s, c) && o.has.call(i, s) || _t(a, c) && o.has.call(i, a) || (i.add(c), bt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ et(i) && !/* @__PURE__ */ Mt(i) && (i = /* @__PURE__ */ te(i));
        const o = /* @__PURE__ */ te(this), { has: a, get: c } = rr(o);
        let h = a.call(o, s);
        h || (s = /* @__PURE__ */ te(s), h = a.call(o, s));
        const d = c.call(o, s);
        return o.set(s, i), h ? _t(i, d) && bt(o, "set", s, i) : bt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ te(this), { has: o, get: a } = rr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ te(s), c = o.call(i, s)), a && a.call(i, s);
        const h = i.delete(s);
        return c && bt(i, "delete", s, void 0), h;
      },
      clear() {
        const s = /* @__PURE__ */ te(this), i = s.size !== 0, o = s.clear();
        return i && bt(
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
    ee(n, s) && s in r ? n : r,
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
function Or(e) {
  return /* @__PURE__ */ Mt(e) ? e : Ds(
    e,
    !1,
    ta,
    oa,
    Co
  );
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  return Ds(
    e,
    !1,
    ra,
    la,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function _s(e) {
  return Ds(
    e,
    !0,
    na,
    aa,
    Ro
  );
}
function Ds(e, t, n, r, s) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = fa(Ll(e));
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return /* @__PURE__ */ Mt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
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
function te(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ te(t) : e;
}
function da(e) {
  return !ee(e, "__v_skip") && Object.isExtensible(e) && fo(e, "__v_skip", !0), e;
}
const At = (e) => ne(e) ? /* @__PURE__ */ Or(e) : e, gn = (e) => ne(e) ? /* @__PURE__ */ _s(e) : e;
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return /* @__PURE__ */ Le(e) ? e.value : e;
}
const pa = {
  get: (e, t, n) => t === "__v_raw" ? e : X(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Le(s) && !/* @__PURE__ */ Le(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ qt(e) ? e : new Proxy(e, pa);
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
  return W(e) ? r = e : (r = e.get, s = e.set), new ha(r, s, n);
}
const ir = {}, pr = /* @__PURE__ */ new WeakMap();
let Bt;
function ga(e, t = !1, n = Bt) {
  if (n) {
    let r = pr.get(n);
    r || pr.set(n, r = []), r.push(e);
  }
}
function _a(e, t, n = se) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: a, call: c } = n, h = (M) => s ? M : /* @__PURE__ */ et(M) || s === !1 || s === 0 ? yt(M, 1) : yt(M);
  let d, g, A, I, U = !1, O = !1;
  if (/* @__PURE__ */ Le(e) ? (g = () => e.value, U = /* @__PURE__ */ et(e)) : /* @__PURE__ */ qt(e) ? (g = () => h(e), U = !0) : j(e) ? (O = !0, U = e.some((M) => /* @__PURE__ */ qt(M) || /* @__PURE__ */ et(M)), g = () => e.map((M) => {
    if (/* @__PURE__ */ Le(M))
      return M.value;
    if (/* @__PURE__ */ qt(M))
      return h(M);
    if (W(M))
      return c ? c(M, 2) : M();
  })) : W(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (A) {
      Et();
      try {
        A();
      } finally {
        St();
      }
    }
    const M = Bt;
    Bt = d;
    try {
      return c ? c(e, 3, [I]) : e(I);
    } finally {
      Bt = M;
    }
  } : g = ct, t && s) {
    const M = g, Z = s === !0 ? 1 / 0 : s;
    g = () => yt(M(), Z);
  }
  const E = Gl(), K = () => {
    d.stop(), E && E.active && ws(E.effects, d);
  };
  if (i && t) {
    const M = t;
    t = (...Z) => {
      const _e = M(...Z);
      return K(), _e;
    };
  }
  let z = O ? new Array(e.length).fill(ir) : ir;
  const G = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const Z = d.run();
        if (M || s || U || (O ? Z.some((_e, me) => _t(_e, z[me])) : _t(Z, z))) {
          A && A();
          const _e = Bt;
          Bt = d;
          try {
            const me = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              z === ir ? void 0 : O && z[0] === ir ? [] : z,
              I
            ];
            z = Z, c ? c(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            Bt = _e;
          }
        }
      } else
        d.run();
  };
  return a && a(G), d = new mo(g), d.scheduler = o ? () => o(G, !1) : G, I = (M) => ga(M, !1, d), A = d.onStop = () => {
    const M = pr.get(d);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const Z of M) Z();
      pr.delete(d);
    }
  }, t ? r ? G(!0) : z = d.run() : o ? o(G.bind(null, !0), !0) : d.run(), K.pause = d.pause.bind(d), K.resume = d.resume.bind(d), K.stop = K, K;
}
function yt(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Le(e))
    yt(e.value, t, n);
  else if (j(e))
    for (let r = 0; r < e.length; r++)
      yt(e[r], t, n);
  else if (Jt(e) || It(e))
    e.forEach((r) => {
      yt(r, t, n);
    });
  else if (ao(e)) {
    for (const r in e)
      yt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && yt(e[r], t, n);
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
  if (W(e)) {
    const s = Wn(e, t, n, r);
    return s && oo(s) && s.catch((i) => {
      Rr(i, t, n);
    }), s;
  }
  if (j(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(tt(e[i], t, n, r));
    return s;
  }
}
function Rr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || se;
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
      Et(), Wn(i, null, 10, [
        e,
        c,
        h
      ]), St();
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
const Ne = [];
let ot = -1;
const pn = [];
let Rt = null, fn = 0;
const Po = /* @__PURE__ */ Promise.resolve();
let hr = null;
function Mo(e) {
  const t = hr || Po;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ya(e) {
  let t = ot + 1, n = Ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ne[r], i = jn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? Ne.push(e) : Ne.splice(ya(t), 0, e), e.flags |= 1, No();
  }
}
function No() {
  hr || (hr = Po.then(Lo));
}
function Ta(e) {
  if (!j(e))
    Rt && e.id === -1 ? Rt.splice(fn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      pn.push(e[t]);
  No();
}
function di(e, t, n = ot + 1) {
  for (; n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Do(e) {
  if (pn.length) {
    const t = [...new Set(pn)].sort(
      (n, r) => jn(n) - jn(r)
    );
    if (pn.length = 0, Rt) {
      for (let n = 0; n < t.length; n++)
        Rt.push(t[n]);
      return;
    }
    for (Rt = t, fn = 0; fn < Rt.length; fn++) {
      const n = Rt[fn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Rt = null, fn = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lo(e) {
  try {
    for (ot = 0; ot < Ne.length; ot++) {
      const t = Ne[ot];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ot < Ne.length; ot++) {
      const t = Ne[ot];
      t && (t.flags &= -2);
    }
    ot = -1, Ne.length = 0, Do(), hr = null, (Ne.length || pn.length) && Lo();
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
    const i = mr(t), o = Xt.length;
    let a;
    try {
      a = e(...s);
    } finally {
      for (let c = Xt.length; c > o; c--) ol();
      mr(i), r._d && Ai(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function kt(e, t) {
  if (qe === null)
    return e;
  const n = Dr(qe), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, a, c = se] = t[s];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && yt(o), r.push({
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
function jt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    i && (a.oldValue = i[o].value);
    let c = a.dir[r];
    c && (Et(), tt(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), St());
  }
}
function Sa(e, t) {
  if (De) {
    let n = De.provides;
    const r = De.parent && De.parent.provides;
    r === n && (n = De.provides = Object.create(r)), n[e] = t;
  }
}
function fr(e, t, n = !1) {
  const r = Tc();
  if (r || hn) {
    let s = hn ? hn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && W(t) ? t.call(r && r.proxy) : t;
  }
}
const Aa = /* @__PURE__ */ Symbol.for("v-scx"), va = () => fr(Aa);
function Zr(e, t, n) {
  return Uo(e, t, n);
}
function Uo(e, t, n = se) {
  const { immediate: r, deep: s, flush: i, once: o } = n, a = Oe({}, n), c = t && r || !t && i !== "post";
  let h;
  if (zn) {
    if (i === "sync") {
      const I = va();
      h = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!c) {
      const I = () => {
      };
      return I.stop = ct, I.resume = ct, I.pause = ct, I;
    }
  }
  const d = De;
  a.call = (I, U, O) => tt(I, d, U, O);
  let g = !1;
  i === "post" ? a.scheduler = (I) => {
    ke(I, d && d.suspense);
  } : i !== "sync" && (g = !0, a.scheduler = (I, U) => {
    U ? I() : Fs(I);
  }), a.augmentJob = (I) => {
    t && (I.flags |= 4), g && (I.flags |= 2, d && (I.id = d.uid, I.i = d));
  };
  const A = _a(e, t, a);
  return zn && (h ? h.push(A) : c && A()), A;
}
function xa(e, t, n) {
  const r = this.proxy, s = pe(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let i;
  W(t) ? i = t : (i = t.handler, n = t);
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
const wa = /* @__PURE__ */ Symbol("_vte"), Ir = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb");
function Ca(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== vt) {
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
    if (t & 32 && W(n.default))
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
  if (j(e)) {
    e.forEach(
      (O, E) => Ln(
        O,
        t && (j(t) ? t[E] : t),
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
  const i = r.shapeFlag & 4 ? Dr(r.component) : r.el, o = s ? null : i, { i: a, r: c } = e, h = t && t.r, d = a.refs === se ? a.refs = {} : a.refs, g = a.setupState, A = /* @__PURE__ */ te(g), I = g === se ? io : (O) => pi(d, O) ? !1 : ee(A, O), U = (O, E) => !(E && pi(d, E));
  if (h != null && h !== c) {
    if (hi(t), pe(h))
      d[h] = null, I(h) && (g[h] = null);
    else if (/* @__PURE__ */ Le(h)) {
      const O = t;
      U(h, O.k) && (h.value = null), O.k && (d[O.k] = null);
    }
  }
  if (W(c))
    Wn(c, a, 12, [o, d]);
  else {
    const O = pe(c), E = /* @__PURE__ */ Le(c);
    if (O || E) {
      const K = () => {
        if (e.f) {
          const z = O ? I(c) ? g[c] : d[c] : U() || !e.k ? c.value : d[e.k];
          if (s)
            j(z) && ws(z, i);
          else if (j(z))
            z.includes(i) || z.push(i);
          else if (O)
            d[c] = [i], I(c) && (g[c] = d[c]);
          else {
            const G = [i];
            U(c, e.k) && (c.value = G), e.k && (d[e.k] = G);
          }
        } else O ? (d[c] = o, I(c) && (g[c] = o)) : E && (U(c, e.k) && (c.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const z = () => {
          K(), gr.delete(e);
        };
        z.id = -1, gr.set(e, z), ke(z, n);
      } else
        hi(e), K();
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
function $o(e, t, n = De) {
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
function Pr(e, t, n = De, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Et();
      const a = Kn(n), c = tt(t, n, e, o);
      return a(), St(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const xt = (e) => (t, n = De) => {
  (!zn || e === "sp") && Pr(e, (...r) => t(...r), n);
}, Pa = xt("bm"), Ma = xt("m"), Na = xt(
  "bu"
), Da = xt("u"), La = xt(
  "bum"
), Vo = xt("um"), Fa = xt(
  "sp"
), Ua = xt("rtg"), Ha = xt("rtc");
function ka(e, t = De) {
  Pr("ec", e, t);
}
const ja = /* @__PURE__ */ Symbol.for("v-ndc");
function $t(e, t, n, r) {
  let s;
  const i = n, o = j(e);
  if (o || pe(e)) {
    const a = o && /* @__PURE__ */ qt(e);
    let c = !1, h = !1;
    a && (c = !/* @__PURE__ */ et(e), h = /* @__PURE__ */ Mt(e), e = Cr(e)), s = new Array(e.length);
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
  } else if (ne(e))
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
const bs = (e) => e ? fl(e) ? Dr(e) : bs(e.parent) : null, Un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => xa.bind(e)
  })
), es = (e, t) => e !== se && !e.__isScriptSetup && ee(e, t), $a = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: c } = e;
    if (t[0] !== "$") {
      const A = o[t];
      if (A !== void 0)
        switch (A) {
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
        if (s !== se && ee(s, t))
          return o[t] = 2, s[t];
        if (ee(i, t))
          return o[t] = 3, i[t];
        if (n !== se && ee(n, t))
          return o[t] = 4, n[t];
        ys && (o[t] = 0);
      }
    }
    const h = Un[t];
    let d, g;
    if (h)
      return t === "$attrs" && Ce(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== se && ee(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, ee(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return es(s, t) ? (s[t] = n, !0) : r !== se && ee(r, t) ? (r[t] = n, !0) : ee(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, a) {
    let c;
    return !!(n[a] || e !== se && a[0] !== "$" && ee(e, a) || es(t, a) || ee(i, a) || ee(r, a) || ee(Un, a) || ee(s.config.globalProperties, a) || (c = o.__cssModules) && c[a]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mi(e) {
  return j(e) ? e.reduce(
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
    mounted: A,
    beforeUpdate: I,
    updated: U,
    activated: O,
    deactivated: E,
    beforeDestroy: K,
    beforeUnmount: z,
    destroyed: G,
    unmounted: M,
    render: Z,
    renderTracked: _e,
    renderTriggered: me,
    errorCaptured: We,
    serverPrefetch: be,
    // public API
    expose: Re,
    inheritAttrs: ut,
    // assets
    components: Nt,
    directives: nt,
    filters: Qt
  } = t;
  if (h && za(h, r, null), o)
    for (const ce in o) {
      const Q = o[ce];
      W(Q) && (r[ce] = Q.bind(n));
    }
  if (s) {
    const ce = s.call(n, n);
    ne(ce) && (e.data = /* @__PURE__ */ Or(ce));
  }
  if (ys = !0, i)
    for (const ce in i) {
      const Q = i[ce], Xe = W(Q) ? Q.bind(n, n) : W(Q.get) ? Q.get.bind(n, n) : ct, Dt = !W(Q) && W(Q.set) ? Q.set.bind(n) : ct, pt = Ot({
        get: Xe,
        set: Dt
      });
      Object.defineProperty(r, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => pt.value,
        set: (Ke) => pt.value = Ke
      });
    }
  if (a)
    for (const ce in a)
      zo(a[ce], r, n, ce);
  if (c) {
    const ce = W(c) ? c.call(n) : c;
    Reflect.ownKeys(ce).forEach((Q) => {
      Sa(Q, ce[Q]);
    });
  }
  d && gi(d, e, "c");
  function Ae(ce, Q) {
    j(Q) ? Q.forEach((Xe) => ce(Xe.bind(n))) : Q && ce(Q.bind(n));
  }
  if (Ae(Pa, g), Ae(Ma, A), Ae(Na, I), Ae(Da, U), Ae(Oa, O), Ae(Ra, E), Ae(ka, We), Ae(Ha, _e), Ae(Ua, me), Ae(La, z), Ae(Vo, M), Ae(Fa, be), j(Re))
    if (Re.length) {
      const ce = e.exposed || (e.exposed = {});
      Re.forEach((Q) => {
        Object.defineProperty(ce, Q, {
          get: () => n[Q],
          set: (Xe) => n[Q] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === ct && (e.render = Z), ut != null && (e.inheritAttrs = ut), Nt && (e.components = Nt), nt && (e.directives = nt), be && jo(e);
}
function za(e, t, n = ct) {
  j(e) && (e = Ts(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ne(s) ? "default" in s ? i = fr(
      s.from || r,
      s.default,
      !0
    ) : i = fr(s.from || r) : i = fr(s), /* @__PURE__ */ Le(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function gi(e, t, n) {
  tt(
    j(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zo(e, t, n, r) {
  let s = r.includes(".") ? Ho(n, r) : () => n[r];
  if (pe(e)) {
    const i = t[e];
    W(i) && Zr(s, i);
  } else if (W(e))
    Zr(s, e.bind(n));
  else if (ne(e))
    if (j(e))
      e.forEach((i) => zo(i, t, n, r));
    else {
      const i = W(e.handler) ? e.handler.bind(n) : t[e.handler];
      W(i) && Zr(s, i, e);
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
  ), _r(c, t, o)), ne(t) && i.set(t, c), c;
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
    return Oe(
      W(e) ? e.call(this, this) : e,
      W(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wa(e, t) {
  return Rn(Ts(e), Ts(t));
}
function Ts(e) {
  if (j(e)) {
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
  return e ? Oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bi(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Oe(
    /* @__PURE__ */ Object.create(null),
    mi(e),
    mi(t ?? {})
  ) : t;
}
function Ka(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Oe(/* @__PURE__ */ Object.create(null), e);
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
    W(r) || (r = Oe({}, r)), s != null && !ne(s) && (s = null);
    const i = Wo(), o = /* @__PURE__ */ new WeakSet(), a = [];
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
        return o.has(d) || (d && W(d.install) ? (o.add(d), d.install(h, ...g)) : W(d) && (o.add(d), d(h, ...g))), h;
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
      mount(d, g, A) {
        if (!c) {
          const I = h._ceVNode || Tt(r, s);
          return I.appContext = i, A === !0 ? A = "svg" : A === !1 && (A = void 0), e(I, d, A), c = !0, h._container = d, d.__vue_app__ = h, Dr(I.component);
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
const qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || se;
  let s = n;
  const i = t.startsWith("update:"), o = i && qa(r, t.slice(7));
  o && (o.trim && (s = n.map((d) => pe(d) ? d.trim() : d)), o.number && (s = s.map(xr)));
  let a, c = r[a = Gr(t)] || // also try camelCase event handler (#2249)
  r[a = Gr(Ze(t))];
  !c && i && (c = r[a = Gr(Zt(t))]), c && tt(
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
  if (!W(e)) {
    const c = (h) => {
      const d = Ko(h, t, !0);
      d && (a = !0, Oe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !a ? (ne(e) && r.set(e, null), null) : (j(i) ? i.forEach((c) => o[c] = null) : Oe(o, i), ne(e) && r.set(e, o), o);
}
function Mr(e, t) {
  return !e || !Sr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ee(e, t[0].toLowerCase() + t.slice(1)) || ee(e, Zt(t)) || ee(e, t));
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
    data: A,
    setupState: I,
    ctx: U,
    inheritAttrs: O
  } = e, E = mr(e);
  let K, z;
  try {
    if (n.shapeFlag & 4) {
      const M = s || r, Z = M;
      K = at(
        h.call(
          Z,
          M,
          d,
          g,
          I,
          A,
          U
        )
      ), z = a;
    } else {
      const M = t;
      K = at(
        M.length > 1 ? M(
          g,
          { attrs: a, slots: o, emit: c }
        ) : M(
          g,
          null
        )
      ), z = t.props ? a : Za(a);
    }
  } catch (M) {
    Xt.length = 0, Rr(M, e, 1), K = Tt(vt);
  }
  let G = K;
  if (z && O !== !1) {
    const M = Object.keys(z), { shapeFlag: Z } = G;
    M.length && Z & 7 && (i && M.some(Ar) && (z = Qa(
      z,
      i
    )), G = _n(G, z, !1, !0));
  }
  if (n.dirs && (G = _n(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Ir(G.type) && ko(G) || G;
    Us(M, n.transition);
  }
  return K = G, mr(E), K;
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
        const A = d[g];
        if (Go(o, r, A) && !Mr(h, A))
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
    if (Go(t, e, i) && !Mr(n, i))
      return !0;
  }
  return !1;
}
function Go(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && ne(r) && ne(s) ? !Pt(r, s) : r !== s;
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
  n ? e.props = r ? s : /* @__PURE__ */ ua(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function rc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, a = /* @__PURE__ */ te(s), [c] = e.propsOptions;
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
        let A = d[g];
        if (Mr(e.emitsOptions, A))
          continue;
        const I = t[A];
        if (c)
          if (ee(i, A))
            I !== i[A] && (i[A] = I, h = !0);
          else {
            const U = Ze(A);
            s[U] = Es(
              c,
              a,
              U,
              I,
              e,
              !1
            );
          }
        else
          I !== i[A] && (i[A] = I, h = !0);
      }
    }
  } else {
    Jo(e, t, s, i) && (h = !0);
    let d;
    for (const g in a)
      (!t || // for camelCase
      !ee(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Zt(g)) === g || !ee(t, d))) && (c ? n && // for camelCase
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
        (!t || !ee(t, g)) && (delete i[g], h = !0);
  }
  h && bt(e.attrs, "set", "");
}
function Jo(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let c in t) {
      if (Mn(c))
        continue;
      const h = t[c];
      let d;
      s && ee(s, d = Ze(c)) ? !i || !i.includes(d) ? n[d] = h : (a || (a = {}))[d] = h : Mr(e.emitsOptions, c) || (!(c in r) || h !== r[c]) && (r[c] = h, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ te(n), h = a || se;
    for (let d = 0; d < i.length; d++) {
      const g = i[d];
      n[g] = Es(
        s,
        c,
        g,
        h[g],
        e,
        !ee(h, g)
      );
    }
  }
  return o;
}
function Es(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const a = ee(o, "default");
    if (a && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && W(c)) {
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
    ] && (r === "" || r === Zt(n)) && (r = !0));
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
  if (!W(e)) {
    const d = (g) => {
      c = !0;
      const [A, I] = Zo(g, t, !0);
      Oe(o, A), I && a.push(...I);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !c)
    return ne(e) && r.set(e, dn), dn;
  if (j(i))
    for (let d = 0; d < i.length; d++) {
      const g = Ze(i[d]);
      Ei(g) && (o[g] = se);
    }
  else if (i)
    for (const d in i) {
      const g = Ze(d);
      if (Ei(g)) {
        const A = i[d], I = o[g] = j(A) || W(A) ? { type: A } : Oe({}, A), U = I.type;
        let O = !1, E = !0;
        if (j(U))
          for (let K = 0; K < U.length; ++K) {
            const z = U[K], G = W(z) && z.name;
            if (G === "Boolean") {
              O = !0;
              break;
            } else G === "String" && (E = !1);
          }
        else
          O = W(U) && U.name === "Boolean";
        I[
          0
          /* shouldCast */
        ] = O, I[
          1
          /* shouldCastTrue */
        ] = E, (O || ee(I, "default")) && a.push(g);
      }
    }
  const h = [o, a];
  return ne(e) && r.set(e, h), h;
}
function Ei(e) {
  return e[0] !== "$" && !Mn(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => j(e) ? e.map(at) : [at(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...s) => js(t(...s)), n);
  return r._c = !1, r;
}, Qo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ks(s)) continue;
    const i = e[s];
    if (W(i))
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
    s ? (tl(r, t, n), n && fo(r, "_", s, !0)) : Qo(t, r);
  } else t && el(e, t);
}, lc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = se;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : tl(s, t, n) : (i = !t.$stable, Qo(t, s)), o = t;
  } else t && (el(e, t), o = { default: 1 });
  if (i)
    for (const a in s)
      !ks(a) && o[a] == null && delete s[a];
}, ke = dc;
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
    createText: a,
    createComment: c,
    setText: h,
    setElementText: d,
    parentNode: g,
    nextSibling: A,
    setScopeId: I = ct,
    insertStaticContent: U
  } = e, O = (f, u, m, S = null, _ = null, y = null, x = void 0, w = null, C = !!u.dynamicChildren) => {
    if (f === u)
      return;
    f && !vn(f, u) && (S = en(f), Ke(f, _, y, !0), f = null), u.patchFlag === -2 && (C = !1, u.dynamicChildren = null);
    const { type: b, ref: H, shapeFlag: R } = u;
    switch (b) {
      case Nr:
        E(f, u, m, S);
        break;
      case vt:
        K(f, u, m, S);
        break;
      case ns:
        f == null && z(u, m, S, x);
        break;
      case we:
        Nt(
          f,
          u,
          m,
          S,
          _,
          y,
          x,
          w,
          C
        );
        break;
      default:
        R & 1 ? Z(
          f,
          u,
          m,
          S,
          _,
          y,
          x,
          w,
          C
        ) : R & 6 ? nt(
          f,
          u,
          m,
          S,
          _,
          y,
          x,
          w,
          C
        ) : (R & 64 || R & 128) && b.process(
          f,
          u,
          m,
          S,
          _,
          y,
          x,
          w,
          C,
          Ft
        );
    }
    H != null && _ ? Ln(H, f && f.ref, y, u || f, !u) : H == null && f && f.ref != null && Ln(f.ref, null, y, f, !0);
  }, E = (f, u, m, S) => {
    if (f == null)
      r(
        u.el = a(u.children),
        m,
        S
      );
    else {
      const _ = u.el = f.el;
      u.children !== f.children && h(_, u.children);
    }
  }, K = (f, u, m, S) => {
    f == null ? r(
      u.el = c(u.children || ""),
      m,
      S
    ) : u.el = f.el;
  }, z = (f, u, m, S) => {
    [f.el, f.anchor] = U(
      f.children,
      u,
      m,
      S,
      f.el,
      f.anchor
    );
  }, G = ({ el: f, anchor: u }, m, S) => {
    let _;
    for (; f && f !== u; )
      _ = A(f), r(f, m, S), f = _;
    r(u, m, S);
  }, M = ({ el: f, anchor: u }) => {
    let m;
    for (; f && f !== u; )
      m = A(f), s(f), f = m;
    s(u);
  }, Z = (f, u, m, S, _, y, x, w, C) => {
    if (u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), f == null)
      _e(
        u,
        m,
        S,
        _,
        y,
        x,
        w,
        C
      );
    else {
      const b = f.el && f.el._isVueCE ? f.el : null;
      try {
        b && b._beginPatch(), be(
          f,
          u,
          _,
          y,
          x,
          w,
          C
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, _e = (f, u, m, S, _, y, x, w) => {
    let C, b;
    const { props: H, shapeFlag: R, transition: L, dirs: k } = f;
    if (C = f.el = o(
      f.type,
      y,
      H && H.is,
      H
    ), R & 8 ? d(C, f.children) : R & 16 && We(
      f.children,
      C,
      null,
      S,
      _,
      ts(f, y),
      x,
      w
    ), k && jt(f, null, S, "created"), me(C, f, f.scopeId, x, S), H) {
      for (const q in H)
        q !== "value" && !Mn(q) && i(C, q, null, H[q], y, S);
      "value" in H && i(C, "value", null, H.value, y), (b = H.onVnodeBeforeMount) && it(b, S, f);
    }
    k && jt(f, null, S, "beforeMount");
    const B = fc(_, L);
    B && L.beforeEnter(C), r(C, u, m), ((b = H && H.onVnodeMounted) || B || k) && ke(() => {
      b && it(b, S, f), B && L.enter(C), k && jt(f, null, S, "mounted");
    }, _);
  }, me = (f, u, m, S, _) => {
    if (m && I(f, m), S)
      for (let y = 0; y < S.length; y++)
        I(f, S[y]);
    if (_) {
      let y = _.subTree;
      if (u === y || il(y.type) && (y.ssContent === u || y.ssFallback === u)) {
        const x = _.vnode;
        me(
          f,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, We = (f, u, m, S, _, y, x, w, C = 0) => {
    for (let b = C; b < f.length; b++) {
      const H = f[b] = w ? gt(f[b]) : at(f[b]);
      O(
        null,
        H,
        u,
        m,
        S,
        _,
        y,
        x,
        w
      );
    }
  }, be = (f, u, m, S, _, y, x) => {
    const w = u.el = f.el;
    let { patchFlag: C, dynamicChildren: b, dirs: H } = u;
    C |= f.patchFlag & 16;
    const R = f.props || se, L = u.props || se;
    let k;
    if (m && Vt(m, !1), (k = L.onVnodeBeforeUpdate) && it(k, m, u, f), H && jt(u, f, m, "beforeUpdate"), m && Vt(m, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    b && (!f.dynamicChildren || f.dynamicChildren.length !== b.length) && (C = 0, x = !1, b = null), (R.innerHTML && L.innerHTML == null || R.textContent && L.textContent == null) && d(w, ""), b ? Re(
      f.dynamicChildren,
      b,
      w,
      m,
      S,
      ts(u, _),
      y
    ) : x || Q(
      f,
      u,
      w,
      null,
      m,
      S,
      ts(u, _),
      y,
      !1
    ), C > 0) {
      if (C & 16)
        ut(w, R, L, m, _);
      else if (C & 2 && R.class !== L.class && i(w, "class", null, L.class, _), C & 4 && i(w, "style", R.style, L.style, _), C & 8) {
        const B = u.dynamicProps;
        for (let q = 0; q < B.length; q++) {
          const Y = B[q], fe = R[Y], de = L[Y];
          (de !== fe || Y === "value") && i(w, Y, fe, de, _, m);
        }
      }
      C & 1 && f.children !== u.children && d(w, u.children);
    } else !x && b == null && ut(w, R, L, m, _);
    ((k = L.onVnodeUpdated) || H) && ke(() => {
      k && it(k, m, u, f), H && jt(u, f, m, "updated");
    }, S);
  }, Re = (f, u, m, S, _, y, x) => {
    for (let w = 0; w < u.length; w++) {
      const C = f[w], b = u[w], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vn(C, b) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      O(
        C,
        b,
        H,
        null,
        S,
        _,
        y,
        x,
        !0
      );
    }
  }, ut = (f, u, m, S, _) => {
    if (u !== m) {
      if (u !== se)
        for (const y in u)
          !Mn(y) && !(y in m) && i(
            f,
            y,
            u[y],
            null,
            _,
            S
          );
      for (const y in m) {
        if (Mn(y)) continue;
        const x = m[y], w = u[y];
        x !== w && y !== "value" && i(f, y, w, x, _, S);
      }
      "value" in m && i(f, "value", u.value, m.value, _);
    }
  }, Nt = (f, u, m, S, _, y, x, w, C) => {
    const b = u.el = f ? f.el : a(""), H = u.anchor = f ? f.anchor : a("");
    let { patchFlag: R, dynamicChildren: L, slotScopeIds: k } = u;
    k && (w = w ? w.concat(k) : k), f == null ? (r(b, m, S), r(H, m, S), We(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      m,
      H,
      _,
      y,
      x,
      w,
      C
    )) : R > 0 && R & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === L.length ? (Re(
      f.dynamicChildren,
      L,
      m,
      _,
      y,
      x,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || _ && u === _.subTree) && nl(
      f,
      u,
      !0
      /* shallow */
    )) : Q(
      f,
      u,
      m,
      H,
      _,
      y,
      x,
      w,
      C
    );
  }, nt = (f, u, m, S, _, y, x, w, C) => {
    u.slotScopeIds = w, f == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      m,
      S,
      x,
      C
    ) : Qt(
      u,
      m,
      S,
      _,
      y,
      x,
      C
    ) : dt(f, u, C);
  }, Qt = (f, u, m, S, _, y, x) => {
    const w = f.component = yc(
      f,
      S,
      _
    );
    if (Hs(f) && (w.ctx.renderer = Ft), Ec(w, !1, x), w.asyncDep) {
      if (_ && _.registerDep(w, Ae, x), !f.el) {
        const C = w.subTree = Tt(vt);
        K(null, C, u, m), f.placeholder = C.el;
      }
    } else
      Ae(
        w,
        f,
        u,
        m,
        _,
        y,
        x
      );
  }, dt = (f, u, m) => {
    const S = u.component = f.component;
    if (ec(f, u, m))
      if (S.asyncDep && !S.asyncResolved) {
        ce(S, u, m);
        return;
      } else
        S.next = u, S.update();
    else
      u.el = f.el, S.vnode = u;
  }, Ae = (f, u, m, S, _, y, x) => {
    const w = () => {
      if (f.isMounted) {
        let { next: R, bu: L, u: k, parent: B, vnode: q } = f;
        {
          const Fe = rl(f);
          if (Fe) {
            R && (R.el = q.el, ce(f, R, x)), Fe.asyncDep.then(() => {
              ke(() => {
                f.isUnmounted || b();
              }, _);
            });
            return;
          }
        }
        let Y = R, fe;
        Vt(f, !1), R ? (R.el = q.el, ce(f, R, x)) : R = q, L && cr(L), (fe = R.props && R.props.onVnodeBeforeUpdate) && it(fe, B, R, q), Vt(f, !0);
        const de = yi(f), Ie = f.subTree;
        f.subTree = de, O(
          Ie,
          de,
          // parent may have changed if it's in a teleport
          g(Ie.el),
          // anchor may have changed if it's in a fragment
          en(Ie),
          f,
          _,
          y
        ), R.el = de.el, Y === null && tc(f, de.el), k && ke(k, _), (fe = R.props && R.props.onVnodeUpdated) && ke(
          () => it(fe, B, R, q),
          _
        );
      } else {
        let R;
        const { el: L, props: k } = u, { bm: B, m: q, parent: Y, root: fe, type: de } = f, Ie = Fn(u);
        Vt(f, !1), B && cr(B), !Ie && (R = k && k.onVnodeBeforeMount) && it(R, Y, u), Vt(f, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            de,
            f.parent ? f.parent.type : void 0
          );
          const Fe = f.subTree = yi(f);
          O(
            null,
            Fe,
            m,
            S,
            f,
            _,
            y
          ), u.el = Fe.el;
        }
        if (q && ke(q, _), !Ie && (R = k && k.onVnodeMounted)) {
          const Fe = u;
          ke(
            () => it(R, Y, Fe),
            _
          );
        }
        (u.shapeFlag & 256 || Y && Fn(Y.vnode) && Y.vnode.shapeFlag & 256) && f.a && ke(f.a, _), f.isMounted = !0, u = m = S = null;
      }
    };
    f.scope.on();
    const C = f.effect = new mo(w);
    f.scope.off();
    const b = f.update = C.run.bind(C), H = f.job = C.runIfDirty.bind(C);
    H.i = f, H.id = f.uid, C.scheduler = () => Fs(H), Vt(f, !0), b();
  }, ce = (f, u, m) => {
    u.component = f;
    const S = f.vnode.props;
    f.vnode = u, f.next = null, rc(f, u.props, S, m), lc(f, u.children, m), Et(), di(f), St();
  }, Q = (f, u, m, S, _, y, x, w, C = !1) => {
    const b = f && f.children, H = f ? f.shapeFlag : 0, R = u.children, { patchFlag: L, shapeFlag: k } = u;
    if (L > 0) {
      if (L & 128) {
        Dt(
          b,
          R,
          m,
          S,
          _,
          y,
          x,
          w,
          C
        );
        return;
      } else if (L & 256) {
        Xe(
          b,
          R,
          m,
          S,
          _,
          y,
          x,
          w,
          C
        );
        return;
      }
    }
    k & 8 ? (H & 16 && Lt(b, _, y), R !== b && d(m, R)) : H & 16 ? k & 16 ? Dt(
      b,
      R,
      m,
      S,
      _,
      y,
      x,
      w,
      C
    ) : Lt(b, _, y, !0) : (H & 8 && d(m, ""), k & 16 && We(
      R,
      m,
      S,
      _,
      y,
      x,
      w,
      C
    ));
  }, Xe = (f, u, m, S, _, y, x, w, C) => {
    f = f || dn, u = u || dn;
    const b = f.length, H = u.length, R = Math.min(b, H);
    let L;
    for (L = 0; L < R; L++) {
      const k = u[L] = C ? gt(u[L]) : at(u[L]);
      O(
        f[L],
        k,
        m,
        null,
        _,
        y,
        x,
        w,
        C
      );
    }
    b > H ? Lt(
      f,
      _,
      y,
      !0,
      !1,
      R
    ) : We(
      u,
      m,
      S,
      _,
      y,
      x,
      w,
      C,
      R
    );
  }, Dt = (f, u, m, S, _, y, x, w, C) => {
    let b = 0;
    const H = u.length;
    let R = f.length - 1, L = H - 1;
    for (; b <= R && b <= L; ) {
      const k = f[b], B = u[b] = C ? gt(u[b]) : at(u[b]);
      if (vn(k, B))
        O(
          k,
          B,
          m,
          null,
          _,
          y,
          x,
          w,
          C
        );
      else
        break;
      b++;
    }
    for (; b <= R && b <= L; ) {
      const k = f[R], B = u[L] = C ? gt(u[L]) : at(u[L]);
      if (vn(k, B))
        O(
          k,
          B,
          m,
          null,
          _,
          y,
          x,
          w,
          C
        );
      else
        break;
      R--, L--;
    }
    if (b > R) {
      if (b <= L) {
        const k = L + 1, B = k < H ? u[k].el : S;
        for (; b <= L; )
          O(
            null,
            u[b] = C ? gt(u[b]) : at(u[b]),
            m,
            B,
            _,
            y,
            x,
            w,
            C
          ), b++;
      }
    } else if (b > L)
      for (; b <= R; )
        Ke(f[b], _, y, !0), b++;
    else {
      const k = b, B = b, q = /* @__PURE__ */ new Map();
      for (b = B; b <= L; b++) {
        const Ee = u[b] = C ? gt(u[b]) : at(u[b]);
        Ee.key != null && q.set(Ee.key, b);
      }
      let Y, fe = 0;
      const de = L - B + 1;
      let Ie = !1, Fe = 0;
      const Ge = new Array(de);
      for (b = 0; b < de; b++) Ge[b] = 0;
      for (b = k; b <= R; b++) {
        const Ee = f[b];
        if (fe >= de) {
          Ke(Ee, _, y, !0);
          continue;
        }
        let $e;
        if (Ee.key != null)
          $e = q.get(Ee.key);
        else
          for (Y = B; Y <= L; Y++)
            if (Ge[Y - B] === 0 && vn(Ee, u[Y])) {
              $e = Y;
              break;
            }
        $e === void 0 ? Ke(Ee, _, y, !0) : (Ge[$e - B] = b + 1, $e >= Fe ? Fe = $e : Ie = !0, O(
          Ee,
          u[$e],
          m,
          null,
          _,
          y,
          x,
          w,
          C
        ), fe++);
      }
      const Ut = Ie ? uc(Ge) : dn;
      for (Y = Ut.length - 1, b = de - 1; b >= 0; b--) {
        const Ee = B + b, $e = u[Ee], yn = u[Ee + 1], Tn = Ee + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          yn.el || sl(yn)
        ) : S;
        Ge[b] === 0 ? O(
          null,
          $e,
          m,
          Tn,
          _,
          y,
          x,
          w,
          C
        ) : Ie && (Y < 0 || b !== Ut[Y] ? pt($e, m, Tn, 2) : Y--);
      }
    }
  }, pt = (f, u, m, S, _ = null) => {
    const { el: y, type: x, transition: w, children: C, shapeFlag: b } = f;
    if (b & 6) {
      pt(f.component.subTree, u, m, S);
      return;
    }
    if (b & 128) {
      f.suspense.move(u, m, S);
      return;
    }
    if (b & 64) {
      x.move(f, u, m, Ft);
      return;
    }
    if (x === we) {
      r(y, u, m);
      for (let R = 0; R < C.length; R++)
        pt(C[R], u, m, S);
      r(f.anchor, u, m);
      return;
    }
    if (x === ns) {
      G(f, u, m);
      return;
    }
    if (S !== 2 && b & 1 && w)
      if (S === 0)
        w.persisted && !y[Qr] ? r(y, u, m) : (w.beforeEnter(y), r(y, u, m), ke(() => w.enter(y), _));
      else {
        const { leave: R, delayLeave: L, afterLeave: k } = w, B = () => {
          f.ctx.isUnmounted ? s(y) : r(y, u, m);
        }, q = () => {
          const Y = y._isLeaving || !!y[Qr];
          y._isLeaving && y[Qr](
            !0
            /* cancelled */
          ), w.persisted && !Y ? B() : R(y, () => {
            B(), k && k();
          });
        };
        L ? L(y, B, q) : q();
      }
    else
      r(y, u, m);
  }, Ke = (f, u, m, S = !1, _ = !1) => {
    const {
      type: y,
      props: x,
      ref: w,
      children: C,
      dynamicChildren: b,
      shapeFlag: H,
      patchFlag: R,
      dirs: L,
      cacheIndex: k,
      memo: B
    } = f;
    if (R === -2 && (_ = !1), w != null && (Et(), Ln(w, null, m, f, !0), St()), k != null && (u.renderCache[k] = void 0), H & 256) {
      u.ctx.deactivate(f);
      return;
    }
    const q = H & 1 && L, Y = !Fn(f);
    let fe;
    if (Y && (fe = x && x.onVnodeBeforeUnmount) && it(fe, u, f), H & 6)
      Lr(f.component, m, S);
    else {
      if (H & 128) {
        f.suspense.unmount(m, S);
        return;
      }
      q && jt(f, null, u, "beforeUnmount"), H & 64 ? f.type.remove(
        f,
        u,
        m,
        Ft,
        S
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== we || R > 0 && R & 64) ? Lt(
        b,
        u,
        m,
        !1,
        !0
      ) : (y === we && R & 384 || !_ && H & 16) && Lt(C, u, m), S && Gn(f);
    }
    const de = B != null && k == null;
    (Y && (fe = x && x.onVnodeUnmounted) || q || de) && ke(() => {
      fe && it(fe, u, f), q && jt(f, null, u, "unmounted"), de && (f.el = null);
    }, m);
  }, Gn = (f) => {
    const { type: u, el: m, anchor: S, transition: _ } = f;
    if (u === we) {
      ie(m, S);
      return;
    }
    if (u === ns) {
      M(f);
      return;
    }
    const y = () => {
      s(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: w } = _, C = () => x(m, y);
      w ? w(f.el, y, C) : C();
    } else
      y();
  }, ie = (f, u) => {
    let m;
    for (; f !== u; )
      m = A(f), s(f), f = m;
    s(u);
  }, Lr = (f, u, m) => {
    const { bum: S, scope: _, job: y, subTree: x, um: w, m: C, a: b } = f;
    Si(C), Si(b), S && cr(S), _.stop(), y && (y.flags |= 8, Ke(x, f, u, m)), w && ke(w, u), ke(() => {
      f.isUnmounted = !0;
    }, u);
  }, Lt = (f, u, m, S = !1, _ = !1, y = 0) => {
    for (let x = y; x < f.length; x++)
      Ke(f[x], u, m, S, _);
  }, en = (f) => {
    if (f.shapeFlag & 6)
      return en(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const u = A(f.anchor || f.el), m = u && u[wa];
    return m ? A(m) : u;
  };
  let bn = !1;
  const Yn = (f, u, m) => {
    let S;
    f == null ? u._vnode && (Ke(u._vnode, null, null, !0), S = u._vnode.component) : O(
      u._vnode || null,
      f,
      u,
      null,
      null,
      null,
      m
    ), u._vnode = f, bn || (bn = !0, di(S), Do(), bn = !1);
  }, Ft = {
    p: O,
    um: Ke,
    m: pt,
    r: Gn,
    mt: Qt,
    mc: We,
    pc: Q,
    pbc: Re,
    n: en,
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
function Vt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nl(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (j(r) && j(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let a = s[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = gt(s[i]), a.el = o.el), !n && a.patchFlag !== -2 && nl(o, a)), a.type === Nr && (a.patchFlag === -1 && (a = s[i] = gt(a)), a.el = o.el), a.type === vt && !a.el && (a.el = o.el);
    }
}
function uc(e) {
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
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Ta(e);
}
const we = /* @__PURE__ */ Symbol.for("v-fgt"), Nr = /* @__PURE__ */ Symbol.for("v-txt"), vt = /* @__PURE__ */ Symbol.for("v-cmt"), ns = /* @__PURE__ */ Symbol.for("v-stc"), Xt = [];
let Be = null;
function re(e = !1) {
  Xt.push(Be = e ? null : []);
}
function ol() {
  Xt.pop(), Be = Xt[Xt.length - 1] || null;
}
let $n = 1;
function Ai(e, t = !1) {
  $n += e, e < 0 && Be && t && (Be.hasOnce = !0);
}
function ll(e) {
  return e.dynamicChildren = $n > 0 ? Be || dn : null, ol(), $n > 0 && Be && Be.push(e), e;
}
function le(e, t, n, r, s, i) {
  return ll(
    F(
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
    Tt(
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
function vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const cl = ({ key: e }) => e ?? null, ur = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || /* @__PURE__ */ Le(e) || W(e) ? { i: qe, r: e, k: t, f: !!n } : e : null);
function F(e, t = null, n = null, r = 0, s = null, i = e === we ? 0 : 1, o = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && ur(t),
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
  return a ? (br(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), $n > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Be && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Be.push(c), c;
}
const Tt = hc;
function hc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === ja) && (e = vt), al(e)) {
    const a = _n(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && br(a, n), $n > 0 && !i && Be && (a.shapeFlag & 6 ? Be[Be.indexOf(e)] = a : Be.push(a)), a.patchFlag = -2, a;
  }
  if (xc(e) && (e = e.__vccOpts), t) {
    t = mc(t);
    let { class: a, style: c } = t;
    a && !pe(a) && (t.class = Rs(a)), ne(c) && (/* @__PURE__ */ Ls(c) && !j(c) && (c = Oe({}, c)), t.style = Os(c));
  }
  const o = pe(e) ? 1 : il(e) ? 128 : Ir(e) ? 64 : ne(e) ? 4 : W(e) ? 2 : 0;
  return F(
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
  return e ? /* @__PURE__ */ Ls(e) || Xo(e) ? Oe({}, e) : e : null;
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
      n && i ? j(i) ? i.concat(ur(t)) : [i, ur(t)] : ur(t)
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
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
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
function Ye(e = " ", t = 0) {
  return Tt(Nr, null, e, t);
}
function an(e = "", t = !1) {
  return t ? (re(), pc(vt, null, e)) : Tt(vt, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? Tt(vt) : j(e) ? Tt(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : al(e) ? gt(e) : Tt(Nr, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _n(e);
}
function br(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (j(t))
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
  else if (W(t)) {
    if (r & 65) {
      br(e, { default: t });
      return;
    }
    t = { default: t, _ctx: qe }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [Ye(t)]) : n = 8;
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
        o && i !== o && !(j(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
    propsDefaults: se,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: se,
    data: se,
    props: se,
    attrs: se,
    slots: se,
    refs: se,
    setupState: se,
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
let De = null;
const Tc = () => De || qe;
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
    (n) => De = n
  ), Vn = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const Kn = (e) => {
  const t = De;
  return yr(e), e.scope.on(), () => {
    e.scope.off(), yr(t);
  };
}, vi = () => {
  De && De.scope.off(), yr(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Ec(e, t = !1, n = !1) {
  t && Vn(t);
  const { props: r, children: s } = e.vnode, i = fl(e);
  nc(e, r, i, t), oc(e, s, n || t);
  const o = i ? Sc(e, t) : void 0;
  return t && Vn(!1), o;
}
function Sc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, $a);
  const { setup: r } = n;
  if (r) {
    Et();
    const s = e.setupContext = r.length > 1 ? vc(e) : null, i = Kn(e), o = Wn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = oo(o);
    if (St(), i(), (a || e.sp) && !Fn(e) && jo(e), a) {
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
    ul(e);
}
function xi(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = Io(t)), ul(e);
}
function ul(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ct);
  {
    const s = Kn(e);
    Et();
    try {
      Va(e);
    } finally {
      St(), s();
    }
  }
}
const Ac = {
  get(e, t) {
    return Ce(e, "get", ""), e[t];
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
function Dr(e) {
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
  return W(e) && "__vccOpts" in e;
}
const Ot = (e, t) => /* @__PURE__ */ ma(e, t, zn), wc = "3.5.42";
let Ss;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Ss = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const dl = Ss ? (e) => Ss.createHTML(e) : (e) => e, Cc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", mt = typeof document < "u" ? document : null, Ci = mt && /* @__PURE__ */ mt.createElement("template"), Rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? mt.createElementNS(Cc, e) : t === "mathml" ? mt.createElementNS(Oc, e) : n ? mt.createElement(e, { is: n }) : mt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => mt.createTextNode(e),
  createComment: (e) => mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mt.querySelector(e),
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
      const a = Ci.content;
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
const Oi = /* @__PURE__ */ Symbol("_vod"), Mc = /* @__PURE__ */ Symbol("_vsh"), Nc = /* @__PURE__ */ Symbol(""), Dc = /(?:^|;)\s*display\s*:/;
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
      o && (n += ";" + o), r.cssText = n, i = Dc.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? r.display : "", e[Mc] && (r.display = "none"));
}
const or = /\s*!important$/;
function In(e, t, n) {
  if (j(n))
    n.forEach((r) => In(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    or.test(n) ? e.setProperty(t, n.replace(or, ""), "important") : e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    or.test(n) ? e.setProperty(
      Zt(r),
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
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n) : n == null || i && !uo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
  );
}
function Mi(e, t, n, r, s) {
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
    a === "boolean" ? n = uo(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function Kt(e, t, n, r) {
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
      Kt(e, a, h, c);
    } else o && (Hc(e, a, o, c), i[t] = void 0);
  }
}
const jc = /(Once|Passive|Capture)$/, $c = /^on:?(?:Once|Passive|Capture)$/;
function Vc(e) {
  let t, n;
  for (; (n = e.match(jc)) && !$c.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Zt(e.slice(2)), t];
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
    if (j(s)) {
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
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Pc(e, r, o) : t === "style" ? Lc(e, n, r) : Sr(t) ? Ar(t) || kc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gc(e, t, r, o)) ? (Mi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pe(r))) ? Mi(e, Ze(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pi(e, t, r, o));
};
function Gc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && W(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Di(t) && pe(n) ? !1 : t in e;
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
  return j(t) ? (n) => cr(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Gt = /* @__PURE__ */ Symbol("_assign"), lr = /* @__PURE__ */ Symbol("_initialValue");
function is(e, t, n) {
  return t && (e = e.trim()), n && (e = xr(e)), e;
}
const Fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[lr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Gt] = Tr(s);
    const i = r || s.props && s.props.type === "number";
    Kt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Gt](is(e.value, n, i));
    }), (n || i) && Kt(e, "change", () => {
      e.value = is(e.value, n, i);
    }), t || (Kt(e, "compositionstart", qc), Kt(e, "compositionend", Li), Kt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[lr];
    delete e[lr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Gt](is(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[Gt] = Tr(o), e.composing) return;
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
    e._modelValue = t, Kt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? xr(Er(c)) : Er(c)
      ), i = e.multiple, o = i ? Jt(e._modelValue) ? new Set(s) : s : s[0], a = e._pendingValue = [
        i,
        i ? j(o) ? s.slice() : s : o
      ];
      try {
        e[Gt](o);
      } finally {
        Mo(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[Gt] = Tr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ui(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Gt] = Tr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xc(t, n[1], n[0])) && Ui(e, t);
  }
};
function Xc(e, t, n) {
  if (!n || j(e)) return Pt(e, t);
  if (Jt(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Ui(e, t) {
  const n = e.multiple, r = j(t);
  if (!(n && !r && !Jt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], a = Er(o);
      if (n)
        if (r) {
          const c = typeof a;
          c === "string" || c === "number" ? o.selected = t.some((h) => String(h) === String(a)) : o.selected = Wl(t, a) > -1;
        } else
          o.selected = t.has(a);
      else if (Pt(Er(o), t)) {
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
const Jc = /* @__PURE__ */ Oe({ patchProp: Kc }, Rc);
let Hi;
function Zc() {
  return Hi || (Hi = ac(Jc));
}
const Qc = ((...e) => {
  const t = Zc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = tf(r);
    if (!s) return;
    const i = t._component;
    !W(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, ef(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function ef(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tf(e) {
  return pe(e) ? document.querySelector(e) : e;
}
function nf(e, t, n) {
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
function rf(e) {
  if (Array.isArray(e)) return e;
}
function sf(e, t) {
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
function of() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lf(e, t) {
  return rf(e) || sf(e, t) || af(e, t) || of();
}
function af(e, t) {
  if (e) {
    if (typeof e == "string") return ki(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ki(e, t) : void 0;
  }
}
const pl = Object.entries, ji = Object.setPrototypeOf, cf = Object.isFrozen, ff = Object.getPrototypeOf, uf = Object.getOwnPropertyDescriptor;
let Te = Object.freeze, Se = Object.seal, un = Object.create, hl = typeof Reflect < "u" && Reflect, As = hl.apply, vs = hl.construct;
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
const Wt = ge(Array.prototype.forEach), df = ge(Array.prototype.lastIndexOf), $i = ge(Array.prototype.pop), wn = ge(Array.prototype.push), pf = ge(Array.prototype.splice), mn = Array.isArray, Pn = ge(String.prototype.toLowerCase), os = ge(String.prototype.toString), Vi = ge(String.prototype.match), Cn = ge(String.prototype.replace), zi = ge(String.prototype.indexOf), hf = ge(String.prototype.trim), mf = ge(Number.prototype.toString), gf = ge(Boolean.prototype.toString), Bi = typeof BigInt > "u" ? null : ge(BigInt.prototype.toString), Wi = typeof Symbol > "u" ? null : ge(Symbol.prototype.toString), je = ge(Object.prototype.hasOwnProperty), On = ge(Object.prototype.toString), xe = ge(RegExp.prototype.test), zt = _f(TypeError);
function ge(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return As(e, t, r);
  };
}
function _f(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return vs(e, n);
  };
}
function J(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pn;
  if (ji && ji(e, null), !mn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (cf(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function bf(e) {
  for (let t = 0; t < e.length; t++)
    je(e, t) || (e[t] = null);
  return e;
}
function ze(e) {
  const t = un(null);
  for (const r of pl(e)) {
    var n = lf(r, 2);
    const s = n[0], i = n[1];
    je(e, s) && (mn(i) ? t[s] = bf(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = ze(i) : t[s] = i);
  }
  return t;
}
function yf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mf(e);
    case "boolean":
      return gf(e);
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
    const r = uf(e, t);
    if (r) {
      if (r.get)
        return ge(r.get);
      if (typeof r.value == "function")
        return ge(r.value);
    }
    e = ff(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Tf(e) {
  try {
    return xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ki = Te(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ls = Te(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Te(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ef = Te(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cs = Te(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Sf = Te(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gi = Te(["#text"]), Yi = Te(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fs = Te(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Te(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ar = Te(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Af = Se(/{{[\w\W]*|^[\w\W]*}}/g), vf = Se(/<%[\w\W]*|^[\w\W]*%>/g), xf = Se(/\${[\w\W]*/g), wf = Se(/^data-[\-\w.\u00B7-\uFFFF]+$/), Cf = Se(/^aria-[\-\w]+$/), Xi = Se(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Of = Se(/^(?:\w+script|data):/i), Rf = Se(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), If = Se(/^html$/i), Pf = Se(/^[a-z][.\w]*(-[.\w]+)+$/i), Ji = Se(/<[/\w!]/g), Zi = Se(/<[/\w]/g), Mf = Se(/<\/no(script|embed|frames)/i), Nf = Se(/\/>/i), Ve = {
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
}, ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Df = Te(J({}, ml)), Lf = (function() {
  const e = {};
  return Wt(ml, (t) => {
    e[t] = Se(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Te(e);
})(), Ff = function() {
  return typeof window > "u" ? null : window;
}, Uf = function(t, n) {
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
}, Ct = function(t, n, r, s) {
  return je(t, n) && mn(t[n]) ? J(s.base ? ze(s.base) : {}, t[n], s.transform) : r;
}, us = function(t, n, r) {
  const s = je(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? ze(s) : r();
};
function gl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ff();
  const t = (v) => gl(v);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Ve.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, g = e.trustedTypes, A = a.prototype, I = Je(A, "cloneNode"), U = Je(A, "remove"), O = Je(A, "nextSibling"), E = Je(A, "childNodes"), K = Je(A, "parentNode"), z = Je(A, "shadowRoot"), G = Je(A, "attributes"), M = o && o.prototype ? Je(o.prototype, "nodeType") : null, Z = o && o.prototype ? Je(o.prototype, "nodeName") : null, _e = o && o.prototype ? Je(o.prototype, "ownerDocument") : null, me = function(l) {
    return M ? M(l) : l.nodeType;
  }, We = function(l) {
    return Z ? Z(l) : l.nodeName;
  };
  if (typeof i == "function") {
    const v = n.createElement("template");
    v.content && v.content.ownerDocument && (n = v.content.ownerDocument);
  }
  let be, Re = "", ut, Nt = !1, nt = 0;
  const Qt = function() {
    if (nt > 0)
      throw zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, dt = function(l) {
    Qt(), nt++;
    try {
      return be.createHTML(l);
    } finally {
      nt--;
    }
  }, Ae = function(l) {
    Qt(), nt++;
    try {
      return be.createScriptURL(l);
    } finally {
      nt--;
    }
  }, ce = function() {
    return Nt || (ut = Uf(g, s), Nt = !0), ut;
  }, Q = n, Xe = Q.implementation, Dt = Q.createNodeIterator, pt = Q.createDocumentFragment, Ke = Q.getElementsByTagName, Gn = r.importNode;
  let ie = Qi();
  t.isSupported = typeof pl == "function" && typeof K == "function" && Xe && Xe.createHTMLDocument !== void 0;
  const Lr = Af, Lt = vf, en = xf, bn = wf, Yn = Cf, Ft = Of, Fr = Rf, f = Pf;
  let u = Xi, m = null;
  const S = J({}, [...Ki, ...ls, ...as, ...cs, ...Gi]);
  let _ = null;
  const y = J({}, [...Yi, ...fs, ...qi, ...ar]);
  let x = Object.seal(un(null, {
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
  const b = Object.seal(un(null, {
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
  let H = !0, R = !0, L = !1, k = !0, B = !1, q = !0, Y = !1, fe = !1, de = null, Ie = null, Fe = !1, Ge = !1, Ut = !1, Ee = !1, $e = !0, yn = !1;
  const Tn = "user-content-";
  let Ur = !0, Hr = !1, tn = {}, nn = null;
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
  let rn = rt, kr = !1, jr = null;
  const bl = J({}, [qn, Xn, rt], os), Ks = Te(["mi", "mo", "mn", "ms", "mtext"]);
  let $r = J({}, Ks);
  const Gs = Te(["annotation-xml"]);
  let Vr = J({}, Gs);
  const yl = J({}, ["title", "style", "font", "a", "script"]);
  let En = null;
  const Tl = ["application/xhtml+xml", "text/html"], El = "text/html";
  let he = null, sn = null;
  const Sl = n.createElement("form"), Ys = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, zr = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (sn && sn === l)
      return;
    (!l || typeof l != "object") && (l = {}), l = ze(l), En = // eslint-disable-next-line unicorn/prefer-includes
    Tl.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? El : l.PARSER_MEDIA_TYPE, he = En === "application/xhtml+xml" ? os : Pn, m = Ct(l, "ALLOWED_TAGS", S, {
      transform: he
    }), _ = Ct(l, "ALLOWED_ATTR", y, {
      transform: he
    }), jr = Ct(l, "ALLOWED_NAMESPACES", bl, {
      transform: os
    }), Bs = Ct(l, "ADD_URI_SAFE_ATTR", Ws, {
      transform: he,
      base: Ws
    }), Vs = Ct(l, "ADD_DATA_URI_TAGS", zs, {
      transform: he,
      base: zs
    }), nn = Ct(l, "FORBID_CONTENTS", $s, {
      transform: he
    }), w = Ct(l, "FORBID_TAGS", ze({}), {
      transform: he
    }), C = Ct(l, "FORBID_ATTR", ze({}), {
      transform: he
    }), tn = je(l, "USE_PROFILES") ? l.USE_PROFILES && typeof l.USE_PROFILES == "object" ? ze(l.USE_PROFILES) : l.USE_PROFILES : !1, H = l.ALLOW_ARIA_ATTR !== !1, R = l.ALLOW_DATA_ATTR !== !1, L = l.ALLOW_UNKNOWN_PROTOCOLS || !1, k = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = l.SAFE_FOR_TEMPLATES || !1, q = l.SAFE_FOR_XML !== !1, Y = l.WHOLE_DOCUMENT || !1, Ge = l.RETURN_DOM || !1, Ut = l.RETURN_DOM_FRAGMENT || !1, Ee = l.RETURN_TRUSTED_TYPE || !1, Fe = l.FORCE_BODY || !1, $e = l.SANITIZE_DOM !== !1, yn = l.SANITIZE_NAMED_PROPS || !1, Ur = l.KEEP_CONTENT !== !1, Hr = l.IN_PLACE || !1, u = Tf(l.ALLOWED_URI_REGEXP) ? l.ALLOWED_URI_REGEXP : Xi, rn = typeof l.NAMESPACE == "string" ? l.NAMESPACE : rt, $r = us(
      l,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => J({}, Ks)
      // Default built-in map
    ), Vr = us(
      l,
      "HTML_INTEGRATION_POINTS",
      () => J({}, Gs)
      // Default built-in map
    );
    const p = us(l, "CUSTOM_ELEMENT_HANDLING", () => un(null));
    if (x = un(null), je(p, "tagNameCheck") && Ys(p.tagNameCheck) && (x.tagNameCheck = p.tagNameCheck), je(p, "attributeNameCheck") && Ys(p.attributeNameCheck) && (x.attributeNameCheck = p.attributeNameCheck), je(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), Se(x), B && (R = !1), Ut && (Ge = !0), tn && (m = J({}, Gi), _ = un(null), tn.html === !0 && (J(m, Ki), J(_, Yi)), tn.svg === !0 && (J(m, ls), J(_, fs), J(_, ar)), tn.svgFilters === !0 && (J(m, as), J(_, fs), J(_, ar)), tn.mathMl === !0 && (J(m, cs), J(_, qi), J(_, ar))), b.tagCheck = null, b.attributeCheck = null, je(l, "ADD_TAGS") && (typeof l.ADD_TAGS == "function" ? b.tagCheck = l.ADD_TAGS : mn(l.ADD_TAGS) && (m === S && (m = ze(m)), J(m, l.ADD_TAGS, he))), je(l, "ADD_ATTR") && (typeof l.ADD_ATTR == "function" ? b.attributeCheck = l.ADD_ATTR : mn(l.ADD_ATTR) && (_ === y && (_ = ze(_)), J(_, l.ADD_ATTR, he))), je(l, "ADD_FORBID_CONTENTS") && mn(l.ADD_FORBID_CONTENTS) && (nn === $s && (nn = ze(nn)), J(nn, l.ADD_FORBID_CONTENTS, he)), Ur && (m["#text"] = !0), Y && J(m, ["html", "head", "body"]), m.table && (J(m, ["tbody"]), delete w.tbody), l.TRUSTED_TYPES_POLICY) {
      if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const T = be;
      be = l.TRUSTED_TYPES_POLICY;
      try {
        Re = dt("");
      } catch (P) {
        throw be = T, P;
      }
    } else l.TRUSTED_TYPES_POLICY === null ? (be = void 0, Re = "") : (be === void 0 && (be = ce()), be && typeof Re == "string" && (Re = dt("")));
    Te && Te(l), sn = l;
  }, qs = J({}, [...ls, ...as, ...Ef]), Xs = J({}, [...cs, ...Sf]), Al = function(l, p, T) {
    return p.namespaceURI === rt ? l === "svg" : p.namespaceURI === qn ? l === "svg" && (T === "annotation-xml" || $r[T]) : !!qs[l];
  }, vl = function(l, p, T) {
    return p.namespaceURI === rt ? l === "math" : p.namespaceURI === Xn ? l === "math" && Vr[T] : !!Xs[l];
  }, xl = function(l, p, T) {
    return p.namespaceURI === Xn && !Vr[T] || p.namespaceURI === qn && !$r[T] ? !1 : !Xs[l] && (yl[l] || !qs[l]);
  }, wl = function(l) {
    let p = K(l);
    (!p || !p.tagName) && (p = {
      namespaceURI: rn,
      tagName: "template"
    });
    const T = Pn(l.tagName), P = Pn(p.tagName);
    return jr[l.namespaceURI] ? l.namespaceURI === Xn ? Al(T, p, P) : l.namespaceURI === qn ? vl(T, p, P) : l.namespaceURI === rt ? xl(T, p, P) : !!(En === "application/xhtml+xml" && jr[l.namespaceURI]) : !1;
  }, wt = function(l) {
    wn(t.removed, {
      element: l
    });
    try {
      K(l).removeChild(l);
    } catch {
      if (U(l), !K(l))
        throw zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Js = function(l, p, T) {
    try {
      l.removeAttributeNode(p);
    } catch {
      try {
        l.removeAttribute(T);
      } catch {
      }
    }
  }, Jn = function(l) {
    Zn(l);
    const p = E(l);
    if (p) {
      const P = [];
      Wt(p, (D) => {
        wn(P, D);
      }), Wt(P, (D) => {
        try {
          U(D);
        } catch {
        }
      });
    }
    const T = G(l);
    if (T)
      for (let P = T.length - 1; P >= 0; --P) {
        const D = T[P], $ = D && D.name;
        typeof $ == "string" && Js(l, D, $);
      }
  }, Ht = function(l, p, T) {
    if (!T)
      try {
        T = p.getAttributeNode(l);
      } catch {
        T = null;
      }
    wn(t.removed, {
      attribute: T || null,
      from: p
    });
    try {
      T ? p.removeAttributeNode(T) : p.removeAttribute(l);
    } catch {
      try {
        p.removeAttribute(l);
      } catch {
      }
    }
    if (l === "is")
      if (Ge || Ut)
        try {
          wt(p);
        } catch {
        }
      else
        try {
          p.setAttribute(l, "");
        } catch {
        }
  }, Cl = function(l) {
    const p = G(l);
    if (p)
      for (let T = p.length - 1; T >= 0; --T) {
        const P = p[T], D = P && P.name;
        typeof D != "string" || _[he(D)] || Js(l, P, D);
      }
  }, Zn = function(l) {
    const p = [l];
    for (; p.length > 0; ) {
      const T = p.pop();
      me(T) === Ve.element && Cl(T);
      const D = E(T);
      if (D)
        for (let $ = D.length - 1; $ >= 0; --$)
          p.push(D[$]);
    }
  }, Zs = function(l, p) {
    return q ? l === "patchsrc" ? !0 : l === "for" && p !== "label" && p !== "output" : !1;
  }, Ol = function(l) {
    if (!q)
      return;
    const p = [l];
    for (; p.length > 0; ) {
      const T = p.pop(), P = me(T);
      if (P === Ve.processingInstruction || P === Ve.comment && xe(Zi, T.data)) {
        try {
          U(T);
        } catch {
        }
        continue;
      }
      if (P === Ve.element) {
        const $ = T, oe = he(We(T));
        try {
          $.hasAttribute && $.hasAttribute("patchsrc") && $.removeAttribute("patchsrc"), $.hasAttribute && $.hasAttribute("for") && Zs("for", oe) && $.removeAttribute("for");
        } catch {
        }
      }
      const D = E(T);
      if (D)
        for (let $ = D.length - 1; $ >= 0; --$)
          p.push(D[$]);
    }
  }, Qs = function(l) {
    let p = null, T = null;
    if (Fe)
      l = "<remove></remove>" + l;
    else {
      const $ = Vi(l, /^[\r\n\t ]+/);
      T = $ && $[0];
    }
    En === "application/xhtml+xml" && rn === rt && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const P = be ? dt(l) : l;
    if (rn === rt)
      try {
        p = new d().parseFromString(P, En);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = Xe.createDocument(rn, "template", null);
      try {
        p.documentElement.innerHTML = kr ? Re : P;
      } catch {
      }
    }
    const D = p.body || p.documentElement;
    return l && T && D.insertBefore(n.createTextNode(T), D.childNodes[0] || null), rn === rt ? Ke.call(p, Y ? "html" : "body")[0] : Y ? p.documentElement : D;
  }, ei = function(l) {
    const p = _e ? _e(l) : l.ownerDocument;
    return Dt.call(
      p || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qn = function(l) {
    return l = Cn(l, Lr, " "), l = Cn(l, Lt, " "), l = Cn(l, en, " "), l;
  }, Br = function(l) {
    var p;
    l.normalize();
    const T = _e ? _e(l) : l.ownerDocument, P = Dt.call(
      T || l,
      l,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let D = P.nextNode();
    for (; D; )
      D.data = Qn(D.data), D = P.nextNode();
    const $ = (p = l.querySelectorAll) === null || p === void 0 ? void 0 : p.call(l, "template");
    $ && Wt($, (oe) => {
      on(oe.content) && Br(oe.content);
    });
  }, er = function(l) {
    const p = Z ? Z(l) : null;
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
    l.childNodes !== E(l);
  }, on = function(l) {
    if (!M || typeof l != "object" || l === null)
      return !1;
    try {
      return M(l) === Ve.documentFragment;
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
  function st(v, l, p) {
    v.length !== 0 && Wt(v, (T) => {
      T.call(t, l, p, sn);
    });
  }
  const Rl = function(l, p) {
    return !!(q && l.hasChildNodes() && !Sn(l.firstElementChild) && xe(Ji, l.textContent) && xe(Ji, l.innerHTML) || q && l.namespaceURI === rt && Df[p] && (Sn(l.firstElementChild) || typeof l.textContent == "string" && xe(Lf[p], l.textContent)) || l.nodeType === Ve.processingInstruction || q && l.nodeType === Ve.comment && xe(Zi, l.data));
  }, tr = function(l, p) {
    if (l instanceof RegExp)
      return xe(l, p);
    if (l instanceof Function) {
      for (var T = arguments.length, P = new Array(T > 2 ? T - 2 : 0), D = 2; D < T; D++)
        P[D - 2] = arguments[D];
      return !!l(p, ...P);
    }
    return !1;
  }, Il = function(l, p, T) {
    if (!w[p] && ii(p) && tr(x.tagNameCheck, p))
      return !1;
    if (Ur && !nn[p]) {
      const P = K(l), D = E(l);
      if (D && P) {
        const $ = D.length;
        for (let oe = $ - 1; oe >= 0; --oe) {
          const ue = l === T ? I(D[oe], !0) : D[oe];
          P.insertBefore(ue, O(l));
        }
      }
    }
    return wt(l), !0;
  }, ti = function(l, p, T, P) {
    return l.length === 0 ? p : p === T || p === P ? ze(p) : p;
  }, ni = function(l, p) {
    return l === p || K(l) !== null ? !1 : (Hr && Zn(l), !0);
  }, ri = function(l, p) {
    if (st(ie.beforeSanitizeElements, l, null), ni(l, p))
      return !0;
    if (er(l))
      return wt(l), !0;
    const T = he(We(l));
    if (m = ti(ie.uponSanitizeElement, m, S, de), st(ie.uponSanitizeElement, l, {
      tagName: T,
      allowedTags: m
    }), ni(l, p))
      return !0;
    if (Rl(l, T))
      return wt(l), !0;
    if (w[T] || !(b.tagCheck instanceof Function && b.tagCheck(T)) && !m[T]) {
      const D = Il(l, T, p);
      return D === !1 && st(ie.afterSanitizeElements, l, null), D;
    }
    if (me(l) === Ve.element && !wl(l) || (T === "noscript" || T === "noembed" || T === "noframes") && xe(Mf, l.innerHTML))
      return wt(l), !0;
    if (B && l.nodeType === Ve.text) {
      const D = Qn(l.textContent);
      l.textContent !== D && (wn(t.removed, {
        element: l.cloneNode()
      }), l.textContent = D);
    }
    return st(ie.afterSanitizeElements, l, null), !1;
  }, si = function(l, p, T) {
    if (C[p] || Zs(p, l) || $e && (p === "id" || p === "name") && (T in n || T in Sl))
      return !1;
    const P = _[p] || b.attributeCheck instanceof Function && b.attributeCheck(p, l);
    return R && xe(bn, p) || H && xe(Yn, p) ? !0 : P ? Bs[p] || xe(u, Cn(T, Fr, "")) || (p === "src" || p === "xlink:href" || p === "href") && l !== "script" && zi(T, "data:") === 0 && Vs[l] || L && !xe(Ft, Cn(T, Fr, "")) ? !0 : !T : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ii(l) && tr(x.tagNameCheck, l) && tr(x.attributeNameCheck, p, l) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      p === "is" && x.allowCustomizedBuiltInElements && tr(x.tagNameCheck, T)
    );
  }, Pl = J({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ii = function(l) {
    return !Pl[Pn(l)] && xe(f, l);
  }, Ml = function(l, p, T, P) {
    if (be && typeof g == "object" && typeof g.getAttributeType == "function" && !T)
      switch (g.getAttributeType(l, p)) {
        case "TrustedHTML":
          return dt(P);
        case "TrustedScriptURL":
          return Ae(P);
      }
    return P;
  }, Nl = function(l, p, T, P) {
    try {
      T ? l.setAttributeNS(T, p, P) : l.setAttribute(p, P), er(l) ? wt(l) : $i(t.removed);
    } catch {
      Ht(p, l);
    }
  }, oi = function(l) {
    st(ie.beforeSanitizeAttributes, l, null);
    const p = l.attributes;
    if (!p || er(l))
      return;
    _ = ti(ie.uponSanitizeAttribute, _, y, Ie);
    const T = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let P = p.length;
    const D = he(l.nodeName);
    for (; P--; ) {
      const $ = p[P], oe = $.name, ue = $.namespaceURI, Ue = $.value, He = he(oe), Kr = Ue;
      let Pe = oe === "value" ? Kr : hf(Kr);
      if (T.attrName = He, T.attrValue = Pe, T.keepAttr = !0, T.forceKeepAttr = void 0, st(ie.uponSanitizeAttribute, l, T), Pe = T.attrValue, yn && (He === "id" || He === "name") && zi(Pe, Tn) !== 0 && (Ht(oe, l, $), Pe = Tn + Pe), q && xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Pe)) {
        Ht(oe, l, $);
        continue;
      }
      if (He === "attributename" && Vi(Pe, "href")) {
        Ht(oe, l, $);
        continue;
      }
      if (!T.forceKeepAttr) {
        if (!T.keepAttr) {
          Ht(oe, l, $);
          continue;
        }
        if (!k && xe(Nf, Pe)) {
          Ht(oe, l, $);
          continue;
        }
        if (B && (Pe = Qn(Pe)), !si(D, He, Pe)) {
          Ht(oe, l, $);
          continue;
        }
        Pe = Ml(D, He, ue, Pe), Pe !== Kr && Nl(l, oe, ue, Pe);
      }
    }
    st(ie.afterSanitizeAttributes, l, null);
  }, nr = function(l) {
    let p = null;
    const T = ei(l);
    for (st(ie.beforeSanitizeShadowDOM, l, null); p = T.nextNode(); )
      if (st(ie.uponSanitizeShadowNode, p, null), ri(p, l), oi(p), on(p.content) && nr(p.content), me(p) === Ve.element) {
        const P = z(p);
        on(P) && (Wr(P), nr(P));
      }
    st(ie.afterSanitizeShadowDOM, l, null);
  }, Wr = function(l) {
    const p = [{
      node: l,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const T = p.pop();
      if (T.shadow) {
        nr(T.shadow);
        continue;
      }
      const P = T.node, $ = me(P) === Ve.element, oe = E(P);
      if (oe)
        for (let ue = oe.length - 1; ue >= 0; --ue)
          p.push({
            node: oe[ue],
            shadow: null
          });
      if ($) {
        const ue = Z ? Z(P) : null;
        if (typeof ue == "string" && he(ue) === "template") {
          const Ue = P.content;
          on(Ue) && p.push({
            node: Ue,
            shadow: null
          });
        }
      }
      if ($) {
        const ue = z(P);
        on(ue) && p.push({
          node: null,
          shadow: ue
        }, {
          node: ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(v) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, T = null, P = null, D = null;
    if (kr = !v, kr && (v = "<!-->"), typeof v != "string" && !Sn(v) && (v = yf(v), typeof v != "string"))
      throw zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return v;
    fe ? (m = de, _ = Ie) : zr(l), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (m = ze(m)), ie.uponSanitizeAttribute.length > 0 && (_ = ze(_)), t.removed = [];
    const $ = Hr && typeof v != "string" && Sn(v);
    if ($) {
      Ol(v);
      const Ue = We(v);
      if (typeof Ue == "string") {
        const He = he(Ue);
        if (!m[He] || w[He])
          throw Jn(v), zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (er(v))
        throw Jn(v), zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Wr(v);
      } catch (He) {
        throw Jn(v), He;
      }
    } else if (Sn(v))
      p = Qs("<!---->"), T = p.ownerDocument.importNode(v, !0), T.nodeType === Ve.element && T.nodeName === "BODY" || T.nodeName === "HTML" ? p = T : p.appendChild(T), Wr(T);
    else {
      if (!Ge && !B && !Y && // eslint-disable-next-line unicorn/prefer-includes
      v.indexOf("<") === -1)
        return be && Ee ? dt(v) : v;
      if (p = Qs(v), !p)
        return Ge ? null : Ee ? Re : "";
    }
    p && Fe && wt(p.firstChild);
    const oe = $ ? v : p;
    try {
      const Ue = ei(oe);
      for (; P = Ue.nextNode(); )
        ri(P, oe), oi(P), on(P.content) && nr(P.content);
    } catch (Ue) {
      throw $ && (Jn(v), Wt(t.removed, (He) => {
        He.element && Zn(He.element);
      })), Ue;
    }
    if ($)
      return Wt(t.removed, (Ue) => {
        Ue.element && Zn(Ue.element);
      }), B && Br(v), v;
    if (Ge) {
      if (B && Br(p), Ut)
        for (D = pt.call(p.ownerDocument); p.firstChild; )
          D.appendChild(p.firstChild);
      else
        D = p;
      return (_.shadowroot || _.shadowrootmode) && (D = Gn.call(r, D, !0)), D;
    }
    let ue = Y ? p.outerHTML : p.innerHTML;
    return Y && m["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && xe(If, p.ownerDocument.doctype.name) && (ue = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ue), B && (ue = Qn(ue)), be && Ee ? dt(ue) : ue;
  }, t.setConfig = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zr(v), fe = !0, de = m, Ie = _;
  }, t.clearConfig = function() {
    sn = null, fe = !1, de = null, Ie = null, be = ut, Re = "";
  }, t.isValidAttribute = function(v, l, p) {
    sn || zr({});
    const T = he(v), P = he(l);
    return si(T, P, p);
  }, t.addHook = function(v, l) {
    typeof l == "function" && je(ie, v) && wn(ie[v], l);
  }, t.removeHook = function(v, l) {
    if (je(ie, v)) {
      if (l !== void 0) {
        const p = df(ie[v], l);
        return p === -1 ? void 0 : pf(ie[v], p, 1)[0];
      }
      return $i(ie[v]);
    }
  }, t.removeHooks = function(v) {
    je(ie, v) && (ie[v] = []);
  }, t.removeAllHooks = function() {
    ie = Qi();
  }, t;
}
var Hf = gl();
function kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds, eo;
function jf() {
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
var $f = jf();
const to = /* @__PURE__ */ kf($f);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Vf(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function N(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, a = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (O) => O, h = (a.sanitize ? Hf.sanitize : c) || c, d = a.escape ? to : c, g = (O) => typeof O == "string" || typeof O == "number", A = (O, E, K) => O.replace(/%n/g, "" + K).replace(/{([^{}]*)}/g, (z, G) => {
    if (E === void 0 || !(G in E))
      return d(z);
    const M = E[G];
    return g(M) ? d(`${M}`) : typeof M == "object" && g(M.value) ? (M.escape !== !1 ? to : c)(`${M.value}`) : d(z);
  });
  let U = (s?.bundle ?? Vf(e)).translations[t] || t;
  return U = Array.isArray(U) ? U[0] : U, h(typeof i == "object" || o !== void 0 ? A(
    U,
    i,
    o
  ) : U);
}
const zf = { class: "library-vue-catalogue" }, Bf = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Wf = { id: "library-catalogue-heading" }, Kf = { class: "library-muted" }, Gf = ["aria-label"], Yf = { value: "" }, qf = ["value"], Xf = { value: "" }, Jf = ["value"], Zf = { value: "" }, Qf = ["value"], eu = { value: "" }, tu = ["value"], nu = { value: "title" }, ru = { value: "recent" }, su = { value: "publicationDate" }, iu = { value: "format" }, ou = ["value"], lu = ["value"], au = ["aria-label"], cu = ["aria-label"], fu = ["aria-label"], uu = ["href"], du = {
  key: 1,
  class: "library-muted"
}, pu = ["href"], hu = {
  key: 3,
  class: "library-muted"
}, mu = {
  key: 0,
  class: "library-empty-content",
  role: "status"
}, gu = { class: "library-muted" }, _u = {
  key: 1,
  class: "library-cover-gallery"
}, bu = ["href", "aria-label"], yu = ["src", "alt"], Tu = { class: "library-cover-summary" }, Eu = {
  key: 0,
  class: "library-creator"
}, Su = { class: "library-muted" }, Au = { key: 0 }, vu = { key: 1 }, xu = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, wu = { key: 0 }, Cu = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, Ou = {
  key: 0,
  class: "library-muted"
}, Ru = ["href"], Iu = ["href"], Pu = ["href"], Mu = {
  class: "library-hero library-secondary-panel",
  "aria-label": "Library settings"
}, Nu = { class: "library-hero-actions" }, Du = ["href"], Lu = ["href"], Fu = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = Ot(() => t.state.items || []), i = Ot(() => t.state.shelves || []), o = Ot(() => t.state.formats || []), a = Ot(() => t.state.scanStatuses || []), c = Ot(() => t.state.cataloguePagination || {
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
    }), d = Ot(() => t.state.settingsUrl || ""), g = Ot(() => t.state.metadataExportUrl || "");
    function A(U) {
      return String(U || "").toUpperCase();
    }
    function I(U) {
      return U.nextcloudTags || [];
    }
    return (U, O) => (re(), le("div", zf, [
      F("section", Bf, [
        F("h2", Wf, V(X(N)("library", "Publication catalogue")), 1),
        F("p", Kf, V(X(N)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1),
        F("form", {
          method: "get",
          class: "library-filter-bar",
          "aria-label": X(N)("library", "Catalogue search and filters")
        }, [
          F("label", null, [
            Ye(V(X(N)("library", "Search title / author")) + " ", 1),
            kt(F("input", {
              "onUpdate:modelValue": O[0] || (O[0] = (E) => h.q = E),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Fi, h.q]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Type")) + " ", 1),
            kt(F("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (E) => h.type = E),
              name: "type"
            }, [
              F("option", Yf, V(X(N)("library", "All types")), 1),
              (re(), le(we, null, $t(n, (E) => F("option", {
                key: E,
                value: E
              }, V(E), 9, qf)), 64))
            ], 512), [
              [xn, h.type]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Nextcloud tag")) + " ", 1),
            kt(F("input", {
              "onUpdate:modelValue": O[2] || (O[2] = (E) => h.tag = E),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Fi, h.tag]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Format")) + " ", 1),
            kt(F("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (E) => h.format = E),
              name: "format"
            }, [
              F("option", Xf, V(X(N)("library", "All formats")), 1),
              (re(!0), le(we, null, $t(o.value, (E) => (re(), le("option", {
                key: E,
                value: E
              }, V(A(E)), 9, Jf))), 128))
            ], 512), [
              [xn, h.format]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Shelf")) + " ", 1),
            kt(F("select", {
              "onUpdate:modelValue": O[4] || (O[4] = (E) => h.shelf = E),
              name: "shelf"
            }, [
              F("option", Zf, V(X(N)("library", "All shelves")), 1),
              (re(!0), le(we, null, $t(i.value, (E) => (re(), le("option", {
                key: E,
                value: E
              }, V(E), 9, Qf))), 128))
            ], 512), [
              [xn, h.shelf]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Scan status")) + " ", 1),
            kt(F("select", {
              "onUpdate:modelValue": O[5] || (O[5] = (E) => h.status = E),
              name: "status"
            }, [
              F("option", eu, V(X(N)("library", "All scan statuses")), 1),
              (re(!0), le(we, null, $t(a.value, (E) => (re(), le("option", {
                key: E,
                value: E
              }, V(E), 9, tu))), 128))
            ], 512), [
              [xn, h.status]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Sort")) + " ", 1),
            kt(F("select", {
              "onUpdate:modelValue": O[6] || (O[6] = (E) => h.sort = E),
              name: "sort"
            }, [
              F("option", nu, V(X(N)("library", "Title")), 1),
              F("option", ru, V(X(N)("library", "Recently added")), 1),
              F("option", su, V(X(N)("library", "Publication date")), 1),
              F("option", iu, V(X(N)("library", "Format")), 1)
            ], 512), [
              [xn, h.sort]
            ])
          ]),
          F("label", null, [
            Ye(V(X(N)("library", "Page size")) + " ", 1),
            F("select", {
              value: c.value.limit,
              name: "limit"
            }, [
              (re(), le(we, null, $t(r, (E) => F("option", {
                key: E,
                value: E
              }, V(E), 9, lu)), 64))
            ], 8, ou)
          ]),
          F("button", {
            type: "submit",
            class: "button primary",
            "aria-label": X(N)("library", "Apply catalogue filters")
          }, V(X(N)("library", "Apply filters")), 9, au),
          F("a", {
            href: "?",
            class: "button secondary",
            "aria-label": X(N)("library", "Clear catalogue filters")
          }, V(X(N)("library", "Clear")), 9, cu)
        ], 8, Gf),
        F("nav", {
          class: "library-pagination",
          "aria-label": X(N)("library", "Catalogue pagination")
        }, [
          F("span", null, "Showing " + V(c.value.from) + "–" + V(c.value.to) + " of " + V(c.value.total) + " catalogue items", 1),
          c.value.previousUrl ? (re(), le("a", {
            key: 0,
            href: c.value.previousUrl
          }, V(X(N)("library", "Previous")), 9, uu)) : (re(), le("span", du, V(X(N)("library", "Previous")), 1)),
          c.value.nextUrl ? (re(), le("a", {
            key: 2,
            href: c.value.nextUrl
          }, V(X(N)("library", "Next")), 9, pu)) : (re(), le("span", hu, V(X(N)("library", "Next")), 1))
        ], 8, fu),
        s.value.length === 0 ? (re(), le("div", mu, [
          F("h3", null, V(X(N)("library", "No catalogue items match")), 1),
          F("p", gu, V(X(N)("library", "Scan enabled roots or clear the active filters.")), 1)
        ])) : (re(), le("div", _u, [
          (re(!0), le(we, null, $t(s.value, (E) => (re(), le("article", {
            key: E.id,
            class: "library-cover-card"
          }, [
            F("a", {
              class: "library-cover-link",
              href: E.openUrl,
              "aria-label": `Read ${E.title}`
            }, [
              F("img", {
                class: "library-cover-image",
                src: E.coverUrl,
                alt: `Cover for ${E.title}`,
                loading: "lazy"
              }, null, 8, yu)
            ], 8, bu),
            F("div", Tu, [
              F("h3", null, V(E.title), 1),
              E.creators ? (re(), le("p", Eu, V(E.creators), 1)) : an("", !0),
              F("p", Su, [
                F("span", null, V(E.publicationType), 1),
                E.extension ? (re(), le("span", Au, " · Format: " + V(A(E.extension)), 1)) : an("", !0),
                E.shelf ? (re(), le("span", vu, " · Shelf: " + V(E.shelf), 1)) : an("", !0)
              ]),
              E.scanStatus !== "indexed" || E.scanError ? (re(), le("p", xu, [
                Ye(" scanStatus: " + V(E.scanStatus || "unknown"), 1),
                E.scanError ? (re(), le("span", wu, " · scanError: " + V(E.scanError), 1)) : an("", !0)
              ])) : an("", !0),
              F("div", Cu, [
                I(E).length === 0 ? (re(), le("span", Ou, "No Nextcloud tags")) : (re(!0), le(we, { key: 1 }, $t(I(E), (K) => (re(), le("span", {
                  key: K.id,
                  class: "library-tag"
                }, V(K.name), 1))), 128))
              ]),
              F("p", null, [
                F("a", {
                  href: E.openUrl
                }, V(X(N)("library", "Read")), 9, Ru),
                O[7] || (O[7] = Ye(" · ", -1)),
                F("a", {
                  href: E.filesUrl
                }, V(X(N)("library", "Show in Files")), 9, Iu),
                O[8] || (O[8] = Ye(" · ", -1)),
                F("a", {
                  href: E.detailsUrl
                }, V(X(N)("library", "Details")), 9, Pu)
              ])
            ])
          ]))), 128))
        ]))
      ]),
      F("section", Mu, [
        O[9] || (O[9] = F("div", null, [
          F("h2", null, "Library"),
          F("p", { class: "library-lede" }, "Browse publications already stored in Nextcloud.")
        ], -1)),
        F("div", Nu, [
          F("a", {
            href: d.value,
            class: "button secondary",
            "aria-label": "Open Library settings"
          }, "Library settings", 8, Du),
          g.value ? (re(), le("a", {
            key: 0,
            href: g.value,
            class: "button secondary",
            "aria-label": "Export corrected metadata"
          }, "Export corrected metadata", 8, Lu)) : an("", !0)
        ])
      ])
    ]));
  }
}, no = nf("library", "catalogue", {}), dr = document.querySelector("#library-vue-root"), ro = {
  ...no,
  requestToken: dr?.dataset.requestToken || no.requestToken || ""
};
function ye(e) {
  return String(e ?? "");
}
function _l(e) {
  return ye(e).toUpperCase();
}
function Uu(e, t, n, r = ye) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ye(s), i.textContent = r(s), ye(s) === ye(n) && (i.selected = !0), e.appendChild(i);
  }
}
function so(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ye(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function cn(e, t, n, r, s, i, o = ye) {
  const a = document.createElement("label");
  a.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const h = document.createElement("option");
  h.value = "", h.textContent = s, c.appendChild(h), Uu(c, i, r, o), a.appendChild(c), e.appendChild(a);
}
function Hu(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", N("library", "Catalogue search and filters")), so(r, N("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), cn(r, N("library", "Type"), "type", n.type, N("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), so(r, N("library", "Nextcloud tag"), "tag", n.tag, "photography"), cn(r, N("library", "Format"), "format", n.format, N("library", "All formats"), e.formats || [], _l), cn(r, N("library", "Shelf"), "shelf", n.shelf, N("library", "All shelves"), e.shelves || []), cn(r, N("library", "Scan status"), "status", n.status, N("library", "All scan statuses"), e.scanStatuses || []), cn(r, N("library", "Sort"), "sort", n.sort || "title", N("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), cn(r, N("library", "Page size"), "limit", t.limit || 100, N("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", N("library", "Apply catalogue filters")), s.textContent = N("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", N("library", "Clear catalogue filters")), i.textContent = N("library", "Clear"), r.append(s, i), r;
}
function ku(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ye(e.settingsUrl || ""), i = document.createElement("div");
  i.className = "library-vue-catalogue library-vue-fallback", i.dataset.vueFallback = "true";
  const o = document.createElement("section");
  o.className = "library-panel", o.setAttribute("aria-labelledby", "library-catalogue-heading");
  const a = document.createElement("h2");
  a.id = "library-catalogue-heading", a.textContent = N("library", "Publication catalogue"), o.appendChild(a);
  const c = document.createElement("p");
  c.className = "library-muted", c.textContent = N("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), o.appendChild(c), o.appendChild(Hu(e, r));
  const h = document.createElement("nav");
  h.className = "library-pagination", h.setAttribute("aria-label", N("library", "Catalogue pagination"));
  const d = document.createElement("span");
  if (d.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`, h.appendChild(d), o.appendChild(h), n.length === 0) {
    const g = document.createElement("div");
    g.className = "library-empty-content", g.setAttribute("role", "status");
    const A = document.createElement("h3");
    A.textContent = N("library", "No catalogue items match");
    const I = document.createElement("p");
    I.className = "library-muted", I.textContent = N("library", "Scan enabled roots or clear the active filters."), g.append(A, I), o.appendChild(g);
  } else {
    const g = document.createElement("div");
    g.className = "library-cover-gallery";
    for (const A of n) {
      const I = document.createElement("article");
      I.className = "library-cover-card";
      const U = document.createElement("a");
      U.className = "library-cover-link", U.href = ye(A.openUrl || "#"), U.setAttribute("aria-label", `Read ${ye(A.title || "publication")}`);
      const O = document.createElement("img");
      O.className = "library-cover-image", O.src = ye(A.coverUrl || ""), O.alt = `Cover for ${ye(A.title || "publication")}`, O.loading = "lazy", U.appendChild(O);
      const E = document.createElement("div");
      E.className = "library-cover-summary";
      const K = document.createElement("h3");
      if (K.textContent = ye(A.title || "Untitled publication"), E.appendChild(K), A.creators) {
        const me = document.createElement("p");
        me.className = "library-creator", me.textContent = ye(A.creators), E.appendChild(me);
      }
      const z = document.createElement("p");
      z.className = "library-muted", z.textContent = [
        ye(A.publicationType || "other"),
        A.extension ? `Format: ${_l(A.extension)}` : "",
        A.shelf ? `Shelf: ${ye(A.shelf)}` : ""
      ].filter(Boolean).join(" · "), E.appendChild(z);
      const G = document.createElement("p"), M = document.createElement("a");
      M.href = ye(A.openUrl || "#"), M.textContent = N("library", "Read");
      const Z = document.createElement("a");
      Z.href = ye(A.filesUrl || "#"), Z.textContent = N("library", "Show in Files");
      const _e = document.createElement("a");
      _e.href = ye(A.detailsUrl || "#"), _e.textContent = N("library", "Details"), G.append(M, document.createTextNode(" · "), Z, document.createTextNode(" · "), _e), E.appendChild(G), I.append(U, E), g.appendChild(I);
    }
    o.appendChild(g);
  }
  if (i.appendChild(o), s) {
    const g = document.createElement("section");
    g.className = "library-hero library-secondary-panel", g.setAttribute("aria-label", "Library settings");
    const A = document.createElement("div"), I = document.createElement("h2");
    I.textContent = "Library";
    const U = document.createElement("p");
    U.className = "library-lede", U.textContent = "Browse publications already stored in Nextcloud.", A.append(I, U);
    const O = document.createElement("div");
    O.className = "library-hero-actions";
    const E = document.createElement("a");
    E.href = s, E.className = "button secondary", E.setAttribute("aria-label", "Open Library settings"), E.textContent = "Library settings", O.appendChild(E), g.append(A, O), i.appendChild(g);
  }
  return i;
}
if (dr)
  try {
    Qc(Fu, { state: ro }).mount(dr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), dr.replaceChildren(ku(ro));
  }
//# sourceMappingURL=library-main.mjs.map
