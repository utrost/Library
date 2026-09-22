// @__NO_SIDE_EFFECTS__
function Mu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const qe = {}, ir = [], kn = () => {
}, Wp = () => !1, Ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rl = (e) => e.startsWith("onUpdate:"), yt = Object.assign, zu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cb = Object.prototype.hasOwnProperty, Je = (e, t) => Cb.call(e, t), Oe = Array.isArray, qi = (e) => Po(e) === "[object Map]", Da = (e) => Po(e) === "[object Set]", nf = (e) => Po(e) === "[object Date]", De = (e) => typeof e == "function", st = (e) => typeof e == "string", Fn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Yp = (e) => (Qe(e) || De(e)) && De(e.then) && De(e.catch), Xp = Object.prototype.toString, Po = (e) => Xp.call(e), kb = (e) => Po(e).slice(8, -1), Zp = (e) => Po(e) === "[object Object]", Uu = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Mu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Il = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Tb = /-\w/g, qt = Il(
  (e) => e.replace(Tb, (t) => t.slice(1).toUpperCase())
), Eb = /\B([A-Z])/g, Ti = Il(
  (e) => e.replace(Eb, "-$1").toLowerCase()
), Pl = Il((e) => e.charAt(0).toUpperCase() + e.slice(1)), yc = Il(
  (e) => e ? `on${Pl(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Jp = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, $l = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ab = (e) => {
  const t = st(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let af;
const Fl = () => af || (af = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = st(i) ? Lb(i) : vn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (st(e) || Qe(e))
    return e;
}
const Ob = /;(?![^(]*\))/g, xb = /:([^]+)/, Nb = /\/\*[^]*?\*\//g;
function Lb(e) {
  const t = {};
  return e.replace(Nb, "").split(Ob).forEach((n) => {
    if (n) {
      const i = n.split(xb);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (st(e))
    t = e;
  else if (Oe(e))
    for (let n = 0; n < e.length; n++) {
      const i = be(e[n]);
      i && (t += i + " ");
    }
  else if (Qe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ls(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !st(t) && (e.class = be(t)), n && (e.style = vn(n)), e;
}
const Rb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ib = /* @__PURE__ */ Mu(Rb);
function Qp(e) {
  return !!e || e === "";
}
function Pb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Zi(e[i], t[i]);
  return n;
}
function rf(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Zi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Zi(e, t) {
  if (e === t) return !0;
  let n = nf(e), i = nf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Fn(e), i = Fn(t), n || i)
    return e === t;
  if (n = Oe(e), i = Oe(t), n || i)
    return n && i ? Pb(e, t) : !1;
  if (n = Qe(e), i = Qe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = qi(e), i = qi(t), n || i || (n = Da(e), i = Da(t), n || i))
      return n && i ? rf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), d = t.hasOwnProperty(o);
      if (u && !d || !u && d || !Zi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function $b(e, t) {
  return e.findIndex((n) => Zi(n, t));
}
const eh = (e) => !!(e && e.__v_isRef === !0), v = (e) => st(e) ? e : e == null ? "" : Oe(e) || Qe(e) && (e.toString === Xp || !De(e.toString)) ? eh(e) ? v(e.value) : JSON.stringify(e, th, 2) : String(e), th = (e, t) => eh(t) ? th(e, t.value) : qi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[_c(i, r) + " =>"] = a, n),
    {}
  )
} : Da(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _c(n))
} : Fn(t) ? _c(t) : Qe(t) && !Oe(t) && !Zp(t) ? String(t) : t, _c = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Fb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Nt;
class Db {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Nt && (Nt.active ? (this.parent = Nt, this.index = (Nt.scopes || (Nt.scopes = [])).push(
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
      const n = Nt;
      try {
        return Nt = this, t();
      } finally {
        Nt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Nt, Nt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Nt === this)
        Nt = this.prevScope;
      else {
        let t = Nt;
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
function Mb() {
  return Nt;
}
let ot;
const wc = /* @__PURE__ */ new WeakSet();
class nh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Nt && (Nt.active ? Nt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wc.has(this) && (wc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ah(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, of(this), rh(this);
    const t = ot, n = Pn;
    ot = this, Pn = !0;
    try {
      return this.fn();
    } finally {
      oh(this), ot = t, Pn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hu(t);
      this.deps = this.depsTail = void 0, of(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ru(this) && this.run();
  }
  get dirty() {
    return ru(this);
  }
}
let ih = 0, eo, to;
function ah(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = to, to = e;
    return;
  }
  e.next = eo, eo = e;
}
function ju() {
  ih++;
}
function Bu() {
  if (--ih > 0)
    return;
  if (to) {
    let t = to;
    for (to = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; eo; ) {
    let t = eo;
    for (eo = void 0; t; ) {
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
function rh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function oh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Hu(i), zb(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function ru(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === go) || (e.globalVersion = go, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ru(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ot, i = Pn;
  ot = e, Pn = !0;
  try {
    rh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = n, Pn = i, oh(e), e.flags &= -3;
  }
}
function Hu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Hu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Pn = !0;
const lh = [];
function wi() {
  lh.push(Pn), Pn = !1;
}
function Si() {
  const e = lh.pop();
  Pn = e === void 0 ? !0 : e;
}
function of(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ot;
    ot = void 0;
    try {
      t();
    } finally {
      ot = n;
    }
  }
}
let go = 0;
class Ub {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Pn || ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ot)
      n = this.activeLink = new Ub(ot, this), ot.deps ? (n.prevDep = ot.depsTail, ot.depsTail.nextDep = n, ot.depsTail = n) : ot.deps = ot.depsTail = n, ch(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ot.depsTail, n.nextDep = void 0, ot.depsTail.nextDep = n, ot.depsTail = n, ot.deps === n && (ot.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, go++, this.notify(t);
  }
  notify(t) {
    ju();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Bu();
    }
  }
}
function ch(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ch(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ou = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ Symbol(
  ""
), su = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
);
function Vt(e, t, n) {
  if (Pn && ot) {
    let i = ou.get(e);
    i || ou.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Dl()), a.map = i, a.key = n), a.track();
  }
}
function hi(e, t, n, i, a, r) {
  const o = ou.get(e);
  if (!o) {
    go++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (ju(), t === "clear")
    o.forEach(u);
  else {
    const d = Oe(e), h = d && Uu(n);
    if (d && n === "length") {
      const p = Number(i);
      o.forEach((y, k) => {
        (k === "length" || k === bo || !Fn(k) && k >= p) && u(y);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && u(o.get(n)), h && u(o.get(bo)), t) {
        case "add":
          d ? h && u(o.get("length")) : (u(o.get(Pa)), qi(e) && u(o.get(su)));
          break;
        case "delete":
          d || (u(o.get(Pa)), qi(e) && u(o.get(su)));
          break;
        case "set":
          qi(e) && u(o.get(Pa));
          break;
      }
  }
  Bu();
}
function Xa(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Vt(t, "iterate", bo), /* @__PURE__ */ Tn(e) ? t : t.map(Dn));
}
function Ml(e) {
  return Vt(e = /* @__PURE__ */ Ye(e), "iterate", bo), e;
}
function Xn(e, t) {
  return /* @__PURE__ */ Ci(e) ? dr(/* @__PURE__ */ $a(e) ? Dn(t) : t) : Dn(t);
}
const jb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sc(this, Symbol.iterator, (e) => Xn(this, e));
  },
  concat(...e) {
    return Xa(this).concat(
      ...e.map((t) => Oe(t) ? Xa(t) : t)
    );
  },
  entries() {
    return Sc(this, "entries", (e) => (e[1] = Xn(this, e[1]), e));
  },
  every(e, t) {
    return si(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return si(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Xn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return si(
      this,
      "find",
      e,
      t,
      (n) => Xn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return si(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return si(
      this,
      "findLast",
      e,
      t,
      (n) => Xn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return si(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return si(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cc(this, "includes", e);
  },
  indexOf(...e) {
    return Cc(this, "indexOf", e);
  },
  join(e) {
    return Xa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return si(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dr(this, "pop");
  },
  push(...e) {
    return Dr(this, "push", e);
  },
  reduce(e, ...t) {
    return sf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return sf(this, "reduceRight", e, t);
  },
  shift() {
    return Dr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return si(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dr(this, "splice", e);
  },
  toReversed() {
    return Xa(this).toReversed();
  },
  toSorted(e) {
    return Xa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xa(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dr(this, "unshift", e);
  },
  values() {
    return Sc(this, "values", (e) => Xn(this, e));
  }
};
function Sc(e, t, n) {
  const i = Ml(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Bb = Array.prototype;
function si(e, t, n, i, a, r) {
  const o = Ml(e), u = o !== e && !/* @__PURE__ */ Tn(e), d = o[t];
  if (d !== Bb[t]) {
    const y = d.apply(e, r);
    return u ? Dn(y) : y;
  }
  let h = n;
  o !== e && (u ? h = function(y, k) {
    return n.call(this, Xn(e, y), k, e);
  } : n.length > 2 && (h = function(y, k) {
    return n.call(this, y, k, e);
  }));
  const p = d.call(o, h, i);
  return u && a ? a(p) : p;
}
function sf(e, t, n, i) {
  const a = Ml(e), r = a !== e && !/* @__PURE__ */ Tn(e);
  let o = n, u = !1;
  a !== e && (r ? (u = i.length === 0, o = function(h, p, y) {
    return u && (u = !1, h = Xn(e, h)), n.call(this, h, Xn(e, p), y, e);
  }) : n.length > 3 && (o = function(h, p, y) {
    return n.call(this, h, p, y, e);
  }));
  const d = a[t](o, ...i);
  return u ? Xn(e, d) : d;
}
function Cc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Vt(i, "iterate", bo);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Gu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function Dr(e, t, n = []) {
  wi(), ju();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Bu(), Si(), i;
}
const Hb = /* @__PURE__ */ Mu("__proto__,__v_isRef,__isVue"), uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fn)
);
function Vb(e) {
  Fn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Vt(t, "has", e), t.hasOwnProperty(e);
}
class dh {
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
      return i === (a ? r ? em : vh : r ? hh : ph).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Oe(t);
    if (!a) {
      let d;
      if (o && (d = jb[n]))
        return d;
      if (n === "hasOwnProperty")
        return Vb;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : i
    );
    if ((Fn(n) ? uh.has(n) : Hb(n)) || (a || Vt(t, "get", n), r))
      return u;
    if (/* @__PURE__ */ Wt(u)) {
      const d = o && Uu(n) ? u : u.value;
      return a && Qe(d) ? /* @__PURE__ */ mo(d) : d;
    }
    return Qe(u) ? a ? /* @__PURE__ */ mo(u) : /* @__PURE__ */ Lt(u) : u;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Oe(t) && Uu(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ Ci(r);
      if (!/* @__PURE__ */ Tn(i) && !/* @__PURE__ */ Ci(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(i))
        return h || (r.value = i), !0;
    }
    const u = o ? Number(n) < t.length : Je(t, n), d = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && d && (u ? Rt(i, r) && hi(t, "set", n, i) : hi(t, "add", n, i)), d;
  }
  deleteProperty(t, n) {
    const i = Je(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && hi(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Fn(n) || !uh.has(n)) && Vt(t, "has", n), i;
  }
  ownKeys(t) {
    return Vt(
      t,
      "iterate",
      Oe(t) ? "length" : Pa
    ), Reflect.ownKeys(t);
  }
}
class Kb extends dh {
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
const Gb = /* @__PURE__ */ new fh(), qb = /* @__PURE__ */ new Kb(), Wb = /* @__PURE__ */ new fh(!0);
const lu = (e) => e, fs = (e) => Reflect.getPrototypeOf(e);
function Yb(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = qi(r), u = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, h = a[e](...i), p = n ? lu : t ? dr : Dn;
    return !t && Vt(
      r,
      "iterate",
      d ? su : Pa
    ), yt(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: y, done: k } = h.next();
          return k ? { value: y, done: k } : {
            value: u ? [p(y[0]), p(y[1])] : p(y),
            done: k
          };
        }
      }
    );
  };
}
function ps(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xb(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), u = /* @__PURE__ */ Ye(a);
      e || (Rt(a, u) && Vt(o, "get", a), Vt(o, "get", u));
      const { has: d } = fs(o), h = t ? lu : e ? dr : Dn;
      if (d.call(o, a))
        return h(r.get(a));
      if (d.call(o, u))
        return h(r.get(u));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Vt(/* @__PURE__ */ Ye(a), "iterate", Pa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), u = /* @__PURE__ */ Ye(a);
      return e || (Rt(a, u) && Vt(o, "has", a), Vt(o, "has", u)), a === u ? r.has(a) : r.has(a) || r.has(u);
    },
    forEach(a, r) {
      const o = this, u = o.__v_raw, d = /* @__PURE__ */ Ye(u), h = t ? lu : e ? dr : Dn;
      return !e && Vt(d, "iterate", Pa), u.forEach((p, y) => a.call(r, h(p), h(y), o));
    }
  };
  return yt(
    n,
    e ? {
      add: ps("add"),
      set: ps("set"),
      delete: ps("delete"),
      clear: ps("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = fs(r), u = /* @__PURE__ */ Ye(a), d = !t && !/* @__PURE__ */ Tn(a) && !/* @__PURE__ */ Ci(a) ? u : a;
        return o.has.call(r, d) || Rt(a, d) && o.has.call(r, a) || Rt(u, d) && o.has.call(r, u) || (r.add(d), hi(r, "add", d, d)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Tn(r) && !/* @__PURE__ */ Ci(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: u, get: d } = fs(o);
        let h = u.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = u.call(o, a));
        const p = d.call(o, a);
        return o.set(a, r), h ? Rt(r, p) && hi(o, "set", a, r) : hi(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: u } = fs(r);
        let d = o.call(r, a);
        d || (a = /* @__PURE__ */ Ye(a), d = o.call(r, a)), u && u.call(r, a);
        const h = r.delete(a);
        return d && hi(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && hi(
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
    n[a] = Yb(a, e, t);
  }), n;
}
function Vu(e, t) {
  const n = Xb(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Je(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Zb = {
  get: /* @__PURE__ */ Vu(!1, !1)
}, Jb = {
  get: /* @__PURE__ */ Vu(!1, !0)
}, Qb = {
  get: /* @__PURE__ */ Vu(!0, !1)
};
const ph = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), em = /* @__PURE__ */ new WeakMap();
function tm(e) {
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
function Lt(e) {
  return /* @__PURE__ */ Ci(e) ? e : Ku(
    e,
    !1,
    Gb,
    Zb,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function nm(e) {
  return Ku(
    e,
    !1,
    Wb,
    Jb,
    hh
  );
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return Ku(
    e,
    !0,
    qb,
    Qb,
    vh
  );
}
function Ku(e, t, n, i, a) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = tm(kb(e));
  if (o === 0)
    return e;
  const u = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return /* @__PURE__ */ Ci(e) ? /* @__PURE__ */ $a(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ci(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function im(e) {
  return !Je(e, "__v_skip") && Object.isExtensible(e) && Jp(e, "__v_skip", !0), e;
}
const Dn = (e) => Qe(e) ? /* @__PURE__ */ Lt(e) : e, dr = (e) => Qe(e) ? /* @__PURE__ */ mo(e) : e;
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return bh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function gh(e) {
  return bh(e, !0);
}
function bh(e, t) {
  return /* @__PURE__ */ Wt(e) ? e : new am(e, t);
}
class am {
  constructor(t, n) {
    this.dep = new Dl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : Dn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Tn(t) || /* @__PURE__ */ Ci(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Rt(t, n) && (this._rawValue = t, this._value = i ? t : Dn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function mi(e) {
  return De(e) ? e() : g(e);
}
const rm = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function mh(e) {
  return /* @__PURE__ */ $a(e) ? e : new Proxy(e, rm);
}
class om {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Dl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function sm(e) {
  return new om(e);
}
class lm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Dl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = go - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return ah(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cm(e, t, n = !1) {
  let i, a;
  return De(e) ? i = e : (i = e.get, a = e.set), new lm(i, a, n);
}
const hs = {}, Rs = /* @__PURE__ */ new WeakMap();
let Ta;
function um(e, t = !1, n = Ta) {
  if (n) {
    let i = Rs.get(n);
    i || Rs.set(n, i = []), i.push(e);
  }
}
function dm(e, t, n = qe) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: u, call: d } = n, h = (C) => a ? C : /* @__PURE__ */ Tn(C) || a === !1 || a === 0 ? vi(C, 1) : vi(C);
  let p, y, k, E, L = !1, A = !1;
  if (/* @__PURE__ */ Wt(e) ? (y = () => e.value, L = /* @__PURE__ */ Tn(e)) : /* @__PURE__ */ $a(e) ? (y = () => h(e), L = !0) : Oe(e) ? (A = !0, L = e.some((C) => /* @__PURE__ */ $a(C) || /* @__PURE__ */ Tn(C)), y = () => e.map((C) => {
    if (/* @__PURE__ */ Wt(C))
      return C.value;
    if (/* @__PURE__ */ $a(C))
      return h(C);
    if (De(C))
      return d ? d(C, 2) : C();
  })) : De(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (k) {
      wi();
      try {
        k();
      } finally {
        Si();
      }
    }
    const C = Ta;
    Ta = p;
    try {
      return d ? d(e, 3, [E]) : e(E);
    } finally {
      Ta = C;
    }
  } : y = kn, t && a) {
    const C = y, re = a === !0 ? 1 / 0 : a;
    y = () => vi(C(), re);
  }
  const N = Mb(), D = () => {
    p.stop(), N && N.active && zu(N.effects, p);
  };
  if (r && t) {
    const C = t;
    t = (...re) => {
      const de = C(...re);
      return D(), de;
    };
  }
  let M = A ? new Array(e.length).fill(hs) : hs;
  const z = (C) => {
    if (!(!(p.flags & 1) || !p.dirty && !C))
      if (t) {
        const re = p.run();
        if (C || a || L || (A ? re.some((de, Z) => Rt(de, M[Z])) : Rt(re, M))) {
          k && k();
          const de = Ta;
          Ta = p;
          try {
            const Z = [
              re,
              // pass undefined as the old value when it's changed for the first time
              M === hs ? void 0 : A && M[0] === hs ? [] : M,
              E
            ];
            M = re, d ? d(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Ta = de;
          }
        }
      } else
        p.run();
  };
  return u && u(z), p = new nh(y), p.scheduler = o ? () => o(z, !1) : z, E = (C) => um(C, !1, p), k = p.onStop = () => {
    const C = Rs.get(p);
    if (C) {
      if (d)
        d(C, 4);
      else
        for (const re of C) re();
      Rs.delete(p);
    }
  }, t ? i ? z(!0) : M = p.run() : o ? o(z.bind(null, !0), !0) : p.run(), D.pause = p.pause.bind(p), D.resume = p.resume.bind(p), D.stop = D, D;
}
function vi(e, t = 1 / 0, n) {
  if (t <= 0 || !Qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Wt(e))
    vi(e.value, t, n);
  else if (Oe(e))
    for (let i = 0; i < e.length; i++)
      vi(e[i], t, n);
  else if (Da(e) || qi(e))
    e.forEach((i) => {
      vi(i, t, n);
    });
  else if (Zp(e)) {
    for (const i in e)
      vi(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && vi(e[i], t, n);
  }
  return e;
}
function $o(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    zl(a, t, n);
  }
}
function En(e, t, n, i) {
  if (De(e)) {
    const a = $o(e, t, n, i);
    return a && Yp(a) && a.catch((r) => {
      zl(r, t, n);
    }), a;
  }
  if (Oe(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(En(e[r], t, n, i));
    return a;
  }
}
function zl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let u = t.parent;
    const d = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const p = u.ec;
      if (p) {
        for (let y = 0; y < p.length; y++)
          if (p[y](e, d, h) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      wi(), $o(r, null, 10, [
        e,
        d,
        h
      ]), Si();
      return;
    }
  }
  fm(e, n, a, i, o);
}
function fm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const tn = [];
let qn = -1;
const ar = [];
let Ki = null, er = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let Is = null;
function en(e) {
  const t = Is || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pm(e) {
  let t = qn + 1, n = tn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = tn[i], r = yo(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function qu(e) {
  if (!(e.flags & 1)) {
    const t = yo(e), n = tn[tn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yo(n) ? tn.push(e) : tn.splice(pm(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  Is || (Is = yh.then(Ch));
}
function wh(e) {
  if (!Oe(e))
    Ki && e.id === -1 ? Ki.splice(er + 1, 0, e) : e.flags & 1 || (ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      ar.push(e[t]);
  _h();
}
function lf(e, t, n = qn + 1) {
  for (; n < tn.length; n++) {
    const i = tn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      tn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Sh(e) {
  if (ar.length) {
    const t = [...new Set(ar)].sort(
      (n, i) => yo(n) - yo(i)
    );
    if (ar.length = 0, Ki) {
      for (let n = 0; n < t.length; n++)
        Ki.push(t[n]);
      return;
    }
    for (Ki = t, er = 0; er < Ki.length; er++) {
      const n = Ki[er];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ki = null, er = 0;
  }
}
const yo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for (qn = 0; qn < tn.length; qn++) {
      const t = tn[qn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $o(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qn < tn.length; qn++) {
      const t = tn[qn];
      t && (t.flags &= -2);
    }
    qn = -1, tn.length = 0, Sh(), Is = null, (tn.length || ar.length) && Ch();
  }
}
let Pt = null, Ul = null;
function Ps(e) {
  const t = Pt;
  return Pt = e, Ul = e && e.type.__scopeId || null, t;
}
function hm(e) {
  Ul = e;
}
function vm() {
  Ul = null;
}
const gm = (e) => Pe;
function Pe(e, t = Pt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && zs(-1);
    const r = Ps(t), o = yi.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let d = yi.length; d > o; d--) ed();
      Ps(r), i._d && zs(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ie(e, t) {
  if (Pt === null)
    return e;
  const n = Gl(Pt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, u, d = qe] = t[a];
    r && (De(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && vi(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function ya(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    r && (u.oldValue = r[o].value);
    let d = u.dir[i];
    d && (wi(), En(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Si());
  }
}
function wn(e, t) {
  if (Gt) {
    let n = Gt.provides;
    const i = Gt.parent && Gt.parent.provides;
    i === n && (n = Gt.provides = Object.create(i)), n[e] = t;
  }
}
function Kt(e, t, n = !1) {
  const i = za();
  if (i || or) {
    let a = or ? or._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && De(t) ? t.call(i && i.proxy) : t;
  }
}
const bm = /* @__PURE__ */ Symbol.for("v-scx"), mm = () => Kt(bm);
function ym(e, t) {
  return jl(e, null, t);
}
function _m(e, t) {
  return jl(
    e,
    null,
    { flush: "sync" }
  );
}
function We(e, t, n) {
  return jl(e, t, n);
}
function jl(e, t, n = qe) {
  const { immediate: i, deep: a, flush: r, once: o } = n, u = yt({}, n), d = t && i || !t && r !== "post";
  let h;
  if (To) {
    if (r === "sync") {
      const E = mm();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!d) {
      const E = () => {
      };
      return E.stop = kn, E.resume = kn, E.pause = kn, E;
    }
  }
  const p = Gt;
  u.call = (E, L, A) => En(E, p, L, A);
  let y = !1;
  r === "post" ? u.scheduler = (E) => {
    Qt(E, p && p.suspense);
  } : r !== "sync" && (y = !0, u.scheduler = (E, L) => {
    L ? E() : qu(E);
  }), u.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, p && (E.id = p.uid, E.i = p));
  };
  const k = dm(e, t, u);
  return To && (h ? h.push(k) : d && k()), k;
}
function wm(e, t, n) {
  const i = this.proxy, a = st(e) ? e.includes(".") ? kh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  De(t) ? r = t : (r = t.handler, n = t);
  const o = Mo(this), u = jl(a, r.bind(i), n);
  return o(), u;
}
function kh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Bi = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ Symbol("_vte"), Bl = (e) => e.__isTeleport, Aa = (e) => e && (e.disabled || e.disabled === ""), Sm = (e) => e && (e.defer || e.defer === ""), cf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, uf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cu = (e, t) => {
  const n = e && e.to;
  return st(n) ? t ? t(n) : null : n;
}, Cm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, u, d, h) {
    const {
      mc: p,
      pc: y,
      pbc: k,
      o: { insert: E, querySelector: L, createText: A, createComment: N, parentNode: D }
    } = h, M = Aa(t.props);
    let { dynamicChildren: z } = t;
    const C = (Z, pe, X) => {
      Z.shapeFlag & 16 && p(
        Z.children,
        pe,
        X,
        a,
        r,
        o,
        u,
        d
      );
    }, re = (Z = t) => {
      const pe = Aa(Z.props), X = Z.target = cu(Z.props, L), se = uu(X, Z, A, E);
      X && (o !== "svg" && cf(X) ? o = "svg" : o !== "mathml" && uf(X) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), pe || (C(Z, X, se), qr(Z, !1)));
    }, de = (Z) => {
      const pe = () => {
        if (Bi.get(Z) === pe) {
          if (Bi.delete(Z), Aa(Z.props)) {
            const X = D(Z.el) || n;
            C(Z, X, Z.anchor), qr(Z, !0);
          }
          re(Z);
        }
      };
      Bi.set(Z, pe), Qt(pe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), pe = t.anchor = A("");
      if (E(Z, n, i), E(pe, n, i), Sm(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      M && (C(t, n, pe), qr(t, !0)), re();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, pe = Bi.get(e);
      if (pe) {
        pe.flags |= 8, Bi.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, se = t.targetAnchor = e.targetAnchor, _e = Aa(e.props), ee = _e ? n : X, J = _e ? Z : se;
      if (o === "svg" || cf(X) ? o = "svg" : (o === "mathml" || uf(X)) && (o = "mathml"), z ? (k(
        e.dynamicChildren,
        z,
        ee,
        a,
        r,
        o,
        u
      ), Qu(e, t, !0)) : d || y(
        e,
        t,
        ee,
        J,
        a,
        r,
        o,
        u,
        !1
      ), M)
        _e ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vs(
          t,
          n,
          Z,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = cu(t.props, L);
        F && (t.target = F, vs(
          t,
          F,
          null,
          h,
          0
        ));
      } else _e && vs(
        t,
        X,
        se,
        h,
        1
      );
      qr(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: u,
      anchor: d,
      targetStart: h,
      targetAnchor: p,
      target: y,
      props: k
    } = e, E = Aa(k), L = r || !E, A = Bi.get(e);
    if (A && (A.flags |= 8, Bi.delete(e)), y && (a(h), a(p)), r && a(d), !A && (E || y) && o & 16)
      for (let N = 0; N < u.length; N++) {
        const D = u[N];
        i(
          D,
          t,
          n,
          L,
          !!D.dynamicChildren
        );
      }
  },
  move: vs,
  hydrate: km
};
function vs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: u, shapeFlag: d, children: h, props: p } = e, y = r === 2;
  if (y && i(o, t, n), !Bi.has(e) && (!y || Aa(p)) && d & 16)
    for (let k = 0; k < h.length; k++)
      a(
        h[k],
        t,
        n,
        2
      );
  y && i(u, t, n);
}
function km(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: u, querySelector: d, insert: h, createText: p }
}, y) {
  function k(N, D) {
    let M = D;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, N._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      M = o(M);
    }
  }
  function E(N, D) {
    D.anchor = y(
      o(N),
      D,
      u(N),
      n,
      i,
      a,
      r
    );
  }
  const L = t.target = cu(
    t.props,
    d
  ), A = Aa(t.props);
  if (L) {
    const N = L._lpa || L.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), k(L, N), t.targetAnchor || uu(
      L,
      t,
      p,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      u(e) === L ? e : null
    )) : (t.anchor = o(e), k(L, N), t.targetAnchor || uu(L, t, p, h), y(
      N && o(N),
      t,
      L,
      n,
      i,
      a,
      r
    ))), qr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Eh = Cm;
function qr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function uu(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[Th] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const Sn = /* @__PURE__ */ Symbol("_leaveCb"), Mr = /* @__PURE__ */ Symbol("_enterCb");
function Tm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ea(() => {
    e.isMounted = !0;
  }), fr(() => {
    e.isUnmounting = !0;
  }), e;
}
const mn = [Function, Array], Ah = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: mn,
  onEnter: mn,
  onAfterEnter: mn,
  onEnterCancelled: mn,
  // leave
  onBeforeLeave: mn,
  onLeave: mn,
  onAfterLeave: mn,
  onLeaveCancelled: mn,
  // appear
  onBeforeAppear: mn,
  onAppear: mn,
  onAfterAppear: mn,
  onAppearCancelled: mn
}, Oh = (e) => {
  const t = e.subTree;
  return t.component ? Oh(t.component) : t;
}, Em = {
  name: "BaseTransition",
  props: Ah,
  setup(e, { slots: t }) {
    const n = za(), i = Tm();
    return () => {
      const a = t.default && Lh(t.default(), !0), r = a && a.length ? xh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? $() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: u } = o;
      if (i.isLeaving)
        return kc(r);
      const d = $s(r);
      if (!d)
        return kc(r);
      let h = du(
        d,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (y) => h = y
      );
      d.type !== It && _o(d, h);
      let p = n.subTree && $s(n.subTree);
      if (p && p.type !== It && !Oa(p, d) && Oh(n).type !== It) {
        let y = du(
          p,
          o,
          i,
          n
        );
        if (_o(p, y), u === "out-in" && d.type !== It)
          return i.isLeaving = !0, y.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete y.afterLeave, p = void 0;
          }, kc(r);
        u === "in-out" && d.type !== It ? y.delayLeave = (k, E, L) => {
          const A = Nh(
            i,
            p
          );
          A[String(p.key)] = p, k[Sn] = () => {
            E(), k[Sn] = void 0, delete h.delayedLeave, p = void 0;
          }, h.delayedLeave = () => {
            L(), delete h.delayedLeave, p = void 0;
          };
        } : p = void 0;
      } else p && (p = void 0);
      return r;
    };
  }
};
function xh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== It) {
        t = n;
        break;
      }
  }
  return t;
}
const Am = Em;
function Nh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function du(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: h,
    onAfterEnter: p,
    onEnterCancelled: y,
    onBeforeLeave: k,
    onLeave: E,
    onAfterLeave: L,
    onLeaveCancelled: A,
    onBeforeAppear: N,
    onAppear: D,
    onAfterAppear: M,
    onAppearCancelled: z
  } = t, C = String(e.key), re = Nh(n, e), de = (X, se) => {
    X && En(
      X,
      i,
      9,
      se
    );
  }, Z = (X, se) => {
    const _e = se[1];
    de(X, se), Oe(X) ? X.every((ee) => ee.length <= 1) && _e() : X.length <= 1 && _e();
  }, pe = {
    mode: o,
    persisted: u,
    beforeEnter(X) {
      let se = d;
      if (!n.isMounted)
        if (r)
          se = N || d;
        else
          return;
      X[Sn] && X[Sn](
        !0
        /* cancelled */
      );
      const _e = re[C];
      _e && Oa(e, _e) && _e.el[Sn] && _e.el[Sn](), de(se, [X]);
    },
    enter(X) {
      if (re[C] === e) return;
      let se = h, _e = p, ee = y;
      if (!n.isMounted)
        if (r)
          se = D || h, _e = M || p, ee = z || y;
        else
          return;
      let J = !1;
      X[Mr] = (U) => {
        J || (J = !0, U ? de(ee, [X]) : de(_e, [X]), pe.delayedLeave && pe.delayedLeave(), X[Mr] = void 0);
      };
      const F = X[Mr].bind(null, !1);
      se ? Z(se, [X, F]) : F();
    },
    leave(X, se) {
      const _e = String(e.key);
      if (X[Mr] && X[Mr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      de(k, [X]);
      let ee = !1;
      X[Sn] = (F) => {
        ee || (ee = !0, se(), F ? de(A, [X]) : de(L, [X]), X[Sn] = void 0, re[_e] === e && delete re[_e]);
      };
      const J = X[Sn].bind(null, !1);
      re[_e] = e, E ? Z(E, [X, J]) : J();
    },
    clone(X) {
      const se = du(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return pe;
}
function kc(e) {
  if (Hl(e))
    return e = Ji(e), e.children = null, e;
}
function $s(e) {
  if (!Hl(e))
    return Bl(e.type) && e.children ? xh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && De(n.default))
      return n.default();
  }
}
function _o(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    _o(
      Bl(n.type) && $s(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const u = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ne ? (o.patchFlag & 128 && a++, i = i.concat(
      Lh(o.children, t, u)
    )) : (t || o.type !== It) && i.push(u != null ? Ji(o, { key: u }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function $t(e, t) {
  return De(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Om(e) {
  const t = za(), n = /* @__PURE__ */ gh(null);
  if (t) {
    const a = t.refs === qe ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function df(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function no(e, t, n, i, a = !1) {
  if (Oe(e)) {
    e.forEach(
      (A, N) => no(
        A,
        t && (Oe(t) ? t[N] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (rr(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && no(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Gl(i.component) : i.el, o = a ? null : r, { i: u, r: d } = e, h = t && t.r, p = u.refs === qe ? u.refs = {} : u.refs, y = u.setupState, k = /* @__PURE__ */ Ye(y), E = y === qe ? Wp : (A) => df(p, A) ? !1 : Je(k, A), L = (A, N) => !(N && df(p, N));
  if (h != null && h !== d) {
    if (ff(t), st(h))
      p[h] = null, E(h) && (y[h] = null);
    else if (/* @__PURE__ */ Wt(h)) {
      const A = t;
      L(h, A.k) && (h.value = null), A.k && (p[A.k] = null);
    }
  }
  if (De(d))
    $o(d, u, 12, [o, p]);
  else {
    const A = st(d), N = /* @__PURE__ */ Wt(d);
    if (A || N) {
      const D = () => {
        if (e.f) {
          const M = A ? E(d) ? y[d] : p[d] : L() || !e.k ? d.value : p[e.k];
          if (a)
            Oe(M) && zu(M, r);
          else if (Oe(M))
            M.includes(r) || M.push(r);
          else if (A)
            p[d] = [r], E(d) && (y[d] = p[d]);
          else {
            const z = [r];
            L(d, e.k) && (d.value = z), e.k && (p[e.k] = z);
          }
        } else A ? (p[d] = o, E(d) && (y[d] = o)) : N && (L(d, e.k) && (d.value = o), e.k && (p[e.k] = o));
      };
      if (o) {
        const M = () => {
          D(), Fs.delete(e);
        };
        M.id = -1, Fs.set(e, M), Qt(M, n);
      } else
        ff(e), D();
    }
  }
}
function ff(e) {
  const t = Fs.get(e);
  t && (t.flags |= 8, Fs.delete(e));
}
Fl().requestIdleCallback;
Fl().cancelIdleCallback;
const rr = (e) => !!e.type.__asyncLoader, Hl = (e) => e.type.__isKeepAlive;
function xm(e, t) {
  Ih(e, "a", t);
}
function Nm(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, n = Gt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Vl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Hl(a.parent.vnode) && Lm(i, t, n, a), a = a.parent;
  }
}
function Lm(e, t, n, i) {
  const a = Vl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Fo(() => {
    zu(i[t], a);
  }, n);
}
function Vl(e, t, n = Gt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      wi();
      const u = Mo(n), d = En(t, n, e, o);
      return u(), Si(), d;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const Ei = (e) => (t, n = Gt) => {
  (!To || e === "sp") && Vl(e, (...i) => t(...i), n);
}, Ph = Ei("bm"), ea = Ei("m"), $h = Ei(
  "bu"
), Rm = Ei("u"), fr = Ei(
  "bum"
), Fo = Ei("um"), Im = Ei(
  "sp"
), Pm = Ei("rtg"), $m = Ei("rtc");
function Fm(e, t = Gt) {
  Vl("ec", e, t);
}
const Wu = "components", Dm = "directives";
function Be(e, t) {
  return Xu(Wu, e, !0, t) || e;
}
const Fh = /* @__PURE__ */ Symbol.for("v-ndc");
function Yu(e) {
  return st(e) ? Xu(Wu, e, !1) || e : e || Fh;
}
function pf(e) {
  return Xu(Dm, e);
}
function Xu(e, t, n = !0, i = !1) {
  const a = Pt || Gt;
  if (a) {
    const r = a.type;
    if (e === Wu) {
      const u = yy(
        r,
        !1
      );
      if (u && (u === t || u === qt(t) || u === Pl(qt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      hf(a[e] || r[e], t) || // global registration
      hf(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function hf(e, t) {
  return e && (e[t] || e[qt(t)] || e[Pl(qt(t))]);
}
function ke(e, t, n, i) {
  let a;
  const r = n, o = Oe(e);
  if (o || st(e)) {
    const u = o && /* @__PURE__ */ $a(e);
    let d = !1, h = !1;
    u && (d = !/* @__PURE__ */ Tn(e), h = /* @__PURE__ */ Ci(e), e = Ml(e)), a = new Array(e.length);
    for (let p = 0, y = e.length; p < y; p++)
      a[p] = t(
        d ? h ? dr(Dn(e[p])) : Dn(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let u = 0; u < e; u++)
      a[u] = t(u + 1, u, void 0, r);
  } else if (Qe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      a = new Array(u.length);
      for (let d = 0, h = u.length; d < h; d++) {
        const p = u[d];
        a[d] = t(e[p], p, d, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, n, i, a, r) {
  if (n == null && (n = {}), Pt.ce || Pt.parent && rr(Pt.parent) && Pt.parent.ce) {
    const h = n, p = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), m(), je(
      ne,
      null,
      [Ae("slot", h, i && i())],
      p ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const u = yi.length;
  m();
  let d;
  try {
    const h = o && Dh(o(n)), p = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    d = je(
      ne,
      {
        key: (p && !Fn(p) ? p : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let p = yi.length; p > u; p--) ed();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Dh(e) {
  return e.some((t) => So(t) ? !(t.type === It || t.type === ne && !Dh(t.children)) : !0) ? e : null;
}
const fu = (e) => e ? rv(e) ? Gl(e) : fu(e.parent) : null, io = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fu(e.parent),
    $root: (e) => fu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Uh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = en.bind(e.proxy)),
    $watch: (e) => wm.bind(e)
  })
), Tc = (e, t) => e !== qe && !e.__isScriptSetup && Je(e, t), Mm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const k = o[t];
      if (k !== void 0)
        switch (k) {
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
        if (Tc(i, t))
          return o[t] = 1, i[t];
        if (a !== qe && Je(a, t))
          return o[t] = 2, a[t];
        if (Je(r, t))
          return o[t] = 3, r[t];
        if (n !== qe && Je(n, t))
          return o[t] = 4, n[t];
        pu && (o[t] = 0);
      }
    }
    const h = io[t];
    let p, y;
    if (h)
      return t === "$attrs" && Vt(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (p = u.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== qe && Je(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = d.config.globalProperties, Je(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Tc(a, t) ? (a[t] = n, !0) : i !== qe && Je(i, t) ? (i[t] = n, !0) : Je(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, u) {
    let d;
    return !!(n[u] || e !== qe && u[0] !== "$" && Je(e, u) || Tc(t, u) || Je(r, u) || Je(i, u) || Je(io, u) || Je(a.config.globalProperties, u) || (d = o.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Je(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zm() {
  return Mh().slots;
}
function Um() {
  return Mh().attrs;
}
function Mh(e) {
  const t = za();
  return t.setupContext || (t.setupContext = sv(t));
}
function Ds(e) {
  return Oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function jm(e, t) {
  return !e || !t ? e || t : Oe(e) && Oe(t) ? e.concat(t) : yt({}, Ds(e), Ds(t));
}
let pu = !0;
function Bm(e) {
  const t = Uh(e), n = e.proxy, i = e.ctx;
  pu = !1, t.beforeCreate && vf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: u,
    provide: d,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: y,
    mounted: k,
    beforeUpdate: E,
    updated: L,
    activated: A,
    deactivated: N,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: z,
    unmounted: C,
    render: re,
    renderTracked: de,
    renderTriggered: Z,
    errorCaptured: pe,
    serverPrefetch: X,
    // public API
    expose: se,
    inheritAttrs: _e,
    // assets
    components: ee,
    directives: J,
    filters: F
  } = t;
  if (h && Hm(h, i, null), o)
    for (const le in o) {
      const ae = o[le];
      De(ae) && (i[le] = ae.bind(n));
    }
  if (a) {
    const le = a.call(n, n);
    Qe(le) && (e.data = /* @__PURE__ */ Lt(le));
  }
  if (pu = !0, r)
    for (const le in r) {
      const ae = r[le], me = De(ae) ? ae.bind(n, n) : De(ae.get) ? ae.get.bind(n, n) : kn, fe = !De(ae) && De(ae.set) ? ae.set.bind(n) : kn, Se = B({
        get: me,
        set: fe
      });
      Object.defineProperty(i, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Te) => Se.value = Te
      });
    }
  if (u)
    for (const le in u)
      zh(u[le], i, n, le);
  if (d) {
    const le = De(d) ? d.call(n) : d;
    Reflect.ownKeys(le).forEach((ae) => {
      wn(ae, le[ae]);
    });
  }
  p && vf(p, e, "c");
  function Y(le, ae) {
    Oe(ae) ? ae.forEach((me) => le(me.bind(n))) : ae && le(ae.bind(n));
  }
  if (Y(Ph, y), Y(ea, k), Y($h, E), Y(Rm, L), Y(xm, A), Y(Nm, N), Y(Fm, pe), Y($m, de), Y(Pm, Z), Y(fr, M), Y(Fo, C), Y(Im, X), Oe(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ae) => {
        Object.defineProperty(le, ae, {
          get: () => n[ae],
          set: (me) => n[ae] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === kn && (e.render = re), _e != null && (e.inheritAttrs = _e), ee && (e.components = ee), J && (e.directives = J), X && Rh(e);
}
function Hm(e, t, n = kn) {
  Oe(e) && (e = hu(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Qe(a) ? "default" in a ? r = Kt(
      a.from || i,
      a.default,
      !0
    ) : r = Kt(a.from || i) : r = Kt(a), /* @__PURE__ */ Wt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function vf(e, t, n) {
  En(
    Oe(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zh(e, t, n, i) {
  let a = i.includes(".") ? kh(n, i) : () => n[i];
  if (st(e)) {
    const r = t[e];
    De(r) && We(a, r);
  } else if (De(e))
    We(a, e.bind(n));
  else if (Qe(e))
    if (Oe(e))
      e.forEach((r) => zh(r, t, n, i));
    else {
      const r = De(e.handler) ? e.handler.bind(n) : t[e.handler];
      De(r) && We(a, r, e);
    }
}
function Uh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !a.length && !n && !i ? d = t : (d = {}, a.length && a.forEach(
    (h) => Ms(d, h, o, !0)
  ), Ms(d, t, o)), Qe(t) && r.set(t, d), d;
}
function Ms(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ms(e, r, n, !0), a && a.forEach(
    (o) => Ms(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const u = Vm[o] || n && n[o];
      e[o] = u ? u(e[o], t[o]) : t[o];
    }
  return e;
}
const Vm = {
  data: gf,
  props: bf,
  emits: bf,
  // objects
  methods: Wr,
  computed: Wr,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: Wr,
  directives: Wr,
  // watch
  watch: Gm,
  // provide / inject
  provide: gf,
  inject: Km
};
function gf(e, t) {
  return t ? e ? function() {
    return yt(
      De(e) ? e.call(this, this) : e,
      De(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Km(e, t) {
  return Wr(hu(e), hu(t));
}
function hu(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bf(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Ds(e),
    Ds(t ?? {})
  ) : t;
}
function Gm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Jt(e[i], t[i]);
  return n;
}
function jh() {
  return {
    app: null,
    config: {
      isNativeTag: Wp,
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
let qm = 0;
function Wm(e, t) {
  return function(i, a = null) {
    De(i) || (i = yt({}, i)), a != null && !Qe(a) && (a = null);
    const r = jh(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const h = r.app = {
      _uid: qm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: wy,
      get config() {
        return r.config;
      },
      set config(p) {
      },
      use(p, ...y) {
        return o.has(p) || (p && De(p.install) ? (o.add(p), p.install(h, ...y)) : De(p) && (o.add(p), p(h, ...y))), h;
      },
      mixin(p) {
        return r.mixins.includes(p) || r.mixins.push(p), h;
      },
      component(p, y) {
        return y ? (r.components[p] = y, h) : r.components[p];
      },
      directive(p, y) {
        return y ? (r.directives[p] = y, h) : r.directives[p];
      },
      mount(p, y, k) {
        if (!d) {
          const E = h._ceVNode || Ae(i, a);
          return E.appContext = r, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(E, p, k), d = !0, h._container = p, p.__vue_app__ = h, Gl(E.component);
        }
      },
      onUnmount(p) {
        u.push(p);
      },
      unmount() {
        d && (En(
          u,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(p, y) {
        return r.provides[p] = y, h;
      },
      runWithContext(p) {
        const y = or;
        or = h;
        try {
          return p();
        } finally {
          or = y;
        }
      }
    };
    return h;
  };
}
let or = null;
function Bh(e, t, n = qe) {
  const i = za(), a = qt(t), r = Ti(t), o = Hh(e, a), u = sm((d, h) => {
    let p, y = qe, k;
    return _m(() => {
      const E = e[a];
      Rt(p, E) && (p = E, h());
    }), {
      get() {
        return d(), n.get ? n.get(p) : p;
      },
      set(E) {
        const L = n.set ? n.set(E) : E;
        if (!Rt(L, p) && !(y !== qe && Rt(E, y)))
          return;
        const A = i.vnode.props, N = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        N || (p = E, h()), i.emit(`update:${t}`, L), Rt(E, y) && (Rt(E, L) && !Rt(L, k) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && y !== qe && !Rt(L, p)) && h(), y = E, k = L;
      }
    };
  });
  return u[Symbol.iterator] = () => {
    let d = 0;
    return {
      next() {
        return d < 2 ? { value: d++ ? o || qe : u, done: !1 } : { done: !0 };
      }
    };
  }, u;
}
const Hh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${Ti(t)}Modifiers`];
function Ym(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || qe;
  let a = n;
  const r = t.startsWith("update:"), o = r && Hh(i, t.slice(7));
  o && (o.trim && (a = n.map((p) => st(p) ? p.trim() : p)), o.number && (a = a.map($l)));
  let u, d = i[u = yc(t)] || // also try camelCase event handler (#2249)
  i[u = yc(qt(t))];
  !d && r && (d = i[u = yc(Ti(t))]), d && En(
    d,
    e,
    6,
    a
  );
  const h = i[u + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, En(
      h,
      e,
      6,
      a
    );
  }
}
const Xm = /* @__PURE__ */ new WeakMap();
function Vh(e, t, n = !1) {
  const i = n ? Xm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, u = !1;
  if (!De(e)) {
    const d = (h) => {
      const p = Vh(h, t, !0);
      p && (u = !0, yt(o, p));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (Qe(e) && i.set(e, null), null) : (Oe(r) ? r.forEach((d) => o[d] = null) : yt(o, r), Qe(e) && i.set(e, o), o);
}
function Kl(e, t) {
  return !e || !Ll(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Je(e, t[0].toLowerCase() + t.slice(1)) || Je(e, Ti(t)) || Je(e, t));
}
function mf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: u,
    emit: d,
    render: h,
    renderCache: p,
    props: y,
    data: k,
    setupState: E,
    ctx: L,
    inheritAttrs: A
  } = e, N = Ps(e);
  let D, M;
  try {
    if (n.shapeFlag & 4) {
      const C = a || i, re = C;
      D = Zn(
        h.call(
          re,
          C,
          p,
          y,
          E,
          k,
          L
        )
      ), M = u;
    } else {
      const C = t;
      D = Zn(
        C.length > 1 ? C(
          y,
          { attrs: u, slots: o, emit: d }
        ) : C(
          y,
          null
        )
      ), M = t.props ? u : Zm(u);
    }
  } catch (C) {
    yi.length = 0, zl(C, e, 1), D = Ae(It);
  }
  let z = D;
  if (M && A !== !1) {
    const C = Object.keys(M), { shapeFlag: re } = z;
    C.length && re & 7 && (r && C.some(Rl) && (M = Jm(
      M,
      r
    )), z = Ji(z, M, !1, !0));
  }
  if (n.dirs && (z = Ji(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const C = Bl(z.type) && $s(z) || z;
    _o(C, n.transition);
  }
  return D = z, Ps(N), D;
}
const Zm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ll(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Jm = (e, t) => {
  const n = {};
  for (const i in e)
    (!Rl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Qm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: u, patchFlag: d } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return i ? yf(i, o, h) : !!o;
    if (d & 8) {
      const p = t.dynamicProps;
      for (let y = 0; y < p.length; y++) {
        const k = p[y];
        if (Kh(o, i, k) && !Kl(h, k))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : i === o ? !1 : i ? o ? yf(i, o, h) : !0 : !!o;
  return !1;
}
function yf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Kh(t, e, r) && !Kl(n, r))
      return !0;
  }
  return !1;
}
function Kh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Qe(i) && Qe(a) ? !Zi(i, a) : i !== a;
}
function ey({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Gh = {}, qh = () => Object.create(Gh), Wh = (e) => Object.getPrototypeOf(e) === Gh;
function ty(e, t, n, i = !1) {
  const a = {}, r = qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ nm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function ny(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ Ye(a), [d] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const p = e.vnode.dynamicProps;
      for (let y = 0; y < p.length; y++) {
        let k = p[y];
        if (Kl(e.emitsOptions, k))
          continue;
        const E = t[k];
        if (d)
          if (Je(r, k))
            E !== r[k] && (r[k] = E, h = !0);
          else {
            const L = qt(k);
            a[L] = vu(
              d,
              u,
              L,
              E,
              e,
              !1
            );
          }
        else
          E !== r[k] && (r[k] = E, h = !0);
      }
    }
  } else {
    Yh(e, t, a, r) && (h = !0);
    let p;
    for (const y in u)
      (!t || // for camelCase
      !Je(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Ti(y)) === y || !Je(t, p))) && (d ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[p] !== void 0) && (a[y] = vu(
        d,
        u,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== u)
      for (const y in r)
        (!t || !Je(t, y)) && (delete r[y], h = !0);
  }
  h && hi(e.attrs, "set", "");
}
function Yh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let d in t) {
      if (Qr(d))
        continue;
      const h = t[d];
      let p;
      a && Je(a, p = qt(d)) ? !r || !r.includes(p) ? n[p] = h : (u || (u = {}))[p] = h : Kl(e.emitsOptions, d) || (!(d in i) || h !== i[d]) && (i[d] = h, o = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ Ye(n), h = u || qe;
    for (let p = 0; p < r.length; p++) {
      const y = r[p];
      n[y] = vu(
        a,
        d,
        y,
        h[y],
        e,
        !Je(h, y)
      );
    }
  }
  return o;
}
function vu(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const u = Je(o, "default");
    if (u && i === void 0) {
      const d = o.default;
      if (o.type !== Function && !o.skipFactory && De(d)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const p = Mo(a);
          i = h[n] = d.call(
            null,
            t
          ), p();
        }
      } else
        i = d;
      a.ce && a.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !u ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Ti(n)) && (i = !0));
  }
  return i;
}
const iy = /* @__PURE__ */ new WeakMap();
function Xh(e, t, n = !1) {
  const i = n ? iy : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, u = [];
  let d = !1;
  if (!De(e)) {
    const p = (y) => {
      d = !0;
      const [k, E] = Xh(y, t, !0);
      yt(o, k), E && u.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !d)
    return Qe(e) && i.set(e, ir), ir;
  if (Oe(r))
    for (let p = 0; p < r.length; p++) {
      const y = qt(r[p]);
      _f(y) && (o[y] = qe);
    }
  else if (r)
    for (const p in r) {
      const y = qt(p);
      if (_f(y)) {
        const k = r[p], E = o[y] = Oe(k) || De(k) ? { type: k } : yt({}, k), L = E.type;
        let A = !1, N = !0;
        if (Oe(L))
          for (let D = 0; D < L.length; ++D) {
            const M = L[D], z = De(M) && M.name;
            if (z === "Boolean") {
              A = !0;
              break;
            } else z === "String" && (N = !1);
          }
        else
          A = De(L) && L.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = N, (A || Je(E, "default")) && u.push(y);
      }
    }
  const h = [o, u];
  return Qe(e) && i.set(e, h), h;
}
function _f(e) {
  return e[0] !== "$" && !Qr(e);
}
const Zu = (e) => e === "_" || e === "_ctx" || e === "$stable", Ju = (e) => Oe(e) ? e.map(Zn) : [Zn(e)], ay = (e, t, n) => {
  if (t._n)
    return t;
  const i = Pe((...a) => Ju(t(...a)), n);
  return i._c = !1, i;
}, Zh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Zu(a)) continue;
    const r = e[a];
    if (De(r))
      t[a] = ay(a, r, i);
    else if (r != null) {
      const o = Ju(r);
      t[a] = () => o;
    }
  }
}, Jh = (e, t) => {
  const n = Ju(t);
  e.slots.default = () => n;
}, Qh = (e, t, n) => {
  for (const i in t)
    (n || !Zu(i)) && (e[i] = t[i]);
}, ry = (e, t, n) => {
  const i = e.slots = qh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qh(i, t, n), n && Jp(i, "_", a, !0)) : Zh(t, i);
  } else t && Jh(e, t);
}, oy = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = qe;
  if (i.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : Qh(a, t, n) : (r = !t.$stable, Zh(t, a)), o = t;
  } else t && (Jh(e, t), o = { default: 1 });
  if (r)
    for (const u in a)
      !Zu(u) && o[u] == null && delete a[u];
}, Qt = dy;
function sy(e) {
  return ly(e);
}
function ly(e, t) {
  const n = Fl();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: u,
    createComment: d,
    setText: h,
    setElementText: p,
    parentNode: y,
    nextSibling: k,
    setScopeId: E = kn,
    insertStaticContent: L
  } = e, A = (w, T, O, R = null, I = null, j = null, G = void 0, K = null, Q = !!T.dynamicChildren) => {
    if (w === T)
      return;
    w && !Oa(w, T) && (R = nt(w), Te(w, I, j, !0), w = null), T.patchFlag === -2 && (Q = !1, T.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: oe } = T;
    switch (V) {
      case Do:
        N(w, T, O, R);
        break;
      case It:
        D(w, T, O, R);
        break;
      case As:
        w == null && M(T, O, R, G);
        break;
      case ne:
        ee(
          w,
          T,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        break;
      default:
        oe & 1 ? re(
          w,
          T,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : oe & 6 ? J(
          w,
          T,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : (oe & 64 || oe & 128) && V.process(
          w,
          T,
          O,
          R,
          I,
          j,
          G,
          K,
          Q,
          Ft
        );
    }
    he != null && I ? no(he, w && w.ref, j, T || w, !T) : he == null && w && w.ref != null && no(w.ref, null, j, w, !0);
  }, N = (w, T, O, R) => {
    if (w == null)
      i(
        T.el = u(T.children),
        O,
        R
      );
    else {
      const I = T.el = w.el;
      T.children !== w.children && h(I, T.children);
    }
  }, D = (w, T, O, R) => {
    w == null ? i(
      T.el = d(T.children || ""),
      O,
      R
    ) : T.el = w.el;
  }, M = (w, T, O, R) => {
    [w.el, w.anchor] = L(
      w.children,
      T,
      O,
      R,
      w.el,
      w.anchor
    );
  }, z = ({ el: w, anchor: T }, O, R) => {
    let I;
    for (; w && w !== T; )
      I = k(w), i(w, O, R), w = I;
    i(T, O, R);
  }, C = ({ el: w, anchor: T }) => {
    let O;
    for (; w && w !== T; )
      O = k(w), a(w), w = O;
    a(T);
  }, re = (w, T, O, R, I, j, G, K, Q) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), w == null)
      de(
        T,
        O,
        R,
        I,
        j,
        G,
        K,
        Q
      );
    else {
      const V = w.el && w.el._isVueCE ? w.el : null;
      try {
        V && V._beginPatch(), X(
          w,
          T,
          I,
          j,
          G,
          K,
          Q
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, de = (w, T, O, R, I, j, G, K) => {
    let Q, V;
    const { props: he, shapeFlag: oe, transition: ve, dirs: xe } = w;
    if (Q = w.el = o(
      w.type,
      j,
      he && he.is,
      he
    ), oe & 8 ? p(Q, w.children) : oe & 16 && pe(
      w.children,
      Q,
      null,
      R,
      I,
      Ec(w, j),
      G,
      K
    ), xe && ya(w, null, R, "created"), Z(Q, w, w.scopeId, G, R), he) {
      for (const ze in he)
        ze !== "value" && !Qr(ze) && r(Q, ze, null, he[ze], j, R);
      "value" in he && r(Q, "value", null, he.value, j), (V = he.onVnodeBeforeMount) && Gn(V, R, w);
    }
    xe && ya(w, null, R, "beforeMount");
    const $e = cy(I, ve);
    $e && ve.beforeEnter(Q), i(Q, T, O), ((V = he && he.onVnodeMounted) || $e || xe) && Qt(() => {
      V && Gn(V, R, w), $e && ve.enter(Q), xe && ya(w, null, R, "mounted");
    }, I);
  }, Z = (w, T, O, R, I) => {
    if (O && E(w, O), R)
      for (let j = 0; j < R.length; j++)
        E(w, R[j]);
    if (I) {
      let j = I.subTree;
      if (T === j || nv(j.type) && (j.ssContent === T || j.ssFallback === T)) {
        const G = I.vnode;
        Z(
          w,
          G,
          G.scopeId,
          G.slotScopeIds,
          I.parent
        );
      }
    }
  }, pe = (w, T, O, R, I, j, G, K, Q = 0) => {
    for (let V = Q; V < w.length; V++) {
      const he = w[V] = K ? pi(w[V]) : Zn(w[V]);
      A(
        null,
        he,
        T,
        O,
        R,
        I,
        j,
        G,
        K
      );
    }
  }, X = (w, T, O, R, I, j, G) => {
    const K = T.el = w.el;
    let { patchFlag: Q, dynamicChildren: V, dirs: he } = T;
    Q |= w.patchFlag & 16;
    const oe = w.props || qe, ve = T.props || qe;
    let xe;
    if (O && _a(O, !1), (xe = ve.onVnodeBeforeUpdate) && Gn(xe, O, T, w), he && ya(T, w, O, "beforeUpdate"), O && _a(O, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, G = !1, V = null), (oe.innerHTML && ve.innerHTML == null || oe.textContent && ve.textContent == null) && p(K, ""), V ? se(
      w.dynamicChildren,
      V,
      K,
      O,
      R,
      Ec(T, I),
      j
    ) : G || ae(
      w,
      T,
      K,
      null,
      O,
      R,
      Ec(T, I),
      j,
      !1
    ), Q > 0) {
      if (Q & 16)
        _e(K, oe, ve, O, I);
      else if (Q & 2 && oe.class !== ve.class && r(K, "class", null, ve.class, I), Q & 4 && r(K, "style", oe.style, ve.style, I), Q & 8) {
        const $e = T.dynamicProps;
        for (let ze = 0; ze < $e.length; ze++) {
          const Fe = $e[ze], He = oe[Fe], rt = ve[Fe];
          (rt !== He || Fe === "value") && r(K, Fe, He, rt, I, O);
        }
      }
      Q & 1 && w.children !== T.children && p(K, T.children);
    } else !G && V == null && _e(K, oe, ve, O, I);
    ((xe = ve.onVnodeUpdated) || he) && Qt(() => {
      xe && Gn(xe, O, T, w), he && ya(T, w, O, "updated");
    }, R);
  }, se = (w, T, O, R, I, j, G) => {
    for (let K = 0; K < T.length; K++) {
      const Q = w[K], V = T[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Oa(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? y(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      A(
        Q,
        V,
        he,
        null,
        R,
        I,
        j,
        G,
        !0
      );
    }
  }, _e = (w, T, O, R, I) => {
    if (T !== O) {
      if (T !== qe)
        for (const j in T)
          !Qr(j) && !(j in O) && r(
            w,
            j,
            T[j],
            null,
            I,
            R
          );
      for (const j in O) {
        if (Qr(j)) continue;
        const G = O[j], K = T[j];
        G !== K && j !== "value" && r(w, j, K, G, I, R);
      }
      "value" in O && r(w, "value", T.value, O.value, I);
    }
  }, ee = (w, T, O, R, I, j, G, K, Q) => {
    const V = T.el = w ? w.el : u(""), he = T.anchor = w ? w.anchor : u("");
    let { patchFlag: oe, dynamicChildren: ve, slotScopeIds: xe } = T;
    xe && (K = K ? K.concat(xe) : xe), w == null ? (i(V, O, R), i(he, O, R), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      O,
      he,
      I,
      j,
      G,
      K,
      Q
    )) : oe > 0 && oe & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === ve.length ? (se(
      w.dynamicChildren,
      ve,
      O,
      I,
      j,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || I && T === I.subTree) && Qu(
      w,
      T,
      !0
      /* shallow */
    )) : ae(
      w,
      T,
      O,
      he,
      I,
      j,
      G,
      K,
      Q
    );
  }, J = (w, T, O, R, I, j, G, K, Q) => {
    T.slotScopeIds = K, w == null ? T.shapeFlag & 512 ? I.ctx.activate(
      T,
      O,
      R,
      G,
      Q
    ) : F(
      T,
      O,
      R,
      I,
      j,
      G,
      Q
    ) : U(w, T, Q);
  }, F = (w, T, O, R, I, j, G) => {
    const K = w.component = vy(
      w,
      R,
      I
    );
    if (Hl(w) && (K.ctx.renderer = Ft), gy(K, !1, G), K.asyncDep) {
      if (I && I.registerDep(K, Y, G), !w.el) {
        const Q = K.subTree = Ae(It);
        D(null, Q, T, O), w.placeholder = Q.el;
      }
    } else
      Y(
        K,
        w,
        T,
        O,
        I,
        j,
        G
      );
  }, U = (w, T, O) => {
    const R = T.component = w.component;
    if (Qm(w, T, O))
      if (R.asyncDep && !R.asyncResolved) {
        le(R, T, O);
        return;
      } else
        R.next = T, R.update();
    else
      T.el = w.el, R.vnode = T;
  }, Y = (w, T, O, R, I, j, G) => {
    const K = () => {
      if (w.isMounted) {
        let { next: oe, bu: ve, u: xe, parent: $e, vnode: ze } = w;
        {
          const Tt = ev(w);
          if (Tt) {
            oe && (oe.el = ze.el, le(w, oe, G)), Tt.asyncDep.then(() => {
              Qt(() => {
                w.isUnmounted || V();
              }, I);
            });
            return;
          }
        }
        let Fe = oe, He;
        _a(w, !1), oe ? (oe.el = ze.el, le(w, oe, G)) : oe = ze, ve && Es(ve), (He = oe.props && oe.props.onVnodeBeforeUpdate) && Gn(He, $e, oe, ze), _a(w, !0);
        const rt = mf(w), vt = w.subTree;
        w.subTree = rt, A(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          y(vt.el),
          // anchor may have changed if it's in a fragment
          nt(vt),
          w,
          I,
          j
        ), oe.el = rt.el, Fe === null && ey(w, rt.el), xe && Qt(xe, I), (He = oe.props && oe.props.onVnodeUpdated) && Qt(
          () => Gn(He, $e, oe, ze),
          I
        );
      } else {
        let oe;
        const { el: ve, props: xe } = T, { bm: $e, m: ze, parent: Fe, root: He, type: rt } = w, vt = rr(T);
        _a(w, !1), $e && Es($e), !vt && (oe = xe && xe.onVnodeBeforeMount) && Gn(oe, Fe, T), _a(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            rt,
            w.parent ? w.parent.type : void 0
          );
          const Tt = w.subTree = mf(w);
          A(
            null,
            Tt,
            O,
            R,
            w,
            I,
            j
          ), T.el = Tt.el;
        }
        if (ze && Qt(ze, I), !vt && (oe = xe && xe.onVnodeMounted)) {
          const Tt = T;
          Qt(
            () => Gn(oe, Fe, Tt),
            I
          );
        }
        (T.shapeFlag & 256 || Fe && rr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && w.a && Qt(w.a, I), w.isMounted = !0, T = O = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new nh(K);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), he = w.job = Q.runIfDirty.bind(Q);
    he.i = w, he.id = w.uid, Q.scheduler = () => qu(he), _a(w, !0), V();
  }, le = (w, T, O) => {
    T.component = w;
    const R = w.vnode.props;
    w.vnode = T, w.next = null, ny(w, T.props, R, O), oy(w, T.children, O), wi(), lf(w), Si();
  }, ae = (w, T, O, R, I, j, G, K, Q = !1) => {
    const V = w && w.children, he = w ? w.shapeFlag : 0, oe = T.children, { patchFlag: ve, shapeFlag: xe } = T;
    if (ve > 0) {
      if (ve & 128) {
        fe(
          V,
          oe,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        return;
      } else if (ve & 256) {
        me(
          V,
          oe,
          O,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        return;
      }
    }
    xe & 8 ? (he & 16 && ht(V, I, j), oe !== V && p(O, oe)) : he & 16 ? xe & 16 ? fe(
      V,
      oe,
      O,
      R,
      I,
      j,
      G,
      K,
      Q
    ) : ht(V, I, j, !0) : (he & 8 && p(O, ""), xe & 16 && pe(
      oe,
      O,
      R,
      I,
      j,
      G,
      K,
      Q
    ));
  }, me = (w, T, O, R, I, j, G, K, Q) => {
    w = w || ir, T = T || ir;
    const V = w.length, he = T.length, oe = Math.min(V, he);
    let ve;
    for (ve = 0; ve < oe; ve++) {
      const xe = T[ve] = Q ? pi(T[ve]) : Zn(T[ve]);
      A(
        w[ve],
        xe,
        O,
        null,
        I,
        j,
        G,
        K,
        Q
      );
    }
    V > he ? ht(
      w,
      I,
      j,
      !0,
      !1,
      oe
    ) : pe(
      T,
      O,
      R,
      I,
      j,
      G,
      K,
      Q,
      oe
    );
  }, fe = (w, T, O, R, I, j, G, K, Q) => {
    let V = 0;
    const he = T.length;
    let oe = w.length - 1, ve = he - 1;
    for (; V <= oe && V <= ve; ) {
      const xe = w[V], $e = T[V] = Q ? pi(T[V]) : Zn(T[V]);
      if (Oa(xe, $e))
        A(
          xe,
          $e,
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        );
      else
        break;
      V++;
    }
    for (; V <= oe && V <= ve; ) {
      const xe = w[oe], $e = T[ve] = Q ? pi(T[ve]) : Zn(T[ve]);
      if (Oa(xe, $e))
        A(
          xe,
          $e,
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        );
      else
        break;
      oe--, ve--;
    }
    if (V > oe) {
      if (V <= ve) {
        const xe = ve + 1, $e = xe < he ? T[xe].el : R;
        for (; V <= ve; )
          A(
            null,
            T[V] = Q ? pi(T[V]) : Zn(T[V]),
            O,
            $e,
            I,
            j,
            G,
            K,
            Q
          ), V++;
      }
    } else if (V > ve)
      for (; V <= oe; )
        Te(w[V], I, j, !0), V++;
    else {
      const xe = V, $e = V, ze = /* @__PURE__ */ new Map();
      for (V = $e; V <= ve; V++) {
        const tt = T[V] = Q ? pi(T[V]) : Zn(T[V]);
        tt.key != null && ze.set(tt.key, V);
      }
      let Fe, He = 0;
      const rt = ve - $e + 1;
      let vt = !1, Tt = 0;
      const Dt = new Array(rt);
      for (V = 0; V < rt; V++) Dt[V] = 0;
      for (V = xe; V <= oe; V++) {
        const tt = w[V];
        if (He >= rt) {
          Te(tt, I, j, !0);
          continue;
        }
        let dt;
        if (tt.key != null)
          dt = ze.get(tt.key);
        else
          for (Fe = $e; Fe <= ve; Fe++)
            if (Dt[Fe - $e] === 0 && Oa(tt, T[Fe])) {
              dt = Fe;
              break;
            }
        dt === void 0 ? Te(tt, I, j, !0) : (Dt[dt - $e] = V + 1, dt >= Tt ? Tt = dt : vt = !0, A(
          tt,
          T[dt],
          O,
          null,
          I,
          j,
          G,
          K,
          Q
        ), He++);
      }
      const An = vt ? uy(Dt) : ir;
      for (Fe = An.length - 1, V = rt - 1; V >= 0; V--) {
        const tt = $e + V, dt = T[tt], Mn = T[tt + 1], gn = tt + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Mn.el || tv(Mn)
        ) : R;
        Dt[V] === 0 ? A(
          null,
          dt,
          O,
          gn,
          I,
          j,
          G,
          K,
          Q
        ) : vt && (Fe < 0 || V !== An[Fe] ? Se(dt, O, gn, 2) : Fe--);
      }
    }
  }, Se = (w, T, O, R, I = null) => {
    const { el: j, type: G, transition: K, children: Q, shapeFlag: V } = w;
    if (V & 6) {
      Se(w.component.subTree, T, O, R);
      return;
    }
    if (V & 128) {
      w.suspense.move(T, O, R);
      return;
    }
    if (V & 64) {
      G.move(w, T, O, Ft);
      return;
    }
    if (G === ne) {
      i(j, T, O);
      for (let oe = 0; oe < Q.length; oe++)
        Se(Q[oe], T, O, R);
      i(w.anchor, T, O);
      return;
    }
    if (G === As) {
      z(w, T, O);
      return;
    }
    if (R !== 2 && V & 1 && K)
      if (R === 0)
        K.persisted && !j[Sn] ? i(j, T, O) : (K.beforeEnter(j), i(j, T, O), Qt(() => K.enter(j), I));
      else {
        const { leave: oe, delayLeave: ve, afterLeave: xe } = K, $e = () => {
          w.ctx.isUnmounted ? a(j) : i(j, T, O);
        }, ze = () => {
          const Fe = j._isLeaving || !!j[Sn];
          j._isLeaving && j[Sn](
            !0
            /* cancelled */
          ), K.persisted && !Fe ? $e() : oe(j, () => {
            $e(), xe && xe();
          });
        };
        ve ? ve(j, $e, ze) : ze();
      }
    else
      i(j, T, O);
  }, Te = (w, T, O, R = !1, I = !1) => {
    const {
      type: j,
      props: G,
      ref: K,
      children: Q,
      dynamicChildren: V,
      shapeFlag: he,
      patchFlag: oe,
      dirs: ve,
      cacheIndex: xe,
      memo: $e
    } = w;
    if (oe === -2 && (I = !1), K != null && (wi(), no(K, null, O, w, !0), Si()), xe != null && (T.renderCache[xe] = void 0), he & 256) {
      T.ctx.deactivate(w);
      return;
    }
    const ze = he & 1 && ve, Fe = !rr(w);
    let He;
    if (Fe && (He = G && G.onVnodeBeforeUnmount) && Gn(He, T, w), he & 6)
      lt(w.component, O, R);
    else {
      if (he & 128) {
        w.suspense.unmount(O, R);
        return;
      }
      ze && ya(w, null, T, "beforeUnmount"), he & 64 ? w.type.remove(
        w,
        T,
        O,
        Ft,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ne || oe > 0 && oe & 64) ? ht(
        V,
        T,
        O,
        !1,
        !0
      ) : (j === ne && oe & 384 || !I && he & 16) && ht(Q, T, O), R && Ke(w);
    }
    const rt = $e != null && xe == null;
    (Fe && (He = G && G.onVnodeUnmounted) || ze || rt) && Qt(() => {
      He && Gn(He, T, w), ze && ya(w, null, T, "unmounted"), rt && (w.el = null);
    }, O);
  }, Ke = (w) => {
    const { type: T, el: O, anchor: R, transition: I } = w;
    if (T === ne) {
      Le(O, R);
      return;
    }
    if (T === As) {
      C(w);
      return;
    }
    const j = () => {
      a(O), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: G, delayLeave: K } = I, Q = () => G(O, j);
      K ? K(w.el, j, Q) : Q();
    } else
      j();
  }, Le = (w, T) => {
    let O;
    for (; w !== T; )
      O = k(w), a(w), w = O;
    a(T);
  }, lt = (w, T, O) => {
    const { bum: R, scope: I, job: j, subTree: G, um: K, m: Q, a: V } = w;
    wf(Q), wf(V), R && Es(R), I.stop(), j && (j.flags |= 8, Te(G, w, T, O)), K && Qt(K, T), Qt(() => {
      w.isUnmounted = !0;
    }, T);
  }, ht = (w, T, O, R = !1, I = !1, j = 0) => {
    for (let G = j; G < w.length; G++)
      Te(w[G], T, O, R, I);
  }, nt = (w) => {
    if (w.shapeFlag & 6)
      return nt(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const T = k(w.anchor || w.el), O = T && T[Th];
    return O ? k(O) : T;
  };
  let ut = !1;
  const at = (w, T, O) => {
    let R;
    w == null ? T._vnode && (Te(T._vnode, null, null, !0), R = T._vnode.component) : A(
      T._vnode || null,
      w,
      T,
      null,
      null,
      null,
      O
    ), T._vnode = w, ut || (ut = !0, lf(R), Sh(), ut = !1);
  }, Ft = {
    p: A,
    um: Te,
    m: Se,
    r: Ke,
    mt: F,
    mc: pe,
    pc: ae,
    pbc: se,
    n: nt,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: Wm(at)
  };
}
function Ec({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _a({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Oe(i) && Oe(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let u = a[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[r] = pi(a[r]), u.el = o.el), !n && u.patchFlag !== -2 && Qu(o, u)), u.type === Do && (u.patchFlag === -1 && (u = a[r] = pi(u)), u.el = o.el), u.type === It && !u.el && (u.el = o.el);
    }
}
function uy(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, u;
  const d = e.length;
  for (i = 0; i < d; i++) {
    const h = e[i];
    if (h !== 0) {
      if (a = n[n.length - 1], e[a] < h) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        u = r + o >> 1, e[n[u]] < h ? r = u + 1 : o = u;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ev(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ev(t);
}
function wf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tv(t.subTree) : null;
}
const nv = (e) => e.__isSuspense;
function dy(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : wh(e);
}
const ne = /* @__PURE__ */ Symbol.for("v-fgt"), Do = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), As = /* @__PURE__ */ Symbol.for("v-stc"), yi = [];
let hn = null;
function m(e = !1) {
  yi.push(hn = e ? null : []);
}
function ed() {
  yi.pop(), hn = yi[yi.length - 1] || null;
}
let wo = 1;
function zs(e, t = !1) {
  wo += e, e < 0 && hn && t && (hn.hasOnce = !0);
}
function iv(e) {
  return e.dynamicChildren = wo > 0 ? hn || ir : null, ed(), wo > 0 && hn && hn.push(e), e;
}
function _(e, t, n, i, a, r) {
  return iv(
    l(
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
function je(e, t, n, i, a) {
  return iv(
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
function So(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Oa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const av = ({ key: e }) => e ?? null, Os = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || /* @__PURE__ */ Wt(e) || De(e) ? { i: Pt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ne ? 0 : 1, o = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && av(t),
    ref: t && Os(t),
    scopeId: Ul,
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
    ctx: Pt
  };
  return u ? (Us(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= st(n) ? 8 : 16), wo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && hn.push(d), d;
}
const Ae = fy;
function fy(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Fh) && (e = It), So(e)) {
    const u = Ji(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(u, n), wo > 0 && !r && hn && (u.shapeFlag & 6 ? hn[hn.indexOf(e)] = u : hn.push(u)), u.patchFlag = -2, u;
  }
  if (_y(e) && (e = e.__vccOpts), t) {
    t = Co(t);
    let { class: u, style: d } = t;
    u && !st(u) && (t.class = be(u)), Qe(d) && (/* @__PURE__ */ Gu(d) && !Oe(d) && (d = yt({}, d)), t.style = vn(d));
  }
  const o = st(e) ? 1 : nv(e) ? 128 : Bl(e) ? 64 : Qe(e) ? 4 : De(e) ? 2 : 0;
  return l(
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
function Co(e) {
  return e ? /* @__PURE__ */ Gu(e) || Wh(e) ? yt({}, e) : e : null;
}
function Ji(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: u, transition: d } = e, h = t ? Yt(a || {}, t) : a, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && av(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Oe(r) ? r.concat(Os(t)) : [r, Os(t)] : Os(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ne ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ji(e.ssContent),
    ssFallback: e.ssFallback && Ji(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && i && _o(
    p,
    d.clone(p)
  ), p;
}
function ge(e = " ", t = 0) {
  return Ae(Do, null, e, t);
}
function $(e = "", t = !1) {
  return t ? (m(), je(It, null, e)) : Ae(It, null, e);
}
function Zn(e) {
  return e == null || typeof e == "boolean" ? Ae(It) : Oe(e) ? Ae(
    ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : So(e) ? pi(e) : Ae(Do, null, String(e));
}
function pi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Us(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Oe(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Us(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Wh(t) ? t._ctx = Pt : a === 3 && Pt && (Pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (i & 65) {
      Us(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Pt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [ge(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = be([t.class, i.class]));
      else if (a === "style")
        t.style = vn([t.style, i.style]);
      else if (Ll(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Oe(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Gn(e, t, n, i = null) {
  En(e, t, 7, [
    n,
    i
  ]);
}
const py = jh();
let hy = 0;
function vy(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || py, r = {
    uid: hy++,
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
    scope: new Db(
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
    propsOptions: Xh(i, a),
    emitsOptions: Vh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: qe,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: qe,
    data: qe,
    props: qe,
    attrs: qe,
    slots: qe,
    refs: qe,
    setupState: qe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ym.bind(null, r), e.ce && e.ce(r), r;
}
let Gt = null;
const za = () => Gt || Pt;
let js, ko;
{
  const e = Fl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  js = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Gt = n
  ), ko = t(
    "__VUE_SSR_SETTERS__",
    (n) => To = n
  );
}
const Mo = (e) => {
  const t = Gt;
  return js(e), e.scope.on(), () => {
    e.scope.off(), js(t);
  };
}, Sf = () => {
  Gt && Gt.scope.off(), js(null);
};
function rv(e) {
  return e.vnode.shapeFlag & 4;
}
let To = !1;
function gy(e, t = !1, n = !1) {
  t && ko(t);
  const { props: i, children: a } = e.vnode, r = rv(e);
  ty(e, i, r, t), ry(e, a, n || t);
  const o = r ? by(e, t) : void 0;
  return t && ko(!1), o;
}
function by(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mm);
  const { setup: i } = n;
  if (i) {
    wi();
    const a = e.setupContext = i.length > 1 ? sv(e) : null, r = Mo(e), o = $o(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = Yp(o);
    if (Si(), r(), (u || e.sp) && !rr(e) && Rh(e), u) {
      if (o.then(Sf, Sf), t)
        return o.then((d) => {
          ko(!0);
          try {
            Cf(e, d, t);
          } finally {
            ko(!1);
          }
        }).catch((d) => {
          zl(d, e, 0);
        });
      e.asyncDep = o;
    } else
      Cf(e, o);
  } else
    ov(e);
}
function Cf(e, t, n) {
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = mh(t)), ov(e);
}
function ov(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || kn);
  {
    const a = Mo(e);
    wi();
    try {
      Bm(e);
    } finally {
      Si(), a();
    }
  }
}
const my = {
  get(e, t) {
    return Vt(e, "get", ""), e[t];
  }
};
function sv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, my),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(im(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in io)
        return io[n](e);
    },
    has(t, n) {
      return n in t || n in io;
    }
  })) : e.proxy;
}
function yy(e, t = !0) {
  return De(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _y(e) {
  return De(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ cm(e, t, To);
function nn(e, t, n) {
  try {
    zs(-1);
    const i = arguments.length;
    return i === 2 ? Qe(t) && !Oe(t) ? So(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && So(n) && (n = [n]), Ae(e, t, n));
  } finally {
    zs(1);
  }
}
const wy = "3.5.42", Sy = kn;
let gu;
const kf = typeof window < "u" && window.trustedTypes;
if (kf)
  try {
    gu = /* @__PURE__ */ kf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lv = gu ? (e) => gu.createHTML(e) : (e) => e, Cy = "http://www.w3.org/2000/svg", ky = "http://www.w3.org/1998/Math/MathML", fi = typeof document < "u" ? document : null, Tf = fi && /* @__PURE__ */ fi.createElement("template"), Ty = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? fi.createElementNS(Cy, e) : t === "mathml" ? fi.createElementNS(ky, e) : n ? fi.createElement(e, { is: n }) : fi.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => fi.createTextNode(e),
  createComment: (e) => fi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fi.querySelector(e),
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
      Tf.innerHTML = lv(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Tf.content;
      if (i === "svg" || i === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, zi = "transition", zr = "animation", Eo = /* @__PURE__ */ Symbol("_vtc"), cv = {
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
}, Ey = /* @__PURE__ */ yt(
  {},
  Ah,
  cv
), Ay = (e) => (e.displayName = "Transition", e.props = Ey, e), Oy = /* @__PURE__ */ Ay(
  (e, { slots: t }) => nn(Am, xy(e), t)
), wa = (e, t = []) => {
  Oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ef = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function xy(e) {
  const t = {};
  for (const ee in e)
    ee in cv || (t[ee] = e[ee]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: u = `${n}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: h = o,
    appearToClass: p = u,
    leaveFromClass: y = `${n}-leave-from`,
    leaveActiveClass: k = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, L = Ny(a), A = L && L[0], N = L && L[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: C,
    onLeaveCancelled: re,
    onBeforeAppear: de = D,
    onAppear: Z = M,
    onAppearCancelled: pe = z
  } = t, X = (ee, J, F, U) => {
    ee._enterCancelled = U, Sa(ee, J ? p : u), Sa(ee, J ? h : o), F && F();
  }, se = (ee, J) => {
    ee._isLeaving = !1, Sa(ee, y), Sa(ee, E), Sa(ee, k), J && J();
  }, _e = (ee) => (J, F) => {
    const U = ee ? Z : M, Y = () => X(J, ee, F);
    wa(U, [J, Y]), Af(() => {
      Sa(J, ee ? d : r), li(J, ee ? p : u), Ef(U) || Of(J, i, A, Y);
    });
  };
  return yt(t, {
    onBeforeEnter(ee) {
      wa(D, [ee]), li(ee, r), li(ee, o);
    },
    onBeforeAppear(ee) {
      wa(de, [ee]), li(ee, d), li(ee, h);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => se(ee, J);
      li(ee, y), ee._enterCancelled ? (li(ee, k), Lf(ee)) : (Lf(ee), li(ee, k)), Af(() => {
        ee._isLeaving && (Sa(ee, y), li(ee, E), Ef(C) || Of(ee, i, N, F));
      }), wa(C, [ee, F]);
    },
    onEnterCancelled(ee) {
      X(ee, !1, void 0, !0), wa(z, [ee]);
    },
    onAppearCancelled(ee) {
      X(ee, !0, void 0, !0), wa(pe, [ee]);
    },
    onLeaveCancelled(ee) {
      se(ee), wa(re, [ee]);
    }
  });
}
function Ny(e) {
  if (e == null)
    return null;
  if (Qe(e))
    return [Ac(e.enter), Ac(e.leave)];
  {
    const t = Ac(e);
    return [t, t];
  }
}
function Ac(e) {
  return Ab(e);
}
function li(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Sa(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Eo];
  n && (n.delete(t), n.size || (e[Eo] = void 0));
}
function Af(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ly = 0;
function Of(e, t, n, i) {
  const a = e._endId = ++Ly, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: u, propCount: d } = Ry(e, t);
  if (!o)
    return i();
  const h = o + "end";
  let p = 0;
  const y = () => {
    e.removeEventListener(h, k), r();
  }, k = (E) => {
    E.target === e && ++p >= d && y();
  };
  setTimeout(() => {
    p < d && y();
  }, u + 1), e.addEventListener(h, k);
}
function Ry(e, t) {
  const n = window.getComputedStyle(e), i = (L) => (n[L] || "").split(", "), a = i(`${zi}Delay`), r = i(`${zi}Duration`), o = xf(a, r), u = i(`${zr}Delay`), d = i(`${zr}Duration`), h = xf(u, d);
  let p = null, y = 0, k = 0;
  t === zi ? o > 0 && (p = zi, y = o, k = r.length) : t === zr ? h > 0 && (p = zr, y = h, k = d.length) : (y = Math.max(o, h), p = y > 0 ? o > h ? zi : zr : null, k = p ? p === zi ? r.length : d.length : 0);
  const E = p === zi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${zi}Property`).toString()
  );
  return {
    type: p,
    timeout: y,
    propCount: k,
    hasTransform: E
  };
}
function xf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Nf(n) + Nf(e[i])));
}
function Nf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Iy(e, t, n) {
  const i = e[Eo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Bs = /* @__PURE__ */ Symbol("_vod"), uv = /* @__PURE__ */ Symbol("_vsh"), sr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Bs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ur(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ur(e, !0), i.enter(e)) : i.leave(e, () => {
      Ur(e, !1);
    }) : Ur(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ur(e, t);
  }
};
function Ur(e, t) {
  e.style.display = t ? e[Bs] : "none", e[uv] = !t;
}
const dv = /* @__PURE__ */ Symbol("");
function Py(e) {
  const t = za();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Hs(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Hs(t.ce, a) : bu(t.subTree, a), n(a);
  };
  $h(() => {
    wh(i);
  }), ea(() => {
    We(i, kn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Fo(() => a.disconnect());
  });
}
function bu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      bu(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Hs(e.el, t);
  else if (e.type === ne)
    e.children.forEach((n) => bu(n, t));
  else if (e.type === As) {
    let { el: n, anchor: i } = e;
    for (; n && (Hs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Hs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Fb(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[dv] = i;
  }
}
const $y = /(?:^|;)\s*display\s*:/;
function Fy(e, t, n) {
  const i = e.style, a = st(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (st(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          n[u] == null && Yr(i, u, "");
        }
      else
        for (const o in t)
          n[o] == null && Yr(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const u = n[o];
      u != null ? My(
        e,
        o,
        !st(t) && t ? t[o] : void 0,
        u
      ) || Yr(i, o, u) : Yr(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[dv];
      o && (n += ";" + o), i.cssText = n, r = $y.test(n);
    }
  } else t && e.removeAttribute("style");
  Bs in e && (e[Bs] = r ? i.display : "", e[uv] && (i.display = "none"));
}
const gs = /\s*!important$/;
function Yr(e, t, n) {
  if (Oe(n))
    n.forEach((i) => Yr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    gs.test(n) ? e.setProperty(t, n.replace(gs, ""), "important") : e.setProperty(t, n);
  else {
    const i = Dy(e, t);
    gs.test(n) ? e.setProperty(
      Ti(i),
      n.replace(gs, ""),
      "important"
    ) : e[i] = n;
  }
}
const Rf = ["Webkit", "Moz", "ms"], Oc = {};
function Dy(e, t) {
  const n = Oc[t];
  if (n)
    return n;
  let i = qt(t);
  if (i !== "filter" && i in e)
    return Oc[t] = i;
  i = Pl(i);
  for (let a = 0; a < Rf.length; a++) {
    const r = Rf[a] + i;
    if (r in e)
      return Oc[t] = r;
  }
  return t;
}
function My(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && st(i) && n === i;
}
const If = "http://www.w3.org/1999/xlink";
function Pf(e, t, n, i, a, r = Ib(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(If, t.slice(6, t.length)) : e.setAttributeNS(If, t, n) : n == null || r && !Qp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Fn(n) ? String(n) : n
  );
}
function $f(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lv(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Qp(n) : n == null && u === "string" ? (n = "", o = !0) : u === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function xa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function zy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ff = /* @__PURE__ */ Symbol("_vei");
function Uy(e, t, n, i, a = null) {
  const r = e[Ff] || (e[Ff] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [u, d] = Hy(t);
    if (i) {
      const h = r[t] = Gy(
        i,
        a
      );
      xa(e, u, h, d);
    } else o && (zy(e, u, o, d), r[t] = void 0);
  }
}
const jy = /(Once|Passive|Capture)$/, By = /^on:?(?:Once|Passive|Capture)$/;
function Hy(e) {
  let t, n;
  for (; (n = e.match(jy)) && !By.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Ti(e.slice(2)), t];
}
let xc = 0;
const Vy = /* @__PURE__ */ Promise.resolve(), Ky = () => xc || (Vy.then(() => xc = 0), xc = Date.now());
function Gy(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Oe(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const o = a.slice(), u = [i];
      for (let d = 0; d < o.length && !i._stopped; d++) {
        const h = o[d];
        h && En(
          h,
          t,
          5,
          u
        );
      }
    } else
      En(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Ky(), n;
}
const Df = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qy = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Iy(e, i, o) : t === "style" ? Fy(e, n, i) : Ll(t) ? Rl(t) || Uy(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wy(e, t, i, o)) ? ($f(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pf(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !st(i))) ? $f(e, qt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Pf(e, t, i, o));
};
function Wy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Df(t) && De(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Df(t) && st(n) ? !1 : t in e;
}
function Yy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = qt(t);
  return Array.isArray(n) ? n.some((a) => qt(a) === i) : Object.keys(n).some((a) => qt(a) === i);
}
const Vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Oe(t) ? (n) => Es(t, n) : t;
};
function Xy(e) {
  e.target.composing = !0;
}
function Mf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const La = /* @__PURE__ */ Symbol("_assign"), bs = /* @__PURE__ */ Symbol("_initialValue");
function Nc(e, t, n) {
  return t && (e = e.trim()), n && (e = $l(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[bs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[La] = Vs(a);
    const r = i || a.props && a.props.type === "number";
    xa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[La](Nc(e.value, n, r));
    }), (n || r) && xa(e, "change", () => {
      e.value = Nc(e.value, n, r);
    }), t || (xa(e, "compositionstart", Xy), xa(e, "compositionend", Mf), xa(e, "change", Mf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[bs];
    delete e[bs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[La](Nc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[La] = Vs(o), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? $l(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === d) || (e.value = d);
  }
}, Zt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, xa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => n ? $l(Ks(d)) : Ks(d)
      ), r = e.multiple, o = r ? Da(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        r,
        r ? Oe(o) ? a.slice() : a : o
      ];
      try {
        e[La](o);
      } finally {
        en(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[La] = Vs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zf(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[La] = Vs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Zy(t, n[1], n[0])) && zf(e, t);
  }
};
function Zy(e, t, n) {
  if (!n || Oe(e)) return Zi(e, t);
  if (Da(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function zf(e, t) {
  const n = e.multiple, i = Oe(t);
  if (!(n && !i && !Da(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], u = Ks(o);
      if (n)
        if (i) {
          const d = typeof u;
          d === "string" || d === "number" ? o.selected = t.some((h) => String(h) === String(u)) : o.selected = $b(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (Zi(Ks(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ks(e) {
  return "_value" in e ? e._value : e.value;
}
const Jy = ["ctrl", "shift", "alt", "meta"], Qy = {
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
  exact: (e, t) => Jy.some((n) => e[`${n}Key`] && !t.includes(n))
}, ye = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const u = Qy[t[o]];
      if (u && u(a, t)) return;
    }
    return e(a, ...r);
  }));
}, e_ = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, it = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = Ti(a.key);
    if (t.some(
      (o) => o === r || e_[o] === r
    ))
      return e(a);
  }));
}, t_ = /* @__PURE__ */ yt({ patchProp: qy }, Ty);
let Uf;
function n_() {
  return Uf || (Uf = sy(t_));
}
const i_ = ((...e) => {
  const t = n_().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = r_(i);
    if (!a) return;
    const r = t._component;
    !De(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, a_(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function a_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function r_(e) {
  return st(e) ? document.querySelector(e) : e;
}
function td(e, t, n) {
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
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function o_(e) {
  if (Array.isArray(e)) return e;
}
function s_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, u = [], d = !0, h = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(d = (i = r.call(n)).done) && (u.push(i.value), u.length !== t); d = !0) ;
    } catch (p) {
      h = !0, a = p;
    } finally {
      try {
        if (!d && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw a;
      }
    }
    return u;
  }
}
function l_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c_(e, t) {
  return o_(e) || s_(e, t) || u_(e, t) || l_();
}
function u_(e, t) {
  if (e) {
    if (typeof e == "string") return jf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jf(e, t) : void 0;
  }
}
const fv = Object.entries, Bf = Object.setPrototypeOf, d_ = Object.isFrozen, f_ = Object.getPrototypeOf, p_ = Object.getOwnPropertyDescriptor;
let St = Object.freeze, kt = Object.seal, tr = Object.create, pv = typeof Reflect < "u" && Reflect, mu = pv.apply, yu = pv.construct;
St || (St = function(t) {
  return t;
});
kt || (kt = function(t) {
  return t;
});
mu || (mu = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
yu || (yu = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const Ea = _t(Array.prototype.forEach), h_ = _t(Array.prototype.lastIndexOf), Hf = _t(Array.prototype.pop), jr = _t(Array.prototype.push), v_ = _t(Array.prototype.splice), lr = Array.isArray, Xr = _t(String.prototype.toLowerCase), Lc = _t(String.prototype.toString), Vf = _t(String.prototype.match), Br = _t(String.prototype.replace), Kf = _t(String.prototype.indexOf), g_ = _t(String.prototype.trim), b_ = _t(Number.prototype.toString), m_ = _t(Boolean.prototype.toString), Gf = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), an = _t(Object.prototype.hasOwnProperty), Hr = _t(Object.prototype.toString), Bt = _t(RegExp.prototype.test), Ca = y_(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return mu(e, t, i);
  };
}
function y_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return yu(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xr;
  if (Bf && Bf(e, null), !lr(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (d_(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function __(e) {
  for (let t = 0; t < e.length; t++)
    an(e, t) || (e[t] = null);
  return e;
}
function fn(e) {
  const t = tr(null);
  for (const i of fv(e)) {
    var n = c_(i, 2);
    const a = n[0], r = n[1];
    an(e, a) && (lr(r) ? t[a] = __(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = fn(r) : t[a] = r);
  }
  return t;
}
function w_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return b_(e);
    case "boolean":
      return m_(e);
    case "bigint":
      return Gf ? Gf(e) : "0";
    case "symbol":
      return qf ? qf(e) : "Symbol()";
    case "undefined":
      return Hr(e);
    case "function":
    case "object": {
      if (e === null)
        return Hr(e);
      const t = e, n = Rn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Hr(i);
      }
      return Hr(e);
    }
    default:
      return Hr(e);
  }
}
function Rn(e, t) {
  for (; e !== null; ) {
    const i = p_(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = f_(e);
  }
  function n() {
    return null;
  }
  return n;
}
function S_(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Wf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Rc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ic = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), C_ = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), k_ = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yf = St(["#text"]), Xf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ms = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), T_ = kt(/{{[\w\W]*|^[\w\W]*}}/g), E_ = kt(/<%[\w\W]*|^[\w\W]*%>/g), A_ = kt(/\${[\w\W]*/g), O_ = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), x_ = kt(/^aria-[\-\w]+$/), Jf = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), N_ = kt(/^(?:\w+script|data):/i), L_ = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), R_ = kt(/^html$/i), I_ = kt(/^[a-z][.\w]*(-[.\w]+)+$/i), Qf = kt(/<[/\w!]/g), ep = kt(/<[/\w]/g), P_ = kt(/<\/no(script|embed|frames)/i), $_ = kt(/\/>/i), un = {
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
}, hv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], F_ = St(Ge({}, hv)), D_ = (function() {
  const e = {};
  return Ea(hv, (t) => {
    e[t] = kt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), M_ = function() {
  return typeof window > "u" ? null : window;
}, z_ = function(t, n) {
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
}, tp = function() {
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
}, Ui = function(t, n, i, a) {
  return an(t, n) && lr(t[n]) ? Ge(a.base ? fn(a.base) : {}, t[n], a.transform) : i;
}, Fc = function(t, n, i) {
  const a = an(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? fn(a) : i();
};
function vv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M_();
  const t = (te) => vv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, u = e.Element, d = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const p = e.DOMParser, y = e.trustedTypes, k = u.prototype, E = Rn(k, "cloneNode"), L = Rn(k, "remove"), A = Rn(k, "nextSibling"), N = Rn(k, "childNodes"), D = Rn(k, "parentNode"), M = Rn(k, "shadowRoot"), z = Rn(k, "attributes"), C = o && o.prototype ? Rn(o.prototype, "nodeType") : null, re = o && o.prototype ? Rn(o.prototype, "nodeName") : null, de = o && o.prototype ? Rn(o.prototype, "ownerDocument") : null, Z = function(S) {
    return C ? C(S) : S.nodeType;
  }, pe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = n.createElement("template");
    te.content && te.content.ownerDocument && (n = te.content.ownerDocument);
  }
  let X, se = "", _e, ee = !1, J = 0;
  const F = function() {
    if (J > 0)
      throw Ca('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
    F(), J++;
    try {
      return X.createHTML(S);
    } finally {
      J--;
    }
  }, Y = function(S) {
    F(), J++;
    try {
      return X.createScriptURL(S);
    } finally {
      J--;
    }
  }, le = function() {
    return ee || (_e = z_(y, a), ee = !0), _e;
  }, ae = n, me = ae.implementation, fe = ae.createNodeIterator, Se = ae.createDocumentFragment, Te = ae.getElementsByTagName, Ke = i.importNode;
  let Le = tp();
  t.isSupported = typeof fv == "function" && typeof D == "function" && me && me.createHTMLDocument !== void 0;
  const lt = T_, ht = E_, nt = A_, ut = O_, at = x_, Ft = N_, H = L_, w = I_;
  let T = Jf, O = null;
  const R = Ge({}, [...Wf, ...Rc, ...Ic, ...Pc, ...Yf]);
  let I = null;
  const j = Ge({}, [...Xf, ...$c, ...Zf, ...ms]);
  let G = Object.seal(tr(null, {
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
  })), K = null, Q = null;
  const V = Object.seal(tr(null, {
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
  let he = !0, oe = !0, ve = !1, xe = !0, $e = !1, ze = !0, Fe = !1, He = !1, rt = null, vt = null, Tt = !1, Dt = !1, An = !1, tt = !1, dt = !0, Mn = !1;
  const gn = "user-content-";
  let ia = !0, Ai = !1, zn = {}, Un = null;
  const pr = Ge({}, [
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
  let ti = null;
  const Oi = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let xi = null;
  const Ni = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gt = "http://www.w3.org/1998/Math/MathML", ja = "http://www.w3.org/2000/svg", rn = "http://www.w3.org/1999/xhtml";
  let Li = rn, aa = !1, Ba = null;
  const ra = Ge({}, [gt, ja, rn], Lc), Ri = St(["mi", "mo", "mn", "ms", "mtext"]);
  let hr = Ge({}, Ri);
  const Uo = St(["annotation-xml"]);
  let vr = Ge({}, Uo);
  const Mt = Ge({}, ["title", "style", "font", "a", "script"]);
  let bn = null;
  const jo = ["application/xhtml+xml", "text/html"], ec = "text/html";
  let pt = null, Ii = null;
  const tc = n.createElement("form"), Bo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, gr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ii && Ii === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = fn(S), bn = // eslint-disable-next-line unicorn/prefer-includes
    jo.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ec : S.PARSER_MEDIA_TYPE, pt = bn === "application/xhtml+xml" ? Lc : Xr, O = Ui(S, "ALLOWED_TAGS", R, {
      transform: pt
    }), I = Ui(S, "ALLOWED_ATTR", j, {
      transform: pt
    }), Ba = Ui(S, "ALLOWED_NAMESPACES", ra, {
      transform: Lc
    }), xi = Ui(S, "ADD_URI_SAFE_ATTR", Ni, {
      transform: pt,
      base: Ni
    }), ti = Ui(S, "ADD_DATA_URI_TAGS", Oi, {
      transform: pt,
      base: Oi
    }), Un = Ui(S, "FORBID_CONTENTS", pr, {
      transform: pt
    }), K = Ui(S, "FORBID_TAGS", fn({}), {
      transform: pt
    }), Q = Ui(S, "FORBID_ATTR", fn({}), {
      transform: pt
    }), zn = an(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? fn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, ve = S.ALLOW_UNKNOWN_PROTOCOLS || !1, xe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, Fe = S.WHOLE_DOCUMENT || !1, Dt = S.RETURN_DOM || !1, An = S.RETURN_DOM_FRAGMENT || !1, tt = S.RETURN_TRUSTED_TYPE || !1, Tt = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Mn = S.SANITIZE_NAMED_PROPS || !1, ia = S.KEEP_CONTENT !== !1, Ai = S.IN_PLACE || !1, T = S_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Jf, Li = typeof S.NAMESPACE == "string" ? S.NAMESPACE : rn, hr = Fc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Ri)
      // Default built-in map
    ), vr = Fc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Uo)
      // Default built-in map
    );
    const P = Fc(S, "CUSTOM_ELEMENT_HANDLING", () => tr(null));
    if (G = tr(null), an(P, "tagNameCheck") && Bo(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), an(P, "attributeNameCheck") && Bo(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), an(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), kt(G), $e && (oe = !1), An && (Dt = !0), zn && (O = Ge({}, Yf), I = tr(null), zn.html === !0 && (Ge(O, Wf), Ge(I, Xf)), zn.svg === !0 && (Ge(O, Rc), Ge(I, $c), Ge(I, ms)), zn.svgFilters === !0 && (Ge(O, Ic), Ge(I, $c), Ge(I, ms)), zn.mathMl === !0 && (Ge(O, Pc), Ge(I, Zf), Ge(I, ms))), V.tagCheck = null, V.attributeCheck = null, an(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : lr(S.ADD_TAGS) && (O === R && (O = fn(O)), Ge(O, S.ADD_TAGS, pt))), an(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : lr(S.ADD_ATTR) && (I === j && (I = fn(I)), Ge(I, S.ADD_ATTR, pt))), an(S, "ADD_FORBID_CONTENTS") && lr(S.ADD_FORBID_CONTENTS) && (Un === pr && (Un = fn(Un)), Ge(Un, S.ADD_FORBID_CONTENTS, pt)), ia && (O["#text"] = !0), Fe && Ge(O, ["html", "head", "body"]), O.table && (Ge(O, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = X;
      X = S.TRUSTED_TYPES_POLICY;
      try {
        se = U("");
      } catch (ce) {
        throw X = q, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (X = void 0, se = "") : (X === void 0 && (X = le()), X && typeof se == "string" && (se = U("")));
    St && St(S), Ii = S;
  }, Ho = Ge({}, [...Rc, ...Ic, ...C_]), Vo = Ge({}, [...Pc, ...k_]), nc = function(S, P, q) {
    return P.namespaceURI === rn ? S === "svg" : P.namespaceURI === gt ? S === "svg" && (q === "annotation-xml" || hr[q]) : !!Ho[S];
  }, ic = function(S, P, q) {
    return P.namespaceURI === rn ? S === "math" : P.namespaceURI === ja ? S === "math" && vr[q] : !!Vo[S];
  }, ac = function(S, P, q) {
    return P.namespaceURI === ja && !vr[q] || P.namespaceURI === gt && !hr[q] ? !1 : !Vo[S] && (Mt[S] || !Ho[S]);
  }, rc = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: Li,
      tagName: "template"
    });
    const q = Xr(S.tagName), ce = Xr(P.tagName);
    return Ba[S.namespaceURI] ? S.namespaceURI === ja ? nc(q, P, ce) : S.namespaceURI === gt ? ic(q, P, ce) : S.namespaceURI === rn ? ac(q, P, ce) : !!(bn === "application/xhtml+xml" && Ba[S.namespaceURI]) : !1;
  }, jn = function(S) {
    jr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (L(S), !D(S))
        throw Ca("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ko = function(S, P, q) {
    try {
      S.removeAttributeNode(P);
    } catch {
      try {
        S.removeAttribute(q);
      } catch {
      }
    }
  }, Ha = function(S) {
    Pi(S);
    const P = N(S);
    if (P) {
      const ce = [];
      Ea(P, (ue) => {
        jr(ce, ue);
      }), Ea(ce, (ue) => {
        try {
          L(ue);
        } catch {
        }
      });
    }
    const q = z(S);
    if (q)
      for (let ce = q.length - 1; ce >= 0; --ce) {
        const ue = q[ce], Ne = ue && ue.name;
        typeof Ne == "string" && Ko(S, ue, Ne);
      }
  }, Bn = function(S, P, q) {
    if (!q)
      try {
        q = P.getAttributeNode(S);
      } catch {
        q = null;
      }
    jr(t.removed, {
      attribute: q || null,
      from: P
    });
    try {
      q ? P.removeAttributeNode(q) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (Dt || An)
        try {
          jn(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, br = function(S) {
    const P = z(S);
    if (P)
      for (let q = P.length - 1; q >= 0; --q) {
        const ce = P[q], ue = ce && ce.name;
        typeof ue != "string" || I[pt(ue)] || Ko(S, ce, ue);
      }
  }, Pi = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop();
      Z(q) === un.element && br(q);
      const ue = N(q);
      if (ue)
        for (let Ne = ue.length - 1; Ne >= 0; --Ne)
          P.push(ue[Ne]);
    }
  }, Va = function(S, P) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, mr = function(S) {
    if (!ze)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop(), ce = Z(q);
      if (ce === un.processingInstruction || ce === un.comment && Bt(ep, q.data)) {
        try {
          L(q);
        } catch {
        }
        continue;
      }
      if (ce === un.element) {
        const Ne = q, Xe = pt(pe(q));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Va("for", Xe) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const ue = N(q);
      if (ue)
        for (let Ne = ue.length - 1; Ne >= 0; --Ne)
          P.push(ue[Ne]);
    }
  }, yr = function(S) {
    let P = null, q = null;
    if (Tt)
      S = "<remove></remove>" + S;
    else {
      const Ne = Vf(S, /^[\r\n\t ]+/);
      q = Ne && Ne[0];
    }
    bn === "application/xhtml+xml" && Li === rn && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = X ? U(S) : S;
    if (Li === rn)
      try {
        P = new p().parseFromString(ce, bn);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = me.createDocument(Li, "template", null);
      try {
        P.documentElement.innerHTML = aa ? se : ce;
      } catch {
      }
    }
    const ue = P.body || P.documentElement;
    return S && q && ue.insertBefore(n.createTextNode(q), ue.childNodes[0] || null), Li === rn ? Te.call(P, Fe ? "html" : "body")[0] : Fe ? P.documentElement : ue;
  }, Go = function(S) {
    const P = de ? de(S) : S.ownerDocument;
    return fe.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, oa = function(S) {
    return S = Br(S, lt, " "), S = Br(S, ht, " "), S = Br(S, nt, " "), S;
  }, Ka = function(S) {
    var P;
    S.normalize();
    const q = de ? de(S) : S.ownerDocument, ce = fe.call(
      q || S,
      S,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = ce.nextNode();
    for (; ue; )
      ue.data = oa(ue.data), ue = ce.nextNode();
    const Ne = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Ne && Ea(Ne, (Xe) => {
      Hn(Xe.content) && Ka(Xe.content);
    });
  }, Ga = function(S) {
    const P = re ? re(S) : null;
    return typeof P != "string" || pt(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== z(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== C(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    S.childNodes !== N(S);
  }, Hn = function(S) {
    if (!C || typeof S != "object" || S === null)
      return !1;
    try {
      return C(S) === un.documentFragment;
    } catch {
      return !1;
    }
  }, ni = function(S) {
    if (!C || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof C(S) == "number";
    } catch {
      return !1;
    }
  };
  function on(te, S, P) {
    te.length !== 0 && Ea(te, (q) => {
      q.call(t, S, P, Ii);
    });
  }
  const On = function(S, P) {
    return !!(ze && S.hasChildNodes() && !ni(S.firstElementChild) && Bt(Qf, S.textContent) && Bt(Qf, S.innerHTML) || ze && S.namespaceURI === rn && F_[P] && (ni(S.firstElementChild) || typeof S.textContent == "string" && Bt(D_[P], S.textContent)) || S.nodeType === un.processingInstruction || ze && S.nodeType === un.comment && Bt(ep, S.data));
  }, sa = function(S, P) {
    if (S instanceof RegExp)
      return Bt(S, P);
    if (S instanceof Function) {
      for (var q = arguments.length, ce = new Array(q > 2 ? q - 2 : 0), ue = 2; ue < q; ue++)
        ce[ue - 2] = arguments[ue];
      return !!S(P, ...ce);
    }
    return !1;
  }, qo = function(S, P, q) {
    if (!K[P] && Sr(P) && sa(G.tagNameCheck, P))
      return !1;
    if (ia && !Un[P]) {
      const ce = D(S), ue = N(S);
      if (ue && ce) {
        const Ne = ue.length;
        for (let Xe = Ne - 1; Xe >= 0; --Xe) {
          const ct = S === q ? E(ue[Xe], !0) : ue[Xe];
          ce.insertBefore(ct, A(S));
        }
      }
    }
    return jn(S), !0;
  }, _r = function(S, P, q, ce) {
    return S.length === 0 ? P : P === q || P === ce ? fn(P) : P;
  }, Wo = function(S, P) {
    return S === P || D(S) !== null ? !1 : (Ai && Pi(S), !0);
  }, Yo = function(S, P) {
    if (on(Le.beforeSanitizeElements, S, null), Wo(S, P))
      return !0;
    if (Ga(S))
      return jn(S), !0;
    const q = pt(pe(S));
    if (O = _r(Le.uponSanitizeElement, O, R, rt), on(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: O
    }), Wo(S, P))
      return !0;
    if (On(S, q))
      return jn(S), !0;
    if (K[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !O[q]) {
      const ue = qo(S, q, P);
      return ue === !1 && on(Le.afterSanitizeElements, S, null), ue;
    }
    if (Z(S) === un.element && !rc(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Bt(P_, S.innerHTML))
      return jn(S), !0;
    if ($e && S.nodeType === un.text) {
      const ue = oa(S.textContent);
      S.textContent !== ue && (jr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ue);
    }
    return on(Le.afterSanitizeElements, S, null), !1;
  }, wr = function(S, P, q) {
    if (Q[P] || Va(P, S) || dt && (P === "id" || P === "name") && (q in n || q in tc))
      return !1;
    const ce = I[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return oe && Bt(ut, P) || he && Bt(at, P) ? !0 : ce ? xi[P] || Bt(T, Br(q, H, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Kf(q, "data:") === 0 && ti[S] || ve && !Bt(Ft, Br(q, H, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Sr(S) && sa(G.tagNameCheck, S) && sa(G.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && G.allowCustomizedBuiltInElements && sa(G.tagNameCheck, q)
    );
  }, Xo = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Sr = function(S) {
    return !Xo[Xr(S)] && Bt(w, S);
  }, oc = function(S, P, q, ce) {
    if (X && typeof y == "object" && typeof y.getAttributeType == "function" && !q)
      switch (y.getAttributeType(S, P)) {
        case "TrustedHTML":
          return U(ce);
        case "TrustedScriptURL":
          return Y(ce);
      }
    return ce;
  }, sc = function(S, P, q, ce) {
    try {
      q ? S.setAttributeNS(q, P, ce) : S.setAttribute(P, ce), Ga(S) ? jn(S) : Hf(t.removed);
    } catch {
      Bn(P, S);
    }
  }, Zo = function(S) {
    on(Le.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || Ga(S))
      return;
    I = _r(Le.uponSanitizeAttribute, I, j, vt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let ce = P.length;
    const ue = pt(S.nodeName);
    for (; ce--; ) {
      const Ne = P[ce], Xe = Ne.name, ct = Ne.namespaceURI, wt = Ne.value, Et = pt(Xe), ii = wt;
      let At = Xe === "value" ? ii : g_(ii);
      if (q.attrName = Et, q.attrValue = At, q.keepAttr = !0, q.forceKeepAttr = void 0, on(Le.uponSanitizeAttribute, S, q), At = q.attrValue, Mn && (Et === "id" || Et === "name") && Kf(At, gn) !== 0 && (Bn(Xe, S, Ne), At = gn + At), ze && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, At)) {
        Bn(Xe, S, Ne);
        continue;
      }
      if (Et === "attributename" && Vf(At, "href")) {
        Bn(Xe, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Bn(Xe, S, Ne);
          continue;
        }
        if (!xe && Bt($_, At)) {
          Bn(Xe, S, Ne);
          continue;
        }
        if ($e && (At = oa(At)), !wr(ue, Et, At)) {
          Bn(Xe, S, Ne);
          continue;
        }
        At = oc(ue, Et, ct, At), At !== ii && sc(S, Xe, ct, At);
      }
    }
    on(Le.afterSanitizeAttributes, S, null);
  }, la = function(S) {
    let P = null;
    const q = Go(S);
    for (on(Le.beforeSanitizeShadowDOM, S, null); P = q.nextNode(); )
      if (on(Le.uponSanitizeShadowNode, P, null), Yo(P, S), Zo(P), Hn(P.content) && la(P.content), Z(P) === un.element) {
        const ce = M(P);
        Hn(ce) && (zt(ce), la(ce));
      }
    on(Le.afterSanitizeShadowDOM, S, null);
  }, zt = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const q = P.pop();
      if (q.shadow) {
        la(q.shadow);
        continue;
      }
      const ce = q.node, Ne = Z(ce) === un.element, Xe = N(ce);
      if (Xe)
        for (let ct = Xe.length - 1; ct >= 0; --ct)
          P.push({
            node: Xe[ct],
            shadow: null
          });
      if (Ne) {
        const ct = re ? re(ce) : null;
        if (typeof ct == "string" && pt(ct) === "template") {
          const wt = ce.content;
          Hn(wt) && P.push({
            node: wt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const ct = M(ce);
        Hn(ct) && P.push({
          node: null,
          shadow: ct
        }, {
          node: ct,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(te) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, q = null, ce = null, ue = null;
    if (aa = !te, aa && (te = "<!-->"), typeof te != "string" && !ni(te) && (te = w_(te), typeof te != "string"))
      throw Ca("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (O = rt, I = vt) : gr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (O = fn(O)), Le.uponSanitizeAttribute.length > 0 && (I = fn(I)), t.removed = [];
    const Ne = Ai && typeof te != "string" && ni(te);
    if (Ne) {
      mr(te);
      const wt = pe(te);
      if (typeof wt == "string") {
        const Et = pt(wt);
        if (!O[Et] || K[Et])
          throw Ha(te), Ca("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ga(te))
        throw Ha(te), Ca("root node is clobbered and cannot be sanitized in-place");
      try {
        zt(te);
      } catch (Et) {
        throw Ha(te), Et;
      }
    } else if (ni(te))
      P = yr("<!---->"), q = P.ownerDocument.importNode(te, !0), q.nodeType === un.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? P = q : P.appendChild(q), zt(q);
    else {
      if (!Dt && !$e && !Fe && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return X && tt ? U(te) : te;
      if (P = yr(te), !P)
        return Dt ? null : tt ? se : "";
    }
    P && Tt && jn(P.firstChild);
    const Xe = Ne ? te : P;
    try {
      const wt = Go(Xe);
      for (; ce = wt.nextNode(); )
        Yo(ce, Xe), Zo(ce), Hn(ce.content) && la(ce.content);
    } catch (wt) {
      throw Ne && (Ha(te), Ea(t.removed, (Et) => {
        Et.element && Pi(Et.element);
      })), wt;
    }
    if (Ne)
      return Ea(t.removed, (wt) => {
        wt.element && Pi(wt.element);
      }), $e && Ka(te), te;
    if (Dt) {
      if ($e && Ka(P), An)
        for (ue = Se.call(P.ownerDocument); P.firstChild; )
          ue.appendChild(P.firstChild);
      else
        ue = P;
      return (I.shadowroot || I.shadowrootmode) && (ue = Ke.call(i, ue, !0)), ue;
    }
    let ct = Fe ? P.outerHTML : P.innerHTML;
    return Fe && O["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(R_, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), $e && (ct = oa(ct)), X && tt ? U(ct) : ct;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gr(te), He = !0, rt = O, vt = I;
  }, t.clearConfig = function() {
    Ii = null, He = !1, rt = null, vt = null, X = _e, se = "";
  }, t.isValidAttribute = function(te, S, P) {
    Ii || gr({});
    const q = pt(te), ce = pt(S);
    return wr(q, ce, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && an(Le, te) && jr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (an(Le, te)) {
      if (S !== void 0) {
        const P = h_(Le[te], S);
        return P === -1 ? void 0 : v_(Le[te], P, 1)[0];
      }
      return Hf(Le[te]);
    }
  }, t.removeHooks = function(te) {
    an(Le, te) && (Le[te] = []);
  }, t.removeAllHooks = function() {
    Le = tp();
  }, t;
}
var gv = vv();
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc, np;
function U_() {
  if (np) return Dc;
  np = 1;
  var e = /["'&<>]/;
  Dc = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, o = "", u = 0, d = 0;
    for (u = a.index; u < i.length; u++) {
      switch (i.charCodeAt(u)) {
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
      d !== u && (o += i.substring(d, u)), d = u + 1, o += r;
    }
    return d !== u ? o + i.substring(d, u) : o;
  }
  return Dc;
}
var j_ = U_();
const Gs = /* @__PURE__ */ nd(j_);
function B_() {
  return globalThis._nc_l10n_locale;
}
function H_() {
  return B_().replaceAll(/_/g, "-");
}
function ql() {
  return globalThis._nc_l10n_language;
}
function V_(e) {
  const t = ql();
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
function bv(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function b(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, d = (A) => A, h = (u.sanitize ? gv.sanitize : d) || d, p = u.escape ? Gs : d, y = (A) => typeof A == "string" || typeof A == "number", k = (A, N, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
    if (N === void 0 || !(z in N))
      return p(M);
    const C = N[z];
    return y(C) ? p(`${C}`) : typeof C == "object" && y(C.value) ? (C.escape !== !1 ? Gs : d)(`${C.value}`) : p(M);
  });
  let L = (a?.bundle ?? bv(e)).translations[t] || t;
  return L = Array.isArray(L) ? L[0] : L, h(typeof r == "object" || o !== void 0 ? k(
    L,
    r,
    o
  ) : L);
}
function dn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", u = r?.bundle ?? bv(e), d = u.translations[o];
  if (typeof d < "u") {
    const h = d;
    if (Array.isArray(h)) {
      const p = u.pluralFunction(i);
      return b(e, h[p], a, i, r);
    }
  }
  return i === 1 ? b(e, t, a, i, r) : b(e, n, a, i, r);
}
function K_(e, t = ql()) {
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
class qs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? qs.GLOBAL_SCOPE_PERSISTENT : qs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class G_ {
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
    return new qs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function mv(e) {
  return new G_(e);
}
function q_() {
  try {
    return td("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Mc, ip;
function yv() {
  if (ip) return Mc;
  ip = 1;
  var e = {};
  return Mc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Mc;
}
var zc, ap;
function _v() {
  if (ap) return zc;
  ap = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return zc = {
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
  }, zc;
}
var ys = { exports: {} }, rp;
function W_() {
  return rp || (rp = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = _v(), r = yv();
    t = e.exports = {};
    const o = t.re = [], u = t.safeRe = [], d = t.src = [], h = t.safeSrc = [], p = t.t = {};
    let y = 0;
    const k = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [k, i]
    ], L = (N) => {
      for (const [D, M] of E)
        N = N.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return N;
    }, A = (N, D, M) => {
      const z = L(D), C = y++;
      r(N, C, D), p[N] = C, d[C] = D, h[C] = z, o[C] = new RegExp(D, M ? "g" : void 0), u[C] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${k}*`), A("MAINVERSION", `(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${d[p.PRERELEASEIDENTIFIER]}(?:\\.${d[p.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${d[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[p.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${k}+`), A("BUILD", `(?:\\+(${d[p.BUILDIDENTIFIER]}(?:\\.${d[p.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${d[p.MAINVERSION]}${d[p.PRERELEASE]}?${d[p.BUILD]}?`), A("FULL", `^${d[p.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${d[p.MAINVERSIONLOOSE]}${d[p.PRERELEASELOOSE]}?${d[p.BUILD]}?`), A("LOOSE", `^${d[p.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${d[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${d[p.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:${d[p.PRERELEASE]})?${d[p.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:${d[p.PRERELEASELOOSE]})?${d[p.BUILD]}?)?)?`), A("XRANGE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${d[p.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", d[p.COERCEPLAIN] + `(?:${d[p.PRERELEASE]})?(?:${d[p.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", d[p.COERCE], !0), A("COERCERTLFULL", d[p.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${d[p.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${d[p.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${d[p.LONECARET]}${d[p.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${d[p.LONECARET]}${d[p.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${d[p.GTLT]}\\s*(${d[p.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]}|${d[p.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${d[p.XRANGEPLAIN]})\\s+-\\s+(${d[p.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${d[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[p.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ys, ys.exports)), ys.exports;
}
var Uc, op;
function Y_() {
  if (op) return Uc;
  op = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Uc = (i) => i ? typeof i != "object" ? e : i : t, Uc;
}
var jc, sp;
function X_() {
  if (sp) return jc;
  sp = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return jc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, jc;
}
var Bc, lp;
function wv() {
  if (lp) return Bc;
  lp = 1;
  const e = yv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = _v(), { safeRe: i, t: a } = W_(), r = Y_(), { compareIdentifiers: o } = X_(), u = (h, p) => {
    const y = p.split(".");
    if (y.length > h.length)
      return !1;
    for (let k = 0; k < y.length; k++)
      if (o(h[k], y[k]) !== 0)
        return !1;
    return !0;
  };
  class d {
    constructor(p, y) {
      if (y = r(y), p instanceof d) {
        if (p.loose === !!y.loose && p.includePrerelease === !!y.includePrerelease)
          return p;
        p = p.version;
      } else if (typeof p != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof p}".`);
      if (p.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", p, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const k = p.trim().match(y.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!k)
        throw new TypeError(`Invalid Version: ${p}`);
      if (this.raw = p, this.major = +k[1], this.minor = +k[2], this.patch = +k[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      k[4] ? this.prerelease = k[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const L = +E;
          if (L >= 0 && L < n)
            return L;
        }
        return E;
      }) : this.prerelease = [], this.build = k[5] ? k[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(p) {
      if (e("SemVer.compare", this.version, this.options, p), !(p instanceof d)) {
        if (typeof p == "string" && p === this.version)
          return 0;
        p = new d(p, this.options);
      }
      return p.version === this.version ? 0 : this.compareMain(p) || this.comparePre(p);
    }
    compareMain(p) {
      return p instanceof d || (p = new d(p, this.options)), this.major < p.major ? -1 : this.major > p.major ? 1 : this.minor < p.minor ? -1 : this.minor > p.minor ? 1 : this.patch < p.patch ? -1 : this.patch > p.patch ? 1 : 0;
    }
    comparePre(p) {
      if (p instanceof d || (p = new d(p, this.options)), this.prerelease.length && !p.prerelease.length)
        return -1;
      if (!this.prerelease.length && p.prerelease.length)
        return 1;
      if (!this.prerelease.length && !p.prerelease.length)
        return 0;
      let y = 0;
      do {
        const k = this.prerelease[y], E = p.prerelease[y];
        if (e("prerelease compare", y, k, E), k === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (k === void 0)
          return -1;
        if (k === E)
          continue;
        return o(k, E);
      } while (++y);
    }
    compareBuild(p) {
      p instanceof d || (p = new d(p, this.options));
      let y = 0;
      do {
        const k = this.build[y], E = p.build[y];
        if (e("build compare", y, k, E), k === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (k === void 0)
          return -1;
        if (k === E)
          continue;
        return o(k, E);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(p, y, k) {
      if (p.startsWith("pre")) {
        if (!y && k === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const E = `-${y}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (p) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, k);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, k);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, k), this.inc("pre", y, k);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, k), this.inc("pre", y, k);
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
          const E = Number(k) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let L = this.prerelease.length;
            for (; --L >= 0; )
              typeof this.prerelease[L] == "number" && (this.prerelease[L]++, L = -2);
            if (L === -1) {
              if (y === this.prerelease.join(".") && k === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (y) {
            let L = [y, E];
            if (k === !1 && (L = [y]), u(this.prerelease, y)) {
              const A = this.prerelease[y.split(".").length];
              isNaN(A) && (this.prerelease = L);
            } else
              this.prerelease = L;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${p}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Bc = d, Bc;
}
var Hc, cp;
function Z_() {
  if (cp) return Hc;
  cp = 1;
  const e = wv();
  return Hc = (n, i) => new e(n, i).major, Hc;
}
var J_ = Z_();
const up = /* @__PURE__ */ nd(J_);
var Vc, dp;
function Q_() {
  if (dp) return Vc;
  dp = 1;
  const e = wv();
  return Vc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Vc;
}
var Kc, fp;
function e1() {
  if (fp) return Kc;
  fp = 1;
  const e = Q_();
  return Kc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Kc;
}
var t1 = e1();
const n1 = /* @__PURE__ */ nd(t1);
class i1 {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !n1(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : up(t.getVersion()) !== up(this.getVersion()) && console.warn(
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
class a1 {
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
let Vr = null;
function id() {
  return Vr !== null ? Vr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Vr = new i1(window._nc_event_bus) : Vr = window._nc_event_bus = new a1(), Vr);
}
function Sv(e, t) {
  id().subscribe(e, t);
}
function r1(e, t) {
  id().unsubscribe(e, t);
}
function _i(e, ...t) {
  id().emit(e, ...t);
}
const Cv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const o1 = Object.prototype.toString, s1 = (e) => o1.call(e) === "[object Object]", Za = () => {
}, l1 = /* @__PURE__ */ c1();
function c1() {
  var e, t, n;
  return Cv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Gc(e) {
  return Array.isArray(e) ? e : [e];
}
function u1(e, t, n) {
  return We(e, t, {
    ...n,
    immediate: !0
  });
}
const kv = Cv ? window : void 0;
function Zr(e) {
  var t;
  const n = mi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function cr(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = B(() => {
    const i = Gc(mi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return u1(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Zr(r))) !== null && i !== void 0 ? i : [kv].filter((r) => r != null),
      Gc(mi(n.value ? e[1] : e[0])),
      Gc(g(n.value ? e[2] : e[1])),
      mi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], u, d) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = s1(o) ? { ...o } : o, p = i.flatMap((y) => a.flatMap((k) => r.map((E) => t(y, k, E, h))));
    d(() => {
      p.forEach((y) => y());
    });
  }, { flush: "post" });
}
let pp = !1;
function hp(e, t, n = {}) {
  const { window: i = kv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: u = !1 } = n;
  if (!i) return u ? {
    stop: Za,
    cancel: Za,
    trigger: Za
  } : Za;
  if (l1 && !pp) {
    pp = !0;
    const N = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", Za, N)), i.document.documentElement.addEventListener("click", Za, N);
  }
  let d = !0;
  const h = (N) => mi(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((M) => M === N.target || N.composedPath().includes(M));
    {
      const M = Zr(D);
      return M && (N.target === M || N.composedPath().includes(M));
    }
  });
  function p(N) {
    const D = mi(N);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(N, D) {
    const M = mi(N), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((C) => C.el === D.target || D.composedPath().includes(C.el));
  }
  const k = (N) => {
    const D = Zr(e);
    if (N.target != null && !(!(D instanceof Element) && p(e) && y(e, N)) && !(!D || D === N.target || N.composedPath().includes(D))) {
      if ("detail" in N && N.detail === 0 && (d = !h(N)), !d) {
        d = !0;
        return;
      }
      t(N);
    }
  };
  let E = !1;
  const L = [
    cr(i, "click", (N) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), k(N));
    }, {
      passive: !0,
      capture: r
    }),
    cr(i, "pointerdown", (N) => {
      const D = Zr(e);
      d = !h(N) && !!(D && !N.composedPath().includes(D));
    }, { passive: !0 }),
    o && cr(i, "blur", (N) => {
      setTimeout(() => {
        const D = Zr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(i.document.activeElement) && t(N);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => L.forEach((N) => N());
  return u ? {
    stop: A,
    cancel: () => {
      d = !1;
    },
    trigger: (N) => {
      d = !0, k(N), d = !1;
    }
  } : A;
}
function d1(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, u = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), h = B(() => u.x - d.x), p = B(() => u.y - d.y), { max: y, abs: k } = Math, E = B(() => y(k(h.value), k(p.value)) >= n), L = /* @__PURE__ */ gh(!1), A = B(() => E.value ? k(h.value) > k(p.value) ? h.value > 0 ? "left" : "right" : p.value > 0 ? "up" : "down" : "none"), N = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, pe) => {
    u.x = Z, u.y = pe;
  }, M = (Z, pe) => {
    d.x = Z, d.y = pe;
  }, z = {
    passive: o,
    capture: !o
  }, C = (Z) => {
    L.value && a?.(Z, A.value), L.value = !1;
  }, re = [
    cr(e, "touchstart", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, X] = N(Z);
      D(pe, X), M(pe, X), r?.(Z);
    }, z),
    cr(e, "touchmove", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, X] = N(Z);
      M(pe, X), z.capture && !z.passive && Math.abs(h.value) > Math.abs(p.value) && Z.preventDefault(), !L.value && E.value && (L.value = !0), L.value && i?.(Z);
    }, z),
    cr(e, ["touchend", "touchcancel"], C, z)
  ];
  return {
    isSwiping: L,
    direction: A,
    coordsStart: u,
    coordsEnd: d,
    lengthX: h,
    lengthY: p,
    stop: () => re.forEach((Z) => Z())
  };
}
var f1 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Um(), r = zm(), o = /* @__PURE__ */ Ee([]), u = B(() => o.value.reduce((H, w) => (H[~~w.id] = w) && H, {})), d = B(() => o.value.length), h = /* @__PURE__ */ Ee(null), p = /* @__PURE__ */ Ee(!1), y = /* @__PURE__ */ Ee({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), k = /* @__PURE__ */ Ee({
      splitter: null,
      timeoutId: null
    }), E = B(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": p.value
    })), L = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, N = (H, w) => {
      let T = H.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: O, top: R } = T.getBoundingClientRect(), { clientX: I, clientY: j } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
        y.value.cursorOffset = i.horizontal ? j - R : I - O;
      }
      L(), y.value.mouseDown = !0, y.value.activeSplitter = w, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (H) => {
      y.value.mouseDown && (H.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        X(Z(H)), at("resize", { event: H }, !0);
      }));
    }, M = (H) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: H }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (H, w) => {
      "ontouchstart" in window && (H.preventDefault(), k.value.splitter === w ? (clearTimeout(k.value.timeoutId), k.value.timeoutId = null, C(H, w), k.value.splitter = null) : (k.value.splitter = w, k.value.timeoutId = setTimeout(() => k.value.splitter = null, 500))), y.value.dragging || at("splitter-click", {
        event: H,
        index: w
      }, !0);
    }, C = (H, w) => {
      if (at("splitter-dblclick", {
        event: H,
        index: w
      }, !0), i.maximizePanes) {
        let T = 0;
        o.value = o.value.map((O, R) => (O.size = R === w ? O.max : O.min, R !== w && (T += O.min), O)), o.value[w].size -= T, at("pane-maximize", {
          event: H,
          index: w,
          pane: o.value[w]
        }), at("resized", {
          event: H,
          index: w
        }, !0);
      }
    }, re = (H, w) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? H.key === "ArrowDown" : H.key === "ArrowRight", O = i.horizontal ? H.key === "ArrowUp" : H.key === "ArrowLeft";
      if (!T && !O) return;
      H.preventDefault(), y.value.activeSplitter = w;
      let R = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), I = ee(w) + o.value[w].size;
      se(Math.min(Math.max(I + R * i.keyboardStep, 0), 100)), at("resize", { event: H }, !0), at("resized", { event: H }, !0), y.value.activeSplitter = null;
    }, de = (H, w) => {
      let T = u.value[w];
      T && at("pane-click", {
        event: H,
        index: T.index,
        pane: T
      });
    }, Z = (H) => {
      let w = h.value.getBoundingClientRect(), { clientX: T, clientY: O } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
      return {
        x: T - (i.horizontal ? 0 : y.value.cursorOffset) - w.left,
        y: O - (i.horizontal ? y.value.cursorOffset : 0) - w.top
      };
    }, pe = (H) => {
      H = H[i.horizontal ? "y" : "x"];
      let w = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (H = w - H), H * 100 / w;
    }, X = (H) => {
      se(pe(H));
    }, se = (H) => {
      let w = y.value.activeSplitter;
      if (w === null || w >= o.value.length - 1) return;
      let T = {
        prevPanesSize: ee(w),
        nextPanesSize: J(w),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, O = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), R = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      H = Math.max(Math.min(H, R), O);
      let I = [w, w + 1], j = o.value[I[0]] || null, G = o.value[I[1]] || null, K = j !== null && j.max < 100 && H >= j.max + T.prevPanesSize, Q = G !== null && G.max < 100 && H <= 100 - (G.max + J(w + 1));
      if (K || Q) {
        K ? (j.size = j.max, G.size = Math.min(Math.max(100 - j.max - T.prevPanesSize - T.nextPanesSize, G.min), G.max)) : (j.size = Math.min(Math.max(100 - G.max - T.prevPanesSize - J(w + 1), j.min), j.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = _e(T, H);
        if (!V) return;
        ({ sums: T, panesToResize: I } = V), j = o.value[I[0]] || null, G = o.value[I[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(H - T.prevPanesSize - T.prevReachedMinPanes, j.min), j.max)), G !== null && (G.size = Math.min(Math.max(100 - H - T.nextPanesSize - T.nextReachedMinPanes, G.min), G.max));
    }, _e = (H, w) => {
      let T = y.value.activeSplitter, O = [T, T + 1];
      if (w < H.prevPanesSize + o.value[O[0]].min) {
        if (O[0] = F(T).index, H.prevReachedMinPanes = 0, O[0] < T && o.value.forEach((R, I) => {
          I > O[0] && I <= T && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), O[0] === void 0) return H.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((R, I) => {
          I > 0 && I <= T && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), o.value[O[1]].size = 100 - H.prevReachedMinPanes - o.value[0].min - H.prevPanesSize - H.nextPanesSize, null;
        H.prevPanesSize = ee(O[0]);
      }
      return w > 100 - H.nextPanesSize - o.value[O[1]].min && (O[1] = U(T).index, H.nextReachedMinPanes = 0, O[1] > T + 1 && o.value.forEach((R, I) => {
        I > T && I < O[1] && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), H.nextPanesSize = O[1] === void 0 ? 0 : J(O[1] - 1), O[1] === void 0) ? (H.nextReachedMinPanes = 0, o.value.forEach((R, I) => {
        I >= T + 1 && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), O[0] !== void 0 && (o.value[O[0]].size = 100 - H.prevPanesSize - J(O[0] - 1)), null) : {
        sums: H,
        panesToResize: O
      };
    }, ee = (H) => o.value.reduce((w, T, O) => w + (O < H ? T.size : 0), 0), J = (H) => o.value.reduce((w, T, O) => w + (O > H + 1 ? T.size : 0), 0), F = (H) => [...o.value].reverse().find((w) => w.index < H && w.size > w.min) || {}, U = (H) => o.value.find((w) => w.index > H + 1 && w.size > w.min) || {}, Y = () => {
      let H = Array.from(h.value?.children || []);
      for (let w of H) {
        let T = w.classList.contains("splitpanes__pane"), O = w.classList.contains("splitpanes__splitter");
        !T && !O && (w.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (H, w, T = !1) => {
      let O = H - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (I) => N(I, O), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => N(I, O)), R.onclick = (I) => z(I, O + 1), i.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => re(I, O))), R.ondblclick = (I) => C(I, O + 1), w.parentNode.insertBefore(R, w);
    }, ae = (H) => {
      H.onmousedown = null, H.onclick = null, H.ondblclick = null, H.onkeydown = null, H.remove();
    }, me = () => {
      let H = Array.from(h.value?.children || []);
      for (let T of H) T.className.includes("splitpanes__splitter") && ae(T);
      let w = 0;
      for (let T of H) T.className.includes("splitpanes__pane") && (!w && i.firstSplitter ? le(w, T, !0) : w && le(w, T), w++);
    }, fe = ({ uid: H, ...w }) => {
      let T = u.value[H];
      for (let [O, R] of Object.entries(w)) T[O] = R;
    }, Se = !1, Te = (H) => {
      let w = -1;
      Array.from(h.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && w++, T.isSameNode(H.el))), o.value.splice(w, 0, {
        ...H,
        index: w
      }), o.value.forEach((T, O) => T.index = O), p.value && !Se && (Se = !0, en(() => {
        me(), Le({ addedPane: o.value[w] }), at("pane-add", { pane: o.value[w] }), Se = !1;
      }));
    }, Ke = (H) => {
      let w = o.value.findIndex((O) => O.id === H);
      o.value[w].el = null;
      let T = o.value.splice(w, 1)[0];
      o.value.forEach((O, R) => O.index = R), en(() => {
        me(), at("pane-remove", { pane: T }), Le({ removedPane: {
          ...T
        } });
      });
    }, Le = (H = {}) => {
      !H.addedPane && !H.removedPane ? ht() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? nt(H) : lt(), p.value && at("resized");
    }, lt = () => {
      let H = 100 / d.value, w = 100, T = [], O = [];
      for (let R of o.value) R.size = Math.max(Math.min(H, R.max), R.min), w -= R.size, R.size >= R.max && T.push(R.id), R.size <= R.min && O.push(R.id);
      Math.abs(w) > 0.1 && ut(w, T, O);
    }, ht = () => {
      let H = 100, w = [], T = [], O = 0;
      for (let I of o.value) H -= I.size, I.givenSize !== null && O++, I.size >= I.max && w.push(I.id), I.size <= I.min && T.push(I.id);
      let R = 100;
      if (H > 0.1) {
        for (let I of o.value) I.givenSize === null && (I.size = Math.max(Math.min(H / (d.value - O), I.max), I.min)), R -= I.size;
        R > 0.1 && ut(R, w, T);
      }
    }, nt = ({ addedPane: H, removedPane: w } = {}) => {
      let T = o.value.reduce((K, Q) => K + (Q.givenSize === null ? 0 : Q.givenSize), 0), O = o.value.filter((K) => K.givenSize === null).length, R = O > 0 ? (100 - T) / O : 0, I = 0, j = [], G = [];
      for (let K of o.value) I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(I) < 0.1)) {
        I = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(R, K.max), K.min)), I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(I) > 0.1 && ut(I, j, G);
      }
    }, ut = (H, w, T) => {
      let O;
      O = H > 0 ? H / (d.value - w.length) : H / (d.value - T.length), o.value.forEach((R, I) => {
        if (H > 0 && !w.includes(R.id)) {
          let j = Math.max(Math.min(R.size + O, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        } else if (!T.includes(R.id)) {
          let j = Math.max(Math.min(R.size + O, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        }
      }), Math.abs(H) > 0.1 && p.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (H, w = void 0, T = !1) => {
      let O = w?.index ?? y.value.activeSplitter ?? null;
      n(H, {
        ...w,
        ...O !== null && { index: O },
        ...T && O !== null && {
          prevPane: o.value[O - +!!i.firstSplitter],
          nextPane: o.value[O + +!i.firstSplitter]
        },
        panes: o.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    We(() => i.firstSplitter, () => me()), We(() => i.horizontal, (H) => en(() => {
      n("direction-changed", {
        horizontal: H,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), ea(() => {
      Y(), me(), Le(), at("ready"), p.value = !0;
    }), fr(() => p.value = !1);
    let Ft = () => {
      let { class: H, ...w } = a;
      return nn("div", {
        ref: h,
        class: [E.value, H],
        ...w
      }, r.default?.());
    };
    return wn("panes", o), wn("indexedPanes", u), wn("horizontal", B(() => i.horizontal)), wn("requestUpdate", fe), wn("onPaneAdd", Te), wn("onPaneRemove", Ke), wn("onPaneClick", de), (H, w) => (m(), je(Yu(Ft)));
  }
}), p1 = {
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
    let t = e, n = Kt("requestUpdate"), i = Kt("onPaneAdd"), a = Kt("horizontal"), r = Kt("onPaneRemove"), o = Kt("onPaneClick"), u = za()?.uid, d = Kt("indexedPanes"), h = B(() => d.value[u]), p = /* @__PURE__ */ Ee(null), y = B(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), k.value);
    }), k = B(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = B(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), L = B(() => {
      let A = h.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return We(() => y.value, (A) => n({
      uid: u,
      size: A
    })), We(() => k.value, (A) => n({
      uid: u,
      min: A
    })), We(() => E.value, (A) => n({
      uid: u,
      max: A
    })), ea(() => {
      i({
        id: u,
        el: p.value,
        min: k.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), fr(() => r(u)), (A, N) => (m(), _("div", {
      ref_key: "paneEl",
      ref: p,
      class: "splitpanes__pane",
      onClick: N[0] ||= (D) => g(o)(D, A._.uid),
      style: vn(L.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, h1 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", v1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", g1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", b1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ad = 1024, Tv = ad / 2, Ws = (e) => document.documentElement.clientWidth < e, Ev = /* @__PURE__ */ Ee(Ws(ad)), Av = /* @__PURE__ */ Ee(Ws(Tv));
window.addEventListener("resize", () => {
  Ev.value = Ws(ad), Av.value = Ws(Tv);
}, { passive: !0 });
function zo() {
  return /* @__PURE__ */ mo(Ev);
}
function m1() {
  return /* @__PURE__ */ mo(Av);
}
class y1 {
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
    return b("", t, n, void 0, { bundle: this.bundle });
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
    return dn("", t, n, i, a, { bundle: this.bundle });
  }
}
class _1 {
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
    return this.setLanguage(ql().replace("-", "_"));
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
    const t = new y1((n) => K_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function w1() {
  return new _1();
}
const Ov = w1().detectLanguage().build(), Ct = (...e) => Ov.gettext(...e);
function ta(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== ql() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        Ov.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const S1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], C1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], k1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], T1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], E1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], A1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], O1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], x1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], N1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const L1 = /* @__PURE__ */ Symbol(""), [R1] = window.OC?.config?.version?.split(".") ?? [], xv = Number.parseInt(R1 ?? "35"), I1 = xv < 32, na = xv < 34, P1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function $1() {
  return Kt(P1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, F1 = { class: "button-vue__wrapper" }, D1 = { class: "button-vue__icon" }, M1 = { class: "button-vue__text" }, z1 = /* @__PURE__ */ $t({
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
    const n = e, i = t, { formBoxItemClass: a } = $1(), r = Kt(L1, null) !== null, o = B(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), u = B(() => o.value === "button" && typeof n.pressed == "boolean"), d = B(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = B(() => d.value.startsWith("tertiary")), p = B(() => n.alignment.split("-")[0]), y = B(() => n.alignment.includes("-")), k = Kt("NcPopover:trigger:attrs", () => ({}), !1), E = B(() => k()), L = B(() => {
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
          ...E.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(N) {
      u.value && i("update:pressed", !n.pressed), i("click", N);
    }
    return (N, D) => (m(), je(Yu(o.value), Yt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${p.value}`]: p.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(I1),
          "button-vue--legacy34": g(na)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, L.value, { onClick: A }), {
      default: Pe(() => [
        l("span", F1, [
          l("span", D1, [
            Me(N.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", M1, [
            Me(N.$slots, "default", {}, () => [
              ge(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Jn = /* @__PURE__ */ et(z1, [["__scopeId", "data-v-47ce59a3"]]), U1 = ["aria-hidden", "aria-label"], j1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, B1 = ["d"], H1 = ["innerHTML"], V1 = /* @__PURE__ */ $t({
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
    Py((a) => ({
      fb515064: n.value
    }));
    const t = e, n = B(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = B(() => {
      if (!t.svg || t.path)
        return;
      const a = gv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (m(), _("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: be(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (m(), _("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, H1)) : (m(), _("svg", j1, [
        l("path", { d: e.path }, null, 8, B1)
      ]))
    ], 10, U1));
  }
}), Wl = /* @__PURE__ */ et(V1, [["__scopeId", "data-v-aaedb1c3"]]);
G1();
function K1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), _i("csrf-token-update", { token: e, _internal: !0 }));
}
function G1() {
  Sv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || K1(e);
  });
}
mv("public").persist().build();
let Ja;
function vp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function q1() {
  if (Ja !== void 0)
    return Ja;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = vp(e, "data-user");
  return t === null ? (Ja = null, Ja) : (Ja = {
    uid: t,
    displayName: vp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ja);
}
var mt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(mt || {});
class W1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + mt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === mt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case mt.Debug:
          console.debug(this.formatMessage(n, mt.Debug, i), i);
          break;
        case mt.Info:
          console.info(this.formatMessage(n, mt.Info, i), i);
          break;
        case mt.Warn:
          console.warn(this.formatMessage(n, mt.Warn, i), i);
          break;
        case mt.Error:
          console.error(this.formatMessage(n, mt.Error, i), i);
          break;
        case mt.Fatal:
        default:
          console.error(this.formatMessage(n, mt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(mt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(mt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(mt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(mt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(mt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Y1(e) {
  return new W1(e);
}
class X1 {
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
    const t = q1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? mt.Warn, window._oc_debug && (t.context.level = mt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Z1() {
  return new X1(Y1);
}
const Fa = Z1().detectUser().setApp("@nextcloud/vue").build();
function J1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Nv = "missing-app-name";
try {
  Nv = "library";
} catch {
  Fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Q1 = Nv;
let e0 = "";
try {
  e0 = "0.1.0-alpha.174";
} catch {
  Fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Lv() {
  return Kt("appName", Q1);
}
const t0 = J1(() => {
  const e = td("core", "apps", []), t = Lv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), _u = V_();
ta(O1);
const n0 = /* @__PURE__ */ $t({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = zo();
    We(t, n), ea(() => {
      n(t.value);
    }), fr(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && _i("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (m(), je(g(Jn), {
      "aria-label": g(Ct)("Go back to the list"),
      class: be(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Pe(() => [
        Ae(g(Wl), {
          directional: "",
          path: g(h1)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), i0 = /* @__PURE__ */ et(n0, [["__scopeId", "data-v-a28923a1"]]), gp = mv("nextcloud").persist().build(), a0 = q_().theming?.name ?? "Nextcloud", r0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: i0,
    Pane: p1,
    Splitpanes: f1
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
      appName: Lv(),
      localizedAppName: t0(),
      isMobile: zo(),
      isRtl: _u
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
        return Fa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(a0), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = d1(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? _i("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && _i("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      gp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Fa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(gp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Fa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, o0 = {
  key: 0,
  class: "hidden-visually"
}, s0 = { class: "app-content-wrapper__list" }, l0 = {
  key: 1,
  class: "app-content-wrapper"
};
function c0(e, t, n, i, a, r) {
  const o = Be("NcAppContentDetailsToggle"), u = Be("Pane"), d = Be("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: be(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (m(), _("h1", o0, v(n.pageHeading), 1)) : $("", !0),
    e.$slots.list ? (m(), _(ne, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (m(), _("div", {
        key: 0,
        class: be(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (m(), je(o, {
          key: 0,
          onClick: ye(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : $("", !0),
        Ie(l("div", s0, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [sr, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : $("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (m(), _("div", l0, [
        Ae(d, {
          horizontal: n.layout === "horizontal-split",
          class: be(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Pe(() => [
            Ae(u, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Pe(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Ae(u, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Pe(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : $("", !0)
    ], 64)) : $("", !0),
    e.$slots.list ? $("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const u0 = /* @__PURE__ */ et(r0, [["render", c0], ["__scopeId", "data-v-51427d61"]]);
var Rv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ys = /* @__PURE__ */ Rv.join(","), Iv = typeof Element > "u", Ma = Iv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Xs = !Iv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Zs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Zs(t.parentNode));
  return o;
}, d0 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Pv = function(t, n, i) {
  if (Zs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ys));
  return n && Ma.call(t, Ys) && a.unshift(t), a = a.filter(i), a;
}, Js = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Zs(o, !1))
      if (o.tagName === "SLOT") {
        var u = o.assignedElements(), d = u.length ? u : o.children, h = Js(d, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var p = Ma.call(o, Ys);
        p && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), k = !Zs(y, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (y && k) {
          var E = Js(y === !0 ? o.children : y.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: o,
            candidates: E
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, $v = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Na = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || d0(t)) && !$v(t) ? 0 : t.tabIndex;
}, f0 = function(t, n) {
  var i = Na(t);
  return i < 0 && n && !$v(t) ? 0 : i;
}, p0 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Fv = function(t) {
  return t.tagName === "INPUT";
}, h0 = function(t) {
  return Fv(t) && t.type === "hidden";
}, v0 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, g0 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, b0 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Xs(t), i = function(u) {
    return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = g0(a, t.form);
  return !r || r === t;
}, m0 = function(t) {
  return Fv(t) && t.type === "radio";
}, y0 = function(t) {
  return m0(t) && !b0(t);
}, _0 = function(t) {
  var n, i = t && Xs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, u, d;
    for (r = !!((o = a) !== null && o !== void 0 && (u = o.ownerDocument) !== null && u !== void 0 && u.contains(a) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && a; ) {
      var h, p, y;
      i = Xs(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((p = a) !== null && p !== void 0 && (y = p.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, bp = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, w0 = function(t, n) {
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
  var o = getComputedStyle(t), u = o.visibility;
  if (u === "hidden" || u === "collapse")
    return !0;
  var d = Ma.call(t, "details>summary:first-of-type"), h = d ? t.parentElement : t;
  if (Ma.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var p = t; t; ) {
        var y = t.parentElement, k = Xs(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return bp(t);
        t.assignedSlot ? t = t.assignedSlot : !y && k !== t.ownerDocument ? t = k.host : t = y;
      }
      t = p;
    }
    if (_0(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return bp(t);
  return !1;
}, S0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return Ma.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Qs = function(t, n) {
  return !(n.disabled || h0(n) || w0(n, t) || // For a details element with a summary, the summary element gets the focus
  v0(n) || S0(n));
}, wu = function(t, n) {
  return !(y0(n) || Na(n) < 0 || !Qs(t, n));
}, C0 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Dv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, u = o ? a.scopeParent : a, d = f0(u, o), h = o ? Dv(a.candidates) : u;
    d === 0 ? o ? n.push.apply(n, h) : n.push(u) : i.push({
      documentOrder: r,
      tabIndex: d,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(p0).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, k0 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Js([t], n.includeContainer, {
    filter: wu.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: C0
  }) : i = Pv(t, n.includeContainer, wu.bind(null, n)), Dv(i);
}, T0 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Js([t], n.includeContainer, {
    filter: Qs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Pv(t, n.includeContainer, Qs.bind(null, n)), i;
}, Qa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, Ys) === !1 ? !1 : wu(n, t);
}, E0 = /* @__PURE__ */ Rv.concat("iframe:not([inert]):not([inert] *)").join(","), qc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, E0) === !1 ? !1 : Qs(n, t);
};
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function A0(e) {
  if (Array.isArray(e)) return Su(e);
}
function mp(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Mv(e)) || t) {
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
        e: function(d) {
          throw d;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, o = !0, u = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var d = n.next();
      return o = d.done, d;
    },
    e: function(d) {
      u = !0, r = d;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (u) throw r;
      }
    }
  };
}
function O0(e, t, n) {
  return (t = I0(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function x0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function N0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function _p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(n), !0).forEach(function(i) {
      O0(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yp(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function L0(e) {
  return A0(e) || x0(e) || Mv(e) || N0();
}
function R0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I0(e) {
  var t = R0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mv(e, t) {
  if (e) {
    if (typeof e == "string") return Su(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Su(e, t) : void 0;
  }
}
var gi = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = gi.getActiveTrap(t);
    n !== i && gi.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), gi.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = gi.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = gi.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, P0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, $0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, ao = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, F0 = function(t) {
  return ao(t) && !t.shiftKey;
}, D0 = function(t) {
  return ao(t) && t.shiftKey;
}, wp = function(t) {
  return setTimeout(t, 0);
}, Kr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, _s = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, M0 = [], rd = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || M0, r = _p({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: F0,
    isKeyBackward: D0
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
  }, u, d = function(F, U, Y) {
    return F && F[U] !== void 0 ? F[U] : r[Y || U];
  }, h = function(F, U) {
    var Y = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(le) {
      var ae = le.container, me = le.tabbableNodes;
      return ae.contains(F) || Y?.includes(ae) || me.find(function(fe) {
        return fe === F;
      });
    });
  }, p = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = U.hasFallback, le = Y === void 0 ? !1 : Y, ae = U.params, me = ae === void 0 ? [] : ae, fe = r[F];
    if (typeof fe == "function" && (fe = fe.apply(void 0, L0(me))), fe === !0 && (fe = void 0), !fe) {
      if (fe === void 0 || fe === !1)
        return fe;
      throw new Error("`".concat(F, "` was specified but was not a node, or did not return a node"));
    }
    var Se = fe;
    if (typeof fe == "string") {
      try {
        Se = i.querySelector(fe);
      } catch (Te) {
        throw new Error("`".concat(F, '` appears to be an invalid selector; error="').concat(Te.message, '"'));
      }
      if (!Se && !le)
        throw new Error("`".concat(F, "` as selector refers to no known node"));
    }
    return Se;
  }, y = function(F) {
    var U = F.activeElement;
    return U ? U.shadowRoot && U.shadowRoot.activeElement !== null ? y(U.shadowRoot) : U : null;
  }, k = function() {
    var F = p("initialFocus", {
      hasFallback: !0
    });
    if (F === !1)
      return !1;
    if (F === void 0 || F && !qc(F, r.tabbableOptions)) {
      var U = y(i);
      if (h(U) >= 0)
        F = U;
      else {
        var Y = o.tabbableGroups[0], le = Y && Y.firstTabbableNode;
        F = le || p("fallbackFocus");
      }
    } else F === null && (F = p("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var U = k0(F, r.tabbableOptions), Y = T0(F, r.tabbableOptions), le = U.length > 0 ? U[0] : void 0, ae = U.length > 0 ? U[U.length - 1] : void 0, me = Y.find(function(Te) {
        return Qa(Te);
      }), fe = Y.slice().reverse().find(function(Te) {
        return Qa(Te);
      }), Se = !!U.find(function(Te) {
        return Na(Te) > 0;
      });
      return {
        container: F,
        tabbableNodes: U,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: le,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ae,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: me,
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
        nextTabbableNode: function(Ke) {
          var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, lt = U.indexOf(Ke);
          return lt < 0 ? Le ? Y.slice(Y.indexOf(Ke) + 1).find(function(ht) {
            return Qa(ht);
          }) : Y.slice(0, Y.indexOf(Ke)).reverse().find(function(ht) {
            return Qa(ht);
          }) : U[lt + (Le ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(F) {
      return F.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !p("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(F) {
      return F.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, L = function(F) {
    if (F !== !1 && F !== y(document)) {
      if (!F || !F.focus) {
        L(k());
        return;
      }
      F.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = F, P0(F) && F.select();
    }
  }, A = function(F) {
    var U = p("setReturnFocus", {
      params: [F]
    });
    return U || (U === !1 ? !1 : F);
  }, N = function(F) {
    var U = F.target, Y = F.event, le = F.isBackward, ae = le === void 0 ? !1 : le;
    U = U || _s(Y), E();
    var me = null;
    if (o.tabbableGroups.length > 0) {
      var fe = h(U, Y), Se = fe >= 0 ? o.containerGroups[fe] : void 0;
      if (fe < 0)
        ae ? me = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : me = o.tabbableGroups[0].firstTabbableNode;
      else if (ae) {
        var Te = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.firstTabbableNode;
          return U === at;
        });
        if (Te < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Qa(U, r.tabbableOptions) && !Se.nextTabbableNode(U, !1)) && (Te = fe), Te >= 0) {
          var Ke = Te === 0 ? o.tabbableGroups.length - 1 : Te - 1, Le = o.tabbableGroups[Ke];
          me = Na(U) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else ao(Y) || (me = Se.nextTabbableNode(U, !1));
      } else {
        var lt = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.lastTabbableNode;
          return U === at;
        });
        if (lt < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Qa(U, r.tabbableOptions) && !Se.nextTabbableNode(U)) && (lt = fe), lt >= 0) {
          var ht = lt === o.tabbableGroups.length - 1 ? 0 : lt + 1, nt = o.tabbableGroups[ht];
          me = Na(U) >= 0 ? nt.firstTabbableNode : nt.firstDomTabbableNode;
        } else ao(Y) || (me = Se.nextTabbableNode(U));
      }
    } else
      me = p("fallbackFocus");
    return me;
  }, D = function(F) {
    var U = _s(F);
    if (!(h(U, F) >= 0)) {
      if (Kr(r.clickOutsideDeactivates, F)) {
        u.deactivate({
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
      Kr(r.allowOutsideClick, F) || F.preventDefault();
    }
  }, M = function(F) {
    var U = _s(F), Y = h(U, F) >= 0;
    if (Y || U instanceof Document)
      Y && (o.mostRecentlyFocusedNode = U);
    else {
      F.stopImmediatePropagation();
      var le, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (Na(o.mostRecentlyFocusedNode) > 0) {
          var me = h(o.mostRecentlyFocusedNode), fe = o.containerGroups[me].tabbableNodes;
          if (fe.length > 0) {
            var Se = fe.findIndex(function(Te) {
              return Te === o.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(o.recentNavEvent) ? Se + 1 < fe.length && (le = fe[Se + 1], ae = !1) : Se - 1 >= 0 && (le = fe[Se - 1], ae = !1));
          }
        } else
          o.containerGroups.some(function(Te) {
            return Te.tabbableNodes.some(function(Ke) {
              return Na(Ke) > 0;
            });
          }) || (ae = !1);
      else
        ae = !1;
      ae && (le = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), L(le || o.mostRecentlyFocusedNode || k());
    }
    o.recentNavEvent = void 0;
  }, z = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = F;
    var Y = N({
      event: F,
      isBackward: U
    });
    Y && (ao(F) && F.preventDefault(), L(Y));
  }, C = function(F) {
    (r.isKeyForward(F) || r.isKeyBackward(F)) && z(F, r.isKeyBackward(F));
  }, re = function(F) {
    $0(F) && Kr(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), u.deactivate());
  }, de = function(F) {
    var U = _s(F);
    h(U, F) >= 0 || Kr(r.clickOutsideDeactivates, F) || Kr(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      gi.activateTrap(a, u);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(U) {
        o.delayInitialFocusTimer = wp(function() {
          L(k()), U();
        });
      }) : L(k()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", re), F;
    }
  }, pe = function(F) {
    o.active && !o.paused && u._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), le = mp(F), ae;
    try {
      for (le.s(); !(ae = le.n()).done; ) {
        var me = ae.value;
        U.add(me);
        for (var fe = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot, Se = me; Se; ) {
          U.add(Se);
          var Te = Se.parentElement, Ke = [];
          Te ? Ke = Te.children : !Te && fe && (Ke = Se.getRootNode().children, Te = Se.getRootNode().host, fe = typeof ShadowRoot < "u" && Te.getRootNode() instanceof ShadowRoot);
          var Le = mp(Ke), lt;
          try {
            for (Le.s(); !(lt = Le.n()).done; ) {
              var ht = lt.value;
              Y.add(ht);
            }
          } catch (nt) {
            Le.e(nt);
          } finally {
            Le.f();
          }
          Se = Te;
        }
      }
    } catch (nt) {
      le.e(nt);
    } finally {
      le.f();
    }
    U.forEach(function(nt) {
      Y.delete(nt);
    }), o.adjacentElements = Y;
  }, X = function() {
    if (o.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", C, !0), i.removeEventListener("keydown", re), u;
  }, se = function(F) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var Y = F.some(function(ae) {
        var me = Array.from(ae.removedNodes);
        return me.some(function(fe) {
          return fe === U || typeof fe.contains == "function" && fe.contains(U);
        });
      });
      if (Y && o.containers.some(function(ae) {
        return ae?.isConnected;
      })) {
        E();
        var le = k();
        L(le);
      }
    }
  }, _e = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, ee = function() {
    _e && (_e.disconnect(), o.active && !o.paused && o.containers.map(function(F) {
      _e.observe(F, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return u = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(F) {
      if (o.active)
        return this;
      var U = d(F, "onActivate"), Y = d(F, "onPostActivate"), le = d(F, "checkCanFocusTrap"), ae = gi.getActiveTrap(a), me = !1;
      if (ae && !ae.paused) {
        var fe;
        (fe = ae._setSubtreeIsolation) === null || fe === void 0 || fe.call(ae, !1), me = !0;
      }
      try {
        le || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = y(i), U?.({
          trap: u
        });
        var Se = function() {
          le && E();
          var Le = function() {
            u._setSubtreeIsolation(!0), ee(), Y?.({
              trap: u
            });
          }, lt = Z();
          lt ? lt.then(Le) : Le();
        };
        if (le)
          return le(o.containers.concat()).then(Se, Se), this;
        Se();
      } catch (Ke) {
        if (ae === gi.getActiveTrap(a) && me) {
          var Te;
          (Te = ae._setSubtreeIsolation) === null || Te === void 0 || Te.call(ae, !0);
        }
        throw Ke;
      }
      return this;
    },
    deactivate: function(F) {
      if (!o.active)
        return this;
      var U = _p({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, F);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || u._setSubtreeIsolation(!1), o.alreadySilent.clear(), X(), o.active = !1, o.paused = !1, ee(), gi.deactivateTrap(a, u);
      var Y = d(U, "onDeactivate"), le = d(U, "onPostDeactivate"), ae = d(U, "checkCanReturnFocus"), me = d(U, "delayReturnFocus"), fe = d(U, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: u
      });
      var Se = function() {
        fe && L(A(o.nodeFocusedBeforeActivation)), le?.({
          trap: u
        });
      }, Te = function() {
        me && fe ? wp(Se) : Se();
      };
      return fe && ae ? (ae(A(o.nodeFocusedBeforeActivation)).then(Te, Te), this) : (Te(), this);
    },
    pause: function(F) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, F)) : this;
    },
    unpause: function(F) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, F)) : this;
    },
    updateContainerElements: function(F) {
      var U = [].concat(F).filter(Boolean);
      return o.containers = U.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && pe(o.containers), o.active && (E(), o.paused || u._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(u, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(F, U) {
        if (o.paused === F)
          return this;
        if (o.paused = F, F) {
          var Y = d(U, "onPause"), le = d(U, "onPostPause");
          Y?.({
            trap: u
          }), X(), u._setSubtreeIsolation(!1), ee(), le?.({
            trap: u
          });
        } else {
          var ae = d(U, "onUnpause"), me = d(U, "onPostUnpause");
          ae?.({
            trap: u
          });
          var fe = function() {
            E();
            var Te = function() {
              u._setSubtreeIsolation(!0), ee(), me?.({
                trap: u
              });
            }, Ke = Z();
            Ke ? Ke.then(Te) : Te();
          };
          fe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(F) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(U) {
          var Y;
          F ? r.isolateSubtrees === "aria-hidden" ? ((U.ariaHidden === "true" || ((Y = U.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && o.alreadySilent.add(U), U.setAttribute("aria-hidden", "true")) : ((U.inert || U.hasAttribute("inert")) && o.alreadySilent.add(U), U.setAttribute("inert", !0)) : o.alreadySilent.has(U) || (r.isolateSubtrees === "aria-hidden" ? U.removeAttribute("aria-hidden") : U.removeAttribute("inert"));
        });
      }
    }
  }), u.updateContainerElements(t), u;
};
const zv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), z0 = /* @__PURE__ */ $t({
  name: "NcAppNavigationList",
  provide() {
    return {
      [zv]: {
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
function U0(e, t, n, i, a, r) {
  return m(), _("ul", {
    ref: "list",
    class: be(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: be(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: vn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Uv = /* @__PURE__ */ et(z0, [["render", U0], ["__scopeId", "data-v-3e73e246"]]);
function Ao() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function j0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Ao()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Ao().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const jv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Bv = /* @__PURE__ */ Symbol.for("NcContent:selector");
ta(T1);
const B0 = { class: "app-navigation-toggle-wrapper" }, H0 = /* @__PURE__ */ $t({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Bh(e, "open"), n = B(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (m(), _("div", B0, [
      Ae(g(Jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Pe(() => [
          Ae(Wl, {
            path: g(b1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), V0 = /* @__PURE__ */ et(H0, [["__scopeId", "data-v-e8177cc7"]]), K0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], G0 = { class: "app-navigation__search" }, q0 = /* @__PURE__ */ $t({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Kt(
      jv,
      () => Sy(),
      !1
    ), a = Om("appNavigationContainer"), r = zo(), o = /* @__PURE__ */ Ee(!r.value), u = B(() => r.value && o.value);
    ym(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(u, () => {
      p();
    }), ea(() => {
      i(!0), Sv("toggle-navigation", h), _i("navigation-toggled", {
        open: o.value
      }), n = rd(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Ao(),
        escapeDeactivates: !1
      }), p();
    }), Fo(() => {
      i(!1), r1("toggle-navigation", h), n.deactivate();
    });
    function d(k) {
      if (o.value === k) {
        _i("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = k === void 0 ? !o.value : k;
      const E = getComputedStyle(document.body), L = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        _i("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * L);
    }
    function h({ open: k }) {
      return d(k);
    }
    function p() {
      u.value ? n.activate() : n.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (k, E) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: be(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(na)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: it(y, ["esc"])
      }, [
        l("div", G0, [
          Me(k.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: be(["app-navigation__body", { "app-navigation__body--no-list": !k.$slots.list }])
        }, [
          Me(k.$slots, "default", {}, void 0, !0)
        ], 2),
        k.$slots.list ? (m(), je(Uv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Pe(() => [
            Me(k.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : $("", !0),
        Me(k.$slots, "footer", {}, void 0, !0)
      ], 40, K0),
      Ae(V0, {
        open: o.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), W0 = /* @__PURE__ */ et(q0, [["__scopeId", "data-v-37908cd4"]]), Y0 = {
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
}, X0 = ["aria-hidden", "aria-label"], Z0 = ["fill", "width", "height"], J0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Q0 = { key: 0 };
function ew(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", J0, [
        n.title ? (m(), _("title", Q0, v(n.title), 1)) : $("", !0)
      ])
    ], 8, Z0))
  ], 16, X0);
}
const tw = /* @__PURE__ */ et(Y0, [["render", ew]]), nw = {
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
}, iw = ["aria-hidden", "aria-label"], aw = ["fill", "width", "height"], rw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ow = { key: 0 };
function sw(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", rw, [
        n.title ? (m(), _("title", ow, v(n.title), 1)) : $("", !0)
      ])
    ], 8, aw))
  ], 16, iw);
}
const lw = /* @__PURE__ */ et(nw, [["render", sw]]), cw = {
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
}, uw = ["aria-hidden", "aria-label"], dw = ["fill", "width", "height"], fw = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, pw = { key: 0 };
function hw(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", fw, [
        n.title ? (m(), _("title", pw, v(n.title), 1)) : $("", !0)
      ])
    ], 8, dw))
  ], 16, uw);
}
const Hv = /* @__PURE__ */ et(cw, [["render", hw]]), vw = {
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
}, gw = ["aria-hidden", "aria-label"], bw = ["fill", "width", "height"], mw = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, yw = { key: 0 };
function _w(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", mw, [
        n.title ? (m(), _("title", yw, v(n.title), 1)) : $("", !0)
      ])
    ], 8, bw))
  ], 16, gw);
}
const Vv = /* @__PURE__ */ et(vw, [["render", _w]]);
ta(C1);
const ww = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Hv,
    IconClose: Vv,
    NcButton: Jn
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
    return { isLegacy34: na };
  },
  data() {
    return {
      labelConfirm: Ct("Confirm changes"),
      labelCancel: Ct("Cancel changes")
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
}, Sw = ["placeholder"];
function Cw(e, t, n, i, a, r) {
  const o = Be("IconArrowRight"), u = Be("NcButton"), d = Be("IconClose");
  return m(), _("div", {
    class: be(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = ye((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = it(ye((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ye(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, Sw), [
        [ft, r.valueModel]
      ]),
      Ae(u, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ye(r.confirm, ["stop", "prevent"])
      }, {
        icon: Pe(() => [
          Ae(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Ae(u, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: ye(r.cancel, ["stop", "prevent"])
      }, {
        icon: Pe(() => [
          Ae(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const kw = /* @__PURE__ */ et(ww, [["render", Cw], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Yl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const od = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Kv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), Tw = {
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
}, Gv = {
  mixins: [Tw],
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
      from: Kv
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
}, Ew = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Wl
  },
  mixins: [Gv],
  inject: {
    isInSemanticMenu: {
      from: od,
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
      mdiCheck: v1,
      mdiChevronRight: g1
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
}, Aw = ["role"], Ow = ["aria-label", "disabled", "title", "type"], xw = { class: "action-button__longtext-wrapper" }, Nw = {
  key: 0,
  class: "action-button__name"
}, Lw = ["textContent"], Rw = {
  key: 2,
  class: "action-button__text"
}, Iw = ["textContent"], Pw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function $w(e, t, n, i, a, r) {
  const o = Be("NcIconSvgWrapper");
  return m(), _("li", {
    class: be(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Yt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...u) => r.handleClick && r.handleClick(...u))
    }), [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          class: be([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", xw, [
        e.name ? (m(), _("strong", Nw, v(e.name), 1)) : $("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, Lw)) : (m(), _("span", Rw, v(e.text), 1)),
        n.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(n.description)
        }, null, 8, Iw)) : $("", !0)
      ]),
      n.isMenu ? (m(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (m(), je(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", Pw)) : $("", !0),
      $("", !0)
    ], 16, Ow)
  ], 10, Aw);
}
const qv = /* @__PURE__ */ et(Ew, [["render", $w], ["__scopeId", "data-v-6c2daf4e"]]);
function Fw(e, t = {}) {
  const n = j0();
  We(e, () => {
    mi(t.disabled) || (mi(e) ? n.pause() : n.unpause());
  }), Fo(() => {
    n.unpause();
  });
}
const Dw = ["top", "right", "bottom", "left"], Sp = ["start", "end"], Cp = /* @__PURE__ */ Dw.reduce((e, t) => e.concat(t, t + "-" + Sp[0], t + "-" + Sp[1]), []), Oo = Math.min, Cu = Math.max, Mw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wv(e, t, n) {
  return Cu(e, Oo(t, n));
}
function Ua(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ki(e) {
  return e.split("-")[0];
}
function $n(e) {
  return e.split("-")[1];
}
function Yv(e) {
  return e === "x" ? "y" : "x";
}
function sd(e) {
  return e === "y" ? "height" : "width";
}
function bi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ld(e) {
  return Yv(bi(e));
}
function Xv(e, t, n) {
  n === void 0 && (n = !1);
  const i = $n(e), a = ld(e), r = sd(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = tl(o)), [o, tl(o)];
}
function zw(e) {
  const t = tl(e);
  return [el(e), t, el(t)];
}
function el(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const kp = ["left", "right"], Tp = ["right", "left"], Uw = ["top", "bottom"], jw = ["bottom", "top"];
function Bw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Tp : kp : t ? kp : Tp;
    case "left":
    case "right":
      return t ? Uw : jw;
    default:
      return [];
  }
}
function Hw(e, t, n, i) {
  const a = $n(e);
  let r = Bw(ki(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(el)))), r;
}
function tl(e) {
  const t = ki(e);
  return Mw[t] + e.slice(t.length);
}
function Vw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Zv(e) {
  return typeof e != "number" ? Vw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ro(e) {
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
function Ep(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = bi(t), o = ld(t), u = sd(o), d = ki(t), h = r === "y", p = i.x + i.width / 2 - a.width / 2, y = i.y + i.height / 2 - a.height / 2, k = i[u] / 2 - a[u] / 2;
  let E;
  switch (d) {
    case "top":
      E = {
        x: p,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: p,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  const L = $n(t);
  return L && (E[o] += k * (L === "end" ? 1 : -1) * (n && h ? -1 : 1)), E;
}
async function Kw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: o,
    elements: u,
    strategy: d
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: y = "floating",
    altBoundary: k = !1,
    padding: E = 0
  } = Ua(t, e), L = Zv(E), N = u[k ? y === "floating" ? "reference" : "floating" : y], D = ro(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(N))) == null || n ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: d
  })), M = y === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u.floating)), C = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, re = ro(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: M,
    offsetParent: z,
    strategy: d
  }) : M);
  return {
    top: (D.top - re.top + L.top) / C.y,
    bottom: (re.bottom - D.bottom + L.bottom) / C.y,
    left: (D.left - re.left + L.left) / C.x,
    right: (re.right - D.right + L.right) / C.x
  };
}
const Gw = 50, qw = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, u = o.detectOverflow ? o : {
    ...o,
    detectOverflow: Kw
  }, d = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: p,
    y
  } = Ep(h, i, d), k = i, E = 0;
  const L = {};
  for (let A = 0; A < r.length; A++) {
    const N = r[A];
    if (!N)
      continue;
    const {
      name: D,
      fn: M
    } = N, {
      x: z,
      y: C,
      data: re,
      reset: de
    } = await M({
      x: p,
      y,
      initialPlacement: i,
      placement: k,
      strategy: a,
      middlewareData: L,
      rects: h,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = z ?? p, y = C ?? y, L[D] = {
      ...L[D],
      ...re
    }, de && E < Gw && (E++, typeof de == "object" && (de.placement && (k = de.placement), de.rects && (h = de.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: p,
      y
    } = Ep(h, k, d)), A = -1);
  }
  return {
    x: p,
    y,
    placement: k,
    strategy: a,
    middlewareData: L
  };
}, Ww = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: o,
      elements: u,
      middlewareData: d
    } = t, {
      element: h,
      padding: p = 0
    } = Ua(e, t) || {};
    if (h == null)
      return {};
    const y = Zv(p), k = {
      x: n,
      y: i
    }, E = ld(a), L = sd(E), A = await o.getDimensions(h), N = E === "y", D = N ? "top" : "left", M = N ? "bottom" : "right", z = N ? "clientHeight" : "clientWidth", C = r.reference[L] + r.reference[E] - k[E] - r.floating[L], re = k[E] - r.reference[E], de = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let Z = de ? de[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(de))) && (Z = u.floating[z] || r.floating[L]);
    const pe = C / 2 - re / 2, X = Z / 2 - A[L] / 2 - 1, se = Oo(y[D], X), _e = Oo(y[M], X), ee = Z - A[L] - _e, J = Z / 2 - A[L] / 2 + pe, F = Wv(se, J, ee), U = !d.arrow && $n(a) != null && J !== F && r.reference[L] / 2 - (J < se ? se : _e) - A[L] / 2 < 0, Y = U ? J < se ? J - se : J - ee : 0;
    return {
      [E]: k[E] + Y,
      data: {
        [E]: F,
        centerOffset: J - F - Y,
        ...U && {
          alignmentOffset: Y
        }
      },
      reset: U
    };
  }
});
function Yw(e, t, n) {
  return (e ? [...n.filter((a) => $n(a) === e), ...n.filter((a) => $n(a) !== e)] : n.filter((a) => ki(a) === a)).filter((a) => e ? $n(a) === e || (t ? el(a) !== a : !1) : !0);
}
const Xw = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: o,
        placement: u,
        platform: d,
        elements: h
      } = t, {
        crossAxis: p = !1,
        alignment: y,
        allowedPlacements: k = Cp,
        autoAlignment: E = !0,
        ...L
      } = Ua(e, t), A = y !== void 0 || k === Cp ? Yw(y || null, E, k) : k, N = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, D = A[N];
      if (D == null)
        return {};
      if (u !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await d.detectOverflow(t, L), z = Xv(D, r, await (d.isRTL == null ? void 0 : d.isRTL(h.floating))), C = [M[ki(D)], M[z[0]], M[z[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: D,
        overflows: C
      }], de = A[N + 1];
      if (de)
        return {
          data: {
            index: N + 1,
            overflows: re
          },
          reset: {
            placement: de
          }
        };
      const Z = re.map((se) => {
        const _e = $n(se.placement);
        return [se.placement, _e && p ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((ee, J) => ee + J, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, _e) => se[1] - _e[1]), X = ((a = Z.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        $n(se[0]) ? 2 : 3
      ).every((_e) => _e <= 0))[0]) == null ? void 0 : a[0]) || Z[0][0];
      return X !== u ? {
        data: {
          index: N + 1,
          overflows: re
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Zw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: u,
        platform: d,
        elements: h
      } = t, {
        mainAxis: p = !0,
        crossAxis: y = !0,
        fallbackPlacements: k,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: L = "none",
        flipAlignment: A = !0,
        ...N
      } = Ua(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = ki(a), M = bi(u), z = ki(u) === u, C = await (d.isRTL == null ? void 0 : d.isRTL(h.floating)), re = k || (z || !A ? [tl(u)] : zw(u)), de = L !== "none";
      !k && de && re.push(...Hw(u, A, L, C));
      const Z = [u, ...re], pe = await d.detectOverflow(t, N), X = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (p && X.push(pe[D]), y) {
        const F = Xv(a, o, C);
        X.push(pe[F[0]], pe[F[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: X
      }], !X.every((F) => F <= 0)) {
        var _e, ee;
        const F = (((_e = r.flip) == null ? void 0 : _e.index) || 0) + 1, U = Z[F];
        if (U && (!(y === "alignment" ? M !== bi(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ae) => bi(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: se
            },
            reset: {
              placement: U
            }
          };
        let Y = (ee = se.filter((le) => le.overflows[0] <= 0).sort((le, ae) => le.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var J;
              const le = (J = se.filter((ae) => {
                if (de) {
                  const me = bi(ae.placement);
                  return me === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((me) => me > 0).reduce((me, fe) => me + fe, 0)]).sort((ae, me) => ae[1] - me[1])[0]) == null ? void 0 : J[0];
              le && (Y = le);
              break;
            }
            case "initialPlacement":
              Y = u;
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
}, Jw = /* @__PURE__ */ new Set(["left", "top"]);
async function Qw(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = ki(n), u = $n(n), d = bi(n) === "y", h = Jw.has(o) ? -1 : 1, p = r && d ? -1 : 1, y = Ua(t, e);
  let {
    mainAxis: k,
    crossAxis: E,
    alignmentAxis: L
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return u && typeof L == "number" && (E = u === "end" ? L * -1 : L), d ? {
    x: E * p,
    y: k * h
  } : {
    x: k * h,
    y: E * p
  };
}
const eS = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: u
      } = t, d = await Qw(t, e);
      return o === ((n = u.offset) == null ? void 0 : n.placement) && (i = u.arrow) != null && i.alignmentOffset ? {} : {
        x: a + d.x,
        y: r + d.y,
        data: {
          ...d,
          placement: o
        }
      };
    }
  };
}, tS = function(e) {
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
        crossAxis: u = !1,
        limiter: d = {
          fn: (M) => {
            let {
              x: z,
              y: C
            } = M;
            return {
              x: z,
              y: C
            };
          }
        },
        ...h
      } = Ua(e, t), p = {
        x: n,
        y: i
      }, y = await r.detectOverflow(t, h), k = bi(a), E = Yv(k);
      let L = p[E], A = p[k];
      const N = (M, z) => Wv(z + y[M === "y" ? "top" : "left"], z, z - y[M === "y" ? "bottom" : "right"]);
      o && (L = N(E, L)), u && (A = N(k, A));
      const D = d.fn({
        ...t,
        [E]: L,
        [k]: A
      });
      return {
        ...D,
        data: {
          x: D.x - n,
          y: D.y - i,
          enabled: {
            [E]: o,
            [k]: u
          }
        }
      };
    }
  };
}, nS = function(e) {
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
        ...u
      } = Ua(e, t), d = await a.detectOverflow(t, u), h = ki(n), p = $n(n), y = bi(n) === "y", {
        width: k,
        height: E
      } = i.floating;
      let L, A;
      h === "top" || h === "bottom" ? (L = h, A = p === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = h, L = p === "end" ? "top" : "bottom");
      const N = E - d.top - d.bottom, D = k - d.left - d.right, M = Oo(E - d[L], N), z = Oo(k - d[A], D), C = t.middlewareData.shift, re = !C;
      let de = M, Z = z;
      C != null && C.enabled.x && (Z = D), C != null && C.enabled.y && (de = N), re && !p && (y ? Z = k - 2 * Cu(d.left, d.right) : de = E - 2 * Cu(d.top, d.bottom)), await o({
        ...t,
        availableWidth: Z,
        availableHeight: de
      });
      const pe = await a.getDimensions(r.floating);
      return k !== pe.width || E !== pe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Cn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qn(e) {
  return Cn(e).getComputedStyle(e);
}
const Ap = Math.min, oo = Math.max, nl = Math.round;
function Jv(e) {
  const t = Qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = nl(n) !== a || nl(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Qi(e) {
  return eg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function Qv() {
  if (ws) return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ws) : navigator.userAgent;
}
function ei(e) {
  return e instanceof Cn(e).HTMLElement;
}
function Wi(e) {
  return e instanceof Cn(e).Element;
}
function eg(e) {
  return e instanceof Cn(e).Node;
}
function Op(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Cn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Xl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function iS(e) {
  return ["table", "td", "th"].includes(Qi(e));
}
function ku(e) {
  const t = /firefox/i.test(Qv()), n = Qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function tg() {
  return !/^((?!chrome|android).)*safari/i.test(Qv());
}
function cd(e) {
  return ["html", "body", "#document"].includes(Qi(e));
}
function ng(e) {
  return Wi(e) ? e : e.contextElement;
}
const ig = { x: 1, y: 1 };
function ur(e) {
  const t = ng(e);
  if (!ei(t)) return ig;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Jv(t);
  let o = (r ? nl(n.width) : n.width) / i, u = (r ? nl(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), u && Number.isFinite(u) || (u = 1), { x: o, y: u };
}
function xo(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), u = ng(e);
  let d = ig;
  t && (i ? Wi(i) && (d = ur(i)) : d = ur(e));
  const h = u ? Cn(u) : window, p = !tg() && n;
  let y = (o.left + (p && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, k = (o.top + (p && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, E = o.width / d.x, L = o.height / d.y;
  if (u) {
    const A = Cn(u), N = i && Wi(i) ? Cn(i) : i;
    let D = A.frameElement;
    for (; D && i && N !== A; ) {
      const M = ur(D), z = D.getBoundingClientRect(), C = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(C.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(C.paddingTop)) * M.y, y *= M.x, k *= M.y, E *= M.x, L *= M.y, y += z.x, k += z.y, D = Cn(D).frameElement;
    }
  }
  return { width: E, height: L, top: k, right: y + E, bottom: k + L, left: y, x: y, y: k };
}
function Yi(e) {
  return ((eg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zl(e) {
  return Wi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ag(e) {
  return xo(Yi(e)).left + Zl(e).scrollLeft;
}
function No(e) {
  if (Qi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Op(e) && e.host || Yi(e);
  return Op(t) ? t.host : t;
}
function rg(e) {
  const t = No(e);
  return cd(t) ? t.ownerDocument.body : ei(t) && Xl(t) ? t : rg(t);
}
function il(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = rg(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Cn(i);
  return a ? t.concat(r, r.visualViewport || [], Xl(i) ? i : []) : t.concat(i, il(i));
}
function xp(e, t, n) {
  return t === "viewport" ? ro((function(i, a) {
    const r = Cn(i), o = Yi(i), u = r.visualViewport;
    let d = o.clientWidth, h = o.clientHeight, p = 0, y = 0;
    if (u) {
      d = u.width, h = u.height;
      const k = tg();
      (k || !k && a === "fixed") && (p = u.offsetLeft, y = u.offsetTop);
    }
    return { width: d, height: h, x: p, y };
  })(e, n)) : Wi(t) ? ro((function(i, a) {
    const r = xo(i, !0, a === "fixed"), o = r.top + i.clientTop, u = r.left + i.clientLeft, d = ei(i) ? ur(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * d.x, height: i.clientHeight * d.y, x: u * d.x, y: o * d.y };
  })(t, n)) : ro((function(i) {
    const a = Yi(i), r = Zl(i), o = i.ownerDocument.body, u = oo(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), d = oo(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + ag(i);
    const p = -r.scrollTop;
    return Qn(o).direction === "rtl" && (h += oo(a.clientWidth, o.clientWidth) - u), { width: u, height: d, x: h, y: p };
  })(Yi(e)));
}
function Np(e) {
  return ei(e) && Qn(e).position !== "fixed" ? e.offsetParent : null;
}
function Lp(e) {
  const t = Cn(e);
  let n = Np(e);
  for (; n && iS(n) && Qn(n).position === "static"; ) n = Np(n);
  return n && (Qi(n) === "html" || Qi(n) === "body" && Qn(n).position === "static" && !ku(n)) ? t : n || (function(i) {
    let a = No(i);
    for (; ei(a) && !cd(a); ) {
      if (ku(a)) return a;
      a = No(a);
    }
    return null;
  })(e) || t;
}
function aS(e, t, n) {
  const i = ei(t), a = Yi(t), r = xo(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Qi(t) !== "body" || Xl(a)) && (o = Zl(t)), ei(t)) {
    const d = xo(t, !0);
    u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
  } else a && (u.x = ag(a));
  return { x: r.left + o.scrollLeft - u.x, y: r.top + o.scrollTop - u.y, width: r.width, height: r.height };
}
const rS = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, p) {
    const y = p.get(h);
    if (y) return y;
    let k = il(h).filter(((N) => Wi(N) && Qi(N) !== "body")), E = null;
    const L = Qn(h).position === "fixed";
    let A = L ? No(h) : h;
    for (; Wi(A) && !cd(A); ) {
      const N = Qn(A), D = ku(A);
      (L ? D || E : D || N.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = N : k = k.filter(((M) => M !== A)), A = No(A);
    }
    return p.set(h, k), k;
  })(t, this._c) : [].concat(n), o = [...r, i], u = o[0], d = o.reduce(((h, p) => {
    const y = xp(t, p, a);
    return h.top = oo(y.top, h.top), h.right = Ap(y.right, h.right), h.bottom = Ap(y.bottom, h.bottom), h.left = oo(y.left, h.left), h;
  }), xp(t, u, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = ei(n), r = Yi(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Qi(n) !== "body" || Xl(r)) && (o = Zl(n)), ei(n))) {
    const h = xo(n);
    u = ur(n), d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - o.scrollLeft * u.x + d.x, y: t.y * u.y - o.scrollTop * u.y + d.y };
}, isElement: Wi, getDimensions: function(e) {
  return ei(e) ? Jv(e) : e.getBoundingClientRect();
}, getOffsetParent: Lp, getDocumentElement: Yi, getScale: ur, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Lp, r = this.getDimensions;
  return { reference: aS(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Qn(e).direction === "rtl" }, oS = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: rS, ...n }, r = { ...a.platform, _c: i };
  return qw(e, t, { ...a, platform: r });
}, Xi = {
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
function Tu(e, t) {
  let n = Xi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Xi.themes[n.$extend] || {} : (n = null, i = Xi[t]) : n = null;
  while (n);
  return i;
}
function sS(e) {
  const t = [e];
  let n = Xi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Xi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Rp(e) {
  const t = [e];
  let n = Xi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Xi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Lo = !1;
if (typeof window < "u") {
  Lo = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Lo = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let og = !1;
typeof window < "u" && typeof navigator < "u" && (og = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const lS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ip = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Pp = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function $p(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Wc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const In = [];
let ka = null;
const Fp = {};
function Dp(e) {
  let t = Fp[e];
  return t || (t = Fp[e] = []), t;
}
let Eu = function() {
};
typeof window < "u" && (Eu = window.Element);
function Ve(e) {
  return function(t) {
    return Tu(t.theme, e);
  };
}
const Yc = "__floating-vue__popper", sg = () => /* @__PURE__ */ $t({
  name: "VPopper",
  provide() {
    return {
      [Yc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Yc]: { default: null }
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
      default: Ve("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ve("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ve("placement"),
      validator: (e) => lS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ve("delay")
    },
    distance: {
      type: [Number, String],
      default: Ve("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ve("skidding")
    },
    triggers: {
      type: Array,
      default: Ve("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ve("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ve("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ve("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ve("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ve("popperHideTriggers")
    },
    container: {
      type: [String, Object, Eu, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, Eu],
      default: Ve("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ve("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ve("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ve("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ve("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ve("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ve("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ve("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ve("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ve("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ve("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ve("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ve("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ve("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ve("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ve("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ve("flip")
    },
    shift: {
      type: Boolean,
      default: Ve("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ve("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ve("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ve("disposeTimeout")
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
      return (e = this[Yc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(eS({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Xw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(tS({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Zw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Ww({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: u } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? o = Math.abs(u) > a.reference.width / 2 : o = Math.abs(u) > a.reference.height / 2, {
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
            var u;
            if ((u = o.autoSize) != null && u.skip)
              return {};
            let d, h;
            return r.startsWith("top") || r.startsWith("bottom") ? d = a.reference.width : h = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = h != null ? `${h}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(nS({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await oS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ka && this.instantMove && ka.instantMove && ka !== this.parentPopper) {
        ka.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ka = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Wc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...il(this.$_referenceNode),
        ...il(this.$_popperNode)
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
        for (let n = 0; n < In.length; n++)
          t = In[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      In.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Rp(this.theme))
        Dp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Wc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, $p(In, this), In.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Rp(this.theme)) {
        const i = Dp(n);
        $p(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ka === this && (ka = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Wc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Ip, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ip, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Pp, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Pp, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Lo ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((o) => {
        const u = t[o];
        u && this.$_registerEventListeners(e, u, a);
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
      if (so >= e.left && so <= e.right && lo >= e.top && lo <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = so - Hi, i = lo - Vi, a = t.left + t.width / 2 - Hi + (t.top + t.height / 2) - Vi + t.width + t.height, r = Hi + n * a, o = Vi + i * a;
        return Ss(Hi, Vi, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        Ss(Hi, Vi, r, o, t.left, t.top, t.right, t.top) || // Top edge
        Ss(Hi, Vi, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        Ss(Hi, Vi, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (og) {
    const e = Lo ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Mp(t), e), document.addEventListener("touchend", (t) => zp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Mp(e), !0), window.addEventListener("click", (e) => zp(e, !1), !0);
  window.addEventListener("resize", dS);
}
function Mp(e, t) {
  for (let n = 0; n < In.length; n++) {
    const i = In[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function zp(e, t) {
  cS(e, t);
}
function cS(e, t) {
  const n = {};
  for (let i = In.length - 1; i >= 0; i--) {
    const a = In[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Up(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let u = a.parentPopper;
            for (; u; )
              n[u.randomId] = !0, u = u.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Up(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Up(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || uS(e, n) && !t;
}
function uS(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function dS() {
  for (let e = 0; e < In.length; e++)
    In[e].$_computePosition();
}
let Hi = 0, Vi = 0, so = 0, lo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Hi = so, Vi = lo, so = e.clientX, lo = e.clientY;
}, Lo ? {
  passive: !0
} : void 0);
function Ss(e, t, n, i, a, r, o, u) {
  const d = ((o - a) * (t - r) - (u - r) * (e - a)) / ((u - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((u - r) * (n - e) - (o - a) * (i - t));
  return d >= 0 && d <= 1 && h >= 0 && h <= 1;
}
const fS = {
  extends: sg()
}, ud = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function pS(e, t, n, i, a, r) {
  return m(), _("div", {
    ref: "reference",
    class: be(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", Ls(Co(e.slotData)))
  ], 2);
}
const hS = /* @__PURE__ */ ud(fS, [["render", pS]]);
function vS() {
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
let xs;
function Au() {
  Au.init || (Au.init = !0, xs = vS() !== -1);
}
var Jl = {
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
    Au(), en(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", xs && this.$el.appendChild(e), e.data = "about:blank", xs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!xs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const gS = /* @__PURE__ */ gm();
hm("data-v-b329ee4c");
const bS = {
  class: "resize-observer",
  tabindex: "-1"
};
vm();
const mS = /* @__PURE__ */ gS((e, t, n, i, a, r) => (m(), je("div", bS)));
Jl.render = mS;
Jl.__scopeId = "data-v-b329ee4c";
Jl.__file = "src/components/ResizeObserver.vue";
const lg = (e = "theme") => ({
  computed: {
    themeClass() {
      return sS(this[e]);
    }
  }
}), yS = /* @__PURE__ */ $t({
  name: "VPopperContent",
  components: {
    ResizeObserver: Jl
  },
  mixins: [
    lg()
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
}), _S = ["id", "aria-hidden", "tabindex", "data-popper-placement"], wS = {
  ref: "inner",
  class: "v-popper__inner"
}, SS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), CS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), kS = [
  SS,
  CS
];
function TS(e, t, n, i, a, r) {
  const o = Be("ResizeObserver");
  return m(), _("div", {
    id: e.popperId,
    ref: "popover",
    class: be(["v-popper__popper", [
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
    style: vn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = it((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: vn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", wS, [
        e.mounted ? (m(), _(ne, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (m(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (u) => e.$emit("resize", u))
          })) : $("", !0)
        ], 64)) : $("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: vn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, kS, 4)
    ], 4)
  ], 46, _S);
}
const cg = /* @__PURE__ */ ud(yS, [["render", TS]]), ug = {
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
let Ou = function() {
};
typeof window < "u" && (Ou = window.Element);
const ES = /* @__PURE__ */ $t({
  name: "VPopperWrapper",
  components: {
    Popper: hS,
    PopperContent: cg
  },
  mixins: [
    ug,
    lg("finalTheme")
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
      type: [String, Object, Ou, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Ou],
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
function AS(e, t, n, i, a, r) {
  const o = Be("PopperContent"), u = Be("Popper");
  return m(), je(u, Yt({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (d) => e.$emit("update:shown", d)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: Pe(({
      popperId: d,
      isShown: h,
      shouldMountContent: p,
      skipTransition: y,
      autoHide: k,
      show: E,
      hide: L,
      handleResize: A,
      onResize: N,
      classes: D,
      result: M
    }) => [
      Me(e.$slots, "default", {
        shown: h,
        show: E,
        hide: L
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: h,
        mounted: p,
        "skip-transition": y,
        "auto-hide": k,
        "handle-resize": A,
        classes: D,
        result: M,
        onHide: L,
        onResize: N
      }, {
        default: Pe(() => [
          Me(e.$slots, "popper", {
            shown: h,
            hide: L
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const dd = /* @__PURE__ */ ud(ES, [["render", AS]]), OS = {
  ...dd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...dd
});
({
  ...dd
});
sg();
const jp = Xi, xS = OS, NS = /* @__PURE__ */ $t({
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
}), LS = "_ncPopover_qgtYg", RS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: LS
}, dg = "nc-popover-9";
jp.themes[dg] = structuredClone(jp.themes.dropdown);
const IS = {
  name: "NcPopover",
  components: {
    Dropdown: xS,
    NcPopoverTriggerProvider: NS
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
      theme: dg
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
      return this.placement === "start" ? _u ? "right" : "left" : this.placement === "end" ? _u ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = rd(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Ao(),
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
        Fa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function PS(e, t, n, i, a, r) {
  const o = Be("NcPopoverTriggerProvider"), u = Be("Dropdown");
  return m(), je(u, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (d) => a.internalShown = d),
      t[1] || (t[1] = (d) => a.internalShown = d)
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
    popper: Pe((d) => [
      Me(e.$slots, "default", Ls(Co(d)))
    ]),
    default: Pe(() => [
      Ae(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Pe((d) => [
          Me(e.$slots, "trigger", Ls(Co(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const $S = {
  $style: RS
}, Bp = /* @__PURE__ */ et(IS, [["render", PS], ["__cssModules", $S]]), FS = {
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
}, DS = ["aria-hidden", "aria-label"], MS = ["fill", "width", "height"], zS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, US = { key: 0 };
function jS(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", zS, [
        n.title ? (m(), _("title", US, v(n.title), 1)) : $("", !0)
      ])
    ], 8, MS))
  ], 16, DS);
}
const BS = /* @__PURE__ */ et(FS, [["render", jS]]);
ta(S1);
function fd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === It)
        return !1;
      if (n.type === ne && !fd(n.children))
        return !1;
      if (n.type === Do && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const HS = ".focusable", VS = {
  name: "NcActions",
  components: {
    NcButton: Jn,
    NcPopover: Bp
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
      [od]: B(() => this.actionsMenuSemanticType === "menu"),
      [Kv]: this.closeMenu
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
      default: Ct("Actions")
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
      randomId: Yl()
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
    Fw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(HS);
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
    const e = [], t = (E, L) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          L.push(A);
          return;
        }
        A.type === ne && t(A.children, L);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], u = ["NcActionLink", "NcActionRouter"], d = a.some((E) => o.includes(this.getActionName(E))), h = a.some((E) => r.includes(this.getActionName(E))), p = a.some((E) => u.includes(this.getActionName(E)));
    d ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : p ? this.actionsMenuSemanticType = "navigation" : e.filter((L) => this.getActionName(L).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const L = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(L) ? nn("img", { class: "action-item__menutoggle__icon", src: L, alt: "" }) : nn("span", { class: ["icon", L] })), N = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? N : "";
      let M = E?.props?.title;
      this.forceName || M || (M = N);
      const z = { ...E?.props ?? {} }, C = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, nn(
        Jn,
        Yt(
          z,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || N,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: C,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (D ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => D,
          icon: () => A
        }
      );
    }, k = (E) => {
      const L = fd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? nn("span", { class: ["icon", this.defaultIcon] }) : nn(BS, { size: 20 }), A = `${this.randomId}-trigger`;
      return nn(
        Bp,
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
          trigger: () => nn(Jn, {
            id: A,
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
            icon: () => L,
            default: () => this.menuName
          }),
          default: () => nn("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            nn("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": A,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              E
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? nn(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(y),
        // render the rest within the popover menu
        a.length > 0 ? nn(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [k(a)]
        ) : null
      ]
    ) : nn(
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
        k(e)
      ]
    ));
  }
}, pd = /* @__PURE__ */ et(VS, [["__scopeId", "data-v-7206c1f1"]]), KS = ["aria-label"], GS = ["width", "height"], qS = ["fill"], WS = ["fill"], YS = { key: 0 }, XS = /* @__PURE__ */ $t({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = B(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (m(), _("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (m(), _("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, qS),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", YS, v(e.name), 1)) : $("", !0)
        ], 8, WS)
      ], 8, GS))
    ], 8, KS));
  }
}), fg = /* @__PURE__ */ et(XS, [["__scopeId", "data-v-cf399190"]]), xu = /* @__PURE__ */ $t({
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
}), ZS = {
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
}, JS = ["aria-hidden", "aria-label"], QS = ["fill", "width", "height"], eC = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, tC = { key: 0 };
function nC(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", eC, [
        n.title ? (m(), _("title", tC, v(n.title), 1)) : $("", !0)
      ])
    ], 8, QS))
  ], 16, JS);
}
const iC = /* @__PURE__ */ et(ZS, [["render", nC]]), aC = {
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
}, rC = ["aria-hidden", "aria-label"], oC = ["fill", "width", "height"], sC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, lC = { key: 0 };
function cC(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", sC, [
        n.title ? (m(), _("title", lC, v(n.title), 1)) : $("", !0)
      ])
    ], 8, oC))
  ], 16, rC);
}
const uC = /* @__PURE__ */ et(aC, [["render", cC]]);
ta(E1);
const dC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Jn,
    ChevronDown: tw,
    ChevronUp: lw
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
    return { isLegacy34: na };
  },
  computed: {
    labelButton() {
      return this.open ? Ct("Collapse menu") : Ct("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function fC(e, t, n, i, a, r) {
  const o = Be("ChevronUp"), u = Be("ChevronDown"), d = Be("NcButton");
  return m(), je(d, {
    class: be(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Pe(() => [
      n.open ? (m(), je(o, {
        key: 0,
        size: 20
      })) : (m(), je(u, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const pC = /* @__PURE__ */ et(dC, [["render", fC], ["__scopeId", "data-v-cfbd3794"]]);
ta(A1, N1);
const hC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: pd,
    NcActionButton: qv,
    NcAppNavigationIconCollapsible: pC,
    NcInputConfirmCancel: kw,
    NcLoadingIcon: fg,
    NcVNodes: xu,
    Pencil: iC,
    Undo: uC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: zv, default: null }
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
      default: () => Yl(),
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
      isMobile: zo(),
      isLegacy34: na
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
      return this.editLabel ? this.editLabel : Ct("Edit item");
    },
    undoButtonAriaLabel() {
      return Ct("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && _i("toggle-navigation", { open: !1 }));
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
}, vC = ["id"], gC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], bC = {
  key: 0,
  class: "editingContainer"
}, mC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, yC = { class: "app-navigation-entry__deleted-description" }, _C = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, wC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function SC(e, t, n, i, a, r) {
  const o = Be("NcLoadingIcon"), u = Be("NcInputConfirmCancel"), d = Be("Pencil"), h = Be("NcActionButton"), p = Be("Undo"), y = Be("NcActions"), k = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: n.id,
    class: be([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Yu(r.isRouterLink ? "router-link" : "NcVNodes"), Ls(Co({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Pe(({ href: E, navigate: L, isActive: A }) => [
        l("div", {
          ref: "entry",
          class: be(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...N) => r.requestHighlight && r.requestHighlight(...N)),
          onFocusin: t[5] || (t[5] = (...N) => r.requestHighlight && r.requestHighlight(...N))
        }, [
          n.undo ? $("", !0) : (m(), _("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...N) => r.handleBlur && r.handleBlur(...N)),
            onClick: (N) => r.onClick(N, L, E),
            onFocus: t[2] || (t[2] = (...N) => r.handleFocus && r.handleFocus(...N)),
            onKeydown: t[3] || (t[3] = it(ye((...N) => r.handleTab && r.handleTab(...N), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: be(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (m(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: be(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(n.name), 3),
            a.editingActive ? (m(), _("div", bC, [
              Ae(u, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (N) => a.editingValue = N),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : $("", !0)
          ], 40, gC)),
          n.undo ? (m(), _("div", mC, [
            l("div", yC, v(n.name), 1)
          ])) : $("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: be(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", _C, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : $("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (m(), je(y, {
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
              icon: Pe(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Pe(() => [
                n.editable && !a.editingActive ? (m(), je(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Pe(() => [
                    Ae(d, { size: 20 })
                  ]),
                  default: Pe(() => [
                    ge(" " + v(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                n.undo ? (m(), je(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Pe(() => [
                    Ae(p, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : $("", !0)
          ], 2)) : $("", !0),
          n.allowCollapse && e.$slots.default ? (m(), je(k, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: ye(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : $("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", wC, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : $("", !0)
  ], 10, vC);
}
const Xc = /* @__PURE__ */ et(hC, [["render", SC], ["__scopeId", "data-v-01bef41b"]]), Zc = /* @__PURE__ */ new WeakMap(), CC = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = hp(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = hp(e, a, Object.assign({ capture: n }, r));
    }
    Zc.set(e, i);
  },
  unmounted(e) {
    const t = Zc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Zc.delete(e);
  }
}, kC = {
  mounted(e) {
    e.focus();
  }
}, TC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", EC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Nu = "numeric", Lu = "ascii", Ru = "alpha", co = "asciinumeric", Jr = "alphanumeric", Iu = "domain", pg = "emoji", AC = "scheme", OC = "slashscheme", Jc = "whitespace";
function xC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ra(e, t, n) {
  t[Nu] && (t[co] = !0, t[Jr] = !0), t[Lu] && (t[co] = !0, t[Ru] = !0), t[co] && (t[Jr] = !0), t[Ru] && (t[Jr] = !0), t[Jr] && (t[Iu] = !0), t[pg] && (t[Iu] = !0);
  for (const i in t) {
    const a = xC(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function NC(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function pn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
pn.groups = {};
pn.prototype = {
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
    i = i || pn.groups;
    let a;
    return t && t.j ? a = t : (a = new pn(t), n && i && Ra(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || pn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, u = a.go(e);
    if (u ? (o = new pn(), Object.assign(o.j, u.j), o.jr.push.apply(o.jr, u.jr), o.jd = u.jd, o.t = u.t) : o = new pn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const d = Object.assign(NC(o.t, i), n);
          Ra(r, d, i);
        } else n && Ra(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), bt = (e, t, n, i, a) => e.tr(t, n, i, a), Hp = (e, t, n, i, a) => e.ts(t, n, i, a), ie = (e, t, n, i, a) => e.tt(t, n, i, a), di = "WORD", Pu = "UWORD", hg = "ASCIINUMERICAL", vg = "ALPHANUMERICAL", Ro = "LOCALHOST", $u = "TLD", Fu = "UTLD", Ns = "SCHEME", nr = "SLASH_SCHEME", hd = "NUM", Du = "WS", vd = "NL", uo = "OPENBRACE", fo = "CLOSEBRACE", al = "OPENBRACKET", rl = "CLOSEBRACKET", ol = "OPENPAREN", sl = "CLOSEPAREN", ll = "OPENANGLEBRACKET", cl = "CLOSEANGLEBRACKET", ul = "FULLWIDTHLEFTPAREN", dl = "FULLWIDTHRIGHTPAREN", fl = "LEFTCORNERBRACKET", pl = "RIGHTCORNERBRACKET", hl = "LEFTWHITECORNERBRACKET", vl = "RIGHTWHITECORNERBRACKET", gl = "FULLWIDTHLESSTHAN", bl = "FULLWIDTHGREATERTHAN", ml = "AMPERSAND", yl = "APOSTROPHE", _l = "ASTERISK", Gi = "AT", wl = "BACKSLASH", Sl = "BACKTICK", Cl = "CARET", Ia = "COLON", gd = "COMMA", kl = "DOLLAR", Wn = "DOT", Tl = "EQUALS", bd = "EXCLAMATION", _n = "HYPHEN", po = "PERCENT", El = "PIPE", Al = "PLUS", Ol = "POUND", ho = "QUERY", md = "QUOTE", gg = "FULLWIDTHMIDDLEDOT", yd = "SEMI", Yn = "SLASH", vo = "TILDE", xl = "UNDERSCORE", bg = "EMOJI", Nl = "SYM";
var mg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: vg,
  AMPERSAND: ml,
  APOSTROPHE: yl,
  ASCIINUMERICAL: hg,
  ASTERISK: _l,
  AT: Gi,
  BACKSLASH: wl,
  BACKTICK: Sl,
  CARET: Cl,
  CLOSEANGLEBRACKET: cl,
  CLOSEBRACE: fo,
  CLOSEBRACKET: rl,
  CLOSEPAREN: sl,
  COLON: Ia,
  COMMA: gd,
  DOLLAR: kl,
  DOT: Wn,
  EMOJI: bg,
  EQUALS: Tl,
  EXCLAMATION: bd,
  FULLWIDTHGREATERTHAN: bl,
  FULLWIDTHLEFTPAREN: ul,
  FULLWIDTHLESSTHAN: gl,
  FULLWIDTHMIDDLEDOT: gg,
  FULLWIDTHRIGHTPAREN: dl,
  HYPHEN: _n,
  LEFTCORNERBRACKET: fl,
  LEFTWHITECORNERBRACKET: hl,
  LOCALHOST: Ro,
  NL: vd,
  NUM: hd,
  OPENANGLEBRACKET: ll,
  OPENBRACE: uo,
  OPENBRACKET: al,
  OPENPAREN: ol,
  PERCENT: po,
  PIPE: El,
  PLUS: Al,
  POUND: Ol,
  QUERY: ho,
  QUOTE: md,
  RIGHTCORNERBRACKET: pl,
  RIGHTWHITECORNERBRACKET: vl,
  SCHEME: Ns,
  SEMI: yd,
  SLASH: Yn,
  SLASH_SCHEME: nr,
  SYM: Nl,
  TILDE: vo,
  TLD: $u,
  UNDERSCORE: xl,
  UTLD: Fu,
  UWORD: Pu,
  WORD: di,
  WS: Du
});
const ci = /[a-z]/, Gr = new RegExp("\\p{L}", "u"), Qc = new RegExp("\\p{Emoji}", "u"), ui = /\d/, eu = /\s/, Vp = "\r", tu = `
`, LC = "️", RC = "‍", nu = "￼";
let Cs = null, ks = null;
function IC(e = []) {
  const t = {};
  pn.groups = t;
  const n = new pn();
  Cs == null && (Cs = Kp(TC)), ks == null && (ks = Kp(EC)), ie(n, "'", yl), ie(n, "{", uo), ie(n, "}", fo), ie(n, "[", al), ie(n, "]", rl), ie(n, "(", ol), ie(n, ")", sl), ie(n, "<", ll), ie(n, ">", cl), ie(n, "（", ul), ie(n, "）", dl), ie(n, "「", fl), ie(n, "」", pl), ie(n, "『", hl), ie(n, "』", vl), ie(n, "＜", gl), ie(n, "＞", bl), ie(n, "&", ml), ie(n, "*", _l), ie(n, "@", Gi), ie(n, "`", Sl), ie(n, "^", Cl), ie(n, ":", Ia), ie(n, ",", gd), ie(n, "$", kl), ie(n, ".", Wn), ie(n, "=", Tl), ie(n, "!", bd), ie(n, "-", _n), ie(n, "%", po), ie(n, "|", El), ie(n, "+", Al), ie(n, "#", Ol), ie(n, "?", ho), ie(n, '"', md), ie(n, "/", Yn), ie(n, ";", yd), ie(n, "~", vo), ie(n, "_", xl), ie(n, "\\", wl), ie(n, "・", gg);
  const i = bt(n, ui, hd, {
    [Nu]: !0
  });
  bt(i, ui, i);
  const a = bt(i, ci, hg, {
    [co]: !0
  }), r = bt(i, Gr, vg, {
    [Jr]: !0
  }), o = bt(n, ci, di, {
    [Lu]: !0
  });
  bt(o, ui, a), bt(o, ci, o), bt(a, ui, a), bt(a, ci, a);
  const u = bt(n, Gr, Pu, {
    [Ru]: !0
  });
  bt(u, ci), bt(u, ui, r), bt(u, Gr, u), bt(r, ui, r), bt(r, ci), bt(r, Gr, r);
  const d = ie(n, tu, vd, {
    [Jc]: !0
  }), h = ie(n, Vp, Du, {
    [Jc]: !0
  }), p = bt(n, eu, Du, {
    [Jc]: !0
  });
  ie(n, nu, p), ie(h, tu, d), ie(h, nu, p), bt(h, eu, p), ie(p, Vp), ie(p, tu), bt(p, eu, p), ie(p, nu, p);
  const y = bt(n, Qc, bg, {
    [pg]: !0
  });
  ie(y, "#"), bt(y, Qc, y), ie(y, LC, y);
  const k = ie(y, RC);
  ie(k, "#"), bt(k, Qc, y);
  const E = [[ci, o], [ui, a]], L = [[ci, null], [Gr, u], [ui, r]];
  for (let A = 0; A < Cs.length; A++)
    ji(n, Cs[A], $u, di, E);
  for (let A = 0; A < ks.length; A++)
    ji(n, ks[A], Fu, Pu, L);
  Ra($u, {
    tld: !0,
    ascii: !0
  }, t), Ra(Fu, {
    utld: !0,
    alpha: !0
  }, t), ji(n, "file", Ns, di, E), ji(n, "mailto", Ns, di, E), ji(n, "http", nr, di, E), ji(n, "https", nr, di, E), ji(n, "ftp", nr, di, E), ji(n, "ftps", nr, di, E), Ra(Ns, {
    scheme: !0,
    ascii: !0
  }, t), Ra(nr, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, N) => A[0] > N[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const N = e[A][0], M = e[A][1] ? {
      [AC]: !0
    } : {
      [OC]: !0
    };
    N.indexOf("-") >= 0 ? M[Iu] = !0 : ci.test(N) ? ui.test(N) ? M[co] = !0 : M[Lu] = !0 : M[Nu] = !0, Hp(n, N, N, M);
  }
  return Hp(n, "localhost", Ro, {
    ascii: !0
  }), n.jd = new pn(Nl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, mg)
  };
}
function yg(e, t) {
  const n = PC(t.replace(/[A-Z]/g, (u) => u.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let u = e, d = null, h = 0, p = null, y = -1, k = -1;
    for (; o < i && (d = u.go(n[o])); )
      u = d, u.accepts() ? (y = 0, k = 0, p = u) : y >= 0 && (y += n[o].length, k++), h += n[o].length, r += n[o].length, o++;
    r -= y, o -= k, h -= y, a.push({
      t: p.t,
      // token type/name
      v: t.slice(r - h, r),
      // string value
      s: r - h,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function PC(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function ji(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let u = 0; u < o - 1; u++) {
    const d = t[u];
    e.j[d] ? r = e.j[d] : (r = new pn(i), r.jr = a.slice(), e.j[d] = r), e = r;
  }
  return r = new pn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Kp(e) {
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
const Io = {
  defaultProtocol: "http",
  events: null,
  format: Gp,
  formatHref: Gp,
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
function _d(e, t = null) {
  let n = Object.assign({}, Io);
  e && (n = Object.assign(n, e instanceof _d ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
_d.prototype = {
  o: Io,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Io[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Gp(e) {
  return e;
}
function _g(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
_g.prototype = {
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
  toObject(e = Io.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, u = e.get("className", n, t), d = e.get("target", n, t), h = e.get("rel", n, t), p = e.getObj("attributes", n, t), y = e.getObj("events", n, t);
    return o.href = i, u && (o.class = u), d && (o.target = d), h && (o.rel = h), p && Object.assign(o, p), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Ql(e, t) {
  class n extends _g {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const $C = Ql("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), qp = Ql("text"), FC = Ql("nl"), Ts = Ql("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Io.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Ro && e[1].t === Ia;
  }
}), yn = (e) => new pn(e);
function DC({
  groups: e
}) {
  const t = e.domain.concat([ml, _l, Gi, wl, Sl, Cl, kl, Tl, _n, hd, po, El, Al, Ol, Yn, Nl, vo, xl]), n = [yl, Ia, gd, Wn, bd, po, ho, md, yd, ll, cl, uo, fo, rl, al, ol, sl, ul, dl, fl, pl, hl, vl, gl, bl], i = [ml, yl, _l, wl, Sl, Cl, kl, Tl, _n, uo, fo, po, El, Al, Ol, ho, Yn, Nl, vo, xl], a = yn(), r = ie(a, vo);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = yn(), u = yn(), d = yn();
  Ue(a, e.domain, o), Ue(a, e.scheme, u), Ue(a, e.slashscheme, d), Ue(o, i, r), Ue(o, e.domain, o);
  const h = ie(o, Gi);
  ie(r, Gi, h), ie(u, Gi, h), ie(d, Gi, h);
  const p = ie(r, Wn);
  Ue(p, i, r), Ue(p, e.domain, r);
  const y = yn();
  Ue(h, e.domain, y), Ue(y, e.domain, y);
  const k = ie(y, Wn);
  Ue(k, e.domain, y);
  const E = yn($C);
  Ue(k, e.tld, E), Ue(k, e.utld, E), ie(h, Ro, E);
  const L = ie(y, _n);
  ie(L, _n, L), Ue(L, e.domain, y), Ue(E, e.domain, y), ie(E, Wn, k), ie(E, _n, L);
  const A = ie(o, _n), N = ie(o, Wn);
  ie(A, _n, A), Ue(A, e.domain, o), Ue(N, i, r), Ue(N, e.domain, o);
  const D = yn(Ts);
  Ue(N, e.tld, D), Ue(N, e.utld, D), Ue(D, e.domain, o), Ue(D, i, r), ie(D, Wn, N), ie(D, _n, A), ie(D, Gi, h);
  const M = ie(D, Ia), z = yn(Ts);
  Ue(M, e.numeric, z);
  const C = yn(Ts), re = yn();
  Ue(C, t, C), Ue(C, n, re), Ue(re, t, C), Ue(re, n, re), ie(D, Yn, C), ie(z, Yn, C);
  const de = ie(u, Ia), Z = ie(d, Ia), pe = ie(Z, Yn), X = ie(pe, Yn);
  Ue(u, e.domain, o), ie(u, Wn, N), ie(u, _n, A), Ue(d, e.domain, o), ie(d, Wn, N), ie(d, _n, A), Ue(de, e.domain, C), ie(de, Yn, C), ie(de, ho, C), Ue(X, e.domain, C), Ue(X, t, C), ie(X, Yn, C);
  const se = [
    [uo, fo],
    // {}
    [al, rl],
    // []
    [ol, sl],
    // ()
    [ll, cl],
    // <>
    [ul, dl],
    // （）
    [fl, pl],
    // 「」
    [hl, vl],
    // 『』
    [gl, bl]
    // ＜＞
  ];
  for (let _e = 0; _e < se.length; _e++) {
    const [ee, J] = se[_e], F = ie(C, ee);
    ie(re, ee, F);
    const U = yn(Ts);
    Ue(F, t, U);
    const Y = yn();
    Ue(F, n, Y), ie(F, J, C), Ue(U, t, U), Ue(U, n, Y), Ue(Y, t, U), Ue(Y, n, Y), ie(U, J, C), ie(Y, J, C);
  }
  return ie(a, Ro, D), ie(a, vd, FC), {
    start: a,
    tokens: mg
  };
}
function MC(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let u = e, d = null, h = null, p = 0, y = null, k = -1;
    for (; a < i && !(d = u.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (h = d || u.go(n[a].t)); )
      d = null, u = h, u.accepts() ? (k = 0, y = u) : k >= 0 && k++, a++, p++;
    if (k < 0)
      a -= p, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(iu(qp, t, o)), o = []), a -= k, p -= k;
      const E = y.t, L = n.slice(a - p, a);
      r.push(iu(E, t, L));
    }
  }
  return o.length > 0 && r.push(iu(qp, t, o)), r;
}
function iu(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Ht = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function zC() {
  Ht.scanner = IC(Ht.customSchemes);
  for (let e = 0; e < Ht.tokenQueue.length; e++)
    Ht.tokenQueue[e][1]({
      scanner: Ht.scanner
    });
  Ht.parser = DC(Ht.scanner.tokens);
  for (let e = 0; e < Ht.pluginQueue.length; e++)
    Ht.pluginQueue[e][1]({
      scanner: Ht.scanner,
      parser: Ht.parser
    });
  return Ht.initialized = !0, Ht;
}
function wg(e) {
  return Ht.initialized || zC(), MC(Ht.parser.start, e, yg(Ht.scanner.start, e));
}
wg.scan = yg;
function UC(e) {
  const t = new _d({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, HC), n = wg(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Gs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function jC(e) {
  return e.replace(/"/g, "&quot;");
}
function BC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${jC(i)}"`);
  }
  return t.join(" ");
}
function HC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${BC(t)}>${Gs(n)}</${e}>`;
}
const VC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = UC(t.text));
}, KC = ["title"], GC = /* @__PURE__ */ $t({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Kt("NcAppSidebar:header:ref");
    return (n, i) => Ie((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ge(v(e.name), 1)
    ], 8, KC)), [
      [g(VC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), qC = ["aria-labelledby"], WC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, YC = ["id"], XC = {
  key: 2,
  class: "empty-content__description"
}, ZC = {
  key: 3,
  class: "empty-content__action"
}, JC = /* @__PURE__ */ $t({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Yl();
    return (n, i) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (m(), _("div", WC, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : $("", !0),
      e.name !== "" || n.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          ge(v(e.name), 1)
        ], !0)
      ], 8, YC)) : $("", !0),
      e.description !== "" || n.$slots.description ? (m(), _("p", XC, [
        Me(n.$slots, "description", {}, () => [
          ge(v(e.description), 1)
        ], !0)
      ])) : $("", !0),
      n.$slots.action ? (m(), _("div", ZC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : $("", !0)
    ], 8, qC));
  }
}), QC = /* @__PURE__ */ et(JC, [["__scopeId", "data-v-8609a4c1"]]), ek = {
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
}, tk = ["aria-hidden", "aria-label"], nk = ["fill", "width", "height"], ik = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, ak = { key: 0 };
function rk(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ik, [
        n.title ? (m(), _("title", ak, v(n.title), 1)) : $("", !0)
      ])
    ], 8, nk))
  ], 16, tk);
}
const ok = /* @__PURE__ */ et(ek, [["render", rk]]), sk = {
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
}, lk = ["aria-hidden", "aria-label"], ck = ["fill", "width", "height"], uk = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, dk = { key: 0 };
function fk(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", uk, [
        n.title ? (m(), _("title", dk, v(n.title), 1)) : $("", !0)
      ])
    ], 8, ck))
  ], 16, lk);
}
const pk = /* @__PURE__ */ et(sk, [["render", fk]]), hk = {
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
}, vk = ["aria-hidden", "aria-label"], gk = ["fill", "width", "height"], bk = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, mk = { key: 0 };
function yk(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", bk, [
        n.title ? (m(), _("title", mk, v(n.title), 1)) : $("", !0)
      ])
    ], 8, gk))
  ], 16, vk);
}
const _k = /* @__PURE__ */ et(hk, [["render", yk]]), wk = ["aria-selected", "tabindex"], Sk = /* @__PURE__ */ $t({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ jm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Bh(e, "selected"), n = /* @__PURE__ */ Ee(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (m(), _("button", {
      class: be(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(na),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: be([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        l("span", {
          class: be([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(xu, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Pe(() => [
              l("span", {
                class: be([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: be([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Ae(xu, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Pe(() => [
              l("span", {
                class: be([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: be(a.$style.sidebarTabsButton__name)
      }, v(e.tab.name), 3)
    ], 10, wk));
  }
}), Ck = "_sidebarTabsButton_q3kBA", kk = "_sidebarTabsButton_legacy_KQ4d1", Tk = "_sidebarTabsButton_selected_Pjayf", Ek = "_sidebarTabsButton_animatedHighlight_uvp-0", Ak = "_sidebarTabsButton__name_rlQsL", Ok = "_sidebarTabsButton__icon_QzZg4", xk = "_sidebarTabsButton__iconLayer_ZkZan", Nk = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Lk = "_sidebarTabsButton__icon_pop_IA0By", Rk = "_sidebarTabsButton__legacyIcon_QhcNW", Ik = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Ck,
  sidebarTabsButton_legacy: kk,
  sidebarTabsButton_selected: Tk,
  sidebarTabsButton_animatedHighlight: Ek,
  sidebarTabsButton__name: Ak,
  sidebarTabsButton__icon: Ok,
  sidebarTabsButton__iconLayer: xk,
  sidebarTabsButton__iconLayer_hidden: Nk,
  sidebarTabsButton__icon_pop: Lk,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: Rk
}, Pk = {
  $style: Ik
}, $k = /* @__PURE__ */ et(Sk, [["__cssModules", Pk]]), Fk = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: $k
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
      isLegacy34: na,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [H_()]) : t.order - n.order), this.updateActive();
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
}, Dk = { class: "app-sidebar-tabs" };
function Mk(e, t, n, i, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return m(), _("div", Dk, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: be(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = it(ye((...u) => r.focusPreviousTab && r.focusPreviousTab(...u), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = it(ye((...u) => r.focusNextTab && r.focusNextTab(...u), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = it(ye((...u) => r.focusActiveTabContent && r.focusActiveTabContent(...u), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = it(ye((...u) => r.focusFirstTab && r.focusFirstTab(...u), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = it(ye((...u) => r.focusLastTab && r.focusLastTab(...u), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = it(ye((...u) => r.focusFirstTab && r.focusFirstTab(...u), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = it(ye((...u) => r.focusLastTab && r.focusLastTab(...u), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...u) => r.handleHighlight && r.handleHighlight(...u)),
      onPointerleave: t[8] || (t[8] = (...u) => r.hideHighlight && r.hideHighlight(...u)),
      onFocusin: t[9] || (t[9] = (...u) => r.handleHighlight && r.handleHighlight(...u)),
      onFocusout: t[10] || (t[10] = (...u) => r.onHighlightFocusOut && r.onHighlightFocusOut(...u))
    }, [
      a.highlightEnabled ? (m(), _("div", {
        key: 0,
        class: be(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: vn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : $("", !0),
      (m(!0), _(ne, null, ke(a.tabs, (u) => (m(), je(o, {
        id: `tab-button-${u.id}`,
        key: u.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${u.id}`,
        selected: a.activeTab === u.id,
        animatedHighlight: a.highlightEnabled,
        tab: u,
        "onUpdate:selected": (d) => r.setActive(u.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : $("", !0),
    l("div", {
      class: be(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const zk = /* @__PURE__ */ et(Fk, [["render", Mk], ["__scopeId", "data-v-74190d2a"]]);
ta(k1);
const Uk = {
  name: "NcAppSidebar",
  components: {
    NcActions: pd,
    NcAppSidebarHeader: GC,
    NcAppSidebarTabs: zk,
    NcButton: Jn,
    NcLoadingIcon: fg,
    NcEmptyContent: QC,
    IconArrowRight: Hv,
    IconClose: Vv,
    IconDockRight: ok,
    IconStar: pk,
    IconStarOutline: _k
  },
  directives: {
    Focus: kC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: CC
  },
  inject: {
    ncContentSelector: {
      from: Bv,
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
    const e = /* @__PURE__ */ Ee(null);
    return wn("NcAppSidebar:header:ref", e), {
      uid: Yl(),
      isMobile: m1(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Ct("Change name"),
      closeTranslated: Ct("Close sidebar"),
      favoriteTranslated: Ct("Favorite"),
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
    isSlotPopulated: fd,
    t: Ct,
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
      this.focusTrap || (this.focusTrap = rd([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Ao(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Fa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, jk = ["aria-labelledby"], Bk = { class: "app-sidebar-header__info" }, Hk = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Vk = { class: "app-sidebar-header__name-container" }, Kk = { class: "app-sidebar-header__mainname-container" }, Gk = ["placeholder", "value"], qk = ["title"], Wk = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Yk(e, t, n, i, a, r) {
  const o = Be("IconDockRight"), u = Be("NcButton"), d = Be("NcLoadingIcon"), h = Be("IconStar"), p = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), k = Be("IconArrowRight"), E = Be("NcActions"), L = Be("IconClose"), A = Be("NcAppSidebarTabs"), N = Be("NcEmptyContent"), D = pf("focus"), M = pf("click-outside");
  return m(), je(Oy, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Pe(() => [
      Ie(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = it((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (m(), je(Eh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(u, Yt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (z) => e.$emit("update:open", !0))
          }), {
            icon: Pe(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                Ae(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : $("", !0),
        l("header", {
          class: be(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (m(), je(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", Bk, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (m(), _("div", {
                key: 0,
                class: be(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: vn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...z) => r.onFigureClick && r.onFigureClick(...z)),
                onKeydown: t[2] || (t[2] = it((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : $("", !0),
              l("div", {
                class: be(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (m(), _("div", Hk, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (m(), je(u, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ye(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Pe(() => [
                        n.starLoading ? (m(), je(d, { key: 0 })) : a.isStarred ? (m(), je(h, {
                          key: 1,
                          size: 20
                        })) : (m(), je(p, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : $("", !0)
                  ], !0)
                ])) : $("", !0),
                l("div", Vk, [
                  l("div", Kk, [
                    Ie(Ae(y, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: ye(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [sr, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ie((m(), _("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ye((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Ie(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = it(ye((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, Gk), [
                        [D]
                      ]),
                      Ae(u, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Pe(() => [
                          Ae(k, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : $("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (m(), je(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Pe(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : $("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      ge(v(n.subname), 1)
                    ], !0)
                  ], 8, qk)) : $("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Ae(u, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ye(r.closeSidebar, ["prevent"])
          }, {
            icon: Pe(() => [
              Ae(L, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (m(), _("div", Wk, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : $("", !0)
        ], 2),
        Ie(Ae(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Pe(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [sr, !n.loading]
        ]),
        n.loading ? (m(), je(N, { key: 1 }, {
          icon: Pe(() => [
            Ae(d, { size: 64 })
          ]),
          _: 1
        })) : $("", !0)
      ], 40, jk), [
        [sr, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const Xk = /* @__PURE__ */ et(Uk, [["render", Yk], ["__scopeId", "data-v-c2c6820b"]]), Zk = {
  name: "NcActionLink",
  mixins: [Gv],
  inject: {
    isInSemanticMenu: {
      from: od,
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
}, Jk = ["role"], Qk = ["download", "href", "aria-label", "target", "title", "role"], eT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, tT = { class: "action-link__name" }, nT = ["textContent"], iT = ["textContent"], aT = {
  key: 2,
  class: "action-link__text"
};
function rT(e, t, n, i, a, r) {
  return m(), _("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("a", {
      download: n.download,
      href: n.href,
      "aria-label": e.ariaLabel,
      target: n.target,
      title: n.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: be(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (m(), _("span", eT, [
        l("strong", tT, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, nT)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, iT)) : (m(), _("span", aT, v(e.text), 1)),
      $("", !0)
    ], 8, Qk)
  ], 8, Jk);
}
const au = /* @__PURE__ */ et(Zk, [["render", rT], ["__scopeId", "data-v-32f01b7a"]]);
ta(x1);
const oT = `<!--
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
`, sT = `<!--
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
`, lT = { class: "vue-skip-actions__container" }, cT = { class: "vue-skip-actions__headline" }, uT = { class: "vue-skip-actions__buttons" }, dT = /* @__PURE__ */ $t({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    wn(jv, u), wn(Bv, "#content-vue"), wn("appName", B(() => t.appName));
    const n = zo(), i = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(), r = B(() => a.value === "navigation" ? sT : oT);
    Ph(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function o() {
      _i("toggle-navigation", { open: !0 }), en(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function u(d) {
      i.value = d, a.value || (a.value = "navigation");
    }
    return (d, h) => (m(), _("div", {
      id: "content-vue",
      class: be(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(na) }]])
    }, [
      (m(), je(Eh, { to: "#skip-actions" }, [
        l("div", lT, [
          l("div", cT, v(g(Ct)("Keyboard navigation help")), 1),
          l("div", uT, [
            Ie(Ae(Jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ye(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (p) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (p) => a.value = "navigation")
            }, {
              default: Pe(() => [
                ge(v(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [sr, i.value]
            ]),
            Ae(Jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (p) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (p) => a.value = "content")
            }, {
              default: Pe(() => [
                ge(v(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(Ae(Wl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [sr, !g(n)]
          ])
        ])
      ])),
      Me(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fT = /* @__PURE__ */ et(dT, [["__scopeId", "data-v-d13dcb98"]]), pT = { class: "library-shelf-tree-node" }, hT = ["aria-expanded", "aria-label"], vT = ["href"], gT = { class: "library-shelf-summary-title" }, bT = { dir: "auto" }, mT = { class: "library-muted" }, yT = { dir: "auto" }, _T = {
  key: 1,
  role: "status",
  class: "library-muted"
}, wT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, ST = {
  key: 3,
  class: "library-shelf-tree"
}, CT = ["disabled"], kT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(!1), r = /* @__PURE__ */ Ee(!1), o = /* @__PURE__ */ Ee([]), u = /* @__PURE__ */ Ee(!1), d = /* @__PURE__ */ Ee(0);
    async function h() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await p();
    }
    async function p() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), k = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!k.ok) throw new Error("Shelf children request failed");
          const E = await k.json(), L = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...L), u.value = E?.hasMore === !0, d.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, i.value = !u.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, k) => {
      const E = Be("ShelfTreeNode", !0);
      return m(), _("li", pT, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, v(n.value ? "−" : "+"), 9, hT)) : $("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", gT, [
            l("strong", null, [
              l("bdi", bT, v(e.node.label), 1)
            ]),
            l("span", null, v(g(dn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", mT, [
            l("bdi", yT, v(e.node.path), 1)
          ])
        ], 8, vT),
        a.value ? (m(), _("small", _T, v(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", wT, v(g(b)("library", "Could not load folders.")), 1)) : $("", !0),
        n.value && o.value.length ? (m(), _("ul", ST, [
          (m(!0), _(ne, null, ke(o.value, (L) => (m(), je(E, {
            key: L.id,
            node: L,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : $("", !0),
        n.value && u.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: p
        }, v(g(b)("library", "Load more folders")), 9, CT)) : $("", !0)
      ]);
    };
  }
}, TT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, ET = { id: "library-sidebar-filters-heading" }, AT = ["aria-label"], OT = ["value"], xT = ["name", "value"], NT = ["value"], LT = ["value"], RT = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, IT = ["href"], PT = ["title"], $T = ["placeholder"], FT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, DT = { value: "" }, MT = ["value"], zT = { class: "library-publisher-filter" }, UT = { for: "library-publisher-search" }, jT = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], BT = ["value"], HT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, VT = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, KT = ["id", "aria-selected"], GT = ["onClick"], qT = { class: "library-publication-filter" }, WT = { for: "library-publication-search" }, YT = ["placeholder", "aria-expanded"], XT = ["value"], ZT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, JT = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, QT = ["onClick"], eE = { class: "library-year-filter" }, tE = { for: "library-year-search" }, nE = ["placeholder", "aria-expanded"], iE = ["value"], aE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, rE = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, oE = ["onClick"], sE = { class: "library-creator-filter" }, lE = { for: "library-creator-search" }, cE = ["placeholder", "title", "aria-expanded"], uE = ["value"], dE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, fE = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, pE = ["onClick"], hE = { class: "library-tag-filter" }, vE = { for: "library-tag-search" }, gE = ["placeholder", "aria-expanded"], bE = ["value"], mE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, yE = ["onClick"], _E = { value: "" }, wE = ["value"], SE = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, CE = ["href"], kE = { value: "" }, TE = ["value"], EE = { class: "library-folder-filter" }, AE = { for: "library-folder-search" }, OE = ["placeholder", "title", "aria-expanded"], xE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, NE = ["onClick"], LE = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, RE = ["href"], IE = { value: "" }, PE = ["value"], $E = { value: "" }, FE = ["value"], DE = { class: "library-subject-filter" }, ME = { for: "library-subject-search" }, zE = ["placeholder", "title", "aria-expanded"], UE = ["value"], jE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, BE = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, HE = ["onClick"], VE = { class: "library-classification-filter" }, KE = { for: "library-classification-search" }, GE = ["placeholder", "title", "aria-expanded"], qE = ["value"], WE = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, YE = ["onClick"], XE = { value: "" }, ZE = { value: "1" }, JE = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, QE = ["href"], e2 = {
  type: "submit",
  class: "button primary"
}, t2 = ["href"], n2 = ["href"], i2 = ["lang", "dir"], a2 = ["aria-label"], r2 = ["href", "aria-label", "title", "onClick"], o2 = ["title"], s2 = ["href"], l2 = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, c2 = { class: "library-review-header" }, u2 = { class: "library-muted library-catalogue-eyebrow" }, d2 = { id: "library-review-heading" }, f2 = ["aria-label"], p2 = ["href", "aria-current", "onClick"], h2 = ["aria-label"], v2 = ["name", "value"], g2 = {
  type: "submit",
  class: "button secondary"
}, b2 = ["aria-busy"], m2 = { key: 0 }, y2 = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, _2 = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, w2 = { class: "library-metadata-review-workbench-copy" }, S2 = { class: "library-muted library-catalogue-eyebrow" }, C2 = ["title"], k2 = {
  key: 0,
  class: "library-metadata-review-card"
}, T2 = {
  class: "library-bidi-human",
  dir: "auto"
}, E2 = { class: "library-muted" }, A2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, O2 = { class: "library-metadata-review-fields" }, x2 = {
  class: "library-bidi-human",
  dir: "auto"
}, N2 = {
  class: "library-bidi-human",
  dir: "auto"
}, L2 = {
  class: "library-bidi-human",
  dir: "auto"
}, R2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, I2 = {
  class: "library-bidi-human",
  dir: "auto"
}, P2 = {
  class: "library-bidi-human",
  dir: "auto"
}, $2 = ["action"], F2 = ["value"], D2 = ["value"], M2 = {
  type: "submit",
  class: "button secondary"
}, z2 = { class: "library-metadata-review-actions" }, U2 = ["href"], j2 = ["href"], B2 = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, H2 = ["href"], V2 = ["aria-label"], K2 = ["onClick"], G2 = {
  class: "library-bidi-human",
  dir: "auto"
}, q2 = {
  key: 0,
  class: "library-muted"
}, W2 = {
  class: "library-bidi-human",
  dir: "auto"
}, Y2 = {
  key: 1,
  class: "library-scan-error"
}, X2 = {
  class: "library-bidi-human",
  dir: "auto"
}, Z2 = ["onClick"], J2 = ["href", "onClick"], Q2 = ["aria-label"], eA = ["href"], tA = {
  key: 1,
  class: "library-muted"
}, nA = { key: 0 }, iA = ["href"], aA = {
  key: 3,
  class: "library-muted"
}, rA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, oA = { class: "library-home-header" }, sA = { class: "library-muted library-catalogue-eyebrow" }, lA = { id: "library-home-heading" }, cA = ["aria-label"], uA = ["aria-label"], dA = ["href", "aria-label", "onClick"], fA = ["title"], pA = { class: "library-empty-actions" }, hA = ["href"], vA = ["href"], gA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, bA = { id: "library-continue-heading" }, mA = { class: "library-muted" }, yA = ["href"], _A = {
  key: 0,
  class: "library-home-card-row"
}, wA = ["aria-label", "onClick"], SA = { class: "library-cover-frame" }, CA = ["src"], kA = { class: "library-cover-summary" }, TA = ["onClick"], EA = { dir: "auto" }, AA = {
  key: 0,
  class: "library-cover-creator"
}, OA = { dir: "auto" }, xA = ["href", "onClick"], NA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, LA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, RA = { id: "library-recent-heading" }, IA = { class: "library-muted" }, PA = ["href"], $A = {
  key: 0,
  class: "library-home-card-row"
}, FA = ["aria-label", "onClick"], DA = { class: "library-cover-frame" }, MA = ["src"], zA = { class: "library-cover-summary" }, UA = ["onClick"], jA = { dir: "auto" }, BA = {
  key: 0,
  class: "library-cover-creator"
}, HA = { dir: "auto" }, VA = ["href", "onClick"], KA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, GA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, qA = { id: "library-home-shelves-heading" }, WA = { class: "library-muted" }, YA = ["href"], XA = ["aria-label"], ZA = ["href"], JA = { dir: "auto" }, QA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, eO = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, tO = { id: "library-home-attention-heading" }, nO = { class: "library-muted" }, iO = ["href"], aO = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, rO = { class: "library-home-header" }, oO = { class: "library-muted library-catalogue-eyebrow" }, sO = { id: "library-shelves-landing-heading" }, lO = { class: "library-muted" }, cO = ["aria-label"], uO = ["aria-label"], dO = ["href", "aria-label", "onClick"], fO = ["title"], pO = { class: "library-empty-actions" }, hO = ["href"], vO = ["href"], gO = ["aria-label"], bO = { class: "library-shelf-tree" }, mO = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, yO = { class: "library-muted" }, _O = { class: "library-empty-actions" }, wO = ["href"], SO = ["href"], CO = ["aria-busy"], kO = { class: "library-catalogue-header" }, TO = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, EO = ["aria-label"], AO = { class: "library-mobile-filter-count" }, OO = ["aria-label"], xO = ["value"], NO = ["name", "value"], LO = { class: "library-mobile-filter-group" }, RO = { class: "library-quick-filter-search" }, IO = ["placeholder"], PO = { value: "" }, $O = ["value"], FO = { class: "library-publisher-filter" }, DO = { for: "library-mobile-publisher-search" }, MO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], zO = ["value"], UO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, jO = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, BO = ["id", "aria-selected"], HO = ["onClick"], VO = { class: "library-publication-filter" }, KO = { for: "library-mobile-publication-search" }, GO = ["placeholder", "aria-expanded"], qO = ["value"], WO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, YO = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, XO = ["onClick"], ZO = { class: "library-year-filter" }, JO = { for: "library-mobile-year-search" }, QO = ["placeholder", "aria-expanded"], ex = ["value"], tx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, nx = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, ix = ["onClick"], ax = { class: "library-creator-filter" }, rx = { for: "library-mobile-creator-search" }, ox = ["placeholder", "title", "aria-expanded"], sx = ["value"], lx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, cx = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, ux = ["onClick"], dx = { value: "" }, fx = ["value"], px = { class: "library-subject-filter" }, hx = { for: "library-mobile-subject-search" }, vx = ["placeholder", "title", "aria-expanded"], gx = ["value"], bx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, mx = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, yx = ["onClick"], _x = { class: "library-classification-filter" }, wx = { for: "library-mobile-classification-search" }, Sx = ["placeholder", "title", "aria-expanded"], Cx = ["value"], kx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, Tx = ["onClick"], Ex = { class: "library-mobile-filter-group" }, Ax = { value: "" }, Ox = ["value"], xx = { class: "library-folder-filter" }, Nx = { for: "library-mobile-folder-search" }, Lx = ["placeholder", "title", "aria-expanded"], Rx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, Ix = ["onClick"], Px = { class: "library-mobile-filter-group" }, $x = { value: "" }, Fx = ["value"], Dx = { value: "" }, Mx = ["value"], zx = { value: "" }, Ux = { value: "1" }, jx = { class: "library-mobile-filter-group" }, Bx = { class: "library-tag-filter" }, Hx = { for: "library-tag-search" }, Vx = ["placeholder", "aria-expanded"], Kx = ["value"], Gx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, qx = ["onClick"], Wx = { value: "title" }, Yx = { value: "recent" }, Xx = { value: "publicationDate" }, Zx = { value: "publication" }, Jx = { value: "lastOpened" }, Qx = { value: "format" }, e3 = { value: "compact" }, t3 = { value: "gallery" }, n3 = { value: "list" }, i3 = { value: "shelf" }, a3 = { class: "library-mobile-filter-actions" }, r3 = ["href"], o3 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, s3 = ["aria-label"], l3 = ["aria-label"], c3 = ["name", "value"], u3 = { "data-library-control": "sort" }, d3 = { value: "title" }, f3 = { value: "recent" }, p3 = { value: "publicationDate" }, h3 = { value: "publication" }, v3 = { value: "lastOpened" }, g3 = { value: "format" }, b3 = ["aria-label"], m3 = ["aria-pressed"], y3 = ["aria-pressed"], _3 = ["aria-pressed"], w3 = ["aria-pressed"], S3 = {
  id: "library-collections",
  class: "library-saved-collections"
}, C3 = ["title"], k3 = ["action", "title"], T3 = ["value"], E3 = ["value"], A3 = ["placeholder", "disabled"], O3 = ["disabled", "title"], x3 = ["aria-label"], N3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, L3 = ["title"], R3 = { class: "library-workspace-panel-purpose" }, I3 = { class: "library-workspace-scope-badge" }, P3 = { "aria-live": "polite" }, $3 = ["action"], F3 = ["value"], D3 = ["placeholder"], M3 = ["title"], z3 = ["action"], U3 = ["value"], j3 = ["placeholder"], B3 = ["title"], H3 = ["action"], V3 = ["value"], K3 = ["name", "value"], G3 = ["title"], q3 = ["action"], W3 = ["value"], Y3 = ["name", "value"], X3 = { name: "bulkEditField" }, Z3 = { value: "publicationType" }, J3 = { value: "subtitle" }, Q3 = { value: "creators" }, eN = { value: "publication" }, tN = { value: "publicationDate" }, nN = { value: "language" }, iN = { value: "publisher" }, aN = { value: "subjects" }, rN = { value: "classifications" }, oN = ["placeholder"], sN = ["title"], lN = ["action"], cN = ["value"], uN = ["name", "value"], dN = ["title"], fN = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, pN = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, hN = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, vN = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, gN = { key: 0 }, bN = { key: 1 }, mN = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, yN = { class: "library-muted library-catalogue-eyebrow" }, _N = ["title"], wN = ["aria-label"], SN = { key: 0 }, CN = { key: 1 }, kN = { key: 2 }, TN = ["aria-label"], EN = { key: 0 }, AN = { key: 1 }, ON = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, xN = { class: "library-muted library-catalogue-eyebrow" }, NN = ["title"], LN = ["aria-label"], RN = ["href"], IN = {
  key: 0,
  class: "library-notice"
}, PN = { class: "library-publication-issue-label" }, $N = ["href"], FN = { class: "library-muted" }, DN = {
  key: 1,
  class: "library-publication-unknown-issues"
}, MN = ["title"], zN = ["href"], UN = { class: "library-catalogue-status-row" }, jN = { class: "library-muted library-filter-result-summary" }, BN = { key: 0 }, HN = ["href"], VN = ["aria-label"], KN = { class: "library-pagination-range" }, GN = { key: 0 }, qN = ["href"], WN = {
  key: 1,
  class: "library-muted"
}, YN = ["href"], XN = {
  key: 3,
  class: "library-muted"
}, ZN = ["title"], JN = { class: "library-empty-actions" }, QN = ["href"], eL = { class: "library-muted" }, tL = ["title"], nL = { class: "library-empty-actions" }, iL = ["href"], aL = ["title"], rL = ["aria-label"], oL = ["href", "aria-label", "onClick"], sL = ["title"], lL = {
  key: 1,
  class: "library-muted"
}, cL = { class: "library-empty-actions" }, uL = ["href"], dL = ["href"], fL = ["title"], pL = { class: "library-empty-actions" }, hL = ["href"], vL = {
  key: 5,
  class: "library-select-visible"
}, gL = ["checked"], bL = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, mL = { class: "library-item-selection" }, yL = ["checked", "aria-label", "onChange"], _L = { class: "library-catalogue-list-main" }, wL = ["onClick"], SL = {
  class: "library-bidi-human",
  dir: "auto"
}, CL = {
  key: 0,
  class: "library-muted"
}, kL = {
  class: "library-bidi-human",
  dir: "auto"
}, TL = { class: "library-catalogue-list-metadata" }, EL = { key: 0 }, AL = {
  class: "library-bidi-human",
  dir: "auto"
}, OL = { key: 1 }, xL = { key: 2 }, NL = ["dir"], LL = { key: 3 }, RL = {
  class: "library-bidi-human",
  dir: "auto"
}, IL = { class: "library-catalogue-list-actions" }, PL = ["href", "onClick"], $L = ["onClick"], FL = { class: "library-item-selection" }, DL = ["checked", "aria-label", "onChange"], ML = ["aria-labelledby", "aria-expanded", "onClick"], zL = ["id"], UL = { class: "library-cover-frame" }, jL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, BL = ["src", "onLoad", "onError"], HL = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, VL = ["action", "onSubmit"], KL = ["value"], GL = ["value"], qL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], WL = ["data-library-star-error"], YL = { class: "library-cover-summary" }, XL = { class: "library-cover-primary" }, ZL = ["id"], JL = ["onClick"], QL = {
  class: "library-bidi-human",
  dir: "auto"
}, eR = {
  key: 0,
  class: "library-cover-creator"
}, tR = {
  class: "library-bidi-human",
  dir: "auto"
}, nR = {
  key: 1,
  class: "library-cover-context"
}, iR = {
  class: "library-bidi-human",
  dir: "auto"
}, aR = ["aria-label"], rR = { class: "library-pagination-range" }, oR = { key: 0 }, sR = ["href"], lR = {
  key: 1,
  class: "library-muted"
}, cR = ["href"], uR = {
  key: 3,
  class: "library-muted"
}, dR = { class: "library-sidebar-content" }, fR = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, pR = ["role"], hR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, vR = { class: "library-sidebar-publication-header" }, gR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, bR = ["src"], mR = { class: "library-sidebar-publication-summary" }, yR = { class: "library-muted library-catalogue-eyebrow" }, _R = {
  class: "library-bidi-human",
  dir: "auto"
}, wR = { key: 0 }, SR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, CR = { class: "library-detail-drawer-actions" }, kR = ["href"], TR = ["aria-label"], ER = ["aria-current", "onClick"], AR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, OR = { id: "library-sidebar-overview-heading" }, xR = {
  key: 0,
  class: "library-sidebar-description"
}, NR = {
  class: "library-bidi-human",
  dir: "auto"
}, LR = { class: "library-detail-drawer-facts" }, RR = { key: 0 }, IR = ["href", "title"], PR = {
  class: "library-bidi-human",
  dir: "auto"
}, $R = { key: 1 }, FR = ["href", "title"], DR = { key: 1 }, MR = { key: 2 }, zR = { key: 2 }, UR = ["href", "title"], jR = {
  class: "library-bidi-human",
  dir: "auto"
}, BR = { key: 3 }, HR = { class: "library-detail-facet-list" }, VR = ["href", "title", "onClick"], KR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, GR = { key: 4 }, qR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, WR = { id: "library-sidebar-metadata-heading" }, YR = ["placeholder"], XR = ["onUpdate:modelValue", "aria-label", "placeholder"], ZR = ["onUpdate:modelValue", "aria-label"], JR = ["onClick"], QR = { class: "library-muted" }, e4 = {
  key: 0,
  role: "alert"
}, t4 = {
  key: 1,
  role: "status"
}, n4 = ["disabled"], i4 = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, a4 = { id: "library-sidebar-suggestions-heading" }, r4 = { class: "library-muted" }, o4 = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, s4 = { id: "library-sidebar-activity-heading" }, l4 = { class: "library-detail-drawer-facts" }, c4 = { key: 0 }, u4 = { key: 1 }, d4 = { key: 2 }, f4 = { class: "library-detail-drawer-file" }, p4 = ["href"], h4 = { dir: "ltr" }, v4 = {
  key: 1,
  dir: "ltr"
}, g4 = ["aria-label"], b4 = ["disabled"], m4 = ["disabled"], y4 = 20, _4 = "/apps/library", w4 = 2147483647, S4 = {
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
    function r(f, c) {
      return Object.prototype.hasOwnProperty.call(a, f) && String(c ?? "").trim() === a[f];
    }
    function o(f) {
      const c = new URLSearchParams(f);
      for (const s of Object.keys(a)) {
        const x = [...new Set([...c.keys()].filter((we) => we === s || we.startsWith(`${s}[`)))], W = x.reduce((we, Re) => we + c.getAll(Re).length, 0);
        if (W > 1 || x.some((we) => we !== s)) {
          for (const we of x) c.delete(we);
          continue;
        }
        s !== "status" && W === 1 && !r(s, c.get(s)) && c.delete(s);
      }
      return c;
    }
    function u(f) {
      return Object.keys(a).some((c) => f.getAll(c).length === 1 && r(c, f.get(c)));
    }
    function d(f) {
      return Object.fromEntries(Object.entries(f || {}).filter(([c, s]) => c === "status" || !Object.prototype.hasOwnProperty.call(a, c) || r(c, s)));
    }
    const h = /* @__PURE__ */ Lt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), p = /* @__PURE__ */ Lt((h.items || []).map((f) => ({ ...f }))), y = B(() => p), k = B(() => h.shelves || []), E = B(() => h.formats || []), L = B(() => h.publicationTypes?.length ? h.publicationTypes : n), A = B(() => h.publications || []), N = B(() => h.publicationIssueContext || null), D = B(() => h.scanStatuses || []), M = B(() => h.workflowStatuses || []), z = B(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), C = /* @__PURE__ */ Lt({
      q: h.activeFilters?.q || "",
      view: h.activeFilters?.view || "compact",
      type: h.activeFilters?.type || "",
      publisher: h.activeFilters?.publisher || "",
      publication: h.activeFilters?.publication || "",
      year: h.activeFilters?.year || "",
      language: h.activeFilters?.language || "",
      creator: h.activeFilters?.creator || "",
      format: h.activeFilters?.format || "",
      tag: h.activeFilters?.tag || "",
      shelf: h.activeFilters?.shelf || "",
      folder: h.activeFilters?.folder || "",
      status: h.activeFilters?.status || "",
      workflowStatus: h.activeFilters?.workflowStatus || "",
      subject: h.activeFilters?.subject || "",
      classification: h.activeFilters?.classification || "",
      scannerConflicts: h.activeFilters?.scannerConflicts || "",
      starred: h.activeFilters?.starred || "",
      recentlyOpened: h.activeFilters?.recentlyOpened || "",
      needsMetadata: h.activeFilters?.needsMetadata || "",
      coverReview: h.activeFilters?.coverReview || "",
      noCreator: h.activeFilters?.noCreator || "",
      noPublication: h.activeFilters?.noPublication || "",
      noDate: h.activeFilters?.noDate || "",
      titleFromFilename: h.activeFilters?.titleFromFilename || "",
      noDescription: h.activeFilters?.noDescription || "",
      unsupportedContainer: h.activeFilters?.unsupportedContainer || "",
      weakMetadata: h.activeFilters?.weakMetadata || "",
      unreviewedImports: h.activeFilters?.unreviewedImports || "",
      sort: h.activeFilters?.sort || "title"
    });
    for (const f of Object.keys(a))
      f !== "status" && (r(f, C[f]) || (C[f] = ""));
    const re = /* @__PURE__ */ Ee(C.publication), de = /* @__PURE__ */ Ee(C.q), Z = /* @__PURE__ */ Ee(!1), pe = /* @__PURE__ */ Ee(null), X = B(() => {
      const f = re.value.trim().toLocaleLowerCase();
      return (f !== "" && pe.value !== null ? pe.value : A.value).filter((s) => f === "" || s.toLocaleLowerCase().includes(f)).slice(0, y4);
    });
    We(() => C.publication, (f) => {
      re.value = f || "";
    }), We(() => C.q, (f) => {
      de.value = f || "";
    });
    let se = null, _e = null, ee = 0;
    We(re, (f) => {
      window.clearTimeout(se), _e?.abort(), _e = null, pe.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++ee;
      se = window.setTimeout(() => {
        Jg(c, s);
      }, 200);
    });
    const J = /* @__PURE__ */ Ee(C.publisher), F = /* @__PURE__ */ Ee(!1), U = /* @__PURE__ */ Ee(null), Y = B(() => U.value || []);
    We(() => C.publisher, (f) => {
      J.value = f || "";
    });
    let le = null, ae = null, me = 0;
    We(J, (f) => {
      window.clearTimeout(le), ae?.abort(), ae = null, U.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++me;
      le = window.setTimeout(() => {
        Gg(c, s);
      }, 200);
    });
    const fe = /* @__PURE__ */ Ee(C.creator), Se = /* @__PURE__ */ Ee(!1), Te = /* @__PURE__ */ Ee(null), Ke = B(() => Te.value || []);
    We(() => C.creator, (f) => {
      fe.value = f || "";
    });
    let Le = null, lt = null, ht = 0;
    We(fe, (f) => {
      window.clearTimeout(Le), lt?.abort(), lt = null, Te.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++ht;
      Le = window.setTimeout(() => {
        Kg(c, s);
      }, 200);
    });
    const nt = /* @__PURE__ */ Ee(C.folder), ut = /* @__PURE__ */ Ee(!1), at = /* @__PURE__ */ Ee(null), Ft = B(() => at.value || []);
    We(() => C.folder, (f) => {
      nt.value = f || "";
    });
    let H = null, w = null, T = 0;
    We(nt, (f) => {
      window.clearTimeout(H), w?.abort(), w = null, at.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++T;
      H = window.setTimeout(() => {
        Xg(c, s);
      }, 200);
    });
    const O = /* @__PURE__ */ Ee(C.subject), R = /* @__PURE__ */ Ee(!1), I = /* @__PURE__ */ Ee(null), j = B(() => I.value || []);
    We(() => C.subject, (f) => {
      O.value = f || "";
    });
    let G = null, K = null, Q = 0;
    We(O, (f) => {
      window.clearTimeout(G), K?.abort(), K = null, I.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++Q;
      G = window.setTimeout(() => {
        qg(c, s);
      }, 200);
    });
    const V = /* @__PURE__ */ Ee(C.classification), he = /* @__PURE__ */ Ee(!1), oe = /* @__PURE__ */ Ee(null), ve = B(() => oe.value || []);
    We(() => C.classification, (f) => {
      V.value = f || "";
    });
    let xe = null, $e = null, ze = 0;
    We(V, (f) => {
      window.clearTimeout(xe), $e?.abort(), $e = null, oe.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++ze;
      xe = window.setTimeout(() => {
        Wg(c, s);
      }, 200);
    });
    const Fe = /* @__PURE__ */ Ee(C.tag), He = /* @__PURE__ */ Ee(!1), rt = /* @__PURE__ */ Ee(null), vt = B(() => rt.value || []);
    We(() => C.tag, (f) => {
      Fe.value = f || "";
    });
    let Tt = null, Dt = null, An = 0;
    We(Fe, (f) => {
      window.clearTimeout(Tt), Dt?.abort(), Dt = null, rt.value = null;
      const c = String(f || "").trim();
      if (c.length < 2) return;
      const s = ++An;
      Tt = window.setTimeout(() => {
        Yg(c, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ Ee(C.year), dt = /* @__PURE__ */ Ee(!1), Mn = /* @__PURE__ */ Ee(null), gn = B(() => Mn.value || []);
    We(() => C.year, (f) => {
      tt.value = f || "";
    });
    let ia = null, Ai = null, zn = 0;
    We(tt, (f) => {
      window.clearTimeout(ia), Ai?.abort(), Ai = null, Mn.value = null;
      const c = String(f || "").trim();
      if (c.length < 2) return;
      const s = ++zn;
      ia = window.setTimeout(() => {
        Zg(c, s);
      }, 200);
    });
    const Un = Object.fromEntries(Object.keys(C).map((f) => [f, f === "sort" ? "title" : f === "view" ? "compact" : ""])), pr = window.location.pathname.indexOf(_4), ti = pr >= 0 ? window.location.pathname.slice(0, pr) : "", Oi = {
      catalogue: `${ti}/apps/library/`,
      review: `${ti}/apps/library/?scannerConflicts=1`,
      settings: `${ti}/settings/user/library`
    };
    function xi(f, c) {
      if (typeof f != "string" || f === "") return c;
      try {
        const s = ti ? `${ti}/` : "/";
        let x = f;
        for (let W = 0; W < 5; W += 1) {
          if (!x.startsWith("/") || x.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(x)) return c;
          const we = new URL(x, window.location.origin);
          if (we.origin !== window.location.origin || !we.pathname.startsWith(s)) return c;
          const Re = x.split(/[?#]/, 1)[0];
          for (const cn of Re.split("/")) {
            let Mi = cn;
            for (let Ya = 0; Ya < 5; Ya += 1) {
              const Kn = decodeURIComponent(Mi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Kn) || Kn === "." || Kn === "..") return c;
              if (Kn === Mi) break;
              if (Mi = Kn, Ya === 4) return c;
            }
          }
          const Ze = decodeURI(x);
          if (Ze === x) return f;
          x = Ze;
        }
        return c;
      } catch {
        return c;
      }
    }
    const Ni = B(() => xi(h.settingsUrl, Oi.settings)), gt = B(() => xi(h.catalogueRootUrl, Oi.catalogue)), ja = B(() => xi(h.homeUrl, `${Oi.catalogue}?home=1`)), rn = B(() => xi(h.shelvesUrl, `${Oi.catalogue}?shelves=1`)), Li = B(() => xi(h.reviewUrl || h.scannerConflictReviewUrl, Oi.review)), aa = B(() => Object.entries(a).some(([f, c]) => C[f] === c)), Ba = B(() => i.reduce((f, c) => f + Number(bc.value[c.countKey] || 0), 0)), ra = B(() => h.surface === "home"), Ri = B(() => h.surface === "shelves"), hr = B(() => !ra.value && !Ri.value && !aa.value && !C.starred && C.recentlyOpened !== "1" && !C.shelf), Uo = B(() => [
      { key: "home", name: b("library", "Home"), href: ja.value, active: ra.value },
      { key: "all", name: b("library", "All publications"), href: gt.value, active: hr.value },
      { key: "starred", name: b("library", "Starred"), href: `${gt.value}?starred=1`, active: C.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${gt.value}?recentlyOpened=1&sort=lastOpened`, active: C.recentlyOpened === "1" },
      { key: "shelves", name: b("library", "Shelves"), href: rn.value, active: Ri.value || !!C.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${gt.value}#library-collections`, active: !1 }
    ]), vr = B(() => oc.value.map((f) => ({
      key: `collection-${f.id}`,
      rawName: f.name,
      id: f.id,
      name: f.countPending ? f.name : `${f.name} (${dn("library", "%n item", "%n items", Number(f.count || 0))})`,
      href: pb(f.filters),
      active: hb(f.filters)
    }))), Mt = B(() => h.requestToken || "");
    function bn(f, c) {
      const s = String(f?.recordOpenUrl || "");
      if (!s || !Mt.value) return;
      const x = new URLSearchParams({ requesttoken: Mt.value });
      try {
        if (navigator.sendBeacon) {
          const W = new Blob([x.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, W);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: Mt.value },
        body: x,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const jo = B(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), ec = B(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), pt = B(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Ii = B(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), tc = B(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Bo = B(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), gr = B(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Ho = B(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Vo = B(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), nc = B(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), ic = B(() => h.itemSidebarUrlTemplate || `${ti}/apps/library/items/__ITEM_ID__/sidebar`), ac = B(() => h.batchTagUrl || "/apps/library/bulk/tags"), rc = B(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), jn = B(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ko = B(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Ha = B(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Bn = B(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const br = B(() => h.discoveryPage === "publication"), Pi = B(() => h.discoveryPage === "year"), Va = B(() => h.discoveryPage === "creator"), mr = B(() => br.value || Pi.value || Va.value), yr = B(() => h.discoveryTitle || C.publication || C.year || C.creator || ""), Go = B(() => mr.value ? yr.value : b("library", "Library")), oa = B(() => Va.value ? b("library", "Creator") : Pi.value ? b("library", "Publication year") : b("library", "Publication / series")), Ka = B(() => Number(h.rootCount || 0)), Ga = B(() => Number(h.enabledRootCount || 0)), Hn = B(() => Ka.value === 0), ni = B(() => Ka.value > 0 && Ga.value === 0), on = B(() => ce.value.length > 0), On = /* @__PURE__ */ Ee(!1), sa = /* @__PURE__ */ Ee(null), qo = /* @__PURE__ */ Ee(null), _r = {
      q: "Search",
      sort: "Sort",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
      language: "Language",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      folder: "Folder",
      status: "Scan status",
      workflowStatus: "Workflow status",
      subject: "Subject",
      classification: "Classification",
      scannerConflicts: "Suggested updates",
      starred: "Starred",
      recentlyOpened: "Recently opened",
      needsMetadata: "Needs details",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Filename-derived metadata",
      unreviewedImports: "Unreviewed imports"
    }, Wo = {
      scannerConflicts: "1",
      starred: "1",
      recentlyOpened: "1",
      needsMetadata: "1",
      noCreator: "1",
      noPublication: "1",
      noDate: "1",
      titleFromFilename: "1",
      noDescription: "1",
      unsupportedContainer: "1",
      unreviewedImports: "1",
      weakMetadata: "filename",
      coverReview: "placeholder"
    }, Yo = {
      sort: {
        title: "Title",
        recent: "Date added",
        publicationDate: "Publication date",
        publication: "Series",
        lastOpened: "Recently opened",
        format: "Format"
      },
      view: {
        compact: "Compact",
        gallery: "Gallery",
        list: "List",
        shelf: "Shelf"
      },
      status: {
        indexed: "Indexed",
        metadata_error: "Metadata error",
        missing: "Missing"
      },
      workflowStatus: {
        "to-read": "To read",
        reading: "Reading",
        finished: "Finished",
        reference: "Reference",
        paused: "Paused",
        abandoned: "Abandoned",
        "needs-action": "Needs action"
      }
    }, wr = B(() => {
      if (typeof window > "u") return "";
      const f = new URLSearchParams(window.location.search);
      if (f.get("batchMetadataApplyResult") !== "1") return "";
      const c = f.get("batchMetadataField") || "field", s = f.get("batchMetadataApplied") || "0", x = f.get("batchMetadataUnchanged") || "0", W = f.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: c, unchanged: x, skipped: W });
    }), Xo = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Sr = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), oc = B(() => h.savedCollections || []), sc = B(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Zo = B(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), la = ["compact", "gallery", "list", "shelf"], zt = B(() => la.includes(C.view) ? C.view : "compact"), te = B(() => ({
      "library-cover-gallery--compact": zt.value === "compact",
      "library-cover-gallery--gallery": zt.value === "gallery",
      "library-cover-gallery--shelf": zt.value === "shelf"
    }));
    function S(f) {
      const c = String(f || "").trim();
      if (c.length <= 32) return c;
      const s = c.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : c;
    }
    function P(f, c) {
      const s = String(c || "").trim();
      if (s === "" || Wo[f] === s) return "";
      if (f === "format") return s.toUpperCase();
      if (f === "folder") return S(s);
      const x = Yo[f]?.[s];
      return x ? b("library", x) : s;
    }
    function q(f, c) {
      const s = String(C[f] || "").trim(), x = P(f, s), W = b("library", c);
      return {
        key: f,
        label: W,
        value: s,
        displayValue: x,
        title: x ? `${W}: ${s}` : W
      };
    }
    const ce = B(() => Object.entries(_r).map(([f, c]) => q(f, c)).filter((f) => f.value !== "" && !(f.key === "sort" && f.value === "title") && !(f.key === "view" && f.value === "compact"))), ue = B(() => ce.value.filter((f) => !["sort", "view"].includes(f.key))), Ne = B(() => ce.value.length), Xe = Object.freeze([
      { key: "content", label: "Content", keys: ["q", "type", "publisher", "publication", "year", "language", "creator", "format", "subject", "classification", "tag"] },
      { key: "location", label: "Location", keys: ["shelf", "folder"] },
      { key: "review", label: "Review", keys: ["scannerConflicts", "needsMetadata", "coverReview", "noCreator", "noPublication", "noDate", "titleFromFilename", "noDescription", "unsupportedContainer", "weakMetadata", "unreviewedImports", "status"] },
      { key: "personal", label: "Personal / display", keys: ["starred", "recentlyOpened", "workflowStatus"] }
    ]);
    function ct(f) {
      const c = new Set(f.keys);
      return ue.value.filter((s) => c.has(s.key));
    }
    const wt = B(() => Xe.map((f) => ({ ...f, chips: ct(f) }))), Et = B(() => {
      const f = new URLSearchParams();
      for (const s of ue.value) f.set(s.key, s.value);
      const c = f.toString();
      return `${gt.value}${c ? `?${c}` : ""}`;
    }), ii = B(() => ue.value[0] || null), At = B(() => de.value.trim() !== String(C.q || "").trim()), Sg = B(() => String(C.q || "").trim() !== "" || At.value);
    function sn(f) {
      return ({
        q: de,
        publisher: J,
        publication: re,
        creator: fe,
        subject: O,
        year: tt,
        folder: nt,
        classification: V,
        tag: Fe
      }[f]?.value ?? "").trim() !== String(C[f] || "").trim();
    }
    function xn(f) {
      return sn(f) ? f === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function ai(f) {
      return { "library-filter-apply--pending": sn(f) };
    }
    const Cg = B(() => Ne.value > 0 ? b("library", "Filters ({count})", { count: Ne.value }) : b("library", "Filters")), kg = B(() => Ne.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: Ne.value }) : b("library", "Open filters panel")), Tg = B(() => dn("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function Eg(f) {
      On.value = f.currentTarget?.open === !0, On.value && en(() => {
        sa.value?.focus?.();
      });
    }
    const Ag = /* @__PURE__ */ new Set([
      "q",
      "sort",
      "view",
      "type",
      "publisher",
      "publication",
      "year",
      "creator",
      "tag",
      "format",
      "shelf",
      "folder",
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), wd = B(() => Object.entries(d(C)).filter(([f, c]) => !Ag.has(f) && String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), Og = B(() => Object.entries(C).filter(([f, c]) => !["q", "sort", "starred"].includes(f) && String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), Jo = B(() => Object.entries(d(C)).filter(([f, c]) => String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), xg = B(() => Jo.value.filter(({ key: f, value: c }) => f !== "q" && !(f === "sort" && c === "title"))), lc = /* @__PURE__ */ Lt({}), Qo = B(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), Sd = B(() => h.homeShelves || []), Cd = B(() => h.shelfTree || []), cc = B(() => h.needsAttention || { count: 0, url: `${gt.value}?needsMetadata=1` }), Nn = /* @__PURE__ */ Ee([]), es = B(() => new Set(Nn.value));
    function kd(f, c) {
      const s = new Set(Nn.value);
      c ? s.add(Number(f)) : s.delete(Number(f)), Nn.value = [...s];
    }
    function Ng(f) {
      Nn.value = f.currentTarget.checked ? y.value.map((c) => Number(c.id)) : [];
    }
    function Lg() {
      const f = new Set(y.value.map((c) => Number(c.id)));
      Nn.value = Nn.value.filter((c) => f.has(c));
    }
    function Rg(f) {
      const c = f.target;
      if (c instanceof HTMLFormElement) {
        c.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of Nn.value) {
          const x = document.createElement("input");
          x.type = "hidden", x.name = "itemIds[]", x.value = String(s), x.dataset.librarySelectedId = "1", c.appendChild(x);
        }
      }
    }
    const Ce = /* @__PURE__ */ Ee(null), ca = /* @__PURE__ */ Ee(null), Xt = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), ua = /* @__PURE__ */ Ee("overview"), Ln = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ Lt({ title: "", publicationDate: "", identifiers: [] }), Td = /* @__PURE__ */ Ee(null), da = /* @__PURE__ */ Ee(null), fa = /* @__PURE__ */ Ee(!1);
    let uc = null, ri = null, ts = null, dc = !1, Cr = null, fc = 0;
    const $i = B(() => ca.value !== null), kr = B(() => Ce.value ? y.value.findIndex((f) => f.id === Ce.value.id) : -1), ns = B(() => kr.value > 0 ? y.value[kr.value - 1] : null), is = B(() => kr.value >= 0 && kr.value < y.value.length - 1 ? y.value[kr.value + 1] : null), Ed = B(() => Mg(Ce.value?.description || "")), pa = B(() => $g(Ce.value?.publicationDate || "")), Ad = B(() => Fg(Ce.value?.language || "")), Ig = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Pg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Tr(f) {
      const c = String(f ?? "").trim(), s = c.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : c;
    }
    function $g(f) {
      const s = Tr(f).match(/^(\d{4})/u);
      return s ? s[1] : "";
    }
    function Fg(f) {
      return String(f ?? "").split(/[;,\n]+/u).map((c) => c.trim()).filter(Boolean);
    }
    function Od(f, c) {
      const s = new URLSearchParams();
      for (const [x, W] of Object.entries(C)) {
        const we = String(W || "").trim();
        we !== "" && !(x === "sort" && we === "title") && !(x === "view" && we === "compact") && s.set(x, we);
      }
      return s.set(f, String(c || "").trim()), s.delete("page"), o(s);
    }
    function as(f, c) {
      const x = Od(f, c).toString();
      return `${gt.value}${x ? `?${x}` : ""}`;
    }
    function rs(f, c, s) {
      const x = String(s || "").trim();
      if (x === "") return;
      f?.preventDefault?.();
      const W = Od(c, x);
      Ar({ historyMode: "none" }), xt(null, {
        params: W,
        generation: ++jt,
        historyMode: "push"
      });
    }
    function Dg(f) {
      return String(f ?? "").replace(/&#x([0-9a-f]+);/giu, (c, s) => String.fromCodePoint(Number.parseInt(s, 16))).replace(/&#(\d+);/gu, (c, s) => String.fromCodePoint(Number.parseInt(s, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Mg(f) {
      let c = String(f ?? "").trim();
      if (c === "") return "";
      for (let s = 0; s < 2; s += 1) {
        const x = Dg(c);
        if (x === c) break;
        c = x;
      }
      return c = c.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), c;
    }
    function xd(f) {
      return { ...f, publicationDate: Tr(f?.publicationDate) };
    }
    function Nd(f) {
      Ut.title = String(f?.title || ""), Ut.publicationDate = Tr(f?.publicationDate), Ut.identifiers = Array.isArray(f?.identifiers) ? f.identifiers.map((c) => ({ scheme: String(c?.scheme || ""), displayValue: String(c?.displayValue || c?.value || "") })) : [], Object.assign(Ln, { saving: !1, saved: !1, error: "" });
    }
    function zg() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ug(f) {
      Ut.identifiers.splice(f, 1);
    }
    async function jg() {
      const f = Ce.value;
      if (!f?.updateUrl || Ln.saving) return;
      Object.assign(Ln, { saving: !0, saved: !1, error: "" });
      const c = new FormData();
      c.set("requesttoken", Mt.value), c.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const x = f[s];
        c.set(s, Array.isArray(x) ? x.join(", ") : String(x ?? ""));
      }
      c.set("title", Ut.title), c.set("publicationDate", Tr(Ut.publicationDate)), Ut.identifiers.forEach((s, x) => {
        c.set(`identifiers[${x}][scheme]`, s.scheme), c.set(`identifiers[${x}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(f.updateUrl, { method: "POST", body: c, credentials: "same-origin", headers: { Accept: "application/json" } }), x = await s.json().catch(() => ({}));
        if (!s.ok || x.saved !== !0) throw new Error(x.error || b("library", "Metadata could not be saved."));
        f.title = Ut.title.trim(), f.publicationDate = Tr(Ut.publicationDate), f.identifiers = Ut.identifiers.filter((we) => we.scheme.trim() || we.displayValue.trim()).map((we) => ({ ...we }));
        const W = y.value.find((we) => Number(we.id) === Number(f.id));
        W && (W.title = f.title, W.publicationDate = f.publicationDate), Ln.saved = !0;
      } catch (s) {
        Ln.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Ln.saving = !1;
      }
    }
    const Fi = B(() => {
      const f = r("scannerConflicts", C.scannerConflicts) || r("weakMetadata", C.weakMetadata), c = f ? y.value.find((s) => os(s).length > 0) : null;
      return {
        enabled: f,
        item: c,
        fields: c ? os(c) : [],
        reviewNextUrl: Bn.value,
        skipUrl: z.value.nextUrl || Bn.value
      };
    }), Bg = B(() => i.map((f) => ({
      ...f,
      label: b("library", f.label),
      href: `${gt.value}?${encodeURIComponent(f.key)}=${encodeURIComponent(f.value)}`,
      active: String(C[f.key] || "") === f.value
    })));
    function pc(f) {
      return Array.isArray(f) ? JSON.stringify(f) : f == null ? "" : String(f);
    }
    function os(f) {
      const c = f.fieldValues || {}, s = f.fieldSources || {};
      return Ig.filter((x) => Object.prototype.hasOwnProperty.call(c, x)).map((x) => {
        const W = pc(f[x]), we = pc(c[x]), Re = pc(s[x] || f.metadataSource || "scanner"), Ze = Re.includes("filename") || Re.includes("path") ? we : "", cn = Re.includes("sidecar") ? we : "";
        return { field: x, currentValue: W, scannerCandidate: we, pathTemplateCandidate: Ze, sidecarValue: cn, sourceProvenance: Re, differs: W !== we };
      }).filter((x) => x.differs);
    }
    let ha = 0, va = null;
    function Ld() {
      const f = new URLSearchParams(window.location.search).getAll("item");
      if (f.length !== 1 || !/^[1-9][0-9]*$/.test(f[0])) return null;
      const c = Number(f[0]);
      return Number.isSafeInteger(c) && c <= w4 ? c : null;
    }
    function Rd(f, c = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), f !== null && s.searchParams.set("item", String(f)), history[`${c}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function Er(f, { historyMode: c = "push", seed: s = null } = {}) {
      va?.abort();
      const x = ++ha, W = new AbortController();
      va = W, ca.value = f, ua.value = "overview", Ce.value = s && Number(s.id) === f ? xd(s) : null, Ce.value && Nd(Ce.value), Object.assign(Xt, { loading: !0, error: "", missing: !1 }), c !== "none" && Rd(f, c);
      try {
        const we = ic.value.replace("__ITEM_ID__", encodeURIComponent(String(f))), Re = await fetch(we, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (x !== ha) return;
        if (!Re.ok) {
          Ce.value = null, Xt.missing = Re.status === 404, Xt.error = Re.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Ze = await Re.json();
        if (x !== ha) return;
        if (typeof Ze?.item?.id != "number" || !Number.isSafeInteger(Ze.item.id) || Ze.item.id !== f) {
          Ce.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = xd(Ze.item), Nd(Ce.value), await en();
      } catch (we) {
        x === ha && we?.name !== "AbortError" && (Ce.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        x === ha && (Xt.loading = !1, va = null);
      }
    }
    function Vn(f, c) {
      hc(), uc = c?.currentTarget instanceof HTMLElement ? c.currentTarget : null, Er(Number(f.id), { seed: f });
    }
    function Ar({ historyMode: f = "push", restoreFocus: c = !0 } = {}) {
      ts = c ? uc : null, uc = null, va?.abort(), va = null, ha += 1, ca.value = null, Ce.value = null, ua.value = "overview", Object.assign(Xt, { loading: !1, error: "", missing: !1 }), f !== "none" && Rd(null, f);
    }
    function Id() {
      fa.value ? (da.value?.$refs?.sidebar || da.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Td.value?.focus();
    }
    function Hg() {
      const f = ts;
      if (ts = null, hc(), dc || !f?.isConnected) return;
      const c = fc;
      Cr = window.requestAnimationFrame(() => {
        Cr = null, !(c !== fc || dc || $i.value || !f.isConnected) && f.focus();
      });
    }
    function hc() {
      fc += 1, Cr !== null && (window.cancelAnimationFrame(Cr), Cr = null);
    }
    function Or(f = ri) {
      fa.value = !!f?.matches, $i.value && en(Id);
    }
    function ss(f) {
      f && Er(Number(f.id), { seed: f });
    }
    const xr = /* @__PURE__ */ Ee(null);
    let jt = 0, qa = null, Wa = null, Nr = null;
    const Ot = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function Vg(f) {
      const c = o(new FormData(f));
      c.delete("publicationSearch"), c.delete("creatorSearch"), c.delete("subjectSearch"), c.delete("publisherSearch"), c.delete("classificationSearch"), c.delete("tagSearch"), c.delete("folderSearch"), c.delete("yearSearch");
      for (const s of Array.from(c.keys()))
        String(c.get(s) || "").trim() === "" && c.delete(s);
      return c.delete("page"), c.get("view") === "compact" && c.delete("view"), c.get("sort") === "title" && c.delete("sort"), c;
    }
    async function ga(f, c, s) {
      const x = new URLSearchParams();
      for (const [Re, Ze] of Object.entries(C)) {
        const cn = String(Ze || "").trim();
        Re !== f && cn !== "" && !(Re === "sort" && cn === "title") && !(Re === "view" && cn === "compact") && x.set(Re, cn);
      }
      x.set(`${f}Search`, c);
      const W = new AbortController();
      f === "creator" ? lt = W : f === "publisher" ? ae = W : f === "subject" ? K = W : f === "classification" ? $e = W : f === "tag" ? Dt = W : f === "folder" ? w = W : Ai = W;
      const we = f === "creator" ? Ii.value : f === "publisher" ? tc.value : f === "subject" ? Bo.value : f === "classification" ? gr.value : f === "tag" ? Ho.value : f === "folder" ? Vo.value : nc.value;
      try {
        const Re = await fetch(`${we}?${x}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (!Re.ok) throw new Error(`${f} suggestions request failed: ${Re.status}`);
        const Ze = await Re.json(), cn = f === "creator" ? ht : f === "publisher" ? me : f === "subject" ? Q : f === "classification" ? ze : f === "tag" ? An : f === "folder" ? T : zn, Mi = f === "creator" ? fe.value : f === "publisher" ? J.value : f === "subject" ? O.value : f === "classification" ? V.value : f === "tag" ? Fe.value : f === "folder" ? nt.value : tt.value;
        s === cn && Mi.trim() === c && (f === "creator" ? Te.value = Array.isArray(Ze.creators) ? Ze.creators : [] : f === "publisher" ? U.value = Array.isArray(Ze.publishers) ? Ze.publishers : [] : f === "subject" ? I.value = Array.isArray(Ze.subjects) ? Ze.subjects : [] : f === "classification" ? oe.value = Array.isArray(Ze.classifications) ? Ze.classifications : [] : f === "tag" ? rt.value = Array.isArray(Ze.tags) ? Ze.tags : [] : f === "folder" ? at.value = Array.isArray(Ze.folders) ? Ze.folders : [] : Mn.value = Array.isArray(Ze.years) ? Ze.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (f === "creator" && s === ht && (Te.value = null), f === "publisher" && s === me && (U.value = null), f === "subject" && s === Q && (I.value = null), f === "classification" && s === ze && (oe.value = null), f === "tag" && s === An && (rt.value = null), f === "folder" && s === T && (at.value = null), f === "year" && s === zn && (Mn.value = null));
      }
    }
    function Kg(f, c) {
      return ga("creator", f, c);
    }
    function Gg(f, c) {
      return ga("publisher", f, c);
    }
    function qg(f, c) {
      return ga("subject", f, c);
    }
    function Wg(f, c) {
      return ga("classification", f, c);
    }
    function Yg(f, c) {
      return ga("tag", f, c);
    }
    function Xg(f, c) {
      return ga("folder", f, c);
    }
    function Zg(f, c) {
      return ga("year", f, c);
    }
    async function Jg(f, c) {
      const s = new URLSearchParams();
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        W !== "publication" && Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      s.set("publicationSearch", f);
      const x = new AbortController();
      _e = x;
      try {
        const W = await fetch(`${pt.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: x.signal
        });
        if (!W.ok) throw new Error(`Publication suggestions request failed: ${W.status}`);
        const we = await W.json();
        c === ee && re.value.trim() === f && (pe.value = Array.isArray(we.publications) ? we.publications : []);
      } catch (W) {
        W?.name !== "AbortError" && c === ee && (pe.value = null);
      } finally {
        c === ee && (_e = null);
      }
    }
    function Qg(f) {
      p.splice(0, p.length, ...(f.items || []).map((s) => ({ ...s }))), Lg();
      const c = new Set(f.facetsDeferred ? [
        "shelves",
        "formats",
        "publicationTypes",
        "publishers",
        "publications",
        "publicationSummaries",
        "publicationIssueContext",
        "publicationYears",
        "publicationYearLandingUrls",
        "creators",
        "creatorLandingUrls",
        "scanStatuses",
        "workflowStatuses",
        "subjects",
        "classifications",
        "smartViewCounts",
        "smartViewCountsPending",
        "savedCollections"
      ] : []);
      for (const s of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !c.has(s) && Object.prototype.hasOwnProperty.call(f, s) && (h[s] = f[s]);
      Object.assign(C, Un, f.activeFilters || {});
    }
    async function eb() {
      if (h.surface !== "index") return;
      const f = jt, c = JSON.stringify({ ...C }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      const x = new AbortController();
      Wa = x;
      try {
        const W = await fetch(`${jo.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: x.signal
        });
        if (!W.ok) return;
        const we = await W.json();
        if (f !== jt || c !== JSON.stringify({ ...C })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(we, Re) && (h[Re] = we[Re]);
      } catch (W) {
        if (W?.name !== "AbortError") return;
      } finally {
        Wa === x && (Wa = null);
      }
    }
    function tb() {
      Wa?.abort(), Wa = null;
    }
    async function xt(f, c = null) {
      const s = f?.currentTarget?.tagName === "FORM" ? f.currentTarget : f?.currentTarget?.form;
      if (!s && !c?.params) return;
      const x = o(c?.params ?? Vg(s));
      if (ra.value || Ri.value) {
        Lr(x, gt.value);
        return;
      }
      const W = x.toString(), we = W ? `?${W}` : "", Re = c?.generation ?? ++jt, Ze = u(x), cn = c?.historyMode ?? (Ze ? "push" : "replace"), Mi = c?.historyTraversal === !0;
      if (Re !== jt) return;
      tb(), c === null && qa?.abort();
      const Ya = new AbortController();
      qa = Ya, Ot.loading = !0, Ot.error = "", Ot.completed = !1;
      try {
        const Kn = await fetch(jo.value + we, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ya.signal
        });
        if (Re !== jt) return;
        if (!Kn.ok) {
          Mi ? Lr(x) : Ze ? Ot.error = b("library", "Could not load this review queue. Try again.") : Lr(x);
          return;
        }
        const Sb = await Kn.json();
        if (Re !== jt) return;
        Qg(Sb), Ot.completed = !0, cn !== "none" && (history[cn === "push" ? "pushState" : "replaceState"]({}, "", W ? `?${W}` : window.location.pathname), $i.value && Ar({ historyMode: "none" }));
      } catch (Kn) {
        Re === jt && Kn?.name !== "AbortError" && (Mi ? Lr(x) : Ze ? Ot.error = b("library", "Could not load this review queue. Try again.") : Lr(x));
      } finally {
        Re === jt && (qa = null, Ot.loading = !1);
      }
    }
    function Pd() {
      qa?.abort();
      const f = new URLSearchParams(window.location.search), c = Ld();
      f.has("item") && c === null && (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)), c === null ? Ar({ historyMode: "none" }) : Er(c, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === c) || null }), f.delete("item"), xt(null, {
        params: o(f),
        generation: ++jt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Lr(f, c = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = c, s.hidden = !0;
      for (const [x, W] of f.entries()) {
        const we = document.createElement("input");
        we.type = "hidden", we.name = x, we.value = W, s.appendChild(we);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function ln(f, c = null, s = null) {
      if (c === null) {
        xt(f);
        return;
      }
      xt({ currentTarget: f }, { params: c, generation: s });
    }
    async function nb(f, c = re.value) {
      C.publication = String(c || "").trim(), re.value = C.publication, Z.value = !1, await en(), xt({ currentTarget: f });
    }
    function $d(f, c) {
      nb(c.currentTarget.form, f);
    }
    async function ib(f) {
      C.q = String(de.value || "").trim(), C.publication = String(re.value || "").trim(), C.publisher = String(J.value || "").trim(), C.creator = String(fe.value || "").trim(), C.subject = String(O.value || "").trim(), C.folder = String(nt.value || "").trim(), C.year = String(tt.value || "").trim(), Z.value = !1, F.value = !1, Se.value = !1, R.value = !1, ut.value = !1, dt.value = !1, await en(), xt({ currentTarget: f });
    }
    async function Di(f, c, s) {
      C[c] = String(s || "").trim(), c === "creator" ? (fe.value = C.creator, Se.value = !1) : c === "publisher" ? (J.value = C.publisher, F.value = !1) : c === "subject" ? (O.value = C.subject, R.value = !1) : c === "folder" ? (nt.value = C.folder, ut.value = !1) : c === "classification" ? (V.value = C.classification, he.value = !1) : c === "tag" ? (Fe.value = C.tag, He.value = !1) : (tt.value = C.year, dt.value = !1), oi[c] = -1, await en(), xt({ currentTarget: f });
    }
    function Fd(f) {
      ib(f.currentTarget);
    }
    function Dd(f, c) {
      Di(c.currentTarget.form, "creator", f);
    }
    function Md(f, c) {
      Di(c.currentTarget.form, "publisher", f);
    }
    function zd(f, c) {
      Di(c.currentTarget.form, "classification", f);
    }
    function Ud(f, c) {
      Di(c.currentTarget.form, "tag", f);
    }
    function jd(f, c) {
      Di(c.currentTarget.form, "folder", f);
    }
    function Bd(f, c = O.value) {
      window.clearTimeout(G), K?.abort(), K = null, Di(f, "subject", c);
    }
    function ab(f) {
      Bd(f.currentTarget.form);
    }
    function Hd(f, c) {
      Bd(c.currentTarget.form, f);
    }
    function Vd(f, c) {
      Di(c.currentTarget.form, "year", f);
    }
    const oi = /* @__PURE__ */ Lt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function rb(f) {
      return Y.value;
    }
    function vc(f, c, s) {
      return `library-${f}-${c}-suggestion-${s}`;
    }
    function Kd(f, c) {
      const s = oi[c];
      return s >= 0 ? vc(f, c, s) : void 0;
    }
    function gc(f, c) {
      F.value = c, c || (oi[f] = -1);
    }
    function Gd(f) {
      oi[f] = -1, gc(f, !0);
    }
    function ob(f, c, s) {
      Di(s, f, c);
    }
    function qd(f, c) {
      const s = rb();
      if (f.key === "Escape") {
        gc(c, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(f.key) || s.length === 0) return;
      if (f.key === "Enter") {
        const we = oi[c];
        if (we < 0) return;
        f.preventDefault(), ob(c, s[we], f.currentTarget.form);
        return;
      }
      f.preventDefault(), gc(c, !0);
      const x = oi[c], W = f.key === "ArrowDown" ? 1 : -1;
      oi[c] = x < 0 ? W > 0 ? 0 : s.length - 1 : (x + W + s.length) % s.length;
    }
    function Wd(f) {
      const c = new URLSearchParams();
      for (const [s, x] of Object.entries(C)) {
        const W = String(x || "").trim();
        W !== "" && s !== f && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && c.set(s, W);
      }
      return c;
    }
    function Rr(f) {
      const c = Wd(f).toString();
      return `${gt.value}${c ? `?${c}` : ""}`;
    }
    function Ir(f) {
      const c = Wd(f);
      C[f] = f === "sort" ? "title" : f === "view" ? "compact" : "", xt(null, {
        params: c,
        generation: ++jt
      });
    }
    function Yd() {
      const f = new URLSearchParams();
      return C.sort && C.sort !== "title" && f.set("sort", C.sort), C.view && C.view !== "compact" && f.set("view", C.view), f;
    }
    function ba() {
      const f = Yd().toString();
      return `${gt.value}${f ? `?${f}` : ""}`;
    }
    function ma() {
      const f = Yd();
      for (const c of Object.keys(C))
        ["sort", "view"].includes(c) || (C[c] = Un[c]);
      xt(null, {
        params: f,
        generation: ++jt
      }), !ra.value && !Ri.value && en(() => {
        qo.value?.focus?.();
      });
    }
    function Xd(f) {
      const c = Xe.find((W) => W.key === f), s = new Set(c?.keys || []), x = new URLSearchParams();
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        Re !== "" && !s.has(W) && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && x.set(W, Re);
      }
      return x.delete("page"), x;
    }
    function ls(f) {
      const s = Xd(f).toString();
      return `${gt.value}${s ? `?${s}` : ""}`;
    }
    function cs(f) {
      const c = Xe.find((x) => x.key === f);
      if (!c) return;
      const s = Xd(f);
      for (const x of c.keys) C[x] = Un[x];
      xt(null, {
        params: s,
        generation: ++jt
      });
    }
    function sb(f) {
      const c = new URL(f.href, window.location.origin).searchParams;
      xt(null, {
        params: c,
        generation: ++jt
      });
    }
    function lb() {
      return Rr("q");
    }
    const bc = B(() => h.smartViewCounts || {}), cb = B(() => new Set(h.smartViewCountsPending || []));
    function ub(f) {
      return cb.value.has(f) || !Object.prototype.hasOwnProperty.call(bc.value, f) ? "—" : Number(bc.value[f] || 0);
    }
    const Zd = B(() => {
      const f = {};
      for (const [c, s] of Object.entries(C)) {
        const x = String(s || "").trim();
        x !== "" && !(c === "sort" && x === "title") && (f[c] = x);
      }
      return f;
    }), db = B(() => JSON.stringify(Zd.value)), mc = B(() => Object.keys(Zd.value).length > 0);
    function us(f) {
      if (!la.includes(f)) return;
      C.view = f;
      const c = new URLSearchParams();
      for (const [s, x] of Object.entries(d(C))) {
        const W = String(x || "").trim();
        W !== "" && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && c.set(s, W);
      }
      c.delete("page"), xt(null, {
        params: c,
        generation: ++jt
      });
    }
    function fb(f) {
      const c = o(window.location.search);
      for (const x of Object.keys(_r))
        c.delete(x);
      c.delete("page");
      for (const [x, W] of Object.entries(f))
        String(W || "").trim() !== "" && c.set(x, String(W));
      const s = c.toString();
      return s ? `?${s}` : "?";
    }
    function pb(f) {
      return fb(f || {});
    }
    function hb(f) {
      const s = Object.entries(f && typeof f == "object" ? f : {}).filter(([, x]) => String(x ?? "").trim() !== "");
      return s.length === 0 ? !1 : s.every(([x, W]) => String(C[x] ?? "") === String(W ?? ""));
    }
    function vb(f) {
      return Zo.value.replace("__COLLECTION_ID__", encodeURIComponent(String(f || "0")));
    }
    function gb(f) {
      if (!Mt.value) return;
      const c = document.createElement("form");
      c.method = "post", c.action = vb(f), c.className = "library-navigation-saved-collection-delete-form";
      const s = document.createElement("input");
      s.type = "hidden", s.name = "requesttoken", s.value = Mt.value, c.appendChild(s), document.body.appendChild(c), c.submit();
    }
    function ds(f) {
      return String(f || "").toUpperCase();
    }
    function Pr(f) {
      return lc[f.id] || "loading";
    }
    function bb(f) {
      lc[f.id] = "loaded";
    }
    function mb(f) {
      lc[f.id] = "error";
    }
    function Jd(f) {
      const c = String(f?.publication || "").trim(), s = String(f?.publicationDate || "").trim();
      return c && s ? `${c} · ${s}` : c || s;
    }
    function Qd(f) {
      const c = String(f?.tagName || "").toLowerCase();
      return f?.isContentEditable || ["input", "select", "textarea", "button"].includes(c);
    }
    function yb(f) {
      f.key !== "/" || f.metaKey || f.ctrlKey || f.altKey || f.shiftKey || Qd(f.target) || (f.preventDefault(), xr.value?.focus(), xr.value?.select?.());
    }
    async function _b(f) {
      f.key !== "Escape" || document.activeElement !== xr.value || C.q === "" || (f.preventDefault(), de.value = "", C.q = "", await en(), ln({ currentTarget: xr.value }));
    }
    function wb(f) {
      if (!$i.value || f.metaKey || f.ctrlKey || f.altKey)
        return !1;
      if (f.key === "Escape")
        return f.preventDefault(), Ar(), !0;
      if (f.key === "Tab" && fa.value) {
        if (da.value?.focusTrap) return !1;
        const c = da.value?.$refs?.sidebar || da.value?.$el || da.value, s = [...c?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((we) => !we.hidden && we.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const x = s[0], W = s[s.length - 1];
        if (f.shiftKey && (document.activeElement === x || !c.contains(document.activeElement)))
          return f.preventDefault(), W.focus(), !0;
        if (!f.shiftKey && (document.activeElement === W || !c.contains(document.activeElement)))
          return f.preventDefault(), x.focus(), !0;
      }
      return Qd(f.target) ? !1 : f.key === "ArrowLeft" && ns.value ? (f.preventDefault(), ss(ns.value), !0) : f.key === "ArrowRight" && is.value ? (f.preventDefault(), ss(is.value), !0) : !1;
    }
    function ef(f) {
      wb(f) || (yb(f), _b(f));
    }
    ea(() => {
      window.addEventListener("keydown", ef), window.addEventListener("popstate", Pd), ri = window.matchMedia?.("(max-width: 1023px)") || null, Or(), ri?.addEventListener ? ri.addEventListener("change", Or) : ri?.addListener?.(Or);
      const f = new URLSearchParams(window.location.search), c = Ld();
      f.has("item") && c === null ? (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)) : c !== null && Er(c, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === c) || null }), Nr = window.requestAnimationFrame(() => {
        Nr = null, eb();
      });
    }), fr(() => {
      dc = !0, hc(), window.removeEventListener("keydown", ef), window.removeEventListener("popstate", Pd), window.clearTimeout(se), window.clearTimeout(Le), window.clearTimeout(G), window.clearTimeout(ia), _e?.abort(), lt?.abort(), K?.abort(), Ai?.abort(), jt += 1, Nr !== null && window.cancelAnimationFrame(Nr), Nr = null, Wa?.abort(), qa?.abort(), qa = null, ha += 1, va?.abort(), va = null, ri?.removeEventListener ? ri.removeEventListener("change", Or) : ri?.removeListener?.(Or), ri = null, ts = null;
    });
    const $r = /* @__PURE__ */ Lt({}), Fr = /* @__PURE__ */ Lt({});
    async function tf(f, c) {
      const s = c?.currentTarget?.closest?.("form") || c?.currentTarget;
      if (!s || !f?.starUrl || $r[f.id]) return;
      const x = !!f.starred;
      $r[f.id] = !0, Fr[f.id] = "", f.starred = !x;
      try {
        (await fetch(f.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (f.starred = x, Fr[f.id] = b("library", "Could not update star. Try again."));
      } catch {
        f.starred = x, Fr[f.id] = b("library", "Could not update star. Try again.");
      } finally {
        $r[f.id] = !1;
      }
    }
    return (f, c) => (m(), je(g(fT), { "app-name": "library" }, {
      default: Pe(() => [
        Ae(g(W0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Pe(() => [
            Ae(g(Uv), null, {
              default: Pe(() => [
                (m(!0), _(ne, null, ke(Uo.value, (s) => (m(), je(g(Xc), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (m(!0), _(ne, null, ke(vr.value, (s) => (m(), je(g(Xc), {
                  key: s.key,
                  class: "library-navigation-saved-collection",
                  active: s.active,
                  href: s.href,
                  name: s.name,
                  "inline-actions": 1,
                  "force-display-actions": ""
                }, {
                  actions: Pe(() => [
                    Ae(g(qv), {
                      type: "button",
                      class: "library-navigation-saved-collection-delete-action",
                      "aria-label": `${g(b)("library", "Delete collection")}: ${s.rawName}`,
                      onClick: (x) => gb(s.id)
                    }, {
                      default: Pe(() => [
                        ge(v(g(b)("library", "Delete collection")), 1)
                      ]),
                      _: 1
                    }, 8, ["aria-label", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["active", "href", "name"]))), 128)),
                Ae(g(Xc), {
                  active: aa.value,
                  href: Li.value,
                  name: Ba.value > 0 ? `${g(b)("library", "Review")} (${Ba.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Pe(() => [
            l("section", TT, [
              l("h2", ET, v(g(b)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(b)("library", "Catalogue search and filters"),
                onSubmit: ye(Fd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: C.folder
                }, null, 8, OT),
                (m(!0), _(ne, null, ke(wd.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, xT))), 128)),
                C.sort && C.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: C.sort
                }, null, 8, NT)) : $("", !0),
                C.view && C.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: C.view
                }, null, 8, LT)) : $("", !0),
                l("fieldset", RT, [
                  l("legend", null, v(g(b)("library", "Content")), 1),
                  wt.value.find((s) => s.key === "content")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("content"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[0] || (c[0] = ye((s) => cs("content"), ["prevent"]))
                  }, v(g(b)("library", "Clear Content")), 9, IT)) : $("", !0),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ge(v(g(b)("library", "Search")) + " ", 1),
                      c[113] || (c[113] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Ie(l("input", {
                      ref_key: "quickSearchInput",
                      ref: xr,
                      "onUpdate:modelValue": c[1] || (c[1] = (s) => de.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, $T), [
                      [ft, de.value]
                    ]),
                    sn("q") ? (m(), _("small", FT, v(xn("q")), 1)) : $("", !0)
                  ], 8, PT),
                  l("label", null, [
                    ge(v(g(b)("library", "Type")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[2] || (c[2] = (s) => C.type = s),
                      name: "type",
                      onChange: c[3] || (c[3] = (s) => ln(s))
                    }, [
                      l("option", DT, v(g(b)("library", "All types")), 1),
                      (m(!0), _(ne, null, ke(L.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, MT))), 128))
                    ], 544), [
                      [Zt, C.type]
                    ])
                  ]),
                  l("div", zT, [
                    l("label", UT, v(g(b)("library", "Publisher")), 1),
                    Ie(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": c[4] || (c[4] = (s) => J.value = s),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publishers"),
                      title: g(b)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": Kd("desktop", "publisher"),
                      "aria-expanded": F.value && Y.value.length > 0 ? "true" : "false",
                      onFocus: c[5] || (c[5] = (s) => Gd("publisher")),
                      onKeydown: c[6] || (c[6] = (s) => qd(s, "publisher"))
                    }, null, 40, jT), [
                      [ft, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: C.publisher
                    }, null, 8, BT),
                    sn("publisher") ? (m(), _("small", HT, v(xn("publisher")), 1)) : $("", !0),
                    F.value && Y.value.length > 0 ? (m(), _("ul", VT, [
                      (m(!0), _(ne, null, ke(Y.value, (s, x) => (m(), _("li", {
                        id: vc("desktop", "publisher", x),
                        key: s,
                        role: "option",
                        "aria-selected": oi.publisher === x ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: c[7] || (c[7] = ye(() => {
                          }, ["prevent"])),
                          onClick: (W) => Md(s, W)
                        }, v(s), 41, GT)
                      ], 8, KT))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publisher-apply", ai("publisher")])
                    }, v(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", qT, [
                    l("label", WT, v(g(b)("library", "Series / periodical")), 1),
                    Ie(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": c[8] || (c[8] = (s) => re.value = s),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && X.value.length > 0 ? "true" : "false",
                      onFocus: c[9] || (c[9] = (s) => Z.value = !0),
                      onKeydown: c[10] || (c[10] = it((s) => Z.value = !1, ["escape"]))
                    }, null, 40, YT), [
                      [ft, re.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: C.publication
                    }, null, 8, XT),
                    sn("publication") ? (m(), _("small", ZT, v(xn("publication")), 1)) : $("", !0),
                    Z.value && X.value.length > 0 ? (m(), _("ul", JT, [
                      (m(!0), _(ne, null, ke(X.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: c[11] || (c[11] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => $d(s, x)
                        }, v(s), 41, QT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publication-apply", ai("publication")])
                    }, v(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", eE, [
                    l("label", tE, v(g(b)("library", "Publication year")), 1),
                    Ie(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": c[12] || (c[12] = (s) => tt.value = s),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                      onFocus: c[13] || (c[13] = (s) => dt.value = !0),
                      onKeydown: c[14] || (c[14] = it((s) => dt.value = !1, ["escape"]))
                    }, null, 40, nE), [
                      [ft, tt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: C.year
                    }, null, 8, iE),
                    sn("year") ? (m(), _("small", aE, v(xn("year")), 1)) : $("", !0),
                    dt.value && gn.value.length > 0 ? (m(), _("ul", rE, [
                      (m(!0), _(ne, null, ke(gn.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: c[15] || (c[15] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => Vd(s, x)
                        }, v(s), 41, oE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-year-apply", ai("year")])
                    }, v(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", sE, [
                    l("label", lE, v(g(b)("library", "Creator")), 1),
                    Ie(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": c[16] || (c[16] = (s) => fe.value = s),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search creators"),
                      title: g(b)("library", "Exact full-field creator matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Se.value && Ke.value.length > 0 ? "true" : "false",
                      onFocus: c[17] || (c[17] = (s) => Se.value = !0),
                      onKeydown: c[18] || (c[18] = it((s) => Se.value = !1, ["escape"]))
                    }, null, 40, cE), [
                      [ft, fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: C.creator
                    }, null, 8, uE),
                    sn("creator") ? (m(), _("small", dE, v(xn("creator")), 1)) : $("", !0),
                    Se.value && Ke.value.length > 0 ? (m(), _("ul", fE, [
                      (m(!0), _(ne, null, ke(Ke.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: c[19] || (c[19] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => Dd(s, x)
                        }, v(s), 41, pE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-creator-apply", ai("creator")])
                    }, v(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", hE, [
                    l("label", vE, v(g(b)("library", "Nextcloud tag")), 1),
                    Ie(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": c[20] || (c[20] = (s) => Fe.value = s),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                      onFocus: c[21] || (c[21] = (s) => He.value = !0),
                      onKeydown: c[22] || (c[22] = it((s) => He.value = !1, ["escape"]))
                    }, null, 40, gE), [
                      [ft, Fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: C.tag
                    }, null, 8, bE),
                    He.value && vt.value.length > 0 ? (m(), _("ul", mE, [
                      (m(!0), _(ne, null, ke(vt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: c[23] || (c[23] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => Ud(s, x)
                        }, v(s), 41, yE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-tag-apply", ai("tag")])
                    }, v(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ge(v(g(b)("library", "Format")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[24] || (c[24] = (s) => C.format = s),
                      name: "format",
                      onChange: c[25] || (c[25] = (s) => ln(s))
                    }, [
                      l("option", _E, v(g(b)("library", "All formats")), 1),
                      (m(!0), _(ne, null, ke(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(ds(s)), 9, wE))), 128))
                    ], 544), [
                      [Zt, C.format]
                    ])
                  ])
                ]),
                l("fieldset", SE, [
                  l("legend", null, v(g(b)("library", "Location")), 1),
                  wt.value.find((s) => s.key === "location")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("location"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[26] || (c[26] = ye((s) => cs("location"), ["prevent"]))
                  }, v(g(b)("library", "Clear Location")), 9, CE)) : $("", !0),
                  l("label", null, [
                    ge(v(g(b)("library", "Shelf")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[27] || (c[27] = (s) => C.shelf = s),
                      name: "shelf",
                      onChange: c[28] || (c[28] = (s) => ln(s))
                    }, [
                      l("option", kE, v(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ne, null, ke(k.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, TE))), 128))
                    ], 544), [
                      [Zt, C.shelf]
                    ])
                  ]),
                  l("div", EE, [
                    l("label", AE, v(g(b)("library", "Folder")), 1),
                    Ie(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": c[29] || (c[29] = (s) => nt.value = s),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Type at least 3 path characters"),
                      title: g(b)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ut.value && Ft.value.length > 0 ? "true" : "false",
                      onFocus: c[30] || (c[30] = (s) => ut.value = !0),
                      onKeydown: c[31] || (c[31] = it((s) => ut.value = !1, ["escape"]))
                    }, null, 40, OE), [
                      [ft, nt.value]
                    ]),
                    ut.value && Ft.value.length > 0 ? (m(), _("ul", xE, [
                      (m(!0), _(ne, null, ke(Ft.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: c[32] || (c[32] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => jd(s, x)
                        }, v(s), 41, NE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-folder-apply", ai("folder")])
                    }, v(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", LE, [
                  l("legend", null, v(g(b)("library", "Review")), 1),
                  wt.value.find((s) => s.key === "review")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("review"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[33] || (c[33] = ye((s) => cs("review"), ["prevent"]))
                  }, v(g(b)("library", "Clear Review")), 9, RE)) : $("", !0),
                  l("label", null, [
                    ge(v(g(b)("library", "Scan status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[34] || (c[34] = (s) => C.status = s),
                      name: "status",
                      onChange: c[35] || (c[35] = (s) => ln(s))
                    }, [
                      l("option", IE, v(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ne, null, ke(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, PE))), 128))
                    ], 544), [
                      [Zt, C.status]
                    ])
                  ]),
                  l("label", null, [
                    ge(v(g(b)("library", "Workflow status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[36] || (c[36] = (s) => C.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: c[37] || (c[37] = (s) => ln(s))
                    }, [
                      l("option", $E, v(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ne, null, ke(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, v(s), 9, FE))), 128))
                    ], 544), [
                      [Zt, C.workflowStatus]
                    ])
                  ]),
                  l("div", DE, [
                    l("label", ME, v(g(b)("library", "Subject")), 1),
                    Ie(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": c[38] || (c[38] = (s) => O.value = s),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search subjects"),
                      title: g(b)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                      onFocus: c[39] || (c[39] = (s) => R.value = !0),
                      onKeydown: c[40] || (c[40] = it((s) => R.value = !1, ["escape"]))
                    }, null, 40, zE), [
                      [ft, O.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: C.subject
                    }, null, 8, UE),
                    sn("subject") ? (m(), _("small", jE, v(xn("subject")), 1)) : $("", !0),
                    R.value && j.value.length > 0 ? (m(), _("ul", BE, [
                      (m(!0), _(ne, null, ke(j.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: c[41] || (c[41] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => Hd(s, x)
                        }, v(s), 41, HE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "button",
                      class: be(["button secondary library-subject-apply", ai("subject")]),
                      onClick: ab
                    }, v(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", VE, [
                    l("label", KE, v(g(b)("library", "Classification")), 1),
                    Ie(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": c[42] || (c[42] = (s) => V.value = s),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search classifications"),
                      title: g(b)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: c[43] || (c[43] = (s) => he.value = !0),
                      onKeydown: c[44] || (c[44] = it((s) => he.value = !1, ["escape"]))
                    }, null, 40, GE), [
                      [ft, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: C.classification
                    }, null, 8, qE),
                    he.value && ve.value.length > 0 ? (m(), _("ul", WE, [
                      (m(!0), _(ne, null, ke(ve.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: c[45] || (c[45] = ye(() => {
                          }, ["prevent"])),
                          onClick: (x) => zd(s, x)
                        }, v(s), 41, YE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-classification-apply", ai("classification")])
                    }, v(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ge(v(g(b)("library", "Suggested updates")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[46] || (c[46] = (s) => C.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: c[47] || (c[47] = (s) => ln(s))
                    }, [
                      l("option", XE, v(g(b)("library", "All metadata")), 1),
                      l("option", ZE, v(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Zt, C.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", JE, [
                  l("legend", null, v(g(b)("library", "Personal / display")), 1),
                  wt.value.find((s) => s.key === "personal")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("personal"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[48] || (c[48] = ye((s) => cs("personal"), ["prevent"]))
                  }, v(g(b)("library", "Clear Personal / display")), 9, QE)) : $("", !0)
                ]),
                l("button", e2, v(g(b)("library", "Apply filters")), 1),
                ue.value.length > 0 ? (m(), _("a", {
                  key: 2,
                  href: ba(),
                  class: "button secondary",
                  onClick: ye(ma, ["prevent"])
                }, v(g(b)("library", "Clear")), 9, t2)) : $("", !0)
              ], 40, AT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ni.value
            }, [
              c[114] || (c[114] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(b)("library", "Settings")), 1)
            ], 8, n2)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(g(u0), null, {
          default: Pe(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              ce.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, v(g(b)("library", "Active filters")), 1),
                (m(!0), _(ne, null, ke(ce.value, (s) => (m(), _("a", {
                  key: s.key,
                  href: Rr(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: ye((x) => Ir(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    ge(v(s.label), 1),
                    s.displayValue ? (m(), _(ne, { key: 0 }, [
                      ge(":")
                    ], 64)) : $("", !0)
                  ]),
                  s.displayValue ? (m(), _(ne, { key: 0 }, [
                    c[115] || (c[115] = ge(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, o2)
                  ], 64)) : $("", !0),
                  c[116] || (c[116] = ge()),
                  c[117] || (c[117] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, r2))), 128)),
                ue.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: ba(),
                  class: "library-active-filter-clear-all",
                  onClick: ye(ma, ["prevent"])
                }, v(g(b)("library", "Clear all")), 9, s2)) : $("", !0)
              ], 8, a2)) : $("", !0),
              aa.value ? (m(), _("section", l2, [
                l("header", c2, [
                  l("p", u2, v(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", d2, v(g(b)("library", "Review")), 1),
                  l("p", null, v(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ne, null, ke(Bg.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: be(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: ye((x) => sb(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(ub(s.countKey)), 1)
                  ], 10, p2))), 128))
                ], 8, f2),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: ye(xt, ["prevent"])
                }, [
                  (m(!0), _(ne, null, ke(xg.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, v2))), 128)),
                  l("label", null, [
                    ge(v(g(b)("library", "Search within this queue")), 1),
                    Ie(l("input", {
                      "onUpdate:modelValue": c[49] || (c[49] = (s) => C.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, C.q]
                    ])
                  ]),
                  l("button", g2, v(g(b)("library", "Apply")), 1)
                ], 40, h2),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Ot.loading ? "true" : "false"
                }, [
                  Ot.loading ? (m(), _("span", m2, v(g(b)("library", "Loading review queue…")), 1)) : $("", !0)
                ], 8, b2),
                Ot.error ? (m(), _("p", y2, v(Ot.error), 1)) : $("", !0),
                Fi.value.enabled ? (m(), _("section", _2, [
                  l("div", w2, [
                    l("p", S2, v(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(b)("library", "Review next suggestion")), 9, C2)
                  ]),
                  Fi.value.item ? (m(), _("article", k2, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", T2, v(Fi.value.item.title), 1)
                      ]),
                      l("span", E2, [
                        l("bdi", A2, v(Fi.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", O2, [
                      (m(!0), _(ne, null, ke(Fi.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", x2, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", N2, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", L2, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", R2, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", I2, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", P2, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Fi.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Mt.value
                          }, null, 8, F2),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, D2),
                          c[118] || (c[118] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", M2, v(g(b)("library", "Use suggested value")), 1)
                        ], 8, $2)
                      ]))), 128))
                    ]),
                    l("footer", z2, [
                      l("a", {
                        class: "button secondary",
                        href: Fi.value.item.detailsUrl
                      }, v(g(b)("library", "Maintenance")), 9, U2),
                      l("a", {
                        class: "button secondary",
                        href: Fi.value.skipUrl
                      }, v(g(b)("library", "Skip to next suggestion")), 9, j2)
                    ])
                  ])) : $("", !0)
                ])) : $("", !0),
                y.value.length === 0 && !Ot.loading && !Ot.error ? (m(), _("div", B2, [
                  l("h3", null, v(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: gt.value
                  }, v(g(b)("library", "Back to Library")), 9, H2)
                ])) : (m(), _("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (m(!0), _(ne, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (x) => Vn(s, x)
                        }, [
                          l("bdi", G2, v(s.title), 1)
                        ], 8, K2)
                      ]),
                      s.creators ? (m(), _("p", q2, [
                        l("bdi", W2, v(s.creators), 1)
                      ])) : $("", !0),
                      s.scanError ? (m(), _("p", Y2, [
                        l("bdi", X2, v(s.scanError), 1)
                      ])) : $("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (x) => Vn(s, x)
                      }, v(g(b)("library", "Details")), 9, Z2),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (x) => bn(s, x)
                      }, v(g(b)("library", "Open")), 9, J2)
                    ])
                  ]))), 128))
                ], 8, V2)),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, eA)) : (m(), _("span", tA, v(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    ge(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", nA, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, iA)) : (m(), _("span", aA, v(g(b)("library", "Next")), 1))
                ], 8, Q2)) : $("", !0)
              ])) : ra.value ? (m(), _("main", rA, [
                l("header", oA, [
                  l("p", sA, v(g(b)("library", "Your library")), 1),
                  l("h2", lA, v(g(b)("library", "Home")), 1)
                ]),
                ue.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ne, null, ke(ue.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Rr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((x) => Ir(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(v(s.label), 1),
                        s.displayValue ? (m(), _(ne, { key: 0 }, [
                          ge(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ne, { key: 0 }, [
                        c[119] || (c[119] = ge(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, fA)
                      ], 64)) : $("", !0),
                      c[120] || (c[120] = ge()),
                      c[121] || (c[121] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, dA))), 128))
                  ], 8, uA),
                  l("p", pA, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Et.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, hA),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, vA)
                  ])
                ], 8, cA)) : $("", !0),
                l("section", gA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", bA, v(g(b)("library", "Continue reading")), 1),
                      l("p", mA, v(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?recentlyOpened=1&sort=lastOpened`
                    }, v(g(b)("library", "View all")), 9, yA)
                  ]),
                  Qo.value.continueReading.length ? (m(), _("div", _A, [
                    (m(!0), _(ne, null, ke(Qo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (x) => Vn(s, x)
                      }, [
                        l("span", SA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, CA)
                        ])
                      ], 8, wA),
                      l("div", kA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => Vn(s, x)
                          }, [
                            l("bdi", EA, v(s.title), 1)
                          ], 8, TA)
                        ]),
                        s.creators ? (m(), _("p", AA, [
                          l("bdi", OA, v(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (x) => bn(s, x)
                        }, v(g(b)("library", "Open")), 9, xA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", NA, v(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", LA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", RA, v(g(b)("library", "Recently added")), 1),
                      l("p", IA, v(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?sort=recent`
                    }, v(g(b)("library", "View all")), 9, PA)
                  ]),
                  Qo.value.recentlyAdded.length ? (m(), _("div", $A, [
                    (m(!0), _(ne, null, ke(Qo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (x) => Vn(s, x)
                      }, [
                        l("span", DA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, MA)
                        ])
                      ], 8, FA),
                      l("div", zA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => Vn(s, x)
                          }, [
                            l("bdi", jA, v(s.title), 1)
                          ], 8, UA)
                        ]),
                        s.creators ? (m(), _("p", BA, [
                          l("bdi", HA, v(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (x) => bn(s, x)
                        }, v(g(b)("library", "Open")), 9, VA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", KA, v(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", GA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", qA, v(g(b)("library", "Shelves")), 1),
                      l("p", WA, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: rn.value }, v(g(b)("library", "View all")), 9, YA)
                  ]),
                  Sd.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ne, null, ke(Sd.value, (s) => (m(), _("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", JA, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(dn)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, ZA))), 128))
                  ], 8, XA)) : (m(), _("p", QA, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(cc.value.count || 0) > 0 ? (m(), _("aside", eO, [
                  l("div", null, [
                    l("h3", tO, v(g(b)("library", "Needs attention")), 1),
                    l("p", nO, v(g(dn)("library", "%n publication needs better details.", "%n publications need better details.", Number(cc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: cc.value.url
                  }, v(g(b)("library", "Review")), 9, iO)
                ])) : $("", !0)
              ])) : Ri.value ? (m(), _("main", aO, [
                l("header", rO, [
                  l("p", oO, v(g(b)("library", "Your library")), 1),
                  l("h2", sO, v(g(b)("library", "Shelves")), 1),
                  l("p", lO, v(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                ue.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, v(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ne, null, ke(ue.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Rr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((x) => Ir(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(v(s.label), 1),
                        s.displayValue ? (m(), _(ne, { key: 0 }, [
                          ge(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ne, { key: 0 }, [
                        c[122] || (c[122] = ge(v(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, v(s.displayValue), 9, fO)
                      ], 64)) : $("", !0),
                      c[123] || (c[123] = ge()),
                      c[124] || (c[124] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, dO))), 128))
                  ], 8, uO),
                  l("p", pO, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Et.value
                    }, v(g(b)("library", "View filtered catalogue")), 9, hO),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, v(g(b)("library", "Clear all")), 9, vO)
                  ])
                ], 8, cO)) : $("", !0),
                Cd.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", bO, [
                    (m(!0), _(ne, null, ke(Cd.value, (s) => (m(), je(kT, {
                      key: s.id,
                      node: s,
                      "children-url": ec.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, gO)) : (m(), _("section", mO, [
                  l("h3", null, v(g(b)("library", "Shelves")), 1),
                  l("p", yO, v(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", _O, [
                    l("a", {
                      class: "button primary",
                      href: Ni.value
                    }, v(g(b)("library", "Add a Library root")), 9, wO),
                    l("a", {
                      class: "button secondary",
                      href: gt.value
                    }, v(g(b)("library", "All publications")), 9, SO)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: be(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Ot.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Ot.loading ? "true" : "false"
              }, [
                l("header", kO, [
                  mr.value ? (m(), _("p", TO, v(oa.value), 1)) : $("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: qo,
                    tabindex: "-1"
                  }, v(Go.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: Eg
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": kg.value
                  }, [
                    l("span", AO, v(g(dn)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, v(Cg.value), 1)
                  ], 8, EO),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(b)("library", "Mobile catalogue filters"),
                    onSubmit: ye(Fd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: C.folder
                    }, null, 8, xO),
                    (m(!0), _(ne, null, ke(wd.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, NO))), 128)),
                    l("fieldset", LO, [
                      l("legend", null, v(g(b)("library", "Content")), 1),
                      l("label", RO, [
                        l("span", null, v(g(b)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: sa,
                          "onUpdate:modelValue": c[50] || (c[50] = (s) => de.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, IO), [
                          [ft, de.value]
                        ])
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[51] || (c[51] = (s) => C.type = s),
                          name: "type",
                          onChange: c[52] || (c[52] = (s) => ln(s))
                        }, [
                          l("option", PO, v(g(b)("library", "All types")), 1),
                          (m(!0), _(ne, null, ke(L.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, $O))), 128))
                        ], 544), [
                          [Zt, C.type]
                        ])
                      ]),
                      l("div", FO, [
                        l("label", DO, v(g(b)("library", "Publisher")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": c[53] || (c[53] = (s) => J.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publishers"),
                          title: g(b)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": Kd("mobile", "publisher"),
                          "aria-expanded": F.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: c[54] || (c[54] = (s) => Gd("publisher")),
                          onKeydown: c[55] || (c[55] = (s) => qd(s, "publisher"))
                        }, null, 40, MO), [
                          [ft, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: C.publisher
                        }, null, 8, zO),
                        sn("publisher") ? (m(), _("small", UO, v(xn("publisher")), 1)) : $("", !0),
                        On.value && F.value && Y.value.length > 0 ? (m(), _("ul", jO, [
                          (m(!0), _(ne, null, ke(Y.value, (s, x) => (m(), _("li", {
                            id: vc("mobile", "publisher", x),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": oi.publisher === x ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: c[56] || (c[56] = ye(() => {
                              }, ["prevent"])),
                              onClick: (W) => Md(s, W)
                            }, v(s), 41, HO)
                          ], 8, BO))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", VO, [
                        l("label", KO, v(g(b)("library", "Series / periodical")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": c[57] || (c[57] = (s) => re.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": Z.value && X.value.length > 0 ? "true" : "false",
                          onFocus: c[58] || (c[58] = (s) => Z.value = !0),
                          onKeydown: c[59] || (c[59] = it((s) => Z.value = !1, ["escape"]))
                        }, null, 40, GO), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: C.publication
                        }, null, 8, qO),
                        sn("publication") ? (m(), _("small", WO, v(xn("publication")), 1)) : $("", !0),
                        On.value && Z.value && X.value.length > 0 ? (m(), _("ul", YO, [
                          (m(!0), _(ne, null, ke(X.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: c[60] || (c[60] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => $d(s, x)
                            }, v(s), 41, XO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", ZO, [
                        l("label", JO, v(g(b)("library", "Publication year")), 1),
                        Ie(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": c[61] || (c[61] = (s) => tt.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                          onFocus: c[62] || (c[62] = (s) => dt.value = !0),
                          onKeydown: c[63] || (c[63] = it((s) => dt.value = !1, ["escape"]))
                        }, null, 40, QO), [
                          [ft, tt.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: C.year
                        }, null, 8, ex),
                        sn("year") ? (m(), _("small", tx, v(xn("year")), 1)) : $("", !0),
                        On.value && dt.value && gn.value.length > 0 ? (m(), _("ul", nx, [
                          (m(!0), _(ne, null, ke(gn.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: c[64] || (c[64] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => Vd(s, x)
                            }, v(s), 41, ix)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", ax, [
                        l("label", rx, v(g(b)("library", "Creator")), 1),
                        Ie(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": c[65] || (c[65] = (s) => fe.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search creators"),
                          title: g(b)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": Se.value && Ke.value.length > 0 ? "true" : "false",
                          onFocus: c[66] || (c[66] = (s) => Se.value = !0),
                          onKeydown: c[67] || (c[67] = it((s) => Se.value = !1, ["escape"]))
                        }, null, 40, ox), [
                          [ft, fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: C.creator
                        }, null, 8, sx),
                        sn("creator") ? (m(), _("small", lx, v(xn("creator")), 1)) : $("", !0),
                        On.value && Se.value && Ke.value.length > 0 ? (m(), _("ul", cx, [
                          (m(!0), _(ne, null, ke(Ke.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: c[68] || (c[68] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => Dd(s, x)
                            }, v(s), 41, ux)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[69] || (c[69] = (s) => C.format = s),
                          name: "format",
                          onChange: c[70] || (c[70] = (s) => ln(s))
                        }, [
                          l("option", dx, v(g(b)("library", "All formats")), 1),
                          (m(!0), _(ne, null, ke(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(ds(s)), 9, fx))), 128))
                        ], 544), [
                          [Zt, C.format]
                        ])
                      ]),
                      l("div", px, [
                        l("label", hx, v(g(b)("library", "Subject")), 1),
                        Ie(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": c[71] || (c[71] = (s) => O.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search subjects"),
                          title: g(b)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                          onFocus: c[72] || (c[72] = (s) => R.value = !0),
                          onKeydown: c[73] || (c[73] = it((s) => R.value = !1, ["escape"]))
                        }, null, 40, vx), [
                          [ft, O.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: C.subject
                        }, null, 8, gx),
                        sn("subject") ? (m(), _("small", bx, v(xn("subject")), 1)) : $("", !0),
                        On.value && R.value && j.value.length > 0 ? (m(), _("ul", mx, [
                          (m(!0), _(ne, null, ke(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: c[74] || (c[74] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => Hd(s, x)
                            }, v(s), 41, yx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", _x, [
                        l("label", wx, v(g(b)("library", "Classification")), 1),
                        Ie(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": c[75] || (c[75] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search classifications"),
                          title: g(b)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                          onFocus: c[76] || (c[76] = (s) => he.value = !0),
                          onKeydown: c[77] || (c[77] = it((s) => he.value = !1, ["escape"]))
                        }, null, 40, Sx), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: C.classification
                        }, null, 8, Cx),
                        On.value && he.value && ve.value.length > 0 ? (m(), _("ul", kx, [
                          (m(!0), _(ne, null, ke(ve.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: c[78] || (c[78] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => zd(s, x)
                            }, v(s), 41, Tx)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", Ex, [
                      l("legend", null, v(g(b)("library", "Location")), 1),
                      l("label", null, [
                        ge(v(g(b)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[79] || (c[79] = (s) => C.shelf = s),
                          name: "shelf",
                          onChange: c[80] || (c[80] = (s) => ln(s))
                        }, [
                          l("option", Ax, v(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ne, null, ke(k.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, Ox))), 128))
                        ], 544), [
                          [Zt, C.shelf]
                        ])
                      ]),
                      l("div", xx, [
                        l("label", Nx, v(g(b)("library", "Folder")), 1),
                        Ie(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": c[81] || (c[81] = (s) => nt.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Type at least 3 path characters"),
                          title: g(b)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": ut.value && Ft.value.length > 0 ? "true" : "false",
                          onFocus: c[82] || (c[82] = (s) => ut.value = !0),
                          onKeydown: c[83] || (c[83] = it((s) => ut.value = !1, ["escape"]))
                        }, null, 40, Lx), [
                          [ft, nt.value]
                        ]),
                        On.value && ut.value && Ft.value.length > 0 ? (m(), _("ul", Rx, [
                          (m(!0), _(ne, null, ke(Ft.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: c[84] || (c[84] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => jd(s, x)
                            }, v(s), 41, Ix)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", Px, [
                      l("legend", null, v(g(b)("library", "Review")), 1),
                      l("label", null, [
                        ge(v(g(b)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[85] || (c[85] = (s) => C.status = s),
                          name: "status",
                          onChange: c[86] || (c[86] = (s) => ln(s))
                        }, [
                          l("option", $x, v(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ne, null, ke(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Fx))), 128))
                        ], 544), [
                          [Zt, C.status]
                        ])
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[87] || (c[87] = (s) => C.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: c[88] || (c[88] = (s) => ln(s))
                        }, [
                          l("option", Dx, v(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ne, null, ke(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, Mx))), 128))
                        ], 544), [
                          [Zt, C.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[89] || (c[89] = (s) => C.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: c[90] || (c[90] = (s) => ln(s))
                        }, [
                          l("option", zx, v(g(b)("library", "All metadata")), 1),
                          l("option", Ux, v(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Zt, C.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", jx, [
                      l("legend", null, v(g(b)("library", "Personal / display")), 1),
                      l("div", Bx, [
                        l("label", Hx, v(g(b)("library", "Nextcloud tag")), 1),
                        Ie(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": c[91] || (c[91] = (s) => Fe.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: c[92] || (c[92] = (s) => He.value = !0),
                          onKeydown: c[93] || (c[93] = it((s) => He.value = !1, ["escape"]))
                        }, null, 40, Vx), [
                          [ft, Fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: C.tag
                        }, null, 8, Kx),
                        He.value && vt.value.length > 0 ? (m(), _("ul", Gx, [
                          (m(!0), _(ne, null, ke(vt.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: c[94] || (c[94] = ye(() => {
                              }, ["prevent"])),
                              onClick: (x) => Ud(s, x)
                            }, v(s), 41, qx)
                          ]))), 128))
                        ])) : $("", !0),
                        l("button", {
                          type: "submit",
                          class: be(["button secondary library-tag-apply", ai("tag")])
                        }, v(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[95] || (c[95] = (s) => C.sort = s),
                          name: "sort",
                          onChange: xt
                        }, [
                          l("option", Wx, v(g(b)("library", "Title")), 1),
                          l("option", Yx, v(g(b)("library", "Date added")), 1),
                          l("option", Xx, v(g(b)("library", "Publication date")), 1),
                          l("option", Zx, v(g(b)("library", "Series")), 1),
                          l("option", Jx, v(g(b)("library", "Recently opened")), 1),
                          l("option", Qx, v(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Zt, C.sort]
                        ])
                      ]),
                      l("label", null, [
                        ge(v(g(b)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[96] || (c[96] = (s) => C.view = s),
                          name: "view",
                          onChange: xt
                        }, [
                          l("option", e3, v(g(b)("library", "Compact")), 1),
                          l("option", t3, v(g(b)("library", "Gallery")), 1),
                          l("option", n3, v(g(b)("library", "List")), 1),
                          l("option", i3, v(g(b)("library", "Shelf")), 1)
                        ], 544), [
                          [Zt, C.view]
                        ])
                      ])
                    ]),
                    l("div", a3, [
                      ue.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: ba(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: ye(ma, ["prevent"])
                      }, v(g(b)("library", "Clear all")), 9, r3)) : $("", !0),
                      l("button", o3, v(Tg.value), 1)
                    ])
                  ], 40, OO)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: ye(xt, ["prevent"])
                  }, [
                    (m(!0), _(ne, null, ke(Og.value, (s) => (m(), _("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, c3))), 128)),
                    l("label", u3, [
                      ge(v(g(b)("library", "Sort")), 1),
                      Ie(l("select", {
                        "onUpdate:modelValue": c[97] || (c[97] = (s) => C.sort = s),
                        name: "sort",
                        onChange: xt
                      }, [
                        l("option", d3, v(g(b)("library", "Title")), 1),
                        l("option", f3, v(g(b)("library", "Date added")), 1),
                        l("option", p3, v(g(b)("library", "Publication date")), 1),
                        l("option", h3, v(g(b)("library", "Series")), 1),
                        l("option", v3, v(g(b)("library", "Recently opened")), 1),
                        l("option", g3, v(g(b)("library", "Format")), 1)
                      ], 544), [
                        [Zt, C.sort]
                      ])
                    ]),
                    l("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(b)("library", "View")
                    }, [
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: be({ active: zt.value === "compact" }),
                        "aria-pressed": zt.value === "compact" ? "true" : "false",
                        onClick: c[98] || (c[98] = (s) => us("compact"))
                      }, v(g(b)("library", "Compact")), 11, m3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: be({ active: zt.value === "gallery" }),
                        "aria-pressed": zt.value === "gallery" ? "true" : "false",
                        onClick: c[99] || (c[99] = (s) => us("gallery"))
                      }, v(g(b)("library", "Gallery")), 11, y3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: be({ active: zt.value === "list" }),
                        "aria-pressed": zt.value === "list" ? "true" : "false",
                        onClick: c[100] || (c[100] = (s) => us("list"))
                      }, v(g(b)("library", "List")), 11, _3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: be({ active: zt.value === "shelf" }),
                        "aria-pressed": zt.value === "shelf" ? "true" : "false",
                        onClick: c[101] || (c[101] = (s) => us("shelf"))
                      }, v(g(b)("library", "Shelf")), 11, w3)
                    ], 8, b3)
                  ], 40, l3),
                  l("section", S3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, v(g(b)("library", "Collections")), 9, C3),
                    l("form", {
                      method: "post",
                      action: sc.value,
                      class: "library-saved-collection-save-form",
                      title: mc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Mt.value
                      }, null, 8, T3),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: db.value
                      }, null, 8, E3),
                      l("label", null, [
                        ge(v(g(b)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(b)("library", "e.g. Bremen photo books"),
                          disabled: !mc.value,
                          autocomplete: "off"
                        }, null, 8, A3)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !mc.value,
                        title: g(b)("library", "Save current view")
                      }, v(g(b)("library", "Save")), 9, O3)
                    ], 8, k3)
                  ]),
                  Nn.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", N3, [
                      c[125] || (c[125] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, v(g(b)("library", "Batch actions")), 9, L3),
                      l("small", R3, v(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", I3, v(g(dn)("library", "%n publication selected", "%n publications selected", Nn.value.length)), 1)
                    ]),
                    l("p", P3, v(g(dn)("library", "%n publication selected", "%n publications selected", Nn.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Rg
                    }, [
                      l("form", {
                        method: "post",
                        action: ac.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, F3),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, D3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, v(g(b)("library", "Apply")), 9, M3)
                      ], 8, $3),
                      l("form", {
                        method: "post",
                        action: rc.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, U3),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, j3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, v(g(b)("library", "Remove")), 9, B3)
                      ], 8, z3),
                      l("form", {
                        method: "post",
                        action: jn.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, V3),
                        (m(!0), _(ne, null, ke(Jo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, K3))), 128)),
                        c[126] || (c[126] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, v(g(b)("library", "Reset metadata")), 9, G3)
                      ], 8, H3),
                      l("form", {
                        method: "post",
                        action: Ko.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, W3),
                        (m(!0), _(ne, null, ke(Jo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, Y3))), 128)),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Field")), 1),
                          l("select", X3, [
                            l("option", Z3, v(g(b)("library", "Publication type")), 1),
                            l("option", J3, v(g(b)("library", "Subtitle")), 1),
                            l("option", Q3, v(g(b)("library", "Creators")), 1),
                            l("option", eN, v(g(b)("library", "Series / periodical")), 1),
                            l("option", tN, v(g(b)("library", "Publication date")), 1),
                            l("option", nN, v(g(b)("library", "Language")), 1),
                            l("option", iN, v(g(b)("library", "Publisher")), 1),
                            l("option", aN, v(g(b)("library", "Subjects")), 1),
                            l("option", rN, v(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, v(g(b)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, oN)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, v(g(b)("library", "Preview edit")), 9, sN)
                      ], 8, q3),
                      l("form", {
                        method: "post",
                        action: Ha.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, cN),
                        (m(!0), _(ne, null, ke(Jo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, uN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, v(g(b)("library", "Fresh covers")), 9, dN)
                      ], 8, lN)
                    ], 32)
                  ], 8, x3)) : $("", !0)
                ], 8, s3),
                Xo.value ? (m(), _("p", fN, v(Xo.value), 1)) : $("", !0),
                Sr.value ? (m(), _("p", pN, v(Sr.value), 1)) : $("", !0),
                wr.value ? (m(), _("p", hN, v(wr.value), 1)) : $("", !0),
                l("div", vN, [
                  Ot.loading ? (m(), _("span", gN, v(g(b)("library", "Updating catalogue…")), 1)) : Ot.completed ? (m(), _("span", bN, v(g(dn)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : $("", !0)
                ]),
                mr.value ? (m(), _("section", mN, [
                  l("p", yN, v(oa.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Va.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : Pi.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(yr.value), 9, _N),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(dn)("library", "%n item", "%n items", z.value.total)), 1),
                    N.value?.earliestYear && N.value?.latestYear ? (m(), _("span", SN, v(N.value.earliestYear) + "–" + v(N.value.latestYear), 1)) : $("", !0),
                    N.value?.datedCount ? (m(), _("span", CN, v(N.value.datedCount) + " " + v(g(b)("library", "dated")), 1)) : $("", !0),
                    N.value?.undatedCount > 0 ? (m(), _("span", kN, v(N.value.undatedCount) + " " + v(g(b)("library", "undated")), 1)) : $("", !0)
                  ], 8, wN),
                  br.value && N.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(b)("library", "Publication contents")), 1),
                    l("span", null, v(g(dn)("library", "%n item", "%n items", N.value.itemCount)), 1),
                    N.value.earliestYear && N.value.latestYear ? (m(), _("span", EN, v(N.value.earliestYear) + "–" + v(N.value.latestYear), 1)) : $("", !0),
                    l("span", null, v(N.value.datedCount) + " " + v(g(b)("library", "with issue/date coverage")), 1),
                    N.value.undatedCount > 0 ? (m(), _("span", AN, v(N.value.undatedCount) + " " + v(g(b)("library", "without dates yet")), 1)) : $("", !0),
                    l("span", null, v(g(b)("library", "read-only grouping")), 1)
                  ], 8, TN)) : $("", !0),
                  br.value && N.value?.issueGroups?.length ? (m(), _("section", ON, [
                    l("div", null, [
                      l("p", xN, v(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, v(g(b)("library", "Read-only issue/date grouping")), 9, NN)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(b)("library", "Visual issue strip")
                    }, [
                      (m(!0), _(ne, null, ke(N.value.issueGroups, (s) => (m(), _("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, v(s.label), 1),
                        l("strong", null, v(s.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        l("small", null, v(g(dn)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, RN))), 128))
                    ], 8, LN),
                    N.value.gapRanges?.length ? (m(), _("p", IN, v(g(b)("library", "Gap")) + ": " + v(N.value.gapRanges.join(", ")), 1)) : $("", !0),
                    (m(!0), _(ne, null, ke(N.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ne, null, ke(s.items, (x, W) => (m(), _("li", {
                          key: x.itemId
                        }, [
                          l("span", PN, v(x.issueLabel), 1),
                          l("a", {
                            href: x.detailsUrl || "#"
                          }, v(x.title), 9, $N),
                          l("small", null, [
                            ge(v(x.publicationType), 1),
                            x.publicationDate ? (m(), _(ne, { key: 0 }, [
                              ge(" · " + v(x.publicationDate), 1)
                            ], 64)) : $("", !0)
                          ]),
                          l("small", FN, [
                            W > 0 ? (m(), _(ne, { key: 0 }, [
                              ge(v(g(b)("library", "Previous issue")), 1)
                            ], 64)) : $("", !0),
                            W > 0 && W < s.items.length - 1 ? (m(), _(ne, { key: 1 }, [
                              ge(" · ")
                            ], 64)) : $("", !0),
                            W < s.items.length - 1 ? (m(), _(ne, { key: 2 }, [
                              ge(v(g(b)("library", "Next issue")), 1)
                            ], 64)) : $("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    N.value.unknownIssueItems?.length ? (m(), _("details", DN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(b)("library", "Unknown issue/date")) + " · " + v(N.value.unknownIssueItems.length), 9, MN)
                    ])) : $("", !0)
                  ])) : $("", !0),
                  l("p", null, [
                    l("a", {
                      href: gt.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(b)("library", "Back to full catalogue")), 9, zN)
                  ])
                ])) : $("", !0),
                l("div", UN, [
                  l("p", jN, [
                    ge(v(g(b)("library", "Showing")) + " " + v(z.value.from) + "–" + v(z.value.to) + " " + v(g(b)("library", "of")) + " " + v(z.value.total) + " " + v(g(b)("library", "catalogue items")), 1),
                    ue.value.length > 0 ? (m(), _("span", BN, [
                      c[127] || (c[127] = ge(" · ", -1)),
                      l("a", {
                        href: ba(),
                        onClick: ye(ma, ["prevent"])
                      }, v(g(b)("library", "Clear all filters")), 9, HN)
                    ])) : $("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", KN, [
                      ge(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", GN, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, v(g(b)("library", "Previous")), 9, qN)) : (m(), _("span", WN, v(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, v(g(b)("library", "Next")), 9, YN)) : (m(), _("span", XN, v(g(b)("library", "Next")), 1))
                  ], 8, VN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: be(["library-empty-content", { "library-first-run-guidance": Hn.value || ni.value, "library-filter-empty-state": on.value && !Hn.value && !ni.value }]),
                  role: "status"
                }, [
                  Hn.value ? (m(), _(ne, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(b)("library", "Start with one Library root")), 9, ZN),
                    l("p", JN, [
                      l("a", {
                        href: Ni.value,
                        class: "button primary"
                      }, v(g(b)("library", "Add a Library root")), 9, QN),
                      l("span", eL, v(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : ni.value ? (m(), _(ne, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(b)("library", "No enabled Library roots")), 9, tL),
                    l("p", nL, [
                      l("a", {
                        href: Ni.value,
                        class: "button primary"
                      }, v(g(b)("library", "Open Library settings")), 9, iL)
                    ])
                  ], 64)) : on.value ? (m(), _(ne, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(b)("library", "No items match these filters")), 9, aL),
                    ue.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ne, null, ke(ue.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Rr(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: ye((x) => Ir(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ge(v(s.label), 1),
                          s.displayValue ? (m(), _(ne, { key: 0 }, [
                            ge(":")
                          ], 64)) : $("", !0)
                        ]),
                        s.displayValue ? (m(), _(ne, { key: 0 }, [
                          c[128] || (c[128] = ge(v(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, v(s.displayValue), 9, sL)
                        ], 64)) : $("", !0),
                        c[129] || (c[129] = ge()),
                        c[130] || (c[130] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, oL))), 128))
                    ], 8, rL)) : $("", !0),
                    ii.value ? (m(), _("p", lL, v(g(b)("library", "Try removing {filter}.", { filter: ii.value.displayValue ? `${ii.value.label}: ${ii.value.displayValue}` : ii.value.label })), 1)) : $("", !0),
                    l("p", cL, [
                      Sg.value ? (m(), _("a", {
                        key: 0,
                        href: lb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: c[102] || (c[102] = ye((s) => Ir("q"), ["prevent"]))
                      }, v(g(b)("library", "Clear search")), 9, uL)) : $("", !0),
                      ue.value.length > 0 ? (m(), _("a", {
                        key: 1,
                        href: ba(),
                        class: "button primary",
                        onClick: ye(ma, ["prevent"])
                      }, v(g(b)("library", "Clear all filters")), 9, dL)) : $("", !0)
                    ])
                  ], 64)) : (m(), _(ne, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(b)("library", "No catalogue items yet")), 9, fL),
                    l("p", pL, [
                      l("a", {
                        href: Ni.value,
                        class: "button primary"
                      }, v(g(b)("library", "Run a scan from settings")), 9, hL)
                    ])
                  ], 64))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("label", vL, [
                  l("input", {
                    type: "checkbox",
                    checked: Nn.value.length === y.value.length,
                    onChange: Ng
                  }, null, 40, gL),
                  ge(" " + v(g(b)("library", "Select all publications on this page")), 1)
                ])) : $("", !0),
                y.value.length > 0 && zt.value === "list" ? (m(), _("ul", bL, [
                  (m(!0), _(ne, null, ke(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: be(["library-catalogue-list-row", { "library-catalogue-list-row--selected": es.value.has(Number(s.id)), "library-catalogue-list-row--open": $i.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", mL, [
                      l("input", {
                        type: "checkbox",
                        checked: es.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (x) => kd(s.id, x.currentTarget.checked)
                      }, null, 40, yL)
                    ]),
                    l("div", _L, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (x) => Vn(s, x)
                      }, [
                        l("bdi", SL, v(s.title), 1)
                      ], 8, wL),
                      s.creators ? (m(), _("span", CL, [
                        l("bdi", kL, v(s.creators), 1)
                      ])) : $("", !0)
                    ]),
                    l("dl", TL, [
                      s.publication ? (m(), _("div", EL, [
                        l("dt", null, v(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", AL, v(s.publication), 1)
                        ])
                      ])) : $("", !0),
                      s.publicationDate ? (m(), _("div", OL, [
                        l("dt", null, v(g(b)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : $("", !0),
                      s.extension || s.publicationType ? (m(), _("div", xL, [
                        l("dt", null, v(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: be(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? ds(s.extension) : s.publicationType), 11, NL)
                        ])
                      ])) : $("", !0),
                      s.shelf ? (m(), _("div", LL, [
                        l("dt", null, v(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", RL, v(s.shelf), 1)
                        ])
                      ])) : $("", !0)
                    ]),
                    l("div", IL, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (x) => bn(s, x)
                      }, v(g(b)("library", "Open")), 9, PL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (x) => Vn(s, x)
                      }, v(g(b)("library", "Details")), 9, $L)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: be(["library-cover-gallery", te.value])
                }, [
                  (m(!0), _(ne, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: be(["library-cover-card", { "library-cover-card--cover-loaded": Pr(s) === "loaded", "library-cover-card--cover-error": Pr(s) === "error", "library-cover-card--selected": es.value.has(Number(s.id)), "library-cover-card--open": $i.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", FL, [
                      l("input", {
                        type: "checkbox",
                        checked: es.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (x) => kd(s.id, x.currentTarget.checked)
                      }, null, 40, DL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": $i.value && Number(ca.value) === Number(s.id) ? "true" : "false",
                      onClick: (x) => Vn(s, x)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(b)("library", "Details")), 9, zL),
                      l("span", UL, [
                        Pr(s) === "loading" ? (m(), _("span", jL)) : $("", !0),
                        l("img", {
                          class: be(["library-cover-image", { "library-cover-image--loaded": Pr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (x) => bb(s),
                          onError: (x) => mb(s)
                        }, null, 42, BL),
                        Pr(s) === "error" ? (m(), _("span", HL, v(g(b)("library", "Cover unavailable")), 1)) : $("", !0)
                      ])
                    ], 8, ML),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ye((x) => tf(s, x), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Mt.value
                      }, null, 8, KL),
                      c[131] || (c[131] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, GL),
                      l("button", {
                        type: "submit",
                        class: be(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": $r[s.id] ? "true" : void 0,
                        disabled: $r[s.id],
                        onClick: ye((x) => tf(s, x), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, qL),
                      Fr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(Fr[s.id]), 9, WL)) : $("", !0)
                    ], 40, VL),
                    l("div", YL, [
                      l("div", XL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (x) => Vn(s, x)
                          }, [
                            l("bdi", QL, v(s.title), 1)
                          ], 8, JL)
                        ], 8, ZL),
                        s.creators ? (m(), _("p", eR, [
                          l("bdi", tR, v(s.creators), 1)
                        ])) : $("", !0),
                        Jd(s) ? (m(), _("p", nR, [
                          l("bdi", iR, v(Jd(s)), 1)
                        ])) : $("", !0)
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  l("span", rR, [
                    ge(v(g(b)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", oR, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(b)("library", "Previous")), 9, sR)) : (m(), _("span", lR, v(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(b)("library", "Next")), 9, cR)) : (m(), _("span", uR, v(g(b)("library", "Next")), 1))
                ], 8, aR)) : $("", !0)
              ], 10, CO))
            ], 8, i2)
          ]),
          _: 1
        }),
        Ae(g(Xk), {
          ref_key: "sidebarComponent",
          ref: da,
          class: "library-native-item-sidebar",
          open: $i.value,
          "no-toggle": "",
          loading: Xt.loading,
          name: Ce.value?.title || g(b)("library", "Publication details"),
          subname: Ce.value?.creators || "",
          role: fa.value ? "dialog" : void 0,
          "aria-modal": fa.value ? "true" : void 0,
          "aria-labelledby": fa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": fa.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Id,
          onClosed: Hg,
          onClose: Ar
        }, {
          default: Pe(() => [
            l("div", dR, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Td,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(Ce.value?.title || g(b)("library", "Publication details")), 513),
              Xt.loading && !Ce.value ? (m(), _("p", fR, v(g(b)("library", "Loading publication details…")), 1)) : Xt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xt.missing ? "status" : "alert"
              }, [
                l("p", null, v(Xt.error), 1),
                Xt.missing ? $("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: c[103] || (c[103] = (s) => Er(ca.value, { historyMode: "none" }))
                }, v(g(b)("library", "Try again")), 1))
              ], 8, pR)) : Ce.value ? (m(), _(ne, { key: 2 }, [
                l("p", hR, v(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", vR, [
                  l("span", gR, v(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, bR),
                  l("div", mR, [
                    l("p", yR, [
                      l("bdi", _R, v(Ce.value.publicationType || g(b)("library", "Publication")), 1),
                      Ce.value.extension ? (m(), _("span", wR, [
                        c[132] || (c[132] = ge(" · ", -1)),
                        l("bdi", SR, v(ds(Ce.value.extension)), 1)
                      ])) : $("", !0)
                    ]),
                    l("div", CR, [
                      l("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: c[104] || (c[104] = (s) => bn(Ce.value, s))
                      }, v(g(b)("library", "Open")), 9, kR),
                      Ae(g(pd), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Pe(() => [
                          Ae(g(au), {
                            href: Ce.value.filesUrl
                          }, {
                            default: Pe(() => [
                              ge(v(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(au), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: Pe(() => [
                              ge(v(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(au), {
                            href: Ce.value.detailsUrl
                          }, {
                            default: Pe(() => [
                              ge(v(g(b)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": g(b)("library", "Publication detail sections")
                }, [
                  (m(), _(ne, null, ke(Pg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: be({ active: ua.value === s.key }),
                    "aria-current": ua.value === s.key ? "page" : void 0,
                    onClick: (x) => ua.value = s.key
                  }, v(g(b)("library", s.label)), 11, ER)), 64))
                ], 8, TR),
                ua.value === "overview" ? (m(), _("section", AR, [
                  l("h3", OR, v(g(b)("library", "Overview")), 1),
                  Ed.value ? (m(), _("p", xR, [
                    l("bdi", NR, v(Ed.value), 1)
                  ])) : $("", !0),
                  l("dl", LR, [
                    Ce.value.publication ? (m(), _("div", RR, [
                      l("dt", null, v(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: as("publication", Ce.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: c[105] || (c[105] = (s) => rs(s, "publication", Ce.value.publication))
                        }, [
                          l("bdi", PR, v(Ce.value.publication), 1)
                        ], 8, IR)
                      ])
                    ])) : $("", !0),
                    Ce.value.publicationDate ? (m(), _("div", $R, [
                      l("dt", null, v(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        pa.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: as("year", pa.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: c[106] || (c[106] = (s) => rs(s, "year", pa.value))
                        }, v(pa.value), 9, FR)) : $("", !0),
                        pa.value && Ce.value.publicationDate !== pa.value ? (m(), _("span", DR, " · ")) : $("", !0),
                        Ce.value.publicationDate !== pa.value ? (m(), _("span", MR, v(Ce.value.publicationDate), 1)) : $("", !0)
                      ])
                    ])) : $("", !0),
                    Ce.value.publisher ? (m(), _("div", zR, [
                      l("dt", null, v(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: as("publisher", Ce.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: c[107] || (c[107] = (s) => rs(s, "publisher", Ce.value.publisher))
                        }, [
                          l("bdi", jR, v(Ce.value.publisher), 1)
                        ], 8, UR)
                      ])
                    ])) : $("", !0),
                    Ad.value.length ? (m(), _("div", BR, [
                      l("dt", null, v(g(b)("library", "Language")), 1),
                      l("dd", HR, [
                        (m(!0), _(ne, null, ke(Ad.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: as("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (x) => rs(x, "language", s)
                        }, [
                          l("bdi", KR, v(s), 1)
                        ], 8, VR))), 128))
                      ])
                    ])) : $("", !0),
                    Ce.value.shelf ? (m(), _("div", GR, [
                      l("dt", null, v(g(b)("library", "Shelf")), 1),
                      l("dd", null, v(Ce.value.shelf), 1)
                    ])) : $("", !0)
                  ])
                ])) : ua.value === "metadata" ? (m(), _("section", qR, [
                  l("h3", WR, v(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ye(jg, ["prevent"])
                  }, [
                    l("label", null, [
                      ge(v(g(b)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": c[108] || (c[108] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      ge(v(g(b)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": c[109] || (c[109] = (s) => Ut.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, YR), [
                        [ft, Ut.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ne, null, ke(Ut.identifiers, (s, x) => (m(), _("div", {
                        key: x,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.scheme = W,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, XR), [
                          [ft, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.displayValue = W,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, ZR), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (W) => Ug(x)
                        }, v(g(b)("library", "Remove")), 9, JR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: zg
                      }, v(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", QR, v(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Ln.error ? (m(), _("p", e4, v(Ln.error), 1)) : Ln.saved ? (m(), _("p", t4, v(g(b)("library", "Metadata saved.")), 1)) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Ln.saving
                    }, v(Ln.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, n4)
                  ], 32),
                  os(Ce.value).length ? (m(), _("section", i4, [
                    l("h4", a4, v(g(b)("library", "Scanner suggestions")), 1),
                    l("p", r4, v(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ne, null, ke(os(Ce.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          ge(v(g(b)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          c[133] || (c[133] = l("br", null, null, -1)),
                          ge(v(g(b)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : $("", !0)
                ])) : (m(), _("section", o4, [
                  l("h3", s4, v(g(b)("library", "Activity")), 1),
                  l("dl", l4, [
                    l("div", null, [
                      l("dt", null, v(g(b)("library", "Scan status")), 1),
                      l("dd", null, v(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (m(), _("div", c4, [
                      l("dt", null, v(g(b)("library", "Workflow")), 1),
                      l("dd", null, v(Ce.value.workflowStatus), 1)
                    ])) : $("", !0),
                    Ce.value.metadataSource ? (m(), _("div", u4, [
                      l("dt", null, v(g(b)("library", "Metadata source")), 1),
                      l("dd", null, v(Ce.value.metadataSource), 1)
                    ])) : $("", !0),
                    Ce.value.cachedPath ? (m(), _("div", d4, [
                      l("dt", null, v(g(b)("library", "File")), 1),
                      l("dd", f4, [
                        Ce.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: c[110] || (c[110] = (s) => bn(Ce.value, s))
                        }, [
                          l("bdi", h4, v(Ce.value.cachedPath), 1)
                        ], 8, p4)) : (m(), _("bdi", v4, v(Ce.value.cachedPath), 1))
                      ])
                    ])) : $("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !ns.value,
                    onClick: c[111] || (c[111] = (s) => ss(ns.value))
                  }, v(g(b)("library", "Previous item")), 9, b4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !is.value,
                    onClick: c[112] || (c[112] = (s) => ss(is.value))
                  }, v(g(b)("library", "Next item")), 9, m4)
                ], 8, g4)
              ], 64)) : $("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function C4() {
  window.LibraryStartupWatchdog?.fail();
}
function k4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = td("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !k4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  i_(S4, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  C4(), console.error("[library] Vue startup failed", e);
}
