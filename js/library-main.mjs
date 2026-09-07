// @__NO_SIDE_EFFECTS__
function Ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, _n = [], Nt = () => {
}, co = () => !1, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rr = (e) => e.startsWith("onUpdate:"), Ke = Object.assign, Ps = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, ue = (e, t) => Hl.call(e, t), G = Array.isArray, qt = (e) => Jn(e) === "[object Map]", an = (e) => Jn(e) === "[object Set]", di = (e) => Jn(e) === "[object Date]", Q = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Pt = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", uo = (e) => (fe(e) || Q(e)) && Q(e.then) && Q(e.catch), fo = Object.prototype.toString, Jn = (e) => fo.call(e), jl = (e) => Jn(e).slice(8, -1), po = (e) => Jn(e) === "[object Object]", Is = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $l = /-\w/g, _t = Nr(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, cn = Nr(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), ho = Nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = Nr(
  (e) => e ? `on${ho(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), mr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mo = (e, t, n, r = !1) => {
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
let pi;
const Ir = () => pi || (pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ls(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ce(r) ? ql(r) : Ls(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Ce(e) || fe(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Bl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function ql(e) {
  const t = {};
  return e.replace(Wl, "").split(zl).forEach((n) => {
    if (n) {
      const r = n.split(Bl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function vn(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = vn(e[n]);
      r && (t += r + " ");
    }
  else if (fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gl = /* @__PURE__ */ Ns(Kl);
function bo(e) {
  return !!e || e === "";
}
function Yl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kt(e[r], t[r]);
  return n;
}
function hi(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Kt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = di(e), r = di(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Pt(e), r = Pt(t), n || r)
    return e === t;
  if (n = G(e), r = G(t), n || r)
    return n && r ? Yl(e, t) : !1;
  if (n = fe(e), r = fe(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = qt(e), r = qt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? hi(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Kt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), T = (e) => Ce(e) ? e : e == null ? "" : G(e) || fe(e) && (e.toString === fo || !Q(e.toString)) ? yo(e) ? T(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Jr(r, i) + " =>"] = s, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jr(n))
} : Pt(t) ? Jr(t) : fe(t) && !G(t) && !po(t) ? String(t) : t, Jr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let ze;
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ze && (ze.active ? (this.parent = ze, this.index = (ze.scopes || (ze.scopes = [])).push(
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
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ze, ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ze === this)
        ze = this.prevScope;
      else {
        let t = ze;
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
function Zl() {
  return ze;
}
let ye;
const Zr = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zr.has(this) && (Zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, mi(this), So(this);
    const t = ye, n = vt;
    ye = this, vt = !0;
    try {
      return this.fn();
    } finally {
      Eo(this), ye = t, vt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fs(t);
      this.deps = this.depsTail = void 0, mi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gs(this) && this.run();
  }
  get dirty() {
    return gs(this);
  }
}
let vo = 0, jn, $n;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = jn, jn = e;
}
function Ms() {
  vo++;
}
function Ds() {
  if (--vo > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
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
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Eo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Fs(r), Ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, r = vt;
  ye = e, vt = !0;
  try {
    So(e);
    const s = e.fn(e._value);
    (t.version === 0 || Rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ye = n, vt = r, Eo(e), e.flags &= -3;
  }
}
function Fs(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Fs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vt = !0;
const xo = [];
function Ut() {
  xo.push(vt), vt = !1;
}
function Ht() {
  const e = xo.pop();
  vt = e === void 0 ? !0 : e;
}
function mi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ye;
    ye = void 0;
    try {
      t();
    } finally {
      ye = n;
    }
  }
}
let Wn = 0;
class ea {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ye || !vt || ye === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ye)
      n = this.activeLink = new ea(ye, this), ye.deps ? (n.prevDep = ye.depsTail, ye.depsTail.nextDep = n, ye.depsTail = n) : ye.deps = ye.depsTail = n, Co(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ye.depsTail, n.nextDep = void 0, ye.depsTail.nextDep = n, ye.depsTail = n, ye.deps === n && (ye.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Ms();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
    }
  }
}
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Co(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const _s = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function We(e, t, n) {
  if (vt && ye) {
    let r = _s.get(e);
    r || _s.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new ks()), s.map = r, s.key = n), s.track();
  }
}
function Dt(e, t, n, r, s, i) {
  const o = _s.get(e);
  if (!o) {
    Wn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ms(), t === "clear")
    o.forEach(l);
  else {
    const c = G(e), g = c && Is(n);
    if (c && n === "length") {
      const m = Number(r);
      o.forEach((A, L) => {
        (L === "length" || L === qn || !Pt(L) && L >= m) && l(A);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), g && l(o.get(qn)), t) {
        case "add":
          c ? g && l(o.get("length")) : (l(o.get(sn)), qt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(sn)), qt(e) && l(o.get(vs)));
          break;
        case "set":
          qt(e) && l(o.get(sn));
          break;
      }
  }
  Ds();
}
function mn(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (We(t, "iterate", qn), /* @__PURE__ */ bt(e) ? t : t.map(Tt));
}
function Lr(e) {
  return We(e = /* @__PURE__ */ ce(e), "iterate", qn), e;
}
function wt(e, t) {
  return /* @__PURE__ */ jt(e) ? An(/* @__PURE__ */ on(e) ? Tt(t) : t) : Tt(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qr(this, Symbol.iterator, (e) => wt(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => G(t) ? mn(t) : t)
    );
  },
  entries() {
    return Qr(this, "entries", (e) => (e[1] = wt(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => wt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => wt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => wt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return es(this, "includes", e);
  },
  indexOf(...e) {
    return es(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return es(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bi(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
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
    return Nn(this, "unshift", e);
  },
  values() {
    return Qr(this, "values", (e) => wt(this, e));
  }
};
function Qr(e, t, n) {
  const r = Lr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ bt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const na = Array.prototype;
function It(e, t, n, r, s, i) {
  const o = Lr(e), l = o !== e && !/* @__PURE__ */ bt(e), c = o[t];
  if (c !== na[t]) {
    const A = c.apply(e, i);
    return l ? Tt(A) : A;
  }
  let g = n;
  o !== e && (l ? g = function(A, L) {
    return n.call(this, wt(e, A), L, e);
  } : n.length > 2 && (g = function(A, L) {
    return n.call(this, A, L, e);
  }));
  const m = c.call(o, g, r);
  return l && s ? s(m) : m;
}
function bi(e, t, n, r) {
  const s = Lr(e), i = s !== e && !/* @__PURE__ */ bt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(g, m, A) {
    return l && (l = !1, g = wt(e, g)), n.call(this, g, wt(e, m), A, e);
  }) : n.length > 3 && (o = function(g, m, A) {
    return n.call(this, g, m, A, e);
  }));
  const c = s[t](o, ...r);
  return l ? wt(e, c) : c;
}
function es(e, t, n) {
  const r = /* @__PURE__ */ ce(e);
  We(r, "iterate", qn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ js(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), r[t](...n)) : s;
}
function Nn(e, t, n = []) {
  Ut(), Ms();
  const r = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return Ds(), Ht(), r;
}
const ra = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pt)
);
function sa(e) {
  Pt(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
class Oo {
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
      return r === (s ? i ? ha : Io : i ? Po : No).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = G(t);
    if (!s) {
      let c;
      if (o && (c = ta[n]))
        return c;
      if (n === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qe(t) ? t : r
    );
    if ((Pt(n) ? wo.has(n) : ra(n)) || (s || We(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ qe(l)) {
      const c = o && Is(n) ? l : l.value;
      return s && fe(c) ? /* @__PURE__ */ Ss(c) : c;
    }
    return fe(l) ? s ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ nn(l) : l;
  }
}
class Ro extends Oo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = G(t) && Is(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ jt(i);
      if (!/* @__PURE__ */ bt(r) && !/* @__PURE__ */ jt(r) && (i = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(r)), !o && /* @__PURE__ */ qe(i) && !/* @__PURE__ */ qe(r))
        return g || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ue(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ qe(t) ? t : s
    );
    return t === /* @__PURE__ */ ce(s) && c && (l ? Rt(r, i) && Dt(t, "set", n, r) : Dt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ue(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Dt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Pt(n) || !wo.has(n)) && We(t, "has", n), r;
  }
  ownKeys(t) {
    return We(
      t,
      "iterate",
      G(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class ia extends Oo {
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
const oa = /* @__PURE__ */ new Ro(), la = /* @__PURE__ */ new ia(), aa = /* @__PURE__ */ new Ro(!0);
const Ts = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ce(s), o = qt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, g = s[e](...r), m = n ? Ts : t ? An : Tt;
    return !t && We(
      i,
      "iterate",
      c ? vs : sn
    ), Ke(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: A, done: L } = g.next();
          return L ? { value: A, done: L } : {
            value: l ? [m(A[0]), m(A[1])] : m(A),
            done: L
          };
        }
      }
    );
  };
}
function cr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ua(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      e || (Rt(s, l) && We(o, "get", s), We(o, "get", l));
      const { has: c } = ar(o), g = t ? Ts : e ? An : Tt;
      if (c.call(o, s))
        return g(i.get(s));
      if (c.call(o, l))
        return g(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && We(/* @__PURE__ */ ce(s), "iterate", sn), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ce(i), l = /* @__PURE__ */ ce(s);
      return e || (Rt(s, l) && We(o, "has", s), We(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ce(l), g = t ? Ts : e ? An : Tt;
      return !e && We(c, "iterate", sn), l.forEach((m, A) => s.call(i, g(m), g(A), o));
    }
  };
  return Ke(
    n,
    e ? {
      add: cr("add"),
      set: cr("set"),
      delete: cr("delete"),
      clear: cr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ce(this), o = ar(i), l = /* @__PURE__ */ ce(s), c = !t && !/* @__PURE__ */ bt(s) && !/* @__PURE__ */ jt(s) ? l : s;
        return o.has.call(i, c) || Rt(s, c) && o.has.call(i, s) || Rt(l, c) && o.has.call(i, l) || (i.add(c), Dt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ bt(i) && !/* @__PURE__ */ jt(i) && (i = /* @__PURE__ */ ce(i));
        const o = /* @__PURE__ */ ce(this), { has: l, get: c } = ar(o);
        let g = l.call(o, s);
        g || (s = /* @__PURE__ */ ce(s), g = l.call(o, s));
        const m = c.call(o, s);
        return o.set(s, i), g ? Rt(i, m) && Dt(o, "set", s, i) : Dt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ce(this), { has: o, get: l } = ar(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ce(s), c = o.call(i, s)), l && l.call(i, s);
        const g = i.delete(s);
        return c && Dt(i, "delete", s, void 0), g;
      },
      clear() {
        const s = /* @__PURE__ */ ce(this), i = s.size !== 0, o = s.clear();
        return i && Dt(
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
    n[s] = ca(s, e, t);
  }), n;
}
function Us(e, t) {
  const n = ua(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    ue(n, s) && s in r ? n : r,
    s,
    i
  );
}
const fa = {
  get: /* @__PURE__ */ Us(!1, !1)
}, da = {
  get: /* @__PURE__ */ Us(!1, !0)
}, pa = {
  get: /* @__PURE__ */ Us(!0, !1)
};
const No = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap();
function ma(e) {
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
  return /* @__PURE__ */ jt(e) ? e : Hs(
    e,
    !1,
    oa,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return Hs(
    e,
    !1,
    aa,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Hs(
    e,
    !0,
    la,
    pa,
    Io
  );
}
function Hs(e, t, n, r, s) {
  if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ma(jl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function ya(e) {
  return !ue(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const Tt = (e) => fe(e) ? /* @__PURE__ */ nn(e) : e, An = (e) => fe(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return _a(e, !1);
}
function _a(e, t) {
  return /* @__PURE__ */ qe(e) ? e : new va(e, t);
}
class va {
  constructor(t, n) {
    this.dep = new ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ce(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ bt(t) || /* @__PURE__ */ jt(t);
    t = r ? t : /* @__PURE__ */ ce(t), Rt(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ qe(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ qe(s) && !/* @__PURE__ */ qe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lo(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, Ta);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ye !== this)
      return To(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ao(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t, n = !1) {
  let r, s;
  return Q(e) ? r = e : (r = e.get, s = e.set), new Sa(r, s, n);
}
const ur = {}, _r = /* @__PURE__ */ new WeakMap();
let Qt;
function Aa(e, t = !1, n = Qt) {
  if (n) {
    let r = _r.get(n);
    r || _r.set(n, r = []), r.push(e);
  }
}
function xa(e, t, n = pe) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, g = (F) => s ? F : /* @__PURE__ */ bt(F) || s === !1 || s === 0 ? Ft(F, 1) : Ft(F);
  let m, A, L, D, W = !1, $ = !1;
  if (/* @__PURE__ */ qe(e) ? (A = () => e.value, W = /* @__PURE__ */ bt(e)) : /* @__PURE__ */ on(e) ? (A = () => g(e), W = !0) : G(e) ? ($ = !0, W = e.some((F) => /* @__PURE__ */ on(F) || /* @__PURE__ */ bt(F)), A = () => e.map((F) => {
    if (/* @__PURE__ */ qe(F))
      return F.value;
    if (/* @__PURE__ */ on(F))
      return g(F);
    if (Q(F))
      return c ? c(F, 2) : F();
  })) : Q(e) ? t ? A = c ? () => c(e, 2) : e : A = () => {
    if (L) {
      Ut();
      try {
        L();
      } finally {
        Ht();
      }
    }
    const F = Qt;
    Qt = m;
    try {
      return c ? c(e, 3, [D]) : e(D);
    } finally {
      Qt = F;
    }
  } : A = Nt, t && s) {
    const F = A, te = s === !0 ? 1 / 0 : s;
    A = () => Ft(F(), te);
  }
  const J = Zl(), B = () => {
    m.stop(), J && J.active && Ps(J.effects, m);
  };
  if (i && t) {
    const F = t;
    t = (...te) => {
      const we = F(...te);
      return B(), we;
    };
  }
  let I = $ ? new Array(e.length).fill(ur) : ur;
  const K = (F) => {
    if (!(!(m.flags & 1) || !m.dirty && !F))
      if (t) {
        const te = m.run();
        if (F || s || W || ($ ? te.some((we, Te) => Rt(we, I[Te])) : Rt(te, I))) {
          L && L();
          const we = Qt;
          Qt = m;
          try {
            const Te = [
              te,
              // pass undefined as the old value when it's changed for the first time
              I === ur ? void 0 : $ && I[0] === ur ? [] : I,
              D
            ];
            I = te, c ? c(t, 3, Te) : (
              // @ts-expect-error
              t(...Te)
            );
          } finally {
            Qt = we;
          }
        }
      } else
        m.run();
  };
  return l && l(K), m = new _o(A), m.scheduler = o ? () => o(K, !1) : K, D = (F) => Aa(F, !1, m), L = m.onStop = () => {
    const F = _r.get(m);
    if (F) {
      if (c)
        c(F, 4);
      else
        for (const te of F) te();
      _r.delete(m);
    }
  }, t ? r ? K(!0) : I = m.run() : o ? o(K.bind(null, !0), !0) : m.run(), B.pause = m.pause.bind(m), B.resume = m.resume.bind(m), B.stop = B, B;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ qe(e))
    Ft(e.value, t, n);
  else if (G(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (an(e) || qt(e))
    e.forEach((r) => {
      Ft(r, t, n);
    });
  else if (po(e)) {
    for (const r in e)
      Ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
  }
  return e;
}
function Zn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Mr(s, t, n);
  }
}
function St(e, t, n, r) {
  if (Q(e)) {
    const s = Zn(e, t, n, r);
    return s && uo(s) && s.catch((i) => {
      Mr(i, t, n);
    }), s;
  }
  if (G(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(St(e[i], t, n, r));
    return s;
  }
}
function Mr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const c = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let A = 0; A < m.length; A++)
          if (m[A](e, c, g) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ut(), Zn(i, null, 10, [
        e,
        c,
        g
      ]), Ht();
      return;
    }
  }
  Ca(e, n, s, r, o);
}
function Ca(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const et = [];
let Ct = -1;
const Tn = [];
let Wt = null, yn = 0;
const Mo = /* @__PURE__ */ Promise.resolve();
let vr = null;
function Do(e) {
  const t = vr || Mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wa(e) {
  let t = Ct + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = et[r], i = Kn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function $s(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? et.push(e) : et.splice(wa(t), 0, e), e.flags |= 1, Fo();
  }
}
function Fo() {
  vr || (vr = Mo.then(Uo));
}
function Oa(e) {
  if (!G(e))
    Wt && e.id === -1 ? Wt.splice(yn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Tn.push(e[t]);
  Fo();
}
function yi(e, t, n = Ct + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ko(e) {
  if (Tn.length) {
    const t = [...new Set(Tn)].sort(
      (n, r) => Kn(n) - Kn(r)
    );
    if (Tn.length = 0, Wt) {
      for (let n = 0; n < t.length; n++)
        Wt.push(t[n]);
      return;
    }
    for (Wt = t, yn = 0; yn < Wt.length; yn++) {
      const n = Wt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Wt = null, yn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uo(e) {
  try {
    for (Ct = 0; Ct < et.length; Ct++) {
      const t = et[Ct];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Zn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ct < et.length; Ct++) {
      const t = et[Ct];
      t && (t.flags &= -2);
    }
    Ct = -1, et.length = 0, ko(), vr = null, (et.length || Tn.length) && Uo();
  }
}
let mt = null, Ho = null;
function Tr(e) {
  const t = mt;
  return mt = e, Ho = e && e.type.__scopeId || null, t;
}
function Ra(e, t = mt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Oi(-1);
    const i = Tr(t), o = ln.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = ln.length; c > o; c--) fl();
      Tr(i), r._d && Oi(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ue(e, t) {
  if (mt === null)
    return e;
  const n = Hr(mt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = pe] = t[s];
    i && (Q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ft(o), r.push({
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
function Xt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ut(), St(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ht());
  }
}
function Na(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
  }
}
function br(e, t, n = !1) {
  const r = Cc();
  if (r || Sn) {
    let s = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => br(Pa);
function ts(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = pe) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ke({}, n), c = t && r || !t && i !== "post";
  let g;
  if (Xn) {
    if (i === "sync") {
      const D = Ia();
      g = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!c) {
      const D = () => {
      };
      return D.stop = Nt, D.resume = Nt, D.pause = Nt, D;
    }
  }
  const m = tt;
  l.call = (D, W, $) => St(D, m, W, $);
  let A = !1;
  i === "post" ? l.scheduler = (D) => {
    lt(D, m && m.suspense);
  } : i !== "sync" && (A = !0, l.scheduler = (D, W) => {
    W ? D() : $s(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), A && (D.flags |= 2, m && (D.id = m.uid, D.i = m));
  };
  const L = xa(e, t, l);
  return Xn && (g ? g.push(L) : c && L()), L;
}
function La(e, t, n) {
  const r = this.proxy, s = Ce(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Q(t) ? i = t : (i = t.handler, n = t);
  const o = Qn(this), l = jo(s, i.bind(r), n);
  return o(), l;
}
function $o(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Ma = /* @__PURE__ */ Symbol("_vte"), Dr = (e) => e.__isTeleport, ns = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== $t) {
        t = n;
        break;
      }
  }
  return t;
}
function Vo(e) {
  if (!zs(e))
    return Dr(e.type) && e.children ? Da(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Vs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vs(
      Dr(n.type) && Vo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Sr = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, r, s = !1) {
  if (G(e)) {
    e.forEach(
      ($, J) => Vn(
        $,
        t && (G(t) ? t[J] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (zn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Vn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Hr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, g = t && t.r, m = l.refs === pe ? l.refs = {} : l.refs, A = l.setupState, L = /* @__PURE__ */ ce(A), D = A === pe ? co : ($) => gi(m, $) ? !1 : ue(L, $), W = ($, J) => !(J && gi(m, J));
  if (g != null && g !== c) {
    if (_i(t), Ce(g))
      m[g] = null, D(g) && (A[g] = null);
    else if (/* @__PURE__ */ qe(g)) {
      const $ = t;
      W(g, $.k) && (g.value = null), $.k && (m[$.k] = null);
    }
  }
  if (Q(c))
    Zn(c, l, 12, [o, m]);
  else {
    const $ = Ce(c), J = /* @__PURE__ */ qe(c);
    if ($ || J) {
      const B = () => {
        if (e.f) {
          const I = $ ? D(c) ? A[c] : m[c] : W() || !e.k ? c.value : m[e.k];
          if (s)
            G(I) && Ps(I, i);
          else if (G(I))
            I.includes(i) || I.push(i);
          else if ($)
            m[c] = [i], D(c) && (A[c] = m[c]);
          else {
            const K = [i];
            W(c, e.k) && (c.value = K), e.k && (m[e.k] = K);
          }
        } else $ ? (m[c] = o, D(c) && (A[c] = o)) : J && (W(c, e.k) && (c.value = o), e.k && (m[e.k] = o));
      };
      if (o) {
        const I = () => {
          B(), Sr.delete(e);
        };
        I.id = -1, Sr.set(e, I), lt(I, n);
      } else
        _i(e), B();
    }
  }
}
function _i(e) {
  const t = Sr.get(e);
  t && (t.flags |= 8, Sr.delete(e));
}
Ir().requestIdleCallback;
Ir().cancelIdleCallback;
const zn = (e) => !!e.type.__asyncLoader, zs = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  Bo(e, "a", t);
}
function ka(e, t) {
  Bo(e, "da", t);
}
function Bo(e, t, n = tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      zs(s.parent.vnode) && Ua(r, t, n, s), s = s.parent;
  }
}
function Ua(e, t, n, r) {
  const s = Fr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ko(() => {
    Ps(r[t], s);
  }, n);
}
function Fr(e, t, n = tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = Qn(n), c = St(t, n, e, o);
      return l(), Ht(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Vt = (e) => (t, n = tt) => {
  (!Xn || e === "sp") && Fr(e, (...r) => t(...r), n);
}, Ha = Vt("bm"), Wo = Vt("m"), ja = Vt(
  "bu"
), $a = Vt("u"), qo = Vt(
  "bum"
), Ko = Vt("um"), Va = Vt(
  "sp"
), za = Vt("rtg"), Ba = Vt("rtc");
function Wa(e, t = tt) {
  Fr("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function Me(e, t, n, r) {
  let s;
  const i = n, o = G(e);
  if (o || Ce(e)) {
    const l = o && /* @__PURE__ */ on(e);
    let c = !1, g = !1;
    l && (c = !/* @__PURE__ */ bt(e), g = /* @__PURE__ */ jt(e), e = Lr(e)), s = new Array(e.length);
    for (let m = 0, A = e.length; m < A; m++)
      s[m] = t(
        c ? g ? An(Tt(e[m])) : Tt(e[m]) : e[m],
        m,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (fe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, g = l.length; c < g; c++) {
        const m = l[c];
        s[c] = t(e[m], m, c, i);
      }
    }
  else
    s = [];
  return s;
}
const Es = (e) => e ? ml(e) ? Hr(e) : Es(e.parent) : null, Bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $s(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => La.bind(e)
  })
), rs = (e, t) => e !== pe && !e.__isScriptSetup && ue(e, t), Ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const L = o[t];
      if (L !== void 0)
        switch (L) {
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
        if (rs(r, t))
          return o[t] = 1, r[t];
        if (s !== pe && ue(s, t))
          return o[t] = 2, s[t];
        if (ue(i, t))
          return o[t] = 3, i[t];
        if (n !== pe && ue(n, t))
          return o[t] = 4, n[t];
        As && (o[t] = 0);
      }
    }
    const g = Bn[t];
    let m, A;
    if (g)
      return t === "$attrs" && We(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== pe && ue(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      A = c.config.globalProperties, ue(A, t)
    )
      return A[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return rs(s, t) ? (s[t] = n, !0) : r !== pe && ue(r, t) ? (r[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== pe && l[0] !== "$" && ue(e, l) || rs(t, l) || ue(i, l) || ue(r, l) || ue(Bn, l) || ue(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vi(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let As = !0;
function Ga(e) {
  const t = Yo(e), n = e.proxy, r = e.ctx;
  As = !1, t.beforeCreate && Ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: g,
    // lifecycle
    created: m,
    beforeMount: A,
    mounted: L,
    beforeUpdate: D,
    updated: W,
    activated: $,
    deactivated: J,
    beforeDestroy: B,
    beforeUnmount: I,
    destroyed: K,
    unmounted: F,
    render: te,
    renderTracked: we,
    renderTriggered: Te,
    errorCaptured: Pe,
    serverPrefetch: he,
    // public API
    expose: Oe,
    inheritAttrs: Ie,
    // assets
    components: ct,
    directives: je,
    filters: Ge
  } = t;
  if (g && Ya(g, r, null), o)
    for (const oe in o) {
      const Z = o[oe];
      Q(Z) && (r[oe] = Z.bind(n));
    }
  if (s) {
    const oe = s.call(n, n);
    fe(oe) && (e.data = /* @__PURE__ */ nn(oe));
  }
  if (As = !0, i)
    for (const oe in i) {
      const Z = i[oe], Le = Q(Z) ? Z.bind(n, n) : Q(Z.get) ? Z.get.bind(n, n) : Nt, nt = !Q(Z) && Q(Z.set) ? Z.set.bind(n) : Nt, Ye = ae({
        get: Le,
        set: nt
      });
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (Se) => Ye.value = Se
      });
    }
  if (l)
    for (const oe in l)
      Go(l[oe], r, n, oe);
  if (c) {
    const oe = Q(c) ? c.call(n) : c;
    Reflect.ownKeys(oe).forEach((Z) => {
      Na(Z, oe[Z]);
    });
  }
  m && Ti(m, e, "c");
  function ge(oe, Z) {
    G(Z) ? Z.forEach((Le) => oe(Le.bind(n))) : Z && oe(Z.bind(n));
  }
  if (ge(Ha, A), ge(Wo, L), ge(ja, D), ge($a, W), ge(Fa, $), ge(ka, J), ge(Wa, Pe), ge(Ba, we), ge(za, Te), ge(qo, I), ge(Ko, F), ge(Va, he), G(Oe))
    if (Oe.length) {
      const oe = e.exposed || (e.exposed = {});
      Oe.forEach((Z) => {
        Object.defineProperty(oe, Z, {
          get: () => n[Z],
          set: (Le) => n[Z] = Le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === Nt && (e.render = te), Ie != null && (e.inheritAttrs = Ie), ct && (e.components = ct), je && (e.directives = je), he && zo(e);
}
function Ya(e, t, n = Nt) {
  G(e) && (e = xs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    fe(s) ? "default" in s ? i = br(
      s.from || r,
      s.default,
      !0
    ) : i = br(s.from || r) : i = br(s), /* @__PURE__ */ qe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function Ti(e, t, n) {
  St(
    G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let s = r.includes(".") ? $o(n, r) : () => n[r];
  if (Ce(e)) {
    const i = t[e];
    Q(i) && ts(s, i);
  } else if (Q(e))
    ts(s, e.bind(n));
  else if (fe(e))
    if (G(e))
      e.forEach((i) => Go(i, t, n, r));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && ts(s, i, e);
    }
}
function Yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (g) => Er(c, g, o, !0)
  ), Er(c, t, o)), fe(t) && i.set(t, c), c;
}
function Er(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Er(e, i, n, !0), s && s.forEach(
    (o) => Er(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Xa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xa = {
  data: Si,
  props: Ei,
  emits: Ei,
  // objects
  methods: Fn,
  computed: Fn,
  // lifecycle
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  // assets
  components: Fn,
  directives: Fn,
  // watch
  watch: Za,
  // provide / inject
  provide: Si,
  inject: Ja
};
function Si(e, t) {
  return t ? e ? function() {
    return Ke(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return Fn(xs(e), xs(t));
}
function xs(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fn(e, t) {
  return e ? Ke(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ei(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ke(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ke(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Qe(e[r], t[r]);
  return n;
}
function Xo() {
  return {
    app: null,
    config: {
      isNativeTag: co,
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
let Qa = 0;
function ec(e, t) {
  return function(r, s = null) {
    Q(r) || (r = Ke({}, r)), s != null && !fe(s) && (s = null);
    const i = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const g = i.app = {
      _uid: Qa++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ic,
      get config() {
        return i.config;
      },
      set config(m) {
      },
      use(m, ...A) {
        return o.has(m) || (m && Q(m.install) ? (o.add(m), m.install(g, ...A)) : Q(m) && (o.add(m), m(g, ...A))), g;
      },
      mixin(m) {
        return i.mixins.includes(m) || i.mixins.push(m), g;
      },
      component(m, A) {
        return A ? (i.components[m] = A, g) : i.components[m];
      },
      directive(m, A) {
        return A ? (i.directives[m] = A, g) : i.directives[m];
      },
      mount(m, A, L) {
        if (!c) {
          const D = g._ceVNode || kt(r, s);
          return D.appContext = i, L === !0 ? L = "svg" : L === !1 && (L = void 0), e(D, m, L), c = !0, g._container = m, m.__vue_app__ = g, Hr(D.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        c && (St(
          l,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(m, A) {
        return i.provides[m] = A, g;
      },
      runWithContext(m) {
        const A = Sn;
        Sn = g;
        try {
          return m();
        } finally {
          Sn = A;
        }
      }
    };
    return g;
  };
}
let Sn = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let s = n;
  const i = t.startsWith("update:"), o = i && tc(r, t.slice(7));
  o && (o.trim && (s = n.map((m) => Ce(m) ? m.trim() : m)), o.number && (s = s.map(Pr)));
  let l, c = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(_t(t))];
  !c && i && (c = r[l = Xr(cn(t))]), c && St(
    c,
    e,
    6,
    s
  );
  const g = r[l + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, St(
      g,
      e,
      6,
      s
    );
  }
}
const rc = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n = !1) {
  const r = n ? rc : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const c = (g) => {
      const m = Jo(g, t, !0);
      m && (l = !0, Ke(o, m));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (fe(e) && r.set(e, null), null) : (G(i) ? i.forEach((c) => o[c] = null) : Ke(o, i), fe(e) && r.set(e, o), o);
}
function kr(e, t) {
  return !e || !Or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, cn(t)) || ue(e, t));
}
function Ai(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: g,
    renderCache: m,
    props: A,
    data: L,
    setupState: D,
    ctx: W,
    inheritAttrs: $
  } = e, J = Tr(e);
  let B, I;
  try {
    if (n.shapeFlag & 4) {
      const F = s || r, te = F;
      B = Ot(
        g.call(
          te,
          F,
          m,
          A,
          D,
          L,
          W
        )
      ), I = l;
    } else {
      const F = t;
      B = Ot(
        F.length > 1 ? F(
          A,
          { attrs: l, slots: o, emit: c }
        ) : F(
          A,
          null
        )
      ), I = t.props ? l : sc(l);
    }
  } catch (F) {
    ln.length = 0, Mr(F, e, 1), B = kt($t);
  }
  let K = B;
  if (I && $ !== !1) {
    const F = Object.keys(I), { shapeFlag: te } = K;
    F.length && te & 7 && (i && F.some(Rr) && (I = ic(
      I,
      i
    )), K = xn(K, I, !1, !0));
  }
  if (n.dirs && (K = xn(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Dr(K.type) && Vo(K) || K;
    Vs(F, n.transition);
  }
  return B = K, Tr(J), B;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ic = (e, t) => {
  const n = {};
  for (const r in e)
    (!Rr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, g = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? xi(r, o, g) : !!o;
    if (c & 8) {
      const m = t.dynamicProps;
      for (let A = 0; A < m.length; A++) {
        const L = m[A];
        if (Zo(o, r, L) && !kr(g, L))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? xi(r, o, g) : !0 : !!o;
  return !1;
}
function xi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Zo(t, e, i) && !kr(n, i))
      return !0;
  }
  return !1;
}
function Zo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && fe(r) && fe(s) ? !Kt(r, s) : r !== s;
}
function lc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Qo = {}, el = () => Object.create(Qo), tl = (e) => Object.getPrototypeOf(e) === Qo;
function ac(e, t, n, r = !1) {
  const s = {}, i = el();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ ba(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function cc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ce(s), [c] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const m = e.vnode.dynamicProps;
      for (let A = 0; A < m.length; A++) {
        let L = m[A];
        if (kr(e.emitsOptions, L))
          continue;
        const D = t[L];
        if (c)
          if (ue(i, L))
            D !== i[L] && (i[L] = D, g = !0);
          else {
            const W = _t(L);
            s[W] = Cs(
              c,
              l,
              W,
              D,
              e,
              !1
            );
          }
        else
          D !== i[L] && (i[L] = D, g = !0);
      }
    }
  } else {
    nl(e, t, s, i) && (g = !0);
    let m;
    for (const A in l)
      (!t || // for camelCase
      !ue(t, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = cn(A)) === A || !ue(t, m))) && (c ? n && // for camelCase
      (n[A] !== void 0 || // for kebab-case
      n[m] !== void 0) && (s[A] = Cs(
        c,
        l,
        A,
        void 0,
        e,
        !0
      )) : delete s[A]);
    if (i !== l)
      for (const A in i)
        (!t || !ue(t, A)) && (delete i[A], g = !0);
  }
  g && Dt(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Hn(c))
        continue;
      const g = t[c];
      let m;
      s && ue(s, m = _t(c)) ? !i || !i.includes(m) ? n[m] = g : (l || (l = {}))[m] = g : kr(e.emitsOptions, c) || (!(c in r) || g !== r[c]) && (r[c] = g, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ce(n), g = l || pe;
    for (let m = 0; m < i.length; m++) {
      const A = i[m];
      n[A] = Cs(
        s,
        c,
        A,
        g[A],
        e,
        !ue(g, A)
      );
    }
  }
  return o;
}
function Cs(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ue(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Q(c)) {
        const { propsDefaults: g } = s;
        if (n in g)
          r = g[n];
        else {
          const m = Qn(s);
          r = g[n] = c.call(
            null,
            t
          ), m();
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
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const uc = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const r = n ? uc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!Q(e)) {
    const m = (A) => {
      c = !0;
      const [L, D] = rl(A, t, !0);
      Ke(o, L), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !c)
    return fe(e) && r.set(e, _n), _n;
  if (G(i))
    for (let m = 0; m < i.length; m++) {
      const A = _t(i[m]);
      Ci(A) && (o[A] = pe);
    }
  else if (i)
    for (const m in i) {
      const A = _t(m);
      if (Ci(A)) {
        const L = i[m], D = o[A] = G(L) || Q(L) ? { type: L } : Ke({}, L), W = D.type;
        let $ = !1, J = !0;
        if (G(W))
          for (let B = 0; B < W.length; ++B) {
            const I = W[B], K = Q(I) && I.name;
            if (K === "Boolean") {
              $ = !0;
              break;
            } else K === "String" && (J = !1);
          }
        else
          $ = Q(W) && W.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = $, D[
          1
          /* shouldCastTrue */
        ] = J, ($ || ue(D, "default")) && l.push(A);
      }
    }
  const g = [o, l];
  return fe(e) && r.set(e, g), g;
}
function Ci(e) {
  return e[0] !== "$" && !Hn(e);
}
const Bs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ws = (e) => G(e) ? e.map(Ot) : [Ot(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ra((...s) => Ws(t(...s)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Bs(s)) continue;
    const i = e[s];
    if (Q(i))
      t[s] = fc(s, i, r);
    else if (i != null) {
      const o = Ws(i);
      t[s] = () => o;
    }
  }
}, il = (e, t) => {
  const n = Ws(t);
  e.slots.default = () => n;
}, ol = (e, t, n) => {
  for (const r in t)
    (n || !Bs(r)) && (e[r] = t[r]);
}, dc = (e, t, n) => {
  const r = e.slots = el();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ol(r, t, n), n && mo(r, "_", s, !0)) : sl(t, r);
  } else t && il(e, t);
}, pc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = pe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ol(s, t, n) : (i = !t.$stable, sl(t, s)), o = t;
  } else t && (il(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Bs(l) && o[l] == null && delete s[l];
}, lt = gc;
function hc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = Ir();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: g,
    setElementText: m,
    parentNode: A,
    nextSibling: L,
    setScopeId: D = Nt,
    insertStaticContent: W
  } = e, $ = (u, h, _, w = null, S = null, x = null, R = void 0, N = null, v = !!h.dynamicChildren) => {
    if (u === h)
      return;
    u && !Pn(u, h) && (w = _e(u), Se(u, S, x, !0), u = null), h.patchFlag === -2 && (v = !1, h.dynamicChildren = null);
    const { type: d, ref: f, shapeFlag: O } = h;
    switch (d) {
      case Ur:
        J(u, h, _, w);
        break;
      case $t:
        B(u, h, _, w);
        break;
      case is:
        u == null && I(h, _, w, R);
        break;
      case ie:
        ct(
          u,
          h,
          _,
          w,
          S,
          x,
          R,
          N,
          v
        );
        break;
      default:
        O & 1 ? te(
          u,
          h,
          _,
          w,
          S,
          x,
          R,
          N,
          v
        ) : O & 6 ? je(
          u,
          h,
          _,
          w,
          S,
          x,
          R,
          N,
          v
        ) : (O & 64 || O & 128) && d.process(
          u,
          h,
          _,
          w,
          S,
          x,
          R,
          N,
          v,
          rt
        );
    }
    f != null && S ? Vn(f, u && u.ref, x, h || u, !h) : f == null && u && u.ref != null && Vn(u.ref, null, x, u, !0);
  }, J = (u, h, _, w) => {
    if (u == null)
      r(
        h.el = l(h.children),
        _,
        w
      );
    else {
      const S = h.el = u.el;
      h.children !== u.children && g(S, h.children);
    }
  }, B = (u, h, _, w) => {
    u == null ? r(
      h.el = c(h.children || ""),
      _,
      w
    ) : h.el = u.el;
  }, I = (u, h, _, w) => {
    [u.el, u.anchor] = W(
      u.children,
      h,
      _,
      w,
      u.el,
      u.anchor
    );
  }, K = ({ el: u, anchor: h }, _, w) => {
    let S;
    for (; u && u !== h; )
      S = L(u), r(u, _, w), u = S;
    r(h, _, w);
  }, F = ({ el: u, anchor: h }) => {
    let _;
    for (; u && u !== h; )
      _ = L(u), s(u), u = _;
    s(h);
  }, te = (u, h, _, w, S, x, R, N, v) => {
    if (h.type === "svg" ? R = "svg" : h.type === "math" && (R = "mathml"), u == null)
      we(
        h,
        _,
        w,
        S,
        x,
        R,
        N,
        v
      );
    else {
      const d = u.el && u.el._isVueCE ? u.el : null;
      try {
        d && d._beginPatch(), he(
          u,
          h,
          S,
          x,
          R,
          N,
          v
        );
      } finally {
        d && d._endPatch();
      }
    }
  }, we = (u, h, _, w, S, x, R, N) => {
    let v, d;
    const { props: f, shapeFlag: O, transition: j, dirs: V } = u;
    if (v = u.el = o(
      u.type,
      x,
      f && f.is,
      f
    ), O & 8 ? m(v, u.children) : O & 16 && Pe(
      u.children,
      v,
      null,
      w,
      S,
      ss(u, x),
      R,
      N
    ), V && Xt(u, null, w, "created"), Te(v, u, u.scopeId, R, w), f) {
      for (const re in f)
        re !== "value" && !Hn(re) && i(v, re, null, f[re], x, w);
      "value" in f && i(v, "value", null, f.value, x), (d = f.onVnodeBeforeMount) && xt(d, w, u);
    }
    V && Xt(u, null, w, "beforeMount");
    const X = bc(S, j);
    X && j.beforeEnter(v), r(v, h, _), ((d = f && f.onVnodeMounted) || X || V) && lt(() => {
      d && xt(d, w, u), X && j.enter(v), V && Xt(u, null, w, "mounted");
    }, S);
  }, Te = (u, h, _, w, S) => {
    if (_ && D(u, _), w)
      for (let x = 0; x < w.length; x++)
        D(u, w[x]);
    if (S) {
      let x = S.subTree;
      if (h === x || ul(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const R = S.vnode;
        Te(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          S.parent
        );
      }
    }
  }, Pe = (u, h, _, w, S, x, R, N, v = 0) => {
    for (let d = v; d < u.length; d++) {
      const f = u[d] = N ? Mt(u[d]) : Ot(u[d]);
      $(
        null,
        f,
        h,
        _,
        w,
        S,
        x,
        R,
        N
      );
    }
  }, he = (u, h, _, w, S, x, R) => {
    const N = h.el = u.el;
    let { patchFlag: v, dynamicChildren: d, dirs: f } = h;
    v |= u.patchFlag & 16;
    const O = u.props || pe, j = h.props || pe;
    let V;
    if (_ && Jt(_, !1), (V = j.onVnodeBeforeUpdate) && xt(V, _, h, u), f && Xt(h, u, _, "beforeUpdate"), _ && Jt(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    d && (!u.dynamicChildren || u.dynamicChildren.length !== d.length) && (v = 0, R = !1, d = null), (O.innerHTML && j.innerHTML == null || O.textContent && j.textContent == null) && m(N, ""), d ? Oe(
      u.dynamicChildren,
      d,
      N,
      _,
      w,
      ss(h, S),
      x
    ) : R || Z(
      u,
      h,
      N,
      null,
      _,
      w,
      ss(h, S),
      x,
      !1
    ), v > 0) {
      if (v & 16)
        Ie(N, O, j, _, S);
      else if (v & 2 && O.class !== j.class && i(N, "class", null, j.class, S), v & 4 && i(N, "style", O.style, j.style, S), v & 8) {
        const X = h.dynamicProps;
        for (let re = 0; re < X.length; re++) {
          const ne = X[re], ve = O[ne], xe = j[ne];
          (xe !== ve || ne === "value") && i(N, ne, ve, xe, S, _);
        }
      }
      v & 1 && u.children !== h.children && m(N, h.children);
    } else !R && d == null && Ie(N, O, j, _, S);
    ((V = j.onVnodeUpdated) || f) && lt(() => {
      V && xt(V, _, h, u), f && Xt(h, u, _, "updated");
    }, w);
  }, Oe = (u, h, _, w, S, x, R) => {
    for (let N = 0; N < h.length; N++) {
      const v = u[N], d = h[N], f = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(v, d) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? A(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      $(
        v,
        d,
        f,
        null,
        w,
        S,
        x,
        R,
        !0
      );
    }
  }, Ie = (u, h, _, w, S) => {
    if (h !== _) {
      if (h !== pe)
        for (const x in h)
          !Hn(x) && !(x in _) && i(
            u,
            x,
            h[x],
            null,
            S,
            w
          );
      for (const x in _) {
        if (Hn(x)) continue;
        const R = _[x], N = h[x];
        R !== N && x !== "value" && i(u, x, N, R, S, w);
      }
      "value" in _ && i(u, "value", h.value, _.value, S);
    }
  }, ct = (u, h, _, w, S, x, R, N, v) => {
    const d = h.el = u ? u.el : l(""), f = h.anchor = u ? u.anchor : l("");
    let { patchFlag: O, dynamicChildren: j, slotScopeIds: V } = h;
    V && (N = N ? N.concat(V) : V), u == null ? (r(d, _, w), r(f, _, w), Pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      _,
      f,
      S,
      x,
      R,
      N,
      v
    )) : O > 0 && O & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === j.length ? (Oe(
      u.dynamicChildren,
      j,
      _,
      S,
      x,
      R,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || S && h === S.subTree) && ll(
      u,
      h,
      !0
      /* shallow */
    )) : Z(
      u,
      h,
      _,
      f,
      S,
      x,
      R,
      N,
      v
    );
  }, je = (u, h, _, w, S, x, R, N, v) => {
    h.slotScopeIds = N, u == null ? h.shapeFlag & 512 ? S.ctx.activate(
      h,
      _,
      w,
      R,
      v
    ) : Ge(
      h,
      _,
      w,
      S,
      x,
      R,
      v
    ) : $e(u, h, v);
  }, Ge = (u, h, _, w, S, x, R) => {
    const N = u.component = xc(
      u,
      w,
      S
    );
    if (zs(u) && (N.ctx.renderer = rt), wc(N, !1, R), N.asyncDep) {
      if (S && S.registerDep(N, ge, R), !u.el) {
        const v = N.subTree = kt($t);
        B(null, v, h, _), u.placeholder = v.el;
      }
    } else
      ge(
        N,
        u,
        h,
        _,
        S,
        x,
        R
      );
  }, $e = (u, h, _) => {
    const w = h.component = u.component;
    if (oc(u, h, _))
      if (w.asyncDep && !w.asyncResolved) {
        oe(w, h, _);
        return;
      } else
        w.next = h, w.update();
    else
      h.el = u.el, w.vnode = h;
  }, ge = (u, h, _, w, S, x, R) => {
    const N = () => {
      if (u.isMounted) {
        let { next: O, bu: j, u: V, parent: X, vnode: re } = u;
        {
          const st = al(u);
          if (st) {
            O && (O.el = re.el, oe(u, O, R)), st.asyncDep.then(() => {
              lt(() => {
                u.isUnmounted || d();
              }, S);
            });
            return;
          }
        }
        let ne = O, ve;
        Jt(u, !1), O ? (O.el = re.el, oe(u, O, R)) : O = re, j && mr(j), (ve = O.props && O.props.onVnodeBeforeUpdate) && xt(ve, X, O, re), Jt(u, !0);
        const xe = Ai(u), Xe = u.subTree;
        u.subTree = xe, $(
          Xe,
          xe,
          // parent may have changed if it's in a teleport
          A(Xe.el),
          // anchor may have changed if it's in a fragment
          _e(Xe),
          u,
          S,
          x
        ), O.el = xe.el, ne === null && lc(u, xe.el), V && lt(V, S), (ve = O.props && O.props.onVnodeUpdated) && lt(
          () => xt(ve, X, O, re),
          S
        );
      } else {
        let O;
        const { el: j, props: V } = h, { bm: X, m: re, parent: ne, root: ve, type: xe } = u, Xe = zn(h);
        Jt(u, !1), X && mr(X), !Xe && (O = V && V.onVnodeBeforeMount) && xt(O, ne, h), Jt(u, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            xe,
            u.parent ? u.parent.type : void 0
          );
          const st = u.subTree = Ai(u);
          $(
            null,
            st,
            _,
            w,
            u,
            S,
            x
          ), h.el = st.el;
        }
        if (re && lt(re, S), !Xe && (O = V && V.onVnodeMounted)) {
          const st = h;
          lt(
            () => xt(O, ne, st),
            S
          );
        }
        (h.shapeFlag & 256 || ne && zn(ne.vnode) && ne.vnode.shapeFlag & 256) && u.a && lt(u.a, S), u.isMounted = !0, h = _ = w = null;
      }
    };
    u.scope.on();
    const v = u.effect = new _o(N);
    u.scope.off();
    const d = u.update = v.run.bind(v), f = u.job = v.runIfDirty.bind(v);
    f.i = u, f.id = u.uid, v.scheduler = () => $s(f), Jt(u, !0), d();
  }, oe = (u, h, _) => {
    h.component = u;
    const w = u.vnode.props;
    u.vnode = h, u.next = null, cc(u, h.props, w, _), pc(u, h.children, _), Ut(), yi(u), Ht();
  }, Z = (u, h, _, w, S, x, R, N, v = !1) => {
    const d = u && u.children, f = u ? u.shapeFlag : 0, O = h.children, { patchFlag: j, shapeFlag: V } = h;
    if (j > 0) {
      if (j & 128) {
        nt(
          d,
          O,
          _,
          w,
          S,
          x,
          R,
          N,
          v
        );
        return;
      } else if (j & 256) {
        Le(
          d,
          O,
          _,
          w,
          S,
          x,
          R,
          N,
          v
        );
        return;
      }
    }
    V & 8 ? (f & 16 && de(d, S, x), O !== d && m(_, O)) : f & 16 ? V & 16 ? nt(
      d,
      O,
      _,
      w,
      S,
      x,
      R,
      N,
      v
    ) : de(d, S, x, !0) : (f & 8 && m(_, ""), V & 16 && Pe(
      O,
      _,
      w,
      S,
      x,
      R,
      N,
      v
    ));
  }, Le = (u, h, _, w, S, x, R, N, v) => {
    u = u || _n, h = h || _n;
    const d = u.length, f = h.length, O = Math.min(d, f);
    let j;
    for (j = 0; j < O; j++) {
      const V = h[j] = v ? Mt(h[j]) : Ot(h[j]);
      $(
        u[j],
        V,
        _,
        null,
        S,
        x,
        R,
        N,
        v
      );
    }
    d > f ? de(
      u,
      S,
      x,
      !0,
      !1,
      O
    ) : Pe(
      h,
      _,
      w,
      S,
      x,
      R,
      N,
      v,
      O
    );
  }, nt = (u, h, _, w, S, x, R, N, v) => {
    let d = 0;
    const f = h.length;
    let O = u.length - 1, j = f - 1;
    for (; d <= O && d <= j; ) {
      const V = u[d], X = h[d] = v ? Mt(h[d]) : Ot(h[d]);
      if (Pn(V, X))
        $(
          V,
          X,
          _,
          null,
          S,
          x,
          R,
          N,
          v
        );
      else
        break;
      d++;
    }
    for (; d <= O && d <= j; ) {
      const V = u[O], X = h[j] = v ? Mt(h[j]) : Ot(h[j]);
      if (Pn(V, X))
        $(
          V,
          X,
          _,
          null,
          S,
          x,
          R,
          N,
          v
        );
      else
        break;
      O--, j--;
    }
    if (d > O) {
      if (d <= j) {
        const V = j + 1, X = V < f ? h[V].el : w;
        for (; d <= j; )
          $(
            null,
            h[d] = v ? Mt(h[d]) : Ot(h[d]),
            _,
            X,
            S,
            x,
            R,
            N,
            v
          ), d++;
      }
    } else if (d > j)
      for (; d <= O; )
        Se(u[d], S, x, !0), d++;
    else {
      const V = d, X = d, re = /* @__PURE__ */ new Map();
      for (d = X; d <= j; d++) {
        const ke = h[d] = v ? Mt(h[d]) : Ot(h[d]);
        ke.key != null && re.set(ke.key, d);
      }
      let ne, ve = 0;
      const xe = j - X + 1;
      let Xe = !1, st = 0;
      const ht = new Array(xe);
      for (d = 0; d < xe; d++) ht[d] = 0;
      for (d = V; d <= O; d++) {
        const ke = u[d];
        if (ve >= xe) {
          Se(ke, S, x, !0);
          continue;
        }
        let ut;
        if (ke.key != null)
          ut = re.get(ke.key);
        else
          for (ne = X; ne <= j; ne++)
            if (ht[ne - X] === 0 && Pn(ke, h[ne])) {
              ut = ne;
              break;
            }
        ut === void 0 ? Se(ke, S, x, !0) : (ht[ut - X] = d + 1, ut >= st ? st = ut : Xe = !0, $(
          ke,
          h[ut],
          _,
          null,
          S,
          x,
          R,
          N,
          v
        ), ve++);
      }
      const Gt = Xe ? yc(ht) : _n;
      for (ne = Gt.length - 1, d = xe - 1; d >= 0; d--) {
        const ke = X + d, ut = h[ke], Cn = h[ke + 1], wn = ke + 1 < f ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Cn.el || cl(Cn)
        ) : w;
        ht[d] === 0 ? $(
          null,
          ut,
          _,
          wn,
          S,
          x,
          R,
          N,
          v
        ) : Xe && (ne < 0 || d !== Gt[ne] ? Ye(ut, _, wn, 2) : ne--);
      }
    }
  }, Ye = (u, h, _, w, S = null) => {
    const { el: x, type: R, transition: N, children: v, shapeFlag: d } = u;
    if (d & 6) {
      Ye(u.component.subTree, h, _, w);
      return;
    }
    if (d & 128) {
      u.suspense.move(h, _, w);
      return;
    }
    if (d & 64) {
      R.move(u, h, _, rt);
      return;
    }
    if (R === ie) {
      r(x, h, _);
      for (let O = 0; O < v.length; O++)
        Ye(v[O], h, _, w);
      r(u.anchor, h, _);
      return;
    }
    if (R === is) {
      K(u, h, _);
      return;
    }
    if (w !== 2 && d & 1 && N)
      if (w === 0)
        N.persisted && !x[ns] ? r(x, h, _) : (N.beforeEnter(x), r(x, h, _), lt(() => N.enter(x), S));
      else {
        const { leave: O, delayLeave: j, afterLeave: V } = N, X = () => {
          u.ctx.isUnmounted ? s(x) : r(x, h, _);
        }, re = () => {
          const ne = x._isLeaving || !!x[ns];
          x._isLeaving && x[ns](
            !0
            /* cancelled */
          ), N.persisted && !ne ? X() : O(x, () => {
            X(), V && V();
          });
        };
        j ? j(x, X, re) : re();
      }
    else
      r(x, h, _);
  }, Se = (u, h, _, w = !1, S = !1) => {
    const {
      type: x,
      props: R,
      ref: N,
      children: v,
      dynamicChildren: d,
      shapeFlag: f,
      patchFlag: O,
      dirs: j,
      cacheIndex: V,
      memo: X
    } = u;
    if (O === -2 && (S = !1), N != null && (Ut(), Vn(N, null, _, u, !0), Ht()), V != null && (h.renderCache[V] = void 0), f & 256) {
      h.ctx.deactivate(u);
      return;
    }
    const re = f & 1 && j, ne = !zn(u);
    let ve;
    if (ne && (ve = R && R.onVnodeBeforeUnmount) && xt(ve, h, u), f & 6)
      me(u.component, _, w);
    else {
      if (f & 128) {
        u.suspense.unmount(_, w);
        return;
      }
      re && Xt(u, null, h, "beforeUnmount"), f & 64 ? u.type.remove(
        u,
        h,
        _,
        rt,
        w
      ) : d && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !d.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ie || O > 0 && O & 64) ? de(
        d,
        h,
        _,
        !1,
        !0
      ) : (x === ie && O & 384 || !S && f & 16) && de(v, h, _), w && q(u);
    }
    const xe = X != null && V == null;
    (ne && (ve = R && R.onVnodeUnmounted) || re || xe) && lt(() => {
      ve && xt(ve, h, u), re && Xt(u, null, h, "unmounted"), xe && (u.el = null);
    }, _);
  }, q = (u) => {
    const { type: h, el: _, anchor: w, transition: S } = u;
    if (h === ie) {
      H(_, w);
      return;
    }
    if (h === is) {
      F(u);
      return;
    }
    const x = () => {
      s(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: R, delayLeave: N } = S, v = () => R(_, x);
      N ? N(u.el, x, v) : v();
    } else
      x();
  }, H = (u, h) => {
    let _;
    for (; u !== h; )
      _ = L(u), s(u), u = _;
    s(h);
  }, me = (u, h, _) => {
    const { bum: w, scope: S, job: x, subTree: R, um: N, m: v, a: d } = u;
    wi(v), wi(d), w && mr(w), S.stop(), x && (x.flags |= 8, Se(R, u, h, _)), N && lt(N, h), lt(() => {
      u.isUnmounted = !0;
    }, h);
  }, de = (u, h, _, w = !1, S = !1, x = 0) => {
    for (let R = x; R < u.length; R++)
      Se(u[R], h, _, w, S);
  }, _e = (u) => {
    if (u.shapeFlag & 6)
      return _e(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const h = L(u.anchor || u.el), _ = h && h[Ma];
    return _ ? L(_) : h;
  };
  let Ve = !1;
  const Ee = (u, h, _) => {
    let w;
    u == null ? h._vnode && (Se(h._vnode, null, null, !0), w = h._vnode.component) : $(
      h._vnode || null,
      u,
      h,
      null,
      null,
      null,
      _
    ), h._vnode = u, Ve || (Ve = !0, yi(w), ko(), Ve = !1);
  }, rt = {
    p: $,
    um: Se,
    m: Ye,
    r: q,
    mt: Ge,
    mc: Pe,
    pc: Z,
    pbc: Oe,
    n: _e,
    o: e
  };
  return {
    render: Ee,
    hydrate: void 0,
    createApp: ec(Ee)
  };
}
function ss({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ll(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (G(r) && G(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Mt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && ll(o, l)), l.type === Ur && (l.patchFlag === -1 && (l = s[i] = Mt(l)), l.el = o.el), l.type === $t && !l.el && (l.el = o.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const g = e[r];
    if (g !== 0) {
      if (s = n[n.length - 1], e[s] < g) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < g ? i = l + 1 : o = l;
      g < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function al(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : al(t);
}
function wi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function cl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? cl(t.subTree) : null;
}
const ul = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Oa(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), Ur = /* @__PURE__ */ Symbol.for("v-txt"), $t = /* @__PURE__ */ Symbol.for("v-cmt"), is = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let pt = null;
function k(e = !1) {
  ln.push(pt = e ? null : []);
}
function fl() {
  ln.pop(), pt = ln[ln.length - 1] || null;
}
let Gn = 1;
function Oi(e, t = !1) {
  Gn += e, e < 0 && pt && t && (pt.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = Gn > 0 ? pt || _n : null, fl(), Gn > 0 && pt && pt.push(e), e;
}
function U(e, t, n, r, s, i) {
  return dl(
    b(
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
function _c(e, t, n, r, s) {
  return dl(
    kt(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function pl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hl = ({ key: e }) => e ?? null, yr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ qe(e) || Q(e) ? { i: mt, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, r = 0, s = null, i = e === ie ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && yr(t),
    scopeId: Ho,
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
    ctx: mt
  };
  return l ? (Ar(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ce(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && pt.push(c), c;
}
const kt = vc;
function vc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === qa) && (e = $t), pl(e)) {
    const l = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ar(l, n), Gn > 0 && !i && pt && (l.shapeFlag & 6 ? pt[pt.indexOf(e)] = l : pt.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: c } = t;
    l && !Ce(l) && (t.class = vn(l)), fe(c) && (/* @__PURE__ */ js(c) && !G(c) && (c = Ke({}, c)), t.style = Ls(c));
  }
  const o = Ce(e) ? 1 : ul(e) ? 128 : Dr(e) ? 64 : fe(e) ? 4 : Q(e) ? 2 : 0;
  return b(
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
function Tc(e) {
  return e ? /* @__PURE__ */ js(e) || tl(e) ? Ke({}, e) : e : null;
}
function xn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, g = t ? Sc(s || {}, t) : s, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && hl(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? G(i) ? i.concat(yr(t)) : [i, yr(t)] : yr(t)
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
    patchFlag: t && e.type !== ie ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Vs(
    m,
    c.clone(m)
  ), m;
}
function le(e = " ", t = 0) {
  return kt(Ur, null, e, t);
}
function De(e = "", t = !1) {
  return t ? (k(), _c($t, null, e)) : kt($t, null, e);
}
function Ot(e) {
  return e == null || typeof e == "boolean" ? kt($t) : G(e) ? kt(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pl(e) ? Mt(e) : kt(Ur, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function Ar(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ar(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tl(t) ? t._ctx = mt : s === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (r & 65) {
      Ar(e, { default: t });
      return;
    }
    t = { default: t, _ctx: mt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [le(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = vn([t.class, r.class]));
      else if (s === "style")
        t.style = Ls([t.style, r.style]);
      else if (Or(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(G(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function xt(e, t, n, r = null) {
  St(e, t, 7, [
    n,
    r
  ]);
}
const Ec = Xo();
let Ac = 0;
function xc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Ec, i = {
    uid: Ac++,
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
    scope: new Jl(
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
    propsOptions: rl(r, s),
    emitsOptions: Jo(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = nc.bind(null, i), e.ce && e.ce(i), i;
}
let tt = null;
const Cc = () => tt || mt;
let xr, Yn;
{
  const e = Ir(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  xr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => tt = n
  ), Yn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xn = n
  );
}
const Qn = (e) => {
  const t = tt;
  return xr(e), e.scope.on(), () => {
    e.scope.off(), xr(t);
  };
}, Ri = () => {
  tt && tt.scope.off(), xr(null);
};
function ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Xn = !1;
function wc(e, t = !1, n = !1) {
  t && Yn(t);
  const { props: r, children: s } = e.vnode, i = ml(e);
  ac(e, r, i, t), dc(e, s, n || t);
  const o = i ? Oc(e, t) : void 0;
  return t && Yn(!1), o;
}
function Oc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ka);
  const { setup: r } = n;
  if (r) {
    Ut();
    const s = e.setupContext = r.length > 1 ? Nc(e) : null, i = Qn(e), o = Zn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = uo(o);
    if (Ht(), i(), (l || e.sp) && !zn(e) && zo(e), l) {
      if (o.then(Ri, Ri), t)
        return o.then((c) => {
          Yn(!0);
          try {
            Ni(e, c, t);
          } finally {
            Yn(!1);
          }
        }).catch((c) => {
          Mr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ni(e, o);
  } else
    bl(e);
}
function Ni(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Lo(t)), bl(e);
}
function bl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Nt);
  {
    const s = Qn(e);
    Ut();
    try {
      Ga(e);
    } finally {
      Ht(), s();
    }
  }
}
const Rc = {
  get(e, t) {
    return We(e, "get", ""), e[t];
  }
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lo(ya(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function Pc(e) {
  return Q(e) && "__vccOpts" in e;
}
const ae = (e, t) => /* @__PURE__ */ Ea(e, t, Xn), Ic = "3.5.42";
let ws;
const Pi = typeof window < "u" && window.trustedTypes;
if (Pi)
  try {
    ws = /* @__PURE__ */ Pi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yl = ws ? (e) => ws.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Ii = Lt && /* @__PURE__ */ Lt.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Lt.createElementNS(Lc, e) : t === "mathml" ? Lt.createElementNS(Mc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Lt.createTextNode(e),
  createComment: (e) => Lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lt.querySelector(e),
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
      Ii.innerHTML = yl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ii.content;
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
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function kc(e, t, n) {
  const r = e[Fc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Hc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const r = e.style, s = Ce(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Ce(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && kn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && kn(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? zc(
        e,
        o,
        !Ce(t) && t ? t[o] : void 0,
        l
      ) || kn(r, o, l) : kn(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Hc];
      o && (n += ";" + o), r.cssText = n, i = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = i ? r.display : "", e[Uc] && (r.display = "none"));
}
const fr = /\s*!important$/;
function kn(e, t, n) {
  if (G(n))
    n.forEach((r) => kn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    fr.test(n) ? e.setProperty(t, n.replace(fr, ""), "important") : e.setProperty(t, n);
  else {
    const r = Vc(e, t);
    fr.test(n) ? e.setProperty(
      cn(r),
      n.replace(fr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], os = {};
function Vc(e, t) {
  const n = os[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return os[t] = r;
  r = ho(r);
  for (let s = 0; s < Mi.length; s++) {
    const i = Mi[s] + r;
    if (i in e)
      return os[t] = i;
  }
  return t;
}
function zc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(r) && n === r;
}
const Di = "http://www.w3.org/1999/xlink";
function Fi(e, t, n, r, s, i = Gl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Di, t.slice(6, t.length)) : e.setAttributeNS(Di, t, n) : n == null || i && !bo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Pt(n) ? String(n) : n
  );
}
function ki(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yl(n) : n);
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
    l === "boolean" ? n = bo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ui = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, r, s = null) {
  const i = e[Ui] || (e[Ui] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Gc(t);
    if (r) {
      const g = i[t] = Jc(
        r,
        s
      );
      tn(e, l, g, c);
    } else o && (Bc(e, l, o, c), i[t] = void 0);
  }
}
const qc = /(Once|Passive|Capture)$/, Kc = /^on:?(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t, n;
  for (; (n = e.match(qc)) && !Kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let ls = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Xc = () => ls || (Yc.then(() => ls = 0), ls = Date.now());
function Jc(e, t) {
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
        const g = o[c];
        g && St(
          g,
          t,
          5,
          l
        );
      }
    } else
      St(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Xc(), n;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? kc(e, r, o) : t === "style" ? $c(e, n, r) : Or(t) ? Rr(t) || Wc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, o)) ? (ki(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fi(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(r))) ? ki(e, _t(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Fi(e, t, r, o));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Hi(t) && Ce(n) ? !1 : t in e;
}
function eu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = _t(t);
  return Array.isArray(n) ? n.some((s) => _t(s) === r) : Object.keys(n).some((s) => _t(s) === r);
}
const Cr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => mr(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), dr = /* @__PURE__ */ Symbol("_initialValue");
function as(e, t, n) {
  return t && (e = e.trim()), n && (e = Pr(e)), e;
}
const cs = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[dr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[dr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = Cr(s);
    const i = r || s.props && s.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](as(e.value, n, i));
    }), (n || i) && tn(e, "change", () => {
      e.value = as(e.value, n, i);
    }), t || (tn(e, "compositionstart", tu), tn(e, "compositionend", ji), tn(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[dr];
    delete e[dr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[rn](as(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[rn] = Cr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Pr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Ze = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Pr(wr(c)) : wr(c)
      ), i = e.multiple, o = i ? an(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? G(o) ? s.slice() : s : o
      ];
      try {
        e[rn](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = Cr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $i(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = Cr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !nu(t, n[1], n[0])) && $i(e, t);
  }
};
function nu(e, t, n) {
  if (!n || G(e)) return Kt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function $i(e, t) {
  const n = e.multiple, r = G(t);
  if (!(n && !r && !an(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = wr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((g) => String(g) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Kt(wr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wr(e) {
  return "_value" in e ? e._value : e.value;
}
const ru = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => ru.some((n) => e[`${n}Key`] && !t.includes(n))
}, pr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = su[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, iu = /* @__PURE__ */ Ke({ patchProp: Zc }, Dc);
let Vi;
function ou() {
  return Vi || (Vi = hc(iu));
}
const lu = ((...e) => {
  const t = ou().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = cu(r);
    if (!s) return;
    const i = t._component;
    !Q(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, au(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function au(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
function uu(e, t, n) {
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
function zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fu(e) {
  if (Array.isArray(e)) return e;
}
function du(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, s, i, o, l = [], c = !0, g = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (m) {
      g = !0, s = m;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (g) throw s;
      }
    }
    return l;
  }
}
function pu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(e, t) {
  return fu(e) || du(e, t) || mu(e, t) || pu();
}
function mu(e, t) {
  if (e) {
    if (typeof e == "string") return zi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zi(e, t) : void 0;
  }
}
const gl = Object.entries, Bi = Object.setPrototypeOf, bu = Object.isFrozen, yu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Fe = Object.freeze, He = Object.seal, gn = Object.create, _l = typeof Reflect < "u" && Reflect, Os = _l.apply, Rs = _l.construct;
Fe || (Fe = function(t) {
  return t;
});
He || (He = function(t) {
  return t;
});
Os || (Os = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
Rs || (Rs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const en = Ne(Array.prototype.forEach), _u = Ne(Array.prototype.lastIndexOf), Wi = Ne(Array.prototype.pop), In = Ne(Array.prototype.push), vu = Ne(Array.prototype.splice), En = Array.isArray, Un = Ne(String.prototype.toLowerCase), us = Ne(String.prototype.toString), qi = Ne(String.prototype.match), Ln = Ne(String.prototype.replace), Ki = Ne(String.prototype.indexOf), Tu = Ne(String.prototype.trim), Su = Ne(Number.prototype.toString), Eu = Ne(Boolean.prototype.toString), Gi = typeof BigInt > "u" ? null : Ne(BigInt.prototype.toString), Yi = typeof Symbol > "u" ? null : Ne(Symbol.prototype.toString), at = Ne(Object.prototype.hasOwnProperty), Mn = Ne(Object.prototype.toString), Be = Ne(RegExp.prototype.test), Zt = Au(TypeError);
function Ne(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Os(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Rs(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Un;
  if (Bi && Bi(e, null), !En(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (bu(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function xu(e) {
  for (let t = 0; t < e.length; t++)
    at(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = gn(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const s = n[0], i = n[1];
    at(e, s) && (En(i) ? t[s] = xu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = dt(i) : t[s] = i);
  }
  return t;
}
function Cu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Su(e);
    case "boolean":
      return Eu(e);
    case "bigint":
      return Gi ? Gi(e) : "0";
    case "symbol":
      return Yi ? Yi(e) : "Symbol()";
    case "undefined":
      return Mn(e);
    case "function":
    case "object": {
      if (e === null)
        return Mn(e);
      const t = e, n = gt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Mn(r);
      }
      return Mn(e);
    }
    default:
      return Mn(e);
  }
}
function gt(e, t) {
  for (; e !== null; ) {
    const r = gu(e, t);
    if (r) {
      if (r.get)
        return Ne(r.get);
      if (typeof r.value == "function")
        return Ne(r.value);
    }
    e = yu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function wu(e) {
  try {
    return Be(e, ""), !0;
  } catch {
    return !1;
  }
}
const Xi = Fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fs = Fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ds = Fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = Fe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ps = Fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ru = Fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ji = Fe(["#text"]), Zi = Fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hs = Fe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qi = Fe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hr = Fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = He(/{{[\w\W]*|^[\w\W]*}}/g), Pu = He(/<%[\w\W]*|^[\w\W]*%>/g), Iu = He(/\${[\w\W]*/g), Lu = He(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = He(/^aria-[\-\w]+$/), eo = He(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = He(/^(?:\w+script|data):/i), Fu = He(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ku = He(/^html$/i), Uu = He(/^[a-z][.\w]*(-[.\w]+)+$/i), to = He(/<[/\w!]/g), no = He(/<[/\w]/g), Hu = He(/<\/no(script|embed|frames)/i), ju = He(/\/>/i), ft = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = Fe(se({}, vl)), Vu = (function() {
  const e = {};
  return en(vl, (t) => {
    e[t] = He(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Fe(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Bu = function(t, n) {
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
}, ro = function() {
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
}, Bt = function(t, n, r, s) {
  return at(t, n) && En(t[n]) ? se(s.base ? dt(s.base) : {}, t[n], s.transform) : r;
}, ms = function(t, n, r) {
  const s = at(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? dt(s) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (P) => Tl(P);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, g = e.NamedNodeMap;
  g === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const m = e.DOMParser, A = e.trustedTypes, L = l.prototype, D = gt(L, "cloneNode"), W = gt(L, "remove"), $ = gt(L, "nextSibling"), J = gt(L, "childNodes"), B = gt(L, "parentNode"), I = gt(L, "shadowRoot"), K = gt(L, "attributes"), F = o && o.prototype ? gt(o.prototype, "nodeType") : null, te = o && o.prototype ? gt(o.prototype, "nodeName") : null, we = o && o.prototype ? gt(o.prototype, "ownerDocument") : null, Te = function(a) {
    return F ? F(a) : a.nodeType;
  }, Pe = function(a) {
    return te ? te(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const P = n.createElement("template");
    P.content && P.content.ownerDocument && (n = P.content.ownerDocument);
  }
  let he, Oe = "", Ie, ct = !1, je = 0;
  const Ge = function() {
    if (je > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $e = function(a) {
    Ge(), je++;
    try {
      return he.createHTML(a);
    } finally {
      je--;
    }
  }, ge = function(a) {
    Ge(), je++;
    try {
      return he.createScriptURL(a);
    } finally {
      je--;
    }
  }, oe = function() {
    return ct || (Ie = Bu(A, s), ct = !0), Ie;
  }, Z = n, Le = Z.implementation, nt = Z.createNodeIterator, Ye = Z.createDocumentFragment, Se = Z.getElementsByTagName, q = r.importNode;
  let H = ro();
  t.isSupported = typeof gl == "function" && typeof B == "function" && Le && Le.createHTMLDocument !== void 0;
  const me = Nu, de = Pu, _e = Iu, Ve = Lu, Ee = Mu, rt = Du, yt = Fu, u = Uu;
  let h = eo, _ = null;
  const w = se({}, [...Xi, ...fs, ...ds, ...ps, ...Ji]);
  let S = null;
  const x = se({}, [...Zi, ...hs, ...Qi, ...hr]);
  let R = Object.seal(gn(null, {
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
  })), N = null, v = null;
  const d = Object.seal(gn(null, {
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
  let f = !0, O = !0, j = !1, V = !0, X = !1, re = !0, ne = !1, ve = !1, xe = null, Xe = null, st = !1, ht = !1, Gt = !1, ke = !1, ut = !0, Cn = !1;
  const wn = "user-content-";
  let jr = !0, $r = !1, un = {}, fn = null;
  const qs = se({}, [
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
  let Ks = null;
  const Gs = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ys = null;
  const Xs = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", Et = "http://www.w3.org/1999/xhtml";
  let dn = Et, Vr = !1, zr = null;
  const El = se({}, [er, tr, Et], us), Js = Fe(["mi", "mo", "mn", "ms", "mtext"]);
  let Br = se({}, Js);
  const Zs = Fe(["annotation-xml"]);
  let Wr = se({}, Zs);
  const Al = se({}, ["title", "style", "font", "a", "script"]);
  let On = null;
  const xl = ["application/xhtml+xml", "text/html"], Cl = "text/html";
  let Re = null, pn = null;
  const wl = n.createElement("form"), Qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, qr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = dt(a), On = // eslint-disable-next-line unicorn/prefer-includes
    xl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Cl : a.PARSER_MEDIA_TYPE, Re = On === "application/xhtml+xml" ? us : Un, _ = Bt(a, "ALLOWED_TAGS", w, {
      transform: Re
    }), S = Bt(a, "ALLOWED_ATTR", x, {
      transform: Re
    }), zr = Bt(a, "ALLOWED_NAMESPACES", El, {
      transform: us
    }), Ys = Bt(a, "ADD_URI_SAFE_ATTR", Xs, {
      transform: Re,
      base: Xs
    }), Ks = Bt(a, "ADD_DATA_URI_TAGS", Gs, {
      transform: Re,
      base: Gs
    }), fn = Bt(a, "FORBID_CONTENTS", qs, {
      transform: Re
    }), N = Bt(a, "FORBID_TAGS", dt({}), {
      transform: Re
    }), v = Bt(a, "FORBID_ATTR", dt({}), {
      transform: Re
    }), un = at(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? dt(a.USE_PROFILES) : a.USE_PROFILES : !1, f = a.ALLOW_ARIA_ATTR !== !1, O = a.ALLOW_DATA_ATTR !== !1, j = a.ALLOW_UNKNOWN_PROTOCOLS || !1, V = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, X = a.SAFE_FOR_TEMPLATES || !1, re = a.SAFE_FOR_XML !== !1, ne = a.WHOLE_DOCUMENT || !1, ht = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, ke = a.RETURN_TRUSTED_TYPE || !1, st = a.FORCE_BODY || !1, ut = a.SANITIZE_DOM !== !1, Cn = a.SANITIZE_NAMED_PROPS || !1, jr = a.KEEP_CONTENT !== !1, $r = a.IN_PLACE || !1, h = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : eo, dn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : Et, Br = ms(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Js)
      // Default built-in map
    ), Wr = ms(
      a,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Zs)
      // Default built-in map
    );
    const y = ms(a, "CUSTOM_ELEMENT_HANDLING", () => gn(null));
    if (R = gn(null), at(y, "tagNameCheck") && Qs(y.tagNameCheck) && (R.tagNameCheck = y.tagNameCheck), at(y, "attributeNameCheck") && Qs(y.attributeNameCheck) && (R.attributeNameCheck = y.attributeNameCheck), at(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), He(R), X && (O = !1), Gt && (ht = !0), un && (_ = se({}, Ji), S = gn(null), un.html === !0 && (se(_, Xi), se(S, Zi)), un.svg === !0 && (se(_, fs), se(S, hs), se(S, hr)), un.svgFilters === !0 && (se(_, ds), se(S, hs), se(S, hr)), un.mathMl === !0 && (se(_, ps), se(S, Qi), se(S, hr))), d.tagCheck = null, d.attributeCheck = null, at(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? d.tagCheck = a.ADD_TAGS : En(a.ADD_TAGS) && (_ === w && (_ = dt(_)), se(_, a.ADD_TAGS, Re))), at(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? d.attributeCheck = a.ADD_ATTR : En(a.ADD_ATTR) && (S === x && (S = dt(S)), se(S, a.ADD_ATTR, Re))), at(a, "ADD_FORBID_CONTENTS") && En(a.ADD_FORBID_CONTENTS) && (fn === qs && (fn = dt(fn)), se(fn, a.ADD_FORBID_CONTENTS, Re)), jr && (_["#text"] = !0), ne && se(_, ["html", "head", "body"]), _.table && (se(_, ["tbody"]), delete N.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const C = he;
      he = a.TRUSTED_TYPES_POLICY;
      try {
        Oe = $e("");
      } catch (M) {
        throw he = C, M;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (he = void 0, Oe = "") : (he === void 0 && (he = oe()), he && typeof Oe == "string" && (Oe = $e("")));
    Fe && Fe(a), pn = a;
  }, ei = se({}, [...fs, ...ds, ...Ou]), ti = se({}, [...ps, ...Ru]), Ol = function(a, y, C) {
    return y.namespaceURI === Et ? a === "svg" : y.namespaceURI === er ? a === "svg" && (C === "annotation-xml" || Br[C]) : !!ei[a];
  }, Rl = function(a, y, C) {
    return y.namespaceURI === Et ? a === "math" : y.namespaceURI === tr ? a === "math" && Wr[C] : !!ti[a];
  }, Nl = function(a, y, C) {
    return y.namespaceURI === tr && !Wr[C] || y.namespaceURI === er && !Br[C] ? !1 : !ti[a] && (Al[a] || !ei[a]);
  }, Pl = function(a) {
    let y = B(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: dn,
      tagName: "template"
    });
    const C = Un(a.tagName), M = Un(y.tagName);
    return zr[a.namespaceURI] ? a.namespaceURI === tr ? Ol(C, y, M) : a.namespaceURI === er ? Rl(C, y, M) : a.namespaceURI === Et ? Nl(C, y, M) : !!(On === "application/xhtml+xml" && zr[a.namespaceURI]) : !1;
  }, zt = function(a) {
    In(t.removed, {
      element: a
    });
    try {
      B(a).removeChild(a);
    } catch {
      if (W(a), !B(a))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ni = function(a, y, C) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(C);
      } catch {
      }
    }
  }, nr = function(a) {
    rr(a);
    const y = J(a);
    if (y) {
      const M = [];
      en(y, (z) => {
        In(M, z);
      }), en(M, (z) => {
        try {
          W(z);
        } catch {
        }
      });
    }
    const C = K(a);
    if (C)
      for (let M = C.length - 1; M >= 0; --M) {
        const z = C[M], Y = z && z.name;
        typeof Y == "string" && ni(a, z, Y);
      }
  }, Yt = function(a, y, C) {
    if (!C)
      try {
        C = y.getAttributeNode(a);
      } catch {
        C = null;
      }
    In(t.removed, {
      attribute: C || null,
      from: y
    });
    try {
      C ? y.removeAttributeNode(C) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ht || Gt)
        try {
          zt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const y = K(a);
    if (y)
      for (let C = y.length - 1; C >= 0; --C) {
        const M = y[C], z = M && M.name;
        typeof z != "string" || S[Re(z)] || ni(a, M, z);
      }
  }, rr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const C = y.pop();
      Te(C) === ft.element && Il(C);
      const z = J(C);
      if (z)
        for (let Y = z.length - 1; Y >= 0; --Y)
          y.push(z[Y]);
    }
  }, ri = function(a, y) {
    return re ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Ll = function(a) {
    if (!re)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const C = y.pop(), M = Te(C);
      if (M === ft.processingInstruction || M === ft.comment && Be(no, C.data)) {
        try {
          W(C);
        } catch {
        }
        continue;
      }
      if (M === ft.element) {
        const Y = C, be = Re(Pe(C));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && ri("for", be) && Y.removeAttribute("for");
        } catch {
        }
      }
      const z = J(C);
      if (z)
        for (let Y = z.length - 1; Y >= 0; --Y)
          y.push(z[Y]);
    }
  }, si = function(a) {
    let y = null, C = null;
    if (st)
      a = "<remove></remove>" + a;
    else {
      const Y = qi(a, /^[\r\n\t ]+/);
      C = Y && Y[0];
    }
    On === "application/xhtml+xml" && dn === Et && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const M = he ? $e(a) : a;
    if (dn === Et)
      try {
        y = new m().parseFromString(M, On);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = Le.createDocument(dn, "template", null);
      try {
        y.documentElement.innerHTML = Vr ? Oe : M;
      } catch {
      }
    }
    const z = y.body || y.documentElement;
    return a && C && z.insertBefore(n.createTextNode(C), z.childNodes[0] || null), dn === Et ? Se.call(y, ne ? "html" : "body")[0] : ne ? y.documentElement : z;
  }, ii = function(a) {
    const y = we ? we(a) : a.ownerDocument;
    return nt.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, sr = function(a) {
    return a = Ln(a, me, " "), a = Ln(a, de, " "), a = Ln(a, _e, " "), a;
  }, Kr = function(a) {
    var y;
    a.normalize();
    const C = we ? we(a) : a.ownerDocument, M = nt.call(
      C || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let z = M.nextNode();
    for (; z; )
      z.data = sr(z.data), z = M.nextNode();
    const Y = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    Y && en(Y, (be) => {
      hn(be.content) && Kr(be.content);
    });
  }, ir = function(a) {
    const y = te ? te(a) : null;
    return typeof y != "string" || Re(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== K(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== F(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== J(a);
  }, hn = function(a) {
    if (!F || typeof a != "object" || a === null)
      return !1;
    try {
      return F(a) === ft.documentFragment;
    } catch {
      return !1;
    }
  }, Rn = function(a) {
    if (!F || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof F(a) == "number";
    } catch {
      return !1;
    }
  };
  function At(P, a, y) {
    P.length !== 0 && en(P, (C) => {
      C.call(t, a, y, pn);
    });
  }
  const Ml = function(a, y) {
    return !!(re && a.hasChildNodes() && !Rn(a.firstElementChild) && Be(to, a.textContent) && Be(to, a.innerHTML) || re && a.namespaceURI === Et && $u[y] && (Rn(a.firstElementChild) || typeof a.textContent == "string" && Be(Vu[y], a.textContent)) || a.nodeType === ft.processingInstruction || re && a.nodeType === ft.comment && Be(no, a.data));
  }, or = function(a, y) {
    if (a instanceof RegExp)
      return Be(a, y);
    if (a instanceof Function) {
      for (var C = arguments.length, M = new Array(C > 2 ? C - 2 : 0), z = 2; z < C; z++)
        M[z - 2] = arguments[z];
      return !!a(y, ...M);
    }
    return !1;
  }, Dl = function(a, y, C) {
    if (!N[y] && ui(y) && or(R.tagNameCheck, y))
      return !1;
    if (jr && !fn[y]) {
      const M = B(a), z = J(a);
      if (z && M) {
        const Y = z.length;
        for (let be = Y - 1; be >= 0; --be) {
          const Ae = a === C ? D(z[be], !0) : z[be];
          M.insertBefore(Ae, $(a));
        }
      }
    }
    return zt(a), !0;
  }, oi = function(a, y, C, M) {
    return a.length === 0 ? y : y === C || y === M ? dt(y) : y;
  }, li = function(a, y) {
    return a === y || B(a) !== null ? !1 : ($r && rr(a), !0);
  }, ai = function(a, y) {
    if (At(H.beforeSanitizeElements, a, null), li(a, y))
      return !0;
    if (ir(a))
      return zt(a), !0;
    const C = Re(Pe(a));
    if (_ = oi(H.uponSanitizeElement, _, w, xe), At(H.uponSanitizeElement, a, {
      tagName: C,
      allowedTags: _
    }), li(a, y))
      return !0;
    if (Ml(a, C))
      return zt(a), !0;
    if (N[C] || !(d.tagCheck instanceof Function && d.tagCheck(C)) && !_[C]) {
      const z = Dl(a, C, y);
      return z === !1 && At(H.afterSanitizeElements, a, null), z;
    }
    if (Te(a) === ft.element && !Pl(a) || (C === "noscript" || C === "noembed" || C === "noframes") && Be(Hu, a.innerHTML))
      return zt(a), !0;
    if (X && a.nodeType === ft.text) {
      const z = sr(a.textContent);
      a.textContent !== z && (In(t.removed, {
        element: a.cloneNode()
      }), a.textContent = z);
    }
    return At(H.afterSanitizeElements, a, null), !1;
  }, ci = function(a, y, C) {
    if (v[y] || ri(y, a) || ut && (y === "id" || y === "name") && (C in n || C in wl))
      return !1;
    const M = S[y] || d.attributeCheck instanceof Function && d.attributeCheck(y, a);
    return O && Be(Ve, y) || f && Be(Ee, y) ? !0 : M ? Ys[y] || Be(h, Ln(C, yt, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Ki(C, "data:") === 0 && Ks[a] || j && !Be(rt, Ln(C, yt, "")) ? !0 : !C : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ui(a) && or(R.tagNameCheck, a) && or(R.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && R.allowCustomizedBuiltInElements && or(R.tagNameCheck, C)
    );
  }, Fl = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ui = function(a) {
    return !Fl[Un(a)] && Be(u, a);
  }, kl = function(a, y, C, M) {
    if (he && typeof A == "object" && typeof A.getAttributeType == "function" && !C)
      switch (A.getAttributeType(a, y)) {
        case "TrustedHTML":
          return $e(M);
        case "TrustedScriptURL":
          return ge(M);
      }
    return M;
  }, Ul = function(a, y, C, M) {
    try {
      C ? a.setAttributeNS(C, y, M) : a.setAttribute(y, M), ir(a) ? zt(a) : Wi(t.removed);
    } catch {
      Yt(y, a);
    }
  }, fi = function(a) {
    At(H.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || ir(a))
      return;
    S = oi(H.uponSanitizeAttribute, S, x, Xe);
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let M = y.length;
    const z = Re(a.nodeName);
    for (; M--; ) {
      const Y = y[M], be = Y.name, Ae = Y.namespaceURI, it = Y.value, ot = Re(be), Yr = it;
      let Je = be === "value" ? Yr : Tu(Yr);
      if (C.attrName = ot, C.attrValue = Je, C.keepAttr = !0, C.forceKeepAttr = void 0, At(H.uponSanitizeAttribute, a, C), Je = C.attrValue, Cn && (ot === "id" || ot === "name") && Ki(Je, wn) !== 0 && (Yt(be, a, Y), Je = wn + Je), re && Be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        Yt(be, a, Y);
        continue;
      }
      if (ot === "attributename" && qi(Je, "href")) {
        Yt(be, a, Y);
        continue;
      }
      if (!C.forceKeepAttr) {
        if (!C.keepAttr) {
          Yt(be, a, Y);
          continue;
        }
        if (!V && Be(ju, Je)) {
          Yt(be, a, Y);
          continue;
        }
        if (X && (Je = sr(Je)), !ci(z, ot, Je)) {
          Yt(be, a, Y);
          continue;
        }
        Je = kl(z, ot, Ae, Je), Je !== Yr && Ul(a, be, Ae, Je);
      }
    }
    At(H.afterSanitizeAttributes, a, null);
  }, lr = function(a) {
    let y = null;
    const C = ii(a);
    for (At(H.beforeSanitizeShadowDOM, a, null); y = C.nextNode(); )
      if (At(H.uponSanitizeShadowNode, y, null), ai(y, a), fi(y), hn(y.content) && lr(y.content), Te(y) === ft.element) {
        const M = I(y);
        hn(M) && (Gr(M), lr(M));
      }
    At(H.afterSanitizeShadowDOM, a, null);
  }, Gr = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const C = y.pop();
      if (C.shadow) {
        lr(C.shadow);
        continue;
      }
      const M = C.node, Y = Te(M) === ft.element, be = J(M);
      if (be)
        for (let Ae = be.length - 1; Ae >= 0; --Ae)
          y.push({
            node: be[Ae],
            shadow: null
          });
      if (Y) {
        const Ae = te ? te(M) : null;
        if (typeof Ae == "string" && Re(Ae) === "template") {
          const it = M.content;
          hn(it) && y.push({
            node: it,
            shadow: null
          });
        }
      }
      if (Y) {
        const Ae = I(M);
        hn(Ae) && y.push({
          node: null,
          shadow: Ae
        }, {
          node: Ae,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(P) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, C = null, M = null, z = null;
    if (Vr = !P, Vr && (P = "<!-->"), typeof P != "string" && !Rn(P) && (P = Cu(P), typeof P != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return P;
    ve ? (_ = xe, S = Xe) : qr(a), (H.uponSanitizeElement.length > 0 || H.uponSanitizeAttribute.length > 0) && (_ = dt(_)), H.uponSanitizeAttribute.length > 0 && (S = dt(S)), t.removed = [];
    const Y = $r && typeof P != "string" && Rn(P);
    if (Y) {
      Ll(P);
      const it = Pe(P);
      if (typeof it == "string") {
        const ot = Re(it);
        if (!_[ot] || N[ot])
          throw nr(P), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (ir(P))
        throw nr(P), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Gr(P);
      } catch (ot) {
        throw nr(P), ot;
      }
    } else if (Rn(P))
      y = si("<!---->"), C = y.ownerDocument.importNode(P, !0), C.nodeType === ft.element && C.nodeName === "BODY" || C.nodeName === "HTML" ? y = C : y.appendChild(C), Gr(C);
    else {
      if (!ht && !X && !ne && // eslint-disable-next-line unicorn/prefer-includes
      P.indexOf("<") === -1)
        return he && ke ? $e(P) : P;
      if (y = si(P), !y)
        return ht ? null : ke ? Oe : "";
    }
    y && st && zt(y.firstChild);
    const be = Y ? P : y;
    try {
      const it = ii(be);
      for (; M = it.nextNode(); )
        ai(M, be), fi(M), hn(M.content) && lr(M.content);
    } catch (it) {
      throw Y && (nr(P), en(t.removed, (ot) => {
        ot.element && rr(ot.element);
      })), it;
    }
    if (Y)
      return en(t.removed, (it) => {
        it.element && rr(it.element);
      }), X && Kr(P), P;
    if (ht) {
      if (X && Kr(y), Gt)
        for (z = Ye.call(y.ownerDocument); y.firstChild; )
          z.appendChild(y.firstChild);
      else
        z = y;
      return (S.shadowroot || S.shadowrootmode) && (z = q.call(r, z, !0)), z;
    }
    let Ae = ne ? y.outerHTML : y.innerHTML;
    return ne && _["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && Be(ku, y.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + Ae), X && (Ae = sr(Ae)), he && ke ? $e(Ae) : Ae;
  }, t.setConfig = function() {
    let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qr(P), ve = !0, xe = _, Xe = S;
  }, t.clearConfig = function() {
    pn = null, ve = !1, xe = null, Xe = null, he = Ie, Oe = "";
  }, t.isValidAttribute = function(P, a, y) {
    pn || qr({});
    const C = Re(P), M = Re(a);
    return ci(C, M, y);
  }, t.addHook = function(P, a) {
    typeof a == "function" && at(H, P) && In(H[P], a);
  }, t.removeHook = function(P, a) {
    if (at(H, P)) {
      if (a !== void 0) {
        const y = _u(H[P], a);
        return y === -1 ? void 0 : vu(H[P], y, 1)[0];
      }
      return Wi(H[P]);
    }
  }, t.removeHooks = function(P) {
    at(H, P) && (H[P] = []);
  }, t.removeAllHooks = function() {
    H = ro();
  }, t;
}
var Wu = Tl();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bs, so;
function Ku() {
  if (so) return bs;
  so = 1;
  var e = /["'&<>]/;
  bs = t;
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
  return bs;
}
var Gu = Ku();
const io = /* @__PURE__ */ qu(Gu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Yu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function p(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = ($) => $, g = (l.sanitize ? Wu.sanitize : c) || c, m = l.escape ? io : c, A = ($) => typeof $ == "string" || typeof $ == "number", L = ($, J, B) => $.replace(/%n/g, "" + B).replace(/{([^{}]*)}/g, (I, K) => {
    if (J === void 0 || !(K in J))
      return m(I);
    const F = J[K];
    return A(F) ? m(`${F}`) : typeof F == "object" && A(F.value) ? (F.escape !== !1 ? io : c)(`${F.value}`) : m(I);
  });
  let W = (s?.bundle ?? Yu(e)).translations[t] || t;
  return W = Array.isArray(W) ? W[0] : W, g(typeof i == "object" || o !== void 0 ? L(
    W,
    i,
    o
  ) : W);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Tf = ["aria-label"], Sf = { class: "library-filter-panel" }, Ef = { class: "library-filter-panel-summary" }, Af = ["aria-label"], xf = { value: "" }, Cf = ["value"], wf = { value: "" }, Of = ["value"], Rf = { value: "" }, Nf = ["value"], Pf = { value: "" }, If = ["value"], Lf = { value: "" }, Mf = ["value"], Df = { value: "" }, Ff = ["value"], kf = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], sd = ["aria-label"], id = ["href"], od = { class: "library-muted library-filter-result-summary" }, ld = { key: 0 }, ad = { href: "?" }, cd = { class: "library-batch-actions" }, ud = { class: "library-settings-count-badge" }, fd = ["action"], dd = ["value"], pd = ["name", "value"], hd = {
  type: "submit",
  class: "button secondary"
}, md = { class: "library-muted" }, bd = ["action"], yd = ["value"], gd = ["name", "value"], _d = {
  type: "submit",
  class: "button secondary"
}, vd = { class: "library-muted" }, Td = ["aria-label"], Sd = ["href", "aria-label"], Ed = ["aria-label"], Ad = { class: "library-pagination-range" }, xd = { key: 0 }, Cd = ["href"], wd = {
  key: 1,
  class: "library-muted"
}, Od = ["href"], Rd = {
  key: 3,
  class: "library-muted"
}, Nd = {
  key: 1,
  class: "library-periodical-groups"
}, Pd = { class: "library-periodical-groups-summary" }, Id = { id: "library-periodical-groups-heading" }, Ld = { class: "library-muted" }, Md = ["href"], Dd = { class: "library-muted" }, Fd = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, kd = { class: "library-periodical-groups-summary" }, Ud = { id: "library-periodical-groups-empty-heading" }, Hd = { class: "library-muted" }, jd = { class: "library-muted" }, $d = { class: "library-empty-actions" }, Vd = ["href"], zd = { class: "library-muted" }, Bd = { class: "library-muted" }, Wd = { class: "library-empty-actions" }, qd = ["href"], Kd = { class: "library-muted" }, Gd = { class: "library-empty-actions" }, Yd = ["href"], Xd = {
  href: "?",
  class: "button primary"
}, Jd = { class: "library-muted" }, Zd = { class: "library-empty-actions" }, Qd = ["href"], ep = {
  key: 4,
  class: "library-cover-gallery"
}, tp = ["href", "aria-label"], np = ["src", "alt"], rp = ["action", "onSubmit"], sp = ["value"], ip = ["value"], op = ["aria-pressed", "title", "aria-label", "onClick"], lp = { class: "library-cover-summary" }, ap = { class: "library-cover-primary" }, cp = ["aria-label"], up = ["href"], fp = ["onToggle"], dp = ["aria-label"], pp = { class: "library-cover-meta" }, hp = {
  key: 0,
  class: "library-creator"
}, mp = { class: "library-cover-detail-list" }, bp = { class: "library-cover-detail-chip" }, yp = {
  key: 0,
  class: "library-cover-detail-chip"
}, gp = {
  key: 1,
  class: "library-cover-detail-chip"
}, _p = {
  key: 2,
  class: "library-cover-detail-chip"
}, vp = {
  key: 3,
  class: "library-cover-detail-chip"
}, Tp = {
  key: 4,
  class: "library-cover-detail-chip"
}, Sp = {
  key: 5,
  class: "library-cover-detail-chip"
}, Ep = {
  key: 6,
  class: "library-cover-detail-chip"
}, Ap = {
  key: 1,
  class: "library-muted library-cover-description"
}, xp = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Cp = { key: 0 }, wp = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Op = {
  key: 0,
  class: "library-muted"
}, Rp = { class: "library-cover-actions" }, Np = ["href"], Pp = ["href"], Ip = ["href"], Lp = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ nn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ nn((s.items || []).map((v) => ({ ...v }))), o = ae(() => i), l = ae(() => s.shelves || []), c = ae(() => s.formats || []), g = ae(() => s.publications || []), m = ae(() => s.publicationSummaries || []), A = ae(() => s.publicationYears || []), L = ae(() => s.creators || []), D = ae(() => s.scanStatuses || []), W = ae(() => s.workflowStatuses || []), $ = ae(() => s.genres || []), J = ae(() => s.classifications || []), B = ae(() => s.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ nn({
      q: s.activeFilters?.q || "",
      type: s.activeFilters?.type || "",
      publication: s.activeFilters?.publication || "",
      year: s.activeFilters?.year || "",
      creator: s.activeFilters?.creator || "",
      format: s.activeFilters?.format || "",
      tag: s.activeFilters?.tag || "",
      shelf: s.activeFilters?.shelf || "",
      status: s.activeFilters?.status || "",
      workflowStatus: s.activeFilters?.workflowStatus || "",
      genre: s.activeFilters?.genre || "",
      classification: s.activeFilters?.classification || "",
      scannerConflicts: s.activeFilters?.scannerConflicts || "",
      starred: s.activeFilters?.starred || "",
      sort: s.activeFilters?.sort || "title"
    }), K = ae(() => s.settingsUrl || ""), F = ae(() => s.requestToken || ""), te = ae(() => s.metadataExportUrl || ""), we = ae(() => s.metadataSidecarManifestUrl || ""), Te = ae(() => s.metadataSidecarBundleUrl || ""), Pe = ae(() => s.catalogueEndpointUrl || "/apps/library/catalogue"), he = ae(() => s.batchTagUrl || "/apps/library/bulk/tags"), Oe = ae(() => s.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ie = ae(() => s.scannerConflictReviewUrl || "?scannerConflicts=1"), ct = ae(() => Number(s.rootCount || 0)), je = ae(() => Number(s.enabledRootCount || 0)), Ge = ae(() => ct.value === 0), $e = ae(() => ct.value > 0 && je.value === 0), ge = ae(() => Z.value.length > 0), oe = {
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
    }, Z = ae(() => Object.entries(oe).map(([v, d]) => ({ key: v, label: d, value: I[v] || "" })).filter((v) => String(v.value).trim() !== "")), Le = ae(() => Object.entries(I).filter(([v, d]) => !["q", "sort", "starred"].includes(v) && String(d || "").trim() !== "").map(([v, d]) => ({ key: v, value: d }))), nt = ae(() => Object.entries(I).filter(([v, d]) => String(d || "").trim() !== "").map(([v, d]) => ({ key: v, value: d }))), Ye = /* @__PURE__ */ nn({}), Se = /* @__PURE__ */ ga(null);
    let q = null;
    function H(v) {
      const d = new URLSearchParams(new FormData(v));
      for (const f of Array.from(d.keys()))
        String(d.get(f) || "").trim() === "" && d.delete(f);
      return d.delete("page"), d;
    }
    function me(v) {
      i.splice(0, i.length, ...(v.items || []).map((d) => ({ ...d })));
      for (const d of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchMetadataResetUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(v, d) && (s[d] = v[d]);
      Object.assign(I, v.activeFilters || {});
    }
    async function de(v) {
      const d = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!d) return;
      const O = H(d).toString(), j = O ? `?${O}` : "", V = await fetch(Pe.value + j, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!V.ok) {
        d.submit();
        return;
      }
      me(await V.json()), history.replaceState({}, "", O ? `?${O}` : window.location.pathname);
    }
    function _e(v) {
      de(v);
    }
    function Ve(v) {
      window.clearTimeout(q), q = window.setTimeout(() => _e(v), 350);
    }
    function Ee(v) {
      const d = new URLSearchParams();
      for (const [O, j] of Object.entries(I)) {
        const V = String(j || "").trim();
        V !== "" && O !== v && !(O === "sort" && V === "title") && d.set(O, V);
      }
      const f = d.toString();
      return f ? `?${f}` : "?";
    }
    function rt() {
      return Ee("q");
    }
    function yt(v) {
      return String(v || "").toUpperCase();
    }
    function u(v) {
      return v.nextcloudTags || [];
    }
    function h(v) {
      const d = new URLSearchParams(window.location.search);
      return d.set("publication", v), d.set("sort", "publication"), d.delete("page"), `?${d.toString()}`;
    }
    function _(v, d) {
      Ye[v] = !!d?.currentTarget?.open;
    }
    function w(v) {
      const d = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function S(v) {
      v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || w(v.target) || (v.preventDefault(), Se.value?.focus(), Se.value?.select?.());
    }
    function x(v) {
      v.key !== "Escape" || document.activeElement !== Se.value || I.q === "" || (v.preventDefault(), I.q = "", Se.value.value = "", window.clearTimeout(q), _e({ currentTarget: Se.value }));
    }
    function R(v) {
      S(v), x(v);
    }
    Wo(() => {
      window.addEventListener("keydown", R);
    }), qo(() => {
      window.removeEventListener("keydown", R);
    });
    async function N(v, d) {
      const f = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!f || !v?.starUrl) return;
      const O = !!v.starred;
      v.starred = !O;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (v.starred = O);
      } catch {
        v.starred = O;
      }
    }
    return (v, d) => (k(), U("div", Xu, [
      b("section", Ju, [
        b("div", Zu, [
          b("div", null, [
            b("h2", Qu, T(E(p)("library", "Publication catalogue")), 1),
            b("p", ef, T(E(p)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          b("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": E(p)("library", "Library actions")
          }, [
            b("a", {
              href: K.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, T(E(p)("library", "Settings")), 9, nf),
            te.value ? (k(), U("a", {
              key: 0,
              href: te.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, T(E(p)("library", "Export corrected metadata")), 9, rf)) : De("", !0),
            we.value ? (k(), U("a", {
              key: 1,
              href: we.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, T(E(p)("library", "Sidecar manifest")), 9, sf)) : De("", !0),
            Te.value ? (k(), U("a", {
              key: 2,
              href: Te.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, T(E(p)("library", "Sidecar ZIP")), 9, of)) : De("", !0)
          ], 8, tf)
        ]),
        b("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": E(p)("library", "Quick catalogue filters"),
          onSubmit: pr(de, ["prevent"])
        }, [
          (k(!0), U(ie, null, Me(Le.value, (f) => (k(), U("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, af))), 128)),
          b("label", cf, [
            le(T(E(p)("library", "Search")) + " ", 1),
            d[18] || (d[18] = b("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Ue(b("input", {
              ref_key: "quickSearchInput",
              ref: Se,
              "onUpdate:modelValue": d[0] || (d[0] = (f) => I.q = f),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Ve
            }, null, 544), [
              [cs, I.q]
            ])
          ]),
          b("label", null, [
            le(T(E(p)("library", "Sort")) + " ", 1),
            Ue(b("select", {
              "onUpdate:modelValue": d[1] || (d[1] = (f) => I.sort = f),
              name: "sort",
              onChange: de
            }, [
              b("option", uf, T(E(p)("library", "Title")), 1),
              b("option", ff, T(E(p)("library", "Recently added")), 1),
              b("option", df, T(E(p)("library", "Publication date")), 1),
              b("option", pf, T(E(p)("library", "Series")), 1),
              b("option", hf, T(E(p)("library", "Recently opened")), 1),
              b("option", mf, T(E(p)("library", "Format")), 1)
            ], 544), [
              [Ze, I.sort]
            ])
          ]),
          b("label", null, [
            le(T(E(p)("library", "Starred")) + " ", 1),
            Ue(b("select", {
              "onUpdate:modelValue": d[2] || (d[2] = (f) => I.starred = f),
              name: "starred",
              onChange: de
            }, [
              b("option", bf, T(E(p)("library", "All")), 1),
              b("option", yf, T(E(p)("library", "Starred")), 1)
            ], 544), [
              [Ze, I.starred]
            ])
          ]),
          b("label", null, [
            le(T(E(p)("library", "Size")) + " ", 1),
            b("select", {
              value: B.value.limit,
              name: "limit",
              onChange: de
            }, [
              (k(), U(ie, null, Me(r, (f) => b("option", {
                key: f,
                value: f
              }, T(f), 9, _f)), 64))
            ], 40, gf)
          ]),
          b("button", {
            type: "submit",
            class: "button primary",
            "aria-label": E(p)("library", "Apply catalogue filters")
          }, T(E(p)("library", "Apply filters")), 9, vf),
          b("a", {
            href: "?",
            class: "button secondary",
            "aria-label": E(p)("library", "Clear catalogue filters")
          }, T(E(p)("library", "Clear all")), 9, Tf)
        ], 40, lf),
        b("details", Sf, [
          b("summary", Ef, T(E(p)("library", "Show catalogue filters")), 1),
          b("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": E(p)("library", "Catalogue search and filters"),
            onSubmit: pr(de, ["prevent"])
          }, [
            b("label", null, [
              le(T(E(p)("library", "Search title / author")) + " ", 1),
              Ue(b("input", {
                "onUpdate:modelValue": d[3] || (d[3] = (f) => I.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [cs, I.q]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Type")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[4] || (d[4] = (f) => I.type = f),
                name: "type"
              }, [
                b("option", xf, T(E(p)("library", "All types")), 1),
                (k(), U(ie, null, Me(n, (f) => b("option", {
                  key: f,
                  value: f
                }, T(f), 9, Cf)), 64))
              ], 512), [
                [Ze, I.type]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Series / periodical")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[5] || (d[5] = (f) => I.publication = f),
                name: "publication"
              }, [
                b("option", wf, T(E(p)("library", "All series and periodicals")), 1),
                (k(!0), U(ie, null, Me(g.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Of))), 128))
              ], 512), [
                [Ze, I.publication]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Publication year")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[6] || (d[6] = (f) => I.year = f),
                name: "year"
              }, [
                b("option", Rf, T(E(p)("library", "All years")), 1),
                (k(!0), U(ie, null, Me(A.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Nf))), 128))
              ], 512), [
                [Ze, I.year]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Creator")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[7] || (d[7] = (f) => I.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                b("option", Pf, T(E(p)("library", "All creators")), 1),
                (k(!0), U(ie, null, Me(L.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, If))), 128))
              ], 512), [
                [Ze, I.creator]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Nextcloud tag")) + " ", 1),
              Ue(b("input", {
                "onUpdate:modelValue": d[8] || (d[8] = (f) => I.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [cs, I.tag]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Format")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[9] || (d[9] = (f) => I.format = f),
                name: "format"
              }, [
                b("option", Lf, T(E(p)("library", "All formats")), 1),
                (k(!0), U(ie, null, Me(c.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(yt(f)), 9, Mf))), 128))
              ], 512), [
                [Ze, I.format]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Shelf")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[10] || (d[10] = (f) => I.shelf = f),
                name: "shelf"
              }, [
                b("option", Df, T(E(p)("library", "All shelves")), 1),
                (k(!0), U(ie, null, Me(l.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Ff))), 128))
              ], 512), [
                [Ze, I.shelf]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Scan status")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[11] || (d[11] = (f) => I.status = f),
                name: "status"
              }, [
                b("option", kf, T(E(p)("library", "All scan statuses")), 1),
                (k(!0), U(ie, null, Me(D.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Uf))), 128))
              ], 512), [
                [Ze, I.status]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Workflow status")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[12] || (d[12] = (f) => I.workflowStatus = f),
                name: "workflowStatus"
              }, [
                b("option", Hf, T(E(p)("library", "All workflow statuses")), 1),
                (k(!0), U(ie, null, Me(W.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, jf))), 128))
              ], 512), [
                [Ze, I.workflowStatus]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Genre")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[13] || (d[13] = (f) => I.genre = f),
                name: "genre"
              }, [
                b("option", $f, T(E(p)("library", "All genres")), 1),
                (k(!0), U(ie, null, Me($.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Vf))), 128))
              ], 512), [
                [Ze, I.genre]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Classification")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[14] || (d[14] = (f) => I.classification = f),
                name: "classification"
              }, [
                b("option", zf, T(E(p)("library", "All classifications")), 1),
                (k(!0), U(ie, null, Me(J.value, (f) => (k(), U("option", {
                  key: f,
                  value: f
                }, T(f), 9, Bf))), 128))
              ], 512), [
                [Ze, I.classification]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Scanner conflicts")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[15] || (d[15] = (f) => I.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                b("option", Wf, T(E(p)("library", "All metadata")), 1),
                b("option", qf, T(E(p)("library", "Needs review")), 1)
              ], 512), [
                [Ze, I.scannerConflicts]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Starred")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[16] || (d[16] = (f) => I.starred = f),
                name: "starred"
              }, [
                b("option", Kf, T(E(p)("library", "All publications")), 1),
                b("option", Gf, T(E(p)("library", "Starred only")), 1)
              ], 512), [
                [Ze, I.starred]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Sort")) + " ", 1),
              Ue(b("select", {
                "onUpdate:modelValue": d[17] || (d[17] = (f) => I.sort = f),
                name: "sort"
              }, [
                b("option", Yf, T(E(p)("library", "Title")), 1),
                b("option", Xf, T(E(p)("library", "Recently added")), 1),
                b("option", Jf, T(E(p)("library", "Publication date")), 1),
                b("option", Zf, T(E(p)("library", "Series / periodical")), 1),
                b("option", Qf, T(E(p)("library", "Recently opened")), 1),
                b("option", ed, T(E(p)("library", "Format")), 1)
              ], 512), [
                [Ze, I.sort]
              ])
            ]),
            b("label", null, [
              le(T(E(p)("library", "Page size")) + " ", 1),
              b("select", {
                value: B.value.limit,
                name: "limit"
              }, [
                (k(), U(ie, null, Me(r, (f) => b("option", {
                  key: f,
                  value: f
                }, T(f), 9, nd)), 64))
              ], 8, td)
            ]),
            b("button", {
              type: "submit",
              class: "button primary",
              "aria-label": E(p)("library", "Apply catalogue filters")
            }, T(E(p)("library", "Apply filters")), 9, rd),
            b("a", {
              href: "?",
              class: "button secondary",
              "aria-label": E(p)("library", "Clear catalogue filters")
            }, T(E(p)("library", "Clear")), 9, sd),
            b("a", {
              href: Ie.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, T(E(p)("library", "Review scanner conflicts")), 9, id)
          ], 40, Af)
        ]),
        b("p", od, [
          le(T(E(p)("library", "Showing")) + " " + T(B.value.from) + "–" + T(B.value.to) + " " + T(E(p)("library", "of")) + " " + T(B.value.total) + " " + T(E(p)("library", "catalogue items")), 1),
          Z.value.length > 0 ? (k(), U("span", ld, [
            d[19] || (d[19] = le(" · ", -1)),
            b("a", ad, T(E(p)("library", "Clear all filters")), 1)
          ])) : De("", !0)
        ]),
        b("details", cd, [
          b("summary", null, [
            le(T(E(p)("library", "Batch actions for current results")) + " ", 1),
            b("span", ud, T(B.value.total) + " " + T(E(p)("library", "Current filter result")), 1)
          ]),
          b("form", {
            method: "post",
            action: he.value,
            class: "library-batch-tag-form"
          }, [
            b("input", {
              type: "hidden",
              name: "requesttoken",
              value: F.value
            }, null, 8, dd),
            (k(!0), U(ie, null, Me(nt.value, (f) => (k(), U("input", {
              key: f.key,
              type: "hidden",
              name: f.key,
              value: f.value
            }, null, 8, pd))), 128)),
            b("label", null, [
              le(T(E(p)("library", "Apply Nextcloud tag to current results")) + " ", 1),
              d[20] || (d[20] = b("input", {
                type: "text",
                name: "nextcloudTagName",
                placeholder: "batch-review"
              }, null, -1))
            ]),
            b("button", hd, T(E(p)("library", "Apply tag to filtered results")), 1),
            b("p", md, T(E(p)("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata.")), 1)
          ], 8, fd),
          b("form", {
            method: "post",
            action: Oe.value,
            class: "library-batch-metadata-reset-form"
          }, [
            b("input", {
              type: "hidden",
              name: "requesttoken",
              value: F.value
            }, null, 8, yd),
            (k(!0), U(ie, null, Me(nt.value, (f) => (k(), U("input", {
              key: `reset-${f.key}`,
              type: "hidden",
              name: f.key,
              value: f.value
            }, null, 8, gd))), 128)),
            d[21] || (d[21] = b("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            b("button", _d, T(E(p)("library", "Reset filtered metadata")), 1),
            b("p", vd, T(E(p)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, bd)
        ]),
        Z.value.length > 0 ? (k(), U("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": E(p)("library", "Active filters")
        }, [
          b("span", null, T(E(p)("library", "Active filters")), 1),
          (k(!0), U(ie, null, Me(Z.value, (f) => (k(), U("a", {
            key: f.key,
            href: Ee(f.key),
            class: "library-filter-chip",
            "aria-label": `${E(p)("library", "Remove filter")}: ${f.label}`
          }, [
            b("strong", null, T(f.label) + ":", 1),
            le(" " + T(f.value) + " ", 1),
            d[22] || (d[22] = b("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Sd))), 128))
        ], 8, Td)) : De("", !0),
        b("nav", {
          class: "library-pagination",
          "aria-label": E(p)("library", "Catalogue pagination")
        }, [
          b("span", Ad, [
            le(T(E(p)("library", "Page")) + " " + T(B.value.page), 1),
            B.value.total > 0 ? (k(), U("span", xd, " · " + T(B.value.from) + "–" + T(B.value.to), 1)) : De("", !0)
          ]),
          B.value.previousUrl ? (k(), U("a", {
            key: 0,
            href: B.value.previousUrl
          }, T(E(p)("library", "Previous")), 9, Cd)) : (k(), U("span", wd, T(E(p)("library", "Previous")), 1)),
          B.value.nextUrl ? (k(), U("a", {
            key: 2,
            href: B.value.nextUrl
          }, T(E(p)("library", "Next")), 9, Od)) : (k(), U("span", Rd, T(E(p)("library", "Next")), 1))
        ], 8, Ed),
        m.value.length > 0 ? (k(), U("details", Nd, [
          b("summary", Pd, T(E(p)("library", "Show top series and periodicals")), 1),
          b("h3", Id, T(E(p)("library", "Top series and periodicals")), 1),
          b("p", Ld, T(E(p)("library", "Jump into recurring publications with one click.")), 1),
          b("ul", null, [
            (k(!0), U(ie, null, Me(m.value, (f) => (k(), U("li", {
              key: f.publication
            }, [
              b("a", {
                href: h(f.publication)
              }, T(f.publication), 9, Md),
              b("span", Dd, T(f.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (k(), U("details", Fd, [
          b("summary", kd, T(E(p)("library", "Show top series and periodicals")), 1),
          b("h3", Ud, T(E(p)("library", "No series or periodicals found yet")), 1),
          b("p", Hd, T(E(p)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : De("", !0),
        o.value.length === 0 ? (k(), U("div", {
          key: 3,
          class: vn(["library-empty-content", { "library-first-run-guidance": Ge.value || $e.value, "library-filter-empty-state": ge.value && !Ge.value && !$e.value }]),
          role: "status"
        }, [
          Ge.value ? (k(), U(ie, { key: 0 }, [
            b("h3", null, T(E(p)("library", "Start with one Library root")), 1),
            b("p", jd, T(E(p)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            b("p", $d, [
              b("a", {
                href: K.value,
                class: "button primary"
              }, T(E(p)("library", "Add a Library root")), 9, Vd),
              b("span", zd, T(E(p)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : $e.value ? (k(), U(ie, { key: 1 }, [
            b("h3", null, T(E(p)("library", "No enabled Library roots")), 1),
            b("p", Bd, T(E(p)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            b("p", Wd, [
              b("a", {
                href: K.value,
                class: "button primary"
              }, T(E(p)("library", "Open Library settings")), 9, qd)
            ])
          ], 64)) : ge.value ? (k(), U(ie, { key: 2 }, [
            b("h3", null, T(E(p)("library", "No matches for the current filters")), 1),
            b("p", Kd, T(E(p)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            b("p", Gd, [
              b("a", {
                href: rt(),
                class: "button secondary"
              }, T(E(p)("library", "Clear search")), 9, Yd),
              b("a", Xd, T(E(p)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (k(), U(ie, { key: 3 }, [
            b("h3", null, T(E(p)("library", "No catalogue items yet")), 1),
            b("p", Jd, T(E(p)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            b("p", Zd, [
              b("a", {
                href: K.value,
                class: "button primary"
              }, T(E(p)("library", "Run a scan from settings")), 9, Qd)
            ])
          ], 64))
        ], 2)) : (k(), U("div", ep, [
          (k(!0), U(ie, null, Me(o.value, (f) => (k(), U("article", {
            key: f.id,
            class: vn(["library-cover-card", { "library-cover-card--open": Ye[f.id] }])
          }, [
            b("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              b("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, np)
            ], 8, tp),
            b("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: pr((O) => N(f, O), ["prevent"])
            }, [
              b("input", {
                type: "hidden",
                name: "requesttoken",
                value: F.value
              }, null, 8, sp),
              d[23] || (d[23] = b("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              b("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, ip),
              b("button", {
                type: "submit",
                class: vn(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? E(p)("library", "Unstar this publication") : E(p)("library", "Star this publication"),
                "aria-label": f.starred ? E(p)("library", "Unstar this publication") : E(p)("library", "Star this publication"),
                onClick: pr((O) => N(f, O), ["prevent"])
              }, T(f.starred ? "★" : "☆"), 11, op)
            ], 40, rp),
            b("div", lp, [
              b("div", ap, [
                b("h3", null, [
                  f.starred ? (k(), U("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": E(p)("library", "Starred")
                  }, "★", 8, cp)) : De("", !0),
                  le(T(f.title), 1)
                ]),
                b("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, T(E(p)("library", "Read")), 9, up)
              ]),
              b("details", {
                class: "library-cover-details",
                onToggle: (O) => _(f.id, O)
              }, [
                b("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${E(p)("library", "Show details and actions")}: ${f.title}`
                }, T(E(p)("library", "Details")), 9, dp),
                b("div", pp, [
                  f.creators ? (k(), U("p", hp, T(f.creators), 1)) : De("", !0),
                  b("dl", mp, [
                    b("div", bp, [
                      b("dt", null, T(E(p)("library", "Type")), 1),
                      b("dd", null, T(f.publicationType), 1)
                    ]),
                    f.publication ? (k(), U("div", yp, [
                      b("dt", null, T(E(p)("library", "Series")), 1),
                      b("dd", null, T(f.publication), 1)
                    ])) : De("", !0),
                    f.publicationDate ? (k(), U("div", gp, [
                      b("dt", null, T(E(p)("library", "Date")), 1),
                      b("dd", null, T(f.publicationDate), 1)
                    ])) : De("", !0),
                    f.workflowStatus ? (k(), U("div", _p, [
                      b("dt", null, T(E(p)("library", "Status")), 1),
                      b("dd", null, T(f.workflowStatus), 1)
                    ])) : De("", !0),
                    f.hasScannerConflict ? (k(), U("div", vp, [
                      b("dt", null, T(E(p)("library", "Review")), 1),
                      b("dd", null, T(f.scannerConflictCount) + " fields", 1)
                    ])) : De("", !0),
                    f.lastOpenedAt ? (k(), U("div", Tp, [
                      b("dt", null, T(E(p)("library", "Last opened")), 1),
                      b("dd", null, T(f.lastOpenedAt), 1)
                    ])) : De("", !0),
                    f.extension ? (k(), U("div", Sp, [
                      b("dt", null, T(E(p)("library", "Format")) + ":", 1),
                      b("dd", null, T(yt(f.extension)), 1)
                    ])) : De("", !0),
                    f.shelf ? (k(), U("div", Ep, [
                      b("dt", null, T(E(p)("library", "Shelf")), 1),
                      b("dd", null, T(f.shelf), 1)
                    ])) : De("", !0)
                  ]),
                  f.description ? (k(), U("p", Ap, T(f.description), 1)) : De("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (k(), U("p", xp, [
                    le(" scanStatus: " + T(f.scanStatus || "unknown"), 1),
                    f.scanError ? (k(), U("span", Cp, " · scanError: " + T(f.scanError), 1)) : De("", !0)
                  ])) : De("", !0),
                  b("div", wp, [
                    u(f).length === 0 ? (k(), U("span", Op, "No Nextcloud tags")) : (k(!0), U(ie, { key: 1 }, Me(u(f), (O) => (k(), U("span", {
                      key: O.id,
                      class: "library-tag"
                    }, T(O.name), 1))), 128))
                  ]),
                  b("p", Rp, [
                    b("a", {
                      href: f.filesUrl
                    }, T(E(p)("library", "Show in Files")), 9, Np),
                    d[24] || (d[24] = le(" · ", -1)),
                    b("a", {
                      href: f.downloadUrl
                    }, T(E(p)("library", "Download source")), 9, Pp),
                    d[25] || (d[25] = le(" · ", -1)),
                    b("a", {
                      href: f.detailsUrl
                    }, T(E(p)("library", "Details")), 9, Ip)
                  ])
                ])
              ], 40, fp)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, oo = uu("library", "catalogue", {}), gr = document.querySelector("#library-vue-root"), lo = {
  ...oo,
  requestToken: gr?.dataset.requestToken || oo.requestToken || ""
};
function ee(e) {
  return String(e ?? "");
}
function Sl(e) {
  return ee(e).toUpperCase();
}
function Mp(e, t, n, r = ee) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = ee(s), i.textContent = r(s), ee(s) === ee(n) && (i.selected = !0), e.appendChild(i);
  }
}
function ao(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ee(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function bn(e, t, n, r, s, i, o = ee) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const g = document.createElement("option");
  g.value = "", g.textContent = s, c.appendChild(g), Mp(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function ys(e) {
  const t = ee(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Dp(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Fp(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && ee(r).trim() !== "");
}
function kp() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Dn(e, t, n, r) {
  const s = document.createElement("a");
  return s.href = t, s.className = n, s.textContent = r, e.appendChild(s), s;
}
function Up(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Hp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", p("library", "Catalogue search and filters")), ao(r, p("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), bn(r, p("library", "Type"), "type", n.type, p("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ao(r, p("library", "Nextcloud tag"), "tag", n.tag, "photography"), bn(r, p("library", "Format"), "format", n.format, p("library", "All formats"), e.formats || [], Sl), bn(r, p("library", "Shelf"), "shelf", n.shelf, p("library", "All shelves"), e.shelves || []), bn(r, p("library", "Scan status"), "status", n.status, p("library", "All scan statuses"), e.scanStatuses || []), bn(r, p("library", "Sort"), "sort", n.sort || "title", p("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), bn(r, p("library", "Page size"), "limit", t.limit || 100, p("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", p("library", "Apply catalogue filters")), s.textContent = p("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", p("library", "Clear catalogue filters")), i.textContent = p("library", "Clear"), r.append(s, i), r;
}
function jp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", p("library", "Quick catalogue filters"));
  let s = null;
  const i = () => {
    window.clearTimeout(s), s = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [A, L] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(A) || ee(L).trim() === "") continue;
    const D = document.createElement("input");
    D.type = "hidden", D.name = A, D.value = ee(L), r.appendChild(D);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = p("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = ee(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", i), o.appendChild(l), r.appendChild(o);
  const c = [
    [p("library", "Sort"), "sort", n.sort || "title", [["title", p("library", "Title")], ["recent", p("library", "Recently added")], ["publicationDate", p("library", "Publication date")], ["publication", p("library", "Series")], ["lastOpened", p("library", "Recently opened")], ["format", p("library", "Format")]]],
    [p("library", "Starred"), "starred", n.starred || "", [["", p("library", "All")], ["1", p("library", "Starred")]]],
    [p("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [A, L, D, W] of c) {
    const $ = document.createElement("label");
    $.textContent = A;
    const J = document.createElement("select");
    J.name = L;
    for (const [B, I] of W) {
      const K = document.createElement("option");
      K.value = ee(B), K.textContent = ee(I), ee(B) === ee(D) && (K.selected = !0), J.appendChild(K);
    }
    J.addEventListener("change", () => r.requestSubmit()), $.appendChild(J), r.appendChild($);
  }
  const g = document.createElement("button");
  g.type = "submit", g.className = "button primary", g.setAttribute("aria-label", p("library", "Apply catalogue filters")), g.textContent = p("library", "Apply filters");
  const m = document.createElement("a");
  return m.href = "?", m.className = "button secondary", m.setAttribute("aria-label", p("library", "Clear catalogue filters")), m.textContent = p("library", "Clear all"), r.append(g, m), r;
}
function $p(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = ee(e.settingsUrl || ""), i = ee(e.metadataExportUrl || ""), o = ee(e.batchTagUrl || "/apps/library/bulk/tags"), l = ee(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), c = document.createElement("div");
  c.className = "library-vue-catalogue library-vue-fallback", c.dataset.vueFallback = "true";
  const g = document.createElement("section");
  g.className = "library-panel", g.setAttribute("aria-labelledby", "library-catalogue-heading");
  const m = document.createElement("div");
  m.className = "library-catalogue-header";
  const A = document.createElement("div"), L = document.createElement("h2");
  L.id = "library-catalogue-heading", L.textContent = p("library", "Publication catalogue");
  const D = document.createElement("p");
  D.className = "library-muted", D.textContent = p("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), A.append(L, D);
  const W = document.createElement("nav");
  if (W.className = "library-catalogue-toolbar", W.setAttribute("aria-label", p("library", "Library actions")), s) {
    const q = document.createElement("a");
    q.href = s, q.className = "button secondary", q.setAttribute("aria-label", "Open Library settings"), q.textContent = p("library", "Settings"), W.appendChild(q);
  }
  if (i) {
    const q = document.createElement("a");
    q.href = i, q.className = "button secondary", q.setAttribute("aria-label", "Export corrected metadata"), q.textContent = p("library", "Export corrected metadata"), W.appendChild(q);
  }
  if (e.metadataSidecarManifestUrl) {
    const q = document.createElement("a");
    q.href = e.metadataSidecarManifestUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar manifest"), q.textContent = p("library", "Sidecar manifest"), W.appendChild(q);
  }
  if (e.metadataSidecarBundleUrl) {
    const q = document.createElement("a");
    q.href = e.metadataSidecarBundleUrl, q.className = "button secondary", q.setAttribute("aria-label", "Export sidecar ZIP"), q.textContent = p("library", "Sidecar ZIP"), W.appendChild(q);
  }
  m.append(A, W), g.appendChild(m), g.appendChild(jp(e, r));
  const $ = document.createElement("details");
  $.className = "library-filter-panel";
  const J = document.createElement("summary");
  J.className = "library-filter-panel-summary", J.textContent = p("library", "Show catalogue filters"), $.append(J, Hp(e, r)), g.appendChild($);
  const B = document.createElement("p");
  B.className = "library-muted library-filter-result-summary", B.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const I = document.createElement("a");
  I.href = "?", I.textContent = ` ${p("library", "Clear all filters")}`, B.appendChild(I), g.appendChild(B);
  const K = document.createElement("details");
  K.className = "library-batch-actions";
  const F = document.createElement("summary");
  F.textContent = `${p("library", "Batch actions for current results")} (${r.total ?? n.length} ${p("library", "Current filter result")})`;
  const te = document.createElement("form");
  te.method = "post", te.action = o, te.className = "library-batch-tag-form";
  const we = ys(e);
  we && te.appendChild(we);
  for (const [q, H] of Object.entries(e.activeFilters || {})) {
    if (ee(H).trim() === "") continue;
    const me = document.createElement("input");
    me.type = "hidden", me.name = q, me.value = ee(H), te.appendChild(me);
  }
  const Te = document.createElement("label");
  Te.textContent = p("library", "Apply Nextcloud tag to current results");
  const Pe = document.createElement("input");
  Pe.type = "text", Pe.name = "nextcloudTagName", Pe.placeholder = "batch-review", Te.appendChild(Pe);
  const he = document.createElement("button");
  he.type = "submit", he.className = "button secondary", he.textContent = p("library", "Apply tag to filtered results");
  const Oe = document.createElement("p");
  Oe.className = "library-muted", Oe.textContent = p("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), te.append(Te, he, Oe);
  const Ie = document.createElement("form");
  Ie.method = "post", Ie.action = l, Ie.className = "library-batch-metadata-reset-form";
  const ct = ys(e);
  ct && Ie.appendChild(ct);
  for (const [q, H] of Object.entries(e.activeFilters || {})) {
    if (ee(H).trim() === "") continue;
    const me = document.createElement("input");
    me.type = "hidden", me.name = q, me.value = ee(H), Ie.appendChild(me);
  }
  const je = document.createElement("input");
  je.type = "hidden", je.name = "scannerConflicts", je.value = "1";
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = p("library", "Reset filtered metadata");
  const $e = document.createElement("p");
  $e.className = "library-muted", $e.textContent = p("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ie.append(je, Ge, $e), K.append(F, te, Ie), g.appendChild(K);
  const ge = document.createElement("nav");
  ge.className = "library-pagination", ge.setAttribute("aria-label", p("library", "Catalogue pagination"));
  const oe = document.createElement("span");
  oe.className = "library-pagination-range", oe.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, ge.appendChild(oe), g.appendChild(ge);
  const Z = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], Le = document.createElement("details");
  Le.className = Z.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const nt = document.createElement("summary");
  nt.className = "library-periodical-groups-summary", nt.textContent = p("library", "Show top series and periodicals"), Le.appendChild(nt);
  const Ye = document.createElement("h3");
  Ye.textContent = Z.length > 0 ? p("library", "Top series and periodicals") : p("library", "No series or periodicals found yet");
  const Se = document.createElement("p");
  if (Se.className = "library-muted", Se.textContent = Z.length > 0 ? p("library", "Jump into recurring publications with one click.") : p("library", "Add publication or series names in item details to build this shortcut panel."), Le.append(Ye, Se), Z.length > 0) {
    const q = document.createElement("ul");
    for (const H of Z) {
      const me = document.createElement("li"), de = document.createElement("a");
      de.href = Dp(ee(H.publication)), de.textContent = ee(H.publication);
      const _e = document.createElement("span");
      _e.className = "library-muted", _e.textContent = `${H.itemCount} items`, me.append(de, _e), q.appendChild(me);
    }
    Le.appendChild(q);
  }
  if (g.appendChild(Le), n.length === 0) {
    const q = document.createElement("div"), H = Number(e.rootCount || 0), me = Number(e.enabledRootCount || 0), de = Fp(e);
    q.className = "library-empty-content", (H === 0 || me === 0) && q.classList.add("library-first-run-guidance"), de && H > 0 && me > 0 && q.classList.add("library-filter-empty-state"), q.setAttribute("role", "status");
    const _e = document.createElement("h3"), Ve = document.createElement("p");
    Ve.className = "library-muted";
    const Ee = document.createElement("p");
    Ee.className = "library-empty-actions", H === 0 ? (_e.textContent = p("library", "Start with one Library root"), Ve.textContent = p("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Dn(Ee, s, "button primary", p("library", "Add a Library root")), Up(Ee, p("library", "Run a scan after saving a root"))) : me === 0 ? (_e.textContent = p("library", "No enabled Library roots"), Ve.textContent = p("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Dn(Ee, s, "button primary", p("library", "Open Library settings"))) : de ? (_e.textContent = p("library", "No matches for the current filters"), Ve.textContent = p("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Dn(Ee, kp(), "button secondary", p("library", "Clear search")), Dn(Ee, "?", "button primary", p("library", "Clear all filters"))) : (_e.textContent = p("library", "No catalogue items yet"), Ve.textContent = p("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Dn(Ee, s, "button primary", p("library", "Run a scan from settings"))), q.append(_e, Ve, Ee), g.appendChild(q);
  } else {
    const q = document.createElement("div");
    q.className = "library-cover-gallery";
    for (const H of n) {
      const me = document.createElement("article");
      me.className = "library-cover-card";
      const de = document.createElement("a");
      de.className = "library-cover-link", de.href = ee(H.openUrl || "#"), de.setAttribute("aria-label", `Read ${ee(H.title || "publication")}`);
      const _e = document.createElement("img");
      _e.className = "library-cover-image", _e.src = ee(H.coverUrl || ""), _e.alt = `Cover for ${ee(H.title || "publication")}`, _e.loading = "lazy", de.appendChild(_e);
      const Ve = ys(e), Ee = document.createElement("form");
      Ee.method = "post", Ee.action = ee(H.starUrl || ""), Ee.className = "library-cover-star-form", Ve && Ee.appendChild(Ve);
      const rt = document.createElement("input");
      rt.type = "hidden", rt.name = "returnTo", rt.value = "catalogue";
      const yt = document.createElement("input");
      yt.type = "hidden", yt.name = "starred", yt.value = H.starred ? "0" : "1";
      const u = document.createElement("button");
      u.type = "submit", u.className = H.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", u.setAttribute("aria-pressed", H.starred ? "true" : "false"), u.setAttribute("aria-label", H.starred ? p("library", "Unstar this publication") : p("library", "Star this publication")), u.title = H.starred ? p("library", "Unstar this publication") : p("library", "Star this publication"), u.textContent = H.starred ? "★" : "☆", Ee.append(rt, yt, u);
      const h = document.createElement("div");
      h.className = "library-cover-summary";
      const _ = document.createElement("h3");
      if (_.textContent = ee(H.title || "Untitled publication"), h.appendChild(_), H.creators) {
        const f = document.createElement("p");
        f.className = "library-creator", f.textContent = ee(H.creators), h.appendChild(f);
      }
      const w = document.createElement("dl");
      w.className = "library-cover-detail-list";
      const S = [
        ["Type", ee(H.publicationType || "other")],
        ["Format", H.extension ? Sl(H.extension) : ""],
        ["Shelf", H.shelf ? ee(H.shelf) : ""]
      ].filter(([, f]) => f !== "");
      for (const [f, O] of S) {
        const j = document.createElement("div");
        j.className = "library-cover-detail-chip";
        const V = document.createElement("dt");
        V.textContent = f;
        const X = document.createElement("dd");
        X.textContent = O, j.append(V, X), w.appendChild(j);
      }
      h.appendChild(w);
      const x = document.createElement("p"), R = document.createElement("a");
      R.href = ee(H.openUrl || "#"), R.textContent = p("library", "Read");
      const N = document.createElement("a");
      N.href = ee(H.filesUrl || "#"), N.textContent = p("library", "Show in Files");
      const v = document.createElement("a");
      v.href = ee(H.downloadUrl || "#"), v.textContent = p("library", "Download source");
      const d = document.createElement("a");
      d.href = ee(H.detailsUrl || "#"), d.textContent = p("library", "Details"), x.append(R, document.createTextNode(" · "), N, document.createTextNode(" · "), v, document.createTextNode(" · "), d), h.appendChild(x), me.append(de, Ee, h), q.appendChild(me);
    }
    g.appendChild(q);
  }
  return c.appendChild(g), c;
}
if (gr)
  try {
    lu(Lp, { state: lo }).mount(gr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), gr.replaceChildren($p(lo));
  }
//# sourceMappingURL=library-main.mjs.map
