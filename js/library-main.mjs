// @__NO_SIDE_EFFECTS__
function Ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, Tn = [], Pt = () => {
}, co = () => !1, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nr = (e) => e.startsWith("onUpdate:"), qe = Object.assign, Ps = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, ce = (e, t) => Hl.call(e, t), q = Array.isArray, Yt = (e) => Zn(e) === "[object Map]", un = (e) => Zn(e) === "[object Set]", di = (e) => Zn(e) === "[object Date]", Z = (e) => typeof e == "function", Se = (e) => typeof e == "string", It = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", uo = (e) => (fe(e) || Z(e)) && Z(e.then) && Z(e.catch), fo = Object.prototype.toString, Zn = (e) => fo.call(e), jl = (e) => Zn(e).slice(8, -1), po = (e) => Zn(e) === "[object Object]", Is = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jn = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $l = /-\w/g, _t = Pr(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, fn = Pr(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), ho = Pr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jr = Pr(
  (e) => e ? `on${ho(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), br = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ir = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pi;
const Lr = () => pi || (pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ls(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Se(r) ? ql(r) : Ls(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (Se(e) || fe(e))
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
function Sn(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const r = Sn(e[n]);
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
    n = Xt(e[r], t[r]);
  return n;
}
function hi(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Xt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Xt(e, t) {
  if (e === t) return !0;
  let n = di(e), r = di(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = It(e), r = It(t), n || r)
    return e === t;
  if (n = q(e), r = q(t), n || r)
    return n && r ? Yl(e, t) : !1;
  if (n = fe(e), r = fe(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Yt(e), r = Yt(t), n || r || (n = un(e), r = un(t), n || r))
      return n && r ? hi(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Xt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Xt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), T = (e) => Se(e) ? e : e == null ? "" : q(e) || fe(e) && (e.toString === fo || !Z(e.toString)) ? yo(e) ? T(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : Yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Zr(r, i) + " =>"] = s, n),
    {}
  )
} : un(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zr(n))
} : It(t) ? Zr(t) : fe(t) && !q(t) && !po(t) ? String(t) : t, Zr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    It(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let He;
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && He && (He.active ? (this.parent = He, this.index = (He.scopes || (He.scopes = [])).push(
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
      const n = He;
      try {
        return He = this, t();
      } finally {
        He = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = He, He = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (He === this)
        He = this.prevScope;
      else {
        let t = He;
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
  return He;
}
let ye;
const Qr = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, He && (He.active ? He.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qr.has(this) && (Qr.delete(this), this.trigger()));
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
        ks(t);
      this.deps = this.depsTail = void 0, mi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let vo = 0, $n, Vn;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vn, Vn = e;
    return;
  }
  e.next = $n, $n = e;
}
function Ms() {
  vo++;
}
function Ds() {
  if (--vo > 0)
    return;
  if (Vn) {
    let t = Vn;
    for (Vn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; $n; ) {
    let t = $n;
    for ($n = void 0; t; ) {
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
    r.version === -1 ? (r === n && (n = s), ks(r), Ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qn) || (e.globalVersion = qn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, r = vt;
  ye = e, vt = !0;
  try {
    So(e);
    const s = e.fn(e._value);
    (t.version === 0 || Nt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ye = n, vt = r, Eo(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ks(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vt = !0;
const xo = [];
function Ht() {
  xo.push(vt), vt = !1;
}
function jt() {
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
let qn = 0;
class ea {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
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
    this.version++, qn++, this.notify(t);
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
const _s = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), Kn = /* @__PURE__ */ Symbol(
  ""
);
function Be(e, t, n) {
  if (vt && ye) {
    let r = _s.get(e);
    r || _s.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Fs()), s.map = r, s.key = n), s.track();
  }
}
function kt(e, t, n, r, s, i) {
  const o = _s.get(e);
  if (!o) {
    qn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ms(), t === "clear")
    o.forEach(l);
  else {
    const c = q(e), v = c && Is(n);
    if (c && n === "length") {
      const m = Number(r);
      o.forEach((x, M) => {
        (M === "length" || M === Kn || !It(M) && M >= m) && l(x);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), v && l(o.get(Kn)), t) {
        case "add":
          c ? v && l(o.get("length")) : (l(o.get(ln)), Yt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(ln)), Yt(e) && l(o.get(vs)));
          break;
        case "set":
          Yt(e) && l(o.get(ln));
          break;
      }
  }
  Ds();
}
function yn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (Be(t, "iterate", Kn), /* @__PURE__ */ mt(e) ? t : t.map(Tt));
}
function Mr(e) {
  return Be(e = /* @__PURE__ */ ae(e), "iterate", Kn), e;
}
function Rt(e, t) {
  return /* @__PURE__ */ $t(e) ? Cn(/* @__PURE__ */ an(e) ? Tt(t) : t) : Tt(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, (e) => Rt(this, e));
  },
  concat(...e) {
    return yn(this).concat(
      ...e.map((t) => q(t) ? yn(t) : t)
    );
  },
  entries() {
    return es(this, "entries", (e) => (e[1] = Rt(this, e[1]), e));
  },
  every(e, t) {
    return Lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Lt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Rt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Lt(
      this,
      "find",
      e,
      t,
      (n) => Rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Lt(
      this,
      "findLast",
      e,
      t,
      (n) => Rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return yn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Lt(this, "map", e, t, void 0, arguments);
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
    return Lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
  },
  toReversed() {
    return yn(this).toReversed();
  },
  toSorted(e) {
    return yn(this).toSorted(e);
  },
  toSpliced(...e) {
    return yn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nn(this, "unshift", e);
  },
  values() {
    return es(this, "values", (e) => Rt(this, e));
  }
};
function es(e, t, n) {
  const r = Mr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ mt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const na = Array.prototype;
function Lt(e, t, n, r, s, i) {
  const o = Mr(e), l = o !== e && !/* @__PURE__ */ mt(e), c = o[t];
  if (c !== na[t]) {
    const x = c.apply(e, i);
    return l ? Tt(x) : x;
  }
  let v = n;
  o !== e && (l ? v = function(x, M) {
    return n.call(this, Rt(e, x), M, e);
  } : n.length > 2 && (v = function(x, M) {
    return n.call(this, x, M, e);
  }));
  const m = c.call(o, v, r);
  return l && s ? s(m) : m;
}
function bi(e, t, n, r) {
  const s = Mr(e), i = s !== e && !/* @__PURE__ */ mt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(v, m, x) {
    return l && (l = !1, v = Rt(e, v)), n.call(this, v, Rt(e, m), x, e);
  }) : n.length > 3 && (o = function(v, m, x) {
    return n.call(this, v, m, x, e);
  }));
  const c = s[t](o, ...r);
  return l ? Rt(e, c) : c;
}
function ts(e, t, n) {
  const r = /* @__PURE__ */ ae(e);
  Be(r, "iterate", Kn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ js(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), r[t](...n)) : s;
}
function Nn(e, t, n = []) {
  Ht(), Ms();
  const r = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Ds(), jt(), r;
}
const ra = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(It)
);
function sa(e) {
  It(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Ro {
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
    const o = q(t);
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
      /* @__PURE__ */ We(t) ? t : r
    );
    if ((It(n) ? wo.has(n) : ra(n)) || (s || Be(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ We(l)) {
      const c = o && Is(n) ? l : l.value;
      return s && fe(c) ? /* @__PURE__ */ Ss(c) : c;
    }
    return fe(l) ? s ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ sn(l) : l;
  }
}
class Oo extends Ro {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = q(t) && Is(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ $t(i);
      if (!/* @__PURE__ */ mt(r) && !/* @__PURE__ */ $t(r) && (i = /* @__PURE__ */ ae(i), r = /* @__PURE__ */ ae(r)), !o && /* @__PURE__ */ We(i) && !/* @__PURE__ */ We(r))
        return v || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ce(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ We(t) ? t : s
    );
    return t === /* @__PURE__ */ ae(s) && c && (l ? Nt(r, i) && kt(t, "set", n, r) : kt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && kt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!It(n) || !wo.has(n)) && Be(t, "has", n), r;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      q(t) ? "length" : ln
    ), Reflect.ownKeys(t);
  }
}
class ia extends Ro {
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
const oa = /* @__PURE__ */ new Oo(), la = /* @__PURE__ */ new ia(), aa = /* @__PURE__ */ new Oo(!0);
const Ts = (e) => e, cr = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ ae(s), o = Yt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, v = s[e](...r), m = n ? Ts : t ? Cn : Tt;
    return !t && Be(
      i,
      "iterate",
      c ? vs : ln
    ), qe(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: x, done: M } = v.next();
          return M ? { value: x, done: M } : {
            value: l ? [m(x[0]), m(x[1])] : m(x),
            done: M
          };
        }
      }
    );
  };
}
function ur(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ua(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      e || (Nt(s, l) && Be(o, "get", s), Be(o, "get", l));
      const { has: c } = cr(o), v = t ? Ts : e ? Cn : Tt;
      if (c.call(o, s))
        return v(i.get(s));
      if (c.call(o, l))
        return v(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Be(/* @__PURE__ */ ae(s), "iterate", ln), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ ae(i), l = /* @__PURE__ */ ae(s);
      return e || (Nt(s, l) && Be(o, "has", s), Be(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ae(l), v = t ? Ts : e ? Cn : Tt;
      return !e && Be(c, "iterate", ln), l.forEach((m, x) => s.call(i, v(m), v(x), o));
    }
  };
  return qe(
    n,
    e ? {
      add: ur("add"),
      set: ur("set"),
      delete: ur("delete"),
      clear: ur("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ ae(this), o = cr(i), l = /* @__PURE__ */ ae(s), c = !t && !/* @__PURE__ */ mt(s) && !/* @__PURE__ */ $t(s) ? l : s;
        return o.has.call(i, c) || Nt(s, c) && o.has.call(i, s) || Nt(l, c) && o.has.call(i, l) || (i.add(c), kt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ mt(i) && !/* @__PURE__ */ $t(i) && (i = /* @__PURE__ */ ae(i));
        const o = /* @__PURE__ */ ae(this), { has: l, get: c } = cr(o);
        let v = l.call(o, s);
        v || (s = /* @__PURE__ */ ae(s), v = l.call(o, s));
        const m = c.call(o, s);
        return o.set(s, i), v ? Nt(i, m) && kt(o, "set", s, i) : kt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ ae(this), { has: o, get: l } = cr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ ae(s), c = o.call(i, s)), l && l.call(i, s);
        const v = i.delete(s);
        return c && kt(i, "delete", s, void 0), v;
      },
      clear() {
        const s = /* @__PURE__ */ ae(this), i = s.size !== 0, o = s.clear();
        return i && kt(
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
    ce(n, s) && s in r ? n : r,
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
function sn(e) {
  return /* @__PURE__ */ $t(e) ? e : Hs(
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
function an(e) {
  return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ an(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function ya(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const Tt = (e) => fe(e) ? /* @__PURE__ */ sn(e) : e, Cn = (e) => fe(e) ? /* @__PURE__ */ Ss(e) : e;
// @__NO_SIDE_EFFECTS__
function We(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return _a(e, !1);
}
function _a(e, t) {
  return /* @__PURE__ */ We(e) ? e : new va(e, t);
}
class va {
  constructor(t, n) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ mt(t) || /* @__PURE__ */ $t(t);
    t = r ? t : /* @__PURE__ */ ae(t), Nt(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function A(e) {
  return /* @__PURE__ */ We(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : A(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ We(s) && !/* @__PURE__ */ We(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lo(e) {
  return /* @__PURE__ */ an(e) ? e : new Proxy(e, Ta);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
  return Z(e) ? r = e : (r = e.get, s = e.set), new Sa(r, s, n);
}
const fr = {}, vr = /* @__PURE__ */ new WeakMap();
let tn;
function Aa(e, t = !1, n = tn) {
  if (n) {
    let r = vr.get(n);
    r || vr.set(n, r = []), r.push(e);
  }
}
function xa(e, t, n = he) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, v = (k) => s ? k : /* @__PURE__ */ mt(k) || s === !1 || s === 0 ? Ft(k, 1) : Ft(k);
  let m, x, M, j, K = !1, $ = !1;
  if (/* @__PURE__ */ We(e) ? (x = () => e.value, K = /* @__PURE__ */ mt(e)) : /* @__PURE__ */ an(e) ? (x = () => v(e), K = !0) : q(e) ? ($ = !0, K = e.some((k) => /* @__PURE__ */ an(k) || /* @__PURE__ */ mt(k)), x = () => e.map((k) => {
    if (/* @__PURE__ */ We(k))
      return k.value;
    if (/* @__PURE__ */ an(k))
      return v(k);
    if (Z(k))
      return c ? c(k, 2) : k();
  })) : Z(e) ? t ? x = c ? () => c(e, 2) : e : x = () => {
    if (M) {
      Ht();
      try {
        M();
      } finally {
        jt();
      }
    }
    const k = tn;
    tn = m;
    try {
      return c ? c(e, 3, [j]) : e(j);
    } finally {
      tn = k;
    }
  } : x = Pt, t && s) {
    const k = x, ne = s === !0 ? 1 / 0 : s;
    x = () => Ft(k(), ne);
  }
  const Y = Zl(), z = () => {
    m.stop(), Y && Y.active && Ps(Y.effects, m);
  };
  if (i && t) {
    const k = t;
    t = (...ne) => {
      const Ee = k(...ne);
      return z(), Ee;
    };
  }
  let L = $ ? new Array(e.length).fill(fr) : fr;
  const W = (k) => {
    if (!(!(m.flags & 1) || !m.dirty && !k))
      if (t) {
        const ne = m.run();
        if (k || s || K || ($ ? ne.some((Ee, de) => Nt(Ee, L[de])) : Nt(ne, L))) {
          M && M();
          const Ee = tn;
          tn = m;
          try {
            const de = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              L === fr ? void 0 : $ && L[0] === fr ? [] : L,
              j
            ];
            L = ne, c ? c(t, 3, de) : (
              // @ts-expect-error
              t(...de)
            );
          } finally {
            tn = Ee;
          }
        }
      } else
        m.run();
  };
  return l && l(W), m = new _o(x), m.scheduler = o ? () => o(W, !1) : W, j = (k) => Aa(k, !1, m), M = m.onStop = () => {
    const k = vr.get(m);
    if (k) {
      if (c)
        c(k, 4);
      else
        for (const ne of k) ne();
      vr.delete(m);
    }
  }, t ? r ? W(!0) : L = m.run() : o ? o(W.bind(null, !0), !0) : m.run(), z.pause = m.pause.bind(m), z.resume = m.resume.bind(m), z.stop = z, z;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ We(e))
    Ft(e.value, t, n);
  else if (q(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (un(e) || Yt(e))
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
function Qn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Dr(s, t, n);
  }
}
function St(e, t, n, r) {
  if (Z(e)) {
    const s = Qn(e, t, n, r);
    return s && uo(s) && s.catch((i) => {
      Dr(i, t, n);
    }), s;
  }
  if (q(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(St(e[i], t, n, r));
    return s;
  }
}
function Dr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || he;
  if (t) {
    let l = t.parent;
    const c = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let x = 0; x < m.length; x++)
          if (m[x](e, c, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ht(), Qn(i, null, 10, [
        e,
        c,
        v
      ]), jt();
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
let wt = -1;
const En = [];
let Gt = null, _n = 0;
const Mo = /* @__PURE__ */ Promise.resolve();
let Tr = null;
function Do(e) {
  const t = Tr || Mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wa(e) {
  let t = wt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = et[r], i = Gn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function $s(e) {
  if (!(e.flags & 1)) {
    const t = Gn(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gn(n) ? et.push(e) : et.splice(wa(t), 0, e), e.flags |= 1, ko();
  }
}
function ko() {
  Tr || (Tr = Mo.then(Uo));
}
function Ra(e) {
  if (!q(e))
    Gt && e.id === -1 ? Gt.splice(_n + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      En.push(e[t]);
  ko();
}
function yi(e, t, n = wt + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fo(e) {
  if (En.length) {
    const t = [...new Set(En)].sort(
      (n, r) => Gn(n) - Gn(r)
    );
    if (En.length = 0, Gt) {
      for (let n = 0; n < t.length; n++)
        Gt.push(t[n]);
      return;
    }
    for (Gt = t, _n = 0; _n < Gt.length; _n++) {
      const n = Gt[_n];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Gt = null, _n = 0;
  }
}
const Gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uo(e) {
  try {
    for (wt = 0; wt < et.length; wt++) {
      const t = et[wt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wt < et.length; wt++) {
      const t = et[wt];
      t && (t.flags &= -2);
    }
    wt = -1, et.length = 0, Fo(), Tr = null, (et.length || En.length) && Uo();
  }
}
let ht = null, Ho = null;
function Sr(e) {
  const t = ht;
  return ht = e, Ho = e && e.type.__scopeId || null, t;
}
function Oa(e, t = ht, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ri(-1);
    const i = Sr(t), o = cn.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = cn.length; c > o; c--) fl();
      Sr(i), r._d && Ri(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Me(e, t) {
  if (ht === null)
    return e;
  const n = jr(ht), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = he] = t[s];
    i && (Z(i) && (i = {
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
function Zt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ht(), St(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), jt());
  }
}
function Na(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
  }
}
function yr(e, t, n = !1) {
  const r = Cc();
  if (r || An) {
    let s = An ? An._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => yr(Pa);
function ns(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = he) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = qe({}, n), c = t && r || !t && i !== "post";
  let v;
  if (Jn) {
    if (i === "sync") {
      const j = Ia();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!c) {
      const j = () => {
      };
      return j.stop = Pt, j.resume = Pt, j.pause = Pt, j;
    }
  }
  const m = tt;
  l.call = (j, K, $) => St(j, m, K, $);
  let x = !1;
  i === "post" ? l.scheduler = (j) => {
    it(j, m && m.suspense);
  } : i !== "sync" && (x = !0, l.scheduler = (j, K) => {
    K ? j() : $s(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), x && (j.flags |= 2, m && (j.id = m.uid, j.i = m));
  };
  const M = xa(e, t, l);
  return Jn && (v ? v.push(M) : c && M()), M;
}
function La(e, t, n) {
  const r = this.proxy, s = Se(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let i;
  Z(t) ? i = t : (i = t.handler, n = t);
  const o = er(this), l = jo(s, i.bind(r), n);
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
const Ma = /* @__PURE__ */ Symbol("_vte"), kr = (e) => e.__isTeleport, rs = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Vt) {
        t = n;
        break;
      }
  }
  return t;
}
function Vo(e) {
  if (!zs(e))
    return kr(e.type) && e.children ? Da(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function Vs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vs(
      kr(n.type) && Vo(n) || n,
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
const Er = /* @__PURE__ */ new WeakMap();
function zn(e, t, n, r, s = !1) {
  if (q(e)) {
    e.forEach(
      ($, Y) => zn(
        $,
        t && (q(t) ? t[Y] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (Bn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && zn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? jr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, v = t && t.r, m = l.refs === he ? l.refs = {} : l.refs, x = l.setupState, M = /* @__PURE__ */ ae(x), j = x === he ? co : ($) => gi(m, $) ? !1 : ce(M, $), K = ($, Y) => !(Y && gi(m, Y));
  if (v != null && v !== c) {
    if (_i(t), Se(v))
      m[v] = null, j(v) && (x[v] = null);
    else if (/* @__PURE__ */ We(v)) {
      const $ = t;
      K(v, $.k) && (v.value = null), $.k && (m[$.k] = null);
    }
  }
  if (Z(c))
    Qn(c, l, 12, [o, m]);
  else {
    const $ = Se(c), Y = /* @__PURE__ */ We(c);
    if ($ || Y) {
      const z = () => {
        if (e.f) {
          const L = $ ? j(c) ? x[c] : m[c] : K() || !e.k ? c.value : m[e.k];
          if (s)
            q(L) && Ps(L, i);
          else if (q(L))
            L.includes(i) || L.push(i);
          else if ($)
            m[c] = [i], j(c) && (x[c] = m[c]);
          else {
            const W = [i];
            K(c, e.k) && (c.value = W), e.k && (m[e.k] = W);
          }
        } else $ ? (m[c] = o, j(c) && (x[c] = o)) : Y && (K(c, e.k) && (c.value = o), e.k && (m[e.k] = o));
      };
      if (o) {
        const L = () => {
          z(), Er.delete(e);
        };
        L.id = -1, Er.set(e, L), it(L, n);
      } else
        _i(e), z();
    }
  }
}
function _i(e) {
  const t = Er.get(e);
  t && (t.flags |= 8, Er.delete(e));
}
Lr().requestIdleCallback;
Lr().cancelIdleCallback;
const Bn = (e) => !!e.type.__asyncLoader, zs = (e) => e.type.__isKeepAlive;
function ka(e, t) {
  Bo(e, "a", t);
}
function Fa(e, t) {
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
      Ht();
      const l = er(n), c = St(t, n, e, o);
      return l(), jt(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const zt = (e) => (t, n = tt) => {
  (!Jn || e === "sp") && Fr(e, (...r) => t(...r), n);
}, Ha = zt("bm"), Wo = zt("m"), ja = zt(
  "bu"
), $a = zt("u"), qo = zt(
  "bum"
), Ko = zt("um"), Va = zt(
  "sp"
), za = zt("rtg"), Ba = zt("rtc");
function Wa(e, t = tt) {
  Fr("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function Ce(e, t, n, r) {
  let s;
  const i = n, o = q(e);
  if (o || Se(e)) {
    const l = o && /* @__PURE__ */ an(e);
    let c = !1, v = !1;
    l && (c = !/* @__PURE__ */ mt(e), v = /* @__PURE__ */ $t(e), e = Mr(e)), s = new Array(e.length);
    for (let m = 0, x = e.length; m < x; m++)
      s[m] = t(
        c ? v ? Cn(Tt(e[m])) : Tt(e[m]) : e[m],
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
      for (let c = 0, v = l.length; c < v; c++) {
        const m = l[c];
        s[c] = t(e[m], m, c, i);
      }
    }
  else
    s = [];
  return s;
}
const Es = (e) => e ? ml(e) ? jr(e) : Es(e.parent) : null, Wn = (
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
), ss = (e, t) => e !== he && !e.__isScriptSetup && ce(e, t), Ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const M = o[t];
      if (M !== void 0)
        switch (M) {
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
        if (ss(r, t))
          return o[t] = 1, r[t];
        if (s !== he && ce(s, t))
          return o[t] = 2, s[t];
        if (ce(i, t))
          return o[t] = 3, i[t];
        if (n !== he && ce(n, t))
          return o[t] = 4, n[t];
        As && (o[t] = 0);
      }
    }
    const v = Wn[t];
    let m, x;
    if (v)
      return t === "$attrs" && Be(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== he && ce(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      x = c.config.globalProperties, ce(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ss(s, t) ? (s[t] = n, !0) : r !== he && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== he && l[0] !== "$" && ce(e, l) || ss(t, l) || ce(i, l) || ce(r, l) || ce(Wn, l) || ce(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vi(e) {
  return q(e) ? e.reduce(
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
    inject: v,
    // lifecycle
    created: m,
    beforeMount: x,
    mounted: M,
    beforeUpdate: j,
    updated: K,
    activated: $,
    deactivated: Y,
    beforeDestroy: z,
    beforeUnmount: L,
    destroyed: W,
    unmounted: k,
    render: ne,
    renderTracked: Ee,
    renderTriggered: de,
    errorCaptured: ke,
    serverPrefetch: ge,
    // public API
    expose: ve,
    inheritAttrs: je,
    // assets
    components: lt,
    directives: we,
    filters: ft
  } = t;
  if (v && Ya(v, r, null), o)
    for (const re in o) {
      const ee = o[re];
      Z(ee) && (r[re] = ee.bind(n));
    }
  if (s) {
    const re = s.call(n, n);
    fe(re) && (e.data = /* @__PURE__ */ sn(re));
  }
  if (As = !0, i)
    for (const re in i) {
      const ee = i[re], Ae = Z(ee) ? ee.bind(n, n) : Z(ee.get) ? ee.get.bind(n, n) : Pt, Ge = !Z(ee) && Z(ee.set) ? ee.set.bind(n) : Pt, $e = oe({
        get: Ae,
        set: Ge
      });
      Object.defineProperty(r, re, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (Te) => $e.value = Te
      });
    }
  if (l)
    for (const re in l)
      Go(l[re], r, n, re);
  if (c) {
    const re = Z(c) ? c.call(n) : c;
    Reflect.ownKeys(re).forEach((ee) => {
      Na(ee, re[ee]);
    });
  }
  m && Ti(m, e, "c");
  function ue(re, ee) {
    q(ee) ? ee.forEach((Ae) => re(Ae.bind(n))) : ee && re(ee.bind(n));
  }
  if (ue(Ha, x), ue(Wo, M), ue(ja, j), ue($a, K), ue(ka, $), ue(Fa, Y), ue(Wa, ke), ue(Ba, Ee), ue(za, de), ue(qo, L), ue(Ko, k), ue(Va, ge), q(ve))
    if (ve.length) {
      const re = e.exposed || (e.exposed = {});
      ve.forEach((ee) => {
        Object.defineProperty(re, ee, {
          get: () => n[ee],
          set: (Ae) => n[ee] = Ae,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ne && e.render === Pt && (e.render = ne), je != null && (e.inheritAttrs = je), lt && (e.components = lt), we && (e.directives = we), ge && zo(e);
}
function Ya(e, t, n = Pt) {
  q(e) && (e = xs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    fe(s) ? "default" in s ? i = yr(
      s.from || r,
      s.default,
      !0
    ) : i = yr(s.from || r) : i = yr(s), /* @__PURE__ */ We(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function Ti(e, t, n) {
  St(
    q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let s = r.includes(".") ? $o(n, r) : () => n[r];
  if (Se(e)) {
    const i = t[e];
    Z(i) && ns(s, i);
  } else if (Z(e))
    ns(s, e.bind(n));
  else if (fe(e))
    if (q(e))
      e.forEach((i) => Go(i, t, n, r));
    else {
      const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(i) && ns(s, i, e);
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
    (v) => Ar(c, v, o, !0)
  ), Ar(c, t, o)), fe(t) && i.set(t, c), c;
}
function Ar(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Ar(e, i, n, !0), s && s.forEach(
    (o) => Ar(e, o, n, !0)
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
    return qe(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return Fn(xs(e), xs(t));
}
function xs(e) {
  if (q(e)) {
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
  return e ? qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ei(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : qe(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qe(/* @__PURE__ */ Object.create(null), e);
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
    Z(r) || (r = qe({}, r)), s != null && !fe(s) && (s = null);
    const i = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const v = i.app = {
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
      use(m, ...x) {
        return o.has(m) || (m && Z(m.install) ? (o.add(m), m.install(v, ...x)) : Z(m) && (o.add(m), m(v, ...x))), v;
      },
      mixin(m) {
        return i.mixins.includes(m) || i.mixins.push(m), v;
      },
      component(m, x) {
        return x ? (i.components[m] = x, v) : i.components[m];
      },
      directive(m, x) {
        return x ? (i.directives[m] = x, v) : i.directives[m];
      },
      mount(m, x, M) {
        if (!c) {
          const j = v._ceVNode || Ut(r, s);
          return j.appContext = i, M === !0 ? M = "svg" : M === !1 && (M = void 0), e(j, m, M), c = !0, v._container = m, m.__vue_app__ = v, jr(j.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        c && (St(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(m, x) {
        return i.provides[m] = x, v;
      },
      runWithContext(m) {
        const x = An;
        An = v;
        try {
          return m();
        } finally {
          An = x;
        }
      }
    };
    return v;
  };
}
let An = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${fn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || he;
  let s = n;
  const i = t.startsWith("update:"), o = i && tc(r, t.slice(7));
  o && (o.trim && (s = n.map((m) => Se(m) ? m.trim() : m)), o.number && (s = s.map(Ir)));
  let l, c = r[l = Jr(t)] || // also try camelCase event handler (#2249)
  r[l = Jr(_t(t))];
  !c && i && (c = r[l = Jr(fn(t))]), c && St(
    c,
    e,
    6,
    s
  );
  const v = r[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, St(
      v,
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
  if (!Z(e)) {
    const c = (v) => {
      const m = Jo(v, t, !0);
      m && (l = !0, qe(o, m));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (fe(e) && r.set(e, null), null) : (q(i) ? i.forEach((c) => o[c] = null) : qe(o, i), fe(e) && r.set(e, o), o);
}
function Ur(e, t) {
  return !e || !Or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, fn(t)) || ce(e, t));
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
    render: v,
    renderCache: m,
    props: x,
    data: M,
    setupState: j,
    ctx: K,
    inheritAttrs: $
  } = e, Y = Sr(e);
  let z, L;
  try {
    if (n.shapeFlag & 4) {
      const k = s || r, ne = k;
      z = Ot(
        v.call(
          ne,
          k,
          m,
          x,
          j,
          M,
          K
        )
      ), L = l;
    } else {
      const k = t;
      z = Ot(
        k.length > 1 ? k(
          x,
          { attrs: l, slots: o, emit: c }
        ) : k(
          x,
          null
        )
      ), L = t.props ? l : sc(l);
    }
  } catch (k) {
    cn.length = 0, Dr(k, e, 1), z = Ut(Vt);
  }
  let W = z;
  if (L && $ !== !1) {
    const k = Object.keys(L), { shapeFlag: ne } = W;
    k.length && ne & 7 && (i && k.some(Nr) && (L = ic(
      L,
      i
    )), W = wn(W, L, !1, !0));
  }
  if (n.dirs && (W = wn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const k = kr(W.type) && Vo(W) || W;
    Vs(k, n.transition);
  }
  return z = W, Sr(Y), z;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ic = (e, t) => {
  const n = {};
  for (const r in e)
    (!Nr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, v = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? xi(r, o, v) : !!o;
    if (c & 8) {
      const m = t.dynamicProps;
      for (let x = 0; x < m.length; x++) {
        const M = m[x];
        if (Zo(o, r, M) && !Ur(v, M))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? xi(r, o, v) : !0 : !!o;
  return !1;
}
function xi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Zo(t, e, i) && !Ur(n, i))
      return !0;
  }
  return !1;
}
function Zo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && fe(r) && fe(s) ? !Xt(r, s) : r !== s;
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
  } = e, l = /* @__PURE__ */ ae(s), [c] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const m = e.vnode.dynamicProps;
      for (let x = 0; x < m.length; x++) {
        let M = m[x];
        if (Ur(e.emitsOptions, M))
          continue;
        const j = t[M];
        if (c)
          if (ce(i, M))
            j !== i[M] && (i[M] = j, v = !0);
          else {
            const K = _t(M);
            s[K] = Cs(
              c,
              l,
              K,
              j,
              e,
              !1
            );
          }
        else
          j !== i[M] && (i[M] = j, v = !0);
      }
    }
  } else {
    nl(e, t, s, i) && (v = !0);
    let m;
    for (const x in l)
      (!t || // for camelCase
      !ce(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = fn(x)) === x || !ce(t, m))) && (c ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[m] !== void 0) && (s[x] = Cs(
        c,
        l,
        x,
        void 0,
        e,
        !0
      )) : delete s[x]);
    if (i !== l)
      for (const x in i)
        (!t || !ce(t, x)) && (delete i[x], v = !0);
  }
  v && kt(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (jn(c))
        continue;
      const v = t[c];
      let m;
      s && ce(s, m = _t(c)) ? !i || !i.includes(m) ? n[m] = v : (l || (l = {}))[m] = v : Ur(e.emitsOptions, c) || (!(c in r) || v !== r[c]) && (r[c] = v, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ ae(n), v = l || he;
    for (let m = 0; m < i.length; m++) {
      const x = i[m];
      n[x] = Cs(
        s,
        c,
        x,
        v[x],
        e,
        !ce(v, x)
      );
    }
  }
  return o;
}
function Cs(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = ce(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Z(c)) {
        const { propsDefaults: v } = s;
        if (n in v)
          r = v[n];
        else {
          const m = er(s);
          r = v[n] = c.call(
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
    ] && (r === "" || r === fn(n)) && (r = !0));
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
  if (!Z(e)) {
    const m = (x) => {
      c = !0;
      const [M, j] = rl(x, t, !0);
      qe(o, M), j && l.push(...j);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !c)
    return fe(e) && r.set(e, Tn), Tn;
  if (q(i))
    for (let m = 0; m < i.length; m++) {
      const x = _t(i[m]);
      Ci(x) && (o[x] = he);
    }
  else if (i)
    for (const m in i) {
      const x = _t(m);
      if (Ci(x)) {
        const M = i[m], j = o[x] = q(M) || Z(M) ? { type: M } : qe({}, M), K = j.type;
        let $ = !1, Y = !0;
        if (q(K))
          for (let z = 0; z < K.length; ++z) {
            const L = K[z], W = Z(L) && L.name;
            if (W === "Boolean") {
              $ = !0;
              break;
            } else W === "String" && (Y = !1);
          }
        else
          $ = Z(K) && K.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = $, j[
          1
          /* shouldCastTrue */
        ] = Y, ($ || ce(j, "default")) && l.push(x);
      }
    }
  const v = [o, l];
  return fe(e) && r.set(e, v), v;
}
function Ci(e) {
  return e[0] !== "$" && !jn(e);
}
const Bs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ws = (e) => q(e) ? e.map(Ot) : [Ot(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Oa((...s) => Ws(t(...s)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Bs(s)) continue;
    const i = e[s];
    if (Z(i))
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
  let i = !0, o = he;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ol(s, t, n) : (i = !t.$stable, sl(t, s)), o = t;
  } else t && (il(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Bs(l) && o[l] == null && delete s[l];
}, it = gc;
function hc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = Lr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: v,
    setElementText: m,
    parentNode: x,
    nextSibling: M,
    setScopeId: j = Pt,
    insertStaticContent: K
  } = e, $ = (f, p, _, S = null, b = null, E = null, N = void 0, O = null, P = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Pn(f, p) && (S = dt(f), Te(f, b, E, !0), f = null), p.patchFlag === -2 && (P = !1, p.dynamicChildren = null);
    const { type: C, ref: w, shapeFlag: y } = p;
    switch (C) {
      case Hr:
        Y(f, p, _, S);
        break;
      case Vt:
        z(f, p, _, S);
        break;
      case os:
        f == null && L(p, _, S, N);
        break;
      case se:
        lt(
          f,
          p,
          _,
          S,
          b,
          E,
          N,
          O,
          P
        );
        break;
      default:
        y & 1 ? ne(
          f,
          p,
          _,
          S,
          b,
          E,
          N,
          O,
          P
        ) : y & 6 ? we(
          f,
          p,
          _,
          S,
          b,
          E,
          N,
          O,
          P
        ) : (y & 64 || y & 128) && C.process(
          f,
          p,
          _,
          S,
          b,
          E,
          N,
          O,
          P,
          Ye
        );
    }
    w != null && b ? zn(w, f && f.ref, E, p || f, !p) : w == null && f && f.ref != null && zn(f.ref, null, E, f, !0);
  }, Y = (f, p, _, S) => {
    if (f == null)
      r(
        p.el = l(p.children),
        _,
        S
      );
    else {
      const b = p.el = f.el;
      p.children !== f.children && v(b, p.children);
    }
  }, z = (f, p, _, S) => {
    f == null ? r(
      p.el = c(p.children || ""),
      _,
      S
    ) : p.el = f.el;
  }, L = (f, p, _, S) => {
    [f.el, f.anchor] = K(
      f.children,
      p,
      _,
      S,
      f.el,
      f.anchor
    );
  }, W = ({ el: f, anchor: p }, _, S) => {
    let b;
    for (; f && f !== p; )
      b = M(f), r(f, _, S), f = b;
    r(p, _, S);
  }, k = ({ el: f, anchor: p }) => {
    let _;
    for (; f && f !== p; )
      _ = M(f), s(f), f = _;
    s(p);
  }, ne = (f, p, _, S, b, E, N, O, P) => {
    if (p.type === "svg" ? N = "svg" : p.type === "math" && (N = "mathml"), f == null)
      Ee(
        p,
        _,
        S,
        b,
        E,
        N,
        O,
        P
      );
    else {
      const C = f.el && f.el._isVueCE ? f.el : null;
      try {
        C && C._beginPatch(), ge(
          f,
          p,
          b,
          E,
          N,
          O,
          P
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Ee = (f, p, _, S, b, E, N, O) => {
    let P, C;
    const { props: w, shapeFlag: y, transition: u, dirs: D } = f;
    if (P = f.el = o(
      f.type,
      E,
      w && w.is,
      w
    ), y & 8 ? m(P, f.children) : y & 16 && ke(
      f.children,
      P,
      null,
      S,
      b,
      is(f, E),
      N,
      O
    ), D && Zt(f, null, S, "created"), de(P, f, f.scopeId, N, S), w) {
      for (const X in w)
        X !== "value" && !jn(X) && i(P, X, null, w[X], E, S);
      "value" in w && i(P, "value", null, w.value, E), (C = w.onVnodeBeforeMount) && Ct(C, S, f);
    }
    D && Zt(f, null, S, "beforeMount");
    const B = bc(b, u);
    B && u.beforeEnter(P), r(P, p, _), ((C = w && w.onVnodeMounted) || B || D) && it(() => {
      C && Ct(C, S, f), B && u.enter(P), D && Zt(f, null, S, "mounted");
    }, b);
  }, de = (f, p, _, S, b) => {
    if (_ && j(f, _), S)
      for (let E = 0; E < S.length; E++)
        j(f, S[E]);
    if (b) {
      let E = b.subTree;
      if (p === E || ul(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const N = b.vnode;
        de(
          f,
          N,
          N.scopeId,
          N.slotScopeIds,
          b.parent
        );
      }
    }
  }, ke = (f, p, _, S, b, E, N, O, P = 0) => {
    for (let C = P; C < f.length; C++) {
      const w = f[C] = O ? Dt(f[C]) : Ot(f[C]);
      $(
        null,
        w,
        p,
        _,
        S,
        b,
        E,
        N,
        O
      );
    }
  }, ge = (f, p, _, S, b, E, N) => {
    const O = p.el = f.el;
    let { patchFlag: P, dynamicChildren: C, dirs: w } = p;
    P |= f.patchFlag & 16;
    const y = f.props || he, u = p.props || he;
    let D;
    if (_ && Qt(_, !1), (D = u.onVnodeBeforeUpdate) && Ct(D, _, p, f), w && Zt(p, f, _, "beforeUpdate"), _ && Qt(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!f.dynamicChildren || f.dynamicChildren.length !== C.length) && (P = 0, N = !1, C = null), (y.innerHTML && u.innerHTML == null || y.textContent && u.textContent == null) && m(O, ""), C ? ve(
      f.dynamicChildren,
      C,
      O,
      _,
      S,
      is(p, b),
      E
    ) : N || ee(
      f,
      p,
      O,
      null,
      _,
      S,
      is(p, b),
      E,
      !1
    ), P > 0) {
      if (P & 16)
        je(O, y, u, _, b);
      else if (P & 2 && y.class !== u.class && i(O, "class", null, u.class, b), P & 4 && i(O, "style", y.style, u.style, b), P & 8) {
        const B = p.dynamicProps;
        for (let X = 0; X < B.length; X++) {
          const te = B[X], pe = y[te], me = u[te];
          (me !== pe || te === "value") && i(O, te, pe, me, b, _);
        }
      }
      P & 1 && f.children !== p.children && m(O, p.children);
    } else !N && C == null && je(O, y, u, _, b);
    ((D = u.onVnodeUpdated) || w) && it(() => {
      D && Ct(D, _, p, f), w && Zt(p, f, _, "updated");
    }, S);
  }, ve = (f, p, _, S, b, E, N) => {
    for (let O = 0; O < p.length; O++) {
      const P = f[O], C = p[O], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(P, C) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? x(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      $(
        P,
        C,
        w,
        null,
        S,
        b,
        E,
        N,
        !0
      );
    }
  }, je = (f, p, _, S, b) => {
    if (p !== _) {
      if (p !== he)
        for (const E in p)
          !jn(E) && !(E in _) && i(
            f,
            E,
            p[E],
            null,
            b,
            S
          );
      for (const E in _) {
        if (jn(E)) continue;
        const N = _[E], O = p[E];
        N !== O && E !== "value" && i(f, E, O, N, b, S);
      }
      "value" in _ && i(f, "value", p.value, _.value, b);
    }
  }, lt = (f, p, _, S, b, E, N, O, P) => {
    const C = p.el = f ? f.el : l(""), w = p.anchor = f ? f.anchor : l("");
    let { patchFlag: y, dynamicChildren: u, slotScopeIds: D } = p;
    D && (O = O ? O.concat(D) : D), f == null ? (r(C, _, S), r(w, _, S), ke(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      w,
      b,
      E,
      N,
      O,
      P
    )) : y > 0 && y & 64 && u && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === u.length ? (ve(
      f.dynamicChildren,
      u,
      _,
      b,
      E,
      N,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || b && p === b.subTree) && ll(
      f,
      p,
      !0
      /* shallow */
    )) : ee(
      f,
      p,
      _,
      w,
      b,
      E,
      N,
      O,
      P
    );
  }, we = (f, p, _, S, b, E, N, O, P) => {
    p.slotScopeIds = O, f == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      _,
      S,
      N,
      P
    ) : ft(
      p,
      _,
      S,
      b,
      E,
      N,
      P
    ) : Ke(f, p, P);
  }, ft = (f, p, _, S, b, E, N) => {
    const O = f.component = xc(
      f,
      S,
      b
    );
    if (zs(f) && (O.ctx.renderer = Ye), wc(O, !1, N), O.asyncDep) {
      if (b && b.registerDep(O, ue, N), !f.el) {
        const P = O.subTree = Ut(Vt);
        z(null, P, p, _), f.placeholder = P.el;
      }
    } else
      ue(
        O,
        f,
        p,
        _,
        b,
        E,
        N
      );
  }, Ke = (f, p, _) => {
    const S = p.component = f.component;
    if (oc(f, p, _))
      if (S.asyncDep && !S.asyncResolved) {
        re(S, p, _);
        return;
      } else
        S.next = p, S.update();
    else
      p.el = f.el, S.vnode = p;
  }, ue = (f, p, _, S, b, E, N) => {
    const O = () => {
      if (f.isMounted) {
        let { next: y, bu: u, u: D, parent: B, vnode: X } = f;
        {
          const Le = al(f);
          if (Le) {
            y && (y.el = X.el, re(f, y, N)), Le.asyncDep.then(() => {
              it(() => {
                f.isUnmounted || C();
              }, b);
            });
            return;
          }
        }
        let te = y, pe;
        Qt(f, !1), y ? (y.el = X.el, re(f, y, N)) : y = X, u && br(u), (pe = y.props && y.props.onVnodeBeforeUpdate) && Ct(pe, B, y, X), Qt(f, !0);
        const me = Ai(f), Ne = f.subTree;
        f.subTree = me, $(
          Ne,
          me,
          // parent may have changed if it's in a teleport
          x(Ne.el),
          // anchor may have changed if it's in a fragment
          dt(Ne),
          f,
          b,
          E
        ), y.el = me.el, te === null && lc(f, me.el), D && it(D, b), (pe = y.props && y.props.onVnodeUpdated) && it(
          () => Ct(pe, B, y, X),
          b
        );
      } else {
        let y;
        const { el: u, props: D } = p, { bm: B, m: X, parent: te, root: pe, type: me } = f, Ne = Bn(p);
        Qt(f, !1), B && br(B), !Ne && (y = D && D.onVnodeBeforeMount) && Ct(y, te, p), Qt(f, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            me,
            f.parent ? f.parent.type : void 0
          );
          const Le = f.subTree = Ai(f);
          $(
            null,
            Le,
            _,
            S,
            f,
            b,
            E
          ), p.el = Le.el;
        }
        if (X && it(X, b), !Ne && (y = D && D.onVnodeMounted)) {
          const Le = p;
          it(
            () => Ct(y, te, Le),
            b
          );
        }
        (p.shapeFlag & 256 || te && Bn(te.vnode) && te.vnode.shapeFlag & 256) && f.a && it(f.a, b), f.isMounted = !0, p = _ = S = null;
      }
    };
    f.scope.on();
    const P = f.effect = new _o(O);
    f.scope.off();
    const C = f.update = P.run.bind(P), w = f.job = P.runIfDirty.bind(P);
    w.i = f, w.id = f.uid, P.scheduler = () => $s(w), Qt(f, !0), C();
  }, re = (f, p, _) => {
    p.component = f;
    const S = f.vnode.props;
    f.vnode = p, f.next = null, cc(f, p.props, S, _), pc(f, p.children, _), Ht(), yi(f), jt();
  }, ee = (f, p, _, S, b, E, N, O, P = !1) => {
    const C = f && f.children, w = f ? f.shapeFlag : 0, y = p.children, { patchFlag: u, shapeFlag: D } = p;
    if (u > 0) {
      if (u & 128) {
        Ge(
          C,
          y,
          _,
          S,
          b,
          E,
          N,
          O,
          P
        );
        return;
      } else if (u & 256) {
        Ae(
          C,
          y,
          _,
          S,
          b,
          E,
          N,
          O,
          P
        );
        return;
      }
    }
    D & 8 ? (w & 16 && nt(C, b, E), y !== C && m(_, y)) : w & 16 ? D & 16 ? Ge(
      C,
      y,
      _,
      S,
      b,
      E,
      N,
      O,
      P
    ) : nt(C, b, E, !0) : (w & 8 && m(_, ""), D & 16 && ke(
      y,
      _,
      S,
      b,
      E,
      N,
      O,
      P
    ));
  }, Ae = (f, p, _, S, b, E, N, O, P) => {
    f = f || Tn, p = p || Tn;
    const C = f.length, w = p.length, y = Math.min(C, w);
    let u;
    for (u = 0; u < y; u++) {
      const D = p[u] = P ? Dt(p[u]) : Ot(p[u]);
      $(
        f[u],
        D,
        _,
        null,
        b,
        E,
        N,
        O,
        P
      );
    }
    C > w ? nt(
      f,
      b,
      E,
      !0,
      !1,
      y
    ) : ke(
      p,
      _,
      S,
      b,
      E,
      N,
      O,
      P,
      y
    );
  }, Ge = (f, p, _, S, b, E, N, O, P) => {
    let C = 0;
    const w = p.length;
    let y = f.length - 1, u = w - 1;
    for (; C <= y && C <= u; ) {
      const D = f[C], B = p[C] = P ? Dt(p[C]) : Ot(p[C]);
      if (Pn(D, B))
        $(
          D,
          B,
          _,
          null,
          b,
          E,
          N,
          O,
          P
        );
      else
        break;
      C++;
    }
    for (; C <= y && C <= u; ) {
      const D = f[y], B = p[u] = P ? Dt(p[u]) : Ot(p[u]);
      if (Pn(D, B))
        $(
          D,
          B,
          _,
          null,
          b,
          E,
          N,
          O,
          P
        );
      else
        break;
      y--, u--;
    }
    if (C > y) {
      if (C <= u) {
        const D = u + 1, B = D < w ? p[D].el : S;
        for (; C <= u; )
          $(
            null,
            p[C] = P ? Dt(p[C]) : Ot(p[C]),
            _,
            B,
            b,
            E,
            N,
            O,
            P
          ), C++;
      }
    } else if (C > u)
      for (; C <= y; )
        Te(f[C], b, E, !0), C++;
    else {
      const D = C, B = C, X = /* @__PURE__ */ new Map();
      for (C = B; C <= u; C++) {
        const Re = p[C] = P ? Dt(p[C]) : Ot(p[C]);
        Re.key != null && X.set(Re.key, C);
      }
      let te, pe = 0;
      const me = u - B + 1;
      let Ne = !1, Le = 0;
      const Ve = new Array(me);
      for (C = 0; C < me; C++) Ve[C] = 0;
      for (C = D; C <= y; C++) {
        const Re = f[C];
        if (pe >= me) {
          Te(Re, b, E, !0);
          continue;
        }
        let Ue;
        if (Re.key != null)
          Ue = X.get(Re.key);
        else
          for (te = B; te <= u; te++)
            if (Ve[te - B] === 0 && Pn(Re, p[te])) {
              Ue = te;
              break;
            }
        Ue === void 0 ? Te(Re, b, E, !0) : (Ve[Ue - B] = C + 1, Ue >= Le ? Le = Ue : Ne = !0, $(
          Re,
          p[Ue],
          _,
          null,
          b,
          E,
          N,
          O,
          P
        ), pe++);
      }
      const Xe = Ne ? yc(Ve) : Tn;
      for (te = Xe.length - 1, C = me - 1; C >= 0; C--) {
        const Re = B + C, Ue = p[Re], Bt = p[Re + 1], Wt = Re + 1 < w ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bt.el || cl(Bt)
        ) : S;
        Ve[C] === 0 ? $(
          null,
          Ue,
          _,
          Wt,
          b,
          E,
          N,
          O,
          P
        ) : Ne && (te < 0 || C !== Xe[te] ? $e(Ue, _, Wt, 2) : te--);
      }
    }
  }, $e = (f, p, _, S, b = null) => {
    const { el: E, type: N, transition: O, children: P, shapeFlag: C } = f;
    if (C & 6) {
      $e(f.component.subTree, p, _, S);
      return;
    }
    if (C & 128) {
      f.suspense.move(p, _, S);
      return;
    }
    if (C & 64) {
      N.move(f, p, _, Ye);
      return;
    }
    if (N === se) {
      r(E, p, _);
      for (let y = 0; y < P.length; y++)
        $e(P[y], p, _, S);
      r(f.anchor, p, _);
      return;
    }
    if (N === os) {
      W(f, p, _);
      return;
    }
    if (S !== 2 && C & 1 && O)
      if (S === 0)
        O.persisted && !E[rs] ? r(E, p, _) : (O.beforeEnter(E), r(E, p, _), it(() => O.enter(E), b));
      else {
        const { leave: y, delayLeave: u, afterLeave: D } = O, B = () => {
          f.ctx.isUnmounted ? s(E) : r(E, p, _);
        }, X = () => {
          const te = E._isLeaving || !!E[rs];
          E._isLeaving && E[rs](
            !0
            /* cancelled */
          ), O.persisted && !te ? B() : y(E, () => {
            B(), D && D();
          });
        };
        u ? u(E, B, X) : X();
      }
    else
      r(E, p, _);
  }, Te = (f, p, _, S = !1, b = !1) => {
    const {
      type: E,
      props: N,
      ref: O,
      children: P,
      dynamicChildren: C,
      shapeFlag: w,
      patchFlag: y,
      dirs: u,
      cacheIndex: D,
      memo: B
    } = f;
    if (y === -2 && (b = !1), O != null && (Ht(), zn(O, null, _, f, !0), jt()), D != null && (p.renderCache[D] = void 0), w & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const X = w & 1 && u, te = !Bn(f);
    let pe;
    if (te && (pe = N && N.onVnodeBeforeUnmount) && Ct(pe, p, f), w & 6)
      Et(f.component, _, S);
    else {
      if (w & 128) {
        f.suspense.unmount(_, S);
        return;
      }
      X && Zt(f, null, p, "beforeUnmount"), w & 64 ? f.type.remove(
        f,
        p,
        _,
        Ye,
        S
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== se || y > 0 && y & 64) ? nt(
        C,
        p,
        _,
        !1,
        !0
      ) : (E === se && y & 384 || !b && w & 16) && nt(P, p, _), S && bt(f);
    }
    const me = B != null && D == null;
    (te && (pe = N && N.onVnodeUnmounted) || X || me) && it(() => {
      pe && Ct(pe, p, f), X && Zt(f, null, p, "unmounted"), me && (f.el = null);
    }, _);
  }, bt = (f) => {
    const { type: p, el: _, anchor: S, transition: b } = f;
    if (p === se) {
      Q(_, S);
      return;
    }
    if (p === os) {
      k(f);
      return;
    }
    const E = () => {
      s(_), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (f.shapeFlag & 1 && b && !b.persisted) {
      const { leave: N, delayLeave: O } = b, P = () => N(_, E);
      O ? O(f.el, E, P) : P();
    } else
      E();
  }, Q = (f, p) => {
    let _;
    for (; f !== p; )
      _ = M(f), s(f), f = _;
    s(p);
  }, Et = (f, p, _) => {
    const { bum: S, scope: b, job: E, subTree: N, um: O, m: P, a: C } = f;
    wi(P), wi(C), S && br(S), b.stop(), E && (E.flags |= 8, Te(N, f, p, _)), O && it(O, p), it(() => {
      f.isUnmounted = !0;
    }, p);
  }, nt = (f, p, _, S = !1, b = !1, E = 0) => {
    for (let N = E; N < f.length; N++)
      Te(f[N], p, _, S, b);
  }, dt = (f) => {
    if (f.shapeFlag & 6)
      return dt(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = M(f.anchor || f.el), _ = p && p[Ma];
    return _ ? M(_) : p;
  };
  let Fe = !1;
  const yt = (f, p, _) => {
    let S;
    f == null ? p._vnode && (Te(p._vnode, null, null, !0), S = p._vnode.component) : $(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = f, Fe || (Fe = !0, yi(S), Fo(), Fe = !1);
  }, Ye = {
    p: $,
    um: Te,
    m: $e,
    r: bt,
    mt: ft,
    mc: ke,
    pc: ee,
    pbc: ve,
    n: dt,
    o: e
  };
  return {
    render: yt,
    hydrate: void 0,
    createApp: ec(yt)
  };
}
function is({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ll(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (q(r) && q(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Dt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && ll(o, l)), l.type === Hr && (l.patchFlag === -1 && (l = s[i] = Dt(l)), l.el = o.el), l.type === Vt && !l.el && (l.el = o.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const v = e[r];
    if (v !== 0) {
      if (s = n[n.length - 1], e[s] < v) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < v ? i = l + 1 : o = l;
      v < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
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
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Ra(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), Hr = /* @__PURE__ */ Symbol.for("v-txt"), Vt = /* @__PURE__ */ Symbol.for("v-cmt"), os = /* @__PURE__ */ Symbol.for("v-stc"), cn = [];
let ut = null;
function F(e = !1) {
  cn.push(ut = e ? null : []);
}
function fl() {
  cn.pop(), ut = cn[cn.length - 1] || null;
}
let Yn = 1;
function Ri(e, t = !1) {
  Yn += e, e < 0 && ut && t && (ut.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = Yn > 0 ? ut || Tn : null, fl(), Yn > 0 && ut && ut.push(e), e;
}
function H(e, t, n, r, s, i) {
  return dl(
    h(
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
    Ut(
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
const hl = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ We(e) || Z(e) ? { i: ht, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, r = 0, s = null, i = e === se ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && gr(t),
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
    ctx: ht
  };
  return l ? (xr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= Se(n) ? 8 : 16), Yn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ut.push(c), c;
}
const Ut = vc;
function vc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === qa) && (e = Vt), pl(e)) {
    const l = wn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xr(l, n), Yn > 0 && !i && ut && (l.shapeFlag & 6 ? ut[ut.indexOf(e)] = l : ut.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: c } = t;
    l && !Se(l) && (t.class = Sn(l)), fe(c) && (/* @__PURE__ */ js(c) && !q(c) && (c = qe({}, c)), t.style = Ls(c));
  }
  const o = Se(e) ? 1 : ul(e) ? 128 : kr(e) ? 64 : fe(e) ? 4 : Z(e) ? 2 : 0;
  return h(
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
  return e ? /* @__PURE__ */ js(e) || tl(e) ? qe({}, e) : e : null;
}
function wn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, v = t ? Sc(s || {}, t) : s, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && hl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? q(i) ? i.concat(gr(t)) : [i, gr(t)] : gr(t)
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
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && wn(e.ssContent),
    ssFallback: e.ssFallback && wn(e.ssFallback),
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
  return Ut(Hr, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (F(), _c(Vt, null, e)) : Ut(Vt, null, e);
}
function Ot(e) {
  return e == null || typeof e == "boolean" ? Ut(Vt) : q(e) ? Ut(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pl(e) ? Dt(e) : Ut(Hr, null, String(e));
}
function Dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wn(e);
}
function xr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tl(t) ? t._ctx = ht : s === 3 && ht && (ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (r & 65) {
      xr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ht }, n = 32;
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
        t.class !== r.class && (t.class = Sn([t.class, r.class]));
      else if (s === "style")
        t.style = Ls([t.style, r.style]);
      else if (Or(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(q(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Ct(e, t, n, r = null) {
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
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
const Cc = () => tt || ht;
let Cr, Xn;
{
  const e = Lr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Cr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => tt = n
  ), Xn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jn = n
  );
}
const er = (e) => {
  const t = tt;
  return Cr(e), e.scope.on(), () => {
    e.scope.off(), Cr(t);
  };
}, Oi = () => {
  tt && tt.scope.off(), Cr(null);
};
function ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Jn = !1;
function wc(e, t = !1, n = !1) {
  t && Xn(t);
  const { props: r, children: s } = e.vnode, i = ml(e);
  ac(e, r, i, t), dc(e, s, n || t);
  const o = i ? Rc(e, t) : void 0;
  return t && Xn(!1), o;
}
function Rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ka);
  const { setup: r } = n;
  if (r) {
    Ht();
    const s = e.setupContext = r.length > 1 ? Nc(e) : null, i = er(e), o = Qn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = uo(o);
    if (jt(), i(), (l || e.sp) && !Bn(e) && zo(e), l) {
      if (o.then(Oi, Oi), t)
        return o.then((c) => {
          Xn(!0);
          try {
            Ni(e, c, t);
          } finally {
            Xn(!1);
          }
        }).catch((c) => {
          Dr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ni(e, o);
  } else
    bl(e);
}
function Ni(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Lo(t)), bl(e);
}
function bl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Pt);
  {
    const s = er(e);
    Ht();
    try {
      Ga(e);
    } finally {
      jt(), s();
    }
  }
}
const Oc = {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lo(ya(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Wn)
        return Wn[n](e);
    },
    has(t, n) {
      return n in t || n in Wn;
    }
  })) : e.proxy;
}
function Pc(e) {
  return Z(e) && "__vccOpts" in e;
}
const oe = (e, t) => /* @__PURE__ */ Ea(e, t, Jn), Ic = "3.5.42";
let ws;
const Pi = typeof window < "u" && window.trustedTypes;
if (Pi)
  try {
    ws = /* @__PURE__ */ Pi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yl = ws ? (e) => ws.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Mt = typeof document < "u" ? document : null, Ii = Mt && /* @__PURE__ */ Mt.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Mt.createElementNS(Lc, e) : t === "mathml" ? Mt.createElementNS(Mc, e) : n ? Mt.createElement(e, { is: n }) : Mt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Mt.createTextNode(e),
  createComment: (e) => Mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Mt.querySelector(e),
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
}, kc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[kc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Hc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const r = e.style, s = Se(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (Se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Un(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Un(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? zc(
        e,
        o,
        !Se(t) && t ? t[o] : void 0,
        l
      ) || Un(r, o, l) : Un(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Hc];
      o && (n += ";" + o), r.cssText = n, i = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = i ? r.display : "", e[Uc] && (r.display = "none"));
}
const dr = /\s*!important$/;
function Un(e, t, n) {
  if (q(n))
    n.forEach((r) => Un(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    dr.test(n) ? e.setProperty(t, n.replace(dr, ""), "important") : e.setProperty(t, n);
  else {
    const r = Vc(e, t);
    dr.test(n) ? e.setProperty(
      fn(r),
      n.replace(dr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], ls = {};
function Vc(e, t) {
  const n = ls[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return ls[t] = r;
  r = ho(r);
  for (let s = 0; s < Mi.length; s++) {
    const i = Mi[s] + r;
    if (i in e)
      return ls[t] = i;
  }
  return t;
}
function zc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(r) && n === r;
}
const Di = "http://www.w3.org/1999/xlink";
function ki(e, t, n, r, s, i = Gl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Di, t.slice(6, t.length)) : e.setAttributeNS(Di, t, n) : n == null || i && !bo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : It(n) ? String(n) : n
  );
}
function Fi(e, t, n, r, s) {
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
function rn(e, t, n, r) {
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
      const v = i[t] = Jc(
        r,
        s
      );
      rn(e, l, v, c);
    } else o && (Bc(e, l, o, c), i[t] = void 0);
  }
}
const qc = /(Once|Passive|Capture)$/, Kc = /^on:?(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t, n;
  for (; (n = e.match(qc)) && !Kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : fn(e.slice(2)), t];
}
let as = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Xc = () => as || (Yc.then(() => as = 0), as = Date.now());
function Jc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (q(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const v = o[c];
        v && St(
          v,
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
  t === "class" ? Fc(e, r, o) : t === "style" ? $c(e, n, r) : Or(t) ? Nr(t) || Wc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, o)) ? (Fi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ki(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(r))) ? Fi(e, _t(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ki(e, t, r, o));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Hi(t) && Se(n) ? !1 : t in e;
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
const wr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => br(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const on = /* @__PURE__ */ Symbol("_assign"), pr = /* @__PURE__ */ Symbol("_initialValue");
function cs(e, t, n) {
  return t && (e = e.trim()), n && (e = Ir(e)), e;
}
const us = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[pr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[pr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[on] = wr(s);
    const i = r || s.props && s.props.type === "number";
    rn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[on](cs(e.value, n, i));
    }), (n || i) && rn(e, "change", () => {
      e.value = cs(e.value, n, i);
    }), t || (rn(e, "compositionstart", tu), rn(e, "compositionend", ji), rn(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[pr];
    delete e[pr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[on](cs(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[on] = wr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ir(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Ze = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, rn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Ir(Rr(c)) : Rr(c)
      ), i = e.multiple, o = i ? un(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? q(o) ? s.slice() : s : o
      ];
      try {
        e[on](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[on] = wr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $i(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[on] = wr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !nu(t, n[1], n[0])) && $i(e, t);
  }
};
function nu(e, t, n) {
  if (!n || q(e)) return Xt(e, t);
  if (un(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function $i(e, t) {
  const n = e.multiple, r = q(t);
  if (!(n && !r && !un(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Rr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((v) => String(v) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Xt(Rr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Rr(e) {
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
}, hr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = su[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, iu = /* @__PURE__ */ qe({ patchProp: Zc }, Dc);
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
    !Z(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
  return Se(e) ? document.querySelector(e) : e;
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
    var r, s, i, o, l = [], c = !0, v = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (m) {
      v = !0, s = m;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw s;
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
let Ie = Object.freeze, De = Object.seal, vn = Object.create, _l = typeof Reflect < "u" && Reflect, Rs = _l.apply, Os = _l.construct;
Ie || (Ie = function(t) {
  return t;
});
De || (De = function(t) {
  return t;
});
Rs || (Rs = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
Os || (Os = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const nn = Oe(Array.prototype.forEach), _u = Oe(Array.prototype.lastIndexOf), Wi = Oe(Array.prototype.pop), In = Oe(Array.prototype.push), vu = Oe(Array.prototype.splice), xn = Array.isArray, Hn = Oe(String.prototype.toLowerCase), fs = Oe(String.prototype.toString), qi = Oe(String.prototype.match), Ln = Oe(String.prototype.replace), Ki = Oe(String.prototype.indexOf), Tu = Oe(String.prototype.trim), Su = Oe(Number.prototype.toString), Eu = Oe(Boolean.prototype.toString), Gi = typeof BigInt > "u" ? null : Oe(BigInt.prototype.toString), Yi = typeof Symbol > "u" ? null : Oe(Symbol.prototype.toString), ot = Oe(Object.prototype.hasOwnProperty), Mn = Oe(Object.prototype.toString), ze = Oe(RegExp.prototype.test), en = Au(TypeError);
function Oe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Rs(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hn;
  if (Bi && Bi(e, null), !xn(t))
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
    ot(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = vn(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const s = n[0], i = n[1];
    ot(e, s) && (xn(i) ? t[s] = xu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = ct(i) : t[s] = i);
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
        return Oe(r.get);
      if (typeof r.value == "function")
        return Oe(r.value);
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
    return ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Xi = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ds = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ps = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ru = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hs = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ji = Ie(["#text"]), Zi = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ms = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qi = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mr = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = De(/{{[\w\W]*|^[\w\W]*}}/g), Pu = De(/<%[\w\W]*|^[\w\W]*%>/g), Iu = De(/\${[\w\W]*/g), Lu = De(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = De(/^aria-[\-\w]+$/), eo = De(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = De(/^(?:\w+script|data):/i), ku = De(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = De(/^html$/i), Uu = De(/^[a-z][.\w]*(-[.\w]+)+$/i), to = De(/<[/\w!]/g), no = De(/<[/\w]/g), Hu = De(/<\/no(script|embed|frames)/i), ju = De(/\/>/i), at = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = Ie(ie({}, vl)), Vu = (function() {
  const e = {};
  return nn(vl, (t) => {
    e[t] = De(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ie(e);
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
}, Kt = function(t, n, r, s) {
  return ot(t, n) && xn(t[n]) ? ie(s.base ? ct(s.base) : {}, t[n], s.transform) : r;
}, bs = function(t, n, r) {
  const s = ot(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? ct(s) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (I) => Tl(I);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== at.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const m = e.DOMParser, x = e.trustedTypes, M = l.prototype, j = gt(M, "cloneNode"), K = gt(M, "remove"), $ = gt(M, "nextSibling"), Y = gt(M, "childNodes"), z = gt(M, "parentNode"), L = gt(M, "shadowRoot"), W = gt(M, "attributes"), k = o && o.prototype ? gt(o.prototype, "nodeType") : null, ne = o && o.prototype ? gt(o.prototype, "nodeName") : null, Ee = o && o.prototype ? gt(o.prototype, "ownerDocument") : null, de = function(a) {
    return k ? k(a) : a.nodeType;
  }, ke = function(a) {
    return ne ? ne(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const I = n.createElement("template");
    I.content && I.content.ownerDocument && (n = I.content.ownerDocument);
  }
  let ge, ve = "", je, lt = !1, we = 0;
  const ft = function() {
    if (we > 0)
      throw en('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ke = function(a) {
    ft(), we++;
    try {
      return ge.createHTML(a);
    } finally {
      we--;
    }
  }, ue = function(a) {
    ft(), we++;
    try {
      return ge.createScriptURL(a);
    } finally {
      we--;
    }
  }, re = function() {
    return lt || (je = Bu(x, s), lt = !0), je;
  }, ee = n, Ae = ee.implementation, Ge = ee.createNodeIterator, $e = ee.createDocumentFragment, Te = ee.getElementsByTagName, bt = r.importNode;
  let Q = ro();
  t.isSupported = typeof gl == "function" && typeof z == "function" && Ae && Ae.createHTMLDocument !== void 0;
  const Et = Nu, nt = Pu, dt = Iu, Fe = Lu, yt = Mu, Ye = Du, pt = ku, f = Uu;
  let p = eo, _ = null;
  const S = ie({}, [...Xi, ...ds, ...ps, ...hs, ...Ji]);
  let b = null;
  const E = ie({}, [...Zi, ...ms, ...Qi, ...mr]);
  let N = Object.seal(vn(null, {
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
  })), O = null, P = null;
  const C = Object.seal(vn(null, {
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
  let w = !0, y = !0, u = !1, D = !0, B = !1, X = !0, te = !1, pe = !1, me = null, Ne = null, Le = !1, Ve = !1, Xe = !1, Re = !1, Ue = !0, Bt = !1;
  const Wt = "user-content-";
  let $r = !0, Vr = !1, dn = {}, pn = null;
  const qs = ie({}, [
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
  const Gs = ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ys = null;
  const Xs = ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tr = "http://www.w3.org/1998/Math/MathML", nr = "http://www.w3.org/2000/svg", At = "http://www.w3.org/1999/xhtml";
  let hn = At, zr = !1, Br = null;
  const El = ie({}, [tr, nr, At], fs), Js = Ie(["mi", "mo", "mn", "ms", "mtext"]);
  let Wr = ie({}, Js);
  const Zs = Ie(["annotation-xml"]);
  let qr = ie({}, Zs);
  const Al = ie({}, ["title", "style", "font", "a", "script"]);
  let Rn = null;
  const xl = ["application/xhtml+xml", "text/html"], Cl = "text/html";
  let xe = null, mn = null;
  const wl = n.createElement("form"), Qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Kr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mn && mn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ct(a), Rn = // eslint-disable-next-line unicorn/prefer-includes
    xl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Cl : a.PARSER_MEDIA_TYPE, xe = Rn === "application/xhtml+xml" ? fs : Hn, _ = Kt(a, "ALLOWED_TAGS", S, {
      transform: xe
    }), b = Kt(a, "ALLOWED_ATTR", E, {
      transform: xe
    }), Br = Kt(a, "ALLOWED_NAMESPACES", El, {
      transform: fs
    }), Ys = Kt(a, "ADD_URI_SAFE_ATTR", Xs, {
      transform: xe,
      base: Xs
    }), Ks = Kt(a, "ADD_DATA_URI_TAGS", Gs, {
      transform: xe,
      base: Gs
    }), pn = Kt(a, "FORBID_CONTENTS", qs, {
      transform: xe
    }), O = Kt(a, "FORBID_TAGS", ct({}), {
      transform: xe
    }), P = Kt(a, "FORBID_ATTR", ct({}), {
      transform: xe
    }), dn = ot(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ct(a.USE_PROFILES) : a.USE_PROFILES : !1, w = a.ALLOW_ARIA_ATTR !== !1, y = a.ALLOW_DATA_ATTR !== !1, u = a.ALLOW_UNKNOWN_PROTOCOLS || !1, D = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = a.SAFE_FOR_TEMPLATES || !1, X = a.SAFE_FOR_XML !== !1, te = a.WHOLE_DOCUMENT || !1, Ve = a.RETURN_DOM || !1, Xe = a.RETURN_DOM_FRAGMENT || !1, Re = a.RETURN_TRUSTED_TYPE || !1, Le = a.FORCE_BODY || !1, Ue = a.SANITIZE_DOM !== !1, Bt = a.SANITIZE_NAMED_PROPS || !1, $r = a.KEEP_CONTENT !== !1, Vr = a.IN_PLACE || !1, p = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : eo, hn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : At, Wr = bs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ie({}, Js)
      // Default built-in map
    ), qr = bs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ie({}, Zs)
      // Default built-in map
    );
    const g = bs(a, "CUSTOM_ELEMENT_HANDLING", () => vn(null));
    if (N = vn(null), ot(g, "tagNameCheck") && Qs(g.tagNameCheck) && (N.tagNameCheck = g.tagNameCheck), ot(g, "attributeNameCheck") && Qs(g.attributeNameCheck) && (N.attributeNameCheck = g.attributeNameCheck), ot(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (N.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), De(N), B && (y = !1), Xe && (Ve = !0), dn && (_ = ie({}, Ji), b = vn(null), dn.html === !0 && (ie(_, Xi), ie(b, Zi)), dn.svg === !0 && (ie(_, ds), ie(b, ms), ie(b, mr)), dn.svgFilters === !0 && (ie(_, ps), ie(b, ms), ie(b, mr)), dn.mathMl === !0 && (ie(_, hs), ie(b, Qi), ie(b, mr))), C.tagCheck = null, C.attributeCheck = null, ot(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? C.tagCheck = a.ADD_TAGS : xn(a.ADD_TAGS) && (_ === S && (_ = ct(_)), ie(_, a.ADD_TAGS, xe))), ot(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? C.attributeCheck = a.ADD_ATTR : xn(a.ADD_ATTR) && (b === E && (b = ct(b)), ie(b, a.ADD_ATTR, xe))), ot(a, "ADD_FORBID_CONTENTS") && xn(a.ADD_FORBID_CONTENTS) && (pn === qs && (pn = ct(pn)), ie(pn, a.ADD_FORBID_CONTENTS, xe)), $r && (_["#text"] = !0), te && ie(_, ["html", "head", "body"]), _.table && (ie(_, ["tbody"]), delete O.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = ge;
      ge = a.TRUSTED_TYPES_POLICY;
      try {
        ve = Ke("");
      } catch (U) {
        throw ge = R, U;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ge = void 0, ve = "") : (ge === void 0 && (ge = re()), ge && typeof ve == "string" && (ve = Ke("")));
    Ie && Ie(a), mn = a;
  }, ei = ie({}, [...ds, ...ps, ...Ru]), ti = ie({}, [...hs, ...Ou]), Rl = function(a, g, R) {
    return g.namespaceURI === At ? a === "svg" : g.namespaceURI === tr ? a === "svg" && (R === "annotation-xml" || Wr[R]) : !!ei[a];
  }, Ol = function(a, g, R) {
    return g.namespaceURI === At ? a === "math" : g.namespaceURI === nr ? a === "math" && qr[R] : !!ti[a];
  }, Nl = function(a, g, R) {
    return g.namespaceURI === nr && !qr[R] || g.namespaceURI === tr && !Wr[R] ? !1 : !ti[a] && (Al[a] || !ei[a]);
  }, Pl = function(a) {
    let g = z(a);
    (!g || !g.tagName) && (g = {
      namespaceURI: hn,
      tagName: "template"
    });
    const R = Hn(a.tagName), U = Hn(g.tagName);
    return Br[a.namespaceURI] ? a.namespaceURI === nr ? Rl(R, g, U) : a.namespaceURI === tr ? Ol(R, g, U) : a.namespaceURI === At ? Nl(R, g, U) : !!(Rn === "application/xhtml+xml" && Br[a.namespaceURI]) : !1;
  }, qt = function(a) {
    In(t.removed, {
      element: a
    });
    try {
      z(a).removeChild(a);
    } catch {
      if (K(a), !z(a))
        throw en("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ni = function(a, g, R) {
    try {
      a.removeAttributeNode(g);
    } catch {
      try {
        a.removeAttribute(R);
      } catch {
      }
    }
  }, rr = function(a) {
    sr(a);
    const g = Y(a);
    if (g) {
      const U = [];
      nn(g, (V) => {
        In(U, V);
      }), nn(U, (V) => {
        try {
          K(V);
        } catch {
        }
      });
    }
    const R = W(a);
    if (R)
      for (let U = R.length - 1; U >= 0; --U) {
        const V = R[U], G = V && V.name;
        typeof G == "string" && ni(a, V, G);
      }
  }, Jt = function(a, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(a);
      } catch {
        R = null;
      }
    In(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(a);
    } catch {
      try {
        g.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (Ve || Xe)
        try {
          qt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const g = W(a);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const U = g[R], V = U && U.name;
        typeof V != "string" || b[xe(V)] || ni(a, U, V);
      }
  }, sr = function(a) {
    const g = [a];
    for (; g.length > 0; ) {
      const R = g.pop();
      de(R) === at.element && Il(R);
      const V = Y(R);
      if (V)
        for (let G = V.length - 1; G >= 0; --G)
          g.push(V[G]);
    }
  }, ri = function(a, g) {
    return X ? a === "patchsrc" ? !0 : a === "for" && g !== "label" && g !== "output" : !1;
  }, Ll = function(a) {
    if (!X)
      return;
    const g = [a];
    for (; g.length > 0; ) {
      const R = g.pop(), U = de(R);
      if (U === at.processingInstruction || U === at.comment && ze(no, R.data)) {
        try {
          K(R);
        } catch {
        }
        continue;
      }
      if (U === at.element) {
        const G = R, be = xe(ke(R));
        try {
          G.hasAttribute && G.hasAttribute("patchsrc") && G.removeAttribute("patchsrc"), G.hasAttribute && G.hasAttribute("for") && ri("for", be) && G.removeAttribute("for");
        } catch {
        }
      }
      const V = Y(R);
      if (V)
        for (let G = V.length - 1; G >= 0; --G)
          g.push(V[G]);
    }
  }, si = function(a) {
    let g = null, R = null;
    if (Le)
      a = "<remove></remove>" + a;
    else {
      const G = qi(a, /^[\r\n\t ]+/);
      R = G && G[0];
    }
    Rn === "application/xhtml+xml" && hn === At && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const U = ge ? Ke(a) : a;
    if (hn === At)
      try {
        g = new m().parseFromString(U, Rn);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ae.createDocument(hn, "template", null);
      try {
        g.documentElement.innerHTML = zr ? ve : U;
      } catch {
      }
    }
    const V = g.body || g.documentElement;
    return a && R && V.insertBefore(n.createTextNode(R), V.childNodes[0] || null), hn === At ? Te.call(g, te ? "html" : "body")[0] : te ? g.documentElement : V;
  }, ii = function(a) {
    const g = Ee ? Ee(a) : a.ownerDocument;
    return Ge.call(
      g || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ir = function(a) {
    return a = Ln(a, Et, " "), a = Ln(a, nt, " "), a = Ln(a, dt, " "), a;
  }, Gr = function(a) {
    var g;
    a.normalize();
    const R = Ee ? Ee(a) : a.ownerDocument, U = Ge.call(
      R || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let V = U.nextNode();
    for (; V; )
      V.data = ir(V.data), V = U.nextNode();
    const G = (g = a.querySelectorAll) === null || g === void 0 ? void 0 : g.call(a, "template");
    G && nn(G, (be) => {
      bn(be.content) && Gr(be.content);
    });
  }, or = function(a) {
    const g = ne ? ne(a) : null;
    return typeof g != "string" || xe(g) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== W(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== k(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, bn = function(a) {
    if (!k || typeof a != "object" || a === null)
      return !1;
    try {
      return k(a) === at.documentFragment;
    } catch {
      return !1;
    }
  }, On = function(a) {
    if (!k || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof k(a) == "number";
    } catch {
      return !1;
    }
  };
  function xt(I, a, g) {
    I.length !== 0 && nn(I, (R) => {
      R.call(t, a, g, mn);
    });
  }
  const Ml = function(a, g) {
    return !!(X && a.hasChildNodes() && !On(a.firstElementChild) && ze(to, a.textContent) && ze(to, a.innerHTML) || X && a.namespaceURI === At && $u[g] && (On(a.firstElementChild) || typeof a.textContent == "string" && ze(Vu[g], a.textContent)) || a.nodeType === at.processingInstruction || X && a.nodeType === at.comment && ze(no, a.data));
  }, lr = function(a, g) {
    if (a instanceof RegExp)
      return ze(a, g);
    if (a instanceof Function) {
      for (var R = arguments.length, U = new Array(R > 2 ? R - 2 : 0), V = 2; V < R; V++)
        U[V - 2] = arguments[V];
      return !!a(g, ...U);
    }
    return !1;
  }, Dl = function(a, g, R) {
    if (!O[g] && ui(g) && lr(N.tagNameCheck, g))
      return !1;
    if ($r && !pn[g]) {
      const U = z(a), V = Y(a);
      if (V && U) {
        const G = V.length;
        for (let be = G - 1; be >= 0; --be) {
          const _e = a === R ? j(V[be], !0) : V[be];
          U.insertBefore(_e, $(a));
        }
      }
    }
    return qt(a), !0;
  }, oi = function(a, g, R, U) {
    return a.length === 0 ? g : g === R || g === U ? ct(g) : g;
  }, li = function(a, g) {
    return a === g || z(a) !== null ? !1 : (Vr && sr(a), !0);
  }, ai = function(a, g) {
    if (xt(Q.beforeSanitizeElements, a, null), li(a, g))
      return !0;
    if (or(a))
      return qt(a), !0;
    const R = xe(ke(a));
    if (_ = oi(Q.uponSanitizeElement, _, S, me), xt(Q.uponSanitizeElement, a, {
      tagName: R,
      allowedTags: _
    }), li(a, g))
      return !0;
    if (Ml(a, R))
      return qt(a), !0;
    if (O[R] || !(C.tagCheck instanceof Function && C.tagCheck(R)) && !_[R]) {
      const V = Dl(a, R, g);
      return V === !1 && xt(Q.afterSanitizeElements, a, null), V;
    }
    if (de(a) === at.element && !Pl(a) || (R === "noscript" || R === "noembed" || R === "noframes") && ze(Hu, a.innerHTML))
      return qt(a), !0;
    if (B && a.nodeType === at.text) {
      const V = ir(a.textContent);
      a.textContent !== V && (In(t.removed, {
        element: a.cloneNode()
      }), a.textContent = V);
    }
    return xt(Q.afterSanitizeElements, a, null), !1;
  }, ci = function(a, g, R) {
    if (P[g] || ri(g, a) || Ue && (g === "id" || g === "name") && (R in n || R in wl))
      return !1;
    const U = b[g] || C.attributeCheck instanceof Function && C.attributeCheck(g, a);
    return y && ze(Fe, g) || w && ze(yt, g) ? !0 : U ? Ys[g] || ze(p, Ln(R, pt, "")) || (g === "src" || g === "xlink:href" || g === "href") && a !== "script" && Ki(R, "data:") === 0 && Ks[a] || u && !ze(Ye, Ln(R, pt, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ui(a) && lr(N.tagNameCheck, a) && lr(N.attributeNameCheck, g, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && N.allowCustomizedBuiltInElements && lr(N.tagNameCheck, R)
    );
  }, kl = ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ui = function(a) {
    return !kl[Hn(a)] && ze(f, a);
  }, Fl = function(a, g, R, U) {
    if (ge && typeof x == "object" && typeof x.getAttributeType == "function" && !R)
      switch (x.getAttributeType(a, g)) {
        case "TrustedHTML":
          return Ke(U);
        case "TrustedScriptURL":
          return ue(U);
      }
    return U;
  }, Ul = function(a, g, R, U) {
    try {
      R ? a.setAttributeNS(R, g, U) : a.setAttribute(g, U), or(a) ? qt(a) : Wi(t.removed);
    } catch {
      Jt(g, a);
    }
  }, fi = function(a) {
    xt(Q.beforeSanitizeAttributes, a, null);
    const g = a.attributes;
    if (!g || or(a))
      return;
    b = oi(Q.uponSanitizeAttribute, b, E, Ne);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: b,
      forceKeepAttr: void 0
    };
    let U = g.length;
    const V = xe(a.nodeName);
    for (; U--; ) {
      const G = g[U], be = G.name, _e = G.namespaceURI, rt = G.value, st = xe(be), Xr = rt;
      let Je = be === "value" ? Xr : Tu(Xr);
      if (R.attrName = st, R.attrValue = Je, R.keepAttr = !0, R.forceKeepAttr = void 0, xt(Q.uponSanitizeAttribute, a, R), Je = R.attrValue, Bt && (st === "id" || st === "name") && Ki(Je, Wt) !== 0 && (Jt(be, a, G), Je = Wt + Je), X && ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        Jt(be, a, G);
        continue;
      }
      if (st === "attributename" && qi(Je, "href")) {
        Jt(be, a, G);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          Jt(be, a, G);
          continue;
        }
        if (!D && ze(ju, Je)) {
          Jt(be, a, G);
          continue;
        }
        if (B && (Je = ir(Je)), !ci(V, st, Je)) {
          Jt(be, a, G);
          continue;
        }
        Je = Fl(V, st, _e, Je), Je !== Xr && Ul(a, be, _e, Je);
      }
    }
    xt(Q.afterSanitizeAttributes, a, null);
  }, ar = function(a) {
    let g = null;
    const R = ii(a);
    for (xt(Q.beforeSanitizeShadowDOM, a, null); g = R.nextNode(); )
      if (xt(Q.uponSanitizeShadowNode, g, null), ai(g, a), fi(g), bn(g.content) && ar(g.content), de(g) === at.element) {
        const U = L(g);
        bn(U) && (Yr(U), ar(U));
      }
    xt(Q.afterSanitizeShadowDOM, a, null);
  }, Yr = function(a) {
    const g = [{
      node: a,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        ar(R.shadow);
        continue;
      }
      const U = R.node, G = de(U) === at.element, be = Y(U);
      if (be)
        for (let _e = be.length - 1; _e >= 0; --_e)
          g.push({
            node: be[_e],
            shadow: null
          });
      if (G) {
        const _e = ne ? ne(U) : null;
        if (typeof _e == "string" && xe(_e) === "template") {
          const rt = U.content;
          bn(rt) && g.push({
            node: rt,
            shadow: null
          });
        }
      }
      if (G) {
        const _e = L(U);
        bn(_e) && g.push({
          node: null,
          shadow: _e
        }, {
          node: _e,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(I) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, U = null, V = null;
    if (zr = !I, zr && (I = "<!-->"), typeof I != "string" && !On(I) && (I = Cu(I), typeof I != "string"))
      throw en("dirty is not a string, aborting");
    if (!t.isSupported)
      return I;
    pe ? (_ = me, b = Ne) : Kr(a), (Q.uponSanitizeElement.length > 0 || Q.uponSanitizeAttribute.length > 0) && (_ = ct(_)), Q.uponSanitizeAttribute.length > 0 && (b = ct(b)), t.removed = [];
    const G = Vr && typeof I != "string" && On(I);
    if (G) {
      Ll(I);
      const rt = ke(I);
      if (typeof rt == "string") {
        const st = xe(rt);
        if (!_[st] || O[st])
          throw rr(I), en("root node is forbidden and cannot be sanitized in-place");
      }
      if (or(I))
        throw rr(I), en("root node is clobbered and cannot be sanitized in-place");
      try {
        Yr(I);
      } catch (st) {
        throw rr(I), st;
      }
    } else if (On(I))
      g = si("<!---->"), R = g.ownerDocument.importNode(I, !0), R.nodeType === at.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), Yr(R);
    else {
      if (!Ve && !B && !te && // eslint-disable-next-line unicorn/prefer-includes
      I.indexOf("<") === -1)
        return ge && Re ? Ke(I) : I;
      if (g = si(I), !g)
        return Ve ? null : Re ? ve : "";
    }
    g && Le && qt(g.firstChild);
    const be = G ? I : g;
    try {
      const rt = ii(be);
      for (; U = rt.nextNode(); )
        ai(U, be), fi(U), bn(U.content) && ar(U.content);
    } catch (rt) {
      throw G && (rr(I), nn(t.removed, (st) => {
        st.element && sr(st.element);
      })), rt;
    }
    if (G)
      return nn(t.removed, (rt) => {
        rt.element && sr(rt.element);
      }), B && Gr(I), I;
    if (Ve) {
      if (B && Gr(g), Xe)
        for (V = $e.call(g.ownerDocument); g.firstChild; )
          V.appendChild(g.firstChild);
      else
        V = g;
      return (b.shadowroot || b.shadowrootmode) && (V = bt.call(r, V, !0)), V;
    }
    let _e = te ? g.outerHTML : g.innerHTML;
    return te && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && ze(Fu, g.ownerDocument.doctype.name) && (_e = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + _e), B && (_e = ir(_e)), ge && Re ? Ke(_e) : _e;
  }, t.setConfig = function() {
    let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kr(I), pe = !0, me = _, Ne = b;
  }, t.clearConfig = function() {
    mn = null, pe = !1, me = null, Ne = null, ge = je, ve = "";
  }, t.isValidAttribute = function(I, a, g) {
    mn || Kr({});
    const R = xe(I), U = xe(a);
    return ci(R, U, g);
  }, t.addHook = function(I, a) {
    typeof a == "function" && ot(Q, I) && In(Q[I], a);
  }, t.removeHook = function(I, a) {
    if (ot(Q, I)) {
      if (a !== void 0) {
        const g = _u(Q[I], a);
        return g === -1 ? void 0 : vu(Q[I], g, 1)[0];
      }
      return Wi(Q[I]);
    }
  }, t.removeHooks = function(I) {
    ot(Q, I) && (Q[I] = []);
  }, t.removeAllHooks = function() {
    Q = ro();
  }, t;
}
var Wu = Tl();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ys, so;
function Ku() {
  if (so) return ys;
  so = 1;
  var e = /["'&<>]/;
  ys = t;
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
  return ys;
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
function d(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = ($) => $, v = (l.sanitize ? Wu.sanitize : c) || c, m = l.escape ? io : c, x = ($) => typeof $ == "string" || typeof $ == "number", M = ($, Y, z) => $.replace(/%n/g, "" + z).replace(/{([^{}]*)}/g, (L, W) => {
    if (Y === void 0 || !(W in Y))
      return m(L);
    const k = Y[W];
    return x(k) ? m(`${k}`) : typeof k == "object" && x(k.value) ? (k.escape !== !1 ? io : c)(`${k.value}`) : m(L);
  });
  let K = (s?.bundle ?? Yu(e)).translations[t] || t;
  return K = Array.isArray(K) ? K[0] : K, v(typeof i == "object" || o !== void 0 ? M(
    K,
    i,
    o
  ) : K);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Tf = ["aria-label"], Sf = { class: "library-filter-panel" }, Ef = { class: "library-filter-panel-summary" }, Af = ["aria-label"], xf = { value: "" }, Cf = ["value"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, If = ["value"], Lf = { value: "" }, Mf = ["value"], Df = { value: "" }, kf = ["value"], Ff = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], sd = ["aria-label"], id = ["href"], od = { class: "library-muted library-filter-result-summary" }, ld = { key: 0 }, ad = { href: "?" }, cd = { class: "library-batch-actions" }, ud = { class: "library-settings-count-badge" }, fd = ["action"], dd = ["value"], pd = ["name", "value"], hd = ["placeholder"], md = {
  type: "submit",
  class: "button primary"
}, bd = { class: "library-muted" }, yd = ["action"], gd = ["value"], _d = ["name", "value"], vd = ["placeholder"], Td = {
  type: "submit",
  class: "button secondary"
}, Sd = { class: "library-muted" }, Ed = ["action"], Ad = ["value"], xd = ["name", "value"], Cd = {
  type: "submit",
  class: "button secondary"
}, wd = { class: "library-muted" }, Rd = ["action"], Od = ["value"], Nd = ["name", "value"], Pd = {
  type: "submit",
  class: "button secondary"
}, Id = { class: "library-muted" }, Ld = ["aria-label"], Md = ["href", "aria-label"], Dd = ["aria-label"], kd = { class: "library-pagination-range" }, Fd = { key: 0 }, Ud = ["href"], Hd = {
  key: 1,
  class: "library-muted"
}, jd = ["href"], $d = {
  key: 3,
  class: "library-muted"
}, Vd = {
  key: 1,
  class: "library-periodical-groups"
}, zd = { class: "library-periodical-groups-summary" }, Bd = { id: "library-periodical-groups-heading" }, Wd = { class: "library-muted" }, qd = ["href"], Kd = { class: "library-muted" }, Gd = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Yd = { class: "library-periodical-groups-summary" }, Xd = { id: "library-periodical-groups-empty-heading" }, Jd = { class: "library-muted" }, Zd = { class: "library-muted" }, Qd = { class: "library-empty-actions" }, ep = ["href"], tp = { class: "library-muted" }, np = { class: "library-muted" }, rp = { class: "library-empty-actions" }, sp = ["href"], ip = { class: "library-muted" }, op = { class: "library-empty-actions" }, lp = ["href"], ap = {
  href: "?",
  class: "button primary"
}, cp = { class: "library-muted" }, up = { class: "library-empty-actions" }, fp = ["href"], dp = {
  key: 4,
  class: "library-cover-gallery"
}, pp = ["href", "aria-label"], hp = ["src", "alt"], mp = ["action", "onSubmit"], bp = ["value"], yp = ["value"], gp = ["aria-pressed", "title", "aria-label", "onClick"], _p = { class: "library-cover-summary" }, vp = { class: "library-cover-primary" }, Tp = ["aria-label"], Sp = ["href"], Ep = ["onToggle"], Ap = ["aria-label"], xp = { class: "library-cover-meta" }, Cp = {
  key: 0,
  class: "library-creator"
}, wp = { class: "library-cover-detail-list" }, Rp = { class: "library-cover-detail-chip" }, Op = {
  key: 0,
  class: "library-cover-detail-chip"
}, Np = {
  key: 1,
  class: "library-cover-detail-chip"
}, Pp = {
  key: 2,
  class: "library-cover-detail-chip"
}, Ip = {
  key: 3,
  class: "library-cover-detail-chip"
}, Lp = {
  key: 4,
  class: "library-cover-detail-chip"
}, Mp = {
  key: 5,
  class: "library-cover-detail-chip"
}, Dp = {
  key: 6,
  class: "library-cover-detail-chip"
}, kp = {
  key: 1,
  class: "library-muted library-cover-description"
}, Fp = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Up = { key: 0 }, Hp = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, jp = {
  key: 0,
  class: "library-muted"
}, $p = { class: "library-cover-actions" }, Vp = ["href"], zp = ["href"], Bp = ["href"], Wp = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ sn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ sn((s.items || []).map((w) => ({ ...w }))), o = oe(() => i), l = oe(() => s.shelves || []), c = oe(() => s.formats || []), v = oe(() => s.publications || []), m = oe(() => s.publicationSummaries || []), x = oe(() => s.publicationYears || []), M = oe(() => s.creators || []), j = oe(() => s.scanStatuses || []), K = oe(() => s.workflowStatuses || []), $ = oe(() => s.genres || []), Y = oe(() => s.classifications || []), z = oe(() => s.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), L = /* @__PURE__ */ sn({
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
    }), W = oe(() => s.settingsUrl || ""), k = oe(() => s.requestToken || ""), ne = oe(() => s.metadataExportUrl || ""), Ee = oe(() => s.metadataSidecarManifestUrl || ""), de = oe(() => s.metadataSidecarBundleUrl || ""), ke = oe(() => s.catalogueEndpointUrl || "/apps/library/catalogue"), ge = oe(() => s.batchTagUrl || "/apps/library/bulk/tags"), ve = oe(() => s.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), je = oe(() => s.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), lt = oe(() => s.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), we = oe(() => s.scannerConflictReviewUrl || "?scannerConflicts=1"), ft = oe(() => Number(s.rootCount || 0)), Ke = oe(() => Number(s.enabledRootCount || 0)), ue = oe(() => ft.value === 0), re = oe(() => ft.value > 0 && Ke.value === 0), ee = oe(() => Ge.value.length > 0), Ae = {
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
    }, Ge = oe(() => Object.entries(Ae).map(([w, y]) => ({ key: w, label: y, value: L[w] || "" })).filter((w) => String(w.value).trim() !== "")), $e = oe(() => Object.entries(L).filter(([w, y]) => !["q", "sort", "starred"].includes(w) && String(y || "").trim() !== "").map(([w, y]) => ({ key: w, value: y }))), Te = oe(() => Object.entries(L).filter(([w, y]) => String(y || "").trim() !== "").map(([w, y]) => ({ key: w, value: y }))), bt = /* @__PURE__ */ sn({}), Q = /* @__PURE__ */ ga(null);
    let Et = null;
    function nt(w) {
      const y = new URLSearchParams(new FormData(w));
      for (const u of Array.from(y.keys()))
        String(y.get(u) || "").trim() === "" && y.delete(u);
      return y.delete("page"), y;
    }
    function dt(w) {
      i.splice(0, i.length, ...(w.items || []).map((y) => ({ ...y })));
      for (const y of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(w, y) && (s[y] = w[y]);
      Object.assign(L, w.activeFilters || {});
    }
    async function Fe(w) {
      const y = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!y) return;
      const D = nt(y).toString(), B = D ? `?${D}` : "", X = await fetch(ke.value + B, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!X.ok) {
        y.submit();
        return;
      }
      dt(await X.json()), history.replaceState({}, "", D ? `?${D}` : window.location.pathname);
    }
    function yt(w) {
      Fe(w);
    }
    function Ye(w) {
      window.clearTimeout(Et), Et = window.setTimeout(() => yt(w), 350);
    }
    function pt(w) {
      const y = new URLSearchParams();
      for (const [D, B] of Object.entries(L)) {
        const X = String(B || "").trim();
        X !== "" && D !== w && !(D === "sort" && X === "title") && y.set(D, X);
      }
      const u = y.toString();
      return u ? `?${u}` : "?";
    }
    function f() {
      return pt("q");
    }
    function p(w) {
      return String(w || "").toUpperCase();
    }
    function _(w) {
      return w.nextcloudTags || [];
    }
    function S(w) {
      const y = new URLSearchParams(window.location.search);
      return y.set("publication", w), y.set("sort", "publication"), y.delete("page"), `?${y.toString()}`;
    }
    function b(w, y) {
      bt[w] = !!y?.currentTarget?.open;
    }
    function E(w) {
      const y = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(y);
    }
    function N(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || E(w.target) || (w.preventDefault(), Q.value?.focus(), Q.value?.select?.());
    }
    function O(w) {
      w.key !== "Escape" || document.activeElement !== Q.value || L.q === "" || (w.preventDefault(), L.q = "", Q.value.value = "", window.clearTimeout(Et), yt({ currentTarget: Q.value }));
    }
    function P(w) {
      N(w), O(w);
    }
    Wo(() => {
      window.addEventListener("keydown", P);
    }), qo(() => {
      window.removeEventListener("keydown", P);
    });
    async function C(w, y) {
      const u = y?.currentTarget?.closest?.("form") || y?.currentTarget;
      if (!u || !w?.starUrl) return;
      const D = !!w.starred;
      w.starred = !D;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(u),
          credentials: "same-origin"
        })).ok || (w.starred = D);
      } catch {
        w.starred = D;
      }
    }
    return (w, y) => (F(), H("div", Xu, [
      h("section", Ju, [
        h("div", Zu, [
          h("div", null, [
            h("h2", Qu, T(A(d)("library", "Publication catalogue")), 1),
            h("p", ef, T(A(d)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          h("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": A(d)("library", "Library actions")
          }, [
            h("a", {
              href: W.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, T(A(d)("library", "Settings")), 9, nf),
            ne.value ? (F(), H("a", {
              key: 0,
              href: ne.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, T(A(d)("library", "Export corrected metadata")), 9, rf)) : Pe("", !0),
            Ee.value ? (F(), H("a", {
              key: 1,
              href: Ee.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, T(A(d)("library", "Sidecar manifest")), 9, sf)) : Pe("", !0),
            de.value ? (F(), H("a", {
              key: 2,
              href: de.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, T(A(d)("library", "Sidecar ZIP")), 9, of)) : Pe("", !0)
          ], 8, tf)
        ]),
        h("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": A(d)("library", "Quick catalogue filters"),
          onSubmit: hr(Fe, ["prevent"])
        }, [
          (F(!0), H(se, null, Ce($e.value, (u) => (F(), H("input", {
            key: u.key,
            type: "hidden",
            name: u.key,
            value: u.value
          }, null, 8, af))), 128)),
          h("label", cf, [
            le(T(A(d)("library", "Search")) + " ", 1),
            y[18] || (y[18] = h("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Me(h("input", {
              ref_key: "quickSearchInput",
              ref: Q,
              "onUpdate:modelValue": y[0] || (y[0] = (u) => L.q = u),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Ye
            }, null, 544), [
              [us, L.q]
            ])
          ]),
          h("label", null, [
            le(T(A(d)("library", "Sort")) + " ", 1),
            Me(h("select", {
              "onUpdate:modelValue": y[1] || (y[1] = (u) => L.sort = u),
              name: "sort",
              onChange: Fe
            }, [
              h("option", uf, T(A(d)("library", "Title")), 1),
              h("option", ff, T(A(d)("library", "Recently added")), 1),
              h("option", df, T(A(d)("library", "Publication date")), 1),
              h("option", pf, T(A(d)("library", "Series")), 1),
              h("option", hf, T(A(d)("library", "Recently opened")), 1),
              h("option", mf, T(A(d)("library", "Format")), 1)
            ], 544), [
              [Ze, L.sort]
            ])
          ]),
          h("label", null, [
            le(T(A(d)("library", "Starred")) + " ", 1),
            Me(h("select", {
              "onUpdate:modelValue": y[2] || (y[2] = (u) => L.starred = u),
              name: "starred",
              onChange: Fe
            }, [
              h("option", bf, T(A(d)("library", "All")), 1),
              h("option", yf, T(A(d)("library", "Starred")), 1)
            ], 544), [
              [Ze, L.starred]
            ])
          ]),
          h("label", null, [
            le(T(A(d)("library", "Size")) + " ", 1),
            h("select", {
              value: z.value.limit,
              name: "limit",
              onChange: Fe
            }, [
              (F(), H(se, null, Ce(r, (u) => h("option", {
                key: u,
                value: u
              }, T(u), 9, _f)), 64))
            ], 40, gf)
          ]),
          h("button", {
            type: "submit",
            class: "button primary",
            "aria-label": A(d)("library", "Apply catalogue filters")
          }, T(A(d)("library", "Apply filters")), 9, vf),
          h("a", {
            href: "?",
            class: "button secondary",
            "aria-label": A(d)("library", "Clear catalogue filters")
          }, T(A(d)("library", "Clear all")), 9, Tf)
        ], 40, lf),
        h("details", Sf, [
          h("summary", Ef, T(A(d)("library", "Show catalogue filters")), 1),
          h("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": A(d)("library", "Catalogue search and filters"),
            onSubmit: hr(Fe, ["prevent"])
          }, [
            h("label", null, [
              le(T(A(d)("library", "Search title / author")) + " ", 1),
              Me(h("input", {
                "onUpdate:modelValue": y[3] || (y[3] = (u) => L.q = u),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [us, L.q]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Type")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[4] || (y[4] = (u) => L.type = u),
                name: "type"
              }, [
                h("option", xf, T(A(d)("library", "All types")), 1),
                (F(), H(se, null, Ce(n, (u) => h("option", {
                  key: u,
                  value: u
                }, T(u), 9, Cf)), 64))
              ], 512), [
                [Ze, L.type]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Series / periodical")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[5] || (y[5] = (u) => L.publication = u),
                name: "publication"
              }, [
                h("option", wf, T(A(d)("library", "All series and periodicals")), 1),
                (F(!0), H(se, null, Ce(v.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, Rf))), 128))
              ], 512), [
                [Ze, L.publication]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Publication year")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[6] || (y[6] = (u) => L.year = u),
                name: "year"
              }, [
                h("option", Of, T(A(d)("library", "All years")), 1),
                (F(!0), H(se, null, Ce(x.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, Nf))), 128))
              ], 512), [
                [Ze, L.year]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Creator")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[7] || (y[7] = (u) => L.creator = u),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                h("option", Pf, T(A(d)("library", "All creators")), 1),
                (F(!0), H(se, null, Ce(M.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, If))), 128))
              ], 512), [
                [Ze, L.creator]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Nextcloud tag")) + " ", 1),
              Me(h("input", {
                "onUpdate:modelValue": y[8] || (y[8] = (u) => L.tag = u),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [us, L.tag]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Format")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[9] || (y[9] = (u) => L.format = u),
                name: "format"
              }, [
                h("option", Lf, T(A(d)("library", "All formats")), 1),
                (F(!0), H(se, null, Ce(c.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(p(u)), 9, Mf))), 128))
              ], 512), [
                [Ze, L.format]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Shelf")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[10] || (y[10] = (u) => L.shelf = u),
                name: "shelf"
              }, [
                h("option", Df, T(A(d)("library", "All shelves")), 1),
                (F(!0), H(se, null, Ce(l.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, kf))), 128))
              ], 512), [
                [Ze, L.shelf]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Scan status")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[11] || (y[11] = (u) => L.status = u),
                name: "status"
              }, [
                h("option", Ff, T(A(d)("library", "All scan statuses")), 1),
                (F(!0), H(se, null, Ce(j.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, Uf))), 128))
              ], 512), [
                [Ze, L.status]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Workflow status")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[12] || (y[12] = (u) => L.workflowStatus = u),
                name: "workflowStatus"
              }, [
                h("option", Hf, T(A(d)("library", "All workflow statuses")), 1),
                (F(!0), H(se, null, Ce(K.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, jf))), 128))
              ], 512), [
                [Ze, L.workflowStatus]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Genre")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[13] || (y[13] = (u) => L.genre = u),
                name: "genre"
              }, [
                h("option", $f, T(A(d)("library", "All genres")), 1),
                (F(!0), H(se, null, Ce($.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, Vf))), 128))
              ], 512), [
                [Ze, L.genre]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Classification")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[14] || (y[14] = (u) => L.classification = u),
                name: "classification"
              }, [
                h("option", zf, T(A(d)("library", "All classifications")), 1),
                (F(!0), H(se, null, Ce(Y.value, (u) => (F(), H("option", {
                  key: u,
                  value: u
                }, T(u), 9, Bf))), 128))
              ], 512), [
                [Ze, L.classification]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Scanner conflicts")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[15] || (y[15] = (u) => L.scannerConflicts = u),
                name: "scannerConflicts"
              }, [
                h("option", Wf, T(A(d)("library", "All metadata")), 1),
                h("option", qf, T(A(d)("library", "Needs review")), 1)
              ], 512), [
                [Ze, L.scannerConflicts]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Starred")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[16] || (y[16] = (u) => L.starred = u),
                name: "starred"
              }, [
                h("option", Kf, T(A(d)("library", "All publications")), 1),
                h("option", Gf, T(A(d)("library", "Starred only")), 1)
              ], 512), [
                [Ze, L.starred]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Sort")) + " ", 1),
              Me(h("select", {
                "onUpdate:modelValue": y[17] || (y[17] = (u) => L.sort = u),
                name: "sort"
              }, [
                h("option", Yf, T(A(d)("library", "Title")), 1),
                h("option", Xf, T(A(d)("library", "Recently added")), 1),
                h("option", Jf, T(A(d)("library", "Publication date")), 1),
                h("option", Zf, T(A(d)("library", "Series / periodical")), 1),
                h("option", Qf, T(A(d)("library", "Recently opened")), 1),
                h("option", ed, T(A(d)("library", "Format")), 1)
              ], 512), [
                [Ze, L.sort]
              ])
            ]),
            h("label", null, [
              le(T(A(d)("library", "Page size")) + " ", 1),
              h("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (F(), H(se, null, Ce(r, (u) => h("option", {
                  key: u,
                  value: u
                }, T(u), 9, nd)), 64))
              ], 8, td)
            ]),
            h("button", {
              type: "submit",
              class: "button primary",
              "aria-label": A(d)("library", "Apply catalogue filters")
            }, T(A(d)("library", "Apply filters")), 9, rd),
            h("a", {
              href: "?",
              class: "button secondary",
              "aria-label": A(d)("library", "Clear catalogue filters")
            }, T(A(d)("library", "Clear")), 9, sd),
            h("a", {
              href: we.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, T(A(d)("library", "Review scanner conflicts")), 9, id)
          ], 40, Af)
        ]),
        h("p", od, [
          le(T(A(d)("library", "Showing")) + " " + T(z.value.from) + "–" + T(z.value.to) + " " + T(A(d)("library", "of")) + " " + T(z.value.total) + " " + T(A(d)("library", "catalogue items")), 1),
          Ge.value.length > 0 ? (F(), H("span", ld, [
            y[19] || (y[19] = le(" · ", -1)),
            h("a", ad, T(A(d)("library", "Clear all filters")), 1)
          ])) : Pe("", !0)
        ]),
        h("details", cd, [
          h("summary", null, [
            le(T(A(d)("library", "Batch actions for current results")) + " ", 1),
            h("span", ud, T(z.value.total) + " " + T(A(d)("library", "Current filter result")), 1)
          ]),
          h("form", {
            method: "post",
            action: ge.value,
            class: "library-batch-tag-form"
          }, [
            h("input", {
              type: "hidden",
              name: "requesttoken",
              value: k.value
            }, null, 8, dd),
            (F(!0), H(se, null, Ce(Te.value, (u) => (F(), H("input", {
              key: u.key,
              type: "hidden",
              name: u.key,
              value: u.value
            }, null, 8, pd))), 128)),
            h("label", null, [
              h("span", null, T(A(d)("library", "Nextcloud tag")), 1),
              h("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: A(d)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, hd)
            ]),
            h("button", md, T(A(d)("library", "Apply Nextcloud tag to current results")), 1),
            h("p", bd, T(A(d)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, fd),
          h("form", {
            method: "post",
            action: ve.value,
            class: "library-batch-tag-remove-form"
          }, [
            h("input", {
              type: "hidden",
              name: "requesttoken",
              value: k.value
            }, null, 8, gd),
            (F(!0), H(se, null, Ce(Te.value, (u) => (F(), H("input", {
              key: `remove-tag-${u.key}`,
              type: "hidden",
              name: u.key,
              value: u.value
            }, null, 8, _d))), 128)),
            h("label", null, [
              h("span", null, T(A(d)("library", "Nextcloud tag")), 1),
              h("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: A(d)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, vd)
            ]),
            h("button", Td, T(A(d)("library", "Remove tag from current results")), 1),
            h("p", Sd, T(A(d)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, yd),
          h("form", {
            method: "post",
            action: je.value,
            class: "library-batch-metadata-reset-form"
          }, [
            h("input", {
              type: "hidden",
              name: "requesttoken",
              value: k.value
            }, null, 8, Ad),
            (F(!0), H(se, null, Ce(Te.value, (u) => (F(), H("input", {
              key: `reset-${u.key}`,
              type: "hidden",
              name: u.key,
              value: u.value
            }, null, 8, xd))), 128)),
            y[20] || (y[20] = h("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            h("button", Cd, T(A(d)("library", "Reset filtered metadata")), 1),
            h("p", wd, T(A(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, Ed),
          h("form", {
            method: "post",
            action: lt.value,
            class: "library-batch-cover-refresh-form"
          }, [
            h("input", {
              type: "hidden",
              name: "requesttoken",
              value: k.value
            }, null, 8, Od),
            (F(!0), H(se, null, Ce(Te.value, (u) => (F(), H("input", {
              key: `cover-${u.key}`,
              type: "hidden",
              name: u.key,
              value: u.value
            }, null, 8, Nd))), 128)),
            h("button", Pd, T(A(d)("library", "Request fresh cover previews")), 1),
            h("p", Id, T(A(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Rd)
        ]),
        Ge.value.length > 0 ? (F(), H("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": A(d)("library", "Active filters")
        }, [
          h("span", null, T(A(d)("library", "Active filters")), 1),
          (F(!0), H(se, null, Ce(Ge.value, (u) => (F(), H("a", {
            key: u.key,
            href: pt(u.key),
            class: "library-filter-chip",
            "aria-label": `${A(d)("library", "Remove filter")}: ${u.label}`
          }, [
            h("strong", null, T(u.label) + ":", 1),
            le(" " + T(u.value) + " ", 1),
            y[21] || (y[21] = h("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Md))), 128))
        ], 8, Ld)) : Pe("", !0),
        h("nav", {
          class: "library-pagination",
          "aria-label": A(d)("library", "Catalogue pagination")
        }, [
          h("span", kd, [
            le(T(A(d)("library", "Page")) + " " + T(z.value.page), 1),
            z.value.total > 0 ? (F(), H("span", Fd, " · " + T(z.value.from) + "–" + T(z.value.to), 1)) : Pe("", !0)
          ]),
          z.value.previousUrl ? (F(), H("a", {
            key: 0,
            href: z.value.previousUrl
          }, T(A(d)("library", "Previous")), 9, Ud)) : (F(), H("span", Hd, T(A(d)("library", "Previous")), 1)),
          z.value.nextUrl ? (F(), H("a", {
            key: 2,
            href: z.value.nextUrl
          }, T(A(d)("library", "Next")), 9, jd)) : (F(), H("span", $d, T(A(d)("library", "Next")), 1))
        ], 8, Dd),
        m.value.length > 0 ? (F(), H("details", Vd, [
          h("summary", zd, T(A(d)("library", "Show top series and periodicals")), 1),
          h("h3", Bd, T(A(d)("library", "Top series and periodicals")), 1),
          h("p", Wd, T(A(d)("library", "Jump into recurring publications with one click.")), 1),
          h("ul", null, [
            (F(!0), H(se, null, Ce(m.value, (u) => (F(), H("li", {
              key: u.publication
            }, [
              h("a", {
                href: S(u.publication)
              }, T(u.publication), 9, qd),
              h("span", Kd, T(u.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (F(), H("details", Gd, [
          h("summary", Yd, T(A(d)("library", "Show top series and periodicals")), 1),
          h("h3", Xd, T(A(d)("library", "No series or periodicals found yet")), 1),
          h("p", Jd, T(A(d)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Pe("", !0),
        o.value.length === 0 ? (F(), H("div", {
          key: 3,
          class: Sn(["library-empty-content", { "library-first-run-guidance": ue.value || re.value, "library-filter-empty-state": ee.value && !ue.value && !re.value }]),
          role: "status"
        }, [
          ue.value ? (F(), H(se, { key: 0 }, [
            h("h3", null, T(A(d)("library", "Start with one Library root")), 1),
            h("p", Zd, T(A(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            h("p", Qd, [
              h("a", {
                href: W.value,
                class: "button primary"
              }, T(A(d)("library", "Add a Library root")), 9, ep),
              h("span", tp, T(A(d)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : re.value ? (F(), H(se, { key: 1 }, [
            h("h3", null, T(A(d)("library", "No enabled Library roots")), 1),
            h("p", np, T(A(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            h("p", rp, [
              h("a", {
                href: W.value,
                class: "button primary"
              }, T(A(d)("library", "Open Library settings")), 9, sp)
            ])
          ], 64)) : ee.value ? (F(), H(se, { key: 2 }, [
            h("h3", null, T(A(d)("library", "No matches for the current filters")), 1),
            h("p", ip, T(A(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            h("p", op, [
              h("a", {
                href: f(),
                class: "button secondary"
              }, T(A(d)("library", "Clear search")), 9, lp),
              h("a", ap, T(A(d)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (F(), H(se, { key: 3 }, [
            h("h3", null, T(A(d)("library", "No catalogue items yet")), 1),
            h("p", cp, T(A(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            h("p", up, [
              h("a", {
                href: W.value,
                class: "button primary"
              }, T(A(d)("library", "Run a scan from settings")), 9, fp)
            ])
          ], 64))
        ], 2)) : (F(), H("div", dp, [
          (F(!0), H(se, null, Ce(o.value, (u) => (F(), H("article", {
            key: u.id,
            class: Sn(["library-cover-card", { "library-cover-card--open": bt[u.id] }])
          }, [
            h("a", {
              class: "library-cover-link",
              href: u.openUrl,
              "aria-label": `Read ${u.title}`
            }, [
              h("img", {
                class: "library-cover-image",
                src: u.coverUrl,
                alt: `Cover for ${u.title}`,
                loading: "lazy"
              }, null, 8, hp)
            ], 8, pp),
            h("form", {
              method: "post",
              action: u.starUrl,
              class: "library-cover-star-form",
              onSubmit: hr((D) => C(u, D), ["prevent"])
            }, [
              h("input", {
                type: "hidden",
                name: "requesttoken",
                value: k.value
              }, null, 8, bp),
              y[22] || (y[22] = h("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              h("input", {
                type: "hidden",
                name: "starred",
                value: u.starred ? "0" : "1"
              }, null, 8, yp),
              h("button", {
                type: "submit",
                class: Sn(["library-cover-star-button", { "library-cover-star-button--starred": u.starred }]),
                "aria-pressed": u.starred ? "true" : "false",
                title: u.starred ? A(d)("library", "Unstar this publication") : A(d)("library", "Star this publication"),
                "aria-label": u.starred ? A(d)("library", "Unstar this publication") : A(d)("library", "Star this publication"),
                onClick: hr((D) => C(u, D), ["prevent"])
              }, T(u.starred ? "★" : "☆"), 11, gp)
            ], 40, mp),
            h("div", _p, [
              h("div", vp, [
                h("h3", null, [
                  u.starred ? (F(), H("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": A(d)("library", "Starred")
                  }, "★", 8, Tp)) : Pe("", !0),
                  le(T(u.title), 1)
                ]),
                h("a", {
                  class: "library-cover-read",
                  href: u.openUrl
                }, T(A(d)("library", "Read")), 9, Sp)
              ]),
              h("details", {
                class: "library-cover-details",
                onToggle: (D) => b(u.id, D)
              }, [
                h("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${A(d)("library", "Show details and actions")}: ${u.title}`
                }, T(A(d)("library", "Details")), 9, Ap),
                h("div", xp, [
                  u.creators ? (F(), H("p", Cp, T(u.creators), 1)) : Pe("", !0),
                  h("dl", wp, [
                    h("div", Rp, [
                      h("dt", null, T(A(d)("library", "Type")), 1),
                      h("dd", null, T(u.publicationType), 1)
                    ]),
                    u.publication ? (F(), H("div", Op, [
                      h("dt", null, T(A(d)("library", "Series")), 1),
                      h("dd", null, T(u.publication), 1)
                    ])) : Pe("", !0),
                    u.publicationDate ? (F(), H("div", Np, [
                      h("dt", null, T(A(d)("library", "Date")), 1),
                      h("dd", null, T(u.publicationDate), 1)
                    ])) : Pe("", !0),
                    u.workflowStatus ? (F(), H("div", Pp, [
                      h("dt", null, T(A(d)("library", "Status")), 1),
                      h("dd", null, T(u.workflowStatus), 1)
                    ])) : Pe("", !0),
                    u.hasScannerConflict ? (F(), H("div", Ip, [
                      h("dt", null, T(A(d)("library", "Review")), 1),
                      h("dd", null, T(u.scannerConflictCount) + " fields", 1)
                    ])) : Pe("", !0),
                    u.lastOpenedAt ? (F(), H("div", Lp, [
                      h("dt", null, T(A(d)("library", "Last opened")), 1),
                      h("dd", null, T(u.lastOpenedAt), 1)
                    ])) : Pe("", !0),
                    u.extension ? (F(), H("div", Mp, [
                      h("dt", null, T(A(d)("library", "Format")) + ":", 1),
                      h("dd", null, T(p(u.extension)), 1)
                    ])) : Pe("", !0),
                    u.shelf ? (F(), H("div", Dp, [
                      h("dt", null, T(A(d)("library", "Shelf")), 1),
                      h("dd", null, T(u.shelf), 1)
                    ])) : Pe("", !0)
                  ]),
                  u.description ? (F(), H("p", kp, T(u.description), 1)) : Pe("", !0),
                  u.scanStatus !== "indexed" || u.scanError ? (F(), H("p", Fp, [
                    le(" scanStatus: " + T(u.scanStatus || "unknown"), 1),
                    u.scanError ? (F(), H("span", Up, " · scanError: " + T(u.scanError), 1)) : Pe("", !0)
                  ])) : Pe("", !0),
                  h("div", Hp, [
                    _(u).length === 0 ? (F(), H("span", jp, "No Nextcloud tags")) : (F(!0), H(se, { key: 1 }, Ce(_(u), (D) => (F(), H("span", {
                      key: D.id,
                      class: "library-tag"
                    }, T(D.name), 1))), 128))
                  ]),
                  h("p", $p, [
                    h("a", {
                      href: u.filesUrl
                    }, T(A(d)("library", "Show in Files")), 9, Vp),
                    y[23] || (y[23] = le(" · ", -1)),
                    h("a", {
                      href: u.downloadUrl
                    }, T(A(d)("library", "Download source")), 9, zp),
                    y[24] || (y[24] = le(" · ", -1)),
                    h("a", {
                      href: u.detailsUrl
                    }, T(A(d)("library", "Details")), 9, Bp)
                  ])
                ])
              ], 40, Ep)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, oo = uu("library", "catalogue", {}), _r = document.querySelector("#library-vue-root"), lo = {
  ...oo,
  requestToken: _r?.dataset.requestToken || oo.requestToken || ""
};
function J(e) {
  return String(e ?? "");
}
function Sl(e) {
  return J(e).toUpperCase();
}
function qp(e, t, n, r = J) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = J(s), i.textContent = r(s), J(s) === J(n) && (i.selected = !0), e.appendChild(i);
  }
}
function ao(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = J(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function gn(e, t, n, r, s, i, o = J) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const v = document.createElement("option");
  v.value = "", v.textContent = s, c.appendChild(v), qp(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function Dn(e) {
  const t = J(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Kp(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Gp(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && J(r).trim() !== "");
}
function Yp() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function kn(e, t, n, r) {
  const s = document.createElement("a");
  return s.href = t, s.className = n, s.textContent = r, e.appendChild(s), s;
}
function Xp(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Jp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", d("library", "Catalogue search and filters")), ao(r, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), gn(r, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ao(r, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), gn(r, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Sl), gn(r, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), gn(r, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), gn(r, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), gn(r, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", d("library", "Apply catalogue filters")), s.textContent = d("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", d("library", "Clear catalogue filters")), i.textContent = d("library", "Clear"), r.append(s, i), r;
}
function Zp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let s = null;
  const i = () => {
    window.clearTimeout(s), s = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [x, M] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(x) || J(M).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = x, j.value = J(M), r.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = J(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", i), o.appendChild(l), r.appendChild(o);
  const c = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [x, M, j, K] of c) {
    const $ = document.createElement("label");
    $.textContent = x;
    const Y = document.createElement("select");
    Y.name = M;
    for (const [z, L] of K) {
      const W = document.createElement("option");
      W.value = J(z), W.textContent = J(L), J(z) === J(j) && (W.selected = !0), Y.appendChild(W);
    }
    Y.addEventListener("change", () => r.requestSubmit()), $.appendChild(Y), r.appendChild($);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", d("library", "Apply catalogue filters")), v.textContent = d("library", "Apply filters");
  const m = document.createElement("a");
  return m.href = "?", m.className = "button secondary", m.setAttribute("aria-label", d("library", "Clear catalogue filters")), m.textContent = d("library", "Clear all"), r.append(v, m), r;
}
function Qp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = J(e.settingsUrl || ""), i = J(e.metadataExportUrl || ""), o = J(e.batchTagUrl || "/apps/library/bulk/tags"), l = J(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), c = J(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = J(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), m = document.createElement("div");
  m.className = "library-vue-catalogue library-vue-fallback", m.dataset.vueFallback = "true";
  const x = document.createElement("section");
  x.className = "library-panel", x.setAttribute("aria-labelledby", "library-catalogue-heading");
  const M = document.createElement("div");
  M.className = "library-catalogue-header";
  const j = document.createElement("div"), K = document.createElement("h2");
  K.id = "library-catalogue-heading", K.textContent = d("library", "Publication catalogue");
  const $ = document.createElement("p");
  $.className = "library-muted", $.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), j.append(K, $);
  const Y = document.createElement("nav");
  if (Y.className = "library-catalogue-toolbar", Y.setAttribute("aria-label", d("library", "Library actions")), s) {
    const S = document.createElement("a");
    S.href = s, S.className = "button secondary", S.setAttribute("aria-label", "Open Library settings"), S.textContent = d("library", "Settings"), Y.appendChild(S);
  }
  if (i) {
    const S = document.createElement("a");
    S.href = i, S.className = "button secondary", S.setAttribute("aria-label", "Export corrected metadata"), S.textContent = d("library", "Export corrected metadata"), Y.appendChild(S);
  }
  if (e.metadataSidecarManifestUrl) {
    const S = document.createElement("a");
    S.href = e.metadataSidecarManifestUrl, S.className = "button secondary", S.setAttribute("aria-label", "Export sidecar manifest"), S.textContent = d("library", "Sidecar manifest"), Y.appendChild(S);
  }
  if (e.metadataSidecarBundleUrl) {
    const S = document.createElement("a");
    S.href = e.metadataSidecarBundleUrl, S.className = "button secondary", S.setAttribute("aria-label", "Export sidecar ZIP"), S.textContent = d("library", "Sidecar ZIP"), Y.appendChild(S);
  }
  M.append(j, Y), x.appendChild(M), x.appendChild(Zp(e, r));
  const z = document.createElement("details");
  z.className = "library-filter-panel";
  const L = document.createElement("summary");
  L.className = "library-filter-panel-summary", L.textContent = d("library", "Show catalogue filters"), z.append(L, Jp(e, r)), x.appendChild(z);
  const W = document.createElement("p");
  W.className = "library-muted library-filter-result-summary", W.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const k = document.createElement("a");
  k.href = "?", k.textContent = ` ${d("library", "Clear all filters")}`, W.appendChild(k), x.appendChild(W);
  const ne = document.createElement("details");
  ne.className = "library-batch-actions";
  const Ee = document.createElement("summary");
  Ee.textContent = `${d("library", "Batch actions for current results")} (${r.total ?? n.length} ${d("library", "Current filter result")})`;
  const de = document.createElement("form");
  de.method = "post", de.action = o, de.className = "library-batch-tag-form";
  const ke = Dn(e);
  ke && de.appendChild(ke);
  for (const [S, b] of Object.entries(e.activeFilters || {})) {
    if (J(b).trim() === "") continue;
    const E = document.createElement("input");
    E.type = "hidden", E.name = S, E.value = J(b), de.appendChild(E);
  }
  const ge = document.createElement("label");
  ge.textContent = d("library", "Apply Nextcloud tag to current results");
  const ve = document.createElement("input");
  ve.type = "text", ve.name = "nextcloudTagName", ve.placeholder = "batch-review", ge.appendChild(ve);
  const je = document.createElement("button");
  je.type = "submit", je.className = "button secondary", je.textContent = d("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("p");
  lt.className = "library-muted", lt.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), de.append(ge, je, lt);
  const we = document.createElement("form");
  we.method = "post", we.action = l, we.className = "library-batch-tag-remove-form";
  const ft = Dn(e);
  ft && we.appendChild(ft);
  for (const [S, b] of Object.entries(e.activeFilters || {})) {
    if (J(b).trim() === "") continue;
    const E = document.createElement("input");
    E.type = "hidden", E.name = S, E.value = J(b), we.appendChild(E);
  }
  const Ke = document.createElement("label");
  Ke.textContent = d("library", "Nextcloud tag");
  const ue = document.createElement("input");
  ue.type = "text", ue.name = "nextcloudTagName", ue.setAttribute("list", "library-nextcloud-tag-suggestions"), ue.placeholder = d("library", "e.g. Review"), ue.autocomplete = "off", Ke.appendChild(ue);
  const re = document.createElement("button");
  re.type = "submit", re.className = "button secondary", re.textContent = d("library", "Remove tag from current results");
  const ee = document.createElement("p");
  ee.className = "library-muted", ee.textContent = d("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), we.append(Ke, re, ee);
  const Ae = document.createElement("form");
  Ae.method = "post", Ae.action = c, Ae.className = "library-batch-metadata-reset-form";
  const Ge = Dn(e);
  Ge && Ae.appendChild(Ge);
  for (const [S, b] of Object.entries(e.activeFilters || {})) {
    if (J(b).trim() === "") continue;
    const E = document.createElement("input");
    E.type = "hidden", E.name = S, E.value = J(b), Ae.appendChild(E);
  }
  const $e = document.createElement("input");
  $e.type = "hidden", $e.name = "scannerConflicts", $e.value = "1";
  const Te = document.createElement("button");
  Te.type = "submit", Te.className = "button secondary", Te.textContent = d("library", "Reset filtered metadata");
  const bt = document.createElement("p");
  bt.className = "library-muted", bt.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ae.append($e, Te, bt);
  const Q = document.createElement("form");
  Q.method = "post", Q.action = v, Q.className = "library-batch-cover-refresh-form";
  const Et = Dn(e);
  Et && Q.appendChild(Et);
  for (const [S, b] of Object.entries(e.activeFilters || {})) {
    if (J(b).trim() === "") continue;
    const E = document.createElement("input");
    E.type = "hidden", E.name = S, E.value = J(b), Q.appendChild(E);
  }
  const nt = document.createElement("button");
  nt.type = "submit", nt.className = "button secondary", nt.textContent = d("library", "Request fresh cover previews");
  const dt = document.createElement("p");
  dt.className = "library-muted", dt.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), Q.append(nt, dt), ne.append(Ee, de, we, Ae, Q), x.appendChild(ne);
  const Fe = document.createElement("nav");
  Fe.className = "library-pagination", Fe.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const yt = document.createElement("span");
  yt.className = "library-pagination-range", yt.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, Fe.appendChild(yt), x.appendChild(Fe);
  const Ye = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], pt = document.createElement("details");
  pt.className = Ye.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const f = document.createElement("summary");
  f.className = "library-periodical-groups-summary", f.textContent = d("library", "Show top series and periodicals"), pt.appendChild(f);
  const p = document.createElement("h3");
  p.textContent = Ye.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const _ = document.createElement("p");
  if (_.className = "library-muted", _.textContent = Ye.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), pt.append(p, _), Ye.length > 0) {
    const S = document.createElement("ul");
    for (const b of Ye) {
      const E = document.createElement("li"), N = document.createElement("a");
      N.href = Kp(J(b.publication)), N.textContent = J(b.publication);
      const O = document.createElement("span");
      O.className = "library-muted", O.textContent = `${b.itemCount} items`, E.append(N, O), S.appendChild(E);
    }
    pt.appendChild(S);
  }
  if (x.appendChild(pt), n.length === 0) {
    const S = document.createElement("div"), b = Number(e.rootCount || 0), E = Number(e.enabledRootCount || 0), N = Gp(e);
    S.className = "library-empty-content", (b === 0 || E === 0) && S.classList.add("library-first-run-guidance"), N && b > 0 && E > 0 && S.classList.add("library-filter-empty-state"), S.setAttribute("role", "status");
    const O = document.createElement("h3"), P = document.createElement("p");
    P.className = "library-muted";
    const C = document.createElement("p");
    C.className = "library-empty-actions", b === 0 ? (O.textContent = d("library", "Start with one Library root"), P.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), kn(C, s, "button primary", d("library", "Add a Library root")), Xp(C, d("library", "Run a scan after saving a root"))) : E === 0 ? (O.textContent = d("library", "No enabled Library roots"), P.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), kn(C, s, "button primary", d("library", "Open Library settings"))) : N ? (O.textContent = d("library", "No matches for the current filters"), P.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), kn(C, Yp(), "button secondary", d("library", "Clear search")), kn(C, "?", "button primary", d("library", "Clear all filters"))) : (O.textContent = d("library", "No catalogue items yet"), P.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), kn(C, s, "button primary", d("library", "Run a scan from settings"))), S.append(O, P, C), x.appendChild(S);
  } else {
    const S = document.createElement("div");
    S.className = "library-cover-gallery";
    for (const b of n) {
      const E = document.createElement("article");
      E.className = "library-cover-card";
      const N = document.createElement("a");
      N.className = "library-cover-link", N.href = J(b.openUrl || "#"), N.setAttribute("aria-label", `Read ${J(b.title || "publication")}`);
      const O = document.createElement("img");
      O.className = "library-cover-image", O.src = J(b.coverUrl || ""), O.alt = `Cover for ${J(b.title || "publication")}`, O.loading = "lazy", N.appendChild(O);
      const P = Dn(e), C = document.createElement("form");
      C.method = "post", C.action = J(b.starUrl || ""), C.className = "library-cover-star-form", P && C.appendChild(P);
      const w = document.createElement("input");
      w.type = "hidden", w.name = "returnTo", w.value = "catalogue";
      const y = document.createElement("input");
      y.type = "hidden", y.name = "starred", y.value = b.starred ? "0" : "1";
      const u = document.createElement("button");
      u.type = "submit", u.className = b.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", u.setAttribute("aria-pressed", b.starred ? "true" : "false"), u.setAttribute("aria-label", b.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), u.title = b.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), u.textContent = b.starred ? "★" : "☆", C.append(w, y, u);
      const D = document.createElement("div");
      D.className = "library-cover-summary";
      const B = document.createElement("h3");
      if (B.textContent = J(b.title || "Untitled publication"), D.appendChild(B), b.creators) {
        const Xe = document.createElement("p");
        Xe.className = "library-creator", Xe.textContent = J(b.creators), D.appendChild(Xe);
      }
      const X = document.createElement("dl");
      X.className = "library-cover-detail-list";
      const te = [
        ["Type", J(b.publicationType || "other")],
        ["Format", b.extension ? Sl(b.extension) : ""],
        ["Shelf", b.shelf ? J(b.shelf) : ""]
      ].filter(([, Xe]) => Xe !== "");
      for (const [Xe, Re] of te) {
        const Ue = document.createElement("div");
        Ue.className = "library-cover-detail-chip";
        const Bt = document.createElement("dt");
        Bt.textContent = Xe;
        const Wt = document.createElement("dd");
        Wt.textContent = Re, Ue.append(Bt, Wt), X.appendChild(Ue);
      }
      D.appendChild(X);
      const pe = document.createElement("p"), me = document.createElement("a");
      me.href = J(b.openUrl || "#"), me.textContent = d("library", "Read");
      const Ne = document.createElement("a");
      Ne.href = J(b.filesUrl || "#"), Ne.textContent = d("library", "Show in Files");
      const Le = document.createElement("a");
      Le.href = J(b.downloadUrl || "#"), Le.textContent = d("library", "Download source");
      const Ve = document.createElement("a");
      Ve.href = J(b.detailsUrl || "#"), Ve.textContent = d("library", "Details"), pe.append(me, document.createTextNode(" · "), Ne, document.createTextNode(" · "), Le, document.createTextNode(" · "), Ve), D.appendChild(pe), E.append(N, C, D), S.appendChild(E);
    }
    x.appendChild(S);
  }
  return m.appendChild(x), m;
}
if (_r)
  try {
    lu(Wp, { state: lo }).mount(_r);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), _r.replaceChildren(Qp(lo));
  }
//# sourceMappingURL=library-main.mjs.map
