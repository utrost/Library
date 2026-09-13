// @__NO_SIDE_EFFECTS__
function bc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ze = {}, xa = [], hn = () => {
}, Wd = () => !1, To = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ao = (e) => e.startsWith("onUpdate:"), dt = Object.assign, yc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cp = Object.prototype.hasOwnProperty, Ke = (e, t) => Cp.call(e, t), be = Array.isArray, Ei = (e) => Gr(e) === "[object Map]", da = (e) => Gr(e) === "[object Set]", tu = (e) => Gr(e) === "[object Date]", Ne = (e) => typeof e == "function", tt = (e) => typeof e == "string", Cn = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", qd = (e) => (We(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), Yd = Object.prototype.toString, Gr = (e) => Yd.call(e), Sp = (e) => Gr(e).slice(8, -1), Xd = (e) => Gr(e) === "[object Object]", _c = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dr = /* @__PURE__ */ bc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ko = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ep = /-\w/g, Lt = ko(
  (e) => e.replace(Ep, (t) => t.slice(1).toUpperCase())
), Tp = /\B([A-Z])/g, li = ko(
  (e) => e.replace(Tp, "-$1").toLowerCase()
), Oo = ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), el = ko(
  (e) => e ? `on${Oo(e)}` : ""
), _t = (e, t) => !Object.is(e, t), bs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Zd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, No = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ap = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let nu;
const xo = () => nu || (nu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nn(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? xp(i) : nn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || We(e))
    return e;
}
const kp = /;(?![^(]*\))/g, Op = /:([^]+)/, Np = /\/\*[^]*?\*\//g;
function xp(e) {
  const t = {};
  return e.replace(Np, "").split(kp).forEach((n) => {
    if (n) {
      const i = n.split(Op);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (be(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Es(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Ee(t)), n && (e.style = nn(n)), e;
}
const Lp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rp = /* @__PURE__ */ bc(Lp);
function Jd(e) {
  return !!e || e === "";
}
function Ip(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Oi(e[i], t[i]);
  return n;
}
function iu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Oi(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Oi(e, t) {
  if (e === t) return !0;
  let n = tu(e), i = tu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Cn(e), i = Cn(t), n || i)
    return e === t;
  if (n = be(e), i = be(t), n || i)
    return n && i ? Ip(e, t) : !1;
  if (n = We(e), i = We(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Ei(e), i = Ei(t), n || i || (n = da(e), i = da(t), n || i))
      return n && i ? iu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Oi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Pp(e, t) {
  return e.findIndex((n) => Oi(n, t));
}
const Qd = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : be(e) || We(e) && (e.toString === Yd || !Ne(e.toString)) ? Qd(e) ? p(e.value) : JSON.stringify(e, ef, 2) : String(e), ef = (e, t) => Qd(t) ? ef(e, t.value) : Ei(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[tl(i, r) + " =>"] = a, n),
    {}
  )
} : da(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => tl(n))
} : Cn(t) ? tl(t) : We(t) && !be(t) && !Xd(t) ? String(t) : t, tl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Dp(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let yt;
class Mp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && yt && (yt.active ? (this.parent = yt, this.index = (yt.scopes || (yt.scopes = [])).push(
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].pause();
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
        const a = this.scopes.slice();
        for (t = 0, n = a.length; t < n; t++)
          a[t].resume();
      }
      const i = this.effects.slice();
      for (t = 0, n = i.length; t < n; t++)
        i[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = yt;
      try {
        return yt = this, t();
      } finally {
        yt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = yt, yt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (yt === this)
        yt = this.prevScope;
      else {
        let t = yt;
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
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const a = this.scopes.slice();
        for (n = 0, i = a.length; n < i; n++)
          a[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Fp() {
  return yt;
}
let Qe;
const nl = /* @__PURE__ */ new WeakSet();
class tf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yt && (yt.active ? yt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, nl.has(this) && (nl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || af(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, au(this), rf(this);
    const t = Qe, n = _n;
    Qe = this, _n = !0;
    try {
      return this.fn();
    } finally {
      sf(this), Qe = t, _n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Sc(t);
      this.deps = this.depsTail = void 0, au(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? nl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zl(this) && this.run();
  }
  get dirty() {
    return zl(this);
  }
}
let nf = 0, fr, hr;
function af(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hr, hr = e;
    return;
  }
  e.next = fr, fr = e;
}
function wc() {
  nf++;
}
function Cc() {
  if (--nf > 0)
    return;
  if (hr) {
    let t = hr;
    for (hr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fr; ) {
    let t = fr;
    for (fr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function rf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Sc(i), $p(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function zl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (of(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function of(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kr) || (e.globalVersion = kr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Qe, i = _n;
  Qe = e, _n = !0;
  try {
    rf(e);
    const a = e.fn(e._value);
    (t.version === 0 || _t(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Qe = n, _n = i, sf(e), e.flags &= -3;
  }
}
function Sc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Sc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $p(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _n = !0;
const lf = [];
function ai() {
  lf.push(_n), _n = !1;
}
function ri() {
  const e = lf.pop();
  _n = e === void 0 ? !0 : e;
}
function au(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Qe;
    Qe = void 0;
    try {
      t();
    } finally {
      Qe = n;
    }
  }
}
let kr = 0;
class zp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Qe || !_n || Qe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Qe)
      n = this.activeLink = new zp(Qe, this), Qe.deps ? (n.prevDep = Qe.depsTail, Qe.depsTail.nextDep = n, Qe.depsTail = n) : Qe.deps = Qe.depsTail = n, cf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Qe.depsTail, n.nextDep = void 0, Qe.depsTail.nextDep = n, Qe.depsTail = n, Qe.deps === n && (Qe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, kr++, this.notify(t);
  }
  notify(t) {
    wc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Cc();
    }
  }
}
function cf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        cf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ul = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ Symbol(
  ""
), Bl = /* @__PURE__ */ Symbol(
  ""
), Or = /* @__PURE__ */ Symbol(
  ""
);
function Ot(e, t, n) {
  if (_n && Qe) {
    let i = Ul.get(e);
    i || Ul.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Lo()), a.map = i, a.key = n), a.track();
  }
}
function Xn(e, t, n, i, a, r) {
  const s = Ul.get(e);
  if (!s) {
    kr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (wc(), t === "clear")
    s.forEach(o);
  else {
    const l = be(e), u = l && _c(n);
    if (l && n === "length") {
      const c = Number(i);
      s.forEach((f, b) => {
        (b === "length" || b === Or || !Cn(b) && b >= c) && o(f);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), u && o(s.get(Or)), t) {
        case "add":
          l ? u && o(s.get("length")) : (o(s.get(la)), Ei(e) && o(s.get(Bl)));
          break;
        case "delete":
          l || (o(s.get(la)), Ei(e) && o(s.get(Bl)));
          break;
        case "set":
          Ei(e) && o(s.get(la));
          break;
      }
  }
  Cc();
}
function Sa(e) {
  const t = /* @__PURE__ */ He(e);
  return t === e ? t : (Ot(t, "iterate", Or), /* @__PURE__ */ pn(e) ? t : t.map(Sn));
}
function Ro(e) {
  return Ot(e = /* @__PURE__ */ He(e), "iterate", Or), e;
}
function Rn(e, t) {
  return /* @__PURE__ */ si(e) ? $a(/* @__PURE__ */ ca(e) ? Sn(t) : t) : Sn(t);
}
const Up = {
  __proto__: null,
  [Symbol.iterator]() {
    return il(this, Symbol.iterator, (e) => Rn(this, e));
  },
  concat(...e) {
    return Sa(this).concat(
      ...e.map((t) => be(t) ? Sa(t) : t)
    );
  },
  entries() {
    return il(this, "entries", (e) => (e[1] = Rn(this, e[1]), e));
  },
  every(e, t) {
    return jn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return jn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Rn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return jn(
      this,
      "find",
      e,
      t,
      (n) => Rn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return jn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return jn(
      this,
      "findLast",
      e,
      t,
      (n) => Rn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return jn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return jn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return al(this, "includes", e);
  },
  indexOf(...e) {
    return al(this, "indexOf", e);
  },
  join(e) {
    return Sa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return al(this, "lastIndexOf", e);
  },
  map(e, t) {
    return jn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ya(this, "pop");
  },
  push(...e) {
    return Ya(this, "push", e);
  },
  reduce(e, ...t) {
    return ru(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ru(this, "reduceRight", e, t);
  },
  shift() {
    return Ya(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return jn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ya(this, "splice", e);
  },
  toReversed() {
    return Sa(this).toReversed();
  },
  toSorted(e) {
    return Sa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Sa(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ya(this, "unshift", e);
  },
  values() {
    return il(this, "values", (e) => Rn(this, e));
  }
};
function il(e, t, n) {
  const i = Ro(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ pn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Bp = Array.prototype;
function jn(e, t, n, i, a, r) {
  const s = Ro(e), o = s !== e && !/* @__PURE__ */ pn(e), l = s[t];
  if (l !== Bp[t]) {
    const f = l.apply(e, r);
    return o ? Sn(f) : f;
  }
  let u = n;
  s !== e && (o ? u = function(f, b) {
    return n.call(this, Rn(e, f), b, e);
  } : n.length > 2 && (u = function(f, b) {
    return n.call(this, f, b, e);
  }));
  const c = l.call(s, u, i);
  return o && a ? a(c) : c;
}
function ru(e, t, n, i) {
  const a = Ro(e), r = a !== e && !/* @__PURE__ */ pn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(u, c, f) {
    return o && (o = !1, u = Rn(e, u)), n.call(this, u, Rn(e, c), f, e);
  }) : n.length > 3 && (s = function(u, c, f) {
    return n.call(this, u, c, f, e);
  }));
  const l = a[t](s, ...i);
  return o ? Rn(e, l) : l;
}
function al(e, t, n) {
  const i = /* @__PURE__ */ He(e);
  Ot(i, "iterate", Or);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ac(n[0]) ? (n[0] = /* @__PURE__ */ He(n[0]), i[t](...n)) : a;
}
function Ya(e, t, n = []) {
  ai(), wc();
  const i = (/* @__PURE__ */ He(e))[t].apply(e, n);
  return Cc(), ri(), i;
}
const Hp = /* @__PURE__ */ bc("__proto__,__v_isRef,__isVue"), uf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Cn)
);
function jp(e) {
  Cn(e) || (e = String(e));
  const t = /* @__PURE__ */ He(this);
  return Ot(t, "has", e), t.hasOwnProperty(e);
}
class df {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (a ? r ? Qp : vf : r ? pf : hf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = be(t);
    if (!a) {
      let l;
      if (s && (l = Up[n]))
        return l;
      if (n === "hasOwnProperty")
        return jp;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Rt(t) ? t : i
    );
    if ((Cn(n) ? uf.has(n) : Hp(n)) || (a || Ot(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Rt(o)) {
      const l = s && _c(n) ? o : o.value;
      return a && We(l) ? /* @__PURE__ */ Nr(l) : l;
    }
    return We(o) ? a ? /* @__PURE__ */ Nr(o) : /* @__PURE__ */ $t(o) : o;
  }
}
class ff extends df {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = be(t) && _c(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ si(r);
      if (!/* @__PURE__ */ pn(i) && !/* @__PURE__ */ si(i) && (r = /* @__PURE__ */ He(r), i = /* @__PURE__ */ He(i)), !s && /* @__PURE__ */ Rt(r) && !/* @__PURE__ */ Rt(i))
        return u || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ke(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Rt(t) ? t : a
    );
    return t === /* @__PURE__ */ He(a) && l && (o ? _t(i, r) && Xn(t, "set", n, i) : Xn(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ke(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && Xn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Cn(n) || !uf.has(n)) && Ot(t, "has", n), i;
  }
  ownKeys(t) {
    return Ot(
      t,
      "iterate",
      be(t) ? "length" : la
    ), Reflect.ownKeys(t);
  }
}
class Vp extends df {
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
const Gp = /* @__PURE__ */ new ff(), Kp = /* @__PURE__ */ new Vp(), Wp = /* @__PURE__ */ new ff(!0);
const Hl = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function qp(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ He(a), s = Ei(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, u = a[e](...i), c = n ? Hl : t ? $a : Sn;
    return !t && Ot(
      r,
      "iterate",
      l ? Bl : la
    ), dt(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: f, done: b } = u.next();
          return b ? { value: f, done: b } : {
            value: o ? [c(f[0]), c(f[1])] : c(f),
            done: b
          };
        }
      }
    );
  };
}
function rs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yp(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ He(r), o = /* @__PURE__ */ He(a);
      e || (_t(a, o) && Ot(s, "get", a), Ot(s, "get", o));
      const { has: l } = as(s), u = t ? Hl : e ? $a : Sn;
      if (l.call(s, a))
        return u(r.get(a));
      if (l.call(s, o))
        return u(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ot(/* @__PURE__ */ He(a), "iterate", la), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ He(r), o = /* @__PURE__ */ He(a);
      return e || (_t(a, o) && Ot(s, "has", a), Ot(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ He(o), u = t ? Hl : e ? $a : Sn;
      return !e && Ot(l, "iterate", la), o.forEach((c, f) => a.call(r, u(c), u(f), s));
    }
  };
  return dt(
    n,
    e ? {
      add: rs("add"),
      set: rs("set"),
      delete: rs("delete"),
      clear: rs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ He(this), s = as(r), o = /* @__PURE__ */ He(a), l = !t && !/* @__PURE__ */ pn(a) && !/* @__PURE__ */ si(a) ? o : a;
        return s.has.call(r, l) || _t(a, l) && s.has.call(r, a) || _t(o, l) && s.has.call(r, o) || (r.add(l), Xn(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ pn(r) && !/* @__PURE__ */ si(r) && (r = /* @__PURE__ */ He(r));
        const s = /* @__PURE__ */ He(this), { has: o, get: l } = as(s);
        let u = o.call(s, a);
        u || (a = /* @__PURE__ */ He(a), u = o.call(s, a));
        const c = l.call(s, a);
        return s.set(a, r), u ? _t(r, c) && Xn(s, "set", a, r) : Xn(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ He(this), { has: s, get: o } = as(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ He(a), l = s.call(r, a)), o && o.call(r, a);
        const u = r.delete(a);
        return l && Xn(r, "delete", a, void 0), u;
      },
      clear() {
        const a = /* @__PURE__ */ He(this), r = a.size !== 0, s = a.clear();
        return r && Xn(
          a,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = qp(a, e, t);
  }), n;
}
function Ec(e, t) {
  const n = Yp(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ke(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Xp = {
  get: /* @__PURE__ */ Ec(!1, !1)
}, Zp = {
  get: /* @__PURE__ */ Ec(!1, !0)
}, Jp = {
  get: /* @__PURE__ */ Ec(!0, !1)
};
const hf = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), vf = /* @__PURE__ */ new WeakMap(), Qp = /* @__PURE__ */ new WeakMap();
function ev(e) {
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
function $t(e) {
  return /* @__PURE__ */ si(e) ? e : Tc(
    e,
    !1,
    Gp,
    Xp,
    hf
  );
}
// @__NO_SIDE_EFFECTS__
function tv(e) {
  return Tc(
    e,
    !1,
    Wp,
    Zp,
    pf
  );
}
// @__NO_SIDE_EFFECTS__
function Nr(e) {
  return Tc(
    e,
    !0,
    Kp,
    Jp,
    vf
  );
}
function Tc(e, t, n, i, a) {
  if (!We(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = ev(Sp(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ca(e) {
  return /* @__PURE__ */ si(e) ? /* @__PURE__ */ ca(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function si(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ac(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ He(t) : e;
}
function nv(e) {
  return !Ke(e, "__v_skip") && Object.isExtensible(e) && Zd(e, "__v_skip", !0), e;
}
const Sn = (e) => We(e) ? /* @__PURE__ */ $t(e) : e, $a = (e) => We(e) ? /* @__PURE__ */ Nr(e) : e;
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return mf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function gf(e) {
  return mf(e, !0);
}
function mf(e, t) {
  return /* @__PURE__ */ Rt(e) ? e : new iv(e, t);
}
class iv {
  constructor(t, n) {
    this.dep = new Lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ He(t), this._value = n ? t : Sn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ pn(t) || /* @__PURE__ */ si(t);
    t = i ? t : /* @__PURE__ */ He(t), _t(t, n) && (this._rawValue = t, this._value = i ? t : Sn(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Rt(e) ? e.value : e;
}
function ei(e) {
  return Ne(e) ? e() : m(e);
}
const av = {
  get: (e, t, n) => t === "__v_raw" ? e : m(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Rt(a) && !/* @__PURE__ */ Rt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function bf(e) {
  return /* @__PURE__ */ ca(e) ? e : new Proxy(e, av);
}
class rv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Lo(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function sv(e) {
  return new rv(e);
}
class ov {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Qe !== this)
      return af(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return of(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function lv(e, t, n = !1) {
  let i, a;
  return Ne(e) ? i = e : (i = e.get, a = e.set), new ov(i, a, n);
}
const ss = {}, Ts = /* @__PURE__ */ new WeakMap();
let Ji;
function cv(e, t = !1, n = Ji) {
  if (n) {
    let i = Ts.get(n);
    i || Ts.set(n, i = []), i.push(e);
  }
}
function uv(e, t, n = ze) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, u = (F) => a ? F : /* @__PURE__ */ pn(F) || a === !1 || a === 0 ? Zn(F, 1) : Zn(F);
  let c, f, b, C, N = !1, S = !1;
  if (/* @__PURE__ */ Rt(e) ? (f = () => e.value, N = /* @__PURE__ */ pn(e)) : /* @__PURE__ */ ca(e) ? (f = () => u(e), N = !0) : be(e) ? (S = !0, N = e.some((F) => /* @__PURE__ */ ca(F) || /* @__PURE__ */ pn(F)), f = () => e.map((F) => {
    if (/* @__PURE__ */ Rt(F))
      return F.value;
    if (/* @__PURE__ */ ca(F))
      return u(F);
    if (Ne(F))
      return l ? l(F, 2) : F();
  })) : Ne(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (b) {
      ai();
      try {
        b();
      } finally {
        ri();
      }
    }
    const F = Ji;
    Ji = c;
    try {
      return l ? l(e, 3, [C]) : e(C);
    } finally {
      Ji = F;
    }
  } : f = hn, t && a) {
    const F = f, le = a === !0 ? 1 / 0 : a;
    f = () => Zn(F(), le);
  }
  const O = Fp(), I = () => {
    c.stop(), O && O.active && yc(O.effects, c);
  };
  if (r && t) {
    const F = t;
    t = (...le) => {
      const ce = F(...le);
      return I(), ce;
    };
  }
  let D = S ? new Array(e.length).fill(ss) : ss;
  const j = (F) => {
    if (!(!(c.flags & 1) || !c.dirty && !F))
      if (t) {
        const le = c.run();
        if (F || a || N || (S ? le.some((ce, U) => _t(ce, D[U])) : _t(le, D))) {
          b && b();
          const ce = Ji;
          Ji = c;
          try {
            const U = [
              le,
              // pass undefined as the old value when it's changed for the first time
              D === ss ? void 0 : S && D[0] === ss ? [] : D,
              C
            ];
            D = le, l ? l(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            Ji = ce;
          }
        }
      } else
        c.run();
  };
  return o && o(j), c = new tf(f), c.scheduler = s ? () => s(j, !1) : j, C = (F) => cv(F, !1, c), b = c.onStop = () => {
    const F = Ts.get(c);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const le of F) le();
      Ts.delete(c);
    }
  }, t ? i ? j(!0) : D = c.run() : s ? s(j.bind(null, !0), !0) : c.run(), I.pause = c.pause.bind(c), I.resume = c.resume.bind(c), I.stop = I, I;
}
function Zn(e, t = 1 / 0, n) {
  if (t <= 0 || !We(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Rt(e))
    Zn(e.value, t, n);
  else if (be(e))
    for (let i = 0; i < e.length; i++)
      Zn(e[i], t, n);
  else if (da(e) || Ei(e))
    e.forEach((i) => {
      Zn(i, t, n);
    });
  else if (Xd(e)) {
    for (const i in e)
      Zn(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Zn(e[i], t, n);
  }
  return e;
}
function Kr(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Io(a, t, n);
  }
}
function vn(e, t, n, i) {
  if (Ne(e)) {
    const a = Kr(e, t, n, i);
    return a && qd(a) && a.catch((r) => {
      Io(r, t, n);
    }), a;
  }
  if (be(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(vn(e[r], t, n, i));
    return a;
  }
}
function Io(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ze;
  if (t) {
    let o = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, u) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      ai(), Kr(r, null, 10, [
        e,
        l,
        u
      ]), ri();
      return;
    }
  }
  dv(e, n, a, i, s);
}
function dv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const zt = [];
let Nn = -1;
const La = [];
let Ci = null, ka = 0;
const yf = /* @__PURE__ */ Promise.resolve();
let As = null;
function ti(e) {
  const t = As || yf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fv(e) {
  let t = Nn + 1, n = zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = zt[i], r = xr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function kc(e) {
  if (!(e.flags & 1)) {
    const t = xr(e), n = zt[zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xr(n) ? zt.push(e) : zt.splice(fv(t), 0, e), e.flags |= 1, _f();
  }
}
function _f() {
  As || (As = yf.then(Sf));
}
function wf(e) {
  if (!be(e))
    Ci && e.id === -1 ? Ci.splice(ka + 1, 0, e) : e.flags & 1 || (La.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      La.push(e[t]);
  _f();
}
function su(e, t, n = Nn + 1) {
  for (; n < zt.length; n++) {
    const i = zt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      zt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Cf(e) {
  if (La.length) {
    const t = [...new Set(La)].sort(
      (n, i) => xr(n) - xr(i)
    );
    if (La.length = 0, Ci) {
      for (let n = 0; n < t.length; n++)
        Ci.push(t[n]);
      return;
    }
    for (Ci = t, ka = 0; ka < Ci.length; ka++) {
      const n = Ci[ka];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ci = null, ka = 0;
  }
}
const xr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sf(e) {
  try {
    for (Nn = 0; Nn < zt.length; Nn++) {
      const t = zt[Nn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nn < zt.length; Nn++) {
      const t = zt[Nn];
      t && (t.flags &= -2);
    }
    Nn = -1, zt.length = 0, Cf(), As = null, (zt.length || La.length) && Sf();
  }
}
let Ct = null, Po = null;
function ks(e) {
  const t = Ct;
  return Ct = e, Po = e && e.type.__scopeId || null, t;
}
function hv(e) {
  Po = e;
}
function pv() {
  Po = null;
}
const vv = (e) => Oe;
function Oe(e, t = Ct, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Rs(-1);
    const r = ks(t), s = ni.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ni.length; l > s; l--) Pc();
      ks(r), i._d && Rs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function nt(e, t) {
  if (Ct === null)
    return e;
  const n = Uo(Ct), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = ze] = t[a];
    r && (Ne(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Zn(s), i.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function Ki(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (ai(), vn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), ri());
  }
}
function un(e, t) {
  if (xt) {
    let n = xt.provides;
    const i = xt.parent && xt.parent.provides;
    i === n && (n = xt.provides = Object.create(i)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const i = ha();
  if (i || Ia) {
    let a = Ia ? Ia._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ne(t) ? t.call(i && i.proxy) : t;
  }
}
const gv = /* @__PURE__ */ Symbol.for("v-scx"), mv = () => Nt(gv);
function bv(e, t) {
  return Do(e, null, t);
}
function yv(e, t) {
  return Do(
    e,
    null,
    { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return Do(e, t, n);
}
function Do(e, t, n = ze) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = dt({}, n), l = t && i || !t && r !== "post";
  let u;
  if (Mr) {
    if (r === "sync") {
      const C = mv();
      u = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!l) {
      const C = () => {
      };
      return C.stop = hn, C.resume = hn, C.pause = hn, C;
    }
  }
  const c = xt;
  o.call = (C, N, S) => vn(C, c, N, S);
  let f = !1;
  r === "post" ? o.scheduler = (C) => {
    Ft(C, c && c.suspense);
  } : r !== "sync" && (f = !0, o.scheduler = (C, N) => {
    N ? C() : kc(C);
  }), o.augmentJob = (C) => {
    t && (C.flags |= 4), f && (C.flags |= 2, c && (C.id = c.uid, C.i = c));
  };
  const b = uv(e, t, o);
  return Mr && (u ? u.push(b) : l && b()), b;
}
function _v(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? Ef(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Ne(t) ? r = t : (r = t.handler, n = t);
  const s = Yr(this), o = Do(a, r.bind(i), n);
  return s(), o;
}
function Ef(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const yi = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ Symbol("_vte"), Mo = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), wv = (e) => e && (e.defer || e.defer === ""), ou = (e) => typeof SVGElement < "u" && e instanceof SVGElement, lu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, jl = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, Cv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, u) {
    const {
      mc: c,
      pc: f,
      pbc: b,
      o: { insert: C, querySelector: N, createText: S, createComment: O, parentNode: I }
    } = u, D = ta(t.props);
    let { dynamicChildren: j } = t;
    const F = (U, G, X) => {
      U.shapeFlag & 16 && c(
        U.children,
        G,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (U = t) => {
      const G = ta(U.props), X = U.target = jl(U.props, N), re = Vl(X, U, S, C);
      X && (s !== "svg" && ou(X) ? s = "svg" : s !== "mathml" && lu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), G || (F(U, X, re), rr(U, !1)));
    }, ce = (U) => {
      const G = () => {
        if (yi.get(U) === G) {
          if (yi.delete(U), ta(U.props)) {
            const X = I(U.el) || n;
            F(U, X, U.anchor), rr(U, !0);
          }
          le(U);
        }
      };
      yi.set(U, G), Ft(G, r);
    };
    if (e == null) {
      const U = t.el = S(""), G = t.anchor = S("");
      if (C(U, n, i), C(G, n, i), wv(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      D && (F(t, n, G), rr(t, !0)), le();
    } else {
      t.el = e.el;
      const U = t.anchor = e.anchor, G = yi.get(e);
      if (G) {
        G.flags |= 8, yi.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, re = t.targetAnchor = e.targetAnchor, ue = ta(e.props), te = ue ? n : X, ie = ue ? U : re;
      if (s === "svg" || ou(X) ? s = "svg" : (s === "mathml" || lu(X)) && (s = "mathml"), j ? (b(
        e.dynamicChildren,
        j,
        te,
        a,
        r,
        s,
        o
      ), Ic(e, t, !0)) : l || f(
        e,
        t,
        te,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), D)
        ue ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : os(
          t,
          n,
          U,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = jl(t.props, N);
        P && (t.target = P, os(
          t,
          P,
          null,
          u,
          0
        ));
      } else ue && os(
        t,
        X,
        re,
        u,
        1
      );
      rr(t, D);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: b
    } = e, C = ta(b), N = r || !C, S = yi.get(e);
    if (S && (S.flags |= 8, yi.delete(e)), f && (a(u), a(c)), r && a(l), !S && (C || f) && s & 16)
      for (let O = 0; O < o.length; O++) {
        const I = o[O];
        i(
          I,
          t,
          n,
          N,
          !!I.dynamicChildren
        );
      }
  },
  move: os,
  hydrate: Sv
};
function os(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: u, props: c } = e, f = r === 2;
  if (f && i(s, t, n), !yi.has(e) && (!f || ta(c)) && l & 16)
    for (let b = 0; b < u.length; b++)
      a(
        u[b],
        t,
        n,
        2
      );
  f && i(o, t, n);
}
function Sv(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: u, createText: c }
}, f) {
  function b(O, I) {
    let D = I;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor")
          t.targetStart = D;
        else if (D.data === "teleport anchor") {
          t.targetAnchor = D, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      D = s(D);
    }
  }
  function C(O, I) {
    I.anchor = f(
      s(O),
      I,
      o(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = jl(
    t.props,
    l
  ), S = ta(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (S ? (C(e, t), b(N, O), t.targetAnchor || Vl(
      N,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === N ? e : null
    )) : (t.anchor = s(e), b(N, O), t.targetAnchor || Vl(N, t, c, u), f(
      O && s(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), rr(t, S);
  } else S && t.shapeFlag & 16 && (C(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Af = Cv;
function rr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Vl(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Tf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const dn = /* @__PURE__ */ Symbol("_leaveCb"), Xa = /* @__PURE__ */ Symbol("_enterCb");
function Ev() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Li(() => {
    e.isMounted = !0;
  }), za(() => {
    e.isUnmounting = !0;
  }), e;
}
const sn = [Function, Array], kf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: sn,
  onEnter: sn,
  onAfterEnter: sn,
  onEnterCancelled: sn,
  // leave
  onBeforeLeave: sn,
  onLeave: sn,
  onAfterLeave: sn,
  onLeaveCancelled: sn,
  // appear
  onBeforeAppear: sn,
  onAppear: sn,
  onAfterAppear: sn,
  onAppearCancelled: sn
}, Of = (e) => {
  const t = e.subTree;
  return t.component ? Of(t.component) : t;
}, Tv = {
  name: "BaseTransition",
  props: kf,
  setup(e, { slots: t }) {
    const n = ha(), i = Ev();
    return () => {
      const a = t.default && Lf(t.default(), !0), r = a && a.length ? Nf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? q() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ He(e), { mode: o } = s;
      if (i.isLeaving)
        return rl(r);
      const l = Os(r);
      if (!l)
        return rl(r);
      let u = Gl(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      l.type !== wt && Lr(l, u);
      let c = n.subTree && Os(n.subTree);
      if (c && c.type !== wt && !na(c, l) && Of(n).type !== wt) {
        let f = Gl(
          c,
          s,
          i,
          n
        );
        if (Lr(c, f), o === "out-in" && l.type !== wt)
          return i.isLeaving = !0, f.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, rl(r);
        o === "in-out" && l.type !== wt ? f.delayLeave = (b, C, N) => {
          const S = xf(
            i,
            c
          );
          S[String(c.key)] = c, b[dn] = () => {
            C(), b[dn] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            N(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Nf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== wt) {
        t = n;
        break;
      }
  }
  return t;
}
const Av = Tv;
function xf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Gl(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: b,
    onLeave: C,
    onAfterLeave: N,
    onLeaveCancelled: S,
    onBeforeAppear: O,
    onAppear: I,
    onAfterAppear: D,
    onAppearCancelled: j
  } = t, F = String(e.key), le = xf(n, e), ce = (X, re) => {
    X && vn(
      X,
      i,
      9,
      re
    );
  }, U = (X, re) => {
    const ue = re[1];
    ce(X, re), be(X) ? X.every((te) => te.length <= 1) && ue() : X.length <= 1 && ue();
  }, G = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let re = l;
      if (!n.isMounted)
        if (r)
          re = O || l;
        else
          return;
      X[dn] && X[dn](
        !0
        /* cancelled */
      );
      const ue = le[F];
      ue && na(e, ue) && ue.el[dn] && ue.el[dn](), ce(re, [X]);
    },
    enter(X) {
      if (le[F] === e) return;
      let re = u, ue = c, te = f;
      if (!n.isMounted)
        if (r)
          re = I || u, ue = D || c, te = j || f;
        else
          return;
      let ie = !1;
      X[Xa] = (M) => {
        ie || (ie = !0, M ? ce(te, [X]) : ce(ue, [X]), G.delayedLeave && G.delayedLeave(), X[Xa] = void 0);
      };
      const P = X[Xa].bind(null, !1);
      re ? U(re, [X, P]) : P();
    },
    leave(X, re) {
      const ue = String(e.key);
      if (X[Xa] && X[Xa](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return re();
      ce(b, [X]);
      let te = !1;
      X[dn] = (P) => {
        te || (te = !0, re(), P ? ce(S, [X]) : ce(N, [X]), X[dn] = void 0, le[ue] === e && delete le[ue]);
      };
      const ie = X[dn].bind(null, !1);
      le[ue] = e, C ? U(C, [X, ie]) : ie();
    },
    clone(X) {
      const re = Gl(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(re), re;
    }
  };
  return G;
}
function rl(e) {
  if (Fo(e))
    return e = Ni(e), e.children = null, e;
}
function Os(e) {
  if (!Fo(e))
    return Mo(e.type) && e.children ? Nf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ne(n.default))
      return n.default();
  }
}
function Lr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Lr(
      Mo(n.type) && Os(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ve ? (s.patchFlag & 128 && a++, i = i.concat(
      Lf(s.children, t, o)
    )) : (t || s.type !== wt) && i.push(o != null ? Ni(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function St(e, t) {
  return Ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    dt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function kv(e) {
  const t = ha(), n = /* @__PURE__ */ gf(null);
  if (t) {
    const a = t.refs === ze ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function cu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ns = /* @__PURE__ */ new WeakMap();
function pr(e, t, n, i, a = !1) {
  if (be(e)) {
    e.forEach(
      (S, O) => pr(
        S,
        t && (be(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ra(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && pr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Uo(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, u = t && t.r, c = o.refs === ze ? o.refs = {} : o.refs, f = o.setupState, b = /* @__PURE__ */ He(f), C = f === ze ? Wd : (S) => cu(c, S) ? !1 : Ke(b, S), N = (S, O) => !(O && cu(c, O));
  if (u != null && u !== l) {
    if (uu(t), tt(u))
      c[u] = null, C(u) && (f[u] = null);
    else if (/* @__PURE__ */ Rt(u)) {
      const S = t;
      N(u, S.k) && (u.value = null), S.k && (c[S.k] = null);
    }
  }
  if (Ne(l))
    Kr(l, o, 12, [s, c]);
  else {
    const S = tt(l), O = /* @__PURE__ */ Rt(l);
    if (S || O) {
      const I = () => {
        if (e.f) {
          const D = S ? C(l) ? f[l] : c[l] : N() || !e.k ? l.value : c[e.k];
          if (a)
            be(D) && yc(D, r);
          else if (be(D))
            D.includes(r) || D.push(r);
          else if (S)
            c[l] = [r], C(l) && (f[l] = c[l]);
          else {
            const j = [r];
            N(l, e.k) && (l.value = j), e.k && (c[e.k] = j);
          }
        } else S ? (c[l] = s, C(l) && (f[l] = s)) : O && (N(l, e.k) && (l.value = s), e.k && (c[e.k] = s));
      };
      if (s) {
        const D = () => {
          I(), Ns.delete(e);
        };
        D.id = -1, Ns.set(e, D), Ft(D, n);
      } else
        uu(e), I();
    }
  }
}
function uu(e) {
  const t = Ns.get(e);
  t && (t.flags |= 8, Ns.delete(e));
}
xo().requestIdleCallback;
xo().cancelIdleCallback;
const Ra = (e) => !!e.type.__asyncLoader, Fo = (e) => e.type.__isKeepAlive;
function Ov(e, t) {
  If(e, "a", t);
}
function Nv(e, t) {
  If(e, "da", t);
}
function If(e, t, n = xt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if ($o(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Fo(a.parent.vnode) && xv(i, t, n, a), a = a.parent;
  }
}
function xv(e, t, n, i) {
  const a = $o(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Wr(() => {
    yc(i[t], a);
  }, n);
}
function $o(e, t, n = xt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ai();
      const o = Yr(n), l = vn(t, n, e, s);
      return o(), ri(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const ci = (e) => (t, n = xt) => {
  (!Mr || e === "sp") && $o(e, (...i) => t(...i), n);
}, Pf = ci("bm"), Li = ci("m"), Df = ci(
  "bu"
), Lv = ci("u"), za = ci(
  "bum"
), Wr = ci("um"), Rv = ci(
  "sp"
), Iv = ci("rtg"), Pv = ci("rtc");
function Dv(e, t = xt) {
  $o("ec", e, t);
}
const Oc = "components", Mv = "directives";
function Fe(e, t) {
  return xc(Oc, e, !0, t) || e;
}
const Mf = /* @__PURE__ */ Symbol.for("v-ndc");
function Nc(e) {
  return tt(e) ? xc(Oc, e, !1) || e : e || Mf;
}
function du(e) {
  return xc(Mv, e);
}
function xc(e, t, n = !0, i = !1) {
  const a = Ct || xt;
  if (a) {
    const r = a.type;
    if (e === Oc) {
      const o = bg(
        r,
        !1
      );
      if (o && (o === t || o === Lt(t) || o === Oo(Lt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      fu(a[e] || r[e], t) || // global registration
      fu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function fu(e, t) {
  return e && (e[t] || e[Lt(t)] || e[Oo(Lt(t))]);
}
function Be(e, t, n, i) {
  let a;
  const r = n, s = be(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ ca(e);
    let l = !1, u = !1;
    o && (l = !/* @__PURE__ */ pn(e), u = /* @__PURE__ */ si(e), e = Ro(e)), a = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      a[c] = t(
        l ? u ? $a(Sn(e[c])) : Sn(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (We(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const c = o[l];
        a[l] = t(e[c], c, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Le(e, t, n, i, a, r) {
  if (n == null && (n = {}), Ct.ce || Ct.parent && Ra(Ct.parent) && Ct.parent.ce) {
    const u = n, c = Object.keys(u).length > 0;
    return t !== "default" && (u.name = t), _(), De(
      ve,
      null,
      [me("slot", u, i && i())],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ni.length;
  _();
  let l;
  try {
    const u = s && Ff(s(n)), c = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    u && u.key;
    l = De(
      ve,
      {
        key: (c && !Cn(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!u && i ? "_fb" : "")
      },
      u || (i ? i() : []),
      u && e._ === 1 ? 64 : -2
    );
  } catch (u) {
    for (let c = ni.length; c > o; c--) Pc();
    throw u;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Ff(e) {
  return e.some((t) => Ir(t) ? !(t.type === wt || t.type === ve && !Ff(t.children)) : !0) ? e : null;
}
const Kl = (e) => e ? rh(e) ? Uo(e) : Kl(e.parent) : null, vr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Kl(e.parent),
    $root: (e) => Kl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Uf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => _v.bind(e)
  })
), sl = (e, t) => e !== ze && !e.__isScriptSetup && Ke(e, t), Fv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (sl(i, t))
          return s[t] = 1, i[t];
        if (a !== ze && Ke(a, t))
          return s[t] = 2, a[t];
        if (Ke(r, t))
          return s[t] = 3, r[t];
        if (n !== ze && Ke(n, t))
          return s[t] = 4, n[t];
        Wl && (s[t] = 0);
      }
    }
    const u = vr[t];
    let c, f;
    if (u)
      return t === "$attrs" && Ot(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ze && Ke(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Ke(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return sl(a, t) ? (a[t] = n, !0) : i !== ze && Ke(i, t) ? (i[t] = n, !0) : Ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== ze && o[0] !== "$" && Ke(e, o) || sl(t, o) || Ke(r, o) || Ke(i, o) || Ke(vr, o) || Ke(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function $v() {
  return $f().slots;
}
function zv() {
  return $f().attrs;
}
function $f(e) {
  const t = ha();
  return t.setupContext || (t.setupContext = oh(t));
}
function xs(e) {
  return be(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Uv(e, t) {
  return !e || !t ? e || t : be(e) && be(t) ? e.concat(t) : dt({}, xs(e), xs(t));
}
let Wl = !0;
function Bv(e) {
  const t = Uf(e), n = e.proxy, i = e.ctx;
  Wl = !1, t.beforeCreate && hu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: b,
    beforeUpdate: C,
    updated: N,
    activated: S,
    deactivated: O,
    beforeDestroy: I,
    beforeUnmount: D,
    destroyed: j,
    unmounted: F,
    render: le,
    renderTracked: ce,
    renderTriggered: U,
    errorCaptured: G,
    serverPrefetch: X,
    // public API
    expose: re,
    inheritAttrs: ue,
    // assets
    components: te,
    directives: ie,
    filters: P
  } = t;
  if (u && Hv(u, i, null), s)
    for (const ae in s) {
      const Z = s[ae];
      Ne(Z) && (i[ae] = Z.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    We(ae) && (e.data = /* @__PURE__ */ $t(ae));
  }
  if (Wl = !0, r)
    for (const ae in r) {
      const Z = r[ae], fe = Ne(Z) ? Z.bind(n, n) : Ne(Z.get) ? Z.get.bind(n, n) : hn, he = !Ne(Z) && Ne(Z.set) ? Z.set.bind(n) : hn, Se = ee({
        get: fe,
        set: he
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (ye) => Se.value = ye
      });
    }
  if (o)
    for (const ae in o)
      zf(o[ae], i, n, ae);
  if (l) {
    const ae = Ne(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((Z) => {
      un(Z, ae[Z]);
    });
  }
  c && hu(c, e, "c");
  function Y(ae, Z) {
    be(Z) ? Z.forEach((fe) => ae(fe.bind(n))) : Z && ae(Z.bind(n));
  }
  if (Y(Pf, f), Y(Li, b), Y(Df, C), Y(Lv, N), Y(Ov, S), Y(Nv, O), Y(Dv, G), Y(Pv, ce), Y(Iv, U), Y(za, D), Y(Wr, F), Y(Rv, X), be(re))
    if (re.length) {
      const ae = e.exposed || (e.exposed = {});
      re.forEach((Z) => {
        Object.defineProperty(ae, Z, {
          get: () => n[Z],
          set: (fe) => n[Z] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === hn && (e.render = le), ue != null && (e.inheritAttrs = ue), te && (e.components = te), ie && (e.directives = ie), X && Rf(e);
}
function Hv(e, t, n = hn) {
  be(e) && (e = ql(e));
  for (const i in e) {
    const a = e[i];
    let r;
    We(a) ? "default" in a ? r = Nt(
      a.from || i,
      a.default,
      !0
    ) : r = Nt(a.from || i) : r = Nt(a), /* @__PURE__ */ Rt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function hu(e, t, n) {
  vn(
    be(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zf(e, t, n, i) {
  let a = i.includes(".") ? Ef(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    Ne(r) && Wt(a, r);
  } else if (Ne(e))
    Wt(a, e.bind(n));
  else if (We(e))
    if (be(e))
      e.forEach((r) => zf(r, t, n, i));
    else {
      const r = Ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ne(r) && Wt(a, r, e);
    }
}
function Uf(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (u) => Ls(l, u, s, !0)
  ), Ls(l, t, s)), We(t) && r.set(t, l), l;
}
function Ls(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ls(e, r, n, !0), a && a.forEach(
    (s) => Ls(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = jv[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const jv = {
  data: pu,
  props: vu,
  emits: vu,
  // objects
  methods: sr,
  computed: sr,
  // lifecycle
  beforeCreate: Mt,
  created: Mt,
  beforeMount: Mt,
  mounted: Mt,
  beforeUpdate: Mt,
  updated: Mt,
  beforeDestroy: Mt,
  beforeUnmount: Mt,
  destroyed: Mt,
  unmounted: Mt,
  activated: Mt,
  deactivated: Mt,
  errorCaptured: Mt,
  serverPrefetch: Mt,
  // assets
  components: sr,
  directives: sr,
  // watch
  watch: Gv,
  // provide / inject
  provide: pu,
  inject: Vv
};
function pu(e, t) {
  return t ? e ? function() {
    return dt(
      Ne(e) ? e.call(this, this) : e,
      Ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vv(e, t) {
  return sr(ql(e), ql(t));
}
function ql(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sr(e, t) {
  return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vu(e, t) {
  return e ? be(e) && be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : dt(
    /* @__PURE__ */ Object.create(null),
    xs(e),
    xs(t ?? {})
  ) : t;
}
function Gv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = dt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Mt(e[i], t[i]);
  return n;
}
function Bf() {
  return {
    app: null,
    config: {
      isNativeTag: Wd,
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
let Kv = 0;
function Wv(e, t) {
  return function(i, a = null) {
    Ne(i) || (i = dt({}, i)), a != null && !We(a) && (a = null);
    const r = Bf(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const u = r.app = {
      _uid: Kv++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: _g,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return s.has(c) || (c && Ne(c.install) ? (s.add(c), c.install(u, ...f)) : Ne(c) && (s.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (r.components[c] = f, u) : r.components[c];
      },
      directive(c, f) {
        return f ? (r.directives[c] = f, u) : r.directives[c];
      },
      mount(c, f, b) {
        if (!l) {
          const C = u._ceVNode || me(i, a);
          return C.appContext = r, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(C, c, b), l = !0, u._container = c, c.__vue_app__ = u, Uo(C.component);
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        l && (vn(
          o,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = Ia;
        Ia = u;
        try {
          return c();
        } finally {
          Ia = f;
        }
      }
    };
    return u;
  };
}
let Ia = null;
function Hf(e, t, n = ze) {
  const i = ha(), a = Lt(t), r = li(t), s = jf(e, a), o = sv((l, u) => {
    let c, f = ze, b;
    return yv(() => {
      const C = e[a];
      _t(c, C) && (c = C, u());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(C) {
        const N = n.set ? n.set(C) : C;
        if (!_t(N, c) && !(f !== ze && _t(C, f)))
          return;
        const S = i.vnode.props, O = !!(S && // check if parent has passed v-model
        (t in S || a in S || r in S) && (`onUpdate:${t}` in S || `onUpdate:${a}` in S || `onUpdate:${r}` in S));
        O || (c = C, u()), i.emit(`update:${t}`, N), _t(C, f) && (_t(C, N) && !_t(N, b) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && f !== ze && !_t(N, c)) && u(), f = C, b = N;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || ze : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const jf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Lt(t)}Modifiers`] || e[`${li(t)}Modifiers`];
function qv(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ze;
  let a = n;
  const r = t.startsWith("update:"), s = r && jf(i, t.slice(7));
  s && (s.trim && (a = n.map((c) => tt(c) ? c.trim() : c)), s.number && (a = a.map(No)));
  let o, l = i[o = el(t)] || // also try camelCase event handler (#2249)
  i[o = el(Lt(t))];
  !l && r && (l = i[o = el(li(t))]), l && vn(
    l,
    e,
    6,
    a
  );
  const u = i[o + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, vn(
      u,
      e,
      6,
      a
    );
  }
}
const Yv = /* @__PURE__ */ new WeakMap();
function Vf(e, t, n = !1) {
  const i = n ? Yv : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Ne(e)) {
    const l = (u) => {
      const c = Vf(u, t, !0);
      c && (o = !0, dt(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (We(e) && i.set(e, null), null) : (be(r) ? r.forEach((l) => s[l] = null) : dt(s, r), We(e) && i.set(e, s), s);
}
function zo(e, t) {
  return !e || !To(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ke(e, t[0].toLowerCase() + t.slice(1)) || Ke(e, li(t)) || Ke(e, t));
}
function gu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: b,
    setupState: C,
    ctx: N,
    inheritAttrs: S
  } = e, O = ks(e);
  let I, D;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, le = F;
      I = In(
        u.call(
          le,
          F,
          c,
          f,
          C,
          b,
          N
        )
      ), D = o;
    } else {
      const F = t;
      I = In(
        F.length > 1 ? F(
          f,
          { attrs: o, slots: s, emit: l }
        ) : F(
          f,
          null
        )
      ), D = t.props ? o : Xv(o);
    }
  } catch (F) {
    ni.length = 0, Io(F, e, 1), I = me(wt);
  }
  let j = I;
  if (D && S !== !1) {
    const F = Object.keys(D), { shapeFlag: le } = j;
    F.length && le & 7 && (r && F.some(Ao) && (D = Zv(
      D,
      r
    )), j = Ni(j, D, !1, !0));
  }
  if (n.dirs && (j = Ni(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Mo(j.type) && Os(j) || j;
    Lr(F, n.transition);
  }
  return I = j, ks(O), I;
}
const Xv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || To(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zv = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ao(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Jv(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? mu(i, s, u) : !!s;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const b = c[f];
        if (Gf(s, i, b) && !zo(u, b))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? mu(i, s, u) : !0 : !!s;
  return !1;
}
function mu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Gf(t, e, r) && !zo(n, r))
      return !0;
  }
  return !1;
}
function Gf(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && We(i) && We(a) ? !Oi(i, a) : i !== a;
}
function Qv({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Kf = {}, Wf = () => Object.create(Kf), qf = (e) => Object.getPrototypeOf(e) === Kf;
function eg(e, t, n, i = !1) {
  const a = {}, r = Wf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yf(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ tv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function tg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ He(a), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let b = c[f];
        if (zo(e.emitsOptions, b))
          continue;
        const C = t[b];
        if (l)
          if (Ke(r, b))
            C !== r[b] && (r[b] = C, u = !0);
          else {
            const N = Lt(b);
            a[N] = Yl(
              l,
              o,
              N,
              C,
              e,
              !1
            );
          }
        else
          C !== r[b] && (r[b] = C, u = !0);
      }
    }
  } else {
    Yf(e, t, a, r) && (u = !0);
    let c;
    for (const f in o)
      (!t || // for camelCase
      !Ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = li(f)) === f || !Ke(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (a[f] = Yl(
        l,
        o,
        f,
        void 0,
        e,
        !0
      )) : delete a[f]);
    if (r !== o)
      for (const f in r)
        (!t || !Ke(t, f)) && (delete r[f], u = !0);
  }
  u && Xn(e.attrs, "set", "");
}
function Yf(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (dr(l))
        continue;
      const u = t[l];
      let c;
      a && Ke(a, c = Lt(l)) ? !r || !r.includes(c) ? n[c] = u : (o || (o = {}))[c] = u : zo(e.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ He(n), u = o || ze;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Yl(
        a,
        l,
        f,
        u[f],
        e,
        !Ke(u, f)
      );
    }
  }
  return s;
}
function Yl(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ke(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Ne(l)) {
        const { propsDefaults: u } = a;
        if (n in u)
          i = u[n];
        else {
          const c = Yr(a);
          i = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      a.ce && a.ce._setProp(n, i);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !o ? i = !1 : s[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === li(n)) && (i = !0));
  }
  return i;
}
const ng = /* @__PURE__ */ new WeakMap();
function Xf(e, t, n = !1) {
  const i = n ? ng : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Ne(e)) {
    const c = (f) => {
      l = !0;
      const [b, C] = Xf(f, t, !0);
      dt(s, b), C && o.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return We(e) && i.set(e, xa), xa;
  if (be(r))
    for (let c = 0; c < r.length; c++) {
      const f = Lt(r[c]);
      bu(f) && (s[f] = ze);
    }
  else if (r)
    for (const c in r) {
      const f = Lt(c);
      if (bu(f)) {
        const b = r[c], C = s[f] = be(b) || Ne(b) ? { type: b } : dt({}, b), N = C.type;
        let S = !1, O = !0;
        if (be(N))
          for (let I = 0; I < N.length; ++I) {
            const D = N[I], j = Ne(D) && D.name;
            if (j === "Boolean") {
              S = !0;
              break;
            } else j === "String" && (O = !1);
          }
        else
          S = Ne(N) && N.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = S, C[
          1
          /* shouldCastTrue */
        ] = O, (S || Ke(C, "default")) && o.push(f);
      }
    }
  const u = [s, o];
  return We(e) && i.set(e, u), u;
}
function bu(e) {
  return e[0] !== "$" && !dr(e);
}
const Lc = (e) => e === "_" || e === "_ctx" || e === "$stable", Rc = (e) => be(e) ? e.map(In) : [In(e)], ig = (e, t, n) => {
  if (t._n)
    return t;
  const i = Oe((...a) => Rc(t(...a)), n);
  return i._c = !1, i;
}, Zf = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Lc(a)) continue;
    const r = e[a];
    if (Ne(r))
      t[a] = ig(a, r, i);
    else if (r != null) {
      const s = Rc(r);
      t[a] = () => s;
    }
  }
}, Jf = (e, t) => {
  const n = Rc(t);
  e.slots.default = () => n;
}, Qf = (e, t, n) => {
  for (const i in t)
    (n || !Lc(i)) && (e[i] = t[i]);
}, ag = (e, t, n) => {
  const i = e.slots = Wf();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qf(i, t, n), n && Zd(i, "_", a, !0)) : Zf(t, i);
  } else t && Jf(e, t);
}, rg = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = ze;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Qf(a, t, n) : (r = !t.$stable, Zf(t, a)), s = t;
  } else t && (Jf(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Lc(o) && s[o] == null && delete a[o];
}, Ft = ug;
function sg(e) {
  return og(e);
}
function og(e, t) {
  const n = xo();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: b,
    setScopeId: C = hn,
    insertStaticContent: N
  } = e, S = (h, y, A, L = null, x = null, $ = null, V = void 0, H = null, J = !!y.dynamicChildren) => {
    if (h === y)
      return;
    h && !na(h, y) && (L = ot(h), ye(h, x, $, !0), h = null), y.patchFlag === -2 && (J = !1, y.dynamicChildren = null);
    const { type: B, ref: ge, shapeFlag: se } = y;
    switch (B) {
      case qr:
        O(h, y, A, L);
        break;
      case wt:
        I(h, y, A, L);
        break;
      case ys:
        h == null && D(y, A, L, V);
        break;
      case ve:
        te(
          h,
          y,
          A,
          L,
          x,
          $,
          V,
          H,
          J
        );
        break;
      default:
        se & 1 ? le(
          h,
          y,
          A,
          L,
          x,
          $,
          V,
          H,
          J
        ) : se & 6 ? ie(
          h,
          y,
          A,
          L,
          x,
          $,
          V,
          H,
          J
        ) : (se & 64 || se & 128) && B.process(
          h,
          y,
          A,
          L,
          x,
          $,
          V,
          H,
          J,
          qt
        );
    }
    ge != null && x ? pr(ge, h && h.ref, $, y || h, !y) : ge == null && h && h.ref != null && pr(h.ref, null, $, h, !0);
  }, O = (h, y, A, L) => {
    if (h == null)
      i(
        y.el = o(y.children),
        A,
        L
      );
    else {
      const x = y.el = h.el;
      y.children !== h.children && u(x, y.children);
    }
  }, I = (h, y, A, L) => {
    h == null ? i(
      y.el = l(y.children || ""),
      A,
      L
    ) : y.el = h.el;
  }, D = (h, y, A, L) => {
    [h.el, h.anchor] = N(
      h.children,
      y,
      A,
      L,
      h.el,
      h.anchor
    );
  }, j = ({ el: h, anchor: y }, A, L) => {
    let x;
    for (; h && h !== y; )
      x = b(h), i(h, A, L), h = x;
    i(y, A, L);
  }, F = ({ el: h, anchor: y }) => {
    let A;
    for (; h && h !== y; )
      A = b(h), a(h), h = A;
    a(y);
  }, le = (h, y, A, L, x, $, V, H, J) => {
    if (y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), h == null)
      ce(
        y,
        A,
        L,
        x,
        $,
        V,
        H,
        J
      );
    else {
      const B = h.el && h.el._isVueCE ? h.el : null;
      try {
        B && B._beginPatch(), X(
          h,
          y,
          x,
          $,
          V,
          H,
          J
        );
      } finally {
        B && B._endPatch();
      }
    }
  }, ce = (h, y, A, L, x, $, V, H) => {
    let J, B;
    const { props: ge, shapeFlag: se, transition: pe, dirs: we } = h;
    if (J = h.el = s(
      h.type,
      $,
      ge && ge.is,
      ge
    ), se & 8 ? c(J, h.children) : se & 16 && G(
      h.children,
      J,
      null,
      L,
      x,
      ol(h, $),
      V,
      H
    ), we && Ki(h, null, L, "created"), U(J, h, h.scopeId, V, L), ge) {
      for (const ke in ge)
        ke !== "value" && !dr(ke) && r(J, ke, null, ge[ke], $, L);
      "value" in ge && r(J, "value", null, ge.value, $), (B = ge.onVnodeBeforeMount) && On(B, L, h);
    }
    we && Ki(h, null, L, "beforeMount");
    const Ae = lg(x, pe);
    Ae && pe.beforeEnter(J), i(J, y, A), ((B = ge && ge.onVnodeMounted) || Ae || we) && Ft(() => {
      B && On(B, L, h), Ae && pe.enter(J), we && Ki(h, null, L, "mounted");
    }, x);
  }, U = (h, y, A, L, x) => {
    if (A && C(h, A), L)
      for (let $ = 0; $ < L.length; $++)
        C(h, L[$]);
    if (x) {
      let $ = x.subTree;
      if (y === $ || nh($.type) && ($.ssContent === y || $.ssFallback === y)) {
        const V = x.vnode;
        U(
          h,
          V,
          V.scopeId,
          V.slotScopeIds,
          x.parent
        );
      }
    }
  }, G = (h, y, A, L, x, $, V, H, J = 0) => {
    for (let B = J; B < h.length; B++) {
      const ge = h[B] = H ? Yn(h[B]) : In(h[B]);
      S(
        null,
        ge,
        y,
        A,
        L,
        x,
        $,
        V,
        H
      );
    }
  }, X = (h, y, A, L, x, $, V) => {
    const H = y.el = h.el;
    let { patchFlag: J, dynamicChildren: B, dirs: ge } = y;
    J |= h.patchFlag & 16;
    const se = h.props || ze, pe = y.props || ze;
    let we;
    if (A && Wi(A, !1), (we = pe.onVnodeBeforeUpdate) && On(we, A, y, h), ge && Ki(y, h, A, "beforeUpdate"), A && Wi(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    B && (!h.dynamicChildren || h.dynamicChildren.length !== B.length) && (J = 0, V = !1, B = null), (se.innerHTML && pe.innerHTML == null || se.textContent && pe.textContent == null) && c(H, ""), B ? re(
      h.dynamicChildren,
      B,
      H,
      A,
      L,
      ol(y, x),
      $
    ) : V || Z(
      h,
      y,
      H,
      null,
      A,
      L,
      ol(y, x),
      $,
      !1
    ), J > 0) {
      if (J & 16)
        ue(H, se, pe, A, x);
      else if (J & 2 && se.class !== pe.class && r(H, "class", null, pe.class, x), J & 4 && r(H, "style", se.style, pe.style, x), J & 8) {
        const Ae = y.dynamicProps;
        for (let ke = 0; ke < Ae.length; ke++) {
          const Ie = Ae[ke], je = se[Ie], it = pe[Ie];
          (it !== je || Ie === "value") && r(H, Ie, je, it, x, A);
        }
      }
      J & 1 && h.children !== y.children && c(H, y.children);
    } else !V && B == null && ue(H, se, pe, A, x);
    ((we = pe.onVnodeUpdated) || ge) && Ft(() => {
      we && On(we, A, y, h), ge && Ki(y, h, A, "updated");
    }, L);
  }, re = (h, y, A, L, x, $, V) => {
    for (let H = 0; H < y.length; H++) {
      const J = h[H], B = y[H], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !na(J, B) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? f(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      S(
        J,
        B,
        ge,
        null,
        L,
        x,
        $,
        V,
        !0
      );
    }
  }, ue = (h, y, A, L, x) => {
    if (y !== A) {
      if (y !== ze)
        for (const $ in y)
          !dr($) && !($ in A) && r(
            h,
            $,
            y[$],
            null,
            x,
            L
          );
      for (const $ in A) {
        if (dr($)) continue;
        const V = A[$], H = y[$];
        V !== H && $ !== "value" && r(h, $, H, V, x, L);
      }
      "value" in A && r(h, "value", y.value, A.value, x);
    }
  }, te = (h, y, A, L, x, $, V, H, J) => {
    const B = y.el = h ? h.el : o(""), ge = y.anchor = h ? h.anchor : o("");
    let { patchFlag: se, dynamicChildren: pe, slotScopeIds: we } = y;
    we && (H = H ? H.concat(we) : we), h == null ? (i(B, A, L), i(ge, A, L), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      A,
      ge,
      x,
      $,
      V,
      H,
      J
    )) : se > 0 && se & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === pe.length ? (re(
      h.dynamicChildren,
      pe,
      A,
      x,
      $,
      V,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || x && y === x.subTree) && Ic(
      h,
      y,
      !0
      /* shallow */
    )) : Z(
      h,
      y,
      A,
      ge,
      x,
      $,
      V,
      H,
      J
    );
  }, ie = (h, y, A, L, x, $, V, H, J) => {
    y.slotScopeIds = H, h == null ? y.shapeFlag & 512 ? x.ctx.activate(
      y,
      A,
      L,
      V,
      J
    ) : P(
      y,
      A,
      L,
      x,
      $,
      V,
      J
    ) : M(h, y, J);
  }, P = (h, y, A, L, x, $, V) => {
    const H = h.component = pg(
      h,
      L,
      x
    );
    if (Fo(h) && (H.ctx.renderer = qt), vg(H, !1, V), H.asyncDep) {
      if (x && x.registerDep(H, Y, V), !h.el) {
        const J = H.subTree = me(wt);
        I(null, J, y, A), h.placeholder = J.el;
      }
    } else
      Y(
        H,
        h,
        y,
        A,
        x,
        $,
        V
      );
  }, M = (h, y, A) => {
    const L = y.component = h.component;
    if (Jv(h, y, A))
      if (L.asyncDep && !L.asyncResolved) {
        ae(L, y, A);
        return;
      } else
        L.next = y, L.update();
    else
      y.el = h.el, L.vnode = y;
  }, Y = (h, y, A, L, x, $, V) => {
    const H = () => {
      if (h.isMounted) {
        let { next: se, bu: pe, u: we, parent: Ae, vnode: ke } = h;
        {
          const Et = eh(h);
          if (Et) {
            se && (se.el = ke.el, ae(h, se, V)), Et.asyncDep.then(() => {
              Ft(() => {
                h.isUnmounted || B();
              }, x);
            });
            return;
          }
        }
        let Ie = se, je;
        Wi(h, !1), se ? (se.el = ke.el, ae(h, se, V)) : se = ke, pe && bs(pe), (je = se.props && se.props.onVnodeBeforeUpdate) && On(je, Ae, se, ke), Wi(h, !0);
        const it = gu(h), lt = h.subTree;
        h.subTree = it, S(
          lt,
          it,
          // parent may have changed if it's in a teleport
          f(lt.el),
          // anchor may have changed if it's in a fragment
          ot(lt),
          h,
          x,
          $
        ), se.el = it.el, Ie === null && Qv(h, it.el), we && Ft(we, x), (je = se.props && se.props.onVnodeUpdated) && Ft(
          () => On(je, Ae, se, ke),
          x
        );
      } else {
        let se;
        const { el: pe, props: we } = y, { bm: Ae, m: ke, parent: Ie, root: je, type: it } = h, lt = Ra(y);
        Wi(h, !1), Ae && bs(Ae), !lt && (se = we && we.onVnodeBeforeMount) && On(se, Ie, y), Wi(h, !0);
        {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(
            it,
            h.parent ? h.parent.type : void 0
          );
          const Et = h.subTree = gu(h);
          S(
            null,
            Et,
            A,
            L,
            h,
            x,
            $
          ), y.el = Et.el;
        }
        if (ke && Ft(ke, x), !lt && (se = we && we.onVnodeMounted)) {
          const Et = y;
          Ft(
            () => On(se, Ie, Et),
            x
          );
        }
        (y.shapeFlag & 256 || Ie && Ra(Ie.vnode) && Ie.vnode.shapeFlag & 256) && h.a && Ft(h.a, x), h.isMounted = !0, y = A = L = null;
      }
    };
    h.scope.on();
    const J = h.effect = new tf(H);
    h.scope.off();
    const B = h.update = J.run.bind(J), ge = h.job = J.runIfDirty.bind(J);
    ge.i = h, ge.id = h.uid, J.scheduler = () => kc(ge), Wi(h, !0), B();
  }, ae = (h, y, A) => {
    y.component = h;
    const L = h.vnode.props;
    h.vnode = y, h.next = null, tg(h, y.props, L, A), rg(h, y.children, A), ai(), su(h), ri();
  }, Z = (h, y, A, L, x, $, V, H, J = !1) => {
    const B = h && h.children, ge = h ? h.shapeFlag : 0, se = y.children, { patchFlag: pe, shapeFlag: we } = y;
    if (pe > 0) {
      if (pe & 128) {
        he(
          B,
          se,
          A,
          L,
          x,
          $,
          V,
          H,
          J
        );
        return;
      } else if (pe & 256) {
        fe(
          B,
          se,
          A,
          L,
          x,
          $,
          V,
          H,
          J
        );
        return;
      }
    }
    we & 8 ? (ge & 16 && st(B, x, $), se !== B && c(A, se)) : ge & 16 ? we & 16 ? he(
      B,
      se,
      A,
      L,
      x,
      $,
      V,
      H,
      J
    ) : st(B, x, $, !0) : (ge & 8 && c(A, ""), we & 16 && G(
      se,
      A,
      L,
      x,
      $,
      V,
      H,
      J
    ));
  }, fe = (h, y, A, L, x, $, V, H, J) => {
    h = h || xa, y = y || xa;
    const B = h.length, ge = y.length, se = Math.min(B, ge);
    let pe;
    for (pe = 0; pe < se; pe++) {
      const we = y[pe] = J ? Yn(y[pe]) : In(y[pe]);
      S(
        h[pe],
        we,
        A,
        null,
        x,
        $,
        V,
        H,
        J
      );
    }
    B > ge ? st(
      h,
      x,
      $,
      !0,
      !1,
      se
    ) : G(
      y,
      A,
      L,
      x,
      $,
      V,
      H,
      J,
      se
    );
  }, he = (h, y, A, L, x, $, V, H, J) => {
    let B = 0;
    const ge = y.length;
    let se = h.length - 1, pe = ge - 1;
    for (; B <= se && B <= pe; ) {
      const we = h[B], Ae = y[B] = J ? Yn(y[B]) : In(y[B]);
      if (na(we, Ae))
        S(
          we,
          Ae,
          A,
          null,
          x,
          $,
          V,
          H,
          J
        );
      else
        break;
      B++;
    }
    for (; B <= se && B <= pe; ) {
      const we = h[se], Ae = y[pe] = J ? Yn(y[pe]) : In(y[pe]);
      if (na(we, Ae))
        S(
          we,
          Ae,
          A,
          null,
          x,
          $,
          V,
          H,
          J
        );
      else
        break;
      se--, pe--;
    }
    if (B > se) {
      if (B <= pe) {
        const we = pe + 1, Ae = we < ge ? y[we].el : L;
        for (; B <= pe; )
          S(
            null,
            y[B] = J ? Yn(y[B]) : In(y[B]),
            A,
            Ae,
            x,
            $,
            V,
            H,
            J
          ), B++;
      }
    } else if (B > pe)
      for (; B <= se; )
        ye(h[B], x, $, !0), B++;
    else {
      const we = B, Ae = B, ke = /* @__PURE__ */ new Map();
      for (B = Ae; B <= pe; B++) {
        const Ve = y[B] = J ? Yn(y[B]) : In(y[B]);
        Ve.key != null && ke.set(Ve.key, B);
      }
      let Ie, je = 0;
      const it = pe - Ae + 1;
      let lt = !1, Et = 0;
      const Ut = new Array(it);
      for (B = 0; B < it; B++) Ut[B] = 0;
      for (B = we; B <= se; B++) {
        const Ve = h[B];
        if (je >= it) {
          ye(Ve, x, $, !0);
          continue;
        }
        let Pt;
        if (Ve.key != null)
          Pt = ke.get(Ve.key);
        else
          for (Ie = Ae; Ie <= pe; Ie++)
            if (Ut[Ie - Ae] === 0 && na(Ve, y[Ie])) {
              Pt = Ie;
              break;
            }
        Pt === void 0 ? ye(Ve, x, $, !0) : (Ut[Pt - Ae] = B + 1, Pt >= Et ? Et = Pt : lt = !0, S(
          Ve,
          y[Pt],
          A,
          null,
          x,
          $,
          V,
          H,
          J
        ), je++);
      }
      const gn = lt ? cg(Ut) : xa;
      for (Ie = gn.length - 1, B = it - 1; B >= 0; B--) {
        const Ve = Ae + B, Pt = y[Ve], Pi = y[Ve + 1], Di = Ve + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Pi.el || th(Pi)
        ) : L;
        Ut[B] === 0 ? S(
          null,
          Pt,
          A,
          Di,
          x,
          $,
          V,
          H,
          J
        ) : lt && (Ie < 0 || B !== gn[Ie] ? Se(Pt, A, Di, 2) : Ie--);
      }
    }
  }, Se = (h, y, A, L, x = null) => {
    const { el: $, type: V, transition: H, children: J, shapeFlag: B } = h;
    if (B & 6) {
      Se(h.component.subTree, y, A, L);
      return;
    }
    if (B & 128) {
      h.suspense.move(y, A, L);
      return;
    }
    if (B & 64) {
      V.move(h, y, A, qt);
      return;
    }
    if (V === ve) {
      i($, y, A);
      for (let se = 0; se < J.length; se++)
        Se(J[se], y, A, L);
      i(h.anchor, y, A);
      return;
    }
    if (V === ys) {
      j(h, y, A);
      return;
    }
    if (L !== 2 && B & 1 && H)
      if (L === 0)
        H.persisted && !$[dn] ? i($, y, A) : (H.beforeEnter($), i($, y, A), Ft(() => H.enter($), x));
      else {
        const { leave: se, delayLeave: pe, afterLeave: we } = H, Ae = () => {
          h.ctx.isUnmounted ? a($) : i($, y, A);
        }, ke = () => {
          const Ie = $._isLeaving || !!$[dn];
          $._isLeaving && $[dn](
            !0
            /* cancelled */
          ), H.persisted && !Ie ? Ae() : se($, () => {
            Ae(), we && we();
          });
        };
        pe ? pe($, Ae, ke) : ke();
      }
    else
      i($, y, A);
  }, ye = (h, y, A, L = !1, x = !1) => {
    const {
      type: $,
      props: V,
      ref: H,
      children: J,
      dynamicChildren: B,
      shapeFlag: ge,
      patchFlag: se,
      dirs: pe,
      cacheIndex: we,
      memo: Ae
    } = h;
    if (se === -2 && (x = !1), H != null && (ai(), pr(H, null, A, h, !0), ri()), we != null && (y.renderCache[we] = void 0), ge & 256) {
      y.ctx.deactivate(h);
      return;
    }
    const ke = ge & 1 && pe, Ie = !Ra(h);
    let je;
    if (Ie && (je = V && V.onVnodeBeforeUnmount) && On(je, y, h), ge & 6)
      at(h.component, A, L);
    else {
      if (ge & 128) {
        h.suspense.unmount(A, L);
        return;
      }
      ke && Ki(h, null, y, "beforeUnmount"), ge & 64 ? h.type.remove(
        h,
        y,
        A,
        qt,
        L
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== ve || se > 0 && se & 64) ? st(
        B,
        y,
        A,
        !1,
        !0
      ) : ($ === ve && se & 384 || !x && ge & 16) && st(J, y, A), L && Xe(h);
    }
    const it = Ae != null && we == null;
    (Ie && (je = V && V.onVnodeUnmounted) || ke || it) && Ft(() => {
      je && On(je, y, h), ke && Ki(h, null, y, "unmounted"), it && (h.el = null);
    }, A);
  }, Xe = (h) => {
    const { type: y, el: A, anchor: L, transition: x } = h;
    if (y === ve) {
      Te(A, L);
      return;
    }
    if (y === ys) {
      F(h);
      return;
    }
    const $ = () => {
      a(A), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (h.shapeFlag & 1 && x && !x.persisted) {
      const { leave: V, delayLeave: H } = x, J = () => V(A, $);
      H ? H(h.el, $, J) : J();
    } else
      $();
  }, Te = (h, y) => {
    let A;
    for (; h !== y; )
      A = b(h), a(h), h = A;
    a(y);
  }, at = (h, y, A) => {
    const { bum: L, scope: x, job: $, subTree: V, um: H, m: J, a: B } = h;
    yu(J), yu(B), L && bs(L), x.stop(), $ && ($.flags |= 8, ye(V, h, y, A)), H && Ft(H, y), Ft(() => {
      h.isUnmounted = !0;
    }, y);
  }, st = (h, y, A, L = !1, x = !1, $ = 0) => {
    for (let V = $; V < h.length; V++)
      ye(h[V], y, A, L, x);
  }, ot = (h) => {
    if (h.shapeFlag & 6)
      return ot(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const y = b(h.anchor || h.el), A = y && y[Tf];
    return A ? b(A) : y;
  };
  let bt = !1;
  const Ze = (h, y, A) => {
    let L;
    h == null ? y._vnode && (ye(y._vnode, null, null, !0), L = y._vnode.component) : S(
      y._vnode || null,
      h,
      y,
      null,
      null,
      null,
      A
    ), y._vnode = h, bt || (bt = !0, su(L), Cf(), bt = !1);
  }, qt = {
    p: S,
    um: ye,
    m: Se,
    r: Xe,
    mt: P,
    mc: G,
    pc: Z,
    pbc: re,
    n: ot,
    o: e
  };
  return {
    render: Ze,
    hydrate: void 0,
    createApp: Wv(Ze)
  };
}
function ol({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ic(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (be(i) && be(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = Yn(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Ic(s, o)), o.type === qr && (o.patchFlag === -1 && (o = a[r] = Yn(o)), o.el = s.el), o.type === wt && !o.el && (o.el = s.el);
    }
}
function cg(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const u = e[i];
    if (u !== 0) {
      if (a = n[n.length - 1], e[a] < u) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < u ? r = o + 1 : s = o;
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function eh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : eh(t);
}
function yu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function th(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? th(t.subTree) : null;
}
const nh = (e) => e.__isSuspense;
function ug(e, t) {
  t && t.pendingBranch ? be(e) ? t.effects.push(...e) : t.effects.push(e) : wf(e);
}
const ve = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), wt = /* @__PURE__ */ Symbol.for("v-cmt"), ys = /* @__PURE__ */ Symbol.for("v-stc"), ni = [];
let tn = null;
function _(e = !1) {
  ni.push(tn = e ? null : []);
}
function Pc() {
  ni.pop(), tn = ni[ni.length - 1] || null;
}
let Rr = 1;
function Rs(e, t = !1) {
  Rr += e, e < 0 && tn && t && (tn.hasOnce = !0);
}
function ih(e) {
  return e.dynamicChildren = Rr > 0 ? tn || xa : null, Pc(), Rr > 0 && tn && tn.push(e), e;
}
function k(e, t, n, i, a, r) {
  return ih(
    d(
      e,
      t,
      n,
      i,
      a,
      r,
      !0
    )
  );
}
function De(e, t, n, i, a) {
  return ih(
    me(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function na(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ah = ({ key: e }) => e ?? null, _s = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Rt(e) || Ne(e) ? { i: Ct, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, i = 0, a = null, r = e === ve ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ah(t),
    ref: t && _s(t),
    scopeId: Po,
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
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct
  };
  return o ? (Is(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Rr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && tn.push(l), l;
}
const me = dg;
function dg(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Mf) && (e = wt), Ir(e)) {
    const o = Ni(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Is(o, n), Rr > 0 && !r && tn && (o.shapeFlag & 6 ? tn[tn.indexOf(e)] = o : tn.push(o)), o.patchFlag = -2, o;
  }
  if (yg(e) && (e = e.__vccOpts), t) {
    t = Pr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Ee(o)), We(l) && (/* @__PURE__ */ Ac(l) && !be(l) && (l = dt({}, l)), t.style = nn(l));
  }
  const s = tt(e) ? 1 : nh(e) ? 128 : Mo(e) ? 64 : We(e) ? 4 : Ne(e) ? 2 : 0;
  return d(
    e,
    t,
    n,
    i,
    a,
    s,
    r,
    !0
  );
}
function Pr(e) {
  return e ? /* @__PURE__ */ Ac(e) || qf(e) ? dt({}, e) : e : null;
}
function Ni(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, u = t ? It(a || {}, t) : a, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ah(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? be(r) ? r.concat(_s(t)) : [r, _s(t)] : _s(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ni(e.ssContent),
    ssFallback: e.ssFallback && Ni(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Lr(
    c,
    l.clone(c)
  ), c;
}
function xe(e = " ", t = 0) {
  return me(qr, null, e, t);
}
function q(e = "", t = !1) {
  return t ? (_(), De(wt, null, e)) : me(wt, null, e);
}
function In(e) {
  return e == null || typeof e == "boolean" ? me(wt) : be(e) ? me(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ir(e) ? Yn(e) : me(qr, null, String(e));
}
function Yn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ni(e);
}
function Is(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (be(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Is(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !qf(t) ? t._ctx = Ct : a === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ne(t)) {
    if (i & 65) {
      Is(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ct }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [xe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function It(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = nn([t.style, i.style]);
      else if (To(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(be(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ao(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function On(e, t, n, i = null) {
  vn(e, t, 7, [
    n,
    i
  ]);
}
const fg = Bf();
let hg = 0;
function pg(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || fg, r = {
    uid: hg++,
    vnode: e,
    type: i,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Mp(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Xf(i, a),
    emitsOptions: Vf(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ze,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ze,
    data: ze,
    props: ze,
    attrs: ze,
    slots: ze,
    refs: ze,
    setupState: ze,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qv.bind(null, r), e.ce && e.ce(r), r;
}
let xt = null;
const ha = () => xt || Ct;
let Ps, Dr;
{
  const e = xo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xt = n
  ), Dr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mr = n
  );
}
const Yr = (e) => {
  const t = xt;
  return Ps(e), e.scope.on(), () => {
    e.scope.off(), Ps(t);
  };
}, _u = () => {
  xt && xt.scope.off(), Ps(null);
};
function rh(e) {
  return e.vnode.shapeFlag & 4;
}
let Mr = !1;
function vg(e, t = !1, n = !1) {
  t && Dr(t);
  const { props: i, children: a } = e.vnode, r = rh(e);
  eg(e, i, r, t), ag(e, a, n || t);
  const s = r ? gg(e, t) : void 0;
  return t && Dr(!1), s;
}
function gg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fv);
  const { setup: i } = n;
  if (i) {
    ai();
    const a = e.setupContext = i.length > 1 ? oh(e) : null, r = Yr(e), s = Kr(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = qd(s);
    if (ri(), r(), (o || e.sp) && !Ra(e) && Rf(e), o) {
      if (s.then(_u, _u), t)
        return s.then((l) => {
          Dr(!0);
          try {
            wu(e, l, t);
          } finally {
            Dr(!1);
          }
        }).catch((l) => {
          Io(l, e, 0);
        });
      e.asyncDep = s;
    } else
      wu(e, s);
  } else
    sh(e);
}
function wu(e, t, n) {
  Ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) && (e.setupState = bf(t)), sh(e);
}
function sh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || hn);
  {
    const a = Yr(e);
    ai();
    try {
      Bv(e);
    } finally {
      ri(), a();
    }
  }
}
const mg = {
  get(e, t) {
    return Ot(e, "get", ""), e[t];
  }
};
function oh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, mg),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Uo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bf(nv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vr)
        return vr[n](e);
    },
    has(t, n) {
      return n in t || n in vr;
    }
  })) : e.proxy;
}
function bg(e, t = !0) {
  return Ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yg(e) {
  return Ne(e) && "__vccOpts" in e;
}
const ee = (e, t) => /* @__PURE__ */ lv(e, t, Mr);
function Vt(e, t, n) {
  try {
    Rs(-1);
    const i = arguments.length;
    return i === 2 ? We(t) && !be(t) ? Ir(t) ? me(e, null, [t]) : me(e, t) : me(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Ir(n) && (n = [n]), me(e, t, n));
  } finally {
    Rs(1);
  }
}
const _g = "3.5.42", wg = hn;
let Xl;
const Cu = typeof window < "u" && window.trustedTypes;
if (Cu)
  try {
    Xl = /* @__PURE__ */ Cu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lh = Xl ? (e) => Xl.createHTML(e) : (e) => e, Cg = "http://www.w3.org/2000/svg", Sg = "http://www.w3.org/1998/Math/MathML", qn = typeof document < "u" ? document : null, Su = qn && /* @__PURE__ */ qn.createElement("template"), Eg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? qn.createElementNS(Cg, e) : t === "mathml" ? qn.createElementNS(Sg, e) : n ? qn.createElement(e, { is: n }) : qn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => qn.createTextNode(e),
  createComment: (e) => qn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      Su.innerHTML = lh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Su.content;
      if (i === "svg" || i === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, gi = "transition", Za = "animation", Fr = /* @__PURE__ */ Symbol("_vtc"), ch = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Tg = /* @__PURE__ */ dt(
  {},
  kf,
  ch
), Ag = (e) => (e.displayName = "Transition", e.props = Tg, e), kg = /* @__PURE__ */ Ag(
  (e, { slots: t }) => Vt(Av, Og(e), t)
), qi = (e, t = []) => {
  be(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Eu = (e) => e ? be(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Og(e) {
  const t = {};
  for (const te in e)
    te in ch || (t[te] = e[te]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: o = `${n}-enter-to`,
    appearFromClass: l = r,
    appearActiveClass: u = s,
    appearToClass: c = o,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: b = `${n}-leave-active`,
    leaveToClass: C = `${n}-leave-to`
  } = e, N = Ng(a), S = N && N[0], O = N && N[1], {
    onBeforeEnter: I,
    onEnter: D,
    onEnterCancelled: j,
    onLeave: F,
    onLeaveCancelled: le,
    onBeforeAppear: ce = I,
    onAppear: U = D,
    onAppearCancelled: G = j
  } = t, X = (te, ie, P, M) => {
    te._enterCancelled = M, Yi(te, ie ? c : o), Yi(te, ie ? u : s), P && P();
  }, re = (te, ie) => {
    te._isLeaving = !1, Yi(te, f), Yi(te, C), Yi(te, b), ie && ie();
  }, ue = (te) => (ie, P) => {
    const M = te ? U : D, Y = () => X(ie, te, P);
    qi(M, [ie, Y]), Tu(() => {
      Yi(ie, te ? l : r), Vn(ie, te ? c : o), Eu(M) || Au(ie, i, S, Y);
    });
  };
  return dt(t, {
    onBeforeEnter(te) {
      qi(I, [te]), Vn(te, r), Vn(te, s);
    },
    onBeforeAppear(te) {
      qi(ce, [te]), Vn(te, l), Vn(te, u);
    },
    onEnter: ue(!1),
    onAppear: ue(!0),
    onLeave(te, ie) {
      te._isLeaving = !0;
      const P = () => re(te, ie);
      Vn(te, f), te._enterCancelled ? (Vn(te, b), Nu(te)) : (Nu(te), Vn(te, b)), Tu(() => {
        te._isLeaving && (Yi(te, f), Vn(te, C), Eu(F) || Au(te, i, O, P));
      }), qi(F, [te, P]);
    },
    onEnterCancelled(te) {
      X(te, !1, void 0, !0), qi(j, [te]);
    },
    onAppearCancelled(te) {
      X(te, !0, void 0, !0), qi(G, [te]);
    },
    onLeaveCancelled(te) {
      re(te), qi(le, [te]);
    }
  });
}
function Ng(e) {
  if (e == null)
    return null;
  if (We(e))
    return [ll(e.enter), ll(e.leave)];
  {
    const t = ll(e);
    return [t, t];
  }
}
function ll(e) {
  return Ap(e);
}
function Vn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Fr] || (e[Fr] = /* @__PURE__ */ new Set())).add(t);
}
function Yi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Fr];
  n && (n.delete(t), n.size || (e[Fr] = void 0));
}
function Tu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let xg = 0;
function Au(e, t, n, i) {
  const a = e._endId = ++xg, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Lg(e, t);
  if (!s)
    return i();
  const u = s + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, b), r();
  }, b = (C) => {
    C.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, o + 1), e.addEventListener(u, b);
}
function Lg(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${gi}Delay`), r = i(`${gi}Duration`), s = ku(a, r), o = i(`${Za}Delay`), l = i(`${Za}Duration`), u = ku(o, l);
  let c = null, f = 0, b = 0;
  t === gi ? s > 0 && (c = gi, f = s, b = r.length) : t === Za ? u > 0 && (c = Za, f = u, b = l.length) : (f = Math.max(s, u), c = f > 0 ? s > u ? gi : Za : null, b = c ? c === gi ? r.length : l.length : 0);
  const C = c === gi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${gi}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: b,
    hasTransform: C
  };
}
function ku(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Ou(n) + Ou(e[i])));
}
function Ou(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Rg(e, t, n) {
  const i = e[Fr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ds = /* @__PURE__ */ Symbol("_vod"), uh = /* @__PURE__ */ Symbol("_vsh"), Pa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ds] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ja(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ja(e, !0), i.enter(e)) : i.leave(e, () => {
      Ja(e, !1);
    }) : Ja(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ja(e, t);
  }
};
function Ja(e, t) {
  e.style.display = t ? e[Ds] : "none", e[uh] = !t;
}
const dh = /* @__PURE__ */ Symbol("");
function Ig(e) {
  const t = ha();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Ms(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Ms(t.ce, a) : Zl(t.subTree, a), n(a);
  };
  Df(() => {
    wf(i);
  }), Li(() => {
    Wt(i, hn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Wr(() => a.disconnect());
  });
}
function Zl(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Zl(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ms(e.el, t);
  else if (e.type === ve)
    e.children.forEach((n) => Zl(n, t));
  else if (e.type === ys) {
    let { el: n, anchor: i } = e;
    for (; n && (Ms(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Ms(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Dp(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[dh] = i;
  }
}
const Pg = /(?:^|;)\s*display\s*:/;
function Dg(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && or(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && or(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Fg(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || or(i, s, o) : or(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[dh];
      s && (n += ";" + s), i.cssText = n, r = Pg.test(n);
    }
  } else t && e.removeAttribute("style");
  Ds in e && (e[Ds] = r ? i.display : "", e[uh] && (i.display = "none"));
}
const ls = /\s*!important$/;
function or(e, t, n) {
  if (be(n))
    n.forEach((i) => or(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ls.test(n) ? e.setProperty(t, n.replace(ls, ""), "important") : e.setProperty(t, n);
  else {
    const i = Mg(e, t);
    ls.test(n) ? e.setProperty(
      li(i),
      n.replace(ls, ""),
      "important"
    ) : e[i] = n;
  }
}
const xu = ["Webkit", "Moz", "ms"], cl = {};
function Mg(e, t) {
  const n = cl[t];
  if (n)
    return n;
  let i = Lt(t);
  if (i !== "filter" && i in e)
    return cl[t] = i;
  i = Oo(i);
  for (let a = 0; a < xu.length; a++) {
    const r = xu[a] + i;
    if (r in e)
      return cl[t] = r;
  }
  return t;
}
function Fg(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const Lu = "http://www.w3.org/1999/xlink";
function Ru(e, t, n, i, a, r = Rp(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Lu, t.slice(6, t.length)) : e.setAttributeNS(Lu, t, n) : n == null || r && !Jd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Cn(n) ? String(n) : n
  );
}
function Iu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lh(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Jd(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ia(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function $g(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Pu = /* @__PURE__ */ Symbol("_vei");
function zg(e, t, n, i, a = null) {
  const r = e[Pu] || (e[Pu] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Hg(t);
    if (i) {
      const u = r[t] = Gg(
        i,
        a
      );
      ia(e, o, u, l);
    } else s && ($g(e, o, s, l), r[t] = void 0);
  }
}
const Ug = /(Once|Passive|Capture)$/, Bg = /^on:?(?:Once|Passive|Capture)$/;
function Hg(e) {
  let t, n;
  for (; (n = e.match(Ug)) && !Bg.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : li(e.slice(2)), t];
}
let ul = 0;
const jg = /* @__PURE__ */ Promise.resolve(), Vg = () => ul || (jg.then(() => ul = 0), ul = Date.now());
function Gg(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (be(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const u = s[l];
        u && vn(
          u,
          t,
          5,
          o
        );
      }
    } else
      vn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Vg(), n;
}
const Du = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kg = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Rg(e, i, s) : t === "style" ? Dg(e, n, i) : To(t) ? Ao(t) || zg(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wg(e, t, i, s)) ? (Iu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ru(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qg(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? Iu(e, Lt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ru(e, t, i, s));
};
function Wg(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Du(t) && Ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Du(t) && tt(n) ? !1 : t in e;
}
function qg(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Lt(t);
  return Array.isArray(n) ? n.some((a) => Lt(a) === i) : Object.keys(n).some((a) => Lt(a) === i);
}
const Fs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return be(t) ? (n) => bs(t, n) : t;
};
function Yg(e) {
  e.target.composing = !0;
}
function Mu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ra = /* @__PURE__ */ Symbol("_assign"), cs = /* @__PURE__ */ Symbol("_initialValue");
function dl(e, t, n) {
  return t && (e = e.trim()), n && (e = No(e)), e;
}
const ws = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[cs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[cs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ra] = Fs(a);
    const r = i || a.props && a.props.type === "number";
    ia(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ra](dl(e.value, n, r));
    }), (n || r) && ia(e, "change", () => {
      e.value = dl(e.value, n, r);
    }), t || (ia(e, "compositionstart", Yg), ia(e, "compositionend", Mu), ia(e, "change", Mu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[cs];
    delete e[cs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[ra](dl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[ra] = Fs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? No(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const u = e.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, on = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ia(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? No($s(l)) : $s(l)
      ), r = e.multiple, s = r ? da(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? be(s) ? a.slice() : a : s
      ];
      try {
        e[ra](s);
      } finally {
        ti(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[ra] = Fs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Fu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ra] = Fs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Xg(t, n[1], n[0])) && Fu(e, t);
  }
};
function Xg(e, t, n) {
  if (!n || be(e)) return Oi(e, t);
  if (da(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Fu(e, t) {
  const n = e.multiple, i = be(t);
  if (!(n && !i && !da(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = $s(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((u) => String(u) === String(o)) : s.selected = Pp(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Oi($s(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $s(e) {
  return "_value" in e ? e._value : e.value;
}
const Zg = ["ctrl", "shift", "alt", "meta"], Jg = {
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
  exact: (e, t) => Zg.some((n) => e[`${n}Key`] && !t.includes(n))
}, et = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Jg[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Qg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Kt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = li(a.key);
    if (t.some(
      (s) => s === r || Qg[s] === r
    ))
      return e(a);
  }));
}, em = /* @__PURE__ */ dt({ patchProp: Kg }, Eg);
let $u;
function tm() {
  return $u || ($u = sg(em));
}
const nm = ((...e) => {
  const t = tm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = am(i);
    if (!a) return;
    const r = t._component;
    !Ne(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, im(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function im(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function am(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function Dc(e, t, n) {
  const i = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(i))
    return window._nc_initial_state.get(i);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(i);
  if (a === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(i, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
function zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function rm(e) {
  if (Array.isArray(e)) return e;
}
function sm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, u = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (c) {
      u = !0, a = c;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw a;
      }
    }
    return o;
  }
}
function om() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lm(e, t) {
  return rm(e) || sm(e, t) || cm(e, t) || om();
}
function cm(e, t) {
  if (e) {
    if (typeof e == "string") return zu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zu(e, t) : void 0;
  }
}
const fh = Object.entries, Uu = Object.setPrototypeOf, um = Object.isFrozen, dm = Object.getPrototypeOf, fm = Object.getOwnPropertyDescriptor;
let pt = Object.freeze, mt = Object.seal, Oa = Object.create, hh = typeof Reflect < "u" && Reflect, Jl = hh.apply, Ql = hh.construct;
pt || (pt = function(t) {
  return t;
});
mt || (mt = function(t) {
  return t;
});
Jl || (Jl = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Ql || (Ql = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const Qi = ft(Array.prototype.forEach), hm = ft(Array.prototype.lastIndexOf), Bu = ft(Array.prototype.pop), Qa = ft(Array.prototype.push), pm = ft(Array.prototype.splice), Da = Array.isArray, lr = ft(String.prototype.toLowerCase), fl = ft(String.prototype.toString), Hu = ft(String.prototype.match), er = ft(String.prototype.replace), ju = ft(String.prototype.indexOf), vm = ft(String.prototype.trim), gm = ft(Number.prototype.toString), mm = ft(Boolean.prototype.toString), Vu = typeof BigInt > "u" ? null : ft(BigInt.prototype.toString), Gu = typeof Symbol > "u" ? null : ft(Symbol.prototype.toString), Gt = ft(Object.prototype.hasOwnProperty), tr = ft(Object.prototype.toString), At = ft(RegExp.prototype.test), Xi = bm(TypeError);
function ft(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Jl(e, t, i);
  };
}
function bm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Ql(e, n);
  };
}
function $e(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lr;
  if (Uu && Uu(e, null), !Da(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (um(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function ym(e) {
  for (let t = 0; t < e.length; t++)
    Gt(e, t) || (e[t] = null);
  return e;
}
function Qt(e) {
  const t = Oa(null);
  for (const i of fh(e)) {
    var n = lm(i, 2);
    const a = n[0], r = n[1];
    Gt(e, a) && (Da(r) ? t[a] = ym(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = Qt(r) : t[a] = r);
  }
  return t;
}
function _m(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return gm(e);
    case "boolean":
      return mm(e);
    case "bigint":
      return Vu ? Vu(e) : "0";
    case "symbol":
      return Gu ? Gu(e) : "Symbol()";
    case "undefined":
      return tr(e);
    case "function":
    case "object": {
      if (e === null)
        return tr(e);
      const t = e, n = bn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : tr(i);
      }
      return tr(e);
    }
    default:
      return tr(e);
  }
}
function bn(e, t) {
  for (; e !== null; ) {
    const i = fm(e, t);
    if (i) {
      if (i.get)
        return ft(i.get);
      if (typeof i.value == "function")
        return ft(i.value);
    }
    e = dm(e);
  }
  function n() {
    return null;
  }
  return n;
}
function wm(e) {
  try {
    return At(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ku = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hl = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pl = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Cm = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), vl = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Sm = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wu = pt(["#text"]), qu = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), gl = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yu = pt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), us = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Em = mt(/{{[\w\W]*|^[\w\W]*}}/g), Tm = mt(/<%[\w\W]*|^[\w\W]*%>/g), Am = mt(/\${[\w\W]*/g), km = mt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Om = mt(/^aria-[\-\w]+$/), Xu = mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Nm = mt(/^(?:\w+script|data):/i), xm = mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lm = mt(/^html$/i), Rm = mt(/^[a-z][.\w]*(-[.\w]+)+$/i), Zu = mt(/<[/\w!]/g), Ju = mt(/<[/\w]/g), Im = mt(/<\/no(script|embed|frames)/i), Pm = mt(/\/>/i), Jt = {
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
}, ph = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Dm = pt($e({}, ph)), Mm = (function() {
  const e = {};
  return Qi(ph, (t) => {
    e[t] = mt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), pt(e);
})(), Fm = function() {
  return typeof window > "u" ? null : window;
}, $m = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (i = n.getAttribute(a));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(r, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, Qu = function() {
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
}, mi = function(t, n, i, a) {
  return Gt(t, n) && Da(t[n]) ? $e(a.base ? Qt(a.base) : {}, t[n], a.transform) : i;
}, ml = function(t, n, i) {
  const a = Gt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? Qt(a) : i();
};
function vh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fm();
  const t = (Q) => vh(Q);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Jt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, b = o.prototype, C = bn(b, "cloneNode"), N = bn(b, "remove"), S = bn(b, "nextSibling"), O = bn(b, "childNodes"), I = bn(b, "parentNode"), D = bn(b, "shadowRoot"), j = bn(b, "attributes"), F = s && s.prototype ? bn(s.prototype, "nodeType") : null, le = s && s.prototype ? bn(s.prototype, "nodeName") : null, ce = s && s.prototype ? bn(s.prototype, "ownerDocument") : null, U = function(v) {
    return F ? F(v) : v.nodeType;
  }, G = function(v) {
    return le ? le(v) : v.nodeName;
  };
  if (typeof r == "function") {
    const Q = n.createElement("template");
    Q.content && Q.content.ownerDocument && (n = Q.content.ownerDocument);
  }
  let X, re = "", ue, te = !1, ie = 0;
  const P = function() {
    if (ie > 0)
      throw Xi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(v) {
    P(), ie++;
    try {
      return X.createHTML(v);
    } finally {
      ie--;
    }
  }, Y = function(v) {
    P(), ie++;
    try {
      return X.createScriptURL(v);
    } finally {
      ie--;
    }
  }, ae = function() {
    return te || (ue = $m(f, a), te = !0), ue;
  }, Z = n, fe = Z.implementation, he = Z.createNodeIterator, Se = Z.createDocumentFragment, ye = Z.getElementsByTagName, Xe = i.importNode;
  let Te = Qu();
  t.isSupported = typeof fh == "function" && typeof I == "function" && fe && fe.createHTMLDocument !== void 0;
  const at = Em, st = Tm, ot = Am, bt = km, Ze = Om, qt = Nm, z = xm, h = Rm;
  let y = Xu, A = null;
  const L = $e({}, [...Ku, ...hl, ...pl, ...vl, ...Wu]);
  let x = null;
  const $ = $e({}, [...qu, ...gl, ...Yu, ...us]);
  let V = Object.seal(Oa(null, {
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
  })), H = null, J = null;
  const B = Object.seal(Oa(null, {
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
  let ge = !0, se = !0, pe = !1, we = !0, Ae = !1, ke = !0, Ie = !1, je = !1, it = null, lt = null, Et = !1, Ut = !1, gn = !1, Ve = !1, Pt = !0, Pi = !1;
  const Di = "user-content-";
  let Ua = !0, Ba = !1, Ce = {}, mn = null;
  const vt = $e({}, [
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
  let Ha = null;
  const En = $e({}, ["audio", "video", "img", "source", "image", "track"]);
  let Tn = null;
  const va = $e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Bt = "http://www.w3.org/1998/Math/MathML", Fn = "http://www.w3.org/2000/svg", Ht = "http://www.w3.org/1999/xhtml";
  let an = Ht, Mi = !1, $n = null;
  const Fi = $e({}, [Bt, Fn, Ht], fl), $i = pt(["mi", "mo", "mn", "ms", "mtext"]);
  let ui = $e({}, $i);
  const Zr = pt(["annotation-xml"]);
  let rn = $e({}, Zr);
  const qo = $e({}, ["title", "style", "font", "a", "script"]);
  let zn = null;
  const ga = ["application/xhtml+xml", "text/html"], Un = "text/html";
  let Ye = null, Bn = null;
  const Jr = n.createElement("form"), di = function(v) {
    return v instanceof RegExp || v instanceof Function;
  }, fi = function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bn && Bn === v)
      return;
    (!v || typeof v != "object") && (v = {}), v = Qt(v), zn = // eslint-disable-next-line unicorn/prefer-includes
    ga.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Un : v.PARSER_MEDIA_TYPE, Ye = zn === "application/xhtml+xml" ? fl : lr, A = mi(v, "ALLOWED_TAGS", L, {
      transform: Ye
    }), x = mi(v, "ALLOWED_ATTR", $, {
      transform: Ye
    }), $n = mi(v, "ALLOWED_NAMESPACES", Fi, {
      transform: fl
    }), Tn = mi(v, "ADD_URI_SAFE_ATTR", va, {
      transform: Ye,
      base: va
    }), Ha = mi(v, "ADD_DATA_URI_TAGS", En, {
      transform: Ye,
      base: En
    }), mn = mi(v, "FORBID_CONTENTS", vt, {
      transform: Ye
    }), H = mi(v, "FORBID_TAGS", Qt({}), {
      transform: Ye
    }), J = mi(v, "FORBID_ATTR", Qt({}), {
      transform: Ye
    }), Ce = Gt(v, "USE_PROFILES") ? v.USE_PROFILES && typeof v.USE_PROFILES == "object" ? Qt(v.USE_PROFILES) : v.USE_PROFILES : !1, ge = v.ALLOW_ARIA_ATTR !== !1, se = v.ALLOW_DATA_ATTR !== !1, pe = v.ALLOW_UNKNOWN_PROTOCOLS || !1, we = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ae = v.SAFE_FOR_TEMPLATES || !1, ke = v.SAFE_FOR_XML !== !1, Ie = v.WHOLE_DOCUMENT || !1, Ut = v.RETURN_DOM || !1, gn = v.RETURN_DOM_FRAGMENT || !1, Ve = v.RETURN_TRUSTED_TYPE || !1, Et = v.FORCE_BODY || !1, Pt = v.SANITIZE_DOM !== !1, Pi = v.SANITIZE_NAMED_PROPS || !1, Ua = v.KEEP_CONTENT !== !1, Ba = v.IN_PLACE || !1, y = wm(v.ALLOWED_URI_REGEXP) ? v.ALLOWED_URI_REGEXP : Xu, an = typeof v.NAMESPACE == "string" ? v.NAMESPACE : Ht, ui = ml(
      v,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => $e({}, $i)
      // Default built-in map
    ), rn = ml(
      v,
      "HTML_INTEGRATION_POINTS",
      () => $e({}, Zr)
      // Default built-in map
    );
    const R = ml(v, "CUSTOM_ELEMENT_HANDLING", () => Oa(null));
    if (V = Oa(null), Gt(R, "tagNameCheck") && di(R.tagNameCheck) && (V.tagNameCheck = R.tagNameCheck), Gt(R, "attributeNameCheck") && di(R.attributeNameCheck) && (V.attributeNameCheck = R.attributeNameCheck), Gt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), mt(V), Ae && (se = !1), gn && (Ut = !0), Ce && (A = $e({}, Wu), x = Oa(null), Ce.html === !0 && ($e(A, Ku), $e(x, qu)), Ce.svg === !0 && ($e(A, hl), $e(x, gl), $e(x, us)), Ce.svgFilters === !0 && ($e(A, pl), $e(x, gl), $e(x, us)), Ce.mathMl === !0 && ($e(A, vl), $e(x, Yu), $e(x, us))), B.tagCheck = null, B.attributeCheck = null, Gt(v, "ADD_TAGS") && (typeof v.ADD_TAGS == "function" ? B.tagCheck = v.ADD_TAGS : Da(v.ADD_TAGS) && (A === L && (A = Qt(A)), $e(A, v.ADD_TAGS, Ye))), Gt(v, "ADD_ATTR") && (typeof v.ADD_ATTR == "function" ? B.attributeCheck = v.ADD_ATTR : Da(v.ADD_ATTR) && (x === $ && (x = Qt(x)), $e(x, v.ADD_ATTR, Ye))), Gt(v, "ADD_FORBID_CONTENTS") && Da(v.ADD_FORBID_CONTENTS) && (mn === vt && (mn = Qt(mn)), $e(mn, v.ADD_FORBID_CONTENTS, Ye)), Ua && (A["#text"] = !0), Ie && $e(A, ["html", "head", "body"]), A.table && ($e(A, ["tbody"]), delete H.tbody), v.TRUSTED_TYPES_POLICY) {
      if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Xi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Xi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const K = X;
      X = v.TRUSTED_TYPES_POLICY;
      try {
        re = M("");
      } catch (oe) {
        throw X = K, oe;
      }
    } else v.TRUSTED_TYPES_POLICY === null ? (X = void 0, re = "") : (X === void 0 && (X = ae()), X && typeof re == "string" && (re = M("")));
    pt && pt(v), Bn = v;
  }, zi = $e({}, [...hl, ...pl, ...Cm]), ja = $e({}, [...vl, ...Sm]), Yo = function(v, R, K) {
    return R.namespaceURI === Ht ? v === "svg" : R.namespaceURI === Bt ? v === "svg" && (K === "annotation-xml" || ui[K]) : !!zi[v];
  }, Va = function(v, R, K) {
    return R.namespaceURI === Ht ? v === "math" : R.namespaceURI === Fn ? v === "math" && rn[K] : !!ja[v];
  }, Ui = function(v, R, K) {
    return R.namespaceURI === Fn && !rn[K] || R.namespaceURI === Bt && !ui[K] ? !1 : !ja[v] && (qo[v] || !zi[v]);
  }, ma = function(v) {
    let R = I(v);
    (!R || !R.tagName) && (R = {
      namespaceURI: an,
      tagName: "template"
    });
    const K = lr(v.tagName), oe = lr(R.tagName);
    return $n[v.namespaceURI] ? v.namespaceURI === Fn ? Yo(K, R, oe) : v.namespaceURI === Bt ? Va(K, R, oe) : v.namespaceURI === Ht ? Ui(K, R, oe) : !!(zn === "application/xhtml+xml" && $n[v.namespaceURI]) : !1;
  }, Dt = function(v) {
    Qa(t.removed, {
      element: v
    });
    try {
      I(v).removeChild(v);
    } catch {
      if (N(v), !I(v))
        throw Xi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Bi = function(v, R, K) {
    try {
      v.removeAttributeNode(R);
    } catch {
      try {
        v.removeAttribute(K);
      } catch {
      }
    }
  }, jt = function(v) {
    Hi(v);
    const R = O(v);
    if (R) {
      const oe = [];
      Qi(R, (de) => {
        Qa(oe, de);
      }), Qi(oe, (de) => {
        try {
          N(de);
        } catch {
        }
      });
    }
    const K = j(v);
    if (K)
      for (let oe = K.length - 1; oe >= 0; --oe) {
        const de = K[oe], _e = de && de.name;
        typeof _e == "string" && Bi(v, de, _e);
      }
  }, Tt = function(v, R, K) {
    if (!K)
      try {
        K = R.getAttributeNode(v);
      } catch {
        K = null;
      }
    Qa(t.removed, {
      attribute: K || null,
      from: R
    });
    try {
      K ? R.removeAttributeNode(K) : R.removeAttribute(v);
    } catch {
      try {
        R.removeAttribute(v);
      } catch {
      }
    }
    if (v === "is")
      if (Ut || gn)
        try {
          Dt(R);
        } catch {
        }
      else
        try {
          R.setAttribute(v, "");
        } catch {
        }
  }, Yt = function(v) {
    const R = j(v);
    if (R)
      for (let K = R.length - 1; K >= 0; --K) {
        const oe = R[K], de = oe && oe.name;
        typeof de != "string" || x[Ye(de)] || Bi(v, oe, de);
      }
  }, Hi = function(v) {
    const R = [v];
    for (; R.length > 0; ) {
      const K = R.pop();
      U(K) === Jt.element && Yt(K);
      const de = O(K);
      if (de)
        for (let _e = de.length - 1; _e >= 0; --_e)
          R.push(de[_e]);
    }
  }, Qr = function(v, R) {
    return ke ? v === "patchsrc" ? !0 : v === "for" && R !== "label" && R !== "output" : !1;
  }, Hn = function(v) {
    if (!ke)
      return;
    const R = [v];
    for (; R.length > 0; ) {
      const K = R.pop(), oe = U(K);
      if (oe === Jt.processingInstruction || oe === Jt.comment && At(Ju, K.data)) {
        try {
          N(K);
        } catch {
        }
        continue;
      }
      if (oe === Jt.element) {
        const _e = K, Ue = Ye(G(K));
        try {
          _e.hasAttribute && _e.hasAttribute("patchsrc") && _e.removeAttribute("patchsrc"), _e.hasAttribute && _e.hasAttribute("for") && Qr("for", Ue) && _e.removeAttribute("for");
        } catch {
        }
      }
      const de = O(K);
      if (de)
        for (let _e = de.length - 1; _e >= 0; --_e)
          R.push(de[_e]);
    }
  }, Ga = function(v) {
    let R = null, K = null;
    if (Et)
      v = "<remove></remove>" + v;
    else {
      const _e = Hu(v, /^[\r\n\t ]+/);
      K = _e && _e[0];
    }
    zn === "application/xhtml+xml" && an === Ht && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
    const oe = X ? M(v) : v;
    if (an === Ht)
      try {
        R = new c().parseFromString(oe, zn);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = fe.createDocument(an, "template", null);
      try {
        R.documentElement.innerHTML = Mi ? re : oe;
      } catch {
      }
    }
    const de = R.body || R.documentElement;
    return v && K && de.insertBefore(n.createTextNode(K), de.childNodes[0] || null), an === Ht ? ye.call(R, Ie ? "html" : "body")[0] : Ie ? R.documentElement : de;
  }, ji = function(v) {
    const R = ce ? ce(v) : v.ownerDocument;
    return he.call(
      R || v,
      v,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Vi = function(v) {
    return v = er(v, at, " "), v = er(v, st, " "), v = er(v, ot, " "), v;
  }, Ka = function(v) {
    var R;
    v.normalize();
    const K = ce ? ce(v) : v.ownerDocument, oe = he.call(
      K || v,
      v,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let de = oe.nextNode();
    for (; de; )
      de.data = Vi(de.data), de = oe.nextNode();
    const _e = (R = v.querySelectorAll) === null || R === void 0 ? void 0 : R.call(v, "template");
    _e && Qi(_e, (Ue) => {
      hi(Ue.content) && Ka(Ue.content);
    });
  }, Gi = function(v) {
    const R = le ? le(v) : null;
    return typeof R != "string" || Ye(R) !== "form" ? !1 : typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    v.attributes !== j(v) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    v.nodeType !== F(v) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    v.childNodes !== O(v);
  }, hi = function(v) {
    if (!F || typeof v != "object" || v === null)
      return !1;
    try {
      return F(v) === Jt.documentFragment;
    } catch {
      return !1;
    }
  }, pi = function(v) {
    if (!F || typeof v != "object" || v === null)
      return !1;
    try {
      return typeof F(v) == "number";
    } catch {
      return !1;
    }
  };
  function Xt(Q, v, R) {
    Q.length !== 0 && Qi(Q, (K) => {
      K.call(t, v, R, Bn);
    });
  }
  const Xo = function(v, R) {
    return !!(ke && v.hasChildNodes() && !pi(v.firstElementChild) && At(Zu, v.textContent) && At(Zu, v.innerHTML) || ke && v.namespaceURI === Ht && Dm[R] && (pi(v.firstElementChild) || typeof v.textContent == "string" && At(Mm[R], v.textContent)) || v.nodeType === Jt.processingInstruction || ke && v.nodeType === Jt.comment && At(Ju, v.data));
  }, vi = function(v, R) {
    if (v instanceof RegExp)
      return At(v, R);
    if (v instanceof Function) {
      for (var K = arguments.length, oe = new Array(K > 2 ? K - 2 : 0), de = 2; de < K; de++)
        oe[de - 2] = arguments[de];
      return !!v(R, ...oe);
    }
    return !1;
  }, Zo = function(v, R, K) {
    if (!H[R] && is(R) && vi(V.tagNameCheck, R))
      return !1;
    if (Ua && !mn[R]) {
      const oe = I(v), de = O(v);
      if (de && oe) {
        const _e = de.length;
        for (let Ue = _e - 1; Ue >= 0; --Ue) {
          const Je = v === K ? C(de[Ue], !0) : de[Ue];
          oe.insertBefore(Je, S(v));
        }
      }
    }
    return Dt(v), !0;
  }, ba = function(v, R, K, oe) {
    return v.length === 0 ? R : R === K || R === oe ? Qt(R) : R;
  }, Wa = function(v, R) {
    return v === R || I(v) !== null ? !1 : (Ba && Hi(v), !0);
  }, es = function(v, R) {
    if (Xt(Te.beforeSanitizeElements, v, null), Wa(v, R))
      return !0;
    if (Gi(v))
      return Dt(v), !0;
    const K = Ye(G(v));
    if (A = ba(Te.uponSanitizeElement, A, L, it), Xt(Te.uponSanitizeElement, v, {
      tagName: K,
      allowedTags: A
    }), Wa(v, R))
      return !0;
    if (Xo(v, K))
      return Dt(v), !0;
    if (H[K] || !(B.tagCheck instanceof Function && B.tagCheck(K)) && !A[K]) {
      const de = Zo(v, K, R);
      return de === !1 && Xt(Te.afterSanitizeElements, v, null), de;
    }
    if (U(v) === Jt.element && !ma(v) || (K === "noscript" || K === "noembed" || K === "noframes") && At(Im, v.innerHTML))
      return Dt(v), !0;
    if (Ae && v.nodeType === Jt.text) {
      const de = Vi(v.textContent);
      v.textContent !== de && (Qa(t.removed, {
        element: v.cloneNode()
      }), v.textContent = de);
    }
    return Xt(Te.afterSanitizeElements, v, null), !1;
  }, ts = function(v, R, K) {
    if (J[R] || Qr(R, v) || Pt && (R === "id" || R === "name") && (K in n || K in Jr))
      return !1;
    const oe = x[R] || B.attributeCheck instanceof Function && B.attributeCheck(R, v);
    return se && At(bt, R) || ge && At(Ze, R) ? !0 : oe ? Tn[R] || At(y, er(K, z, "")) || (R === "src" || R === "xlink:href" || R === "href") && v !== "script" && ju(K, "data:") === 0 && Ha[v] || pe && !At(qt, er(K, z, "")) ? !0 : !K : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      is(v) && vi(V.tagNameCheck, v) && vi(V.attributeNameCheck, R, v) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && V.allowCustomizedBuiltInElements && vi(V.tagNameCheck, K)
    );
  }, ns = $e({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), is = function(v) {
    return !ns[lr(v)] && At(h, v);
  }, Jo = function(v, R, K, oe) {
    if (X && typeof f == "object" && typeof f.getAttributeType == "function" && !K)
      switch (f.getAttributeType(v, R)) {
        case "TrustedHTML":
          return M(oe);
        case "TrustedScriptURL":
          return Y(oe);
      }
    return oe;
  }, Qo = function(v, R, K, oe) {
    try {
      K ? v.setAttributeNS(K, R, oe) : v.setAttribute(R, oe), Gi(v) ? Dt(v) : Bu(t.removed);
    } catch {
      Tt(R, v);
    }
  }, ya = function(v) {
    Xt(Te.beforeSanitizeAttributes, v, null);
    const R = v.attributes;
    if (!R || Gi(v))
      return;
    x = ba(Te.uponSanitizeAttribute, x, $, lt);
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let oe = R.length;
    const de = Ye(v.nodeName);
    for (; oe--; ) {
      const _e = R[oe], Ue = _e.name, Je = _e.namespaceURI, E = _e.value, T = Ye(Ue), g = E;
      let W = Ue === "value" ? g : vm(g);
      if (K.attrName = T, K.attrValue = W, K.keepAttr = !0, K.forceKeepAttr = void 0, Xt(Te.uponSanitizeAttribute, v, K), W = K.attrValue, Pi && (T === "id" || T === "name") && ju(W, Di) !== 0 && (Tt(Ue, v, _e), W = Di + W), ke && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, W)) {
        Tt(Ue, v, _e);
        continue;
      }
      if (T === "attributename" && Hu(W, "href")) {
        Tt(Ue, v, _e);
        continue;
      }
      if (!K.forceKeepAttr) {
        if (!K.keepAttr) {
          Tt(Ue, v, _e);
          continue;
        }
        if (!we && At(Pm, W)) {
          Tt(Ue, v, _e);
          continue;
        }
        if (Ae && (W = Vi(W)), !ts(de, T, W)) {
          Tt(Ue, v, _e);
          continue;
        }
        W = Jo(de, T, Je, W), W !== g && Qo(v, Ue, Je, W);
      }
    }
    Xt(Te.afterSanitizeAttributes, v, null);
  }, An = function(v) {
    let R = null;
    const K = ji(v);
    for (Xt(Te.beforeSanitizeShadowDOM, v, null); R = K.nextNode(); )
      if (Xt(Te.uponSanitizeShadowNode, R, null), es(R, v), ya(R), hi(R.content) && An(R.content), U(R) === Jt.element) {
        const oe = D(R);
        hi(oe) && (qa(oe), An(oe));
      }
    Xt(Te.afterSanitizeShadowDOM, v, null);
  }, qa = function(v) {
    const R = [{
      node: v,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const K = R.pop();
      if (K.shadow) {
        An(K.shadow);
        continue;
      }
      const oe = K.node, _e = U(oe) === Jt.element, Ue = O(oe);
      if (Ue)
        for (let Je = Ue.length - 1; Je >= 0; --Je)
          R.push({
            node: Ue[Je],
            shadow: null
          });
      if (_e) {
        const Je = le ? le(oe) : null;
        if (typeof Je == "string" && Ye(Je) === "template") {
          const E = oe.content;
          hi(E) && R.push({
            node: E,
            shadow: null
          });
        }
      }
      if (_e) {
        const Je = D(oe);
        hi(Je) && R.push({
          node: null,
          shadow: Je
        }, {
          node: Je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Q) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, K = null, oe = null, de = null;
    if (Mi = !Q, Mi && (Q = "<!-->"), typeof Q != "string" && !pi(Q) && (Q = _m(Q), typeof Q != "string"))
      throw Xi("dirty is not a string, aborting");
    if (!t.isSupported)
      return Q;
    je ? (A = it, x = lt) : fi(v), (Te.uponSanitizeElement.length > 0 || Te.uponSanitizeAttribute.length > 0) && (A = Qt(A)), Te.uponSanitizeAttribute.length > 0 && (x = Qt(x)), t.removed = [];
    const _e = Ba && typeof Q != "string" && pi(Q);
    if (_e) {
      Hn(Q);
      const E = G(Q);
      if (typeof E == "string") {
        const T = Ye(E);
        if (!A[T] || H[T])
          throw jt(Q), Xi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Gi(Q))
        throw jt(Q), Xi("root node is clobbered and cannot be sanitized in-place");
      try {
        qa(Q);
      } catch (T) {
        throw jt(Q), T;
      }
    } else if (pi(Q))
      R = Ga("<!---->"), K = R.ownerDocument.importNode(Q, !0), K.nodeType === Jt.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? R = K : R.appendChild(K), qa(K);
    else {
      if (!Ut && !Ae && !Ie && // eslint-disable-next-line unicorn/prefer-includes
      Q.indexOf("<") === -1)
        return X && Ve ? M(Q) : Q;
      if (R = Ga(Q), !R)
        return Ut ? null : Ve ? re : "";
    }
    R && Et && Dt(R.firstChild);
    const Ue = _e ? Q : R;
    try {
      const E = ji(Ue);
      for (; oe = E.nextNode(); )
        es(oe, Ue), ya(oe), hi(oe.content) && An(oe.content);
    } catch (E) {
      throw _e && (jt(Q), Qi(t.removed, (T) => {
        T.element && Hi(T.element);
      })), E;
    }
    if (_e)
      return Qi(t.removed, (E) => {
        E.element && Hi(E.element);
      }), Ae && Ka(Q), Q;
    if (Ut) {
      if (Ae && Ka(R), gn)
        for (de = Se.call(R.ownerDocument); R.firstChild; )
          de.appendChild(R.firstChild);
      else
        de = R;
      return (x.shadowroot || x.shadowrootmode) && (de = Xe.call(i, de, !0)), de;
    }
    let Je = Ie ? R.outerHTML : R.innerHTML;
    return Ie && A["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && At(Lm, R.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Je), Ae && (Je = Vi(Je)), X && Ve ? M(Je) : Je;
  }, t.setConfig = function() {
    let Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fi(Q), je = !0, it = A, lt = x;
  }, t.clearConfig = function() {
    Bn = null, je = !1, it = null, lt = null, X = ue, re = "";
  }, t.isValidAttribute = function(Q, v, R) {
    Bn || fi({});
    const K = Ye(Q), oe = Ye(v);
    return ts(K, oe, R);
  }, t.addHook = function(Q, v) {
    typeof v == "function" && Gt(Te, Q) && Qa(Te[Q], v);
  }, t.removeHook = function(Q, v) {
    if (Gt(Te, Q)) {
      if (v !== void 0) {
        const R = hm(Te[Q], v);
        return R === -1 ? void 0 : pm(Te[Q], R, 1)[0];
      }
      return Bu(Te[Q]);
    }
  }, t.removeHooks = function(Q) {
    Gt(Te, Q) && (Te[Q] = []);
  }, t.removeAllHooks = function() {
    Te = Qu();
  }, t;
}
var gh = vh();
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bl, ed;
function zm() {
  if (ed) return bl;
  ed = 1;
  var e = /["'&<>]/;
  bl = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, s = "", o = 0, l = 0;
    for (o = a.index; o < i.length; o++) {
      switch (i.charCodeAt(o)) {
        case 34:
          r = "&quot;";
          break;
        case 38:
          r = "&amp;";
          break;
        case 39:
          r = "&#39;";
          break;
        case 60:
          r = "&lt;";
          break;
        case 62:
          r = "&gt;";
          break;
        default:
          continue;
      }
      l !== o && (s += i.substring(l, o)), l = o + 1, s += r;
    }
    return l !== o ? s + i.substring(l, o) : s;
  }
  return bl;
}
var Um = zm();
const zs = /* @__PURE__ */ Mc(Um);
function Bm() {
  return globalThis._nc_l10n_locale;
}
function Hm() {
  return Bm().replaceAll(/_/g, "-");
}
function Bo() {
  return globalThis._nc_l10n_language;
}
function jm(e) {
  const t = Bo();
  return [
    "ae",
    // Avestan
    "ar",
    // 'العربية', Arabic
    "arc",
    // Aramaic
    "arz",
    // 'مصرى', Egyptian
    "bcc",
    // 'بلوچی مکرانی', Southern Balochi
    "bqi",
    // 'بختياري', Bakthiari
    "ckb",
    // 'Soranî / کوردی', Sorani
    "dv",
    // Dhivehi
    "fa",
    // 'فارسی', Persian
    "glk",
    // 'گیلکی', Gilaki
    "ha",
    // 'هَوُسَ', Hausa
    "he",
    // 'עברית', Hebrew
    "khw",
    // 'کھوار', Khowar
    "ks",
    // 'कॉशुर / کٲشُر', Kashmiri
    "ku",
    // 'Kurdî / كوردی', Kurdish
    "mzn",
    // 'مازِرونی', Mazanderani
    "nqo",
    // 'ߒߞߏ', N’Ko
    "pnb",
    // 'پنجابی', Western Punjabi
    "ps",
    // 'پښتو', Pashto,
    "sd",
    // 'سنڌي', Sindhi
    "ug",
    // 'Uyghurche / ئۇيغۇرچە', Uyghur
    "ur",
    // 'اردو', Urdu
    "ur-PK",
    // 'اردو', Urdu (nextcloud BCP47 variant)
    "uz-AF",
    // 'اوزبیکی', Uzbek Afghan
    "yi"
    // 'ייִדיש', Yiddish
  ].includes(t);
}
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function mh(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function w(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (S) => S, u = (o.sanitize ? gh.sanitize : l) || l, c = o.escape ? zs : l, f = (S) => typeof S == "string" || typeof S == "number", b = (S, O, I) => S.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, (D, j) => {
    if (O === void 0 || !(j in O))
      return c(D);
    const F = O[j];
    return f(F) ? c(`${F}`) : typeof F == "object" && f(F.value) ? (F.escape !== !1 ? zs : l)(`${F.value}`) : c(D);
  });
  let N = (a?.bundle ?? mh(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, u(typeof r == "object" || s !== void 0 ? b(
    N,
    r,
    s
  ) : N);
}
function ea(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? mh(e), l = o.translations[s];
  if (typeof l < "u") {
    const u = l;
    if (Array.isArray(u)) {
      const c = o.pluralFunction(i);
      return w(e, u[c], a, i, r);
    }
  }
  return i === 1 ? w(e, t, a, i, r) : w(e, n, a, i, r);
}
function Vm(e, t = Bo()) {
  switch (t === "pt-BR" && (t = "xbr"), t.length > 3 && (t = t.substring(0, t.lastIndexOf("-"))), t) {
    case "az":
    case "bo":
    case "dz":
    case "id":
    case "ja":
    case "jv":
    case "ka":
    case "km":
    case "kn":
    case "ko":
    case "ms":
    case "th":
    case "tr":
    case "vi":
    case "zh":
      return 0;
    case "af":
    case "bn":
    case "bg":
    case "ca":
    case "da":
    case "de":
    case "el":
    case "en":
    case "eo":
    case "es":
    case "et":
    case "eu":
    case "fa":
    case "fi":
    case "fo":
    case "fur":
    case "fy":
    case "gl":
    case "gu":
    case "ha":
    case "he":
    case "hu":
    case "is":
    case "it":
    case "ku":
    case "lb":
    case "ml":
    case "mn":
    case "mr":
    case "nah":
    case "nb":
    case "ne":
    case "nl":
    case "nn":
    case "no":
    case "oc":
    case "om":
    case "or":
    case "pa":
    case "pap":
    case "ps":
    case "pt":
    case "so":
    case "sq":
    case "sv":
    case "sw":
    case "ta":
    case "te":
    case "tk":
    case "ur":
    case "zu":
      return e === 1 ? 0 : 1;
    case "am":
    case "bh":
    case "fil":
    case "fr":
    case "gun":
    case "hi":
    case "hy":
    case "ln":
    case "mg":
    case "nso":
    case "xbr":
    case "ti":
    case "wa":
      return e === 0 || e === 1 ? 0 : 1;
    case "be":
    case "bs":
    case "hr":
    case "ru":
    case "sh":
    case "sr":
    case "uk":
      return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    case "cs":
    case "sk":
      return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    case "ga":
      return e === 1 ? 0 : e === 2 ? 1 : 2;
    case "lt":
      return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    case "sl":
      return e % 100 === 1 ? 0 : e % 100 === 2 ? 1 : e % 100 === 3 || e % 100 === 4 ? 2 : 3;
    case "mk":
      return e % 10 === 1 ? 0 : 1;
    case "mt":
      return e === 1 ? 0 : e === 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
    case "lv":
      return e === 0 ? 0 : e % 10 === 1 && e % 100 !== 11 ? 1 : 2;
    case "pl":
      return e === 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
    case "cy":
      return e === 1 ? 0 : e === 2 ? 1 : e === 8 || e === 11 ? 2 : 3;
    case "ro":
      return e === 1 ? 0 : e === 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
    case "ar":
      return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5;
    default:
      return 0;
  }
}
class Us {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Us.GLOBAL_SCOPE_PERSISTENT : Us.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
  }
  scopeKey(t) {
    return `${this.scope}${t}`;
  }
  setItem(t, n) {
    this.wrapped.setItem(this.scopeKey(t), n);
  }
  getItem(t) {
    return this.wrapped.getItem(this.scopeKey(t));
  }
  removeItem(t) {
    this.wrapped.removeItem(this.scopeKey(t));
  }
  clear() {
    Object.keys(this.wrapped).filter((t) => t.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
}
class Gm {
  appId;
  persisted = !1;
  clearedOnLogout = !1;
  constructor(t) {
    this.appId = t;
  }
  persist(t = !0) {
    return this.persisted = t, this;
  }
  clearOnLogout(t = !0) {
    return this.clearedOnLogout = t, this;
  }
  build() {
    return new Us(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function bh(e) {
  return new Gm(e);
}
function Km() {
  try {
    return Dc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var yl, td;
function yh() {
  if (td) return yl;
  td = 1;
  var e = {};
  return yl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, yl;
}
var _l, nd;
function _h() {
  if (nd) return _l;
  nd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return _l = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_SAFE_INTEGER: n,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: e,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, _l;
}
var ds = { exports: {} }, id;
function Wm() {
  return id || (id = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = _h(), r = yh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], u = t.safeSrc = [], c = t.t = {};
    let f = 0;
    const b = "[a-zA-Z0-9-]", C = [
      ["\\s", 1],
      ["\\d", a],
      [b, i]
    ], N = (O) => {
      for (const [I, D] of C)
        O = O.split(`${I}*`).join(`${I}{0,${D}}`).split(`${I}+`).join(`${I}{1,${D}}`);
      return O;
    }, S = (O, I, D) => {
      const j = N(I), F = f++;
      r(O, F, I), c[O] = F, l[F] = I, u[F] = j, s[F] = new RegExp(I, D ? "g" : void 0), o[F] = new RegExp(j, D ? "g" : void 0);
    };
    S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${b}*`), S("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${b}+`), S("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), S("FULL", `^${l[c.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), S("LOOSE", `^${l[c.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), S("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), S("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", l[c.COERCE], !0), S("COERCERTLFULL", l[c.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ds, ds.exports)), ds.exports;
}
var wl, ad;
function qm() {
  if (ad) return wl;
  ad = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return wl = (i) => i ? typeof i != "object" ? e : i : t, wl;
}
var Cl, rd;
function Ym() {
  if (rd) return Cl;
  rd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Cl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Cl;
}
var Sl, sd;
function wh() {
  if (sd) return Sl;
  sd = 1;
  const e = yh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = _h(), { safeRe: i, t: a } = Wm(), r = qm(), { compareIdentifiers: s } = Ym(), o = (u, c) => {
    const f = c.split(".");
    if (f.length > u.length)
      return !1;
    for (let b = 0; b < f.length; b++)
      if (s(u[b], f[b]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(c, f) {
      if (f = r(f), c instanceof l) {
        if (c.loose === !!f.loose && c.includePrerelease === !!f.includePrerelease)
          return c;
        c = c.version;
      } else if (typeof c != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
      if (c.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", c, f), this.options = f, this.loose = !!f.loose, this.includePrerelease = !!f.includePrerelease;
      const b = c.trim().match(f.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!b)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +b[1], this.minor = +b[2], this.patch = +b[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      b[4] ? this.prerelease = b[4].split(".").map((C) => {
        if (/^[0-9]+$/.test(C)) {
          const N = +C;
          if (N >= 0 && N < n)
            return N;
        }
        return C;
      }) : this.prerelease = [], this.build = b[5] ? b[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(c) {
      if (e("SemVer.compare", this.version, this.options, c), !(c instanceof l)) {
        if (typeof c == "string" && c === this.version)
          return 0;
        c = new l(c, this.options);
      }
      return c.version === this.version ? 0 : this.compareMain(c) || this.comparePre(c);
    }
    compareMain(c) {
      return c instanceof l || (c = new l(c, this.options)), this.major < c.major ? -1 : this.major > c.major ? 1 : this.minor < c.minor ? -1 : this.minor > c.minor ? 1 : this.patch < c.patch ? -1 : this.patch > c.patch ? 1 : 0;
    }
    comparePre(c) {
      if (c instanceof l || (c = new l(c, this.options)), this.prerelease.length && !c.prerelease.length)
        return -1;
      if (!this.prerelease.length && c.prerelease.length)
        return 1;
      if (!this.prerelease.length && !c.prerelease.length)
        return 0;
      let f = 0;
      do {
        const b = this.prerelease[f], C = c.prerelease[f];
        if (e("prerelease compare", f, b, C), b === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === C)
          continue;
        return s(b, C);
      } while (++f);
    }
    compareBuild(c) {
      c instanceof l || (c = new l(c, this.options));
      let f = 0;
      do {
        const b = this.build[f], C = c.build[f];
        if (e("build compare", f, b, C), b === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === C)
          continue;
        return s(b, C);
      } while (++f);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, f, b) {
      if (c.startsWith("pre")) {
        if (!f && b === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (f) {
          const C = `-${f}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!C || C[1] !== f)
            throw new Error(`invalid identifier: ${f}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", f, b);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", f, b);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", f, b), this.inc("pre", f, b);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", f, b), this.inc("pre", f, b);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const C = Number(b) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [C];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (f === this.prerelease.join(".") && b === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(C);
            }
          }
          if (f) {
            let N = [f, C];
            if (b === !1 && (N = [f]), o(this.prerelease, f)) {
              const S = this.prerelease[f.split(".").length];
              isNaN(S) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${c}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Sl = l, Sl;
}
var El, od;
function Xm() {
  if (od) return El;
  od = 1;
  const e = wh();
  return El = (n, i) => new e(n, i).major, El;
}
var Zm = Xm();
const ld = /* @__PURE__ */ Mc(Zm);
var Tl, cd;
function Jm() {
  if (cd) return Tl;
  cd = 1;
  const e = wh();
  return Tl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Tl;
}
var Al, ud;
function Qm() {
  if (ud) return Al;
  ud = 1;
  const e = Jm();
  return Al = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Al;
}
var eb = Qm();
const tb = /* @__PURE__ */ Mc(eb);
class nb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !tb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : ld(t.getVersion()) !== ld(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()
    ), this.bus = t;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, n) {
    this.bus.subscribe(t, n);
  }
  unsubscribe(t, n) {
    this.bus.unsubscribe(t, n);
  }
  emit(t, ...n) {
    this.bus.emit(t, ...n);
  }
}
class ib {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, n) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).concat(
        n
      )
    );
  }
  unsubscribe(t, n) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).filter((i) => i !== n)
    );
  }
  emit(t, ...n) {
    (this.handlers.get(t) || []).forEach((a) => {
      try {
        a(n[0]);
      } catch (r) {
        console.error("could not invoke event listener", r);
      }
    });
  }
}
let nr = null;
function Fc() {
  return nr !== null ? nr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? nr = new nb(window._nc_event_bus) : nr = window._nc_event_bus = new ib(), nr);
}
function Ch(e, t) {
  Fc().subscribe(e, t);
}
function ab(e, t) {
  Fc().unsubscribe(e, t);
}
function ii(e, ...t) {
  Fc().emit(e, ...t);
}
const Sh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rb = Object.prototype.toString, sb = (e) => rb.call(e) === "[object Object]", Ea = () => {
}, ob = /* @__PURE__ */ lb();
function lb() {
  var e, t, n;
  return Sh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function kl(e) {
  return Array.isArray(e) ? e : [e];
}
function cb(e, t, n) {
  return Wt(e, t, {
    ...n,
    immediate: !0
  });
}
const Eh = Sh ? window : void 0;
function cr(e) {
  var t;
  const n = ei(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ma(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = ee(() => {
    const i = kl(ei(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return cb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => cr(r))) !== null && i !== void 0 ? i : [Eh].filter((r) => r != null),
      kl(ei(n.value ? e[1] : e[0])),
      kl(m(n.value ? e[2] : e[1])),
      ei(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const u = sb(s) ? { ...s } : s, c = i.flatMap((f) => a.flatMap((b) => r.map((C) => t(f, b, C, u))));
    l(() => {
      c.forEach((f) => f());
    });
  }, { flush: "post" });
}
let dd = !1;
function fd(e, t, n = {}) {
  const { window: i = Eh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ea,
    cancel: Ea,
    trigger: Ea
  } : Ea;
  if (ob && !dd) {
    dd = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((I) => I.addEventListener("click", Ea, O)), i.document.documentElement.addEventListener("click", Ea, O);
  }
  let l = !0;
  const u = (O) => ei(a).some((I) => {
    if (typeof I == "string") return Array.from(i.document.querySelectorAll(I)).some((D) => D === O.target || O.composedPath().includes(D));
    {
      const D = cr(I);
      return D && (O.target === D || O.composedPath().includes(D));
    }
  });
  function c(O) {
    const I = ei(O);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function f(O, I) {
    const D = ei(O), j = D.$.subTree && D.$.subTree.children;
    return j == null || !Array.isArray(j) ? !1 : j.some((F) => F.el === I.target || I.composedPath().includes(F.el));
  }
  const b = (O) => {
    const I = cr(e);
    if (O.target != null && !(!(I instanceof Element) && c(e) && f(e, O)) && !(!I || I === O.target || O.composedPath().includes(I))) {
      if ("detail" in O && O.detail === 0 && (l = !u(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let C = !1;
  const N = [
    Ma(i, "click", (O) => {
      C || (C = !0, setTimeout(() => {
        C = !1;
      }, 0), b(O));
    }, {
      passive: !0,
      capture: r
    }),
    Ma(i, "pointerdown", (O) => {
      const I = cr(e);
      l = !u(O) && !!(I && !O.composedPath().includes(I));
    }, { passive: !0 }),
    s && Ma(i, "blur", (O) => {
      setTimeout(() => {
        const I = cr(e);
        let D = i.document.activeElement;
        for (; D?.shadowRoot; ) D = D.shadowRoot.activeElement;
        D?.tagName === "IFRAME" && !I?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), S = () => N.forEach((O) => O());
  return o ? {
    stop: S,
    cancel: () => {
      l = !1;
    },
    trigger: (O) => {
      l = !0, b(O), l = !1;
    }
  } : S;
}
function ub(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), u = ee(() => o.x - l.x), c = ee(() => o.y - l.y), { max: f, abs: b } = Math, C = ee(() => f(b(u.value), b(c.value)) >= n), N = /* @__PURE__ */ gf(!1), S = ee(() => C.value ? b(u.value) > b(c.value) ? u.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), O = (U) => [U.touches[0].clientX, U.touches[0].clientY], I = (U, G) => {
    o.x = U, o.y = G;
  }, D = (U, G) => {
    l.x = U, l.y = G;
  }, j = {
    passive: s,
    capture: !s
  }, F = (U) => {
    N.value && a?.(U, S.value), N.value = !1;
  }, le = [
    Ma(e, "touchstart", (U) => {
      if (U.touches.length !== 1) return;
      const [G, X] = O(U);
      I(G, X), D(G, X), r?.(U);
    }, j),
    Ma(e, "touchmove", (U) => {
      if (U.touches.length !== 1) return;
      const [G, X] = O(U);
      D(G, X), j.capture && !j.passive && Math.abs(u.value) > Math.abs(c.value) && U.preventDefault(), !N.value && C.value && (N.value = !0), N.value && i?.(U);
    }, j),
    Ma(e, ["touchend", "touchcancel"], F, j)
  ];
  return {
    isSwiping: N,
    direction: S,
    coordsStart: o,
    coordsEnd: l,
    lengthX: u,
    lengthY: c,
    stop: () => le.forEach((U) => U())
  };
}
var db = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
  __name: "splitpanes",
  props: {
    horizontal: {
      type: Boolean,
      default: !1
    },
    pushOtherPanes: {
      type: Boolean,
      default: !0
    },
    maximizePanes: {
      type: Boolean,
      default: !0
    },
    rtl: {
      type: Boolean,
      default: !1
    },
    firstSplitter: {
      type: Boolean,
      default: !1
    },
    keyboardStep: {
      type: Number,
      default: 5
    }
  },
  emits: [
    "ready",
    "resize",
    "resized",
    "pane-click",
    "pane-maximize",
    "pane-add",
    "pane-remove",
    "splitter-click",
    "splitter-dblclick",
    "direction-changed"
  ],
  setup(e, { emit: t }) {
    let n = t, i = e, a = zv(), r = $v(), s = /* @__PURE__ */ ut([]), o = ee(() => s.value.reduce((z, h) => (z[~~h.id] = h) && z, {})), l = ee(() => s.value.length), u = /* @__PURE__ */ ut(null), c = /* @__PURE__ */ ut(!1), f = /* @__PURE__ */ ut({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), b = /* @__PURE__ */ ut({
      splitter: null,
      timeoutId: null
    }), C = ee(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": f.value.dragging,
      "splitpanes--ready": c.value
    })), N = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", D), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", D));
    }, S = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", D), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", D));
    }, O = (z, h) => {
      let y = z.target.closest(".splitpanes__splitter");
      if (y) {
        let { left: A, top: L } = y.getBoundingClientRect(), { clientX: x, clientY: $ } = "ontouchstart" in window && z.touches ? z.touches[0] : z;
        f.value.cursorOffset = i.horizontal ? $ - L : x - A;
      }
      N(), f.value.mouseDown = !0, f.value.activeSplitter = h, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, I = (z) => {
      f.value.mouseDown && (z.preventDefault(), f.value.dragging || (window.getSelection()?.removeAllRanges(), f.value.dragging = !0), requestAnimationFrame(() => {
        X(U(z)), Ze("resize", { event: z }, !0);
      }));
    }, D = (z) => {
      f.value.dragging && (window.getSelection()?.removeAllRanges(), Ze("resized", { event: z }, !0)), f.value.mouseDown = !1, f.value.activeSplitter = null, setTimeout(() => {
        f.value.dragging = !1, S(), document.documentElement.style.cursor = "";
      }, 100);
    }, j = (z, h) => {
      "ontouchstart" in window && (z.preventDefault(), b.value.splitter === h ? (clearTimeout(b.value.timeoutId), b.value.timeoutId = null, F(z, h), b.value.splitter = null) : (b.value.splitter = h, b.value.timeoutId = setTimeout(() => b.value.splitter = null, 500))), f.value.dragging || Ze("splitter-click", {
        event: z,
        index: h
      }, !0);
    }, F = (z, h) => {
      if (Ze("splitter-dblclick", {
        event: z,
        index: h
      }, !0), i.maximizePanes) {
        let y = 0;
        s.value = s.value.map((A, L) => (A.size = L === h ? A.max : A.min, L !== h && (y += A.min), A)), s.value[h].size -= y, Ze("pane-maximize", {
          event: z,
          index: h,
          pane: s.value[h]
        }), Ze("resized", {
          event: z,
          index: h
        }, !0);
      }
    }, le = (z, h) => {
      if (!i.keyboardStep) return;
      let y = i.horizontal ? z.key === "ArrowDown" : z.key === "ArrowRight", A = i.horizontal ? z.key === "ArrowUp" : z.key === "ArrowLeft";
      if (!y && !A) return;
      z.preventDefault(), f.value.activeSplitter = h;
      let L = (y ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = te(h) + s.value[h].size;
      re(Math.min(Math.max(x + L * i.keyboardStep, 0), 100)), Ze("resize", { event: z }, !0), Ze("resized", { event: z }, !0), f.value.activeSplitter = null;
    }, ce = (z, h) => {
      let y = o.value[h];
      y && Ze("pane-click", {
        event: z,
        index: y.index,
        pane: y
      });
    }, U = (z) => {
      let h = u.value.getBoundingClientRect(), { clientX: y, clientY: A } = "ontouchstart" in window && z.touches ? z.touches[0] : z;
      return {
        x: y - (i.horizontal ? 0 : f.value.cursorOffset) - h.left,
        y: A - (i.horizontal ? f.value.cursorOffset : 0) - h.top
      };
    }, G = (z) => {
      z = z[i.horizontal ? "y" : "x"];
      let h = u.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (z = h - z), z * 100 / h;
    }, X = (z) => {
      re(G(z));
    }, re = (z) => {
      let h = f.value.activeSplitter;
      if (h === null || h >= s.value.length - 1) return;
      let y = {
        prevPanesSize: te(h),
        nextPanesSize: ie(h),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, A = 0 + (i.pushOtherPanes ? 0 : y.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : y.nextPanesSize);
      z = Math.max(Math.min(z, L), A);
      let x = [h, h + 1], $ = s.value[x[0]] || null, V = s.value[x[1]] || null, H = $ !== null && $.max < 100 && z >= $.max + y.prevPanesSize, J = V !== null && V.max < 100 && z <= 100 - (V.max + ie(h + 1));
      if (H || J) {
        H ? ($.size = $.max, V.size = Math.min(Math.max(100 - $.max - y.prevPanesSize - y.nextPanesSize, V.min), V.max)) : ($.size = Math.min(Math.max(100 - V.max - y.prevPanesSize - ie(h + 1), $.min), $.max), V.size = V.max);
        return;
      }
      if (i.pushOtherPanes) {
        let B = ue(y, z);
        if (!B) return;
        ({ sums: y, panesToResize: x } = B), $ = s.value[x[0]] || null, V = s.value[x[1]] || null;
      }
      $ !== null && ($.size = Math.min(Math.max(z - y.prevPanesSize - y.prevReachedMinPanes, $.min), $.max)), V !== null && (V.size = Math.min(Math.max(100 - z - y.nextPanesSize - y.nextReachedMinPanes, V.min), V.max));
    }, ue = (z, h) => {
      let y = f.value.activeSplitter, A = [y, y + 1];
      if (h < z.prevPanesSize + s.value[A[0]].min) {
        if (A[0] = P(y).index, z.prevReachedMinPanes = 0, A[0] < y && s.value.forEach((L, x) => {
          x > A[0] && x <= y && (L.size = L.min, z.prevReachedMinPanes += L.min);
        }), A[0] === void 0) return z.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, x) => {
          x > 0 && x <= y && (L.size = L.min, z.prevReachedMinPanes += L.min);
        }), s.value[A[1]].size = 100 - z.prevReachedMinPanes - s.value[0].min - z.prevPanesSize - z.nextPanesSize, null;
        z.prevPanesSize = te(A[0]);
      }
      return h > 100 - z.nextPanesSize - s.value[A[1]].min && (A[1] = M(y).index, z.nextReachedMinPanes = 0, A[1] > y + 1 && s.value.forEach((L, x) => {
        x > y && x < A[1] && (L.size = L.min, z.nextReachedMinPanes += L.min);
      }), z.nextPanesSize = A[1] === void 0 ? 0 : ie(A[1] - 1), A[1] === void 0) ? (z.nextReachedMinPanes = 0, s.value.forEach((L, x) => {
        x >= y + 1 && (L.size = L.min, z.nextReachedMinPanes += L.min);
      }), A[0] !== void 0 && (s.value[A[0]].size = 100 - z.prevPanesSize - ie(A[0] - 1)), null) : {
        sums: z,
        panesToResize: A
      };
    }, te = (z) => s.value.reduce((h, y, A) => h + (A < z ? y.size : 0), 0), ie = (z) => s.value.reduce((h, y, A) => h + (A > z + 1 ? y.size : 0), 0), P = (z) => [...s.value].reverse().find((h) => h.index < z && h.size > h.min) || {}, M = (z) => s.value.find((h) => h.index > z + 1 && h.size > h.min) || {}, Y = () => {
      let z = Array.from(u.value?.children || []);
      for (let h of z) {
        let y = h.classList.contains("splitpanes__pane"), A = h.classList.contains("splitpanes__splitter");
        !y && !A && (h.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (z, h, y = !1) => {
      let A = z - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), y || (L.onmousedown = (x) => O(x, A), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (x) => O(x, A)), L.onclick = (x) => j(x, A + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (x) => le(x, A))), L.ondblclick = (x) => F(x, A + 1), h.parentNode.insertBefore(L, h);
    }, Z = (z) => {
      z.onmousedown = null, z.onclick = null, z.ondblclick = null, z.onkeydown = null, z.remove();
    }, fe = () => {
      let z = Array.from(u.value?.children || []);
      for (let y of z) y.className.includes("splitpanes__splitter") && Z(y);
      let h = 0;
      for (let y of z) y.className.includes("splitpanes__pane") && (!h && i.firstSplitter ? ae(h, y, !0) : h && ae(h, y), h++);
    }, he = ({ uid: z, ...h }) => {
      let y = o.value[z];
      for (let [A, L] of Object.entries(h)) y[A] = L;
    }, Se = !1, ye = (z) => {
      let h = -1;
      Array.from(u.value?.children || []).some((y) => (y.className.includes("splitpanes__pane") && h++, y.isSameNode(z.el))), s.value.splice(h, 0, {
        ...z,
        index: h
      }), s.value.forEach((y, A) => y.index = A), c.value && !Se && (Se = !0, ti(() => {
        fe(), Te({ addedPane: s.value[h] }), Ze("pane-add", { pane: s.value[h] }), Se = !1;
      }));
    }, Xe = (z) => {
      let h = s.value.findIndex((A) => A.id === z);
      s.value[h].el = null;
      let y = s.value.splice(h, 1)[0];
      s.value.forEach((A, L) => A.index = L), ti(() => {
        fe(), Ze("pane-remove", { pane: y }), Te({ removedPane: {
          ...y
        } });
      });
    }, Te = (z = {}) => {
      !z.addedPane && !z.removedPane ? st() : s.value.some((h) => h.givenSize !== null || h.min || h.max < 100) ? ot(z) : at(), c.value && Ze("resized");
    }, at = () => {
      let z = 100 / l.value, h = 100, y = [], A = [];
      for (let L of s.value) L.size = Math.max(Math.min(z, L.max), L.min), h -= L.size, L.size >= L.max && y.push(L.id), L.size <= L.min && A.push(L.id);
      Math.abs(h) > 0.1 && bt(h, y, A);
    }, st = () => {
      let z = 100, h = [], y = [], A = 0;
      for (let x of s.value) z -= x.size, x.givenSize !== null && A++, x.size >= x.max && h.push(x.id), x.size <= x.min && y.push(x.id);
      let L = 100;
      if (z > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(z / (l.value - A), x.max), x.min)), L -= x.size;
        L > 0.1 && bt(L, h, y);
      }
    }, ot = ({ addedPane: z, removedPane: h } = {}) => {
      let y = s.value.reduce((H, J) => H + (J.givenSize === null ? 0 : J.givenSize), 0), A = s.value.filter((H) => H.givenSize === null).length, L = A > 0 ? (100 - y) / A : 0, x = 0, $ = [], V = [];
      for (let H of s.value) x -= H.size, H.size >= H.max && $.push(H.id), H.size <= H.min && V.push(H.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let H of s.value) H.givenSize === null && (H.size = Math.max(Math.min(L, H.max), H.min)), x -= H.size, H.size >= H.max && $.push(H.id), H.size <= H.min && V.push(H.id);
        Math.abs(x) > 0.1 && bt(x, $, V);
      }
    }, bt = (z, h, y) => {
      let A;
      A = z > 0 ? z / (l.value - h.length) : z / (l.value - y.length), s.value.forEach((L, x) => {
        if (z > 0 && !h.includes(L.id)) {
          let $ = Math.max(Math.min(L.size + A, L.max), L.min), V = $ - L.size;
          z -= V, L.size = $;
        } else if (!y.includes(L.id)) {
          let $ = Math.max(Math.min(L.size + A, L.max), L.min), V = $ - L.size;
          z -= V, L.size = $;
        }
      }), Math.abs(z) > 0.1 && c.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Ze = (z, h = void 0, y = !1) => {
      let A = h?.index ?? f.value.activeSplitter ?? null;
      n(z, {
        ...h,
        ...A !== null && { index: A },
        ...y && A !== null && {
          prevPane: s.value[A - +!!i.firstSplitter],
          nextPane: s.value[A + +!i.firstSplitter]
        },
        panes: s.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    Wt(() => i.firstSplitter, () => fe()), Wt(() => i.horizontal, (z) => ti(() => {
      n("direction-changed", {
        horizontal: z,
        panes: s.value.map((h) => ({
          min: h.min,
          max: h.max,
          size: h.size
        }))
      });
    })), Li(() => {
      Y(), fe(), Te(), Ze("ready"), c.value = !0;
    }), za(() => c.value = !1);
    let qt = () => {
      let { class: z, ...h } = a;
      return Vt("div", {
        ref: u,
        class: [C.value, z],
        ...h
      }, r.default?.());
    };
    return un("panes", s), un("indexedPanes", o), un("horizontal", ee(() => i.horizontal)), un("requestUpdate", he), un("onPaneAdd", ye), un("onPaneRemove", Xe), un("onPaneClick", ce), (z, h) => (_(), De(Nc(qt)));
  }
}), fb = {
  __name: "pane",
  props: {
    size: { type: [Number, String] },
    minSize: {
      type: [Number, String],
      default: 0
    },
    maxSize: {
      type: [Number, String],
      default: 100
    }
  },
  setup(e) {
    let t = e, n = Nt("requestUpdate"), i = Nt("onPaneAdd"), a = Nt("horizontal"), r = Nt("onPaneRemove"), s = Nt("onPaneClick"), o = ha()?.uid, l = Nt("indexedPanes"), u = ee(() => l.value[o]), c = /* @__PURE__ */ ut(null), f = ee(() => {
      let S = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(S, C.value), b.value);
    }), b = ee(() => {
      let S = parseFloat(t.minSize);
      return isNaN(S) ? 0 : S;
    }), C = ee(() => {
      let S = parseFloat(t.maxSize);
      return isNaN(S) ? 100 : S;
    }), N = ee(() => {
      let S = u.value?.size ?? (t.size === void 0 ? void 0 : f.value);
      return S === void 0 ? "" : `${a.value ? "height" : "width"}: ${S}%`;
    });
    return Wt(() => f.value, (S) => n({
      uid: o,
      size: S
    })), Wt(() => b.value, (S) => n({
      uid: o,
      min: S
    })), Wt(() => C.value, (S) => n({
      uid: o,
      max: S
    })), Li(() => {
      i({
        id: o,
        el: c.value,
        min: b.value,
        max: C.value,
        givenSize: t.size === void 0 ? null : f.value,
        size: f.value
      });
    }), za(() => r(o)), (S, O) => (_(), k("div", {
      ref_key: "paneEl",
      ref: c,
      class: "splitpanes__pane",
      onClick: O[0] ||= (I) => m(s)(I, S._.uid),
      style: nn(N.value)
    }, [Le(S.$slots, "default")], 4));
  }
}, hb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", pb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", vb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", gb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const $c = 1024, Th = $c / 2, Bs = (e) => document.documentElement.clientWidth < e, Ah = /* @__PURE__ */ ut(Bs($c)), kh = /* @__PURE__ */ ut(Bs(Th));
window.addEventListener("resize", () => {
  Ah.value = Bs($c), kh.value = Bs(Th);
}, { passive: !0 });
function Xr() {
  return /* @__PURE__ */ Nr(Ah);
}
function mb() {
  return /* @__PURE__ */ Nr(kh);
}
class bb {
  bundle;
  constructor(t) {
    this.bundle = {
      pluralFunction: t,
      translations: {}
    };
  }
  /**
   * Append new translations to the wrapper.
   *
   * This is useful if translations should be added on demand,
   * e.g. depending on component usage.
   *
   * @param bundle - The new translation bundle to append
   */
  addTranslations(t) {
    const n = Object.values(t.translations[""] ?? {}).map(({ msgid: i, msgid_plural: a, msgstr: r }) => a !== void 0 ? [`_${i}_::_${a}_`, r] : [i, r[0]]);
    this.bundle.translations = {
      ...this.bundle.translations,
      ...Object.fromEntries(n)
    };
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(t, n = {}) {
    return w("", t, n, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, n, i, a = {}) {
    return ea("", t, n, i, a, { bundle: this.bundle });
  }
}
class yb {
  debug = !1;
  language = "en";
  translations = {};
  setLanguage(t) {
    return this.language = t, this;
  }
  /**
   * Try to detect locale from context with `en` as fallback value
   * This only works within a Nextcloud page context.
   *
   * @deprecated use `detectLanguage` instead.
   */
  detectLocale() {
    return this.detectLanguage();
  }
  /**
   * Try to detect locale from context with `en` as fallback value.
   * This only works within a Nextcloud page context.
   */
  detectLanguage() {
    return this.setLanguage(Bo().replace("-", "_"));
  }
  /**
   * Register a new translation bundle for a specified language.
   *
   * Please note that existing translations for that language will be overwritten.
   *
   * @param language - Language this is the translation for
   * @param data - The translation bundle
   */
  addTranslation(t, n) {
    return this.translations[t] = n, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new bb((n) => Vm(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function _b() {
  return new yb();
}
const Oh = _b().detectLanguage().build(), gt = (...e) => Oh.gettext(...e);
function Ri(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Bo() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Oh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const wb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Cb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Sb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Eb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Tb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Ab = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], kb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Ob = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Nb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const xb = /* @__PURE__ */ Symbol(""), [Lb] = window.OC?.config?.version?.split(".") ?? [], Nh = Number.parseInt(Lb ?? "35"), Rb = Nh < 32, Ii = Nh < 34, Ib = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Pb() {
  return Nt(Ib, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Db = { class: "button-vue__wrapper" }, Mb = { class: "button-vue__icon" }, Fb = { class: "button-vue__text" }, $b = /* @__PURE__ */ St({
  __name: "NcButton",
  props: {
    alignment: { default: "center" },
    ariaLabel: { default: void 0 },
    disabled: { type: Boolean },
    download: { type: [String, Boolean], default: void 0 },
    href: { default: void 0 },
    pressed: { type: Boolean, default: void 0 },
    size: { default: "normal" },
    target: { default: "_self" },
    text: { default: void 0 },
    to: { default: void 0 },
    type: { default: "button" },
    variant: { default: "secondary" },
    wide: { type: Boolean }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const n = e, i = t, { formBoxItemClass: a } = Pb(), r = Nt(xb, null) !== null, s = ee(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = ee(() => s.value === "button" && typeof n.pressed == "boolean"), l = ee(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), u = ee(() => l.value.startsWith("tertiary")), c = ee(() => n.alignment.split("-")[0]), f = ee(() => n.alignment.includes("-")), b = Nt("NcPopover:trigger:attrs", () => ({}), !1), C = ee(() => b()), N = ee(() => {
      if (s.value === "RouterLink")
        return {
          to: n.to,
          activeClass: "active"
        };
      if (s.value === "a")
        return {
          href: n.href || "#",
          target: n.target,
          rel: "nofollow noreferrer noopener",
          download: n.download || void 0
        };
      if (s.value === "button")
        return {
          ...C.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function S(O) {
      o.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, I) => (_(), De(Nc(s.value), It({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": u.value,
          "button-vue--wide": e.wide,
          [`button-vue--${c.value}`]: c.value !== "center",
          "button-vue--reverse": f.value,
          "button-vue--legacy": m(Rb),
          "button-vue--legacy34": m(Ii)
        },
        m(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: S }), {
      default: Oe(() => [
        d("span", Db, [
          d("span", Mb, [
            Le(O.$slots, "icon", {}, void 0, !0)
          ]),
          d("span", Fb, [
            Le(O.$slots, "default", {}, () => [
              xe(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Pn = /* @__PURE__ */ qe($b, [["__scopeId", "data-v-47ce59a3"]]), zb = ["aria-hidden", "aria-label"], Ub = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Bb = ["d"], Hb = ["innerHTML"], jb = /* @__PURE__ */ St({
  __name: "NcIconSvgWrapper",
  props: {
    directional: { type: Boolean },
    inline: { type: Boolean },
    svg: { default: "" },
    name: { default: void 0 },
    path: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    Ig((a) => ({
      fb515064: n.value
    }));
    const t = e, n = ee(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = ee(() => {
      if (!t.svg || t.path)
        return;
      const a = gh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (_(), k("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (_(), k("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Hb)) : (_(), k("svg", Ub, [
        d("path", { d: e.path }, null, 8, Bb)
      ]))
    ], 10, zb));
  }
}), Ho = /* @__PURE__ */ qe(jb, [["__scopeId", "data-v-aaedb1c3"]]);
Gb();
function Vb(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ii("csrf-token-update", { token: e, _internal: !0 }));
}
function Gb() {
  Ch("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Vb(e);
  });
}
bh("public").persist().build();
let Ta;
function hd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Kb() {
  if (Ta !== void 0)
    return Ta;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = hd(e, "data-user");
  return t === null ? (Ta = null, Ta) : (Ta = {
    uid: t,
    displayName: hd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ta);
}
var ct = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ct || {});
class Wb {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ct[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ct.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ct.Debug:
          console.debug(this.formatMessage(n, ct.Debug, i), i);
          break;
        case ct.Info:
          console.info(this.formatMessage(n, ct.Info, i), i);
          break;
        case ct.Warn:
          console.warn(this.formatMessage(n, ct.Warn, i), i);
          break;
        case ct.Error:
          console.error(this.formatMessage(n, ct.Error, i), i);
          break;
        case ct.Fatal:
        default:
          console.error(this.formatMessage(n, ct.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ct.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ct.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ct.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ct.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ct.Fatal, t, Object.assign({}, this.context, n));
  }
}
function qb(e) {
  return new Wb(e);
}
class Yb {
  context;
  factory;
  constructor(t) {
    this.context = {}, this.factory = t;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(t) {
    return this.context.app = t, this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(t) {
    return this.context.level = t, this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(t) {
    return this.context.uid = t, this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const t = Kb();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ct.Warn, window._oc_debug && (t.context.level = ct.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Xb() {
  return new Yb(qb);
}
const ua = Xb().detectUser().setApp("@nextcloud/vue").build();
function Zb(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let xh = "missing-app-name";
try {
  xh = "library";
} catch {
  ua.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Jb = xh;
let Qb = "";
try {
  Qb = "0.1.0-alpha.167";
} catch {
  ua.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Lh() {
  return Nt("appName", Jb);
}
const ey = Zb(() => {
  const e = Dc("core", "apps", []), t = Lh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), ec = jm();
Ri(kb);
const ty = /* @__PURE__ */ St({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Xr();
    Wt(t, n), Li(() => {
      n(t.value);
    }), za(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ii("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), De(m(Pn), {
      "aria-label": m(gt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": m(t) }]),
      title: m(gt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Oe(() => [
        me(m(Ho), {
          directional: "",
          path: m(hb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), ny = /* @__PURE__ */ qe(ty, [["__scopeId", "data-v-a28923a1"]]), pd = bh("nextcloud").persist().build(), iy = Km().theming?.name ?? "Nextcloud", ay = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: ny,
    Pane: fb,
    Splitpanes: db
  },
  props: {
    /**
     * Allows to disable the control by swipe of the app navigation open state.
     */
    disableSwipe: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows you to set the default width of the resizable list in % on vertical-split
     * or respectively the default height on horizontal-split.
     *
     * Must be between `listMinWidth` and `listMaxWidth`.
     */
    listSize: {
      type: Number,
      default: 20
    },
    /**
     * Allows you to set the minimum width of the list column in % on vertical-split
     * or respectively the minimum height on horizontal-split.
     */
    listMinWidth: {
      type: Number,
      default: 15
    },
    /**
     * Allows you to set the maximum width of the list column in % on vertical-split
     * or respectively the maximum height on horizontal-split.
     */
    listMaxWidth: {
      type: Number,
      default: 40
    },
    /**
     * Specify the config key for the pane config sizes
     * Default is the global var appName if you use the webpack-vue-config
     */
    paneConfigKey: {
      type: String,
      default: ""
    },
    /**
     * When in mobile view, only the list or the details are shown.
     *
     * If you provide a list, you need to provide a variable
     * that will be set to true by the user when an element of
     * the list gets selected. The details will then show a back
     * arrow to return to the list that will update this prop to false.
     */
    showDetails: {
      type: Boolean,
      default: !0
    },
    /**
     * Content layout used when there is a list together with content:
     * - `vertical-split` - a 2-column layout with list and default content separated vertically
     * - `no-split` - a single column layout; List is shown when `showDetails` is `false`, otherwise the default slot content is shown with a back button to return to the list.
     * - 'horizontal-split' - a 2-column layout with list and default content separated horizontally
     * On mobile screen `no-split` layout is forced.
     */
    layout: {
      type: String,
      default: "vertical-split",
      validator(e) {
        return ["no-split", "vertical-split", "horizontal-split"].includes(e);
      }
    },
    /**
     * Specify the `<h1>` page heading
     */
    pageHeading: {
      type: String,
      default: null
    },
    /**
     * Allow setting the page's `<title>`
     *
     * If a page heading is set it defaults to `{pageHeading} - {appName} - {instanceName}` e.g. `Favorites - Files - MyPersonalCloud`.
     * When the page heading and the app name is the same only one is used, e.g. `Files - Files - MyPersonalCloud` is shown as `Files - MyPersonalCloud`.
     * When setting the prop then the following format will be used: `{pageTitle} - {instanceName}`
     */
    pageTitle: {
      type: String,
      default: null
    }
  },
  emits: [
    "update:showDetails",
    "resizeList"
  ],
  setup() {
    return {
      appName: Lh(),
      localizedAppName: ey(),
      isMobile: Xr(),
      isRtl: ec
    };
  },
  data() {
    return {
      contentHeight: 0,
      swiping: {},
      listPaneSize: this.restorePaneConfig()
    };
  },
  computed: {
    paneConfigID() {
      if (this.paneConfigKey !== "")
        return `pane-list-size-${this.paneConfigKey}`;
      try {
        return `pane-list-size-${this.appName}`;
      } catch {
        return ua.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
      }
    },
    detailsPaneSize() {
      return this.listPaneSize ? 100 - this.listPaneSize : this.paneDefaults.details.size;
    },
    paneDefaults() {
      return {
        list: {
          size: this.listSize,
          min: this.listMinWidth,
          max: this.listMaxWidth
        },
        // set the inverse values of the details column
        // based on the provided (or default) values of the list column
        details: {
          size: 100 - this.listSize,
          min: 100 - this.listMaxWidth,
          max: 100 - this.listMinWidth
        }
      };
    },
    realPageTitle() {
      const e = /* @__PURE__ */ new Set();
      if (this.pageTitle)
        for (const t of this.pageTitle.split(" - "))
          e.add(t);
      else if (this.pageHeading) {
        for (const t of this.pageHeading.split(" - "))
          e.add(t);
        e.size > 0 && e.add(this.localizedAppName);
      } else
        return null;
      return e.add(iy), [...e.values()].join(" - ");
    }
  },
  watch: {
    realPageTitle: {
      immediate: !0,
      handler() {
        this.realPageTitle !== null && (document.title = this.realPageTitle);
      }
    },
    paneConfigKey: {
      immediate: !0,
      handler() {
        this.restorePaneConfig();
      }
    }
  },
  mounted() {
    this.disableSwipe || (this.swiping = ub(this.$el, {
      onSwipeEnd: this.handleSwipe
    })), this.restorePaneConfig();
  },
  methods: {
    /**
     * handle the swipe event
     *
     * @param {TouchEvent} e The touch event
     * @param {import('@vueuse/core').SwipeDirection} direction The swipe direction of the event
     */
    handleSwipe(e, t) {
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ii("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ii("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      pd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ua.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(pd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ua.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, ry = {
  key: 0,
  class: "hidden-visually"
}, sy = { class: "app-content-wrapper__list" }, oy = {
  key: 1,
  class: "app-content-wrapper"
};
function ly(e, t, n, i, a, r) {
  const s = Fe("NcAppContentDetailsToggle"), o = Fe("Pane"), l = Fe("Splitpanes");
  return _(), k("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), k("h1", ry, p(n.pageHeading), 1)) : q("", !0),
    e.$slots.list ? (_(), k(ve, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), k("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), De(s, {
          key: 0,
          onClick: et(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : q("", !0),
        nt(d("div", sy, [
          Le(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Pa, !n.showDetails]
        ]),
        n.showDetails ? Le(e.$slots, "default", { key: 1 }, void 0, !0) : q("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), k("div", oy, [
        me(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Oe(() => [
            me(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Oe(() => [
                Le(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            me(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Oe(() => [
                Le(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : q("", !0)
    ], 64)) : q("", !0),
    e.$slots.list ? q("", !0) : Le(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const cy = /* @__PURE__ */ qe(ay, [["render", ly], ["__scopeId", "data-v-51427d61"]]);
var Rh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Hs = /* @__PURE__ */ Rh.join(","), Ih = typeof Element > "u", fa = Ih ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, js = !Ih && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Vs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Vs(t.parentNode));
  return s;
}, uy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Ph = function(t, n, i) {
  if (Vs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Hs));
  return n && fa.call(t, Hs) && a.unshift(t), a = a.filter(i), a;
}, Gs = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!Vs(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, u = Gs(l, !0, i);
        i.flatten ? a.push.apply(a, u) : a.push({
          scopeParent: s,
          candidates: u
        });
      } else {
        var c = fa.call(s, Hs);
        c && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), b = !Vs(f, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (f && b) {
          var C = Gs(f === !0 ? s.children : f.children, !0, i);
          i.flatten ? a.push.apply(a, C) : a.push({
            scopeParent: s,
            candidates: C
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Dh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, aa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || uy(t)) && !Dh(t) ? 0 : t.tabIndex;
}, dy = function(t, n) {
  var i = aa(t);
  return i < 0 && n && !Dh(t) ? 0 : i;
}, fy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Mh = function(t) {
  return t.tagName === "INPUT";
}, hy = function(t) {
  return Mh(t) && t.type === "hidden";
}, py = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, vy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, gy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || js(t), i = function(o) {
    return n.querySelectorAll('input[type="radio"][name="' + o + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var r = vy(a, t.form);
  return !r || r === t;
}, my = function(t) {
  return Mh(t) && t.type === "radio";
}, by = function(t) {
  return my(t) && !gy(t);
}, yy = function(t) {
  var n, i = t && js(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var u, c, f;
      i = js(a), a = (u = i) === null || u === void 0 ? void 0 : u.host, r = !!((c = a) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(a));
    }
  }
  return r;
}, vd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, _y = function(t, n) {
  var i = n.displayCheck, a = n.getShadowRoot;
  if (i === "full-native" && "checkVisibility" in t) {
    var r = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !r;
  }
  var s = getComputedStyle(t), o = s.visibility;
  if (o === "hidden" || o === "collapse")
    return !0;
  var l = fa.call(t, "details>summary:first-of-type"), u = l ? t.parentElement : t;
  if (fa.call(u, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var f = t.parentElement, b = js(t);
        if (f && !f.shadowRoot && a(f) === !0)
          return vd(t);
        t.assignedSlot ? t = t.assignedSlot : !f && b !== t.ownerDocument ? t = b.host : t = f;
      }
      t = c;
    }
    if (yy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return vd(t);
  return !1;
}, wy = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return fa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Ks = function(t, n) {
  return !(n.disabled || hy(n) || _y(n, t) || // For a details element with a summary, the summary element gets the focus
  py(n) || wy(n));
}, tc = function(t, n) {
  return !(by(n) || aa(n) < 0 || !Ks(t, n));
}, Cy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Fh = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = dy(o, s), u = s ? Fh(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, u) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: u
    });
  }), i.sort(fy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Sy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Gs([t], n.includeContainer, {
    filter: tc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Cy
  }) : i = Ph(t, n.includeContainer, tc.bind(null, n)), Fh(i);
}, Ey = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Gs([t], n.includeContainer, {
    filter: Ks.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Ph(t, n.includeContainer, Ks.bind(null, n)), i;
}, Aa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return fa.call(t, Hs) === !1 ? !1 : tc(n, t);
}, Ty = /* @__PURE__ */ Rh.concat("iframe:not([inert]):not([inert] *)").join(","), Ol = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return fa.call(t, Ty) === !1 ? !1 : Ks(n, t);
};
function nc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ay(e) {
  if (Array.isArray(e)) return nc(e);
}
function gd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = $h(e)) || t) {
      n && (e = n);
      var i = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return i >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[i++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, s = !0, o = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return s = l.done, l;
    },
    e: function(l) {
      o = !0, r = l;
    },
    f: function() {
      try {
        s || n.return == null || n.return();
      } finally {
        if (o) throw r;
      }
    }
  };
}
function ky(e, t, n) {
  return (t = Ry(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Oy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function md(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? md(Object(n), !0).forEach(function(i) {
      ky(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : md(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function xy(e) {
  return Ay(e) || Oy(e) || $h(e) || Ny();
}
function Ly(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ry(e) {
  var t = Ly(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $h(e, t) {
  if (e) {
    if (typeof e == "string") return nc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nc(e, t) : void 0;
  }
}
var Jn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = Jn.getActiveTrap(t);
    n !== i && Jn.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), Jn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Jn.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Jn.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Iy = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Py = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, gr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Dy = function(t) {
  return gr(t) && !t.shiftKey;
}, My = function(t) {
  return gr(t) && t.shiftKey;
}, yd = function(t) {
  return setTimeout(t, 0);
}, ir = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, fs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Fy = [], zc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || Fy, r = bd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Dy,
    isKeyBackward: My
  }, n), s = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: /* @__PURE__ */ new Set(),
    // references to nodes that were inert or aria-hidden before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadySilent: /* @__PURE__ */ new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, o, l = function(P, M, Y) {
    return P && P[M] !== void 0 ? P[M] : r[Y || M];
  }, u = function(P, M) {
    var Y = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var Z = ae.container, fe = ae.tabbableNodes;
      return Z.contains(P) || Y?.includes(Z) || fe.find(function(he) {
        return he === P;
      });
    });
  }, c = function(P) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = M.hasFallback, ae = Y === void 0 ? !1 : Y, Z = M.params, fe = Z === void 0 ? [] : Z, he = r[P];
    if (typeof he == "function" && (he = he.apply(void 0, xy(fe))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var Se = he;
    if (typeof he == "string") {
      try {
        Se = i.querySelector(he);
      } catch (ye) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(ye.message, '"'));
      }
      if (!Se && !ae)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return Se;
  }, f = function(P) {
    var M = P.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? f(M.shadowRoot) : M : null;
  }, b = function() {
    var P = c("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !Ol(P, r.tabbableOptions)) {
      var M = f(i);
      if (u(M) >= 0)
        P = M;
      else {
        var Y = s.tabbableGroups[0], ae = Y && Y.firstTabbableNode;
        P = ae || c("fallbackFocus");
      }
    } else P === null && (P = c("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, C = function() {
    if (s.containerGroups = s.containers.map(function(P) {
      var M = Sy(P, r.tabbableOptions), Y = Ey(P, r.tabbableOptions), ae = M.length > 0 ? M[0] : void 0, Z = M.length > 0 ? M[M.length - 1] : void 0, fe = Y.find(function(ye) {
        return Aa(ye);
      }), he = Y.slice().reverse().find(function(ye) {
        return Aa(ye);
      }), Se = !!M.find(function(ye) {
        return aa(ye) > 0;
      });
      return {
        container: P,
        tabbableNodes: M,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: Z,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: fe,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: he,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Xe) {
          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, at = M.indexOf(Xe);
          return at < 0 ? Te ? Y.slice(Y.indexOf(Xe) + 1).find(function(st) {
            return Aa(st);
          }) : Y.slice(0, Y.indexOf(Xe)).reverse().find(function(st) {
            return Aa(st);
          }) : M[at + (Te ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(P) {
      return P.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(P) {
      return P.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(P) {
    if (P !== !1 && P !== f(document)) {
      if (!P || !P.focus) {
        N(b());
        return;
      }
      P.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = P, Iy(P) && P.select();
    }
  }, S = function(P) {
    var M = c("setReturnFocus", {
      params: [P]
    });
    return M || (M === !1 ? !1 : P);
  }, O = function(P) {
    var M = P.target, Y = P.event, ae = P.isBackward, Z = ae === void 0 ? !1 : ae;
    M = M || fs(Y), C();
    var fe = null;
    if (s.tabbableGroups.length > 0) {
      var he = u(M, Y), Se = he >= 0 ? s.containerGroups[he] : void 0;
      if (he < 0)
        Z ? fe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : fe = s.tabbableGroups[0].firstTabbableNode;
      else if (Z) {
        var ye = s.tabbableGroups.findIndex(function(bt) {
          var Ze = bt.firstTabbableNode;
          return M === Ze;
        });
        if (ye < 0 && (Se.container === M || Ol(M, r.tabbableOptions) && !Aa(M, r.tabbableOptions) && !Se.nextTabbableNode(M, !1)) && (ye = he), ye >= 0) {
          var Xe = ye === 0 ? s.tabbableGroups.length - 1 : ye - 1, Te = s.tabbableGroups[Xe];
          fe = aa(M) >= 0 ? Te.lastTabbableNode : Te.lastDomTabbableNode;
        } else gr(Y) || (fe = Se.nextTabbableNode(M, !1));
      } else {
        var at = s.tabbableGroups.findIndex(function(bt) {
          var Ze = bt.lastTabbableNode;
          return M === Ze;
        });
        if (at < 0 && (Se.container === M || Ol(M, r.tabbableOptions) && !Aa(M, r.tabbableOptions) && !Se.nextTabbableNode(M)) && (at = he), at >= 0) {
          var st = at === s.tabbableGroups.length - 1 ? 0 : at + 1, ot = s.tabbableGroups[st];
          fe = aa(M) >= 0 ? ot.firstTabbableNode : ot.firstDomTabbableNode;
        } else gr(Y) || (fe = Se.nextTabbableNode(M));
      }
    } else
      fe = c("fallbackFocus");
    return fe;
  }, I = function(P) {
    var M = fs(P);
    if (!(u(M, P) >= 0)) {
      if (ir(r.clickOutsideDeactivates, P)) {
        o.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: r.returnFocusOnDeactivate
        });
        return;
      }
      ir(r.allowOutsideClick, P) || P.preventDefault();
    }
  }, D = function(P) {
    var M = fs(P), Y = u(M, P) >= 0;
    if (Y || M instanceof Document)
      Y && (s.mostRecentlyFocusedNode = M);
    else {
      P.stopImmediatePropagation();
      var ae, Z = !0;
      if (s.mostRecentlyFocusedNode)
        if (aa(s.mostRecentlyFocusedNode) > 0) {
          var fe = u(s.mostRecentlyFocusedNode), he = s.containerGroups[fe].tabbableNodes;
          if (he.length > 0) {
            var Se = he.findIndex(function(ye) {
              return ye === s.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(s.recentNavEvent) ? Se + 1 < he.length && (ae = he[Se + 1], Z = !1) : Se - 1 >= 0 && (ae = he[Se - 1], Z = !1));
          }
        } else
          s.containerGroups.some(function(ye) {
            return ye.tabbableNodes.some(function(Xe) {
              return aa(Xe) > 0;
            });
          }) || (Z = !1);
      else
        Z = !1;
      Z && (ae = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), N(ae || s.mostRecentlyFocusedNode || b());
    }
    s.recentNavEvent = void 0;
  }, j = function(P) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = P;
    var Y = O({
      event: P,
      isBackward: M
    });
    Y && (gr(P) && P.preventDefault(), N(Y));
  }, F = function(P) {
    (r.isKeyForward(P) || r.isKeyBackward(P)) && j(P, r.isKeyBackward(P));
  }, le = function(P) {
    Py(P) && ir(r.escapeDeactivates, P) !== !1 && (P.preventDefault(), o.deactivate());
  }, ce = function(P) {
    var M = fs(P);
    u(M, P) >= 0 || ir(r.clickOutsideDeactivates, P) || ir(r.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, U = function() {
    if (s.active) {
      Jn.activateTrap(a, o);
      var P;
      return r.delayInitialFocus ? P = new Promise(function(M) {
        s.delayInitialFocusTimer = yd(function() {
          N(b()), M();
        });
      }) : N(b()), i.addEventListener("focusin", D, !0), i.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ce, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), P;
    }
  }, G = function(P) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ae = gd(P), Z;
    try {
      for (ae.s(); !(Z = ae.n()).done; ) {
        var fe = Z.value;
        M.add(fe);
        for (var he = typeof ShadowRoot < "u" && fe.getRootNode() instanceof ShadowRoot, Se = fe; Se; ) {
          M.add(Se);
          var ye = Se.parentElement, Xe = [];
          ye ? Xe = ye.children : !ye && he && (Xe = Se.getRootNode().children, ye = Se.getRootNode().host, he = typeof ShadowRoot < "u" && ye.getRootNode() instanceof ShadowRoot);
          var Te = gd(Xe), at;
          try {
            for (Te.s(); !(at = Te.n()).done; ) {
              var st = at.value;
              Y.add(st);
            }
          } catch (ot) {
            Te.e(ot);
          } finally {
            Te.f();
          }
          Se = ye;
        }
      }
    } catch (ot) {
      ae.e(ot);
    } finally {
      ae.f();
    }
    M.forEach(function(ot) {
      Y.delete(ot);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", D, !0), i.removeEventListener("mousedown", I, !0), i.removeEventListener("touchstart", I, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", le), o;
  }, re = function(P) {
    var M = s.mostRecentlyFocusedNode;
    if (M) {
      var Y = P.some(function(Z) {
        var fe = Array.from(Z.removedNodes);
        return fe.some(function(he) {
          return he === M || typeof he.contains == "function" && he.contains(M);
        });
      });
      if (Y && s.containers.some(function(Z) {
        return Z?.isConnected;
      })) {
        C();
        var ae = b();
        N(ae);
      }
    }
  }, ue = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(re) : void 0, te = function() {
    ue && (ue.disconnect(), s.active && !s.paused && s.containers.map(function(P) {
      ue.observe(P, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return o = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(P) {
      if (s.active)
        return this;
      var M = l(P, "onActivate"), Y = l(P, "onPostActivate"), ae = l(P, "checkCanFocusTrap"), Z = Jn.getActiveTrap(a), fe = !1;
      if (Z && !Z.paused) {
        var he;
        (he = Z._setSubtreeIsolation) === null || he === void 0 || he.call(Z, !1), fe = !0;
      }
      try {
        ae || C(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = f(i), M?.({
          trap: o
        });
        var Se = function() {
          ae && C();
          var Te = function() {
            o._setSubtreeIsolation(!0), te(), Y?.({
              trap: o
            });
          }, at = U();
          at ? at.then(Te) : Te();
        };
        if (ae)
          return ae(s.containers.concat()).then(Se, Se), this;
        Se();
      } catch (Xe) {
        if (Z === Jn.getActiveTrap(a) && fe) {
          var ye;
          (ye = Z._setSubtreeIsolation) === null || ye === void 0 || ye.call(Z, !0);
        }
        throw Xe;
      }
      return this;
    },
    deactivate: function(P) {
      if (!s.active)
        return this;
      var M = bd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, P);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, te(), Jn.deactivateTrap(a, o);
      var Y = l(M, "onDeactivate"), ae = l(M, "onPostDeactivate"), Z = l(M, "checkCanReturnFocus"), fe = l(M, "delayReturnFocus"), he = l(M, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Se = function() {
        he && N(S(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, ye = function() {
        fe && he ? yd(Se) : Se();
      };
      return he && Z ? (Z(S(s.nodeFocusedBeforeActivation)).then(ye, ye), this) : (ye(), this);
    },
    pause: function(P) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var M = [].concat(P).filter(Boolean);
      return s.containers = M.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && G(s.containers), s.active && (C(), s.paused || o._setSubtreeIsolation(!0)), te(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, M) {
        if (s.paused === P)
          return this;
        if (s.paused = P, P) {
          var Y = l(M, "onPause"), ae = l(M, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), te(), ae?.({
            trap: o
          });
        } else {
          var Z = l(M, "onUnpause"), fe = l(M, "onPostUnpause");
          Z?.({
            trap: o
          });
          var he = function() {
            C();
            var ye = function() {
              o._setSubtreeIsolation(!0), te(), fe?.({
                trap: o
              });
            }, Xe = U();
            Xe ? Xe.then(ye) : ye();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(P) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(M) {
          var Y;
          P ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((Y = M.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && s.alreadySilent.add(M), M.setAttribute("inert", !0)) : s.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const zh = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), $y = /* @__PURE__ */ St({
  name: "NcAppNavigationList",
  provide() {
    return {
      [zh]: {
        show: this.show,
        hide: this.hide
      }
    };
  },
  data() {
    return {
      /** Entry the highlight is on, as reported by that entry itself */
      entry: null,
      /** Whether the highlight is shown */
      visible: !1,
      /** Whether position changes should transition (slide) or snap */
      animated: !1,
      /** Whether the highlight sits on the active entry (turns transparent) */
      overActive: !1,
      /** Vertical offset of the highlight inside the scrollable content */
      top: 0,
      /** Height of the highlight */
      height: 0,
      /** Pending animation frame for re-measuring while scrolling */
      scrollFrame: 0
    };
  },
  computed: {
    highlightStyle() {
      return {
        transform: `translateY(${this.top}px)`,
        height: `${this.height}px`
      };
    }
  },
  beforeUnmount() {
    this.scrollFrame && cancelAnimationFrame(this.scrollFrame);
  },
  methods: {
    /**
     * Move the highlight onto an entry. It slides there if already visible,
     * otherwise it snaps into place so it does not slide in from the entry
     * that was hovered before. Over the active entry it turns transparent so
     * that entry keeps its own static highlight.
     *
     * @param entry the entry element asking for the highlight
     */
    show(e) {
      if (this.entry = e, this.overActive = e.classList.contains("active"), this.visible) {
        this.animated = !0, this.measure();
        return;
      }
      this.animated = !1, this.measure(), this.visible = !0, this.$nextTick(() => requestAnimationFrame(() => {
        this.animated = !0;
      }));
    },
    /**
     * Hide the highlight if it is on the given entry, e.g. because that entry
     * is being removed. While the pointer only moves between entries the
     * highlight stays visible, so it can slide on to the next one.
     *
     * @param entry the entry element that no longer wants the highlight
     */
    hide(e) {
      this.entry === e && this.hideNow();
    },
    /** Hide the highlight, as the pointer or focus left the list */
    hideNow() {
      this.visible = !1;
    },
    /**
     * Hide the highlight once focus leaves the list entirely
     *
     * @param event the focusout event
     */
    onFocusOut(e) {
      this.$refs.list.contains(e.relatedTarget) || this.hideNow();
    },
    /** Read the current entry's geometry relative to the list content */
    measure() {
      const e = this.$refs.list;
      if (!e || !this.entry)
        return;
      const t = this.entry.getBoundingClientRect(), n = e.getBoundingClientRect();
      this.top = t.top - n.top + e.scrollTop, this.height = t.height;
    },
    /**
     * Keep the highlight on its entry while scrolling. Needed because a
     * virtual scroller repositions its entries as the list scrolls.
     */
    onScroll() {
      !this.visible || this.scrollFrame || (this.scrollFrame = requestAnimationFrame(() => {
        this.scrollFrame = 0, this.measure();
      }));
    }
  }
});
function zy(e, t, n, i, a, r) {
  return _(), k("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    d("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: nn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Le(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Uh = /* @__PURE__ */ qe($y, [["render", zy], ["__scopeId", "data-v-3e73e246"]]);
function $r() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Uy() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...$r()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === $r().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Bh = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Hh = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ri(Eb);
const By = { class: "app-navigation-toggle-wrapper" }, Hy = /* @__PURE__ */ St({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Hf(e, "open"), n = ee(() => t.value ? gt("Close navigation") : gt("Open navigation"));
    return (i, a) => (_(), k("div", By, [
      me(m(Pn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Oe(() => [
          me(Ho, {
            path: m(gb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), jy = /* @__PURE__ */ qe(Hy, [["__scopeId", "data-v-e8177cc7"]]), Vy = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Gy = { class: "app-navigation__search" }, Ky = /* @__PURE__ */ St({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Nt(
      Bh,
      () => wg(),
      !1
    ), a = kv("appNavigationContainer"), r = Xr(), s = /* @__PURE__ */ ut(!r.value), o = ee(() => r.value && s.value);
    bv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Wt(r, () => {
      s.value = !r.value;
    }), Wt(o, () => {
      c();
    }), Li(() => {
      i(!0), Ch("toggle-navigation", u), ii("navigation-toggled", {
        open: s.value
      }), n = zc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: $r(),
        escapeDeactivates: !1
      }), c();
    }), Wr(() => {
      i(!1), ab("toggle-navigation", u), n.deactivate();
    });
    function l(b) {
      if (s.value === b) {
        ii("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = b === void 0 ? !s.value : b;
      const C = getComputedStyle(document.body), N = parseInt(C.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ii("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * N);
    }
    function u({ open: b }) {
      return l(b);
    }
    function c() {
      o.value ? n.activate() : n.deactivate();
    }
    function f() {
      r.value && l(!1);
    }
    return (b, C) => (_(), k("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": m(Ii)
      }])
    }, [
      d("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: Kt(f, ["esc"])
      }, [
        d("div", Gy, [
          Le(b.$slots, "search", {}, void 0, !0)
        ]),
        d("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !b.$slots.list }])
        }, [
          Le(b.$slots, "default", {}, void 0, !0)
        ], 2),
        b.$slots.list ? (_(), De(Uh, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Oe(() => [
            Le(b.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : q("", !0),
        Le(b.$slots, "footer", {}, void 0, !0)
      ], 40, Vy),
      me(jy, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), Wy = /* @__PURE__ */ qe(Ky, [["__scopeId", "data-v-37908cd4"]]), qy = {
  name: "ChevronDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, Yy = ["aria-hidden", "aria-label"], Xy = ["fill", "width", "height"], Zy = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Jy = { key: 0 };
function Qy(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", Zy, [
        n.title ? (_(), k("title", Jy, p(n.title), 1)) : q("", !0)
      ])
    ], 8, Xy))
  ], 16, Yy);
}
const e_ = /* @__PURE__ */ qe(qy, [["render", Qy]]), t_ = {
  name: "ChevronUpIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, n_ = ["aria-hidden", "aria-label"], i_ = ["fill", "width", "height"], a_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, r_ = { key: 0 };
function s_(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", a_, [
        n.title ? (_(), k("title", r_, p(n.title), 1)) : q("", !0)
      ])
    ], 8, i_))
  ], 16, n_);
}
const o_ = /* @__PURE__ */ qe(t_, [["render", s_]]), l_ = {
  name: "ArrowRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, c_ = ["aria-hidden", "aria-label"], u_ = ["fill", "width", "height"], d_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, f_ = { key: 0 };
function h_(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", d_, [
        n.title ? (_(), k("title", f_, p(n.title), 1)) : q("", !0)
      ])
    ], 8, u_))
  ], 16, c_);
}
const jh = /* @__PURE__ */ qe(l_, [["render", h_]]), p_ = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, v_ = ["aria-hidden", "aria-label"], g_ = ["fill", "width", "height"], m_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, b_ = { key: 0 };
function y_(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", m_, [
        n.title ? (_(), k("title", b_, p(n.title), 1)) : q("", !0)
      ])
    ], 8, g_))
  ], 16, v_);
}
const Vh = /* @__PURE__ */ qe(p_, [["render", y_]]);
Ri(Cb);
const __ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: jh,
    IconClose: Vh,
    NcButton: Pn
  },
  props: {
    /**
     * If this element is used on a primary element set to true for primary styling.
     */
    primary: {
      default: !1,
      type: Boolean
    },
    /**
     * Placeholder of the edit field
     */
    placeholder: {
      default: "",
      type: String
    },
    /**
     * The current name (model value)
     */
    modelValue: {
      default: "",
      type: String
    }
  },
  emits: [
    "cancel",
    "confirm",
    "update:modelValue"
  ],
  setup() {
    return { isLegacy34: Ii };
  },
  data() {
    return {
      labelConfirm: gt("Confirm changes"),
      labelCancel: gt("Cancel changes")
    };
  },
  computed: {
    valueModel: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
    focusInput() {
      this.$refs.input.focus();
    }
  }
}, w_ = ["placeholder"];
function C_(e, t, n, i, a, r) {
  const s = Fe("IconArrowRight"), o = Fe("NcButton"), l = Fe("IconClose");
  return _(), k("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    d("form", {
      onSubmit: t[1] || (t[1] = et((...u) => r.confirm && r.confirm(...u), ["prevent"])),
      onKeydown: t[2] || (t[2] = Kt(et((...u) => r.cancel && r.cancel(...u), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = et(() => {
      }, ["stop", "prevent"]))
    }, [
      nt(d("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (u) => r.valueModel = u),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, w_), [
        [ws, r.valueModel]
      ]),
      me(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: et(r.confirm, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          me(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      me(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: et(r.cancel, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          me(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const S_ = /* @__PURE__ */ qe(__, [["render", C_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function jo() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Uc = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Gh = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), E_ = {
  beforeUpdate() {
    this.text = this.getText();
  },
  data() {
    return {
      // $slots are not reactive.
      // We need to update  the content manually
      text: this.getText()
    };
  },
  computed: {
    isLongText() {
      return this.text && this.text.trim().length > 20;
    }
  },
  methods: {
    getText() {
      return this.$slots.default?.()[0].children?.trim?.() || "";
    }
  }
}, Kh = {
  mixins: [E_],
  props: {
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Whether we close the Actions menu after the click
     */
    closeAfterClick: {
      type: Boolean,
      default: !1
    },
    /**
     * Aria label for the button. Not needed if the button has text.
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  inject: {
    closeMenu: {
      from: Gh
    }
  },
  emits: [
    "click"
  ],
  created() {
    "ariaHidden" in this.$attrs;
  },
  computed: {
    /**
     * Check if icon prop is an URL
     *
     * @return {boolean} Whether the icon prop is an URL
     */
    isIconUrl() {
      try {
        return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
      } catch {
        return !1;
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e), this.closeAfterClick && this.closeMenu(!1);
    }
  }
}, T_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Ho
  },
  mixins: [Kh],
  inject: {
    isInSemanticMenu: {
      from: Uc,
      default: !1
    }
  },
  props: {
    /**
     * disabled state of the action button
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * If this is a menu, a chevron icon will
     * be added at the end of the line
     */
    isMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * The button's behavior, by default the button acts like a normal button with optional toggle button behavior if `modelValue` is `true` or `false`.
     * But you can also set to checkbox button behavior with tri-state or radio button like behavior.
     * This extends the native HTML button type attribute.
     */
    type: {
      type: String,
      default: "button",
      validator: (e) => ["button", "checkbox", "radio", "reset", "submit"].includes(e)
    },
    /**
     * The buttons state if `type` is 'checkbox' or 'radio' (meaning if it is pressed / selected).
     * For checkbox and toggle button behavior - boolean value.
     * For radio button behavior - could be a boolean checked or a string with the value of the button.
     * Note: Unlike native radio buttons, NcActionButton are not grouped by name, so you need to connect them by bind correct modelValue.
     *
     *  **This is not availabe for `type='submit'` or `type='reset'`**
     *
     * If using `type='checkbox'` a `model-value` of `true` means checked, `false` means unchecked and `null` means indeterminate (tri-state)
     * For `type='radio'` `null` is equal to `false`
     */
    modelValue: {
      type: [Boolean, String],
      default: null
    },
    /**
     * The value used for the `modelValue` when this component is used with radio behavior
     * Similar to the `value` attribute of `<input type="radio">`
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Small underlying text content of the entry
     */
    description: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      mdiCheck: pb,
      mdiChevronRight: vb
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * The current "checked" or "pressed" state for the model behavior
     */
    isChecked() {
      return this.type === "radio" && typeof this.modelValue != "boolean" ? this.modelValue === this.value : this.modelValue;
    },
    /**
     * The native HTML type to set on the button
     */
    nativeType() {
      return this.type === "submit" || this.type === "reset" ? this.type : "button";
    },
    /**
     * HTML attributes to bind to the <button>
     */
    buttonAttributes() {
      const e = {};
      return this.isInSemanticMenu ? (e.role = "menuitem", this.type === "radio" ? (e.role = "menuitemradio", e["aria-checked"] = this.isChecked ? "true" : "false") : (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) && (e.role = "menuitemcheckbox", e["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false")) : this.modelValue !== null && this.nativeType === "button" && (e["aria-pressed"] = this.modelValue ? "true" : "false"), e;
    }
  },
  methods: {
    /**
     * Forward click event, let mixin handle the close-after-click and emit new modelValue if needed
     *
     * @param {MouseEvent} event - The click event
     */
    handleClick(e) {
      this.onClick(e), (this.modelValue !== null || this.type !== "button") && (this.type === "radio" ? typeof this.modelValue != "boolean" ? this.isChecked || this.$emit("update:modelValue", this.value) : this.$emit("update:modelValue", !this.isChecked) : this.$emit("update:modelValue", !this.isChecked));
    }
  }
}, A_ = ["role"], k_ = ["aria-label", "disabled", "title", "type"], O_ = { class: "action-button__longtext-wrapper" }, N_ = {
  key: 0,
  class: "action-button__name"
}, x_ = ["textContent"], L_ = {
  key: 2,
  class: "action-button__text"
}, R_ = ["textContent"], I_ = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function P_(e, t, n, i, a, r) {
  const s = Fe("NcIconSvgWrapper");
  return _(), k("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    d("button", It({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...o) => r.handleClick && r.handleClick(...o))
    }), [
      Le(e.$slots, "icon", {}, () => [
        d("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: nn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      d("span", O_, [
        e.name ? (_(), k("strong", N_, p(e.name), 1)) : q("", !0),
        e.isLongText ? (_(), k("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, x_)) : (_(), k("span", L_, p(e.text), 1)),
        n.description ? (_(), k("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, R_)) : q("", !0)
      ]),
      n.isMenu ? (_(), De(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), De(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), k("span", I_)) : q("", !0),
      q("", !0)
    ], 16, k_)
  ], 10, A_);
}
const D_ = /* @__PURE__ */ qe(T_, [["render", P_], ["__scopeId", "data-v-6c2daf4e"]]);
function M_(e, t = {}) {
  const n = Uy();
  Wt(e, () => {
    ei(t.disabled) || (ei(e) ? n.pause() : n.unpause());
  }), Wr(() => {
    n.unpause();
  });
}
const F_ = ["top", "right", "bottom", "left"], _d = ["start", "end"], wd = /* @__PURE__ */ F_.reduce((e, t) => e.concat(t, t + "-" + _d[0], t + "-" + _d[1]), []), zr = Math.min, ic = Math.max, $_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wh(e, t, n) {
  return ic(e, zr(t, n));
}
function pa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oi(e) {
  return e.split("-")[0];
}
function wn(e) {
  return e.split("-")[1];
}
function qh(e) {
  return e === "x" ? "y" : "x";
}
function Bc(e) {
  return e === "y" ? "height" : "width";
}
function Qn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Hc(e) {
  return qh(Qn(e));
}
function Yh(e, t, n) {
  n === void 0 && (n = !1);
  const i = wn(e), a = Hc(e), r = Bc(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = qs(s)), [s, qs(s)];
}
function z_(e) {
  const t = qs(e);
  return [Ws(e), t, Ws(t)];
}
function Ws(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Cd = ["left", "right"], Sd = ["right", "left"], U_ = ["top", "bottom"], B_ = ["bottom", "top"];
function H_(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Sd : Cd : t ? Cd : Sd;
    case "left":
    case "right":
      return t ? U_ : B_;
    default:
      return [];
  }
}
function j_(e, t, n, i) {
  const a = wn(e);
  let r = H_(oi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Ws)))), r;
}
function qs(e) {
  const t = oi(e);
  return $_[t] + e.slice(t.length);
}
function V_(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Xh(e) {
  return typeof e != "number" ? V_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mr(e) {
  const {
    x: t,
    y: n,
    width: i,
    height: a
  } = e;
  return {
    width: i,
    height: a,
    top: n,
    left: t,
    right: t + i,
    bottom: n + a,
    x: t,
    y: n
  };
}
function Ed(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = Qn(t), s = Hc(t), o = Bc(s), l = oi(t), u = r === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, b = i[o] / 2 - a[o] / 2;
  let C;
  switch (l) {
    case "top":
      C = {
        x: c,
        y: i.y - a.height
      };
      break;
    case "bottom":
      C = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      C = {
        x: i.x + i.width,
        y: f
      };
      break;
    case "left":
      C = {
        x: i.x - a.width,
        y: f
      };
      break;
    default:
      C = {
        x: i.x,
        y: i.y
      };
  }
  const N = wn(t);
  return N && (C[s] += b * (N === "end" ? 1 : -1) * (n && u ? -1 : 1)), C;
}
async function G_(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: s,
    elements: o,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: b = !1,
    padding: C = 0
  } = pa(t, e), N = Xh(C), O = o[b ? f === "floating" ? "reference" : "floating" : f], I = mr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), D = f === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, j = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(j)) && await (r.getScale == null ? void 0 : r.getScale(j)) || {
    x: 1,
    y: 1
  }, le = mr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: D,
    offsetParent: j,
    strategy: l
  }) : D);
  return {
    top: (I.top - le.top + N.top) / F.y,
    bottom: (le.bottom - I.bottom + N.bottom) / F.y,
    left: (I.left - le.left + N.left) / F.x,
    right: (le.right - I.right + N.right) / F.x
  };
}
const K_ = 50, W_ = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: G_
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: f
  } = Ed(u, i, l), b = i, C = 0;
  const N = {};
  for (let S = 0; S < r.length; S++) {
    const O = r[S];
    if (!O)
      continue;
    const {
      name: I,
      fn: D
    } = O, {
      x: j,
      y: F,
      data: le,
      reset: ce
    } = await D({
      x: c,
      y: f,
      initialPlacement: i,
      placement: b,
      strategy: a,
      middlewareData: N,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = j ?? c, f = F ?? f, N[I] = {
      ...N[I],
      ...le
    }, ce && C < K_ && (C++, typeof ce == "object" && (ce.placement && (b = ce.placement), ce.rects && (u = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: c,
      y: f
    } = Ed(u, b, l)), S = -1);
  }
  return {
    x: c,
    y: f,
    placement: b,
    strategy: a,
    middlewareData: N
  };
}, q_ = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: s,
      elements: o,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = pa(e, t) || {};
    if (u == null)
      return {};
    const f = Xh(c), b = {
      x: n,
      y: i
    }, C = Hc(a), N = Bc(C), S = await s.getDimensions(u), O = C === "y", I = O ? "top" : "left", D = O ? "bottom" : "right", j = O ? "clientHeight" : "clientWidth", F = r.reference[N] + r.reference[C] - b[C] - r.floating[N], le = b[C] - r.reference[C], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let U = ce ? ce[j] : 0;
    (!U || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (U = o.floating[j] || r.floating[N]);
    const G = F / 2 - le / 2, X = U / 2 - S[N] / 2 - 1, re = zr(f[I], X), ue = zr(f[D], X), te = U - S[N] - ue, ie = U / 2 - S[N] / 2 + G, P = Wh(re, ie, te), M = !l.arrow && wn(a) != null && ie !== P && r.reference[N] / 2 - (ie < re ? re : ue) - S[N] / 2 < 0, Y = M ? ie < re ? ie - re : ie - te : 0;
    return {
      [C]: b[C] + Y,
      data: {
        [C]: P,
        centerOffset: ie - P - Y,
        ...M && {
          alignmentOffset: Y
        }
      },
      reset: M
    };
  }
});
function Y_(e, t, n) {
  return (e ? [...n.filter((a) => wn(a) === e), ...n.filter((a) => wn(a) !== e)] : n.filter((a) => oi(a) === a)).filter((a) => e ? wn(a) === e || (t ? Ws(a) !== a : !1) : !0);
}
const X_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: s,
        placement: o,
        platform: l,
        elements: u
      } = t, {
        crossAxis: c = !1,
        alignment: f,
        allowedPlacements: b = wd,
        autoAlignment: C = !0,
        ...N
      } = pa(e, t), S = f !== void 0 || b === wd ? Y_(f || null, C, b) : b, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, I = S[O];
      if (I == null)
        return {};
      if (o !== I)
        return {
          reset: {
            placement: S[0]
          }
        };
      const D = await l.detectOverflow(t, N), j = Yh(I, r, await (l.isRTL == null ? void 0 : l.isRTL(u.floating))), F = [D[oi(I)], D[j[0]], D[j[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: I,
        overflows: F
      }], ce = S[O + 1];
      if (ce)
        return {
          data: {
            index: O + 1,
            overflows: le
          },
          reset: {
            placement: ce
          }
        };
      const U = le.map((re) => {
        const ue = wn(re.placement);
        return [re.placement, ue && c ? (
          // Check along the mainAxis and main crossAxis side.
          re.overflows.slice(0, 2).reduce((te, ie) => te + ie, 0)
        ) : (
          // Check only the mainAxis.
          re.overflows[0]
        ), re.overflows];
      }).sort((re, ue) => re[1] - ue[1]), X = ((a = U.filter((re) => re[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        wn(re[0]) ? 2 : 3
      ).every((ue) => ue <= 0))[0]) == null ? void 0 : a[0]) || U[0][0];
      return X !== o ? {
        data: {
          index: O + 1,
          overflows: le
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Z_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: s,
        initialPlacement: o,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: b,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: S = !0,
        ...O
      } = pa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const I = oi(a), D = Qn(o), j = oi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), le = b || (j || !S ? [qs(o)] : z_(o)), ce = N !== "none";
      !b && ce && le.push(...j_(o, S, N, F));
      const U = [o, ...le], G = await l.detectOverflow(t, O), X = [];
      let re = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && X.push(G[I]), f) {
        const P = Yh(a, s, F);
        X.push(G[P[0]], G[P[1]]);
      }
      if (re = [...re, {
        placement: a,
        overflows: X
      }], !X.every((P) => P <= 0)) {
        var ue, te;
        const P = (((ue = r.flip) == null ? void 0 : ue.index) || 0) + 1, M = U[P];
        if (M && (!(f === "alignment" ? D !== Qn(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        re.every((Z) => Qn(Z.placement) === D ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: re
            },
            reset: {
              placement: M
            }
          };
        let Y = (te = re.filter((ae) => ae.overflows[0] <= 0).sort((ae, Z) => ae.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : te.placement;
        if (!Y)
          switch (C) {
            case "bestFit": {
              var ie;
              const ae = (ie = re.filter((Z) => {
                if (ce) {
                  const fe = Qn(Z.placement);
                  return fe === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((fe) => fe > 0).reduce((fe, he) => fe + he, 0)]).sort((Z, fe) => Z[1] - fe[1])[0]) == null ? void 0 : ie[0];
              ae && (Y = ae);
              break;
            }
            case "initialPlacement":
              Y = o;
              break;
          }
        if (a !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
}, J_ = /* @__PURE__ */ new Set(["left", "top"]);
async function Q_(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = oi(n), o = wn(n), l = Qn(n) === "y", u = J_.has(s) ? -1 : 1, c = r && l ? -1 : 1, f = pa(t, e);
  let {
    mainAxis: b,
    crossAxis: C,
    alignmentAxis: N
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return o && typeof N == "number" && (C = o === "end" ? N * -1 : N), l ? {
    x: C * c,
    y: b * u
  } : {
    x: b * u,
    y: C * c
  };
}
const e1 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: s,
        middlewareData: o
      } = t, l = await Q_(t, e);
      return s === ((n = o.offset) == null ? void 0 : n.placement) && (i = o.arrow) != null && i.alignmentOffset ? {} : {
        x: a + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, t1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: i,
        placement: a,
        platform: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: l = {
          fn: (D) => {
            let {
              x: j,
              y: F
            } = D;
            return {
              x: j,
              y: F
            };
          }
        },
        ...u
      } = pa(e, t), c = {
        x: n,
        y: i
      }, f = await r.detectOverflow(t, u), b = Qn(a), C = qh(b);
      let N = c[C], S = c[b];
      const O = (D, j) => Wh(j + f[D === "y" ? "top" : "left"], j, j - f[D === "y" ? "bottom" : "right"]);
      s && (N = O(C, N)), o && (S = O(b, S));
      const I = l.fn({
        ...t,
        [C]: N,
        [b]: S
      });
      return {
        ...I,
        data: {
          x: I.x - n,
          y: I.y - i,
          enabled: {
            [C]: s,
            [b]: o
          }
        }
      };
    }
  };
}, n1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: i,
        platform: a,
        elements: r
      } = t, {
        apply: s = () => {
        },
        ...o
      } = pa(e, t), l = await a.detectOverflow(t, o), u = oi(n), c = wn(n), f = Qn(n) === "y", {
        width: b,
        height: C
      } = i.floating;
      let N, S;
      u === "top" || u === "bottom" ? (N = u, S = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (S = u, N = c === "end" ? "top" : "bottom");
      const O = C - l.top - l.bottom, I = b - l.left - l.right, D = zr(C - l[N], O), j = zr(b - l[S], I), F = t.middlewareData.shift, le = !F;
      let ce = D, U = j;
      F != null && F.enabled.x && (U = I), F != null && F.enabled.y && (ce = O), le && !c && (f ? U = b - 2 * ic(l.left, l.right) : ce = C - 2 * ic(l.top, l.bottom)), await s({
        ...t,
        availableWidth: U,
        availableHeight: ce
      });
      const G = await a.getDimensions(r.floating);
      return b !== G.width || C !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function fn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  return fn(e).getComputedStyle(e);
}
const Td = Math.min, br = Math.max, Ys = Math.round;
function Zh(e) {
  const t = Dn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = Ys(n) !== a || Ys(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function xi(e) {
  return Qh(e) ? (e.nodeName || "").toLowerCase() : "";
}
let hs;
function Jh() {
  if (hs) return hs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (hs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), hs) : navigator.userAgent;
}
function Mn(e) {
  return e instanceof fn(e).HTMLElement;
}
function Ti(e) {
  return e instanceof fn(e).Element;
}
function Qh(e) {
  return e instanceof fn(e).Node;
}
function Ad(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof fn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Vo(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function i1(e) {
  return ["table", "td", "th"].includes(xi(e));
}
function ac(e) {
  const t = /firefox/i.test(Jh()), n = Dn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function ep() {
  return !/^((?!chrome|android).)*safari/i.test(Jh());
}
function jc(e) {
  return ["html", "body", "#document"].includes(xi(e));
}
function tp(e) {
  return Ti(e) ? e : e.contextElement;
}
const np = { x: 1, y: 1 };
function Fa(e) {
  const t = tp(e);
  if (!Mn(t)) return np;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Zh(t);
  let s = (r ? Ys(n.width) : n.width) / i, o = (r ? Ys(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function Ur(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = tp(e);
  let l = np;
  t && (i ? Ti(i) && (l = Fa(i)) : l = Fa(e));
  const u = o ? fn(o) : window, c = !ep() && n;
  let f = (s.left + (c && ((a = u.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, b = (s.top + (c && ((r = u.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, C = s.width / l.x, N = s.height / l.y;
  if (o) {
    const S = fn(o), O = i && Ti(i) ? fn(i) : i;
    let I = S.frameElement;
    for (; I && i && O !== S; ) {
      const D = Fa(I), j = I.getBoundingClientRect(), F = getComputedStyle(I);
      j.x += (I.clientLeft + parseFloat(F.paddingLeft)) * D.x, j.y += (I.clientTop + parseFloat(F.paddingTop)) * D.y, f *= D.x, b *= D.y, C *= D.x, N *= D.y, f += j.x, b += j.y, I = fn(I).frameElement;
    }
  }
  return { width: C, height: N, top: b, right: f + C, bottom: b + N, left: f, x: f, y: b };
}
function Ai(e) {
  return ((Qh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Go(e) {
  return Ti(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ip(e) {
  return Ur(Ai(e)).left + Go(e).scrollLeft;
}
function Br(e) {
  if (xi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ad(e) && e.host || Ai(e);
  return Ad(t) ? t.host : t;
}
function ap(e) {
  const t = Br(e);
  return jc(t) ? t.ownerDocument.body : Mn(t) && Vo(t) ? t : ap(t);
}
function Xs(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = ap(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = fn(i);
  return a ? t.concat(r, r.visualViewport || [], Vo(i) ? i : []) : t.concat(i, Xs(i));
}
function kd(e, t, n) {
  return t === "viewport" ? mr((function(i, a) {
    const r = fn(i), s = Ai(i), o = r.visualViewport;
    let l = s.clientWidth, u = s.clientHeight, c = 0, f = 0;
    if (o) {
      l = o.width, u = o.height;
      const b = ep();
      (b || !b && a === "fixed") && (c = o.offsetLeft, f = o.offsetTop);
    }
    return { width: l, height: u, x: c, y: f };
  })(e, n)) : Ti(t) ? mr((function(i, a) {
    const r = Ur(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Mn(i) ? Fa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : mr((function(i) {
    const a = Ai(i), r = Go(i), s = i.ownerDocument.body, o = br(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = br(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let u = -r.scrollLeft + ip(i);
    const c = -r.scrollTop;
    return Dn(s).direction === "rtl" && (u += br(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: u, y: c };
  })(Ai(e)));
}
function Od(e) {
  return Mn(e) && Dn(e).position !== "fixed" ? e.offsetParent : null;
}
function Nd(e) {
  const t = fn(e);
  let n = Od(e);
  for (; n && i1(n) && Dn(n).position === "static"; ) n = Od(n);
  return n && (xi(n) === "html" || xi(n) === "body" && Dn(n).position === "static" && !ac(n)) ? t : n || (function(i) {
    let a = Br(i);
    for (; Mn(a) && !jc(a); ) {
      if (ac(a)) return a;
      a = Br(a);
    }
    return null;
  })(e) || t;
}
function a1(e, t, n) {
  const i = Mn(t), a = Ai(t), r = Ur(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((xi(t) !== "body" || Vo(a)) && (s = Go(t)), Mn(t)) {
    const l = Ur(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = ip(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const r1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(u, c) {
    const f = c.get(u);
    if (f) return f;
    let b = Xs(u).filter(((O) => Ti(O) && xi(O) !== "body")), C = null;
    const N = Dn(u).position === "fixed";
    let S = N ? Br(u) : u;
    for (; Ti(S) && !jc(S); ) {
      const O = Dn(S), I = ac(S);
      (N ? I || C : I || O.position !== "static" || !C || !["absolute", "fixed"].includes(C.position)) ? C = O : b = b.filter(((D) => D !== S)), S = Br(S);
    }
    return c.set(u, b), b;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((u, c) => {
    const f = kd(t, c, a);
    return u.top = br(f.top, u.top), u.right = Td(f.right, u.right), u.bottom = Td(f.bottom, u.bottom), u.left = br(f.left, u.left), u;
  }), kd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Mn(n), r = Ai(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((xi(n) !== "body" || Vo(r)) && (s = Go(n)), Mn(n))) {
    const u = Ur(n);
    o = Fa(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Ti, getDimensions: function(e) {
  return Mn(e) ? Zh(e) : e.getBoundingClientRect();
}, getOffsetParent: Nd, getDocumentElement: Ai, getScale: Fa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Nd, r = this.getDimensions;
  return { reference: a1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Dn(e).direction === "rtl" }, s1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: r1, ...n }, r = { ...a.platform, _c: i };
  return W_(e, t, { ...a, platform: r });
}, ki = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function rc(e, t) {
  let n = ki.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = ki.themes[n.$extend] || {} : (n = null, i = ki[t]) : n = null;
  while (n);
  return i;
}
function o1(e) {
  const t = [e];
  let n = ki.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = ki.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function xd(e) {
  const t = [e];
  let n = ki.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = ki.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Hr = !1;
if (typeof window < "u") {
  Hr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Hr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let rp = !1;
typeof window < "u" && typeof navigator < "u" && (rp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const l1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ld = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Rd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Id(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Nl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const yn = [];
let Zi = null;
const Pd = {};
function Dd(e) {
  let t = Pd[e];
  return t || (t = Pd[e] = []), t;
}
let sc = function() {
};
typeof window < "u" && (sc = window.Element);
function Me(e) {
  return function(t) {
    return rc(t.theme, e);
  };
}
const xl = "__floating-vue__popper", sp = () => /* @__PURE__ */ St({
  name: "VPopper",
  provide() {
    return {
      [xl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [xl]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: Me("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Me("positioningDisabled")
    },
    placement: {
      type: String,
      default: Me("placement"),
      validator: (e) => l1.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Me("delay")
    },
    distance: {
      type: [Number, String],
      default: Me("distance")
    },
    skidding: {
      type: [Number, String],
      default: Me("skidding")
    },
    triggers: {
      type: Array,
      default: Me("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Me("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Me("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Me("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Me("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Me("popperHideTriggers")
    },
    container: {
      type: [String, Object, sc, Boolean],
      default: Me("container")
    },
    boundary: {
      type: [String, sc],
      default: Me("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Me("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Me("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Me("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Me("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Me("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Me("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Me("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Me("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Me("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Me("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Me("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Me("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Me("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Me("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Me("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Me("flip")
    },
    shift: {
      type: Boolean,
      default: Me("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Me("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Me("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Me("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[xl]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
      var i, a;
      (i = this.parentPopper) != null && i.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (((a = this.parentPopper) == null ? void 0 : a.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var n;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(e1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(X_({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(t1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Z_({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(q_({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let s;
          const { centerOffset: o } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? s = Math.abs(o) > a.reference.width / 2 : s = Math.abs(o) > a.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: s }) => {
            var o;
            if ((o = s.autoSize) != null && o.skip)
              return {};
            let l, u;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : u = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(n1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await s1(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: n.x,
        y: n.y,
        placement: n.placement,
        strategy: n.strategy,
        arrow: {
          ...n.middlewareData.arrow,
          ...n.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Zi && this.instantMove && Zi.instantMove && Zi !== this.parentPopper) {
        Zi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Zi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Nl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Xs(this.$_referenceNode),
        ...Xs(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), i = n.parentNode.getBoundingClientRect(), a = t.x + t.width / 2 - (i.left + n.offsetLeft), r = t.y + t.height / 2 - (i.top + n.offsetTop);
        this.result.transformOrigin = `${a}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < yn.length; n++)
          t = yn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      yn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of xd(this.theme))
        Dd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Nl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Id(yn, this), yn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of xd(this.theme)) {
        const i = Dd(n);
        Id(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Zi === this && (Zi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Nl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ld, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ld, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Rd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Rd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Hr ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((s) => {
        const o = t[s];
        o && this.$_registerEventListeners(e, o, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: i, eventType: a, handler: r } = n;
        !e || e === a ? i.forEach((s) => s.removeEventListener(a, r)) : t.push(n);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const n of this.$_targetNodes) {
        const i = n.getAttribute(e);
        i && (n.removeAttribute(e), n.setAttribute(t, i));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const i = e[n];
          i == null ? t.removeAttribute(n) : t.setAttribute(n, i);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (yr >= e.left && yr <= e.right && _r >= e.top && _r <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = yr - _i, i = _r - wi, a = t.left + t.width / 2 - _i + (t.top + t.height / 2) - wi + t.width + t.height, r = _i + n * a, s = wi + i * a;
        return ps(_i, wi, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        ps(_i, wi, r, s, t.left, t.top, t.right, t.top) || // Top edge
        ps(_i, wi, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        ps(_i, wi, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (rp) {
    const e = Hr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Md(t), e), document.addEventListener("touchend", (t) => Fd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Md(e), !0), window.addEventListener("click", (e) => Fd(e, !1), !0);
  window.addEventListener("resize", d1);
}
function Md(e, t) {
  for (let n = 0; n < yn.length; n++) {
    const i = yn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Fd(e, t) {
  c1(e, t);
}
function c1(e, t) {
  const n = {};
  for (let i = yn.length - 1; i >= 0; i--) {
    const a = yn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && $d(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && $d(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function $d(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || u1(e, n) && !t;
}
function u1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function d1() {
  for (let e = 0; e < yn.length; e++)
    yn[e].$_computePosition();
}
let _i = 0, wi = 0, yr = 0, _r = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  _i = yr, wi = _r, yr = e.clientX, _r = e.clientY;
}, Hr ? {
  passive: !0
} : void 0);
function ps(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), u = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
const f1 = {
  extends: sp()
}, Vc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function h1(e, t, n, i, a, r) {
  return _(), k("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Le(e.$slots, "default", Es(Pr(e.slotData)))
  ], 2);
}
const p1 = /* @__PURE__ */ Vc(f1, [["render", h1]]);
function v1() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var i = e.indexOf("rv:");
    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
  }
  var a = e.indexOf("Edge/");
  return a > 0 ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10) : -1;
}
let Cs;
function oc() {
  oc.init || (oc.init = !0, Cs = v1() !== -1);
}
var Ko = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    oc(), ti(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Cs && this.$el.appendChild(e), e.data = "about:blank", Cs || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Cs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const g1 = /* @__PURE__ */ vv();
hv("data-v-b329ee4c");
const m1 = {
  class: "resize-observer",
  tabindex: "-1"
};
pv();
const b1 = /* @__PURE__ */ g1((e, t, n, i, a, r) => (_(), De("div", m1)));
Ko.render = b1;
Ko.__scopeId = "data-v-b329ee4c";
Ko.__file = "src/components/ResizeObserver.vue";
const op = (e = "theme") => ({
  computed: {
    themeClass() {
      return o1(this[e]);
    }
  }
}), y1 = /* @__PURE__ */ St({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ko
  },
  mixins: [
    op()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), _1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], w1 = {
  ref: "inner",
  class: "v-popper__inner"
}, C1 = /* @__PURE__ */ d("div", { class: "v-popper__arrow-outer" }, null, -1), S1 = /* @__PURE__ */ d("div", { class: "v-popper__arrow-inner" }, null, -1), E1 = [
  C1,
  S1
];
function T1(e, t, n, i, a, r) {
  const s = Fe("ResizeObserver");
  return _(), k("div", {
    id: e.popperId,
    ref: "popover",
    class: Ee(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: nn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Kt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    d("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    d("div", {
      class: "v-popper__wrapper",
      style: nn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      d("div", w1, [
        e.mounted ? (_(), k(ve, { key: 0 }, [
          d("div", null, [
            Le(e.$slots, "default")
          ]),
          e.handleResize ? (_(), De(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : q("", !0)
        ], 64)) : q("", !0)
      ], 512),
      d("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: nn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, E1, 4)
    ], 4)
  ], 46, _1);
}
const lp = /* @__PURE__ */ Vc(y1, [["render", T1]]), cp = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let lc = function() {
};
typeof window < "u" && (lc = window.Element);
const A1 = /* @__PURE__ */ St({
  name: "VPopperWrapper",
  components: {
    Popper: p1,
    PopperContent: lp
  },
  mixins: [
    cp,
    op("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, lc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, lc],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function k1(e, t, n, i, a, r) {
  const s = Fe("PopperContent"), o = Fe("Popper");
  return _(), De(o, It({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: Oe(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: f,
      autoHide: b,
      show: C,
      hide: N,
      handleResize: S,
      onResize: O,
      classes: I,
      result: D
    }) => [
      Le(e.$slots, "default", {
        shown: u,
        show: C,
        hide: N
      }),
      me(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: c,
        "skip-transition": f,
        "auto-hide": b,
        "handle-resize": S,
        classes: I,
        result: D,
        onHide: N,
        onResize: O
      }, {
        default: Oe(() => [
          Le(e.$slots, "popper", {
            shown: u,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Gc = /* @__PURE__ */ Vc(A1, [["render", k1]]), O1 = {
  ...Gc,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Gc
});
({
  ...Gc
});
sp();
const zd = ki, N1 = O1, x1 = /* @__PURE__ */ St({
  name: "NcPopoverTriggerProvider",
  provide() {
    return {
      "NcPopover:trigger:shown": () => this.shown,
      "NcPopover:trigger:attrs": () => this.triggerAttrs
    };
  },
  props: {
    /**
     * Is the popover currently shown
     */
    shown: {
      type: Boolean,
      required: !0
    },
    /**
     * ARIA Role of the popup
     */
    popupRole: {
      type: String,
      default: void 0
    }
  },
  computed: {
    triggerAttrs() {
      return {
        "aria-haspopup": this.popupRole,
        "aria-expanded": this.shown.toString()
      };
    }
  },
  render() {
    return this.$slots.default?.({
      attrs: this.triggerAttrs
    });
  }
}), L1 = "_ncPopover_qgtYg", R1 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: L1
}, up = "nc-popover-9";
zd.themes[up] = structuredClone(zd.themes.dropdown);
const I1 = {
  name: "NcPopover",
  components: {
    Dropdown: N1,
    NcPopoverTriggerProvider: x1
  },
  props: {
    /**
     * Element to use for calculating the popper boundary (size and position).
     * Either a query string or the actual HTMLElement.
     */
    boundary: {
      type: [String, Object],
      default: ""
    },
    /**
     * Automatically hide the popover on click outside.
     *
     * @deprecated Use `no-close-on-click-outside` instead (inverted value)
     */
    closeOnClickOutside: {
      type: Boolean,
      // eslint-disable-next-line vue/no-boolean-default
      default: !0
    },
    /**
     * Disable the automatic popover hide on click outside.
     */
    noCloseOnClickOutside: {
      type: Boolean,
      default: !1
    },
    /**
     * Container where to mount the popover.
     * Either a select query or `false` to mount to the parent node.
     */
    container: {
      type: [Boolean, String],
      default: "body"
    },
    /**
     * Delay for showing or hiding the popover.
     *
     * Can either be a number or an object to configure different delays (`{ show: number, hide: number }`).
     */
    delay: {
      type: [Number, Object],
      default: 0
    },
    /**
     * Disable the popover focus trap.
     */
    noFocusTrap: {
      type: Boolean,
      default: !1
    },
    /**
     * Where to place the popover.
     *
     * This consists of the vertical placement and the horizontal placement.
     * E.g. `bottom` will place the popover on the bottom of the trigger (horizontally centered),
     * while `buttom-start` will horizontally align the popover on the logical start (e.g. for LTR layout on the left.).
     * The `start` or `end` placement will align the popover on the left or right side or the trigger element.
     *
     * @type {'auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'start'|'end'}
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * Class to be applied to the popover base
     */
    popoverBaseClass: {
      type: String,
      default: ""
    },
    /**
     * Events that trigger the popover on the popover container itself.
     * This is useful if you set `triggers` to `hover` and also want the popover to stay open while hovering the popover itself.
     *
     * It is possible to also pass an object to define different triggers for hide and show `{ show: ['hover'], hide: ['click'] }`.
     */
    popoverTriggers: {
      type: [Array, Object],
      default: null
    },
    /**
     * Popup role
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup#values
     */
    popupRole: {
      type: String,
      default: void 0,
      validator: (e) => ["menu", "listbox", "tree", "grid", "dialog", "true"].includes(e)
    },
    /**
     * Set element to return focus to after focus trap deactivation
     *
     * @type {SetReturnFocus}
     */
    setReturnFocus: {
      default: void 0,
      type: [Boolean, HTMLElement, SVGElement, String, Function]
    },
    /**
     * Show or hide the popper
     */
    shown: {
      type: Boolean,
      default: !1
    },
    /**
     * Events that trigger the popover.
     *
     * If you pass an empty array then only the `shown` prop can control the popover state.
     * Following events are available:
     * - `'hover'`
     * - `'click'`
     * - `'focus'`
     * - `'touch'`
     *
     * It is also possible to pass an object to have different events for show and hide:
     * `{ hide: ['click'], show: ['click', 'hover'] }`
     */
    triggers: {
      type: [Array, Object],
      default: () => ["click"]
    }
  },
  emits: [
    "afterShow",
    "afterHide",
    "update:shown"
  ],
  setup() {
    return {
      theme: up
    };
  },
  data() {
    return {
      internalShown: this.shown
    };
  },
  computed: {
    popperTriggers() {
      if (this.popoverTriggers && Array.isArray(this.popoverTriggers))
        return this.popoverTriggers;
    },
    popperHideTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers == "object")
        return this.popoverTriggers.hide;
    },
    popperShowTriggers() {
      if (this.popoverTriggers && typeof this.popoverTriggers == "object")
        return this.popoverTriggers.show;
    },
    internalTriggers() {
      if (this.triggers && Array.isArray(this.triggers))
        return this.triggers;
    },
    hideTriggers() {
      if (this.triggers && typeof this.triggers == "object")
        return this.triggers.hide;
    },
    showTriggers() {
      if (this.triggers && typeof this.triggers == "object")
        return this.triggers.show;
    },
    internalPlacement() {
      return this.placement === "start" ? ec ? "right" : "left" : this.placement === "end" ? ec ? "left" : "right" : this.placement;
    }
  },
  watch: {
    shown(e) {
      this.internalShown = e;
    },
    internalShown(e) {
      this.$emit("update:shown", e);
    }
  },
  mounted() {
    this.checkTriggerA11y();
  },
  beforeUnmount() {
    this.clearFocusTrap(), this.clearEscapeStopPropagation();
  },
  methods: {
    /**
     * Check if the trigger has all required a11y attributes.
     * Important to check custom trigger button.
     */
    checkTriggerA11y() {
      window.OC?.debug && this.getPopoverTriggerContainerElement().querySelector("[aria-expanded]");
    },
    /**
     * Remove incorrect aria-describedby attribute from the trigger.
     *
     * @see https://github.com/Akryum/floating-vue/blob/8d4f7125aae0e3ea00ba4093d6d2001ab15058f1/packages/floating-vue/src/components/Popper.ts#L734
     */
    removeFloatingVueAriaDescribedBy() {
      const t = this.getPopoverTriggerContainerElement().querySelectorAll("[data-popper-shown]");
      for (const n of t)
        n.removeAttribute("aria-describedby");
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverContentElement() {
      return this.$refs.popover?.$refs.popperContent?.$el;
    },
    /**
     * @return {HTMLElement|undefined}
     */
    getPopoverTriggerContainerElement() {
      return this.$refs.popover?.$refs.popper?.$refs.reference;
    },
    /**
     * Add focus trap for accessibility.
     */
    async useFocusTrap() {
      if (await this.$nextTick(), this.noFocusTrap)
        return;
      const e = this.getPopoverContentElement();
      e.tabIndex = -1, e && (this.$focusTrap = zc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: $r(),
        fallBackFocus: e
      }), this.$focusTrap.activate());
    },
    /**
     * Remove focus trap
     *
     * @param {object} options The configuration options for focusTrap
     */
    clearFocusTrap(e = {}) {
      try {
        this.$focusTrap?.deactivate(e), this.$focusTrap = null;
      } catch (t) {
        ua.warn("[NcPopover] Failed to clear focus trap", { error: t });
      }
    },
    /**
     * Add stopPropagation for Escape.
     * It prevents global Escape handling after closing popover.
     *
     * Manual event handling is used here instead of v-on because there is no direct access to the node.
     * Alternative - wrap <template #popover> in a div wrapper.
     */
    addEscapeStopPropagation() {
      this.getPopoverContentElement()?.addEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * Remove stop Escape handler
     */
    clearEscapeStopPropagation() {
      this.getPopoverContentElement()?.removeEventListener("keydown", this.stopKeydownEscapeHandler);
    },
    /**
     * @param {KeyboardEvent} event - native keydown event
     */
    stopKeydownEscapeHandler(e) {
      e.type === "keydown" && e.key === "Escape" && e.stopPropagation();
    },
    async afterShow() {
      this.getPopoverContentElement().addEventListener("transitionend", () => {
        this.$emit("afterShow");
      }, { once: !0, passive: !0 }), this.removeFloatingVueAriaDescribedBy(), await this.$nextTick(), await this.useFocusTrap(), this.addEscapeStopPropagation();
    },
    afterHide() {
      this.getPopoverContentElement()?.addEventListener("transitionend", () => {
        this.$emit("afterHide");
      }, { once: !0, passive: !0 }), this.clearFocusTrap(), this.clearEscapeStopPropagation();
    }
  }
};
function P1(e, t, n, i, a, r) {
  const s = Fe("NcPopoverTriggerProvider"), o = Fe("Dropdown");
  return _(), De(o, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (l) => a.internalShown = l),
      t[1] || (t[1] = (l) => a.internalShown = l)
    ],
    autoHide: !n.noCloseOnClickOutside && n.closeOnClickOutside,
    boundary: n.boundary || void 0,
    container: n.container,
    delay: n.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: r.internalPlacement,
    popperClass: [e.$style.ncPopover, n.popoverBaseClass],
    popperTriggers: r.popperTriggers,
    popperHideTriggers: r.popperHideTriggers,
    popperShowTriggers: r.popperShowTriggers,
    theme: i.theme,
    triggers: r.internalTriggers,
    hideTriggers: r.hideTriggers,
    showTriggers: r.showTriggers,
    onApplyShow: r.afterShow,
    onApplyHide: r.afterHide
  }, {
    popper: Oe((l) => [
      Le(e.$slots, "default", Es(Pr(l)))
    ]),
    default: Oe(() => [
      me(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Oe((l) => [
          Le(e.$slots, "trigger", Es(Pr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const D1 = {
  $style: R1
}, Ud = /* @__PURE__ */ qe(I1, [["render", P1], ["__cssModules", D1]]), M1 = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, F1 = ["aria-hidden", "aria-label"], $1 = ["fill", "width", "height"], z1 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, U1 = { key: 0 };
function B1(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", z1, [
        n.title ? (_(), k("title", U1, p(n.title), 1)) : q("", !0)
      ])
    ], 8, $1))
  ], 16, F1);
}
const H1 = /* @__PURE__ */ qe(M1, [["render", B1]]);
Ri(wb);
function Kc(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === wt)
        return !1;
      if (n.type === ve && !Kc(n.children))
        return !1;
      if (n.type === qr && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const j1 = ".focusable", V1 = {
  name: "NcActions",
  components: {
    NcButton: Pn,
    NcPopover: Ud
  },
  provide() {
    return {
      /**
       * NcActions can be used as:
       * - Application menu (has menu role)
       * - Navigation (has no specific role, should be used an element with navigation role)
       * - Popover with plain text or text inputs (has no specific role)
       * Depending on the usage (used items), the menu and its items should have different roles for a11y.
       * Provide the role for NcAction* components in the NcActions content.
       *
       * @type {import('vue').ComputedRef<boolean>}
       */
      [Uc]: ee(() => this.actionsMenuSemanticType === "menu"),
      [Gh]: this.closeMenu
    };
  },
  props: {
    /**
     * Specify the open state of the popover menu
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * This disables the internal open management,
     * so the actions menu only respects the `open` prop.
     * This is e.g. necessary for the NcAvatar component
     * to only open the actions menu after loading it's entries has finished.
     */
    manualOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the name to show for single actions
     */
    forceName: {
      type: Boolean,
      default: !1
    },
    /**
     * Specify the menu name
     */
    menuName: {
      type: String,
      default: null
    },
    /**
     * Apply primary styling for this menu
     */
    primary: {
      type: Boolean,
      default: !1
    },
    /**
     * Icon to show for the toggle menu button
     * when more than one action is inside the actions component.
     * Only replace the default three-dot icon if really necessary.
     */
    defaultIcon: {
      type: String,
      default: ""
    },
    /**
     * Aria label for the actions menu.
     *
     * If `menuName` is defined this will not be used to prevent
     * any accessible name conflicts. This ensures that the
     * element can be activated via voice input.
     */
    ariaLabel: {
      type: String,
      default: gt("Actions")
    },
    /**
     * Wanted direction of the menu
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * DOM element for the actions' popover boundaries
     */
    boundariesElement: {
      type: Element,
      default: () => document.getElementById("content-vue") ?? document.querySelector("body")
    },
    /**
     * Selector for the actions' popover container
     */
    container: {
      type: [Boolean, String, Object, Element],
      default: "body"
    },
    /**
     * Disabled state of the main button (single action or menu toggle)
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Display x items inline out of the dropdown menu
     * Will be ignored if `forceMenu` is set
     */
    inline: {
      type: Number,
      default: 0
    },
    /**
     * Specifies the button variant used for trigger and single actions buttons.
     *
     * If left empty, the default button style will be applied.
     *
     * @since 8.23.0
     */
    variant: {
      type: String,
      validator(e) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(e);
      },
      default: null
    },
    /**
     * Specifies whether the button should span all the available width.
     */
    wide: {
      type: Boolean,
      default: !1
    },
    /**
     * Specify the size used for trigger and single actions buttons.
     *
     * If left empty, the default button size will be applied.
     */
    size: {
      type: String,
      default: "normal",
      validator(e) {
        return ["small", "normal", "large"].includes(e);
      }
    }
  },
  emits: [
    "click",
    "blur",
    "focus",
    "close",
    "closed",
    "open",
    "opened",
    "update:open"
  ],
  setup() {
    return {
      randomId: jo()
    };
  },
  data() {
    return {
      opened: this.open,
      focusIndex: 0,
      /**
       * @type {'menu'|'navigation'|'dialog'|'tooltip'|'unknown'}
       */
      actionsMenuSemanticType: "unknown"
    };
  },
  computed: {
    triggerButtonVariant() {
      return this.variant || (this.primary ? "primary" : this.menuName ? "secondary" : "tertiary");
    },
    /**
     * A11y roles and keyboard navigation configuration depending on the semantic type
     */
    config() {
      return {
        menu: {
          popupRole: "menu",
          withArrowNavigation: !0,
          withTabNavigation: !1,
          withFocusTrap: !1
        },
        navigation: {
          popupRole: void 0,
          withArrowNavigation: !1,
          withTabNavigation: !0,
          withFocusTrap: !1
        },
        dialog: {
          popupRole: "dialog",
          withArrowNavigation: !1,
          withTabNavigation: !0,
          withFocusTrap: !0
        },
        tooltip: {
          popupRole: void 0,
          withArrowNavigation: !1,
          withTabNavigation: !1,
          withFocusTrap: !1
        },
        // Due to Vue limitations, we sometimes cannot determine the true type
        // As a fallback use both arrow navigation and focus trap
        unknown: {
          popupRole: void 0,
          role: void 0,
          withArrowNavigation: !0,
          withTabNavigation: !1,
          withFocusTrap: !0
        }
      }[this.actionsMenuSemanticType];
    },
    withFocusTrap() {
      return this.config.withFocusTrap;
    }
  },
  watch: {
    // Watch parent prop
    open(e) {
      e !== this.opened && (this.opened = e);
    },
    opened() {
      this.opened ? document.body.addEventListener("keydown", this.handleEscapePressed) : document.body.removeEventListener("keydown", this.handleEscapePressed);
    }
  },
  created() {
    M_(() => this.opened, {
      disabled: () => this.config.withFocusTrap
    }), "ariaHidden" in this.$attrs;
  },
  methods: {
    /**
     * Get the name of the action component
     *
     * @param {import('vue').VNode} action - a vnode with a NcAction* component instance
     * @return {string} the name of the action component
     */
    getActionName(e) {
      return e?.type?.name;
    },
    /**
     * Do we have exactly one Action and
     * is it allowed as a standalone element?
     *
     * @param {import('vue').VNode} action The action to check
     * @return {boolean}
     */
    isValidSingleAction(e) {
      return ["NcActionButton", "NcActionLink", "NcActionRouter"].includes(this.getActionName(e));
    },
    isAction(e) {
      return this.getActionName(e)?.startsWith?.("NcAction");
    },
    /**
     * Check whether a icon prop value is an URL or not
     *
     * @param {string} url The icon prop value
     */
    isIconUrl(e) {
      try {
        return !!new URL(e, e.startsWith("/") ? window.location.origin : void 0);
      } catch {
        return !1;
      }
    },
    // MENU STATE MANAGEMENT
    toggleMenu(e) {
      e ? this.openMenu() : this.closeMenu();
    },
    openMenu() {
      this.opened || (this.opened = !0, this.$emit("update:open", !0), this.$emit("open"));
    },
    async closeMenu(e = !0) {
      this.opened && (await this.$nextTick(), this.opened = !1, this.$refs.popover?.clearFocusTrap({ returnFocus: e }), this.$emit("update:open", !1), this.$emit("close"), this.focusIndex = 0, e && this.$refs.triggerButton?.$el.focus());
    },
    /**
     * Called when popover is shown after the show delay
     */
    onOpened() {
      this.$nextTick(() => {
        this.focusFirstAction(null), this.$emit("opened");
      });
    },
    onClosed() {
      this.$emit("closed");
    },
    // MENU KEYS & FOCUS MANAGEMENT
    /**
     * @return {HTMLElement|null}
     */
    getCurrentActiveMenuItemElement() {
      return this.$refs.menu.querySelector("li.active");
    },
    /**
     * @return {NodeList<HTMLElement>}
     */
    getFocusableMenuItemElements() {
      return this.$refs.menu.querySelectorAll(j1);
    },
    /**
     * Dispatches the keydown listener to different handlers
     *
     * @param {object} event The keydown event
     */
    onKeydown(e) {
      if (e.key === "Tab") {
        if (this.config.withFocusTrap)
          return;
        if (!this.config.withTabNavigation) {
          this.closeMenu(!0);
          return;
        }
        e.preventDefault();
        const t = this.getFocusableMenuItemElements(), n = [...t].indexOf(document.activeElement);
        if (n === -1)
          return;
        const i = e.shiftKey ? n - 1 : n + 1;
        (i < 0 || i === t.length) && this.closeMenu(!0), this.focusIndex = i, this.focusAction();
        return;
      }
      this.config.withArrowNavigation && (e.key === "ArrowUp" && this.focusPreviousAction(e), e.key === "ArrowDown" && this.focusNextAction(e), e.key === "PageUp" && this.focusFirstAction(e), e.key === "PageDown" && this.focusLastAction(e)), this.handleEscapePressed(e);
    },
    onTriggerKeydown(e) {
      e.key === "Escape" && this.actionsMenuSemanticType === "tooltip" && this.closeMenu();
    },
    handleEscapePressed(e) {
      e.key === "Escape" && (this.closeMenu(), e.preventDefault());
    },
    removeCurrentActive() {
      const e = this.$refs.menu.querySelector("li.active");
      e && e.classList.remove("active");
    },
    focusAction() {
      const e = this.getFocusableMenuItemElements()[this.focusIndex];
      if (e) {
        this.removeCurrentActive();
        const t = e.closest("li.action");
        e.focus(), t && t.classList.add("active");
      }
    },
    focusPreviousAction(e) {
      this.opened && (this.focusIndex === 0 ? this.focusLastAction(e) : (this.preventIfEvent(e), this.focusIndex = this.focusIndex - 1), this.focusAction());
    },
    focusNextAction(e) {
      if (this.opened) {
        const t = this.getFocusableMenuItemElements().length - 1;
        this.focusIndex === t ? this.focusFirstAction(e) : (this.preventIfEvent(e), this.focusIndex = this.focusIndex + 1), this.focusAction();
      }
    },
    focusFirstAction(e) {
      if (this.opened) {
        this.preventIfEvent(e);
        const t = [...this.getFocusableMenuItemElements()].findIndex((n) => n.getAttribute("aria-checked") === "true" && n.getAttribute("role") === "menuitemradio");
        this.focusIndex = t > -1 ? t : 0, this.focusAction();
      }
    },
    focusLastAction(e) {
      this.opened && (this.preventIfEvent(e), this.focusIndex = this.getFocusableMenuItemElements().length - 1, this.focusAction());
    },
    preventIfEvent(e) {
      e && (e.preventDefault(), e.stopPropagation());
    },
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e), this.actionsMenuSemanticType === "tooltip" && this.$refs.menu && this.getFocusableMenuItemElements().length === 0 && this.closeMenu(!1);
    },
    onClick(e) {
      this.$emit("click", e);
    }
  },
  /**
   * The render function to display the component
   *
   * @return {object|undefined} The created VNode
   */
  render() {
    const e = [], t = (C, N) => {
      C.forEach((S) => {
        if (this.isAction(S)) {
          N.push(S);
          return;
        }
        S.type === ve && t(S.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((C) => !i.includes(C)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((C) => s.includes(this.getActionName(C))), u = a.some((C) => r.includes(this.getActionName(C))), c = a.some((C) => o.includes(this.getActionName(C)));
    l ? this.actionsMenuSemanticType = "dialog" : u ? this.actionsMenuSemanticType = "menu" : c ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const f = (C) => {
      const N = C?.props?.icon, S = C?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? Vt("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : Vt("span", { class: ["icon", N] })), O = C?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? O : "";
      let D = C?.props?.title;
      this.forceName || D || (D = O);
      const j = { ...C?.props ?? {} }, F = ["submit", "reset"].includes(j.type) ? j.modelValue : "button";
      return delete j.modelValue, delete j.type, Vt(
        Pn,
        It(
          j,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": C?.props?.["aria-label"] || O,
            title: D,
            disabled: this.disabled || C?.props?.disabled,
            pressed: C?.props?.modelValue,
            size: this.size,
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": C?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => S
        }
      );
    }, b = (C) => {
      const N = Kc(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Vt("span", { class: ["icon", this.defaultIcon] }) : Vt(H1, { size: 20 }), S = `${this.randomId}-trigger`;
      return Vt(
        Ud,
        {
          ref: "popover",
          delay: 0,
          shown: this.opened,
          placement: this.placement,
          boundary: this.boundariesElement,
          autoBoundaryMaxSize: !0,
          container: this.container,
          ...this.manualOpen && {
            triggers: []
          },
          noCloseOnClickOutside: this.manualOpen,
          popoverBaseClass: "action-item__popper",
          popupRole: this.config.popupRole,
          setReturnFocus: this.config.withFocusTrap ? this.$refs.triggerButton?.$el : void 0,
          noFocusTrap: !this.config.withFocusTrap,
          "onUpdate:shown": this.toggleMenu,
          onAfterShow: this.onOpened,
          onAfterHide: this.onClosed
        },
        {
          trigger: () => Vt(Pn, {
            id: S,
            class: "action-item__menutoggle",
            disabled: this.disabled,
            size: this.size,
            variant: this.triggerButtonVariant,
            wide: this.wide,
            ref: "triggerButton",
            "aria-label": this.menuName ? null : this.ariaLabel,
            // 'aria-controls' should only present together with a valid aria-haspopup
            "aria-controls": this.opened && this.config.popupRole ? this.randomId : null,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeydown: this.onTriggerKeydown
          }, {
            icon: () => N,
            default: () => this.menuName
          }),
          default: () => Vt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Vt("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": S,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              C
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? f(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Vt(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(f),
        // render the rest within the popover menu
        a.length > 0 ? Vt(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [b(a)]
        ) : null
      ]
    ) : Vt(
      "div",
      {
        class: [
          "action-item action-item--default-popover",
          `action-item--${this.triggerButtonVariant}`,
          {
            "action-item--open": this.opened,
            "action-item--wide": this.wide
          }
        ]
      },
      [
        b(e)
      ]
    ));
  }
}, Wc = /* @__PURE__ */ qe(V1, [["__scopeId", "data-v-7206c1f1"]]), G1 = ["aria-label"], K1 = ["width", "height"], W1 = ["fill"], q1 = ["fill"], Y1 = { key: 0 }, X1 = /* @__PURE__ */ St({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = ee(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (_(), k("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (_(), k("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        d("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, W1),
        d("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), k("title", Y1, p(e.name), 1)) : q("", !0)
        ], 8, q1)
      ], 8, K1))
    ], 8, G1));
  }
}), dp = /* @__PURE__ */ qe(X1, [["__scopeId", "data-v-cf399190"]]), cc = /* @__PURE__ */ St({
  name: "NcVNodes",
  props: {
    /**
     * The vnodes to render
     */
    vnodes: {
      type: [Array, Object],
      default: null
    }
  },
  /**
   * The render function to display the component
   */
  render() {
    return this.vnodes || this.$slots?.default?.({});
  }
}), Z1 = {
  name: "PencilIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, J1 = ["aria-hidden", "aria-label"], Q1 = ["fill", "width", "height"], e0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, t0 = { key: 0 };
function n0(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", e0, [
        n.title ? (_(), k("title", t0, p(n.title), 1)) : q("", !0)
      ])
    ], 8, Q1))
  ], 16, J1);
}
const i0 = /* @__PURE__ */ qe(Z1, [["render", n0]]), a0 = {
  name: "UndoIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, r0 = ["aria-hidden", "aria-label"], s0 = ["fill", "width", "height"], o0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, l0 = { key: 0 };
function c0(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", o0, [
        n.title ? (_(), k("title", l0, p(n.title), 1)) : q("", !0)
      ])
    ], 8, s0))
  ], 16, r0);
}
const u0 = /* @__PURE__ */ qe(a0, [["render", c0]]);
Ri(Tb);
const d0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Pn,
    ChevronDown: e_,
    ChevronUp: o_
  },
  props: {
    /**
     * Is the list currently open (or collapsed)
     */
    open: {
      type: Boolean,
      required: !0
    },
    /**
     * Is the navigation item currently active.
     */
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["click"],
  setup() {
    return { isLegacy34: Ii };
  },
  computed: {
    labelButton() {
      return this.open ? gt("Collapse menu") : gt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function f0(e, t, n, i, a, r) {
  const s = Fe("ChevronUp"), o = Fe("ChevronDown"), l = Fe("NcButton");
  return _(), De(l, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Oe(() => [
      n.open ? (_(), De(s, {
        key: 0,
        size: 20
      })) : (_(), De(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const h0 = /* @__PURE__ */ qe(d0, [["render", f0], ["__scopeId", "data-v-cfbd3794"]]);
Ri(Ab, Nb);
const p0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Wc,
    NcActionButton: D_,
    NcAppNavigationIconCollapsible: h0,
    NcInputConfirmCancel: S_,
    NcLoadingIcon: dp,
    NcVNodes: cc,
    Pencil: i0,
    Undo: u0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: zh, default: null }
  },
  props: {
    /**
     * If you are not using vue-router you can use the property to set this item as the active navigation entry.
     * When using vue-router and the `to` property this is set automatically.
     */
    active: {
      type: Boolean,
      default: !1
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: null
    },
    /**
     * id attribute of the list item element
     */
    id: {
      type: String,
      default: () => jo(),
      validator: (e) => e.trim() !== ""
    },
    /**
     * Refers to the icon on the left, this prop accepts a class
     * like 'icon-category-enabled'.
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Displays a loading animated icon on the left of the element
     * instead of the icon.
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Passing in a route will make the root element of this
     * component a `<router-link />` that points to that route.
     * By leaving this blank, the root element will be a `<li>`.
     */
    to: {
      type: [String, Object],
      default: null
    },
    /**
     * A direct link. This will be used as the `href` attribute.
     * This will ignore any `to` prop being defined.
     */
    href: {
      type: String,
      default: null
    },
    /**
     * Gives the possibility to collapse the children elements into the
     * parent element (true) or expands the children elements (false).
     */
    allowCollapse: {
      type: Boolean,
      default: !1
    },
    /**
     * Makes the name of the item editable by providing an `ActionButton`
     * component that toggles a form
     */
    editable: {
      type: Boolean,
      default: !1
    },
    /**
     * Only for 'editable' items, sets label for the edit action button.
     */
    editLabel: {
      type: String,
      default: ""
    },
    /**
     * Only for items in 'editable' mode, sets the placeholder text for the editing form.
     */
    editPlaceholder: {
      type: String,
      default: ""
    },
    /**
     * Pins the item to the bottom left area, above the settings. Do not
     * place 'non-pinned' `AppnavigationItem` components below `pinned`
     * ones.
     */
    pinned: {
      type: Boolean,
      default: !1
    },
    /**
     * Puts the item in the 'undo' state.
     */
    undo: {
      type: Boolean,
      default: !1
    },
    /**
     * The navigation collapsible state (synced)
     */
    open: {
      type: Boolean,
      default: !1
    },
    /**
     * The actions menu open state (synced)
     */
    menuOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * The action's menu default icon
     */
    menuIcon: {
      type: String,
      default: void 0
    },
    /**
     * The action's menu direction
     */
    menuPlacement: {
      type: String,
      default: "bottom"
    },
    /**
     * Entry aria details
     */
    ariaDescription: {
      type: String,
      default: null
    },
    /**
     * To be used only when the elements in the actions menu are very important
     */
    forceDisplayActions: {
      type: Boolean,
      default: !1
    },
    /**
     * Number of action items outside the menu
     */
    inlineActions: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "update:menuOpen",
    "update:open",
    "update:name",
    "click",
    "undo"
  ],
  setup() {
    return {
      isMobile: Xr(),
      isLegacy34: Ii
    };
  },
  data() {
    return {
      actionsBoundariesElement: void 0,
      editingValue: "",
      opened: this.open,
      // Collapsible state
      editingActive: !1,
      /**
       * Tracks the open state of the actions menu
       */
      menuOpenLocalValue: !1,
      focused: !1
    };
  },
  computed: {
    isRouterLink() {
      return this.to && !this.href;
    },
    // Checks if the component is already a children of another
    // instance of AppNavigationItem
    canHaveChildren() {
      return this.$parent.$options._componentTag !== "AppNavigationItem";
    },
    editButtonAriaLabel() {
      return this.editLabel ? this.editLabel : gt("Edit item");
    },
    undoButtonAriaLabel() {
      return gt("Undo changes");
    }
  },
  watch: {
    open(e) {
      this.opened = e;
    }
  },
  mounted() {
    this.actionsBoundariesElement = document.querySelector("#content-vue") || void 0;
  },
  beforeUnmount() {
    this.releaseHighlight();
  },
  methods: {
    /** Ask the parent list to move its highlight onto this entry */
    requestHighlight() {
      this.editingActive || this.highlight?.show(this.$refs.entry);
    },
    /** Tell the parent list this entry no longer wants the highlight */
    releaseHighlight() {
      this.highlight?.hide(this.$refs.entry);
    },
    // sync opened menu state with prop
    onMenuToggle(e) {
      this.$emit("update:menuOpen", e), this.menuOpenLocalValue = e;
    },
    // toggle the collapsible state
    toggleCollapse() {
      this.opened = !this.opened, this.$emit("update:open", this.opened);
    },
    /**
     * Handle link click
     *
     * @param {PointerEvent} event - Native click event
     * @param {(event: PointerEvent) => void} [navigate] - VueRouter link's navigate if any
     * @param {string} [routerLinkHref] - VueRouter link's href
     */
    onClick(e, t, n) {
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ii("toggle-navigation", { open: !1 }));
    },
    // Edition methods
    handleEdit() {
      this.editingValue = this.name, this.editingActive = !0, this.onMenuToggle(!1), this.$nextTick(() => {
        this.$refs.editingInput.focusInput();
      });
    },
    cancelEditing() {
      this.editingActive = !1;
    },
    handleEditingDone() {
      this.$emit("update:name", this.editingValue), this.editingValue = "", this.editingActive = !1;
    },
    // Undo methods
    handleUndo() {
      this.$emit("undo");
    },
    /**
     * Show actions upon focus
     */
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.focused = !1;
    },
    /**
     * This method checks if the root element of the component is focused and
     * if that's the case it focuses the actions button if available
     *
     * @param {Event} e the keydown event
     */
    handleTab(e) {
      if (this.editingActive)
        return;
      const t = this.$el?.querySelector(".app-navigation-entry__utils");
      if (!t)
        return;
      const n = t.querySelector("button");
      this.focused && n && (e.preventDefault(), n.focus(), this.focused = !1);
    },
    /**
     * Is this an external link
     *
     * @param {string} href The link to check
     * @return {boolean} Whether it is external or not
     */
    isExternal(e) {
      return e && e.match(/[a-z]+:\/\//i);
    }
  }
}, v0 = ["id"], g0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], m0 = {
  key: 0,
  class: "editingContainer"
}, b0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, y0 = { class: "app-navigation-entry__deleted-description" }, _0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, w0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function C0(e, t, n, i, a, r) {
  const s = Fe("NcLoadingIcon"), o = Fe("NcInputConfirmCancel"), l = Fe("Pencil"), u = Fe("NcActionButton"), c = Fe("Undo"), f = Fe("NcActions"), b = Fe("NcAppNavigationIconCollapsible");
  return _(), k("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), De(Nc(r.isRouterLink ? "router-link" : "NcVNodes"), Es(Pr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Oe(({ href: C, navigate: N, isActive: S }) => [
        d("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && S || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? q("", !0) : (_(), k("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && S ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || C || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, C),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = Kt(et((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            d("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), De(s, { key: 0 })) : Le(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && S
              }, void 0, !0)
            ], 2),
            d("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (_(), k("div", m0, [
              me(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && S || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : q("", !0)
          ], 40, g0)),
          n.undo ? (_(), k("div", b0, [
            d("div", y0, p(n.name), 1)
          ])) : q("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), k("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), k("div", _0, [
              Le(e.$slots, "counter", {}, void 0, !0)
            ])) : q("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), De(f, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: a.actionsBoundariesElement,
              inline: n.inlineActions,
              placement: n.menuPlacement,
              open: n.menuOpen,
              forceMenu: n.forceMenu,
              defaultIcon: n.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: Oe(() => [
                Le(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Oe(() => [
                n.editable && !a.editingActive ? (_(), De(u, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Oe(() => [
                    me(l, { size: 20 })
                  ]),
                  default: Oe(() => [
                    xe(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : q("", !0),
                n.undo ? (_(), De(u, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Oe(() => [
                    me(c, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : q("", !0),
                Le(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : q("", !0)
          ], 2)) : q("", !0),
          n.allowCollapse && e.$slots.default ? (_(), De(b, {
            key: 3,
            active: n.to && S || n.active,
            open: a.opened,
            onClick: et(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : q("", !0),
          Le(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), k("ul", w0, [
      Le(e.$slots, "default", {}, void 0, !0)
    ])) : q("", !0)
  ], 10, v0);
}
const Bd = /* @__PURE__ */ qe(p0, [["render", C0], ["__scopeId", "data-v-01bef41b"]]), Ll = /* @__PURE__ */ new WeakMap(), S0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = fd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = fd(e, a, Object.assign({ capture: n }, r));
    }
    Ll.set(e, i);
  },
  unmounted(e) {
    const t = Ll.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ll.delete(e);
  }
}, E0 = {
  mounted(e) {
    e.focus();
  }
}, T0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", A0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", uc = "numeric", dc = "ascii", fc = "alpha", wr = "asciinumeric", ur = "alphanumeric", hc = "domain", fp = "emoji", k0 = "scheme", O0 = "slashscheme", Rl = "whitespace";
function N0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function sa(e, t, n) {
  t[uc] && (t[wr] = !0, t[ur] = !0), t[dc] && (t[wr] = !0, t[fc] = !0), t[wr] && (t[ur] = !0), t[fc] && (t[ur] = !0), t[ur] && (t[hc] = !0), t[fp] && (t[hc] = !0);
  for (const i in t) {
    const a = N0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function x0(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function en(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
en.groups = {};
en.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(e) {
    const t = this, n = t.j[e];
    if (n)
      return n;
    for (let i = 0; i < t.jr.length; i++) {
      const a = t.jr[i][0], r = t.jr[i][1];
      if (r && a.test(e))
        return r;
    }
    return t.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(e, t, n, i) {
    for (let a = 0; a < e.length; a++)
      this.tt(e[a], t, n, i);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(e, t, n, i) {
    i = i || en.groups;
    let a;
    return t && t.j ? a = t : (a = new en(t), n && i && sa(t, n, i)), this.jr.push([e, a]), a;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(e, t, n, i) {
    let a = this;
    const r = e.length;
    if (!r)
      return a;
    for (let s = 0; s < r - 1; s++)
      a = a.tt(e[s]);
    return a.tt(e[r - 1], t, n, i);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(e, t, n, i) {
    i = i || en.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new en(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new en(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(x0(s.t, i), n);
          sa(r, l, i);
        } else n && sa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Re = (e, t, n, i, a) => e.ta(t, n, i, a), rt = (e, t, n, i, a) => e.tr(t, n, i, a), Hd = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), Wn = "WORD", pc = "UWORD", hp = "ASCIINUMERICAL", pp = "ALPHANUMERICAL", jr = "LOCALHOST", vc = "TLD", gc = "UTLD", Ss = "SCHEME", Na = "SLASH_SCHEME", qc = "NUM", mc = "WS", Yc = "NL", Cr = "OPENBRACE", Sr = "CLOSEBRACE", Zs = "OPENBRACKET", Js = "CLOSEBRACKET", Qs = "OPENPAREN", eo = "CLOSEPAREN", to = "OPENANGLEBRACKET", no = "CLOSEANGLEBRACKET", io = "FULLWIDTHLEFTPAREN", ao = "FULLWIDTHRIGHTPAREN", ro = "LEFTCORNERBRACKET", so = "RIGHTCORNERBRACKET", oo = "LEFTWHITECORNERBRACKET", lo = "RIGHTWHITECORNERBRACKET", co = "FULLWIDTHLESSTHAN", uo = "FULLWIDTHGREATERTHAN", fo = "AMPERSAND", ho = "APOSTROPHE", po = "ASTERISK", Si = "AT", vo = "BACKSLASH", go = "BACKTICK", mo = "CARET", oa = "COLON", Xc = "COMMA", bo = "DOLLAR", xn = "DOT", yo = "EQUALS", Zc = "EXCLAMATION", cn = "HYPHEN", Er = "PERCENT", _o = "PIPE", wo = "PLUS", Co = "POUND", Tr = "QUERY", Jc = "QUOTE", vp = "FULLWIDTHMIDDLEDOT", Qc = "SEMI", Ln = "SLASH", Ar = "TILDE", So = "UNDERSCORE", gp = "EMOJI", Eo = "SYM";
var mp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: pp,
  AMPERSAND: fo,
  APOSTROPHE: ho,
  ASCIINUMERICAL: hp,
  ASTERISK: po,
  AT: Si,
  BACKSLASH: vo,
  BACKTICK: go,
  CARET: mo,
  CLOSEANGLEBRACKET: no,
  CLOSEBRACE: Sr,
  CLOSEBRACKET: Js,
  CLOSEPAREN: eo,
  COLON: oa,
  COMMA: Xc,
  DOLLAR: bo,
  DOT: xn,
  EMOJI: gp,
  EQUALS: yo,
  EXCLAMATION: Zc,
  FULLWIDTHGREATERTHAN: uo,
  FULLWIDTHLEFTPAREN: io,
  FULLWIDTHLESSTHAN: co,
  FULLWIDTHMIDDLEDOT: vp,
  FULLWIDTHRIGHTPAREN: ao,
  HYPHEN: cn,
  LEFTCORNERBRACKET: ro,
  LEFTWHITECORNERBRACKET: oo,
  LOCALHOST: jr,
  NL: Yc,
  NUM: qc,
  OPENANGLEBRACKET: to,
  OPENBRACE: Cr,
  OPENBRACKET: Zs,
  OPENPAREN: Qs,
  PERCENT: Er,
  PIPE: _o,
  PLUS: wo,
  POUND: Co,
  QUERY: Tr,
  QUOTE: Jc,
  RIGHTCORNERBRACKET: so,
  RIGHTWHITECORNERBRACKET: lo,
  SCHEME: Ss,
  SEMI: Qc,
  SLASH: Ln,
  SLASH_SCHEME: Na,
  SYM: Eo,
  TILDE: Ar,
  TLD: vc,
  UNDERSCORE: So,
  UTLD: gc,
  UWORD: pc,
  WORD: Wn,
  WS: mc
});
const Gn = /[a-z]/, ar = new RegExp("\\p{L}", "u"), Il = new RegExp("\\p{Emoji}", "u"), Kn = /\d/, Pl = /\s/, jd = "\r", Dl = `
`, L0 = "️", R0 = "‍", Ml = "￼";
let vs = null, gs = null;
function I0(e = []) {
  const t = {};
  en.groups = t;
  const n = new en();
  vs == null && (vs = Vd(T0)), gs == null && (gs = Vd(A0)), ne(n, "'", ho), ne(n, "{", Cr), ne(n, "}", Sr), ne(n, "[", Zs), ne(n, "]", Js), ne(n, "(", Qs), ne(n, ")", eo), ne(n, "<", to), ne(n, ">", no), ne(n, "（", io), ne(n, "）", ao), ne(n, "「", ro), ne(n, "」", so), ne(n, "『", oo), ne(n, "』", lo), ne(n, "＜", co), ne(n, "＞", uo), ne(n, "&", fo), ne(n, "*", po), ne(n, "@", Si), ne(n, "`", go), ne(n, "^", mo), ne(n, ":", oa), ne(n, ",", Xc), ne(n, "$", bo), ne(n, ".", xn), ne(n, "=", yo), ne(n, "!", Zc), ne(n, "-", cn), ne(n, "%", Er), ne(n, "|", _o), ne(n, "+", wo), ne(n, "#", Co), ne(n, "?", Tr), ne(n, '"', Jc), ne(n, "/", Ln), ne(n, ";", Qc), ne(n, "~", Ar), ne(n, "_", So), ne(n, "\\", vo), ne(n, "・", vp);
  const i = rt(n, Kn, qc, {
    [uc]: !0
  });
  rt(i, Kn, i);
  const a = rt(i, Gn, hp, {
    [wr]: !0
  }), r = rt(i, ar, pp, {
    [ur]: !0
  }), s = rt(n, Gn, Wn, {
    [dc]: !0
  });
  rt(s, Kn, a), rt(s, Gn, s), rt(a, Kn, a), rt(a, Gn, a);
  const o = rt(n, ar, pc, {
    [fc]: !0
  });
  rt(o, Gn), rt(o, Kn, r), rt(o, ar, o), rt(r, Kn, r), rt(r, Gn), rt(r, ar, r);
  const l = ne(n, Dl, Yc, {
    [Rl]: !0
  }), u = ne(n, jd, mc, {
    [Rl]: !0
  }), c = rt(n, Pl, mc, {
    [Rl]: !0
  });
  ne(n, Ml, c), ne(u, Dl, l), ne(u, Ml, c), rt(u, Pl, c), ne(c, jd), ne(c, Dl), rt(c, Pl, c), ne(c, Ml, c);
  const f = rt(n, Il, gp, {
    [fp]: !0
  });
  ne(f, "#"), rt(f, Il, f), ne(f, L0, f);
  const b = ne(f, R0);
  ne(b, "#"), rt(b, Il, f);
  const C = [[Gn, s], [Kn, a]], N = [[Gn, null], [ar, o], [Kn, r]];
  for (let S = 0; S < vs.length; S++)
    bi(n, vs[S], vc, Wn, C);
  for (let S = 0; S < gs.length; S++)
    bi(n, gs[S], gc, pc, N);
  sa(vc, {
    tld: !0,
    ascii: !0
  }, t), sa(gc, {
    utld: !0,
    alpha: !0
  }, t), bi(n, "file", Ss, Wn, C), bi(n, "mailto", Ss, Wn, C), bi(n, "http", Na, Wn, C), bi(n, "https", Na, Wn, C), bi(n, "ftp", Na, Wn, C), bi(n, "ftps", Na, Wn, C), sa(Ss, {
    scheme: !0,
    ascii: !0
  }, t), sa(Na, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((S, O) => S[0] > O[0] ? 1 : -1);
  for (let S = 0; S < e.length; S++) {
    const O = e[S][0], D = e[S][1] ? {
      [k0]: !0
    } : {
      [O0]: !0
    };
    O.indexOf("-") >= 0 ? D[hc] = !0 : Gn.test(O) ? Kn.test(O) ? D[wr] = !0 : D[dc] = !0 : D[uc] = !0, Hd(n, O, O, D);
  }
  return Hd(n, "localhost", jr, {
    ascii: !0
  }), n.jd = new en(Eo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, mp)
  };
}
function bp(e, t) {
  const n = P0(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, u = 0, c = null, f = -1, b = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (f = 0, b = 0, c = o) : f >= 0 && (f += n[s].length, b++), u += n[s].length, r += n[s].length, s++;
    r -= f, s -= b, u -= f, a.push({
      t: c.t,
      // token type/name
      v: t.slice(r - u, r),
      // string value
      s: r - u,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function P0(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function bi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new en(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new en(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Vd(e) {
  const t = [], n = [];
  let i = 0, a = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[i + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(n.join(""));
      for (let s = parseInt(e.substring(i, i + r), 10); s > 0; s--)
        n.pop();
      i += r;
    } else
      n.push(e[i]), i++;
  }
  return t;
}
const Vr = {
  defaultProtocol: "http",
  events: null,
  format: Gd,
  formatHref: Gd,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function eu(e, t = null) {
  let n = Object.assign({}, Vr);
  e && (n = Object.assign(n, e instanceof eu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
eu.prototype = {
  o: Vr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(e) {
    return e;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(e, t, n) {
    const i = t != null;
    let a = this.o[e];
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Vr[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, n) {
    let i = this.o[e];
    return typeof i == "function" && t != null && (i = i(t, n.t, n)), i;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function Gd(e) {
  return e;
}
function yp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
yp.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(e) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(e) {
    const t = this.toString(), n = e.get("truncate", t, this), i = e.get("format", t, this);
    return n && i.length > n ? i.substring(0, n) + "…" : i;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
	Returns an object  of relevant values for this token, which includes keys
	* type - Kind of token ('url', 'email', etc.)
	* value - Original text
	* href - The value that should be added to the anchor tag's href
		attribute
		@method toObject
	@param {string} [protocol] `'http'` by default
  */
  toObject(e = Vr.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(e) {
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), u = e.get("rel", n, t), c = e.getObj("attributes", n, t), f = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), u && (s.rel = u), c && Object.assign(s, c), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: f
    };
  }
};
function Wo(e, t) {
  class n extends yp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const D0 = Wo("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Kd = Wo("text"), M0 = Wo("nl"), ms = Wo("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Vr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== jr && e[1].t === oa;
  }
}), ln = (e) => new en(e);
function F0({
  groups: e
}) {
  const t = e.domain.concat([fo, po, Si, vo, go, mo, bo, yo, cn, qc, Er, _o, wo, Co, Ln, Eo, Ar, So]), n = [ho, oa, Xc, xn, Zc, Er, Tr, Jc, Qc, to, no, Cr, Sr, Js, Zs, Qs, eo, io, ao, ro, so, oo, lo, co, uo], i = [fo, ho, po, vo, go, mo, bo, yo, cn, Cr, Sr, Er, _o, wo, Co, Tr, Ln, Eo, Ar, So], a = ln(), r = ne(a, Ar);
  Re(r, i, r), Re(r, e.domain, r);
  const s = ln(), o = ln(), l = ln();
  Re(a, e.domain, s), Re(a, e.scheme, o), Re(a, e.slashscheme, l), Re(s, i, r), Re(s, e.domain, s);
  const u = ne(s, Si);
  ne(r, Si, u), ne(o, Si, u), ne(l, Si, u);
  const c = ne(r, xn);
  Re(c, i, r), Re(c, e.domain, r);
  const f = ln();
  Re(u, e.domain, f), Re(f, e.domain, f);
  const b = ne(f, xn);
  Re(b, e.domain, f);
  const C = ln(D0);
  Re(b, e.tld, C), Re(b, e.utld, C), ne(u, jr, C);
  const N = ne(f, cn);
  ne(N, cn, N), Re(N, e.domain, f), Re(C, e.domain, f), ne(C, xn, b), ne(C, cn, N);
  const S = ne(s, cn), O = ne(s, xn);
  ne(S, cn, S), Re(S, e.domain, s), Re(O, i, r), Re(O, e.domain, s);
  const I = ln(ms);
  Re(O, e.tld, I), Re(O, e.utld, I), Re(I, e.domain, s), Re(I, i, r), ne(I, xn, O), ne(I, cn, S), ne(I, Si, u);
  const D = ne(I, oa), j = ln(ms);
  Re(D, e.numeric, j);
  const F = ln(ms), le = ln();
  Re(F, t, F), Re(F, n, le), Re(le, t, F), Re(le, n, le), ne(I, Ln, F), ne(j, Ln, F);
  const ce = ne(o, oa), U = ne(l, oa), G = ne(U, Ln), X = ne(G, Ln);
  Re(o, e.domain, s), ne(o, xn, O), ne(o, cn, S), Re(l, e.domain, s), ne(l, xn, O), ne(l, cn, S), Re(ce, e.domain, F), ne(ce, Ln, F), ne(ce, Tr, F), Re(X, e.domain, F), Re(X, t, F), ne(X, Ln, F);
  const re = [
    [Cr, Sr],
    // {}
    [Zs, Js],
    // []
    [Qs, eo],
    // ()
    [to, no],
    // <>
    [io, ao],
    // （）
    [ro, so],
    // 「」
    [oo, lo],
    // 『』
    [co, uo]
    // ＜＞
  ];
  for (let ue = 0; ue < re.length; ue++) {
    const [te, ie] = re[ue], P = ne(F, te);
    ne(le, te, P);
    const M = ln(ms);
    Re(P, t, M);
    const Y = ln();
    Re(P, n, Y), ne(P, ie, F), Re(M, t, M), Re(M, n, Y), Re(Y, t, M), Re(Y, n, Y), ne(M, ie, F), ne(Y, ie, F);
  }
  return ne(a, jr, I), ne(a, Yc, M0), {
    start: a,
    tokens: mp
  };
}
function $0(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, u = null, c = 0, f = null, b = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (u = l || o.go(n[a].t)); )
      l = null, o = u, o.accepts() ? (b = 0, f = o) : b >= 0 && b++, a++, c++;
    if (b < 0)
      a -= c, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(Fl(Kd, t, s)), s = []), a -= b, c -= b;
      const C = f.t, N = n.slice(a - c, a);
      r.push(Fl(C, t, N));
    }
  }
  return s.length > 0 && r.push(Fl(Kd, t, s)), r;
}
function Fl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const kt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function z0() {
  kt.scanner = I0(kt.customSchemes);
  for (let e = 0; e < kt.tokenQueue.length; e++)
    kt.tokenQueue[e][1]({
      scanner: kt.scanner
    });
  kt.parser = F0(kt.scanner.tokens);
  for (let e = 0; e < kt.pluginQueue.length; e++)
    kt.pluginQueue[e][1]({
      scanner: kt.scanner,
      parser: kt.parser
    });
  return kt.initialized = !0, kt;
}
function _p(e) {
  return kt.initialized || z0(), $0(kt.parser.start, e, bp(kt.scanner.start, e));
}
_p.scan = bp;
function U0(e) {
  const t = new eu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, j0), n = _p(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(zs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function B0(e) {
  return e.replace(/"/g, "&quot;");
}
function H0(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${B0(i)}"`);
  }
  return t.join(" ");
}
function j0({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${H0(t)}>${zs(n)}</${e}>`;
}
const V0 = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = U0(t.text));
}, G0 = ["title"], K0 = /* @__PURE__ */ St({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Nt("NcAppSidebar:header:ref");
    return (n, i) => nt((_(), k("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      xe(p(e.name), 1)
    ], 8, G0)), [
      [m(V0), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), W0 = ["aria-labelledby"], q0 = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Y0 = ["id"], X0 = {
  key: 2,
  class: "empty-content__description"
}, Z0 = {
  key: 3,
  class: "empty-content__action"
}, J0 = /* @__PURE__ */ St({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = jo();
    return (n, i) => (_(), k("div", {
      "aria-labelledby": m(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), k("div", q0, [
        Le(n.$slots, "icon", {}, void 0, !0)
      ])) : q("", !0),
      e.name !== "" || n.$slots.name ? (_(), k("div", {
        key: 1,
        id: m(t),
        class: "empty-content__name"
      }, [
        Le(n.$slots, "name", {}, () => [
          xe(p(e.name), 1)
        ], !0)
      ], 8, Y0)) : q("", !0),
      e.description !== "" || n.$slots.description ? (_(), k("p", X0, [
        Le(n.$slots, "description", {}, () => [
          xe(p(e.description), 1)
        ], !0)
      ])) : q("", !0),
      n.$slots.action ? (_(), k("div", Z0, [
        Le(n.$slots, "action", {}, void 0, !0)
      ])) : q("", !0)
    ], 8, W0));
  }
}), Q0 = /* @__PURE__ */ qe(J0, [["__scopeId", "data-v-8609a4c1"]]), ew = {
  name: "DockRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, tw = ["aria-hidden", "aria-label"], nw = ["fill", "width", "height"], iw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, aw = { key: 0 };
function rw(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", iw, [
        n.title ? (_(), k("title", aw, p(n.title), 1)) : q("", !0)
      ])
    ], 8, nw))
  ], 16, tw);
}
const sw = /* @__PURE__ */ qe(ew, [["render", rw]]), ow = {
  name: "StarIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, lw = ["aria-hidden", "aria-label"], cw = ["fill", "width", "height"], uw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, dw = { key: 0 };
function fw(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", uw, [
        n.title ? (_(), k("title", dw, p(n.title), 1)) : q("", !0)
      ])
    ], 8, cw))
  ], 16, lw);
}
const hw = /* @__PURE__ */ qe(ow, [["render", fw]]), pw = {
  name: "StarOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}, vw = ["aria-hidden", "aria-label"], gw = ["fill", "width", "height"], mw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, bw = { key: 0 };
function yw(e, t, n, i, a, r) {
  return _(), k("span", It(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), k("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      d("path", mw, [
        n.title ? (_(), k("title", bw, p(n.title), 1)) : q("", !0)
      ])
    ], 8, gw))
  ], 16, vw);
}
const _w = /* @__PURE__ */ qe(pw, [["render", yw]]), ww = ["aria-selected", "tabindex"], Cw = /* @__PURE__ */ St({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Uv({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Hf(e, "selected"), n = /* @__PURE__ */ ut(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (_(), k("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: m(Ii),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      d("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        d("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          me(cc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Oe(() => [
              d("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        d("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          me(cc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Oe(() => [
              d("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      d("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, ww));
  }
}), Sw = "_sidebarTabsButton_q3kBA", Ew = "_sidebarTabsButton_legacy_KQ4d1", Tw = "_sidebarTabsButton_selected_Pjayf", Aw = "_sidebarTabsButton_animatedHighlight_uvp-0", kw = "_sidebarTabsButton__name_rlQsL", Ow = "_sidebarTabsButton__icon_QzZg4", Nw = "_sidebarTabsButton__iconLayer_ZkZan", xw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Lw = "_sidebarTabsButton__icon_pop_IA0By", Rw = "_sidebarTabsButton__legacyIcon_QhcNW", Iw = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Sw,
  sidebarTabsButton_legacy: Ew,
  sidebarTabsButton_selected: Tw,
  sidebarTabsButton_animatedHighlight: Aw,
  sidebarTabsButton__name: kw,
  sidebarTabsButton__icon: Ow,
  sidebarTabsButton__iconLayer: Nw,
  sidebarTabsButton__iconLayer_hidden: xw,
  sidebarTabsButton__icon_pop: Lw,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: Rw
}, Pw = {
  $style: Iw
}, Dw = /* @__PURE__ */ qe(Cw, [["__cssModules", Pw]]), Mw = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: Dw
  },
  provide() {
    return {
      registerTab: this.registerTab,
      unregisterTab: this.unregisterTab,
      // Getter as an alternative to Vue 2.7 computed(() => this.activeTab)
      getActiveTab: () => this.activeTab,
      // Used to check whether the tab header is shown so the tabs can reference the tab header for `aria-labelledby` or not
      isTablistShown: () => this.hasMultipleTabs
    };
  },
  props: {
    /**
     * Id of the tab to activate
     */
    active: {
      type: String,
      default: ""
    },
    /**
     * Force the tab navigation to display even if there is only one tab
     */
    forceTabs: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:active"],
  data(e) {
    return {
      /**
       * Tab descriptions from the passed NcSidebarTab components' props to build the tab navbar from.
       */
      tabs: [],
      /**
       * Local active (open) tab's ID. It allows to use component without v-model:active
       */
      activeTab: e.active,
      isLegacy34: Ii,
      /** Whether the sliding highlight runs (JS mounted, non-legacy design) */
      highlightEnabled: !1,
      /** Whether the highlight is currently shown */
      highlightVisible: !1,
      /** Whether position changes should transition (slide) or snap */
      highlightAnimated: !1,
      /** Whether the highlight sits on the active tab (turns transparent) */
      highlightOverActive: !1,
      /** Highlight geometry inside the tablist, in pixels */
      highlightLeft: 0,
      highlightTop: 0,
      highlightWidth: 0,
      highlightHeight: 0
    };
  },
  computed: {
    /**
     * Has multiple tabs. If only one tab - its content is shown without navigation
     *
     * @return {boolean}
     */
    hasMultipleTabs() {
      return this.tabs.length > 1;
    },
    showForSingleTab() {
      return this.forceTabs && this.tabs.length === 1;
    },
    currentTabIndex() {
      return this.tabs.findIndex((e) => e.id === this.activeTab);
    },
    highlightStyle() {
      return {
        transform: `translate(${this.highlightLeft}px, ${this.highlightTop}px)`,
        width: `${this.highlightWidth}px`,
        height: `${this.highlightHeight}px`
      };
    }
  },
  watch: {
    tabs() {
      this.active && this.updateActive();
    },
    active(e) {
      e !== this.activeTab && this.updateActive();
    }
  },
  mounted() {
    this.highlightedButton = null, this.highlightEnabled = !this.isLegacy34;
  },
  methods: {
    /**
     * Set the current active tab
     *
     * @param {string} id the id of the tab
     */
    setActive(e) {
      this.activeTab = e, this.$emit("update:active", this.activeTab);
    },
    /**
     * Focus the previous tab
     * and emit to the parent component
     */
    focusPreviousTab() {
      this.currentTabIndex > 0 && this.setActive(this.tabs[this.currentTabIndex - 1].id), this.focusActiveTab();
    },
    /**
     * Focus the next tab
     * and emit to the parent component
     */
    focusNextTab() {
      this.currentTabIndex < this.tabs.length - 1 && this.setActive(this.tabs[this.currentTabIndex + 1].id), this.focusActiveTab();
    },
    /**
     * Focus the first tab
     * and emit to the parent component
     */
    focusFirstTab() {
      this.setActive(this.tabs[0].id), this.focusActiveTab();
    },
    /**
     * Focus the last tab
     * and emit to the parent component
     */
    focusLastTab() {
      this.setActive(this.tabs[this.tabs.length - 1].id), this.focusActiveTab();
    },
    /**
     * Focus the current active tab
     */
    focusActiveTab() {
      this.$el.querySelector(`#tab-button-${this.activeTab}`).focus();
    },
    /**
     * Focus the content on tab
     * see aria accessibility guidelines
     */
    focusActiveTabContent() {
      this.$el.querySelector("#tab-" + this.activeTab).focus();
    },
    /**
     * Update the current active tab
     */
    updateActive() {
      this.activeTab = this.active && this.tabs.some(({ id: e }) => e === this.active) ? this.active : this.tabs[0]?.id ?? "";
    },
    /**
     * Register child tab in the tabs
     *
     * @param {object} tab child tab passed to slot
     */
    registerTab(e) {
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Hm()]) : t.order - n.order), this.updateActive();
    },
    /**
     * Unregister child tab from the tabs
     *
     * @param {string} id tab's id
     */
    unregisterTab(e) {
      const t = this.tabs.findIndex((n) => n.id === e);
      t !== -1 && this.tabs.splice(t, 1), this.activeTab === e && this.updateActive();
    },
    /**
     * Move the sliding highlight onto a tab button. It slides there if
     * already visible, otherwise it snaps into place so it does not slide in
     * from a previously hovered tab. Over the active tab it turns transparent
     * so the active tab keeps its own static background.
     *
     * @param {HTMLElement} button the tab button element to cover
     */
    showHighlightOn(e) {
      const t = e.getBoundingClientRect(), n = this.$refs.nav.getBoundingClientRect(), i = this.highlightVisible;
      this.highlightAnimated = i, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - n.left, this.highlightTop = t.top - n.top, this.highlightWidth = t.width, this.highlightHeight = t.height, i || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
        this.highlightAnimated = !0;
      })));
    },
    /** Hide the sliding highlight */
    hideHighlight() {
      this.highlightVisible = !1, this.highlightedButton = null;
    },
    /**
     * Move the highlight to the tab button under the pointer or focus
     *
     * @param {Event} event the pointer or focus event
     */
    handleHighlight(e) {
      if (!this.highlightEnabled)
        return;
      const t = e.target?.closest?.(".app-sidebar-tabs__tab");
      !t || t === this.highlightedButton || !this.$refs.nav.contains(t) || (this.highlightedButton = t, this.showHighlightOn(t));
    },
    /**
     * Hide the highlight once focus leaves the tablist entirely
     *
     * @param {FocusEvent} event the focusout event
     */
    onHighlightFocusOut(e) {
      this.highlightEnabled && !this.$refs.nav.contains(e.relatedTarget) && this.hideHighlight();
    }
  }
}, Fw = { class: "app-sidebar-tabs" };
function $w(e, t, n, i, a, r) {
  const s = Fe("NcAppSidebarTabsButton");
  return _(), k("div", Fw, [
    r.hasMultipleTabs || r.showForSingleTab ? (_(), k("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Kt(et((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Kt(et((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Kt(et((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Kt(et((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Kt(et((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Kt(et((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Kt(et((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (_(), k("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: nn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : q("", !0),
      (_(!0), k(ve, null, Be(a.tabs, (o) => (_(), De(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : q("", !0),
    d("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Le(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const zw = /* @__PURE__ */ qe(Mw, [["render", $w], ["__scopeId", "data-v-74190d2a"]]);
Ri(Sb);
const Uw = {
  name: "NcAppSidebar",
  components: {
    NcActions: Wc,
    NcAppSidebarHeader: K0,
    NcAppSidebarTabs: zw,
    NcButton: Pn,
    NcLoadingIcon: dp,
    NcEmptyContent: Q0,
    IconArrowRight: jh,
    IconClose: Vh,
    IconDockRight: sw,
    IconStar: hw,
    IconStarOutline: _w
  },
  directives: {
    Focus: E0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: S0
  },
  inject: {
    ncContentSelector: {
      from: Hh,
      default: void 0
    }
  },
  props: {
    /**
     * The active tab
     */
    active: {
      type: String,
      default: ""
    },
    /**
     * Main text of the sidebar
     */
    name: {
      type: String,
      required: !0
    },
    /**
     * Allow to edit the sidebar name.
     */
    nameEditable: {
      type: Boolean,
      default: !1
    },
    /**
     * Placeholder in the edit field if the name is editable.
     */
    namePlaceholder: {
      type: String,
      default: ""
    },
    /**
     * Secondary name of the sidebar (subline)
     */
    subname: {
      type: String,
      default: ""
    },
    /**
     * Title to display for the subname.
     */
    subtitle: {
      type: String,
      default: ""
    },
    /**
     * Url to the top header background image
     * Applied with css
     */
    background: {
      type: String,
      default: ""
    },
    /**
     * Enable the favourite icon if not null
     * See fired events
     */
    starred: {
      type: Boolean,
      default: null
    },
    /**
     * Show loading spinner instead of the star icon
     */
    starLoading: {
      type: Boolean,
      default: !1
    },
    /**
     * Show loading spinner instead of tabs
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Display the sidebar in compact mode
     */
    compact: {
      type: Boolean,
      default: !1
    },
    /**
     * Only display close button and default slot content.
     * Don't display other header content and primary and secondary actions.
     * Useful when showing the EmptyContent component as content.
     */
    empty: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: !1
    },
    /**
     * Force the tab navigation to display even if there is only one tab
     */
    forceTabs: {
      type: Boolean,
      default: !1
    },
    /**
     * Linkify the name
     */
    linkifyName: {
      type: Boolean,
      default: !1
    },
    /**
     * Title to display for the name.
     * Can be set to the same text in case it's too long.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Allow to conditionally show the sidebar
     * You can also use `v-if` on the sidebar, but using the open prop allow to keep
     * the sidebar inside the DOM for performance if it is opened and closed multiple times.
     *
     * When using the `open` property to close the sidebar a built-in toggle button will be shown to reopen it,
     * similar to the app navigation. You can remove this button with the `no-toggle` prop.
     */
    open: {
      type: Boolean,
      default: !0
    },
    /**
     * Custom classes to assign to the sidebar toggle button.
     * If needed this can be used to assign styles to the button using `:deep()` selector.
     */
    toggleClasses: {
      type: [String, Array, Object],
      default: ""
    },
    /**
     * Custom attrs to assign to the sidebar toggle button.
     */
    toggleAttrs: {
      type: Object,
      default: void 0
    },
    /**
     * Do not add the built-in toggle button with `open` prop.
     */
    noToggle: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "close",
    "closed",
    "opened",
    // 'figureClick', not emitted on purpose to make "hasFigureClickListener" work
    "update:active",
    "update:name",
    "update:nameEditable",
    "update:open",
    "update:starred",
    "submitName",
    "dismissEditing"
  ],
  setup() {
    const e = /* @__PURE__ */ ut(null);
    return un("NcAppSidebar:header:ref", e), {
      uid: jo(),
      isMobile: mb(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: gt("Change name"),
      closeTranslated: gt("Close sidebar"),
      favoriteTranslated: gt("Favorite"),
      isStarred: this.starred,
      focusTrap: null,
      elementToReturnFocus: null
    };
  },
  computed: {
    canStar() {
      return this.isStarred !== null;
    },
    hasFigureClickListener() {
      return !!this.$attrs.onFigureClick;
    }
  },
  watch: {
    starred() {
      this.isStarred = this.starred;
    },
    isMobile() {
      this.toggleFocusTrap();
    },
    open() {
      this.checkToggleButtonContainerAvailability();
    }
  },
  created() {
    this.preserveElementToReturnFocus(), this.checkToggleButtonContainerAvailability();
  },
  beforeUnmount() {
    this.$emit("closed"), this.focusTrap?.deactivate();
  },
  methods: {
    isSlotPopulated: Kc,
    t: gt,
    preserveElementToReturnFocus() {
      if (document.activeElement && document.activeElement !== document.body && (this.elementToReturnFocus = document.activeElement, this.elementToReturnFocus.getAttribute("role") === "menuitem")) {
        const e = this.elementToReturnFocus.closest('[role="menu"]');
        if (e) {
          const t = document.querySelector(`[aria-controls="${e.id}"]`);
          this.elementToReturnFocus = t;
        }
      }
    },
    initFocusTrap() {
      this.focusTrap || (this.focusTrap = zc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: $r(),
        escapeDeactivates: !1
      }));
    },
    /**
     * Activate focus trap if it is currently needed, otherwise deactivate
     */
    toggleFocusTrap() {
      this.open && this.isMobile ? (this.initFocusTrap(), this.focusTrap.activate()) : this.focusTrap?.deactivate();
    },
    /**
     * Close the sidebar on pressing the escape key on mobile
     *
     * @param {KeyboardEvent} event key down event
     */
    onKeydownEsc(e) {
      this.isMobile && (e.stopPropagation(), this.closeSidebar());
    },
    onAfterEnter(e) {
      this.elementToReturnFocus && this.focus(), this.toggleFocusTrap(), this.$emit("opened", e);
    },
    onAfterLeave(e) {
      this.$emit("closed", e), this.toggleFocusTrap(), this.elementToReturnFocus?.focus({ focusVisible: !0 }), this.elementToReturnFocus = null;
    },
    /**
     * Used to tell parent component the user asked to close the sidebar
     *
     * @param {Event} e close icon click event
     */
    closeSidebar(e) {
      this.$emit("close", e), this.$emit("update:open", !1);
    },
    /**
     * Emit figure click event to parent component
     *
     * @param {Event} e click event
     */
    onFigureClick(e) {
      this.$emit("figureClick", e);
    },
    /**
     * Toggle the favourite state
     * and emit to the parent component
     */
    toggleStarred() {
      this.isStarred = !this.isStarred, this.$emit("update:starred", this.isStarred);
    },
    async editName() {
      this.$emit("update:nameEditable", !0), this.nameEditable && (await this.$nextTick(), this.$refs.nameInput.focus());
    },
    /**
     * Focus the sidebar
     *
     * @public
     */
    focus() {
      if (!this.open && !this.noToggle) {
        this.$refs.toggle.$el.focus();
        return;
      }
      try {
        this.headerRef.focus();
      } catch {
      }
    },
    /**
     * Focus the active tab
     *
     * @public
     */
    focusActiveTabContent() {
      this.preserveElementToReturnFocus(), this.$refs.tabs.focusActiveTabContent();
    },
    /**
     * Check if the toggle button container is available
     */
    checkToggleButtonContainerAvailability() {
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ua.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
    },
    /**
     * Emit name change event to parent component
     *
     * @param {Event} event input event
     */
    onNameInput(e) {
      this.$emit("update:name", e.target.value);
    },
    /**
     * Emit when the name form edit confirm button is pressed in order
     * to change the name.
     *
     * @param {Event} event submit event
     */
    onSubmitName(e) {
      this.$emit("update:nameEditable", !1), this.$emit("submitName", e);
    },
    onDismissEditing() {
      this.$emit("update:nameEditable", !1), this.$emit("dismissEditing");
    },
    onUpdateActive(e) {
      this.$emit("update:active", e);
    }
  }
}, Bw = ["aria-labelledby"], Hw = { class: "app-sidebar-header__info" }, jw = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Vw = { class: "app-sidebar-header__name-container" }, Gw = { class: "app-sidebar-header__mainname-container" }, Kw = ["placeholder", "value"], Ww = ["title"], qw = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Yw(e, t, n, i, a, r) {
  const s = Fe("IconDockRight"), o = Fe("NcButton"), l = Fe("NcLoadingIcon"), u = Fe("IconStar"), c = Fe("IconStarOutline"), f = Fe("NcAppSidebarHeader"), b = Fe("IconArrowRight"), C = Fe("NcActions"), N = Fe("IconClose"), S = Fe("NcAppSidebarTabs"), O = Fe("NcEmptyContent"), I = du("focus"), D = du("click-outside");
  return _(), De(kg, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Oe(() => [
      nt(d("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Kt((...j) => r.onKeydownEsc && r.onKeydownEsc(...j), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), De(Af, {
          key: 0,
          to: r.ncContentSelector
        }, [
          me(o, It({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (j) => e.$emit("update:open", !0))
          }), {
            icon: Oe(() => [
              Le(e.$slots, "toggle-icon", {}, () => [
                me(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : q("", !0),
        d("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), De(f, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Le(e.$slots, "info", { key: 0 }, () => [
            d("div", Hw, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), k("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: nn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...j) => r.onFigureClick && r.onFigureClick(...j)),
                onKeydown: t[2] || (t[2] = Kt((...j) => r.onFigureClick && r.onFigureClick(...j), ["enter"]))
              }, [
                Le(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : q("", !0),
              d("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), k("div", jw, [
                  Le(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), De(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: et(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Oe(() => [
                        n.starLoading ? (_(), De(l, { key: 0 })) : a.isStarred ? (_(), De(u, {
                          key: 1,
                          size: 20
                        })) : (_(), De(c, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : q("", !0)
                  ], !0)
                ])) : q("", !0),
                d("div", Vw, [
                  d("div", Gw, [
                    nt(me(f, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: et(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Pa, !n.nameEditable]
                    ]),
                    n.nameEditable ? nt((_(), k("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = et((...j) => r.onSubmitName && r.onSubmitName(...j), ["prevent"]))
                    }, [
                      nt(d("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Kt(et((...j) => r.onDismissEditing && r.onDismissEditing(...j), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...j) => r.onNameInput && r.onNameInput(...j))
                      }, null, 40, Kw), [
                        [I]
                      ]),
                      me(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Oe(() => [
                          me(b, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [D, () => r.onSubmitName()]
                    ]) : q("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), De(C, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Oe(() => [
                        Le(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : q("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), k("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Le(e.$slots, "subname", {}, () => [
                      xe(p(n.subname), 1)
                    ], !0)
                  ], 8, Ww)) : q("", !0)
                ])
              ], 2)
            ])
          ], !0),
          me(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: et(r.closeSidebar, ["prevent"])
          }, {
            icon: Oe(() => [
              me(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), k("div", qw, [
            Le(e.$slots, "description", {}, void 0, !0)
          ])) : q("", !0)
        ], 2),
        nt(me(S, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Oe(() => [
            Le(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Pa, !n.loading]
        ]),
        n.loading ? (_(), De(O, { key: 1 }, {
          icon: Oe(() => [
            me(l, { size: 64 })
          ]),
          _: 1
        })) : q("", !0)
      ], 40, Bw), [
        [Pa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const Xw = /* @__PURE__ */ qe(Uw, [["render", Yw], ["__scopeId", "data-v-c2c6820b"]]), Zw = {
  name: "NcActionLink",
  mixins: [Kh],
  inject: {
    isInSemanticMenu: {
      from: Uc,
      default: !1
    }
  },
  props: {
    /**
     * destionation to link to
     */
    href: {
      type: String,
      required: !0,
      validator: (e) => {
        try {
          return new URL(e);
        } catch {
          return e.startsWith("#") || e.startsWith("/");
        }
      }
    },
    /**
     * download the link instead of opening
     */
    download: {
      type: String,
      default: null
    },
    /**
     * target to open the link
     */
    target: {
      type: String,
      default: "_self",
      validator: (e) => e && (!e.startsWith("_") || ["_blank", "_self", "_parent", "_top"].indexOf(e) > -1)
    },
    /**
     * Declares a native tooltip when not null
     */
    title: {
      type: String,
      default: null
    }
  }
}, Jw = ["role"], Qw = ["download", "href", "aria-label", "target", "title", "role"], eC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, tC = { class: "action-link__name" }, nC = ["textContent"], iC = ["textContent"], aC = {
  key: 2,
  class: "action-link__text"
};
function rC(e, t, n, i, a, r) {
  return _(), k("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    d("a", {
      download: n.download,
      href: n.href,
      "aria-label": e.ariaLabel,
      target: n.target,
      title: n.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      Le(e.$slots, "icon", {}, () => [
        d("span", {
          "aria-hidden": "true",
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: nn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), k("span", eC, [
        d("strong", tC, p(e.name), 1),
        t[1] || (t[1] = d("br", null, null, -1)),
        d("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, nC)
      ])) : e.isLongText ? (_(), k("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, iC)) : (_(), k("span", aC, p(e.text), 1)),
      q("", !0)
    ], 8, Qw)
  ], 8, Jw);
}
const $l = /* @__PURE__ */ qe(Zw, [["render", rC], ["__scopeId", "data-v-32f01b7a"]]);
Ri(Ob);
const sC = `<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<svg width="395" height="314" viewBox="0 0 395 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="395" height="314" rx="11" fill="#439DCD"/>
<rect x="13" y="51" width="366" height="248" rx="8" fill="white"/>
<rect x="22" y="111" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="127" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="63" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="191" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="143" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="79" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="159" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="95" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="175" width="92" height="12" rx="6" fill="#DEDEDE"/>
<path d="M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z" fill="#DEDEDE"/>
<path d="M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z" fill="white"/>
<rect x="79" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="99" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="119" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="139" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="159" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="179" y="20" width="8" height="8" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z" fill="black" fill-opacity="0.35"/>
</svg>
`, oC = `<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<svg width="395" height="314" viewBox="0 0 395 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="395" height="314" rx="11" fill="#439DCD"/>
<rect x="13" y="51" width="366" height="248" rx="8" fill="white"/>
<rect x="22" y="111" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="127" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="63" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="191" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="143" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="79" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="159" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="95" width="92" height="12" rx="6" fill="#DEDEDE"/>
<rect x="22" y="175" width="92" height="12" rx="6" fill="#DEDEDE"/>
<path d="M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z" fill="#DEDEDE"/>
<path d="M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z" fill="white"/>
<rect x="79" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="99" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="119" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="139" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="159" y="20" width="8" height="8" rx="4" fill="white"/>
<rect x="179" y="20" width="8" height="8" rx="4" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z" fill="black" fill-opacity="0.35"/>
</svg>
`, lC = { class: "vue-skip-actions__container" }, cC = { class: "vue-skip-actions__headline" }, uC = { class: "vue-skip-actions__buttons" }, dC = /* @__PURE__ */ St({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    un(Bh, o), un(Hh, "#content-vue"), un("appName", ee(() => t.appName));
    const n = Xr(), i = /* @__PURE__ */ ut(!1), a = /* @__PURE__ */ ut(), r = ee(() => a.value === "navigation" ? oC : sC);
    Pf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      ii("toggle-navigation", { open: !0 }), ti(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, u) => (_(), k("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": m(Ii) }]])
    }, [
      (_(), De(Af, { to: "#skip-actions" }, [
        d("div", lC, [
          d("div", cC, p(m(gt)("Keyboard navigation help")), 1),
          d("div", uC, [
            nt(me(Pn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: et(s, ["prevent"]),
              onFocusin: u[0] || (u[0] = (c) => a.value = "navigation"),
              onMouseover: u[1] || (u[1] = (c) => a.value = "navigation")
            }, {
              default: Oe(() => [
                xe(p(m(gt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Pa, i.value]
            ]),
            me(Pn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: u[2] || (u[2] = (c) => a.value = "content"),
              onMouseover: u[3] || (u[3] = (c) => a.value = "content")
            }, {
              default: Oe(() => [
                xe(p(m(gt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          nt(me(Ho, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Pa, !m(n)]
          ])
        ])
      ])),
      Le(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fC = /* @__PURE__ */ qe(dC, [["__scopeId", "data-v-d13dcb98"]]), hC = ["href"], pC = ["lang", "dir"], vC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, gC = { class: "library-review-header" }, mC = { class: "library-muted library-catalogue-eyebrow" }, bC = { id: "library-review-heading" }, yC = ["aria-label"], _C = ["href", "aria-current"], wC = ["aria-label"], CC = ["name", "value"], SC = {
  type: "submit",
  class: "button secondary"
}, EC = ["aria-busy"], TC = { key: 0 }, AC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, kC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, OC = { class: "library-metadata-review-workbench-copy" }, NC = { class: "library-muted library-catalogue-eyebrow" }, xC = ["title"], LC = {
  key: 0,
  class: "library-metadata-review-card"
}, RC = {
  class: "library-bidi-human",
  dir: "auto"
}, IC = { class: "library-muted" }, PC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, DC = { class: "library-metadata-review-fields" }, MC = {
  class: "library-bidi-human",
  dir: "auto"
}, FC = {
  class: "library-bidi-human",
  dir: "auto"
}, $C = {
  class: "library-bidi-human",
  dir: "auto"
}, zC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, UC = {
  class: "library-bidi-human",
  dir: "auto"
}, BC = {
  class: "library-bidi-human",
  dir: "auto"
}, HC = ["action"], jC = ["value"], VC = ["value"], GC = {
  type: "submit",
  class: "button secondary"
}, KC = { class: "library-metadata-review-actions" }, WC = ["href"], qC = ["href"], YC = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, XC = ["href"], ZC = ["aria-label"], JC = ["onClick"], QC = {
  class: "library-bidi-human",
  dir: "auto"
}, eS = {
  key: 0,
  class: "library-muted"
}, tS = {
  class: "library-bidi-human",
  dir: "auto"
}, nS = {
  key: 1,
  class: "library-scan-error"
}, iS = {
  class: "library-bidi-human",
  dir: "auto"
}, aS = ["onClick"], rS = ["href"], sS = ["aria-label"], oS = ["href"], lS = {
  key: 1,
  class: "library-muted"
}, cS = { key: 0 }, uS = ["href"], dS = {
  key: 3,
  class: "library-muted"
}, fS = {
  key: 1,
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, hS = ["aria-label"], pS = ["aria-label"], vS = ["name", "value"], gS = { class: "library-quick-search-row" }, mS = ["title"], bS = ["placeholder"], yS = ["aria-label"], _S = { "data-library-control": "sort" }, wS = { value: "title" }, CS = { value: "recent" }, SS = { value: "publicationDate" }, ES = { value: "publication" }, TS = { value: "lastOpened" }, AS = { value: "format" }, kS = ["aria-label"], OS = ["aria-pressed"], NS = ["aria-pressed"], xS = ["aria-pressed"], LS = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, RS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, IS = { class: "library-workspace-panel-title" }, PS = { class: "library-workspace-panel-purpose" }, DS = { class: "library-workspace-scope-badge" }, MS = ["aria-label"], FS = { value: "" }, $S = ["value"], zS = { value: "" }, US = ["value"], BS = { value: "" }, HS = ["value"], jS = ["title"], VS = { value: "" }, GS = ["value"], KS = ["placeholder"], WS = { value: "" }, qS = ["value"], YS = { value: "" }, XS = ["value"], ZS = { value: "" }, JS = ["value"], QS = { value: "" }, eE = ["value"], tE = { value: "" }, nE = ["value"], iE = { value: "" }, aE = ["value"], rE = { value: "" }, sE = { value: "1" }, oE = {
  type: "submit",
  class: "button primary"
}, lE = {
  href: "?",
  class: "button secondary"
}, cE = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts",
  "data-workspace-panel": "browse"
}, uE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, dE = { class: "library-workspace-panel-title" }, fE = { class: "library-workspace-panel-purpose" }, hE = { class: "library-workspace-scope-badge" }, pE = ["aria-label"], vE = ["href", "title"], gE = { class: "library-useful-view-count" }, mE = { class: "library-shortcut-selectors" }, bE = ["title"], yE = { value: "" }, _E = ["value"], wE = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, CE = { value: "" }, SE = ["value"], EE = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, TE = { value: "" }, AE = ["value"], kE = { class: "library-saved-collections" }, OE = ["title"], NE = ["action", "title"], xE = ["value"], LE = ["value"], RE = ["placeholder", "disabled"], IE = ["disabled", "title"], PE = ["aria-label"], DE = ["href"], ME = ["action"], FE = ["value"], $E = {
  type: "submit",
  class: "button tertiary"
}, zE = ["aria-label"], UE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, BE = ["title"], HE = { class: "library-workspace-panel-purpose" }, jE = { class: "library-workspace-scope-badge" }, VE = { "aria-live": "polite" }, GE = ["action"], KE = ["value"], WE = ["placeholder"], qE = ["title"], YE = ["action"], XE = ["value"], ZE = ["placeholder"], JE = ["title"], QE = ["action"], eT = ["value"], tT = ["name", "value"], nT = ["title"], iT = ["action"], aT = ["value"], rT = ["name", "value"], sT = { name: "bulkEditField" }, oT = { value: "publicationType" }, lT = { value: "subtitle" }, cT = { value: "creators" }, uT = { value: "publication" }, dT = { value: "publicationDate" }, fT = { value: "language" }, hT = { value: "publisher" }, pT = { value: "genres" }, vT = { value: "classifications" }, gT = ["placeholder"], mT = ["title"], bT = ["action"], yT = ["value"], _T = ["name", "value"], wT = ["title"], CT = { class: "library-catalogue-header" }, ST = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, ET = { id: "library-catalogue-heading" }, TT = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, AT = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, kT = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, OT = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, NT = { class: "library-muted library-catalogue-eyebrow" }, xT = ["title"], LT = ["aria-label"], RT = { key: 0 }, IT = { key: 1 }, PT = { key: 2 }, DT = ["aria-label"], MT = { key: 0 }, FT = { key: 1 }, $T = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, zT = { class: "library-muted library-catalogue-eyebrow" }, UT = ["title"], BT = ["aria-label"], HT = ["href"], jT = {
  key: 0,
  class: "library-notice"
}, VT = { class: "library-publication-issue-label" }, GT = ["href"], KT = { class: "library-muted" }, WT = {
  key: 1,
  class: "library-publication-unknown-issues"
}, qT = ["title"], YT = ["href"], XT = { class: "library-catalogue-status-row" }, ZT = { class: "library-muted library-filter-result-summary" }, JT = { key: 0 }, QT = { href: "?" }, eA = ["aria-label"], tA = { class: "library-pagination-range" }, nA = { key: 0 }, iA = ["href"], aA = {
  key: 1,
  class: "library-muted"
}, rA = ["href"], sA = {
  key: 3,
  class: "library-muted"
}, oA = ["aria-label"], lA = ["href", "aria-label"], cA = ["title"], uA = { class: "library-empty-actions" }, dA = ["href"], fA = { class: "library-muted" }, hA = ["title"], pA = { class: "library-empty-actions" }, vA = ["href"], gA = ["title"], mA = { class: "library-empty-actions" }, bA = ["href"], yA = {
  href: "?",
  class: "button primary"
}, _A = ["title"], wA = { class: "library-empty-actions" }, CA = ["href"], SA = {
  key: 6,
  class: "library-select-visible"
}, EA = ["checked"], TA = { class: "library-item-selection" }, AA = ["checked", "aria-label", "onChange"], kA = ["aria-labelledby", "onClick"], OA = ["id"], NA = { class: "library-cover-frame" }, xA = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, LA = ["src", "onLoad", "onError"], RA = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, IA = ["action", "onSubmit"], PA = ["value"], DA = ["value"], MA = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], FA = ["data-library-star-error"], $A = { class: "library-cover-summary" }, zA = { class: "library-cover-primary" }, UA = ["id"], BA = ["onClick"], HA = ["aria-label"], jA = {
  class: "library-bidi-human",
  dir: "auto"
}, VA = { class: "library-cover-primary-actions" }, GA = ["href"], KA = ["aria-label"], WA = { class: "library-pagination-range" }, qA = { key: 0 }, YA = ["href"], XA = {
  key: 1,
  class: "library-muted"
}, ZA = ["href"], JA = {
  key: 3,
  class: "library-muted"
}, QA = { class: "library-sidebar-content" }, e2 = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, t2 = ["role"], n2 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, i2 = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, a2 = ["src"], r2 = { class: "library-muted library-catalogue-eyebrow" }, s2 = {
  class: "library-bidi-human",
  dir: "auto"
}, o2 = { key: 0 }, l2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, c2 = {
  key: 0,
  class: "library-sidebar-description"
}, u2 = {
  class: "library-bidi-human",
  dir: "auto"
}, d2 = { class: "library-detail-drawer-facts" }, f2 = { key: 0 }, h2 = {
  class: "library-bidi-human",
  dir: "auto"
}, p2 = { key: 1 }, v2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, g2 = { key: 2 }, m2 = {
  class: "library-bidi-human",
  dir: "auto"
}, b2 = { key: 3 }, y2 = {
  class: "library-bidi-human",
  dir: "auto"
}, _2 = { key: 4 }, w2 = {
  class: "library-bidi-human",
  dir: "auto"
}, C2 = { key: 5 }, S2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, E2 = {
  key: 1,
  class: "library-sidebar-provenance",
  "aria-labelledby": "library-sidebar-provenance-heading"
}, T2 = { id: "library-sidebar-provenance-heading" }, A2 = {
  key: 0,
  class: "library-muted"
}, k2 = {
  class: "library-bidi-human",
  dir: "auto"
}, O2 = {
  class: "library-bidi-human",
  dir: "auto"
}, N2 = {
  class: "library-bidi-human",
  dir: "auto"
}, x2 = {
  key: 2,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-review-heading"
}, L2 = { id: "library-sidebar-review-heading" }, R2 = {
  class: "library-bidi-human",
  dir: "auto"
}, I2 = {
  class: "library-bidi-human",
  dir: "auto"
}, P2 = {
  class: "library-bidi-human",
  dir: "auto"
}, D2 = {
  class: "library-bidi-human",
  dir: "auto"
}, M2 = { class: "library-detail-drawer-actions" }, F2 = ["href"], $2 = ["href"], z2 = ["href"], U2 = ["href"], B2 = ["aria-label"], H2 = ["disabled"], j2 = ["disabled"], V2 = "/apps/library", G2 = 2147483647, K2 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], i = Object.freeze([
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Suggested updates" },
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs details" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "File problems" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Cover problems" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Imported changes" }
    ]), a = Object.freeze({
      needsMetadata: "1",
      scannerConflicts: "1",
      status: "metadata_error",
      coverReview: "placeholder",
      noCreator: "1",
      noPublication: "1",
      noDate: "1",
      titleFromFilename: "1",
      weakMetadata: "filename",
      noDescription: "1",
      unsupportedContainer: "1",
      unreviewedImports: "1"
    });
    function r(E, T) {
      return Object.prototype.hasOwnProperty.call(a, E) && String(T ?? "").trim() === a[E];
    }
    function s(E) {
      const T = new URLSearchParams(E);
      for (const g of Object.keys(a)) {
        const W = [...new Set([...T.keys()].filter((Ge) => Ge === g || Ge.startsWith(`${g}[`)))], Pe = W.reduce((Ge, ht) => Ge + T.getAll(ht).length, 0);
        if (Pe > 1 || W.some((Ge) => Ge !== g)) {
          for (const Ge of W) T.delete(Ge);
          continue;
        }
        g !== "status" && Pe === 1 && !r(g, T.get(g)) && T.delete(g);
      }
      return T;
    }
    function o(E) {
      return Object.keys(a).some((T) => E.getAll(T).length === 1 && r(T, E.get(T)));
    }
    function l(E) {
      return Object.fromEntries(Object.entries(E || {}).filter(([T, g]) => T === "status" || !Object.prototype.hasOwnProperty.call(a, T) || r(T, g)));
    }
    const u = /* @__PURE__ */ $t({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), c = /* @__PURE__ */ $t((u.items || []).map((E) => ({ ...E }))), f = ee(() => c), b = ee(() => u.shelves || []), C = ee(() => u.formats || []), N = ee(() => u.publications || []), S = ee(() => u.publicationSummaries || []), O = ee(() => u.publicationIssueContext || null), I = ee(() => u.publicationYears || []), D = ee(() => u.creators || []), j = ee(() => u.scanStatuses || []), F = ee(() => u.workflowStatuses || []), le = ee(() => u.genres || []), ce = ee(() => u.classifications || []), U = ee(() => u.cataloguePagination || {
      page: 1,
      limit: 100,
      total: f.value.length,
      visible: f.value.length,
      from: f.value.length > 0 ? 1 : 0,
      to: f.value.length,
      previousUrl: "",
      nextUrl: ""
    }), G = /* @__PURE__ */ $t({
      q: u.activeFilters?.q || "",
      view: u.activeFilters?.view || "compact",
      type: u.activeFilters?.type || "",
      publication: u.activeFilters?.publication || "",
      year: u.activeFilters?.year || "",
      creator: u.activeFilters?.creator || "",
      format: u.activeFilters?.format || "",
      tag: u.activeFilters?.tag || "",
      shelf: u.activeFilters?.shelf || "",
      status: u.activeFilters?.status || "",
      workflowStatus: u.activeFilters?.workflowStatus || "",
      genre: u.activeFilters?.genre || "",
      classification: u.activeFilters?.classification || "",
      scannerConflicts: u.activeFilters?.scannerConflicts || "",
      starred: u.activeFilters?.starred || "",
      needsMetadata: u.activeFilters?.needsMetadata || "",
      coverReview: u.activeFilters?.coverReview || "",
      noCreator: u.activeFilters?.noCreator || "",
      noPublication: u.activeFilters?.noPublication || "",
      noDate: u.activeFilters?.noDate || "",
      titleFromFilename: u.activeFilters?.titleFromFilename || "",
      noDescription: u.activeFilters?.noDescription || "",
      unsupportedContainer: u.activeFilters?.unsupportedContainer || "",
      weakMetadata: u.activeFilters?.weakMetadata || "",
      unreviewedImports: u.activeFilters?.unreviewedImports || "",
      sort: u.activeFilters?.sort || "title"
    });
    for (const E of Object.keys(a))
      E !== "status" && (r(E, G[E]) || (G[E] = ""));
    const X = Object.fromEntries(Object.keys(G).map((E) => [E, E === "sort" ? "title" : E === "view" ? "compact" : ""])), re = window.location.pathname.indexOf(V2), ue = re >= 0 ? window.location.pathname.slice(0, re) : "", te = {
      catalogue: `${ue}/apps/library/`,
      review: `${ue}/apps/library/?scannerConflicts=1`,
      settings: `${ue}/settings/user/library`
    };
    function ie(E, T) {
      if (typeof E != "string" || E === "") return T;
      try {
        const g = ue ? `${ue}/` : "/";
        let W = E;
        for (let Pe = 0; Pe < 5; Pe += 1) {
          if (!W.startsWith("/") || W.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(W)) return T;
          const Ge = new URL(W, window.location.origin);
          if (Ge.origin !== window.location.origin || !Ge.pathname.startsWith(g)) return T;
          const ht = W.split(/[?#]/, 1)[0];
          for (const _a of ht.split("/")) {
            let wa = _a;
            for (let Ca = 0; Ca < 5; Ca += 1) {
              const kn = decodeURIComponent(wa);
              if (/[\\/\u0000-\u001f\u007f]/.test(kn) || kn === "." || kn === "..") return T;
              if (kn === wa) break;
              if (wa = kn, Ca === 4) return T;
            }
          }
          const Zt = decodeURI(W);
          if (Zt === W) return E;
          W = Zt;
        }
        return T;
      } catch {
        return T;
      }
    }
    const P = ee(() => ie(u.settingsUrl, te.settings)), M = ee(() => ie(u.catalogueRootUrl, te.catalogue)), Y = ee(() => ie(u.reviewUrl || u.scannerConflictReviewUrl, te.review)), ae = ee(() => Object.entries(a).some(([E, T]) => G[E] === T)), Z = ee(() => u.requestToken || ""), fe = ee(() => u.catalogueEndpointUrl || "/apps/library/catalogue"), he = ee(() => u.itemSidebarUrlTemplate || `${ue}/apps/library/items/__ITEM_ID__/sidebar`), Se = ee(() => u.batchTagUrl || "/apps/library/bulk/tags"), ye = ee(() => u.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Xe = ee(() => u.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Te = ee(() => u.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), at = ee(() => u.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), st = ee(() => u.scannerConflictReviewUrl || "?scannerConflicts=1");
    u.importHealthSummary, u.importHealthSummary && Object.keys(u.importHealthSummary).length > 0;
    const ot = ee(() => u.discoveryPage === "publication"), bt = ee(() => u.discoveryPage === "year"), Ze = ee(() => u.discoveryPage === "creator"), qt = ee(() => ot.value || bt.value || Ze.value), z = ee(() => u.discoveryTitle || G.publication || G.year || G.creator || ""), h = ee(() => qt.value ? z.value : w("library", "Library")), y = ee(() => Ze.value ? w("library", "Creator") : bt.value ? w("library", "Publication year") : w("library", "Publication / series")), A = ee(() => Number(u.rootCount || 0)), L = ee(() => Number(u.enabledRootCount || 0)), x = ee(() => A.value === 0), $ = ee(() => A.value > 0 && L.value === 0), V = ee(() => je.value.length > 0), H = {
      q: "Search",
      view: "View mode",
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
      scannerConflicts: "Suggested updates",
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, J = ee(() => {
      if (typeof window > "u") return "";
      const E = new URLSearchParams(window.location.search);
      if (E.get("batchMetadataApplyResult") !== "1") return "";
      const T = E.get("batchMetadataField") || "field", g = E.get("batchMetadataApplied") || "0", W = E.get("batchMetadataUnchanged") || "0", Pe = E.get("batchMetadataSkipped") || "0";
      return w("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: g, field: T, unchanged: W, skipped: Pe });
    }), B = ee(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? w("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ge = ee(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? w("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), se = ee(() => u.savedCollections || []), pe = ee(() => u.savedCollectionSaveUrl || "/apps/library/collections"), we = ee(() => u.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Ae = ["compact", "gallery", "shelf"], ke = ee(() => Ae.includes(G.view) ? G.view : "compact"), Ie = ee(() => ({
      "library-cover-gallery--compact": ke.value === "compact",
      "library-cover-gallery--gallery": ke.value === "gallery",
      "library-cover-gallery--shelf": ke.value === "shelf"
    })), je = ee(() => Object.entries(H).map(([E, T]) => ({ key: E, label: w("library", T), value: G[E] || "" })).filter((E) => String(E.value).trim() !== "")), it = ee(() => Object.entries(G).filter(([E, T]) => !["q", "sort", "starred"].includes(E) && String(T || "").trim() !== "").map(([E, T]) => ({ key: E, value: T }))), lt = ee(() => Object.entries(l(G)).filter(([E, T]) => String(T || "").trim() !== "").map(([E, T]) => ({ key: E, value: T }))), Et = ee(() => lt.value.filter(({ key: E, value: T }) => E !== "q" && !(E === "sort" && T === "title"))), Ut = /* @__PURE__ */ $t({}), gn = /* @__PURE__ */ $t({}), Ve = /* @__PURE__ */ ut([]), Pt = ee(() => new Set(Ve.value));
    function Pi(E, T) {
      const g = new Set(Ve.value);
      T ? g.add(Number(E)) : g.delete(Number(E)), Ve.value = [...g];
    }
    function Di(E) {
      Ve.value = E.currentTarget.checked ? f.value.map((T) => Number(T.id)) : [];
    }
    function Ua() {
      const E = new Set(f.value.map((T) => Number(T.id)));
      Ve.value = Ve.value.filter((T) => E.has(T));
    }
    function Ba(E) {
      const T = E.target;
      if (T instanceof HTMLFormElement) {
        T.querySelectorAll("input[data-library-selected-id]").forEach((g) => g.remove());
        for (const g of Ve.value) {
          const W = document.createElement("input");
          W.type = "hidden", W.name = "itemIds[]", W.value = String(g), W.dataset.librarySelectedId = "1", T.appendChild(W);
        }
      }
    }
    const Ce = /* @__PURE__ */ ut(null), mn = /* @__PURE__ */ ut(null), vt = /* @__PURE__ */ $t({ loading: !1, error: "", missing: !1 }), Ha = /* @__PURE__ */ ut(null), En = /* @__PURE__ */ ut(null), Tn = /* @__PURE__ */ ut(!1);
    let va = null, Bt = null, Fn = null, Ht = !1, an = null, Mi = 0;
    const $n = ee(() => mn.value !== null), Fi = ee(() => Ce.value ? f.value.findIndex((E) => E.id === Ce.value.id) : -1), $i = ee(() => Fi.value > 0 ? f.value[Fi.value - 1] : null), ui = ee(() => Fi.value >= 0 && Fi.value < f.value.length - 1 ? f.value[Fi.value + 1] : null), Zr = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], rn = ee(() => {
      const E = r("scannerConflicts", G.scannerConflicts) || r("weakMetadata", G.weakMetadata), T = E ? f.value.find((g) => ga(g).length > 0) : null;
      return {
        enabled: E,
        item: T,
        fields: T ? ga(T) : [],
        reviewNextUrl: st.value,
        skipUrl: U.value.nextUrl || st.value
      };
    }), qo = ee(() => i.map((E) => ({
      ...E,
      label: w("library", E.label),
      href: `${M.value}?${encodeURIComponent(E.key)}=${encodeURIComponent(E.value)}`,
      active: String(G[E.key] || "") === E.value
    })));
    function zn(E) {
      return Array.isArray(E) ? JSON.stringify(E) : E == null ? "" : String(E);
    }
    function ga(E) {
      const T = E.fieldValues || {}, g = E.fieldSources || {};
      return Zr.filter((W) => Object.prototype.hasOwnProperty.call(T, W)).map((W) => {
        const Pe = zn(E[W]), Ge = zn(T[W]), ht = zn(g[W] || E.metadataSource || "scanner"), Zt = ht.includes("filename") || ht.includes("path") ? Ge : "", _a = ht.includes("sidecar") ? Ge : "";
        return { field: W, currentValue: Pe, scannerCandidate: Ge, pathTemplateCandidate: Zt, sidecarValue: _a, sourceProvenance: ht, differs: Pe !== Ge };
      }).filter((W) => W.differs);
    }
    let Un = 0, Ye = null;
    function Bn() {
      const E = new URLSearchParams(window.location.search).getAll("item");
      if (E.length !== 1 || !/^[1-9][0-9]*$/.test(E[0])) return null;
      const T = Number(E[0]);
      return Number.isSafeInteger(T) && T <= G2 ? T : null;
    }
    function Jr(E, T = "push") {
      const g = new URL(window.location.href);
      g.searchParams.delete("item"), E !== null && g.searchParams.set("item", String(E)), history[`${T}State`]({}, "", `${g.pathname}${g.search}${g.hash}`);
    }
    async function di(E, { historyMode: T = "push", seed: g = null } = {}) {
      Ye?.abort();
      const W = ++Un, Pe = new AbortController();
      Ye = Pe, mn.value = E, Ce.value = g && Number(g.id) === E ? g : null, Object.assign(vt, { loading: !0, error: "", missing: !1 }), T !== "none" && Jr(E, T);
      try {
        const Ge = he.value.replace("__ITEM_ID__", encodeURIComponent(String(E))), ht = await fetch(Ge, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Pe.signal });
        if (W !== Un) return;
        if (!ht.ok) {
          Ce.value = null, vt.missing = ht.status === 404, vt.error = ht.status === 404 ? w("library", "This publication is unavailable or you do not have access.") : w("library", "Could not load publication details. Try again.");
          return;
        }
        const Zt = await ht.json();
        if (W !== Un) return;
        if (typeof Zt?.item?.id != "number" || !Number.isSafeInteger(Zt.item.id) || Zt.item.id !== E) {
          Ce.value = null, vt.missing = !1, vt.error = w("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = Zt.item, await ti();
      } catch (Ge) {
        W === Un && Ge?.name !== "AbortError" && (Ce.value = null, vt.missing = !1, vt.error = w("library", "Could not load publication details. Try again."));
      } finally {
        W === Un && (vt.loading = !1, Ye = null);
      }
    }
    function fi(E, T) {
      Va(), va = T?.currentTarget instanceof HTMLElement ? T.currentTarget : null, di(Number(E.id), { seed: E });
    }
    function zi({ historyMode: E = "push", restoreFocus: T = !0 } = {}) {
      Fn = T ? va : null, va = null, Ye?.abort(), Ye = null, Un += 1, mn.value = null, Ce.value = null, Object.assign(vt, { loading: !1, error: "", missing: !1 }), E !== "none" && Jr(null, E);
    }
    function ja() {
      Tn.value ? (En.value?.$refs?.sidebar || En.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Ha.value?.focus();
    }
    function Yo() {
      const E = Fn;
      if (Fn = null, Va(), Ht || !E?.isConnected) return;
      const T = Mi;
      an = window.requestAnimationFrame(() => {
        an = null, !(T !== Mi || Ht || $n.value || !E.isConnected) && E.focus();
      });
    }
    function Va() {
      Mi += 1, an !== null && (window.cancelAnimationFrame(an), an = null);
    }
    function Ui(E = Bt) {
      Tn.value = !!E?.matches, $n.value && ti(ja);
    }
    function ma(E) {
      E && di(Number(E.id), { seed: E });
    }
    const Dt = /* @__PURE__ */ ut(null);
    let Bi = null, jt = 0, Tt = null;
    const Yt = /* @__PURE__ */ $t({ loading: !1, error: "" });
    function Hi(E) {
      const T = s(new FormData(E));
      for (const g of Array.from(T.keys()))
        String(T.get(g) || "").trim() === "" && T.delete(g);
      return T.delete("page"), T.get("view") === "compact" && T.delete("view"), T;
    }
    function Qr(E) {
      c.splice(0, c.length, ...(E.items || []).map((T) => ({ ...T }))), Ua();
      for (const T of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(E, T) && (u[T] = E[T]);
      Object.assign(G, X, E.activeFilters || {});
    }
    async function Hn(E, T = null) {
      const g = E?.currentTarget?.tagName === "FORM" ? E.currentTarget : E?.currentTarget?.form;
      if (!g && !T?.params) return;
      const W = s(T?.params ?? Hi(g)), Pe = W.toString(), Ge = Pe ? `?${Pe}` : "", ht = T?.generation ?? ++jt, Zt = o(W), _a = T?.historyMode ?? (Zt ? "push" : "replace"), wa = T?.historyTraversal === !0;
      if (ht !== jt) return;
      T === null && Tt?.abort();
      const Ca = new AbortController();
      Tt = Ca, Yt.loading = !0, Yt.error = "";
      try {
        const kn = await fetch(fe.value + Ge, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ca.signal
        });
        if (ht !== jt) return;
        if (!kn.ok) {
          wa ? ji(W) : Zt ? Yt.error = w("library", "Could not load this review queue. Try again.") : ji(W);
          return;
        }
        const wp = await kn.json();
        if (ht !== jt) return;
        Qr(wp), _a !== "none" && (history[_a === "push" ? "pushState" : "replaceState"]({}, "", Pe ? `?${Pe}` : window.location.pathname), $n.value && zi({ historyMode: "none" }));
      } catch (kn) {
        ht === jt && kn?.name !== "AbortError" && (wa ? ji(W) : Zt ? Yt.error = w("library", "Could not load this review queue. Try again.") : ji(W));
      } finally {
        ht === jt && (Tt = null, Yt.loading = !1);
      }
    }
    function Ga() {
      Tt?.abort();
      const E = new URLSearchParams(window.location.search), T = Bn();
      E.has("item") && T === null && (E.delete("item"), history.replaceState({}, "", `${window.location.pathname}${E.toString() ? `?${E}` : ""}${window.location.hash}`)), T === null ? zi({ historyMode: "none" }) : di(T, { historyMode: "none", seed: f.value.find((g) => Number(g.id) === T) || null }), E.delete("item"), Hn(null, {
        params: s(E),
        generation: ++jt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ji(E) {
      const T = document.createElement("form");
      T.method = "get", T.action = window.location.pathname, T.hidden = !0;
      for (const [g, W] of E.entries()) {
        const Pe = document.createElement("input");
        Pe.type = "hidden", Pe.name = g, Pe.value = W, T.appendChild(Pe);
      }
      document.body.appendChild(T), T.submit(), T.remove();
    }
    function Vi(E, T = null, g = null) {
      if (T === null) {
        Hn(E);
        return;
      }
      Hn({ currentTarget: E }, { params: T, generation: g });
    }
    function Ka(E) {
      const T = E?.currentTarget?.form;
      if (!T) return;
      window.clearTimeout(Bi);
      const g = ++jt, W = Hi(T);
      Tt?.abort(), Tt = null, Bi = window.setTimeout(() => Vi(T, W, g), 350);
    }
    function Gi(E) {
      const T = new URLSearchParams();
      for (const [W, Pe] of Object.entries(G)) {
        const Ge = String(Pe || "").trim();
        Ge !== "" && W !== E && !(W === "sort" && Ge === "title") && !(W === "view" && Ge === "compact") && T.set(W, Ge);
      }
      const g = T.toString();
      return g ? `?${g}` : "?";
    }
    function hi() {
      return Gi("q");
    }
    const pi = ee(() => u.smartViewCounts || {}), Xt = ee(() => {
      const E = {};
      for (const [T, g] of Object.entries(G)) {
        const W = String(g || "").trim();
        W !== "" && !(T === "sort" && W === "title") && (E[T] = W);
      }
      return E;
    }), Xo = ee(() => JSON.stringify(Xt.value)), vi = ee(() => Object.keys(Xt.value).length > 0), Zo = ee(() => [
      { key: "recently-opened", label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { key: "starred", label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { key: "to-read", label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { key: "reading", label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { key: "finished", label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { key: "needs-action", label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { key: "needs-metadata", label: "Needs metadata", description: "Items with missing core fields, extraction errors, or filename-only metadata.", query: "needsMetadata=1", filters: { needsMetadata: "1" } },
      { key: "scanner-conflicts", label: "Suggested updates", description: "Rows where current metadata has a suggested update.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata errors", description: "Files whose metadata extraction needs review.", query: "status=metadata_error", filters: { status: "metadata_error" } },
      { key: "placeholder-covers", label: "Placeholder covers", description: "Likely placeholder-cover candidates without a manual cover override.", query: "coverReview=placeholder", filters: { coverReview: "placeholder" } },
      { key: "no-creator", label: "No creator", description: "Publications without creator metadata.", query: "noCreator=1", filters: { noCreator: "1" } },
      { key: "no-publication", label: "No publication/series", description: "Items without publication, series, periodical or collection metadata.", query: "noPublication=1", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "Items without a publication date or year.", query: "noDate=1", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Rows whose title still comes from filename/path parsing.", query: "titleFromFilename=1", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "no-description", label: "No description", description: "Rows without summary or description text.", query: "noDescription=1", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Archive/container formats that Library cannot inspect deeply yet.", query: "unsupportedContainer=1", filters: { unsupportedContainer: "1" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]);
    function ba(E) {
      if (!Ae.includes(E)) return;
      G.view = E;
      const T = s(window.location.search);
      E === "compact" ? T.delete("view") : T.set("view", E), T.delete("page"), history.replaceState({}, "", T.toString() ? `?${T.toString()}` : window.location.pathname);
    }
    function Wa(E) {
      const T = s(window.location.search);
      for (const W of Object.keys(H))
        T.delete(W);
      T.delete("page");
      for (const [W, Pe] of Object.entries(E))
        String(Pe || "").trim() !== "" && T.set(W, String(Pe));
      const g = T.toString();
      return g ? `?${g}` : "?";
    }
    function es(E) {
      return Wa(E || {});
    }
    function ts(E) {
      return we.value.replace("__COLLECTION_ID__", encodeURIComponent(String(E || "0")));
    }
    function ns(E) {
      return String(E || "").toUpperCase();
    }
    function is(E) {
      return S.value.find((g) => g.publication === E)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(E)}`;
    }
    function Jo(E) {
      return u.publicationYearLandingUrls?.[E] || `/apps/library/years/${encodeURIComponent(E)}`;
    }
    function Qo(E) {
      return u.creatorLandingUrls?.[E] || `/apps/library/creators/${encodeURIComponent(E)}`;
    }
    function ya(E) {
      const T = E?.target?.value || "";
      T && (window.location.href = T);
    }
    function An(E) {
      return gn[E.id] || "loading";
    }
    function qa(E) {
      gn[E.id] = "loaded";
    }
    function Q(E) {
      gn[E.id] = "error";
    }
    function v(E) {
      const T = String(E?.tagName || "").toLowerCase();
      return E?.isContentEditable || ["input", "select", "textarea", "button"].includes(T);
    }
    function R(E) {
      E.key !== "/" || E.metaKey || E.ctrlKey || E.altKey || E.shiftKey || v(E.target) || (E.preventDefault(), Dt.value?.focus(), Dt.value?.select?.());
    }
    function K(E) {
      E.key !== "Escape" || document.activeElement !== Dt.value || G.q === "" || (E.preventDefault(), G.q = "", Dt.value.value = "", window.clearTimeout(Bi), Vi({ currentTarget: Dt.value }));
    }
    function oe(E) {
      if (!$n.value || E.metaKey || E.ctrlKey || E.altKey)
        return !1;
      if (E.key === "Escape")
        return E.preventDefault(), zi(), !0;
      if (E.key === "Tab" && Tn.value) {
        if (En.value?.focusTrap) return !1;
        const T = En.value?.$refs?.sidebar || En.value?.$el || En.value, g = [...T?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ge) => !Ge.hidden && Ge.getAttribute("aria-hidden") !== "true");
        if (g.length === 0) return !1;
        const W = g[0], Pe = g[g.length - 1];
        if (E.shiftKey && (document.activeElement === W || !T.contains(document.activeElement)))
          return E.preventDefault(), Pe.focus(), !0;
        if (!E.shiftKey && (document.activeElement === Pe || !T.contains(document.activeElement)))
          return E.preventDefault(), W.focus(), !0;
      }
      return E.key === "ArrowLeft" && $i.value ? (E.preventDefault(), ma($i.value), !0) : E.key === "ArrowRight" && ui.value ? (E.preventDefault(), ma(ui.value), !0) : !1;
    }
    function de(E) {
      oe(E) || (R(E), K(E));
    }
    Li(() => {
      window.addEventListener("keydown", de), window.addEventListener("popstate", Ga), Bt = window.matchMedia?.("(max-width: 1023px)") || null, Ui(), Bt?.addEventListener ? Bt.addEventListener("change", Ui) : Bt?.addListener?.(Ui);
      const E = new URLSearchParams(window.location.search), T = Bn();
      E.has("item") && T === null ? (E.delete("item"), history.replaceState({}, "", `${window.location.pathname}${E.toString() ? `?${E}` : ""}${window.location.hash}`)) : T !== null && di(T, { historyMode: "none", seed: f.value.find((g) => Number(g.id) === T) || null });
    }), za(() => {
      Ht = !0, Va(), window.removeEventListener("keydown", de), window.removeEventListener("popstate", Ga), window.clearTimeout(Bi), jt += 1, Tt?.abort(), Tt = null, Un += 1, Ye?.abort(), Ye = null, Bt?.removeEventListener ? Bt.removeEventListener("change", Ui) : Bt?.removeListener?.(Ui), Bt = null, Fn = null;
    });
    const _e = /* @__PURE__ */ $t({}), Ue = /* @__PURE__ */ $t({});
    async function Je(E, T) {
      const g = T?.currentTarget?.closest?.("form") || T?.currentTarget;
      if (!g || !E?.starUrl || _e[E.id]) return;
      const W = !!E.starred;
      _e[E.id] = !0, Ue[E.id] = "", E.starred = !W;
      try {
        (await fetch(E.starUrl, {
          method: "POST",
          body: new FormData(g),
          credentials: "same-origin"
        })).ok || (E.starred = W, Ue[E.id] = w("library", "Could not update star. Try again."));
      } catch {
        E.starred = W, Ue[E.id] = w("library", "Could not update star. Try again.");
      } finally {
        _e[E.id] = !1;
      }
    }
    return (E, T) => (_(), De(m(fC), { "app-name": "library" }, {
      default: Oe(() => [
        me(m(Wy), {
          "aria-label": m(w)("library", "Library navigation")
        }, {
          list: Oe(() => [
            me(m(Uh), null, {
              default: Oe(() => [
                me(m(Bd), {
                  active: !ae.value,
                  href: M.value,
                  name: m(w)("library", "Library")
                }, null, 8, ["active", "href", "name"]),
                me(m(Bd), {
                  active: ae.value,
                  href: Y.value,
                  name: m(w)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Oe(() => [
            d("a", {
              class: "library-navigation-settings-link",
              href: P.value
            }, [
              T[21] || (T[21] = d("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              d("span", null, p(m(w)("library", "Settings")), 1)
            ], 8, hC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        me(m(cy), null, {
          default: Oe(() => [
            d("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: u.language || "en",
              dir: u.direction || "ltr",
              tabindex: "-1"
            }, [
              ae.value ? (_(), k("section", vC, [
                d("header", gC, [
                  d("p", mC, p(m(w)("library", "Metadata cleanup")), 1),
                  d("h2", bC, p(m(w)("library", "Review")), 1),
                  d("p", null, p(m(w)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                d("nav", {
                  class: "library-review-queues",
                  "aria-label": m(w)("library", "Review queues")
                }, [
                  (_(!0), k(ve, null, Be(qo.value, (g) => (_(), k("a", {
                    key: g.key,
                    class: Ee(["library-review-queue-link", { active: g.active }]),
                    href: g.href,
                    "aria-current": g.active ? "page" : void 0
                  }, [
                    d("span", null, p(g.label), 1),
                    d("b", null, p(Number(pi.value[g.countKey] || 0)), 1)
                  ], 10, _C))), 128))
                ], 8, yC),
                d("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": m(w)("library", "Filter current review queue"),
                  onSubmit: et(Hn, ["prevent"])
                }, [
                  (_(!0), k(ve, null, Be(Et.value, (g) => (_(), k("input", {
                    key: `review-${g.key}`,
                    type: "hidden",
                    name: g.key,
                    value: g.value
                  }, null, 8, CC))), 128)),
                  d("label", null, [
                    xe(p(m(w)("library", "Search within this queue")), 1),
                    nt(d("input", {
                      "onUpdate:modelValue": T[0] || (T[0] = (g) => G.q = g),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ws, G.q]
                    ])
                  ]),
                  d("button", SC, p(m(w)("library", "Apply")), 1)
                ], 40, wC),
                d("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Yt.loading ? "true" : "false"
                }, [
                  Yt.loading ? (_(), k("span", TC, p(m(w)("library", "Loading review queue…")), 1)) : q("", !0)
                ], 8, EC),
                Yt.error ? (_(), k("p", AC, p(Yt.error), 1)) : q("", !0),
                rn.value.enabled ? (_(), k("section", kC, [
                  d("div", OC, [
                    d("p", NC, p(m(w)("library", "Metadata review workbench")), 1),
                    d("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: m(w)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(m(w)("library", "Review next suggestion")), 9, xC)
                  ]),
                  rn.value.item ? (_(), k("article", LC, [
                    d("header", null, [
                      d("strong", null, [
                        d("bdi", RC, p(rn.value.item.title), 1)
                      ]),
                      d("span", IC, [
                        d("bdi", PC, p(rn.value.item.cachedPath), 1)
                      ])
                    ]),
                    d("div", DC, [
                      (_(!0), k(ve, null, Be(rn.value.fields, (g) => (_(), k("article", {
                        key: g.field,
                        class: "library-metadata-review-field"
                      }, [
                        d("h4", null, [
                          d("bdi", MC, p(g.field), 1)
                        ]),
                        d("dl", null, [
                          d("div", null, [
                            d("dt", null, p(m(w)("library", "Current value")), 1),
                            d("dd", null, [
                              d("bdi", FC, p(g.currentValue || "—"), 1)
                            ])
                          ]),
                          d("div", null, [
                            d("dt", null, p(m(w)("library", "Suggested value")), 1),
                            d("dd", null, [
                              d("bdi", $C, p(g.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          d("div", null, [
                            d("dt", null, p(m(w)("library", "Path-based suggestion")), 1),
                            d("dd", null, [
                              d("bdi", zC, p(g.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          d("div", null, [
                            d("dt", null, p(m(w)("library", "Sidecar value")), 1),
                            d("dd", null, [
                              d("bdi", UC, p(g.sidecarValue || "—"), 1)
                            ])
                          ]),
                          d("div", null, [
                            d("dt", null, p(m(w)("library", "Source")), 1),
                            d("dd", null, [
                              d("bdi", BC, p(g.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        d("form", {
                          method: "post",
                          action: rn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          d("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Z.value
                          }, null, 8, jC),
                          d("input", {
                            type: "hidden",
                            name: "field",
                            value: g.field
                          }, null, 8, VC),
                          T[22] || (T[22] = d("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          d("button", GC, p(m(w)("library", "Use suggested value")), 1)
                        ], 8, HC)
                      ]))), 128))
                    ]),
                    d("footer", KC, [
                      d("a", {
                        class: "button secondary",
                        href: rn.value.item.detailsUrl
                      }, p(m(w)("library", "Advanced details")), 9, WC),
                      d("a", {
                        class: "button secondary",
                        href: rn.value.skipUrl
                      }, p(m(w)("library", "Skip to next suggestion")), 9, qC)
                    ])
                  ])) : q("", !0)
                ])) : q("", !0),
                f.value.length === 0 && !Yt.loading && !Yt.error ? (_(), k("div", YC, [
                  d("h3", null, p(m(w)("library", "This review queue is clear")), 1),
                  d("p", null, p(m(w)("library", "Choose another queue or return to the catalogue.")), 1),
                  d("a", {
                    class: "button primary",
                    href: M.value
                  }, p(m(w)("library", "Back to Library")), 9, XC)
                ])) : (_(), k("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": m(w)("library", "Review results")
                }, [
                  (_(!0), k(ve, null, Be(f.value, (g) => (_(), k("article", {
                    key: g.id,
                    class: "library-review-result-card"
                  }, [
                    d("div", null, [
                      d("h3", null, [
                        d("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (W) => fi(g, W)
                        }, [
                          d("bdi", QC, p(g.title), 1)
                        ], 8, JC)
                      ]),
                      g.creators ? (_(), k("p", eS, [
                        d("bdi", tS, p(g.creators), 1)
                      ])) : q("", !0),
                      g.scanError ? (_(), k("p", nS, [
                        d("bdi", iS, p(g.scanError), 1)
                      ])) : q("", !0)
                    ]),
                    d("p", null, [
                      d("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (W) => fi(g, W)
                      }, p(m(w)("library", "Details")), 9, aS),
                      d("a", {
                        class: "button primary",
                        href: g.openUrl
                      }, p(m(w)("library", "Open")), 9, rS)
                    ])
                  ]))), 128))
                ], 8, ZC)),
                f.value.length > 0 ? (_(), k("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": m(w)("library", "Review pagination")
                }, [
                  U.value.previousUrl ? (_(), k("a", {
                    key: 0,
                    href: U.value.previousUrl
                  }, p(m(w)("library", "Previous")), 9, oS)) : (_(), k("span", lS, p(m(w)("library", "Previous")), 1)),
                  d("span", null, [
                    xe(p(m(w)("library", "Page")) + " " + p(U.value.page), 1),
                    U.value.total > 0 ? (_(), k("span", cS, " · " + p(U.value.from) + "–" + p(U.value.to), 1)) : q("", !0)
                  ]),
                  U.value.nextUrl ? (_(), k("a", {
                    key: 2,
                    href: U.value.nextUrl
                  }, p(m(w)("library", "Next")), 9, uS)) : (_(), k("span", dS, p(m(w)("library", "Next")), 1))
                ], 8, sS)) : q("", !0)
              ])) : (_(), k("section", fS, [
                d("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": m(w)("library", "One catalogue workspace")
                }, [
                  d("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": m(w)("library", "Catalogue toolbar"),
                    onSubmit: et(Hn, ["prevent"])
                  }, [
                    (_(!0), k(ve, null, Be(it.value, (g) => (_(), k("input", {
                      key: g.key,
                      type: "hidden",
                      name: g.key,
                      value: g.value
                    }, null, 8, vS))), 128)),
                    d("div", gS, [
                      d("label", {
                        class: "library-quick-filter-search",
                        title: m(w)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        d("span", null, [
                          xe(p(m(w)("library", "Search")) + " ", 1),
                          T[23] || (T[23] = d("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        nt(d("input", {
                          ref_key: "quickSearchInput",
                          ref: Dt,
                          "onUpdate:modelValue": T[1] || (T[1] = (g) => G.q = g),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: m(w)("library", "Title, creator, description, filename or folder"),
                          onInput: Ka
                        }, null, 40, bS), [
                          [ws, G.q]
                        ])
                      ], 8, mS),
                      d("button", {
                        type: "submit",
                        class: "button primary",
                        "aria-label": m(w)("library", "Search catalogue")
                      }, p(m(w)("library", "Search")), 9, yS)
                    ]),
                    d("label", _S, [
                      xe(p(m(w)("library", "Sort")), 1),
                      nt(d("select", {
                        "onUpdate:modelValue": T[2] || (T[2] = (g) => G.sort = g),
                        name: "sort",
                        onChange: Hn
                      }, [
                        d("option", wS, p(m(w)("library", "Title")), 1),
                        d("option", CS, p(m(w)("library", "Date added")), 1),
                        d("option", SS, p(m(w)("library", "Publication date")), 1),
                        d("option", ES, p(m(w)("library", "Series")), 1),
                        d("option", TS, p(m(w)("library", "Recently opened")), 1),
                        d("option", AS, p(m(w)("library", "Format")), 1)
                      ], 544), [
                        [on, G.sort]
                      ])
                    ]),
                    d("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": m(w)("library", "View")
                    }, [
                      d("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ee({ active: ke.value === "compact" }),
                        "aria-pressed": ke.value === "compact" ? "true" : "false",
                        onClick: T[3] || (T[3] = (g) => ba("compact"))
                      }, p(m(w)("library", "Compact")), 11, OS),
                      d("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: ke.value === "gallery" }),
                        "aria-pressed": ke.value === "gallery" ? "true" : "false",
                        onClick: T[4] || (T[4] = (g) => ba("gallery"))
                      }, p(m(w)("library", "Gallery")), 11, NS),
                      d("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: ke.value === "shelf" }),
                        "aria-pressed": ke.value === "shelf" ? "true" : "false",
                        onClick: T[5] || (T[5] = (g) => ba("shelf"))
                      }, p(m(w)("library", "Shelf")), 11, xS)
                    ], 8, kS)
                  ], 40, pS),
                  d("details", LS, [
                    d("summary", RS, [
                      T[24] || (T[24] = d("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⌕", -1)),
                      d("span", IS, p(m(w)("library", "Filter")), 1),
                      d("small", PS, p(m(w)("library", "Facets narrow the current results")), 1),
                      d("b", DS, p(G.shelf ? m(w)("library", "this shelf") : je.value.length > 0 ? m(w)("library", "current results") : m(w)("library", "whole catalogue")), 1)
                    ]),
                    d("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": m(w)("library", "Catalogue search and filters"),
                      onSubmit: et(Hn, ["prevent"])
                    }, [
                      d("label", null, [
                        xe(p(m(w)("library", "Type")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[6] || (T[6] = (g) => G.type = g),
                          name: "type"
                        }, [
                          d("option", FS, p(m(w)("library", "All types")), 1),
                          (_(), k(ve, null, Be(n, (g) => d("option", {
                            key: g,
                            value: g
                          }, p(g), 9, $S)), 64))
                        ], 512), [
                          [on, G.type]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Series / periodical")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[7] || (T[7] = (g) => G.publication = g),
                          name: "publication"
                        }, [
                          d("option", zS, p(m(w)("library", "All series and periodicals")), 1),
                          (_(!0), k(ve, null, Be(N.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, US))), 128))
                        ], 512), [
                          [on, G.publication]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Publication year")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[8] || (T[8] = (g) => G.year = g),
                          name: "year"
                        }, [
                          d("option", BS, p(m(w)("library", "All years")), 1),
                          (_(!0), k(ve, null, Be(I.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, HS))), 128))
                        ], 512), [
                          [on, G.year]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Creator")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[9] || (T[9] = (g) => G.creator = g),
                          name: "creator",
                          title: m(w)("library", "Exact full-field creator matches only")
                        }, [
                          d("option", VS, p(m(w)("library", "All creators")), 1),
                          (_(!0), k(ve, null, Be(D.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, GS))), 128))
                        ], 8, jS), [
                          [on, G.creator]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Nextcloud tag")), 1),
                        nt(d("input", {
                          "onUpdate:modelValue": T[10] || (T[10] = (g) => G.tag = g),
                          type: "text",
                          name: "tag",
                          placeholder: m(w)("library", "photography")
                        }, null, 8, KS), [
                          [ws, G.tag]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Format")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[11] || (T[11] = (g) => G.format = g),
                          name: "format"
                        }, [
                          d("option", WS, p(m(w)("library", "All formats")), 1),
                          (_(!0), k(ve, null, Be(C.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(ns(g)), 9, qS))), 128))
                        ], 512), [
                          [on, G.format]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Shelf")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[12] || (T[12] = (g) => G.shelf = g),
                          name: "shelf"
                        }, [
                          d("option", YS, p(m(w)("library", "All shelves")), 1),
                          (_(!0), k(ve, null, Be(b.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, XS))), 128))
                        ], 512), [
                          [on, G.shelf]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Scan status")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[13] || (T[13] = (g) => G.status = g),
                          name: "status"
                        }, [
                          d("option", ZS, p(m(w)("library", "All scan statuses")), 1),
                          (_(!0), k(ve, null, Be(j.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, JS))), 128))
                        ], 512), [
                          [on, G.status]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Workflow status")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[14] || (T[14] = (g) => G.workflowStatus = g),
                          name: "workflowStatus"
                        }, [
                          d("option", QS, p(m(w)("library", "All workflow statuses")), 1),
                          (_(!0), k(ve, null, Be(F.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, eE))), 128))
                        ], 512), [
                          [on, G.workflowStatus]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Genre")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[15] || (T[15] = (g) => G.genre = g),
                          name: "genre"
                        }, [
                          d("option", tE, p(m(w)("library", "All genres")), 1),
                          (_(!0), k(ve, null, Be(le.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, nE))), 128))
                        ], 512), [
                          [on, G.genre]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Classification")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[16] || (T[16] = (g) => G.classification = g),
                          name: "classification"
                        }, [
                          d("option", iE, p(m(w)("library", "All classifications")), 1),
                          (_(!0), k(ve, null, Be(ce.value, (g) => (_(), k("option", {
                            key: g,
                            value: g
                          }, p(g), 9, aE))), 128))
                        ], 512), [
                          [on, G.classification]
                        ])
                      ]),
                      d("label", null, [
                        xe(p(m(w)("library", "Suggested updates")), 1),
                        nt(d("select", {
                          "onUpdate:modelValue": T[17] || (T[17] = (g) => G.scannerConflicts = g),
                          name: "scannerConflicts"
                        }, [
                          d("option", rE, p(m(w)("library", "All metadata")), 1),
                          d("option", sE, p(m(w)("library", "Suggested updates")), 1)
                        ], 512), [
                          [on, G.scannerConflicts]
                        ])
                      ]),
                      d("button", oE, p(m(w)("library", "Apply filters")), 1),
                      d("a", lE, p(m(w)("library", "Clear")), 1)
                    ], 40, MS)
                  ]),
                  d("details", cE, [
                    d("summary", uE, [
                      T[25] || (T[25] = d("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "↗", -1)),
                      d("span", dE, p(m(w)("library", "Browse")), 1),
                      d("small", fE, p(m(w)("library", "Starred, recently opened, series, years and creators")), 1),
                      d("b", hE, p(m(w)("library", "whole catalogue")), 1)
                    ]),
                    d("nav", {
                      class: "library-useful-view-links",
                      "aria-label": m(w)("library", "Useful views")
                    }, [
                      (_(!0), k(ve, null, Be(Zo.value, (g) => (_(), k("a", {
                        key: g.key,
                        class: "library-useful-view-chip",
                        href: Wa(g.filters),
                        title: m(w)("library", g.description)
                      }, [
                        d("strong", null, p(m(w)("library", g.label)), 1),
                        d("small", gE, p(Number(pi.value[g.key] || 0)), 1)
                      ], 8, vE))), 128))
                    ], 8, pE),
                    d("div", mE, [
                      S.value.length > 0 ? (_(), k("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: m(w)("library", "Jump into recurring publications with one click.")
                      }, [
                        d("span", null, p(m(w)("library", "Series / periodicals")), 1),
                        d("select", { onChange: ya }, [
                          d("option", yE, p(m(w)("library", "Choose series")), 1),
                          (_(!0), k(ve, null, Be(S.value, (g) => (_(), k("option", {
                            key: g.publication,
                            value: is(g.publication)
                          }, p(g.publication) + " · " + p(g.itemCount), 9, _E))), 128))
                        ], 32)
                      ], 8, bE)) : q("", !0),
                      I.value.length > 0 ? (_(), k("label", wE, [
                        d("span", null, p(m(w)("library", "Publication year")), 1),
                        d("select", { onChange: ya }, [
                          d("option", CE, p(m(w)("library", "Choose year")), 1),
                          (_(!0), k(ve, null, Be(I.value, (g) => (_(), k("option", {
                            key: g,
                            value: Jo(g)
                          }, p(g), 9, SE))), 128))
                        ], 32)
                      ])) : q("", !0),
                      D.value.length > 0 ? (_(), k("label", EE, [
                        d("span", null, p(m(w)("library", "Creator")), 1),
                        d("select", { onChange: ya }, [
                          d("option", TE, p(m(w)("library", "Choose creator")), 1),
                          (_(!0), k(ve, null, Be(D.value, (g) => (_(), k("option", {
                            key: g,
                            value: Qo(g)
                          }, p(g), 9, AE))), 128))
                        ], 32)
                      ])) : q("", !0)
                    ]),
                    d("section", kE, [
                      d("h3", {
                        title: m(w)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, p(m(w)("library", "Custom collections")), 9, OE),
                      d("form", {
                        method: "post",
                        action: pe.value,
                        class: "library-saved-collection-save-form",
                        title: vi.value ? "" : m(w)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, xE),
                        d("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: Xo.value
                        }, null, 8, LE),
                        d("label", null, [
                          xe(p(m(w)("library", "Collection name")), 1),
                          d("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: m(w)("library", "e.g. Bremen photo books"),
                            disabled: !vi.value,
                            autocomplete: "off"
                          }, null, 8, RE)
                        ]),
                        d("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !vi.value,
                          title: m(w)("library", "Save current view")
                        }, p(m(w)("library", "Save")), 9, IE)
                      ], 8, NE),
                      se.value.length > 0 ? (_(), k("nav", {
                        key: 0,
                        class: "library-saved-collection-links",
                        "aria-label": m(w)("library", "Saved custom collections")
                      }, [
                        (_(!0), k(ve, null, Be(se.value, (g) => (_(), k("article", {
                          key: g.id,
                          class: "library-saved-collection-card"
                        }, [
                          d("a", {
                            class: "library-saved-collection-link",
                            href: es(g.filters)
                          }, [
                            d("strong", null, p(g.name), 1),
                            d("span", null, p(m(ea)("library", "%n item", "%n items", Number(g.count || 0))), 1)
                          ], 8, DE),
                          d("form", {
                            method: "post",
                            action: ts(g.id),
                            class: "library-saved-collection-delete-form"
                          }, [
                            d("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: Z.value
                            }, null, 8, FE),
                            d("button", $E, p(m(w)("library", "Delete")), 1)
                          ], 8, ME)
                        ]))), 128))
                      ], 8, PE)) : q("", !0)
                    ])
                  ]),
                  Ve.value.length > 0 ? (_(), k("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": m(w)("library", "Batch actions for selected publications")
                  }, [
                    d("summary", UE, [
                      T[26] || (T[26] = d("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      d("span", {
                        class: "library-workspace-panel-title",
                        title: m(w)("library", "Batch actions for selected publications")
                      }, p(m(w)("library", "Batch actions")), 9, BE),
                      d("small", HE, p(m(w)("library", "Batch actions for selected publications")), 1),
                      d("b", jE, p(m(ea)("library", "%n publication selected", "%n publications selected", Ve.value.length)), 1)
                    ]),
                    d("p", VE, p(m(ea)("library", "%n publication selected", "%n publications selected", Ve.value.length)), 1),
                    d("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Ba
                    }, [
                      d("form", {
                        method: "post",
                        action: Se.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, KE),
                        d("label", null, [
                          d("span", null, p(m(w)("library", "Add tag")), 1),
                          d("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: m(w)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, WE)
                        ]),
                        d("button", {
                          type: "submit",
                          class: "button primary",
                          title: m(w)("library", "Applies only to the selected publications.")
                        }, p(m(w)("library", "Apply")), 9, qE)
                      ], 8, GE),
                      d("form", {
                        method: "post",
                        action: ye.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, XE),
                        d("label", null, [
                          d("span", null, p(m(w)("library", "Remove tag")), 1),
                          d("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: m(w)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, ZE)
                        ]),
                        d("button", {
                          type: "submit",
                          class: "button secondary",
                          title: m(w)("library", "Removes the tag only from the selected publications.")
                        }, p(m(w)("library", "Remove")), 9, JE)
                      ], 8, YE),
                      d("form", {
                        method: "post",
                        action: Xe.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, eT),
                        (_(!0), k(ve, null, Be(lt.value, (g) => (_(), k("input", {
                          key: `reset-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, tT))), 128)),
                        T[27] || (T[27] = d("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        d("button", {
                          type: "submit",
                          class: "button secondary",
                          title: m(w)("library", "Batch actions for selected publications")
                        }, p(m(w)("library", "Reset metadata")), 9, nT)
                      ], 8, QE),
                      d("form", {
                        method: "post",
                        action: Te.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, aT),
                        (_(!0), k(ve, null, Be(lt.value, (g) => (_(), k("input", {
                          key: `edit-preview-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, rT))), 128)),
                        d("label", null, [
                          d("span", null, p(m(w)("library", "Field")), 1),
                          d("select", sT, [
                            d("option", oT, p(m(w)("library", "Publication type")), 1),
                            d("option", lT, p(m(w)("library", "Subtitle")), 1),
                            d("option", cT, p(m(w)("library", "Creators")), 1),
                            d("option", uT, p(m(w)("library", "Series / periodical")), 1),
                            d("option", dT, p(m(w)("library", "Publication date")), 1),
                            d("option", fT, p(m(w)("library", "Language")), 1),
                            d("option", hT, p(m(w)("library", "Publisher")), 1),
                            d("option", pT, p(m(w)("library", "Genres")), 1),
                            d("option", vT, p(m(w)("library", "Classifications")), 1)
                          ])
                        ]),
                        d("label", null, [
                          d("span", null, p(m(w)("library", "Value")), 1),
                          d("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: m(w)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, gT)
                        ]),
                        d("button", {
                          type: "submit",
                          class: "button secondary",
                          title: m(w)("library", "Preview first, then apply from the review page.")
                        }, p(m(w)("library", "Preview edit")), 9, mT)
                      ], 8, iT),
                      d("form", {
                        method: "post",
                        action: at.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        d("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Z.value
                        }, null, 8, yT),
                        (_(!0), k(ve, null, Be(lt.value, (g) => (_(), k("input", {
                          key: `cover-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, _T))), 128)),
                        d("button", {
                          type: "submit",
                          class: "button secondary",
                          title: m(w)("library", "Batch actions for selected publications")
                        }, p(m(w)("library", "Fresh covers")), 9, wT)
                      ], 8, bT)
                    ], 32)
                  ], 8, zE)) : q("", !0)
                ], 8, hS),
                d("div", CT, [
                  d("div", null, [
                    qt.value ? (_(), k("p", ST, p(y.value), 1)) : q("", !0),
                    d("h2", ET, p(h.value), 1)
                  ])
                ]),
                B.value ? (_(), k("p", TT, p(B.value), 1)) : q("", !0),
                ge.value ? (_(), k("p", AT, p(ge.value), 1)) : q("", !0),
                J.value ? (_(), k("p", kT, p(J.value), 1)) : q("", !0),
                qt.value ? (_(), k("section", OT, [
                  d("p", NT, p(y.value), 1),
                  d("h3", {
                    id: "library-discovery-heading",
                    title: Ze.value ? m(w)("library", "Items by this creator, sorted by publication context when available.") : bt.value ? m(w)("library", "Items from this publication year, sorted by publication date when available.") : m(w)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(z.value), 9, xT),
                  d("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": m(w)("library", "Discovery summary")
                  }, [
                    d("span", null, p(m(ea)("library", "%n item", "%n items", U.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), k("span", RT, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : q("", !0),
                    O.value?.datedCount ? (_(), k("span", IT, p(O.value.datedCount) + " " + p(m(w)("library", "dated")), 1)) : q("", !0),
                    O.value?.undatedCount > 0 ? (_(), k("span", PT, p(O.value.undatedCount) + " " + p(m(w)("library", "undated")), 1)) : q("", !0)
                  ], 8, LT),
                  ot.value && O.value ? (_(), k("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": m(w)("library", "Publication issue/date context")
                  }, [
                    d("strong", null, p(m(w)("library", "Publication contents")), 1),
                    d("span", null, p(m(ea)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), k("span", MT, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : q("", !0),
                    d("span", null, p(O.value.datedCount) + " " + p(m(w)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), k("span", FT, p(O.value.undatedCount) + " " + p(m(w)("library", "without dates yet")), 1)) : q("", !0),
                    d("span", null, p(m(w)("library", "read-only grouping")), 1)
                  ], 8, DT)) : q("", !0),
                  ot.value && O.value?.issueGroups?.length ? (_(), k("section", $T, [
                    d("div", null, [
                      d("p", zT, p(m(w)("library", "Issue order")), 1),
                      d("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: m(w)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(m(w)("library", "Read-only issue/date grouping")), 9, UT)
                    ]),
                    d("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": m(w)("library", "Visual issue strip")
                    }, [
                      (_(!0), k(ve, null, Be(O.value.issueGroups, (g) => (_(), k("a", {
                        key: `strip-${g.label}`,
                        class: "library-issue-strip-card",
                        href: g.items?.[0]?.detailsUrl || "#"
                      }, [
                        d("span", null, p(g.label), 1),
                        d("strong", null, p(g.items?.[0]?.issueLabel || m(w)("library", "Issue")), 1),
                        d("small", null, p(m(ea)("library", "%n item", "%n items", g.items?.length || 0)), 1)
                      ], 8, HT))), 128))
                    ], 8, BT),
                    O.value.gapRanges?.length ? (_(), k("p", jT, p(m(w)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : q("", !0),
                    (_(!0), k(ve, null, Be(O.value.issueGroups, (g) => (_(), k("div", {
                      key: g.label,
                      class: "library-publication-issue-group"
                    }, [
                      d("h5", null, p(g.label), 1),
                      d("ol", null, [
                        (_(!0), k(ve, null, Be(g.items, (W, Pe) => (_(), k("li", {
                          key: W.itemId
                        }, [
                          d("span", VT, p(W.issueLabel), 1),
                          d("a", {
                            href: W.detailsUrl || "#"
                          }, p(W.title), 9, GT),
                          d("small", null, [
                            xe(p(W.publicationType), 1),
                            W.publicationDate ? (_(), k(ve, { key: 0 }, [
                              xe(" · " + p(W.publicationDate), 1)
                            ], 64)) : q("", !0)
                          ]),
                          d("small", KT, [
                            Pe > 0 ? (_(), k(ve, { key: 0 }, [
                              xe(p(m(w)("library", "Previous issue")), 1)
                            ], 64)) : q("", !0),
                            Pe > 0 && Pe < g.items.length - 1 ? (_(), k(ve, { key: 1 }, [
                              xe(" · ")
                            ], 64)) : q("", !0),
                            Pe < g.items.length - 1 ? (_(), k(ve, { key: 2 }, [
                              xe(p(m(w)("library", "Next issue")), 1)
                            ], 64)) : q("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), k("details", WT, [
                      d("summary", {
                        title: m(w)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(m(w)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, qT)
                    ])) : q("", !0)
                  ])) : q("", !0),
                  d("p", null, [
                    d("a", {
                      href: M.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(m(w)("library", "Back to full catalogue")), 9, YT)
                  ])
                ])) : q("", !0),
                d("div", XT, [
                  d("p", ZT, [
                    xe(p(m(w)("library", "Showing")) + " " + p(U.value.from) + "–" + p(U.value.to) + " " + p(m(w)("library", "of")) + " " + p(U.value.total) + " " + p(m(w)("library", "catalogue items")), 1),
                    je.value.length > 0 ? (_(), k("span", JT, [
                      T[28] || (T[28] = xe(" · ", -1)),
                      d("a", QT, p(m(w)("library", "Clear all filters")), 1)
                    ])) : q("", !0)
                  ]),
                  d("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": m(w)("library", "Catalogue pagination")
                  }, [
                    d("span", tA, [
                      xe(p(m(w)("library", "Page")) + " " + p(U.value.page), 1),
                      U.value.total > 0 ? (_(), k("span", nA, " · " + p(U.value.from) + "–" + p(U.value.to), 1)) : q("", !0)
                    ]),
                    U.value.previousUrl ? (_(), k("a", {
                      key: 0,
                      href: U.value.previousUrl
                    }, p(m(w)("library", "Previous")), 9, iA)) : (_(), k("span", aA, p(m(w)("library", "Previous")), 1)),
                    U.value.nextUrl ? (_(), k("a", {
                      key: 2,
                      href: U.value.nextUrl
                    }, p(m(w)("library", "Next")), 9, rA)) : (_(), k("span", sA, p(m(w)("library", "Next")), 1))
                  ], 8, eA)
                ]),
                je.value.length > 0 ? (_(), k("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": m(w)("library", "Active filters")
                }, [
                  d("span", null, p(m(w)("library", "Active filters")), 1),
                  (_(!0), k(ve, null, Be(je.value, (g) => (_(), k("a", {
                    key: g.key,
                    href: Gi(g.key),
                    class: "library-filter-chip",
                    "aria-label": `${m(w)("library", "Remove filter")}: ${g.label}`
                  }, [
                    d("strong", null, p(g.label) + ":", 1),
                    xe(" " + p(g.value) + " ", 1),
                    T[29] || (T[29] = d("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, lA))), 128))
                ], 8, oA)) : q("", !0),
                f.value.length === 0 ? (_(), k("div", {
                  key: 5,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": x.value || $.value, "library-filter-empty-state": V.value && !x.value && !$.value }]),
                  role: "status"
                }, [
                  x.value ? (_(), k(ve, { key: 0 }, [
                    d("h3", {
                      title: m(w)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(m(w)("library", "Start with one Library root")), 9, cA),
                    d("p", uA, [
                      d("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(m(w)("library", "Add a Library root")), 9, dA),
                      d("span", fA, p(m(w)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : $.value ? (_(), k(ve, { key: 1 }, [
                    d("h3", {
                      title: m(w)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(m(w)("library", "No enabled Library roots")), 9, hA),
                    d("p", pA, [
                      d("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(m(w)("library", "Open Library settings")), 9, vA)
                    ])
                  ], 64)) : V.value ? (_(), k(ve, { key: 2 }, [
                    d("h3", {
                      title: m(w)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(m(w)("library", "No matches for the current filters")), 9, gA),
                    d("p", mA, [
                      d("a", {
                        href: hi(),
                        class: "button secondary"
                      }, p(m(w)("library", "Clear search")), 9, bA),
                      d("a", yA, p(m(w)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), k(ve, { key: 3 }, [
                    d("h3", {
                      title: m(w)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(m(w)("library", "No catalogue items yet")), 9, _A),
                    d("p", wA, [
                      d("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(m(w)("library", "Run a scan from settings")), 9, CA)
                    ])
                  ], 64))
                ], 2)) : q("", !0),
                f.value.length > 0 ? (_(), k("label", SA, [
                  d("input", {
                    type: "checkbox",
                    checked: Ve.value.length === f.value.length,
                    onChange: Di
                  }, null, 40, EA),
                  xe(" " + p(m(w)("library", "Select all publications on this page")), 1)
                ])) : q("", !0),
                f.value.length > 0 ? (_(), k("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", Ie.value])
                }, [
                  (_(!0), k(ve, null, Be(f.value, (g) => (_(), k("article", {
                    key: g.id,
                    class: Ee(["library-cover-card", { "library-cover-card--open": Ut[g.id], "library-cover-card--cover-loaded": An(g) === "loaded", "library-cover-card--cover-error": An(g) === "error" }])
                  }, [
                    d("label", TA, [
                      d("input", {
                        type: "checkbox",
                        checked: Pt.value.has(Number(g.id)),
                        "aria-label": `${m(w)("library", "Select publication")}: ${g.title}`,
                        onChange: (W) => Pi(g.id, W.currentTarget.checked)
                      }, null, 40, AA)
                    ]),
                    d("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${g.id} library-card-title-${g.id}`,
                      onClick: (W) => fi(g, W)
                    }, [
                      d("span", {
                        id: `library-details-action-${g.id}`,
                        class: "hidden-visually"
                      }, p(m(w)("library", "Details")), 9, OA),
                      d("span", NA, [
                        An(g) === "loading" ? (_(), k("span", xA)) : q("", !0),
                        d("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": An(g) === "loaded" }]),
                          src: g.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (W) => qa(g),
                          onError: (W) => Q(g)
                        }, null, 42, LA),
                        An(g) === "error" ? (_(), k("span", RA, p(m(w)("library", "Cover unavailable")), 1)) : q("", !0)
                      ])
                    ], 8, kA),
                    d("form", {
                      method: "post",
                      action: g.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: et((W) => Je(g, W), ["prevent"])
                    }, [
                      d("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Z.value
                      }, null, 8, PA),
                      T[30] || (T[30] = d("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      d("input", {
                        type: "hidden",
                        name: "starred",
                        value: g.starred ? "0" : "1"
                      }, null, 8, DA),
                      d("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": g.starred }]),
                        "aria-pressed": g.starred ? "true" : "false",
                        title: g.starred ? m(w)("library", "Unstar this publication") : m(w)("library", "Star this publication"),
                        "aria-label": g.starred ? m(w)("library", "Unstar this publication") : m(w)("library", "Star this publication"),
                        "aria-busy": _e[g.id] ? "true" : void 0,
                        disabled: _e[g.id],
                        onClick: et((W) => Je(g, W), ["prevent"])
                      }, p(g.starred ? "★" : "☆"), 11, MA),
                      Ue[g.id] ? (_(), k("span", {
                        key: 0,
                        "data-library-star-error": g.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(Ue[g.id]), 9, FA)) : q("", !0)
                    ], 40, IA),
                    d("div", $A, [
                      d("div", zA, [
                        d("h3", {
                          id: `library-card-title-${g.id}`
                        }, [
                          d("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (W) => fi(g, W)
                          }, [
                            g.starred ? (_(), k("span", {
                              key: 0,
                              class: "library-star-marker",
                              "aria-label": m(w)("library", "Starred")
                            }, "★", 8, HA)) : q("", !0),
                            d("bdi", jA, p(g.title), 1)
                          ], 8, BA)
                        ], 8, UA),
                        d("div", VA, [
                          d("a", {
                            class: "library-cover-read",
                            href: g.openUrl
                          }, p(m(w)("library", "Open")), 9, GA),
                          me(m(Wc), {
                            "aria-label": m(w)("library", "More actions")
                          }, {
                            default: Oe(() => [
                              me(m($l), {
                                href: g.filesUrl
                              }, {
                                default: Oe(() => [
                                  xe(p(m(w)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              me(m($l), {
                                href: g.downloadUrl
                              }, {
                                default: Oe(() => [
                                  xe(p(m(w)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              me(m($l), {
                                href: g.detailsUrl
                              }, {
                                default: Oe(() => [
                                  xe(p(m(w)("library", "Advanced details")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            _: 2
                          }, 1032, ["aria-label"])
                        ])
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : q("", !0),
                f.value.length > 0 ? (_(), k("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": m(w)("library", "Catalogue pagination")
                }, [
                  d("span", WA, [
                    xe(p(m(w)("library", "Page")) + " " + p(U.value.page), 1),
                    U.value.total > 0 ? (_(), k("span", qA, " · " + p(U.value.from) + "–" + p(U.value.to), 1)) : q("", !0)
                  ]),
                  U.value.previousUrl ? (_(), k("a", {
                    key: 0,
                    href: U.value.previousUrl
                  }, p(m(w)("library", "Previous")), 9, YA)) : (_(), k("span", XA, p(m(w)("library", "Previous")), 1)),
                  U.value.nextUrl ? (_(), k("a", {
                    key: 2,
                    href: U.value.nextUrl
                  }, p(m(w)("library", "Next")), 9, ZA)) : (_(), k("span", JA, p(m(w)("library", "Next")), 1))
                ], 8, KA)) : q("", !0)
              ]))
            ], 8, pC)
          ]),
          _: 1
        }),
        me(m(Xw), {
          ref_key: "sidebarComponent",
          ref: En,
          class: "library-native-item-sidebar",
          open: $n.value,
          "no-toggle": "",
          loading: vt.loading,
          name: Ce.value?.title || m(w)("library", "Publication details"),
          subname: Ce.value?.creators || "",
          role: Tn.value ? "dialog" : void 0,
          "aria-modal": Tn.value ? "true" : void 0,
          "aria-labelledby": Tn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Tn.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: ja,
          onClosed: Yo,
          onClose: zi
        }, {
          default: Oe(() => [
            d("div", QA, [
              d("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Ha,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Ce.value?.title || m(w)("library", "Publication details")), 513),
              vt.loading && !Ce.value ? (_(), k("p", e2, p(m(w)("library", "Loading publication details…")), 1)) : vt.error ? (_(), k("div", {
                key: 1,
                class: "library-sidebar-state",
                role: vt.missing ? "status" : "alert"
              }, [
                d("p", null, p(vt.error), 1),
                vt.missing ? q("", !0) : (_(), k("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: T[18] || (T[18] = (g) => di(mn.value, { historyMode: "none" }))
                }, p(m(w)("library", "Try again")), 1))
              ], 8, t2)) : Ce.value ? (_(), k(ve, { key: 2 }, [
                d("p", n2, p(m(w)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                d("span", i2, p(m(w)("library", "Cover for")), 1),
                d("img", {
                  class: "library-detail-drawer-cover",
                  src: Ce.value.coverUrl,
                  alt: "",
                  "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                  loading: "lazy"
                }, null, 8, a2),
                d("p", r2, [
                  d("bdi", s2, p(Ce.value.publicationType || m(w)("library", "Publication")), 1),
                  Ce.value.extension ? (_(), k("span", o2, [
                    T[31] || (T[31] = xe(" · ", -1)),
                    d("bdi", l2, p(ns(Ce.value.extension)), 1)
                  ])) : q("", !0)
                ]),
                Ce.value.description ? (_(), k("p", c2, [
                  d("bdi", u2, p(Ce.value.description), 1)
                ])) : q("", !0),
                d("dl", d2, [
                  Ce.value.publication ? (_(), k("div", f2, [
                    d("dt", null, p(m(w)("library", "Series")), 1),
                    d("dd", null, [
                      d("bdi", h2, p(Ce.value.publication), 1)
                    ])
                  ])) : q("", !0),
                  Ce.value.publicationDate ? (_(), k("div", p2, [
                    d("dt", null, p(m(w)("library", "Date")), 1),
                    d("dd", null, [
                      d("bdi", v2, p(Ce.value.publicationDate), 1)
                    ])
                  ])) : q("", !0),
                  Ce.value.publisher ? (_(), k("div", g2, [
                    d("dt", null, p(m(w)("library", "Publisher")), 1),
                    d("dd", null, [
                      d("bdi", m2, p(Ce.value.publisher), 1)
                    ])
                  ])) : q("", !0),
                  Ce.value.language ? (_(), k("div", b2, [
                    d("dt", null, p(m(w)("library", "Language")), 1),
                    d("dd", null, [
                      d("bdi", y2, p(Ce.value.language), 1)
                    ])
                  ])) : q("", !0),
                  Ce.value.shelf ? (_(), k("div", _2, [
                    d("dt", null, p(m(w)("library", "Shelf")), 1),
                    d("dd", null, [
                      d("bdi", w2, p(Ce.value.shelf), 1)
                    ])
                  ])) : q("", !0),
                  Ce.value.cachedPath ? (_(), k("div", C2, [
                    d("dt", null, p(m(w)("library", "File")), 1),
                    d("dd", null, [
                      d("bdi", S2, p(Ce.value.cachedPath), 1)
                    ])
                  ])) : q("", !0)
                ]),
                Ce.value.metadataSource || Object.keys(Ce.value.fieldSources || {}).length ? (_(), k("section", E2, [
                  d("h3", T2, p(m(w)("library", "Metadata provenance")), 1),
                  Ce.value.metadataSource ? (_(), k("p", A2, [
                    xe(p(m(w)("library", "Primary source")) + ": ", 1),
                    d("bdi", k2, p(Ce.value.metadataSource), 1)
                  ])) : q("", !0),
                  d("dl", null, [
                    (_(!0), k(ve, null, Be(Ce.value.fieldSources, (g, W) => (_(), k("div", { key: W }, [
                      d("dt", null, [
                        d("bdi", O2, p(W), 1)
                      ]),
                      d("dd", null, [
                        d("bdi", N2, p(g), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : q("", !0),
                ga(Ce.value).length ? (_(), k("section", x2, [
                  d("h3", L2, p(m(w)("library", "Review context")), 1),
                  d("dl", null, [
                    (_(!0), k(ve, null, Be(ga(Ce.value), (g) => (_(), k("div", {
                      key: g.field
                    }, [
                      d("dt", null, [
                        d("bdi", R2, p(g.field), 1),
                        T[32] || (T[32] = xe(" · ", -1)),
                        d("bdi", I2, p(g.sourceProvenance), 1)
                      ]),
                      d("dd", null, [
                        d("bdi", P2, p(g.currentValue || "—"), 1),
                        T[33] || (T[33] = xe(" → ", -1)),
                        d("bdi", D2, p(g.scannerCandidate || "—"), 1)
                      ])
                    ]))), 128))
                  ])
                ])) : q("", !0),
                d("p", M2, [
                  d("a", {
                    class: "button primary",
                    href: Ce.value.openUrl
                  }, p(m(w)("library", "Open")), 9, F2),
                  d("a", {
                    class: "button secondary",
                    href: Ce.value.filesUrl
                  }, p(m(w)("library", "Show in Files")), 9, $2),
                  d("a", {
                    class: "button secondary",
                    href: Ce.value.downloadUrl
                  }, p(m(w)("library", "Download")), 9, z2),
                  d("a", {
                    class: "button secondary",
                    href: Ce.value.detailsUrl
                  }, p(m(w)("library", "Advanced details")), 9, U2)
                ]),
                d("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": m(w)("library", "Browse neighbouring items")
                }, [
                  d("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !$i.value,
                    onClick: T[19] || (T[19] = (g) => ma($i.value))
                  }, p(m(w)("library", "Previous item")), 9, H2),
                  d("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !ui.value,
                    onClick: T[20] || (T[20] = (g) => ma(ui.value))
                  }, p(m(w)("library", "Next item")), 9, j2)
                ], 8, B2)
              ], 64)) : q("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function W2() {
  window.LibraryStartupWatchdog?.fail();
}
function q2(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Dc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !q2(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  nm(K2, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  W2(), console.error("[library] Vue startup failed", e);
}
