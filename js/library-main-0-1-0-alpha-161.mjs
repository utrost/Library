// @__NO_SIDE_EFFECTS__
function gc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, ka = [], fn = () => {
}, qd = () => !1, _s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ws = (e) => e.startsWith("onUpdate:"), pt = Object.assign, bc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sh = Object.prototype.hasOwnProperty, qe = (e, t) => Sh.call(e, t), Ee = Array.isArray, Ei = (e) => $r(e) === "[object Map]", ta = (e) => $r(e) === "[object Set]", Jc = (e) => $r(e) === "[object Date]", Oe = (e) => typeof e == "function", at = (e) => typeof e == "string", Cn = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", Wd = (e) => (We(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), Yd = Object.prototype.toString, $r = (e) => Yd.call(e), Th = (e) => $r(e).slice(8, -1), Zd = (e) => $r(e) === "[object Object]", yc = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ar = /* @__PURE__ */ gc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, kh = /-\w/g, Rt = Cs(
  (e) => e.replace(kh, (t) => t.slice(1).toUpperCase())
), Ah = /\B([A-Z])/g, oi = Cs(
  (e) => e.replace(Ah, "-$1").toLowerCase()
), Es = Cs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Js = Cs(
  (e) => e ? `on${Es(e)}` : ""
), wt = (e, t) => !Object.is(e, t), po = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xh = (e) => {
  const t = at(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Qc;
const Ts = () => Qc || (Qc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pn(e) {
  if (Ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = at(i) ? Lh(i) : pn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (at(e) || We(e))
    return e;
}
const Nh = /;(?![^(]*\))/g, Oh = /:([^]+)/, Rh = /\/\*[^]*?\*\//g;
function Lh(e) {
  const t = {};
  return e.replace(Rh, "").split(Nh).forEach((n) => {
    if (n) {
      const i = n.split(Oh);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (Ee(e))
    for (let n = 0; n < e.length; n++) {
      const i = xe(e[n]);
      i && (t += i + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function _o(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !at(t) && (e.class = xe(t)), n && (e.style = pn(n)), e;
}
const Ph = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ih = /* @__PURE__ */ gc(Ph);
function Jd(e) {
  return !!e || e === "";
}
function Dh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ai(e[i], t[i]);
  return n;
}
function eu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Ai(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ai(e, t) {
  if (e === t) return !0;
  let n = Jc(e), i = Jc(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Cn(e), i = Cn(t), n || i)
    return e === t;
  if (n = Ee(e), i = Ee(t), n || i)
    return n && i ? Dh(e, t) : !1;
  if (n = We(e), i = We(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Ei(e), i = Ei(t), n || i || (n = ta(e), i = ta(t), n || i))
      return n && i ? eu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const s = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (s && !l || !s && l || !Ai(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Fh(e, t) {
  return e.findIndex((n) => Ai(n, t));
}
const Qd = (e) => !!(e && e.__v_isRef === !0), f = (e) => at(e) ? e : e == null ? "" : Ee(e) || We(e) && (e.toString === Yd || !Oe(e.toString)) ? Qd(e) ? f(e.value) : JSON.stringify(e, ef, 2) : String(e), ef = (e, t) => Qd(t) ? ef(e, t.value) : Ei(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Qs(i, r) + " =>"] = a, n),
    {}
  )
} : ta(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qs(n))
} : Cn(t) ? Qs(t) : We(t) && !Ee(t) && !Zd(t) ? String(t) : t, Qs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Mh(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let _t;
class $h {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && _t && (_t.active ? (this.parent = _t, this.index = (_t.scopes || (_t.scopes = [])).push(
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
      const n = _t;
      try {
        return _t = this, t();
      } finally {
        _t = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _t, _t = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (_t === this)
        _t = this.prevScope;
      else {
        let t = _t;
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
function zh() {
  return _t;
}
let nt;
const el = /* @__PURE__ */ new WeakSet();
class tf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _t && (_t.active ? _t.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, el.has(this) && (el.delete(this), this.trigger()));
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
    this.flags |= 2, tu(this), rf(this);
    const t = nt, n = _n;
    nt = this, _n = !0;
    try {
      return this.fn();
    } finally {
      of(this), nt = t, _n = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cc(t);
      this.deps = this.depsTail = void 0, tu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? el.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $l(this) && this.run();
  }
  get dirty() {
    return $l(this);
  }
}
let nf = 0, rr, or;
function af(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = or, or = e;
    return;
  }
  e.next = rr, rr = e;
}
function _c() {
  nf++;
}
function wc() {
  if (--nf > 0)
    return;
  if (or) {
    let t = or;
    for (or = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; rr; ) {
    let t = rr;
    for (rr = void 0; t; ) {
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
function of(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Cc(i), Uh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function $l(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _r) || (e.globalVersion = _r, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$l(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = nt, i = _n;
  nt = e, _n = !0;
  try {
    rf(e);
    const a = e.fn(e._value);
    (t.version === 0 || wt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    nt = n, _n = i, of(e), e.flags &= -3;
  }
}
function Cc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Cc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Uh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _n = !0;
const lf = [];
function ni() {
  lf.push(_n), _n = !1;
}
function ii() {
  const e = lf.pop();
  _n = e === void 0 ? !0 : e;
}
function tu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = nt;
    nt = void 0;
    try {
      t();
    } finally {
      nt = n;
    }
  }
}
let _r = 0;
class Bh {
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
    if (!nt || !_n || nt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== nt)
      n = this.activeLink = new Bh(nt, this), nt.deps ? (n.prevDep = nt.depsTail, nt.depsTail.nextDep = n, nt.depsTail = n) : nt.deps = nt.depsTail = n, cf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = nt.depsTail, n.nextDep = void 0, nt.depsTail.nextDep = n, nt.depsTail = n, nt.deps === n && (nt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, _r++, this.notify(t);
  }
  notify(t) {
    _c();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      wc();
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
const zl = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ Symbol(
  ""
), Ul = /* @__PURE__ */ Symbol(
  ""
), wr = /* @__PURE__ */ Symbol(
  ""
);
function xt(e, t, n) {
  if (_n && nt) {
    let i = zl.get(e);
    i || zl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new ks()), a.map = i, a.key = n), a.track();
  }
}
function Yn(e, t, n, i, a, r) {
  const o = zl.get(e);
  if (!o) {
    _r++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (_c(), t === "clear")
    o.forEach(s);
  else {
    const l = Ee(e), p = l && yc(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((m, b) => {
        (b === "length" || b === wr || !Cn(b) && b >= c) && s(m);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), p && s(o.get(wr)), t) {
        case "add":
          l ? p && s(o.get("length")) : (s(o.get(Xi)), Ei(e) && s(o.get(Ul)));
          break;
        case "delete":
          l || (s(o.get(Xi)), Ei(e) && s(o.get(Ul)));
          break;
        case "set":
          Ei(e) && s(o.get(Xi));
          break;
      }
  }
  wc();
}
function ga(e) {
  const t = /* @__PURE__ */ Ke(e);
  return t === e ? t : (xt(t, "iterate", wr), /* @__PURE__ */ hn(e) ? t : t.map(En));
}
function As(e) {
  return xt(e = /* @__PURE__ */ Ke(e), "iterate", wr), e;
}
function Ln(e, t) {
  return /* @__PURE__ */ ai(e) ? Ia(/* @__PURE__ */ Ji(e) ? En(t) : t) : En(t);
}
const Hh = {
  __proto__: null,
  [Symbol.iterator]() {
    return tl(this, Symbol.iterator, (e) => Ln(this, e));
  },
  concat(...e) {
    return ga(this).concat(
      ...e.map((t) => Ee(t) ? ga(t) : t)
    );
  },
  entries() {
    return tl(this, "entries", (e) => (e[1] = Ln(this, e[1]), e));
  },
  every(e, t) {
    return Hn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Hn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Ln(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Hn(
      this,
      "find",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Hn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Hn(
      this,
      "findLast",
      e,
      t,
      (n) => Ln(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Hn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Hn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return nl(this, "includes", e);
  },
  indexOf(...e) {
    return nl(this, "indexOf", e);
  },
  join(e) {
    return ga(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return nl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Hn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ba(this, "pop");
  },
  push(...e) {
    return Ba(this, "push", e);
  },
  reduce(e, ...t) {
    return nu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return nu(this, "reduceRight", e, t);
  },
  shift() {
    return Ba(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Hn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ba(this, "splice", e);
  },
  toReversed() {
    return ga(this).toReversed();
  },
  toSorted(e) {
    return ga(this).toSorted(e);
  },
  toSpliced(...e) {
    return ga(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ba(this, "unshift", e);
  },
  values() {
    return tl(this, "values", (e) => Ln(this, e));
  }
};
function tl(e, t, n) {
  const i = As(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ hn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const jh = Array.prototype;
function Hn(e, t, n, i, a, r) {
  const o = As(e), s = o !== e && !/* @__PURE__ */ hn(e), l = o[t];
  if (l !== jh[t]) {
    const m = l.apply(e, r);
    return s ? En(m) : m;
  }
  let p = n;
  o !== e && (s ? p = function(m, b) {
    return n.call(this, Ln(e, m), b, e);
  } : n.length > 2 && (p = function(m, b) {
    return n.call(this, m, b, e);
  }));
  const c = l.call(o, p, i);
  return s && a ? a(c) : c;
}
function nu(e, t, n, i) {
  const a = As(e), r = a !== e && !/* @__PURE__ */ hn(e);
  let o = n, s = !1;
  a !== e && (r ? (s = i.length === 0, o = function(p, c, m) {
    return s && (s = !1, p = Ln(e, p)), n.call(this, p, Ln(e, c), m, e);
  }) : n.length > 3 && (o = function(p, c, m) {
    return n.call(this, p, c, m, e);
  }));
  const l = a[t](o, ...i);
  return s ? Ln(e, l) : l;
}
function nl(e, t, n) {
  const i = /* @__PURE__ */ Ke(e);
  xt(i, "iterate", wr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Tc(n[0]) ? (n[0] = /* @__PURE__ */ Ke(n[0]), i[t](...n)) : a;
}
function Ba(e, t, n = []) {
  ni(), _c();
  const i = (/* @__PURE__ */ Ke(e))[t].apply(e, n);
  return wc(), ii(), i;
}
const Vh = /* @__PURE__ */ gc("__proto__,__v_isRef,__isVue"), uf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Cn)
);
function Kh(e) {
  Cn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ke(this);
  return xt(t, "has", e), t.hasOwnProperty(e);
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
      return i === (a ? r ? tm : mf : r ? hf : pf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Ee(t);
    if (!a) {
      let l;
      if (o && (l = Hh[n]))
        return l;
      if (n === "hasOwnProperty")
        return Kh;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Lt(t) ? t : i
    );
    if ((Cn(n) ? uf.has(n) : Vh(n)) || (a || xt(t, "get", n), r))
      return s;
    if (/* @__PURE__ */ Lt(s)) {
      const l = o && yc(n) ? s : s.value;
      return a && We(l) ? /* @__PURE__ */ Cr(l) : l;
    }
    return We(s) ? a ? /* @__PURE__ */ Cr(s) : /* @__PURE__ */ Gt(s) : s;
  }
}
class ff extends df {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Ee(t) && yc(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ ai(r);
      if (!/* @__PURE__ */ hn(i) && !/* @__PURE__ */ ai(i) && (r = /* @__PURE__ */ Ke(r), i = /* @__PURE__ */ Ke(i)), !o && /* @__PURE__ */ Lt(r) && !/* @__PURE__ */ Lt(i))
        return p || (r.value = i), !0;
    }
    const s = o ? Number(n) < t.length : qe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Lt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ke(a) && l && (s ? wt(i, r) && Yn(t, "set", n, i) : Yn(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && Yn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Cn(n) || !uf.has(n)) && xt(t, "has", n), i;
  }
  ownKeys(t) {
    return xt(
      t,
      "iterate",
      Ee(t) ? "length" : Xi
    ), Reflect.ownKeys(t);
  }
}
class Gh extends df {
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
const qh = /* @__PURE__ */ new ff(), Wh = /* @__PURE__ */ new Gh(), Yh = /* @__PURE__ */ new ff(!0);
const Bl = (e) => e, Jr = (e) => Reflect.getPrototypeOf(e);
function Zh(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ke(a), o = Ei(r), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, p = a[e](...i), c = n ? Bl : t ? Ia : En;
    return !t && xt(
      r,
      "iterate",
      l ? Ul : Xi
    ), pt(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: m, done: b } = p.next();
          return b ? { value: m, done: b } : {
            value: s ? [c(m[0]), c(m[1])] : c(m),
            done: b
          };
        }
      }
    );
  };
}
function Qr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xh(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ke(r), s = /* @__PURE__ */ Ke(a);
      e || (wt(a, s) && xt(o, "get", a), xt(o, "get", s));
      const { has: l } = Jr(o), p = t ? Bl : e ? Ia : En;
      if (l.call(o, a))
        return p(r.get(a));
      if (l.call(o, s))
        return p(r.get(s));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && xt(/* @__PURE__ */ Ke(a), "iterate", Xi), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ke(r), s = /* @__PURE__ */ Ke(a);
      return e || (wt(a, s) && xt(o, "has", a), xt(o, "has", s)), a === s ? r.has(a) : r.has(a) || r.has(s);
    },
    forEach(a, r) {
      const o = this, s = o.__v_raw, l = /* @__PURE__ */ Ke(s), p = t ? Bl : e ? Ia : En;
      return !e && xt(l, "iterate", Xi), s.forEach((c, m) => a.call(r, p(c), p(m), o));
    }
  };
  return pt(
    n,
    e ? {
      add: Qr("add"),
      set: Qr("set"),
      delete: Qr("delete"),
      clear: Qr("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ke(this), o = Jr(r), s = /* @__PURE__ */ Ke(a), l = !t && !/* @__PURE__ */ hn(a) && !/* @__PURE__ */ ai(a) ? s : a;
        return o.has.call(r, l) || wt(a, l) && o.has.call(r, a) || wt(s, l) && o.has.call(r, s) || (r.add(l), Yn(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ hn(r) && !/* @__PURE__ */ ai(r) && (r = /* @__PURE__ */ Ke(r));
        const o = /* @__PURE__ */ Ke(this), { has: s, get: l } = Jr(o);
        let p = s.call(o, a);
        p || (a = /* @__PURE__ */ Ke(a), p = s.call(o, a));
        const c = l.call(o, a);
        return o.set(a, r), p ? wt(r, c) && Yn(o, "set", a, r) : Yn(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ke(this), { has: o, get: s } = Jr(r);
        let l = o.call(r, a);
        l || (a = /* @__PURE__ */ Ke(a), l = o.call(r, a)), s && s.call(r, a);
        const p = r.delete(a);
        return l && Yn(r, "delete", a, void 0), p;
      },
      clear() {
        const a = /* @__PURE__ */ Ke(this), r = a.size !== 0, o = a.clear();
        return r && Yn(
          a,
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
  ].forEach((a) => {
    n[a] = Zh(a, e, t);
  }), n;
}
function Ec(e, t) {
  const n = Xh(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    qe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Jh = {
  get: /* @__PURE__ */ Ec(!1, !1)
}, Qh = {
  get: /* @__PURE__ */ Ec(!1, !0)
}, em = {
  get: /* @__PURE__ */ Ec(!0, !1)
};
const pf = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new WeakMap(), mf = /* @__PURE__ */ new WeakMap(), tm = /* @__PURE__ */ new WeakMap();
function nm(e) {
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
function Gt(e) {
  return /* @__PURE__ */ ai(e) ? e : Sc(
    e,
    !1,
    qh,
    Jh,
    pf
  );
}
// @__NO_SIDE_EFFECTS__
function im(e) {
  return Sc(
    e,
    !1,
    Yh,
    Qh,
    hf
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return Sc(
    e,
    !0,
    Wh,
    em,
    mf
  );
}
function Sc(e, t, n, i, a) {
  if (!We(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = nm(Th(e));
  if (o === 0)
    return e;
  const s = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return /* @__PURE__ */ ai(e) ? /* @__PURE__ */ Ji(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Tc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ke(t) : e;
}
function am(e) {
  return !qe(e, "__v_skip") && Object.isExtensible(e) && Xd(e, "__v_skip", !0), e;
}
const En = (e) => We(e) ? /* @__PURE__ */ Gt(e) : e, Ia = (e) => We(e) ? /* @__PURE__ */ Cr(e) : e;
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return gf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function vf(e) {
  return gf(e, !0);
}
function gf(e, t) {
  return /* @__PURE__ */ Lt(e) ? e : new rm(e, t);
}
class rm {
  constructor(t, n) {
    this.dep = new ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ke(t), this._value = n ? t : En(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ hn(t) || /* @__PURE__ */ ai(t);
    t = i ? t : /* @__PURE__ */ Ke(t), wt(t, n) && (this._rawValue = t, this._value = i ? t : En(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Lt(e) ? e.value : e;
}
function Qn(e) {
  return Oe(e) ? e() : g(e);
}
const om = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Lt(a) && !/* @__PURE__ */ Lt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function bf(e) {
  return /* @__PURE__ */ Ji(e) ? e : new Proxy(e, om);
}
class sm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new ks(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function lm(e) {
  return new sm(e);
}
class cm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _r - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return af(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function um(e, t, n = !1) {
  let i, a;
  return Oe(e) ? i = e : (i = e.get, a = e.set), new cm(i, a, n);
}
const eo = {}, wo = /* @__PURE__ */ new WeakMap();
let Hi;
function dm(e, t = !1, n = Hi) {
  if (n) {
    let i = wo.get(n);
    i || wo.set(n, i = []), i.push(e);
  }
}
function fm(e, t, n = Ve) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: s, call: l } = n, p = (z) => a ? z : /* @__PURE__ */ hn(z) || a === !1 || a === 0 ? Zn(z, 1) : Zn(z);
  let c, m, b, S, x = !1, k = !1;
  if (/* @__PURE__ */ Lt(e) ? (m = () => e.value, x = /* @__PURE__ */ hn(e)) : /* @__PURE__ */ Ji(e) ? (m = () => p(e), x = !0) : Ee(e) ? (k = !0, x = e.some((z) => /* @__PURE__ */ Ji(z) || /* @__PURE__ */ hn(z)), m = () => e.map((z) => {
    if (/* @__PURE__ */ Lt(z))
      return z.value;
    if (/* @__PURE__ */ Ji(z))
      return p(z);
    if (Oe(z))
      return l ? l(z, 2) : z();
  })) : Oe(e) ? t ? m = l ? () => l(e, 2) : e : m = () => {
    if (b) {
      ni();
      try {
        b();
      } finally {
        ii();
      }
    }
    const z = Hi;
    Hi = c;
    try {
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      Hi = z;
    }
  } : m = fn, t && a) {
    const z = m, ce = a === !0 ? 1 / 0 : a;
    m = () => Zn(z(), ce);
  }
  const N = zh(), O = () => {
    c.stop(), N && N.active && bc(N.effects, c);
  };
  if (r && t) {
    const z = t;
    t = (...ce) => {
      const de = z(...ce);
      return O(), de;
    };
  }
  let F = k ? new Array(e.length).fill(eo) : eo;
  const B = (z) => {
    if (!(!(c.flags & 1) || !c.dirty && !z))
      if (t) {
        const ce = c.run();
        if (z || a || x || (k ? ce.some((de, te) => wt(de, F[te])) : wt(ce, F))) {
          b && b();
          const de = Hi;
          Hi = c;
          try {
            const te = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              F === eo ? void 0 : k && F[0] === eo ? [] : F,
              S
            ];
            F = ce, l ? l(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            Hi = de;
          }
        }
      } else
        c.run();
  };
  return s && s(B), c = new tf(m), c.scheduler = o ? () => o(B, !1) : B, S = (z) => dm(z, !1, c), b = c.onStop = () => {
    const z = wo.get(c);
    if (z) {
      if (l)
        l(z, 4);
      else
        for (const ce of z) ce();
      wo.delete(c);
    }
  }, t ? i ? B(!0) : F = c.run() : o ? o(B.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function Zn(e, t = 1 / 0, n) {
  if (t <= 0 || !We(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Lt(e))
    Zn(e.value, t, n);
  else if (Ee(e))
    for (let i = 0; i < e.length; i++)
      Zn(e[i], t, n);
  else if (ta(e) || Ei(e))
    e.forEach((i) => {
      Zn(i, t, n);
    });
  else if (Zd(e)) {
    for (const i in e)
      Zn(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Zn(e[i], t, n);
  }
  return e;
}
function zr(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    xs(a, t, n);
  }
}
function mn(e, t, n, i) {
  if (Oe(e)) {
    const a = zr(e, t, n, i);
    return a && Wd(a) && a.catch((r) => {
      xs(r, t, n);
    }), a;
  }
  if (Ee(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(mn(e[r], t, n, i));
    return a;
  }
}
function xs(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ve;
  if (t) {
    let s = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let m = 0; m < c.length; m++)
          if (c[m](e, l, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (r) {
      ni(), zr(r, null, 10, [
        e,
        l,
        p
      ]), ii();
      return;
    }
  }
  pm(e, n, a, i, o);
}
function pm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const zt = [];
let Nn = -1;
const Aa = [];
let wi = null, Ea = 0;
const yf = /* @__PURE__ */ Promise.resolve();
let Co = null;
function Qi(e) {
  const t = Co || yf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hm(e) {
  let t = Nn + 1, n = zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = zt[i], r = Er(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function kc(e) {
  if (!(e.flags & 1)) {
    const t = Er(e), n = zt[zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Er(n) ? zt.push(e) : zt.splice(hm(t), 0, e), e.flags |= 1, _f();
  }
}
function _f() {
  Co || (Co = yf.then(Ef));
}
function wf(e) {
  if (!Ee(e))
    wi && e.id === -1 ? wi.splice(Ea + 1, 0, e) : e.flags & 1 || (Aa.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Aa.push(e[t]);
  _f();
}
function iu(e, t, n = Nn + 1) {
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
  if (Aa.length) {
    const t = [...new Set(Aa)].sort(
      (n, i) => Er(n) - Er(i)
    );
    if (Aa.length = 0, wi) {
      for (let n = 0; n < t.length; n++)
        wi.push(t[n]);
      return;
    }
    for (wi = t, Ea = 0; Ea < wi.length; Ea++) {
      const n = wi[Ea];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    wi = null, Ea = 0;
  }
}
const Er = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ef(e) {
  try {
    for (Nn = 0; Nn < zt.length; Nn++) {
      const t = zt[Nn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), zr(
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
    Nn = -1, zt.length = 0, Cf(), Co = null, (zt.length || Aa.length) && Ef();
  }
}
let Et = null, Ns = null;
function Eo(e) {
  const t = Et;
  return Et = e, Ns = e && e.type.__scopeId || null, t;
}
function mm(e) {
  Ns = e;
}
function vm() {
  Ns = null;
}
const gm = (e) => Le;
function Le(e, t = Et, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && xo(-1);
    const r = Eo(t), o = ei.length;
    let s;
    try {
      s = e(...a);
    } finally {
      for (let l = ei.length; l > o; l--) Pc();
      Eo(r), i._d && xo(1);
    }
    return s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function tt(e, t) {
  if (Et === null)
    return e;
  const n = Ds(Et), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, s, l = Ve] = t[a];
    r && (Oe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Zn(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function Fi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const s = a[o];
    r && (s.oldValue = r[o].value);
    let l = s.dir[i];
    l && (ni(), mn(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), ii());
  }
}
function cn(e, t) {
  if (Ot) {
    let n = Ot.provides;
    const i = Ot.parent && Ot.parent.provides;
    i === n && (n = Ot.provides = Object.create(i)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const i = ia();
  if (i || Na) {
    let a = Na ? Na._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Oe(t) ? t.call(i && i.proxy) : t;
  }
}
const bm = /* @__PURE__ */ Symbol.for("v-scx"), ym = () => Nt(bm);
function _m(e, t) {
  return Os(e, null, t);
}
function wm(e, t) {
  return Os(
    e,
    null,
    { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return Os(e, t, n);
}
function Os(e, t, n = Ve) {
  const { immediate: i, deep: a, flush: r, once: o } = n, s = pt({}, n), l = t && i || !t && r !== "post";
  let p;
  if (Nr) {
    if (r === "sync") {
      const S = ym();
      p = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!l) {
      const S = () => {
      };
      return S.stop = fn, S.resume = fn, S.pause = fn, S;
    }
  }
  const c = Ot;
  s.call = (S, x, k) => mn(S, c, x, k);
  let m = !1;
  r === "post" ? s.scheduler = (S) => {
    $t(S, c && c.suspense);
  } : r !== "sync" && (m = !0, s.scheduler = (S, x) => {
    x ? S() : kc(S);
  }), s.augmentJob = (S) => {
    t && (S.flags |= 4), m && (S.flags |= 2, c && (S.id = c.uid, S.i = c));
  };
  const b = fm(e, t, s);
  return Nr && (p ? p.push(b) : l && b()), b;
}
function Cm(e, t, n) {
  const i = this.proxy, a = at(e) ? e.includes(".") ? Sf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Oe(t) ? r = t : (r = t.handler, n = t);
  const o = Hr(this), s = Os(a, r.bind(i), n);
  return o(), s;
}
function Sf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const bi = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ Symbol("_vte"), Rs = (e) => e.__isTeleport, Vi = (e) => e && (e.disabled || e.disabled === ""), Em = (e) => e && (e.defer || e.defer === ""), au = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ru = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Hl = (e, t) => {
  const n = e && e.to;
  return at(n) ? t ? t(n) : null : n;
}, Sm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, s, l, p) {
    const {
      mc: c,
      pc: m,
      pbc: b,
      o: { insert: S, querySelector: x, createText: k, createComment: N, parentNode: O }
    } = p, F = Vi(t.props);
    let { dynamicChildren: B } = t;
    const z = (te, ne, I) => {
      te.shapeFlag & 16 && c(
        te.children,
        ne,
        I,
        a,
        r,
        o,
        s,
        l
      );
    }, ce = (te = t) => {
      const ne = Vi(te.props), I = te.target = Hl(te.props, x), se = jl(I, te, k, S);
      I && (o !== "svg" && au(I) ? o = "svg" : o !== "mathml" && ru(I) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), ne || (z(te, I, se), Ja(te, !1)));
    }, de = (te) => {
      const ne = () => {
        if (bi.get(te) === ne) {
          if (bi.delete(te), Vi(te.props)) {
            const I = O(te.el) || n;
            z(te, I, te.anchor), Ja(te, !0);
          }
          ce(te);
        }
      };
      bi.set(te, ne), $t(ne, r);
    };
    if (e == null) {
      const te = t.el = k(""), ne = t.anchor = k("");
      if (S(te, n, i), S(ne, n, i), Em(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      F && (z(t, n, ne), Ja(t, !0)), ce();
    } else {
      t.el = e.el;
      const te = t.anchor = e.anchor, ne = bi.get(e);
      if (ne) {
        ne.flags |= 8, bi.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const I = t.target = e.target, se = t.targetAnchor = e.targetAnchor, me = Vi(e.props), J = me ? n : I, ie = me ? te : se;
      if (o === "svg" || au(I) ? o = "svg" : (o === "mathml" || ru(I)) && (o = "mathml"), B ? (b(
        e.dynamicChildren,
        B,
        J,
        a,
        r,
        o,
        s
      ), Lc(e, t, !0)) : l || m(
        e,
        t,
        J,
        ie,
        a,
        r,
        o,
        s,
        !1
      ), F)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : to(
          t,
          n,
          te,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = Hl(t.props, x);
        D && (t.target = D, to(
          t,
          D,
          null,
          p,
          0
        ));
      } else me && to(
        t,
        I,
        se,
        p,
        1
      );
      Ja(t, F);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: s,
      anchor: l,
      targetStart: p,
      targetAnchor: c,
      target: m,
      props: b
    } = e, S = Vi(b), x = r || !S, k = bi.get(e);
    if (k && (k.flags |= 8, bi.delete(e)), m && (a(p), a(c)), r && a(l), !k && (S || m) && o & 16)
      for (let N = 0; N < s.length; N++) {
        const O = s[N];
        i(
          O,
          t,
          n,
          x,
          !!O.dynamicChildren
        );
      }
  },
  move: to,
  hydrate: Tm
};
function to(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: s, shapeFlag: l, children: p, props: c } = e, m = r === 2;
  if (m && i(o, t, n), !bi.has(e) && (!m || Vi(c)) && l & 16)
    for (let b = 0; b < p.length; b++)
      a(
        p[b],
        t,
        n,
        2
      );
  m && i(s, t, n);
}
function Tm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: s, querySelector: l, insert: p, createText: c }
}, m) {
  function b(N, O) {
    let F = O;
    for (; F; ) {
      if (F && F.nodeType === 8) {
        if (F.data === "teleport start anchor")
          t.targetStart = F;
        else if (F.data === "teleport anchor") {
          t.targetAnchor = F, N._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      F = o(F);
    }
  }
  function S(N, O) {
    O.anchor = m(
      o(N),
      O,
      s(N),
      n,
      i,
      a,
      r
    );
  }
  const x = t.target = Hl(
    t.props,
    l
  ), k = Vi(t.props);
  if (x) {
    const N = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (k ? (S(e, t), b(x, N), t.targetAnchor || jl(
      x,
      t,
      c,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      s(e) === x ? e : null
    )) : (t.anchor = o(e), b(x, N), t.targetAnchor || jl(x, t, c, p), m(
      N && o(N),
      t,
      x,
      n,
      i,
      a,
      r
    ))), Ja(t, k);
  } else k && t.shapeFlag & 16 && (S(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const kf = Sm;
function Ja(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function jl(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[Tf] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const un = /* @__PURE__ */ Symbol("_leaveCb"), Ha = /* @__PURE__ */ Symbol("_enterCb");
function km() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Oi(() => {
    e.isMounted = !0;
  }), Da(() => {
    e.isUnmounting = !0;
  }), e;
}
const on = [Function, Array], Af = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: on,
  onEnter: on,
  onAfterEnter: on,
  onEnterCancelled: on,
  // leave
  onBeforeLeave: on,
  onLeave: on,
  onAfterLeave: on,
  onLeaveCancelled: on,
  // appear
  onBeforeAppear: on,
  onAppear: on,
  onAfterAppear: on,
  onAppearCancelled: on
}, xf = (e) => {
  const t = e.subTree;
  return t.component ? xf(t.component) : t;
}, Am = {
  name: "BaseTransition",
  props: Af,
  setup(e, { slots: t }) {
    const n = ia(), i = km();
    return () => {
      const a = t.default && Rf(t.default(), !0), r = a && a.length ? Nf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? V() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ke(e), { mode: s } = o;
      if (i.isLeaving)
        return il(r);
      const l = So(r);
      if (!l)
        return il(r);
      let p = Vl(
        l,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (m) => p = m
      );
      l.type !== Ct && Sr(l, p);
      let c = n.subTree && So(n.subTree);
      if (c && c.type !== Ct && !Ki(c, l) && xf(n).type !== Ct) {
        let m = Vl(
          c,
          o,
          i,
          n
        );
        if (Sr(c, m), s === "out-in" && l.type !== Ct)
          return i.isLeaving = !0, m.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave, c = void 0;
          }, il(r);
        s === "in-out" && l.type !== Ct ? m.delayLeave = (b, S, x) => {
          const k = Of(
            i,
            c
          );
          k[String(c.key)] = c, b[un] = () => {
            S(), b[un] = void 0, delete p.delayedLeave, c = void 0;
          }, p.delayedLeave = () => {
            x(), delete p.delayedLeave, c = void 0;
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
      if (n.type !== Ct) {
        t = n;
        break;
      }
  }
  return t;
}
const xm = Am;
function Of(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Vl(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: p,
    onAfterEnter: c,
    onEnterCancelled: m,
    onBeforeLeave: b,
    onLeave: S,
    onAfterLeave: x,
    onLeaveCancelled: k,
    onBeforeAppear: N,
    onAppear: O,
    onAfterAppear: F,
    onAppearCancelled: B
  } = t, z = String(e.key), ce = Of(n, e), de = (I, se) => {
    I && mn(
      I,
      i,
      9,
      se
    );
  }, te = (I, se) => {
    const me = se[1];
    de(I, se), Ee(I) ? I.every((J) => J.length <= 1) && me() : I.length <= 1 && me();
  }, ne = {
    mode: o,
    persisted: s,
    beforeEnter(I) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = N || l;
        else
          return;
      I[un] && I[un](
        !0
        /* cancelled */
      );
      const me = ce[z];
      me && Ki(e, me) && me.el[un] && me.el[un](), de(se, [I]);
    },
    enter(I) {
      if (ce[z] === e) return;
      let se = p, me = c, J = m;
      if (!n.isMounted)
        if (r)
          se = O || p, me = F || c, J = B || m;
        else
          return;
      let ie = !1;
      I[Ha] = (M) => {
        ie || (ie = !0, M ? de(J, [I]) : de(me, [I]), ne.delayedLeave && ne.delayedLeave(), I[Ha] = void 0);
      };
      const D = I[Ha].bind(null, !1);
      se ? te(se, [I, D]) : D();
    },
    leave(I, se) {
      const me = String(e.key);
      if (I[Ha] && I[Ha](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      de(b, [I]);
      let J = !1;
      I[un] = (D) => {
        J || (J = !0, se(), D ? de(k, [I]) : de(x, [I]), I[un] = void 0, ce[me] === e && delete ce[me]);
      };
      const ie = I[un].bind(null, !1);
      ce[me] = e, S ? te(S, [I, ie]) : ie();
    },
    clone(I) {
      const se = Vl(
        I,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return ne;
}
function il(e) {
  if (Ls(e))
    return e = xi(e), e.children = null, e;
}
function So(e) {
  if (!Ls(e))
    return Rs(e.type) && e.children ? Nf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Oe(n.default))
      return n.default();
  }
}
function Sr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Sr(
      Rs(n.type) && So(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Rf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const s = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === he ? (o.patchFlag & 128 && a++, i = i.concat(
      Rf(o.children, t, s)
    )) : (t || o.type !== Ct) && i.push(s != null ? xi(o, { key: s }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function St(e, t) {
  return Oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Lf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Nm(e) {
  const t = ia(), n = /* @__PURE__ */ vf(null);
  if (t) {
    const a = t.refs === Ve ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function ou(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const To = /* @__PURE__ */ new WeakMap();
function sr(e, t, n, i, a = !1) {
  if (Ee(e)) {
    e.forEach(
      (k, N) => sr(
        k,
        t && (Ee(t) ? t[N] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (xa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && sr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Ds(i.component) : i.el, o = a ? null : r, { i: s, r: l } = e, p = t && t.r, c = s.refs === Ve ? s.refs = {} : s.refs, m = s.setupState, b = /* @__PURE__ */ Ke(m), S = m === Ve ? qd : (k) => ou(c, k) ? !1 : qe(b, k), x = (k, N) => !(N && ou(c, N));
  if (p != null && p !== l) {
    if (su(t), at(p))
      c[p] = null, S(p) && (m[p] = null);
    else if (/* @__PURE__ */ Lt(p)) {
      const k = t;
      x(p, k.k) && (p.value = null), k.k && (c[k.k] = null);
    }
  }
  if (Oe(l))
    zr(l, s, 12, [o, c]);
  else {
    const k = at(l), N = /* @__PURE__ */ Lt(l);
    if (k || N) {
      const O = () => {
        if (e.f) {
          const F = k ? S(l) ? m[l] : c[l] : x() || !e.k ? l.value : c[e.k];
          if (a)
            Ee(F) && bc(F, r);
          else if (Ee(F))
            F.includes(r) || F.push(r);
          else if (k)
            c[l] = [r], S(l) && (m[l] = c[l]);
          else {
            const B = [r];
            x(l, e.k) && (l.value = B), e.k && (c[e.k] = B);
          }
        } else k ? (c[l] = o, S(l) && (m[l] = o)) : N && (x(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const F = () => {
          O(), To.delete(e);
        };
        F.id = -1, To.set(e, F), $t(F, n);
      } else
        su(e), O();
    }
  }
}
function su(e) {
  const t = To.get(e);
  t && (t.flags |= 8, To.delete(e));
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const xa = (e) => !!e.type.__asyncLoader, Ls = (e) => e.type.__isKeepAlive;
function Om(e, t) {
  Pf(e, "a", t);
}
function Rm(e, t) {
  Pf(e, "da", t);
}
function Pf(e, t, n = Ot) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ps(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Ls(a.parent.vnode) && Lm(i, t, n, a), a = a.parent;
  }
}
function Lm(e, t, n, i) {
  const a = Ps(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Ur(() => {
    bc(i[t], a);
  }, n);
}
function Ps(e, t, n = Ot, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ni();
      const s = Hr(n), l = mn(t, n, e, o);
      return s(), ii(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const si = (e) => (t, n = Ot) => {
  (!Nr || e === "sp") && Ps(e, (...i) => t(...i), n);
}, If = si("bm"), Oi = si("m"), Df = si(
  "bu"
), Pm = si("u"), Da = si(
  "bum"
), Ur = si("um"), Im = si(
  "sp"
), Dm = si("rtg"), Fm = si("rtc");
function Mm(e, t = Ot) {
  Ps("ec", e, t);
}
const Ac = "components", $m = "directives";
function Ue(e, t) {
  return Nc(Ac, e, !0, t) || e;
}
const Ff = /* @__PURE__ */ Symbol.for("v-ndc");
function xc(e) {
  return at(e) ? Nc(Ac, e, !1) || e : e || Ff;
}
function lu(e) {
  return Nc($m, e);
}
function Nc(e, t, n = !0, i = !1) {
  const a = Et || Ot;
  if (a) {
    const r = a.type;
    if (e === Ac) {
      const s = _v(
        r,
        !1
      );
      if (s && (s === t || s === Rt(t) || s === Es(Rt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      cu(a[e] || r[e], t) || // global registration
      cu(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function cu(e, t) {
  return e && (e[t] || e[Rt(t)] || e[Es(Rt(t))]);
}
function Me(e, t, n, i) {
  let a;
  const r = n, o = Ee(e);
  if (o || at(e)) {
    const s = o && /* @__PURE__ */ Ji(e);
    let l = !1, p = !1;
    s && (l = !/* @__PURE__ */ hn(e), p = /* @__PURE__ */ ai(e), e = As(e)), a = new Array(e.length);
    for (let c = 0, m = e.length; c < m; c++)
      a[c] = t(
        l ? p ? Ia(En(e[c])) : En(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, r);
  } else if (We(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (s, l) => t(s, l, void 0, r)
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let l = 0, p = s.length; l < p; l++) {
        const c = s[l];
        a[l] = t(e[c], c, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Pe(e, t, n, i, a, r) {
  if (n == null && (n = {}), Et.ce || Et.parent && xa(Et.parent) && Et.parent.ce) {
    const p = n, c = Object.keys(p).length > 0;
    return t !== "default" && (p.name = t), C(), $e(
      he,
      null,
      [Te("slot", p, i && i())],
      c ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const s = ei.length;
  C();
  let l;
  try {
    const p = o && Mf(o(n)), c = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    p && p.key;
    l = $e(
      he,
      {
        key: (c && !Cn(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!p && i ? "_fb" : "")
      },
      p || (i ? i() : []),
      p && e._ === 1 ? 64 : -2
    );
  } catch (p) {
    for (let c = ei.length; c > s; c--) Pc();
    throw p;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Mf(e) {
  return e.some((t) => kr(t) ? !(t.type === Ct || t.type === he && !Mf(t.children)) : !0) ? e : null;
}
const Kl = (e) => e ? rp(e) ? Ds(e) : Kl(e.parent) : null, lr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Qi.bind(e.proxy)),
    $watch: (e) => Cm.bind(e)
  })
), al = (e, t) => e !== Ve && !e.__isScriptSetup && qe(e, t), zm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const b = o[t];
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
        if (al(i, t))
          return o[t] = 1, i[t];
        if (a !== Ve && qe(a, t))
          return o[t] = 2, a[t];
        if (qe(r, t))
          return o[t] = 3, r[t];
        if (n !== Ve && qe(n, t))
          return o[t] = 4, n[t];
        Gl && (o[t] = 0);
      }
    }
    const p = lr[t];
    let c, m;
    if (p)
      return t === "$attrs" && xt(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (c = s.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ve && qe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      m = l.config.globalProperties, qe(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return al(a, t) ? (a[t] = n, !0) : i !== Ve && qe(i, t) ? (i[t] = n, !0) : qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, s) {
    let l;
    return !!(n[s] || e !== Ve && s[0] !== "$" && qe(e, s) || al(t, s) || qe(r, s) || qe(i, s) || qe(lr, s) || qe(a.config.globalProperties, s) || (l = o.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Um() {
  return $f().slots;
}
function Bm() {
  return $f().attrs;
}
function $f(e) {
  const t = ia();
  return t.setupContext || (t.setupContext = sp(t));
}
function ko(e) {
  return Ee(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Hm(e, t) {
  return !e || !t ? e || t : Ee(e) && Ee(t) ? e.concat(t) : pt({}, ko(e), ko(t));
}
let Gl = !0;
function jm(e) {
  const t = Uf(e), n = e.proxy, i = e.ctx;
  Gl = !1, t.beforeCreate && uu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: s,
    provide: l,
    inject: p,
    // lifecycle
    created: c,
    beforeMount: m,
    mounted: b,
    beforeUpdate: S,
    updated: x,
    activated: k,
    deactivated: N,
    beforeDestroy: O,
    beforeUnmount: F,
    destroyed: B,
    unmounted: z,
    render: ce,
    renderTracked: de,
    renderTriggered: te,
    errorCaptured: ne,
    serverPrefetch: I,
    // public API
    expose: se,
    inheritAttrs: me,
    // assets
    components: J,
    directives: ie,
    filters: D
  } = t;
  if (p && Vm(p, i, null), o)
    for (const oe in o) {
      const Q = o[oe];
      Oe(Q) && (i[oe] = Q.bind(n));
    }
  if (a) {
    const oe = a.call(n, n);
    We(oe) && (e.data = /* @__PURE__ */ Gt(oe));
  }
  if (Gl = !0, r)
    for (const oe in r) {
      const Q = r[oe], ue = Oe(Q) ? Q.bind(n, n) : Oe(Q.get) ? Q.get.bind(n, n) : fn, fe = !Oe(Q) && Oe(Q.set) ? Q.set.bind(n) : fn, ye = q({
        get: ue,
        set: fe
      });
      Object.defineProperty(i, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => ye.value,
        set: (_e) => ye.value = _e
      });
    }
  if (s)
    for (const oe in s)
      zf(s[oe], i, n, oe);
  if (l) {
    const oe = Oe(l) ? l.call(n) : l;
    Reflect.ownKeys(oe).forEach((Q) => {
      cn(Q, oe[Q]);
    });
  }
  c && uu(c, e, "c");
  function W(oe, Q) {
    Ee(Q) ? Q.forEach((ue) => oe(ue.bind(n))) : Q && oe(Q.bind(n));
  }
  if (W(If, m), W(Oi, b), W(Df, S), W(Pm, x), W(Om, k), W(Rm, N), W(Mm, ne), W(Fm, de), W(Dm, te), W(Da, F), W(Ur, z), W(Im, I), Ee(se))
    if (se.length) {
      const oe = e.exposed || (e.exposed = {});
      se.forEach((Q) => {
        Object.defineProperty(oe, Q, {
          get: () => n[Q],
          set: (ue) => n[Q] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === fn && (e.render = ce), me != null && (e.inheritAttrs = me), J && (e.components = J), ie && (e.directives = ie), I && Lf(e);
}
function Vm(e, t, n = fn) {
  Ee(e) && (e = ql(e));
  for (const i in e) {
    const a = e[i];
    let r;
    We(a) ? "default" in a ? r = Nt(
      a.from || i,
      a.default,
      !0
    ) : r = Nt(a.from || i) : r = Nt(a), /* @__PURE__ */ Lt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function uu(e, t, n) {
  mn(
    Ee(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zf(e, t, n, i) {
  let a = i.includes(".") ? Sf(n, i) : () => n[i];
  if (at(e)) {
    const r = t[e];
    Oe(r) && Wt(a, r);
  } else if (Oe(e))
    Wt(a, e.bind(n));
  else if (We(e))
    if (Ee(e))
      e.forEach((r) => zf(r, t, n, i));
    else {
      const r = Oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Oe(r) && Wt(a, r, e);
    }
}
function Uf(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, s = r.get(t);
  let l;
  return s ? l = s : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (p) => Ao(l, p, o, !0)
  ), Ao(l, t, o)), We(t) && r.set(t, l), l;
}
function Ao(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ao(e, r, n, !0), a && a.forEach(
    (o) => Ao(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const s = Km[o] || n && n[o];
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const Km = {
  data: du,
  props: fu,
  emits: fu,
  // objects
  methods: Qa,
  computed: Qa,
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
  components: Qa,
  directives: Qa,
  // watch
  watch: qm,
  // provide / inject
  provide: du,
  inject: Gm
};
function du(e, t) {
  return t ? e ? function() {
    return pt(
      Oe(e) ? e.call(this, this) : e,
      Oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gm(e, t) {
  return Qa(ql(e), ql(t));
}
function ql(e) {
  if (Ee(e)) {
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
function Qa(e, t) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fu(e, t) {
  return e ? Ee(e) && Ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pt(
    /* @__PURE__ */ Object.create(null),
    ko(e),
    ko(t ?? {})
  ) : t;
}
function qm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Mt(e[i], t[i]);
  return n;
}
function Bf() {
  return {
    app: null,
    config: {
      isNativeTag: qd,
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
let Wm = 0;
function Ym(e, t) {
  return function(i, a = null) {
    Oe(i) || (i = pt({}, i)), a != null && !We(a) && (a = null);
    const r = Bf(), o = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const p = r.app = {
      _uid: Wm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Cv,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...m) {
        return o.has(c) || (c && Oe(c.install) ? (o.add(c), c.install(p, ...m)) : Oe(c) && (o.add(c), c(p, ...m))), p;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), p;
      },
      component(c, m) {
        return m ? (r.components[c] = m, p) : r.components[c];
      },
      directive(c, m) {
        return m ? (r.directives[c] = m, p) : r.directives[c];
      },
      mount(c, m, b) {
        if (!l) {
          const S = p._ceVNode || Te(i, a);
          return S.appContext = r, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(S, c, b), l = !0, p._container = c, c.__vue_app__ = p, Ds(S.component);
        }
      },
      onUnmount(c) {
        s.push(c);
      },
      unmount() {
        l && (mn(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(c, m) {
        return r.provides[c] = m, p;
      },
      runWithContext(c) {
        const m = Na;
        Na = p;
        try {
          return c();
        } finally {
          Na = m;
        }
      }
    };
    return p;
  };
}
let Na = null;
function Hf(e, t, n = Ve) {
  const i = ia(), a = Rt(t), r = oi(t), o = jf(e, a), s = lm((l, p) => {
    let c, m = Ve, b;
    return wm(() => {
      const S = e[a];
      wt(c, S) && (c = S, p());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(S) {
        const x = n.set ? n.set(S) : S;
        if (!wt(x, c) && !(m !== Ve && wt(S, m)))
          return;
        const k = i.vnode.props, N = !!(k && // check if parent has passed v-model
        (t in k || a in k || r in k) && (`onUpdate:${t}` in k || `onUpdate:${a}` in k || `onUpdate:${r}` in k));
        N || (c = S, p()), i.emit(`update:${t}`, x), wt(S, m) && (wt(S, x) && !wt(x, b) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && m !== Ve && !wt(x, c)) && p(), m = S, b = x;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? o || Ve : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const jf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${oi(t)}Modifiers`];
function Zm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ve;
  let a = n;
  const r = t.startsWith("update:"), o = r && jf(i, t.slice(7));
  o && (o.trim && (a = n.map((c) => at(c) ? c.trim() : c)), o.number && (a = a.map(Ss)));
  let s, l = i[s = Js(t)] || // also try camelCase event handler (#2249)
  i[s = Js(Rt(t))];
  !l && r && (l = i[s = Js(oi(t))]), l && mn(
    l,
    e,
    6,
    a
  );
  const p = i[s + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, mn(
      p,
      e,
      6,
      a
    );
  }
}
const Xm = /* @__PURE__ */ new WeakMap();
function Vf(e, t, n = !1) {
  const i = n ? Xm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, s = !1;
  if (!Oe(e)) {
    const l = (p) => {
      const c = Vf(p, t, !0);
      c && (s = !0, pt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !s ? (We(e) && i.set(e, null), null) : (Ee(r) ? r.forEach((l) => o[l] = null) : pt(o, r), We(e) && i.set(e, o), o);
}
function Is(e, t) {
  return !e || !_s(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, oi(t)) || qe(e, t));
}
function pu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: s,
    emit: l,
    render: p,
    renderCache: c,
    props: m,
    data: b,
    setupState: S,
    ctx: x,
    inheritAttrs: k
  } = e, N = Eo(e);
  let O, F;
  try {
    if (n.shapeFlag & 4) {
      const z = a || i, ce = z;
      O = Pn(
        p.call(
          ce,
          z,
          c,
          m,
          S,
          b,
          x
        )
      ), F = s;
    } else {
      const z = t;
      O = Pn(
        z.length > 1 ? z(
          m,
          { attrs: s, slots: o, emit: l }
        ) : z(
          m,
          null
        )
      ), F = t.props ? s : Jm(s);
    }
  } catch (z) {
    ei.length = 0, xs(z, e, 1), O = Te(Ct);
  }
  let B = O;
  if (F && k !== !1) {
    const z = Object.keys(F), { shapeFlag: ce } = B;
    z.length && ce & 7 && (r && z.some(ws) && (F = Qm(
      F,
      r
    )), B = xi(B, F, !1, !0));
  }
  if (n.dirs && (B = xi(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const z = Rs(B.type) && So(B) || B;
    Sr(z, n.transition);
  }
  return O = B, Eo(N), O;
}
const Jm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _s(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qm = (e, t) => {
  const n = {};
  for (const i in e)
    (!ws(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function ev(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: s, patchFlag: l } = t, p = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? hu(i, o, p) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let m = 0; m < c.length; m++) {
        const b = c[m];
        if (Kf(o, i, b) && !Is(p, b))
          return !0;
      }
    }
  } else
    return (a || s) && (!s || !s.$stable) ? !0 : i === o ? !1 : i ? o ? hu(i, o, p) : !0 : !!o;
  return !1;
}
function hu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Kf(t, e, r) && !Is(n, r))
      return !0;
  }
  return !1;
}
function Kf(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && We(i) && We(a) ? !Ai(i, a) : i !== a;
}
function tv({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Gf = {}, qf = () => Object.create(Gf), Wf = (e) => Object.getPrototypeOf(e) === Gf;
function nv(e, t, n, i = !1) {
  const a = {}, r = qf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yf(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ im(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function iv(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, s = /* @__PURE__ */ Ke(a), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let m = 0; m < c.length; m++) {
        let b = c[m];
        if (Is(e.emitsOptions, b))
          continue;
        const S = t[b];
        if (l)
          if (qe(r, b))
            S !== r[b] && (r[b] = S, p = !0);
          else {
            const x = Rt(b);
            a[x] = Wl(
              l,
              s,
              x,
              S,
              e,
              !1
            );
          }
        else
          S !== r[b] && (r[b] = S, p = !0);
      }
    }
  } else {
    Yf(e, t, a, r) && (p = !0);
    let c;
    for (const m in s)
      (!t || // for camelCase
      !qe(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = oi(m)) === m || !qe(t, c))) && (l ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[c] !== void 0) && (a[m] = Wl(
        l,
        s,
        m,
        void 0,
        e,
        !0
      )) : delete a[m]);
    if (r !== s)
      for (const m in r)
        (!t || !qe(t, m)) && (delete r[m], p = !0);
  }
  p && Yn(e.attrs, "set", "");
}
function Yf(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, s;
  if (t)
    for (let l in t) {
      if (ar(l))
        continue;
      const p = t[l];
      let c;
      a && qe(a, c = Rt(l)) ? !r || !r.includes(c) ? n[c] = p : (s || (s = {}))[c] = p : Is(e.emitsOptions, l) || (!(l in i) || p !== i[l]) && (i[l] = p, o = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ke(n), p = s || Ve;
    for (let c = 0; c < r.length; c++) {
      const m = r[c];
      n[m] = Wl(
        a,
        l,
        m,
        p[m],
        e,
        !qe(p, m)
      );
    }
  }
  return o;
}
function Wl(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const s = qe(o, "default");
    if (s && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Oe(l)) {
        const { propsDefaults: p } = a;
        if (n in p)
          i = p[n];
        else {
          const c = Hr(a);
          i = p[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      a.ce && a.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !s ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === oi(n)) && (i = !0));
  }
  return i;
}
const av = /* @__PURE__ */ new WeakMap();
function Zf(e, t, n = !1) {
  const i = n ? av : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, s = [];
  let l = !1;
  if (!Oe(e)) {
    const c = (m) => {
      l = !0;
      const [b, S] = Zf(m, t, !0);
      pt(o, b), S && s.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return We(e) && i.set(e, ka), ka;
  if (Ee(r))
    for (let c = 0; c < r.length; c++) {
      const m = Rt(r[c]);
      mu(m) && (o[m] = Ve);
    }
  else if (r)
    for (const c in r) {
      const m = Rt(c);
      if (mu(m)) {
        const b = r[c], S = o[m] = Ee(b) || Oe(b) ? { type: b } : pt({}, b), x = S.type;
        let k = !1, N = !0;
        if (Ee(x))
          for (let O = 0; O < x.length; ++O) {
            const F = x[O], B = Oe(F) && F.name;
            if (B === "Boolean") {
              k = !0;
              break;
            } else B === "String" && (N = !1);
          }
        else
          k = Oe(x) && x.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = k, S[
          1
          /* shouldCastTrue */
        ] = N, (k || qe(S, "default")) && s.push(m);
      }
    }
  const p = [o, s];
  return We(e) && i.set(e, p), p;
}
function mu(e) {
  return e[0] !== "$" && !ar(e);
}
const Oc = (e) => e === "_" || e === "_ctx" || e === "$stable", Rc = (e) => Ee(e) ? e.map(Pn) : [Pn(e)], rv = (e, t, n) => {
  if (t._n)
    return t;
  const i = Le((...a) => Rc(t(...a)), n);
  return i._c = !1, i;
}, Xf = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Oc(a)) continue;
    const r = e[a];
    if (Oe(r))
      t[a] = rv(a, r, i);
    else if (r != null) {
      const o = Rc(r);
      t[a] = () => o;
    }
  }
}, Jf = (e, t) => {
  const n = Rc(t);
  e.slots.default = () => n;
}, Qf = (e, t, n) => {
  for (const i in t)
    (n || !Oc(i)) && (e[i] = t[i]);
}, ov = (e, t, n) => {
  const i = e.slots = qf();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qf(i, t, n), n && Xd(i, "_", a, !0)) : Xf(t, i);
  } else t && Jf(e, t);
}, sv = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = Ve;
  if (i.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? r = !1 : Qf(a, t, n) : (r = !t.$stable, Xf(t, a)), o = t;
  } else t && (Jf(e, t), o = { default: 1 });
  if (r)
    for (const s in a)
      !Oc(s) && o[s] == null && delete a[s];
}, $t = fv;
function lv(e) {
  return cv(e);
}
function cv(e, t) {
  const n = Ts();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: s,
    createComment: l,
    setText: p,
    setElementText: c,
    parentNode: m,
    nextSibling: b,
    setScopeId: S = fn,
    insertStaticContent: x
  } = e, k = (v, E, T, L = null, R = null, $ = null, G = void 0, K = null, Z = !!E.dynamicChildren) => {
    if (v === E)
      return;
    v && !Ki(v, E) && (L = lt(v), _e(v, R, $, !0), v = null), E.patchFlag === -2 && (Z = !1, E.dynamicChildren = null);
    const { type: H, ref: ve, shapeFlag: re } = E;
    switch (H) {
      case Br:
        N(v, E, T, L);
        break;
      case Ct:
        O(v, E, T, L);
        break;
      case ho:
        v == null && F(E, T, L, G);
        break;
      case he:
        J(
          v,
          E,
          T,
          L,
          R,
          $,
          G,
          K,
          Z
        );
        break;
      default:
        re & 1 ? ce(
          v,
          E,
          T,
          L,
          R,
          $,
          G,
          K,
          Z
        ) : re & 6 ? ie(
          v,
          E,
          T,
          L,
          R,
          $,
          G,
          K,
          Z
        ) : (re & 64 || re & 128) && H.process(
          v,
          E,
          T,
          L,
          R,
          $,
          G,
          K,
          Z,
          It
        );
    }
    ve != null && R ? sr(ve, v && v.ref, $, E || v, !E) : ve == null && v && v.ref != null && sr(v.ref, null, $, v, !0);
  }, N = (v, E, T, L) => {
    if (v == null)
      i(
        E.el = s(E.children),
        T,
        L
      );
    else {
      const R = E.el = v.el;
      E.children !== v.children && p(R, E.children);
    }
  }, O = (v, E, T, L) => {
    v == null ? i(
      E.el = l(E.children || ""),
      T,
      L
    ) : E.el = v.el;
  }, F = (v, E, T, L) => {
    [v.el, v.anchor] = x(
      v.children,
      E,
      T,
      L,
      v.el,
      v.anchor
    );
  }, B = ({ el: v, anchor: E }, T, L) => {
    let R;
    for (; v && v !== E; )
      R = b(v), i(v, T, L), v = R;
    i(E, T, L);
  }, z = ({ el: v, anchor: E }) => {
    let T;
    for (; v && v !== E; )
      T = b(v), a(v), v = T;
    a(E);
  }, ce = (v, E, T, L, R, $, G, K, Z) => {
    if (E.type === "svg" ? G = "svg" : E.type === "math" && (G = "mathml"), v == null)
      de(
        E,
        T,
        L,
        R,
        $,
        G,
        K,
        Z
      );
    else {
      const H = v.el && v.el._isVueCE ? v.el : null;
      try {
        H && H._beginPatch(), I(
          v,
          E,
          R,
          $,
          G,
          K,
          Z
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, de = (v, E, T, L, R, $, G, K) => {
    let Z, H;
    const { props: ve, shapeFlag: re, transition: pe, dirs: Ce } = v;
    if (Z = v.el = o(
      v.type,
      $,
      ve && ve.is,
      ve
    ), re & 8 ? c(Z, v.children) : re & 16 && ne(
      v.children,
      Z,
      null,
      L,
      R,
      rl(v, $),
      G,
      K
    ), Ce && Fi(v, null, L, "created"), te(Z, v, v.scopeId, G, L), ve) {
      for (const Y in ve)
        Y !== "value" && !ar(Y) && r(Z, Y, null, ve[Y], $, L);
      "value" in ve && r(Z, "value", null, ve.value, $), (H = ve.onVnodeBeforeMount) && xn(H, L, v);
    }
    Ce && Fi(v, null, L, "beforeMount");
    const ke = uv(R, pe);
    ke && pe.beforeEnter(Z), i(Z, E, T), ((H = ve && ve.onVnodeMounted) || ke || Ce) && $t(() => {
      H && xn(H, L, v), ke && pe.enter(Z), Ce && Fi(v, null, L, "mounted");
    }, R);
  }, te = (v, E, T, L, R) => {
    if (T && S(v, T), L)
      for (let $ = 0; $ < L.length; $++)
        S(v, L[$]);
    if (R) {
      let $ = R.subTree;
      if (E === $ || np($.type) && ($.ssContent === E || $.ssFallback === E)) {
        const G = R.vnode;
        te(
          v,
          G,
          G.scopeId,
          G.slotScopeIds,
          R.parent
        );
      }
    }
  }, ne = (v, E, T, L, R, $, G, K, Z = 0) => {
    for (let H = Z; H < v.length; H++) {
      const ve = v[H] = K ? Wn(v[H]) : Pn(v[H]);
      k(
        null,
        ve,
        E,
        T,
        L,
        R,
        $,
        G,
        K
      );
    }
  }, I = (v, E, T, L, R, $, G) => {
    const K = E.el = v.el;
    let { patchFlag: Z, dynamicChildren: H, dirs: ve } = E;
    Z |= v.patchFlag & 16;
    const re = v.props || Ve, pe = E.props || Ve;
    let Ce;
    if (T && Mi(T, !1), (Ce = pe.onVnodeBeforeUpdate) && xn(Ce, T, E, v), ve && Fi(E, v, T, "beforeUpdate"), T && Mi(T, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!v.dynamicChildren || v.dynamicChildren.length !== H.length) && (Z = 0, G = !1, H = null), (re.innerHTML && pe.innerHTML == null || re.textContent && pe.textContent == null) && c(K, ""), H ? se(
      v.dynamicChildren,
      H,
      K,
      T,
      L,
      rl(E, R),
      $
    ) : G || Q(
      v,
      E,
      K,
      null,
      T,
      L,
      rl(E, R),
      $,
      !1
    ), Z > 0) {
      if (Z & 16)
        me(K, re, pe, T, R);
      else if (Z & 2 && re.class !== pe.class && r(K, "class", null, pe.class, R), Z & 4 && r(K, "style", re.style, pe.style, R), Z & 8) {
        const ke = E.dynamicProps;
        for (let Y = 0; Y < ke.length; Y++) {
          const X = ke[Y], le = re[X], Se = pe[X];
          (Se !== le || X === "value") && r(K, X, le, Se, R, T);
        }
      }
      Z & 1 && v.children !== E.children && c(K, E.children);
    } else !G && H == null && me(K, re, pe, T, R);
    ((Ce = pe.onVnodeUpdated) || ve) && $t(() => {
      Ce && xn(Ce, T, E, v), ve && Fi(E, v, T, "updated");
    }, L);
  }, se = (v, E, T, L, R, $, G) => {
    for (let K = 0; K < E.length; K++) {
      const Z = v[K], H = E[K], ve = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ki(Z, H) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? m(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      k(
        Z,
        H,
        ve,
        null,
        L,
        R,
        $,
        G,
        !0
      );
    }
  }, me = (v, E, T, L, R) => {
    if (E !== T) {
      if (E !== Ve)
        for (const $ in E)
          !ar($) && !($ in T) && r(
            v,
            $,
            E[$],
            null,
            R,
            L
          );
      for (const $ in T) {
        if (ar($)) continue;
        const G = T[$], K = E[$];
        G !== K && $ !== "value" && r(v, $, K, G, R, L);
      }
      "value" in T && r(v, "value", E.value, T.value, R);
    }
  }, J = (v, E, T, L, R, $, G, K, Z) => {
    const H = E.el = v ? v.el : s(""), ve = E.anchor = v ? v.anchor : s("");
    let { patchFlag: re, dynamicChildren: pe, slotScopeIds: Ce } = E;
    Ce && (K = K ? K.concat(Ce) : Ce), v == null ? (i(H, T, L), i(ve, T, L), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      T,
      ve,
      R,
      $,
      G,
      K,
      Z
    )) : re > 0 && re & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === pe.length ? (se(
      v.dynamicChildren,
      pe,
      T,
      R,
      $,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || R && E === R.subTree) && Lc(
      v,
      E,
      !0
      /* shallow */
    )) : Q(
      v,
      E,
      T,
      ve,
      R,
      $,
      G,
      K,
      Z
    );
  }, ie = (v, E, T, L, R, $, G, K, Z) => {
    E.slotScopeIds = K, v == null ? E.shapeFlag & 512 ? R.ctx.activate(
      E,
      T,
      L,
      G,
      Z
    ) : D(
      E,
      T,
      L,
      R,
      $,
      G,
      Z
    ) : M(v, E, Z);
  }, D = (v, E, T, L, R, $, G) => {
    const K = v.component = vv(
      v,
      L,
      R
    );
    if (Ls(v) && (K.ctx.renderer = It), gv(K, !1, G), K.asyncDep) {
      if (R && R.registerDep(K, W, G), !v.el) {
        const Z = K.subTree = Te(Ct);
        O(null, Z, E, T), v.placeholder = Z.el;
      }
    } else
      W(
        K,
        v,
        E,
        T,
        R,
        $,
        G
      );
  }, M = (v, E, T) => {
    const L = E.component = v.component;
    if (ev(v, E, T))
      if (L.asyncDep && !L.asyncResolved) {
        oe(L, E, T);
        return;
      } else
        L.next = E, L.update();
    else
      E.el = v.el, L.vnode = E;
  }, W = (v, E, T, L, R, $, G) => {
    const K = () => {
      if (v.isMounted) {
        let { next: re, bu: pe, u: Ce, parent: ke, vnode: Y } = v;
        {
          const He = ep(v);
          if (He) {
            re && (re.el = Y.el, oe(v, re, G)), He.asyncDep.then(() => {
              $t(() => {
                v.isUnmounted || H();
              }, R);
            });
            return;
          }
        }
        let X = re, le;
        Mi(v, !1), re ? (re.el = Y.el, oe(v, re, G)) : re = Y, pe && po(pe), (le = re.props && re.props.onVnodeBeforeUpdate) && xn(le, ke, re, Y), Mi(v, !0);
        const Se = pu(v), Ne = v.subTree;
        v.subTree = Se, k(
          Ne,
          Se,
          // parent may have changed if it's in a teleport
          m(Ne.el),
          // anchor may have changed if it's in a fragment
          lt(Ne),
          v,
          R,
          $
        ), re.el = Se.el, X === null && tv(v, Se.el), Ce && $t(Ce, R), (le = re.props && re.props.onVnodeUpdated) && $t(
          () => xn(le, ke, re, Y),
          R
        );
      } else {
        let re;
        const { el: pe, props: Ce } = E, { bm: ke, m: Y, parent: X, root: le, type: Se } = v, Ne = xa(E);
        Mi(v, !1), ke && po(ke), !Ne && (re = Ce && Ce.onVnodeBeforeMount) && xn(re, X, E), Mi(v, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            Se,
            v.parent ? v.parent.type : void 0
          );
          const He = v.subTree = pu(v);
          k(
            null,
            He,
            T,
            L,
            v,
            R,
            $
          ), E.el = He.el;
        }
        if (Y && $t(Y, R), !Ne && (re = Ce && Ce.onVnodeMounted)) {
          const He = E;
          $t(
            () => xn(re, X, He),
            R
          );
        }
        (E.shapeFlag & 256 || X && xa(X.vnode) && X.vnode.shapeFlag & 256) && v.a && $t(v.a, R), v.isMounted = !0, E = T = L = null;
      }
    };
    v.scope.on();
    const Z = v.effect = new tf(K);
    v.scope.off();
    const H = v.update = Z.run.bind(Z), ve = v.job = Z.runIfDirty.bind(Z);
    ve.i = v, ve.id = v.uid, Z.scheduler = () => kc(ve), Mi(v, !0), H();
  }, oe = (v, E, T) => {
    E.component = v;
    const L = v.vnode.props;
    v.vnode = E, v.next = null, iv(v, E.props, L, T), sv(v, E.children, T), ni(), iu(v), ii();
  }, Q = (v, E, T, L, R, $, G, K, Z = !1) => {
    const H = v && v.children, ve = v ? v.shapeFlag : 0, re = E.children, { patchFlag: pe, shapeFlag: Ce } = E;
    if (pe > 0) {
      if (pe & 128) {
        fe(
          H,
          re,
          T,
          L,
          R,
          $,
          G,
          K,
          Z
        );
        return;
      } else if (pe & 256) {
        ue(
          H,
          re,
          T,
          L,
          R,
          $,
          G,
          K,
          Z
        );
        return;
      }
    }
    Ce & 8 ? (ve & 16 && Ye(H, R, $), re !== H && c(T, re)) : ve & 16 ? Ce & 16 ? fe(
      H,
      re,
      T,
      L,
      R,
      $,
      G,
      K,
      Z
    ) : Ye(H, R, $, !0) : (ve & 8 && c(T, ""), Ce & 16 && ne(
      re,
      T,
      L,
      R,
      $,
      G,
      K,
      Z
    ));
  }, ue = (v, E, T, L, R, $, G, K, Z) => {
    v = v || ka, E = E || ka;
    const H = v.length, ve = E.length, re = Math.min(H, ve);
    let pe;
    for (pe = 0; pe < re; pe++) {
      const Ce = E[pe] = Z ? Wn(E[pe]) : Pn(E[pe]);
      k(
        v[pe],
        Ce,
        T,
        null,
        R,
        $,
        G,
        K,
        Z
      );
    }
    H > ve ? Ye(
      v,
      R,
      $,
      !0,
      !1,
      re
    ) : ne(
      E,
      T,
      L,
      R,
      $,
      G,
      K,
      Z,
      re
    );
  }, fe = (v, E, T, L, R, $, G, K, Z) => {
    let H = 0;
    const ve = E.length;
    let re = v.length - 1, pe = ve - 1;
    for (; H <= re && H <= pe; ) {
      const Ce = v[H], ke = E[H] = Z ? Wn(E[H]) : Pn(E[H]);
      if (Ki(Ce, ke))
        k(
          Ce,
          ke,
          T,
          null,
          R,
          $,
          G,
          K,
          Z
        );
      else
        break;
      H++;
    }
    for (; H <= re && H <= pe; ) {
      const Ce = v[re], ke = E[pe] = Z ? Wn(E[pe]) : Pn(E[pe]);
      if (Ki(Ce, ke))
        k(
          Ce,
          ke,
          T,
          null,
          R,
          $,
          G,
          K,
          Z
        );
      else
        break;
      re--, pe--;
    }
    if (H > re) {
      if (H <= pe) {
        const Ce = pe + 1, ke = Ce < ve ? E[Ce].el : L;
        for (; H <= pe; )
          k(
            null,
            E[H] = Z ? Wn(E[H]) : Pn(E[H]),
            T,
            ke,
            R,
            $,
            G,
            K,
            Z
          ), H++;
      }
    } else if (H > pe)
      for (; H <= re; )
        _e(v[H], R, $, !0), H++;
    else {
      const Ce = H, ke = H, Y = /* @__PURE__ */ new Map();
      for (H = ke; H <= pe; H++) {
        const Qe = E[H] = Z ? Wn(E[H]) : Pn(E[H]);
        Qe.key != null && Y.set(Qe.key, H);
      }
      let X, le = 0;
      const Se = pe - ke + 1;
      let Ne = !1, He = 0;
      const Fe = new Array(Se);
      for (H = 0; H < Se; H++) Fe[H] = 0;
      for (H = Ce; H <= re; H++) {
        const Qe = v[H];
        if (le >= Se) {
          _e(Qe, R, $, !0);
          continue;
        }
        let ot;
        if (Qe.key != null)
          ot = Y.get(Qe.key);
        else
          for (X = ke; X <= pe; X++)
            if (Fe[X - ke] === 0 && Ki(Qe, E[X])) {
              ot = X;
              break;
            }
        ot === void 0 ? _e(Qe, R, $, !0) : (Fe[ot - ke] = H + 1, ot >= He ? He = ot : Ne = !0, k(
          Qe,
          E[ot],
          T,
          null,
          R,
          $,
          G,
          K,
          Z
        ), le++);
      }
      const rt = Ne ? dv(Fe) : ka;
      for (X = rt.length - 1, H = Se - 1; H >= 0; H--) {
        const Qe = ke + H, ot = E[Qe], Bt = E[Qe + 1], vn = Qe + 1 < ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bt.el || tp(Bt)
        ) : L;
        Fe[H] === 0 ? k(
          null,
          ot,
          T,
          vn,
          R,
          $,
          G,
          K,
          Z
        ) : Ne && (X < 0 || H !== rt[X] ? ye(ot, T, vn, 2) : X--);
      }
    }
  }, ye = (v, E, T, L, R = null) => {
    const { el: $, type: G, transition: K, children: Z, shapeFlag: H } = v;
    if (H & 6) {
      ye(v.component.subTree, E, T, L);
      return;
    }
    if (H & 128) {
      v.suspense.move(E, T, L);
      return;
    }
    if (H & 64) {
      G.move(v, E, T, It);
      return;
    }
    if (G === he) {
      i($, E, T);
      for (let re = 0; re < Z.length; re++)
        ye(Z[re], E, T, L);
      i(v.anchor, E, T);
      return;
    }
    if (G === ho) {
      B(v, E, T);
      return;
    }
    if (L !== 2 && H & 1 && K)
      if (L === 0)
        K.persisted && !$[un] ? i($, E, T) : (K.beforeEnter($), i($, E, T), $t(() => K.enter($), R));
      else {
        const { leave: re, delayLeave: pe, afterLeave: Ce } = K, ke = () => {
          v.ctx.isUnmounted ? a($) : i($, E, T);
        }, Y = () => {
          const X = $._isLeaving || !!$[un];
          $._isLeaving && $[un](
            !0
            /* cancelled */
          ), K.persisted && !X ? ke() : re($, () => {
            ke(), Ce && Ce();
          });
        };
        pe ? pe($, ke, Y) : Y();
      }
    else
      i($, E, T);
  }, _e = (v, E, T, L = !1, R = !1) => {
    const {
      type: $,
      props: G,
      ref: K,
      children: Z,
      dynamicChildren: H,
      shapeFlag: ve,
      patchFlag: re,
      dirs: pe,
      cacheIndex: Ce,
      memo: ke
    } = v;
    if (re === -2 && (R = !1), K != null && (ni(), sr(K, null, T, v, !0), ii()), Ce != null && (E.renderCache[Ce] = void 0), ve & 256) {
      E.ctx.deactivate(v);
      return;
    }
    const Y = ve & 1 && pe, X = !xa(v);
    let le;
    if (X && (le = G && G.onVnodeBeforeUnmount) && xn(le, E, v), ve & 6)
      Je(v.component, T, L);
    else {
      if (ve & 128) {
        v.suspense.unmount(T, L);
        return;
      }
      Y && Fi(v, null, E, "beforeUnmount"), ve & 64 ? v.type.remove(
        v,
        E,
        T,
        It,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== he || re > 0 && re & 64) ? Ye(
        H,
        E,
        T,
        !1,
        !0
      ) : ($ === he && re & 384 || !R && ve & 16) && Ye(Z, E, T), L && Be(v);
    }
    const Se = ke != null && Ce == null;
    (X && (le = G && G.onVnodeUnmounted) || Y || Se) && $t(() => {
      le && xn(le, E, v), Y && Fi(v, null, E, "unmounted"), Se && (v.el = null);
    }, T);
  }, Be = (v) => {
    const { type: E, el: T, anchor: L, transition: R } = v;
    if (E === he) {
      we(T, L);
      return;
    }
    if (E === ho) {
      z(v);
      return;
    }
    const $ = () => {
      a(T), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (v.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: K } = R, Z = () => G(T, $);
      K ? K(v.el, $, Z) : Z();
    } else
      $();
  }, we = (v, E) => {
    let T;
    for (; v !== E; )
      T = b(v), a(v), v = T;
    a(E);
  }, Je = (v, E, T) => {
    const { bum: L, scope: R, job: $, subTree: G, um: K, m: Z, a: H } = v;
    vu(Z), vu(H), L && po(L), R.stop(), $ && ($.flags |= 8, _e(G, v, E, T)), K && $t(K, E), $t(() => {
      v.isUnmounted = !0;
    }, E);
  }, Ye = (v, E, T, L = !1, R = !1, $ = 0) => {
    for (let G = $; G < v.length; G++)
      _e(v[G], E, T, L, R);
  }, lt = (v) => {
    if (v.shapeFlag & 6)
      return lt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const E = b(v.anchor || v.el), T = E && E[Tf];
    return T ? b(T) : E;
  };
  let mt = !1;
  const Ge = (v, E, T) => {
    let L;
    v == null ? E._vnode && (_e(E._vnode, null, null, !0), L = E._vnode.component) : k(
      E._vnode || null,
      v,
      E,
      null,
      null,
      null,
      T
    ), E._vnode = v, mt || (mt = !0, iu(L), Cf(), mt = !1);
  }, It = {
    p: k,
    um: _e,
    m: ye,
    r: Be,
    mt: D,
    mc: ne,
    pc: Q,
    pbc: se,
    n: lt,
    o: e
  };
  return {
    render: Ge,
    hydrate: void 0,
    createApp: Ym(Ge)
  };
}
function rl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Mi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ee(i) && Ee(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let s = a[r];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[r] = Wn(a[r]), s.el = o.el), !n && s.patchFlag !== -2 && Lc(o, s)), s.type === Br && (s.patchFlag === -1 && (s = a[r] = Wn(s)), s.el = o.el), s.type === Ct && !s.el && (s.el = o.el);
    }
}
function dv(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, s;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const p = e[i];
    if (p !== 0) {
      if (a = n[n.length - 1], e[a] < p) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        s = r + o >> 1, e[n[s]] < p ? r = s + 1 : o = s;
      p < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ep(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ep(t);
}
function vu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tp(t.subTree) : null;
}
const np = (e) => e.__isSuspense;
function fv(e, t) {
  t && t.pendingBranch ? Ee(e) ? t.effects.push(...e) : t.effects.push(e) : wf(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), Br = /* @__PURE__ */ Symbol.for("v-txt"), Ct = /* @__PURE__ */ Symbol.for("v-cmt"), ho = /* @__PURE__ */ Symbol.for("v-stc"), ei = [];
let nn = null;
function C(e = !1) {
  ei.push(nn = e ? null : []);
}
function Pc() {
  ei.pop(), nn = ei[ei.length - 1] || null;
}
let Tr = 1;
function xo(e, t = !1) {
  Tr += e, e < 0 && nn && t && (nn.hasOnce = !0);
}
function ip(e) {
  return e.dynamicChildren = Tr > 0 ? nn || ka : null, Pc(), Tr > 0 && nn && nn.push(e), e;
}
function A(e, t, n, i, a, r) {
  return ip(
    u(
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
function $e(e, t, n, i, a) {
  return ip(
    Te(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function kr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ki(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ap = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || /* @__PURE__ */ Lt(e) || Oe(e) ? { i: Et, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, i = 0, a = null, r = e === he ? 0 : 1, o = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ap(t),
    ref: t && mo(t),
    scopeId: Ns,
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
    ctx: Et
  };
  return s ? (No(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= at(n) ? 8 : 16), Tr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && nn.push(l), l;
}
const Te = pv;
function pv(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Ff) && (e = Ct), kr(e)) {
    const s = xi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && No(s, n), Tr > 0 && !r && nn && (s.shapeFlag & 6 ? nn[nn.indexOf(e)] = s : nn.push(s)), s.patchFlag = -2, s;
  }
  if (wv(e) && (e = e.__vccOpts), t) {
    t = Ar(t);
    let { class: s, style: l } = t;
    s && !at(s) && (t.class = xe(s)), We(l) && (/* @__PURE__ */ Tc(l) && !Ee(l) && (l = pt({}, l)), t.style = pn(l));
  }
  const o = at(e) ? 1 : np(e) ? 128 : Rs(e) ? 64 : We(e) ? 4 : Oe(e) ? 2 : 0;
  return u(
    e,
    t,
    n,
    i,
    a,
    o,
    r,
    !0
  );
}
function Ar(e) {
  return e ? /* @__PURE__ */ Tc(e) || Wf(e) ? pt({}, e) : e : null;
}
function xi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: s, transition: l } = e, p = t ? Pt(a || {}, t) : a, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && ap(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Ee(r) ? r.concat(mo(t)) : [r, mo(t)] : mo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && xi(e.ssContent),
    ssFallback: e.ssFallback && xi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Sr(
    c,
    l.clone(c)
  ), c;
}
function Re(e = " ", t = 0) {
  return Te(Br, null, e, t);
}
function V(e = "", t = !1) {
  return t ? (C(), $e(Ct, null, e)) : Te(Ct, null, e);
}
function Pn(e) {
  return e == null || typeof e == "boolean" ? Te(Ct) : Ee(e) ? Te(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kr(e) ? Wn(e) : Te(Br, null, String(e));
}
function Wn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xi(e);
}
function No(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ee(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), No(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Wf(t) ? t._ctx = Et : a === 3 && Et && (Et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Oe(t)) {
    if (i & 65) {
      No(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Et }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Re(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Pt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = xe([t.class, i.class]));
      else if (a === "style")
        t.style = pn([t.style, i.style]);
      else if (_s(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Ee(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ws(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function xn(e, t, n, i = null) {
  mn(e, t, 7, [
    n,
    i
  ]);
}
const hv = Bf();
let mv = 0;
function vv(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || hv, r = {
    uid: mv++,
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
    scope: new $h(
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
    propsOptions: Zf(i, a),
    emitsOptions: Vf(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Zm.bind(null, r), e.ce && e.ce(r), r;
}
let Ot = null;
const ia = () => Ot || Et;
let Oo, xr;
{
  const e = Ts(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Oo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ot = n
  ), xr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nr = n
  );
}
const Hr = (e) => {
  const t = Ot;
  return Oo(e), e.scope.on(), () => {
    e.scope.off(), Oo(t);
  };
}, gu = () => {
  Ot && Ot.scope.off(), Oo(null);
};
function rp(e) {
  return e.vnode.shapeFlag & 4;
}
let Nr = !1;
function gv(e, t = !1, n = !1) {
  t && xr(t);
  const { props: i, children: a } = e.vnode, r = rp(e);
  nv(e, i, r, t), ov(e, a, n || t);
  const o = r ? bv(e, t) : void 0;
  return t && xr(!1), o;
}
function bv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zm);
  const { setup: i } = n;
  if (i) {
    ni();
    const a = e.setupContext = i.length > 1 ? sp(e) : null, r = Hr(e), o = zr(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), s = Wd(o);
    if (ii(), r(), (s || e.sp) && !xa(e) && Lf(e), s) {
      if (o.then(gu, gu), t)
        return o.then((l) => {
          xr(!0);
          try {
            bu(e, l, t);
          } finally {
            xr(!1);
          }
        }).catch((l) => {
          xs(l, e, 0);
        });
      e.asyncDep = o;
    } else
      bu(e, o);
  } else
    op(e);
}
function bu(e, t, n) {
  Oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) && (e.setupState = bf(t)), op(e);
}
function op(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || fn);
  {
    const a = Hr(e);
    ni();
    try {
      jm(e);
    } finally {
      ii(), a();
    }
  }
}
const yv = {
  get(e, t) {
    return xt(e, "get", ""), e[t];
  }
};
function sp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, yv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ds(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bf(am(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lr)
        return lr[n](e);
    },
    has(t, n) {
      return n in t || n in lr;
    }
  })) : e.proxy;
}
function _v(e, t = !0) {
  return Oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wv(e) {
  return Oe(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ um(e, t, Nr);
function Vt(e, t, n) {
  try {
    xo(-1);
    const i = arguments.length;
    return i === 2 ? We(t) && !Ee(t) ? kr(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && kr(n) && (n = [n]), Te(e, t, n));
  } finally {
    xo(1);
  }
}
const Cv = "3.5.42", Ev = fn;
let Yl;
const yu = typeof window < "u" && window.trustedTypes;
if (yu)
  try {
    Yl = /* @__PURE__ */ yu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lp = Yl ? (e) => Yl.createHTML(e) : (e) => e, Sv = "http://www.w3.org/2000/svg", Tv = "http://www.w3.org/1998/Math/MathML", qn = typeof document < "u" ? document : null, _u = qn && /* @__PURE__ */ qn.createElement("template"), kv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? qn.createElementNS(Sv, e) : t === "mathml" ? qn.createElementNS(Tv, e) : n ? qn.createElement(e, { is: n }) : qn.createElement(e);
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
    const o = n ? n.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      _u.innerHTML = lp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const s = _u.content;
      if (i === "svg" || i === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, mi = "transition", ja = "animation", Or = /* @__PURE__ */ Symbol("_vtc"), cp = {
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
}, Av = /* @__PURE__ */ pt(
  {},
  Af,
  cp
), xv = (e) => (e.displayName = "Transition", e.props = Av, e), Nv = /* @__PURE__ */ xv(
  (e, { slots: t }) => Vt(xm, Ov(e), t)
), $i = (e, t = []) => {
  Ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, wu = (e) => e ? Ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ov(e) {
  const t = {};
  for (const J in e)
    J in cp || (t[J] = e[J]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = r,
    appearActiveClass: p = o,
    appearToClass: c = s,
    leaveFromClass: m = `${n}-leave-from`,
    leaveActiveClass: b = `${n}-leave-active`,
    leaveToClass: S = `${n}-leave-to`
  } = e, x = Rv(a), k = x && x[0], N = x && x[1], {
    onBeforeEnter: O,
    onEnter: F,
    onEnterCancelled: B,
    onLeave: z,
    onLeaveCancelled: ce,
    onBeforeAppear: de = O,
    onAppear: te = F,
    onAppearCancelled: ne = B
  } = t, I = (J, ie, D, M) => {
    J._enterCancelled = M, zi(J, ie ? c : s), zi(J, ie ? p : o), D && D();
  }, se = (J, ie) => {
    J._isLeaving = !1, zi(J, m), zi(J, S), zi(J, b), ie && ie();
  }, me = (J) => (ie, D) => {
    const M = J ? te : F, W = () => I(ie, J, D);
    $i(M, [ie, W]), Cu(() => {
      zi(ie, J ? l : r), jn(ie, J ? c : s), wu(M) || Eu(ie, i, k, W);
    });
  };
  return pt(t, {
    onBeforeEnter(J) {
      $i(O, [J]), jn(J, r), jn(J, o);
    },
    onBeforeAppear(J) {
      $i(de, [J]), jn(J, l), jn(J, p);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(J, ie) {
      J._isLeaving = !0;
      const D = () => se(J, ie);
      jn(J, m), J._enterCancelled ? (jn(J, b), ku(J)) : (ku(J), jn(J, b)), Cu(() => {
        J._isLeaving && (zi(J, m), jn(J, S), wu(z) || Eu(J, i, N, D));
      }), $i(z, [J, D]);
    },
    onEnterCancelled(J) {
      I(J, !1, void 0, !0), $i(B, [J]);
    },
    onAppearCancelled(J) {
      I(J, !0, void 0, !0), $i(ne, [J]);
    },
    onLeaveCancelled(J) {
      se(J), $i(ce, [J]);
    }
  });
}
function Rv(e) {
  if (e == null)
    return null;
  if (We(e))
    return [ol(e.enter), ol(e.leave)];
  {
    const t = ol(e);
    return [t, t];
  }
}
function ol(e) {
  return xh(e);
}
function jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Or] || (e[Or] = /* @__PURE__ */ new Set())).add(t);
}
function zi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Or];
  n && (n.delete(t), n.size || (e[Or] = void 0));
}
function Cu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Lv = 0;
function Eu(e, t, n, i) {
  const a = e._endId = ++Lv, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: s, propCount: l } = Pv(e, t);
  if (!o)
    return i();
  const p = o + "end";
  let c = 0;
  const m = () => {
    e.removeEventListener(p, b), r();
  }, b = (S) => {
    S.target === e && ++c >= l && m();
  };
  setTimeout(() => {
    c < l && m();
  }, s + 1), e.addEventListener(p, b);
}
function Pv(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${mi}Delay`), r = i(`${mi}Duration`), o = Su(a, r), s = i(`${ja}Delay`), l = i(`${ja}Duration`), p = Su(s, l);
  let c = null, m = 0, b = 0;
  t === mi ? o > 0 && (c = mi, m = o, b = r.length) : t === ja ? p > 0 && (c = ja, m = p, b = l.length) : (m = Math.max(o, p), c = m > 0 ? o > p ? mi : ja : null, b = c ? c === mi ? r.length : l.length : 0);
  const S = c === mi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${mi}Property`).toString()
  );
  return {
    type: c,
    timeout: m,
    propCount: b,
    hasTransform: S
  };
}
function Su(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Tu(n) + Tu(e[i])));
}
function Tu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ku(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Iv(e, t, n) {
  const i = e[Or];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ro = /* @__PURE__ */ Symbol("_vod"), up = /* @__PURE__ */ Symbol("_vsh"), Oa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ro] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Va(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Va(e, !0), i.enter(e)) : i.leave(e, () => {
      Va(e, !1);
    }) : Va(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Va(e, t);
  }
};
function Va(e, t) {
  e.style.display = t ? e[Ro] : "none", e[up] = !t;
}
const dp = /* @__PURE__ */ Symbol("");
function Dv(e) {
  const t = ia();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Lo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Lo(t.ce, a) : Zl(t.subTree, a), n(a);
  };
  Df(() => {
    wf(i);
  }), Oi(() => {
    Wt(i, fn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Ur(() => a.disconnect());
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
    Lo(e.el, t);
  else if (e.type === he)
    e.children.forEach((n) => Zl(n, t));
  else if (e.type === ho) {
    let { el: n, anchor: i } = e;
    for (; n && (Lo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Lo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Mh(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[dp] = i;
  }
}
const Fv = /(?:^|;)\s*display\s*:/;
function Mv(e, t, n) {
  const i = e.style, a = at(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (at(t))
        for (const o of t.split(";")) {
          const s = o.slice(0, o.indexOf(":")).trim();
          n[s] == null && er(i, s, "");
        }
      else
        for (const o in t)
          n[o] == null && er(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const s = n[o];
      s != null ? zv(
        e,
        o,
        !at(t) && t ? t[o] : void 0,
        s
      ) || er(i, o, s) : er(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[dp];
      o && (n += ";" + o), i.cssText = n, r = Fv.test(n);
    }
  } else t && e.removeAttribute("style");
  Ro in e && (e[Ro] = r ? i.display : "", e[up] && (i.display = "none"));
}
const no = /\s*!important$/;
function er(e, t, n) {
  if (Ee(n))
    n.forEach((i) => er(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    no.test(n) ? e.setProperty(t, n.replace(no, ""), "important") : e.setProperty(t, n);
  else {
    const i = $v(e, t);
    no.test(n) ? e.setProperty(
      oi(i),
      n.replace(no, ""),
      "important"
    ) : e[i] = n;
  }
}
const Au = ["Webkit", "Moz", "ms"], sl = {};
function $v(e, t) {
  const n = sl[t];
  if (n)
    return n;
  let i = Rt(t);
  if (i !== "filter" && i in e)
    return sl[t] = i;
  i = Es(i);
  for (let a = 0; a < Au.length; a++) {
    const r = Au[a] + i;
    if (r in e)
      return sl[t] = r;
  }
  return t;
}
function zv(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && at(i) && n === i;
}
const xu = "http://www.w3.org/1999/xlink";
function Nu(e, t, n, i, a, r = Ih(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xu, t.slice(6, t.length)) : e.setAttributeNS(xu, t, n) : n == null || r && !Jd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Cn(n) ? String(n) : n
  );
}
function Ou(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lp(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const s = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Jd(n) : n == null && s === "string" ? (n = "", o = !0) : s === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Gi(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Uv(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ru = /* @__PURE__ */ Symbol("_vei");
function Bv(e, t, n, i, a = null) {
  const r = e[Ru] || (e[Ru] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [s, l] = Vv(t);
    if (i) {
      const p = r[t] = qv(
        i,
        a
      );
      Gi(e, s, p, l);
    } else o && (Uv(e, s, o, l), r[t] = void 0);
  }
}
const Hv = /(Once|Passive|Capture)$/, jv = /^on:?(?:Once|Passive|Capture)$/;
function Vv(e) {
  let t, n;
  for (; (n = e.match(Hv)) && !jv.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : oi(e.slice(2)), t];
}
let ll = 0;
const Kv = /* @__PURE__ */ Promise.resolve(), Gv = () => ll || (Kv.then(() => ll = 0), ll = Date.now());
function qv(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Ee(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const o = a.slice(), s = [i];
      for (let l = 0; l < o.length && !i._stopped; l++) {
        const p = o[l];
        p && mn(
          p,
          t,
          5,
          s
        );
      }
    } else
      mn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Gv(), n;
}
const Lu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wv = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Iv(e, i, o) : t === "style" ? Mv(e, n, i) : _s(t) ? ws(t) || Bv(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yv(e, t, i, o)) ? (Ou(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nu(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Zv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !at(i))) ? Ou(e, Rt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Nu(e, t, i, o));
};
function Yv(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Lu(t) && Oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Lu(t) && at(n) ? !1 : t in e;
}
function Zv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Rt(t);
  return Array.isArray(n) ? n.some((a) => Rt(a) === i) : Object.keys(n).some((a) => Rt(a) === i);
}
const Po = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ee(t) ? (n) => po(t, n) : t;
};
function Xv(e) {
  e.target.composing = !0;
}
function Pu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wi = /* @__PURE__ */ Symbol("_assign"), io = /* @__PURE__ */ Symbol("_initialValue");
function cl(e, t, n) {
  return t && (e = e.trim()), n && (e = Ss(e)), e;
}
const vo = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[io] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[io] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Wi] = Po(a);
    const r = i || a.props && a.props.type === "number";
    Gi(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Wi](cl(e.value, n, r));
    }), (n || r) && Gi(e, "change", () => {
      e.value = cl(e.value, n, r);
    }), t || (Gi(e, "compositionstart", Xv), Gi(e, "compositionend", Pu), Gi(e, "change", Pu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[io];
    delete e[io], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Wi](cl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Wi] = Po(o), e.composing) return;
    const s = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ss(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, Gi(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Ss(Io(l)) : Io(l)
      ), r = e.multiple, o = r ? ta(e._modelValue) ? new Set(a) : a : a[0], s = e._pendingValue = [
        r,
        r ? Ee(o) ? a.slice() : a : o
      ];
      try {
        e[Wi](o);
      } finally {
        Qi(() => {
          e._pendingValue === s && (e._pendingValue = void 0);
        });
      }
    }), e[Wi] = Po(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Iu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Wi] = Po(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Jv(t, n[1], n[0])) && Iu(e, t);
  }
};
function Jv(e, t, n) {
  if (!n || Ee(e)) return Ai(e, t);
  if (ta(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Iu(e, t) {
  const n = e.multiple, i = Ee(t);
  if (!(n && !i && !ta(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], s = Io(o);
      if (n)
        if (i) {
          const l = typeof s;
          l === "string" || l === "number" ? o.selected = t.some((p) => String(p) === String(s)) : o.selected = Fh(t, s) > -1;
        } else
          o.selected = t.has(s);
      else if (Ai(Io(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Io(e) {
  return "_value" in e ? e._value : e.value;
}
const Qv = ["ctrl", "shift", "alt", "meta"], eg = {
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
  exact: (e, t) => Qv.some((n) => e[`${n}Key`] && !t.includes(n))
}, it = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const s = eg[t[o]];
      if (s && s(a, t)) return;
    }
    return e(a, ...r);
  }));
}, tg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = oi(a.key);
    if (t.some(
      (o) => o === r || tg[o] === r
    ))
      return e(a);
  }));
}, ng = /* @__PURE__ */ pt({ patchProp: Wv }, kv);
let Du;
function ig() {
  return Du || (Du = lv(ng));
}
const ag = ((...e) => {
  const t = ig().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = og(i);
    if (!a) return;
    const r = t._component;
    !Oe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, rg(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function rg(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function og(e) {
  return at(e) ? document.querySelector(e) : e;
}
function Ic(e, t, n) {
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
function Fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function sg(e) {
  if (Array.isArray(e)) return e;
}
function lg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, s = [], l = !0, p = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); l = !0) ;
    } catch (c) {
      p = !0, a = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (p) throw a;
      }
    }
    return s;
  }
}
function cg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ug(e, t) {
  return sg(e) || lg(e, t) || dg(e, t) || cg();
}
function dg(e, t) {
  if (e) {
    if (typeof e == "string") return Fu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fu(e, t) : void 0;
  }
}
const fp = Object.entries, Mu = Object.setPrototypeOf, fg = Object.isFrozen, pg = Object.getPrototypeOf, hg = Object.getOwnPropertyDescriptor;
let vt = Object.freeze, bt = Object.seal, Sa = Object.create, pp = typeof Reflect < "u" && Reflect, Xl = pp.apply, Jl = pp.construct;
vt || (vt = function(t) {
  return t;
});
bt || (bt = function(t) {
  return t;
});
Xl || (Xl = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Jl || (Jl = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ji = ht(Array.prototype.forEach), mg = ht(Array.prototype.lastIndexOf), $u = ht(Array.prototype.pop), Ka = ht(Array.prototype.push), vg = ht(Array.prototype.splice), Ra = Array.isArray, tr = ht(String.prototype.toLowerCase), ul = ht(String.prototype.toString), zu = ht(String.prototype.match), Ga = ht(String.prototype.replace), Uu = ht(String.prototype.indexOf), gg = ht(String.prototype.trim), bg = ht(Number.prototype.toString), yg = ht(Boolean.prototype.toString), Bu = typeof BigInt > "u" ? null : ht(BigInt.prototype.toString), Hu = typeof Symbol > "u" ? null : ht(Symbol.prototype.toString), Kt = ht(Object.prototype.hasOwnProperty), qa = ht(Object.prototype.toString), kt = ht(RegExp.prototype.test), Ui = _g(TypeError);
function ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Xl(e, t, i);
  };
}
function _g(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Jl(e, n);
  };
}
function je(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tr;
  if (Mu && Mu(e, null), !Ra(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (fg(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function wg(e) {
  for (let t = 0; t < e.length; t++)
    Kt(e, t) || (e[t] = null);
  return e;
}
function en(e) {
  const t = Sa(null);
  for (const i of fp(e)) {
    var n = ug(i, 2);
    const a = n[0], r = n[1];
    Kt(e, a) && (Ra(r) ? t[a] = wg(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = en(r) : t[a] = r);
  }
  return t;
}
function Cg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return bg(e);
    case "boolean":
      return yg(e);
    case "bigint":
      return Bu ? Bu(e) : "0";
    case "symbol":
      return Hu ? Hu(e) : "Symbol()";
    case "undefined":
      return qa(e);
    case "function":
    case "object": {
      if (e === null)
        return qa(e);
      const t = e, n = bn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : qa(i);
      }
      return qa(e);
    }
    default:
      return qa(e);
  }
}
function bn(e, t) {
  for (; e !== null; ) {
    const i = hg(e, t);
    if (i) {
      if (i.get)
        return ht(i.get);
      if (typeof i.value == "function")
        return ht(i.value);
    }
    e = pg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Eg(e) {
  try {
    return kt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ju = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dl = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fl = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sg = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pl = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Tg = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vu = vt(["#text"]), Ku = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hl = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gu = vt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ao = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kg = bt(/{{[\w\W]*|^[\w\W]*}}/g), Ag = bt(/<%[\w\W]*|^[\w\W]*%>/g), xg = bt(/\${[\w\W]*/g), Ng = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Og = bt(/^aria-[\-\w]+$/), qu = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rg = bt(/^(?:\w+script|data):/i), Lg = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Pg = bt(/^html$/i), Ig = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), Wu = bt(/<[/\w!]/g), Yu = bt(/<[/\w]/g), Dg = bt(/<\/no(script|embed|frames)/i), Fg = bt(/\/>/i), Qt = {
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
}, hp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Mg = vt(je({}, hp)), $g = (function() {
  const e = {};
  return ji(hp, (t) => {
    e[t] = bt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), vt(e);
})(), zg = function() {
  return typeof window > "u" ? null : window;
}, Ug = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (i = n.getAttribute(a));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(r, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, Zu = function() {
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
}, vi = function(t, n, i, a) {
  return Kt(t, n) && Ra(t[n]) ? je(a.base ? en(a.base) : {}, t[n], a.transform) : i;
}, ml = function(t, n, i) {
  const a = Kt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? en(a) : i();
};
function mp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zg();
  const t = (ee) => mp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Qt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, p = e.NamedNodeMap;
  p === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, m = e.trustedTypes, b = s.prototype, S = bn(b, "cloneNode"), x = bn(b, "remove"), k = bn(b, "nextSibling"), N = bn(b, "childNodes"), O = bn(b, "parentNode"), F = bn(b, "shadowRoot"), B = bn(b, "attributes"), z = o && o.prototype ? bn(o.prototype, "nodeType") : null, ce = o && o.prototype ? bn(o.prototype, "nodeName") : null, de = o && o.prototype ? bn(o.prototype, "ownerDocument") : null, te = function(_) {
    return z ? z(_) : _.nodeType;
  }, ne = function(_) {
    return ce ? ce(_) : _.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let I, se = "", me, J = !1, ie = 0;
  const D = function() {
    if (ie > 0)
      throw Ui('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(_) {
    D(), ie++;
    try {
      return I.createHTML(_);
    } finally {
      ie--;
    }
  }, W = function(_) {
    D(), ie++;
    try {
      return I.createScriptURL(_);
    } finally {
      ie--;
    }
  }, oe = function() {
    return J || (me = Ug(m, a), J = !0), me;
  }, Q = n, ue = Q.implementation, fe = Q.createNodeIterator, ye = Q.createDocumentFragment, _e = Q.getElementsByTagName, Be = i.importNode;
  let we = Zu();
  t.isSupported = typeof fp == "function" && typeof O == "function" && ue && ue.createHTMLDocument !== void 0;
  const Je = kg, Ye = Ag, lt = xg, mt = Ng, Ge = Og, It = Rg, U = Lg, v = Ig;
  let E = qu, T = null;
  const L = je({}, [...ju, ...dl, ...fl, ...pl, ...Vu]);
  let R = null;
  const $ = je({}, [...Ku, ...hl, ...Gu, ...ao]);
  let G = Object.seal(Sa(null, {
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
  })), K = null, Z = null;
  const H = Object.seal(Sa(null, {
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
  let ve = !0, re = !0, pe = !1, Ce = !0, ke = !1, Y = !0, X = !1, le = !1, Se = null, Ne = null, He = !1, Fe = !1, rt = !1, Qe = !1, ot = !0, Bt = !1;
  const vn = "user-content-";
  let yt = !0, Pi = !1, Dt = {}, an = null;
  const Yt = je({}, [
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
  let li = null;
  const Mn = je({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const $n = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ft = "http://www.w3.org/1998/Math/MathML", zn = "http://www.w3.org/2000/svg", De = "http://www.w3.org/1999/xhtml";
  let rn = De, ci = !1, ui = null;
  const js = je({}, [Ft, zn, De], ul), dt = vt(["mi", "mo", "mn", "ms", "mtext"]);
  let Fa = je({}, dt);
  const ra = vt(["annotation-xml"]);
  let oa = je({}, ra);
  const Ma = je({}, ["title", "style", "font", "a", "script"]);
  let Un = null;
  const sa = ["application/xhtml+xml", "text/html"], Bn = "text/html";
  let et = null, Tt = null;
  const Sn = n.createElement("form"), jt = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, la = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = en(_), Un = // eslint-disable-next-line unicorn/prefer-includes
    sa.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Bn : _.PARSER_MEDIA_TYPE, et = Un === "application/xhtml+xml" ? ul : tr, T = vi(_, "ALLOWED_TAGS", L, {
      transform: et
    }), R = vi(_, "ALLOWED_ATTR", $, {
      transform: et
    }), ui = vi(_, "ALLOWED_NAMESPACES", js, {
      transform: ul
    }), Ht = vi(_, "ADD_URI_SAFE_ATTR", $n, {
      transform: et,
      base: $n
    }), li = vi(_, "ADD_DATA_URI_TAGS", Mn, {
      transform: et,
      base: Mn
    }), an = vi(_, "FORBID_CONTENTS", Yt, {
      transform: et
    }), K = vi(_, "FORBID_TAGS", en({}), {
      transform: et
    }), Z = vi(_, "FORBID_ATTR", en({}), {
      transform: et
    }), Dt = Kt(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? en(_.USE_PROFILES) : _.USE_PROFILES : !1, ve = _.ALLOW_ARIA_ATTR !== !1, re = _.ALLOW_DATA_ATTR !== !1, pe = _.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ke = _.SAFE_FOR_TEMPLATES || !1, Y = _.SAFE_FOR_XML !== !1, X = _.WHOLE_DOCUMENT || !1, Fe = _.RETURN_DOM || !1, rt = _.RETURN_DOM_FRAGMENT || !1, Qe = _.RETURN_TRUSTED_TYPE || !1, He = _.FORCE_BODY || !1, ot = _.SANITIZE_DOM !== !1, Bt = _.SANITIZE_NAMED_PROPS || !1, yt = _.KEEP_CONTENT !== !1, Pi = _.IN_PLACE || !1, E = Eg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : qu, rn = typeof _.NAMESPACE == "string" ? _.NAMESPACE : De, Fa = ml(
      _,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => je({}, dt)
      // Default built-in map
    ), oa = ml(
      _,
      "HTML_INTEGRATION_POINTS",
      () => je({}, ra)
      // Default built-in map
    );
    const P = ml(_, "CUSTOM_ELEMENT_HANDLING", () => Sa(null));
    if (G = Sa(null), Kt(P, "tagNameCheck") && jt(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), Kt(P, "attributeNameCheck") && jt(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), Kt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), bt(G), ke && (re = !1), rt && (Fe = !0), Dt && (T = je({}, Vu), R = Sa(null), Dt.html === !0 && (je(T, ju), je(R, Ku)), Dt.svg === !0 && (je(T, dl), je(R, hl), je(R, ao)), Dt.svgFilters === !0 && (je(T, fl), je(R, hl), je(R, ao)), Dt.mathMl === !0 && (je(T, pl), je(R, Gu), je(R, ao))), H.tagCheck = null, H.attributeCheck = null, Kt(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? H.tagCheck = _.ADD_TAGS : Ra(_.ADD_TAGS) && (T === L && (T = en(T)), je(T, _.ADD_TAGS, et))), Kt(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? H.attributeCheck = _.ADD_ATTR : Ra(_.ADD_ATTR) && (R === $ && (R = en(R)), je(R, _.ADD_ATTR, et))), Kt(_, "ADD_FORBID_CONTENTS") && Ra(_.ADD_FORBID_CONTENTS) && (an === Yt && (an = en(an)), je(an, _.ADD_FORBID_CONTENTS, et)), yt && (T["#text"] = !0), X && je(T, ["html", "head", "body"]), T.table && (je(T, ["tbody"]), delete K.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ui('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const y = I;
      I = _.TRUSTED_TYPES_POLICY;
      try {
        se = M("");
      } catch (w) {
        throw I = y, w;
      }
    } else _.TRUSTED_TYPES_POLICY === null ? (I = void 0, se = "") : (I === void 0 && (I = oe()), I && typeof se == "string" && (se = M("")));
    vt && vt(_), Tt = _;
  }, Vr = je({}, [...dl, ...fl, ...Sg]), $a = je({}, [...pl, ...Tg]), Vs = function(_, P, y) {
    return P.namespaceURI === De ? _ === "svg" : P.namespaceURI === Ft ? _ === "svg" && (y === "annotation-xml" || Fa[y]) : !!Vr[_];
  }, Ks = function(_, P, y) {
    return P.namespaceURI === De ? _ === "math" : P.namespaceURI === zn ? _ === "math" && oa[y] : !!$a[_];
  }, gn = function(_, P, y) {
    return P.namespaceURI === zn && !oa[y] || P.namespaceURI === Ft && !Fa[y] ? !1 : !$a[_] && (Ma[_] || !Vr[_]);
  }, Kr = function(_) {
    let P = O(_);
    (!P || !P.tagName) && (P = {
      namespaceURI: rn,
      tagName: "template"
    });
    const y = tr(_.tagName), w = tr(P.tagName);
    return ui[_.namespaceURI] ? _.namespaceURI === zn ? Vs(y, P, w) : _.namespaceURI === Ft ? Ks(y, P, w) : _.namespaceURI === De ? gn(y, P, w) : !!(Un === "application/xhtml+xml" && ui[_.namespaceURI]) : !1;
  }, Zt = function(_) {
    Ka(t.removed, {
      element: _
    });
    try {
      O(_).removeChild(_);
    } catch {
      if (x(_), !O(_))
        throw Ui("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, za = function(_, P, y) {
    try {
      _.removeAttributeNode(P);
    } catch {
      try {
        _.removeAttribute(y);
      } catch {
      }
    }
  }, ca = function(_) {
    di(_);
    const P = N(_);
    if (P) {
      const w = [];
      ji(P, (h) => {
        Ka(w, h);
      }), ji(w, (h) => {
        try {
          x(h);
        } catch {
        }
      });
    }
    const y = B(_);
    if (y)
      for (let w = y.length - 1; w >= 0; --w) {
        const h = y[w], j = h && h.name;
        typeof j == "string" && za(_, h, j);
      }
  }, Tn = function(_, P, y) {
    if (!y)
      try {
        y = P.getAttributeNode(_);
      } catch {
        y = null;
      }
    Ka(t.removed, {
      attribute: y || null,
      from: P
    });
    try {
      y ? P.removeAttributeNode(y) : P.removeAttribute(_);
    } catch {
      try {
        P.removeAttribute(_);
      } catch {
      }
    }
    if (_ === "is")
      if (Fe || rt)
        try {
          Zt(P);
        } catch {
        }
      else
        try {
          P.setAttribute(_, "");
        } catch {
        }
  }, Gs = function(_) {
    const P = B(_);
    if (P)
      for (let y = P.length - 1; y >= 0; --y) {
        const w = P[y], h = w && w.name;
        typeof h != "string" || R[et(h)] || za(_, w, h);
      }
  }, di = function(_) {
    const P = [_];
    for (; P.length > 0; ) {
      const y = P.pop();
      te(y) === Qt.element && Gs(y);
      const h = N(y);
      if (h)
        for (let j = h.length - 1; j >= 0; --j)
          P.push(h[j]);
    }
  }, Ua = function(_, P) {
    return Y ? _ === "patchsrc" ? !0 : _ === "for" && P !== "label" && P !== "output" : !1;
  }, qs = function(_) {
    if (!Y)
      return;
    const P = [_];
    for (; P.length > 0; ) {
      const y = P.pop(), w = te(y);
      if (w === Qt.processingInstruction || w === Qt.comment && kt(Yu, y.data)) {
        try {
          x(y);
        } catch {
        }
        continue;
      }
      if (w === Qt.element) {
        const j = y, ge = et(ne(y));
        try {
          j.hasAttribute && j.hasAttribute("patchsrc") && j.removeAttribute("patchsrc"), j.hasAttribute && j.hasAttribute("for") && Ua("for", ge) && j.removeAttribute("for");
        } catch {
        }
      }
      const h = N(y);
      if (h)
        for (let j = h.length - 1; j >= 0; --j)
          P.push(h[j]);
    }
  }, ua = function(_) {
    let P = null, y = null;
    if (He)
      _ = "<remove></remove>" + _;
    else {
      const j = zu(_, /^[\r\n\t ]+/);
      y = j && j[0];
    }
    Un === "application/xhtml+xml" && rn === De && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const w = I ? M(_) : _;
    if (rn === De)
      try {
        P = new c().parseFromString(w, Un);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = ue.createDocument(rn, "template", null);
      try {
        P.documentElement.innerHTML = ci ? se : w;
      } catch {
      }
    }
    const h = P.body || P.documentElement;
    return _ && y && h.insertBefore(n.createTextNode(y), h.childNodes[0] || null), rn === De ? _e.call(P, X ? "html" : "body")[0] : X ? P.documentElement : h;
  }, Gr = function(_) {
    const P = de ? de(_) : _.ownerDocument;
    return fe.call(
      P || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, da = function(_) {
    return _ = Ga(_, Je, " "), _ = Ga(_, Ye, " "), _ = Ga(_, lt, " "), _;
  }, Ii = function(_) {
    var P;
    _.normalize();
    const y = de ? de(_) : _.ownerDocument, w = fe.call(
      y || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let h = w.nextNode();
    for (; h; )
      h.data = da(h.data), h = w.nextNode();
    const j = (P = _.querySelectorAll) === null || P === void 0 ? void 0 : P.call(_, "template");
    j && ji(j, (ge) => {
      pi(ge.content) && Ii(ge.content);
    });
  }, fi = function(_) {
    const P = ce ? ce(_) : null;
    return typeof P != "string" || et(P) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== B(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== z(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== N(_);
  }, pi = function(_) {
    if (!z || typeof _ != "object" || _ === null)
      return !1;
    try {
      return z(_) === Qt.documentFragment;
    } catch {
      return !1;
    }
  }, Di = function(_) {
    if (!z || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof z(_) == "number";
    } catch {
      return !1;
    }
  };
  function Xt(ee, _, P) {
    ee.length !== 0 && ji(ee, (y) => {
      y.call(t, _, P, Tt);
    });
  }
  const qr = function(_, P) {
    return !!(Y && _.hasChildNodes() && !Di(_.firstElementChild) && kt(Wu, _.textContent) && kt(Wu, _.innerHTML) || Y && _.namespaceURI === De && Mg[P] && (Di(_.firstElementChild) || typeof _.textContent == "string" && kt($g[P], _.textContent)) || _.nodeType === Qt.processingInstruction || Y && _.nodeType === Qt.comment && kt(Yu, _.data));
  }, fa = function(_, P) {
    if (_ instanceof RegExp)
      return kt(_, P);
    if (_ instanceof Function) {
      for (var y = arguments.length, w = new Array(y > 2 ? y - 2 : 0), h = 2; h < y; h++)
        w[h - 2] = arguments[h];
      return !!_(P, ...w);
    }
    return !1;
  }, Ws = function(_, P, y) {
    if (!K[P] && Zr(P) && fa(G.tagNameCheck, P))
      return !1;
    if (yt && !an[P]) {
      const w = O(_), h = N(_);
      if (h && w) {
        const j = h.length;
        for (let ge = j - 1; ge >= 0; --ge) {
          const Ae = _ === y ? S(h[ge], !0) : h[ge];
          w.insertBefore(Ae, k(_));
        }
      }
    }
    return Zt(_), !0;
  }, Wr = function(_, P, y, w) {
    return _.length === 0 ? P : P === y || P === w ? en(P) : P;
  }, pa = function(_, P) {
    return _ === P || O(_) !== null ? !1 : (Pi && di(_), !0);
  }, hi = function(_, P) {
    if (Xt(we.beforeSanitizeElements, _, null), pa(_, P))
      return !0;
    if (fi(_))
      return Zt(_), !0;
    const y = et(ne(_));
    if (T = Wr(we.uponSanitizeElement, T, L, Se), Xt(we.uponSanitizeElement, _, {
      tagName: y,
      allowedTags: T
    }), pa(_, P))
      return !0;
    if (qr(_, y))
      return Zt(_), !0;
    if (K[y] || !(H.tagCheck instanceof Function && H.tagCheck(y)) && !T[y]) {
      const h = Ws(_, y, P);
      return h === !1 && Xt(we.afterSanitizeElements, _, null), h;
    }
    if (te(_) === Qt.element && !Kr(_) || (y === "noscript" || y === "noembed" || y === "noframes") && kt(Dg, _.innerHTML))
      return Zt(_), !0;
    if (ke && _.nodeType === Qt.text) {
      const h = da(_.textContent);
      _.textContent !== h && (Ka(t.removed, {
        element: _.cloneNode()
      }), _.textContent = h);
    }
    return Xt(we.afterSanitizeElements, _, null), !1;
  }, Yr = function(_, P, y) {
    if (Z[P] || Ua(P, _) || ot && (P === "id" || P === "name") && (y in n || y in Sn))
      return !1;
    const w = R[P] || H.attributeCheck instanceof Function && H.attributeCheck(P, _);
    return re && kt(mt, P) || ve && kt(Ge, P) ? !0 : w ? Ht[P] || kt(E, Ga(y, U, "")) || (P === "src" || P === "xlink:href" || P === "href") && _ !== "script" && Uu(y, "data:") === 0 && li[_] || pe && !kt(It, Ga(y, U, "")) ? !0 : !y : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Zr(_) && fa(G.tagNameCheck, _) && fa(G.attributeNameCheck, P, _) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && G.allowCustomizedBuiltInElements && fa(G.tagNameCheck, y)
    );
  }, Ys = je({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Zr = function(_) {
    return !Ys[tr(_)] && kt(v, _);
  }, Zs = function(_, P, y, w) {
    if (I && typeof m == "object" && typeof m.getAttributeType == "function" && !y)
      switch (m.getAttributeType(_, P)) {
        case "TrustedHTML":
          return M(w);
        case "TrustedScriptURL":
          return W(w);
      }
    return w;
  }, Xs = function(_, P, y, w) {
    try {
      y ? _.setAttributeNS(y, P, w) : _.setAttribute(P, w), fi(_) ? Zt(_) : $u(t.removed);
    } catch {
      Tn(P, _);
    }
  }, Xr = function(_) {
    Xt(we.beforeSanitizeAttributes, _, null);
    const P = _.attributes;
    if (!P || fi(_))
      return;
    R = Wr(we.uponSanitizeAttribute, R, $, Ne);
    const y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let w = P.length;
    const h = et(_.nodeName);
    for (; w--; ) {
      const j = P[w], ge = j.name, Ae = j.namespaceURI, Ze = j.value, st = et(ge), kn = Ze;
      let ct = ge === "value" ? kn : gg(kn);
      if (y.attrName = st, y.attrValue = ct, y.keepAttr = !0, y.forceKeepAttr = void 0, Xt(we.uponSanitizeAttribute, _, y), ct = y.attrValue, Bt && (st === "id" || st === "name") && Uu(ct, vn) !== 0 && (Tn(ge, _, j), ct = vn + ct), Y && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ct)) {
        Tn(ge, _, j);
        continue;
      }
      if (st === "attributename" && zu(ct, "href")) {
        Tn(ge, _, j);
        continue;
      }
      if (!y.forceKeepAttr) {
        if (!y.keepAttr) {
          Tn(ge, _, j);
          continue;
        }
        if (!Ce && kt(Fg, ct)) {
          Tn(ge, _, j);
          continue;
        }
        if (ke && (ct = da(ct)), !Yr(h, st, ct)) {
          Tn(ge, _, j);
          continue;
        }
        ct = Zs(h, st, Ae, ct), ct !== kn && Xs(_, ge, Ae, ct);
      }
    }
    Xt(we.afterSanitizeAttributes, _, null);
  }, ha = function(_) {
    let P = null;
    const y = Gr(_);
    for (Xt(we.beforeSanitizeShadowDOM, _, null); P = y.nextNode(); )
      if (Xt(we.uponSanitizeShadowNode, P, null), hi(P, _), Xr(P), pi(P.content) && ha(P.content), te(P) === Qt.element) {
        const w = F(P);
        pi(w) && (ma(w), ha(w));
      }
    Xt(we.afterSanitizeShadowDOM, _, null);
  }, ma = function(_) {
    const P = [{
      node: _,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const y = P.pop();
      if (y.shadow) {
        ha(y.shadow);
        continue;
      }
      const w = y.node, j = te(w) === Qt.element, ge = N(w);
      if (ge)
        for (let Ae = ge.length - 1; Ae >= 0; --Ae)
          P.push({
            node: ge[Ae],
            shadow: null
          });
      if (j) {
        const Ae = ce ? ce(w) : null;
        if (typeof Ae == "string" && et(Ae) === "template") {
          const Ze = w.content;
          pi(Ze) && P.push({
            node: Ze,
            shadow: null
          });
        }
      }
      if (j) {
        const Ae = F(w);
        pi(Ae) && P.push({
          node: null,
          shadow: Ae
        }, {
          node: Ae,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, y = null, w = null, h = null;
    if (ci = !ee, ci && (ee = "<!-->"), typeof ee != "string" && !Di(ee) && (ee = Cg(ee), typeof ee != "string"))
      throw Ui("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    le ? (T = Se, R = Ne) : la(_), (we.uponSanitizeElement.length > 0 || we.uponSanitizeAttribute.length > 0) && (T = en(T)), we.uponSanitizeAttribute.length > 0 && (R = en(R)), t.removed = [];
    const j = Pi && typeof ee != "string" && Di(ee);
    if (j) {
      qs(ee);
      const Ze = ne(ee);
      if (typeof Ze == "string") {
        const st = et(Ze);
        if (!T[st] || K[st])
          throw ca(ee), Ui("root node is forbidden and cannot be sanitized in-place");
      }
      if (fi(ee))
        throw ca(ee), Ui("root node is clobbered and cannot be sanitized in-place");
      try {
        ma(ee);
      } catch (st) {
        throw ca(ee), st;
      }
    } else if (Di(ee))
      P = ua("<!---->"), y = P.ownerDocument.importNode(ee, !0), y.nodeType === Qt.element && y.nodeName === "BODY" || y.nodeName === "HTML" ? P = y : P.appendChild(y), ma(y);
    else {
      if (!Fe && !ke && !X && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return I && Qe ? M(ee) : ee;
      if (P = ua(ee), !P)
        return Fe ? null : Qe ? se : "";
    }
    P && He && Zt(P.firstChild);
    const ge = j ? ee : P;
    try {
      const Ze = Gr(ge);
      for (; w = Ze.nextNode(); )
        hi(w, ge), Xr(w), pi(w.content) && ha(w.content);
    } catch (Ze) {
      throw j && (ca(ee), ji(t.removed, (st) => {
        st.element && di(st.element);
      })), Ze;
    }
    if (j)
      return ji(t.removed, (Ze) => {
        Ze.element && di(Ze.element);
      }), ke && Ii(ee), ee;
    if (Fe) {
      if (ke && Ii(P), rt)
        for (h = ye.call(P.ownerDocument); P.firstChild; )
          h.appendChild(P.firstChild);
      else
        h = P;
      return (R.shadowroot || R.shadowrootmode) && (h = Be.call(i, h, !0)), h;
    }
    let Ae = X ? P.outerHTML : P.innerHTML;
    return X && T["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && kt(Pg, P.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Ae), ke && (Ae = da(Ae)), I && Qe ? M(Ae) : Ae;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    la(ee), le = !0, Se = T, Ne = R;
  }, t.clearConfig = function() {
    Tt = null, le = !1, Se = null, Ne = null, I = me, se = "";
  }, t.isValidAttribute = function(ee, _, P) {
    Tt || la({});
    const y = et(ee), w = et(_);
    return Yr(y, w, P);
  }, t.addHook = function(ee, _) {
    typeof _ == "function" && Kt(we, ee) && Ka(we[ee], _);
  }, t.removeHook = function(ee, _) {
    if (Kt(we, ee)) {
      if (_ !== void 0) {
        const P = mg(we[ee], _);
        return P === -1 ? void 0 : vg(we[ee], P, 1)[0];
      }
      return $u(we[ee]);
    }
  }, t.removeHooks = function(ee) {
    Kt(we, ee) && (we[ee] = []);
  }, t.removeAllHooks = function() {
    we = Zu();
  }, t;
}
var vp = mp();
function Dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vl, Xu;
function Bg() {
  if (Xu) return vl;
  Xu = 1;
  var e = /["'&<>]/;
  vl = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, o = "", s = 0, l = 0;
    for (s = a.index; s < i.length; s++) {
      switch (i.charCodeAt(s)) {
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
      l !== s && (o += i.substring(l, s)), l = s + 1, o += r;
    }
    return l !== s ? o + i.substring(l, s) : o;
  }
  return vl;
}
var Hg = Bg();
const Do = /* @__PURE__ */ Dc(Hg);
function jg() {
  return globalThis._nc_l10n_locale;
}
function Vg() {
  return jg().replaceAll(/_/g, "-");
}
function Fs() {
  return globalThis._nc_l10n_language;
}
function Kg(e) {
  const t = Fs();
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
function gp(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function d(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, s = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (k) => k, p = (s.sanitize ? vp.sanitize : l) || l, c = s.escape ? Do : l, m = (k) => typeof k == "string" || typeof k == "number", b = (k, N, O) => k.replace(/%n/g, "" + O).replace(/{([^{}]*)}/g, (F, B) => {
    if (N === void 0 || !(B in N))
      return c(F);
    const z = N[B];
    return m(z) ? c(`${z}`) : typeof z == "object" && m(z.value) ? (z.escape !== !1 ? Do : l)(`${z.value}`) : c(F);
  });
  let x = (a?.bundle ?? gp(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, p(typeof r == "object" || o !== void 0 ? b(
    x,
    r,
    o
  ) : x);
}
function Gg(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", s = r?.bundle ?? gp(e), l = s.translations[o];
  if (typeof l < "u") {
    const p = l;
    if (Array.isArray(p)) {
      const c = s.pluralFunction(i);
      return d(e, p[c], a, i, r);
    }
  }
  return i === 1 ? d(e, t, a, i, r) : d(e, n, a, i, r);
}
function qg(e, t = Fs()) {
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
class Fo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Fo.GLOBAL_SCOPE_PERSISTENT : Fo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Wg {
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
    return new Fo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function bp(e) {
  return new Wg(e);
}
function Yg() {
  try {
    return Ic("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var gl, Ju;
function yp() {
  if (Ju) return gl;
  Ju = 1;
  var e = {};
  return gl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, gl;
}
var bl, Qu;
function _p() {
  if (Qu) return bl;
  Qu = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return bl = {
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
  }, bl;
}
var ro = { exports: {} }, ed;
function Zg() {
  return ed || (ed = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = _p(), r = yp();
    t = e.exports = {};
    const o = t.re = [], s = t.safeRe = [], l = t.src = [], p = t.safeSrc = [], c = t.t = {};
    let m = 0;
    const b = "[a-zA-Z0-9-]", S = [
      ["\\s", 1],
      ["\\d", a],
      [b, i]
    ], x = (N) => {
      for (const [O, F] of S)
        N = N.split(`${O}*`).join(`${O}{0,${F}}`).split(`${O}+`).join(`${O}{1,${F}}`);
      return N;
    }, k = (N, O, F) => {
      const B = x(O), z = m++;
      r(N, z, O), c[N] = z, l[z] = O, p[z] = B, o[z] = new RegExp(O, F ? "g" : void 0), s[z] = new RegExp(B, F ? "g" : void 0);
    };
    k("NUMERICIDENTIFIER", "0|[1-9]\\d*"), k("NUMERICIDENTIFIERLOOSE", "\\d+"), k("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${b}*`), k("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), k("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), k("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), k("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), k("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), k("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), k("BUILDIDENTIFIER", `${b}+`), k("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), k("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), k("FULL", `^${l[c.FULLPLAIN]}$`), k("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), k("LOOSE", `^${l[c.LOOSEPLAIN]}$`), k("GTLT", "((?:<|>)?=?)"), k("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), k("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), k("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), k("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), k("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), k("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), k("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), k("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), k("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), k("COERCERTL", l[c.COERCE], !0), k("COERCERTLFULL", l[c.COERCEFULL], !0), k("LONETILDE", "(?:~>?)"), k("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", k("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), k("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), k("LONECARET", "(?:\\^)"), k("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", k("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), k("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), k("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), k("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), k("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", k("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), k("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), k("STAR", "(<|>)?=?\\s*\\*"), k("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), k("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ro, ro.exports)), ro.exports;
}
var yl, td;
function Xg() {
  if (td) return yl;
  td = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return yl = (i) => i ? typeof i != "object" ? e : i : t, yl;
}
var _l, nd;
function Jg() {
  if (nd) return _l;
  nd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return _l = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, _l;
}
var wl, id;
function wp() {
  if (id) return wl;
  id = 1;
  const e = yp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = _p(), { safeRe: i, t: a } = Zg(), r = Xg(), { compareIdentifiers: o } = Jg(), s = (p, c) => {
    const m = c.split(".");
    if (m.length > p.length)
      return !1;
    for (let b = 0; b < m.length; b++)
      if (o(p[b], m[b]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(c, m) {
      if (m = r(m), c instanceof l) {
        if (c.loose === !!m.loose && c.includePrerelease === !!m.includePrerelease)
          return c;
        c = c.version;
      } else if (typeof c != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
      if (c.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", c, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
      const b = c.trim().match(m.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!b)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +b[1], this.minor = +b[2], this.patch = +b[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      b[4] ? this.prerelease = b[4].split(".").map((S) => {
        if (/^[0-9]+$/.test(S)) {
          const x = +S;
          if (x >= 0 && x < n)
            return x;
        }
        return S;
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
      let m = 0;
      do {
        const b = this.prerelease[m], S = c.prerelease[m];
        if (e("prerelease compare", m, b, S), b === void 0 && S === void 0)
          return 0;
        if (S === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === S)
          continue;
        return o(b, S);
      } while (++m);
    }
    compareBuild(c) {
      c instanceof l || (c = new l(c, this.options));
      let m = 0;
      do {
        const b = this.build[m], S = c.build[m];
        if (e("build compare", m, b, S), b === void 0 && S === void 0)
          return 0;
        if (S === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === S)
          continue;
        return o(b, S);
      } while (++m);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, m, b) {
      if (c.startsWith("pre")) {
        if (!m && b === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (m) {
          const S = `-${m}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!S || S[1] !== m)
            throw new Error(`invalid identifier: ${m}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m, b);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m, b);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", m, b), this.inc("pre", m, b);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", m, b), this.inc("pre", m, b);
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
          const S = Number(b) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [S];
          else {
            let x = this.prerelease.length;
            for (; --x >= 0; )
              typeof this.prerelease[x] == "number" && (this.prerelease[x]++, x = -2);
            if (x === -1) {
              if (m === this.prerelease.join(".") && b === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(S);
            }
          }
          if (m) {
            let x = [m, S];
            if (b === !1 && (x = [m]), s(this.prerelease, m)) {
              const k = this.prerelease[m.split(".").length];
              isNaN(k) && (this.prerelease = x);
            } else
              this.prerelease = x;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${c}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return wl = l, wl;
}
var Cl, ad;
function Qg() {
  if (ad) return Cl;
  ad = 1;
  const e = wp();
  return Cl = (n, i) => new e(n, i).major, Cl;
}
var eb = Qg();
const rd = /* @__PURE__ */ Dc(eb);
var El, od;
function tb() {
  if (od) return El;
  od = 1;
  const e = wp();
  return El = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, El;
}
var Sl, sd;
function nb() {
  if (sd) return Sl;
  sd = 1;
  const e = tb();
  return Sl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Sl;
}
var ib = nb();
const ab = /* @__PURE__ */ Dc(ib);
class rb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !ab(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : rd(t.getVersion()) !== rd(this.getVersion()) && console.warn(
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
class ob {
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
let Wa = null;
function Fc() {
  return Wa !== null ? Wa : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Wa = new rb(window._nc_event_bus) : Wa = window._nc_event_bus = new ob(), Wa);
}
function Cp(e, t) {
  Fc().subscribe(e, t);
}
function sb(e, t) {
  Fc().unsubscribe(e, t);
}
function ti(e, ...t) {
  Fc().emit(e, ...t);
}
const Ep = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const lb = Object.prototype.toString, cb = (e) => lb.call(e) === "[object Object]", ba = () => {
}, ub = /* @__PURE__ */ db();
function db() {
  var e, t, n;
  return Ep && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Tl(e) {
  return Array.isArray(e) ? e : [e];
}
function fb(e, t, n) {
  return Wt(e, t, {
    ...n,
    immediate: !0
  });
}
const Sp = Ep ? window : void 0;
function nr(e) {
  var t;
  const n = Qn(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function La(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = q(() => {
    const i = Tl(Qn(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return fb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => nr(r))) !== null && i !== void 0 ? i : [Sp].filter((r) => r != null),
      Tl(Qn(n.value ? e[1] : e[0])),
      Tl(g(n.value ? e[2] : e[1])),
      Qn(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], s, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const p = cb(o) ? { ...o } : o, c = i.flatMap((m) => a.flatMap((b) => r.map((S) => t(m, b, S, p))));
    l(() => {
      c.forEach((m) => m());
    });
  }, { flush: "post" });
}
let ld = !1;
function cd(e, t, n = {}) {
  const { window: i = Sp, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: s = !1 } = n;
  if (!i) return s ? {
    stop: ba,
    cancel: ba,
    trigger: ba
  } : ba;
  if (ub && !ld) {
    ld = !0;
    const N = { passive: !0 };
    Array.from(i.document.body.children).forEach((O) => O.addEventListener("click", ba, N)), i.document.documentElement.addEventListener("click", ba, N);
  }
  let l = !0;
  const p = (N) => Qn(a).some((O) => {
    if (typeof O == "string") return Array.from(i.document.querySelectorAll(O)).some((F) => F === N.target || N.composedPath().includes(F));
    {
      const F = nr(O);
      return F && (N.target === F || N.composedPath().includes(F));
    }
  });
  function c(N) {
    const O = Qn(N);
    return O && O.$.subTree.shapeFlag === 16;
  }
  function m(N, O) {
    const F = Qn(N), B = F.$.subTree && F.$.subTree.children;
    return B == null || !Array.isArray(B) ? !1 : B.some((z) => z.el === O.target || O.composedPath().includes(z.el));
  }
  const b = (N) => {
    const O = nr(e);
    if (N.target != null && !(!(O instanceof Element) && c(e) && m(e, N)) && !(!O || O === N.target || N.composedPath().includes(O))) {
      if ("detail" in N && N.detail === 0 && (l = !p(N)), !l) {
        l = !0;
        return;
      }
      t(N);
    }
  };
  let S = !1;
  const x = [
    La(i, "click", (N) => {
      S || (S = !0, setTimeout(() => {
        S = !1;
      }, 0), b(N));
    }, {
      passive: !0,
      capture: r
    }),
    La(i, "pointerdown", (N) => {
      const O = nr(e);
      l = !p(N) && !!(O && !N.composedPath().includes(O));
    }, { passive: !0 }),
    o && La(i, "blur", (N) => {
      setTimeout(() => {
        const O = nr(e);
        let F = i.document.activeElement;
        for (; F?.shadowRoot; ) F = F.shadowRoot.activeElement;
        F?.tagName === "IFRAME" && !O?.contains(i.document.activeElement) && t(N);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), k = () => x.forEach((N) => N());
  return s ? {
    stop: k,
    cancel: () => {
      l = !1;
    },
    trigger: (N) => {
      l = !0, b(N), l = !1;
    }
  } : k;
}
function pb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, s = /* @__PURE__ */ Gt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Gt({
    x: 0,
    y: 0
  }), p = q(() => s.x - l.x), c = q(() => s.y - l.y), { max: m, abs: b } = Math, S = q(() => m(b(p.value), b(c.value)) >= n), x = /* @__PURE__ */ vf(!1), k = q(() => S.value ? b(p.value) > b(c.value) ? p.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), N = (te) => [te.touches[0].clientX, te.touches[0].clientY], O = (te, ne) => {
    s.x = te, s.y = ne;
  }, F = (te, ne) => {
    l.x = te, l.y = ne;
  }, B = {
    passive: o,
    capture: !o
  }, z = (te) => {
    x.value && a?.(te, k.value), x.value = !1;
  }, ce = [
    La(e, "touchstart", (te) => {
      if (te.touches.length !== 1) return;
      const [ne, I] = N(te);
      O(ne, I), F(ne, I), r?.(te);
    }, B),
    La(e, "touchmove", (te) => {
      if (te.touches.length !== 1) return;
      const [ne, I] = N(te);
      F(ne, I), B.capture && !B.passive && Math.abs(p.value) > Math.abs(c.value) && te.preventDefault(), !x.value && S.value && (x.value = !0), x.value && i?.(te);
    }, B),
    La(e, ["touchend", "touchcancel"], z, B)
  ];
  return {
    isSwiping: x,
    direction: k,
    coordsStart: s,
    coordsEnd: l,
    lengthX: p,
    lengthY: c,
    stop: () => ce.forEach((te) => te())
  };
}
var hb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Bm(), r = Um(), o = /* @__PURE__ */ Ut([]), s = q(() => o.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => o.value.length), p = /* @__PURE__ */ Ut(null), c = /* @__PURE__ */ Ut(!1), m = /* @__PURE__ */ Ut({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), b = /* @__PURE__ */ Ut({
      splitter: null,
      timeoutId: null
    }), S = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": m.value.dragging,
      "splitpanes--ready": c.value
    })), x = () => {
      document.addEventListener("mousemove", O, { passive: !1 }), document.addEventListener("mouseup", F), "ontouchstart" in window && (document.addEventListener("touchmove", O, { passive: !1 }), document.addEventListener("touchend", F));
    }, k = () => {
      document.removeEventListener("mousemove", O, { passive: !1 }), document.removeEventListener("mouseup", F), "ontouchstart" in window && (document.removeEventListener("touchmove", O, { passive: !1 }), document.removeEventListener("touchend", F));
    }, N = (U, v) => {
      let E = U.target.closest(".splitpanes__splitter");
      if (E) {
        let { left: T, top: L } = E.getBoundingClientRect(), { clientX: R, clientY: $ } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        m.value.cursorOffset = i.horizontal ? $ - L : R - T;
      }
      x(), m.value.mouseDown = !0, m.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, O = (U) => {
      m.value.mouseDown && (U.preventDefault(), m.value.dragging || (window.getSelection()?.removeAllRanges(), m.value.dragging = !0), requestAnimationFrame(() => {
        I(te(U)), Ge("resize", { event: U }, !0);
      }));
    }, F = (U) => {
      m.value.dragging && (window.getSelection()?.removeAllRanges(), Ge("resized", { event: U }, !0)), m.value.mouseDown = !1, m.value.activeSplitter = null, setTimeout(() => {
        m.value.dragging = !1, k(), document.documentElement.style.cursor = "";
      }, 100);
    }, B = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), b.value.splitter === v ? (clearTimeout(b.value.timeoutId), b.value.timeoutId = null, z(U, v), b.value.splitter = null) : (b.value.splitter = v, b.value.timeoutId = setTimeout(() => b.value.splitter = null, 500))), m.value.dragging || Ge("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, z = (U, v) => {
      if (Ge("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let E = 0;
        o.value = o.value.map((T, L) => (T.size = L === v ? T.max : T.min, L !== v && (E += T.min), T)), o.value[v].size -= E, Ge("pane-maximize", {
          event: U,
          index: v,
          pane: o.value[v]
        }), Ge("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, ce = (U, v) => {
      if (!i.keyboardStep) return;
      let E = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", T = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!E && !T) return;
      U.preventDefault(), m.value.activeSplitter = v;
      let L = (E ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), R = J(v) + o.value[v].size;
      se(Math.min(Math.max(R + L * i.keyboardStep, 0), 100)), Ge("resize", { event: U }, !0), Ge("resized", { event: U }, !0), m.value.activeSplitter = null;
    }, de = (U, v) => {
      let E = s.value[v];
      E && Ge("pane-click", {
        event: U,
        index: E.index,
        pane: E
      });
    }, te = (U) => {
      let v = p.value.getBoundingClientRect(), { clientX: E, clientY: T } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: E - (i.horizontal ? 0 : m.value.cursorOffset) - v.left,
        y: T - (i.horizontal ? m.value.cursorOffset : 0) - v.top
      };
    }, ne = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = p.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, I = (U) => {
      se(ne(U));
    }, se = (U) => {
      let v = m.value.activeSplitter;
      if (v === null || v >= o.value.length - 1) return;
      let E = {
        prevPanesSize: J(v),
        nextPanesSize: ie(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, T = 0 + (i.pushOtherPanes ? 0 : E.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : E.nextPanesSize);
      U = Math.max(Math.min(U, L), T);
      let R = [v, v + 1], $ = o.value[R[0]] || null, G = o.value[R[1]] || null, K = $ !== null && $.max < 100 && U >= $.max + E.prevPanesSize, Z = G !== null && G.max < 100 && U <= 100 - (G.max + ie(v + 1));
      if (K || Z) {
        K ? ($.size = $.max, G.size = Math.min(Math.max(100 - $.max - E.prevPanesSize - E.nextPanesSize, G.min), G.max)) : ($.size = Math.min(Math.max(100 - G.max - E.prevPanesSize - ie(v + 1), $.min), $.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let H = me(E, U);
        if (!H) return;
        ({ sums: E, panesToResize: R } = H), $ = o.value[R[0]] || null, G = o.value[R[1]] || null;
      }
      $ !== null && ($.size = Math.min(Math.max(U - E.prevPanesSize - E.prevReachedMinPanes, $.min), $.max)), G !== null && (G.size = Math.min(Math.max(100 - U - E.nextPanesSize - E.nextReachedMinPanes, G.min), G.max));
    }, me = (U, v) => {
      let E = m.value.activeSplitter, T = [E, E + 1];
      if (v < U.prevPanesSize + o.value[T[0]].min) {
        if (T[0] = D(E).index, U.prevReachedMinPanes = 0, T[0] < E && o.value.forEach((L, R) => {
          R > T[0] && R <= E && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), T[0] === void 0) return U.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((L, R) => {
          R > 0 && R <= E && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), o.value[T[1]].size = 100 - U.prevReachedMinPanes - o.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = J(T[0]);
      }
      return v > 100 - U.nextPanesSize - o.value[T[1]].min && (T[1] = M(E).index, U.nextReachedMinPanes = 0, T[1] > E + 1 && o.value.forEach((L, R) => {
        R > E && R < T[1] && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), U.nextPanesSize = T[1] === void 0 ? 0 : ie(T[1] - 1), T[1] === void 0) ? (U.nextReachedMinPanes = 0, o.value.forEach((L, R) => {
        R >= E + 1 && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), T[0] !== void 0 && (o.value[T[0]].size = 100 - U.prevPanesSize - ie(T[0] - 1)), null) : {
        sums: U,
        panesToResize: T
      };
    }, J = (U) => o.value.reduce((v, E, T) => v + (T < U ? E.size : 0), 0), ie = (U) => o.value.reduce((v, E, T) => v + (T > U + 1 ? E.size : 0), 0), D = (U) => [...o.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, M = (U) => o.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, W = () => {
      let U = Array.from(p.value?.children || []);
      for (let v of U) {
        let E = v.classList.contains("splitpanes__pane"), T = v.classList.contains("splitpanes__splitter");
        !E && !T && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, oe = (U, v, E = !1) => {
      let T = U - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), E || (L.onmousedown = (R) => N(R, T), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (R) => N(R, T)), L.onclick = (R) => B(R, T + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (R) => ce(R, T))), L.ondblclick = (R) => z(R, T + 1), v.parentNode.insertBefore(L, v);
    }, Q = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, ue = () => {
      let U = Array.from(p.value?.children || []);
      for (let E of U) E.className.includes("splitpanes__splitter") && Q(E);
      let v = 0;
      for (let E of U) E.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? oe(v, E, !0) : v && oe(v, E), v++);
    }, fe = ({ uid: U, ...v }) => {
      let E = s.value[U];
      for (let [T, L] of Object.entries(v)) E[T] = L;
    }, ye = !1, _e = (U) => {
      let v = -1;
      Array.from(p.value?.children || []).some((E) => (E.className.includes("splitpanes__pane") && v++, E.isSameNode(U.el))), o.value.splice(v, 0, {
        ...U,
        index: v
      }), o.value.forEach((E, T) => E.index = T), c.value && !ye && (ye = !0, Qi(() => {
        ue(), we({ addedPane: o.value[v] }), Ge("pane-add", { pane: o.value[v] }), ye = !1;
      }));
    }, Be = (U) => {
      let v = o.value.findIndex((T) => T.id === U);
      o.value[v].el = null;
      let E = o.value.splice(v, 1)[0];
      o.value.forEach((T, L) => T.index = L), Qi(() => {
        ue(), Ge("pane-remove", { pane: E }), we({ removedPane: {
          ...E
        } });
      });
    }, we = (U = {}) => {
      !U.addedPane && !U.removedPane ? Ye() : o.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? lt(U) : Je(), c.value && Ge("resized");
    }, Je = () => {
      let U = 100 / l.value, v = 100, E = [], T = [];
      for (let L of o.value) L.size = Math.max(Math.min(U, L.max), L.min), v -= L.size, L.size >= L.max && E.push(L.id), L.size <= L.min && T.push(L.id);
      Math.abs(v) > 0.1 && mt(v, E, T);
    }, Ye = () => {
      let U = 100, v = [], E = [], T = 0;
      for (let R of o.value) U -= R.size, R.givenSize !== null && T++, R.size >= R.max && v.push(R.id), R.size <= R.min && E.push(R.id);
      let L = 100;
      if (U > 0.1) {
        for (let R of o.value) R.givenSize === null && (R.size = Math.max(Math.min(U / (l.value - T), R.max), R.min)), L -= R.size;
        L > 0.1 && mt(L, v, E);
      }
    }, lt = ({ addedPane: U, removedPane: v } = {}) => {
      let E = o.value.reduce((K, Z) => K + (Z.givenSize === null ? 0 : Z.givenSize), 0), T = o.value.filter((K) => K.givenSize === null).length, L = T > 0 ? (100 - E) / T : 0, R = 0, $ = [], G = [];
      for (let K of o.value) R -= K.size, K.size >= K.max && $.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(R) < 0.1)) {
        R = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(L, K.max), K.min)), R -= K.size, K.size >= K.max && $.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(R) > 0.1 && mt(R, $, G);
      }
    }, mt = (U, v, E) => {
      let T;
      T = U > 0 ? U / (l.value - v.length) : U / (l.value - E.length), o.value.forEach((L, R) => {
        if (U > 0 && !v.includes(L.id)) {
          let $ = Math.max(Math.min(L.size + T, L.max), L.min), G = $ - L.size;
          U -= G, L.size = $;
        } else if (!E.includes(L.id)) {
          let $ = Math.max(Math.min(L.size + T, L.max), L.min), G = $ - L.size;
          U -= G, L.size = $;
        }
      }), Math.abs(U) > 0.1 && c.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Ge = (U, v = void 0, E = !1) => {
      let T = v?.index ?? m.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...T !== null && { index: T },
        ...E && T !== null && {
          prevPane: o.value[T - +!!i.firstSplitter],
          nextPane: o.value[T + +!i.firstSplitter]
        },
        panes: o.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    Wt(() => i.firstSplitter, () => ue()), Wt(() => i.horizontal, (U) => Qi(() => {
      n("direction-changed", {
        horizontal: U,
        panes: o.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Oi(() => {
      W(), ue(), we(), Ge("ready"), c.value = !0;
    }), Da(() => c.value = !1);
    let It = () => {
      let { class: U, ...v } = a;
      return Vt("div", {
        ref: p,
        class: [S.value, U],
        ...v
      }, r.default?.());
    };
    return cn("panes", o), cn("indexedPanes", s), cn("horizontal", q(() => i.horizontal)), cn("requestUpdate", fe), cn("onPaneAdd", _e), cn("onPaneRemove", Be), cn("onPaneClick", de), (U, v) => (C(), $e(xc(It)));
  }
}), mb = {
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
    let t = e, n = Nt("requestUpdate"), i = Nt("onPaneAdd"), a = Nt("horizontal"), r = Nt("onPaneRemove"), o = Nt("onPaneClick"), s = ia()?.uid, l = Nt("indexedPanes"), p = q(() => l.value[s]), c = /* @__PURE__ */ Ut(null), m = q(() => {
      let k = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(k, S.value), b.value);
    }), b = q(() => {
      let k = parseFloat(t.minSize);
      return isNaN(k) ? 0 : k;
    }), S = q(() => {
      let k = parseFloat(t.maxSize);
      return isNaN(k) ? 100 : k;
    }), x = q(() => {
      let k = p.value?.size ?? (t.size === void 0 ? void 0 : m.value);
      return k === void 0 ? "" : `${a.value ? "height" : "width"}: ${k}%`;
    });
    return Wt(() => m.value, (k) => n({
      uid: s,
      size: k
    })), Wt(() => b.value, (k) => n({
      uid: s,
      min: k
    })), Wt(() => S.value, (k) => n({
      uid: s,
      max: k
    })), Oi(() => {
      i({
        id: s,
        el: c.value,
        min: b.value,
        max: S.value,
        givenSize: t.size === void 0 ? null : m.value,
        size: m.value
      });
    }), Da(() => r(s)), (k, N) => (C(), A("div", {
      ref_key: "paneEl",
      ref: c,
      class: "splitpanes__pane",
      onClick: N[0] ||= (O) => g(o)(O, k._.uid),
      style: pn(x.value)
    }, [Pe(k.$slots, "default")], 4));
  }
}, vb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", gb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", bb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", yb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Mc = 1024, Tp = Mc / 2, Mo = (e) => document.documentElement.clientWidth < e, kp = /* @__PURE__ */ Ut(Mo(Mc)), Ap = /* @__PURE__ */ Ut(Mo(Tp));
window.addEventListener("resize", () => {
  kp.value = Mo(Mc), Ap.value = Mo(Tp);
}, { passive: !0 });
function jr() {
  return /* @__PURE__ */ Cr(kp);
}
function _b() {
  return /* @__PURE__ */ Cr(Ap);
}
class wb {
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
    return d("", t, n, void 0, { bundle: this.bundle });
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
    return Gg("", t, n, i, a, { bundle: this.bundle });
  }
}
class Cb {
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
    return this.setLanguage(Fs().replace("-", "_"));
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
    const t = new wb((n) => qg(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Eb() {
  return new Cb();
}
const xp = Eb().detectLanguage().build(), gt = (...e) => xp.gettext(...e);
function Ri(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Fs() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        xp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Sb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Tb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], kb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Ab = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], xb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Nb = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Ob = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Rb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Lb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Pb = /* @__PURE__ */ Symbol(""), [Ib] = window.OC?.config?.version?.split(".") ?? [], Np = Number.parseInt(Ib ?? "35"), Db = Np < 32, Li = Np < 34, Fb = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Mb() {
  return Nt(Fb, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, $b = { class: "button-vue__wrapper" }, zb = { class: "button-vue__icon" }, Ub = { class: "button-vue__text" }, Bb = /* @__PURE__ */ St({
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
    const n = e, i = t, { formBoxItemClass: a } = Mb(), r = Nt(Pb, null) !== null, o = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), s = q(() => o.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), p = q(() => l.value.startsWith("tertiary")), c = q(() => n.alignment.split("-")[0]), m = q(() => n.alignment.includes("-")), b = Nt("NcPopover:trigger:attrs", () => ({}), !1), S = q(() => b()), x = q(() => {
      if (o.value === "RouterLink")
        return {
          to: n.to,
          activeClass: "active"
        };
      if (o.value === "a")
        return {
          href: n.href || "#",
          target: n.target,
          rel: "nofollow noreferrer noopener",
          download: n.download || void 0
        };
      if (o.value === "button")
        return {
          ...S.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function k(N) {
      s.value && i("update:pressed", !n.pressed), i("click", N);
    }
    return (N, O) => (C(), $e(xc(o.value), Pt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": p.value,
          "button-vue--wide": e.wide,
          [`button-vue--${c.value}`]: c.value !== "center",
          "button-vue--reverse": m.value,
          "button-vue--legacy": g(Db),
          "button-vue--legacy34": g(Li)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: k }), {
      default: Le(() => [
        u("span", $b, [
          u("span", zb, [
            Pe(N.$slots, "icon", {}, void 0, !0)
          ]),
          u("span", Ub, [
            Pe(N.$slots, "default", {}, () => [
              Re(f(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), In = /* @__PURE__ */ Xe(Bb, [["__scopeId", "data-v-47ce59a3"]]), Hb = ["aria-hidden", "aria-label"], jb = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Vb = ["d"], Kb = ["innerHTML"], Gb = /* @__PURE__ */ St({
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
    Dv((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = vp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (C(), A("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: xe(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (C(), A("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Kb)) : (C(), A("svg", jb, [
        u("path", { d: e.path }, null, 8, Vb)
      ]))
    ], 10, Hb));
  }
}), Ms = /* @__PURE__ */ Xe(Gb, [["__scopeId", "data-v-aaedb1c3"]]);
Wb();
function qb(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ti("csrf-token-update", { token: e, _internal: !0 }));
}
function Wb() {
  Cp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || qb(e);
  });
}
bp("public").persist().build();
let ya;
function ud(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Yb() {
  if (ya !== void 0)
    return ya;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = ud(e, "data-user");
  return t === null ? (ya = null, ya) : (ya = {
    uid: t,
    displayName: ud(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, ya);
}
var ft = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ft || {});
class Zb {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ft[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ft.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ft.Debug:
          console.debug(this.formatMessage(n, ft.Debug, i), i);
          break;
        case ft.Info:
          console.info(this.formatMessage(n, ft.Info, i), i);
          break;
        case ft.Warn:
          console.warn(this.formatMessage(n, ft.Warn, i), i);
          break;
        case ft.Error:
          console.error(this.formatMessage(n, ft.Error, i), i);
          break;
        case ft.Fatal:
        default:
          console.error(this.formatMessage(n, ft.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ft.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ft.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ft.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ft.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ft.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Xb(e) {
  return new Zb(e);
}
class Jb {
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
    const t = Yb();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ft.Warn, window._oc_debug && (t.context.level = ft.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Qb() {
  return new Jb(Xb);
}
const ea = Qb().detectUser().setApp("@nextcloud/vue").build();
function ey(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Op = "missing-app-name";
try {
  Op = "library";
} catch {
  ea.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const ty = Op;
let ny = "";
try {
  ny = "0.1.0-alpha.161";
} catch {
  ea.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Rp() {
  return Nt("appName", ty);
}
const iy = ey(() => {
  const e = Ic("core", "apps", []), t = Rp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Ql = Kg();
Ri(Ob);
const ay = /* @__PURE__ */ St({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = jr();
    Wt(t, n), Oi(() => {
      n(t.value);
    }), Da(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ti("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (C(), $e(g(In), {
      "aria-label": g(gt)("Go back to the list"),
      class: xe(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(gt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Le(() => [
        Te(g(Ms), {
          directional: "",
          path: g(vb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), ry = /* @__PURE__ */ Xe(ay, [["__scopeId", "data-v-a28923a1"]]), dd = bp("nextcloud").persist().build(), oy = Yg().theming?.name ?? "Nextcloud", sy = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: ry,
    Pane: mb,
    Splitpanes: hb
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
      appName: Rp(),
      localizedAppName: iy(),
      isMobile: jr(),
      isRtl: Ql
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
        return ea.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(oy), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = pb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ti("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ti("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      dd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ea.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(dd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ea.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, ly = {
  key: 0,
  class: "hidden-visually"
}, cy = { class: "app-content-wrapper__list" }, uy = {
  key: 1,
  class: "app-content-wrapper"
};
function dy(e, t, n, i, a, r) {
  const o = Ue("NcAppContentDetailsToggle"), s = Ue("Pane"), l = Ue("Splitpanes");
  return C(), A("main", {
    id: "app-content-vue",
    class: xe(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (C(), A("h1", ly, f(n.pageHeading), 1)) : V("", !0),
    e.$slots.list ? (C(), A(he, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (C(), A("div", {
        key: 0,
        class: xe(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (C(), $e(o, {
          key: 0,
          onClick: it(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : V("", !0),
        tt(u("div", cy, [
          Pe(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Oa, !n.showDetails]
        ]),
        n.showDetails ? Pe(e.$slots, "default", { key: 1 }, void 0, !0) : V("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (C(), A("div", uy, [
        Te(l, {
          horizontal: n.layout === "horizontal-split",
          class: xe(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Le(() => [
            Te(s, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Le(() => [
                Pe(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Te(s, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Le(() => [
                Pe(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : V("", !0)
    ], 64)) : V("", !0),
    e.$slots.list ? V("", !0) : Pe(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const fy = /* @__PURE__ */ Xe(sy, [["render", dy], ["__scopeId", "data-v-51427d61"]]);
var Lp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], $o = /* @__PURE__ */ Lp.join(","), Pp = typeof Element > "u", na = Pp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, zo = !Pp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Uo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Uo(t.parentNode));
  return o;
}, py = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Ip = function(t, n, i) {
  if (Uo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll($o));
  return n && na.call(t, $o) && a.unshift(t), a = a.filter(i), a;
}, Bo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Uo(o, !1))
      if (o.tagName === "SLOT") {
        var s = o.assignedElements(), l = s.length ? s : o.children, p = Bo(l, !0, i);
        i.flatten ? a.push.apply(a, p) : a.push({
          scopeParent: o,
          candidates: p
        });
      } else {
        var c = na.call(o, $o);
        c && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var m = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), b = !Uo(m, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (m && b) {
          var S = Bo(m === !0 ? o.children : m.children, !0, i);
          i.flatten ? a.push.apply(a, S) : a.push({
            scopeParent: o,
            candidates: S
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Dp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, qi = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || py(t)) && !Dp(t) ? 0 : t.tabIndex;
}, hy = function(t, n) {
  var i = qi(t);
  return i < 0 && n && !Dp(t) ? 0 : i;
}, my = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Fp = function(t) {
  return t.tagName === "INPUT";
}, vy = function(t) {
  return Fp(t) && t.type === "hidden";
}, gy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, by = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, yy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || zo(t), i = function(s) {
    return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = by(a, t.form);
  return !r || r === t;
}, _y = function(t) {
  return Fp(t) && t.type === "radio";
}, wy = function(t) {
  return _y(t) && !yy(t);
}, Cy = function(t) {
  var n, i = t && zo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, s, l;
    for (r = !!((o = a) !== null && o !== void 0 && (s = o.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var p, c, m;
      i = zo(a), a = (p = i) === null || p === void 0 ? void 0 : p.host, r = !!((c = a) !== null && c !== void 0 && (m = c.ownerDocument) !== null && m !== void 0 && m.contains(a));
    }
  }
  return r;
}, fd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Ey = function(t, n) {
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
  var o = getComputedStyle(t), s = o.visibility;
  if (s === "hidden" || s === "collapse")
    return !0;
  var l = na.call(t, "details>summary:first-of-type"), p = l ? t.parentElement : t;
  if (na.call(p, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var m = t.parentElement, b = zo(t);
        if (m && !m.shadowRoot && a(m) === !0)
          return fd(t);
        t.assignedSlot ? t = t.assignedSlot : !m && b !== t.ownerDocument ? t = b.host : t = m;
      }
      t = c;
    }
    if (Cy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return fd(t);
  return !1;
}, Sy = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return na.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Ho = function(t, n) {
  return !(n.disabled || vy(n) || Ey(n, t) || // For a details element with a summary, the summary element gets the focus
  gy(n) || Sy(n));
}, ec = function(t, n) {
  return !(wy(n) || qi(n) < 0 || !Ho(t, n));
}, Ty = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Mp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, s = o ? a.scopeParent : a, l = hy(s, o), p = o ? Mp(a.candidates) : s;
    l === 0 ? o ? n.push.apply(n, p) : n.push(s) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: o,
      content: p
    });
  }), i.sort(my).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, ky = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Bo([t], n.includeContainer, {
    filter: ec.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Ty
  }) : i = Ip(t, n.includeContainer, ec.bind(null, n)), Mp(i);
}, Ay = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Bo([t], n.includeContainer, {
    filter: Ho.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Ip(t, n.includeContainer, Ho.bind(null, n)), i;
}, _a = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return na.call(t, $o) === !1 ? !1 : ec(n, t);
}, xy = /* @__PURE__ */ Lp.concat("iframe:not([inert]):not([inert] *)").join(","), kl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return na.call(t, xy) === !1 ? !1 : Ho(n, t);
};
function tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ny(e) {
  if (Array.isArray(e)) return tc(e);
}
function pd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = $p(e)) || t) {
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
  var r, o = !0, s = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, r = l;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw r;
      }
    }
  };
}
function Oy(e, t, n) {
  return (t = Dy(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ry(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ly() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hd(Object(n), !0).forEach(function(i) {
      Oy(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Py(e) {
  return Ny(e) || Ry(e) || $p(e) || Ly();
}
function Iy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dy(e) {
  var t = Iy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $p(e, t) {
  if (e) {
    if (typeof e == "string") return tc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tc(e, t) : void 0;
  }
}
var Xn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = Xn.getActiveTrap(t);
    n !== i && Xn.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), Xn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Xn.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Xn.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Fy = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, My = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, cr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, $y = function(t) {
  return cr(t) && !t.shiftKey;
}, zy = function(t) {
  return cr(t) && t.shiftKey;
}, vd = function(t) {
  return setTimeout(t, 0);
}, Ya = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, oo = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Uy = [], $c = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || Uy, r = md({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: $y,
    isKeyBackward: zy
  }, n), o = {
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
  }, s, l = function(D, M, W) {
    return D && D[M] !== void 0 ? D[M] : r[W || M];
  }, p = function(D, M) {
    var W = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return o.containerGroups.findIndex(function(oe) {
      var Q = oe.container, ue = oe.tabbableNodes;
      return Q.contains(D) || W?.includes(Q) || ue.find(function(fe) {
        return fe === D;
      });
    });
  }, c = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = M.hasFallback, oe = W === void 0 ? !1 : W, Q = M.params, ue = Q === void 0 ? [] : Q, fe = r[D];
    if (typeof fe == "function" && (fe = fe.apply(void 0, Py(ue))), fe === !0 && (fe = void 0), !fe) {
      if (fe === void 0 || fe === !1)
        return fe;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var ye = fe;
    if (typeof fe == "string") {
      try {
        ye = i.querySelector(fe);
      } catch (_e) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(_e.message, '"'));
      }
      if (!ye && !oe)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return ye;
  }, m = function(D) {
    var M = D.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? m(M.shadowRoot) : M : null;
  }, b = function() {
    var D = c("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !kl(D, r.tabbableOptions)) {
      var M = m(i);
      if (p(M) >= 0)
        D = M;
      else {
        var W = o.tabbableGroups[0], oe = W && W.firstTabbableNode;
        D = oe || c("fallbackFocus");
      }
    } else D === null && (D = c("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, S = function() {
    if (o.containerGroups = o.containers.map(function(D) {
      var M = ky(D, r.tabbableOptions), W = Ay(D, r.tabbableOptions), oe = M.length > 0 ? M[0] : void 0, Q = M.length > 0 ? M[M.length - 1] : void 0, ue = W.find(function(_e) {
        return _a(_e);
      }), fe = W.slice().reverse().find(function(_e) {
        return _a(_e);
      }), ye = !!M.find(function(_e) {
        return qi(_e) > 0;
      });
      return {
        container: D,
        tabbableNodes: M,
        focusableNodes: W,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ye,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: oe,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: Q,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: ue,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: fe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Be) {
          var we = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Je = M.indexOf(Be);
          return Je < 0 ? we ? W.slice(W.indexOf(Be) + 1).find(function(Ye) {
            return _a(Ye);
          }) : W.slice(0, W.indexOf(Be)).reverse().find(function(Ye) {
            return _a(Ye);
          }) : M[Je + (we ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(D) {
      return D.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(D) {
      return D.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, x = function(D) {
    if (D !== !1 && D !== m(document)) {
      if (!D || !D.focus) {
        x(b());
        return;
      }
      D.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = D, Fy(D) && D.select();
    }
  }, k = function(D) {
    var M = c("setReturnFocus", {
      params: [D]
    });
    return M || (M === !1 ? !1 : D);
  }, N = function(D) {
    var M = D.target, W = D.event, oe = D.isBackward, Q = oe === void 0 ? !1 : oe;
    M = M || oo(W), S();
    var ue = null;
    if (o.tabbableGroups.length > 0) {
      var fe = p(M, W), ye = fe >= 0 ? o.containerGroups[fe] : void 0;
      if (fe < 0)
        Q ? ue = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ue = o.tabbableGroups[0].firstTabbableNode;
      else if (Q) {
        var _e = o.tabbableGroups.findIndex(function(mt) {
          var Ge = mt.firstTabbableNode;
          return M === Ge;
        });
        if (_e < 0 && (ye.container === M || kl(M, r.tabbableOptions) && !_a(M, r.tabbableOptions) && !ye.nextTabbableNode(M, !1)) && (_e = fe), _e >= 0) {
          var Be = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, we = o.tabbableGroups[Be];
          ue = qi(M) >= 0 ? we.lastTabbableNode : we.lastDomTabbableNode;
        } else cr(W) || (ue = ye.nextTabbableNode(M, !1));
      } else {
        var Je = o.tabbableGroups.findIndex(function(mt) {
          var Ge = mt.lastTabbableNode;
          return M === Ge;
        });
        if (Je < 0 && (ye.container === M || kl(M, r.tabbableOptions) && !_a(M, r.tabbableOptions) && !ye.nextTabbableNode(M)) && (Je = fe), Je >= 0) {
          var Ye = Je === o.tabbableGroups.length - 1 ? 0 : Je + 1, lt = o.tabbableGroups[Ye];
          ue = qi(M) >= 0 ? lt.firstTabbableNode : lt.firstDomTabbableNode;
        } else cr(W) || (ue = ye.nextTabbableNode(M));
      }
    } else
      ue = c("fallbackFocus");
    return ue;
  }, O = function(D) {
    var M = oo(D);
    if (!(p(M, D) >= 0)) {
      if (Ya(r.clickOutsideDeactivates, D)) {
        s.deactivate({
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
      Ya(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, F = function(D) {
    var M = oo(D), W = p(M, D) >= 0;
    if (W || M instanceof Document)
      W && (o.mostRecentlyFocusedNode = M);
    else {
      D.stopImmediatePropagation();
      var oe, Q = !0;
      if (o.mostRecentlyFocusedNode)
        if (qi(o.mostRecentlyFocusedNode) > 0) {
          var ue = p(o.mostRecentlyFocusedNode), fe = o.containerGroups[ue].tabbableNodes;
          if (fe.length > 0) {
            var ye = fe.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            ye >= 0 && (r.isKeyForward(o.recentNavEvent) ? ye + 1 < fe.length && (oe = fe[ye + 1], Q = !1) : ye - 1 >= 0 && (oe = fe[ye - 1], Q = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Be) {
              return qi(Be) > 0;
            });
          }) || (Q = !1);
      else
        Q = !1;
      Q && (oe = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), x(oe || o.mostRecentlyFocusedNode || b());
    }
    o.recentNavEvent = void 0;
  }, B = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = D;
    var W = N({
      event: D,
      isBackward: M
    });
    W && (cr(D) && D.preventDefault(), x(W));
  }, z = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && B(D, r.isKeyBackward(D));
  }, ce = function(D) {
    My(D) && Ya(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), s.deactivate());
  }, de = function(D) {
    var M = oo(D);
    p(M, D) >= 0 || Ya(r.clickOutsideDeactivates, D) || Ya(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, te = function() {
    if (o.active) {
      Xn.activateTrap(a, s);
      var D;
      return r.delayInitialFocus ? D = new Promise(function(M) {
        o.delayInitialFocusTimer = vd(function() {
          x(b()), M();
        });
      }) : x(b()), i.addEventListener("focusin", F, !0), i.addEventListener("mousedown", O, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", O, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", z, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", ce), D;
    }
  }, ne = function(D) {
    o.active && !o.paused && s._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), oe = pd(D), Q;
    try {
      for (oe.s(); !(Q = oe.n()).done; ) {
        var ue = Q.value;
        M.add(ue);
        for (var fe = typeof ShadowRoot < "u" && ue.getRootNode() instanceof ShadowRoot, ye = ue; ye; ) {
          M.add(ye);
          var _e = ye.parentElement, Be = [];
          _e ? Be = _e.children : !_e && fe && (Be = ye.getRootNode().children, _e = ye.getRootNode().host, fe = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var we = pd(Be), Je;
          try {
            for (we.s(); !(Je = we.n()).done; ) {
              var Ye = Je.value;
              W.add(Ye);
            }
          } catch (lt) {
            we.e(lt);
          } finally {
            we.f();
          }
          ye = _e;
        }
      }
    } catch (lt) {
      oe.e(lt);
    } finally {
      oe.f();
    }
    M.forEach(function(lt) {
      W.delete(lt);
    }), o.adjacentElements = W;
  }, I = function() {
    if (o.active)
      return i.removeEventListener("focusin", F, !0), i.removeEventListener("mousedown", O, !0), i.removeEventListener("touchstart", O, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", z, !0), i.removeEventListener("keydown", ce), s;
  }, se = function(D) {
    var M = o.mostRecentlyFocusedNode;
    if (M) {
      var W = D.some(function(Q) {
        var ue = Array.from(Q.removedNodes);
        return ue.some(function(fe) {
          return fe === M || typeof fe.contains == "function" && fe.contains(M);
        });
      });
      if (W && o.containers.some(function(Q) {
        return Q?.isConnected;
      })) {
        S();
        var oe = b();
        x(oe);
      }
    }
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, J = function() {
    me && (me.disconnect(), o.active && !o.paused && o.containers.map(function(D) {
      me.observe(D, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return s = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(D) {
      if (o.active)
        return this;
      var M = l(D, "onActivate"), W = l(D, "onPostActivate"), oe = l(D, "checkCanFocusTrap"), Q = Xn.getActiveTrap(a), ue = !1;
      if (Q && !Q.paused) {
        var fe;
        (fe = Q._setSubtreeIsolation) === null || fe === void 0 || fe.call(Q, !1), ue = !0;
      }
      try {
        oe || S(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = m(i), M?.({
          trap: s
        });
        var ye = function() {
          oe && S();
          var we = function() {
            s._setSubtreeIsolation(!0), J(), W?.({
              trap: s
            });
          }, Je = te();
          Je ? Je.then(we) : we();
        };
        if (oe)
          return oe(o.containers.concat()).then(ye, ye), this;
        ye();
      } catch (Be) {
        if (Q === Xn.getActiveTrap(a) && ue) {
          var _e;
          (_e = Q._setSubtreeIsolation) === null || _e === void 0 || _e.call(Q, !0);
        }
        throw Be;
      }
      return this;
    },
    deactivate: function(D) {
      if (!o.active)
        return this;
      var M = md({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || s._setSubtreeIsolation(!1), o.alreadySilent.clear(), I(), o.active = !1, o.paused = !1, J(), Xn.deactivateTrap(a, s);
      var W = l(M, "onDeactivate"), oe = l(M, "onPostDeactivate"), Q = l(M, "checkCanReturnFocus"), ue = l(M, "delayReturnFocus"), fe = l(M, "returnFocus", "returnFocusOnDeactivate");
      W?.({
        trap: s
      });
      var ye = function() {
        fe && x(k(o.nodeFocusedBeforeActivation)), oe?.({
          trap: s
        });
      }, _e = function() {
        ue && fe ? vd(ye) : ye();
      };
      return fe && Q ? (Q(k(o.nodeFocusedBeforeActivation)).then(_e, _e), this) : (_e(), this);
    },
    pause: function(D) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var M = [].concat(D).filter(Boolean);
      return o.containers = M.map(function(W) {
        return typeof W == "string" ? i.querySelector(W) : W;
      }), r.isolateSubtrees && ne(o.containers), o.active && (S(), o.paused || s._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(D, M) {
        if (o.paused === D)
          return this;
        if (o.paused = D, D) {
          var W = l(M, "onPause"), oe = l(M, "onPostPause");
          W?.({
            trap: s
          }), I(), s._setSubtreeIsolation(!1), J(), oe?.({
            trap: s
          });
        } else {
          var Q = l(M, "onUnpause"), ue = l(M, "onPostUnpause");
          Q?.({
            trap: s
          });
          var fe = function() {
            S();
            var _e = function() {
              s._setSubtreeIsolation(!0), J(), ue?.({
                trap: s
              });
            }, Be = te();
            Be ? Be.then(_e) : _e();
          };
          fe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(M) {
          var W;
          D ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((W = M.getAttribute("aria-hidden")) === null || W === void 0 ? void 0 : W.toLowerCase()) === "true") && o.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && o.alreadySilent.add(M), M.setAttribute("inert", !0)) : o.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), s.updateContainerElements(t), s;
};
const zp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), By = /* @__PURE__ */ St({
  name: "NcAppNavigationList",
  provide() {
    return {
      [zp]: {
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
function Hy(e, t, n, i, a, r) {
  return C(), A("ul", {
    ref: "list",
    class: xe(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    u("div", {
      class: xe(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: pn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Pe(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Up = /* @__PURE__ */ Xe(By, [["render", Hy], ["__scopeId", "data-v-3e73e246"]]);
function Rr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function jy() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Rr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Rr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Bp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Hp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ri(Ab);
const Vy = { class: "app-navigation-toggle-wrapper" }, Ky = /* @__PURE__ */ St({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Hf(e, "open"), n = q(() => t.value ? gt("Close navigation") : gt("Open navigation"));
    return (i, a) => (C(), A("div", Vy, [
      Te(g(In), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Le(() => [
          Te(Ms, {
            path: g(yb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Gy = /* @__PURE__ */ Xe(Ky, [["__scopeId", "data-v-e8177cc7"]]), qy = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Wy = { class: "app-navigation__search" }, Yy = /* @__PURE__ */ St({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Nt(
      Bp,
      () => Ev(),
      !1
    ), a = Nm("appNavigationContainer"), r = jr(), o = /* @__PURE__ */ Ut(!r.value), s = q(() => r.value && o.value);
    _m(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Wt(r, () => {
      o.value = !r.value;
    }), Wt(s, () => {
      c();
    }), Oi(() => {
      i(!0), Cp("toggle-navigation", p), ti("navigation-toggled", {
        open: o.value
      }), n = $c(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Rr(),
        escapeDeactivates: !1
      }), c();
    }), Ur(() => {
      i(!1), sb("toggle-navigation", p), n.deactivate();
    });
    function l(b) {
      if (o.value === b) {
        ti("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = b === void 0 ? !o.value : b;
      const S = getComputedStyle(document.body), x = parseInt(S.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ti("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * x);
    }
    function p({ open: b }) {
      return l(b);
    }
    function c() {
      s.value ? n.activate() : n.deactivate();
    }
    function m() {
      r.value && l(!1);
    }
    return (b, S) => (C(), A("div", {
      ref: "appNavigationContainer",
      class: xe(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(Li)
      }])
    }, [
      u("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: qt(m, ["esc"])
      }, [
        u("div", Wy, [
          Pe(b.$slots, "search", {}, void 0, !0)
        ]),
        u("div", {
          class: xe(["app-navigation__body", { "app-navigation__body--no-list": !b.$slots.list }])
        }, [
          Pe(b.$slots, "default", {}, void 0, !0)
        ], 2),
        b.$slots.list ? (C(), $e(Up, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Le(() => [
            Pe(b.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : V("", !0),
        Pe(b.$slots, "footer", {}, void 0, !0)
      ], 40, qy),
      Te(Gy, {
        open: o.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), Zy = /* @__PURE__ */ Xe(Yy, [["__scopeId", "data-v-37908cd4"]]), Xy = {
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
}, Jy = ["aria-hidden", "aria-label"], Qy = ["fill", "width", "height"], e_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, t_ = { key: 0 };
function n_(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", e_, [
        n.title ? (C(), A("title", t_, f(n.title), 1)) : V("", !0)
      ])
    ], 8, Qy))
  ], 16, Jy);
}
const i_ = /* @__PURE__ */ Xe(Xy, [["render", n_]]), a_ = {
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
}, r_ = ["aria-hidden", "aria-label"], o_ = ["fill", "width", "height"], s_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, l_ = { key: 0 };
function c_(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", s_, [
        n.title ? (C(), A("title", l_, f(n.title), 1)) : V("", !0)
      ])
    ], 8, o_))
  ], 16, r_);
}
const u_ = /* @__PURE__ */ Xe(a_, [["render", c_]]), d_ = {
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
}, f_ = ["aria-hidden", "aria-label"], p_ = ["fill", "width", "height"], h_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, m_ = { key: 0 };
function v_(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", h_, [
        n.title ? (C(), A("title", m_, f(n.title), 1)) : V("", !0)
      ])
    ], 8, p_))
  ], 16, f_);
}
const jp = /* @__PURE__ */ Xe(d_, [["render", v_]]), g_ = {
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
}, b_ = ["aria-hidden", "aria-label"], y_ = ["fill", "width", "height"], __ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, w_ = { key: 0 };
function C_(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", __, [
        n.title ? (C(), A("title", w_, f(n.title), 1)) : V("", !0)
      ])
    ], 8, y_))
  ], 16, b_);
}
const Vp = /* @__PURE__ */ Xe(g_, [["render", C_]]);
Ri(Tb);
const E_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: jp,
    IconClose: Vp,
    NcButton: In
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
    return { isLegacy34: Li };
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
}, S_ = ["placeholder"];
function T_(e, t, n, i, a, r) {
  const o = Ue("IconArrowRight"), s = Ue("NcButton"), l = Ue("IconClose");
  return C(), A("div", {
    class: xe(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    u("form", {
      onSubmit: t[1] || (t[1] = it((...p) => r.confirm && r.confirm(...p), ["prevent"])),
      onKeydown: t[2] || (t[2] = qt(it((...p) => r.cancel && r.cancel(...p), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = it(() => {
      }, ["stop", "prevent"]))
    }, [
      tt(u("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (p) => r.valueModel = p),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, S_), [
        [vo, r.valueModel]
      ]),
      Te(s, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: it(r.confirm, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          Te(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Te(s, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: it(r.cancel, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          Te(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const k_ = /* @__PURE__ */ Xe(E_, [["render", T_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function $s() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Kp = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Gp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), A_ = {
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
}, x_ = {
  mixins: [A_],
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
      from: Gp
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
}, N_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Ms
  },
  mixins: [x_],
  inject: {
    isInSemanticMenu: {
      from: Kp,
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
      mdiCheck: gb,
      mdiChevronRight: bb
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
}, O_ = ["role"], R_ = ["aria-label", "disabled", "title", "type"], L_ = { class: "action-button__longtext-wrapper" }, P_ = {
  key: 0,
  class: "action-button__name"
}, I_ = ["textContent"], D_ = {
  key: 2,
  class: "action-button__text"
}, F_ = ["textContent"], M_ = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function $_(e, t, n, i, a, r) {
  const o = Ue("NcIconSvgWrapper");
  return C(), A("li", {
    class: xe(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    u("button", Pt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...s) => r.handleClick && r.handleClick(...s))
    }), [
      Pe(e.$slots, "icon", {}, () => [
        u("span", {
          class: xe([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: pn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      u("span", L_, [
        e.name ? (C(), A("strong", P_, f(e.name), 1)) : V("", !0),
        e.isLongText ? (C(), A("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: f(e.text)
        }, null, 8, I_)) : (C(), A("span", D_, f(e.text), 1)),
        n.description ? (C(), A("span", {
          key: 3,
          class: "action-button__description",
          textContent: f(n.description)
        }, null, 8, F_)) : V("", !0)
      ]),
      n.isMenu ? (C(), $e(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (C(), $e(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (C(), A("span", M_)) : V("", !0),
      V("", !0)
    ], 16, R_)
  ], 10, O_);
}
const z_ = /* @__PURE__ */ Xe(N_, [["render", $_], ["__scopeId", "data-v-6c2daf4e"]]);
function U_(e, t = {}) {
  const n = jy();
  Wt(e, () => {
    Qn(t.disabled) || (Qn(e) ? n.pause() : n.unpause());
  }), Ur(() => {
    n.unpause();
  });
}
const B_ = ["top", "right", "bottom", "left"], gd = ["start", "end"], bd = /* @__PURE__ */ B_.reduce((e, t) => e.concat(t, t + "-" + gd[0], t + "-" + gd[1]), []), Lr = Math.min, nc = Math.max, H_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qp(e, t, n) {
  return nc(e, Lr(t, n));
}
function aa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ri(e) {
  return e.split("-")[0];
}
function wn(e) {
  return e.split("-")[1];
}
function Wp(e) {
  return e === "x" ? "y" : "x";
}
function zc(e) {
  return e === "y" ? "height" : "width";
}
function Jn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Uc(e) {
  return Wp(Jn(e));
}
function Yp(e, t, n) {
  n === void 0 && (n = !1);
  const i = wn(e), a = Uc(e), r = zc(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Vo(o)), [o, Vo(o)];
}
function j_(e) {
  const t = Vo(e);
  return [jo(e), t, jo(t)];
}
function jo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const yd = ["left", "right"], _d = ["right", "left"], V_ = ["top", "bottom"], K_ = ["bottom", "top"];
function G_(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? _d : yd : t ? yd : _d;
    case "left":
    case "right":
      return t ? V_ : K_;
    default:
      return [];
  }
}
function q_(e, t, n, i) {
  const a = wn(e);
  let r = G_(ri(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(jo)))), r;
}
function Vo(e) {
  const t = ri(e);
  return H_[t] + e.slice(t.length);
}
function W_(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Zp(e) {
  return typeof e != "number" ? W_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ur(e) {
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
function wd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = Jn(t), o = Uc(t), s = zc(o), l = ri(t), p = r === "y", c = i.x + i.width / 2 - a.width / 2, m = i.y + i.height / 2 - a.height / 2, b = i[s] / 2 - a[s] / 2;
  let S;
  switch (l) {
    case "top":
      S = {
        x: c,
        y: i.y - a.height
      };
      break;
    case "bottom":
      S = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      S = {
        x: i.x + i.width,
        y: m
      };
      break;
    case "left":
      S = {
        x: i.x - a.width,
        y: m
      };
      break;
    default:
      S = {
        x: i.x,
        y: i.y
      };
  }
  const x = wn(t);
  return x && (S[o] += b * (x === "end" ? 1 : -1) * (n && p ? -1 : 1)), S;
}
async function Y_(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: o,
    elements: s,
    strategy: l
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: m = "floating",
    altBoundary: b = !1,
    padding: S = 0
  } = aa(t, e), x = Zp(S), N = s[b ? m === "floating" ? "reference" : "floating" : m], O = ur(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(N))) == null || n ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: p,
    rootBoundary: c,
    strategy: l
  })), F = m === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), z = await (r.isElement == null ? void 0 : r.isElement(B)) && await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  }, ce = ur(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: F,
    offsetParent: B,
    strategy: l
  }) : F);
  return {
    top: (O.top - ce.top + x.top) / z.y,
    bottom: (ce.bottom - O.bottom + x.bottom) / z.y,
    left: (O.left - ce.left + x.left) / z.x,
    right: (ce.right - O.right + x.right) / z.x
  };
}
const Z_ = 50, X_ = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, s = o.detectOverflow ? o : {
    ...o,
    detectOverflow: Y_
  }, l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let p = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: m
  } = wd(p, i, l), b = i, S = 0;
  const x = {};
  for (let k = 0; k < r.length; k++) {
    const N = r[k];
    if (!N)
      continue;
    const {
      name: O,
      fn: F
    } = N, {
      x: B,
      y: z,
      data: ce,
      reset: de
    } = await F({
      x: c,
      y: m,
      initialPlacement: i,
      placement: b,
      strategy: a,
      middlewareData: x,
      rects: p,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = B ?? c, m = z ?? m, x[O] = {
      ...x[O],
      ...ce
    }, de && S < Z_ && (S++, typeof de == "object" && (de.placement && (b = de.placement), de.rects && (p = de.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: c,
      y: m
    } = wd(p, b, l)), k = -1);
  }
  return {
    x: c,
    y: m,
    placement: b,
    strategy: a,
    middlewareData: x
  };
}, J_ = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: o,
      elements: s,
      middlewareData: l
    } = t, {
      element: p,
      padding: c = 0
    } = aa(e, t) || {};
    if (p == null)
      return {};
    const m = Zp(c), b = {
      x: n,
      y: i
    }, S = Uc(a), x = zc(S), k = await o.getDimensions(p), N = S === "y", O = N ? "top" : "left", F = N ? "bottom" : "right", B = N ? "clientHeight" : "clientWidth", z = r.reference[x] + r.reference[S] - b[S] - r.floating[x], ce = b[S] - r.reference[S], de = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(p));
    let te = de ? de[B] : 0;
    (!te || !await (o.isElement == null ? void 0 : o.isElement(de))) && (te = s.floating[B] || r.floating[x]);
    const ne = z / 2 - ce / 2, I = te / 2 - k[x] / 2 - 1, se = Lr(m[O], I), me = Lr(m[F], I), J = te - k[x] - me, ie = te / 2 - k[x] / 2 + ne, D = qp(se, ie, J), M = !l.arrow && wn(a) != null && ie !== D && r.reference[x] / 2 - (ie < se ? se : me) - k[x] / 2 < 0, W = M ? ie < se ? ie - se : ie - J : 0;
    return {
      [S]: b[S] + W,
      data: {
        [S]: D,
        centerOffset: ie - D - W,
        ...M && {
          alignmentOffset: W
        }
      },
      reset: M
    };
  }
});
function Q_(e, t, n) {
  return (e ? [...n.filter((a) => wn(a) === e), ...n.filter((a) => wn(a) !== e)] : n.filter((a) => ri(a) === a)).filter((a) => e ? wn(a) === e || (t ? jo(a) !== a : !1) : !0);
}
const e1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: o,
        placement: s,
        platform: l,
        elements: p
      } = t, {
        crossAxis: c = !1,
        alignment: m,
        allowedPlacements: b = bd,
        autoAlignment: S = !0,
        ...x
      } = aa(e, t), k = m !== void 0 || b === bd ? Q_(m || null, S, b) : b, N = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, O = k[N];
      if (O == null)
        return {};
      if (s !== O)
        return {
          reset: {
            placement: k[0]
          }
        };
      const F = await l.detectOverflow(t, x), B = Yp(O, r, await (l.isRTL == null ? void 0 : l.isRTL(p.floating))), z = [F[ri(O)], F[B[0]], F[B[1]]], ce = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: O,
        overflows: z
      }], de = k[N + 1];
      if (de)
        return {
          data: {
            index: N + 1,
            overflows: ce
          },
          reset: {
            placement: de
          }
        };
      const te = ce.map((se) => {
        const me = wn(se.placement);
        return [se.placement, me && c ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((J, ie) => J + ie, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, me) => se[1] - me[1]), I = ((a = te.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        wn(se[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || te[0][0];
      return I !== s ? {
        data: {
          index: N + 1,
          overflows: ce
        },
        reset: {
          placement: I
        }
      } : {};
    }
  };
}, t1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: s,
        platform: l,
        elements: p
      } = t, {
        mainAxis: c = !0,
        crossAxis: m = !0,
        fallbackPlacements: b,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: k = !0,
        ...N
      } = aa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const O = ri(a), F = Jn(s), B = ri(s) === s, z = await (l.isRTL == null ? void 0 : l.isRTL(p.floating)), ce = b || (B || !k ? [Vo(s)] : j_(s)), de = x !== "none";
      !b && de && ce.push(...q_(s, k, x, z));
      const te = [s, ...ce], ne = await l.detectOverflow(t, N), I = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && I.push(ne[O]), m) {
        const D = Yp(a, o, z);
        I.push(ne[D[0]], ne[D[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: I
      }], !I.every((D) => D <= 0)) {
        var me, J;
        const D = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, M = te[D];
        if (M && (!(m === "alignment" ? F !== Jn(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((Q) => Jn(Q.placement) === F ? Q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: se
            },
            reset: {
              placement: M
            }
          };
        let W = (J = se.filter((oe) => oe.overflows[0] <= 0).sort((oe, Q) => oe.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!W)
          switch (S) {
            case "bestFit": {
              var ie;
              const oe = (ie = se.filter((Q) => {
                if (de) {
                  const ue = Jn(Q.placement);
                  return ue === F || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((ue) => ue > 0).reduce((ue, fe) => ue + fe, 0)]).sort((Q, ue) => Q[1] - ue[1])[0]) == null ? void 0 : ie[0];
              oe && (W = oe);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (a !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, n1 = /* @__PURE__ */ new Set(["left", "top"]);
async function i1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = ri(n), s = wn(n), l = Jn(n) === "y", p = n1.has(o) ? -1 : 1, c = r && l ? -1 : 1, m = aa(t, e);
  let {
    mainAxis: b,
    crossAxis: S,
    alignmentAxis: x
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return s && typeof x == "number" && (S = s === "end" ? x * -1 : x), l ? {
    x: S * c,
    y: b * p
  } : {
    x: b * p,
    y: S * c
  };
}
const a1 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: s
      } = t, l = await i1(t, e);
      return o === ((n = s.offset) == null ? void 0 : n.placement) && (i = s.arrow) != null && i.alignmentOffset ? {} : {
        x: a + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, r1 = function(e) {
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
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (F) => {
            let {
              x: B,
              y: z
            } = F;
            return {
              x: B,
              y: z
            };
          }
        },
        ...p
      } = aa(e, t), c = {
        x: n,
        y: i
      }, m = await r.detectOverflow(t, p), b = Jn(a), S = Wp(b);
      let x = c[S], k = c[b];
      const N = (F, B) => qp(B + m[F === "y" ? "top" : "left"], B, B - m[F === "y" ? "bottom" : "right"]);
      o && (x = N(S, x)), s && (k = N(b, k));
      const O = l.fn({
        ...t,
        [S]: x,
        [b]: k
      });
      return {
        ...O,
        data: {
          x: O.x - n,
          y: O.y - i,
          enabled: {
            [S]: o,
            [b]: s
          }
        }
      };
    }
  };
}, o1 = function(e) {
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
        apply: o = () => {
        },
        ...s
      } = aa(e, t), l = await a.detectOverflow(t, s), p = ri(n), c = wn(n), m = Jn(n) === "y", {
        width: b,
        height: S
      } = i.floating;
      let x, k;
      p === "top" || p === "bottom" ? (x = p, k = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (k = p, x = c === "end" ? "top" : "bottom");
      const N = S - l.top - l.bottom, O = b - l.left - l.right, F = Lr(S - l[x], N), B = Lr(b - l[k], O), z = t.middlewareData.shift, ce = !z;
      let de = F, te = B;
      z != null && z.enabled.x && (te = O), z != null && z.enabled.y && (de = N), ce && !c && (m ? te = b - 2 * nc(l.left, l.right) : de = S - 2 * nc(l.top, l.bottom)), await o({
        ...t,
        availableWidth: te,
        availableHeight: de
      });
      const ne = await a.getDimensions(r.floating);
      return b !== ne.width || S !== ne.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function dn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  return dn(e).getComputedStyle(e);
}
const Cd = Math.min, dr = Math.max, Ko = Math.round;
function Xp(e) {
  const t = Dn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Ko(n) !== a || Ko(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Ni(e) {
  return Qp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let so;
function Jp() {
  if (so) return so;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (so = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), so) : navigator.userAgent;
}
function Fn(e) {
  return e instanceof dn(e).HTMLElement;
}
function Si(e) {
  return e instanceof dn(e).Element;
}
function Qp(e) {
  return e instanceof dn(e).Node;
}
function Ed(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dn(e).ShadowRoot || e instanceof ShadowRoot;
}
function zs(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function s1(e) {
  return ["table", "td", "th"].includes(Ni(e));
}
function ic(e) {
  const t = /firefox/i.test(Jp()), n = Dn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function eh() {
  return !/^((?!chrome|android).)*safari/i.test(Jp());
}
function Bc(e) {
  return ["html", "body", "#document"].includes(Ni(e));
}
function th(e) {
  return Si(e) ? e : e.contextElement;
}
const nh = { x: 1, y: 1 };
function Pa(e) {
  const t = th(e);
  if (!Fn(t)) return nh;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Xp(t);
  let o = (r ? Ko(n.width) : n.width) / i, s = (r ? Ko(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function Pr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = th(e);
  let l = nh;
  t && (i ? Si(i) && (l = Pa(i)) : l = Pa(e));
  const p = s ? dn(s) : window, c = !eh() && n;
  let m = (o.left + (c && ((a = p.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, b = (o.top + (c && ((r = p.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, S = o.width / l.x, x = o.height / l.y;
  if (s) {
    const k = dn(s), N = i && Si(i) ? dn(i) : i;
    let O = k.frameElement;
    for (; O && i && N !== k; ) {
      const F = Pa(O), B = O.getBoundingClientRect(), z = getComputedStyle(O);
      B.x += (O.clientLeft + parseFloat(z.paddingLeft)) * F.x, B.y += (O.clientTop + parseFloat(z.paddingTop)) * F.y, m *= F.x, b *= F.y, S *= F.x, x *= F.y, m += B.x, b += B.y, O = dn(O).frameElement;
    }
  }
  return { width: S, height: x, top: b, right: m + S, bottom: b + x, left: m, x: m, y: b };
}
function Ti(e) {
  return ((Qp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Us(e) {
  return Si(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ih(e) {
  return Pr(Ti(e)).left + Us(e).scrollLeft;
}
function Ir(e) {
  if (Ni(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ed(e) && e.host || Ti(e);
  return Ed(t) ? t.host : t;
}
function ah(e) {
  const t = Ir(e);
  return Bc(t) ? t.ownerDocument.body : Fn(t) && zs(t) ? t : ah(t);
}
function Go(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = ah(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = dn(i);
  return a ? t.concat(r, r.visualViewport || [], zs(i) ? i : []) : t.concat(i, Go(i));
}
function Sd(e, t, n) {
  return t === "viewport" ? ur((function(i, a) {
    const r = dn(i), o = Ti(i), s = r.visualViewport;
    let l = o.clientWidth, p = o.clientHeight, c = 0, m = 0;
    if (s) {
      l = s.width, p = s.height;
      const b = eh();
      (b || !b && a === "fixed") && (c = s.offsetLeft, m = s.offsetTop);
    }
    return { width: l, height: p, x: c, y: m };
  })(e, n)) : Si(t) ? ur((function(i, a) {
    const r = Pr(i, !0, a === "fixed"), o = r.top + i.clientTop, s = r.left + i.clientLeft, l = Fn(i) ? Pa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: s * l.x, y: o * l.y };
  })(t, n)) : ur((function(i) {
    const a = Ti(i), r = Us(i), o = i.ownerDocument.body, s = dr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), l = dr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let p = -r.scrollLeft + ih(i);
    const c = -r.scrollTop;
    return Dn(o).direction === "rtl" && (p += dr(a.clientWidth, o.clientWidth) - s), { width: s, height: l, x: p, y: c };
  })(Ti(e)));
}
function Td(e) {
  return Fn(e) && Dn(e).position !== "fixed" ? e.offsetParent : null;
}
function kd(e) {
  const t = dn(e);
  let n = Td(e);
  for (; n && s1(n) && Dn(n).position === "static"; ) n = Td(n);
  return n && (Ni(n) === "html" || Ni(n) === "body" && Dn(n).position === "static" && !ic(n)) ? t : n || (function(i) {
    let a = Ir(i);
    for (; Fn(a) && !Bc(a); ) {
      if (ic(a)) return a;
      a = Ir(a);
    }
    return null;
  })(e) || t;
}
function l1(e, t, n) {
  const i = Fn(t), a = Ti(t), r = Pr(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Ni(t) !== "body" || zs(a)) && (o = Us(t)), Fn(t)) {
    const l = Pr(t, !0);
    s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
  } else a && (s.x = ih(a));
  return { x: r.left + o.scrollLeft - s.x, y: r.top + o.scrollTop - s.y, width: r.width, height: r.height };
}
const c1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(p, c) {
    const m = c.get(p);
    if (m) return m;
    let b = Go(p).filter(((N) => Si(N) && Ni(N) !== "body")), S = null;
    const x = Dn(p).position === "fixed";
    let k = x ? Ir(p) : p;
    for (; Si(k) && !Bc(k); ) {
      const N = Dn(k), O = ic(k);
      (x ? O || S : O || N.position !== "static" || !S || !["absolute", "fixed"].includes(S.position)) ? S = N : b = b.filter(((F) => F !== k)), k = Ir(k);
    }
    return c.set(p, b), b;
  })(t, this._c) : [].concat(n), o = [...r, i], s = o[0], l = o.reduce(((p, c) => {
    const m = Sd(t, c, a);
    return p.top = dr(m.top, p.top), p.right = Cd(m.right, p.right), p.bottom = Cd(m.bottom, p.bottom), p.left = dr(m.left, p.left), p;
  }), Sd(t, s, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Fn(n), r = Ti(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ni(n) !== "body" || zs(r)) && (o = Us(n)), Fn(n))) {
    const p = Pr(n);
    s = Pa(n), l.x = p.x + n.clientLeft, l.y = p.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + l.x, y: t.y * s.y - o.scrollTop * s.y + l.y };
}, isElement: Si, getDimensions: function(e) {
  return Fn(e) ? Xp(e) : e.getBoundingClientRect();
}, getOffsetParent: kd, getDocumentElement: Ti, getScale: Pa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || kd, r = this.getDimensions;
  return { reference: l1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Dn(e).direction === "rtl" }, u1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: c1, ...n }, r = { ...a.platform, _c: i };
  return X_(e, t, { ...a, platform: r });
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
function ac(e, t) {
  let n = ki.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = ki.themes[n.$extend] || {} : (n = null, i = ki[t]) : n = null;
  while (n);
  return i;
}
function d1(e) {
  const t = [e];
  let n = ki.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = ki.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Ad(e) {
  const t = [e];
  let n = ki.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = ki.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Dr = !1;
if (typeof window < "u") {
  Dr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Dr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let rh = !1;
typeof window < "u" && typeof navigator < "u" && (rh = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const f1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), xd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Nd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Od(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Al() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const yn = [];
let Bi = null;
const Rd = {};
function Ld(e) {
  let t = Rd[e];
  return t || (t = Rd[e] = []), t;
}
let rc = function() {
};
typeof window < "u" && (rc = window.Element);
function ze(e) {
  return function(t) {
    return ac(t.theme, e);
  };
}
const xl = "__floating-vue__popper", oh = () => /* @__PURE__ */ St({
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
      default: ze("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: ze("positioningDisabled")
    },
    placement: {
      type: String,
      default: ze("placement"),
      validator: (e) => f1.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: ze("delay")
    },
    distance: {
      type: [Number, String],
      default: ze("distance")
    },
    skidding: {
      type: [Number, String],
      default: ze("skidding")
    },
    triggers: {
      type: Array,
      default: ze("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: ze("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: ze("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: ze("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: ze("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: ze("popperHideTriggers")
    },
    container: {
      type: [String, Object, rc, Boolean],
      default: ze("container")
    },
    boundary: {
      type: [String, rc],
      default: ze("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: ze("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: ze("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: ze("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: ze("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: ze("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: ze("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: ze("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: ze("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: ze("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: ze("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: ze("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: ze("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: ze("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: ze("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: ze("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: ze("flip")
    },
    shift: {
      type: Boolean,
      default: ze("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: ze("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: ze("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: ze("disposeTimeout")
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
      (this.distance || this.skidding) && e.middleware.push(a1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(e1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(r1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(t1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(J_({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: s } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? o = Math.abs(s) > a.reference.width / 2 : o = Math.abs(s) > a.reference.height / 2, {
            data: {
              overflow: o
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: o }) => {
            var s;
            if ((s = o.autoSize) != null && s.skip)
              return {};
            let l, p;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : p = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(o1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await u1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Bi && this.instantMove && Bi.instantMove && Bi !== this.parentPopper) {
        Bi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Bi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Al(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Go(this.$_referenceNode),
        ...Go(this.$_popperNode)
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
      for (const t of Ad(this.theme))
        Ld(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Al(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Od(yn, this), yn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Ad(this.theme)) {
        const i = Ld(n);
        Od(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Bi === this && (Bi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Al(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, xd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], xd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Nd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Nd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Dr ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((o) => {
        const s = t[o];
        s && this.$_registerEventListeners(e, s, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: i, eventType: a, handler: r } = n;
        !e || e === a ? i.forEach((o) => o.removeEventListener(a, r)) : t.push(n);
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
      if (fr >= e.left && fr <= e.right && pr >= e.top && pr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = fr - yi, i = pr - _i, a = t.left + t.width / 2 - yi + (t.top + t.height / 2) - _i + t.width + t.height, r = yi + n * a, o = _i + i * a;
        return lo(yi, _i, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        lo(yi, _i, r, o, t.left, t.top, t.right, t.top) || // Top edge
        lo(yi, _i, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        lo(yi, _i, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (rh) {
    const e = Dr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Pd(t), e), document.addEventListener("touchend", (t) => Id(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Pd(e), !0), window.addEventListener("click", (e) => Id(e, !1), !0);
  window.addEventListener("resize", m1);
}
function Pd(e, t) {
  for (let n = 0; n < yn.length; n++) {
    const i = yn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Id(e, t) {
  p1(e, t);
}
function p1(e, t) {
  const n = {};
  for (let i = yn.length - 1; i >= 0; i--) {
    const a = yn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Dd(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let s = a.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Dd(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Dd(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || h1(e, n) && !t;
}
function h1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function m1() {
  for (let e = 0; e < yn.length; e++)
    yn[e].$_computePosition();
}
let yi = 0, _i = 0, fr = 0, pr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  yi = fr, _i = pr, fr = e.clientX, pr = e.clientY;
}, Dr ? {
  passive: !0
} : void 0);
function lo(e, t, n, i, a, r, o, s) {
  const l = ((o - a) * (t - r) - (s - r) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t)), p = ((n - e) * (t - r) - (i - t) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t));
  return l >= 0 && l <= 1 && p >= 0 && p <= 1;
}
const v1 = {
  extends: oh()
}, Hc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function g1(e, t, n, i, a, r) {
  return C(), A("div", {
    ref: "reference",
    class: xe(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Pe(e.$slots, "default", _o(Ar(e.slotData)))
  ], 2);
}
const b1 = /* @__PURE__ */ Hc(v1, [["render", g1]]);
function y1() {
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
let go;
function oc() {
  oc.init || (oc.init = !0, go = y1() !== -1);
}
var Bs = {
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
    oc(), Qi(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", go && this.$el.appendChild(e), e.data = "about:blank", go || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!go && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const _1 = /* @__PURE__ */ gm();
mm("data-v-b329ee4c");
const w1 = {
  class: "resize-observer",
  tabindex: "-1"
};
vm();
const C1 = /* @__PURE__ */ _1((e, t, n, i, a, r) => (C(), $e("div", w1)));
Bs.render = C1;
Bs.__scopeId = "data-v-b329ee4c";
Bs.__file = "src/components/ResizeObserver.vue";
const sh = (e = "theme") => ({
  computed: {
    themeClass() {
      return d1(this[e]);
    }
  }
}), E1 = /* @__PURE__ */ St({
  name: "VPopperContent",
  components: {
    ResizeObserver: Bs
  },
  mixins: [
    sh()
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
}), S1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], T1 = {
  ref: "inner",
  class: "v-popper__inner"
}, k1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-outer" }, null, -1), A1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-inner" }, null, -1), x1 = [
  k1,
  A1
];
function N1(e, t, n, i, a, r) {
  const o = Ue("ResizeObserver");
  return C(), A("div", {
    id: e.popperId,
    ref: "popover",
    class: xe(["v-popper__popper", [
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
    style: pn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = qt((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    u("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    u("div", {
      class: "v-popper__wrapper",
      style: pn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      u("div", T1, [
        e.mounted ? (C(), A(he, { key: 0 }, [
          u("div", null, [
            Pe(e.$slots, "default")
          ]),
          e.handleResize ? (C(), $e(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : V("", !0)
        ], 64)) : V("", !0)
      ], 512),
      u("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, x1, 4)
    ], 4)
  ], 46, S1);
}
const lh = /* @__PURE__ */ Hc(E1, [["render", N1]]), ch = {
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
let sc = function() {
};
typeof window < "u" && (sc = window.Element);
const O1 = /* @__PURE__ */ St({
  name: "VPopperWrapper",
  components: {
    Popper: b1,
    PopperContent: lh
  },
  mixins: [
    ch,
    sh("finalTheme")
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
      type: [String, Object, sc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, sc],
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
function R1(e, t, n, i, a, r) {
  const o = Ue("PopperContent"), s = Ue("Popper");
  return C(), $e(s, Pt({ ref: "popper" }, e.$props, {
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
    default: Le(({
      popperId: l,
      isShown: p,
      shouldMountContent: c,
      skipTransition: m,
      autoHide: b,
      show: S,
      hide: x,
      handleResize: k,
      onResize: N,
      classes: O,
      result: F
    }) => [
      Pe(e.$slots, "default", {
        shown: p,
        show: S,
        hide: x
      }),
      Te(o, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: p,
        mounted: c,
        "skip-transition": m,
        "auto-hide": b,
        "handle-resize": k,
        classes: O,
        result: F,
        onHide: x,
        onResize: N
      }, {
        default: Le(() => [
          Pe(e.$slots, "popper", {
            shown: p,
            hide: x
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const jc = /* @__PURE__ */ Hc(O1, [["render", R1]]), L1 = {
  ...jc,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...jc
});
({
  ...jc
});
oh();
const Fd = ki, P1 = L1, I1 = /* @__PURE__ */ St({
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
}), D1 = "_ncPopover_qgtYg", F1 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: D1
}, uh = "nc-popover-9";
Fd.themes[uh] = structuredClone(Fd.themes.dropdown);
const M1 = {
  name: "NcPopover",
  components: {
    Dropdown: P1,
    NcPopoverTriggerProvider: I1
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
      theme: uh
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
      return this.placement === "start" ? Ql ? "right" : "left" : this.placement === "end" ? Ql ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = $c(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Rr(),
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
        ea.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function $1(e, t, n, i, a, r) {
  const o = Ue("NcPopoverTriggerProvider"), s = Ue("Dropdown");
  return C(), $e(s, {
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
    popper: Le((l) => [
      Pe(e.$slots, "default", _o(Ar(l)))
    ]),
    default: Le(() => [
      Te(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Le((l) => [
          Pe(e.$slots, "trigger", _o(Ar(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const z1 = {
  $style: F1
}, Md = /* @__PURE__ */ Xe(M1, [["render", $1], ["__cssModules", z1]]), U1 = {
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
}, B1 = ["aria-hidden", "aria-label"], H1 = ["fill", "width", "height"], j1 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, V1 = { key: 0 };
function K1(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", j1, [
        n.title ? (C(), A("title", V1, f(n.title), 1)) : V("", !0)
      ])
    ], 8, H1))
  ], 16, B1);
}
const G1 = /* @__PURE__ */ Xe(U1, [["render", K1]]);
Ri(Sb);
function Vc(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ct)
        return !1;
      if (n.type === he && !Vc(n.children))
        return !1;
      if (n.type === Br && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const q1 = ".focusable", W1 = {
  name: "NcActions",
  components: {
    NcButton: In,
    NcPopover: Md
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
      [Kp]: q(() => this.actionsMenuSemanticType === "menu"),
      [Gp]: this.closeMenu
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
      randomId: $s()
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
    U_(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(q1);
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
    const e = [], t = (S, x) => {
      S.forEach((k) => {
        if (this.isAction(k)) {
          x.push(k);
          return;
        }
        k.type === he && t(k.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((S) => !i.includes(S)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], s = ["NcActionLink", "NcActionRouter"], l = a.some((S) => o.includes(this.getActionName(S))), p = a.some((S) => r.includes(this.getActionName(S))), c = a.some((S) => s.includes(this.getActionName(S)));
    l ? this.actionsMenuSemanticType = "dialog" : p ? this.actionsMenuSemanticType = "menu" : c ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const m = (S) => {
      const x = S?.props?.icon, k = S?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Vt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Vt("span", { class: ["icon", x] })), N = S?.children?.default?.()?.[0]?.children?.trim(), O = this.forceName ? N : "";
      let F = S?.props?.title;
      this.forceName || F || (F = N);
      const B = { ...S?.props ?? {} }, z = ["submit", "reset"].includes(B.type) ? B.modelValue : "button";
      return delete B.modelValue, delete B.type, Vt(
        In,
        Pt(
          B,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": S?.props?.["aria-label"] || N,
            title: F,
            disabled: this.disabled || S?.props?.disabled,
            pressed: S?.props?.modelValue,
            size: this.size,
            type: z,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (O ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": S?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => O,
          icon: () => k
        }
      );
    }, b = (S) => {
      const x = Vc(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Vt("span", { class: ["icon", this.defaultIcon] }) : Vt(G1, { size: 20 }), k = `${this.randomId}-trigger`;
      return Vt(
        Md,
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
          trigger: () => Vt(In, {
            id: k,
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
            icon: () => x,
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
              "aria-labelledby": k,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              S
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? m(e[0]) : (this.$nextTick(() => {
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
        ...i.map(m),
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
}, dh = /* @__PURE__ */ Xe(W1, [["__scopeId", "data-v-7206c1f1"]]), Y1 = ["aria-label"], Z1 = ["width", "height"], X1 = ["fill"], J1 = ["fill"], Q1 = { key: 0 }, e0 = /* @__PURE__ */ St({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = q(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (C(), A("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (C(), A("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        u("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, X1),
        u("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (C(), A("title", Q1, f(e.name), 1)) : V("", !0)
        ], 8, J1)
      ], 8, Z1))
    ], 8, Y1));
  }
}), fh = /* @__PURE__ */ Xe(e0, [["__scopeId", "data-v-cf399190"]]), lc = /* @__PURE__ */ St({
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
}), t0 = {
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
}, n0 = ["aria-hidden", "aria-label"], i0 = ["fill", "width", "height"], a0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, r0 = { key: 0 };
function o0(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", a0, [
        n.title ? (C(), A("title", r0, f(n.title), 1)) : V("", !0)
      ])
    ], 8, i0))
  ], 16, n0);
}
const s0 = /* @__PURE__ */ Xe(t0, [["render", o0]]), l0 = {
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
}, c0 = ["aria-hidden", "aria-label"], u0 = ["fill", "width", "height"], d0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, f0 = { key: 0 };
function p0(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", d0, [
        n.title ? (C(), A("title", f0, f(n.title), 1)) : V("", !0)
      ])
    ], 8, u0))
  ], 16, c0);
}
const h0 = /* @__PURE__ */ Xe(l0, [["render", p0]]);
Ri(xb);
const m0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: In,
    ChevronDown: i_,
    ChevronUp: u_
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
    return { isLegacy34: Li };
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
function v0(e, t, n, i, a, r) {
  const o = Ue("ChevronUp"), s = Ue("ChevronDown"), l = Ue("NcButton");
  return C(), $e(l, {
    class: xe(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Le(() => [
      n.open ? (C(), $e(o, {
        key: 0,
        size: 20
      })) : (C(), $e(s, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const g0 = /* @__PURE__ */ Xe(m0, [["render", v0], ["__scopeId", "data-v-cfbd3794"]]);
Ri(Nb, Lb);
const b0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: dh,
    NcActionButton: z_,
    NcAppNavigationIconCollapsible: g0,
    NcInputConfirmCancel: k_,
    NcLoadingIcon: fh,
    NcVNodes: lc,
    Pencil: s0,
    Undo: h0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: zp, default: null }
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
      default: () => $s(),
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
      isMobile: jr(),
      isLegacy34: Li
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ti("toggle-navigation", { open: !1 }));
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
}, y0 = ["id"], _0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], w0 = {
  key: 0,
  class: "editingContainer"
}, C0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, E0 = { class: "app-navigation-entry__deleted-description" }, S0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, T0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function k0(e, t, n, i, a, r) {
  const o = Ue("NcLoadingIcon"), s = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), p = Ue("NcActionButton"), c = Ue("Undo"), m = Ue("NcActions"), b = Ue("NcAppNavigationIconCollapsible");
  return C(), A("li", {
    id: n.id,
    class: xe([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (C(), $e(xc(r.isRouterLink ? "router-link" : "NcVNodes"), _o(Ar({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Le(({ href: S, navigate: x, isActive: k }) => [
        u("div", {
          ref: "entry",
          class: xe(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && k || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...N) => r.requestHighlight && r.requestHighlight(...N)),
          onFocusin: t[5] || (t[5] = (...N) => r.requestHighlight && r.requestHighlight(...N))
        }, [
          n.undo ? V("", !0) : (C(), A("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && k ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || S || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...N) => r.handleBlur && r.handleBlur(...N)),
            onClick: (N) => r.onClick(N, x, S),
            onFocus: t[2] || (t[2] = (...N) => r.handleFocus && r.handleFocus(...N)),
            onKeydown: t[3] || (t[3] = qt(it((...N) => r.handleTab && r.handleTab(...N), ["exact"]), ["tab"]))
          }, [
            u("div", {
              class: xe(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (C(), $e(o, { key: 0 })) : Pe(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && k
              }, void 0, !0)
            ], 2),
            u("span", {
              class: xe(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, f(n.name), 3),
            a.editingActive ? (C(), A("div", w0, [
              Te(s, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (N) => a.editingValue = N),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && k || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : V("", !0)
          ], 40, _0)),
          n.undo ? (C(), A("div", C0, [
            u("div", E0, f(n.name), 1)
          ])) : V("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (C(), A("div", {
            key: 2,
            class: xe(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (C(), A("div", S0, [
              Pe(e.$slots, "counter", {}, void 0, !0)
            ])) : V("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (C(), $e(m, {
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
              icon: Le(() => [
                Pe(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Le(() => [
                n.editable && !a.editingActive ? (C(), $e(p, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Le(() => [
                    Te(l, { size: 20 })
                  ]),
                  default: Le(() => [
                    Re(" " + f(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : V("", !0),
                n.undo ? (C(), $e(p, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Le(() => [
                    Te(c, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : V("", !0),
                Pe(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : V("", !0)
          ], 2)) : V("", !0),
          n.allowCollapse && e.$slots.default ? (C(), $e(b, {
            key: 3,
            active: n.to && k || n.active,
            open: a.opened,
            onClick: it(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : V("", !0),
          Pe(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (C(), A("ul", T0, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ])) : V("", !0)
  ], 10, y0);
}
const $d = /* @__PURE__ */ Xe(b0, [["render", k0], ["__scopeId", "data-v-01bef41b"]]), Nl = /* @__PURE__ */ new WeakMap(), A0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = cd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = cd(e, a, Object.assign({ capture: n }, r));
    }
    Nl.set(e, i);
  },
  unmounted(e) {
    const t = Nl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Nl.delete(e);
  }
}, x0 = {
  mounted(e) {
    e.focus();
  }
}, N0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", O0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", cc = "numeric", uc = "ascii", dc = "alpha", hr = "asciinumeric", ir = "alphanumeric", fc = "domain", ph = "emoji", R0 = "scheme", L0 = "slashscheme", Ol = "whitespace";
function P0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Yi(e, t, n) {
  t[cc] && (t[hr] = !0, t[ir] = !0), t[uc] && (t[hr] = !0, t[dc] = !0), t[hr] && (t[ir] = !0), t[dc] && (t[ir] = !0), t[ir] && (t[fc] = !0), t[ph] && (t[fc] = !0);
  for (const i in t) {
    const a = P0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function I0(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function tn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
tn.groups = {};
tn.prototype = {
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
    i = i || tn.groups;
    let a;
    return t && t.j ? a = t : (a = new tn(t), n && i && Yi(t, n, i)), this.jr.push([e, a]), a;
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
    for (let o = 0; o < r - 1; o++)
      a = a.tt(e[o]);
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
    i = i || tn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, s = a.go(e);
    if (s ? (o = new tn(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new tn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const l = Object.assign(I0(o.t, i), n);
          Yi(r, l, i);
        } else n && Yi(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), ut = (e, t, n, i, a) => e.tr(t, n, i, a), zd = (e, t, n, i, a) => e.ts(t, n, i, a), ae = (e, t, n, i, a) => e.tt(t, n, i, a), Gn = "WORD", pc = "UWORD", hh = "ASCIINUMERICAL", mh = "ALPHANUMERICAL", Fr = "LOCALHOST", hc = "TLD", mc = "UTLD", bo = "SCHEME", Ta = "SLASH_SCHEME", Kc = "NUM", vc = "WS", Gc = "NL", mr = "OPENBRACE", vr = "CLOSEBRACE", qo = "OPENBRACKET", Wo = "CLOSEBRACKET", Yo = "OPENPAREN", Zo = "CLOSEPAREN", Xo = "OPENANGLEBRACKET", Jo = "CLOSEANGLEBRACKET", Qo = "FULLWIDTHLEFTPAREN", es = "FULLWIDTHRIGHTPAREN", ts = "LEFTCORNERBRACKET", ns = "RIGHTCORNERBRACKET", is = "LEFTWHITECORNERBRACKET", as = "RIGHTWHITECORNERBRACKET", rs = "FULLWIDTHLESSTHAN", os = "FULLWIDTHGREATERTHAN", ss = "AMPERSAND", ls = "APOSTROPHE", cs = "ASTERISK", Ci = "AT", us = "BACKSLASH", ds = "BACKTICK", fs = "CARET", Zi = "COLON", qc = "COMMA", ps = "DOLLAR", On = "DOT", hs = "EQUALS", Wc = "EXCLAMATION", ln = "HYPHEN", gr = "PERCENT", ms = "PIPE", vs = "PLUS", gs = "POUND", br = "QUERY", Yc = "QUOTE", vh = "FULLWIDTHMIDDLEDOT", Zc = "SEMI", Rn = "SLASH", yr = "TILDE", bs = "UNDERSCORE", gh = "EMOJI", ys = "SYM";
var bh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: mh,
  AMPERSAND: ss,
  APOSTROPHE: ls,
  ASCIINUMERICAL: hh,
  ASTERISK: cs,
  AT: Ci,
  BACKSLASH: us,
  BACKTICK: ds,
  CARET: fs,
  CLOSEANGLEBRACKET: Jo,
  CLOSEBRACE: vr,
  CLOSEBRACKET: Wo,
  CLOSEPAREN: Zo,
  COLON: Zi,
  COMMA: qc,
  DOLLAR: ps,
  DOT: On,
  EMOJI: gh,
  EQUALS: hs,
  EXCLAMATION: Wc,
  FULLWIDTHGREATERTHAN: os,
  FULLWIDTHLEFTPAREN: Qo,
  FULLWIDTHLESSTHAN: rs,
  FULLWIDTHMIDDLEDOT: vh,
  FULLWIDTHRIGHTPAREN: es,
  HYPHEN: ln,
  LEFTCORNERBRACKET: ts,
  LEFTWHITECORNERBRACKET: is,
  LOCALHOST: Fr,
  NL: Gc,
  NUM: Kc,
  OPENANGLEBRACKET: Xo,
  OPENBRACE: mr,
  OPENBRACKET: qo,
  OPENPAREN: Yo,
  PERCENT: gr,
  PIPE: ms,
  PLUS: vs,
  POUND: gs,
  QUERY: br,
  QUOTE: Yc,
  RIGHTCORNERBRACKET: ns,
  RIGHTWHITECORNERBRACKET: as,
  SCHEME: bo,
  SEMI: Zc,
  SLASH: Rn,
  SLASH_SCHEME: Ta,
  SYM: ys,
  TILDE: yr,
  TLD: hc,
  UNDERSCORE: bs,
  UTLD: mc,
  UWORD: pc,
  WORD: Gn,
  WS: vc
});
const Vn = /[a-z]/, Za = new RegExp("\\p{L}", "u"), Rl = new RegExp("\\p{Emoji}", "u"), Kn = /\d/, Ll = /\s/, Ud = "\r", Pl = `
`, D0 = "️", F0 = "‍", Il = "￼";
let co = null, uo = null;
function M0(e = []) {
  const t = {};
  tn.groups = t;
  const n = new tn();
  co == null && (co = Bd(N0)), uo == null && (uo = Bd(O0)), ae(n, "'", ls), ae(n, "{", mr), ae(n, "}", vr), ae(n, "[", qo), ae(n, "]", Wo), ae(n, "(", Yo), ae(n, ")", Zo), ae(n, "<", Xo), ae(n, ">", Jo), ae(n, "（", Qo), ae(n, "）", es), ae(n, "「", ts), ae(n, "」", ns), ae(n, "『", is), ae(n, "』", as), ae(n, "＜", rs), ae(n, "＞", os), ae(n, "&", ss), ae(n, "*", cs), ae(n, "@", Ci), ae(n, "`", ds), ae(n, "^", fs), ae(n, ":", Zi), ae(n, ",", qc), ae(n, "$", ps), ae(n, ".", On), ae(n, "=", hs), ae(n, "!", Wc), ae(n, "-", ln), ae(n, "%", gr), ae(n, "|", ms), ae(n, "+", vs), ae(n, "#", gs), ae(n, "?", br), ae(n, '"', Yc), ae(n, "/", Rn), ae(n, ";", Zc), ae(n, "~", yr), ae(n, "_", bs), ae(n, "\\", us), ae(n, "・", vh);
  const i = ut(n, Kn, Kc, {
    [cc]: !0
  });
  ut(i, Kn, i);
  const a = ut(i, Vn, hh, {
    [hr]: !0
  }), r = ut(i, Za, mh, {
    [ir]: !0
  }), o = ut(n, Vn, Gn, {
    [uc]: !0
  });
  ut(o, Kn, a), ut(o, Vn, o), ut(a, Kn, a), ut(a, Vn, a);
  const s = ut(n, Za, pc, {
    [dc]: !0
  });
  ut(s, Vn), ut(s, Kn, r), ut(s, Za, s), ut(r, Kn, r), ut(r, Vn), ut(r, Za, r);
  const l = ae(n, Pl, Gc, {
    [Ol]: !0
  }), p = ae(n, Ud, vc, {
    [Ol]: !0
  }), c = ut(n, Ll, vc, {
    [Ol]: !0
  });
  ae(n, Il, c), ae(p, Pl, l), ae(p, Il, c), ut(p, Ll, c), ae(c, Ud), ae(c, Pl), ut(c, Ll, c), ae(c, Il, c);
  const m = ut(n, Rl, gh, {
    [ph]: !0
  });
  ae(m, "#"), ut(m, Rl, m), ae(m, D0, m);
  const b = ae(m, F0);
  ae(b, "#"), ut(b, Rl, m);
  const S = [[Vn, o], [Kn, a]], x = [[Vn, null], [Za, s], [Kn, r]];
  for (let k = 0; k < co.length; k++)
    gi(n, co[k], hc, Gn, S);
  for (let k = 0; k < uo.length; k++)
    gi(n, uo[k], mc, pc, x);
  Yi(hc, {
    tld: !0,
    ascii: !0
  }, t), Yi(mc, {
    utld: !0,
    alpha: !0
  }, t), gi(n, "file", bo, Gn, S), gi(n, "mailto", bo, Gn, S), gi(n, "http", Ta, Gn, S), gi(n, "https", Ta, Gn, S), gi(n, "ftp", Ta, Gn, S), gi(n, "ftps", Ta, Gn, S), Yi(bo, {
    scheme: !0,
    ascii: !0
  }, t), Yi(Ta, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((k, N) => k[0] > N[0] ? 1 : -1);
  for (let k = 0; k < e.length; k++) {
    const N = e[k][0], F = e[k][1] ? {
      [R0]: !0
    } : {
      [L0]: !0
    };
    N.indexOf("-") >= 0 ? F[fc] = !0 : Vn.test(N) ? Kn.test(N) ? F[hr] = !0 : F[uc] = !0 : F[cc] = !0, zd(n, N, N, F);
  }
  return zd(n, "localhost", Fr, {
    ascii: !0
  }), n.jd = new tn(ys), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, bh)
  };
}
function yh(e, t) {
  const n = $0(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let s = e, l = null, p = 0, c = null, m = -1, b = -1;
    for (; o < i && (l = s.go(n[o])); )
      s = l, s.accepts() ? (m = 0, b = 0, c = s) : m >= 0 && (m += n[o].length, b++), p += n[o].length, r += n[o].length, o++;
    r -= m, o -= b, p -= m, a.push({
      t: c.t,
      // token type/name
      v: t.slice(r - p, r),
      // string value
      s: r - p,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function $0(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function gi(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let s = 0; s < o - 1; s++) {
    const l = t[s];
    e.j[l] ? r = e.j[l] : (r = new tn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new tn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Bd(e) {
  const t = [], n = [];
  let i = 0, a = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[i + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(n.join(""));
      for (let o = parseInt(e.substring(i, i + r), 10); o > 0; o--)
        n.pop();
      i += r;
    } else
      n.push(e[i]), i++;
  }
  return t;
}
const Mr = {
  defaultProtocol: "http",
  events: null,
  format: Hd,
  formatHref: Hd,
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
function Xc(e, t = null) {
  let n = Object.assign({}, Mr);
  e && (n = Object.assign(n, e instanceof Xc ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Xc.prototype = {
  o: Mr,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Mr[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Hd(e) {
  return e;
}
function _h(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
_h.prototype = {
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
  toObject(e = Mr.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, s = e.get("className", n, t), l = e.get("target", n, t), p = e.get("rel", n, t), c = e.getObj("attributes", n, t), m = e.getObj("events", n, t);
    return o.href = i, s && (o.class = s), l && (o.target = l), p && (o.rel = p), c && Object.assign(o, c), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: m
    };
  }
};
function Hs(e, t) {
  class n extends _h {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const z0 = Hs("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), jd = Hs("text"), U0 = Hs("nl"), fo = Hs("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Mr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Fr && e[1].t === Zi;
  }
}), sn = (e) => new tn(e);
function B0({
  groups: e
}) {
  const t = e.domain.concat([ss, cs, Ci, us, ds, fs, ps, hs, ln, Kc, gr, ms, vs, gs, Rn, ys, yr, bs]), n = [ls, Zi, qc, On, Wc, gr, br, Yc, Zc, Xo, Jo, mr, vr, Wo, qo, Yo, Zo, Qo, es, ts, ns, is, as, rs, os], i = [ss, ls, cs, us, ds, fs, ps, hs, ln, mr, vr, gr, ms, vs, gs, br, Rn, ys, yr, bs], a = sn(), r = ae(a, yr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const o = sn(), s = sn(), l = sn();
  Ie(a, e.domain, o), Ie(a, e.scheme, s), Ie(a, e.slashscheme, l), Ie(o, i, r), Ie(o, e.domain, o);
  const p = ae(o, Ci);
  ae(r, Ci, p), ae(s, Ci, p), ae(l, Ci, p);
  const c = ae(r, On);
  Ie(c, i, r), Ie(c, e.domain, r);
  const m = sn();
  Ie(p, e.domain, m), Ie(m, e.domain, m);
  const b = ae(m, On);
  Ie(b, e.domain, m);
  const S = sn(z0);
  Ie(b, e.tld, S), Ie(b, e.utld, S), ae(p, Fr, S);
  const x = ae(m, ln);
  ae(x, ln, x), Ie(x, e.domain, m), Ie(S, e.domain, m), ae(S, On, b), ae(S, ln, x);
  const k = ae(o, ln), N = ae(o, On);
  ae(k, ln, k), Ie(k, e.domain, o), Ie(N, i, r), Ie(N, e.domain, o);
  const O = sn(fo);
  Ie(N, e.tld, O), Ie(N, e.utld, O), Ie(O, e.domain, o), Ie(O, i, r), ae(O, On, N), ae(O, ln, k), ae(O, Ci, p);
  const F = ae(O, Zi), B = sn(fo);
  Ie(F, e.numeric, B);
  const z = sn(fo), ce = sn();
  Ie(z, t, z), Ie(z, n, ce), Ie(ce, t, z), Ie(ce, n, ce), ae(O, Rn, z), ae(B, Rn, z);
  const de = ae(s, Zi), te = ae(l, Zi), ne = ae(te, Rn), I = ae(ne, Rn);
  Ie(s, e.domain, o), ae(s, On, N), ae(s, ln, k), Ie(l, e.domain, o), ae(l, On, N), ae(l, ln, k), Ie(de, e.domain, z), ae(de, Rn, z), ae(de, br, z), Ie(I, e.domain, z), Ie(I, t, z), ae(I, Rn, z);
  const se = [
    [mr, vr],
    // {}
    [qo, Wo],
    // []
    [Yo, Zo],
    // ()
    [Xo, Jo],
    // <>
    [Qo, es],
    // （）
    [ts, ns],
    // 「」
    [is, as],
    // 『』
    [rs, os]
    // ＜＞
  ];
  for (let me = 0; me < se.length; me++) {
    const [J, ie] = se[me], D = ae(z, J);
    ae(ce, J, D);
    const M = sn(fo);
    Ie(D, t, M);
    const W = sn();
    Ie(D, n, W), ae(D, ie, z), Ie(M, t, M), Ie(M, n, W), Ie(W, t, M), Ie(W, n, W), ae(M, ie, z), ae(W, ie, z);
  }
  return ae(a, Fr, O), ae(a, Gc, U0), {
    start: a,
    tokens: bh
  };
}
function H0(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let s = e, l = null, p = null, c = 0, m = null, b = -1;
    for (; a < i && !(l = s.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (p = l || s.go(n[a].t)); )
      l = null, s = p, s.accepts() ? (b = 0, m = s) : b >= 0 && b++, a++, c++;
    if (b < 0)
      a -= c, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(Dl(jd, t, o)), o = []), a -= b, c -= b;
      const S = m.t, x = n.slice(a - c, a);
      r.push(Dl(S, t, x));
    }
  }
  return o.length > 0 && r.push(Dl(jd, t, o)), r;
}
function Dl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const At = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function j0() {
  At.scanner = M0(At.customSchemes);
  for (let e = 0; e < At.tokenQueue.length; e++)
    At.tokenQueue[e][1]({
      scanner: At.scanner
    });
  At.parser = B0(At.scanner.tokens);
  for (let e = 0; e < At.pluginQueue.length; e++)
    At.pluginQueue[e][1]({
      scanner: At.scanner,
      parser: At.parser
    });
  return At.initialized = !0, At;
}
function wh(e) {
  return At.initialized || j0(), H0(At.parser.start, e, yh(At.scanner.start, e));
}
wh.scan = yh;
function V0(e) {
  const t = new Xc({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, q0), n = wh(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Do(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function K0(e) {
  return e.replace(/"/g, "&quot;");
}
function G0(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${K0(i)}"`);
  }
  return t.join(" ");
}
function q0({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${G0(t)}>${Do(n)}</${e}>`;
}
const W0 = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = V0(t.text));
}, Y0 = ["title"], Z0 = /* @__PURE__ */ St({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Nt("NcAppSidebar:header:ref");
    return (n, i) => tt((C(), A("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Re(f(e.name), 1)
    ], 8, Y0)), [
      [g(W0), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), X0 = ["aria-labelledby"], J0 = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Q0 = ["id"], ew = {
  key: 2,
  class: "empty-content__description"
}, tw = {
  key: 3,
  class: "empty-content__action"
}, nw = /* @__PURE__ */ St({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = $s();
    return (n, i) => (C(), A("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (C(), A("div", J0, [
        Pe(n.$slots, "icon", {}, void 0, !0)
      ])) : V("", !0),
      e.name !== "" || n.$slots.name ? (C(), A("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Pe(n.$slots, "name", {}, () => [
          Re(f(e.name), 1)
        ], !0)
      ], 8, Q0)) : V("", !0),
      e.description !== "" || n.$slots.description ? (C(), A("p", ew, [
        Pe(n.$slots, "description", {}, () => [
          Re(f(e.description), 1)
        ], !0)
      ])) : V("", !0),
      n.$slots.action ? (C(), A("div", tw, [
        Pe(n.$slots, "action", {}, void 0, !0)
      ])) : V("", !0)
    ], 8, X0));
  }
}), iw = /* @__PURE__ */ Xe(nw, [["__scopeId", "data-v-8609a4c1"]]), aw = {
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
}, rw = ["aria-hidden", "aria-label"], ow = ["fill", "width", "height"], sw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, lw = { key: 0 };
function cw(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", sw, [
        n.title ? (C(), A("title", lw, f(n.title), 1)) : V("", !0)
      ])
    ], 8, ow))
  ], 16, rw);
}
const uw = /* @__PURE__ */ Xe(aw, [["render", cw]]), dw = {
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
}, fw = ["aria-hidden", "aria-label"], pw = ["fill", "width", "height"], hw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, mw = { key: 0 };
function vw(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", hw, [
        n.title ? (C(), A("title", mw, f(n.title), 1)) : V("", !0)
      ])
    ], 8, pw))
  ], 16, fw);
}
const gw = /* @__PURE__ */ Xe(dw, [["render", vw]]), bw = {
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
}, yw = ["aria-hidden", "aria-label"], _w = ["fill", "width", "height"], ww = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Cw = { key: 0 };
function Ew(e, t, n, i, a, r) {
  return C(), A("span", Pt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), A("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", ww, [
        n.title ? (C(), A("title", Cw, f(n.title), 1)) : V("", !0)
      ])
    ], 8, _w))
  ], 16, yw);
}
const Sw = /* @__PURE__ */ Xe(bw, [["render", Ew]]), Tw = ["aria-selected", "tabindex"], kw = /* @__PURE__ */ St({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Hm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Hf(e, "selected"), n = /* @__PURE__ */ Ut(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (C(), A("button", {
      class: xe(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Li),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      u("span", {
        class: xe([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        u("span", {
          class: xe([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Te(lc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Le(() => [
              u("span", {
                class: xe([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        u("span", {
          class: xe([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Te(lc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Le(() => [
              u("span", {
                class: xe([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      u("span", {
        class: xe(a.$style.sidebarTabsButton__name)
      }, f(e.tab.name), 3)
    ], 10, Tw));
  }
}), Aw = "_sidebarTabsButton_q3kBA", xw = "_sidebarTabsButton_legacy_KQ4d1", Nw = "_sidebarTabsButton_selected_Pjayf", Ow = "_sidebarTabsButton_animatedHighlight_uvp-0", Rw = "_sidebarTabsButton__name_rlQsL", Lw = "_sidebarTabsButton__icon_QzZg4", Pw = "_sidebarTabsButton__iconLayer_ZkZan", Iw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Dw = "_sidebarTabsButton__icon_pop_IA0By", Fw = "_sidebarTabsButton__legacyIcon_QhcNW", Mw = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Aw,
  sidebarTabsButton_legacy: xw,
  sidebarTabsButton_selected: Nw,
  sidebarTabsButton_animatedHighlight: Ow,
  sidebarTabsButton__name: Rw,
  sidebarTabsButton__icon: Lw,
  sidebarTabsButton__iconLayer: Pw,
  sidebarTabsButton__iconLayer_hidden: Iw,
  sidebarTabsButton__icon_pop: Dw,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: Fw
}, $w = {
  $style: Mw
}, zw = /* @__PURE__ */ Xe(kw, [["__cssModules", $w]]), Uw = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: zw
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
      isLegacy34: Li,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Vg()]) : t.order - n.order), this.updateActive();
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
}, Bw = { class: "app-sidebar-tabs" };
function Hw(e, t, n, i, a, r) {
  const o = Ue("NcAppSidebarTabsButton");
  return C(), A("div", Bw, [
    r.hasMultipleTabs || r.showForSingleTab ? (C(), A("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: xe(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = qt(it((...s) => r.focusPreviousTab && r.focusPreviousTab(...s), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = qt(it((...s) => r.focusNextTab && r.focusNextTab(...s), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = qt(it((...s) => r.focusActiveTabContent && r.focusActiveTabContent(...s), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = qt(it((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = qt(it((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = qt(it((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = qt(it((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onPointerleave: t[8] || (t[8] = (...s) => r.hideHighlight && r.hideHighlight(...s)),
      onFocusin: t[9] || (t[9] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onFocusout: t[10] || (t[10] = (...s) => r.onHighlightFocusOut && r.onHighlightFocusOut(...s))
    }, [
      a.highlightEnabled ? (C(), A("div", {
        key: 0,
        class: xe(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: pn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : V("", !0),
      (C(!0), A(he, null, Me(a.tabs, (s) => (C(), $e(o, {
        id: `tab-button-${s.id}`,
        key: s.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${s.id}`,
        selected: a.activeTab === s.id,
        animatedHighlight: a.highlightEnabled,
        tab: s,
        "onUpdate:selected": (l) => r.setActive(s.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : V("", !0),
    u("div", {
      class: xe(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const jw = /* @__PURE__ */ Xe(Uw, [["render", Hw], ["__scopeId", "data-v-74190d2a"]]);
Ri(kb);
const Vw = {
  name: "NcAppSidebar",
  components: {
    NcActions: dh,
    NcAppSidebarHeader: Z0,
    NcAppSidebarTabs: jw,
    NcButton: In,
    NcLoadingIcon: fh,
    NcEmptyContent: iw,
    IconArrowRight: jp,
    IconClose: Vp,
    IconDockRight: uw,
    IconStar: gw,
    IconStarOutline: Sw
  },
  directives: {
    Focus: x0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: A0
  },
  inject: {
    ncContentSelector: {
      from: Hp,
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
    const e = /* @__PURE__ */ Ut(null);
    return cn("NcAppSidebar:header:ref", e), {
      uid: $s(),
      isMobile: _b(),
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
    isSlotPopulated: Vc,
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
      this.focusTrap || (this.focusTrap = $c([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Rr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ea.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, Kw = ["aria-labelledby"], Gw = { class: "app-sidebar-header__info" }, qw = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Ww = { class: "app-sidebar-header__name-container" }, Yw = { class: "app-sidebar-header__mainname-container" }, Zw = ["placeholder", "value"], Xw = ["title"], Jw = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Qw(e, t, n, i, a, r) {
  const o = Ue("IconDockRight"), s = Ue("NcButton"), l = Ue("NcLoadingIcon"), p = Ue("IconStar"), c = Ue("IconStarOutline"), m = Ue("NcAppSidebarHeader"), b = Ue("IconArrowRight"), S = Ue("NcActions"), x = Ue("IconClose"), k = Ue("NcAppSidebarTabs"), N = Ue("NcEmptyContent"), O = lu("focus"), F = lu("click-outside");
  return C(), $e(Nv, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Le(() => [
      tt(u("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = qt((...B) => r.onKeydownEsc && r.onKeydownEsc(...B), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (C(), $e(kf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Te(s, Pt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (B) => e.$emit("update:open", !0))
          }), {
            icon: Le(() => [
              Pe(e.$slots, "toggle-icon", {}, () => [
                Te(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : V("", !0),
        u("header", {
          class: xe(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (C(), $e(m, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Pe(e.$slots, "info", { key: 0 }, () => [
            u("div", Gw, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (C(), A("div", {
                key: 0,
                class: xe(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: pn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...B) => r.onFigureClick && r.onFigureClick(...B)),
                onKeydown: t[2] || (t[2] = qt((...B) => r.onFigureClick && r.onFigureClick(...B), ["enter"]))
              }, [
                Pe(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : V("", !0),
              u("div", {
                class: xe(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (C(), A("div", qw, [
                  Pe(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (C(), $e(s, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: it(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Le(() => [
                        n.starLoading ? (C(), $e(l, { key: 0 })) : a.isStarred ? (C(), $e(p, {
                          key: 1,
                          size: 20
                        })) : (C(), $e(c, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : V("", !0)
                  ], !0)
                ])) : V("", !0),
                u("div", Ww, [
                  u("div", Yw, [
                    tt(Te(m, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: it(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Oa, !n.nameEditable]
                    ]),
                    n.nameEditable ? tt((C(), A("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = it((...B) => r.onSubmitName && r.onSubmitName(...B), ["prevent"]))
                    }, [
                      tt(u("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = qt(it((...B) => r.onDismissEditing && r.onDismissEditing(...B), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...B) => r.onNameInput && r.onNameInput(...B))
                      }, null, 40, Zw), [
                        [O]
                      ]),
                      Te(s, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Le(() => [
                          Te(b, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [F, () => r.onSubmitName()]
                    ]) : V("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (C(), $e(S, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Le(() => [
                        Pe(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : V("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (C(), A("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Pe(e.$slots, "subname", {}, () => [
                      Re(f(n.subname), 1)
                    ], !0)
                  ], 8, Xw)) : V("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Te(s, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: it(r.closeSidebar, ["prevent"])
          }, {
            icon: Le(() => [
              Te(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (C(), A("div", Jw, [
            Pe(e.$slots, "description", {}, void 0, !0)
          ])) : V("", !0)
        ], 2),
        tt(Te(k, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Le(() => [
            Pe(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Oa, !n.loading]
        ]),
        n.loading ? (C(), $e(N, { key: 1 }, {
          icon: Le(() => [
            Te(l, { size: 64 })
          ]),
          _: 1
        })) : V("", !0)
      ], 40, Kw), [
        [Oa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const eC = /* @__PURE__ */ Xe(Vw, [["render", Qw], ["__scopeId", "data-v-c2c6820b"]]);
Ri(Rb);
const tC = `<!--
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
`, nC = `<!--
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
`, iC = { class: "vue-skip-actions__container" }, aC = { class: "vue-skip-actions__headline" }, rC = { class: "vue-skip-actions__buttons" }, oC = /* @__PURE__ */ St({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    cn(Bp, s), cn(Hp, "#content-vue"), cn("appName", q(() => t.appName));
    const n = jr(), i = /* @__PURE__ */ Ut(!1), a = /* @__PURE__ */ Ut(), r = q(() => a.value === "navigation" ? nC : tC);
    If(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function o() {
      ti("toggle-navigation", { open: !0 }), Qi(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function s(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, p) => (C(), A("div", {
      id: "content-vue",
      class: xe(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Li) }]])
    }, [
      (C(), $e(kf, { to: "#skip-actions" }, [
        u("div", iC, [
          u("div", aC, f(g(gt)("Keyboard navigation help")), 1),
          u("div", rC, [
            tt(Te(In, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: it(o, ["prevent"]),
              onFocusin: p[0] || (p[0] = (c) => a.value = "navigation"),
              onMouseover: p[1] || (p[1] = (c) => a.value = "navigation")
            }, {
              default: Le(() => [
                Re(f(g(gt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Oa, i.value]
            ]),
            Te(In, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: p[2] || (p[2] = (c) => a.value = "content"),
              onMouseover: p[3] || (p[3] = (c) => a.value = "content")
            }, {
              default: Le(() => [
                Re(f(g(gt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          tt(Te(Ms, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Oa, !g(n)]
          ])
        ])
      ])),
      Pe(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), sC = /* @__PURE__ */ Xe(oC, [["__scopeId", "data-v-d13dcb98"]]), lC = ["href"], cC = {
  id: "library-app",
  class: "library-vue-catalogue library-app",
  tabindex: "-1"
}, uC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, dC = { class: "library-review-header" }, fC = { class: "library-muted library-catalogue-eyebrow" }, pC = { id: "library-review-heading" }, hC = ["aria-label"], mC = ["href", "aria-current"], vC = ["aria-label"], gC = ["name", "value"], bC = {
  type: "submit",
  class: "button secondary"
}, yC = ["aria-busy"], _C = { key: 0 }, wC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, CC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, EC = { class: "library-metadata-review-workbench-copy" }, SC = { class: "library-muted library-catalogue-eyebrow" }, TC = ["title"], kC = {
  key: 0,
  class: "library-metadata-review-card"
}, AC = { class: "library-muted" }, xC = { class: "library-metadata-review-fields" }, NC = ["action"], OC = ["value"], RC = ["value"], LC = {
  type: "submit",
  class: "button secondary"
}, PC = { class: "library-metadata-review-actions" }, IC = ["href"], DC = ["href"], FC = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, MC = ["href"], $C = ["aria-label"], zC = {
  key: 0,
  class: "library-muted"
}, UC = {
  key: 1,
  class: "library-scan-error"
}, BC = ["href"], HC = ["href"], jC = ["aria-label"], VC = ["href"], KC = {
  key: 1,
  class: "library-muted"
}, GC = { key: 0 }, qC = ["href"], WC = {
  key: 3,
  class: "library-muted"
}, YC = {
  key: 1,
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ZC = ["aria-label"], XC = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, JC = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, QC = ["title"], eE = { class: "library-workspace-panel-purpose" }, tE = { class: "library-workspace-scope-badge" }, nE = ["aria-label"], iE = ["name", "value"], aE = { class: "library-quick-search-row" }, rE = ["title"], oE = ["aria-label"], sE = { class: "library-quick-filter-options" }, lE = { class: "library-quick-filter-option-grid" }, cE = { value: "title" }, uE = { value: "recent" }, dE = { value: "publicationDate" }, fE = { value: "publication" }, pE = { value: "lastOpened" }, hE = { value: "format" }, mE = { value: "" }, vE = { value: "1" }, gE = ["value"], bE = ["value"], yE = ["aria-label"], _E = ["aria-label"], wE = ["aria-label"], CE = { value: "" }, EE = ["value"], SE = { value: "" }, TE = ["value"], kE = { value: "" }, AE = ["value"], xE = { value: "" }, NE = ["value"], OE = { value: "" }, RE = ["value"], LE = { value: "" }, PE = ["value"], IE = { value: "" }, DE = ["value"], FE = { value: "" }, ME = ["value"], $E = { value: "" }, zE = ["value"], UE = { value: "" }, BE = ["value"], HE = { value: "" }, jE = { value: "1" }, VE = {
  type: "submit",
  class: "button primary"
}, KE = {
  href: "?",
  class: "button secondary"
}, GE = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, qE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, WE = ["title"], YE = { class: "library-workspace-panel-purpose" }, ZE = { class: "library-workspace-scope-badge" }, XE = {
  key: 0,
  class: "library-home-hero-card"
}, JE = ["title"], QE = { class: "library-home-hero-actions" }, eS = ["href"], tS = {
  key: 1,
  class: "library-home-rediscover"
}, nS = { class: "library-muted library-catalogue-eyebrow" }, iS = { class: "library-muted" }, aS = ["aria-label"], rS = ["href", "title"], oS = { class: "library-useful-view-count" }, sS = { class: "library-shortcut-selectors" }, lS = ["title"], cS = { value: "" }, uS = ["value"], dS = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, fS = { value: "" }, pS = ["value"], hS = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, mS = { value: "" }, vS = ["value"], gS = { class: "library-saved-collections" }, bS = ["title"], yS = ["action", "title"], _S = ["value"], wS = ["value"], CS = ["placeholder", "disabled"], ES = ["disabled", "title"], SS = ["aria-label"], TS = ["href"], kS = ["action"], AS = ["value"], xS = {
  type: "submit",
  class: "button tertiary"
}, NS = ["aria-label"], OS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, RS = ["title"], LS = { class: "library-workspace-panel-purpose" }, PS = { class: "library-workspace-scope-badge" }, IS = { class: "library-batch-action-grid" }, DS = ["action"], FS = ["value"], MS = ["name", "value"], $S = ["placeholder"], zS = ["title"], US = ["action"], BS = ["value"], HS = ["name", "value"], jS = ["placeholder"], VS = ["title"], KS = ["action"], GS = ["value"], qS = ["name", "value"], WS = ["title"], YS = ["action"], ZS = ["value"], XS = ["name", "value"], JS = { name: "bulkEditField" }, QS = { value: "publicationType" }, eT = { value: "subtitle" }, tT = { value: "creators" }, nT = { value: "publication" }, iT = { value: "publicationDate" }, aT = { value: "language" }, rT = { value: "publisher" }, oT = { value: "genres" }, sT = { value: "classifications" }, lT = ["title"], cT = ["action"], uT = ["value"], dT = ["name", "value"], fT = ["title"], pT = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, hT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, mT = ["title"], vT = { class: "library-workspace-panel-purpose" }, gT = { class: "library-workspace-scope-badge" }, bT = ["aria-label"], yT = ["href", "title"], _T = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, wT = ["title"], CT = ["href"], ET = ["href"], ST = ["action"], TT = ["value"], kT = {
  type: "submit",
  class: "button secondary"
}, AT = ["title"], xT = ["href"], NT = ["action"], OT = ["value"], RT = {
  type: "submit",
  class: "button secondary"
}, LT = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, PT = { class: "library-metadata-review-workbench-copy" }, IT = { class: "library-muted library-catalogue-eyebrow" }, DT = ["title"], FT = {
  key: 0,
  class: "library-metadata-review-card"
}, MT = { class: "library-muted" }, $T = { class: "library-metadata-review-fields" }, zT = ["action"], UT = ["value"], BT = ["value"], HT = {
  type: "submit",
  class: "button secondary"
}, jT = { class: "library-metadata-review-actions" }, VT = ["href"], KT = ["href"], GT = {
  key: 1,
  class: "library-muted"
}, qT = ["href"], WT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, YT = ["title"], ZT = { class: "library-workspace-panel-purpose" }, XT = { class: "library-workspace-scope-badge" }, JT = { class: "library-catalogue-actions-list" }, QT = ["href"], ek = ["href"], tk = ["href"], nk = ["href"], ik = { class: "library-actions-health-overview" }, ak = { class: "library-muted library-catalogue-eyebrow" }, rk = ["title"], ok = {
  key: 0,
  class: "library-muted"
}, sk = {
  key: 1,
  class: "library-notice"
}, lk = {
  key: 2,
  class: "library-muted"
}, ck = {
  key: 0,
  class: "library-muted"
}, uk = {
  key: 1,
  class: "library-muted"
}, dk = {
  key: 2,
  class: "library-muted"
}, fk = ["disabled"], pk = { class: "library-actions-health-links" }, hk = ["href"], mk = ["href"], vk = ["href"], gk = ["href"], bk = { class: "library-actions-health-grid" }, yk = { class: "library-import-health-number" }, _k = { class: "library-import-health-number" }, wk = { class: "library-muted" }, Ck = { class: "library-muted" }, Ek = {
  key: 0,
  class: "library-import-health-examples"
}, Sk = { class: "library-catalogue-header" }, Tk = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, kk = { id: "library-catalogue-heading" }, Ak = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, xk = {
  key: 1,
  class: "library-notice library-batch-metadata-apply-result"
}, Nk = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Ok = { class: "library-muted library-catalogue-eyebrow" }, Rk = ["title"], Lk = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Pk = { key: 0 }, Ik = { key: 1 }, Dk = { key: 2 }, Fk = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Mk = { key: 0 }, $k = { key: 1 }, zk = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, Uk = { class: "library-muted library-catalogue-eyebrow" }, Bk = ["title"], Hk = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, jk = ["href"], Vk = {
  key: 0,
  class: "library-notice"
}, Kk = { class: "library-publication-issue-label" }, Gk = ["href"], qk = { class: "library-muted" }, Wk = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Yk = ["title"], Zk = ["href"], Xk = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, Jk = ["aria-pressed"], Qk = ["aria-pressed"], eA = ["aria-pressed"], tA = { class: "library-catalogue-status-row" }, nA = { class: "library-muted library-filter-result-summary" }, iA = { key: 0 }, aA = { href: "?" }, rA = ["aria-label"], oA = { class: "library-pagination-range" }, sA = { key: 0 }, lA = ["href"], cA = {
  key: 1,
  class: "library-muted"
}, uA = ["href"], dA = {
  key: 3,
  class: "library-muted"
}, fA = ["aria-label"], pA = ["href", "aria-label"], hA = ["title"], mA = { class: "library-empty-actions" }, vA = ["href"], gA = { class: "library-muted" }, bA = ["title"], yA = { class: "library-empty-actions" }, _A = ["href"], wA = ["title"], CA = { class: "library-empty-actions" }, EA = ["href"], SA = {
  href: "?",
  class: "button primary"
}, TA = ["title"], kA = { class: "library-empty-actions" }, AA = ["href"], xA = ["href", "aria-label"], NA = { class: "library-cover-frame" }, OA = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, RA = ["src", "alt", "onLoad", "onError"], LA = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, PA = ["action", "onSubmit"], IA = ["value"], DA = ["value"], FA = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], MA = ["data-library-star-error"], $A = { class: "library-cover-summary" }, zA = { class: "library-cover-primary" }, UA = ["aria-label"], BA = ["href"], HA = ["onToggle"], jA = ["aria-label"], VA = { class: "library-cover-meta" }, KA = {
  key: 0,
  class: "library-creator"
}, GA = { class: "library-cover-detail-list" }, qA = { class: "library-cover-detail-chip" }, WA = {
  key: 0,
  class: "library-cover-detail-chip"
}, YA = {
  key: 1,
  class: "library-cover-detail-chip"
}, ZA = {
  key: 2,
  class: "library-cover-detail-chip"
}, XA = {
  key: 3,
  class: "library-cover-detail-chip"
}, JA = {
  key: 4,
  class: "library-cover-detail-chip"
}, QA = {
  key: 5,
  class: "library-cover-detail-chip"
}, e2 = {
  key: 6,
  class: "library-cover-detail-chip"
}, t2 = {
  key: 1,
  class: "library-muted library-cover-description"
}, n2 = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, i2 = { key: 0 }, a2 = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, r2 = {
  key: 0,
  class: "library-muted"
}, o2 = { class: "library-cover-actions" }, s2 = ["href"], l2 = ["href"], c2 = ["onClick"], u2 = ["href"], d2 = ["aria-label"], f2 = { class: "library-pagination-range" }, p2 = { key: 0 }, h2 = ["href"], m2 = {
  key: 1,
  class: "library-muted"
}, v2 = ["href"], g2 = {
  key: 3,
  class: "library-muted"
}, b2 = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, y2 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, _2 = ["src", "alt"], w2 = { class: "library-muted library-catalogue-eyebrow" }, C2 = { id: "library-detail-drawer-heading" }, E2 = {
  key: 0,
  class: "library-creator"
}, S2 = {
  key: 1,
  class: "library-muted"
}, T2 = { class: "library-detail-drawer-facts" }, k2 = { key: 0 }, A2 = { key: 1 }, x2 = { key: 2 }, N2 = { class: "library-detail-drawer-actions" }, O2 = ["href"], R2 = ["href"], L2 = ["aria-label"], P2 = ["disabled"], I2 = ["disabled"], D2 = "/apps/library", F2 = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], i = [25, 50, 100, 250, 500], a = Object.freeze([
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs metadata" },
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Scanner conflicts" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "Metadata errors" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Placeholder covers" },
      { key: "noCreator", value: "1", countKey: "no-creator", label: "Missing creator" },
      { key: "noPublication", value: "1", countKey: "no-publication", label: "Missing publication/series" },
      { key: "noDate", value: "1", countKey: "missing-date", label: "Missing date" },
      { key: "titleFromFilename", value: "1", countKey: "title-from-filename", label: "Filename-derived title" },
      { key: "weakMetadata", value: "filename", countKey: "weak-filename-metadata", label: "Weak filename metadata" },
      { key: "noDescription", value: "1", countKey: "no-description", label: "No description" },
      { key: "unsupportedContainer", value: "1", countKey: "unsupported-containers", label: "Unsupported container" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Unreviewed imports" }
    ]), r = Object.freeze(Object.fromEntries(a.map(({ key: y, value: w }) => [y, w])));
    function o(y, w) {
      return Object.prototype.hasOwnProperty.call(r, y) && String(w ?? "").trim() === r[y];
    }
    function s(y) {
      const w = new URLSearchParams(y);
      for (const h of Object.keys(r)) {
        const j = [...new Set([...w.keys()].filter((Ae) => Ae === h || Ae.startsWith(`${h}[`)))], ge = j.reduce((Ae, Ze) => Ae + w.getAll(Ze).length, 0);
        if (ge > 1 || j.some((Ae) => Ae !== h)) {
          for (const Ae of j) w.delete(Ae);
          continue;
        }
        h !== "status" && ge === 1 && !o(h, w.get(h)) && w.delete(h);
      }
      return w;
    }
    function l(y) {
      return Object.keys(r).some((w) => y.getAll(w).length === 1 && o(w, y.get(w)));
    }
    function p(y) {
      return Object.fromEntries(Object.entries(y || {}).filter(([w, h]) => w === "status" || !Object.prototype.hasOwnProperty.call(r, w) || o(w, h)));
    }
    const c = /* @__PURE__ */ Gt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), m = /* @__PURE__ */ Gt((c.items || []).map((y) => ({ ...y }))), b = q(() => m), S = q(() => c.shelves || []), x = q(() => c.formats || []), k = q(() => c.publications || []), N = q(() => c.publicationSummaries || []), O = q(() => c.publicationIssueContext || null), F = q(() => c.publicationYears || []), B = q(() => c.creators || []), z = q(() => c.scanStatuses || []), ce = q(() => c.workflowStatuses || []), de = q(() => c.genres || []), te = q(() => c.classifications || []), ne = q(() => c.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ Gt({
      q: c.activeFilters?.q || "",
      view: c.activeFilters?.view || "compact",
      type: c.activeFilters?.type || "",
      publication: c.activeFilters?.publication || "",
      year: c.activeFilters?.year || "",
      creator: c.activeFilters?.creator || "",
      format: c.activeFilters?.format || "",
      tag: c.activeFilters?.tag || "",
      shelf: c.activeFilters?.shelf || "",
      status: c.activeFilters?.status || "",
      workflowStatus: c.activeFilters?.workflowStatus || "",
      genre: c.activeFilters?.genre || "",
      classification: c.activeFilters?.classification || "",
      scannerConflicts: c.activeFilters?.scannerConflicts || "",
      starred: c.activeFilters?.starred || "",
      needsMetadata: c.activeFilters?.needsMetadata || "",
      coverReview: c.activeFilters?.coverReview || "",
      noCreator: c.activeFilters?.noCreator || "",
      noPublication: c.activeFilters?.noPublication || "",
      noDate: c.activeFilters?.noDate || "",
      titleFromFilename: c.activeFilters?.titleFromFilename || "",
      noDescription: c.activeFilters?.noDescription || "",
      unsupportedContainer: c.activeFilters?.unsupportedContainer || "",
      weakMetadata: c.activeFilters?.weakMetadata || "",
      unreviewedImports: c.activeFilters?.unreviewedImports || "",
      sort: c.activeFilters?.sort || "title"
    });
    for (const y of Object.keys(r))
      y !== "status" && (o(y, I[y]) || (I[y] = ""));
    const se = Object.fromEntries(Object.keys(I).map((y) => [y, y === "sort" ? "title" : y === "view" ? "compact" : ""])), me = window.location.pathname.indexOf(D2), J = me >= 0 ? window.location.pathname.slice(0, me) : "", ie = {
      catalogue: `${J}/apps/library/`,
      review: `${J}/apps/library/?scannerConflicts=1`,
      settings: `${J}/settings/user/library`
    };
    function D(y, w) {
      if (typeof y != "string" || y === "") return w;
      try {
        const h = J ? `${J}/` : "/";
        let j = y;
        for (let ge = 0; ge < 5; ge += 1) {
          if (!j.startsWith("/") || j.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(j)) return w;
          const Ae = new URL(j, window.location.origin);
          if (Ae.origin !== window.location.origin || !Ae.pathname.startsWith(h)) return w;
          const Ze = j.split(/[?#]/, 1)[0];
          for (const kn of Ze.split("/")) {
            let ct = kn;
            for (let va = 0; va < 5; va += 1) {
              const An = decodeURIComponent(ct);
              if (/[\\/\u0000-\u001f\u007f]/.test(An) || An === "." || An === "..") return w;
              if (An === ct) break;
              if (ct = An, va === 4) return w;
            }
          }
          const st = decodeURI(j);
          if (st === j) return y;
          j = st;
        }
        return w;
      } catch {
        return w;
      }
    }
    const M = q(() => D(c.settingsUrl, ie.settings)), W = q(() => D(c.catalogueRootUrl, ie.catalogue)), oe = q(() => D(c.reviewUrl || c.scannerConflictReviewUrl, ie.review)), Q = q(() => Object.entries(r).some(([y, w]) => I[y] === w)), ue = q(() => c.requestToken || ""), fe = q(() => c.metadataExportUrl || ""), ye = q(() => c.metadataSidecarManifestUrl || ""), _e = q(() => c.metadataSidecarBundleUrl || ""), Be = q(() => c.catalogueEndpointUrl || "/apps/library/catalogue"), we = q(() => c.batchTagUrl || "/apps/library/bulk/tags"), Je = q(() => c.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ye = q(() => c.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), lt = q(() => c.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), mt = q(() => c.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ge = q(() => c.scannerConflictReviewUrl || "?scannerConflicts=1"), It = q(() => c.metadataErrorsUrl || "/apps/library/health/metadata-errors"), U = q(() => c.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), v = q(() => c.coverProbeUrl || "/apps/library/health/covers/probe"), E = q(() => c.importHealthSummaryUrl || "/apps/library/health/import-summary"), T = /* @__PURE__ */ Gt({
      summary: c.importHealthSummary || {},
      loaded: !!(c.importHealthSummary && Object.keys(c.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), L = q(() => T.summary || {}), R = q(() => {
      const y = Number(L.value.generatedAt || 0);
      return y > 0 ? new Date(y * 1e3).toLocaleString() : "";
    }), $ = q(() => L.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), G = q(() => L.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), K = q(() => L.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Z = q(() => c.discoveryPage === "publication"), H = q(() => c.discoveryPage === "year"), ve = q(() => c.discoveryPage === "creator"), re = q(() => Z.value || H.value || ve.value), pe = q(() => c.discoveryTitle || I.publication || I.year || I.creator || ""), Ce = q(() => re.value ? pe.value : d("library", "Library")), ke = q(() => ve.value ? d("library", "Creator") : H.value ? d("library", "Publication year") : d("library", "Publication / series")), Y = q(() => Number(c.rootCount || 0)), X = q(() => Number(c.enabledRootCount || 0)), le = q(() => Y.value === 0), Se = q(() => Y.value > 0 && X.value === 0), Ne = q(() => Dt.value.length > 0), He = {
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
      scannerConflicts: "Scanner conflicts",
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, Fe = q(() => {
      if (typeof window > "u") return "";
      const y = new URLSearchParams(window.location.search);
      if (y.get("batchMetadataApplyResult") !== "1") return "";
      const w = y.get("batchMetadataField") || "field", h = y.get("batchMetadataApplied") || "0", j = y.get("batchMetadataUnchanged") || "0", ge = y.get("batchMetadataSkipped") || "0";
      return d("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: w, unchanged: j, skipped: ge });
    }), rt = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? d("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Qe = q(() => c.savedCollections || []), ot = q(() => c.savedCollectionSaveUrl || "/apps/library/collections"), Bt = q(() => c.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), vn = ["compact", "gallery", "shelf"], yt = q(() => vn.includes(I.view) ? I.view : "compact"), Pi = q(() => ({
      "library-cover-gallery--compact": yt.value === "compact",
      "library-cover-gallery--gallery": yt.value === "gallery",
      "library-cover-gallery--shelf": yt.value === "shelf"
    })), Dt = q(() => Object.entries(He).map(([y, w]) => ({ key: y, label: w, value: I[y] || "" })).filter((y) => String(y.value).trim() !== "")), an = q(() => Object.entries(I).filter(([y, w]) => !["q", "sort", "starred"].includes(y) && String(w || "").trim() !== "").map(([y, w]) => ({ key: y, value: w }))), Yt = q(() => Object.entries(p(I)).filter(([y, w]) => String(w || "").trim() !== "").map(([y, w]) => ({ key: y, value: w }))), li = q(() => Yt.value.filter(({ key: y, value: w }) => y !== "q" && !(y === "sort" && w === "title"))), Mn = /* @__PURE__ */ Gt({}), Ht = /* @__PURE__ */ Gt({}), $n = q(() => b.value.filter((y) => y.starred || y.workflowStatus === "reading" || y.lastOpenedAt).slice(0, 5)), Ft = q(() => b.value.find((y) => y.description || y.publication || y.creators) || b.value[0] || null), zn = q(() => !re.value && b.value.length > 0), De = /* @__PURE__ */ Ut(null), rn = q(() => De.value ? b.value.findIndex((y) => y.id === De.value.id) : -1), ci = q(() => rn.value > 0 ? b.value[rn.value - 1] : null), ui = q(() => rn.value >= 0 && rn.value < b.value.length - 1 ? b.value[rn.value + 1] : null), js = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], dt = q(() => {
      const y = o("scannerConflicts", I.scannerConflicts) || o("weakMetadata", I.weakMetadata), w = y ? b.value.find((h) => oa(h).length > 0) : null;
      return {
        enabled: y,
        item: w,
        fields: w ? oa(w) : [],
        reviewNextUrl: Ge.value,
        skipUrl: ne.value.nextUrl || Ge.value
      };
    }), Fa = q(() => a.map((y) => ({
      ...y,
      href: `${W.value}?${encodeURIComponent(y.key)}=${encodeURIComponent(y.value)}`,
      active: String(I[y.key] || "") === y.value
    })));
    function ra(y) {
      return Array.isArray(y) ? JSON.stringify(y) : y == null ? "" : String(y);
    }
    function oa(y) {
      const w = y.fieldValues || {}, h = y.fieldSources || {};
      return js.filter((j) => Object.prototype.hasOwnProperty.call(w, j)).map((j) => {
        const ge = ra(y[j]), Ae = ra(w[j]), Ze = ra(h[j] || y.metadataSource || "scanner"), st = Ze.includes("filename") || Ze.includes("path") ? Ae : "", kn = Ze.includes("sidecar") ? Ae : "";
        return { field: j, currentValue: ge, scannerCandidate: Ae, pathTemplateCandidate: st, sidecarValue: kn, sourceProvenance: Ze, differs: ge !== Ae };
      }).filter((j) => j.differs);
    }
    function Ma(y) {
      De.value = y;
    }
    function Un() {
      De.value = null;
    }
    function sa(y) {
      y && (De.value = y);
    }
    const Bn = /* @__PURE__ */ Ut(null);
    let et = null, Tt = 0, Sn = null;
    const jt = /* @__PURE__ */ Gt({ loading: !1, error: "" });
    function la(y) {
      const w = s(new FormData(y));
      for (const h of Array.from(w.keys()))
        String(w.get(h) || "").trim() === "" && w.delete(h);
      return w.delete("page"), w.get("view") === "compact" && w.delete("view"), w;
    }
    function Vr(y) {
      m.splice(0, m.length, ...(y.items || []).map((w) => ({ ...w })));
      for (const w of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(y, w) && (c[w] = y[w]);
      Object.assign(I, se, y.activeFilters || {});
    }
    async function $a(y = !1) {
      if (!(T.loading || T.refreshing)) {
        y ? T.refreshing = !0 : T.loading = !0, T.error = "";
        try {
          const w = await fetch(`${E.value}${y ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!w.ok)
            throw new Error(`Import health request failed: ${w.status}`);
          T.summary = await w.json(), T.loaded = !0;
        } catch (w) {
          T.error = w?.message || String(w);
        } finally {
          T.loading = !1, T.refreshing = !1;
        }
      }
    }
    async function Vs(y) {
      y && y.currentTarget && y.currentTarget.open !== !0 || T.loaded || T.loading || await $a(!1);
    }
    async function Ks() {
      await $a(!0);
    }
    async function gn(y, w = null) {
      const h = y?.currentTarget?.tagName === "FORM" ? y.currentTarget : y?.currentTarget?.form;
      if (!h && !w?.params) return;
      const j = s(w?.params ?? la(h)), ge = j.toString(), Ae = ge ? `?${ge}` : "", Ze = w?.generation ?? ++Tt, st = l(j), kn = w?.historyMode ?? (st ? "push" : "replace"), ct = w?.historyTraversal === !0;
      if (Ze !== Tt) return;
      w === null && Sn?.abort();
      const va = new AbortController();
      Sn = va, jt.loading = !0, jt.error = "";
      try {
        const An = await fetch(Be.value + Ae, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: va.signal
        });
        if (Ze !== Tt) return;
        if (!An.ok) {
          ct ? Zt(j) : st ? jt.error = d("library", "Could not load this review queue. Try again.") : Zt(j);
          return;
        }
        const Eh = await An.json();
        if (Ze !== Tt) return;
        Vr(Eh), kn !== "none" && history[kn === "push" ? "pushState" : "replaceState"]({}, "", ge ? `?${ge}` : window.location.pathname);
      } catch (An) {
        Ze === Tt && An?.name !== "AbortError" && (ct ? Zt(j) : st ? jt.error = d("library", "Could not load this review queue. Try again.") : Zt(j));
      } finally {
        Ze === Tt && (Sn = null, jt.loading = !1);
      }
    }
    function Kr() {
      Sn?.abort(), gn(null, {
        params: s(window.location.search),
        generation: ++Tt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Zt(y) {
      const w = document.createElement("form");
      w.method = "get", w.action = window.location.pathname, w.hidden = !0;
      for (const [h, j] of y.entries()) {
        const ge = document.createElement("input");
        ge.type = "hidden", ge.name = h, ge.value = j, w.appendChild(ge);
      }
      document.body.appendChild(w), w.submit(), w.remove();
    }
    function za(y, w = null, h = null) {
      if (w === null) {
        gn(y);
        return;
      }
      gn({ currentTarget: y }, { params: w, generation: h });
    }
    function ca(y) {
      const w = y?.currentTarget?.form;
      if (!w) return;
      window.clearTimeout(et);
      const h = ++Tt, j = la(w);
      Sn?.abort(), Sn = null, et = window.setTimeout(() => za(w, j, h), 350);
    }
    function Tn(y) {
      const w = new URLSearchParams();
      for (const [j, ge] of Object.entries(I)) {
        const Ae = String(ge || "").trim();
        Ae !== "" && j !== y && !(j === "sort" && Ae === "title") && !(j === "view" && Ae === "compact") && w.set(j, Ae);
      }
      const h = w.toString();
      return h ? `?${h}` : "?";
    }
    function Gs() {
      return Tn("q");
    }
    const di = q(() => c.smartViewCounts || {}), Ua = q(() => {
      const y = {};
      for (const [w, h] of Object.entries(I)) {
        const j = String(h || "").trim();
        j !== "" && !(w === "sort" && j === "title") && (y[w] = j);
      }
      return y;
    }), qs = q(() => JSON.stringify(Ua.value)), ua = q(() => Object.keys(Ua.value).length > 0), Gr = q(() => [
      { key: "recently-opened", label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { key: "starred", label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { key: "to-read", label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { key: "reading", label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { key: "finished", label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { key: "needs-action", label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { key: "needs-metadata", label: "Needs metadata", description: "Items with missing core fields, extraction errors, or filename-only metadata.", query: "needsMetadata=1", filters: { needsMetadata: "1" } },
      { key: "scanner-conflicts", label: "Scanner conflicts", description: "Rows where current metadata differs from scanner candidates.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
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
    ]), da = q(() => [
      { key: "no-creator", label: "Missing creator", description: "Creator field is empty.", filters: { noCreator: "1" } },
      { key: "no-publication", label: "Missing publication/series", description: "No publication, series, periodical or collection.", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "No publication year/date is indexed.", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Title was inferred from the source path.", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Filename/path-derived metadata", description: "At least one indexed field still depends on filename parsing.", filters: { weakMetadata: "filename" } },
      { key: "placeholder-covers", label: "Placeholder cover", description: "Likely placeholder-cover candidates.", filters: { coverReview: "placeholder" } },
      { key: "scanner-conflicts", label: "Scanner conflict", description: "Current metadata differs from scanner candidates.", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata extraction error", description: "Scanner recorded a metadata extraction error.", filters: { status: "metadata_error" } },
      { key: "no-description", label: "No description", description: "No summary/description text is indexed.", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Container type needs manual inspection or future extractor support.", filters: { unsupportedContainer: "1" } }
    ]);
    function Ii(y) {
      if (!vn.includes(y)) return;
      I.view = y;
      const w = s(window.location.search);
      y === "compact" ? w.delete("view") : w.set("view", y), w.delete("page"), history.replaceState({}, "", w.toString() ? `?${w.toString()}` : window.location.pathname);
    }
    function fi(y) {
      const w = s(window.location.search);
      for (const j of Object.keys(He))
        w.delete(j);
      w.delete("page");
      for (const [j, ge] of Object.entries(y))
        String(ge || "").trim() !== "" && w.set(j, String(ge));
      const h = w.toString();
      return h ? `?${h}` : "?";
    }
    function pi(y) {
      return fi(y || {});
    }
    function Di(y) {
      return Bt.value.replace("__COLLECTION_ID__", encodeURIComponent(String(y || "0")));
    }
    function Xt(y) {
      return String(y || "").toUpperCase();
    }
    function qr(y) {
      return y.nextcloudTags || [];
    }
    function fa(y) {
      return N.value.find((h) => h.publication === y)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(y)}`;
    }
    function Ws(y) {
      return c.publicationYearLandingUrls?.[y] || `/apps/library/years/${encodeURIComponent(y)}`;
    }
    function Wr(y) {
      return c.creatorLandingUrls?.[y] || `/apps/library/creators/${encodeURIComponent(y)}`;
    }
    function pa(y) {
      const w = y?.target?.value || "";
      w && (window.location.href = w);
    }
    function hi(y) {
      return Ht[y.id] || "loading";
    }
    function Yr(y) {
      Ht[y.id] = "loaded";
    }
    function Ys(y) {
      Ht[y.id] = "error";
    }
    function Zr(y, w) {
      Mn[y] = !!w?.currentTarget?.open;
    }
    function Zs(y) {
      const w = String(y?.tagName || "").toLowerCase();
      return y?.isContentEditable || ["input", "select", "textarea", "button"].includes(w);
    }
    function Xs(y) {
      if (y.key !== "/" || y.metaKey || y.ctrlKey || y.altKey || y.shiftKey || Zs(y.target))
        return;
      y.preventDefault();
      const w = Bn.value?.closest?.(".library-workspace-panel--refine");
      w && (w.open = !0), Bn.value?.focus(), Bn.value?.select?.();
    }
    function Xr(y) {
      y.key !== "Escape" || document.activeElement !== Bn.value || I.q === "" || (y.preventDefault(), I.q = "", Bn.value.value = "", window.clearTimeout(et), za({ currentTarget: Bn.value }));
    }
    function ha(y) {
      return !De.value || y.metaKey || y.ctrlKey || y.altKey ? !1 : y.key === "Escape" ? (y.preventDefault(), Un(), !0) : y.key === "ArrowLeft" && ci.value ? (y.preventDefault(), sa(ci.value), !0) : y.key === "ArrowRight" && ui.value ? (y.preventDefault(), sa(ui.value), !0) : !1;
    }
    function ma(y) {
      ha(y) || (Xs(y), Xr(y));
    }
    Oi(() => {
      window.addEventListener("keydown", ma), window.addEventListener("popstate", Kr);
    }), Da(() => {
      window.removeEventListener("keydown", ma), window.removeEventListener("popstate", Kr), window.clearTimeout(et), Tt += 1, Sn?.abort(), Sn = null;
    });
    const ee = /* @__PURE__ */ Gt({}), _ = /* @__PURE__ */ Gt({});
    async function P(y, w) {
      const h = w?.currentTarget?.closest?.("form") || w?.currentTarget;
      if (!h || !y?.starUrl || ee[y.id]) return;
      const j = !!y.starred;
      ee[y.id] = !0, _[y.id] = "", y.starred = !j;
      try {
        (await fetch(y.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (y.starred = j, _[y.id] = d("library", "Could not update star. Try again."));
      } catch {
        y.starred = j, _[y.id] = d("library", "Could not update star. Try again.");
      } finally {
        ee[y.id] = !1;
      }
    }
    return (y, w) => (C(), $e(g(sC), { "app-name": "library" }, {
      default: Le(() => [
        Te(g(Zy), {
          "aria-label": g(d)("library", "Library navigation")
        }, {
          list: Le(() => [
            Te(g(Up), null, {
              default: Le(() => [
                Te(g($d), {
                  active: !Q.value,
                  href: W.value,
                  name: g(d)("library", "Library")
                }, null, 8, ["active", "href", "name"]),
                Te(g($d), {
                  active: Q.value,
                  href: oe.value,
                  name: g(d)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Le(() => [
            u("a", {
              class: "library-navigation-settings-link",
              href: M.value
            }, [
              w[23] || (w[23] = u("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              u("span", null, f(g(d)("library", "Settings")), 1)
            ], 8, lC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Te(g(fy), null, {
          default: Le(() => [
            u("div", cC, [
              Q.value ? (C(), A("section", uC, [
                u("header", dC, [
                  u("p", fC, f(g(d)("library", "Metadata cleanup")), 1),
                  u("h2", pC, f(g(d)("library", "Review")), 1),
                  u("p", null, f(g(d)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                u("nav", {
                  class: "library-review-queues",
                  "aria-label": g(d)("library", "Review queues")
                }, [
                  (C(!0), A(he, null, Me(Fa.value, (h) => (C(), A("a", {
                    key: h.key,
                    class: xe(["library-review-queue-link", { active: h.active }]),
                    href: h.href,
                    "aria-current": h.active ? "page" : void 0
                  }, [
                    u("span", null, f(g(d)("library", h.label)), 1),
                    u("b", null, f(Number(di.value[h.countKey] || 0)), 1)
                  ], 10, mC))), 128))
                ], 8, hC),
                u("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(d)("library", "Filter current review queue"),
                  onSubmit: it(gn, ["prevent"])
                }, [
                  (C(!0), A(he, null, Me(li.value, (h) => (C(), A("input", {
                    key: `review-${h.key}`,
                    type: "hidden",
                    name: h.key,
                    value: h.value
                  }, null, 8, gC))), 128)),
                  u("label", null, [
                    Re(f(g(d)("library", "Search within this queue")), 1),
                    tt(u("input", {
                      "onUpdate:modelValue": w[0] || (w[0] = (h) => I.q = h),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [vo, I.q]
                    ])
                  ]),
                  u("button", bC, f(g(d)("library", "Apply")), 1)
                ], 40, vC),
                u("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": jt.loading ? "true" : "false"
                }, [
                  jt.loading ? (C(), A("span", _C, f(g(d)("library", "Loading review queue…")), 1)) : V("", !0)
                ], 8, yC),
                jt.error ? (C(), A("p", wC, f(jt.error), 1)) : V("", !0),
                dt.value.enabled ? (C(), A("section", CC, [
                  u("div", EC, [
                    u("p", SC, f(g(d)("library", "Metadata review workbench")), 1),
                    u("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(d)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                    }, f(g(d)("library", "Review next conflict")), 9, TC)
                  ]),
                  dt.value.item ? (C(), A("article", kC, [
                    u("header", null, [
                      u("strong", null, f(dt.value.item.title), 1),
                      u("span", AC, f(dt.value.item.cachedPath), 1)
                    ]),
                    u("div", xC, [
                      (C(!0), A(he, null, Me(dt.value.fields, (h) => (C(), A("article", {
                        key: h.field,
                        class: "library-metadata-review-field"
                      }, [
                        u("h4", null, f(h.field), 1),
                        u("dl", null, [
                          u("div", null, [
                            u("dt", null, f(g(d)("library", "Current value")), 1),
                            u("dd", null, f(h.currentValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(g(d)("library", "scanner candidate")), 1),
                            u("dd", null, f(h.scannerCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(g(d)("library", "path-template candidate")), 1),
                            u("dd", null, f(h.pathTemplateCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(g(d)("library", "sidecar value")), 1),
                            u("dd", null, f(h.sidecarValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(g(d)("library", "source provenance")), 1),
                            u("dd", null, f(h.sourceProvenance || "—"), 1)
                          ])
                        ]),
                        u("form", {
                          method: "post",
                          action: dt.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ue.value
                          }, null, 8, OC),
                          u("input", {
                            type: "hidden",
                            name: "field",
                            value: h.field
                          }, null, 8, RC),
                          w[24] || (w[24] = u("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          u("button", LC, f(g(d)("library", "accept scanner candidate")), 1)
                        ], 8, NC)
                      ]))), 128))
                    ]),
                    u("footer", PC, [
                      u("a", {
                        class: "button secondary",
                        href: dt.value.item.detailsUrl
                      }, f(g(d)("library", "Open full details")), 9, IC),
                      u("a", {
                        class: "button secondary",
                        href: dt.value.skipUrl
                      }, f(g(d)("library", "Skip to next conflict")), 9, DC)
                    ])
                  ])) : V("", !0)
                ])) : V("", !0),
                b.value.length === 0 && !jt.loading && !jt.error ? (C(), A("div", FC, [
                  u("h3", null, f(g(d)("library", "This review queue is clear")), 1),
                  u("p", null, f(g(d)("library", "Choose another queue or return to the catalogue.")), 1),
                  u("a", {
                    class: "button primary",
                    href: W.value
                  }, f(g(d)("library", "Back to Library")), 9, MC)
                ])) : (C(), A("div", {
                  key: 3,
                  class: "library-review-results",
                  "aria-label": g(d)("library", "Review results")
                }, [
                  (C(!0), A(he, null, Me(b.value, (h) => (C(), A("article", {
                    key: h.id,
                    class: "library-review-result-card"
                  }, [
                    u("div", null, [
                      u("h3", null, f(h.title), 1),
                      h.creators ? (C(), A("p", zC, f(h.creators), 1)) : V("", !0),
                      h.scanError ? (C(), A("p", UC, f(h.scanError), 1)) : V("", !0)
                    ]),
                    u("p", null, [
                      u("a", {
                        class: "button secondary",
                        href: h.detailsUrl
                      }, f(g(d)("library", "Open full details")), 9, BC),
                      u("a", {
                        class: "button primary",
                        href: h.openUrl
                      }, f(g(d)("library", "Read")), 9, HC)
                    ])
                  ]))), 128))
                ], 8, $C)),
                b.value.length > 0 ? (C(), A("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(d)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (C(), A("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, f(g(d)("library", "Previous")), 9, VC)) : (C(), A("span", KC, f(g(d)("library", "Previous")), 1)),
                  u("span", null, [
                    Re(f(g(d)("library", "Page")) + " " + f(ne.value.page), 1),
                    ne.value.total > 0 ? (C(), A("span", GC, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : V("", !0)
                  ]),
                  ne.value.nextUrl ? (C(), A("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, f(g(d)("library", "Next")), 9, qC)) : (C(), A("span", WC, f(g(d)("library", "Next")), 1))
                ], 8, jC)) : V("", !0)
              ])) : (C(), A("section", YC, [
                u("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(d)("library", "One catalogue workspace")
                }, [
                  u("details", XC, [
                    u("summary", JC, [
                      w[25] || (w[25] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⌕", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: g(d)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
                      }, f(g(d)("library", "Refine results")), 9, QC),
                      u("small", eE, f(g(d)("library", "Filters, facets and saved filter shortcuts")), 1),
                      u("b", tE, f(I.shelf ? g(d)("library", "this shelf") : Dt.value.length > 0 ? g(d)("library", "current results") : g(d)("library", "whole catalogue")), 1)
                    ]),
                    u("form", {
                      method: "get",
                      class: "library-quick-filter-bar",
                      "aria-label": g(d)("library", "Quick catalogue filters"),
                      onSubmit: it(gn, ["prevent"])
                    }, [
                      (C(!0), A(he, null, Me(an.value, (h) => (C(), A("input", {
                        key: h.key,
                        type: "hidden",
                        name: h.key,
                        value: h.value
                      }, null, 8, iE))), 128)),
                      u("div", aE, [
                        u("label", {
                          class: "library-quick-filter-search",
                          title: g(d)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                        }, [
                          u("span", null, [
                            Re(f(g(d)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                            w[26] || (w[26] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
                          ]),
                          tt(u("input", {
                            ref_key: "quickSearchInput",
                            ref: Bn,
                            "onUpdate:modelValue": w[1] || (w[1] = (h) => I.q = h),
                            "data-library-quick-search": "",
                            type: "search",
                            name: "q",
                            placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                            onInput: ca
                          }, null, 544), [
                            [vo, I.q]
                          ])
                        ], 8, rE),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          "aria-label": g(d)("library", "Search catalogue")
                        }, f(g(d)("library", "Search")), 9, oE)
                      ]),
                      u("details", sE, [
                        u("summary", null, f(g(d)("library", "Filter & sort")), 1),
                        u("div", lE, [
                          u("label", null, [
                            Re(f(g(d)("library", "Sort")), 1),
                            tt(u("select", {
                              "onUpdate:modelValue": w[2] || (w[2] = (h) => I.sort = h),
                              name: "sort",
                              onChange: gn
                            }, [
                              u("option", cE, f(g(d)("library", "Title")), 1),
                              u("option", uE, f(g(d)("library", "Recently added")), 1),
                              u("option", dE, f(g(d)("library", "Publication date")), 1),
                              u("option", fE, f(g(d)("library", "Series")), 1),
                              u("option", pE, f(g(d)("library", "Recently opened")), 1),
                              u("option", hE, f(g(d)("library", "Format")), 1)
                            ], 544), [
                              [Jt, I.sort]
                            ])
                          ]),
                          u("label", null, [
                            Re(f(g(d)("library", "Starred")), 1),
                            tt(u("select", {
                              "onUpdate:modelValue": w[3] || (w[3] = (h) => I.starred = h),
                              name: "starred",
                              onChange: gn
                            }, [
                              u("option", mE, f(g(d)("library", "All")), 1),
                              u("option", vE, f(g(d)("library", "Starred")), 1)
                            ], 544), [
                              [Jt, I.starred]
                            ])
                          ]),
                          u("label", null, [
                            Re(f(g(d)("library", "Size")), 1),
                            u("select", {
                              value: ne.value.limit,
                              name: "limit",
                              onChange: gn
                            }, [
                              (C(), A(he, null, Me(i, (h) => u("option", {
                                key: h,
                                value: h
                              }, f(h), 9, bE)), 64))
                            ], 40, gE)
                          ]),
                          u("button", {
                            type: "submit",
                            class: "button secondary",
                            "aria-label": g(d)("library", "Apply catalogue filters")
                          }, f(g(d)("library", "Apply filters")), 9, yE),
                          u("a", {
                            href: "?",
                            class: "button secondary",
                            "aria-label": g(d)("library", "Clear catalogue filters")
                          }, f(g(d)("library", "Clear all")), 9, _E)
                        ])
                      ])
                    ], 40, nE),
                    u("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(d)("library", "Catalogue search and filters"),
                      onSubmit: it(gn, ["prevent"])
                    }, [
                      u("label", null, [
                        Re(f(g(d)("library", "Type")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[4] || (w[4] = (h) => I.type = h),
                          name: "type"
                        }, [
                          u("option", CE, f(g(d)("library", "All types")), 1),
                          (C(), A(he, null, Me(n, (h) => u("option", {
                            key: h,
                            value: h
                          }, f(h), 9, EE)), 64))
                        ], 512), [
                          [Jt, I.type]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Series / periodical")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[5] || (w[5] = (h) => I.publication = h),
                          name: "publication"
                        }, [
                          u("option", SE, f(g(d)("library", "All series and periodicals")), 1),
                          (C(!0), A(he, null, Me(k.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, TE))), 128))
                        ], 512), [
                          [Jt, I.publication]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Publication year")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[6] || (w[6] = (h) => I.year = h),
                          name: "year"
                        }, [
                          u("option", kE, f(g(d)("library", "All years")), 1),
                          (C(!0), A(he, null, Me(F.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, AE))), 128))
                        ], 512), [
                          [Jt, I.year]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Creator")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[7] || (w[7] = (h) => I.creator = h),
                          name: "creator",
                          title: "Exact full-field creator matches only"
                        }, [
                          u("option", xE, f(g(d)("library", "All creators")), 1),
                          (C(!0), A(he, null, Me(B.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, NE))), 128))
                        ], 512), [
                          [Jt, I.creator]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Nextcloud tag")), 1),
                        tt(u("input", {
                          "onUpdate:modelValue": w[8] || (w[8] = (h) => I.tag = h),
                          type: "text",
                          name: "tag",
                          placeholder: "photography"
                        }, null, 512), [
                          [vo, I.tag]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Format")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[9] || (w[9] = (h) => I.format = h),
                          name: "format"
                        }, [
                          u("option", OE, f(g(d)("library", "All formats")), 1),
                          (C(!0), A(he, null, Me(x.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(Xt(h)), 9, RE))), 128))
                        ], 512), [
                          [Jt, I.format]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Shelf")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[10] || (w[10] = (h) => I.shelf = h),
                          name: "shelf"
                        }, [
                          u("option", LE, f(g(d)("library", "All shelves")), 1),
                          (C(!0), A(he, null, Me(S.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, PE))), 128))
                        ], 512), [
                          [Jt, I.shelf]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Scan status")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[11] || (w[11] = (h) => I.status = h),
                          name: "status"
                        }, [
                          u("option", IE, f(g(d)("library", "All scan statuses")), 1),
                          (C(!0), A(he, null, Me(z.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, DE))), 128))
                        ], 512), [
                          [Jt, I.status]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Workflow status")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[12] || (w[12] = (h) => I.workflowStatus = h),
                          name: "workflowStatus"
                        }, [
                          u("option", FE, f(g(d)("library", "All workflow statuses")), 1),
                          (C(!0), A(he, null, Me(ce.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, ME))), 128))
                        ], 512), [
                          [Jt, I.workflowStatus]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Genre")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[13] || (w[13] = (h) => I.genre = h),
                          name: "genre"
                        }, [
                          u("option", $E, f(g(d)("library", "All genres")), 1),
                          (C(!0), A(he, null, Me(de.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, zE))), 128))
                        ], 512), [
                          [Jt, I.genre]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Classification")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[14] || (w[14] = (h) => I.classification = h),
                          name: "classification"
                        }, [
                          u("option", UE, f(g(d)("library", "All classifications")), 1),
                          (C(!0), A(he, null, Me(te.value, (h) => (C(), A("option", {
                            key: h,
                            value: h
                          }, f(h), 9, BE))), 128))
                        ], 512), [
                          [Jt, I.classification]
                        ])
                      ]),
                      u("label", null, [
                        Re(f(g(d)("library", "Scanner conflicts")), 1),
                        tt(u("select", {
                          "onUpdate:modelValue": w[15] || (w[15] = (h) => I.scannerConflicts = h),
                          name: "scannerConflicts"
                        }, [
                          u("option", HE, f(g(d)("library", "All metadata")), 1),
                          u("option", jE, f(g(d)("library", "Needs review")), 1)
                        ], 512), [
                          [Jt, I.scannerConflicts]
                        ])
                      ]),
                      u("button", VE, f(g(d)("library", "Apply filters")), 1),
                      u("a", KE, f(g(d)("library", "Clear")), 1)
                    ], 40, wE)
                  ]),
                  u("details", GE, [
                    u("summary", qE, [
                      w[27] || (w[27] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "↗", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: g(d)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
                      }, f(g(d)("library", "Browse shortcuts")), 9, WE),
                      u("small", YE, f(g(d)("library", "Continue reading, recently added, rediscover and useful views")), 1),
                      u("b", ZE, f(g(d)("library", "whole catalogue")), 1)
                    ]),
                    zn.value ? (C(), A("article", XE, [
                      u("h3", {
                        title: g(d)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
                      }, f(g(d)("library", "Continue reading")), 9, JE),
                      u("div", QE, [
                        $n.value[0] ? (C(), A("a", {
                          key: 0,
                          class: "button primary",
                          href: $n.value[0].openUrl
                        }, f(g(d)("library", "Read now")), 9, eS)) : V("", !0),
                        $n.value[0] ? (C(), A("button", {
                          key: 1,
                          type: "button",
                          class: "button secondary",
                          onClick: w[16] || (w[16] = (h) => Ma($n.value[0]))
                        }, f(g(d)("library", "Details")), 1)) : V("", !0)
                      ])
                    ])) : V("", !0),
                    Ft.value ? (C(), A("article", tS, [
                      u("p", nS, f(g(d)("library", "Rediscover")), 1),
                      u("strong", null, f(Ft.value.title), 1),
                      u("span", iS, f(Ft.value.creators || Ft.value.publication || Ft.value.cachedPath), 1),
                      u("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: w[17] || (w[17] = (h) => Ma(Ft.value))
                      }, f(g(d)("library", "Peek")), 1)
                    ])) : V("", !0),
                    u("nav", {
                      class: "library-useful-view-links",
                      "aria-label": g(d)("library", "Useful views")
                    }, [
                      (C(!0), A(he, null, Me(Gr.value, (h) => (C(), A("a", {
                        key: h.key,
                        class: "library-useful-view-chip",
                        href: fi(h.filters),
                        title: g(d)("library", h.description)
                      }, [
                        u("strong", null, f(g(d)("library", h.label)), 1),
                        u("small", oS, f(Number(di.value[h.key] || 0)), 1)
                      ], 8, rS))), 128))
                    ], 8, aS),
                    u("div", sS, [
                      N.value.length > 0 ? (C(), A("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: g(d)("library", "Jump into recurring publications with one click.")
                      }, [
                        u("span", null, f(g(d)("library", "Series / periodicals")), 1),
                        u("select", { onChange: pa }, [
                          u("option", cS, f(g(d)("library", "Choose series")), 1),
                          (C(!0), A(he, null, Me(N.value, (h) => (C(), A("option", {
                            key: h.publication,
                            value: fa(h.publication)
                          }, f(h.publication) + " · " + f(h.itemCount), 9, uS))), 128))
                        ], 32)
                      ], 8, lS)) : V("", !0),
                      F.value.length > 0 ? (C(), A("label", dS, [
                        u("span", null, f(g(d)("library", "Publication year")), 1),
                        u("select", { onChange: pa }, [
                          u("option", fS, f(g(d)("library", "Choose year")), 1),
                          (C(!0), A(he, null, Me(F.value, (h) => (C(), A("option", {
                            key: h,
                            value: Ws(h)
                          }, f(h), 9, pS))), 128))
                        ], 32)
                      ])) : V("", !0),
                      B.value.length > 0 ? (C(), A("label", hS, [
                        u("span", null, f(g(d)("library", "Creator")), 1),
                        u("select", { onChange: pa }, [
                          u("option", mS, f(g(d)("library", "Choose creator")), 1),
                          (C(!0), A(he, null, Me(B.value, (h) => (C(), A("option", {
                            key: h,
                            value: Wr(h)
                          }, f(h), 9, vS))), 128))
                        ], 32)
                      ])) : V("", !0)
                    ]),
                    u("section", gS, [
                      u("h3", {
                        title: g(d)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, f(g(d)("library", "Custom collections")), 9, bS),
                      u("form", {
                        method: "post",
                        action: ot.value,
                        class: "library-saved-collection-save-form",
                        title: ua.value ? "" : g(d)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, _S),
                        u("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: qs.value
                        }, null, 8, wS),
                        u("label", null, [
                          Re(f(g(d)("library", "Collection name")), 1),
                          u("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: g(d)("library", "e.g. Bremen photo books"),
                            disabled: !ua.value,
                            autocomplete: "off"
                          }, null, 8, CS)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !ua.value,
                          title: g(d)("library", "Save current view")
                        }, f(g(d)("library", "Save")), 9, ES)
                      ], 8, yS),
                      Qe.value.length > 0 ? (C(), A("nav", {
                        key: 0,
                        class: "library-saved-collection-links",
                        "aria-label": g(d)("library", "Saved custom collections")
                      }, [
                        (C(!0), A(he, null, Me(Qe.value, (h) => (C(), A("article", {
                          key: h.id,
                          class: "library-saved-collection-card"
                        }, [
                          u("a", {
                            class: "library-saved-collection-link",
                            href: pi(h.filters)
                          }, [
                            u("strong", null, f(h.name), 1),
                            u("span", null, f(Number(h.count || 0)) + " " + f(g(d)("library", "items")), 1)
                          ], 8, TS),
                          u("form", {
                            method: "post",
                            action: Di(h.id),
                            class: "library-saved-collection-delete-form"
                          }, [
                            u("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: ue.value
                            }, null, 8, AS),
                            u("button", xS, f(g(d)("library", "Delete")), 1)
                          ], 8, kS)
                        ]))), 128))
                      ], 8, SS)) : V("", !0)
                    ])
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(d)("library", "Batch actions for current results")
                  }, [
                    u("summary", OS, [
                      w[28] || (w[28] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: g(d)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
                      }, f(g(d)("library", "Batch actions")), 9, RS),
                      u("small", LS, f(g(d)("library", "Preview and apply changes to current results")), 1),
                      u("b", PS, f(ne.value.total) + " " + f(g(d)("library", "Current filter result")), 1)
                    ]),
                    u("div", IS, [
                      u("form", {
                        method: "post",
                        action: we.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, FS),
                        (C(!0), A(he, null, Me(Yt.value, (h) => (C(), A("input", {
                          key: h.key,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, MS))), 128)),
                        u("label", null, [
                          u("span", null, f(g(d)("library", "Add tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, $S)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(d)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                        }, f(g(d)("library", "Apply")), 9, zS)
                      ], 8, DS),
                      u("form", {
                        method: "post",
                        action: Je.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, BS),
                        (C(!0), A(he, null, Me(Yt.value, (h) => (C(), A("input", {
                          key: `remove-tag-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, HS))), 128)),
                        u("label", null, [
                          u("span", null, f(g(d)("library", "Remove tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, jS)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(d)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                        }, f(g(d)("library", "Remove")), 9, VS)
                      ], 8, US),
                      u("form", {
                        method: "post",
                        action: Ye.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, GS),
                        (C(!0), A(he, null, Me(Yt.value, (h) => (C(), A("input", {
                          key: `reset-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, qS))), 128)),
                        w[29] || (w[29] = u("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                        }, f(g(d)("library", "Reset metadata")), 9, WS)
                      ], 8, KS),
                      u("form", {
                        method: "post",
                        action: lt.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, ZS),
                        (C(!0), A(he, null, Me(Yt.value, (h) => (C(), A("input", {
                          key: `edit-preview-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, XS))), 128)),
                        u("label", null, [
                          u("span", null, f(g(d)("library", "Field")), 1),
                          u("select", JS, [
                            u("option", QS, f(g(d)("library", "Publication type")), 1),
                            u("option", eT, f(g(d)("library", "Subtitle")), 1),
                            u("option", tT, f(g(d)("library", "Creators")), 1),
                            u("option", nT, f(g(d)("library", "Series / periodical")), 1),
                            u("option", iT, f(g(d)("library", "Publication date")), 1),
                            u("option", aT, f(g(d)("library", "Language")), 1),
                            u("option", rT, f(g(d)("library", "Publisher")), 1),
                            u("option", oT, f(g(d)("library", "Genres")), 1),
                            u("option", sT, f(g(d)("library", "Classifications")), 1)
                          ])
                        ]),
                        u("label", null, [
                          u("span", null, f(g(d)("library", "Value")), 1),
                          w[30] || (w[30] = u("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: "magazine, de, photography...",
                            autocomplete: "off"
                          }, null, -1))
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(d)("library", "Preview first, then apply from the review page.")
                        }, f(g(d)("library", "Preview edit")), 9, lT)
                      ], 8, YS),
                      u("form", {
                        method: "post",
                        action: mt.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ue.value
                        }, null, 8, uT),
                        (C(!0), A(he, null, Me(Yt.value, (h) => (C(), A("input", {
                          key: `cover-${h.key}`,
                          type: "hidden",
                          name: h.key,
                          value: h.value
                        }, null, 8, dT))), 128)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                        }, f(g(d)("library", "Fresh covers")), 9, fT)
                      ], 8, cT)
                    ])
                  ], 8, NS),
                  u("details", pT, [
                    u("summary", hT, [
                      w[31] || (w[31] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "!", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: g(d)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
                      }, f(g(d)("library", "Review queue")), 9, mT),
                      u("small", vT, f(g(d)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
                      u("b", gT, f(g(d)("library", "current results")), 1)
                    ]),
                    u("nav", {
                      class: "library-weak-metadata-links",
                      "aria-label": g(d)("library", "Weak metadata catalogue views")
                    }, [
                      (C(!0), A(he, null, Me(da.value, (h) => (C(), A("a", {
                        key: h.key,
                        class: "library-weak-metadata-card",
                        href: fi(h.filters),
                        title: g(d)("library", h.description)
                      }, [
                        u("span", null, [
                          u("strong", null, f(g(d)("library", h.label)), 1)
                        ]),
                        u("b", null, f(Number(di.value[h.key] || 0)), 1)
                      ], 8, yT))), 128))
                    ], 8, bT),
                    u("div", _T, [
                      u("article", {
                        title: g(d)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
                      }, [
                        u("h4", null, f(g(d)("library", "Metadata-error queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: $.value.reviewUrl || "?status=metadata_error"
                        }, f(g(d)("library", "Open metadata-error rows")), 9, CT),
                        u("a", {
                          class: "button secondary",
                          href: U.value
                        }, f(g(d)("library", "Export metadata-error rows")), 9, ET),
                        u("form", {
                          method: "post",
                          action: we.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ue.value
                          }, null, 8, TT),
                          w[32] || (w[32] = u("input", {
                            type: "hidden",
                            name: "status",
                            value: "metadata_error"
                          }, null, -1)),
                          w[33] || (w[33] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-metadata-error"
                          }, null, -1)),
                          u("button", kT, f(g(d)("library", "Tag metadata-error rows")), 1)
                        ], 8, ST)
                      ], 8, wT),
                      u("article", {
                        title: g(d)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
                      }, [
                        u("h4", null, f(g(d)("library", "Scanner-conflict queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: Ge.value
                        }, f(g(d)("library", "Review scanner conflicts")), 9, xT),
                        u("form", {
                          method: "post",
                          action: we.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ue.value
                          }, null, 8, OT),
                          w[34] || (w[34] = u("input", {
                            type: "hidden",
                            name: "scannerConflicts",
                            value: "1"
                          }, null, -1)),
                          w[35] || (w[35] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-scanner-conflict"
                          }, null, -1)),
                          u("button", RT, f(g(d)("library", "Tag scanner-conflict rows")), 1)
                        ], 8, NT)
                      ], 8, AT)
                    ]),
                    dt.value.enabled ? (C(), A("section", LT, [
                      u("div", PT, [
                        u("p", IT, f(g(d)("library", "Metadata review workbench")), 1),
                        u("h3", {
                          id: "library-metadata-review-workbench-heading",
                          title: g(d)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                        }, f(g(d)("library", "Review next conflict")), 9, DT)
                      ]),
                      dt.value.item ? (C(), A("article", FT, [
                        u("header", null, [
                          u("strong", null, f(dt.value.item.title), 1),
                          u("span", MT, f(dt.value.item.cachedPath), 1)
                        ]),
                        u("div", $T, [
                          (C(!0), A(he, null, Me(dt.value.fields, (h) => (C(), A("article", {
                            key: h.field,
                            class: "library-metadata-review-field"
                          }, [
                            u("h4", null, f(h.field), 1),
                            u("dl", null, [
                              u("div", null, [
                                u("dt", null, f(g(d)("library", "Current value")), 1),
                                u("dd", null, f(h.currentValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(g(d)("library", "scanner candidate")), 1),
                                u("dd", null, f(h.scannerCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(g(d)("library", "path-template candidate")), 1),
                                u("dd", null, f(h.pathTemplateCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(g(d)("library", "sidecar value")), 1),
                                u("dd", null, f(h.sidecarValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(g(d)("library", "source provenance")), 1),
                                u("dd", null, f(h.sourceProvenance || "—"), 1)
                              ])
                            ]),
                            u("form", {
                              method: "post",
                              action: dt.value.item.resetFieldUrl,
                              class: "library-metadata-review-accept-form"
                            }, [
                              u("input", {
                                type: "hidden",
                                name: "requesttoken",
                                value: ue.value
                              }, null, 8, UT),
                              u("input", {
                                type: "hidden",
                                name: "field",
                                value: h.field
                              }, null, 8, BT),
                              w[36] || (w[36] = u("input", {
                                type: "hidden",
                                name: "returnTo",
                                value: "catalogue"
                              }, null, -1)),
                              u("button", HT, f(g(d)("library", "accept scanner candidate")), 1)
                            ], 8, zT)
                          ]))), 128))
                        ]),
                        u("footer", jT, [
                          u("a", {
                            class: "button secondary",
                            href: dt.value.item.detailsUrl
                          }, f(g(d)("library", "Open full details")), 9, VT),
                          u("a", {
                            class: "button secondary",
                            href: dt.value.skipUrl
                          }, f(g(d)("library", "Skip to next conflict")), 9, KT)
                        ])
                      ])) : (C(), A("p", GT, f(g(d)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
                      u("a", {
                        class: "button secondary",
                        href: dt.value.reviewNextUrl
                      }, f(g(d)("library", "Review next conflict")), 9, qT)
                    ])) : V("", !0)
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--admin",
                    "data-workspace-panel": "admin",
                    onToggle: Vs
                  }, [
                    u("summary", WT, [
                      w[37] || (w[37] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⚙", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: g(d)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
                      }, f(g(d)("library", "Admin tools")), 9, YT),
                      u("small", ZT, f(g(d)("library", "Roots, scans, exports and repair operations")), 1),
                      u("b", XT, f(g(d)("library", "all enabled roots")), 1)
                    ]),
                    u("div", JT, [
                      u("a", {
                        href: M.value,
                        class: "button secondary",
                        "aria-label": "Open Library settings"
                      }, f(g(d)("library", "Settings")), 9, QT),
                      fe.value ? (C(), A("a", {
                        key: 0,
                        href: fe.value,
                        class: "button secondary",
                        "aria-label": "Export corrected metadata"
                      }, f(g(d)("library", "Export corrected metadata")), 9, ek)) : V("", !0),
                      ye.value ? (C(), A("a", {
                        key: 1,
                        href: ye.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar manifest"
                      }, f(g(d)("library", "Sidecar manifest")), 9, tk)) : V("", !0),
                      _e.value ? (C(), A("a", {
                        key: 2,
                        href: _e.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar ZIP"
                      }, f(g(d)("library", "Sidecar ZIP")), 9, nk)) : V("", !0)
                    ]),
                    u("div", ik, [
                      u("p", ak, f(g(d)("library", "Import health")), 1),
                      u("h3", {
                        title: g(d)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
                      }, f(g(d)("library", "Metadata overview")), 9, rk),
                      T.loading ? (C(), A("p", ok, f(g(d)("library", "Loading cached metadata overview…")), 1)) : T.error ? (C(), A("p", sk, f(T.error), 1)) : T.loaded ? V("", !0) : (C(), A("p", lk, f(g(d)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
                      T.loaded ? (C(), A(he, { key: 3 }, [
                        L.value.message ? (C(), A("p", ck, f(L.value.message), 1)) : L.value.cacheStatus === "missing" ? (C(), A("p", uk, f(g(d)("library", "No cached metadata overview exists yet")), 1)) : V("", !0),
                        R.value ? (C(), A("p", dk, f(g(d)("library", "Last generated")) + ": " + f(R.value), 1)) : V("", !0),
                        u("button", {
                          type: "button",
                          class: "button secondary library-import-health-refresh",
                          disabled: T.refreshing,
                          onClick: Ks
                        }, f(T.refreshing ? g(d)("library", "Refreshing metadata overview…") : g(d)("library", "Refresh metadata overview")), 9, fk),
                        u("div", pk, [
                          u("a", {
                            class: "button secondary",
                            href: $.value.reviewUrl || "?status=metadata_error"
                          }, f(g(d)("library", "Review metadata errors")), 9, hk),
                          u("a", {
                            class: "button secondary",
                            href: It.value
                          }, f(g(d)("library", "Full review")), 9, mk),
                          u("a", {
                            class: "button secondary",
                            href: U.value
                          }, f(g(d)("library", "Export TSV")), 9, vk),
                          u("a", {
                            class: "button secondary",
                            href: v.value
                          }, f(g(d)("library", "Probe covers")), 9, gk)
                        ]),
                        u("div", bk, [
                          u("article", null, [
                            u("h4", null, f(g(d)("library", "Metadata errors")), 1),
                            u("p", yk, f($.value.total || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(g(d)("library", "Archive/container check")), 1),
                            u("p", _k, f(G.value.mismatches || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(g(d)("library", "Cover health")), 1),
                            u("p", wk, f(K.value.note), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(g(d)("library", "Cover support matrix")), 1),
                            u("p", Ck, f(g(d)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                          ]),
                          $.value.examples?.length ? (C(), A("details", Ek, [
                            u("summary", null, f(g(d)("library", "Example files and suggested actions")), 1),
                            u("ul", null, [
                              (C(!0), A(he, null, Me($.value.examples, (h) => (C(), A("li", {
                                key: `${h.fileId}-${h.path}`
                              }, [
                                u("code", null, f(h.path), 1),
                                u("span", null, f(h.scanStatus) + " · " + f(h.scanError) + " · " + f(h.actualContainerType), 1),
                                u("strong", null, f(h.suggestedRepairAction), 1)
                              ]))), 128))
                            ])
                          ])) : V("", !0)
                        ])
                      ], 64)) : V("", !0)
                    ])
                  ], 32)
                ], 8, ZC),
                u("div", Sk, [
                  u("div", null, [
                    re.value ? (C(), A("p", Tk, f(ke.value), 1)) : V("", !0),
                    u("h2", kk, f(Ce.value), 1)
                  ])
                ]),
                rt.value ? (C(), A("p", Ak, f(rt.value), 1)) : V("", !0),
                Fe.value ? (C(), A("p", xk, f(Fe.value), 1)) : V("", !0),
                re.value ? (C(), A("section", Nk, [
                  u("p", Ok, f(ke.value), 1),
                  u("h3", {
                    id: "library-discovery-heading",
                    title: ve.value ? g(d)("library", "Items by this creator, sorted by publication context when available.") : H.value ? g(d)("library", "Items from this publication year, sorted by publication date when available.") : g(d)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, f(pe.value), 9, Rk),
                  u("div", Lk, [
                    u("span", null, f(ne.value.total) + " " + f(g(d)("library", "items")), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (C(), A("span", Pk, f(O.value.earliestYear) + "–" + f(O.value.latestYear), 1)) : V("", !0),
                    O.value?.datedCount ? (C(), A("span", Ik, f(O.value.datedCount) + " " + f(g(d)("library", "dated")), 1)) : V("", !0),
                    O.value?.undatedCount > 0 ? (C(), A("span", Dk, f(O.value.undatedCount) + " " + f(g(d)("library", "undated")), 1)) : V("", !0)
                  ]),
                  Z.value && O.value ? (C(), A("aside", Fk, [
                    u("strong", null, f(g(d)("library", "Publication contents")), 1),
                    u("span", null, f(O.value.itemCount) + " " + f(g(d)("library", "items")), 1),
                    O.value.earliestYear && O.value.latestYear ? (C(), A("span", Mk, f(O.value.earliestYear) + "–" + f(O.value.latestYear), 1)) : V("", !0),
                    u("span", null, f(O.value.datedCount) + " " + f(g(d)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (C(), A("span", $k, f(O.value.undatedCount) + " " + f(g(d)("library", "without dates yet")), 1)) : V("", !0),
                    u("span", null, f(g(d)("library", "read-only grouping")), 1)
                  ])) : V("", !0),
                  Z.value && O.value?.issueGroups?.length ? (C(), A("section", zk, [
                    u("div", null, [
                      u("p", Uk, f(g(d)("library", "Issue order")), 1),
                      u("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(d)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, f(g(d)("library", "Read-only issue/date grouping")), 9, Bk)
                    ]),
                    u("div", Hk, [
                      (C(!0), A(he, null, Me(O.value.issueGroups, (h) => (C(), A("a", {
                        key: `strip-${h.label}`,
                        class: "library-issue-strip-card",
                        href: h.items?.[0]?.detailsUrl || "#"
                      }, [
                        u("span", null, f(h.label), 1),
                        u("strong", null, f(h.items?.[0]?.issueLabel || g(d)("library", "Issue")), 1),
                        u("small", null, f(h.items?.length || 0) + " " + f(g(d)("library", "items")), 1)
                      ], 8, jk))), 128))
                    ]),
                    O.value.gapRanges?.length ? (C(), A("p", Vk, f(g(d)("library", "Gap")) + ": " + f(O.value.gapRanges.join(", ")), 1)) : V("", !0),
                    (C(!0), A(he, null, Me(O.value.issueGroups, (h) => (C(), A("div", {
                      key: h.label,
                      class: "library-publication-issue-group"
                    }, [
                      u("h5", null, f(h.label), 1),
                      u("ol", null, [
                        (C(!0), A(he, null, Me(h.items, (j, ge) => (C(), A("li", {
                          key: j.itemId
                        }, [
                          u("span", Kk, f(j.issueLabel), 1),
                          u("a", {
                            href: j.detailsUrl || "#"
                          }, f(j.title), 9, Gk),
                          u("small", null, [
                            Re(f(j.publicationType), 1),
                            j.publicationDate ? (C(), A(he, { key: 0 }, [
                              Re(" · " + f(j.publicationDate), 1)
                            ], 64)) : V("", !0)
                          ]),
                          u("small", qk, [
                            ge > 0 ? (C(), A(he, { key: 0 }, [
                              Re(f(g(d)("library", "Previous issue")), 1)
                            ], 64)) : V("", !0),
                            ge > 0 && ge < h.items.length - 1 ? (C(), A(he, { key: 1 }, [
                              Re(" · ")
                            ], 64)) : V("", !0),
                            ge < h.items.length - 1 ? (C(), A(he, { key: 2 }, [
                              Re(f(g(d)("library", "Next issue")), 1)
                            ], 64)) : V("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (C(), A("details", Wk, [
                      u("summary", {
                        title: g(d)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, f(g(d)("library", "Unknown issue/date")) + " · " + f(O.value.unknownIssueItems.length), 9, Yk)
                    ])) : V("", !0)
                  ])) : V("", !0),
                  u("p", null, [
                    u("a", {
                      href: W.value,
                      class: "button secondary library-discovery-back-link"
                    }, f(g(d)("library", "Back to full catalogue")), 9, Zk)
                  ])
                ])) : V("", !0),
                u("nav", Xk, [
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "compact",
                    class: xe({ active: yt.value === "compact" }),
                    "aria-pressed": yt.value === "compact" ? "true" : "false",
                    onClick: w[18] || (w[18] = (h) => Ii("compact"))
                  }, f(g(d)("library", "Compact")), 11, Jk),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "gallery",
                    class: xe({ active: yt.value === "gallery" }),
                    "aria-pressed": yt.value === "gallery" ? "true" : "false",
                    onClick: w[19] || (w[19] = (h) => Ii("gallery"))
                  }, f(g(d)("library", "Gallery")), 11, Qk),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "shelf",
                    class: xe({ active: yt.value === "shelf" }),
                    "aria-pressed": yt.value === "shelf" ? "true" : "false",
                    onClick: w[20] || (w[20] = (h) => Ii("shelf"))
                  }, f(g(d)("library", "Shelf")), 11, eA)
                ]),
                u("div", tA, [
                  u("p", nA, [
                    Re(f(g(d)("library", "Showing")) + " " + f(ne.value.from) + "–" + f(ne.value.to) + " " + f(g(d)("library", "of")) + " " + f(ne.value.total) + " " + f(g(d)("library", "catalogue items")), 1),
                    Dt.value.length > 0 ? (C(), A("span", iA, [
                      w[38] || (w[38] = Re(" · ", -1)),
                      u("a", aA, f(g(d)("library", "Clear all filters")), 1)
                    ])) : V("", !0)
                  ]),
                  u("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(d)("library", "Catalogue pagination")
                  }, [
                    u("span", oA, [
                      Re(f(g(d)("library", "Page")) + " " + f(ne.value.page), 1),
                      ne.value.total > 0 ? (C(), A("span", sA, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : V("", !0)
                    ]),
                    ne.value.previousUrl ? (C(), A("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, f(g(d)("library", "Previous")), 9, lA)) : (C(), A("span", cA, f(g(d)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (C(), A("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, f(g(d)("library", "Next")), 9, uA)) : (C(), A("span", dA, f(g(d)("library", "Next")), 1))
                  ], 8, rA)
                ]),
                Dt.value.length > 0 ? (C(), A("nav", {
                  key: 3,
                  class: "library-active-filter-chips",
                  "aria-label": g(d)("library", "Active filters")
                }, [
                  u("span", null, f(g(d)("library", "Active filters")), 1),
                  (C(!0), A(he, null, Me(Dt.value, (h) => (C(), A("a", {
                    key: h.key,
                    href: Tn(h.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(d)("library", "Remove filter")}: ${h.label}`
                  }, [
                    u("strong", null, f(h.label) + ":", 1),
                    Re(" " + f(h.value) + " ", 1),
                    w[39] || (w[39] = u("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, pA))), 128))
                ], 8, fA)) : V("", !0),
                b.value.length === 0 ? (C(), A("div", {
                  key: 4,
                  class: xe(["library-empty-content", { "library-first-run-guidance": le.value || Se.value, "library-filter-empty-state": Ne.value && !le.value && !Se.value }]),
                  role: "status"
                }, [
                  le.value ? (C(), A(he, { key: 0 }, [
                    u("h3", {
                      title: g(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, f(g(d)("library", "Start with one Library root")), 9, hA),
                    u("p", mA, [
                      u("a", {
                        href: M.value,
                        class: "button primary"
                      }, f(g(d)("library", "Add a Library root")), 9, vA),
                      u("span", gA, f(g(d)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Se.value ? (C(), A(he, { key: 1 }, [
                    u("h3", {
                      title: g(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, f(g(d)("library", "No enabled Library roots")), 9, bA),
                    u("p", yA, [
                      u("a", {
                        href: M.value,
                        class: "button primary"
                      }, f(g(d)("library", "Open Library settings")), 9, _A)
                    ])
                  ], 64)) : Ne.value ? (C(), A(he, { key: 2 }, [
                    u("h3", {
                      title: g(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, f(g(d)("library", "No matches for the current filters")), 9, wA),
                    u("p", CA, [
                      u("a", {
                        href: Gs(),
                        class: "button secondary"
                      }, f(g(d)("library", "Clear search")), 9, EA),
                      u("a", SA, f(g(d)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (C(), A(he, { key: 3 }, [
                    u("h3", {
                      title: g(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, f(g(d)("library", "No catalogue items yet")), 9, TA),
                    u("p", kA, [
                      u("a", {
                        href: M.value,
                        class: "button primary"
                      }, f(g(d)("library", "Run a scan from settings")), 9, AA)
                    ])
                  ], 64))
                ], 2)) : (C(), A("div", {
                  key: 5,
                  class: xe(["library-cover-gallery", Pi.value])
                }, [
                  (C(!0), A(he, null, Me(b.value, (h) => (C(), A("article", {
                    key: h.id,
                    class: xe(["library-cover-card", { "library-cover-card--open": Mn[h.id], "library-cover-card--cover-loaded": hi(h) === "loaded", "library-cover-card--cover-error": hi(h) === "error" }])
                  }, [
                    u("a", {
                      class: "library-cover-link",
                      href: h.openUrl,
                      "aria-label": `Read ${h.title}`
                    }, [
                      u("span", NA, [
                        hi(h) === "loading" ? (C(), A("span", OA)) : V("", !0),
                        u("img", {
                          class: xe(["library-cover-image", { "library-cover-image--loaded": hi(h) === "loaded" }]),
                          src: h.coverUrl,
                          alt: `Cover for ${h.title}`,
                          loading: "lazy",
                          onLoad: (j) => Yr(h),
                          onError: (j) => Ys(h)
                        }, null, 42, RA),
                        hi(h) === "error" ? (C(), A("span", LA, f(g(d)("library", "Cover unavailable")), 1)) : V("", !0)
                      ])
                    ], 8, xA),
                    u("form", {
                      method: "post",
                      action: h.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: it((j) => P(h, j), ["prevent"])
                    }, [
                      u("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ue.value
                      }, null, 8, IA),
                      w[40] || (w[40] = u("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      u("input", {
                        type: "hidden",
                        name: "starred",
                        value: h.starred ? "0" : "1"
                      }, null, 8, DA),
                      u("button", {
                        type: "submit",
                        class: xe(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                        "aria-pressed": h.starred ? "true" : "false",
                        title: h.starred ? g(d)("library", "Unstar this publication") : g(d)("library", "Star this publication"),
                        "aria-label": h.starred ? g(d)("library", "Unstar this publication") : g(d)("library", "Star this publication"),
                        "aria-busy": ee[h.id] ? "true" : void 0,
                        disabled: ee[h.id],
                        onClick: it((j) => P(h, j), ["prevent"])
                      }, f(h.starred ? "★" : "☆"), 11, FA),
                      _[h.id] ? (C(), A("span", {
                        key: 0,
                        "data-library-star-error": h.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, f(_[h.id]), 9, MA)) : V("", !0)
                    ], 40, PA),
                    u("div", $A, [
                      u("div", zA, [
                        u("h3", null, [
                          h.starred ? (C(), A("span", {
                            key: 0,
                            class: "library-star-marker",
                            "aria-label": g(d)("library", "Starred")
                          }, "★", 8, UA)) : V("", !0),
                          Re(f(h.title), 1)
                        ]),
                        u("a", {
                          class: "library-cover-read",
                          href: h.openUrl
                        }, f(g(d)("library", "Read")), 9, BA)
                      ]),
                      u("details", {
                        class: "library-cover-details",
                        onToggle: (j) => Zr(h.id, j)
                      }, [
                        u("summary", {
                          class: "library-cover-details-summary",
                          "aria-label": `${g(d)("library", "Show details and actions")}: ${h.title}`
                        }, f(g(d)("library", "Details")), 9, jA),
                        u("div", VA, [
                          h.creators ? (C(), A("p", KA, f(h.creators), 1)) : V("", !0),
                          u("dl", GA, [
                            u("div", qA, [
                              u("dt", null, f(g(d)("library", "Type")), 1),
                              u("dd", null, f(h.publicationType), 1)
                            ]),
                            h.publication ? (C(), A("div", WA, [
                              u("dt", null, f(g(d)("library", "Series")), 1),
                              u("dd", null, f(h.publication), 1)
                            ])) : V("", !0),
                            h.publicationDate ? (C(), A("div", YA, [
                              u("dt", null, f(g(d)("library", "Date")), 1),
                              u("dd", null, f(h.publicationDate), 1)
                            ])) : V("", !0),
                            h.workflowStatus ? (C(), A("div", ZA, [
                              u("dt", null, f(g(d)("library", "Status")), 1),
                              u("dd", null, f(h.workflowStatus), 1)
                            ])) : V("", !0),
                            h.hasScannerConflict ? (C(), A("div", XA, [
                              u("dt", null, f(g(d)("library", "Review")), 1),
                              u("dd", null, f(h.scannerConflictCount) + " fields", 1)
                            ])) : V("", !0),
                            h.lastOpenedAt ? (C(), A("div", JA, [
                              u("dt", null, f(g(d)("library", "Last opened")), 1),
                              u("dd", null, f(h.lastOpenedAt), 1)
                            ])) : V("", !0),
                            h.extension ? (C(), A("div", QA, [
                              u("dt", null, f(g(d)("library", "Format")) + ":", 1),
                              u("dd", null, f(Xt(h.extension)), 1)
                            ])) : V("", !0),
                            h.shelf ? (C(), A("div", e2, [
                              u("dt", null, f(g(d)("library", "Shelf")), 1),
                              u("dd", null, f(h.shelf), 1)
                            ])) : V("", !0)
                          ]),
                          h.description ? (C(), A("p", t2, f(h.description), 1)) : V("", !0),
                          h.scanStatus !== "indexed" || h.scanError ? (C(), A("p", n2, [
                            Re(" scanStatus: " + f(h.scanStatus || "unknown"), 1),
                            h.scanError ? (C(), A("span", i2, " · scanError: " + f(h.scanError), 1)) : V("", !0)
                          ])) : V("", !0),
                          u("div", a2, [
                            qr(h).length === 0 ? (C(), A("span", r2, "No Nextcloud tags")) : (C(!0), A(he, { key: 1 }, Me(qr(h), (j) => (C(), A("span", {
                              key: j.id,
                              class: "library-tag"
                            }, f(j.name), 1))), 128))
                          ]),
                          u("p", o2, [
                            u("a", {
                              href: h.filesUrl
                            }, f(g(d)("library", "Show in Files")), 9, s2),
                            w[41] || (w[41] = Re(" · ", -1)),
                            u("a", {
                              href: h.downloadUrl
                            }, f(g(d)("library", "Download source")), 9, l2),
                            w[42] || (w[42] = Re(" · ", -1)),
                            u("button", {
                              type: "button",
                              class: "library-link-button library-cover-details-drawer-button",
                              onClick: (j) => Ma(h)
                            }, f(g(d)("library", "Details drawer")), 9, c2),
                            w[43] || (w[43] = Re(" · ", -1)),
                            u("a", {
                              href: h.detailsUrl
                            }, f(g(d)("library", "Details")), 9, u2)
                          ])
                        ])
                      ], 40, HA)
                    ])
                  ], 2))), 128))
                ], 2)),
                b.value.length > 0 ? (C(), A("nav", {
                  key: 6,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(d)("library", "Catalogue pagination")
                }, [
                  u("span", f2, [
                    Re(f(g(d)("library", "Page")) + " " + f(ne.value.page), 1),
                    ne.value.total > 0 ? (C(), A("span", p2, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : V("", !0)
                  ]),
                  ne.value.previousUrl ? (C(), A("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, f(g(d)("library", "Previous")), 9, h2)) : (C(), A("span", m2, f(g(d)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (C(), A("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, f(g(d)("library", "Next")), 9, v2)) : (C(), A("span", g2, f(g(d)("library", "Next")), 1))
                ], 8, d2)) : V("", !0),
                De.value ? (C(), A("div", {
                  key: 7,
                  class: "library-detail-drawer-backdrop",
                  onClick: Un,
                  "aria-hidden": "true"
                })) : V("", !0),
                De.value ? (C(), A("aside", b2, [
                  u("button", {
                    type: "button",
                    class: "library-detail-drawer-close",
                    "aria-label": "Close details panel",
                    onClick: Un
                  }, "×"),
                  u("p", y2, f(g(d)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
                  u("img", {
                    class: "library-detail-drawer-cover",
                    src: De.value.coverUrl,
                    alt: `Cover for ${De.value.title}`,
                    loading: "lazy"
                  }, null, 8, _2),
                  u("p", w2, f(De.value.publicationType || g(d)("library", "Publication")), 1),
                  u("h3", C2, f(De.value.title), 1),
                  De.value.creators ? (C(), A("p", E2, f(De.value.creators), 1)) : V("", !0),
                  De.value.description ? (C(), A("p", S2, f(De.value.description), 1)) : V("", !0),
                  u("dl", T2, [
                    De.value.publication ? (C(), A("div", k2, [
                      u("dt", null, f(g(d)("library", "Series")), 1),
                      u("dd", null, f(De.value.publication), 1)
                    ])) : V("", !0),
                    De.value.publicationDate ? (C(), A("div", A2, [
                      u("dt", null, f(g(d)("library", "Date")), 1),
                      u("dd", null, f(De.value.publicationDate), 1)
                    ])) : V("", !0),
                    De.value.shelf ? (C(), A("div", x2, [
                      u("dt", null, f(g(d)("library", "Shelf")), 1),
                      u("dd", null, f(De.value.shelf), 1)
                    ])) : V("", !0)
                  ]),
                  u("p", N2, [
                    u("a", {
                      class: "button primary",
                      href: De.value.openUrl
                    }, f(g(d)("library", "Read")), 9, O2),
                    u("a", {
                      class: "button secondary",
                      href: De.value.detailsUrl
                    }, f(g(d)("library", "View full details")), 9, R2)
                  ]),
                  u("nav", {
                    class: "library-detail-drawer-stepper",
                    "aria-label": g(d)("library", "Browse neighbouring items")
                  }, [
                    u("button", {
                      type: "button",
                      class: "button secondary",
                      disabled: !ci.value,
                      onClick: w[21] || (w[21] = (h) => sa(ci.value))
                    }, f(g(d)("library", "Previous issue")), 9, P2),
                    u("button", {
                      type: "button",
                      class: "button secondary",
                      disabled: !ui.value,
                      onClick: w[22] || (w[22] = (h) => sa(ui.value))
                    }, f(g(d)("library", "Next issue")), 9, I2)
                  ], 8, L2)
                ])) : V("", !0)
              ]))
            ])
          ]),
          _: 1
        }),
        Te(g(eC), {
          open: !1,
          "no-toggle": "",
          name: g(d)("library", "Details")
        }, null, 8, ["name"])
      ]),
      _: 1
    }));
  }
}, Vd = Ic("library", "catalogue", {}), yo = document.querySelector("#library-vue-root"), Kd = {
  ...Vd,
  requestToken: yo?.dataset.requestToken || Vd.requestToken || ""
};
function be(e) {
  return String(e ?? "");
}
function Ch(e) {
  return be(e).toUpperCase();
}
function M2(e, t, n, i = be) {
  for (const a of t) {
    const r = document.createElement("option");
    r.value = be(a), r.textContent = i(a), be(a) === be(n) && (r.selected = !0), e.appendChild(r);
  }
}
function Gd(e, t, n, i, a = "") {
  const r = document.createElement("label");
  r.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = be(i), o.placeholder = a, r.appendChild(o), e.appendChild(r);
}
function wa(e, t, n, i, a, r, o = be) {
  const s = document.createElement("label");
  s.textContent = t;
  const l = document.createElement("select");
  l.name = n;
  const p = document.createElement("option");
  p.value = "", p.textContent = a, l.appendChild(p), M2(l, r, i, o), s.appendChild(l), e.appendChild(s);
}
function Ca(e) {
  const t = be(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function $2(e, t = {}) {
  return be(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(be(e || t?.publication || ""))}`);
}
function z2(e) {
  return be(e.discoveryPage) === "publication";
}
function U2(e, t = {}) {
  return be(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(be(e))}`);
}
function Fl(e) {
  return be(e.discoveryPage) === "year";
}
function B2(e, t = {}) {
  return be(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(be(e))}`);
}
function Ml(e) {
  return be(e.discoveryPage) === "creator";
}
function H2(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, i]) => n !== "sort" && be(i).trim() !== "");
}
function j2() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Xa(e, t, n, i) {
  const a = document.createElement("a");
  return a.href = t, a.className = n, a.textContent = i, e.appendChild(a), a;
}
function V2(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function K2(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-filter-bar", i.setAttribute("aria-label", d("library", "Catalogue search and filters")), Gd(i, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), wa(i, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Gd(i, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), wa(i, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Ch), wa(i, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), wa(i, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), wa(i, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), wa(i, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", d("library", "Apply catalogue filters")), a.textContent = d("library", "Apply filters");
  const r = document.createElement("a");
  return r.href = "?", r.className = "button secondary", r.setAttribute("aria-label", d("library", "Clear catalogue filters")), r.textContent = d("library", "Clear"), i.append(a, r), i;
}
function G2() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", n = e.get("batchMetadataApplied") || "0", i = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", r = document.createElement("p");
  return r.className = "library-notice library-batch-metadata-apply-result", r.textContent = d("library", `Batch metadata apply updated ${n} ${t} values; ${i} already matched, ${a} skipped.`), r;
}
function q2(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-quick-filter-bar", i.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let a = null;
  const r = () => {
    window.clearTimeout(a), a = window.setTimeout(() => i.requestSubmit(), 350);
  };
  for (const [m, b] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(m) || be(b).trim() === "") continue;
    const S = document.createElement("input");
    S.type = "hidden", S.name = m, S.value = be(b), i.appendChild(S);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const s = document.createElement("input");
  s.type = "search", s.name = "q", s.value = be(n.q), s.placeholder = "Camera, Eco, Rolleiflex...", s.addEventListener("input", r), o.appendChild(s), i.appendChild(o);
  const l = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [m, b, S, x] of l) {
    const k = document.createElement("label");
    k.textContent = m;
    const N = document.createElement("select");
    N.name = b;
    for (const [O, F] of x) {
      const B = document.createElement("option");
      B.value = be(O), B.textContent = be(F), be(O) === be(S) && (B.selected = !0), N.appendChild(B);
    }
    N.addEventListener("change", () => i.requestSubmit()), k.appendChild(N), i.appendChild(k);
  }
  const p = document.createElement("button");
  p.type = "submit", p.className = "button primary", p.setAttribute("aria-label", d("library", "Apply catalogue filters")), p.textContent = d("library", "Apply filters");
  const c = document.createElement("a");
  return c.href = "?", c.className = "button secondary", c.setAttribute("aria-label", d("library", "Clear catalogue filters")), c.textContent = d("library", "Clear all"), i.append(p, c), i;
}
function W2(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], i = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, a = be(e.settingsUrl || ""), r = be(e.metadataExportUrl || ""), o = be(e.batchTagUrl || "/apps/library/bulk/tags"), s = be(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), l = be(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), p = be(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), c = be(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), m = document.createElement("div");
  m.className = "library-vue-catalogue library-vue-fallback", m.dataset.vueFallback = "true";
  const b = document.createElement("section");
  b.className = "library-panel", b.setAttribute("aria-labelledby", "library-catalogue-heading");
  const S = document.createElement("div");
  S.className = "library-catalogue-header";
  const x = document.createElement("div"), k = document.createElement("h2");
  k.id = "library-catalogue-heading", k.textContent = d("library", "Library");
  const N = document.createElement("p");
  N.className = "library-muted", N.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), x.append(k, N);
  const O = document.createElement("nav");
  if (O.className = "library-catalogue-toolbar", O.setAttribute("aria-label", d("library", "Library actions")), a) {
    const Y = document.createElement("a");
    Y.href = a, Y.className = "button secondary", Y.setAttribute("aria-label", "Open Library settings"), Y.textContent = d("library", "Settings"), O.appendChild(Y);
  }
  if (r) {
    const Y = document.createElement("a");
    Y.href = r, Y.className = "button secondary", Y.setAttribute("aria-label", "Export corrected metadata"), Y.textContent = d("library", "Export corrected metadata"), O.appendChild(Y);
  }
  if (e.metadataSidecarManifestUrl) {
    const Y = document.createElement("a");
    Y.href = e.metadataSidecarManifestUrl, Y.className = "button secondary", Y.setAttribute("aria-label", "Export sidecar manifest"), Y.textContent = d("library", "Sidecar manifest"), O.appendChild(Y);
  }
  if (e.metadataSidecarBundleUrl) {
    const Y = document.createElement("a");
    Y.href = e.metadataSidecarBundleUrl, Y.className = "button secondary", Y.setAttribute("aria-label", "Export sidecar ZIP"), Y.textContent = d("library", "Sidecar ZIP"), O.appendChild(Y);
  }
  S.append(x, O), b.appendChild(S);
  const F = G2();
  F && b.appendChild(F), b.appendChild(q2(e, i));
  const B = document.createElement("details");
  B.className = "library-filter-panel";
  const z = document.createElement("summary");
  if (z.className = "library-filter-panel-summary", z.textContent = d("library", "Show catalogue filters"), B.append(z, K2(e, i)), b.appendChild(B), z2(e) || Fl(e) || Ml(e)) {
    const Y = document.createElement("section");
    Y.className = "library-discovery-header", Y.setAttribute("aria-labelledby", "library-discovery-heading");
    const X = document.createElement("p");
    X.className = "library-muted", X.textContent = Ml(e) ? d("library", "Creator") : Fl(e) ? d("library", "Publication year") : d("library", "Publication / series");
    const le = document.createElement("h3");
    le.id = "library-discovery-heading", le.textContent = be(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Se = document.createElement("p");
    Se.className = "library-muted", Se.textContent = `${i.total ?? n.length} ${Ml(e) ? d("library", "items by this creator. Sorted by publication context when available.") : Fl(e) ? d("library", "items from this publication year. Sorted by publication date when available.") : d("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const Ne = document.createElement("a");
    Ne.href = "/apps/library/", Ne.className = "button secondary", Ne.textContent = d("library", "Back to full catalogue"), Y.append(X, le, Se, Ne), b.appendChild(Y);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${i.from ?? 0}–${i.to ?? n.length} of ${i.total ?? n.length} catalogue items`;
  const de = document.createElement("a");
  de.href = "?", de.textContent = ` ${d("library", "Clear all filters")}`, ce.appendChild(de), b.appendChild(ce);
  const te = document.createElement("details");
  te.className = "library-batch-actions";
  const ne = document.createElement("summary");
  ne.textContent = `${d("library", "Batch actions for current results")} (${i.total ?? n.length} ${d("library", "Current filter result")})`;
  const I = document.createElement("form");
  I.method = "post", I.action = o, I.className = "library-batch-tag-form";
  const se = Ca(e);
  se && I.appendChild(se);
  for (const [Y, X] of Object.entries(e.activeFilters || {})) {
    if (be(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Y, le.value = be(X), I.appendChild(le);
  }
  const me = document.createElement("label");
  me.textContent = d("library", "Apply Nextcloud tag to current results");
  const J = document.createElement("input");
  J.type = "text", J.name = "nextcloudTagName", J.placeholder = "batch-review", me.appendChild(J);
  const ie = document.createElement("button");
  ie.type = "submit", ie.className = "button secondary", ie.textContent = d("library", "Apply Nextcloud tag to current results");
  const D = document.createElement("p");
  D.className = "library-muted", D.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), I.append(me, ie, D);
  const M = document.createElement("form");
  M.method = "post", M.action = s, M.className = "library-batch-tag-remove-form";
  const W = Ca(e);
  W && M.appendChild(W);
  for (const [Y, X] of Object.entries(e.activeFilters || {})) {
    if (be(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Y, le.value = be(X), M.appendChild(le);
  }
  const oe = document.createElement("label");
  oe.textContent = d("library", "Nextcloud tag");
  const Q = document.createElement("input");
  Q.type = "text", Q.name = "nextcloudTagName", Q.setAttribute("list", "library-nextcloud-tag-suggestions"), Q.placeholder = d("library", "e.g. Review"), Q.autocomplete = "off", oe.appendChild(Q);
  const ue = document.createElement("button");
  ue.type = "submit", ue.className = "button secondary", ue.textContent = d("library", "Remove tag from current results");
  const fe = document.createElement("p");
  fe.className = "library-muted", fe.textContent = d("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), M.append(oe, ue, fe);
  const ye = document.createElement("form");
  ye.method = "post", ye.action = l, ye.className = "library-batch-metadata-reset-form";
  const _e = Ca(e);
  _e && ye.appendChild(_e);
  for (const [Y, X] of Object.entries(e.activeFilters || {})) {
    if (be(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Y, le.value = be(X), ye.appendChild(le);
  }
  const Be = document.createElement("input");
  Be.type = "hidden", Be.name = "scannerConflicts", Be.value = "1";
  const we = document.createElement("button");
  we.type = "submit", we.className = "button secondary", we.textContent = d("library", "Reset filtered metadata");
  const Je = document.createElement("p");
  Je.className = "library-muted", Je.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), ye.append(Be, we, Je);
  const Ye = document.createElement("form");
  Ye.method = "post", Ye.action = p, Ye.className = "library-batch-metadata-edit-preview-form", Ye.target = "_blank";
  const lt = Ca(e);
  lt && Ye.appendChild(lt);
  for (const [Y, X] of Object.entries(e.activeFilters || {})) {
    if (be(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Y, le.value = be(X), Ye.appendChild(le);
  }
  const mt = document.createElement("label");
  mt.textContent = d("library", "Metadata field");
  const Ge = document.createElement("select");
  Ge.name = "bulkEditField";
  for (const [Y, X] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const le = document.createElement("option");
    le.value = Y, le.textContent = d("library", X), Ge.appendChild(le);
  }
  mt.appendChild(Ge);
  const It = document.createElement("label");
  It.textContent = d("library", "Preview value");
  const U = document.createElement("input");
  U.type = "text", U.name = "bulkEditValue", U.placeholder = "magazine, de, photography...", U.autocomplete = "off", It.appendChild(U);
  const v = document.createElement("button");
  v.type = "submit", v.className = "button secondary", v.textContent = d("library", "Preview & apply metadata edit");
  const E = document.createElement("p");
  E.className = "library-muted", E.textContent = d("library", "Preview first, then apply from the review page."), Ye.append(mt, It, v, E);
  const T = document.createElement("form");
  T.method = "post", T.action = c, T.className = "library-batch-cover-refresh-form";
  const L = Ca(e);
  L && T.appendChild(L);
  for (const [Y, X] of Object.entries(e.activeFilters || {})) {
    if (be(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Y, le.value = be(X), T.appendChild(le);
  }
  const R = document.createElement("button");
  R.type = "submit", R.className = "button secondary", R.textContent = d("library", "Request fresh cover previews");
  const $ = document.createElement("p");
  $.className = "library-muted", $.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), T.append(R, $), te.append(ne, I, M, ye, Ye, T), b.appendChild(te);
  const G = document.createElement("nav");
  G.className = "library-pagination", G.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const K = document.createElement("span");
  K.className = "library-pagination-range", K.textContent = `Page ${i.page ?? 1} · ${i.from ?? 0}–${i.to ?? n.length}`, G.appendChild(K), b.appendChild(G);
  const Z = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], H = document.createElement("details");
  H.className = Z.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const ve = document.createElement("summary");
  ve.className = "library-periodical-groups-summary", ve.textContent = d("library", "Show top series and periodicals"), H.appendChild(ve);
  const re = document.createElement("h3");
  re.textContent = Z.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const pe = document.createElement("p");
  if (pe.className = "library-muted", pe.textContent = Z.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), H.append(re, pe), Z.length > 0) {
    const Y = document.createElement("ul");
    for (const X of Z) {
      const le = document.createElement("li"), Se = document.createElement("a");
      Se.href = $2(X.publication, X), Se.textContent = be(X.publication);
      const Ne = document.createElement("span");
      Ne.className = "library-muted", Ne.textContent = `${X.itemCount} items`, le.append(Se, Ne), Y.appendChild(le);
    }
    H.appendChild(Y);
  }
  b.appendChild(H);
  const Ce = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Ce.length > 0) {
    const Y = document.createElement("details");
    Y.className = "library-year-groups";
    const X = document.createElement("summary");
    X.className = "library-periodical-groups-summary", X.textContent = d("library", "Show publication years");
    const le = document.createElement("h3");
    le.textContent = d("library", "Top publication years");
    const Se = document.createElement("p");
    Se.className = "library-muted", Se.textContent = d("library", "Jump into dated books, magazines, journals and comics by year.");
    const Ne = document.createElement("ul");
    for (const He of Ce) {
      const Fe = document.createElement("li"), rt = document.createElement("a");
      rt.href = U2(He, e), rt.textContent = be(He), Fe.appendChild(rt), Ne.appendChild(Fe);
    }
    Y.append(X, le, Se, Ne), b.appendChild(Y);
  }
  const ke = Array.isArray(e.creators) ? e.creators : [];
  if (ke.length > 0) {
    const Y = document.createElement("details");
    Y.className = "library-creator-groups";
    const X = document.createElement("summary");
    X.className = "library-periodical-groups-summary", X.textContent = d("library", "Show creators");
    const le = document.createElement("h3");
    le.textContent = d("library", "Top creators");
    const Se = document.createElement("p");
    Se.className = "library-muted", Se.textContent = d("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const Ne = document.createElement("ul");
    for (const He of ke) {
      const Fe = document.createElement("li"), rt = document.createElement("a");
      rt.href = B2(He, e), rt.textContent = be(He), Fe.appendChild(rt), Ne.appendChild(Fe);
    }
    Y.append(X, le, Se, Ne), b.appendChild(Y);
  }
  if (n.length === 0) {
    const Y = document.createElement("div"), X = Number(e.rootCount || 0), le = Number(e.enabledRootCount || 0), Se = H2(e);
    Y.className = "library-empty-content", (X === 0 || le === 0) && Y.classList.add("library-first-run-guidance"), Se && X > 0 && le > 0 && Y.classList.add("library-filter-empty-state"), Y.setAttribute("role", "status");
    const Ne = document.createElement("h3"), He = document.createElement("p");
    He.className = "library-muted";
    const Fe = document.createElement("p");
    Fe.className = "library-empty-actions", X === 0 ? (Ne.textContent = d("library", "Start with one Library root"), He.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Xa(Fe, a, "button primary", d("library", "Add a Library root")), V2(Fe, d("library", "Run a scan after saving a root"))) : le === 0 ? (Ne.textContent = d("library", "No enabled Library roots"), He.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Xa(Fe, a, "button primary", d("library", "Open Library settings"))) : Se ? (Ne.textContent = d("library", "No matches for the current filters"), He.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Xa(Fe, j2(), "button secondary", d("library", "Clear search")), Xa(Fe, "?", "button primary", d("library", "Clear all filters"))) : (Ne.textContent = d("library", "No catalogue items yet"), He.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Xa(Fe, a, "button primary", d("library", "Run a scan from settings"))), Y.append(Ne, He, Fe), b.appendChild(Y);
  } else {
    const Y = document.createElement("div");
    Y.className = "library-cover-gallery";
    for (const X of n) {
      const le = document.createElement("article");
      le.className = "library-cover-card";
      const Se = document.createElement("a");
      Se.className = "library-cover-link", Se.href = be(X.openUrl || "#"), Se.setAttribute("aria-label", `Read ${be(X.title || "publication")}`);
      const Ne = document.createElement("img");
      Ne.className = "library-cover-image", Ne.src = be(X.coverUrl || ""), Ne.alt = `Cover for ${be(X.title || "publication")}`, Ne.loading = "lazy", Se.appendChild(Ne);
      const He = Ca(e), Fe = document.createElement("form");
      Fe.method = "post", Fe.action = be(X.starUrl || ""), Fe.className = "library-cover-star-form", He && Fe.appendChild(He);
      const rt = document.createElement("input");
      rt.type = "hidden", rt.name = "returnTo", rt.value = "catalogue";
      const Qe = document.createElement("input");
      Qe.type = "hidden", Qe.name = "starred", Qe.value = X.starred ? "0" : "1";
      const ot = document.createElement("button");
      ot.type = "submit", ot.className = X.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ot.setAttribute("aria-pressed", X.starred ? "true" : "false"), ot.setAttribute("aria-label", X.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), ot.title = X.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), ot.textContent = X.starred ? "★" : "☆", Fe.append(rt, Qe, ot);
      const Bt = document.createElement("div");
      Bt.className = "library-cover-summary";
      const vn = document.createElement("h3");
      if (vn.textContent = be(X.title || "Untitled publication"), Bt.appendChild(vn), X.creators) {
        const Ht = document.createElement("p");
        Ht.className = "library-creator", Ht.textContent = be(X.creators), Bt.appendChild(Ht);
      }
      const yt = document.createElement("dl");
      yt.className = "library-cover-detail-list";
      const Pi = [
        ["Type", be(X.publicationType || "other")],
        ["Format", X.extension ? Ch(X.extension) : ""],
        ["Shelf", X.shelf ? be(X.shelf) : ""]
      ].filter(([, Ht]) => Ht !== "");
      for (const [Ht, $n] of Pi) {
        const Ft = document.createElement("div");
        Ft.className = "library-cover-detail-chip";
        const zn = document.createElement("dt");
        zn.textContent = Ht;
        const De = document.createElement("dd");
        De.textContent = $n, Ft.append(zn, De), yt.appendChild(Ft);
      }
      Bt.appendChild(yt);
      const Dt = document.createElement("p"), an = document.createElement("a");
      an.href = be(X.openUrl || "#"), an.textContent = d("library", "Read");
      const Yt = document.createElement("a");
      Yt.href = be(X.filesUrl || "#"), Yt.textContent = d("library", "Show in Files");
      const li = document.createElement("a");
      li.href = be(X.downloadUrl || "#"), li.textContent = d("library", "Download source");
      const Mn = document.createElement("a");
      Mn.href = be(X.detailsUrl || "#"), Mn.textContent = d("library", "Details"), Dt.append(an, document.createTextNode(" · "), Yt, document.createTextNode(" · "), li, document.createTextNode(" · "), Mn), Bt.appendChild(Dt), le.append(Se, Fe, Bt), Y.appendChild(le);
    }
    b.appendChild(Y);
  }
  return m.appendChild(b), m;
}
if (yo)
  try {
    ag(F2, { state: Kd }).mount(yo);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), yo.replaceChildren(W2(Kd));
  }
