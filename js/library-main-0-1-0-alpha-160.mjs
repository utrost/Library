// @__NO_SIDE_EFFECTS__
function mc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ke = {}, Sa = [], gn = () => {
}, Gd = () => !1, bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ys = (e) => e.startsWith("onUpdate:"), mt = Object.assign, vc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wh = Object.prototype.hasOwnProperty, Ze = (e, t) => wh.call(e, t), Se = Array.isArray, ki = (e) => Ur(e) === "[object Map]", ra = (e) => Ur(e) === "[object Set]", Zc = (e) => Ur(e) === "[object Date]", Re = (e) => typeof e == "function", ot = (e) => typeof e == "string", Rn = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Kd = (e) => (Xe(e) || Re(e)) && Re(e.then) && Re(e.catch), qd = Object.prototype.toString, Ur = (e) => qd.call(e), Ch = (e) => Ur(e).slice(8, -1), Wd = (e) => Ur(e) === "[object Object]", gc = (e) => ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ mc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _s = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Eh = /-\w/g, Pt = _s(
  (e) => e.replace(Eh, (t) => t.slice(1).toUpperCase())
), Sh = /\B([A-Z])/g, pi = _s(
  (e) => e.replace(Sh, "-$1").toLowerCase()
), ws = _s((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ys = _s(
  (e) => e ? `on${ws(e)}` : ""
), Tt = (e, t) => !Object.is(e, t), fo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Cs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Th = (e) => {
  const t = ot(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xc;
const Es = () => Xc || (Xc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function bn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = ot(i) ? Nh(i) : bn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (ot(e) || Xe(e))
    return e;
}
const Ah = /;(?![^(]*\))/g, kh = /:([^]+)/, xh = /\/\*[^]*?\*\//g;
function Nh(e) {
  const t = {};
  return e.replace(xh, "").split(Ah).forEach((n) => {
    if (n) {
      const i = n.split(kh);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Oe(e) {
  let t = "";
  if (ot(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Oe(e[n]);
      i && (t += i + " ");
    }
  else if (Xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function bo(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ot(t) && (e.class = Oe(t)), n && (e.style = bn(n)), e;
}
const Oh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lh = /* @__PURE__ */ mc(Oh);
function Zd(e) {
  return !!e || e === "";
}
function Rh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Li(e[i], t[i]);
  return n;
}
function Jc(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Li(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Li(e, t) {
  if (e === t) return !0;
  let n = Zc(e), i = Zc(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Rn(e), i = Rn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? Rh(e, t) : !1;
  if (n = Xe(e), i = Xe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = ki(e), i = ki(t), n || i || (n = ra(e), i = ra(t), n || i))
      return n && i ? Jc(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const s = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (s && !l || !s && l || !Li(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ih(e, t) {
  return e.findIndex((n) => Li(n, t));
}
const Xd = (e) => !!(e && e.__v_isRef === !0), m = (e) => ot(e) ? e : e == null ? "" : Se(e) || Xe(e) && (e.toString === qd || !Re(e.toString)) ? Xd(e) ? m(e.value) : JSON.stringify(e, Jd, 2) : String(e), Jd = (e, t) => Xd(t) ? Jd(e, t.value) : ki(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Zs(i, r) + " =>"] = a, n),
    {}
  )
} : ra(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zs(n))
} : Rn(t) ? Zs(t) : Xe(t) && !Se(t) && !Wd(t) ? String(t) : t, Zs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Ph(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let St;
class Dh {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && St && (St.active ? (this.parent = St, this.index = (St.scopes || (St.scopes = [])).push(
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
      const n = St;
      try {
        return St = this, t();
      } finally {
        St = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = St, St = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (St === this)
        St = this.prevScope;
      else {
        let t = St;
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
function Fh() {
  return St;
}
let rt;
const Xs = /* @__PURE__ */ new WeakSet();
class Qd {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, St && (St.active ? St.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xs.has(this) && (Xs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qc(this), nf(this);
    const t = rt, n = On;
    rt = this, On = !0;
    try {
      return this.fn();
    } finally {
      af(this), rt = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _c(t);
      this.deps = this.depsTail = void 0, Qc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Dl(this) && this.run();
  }
  get dirty() {
    return Dl(this);
  }
}
let ef = 0, sr, lr;
function tf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = lr, lr = e;
    return;
  }
  e.next = sr, sr = e;
}
function bc() {
  ef++;
}
function yc() {
  if (--ef > 0)
    return;
  if (lr) {
    let t = lr;
    for (lr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; sr; ) {
    let t = sr;
    for (sr = void 0; t; ) {
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
function nf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function af(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), _c(i), Mh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Dl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (rf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function rf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cr) || (e.globalVersion = Cr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Dl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = rt, i = On;
  rt = e, On = !0;
  try {
    nf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Tt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    rt = n, On = i, af(e), e.flags &= -3;
  }
}
function _c(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      _c(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Mh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const of = [];
function ci() {
  of.push(On), On = !1;
}
function ui() {
  const e = of.pop();
  On = e === void 0 ? !0 : e;
}
function Qc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = rt;
    rt = void 0;
    try {
      t();
    } finally {
      rt = n;
    }
  }
}
let Cr = 0;
class $h {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ss {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!rt || !On || rt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== rt)
      n = this.activeLink = new $h(rt, this), rt.deps ? (n.prevDep = rt.depsTail, rt.depsTail.nextDep = n, rt.depsTail = n) : rt.deps = rt.depsTail = n, sf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = rt.depsTail, n.nextDep = void 0, rt.depsTail.nextDep = n, rt.depsTail = n, rt.deps === n && (rt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Cr++, this.notify(t);
  }
  notify(t) {
    bc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      yc();
    }
  }
}
function sf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        sf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Fl = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ Symbol(
  ""
), Ml = /* @__PURE__ */ Symbol(
  ""
), Er = /* @__PURE__ */ Symbol(
  ""
);
function Lt(e, t, n) {
  if (On && rt) {
    let i = Fl.get(e);
    i || Fl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ss()), a.map = i, a.key = n), a.track();
  }
}
function ni(e, t, n, i, a, r) {
  const o = Fl.get(e);
  if (!o) {
    Cr++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (bc(), t === "clear")
    o.forEach(s);
  else {
    const l = Se(e), p = l && gc(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((f, g) => {
        (g === "length" || g === Er || !Rn(g) && g >= c) && s(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), p && s(o.get(Er)), t) {
        case "add":
          l ? p && s(o.get("length")) : (s(o.get(ta)), ki(e) && s(o.get(Ml)));
          break;
        case "delete":
          l || (s(o.get(ta)), ki(e) && s(o.get(Ml)));
          break;
        case "set":
          ki(e) && s(o.get(ta));
          break;
      }
  }
  yc();
}
function ma(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Lt(t, "iterate", Er), /* @__PURE__ */ yn(e) ? t : t.map(In));
}
function Ts(e) {
  return Lt(e = /* @__PURE__ */ Ye(e), "iterate", Er), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ di(e) ? Ra(/* @__PURE__ */ na(e) ? In(t) : t) : In(t);
}
const zh = {
  __proto__: null,
  [Symbol.iterator]() {
    return Js(this, Symbol.iterator, (e) => Bn(this, e));
  },
  concat(...e) {
    return ma(this).concat(
      ...e.map((t) => Se(t) ? ma(t) : t)
    );
  },
  entries() {
    return Js(this, "entries", (e) => (e[1] = Bn(this, e[1]), e));
  },
  every(e, t) {
    return Yn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Yn(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Yn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yn(
      this,
      "findLast",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Yn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qs(this, "includes", e);
  },
  indexOf(...e) {
    return Qs(this, "indexOf", e);
  },
  join(e) {
    return ma(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ja(this, "pop");
  },
  push(...e) {
    return ja(this, "push", e);
  },
  reduce(e, ...t) {
    return eu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return eu(this, "reduceRight", e, t);
  },
  shift() {
    return ja(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ja(this, "splice", e);
  },
  toReversed() {
    return ma(this).toReversed();
  },
  toSorted(e) {
    return ma(this).toSorted(e);
  },
  toSpliced(...e) {
    return ma(this).toSpliced(...e);
  },
  unshift(...e) {
    return ja(this, "unshift", e);
  },
  values() {
    return Js(this, "values", (e) => Bn(this, e));
  }
};
function Js(e, t, n) {
  const i = Ts(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Uh = Array.prototype;
function Yn(e, t, n, i, a, r) {
  const o = Ts(e), s = o !== e && !/* @__PURE__ */ yn(e), l = o[t];
  if (l !== Uh[t]) {
    const f = l.apply(e, r);
    return s ? In(f) : f;
  }
  let p = n;
  o !== e && (s ? p = function(f, g) {
    return n.call(this, Bn(e, f), g, e);
  } : n.length > 2 && (p = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const c = l.call(o, p, i);
  return s && a ? a(c) : c;
}
function eu(e, t, n, i) {
  const a = Ts(e), r = a !== e && !/* @__PURE__ */ yn(e);
  let o = n, s = !1;
  a !== e && (r ? (s = i.length === 0, o = function(p, c, f) {
    return s && (s = !1, p = Bn(e, p)), n.call(this, p, Bn(e, c), f, e);
  }) : n.length > 3 && (o = function(p, c, f) {
    return n.call(this, p, c, f, e);
  }));
  const l = a[t](o, ...i);
  return s ? Bn(e, l) : l;
}
function Qs(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Lt(i, "iterate", Er);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ec(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function ja(e, t, n = []) {
  ci(), bc();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return yc(), ui(), i;
}
const Bh = /* @__PURE__ */ mc("__proto__,__v_isRef,__isVue"), lf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rn)
);
function Hh(e) {
  Rn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Lt(t, "has", e), t.hasOwnProperty(e);
}
class cf {
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
      return i === (a ? r ? Jh : pf : r ? ff : df).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let l;
      if (o && (l = zh[n]))
        return l;
      if (n === "hasOwnProperty")
        return Hh;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Dt(t) ? t : i
    );
    if ((Rn(n) ? lf.has(n) : Bh(n)) || (a || Lt(t, "get", n), r))
      return s;
    if (/* @__PURE__ */ Dt(s)) {
      const l = o && gc(n) ? s : s.value;
      return a && Xe(l) ? /* @__PURE__ */ Sr(l) : l;
    }
    return Xe(s) ? a ? /* @__PURE__ */ Sr(s) : /* @__PURE__ */ Qt(s) : s;
  }
}
class uf extends cf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && gc(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ di(r);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ di(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Dt(r) && !/* @__PURE__ */ Dt(i))
        return p || (r.value = i), !0;
    }
    const s = o ? Number(n) < t.length : Ze(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Dt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && l && (s ? Tt(i, r) && ni(t, "set", n, i) : ni(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ni(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Rn(n) || !lf.has(n)) && Lt(t, "has", n), i;
  }
  ownKeys(t) {
    return Lt(
      t,
      "iterate",
      Se(t) ? "length" : ta
    ), Reflect.ownKeys(t);
  }
}
class jh extends cf {
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
const Vh = /* @__PURE__ */ new uf(), Gh = /* @__PURE__ */ new jh(), Kh = /* @__PURE__ */ new uf(!0);
const $l = (e) => e, Xr = (e) => Reflect.getPrototypeOf(e);
function qh(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = ki(r), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, p = a[e](...i), c = n ? $l : t ? Ra : In;
    return !t && Lt(
      r,
      "iterate",
      l ? Ml : ta
    ), mt(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: f, done: g } = p.next();
          return g ? { value: f, done: g } : {
            value: s ? [c(f[0]), c(f[1])] : c(f),
            done: g
          };
        }
      }
    );
  };
}
function Jr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wh(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), s = /* @__PURE__ */ Ye(a);
      e || (Tt(a, s) && Lt(o, "get", a), Lt(o, "get", s));
      const { has: l } = Xr(o), p = t ? $l : e ? Ra : In;
      if (l.call(o, a))
        return p(r.get(a));
      if (l.call(o, s))
        return p(r.get(s));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Lt(/* @__PURE__ */ Ye(a), "iterate", ta), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), s = /* @__PURE__ */ Ye(a);
      return e || (Tt(a, s) && Lt(o, "has", a), Lt(o, "has", s)), a === s ? r.has(a) : r.has(a) || r.has(s);
    },
    forEach(a, r) {
      const o = this, s = o.__v_raw, l = /* @__PURE__ */ Ye(s), p = t ? $l : e ? Ra : In;
      return !e && Lt(l, "iterate", ta), s.forEach((c, f) => a.call(r, p(c), p(f), o));
    }
  };
  return mt(
    n,
    e ? {
      add: Jr("add"),
      set: Jr("set"),
      delete: Jr("delete"),
      clear: Jr("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = Xr(r), s = /* @__PURE__ */ Ye(a), l = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ di(a) ? s : a;
        return o.has.call(r, l) || Tt(a, l) && o.has.call(r, a) || Tt(s, l) && o.has.call(r, s) || (r.add(l), ni(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ yn(r) && !/* @__PURE__ */ di(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: s, get: l } = Xr(o);
        let p = s.call(o, a);
        p || (a = /* @__PURE__ */ Ye(a), p = s.call(o, a));
        const c = l.call(o, a);
        return o.set(a, r), p ? Tt(r, c) && ni(o, "set", a, r) : ni(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: s } = Xr(r);
        let l = o.call(r, a);
        l || (a = /* @__PURE__ */ Ye(a), l = o.call(r, a)), s && s.call(r, a);
        const p = r.delete(a);
        return l && ni(r, "delete", a, void 0), p;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && ni(
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
    n[a] = qh(a, e, t);
  }), n;
}
function wc(e, t) {
  const n = Wh(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Yh = {
  get: /* @__PURE__ */ wc(!1, !1)
}, Zh = {
  get: /* @__PURE__ */ wc(!1, !0)
}, Xh = {
  get: /* @__PURE__ */ wc(!0, !1)
};
const df = /* @__PURE__ */ new WeakMap(), ff = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), Jh = /* @__PURE__ */ new WeakMap();
function Qh(e) {
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
function Qt(e) {
  return /* @__PURE__ */ di(e) ? e : Cc(
    e,
    !1,
    Vh,
    Yh,
    df
  );
}
// @__NO_SIDE_EFFECTS__
function em(e) {
  return Cc(
    e,
    !1,
    Kh,
    Zh,
    ff
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return Cc(
    e,
    !0,
    Gh,
    Xh,
    pf
  );
}
function Cc(e, t, n, i, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Qh(Ch(e));
  if (o === 0)
    return e;
  const s = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  return /* @__PURE__ */ di(e) ? /* @__PURE__ */ na(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ec(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function tm(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Yd(e, "__v_skip", !0), e;
}
const In = (e) => Xe(e) ? /* @__PURE__ */ Qt(e) : e, Ra = (e) => Xe(e) ? /* @__PURE__ */ Sr(e) : e;
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return mf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function hf(e) {
  return mf(e, !0);
}
function mf(e, t) {
  return /* @__PURE__ */ Dt(e) ? e : new nm(e, t);
}
class nm {
  constructor(t, n) {
    this.dep = new Ss(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ di(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Tt(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function v(e) {
  return /* @__PURE__ */ Dt(e) ? e.value : e;
}
function oi(e) {
  return Re(e) ? e() : v(e);
}
const im = {
  get: (e, t, n) => t === "__v_raw" ? e : v(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Dt(a) && !/* @__PURE__ */ Dt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function vf(e) {
  return /* @__PURE__ */ na(e) ? e : new Proxy(e, im);
}
class am {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ss(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function rm(e) {
  return new am(e);
}
class om {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ss(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    rt !== this)
      return tf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return rf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sm(e, t, n = !1) {
  let i, a;
  return Re(e) ? i = e : (i = e.get, a = e.set), new om(i, a, n);
}
const Qr = {}, yo = /* @__PURE__ */ new WeakMap();
let Ki;
function lm(e, t = !1, n = Ki) {
  if (n) {
    let i = yo.get(n);
    i || yo.set(n, i = []), i.push(e);
  }
}
function cm(e, t, n = Ke) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: s, call: l } = n, p = ($) => a ? $ : /* @__PURE__ */ yn($) || a === !1 || a === 0 ? ii($, 1) : ii($);
  let c, f, g, w, A = !1, E = !1;
  if (/* @__PURE__ */ Dt(e) ? (f = () => e.value, A = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ na(e) ? (f = () => p(e), A = !0) : Se(e) ? (E = !0, A = e.some(($) => /* @__PURE__ */ na($) || /* @__PURE__ */ yn($)), f = () => e.map(($) => {
    if (/* @__PURE__ */ Dt($))
      return $.value;
    if (/* @__PURE__ */ na($))
      return p($);
    if (Re($))
      return l ? l($, 2) : $();
  })) : Re(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (g) {
      ci();
      try {
        g();
      } finally {
        ui();
      }
    }
    const $ = Ki;
    Ki = c;
    try {
      return l ? l(e, 3, [w]) : e(w);
    } finally {
      Ki = $;
    }
  } : f = gn, t && a) {
    const $ = f, re = a === !0 ? 1 / 0 : a;
    f = () => ii($(), re);
  }
  const k = Fh(), P = () => {
    c.stop(), k && k.active && vc(k.effects, c);
  };
  if (r && t) {
    const $ = t;
    t = (...re) => {
      const ue = $(...re);
      return P(), ue;
    };
  }
  let R = E ? new Array(e.length).fill(Qr) : Qr;
  const I = ($) => {
    if (!(!(c.flags & 1) || !c.dirty && !$))
      if (t) {
        const re = c.run();
        if ($ || a || A || (E ? re.some((ue, ee) => Tt(ue, R[ee])) : Tt(re, R))) {
          g && g();
          const ue = Ki;
          Ki = c;
          try {
            const ee = [
              re,
              // pass undefined as the old value when it's changed for the first time
              R === Qr ? void 0 : E && R[0] === Qr ? [] : R,
              w
            ];
            R = re, l ? l(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            Ki = ue;
          }
        }
      } else
        c.run();
  };
  return s && s(I), c = new Qd(f), c.scheduler = o ? () => o(I, !1) : I, w = ($) => lm($, !1, c), g = c.onStop = () => {
    const $ = yo.get(c);
    if ($) {
      if (l)
        l($, 4);
      else
        for (const re of $) re();
      yo.delete(c);
    }
  }, t ? i ? I(!0) : R = c.run() : o ? o(I.bind(null, !0), !0) : c.run(), P.pause = c.pause.bind(c), P.resume = c.resume.bind(c), P.stop = P, P;
}
function ii(e, t = 1 / 0, n) {
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Dt(e))
    ii(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ii(e[i], t, n);
  else if (ra(e) || ki(e))
    e.forEach((i) => {
      ii(i, t, n);
    });
  else if (Wd(e)) {
    for (const i in e)
      ii(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ii(e[i], t, n);
  }
  return e;
}
function Br(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    As(a, t, n);
  }
}
function _n(e, t, n, i) {
  if (Re(e)) {
    const a = Br(e, t, n, i);
    return a && Kd(a) && a.catch((r) => {
      As(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(_n(e[r], t, n, i));
    return a;
  }
}
function As(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ke;
  if (t) {
    let s = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, l, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (r) {
      ci(), Br(r, null, 10, [
        e,
        l,
        p
      ]), ui();
      return;
    }
  }
  um(e, n, a, i, o);
}
function um(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Bt = [];
let $n = -1;
const Ta = [];
let Ti = null, wa = 0;
const gf = /* @__PURE__ */ Promise.resolve();
let _o = null;
function ia(e) {
  const t = _o || gf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dm(e) {
  let t = $n + 1, n = Bt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Bt[i], r = Tr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Sc(e) {
  if (!(e.flags & 1)) {
    const t = Tr(e), n = Bt[Bt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tr(n) ? Bt.push(e) : Bt.splice(dm(t), 0, e), e.flags |= 1, bf();
  }
}
function bf() {
  _o || (_o = gf.then(wf));
}
function yf(e) {
  if (!Se(e))
    Ti && e.id === -1 ? Ti.splice(wa + 1, 0, e) : e.flags & 1 || (Ta.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ta.push(e[t]);
  bf();
}
function tu(e, t, n = $n + 1) {
  for (; n < Bt.length; n++) {
    const i = Bt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Bt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function _f(e) {
  if (Ta.length) {
    const t = [...new Set(Ta)].sort(
      (n, i) => Tr(n) - Tr(i)
    );
    if (Ta.length = 0, Ti) {
      for (let n = 0; n < t.length; n++)
        Ti.push(t[n]);
      return;
    }
    for (Ti = t, wa = 0; wa < Ti.length; wa++) {
      const n = Ti[wa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ti = null, wa = 0;
  }
}
const Tr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wf(e) {
  try {
    for ($n = 0; $n < Bt.length; $n++) {
      const t = Bt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Br(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < Bt.length; $n++) {
      const t = Bt[$n];
      t && (t.flags &= -2);
    }
    $n = -1, Bt.length = 0, _f(), _o = null, (Bt.length || Ta.length) && wf();
  }
}
let kt = null, ks = null;
function wo(e) {
  const t = kt;
  return kt = e, ks = e && e.type.__scopeId || null, t;
}
function fm(e) {
  ks = e;
}
function pm() {
  ks = null;
}
const hm = (e) => Fe;
function Fe(e, t = kt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Ao(-1);
    const r = wo(t), o = si.length;
    let s;
    try {
      s = e(...a);
    } finally {
      for (let l = si.length; l > o; l--) Lc();
      wo(r), i._d && Ao(1);
    }
    return s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function ct(e, t) {
  if (kt === null)
    return e;
  const n = Is(kt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, s, l = Ke] = t[a];
    r && (Re(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ii(o), i.push({
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
function Ui(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const s = a[o];
    r && (s.oldValue = r[o].value);
    let l = s.dir[i];
    l && (ci(), _n(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), ui());
  }
}
function hn(e, t) {
  if (It) {
    let n = It.provides;
    const i = It.parent && It.parent.provides;
    i === n && (n = It.provides = Object.create(i)), n[e] = t;
  }
}
function Rt(e, t, n = !1) {
  const i = sa();
  if (i || ka) {
    let a = ka ? ka._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Re(t) ? t.call(i && i.proxy) : t;
  }
}
const mm = /* @__PURE__ */ Symbol.for("v-scx"), vm = () => Rt(mm);
function gm(e, t) {
  return xs(e, null, t);
}
function bm(e, t) {
  return xs(
    e,
    null,
    { flush: "sync" }
  );
}
function Yt(e, t, n) {
  return xs(e, t, n);
}
function xs(e, t, n = Ke) {
  const { immediate: i, deep: a, flush: r, once: o } = n, s = mt({}, n), l = t && i || !t && r !== "post";
  let p;
  if (Lr) {
    if (r === "sync") {
      const w = vm();
      p = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!l) {
      const w = () => {
      };
      return w.stop = gn, w.resume = gn, w.pause = gn, w;
    }
  }
  const c = It;
  s.call = (w, A, E) => _n(w, c, A, E);
  let f = !1;
  r === "post" ? s.scheduler = (w) => {
    Ut(w, c && c.suspense);
  } : r !== "sync" && (f = !0, s.scheduler = (w, A) => {
    A ? w() : Sc(w);
  }), s.augmentJob = (w) => {
    t && (w.flags |= 4), f && (w.flags |= 2, c && (w.id = c.uid, w.i = c));
  };
  const g = cm(e, t, s);
  return Lr && (p ? p.push(g) : l && g()), g;
}
function ym(e, t, n) {
  const i = this.proxy, a = ot(e) ? e.includes(".") ? Cf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Re(t) ? r = t : (r = t.handler, n = t);
  const o = Vr(this), s = xs(a, r.bind(i), n);
  return o(), s;
}
function Cf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ci = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ Symbol("_vte"), Ns = (e) => e.__isTeleport, Wi = (e) => e && (e.disabled || e.disabled === ""), _m = (e) => e && (e.defer || e.defer === ""), nu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, iu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, zl = (e, t) => {
  const n = e && e.to;
  return ot(n) ? t ? t(n) : null : n;
}, wm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, s, l, p) {
    const {
      mc: c,
      pc: f,
      pbc: g,
      o: { insert: w, querySelector: A, createText: E, createComment: k, parentNode: P }
    } = p, R = Wi(t.props);
    let { dynamicChildren: I } = t;
    const $ = (ee, de, K) => {
      ee.shapeFlag & 16 && c(
        ee.children,
        de,
        K,
        a,
        r,
        o,
        s,
        l
      );
    }, re = (ee = t) => {
      const de = Wi(ee.props), K = ee.target = zl(ee.props, A), se = Ul(K, ee, E, w);
      K && (o !== "svg" && nu(K) ? o = "svg" : o !== "mathml" && iu(K) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), de || ($(ee, K, se), er(ee, !1)));
    }, ue = (ee) => {
      const de = () => {
        if (Ci.get(ee) === de) {
          if (Ci.delete(ee), Wi(ee.props)) {
            const K = P(ee.el) || n;
            $(ee, K, ee.anchor), er(ee, !0);
          }
          re(ee);
        }
      };
      Ci.set(ee, de), Ut(de, r);
    };
    if (e == null) {
      const ee = t.el = E(""), de = t.anchor = E("");
      if (w(ee, n, i), w(de, n, i), _m(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      R && ($(t, n, de), er(t, !0)), re();
    } else {
      t.el = e.el;
      const ee = t.anchor = e.anchor, de = Ci.get(e);
      if (de) {
        de.flags |= 8, Ci.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const K = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ve = Wi(e.props), q = ve ? n : K, ie = ve ? ee : se;
      if (o === "svg" || nu(K) ? o = "svg" : (o === "mathml" || iu(K)) && (o = "mathml"), I ? (g(
        e.dynamicChildren,
        I,
        q,
        a,
        r,
        o,
        s
      ), Oc(e, t, !0)) : l || f(
        e,
        t,
        q,
        ie,
        a,
        r,
        o,
        s,
        !1
      ), R)
        ve ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : eo(
          t,
          n,
          ee,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = zl(t.props, A);
        F && (t.target = F, eo(
          t,
          F,
          null,
          p,
          0
        ));
      } else ve && eo(
        t,
        K,
        se,
        p,
        1
      );
      er(t, R);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: s,
      anchor: l,
      targetStart: p,
      targetAnchor: c,
      target: f,
      props: g
    } = e, w = Wi(g), A = r || !w, E = Ci.get(e);
    if (E && (E.flags |= 8, Ci.delete(e)), f && (a(p), a(c)), r && a(l), !E && (w || f) && o & 16)
      for (let k = 0; k < s.length; k++) {
        const P = s[k];
        i(
          P,
          t,
          n,
          A,
          !!P.dynamicChildren
        );
      }
  },
  move: eo,
  hydrate: Cm
};
function eo(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: s, shapeFlag: l, children: p, props: c } = e, f = r === 2;
  if (f && i(o, t, n), !Ci.has(e) && (!f || Wi(c)) && l & 16)
    for (let g = 0; g < p.length; g++)
      a(
        p[g],
        t,
        n,
        2
      );
  f && i(s, t, n);
}
function Cm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: s, querySelector: l, insert: p, createText: c }
}, f) {
  function g(k, P) {
    let R = P;
    for (; R; ) {
      if (R && R.nodeType === 8) {
        if (R.data === "teleport start anchor")
          t.targetStart = R;
        else if (R.data === "teleport anchor") {
          t.targetAnchor = R, k._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      R = o(R);
    }
  }
  function w(k, P) {
    P.anchor = f(
      o(k),
      P,
      s(k),
      n,
      i,
      a,
      r
    );
  }
  const A = t.target = zl(
    t.props,
    l
  ), E = Wi(t.props);
  if (A) {
    const k = A._lpa || A.firstChild;
    t.shapeFlag & 16 && (E ? (w(e, t), g(A, k), t.targetAnchor || Ul(
      A,
      t,
      c,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      s(e) === A ? e : null
    )) : (t.anchor = o(e), g(A, k), t.targetAnchor || Ul(A, t, c, p), f(
      k && o(k),
      t,
      A,
      n,
      i,
      a,
      r
    ))), er(t, E);
  } else E && t.shapeFlag & 16 && (w(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Sf = wm;
function er(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Ul(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[Ef] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const mn = /* @__PURE__ */ Symbol("_leaveCb"), Va = /* @__PURE__ */ Symbol("_enterCb");
function Em() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Pi(() => {
    e.isMounted = !0;
  }), Ia(() => {
    e.isUnmounting = !0;
  }), e;
}
const dn = [Function, Array], Tf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: dn,
  onEnter: dn,
  onAfterEnter: dn,
  onEnterCancelled: dn,
  // leave
  onBeforeLeave: dn,
  onLeave: dn,
  onAfterLeave: dn,
  onLeaveCancelled: dn,
  // appear
  onBeforeAppear: dn,
  onAppear: dn,
  onAfterAppear: dn,
  onAppearCancelled: dn
}, Af = (e) => {
  const t = e.subTree;
  return t.component ? Af(t.component) : t;
}, Sm = {
  name: "BaseTransition",
  props: Tf,
  setup(e, { slots: t }) {
    const n = sa(), i = Em();
    return () => {
      const a = t.default && Nf(t.default(), !0), r = a && a.length ? kf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? G() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: s } = o;
      if (i.isLeaving)
        return el(r);
      const l = Co(r);
      if (!l)
        return el(r);
      let p = Bl(
        l,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => p = f
      );
      l.type !== At && Ar(l, p);
      let c = n.subTree && Co(n.subTree);
      if (c && c.type !== At && !Yi(c, l) && Af(n).type !== At) {
        let f = Bl(
          c,
          o,
          i,
          n
        );
        if (Ar(c, f), s === "out-in" && l.type !== At)
          return i.isLeaving = !0, f.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, el(r);
        s === "in-out" && l.type !== At ? f.delayLeave = (g, w, A) => {
          const E = xf(
            i,
            c
          );
          E[String(c.key)] = c, g[mn] = () => {
            w(), g[mn] = void 0, delete p.delayedLeave, c = void 0;
          }, p.delayedLeave = () => {
            A(), delete p.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function kf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== At) {
        t = n;
        break;
      }
  }
  return t;
}
const Tm = Sm;
function xf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Bl(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: p,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: g,
    onLeave: w,
    onAfterLeave: A,
    onLeaveCancelled: E,
    onBeforeAppear: k,
    onAppear: P,
    onAfterAppear: R,
    onAppearCancelled: I
  } = t, $ = String(e.key), re = xf(n, e), ue = (K, se) => {
    K && _n(
      K,
      i,
      9,
      se
    );
  }, ee = (K, se) => {
    const ve = se[1];
    ue(K, se), Se(K) ? K.every((q) => q.length <= 1) && ve() : K.length <= 1 && ve();
  }, de = {
    mode: o,
    persisted: s,
    beforeEnter(K) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = k || l;
        else
          return;
      K[mn] && K[mn](
        !0
        /* cancelled */
      );
      const ve = re[$];
      ve && Yi(e, ve) && ve.el[mn] && ve.el[mn](), ue(se, [K]);
    },
    enter(K) {
      if (re[$] === e) return;
      let se = p, ve = c, q = f;
      if (!n.isMounted)
        if (r)
          se = P || p, ve = R || c, q = I || f;
        else
          return;
      let ie = !1;
      K[Va] = (M) => {
        ie || (ie = !0, M ? ue(q, [K]) : ue(ve, [K]), de.delayedLeave && de.delayedLeave(), K[Va] = void 0);
      };
      const F = K[Va].bind(null, !1);
      se ? ee(se, [K, F]) : F();
    },
    leave(K, se) {
      const ve = String(e.key);
      if (K[Va] && K[Va](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(g, [K]);
      let q = !1;
      K[mn] = (F) => {
        q || (q = !0, se(), F ? ue(E, [K]) : ue(A, [K]), K[mn] = void 0, re[ve] === e && delete re[ve]);
      };
      const ie = K[mn].bind(null, !1);
      re[ve] = e, w ? ee(w, [K, ie]) : ie();
    },
    clone(K) {
      const se = Bl(
        K,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return de;
}
function el(e) {
  if (Os(e))
    return e = Ri(e), e.children = null, e;
}
function Co(e) {
  if (!Os(e))
    return Ns(e.type) && e.children ? kf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Re(n.default))
      return n.default();
  }
}
function Ar(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ar(
      Ns(n.type) && Co(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Nf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const s = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === be ? (o.patchFlag & 128 && a++, i = i.concat(
      Nf(o.children, t, s)
    )) : (t || o.type !== At) && i.push(s != null ? Ri(o, { key: s }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  return Re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Of(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Am(e) {
  const t = sa(), n = /* @__PURE__ */ hf(null);
  if (t) {
    const a = t.refs === Ke ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function au(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Eo = /* @__PURE__ */ new WeakMap();
function cr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (E, k) => cr(
        E,
        t && (Se(t) ? t[k] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Aa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && cr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Is(i.component) : i.el, o = a ? null : r, { i: s, r: l } = e, p = t && t.r, c = s.refs === Ke ? s.refs = {} : s.refs, f = s.setupState, g = /* @__PURE__ */ Ye(f), w = f === Ke ? Gd : (E) => au(c, E) ? !1 : Ze(g, E), A = (E, k) => !(k && au(c, k));
  if (p != null && p !== l) {
    if (ru(t), ot(p))
      c[p] = null, w(p) && (f[p] = null);
    else if (/* @__PURE__ */ Dt(p)) {
      const E = t;
      A(p, E.k) && (p.value = null), E.k && (c[E.k] = null);
    }
  }
  if (Re(l))
    Br(l, s, 12, [o, c]);
  else {
    const E = ot(l), k = /* @__PURE__ */ Dt(l);
    if (E || k) {
      const P = () => {
        if (e.f) {
          const R = E ? w(l) ? f[l] : c[l] : A() || !e.k ? l.value : c[e.k];
          if (a)
            Se(R) && vc(R, r);
          else if (Se(R))
            R.includes(r) || R.push(r);
          else if (E)
            c[l] = [r], w(l) && (f[l] = c[l]);
          else {
            const I = [r];
            A(l, e.k) && (l.value = I), e.k && (c[e.k] = I);
          }
        } else E ? (c[l] = o, w(l) && (f[l] = o)) : k && (A(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const R = () => {
          P(), Eo.delete(e);
        };
        R.id = -1, Eo.set(e, R), Ut(R, n);
      } else
        ru(e), P();
    }
  }
}
function ru(e) {
  const t = Eo.get(e);
  t && (t.flags |= 8, Eo.delete(e));
}
Es().requestIdleCallback;
Es().cancelIdleCallback;
const Aa = (e) => !!e.type.__asyncLoader, Os = (e) => e.type.__isKeepAlive;
function km(e, t) {
  Lf(e, "a", t);
}
function xm(e, t) {
  Lf(e, "da", t);
}
function Lf(e, t, n = It) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ls(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Os(a.parent.vnode) && Nm(i, t, n, a), a = a.parent;
  }
}
function Nm(e, t, n, i) {
  const a = Ls(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Hr(() => {
    vc(i[t], a);
  }, n);
}
function Ls(e, t, n = It, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ci();
      const s = Vr(n), l = _n(t, n, e, o);
      return s(), ui(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const hi = (e) => (t, n = It) => {
  (!Lr || e === "sp") && Ls(e, (...i) => t(...i), n);
}, Rf = hi("bm"), Pi = hi("m"), If = hi(
  "bu"
), Om = hi("u"), Ia = hi(
  "bum"
), Hr = hi("um"), Lm = hi(
  "sp"
), Rm = hi("rtg"), Im = hi("rtc");
function Pm(e, t = It) {
  Ls("ec", e, t);
}
const Tc = "components", Dm = "directives";
function je(e, t) {
  return kc(Tc, e, !0, t) || e;
}
const Pf = /* @__PURE__ */ Symbol.for("v-ndc");
function Ac(e) {
  return ot(e) ? kc(Tc, e, !1) || e : e || Pf;
}
function ou(e) {
  return kc(Dm, e);
}
function kc(e, t, n = !0, i = !1) {
  const a = kt || It;
  if (a) {
    const r = a.type;
    if (e === Tc) {
      const s = gv(
        r,
        !1
      );
      if (s && (s === t || s === Pt(t) || s === ws(Pt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      su(a[e] || r[e], t) || // global registration
      su(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function su(e, t) {
  return e && (e[t] || e[Pt(t)] || e[ws(Pt(t))]);
}
function qe(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || ot(e)) {
    const s = o && /* @__PURE__ */ na(e);
    let l = !1, p = !1;
    s && (l = !/* @__PURE__ */ yn(e), p = /* @__PURE__ */ di(e), e = Ts(e)), a = new Array(e.length);
    for (let c = 0, f = e.length; c < f; c++)
      a[c] = t(
        l ? p ? Ra(In(e[c])) : In(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, r);
  } else if (Xe(e))
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
function Me(e, t, n, i, a, r) {
  if (n == null && (n = {}), kt.ce || kt.parent && Aa(kt.parent) && kt.parent.ce) {
    const p = n, c = Object.keys(p).length > 0;
    return t !== "default" && (p.name = t), C(), Be(
      be,
      null,
      [Ae("slot", p, i && i())],
      c ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const s = si.length;
  C();
  let l;
  try {
    const p = o && Df(o(n)), c = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    p && p.key;
    l = Be(
      be,
      {
        key: (c && !Rn(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!p && i ? "_fb" : "")
      },
      p || (i ? i() : []),
      p && e._ === 1 ? 64 : -2
    );
  } catch (p) {
    for (let c = si.length; c > s; c--) Lc();
    throw p;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Df(e) {
  return e.some((t) => xr(t) ? !(t.type === At || t.type === be && !Df(t.children)) : !0) ? e : null;
}
const Hl = (e) => e ? ip(e) ? Is(e) : Hl(e.parent) : null, ur = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hl(e.parent),
    $root: (e) => Hl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $f(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Sc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ia.bind(e.proxy)),
    $watch: (e) => ym.bind(e)
  })
), tl = (e, t) => e !== Ke && !e.__isScriptSetup && Ze(e, t), Fm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
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
        if (tl(i, t))
          return o[t] = 1, i[t];
        if (a !== Ke && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== Ke && Ze(n, t))
          return o[t] = 4, n[t];
        jl && (o[t] = 0);
      }
    }
    const p = ur[t];
    let c, f;
    if (p)
      return t === "$attrs" && Lt(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (c = s.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ke && Ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, Ze(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return tl(a, t) ? (a[t] = n, !0) : i !== Ke && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, s) {
    let l;
    return !!(n[s] || e !== Ke && s[0] !== "$" && Ze(e, s) || tl(t, s) || Ze(r, s) || Ze(i, s) || Ze(ur, s) || Ze(a.config.globalProperties, s) || (l = o.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Mm() {
  return Ff().slots;
}
function $m() {
  return Ff().attrs;
}
function Ff(e) {
  const t = sa();
  return t.setupContext || (t.setupContext = rp(t));
}
function So(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function zm(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : mt({}, So(e), So(t));
}
let jl = !0;
function Um(e) {
  const t = $f(e), n = e.proxy, i = e.ctx;
  jl = !1, t.beforeCreate && lu(t.beforeCreate, e, "bc");
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
    beforeMount: f,
    mounted: g,
    beforeUpdate: w,
    updated: A,
    activated: E,
    deactivated: k,
    beforeDestroy: P,
    beforeUnmount: R,
    destroyed: I,
    unmounted: $,
    render: re,
    renderTracked: ue,
    renderTriggered: ee,
    errorCaptured: de,
    serverPrefetch: K,
    // public API
    expose: se,
    inheritAttrs: ve,
    // assets
    components: q,
    directives: ie,
    filters: F
  } = t;
  if (p && Bm(p, i, null), o)
    for (const ae in o) {
      const te = o[ae];
      Re(te) && (i[ae] = te.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    Xe(ae) && (e.data = /* @__PURE__ */ Qt(ae));
  }
  if (jl = !0, r)
    for (const ae in r) {
      const te = r[ae], pe = Re(te) ? te.bind(n, n) : Re(te.get) ? te.get.bind(n, n) : gn, he = !Re(te) && Re(te.set) ? te.set.bind(n) : gn, Ce = W({
        get: pe,
        set: he
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (_e) => Ce.value = _e
      });
    }
  if (s)
    for (const ae in s)
      Mf(s[ae], i, n, ae);
  if (l) {
    const ae = Re(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((te) => {
      hn(te, ae[te]);
    });
  }
  c && lu(c, e, "c");
  function Y(ae, te) {
    Se(te) ? te.forEach((pe) => ae(pe.bind(n))) : te && ae(te.bind(n));
  }
  if (Y(Rf, f), Y(Pi, g), Y(If, w), Y(Om, A), Y(km, E), Y(xm, k), Y(Pm, de), Y(Im, ue), Y(Rm, ee), Y(Ia, R), Y(Hr, $), Y(Lm, K), Se(se))
    if (se.length) {
      const ae = e.exposed || (e.exposed = {});
      se.forEach((te) => {
        Object.defineProperty(ae, te, {
          get: () => n[te],
          set: (pe) => n[te] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === gn && (e.render = re), ve != null && (e.inheritAttrs = ve), q && (e.components = q), ie && (e.directives = ie), K && Of(e);
}
function Bm(e, t, n = gn) {
  Se(e) && (e = Vl(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Xe(a) ? "default" in a ? r = Rt(
      a.from || i,
      a.default,
      !0
    ) : r = Rt(a.from || i) : r = Rt(a), /* @__PURE__ */ Dt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function lu(e, t, n) {
  _n(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mf(e, t, n, i) {
  let a = i.includes(".") ? Cf(n, i) : () => n[i];
  if (ot(e)) {
    const r = t[e];
    Re(r) && Yt(a, r);
  } else if (Re(e))
    Yt(a, e.bind(n));
  else if (Xe(e))
    if (Se(e))
      e.forEach((r) => Mf(r, t, n, i));
    else {
      const r = Re(e.handler) ? e.handler.bind(n) : t[e.handler];
      Re(r) && Yt(a, r, e);
    }
}
function $f(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, s = r.get(t);
  let l;
  return s ? l = s : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (p) => To(l, p, o, !0)
  ), To(l, t, o)), Xe(t) && r.set(t, l), l;
}
function To(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && To(e, r, n, !0), a && a.forEach(
    (o) => To(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const s = Hm[o] || n && n[o];
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const Hm = {
  data: cu,
  props: uu,
  emits: uu,
  // objects
  methods: tr,
  computed: tr,
  // lifecycle
  beforeCreate: zt,
  created: zt,
  beforeMount: zt,
  mounted: zt,
  beforeUpdate: zt,
  updated: zt,
  beforeDestroy: zt,
  beforeUnmount: zt,
  destroyed: zt,
  unmounted: zt,
  activated: zt,
  deactivated: zt,
  errorCaptured: zt,
  serverPrefetch: zt,
  // assets
  components: tr,
  directives: tr,
  // watch
  watch: Vm,
  // provide / inject
  provide: cu,
  inject: jm
};
function cu(e, t) {
  return t ? e ? function() {
    return mt(
      Re(e) ? e.call(this, this) : e,
      Re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jm(e, t) {
  return tr(Vl(e), Vl(t));
}
function Vl(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tr(e, t) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function uu(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mt(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function Vm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = mt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = zt(e[i], t[i]);
  return n;
}
function zf() {
  return {
    app: null,
    config: {
      isNativeTag: Gd,
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
let Gm = 0;
function Km(e, t) {
  return function(i, a = null) {
    Re(i) || (i = mt({}, i)), a != null && !Xe(a) && (a = null);
    const r = zf(), o = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const p = r.app = {
      _uid: Gm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: yv,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && Re(c.install) ? (o.add(c), c.install(p, ...f)) : Re(c) && (o.add(c), c(p, ...f))), p;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), p;
      },
      component(c, f) {
        return f ? (r.components[c] = f, p) : r.components[c];
      },
      directive(c, f) {
        return f ? (r.directives[c] = f, p) : r.directives[c];
      },
      mount(c, f, g) {
        if (!l) {
          const w = p._ceVNode || Ae(i, a);
          return w.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(w, c, g), l = !0, p._container = c, c.__vue_app__ = p, Is(w.component);
        }
      },
      onUnmount(c) {
        s.push(c);
      },
      unmount() {
        l && (_n(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(c, f) {
        return r.provides[c] = f, p;
      },
      runWithContext(c) {
        const f = ka;
        ka = p;
        try {
          return c();
        } finally {
          ka = f;
        }
      }
    };
    return p;
  };
}
let ka = null;
function Uf(e, t, n = Ke) {
  const i = sa(), a = Pt(t), r = pi(t), o = Bf(e, a), s = rm((l, p) => {
    let c, f = Ke, g;
    return bm(() => {
      const w = e[a];
      Tt(c, w) && (c = w, p());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(w) {
        const A = n.set ? n.set(w) : w;
        if (!Tt(A, c) && !(f !== Ke && Tt(w, f)))
          return;
        const E = i.vnode.props, k = !!(E && // check if parent has passed v-model
        (t in E || a in E || r in E) && (`onUpdate:${t}` in E || `onUpdate:${a}` in E || `onUpdate:${r}` in E));
        k || (c = w, p()), i.emit(`update:${t}`, A), Tt(w, f) && (Tt(w, A) && !Tt(A, g) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        k && f !== Ke && !Tt(A, c)) && p(), f = w, g = A;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? o || Ke : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const Bf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pt(t)}Modifiers`] || e[`${pi(t)}Modifiers`];
function qm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ke;
  let a = n;
  const r = t.startsWith("update:"), o = r && Bf(i, t.slice(7));
  o && (o.trim && (a = n.map((c) => ot(c) ? c.trim() : c)), o.number && (a = a.map(Cs)));
  let s, l = i[s = Ys(t)] || // also try camelCase event handler (#2249)
  i[s = Ys(Pt(t))];
  !l && r && (l = i[s = Ys(pi(t))]), l && _n(
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
    e.emitted[s] = !0, _n(
      p,
      e,
      6,
      a
    );
  }
}
const Wm = /* @__PURE__ */ new WeakMap();
function Hf(e, t, n = !1) {
  const i = n ? Wm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, s = !1;
  if (!Re(e)) {
    const l = (p) => {
      const c = Hf(p, t, !0);
      c && (s = !0, mt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !s ? (Xe(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => o[l] = null) : mt(o, r), Xe(e) && i.set(e, o), o);
}
function Rs(e, t) {
  return !e || !bs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, pi(t)) || Ze(e, t));
}
function du(e) {
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
    props: f,
    data: g,
    setupState: w,
    ctx: A,
    inheritAttrs: E
  } = e, k = wo(e);
  let P, R;
  try {
    if (n.shapeFlag & 4) {
      const $ = a || i, re = $;
      P = Hn(
        p.call(
          re,
          $,
          c,
          f,
          w,
          g,
          A
        )
      ), R = s;
    } else {
      const $ = t;
      P = Hn(
        $.length > 1 ? $(
          f,
          { attrs: s, slots: o, emit: l }
        ) : $(
          f,
          null
        )
      ), R = t.props ? s : Ym(s);
    }
  } catch ($) {
    si.length = 0, As($, e, 1), P = Ae(At);
  }
  let I = P;
  if (R && E !== !1) {
    const $ = Object.keys(R), { shapeFlag: re } = I;
    $.length && re & 7 && (r && $.some(ys) && (R = Zm(
      R,
      r
    )), I = Ri(I, R, !1, !0));
  }
  if (n.dirs && (I = Ri(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = Ns(I.type) && Co(I) || I;
    Ar($, n.transition);
  }
  return P = I, wo(k), P;
}
const Ym = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zm = (e, t) => {
  const n = {};
  for (const i in e)
    (!ys(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Xm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: s, patchFlag: l } = t, p = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? fu(i, o, p) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const g = c[f];
        if (jf(o, i, g) && !Rs(p, g))
          return !0;
      }
    }
  } else
    return (a || s) && (!s || !s.$stable) ? !0 : i === o ? !1 : i ? o ? fu(i, o, p) : !0 : !!o;
  return !1;
}
function fu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (jf(t, e, r) && !Rs(n, r))
      return !0;
  }
  return !1;
}
function jf(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Xe(i) && Xe(a) ? !Li(i, a) : i !== a;
}
function Jm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Vf = {}, Gf = () => Object.create(Vf), Kf = (e) => Object.getPrototypeOf(e) === Vf;
function Qm(e, t, n, i = !1) {
  const a = {}, r = Gf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qf(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ em(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function ev(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, s = /* @__PURE__ */ Ye(a), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let g = c[f];
        if (Rs(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (l)
          if (Ze(r, g))
            w !== r[g] && (r[g] = w, p = !0);
          else {
            const A = Pt(g);
            a[A] = Gl(
              l,
              s,
              A,
              w,
              e,
              !1
            );
          }
        else
          w !== r[g] && (r[g] = w, p = !0);
      }
    }
  } else {
    qf(e, t, a, r) && (p = !0);
    let c;
    for (const f in s)
      (!t || // for camelCase
      !Ze(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = pi(f)) === f || !Ze(t, c))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (a[f] = Gl(
        l,
        s,
        f,
        void 0,
        e,
        !0
      )) : delete a[f]);
    if (r !== s)
      for (const f in r)
        (!t || !Ze(t, f)) && (delete r[f], p = !0);
  }
  p && ni(e.attrs, "set", "");
}
function qf(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, s;
  if (t)
    for (let l in t) {
      if (or(l))
        continue;
      const p = t[l];
      let c;
      a && Ze(a, c = Pt(l)) ? !r || !r.includes(c) ? n[c] = p : (s || (s = {}))[c] = p : Rs(e.emitsOptions, l) || (!(l in i) || p !== i[l]) && (i[l] = p, o = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ye(n), p = s || Ke;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      n[f] = Gl(
        a,
        l,
        f,
        p[f],
        e,
        !Ze(p, f)
      );
    }
  }
  return o;
}
function Gl(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const s = Ze(o, "default");
    if (s && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Re(l)) {
        const { propsDefaults: p } = a;
        if (n in p)
          i = p[n];
        else {
          const c = Vr(a);
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
    ] && (i === "" || i === pi(n)) && (i = !0));
  }
  return i;
}
const tv = /* @__PURE__ */ new WeakMap();
function Wf(e, t, n = !1) {
  const i = n ? tv : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, s = [];
  let l = !1;
  if (!Re(e)) {
    const c = (f) => {
      l = !0;
      const [g, w] = Wf(f, t, !0);
      mt(o, g), w && s.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Xe(e) && i.set(e, Sa), Sa;
  if (Se(r))
    for (let c = 0; c < r.length; c++) {
      const f = Pt(r[c]);
      pu(f) && (o[f] = Ke);
    }
  else if (r)
    for (const c in r) {
      const f = Pt(c);
      if (pu(f)) {
        const g = r[c], w = o[f] = Se(g) || Re(g) ? { type: g } : mt({}, g), A = w.type;
        let E = !1, k = !0;
        if (Se(A))
          for (let P = 0; P < A.length; ++P) {
            const R = A[P], I = Re(R) && R.name;
            if (I === "Boolean") {
              E = !0;
              break;
            } else I === "String" && (k = !1);
          }
        else
          E = Re(A) && A.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = E, w[
          1
          /* shouldCastTrue */
        ] = k, (E || Ze(w, "default")) && s.push(f);
      }
    }
  const p = [o, s];
  return Xe(e) && i.set(e, p), p;
}
function pu(e) {
  return e[0] !== "$" && !or(e);
}
const xc = (e) => e === "_" || e === "_ctx" || e === "$stable", Nc = (e) => Se(e) ? e.map(Hn) : [Hn(e)], nv = (e, t, n) => {
  if (t._n)
    return t;
  const i = Fe((...a) => Nc(t(...a)), n);
  return i._c = !1, i;
}, Yf = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (xc(a)) continue;
    const r = e[a];
    if (Re(r))
      t[a] = nv(a, r, i);
    else if (r != null) {
      const o = Nc(r);
      t[a] = () => o;
    }
  }
}, Zf = (e, t) => {
  const n = Nc(t);
  e.slots.default = () => n;
}, Xf = (e, t, n) => {
  for (const i in t)
    (n || !xc(i)) && (e[i] = t[i]);
}, iv = (e, t, n) => {
  const i = e.slots = Gf();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Xf(i, t, n), n && Yd(i, "_", a, !0)) : Yf(t, i);
  } else t && Zf(e, t);
}, av = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = Ke;
  if (i.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? r = !1 : Xf(a, t, n) : (r = !t.$stable, Yf(t, a)), o = t;
  } else t && (Zf(e, t), o = { default: 1 });
  if (r)
    for (const s in a)
      !xc(s) && o[s] == null && delete a[s];
}, Ut = cv;
function rv(e) {
  return ov(e);
}
function ov(e, t) {
  const n = Es();
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
    parentNode: f,
    nextSibling: g,
    setScopeId: w = gn,
    insertStaticContent: A
  } = e, E = (h, y, S, O = null, x = null, z = null, j = void 0, H = null, Q = !!y.dynamicChildren) => {
    if (h === y)
      return;
    h && !Yi(h, y) && (O = Ie(h), _e(h, x, z, !0), h = null), y.patchFlag === -2 && (Q = !1, y.dynamicChildren = null);
    const { type: B, ref: ge, shapeFlag: oe } = y;
    switch (B) {
      case jr:
        k(h, y, S, O);
        break;
      case At:
        P(h, y, S, O);
        break;
      case po:
        h == null && R(y, S, O, j);
        break;
      case be:
        q(
          h,
          y,
          S,
          O,
          x,
          z,
          j,
          H,
          Q
        );
        break;
      default:
        oe & 1 ? re(
          h,
          y,
          S,
          O,
          x,
          z,
          j,
          H,
          Q
        ) : oe & 6 ? ie(
          h,
          y,
          S,
          O,
          x,
          z,
          j,
          H,
          Q
        ) : (oe & 64 || oe & 128) && B.process(
          h,
          y,
          S,
          O,
          x,
          z,
          j,
          H,
          Q,
          gt
        );
    }
    ge != null && x ? cr(ge, h && h.ref, z, y || h, !y) : ge == null && h && h.ref != null && cr(h.ref, null, z, h, !0);
  }, k = (h, y, S, O) => {
    if (h == null)
      i(
        y.el = s(y.children),
        S,
        O
      );
    else {
      const x = y.el = h.el;
      y.children !== h.children && p(x, y.children);
    }
  }, P = (h, y, S, O) => {
    h == null ? i(
      y.el = l(y.children || ""),
      S,
      O
    ) : y.el = h.el;
  }, R = (h, y, S, O) => {
    [h.el, h.anchor] = A(
      h.children,
      y,
      S,
      O,
      h.el,
      h.anchor
    );
  }, I = ({ el: h, anchor: y }, S, O) => {
    let x;
    for (; h && h !== y; )
      x = g(h), i(h, S, O), h = x;
    i(y, S, O);
  }, $ = ({ el: h, anchor: y }) => {
    let S;
    for (; h && h !== y; )
      S = g(h), a(h), h = S;
    a(y);
  }, re = (h, y, S, O, x, z, j, H, Q) => {
    if (y.type === "svg" ? j = "svg" : y.type === "math" && (j = "mathml"), h == null)
      ue(
        y,
        S,
        O,
        x,
        z,
        j,
        H,
        Q
      );
    else {
      const B = h.el && h.el._isVueCE ? h.el : null;
      try {
        B && B._beginPatch(), K(
          h,
          y,
          x,
          z,
          j,
          H,
          Q
        );
      } finally {
        B && B._endPatch();
      }
    }
  }, ue = (h, y, S, O, x, z, j, H) => {
    let Q, B;
    const { props: ge, shapeFlag: oe, transition: me, dirs: Ee } = h;
    if (Q = h.el = o(
      h.type,
      z,
      ge && ge.is,
      ge
    ), oe & 8 ? c(Q, h.children) : oe & 16 && de(
      h.children,
      Q,
      null,
      O,
      x,
      nl(h, z),
      j,
      H
    ), Ee && Ui(h, null, O, "created"), ee(Q, h, h.scopeId, j, O), ge) {
      for (const Z in ge)
        Z !== "value" && !or(Z) && r(Q, Z, null, ge[Z], z, O);
      "value" in ge && r(Q, "value", null, ge.value, z), (B = ge.onVnodeBeforeMount) && Mn(B, O, h);
    }
    Ee && Ui(h, null, O, "beforeMount");
    const xe = sv(x, me);
    xe && me.beforeEnter(Q), i(Q, y, S), ((B = ge && ge.onVnodeMounted) || xe || Ee) && Ut(() => {
      B && Mn(B, O, h), xe && me.enter(Q), Ee && Ui(h, null, O, "mounted");
    }, x);
  }, ee = (h, y, S, O, x) => {
    if (S && w(h, S), O)
      for (let z = 0; z < O.length; z++)
        w(h, O[z]);
    if (x) {
      let z = x.subTree;
      if (y === z || ep(z.type) && (z.ssContent === y || z.ssFallback === y)) {
        const j = x.vnode;
        ee(
          h,
          j,
          j.scopeId,
          j.slotScopeIds,
          x.parent
        );
      }
    }
  }, de = (h, y, S, O, x, z, j, H, Q = 0) => {
    for (let B = Q; B < h.length; B++) {
      const ge = h[B] = H ? ti(h[B]) : Hn(h[B]);
      E(
        null,
        ge,
        y,
        S,
        O,
        x,
        z,
        j,
        H
      );
    }
  }, K = (h, y, S, O, x, z, j) => {
    const H = y.el = h.el;
    let { patchFlag: Q, dynamicChildren: B, dirs: ge } = y;
    Q |= h.patchFlag & 16;
    const oe = h.props || Ke, me = y.props || Ke;
    let Ee;
    if (S && Bi(S, !1), (Ee = me.onVnodeBeforeUpdate) && Mn(Ee, S, y, h), ge && Ui(y, h, S, "beforeUpdate"), S && Bi(S, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    B && (!h.dynamicChildren || h.dynamicChildren.length !== B.length) && (Q = 0, j = !1, B = null), (oe.innerHTML && me.innerHTML == null || oe.textContent && me.textContent == null) && c(H, ""), B ? se(
      h.dynamicChildren,
      B,
      H,
      S,
      O,
      nl(y, x),
      z
    ) : j || te(
      h,
      y,
      H,
      null,
      S,
      O,
      nl(y, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        ve(H, oe, me, S, x);
      else if (Q & 2 && oe.class !== me.class && r(H, "class", null, me.class, x), Q & 4 && r(H, "style", oe.style, me.style, x), Q & 8) {
        const xe = y.dynamicProps;
        for (let Z = 0; Z < xe.length; Z++) {
          const X = xe[Z], le = oe[X], ke = me[X];
          (ke !== le || X === "value") && r(H, X, le, ke, x, S);
        }
      }
      Q & 1 && h.children !== y.children && c(H, y.children);
    } else !j && B == null && ve(H, oe, me, S, x);
    ((Ee = me.onVnodeUpdated) || ge) && Ut(() => {
      Ee && Mn(Ee, S, y, h), ge && Ui(y, h, S, "updated");
    }, O);
  }, se = (h, y, S, O, x, z, j) => {
    for (let H = 0; H < y.length; H++) {
      const Q = h[H], B = y[H], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yi(Q, B) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? f(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      E(
        Q,
        B,
        ge,
        null,
        O,
        x,
        z,
        j,
        !0
      );
    }
  }, ve = (h, y, S, O, x) => {
    if (y !== S) {
      if (y !== Ke)
        for (const z in y)
          !or(z) && !(z in S) && r(
            h,
            z,
            y[z],
            null,
            x,
            O
          );
      for (const z in S) {
        if (or(z)) continue;
        const j = S[z], H = y[z];
        j !== H && z !== "value" && r(h, z, H, j, x, O);
      }
      "value" in S && r(h, "value", y.value, S.value, x);
    }
  }, q = (h, y, S, O, x, z, j, H, Q) => {
    const B = y.el = h ? h.el : s(""), ge = y.anchor = h ? h.anchor : s("");
    let { patchFlag: oe, dynamicChildren: me, slotScopeIds: Ee } = y;
    Ee && (H = H ? H.concat(Ee) : Ee), h == null ? (i(B, S, O), i(ge, S, O), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      S,
      ge,
      x,
      z,
      j,
      H,
      Q
    )) : oe > 0 && oe & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === me.length ? (se(
      h.dynamicChildren,
      me,
      S,
      x,
      z,
      j,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || x && y === x.subTree) && Oc(
      h,
      y,
      !0
      /* shallow */
    )) : te(
      h,
      y,
      S,
      ge,
      x,
      z,
      j,
      H,
      Q
    );
  }, ie = (h, y, S, O, x, z, j, H, Q) => {
    y.slotScopeIds = H, h == null ? y.shapeFlag & 512 ? x.ctx.activate(
      y,
      S,
      O,
      j,
      Q
    ) : F(
      y,
      S,
      O,
      x,
      z,
      j,
      Q
    ) : M(h, y, Q);
  }, F = (h, y, S, O, x, z, j) => {
    const H = h.component = pv(
      h,
      O,
      x
    );
    if (Os(h) && (H.ctx.renderer = gt), hv(H, !1, j), H.asyncDep) {
      if (x && x.registerDep(H, Y, j), !h.el) {
        const Q = H.subTree = Ae(At);
        P(null, Q, y, S), h.placeholder = Q.el;
      }
    } else
      Y(
        H,
        h,
        y,
        S,
        x,
        z,
        j
      );
  }, M = (h, y, S) => {
    const O = y.component = h.component;
    if (Xm(h, y, S))
      if (O.asyncDep && !O.asyncResolved) {
        ae(O, y, S);
        return;
      } else
        O.next = y, O.update();
    else
      y.el = h.el, O.vnode = y;
  }, Y = (h, y, S, O, x, z, j) => {
    const H = () => {
      if (h.isMounted) {
        let { next: oe, bu: me, u: Ee, parent: xe, vnode: Z } = h;
        {
          const De = Jf(h);
          if (De) {
            oe && (oe.el = Z.el, ae(h, oe, j)), De.asyncDep.then(() => {
              Ut(() => {
                h.isUnmounted || B();
              }, x);
            });
            return;
          }
        }
        let X = oe, le;
        Bi(h, !1), oe ? (oe.el = Z.el, ae(h, oe, j)) : oe = Z, me && fo(me), (le = oe.props && oe.props.onVnodeBeforeUpdate) && Mn(le, xe, oe, Z), Bi(h, !0);
        const ke = du(h), Le = h.subTree;
        h.subTree = ke, E(
          Le,
          ke,
          // parent may have changed if it's in a teleport
          f(Le.el),
          // anchor may have changed if it's in a fragment
          Ie(Le),
          h,
          x,
          z
        ), oe.el = ke.el, X === null && Jm(h, ke.el), Ee && Ut(Ee, x), (le = oe.props && oe.props.onVnodeUpdated) && Ut(
          () => Mn(le, xe, oe, Z),
          x
        );
      } else {
        let oe;
        const { el: me, props: Ee } = y, { bm: xe, m: Z, parent: X, root: le, type: ke } = h, Le = Aa(y);
        Bi(h, !1), xe && fo(xe), !Le && (oe = Ee && Ee.onVnodeBeforeMount) && Mn(oe, X, y), Bi(h, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            ke,
            h.parent ? h.parent.type : void 0
          );
          const De = h.subTree = du(h);
          E(
            null,
            De,
            S,
            O,
            h,
            x,
            z
          ), y.el = De.el;
        }
        if (Z && Ut(Z, x), !Le && (oe = Ee && Ee.onVnodeMounted)) {
          const De = y;
          Ut(
            () => Mn(oe, X, De),
            x
          );
        }
        (y.shapeFlag & 256 || X && Aa(X.vnode) && X.vnode.shapeFlag & 256) && h.a && Ut(h.a, x), h.isMounted = !0, y = S = O = null;
      }
    };
    h.scope.on();
    const Q = h.effect = new Qd(H);
    h.scope.off();
    const B = h.update = Q.run.bind(Q), ge = h.job = Q.runIfDirty.bind(Q);
    ge.i = h, ge.id = h.uid, Q.scheduler = () => Sc(ge), Bi(h, !0), B();
  }, ae = (h, y, S) => {
    y.component = h;
    const O = h.vnode.props;
    h.vnode = y, h.next = null, ev(h, y.props, O, S), av(h, y.children, S), ci(), tu(h), ui();
  }, te = (h, y, S, O, x, z, j, H, Q = !1) => {
    const B = h && h.children, ge = h ? h.shapeFlag : 0, oe = y.children, { patchFlag: me, shapeFlag: Ee } = y;
    if (me > 0) {
      if (me & 128) {
        he(
          B,
          oe,
          S,
          O,
          x,
          z,
          j,
          H,
          Q
        );
        return;
      } else if (me & 256) {
        pe(
          B,
          oe,
          S,
          O,
          x,
          z,
          j,
          H,
          Q
        );
        return;
      }
    }
    Ee & 8 ? (ge & 16 && Je(B, x, z), oe !== B && c(S, oe)) : ge & 16 ? Ee & 16 ? he(
      B,
      oe,
      S,
      O,
      x,
      z,
      j,
      H,
      Q
    ) : Je(B, x, z, !0) : (ge & 8 && c(S, ""), Ee & 16 && de(
      oe,
      S,
      O,
      x,
      z,
      j,
      H,
      Q
    ));
  }, pe = (h, y, S, O, x, z, j, H, Q) => {
    h = h || Sa, y = y || Sa;
    const B = h.length, ge = y.length, oe = Math.min(B, ge);
    let me;
    for (me = 0; me < oe; me++) {
      const Ee = y[me] = Q ? ti(y[me]) : Hn(y[me]);
      E(
        h[me],
        Ee,
        S,
        null,
        x,
        z,
        j,
        H,
        Q
      );
    }
    B > ge ? Je(
      h,
      x,
      z,
      !0,
      !1,
      oe
    ) : de(
      y,
      S,
      O,
      x,
      z,
      j,
      H,
      Q,
      oe
    );
  }, he = (h, y, S, O, x, z, j, H, Q) => {
    let B = 0;
    const ge = y.length;
    let oe = h.length - 1, me = ge - 1;
    for (; B <= oe && B <= me; ) {
      const Ee = h[B], xe = y[B] = Q ? ti(y[B]) : Hn(y[B]);
      if (Yi(Ee, xe))
        E(
          Ee,
          xe,
          S,
          null,
          x,
          z,
          j,
          H,
          Q
        );
      else
        break;
      B++;
    }
    for (; B <= oe && B <= me; ) {
      const Ee = h[oe], xe = y[me] = Q ? ti(y[me]) : Hn(y[me]);
      if (Yi(Ee, xe))
        E(
          Ee,
          xe,
          S,
          null,
          x,
          z,
          j,
          H,
          Q
        );
      else
        break;
      oe--, me--;
    }
    if (B > oe) {
      if (B <= me) {
        const Ee = me + 1, xe = Ee < ge ? y[Ee].el : O;
        for (; B <= me; )
          E(
            null,
            y[B] = Q ? ti(y[B]) : Hn(y[B]),
            S,
            xe,
            x,
            z,
            j,
            H,
            Q
          ), B++;
      }
    } else if (B > me)
      for (; B <= oe; )
        _e(h[B], x, z, !0), B++;
    else {
      const Ee = B, xe = B, Z = /* @__PURE__ */ new Map();
      for (B = xe; B <= me; B++) {
        const lt = y[B] = Q ? ti(y[B]) : Hn(y[B]);
        lt.key != null && Z.set(lt.key, B);
      }
      let X, le = 0;
      const ke = me - xe + 1;
      let Le = !1, De = 0;
      const ze = new Array(ke);
      for (B = 0; B < ke; B++) ze[B] = 0;
      for (B = Ee; B <= oe; B++) {
        const lt = h[B];
        if (le >= ke) {
          _e(lt, x, z, !0);
          continue;
        }
        let tt;
        if (lt.key != null)
          tt = Z.get(lt.key);
        else
          for (X = xe; X <= me; X++)
            if (ze[X - xe] === 0 && Yi(lt, y[X])) {
              tt = X;
              break;
            }
        tt === void 0 ? _e(lt, x, z, !0) : (ze[tt - xe] = B + 1, tt >= De ? De = tt : Le = !0, E(
          lt,
          y[tt],
          S,
          null,
          x,
          z,
          j,
          H,
          Q
        ), le++);
      }
      const it = Le ? lv(ze) : Sa;
      for (X = it.length - 1, B = ke - 1; B >= 0; B--) {
        const lt = xe + B, tt = y[lt], Mt = y[lt + 1], nn = lt + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mt.el || Qf(Mt)
        ) : O;
        ze[B] === 0 ? E(
          null,
          tt,
          S,
          nn,
          x,
          z,
          j,
          H,
          Q
        ) : Le && (X < 0 || B !== it[X] ? Ce(tt, S, nn, 2) : X--);
      }
    }
  }, Ce = (h, y, S, O, x = null) => {
    const { el: z, type: j, transition: H, children: Q, shapeFlag: B } = h;
    if (B & 6) {
      Ce(h.component.subTree, y, S, O);
      return;
    }
    if (B & 128) {
      h.suspense.move(y, S, O);
      return;
    }
    if (B & 64) {
      j.move(h, y, S, gt);
      return;
    }
    if (j === be) {
      i(z, y, S);
      for (let oe = 0; oe < Q.length; oe++)
        Ce(Q[oe], y, S, O);
      i(h.anchor, y, S);
      return;
    }
    if (j === po) {
      I(h, y, S);
      return;
    }
    if (O !== 2 && B & 1 && H)
      if (O === 0)
        H.persisted && !z[mn] ? i(z, y, S) : (H.beforeEnter(z), i(z, y, S), Ut(() => H.enter(z), x));
      else {
        const { leave: oe, delayLeave: me, afterLeave: Ee } = H, xe = () => {
          h.ctx.isUnmounted ? a(z) : i(z, y, S);
        }, Z = () => {
          const X = z._isLeaving || !!z[mn];
          z._isLeaving && z[mn](
            !0
            /* cancelled */
          ), H.persisted && !X ? xe() : oe(z, () => {
            xe(), Ee && Ee();
          });
        };
        me ? me(z, xe, Z) : Z();
      }
    else
      i(z, y, S);
  }, _e = (h, y, S, O = !1, x = !1) => {
    const {
      type: z,
      props: j,
      ref: H,
      children: Q,
      dynamicChildren: B,
      shapeFlag: ge,
      patchFlag: oe,
      dirs: me,
      cacheIndex: Ee,
      memo: xe
    } = h;
    if (oe === -2 && (x = !1), H != null && (ci(), cr(H, null, S, h, !0), ui()), Ee != null && (y.renderCache[Ee] = void 0), ge & 256) {
      y.ctx.deactivate(h);
      return;
    }
    const Z = ge & 1 && me, X = !Aa(h);
    let le;
    if (X && (le = j && j.onVnodeBeforeUnmount) && Mn(le, y, h), ge & 6)
      nt(h.component, S, O);
    else {
      if (ge & 128) {
        h.suspense.unmount(S, O);
        return;
      }
      Z && Ui(h, null, y, "beforeUnmount"), ge & 64 ? h.type.remove(
        h,
        y,
        S,
        gt,
        O
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== be || oe > 0 && oe & 64) ? Je(
        B,
        y,
        S,
        !1,
        !0
      ) : (z === be && oe & 384 || !x && ge & 16) && Je(Q, y, S), O && Ve(h);
    }
    const ke = xe != null && Ee == null;
    (X && (le = j && j.onVnodeUnmounted) || Z || ke) && Ut(() => {
      le && Mn(le, y, h), Z && Ui(h, null, y, "unmounted"), ke && (h.el = null);
    }, S);
  }, Ve = (h) => {
    const { type: y, el: S, anchor: O, transition: x } = h;
    if (y === be) {
      Te(S, O);
      return;
    }
    if (y === po) {
      $(h);
      return;
    }
    const z = () => {
      a(S), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (h.shapeFlag & 1 && x && !x.persisted) {
      const { leave: j, delayLeave: H } = x, Q = () => j(S, z);
      H ? H(h.el, z, Q) : Q();
    } else
      z();
  }, Te = (h, y) => {
    let S;
    for (; h !== y; )
      S = g(h), a(h), h = S;
    a(y);
  }, nt = (h, y, S) => {
    const { bum: O, scope: x, job: z, subTree: j, um: H, m: Q, a: B } = h;
    hu(Q), hu(B), O && fo(O), x.stop(), z && (z.flags |= 8, _e(j, h, y, S)), H && Ut(H, y), Ut(() => {
      h.isUnmounted = !0;
    }, y);
  }, Je = (h, y, S, O = !1, x = !1, z = 0) => {
    for (let j = z; j < h.length; j++)
      _e(h[j], y, S, O, x);
  }, Ie = (h) => {
    if (h.shapeFlag & 6)
      return Ie(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const y = g(h.anchor || h.el), S = y && y[Ef];
    return S ? g(S) : y;
  };
  let st = !1;
  const Qe = (h, y, S) => {
    let O;
    h == null ? y._vnode && (_e(y._vnode, null, null, !0), O = y._vnode.component) : E(
      y._vnode || null,
      h,
      y,
      null,
      null,
      null,
      S
    ), y._vnode = h, st || (st = !0, tu(O), _f(), st = !1);
  }, gt = {
    p: E,
    um: _e,
    m: Ce,
    r: Ve,
    mt: F,
    mc: de,
    pc: te,
    pbc: se,
    n: Ie,
    o: e
  };
  return {
    render: Qe,
    hydrate: void 0,
    createApp: Km(Qe)
  };
}
function nl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let s = a[r];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[r] = ti(a[r]), s.el = o.el), !n && s.patchFlag !== -2 && Oc(o, s)), s.type === jr && (s.patchFlag === -1 && (s = a[r] = ti(s)), s.el = o.el), s.type === At && !s.el && (s.el = o.el);
    }
}
function lv(e) {
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
function Jf(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jf(t);
}
function hu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qf(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qf(t.subTree) : null;
}
const ep = (e) => e.__isSuspense;
function cv(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : yf(e);
}
const be = /* @__PURE__ */ Symbol.for("v-fgt"), jr = /* @__PURE__ */ Symbol.for("v-txt"), At = /* @__PURE__ */ Symbol.for("v-cmt"), po = /* @__PURE__ */ Symbol.for("v-stc"), si = [];
let tn = null;
function C(e = !1) {
  si.push(tn = e ? null : []);
}
function Lc() {
  si.pop(), tn = si[si.length - 1] || null;
}
let kr = 1;
function Ao(e, t = !1) {
  kr += e, e < 0 && tn && t && (tn.hasOnce = !0);
}
function tp(e) {
  return e.dynamicChildren = kr > 0 ? tn || Sa : null, Lc(), kr > 0 && tn && tn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return tp(
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
function Be(e, t, n, i, a) {
  return tp(
    Ae(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function xr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const np = ({ key: e }) => e ?? null, ho = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ot(e) || /* @__PURE__ */ Dt(e) || Re(e) ? { i: kt, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, i = 0, a = null, r = e === be ? 0 : 1, o = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && np(t),
    ref: t && ho(t),
    scopeId: ks,
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
    ctx: kt
  };
  return s ? (ko(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= ot(n) ? 8 : 16), kr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && tn.push(l), l;
}
const Ae = uv;
function uv(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Pf) && (e = At), xr(e)) {
    const s = Ri(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(s, n), kr > 0 && !r && tn && (s.shapeFlag & 6 ? tn[tn.indexOf(e)] = s : tn.push(s)), s.patchFlag = -2, s;
  }
  if (bv(e) && (e = e.__vccOpts), t) {
    t = Nr(t);
    let { class: s, style: l } = t;
    s && !ot(s) && (t.class = Oe(s)), Xe(l) && (/* @__PURE__ */ Ec(l) && !Se(l) && (l = mt({}, l)), t.style = bn(l));
  }
  const o = ot(e) ? 1 : ep(e) ? 128 : Ns(e) ? 64 : Xe(e) ? 4 : Re(e) ? 2 : 0;
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
function Nr(e) {
  return e ? /* @__PURE__ */ Ec(e) || Kf(e) ? mt({}, e) : e : null;
}
function Ri(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: s, transition: l } = e, p = t ? Ft(a || {}, t) : a, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && np(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(ho(t)) : [r, ho(t)] : ho(t)
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
    patchFlag: t && e.type !== be ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ri(e.ssContent),
    ssFallback: e.ssFallback && Ri(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Ar(
    c,
    l.clone(c)
  ), c;
}
function Pe(e = " ", t = 0) {
  return Ae(jr, null, e, t);
}
function G(e = "", t = !1) {
  return t ? (C(), Be(At, null, e)) : Ae(At, null, e);
}
function Hn(e) {
  return e == null || typeof e == "boolean" ? Ae(At) : Se(e) ? Ae(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : xr(e) ? ti(e) : Ae(jr, null, String(e));
}
function ti(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ri(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ko(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Kf(t) ? t._ctx = kt : a === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Re(t)) {
    if (i & 65) {
      ko(e, { default: t });
      return;
    }
    t = { default: t, _ctx: kt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Pe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ft(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Oe([t.class, i.class]));
      else if (a === "style")
        t.style = bn([t.style, i.style]);
      else if (bs(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ys(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Mn(e, t, n, i = null) {
  _n(e, t, 7, [
    n,
    i
  ]);
}
const dv = zf();
let fv = 0;
function pv(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || dv, r = {
    uid: fv++,
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
    scope: new Dh(
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
    propsOptions: Wf(i, a),
    emitsOptions: Hf(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ke,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ke,
    data: Ke,
    props: Ke,
    attrs: Ke,
    slots: Ke,
    refs: Ke,
    setupState: Ke,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qm.bind(null, r), e.ce && e.ce(r), r;
}
let It = null;
const sa = () => It || kt;
let xo, Or;
{
  const e = Es(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  xo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => It = n
  ), Or = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lr = n
  );
}
const Vr = (e) => {
  const t = It;
  return xo(e), e.scope.on(), () => {
    e.scope.off(), xo(t);
  };
}, mu = () => {
  It && It.scope.off(), xo(null);
};
function ip(e) {
  return e.vnode.shapeFlag & 4;
}
let Lr = !1;
function hv(e, t = !1, n = !1) {
  t && Or(t);
  const { props: i, children: a } = e.vnode, r = ip(e);
  Qm(e, i, r, t), iv(e, a, n || t);
  const o = r ? mv(e, t) : void 0;
  return t && Or(!1), o;
}
function mv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fm);
  const { setup: i } = n;
  if (i) {
    ci();
    const a = e.setupContext = i.length > 1 ? rp(e) : null, r = Vr(e), o = Br(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), s = Kd(o);
    if (ui(), r(), (s || e.sp) && !Aa(e) && Of(e), s) {
      if (o.then(mu, mu), t)
        return o.then((l) => {
          Or(!0);
          try {
            vu(e, l, t);
          } finally {
            Or(!1);
          }
        }).catch((l) => {
          As(l, e, 0);
        });
      e.asyncDep = o;
    } else
      vu(e, o);
  } else
    ap(e);
}
function vu(e, t, n) {
  Re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = vf(t)), ap(e);
}
function ap(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || gn);
  {
    const a = Vr(e);
    ci();
    try {
      Um(e);
    } finally {
      ui(), a();
    }
  }
}
const vv = {
  get(e, t) {
    return Lt(e, "get", ""), e[t];
  }
};
function rp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vf(tm(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ur)
        return ur[n](e);
    },
    has(t, n) {
      return n in t || n in ur;
    }
  })) : e.proxy;
}
function gv(e, t = !0) {
  return Re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bv(e) {
  return Re(e) && "__vccOpts" in e;
}
const W = (e, t) => /* @__PURE__ */ sm(e, t, Lr);
function Kt(e, t, n) {
  try {
    Ao(-1);
    const i = arguments.length;
    return i === 2 ? Xe(t) && !Se(t) ? xr(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && xr(n) && (n = [n]), Ae(e, t, n));
  } finally {
    Ao(1);
  }
}
const yv = "3.5.42", _v = gn;
let Kl;
const gu = typeof window < "u" && window.trustedTypes;
if (gu)
  try {
    Kl = /* @__PURE__ */ gu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const op = Kl ? (e) => Kl.createHTML(e) : (e) => e, wv = "http://www.w3.org/2000/svg", Cv = "http://www.w3.org/1998/Math/MathML", ei = typeof document < "u" ? document : null, bu = ei && /* @__PURE__ */ ei.createElement("template"), Ev = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ei.createElementNS(wv, e) : t === "mathml" ? ei.createElementNS(Cv, e) : n ? ei.createElement(e, { is: n }) : ei.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ei.createTextNode(e),
  createComment: (e) => ei.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ei.querySelector(e),
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
      bu.innerHTML = op(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const s = bu.content;
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
}, yi = "transition", Ga = "animation", Rr = /* @__PURE__ */ Symbol("_vtc"), sp = {
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
}, Sv = /* @__PURE__ */ mt(
  {},
  Tf,
  sp
), Tv = (e) => (e.displayName = "Transition", e.props = Sv, e), Av = /* @__PURE__ */ Tv(
  (e, { slots: t }) => Kt(Tm, kv(e), t)
), Hi = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, yu = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kv(e) {
  const t = {};
  for (const q in e)
    q in sp || (t[q] = e[q]);
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
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, A = xv(a), E = A && A[0], k = A && A[1], {
    onBeforeEnter: P,
    onEnter: R,
    onEnterCancelled: I,
    onLeave: $,
    onLeaveCancelled: re,
    onBeforeAppear: ue = P,
    onAppear: ee = R,
    onAppearCancelled: de = I
  } = t, K = (q, ie, F, M) => {
    q._enterCancelled = M, ji(q, ie ? c : s), ji(q, ie ? p : o), F && F();
  }, se = (q, ie) => {
    q._isLeaving = !1, ji(q, f), ji(q, w), ji(q, g), ie && ie();
  }, ve = (q) => (ie, F) => {
    const M = q ? ee : R, Y = () => K(ie, q, F);
    Hi(M, [ie, Y]), _u(() => {
      ji(ie, q ? l : r), Zn(ie, q ? c : s), yu(M) || wu(ie, i, E, Y);
    });
  };
  return mt(t, {
    onBeforeEnter(q) {
      Hi(P, [q]), Zn(q, r), Zn(q, o);
    },
    onBeforeAppear(q) {
      Hi(ue, [q]), Zn(q, l), Zn(q, p);
    },
    onEnter: ve(!1),
    onAppear: ve(!0),
    onLeave(q, ie) {
      q._isLeaving = !0;
      const F = () => se(q, ie);
      Zn(q, f), q._enterCancelled ? (Zn(q, g), Su(q)) : (Su(q), Zn(q, g)), _u(() => {
        q._isLeaving && (ji(q, f), Zn(q, w), yu($) || wu(q, i, k, F));
      }), Hi($, [q, F]);
    },
    onEnterCancelled(q) {
      K(q, !1, void 0, !0), Hi(I, [q]);
    },
    onAppearCancelled(q) {
      K(q, !0, void 0, !0), Hi(de, [q]);
    },
    onLeaveCancelled(q) {
      se(q), Hi(re, [q]);
    }
  });
}
function xv(e) {
  if (e == null)
    return null;
  if (Xe(e))
    return [il(e.enter), il(e.leave)];
  {
    const t = il(e);
    return [t, t];
  }
}
function il(e) {
  return Th(e);
}
function Zn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Rr] || (e[Rr] = /* @__PURE__ */ new Set())).add(t);
}
function ji(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Rr];
  n && (n.delete(t), n.size || (e[Rr] = void 0));
}
function _u(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Nv = 0;
function wu(e, t, n, i) {
  const a = e._endId = ++Nv, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: s, propCount: l } = Ov(e, t);
  if (!o)
    return i();
  const p = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(p, g), r();
  }, g = (w) => {
    w.target === e && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, s + 1), e.addEventListener(p, g);
}
function Ov(e, t) {
  const n = window.getComputedStyle(e), i = (A) => (n[A] || "").split(", "), a = i(`${yi}Delay`), r = i(`${yi}Duration`), o = Cu(a, r), s = i(`${Ga}Delay`), l = i(`${Ga}Duration`), p = Cu(s, l);
  let c = null, f = 0, g = 0;
  t === yi ? o > 0 && (c = yi, f = o, g = r.length) : t === Ga ? p > 0 && (c = Ga, f = p, g = l.length) : (f = Math.max(o, p), c = f > 0 ? o > p ? yi : Ga : null, g = c ? c === yi ? r.length : l.length : 0);
  const w = c === yi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${yi}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: g,
    hasTransform: w
  };
}
function Cu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Eu(n) + Eu(e[i])));
}
function Eu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Su(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Lv(e, t, n) {
  const i = e[Rr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const No = /* @__PURE__ */ Symbol("_vod"), lp = /* @__PURE__ */ Symbol("_vsh"), xa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[No] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ka(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ka(e, !0), i.enter(e)) : i.leave(e, () => {
      Ka(e, !1);
    }) : Ka(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ka(e, t);
  }
};
function Ka(e, t) {
  e.style.display = t ? e[No] : "none", e[lp] = !t;
}
const cp = /* @__PURE__ */ Symbol("");
function Rv(e) {
  const t = sa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Oo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Oo(t.ce, a) : ql(t.subTree, a), n(a);
  };
  If(() => {
    yf(i);
  }), Pi(() => {
    Yt(i, gn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Hr(() => a.disconnect());
  });
}
function ql(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      ql(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Oo(e.el, t);
  else if (e.type === be)
    e.children.forEach((n) => ql(n, t));
  else if (e.type === po) {
    let { el: n, anchor: i } = e;
    for (; n && (Oo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Oo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Ph(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[cp] = i;
  }
}
const Iv = /(?:^|;)\s*display\s*:/;
function Pv(e, t, n) {
  const i = e.style, a = ot(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (ot(t))
        for (const o of t.split(";")) {
          const s = o.slice(0, o.indexOf(":")).trim();
          n[s] == null && nr(i, s, "");
        }
      else
        for (const o in t)
          n[o] == null && nr(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const s = n[o];
      s != null ? Fv(
        e,
        o,
        !ot(t) && t ? t[o] : void 0,
        s
      ) || nr(i, o, s) : nr(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[cp];
      o && (n += ";" + o), i.cssText = n, r = Iv.test(n);
    }
  } else t && e.removeAttribute("style");
  No in e && (e[No] = r ? i.display : "", e[lp] && (i.display = "none"));
}
const to = /\s*!important$/;
function nr(e, t, n) {
  if (Se(n))
    n.forEach((i) => nr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    to.test(n) ? e.setProperty(t, n.replace(to, ""), "important") : e.setProperty(t, n);
  else {
    const i = Dv(e, t);
    to.test(n) ? e.setProperty(
      pi(i),
      n.replace(to, ""),
      "important"
    ) : e[i] = n;
  }
}
const Tu = ["Webkit", "Moz", "ms"], al = {};
function Dv(e, t) {
  const n = al[t];
  if (n)
    return n;
  let i = Pt(t);
  if (i !== "filter" && i in e)
    return al[t] = i;
  i = ws(i);
  for (let a = 0; a < Tu.length; a++) {
    const r = Tu[a] + i;
    if (r in e)
      return al[t] = r;
  }
  return t;
}
function Fv(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ot(i) && n === i;
}
const Au = "http://www.w3.org/1999/xlink";
function ku(e, t, n, i, a, r = Lh(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Au, t.slice(6, t.length)) : e.setAttributeNS(Au, t, n) : n == null || r && !Zd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Rn(n) ? String(n) : n
  );
}
function xu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? op(n) : n);
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
    s === "boolean" ? n = Zd(n) : n == null && s === "string" ? (n = "", o = !0) : s === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Zi(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Mv(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Nu = /* @__PURE__ */ Symbol("_vei");
function $v(e, t, n, i, a = null) {
  const r = e[Nu] || (e[Nu] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [s, l] = Bv(t);
    if (i) {
      const p = r[t] = Vv(
        i,
        a
      );
      Zi(e, s, p, l);
    } else o && (Mv(e, s, o, l), r[t] = void 0);
  }
}
const zv = /(Once|Passive|Capture)$/, Uv = /^on:?(?:Once|Passive|Capture)$/;
function Bv(e) {
  let t, n;
  for (; (n = e.match(zv)) && !Uv.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : pi(e.slice(2)), t];
}
let rl = 0;
const Hv = /* @__PURE__ */ Promise.resolve(), jv = () => rl || (Hv.then(() => rl = 0), rl = Date.now());
function Vv(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Se(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const o = a.slice(), s = [i];
      for (let l = 0; l < o.length && !i._stopped; l++) {
        const p = o[l];
        p && _n(
          p,
          t,
          5,
          s
        );
      }
    } else
      _n(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = jv(), n;
}
const Ou = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gv = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Lv(e, i, o) : t === "style" ? Pv(e, n, i) : bs(t) ? ys(t) || $v(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kv(e, t, i, o)) ? (xu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ku(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ot(i))) ? xu(e, Pt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ku(e, t, i, o));
};
function Kv(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ou(t) && Re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ou(t) && ot(n) ? !1 : t in e;
}
function qv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Pt(t);
  return Array.isArray(n) ? n.some((a) => Pt(a) === i) : Object.keys(n).some((a) => Pt(a) === i);
}
const Lo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => fo(t, n) : t;
};
function Wv(e) {
  e.target.composing = !0;
}
function Lu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ji = /* @__PURE__ */ Symbol("_assign"), no = /* @__PURE__ */ Symbol("_initialValue");
function ol(e, t, n) {
  return t && (e = e.trim()), n && (e = Cs(e)), e;
}
const Wl = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[no] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[no] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ji] = Lo(a);
    const r = i || a.props && a.props.type === "number";
    Zi(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ji](ol(e.value, n, r));
    }), (n || r) && Zi(e, "change", () => {
      e.value = ol(e.value, n, r);
    }), t || (Zi(e, "compositionstart", Wv), Zi(e, "compositionend", Lu), Zi(e, "change", Lu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[no];
    delete e[no], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ji](ol(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Ji] = Lo(o), e.composing) return;
    const s = (r || e.type === "number") && !/^0\d/.test(e.value) ? Cs(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Zt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, Zi(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Cs(Ro(l)) : Ro(l)
      ), r = e.multiple, o = r ? ra(e._modelValue) ? new Set(a) : a : a[0], s = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[Ji](o);
      } finally {
        ia(() => {
          e._pendingValue === s && (e._pendingValue = void 0);
        });
      }
    }), e[Ji] = Lo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ru(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ji] = Lo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Yv(t, n[1], n[0])) && Ru(e, t);
  }
};
function Yv(e, t, n) {
  if (!n || Se(e)) return Li(e, t);
  if (ra(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Ru(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !ra(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], s = Ro(o);
      if (n)
        if (i) {
          const l = typeof s;
          l === "string" || l === "number" ? o.selected = t.some((p) => String(p) === String(s)) : o.selected = Ih(t, s) > -1;
        } else
          o.selected = t.has(s);
      else if (Li(Ro(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ro(e) {
  return "_value" in e ? e._value : e.value;
}
const Zv = ["ctrl", "shift", "alt", "meta"], Xv = {
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
  exact: (e, t) => Zv.some((n) => e[`${n}Key`] && !t.includes(n))
}, ut = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const s = Xv[t[o]];
      if (s && s(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Jv = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = pi(a.key);
    if (t.some(
      (o) => o === r || Jv[o] === r
    ))
      return e(a);
  }));
}, Qv = /* @__PURE__ */ mt({ patchProp: Gv }, Ev);
let Iu;
function eg() {
  return Iu || (Iu = rv(Qv));
}
const tg = ((...e) => {
  const t = eg().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = ig(i);
    if (!a) return;
    const r = t._component;
    !Re(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, ng(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function ng(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ig(e) {
  return ot(e) ? document.querySelector(e) : e;
}
function Rc(e, t, n) {
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
function Pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function ag(e) {
  if (Array.isArray(e)) return e;
}
function rg(e, t) {
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
function og() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sg(e, t) {
  return ag(e) || rg(e, t) || lg(e, t) || og();
}
function lg(e, t) {
  if (e) {
    if (typeof e == "string") return Pu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pu(e, t) : void 0;
  }
}
const up = Object.entries, Du = Object.setPrototypeOf, cg = Object.isFrozen, ug = Object.getPrototypeOf, dg = Object.getOwnPropertyDescriptor;
let bt = Object.freeze, _t = Object.seal, Ca = Object.create, dp = typeof Reflect < "u" && Reflect, Yl = dp.apply, Zl = dp.construct;
bt || (bt = function(t) {
  return t;
});
_t || (_t = function(t) {
  return t;
});
Yl || (Yl = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Zl || (Zl = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const qi = vt(Array.prototype.forEach), fg = vt(Array.prototype.lastIndexOf), Fu = vt(Array.prototype.pop), qa = vt(Array.prototype.push), pg = vt(Array.prototype.splice), Na = Array.isArray, ir = vt(String.prototype.toLowerCase), sl = vt(String.prototype.toString), Mu = vt(String.prototype.match), Wa = vt(String.prototype.replace), $u = vt(String.prototype.indexOf), hg = vt(String.prototype.trim), mg = vt(Number.prototype.toString), vg = vt(Boolean.prototype.toString), zu = typeof BigInt > "u" ? null : vt(BigInt.prototype.toString), Uu = typeof Symbol > "u" ? null : vt(Symbol.prototype.toString), qt = vt(Object.prototype.hasOwnProperty), Ya = vt(Object.prototype.toString), Nt = vt(RegExp.prototype.test), Vi = gg(TypeError);
function vt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Yl(e, t, i);
  };
}
function gg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Zl(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ir;
  if (Du && Du(e, null), !Na(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (cg(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function bg(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function Jt(e) {
  const t = Ca(null);
  for (const i of up(e)) {
    var n = sg(i, 2);
    const a = n[0], r = n[1];
    qt(e, a) && (Na(r) ? t[a] = bg(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = Jt(r) : t[a] = r);
  }
  return t;
}
function yg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mg(e);
    case "boolean":
      return vg(e);
    case "bigint":
      return zu ? zu(e) : "0";
    case "symbol":
      return Uu ? Uu(e) : "Symbol()";
    case "undefined":
      return Ya(e);
    case "function":
    case "object": {
      if (e === null)
        return Ya(e);
      const t = e, n = xn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Ya(i);
      }
      return Ya(e);
    }
    default:
      return Ya(e);
  }
}
function xn(e, t) {
  for (; e !== null; ) {
    const i = dg(e, t);
    if (i) {
      if (i.get)
        return vt(i.get);
      if (typeof i.value == "function")
        return vt(i.value);
    }
    e = ug(e);
  }
  function n() {
    return null;
  }
  return n;
}
function _g(e) {
  try {
    return Nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Bu = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ll = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cl = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wg = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ul = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Cg = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Hu = bt(["#text"]), ju = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), dl = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vu = bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), io = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Eg = _t(/{{[\w\W]*|^[\w\W]*}}/g), Sg = _t(/<%[\w\W]*|^[\w\W]*%>/g), Tg = _t(/\${[\w\W]*/g), Ag = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), kg = _t(/^aria-[\-\w]+$/), Gu = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xg = _t(/^(?:\w+script|data):/i), Ng = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Og = _t(/^html$/i), Lg = _t(/^[a-z][.\w]*(-[.\w]+)+$/i), Ku = _t(/<[/\w!]/g), qu = _t(/<[/\w]/g), Rg = _t(/<\/no(script|embed|frames)/i), Ig = _t(/\/>/i), Xt = {
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
}, fp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Pg = bt(Ge({}, fp)), Dg = (function() {
  const e = {};
  return qi(fp, (t) => {
    e[t] = _t(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), bt(e);
})(), Fg = function() {
  return typeof window > "u" ? null : window;
}, Mg = function(t, n) {
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
}, Wu = function() {
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
}, _i = function(t, n, i, a) {
  return qt(t, n) && Na(t[n]) ? Ge(a.base ? Jt(a.base) : {}, t[n], a.transform) : i;
}, fl = function(t, n, i) {
  const a = qt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? Jt(a) : i();
};
function pp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fg();
  const t = (J) => pp(J);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Xt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, p = e.NamedNodeMap;
  p === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, g = s.prototype, w = xn(g, "cloneNode"), A = xn(g, "remove"), E = xn(g, "nextSibling"), k = xn(g, "childNodes"), P = xn(g, "parentNode"), R = xn(g, "shadowRoot"), I = xn(g, "attributes"), $ = o && o.prototype ? xn(o.prototype, "nodeType") : null, re = o && o.prototype ? xn(o.prototype, "nodeName") : null, ue = o && o.prototype ? xn(o.prototype, "ownerDocument") : null, ee = function(b) {
    return $ ? $(b) : b.nodeType;
  }, de = function(b) {
    return re ? re(b) : b.nodeName;
  };
  if (typeof r == "function") {
    const J = n.createElement("template");
    J.content && J.content.ownerDocument && (n = J.content.ownerDocument);
  }
  let K, se = "", ve, q = !1, ie = 0;
  const F = function() {
    if (ie > 0)
      throw Vi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(b) {
    F(), ie++;
    try {
      return K.createHTML(b);
    } finally {
      ie--;
    }
  }, Y = function(b) {
    F(), ie++;
    try {
      return K.createScriptURL(b);
    } finally {
      ie--;
    }
  }, ae = function() {
    return q || (ve = Mg(f, a), q = !0), ve;
  }, te = n, pe = te.implementation, he = te.createNodeIterator, Ce = te.createDocumentFragment, _e = te.getElementsByTagName, Ve = i.importNode;
  let Te = Wu();
  t.isSupported = typeof up == "function" && typeof P == "function" && pe && pe.createHTMLDocument !== void 0;
  const nt = Eg, Je = Sg, Ie = Tg, st = Ag, Qe = kg, gt = xg, U = Ng, h = Lg;
  let y = Gu, S = null;
  const O = Ge({}, [...Bu, ...ll, ...cl, ...ul, ...Hu]);
  let x = null;
  const z = Ge({}, [...ju, ...dl, ...Vu, ...io]);
  let j = Object.seal(Ca(null, {
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
  })), H = null, Q = null;
  const B = Object.seal(Ca(null, {
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
  let ge = !0, oe = !0, me = !1, Ee = !0, xe = !1, Z = !0, X = !1, le = !1, ke = null, Le = null, De = !1, ze = !1, it = !1, lt = !1, tt = !0, Mt = !1;
  const nn = "user-content-";
  let an = !0, rn = !1, wn = {}, Ue = null;
  const on = Ge({}, [
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
  let Cn = null;
  const En = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let sn = null;
  const jt = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ln = "http://www.w3.org/1998/Math/MathML", Pn = "http://www.w3.org/2000/svg", wt = "http://www.w3.org/1999/xhtml";
  let Dn = wt, mi = !1, Sn = null;
  const ca = Ge({}, [ln, Pn, wt], sl), Tn = bt(["mi", "mo", "mn", "ms", "mtext"]);
  let An = Ge({}, Tn);
  const Pa = bt(["annotation-xml"]);
  let Da = Ge({}, Pa);
  const Kr = Ge({}, ["title", "style", "font", "a", "script"]);
  let Mi = null;
  const Bs = ["application/xhtml+xml", "text/html"], Kn = "text/html";
  let dt = null, qn = null;
  const Hs = n.createElement("form"), Fa = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Ma = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (qn && qn === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = Jt(b), Mi = // eslint-disable-next-line unicorn/prefer-includes
    Bs.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Kn : b.PARSER_MEDIA_TYPE, dt = Mi === "application/xhtml+xml" ? sl : ir, S = _i(b, "ALLOWED_TAGS", O, {
      transform: dt
    }), x = _i(b, "ALLOWED_ATTR", z, {
      transform: dt
    }), Sn = _i(b, "ALLOWED_NAMESPACES", ca, {
      transform: sl
    }), sn = _i(b, "ADD_URI_SAFE_ATTR", jt, {
      transform: dt,
      base: jt
    }), Cn = _i(b, "ADD_DATA_URI_TAGS", En, {
      transform: dt,
      base: En
    }), Ue = _i(b, "FORBID_CONTENTS", on, {
      transform: dt
    }), H = _i(b, "FORBID_TAGS", Jt({}), {
      transform: dt
    }), Q = _i(b, "FORBID_ATTR", Jt({}), {
      transform: dt
    }), wn = qt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Jt(b.USE_PROFILES) : b.USE_PROFILES : !1, ge = b.ALLOW_ARIA_ATTR !== !1, oe = b.ALLOW_DATA_ATTR !== !1, me = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = b.SAFE_FOR_TEMPLATES || !1, Z = b.SAFE_FOR_XML !== !1, X = b.WHOLE_DOCUMENT || !1, ze = b.RETURN_DOM || !1, it = b.RETURN_DOM_FRAGMENT || !1, lt = b.RETURN_TRUSTED_TYPE || !1, De = b.FORCE_BODY || !1, tt = b.SANITIZE_DOM !== !1, Mt = b.SANITIZE_NAMED_PROPS || !1, an = b.KEEP_CONTENT !== !1, rn = b.IN_PLACE || !1, y = _g(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Gu, Dn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : wt, An = fl(
      b,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Tn)
      // Default built-in map
    ), Da = fl(
      b,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Pa)
      // Default built-in map
    );
    const L = fl(b, "CUSTOM_ELEMENT_HANDLING", () => Ca(null));
    if (j = Ca(null), qt(L, "tagNameCheck") && Fa(L.tagNameCheck) && (j.tagNameCheck = L.tagNameCheck), qt(L, "attributeNameCheck") && Fa(L.attributeNameCheck) && (j.attributeNameCheck = L.attributeNameCheck), qt(L, "allowCustomizedBuiltInElements") && typeof L.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = L.allowCustomizedBuiltInElements), _t(j), xe && (oe = !1), it && (ze = !0), wn && (S = Ge({}, Hu), x = Ca(null), wn.html === !0 && (Ge(S, Bu), Ge(x, ju)), wn.svg === !0 && (Ge(S, ll), Ge(x, dl), Ge(x, io)), wn.svgFilters === !0 && (Ge(S, cl), Ge(x, dl), Ge(x, io)), wn.mathMl === !0 && (Ge(S, ul), Ge(x, Vu), Ge(x, io))), B.tagCheck = null, B.attributeCheck = null, qt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? B.tagCheck = b.ADD_TAGS : Na(b.ADD_TAGS) && (S === O && (S = Jt(S)), Ge(S, b.ADD_TAGS, dt))), qt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? B.attributeCheck = b.ADD_ATTR : Na(b.ADD_ATTR) && (x === z && (x = Jt(x)), Ge(x, b.ADD_ATTR, dt))), qt(b, "ADD_FORBID_CONTENTS") && Na(b.ADD_FORBID_CONTENTS) && (Ue === on && (Ue = Jt(Ue)), Ge(Ue, b.ADD_FORBID_CONTENTS, dt)), an && (S["#text"] = !0), X && Ge(S, ["html", "head", "body"]), S.table && (Ge(S, ["tbody"]), delete H.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Vi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Vi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const V = K;
      K = b.TRUSTED_TYPES_POLICY;
      try {
        se = M("");
      } catch (ce) {
        throw K = V, ce;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (K = void 0, se = "") : (K === void 0 && (K = ae()), K && typeof se == "string" && (se = M("")));
    bt && bt(b), qn = b;
  }, $a = Ge({}, [...ll, ...cl, ...wg]), za = Ge({}, [...ul, ...Cg]), js = function(b, L, V) {
    return L.namespaceURI === wt ? b === "svg" : L.namespaceURI === ln ? b === "svg" && (V === "annotation-xml" || An[V]) : !!$a[b];
  }, Ua = function(b, L, V) {
    return L.namespaceURI === wt ? b === "math" : L.namespaceURI === Pn ? b === "math" && Da[V] : !!za[b];
  }, Vs = function(b, L, V) {
    return L.namespaceURI === Pn && !Da[V] || L.namespaceURI === ln && !An[V] ? !1 : !za[b] && (Kr[b] || !$a[b]);
  }, Gs = function(b) {
    let L = P(b);
    (!L || !L.tagName) && (L = {
      namespaceURI: Dn,
      tagName: "template"
    });
    const V = ir(b.tagName), ce = ir(L.tagName);
    return Sn[b.namespaceURI] ? b.namespaceURI === Pn ? js(V, L, ce) : b.namespaceURI === ln ? Ua(V, L, ce) : b.namespaceURI === wt ? Vs(V, L, ce) : !!(Mi === "application/xhtml+xml" && Sn[b.namespaceURI]) : !1;
  }, cn = function(b) {
    qa(t.removed, {
      element: b
    });
    try {
      P(b).removeChild(b);
    } catch {
      if (A(b), !P(b))
        throw Vi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ua = function(b, L, V) {
    try {
      b.removeAttributeNode(L);
    } catch {
      try {
        b.removeAttribute(V);
      } catch {
      }
    }
  }, da = function(b) {
    $i(b);
    const L = k(b);
    if (L) {
      const ce = [];
      qi(L, (we) => {
        qa(ce, we);
      }), qi(ce, (we) => {
        try {
          A(we);
        } catch {
        }
      });
    }
    const V = I(b);
    if (V)
      for (let ce = V.length - 1; ce >= 0; --ce) {
        const we = V[ce], Ne = we && we.name;
        typeof Ne == "string" && ua(b, we, Ne);
      }
  }, Wn = function(b, L, V) {
    if (!V)
      try {
        V = L.getAttributeNode(b);
      } catch {
        V = null;
      }
    qa(t.removed, {
      attribute: V || null,
      from: L
    });
    try {
      V ? L.removeAttributeNode(V) : L.removeAttribute(b);
    } catch {
      try {
        L.removeAttribute(b);
      } catch {
      }
    }
    if (b === "is")
      if (ze || it)
        try {
          cn(L);
        } catch {
        }
      else
        try {
          L.setAttribute(b, "");
        } catch {
        }
  }, qr = function(b) {
    const L = I(b);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const ce = L[V], we = ce && ce.name;
        typeof we != "string" || x[dt(we)] || ua(b, ce, we);
      }
  }, $i = function(b) {
    const L = [b];
    for (; L.length > 0; ) {
      const V = L.pop();
      ee(V) === Xt.element && qr(V);
      const we = k(V);
      if (we)
        for (let Ne = we.length - 1; Ne >= 0; --Ne)
          L.push(we[Ne]);
    }
  }, Wr = function(b, L) {
    return Z ? b === "patchsrc" ? !0 : b === "for" && L !== "label" && L !== "output" : !1;
  }, Ks = function(b) {
    if (!Z)
      return;
    const L = [b];
    for (; L.length > 0; ) {
      const V = L.pop(), ce = ee(V);
      if (ce === Xt.processingInstruction || ce === Xt.comment && Nt(qu, V.data)) {
        try {
          A(V);
        } catch {
        }
        continue;
      }
      if (ce === Xt.element) {
        const Ne = V, at = dt(de(V));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Wr("for", at) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const we = k(V);
      if (we)
        for (let Ne = we.length - 1; Ne >= 0; --Ne)
          L.push(we[Ne]);
    }
  }, Yr = function(b) {
    let L = null, V = null;
    if (De)
      b = "<remove></remove>" + b;
    else {
      const Ne = Mu(b, /^[\r\n\t ]+/);
      V = Ne && Ne[0];
    }
    Mi === "application/xhtml+xml" && Dn === wt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ce = K ? M(b) : b;
    if (Dn === wt)
      try {
        L = new c().parseFromString(ce, Mi);
      } catch {
      }
    if (!L || !L.documentElement) {
      L = pe.createDocument(Dn, "template", null);
      try {
        L.documentElement.innerHTML = mi ? se : ce;
      } catch {
      }
    }
    const we = L.body || L.documentElement;
    return b && V && we.insertBefore(n.createTextNode(V), we.childNodes[0] || null), Dn === wt ? _e.call(L, X ? "html" : "body")[0] : X ? L.documentElement : we;
  }, fa = function(b) {
    const L = ue ? ue(b) : b.ownerDocument;
    return he.call(
      L || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Fn = function(b) {
    return b = Wa(b, nt, " "), b = Wa(b, Je, " "), b = Wa(b, Ie, " "), b;
  }, Ba = function(b) {
    var L;
    b.normalize();
    const V = ue ? ue(b) : b.ownerDocument, ce = he.call(
      V || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let we = ce.nextNode();
    for (; we; )
      we.data = Fn(we.data), we = ce.nextNode();
    const Ne = (L = b.querySelectorAll) === null || L === void 0 ? void 0 : L.call(b, "template");
    Ne && qi(Ne, (at) => {
      vi(at.content) && Ba(at.content);
    });
  }, pa = function(b) {
    const L = re ? re(b) : null;
    return typeof L != "string" || dt(L) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== I(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== $(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== k(b);
  }, vi = function(b) {
    if (!$ || typeof b != "object" || b === null)
      return !1;
    try {
      return $(b) === Xt.documentFragment;
    } catch {
      return !1;
    }
  }, zi = function(b) {
    if (!$ || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof $(b) == "number";
    } catch {
      return !1;
    }
  };
  function un(J, b, L) {
    J.length !== 0 && qi(J, (V) => {
      V.call(t, b, L, qn);
    });
  }
  const qs = function(b, L) {
    return !!(Z && b.hasChildNodes() && !zi(b.firstElementChild) && Nt(Ku, b.textContent) && Nt(Ku, b.innerHTML) || Z && b.namespaceURI === wt && Pg[L] && (zi(b.firstElementChild) || typeof b.textContent == "string" && Nt(Dg[L], b.textContent)) || b.nodeType === Xt.processingInstruction || Z && b.nodeType === Xt.comment && Nt(qu, b.data));
  }, ha = function(b, L) {
    if (b instanceof RegExp)
      return Nt(b, L);
    if (b instanceof Function) {
      for (var V = arguments.length, ce = new Array(V > 2 ? V - 2 : 0), we = 2; we < V; we++)
        ce[we - 2] = arguments[we];
      return !!b(L, ...ce);
    }
    return !1;
  }, Zr = function(b, L, V) {
    if (!H[L] && _(L) && ha(j.tagNameCheck, L))
      return !1;
    if (an && !Ue[L]) {
      const ce = P(b), we = k(b);
      if (we && ce) {
        const Ne = we.length;
        for (let at = Ne - 1; at >= 0; --at) {
          const ft = b === V ? w(we[at], !0) : we[at];
          ce.insertBefore(ft, E(b));
        }
      }
    }
    return cn(b), !0;
  }, gi = function(b, L, V, ce) {
    return b.length === 0 ? L : L === V || L === ce ? Jt(L) : L;
  }, bi = function(b, L) {
    return b === L || P(b) !== null ? !1 : (rn && $i(b), !0);
  }, Ha = function(b, L) {
    if (un(Te.beforeSanitizeElements, b, null), bi(b, L))
      return !0;
    if (pa(b))
      return cn(b), !0;
    const V = dt(de(b));
    if (S = gi(Te.uponSanitizeElement, S, O, ke), un(Te.uponSanitizeElement, b, {
      tagName: V,
      allowedTags: S
    }), bi(b, L))
      return !0;
    if (qs(b, V))
      return cn(b), !0;
    if (H[V] || !(B.tagCheck instanceof Function && B.tagCheck(V)) && !S[V]) {
      const we = Zr(b, V, L);
      return we === !1 && un(Te.afterSanitizeElements, b, null), we;
    }
    if (ee(b) === Xt.element && !Gs(b) || (V === "noscript" || V === "noembed" || V === "noframes") && Nt(Rg, b.innerHTML))
      return cn(b), !0;
    if (xe && b.nodeType === Xt.text) {
      const we = Fn(b.textContent);
      b.textContent !== we && (qa(t.removed, {
        element: b.cloneNode()
      }), b.textContent = we);
    }
    return un(Te.afterSanitizeElements, b, null), !1;
  }, D = function(b, L, V) {
    if (Q[L] || Wr(L, b) || tt && (L === "id" || L === "name") && (V in n || V in Hs))
      return !1;
    const ce = x[L] || B.attributeCheck instanceof Function && B.attributeCheck(L, b);
    return oe && Nt(st, L) || ge && Nt(Qe, L) ? !0 : ce ? sn[L] || Nt(y, Wa(V, U, "")) || (L === "src" || L === "xlink:href" || L === "href") && b !== "script" && $u(V, "data:") === 0 && Cn[b] || me && !Nt(gt, Wa(V, U, "")) ? !0 : !V : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      _(b) && ha(j.tagNameCheck, b) && ha(j.attributeNameCheck, L, b) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      L === "is" && j.allowCustomizedBuiltInElements && ha(j.tagNameCheck, V)
    );
  }, N = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), _ = function(b) {
    return !N[ir(b)] && Nt(h, b);
  }, fe = function(b, L, V, ce) {
    if (K && typeof f == "object" && typeof f.getAttributeType == "function" && !V)
      switch (f.getAttributeType(b, L)) {
        case "TrustedHTML":
          return M(ce);
        case "TrustedScriptURL":
          return Y(ce);
      }
    return ce;
  }, We = function(b, L, V, ce) {
    try {
      V ? b.setAttributeNS(V, L, ce) : b.setAttribute(L, ce), pa(b) ? cn(b) : Fu(t.removed);
    } catch {
      Wn(L, b);
    }
  }, Ct = function(b) {
    un(Te.beforeSanitizeAttributes, b, null);
    const L = b.attributes;
    if (!L || pa(b))
      return;
    x = gi(Te.uponSanitizeAttribute, x, z, Le);
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let ce = L.length;
    const we = dt(b.nodeName);
    for (; ce--; ) {
      const Ne = L[ce], at = Ne.name, ft = Ne.namespaceURI, Vt = Ne.value, Gt = dt(at), Ws = Vt;
      let $t = at === "value" ? Ws : hg(Ws);
      if (V.attrName = Gt, V.attrValue = $t, V.keepAttr = !0, V.forceKeepAttr = void 0, un(Te.uponSanitizeAttribute, b, V), $t = V.attrValue, Mt && (Gt === "id" || Gt === "name") && $u($t, nn) !== 0 && (Wn(at, b, Ne), $t = nn + $t), Z && Nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, $t)) {
        Wn(at, b, Ne);
        continue;
      }
      if (Gt === "attributename" && Mu($t, "href")) {
        Wn(at, b, Ne);
        continue;
      }
      if (!V.forceKeepAttr) {
        if (!V.keepAttr) {
          Wn(at, b, Ne);
          continue;
        }
        if (!Ee && Nt(Ig, $t)) {
          Wn(at, b, Ne);
          continue;
        }
        if (xe && ($t = Fn($t)), !D(we, Gt, $t)) {
          Wn(at, b, Ne);
          continue;
        }
        $t = fe(we, Gt, ft, $t), $t !== Ws && We(b, at, ft, $t);
      }
    }
    un(Te.afterSanitizeAttributes, b, null);
  }, Et = function(b) {
    let L = null;
    const V = fa(b);
    for (un(Te.beforeSanitizeShadowDOM, b, null); L = V.nextNode(); )
      if (un(Te.uponSanitizeShadowNode, L, null), Ha(L, b), Ct(L), vi(L.content) && Et(L.content), ee(L) === Xt.element) {
        const ce = R(L);
        vi(ce) && (kn(ce), Et(ce));
      }
    un(Te.afterSanitizeShadowDOM, b, null);
  }, kn = function(b) {
    const L = [{
      node: b,
      shadow: null
    }];
    for (; L.length > 0; ) {
      const V = L.pop();
      if (V.shadow) {
        Et(V.shadow);
        continue;
      }
      const ce = V.node, Ne = ee(ce) === Xt.element, at = k(ce);
      if (at)
        for (let ft = at.length - 1; ft >= 0; --ft)
          L.push({
            node: at[ft],
            shadow: null
          });
      if (Ne) {
        const ft = re ? re(ce) : null;
        if (typeof ft == "string" && dt(ft) === "template") {
          const Vt = ce.content;
          vi(Vt) && L.push({
            node: Vt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const ft = R(ce);
        vi(ft) && L.push({
          node: null,
          shadow: ft
        }, {
          node: ft,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(J) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = null, V = null, ce = null, we = null;
    if (mi = !J, mi && (J = "<!-->"), typeof J != "string" && !zi(J) && (J = yg(J), typeof J != "string"))
      throw Vi("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    le ? (S = ke, x = Le) : Ma(b), (Te.uponSanitizeElement.length > 0 || Te.uponSanitizeAttribute.length > 0) && (S = Jt(S)), Te.uponSanitizeAttribute.length > 0 && (x = Jt(x)), t.removed = [];
    const Ne = rn && typeof J != "string" && zi(J);
    if (Ne) {
      Ks(J);
      const Vt = de(J);
      if (typeof Vt == "string") {
        const Gt = dt(Vt);
        if (!S[Gt] || H[Gt])
          throw da(J), Vi("root node is forbidden and cannot be sanitized in-place");
      }
      if (pa(J))
        throw da(J), Vi("root node is clobbered and cannot be sanitized in-place");
      try {
        kn(J);
      } catch (Gt) {
        throw da(J), Gt;
      }
    } else if (zi(J))
      L = Yr("<!---->"), V = L.ownerDocument.importNode(J, !0), V.nodeType === Xt.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? L = V : L.appendChild(V), kn(V);
    else {
      if (!ze && !xe && !X && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return K && lt ? M(J) : J;
      if (L = Yr(J), !L)
        return ze ? null : lt ? se : "";
    }
    L && De && cn(L.firstChild);
    const at = Ne ? J : L;
    try {
      const Vt = fa(at);
      for (; ce = Vt.nextNode(); )
        Ha(ce, at), Ct(ce), vi(ce.content) && Et(ce.content);
    } catch (Vt) {
      throw Ne && (da(J), qi(t.removed, (Gt) => {
        Gt.element && $i(Gt.element);
      })), Vt;
    }
    if (Ne)
      return qi(t.removed, (Vt) => {
        Vt.element && $i(Vt.element);
      }), xe && Ba(J), J;
    if (ze) {
      if (xe && Ba(L), it)
        for (we = Ce.call(L.ownerDocument); L.firstChild; )
          we.appendChild(L.firstChild);
      else
        we = L;
      return (x.shadowroot || x.shadowrootmode) && (we = Ve.call(i, we, !0)), we;
    }
    let ft = X ? L.outerHTML : L.innerHTML;
    return X && S["!doctype"] && L.ownerDocument && L.ownerDocument.doctype && L.ownerDocument.doctype.name && Nt(Og, L.ownerDocument.doctype.name) && (ft = "<!DOCTYPE " + L.ownerDocument.doctype.name + `>
` + ft), xe && (ft = Fn(ft)), K && lt ? M(ft) : ft;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ma(J), le = !0, ke = S, Le = x;
  }, t.clearConfig = function() {
    qn = null, le = !1, ke = null, Le = null, K = ve, se = "";
  }, t.isValidAttribute = function(J, b, L) {
    qn || Ma({});
    const V = dt(J), ce = dt(b);
    return D(V, ce, L);
  }, t.addHook = function(J, b) {
    typeof b == "function" && qt(Te, J) && qa(Te[J], b);
  }, t.removeHook = function(J, b) {
    if (qt(Te, J)) {
      if (b !== void 0) {
        const L = fg(Te[J], b);
        return L === -1 ? void 0 : pg(Te[J], L, 1)[0];
      }
      return Fu(Te[J]);
    }
  }, t.removeHooks = function(J) {
    qt(Te, J) && (Te[J] = []);
  }, t.removeAllHooks = function() {
    Te = Wu();
  }, t;
}
var hp = pp();
function Ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pl, Yu;
function $g() {
  if (Yu) return pl;
  Yu = 1;
  var e = /["'&<>]/;
  pl = t;
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
  return pl;
}
var zg = $g();
const Io = /* @__PURE__ */ Ic(zg);
function Ug() {
  return globalThis._nc_l10n_locale;
}
function Bg() {
  return Ug().replaceAll(/_/g, "-");
}
function Ps() {
  return globalThis._nc_l10n_language;
}
function Hg(e) {
  const t = Ps();
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
function mp(e) {
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
  }, l = (E) => E, p = (s.sanitize ? hp.sanitize : l) || l, c = s.escape ? Io : l, f = (E) => typeof E == "string" || typeof E == "number", g = (E, k, P) => E.replace(/%n/g, "" + P).replace(/{([^{}]*)}/g, (R, I) => {
    if (k === void 0 || !(I in k))
      return c(R);
    const $ = k[I];
    return f($) ? c(`${$}`) : typeof $ == "object" && f($.value) ? ($.escape !== !1 ? Io : l)(`${$.value}`) : c(R);
  });
  let A = (a?.bundle ?? mp(e)).translations[t] || t;
  return A = Array.isArray(A) ? A[0] : A, p(typeof r == "object" || o !== void 0 ? g(
    A,
    r,
    o
  ) : A);
}
function jg(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", s = r?.bundle ?? mp(e), l = s.translations[o];
  if (typeof l < "u") {
    const p = l;
    if (Array.isArray(p)) {
      const c = s.pluralFunction(i);
      return d(e, p[c], a, i, r);
    }
  }
  return i === 1 ? d(e, t, a, i, r) : d(e, n, a, i, r);
}
function Vg(e, t = Ps()) {
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
class Po {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Po.GLOBAL_SCOPE_PERSISTENT : Po.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Gg {
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
    return new Po(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function vp(e) {
  return new Gg(e);
}
function Kg() {
  try {
    return Rc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var hl, Zu;
function gp() {
  if (Zu) return hl;
  Zu = 1;
  var e = {};
  return hl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, hl;
}
var ml, Xu;
function bp() {
  if (Xu) return ml;
  Xu = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return ml = {
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
  }, ml;
}
var ao = { exports: {} }, Ju;
function qg() {
  return Ju || (Ju = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = bp(), r = gp();
    t = e.exports = {};
    const o = t.re = [], s = t.safeRe = [], l = t.src = [], p = t.safeSrc = [], c = t.t = {};
    let f = 0;
    const g = "[a-zA-Z0-9-]", w = [
      ["\\s", 1],
      ["\\d", a],
      [g, i]
    ], A = (k) => {
      for (const [P, R] of w)
        k = k.split(`${P}*`).join(`${P}{0,${R}}`).split(`${P}+`).join(`${P}{1,${R}}`);
      return k;
    }, E = (k, P, R) => {
      const I = A(P), $ = f++;
      r(k, $, P), c[k] = $, l[$] = P, p[$] = I, o[$] = new RegExp(P, R ? "g" : void 0), s[$] = new RegExp(I, R ? "g" : void 0);
    };
    E("NUMERICIDENTIFIER", "0|[1-9]\\d*"), E("NUMERICIDENTIFIERLOOSE", "\\d+"), E("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), E("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), E("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), E("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), E("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), E("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), E("BUILDIDENTIFIER", `${g}+`), E("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), E("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), E("FULL", `^${l[c.FULLPLAIN]}$`), E("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), E("LOOSE", `^${l[c.LOOSEPLAIN]}$`), E("GTLT", "((?:<|>)?=?)"), E("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), E("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), E("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), E("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), E("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), E("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), E("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), E("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), E("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), E("COERCERTL", l[c.COERCE], !0), E("COERCERTLFULL", l[c.COERCEFULL], !0), E("LONETILDE", "(?:~>?)"), E("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", E("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), E("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), E("LONECARET", "(?:\\^)"), E("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", E("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), E("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), E("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), E("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), E("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", E("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), E("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), E("STAR", "(<|>)?=?\\s*\\*"), E("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), E("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ao, ao.exports)), ao.exports;
}
var vl, Qu;
function Wg() {
  if (Qu) return vl;
  Qu = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return vl = (i) => i ? typeof i != "object" ? e : i : t, vl;
}
var gl, ed;
function Yg() {
  if (ed) return gl;
  ed = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return gl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, gl;
}
var bl, td;
function yp() {
  if (td) return bl;
  td = 1;
  const e = gp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = bp(), { safeRe: i, t: a } = qg(), r = Wg(), { compareIdentifiers: o } = Yg(), s = (p, c) => {
    const f = c.split(".");
    if (f.length > p.length)
      return !1;
    for (let g = 0; g < f.length; g++)
      if (o(p[g], f[g]) !== 0)
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
      const g = c.trim().match(f.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!g)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      g[4] ? this.prerelease = g[4].split(".").map((w) => {
        if (/^[0-9]+$/.test(w)) {
          const A = +w;
          if (A >= 0 && A < n)
            return A;
        }
        return w;
      }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
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
        const g = this.prerelease[f], w = c.prerelease[f];
        if (e("prerelease compare", f, g, w), g === void 0 && w === void 0)
          return 0;
        if (w === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === w)
          continue;
        return o(g, w);
      } while (++f);
    }
    compareBuild(c) {
      c instanceof l || (c = new l(c, this.options));
      let f = 0;
      do {
        const g = this.build[f], w = c.build[f];
        if (e("build compare", f, g, w), g === void 0 && w === void 0)
          return 0;
        if (w === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === w)
          continue;
        return o(g, w);
      } while (++f);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, f, g) {
      if (c.startsWith("pre")) {
        if (!f && g === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (f) {
          const w = `-${f}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!w || w[1] !== f)
            throw new Error(`invalid identifier: ${f}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", f, g);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", f, g);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", f, g), this.inc("pre", f, g);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", f, g), this.inc("pre", f, g);
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
          const w = Number(g) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [w];
          else {
            let A = this.prerelease.length;
            for (; --A >= 0; )
              typeof this.prerelease[A] == "number" && (this.prerelease[A]++, A = -2);
            if (A === -1) {
              if (f === this.prerelease.join(".") && g === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(w);
            }
          }
          if (f) {
            let A = [f, w];
            if (g === !1 && (A = [f]), s(this.prerelease, f)) {
              const E = this.prerelease[f.split(".").length];
              isNaN(E) && (this.prerelease = A);
            } else
              this.prerelease = A;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${c}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return bl = l, bl;
}
var yl, nd;
function Zg() {
  if (nd) return yl;
  nd = 1;
  const e = yp();
  return yl = (n, i) => new e(n, i).major, yl;
}
var Xg = Zg();
const id = /* @__PURE__ */ Ic(Xg);
var _l, ad;
function Jg() {
  if (ad) return _l;
  ad = 1;
  const e = yp();
  return _l = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, _l;
}
var wl, rd;
function Qg() {
  if (rd) return wl;
  rd = 1;
  const e = Jg();
  return wl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, wl;
}
var eb = Qg();
const tb = /* @__PURE__ */ Ic(eb);
class nb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !tb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : id(t.getVersion()) !== id(this.getVersion()) && console.warn(
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
let Za = null;
function Pc() {
  return Za !== null ? Za : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Za = new nb(window._nc_event_bus) : Za = window._nc_event_bus = new ib(), Za);
}
function _p(e, t) {
  Pc().subscribe(e, t);
}
function ab(e, t) {
  Pc().unsubscribe(e, t);
}
function li(e, ...t) {
  Pc().emit(e, ...t);
}
const wp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rb = Object.prototype.toString, ob = (e) => rb.call(e) === "[object Object]", va = () => {
}, sb = /* @__PURE__ */ lb();
function lb() {
  var e, t, n;
  return wp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Cl(e) {
  return Array.isArray(e) ? e : [e];
}
function cb(e, t, n) {
  return Yt(e, t, {
    ...n,
    immediate: !0
  });
}
const Cp = wp ? window : void 0;
function ar(e) {
  var t;
  const n = oi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Oa(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = W(() => {
    const i = Cl(oi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return cb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => ar(r))) !== null && i !== void 0 ? i : [Cp].filter((r) => r != null),
      Cl(oi(n.value ? e[1] : e[0])),
      Cl(v(n.value ? e[2] : e[1])),
      oi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], s, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const p = ob(o) ? { ...o } : o, c = i.flatMap((f) => a.flatMap((g) => r.map((w) => t(f, g, w, p))));
    l(() => {
      c.forEach((f) => f());
    });
  }, { flush: "post" });
}
let od = !1;
function sd(e, t, n = {}) {
  const { window: i = Cp, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: s = !1 } = n;
  if (!i) return s ? {
    stop: va,
    cancel: va,
    trigger: va
  } : va;
  if (sb && !od) {
    od = !0;
    const k = { passive: !0 };
    Array.from(i.document.body.children).forEach((P) => P.addEventListener("click", va, k)), i.document.documentElement.addEventListener("click", va, k);
  }
  let l = !0;
  const p = (k) => oi(a).some((P) => {
    if (typeof P == "string") return Array.from(i.document.querySelectorAll(P)).some((R) => R === k.target || k.composedPath().includes(R));
    {
      const R = ar(P);
      return R && (k.target === R || k.composedPath().includes(R));
    }
  });
  function c(k) {
    const P = oi(k);
    return P && P.$.subTree.shapeFlag === 16;
  }
  function f(k, P) {
    const R = oi(k), I = R.$.subTree && R.$.subTree.children;
    return I == null || !Array.isArray(I) ? !1 : I.some(($) => $.el === P.target || P.composedPath().includes($.el));
  }
  const g = (k) => {
    const P = ar(e);
    if (k.target != null && !(!(P instanceof Element) && c(e) && f(e, k)) && !(!P || P === k.target || k.composedPath().includes(P))) {
      if ("detail" in k && k.detail === 0 && (l = !p(k)), !l) {
        l = !0;
        return;
      }
      t(k);
    }
  };
  let w = !1;
  const A = [
    Oa(i, "click", (k) => {
      w || (w = !0, setTimeout(() => {
        w = !1;
      }, 0), g(k));
    }, {
      passive: !0,
      capture: r
    }),
    Oa(i, "pointerdown", (k) => {
      const P = ar(e);
      l = !p(k) && !!(P && !k.composedPath().includes(P));
    }, { passive: !0 }),
    o && Oa(i, "blur", (k) => {
      setTimeout(() => {
        const P = ar(e);
        let R = i.document.activeElement;
        for (; R?.shadowRoot; ) R = R.shadowRoot.activeElement;
        R?.tagName === "IFRAME" && !P?.contains(i.document.activeElement) && t(k);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), E = () => A.forEach((k) => k());
  return s ? {
    stop: E,
    cancel: () => {
      l = !1;
    },
    trigger: (k) => {
      l = !0, g(k), l = !1;
    }
  } : E;
}
function ub(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, s = /* @__PURE__ */ Qt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Qt({
    x: 0,
    y: 0
  }), p = W(() => s.x - l.x), c = W(() => s.y - l.y), { max: f, abs: g } = Math, w = W(() => f(g(p.value), g(c.value)) >= n), A = /* @__PURE__ */ hf(!1), E = W(() => w.value ? g(p.value) > g(c.value) ? p.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), k = (ee) => [ee.touches[0].clientX, ee.touches[0].clientY], P = (ee, de) => {
    s.x = ee, s.y = de;
  }, R = (ee, de) => {
    l.x = ee, l.y = de;
  }, I = {
    passive: o,
    capture: !o
  }, $ = (ee) => {
    A.value && a?.(ee, E.value), A.value = !1;
  }, re = [
    Oa(e, "touchstart", (ee) => {
      if (ee.touches.length !== 1) return;
      const [de, K] = k(ee);
      P(de, K), R(de, K), r?.(ee);
    }, I),
    Oa(e, "touchmove", (ee) => {
      if (ee.touches.length !== 1) return;
      const [de, K] = k(ee);
      R(de, K), I.capture && !I.passive && Math.abs(p.value) > Math.abs(c.value) && ee.preventDefault(), !A.value && w.value && (A.value = !0), A.value && i?.(ee);
    }, I),
    Oa(e, ["touchend", "touchcancel"], $, I)
  ];
  return {
    isSwiping: A,
    direction: E,
    coordsStart: s,
    coordsEnd: l,
    lengthX: p,
    lengthY: c,
    stop: () => re.forEach((ee) => ee())
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
    let n = t, i = e, a = $m(), r = Mm(), o = /* @__PURE__ */ Ht([]), s = W(() => o.value.reduce((U, h) => (U[~~h.id] = h) && U, {})), l = W(() => o.value.length), p = /* @__PURE__ */ Ht(null), c = /* @__PURE__ */ Ht(!1), f = /* @__PURE__ */ Ht({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), g = /* @__PURE__ */ Ht({
      splitter: null,
      timeoutId: null
    }), w = W(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": f.value.dragging,
      "splitpanes--ready": c.value
    })), A = () => {
      document.addEventListener("mousemove", P, { passive: !1 }), document.addEventListener("mouseup", R), "ontouchstart" in window && (document.addEventListener("touchmove", P, { passive: !1 }), document.addEventListener("touchend", R));
    }, E = () => {
      document.removeEventListener("mousemove", P, { passive: !1 }), document.removeEventListener("mouseup", R), "ontouchstart" in window && (document.removeEventListener("touchmove", P, { passive: !1 }), document.removeEventListener("touchend", R));
    }, k = (U, h) => {
      let y = U.target.closest(".splitpanes__splitter");
      if (y) {
        let { left: S, top: O } = y.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        f.value.cursorOffset = i.horizontal ? z - O : x - S;
      }
      A(), f.value.mouseDown = !0, f.value.activeSplitter = h, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, P = (U) => {
      f.value.mouseDown && (U.preventDefault(), f.value.dragging || (window.getSelection()?.removeAllRanges(), f.value.dragging = !0), requestAnimationFrame(() => {
        K(ee(U)), Qe("resize", { event: U }, !0);
      }));
    }, R = (U) => {
      f.value.dragging && (window.getSelection()?.removeAllRanges(), Qe("resized", { event: U }, !0)), f.value.mouseDown = !1, f.value.activeSplitter = null, setTimeout(() => {
        f.value.dragging = !1, E(), document.documentElement.style.cursor = "";
      }, 100);
    }, I = (U, h) => {
      "ontouchstart" in window && (U.preventDefault(), g.value.splitter === h ? (clearTimeout(g.value.timeoutId), g.value.timeoutId = null, $(U, h), g.value.splitter = null) : (g.value.splitter = h, g.value.timeoutId = setTimeout(() => g.value.splitter = null, 500))), f.value.dragging || Qe("splitter-click", {
        event: U,
        index: h
      }, !0);
    }, $ = (U, h) => {
      if (Qe("splitter-dblclick", {
        event: U,
        index: h
      }, !0), i.maximizePanes) {
        let y = 0;
        o.value = o.value.map((S, O) => (S.size = O === h ? S.max : S.min, O !== h && (y += S.min), S)), o.value[h].size -= y, Qe("pane-maximize", {
          event: U,
          index: h,
          pane: o.value[h]
        }), Qe("resized", {
          event: U,
          index: h
        }, !0);
      }
    }, re = (U, h) => {
      if (!i.keyboardStep) return;
      let y = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", S = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!y && !S) return;
      U.preventDefault(), f.value.activeSplitter = h;
      let O = (y ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = q(h) + o.value[h].size;
      se(Math.min(Math.max(x + O * i.keyboardStep, 0), 100)), Qe("resize", { event: U }, !0), Qe("resized", { event: U }, !0), f.value.activeSplitter = null;
    }, ue = (U, h) => {
      let y = s.value[h];
      y && Qe("pane-click", {
        event: U,
        index: y.index,
        pane: y
      });
    }, ee = (U) => {
      let h = p.value.getBoundingClientRect(), { clientX: y, clientY: S } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: y - (i.horizontal ? 0 : f.value.cursorOffset) - h.left,
        y: S - (i.horizontal ? f.value.cursorOffset : 0) - h.top
      };
    }, de = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let h = p.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = h - U), U * 100 / h;
    }, K = (U) => {
      se(de(U));
    }, se = (U) => {
      let h = f.value.activeSplitter;
      if (h === null || h >= o.value.length - 1) return;
      let y = {
        prevPanesSize: q(h),
        nextPanesSize: ie(h),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, S = 0 + (i.pushOtherPanes ? 0 : y.prevPanesSize), O = 100 - (i.pushOtherPanes ? 0 : y.nextPanesSize);
      U = Math.max(Math.min(U, O), S);
      let x = [h, h + 1], z = o.value[x[0]] || null, j = o.value[x[1]] || null, H = z !== null && z.max < 100 && U >= z.max + y.prevPanesSize, Q = j !== null && j.max < 100 && U <= 100 - (j.max + ie(h + 1));
      if (H || Q) {
        H ? (z.size = z.max, j.size = Math.min(Math.max(100 - z.max - y.prevPanesSize - y.nextPanesSize, j.min), j.max)) : (z.size = Math.min(Math.max(100 - j.max - y.prevPanesSize - ie(h + 1), z.min), z.max), j.size = j.max);
        return;
      }
      if (i.pushOtherPanes) {
        let B = ve(y, U);
        if (!B) return;
        ({ sums: y, panesToResize: x } = B), z = o.value[x[0]] || null, j = o.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - y.prevPanesSize - y.prevReachedMinPanes, z.min), z.max)), j !== null && (j.size = Math.min(Math.max(100 - U - y.nextPanesSize - y.nextReachedMinPanes, j.min), j.max));
    }, ve = (U, h) => {
      let y = f.value.activeSplitter, S = [y, y + 1];
      if (h < U.prevPanesSize + o.value[S[0]].min) {
        if (S[0] = F(y).index, U.prevReachedMinPanes = 0, S[0] < y && o.value.forEach((O, x) => {
          x > S[0] && x <= y && (O.size = O.min, U.prevReachedMinPanes += O.min);
        }), S[0] === void 0) return U.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((O, x) => {
          x > 0 && x <= y && (O.size = O.min, U.prevReachedMinPanes += O.min);
        }), o.value[S[1]].size = 100 - U.prevReachedMinPanes - o.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = q(S[0]);
      }
      return h > 100 - U.nextPanesSize - o.value[S[1]].min && (S[1] = M(y).index, U.nextReachedMinPanes = 0, S[1] > y + 1 && o.value.forEach((O, x) => {
        x > y && x < S[1] && (O.size = O.min, U.nextReachedMinPanes += O.min);
      }), U.nextPanesSize = S[1] === void 0 ? 0 : ie(S[1] - 1), S[1] === void 0) ? (U.nextReachedMinPanes = 0, o.value.forEach((O, x) => {
        x >= y + 1 && (O.size = O.min, U.nextReachedMinPanes += O.min);
      }), S[0] !== void 0 && (o.value[S[0]].size = 100 - U.prevPanesSize - ie(S[0] - 1)), null) : {
        sums: U,
        panesToResize: S
      };
    }, q = (U) => o.value.reduce((h, y, S) => h + (S < U ? y.size : 0), 0), ie = (U) => o.value.reduce((h, y, S) => h + (S > U + 1 ? y.size : 0), 0), F = (U) => [...o.value].reverse().find((h) => h.index < U && h.size > h.min) || {}, M = (U) => o.value.find((h) => h.index > U + 1 && h.size > h.min) || {}, Y = () => {
      let U = Array.from(p.value?.children || []);
      for (let h of U) {
        let y = h.classList.contains("splitpanes__pane"), S = h.classList.contains("splitpanes__splitter");
        !y && !S && (h.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (U, h, y = !1) => {
      let S = U - 1, O = document.createElement("div");
      O.classList.add("splitpanes__splitter"), y || (O.onmousedown = (x) => k(x, S), typeof window < "u" && "ontouchstart" in window && (O.ontouchstart = (x) => k(x, S)), O.onclick = (x) => I(x, S + 1), i.keyboardStep && (O.setAttribute("tabindex", "0"), O.setAttribute("role", "separator"), O.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), O.onkeydown = (x) => re(x, S))), O.ondblclick = (x) => $(x, S + 1), h.parentNode.insertBefore(O, h);
    }, te = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, pe = () => {
      let U = Array.from(p.value?.children || []);
      for (let y of U) y.className.includes("splitpanes__splitter") && te(y);
      let h = 0;
      for (let y of U) y.className.includes("splitpanes__pane") && (!h && i.firstSplitter ? ae(h, y, !0) : h && ae(h, y), h++);
    }, he = ({ uid: U, ...h }) => {
      let y = s.value[U];
      for (let [S, O] of Object.entries(h)) y[S] = O;
    }, Ce = !1, _e = (U) => {
      let h = -1;
      Array.from(p.value?.children || []).some((y) => (y.className.includes("splitpanes__pane") && h++, y.isSameNode(U.el))), o.value.splice(h, 0, {
        ...U,
        index: h
      }), o.value.forEach((y, S) => y.index = S), c.value && !Ce && (Ce = !0, ia(() => {
        pe(), Te({ addedPane: o.value[h] }), Qe("pane-add", { pane: o.value[h] }), Ce = !1;
      }));
    }, Ve = (U) => {
      let h = o.value.findIndex((S) => S.id === U);
      o.value[h].el = null;
      let y = o.value.splice(h, 1)[0];
      o.value.forEach((S, O) => S.index = O), ia(() => {
        pe(), Qe("pane-remove", { pane: y }), Te({ removedPane: {
          ...y
        } });
      });
    }, Te = (U = {}) => {
      !U.addedPane && !U.removedPane ? Je() : o.value.some((h) => h.givenSize !== null || h.min || h.max < 100) ? Ie(U) : nt(), c.value && Qe("resized");
    }, nt = () => {
      let U = 100 / l.value, h = 100, y = [], S = [];
      for (let O of o.value) O.size = Math.max(Math.min(U, O.max), O.min), h -= O.size, O.size >= O.max && y.push(O.id), O.size <= O.min && S.push(O.id);
      Math.abs(h) > 0.1 && st(h, y, S);
    }, Je = () => {
      let U = 100, h = [], y = [], S = 0;
      for (let x of o.value) U -= x.size, x.givenSize !== null && S++, x.size >= x.max && h.push(x.id), x.size <= x.min && y.push(x.id);
      let O = 100;
      if (U > 0.1) {
        for (let x of o.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - S), x.max), x.min)), O -= x.size;
        O > 0.1 && st(O, h, y);
      }
    }, Ie = ({ addedPane: U, removedPane: h } = {}) => {
      let y = o.value.reduce((H, Q) => H + (Q.givenSize === null ? 0 : Q.givenSize), 0), S = o.value.filter((H) => H.givenSize === null).length, O = S > 0 ? (100 - y) / S : 0, x = 0, z = [], j = [];
      for (let H of o.value) x -= H.size, H.size >= H.max && z.push(H.id), H.size <= H.min && j.push(H.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let H of o.value) H.givenSize === null && (H.size = Math.max(Math.min(O, H.max), H.min)), x -= H.size, H.size >= H.max && z.push(H.id), H.size <= H.min && j.push(H.id);
        Math.abs(x) > 0.1 && st(x, z, j);
      }
    }, st = (U, h, y) => {
      let S;
      S = U > 0 ? U / (l.value - h.length) : U / (l.value - y.length), o.value.forEach((O, x) => {
        if (U > 0 && !h.includes(O.id)) {
          let z = Math.max(Math.min(O.size + S, O.max), O.min), j = z - O.size;
          U -= j, O.size = z;
        } else if (!y.includes(O.id)) {
          let z = Math.max(Math.min(O.size + S, O.max), O.min), j = z - O.size;
          U -= j, O.size = z;
        }
      }), Math.abs(U) > 0.1 && c.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Qe = (U, h = void 0, y = !1) => {
      let S = h?.index ?? f.value.activeSplitter ?? null;
      n(U, {
        ...h,
        ...S !== null && { index: S },
        ...y && S !== null && {
          prevPane: o.value[S - +!!i.firstSplitter],
          nextPane: o.value[S + +!i.firstSplitter]
        },
        panes: o.value.map((O) => ({
          min: O.min,
          max: O.max,
          size: O.size
        }))
      });
    };
    Yt(() => i.firstSplitter, () => pe()), Yt(() => i.horizontal, (U) => ia(() => {
      n("direction-changed", {
        horizontal: U,
        panes: o.value.map((h) => ({
          min: h.min,
          max: h.max,
          size: h.size
        }))
      });
    })), Pi(() => {
      Y(), pe(), Te(), Qe("ready"), c.value = !0;
    }), Ia(() => c.value = !1);
    let gt = () => {
      let { class: U, ...h } = a;
      return Kt("div", {
        ref: p,
        class: [w.value, U],
        ...h
      }, r.default?.());
    };
    return hn("panes", o), hn("indexedPanes", s), hn("horizontal", W(() => i.horizontal)), hn("requestUpdate", he), hn("onPaneAdd", _e), hn("onPaneRemove", Ve), hn("onPaneClick", ue), (U, h) => (C(), Be(Ac(gt)));
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
    let t = e, n = Rt("requestUpdate"), i = Rt("onPaneAdd"), a = Rt("horizontal"), r = Rt("onPaneRemove"), o = Rt("onPaneClick"), s = sa()?.uid, l = Rt("indexedPanes"), p = W(() => l.value[s]), c = /* @__PURE__ */ Ht(null), f = W(() => {
      let E = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(E, w.value), g.value);
    }), g = W(() => {
      let E = parseFloat(t.minSize);
      return isNaN(E) ? 0 : E;
    }), w = W(() => {
      let E = parseFloat(t.maxSize);
      return isNaN(E) ? 100 : E;
    }), A = W(() => {
      let E = p.value?.size ?? (t.size === void 0 ? void 0 : f.value);
      return E === void 0 ? "" : `${a.value ? "height" : "width"}: ${E}%`;
    });
    return Yt(() => f.value, (E) => n({
      uid: s,
      size: E
    })), Yt(() => g.value, (E) => n({
      uid: s,
      min: E
    })), Yt(() => w.value, (E) => n({
      uid: s,
      max: E
    })), Pi(() => {
      i({
        id: s,
        el: c.value,
        min: g.value,
        max: w.value,
        givenSize: t.size === void 0 ? null : f.value,
        size: f.value
      });
    }), Ia(() => r(s)), (E, k) => (C(), T("div", {
      ref_key: "paneEl",
      ref: c,
      class: "splitpanes__pane",
      onClick: k[0] ||= (P) => v(o)(P, E._.uid),
      style: bn(A.value)
    }, [Me(E.$slots, "default")], 4));
  }
}, pb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", hb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", mb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", vb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Dc = 1024, Ep = Dc / 2, Do = (e) => document.documentElement.clientWidth < e, Sp = /* @__PURE__ */ Ht(Do(Dc)), Tp = /* @__PURE__ */ Ht(Do(Ep));
window.addEventListener("resize", () => {
  Sp.value = Do(Dc), Tp.value = Do(Ep);
}, { passive: !0 });
function Gr() {
  return /* @__PURE__ */ Sr(Sp);
}
function gb() {
  return /* @__PURE__ */ Sr(Tp);
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
    return jg("", t, n, i, a, { bundle: this.bundle });
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
    return this.setLanguage(Ps().replace("-", "_"));
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
    const t = new bb((n) => Vg(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function _b() {
  return new yb();
}
const Ap = _b().detectLanguage().build(), yt = (...e) => Ap.gettext(...e);
function Di(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Ps() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        Ap.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const wb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Cb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Eb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Sb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Tb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Ab = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], kb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], xb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Nb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Ob = /* @__PURE__ */ Symbol(""), [Lb] = window.OC?.config?.version?.split(".") ?? [], kp = Number.parseInt(Lb ?? "35"), Rb = kp < 32, Fi = kp < 34, Ib = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Pb() {
  return Rt(Ib, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Db = { class: "button-vue__wrapper" }, Fb = { class: "button-vue__icon" }, Mb = { class: "button-vue__text" }, $b = /* @__PURE__ */ xt({
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
    const n = e, i = t, { formBoxItemClass: a } = Pb(), r = Rt(Ob, null) !== null, o = W(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), s = W(() => o.value === "button" && typeof n.pressed == "boolean"), l = W(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), p = W(() => l.value.startsWith("tertiary")), c = W(() => n.alignment.split("-")[0]), f = W(() => n.alignment.includes("-")), g = Rt("NcPopover:trigger:attrs", () => ({}), !1), w = W(() => g()), A = W(() => {
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
          ...w.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function E(k) {
      s.value && i("update:pressed", !n.pressed), i("click", k);
    }
    return (k, P) => (C(), Be(Ac(o.value), Ft({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": p.value,
          "button-vue--wide": e.wide,
          [`button-vue--${c.value}`]: c.value !== "center",
          "button-vue--reverse": f.value,
          "button-vue--legacy": v(Rb),
          "button-vue--legacy34": v(Fi)
        },
        v(a)
      ]],
      "aria-label": e.ariaLabel
    }, A.value, { onClick: E }), {
      default: Fe(() => [
        u("span", Db, [
          u("span", Fb, [
            Me(k.$slots, "icon", {}, void 0, !0)
          ]),
          u("span", Mb, [
            Me(k.$slots, "default", {}, () => [
              Pe(m(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ et($b, [["__scopeId", "data-v-47ce59a3"]]), zb = ["aria-hidden", "aria-label"], Ub = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Bb = ["d"], Hb = ["innerHTML"], jb = /* @__PURE__ */ xt({
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
    Rv((a) => ({
      fb515064: n.value
    }));
    const t = e, n = W(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = W(() => {
      if (!t.svg || t.path)
        return;
      const a = hp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (C(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Oe(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (C(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Hb)) : (C(), T("svg", Ub, [
        u("path", { d: e.path }, null, 8, Bb)
      ]))
    ], 10, zb));
  }
}), Ds = /* @__PURE__ */ et(jb, [["__scopeId", "data-v-aaedb1c3"]]);
Gb();
function Vb(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), li("csrf-token-update", { token: e, _internal: !0 }));
}
function Gb() {
  _p("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Vb(e);
  });
}
vp("public").persist().build();
let ga;
function ld(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Kb() {
  if (ga !== void 0)
    return ga;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = ld(e, "data-user");
  return t === null ? (ga = null, ga) : (ga = {
    uid: t,
    displayName: ld(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, ga);
}
var ht = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ht || {});
class qb {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ht[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ht.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ht.Debug:
          console.debug(this.formatMessage(n, ht.Debug, i), i);
          break;
        case ht.Info:
          console.info(this.formatMessage(n, ht.Info, i), i);
          break;
        case ht.Warn:
          console.warn(this.formatMessage(n, ht.Warn, i), i);
          break;
        case ht.Error:
          console.error(this.formatMessage(n, ht.Error, i), i);
          break;
        case ht.Fatal:
        default:
          console.error(this.formatMessage(n, ht.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ht.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ht.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ht.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ht.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ht.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Wb(e) {
  return new qb(e);
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
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ht.Warn, window._oc_debug && (t.context.level = ht.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Zb() {
  return new Yb(Wb);
}
const aa = Zb().detectUser().setApp("@nextcloud/vue").build();
function Xb(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let xp = "missing-app-name";
try {
  xp = "library";
} catch {
  aa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Jb = xp;
let Qb = "";
try {
  Qb = "0.1.0-alpha.160";
} catch {
  aa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Np() {
  return Rt("appName", Jb);
}
const ey = Xb(() => {
  const e = Rc("core", "apps", []), t = Np();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Xl = Hg();
Di(kb);
const ty = /* @__PURE__ */ xt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Gr();
    Yt(t, n), Pi(() => {
      n(t.value);
    }), Ia(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && li("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (C(), Be(v(jn), {
      "aria-label": v(yt)("Go back to the list"),
      class: Oe(["app-details-toggle", { "app-details-toggle--mobile": v(t) }]),
      title: v(yt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Fe(() => [
        Ae(v(Ds), {
          directional: "",
          path: v(pb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), ny = /* @__PURE__ */ et(ty, [["__scopeId", "data-v-a28923a1"]]), cd = vp("nextcloud").persist().build(), iy = Kg().theming?.name ?? "Nextcloud", ay = {
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
      appName: Np(),
      localizedAppName: ey(),
      isMobile: Gr(),
      isRtl: Xl
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
        return aa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? li("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && li("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      cd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), aa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(cd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return aa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
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
}, oy = { class: "app-content-wrapper__list" }, sy = {
  key: 1,
  class: "app-content-wrapper"
};
function ly(e, t, n, i, a, r) {
  const o = je("NcAppContentDetailsToggle"), s = je("Pane"), l = je("Splitpanes");
  return C(), T("main", {
    id: "app-content-vue",
    class: Oe(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (C(), T("h1", ry, m(n.pageHeading), 1)) : G("", !0),
    e.$slots.list ? (C(), T(be, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (C(), T("div", {
        key: 0,
        class: Oe(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (C(), Be(o, {
          key: 0,
          onClick: ut(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : G("", !0),
        ct(u("div", oy, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [xa, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : G("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (C(), T("div", sy, [
        Ae(l, {
          horizontal: n.layout === "horizontal-split",
          class: Oe(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Fe(() => [
            Ae(s, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Fe(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Ae(s, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Fe(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : G("", !0)
    ], 64)) : G("", !0),
    e.$slots.list ? G("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const cy = /* @__PURE__ */ et(ay, [["render", ly], ["__scopeId", "data-v-51427d61"]]);
var Op = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Fo = /* @__PURE__ */ Op.join(","), Lp = typeof Element > "u", oa = Lp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Mo = !Lp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, $o = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : $o(t.parentNode));
  return o;
}, uy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Rp = function(t, n, i) {
  if ($o(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Fo));
  return n && oa.call(t, Fo) && a.unshift(t), a = a.filter(i), a;
}, zo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!$o(o, !1))
      if (o.tagName === "SLOT") {
        var s = o.assignedElements(), l = s.length ? s : o.children, p = zo(l, !0, i);
        i.flatten ? a.push.apply(a, p) : a.push({
          scopeParent: o,
          candidates: p
        });
      } else {
        var c = oa.call(o, Fo);
        c && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), g = !$o(f, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (f && g) {
          var w = zo(f === !0 ? o.children : f.children, !0, i);
          i.flatten ? a.push.apply(a, w) : a.push({
            scopeParent: o,
            candidates: w
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Ip = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Xi = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || uy(t)) && !Ip(t) ? 0 : t.tabIndex;
}, dy = function(t, n) {
  var i = Xi(t);
  return i < 0 && n && !Ip(t) ? 0 : i;
}, fy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Pp = function(t) {
  return t.tagName === "INPUT";
}, py = function(t) {
  return Pp(t) && t.type === "hidden";
}, hy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, my = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, vy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Mo(t), i = function(s) {
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
  var r = my(a, t.form);
  return !r || r === t;
}, gy = function(t) {
  return Pp(t) && t.type === "radio";
}, by = function(t) {
  return gy(t) && !vy(t);
}, yy = function(t) {
  var n, i = t && Mo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, s, l;
    for (r = !!((o = a) !== null && o !== void 0 && (s = o.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var p, c, f;
      i = Mo(a), a = (p = i) === null || p === void 0 ? void 0 : p.host, r = !!((c = a) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(a));
    }
  }
  return r;
}, ud = function(t) {
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
  var o = getComputedStyle(t), s = o.visibility;
  if (s === "hidden" || s === "collapse")
    return !0;
  var l = oa.call(t, "details>summary:first-of-type"), p = l ? t.parentElement : t;
  if (oa.call(p, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var f = t.parentElement, g = Mo(t);
        if (f && !f.shadowRoot && a(f) === !0)
          return ud(t);
        t.assignedSlot ? t = t.assignedSlot : !f && g !== t.ownerDocument ? t = g.host : t = f;
      }
      t = c;
    }
    if (yy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return ud(t);
  return !1;
}, wy = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return oa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Uo = function(t, n) {
  return !(n.disabled || py(n) || _y(n, t) || // For a details element with a summary, the summary element gets the focus
  hy(n) || wy(n));
}, Jl = function(t, n) {
  return !(by(n) || Xi(n) < 0 || !Uo(t, n));
}, Cy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Dp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, s = o ? a.scopeParent : a, l = dy(s, o), p = o ? Dp(a.candidates) : s;
    l === 0 ? o ? n.push.apply(n, p) : n.push(s) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: o,
      content: p
    });
  }), i.sort(fy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Ey = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = zo([t], n.includeContainer, {
    filter: Jl.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Cy
  }) : i = Rp(t, n.includeContainer, Jl.bind(null, n)), Dp(i);
}, Sy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = zo([t], n.includeContainer, {
    filter: Uo.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Rp(t, n.includeContainer, Uo.bind(null, n)), i;
}, ba = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return oa.call(t, Fo) === !1 ? !1 : Jl(n, t);
}, Ty = /* @__PURE__ */ Op.concat("iframe:not([inert]):not([inert] *)").join(","), El = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return oa.call(t, Ty) === !1 ? !1 : Uo(n, t);
};
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ay(e) {
  if (Array.isArray(e)) return Ql(e);
}
function dd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Fp(e)) || t) {
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
function ky(e, t, n) {
  return (t = Ry(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function xy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fd(Object(n), !0).forEach(function(i) {
      ky(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Oy(e) {
  return Ay(e) || xy(e) || Fp(e) || Ny();
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
function Fp(e, t) {
  if (e) {
    if (typeof e == "string") return Ql(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ql(e, t) : void 0;
  }
}
var ai = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ai.getActiveTrap(t);
    n !== i && ai.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ai.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ai.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ai.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, Iy = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Py = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, dr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Dy = function(t) {
  return dr(t) && !t.shiftKey;
}, Fy = function(t) {
  return dr(t) && t.shiftKey;
}, hd = function(t) {
  return setTimeout(t, 0);
}, Xa = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, ro = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, My = [], Fc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || My, r = pd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Dy,
    isKeyBackward: Fy
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
  }, s, l = function(F, M, Y) {
    return F && F[M] !== void 0 ? F[M] : r[Y || M];
  }, p = function(F, M) {
    var Y = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return o.containerGroups.findIndex(function(ae) {
      var te = ae.container, pe = ae.tabbableNodes;
      return te.contains(F) || Y?.includes(te) || pe.find(function(he) {
        return he === F;
      });
    });
  }, c = function(F) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = M.hasFallback, ae = Y === void 0 ? !1 : Y, te = M.params, pe = te === void 0 ? [] : te, he = r[F];
    if (typeof he == "function" && (he = he.apply(void 0, Oy(pe))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat(F, "` was specified but was not a node, or did not return a node"));
    }
    var Ce = he;
    if (typeof he == "string") {
      try {
        Ce = i.querySelector(he);
      } catch (_e) {
        throw new Error("`".concat(F, '` appears to be an invalid selector; error="').concat(_e.message, '"'));
      }
      if (!Ce && !ae)
        throw new Error("`".concat(F, "` as selector refers to no known node"));
    }
    return Ce;
  }, f = function(F) {
    var M = F.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? f(M.shadowRoot) : M : null;
  }, g = function() {
    var F = c("initialFocus", {
      hasFallback: !0
    });
    if (F === !1)
      return !1;
    if (F === void 0 || F && !El(F, r.tabbableOptions)) {
      var M = f(i);
      if (p(M) >= 0)
        F = M;
      else {
        var Y = o.tabbableGroups[0], ae = Y && Y.firstTabbableNode;
        F = ae || c("fallbackFocus");
      }
    } else F === null && (F = c("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, w = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var M = Ey(F, r.tabbableOptions), Y = Sy(F, r.tabbableOptions), ae = M.length > 0 ? M[0] : void 0, te = M.length > 0 ? M[M.length - 1] : void 0, pe = Y.find(function(_e) {
        return ba(_e);
      }), he = Y.slice().reverse().find(function(_e) {
        return ba(_e);
      }), Ce = !!M.find(function(_e) {
        return Xi(_e) > 0;
      });
      return {
        container: F,
        tabbableNodes: M,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ce,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: te,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: pe,
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
        nextTabbableNode: function(Ve) {
          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, nt = M.indexOf(Ve);
          return nt < 0 ? Te ? Y.slice(Y.indexOf(Ve) + 1).find(function(Je) {
            return ba(Je);
          }) : Y.slice(0, Y.indexOf(Ve)).reverse().find(function(Je) {
            return ba(Je);
          }) : M[nt + (Te ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(F) {
      return F.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(F) {
      return F.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, A = function(F) {
    if (F !== !1 && F !== f(document)) {
      if (!F || !F.focus) {
        A(g());
        return;
      }
      F.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = F, Iy(F) && F.select();
    }
  }, E = function(F) {
    var M = c("setReturnFocus", {
      params: [F]
    });
    return M || (M === !1 ? !1 : F);
  }, k = function(F) {
    var M = F.target, Y = F.event, ae = F.isBackward, te = ae === void 0 ? !1 : ae;
    M = M || ro(Y), w();
    var pe = null;
    if (o.tabbableGroups.length > 0) {
      var he = p(M, Y), Ce = he >= 0 ? o.containerGroups[he] : void 0;
      if (he < 0)
        te ? pe = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : pe = o.tabbableGroups[0].firstTabbableNode;
      else if (te) {
        var _e = o.tabbableGroups.findIndex(function(st) {
          var Qe = st.firstTabbableNode;
          return M === Qe;
        });
        if (_e < 0 && (Ce.container === M || El(M, r.tabbableOptions) && !ba(M, r.tabbableOptions) && !Ce.nextTabbableNode(M, !1)) && (_e = he), _e >= 0) {
          var Ve = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, Te = o.tabbableGroups[Ve];
          pe = Xi(M) >= 0 ? Te.lastTabbableNode : Te.lastDomTabbableNode;
        } else dr(Y) || (pe = Ce.nextTabbableNode(M, !1));
      } else {
        var nt = o.tabbableGroups.findIndex(function(st) {
          var Qe = st.lastTabbableNode;
          return M === Qe;
        });
        if (nt < 0 && (Ce.container === M || El(M, r.tabbableOptions) && !ba(M, r.tabbableOptions) && !Ce.nextTabbableNode(M)) && (nt = he), nt >= 0) {
          var Je = nt === o.tabbableGroups.length - 1 ? 0 : nt + 1, Ie = o.tabbableGroups[Je];
          pe = Xi(M) >= 0 ? Ie.firstTabbableNode : Ie.firstDomTabbableNode;
        } else dr(Y) || (pe = Ce.nextTabbableNode(M));
      }
    } else
      pe = c("fallbackFocus");
    return pe;
  }, P = function(F) {
    var M = ro(F);
    if (!(p(M, F) >= 0)) {
      if (Xa(r.clickOutsideDeactivates, F)) {
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
      Xa(r.allowOutsideClick, F) || F.preventDefault();
    }
  }, R = function(F) {
    var M = ro(F), Y = p(M, F) >= 0;
    if (Y || M instanceof Document)
      Y && (o.mostRecentlyFocusedNode = M);
    else {
      F.stopImmediatePropagation();
      var ae, te = !0;
      if (o.mostRecentlyFocusedNode)
        if (Xi(o.mostRecentlyFocusedNode) > 0) {
          var pe = p(o.mostRecentlyFocusedNode), he = o.containerGroups[pe].tabbableNodes;
          if (he.length > 0) {
            var Ce = he.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            Ce >= 0 && (r.isKeyForward(o.recentNavEvent) ? Ce + 1 < he.length && (ae = he[Ce + 1], te = !1) : Ce - 1 >= 0 && (ae = he[Ce - 1], te = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Ve) {
              return Xi(Ve) > 0;
            });
          }) || (te = !1);
      else
        te = !1;
      te && (ae = k({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), A(ae || o.mostRecentlyFocusedNode || g());
    }
    o.recentNavEvent = void 0;
  }, I = function(F) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = F;
    var Y = k({
      event: F,
      isBackward: M
    });
    Y && (dr(F) && F.preventDefault(), A(Y));
  }, $ = function(F) {
    (r.isKeyForward(F) || r.isKeyBackward(F)) && I(F, r.isKeyBackward(F));
  }, re = function(F) {
    Py(F) && Xa(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), s.deactivate());
  }, ue = function(F) {
    var M = ro(F);
    p(M, F) >= 0 || Xa(r.clickOutsideDeactivates, F) || Xa(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, ee = function() {
    if (o.active) {
      ai.activateTrap(a, s);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(M) {
        o.delayInitialFocusTimer = hd(function() {
          A(g()), M();
        });
      }) : A(g()), i.addEventListener("focusin", R, !0), i.addEventListener("mousedown", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", re), F;
    }
  }, de = function(F) {
    o.active && !o.paused && s._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ae = dd(F), te;
    try {
      for (ae.s(); !(te = ae.n()).done; ) {
        var pe = te.value;
        M.add(pe);
        for (var he = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, Ce = pe; Ce; ) {
          M.add(Ce);
          var _e = Ce.parentElement, Ve = [];
          _e ? Ve = _e.children : !_e && he && (Ve = Ce.getRootNode().children, _e = Ce.getRootNode().host, he = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var Te = dd(Ve), nt;
          try {
            for (Te.s(); !(nt = Te.n()).done; ) {
              var Je = nt.value;
              Y.add(Je);
            }
          } catch (Ie) {
            Te.e(Ie);
          } finally {
            Te.f();
          }
          Ce = _e;
        }
      }
    } catch (Ie) {
      ae.e(Ie);
    } finally {
      ae.f();
    }
    M.forEach(function(Ie) {
      Y.delete(Ie);
    }), o.adjacentElements = Y;
  }, K = function() {
    if (o.active)
      return i.removeEventListener("focusin", R, !0), i.removeEventListener("mousedown", P, !0), i.removeEventListener("touchstart", P, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", $, !0), i.removeEventListener("keydown", re), s;
  }, se = function(F) {
    var M = o.mostRecentlyFocusedNode;
    if (M) {
      var Y = F.some(function(te) {
        var pe = Array.from(te.removedNodes);
        return pe.some(function(he) {
          return he === M || typeof he.contains == "function" && he.contains(M);
        });
      });
      if (Y && o.containers.some(function(te) {
        return te?.isConnected;
      })) {
        w();
        var ae = g();
        A(ae);
      }
    }
  }, ve = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, q = function() {
    ve && (ve.disconnect(), o.active && !o.paused && o.containers.map(function(F) {
      ve.observe(F, {
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
    activate: function(F) {
      if (o.active)
        return this;
      var M = l(F, "onActivate"), Y = l(F, "onPostActivate"), ae = l(F, "checkCanFocusTrap"), te = ai.getActiveTrap(a), pe = !1;
      if (te && !te.paused) {
        var he;
        (he = te._setSubtreeIsolation) === null || he === void 0 || he.call(te, !1), pe = !0;
      }
      try {
        ae || w(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = f(i), M?.({
          trap: s
        });
        var Ce = function() {
          ae && w();
          var Te = function() {
            s._setSubtreeIsolation(!0), q(), Y?.({
              trap: s
            });
          }, nt = ee();
          nt ? nt.then(Te) : Te();
        };
        if (ae)
          return ae(o.containers.concat()).then(Ce, Ce), this;
        Ce();
      } catch (Ve) {
        if (te === ai.getActiveTrap(a) && pe) {
          var _e;
          (_e = te._setSubtreeIsolation) === null || _e === void 0 || _e.call(te, !0);
        }
        throw Ve;
      }
      return this;
    },
    deactivate: function(F) {
      if (!o.active)
        return this;
      var M = pd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, F);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || s._setSubtreeIsolation(!1), o.alreadySilent.clear(), K(), o.active = !1, o.paused = !1, q(), ai.deactivateTrap(a, s);
      var Y = l(M, "onDeactivate"), ae = l(M, "onPostDeactivate"), te = l(M, "checkCanReturnFocus"), pe = l(M, "delayReturnFocus"), he = l(M, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: s
      });
      var Ce = function() {
        he && A(E(o.nodeFocusedBeforeActivation)), ae?.({
          trap: s
        });
      }, _e = function() {
        pe && he ? hd(Ce) : Ce();
      };
      return he && te ? (te(E(o.nodeFocusedBeforeActivation)).then(_e, _e), this) : (_e(), this);
    },
    pause: function(F) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, F)) : this;
    },
    unpause: function(F) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, F)) : this;
    },
    updateContainerElements: function(F) {
      var M = [].concat(F).filter(Boolean);
      return o.containers = M.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && de(o.containers), o.active && (w(), o.paused || s._setSubtreeIsolation(!0)), q(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(F, M) {
        if (o.paused === F)
          return this;
        if (o.paused = F, F) {
          var Y = l(M, "onPause"), ae = l(M, "onPostPause");
          Y?.({
            trap: s
          }), K(), s._setSubtreeIsolation(!1), q(), ae?.({
            trap: s
          });
        } else {
          var te = l(M, "onUnpause"), pe = l(M, "onPostUnpause");
          te?.({
            trap: s
          });
          var he = function() {
            w();
            var _e = function() {
              s._setSubtreeIsolation(!0), q(), pe?.({
                trap: s
              });
            }, Ve = ee();
            Ve ? Ve.then(_e) : _e();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(F) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(M) {
          var Y;
          F ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((Y = M.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && o.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && o.alreadySilent.add(M), M.setAttribute("inert", !0)) : o.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), s.updateContainerElements(t), s;
};
const Mp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), $y = /* @__PURE__ */ xt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Mp]: {
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
  return C(), T("ul", {
    ref: "list",
    class: Oe(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    u("div", {
      class: Oe(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: bn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const $p = /* @__PURE__ */ et($y, [["render", zy], ["__scopeId", "data-v-3e73e246"]]);
function Ir() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Uy() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Ir()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Ir().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const zp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Up = /* @__PURE__ */ Symbol.for("NcContent:selector");
Di(Sb);
const By = { class: "app-navigation-toggle-wrapper" }, Hy = /* @__PURE__ */ xt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Uf(e, "open"), n = W(() => t.value ? yt("Close navigation") : yt("Open navigation"));
    return (i, a) => (C(), T("div", By, [
      Ae(v(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Fe(() => [
          Ae(Ds, {
            path: v(vb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), jy = /* @__PURE__ */ et(Hy, [["__scopeId", "data-v-e8177cc7"]]), Vy = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Gy = { class: "app-navigation__search" }, Ky = /* @__PURE__ */ xt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Rt(
      zp,
      () => _v(),
      !1
    ), a = Am("appNavigationContainer"), r = Gr(), o = /* @__PURE__ */ Ht(!r.value), s = W(() => r.value && o.value);
    gm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Yt(r, () => {
      o.value = !r.value;
    }), Yt(s, () => {
      c();
    }), Pi(() => {
      i(!0), _p("toggle-navigation", p), li("navigation-toggled", {
        open: o.value
      }), n = Fc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Ir(),
        escapeDeactivates: !1
      }), c();
    }), Hr(() => {
      i(!1), ab("toggle-navigation", p), n.deactivate();
    });
    function l(g) {
      if (o.value === g) {
        li("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = g === void 0 ? !o.value : g;
      const w = getComputedStyle(document.body), A = parseInt(w.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        li("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * A);
    }
    function p({ open: g }) {
      return l(g);
    }
    function c() {
      s.value ? n.activate() : n.deactivate();
    }
    function f() {
      r.value && l(!1);
    }
    return (g, w) => (C(), T("div", {
      ref: "appNavigationContainer",
      class: Oe(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": v(Fi)
      }])
    }, [
      u("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: Wt(f, ["esc"])
      }, [
        u("div", Gy, [
          Me(g.$slots, "search", {}, void 0, !0)
        ]),
        u("div", {
          class: Oe(["app-navigation__body", { "app-navigation__body--no-list": !g.$slots.list }])
        }, [
          Me(g.$slots, "default", {}, void 0, !0)
        ], 2),
        g.$slots.list ? (C(), Be($p, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Fe(() => [
            Me(g.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : G("", !0),
        Me(g.$slots, "footer", {}, void 0, !0)
      ], 40, Vy),
      Ae(jy, {
        open: o.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), qy = /* @__PURE__ */ et(Ky, [["__scopeId", "data-v-37908cd4"]]), Wy = {
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
}, Yy = ["aria-hidden", "aria-label"], Zy = ["fill", "width", "height"], Xy = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Jy = { key: 0 };
function Qy(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", Xy, [
        n.title ? (C(), T("title", Jy, m(n.title), 1)) : G("", !0)
      ])
    ], 8, Zy))
  ], 16, Yy);
}
const e_ = /* @__PURE__ */ et(Wy, [["render", Qy]]), t_ = {
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
function o_(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", a_, [
        n.title ? (C(), T("title", r_, m(n.title), 1)) : G("", !0)
      ])
    ], 8, i_))
  ], 16, n_);
}
const s_ = /* @__PURE__ */ et(t_, [["render", o_]]), l_ = {
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
function p_(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", d_, [
        n.title ? (C(), T("title", f_, m(n.title), 1)) : G("", !0)
      ])
    ], 8, u_))
  ], 16, c_);
}
const Bp = /* @__PURE__ */ et(l_, [["render", p_]]), h_ = {
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
}, m_ = ["aria-hidden", "aria-label"], v_ = ["fill", "width", "height"], g_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, b_ = { key: 0 };
function y_(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", g_, [
        n.title ? (C(), T("title", b_, m(n.title), 1)) : G("", !0)
      ])
    ], 8, v_))
  ], 16, m_);
}
const Hp = /* @__PURE__ */ et(h_, [["render", y_]]);
Di(Cb);
const __ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Bp,
    IconClose: Hp,
    NcButton: jn
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
    return { isLegacy34: Fi };
  },
  data() {
    return {
      labelConfirm: yt("Confirm changes"),
      labelCancel: yt("Cancel changes")
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
  const o = je("IconArrowRight"), s = je("NcButton"), l = je("IconClose");
  return C(), T("div", {
    class: Oe(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    u("form", {
      onSubmit: t[1] || (t[1] = ut((...p) => r.confirm && r.confirm(...p), ["prevent"])),
      onKeydown: t[2] || (t[2] = Wt(ut((...p) => r.cancel && r.cancel(...p), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ut(() => {
      }, ["stop", "prevent"]))
    }, [
      ct(u("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (p) => r.valueModel = p),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, w_), [
        [Wl, r.valueModel]
      ]),
      Ae(s, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ut(r.confirm, ["stop", "prevent"])
      }, {
        icon: Fe(() => [
          Ae(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Ae(s, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: ut(r.cancel, ["stop", "prevent"])
      }, {
        icon: Fe(() => [
          Ae(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const E_ = /* @__PURE__ */ et(__, [["render", C_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Fs() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const jp = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Vp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), S_ = {
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
}, T_ = {
  mixins: [S_],
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
      from: Vp
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
}, A_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Ds
  },
  mixins: [T_],
  inject: {
    isInSemanticMenu: {
      from: jp,
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
      mdiCheck: hb,
      mdiChevronRight: mb
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
}, k_ = ["role"], x_ = ["aria-label", "disabled", "title", "type"], N_ = { class: "action-button__longtext-wrapper" }, O_ = {
  key: 0,
  class: "action-button__name"
}, L_ = ["textContent"], R_ = {
  key: 2,
  class: "action-button__text"
}, I_ = ["textContent"], P_ = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function D_(e, t, n, i, a, r) {
  const o = je("NcIconSvgWrapper");
  return C(), T("li", {
    class: Oe(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    u("button", Ft({
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
      Me(e.$slots, "icon", {}, () => [
        u("span", {
          class: Oe([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: bn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      u("span", N_, [
        e.name ? (C(), T("strong", O_, m(e.name), 1)) : G("", !0),
        e.isLongText ? (C(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: m(e.text)
        }, null, 8, L_)) : (C(), T("span", R_, m(e.text), 1)),
        n.description ? (C(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: m(n.description)
        }, null, 8, I_)) : G("", !0)
      ]),
      n.isMenu ? (C(), Be(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (C(), Be(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (C(), T("span", P_)) : G("", !0),
      G("", !0)
    ], 16, x_)
  ], 10, k_);
}
const F_ = /* @__PURE__ */ et(A_, [["render", D_], ["__scopeId", "data-v-6c2daf4e"]]);
function M_(e, t = {}) {
  const n = Uy();
  Yt(e, () => {
    oi(t.disabled) || (oi(e) ? n.pause() : n.unpause());
  }), Hr(() => {
    n.unpause();
  });
}
const $_ = ["top", "right", "bottom", "left"], md = ["start", "end"], vd = /* @__PURE__ */ $_.reduce((e, t) => e.concat(t, t + "-" + md[0], t + "-" + md[1]), []), Pr = Math.min, ec = Math.max, z_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Gp(e, t, n) {
  return ec(e, Pr(t, n));
}
function la(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fi(e) {
  return e.split("-")[0];
}
function Ln(e) {
  return e.split("-")[1];
}
function Kp(e) {
  return e === "x" ? "y" : "x";
}
function Mc(e) {
  return e === "y" ? "height" : "width";
}
function ri(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function $c(e) {
  return Kp(ri(e));
}
function qp(e, t, n) {
  n === void 0 && (n = !1);
  const i = Ln(e), a = $c(e), r = Mc(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ho(o)), [o, Ho(o)];
}
function U_(e) {
  const t = Ho(e);
  return [Bo(e), t, Bo(t)];
}
function Bo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const gd = ["left", "right"], bd = ["right", "left"], B_ = ["top", "bottom"], H_ = ["bottom", "top"];
function j_(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? bd : gd : t ? gd : bd;
    case "left":
    case "right":
      return t ? B_ : H_;
    default:
      return [];
  }
}
function V_(e, t, n, i) {
  const a = Ln(e);
  let r = j_(fi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Bo)))), r;
}
function Ho(e) {
  const t = fi(e);
  return z_[t] + e.slice(t.length);
}
function G_(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Wp(e) {
  return typeof e != "number" ? G_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fr(e) {
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
function yd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ri(t), o = $c(t), s = Mc(o), l = fi(t), p = r === "y", c = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, g = i[s] / 2 - a[s] / 2;
  let w;
  switch (l) {
    case "top":
      w = {
        x: c,
        y: i.y - a.height
      };
      break;
    case "bottom":
      w = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      w = {
        x: i.x + i.width,
        y: f
      };
      break;
    case "left":
      w = {
        x: i.x - a.width,
        y: f
      };
      break;
    default:
      w = {
        x: i.x,
        y: i.y
      };
  }
  const A = Ln(t);
  return A && (w[o] += g * (A === "end" ? 1 : -1) * (n && p ? -1 : 1)), w;
}
async function K_(e, t) {
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
    elementContext: f = "floating",
    altBoundary: g = !1,
    padding: w = 0
  } = la(t, e), A = Wp(w), k = s[g ? f === "floating" ? "reference" : "floating" : f], P = fr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(k))) == null || n ? k : k.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: p,
    rootBoundary: c,
    strategy: l
  })), R = f === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(I)) && await (r.getScale == null ? void 0 : r.getScale(I)) || {
    x: 1,
    y: 1
  }, re = fr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: R,
    offsetParent: I,
    strategy: l
  }) : R);
  return {
    top: (P.top - re.top + A.top) / $.y,
    bottom: (re.bottom - P.bottom + A.bottom) / $.y,
    left: (P.left - re.left + A.left) / $.x,
    right: (re.right - P.right + A.right) / $.x
  };
}
const q_ = 50, W_ = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, s = o.detectOverflow ? o : {
    ...o,
    detectOverflow: K_
  }, l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let p = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: f
  } = yd(p, i, l), g = i, w = 0;
  const A = {};
  for (let E = 0; E < r.length; E++) {
    const k = r[E];
    if (!k)
      continue;
    const {
      name: P,
      fn: R
    } = k, {
      x: I,
      y: $,
      data: re,
      reset: ue
    } = await R({
      x: c,
      y: f,
      initialPlacement: i,
      placement: g,
      strategy: a,
      middlewareData: A,
      rects: p,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = I ?? c, f = $ ?? f, A[P] = {
      ...A[P],
      ...re
    }, ue && w < q_ && (w++, typeof ue == "object" && (ue.placement && (g = ue.placement), ue.rects && (p = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: c,
      y: f
    } = yd(p, g, l)), E = -1);
  }
  return {
    x: c,
    y: f,
    placement: g,
    strategy: a,
    middlewareData: A
  };
}, Y_ = (e) => ({
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
    } = la(e, t) || {};
    if (p == null)
      return {};
    const f = Wp(c), g = {
      x: n,
      y: i
    }, w = $c(a), A = Mc(w), E = await o.getDimensions(p), k = w === "y", P = k ? "top" : "left", R = k ? "bottom" : "right", I = k ? "clientHeight" : "clientWidth", $ = r.reference[A] + r.reference[w] - g[w] - r.floating[A], re = g[w] - r.reference[w], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(p));
    let ee = ue ? ue[I] : 0;
    (!ee || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (ee = s.floating[I] || r.floating[A]);
    const de = $ / 2 - re / 2, K = ee / 2 - E[A] / 2 - 1, se = Pr(f[P], K), ve = Pr(f[R], K), q = ee - E[A] - ve, ie = ee / 2 - E[A] / 2 + de, F = Gp(se, ie, q), M = !l.arrow && Ln(a) != null && ie !== F && r.reference[A] / 2 - (ie < se ? se : ve) - E[A] / 2 < 0, Y = M ? ie < se ? ie - se : ie - q : 0;
    return {
      [w]: g[w] + Y,
      data: {
        [w]: F,
        centerOffset: ie - F - Y,
        ...M && {
          alignmentOffset: Y
        }
      },
      reset: M
    };
  }
});
function Z_(e, t, n) {
  return (e ? [...n.filter((a) => Ln(a) === e), ...n.filter((a) => Ln(a) !== e)] : n.filter((a) => fi(a) === a)).filter((a) => e ? Ln(a) === e || (t ? Bo(a) !== a : !1) : !0);
}
const X_ = function(e) {
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
        alignment: f,
        allowedPlacements: g = vd,
        autoAlignment: w = !0,
        ...A
      } = la(e, t), E = f !== void 0 || g === vd ? Z_(f || null, w, g) : g, k = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, P = E[k];
      if (P == null)
        return {};
      if (s !== P)
        return {
          reset: {
            placement: E[0]
          }
        };
      const R = await l.detectOverflow(t, A), I = qp(P, r, await (l.isRTL == null ? void 0 : l.isRTL(p.floating))), $ = [R[fi(P)], R[I[0]], R[I[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: P,
        overflows: $
      }], ue = E[k + 1];
      if (ue)
        return {
          data: {
            index: k + 1,
            overflows: re
          },
          reset: {
            placement: ue
          }
        };
      const ee = re.map((se) => {
        const ve = Ln(se.placement);
        return [se.placement, ve && c ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((q, ie) => q + ie, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ve) => se[1] - ve[1]), K = ((a = ee.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ln(se[0]) ? 2 : 3
      ).every((ve) => ve <= 0))[0]) == null ? void 0 : a[0]) || ee[0][0];
      return K !== s ? {
        data: {
          index: k + 1,
          overflows: re
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, J_ = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: g,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: E = !0,
        ...k
      } = la(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const P = fi(a), R = ri(s), I = fi(s) === s, $ = await (l.isRTL == null ? void 0 : l.isRTL(p.floating)), re = g || (I || !E ? [Ho(s)] : U_(s)), ue = A !== "none";
      !g && ue && re.push(...V_(s, E, A, $));
      const ee = [s, ...re], de = await l.detectOverflow(t, k), K = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && K.push(de[P]), f) {
        const F = qp(a, o, $);
        K.push(de[F[0]], de[F[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: K
      }], !K.every((F) => F <= 0)) {
        var ve, q;
        const F = (((ve = r.flip) == null ? void 0 : ve.index) || 0) + 1, M = ee[F];
        if (M && (!(f === "alignment" ? R !== ri(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((te) => ri(te.placement) === R ? te.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: se
            },
            reset: {
              placement: M
            }
          };
        let Y = (q = se.filter((ae) => ae.overflows[0] <= 0).sort((ae, te) => ae.overflows[1] - te.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!Y)
          switch (w) {
            case "bestFit": {
              var ie;
              const ae = (ie = se.filter((te) => {
                if (ue) {
                  const pe = ri(te.placement);
                  return pe === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((te) => [te.placement, te.overflows.filter((pe) => pe > 0).reduce((pe, he) => pe + he, 0)]).sort((te, pe) => te[1] - pe[1])[0]) == null ? void 0 : ie[0];
              ae && (Y = ae);
              break;
            }
            case "initialPlacement":
              Y = s;
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
}, Q_ = /* @__PURE__ */ new Set(["left", "top"]);
async function e1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = fi(n), s = Ln(n), l = ri(n) === "y", p = Q_.has(o) ? -1 : 1, c = r && l ? -1 : 1, f = la(t, e);
  let {
    mainAxis: g,
    crossAxis: w,
    alignmentAxis: A
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof A == "number" && (w = s === "end" ? A * -1 : A), l ? {
    x: w * c,
    y: g * p
  } : {
    x: g * p,
    y: w * c
  };
}
const t1 = function(e) {
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
      } = t, l = await e1(t, e);
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
}, n1 = function(e) {
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
          fn: (R) => {
            let {
              x: I,
              y: $
            } = R;
            return {
              x: I,
              y: $
            };
          }
        },
        ...p
      } = la(e, t), c = {
        x: n,
        y: i
      }, f = await r.detectOverflow(t, p), g = ri(a), w = Kp(g);
      let A = c[w], E = c[g];
      const k = (R, I) => Gp(I + f[R === "y" ? "top" : "left"], I, I - f[R === "y" ? "bottom" : "right"]);
      o && (A = k(w, A)), s && (E = k(g, E));
      const P = l.fn({
        ...t,
        [w]: A,
        [g]: E
      });
      return {
        ...P,
        data: {
          x: P.x - n,
          y: P.y - i,
          enabled: {
            [w]: o,
            [g]: s
          }
        }
      };
    }
  };
}, i1 = function(e) {
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
      } = la(e, t), l = await a.detectOverflow(t, s), p = fi(n), c = Ln(n), f = ri(n) === "y", {
        width: g,
        height: w
      } = i.floating;
      let A, E;
      p === "top" || p === "bottom" ? (A = p, E = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (E = p, A = c === "end" ? "top" : "bottom");
      const k = w - l.top - l.bottom, P = g - l.left - l.right, R = Pr(w - l[A], k), I = Pr(g - l[E], P), $ = t.middlewareData.shift, re = !$;
      let ue = R, ee = I;
      $ != null && $.enabled.x && (ee = P), $ != null && $.enabled.y && (ue = k), re && !c && (f ? ee = g - 2 * ec(l.left, l.right) : ue = w - 2 * ec(l.top, l.bottom)), await o({
        ...t,
        availableWidth: ee,
        availableHeight: ue
      });
      const de = await a.getDimensions(r.floating);
      return g !== de.width || w !== de.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vn(e) {
  return vn(e).getComputedStyle(e);
}
const _d = Math.min, pr = Math.max, jo = Math.round;
function Yp(e) {
  const t = Vn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = jo(n) !== a || jo(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Ii(e) {
  return Xp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let oo;
function Zp() {
  if (oo) return oo;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (oo = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), oo) : navigator.userAgent;
}
function Gn(e) {
  return e instanceof vn(e).HTMLElement;
}
function xi(e) {
  return e instanceof vn(e).Element;
}
function Xp(e) {
  return e instanceof vn(e).Node;
}
function wd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof vn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ms(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function a1(e) {
  return ["table", "td", "th"].includes(Ii(e));
}
function tc(e) {
  const t = /firefox/i.test(Zp()), n = Vn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Jp() {
  return !/^((?!chrome|android).)*safari/i.test(Zp());
}
function zc(e) {
  return ["html", "body", "#document"].includes(Ii(e));
}
function Qp(e) {
  return xi(e) ? e : e.contextElement;
}
const eh = { x: 1, y: 1 };
function La(e) {
  const t = Qp(e);
  if (!Gn(t)) return eh;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Yp(t);
  let o = (r ? jo(n.width) : n.width) / i, s = (r ? jo(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function Dr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Qp(e);
  let l = eh;
  t && (i ? xi(i) && (l = La(i)) : l = La(e));
  const p = s ? vn(s) : window, c = !Jp() && n;
  let f = (o.left + (c && ((a = p.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, g = (o.top + (c && ((r = p.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, w = o.width / l.x, A = o.height / l.y;
  if (s) {
    const E = vn(s), k = i && xi(i) ? vn(i) : i;
    let P = E.frameElement;
    for (; P && i && k !== E; ) {
      const R = La(P), I = P.getBoundingClientRect(), $ = getComputedStyle(P);
      I.x += (P.clientLeft + parseFloat($.paddingLeft)) * R.x, I.y += (P.clientTop + parseFloat($.paddingTop)) * R.y, f *= R.x, g *= R.y, w *= R.x, A *= R.y, f += I.x, g += I.y, P = vn(P).frameElement;
    }
  }
  return { width: w, height: A, top: g, right: f + w, bottom: g + A, left: f, x: f, y: g };
}
function Ni(e) {
  return ((Xp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $s(e) {
  return xi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function th(e) {
  return Dr(Ni(e)).left + $s(e).scrollLeft;
}
function Fr(e) {
  if (Ii(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || wd(e) && e.host || Ni(e);
  return wd(t) ? t.host : t;
}
function nh(e) {
  const t = Fr(e);
  return zc(t) ? t.ownerDocument.body : Gn(t) && Ms(t) ? t : nh(t);
}
function Vo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = nh(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = vn(i);
  return a ? t.concat(r, r.visualViewport || [], Ms(i) ? i : []) : t.concat(i, Vo(i));
}
function Cd(e, t, n) {
  return t === "viewport" ? fr((function(i, a) {
    const r = vn(i), o = Ni(i), s = r.visualViewport;
    let l = o.clientWidth, p = o.clientHeight, c = 0, f = 0;
    if (s) {
      l = s.width, p = s.height;
      const g = Jp();
      (g || !g && a === "fixed") && (c = s.offsetLeft, f = s.offsetTop);
    }
    return { width: l, height: p, x: c, y: f };
  })(e, n)) : xi(t) ? fr((function(i, a) {
    const r = Dr(i, !0, a === "fixed"), o = r.top + i.clientTop, s = r.left + i.clientLeft, l = Gn(i) ? La(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: s * l.x, y: o * l.y };
  })(t, n)) : fr((function(i) {
    const a = Ni(i), r = $s(i), o = i.ownerDocument.body, s = pr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), l = pr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let p = -r.scrollLeft + th(i);
    const c = -r.scrollTop;
    return Vn(o).direction === "rtl" && (p += pr(a.clientWidth, o.clientWidth) - s), { width: s, height: l, x: p, y: c };
  })(Ni(e)));
}
function Ed(e) {
  return Gn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null;
}
function Sd(e) {
  const t = vn(e);
  let n = Ed(e);
  for (; n && a1(n) && Vn(n).position === "static"; ) n = Ed(n);
  return n && (Ii(n) === "html" || Ii(n) === "body" && Vn(n).position === "static" && !tc(n)) ? t : n || (function(i) {
    let a = Fr(i);
    for (; Gn(a) && !zc(a); ) {
      if (tc(a)) return a;
      a = Fr(a);
    }
    return null;
  })(e) || t;
}
function r1(e, t, n) {
  const i = Gn(t), a = Ni(t), r = Dr(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Ii(t) !== "body" || Ms(a)) && (o = $s(t)), Gn(t)) {
    const l = Dr(t, !0);
    s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
  } else a && (s.x = th(a));
  return { x: r.left + o.scrollLeft - s.x, y: r.top + o.scrollTop - s.y, width: r.width, height: r.height };
}
const o1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(p, c) {
    const f = c.get(p);
    if (f) return f;
    let g = Vo(p).filter(((k) => xi(k) && Ii(k) !== "body")), w = null;
    const A = Vn(p).position === "fixed";
    let E = A ? Fr(p) : p;
    for (; xi(E) && !zc(E); ) {
      const k = Vn(E), P = tc(E);
      (A ? P || w : P || k.position !== "static" || !w || !["absolute", "fixed"].includes(w.position)) ? w = k : g = g.filter(((R) => R !== E)), E = Fr(E);
    }
    return c.set(p, g), g;
  })(t, this._c) : [].concat(n), o = [...r, i], s = o[0], l = o.reduce(((p, c) => {
    const f = Cd(t, c, a);
    return p.top = pr(f.top, p.top), p.right = _d(f.right, p.right), p.bottom = _d(f.bottom, p.bottom), p.left = pr(f.left, p.left), p;
  }), Cd(t, s, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Gn(n), r = Ni(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ii(n) !== "body" || Ms(r)) && (o = $s(n)), Gn(n))) {
    const p = Dr(n);
    s = La(n), l.x = p.x + n.clientLeft, l.y = p.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + l.x, y: t.y * s.y - o.scrollTop * s.y + l.y };
}, isElement: xi, getDimensions: function(e) {
  return Gn(e) ? Yp(e) : e.getBoundingClientRect();
}, getOffsetParent: Sd, getDocumentElement: Ni, getScale: La, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Sd, r = this.getDimensions;
  return { reference: r1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Vn(e).direction === "rtl" }, s1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: o1, ...n }, r = { ...a.platform, _c: i };
  return W_(e, t, { ...a, platform: r });
}, Oi = {
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
function nc(e, t) {
  let n = Oi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Oi.themes[n.$extend] || {} : (n = null, i = Oi[t]) : n = null;
  while (n);
  return i;
}
function l1(e) {
  const t = [e];
  let n = Oi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Oi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Td(e) {
  const t = [e];
  let n = Oi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Oi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Mr = !1;
if (typeof window < "u") {
  Mr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Mr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let ih = !1;
typeof window < "u" && typeof navigator < "u" && (ih = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const c1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ad = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, kd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function xd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Sl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Nn = [];
let Gi = null;
const Nd = {};
function Od(e) {
  let t = Nd[e];
  return t || (t = Nd[e] = []), t;
}
let ic = function() {
};
typeof window < "u" && (ic = window.Element);
function He(e) {
  return function(t) {
    return nc(t.theme, e);
  };
}
const Tl = "__floating-vue__popper", ah = () => /* @__PURE__ */ xt({
  name: "VPopper",
  provide() {
    return {
      [Tl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Tl]: { default: null }
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
      default: He("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: He("positioningDisabled")
    },
    placement: {
      type: String,
      default: He("placement"),
      validator: (e) => c1.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: He("delay")
    },
    distance: {
      type: [Number, String],
      default: He("distance")
    },
    skidding: {
      type: [Number, String],
      default: He("skidding")
    },
    triggers: {
      type: Array,
      default: He("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: He("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: He("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: He("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: He("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: He("popperHideTriggers")
    },
    container: {
      type: [String, Object, ic, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, ic],
      default: He("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: He("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: He("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: He("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: He("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: He("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: He("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: He("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: He("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: He("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: He("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: He("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: He("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: He("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: He("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: He("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: He("flip")
    },
    shift: {
      type: Boolean,
      default: He("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: He("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: He("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: He("disposeTimeout")
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
      return (e = this[Tl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(t1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(X_({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(n1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(J_({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Y_({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(i1({
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Gi && this.instantMove && Gi.instantMove && Gi !== this.parentPopper) {
        Gi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Gi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Sl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Vo(this.$_referenceNode),
        ...Vo(this.$_popperNode)
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
        for (let n = 0; n < Nn.length; n++)
          t = Nn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Nn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Td(this.theme))
        Od(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Sl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, xd(Nn, this), Nn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Td(this.theme)) {
        const i = Od(n);
        xd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Gi === this && (Gi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Sl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Ad, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ad, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, kd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], kd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Mr ? {
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
      if (hr >= e.left && hr <= e.right && mr >= e.top && mr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = hr - Ei, i = mr - Si, a = t.left + t.width / 2 - Ei + (t.top + t.height / 2) - Si + t.width + t.height, r = Ei + n * a, o = Si + i * a;
        return so(Ei, Si, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        so(Ei, Si, r, o, t.left, t.top, t.right, t.top) || // Top edge
        so(Ei, Si, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        so(Ei, Si, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (ih) {
    const e = Mr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Ld(t), e), document.addEventListener("touchend", (t) => Rd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Ld(e), !0), window.addEventListener("click", (e) => Rd(e, !1), !0);
  window.addEventListener("resize", f1);
}
function Ld(e, t) {
  for (let n = 0; n < Nn.length; n++) {
    const i = Nn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Rd(e, t) {
  u1(e, t);
}
function u1(e, t) {
  const n = {};
  for (let i = Nn.length - 1; i >= 0; i--) {
    const a = Nn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Id(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let s = a.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Id(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Id(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || d1(e, n) && !t;
}
function d1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function f1() {
  for (let e = 0; e < Nn.length; e++)
    Nn[e].$_computePosition();
}
let Ei = 0, Si = 0, hr = 0, mr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ei = hr, Si = mr, hr = e.clientX, mr = e.clientY;
}, Mr ? {
  passive: !0
} : void 0);
function so(e, t, n, i, a, r, o, s) {
  const l = ((o - a) * (t - r) - (s - r) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t)), p = ((n - e) * (t - r) - (i - t) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t));
  return l >= 0 && l <= 1 && p >= 0 && p <= 1;
}
const p1 = {
  extends: ah()
}, Uc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function h1(e, t, n, i, a, r) {
  return C(), T("div", {
    ref: "reference",
    class: Oe(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", bo(Nr(e.slotData)))
  ], 2);
}
const m1 = /* @__PURE__ */ Uc(p1, [["render", h1]]);
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
let mo;
function ac() {
  ac.init || (ac.init = !0, mo = v1() !== -1);
}
var zs = {
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
    ac(), ia(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", mo && this.$el.appendChild(e), e.data = "about:blank", mo || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!mo && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const g1 = /* @__PURE__ */ hm();
fm("data-v-b329ee4c");
const b1 = {
  class: "resize-observer",
  tabindex: "-1"
};
pm();
const y1 = /* @__PURE__ */ g1((e, t, n, i, a, r) => (C(), Be("div", b1)));
zs.render = y1;
zs.__scopeId = "data-v-b329ee4c";
zs.__file = "src/components/ResizeObserver.vue";
const rh = (e = "theme") => ({
  computed: {
    themeClass() {
      return l1(this[e]);
    }
  }
}), _1 = /* @__PURE__ */ xt({
  name: "VPopperContent",
  components: {
    ResizeObserver: zs
  },
  mixins: [
    rh()
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
}), w1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], C1 = {
  ref: "inner",
  class: "v-popper__inner"
}, E1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-outer" }, null, -1), S1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-inner" }, null, -1), T1 = [
  E1,
  S1
];
function A1(e, t, n, i, a, r) {
  const o = je("ResizeObserver");
  return C(), T("div", {
    id: e.popperId,
    ref: "popover",
    class: Oe(["v-popper__popper", [
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
    style: bn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Wt((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    u("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    u("div", {
      class: "v-popper__wrapper",
      style: bn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      u("div", C1, [
        e.mounted ? (C(), T(be, { key: 0 }, [
          u("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (C(), Be(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : G("", !0)
        ], 64)) : G("", !0)
      ], 512),
      u("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: bn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, T1, 4)
    ], 4)
  ], 46, w1);
}
const oh = /* @__PURE__ */ Uc(_1, [["render", A1]]), sh = {
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
let rc = function() {
};
typeof window < "u" && (rc = window.Element);
const k1 = /* @__PURE__ */ xt({
  name: "VPopperWrapper",
  components: {
    Popper: m1,
    PopperContent: oh
  },
  mixins: [
    sh,
    rh("finalTheme")
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
      type: [String, Object, rc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, rc],
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
function x1(e, t, n, i, a, r) {
  const o = je("PopperContent"), s = je("Popper");
  return C(), Be(s, Ft({ ref: "popper" }, e.$props, {
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
    default: Fe(({
      popperId: l,
      isShown: p,
      shouldMountContent: c,
      skipTransition: f,
      autoHide: g,
      show: w,
      hide: A,
      handleResize: E,
      onResize: k,
      classes: P,
      result: R
    }) => [
      Me(e.$slots, "default", {
        shown: p,
        show: w,
        hide: A
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: p,
        mounted: c,
        "skip-transition": f,
        "auto-hide": g,
        "handle-resize": E,
        classes: P,
        result: R,
        onHide: A,
        onResize: k
      }, {
        default: Fe(() => [
          Me(e.$slots, "popper", {
            shown: p,
            hide: A
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Bc = /* @__PURE__ */ Uc(k1, [["render", x1]]), N1 = {
  ...Bc,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Bc
});
({
  ...Bc
});
ah();
const Pd = Oi, O1 = N1, L1 = /* @__PURE__ */ xt({
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
}), R1 = "_ncPopover_qgtYg", I1 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: R1
}, lh = "nc-popover-9";
Pd.themes[lh] = structuredClone(Pd.themes.dropdown);
const P1 = {
  name: "NcPopover",
  components: {
    Dropdown: O1,
    NcPopoverTriggerProvider: L1
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
      theme: lh
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
      return this.placement === "start" ? Xl ? "right" : "left" : this.placement === "end" ? Xl ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Fc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Ir(),
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
        aa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function D1(e, t, n, i, a, r) {
  const o = je("NcPopoverTriggerProvider"), s = je("Dropdown");
  return C(), Be(s, {
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
    popper: Fe((l) => [
      Me(e.$slots, "default", bo(Nr(l)))
    ]),
    default: Fe(() => [
      Ae(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Fe((l) => [
          Me(e.$slots, "trigger", bo(Nr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const F1 = {
  $style: I1
}, Dd = /* @__PURE__ */ et(P1, [["render", D1], ["__cssModules", F1]]), M1 = {
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
}, $1 = ["aria-hidden", "aria-label"], z1 = ["fill", "width", "height"], U1 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, B1 = { key: 0 };
function H1(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", U1, [
        n.title ? (C(), T("title", B1, m(n.title), 1)) : G("", !0)
      ])
    ], 8, z1))
  ], 16, $1);
}
const j1 = /* @__PURE__ */ et(M1, [["render", H1]]);
Di(wb);
function Hc(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === At)
        return !1;
      if (n.type === be && !Hc(n.children))
        return !1;
      if (n.type === jr && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const V1 = ".focusable", G1 = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: Dd
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
      [jp]: W(() => this.actionsMenuSemanticType === "menu"),
      [Vp]: this.closeMenu
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
      default: yt("Actions")
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
      randomId: Fs()
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
      return this.$refs.menu.querySelectorAll(V1);
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
    const e = [], t = (w, A) => {
      w.forEach((E) => {
        if (this.isAction(E)) {
          A.push(E);
          return;
        }
        E.type === be && t(E.children, A);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((w) => !i.includes(w)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], s = ["NcActionLink", "NcActionRouter"], l = a.some((w) => o.includes(this.getActionName(w))), p = a.some((w) => r.includes(this.getActionName(w))), c = a.some((w) => s.includes(this.getActionName(w)));
    l ? this.actionsMenuSemanticType = "dialog" : p ? this.actionsMenuSemanticType = "menu" : c ? this.actionsMenuSemanticType = "navigation" : e.filter((A) => this.getActionName(A).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const f = (w) => {
      const A = w?.props?.icon, E = w?.children?.icon?.()?.[0] ?? (this.isIconUrl(A) ? Kt("img", { class: "action-item__menutoggle__icon", src: A, alt: "" }) : Kt("span", { class: ["icon", A] })), k = w?.children?.default?.()?.[0]?.children?.trim(), P = this.forceName ? k : "";
      let R = w?.props?.title;
      this.forceName || R || (R = k);
      const I = { ...w?.props ?? {} }, $ = ["submit", "reset"].includes(I.type) ? I.modelValue : "button";
      return delete I.modelValue, delete I.type, Kt(
        jn,
        Ft(
          I,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": w?.props?.["aria-label"] || k,
            title: R,
            disabled: this.disabled || w?.props?.disabled,
            pressed: w?.props?.modelValue,
            size: this.size,
            type: $,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (P ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": w?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => P,
          icon: () => E
        }
      );
    }, g = (w) => {
      const A = Hc(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Kt("span", { class: ["icon", this.defaultIcon] }) : Kt(j1, { size: 20 }), E = `${this.randomId}-trigger`;
      return Kt(
        Dd,
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
          trigger: () => Kt(jn, {
            id: E,
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
            icon: () => A,
            default: () => this.menuName
          }),
          default: () => Kt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Kt("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": E,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              w
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? f(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Kt(
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
        a.length > 0 ? Kt(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [g(a)]
        ) : null
      ]
    ) : Kt(
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
        g(e)
      ]
    ));
  }
}, ch = /* @__PURE__ */ et(G1, [["__scopeId", "data-v-7206c1f1"]]), K1 = ["aria-label"], q1 = ["width", "height"], W1 = ["fill"], Y1 = ["fill"], Z1 = { key: 0 }, X1 = /* @__PURE__ */ xt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = W(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (C(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (C(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        u("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, W1),
        u("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (C(), T("title", Z1, m(e.name), 1)) : G("", !0)
        ], 8, Y1)
      ], 8, q1))
    ], 8, K1));
  }
}), uh = /* @__PURE__ */ et(X1, [["__scopeId", "data-v-cf399190"]]), oc = /* @__PURE__ */ xt({
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
}), J1 = {
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
}, Q1 = ["aria-hidden", "aria-label"], e0 = ["fill", "width", "height"], t0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, n0 = { key: 0 };
function i0(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", t0, [
        n.title ? (C(), T("title", n0, m(n.title), 1)) : G("", !0)
      ])
    ], 8, e0))
  ], 16, Q1);
}
const a0 = /* @__PURE__ */ et(J1, [["render", i0]]), r0 = {
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
}, o0 = ["aria-hidden", "aria-label"], s0 = ["fill", "width", "height"], l0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, c0 = { key: 0 };
function u0(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", l0, [
        n.title ? (C(), T("title", c0, m(n.title), 1)) : G("", !0)
      ])
    ], 8, s0))
  ], 16, o0);
}
const d0 = /* @__PURE__ */ et(r0, [["render", u0]]);
Di(Tb);
const f0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: e_,
    ChevronUp: s_
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
    return { isLegacy34: Fi };
  },
  computed: {
    labelButton() {
      return this.open ? yt("Collapse menu") : yt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function p0(e, t, n, i, a, r) {
  const o = je("ChevronUp"), s = je("ChevronDown"), l = je("NcButton");
  return C(), Be(l, {
    class: Oe(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Fe(() => [
      n.open ? (C(), Be(o, {
        key: 0,
        size: 20
      })) : (C(), Be(s, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const h0 = /* @__PURE__ */ et(f0, [["render", p0], ["__scopeId", "data-v-cfbd3794"]]);
Di(Ab, Nb);
const m0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: ch,
    NcActionButton: F_,
    NcAppNavigationIconCollapsible: h0,
    NcInputConfirmCancel: E_,
    NcLoadingIcon: uh,
    NcVNodes: oc,
    Pencil: a0,
    Undo: d0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Mp, default: null }
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
      default: () => Fs(),
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
      isMobile: Gr(),
      isLegacy34: Fi
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
      return this.editLabel ? this.editLabel : yt("Edit item");
    },
    undoButtonAriaLabel() {
      return yt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && li("toggle-navigation", { open: !1 }));
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
}, v0 = ["id"], g0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], b0 = {
  key: 0,
  class: "editingContainer"
}, y0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, _0 = { class: "app-navigation-entry__deleted-description" }, w0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, C0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function E0(e, t, n, i, a, r) {
  const o = je("NcLoadingIcon"), s = je("NcInputConfirmCancel"), l = je("Pencil"), p = je("NcActionButton"), c = je("Undo"), f = je("NcActions"), g = je("NcAppNavigationIconCollapsible");
  return C(), T("li", {
    id: n.id,
    class: Oe([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (C(), Be(Ac(r.isRouterLink ? "router-link" : "NcVNodes"), bo(Nr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Fe(({ href: w, navigate: A, isActive: E }) => [
        u("div", {
          ref: "entry",
          class: Oe(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && E || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...k) => r.requestHighlight && r.requestHighlight(...k)),
          onFocusin: t[5] || (t[5] = (...k) => r.requestHighlight && r.requestHighlight(...k))
        }, [
          n.undo ? G("", !0) : (C(), T("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && E ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || w || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...k) => r.handleBlur && r.handleBlur(...k)),
            onClick: (k) => r.onClick(k, A, w),
            onFocus: t[2] || (t[2] = (...k) => r.handleFocus && r.handleFocus(...k)),
            onKeydown: t[3] || (t[3] = Wt(ut((...k) => r.handleTab && r.handleTab(...k), ["exact"]), ["tab"]))
          }, [
            u("div", {
              class: Oe(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (C(), Be(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && E
              }, void 0, !0)
            ], 2),
            u("span", {
              class: Oe(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, m(n.name), 3),
            a.editingActive ? (C(), T("div", b0, [
              Ae(s, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (k) => a.editingValue = k),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && E || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : G("", !0)
          ], 40, g0)),
          n.undo ? (C(), T("div", y0, [
            u("div", _0, m(n.name), 1)
          ])) : G("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (C(), T("div", {
            key: 2,
            class: Oe(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (C(), T("div", w0, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : G("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (C(), Be(f, {
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
              icon: Fe(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Fe(() => [
                n.editable && !a.editingActive ? (C(), Be(p, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Fe(() => [
                    Ae(l, { size: 20 })
                  ]),
                  default: Fe(() => [
                    Pe(" " + m(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : G("", !0),
                n.undo ? (C(), Be(p, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Fe(() => [
                    Ae(c, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : G("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : G("", !0)
          ], 2)) : G("", !0),
          n.allowCollapse && e.$slots.default ? (C(), Be(g, {
            key: 3,
            active: n.to && E || n.active,
            open: a.opened,
            onClick: ut(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : G("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (C(), T("ul", C0, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : G("", !0)
  ], 10, v0);
}
const Fd = /* @__PURE__ */ et(m0, [["render", E0], ["__scopeId", "data-v-01bef41b"]]), Al = /* @__PURE__ */ new WeakMap(), S0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = sd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = sd(e, a, Object.assign({ capture: n }, r));
    }
    Al.set(e, i);
  },
  unmounted(e) {
    const t = Al.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Al.delete(e);
  }
}, T0 = {
  mounted(e) {
    e.focus();
  }
}, A0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", k0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", sc = "numeric", lc = "ascii", cc = "alpha", vr = "asciinumeric", rr = "alphanumeric", uc = "domain", dh = "emoji", x0 = "scheme", N0 = "slashscheme", kl = "whitespace";
function O0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Qi(e, t, n) {
  t[sc] && (t[vr] = !0, t[rr] = !0), t[lc] && (t[vr] = !0, t[cc] = !0), t[vr] && (t[rr] = !0), t[cc] && (t[rr] = !0), t[rr] && (t[uc] = !0), t[dh] && (t[uc] = !0);
  for (const i in t) {
    const a = O0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function L0(e, t) {
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
    return t && t.j ? a = t : (a = new en(t), n && i && Qi(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || en.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, s = a.go(e);
    if (s ? (o = new en(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new en(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const l = Object.assign(L0(o.t, i), n);
          Qi(r, l, i);
        } else n && Qi(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const $e = (e, t, n, i, a) => e.ta(t, n, i, a), pt = (e, t, n, i, a) => e.tr(t, n, i, a), Md = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), Qn = "WORD", dc = "UWORD", fh = "ASCIINUMERICAL", ph = "ALPHANUMERICAL", $r = "LOCALHOST", fc = "TLD", pc = "UTLD", vo = "SCHEME", Ea = "SLASH_SCHEME", jc = "NUM", hc = "WS", Vc = "NL", gr = "OPENBRACE", br = "CLOSEBRACE", Go = "OPENBRACKET", Ko = "CLOSEBRACKET", qo = "OPENPAREN", Wo = "CLOSEPAREN", Yo = "OPENANGLEBRACKET", Zo = "CLOSEANGLEBRACKET", Xo = "FULLWIDTHLEFTPAREN", Jo = "FULLWIDTHRIGHTPAREN", Qo = "LEFTCORNERBRACKET", es = "RIGHTCORNERBRACKET", ts = "LEFTWHITECORNERBRACKET", ns = "RIGHTWHITECORNERBRACKET", is = "FULLWIDTHLESSTHAN", as = "FULLWIDTHGREATERTHAN", rs = "AMPERSAND", os = "APOSTROPHE", ss = "ASTERISK", Ai = "AT", ls = "BACKSLASH", cs = "BACKTICK", us = "CARET", ea = "COLON", Gc = "COMMA", ds = "DOLLAR", zn = "DOT", fs = "EQUALS", Kc = "EXCLAMATION", pn = "HYPHEN", yr = "PERCENT", ps = "PIPE", hs = "PLUS", ms = "POUND", _r = "QUERY", qc = "QUOTE", hh = "FULLWIDTHMIDDLEDOT", Wc = "SEMI", Un = "SLASH", wr = "TILDE", vs = "UNDERSCORE", mh = "EMOJI", gs = "SYM";
var vh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: ph,
  AMPERSAND: rs,
  APOSTROPHE: os,
  ASCIINUMERICAL: fh,
  ASTERISK: ss,
  AT: Ai,
  BACKSLASH: ls,
  BACKTICK: cs,
  CARET: us,
  CLOSEANGLEBRACKET: Zo,
  CLOSEBRACE: br,
  CLOSEBRACKET: Ko,
  CLOSEPAREN: Wo,
  COLON: ea,
  COMMA: Gc,
  DOLLAR: ds,
  DOT: zn,
  EMOJI: mh,
  EQUALS: fs,
  EXCLAMATION: Kc,
  FULLWIDTHGREATERTHAN: as,
  FULLWIDTHLEFTPAREN: Xo,
  FULLWIDTHLESSTHAN: is,
  FULLWIDTHMIDDLEDOT: hh,
  FULLWIDTHRIGHTPAREN: Jo,
  HYPHEN: pn,
  LEFTCORNERBRACKET: Qo,
  LEFTWHITECORNERBRACKET: ts,
  LOCALHOST: $r,
  NL: Vc,
  NUM: jc,
  OPENANGLEBRACKET: Yo,
  OPENBRACE: gr,
  OPENBRACKET: Go,
  OPENPAREN: qo,
  PERCENT: yr,
  PIPE: ps,
  PLUS: hs,
  POUND: ms,
  QUERY: _r,
  QUOTE: qc,
  RIGHTCORNERBRACKET: es,
  RIGHTWHITECORNERBRACKET: ns,
  SCHEME: vo,
  SEMI: Wc,
  SLASH: Un,
  SLASH_SCHEME: Ea,
  SYM: gs,
  TILDE: wr,
  TLD: fc,
  UNDERSCORE: vs,
  UTLD: pc,
  UWORD: dc,
  WORD: Qn,
  WS: hc
});
const Xn = /[a-z]/, Ja = new RegExp("\\p{L}", "u"), xl = new RegExp("\\p{Emoji}", "u"), Jn = /\d/, Nl = /\s/, $d = "\r", Ol = `
`, R0 = "️", I0 = "‍", Ll = "￼";
let lo = null, co = null;
function P0(e = []) {
  const t = {};
  en.groups = t;
  const n = new en();
  lo == null && (lo = zd(A0)), co == null && (co = zd(k0)), ne(n, "'", os), ne(n, "{", gr), ne(n, "}", br), ne(n, "[", Go), ne(n, "]", Ko), ne(n, "(", qo), ne(n, ")", Wo), ne(n, "<", Yo), ne(n, ">", Zo), ne(n, "（", Xo), ne(n, "）", Jo), ne(n, "「", Qo), ne(n, "」", es), ne(n, "『", ts), ne(n, "』", ns), ne(n, "＜", is), ne(n, "＞", as), ne(n, "&", rs), ne(n, "*", ss), ne(n, "@", Ai), ne(n, "`", cs), ne(n, "^", us), ne(n, ":", ea), ne(n, ",", Gc), ne(n, "$", ds), ne(n, ".", zn), ne(n, "=", fs), ne(n, "!", Kc), ne(n, "-", pn), ne(n, "%", yr), ne(n, "|", ps), ne(n, "+", hs), ne(n, "#", ms), ne(n, "?", _r), ne(n, '"', qc), ne(n, "/", Un), ne(n, ";", Wc), ne(n, "~", wr), ne(n, "_", vs), ne(n, "\\", ls), ne(n, "・", hh);
  const i = pt(n, Jn, jc, {
    [sc]: !0
  });
  pt(i, Jn, i);
  const a = pt(i, Xn, fh, {
    [vr]: !0
  }), r = pt(i, Ja, ph, {
    [rr]: !0
  }), o = pt(n, Xn, Qn, {
    [lc]: !0
  });
  pt(o, Jn, a), pt(o, Xn, o), pt(a, Jn, a), pt(a, Xn, a);
  const s = pt(n, Ja, dc, {
    [cc]: !0
  });
  pt(s, Xn), pt(s, Jn, r), pt(s, Ja, s), pt(r, Jn, r), pt(r, Xn), pt(r, Ja, r);
  const l = ne(n, Ol, Vc, {
    [kl]: !0
  }), p = ne(n, $d, hc, {
    [kl]: !0
  }), c = pt(n, Nl, hc, {
    [kl]: !0
  });
  ne(n, Ll, c), ne(p, Ol, l), ne(p, Ll, c), pt(p, Nl, c), ne(c, $d), ne(c, Ol), pt(c, Nl, c), ne(c, Ll, c);
  const f = pt(n, xl, mh, {
    [dh]: !0
  });
  ne(f, "#"), pt(f, xl, f), ne(f, R0, f);
  const g = ne(f, I0);
  ne(g, "#"), pt(g, xl, f);
  const w = [[Xn, o], [Jn, a]], A = [[Xn, null], [Ja, s], [Jn, r]];
  for (let E = 0; E < lo.length; E++)
    wi(n, lo[E], fc, Qn, w);
  for (let E = 0; E < co.length; E++)
    wi(n, co[E], pc, dc, A);
  Qi(fc, {
    tld: !0,
    ascii: !0
  }, t), Qi(pc, {
    utld: !0,
    alpha: !0
  }, t), wi(n, "file", vo, Qn, w), wi(n, "mailto", vo, Qn, w), wi(n, "http", Ea, Qn, w), wi(n, "https", Ea, Qn, w), wi(n, "ftp", Ea, Qn, w), wi(n, "ftps", Ea, Qn, w), Qi(vo, {
    scheme: !0,
    ascii: !0
  }, t), Qi(Ea, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((E, k) => E[0] > k[0] ? 1 : -1);
  for (let E = 0; E < e.length; E++) {
    const k = e[E][0], R = e[E][1] ? {
      [x0]: !0
    } : {
      [N0]: !0
    };
    k.indexOf("-") >= 0 ? R[uc] = !0 : Xn.test(k) ? Jn.test(k) ? R[vr] = !0 : R[lc] = !0 : R[sc] = !0, Md(n, k, k, R);
  }
  return Md(n, "localhost", $r, {
    ascii: !0
  }), n.jd = new en(gs), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, vh)
  };
}
function gh(e, t) {
  const n = D0(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let s = e, l = null, p = 0, c = null, f = -1, g = -1;
    for (; o < i && (l = s.go(n[o])); )
      s = l, s.accepts() ? (f = 0, g = 0, c = s) : f >= 0 && (f += n[o].length, g++), p += n[o].length, r += n[o].length, o++;
    r -= f, o -= g, p -= f, a.push({
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
function D0(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function wi(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let s = 0; s < o - 1; s++) {
    const l = t[s];
    e.j[l] ? r = e.j[l] : (r = new en(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new en(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function zd(e) {
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
const zr = {
  defaultProtocol: "http",
  events: null,
  format: Ud,
  formatHref: Ud,
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
function Yc(e, t = null) {
  let n = Object.assign({}, zr);
  e && (n = Object.assign(n, e instanceof Yc ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Yc.prototype = {
  o: zr,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : zr[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Ud(e) {
  return e;
}
function bh(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
bh.prototype = {
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
  toObject(e = zr.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, s = e.get("className", n, t), l = e.get("target", n, t), p = e.get("rel", n, t), c = e.getObj("attributes", n, t), f = e.getObj("events", n, t);
    return o.href = i, s && (o.class = s), l && (o.target = l), p && (o.rel = p), c && Object.assign(o, c), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: f
    };
  }
};
function Us(e, t) {
  class n extends bh {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const F0 = Us("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Bd = Us("text"), M0 = Us("nl"), uo = Us("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = zr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== $r && e[1].t === ea;
  }
}), fn = (e) => new en(e);
function $0({
  groups: e
}) {
  const t = e.domain.concat([rs, ss, Ai, ls, cs, us, ds, fs, pn, jc, yr, ps, hs, ms, Un, gs, wr, vs]), n = [os, ea, Gc, zn, Kc, yr, _r, qc, Wc, Yo, Zo, gr, br, Ko, Go, qo, Wo, Xo, Jo, Qo, es, ts, ns, is, as], i = [rs, os, ss, ls, cs, us, ds, fs, pn, gr, br, yr, ps, hs, ms, _r, Un, gs, wr, vs], a = fn(), r = ne(a, wr);
  $e(r, i, r), $e(r, e.domain, r);
  const o = fn(), s = fn(), l = fn();
  $e(a, e.domain, o), $e(a, e.scheme, s), $e(a, e.slashscheme, l), $e(o, i, r), $e(o, e.domain, o);
  const p = ne(o, Ai);
  ne(r, Ai, p), ne(s, Ai, p), ne(l, Ai, p);
  const c = ne(r, zn);
  $e(c, i, r), $e(c, e.domain, r);
  const f = fn();
  $e(p, e.domain, f), $e(f, e.domain, f);
  const g = ne(f, zn);
  $e(g, e.domain, f);
  const w = fn(F0);
  $e(g, e.tld, w), $e(g, e.utld, w), ne(p, $r, w);
  const A = ne(f, pn);
  ne(A, pn, A), $e(A, e.domain, f), $e(w, e.domain, f), ne(w, zn, g), ne(w, pn, A);
  const E = ne(o, pn), k = ne(o, zn);
  ne(E, pn, E), $e(E, e.domain, o), $e(k, i, r), $e(k, e.domain, o);
  const P = fn(uo);
  $e(k, e.tld, P), $e(k, e.utld, P), $e(P, e.domain, o), $e(P, i, r), ne(P, zn, k), ne(P, pn, E), ne(P, Ai, p);
  const R = ne(P, ea), I = fn(uo);
  $e(R, e.numeric, I);
  const $ = fn(uo), re = fn();
  $e($, t, $), $e($, n, re), $e(re, t, $), $e(re, n, re), ne(P, Un, $), ne(I, Un, $);
  const ue = ne(s, ea), ee = ne(l, ea), de = ne(ee, Un), K = ne(de, Un);
  $e(s, e.domain, o), ne(s, zn, k), ne(s, pn, E), $e(l, e.domain, o), ne(l, zn, k), ne(l, pn, E), $e(ue, e.domain, $), ne(ue, Un, $), ne(ue, _r, $), $e(K, e.domain, $), $e(K, t, $), ne(K, Un, $);
  const se = [
    [gr, br],
    // {}
    [Go, Ko],
    // []
    [qo, Wo],
    // ()
    [Yo, Zo],
    // <>
    [Xo, Jo],
    // （）
    [Qo, es],
    // 「」
    [ts, ns],
    // 『』
    [is, as]
    // ＜＞
  ];
  for (let ve = 0; ve < se.length; ve++) {
    const [q, ie] = se[ve], F = ne($, q);
    ne(re, q, F);
    const M = fn(uo);
    $e(F, t, M);
    const Y = fn();
    $e(F, n, Y), ne(F, ie, $), $e(M, t, M), $e(M, n, Y), $e(Y, t, M), $e(Y, n, Y), ne(M, ie, $), ne(Y, ie, $);
  }
  return ne(a, $r, P), ne(a, Vc, M0), {
    start: a,
    tokens: vh
  };
}
function z0(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let s = e, l = null, p = null, c = 0, f = null, g = -1;
    for (; a < i && !(l = s.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (p = l || s.go(n[a].t)); )
      l = null, s = p, s.accepts() ? (g = 0, f = s) : g >= 0 && g++, a++, c++;
    if (g < 0)
      a -= c, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(Rl(Bd, t, o)), o = []), a -= g, c -= g;
      const w = f.t, A = n.slice(a - c, a);
      r.push(Rl(w, t, A));
    }
  }
  return o.length > 0 && r.push(Rl(Bd, t, o)), r;
}
function Rl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Ot = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function U0() {
  Ot.scanner = P0(Ot.customSchemes);
  for (let e = 0; e < Ot.tokenQueue.length; e++)
    Ot.tokenQueue[e][1]({
      scanner: Ot.scanner
    });
  Ot.parser = $0(Ot.scanner.tokens);
  for (let e = 0; e < Ot.pluginQueue.length; e++)
    Ot.pluginQueue[e][1]({
      scanner: Ot.scanner,
      parser: Ot.parser
    });
  return Ot.initialized = !0, Ot;
}
function yh(e) {
  return Ot.initialized || U0(), z0(Ot.parser.start, e, gh(Ot.scanner.start, e));
}
yh.scan = gh;
function B0(e) {
  const t = new Yc({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, V0), n = yh(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Io(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function H0(e) {
  return e.replace(/"/g, "&quot;");
}
function j0(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${H0(i)}"`);
  }
  return t.join(" ");
}
function V0({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${j0(t)}>${Io(n)}</${e}>`;
}
const G0 = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = B0(t.text));
}, K0 = ["title"], q0 = /* @__PURE__ */ xt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Rt("NcAppSidebar:header:ref");
    return (n, i) => ct((C(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Pe(m(e.name), 1)
    ], 8, K0)), [
      [v(G0), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), W0 = ["aria-labelledby"], Y0 = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Z0 = ["id"], X0 = {
  key: 2,
  class: "empty-content__description"
}, J0 = {
  key: 3,
  class: "empty-content__action"
}, Q0 = /* @__PURE__ */ xt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Fs();
    return (n, i) => (C(), T("div", {
      "aria-labelledby": v(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (C(), T("div", Y0, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : G("", !0),
      e.name !== "" || n.$slots.name ? (C(), T("div", {
        key: 1,
        id: v(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          Pe(m(e.name), 1)
        ], !0)
      ], 8, Z0)) : G("", !0),
      e.description !== "" || n.$slots.description ? (C(), T("p", X0, [
        Me(n.$slots, "description", {}, () => [
          Pe(m(e.description), 1)
        ], !0)
      ])) : G("", !0),
      n.$slots.action ? (C(), T("div", J0, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : G("", !0)
    ], 8, W0));
  }
}), ew = /* @__PURE__ */ et(Q0, [["__scopeId", "data-v-8609a4c1"]]), tw = {
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
}, nw = ["aria-hidden", "aria-label"], iw = ["fill", "width", "height"], aw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, rw = { key: 0 };
function ow(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", aw, [
        n.title ? (C(), T("title", rw, m(n.title), 1)) : G("", !0)
      ])
    ], 8, iw))
  ], 16, nw);
}
const sw = /* @__PURE__ */ et(tw, [["render", ow]]), lw = {
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
}, cw = ["aria-hidden", "aria-label"], uw = ["fill", "width", "height"], dw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, fw = { key: 0 };
function pw(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", dw, [
        n.title ? (C(), T("title", fw, m(n.title), 1)) : G("", !0)
      ])
    ], 8, uw))
  ], 16, cw);
}
const hw = /* @__PURE__ */ et(lw, [["render", pw]]), mw = {
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
}, vw = ["aria-hidden", "aria-label"], gw = ["fill", "width", "height"], bw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, yw = { key: 0 };
function _w(e, t, n, i, a, r) {
  return C(), T("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (C(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", bw, [
        n.title ? (C(), T("title", yw, m(n.title), 1)) : G("", !0)
      ])
    ], 8, gw))
  ], 16, vw);
}
const ww = /* @__PURE__ */ et(mw, [["render", _w]]), Cw = ["aria-selected", "tabindex"], Ew = /* @__PURE__ */ xt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ zm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Uf(e, "selected"), n = /* @__PURE__ */ Ht(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (C(), T("button", {
      class: Oe(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: v(Fi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      u("span", {
        class: Oe([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        u("span", {
          class: Oe([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(oc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Fe(() => [
              u("span", {
                class: Oe([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        u("span", {
          class: Oe([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Ae(oc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Fe(() => [
              u("span", {
                class: Oe([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      u("span", {
        class: Oe(a.$style.sidebarTabsButton__name)
      }, m(e.tab.name), 3)
    ], 10, Cw));
  }
}), Sw = "_sidebarTabsButton_q3kBA", Tw = "_sidebarTabsButton_legacy_KQ4d1", Aw = "_sidebarTabsButton_selected_Pjayf", kw = "_sidebarTabsButton_animatedHighlight_uvp-0", xw = "_sidebarTabsButton__name_rlQsL", Nw = "_sidebarTabsButton__icon_QzZg4", Ow = "_sidebarTabsButton__iconLayer_ZkZan", Lw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Rw = "_sidebarTabsButton__icon_pop_IA0By", Iw = "_sidebarTabsButton__legacyIcon_QhcNW", Pw = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Sw,
  sidebarTabsButton_legacy: Tw,
  sidebarTabsButton_selected: Aw,
  sidebarTabsButton_animatedHighlight: kw,
  sidebarTabsButton__name: xw,
  sidebarTabsButton__icon: Nw,
  sidebarTabsButton__iconLayer: Ow,
  sidebarTabsButton__iconLayer_hidden: Lw,
  sidebarTabsButton__icon_pop: Rw,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: Iw
}, Dw = {
  $style: Pw
}, Fw = /* @__PURE__ */ et(Ew, [["__cssModules", Dw]]), Mw = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: Fw
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
      isLegacy34: Fi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Bg()]) : t.order - n.order), this.updateActive();
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
}, $w = { class: "app-sidebar-tabs" };
function zw(e, t, n, i, a, r) {
  const o = je("NcAppSidebarTabsButton");
  return C(), T("div", $w, [
    r.hasMultipleTabs || r.showForSingleTab ? (C(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Oe(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Wt(ut((...s) => r.focusPreviousTab && r.focusPreviousTab(...s), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Wt(ut((...s) => r.focusNextTab && r.focusNextTab(...s), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Wt(ut((...s) => r.focusActiveTabContent && r.focusActiveTabContent(...s), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Wt(ut((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Wt(ut((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Wt(ut((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Wt(ut((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onPointerleave: t[8] || (t[8] = (...s) => r.hideHighlight && r.hideHighlight(...s)),
      onFocusin: t[9] || (t[9] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onFocusout: t[10] || (t[10] = (...s) => r.onHighlightFocusOut && r.onHighlightFocusOut(...s))
    }, [
      a.highlightEnabled ? (C(), T("div", {
        key: 0,
        class: Oe(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: bn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : G("", !0),
      (C(!0), T(be, null, qe(a.tabs, (s) => (C(), Be(o, {
        id: `tab-button-${s.id}`,
        key: s.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${s.id}`,
        selected: a.activeTab === s.id,
        animatedHighlight: a.highlightEnabled,
        tab: s,
        "onUpdate:selected": (l) => r.setActive(s.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : G("", !0),
    u("div", {
      class: Oe(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const Uw = /* @__PURE__ */ et(Mw, [["render", zw], ["__scopeId", "data-v-74190d2a"]]);
Di(Eb);
const Bw = {
  name: "NcAppSidebar",
  components: {
    NcActions: ch,
    NcAppSidebarHeader: q0,
    NcAppSidebarTabs: Uw,
    NcButton: jn,
    NcLoadingIcon: uh,
    NcEmptyContent: ew,
    IconArrowRight: Bp,
    IconClose: Hp,
    IconDockRight: sw,
    IconStar: hw,
    IconStarOutline: ww
  },
  directives: {
    Focus: T0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: S0
  },
  inject: {
    ncContentSelector: {
      from: Up,
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
    const e = /* @__PURE__ */ Ht(null);
    return hn("NcAppSidebar:header:ref", e), {
      uid: Fs(),
      isMobile: gb(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: yt("Change name"),
      closeTranslated: yt("Close sidebar"),
      favoriteTranslated: yt("Favorite"),
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
    isSlotPopulated: Hc,
    t: yt,
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
      this.focusTrap || (this.focusTrap = Fc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Ir(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && aa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, Hw = ["aria-labelledby"], jw = { class: "app-sidebar-header__info" }, Vw = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Gw = { class: "app-sidebar-header__name-container" }, Kw = { class: "app-sidebar-header__mainname-container" }, qw = ["placeholder", "value"], Ww = ["title"], Yw = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Zw(e, t, n, i, a, r) {
  const o = je("IconDockRight"), s = je("NcButton"), l = je("NcLoadingIcon"), p = je("IconStar"), c = je("IconStarOutline"), f = je("NcAppSidebarHeader"), g = je("IconArrowRight"), w = je("NcActions"), A = je("IconClose"), E = je("NcAppSidebarTabs"), k = je("NcEmptyContent"), P = ou("focus"), R = ou("click-outside");
  return C(), Be(Av, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Fe(() => [
      ct(u("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Wt((...I) => r.onKeydownEsc && r.onKeydownEsc(...I), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (C(), Be(Sf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(s, Ft({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (I) => e.$emit("update:open", !0))
          }), {
            icon: Fe(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                Ae(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : G("", !0),
        u("header", {
          class: Oe(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (C(), Be(f, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            u("div", jw, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (C(), T("div", {
                key: 0,
                class: Oe(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: bn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...I) => r.onFigureClick && r.onFigureClick(...I)),
                onKeydown: t[2] || (t[2] = Wt((...I) => r.onFigureClick && r.onFigureClick(...I), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : G("", !0),
              u("div", {
                class: Oe(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (C(), T("div", Vw, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (C(), Be(s, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ut(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Fe(() => [
                        n.starLoading ? (C(), Be(l, { key: 0 })) : a.isStarred ? (C(), Be(p, {
                          key: 1,
                          size: 20
                        })) : (C(), Be(c, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : G("", !0)
                  ], !0)
                ])) : G("", !0),
                u("div", Gw, [
                  u("div", Kw, [
                    ct(Ae(f, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: ut(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [xa, !n.nameEditable]
                    ]),
                    n.nameEditable ? ct((C(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ut((...I) => r.onSubmitName && r.onSubmitName(...I), ["prevent"]))
                    }, [
                      ct(u("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Wt(ut((...I) => r.onDismissEditing && r.onDismissEditing(...I), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...I) => r.onNameInput && r.onNameInput(...I))
                      }, null, 40, qw), [
                        [P]
                      ]),
                      Ae(s, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Fe(() => [
                          Ae(g, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [R, () => r.onSubmitName()]
                    ]) : G("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (C(), Be(w, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Fe(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : G("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (C(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      Pe(m(n.subname), 1)
                    ], !0)
                  ], 8, Ww)) : G("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Ae(s, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ut(r.closeSidebar, ["prevent"])
          }, {
            icon: Fe(() => [
              Ae(A, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (C(), T("div", Yw, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : G("", !0)
        ], 2),
        ct(Ae(E, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Fe(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [xa, !n.loading]
        ]),
        n.loading ? (C(), Be(k, { key: 1 }, {
          icon: Fe(() => [
            Ae(l, { size: 64 })
          ]),
          _: 1
        })) : G("", !0)
      ], 40, Hw), [
        [xa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const Xw = /* @__PURE__ */ et(Bw, [["render", Zw], ["__scopeId", "data-v-c2c6820b"]]);
Di(xb);
const Jw = `<!--
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
`, Qw = `<!--
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
`, eC = { class: "vue-skip-actions__container" }, tC = { class: "vue-skip-actions__headline" }, nC = { class: "vue-skip-actions__buttons" }, iC = /* @__PURE__ */ xt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    hn(zp, s), hn(Up, "#content-vue"), hn("appName", W(() => t.appName));
    const n = Gr(), i = /* @__PURE__ */ Ht(!1), a = /* @__PURE__ */ Ht(), r = W(() => a.value === "navigation" ? Qw : Jw);
    Rf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function o() {
      li("toggle-navigation", { open: !0 }), ia(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function s(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, p) => (C(), T("div", {
      id: "content-vue",
      class: Oe(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": v(Fi) }]])
    }, [
      (C(), Be(Sf, { to: "#skip-actions" }, [
        u("div", eC, [
          u("div", tC, m(v(yt)("Keyboard navigation help")), 1),
          u("div", nC, [
            ct(Ae(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ut(o, ["prevent"]),
              onFocusin: p[0] || (p[0] = (c) => a.value = "navigation"),
              onMouseover: p[1] || (p[1] = (c) => a.value = "navigation")
            }, {
              default: Fe(() => [
                Pe(m(v(yt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [xa, i.value]
            ]),
            Ae(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: p[2] || (p[2] = (c) => a.value = "content"),
              onMouseover: p[3] || (p[3] = (c) => a.value = "content")
            }, {
              default: Fe(() => [
                Pe(m(v(yt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ct(Ae(Ds, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [xa, !v(n)]
          ])
        ])
      ])),
      Me(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), aC = /* @__PURE__ */ et(iC, [["__scopeId", "data-v-d13dcb98"]]), rC = ["href"], oC = {
  id: "library-app",
  class: "library-vue-catalogue library-app",
  tabindex: "-1"
}, sC = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, lC = ["aria-label"], cC = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, uC = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, dC = ["title"], fC = { class: "library-workspace-panel-purpose" }, pC = { class: "library-workspace-scope-badge" }, hC = ["aria-label"], mC = ["name", "value"], vC = { class: "library-quick-search-row" }, gC = ["title"], bC = ["aria-label"], yC = { class: "library-quick-filter-options" }, _C = { class: "library-quick-filter-option-grid" }, wC = { value: "title" }, CC = { value: "recent" }, EC = { value: "publicationDate" }, SC = { value: "publication" }, TC = { value: "lastOpened" }, AC = { value: "format" }, kC = { value: "" }, xC = { value: "1" }, NC = ["value"], OC = ["value"], LC = ["aria-label"], RC = ["aria-label"], IC = ["aria-label"], PC = { value: "" }, DC = ["value"], FC = { value: "" }, MC = ["value"], $C = { value: "" }, zC = ["value"], UC = { value: "" }, BC = ["value"], HC = { value: "" }, jC = ["value"], VC = { value: "" }, GC = ["value"], KC = { value: "" }, qC = ["value"], WC = { value: "" }, YC = ["value"], ZC = { value: "" }, XC = ["value"], JC = { value: "" }, QC = ["value"], eE = { value: "" }, tE = { value: "1" }, nE = {
  type: "submit",
  class: "button primary"
}, iE = {
  href: "?",
  class: "button secondary"
}, aE = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, rE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, oE = ["title"], sE = { class: "library-workspace-panel-purpose" }, lE = { class: "library-workspace-scope-badge" }, cE = {
  key: 0,
  class: "library-home-hero-card"
}, uE = ["title"], dE = { class: "library-home-hero-actions" }, fE = ["href"], pE = {
  key: 1,
  class: "library-home-rediscover"
}, hE = { class: "library-muted library-catalogue-eyebrow" }, mE = { class: "library-muted" }, vE = ["aria-label"], gE = ["href", "title"], bE = { class: "library-useful-view-count" }, yE = { class: "library-shortcut-selectors" }, _E = ["title"], wE = { value: "" }, CE = ["value"], EE = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, SE = { value: "" }, TE = ["value"], AE = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, kE = { value: "" }, xE = ["value"], NE = { class: "library-saved-collections" }, OE = ["title"], LE = ["action", "title"], RE = ["value"], IE = ["value"], PE = ["placeholder", "disabled"], DE = ["disabled", "title"], FE = ["aria-label"], ME = ["href"], $E = ["action"], zE = ["value"], UE = {
  type: "submit",
  class: "button tertiary"
}, BE = ["aria-label"], HE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, jE = ["title"], VE = { class: "library-workspace-panel-purpose" }, GE = { class: "library-workspace-scope-badge" }, KE = { class: "library-batch-action-grid" }, qE = ["action"], WE = ["value"], YE = ["name", "value"], ZE = ["placeholder"], XE = ["title"], JE = ["action"], QE = ["value"], eS = ["name", "value"], tS = ["placeholder"], nS = ["title"], iS = ["action"], aS = ["value"], rS = ["name", "value"], oS = ["title"], sS = ["action"], lS = ["value"], cS = ["name", "value"], uS = { name: "bulkEditField" }, dS = { value: "publicationType" }, fS = { value: "subtitle" }, pS = { value: "creators" }, hS = { value: "publication" }, mS = { value: "publicationDate" }, vS = { value: "language" }, gS = { value: "publisher" }, bS = { value: "genres" }, yS = { value: "classifications" }, _S = ["title"], wS = ["action"], CS = ["value"], ES = ["name", "value"], SS = ["title"], TS = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, AS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, kS = ["title"], xS = { class: "library-workspace-panel-purpose" }, NS = { class: "library-workspace-scope-badge" }, OS = ["aria-label"], LS = ["href", "title"], RS = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, IS = ["title"], PS = ["href"], DS = ["href"], FS = ["action"], MS = ["value"], $S = {
  type: "submit",
  class: "button secondary"
}, zS = ["title"], US = ["href"], BS = ["action"], HS = ["value"], jS = {
  type: "submit",
  class: "button secondary"
}, VS = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, GS = { class: "library-metadata-review-workbench-copy" }, KS = { class: "library-muted library-catalogue-eyebrow" }, qS = ["title"], WS = {
  key: 0,
  class: "library-metadata-review-card"
}, YS = { class: "library-muted" }, ZS = { class: "library-metadata-review-fields" }, XS = ["action"], JS = ["value"], QS = ["value"], eT = {
  type: "submit",
  class: "button secondary"
}, tT = { class: "library-metadata-review-actions" }, nT = ["href"], iT = ["href"], aT = {
  key: 1,
  class: "library-muted"
}, rT = ["href"], oT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, sT = ["title"], lT = { class: "library-workspace-panel-purpose" }, cT = { class: "library-workspace-scope-badge" }, uT = { class: "library-catalogue-actions-list" }, dT = ["href"], fT = ["href"], pT = ["href"], hT = ["href"], mT = { class: "library-actions-health-overview" }, vT = { class: "library-muted library-catalogue-eyebrow" }, gT = ["title"], bT = {
  key: 0,
  class: "library-muted"
}, yT = {
  key: 1,
  class: "library-notice"
}, _T = {
  key: 2,
  class: "library-muted"
}, wT = {
  key: 0,
  class: "library-muted"
}, CT = {
  key: 1,
  class: "library-muted"
}, ET = {
  key: 2,
  class: "library-muted"
}, ST = ["disabled"], TT = { class: "library-actions-health-links" }, AT = ["href"], kT = ["href"], xT = ["href"], NT = ["href"], OT = { class: "library-actions-health-grid" }, LT = { class: "library-import-health-number" }, RT = { class: "library-import-health-number" }, IT = { class: "library-muted" }, PT = { class: "library-muted" }, DT = {
  key: 0,
  class: "library-import-health-examples"
}, FT = { class: "library-catalogue-header" }, MT = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, $T = { id: "library-catalogue-heading" }, zT = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, UT = {
  key: 1,
  class: "library-notice library-batch-metadata-apply-result"
}, BT = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, HT = { class: "library-muted library-catalogue-eyebrow" }, jT = ["title"], VT = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, GT = { key: 0 }, KT = { key: 1 }, qT = { key: 2 }, WT = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, YT = { key: 0 }, ZT = { key: 1 }, XT = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, JT = { class: "library-muted library-catalogue-eyebrow" }, QT = ["title"], eA = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, tA = ["href"], nA = {
  key: 0,
  class: "library-notice"
}, iA = { class: "library-publication-issue-label" }, aA = ["href"], rA = { class: "library-muted" }, oA = {
  key: 1,
  class: "library-publication-unknown-issues"
}, sA = ["title"], lA = ["href"], cA = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, uA = ["aria-pressed"], dA = ["aria-pressed"], fA = ["aria-pressed"], pA = { class: "library-catalogue-status-row" }, hA = { class: "library-muted library-filter-result-summary" }, mA = { key: 0 }, vA = { href: "?" }, gA = ["aria-label"], bA = { class: "library-pagination-range" }, yA = { key: 0 }, _A = ["href"], wA = {
  key: 1,
  class: "library-muted"
}, CA = ["href"], EA = {
  key: 3,
  class: "library-muted"
}, SA = ["aria-label"], TA = ["href", "aria-label"], AA = ["title"], kA = { class: "library-empty-actions" }, xA = ["href"], NA = { class: "library-muted" }, OA = ["title"], LA = { class: "library-empty-actions" }, RA = ["href"], IA = ["title"], PA = { class: "library-empty-actions" }, DA = ["href"], FA = {
  href: "?",
  class: "button primary"
}, MA = ["title"], $A = { class: "library-empty-actions" }, zA = ["href"], UA = ["href", "aria-label"], BA = { class: "library-cover-frame" }, HA = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, jA = ["src", "alt", "onLoad", "onError"], VA = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, GA = ["action", "onSubmit"], KA = ["value"], qA = ["value"], WA = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], YA = ["data-library-star-error"], ZA = { class: "library-cover-summary" }, XA = { class: "library-cover-primary" }, JA = ["aria-label"], QA = ["href"], ek = ["onToggle"], tk = ["aria-label"], nk = { class: "library-cover-meta" }, ik = {
  key: 0,
  class: "library-creator"
}, ak = { class: "library-cover-detail-list" }, rk = { class: "library-cover-detail-chip" }, ok = {
  key: 0,
  class: "library-cover-detail-chip"
}, sk = {
  key: 1,
  class: "library-cover-detail-chip"
}, lk = {
  key: 2,
  class: "library-cover-detail-chip"
}, ck = {
  key: 3,
  class: "library-cover-detail-chip"
}, uk = {
  key: 4,
  class: "library-cover-detail-chip"
}, dk = {
  key: 5,
  class: "library-cover-detail-chip"
}, fk = {
  key: 6,
  class: "library-cover-detail-chip"
}, pk = {
  key: 1,
  class: "library-muted library-cover-description"
}, hk = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, mk = { key: 0 }, vk = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, gk = {
  key: 0,
  class: "library-muted"
}, bk = { class: "library-cover-actions" }, yk = ["href"], _k = ["href"], wk = ["onClick"], Ck = ["href"], Ek = ["aria-label"], Sk = { class: "library-pagination-range" }, Tk = { key: 0 }, Ak = ["href"], kk = {
  key: 1,
  class: "library-muted"
}, xk = ["href"], Nk = {
  key: 3,
  class: "library-muted"
}, Ok = {
  key: 8,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Lk = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, Rk = ["src", "alt"], Ik = { class: "library-muted library-catalogue-eyebrow" }, Pk = { id: "library-detail-drawer-heading" }, Dk = {
  key: 0,
  class: "library-creator"
}, Fk = {
  key: 1,
  class: "library-muted"
}, Mk = { class: "library-detail-drawer-facts" }, $k = { key: 0 }, zk = { key: 1 }, Uk = { key: 2 }, Bk = { class: "library-detail-drawer-actions" }, Hk = ["href"], jk = ["href"], Vk = ["aria-label"], Gk = ["disabled"], Kk = ["disabled"], qk = "/apps/library", Wk = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], i = [25, 50, 100, 250, 500], a = /* @__PURE__ */ Qt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), r = /* @__PURE__ */ Qt((a.items || []).map((D) => ({ ...D }))), o = W(() => r), s = W(() => a.shelves || []), l = W(() => a.formats || []), p = W(() => a.publications || []), c = W(() => a.publicationSummaries || []), f = W(() => a.publicationIssueContext || null), g = W(() => a.publicationYears || []), w = W(() => a.creators || []), A = W(() => a.scanStatuses || []), E = W(() => a.workflowStatuses || []), k = W(() => a.genres || []), P = W(() => a.classifications || []), R = W(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ Qt({
      q: a.activeFilters?.q || "",
      view: a.activeFilters?.view || "compact",
      type: a.activeFilters?.type || "",
      publication: a.activeFilters?.publication || "",
      year: a.activeFilters?.year || "",
      creator: a.activeFilters?.creator || "",
      format: a.activeFilters?.format || "",
      tag: a.activeFilters?.tag || "",
      shelf: a.activeFilters?.shelf || "",
      status: a.activeFilters?.status || "",
      workflowStatus: a.activeFilters?.workflowStatus || "",
      genre: a.activeFilters?.genre || "",
      classification: a.activeFilters?.classification || "",
      scannerConflicts: a.activeFilters?.scannerConflicts || "",
      starred: a.activeFilters?.starred || "",
      needsMetadata: a.activeFilters?.needsMetadata || "",
      coverReview: a.activeFilters?.coverReview || "",
      noCreator: a.activeFilters?.noCreator || "",
      noPublication: a.activeFilters?.noPublication || "",
      noDate: a.activeFilters?.noDate || "",
      titleFromFilename: a.activeFilters?.titleFromFilename || "",
      noDescription: a.activeFilters?.noDescription || "",
      unsupportedContainer: a.activeFilters?.unsupportedContainer || "",
      weakMetadata: a.activeFilters?.weakMetadata || "",
      unreviewedImports: a.activeFilters?.unreviewedImports || "",
      sort: a.activeFilters?.sort || "title"
    }), $ = window.location.pathname.indexOf(qk), re = $ >= 0 ? window.location.pathname.slice(0, $) : "", ue = {
      catalogue: `${re}/apps/library/`,
      review: `${re}/apps/library/?scannerConflicts=1`,
      settings: `${re}/settings/user/library`
    };
    function ee(D, N) {
      if (typeof D != "string" || D === "") return N;
      try {
        const _ = re ? `${re}/` : "/";
        let fe = D;
        for (let We = 0; We < 5; We += 1) {
          if (!fe.startsWith("/") || fe.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(fe)) return N;
          const Ct = new URL(fe, window.location.origin);
          if (Ct.origin !== window.location.origin || !Ct.pathname.startsWith(_)) return N;
          const Et = fe.split(/[?#]/, 1)[0];
          for (const J of Et.split("/")) {
            let b = J;
            for (let L = 0; L < 5; L += 1) {
              const V = decodeURIComponent(b);
              if (/[\\/\u0000-\u001f\u007f]/.test(V) || V === "." || V === "..") return N;
              if (V === b) break;
              if (b = V, L === 4) return N;
            }
          }
          const kn = decodeURI(fe);
          if (kn === fe) return D;
          fe = kn;
        }
        return N;
      } catch {
        return N;
      }
    }
    const de = W(() => ee(a.settingsUrl, ue.settings)), K = W(() => ee(a.catalogueRootUrl, ue.catalogue)), se = W(() => ee(a.reviewUrl || a.scannerConflictReviewUrl, ue.review)), ve = W(() => I.scannerConflicts === "1" || String(I.weakMetadata || "").trim() !== ""), q = W(() => a.requestToken || ""), ie = W(() => a.metadataExportUrl || ""), F = W(() => a.metadataSidecarManifestUrl || ""), M = W(() => a.metadataSidecarBundleUrl || ""), Y = W(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), ae = W(() => a.batchTagUrl || "/apps/library/bulk/tags"), te = W(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), pe = W(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), he = W(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Ce = W(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), _e = W(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Ve = W(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), Te = W(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), nt = W(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), Je = W(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), Ie = /* @__PURE__ */ Qt({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), st = W(() => Ie.summary || {}), Qe = W(() => {
      const D = Number(st.value.generatedAt || 0);
      return D > 0 ? new Date(D * 1e3).toLocaleString() : "";
    }), gt = W(() => st.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), U = W(() => st.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), h = W(() => st.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), y = W(() => a.discoveryPage === "publication"), S = W(() => a.discoveryPage === "year"), O = W(() => a.discoveryPage === "creator"), x = W(() => y.value || S.value || O.value), z = W(() => a.discoveryTitle || I.publication || I.year || I.creator || ""), j = W(() => x.value ? z.value : d("library", "Library")), H = W(() => O.value ? d("library", "Creator") : S.value ? d("library", "Publication year") : d("library", "Publication / series")), Q = W(() => Number(a.rootCount || 0)), B = W(() => Number(a.enabledRootCount || 0)), ge = W(() => Q.value === 0), oe = W(() => Q.value > 0 && B.value === 0), me = W(() => it.value.length > 0), Ee = {
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
    }, xe = W(() => {
      if (typeof window > "u") return "";
      const D = new URLSearchParams(window.location.search);
      if (D.get("batchMetadataApplyResult") !== "1") return "";
      const N = D.get("batchMetadataField") || "field", _ = D.get("batchMetadataApplied") || "0", fe = D.get("batchMetadataUnchanged") || "0", We = D.get("batchMetadataSkipped") || "0";
      return d("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: _, field: N, unchanged: fe, skipped: We });
    }), Z = W(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? d("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), X = W(() => a.savedCollections || []), le = W(() => a.savedCollectionSaveUrl || "/apps/library/collections"), ke = W(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Le = ["compact", "gallery", "shelf"], De = W(() => Le.includes(I.view) ? I.view : "compact"), ze = W(() => ({
      "library-cover-gallery--compact": De.value === "compact",
      "library-cover-gallery--gallery": De.value === "gallery",
      "library-cover-gallery--shelf": De.value === "shelf"
    })), it = W(() => Object.entries(Ee).map(([D, N]) => ({ key: D, label: N, value: I[D] || "" })).filter((D) => String(D.value).trim() !== "")), lt = W(() => Object.entries(I).filter(([D, N]) => !["q", "sort", "starred"].includes(D) && String(N || "").trim() !== "").map(([D, N]) => ({ key: D, value: N }))), tt = W(() => Object.entries(I).filter(([D, N]) => String(N || "").trim() !== "").map(([D, N]) => ({ key: D, value: N }))), Mt = /* @__PURE__ */ Qt({}), nn = /* @__PURE__ */ Qt({}), an = W(() => o.value.filter((D) => D.starred || D.workflowStatus === "reading" || D.lastOpenedAt).slice(0, 5)), rn = W(() => o.value.find((D) => D.description || D.publication || D.creators) || o.value[0] || null), wn = W(() => !x.value && o.value.length > 0), Ue = /* @__PURE__ */ Ht(null), on = W(() => Ue.value ? o.value.findIndex((D) => D.id === Ue.value.id) : -1), Cn = W(() => on.value > 0 ? o.value[on.value - 1] : null), En = W(() => on.value >= 0 && on.value < o.value.length - 1 ? o.value[on.value + 1] : null), sn = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], jt = W(() => {
      const D = I.scannerConflicts === "1" || String(I.weakMetadata || "").trim() !== "", N = D ? o.value.find((_) => Pn(_).length > 0) : null;
      return {
        enabled: D,
        item: N,
        fields: N ? Pn(N) : [],
        reviewNextUrl: _e.value,
        skipUrl: R.value.nextUrl || _e.value
      };
    });
    function ln(D) {
      return Array.isArray(D) ? JSON.stringify(D) : D == null ? "" : String(D);
    }
    function Pn(D) {
      const N = D.fieldValues || {}, _ = D.fieldSources || {};
      return sn.filter((fe) => Object.prototype.hasOwnProperty.call(N, fe)).map((fe) => {
        const We = ln(D[fe]), Ct = ln(N[fe]), Et = ln(_[fe] || D.metadataSource || "scanner"), kn = Et.includes("filename") || Et.includes("path") ? Ct : "", J = Et.includes("sidecar") ? Ct : "";
        return { field: fe, currentValue: We, scannerCandidate: Ct, pathTemplateCandidate: kn, sidecarValue: J, sourceProvenance: Et, differs: We !== Ct };
      }).filter((fe) => fe.differs);
    }
    function wt(D) {
      Ue.value = D;
    }
    function Dn() {
      Ue.value = null;
    }
    function mi(D) {
      D && (Ue.value = D);
    }
    const Sn = /* @__PURE__ */ Ht(null);
    let ca = null, Tn = 0, An = null;
    function Pa(D) {
      const N = new URLSearchParams(new FormData(D));
      for (const _ of Array.from(N.keys()))
        String(N.get(_) || "").trim() === "" && N.delete(_);
      return N.delete("page"), N.get("view") === "compact" && N.delete("view"), N;
    }
    function Da(D) {
      r.splice(0, r.length, ...(D.items || []).map((N) => ({ ...N })));
      for (const N of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(D, N) && (a[N] = D[N]);
      Object.assign(I, D.activeFilters || {});
    }
    async function Kr(D = !1) {
      if (!(Ie.loading || Ie.refreshing)) {
        D ? Ie.refreshing = !0 : Ie.loading = !0, Ie.error = "";
        try {
          const N = await fetch(`${Je.value}${D ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!N.ok)
            throw new Error(`Import health request failed: ${N.status}`);
          Ie.summary = await N.json(), Ie.loaded = !0;
        } catch (N) {
          Ie.error = N?.message || String(N);
        } finally {
          Ie.loading = !1, Ie.refreshing = !1;
        }
      }
    }
    async function Mi(D) {
      D && D.currentTarget && D.currentTarget.open !== !0 || Ie.loaded || Ie.loading || await Kr(!1);
    }
    async function Bs() {
      await Kr(!0);
    }
    async function Kn(D, N = null) {
      const _ = D?.currentTarget?.tagName === "FORM" ? D.currentTarget : D?.currentTarget?.form;
      if (!_) return;
      const fe = N?.params ?? Pa(_), We = fe.toString(), Ct = We ? `?${We}` : "", Et = N?.generation ?? ++Tn;
      if (Et !== Tn) return;
      N === null && An?.abort();
      const kn = new AbortController();
      An = kn;
      try {
        const J = await fetch(Y.value + Ct, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: kn.signal
        });
        if (Et !== Tn) return;
        if (!J.ok) {
          dt(fe);
          return;
        }
        const b = await J.json();
        if (Et !== Tn) return;
        Da(b), history.replaceState({}, "", We ? `?${We}` : window.location.pathname);
      } catch (J) {
        Et === Tn && J?.name !== "AbortError" && dt(fe);
      } finally {
        Et === Tn && (An = null);
      }
    }
    function dt(D) {
      const N = document.createElement("form");
      N.method = "get", N.action = window.location.pathname, N.hidden = !0;
      for (const [_, fe] of D.entries()) {
        const We = document.createElement("input");
        We.type = "hidden", We.name = _, We.value = fe, N.appendChild(We);
      }
      document.body.appendChild(N), N.submit(), N.remove();
    }
    function qn(D, N = null, _ = null) {
      if (N === null) {
        Kn(D);
        return;
      }
      Kn({ currentTarget: D }, { params: N, generation: _ });
    }
    function Hs(D) {
      const N = D?.currentTarget?.form;
      if (!N) return;
      window.clearTimeout(ca);
      const _ = ++Tn, fe = Pa(N);
      An?.abort(), An = null, ca = window.setTimeout(() => qn(N, fe, _), 350);
    }
    function Fa(D) {
      const N = new URLSearchParams();
      for (const [fe, We] of Object.entries(I)) {
        const Ct = String(We || "").trim();
        Ct !== "" && fe !== D && !(fe === "sort" && Ct === "title") && !(fe === "view" && Ct === "compact") && N.set(fe, Ct);
      }
      const _ = N.toString();
      return _ ? `?${_}` : "?";
    }
    function Ma() {
      return Fa("q");
    }
    const $a = W(() => a.smartViewCounts || {}), za = W(() => {
      const D = {};
      for (const [N, _] of Object.entries(I)) {
        const fe = String(_ || "").trim();
        fe !== "" && !(N === "sort" && fe === "title") && (D[N] = fe);
      }
      return D;
    }), js = W(() => JSON.stringify(za.value)), Ua = W(() => Object.keys(za.value).length > 0), Vs = W(() => [
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
    ]), Gs = W(() => [
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
    function cn(D) {
      if (!Le.includes(D)) return;
      I.view = D;
      const N = new URLSearchParams(window.location.search);
      D === "compact" ? N.delete("view") : N.set("view", D), N.delete("page"), history.replaceState({}, "", N.toString() ? `?${N.toString()}` : window.location.pathname);
    }
    function ua(D) {
      const N = new URLSearchParams(window.location.search);
      for (const fe of Object.keys(Ee))
        N.delete(fe);
      N.delete("page");
      for (const [fe, We] of Object.entries(D))
        String(We || "").trim() !== "" && N.set(fe, String(We));
      const _ = N.toString();
      return _ ? `?${_}` : "?";
    }
    function da(D) {
      return ua(D || {});
    }
    function Wn(D) {
      return ke.value.replace("__COLLECTION_ID__", encodeURIComponent(String(D || "0")));
    }
    function qr(D) {
      return String(D || "").toUpperCase();
    }
    function $i(D) {
      return D.nextcloudTags || [];
    }
    function Wr(D) {
      return c.value.find((_) => _.publication === D)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(D)}`;
    }
    function Ks(D) {
      return a.publicationYearLandingUrls?.[D] || `/apps/library/years/${encodeURIComponent(D)}`;
    }
    function Yr(D) {
      return a.creatorLandingUrls?.[D] || `/apps/library/creators/${encodeURIComponent(D)}`;
    }
    function fa(D) {
      const N = D?.target?.value || "";
      N && (window.location.href = N);
    }
    function Fn(D) {
      return nn[D.id] || "loading";
    }
    function Ba(D) {
      nn[D.id] = "loaded";
    }
    function pa(D) {
      nn[D.id] = "error";
    }
    function vi(D, N) {
      Mt[D] = !!N?.currentTarget?.open;
    }
    function zi(D) {
      const N = String(D?.tagName || "").toLowerCase();
      return D?.isContentEditable || ["input", "select", "textarea", "button"].includes(N);
    }
    function un(D) {
      if (D.key !== "/" || D.metaKey || D.ctrlKey || D.altKey || D.shiftKey || zi(D.target))
        return;
      D.preventDefault();
      const N = Sn.value?.closest?.(".library-workspace-panel--refine");
      N && (N.open = !0), Sn.value?.focus(), Sn.value?.select?.();
    }
    function qs(D) {
      D.key !== "Escape" || document.activeElement !== Sn.value || I.q === "" || (D.preventDefault(), I.q = "", Sn.value.value = "", window.clearTimeout(ca), qn({ currentTarget: Sn.value }));
    }
    function ha(D) {
      return !Ue.value || D.metaKey || D.ctrlKey || D.altKey ? !1 : D.key === "Escape" ? (D.preventDefault(), Dn(), !0) : D.key === "ArrowLeft" && Cn.value ? (D.preventDefault(), mi(Cn.value), !0) : D.key === "ArrowRight" && En.value ? (D.preventDefault(), mi(En.value), !0) : !1;
    }
    function Zr(D) {
      ha(D) || (un(D), qs(D));
    }
    Pi(() => {
      window.addEventListener("keydown", Zr);
    }), Ia(() => {
      window.removeEventListener("keydown", Zr), window.clearTimeout(ca), Tn += 1, An?.abort(), An = null;
    });
    const gi = /* @__PURE__ */ Qt({}), bi = /* @__PURE__ */ Qt({});
    async function Ha(D, N) {
      const _ = N?.currentTarget?.closest?.("form") || N?.currentTarget;
      if (!_ || !D?.starUrl || gi[D.id]) return;
      const fe = !!D.starred;
      gi[D.id] = !0, bi[D.id] = "", D.starred = !fe;
      try {
        (await fetch(D.starUrl, {
          method: "POST",
          body: new FormData(_),
          credentials: "same-origin"
        })).ok || (D.starred = fe, bi[D.id] = d("library", "Could not update star. Try again."));
      } catch {
        D.starred = fe, bi[D.id] = d("library", "Could not update star. Try again.");
      } finally {
        gi[D.id] = !1;
      }
    }
    return (D, N) => (C(), Be(v(aC), { "app-name": "library" }, {
      default: Fe(() => [
        Ae(v(qy), {
          "aria-label": v(d)("library", "Library navigation")
        }, {
          list: Fe(() => [
            Ae(v($p), null, {
              default: Fe(() => [
                Ae(v(Fd), {
                  active: !ve.value,
                  href: K.value,
                  name: v(d)("library", "Library")
                }, null, 8, ["active", "href", "name"]),
                Ae(v(Fd), {
                  active: ve.value,
                  href: se.value,
                  name: v(d)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Fe(() => [
            u("a", {
              class: "library-navigation-settings-link",
              href: de.value
            }, [
              N[22] || (N[22] = u("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              u("span", null, m(v(d)("library", "Settings")), 1)
            ], 8, rC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(v(cy), null, {
          default: Fe(() => [
            u("div", oC, [
              u("section", sC, [
                u("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": v(d)("library", "One catalogue workspace")
                }, [
                  u("details", cC, [
                    u("summary", uC, [
                      N[23] || (N[23] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⌕", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
                      }, m(v(d)("library", "Refine results")), 9, dC),
                      u("small", fC, m(v(d)("library", "Filters, facets and saved filter shortcuts")), 1),
                      u("b", pC, m(I.shelf ? v(d)("library", "this shelf") : it.value.length > 0 ? v(d)("library", "current results") : v(d)("library", "whole catalogue")), 1)
                    ]),
                    u("form", {
                      method: "get",
                      class: "library-quick-filter-bar",
                      "aria-label": v(d)("library", "Quick catalogue filters"),
                      onSubmit: ut(Kn, ["prevent"])
                    }, [
                      (C(!0), T(be, null, qe(lt.value, (_) => (C(), T("input", {
                        key: _.key,
                        type: "hidden",
                        name: _.key,
                        value: _.value
                      }, null, 8, mC))), 128)),
                      u("div", vC, [
                        u("label", {
                          class: "library-quick-filter-search",
                          title: v(d)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                        }, [
                          u("span", null, [
                            Pe(m(v(d)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                            N[24] || (N[24] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
                          ]),
                          ct(u("input", {
                            ref_key: "quickSearchInput",
                            ref: Sn,
                            "onUpdate:modelValue": N[0] || (N[0] = (_) => I.q = _),
                            "data-library-quick-search": "",
                            type: "search",
                            name: "q",
                            placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                            onInput: Hs
                          }, null, 544), [
                            [Wl, I.q]
                          ])
                        ], 8, gC),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          "aria-label": v(d)("library", "Search catalogue")
                        }, m(v(d)("library", "Search")), 9, bC)
                      ]),
                      u("details", yC, [
                        u("summary", null, m(v(d)("library", "Filter & sort")), 1),
                        u("div", _C, [
                          u("label", null, [
                            Pe(m(v(d)("library", "Sort")), 1),
                            ct(u("select", {
                              "onUpdate:modelValue": N[1] || (N[1] = (_) => I.sort = _),
                              name: "sort",
                              onChange: Kn
                            }, [
                              u("option", wC, m(v(d)("library", "Title")), 1),
                              u("option", CC, m(v(d)("library", "Recently added")), 1),
                              u("option", EC, m(v(d)("library", "Publication date")), 1),
                              u("option", SC, m(v(d)("library", "Series")), 1),
                              u("option", TC, m(v(d)("library", "Recently opened")), 1),
                              u("option", AC, m(v(d)("library", "Format")), 1)
                            ], 544), [
                              [Zt, I.sort]
                            ])
                          ]),
                          u("label", null, [
                            Pe(m(v(d)("library", "Starred")), 1),
                            ct(u("select", {
                              "onUpdate:modelValue": N[2] || (N[2] = (_) => I.starred = _),
                              name: "starred",
                              onChange: Kn
                            }, [
                              u("option", kC, m(v(d)("library", "All")), 1),
                              u("option", xC, m(v(d)("library", "Starred")), 1)
                            ], 544), [
                              [Zt, I.starred]
                            ])
                          ]),
                          u("label", null, [
                            Pe(m(v(d)("library", "Size")), 1),
                            u("select", {
                              value: R.value.limit,
                              name: "limit",
                              onChange: Kn
                            }, [
                              (C(), T(be, null, qe(i, (_) => u("option", {
                                key: _,
                                value: _
                              }, m(_), 9, OC)), 64))
                            ], 40, NC)
                          ]),
                          u("button", {
                            type: "submit",
                            class: "button secondary",
                            "aria-label": v(d)("library", "Apply catalogue filters")
                          }, m(v(d)("library", "Apply filters")), 9, LC),
                          u("a", {
                            href: "?",
                            class: "button secondary",
                            "aria-label": v(d)("library", "Clear catalogue filters")
                          }, m(v(d)("library", "Clear all")), 9, RC)
                        ])
                      ])
                    ], 40, hC),
                    u("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": v(d)("library", "Catalogue search and filters"),
                      onSubmit: ut(Kn, ["prevent"])
                    }, [
                      u("label", null, [
                        Pe(m(v(d)("library", "Type")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[3] || (N[3] = (_) => I.type = _),
                          name: "type"
                        }, [
                          u("option", PC, m(v(d)("library", "All types")), 1),
                          (C(), T(be, null, qe(n, (_) => u("option", {
                            key: _,
                            value: _
                          }, m(_), 9, DC)), 64))
                        ], 512), [
                          [Zt, I.type]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Series / periodical")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[4] || (N[4] = (_) => I.publication = _),
                          name: "publication"
                        }, [
                          u("option", FC, m(v(d)("library", "All series and periodicals")), 1),
                          (C(!0), T(be, null, qe(p.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, MC))), 128))
                        ], 512), [
                          [Zt, I.publication]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Publication year")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[5] || (N[5] = (_) => I.year = _),
                          name: "year"
                        }, [
                          u("option", $C, m(v(d)("library", "All years")), 1),
                          (C(!0), T(be, null, qe(g.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, zC))), 128))
                        ], 512), [
                          [Zt, I.year]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Creator")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[6] || (N[6] = (_) => I.creator = _),
                          name: "creator",
                          title: "Exact full-field creator matches only"
                        }, [
                          u("option", UC, m(v(d)("library", "All creators")), 1),
                          (C(!0), T(be, null, qe(w.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, BC))), 128))
                        ], 512), [
                          [Zt, I.creator]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Nextcloud tag")), 1),
                        ct(u("input", {
                          "onUpdate:modelValue": N[7] || (N[7] = (_) => I.tag = _),
                          type: "text",
                          name: "tag",
                          placeholder: "photography"
                        }, null, 512), [
                          [Wl, I.tag]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Format")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[8] || (N[8] = (_) => I.format = _),
                          name: "format"
                        }, [
                          u("option", HC, m(v(d)("library", "All formats")), 1),
                          (C(!0), T(be, null, qe(l.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(qr(_)), 9, jC))), 128))
                        ], 512), [
                          [Zt, I.format]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Shelf")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[9] || (N[9] = (_) => I.shelf = _),
                          name: "shelf"
                        }, [
                          u("option", VC, m(v(d)("library", "All shelves")), 1),
                          (C(!0), T(be, null, qe(s.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, GC))), 128))
                        ], 512), [
                          [Zt, I.shelf]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Scan status")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[10] || (N[10] = (_) => I.status = _),
                          name: "status"
                        }, [
                          u("option", KC, m(v(d)("library", "All scan statuses")), 1),
                          (C(!0), T(be, null, qe(A.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, qC))), 128))
                        ], 512), [
                          [Zt, I.status]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Workflow status")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[11] || (N[11] = (_) => I.workflowStatus = _),
                          name: "workflowStatus"
                        }, [
                          u("option", WC, m(v(d)("library", "All workflow statuses")), 1),
                          (C(!0), T(be, null, qe(E.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, YC))), 128))
                        ], 512), [
                          [Zt, I.workflowStatus]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Genre")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[12] || (N[12] = (_) => I.genre = _),
                          name: "genre"
                        }, [
                          u("option", ZC, m(v(d)("library", "All genres")), 1),
                          (C(!0), T(be, null, qe(k.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, XC))), 128))
                        ], 512), [
                          [Zt, I.genre]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Classification")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[13] || (N[13] = (_) => I.classification = _),
                          name: "classification"
                        }, [
                          u("option", JC, m(v(d)("library", "All classifications")), 1),
                          (C(!0), T(be, null, qe(P.value, (_) => (C(), T("option", {
                            key: _,
                            value: _
                          }, m(_), 9, QC))), 128))
                        ], 512), [
                          [Zt, I.classification]
                        ])
                      ]),
                      u("label", null, [
                        Pe(m(v(d)("library", "Scanner conflicts")), 1),
                        ct(u("select", {
                          "onUpdate:modelValue": N[14] || (N[14] = (_) => I.scannerConflicts = _),
                          name: "scannerConflicts"
                        }, [
                          u("option", eE, m(v(d)("library", "All metadata")), 1),
                          u("option", tE, m(v(d)("library", "Needs review")), 1)
                        ], 512), [
                          [Zt, I.scannerConflicts]
                        ])
                      ]),
                      u("button", nE, m(v(d)("library", "Apply filters")), 1),
                      u("a", iE, m(v(d)("library", "Clear")), 1)
                    ], 40, IC)
                  ]),
                  u("details", aE, [
                    u("summary", rE, [
                      N[25] || (N[25] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "↗", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
                      }, m(v(d)("library", "Browse shortcuts")), 9, oE),
                      u("small", sE, m(v(d)("library", "Continue reading, recently added, rediscover and useful views")), 1),
                      u("b", lE, m(v(d)("library", "whole catalogue")), 1)
                    ]),
                    wn.value ? (C(), T("article", cE, [
                      u("h3", {
                        title: v(d)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
                      }, m(v(d)("library", "Continue reading")), 9, uE),
                      u("div", dE, [
                        an.value[0] ? (C(), T("a", {
                          key: 0,
                          class: "button primary",
                          href: an.value[0].openUrl
                        }, m(v(d)("library", "Read now")), 9, fE)) : G("", !0),
                        an.value[0] ? (C(), T("button", {
                          key: 1,
                          type: "button",
                          class: "button secondary",
                          onClick: N[15] || (N[15] = (_) => wt(an.value[0]))
                        }, m(v(d)("library", "Details")), 1)) : G("", !0)
                      ])
                    ])) : G("", !0),
                    rn.value ? (C(), T("article", pE, [
                      u("p", hE, m(v(d)("library", "Rediscover")), 1),
                      u("strong", null, m(rn.value.title), 1),
                      u("span", mE, m(rn.value.creators || rn.value.publication || rn.value.cachedPath), 1),
                      u("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: N[16] || (N[16] = (_) => wt(rn.value))
                      }, m(v(d)("library", "Peek")), 1)
                    ])) : G("", !0),
                    u("nav", {
                      class: "library-useful-view-links",
                      "aria-label": v(d)("library", "Useful views")
                    }, [
                      (C(!0), T(be, null, qe(Vs.value, (_) => (C(), T("a", {
                        key: _.key,
                        class: "library-useful-view-chip",
                        href: ua(_.filters),
                        title: v(d)("library", _.description)
                      }, [
                        u("strong", null, m(v(d)("library", _.label)), 1),
                        u("small", bE, m(Number($a.value[_.key] || 0)), 1)
                      ], 8, gE))), 128))
                    ], 8, vE),
                    u("div", yE, [
                      c.value.length > 0 ? (C(), T("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: v(d)("library", "Jump into recurring publications with one click.")
                      }, [
                        u("span", null, m(v(d)("library", "Series / periodicals")), 1),
                        u("select", { onChange: fa }, [
                          u("option", wE, m(v(d)("library", "Choose series")), 1),
                          (C(!0), T(be, null, qe(c.value, (_) => (C(), T("option", {
                            key: _.publication,
                            value: Wr(_.publication)
                          }, m(_.publication) + " · " + m(_.itemCount), 9, CE))), 128))
                        ], 32)
                      ], 8, _E)) : G("", !0),
                      g.value.length > 0 ? (C(), T("label", EE, [
                        u("span", null, m(v(d)("library", "Publication year")), 1),
                        u("select", { onChange: fa }, [
                          u("option", SE, m(v(d)("library", "Choose year")), 1),
                          (C(!0), T(be, null, qe(g.value, (_) => (C(), T("option", {
                            key: _,
                            value: Ks(_)
                          }, m(_), 9, TE))), 128))
                        ], 32)
                      ])) : G("", !0),
                      w.value.length > 0 ? (C(), T("label", AE, [
                        u("span", null, m(v(d)("library", "Creator")), 1),
                        u("select", { onChange: fa }, [
                          u("option", kE, m(v(d)("library", "Choose creator")), 1),
                          (C(!0), T(be, null, qe(w.value, (_) => (C(), T("option", {
                            key: _,
                            value: Yr(_)
                          }, m(_), 9, xE))), 128))
                        ], 32)
                      ])) : G("", !0)
                    ]),
                    u("section", NE, [
                      u("h3", {
                        title: v(d)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, m(v(d)("library", "Custom collections")), 9, OE),
                      u("form", {
                        method: "post",
                        action: le.value,
                        class: "library-saved-collection-save-form",
                        title: Ua.value ? "" : v(d)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, RE),
                        u("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: js.value
                        }, null, 8, IE),
                        u("label", null, [
                          Pe(m(v(d)("library", "Collection name")), 1),
                          u("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: v(d)("library", "e.g. Bremen photo books"),
                            disabled: !Ua.value,
                            autocomplete: "off"
                          }, null, 8, PE)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !Ua.value,
                          title: v(d)("library", "Save current view")
                        }, m(v(d)("library", "Save")), 9, DE)
                      ], 8, LE),
                      X.value.length > 0 ? (C(), T("nav", {
                        key: 0,
                        class: "library-saved-collection-links",
                        "aria-label": v(d)("library", "Saved custom collections")
                      }, [
                        (C(!0), T(be, null, qe(X.value, (_) => (C(), T("article", {
                          key: _.id,
                          class: "library-saved-collection-card"
                        }, [
                          u("a", {
                            class: "library-saved-collection-link",
                            href: da(_.filters)
                          }, [
                            u("strong", null, m(_.name), 1),
                            u("span", null, m(Number(_.count || 0)) + " " + m(v(d)("library", "items")), 1)
                          ], 8, ME),
                          u("form", {
                            method: "post",
                            action: Wn(_.id),
                            class: "library-saved-collection-delete-form"
                          }, [
                            u("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: q.value
                            }, null, 8, zE),
                            u("button", UE, m(v(d)("library", "Delete")), 1)
                          ], 8, $E)
                        ]))), 128))
                      ], 8, FE)) : G("", !0)
                    ])
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": v(d)("library", "Batch actions for current results")
                  }, [
                    u("summary", HE, [
                      N[26] || (N[26] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
                      }, m(v(d)("library", "Batch actions")), 9, jE),
                      u("small", VE, m(v(d)("library", "Preview and apply changes to current results")), 1),
                      u("b", GE, m(R.value.total) + " " + m(v(d)("library", "Current filter result")), 1)
                    ]),
                    u("div", KE, [
                      u("form", {
                        method: "post",
                        action: ae.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, WE),
                        (C(!0), T(be, null, qe(tt.value, (_) => (C(), T("input", {
                          key: _.key,
                          type: "hidden",
                          name: _.key,
                          value: _.value
                        }, null, 8, YE))), 128)),
                        u("label", null, [
                          u("span", null, m(v(d)("library", "Add tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, ZE)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          title: v(d)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                        }, m(v(d)("library", "Apply")), 9, XE)
                      ], 8, qE),
                      u("form", {
                        method: "post",
                        action: te.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, QE),
                        (C(!0), T(be, null, qe(tt.value, (_) => (C(), T("input", {
                          key: `remove-tag-${_.key}`,
                          type: "hidden",
                          name: _.key,
                          value: _.value
                        }, null, 8, eS))), 128)),
                        u("label", null, [
                          u("span", null, m(v(d)("library", "Remove tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, tS)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                        }, m(v(d)("library", "Remove")), 9, nS)
                      ], 8, JE),
                      u("form", {
                        method: "post",
                        action: pe.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, aS),
                        (C(!0), T(be, null, qe(tt.value, (_) => (C(), T("input", {
                          key: `reset-${_.key}`,
                          type: "hidden",
                          name: _.key,
                          value: _.value
                        }, null, 8, rS))), 128)),
                        N[27] || (N[27] = u("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                        }, m(v(d)("library", "Reset metadata")), 9, oS)
                      ], 8, iS),
                      u("form", {
                        method: "post",
                        action: he.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, lS),
                        (C(!0), T(be, null, qe(tt.value, (_) => (C(), T("input", {
                          key: `edit-preview-${_.key}`,
                          type: "hidden",
                          name: _.key,
                          value: _.value
                        }, null, 8, cS))), 128)),
                        u("label", null, [
                          u("span", null, m(v(d)("library", "Field")), 1),
                          u("select", uS, [
                            u("option", dS, m(v(d)("library", "Publication type")), 1),
                            u("option", fS, m(v(d)("library", "Subtitle")), 1),
                            u("option", pS, m(v(d)("library", "Creators")), 1),
                            u("option", hS, m(v(d)("library", "Series / periodical")), 1),
                            u("option", mS, m(v(d)("library", "Publication date")), 1),
                            u("option", vS, m(v(d)("library", "Language")), 1),
                            u("option", gS, m(v(d)("library", "Publisher")), 1),
                            u("option", bS, m(v(d)("library", "Genres")), 1),
                            u("option", yS, m(v(d)("library", "Classifications")), 1)
                          ])
                        ]),
                        u("label", null, [
                          u("span", null, m(v(d)("library", "Value")), 1),
                          N[28] || (N[28] = u("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: "magazine, de, photography...",
                            autocomplete: "off"
                          }, null, -1))
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Preview first, then apply from the review page.")
                        }, m(v(d)("library", "Preview edit")), 9, _S)
                      ], 8, sS),
                      u("form", {
                        method: "post",
                        action: Ce.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: q.value
                        }, null, 8, CS),
                        (C(!0), T(be, null, qe(tt.value, (_) => (C(), T("input", {
                          key: `cover-${_.key}`,
                          type: "hidden",
                          name: _.key,
                          value: _.value
                        }, null, 8, ES))), 128)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                        }, m(v(d)("library", "Fresh covers")), 9, SS)
                      ], 8, wS)
                    ])
                  ], 8, BE),
                  u("details", TS, [
                    u("summary", AS, [
                      N[29] || (N[29] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "!", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
                      }, m(v(d)("library", "Review queue")), 9, kS),
                      u("small", xS, m(v(d)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
                      u("b", NS, m(v(d)("library", "current results")), 1)
                    ]),
                    u("nav", {
                      class: "library-weak-metadata-links",
                      "aria-label": v(d)("library", "Weak metadata catalogue views")
                    }, [
                      (C(!0), T(be, null, qe(Gs.value, (_) => (C(), T("a", {
                        key: _.key,
                        class: "library-weak-metadata-card",
                        href: ua(_.filters),
                        title: v(d)("library", _.description)
                      }, [
                        u("span", null, [
                          u("strong", null, m(v(d)("library", _.label)), 1)
                        ]),
                        u("b", null, m(Number($a.value[_.key] || 0)), 1)
                      ], 8, LS))), 128))
                    ], 8, OS),
                    u("div", RS, [
                      u("article", {
                        title: v(d)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
                      }, [
                        u("h4", null, m(v(d)("library", "Metadata-error queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: gt.value.reviewUrl || "?status=metadata_error"
                        }, m(v(d)("library", "Open metadata-error rows")), 9, PS),
                        u("a", {
                          class: "button secondary",
                          href: Te.value
                        }, m(v(d)("library", "Export metadata-error rows")), 9, DS),
                        u("form", {
                          method: "post",
                          action: ae.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: q.value
                          }, null, 8, MS),
                          N[30] || (N[30] = u("input", {
                            type: "hidden",
                            name: "status",
                            value: "metadata_error"
                          }, null, -1)),
                          N[31] || (N[31] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-metadata-error"
                          }, null, -1)),
                          u("button", $S, m(v(d)("library", "Tag metadata-error rows")), 1)
                        ], 8, FS)
                      ], 8, IS),
                      u("article", {
                        title: v(d)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
                      }, [
                        u("h4", null, m(v(d)("library", "Scanner-conflict queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: _e.value
                        }, m(v(d)("library", "Review scanner conflicts")), 9, US),
                        u("form", {
                          method: "post",
                          action: ae.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: q.value
                          }, null, 8, HS),
                          N[32] || (N[32] = u("input", {
                            type: "hidden",
                            name: "scannerConflicts",
                            value: "1"
                          }, null, -1)),
                          N[33] || (N[33] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-scanner-conflict"
                          }, null, -1)),
                          u("button", jS, m(v(d)("library", "Tag scanner-conflict rows")), 1)
                        ], 8, BS)
                      ], 8, zS)
                    ]),
                    jt.value.enabled ? (C(), T("section", VS, [
                      u("div", GS, [
                        u("p", KS, m(v(d)("library", "Metadata review workbench")), 1),
                        u("h3", {
                          id: "library-metadata-review-workbench-heading",
                          title: v(d)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                        }, m(v(d)("library", "Review next conflict")), 9, qS)
                      ]),
                      jt.value.item ? (C(), T("article", WS, [
                        u("header", null, [
                          u("strong", null, m(jt.value.item.title), 1),
                          u("span", YS, m(jt.value.item.cachedPath), 1)
                        ]),
                        u("div", ZS, [
                          (C(!0), T(be, null, qe(jt.value.fields, (_) => (C(), T("article", {
                            key: _.field,
                            class: "library-metadata-review-field"
                          }, [
                            u("h4", null, m(_.field), 1),
                            u("dl", null, [
                              u("div", null, [
                                u("dt", null, m(v(d)("library", "Current value")), 1),
                                u("dd", null, m(_.currentValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, m(v(d)("library", "scanner candidate")), 1),
                                u("dd", null, m(_.scannerCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, m(v(d)("library", "path-template candidate")), 1),
                                u("dd", null, m(_.pathTemplateCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, m(v(d)("library", "sidecar value")), 1),
                                u("dd", null, m(_.sidecarValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, m(v(d)("library", "source provenance")), 1),
                                u("dd", null, m(_.sourceProvenance || "—"), 1)
                              ])
                            ]),
                            u("form", {
                              method: "post",
                              action: jt.value.item.resetFieldUrl,
                              class: "library-metadata-review-accept-form"
                            }, [
                              u("input", {
                                type: "hidden",
                                name: "requesttoken",
                                value: q.value
                              }, null, 8, JS),
                              u("input", {
                                type: "hidden",
                                name: "field",
                                value: _.field
                              }, null, 8, QS),
                              N[34] || (N[34] = u("input", {
                                type: "hidden",
                                name: "returnTo",
                                value: "catalogue"
                              }, null, -1)),
                              u("button", eT, m(v(d)("library", "accept scanner candidate")), 1)
                            ], 8, XS)
                          ]))), 128))
                        ]),
                        u("footer", tT, [
                          u("a", {
                            class: "button secondary",
                            href: jt.value.item.detailsUrl
                          }, m(v(d)("library", "Open full details")), 9, nT),
                          u("a", {
                            class: "button secondary",
                            href: jt.value.skipUrl
                          }, m(v(d)("library", "Skip to next conflict")), 9, iT)
                        ])
                      ])) : (C(), T("p", aT, m(v(d)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
                      u("a", {
                        class: "button secondary",
                        href: jt.value.reviewNextUrl
                      }, m(v(d)("library", "Review next conflict")), 9, rT)
                    ])) : G("", !0)
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--admin",
                    "data-workspace-panel": "admin",
                    onToggle: Mi
                  }, [
                    u("summary", oT, [
                      N[35] || (N[35] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⚙", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
                      }, m(v(d)("library", "Admin tools")), 9, sT),
                      u("small", lT, m(v(d)("library", "Roots, scans, exports and repair operations")), 1),
                      u("b", cT, m(v(d)("library", "all enabled roots")), 1)
                    ]),
                    u("div", uT, [
                      u("a", {
                        href: de.value,
                        class: "button secondary",
                        "aria-label": "Open Library settings"
                      }, m(v(d)("library", "Settings")), 9, dT),
                      ie.value ? (C(), T("a", {
                        key: 0,
                        href: ie.value,
                        class: "button secondary",
                        "aria-label": "Export corrected metadata"
                      }, m(v(d)("library", "Export corrected metadata")), 9, fT)) : G("", !0),
                      F.value ? (C(), T("a", {
                        key: 1,
                        href: F.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar manifest"
                      }, m(v(d)("library", "Sidecar manifest")), 9, pT)) : G("", !0),
                      M.value ? (C(), T("a", {
                        key: 2,
                        href: M.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar ZIP"
                      }, m(v(d)("library", "Sidecar ZIP")), 9, hT)) : G("", !0)
                    ]),
                    u("div", mT, [
                      u("p", vT, m(v(d)("library", "Import health")), 1),
                      u("h3", {
                        title: v(d)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
                      }, m(v(d)("library", "Metadata overview")), 9, gT),
                      Ie.loading ? (C(), T("p", bT, m(v(d)("library", "Loading cached metadata overview…")), 1)) : Ie.error ? (C(), T("p", yT, m(Ie.error), 1)) : Ie.loaded ? G("", !0) : (C(), T("p", _T, m(v(d)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
                      Ie.loaded ? (C(), T(be, { key: 3 }, [
                        st.value.message ? (C(), T("p", wT, m(st.value.message), 1)) : st.value.cacheStatus === "missing" ? (C(), T("p", CT, m(v(d)("library", "No cached metadata overview exists yet")), 1)) : G("", !0),
                        Qe.value ? (C(), T("p", ET, m(v(d)("library", "Last generated")) + ": " + m(Qe.value), 1)) : G("", !0),
                        u("button", {
                          type: "button",
                          class: "button secondary library-import-health-refresh",
                          disabled: Ie.refreshing,
                          onClick: Bs
                        }, m(Ie.refreshing ? v(d)("library", "Refreshing metadata overview…") : v(d)("library", "Refresh metadata overview")), 9, ST),
                        u("div", TT, [
                          u("a", {
                            class: "button secondary",
                            href: gt.value.reviewUrl || "?status=metadata_error"
                          }, m(v(d)("library", "Review metadata errors")), 9, AT),
                          u("a", {
                            class: "button secondary",
                            href: Ve.value
                          }, m(v(d)("library", "Full review")), 9, kT),
                          u("a", {
                            class: "button secondary",
                            href: Te.value
                          }, m(v(d)("library", "Export TSV")), 9, xT),
                          u("a", {
                            class: "button secondary",
                            href: nt.value
                          }, m(v(d)("library", "Probe covers")), 9, NT)
                        ]),
                        u("div", OT, [
                          u("article", null, [
                            u("h4", null, m(v(d)("library", "Metadata errors")), 1),
                            u("p", LT, m(gt.value.total || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, m(v(d)("library", "Archive/container check")), 1),
                            u("p", RT, m(U.value.mismatches || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, m(v(d)("library", "Cover health")), 1),
                            u("p", IT, m(h.value.note), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, m(v(d)("library", "Cover support matrix")), 1),
                            u("p", PT, m(v(d)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                          ]),
                          gt.value.examples?.length ? (C(), T("details", DT, [
                            u("summary", null, m(v(d)("library", "Example files and suggested actions")), 1),
                            u("ul", null, [
                              (C(!0), T(be, null, qe(gt.value.examples, (_) => (C(), T("li", {
                                key: `${_.fileId}-${_.path}`
                              }, [
                                u("code", null, m(_.path), 1),
                                u("span", null, m(_.scanStatus) + " · " + m(_.scanError) + " · " + m(_.actualContainerType), 1),
                                u("strong", null, m(_.suggestedRepairAction), 1)
                              ]))), 128))
                            ])
                          ])) : G("", !0)
                        ])
                      ], 64)) : G("", !0)
                    ])
                  ], 32)
                ], 8, lC),
                u("div", FT, [
                  u("div", null, [
                    x.value ? (C(), T("p", MT, m(H.value), 1)) : G("", !0),
                    u("h2", $T, m(j.value), 1)
                  ])
                ]),
                Z.value ? (C(), T("p", zT, m(Z.value), 1)) : G("", !0),
                xe.value ? (C(), T("p", UT, m(xe.value), 1)) : G("", !0),
                x.value ? (C(), T("section", BT, [
                  u("p", HT, m(H.value), 1),
                  u("h3", {
                    id: "library-discovery-heading",
                    title: O.value ? v(d)("library", "Items by this creator, sorted by publication context when available.") : S.value ? v(d)("library", "Items from this publication year, sorted by publication date when available.") : v(d)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, m(z.value), 9, jT),
                  u("div", VT, [
                    u("span", null, m(R.value.total) + " " + m(v(d)("library", "items")), 1),
                    f.value?.earliestYear && f.value?.latestYear ? (C(), T("span", GT, m(f.value.earliestYear) + "–" + m(f.value.latestYear), 1)) : G("", !0),
                    f.value?.datedCount ? (C(), T("span", KT, m(f.value.datedCount) + " " + m(v(d)("library", "dated")), 1)) : G("", !0),
                    f.value?.undatedCount > 0 ? (C(), T("span", qT, m(f.value.undatedCount) + " " + m(v(d)("library", "undated")), 1)) : G("", !0)
                  ]),
                  y.value && f.value ? (C(), T("aside", WT, [
                    u("strong", null, m(v(d)("library", "Publication contents")), 1),
                    u("span", null, m(f.value.itemCount) + " " + m(v(d)("library", "items")), 1),
                    f.value.earliestYear && f.value.latestYear ? (C(), T("span", YT, m(f.value.earliestYear) + "–" + m(f.value.latestYear), 1)) : G("", !0),
                    u("span", null, m(f.value.datedCount) + " " + m(v(d)("library", "with issue/date coverage")), 1),
                    f.value.undatedCount > 0 ? (C(), T("span", ZT, m(f.value.undatedCount) + " " + m(v(d)("library", "without dates yet")), 1)) : G("", !0),
                    u("span", null, m(v(d)("library", "read-only grouping")), 1)
                  ])) : G("", !0),
                  y.value && f.value?.issueGroups?.length ? (C(), T("section", XT, [
                    u("div", null, [
                      u("p", JT, m(v(d)("library", "Issue order")), 1),
                      u("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: v(d)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, m(v(d)("library", "Read-only issue/date grouping")), 9, QT)
                    ]),
                    u("div", eA, [
                      (C(!0), T(be, null, qe(f.value.issueGroups, (_) => (C(), T("a", {
                        key: `strip-${_.label}`,
                        class: "library-issue-strip-card",
                        href: _.items?.[0]?.detailsUrl || "#"
                      }, [
                        u("span", null, m(_.label), 1),
                        u("strong", null, m(_.items?.[0]?.issueLabel || v(d)("library", "Issue")), 1),
                        u("small", null, m(_.items?.length || 0) + " " + m(v(d)("library", "items")), 1)
                      ], 8, tA))), 128))
                    ]),
                    f.value.gapRanges?.length ? (C(), T("p", nA, m(v(d)("library", "Gap")) + ": " + m(f.value.gapRanges.join(", ")), 1)) : G("", !0),
                    (C(!0), T(be, null, qe(f.value.issueGroups, (_) => (C(), T("div", {
                      key: _.label,
                      class: "library-publication-issue-group"
                    }, [
                      u("h5", null, m(_.label), 1),
                      u("ol", null, [
                        (C(!0), T(be, null, qe(_.items, (fe, We) => (C(), T("li", {
                          key: fe.itemId
                        }, [
                          u("span", iA, m(fe.issueLabel), 1),
                          u("a", {
                            href: fe.detailsUrl || "#"
                          }, m(fe.title), 9, aA),
                          u("small", null, [
                            Pe(m(fe.publicationType), 1),
                            fe.publicationDate ? (C(), T(be, { key: 0 }, [
                              Pe(" · " + m(fe.publicationDate), 1)
                            ], 64)) : G("", !0)
                          ]),
                          u("small", rA, [
                            We > 0 ? (C(), T(be, { key: 0 }, [
                              Pe(m(v(d)("library", "Previous issue")), 1)
                            ], 64)) : G("", !0),
                            We > 0 && We < _.items.length - 1 ? (C(), T(be, { key: 1 }, [
                              Pe(" · ")
                            ], 64)) : G("", !0),
                            We < _.items.length - 1 ? (C(), T(be, { key: 2 }, [
                              Pe(m(v(d)("library", "Next issue")), 1)
                            ], 64)) : G("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    f.value.unknownIssueItems?.length ? (C(), T("details", oA, [
                      u("summary", {
                        title: v(d)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, m(v(d)("library", "Unknown issue/date")) + " · " + m(f.value.unknownIssueItems.length), 9, sA)
                    ])) : G("", !0)
                  ])) : G("", !0),
                  u("p", null, [
                    u("a", {
                      href: K.value,
                      class: "button secondary library-discovery-back-link"
                    }, m(v(d)("library", "Back to full catalogue")), 9, lA)
                  ])
                ])) : G("", !0),
                u("nav", cA, [
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "compact",
                    class: Oe({ active: De.value === "compact" }),
                    "aria-pressed": De.value === "compact" ? "true" : "false",
                    onClick: N[17] || (N[17] = (_) => cn("compact"))
                  }, m(v(d)("library", "Compact")), 11, uA),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "gallery",
                    class: Oe({ active: De.value === "gallery" }),
                    "aria-pressed": De.value === "gallery" ? "true" : "false",
                    onClick: N[18] || (N[18] = (_) => cn("gallery"))
                  }, m(v(d)("library", "Gallery")), 11, dA),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "shelf",
                    class: Oe({ active: De.value === "shelf" }),
                    "aria-pressed": De.value === "shelf" ? "true" : "false",
                    onClick: N[19] || (N[19] = (_) => cn("shelf"))
                  }, m(v(d)("library", "Shelf")), 11, fA)
                ]),
                u("div", pA, [
                  u("p", hA, [
                    Pe(m(v(d)("library", "Showing")) + " " + m(R.value.from) + "–" + m(R.value.to) + " " + m(v(d)("library", "of")) + " " + m(R.value.total) + " " + m(v(d)("library", "catalogue items")), 1),
                    it.value.length > 0 ? (C(), T("span", mA, [
                      N[36] || (N[36] = Pe(" · ", -1)),
                      u("a", vA, m(v(d)("library", "Clear all filters")), 1)
                    ])) : G("", !0)
                  ]),
                  u("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": v(d)("library", "Catalogue pagination")
                  }, [
                    u("span", bA, [
                      Pe(m(v(d)("library", "Page")) + " " + m(R.value.page), 1),
                      R.value.total > 0 ? (C(), T("span", yA, " · " + m(R.value.from) + "–" + m(R.value.to), 1)) : G("", !0)
                    ]),
                    R.value.previousUrl ? (C(), T("a", {
                      key: 0,
                      href: R.value.previousUrl
                    }, m(v(d)("library", "Previous")), 9, _A)) : (C(), T("span", wA, m(v(d)("library", "Previous")), 1)),
                    R.value.nextUrl ? (C(), T("a", {
                      key: 2,
                      href: R.value.nextUrl
                    }, m(v(d)("library", "Next")), 9, CA)) : (C(), T("span", EA, m(v(d)("library", "Next")), 1))
                  ], 8, gA)
                ]),
                it.value.length > 0 ? (C(), T("nav", {
                  key: 3,
                  class: "library-active-filter-chips",
                  "aria-label": v(d)("library", "Active filters")
                }, [
                  u("span", null, m(v(d)("library", "Active filters")), 1),
                  (C(!0), T(be, null, qe(it.value, (_) => (C(), T("a", {
                    key: _.key,
                    href: Fa(_.key),
                    class: "library-filter-chip",
                    "aria-label": `${v(d)("library", "Remove filter")}: ${_.label}`
                  }, [
                    u("strong", null, m(_.label) + ":", 1),
                    Pe(" " + m(_.value) + " ", 1),
                    N[37] || (N[37] = u("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, TA))), 128))
                ], 8, SA)) : G("", !0),
                o.value.length === 0 ? (C(), T("div", {
                  key: 4,
                  class: Oe(["library-empty-content", { "library-first-run-guidance": ge.value || oe.value, "library-filter-empty-state": me.value && !ge.value && !oe.value }]),
                  role: "status"
                }, [
                  ge.value ? (C(), T(be, { key: 0 }, [
                    u("h3", {
                      title: v(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, m(v(d)("library", "Start with one Library root")), 9, AA),
                    u("p", kA, [
                      u("a", {
                        href: de.value,
                        class: "button primary"
                      }, m(v(d)("library", "Add a Library root")), 9, xA),
                      u("span", NA, m(v(d)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : oe.value ? (C(), T(be, { key: 1 }, [
                    u("h3", {
                      title: v(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, m(v(d)("library", "No enabled Library roots")), 9, OA),
                    u("p", LA, [
                      u("a", {
                        href: de.value,
                        class: "button primary"
                      }, m(v(d)("library", "Open Library settings")), 9, RA)
                    ])
                  ], 64)) : me.value ? (C(), T(be, { key: 2 }, [
                    u("h3", {
                      title: v(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, m(v(d)("library", "No matches for the current filters")), 9, IA),
                    u("p", PA, [
                      u("a", {
                        href: Ma(),
                        class: "button secondary"
                      }, m(v(d)("library", "Clear search")), 9, DA),
                      u("a", FA, m(v(d)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (C(), T(be, { key: 3 }, [
                    u("h3", {
                      title: v(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, m(v(d)("library", "No catalogue items yet")), 9, MA),
                    u("p", $A, [
                      u("a", {
                        href: de.value,
                        class: "button primary"
                      }, m(v(d)("library", "Run a scan from settings")), 9, zA)
                    ])
                  ], 64))
                ], 2)) : (C(), T("div", {
                  key: 5,
                  class: Oe(["library-cover-gallery", ze.value])
                }, [
                  (C(!0), T(be, null, qe(o.value, (_) => (C(), T("article", {
                    key: _.id,
                    class: Oe(["library-cover-card", { "library-cover-card--open": Mt[_.id], "library-cover-card--cover-loaded": Fn(_) === "loaded", "library-cover-card--cover-error": Fn(_) === "error" }])
                  }, [
                    u("a", {
                      class: "library-cover-link",
                      href: _.openUrl,
                      "aria-label": `Read ${_.title}`
                    }, [
                      u("span", BA, [
                        Fn(_) === "loading" ? (C(), T("span", HA)) : G("", !0),
                        u("img", {
                          class: Oe(["library-cover-image", { "library-cover-image--loaded": Fn(_) === "loaded" }]),
                          src: _.coverUrl,
                          alt: `Cover for ${_.title}`,
                          loading: "lazy",
                          onLoad: (fe) => Ba(_),
                          onError: (fe) => pa(_)
                        }, null, 42, jA),
                        Fn(_) === "error" ? (C(), T("span", VA, m(v(d)("library", "Cover unavailable")), 1)) : G("", !0)
                      ])
                    ], 8, UA),
                    u("form", {
                      method: "post",
                      action: _.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ut((fe) => Ha(_, fe), ["prevent"])
                    }, [
                      u("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: q.value
                      }, null, 8, KA),
                      N[38] || (N[38] = u("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      u("input", {
                        type: "hidden",
                        name: "starred",
                        value: _.starred ? "0" : "1"
                      }, null, 8, qA),
                      u("button", {
                        type: "submit",
                        class: Oe(["library-cover-star-button", { "library-cover-star-button--starred": _.starred }]),
                        "aria-pressed": _.starred ? "true" : "false",
                        title: _.starred ? v(d)("library", "Unstar this publication") : v(d)("library", "Star this publication"),
                        "aria-label": _.starred ? v(d)("library", "Unstar this publication") : v(d)("library", "Star this publication"),
                        "aria-busy": gi[_.id] ? "true" : void 0,
                        disabled: gi[_.id],
                        onClick: ut((fe) => Ha(_, fe), ["prevent"])
                      }, m(_.starred ? "★" : "☆"), 11, WA),
                      bi[_.id] ? (C(), T("span", {
                        key: 0,
                        "data-library-star-error": _.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, m(bi[_.id]), 9, YA)) : G("", !0)
                    ], 40, GA),
                    u("div", ZA, [
                      u("div", XA, [
                        u("h3", null, [
                          _.starred ? (C(), T("span", {
                            key: 0,
                            class: "library-star-marker",
                            "aria-label": v(d)("library", "Starred")
                          }, "★", 8, JA)) : G("", !0),
                          Pe(m(_.title), 1)
                        ]),
                        u("a", {
                          class: "library-cover-read",
                          href: _.openUrl
                        }, m(v(d)("library", "Read")), 9, QA)
                      ]),
                      u("details", {
                        class: "library-cover-details",
                        onToggle: (fe) => vi(_.id, fe)
                      }, [
                        u("summary", {
                          class: "library-cover-details-summary",
                          "aria-label": `${v(d)("library", "Show details and actions")}: ${_.title}`
                        }, m(v(d)("library", "Details")), 9, tk),
                        u("div", nk, [
                          _.creators ? (C(), T("p", ik, m(_.creators), 1)) : G("", !0),
                          u("dl", ak, [
                            u("div", rk, [
                              u("dt", null, m(v(d)("library", "Type")), 1),
                              u("dd", null, m(_.publicationType), 1)
                            ]),
                            _.publication ? (C(), T("div", ok, [
                              u("dt", null, m(v(d)("library", "Series")), 1),
                              u("dd", null, m(_.publication), 1)
                            ])) : G("", !0),
                            _.publicationDate ? (C(), T("div", sk, [
                              u("dt", null, m(v(d)("library", "Date")), 1),
                              u("dd", null, m(_.publicationDate), 1)
                            ])) : G("", !0),
                            _.workflowStatus ? (C(), T("div", lk, [
                              u("dt", null, m(v(d)("library", "Status")), 1),
                              u("dd", null, m(_.workflowStatus), 1)
                            ])) : G("", !0),
                            _.hasScannerConflict ? (C(), T("div", ck, [
                              u("dt", null, m(v(d)("library", "Review")), 1),
                              u("dd", null, m(_.scannerConflictCount) + " fields", 1)
                            ])) : G("", !0),
                            _.lastOpenedAt ? (C(), T("div", uk, [
                              u("dt", null, m(v(d)("library", "Last opened")), 1),
                              u("dd", null, m(_.lastOpenedAt), 1)
                            ])) : G("", !0),
                            _.extension ? (C(), T("div", dk, [
                              u("dt", null, m(v(d)("library", "Format")) + ":", 1),
                              u("dd", null, m(qr(_.extension)), 1)
                            ])) : G("", !0),
                            _.shelf ? (C(), T("div", fk, [
                              u("dt", null, m(v(d)("library", "Shelf")), 1),
                              u("dd", null, m(_.shelf), 1)
                            ])) : G("", !0)
                          ]),
                          _.description ? (C(), T("p", pk, m(_.description), 1)) : G("", !0),
                          _.scanStatus !== "indexed" || _.scanError ? (C(), T("p", hk, [
                            Pe(" scanStatus: " + m(_.scanStatus || "unknown"), 1),
                            _.scanError ? (C(), T("span", mk, " · scanError: " + m(_.scanError), 1)) : G("", !0)
                          ])) : G("", !0),
                          u("div", vk, [
                            $i(_).length === 0 ? (C(), T("span", gk, "No Nextcloud tags")) : (C(!0), T(be, { key: 1 }, qe($i(_), (fe) => (C(), T("span", {
                              key: fe.id,
                              class: "library-tag"
                            }, m(fe.name), 1))), 128))
                          ]),
                          u("p", bk, [
                            u("a", {
                              href: _.filesUrl
                            }, m(v(d)("library", "Show in Files")), 9, yk),
                            N[39] || (N[39] = Pe(" · ", -1)),
                            u("a", {
                              href: _.downloadUrl
                            }, m(v(d)("library", "Download source")), 9, _k),
                            N[40] || (N[40] = Pe(" · ", -1)),
                            u("button", {
                              type: "button",
                              class: "library-link-button library-cover-details-drawer-button",
                              onClick: (fe) => wt(_)
                            }, m(v(d)("library", "Details drawer")), 9, wk),
                            N[41] || (N[41] = Pe(" · ", -1)),
                            u("a", {
                              href: _.detailsUrl
                            }, m(v(d)("library", "Details")), 9, Ck)
                          ])
                        ])
                      ], 40, ek)
                    ])
                  ], 2))), 128))
                ], 2)),
                o.value.length > 0 ? (C(), T("nav", {
                  key: 6,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": v(d)("library", "Catalogue pagination")
                }, [
                  u("span", Sk, [
                    Pe(m(v(d)("library", "Page")) + " " + m(R.value.page), 1),
                    R.value.total > 0 ? (C(), T("span", Tk, " · " + m(R.value.from) + "–" + m(R.value.to), 1)) : G("", !0)
                  ]),
                  R.value.previousUrl ? (C(), T("a", {
                    key: 0,
                    href: R.value.previousUrl
                  }, m(v(d)("library", "Previous")), 9, Ak)) : (C(), T("span", kk, m(v(d)("library", "Previous")), 1)),
                  R.value.nextUrl ? (C(), T("a", {
                    key: 2,
                    href: R.value.nextUrl
                  }, m(v(d)("library", "Next")), 9, xk)) : (C(), T("span", Nk, m(v(d)("library", "Next")), 1))
                ], 8, Ek)) : G("", !0),
                Ue.value ? (C(), T("div", {
                  key: 7,
                  class: "library-detail-drawer-backdrop",
                  onClick: Dn,
                  "aria-hidden": "true"
                })) : G("", !0),
                Ue.value ? (C(), T("aside", Ok, [
                  u("button", {
                    type: "button",
                    class: "library-detail-drawer-close",
                    "aria-label": "Close details panel",
                    onClick: Dn
                  }, "×"),
                  u("p", Lk, m(v(d)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
                  u("img", {
                    class: "library-detail-drawer-cover",
                    src: Ue.value.coverUrl,
                    alt: `Cover for ${Ue.value.title}`,
                    loading: "lazy"
                  }, null, 8, Rk),
                  u("p", Ik, m(Ue.value.publicationType || v(d)("library", "Publication")), 1),
                  u("h3", Pk, m(Ue.value.title), 1),
                  Ue.value.creators ? (C(), T("p", Dk, m(Ue.value.creators), 1)) : G("", !0),
                  Ue.value.description ? (C(), T("p", Fk, m(Ue.value.description), 1)) : G("", !0),
                  u("dl", Mk, [
                    Ue.value.publication ? (C(), T("div", $k, [
                      u("dt", null, m(v(d)("library", "Series")), 1),
                      u("dd", null, m(Ue.value.publication), 1)
                    ])) : G("", !0),
                    Ue.value.publicationDate ? (C(), T("div", zk, [
                      u("dt", null, m(v(d)("library", "Date")), 1),
                      u("dd", null, m(Ue.value.publicationDate), 1)
                    ])) : G("", !0),
                    Ue.value.shelf ? (C(), T("div", Uk, [
                      u("dt", null, m(v(d)("library", "Shelf")), 1),
                      u("dd", null, m(Ue.value.shelf), 1)
                    ])) : G("", !0)
                  ]),
                  u("p", Bk, [
                    u("a", {
                      class: "button primary",
                      href: Ue.value.openUrl
                    }, m(v(d)("library", "Read")), 9, Hk),
                    u("a", {
                      class: "button secondary",
                      href: Ue.value.detailsUrl
                    }, m(v(d)("library", "View full details")), 9, jk)
                  ]),
                  u("nav", {
                    class: "library-detail-drawer-stepper",
                    "aria-label": v(d)("library", "Browse neighbouring items")
                  }, [
                    u("button", {
                      type: "button",
                      class: "button secondary",
                      disabled: !Cn.value,
                      onClick: N[20] || (N[20] = (_) => mi(Cn.value))
                    }, m(v(d)("library", "Previous issue")), 9, Gk),
                    u("button", {
                      type: "button",
                      class: "button secondary",
                      disabled: !En.value,
                      onClick: N[21] || (N[21] = (_) => mi(En.value))
                    }, m(v(d)("library", "Next issue")), 9, Kk)
                  ], 8, Vk)
                ])) : G("", !0)
              ])
            ])
          ]),
          _: 1
        }),
        Ae(v(Xw), {
          open: !1,
          "no-toggle": "",
          name: v(d)("library", "Details")
        }, null, 8, ["name"])
      ]),
      _: 1
    }));
  }
}, Hd = Rc("library", "catalogue", {}), go = document.querySelector("#library-vue-root"), jd = {
  ...Hd,
  requestToken: go?.dataset.requestToken || Hd.requestToken || ""
};
function ye(e) {
  return String(e ?? "");
}
function _h(e) {
  return ye(e).toUpperCase();
}
function Yk(e, t, n, i = ye) {
  for (const a of t) {
    const r = document.createElement("option");
    r.value = ye(a), r.textContent = i(a), ye(a) === ye(n) && (r.selected = !0), e.appendChild(r);
  }
}
function Vd(e, t, n, i, a = "") {
  const r = document.createElement("label");
  r.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = ye(i), o.placeholder = a, r.appendChild(o), e.appendChild(r);
}
function ya(e, t, n, i, a, r, o = ye) {
  const s = document.createElement("label");
  s.textContent = t;
  const l = document.createElement("select");
  l.name = n;
  const p = document.createElement("option");
  p.value = "", p.textContent = a, l.appendChild(p), Yk(l, r, i, o), s.appendChild(l), e.appendChild(s);
}
function _a(e) {
  const t = ye(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Zk(e, t = {}) {
  return ye(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(ye(e || t?.publication || ""))}`);
}
function Xk(e) {
  return ye(e.discoveryPage) === "publication";
}
function Jk(e, t = {}) {
  return ye(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(ye(e))}`);
}
function Il(e) {
  return ye(e.discoveryPage) === "year";
}
function Qk(e, t = {}) {
  return ye(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(ye(e))}`);
}
function Pl(e) {
  return ye(e.discoveryPage) === "creator";
}
function e2(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, i]) => n !== "sort" && ye(i).trim() !== "");
}
function t2() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Qa(e, t, n, i) {
  const a = document.createElement("a");
  return a.href = t, a.className = n, a.textContent = i, e.appendChild(a), a;
}
function n2(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function i2(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-filter-bar", i.setAttribute("aria-label", d("library", "Catalogue search and filters")), Vd(i, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), ya(i, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Vd(i, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), ya(i, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], _h), ya(i, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), ya(i, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), ya(i, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), ya(i, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", d("library", "Apply catalogue filters")), a.textContent = d("library", "Apply filters");
  const r = document.createElement("a");
  return r.href = "?", r.className = "button secondary", r.setAttribute("aria-label", d("library", "Clear catalogue filters")), r.textContent = d("library", "Clear"), i.append(a, r), i;
}
function a2() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", n = e.get("batchMetadataApplied") || "0", i = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", r = document.createElement("p");
  return r.className = "library-notice library-batch-metadata-apply-result", r.textContent = d("library", `Batch metadata apply updated ${n} ${t} values; ${i} already matched, ${a} skipped.`), r;
}
function r2(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-quick-filter-bar", i.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let a = null;
  const r = () => {
    window.clearTimeout(a), a = window.setTimeout(() => i.requestSubmit(), 350);
  };
  for (const [f, g] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(f) || ye(g).trim() === "") continue;
    const w = document.createElement("input");
    w.type = "hidden", w.name = f, w.value = ye(g), i.appendChild(w);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const s = document.createElement("input");
  s.type = "search", s.name = "q", s.value = ye(n.q), s.placeholder = "Camera, Eco, Rolleiflex...", s.addEventListener("input", r), o.appendChild(s), i.appendChild(o);
  const l = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [f, g, w, A] of l) {
    const E = document.createElement("label");
    E.textContent = f;
    const k = document.createElement("select");
    k.name = g;
    for (const [P, R] of A) {
      const I = document.createElement("option");
      I.value = ye(P), I.textContent = ye(R), ye(P) === ye(w) && (I.selected = !0), k.appendChild(I);
    }
    k.addEventListener("change", () => i.requestSubmit()), E.appendChild(k), i.appendChild(E);
  }
  const p = document.createElement("button");
  p.type = "submit", p.className = "button primary", p.setAttribute("aria-label", d("library", "Apply catalogue filters")), p.textContent = d("library", "Apply filters");
  const c = document.createElement("a");
  return c.href = "?", c.className = "button secondary", c.setAttribute("aria-label", d("library", "Clear catalogue filters")), c.textContent = d("library", "Clear all"), i.append(p, c), i;
}
function o2(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], i = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, a = ye(e.settingsUrl || ""), r = ye(e.metadataExportUrl || ""), o = ye(e.batchTagUrl || "/apps/library/bulk/tags"), s = ye(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), l = ye(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), p = ye(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), c = ye(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), f = document.createElement("div");
  f.className = "library-vue-catalogue library-vue-fallback", f.dataset.vueFallback = "true";
  const g = document.createElement("section");
  g.className = "library-panel", g.setAttribute("aria-labelledby", "library-catalogue-heading");
  const w = document.createElement("div");
  w.className = "library-catalogue-header";
  const A = document.createElement("div"), E = document.createElement("h2");
  E.id = "library-catalogue-heading", E.textContent = d("library", "Library");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), A.append(E, k);
  const P = document.createElement("nav");
  if (P.className = "library-catalogue-toolbar", P.setAttribute("aria-label", d("library", "Library actions")), a) {
    const Z = document.createElement("a");
    Z.href = a, Z.className = "button secondary", Z.setAttribute("aria-label", "Open Library settings"), Z.textContent = d("library", "Settings"), P.appendChild(Z);
  }
  if (r) {
    const Z = document.createElement("a");
    Z.href = r, Z.className = "button secondary", Z.setAttribute("aria-label", "Export corrected metadata"), Z.textContent = d("library", "Export corrected metadata"), P.appendChild(Z);
  }
  if (e.metadataSidecarManifestUrl) {
    const Z = document.createElement("a");
    Z.href = e.metadataSidecarManifestUrl, Z.className = "button secondary", Z.setAttribute("aria-label", "Export sidecar manifest"), Z.textContent = d("library", "Sidecar manifest"), P.appendChild(Z);
  }
  if (e.metadataSidecarBundleUrl) {
    const Z = document.createElement("a");
    Z.href = e.metadataSidecarBundleUrl, Z.className = "button secondary", Z.setAttribute("aria-label", "Export sidecar ZIP"), Z.textContent = d("library", "Sidecar ZIP"), P.appendChild(Z);
  }
  w.append(A, P), g.appendChild(w);
  const R = a2();
  R && g.appendChild(R), g.appendChild(r2(e, i));
  const I = document.createElement("details");
  I.className = "library-filter-panel";
  const $ = document.createElement("summary");
  if ($.className = "library-filter-panel-summary", $.textContent = d("library", "Show catalogue filters"), I.append($, i2(e, i)), g.appendChild(I), Xk(e) || Il(e) || Pl(e)) {
    const Z = document.createElement("section");
    Z.className = "library-discovery-header", Z.setAttribute("aria-labelledby", "library-discovery-heading");
    const X = document.createElement("p");
    X.className = "library-muted", X.textContent = Pl(e) ? d("library", "Creator") : Il(e) ? d("library", "Publication year") : d("library", "Publication / series");
    const le = document.createElement("h3");
    le.id = "library-discovery-heading", le.textContent = ye(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = `${i.total ?? n.length} ${Pl(e) ? d("library", "items by this creator. Sorted by publication context when available.") : Il(e) ? d("library", "items from this publication year. Sorted by publication date when available.") : d("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const Le = document.createElement("a");
    Le.href = "/apps/library/", Le.className = "button secondary", Le.textContent = d("library", "Back to full catalogue"), Z.append(X, le, ke, Le), g.appendChild(Z);
  }
  const re = document.createElement("p");
  re.className = "library-muted library-filter-result-summary", re.textContent = `Showing ${i.from ?? 0}–${i.to ?? n.length} of ${i.total ?? n.length} catalogue items`;
  const ue = document.createElement("a");
  ue.href = "?", ue.textContent = ` ${d("library", "Clear all filters")}`, re.appendChild(ue), g.appendChild(re);
  const ee = document.createElement("details");
  ee.className = "library-batch-actions";
  const de = document.createElement("summary");
  de.textContent = `${d("library", "Batch actions for current results")} (${i.total ?? n.length} ${d("library", "Current filter result")})`;
  const K = document.createElement("form");
  K.method = "post", K.action = o, K.className = "library-batch-tag-form";
  const se = _a(e);
  se && K.appendChild(se);
  for (const [Z, X] of Object.entries(e.activeFilters || {})) {
    if (ye(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Z, le.value = ye(X), K.appendChild(le);
  }
  const ve = document.createElement("label");
  ve.textContent = d("library", "Apply Nextcloud tag to current results");
  const q = document.createElement("input");
  q.type = "text", q.name = "nextcloudTagName", q.placeholder = "batch-review", ve.appendChild(q);
  const ie = document.createElement("button");
  ie.type = "submit", ie.className = "button secondary", ie.textContent = d("library", "Apply Nextcloud tag to current results");
  const F = document.createElement("p");
  F.className = "library-muted", F.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), K.append(ve, ie, F);
  const M = document.createElement("form");
  M.method = "post", M.action = s, M.className = "library-batch-tag-remove-form";
  const Y = _a(e);
  Y && M.appendChild(Y);
  for (const [Z, X] of Object.entries(e.activeFilters || {})) {
    if (ye(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Z, le.value = ye(X), M.appendChild(le);
  }
  const ae = document.createElement("label");
  ae.textContent = d("library", "Nextcloud tag");
  const te = document.createElement("input");
  te.type = "text", te.name = "nextcloudTagName", te.setAttribute("list", "library-nextcloud-tag-suggestions"), te.placeholder = d("library", "e.g. Review"), te.autocomplete = "off", ae.appendChild(te);
  const pe = document.createElement("button");
  pe.type = "submit", pe.className = "button secondary", pe.textContent = d("library", "Remove tag from current results");
  const he = document.createElement("p");
  he.className = "library-muted", he.textContent = d("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), M.append(ae, pe, he);
  const Ce = document.createElement("form");
  Ce.method = "post", Ce.action = l, Ce.className = "library-batch-metadata-reset-form";
  const _e = _a(e);
  _e && Ce.appendChild(_e);
  for (const [Z, X] of Object.entries(e.activeFilters || {})) {
    if (ye(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Z, le.value = ye(X), Ce.appendChild(le);
  }
  const Ve = document.createElement("input");
  Ve.type = "hidden", Ve.name = "scannerConflicts", Ve.value = "1";
  const Te = document.createElement("button");
  Te.type = "submit", Te.className = "button secondary", Te.textContent = d("library", "Reset filtered metadata");
  const nt = document.createElement("p");
  nt.className = "library-muted", nt.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ce.append(Ve, Te, nt);
  const Je = document.createElement("form");
  Je.method = "post", Je.action = p, Je.className = "library-batch-metadata-edit-preview-form", Je.target = "_blank";
  const Ie = _a(e);
  Ie && Je.appendChild(Ie);
  for (const [Z, X] of Object.entries(e.activeFilters || {})) {
    if (ye(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Z, le.value = ye(X), Je.appendChild(le);
  }
  const st = document.createElement("label");
  st.textContent = d("library", "Metadata field");
  const Qe = document.createElement("select");
  Qe.name = "bulkEditField";
  for (const [Z, X] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const le = document.createElement("option");
    le.value = Z, le.textContent = d("library", X), Qe.appendChild(le);
  }
  st.appendChild(Qe);
  const gt = document.createElement("label");
  gt.textContent = d("library", "Preview value");
  const U = document.createElement("input");
  U.type = "text", U.name = "bulkEditValue", U.placeholder = "magazine, de, photography...", U.autocomplete = "off", gt.appendChild(U);
  const h = document.createElement("button");
  h.type = "submit", h.className = "button secondary", h.textContent = d("library", "Preview & apply metadata edit");
  const y = document.createElement("p");
  y.className = "library-muted", y.textContent = d("library", "Preview first, then apply from the review page."), Je.append(st, gt, h, y);
  const S = document.createElement("form");
  S.method = "post", S.action = c, S.className = "library-batch-cover-refresh-form";
  const O = _a(e);
  O && S.appendChild(O);
  for (const [Z, X] of Object.entries(e.activeFilters || {})) {
    if (ye(X).trim() === "") continue;
    const le = document.createElement("input");
    le.type = "hidden", le.name = Z, le.value = ye(X), S.appendChild(le);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = d("library", "Request fresh cover previews");
  const z = document.createElement("p");
  z.className = "library-muted", z.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), S.append(x, z), ee.append(de, K, M, Ce, Je, S), g.appendChild(ee);
  const j = document.createElement("nav");
  j.className = "library-pagination", j.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const H = document.createElement("span");
  H.className = "library-pagination-range", H.textContent = `Page ${i.page ?? 1} · ${i.from ?? 0}–${i.to ?? n.length}`, j.appendChild(H), g.appendChild(j);
  const Q = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], B = document.createElement("details");
  B.className = Q.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const ge = document.createElement("summary");
  ge.className = "library-periodical-groups-summary", ge.textContent = d("library", "Show top series and periodicals"), B.appendChild(ge);
  const oe = document.createElement("h3");
  oe.textContent = Q.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const me = document.createElement("p");
  if (me.className = "library-muted", me.textContent = Q.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), B.append(oe, me), Q.length > 0) {
    const Z = document.createElement("ul");
    for (const X of Q) {
      const le = document.createElement("li"), ke = document.createElement("a");
      ke.href = Zk(X.publication, X), ke.textContent = ye(X.publication);
      const Le = document.createElement("span");
      Le.className = "library-muted", Le.textContent = `${X.itemCount} items`, le.append(ke, Le), Z.appendChild(le);
    }
    B.appendChild(Z);
  }
  g.appendChild(B);
  const Ee = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Ee.length > 0) {
    const Z = document.createElement("details");
    Z.className = "library-year-groups";
    const X = document.createElement("summary");
    X.className = "library-periodical-groups-summary", X.textContent = d("library", "Show publication years");
    const le = document.createElement("h3");
    le.textContent = d("library", "Top publication years");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = d("library", "Jump into dated books, magazines, journals and comics by year.");
    const Le = document.createElement("ul");
    for (const De of Ee) {
      const ze = document.createElement("li"), it = document.createElement("a");
      it.href = Jk(De, e), it.textContent = ye(De), ze.appendChild(it), Le.appendChild(ze);
    }
    Z.append(X, le, ke, Le), g.appendChild(Z);
  }
  const xe = Array.isArray(e.creators) ? e.creators : [];
  if (xe.length > 0) {
    const Z = document.createElement("details");
    Z.className = "library-creator-groups";
    const X = document.createElement("summary");
    X.className = "library-periodical-groups-summary", X.textContent = d("library", "Show creators");
    const le = document.createElement("h3");
    le.textContent = d("library", "Top creators");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = d("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const Le = document.createElement("ul");
    for (const De of xe) {
      const ze = document.createElement("li"), it = document.createElement("a");
      it.href = Qk(De, e), it.textContent = ye(De), ze.appendChild(it), Le.appendChild(ze);
    }
    Z.append(X, le, ke, Le), g.appendChild(Z);
  }
  if (n.length === 0) {
    const Z = document.createElement("div"), X = Number(e.rootCount || 0), le = Number(e.enabledRootCount || 0), ke = e2(e);
    Z.className = "library-empty-content", (X === 0 || le === 0) && Z.classList.add("library-first-run-guidance"), ke && X > 0 && le > 0 && Z.classList.add("library-filter-empty-state"), Z.setAttribute("role", "status");
    const Le = document.createElement("h3"), De = document.createElement("p");
    De.className = "library-muted";
    const ze = document.createElement("p");
    ze.className = "library-empty-actions", X === 0 ? (Le.textContent = d("library", "Start with one Library root"), De.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Qa(ze, a, "button primary", d("library", "Add a Library root")), n2(ze, d("library", "Run a scan after saving a root"))) : le === 0 ? (Le.textContent = d("library", "No enabled Library roots"), De.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Qa(ze, a, "button primary", d("library", "Open Library settings"))) : ke ? (Le.textContent = d("library", "No matches for the current filters"), De.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Qa(ze, t2(), "button secondary", d("library", "Clear search")), Qa(ze, "?", "button primary", d("library", "Clear all filters"))) : (Le.textContent = d("library", "No catalogue items yet"), De.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Qa(ze, a, "button primary", d("library", "Run a scan from settings"))), Z.append(Le, De, ze), g.appendChild(Z);
  } else {
    const Z = document.createElement("div");
    Z.className = "library-cover-gallery";
    for (const X of n) {
      const le = document.createElement("article");
      le.className = "library-cover-card";
      const ke = document.createElement("a");
      ke.className = "library-cover-link", ke.href = ye(X.openUrl || "#"), ke.setAttribute("aria-label", `Read ${ye(X.title || "publication")}`);
      const Le = document.createElement("img");
      Le.className = "library-cover-image", Le.src = ye(X.coverUrl || ""), Le.alt = `Cover for ${ye(X.title || "publication")}`, Le.loading = "lazy", ke.appendChild(Le);
      const De = _a(e), ze = document.createElement("form");
      ze.method = "post", ze.action = ye(X.starUrl || ""), ze.className = "library-cover-star-form", De && ze.appendChild(De);
      const it = document.createElement("input");
      it.type = "hidden", it.name = "returnTo", it.value = "catalogue";
      const lt = document.createElement("input");
      lt.type = "hidden", lt.name = "starred", lt.value = X.starred ? "0" : "1";
      const tt = document.createElement("button");
      tt.type = "submit", tt.className = X.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", tt.setAttribute("aria-pressed", X.starred ? "true" : "false"), tt.setAttribute("aria-label", X.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), tt.title = X.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), tt.textContent = X.starred ? "★" : "☆", ze.append(it, lt, tt);
      const Mt = document.createElement("div");
      Mt.className = "library-cover-summary";
      const nn = document.createElement("h3");
      if (nn.textContent = ye(X.title || "Untitled publication"), Mt.appendChild(nn), X.creators) {
        const sn = document.createElement("p");
        sn.className = "library-creator", sn.textContent = ye(X.creators), Mt.appendChild(sn);
      }
      const an = document.createElement("dl");
      an.className = "library-cover-detail-list";
      const rn = [
        ["Type", ye(X.publicationType || "other")],
        ["Format", X.extension ? _h(X.extension) : ""],
        ["Shelf", X.shelf ? ye(X.shelf) : ""]
      ].filter(([, sn]) => sn !== "");
      for (const [sn, jt] of rn) {
        const ln = document.createElement("div");
        ln.className = "library-cover-detail-chip";
        const Pn = document.createElement("dt");
        Pn.textContent = sn;
        const wt = document.createElement("dd");
        wt.textContent = jt, ln.append(Pn, wt), an.appendChild(ln);
      }
      Mt.appendChild(an);
      const wn = document.createElement("p"), Ue = document.createElement("a");
      Ue.href = ye(X.openUrl || "#"), Ue.textContent = d("library", "Read");
      const on = document.createElement("a");
      on.href = ye(X.filesUrl || "#"), on.textContent = d("library", "Show in Files");
      const Cn = document.createElement("a");
      Cn.href = ye(X.downloadUrl || "#"), Cn.textContent = d("library", "Download source");
      const En = document.createElement("a");
      En.href = ye(X.detailsUrl || "#"), En.textContent = d("library", "Details"), wn.append(Ue, document.createTextNode(" · "), on, document.createTextNode(" · "), Cn, document.createTextNode(" · "), En), Mt.appendChild(wn), le.append(ke, ze, Mt), Z.appendChild(le);
    }
    g.appendChild(Z);
  }
  return f.appendChild(g), f;
}
if (go)
  try {
    tg(Wk, { state: jd }).mount(go);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), go.replaceChildren(o2(jd));
  }
