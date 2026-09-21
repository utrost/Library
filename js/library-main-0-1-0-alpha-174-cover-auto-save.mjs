// @__NO_SIDE_EFFECTS__
function Mu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const qe = {}, nr = [], Ci = () => {
}, Wp = () => !1, Ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rl = (e) => e.startsWith("onUpdate:"), yt = Object.assign, zu = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, Cb = Object.prototype.hasOwnProperty, Je = (e, t) => Cb.call(e, t), xe = Array.isArray, qn = (e) => Po(e) === "[object Map]", Da = (e) => Po(e) === "[object Set]", nf = (e) => Po(e) === "[object Date]", De = (e) => typeof e == "function", st = (e) => typeof e == "string", $i = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Yp = (e) => (Qe(e) || De(e)) && De(e.then) && De(e.catch), Xp = Object.prototype.toString, Po = (e) => Xp.call(e), kb = (e) => Po(e).slice(8, -1), Zp = (e) => Po(e) === "[object Object]", Uu = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Mu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Il = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, Tb = /-\w/g, qt = Il(
  (e) => e.replace(Tb, (t) => t.slice(1).toUpperCase())
), Eb = /\B([A-Z])/g, Tn = Il(
  (e) => e.replace(Eb, "-$1").toLowerCase()
), Pl = Il((e) => e.charAt(0).toUpperCase() + e.slice(1)), yc = Il(
  (e) => e ? `on${Pl(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, Jp = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
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
function hi(e) {
  if (xe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = st(n) ? Lb(n) : hi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (st(e) || Qe(e))
    return e;
}
const xb = /;(?![^(]*\))/g, Ob = /:([^]+)/, Nb = /\/\*[^]*?\*\//g;
function Lb(e) {
  const t = {};
  return e.replace(Nb, "").split(xb).forEach((i) => {
    if (i) {
      const n = i.split(Ob);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (st(e))
    t = e;
  else if (xe(e))
    for (let i = 0; i < e.length; i++) {
      const n = be(e[i]);
      n && (t += n + " ");
    }
  else if (Qe(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Ls(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !st(t) && (e.class = be(t)), i && (e.style = hi(i)), e;
}
const Rb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ib = /* @__PURE__ */ Mu(Rb);
function Qp(e) {
  return !!e || e === "";
}
function Pb(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Zn(e[n], t[n]);
  return i;
}
function rf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < i.length; o++)
      if (!n[o] && Zn(a, i[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Zn(e, t) {
  if (e === t) return !0;
  let i = nf(e), n = nf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = $i(e), n = $i(t), i || n)
    return e === t;
  if (i = xe(e), n = xe(t), i || n)
    return i && n ? Pb(e, t) : !1;
  if (i = Qe(e), n = Qe(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = qn(e), n = qn(t), i || n || (i = Da(e), n = Da(t), i || n))
      return i && n ? rf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const u = e.hasOwnProperty(o), d = t.hasOwnProperty(o);
      if (u && !d || !u && d || !Zn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function $b(e, t) {
  return e.findIndex((i) => Zn(i, t));
}
const eh = (e) => !!(e && e.__v_isRef === !0), h = (e) => st(e) ? e : e == null ? "" : xe(e) || Qe(e) && (e.toString === Xp || !De(e.toString)) ? eh(e) ? h(e.value) : JSON.stringify(e, th, 2) : String(e), th = (e, t) => eh(t) ? th(e, t.value) : qn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[_c(n, r) + " =>"] = a, i),
    {}
  )
} : Da(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => _c(i))
} : $i(t) ? _c(t) : Qe(t) && !xe(t) && !Zp(t) ? String(t) : t, _c = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $i(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
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
      let t, i;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, i = n.length; t < i; t++)
          n[t].pause();
      }
      for (t = 0, i = this.effects.length; t < i; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, i;
      if (this.scopes) {
        const a = this.scopes.slice();
        for (t = 0, i = a.length; t < i; t++)
          a[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, i = n.length; t < i; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const i = Nt;
      try {
        return Nt = this, t();
      } finally {
        Nt = i;
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
      let i, n;
      for (i = 0, n = this.effects.length; i < n; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, n = this.cleanups.length; i < n; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        const a = this.scopes.slice();
        for (i = 0, n = a.length; i < n; i++)
          a[i].stop(!0);
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
class ih {
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
    const t = ot, i = Ii;
    ot = this, Ii = !0;
    try {
      return this.fn();
    } finally {
      oh(this), ot = t, Ii = i, this.flags &= -3;
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
let nh = 0, eo, to;
function ah(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = to, to = e;
    return;
  }
  e.next = eo, eo = e;
}
function ju() {
  nh++;
}
function Bu() {
  if (--nh > 0)
    return;
  if (to) {
    let t = to;
    for (to = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; eo; ) {
    let t = eo;
    for (eo = void 0; t; ) {
      const i = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = i;
    }
  }
  if (e) throw e;
}
function rh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function oh(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), Hu(n), zb(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
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
  const t = e.dep, i = ot, n = Ii;
  ot = e, Ii = !0;
  try {
    rh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = i, Ii = n, oh(e), e.flags &= -3;
  }
}
function Hu(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      Hu(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function zb(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Ii = !0;
const lh = [];
function wn() {
  lh.push(Ii), Ii = !1;
}
function Sn() {
  const e = lh.pop();
  Ii = e === void 0 ? !0 : e;
}
function of(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = ot;
    ot = void 0;
    try {
      t();
    } finally {
      ot = i;
    }
  }
}
let go = 0;
class Ub {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Ii || ot === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== ot)
      i = this.activeLink = new Ub(ot, this), ot.deps ? (i.prevDep = ot.depsTail, ot.depsTail.nextDep = i, ot.depsTail = i) : ot.deps = ot.depsTail = i, ch(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = ot.depsTail, i.nextDep = void 0, ot.depsTail.nextDep = i, ot.depsTail = i, ot.deps === i && (ot.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, go++, this.notify(t);
  }
  notify(t) {
    ju();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
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
      for (let n = t.deps; n; n = n.nextDep)
        ch(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const ou = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ Symbol(
  ""
), su = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
);
function Vt(e, t, i) {
  if (Ii && ot) {
    let n = ou.get(e);
    n || ou.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new Dl()), a.map = n, a.key = i), a.track();
  }
}
function hn(e, t, i, n, a, r) {
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
    const d = xe(e), v = d && Uu(i);
    if (d && i === "length") {
      const p = Number(n);
      o.forEach((y, k) => {
        (k === "length" || k === bo || !$i(k) && k >= p) && u(y);
      });
    } else
      switch ((i !== void 0 || o.has(void 0)) && u(o.get(i)), v && u(o.get(bo)), t) {
        case "add":
          d ? v && u(o.get("length")) : (u(o.get(Pa)), qn(e) && u(o.get(su)));
          break;
        case "delete":
          d || (u(o.get(Pa)), qn(e) && u(o.get(su)));
          break;
        case "set":
          qn(e) && u(o.get(Pa));
          break;
      }
  }
  Bu();
}
function Xa(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Vt(t, "iterate", bo), /* @__PURE__ */ ki(e) ? t : t.map(Fi));
}
function Ml(e) {
  return Vt(e = /* @__PURE__ */ Ye(e), "iterate", bo), e;
}
function Yi(e, t) {
  return /* @__PURE__ */ Cn(e) ? dr(/* @__PURE__ */ $a(e) ? Fi(t) : t) : Fi(t);
}
const jb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sc(this, Symbol.iterator, (e) => Yi(this, e));
  },
  concat(...e) {
    return Xa(this).concat(
      ...e.map((t) => xe(t) ? Xa(t) : t)
    );
  },
  entries() {
    return Sc(this, "entries", (e) => (e[1] = Yi(this, e[1]), e));
  },
  every(e, t) {
    return sn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return sn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => Yi(this, n)),
      arguments
    );
  },
  find(e, t) {
    return sn(
      this,
      "find",
      e,
      t,
      (i) => Yi(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return sn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return sn(
      this,
      "findLast",
      e,
      t,
      (i) => Yi(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return sn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return sn(this, "forEach", e, t, void 0, arguments);
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
    return sn(this, "map", e, t, void 0, arguments);
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
    return sn(this, "some", e, t, void 0, arguments);
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
    return Sc(this, "values", (e) => Yi(this, e));
  }
};
function Sc(e, t, i) {
  const n = Ml(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ ki(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Bb = Array.prototype;
function sn(e, t, i, n, a, r) {
  const o = Ml(e), u = o !== e && !/* @__PURE__ */ ki(e), d = o[t];
  if (d !== Bb[t]) {
    const y = d.apply(e, r);
    return u ? Fi(y) : y;
  }
  let v = i;
  o !== e && (u ? v = function(y, k) {
    return i.call(this, Yi(e, y), k, e);
  } : i.length > 2 && (v = function(y, k) {
    return i.call(this, y, k, e);
  }));
  const p = d.call(o, v, n);
  return u && a ? a(p) : p;
}
function sf(e, t, i, n) {
  const a = Ml(e), r = a !== e && !/* @__PURE__ */ ki(e);
  let o = i, u = !1;
  a !== e && (r ? (u = n.length === 0, o = function(v, p, y) {
    return u && (u = !1, v = Yi(e, v)), i.call(this, v, Yi(e, p), y, e);
  }) : i.length > 3 && (o = function(v, p, y) {
    return i.call(this, v, p, y, e);
  }));
  const d = a[t](o, ...n);
  return u ? Yi(e, d) : d;
}
function Cc(e, t, i) {
  const n = /* @__PURE__ */ Ye(e);
  Vt(n, "iterate", bo);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Gu(i[0]) ? (i[0] = /* @__PURE__ */ Ye(i[0]), n[t](...i)) : a;
}
function Dr(e, t, i = []) {
  wn(), ju();
  const n = (/* @__PURE__ */ Ye(e))[t].apply(e, i);
  return Bu(), Sn(), n;
}
const Hb = /* @__PURE__ */ Mu("__proto__,__v_isRef,__isVue"), uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($i)
);
function Vb(e) {
  $i(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Vt(t, "has", e), t.hasOwnProperty(e);
}
class dh {
  constructor(t = !1, i = !1) {
    this._isReadonly = t, this._isShallow = i;
  }
  get(t, i, n) {
    if (i === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, r = this._isShallow;
    if (i === "__v_isReactive")
      return !a;
    if (i === "__v_isReadonly")
      return a;
    if (i === "__v_isShallow")
      return r;
    if (i === "__v_raw")
      return n === (a ? r ? em : vh : r ? hh : ph).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = xe(t);
    if (!a) {
      let d;
      if (o && (d = jb[i]))
        return d;
      if (i === "hasOwnProperty")
        return Vb;
    }
    const u = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : n
    );
    if (($i(i) ? uh.has(i) : Hb(i)) || (a || Vt(t, "get", i), r))
      return u;
    if (/* @__PURE__ */ Wt(u)) {
      const d = o && Uu(i) ? u : u.value;
      return a && Qe(d) ? /* @__PURE__ */ mo(d) : d;
    }
    return Qe(u) ? a ? /* @__PURE__ */ mo(u) : /* @__PURE__ */ Lt(u) : u;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const o = xe(t) && Uu(i);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Cn(r);
      if (!/* @__PURE__ */ ki(n) && !/* @__PURE__ */ Cn(n) && (r = /* @__PURE__ */ Ye(r), n = /* @__PURE__ */ Ye(n)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(n))
        return v || (r.value = n), !0;
    }
    const u = o ? Number(i) < t.length : Je(t, i), d = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && d && (u ? Rt(n, r) && hn(t, "set", i, n) : hn(t, "add", i, n)), d;
  }
  deleteProperty(t, i) {
    const n = Je(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && hn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!$i(i) || !uh.has(i)) && Vt(t, "has", i), n;
  }
  ownKeys(t) {
    return Vt(
      t,
      "iterate",
      xe(t) ? "length" : Pa
    ), Reflect.ownKeys(t);
  }
}
class Kb extends dh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, i) {
    return !0;
  }
  deleteProperty(t, i) {
    return !0;
  }
}
const Gb = /* @__PURE__ */ new fh(), qb = /* @__PURE__ */ new Kb(), Wb = /* @__PURE__ */ new fh(!0);
const lu = (e) => e, fs = (e) => Reflect.getPrototypeOf(e);
function Yb(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = qn(r), u = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, v = a[e](...n), p = i ? lu : t ? dr : Fi;
    return !t && Vt(
      r,
      "iterate",
      d ? su : Pa
    ), yt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: y, done: k } = v.next();
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
  const i = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), u = /* @__PURE__ */ Ye(a);
      e || (Rt(a, u) && Vt(o, "get", a), Vt(o, "get", u));
      const { has: d } = fs(o), v = t ? lu : e ? dr : Fi;
      if (d.call(o, a))
        return v(r.get(a));
      if (d.call(o, u))
        return v(r.get(u));
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
      const o = this, u = o.__v_raw, d = /* @__PURE__ */ Ye(u), v = t ? lu : e ? dr : Fi;
      return !e && Vt(d, "iterate", Pa), u.forEach((p, y) => a.call(r, v(p), v(y), o));
    }
  };
  return yt(
    i,
    e ? {
      add: ps("add"),
      set: ps("set"),
      delete: ps("delete"),
      clear: ps("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = fs(r), u = /* @__PURE__ */ Ye(a), d = !t && !/* @__PURE__ */ ki(a) && !/* @__PURE__ */ Cn(a) ? u : a;
        return o.has.call(r, d) || Rt(a, d) && o.has.call(r, a) || Rt(u, d) && o.has.call(r, u) || (r.add(d), hn(r, "add", d, d)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ ki(r) && !/* @__PURE__ */ Cn(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: u, get: d } = fs(o);
        let v = u.call(o, a);
        v || (a = /* @__PURE__ */ Ye(a), v = u.call(o, a));
        const p = d.call(o, a);
        return o.set(a, r), v ? Rt(r, p) && hn(o, "set", a, r) : hn(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: u } = fs(r);
        let d = o.call(r, a);
        d || (a = /* @__PURE__ */ Ye(a), d = o.call(r, a)), u && u.call(r, a);
        const v = r.delete(a);
        return d && hn(r, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && hn(
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
    i[a] = Yb(a, e, t);
  }), i;
}
function Vu(e, t) {
  const i = Xb(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Je(i, a) && a in n ? i : n,
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
  return /* @__PURE__ */ Cn(e) ? e : Ku(
    e,
    !1,
    Gb,
    Zb,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function im(e) {
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
function Ku(e, t, i, n, a) {
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
    o === 2 ? n : i
  );
  return a.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  return /* @__PURE__ */ Cn(e) ? /* @__PURE__ */ $a(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
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
function nm(e) {
  return !Je(e, "__v_skip") && Object.isExtensible(e) && Jp(e, "__v_skip", !0), e;
}
const Fi = (e) => Qe(e) ? /* @__PURE__ */ Lt(e) : e, dr = (e) => Qe(e) ? /* @__PURE__ */ mo(e) : e;
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
  constructor(t, i) {
    this.dep = new Dl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ Ye(t), this._value = i ? t : Fi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ki(t) || /* @__PURE__ */ Cn(t);
    t = n ? t : /* @__PURE__ */ Ye(t), Rt(t, i) && (this._rawValue = t, this._value = n ? t : Fi(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function mn(e) {
  return De(e) ? e() : g(e);
}
const rm = {
  get: (e, t, i) => t === "__v_raw" ? e : g(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function mh(e) {
  return /* @__PURE__ */ $a(e) ? e : new Proxy(e, rm);
}
class om {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new Dl(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
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
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Dl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = go - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
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
function cm(e, t, i = !1) {
  let n, a;
  return De(e) ? n = e : (n = e.get, a = e.set), new lm(n, a, i);
}
const hs = {}, Rs = /* @__PURE__ */ new WeakMap();
let Ta;
function um(e, t = !1, i = Ta) {
  if (i) {
    let n = Rs.get(i);
    n || Rs.set(i, n = []), n.push(e);
  }
}
function dm(e, t, i = qe) {
  const { immediate: n, deep: a, once: r, scheduler: o, augmentJob: u, call: d } = i, v = (C) => a ? C : /* @__PURE__ */ ki(C) || a === !1 || a === 0 ? vn(C, 1) : vn(C);
  let p, y, k, E, L = !1, A = !1;
  if (/* @__PURE__ */ Wt(e) ? (y = () => e.value, L = /* @__PURE__ */ ki(e)) : /* @__PURE__ */ $a(e) ? (y = () => v(e), L = !0) : xe(e) ? (A = !0, L = e.some((C) => /* @__PURE__ */ $a(C) || /* @__PURE__ */ ki(C)), y = () => e.map((C) => {
    if (/* @__PURE__ */ Wt(C))
      return C.value;
    if (/* @__PURE__ */ $a(C))
      return v(C);
    if (De(C))
      return d ? d(C, 2) : C();
  })) : De(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (k) {
      wn();
      try {
        k();
      } finally {
        Sn();
      }
    }
    const C = Ta;
    Ta = p;
    try {
      return d ? d(e, 3, [E]) : e(E);
    } finally {
      Ta = C;
    }
  } : y = Ci, t && a) {
    const C = y, re = a === !0 ? 1 / 0 : a;
    y = () => vn(C(), re);
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
  return u && u(z), p = new ih(y), p.scheduler = o ? () => o(z, !1) : z, E = (C) => um(C, !1, p), k = p.onStop = () => {
    const C = Rs.get(p);
    if (C) {
      if (d)
        d(C, 4);
      else
        for (const re of C) re();
      Rs.delete(p);
    }
  }, t ? n ? z(!0) : M = p.run() : o ? o(z.bind(null, !0), !0) : p.run(), D.pause = p.pause.bind(p), D.resume = p.resume.bind(p), D.stop = D, D;
}
function vn(e, t = 1 / 0, i) {
  if (t <= 0 || !Qe(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Wt(e))
    vn(e.value, t, i);
  else if (xe(e))
    for (let n = 0; n < e.length; n++)
      vn(e[n], t, i);
  else if (Da(e) || qn(e))
    e.forEach((n) => {
      vn(n, t, i);
    });
  else if (Zp(e)) {
    for (const n in e)
      vn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && vn(e[n], t, i);
  }
  return e;
}
function $o(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    zl(a, t, i);
  }
}
function Ti(e, t, i, n) {
  if (De(e)) {
    const a = $o(e, t, i, n);
    return a && Yp(a) && a.catch((r) => {
      zl(r, t, i);
    }), a;
  }
  if (xe(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Ti(e[r], t, i, n));
    return a;
  }
}
function zl(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; u; ) {
      const p = u.ec;
      if (p) {
        for (let y = 0; y < p.length; y++)
          if (p[y](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      wn(), $o(r, null, 10, [
        e,
        d,
        v
      ]), Sn();
      return;
    }
  }
  fm(e, i, a, n, o);
}
function fm(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ti = [];
let Gi = -1;
const ar = [];
let Kn = null, er = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let Is = null;
function ei(e) {
  const t = Is || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pm(e) {
  let t = Gi + 1, i = ti.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ti[n], r = yo(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function qu(e) {
  if (!(e.flags & 1)) {
    const t = yo(e), i = ti[ti.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yo(i) ? ti.push(e) : ti.splice(pm(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  Is || (Is = yh.then(Ch));
}
function wh(e) {
  if (!xe(e))
    Kn && e.id === -1 ? Kn.splice(er + 1, 0, e) : e.flags & 1 || (ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      ar.push(e[t]);
  _h();
}
function lf(e, t, i = Gi + 1) {
  for (; i < ti.length; i++) {
    const n = ti[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ti.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Sh(e) {
  if (ar.length) {
    const t = [...new Set(ar)].sort(
      (i, n) => yo(i) - yo(n)
    );
    if (ar.length = 0, Kn) {
      for (let i = 0; i < t.length; i++)
        Kn.push(t[i]);
      return;
    }
    for (Kn = t, er = 0; er < Kn.length; er++) {
      const i = Kn[er];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Kn = null, er = 0;
  }
}
const yo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for (Gi = 0; Gi < ti.length; Gi++) {
      const t = ti[Gi];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $o(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gi < ti.length; Gi++) {
      const t = ti[Gi];
      t && (t.flags &= -2);
    }
    Gi = -1, ti.length = 0, Sh(), Is = null, (ti.length || ar.length) && Ch();
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
function Pe(e, t = Pt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && zs(-1);
    const r = Ps(t), o = yn.length;
    let u;
    try {
      u = e(...a);
    } finally {
      for (let d = yn.length; d > o; d--) ed();
      Ps(r), n._d && zs(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t) {
  if (Pt === null)
    return e;
  const i = Gl(Pt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, u, d = qe] = t[a];
    r && (De(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && vn(o), n.push({
      dir: r,
      instance: i,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function ya(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const u = a[o];
    r && (u.oldValue = r[o].value);
    let d = u.dir[n];
    d && (wn(), Ti(d, i, 8, [
      e.el,
      u,
      e,
      t
    ]), Sn());
  }
}
function _i(e, t) {
  if (Gt) {
    let i = Gt.provides;
    const n = Gt.parent && Gt.parent.provides;
    n === i && (i = Gt.provides = Object.create(n)), i[e] = t;
  }
}
function Kt(e, t, i = !1) {
  const n = za();
  if (n || or) {
    let a = or ? or._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && De(t) ? t.call(n && n.proxy) : t;
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
function We(e, t, i) {
  return jl(e, t, i);
}
function jl(e, t, i = qe) {
  const { immediate: n, deep: a, flush: r, once: o } = i, u = yt({}, i), d = t && n || !t && r !== "post";
  let v;
  if (To) {
    if (r === "sync") {
      const E = mm();
      v = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!d) {
      const E = () => {
      };
      return E.stop = Ci, E.resume = Ci, E.pause = Ci, E;
    }
  }
  const p = Gt;
  u.call = (E, L, A) => Ti(E, p, L, A);
  let y = !1;
  r === "post" ? u.scheduler = (E) => {
    Qt(E, p && p.suspense);
  } : r !== "sync" && (y = !0, u.scheduler = (E, L) => {
    L ? E() : qu(E);
  }), u.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, p && (E.id = p.uid, E.i = p));
  };
  const k = dm(e, t, u);
  return To && (v ? v.push(k) : d && k()), k;
}
function wm(e, t, i) {
  const n = this.proxy, a = st(e) ? e.includes(".") ? kh(n, e) : () => n[e] : e.bind(n, n);
  let r;
  De(t) ? r = t : (r = t.handler, i = t);
  const o = Mo(this), u = jl(a, r.bind(n), i);
  return o(), u;
}
function kh(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const Bn = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ Symbol("_vte"), Bl = (e) => e.__isTeleport, Aa = (e) => e && (e.disabled || e.disabled === ""), Sm = (e) => e && (e.defer || e.defer === ""), cf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, uf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cu = (e, t) => {
  const i = e && e.to;
  return st(i) ? t ? t(i) : null : i;
}, Cm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, o, u, d, v) {
    const {
      mc: p,
      pc: y,
      pbc: k,
      o: { insert: E, querySelector: L, createText: A, createComment: N, parentNode: D }
    } = v, M = Aa(t.props);
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
        if (Bn.get(Z) === pe) {
          if (Bn.delete(Z), Aa(Z.props)) {
            const X = D(Z.el) || i;
            C(Z, X, Z.anchor), qr(Z, !0);
          }
          re(Z);
        }
      };
      Bn.set(Z, pe), Qt(pe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), pe = t.anchor = A("");
      if (E(Z, i, n), E(pe, i, n), Sm(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      M && (C(t, i, pe), qr(t, !0)), re();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, pe = Bn.get(e);
      if (pe) {
        pe.flags |= 8, Bn.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, se = t.targetAnchor = e.targetAnchor, _e = Aa(e.props), ee = _e ? i : X, J = _e ? Z : se;
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
          i,
          Z,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = cu(t.props, L);
        F && (t.target = F, vs(
          t,
          F,
          null,
          v,
          0
        ));
      } else _e && vs(
        t,
        X,
        se,
        v,
        1
      );
      qr(t, M);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: p,
      target: y,
      props: k
    } = e, E = Aa(k), L = r || !E, A = Bn.get(e);
    if (A && (A.flags |= 8, Bn.delete(e)), y && (a(v), a(p)), r && a(d), !A && (E || y) && o & 16)
      for (let N = 0; N < u.length; N++) {
        const D = u[N];
        n(
          D,
          t,
          i,
          L,
          !!D.dynamicChildren
        );
      }
  },
  move: vs,
  hydrate: km
};
function vs(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: o, anchor: u, shapeFlag: d, children: v, props: p } = e, y = r === 2;
  if (y && n(o, t, i), !Bn.has(e) && (!y || Aa(p)) && d & 16)
    for (let k = 0; k < v.length; k++)
      a(
        v[k],
        t,
        i,
        2
      );
  y && n(u, t, i);
}
function km(e, t, i, n, a, r, {
  o: { nextSibling: o, parentNode: u, querySelector: d, insert: v, createText: p }
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
      i,
      n,
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
      v,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      u(e) === L ? e : null
    )) : (t.anchor = o(e), k(L, N), t.targetAnchor || uu(L, t, p, v), y(
      N && o(N),
      t,
      L,
      i,
      n,
      a,
      r
    ))), qr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Eh = Cm;
function qr(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function uu(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), o = t.targetAnchor = i("");
  return r[Th] = o, e && (n(r, e, a), n(o, e, a)), o;
}
const wi = /* @__PURE__ */ Symbol("_leaveCb"), Mr = /* @__PURE__ */ Symbol("_enterCb");
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
const bi = [Function, Array], Ah = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: bi,
  onEnter: bi,
  onAfterEnter: bi,
  onEnterCancelled: bi,
  // leave
  onBeforeLeave: bi,
  onLeave: bi,
  onAfterLeave: bi,
  onLeaveCancelled: bi,
  // appear
  onBeforeAppear: bi,
  onAppear: bi,
  onAfterAppear: bi,
  onAppearCancelled: bi
}, xh = (e) => {
  const t = e.subTree;
  return t.component ? xh(t.component) : t;
}, Em = {
  name: "BaseTransition",
  props: Ah,
  setup(e, { slots: t }) {
    const i = za(), n = Tm();
    return () => {
      const a = t.default && Lh(t.default(), !0), r = a && a.length ? Oh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? $() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: u } = o;
      if (n.isLeaving)
        return kc(r);
      const d = $s(r);
      if (!d)
        return kc(r);
      let v = du(
        d,
        o,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => v = y
      );
      d.type !== It && _o(d, v);
      let p = i.subTree && $s(i.subTree);
      if (p && p.type !== It && !xa(p, d) && xh(i).type !== It) {
        let y = du(
          p,
          o,
          n,
          i
        );
        if (_o(p, y), u === "out-in" && d.type !== It)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, p = void 0;
          }, kc(r);
        u === "in-out" && d.type !== It ? y.delayLeave = (k, E, L) => {
          const A = Nh(
            n,
            p
          );
          A[String(p.key)] = p, k[wi] = () => {
            E(), k[wi] = void 0, delete v.delayedLeave, p = void 0;
          }, v.delayedLeave = () => {
            L(), delete v.delayedLeave, p = void 0;
          };
        } : p = void 0;
      } else p && (p = void 0);
      return r;
    };
  }
};
function Oh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== It) {
        t = i;
        break;
      }
  }
  return t;
}
const Am = Em;
function Nh(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function du(e, t, i, n, a) {
  const {
    appear: r,
    mode: o,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
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
  } = t, C = String(e.key), re = Nh(i, e), de = (X, se) => {
    X && Ti(
      X,
      n,
      9,
      se
    );
  }, Z = (X, se) => {
    const _e = se[1];
    de(X, se), xe(X) ? X.every((ee) => ee.length <= 1) && _e() : X.length <= 1 && _e();
  }, pe = {
    mode: o,
    persisted: u,
    beforeEnter(X) {
      let se = d;
      if (!i.isMounted)
        if (r)
          se = N || d;
        else
          return;
      X[wi] && X[wi](
        !0
        /* cancelled */
      );
      const _e = re[C];
      _e && xa(e, _e) && _e.el[wi] && _e.el[wi](), de(se, [X]);
    },
    enter(X) {
      if (re[C] === e) return;
      let se = v, _e = p, ee = y;
      if (!i.isMounted)
        if (r)
          se = D || v, _e = M || p, ee = z || y;
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
      ), i.isUnmounting)
        return se();
      de(k, [X]);
      let ee = !1;
      X[wi] = (F) => {
        ee || (ee = !0, se(), F ? de(A, [X]) : de(L, [X]), X[wi] = void 0, re[_e] === e && delete re[_e]);
      };
      const J = X[wi].bind(null, !1);
      re[_e] = e, E ? Z(E, [X, J]) : J();
    },
    clone(X) {
      const se = du(
        X,
        t,
        i,
        n,
        a
      );
      return a && a(se), se;
    }
  };
  return pe;
}
function kc(e) {
  if (Hl(e))
    return e = Jn(e), e.children = null, e;
}
function $s(e) {
  if (!Hl(e))
    return Bl(e.type) && e.children ? Oh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && De(i.default))
      return i.default();
  }
}
function _o(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    _o(
      Bl(i.type) && $s(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lh(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const u = i == null ? o.key : String(i) + String(o.key != null ? o.key : r);
    o.type === ie ? (o.patchFlag & 128 && a++, n = n.concat(
      Lh(o.children, t, u)
    )) : (t || o.type !== It) && n.push(u != null ? Jn(o, { key: u }) : o);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
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
function xm(e) {
  const t = za(), i = /* @__PURE__ */ gh(null);
  if (t) {
    const a = t.refs === qe ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function df(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function io(e, t, i, n, a = !1) {
  if (xe(e)) {
    e.forEach(
      (A, N) => io(
        A,
        t && (xe(t) ? t[N] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (rr(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && io(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Gl(n.component) : n.el, o = a ? null : r, { i: u, r: d } = e, v = t && t.r, p = u.refs === qe ? u.refs = {} : u.refs, y = u.setupState, k = /* @__PURE__ */ Ye(y), E = y === qe ? Wp : (A) => df(p, A) ? !1 : Je(k, A), L = (A, N) => !(N && df(p, N));
  if (v != null && v !== d) {
    if (ff(t), st(v))
      p[v] = null, E(v) && (y[v] = null);
    else if (/* @__PURE__ */ Wt(v)) {
      const A = t;
      L(v, A.k) && (v.value = null), A.k && (p[A.k] = null);
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
            xe(M) && zu(M, r);
          else if (xe(M))
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
        M.id = -1, Fs.set(e, M), Qt(M, i);
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
function Om(e, t) {
  Ih(e, "a", t);
}
function Nm(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, i = Gt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Vl(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      Hl(a.parent.vnode) && Lm(n, t, i, a), a = a.parent;
  }
}
function Lm(e, t, i, n) {
  const a = Vl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Fo(() => {
    zu(n[t], a);
  }, i);
}
function Vl(e, t, i = Gt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...o) => {
      wn();
      const u = Mo(i), d = Ti(t, i, e, o);
      return u(), Sn(), d;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const En = (e) => (t, i = Gt) => {
  (!To || e === "sp") && Vl(e, (...n) => t(...n), i);
}, Ph = En("bm"), ea = En("m"), $h = En(
  "bu"
), Rm = En("u"), fr = En(
  "bum"
), Fo = En("um"), Im = En(
  "sp"
), Pm = En("rtg"), $m = En("rtc");
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
function Xu(e, t, i = !0, n = !1) {
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
    return !o && n ? r : o;
  }
}
function hf(e, t) {
  return e && (e[t] || e[qt(t)] || e[Pl(qt(t))]);
}
function ke(e, t, i, n) {
  let a;
  const r = i, o = xe(e);
  if (o || st(e)) {
    const u = o && /* @__PURE__ */ $a(e);
    let d = !1, v = !1;
    u && (d = !/* @__PURE__ */ ki(e), v = /* @__PURE__ */ Cn(e), e = Ml(e)), a = new Array(e.length);
    for (let p = 0, y = e.length; p < y; p++)
      a[p] = t(
        d ? v ? dr(Fi(e[p])) : Fi(e[p]) : e[p],
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
      for (let d = 0, v = u.length; d < v; d++) {
        const p = u[d];
        a[d] = t(e[p], p, d, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, i, n, a, r) {
  if (i == null && (i = {}), Pt.ce || Pt.parent && rr(Pt.parent) && Pt.parent.ce) {
    const v = i, p = Object.keys(v).length > 0;
    return t !== "default" && (v.name = t), m(), je(
      ie,
      null,
      [Ae("slot", v, n && n())],
      p ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const u = yn.length;
  m();
  let d;
  try {
    const v = o && Dh(o(i)), p = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    v && v.key;
    d = je(
      ie,
      {
        key: (p && !$i(p) ? p : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!v && n ? "_fb" : "")
      },
      v || (n ? n() : []),
      v && e._ === 1 ? 64 : -2
    );
  } catch (v) {
    for (let p = yn.length; p > u; p--) ed();
    throw v;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Dh(e) {
  return e.some((t) => So(t) ? !(t.type === It || t.type === ie && !Dh(t.children)) : !0) ? e : null;
}
const fu = (e) => e ? rv(e) ? Gl(e) : fu(e.parent) : null, no = (
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
    $nextTick: (e) => e.n || (e.n = ei.bind(e.proxy)),
    $watch: (e) => wm.bind(e)
  })
), Tc = (e, t) => e !== qe && !e.__isScriptSetup && Je(e, t), Mm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: o, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const k = o[t];
      if (k !== void 0)
        switch (k) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return i[t];
          case 3:
            return r[t];
        }
      else {
        if (Tc(n, t))
          return o[t] = 1, n[t];
        if (a !== qe && Je(a, t))
          return o[t] = 2, a[t];
        if (Je(r, t))
          return o[t] = 3, r[t];
        if (i !== qe && Je(i, t))
          return o[t] = 4, i[t];
        pu && (o[t] = 0);
      }
    }
    const v = no[t];
    let p, y;
    if (v)
      return t === "$attrs" && Vt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (p = u.__cssModules) && (p = p[t])
    )
      return p;
    if (i !== qe && Je(i, t))
      return o[t] = 4, i[t];
    if (
      // global properties
      y = d.config.globalProperties, Je(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Tc(a, t) ? (a[t] = i, !0) : n !== qe && Je(n, t) ? (n[t] = i, !0) : Je(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: o }
  }, u) {
    let d;
    return !!(i[u] || e !== qe && u[0] !== "$" && Je(e, u) || Tc(t, u) || Je(r, u) || Je(n, u) || Je(no, u) || Je(a.config.globalProperties, u) || (d = o.__cssModules) && d[u]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : Je(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
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
  return xe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function jm(e, t) {
  return !e || !t ? e || t : xe(e) && xe(t) ? e.concat(t) : yt({}, Ds(e), Ds(t));
}
let pu = !0;
function Bm(e) {
  const t = Uh(e), i = e.proxy, n = e.ctx;
  pu = !1, t.beforeCreate && vf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: u,
    provide: d,
    inject: v,
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
  if (v && Hm(v, n, null), o)
    for (const le in o) {
      const ae = o[le];
      De(ae) && (n[le] = ae.bind(i));
    }
  if (a) {
    const le = a.call(i, i);
    Qe(le) && (e.data = /* @__PURE__ */ Lt(le));
  }
  if (pu = !0, r)
    for (const le in r) {
      const ae = r[le], me = De(ae) ? ae.bind(i, i) : De(ae.get) ? ae.get.bind(i, i) : Ci, fe = !De(ae) && De(ae.set) ? ae.set.bind(i) : Ci, Se = B({
        get: me,
        set: fe
      });
      Object.defineProperty(n, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Te) => Se.value = Te
      });
    }
  if (u)
    for (const le in u)
      zh(u[le], n, i, le);
  if (d) {
    const le = De(d) ? d.call(i) : d;
    Reflect.ownKeys(le).forEach((ae) => {
      _i(ae, le[ae]);
    });
  }
  p && vf(p, e, "c");
  function Y(le, ae) {
    xe(ae) ? ae.forEach((me) => le(me.bind(i))) : ae && le(ae.bind(i));
  }
  if (Y(Ph, y), Y(ea, k), Y($h, E), Y(Rm, L), Y(Om, A), Y(Nm, N), Y(Fm, pe), Y($m, de), Y(Pm, Z), Y(fr, M), Y(Fo, C), Y(Im, X), xe(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ae) => {
        Object.defineProperty(le, ae, {
          get: () => i[ae],
          set: (me) => i[ae] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Ci && (e.render = re), _e != null && (e.inheritAttrs = _e), ee && (e.components = ee), J && (e.directives = J), X && Rh(e);
}
function Hm(e, t, i = Ci) {
  xe(e) && (e = hu(e));
  for (const n in e) {
    const a = e[n];
    let r;
    Qe(a) ? "default" in a ? r = Kt(
      a.from || n,
      a.default,
      !0
    ) : r = Kt(a.from || n) : r = Kt(a), /* @__PURE__ */ Wt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function vf(e, t, i) {
  Ti(
    xe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function zh(e, t, i, n) {
  let a = n.includes(".") ? kh(i, n) : () => i[n];
  if (st(e)) {
    const r = t[e];
    De(r) && We(a, r);
  } else if (De(e))
    We(a, e.bind(i));
  else if (Qe(e))
    if (xe(e))
      e.forEach((r) => zh(r, t, i, n));
    else {
      const r = De(e.handler) ? e.handler.bind(i) : t[e.handler];
      De(r) && We(a, r, e);
    }
}
function Uh(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !a.length && !i && !n ? d = t : (d = {}, a.length && a.forEach(
    (v) => Ms(d, v, o, !0)
  ), Ms(d, t, o)), Qe(t) && r.set(t, d), d;
}
function Ms(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && Ms(e, r, i, !0), a && a.forEach(
    (o) => Ms(e, o, i, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const u = Vm[o] || i && i[o];
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
  if (xe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
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
  return e ? xe(e) && xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Ds(e),
    Ds(t ?? {})
  ) : t;
}
function Gm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = yt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = Jt(e[n], t[n]);
  return i;
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
  return function(n, a = null) {
    De(n) || (n = yt({}, n)), a != null && !Qe(a) && (a = null);
    const r = jh(), o = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: qm++,
      _component: n,
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
        return o.has(p) || (p && De(p.install) ? (o.add(p), p.install(v, ...y)) : De(p) && (o.add(p), p(v, ...y))), v;
      },
      mixin(p) {
        return r.mixins.includes(p) || r.mixins.push(p), v;
      },
      component(p, y) {
        return y ? (r.components[p] = y, v) : r.components[p];
      },
      directive(p, y) {
        return y ? (r.directives[p] = y, v) : r.directives[p];
      },
      mount(p, y, k) {
        if (!d) {
          const E = v._ceVNode || Ae(n, a);
          return E.appContext = r, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(E, p, k), d = !0, v._container = p, p.__vue_app__ = v, Gl(E.component);
        }
      },
      onUnmount(p) {
        u.push(p);
      },
      unmount() {
        d && (Ti(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(p, y) {
        return r.provides[p] = y, v;
      },
      runWithContext(p) {
        const y = or;
        or = v;
        try {
          return p();
        } finally {
          or = y;
        }
      }
    };
    return v;
  };
}
let or = null;
function Bh(e, t, i = qe) {
  const n = za(), a = qt(t), r = Tn(t), o = Hh(e, a), u = sm((d, v) => {
    let p, y = qe, k;
    return _m(() => {
      const E = e[a];
      Rt(p, E) && (p = E, v());
    }), {
      get() {
        return d(), i.get ? i.get(p) : p;
      },
      set(E) {
        const L = i.set ? i.set(E) : E;
        if (!Rt(L, p) && !(y !== qe && Rt(E, y)))
          return;
        const A = n.vnode.props, N = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        N || (p = E, v()), n.emit(`update:${t}`, L), Rt(E, y) && (Rt(E, L) && !Rt(L, k) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && y !== qe && !Rt(L, p)) && v(), y = E, k = L;
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
const Hh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${Tn(t)}Modifiers`];
function Ym(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || qe;
  let a = i;
  const r = t.startsWith("update:"), o = r && Hh(n, t.slice(7));
  o && (o.trim && (a = i.map((p) => st(p) ? p.trim() : p)), o.number && (a = a.map($l)));
  let u, d = n[u = yc(t)] || // also try camelCase event handler (#2249)
  n[u = yc(qt(t))];
  !d && r && (d = n[u = yc(Tn(t))]), d && Ti(
    d,
    e,
    6,
    a
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ti(
      v,
      e,
      6,
      a
    );
  }
}
const Xm = /* @__PURE__ */ new WeakMap();
function Vh(e, t, i = !1) {
  const n = i ? Xm : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, u = !1;
  if (!De(e)) {
    const d = (v) => {
      const p = Vh(v, t, !0);
      p && (u = !0, yt(o, p));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (Qe(e) && n.set(e, null), null) : (xe(r) ? r.forEach((d) => o[d] = null) : yt(o, r), Qe(e) && n.set(e, o), o);
}
function Kl(e, t) {
  return !e || !Ll(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Je(e, t[0].toLowerCase() + t.slice(1)) || Je(e, Tn(t)) || Je(e, t));
}
function mf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: u,
    emit: d,
    render: v,
    renderCache: p,
    props: y,
    data: k,
    setupState: E,
    ctx: L,
    inheritAttrs: A
  } = e, N = Ps(e);
  let D, M;
  try {
    if (i.shapeFlag & 4) {
      const C = a || n, re = C;
      D = Xi(
        v.call(
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
      D = Xi(
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
    yn.length = 0, zl(C, e, 1), D = Ae(It);
  }
  let z = D;
  if (M && A !== !1) {
    const C = Object.keys(M), { shapeFlag: re } = z;
    C.length && re & 7 && (r && C.some(Rl) && (M = Jm(
      M,
      r
    )), z = Jn(z, M, !1, !0));
  }
  if (i.dirs && (z = Jn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const C = Bl(z.type) && $s(z) || z;
    _o(C, i.transition);
  }
  return D = z, Ps(N), D;
}
const Zm = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Ll(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Jm = (e, t) => {
  const i = {};
  for (const n in e)
    (!Rl(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Qm(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: o, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? yf(n, o, v) : !!o;
    if (d & 8) {
      const p = t.dynamicProps;
      for (let y = 0; y < p.length; y++) {
        const k = p[y];
        if (Kh(o, n, k) && !Kl(v, k))
          return !0;
      }
    }
  } else
    return (a || u) && (!u || !u.$stable) ? !0 : n === o ? !1 : n ? o ? yf(n, o, v) : !0 : !!o;
  return !1;
}
function yf(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Kh(t, e, r) && !Kl(i, r))
      return !0;
  }
  return !1;
}
function Kh(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && Qe(n) && Qe(a) ? !Zn(n, a) : n !== a;
}
function ey({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const Gh = {}, qh = () => Object.create(Gh), Wh = (e) => Object.getPrototypeOf(e) === Gh;
function ty(e, t, i, n = !1) {
  const a = {}, r = qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ im(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function iy(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, u = /* @__PURE__ */ Ye(a), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
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
            E !== r[k] && (r[k] = E, v = !0);
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
          E !== r[k] && (r[k] = E, v = !0);
      }
    }
  } else {
    Yh(e, t, a, r) && (v = !0);
    let p;
    for (const y in u)
      (!t || // for camelCase
      !Je(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Tn(y)) === y || !Je(t, p))) && (d ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[p] !== void 0) && (a[y] = vu(
        d,
        u,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== u)
      for (const y in r)
        (!t || !Je(t, y)) && (delete r[y], v = !0);
  }
  v && hn(e.attrs, "set", "");
}
function Yh(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let o = !1, u;
  if (t)
    for (let d in t) {
      if (Qr(d))
        continue;
      const v = t[d];
      let p;
      a && Je(a, p = qt(d)) ? !r || !r.includes(p) ? i[p] = v : (u || (u = {}))[p] = v : Kl(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, o = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ Ye(i), v = u || qe;
    for (let p = 0; p < r.length; p++) {
      const y = r[p];
      i[y] = vu(
        a,
        d,
        y,
        v[y],
        e,
        !Je(v, y)
      );
    }
  }
  return o;
}
function vu(e, t, i, n, a, r) {
  const o = e[i];
  if (o != null) {
    const u = Je(o, "default");
    if (u && n === void 0) {
      const d = o.default;
      if (o.type !== Function && !o.skipFactory && De(d)) {
        const { propsDefaults: v } = a;
        if (i in v)
          n = v[i];
        else {
          const p = Mo(a);
          n = v[i] = d.call(
            null,
            t
          ), p();
        }
      } else
        n = d;
      a.ce && a.ce._setProp(i, n);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !u ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Tn(i)) && (n = !0));
  }
  return n;
}
const ny = /* @__PURE__ */ new WeakMap();
function Xh(e, t, i = !1) {
  const n = i ? ny : t.propsCache, a = n.get(e);
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
    !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !d)
    return Qe(e) && n.set(e, nr), nr;
  if (xe(r))
    for (let p = 0; p < r.length; p++) {
      const y = qt(r[p]);
      _f(y) && (o[y] = qe);
    }
  else if (r)
    for (const p in r) {
      const y = qt(p);
      if (_f(y)) {
        const k = r[p], E = o[y] = xe(k) || De(k) ? { type: k } : yt({}, k), L = E.type;
        let A = !1, N = !0;
        if (xe(L))
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
  const v = [o, u];
  return Qe(e) && n.set(e, v), v;
}
function _f(e) {
  return e[0] !== "$" && !Qr(e);
}
const Zu = (e) => e === "_" || e === "_ctx" || e === "$stable", Ju = (e) => xe(e) ? e.map(Xi) : [Xi(e)], ay = (e, t, i) => {
  if (t._n)
    return t;
  const n = Pe((...a) => Ju(t(...a)), i);
  return n._c = !1, n;
}, Zh = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Zu(a)) continue;
    const r = e[a];
    if (De(r))
      t[a] = ay(a, r, n);
    else if (r != null) {
      const o = Ju(r);
      t[a] = () => o;
    }
  }
}, Jh = (e, t) => {
  const i = Ju(t);
  e.slots.default = () => i;
}, Qh = (e, t, i) => {
  for (const n in t)
    (i || !Zu(n)) && (e[n] = t[n]);
}, ry = (e, t, i) => {
  const n = e.slots = qh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qh(n, t, i), i && Jp(n, "_", a, !0)) : Zh(t, n);
  } else t && Jh(e, t);
}, oy = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, o = qe;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? i && u === 1 ? r = !1 : Qh(a, t, i) : (r = !t.$stable, Zh(t, a)), o = t;
  } else t && (Jh(e, t), o = { default: 1 });
  if (r)
    for (const u in a)
      !Zu(u) && o[u] == null && delete a[u];
}, Qt = dy;
function sy(e) {
  return ly(e);
}
function ly(e, t) {
  const i = Fl();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: p,
    parentNode: y,
    nextSibling: k,
    setScopeId: E = Ci,
    insertStaticContent: L
  } = e, A = (w, T, x, R = null, I = null, j = null, G = void 0, K = null, Q = !!T.dynamicChildren) => {
    if (w === T)
      return;
    w && !xa(w, T) && (R = it(w), Te(w, I, j, !0), w = null), T.patchFlag === -2 && (Q = !1, T.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: oe } = T;
    switch (V) {
      case Do:
        N(w, T, x, R);
        break;
      case It:
        D(w, T, x, R);
        break;
      case As:
        w == null && M(T, x, R, G);
        break;
      case ie:
        ee(
          w,
          T,
          x,
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
          x,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : oe & 6 ? J(
          w,
          T,
          x,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : (oe & 64 || oe & 128) && V.process(
          w,
          T,
          x,
          R,
          I,
          j,
          G,
          K,
          Q,
          Ft
        );
    }
    he != null && I ? io(he, w && w.ref, j, T || w, !T) : he == null && w && w.ref != null && io(w.ref, null, j, w, !0);
  }, N = (w, T, x, R) => {
    if (w == null)
      n(
        T.el = u(T.children),
        x,
        R
      );
    else {
      const I = T.el = w.el;
      T.children !== w.children && v(I, T.children);
    }
  }, D = (w, T, x, R) => {
    w == null ? n(
      T.el = d(T.children || ""),
      x,
      R
    ) : T.el = w.el;
  }, M = (w, T, x, R) => {
    [w.el, w.anchor] = L(
      w.children,
      T,
      x,
      R,
      w.el,
      w.anchor
    );
  }, z = ({ el: w, anchor: T }, x, R) => {
    let I;
    for (; w && w !== T; )
      I = k(w), n(w, x, R), w = I;
    n(T, x, R);
  }, C = ({ el: w, anchor: T }) => {
    let x;
    for (; w && w !== T; )
      x = k(w), a(w), w = x;
    a(T);
  }, re = (w, T, x, R, I, j, G, K, Q) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), w == null)
      de(
        T,
        x,
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
  }, de = (w, T, x, R, I, j, G, K) => {
    let Q, V;
    const { props: he, shapeFlag: oe, transition: ve, dirs: Oe } = w;
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
    ), Oe && ya(w, null, R, "created"), Z(Q, w, w.scopeId, G, R), he) {
      for (const ze in he)
        ze !== "value" && !Qr(ze) && r(Q, ze, null, he[ze], j, R);
      "value" in he && r(Q, "value", null, he.value, j), (V = he.onVnodeBeforeMount) && Ki(V, R, w);
    }
    Oe && ya(w, null, R, "beforeMount");
    const $e = cy(I, ve);
    $e && ve.beforeEnter(Q), n(Q, T, x), ((V = he && he.onVnodeMounted) || $e || Oe) && Qt(() => {
      V && Ki(V, R, w), $e && ve.enter(Q), Oe && ya(w, null, R, "mounted");
    }, I);
  }, Z = (w, T, x, R, I) => {
    if (x && E(w, x), R)
      for (let j = 0; j < R.length; j++)
        E(w, R[j]);
    if (I) {
      let j = I.subTree;
      if (T === j || iv(j.type) && (j.ssContent === T || j.ssFallback === T)) {
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
  }, pe = (w, T, x, R, I, j, G, K, Q = 0) => {
    for (let V = Q; V < w.length; V++) {
      const he = w[V] = K ? pn(w[V]) : Xi(w[V]);
      A(
        null,
        he,
        T,
        x,
        R,
        I,
        j,
        G,
        K
      );
    }
  }, X = (w, T, x, R, I, j, G) => {
    const K = T.el = w.el;
    let { patchFlag: Q, dynamicChildren: V, dirs: he } = T;
    Q |= w.patchFlag & 16;
    const oe = w.props || qe, ve = T.props || qe;
    let Oe;
    if (x && _a(x, !1), (Oe = ve.onVnodeBeforeUpdate) && Ki(Oe, x, T, w), he && ya(T, w, x, "beforeUpdate"), x && _a(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, G = !1, V = null), (oe.innerHTML && ve.innerHTML == null || oe.textContent && ve.textContent == null) && p(K, ""), V ? se(
      w.dynamicChildren,
      V,
      K,
      x,
      R,
      Ec(T, I),
      j
    ) : G || ae(
      w,
      T,
      K,
      null,
      x,
      R,
      Ec(T, I),
      j,
      !1
    ), Q > 0) {
      if (Q & 16)
        _e(K, oe, ve, x, I);
      else if (Q & 2 && oe.class !== ve.class && r(K, "class", null, ve.class, I), Q & 4 && r(K, "style", oe.style, ve.style, I), Q & 8) {
        const $e = T.dynamicProps;
        for (let ze = 0; ze < $e.length; ze++) {
          const Fe = $e[ze], He = oe[Fe], rt = ve[Fe];
          (rt !== He || Fe === "value") && r(K, Fe, He, rt, I, x);
        }
      }
      Q & 1 && w.children !== T.children && p(K, T.children);
    } else !G && V == null && _e(K, oe, ve, x, I);
    ((Oe = ve.onVnodeUpdated) || he) && Qt(() => {
      Oe && Ki(Oe, x, T, w), he && ya(T, w, x, "updated");
    }, R);
  }, se = (w, T, x, R, I, j, G) => {
    for (let K = 0; K < T.length; K++) {
      const Q = w[K], V = T[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xa(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? y(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
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
  }, _e = (w, T, x, R, I) => {
    if (T !== x) {
      if (T !== qe)
        for (const j in T)
          !Qr(j) && !(j in x) && r(
            w,
            j,
            T[j],
            null,
            I,
            R
          );
      for (const j in x) {
        if (Qr(j)) continue;
        const G = x[j], K = T[j];
        G !== K && j !== "value" && r(w, j, K, G, I, R);
      }
      "value" in x && r(w, "value", T.value, x.value, I);
    }
  }, ee = (w, T, x, R, I, j, G, K, Q) => {
    const V = T.el = w ? w.el : u(""), he = T.anchor = w ? w.anchor : u("");
    let { patchFlag: oe, dynamicChildren: ve, slotScopeIds: Oe } = T;
    Oe && (K = K ? K.concat(Oe) : Oe), w == null ? (n(V, x, R), n(he, x, R), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      x,
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
      x,
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
      x,
      he,
      I,
      j,
      G,
      K,
      Q
    );
  }, J = (w, T, x, R, I, j, G, K, Q) => {
    T.slotScopeIds = K, w == null ? T.shapeFlag & 512 ? I.ctx.activate(
      T,
      x,
      R,
      G,
      Q
    ) : F(
      T,
      x,
      R,
      I,
      j,
      G,
      Q
    ) : U(w, T, Q);
  }, F = (w, T, x, R, I, j, G) => {
    const K = w.component = vy(
      w,
      R,
      I
    );
    if (Hl(w) && (K.ctx.renderer = Ft), gy(K, !1, G), K.asyncDep) {
      if (I && I.registerDep(K, Y, G), !w.el) {
        const Q = K.subTree = Ae(It);
        D(null, Q, T, x), w.placeholder = Q.el;
      }
    } else
      Y(
        K,
        w,
        T,
        x,
        I,
        j,
        G
      );
  }, U = (w, T, x) => {
    const R = T.component = w.component;
    if (Qm(w, T, x))
      if (R.asyncDep && !R.asyncResolved) {
        le(R, T, x);
        return;
      } else
        R.next = T, R.update();
    else
      T.el = w.el, R.vnode = T;
  }, Y = (w, T, x, R, I, j, G) => {
    const K = () => {
      if (w.isMounted) {
        let { next: oe, bu: ve, u: Oe, parent: $e, vnode: ze } = w;
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
        _a(w, !1), oe ? (oe.el = ze.el, le(w, oe, G)) : oe = ze, ve && Es(ve), (He = oe.props && oe.props.onVnodeBeforeUpdate) && Ki(He, $e, oe, ze), _a(w, !0);
        const rt = mf(w), vt = w.subTree;
        w.subTree = rt, A(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          y(vt.el),
          // anchor may have changed if it's in a fragment
          it(vt),
          w,
          I,
          j
        ), oe.el = rt.el, Fe === null && ey(w, rt.el), Oe && Qt(Oe, I), (He = oe.props && oe.props.onVnodeUpdated) && Qt(
          () => Ki(He, $e, oe, ze),
          I
        );
      } else {
        let oe;
        const { el: ve, props: Oe } = T, { bm: $e, m: ze, parent: Fe, root: He, type: rt } = w, vt = rr(T);
        _a(w, !1), $e && Es($e), !vt && (oe = Oe && Oe.onVnodeBeforeMount) && Ki(oe, Fe, T), _a(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            rt,
            w.parent ? w.parent.type : void 0
          );
          const Tt = w.subTree = mf(w);
          A(
            null,
            Tt,
            x,
            R,
            w,
            I,
            j
          ), T.el = Tt.el;
        }
        if (ze && Qt(ze, I), !vt && (oe = Oe && Oe.onVnodeMounted)) {
          const Tt = T;
          Qt(
            () => Ki(oe, Fe, Tt),
            I
          );
        }
        (T.shapeFlag & 256 || Fe && rr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && w.a && Qt(w.a, I), w.isMounted = !0, T = x = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new ih(K);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), he = w.job = Q.runIfDirty.bind(Q);
    he.i = w, he.id = w.uid, Q.scheduler = () => qu(he), _a(w, !0), V();
  }, le = (w, T, x) => {
    T.component = w;
    const R = w.vnode.props;
    w.vnode = T, w.next = null, iy(w, T.props, R, x), oy(w, T.children, x), wn(), lf(w), Sn();
  }, ae = (w, T, x, R, I, j, G, K, Q = !1) => {
    const V = w && w.children, he = w ? w.shapeFlag : 0, oe = T.children, { patchFlag: ve, shapeFlag: Oe } = T;
    if (ve > 0) {
      if (ve & 128) {
        fe(
          V,
          oe,
          x,
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
          x,
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
    Oe & 8 ? (he & 16 && ht(V, I, j), oe !== V && p(x, oe)) : he & 16 ? Oe & 16 ? fe(
      V,
      oe,
      x,
      R,
      I,
      j,
      G,
      K,
      Q
    ) : ht(V, I, j, !0) : (he & 8 && p(x, ""), Oe & 16 && pe(
      oe,
      x,
      R,
      I,
      j,
      G,
      K,
      Q
    ));
  }, me = (w, T, x, R, I, j, G, K, Q) => {
    w = w || nr, T = T || nr;
    const V = w.length, he = T.length, oe = Math.min(V, he);
    let ve;
    for (ve = 0; ve < oe; ve++) {
      const Oe = T[ve] = Q ? pn(T[ve]) : Xi(T[ve]);
      A(
        w[ve],
        Oe,
        x,
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
      x,
      R,
      I,
      j,
      G,
      K,
      Q,
      oe
    );
  }, fe = (w, T, x, R, I, j, G, K, Q) => {
    let V = 0;
    const he = T.length;
    let oe = w.length - 1, ve = he - 1;
    for (; V <= oe && V <= ve; ) {
      const Oe = w[V], $e = T[V] = Q ? pn(T[V]) : Xi(T[V]);
      if (xa(Oe, $e))
        A(
          Oe,
          $e,
          x,
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
      const Oe = w[oe], $e = T[ve] = Q ? pn(T[ve]) : Xi(T[ve]);
      if (xa(Oe, $e))
        A(
          Oe,
          $e,
          x,
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
        const Oe = ve + 1, $e = Oe < he ? T[Oe].el : R;
        for (; V <= ve; )
          A(
            null,
            T[V] = Q ? pn(T[V]) : Xi(T[V]),
            x,
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
      const Oe = V, $e = V, ze = /* @__PURE__ */ new Map();
      for (V = $e; V <= ve; V++) {
        const tt = T[V] = Q ? pn(T[V]) : Xi(T[V]);
        tt.key != null && ze.set(tt.key, V);
      }
      let Fe, He = 0;
      const rt = ve - $e + 1;
      let vt = !1, Tt = 0;
      const Dt = new Array(rt);
      for (V = 0; V < rt; V++) Dt[V] = 0;
      for (V = Oe; V <= oe; V++) {
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
            if (Dt[Fe - $e] === 0 && xa(tt, T[Fe])) {
              dt = Fe;
              break;
            }
        dt === void 0 ? Te(tt, I, j, !0) : (Dt[dt - $e] = V + 1, dt >= Tt ? Tt = dt : vt = !0, A(
          tt,
          T[dt],
          x,
          null,
          I,
          j,
          G,
          K,
          Q
        ), He++);
      }
      const Ei = vt ? uy(Dt) : nr;
      for (Fe = Ei.length - 1, V = rt - 1; V >= 0; V--) {
        const tt = $e + V, dt = T[tt], Di = T[tt + 1], vi = tt + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Di.el || tv(Di)
        ) : R;
        Dt[V] === 0 ? A(
          null,
          dt,
          x,
          vi,
          I,
          j,
          G,
          K,
          Q
        ) : vt && (Fe < 0 || V !== Ei[Fe] ? Se(dt, x, vi, 2) : Fe--);
      }
    }
  }, Se = (w, T, x, R, I = null) => {
    const { el: j, type: G, transition: K, children: Q, shapeFlag: V } = w;
    if (V & 6) {
      Se(w.component.subTree, T, x, R);
      return;
    }
    if (V & 128) {
      w.suspense.move(T, x, R);
      return;
    }
    if (V & 64) {
      G.move(w, T, x, Ft);
      return;
    }
    if (G === ie) {
      n(j, T, x);
      for (let oe = 0; oe < Q.length; oe++)
        Se(Q[oe], T, x, R);
      n(w.anchor, T, x);
      return;
    }
    if (G === As) {
      z(w, T, x);
      return;
    }
    if (R !== 2 && V & 1 && K)
      if (R === 0)
        K.persisted && !j[wi] ? n(j, T, x) : (K.beforeEnter(j), n(j, T, x), Qt(() => K.enter(j), I));
      else {
        const { leave: oe, delayLeave: ve, afterLeave: Oe } = K, $e = () => {
          w.ctx.isUnmounted ? a(j) : n(j, T, x);
        }, ze = () => {
          const Fe = j._isLeaving || !!j[wi];
          j._isLeaving && j[wi](
            !0
            /* cancelled */
          ), K.persisted && !Fe ? $e() : oe(j, () => {
            $e(), Oe && Oe();
          });
        };
        ve ? ve(j, $e, ze) : ze();
      }
    else
      n(j, T, x);
  }, Te = (w, T, x, R = !1, I = !1) => {
    const {
      type: j,
      props: G,
      ref: K,
      children: Q,
      dynamicChildren: V,
      shapeFlag: he,
      patchFlag: oe,
      dirs: ve,
      cacheIndex: Oe,
      memo: $e
    } = w;
    if (oe === -2 && (I = !1), K != null && (wn(), io(K, null, x, w, !0), Sn()), Oe != null && (T.renderCache[Oe] = void 0), he & 256) {
      T.ctx.deactivate(w);
      return;
    }
    const ze = he & 1 && ve, Fe = !rr(w);
    let He;
    if (Fe && (He = G && G.onVnodeBeforeUnmount) && Ki(He, T, w), he & 6)
      lt(w.component, x, R);
    else {
      if (he & 128) {
        w.suspense.unmount(x, R);
        return;
      }
      ze && ya(w, null, T, "beforeUnmount"), he & 64 ? w.type.remove(
        w,
        T,
        x,
        Ft,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ie || oe > 0 && oe & 64) ? ht(
        V,
        T,
        x,
        !1,
        !0
      ) : (j === ie && oe & 384 || !I && he & 16) && ht(Q, T, x), R && Ke(w);
    }
    const rt = $e != null && Oe == null;
    (Fe && (He = G && G.onVnodeUnmounted) || ze || rt) && Qt(() => {
      He && Ki(He, T, w), ze && ya(w, null, T, "unmounted"), rt && (w.el = null);
    }, x);
  }, Ke = (w) => {
    const { type: T, el: x, anchor: R, transition: I } = w;
    if (T === ie) {
      Le(x, R);
      return;
    }
    if (T === As) {
      C(w);
      return;
    }
    const j = () => {
      a(x), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: G, delayLeave: K } = I, Q = () => G(x, j);
      K ? K(w.el, j, Q) : Q();
    } else
      j();
  }, Le = (w, T) => {
    let x;
    for (; w !== T; )
      x = k(w), a(w), w = x;
    a(T);
  }, lt = (w, T, x) => {
    const { bum: R, scope: I, job: j, subTree: G, um: K, m: Q, a: V } = w;
    wf(Q), wf(V), R && Es(R), I.stop(), j && (j.flags |= 8, Te(G, w, T, x)), K && Qt(K, T), Qt(() => {
      w.isUnmounted = !0;
    }, T);
  }, ht = (w, T, x, R = !1, I = !1, j = 0) => {
    for (let G = j; G < w.length; G++)
      Te(w[G], T, x, R, I);
  }, it = (w) => {
    if (w.shapeFlag & 6)
      return it(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const T = k(w.anchor || w.el), x = T && T[Th];
    return x ? k(x) : T;
  };
  let ut = !1;
  const at = (w, T, x) => {
    let R;
    w == null ? T._vnode && (Te(T._vnode, null, null, !0), R = T._vnode.component) : A(
      T._vnode || null,
      w,
      T,
      null,
      null,
      null,
      x
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
    n: it,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: Wm(at)
  };
}
function Ec({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function _a({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qu(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (xe(n) && xe(a))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let u = a[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = a[r] = pn(a[r]), u.el = o.el), !i && u.patchFlag !== -2 && Qu(o, u)), u.type === Do && (u.patchFlag === -1 && (u = a[r] = pn(u)), u.el = o.el), u.type === It && !u.el && (u.el = o.el);
    }
}
function uy(e) {
  const t = e.slice(), i = [0];
  let n, a, r, o, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (a = i[i.length - 1], e[a] < v) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, o = i.length - 1; r < o; )
        u = r + o >> 1, e[i[u]] < v ? r = u + 1 : o = u;
      v < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, o = i[r - 1]; r-- > 0; )
    i[r] = o, o = t[o];
  return i;
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
const iv = (e) => e.__isSuspense;
function dy(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : wh(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), Do = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), As = /* @__PURE__ */ Symbol.for("v-stc"), yn = [];
let pi = null;
function m(e = !1) {
  yn.push(pi = e ? null : []);
}
function ed() {
  yn.pop(), pi = yn[yn.length - 1] || null;
}
let wo = 1;
function zs(e, t = !1) {
  wo += e, e < 0 && pi && t && (pi.hasOnce = !0);
}
function nv(e) {
  return e.dynamicChildren = wo > 0 ? pi || nr : null, ed(), wo > 0 && pi && pi.push(e), e;
}
function _(e, t, i, n, a, r) {
  return nv(
    l(
      e,
      t,
      i,
      n,
      a,
      r,
      !0
    )
  );
}
function je(e, t, i, n, a) {
  return nv(
    Ae(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function So(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const av = ({ key: e }) => e ?? null, xs = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || /* @__PURE__ */ Wt(e) || De(e) ? { i: Pt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === ie ? 0 : 1, o = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && av(t),
    ref: t && xs(t),
    scopeId: Ul,
    slotScopeIds: null,
    children: i,
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
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Pt
  };
  return u ? (Us(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= st(i) ? 8 : 16), wo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pi && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && pi.push(d), d;
}
const Ae = fy;
function fy(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Fh) && (e = It), So(e)) {
    const u = Jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && Us(u, i), wo > 0 && !r && pi && (u.shapeFlag & 6 ? pi[pi.indexOf(e)] = u : pi.push(u)), u.patchFlag = -2, u;
  }
  if (_y(e) && (e = e.__vccOpts), t) {
    t = Co(t);
    let { class: u, style: d } = t;
    u && !st(u) && (t.class = be(u)), Qe(d) && (/* @__PURE__ */ Gu(d) && !xe(d) && (d = yt({}, d)), t.style = hi(d));
  }
  const o = st(e) ? 1 : iv(e) ? 128 : Bl(e) ? 64 : Qe(e) ? 4 : De(e) ? 2 : 0;
  return l(
    e,
    t,
    i,
    n,
    a,
    o,
    r,
    !0
  );
}
function Co(e) {
  return e ? /* @__PURE__ */ Gu(e) || Wh(e) ? yt({}, e) : e : null;
}
function Jn(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: u, transition: d } = e, v = t ? Yt(a || {}, t) : a, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && av(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? xe(r) ? r.concat(xs(t)) : [r, xs(t)] : xs(t)
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
    patchFlag: t && e.type !== ie ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Jn(e.ssContent),
    ssFallback: e.ssFallback && Jn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && _o(
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
function Xi(e) {
  return e == null || typeof e == "boolean" ? Ae(It) : xe(e) ? Ae(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : So(e) ? pn(e) : Ae(Do, null, String(e));
}
function pn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function Us(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (xe(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Us(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Wh(t) ? t._ctx = Pt : a === 3 && Pt && (Pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (n & 65) {
      Us(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Pt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ge(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Yt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = be([t.class, n.class]));
      else if (a === "style")
        t.style = hi([t.style, n.style]);
      else if (Ll(a)) {
        const r = t[a], o = n[a];
        o && r !== o && !(xe(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rl(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Ki(e, t, i, n = null) {
  Ti(e, t, 7, [
    i,
    n
  ]);
}
const py = jh();
let hy = 0;
function vy(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || py, r = {
    uid: hy++,
    vnode: e,
    type: n,
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
    propsOptions: Xh(n, a),
    emitsOptions: Vh(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: qe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
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
    suspense: i,
    suspenseId: i ? i.pendingId : 0,
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
  const e = Fl(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  js = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Gt = i
  ), ko = t(
    "__VUE_SSR_SETTERS__",
    (i) => To = i
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
function gy(e, t = !1, i = !1) {
  t && ko(t);
  const { props: n, children: a } = e.vnode, r = rv(e);
  ty(e, n, r, t), ry(e, a, i || t);
  const o = r ? by(e, t) : void 0;
  return t && ko(!1), o;
}
function by(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mm);
  const { setup: n } = i;
  if (n) {
    wn();
    const a = e.setupContext = n.length > 1 ? sv(e) : null, r = Mo(e), o = $o(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), u = Yp(o);
    if (Sn(), r(), (u || e.sp) && !rr(e) && Rh(e), u) {
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
function Cf(e, t, i) {
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = mh(t)), ov(e);
}
function ov(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Ci);
  {
    const a = Mo(e);
    wn();
    try {
      Bm(e);
    } finally {
      Sn(), a();
    }
  }
}
const my = {
  get(e, t) {
    return Vt(e, "get", ""), e[t];
  }
};
function sv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, my),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(nm(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in no)
        return no[i](e);
    },
    has(t, i) {
      return i in t || i in no;
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
function ii(e, t, i) {
  try {
    zs(-1);
    const n = arguments.length;
    return n === 2 ? Qe(t) && !xe(t) ? So(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && So(i) && (i = [i]), Ae(e, t, i));
  } finally {
    zs(1);
  }
}
const wy = "3.5.42", Sy = Ci;
let gu;
const kf = typeof window < "u" && window.trustedTypes;
if (kf)
  try {
    gu = /* @__PURE__ */ kf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lv = gu ? (e) => gu.createHTML(e) : (e) => e, Cy = "http://www.w3.org/2000/svg", ky = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, Tf = fn && /* @__PURE__ */ fn.createElement("template"), Ty = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? fn.createElementNS(Cy, e) : t === "mathml" ? fn.createElementNS(ky, e) : i ? fn.createElement(e, { is: i }) : fn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => fn.createTextNode(e),
  createComment: (e) => fn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, a, r) {
    const o = i ? i.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      Tf.innerHTML = lv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Tf.content;
      if (n === "svg" || n === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, i);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, zn = "transition", zr = "animation", Eo = /* @__PURE__ */ Symbol("_vtc"), cv = {
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
), Ay = (e) => (e.displayName = "Transition", e.props = Ey, e), xy = /* @__PURE__ */ Ay(
  (e, { slots: t }) => ii(Am, Oy(e), t)
), wa = (e, t = []) => {
  xe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, Ef = (e) => e ? xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Oy(e) {
  const t = {};
  for (const ee in e)
    ee in cv || (t[ee] = e[ee]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: n,
    duration: a,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: o = `${i}-enter-active`,
    enterToClass: u = `${i}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = o,
    appearToClass: p = u,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: k = `${i}-leave-active`,
    leaveToClass: E = `${i}-leave-to`
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
    ee._enterCancelled = U, Sa(ee, J ? p : u), Sa(ee, J ? v : o), F && F();
  }, se = (ee, J) => {
    ee._isLeaving = !1, Sa(ee, y), Sa(ee, E), Sa(ee, k), J && J();
  }, _e = (ee) => (J, F) => {
    const U = ee ? Z : M, Y = () => X(J, ee, F);
    wa(U, [J, Y]), Af(() => {
      Sa(J, ee ? d : r), ln(J, ee ? p : u), Ef(U) || xf(J, n, A, Y);
    });
  };
  return yt(t, {
    onBeforeEnter(ee) {
      wa(D, [ee]), ln(ee, r), ln(ee, o);
    },
    onBeforeAppear(ee) {
      wa(de, [ee]), ln(ee, d), ln(ee, v);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => se(ee, J);
      ln(ee, y), ee._enterCancelled ? (ln(ee, k), Lf(ee)) : (Lf(ee), ln(ee, k)), Af(() => {
        ee._isLeaving && (Sa(ee, y), ln(ee, E), Ef(C) || xf(ee, n, N, F));
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
function ln(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Sa(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Eo];
  i && (i.delete(t), i.size || (e[Eo] = void 0));
}
function Af(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ly = 0;
function xf(e, t, i, n) {
  const a = e._endId = ++Ly, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: o, timeout: u, propCount: d } = Ry(e, t);
  if (!o)
    return n();
  const v = o + "end";
  let p = 0;
  const y = () => {
    e.removeEventListener(v, k), r();
  }, k = (E) => {
    E.target === e && ++p >= d && y();
  };
  setTimeout(() => {
    p < d && y();
  }, u + 1), e.addEventListener(v, k);
}
function Ry(e, t) {
  const i = window.getComputedStyle(e), n = (L) => (i[L] || "").split(", "), a = n(`${zn}Delay`), r = n(`${zn}Duration`), o = Of(a, r), u = n(`${zr}Delay`), d = n(`${zr}Duration`), v = Of(u, d);
  let p = null, y = 0, k = 0;
  t === zn ? o > 0 && (p = zn, y = o, k = r.length) : t === zr ? v > 0 && (p = zr, y = v, k = d.length) : (y = Math.max(o, v), p = y > 0 ? o > v ? zn : zr : null, k = p ? p === zn ? r.length : d.length : 0);
  const E = p === zn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${zn}Property`).toString()
  );
  return {
    type: p,
    timeout: y,
    propCount: k,
    hasTransform: E
  };
}
function Of(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => Nf(i) + Nf(e[n])));
}
function Nf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Iy(e, t, i) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const Bs = /* @__PURE__ */ Symbol("_vod"), uv = /* @__PURE__ */ Symbol("_vsh"), sr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[Bs] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Ur(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), Ur(e, !0), n.enter(e)) : n.leave(e, () => {
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
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Hs(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? Hs(t.ce, a) : bu(t.subTree, a), i(a);
  };
  $h(() => {
    wh(n);
  }), ea(() => {
    We(n, Ci, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Fo(() => a.disconnect());
  });
}
function bu(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      bu(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Hs(e.el, t);
  else if (e.type === ie)
    e.children.forEach((i) => bu(i, t));
  else if (e.type === As) {
    let { el: i, anchor: n } = e;
    for (; i && (Hs(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function Hs(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Fb(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[dv] = n;
  }
}
const $y = /(?:^|;)\s*display\s*:/;
function Fy(e, t, i) {
  const n = e.style, a = st(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (st(t))
        for (const o of t.split(";")) {
          const u = o.slice(0, o.indexOf(":")).trim();
          i[u] == null && Yr(n, u, "");
        }
      else
        for (const o in t)
          i[o] == null && Yr(n, o, "");
    for (const o in i) {
      o === "display" && (r = !0);
      const u = i[o];
      u != null ? My(
        e,
        o,
        !st(t) && t ? t[o] : void 0,
        u
      ) || Yr(n, o, u) : Yr(n, o, "");
    }
  } else if (a) {
    if (t !== i) {
      const o = n[dv];
      o && (i += ";" + o), n.cssText = i, r = $y.test(i);
    }
  } else t && e.removeAttribute("style");
  Bs in e && (e[Bs] = r ? n.display : "", e[uv] && (n.display = "none"));
}
const gs = /\s*!important$/;
function Yr(e, t, i) {
  if (xe(i))
    i.forEach((n) => Yr(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    gs.test(i) ? e.setProperty(t, i.replace(gs, ""), "important") : e.setProperty(t, i);
  else {
    const n = Dy(e, t);
    gs.test(i) ? e.setProperty(
      Tn(n),
      i.replace(gs, ""),
      "important"
    ) : e[n] = i;
  }
}
const Rf = ["Webkit", "Moz", "ms"], xc = {};
function Dy(e, t) {
  const i = xc[t];
  if (i)
    return i;
  let n = qt(t);
  if (n !== "filter" && n in e)
    return xc[t] = n;
  n = Pl(n);
  for (let a = 0; a < Rf.length; a++) {
    const r = Rf[a] + n;
    if (r in e)
      return xc[t] = r;
  }
  return t;
}
function My(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && st(n) && i === n;
}
const If = "http://www.w3.org/1999/xlink";
function Pf(e, t, i, n, a, r = Ib(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(If, t.slice(6, t.length)) : e.setAttributeNS(If, t, i) : i == null || r && !Qp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : $i(i) ? String(i) : i
  );
}
function $f(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? lv(i) : i);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (u !== d || !("_value" in e)) && (e.value = d), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let o = !1;
  if (i === "" || i == null) {
    const u = typeof e[t];
    u === "boolean" ? i = Qp(i) : i == null && u === "string" ? (i = "", o = !0) : u === "number" && (i = 0, o = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Oa(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function zy(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const Ff = /* @__PURE__ */ Symbol("_vei");
function Uy(e, t, i, n, a = null) {
  const r = e[Ff] || (e[Ff] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [u, d] = Hy(t);
    if (n) {
      const v = r[t] = Gy(
        n,
        a
      );
      Oa(e, u, v, d);
    } else o && (zy(e, u, o, d), r[t] = void 0);
  }
}
const jy = /(Once|Passive|Capture)$/, By = /^on:?(?:Once|Passive|Capture)$/;
function Hy(e) {
  let t, i;
  for (; (i = e.match(jy)) && !By.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Tn(e.slice(2)), t];
}
let Oc = 0;
const Vy = /* @__PURE__ */ Promise.resolve(), Ky = () => Oc || (Vy.then(() => Oc = 0), Oc = Date.now());
function Gy(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (xe(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = a.slice(), u = [n];
      for (let d = 0; d < o.length && !n._stopped; d++) {
        const v = o[d];
        v && Ti(
          v,
          t,
          5,
          u
        );
      }
    } else
      Ti(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = Ky(), i;
}
const Df = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qy = (e, t, i, n, a, r) => {
  const o = a === "svg";
  t === "class" ? Iy(e, n, o) : t === "style" ? Fy(e, i, n) : Ll(t) ? Rl(t) || Uy(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wy(e, t, n, o)) ? ($f(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pf(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Yy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !st(n))) ? $f(e, qt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Pf(e, t, n, o));
};
function Wy(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Df(t) && De(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Df(t) && st(i) ? !1 : t in e;
}
function Yy(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = qt(t);
  return Array.isArray(i) ? i.some((a) => qt(a) === n) : Object.keys(i).some((a) => qt(a) === n);
}
const Vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return xe(t) ? (i) => Es(t, i) : t;
};
function Xy(e) {
  e.target.composing = !0;
}
function Mf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const La = /* @__PURE__ */ Symbol("_assign"), bs = /* @__PURE__ */ Symbol("_initialValue");
function Nc(e, t, i) {
  return t && (e = e.trim()), i && (e = $l(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[bs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[La] = Vs(a);
    const r = n || a.props && a.props.type === "number";
    Oa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[La](Nc(e.value, i, r));
    }), (i || r) && Oa(e, "change", () => {
      e.value = Nc(e.value, i, r);
    }), t || (Oa(e, "compositionstart", Xy), Oa(e, "compositionend", Mf), Oa(e, "change", Mf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[bs];
    delete e[bs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[La](Nc(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e[La] = Vs(o), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? $l(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === d) || (e.value = d);
  }
}, Zt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, Oa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? $l(Ks(d)) : Ks(d)
      ), r = e.multiple, o = r ? Da(e._modelValue) ? new Set(a) : a : a[0], u = e._pendingValue = [
        r,
        r ? xe(o) ? a.slice() : a : o
      ];
      try {
        e[La](o);
      } finally {
        ei(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[La] = Vs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zf(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[La] = Vs(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Zy(t, i[1], i[0])) && zf(e, t);
  }
};
function Zy(e, t, i) {
  if (!i || xe(e)) return Zn(e, t);
  if (Da(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zf(e, t) {
  const i = e.multiple, n = xe(t);
  if (!(i && !n && !Da(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], u = Ks(o);
      if (i)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? o.selected = t.some((v) => String(v) === String(u)) : o.selected = $b(t, u) > -1;
        } else
          o.selected = t.has(u);
      else if (Zn(Ks(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
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
  exact: (e, t) => Jy.some((i) => e[`${i}Key`] && !t.includes(i))
}, ye = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
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
}, nt = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = Tn(a.key);
    if (t.some(
      (o) => o === r || e_[o] === r
    ))
      return e(a);
  }));
}, t_ = /* @__PURE__ */ yt({ patchProp: qy }, Ty);
let Uf;
function i_() {
  return Uf || (Uf = sy(t_));
}
const n_ = ((...e) => {
  const t = i_().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = r_(n);
    if (!a) return;
    const r = t._component;
    !De(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = i(a, !1, a_(a));
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
function td(e, t, i) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(n);
  if (a === null) {
    if (i !== void 0)
      return i;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), i !== void 0)
      return i;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function o_(e) {
  if (Array.isArray(e)) return e;
}
function s_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, o, u = [], d = !0, v = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(d = (n = r.call(i)).done) && (u.push(n.value), u.length !== t); d = !0) ;
    } catch (p) {
      v = !0, a = p;
    } finally {
      try {
        if (!d && i.return != null && (o = i.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw a;
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
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? jf(e, t) : void 0;
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
mu || (mu = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return t.apply(i, a);
});
yu || (yu = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Ea = _t(Array.prototype.forEach), h_ = _t(Array.prototype.lastIndexOf), Hf = _t(Array.prototype.pop), jr = _t(Array.prototype.push), v_ = _t(Array.prototype.splice), lr = Array.isArray, Xr = _t(String.prototype.toLowerCase), Lc = _t(String.prototype.toString), Vf = _t(String.prototype.match), Br = _t(String.prototype.replace), Kf = _t(String.prototype.indexOf), g_ = _t(String.prototype.trim), b_ = _t(Number.prototype.toString), m_ = _t(Boolean.prototype.toString), Gf = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), ni = _t(Object.prototype.hasOwnProperty), Hr = _t(Object.prototype.toString), Bt = _t(RegExp.prototype.test), Ca = y_(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return mu(e, t, n);
  };
}
function y_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return yu(e, i);
  };
}
function Ge(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xr;
  if (Bf && Bf(e, null), !lr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (d_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function __(e) {
  for (let t = 0; t < e.length; t++)
    ni(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = tr(null);
  for (const n of fv(e)) {
    var i = c_(n, 2);
    const a = i[0], r = i[1];
    ni(e, a) && (lr(r) ? t[a] = __(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = di(r) : t[a] = r);
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
      const t = e, i = Li(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : Hr(n);
      }
      return Hr(e);
    }
    default:
      return Hr(e);
  }
}
function Li(e, t) {
  for (; e !== null; ) {
    const n = p_(e, t);
    if (n) {
      if (n.get)
        return _t(n.get);
      if (typeof n.value == "function")
        return _t(n.value);
    }
    e = f_(e);
  }
  function i() {
    return null;
  }
  return i;
}
function S_(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Wf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Rc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ic = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), C_ = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), k_ = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yf = St(["#text"]), Xf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ms = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), T_ = kt(/{{[\w\W]*|^[\w\W]*}}/g), E_ = kt(/<%[\w\W]*|^[\w\W]*%>/g), A_ = kt(/\${[\w\W]*/g), x_ = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), O_ = kt(/^aria-[\-\w]+$/), Jf = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), N_ = kt(/^(?:\w+script|data):/i), L_ = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), R_ = kt(/^html$/i), I_ = kt(/^[a-z][.\w]*(-[.\w]+)+$/i), Qf = kt(/<[/\w!]/g), ep = kt(/<[/\w]/g), P_ = kt(/<\/no(script|embed|frames)/i), $_ = kt(/\/>/i), ci = {
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
}, z_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  i && i.hasAttribute(a) && (n = i.getAttribute(a));
  const r = "dompurify" + (n ? "#" + n : "");
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
}, Un = function(t, i, n, a) {
  return ni(t, i) && lr(t[i]) ? Ge(a.base ? di(a.base) : {}, t[i], a.transform) : n;
}, Fc = function(t, i, n) {
  const a = ni(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? di(a) : n();
};
function vv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : M_();
  const t = (te) => vv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ci.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, u = e.Element, d = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const p = e.DOMParser, y = e.trustedTypes, k = u.prototype, E = Li(k, "cloneNode"), L = Li(k, "remove"), A = Li(k, "nextSibling"), N = Li(k, "childNodes"), D = Li(k, "parentNode"), M = Li(k, "shadowRoot"), z = Li(k, "attributes"), C = o && o.prototype ? Li(o.prototype, "nodeType") : null, re = o && o.prototype ? Li(o.prototype, "nodeName") : null, de = o && o.prototype ? Li(o.prototype, "ownerDocument") : null, Z = function(S) {
    return C ? C(S) : S.nodeType;
  }, pe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = i.createElement("template");
    te.content && te.content.ownerDocument && (i = te.content.ownerDocument);
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
  }, ae = i, me = ae.implementation, fe = ae.createNodeIterator, Se = ae.createDocumentFragment, Te = ae.getElementsByTagName, Ke = n.importNode;
  let Le = tp();
  t.isSupported = typeof fv == "function" && typeof D == "function" && me && me.createHTMLDocument !== void 0;
  const lt = T_, ht = E_, it = A_, ut = x_, at = O_, Ft = N_, H = L_, w = I_;
  let T = Jf, x = null;
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
  let he = !0, oe = !0, ve = !1, Oe = !0, $e = !1, ze = !0, Fe = !1, He = !1, rt = null, vt = null, Tt = !1, Dt = !1, Ei = !1, tt = !1, dt = !0, Di = !1;
  const vi = "user-content-";
  let na = !0, An = !1, Mi = {}, zi = null;
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
  let en = null;
  const xn = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let On = null;
  const Nn = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gt = "http://www.w3.org/1998/Math/MathML", ja = "http://www.w3.org/2000/svg", ai = "http://www.w3.org/1999/xhtml";
  let Ln = ai, aa = !1, Ba = null;
  const ra = Ge({}, [gt, ja, ai], Lc), Rn = St(["mi", "mo", "mn", "ms", "mtext"]);
  let hr = Ge({}, Rn);
  const Uo = St(["annotation-xml"]);
  let vr = Ge({}, Uo);
  const Mt = Ge({}, ["title", "style", "font", "a", "script"]);
  let gi = null;
  const jo = ["application/xhtml+xml", "text/html"], ec = "text/html";
  let pt = null, In = null;
  const tc = i.createElement("form"), Bo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, gr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (In && In === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = di(S), gi = // eslint-disable-next-line unicorn/prefer-includes
    jo.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ec : S.PARSER_MEDIA_TYPE, pt = gi === "application/xhtml+xml" ? Lc : Xr, x = Un(S, "ALLOWED_TAGS", R, {
      transform: pt
    }), I = Un(S, "ALLOWED_ATTR", j, {
      transform: pt
    }), Ba = Un(S, "ALLOWED_NAMESPACES", ra, {
      transform: Lc
    }), On = Un(S, "ADD_URI_SAFE_ATTR", Nn, {
      transform: pt,
      base: Nn
    }), en = Un(S, "ADD_DATA_URI_TAGS", xn, {
      transform: pt,
      base: xn
    }), zi = Un(S, "FORBID_CONTENTS", pr, {
      transform: pt
    }), K = Un(S, "FORBID_TAGS", di({}), {
      transform: pt
    }), Q = Un(S, "FORBID_ATTR", di({}), {
      transform: pt
    }), Mi = ni(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? di(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, ve = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, Fe = S.WHOLE_DOCUMENT || !1, Dt = S.RETURN_DOM || !1, Ei = S.RETURN_DOM_FRAGMENT || !1, tt = S.RETURN_TRUSTED_TYPE || !1, Tt = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Di = S.SANITIZE_NAMED_PROPS || !1, na = S.KEEP_CONTENT !== !1, An = S.IN_PLACE || !1, T = S_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Jf, Ln = typeof S.NAMESPACE == "string" ? S.NAMESPACE : ai, hr = Fc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Rn)
      // Default built-in map
    ), vr = Fc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Uo)
      // Default built-in map
    );
    const P = Fc(S, "CUSTOM_ELEMENT_HANDLING", () => tr(null));
    if (G = tr(null), ni(P, "tagNameCheck") && Bo(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), ni(P, "attributeNameCheck") && Bo(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), ni(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), kt(G), $e && (oe = !1), Ei && (Dt = !0), Mi && (x = Ge({}, Yf), I = tr(null), Mi.html === !0 && (Ge(x, Wf), Ge(I, Xf)), Mi.svg === !0 && (Ge(x, Rc), Ge(I, $c), Ge(I, ms)), Mi.svgFilters === !0 && (Ge(x, Ic), Ge(I, $c), Ge(I, ms)), Mi.mathMl === !0 && (Ge(x, Pc), Ge(I, Zf), Ge(I, ms))), V.tagCheck = null, V.attributeCheck = null, ni(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : lr(S.ADD_TAGS) && (x === R && (x = di(x)), Ge(x, S.ADD_TAGS, pt))), ni(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : lr(S.ADD_ATTR) && (I === j && (I = di(I)), Ge(I, S.ADD_ATTR, pt))), ni(S, "ADD_FORBID_CONTENTS") && lr(S.ADD_FORBID_CONTENTS) && (zi === pr && (zi = di(zi)), Ge(zi, S.ADD_FORBID_CONTENTS, pt)), na && (x["#text"] = !0), Fe && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
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
    St && St(S), In = S;
  }, Ho = Ge({}, [...Rc, ...Ic, ...C_]), Vo = Ge({}, [...Pc, ...k_]), ic = function(S, P, q) {
    return P.namespaceURI === ai ? S === "svg" : P.namespaceURI === gt ? S === "svg" && (q === "annotation-xml" || hr[q]) : !!Ho[S];
  }, nc = function(S, P, q) {
    return P.namespaceURI === ai ? S === "math" : P.namespaceURI === ja ? S === "math" && vr[q] : !!Vo[S];
  }, ac = function(S, P, q) {
    return P.namespaceURI === ja && !vr[q] || P.namespaceURI === gt && !hr[q] ? !1 : !Vo[S] && (Mt[S] || !Ho[S]);
  }, rc = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: Ln,
      tagName: "template"
    });
    const q = Xr(S.tagName), ce = Xr(P.tagName);
    return Ba[S.namespaceURI] ? S.namespaceURI === ja ? ic(q, P, ce) : S.namespaceURI === gt ? nc(q, P, ce) : S.namespaceURI === ai ? ac(q, P, ce) : !!(gi === "application/xhtml+xml" && Ba[S.namespaceURI]) : !1;
  }, Ui = function(S) {
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
    Pn(S);
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
  }, ji = function(S, P, q) {
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
      if (Dt || Ei)
        try {
          Ui(P);
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
  }, Pn = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop();
      Z(q) === ci.element && br(q);
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
      if (ce === ci.processingInstruction || ce === ci.comment && Bt(ep, q.data)) {
        try {
          L(q);
        } catch {
        }
        continue;
      }
      if (ce === ci.element) {
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
    gi === "application/xhtml+xml" && Ln === ai && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = X ? U(S) : S;
    if (Ln === ai)
      try {
        P = new p().parseFromString(ce, gi);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = me.createDocument(Ln, "template", null);
      try {
        P.documentElement.innerHTML = aa ? se : ce;
      } catch {
      }
    }
    const ue = P.body || P.documentElement;
    return S && q && ue.insertBefore(i.createTextNode(q), ue.childNodes[0] || null), Ln === ai ? Te.call(P, Fe ? "html" : "body")[0] : Fe ? P.documentElement : ue;
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
    return S = Br(S, lt, " "), S = Br(S, ht, " "), S = Br(S, it, " "), S;
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
      Bi(Xe.content) && Ka(Xe.content);
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
  }, Bi = function(S) {
    if (!C || typeof S != "object" || S === null)
      return !1;
    try {
      return C(S) === ci.documentFragment;
    } catch {
      return !1;
    }
  }, tn = function(S) {
    if (!C || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof C(S) == "number";
    } catch {
      return !1;
    }
  };
  function ri(te, S, P) {
    te.length !== 0 && Ea(te, (q) => {
      q.call(t, S, P, In);
    });
  }
  const Ai = function(S, P) {
    return !!(ze && S.hasChildNodes() && !tn(S.firstElementChild) && Bt(Qf, S.textContent) && Bt(Qf, S.innerHTML) || ze && S.namespaceURI === ai && F_[P] && (tn(S.firstElementChild) || typeof S.textContent == "string" && Bt(D_[P], S.textContent)) || S.nodeType === ci.processingInstruction || ze && S.nodeType === ci.comment && Bt(ep, S.data));
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
    if (na && !zi[P]) {
      const ce = D(S), ue = N(S);
      if (ue && ce) {
        const Ne = ue.length;
        for (let Xe = Ne - 1; Xe >= 0; --Xe) {
          const ct = S === q ? E(ue[Xe], !0) : ue[Xe];
          ce.insertBefore(ct, A(S));
        }
      }
    }
    return Ui(S), !0;
  }, _r = function(S, P, q, ce) {
    return S.length === 0 ? P : P === q || P === ce ? di(P) : P;
  }, Wo = function(S, P) {
    return S === P || D(S) !== null ? !1 : (An && Pn(S), !0);
  }, Yo = function(S, P) {
    if (ri(Le.beforeSanitizeElements, S, null), Wo(S, P))
      return !0;
    if (Ga(S))
      return Ui(S), !0;
    const q = pt(pe(S));
    if (x = _r(Le.uponSanitizeElement, x, R, rt), ri(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: x
    }), Wo(S, P))
      return !0;
    if (Ai(S, q))
      return Ui(S), !0;
    if (K[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !x[q]) {
      const ue = qo(S, q, P);
      return ue === !1 && ri(Le.afterSanitizeElements, S, null), ue;
    }
    if (Z(S) === ci.element && !rc(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Bt(P_, S.innerHTML))
      return Ui(S), !0;
    if ($e && S.nodeType === ci.text) {
      const ue = oa(S.textContent);
      S.textContent !== ue && (jr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ue);
    }
    return ri(Le.afterSanitizeElements, S, null), !1;
  }, wr = function(S, P, q) {
    if (Q[P] || Va(P, S) || dt && (P === "id" || P === "name") && (q in i || q in tc))
      return !1;
    const ce = I[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return oe && Bt(ut, P) || he && Bt(at, P) ? !0 : ce ? On[P] || Bt(T, Br(q, H, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Kf(q, "data:") === 0 && en[S] || ve && !Bt(Ft, Br(q, H, "")) ? !0 : !q : (
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
      q ? S.setAttributeNS(q, P, ce) : S.setAttribute(P, ce), Ga(S) ? Ui(S) : Hf(t.removed);
    } catch {
      ji(P, S);
    }
  }, Zo = function(S) {
    ri(Le.beforeSanitizeAttributes, S, null);
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
      const Ne = P[ce], Xe = Ne.name, ct = Ne.namespaceURI, wt = Ne.value, Et = pt(Xe), nn = wt;
      let At = Xe === "value" ? nn : g_(nn);
      if (q.attrName = Et, q.attrValue = At, q.keepAttr = !0, q.forceKeepAttr = void 0, ri(Le.uponSanitizeAttribute, S, q), At = q.attrValue, Di && (Et === "id" || Et === "name") && Kf(At, vi) !== 0 && (ji(Xe, S, Ne), At = vi + At), ze && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, At)) {
        ji(Xe, S, Ne);
        continue;
      }
      if (Et === "attributename" && Vf(At, "href")) {
        ji(Xe, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          ji(Xe, S, Ne);
          continue;
        }
        if (!Oe && Bt($_, At)) {
          ji(Xe, S, Ne);
          continue;
        }
        if ($e && (At = oa(At)), !wr(ue, Et, At)) {
          ji(Xe, S, Ne);
          continue;
        }
        At = oc(ue, Et, ct, At), At !== nn && sc(S, Xe, ct, At);
      }
    }
    ri(Le.afterSanitizeAttributes, S, null);
  }, la = function(S) {
    let P = null;
    const q = Go(S);
    for (ri(Le.beforeSanitizeShadowDOM, S, null); P = q.nextNode(); )
      if (ri(Le.uponSanitizeShadowNode, P, null), Yo(P, S), Zo(P), Bi(P.content) && la(P.content), Z(P) === ci.element) {
        const ce = M(P);
        Bi(ce) && (zt(ce), la(ce));
      }
    ri(Le.afterSanitizeShadowDOM, S, null);
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
      const ce = q.node, Ne = Z(ce) === ci.element, Xe = N(ce);
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
          Bi(wt) && P.push({
            node: wt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const ct = M(ce);
        Bi(ct) && P.push({
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
    if (aa = !te, aa && (te = "<!-->"), typeof te != "string" && !tn(te) && (te = w_(te), typeof te != "string"))
      throw Ca("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (x = rt, I = vt) : gr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (x = di(x)), Le.uponSanitizeAttribute.length > 0 && (I = di(I)), t.removed = [];
    const Ne = An && typeof te != "string" && tn(te);
    if (Ne) {
      mr(te);
      const wt = pe(te);
      if (typeof wt == "string") {
        const Et = pt(wt);
        if (!x[Et] || K[Et])
          throw Ha(te), Ca("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ga(te))
        throw Ha(te), Ca("root node is clobbered and cannot be sanitized in-place");
      try {
        zt(te);
      } catch (Et) {
        throw Ha(te), Et;
      }
    } else if (tn(te))
      P = yr("<!---->"), q = P.ownerDocument.importNode(te, !0), q.nodeType === ci.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? P = q : P.appendChild(q), zt(q);
    else {
      if (!Dt && !$e && !Fe && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return X && tt ? U(te) : te;
      if (P = yr(te), !P)
        return Dt ? null : tt ? se : "";
    }
    P && Tt && Ui(P.firstChild);
    const Xe = Ne ? te : P;
    try {
      const wt = Go(Xe);
      for (; ce = wt.nextNode(); )
        Yo(ce, Xe), Zo(ce), Bi(ce.content) && la(ce.content);
    } catch (wt) {
      throw Ne && (Ha(te), Ea(t.removed, (Et) => {
        Et.element && Pn(Et.element);
      })), wt;
    }
    if (Ne)
      return Ea(t.removed, (wt) => {
        wt.element && Pn(wt.element);
      }), $e && Ka(te), te;
    if (Dt) {
      if ($e && Ka(P), Ei)
        for (ue = Se.call(P.ownerDocument); P.firstChild; )
          ue.appendChild(P.firstChild);
      else
        ue = P;
      return (I.shadowroot || I.shadowrootmode) && (ue = Ke.call(n, ue, !0)), ue;
    }
    let ct = Fe ? P.outerHTML : P.innerHTML;
    return Fe && x["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(R_, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), $e && (ct = oa(ct)), X && tt ? U(ct) : ct;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gr(te), He = !0, rt = x, vt = I;
  }, t.clearConfig = function() {
    In = null, He = !1, rt = null, vt = null, X = _e, se = "";
  }, t.isValidAttribute = function(te, S, P) {
    In || gr({});
    const q = pt(te), ce = pt(S);
    return wr(q, ce, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && ni(Le, te) && jr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (ni(Le, te)) {
      if (S !== void 0) {
        const P = h_(Le[te], S);
        return P === -1 ? void 0 : v_(Le[te], P, 1)[0];
      }
      return Hf(Le[te]);
    }
  }, t.removeHooks = function(te) {
    ni(Le, te) && (Le[te] = []);
  }, t.removeAllHooks = function() {
    Le = tp();
  }, t;
}
var gv = vv();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc, ip;
function U_() {
  if (ip) return Dc;
  ip = 1;
  var e = /["'&<>]/;
  Dc = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, o = "", u = 0, d = 0;
    for (u = a.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
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
      d !== u && (o += n.substring(d, u)), d = u + 1, o += r;
    }
    return d !== u ? o + n.substring(d, u) : o;
  }
  return Dc;
}
var j_ = U_();
const Gs = /* @__PURE__ */ id(j_);
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
function b(e, t, i, n, a) {
  const r = typeof i == "object" ? i : void 0, o = typeof n == "number" ? n : typeof i == "number" ? i : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, d = (A) => A, v = (u.sanitize ? gv.sanitize : d) || d, p = u.escape ? Gs : d, y = (A) => typeof A == "string" || typeof A == "number", k = (A, N, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
    if (N === void 0 || !(z in N))
      return p(M);
    const C = N[z];
    return y(C) ? p(`${C}`) : typeof C == "object" && y(C.value) ? (C.escape !== !1 ? Gs : d)(`${C.value}`) : p(M);
  });
  let L = (a?.bundle ?? bv(e)).translations[t] || t;
  return L = Array.isArray(L) ? L[0] : L, v(typeof r == "object" || o !== void 0 ? k(
    L,
    r,
    o
  ) : L);
}
function ui(e, t, i, n, a, r) {
  const o = "_" + t + "_::_" + i + "_", u = r?.bundle ?? bv(e), d = u.translations[o];
  if (typeof d < "u") {
    const v = d;
    if (Array.isArray(v)) {
      const p = u.pluralFunction(n);
      return b(e, v[p], a, n, r);
    }
  }
  return n === 1 ? b(e, t, a, n, r) : b(e, i, a, n, r);
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
  constructor(t, i, n) {
    this.scope = `${n ? qs.GLOBAL_SCOPE_PERSISTENT : qs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
  }
  scopeKey(t) {
    return `${this.scope}${t}`;
  }
  setItem(t, i) {
    this.wrapped.setItem(this.scopeKey(t), i);
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
var Mc, np;
function yv() {
  if (np) return Mc;
  np = 1;
  var e = {};
  return Mc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, Mc;
}
var zc, ap;
function _v() {
  if (ap) return zc;
  ap = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return zc = {
    MAX_LENGTH: t,
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: a,
    MAX_SAFE_INTEGER: i,
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
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = _v(), r = yv();
    t = e.exports = {};
    const o = t.re = [], u = t.safeRe = [], d = t.src = [], v = t.safeSrc = [], p = t.t = {};
    let y = 0;
    const k = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [k, n]
    ], L = (N) => {
      for (const [D, M] of E)
        N = N.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return N;
    }, A = (N, D, M) => {
      const z = L(D), C = y++;
      r(N, C, D), p[N] = C, d[C] = D, v[C] = z, o[C] = new RegExp(D, M ? "g" : void 0), u[C] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${k}*`), A("MAINVERSION", `(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${d[p.PRERELEASEIDENTIFIER]}(?:\\.${d[p.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${d[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[p.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${k}+`), A("BUILD", `(?:\\+(${d[p.BUILDIDENTIFIER]}(?:\\.${d[p.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${d[p.MAINVERSION]}${d[p.PRERELEASE]}?${d[p.BUILD]}?`), A("FULL", `^${d[p.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${d[p.MAINVERSIONLOOSE]}${d[p.PRERELEASELOOSE]}?${d[p.BUILD]}?`), A("LOOSE", `^${d[p.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${d[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${d[p.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:${d[p.PRERELEASE]})?${d[p.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:${d[p.PRERELEASELOOSE]})?${d[p.BUILD]}?)?)?`), A("XRANGE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), A("COERCE", `${d[p.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", d[p.COERCEPLAIN] + `(?:${d[p.PRERELEASE]})?(?:${d[p.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", d[p.COERCE], !0), A("COERCERTLFULL", d[p.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${d[p.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${d[p.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${d[p.LONECARET]}${d[p.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${d[p.LONECARET]}${d[p.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${d[p.GTLT]}\\s*(${d[p.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]}|${d[p.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${d[p.XRANGEPLAIN]})\\s+-\\s+(${d[p.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${d[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[p.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ys, ys.exports)), ys.exports;
}
var Uc, op;
function Y_() {
  if (op) return Uc;
  op = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Uc = (n) => n ? typeof n != "object" ? e : n : t, Uc;
}
var jc, sp;
function X_() {
  if (sp) return jc;
  sp = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), o = e.test(a);
    return r && o && (n = +n, a = +a), n === a ? 0 : r && !o ? -1 : o && !r ? 1 : n < a ? -1 : 1;
  };
  return jc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, jc;
}
var Bc, lp;
function wv() {
  if (lp) return Bc;
  lp = 1;
  const e = yv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = _v(), { safeRe: n, t: a } = W_(), r = Y_(), { compareIdentifiers: o } = X_(), u = (v, p) => {
    const y = p.split(".");
    if (y.length > v.length)
      return !1;
    for (let k = 0; k < y.length; k++)
      if (o(v[k], y[k]) !== 0)
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
      const k = p.trim().match(y.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!k)
        throw new TypeError(`Invalid Version: ${p}`);
      if (this.raw = p, this.major = +k[1], this.minor = +k[2], this.patch = +k[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      k[4] ? this.prerelease = k[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const L = +E;
          if (L >= 0 && L < i)
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
          const E = `-${y}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
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
  return Hc = (i, n) => new e(i, n).major, Hc;
}
var J_ = Z_();
const up = /* @__PURE__ */ id(J_);
var Vc, dp;
function Q_() {
  if (dp) return Vc;
  dp = 1;
  const e = wv();
  return Vc = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
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
  return Kc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, Kc;
}
var t1 = e1();
const i1 = /* @__PURE__ */ id(t1);
class n1 {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !i1(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : up(t.getVersion()) !== up(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()
    ), this.bus = t;
  }
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, i) {
    this.bus.subscribe(t, i);
  }
  unsubscribe(t, i) {
    this.bus.unsubscribe(t, i);
  }
  emit(t, ...i) {
    this.bus.emit(t, ...i);
  }
}
class a1 {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.3";
  }
  subscribe(t, i) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).concat(
        i
      )
    );
  }
  unsubscribe(t, i) {
    this.handlers.set(
      t,
      (this.handlers.get(t) || []).filter((n) => n !== i)
    );
  }
  emit(t, ...i) {
    (this.handlers.get(t) || []).forEach((a) => {
      try {
        a(i[0]);
      } catch (r) {
        console.error("could not invoke event listener", r);
      }
    });
  }
}
let Vr = null;
function nd() {
  return Vr !== null ? Vr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Vr = new n1(window._nc_event_bus) : Vr = window._nc_event_bus = new a1(), Vr);
}
function Sv(e, t) {
  nd().subscribe(e, t);
}
function r1(e, t) {
  nd().unsubscribe(e, t);
}
function _n(e, ...t) {
  nd().emit(e, ...t);
}
const Cv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const o1 = Object.prototype.toString, s1 = (e) => o1.call(e) === "[object Object]", Za = () => {
}, l1 = /* @__PURE__ */ c1();
function c1() {
  var e, t, i;
  return Cv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function Gc(e) {
  return Array.isArray(e) ? e : [e];
}
function u1(e, t, i) {
  return We(e, t, {
    ...i,
    immediate: !0
  });
}
const kv = Cv ? window : void 0;
function Zr(e) {
  var t;
  const i = mn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function cr(...e) {
  const t = (n, a, r, o) => (n.addEventListener(a, r, o), () => n.removeEventListener(a, r, o)), i = B(() => {
    const n = Gc(mn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return u1(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => Zr(r))) !== null && n !== void 0 ? n : [kv].filter((r) => r != null),
      Gc(mn(i.value ? e[1] : e[0])),
      Gc(g(i.value ? e[2] : e[1])),
      mn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, o], u, d) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const v = s1(o) ? { ...o } : o, p = n.flatMap((y) => a.flatMap((k) => r.map((E) => t(y, k, E, v))));
    d(() => {
      p.forEach((y) => y());
    });
  }, { flush: "post" });
}
let pp = !1;
function hp(e, t, i = {}) {
  const { window: n = kv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: u = !1 } = i;
  if (!n) return u ? {
    stop: Za,
    cancel: Za,
    trigger: Za
  } : Za;
  if (l1 && !pp) {
    pp = !0;
    const N = { passive: !0 };
    Array.from(n.document.body.children).forEach((D) => D.addEventListener("click", Za, N)), n.document.documentElement.addEventListener("click", Za, N);
  }
  let d = !0;
  const v = (N) => mn(a).some((D) => {
    if (typeof D == "string") return Array.from(n.document.querySelectorAll(D)).some((M) => M === N.target || N.composedPath().includes(M));
    {
      const M = Zr(D);
      return M && (N.target === M || N.composedPath().includes(M));
    }
  });
  function p(N) {
    const D = mn(N);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(N, D) {
    const M = mn(N), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((C) => C.el === D.target || D.composedPath().includes(C.el));
  }
  const k = (N) => {
    const D = Zr(e);
    if (N.target != null && !(!(D instanceof Element) && p(e) && y(e, N)) && !(!D || D === N.target || N.composedPath().includes(D))) {
      if ("detail" in N && N.detail === 0 && (d = !v(N)), !d) {
        d = !0;
        return;
      }
      t(N);
    }
  };
  let E = !1;
  const L = [
    cr(n, "click", (N) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), k(N));
    }, {
      passive: !0,
      capture: r
    }),
    cr(n, "pointerdown", (N) => {
      const D = Zr(e);
      d = !v(N) && !!(D && !N.composedPath().includes(D));
    }, { passive: !0 }),
    o && cr(n, "blur", (N) => {
      setTimeout(() => {
        const D = Zr(e);
        let M = n.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(n.document.activeElement) && t(N);
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
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, u = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), v = B(() => u.x - d.x), p = B(() => u.y - d.y), { max: y, abs: k } = Math, E = B(() => y(k(v.value), k(p.value)) >= i), L = /* @__PURE__ */ gh(!1), A = B(() => E.value ? k(v.value) > k(p.value) ? v.value > 0 ? "left" : "right" : p.value > 0 ? "up" : "down" : "none"), N = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, pe) => {
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
      M(pe, X), z.capture && !z.passive && Math.abs(v.value) > Math.abs(p.value) && Z.preventDefault(), !L.value && E.value && (L.value = !0), L.value && n?.(Z);
    }, z),
    cr(e, ["touchend", "touchcancel"], C, z)
  ];
  return {
    isSwiping: L,
    direction: A,
    coordsStart: u,
    coordsEnd: d,
    lengthX: v,
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
    let i = t, n = e, a = Um(), r = zm(), o = /* @__PURE__ */ Ee([]), u = B(() => o.value.reduce((H, w) => (H[~~w.id] = w) && H, {})), d = B(() => o.value.length), v = /* @__PURE__ */ Ee(null), p = /* @__PURE__ */ Ee(!1), y = /* @__PURE__ */ Ee({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), k = /* @__PURE__ */ Ee({
      splitter: null,
      timeoutId: null
    }), E = B(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": p.value
    })), L = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, N = (H, w) => {
      let T = H.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: x, top: R } = T.getBoundingClientRect(), { clientX: I, clientY: j } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
        y.value.cursorOffset = n.horizontal ? j - R : I - x;
      }
      L(), y.value.mouseDown = !0, y.value.activeSplitter = w, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
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
      }, !0), n.maximizePanes) {
        let T = 0;
        o.value = o.value.map((x, R) => (x.size = R === w ? x.max : x.min, R !== w && (T += x.min), x)), o.value[w].size -= T, at("pane-maximize", {
          event: H,
          index: w,
          pane: o.value[w]
        }), at("resized", {
          event: H,
          index: w
        }, !0);
      }
    }, re = (H, w) => {
      if (!n.keyboardStep) return;
      let T = n.horizontal ? H.key === "ArrowDown" : H.key === "ArrowRight", x = n.horizontal ? H.key === "ArrowUp" : H.key === "ArrowLeft";
      if (!T && !x) return;
      H.preventDefault(), y.value.activeSplitter = w;
      let R = (T ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), I = ee(w) + o.value[w].size;
      se(Math.min(Math.max(I + R * n.keyboardStep, 0), 100)), at("resize", { event: H }, !0), at("resized", { event: H }, !0), y.value.activeSplitter = null;
    }, de = (H, w) => {
      let T = u.value[w];
      T && at("pane-click", {
        event: H,
        index: T.index,
        pane: T
      });
    }, Z = (H) => {
      let w = v.value.getBoundingClientRect(), { clientX: T, clientY: x } = "ontouchstart" in window && H.touches ? H.touches[0] : H;
      return {
        x: T - (n.horizontal ? 0 : y.value.cursorOffset) - w.left,
        y: x - (n.horizontal ? y.value.cursorOffset : 0) - w.top
      };
    }, pe = (H) => {
      H = H[n.horizontal ? "y" : "x"];
      let w = v.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (H = w - H), H * 100 / w;
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
      }, x = 0 + (n.pushOtherPanes ? 0 : T.prevPanesSize), R = 100 - (n.pushOtherPanes ? 0 : T.nextPanesSize);
      H = Math.max(Math.min(H, R), x);
      let I = [w, w + 1], j = o.value[I[0]] || null, G = o.value[I[1]] || null, K = j !== null && j.max < 100 && H >= j.max + T.prevPanesSize, Q = G !== null && G.max < 100 && H <= 100 - (G.max + J(w + 1));
      if (K || Q) {
        K ? (j.size = j.max, G.size = Math.min(Math.max(100 - j.max - T.prevPanesSize - T.nextPanesSize, G.min), G.max)) : (j.size = Math.min(Math.max(100 - G.max - T.prevPanesSize - J(w + 1), j.min), j.max), G.size = G.max);
        return;
      }
      if (n.pushOtherPanes) {
        let V = _e(T, H);
        if (!V) return;
        ({ sums: T, panesToResize: I } = V), j = o.value[I[0]] || null, G = o.value[I[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(H - T.prevPanesSize - T.prevReachedMinPanes, j.min), j.max)), G !== null && (G.size = Math.min(Math.max(100 - H - T.nextPanesSize - T.nextReachedMinPanes, G.min), G.max));
    }, _e = (H, w) => {
      let T = y.value.activeSplitter, x = [T, T + 1];
      if (w < H.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = F(T).index, H.prevReachedMinPanes = 0, x[0] < T && o.value.forEach((R, I) => {
          I > x[0] && I <= T && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), x[0] === void 0) return H.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((R, I) => {
          I > 0 && I <= T && (R.size = R.min, H.prevReachedMinPanes += R.min);
        }), o.value[x[1]].size = 100 - H.prevReachedMinPanes - o.value[0].min - H.prevPanesSize - H.nextPanesSize, null;
        H.prevPanesSize = ee(x[0]);
      }
      return w > 100 - H.nextPanesSize - o.value[x[1]].min && (x[1] = U(T).index, H.nextReachedMinPanes = 0, x[1] > T + 1 && o.value.forEach((R, I) => {
        I > T && I < x[1] && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), H.nextPanesSize = x[1] === void 0 ? 0 : J(x[1] - 1), x[1] === void 0) ? (H.nextReachedMinPanes = 0, o.value.forEach((R, I) => {
        I >= T + 1 && (R.size = R.min, H.nextReachedMinPanes += R.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - H.prevPanesSize - J(x[0] - 1)), null) : {
        sums: H,
        panesToResize: x
      };
    }, ee = (H) => o.value.reduce((w, T, x) => w + (x < H ? T.size : 0), 0), J = (H) => o.value.reduce((w, T, x) => w + (x > H + 1 ? T.size : 0), 0), F = (H) => [...o.value].reverse().find((w) => w.index < H && w.size > w.min) || {}, U = (H) => o.value.find((w) => w.index > H + 1 && w.size > w.min) || {}, Y = () => {
      let H = Array.from(v.value?.children || []);
      for (let w of H) {
        let T = w.classList.contains("splitpanes__pane"), x = w.classList.contains("splitpanes__splitter");
        !T && !x && (w.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (H, w, T = !1) => {
      let x = H - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (I) => N(I, x), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => N(I, x)), R.onclick = (I) => z(I, x + 1), n.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => re(I, x))), R.ondblclick = (I) => C(I, x + 1), w.parentNode.insertBefore(R, w);
    }, ae = (H) => {
      H.onmousedown = null, H.onclick = null, H.ondblclick = null, H.onkeydown = null, H.remove();
    }, me = () => {
      let H = Array.from(v.value?.children || []);
      for (let T of H) T.className.includes("splitpanes__splitter") && ae(T);
      let w = 0;
      for (let T of H) T.className.includes("splitpanes__pane") && (!w && n.firstSplitter ? le(w, T, !0) : w && le(w, T), w++);
    }, fe = ({ uid: H, ...w }) => {
      let T = u.value[H];
      for (let [x, R] of Object.entries(w)) T[x] = R;
    }, Se = !1, Te = (H) => {
      let w = -1;
      Array.from(v.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && w++, T.isSameNode(H.el))), o.value.splice(w, 0, {
        ...H,
        index: w
      }), o.value.forEach((T, x) => T.index = x), p.value && !Se && (Se = !0, ei(() => {
        me(), Le({ addedPane: o.value[w] }), at("pane-add", { pane: o.value[w] }), Se = !1;
      }));
    }, Ke = (H) => {
      let w = o.value.findIndex((x) => x.id === H);
      o.value[w].el = null;
      let T = o.value.splice(w, 1)[0];
      o.value.forEach((x, R) => x.index = R), ei(() => {
        me(), at("pane-remove", { pane: T }), Le({ removedPane: {
          ...T
        } });
      });
    }, Le = (H = {}) => {
      !H.addedPane && !H.removedPane ? ht() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? it(H) : lt(), p.value && at("resized");
    }, lt = () => {
      let H = 100 / d.value, w = 100, T = [], x = [];
      for (let R of o.value) R.size = Math.max(Math.min(H, R.max), R.min), w -= R.size, R.size >= R.max && T.push(R.id), R.size <= R.min && x.push(R.id);
      Math.abs(w) > 0.1 && ut(w, T, x);
    }, ht = () => {
      let H = 100, w = [], T = [], x = 0;
      for (let I of o.value) H -= I.size, I.givenSize !== null && x++, I.size >= I.max && w.push(I.id), I.size <= I.min && T.push(I.id);
      let R = 100;
      if (H > 0.1) {
        for (let I of o.value) I.givenSize === null && (I.size = Math.max(Math.min(H / (d.value - x), I.max), I.min)), R -= I.size;
        R > 0.1 && ut(R, w, T);
      }
    }, it = ({ addedPane: H, removedPane: w } = {}) => {
      let T = o.value.reduce((K, Q) => K + (Q.givenSize === null ? 0 : Q.givenSize), 0), x = o.value.filter((K) => K.givenSize === null).length, R = x > 0 ? (100 - T) / x : 0, I = 0, j = [], G = [];
      for (let K of o.value) I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(I) < 0.1)) {
        I = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(R, K.max), K.min)), I -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(I) > 0.1 && ut(I, j, G);
      }
    }, ut = (H, w, T) => {
      let x;
      x = H > 0 ? H / (d.value - w.length) : H / (d.value - T.length), o.value.forEach((R, I) => {
        if (H > 0 && !w.includes(R.id)) {
          let j = Math.max(Math.min(R.size + x, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        } else if (!T.includes(R.id)) {
          let j = Math.max(Math.min(R.size + x, R.max), R.min), G = j - R.size;
          H -= G, R.size = j;
        }
      }), Math.abs(H) > 0.1 && p.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (H, w = void 0, T = !1) => {
      let x = w?.index ?? y.value.activeSplitter ?? null;
      i(H, {
        ...w,
        ...x !== null && { index: x },
        ...T && x !== null && {
          prevPane: o.value[x - +!!n.firstSplitter],
          nextPane: o.value[x + +!n.firstSplitter]
        },
        panes: o.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    We(() => n.firstSplitter, () => me()), We(() => n.horizontal, (H) => ei(() => {
      i("direction-changed", {
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
      return ii("div", {
        ref: v,
        class: [E.value, H],
        ...w
      }, r.default?.());
    };
    return _i("panes", o), _i("indexedPanes", u), _i("horizontal", B(() => n.horizontal)), _i("requestUpdate", fe), _i("onPaneAdd", Te), _i("onPaneRemove", Ke), _i("onPaneClick", de), (H, w) => (m(), je(Yu(Ft)));
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
    let t = e, i = Kt("requestUpdate"), n = Kt("onPaneAdd"), a = Kt("horizontal"), r = Kt("onPaneRemove"), o = Kt("onPaneClick"), u = za()?.uid, d = Kt("indexedPanes"), v = B(() => d.value[u]), p = /* @__PURE__ */ Ee(null), y = B(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), k.value);
    }), k = B(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = B(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), L = B(() => {
      let A = v.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return We(() => y.value, (A) => i({
      uid: u,
      size: A
    })), We(() => k.value, (A) => i({
      uid: u,
      min: A
    })), We(() => E.value, (A) => i({
      uid: u,
      max: A
    })), ea(() => {
      n({
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
      style: hi(L.value)
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
    const i = Object.values(t.translations[""] ?? {}).map(({ msgid: n, msgid_plural: a, msgstr: r }) => a !== void 0 ? [`_${n}_::_${a}_`, r] : [n, r[0]]);
    this.bundle.translations = {
      ...this.bundle.translations,
      ...Object.fromEntries(i)
    };
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(t, i = {}) {
    return b("", t, i, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(t, i, n, a = {}) {
    return ui("", t, i, n, a, { bundle: this.bundle });
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
  addTranslation(t, i) {
    return this.translations[t] = i, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new y1((i) => K_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function w1() {
  return new _1();
}
const xv = w1().detectLanguage().build(), Ct = (...e) => xv.gettext(...e);
function ta(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== ql() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        xv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const S1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], C1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], k1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], T1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], E1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], A1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], x1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], O1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], N1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const L1 = /* @__PURE__ */ Symbol(""), [R1] = window.OC?.config?.version?.split(".") ?? [], Ov = Number.parseInt(R1 ?? "35"), I1 = Ov < 32, ia = Ov < 34, P1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function $1() {
  return Kt(P1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const et = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
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
    const i = e, n = t, { formBoxItemClass: a } = $1(), r = Kt(L1, null) !== null, o = B(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), u = B(() => o.value === "button" && typeof i.pressed == "boolean"), d = B(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), v = B(() => d.value.startsWith("tertiary")), p = B(() => i.alignment.split("-")[0]), y = B(() => i.alignment.includes("-")), k = Kt("NcPopover:trigger:attrs", () => ({}), !1), E = B(() => k()), L = B(() => {
      if (o.value === "RouterLink")
        return {
          to: i.to,
          activeClass: "active"
        };
      if (o.value === "a")
        return {
          href: i.href || "#",
          target: i.target,
          rel: "nofollow noreferrer noopener",
          download: i.download || void 0
        };
      if (o.value === "button")
        return {
          ...E.value,
          "aria-pressed": i.pressed,
          type: i.type,
          disabled: i.disabled
        };
    });
    function A(N) {
      u.value && n("update:pressed", !i.pressed), n("click", N);
    }
    return (N, D) => (m(), je(Yu(o.value), Yt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": v.value,
          "button-vue--wide": e.wide,
          [`button-vue--${p.value}`]: p.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(I1),
          "button-vue--legacy34": g(ia)
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
              ge(h(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Zi = /* @__PURE__ */ et(z1, [["__scopeId", "data-v-47ce59a3"]]), U1 = ["aria-hidden", "aria-label"], j1 = {
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
      fb515064: i.value
    }));
    const t = e, i = B(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = B(() => {
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
      n.value ? (m(), _("span", {
        key: 1,
        innerHTML: n.value
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
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), _n("csrf-token-update", { token: e, _internal: !0 }));
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
  formatMessage(t, i, n) {
    let a = "[" + mt[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === mt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case mt.Debug:
          console.debug(this.formatMessage(i, mt.Debug, n), n);
          break;
        case mt.Info:
          console.info(this.formatMessage(i, mt.Info, n), n);
          break;
        case mt.Warn:
          console.warn(this.formatMessage(i, mt.Warn, n), n);
          break;
        case mt.Error:
          console.error(this.formatMessage(i, mt.Error, n), n);
          break;
        case mt.Fatal:
        default:
          console.error(this.formatMessage(i, mt.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(mt.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(mt.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(mt.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(mt.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(mt.Fatal, t, Object.assign({}, this.context, i));
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
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? mt.Warn, window._oc_debug && (t.context.level = mt.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
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
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
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
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), _u = V_();
ta(x1);
const i0 = /* @__PURE__ */ $t({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = zo();
    We(t, i), ea(() => {
      i(t.value);
    }), fr(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && _n("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (m(), je(g(Zi), {
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
}), n0 = /* @__PURE__ */ et(i0, [["__scopeId", "data-v-a28923a1"]]), gp = mv("nextcloud").persist().build(), a0 = q_().theming?.name ?? "Nextcloud", r0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: n0,
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? _n("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && _n("toggle-navigation", {
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
function c0(e, t, i, n, a, r) {
  const o = Be("NcAppContentDetailsToggle"), u = Be("Pane"), d = Be("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: be(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (m(), _("h1", o0, h(i.pageHeading), 1)) : $("", !0),
    e.$slots.list ? (m(), _(ie, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (m(), _("div", {
        key: 0,
        class: be(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (m(), je(o, {
          key: 0,
          onClick: ye(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : $("", !0),
        Ie(l("div", s0, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [sr, !i.showDetails]
        ]),
        i.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : $("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (m(), _("div", l0, [
        Ae(d, {
          horizontal: i.layout === "horizontal-split",
          class: be(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
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
}, Zs = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", o = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Zs(t.parentNode));
  return o;
}, d0 = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Pv = function(t, i, n) {
  if (Zs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ys));
  return i && Ma.call(t, Ys) && a.unshift(t), a = a.filter(n), a;
}, Js = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Zs(o, !1))
      if (o.tagName === "SLOT") {
        var u = o.assignedElements(), d = u.length ? u : o.children, v = Js(d, !0, n);
        n.flatten ? a.push.apply(a, v) : a.push({
          scopeParent: o,
          candidates: v
        });
      } else {
        var p = Ma.call(o, Ys);
        p && n.filter(o) && (i || !t.includes(o)) && a.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(o), k = !Zs(y, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
        if (y && k) {
          var E = Js(y === !0 ? o.children : y.children, !0, n);
          n.flatten ? a.push.apply(a, E) : a.push({
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
}, f0 = function(t, i) {
  var n = Na(t);
  return n < 0 && i && !$v(t) ? 0 : n;
}, p0 = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Fv = function(t) {
  return t.tagName === "INPUT";
}, h0 = function(t) {
  return Fv(t) && t.type === "hidden";
}, v0 = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, g0 = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, b0 = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || Xs(t), n = function(u) {
    return i.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
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
  var i, n = t && Xs(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var o, u, d;
    for (r = !!((o = a) !== null && o !== void 0 && (u = o.ownerDocument) !== null && u !== void 0 && u.contains(a) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && a; ) {
      var v, p, y;
      n = Xs(a), a = (v = n) === null || v === void 0 ? void 0 : v.host, r = !!((p = a) !== null && p !== void 0 && (y = p.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, bp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, w0 = function(t, i) {
  var n = i.displayCheck, a = i.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
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
  var d = Ma.call(t, "details>summary:first-of-type"), v = d ? t.parentElement : t;
  if (Ma.call(v, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
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
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return bp(t);
  return !1;
}, S0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return Ma.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, Qs = function(t, i) {
  return !(i.disabled || h0(i) || w0(i, t) || // For a details element with a summary, the summary element gets the focus
  v0(i) || S0(i));
}, wu = function(t, i) {
  return !(y0(i) || Na(i) < 0 || !Qs(t, i));
}, C0 = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, Dv = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, u = o ? a.scopeParent : a, d = f0(u, o), v = o ? Dv(a.candidates) : u;
    d === 0 ? o ? i.push.apply(i, v) : i.push(u) : n.push({
      documentOrder: r,
      tabIndex: d,
      item: a,
      isScope: o,
      content: v
    });
  }), n.sort(p0).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, k0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Js([t], i.includeContainer, {
    filter: wu.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: C0
  }) : n = Pv(t, i.includeContainer, wu.bind(null, i)), Dv(n);
}, T0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Js([t], i.includeContainer, {
    filter: Qs.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Pv(t, i.includeContainer, Qs.bind(null, i)), n;
}, Qa = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, Ys) === !1 ? !1 : wu(i, t);
}, E0 = /* @__PURE__ */ Rv.concat("iframe:not([inert]):not([inert] *)").join(","), qc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, E0) === !1 ? !1 : Qs(i, t);
};
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function A0(e) {
  if (Array.isArray(e)) return Su(e);
}
function mp(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Mv(e)) || t) {
      i && (e = i);
      var n = 0, a = function() {
      };
      return {
        s: a,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
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
      i = i.call(e);
    },
    n: function() {
      var d = i.next();
      return o = d.done, d;
    },
    e: function(d) {
      u = !0, r = d;
    },
    f: function() {
      try {
        o || i.return == null || i.return();
      } finally {
        if (u) throw r;
      }
    }
  };
}
function x0(e, t, i) {
  return (t = I0(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function O0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function N0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function _p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(i), !0).forEach(function(n) {
      x0(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : yp(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function L0(e) {
  return A0(e) || O0(e) || Mv(e) || N0();
}
function R0(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
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
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Su(e, t) : void 0;
  }
}
var gn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = gn.getActiveTrap(t);
    i !== n && gn.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), gn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = gn.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = gn.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
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
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, _s = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, M0 = [], rd = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || M0, r = _p({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: F0,
    isKeyBackward: D0
  }, i), o = {
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
  }, v = function(F, U) {
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
        Se = n.querySelector(fe);
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
      var U = y(n);
      if (v(U) >= 0)
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
      var fe = v(U, Y), Se = fe >= 0 ? o.containerGroups[fe] : void 0;
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
          var ht = lt === o.tabbableGroups.length - 1 ? 0 : lt + 1, it = o.tabbableGroups[ht];
          me = Na(U) >= 0 ? it.firstTabbableNode : it.firstDomTabbableNode;
        } else ao(Y) || (me = Se.nextTabbableNode(U));
      }
    } else
      me = p("fallbackFocus");
    return me;
  }, D = function(F) {
    var U = _s(F);
    if (!(v(U, F) >= 0)) {
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
    var U = _s(F), Y = v(U, F) >= 0;
    if (Y || U instanceof Document)
      Y && (o.mostRecentlyFocusedNode = U);
    else {
      F.stopImmediatePropagation();
      var le, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (Na(o.mostRecentlyFocusedNode) > 0) {
          var me = v(o.mostRecentlyFocusedNode), fe = o.containerGroups[me].tabbableNodes;
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
    v(U, F) >= 0 || Kr(r.clickOutsideDeactivates, F) || Kr(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      gn.activateTrap(a, u);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(U) {
        o.delayInitialFocusTimer = wp(function() {
          L(k()), U();
        });
      }) : L(k()), n.addEventListener("focusin", M, !0), n.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", re), F;
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
          } catch (it) {
            Le.e(it);
          } finally {
            Le.f();
          }
          Se = Te;
        }
      }
    } catch (it) {
      le.e(it);
    } finally {
      le.f();
    }
    U.forEach(function(it) {
      Y.delete(it);
    }), o.adjacentElements = Y;
  }, X = function() {
    if (o.active)
      return n.removeEventListener("focusin", M, !0), n.removeEventListener("mousedown", D, !0), n.removeEventListener("touchstart", D, !0), n.removeEventListener("click", de, !0), n.removeEventListener("keydown", C, !0), n.removeEventListener("keydown", re), u;
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
      var U = d(F, "onActivate"), Y = d(F, "onPostActivate"), le = d(F, "checkCanFocusTrap"), ae = gn.getActiveTrap(a), me = !1;
      if (ae && !ae.paused) {
        var fe;
        (fe = ae._setSubtreeIsolation) === null || fe === void 0 || fe.call(ae, !1), me = !0;
      }
      try {
        le || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = y(n), U?.({
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
        if (ae === gn.getActiveTrap(a) && me) {
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
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || u._setSubtreeIsolation(!1), o.alreadySilent.clear(), X(), o.active = !1, o.paused = !1, ee(), gn.deactivateTrap(a, u);
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
        return typeof Y == "string" ? n.querySelector(Y) : Y;
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
      const t = this.entry.getBoundingClientRect(), i = e.getBoundingClientRect();
      this.top = t.top - i.top + e.scrollTop, this.height = t.height;
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
function U0(e, t, i, n, a, r) {
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
      style: hi(e.highlightStyle),
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
    const t = Bh(e, "open"), i = B(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (n, a) => (m(), _("div", B0, [
      Ae(g(Zi), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
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
    let i;
    const n = Kt(
      jv,
      () => Sy(),
      !1
    ), a = xm("appNavigationContainer"), r = zo(), o = /* @__PURE__ */ Ee(!r.value), u = B(() => r.value && o.value);
    ym(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(u, () => {
      p();
    }), ea(() => {
      n(!0), Sv("toggle-navigation", v), _n("navigation-toggled", {
        open: o.value
      }), i = rd(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Ao(),
        escapeDeactivates: !1
      }), p();
    }), Fo(() => {
      n(!1), r1("toggle-navigation", v), i.deactivate();
    });
    function d(k) {
      if (o.value === k) {
        _n("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = k === void 0 ? !o.value : k;
      const E = getComputedStyle(document.body), L = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        _n("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * L);
    }
    function v({ open: k }) {
      return d(k);
    }
    function p() {
      u.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (k, E) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: be(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(ia)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: nt(y, ["esc"])
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
function ew(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", J0, [
        i.title ? (m(), _("title", Q0, h(i.title), 1)) : $("", !0)
      ])
    ], 8, Z0))
  ], 16, X0);
}
const tw = /* @__PURE__ */ et(Y0, [["render", ew]]), iw = {
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
}, nw = ["aria-hidden", "aria-label"], aw = ["fill", "width", "height"], rw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ow = { key: 0 };
function sw(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", rw, [
        i.title ? (m(), _("title", ow, h(i.title), 1)) : $("", !0)
      ])
    ], 8, aw))
  ], 16, nw);
}
const lw = /* @__PURE__ */ et(iw, [["render", sw]]), cw = {
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
function hw(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", fw, [
        i.title ? (m(), _("title", pw, h(i.title), 1)) : $("", !0)
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
function _w(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", mw, [
        i.title ? (m(), _("title", yw, h(i.title), 1)) : $("", !0)
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
    NcButton: Zi
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
    return { isLegacy34: ia };
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
function Cw(e, t, i, n, a, r) {
  const o = Be("IconArrowRight"), u = Be("NcButton"), d = Be("IconClose");
  return m(), _("div", {
    class: be(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = ye((...v) => r.confirm && r.confirm(...v), ["prevent"])),
      onKeydown: t[2] || (t[2] = nt(ye((...v) => r.cancel && r.cancel(...v), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ye(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (v) => r.valueModel = v),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
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
        variant: i.primary ? "primary" : "tertiary",
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
}, Aw = ["role"], xw = ["aria-label", "disabled", "title", "type"], Ow = { class: "action-button__longtext-wrapper" }, Nw = {
  key: 0,
  class: "action-button__name"
}, Lw = ["textContent"], Rw = {
  key: 2,
  class: "action-button__text"
}, Iw = ["textContent"], Pw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function $w(e, t, i, n, a, r) {
  const o = Be("NcIconSvgWrapper");
  return m(), _("li", {
    class: be(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Yt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: i.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...u) => r.handleClick && r.handleClick(...u))
    }), [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          class: be([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Ow, [
        e.name ? (m(), _("strong", Nw, h(e.name), 1)) : $("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: h(e.text)
        }, null, 8, Lw)) : (m(), _("span", Rw, h(e.text), 1)),
        i.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: h(i.description)
        }, null, 8, Iw)) : $("", !0)
      ]),
      i.isMenu ? (m(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (m(), je(o, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", Pw)) : $("", !0),
      $("", !0)
    ], 16, xw)
  ], 10, Aw);
}
const qv = /* @__PURE__ */ et(Ew, [["render", $w], ["__scopeId", "data-v-6c2daf4e"]]);
function Fw(e, t = {}) {
  const i = j0();
  We(e, () => {
    mn(t.disabled) || (mn(e) ? i.pause() : i.unpause());
  }), Fo(() => {
    i.unpause();
  });
}
const Dw = ["top", "right", "bottom", "left"], Sp = ["start", "end"], Cp = /* @__PURE__ */ Dw.reduce((e, t) => e.concat(t, t + "-" + Sp[0], t + "-" + Sp[1]), []), xo = Math.min, Cu = Math.max, Mw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wv(e, t, i) {
  return Cu(e, xo(t, i));
}
function Ua(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function Pi(e) {
  return e.split("-")[1];
}
function Yv(e) {
  return e === "x" ? "y" : "x";
}
function sd(e) {
  return e === "y" ? "height" : "width";
}
function bn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ld(e) {
  return Yv(bn(e));
}
function Xv(e, t, i) {
  i === void 0 && (i = !1);
  const n = Pi(e), a = ld(e), r = sd(a);
  let o = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
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
function Bw(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Tp : kp : t ? kp : Tp;
    case "left":
    case "right":
      return t ? Uw : jw;
    default:
      return [];
  }
}
function Hw(e, t, i, n) {
  const a = Pi(e);
  let r = Bw(kn(e), i === "start", n);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(el)))), r;
}
function tl(e) {
  const t = kn(e);
  return Mw[t] + e.slice(t.length);
}
function Vw(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
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
    y: i,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: i,
    left: t,
    right: t + n,
    bottom: i + a,
    x: t,
    y: i
  };
}
function Ep(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = bn(t), o = ld(t), u = sd(o), d = kn(t), v = r === "y", p = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, k = n[u] / 2 - a[u] / 2;
  let E;
  switch (d) {
    case "top":
      E = {
        x: p,
        y: n.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: p,
        y: n.y + n.height
      };
      break;
    case "right":
      E = {
        x: n.x + n.width,
        y
      };
      break;
    case "left":
      E = {
        x: n.x - a.width,
        y
      };
      break;
    default:
      E = {
        x: n.x,
        y: n.y
      };
  }
  const L = Pi(t);
  return L && (E[o] += k * (L === "end" ? 1 : -1) * (i && v ? -1 : 1)), E;
}
async function Kw(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: o,
    elements: u,
    strategy: d
  } = e, {
    boundary: v = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: y = "floating",
    altBoundary: k = !1,
    padding: E = 0
  } = Ua(t, e), L = Zv(E), N = u[k ? y === "floating" ? "reference" : "floating" : y], D = ro(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(N))) == null || i ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(u.floating)),
    boundary: v,
    rootBoundary: p,
    strategy: d
  })), M = y === "floating" ? {
    x: n,
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
const Gw = 50, qw = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = i, u = o.detectOverflow ? o : {
    ...o,
    detectOverflow: Kw
  }, d = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let v = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: p,
    y
  } = Ep(v, n, d), k = n, E = 0;
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
      initialPlacement: n,
      placement: k,
      strategy: a,
      middlewareData: L,
      rects: v,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = z ?? p, y = C ?? y, L[D] = {
      ...L[D],
      ...re
    }, de && E < Gw && (E++, typeof de == "object" && (de.placement && (k = de.placement), de.rects && (v = de.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: p,
      y
    } = Ep(v, k, d)), A = -1);
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
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: o,
      elements: u,
      middlewareData: d
    } = t, {
      element: v,
      padding: p = 0
    } = Ua(e, t) || {};
    if (v == null)
      return {};
    const y = Zv(p), k = {
      x: i,
      y: n
    }, E = ld(a), L = sd(E), A = await o.getDimensions(v), N = E === "y", D = N ? "top" : "left", M = N ? "bottom" : "right", z = N ? "clientHeight" : "clientWidth", C = r.reference[L] + r.reference[E] - k[E] - r.floating[L], re = k[E] - r.reference[E], de = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(v));
    let Z = de ? de[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(de))) && (Z = u.floating[z] || r.floating[L]);
    const pe = C / 2 - re / 2, X = Z / 2 - A[L] / 2 - 1, se = xo(y[D], X), _e = xo(y[M], X), ee = Z - A[L] - _e, J = Z / 2 - A[L] / 2 + pe, F = Wv(se, J, ee), U = !d.arrow && Pi(a) != null && J !== F && r.reference[L] / 2 - (J < se ? se : _e) - A[L] / 2 < 0, Y = U ? J < se ? J - se : J - ee : 0;
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
function Yw(e, t, i) {
  return (e ? [...i.filter((a) => Pi(a) === e), ...i.filter((a) => Pi(a) !== e)] : i.filter((a) => kn(a) === a)).filter((a) => e ? Pi(a) === e || (t ? el(a) !== a : !1) : !0);
}
const Xw = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: o,
        placement: u,
        platform: d,
        elements: v
      } = t, {
        crossAxis: p = !1,
        alignment: y,
        allowedPlacements: k = Cp,
        autoAlignment: E = !0,
        ...L
      } = Ua(e, t), A = y !== void 0 || k === Cp ? Yw(y || null, E, k) : k, N = ((i = o.autoPlacement) == null ? void 0 : i.index) || 0, D = A[N];
      if (D == null)
        return {};
      if (u !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await d.detectOverflow(t, L), z = Xv(D, r, await (d.isRTL == null ? void 0 : d.isRTL(v.floating))), C = [M[kn(D)], M[z[0]], M[z[1]]], re = [...((n = o.autoPlacement) == null ? void 0 : n.overflows) || [], {
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
        const _e = Pi(se.placement);
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
        Pi(se[0]) ? 2 : 3
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
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: u,
        platform: d,
        elements: v
      } = t, {
        mainAxis: p = !0,
        crossAxis: y = !0,
        fallbackPlacements: k,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: L = "none",
        flipAlignment: A = !0,
        ...N
      } = Ua(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const D = kn(a), M = bn(u), z = kn(u) === u, C = await (d.isRTL == null ? void 0 : d.isRTL(v.floating)), re = k || (z || !A ? [tl(u)] : zw(u)), de = L !== "none";
      !k && de && re.push(...Hw(u, A, L, C));
      const Z = [u, ...re], pe = await d.detectOverflow(t, N), X = [];
      let se = ((n = r.flip) == null ? void 0 : n.overflows) || [];
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
        if (U && (!(y === "alignment" ? M !== bn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ae) => bn(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
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
                  const me = bn(ae.placement);
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
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = kn(i), u = Pi(i), d = bn(i) === "y", v = Jw.has(o) ? -1 : 1, p = r && d ? -1 : 1, y = Ua(t, e);
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
    y: k * v
  } : {
    x: k * v,
    y: E * p
  };
}
const eS = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: u
      } = t, d = await Qw(t, e);
      return o === ((i = u.offset) == null ? void 0 : i.placement) && (n = u.arrow) != null && n.alignmentOffset ? {} : {
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
        x: i,
        y: n,
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
        ...v
      } = Ua(e, t), p = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, v), k = bn(a), E = Yv(k);
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
          x: D.x - i,
          y: D.y - n,
          enabled: {
            [E]: o,
            [k]: u
          }
        }
      };
    }
  };
}, iS = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: i,
        rects: n,
        platform: a,
        elements: r
      } = t, {
        apply: o = () => {
        },
        ...u
      } = Ua(e, t), d = await a.detectOverflow(t, u), v = kn(i), p = Pi(i), y = bn(i) === "y", {
        width: k,
        height: E
      } = n.floating;
      let L, A;
      v === "top" || v === "bottom" ? (L = v, A = p === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = v, L = p === "end" ? "top" : "bottom");
      const N = E - d.top - d.bottom, D = k - d.left - d.right, M = xo(E - d[L], N), z = xo(k - d[A], D), C = t.middlewareData.shift, re = !C;
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
function Si(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ji(e) {
  return Si(e).getComputedStyle(e);
}
const Ap = Math.min, oo = Math.max, il = Math.round;
function Jv(e) {
  const t = Ji(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = il(i) !== a || il(n) !== r;
  return o && (i = a, n = r), { width: i, height: n, fallback: o };
}
function Qn(e) {
  return eg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function Qv() {
  if (ws) return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ws) : navigator.userAgent;
}
function Qi(e) {
  return e instanceof Si(e).HTMLElement;
}
function Wn(e) {
  return e instanceof Si(e).Element;
}
function eg(e) {
  return e instanceof Si(e).Node;
}
function xp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Si(e).ShadowRoot || e instanceof ShadowRoot;
}
function Xl(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = Ji(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function nS(e) {
  return ["table", "td", "th"].includes(Qn(e));
}
function ku(e) {
  const t = /firefox/i.test(Qv()), i = Ji(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function tg() {
  return !/^((?!chrome|android).)*safari/i.test(Qv());
}
function cd(e) {
  return ["html", "body", "#document"].includes(Qn(e));
}
function ig(e) {
  return Wn(e) ? e : e.contextElement;
}
const ng = { x: 1, y: 1 };
function ur(e) {
  const t = ig(e);
  if (!Qi(t)) return ng;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Jv(t);
  let o = (r ? il(i.width) : i.width) / n, u = (r ? il(i.height) : i.height) / a;
  return o && Number.isFinite(o) || (o = 1), u && Number.isFinite(u) || (u = 1), { x: o, y: u };
}
function Oo(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), u = ig(e);
  let d = ng;
  t && (n ? Wn(n) && (d = ur(n)) : d = ur(e));
  const v = u ? Si(u) : window, p = !tg() && i;
  let y = (o.left + (p && ((a = v.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, k = (o.top + (p && ((r = v.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, E = o.width / d.x, L = o.height / d.y;
  if (u) {
    const A = Si(u), N = n && Wn(n) ? Si(n) : n;
    let D = A.frameElement;
    for (; D && n && N !== A; ) {
      const M = ur(D), z = D.getBoundingClientRect(), C = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(C.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(C.paddingTop)) * M.y, y *= M.x, k *= M.y, E *= M.x, L *= M.y, y += z.x, k += z.y, D = Si(D).frameElement;
    }
  }
  return { width: E, height: L, top: k, right: y + E, bottom: k + L, left: y, x: y, y: k };
}
function Yn(e) {
  return ((eg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zl(e) {
  return Wn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ag(e) {
  return Oo(Yn(e)).left + Zl(e).scrollLeft;
}
function No(e) {
  if (Qn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || xp(e) && e.host || Yn(e);
  return xp(t) ? t.host : t;
}
function rg(e) {
  const t = No(e);
  return cd(t) ? t.ownerDocument.body : Qi(t) && Xl(t) ? t : rg(t);
}
function nl(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = rg(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Si(n);
  return a ? t.concat(r, r.visualViewport || [], Xl(n) ? n : []) : t.concat(n, nl(n));
}
function Op(e, t, i) {
  return t === "viewport" ? ro((function(n, a) {
    const r = Si(n), o = Yn(n), u = r.visualViewport;
    let d = o.clientWidth, v = o.clientHeight, p = 0, y = 0;
    if (u) {
      d = u.width, v = u.height;
      const k = tg();
      (k || !k && a === "fixed") && (p = u.offsetLeft, y = u.offsetTop);
    }
    return { width: d, height: v, x: p, y };
  })(e, i)) : Wn(t) ? ro((function(n, a) {
    const r = Oo(n, !0, a === "fixed"), o = r.top + n.clientTop, u = r.left + n.clientLeft, d = Qi(n) ? ur(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: u * d.x, y: o * d.y };
  })(t, i)) : ro((function(n) {
    const a = Yn(n), r = Zl(n), o = n.ownerDocument.body, u = oo(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), d = oo(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let v = -r.scrollLeft + ag(n);
    const p = -r.scrollTop;
    return Ji(o).direction === "rtl" && (v += oo(a.clientWidth, o.clientWidth) - u), { width: u, height: d, x: v, y: p };
  })(Yn(e)));
}
function Np(e) {
  return Qi(e) && Ji(e).position !== "fixed" ? e.offsetParent : null;
}
function Lp(e) {
  const t = Si(e);
  let i = Np(e);
  for (; i && nS(i) && Ji(i).position === "static"; ) i = Np(i);
  return i && (Qn(i) === "html" || Qn(i) === "body" && Ji(i).position === "static" && !ku(i)) ? t : i || (function(n) {
    let a = No(n);
    for (; Qi(a) && !cd(a); ) {
      if (ku(a)) return a;
      a = No(a);
    }
    return null;
  })(e) || t;
}
function aS(e, t, i) {
  const n = Qi(t), a = Yn(t), r = Oo(e, !0, i === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((Qn(t) !== "body" || Xl(a)) && (o = Zl(t)), Qi(t)) {
    const d = Oo(t, !0);
    u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
  } else a && (u.x = ag(a));
  return { x: r.left + o.scrollLeft - u.x, y: r.top + o.scrollTop - u.y, width: r.width, height: r.height };
}
const rS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(v, p) {
    const y = p.get(v);
    if (y) return y;
    let k = nl(v).filter(((N) => Wn(N) && Qn(N) !== "body")), E = null;
    const L = Ji(v).position === "fixed";
    let A = L ? No(v) : v;
    for (; Wn(A) && !cd(A); ) {
      const N = Ji(A), D = ku(A);
      (L ? D || E : D || N.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = N : k = k.filter(((M) => M !== A)), A = No(A);
    }
    return p.set(v, k), k;
  })(t, this._c) : [].concat(i), o = [...r, n], u = o[0], d = o.reduce(((v, p) => {
    const y = Op(t, p, a);
    return v.top = oo(y.top, v.top), v.right = Ap(y.right, v.right), v.bottom = Ap(y.bottom, v.bottom), v.left = oo(y.left, v.left), v;
  }), Op(t, u, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = Qi(i), r = Yn(i);
  if (i === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Qn(i) !== "body" || Xl(r)) && (o = Zl(i)), Qi(i))) {
    const v = Oo(i);
    u = ur(i), d.x = v.x + i.clientLeft, d.y = v.y + i.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - o.scrollLeft * u.x + d.x, y: t.y * u.y - o.scrollTop * u.y + d.y };
}, isElement: Wn, getDimensions: function(e) {
  return Qi(e) ? Jv(e) : e.getBoundingClientRect();
}, getOffsetParent: Lp, getDocumentElement: Yn, getScale: ur, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || Lp, r = this.getDimensions;
  return { reference: aS(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ji(e).direction === "rtl" }, oS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: rS, ...i }, r = { ...a.platform, _c: n };
  return qw(e, t, { ...a, platform: r });
}, Xn = {
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
  let i = Xn.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = Xn.themes[i.$extend] || {} : (i = null, n = Xn[t]) : i = null;
  while (i);
  return n;
}
function sS(e) {
  const t = [e];
  let i = Xn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = Xn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Rp(e) {
  const t = [e];
  let i = Xn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = Xn.themes[i.$extend] || {}) : i = null;
  while (i);
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
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Wc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Ri = [];
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
    show({ event: e = null, skipDelay: t = !1, force: i = !1 } = {}) {
      var n, a;
      (n = this.parentPopper) != null && n.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (i || !this.disabled) && (((a = this.parentPopper) == null ? void 0 : a.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var i;
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
        ((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
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
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: u } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? o = Math.abs(u) > a.reference.width / 2 : o = Math.abs(u) > a.reference.height / 2, {
            data: {
              overflow: o
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: o }) => {
            var u;
            if ((u = o.autoSize) != null && u.skip)
              return {};
            let d, v;
            return r.startsWith("top") || r.startsWith("bottom") ? d = a.reference.width : v = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = d != null ? `${d}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = v != null ? `${v}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(iS({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await oS(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: i.x,
        y: i.y,
        placement: i.placement,
        strategy: i.strategy,
        arrow: {
          ...i.middlewareData.arrow,
          ...i.middlewareData.arrowOverflow
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
        ...nl(this.$_referenceNode),
        ...nl(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), i = this.$_popperNode.querySelector(".v-popper__wrapper"), n = i.parentNode.getBoundingClientRect(), a = t.x + t.width / 2 - (n.left + i.offsetLeft), r = t.y + t.height / 2 - (n.top + i.offsetTop);
        this.result.transformOrigin = `${a}px ${r}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let i = 0; i < Ri.length; i++)
          t = Ri[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Ri.push(this), document.body.classList.add("v-popper--some-open");
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
      this.skipTransition = e, $p(Ri, this), Ri.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of Rp(this.theme)) {
        const n = Dp(i);
        $p(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
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
      const e = (i) => {
        this.isShown && !this.$_hideInProgress || (i.usedByTooltip = !0, !this.$_preventShow && this.show({ event: i }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ip, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ip, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Pp, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Pp, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, Lo ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, n, a) {
      let r = i;
      n != null && (r = typeof n == "function" ? n(r) : n), r.forEach((o) => {
        const u = t[o];
        u && this.$_registerEventListeners(e, u, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: n, eventType: a, handler: r } = i;
        !e || e === a ? n.forEach((o) => o.removeEventListener(a, r)) : t.push(i);
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
      for (const i of this.$_targetNodes) {
        const n = i.getAttribute(e);
        n && (i.removeAttribute(e), i.setAttribute(t, n));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const i in e) {
          const n = e[i];
          n == null ? t.removeAttribute(i) : t.setAttribute(i, n);
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
        const t = this.$_popperNode.getBoundingClientRect(), i = so - Hn, n = lo - Vn, a = t.left + t.width / 2 - Hn + (t.top + t.height / 2) - Vn + t.width + t.height, r = Hn + i * a, o = Vn + n * a;
        return Ss(Hn, Vn, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        Ss(Hn, Vn, r, o, t.left, t.top, t.right, t.top) || // Top edge
        Ss(Hn, Vn, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        Ss(Hn, Vn, r, o, t.left, t.bottom, t.right, t.bottom);
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
  for (let i = 0; i < Ri.length; i++) {
    const n = Ri[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function zp(e, t) {
  cS(e, t);
}
function cS(e, t) {
  const i = {};
  for (let n = Ri.length - 1; n >= 0; n--) {
    const a = Ri[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Up(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let u = a.parentPopper;
            for (; u; )
              i[u.randomId] = !0, u = u.parentPopper;
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
function Up(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || uS(e, i) && !t;
}
function uS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function dS() {
  for (let e = 0; e < Ri.length; e++)
    Ri[e].$_computePosition();
}
let Hn = 0, Vn = 0, so = 0, lo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Hn = so, Vn = lo, so = e.clientX, lo = e.clientY;
}, Lo ? {
  passive: !0
} : void 0);
function Ss(e, t, i, n, a, r, o, u) {
  const d = ((o - a) * (t - r) - (u - r) * (e - a)) / ((u - r) * (i - e) - (o - a) * (n - t)), v = ((i - e) * (t - r) - (n - t) * (e - a)) / ((u - r) * (i - e) - (o - a) * (n - t));
  return d >= 0 && d <= 1 && v >= 0 && v <= 1;
}
const fS = {
  extends: sg()
}, ud = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function pS(e, t, i, n, a, r) {
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
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var a = e.indexOf("Edge/");
  return a > 0 ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10) : -1;
}
let Os;
function Au() {
  Au.init || (Au.init = !0, Os = vS() !== -1);
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
    Au(), ei(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Os && this.$el.appendChild(e), e.data = "about:blank", Os || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Os && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
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
const mS = /* @__PURE__ */ gS((e, t, i, n, a, r) => (m(), je("div", bS)));
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
function TS(e, t, i, n, a, r) {
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
    style: hi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = nt((u) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (u) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: hi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", wS, [
        e.mounted ? (m(), _(ie, { key: 0 }, [
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
        style: hi(e.result ? {
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
let xu = function() {
};
typeof window < "u" && (xu = window.Element);
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
      type: [String, Object, xu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, xu],
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
function AS(e, t, i, n, a, r) {
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
      isShown: v,
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
        shown: v,
        show: E,
        hide: L
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": d,
        theme: e.finalTheme,
        shown: v,
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
            shown: v,
            hide: L
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const dd = /* @__PURE__ */ ud(ES, [["render", AS]]), xS = {
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
const jp = Xn, OS = xS, NS = /* @__PURE__ */ $t({
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
    Dropdown: OS,
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
      for (const i of t)
        i.removeAttribute("aria-describedby");
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
function PS(e, t, i, n, a, r) {
  const o = Be("NcPopoverTriggerProvider"), u = Be("Dropdown");
  return m(), je(u, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (d) => a.internalShown = d),
      t[1] || (t[1] = (d) => a.internalShown = d)
    ],
    autoHide: !i.noCloseOnClickOutside && i.closeOnClickOutside,
    boundary: i.boundary || void 0,
    container: i.container,
    delay: i.delay,
    distance: 4,
    handleResize: "",
    noAutoFocus: !0,
    placement: r.internalPlacement,
    popperClass: [e.$style.ncPopover, i.popoverBaseClass],
    popperTriggers: r.popperTriggers,
    popperHideTriggers: r.popperHideTriggers,
    popperShowTriggers: r.popperShowTriggers,
    theme: n.theme,
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
        popupRole: i.popupRole
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
function jS(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", zS, [
        i.title ? (m(), _("title", US, h(i.title), 1)) : $("", !0)
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
      const i = t;
      if (i.type === It)
        return !1;
      if (i.type === ie && !fd(i.children))
        return !1;
      if (i.type === Do && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const HS = ".focusable", VS = {
  name: "NcActions",
  components: {
    NcButton: Zi,
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
        const t = this.getFocusableMenuItemElements(), i = [...t].indexOf(document.activeElement);
        if (i === -1)
          return;
        const n = e.shiftKey ? i - 1 : i + 1;
        (n < 0 || n === t.length) && this.closeMenu(!0), this.focusIndex = n, this.focusAction();
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
        const t = [...this.getFocusableMenuItemElements()].findIndex((i) => i.getAttribute("aria-checked") === "true" && i.getAttribute("role") === "menuitemradio");
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
        A.type === ie && t(A.children, L);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((E) => !n.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], u = ["NcActionLink", "NcActionRouter"], d = a.some((E) => o.includes(this.getActionName(E))), v = a.some((E) => r.includes(this.getActionName(E))), p = a.some((E) => u.includes(this.getActionName(E)));
    d ? this.actionsMenuSemanticType = "dialog" : v ? this.actionsMenuSemanticType = "menu" : p ? this.actionsMenuSemanticType = "navigation" : e.filter((L) => this.getActionName(L).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const L = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(L) ? ii("img", { class: "action-item__menutoggle__icon", src: L, alt: "" }) : ii("span", { class: ["icon", L] })), N = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? N : "";
      let M = E?.props?.title;
      this.forceName || M || (M = N);
      const z = { ...E?.props ?? {} }, C = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, ii(
        Zi,
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
      const L = fd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ii("span", { class: ["icon", this.defaultIcon] }) : ii(BS, { size: 20 }), A = `${this.randomId}-trigger`;
      return ii(
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
          trigger: () => ii(Zi, {
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
          default: () => ii("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            ii("ul", {
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
    return e.length === 1 && i.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? ii(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...n.map(y),
        // render the rest within the popover menu
        a.length > 0 ? ii(
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
    ) : ii(
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
    const t = e, i = B(() => {
      const n = ["#777", "#CCC"];
      return t.appearance === "light" ? n : t.appearance === "dark" ? n.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (n, a) => (m(), _("span", {
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
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, qS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", YS, h(e.name), 1)) : $("", !0)
        ], 8, WS)
      ], 8, GS))
    ], 8, KS));
  }
}), fg = /* @__PURE__ */ et(XS, [["__scopeId", "data-v-cf399190"]]), Ou = /* @__PURE__ */ $t({
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
function iC(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", eC, [
        i.title ? (m(), _("title", tC, h(i.title), 1)) : $("", !0)
      ])
    ], 8, QS))
  ], 16, JS);
}
const nC = /* @__PURE__ */ et(ZS, [["render", iC]]), aC = {
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
function cC(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", sC, [
        i.title ? (m(), _("title", lC, h(i.title), 1)) : $("", !0)
      ])
    ], 8, oC))
  ], 16, rC);
}
const uC = /* @__PURE__ */ et(aC, [["render", cC]]);
ta(E1);
const dC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Zi,
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
    return { isLegacy34: ia };
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
function fC(e, t, i, n, a, r) {
  const o = Be("ChevronUp"), u = Be("ChevronDown"), d = Be("NcButton");
  return m(), je(d, {
    class: be(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Pe(() => [
      i.open ? (m(), je(o, {
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
    NcVNodes: Ou,
    Pencil: nC,
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
      isLegacy34: ia
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
    onClick(e, t, i) {
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && _n("toggle-navigation", { open: !1 }));
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
      const i = t.querySelector("button");
      this.focused && i && (e.preventDefault(), i.focus(), this.focused = !1);
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
function SC(e, t, i, n, a, r) {
  const o = Be("NcLoadingIcon"), u = Be("NcInputConfirmCancel"), d = Be("Pencil"), v = Be("NcActionButton"), p = Be("Undo"), y = Be("NcActions"), k = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: i.id,
    class: be([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Yu(r.isRouterLink ? "router-link" : "NcVNodes"), Ls(Co({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: Pe(({ href: E, navigate: L, isActive: A }) => [
        l("div", {
          ref: "entry",
          class: be(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && A || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...N) => r.requestHighlight && r.requestHighlight(...N)),
          onFocusin: t[5] || (t[5] = (...N) => r.requestHighlight && r.requestHighlight(...N))
        }, [
          i.undo ? $("", !0) : (m(), _("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && A ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || E || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...N) => r.handleBlur && r.handleBlur(...N)),
            onClick: (N) => r.onClick(N, L, E),
            onFocus: t[2] || (t[2] = (...N) => r.handleFocus && r.handleFocus(...N)),
            onKeydown: t[3] || (t[3] = nt(ye((...N) => r.handleTab && r.handleTab(...N), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: be(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (m(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: be(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, h(i.name), 3),
            a.editingActive ? (m(), _("div", bC, [
              Ae(u, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (N) => a.editingValue = N),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && A || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : $("", !0)
          ], 40, gC)),
          i.undo ? (m(), _("div", mC, [
            l("div", yC, h(i.name), 1)
          ])) : $("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: be(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", _C, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : $("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (m(), je(y, {
              key: 1,
              ref: "actions",
              class: "app-navigation-entry__actions",
              container: "#app-navigation-vue",
              boundariesElement: a.actionsBoundariesElement,
              inline: i.inlineActions,
              placement: i.menuPlacement,
              open: i.menuOpen,
              forceMenu: i.forceMenu,
              defaultIcon: i.menuIcon,
              variant: "tertiary",
              "onUpdate:open": r.onMenuToggle
            }, {
              icon: Pe(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Pe(() => [
                i.editable && !a.editingActive ? (m(), je(v, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Pe(() => [
                    Ae(d, { size: 20 })
                  ]),
                  default: Pe(() => [
                    ge(" " + h(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                i.undo ? (m(), je(v, {
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
          i.allowCollapse && e.$slots.default ? (m(), je(k, {
            key: 3,
            active: i.to && A || i.active,
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
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = hp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = hp(e, a, Object.assign({ capture: i }, r));
    }
    Zc.set(e, n);
  },
  unmounted(e) {
    const t = Zc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Zc.delete(e);
  }
}, kC = {
  mounted(e) {
    e.focus();
  }
}, TC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", EC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Nu = "numeric", Lu = "ascii", Ru = "alpha", co = "asciinumeric", Jr = "alphanumeric", Iu = "domain", pg = "emoji", AC = "scheme", xC = "slashscheme", Jc = "whitespace";
function OC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ra(e, t, i) {
  t[Nu] && (t[co] = !0, t[Jr] = !0), t[Lu] && (t[co] = !0, t[Ru] = !0), t[co] && (t[Jr] = !0), t[Ru] && (t[Jr] = !0), t[Jr] && (t[Iu] = !0), t[pg] && (t[Iu] = !0);
  for (const n in t) {
    const a = OC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function NC(e, t) {
  const i = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (i[n] = !0);
  return i;
}
function fi(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
fi.groups = {};
fi.prototype = {
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
    const t = this, i = t.j[e];
    if (i)
      return i;
    for (let n = 0; n < t.jr.length; n++) {
      const a = t.jr[n][0], r = t.jr[n][1];
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
  ta(e, t, i, n) {
    for (let a = 0; a < e.length; a++)
      this.tt(e[a], t, i, n);
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
  tr(e, t, i, n) {
    n = n || fi.groups;
    let a;
    return t && t.j ? a = t : (a = new fi(t), i && n && Ra(t, i, n)), this.jr.push([e, a]), a;
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
  ts(e, t, i, n) {
    let a = this;
    const r = e.length;
    if (!r)
      return a;
    for (let o = 0; o < r - 1; o++)
      a = a.tt(e[o]);
    return a.tt(e[r - 1], t, i, n);
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
  tt(e, t, i, n) {
    n = n || fi.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, u = a.go(e);
    if (u ? (o = new fi(), Object.assign(o.j, u.j), o.jr.push.apply(o.jr, u.jr), o.jd = u.jd, o.t = u.t) : o = new fi(), r) {
      if (n)
        if (o.t && typeof o.t == "string") {
          const d = Object.assign(NC(o.t, n), i);
          Ra(r, d, n);
        } else i && Ra(r, i, n);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, i, n, a) => e.ta(t, i, n, a), bt = (e, t, i, n, a) => e.tr(t, i, n, a), Hp = (e, t, i, n, a) => e.ts(t, i, n, a), ne = (e, t, i, n, a) => e.tt(t, i, n, a), dn = "WORD", Pu = "UWORD", hg = "ASCIINUMERICAL", vg = "ALPHANUMERICAL", Ro = "LOCALHOST", $u = "TLD", Fu = "UTLD", Ns = "SCHEME", ir = "SLASH_SCHEME", hd = "NUM", Du = "WS", vd = "NL", uo = "OPENBRACE", fo = "CLOSEBRACE", al = "OPENBRACKET", rl = "CLOSEBRACKET", ol = "OPENPAREN", sl = "CLOSEPAREN", ll = "OPENANGLEBRACKET", cl = "CLOSEANGLEBRACKET", ul = "FULLWIDTHLEFTPAREN", dl = "FULLWIDTHRIGHTPAREN", fl = "LEFTCORNERBRACKET", pl = "RIGHTCORNERBRACKET", hl = "LEFTWHITECORNERBRACKET", vl = "RIGHTWHITECORNERBRACKET", gl = "FULLWIDTHLESSTHAN", bl = "FULLWIDTHGREATERTHAN", ml = "AMPERSAND", yl = "APOSTROPHE", _l = "ASTERISK", Gn = "AT", wl = "BACKSLASH", Sl = "BACKTICK", Cl = "CARET", Ia = "COLON", gd = "COMMA", kl = "DOLLAR", qi = "DOT", Tl = "EQUALS", bd = "EXCLAMATION", yi = "HYPHEN", po = "PERCENT", El = "PIPE", Al = "PLUS", xl = "POUND", ho = "QUERY", md = "QUOTE", gg = "FULLWIDTHMIDDLEDOT", yd = "SEMI", Wi = "SLASH", vo = "TILDE", Ol = "UNDERSCORE", bg = "EMOJI", Nl = "SYM";
var mg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: vg,
  AMPERSAND: ml,
  APOSTROPHE: yl,
  ASCIINUMERICAL: hg,
  ASTERISK: _l,
  AT: Gn,
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
  DOT: qi,
  EMOJI: bg,
  EQUALS: Tl,
  EXCLAMATION: bd,
  FULLWIDTHGREATERTHAN: bl,
  FULLWIDTHLEFTPAREN: ul,
  FULLWIDTHLESSTHAN: gl,
  FULLWIDTHMIDDLEDOT: gg,
  FULLWIDTHRIGHTPAREN: dl,
  HYPHEN: yi,
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
  POUND: xl,
  QUERY: ho,
  QUOTE: md,
  RIGHTCORNERBRACKET: pl,
  RIGHTWHITECORNERBRACKET: vl,
  SCHEME: Ns,
  SEMI: yd,
  SLASH: Wi,
  SLASH_SCHEME: ir,
  SYM: Nl,
  TILDE: vo,
  TLD: $u,
  UNDERSCORE: Ol,
  UTLD: Fu,
  UWORD: Pu,
  WORD: dn,
  WS: Du
});
const cn = /[a-z]/, Gr = new RegExp("\\p{L}", "u"), Qc = new RegExp("\\p{Emoji}", "u"), un = /\d/, eu = /\s/, Vp = "\r", tu = `
`, LC = "️", RC = "‍", iu = "￼";
let Cs = null, ks = null;
function IC(e = []) {
  const t = {};
  fi.groups = t;
  const i = new fi();
  Cs == null && (Cs = Kp(TC)), ks == null && (ks = Kp(EC)), ne(i, "'", yl), ne(i, "{", uo), ne(i, "}", fo), ne(i, "[", al), ne(i, "]", rl), ne(i, "(", ol), ne(i, ")", sl), ne(i, "<", ll), ne(i, ">", cl), ne(i, "（", ul), ne(i, "）", dl), ne(i, "「", fl), ne(i, "」", pl), ne(i, "『", hl), ne(i, "』", vl), ne(i, "＜", gl), ne(i, "＞", bl), ne(i, "&", ml), ne(i, "*", _l), ne(i, "@", Gn), ne(i, "`", Sl), ne(i, "^", Cl), ne(i, ":", Ia), ne(i, ",", gd), ne(i, "$", kl), ne(i, ".", qi), ne(i, "=", Tl), ne(i, "!", bd), ne(i, "-", yi), ne(i, "%", po), ne(i, "|", El), ne(i, "+", Al), ne(i, "#", xl), ne(i, "?", ho), ne(i, '"', md), ne(i, "/", Wi), ne(i, ";", yd), ne(i, "~", vo), ne(i, "_", Ol), ne(i, "\\", wl), ne(i, "・", gg);
  const n = bt(i, un, hd, {
    [Nu]: !0
  });
  bt(n, un, n);
  const a = bt(n, cn, hg, {
    [co]: !0
  }), r = bt(n, Gr, vg, {
    [Jr]: !0
  }), o = bt(i, cn, dn, {
    [Lu]: !0
  });
  bt(o, un, a), bt(o, cn, o), bt(a, un, a), bt(a, cn, a);
  const u = bt(i, Gr, Pu, {
    [Ru]: !0
  });
  bt(u, cn), bt(u, un, r), bt(u, Gr, u), bt(r, un, r), bt(r, cn), bt(r, Gr, r);
  const d = ne(i, tu, vd, {
    [Jc]: !0
  }), v = ne(i, Vp, Du, {
    [Jc]: !0
  }), p = bt(i, eu, Du, {
    [Jc]: !0
  });
  ne(i, iu, p), ne(v, tu, d), ne(v, iu, p), bt(v, eu, p), ne(p, Vp), ne(p, tu), bt(p, eu, p), ne(p, iu, p);
  const y = bt(i, Qc, bg, {
    [pg]: !0
  });
  ne(y, "#"), bt(y, Qc, y), ne(y, LC, y);
  const k = ne(y, RC);
  ne(k, "#"), bt(k, Qc, y);
  const E = [[cn, o], [un, a]], L = [[cn, null], [Gr, u], [un, r]];
  for (let A = 0; A < Cs.length; A++)
    jn(i, Cs[A], $u, dn, E);
  for (let A = 0; A < ks.length; A++)
    jn(i, ks[A], Fu, Pu, L);
  Ra($u, {
    tld: !0,
    ascii: !0
  }, t), Ra(Fu, {
    utld: !0,
    alpha: !0
  }, t), jn(i, "file", Ns, dn, E), jn(i, "mailto", Ns, dn, E), jn(i, "http", ir, dn, E), jn(i, "https", ir, dn, E), jn(i, "ftp", ir, dn, E), jn(i, "ftps", ir, dn, E), Ra(Ns, {
    scheme: !0,
    ascii: !0
  }, t), Ra(ir, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, N) => A[0] > N[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const N = e[A][0], M = e[A][1] ? {
      [AC]: !0
    } : {
      [xC]: !0
    };
    N.indexOf("-") >= 0 ? M[Iu] = !0 : cn.test(N) ? un.test(N) ? M[co] = !0 : M[Lu] = !0 : M[Nu] = !0, Hp(i, N, N, M);
  }
  return Hp(i, "localhost", Ro, {
    ascii: !0
  }), i.jd = new fi(Nl), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, mg)
  };
}
function yg(e, t) {
  const i = PC(t.replace(/[A-Z]/g, (u) => u.toLowerCase())), n = i.length, a = [];
  let r = 0, o = 0;
  for (; o < n; ) {
    let u = e, d = null, v = 0, p = null, y = -1, k = -1;
    for (; o < n && (d = u.go(i[o])); )
      u = d, u.accepts() ? (y = 0, k = 0, p = u) : y >= 0 && (y += i[o].length, k++), v += i[o].length, r += i[o].length, o++;
    r -= y, o -= k, v -= y, a.push({
      t: p.t,
      // token type/name
      v: t.slice(r - v, r),
      // string value
      s: r - v,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function PC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, o = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(o), n += o.length;
  }
  return t;
}
function jn(e, t, i, n, a) {
  let r;
  const o = t.length;
  for (let u = 0; u < o - 1; u++) {
    const d = t[u];
    e.j[d] ? r = e.j[d] : (r = new fi(n), r.jr = a.slice(), e.j[d] = r), e = r;
  }
  return r = new fi(i), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Kp(e) {
  const t = [], i = [];
  let n = 0, a = "0123456789";
  for (; n < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[n + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(i.join(""));
      for (let o = parseInt(e.substring(n, n + r), 10); o > 0; o--)
        i.pop();
      n += r;
    } else
      i.push(e[n]), n++;
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
  let i = Object.assign({}, Io);
  e && (i = Object.assign(i, e instanceof _d ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
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
  get(e, t, i) {
    const n = t != null;
    let a = this.o[e];
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : Io[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, i) {
    let n = this.o[e];
    return typeof n == "function" && t != null && (n = n(t, i.t, i)), n;
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
    const t = this.toString(), i = e.get("truncate", t, this), n = e.get("format", t, this);
    return i && n.length > i ? n.substring(0, i) + "…" : n;
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), o = {}, u = e.get("className", i, t), d = e.get("target", i, t), v = e.get("rel", i, t), p = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return o.href = n, u && (o.class = u), d && (o.target = d), v && (o.rel = v), p && Object.assign(o, p), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Ql(e, t) {
  class i extends _g {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
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
}), mi = (e) => new fi(e);
function DC({
  groups: e
}) {
  const t = e.domain.concat([ml, _l, Gn, wl, Sl, Cl, kl, Tl, yi, hd, po, El, Al, xl, Wi, Nl, vo, Ol]), i = [yl, Ia, gd, qi, bd, po, ho, md, yd, ll, cl, uo, fo, rl, al, ol, sl, ul, dl, fl, pl, hl, vl, gl, bl], n = [ml, yl, _l, wl, Sl, Cl, kl, Tl, yi, uo, fo, po, El, Al, xl, ho, Wi, Nl, vo, Ol], a = mi(), r = ne(a, vo);
  Ue(r, n, r), Ue(r, e.domain, r);
  const o = mi(), u = mi(), d = mi();
  Ue(a, e.domain, o), Ue(a, e.scheme, u), Ue(a, e.slashscheme, d), Ue(o, n, r), Ue(o, e.domain, o);
  const v = ne(o, Gn);
  ne(r, Gn, v), ne(u, Gn, v), ne(d, Gn, v);
  const p = ne(r, qi);
  Ue(p, n, r), Ue(p, e.domain, r);
  const y = mi();
  Ue(v, e.domain, y), Ue(y, e.domain, y);
  const k = ne(y, qi);
  Ue(k, e.domain, y);
  const E = mi($C);
  Ue(k, e.tld, E), Ue(k, e.utld, E), ne(v, Ro, E);
  const L = ne(y, yi);
  ne(L, yi, L), Ue(L, e.domain, y), Ue(E, e.domain, y), ne(E, qi, k), ne(E, yi, L);
  const A = ne(o, yi), N = ne(o, qi);
  ne(A, yi, A), Ue(A, e.domain, o), Ue(N, n, r), Ue(N, e.domain, o);
  const D = mi(Ts);
  Ue(N, e.tld, D), Ue(N, e.utld, D), Ue(D, e.domain, o), Ue(D, n, r), ne(D, qi, N), ne(D, yi, A), ne(D, Gn, v);
  const M = ne(D, Ia), z = mi(Ts);
  Ue(M, e.numeric, z);
  const C = mi(Ts), re = mi();
  Ue(C, t, C), Ue(C, i, re), Ue(re, t, C), Ue(re, i, re), ne(D, Wi, C), ne(z, Wi, C);
  const de = ne(u, Ia), Z = ne(d, Ia), pe = ne(Z, Wi), X = ne(pe, Wi);
  Ue(u, e.domain, o), ne(u, qi, N), ne(u, yi, A), Ue(d, e.domain, o), ne(d, qi, N), ne(d, yi, A), Ue(de, e.domain, C), ne(de, Wi, C), ne(de, ho, C), Ue(X, e.domain, C), Ue(X, t, C), ne(X, Wi, C);
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
    const [ee, J] = se[_e], F = ne(C, ee);
    ne(re, ee, F);
    const U = mi(Ts);
    Ue(F, t, U);
    const Y = mi();
    Ue(F, i, Y), ne(F, J, C), Ue(U, t, U), Ue(U, i, Y), Ue(Y, t, U), Ue(Y, i, Y), ne(U, J, C), ne(Y, J, C);
  }
  return ne(a, Ro, D), ne(a, vd, FC), {
    start: a,
    tokens: mg
  };
}
function MC(e, t, i) {
  let n = i.length, a = 0, r = [], o = [];
  for (; a < n; ) {
    let u = e, d = null, v = null, p = 0, y = null, k = -1;
    for (; a < n && !(d = u.go(i[a].t)); )
      o.push(i[a++]);
    for (; a < n && (v = d || u.go(i[a].t)); )
      d = null, u = v, u.accepts() ? (k = 0, y = u) : k >= 0 && k++, a++, p++;
    if (k < 0)
      a -= p, a < n && (o.push(i[a]), a++);
    else {
      o.length > 0 && (r.push(nu(qp, t, o)), o = []), a -= k, p -= k;
      const E = y.t, L = i.slice(a - p, a);
      r.push(nu(E, t, L));
    }
  }
  return o.length > 0 && r.push(nu(qp, t, o)), r;
}
function nu(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
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
  }, HC), i = wg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(Gs(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function jC(e) {
  return e.replace(/"/g, "&quot;");
}
function BC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${jC(n)}"`);
  }
  return t.join(" ");
}
function HC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${BC(t)}>${Gs(i)}</${e}>`;
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
    return (i, n) => Ie((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ge(h(e.name), 1)
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
    return (i, n) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (m(), _("div", WC, [
        Me(i.$slots, "icon", {}, void 0, !0)
      ])) : $("", !0),
      e.name !== "" || i.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(i.$slots, "name", {}, () => [
          ge(h(e.name), 1)
        ], !0)
      ], 8, YC)) : $("", !0),
      e.description !== "" || i.$slots.description ? (m(), _("p", XC, [
        Me(i.$slots, "description", {}, () => [
          ge(h(e.description), 1)
        ], !0)
      ])) : $("", !0),
      i.$slots.action ? (m(), _("div", ZC, [
        Me(i.$slots, "action", {}, void 0, !0)
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
}, tk = ["aria-hidden", "aria-label"], ik = ["fill", "width", "height"], nk = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, ak = { key: 0 };
function rk(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", nk, [
        i.title ? (m(), _("title", ak, h(i.title), 1)) : $("", !0)
      ])
    ], 8, ik))
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
function fk(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", uk, [
        i.title ? (m(), _("title", dk, h(i.title), 1)) : $("", !0)
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
function yk(e, t, i, n, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", bk, [
        i.title ? (m(), _("title", mk, h(i.title), 1)) : $("", !0)
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
    const t = Bh(e, "selected"), i = /* @__PURE__ */ Ee(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (m(), _("button", {
      class: be(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(ia),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: be([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (o) => i.value = !1)
      }, [
        l("span", {
          class: be([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(Ou, {
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
          Ae(Ou, {
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
      }, h(e.tab.name), 3)
    ], 10, wk));
  }
}), Ck = "_sidebarTabsButton_q3kBA", kk = "_sidebarTabsButton_legacy_KQ4d1", Tk = "_sidebarTabsButton_selected_Pjayf", Ek = "_sidebarTabsButton_animatedHighlight_uvp-0", Ak = "_sidebarTabsButton__name_rlQsL", xk = "_sidebarTabsButton__icon_QzZg4", Ok = "_sidebarTabsButton__iconLayer_ZkZan", Nk = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Lk = "_sidebarTabsButton__icon_pop_IA0By", Rk = "_sidebarTabsButton__legacyIcon_QhcNW", Ik = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Ck,
  sidebarTabsButton_legacy: kk,
  sidebarTabsButton_selected: Tk,
  sidebarTabsButton_animatedHighlight: Ek,
  sidebarTabsButton__name: Ak,
  sidebarTabsButton__icon: xk,
  sidebarTabsButton__iconLayer: Ok,
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
      isLegacy34: ia,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [H_()]) : t.order - i.order), this.updateActive();
    },
    /**
     * Unregister child tab from the tabs
     *
     * @param {string} id tab's id
     */
    unregisterTab(e) {
      const t = this.tabs.findIndex((i) => i.id === e);
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
      const t = e.getBoundingClientRect(), i = this.$refs.nav.getBoundingClientRect(), n = this.highlightVisible;
      this.highlightAnimated = n, this.highlightOverActive = e.getAttribute("aria-selected") === "true", this.highlightLeft = t.left - i.left, this.highlightTop = t.top - i.top, this.highlightWidth = t.width, this.highlightHeight = t.height, n || (this.highlightVisible = !0, this.$nextTick(() => requestAnimationFrame(() => {
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
function Mk(e, t, i, n, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return m(), _("div", Dk, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: be(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = nt(ye((...u) => r.focusPreviousTab && r.focusPreviousTab(...u), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = nt(ye((...u) => r.focusNextTab && r.focusNextTab(...u), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = nt(ye((...u) => r.focusActiveTabContent && r.focusActiveTabContent(...u), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = nt(ye((...u) => r.focusFirstTab && r.focusFirstTab(...u), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = nt(ye((...u) => r.focusLastTab && r.focusLastTab(...u), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = nt(ye((...u) => r.focusFirstTab && r.focusFirstTab(...u), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = nt(ye((...u) => r.focusLastTab && r.focusLastTab(...u), ["exact", "prevent", "stop"]), ["page-down"]))
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
        style: hi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : $("", !0),
      (m(!0), _(ie, null, ke(a.tabs, (u) => (m(), je(o, {
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
    NcButton: Zi,
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
    return _i("NcAppSidebar:header:ref", e), {
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
function Yk(e, t, i, n, a, r) {
  const o = Be("IconDockRight"), u = Be("NcButton"), d = Be("NcLoadingIcon"), v = Be("IconStar"), p = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), k = Be("IconArrowRight"), E = Be("NcActions"), L = Be("IconClose"), A = Be("NcAppSidebarTabs"), N = Be("NcEmptyContent"), D = pf("focus"), M = pf("click-outside");
  return m(), je(xy, {
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
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = nt((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (m(), je(Eh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(u, Yt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
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
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (m(), je(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", Bk, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (m(), _("div", {
                key: 0,
                class: be(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...z) => r.onFigureClick && r.onFigureClick(...z)),
                onKeydown: t[2] || (t[2] = nt((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : $("", !0),
              l("div", {
                class: be(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
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
                        i.starLoading ? (m(), je(d, { key: 0 })) : a.isStarred ? (m(), je(v, {
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
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: ye(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [sr, !i.nameEditable]
                    ]),
                    i.nameEditable ? Ie((m(), _("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ye((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Ie(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = nt(ye((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
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
                      forceMenu: i.forceMenu
                    }, {
                      default: Pe(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : $("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      ge(h(i.subname), 1)
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
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (m(), _("div", Wk, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : $("", !0)
        ], 2),
        Ie(Ae(A, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Pe(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [sr, !i.loading]
        ]),
        i.loading ? (m(), je(N, { key: 1 }, {
          icon: Pe(() => [
            Ae(d, { size: 64 })
          ]),
          _: 1
        })) : $("", !0)
      ], 40, jk), [
        [sr, i.open]
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
}, tT = { class: "action-link__name" }, iT = ["textContent"], nT = ["textContent"], aT = {
  key: 2,
  class: "action-link__text"
};
function rT(e, t, i, n, a, r) {
  return m(), _("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("a", {
      download: i.download,
      href: i.href,
      "aria-label": e.ariaLabel,
      target: i.target,
      title: i.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: be(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (m(), _("span", eT, [
        l("strong", tT, h(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: h(e.text)
        }, null, 8, iT)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: h(e.text)
      }, null, 8, nT)) : (m(), _("span", aT, h(e.text), 1)),
      $("", !0)
    ], 8, Qk)
  ], 8, Jk);
}
const au = /* @__PURE__ */ et(Zk, [["render", rT], ["__scopeId", "data-v-32f01b7a"]]);
ta(O1);
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
    _i(jv, u), _i(Bv, "#content-vue"), _i("appName", B(() => t.appName));
    const i = zo(), n = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(), r = B(() => a.value === "navigation" ? sT : oT);
    Ph(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function o() {
      _n("toggle-navigation", { open: !0 }), ei(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function u(d) {
      n.value = d, a.value || (a.value = "navigation");
    }
    return (d, v) => (m(), _("div", {
      id: "content-vue",
      class: be(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(ia) }]])
    }, [
      (m(), je(Eh, { to: "#skip-actions" }, [
        l("div", lT, [
          l("div", cT, h(g(Ct)("Keyboard navigation help")), 1),
          l("div", uT, [
            Ie(Ae(Zi, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ye(o, ["prevent"]),
              onFocusin: v[0] || (v[0] = (p) => a.value = "navigation"),
              onMouseover: v[1] || (v[1] = (p) => a.value = "navigation")
            }, {
              default: Pe(() => [
                ge(h(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [sr, n.value]
            ]),
            Ae(Zi, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: v[2] || (v[2] = (p) => a.value = "content"),
              onMouseover: v[3] || (v[3] = (p) => a.value = "content")
            }, {
              default: Pe(() => [
                ge(h(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(Ae(Wl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [sr, !g(i)]
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
    const t = e, i = /* @__PURE__ */ Ee(!1), n = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(!1), r = /* @__PURE__ */ Ee(!1), o = /* @__PURE__ */ Ee([]), u = /* @__PURE__ */ Ee(!1), d = /* @__PURE__ */ Ee(0);
    async function v() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await p();
    }
    async function p() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), k = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!k.ok) throw new Error("Shelf children request failed");
          const E = await k.json(), L = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...L), u.value = E?.hasMore === !0, d.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, n.value = !u.value;
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
          "aria-expanded": String(i.value),
          "aria-label": i.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: v
        }, h(i.value ? "−" : "+"), 9, hT)) : $("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", gT, [
            l("strong", null, [
              l("bdi", bT, h(e.node.label), 1)
            ]),
            l("span", null, h(g(ui)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", mT, [
            l("bdi", yT, h(e.node.path), 1)
          ])
        ], 8, vT),
        a.value ? (m(), _("small", _T, h(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", wT, h(g(b)("library", "Could not load folders.")), 1)) : $("", !0),
        i.value && o.value.length ? (m(), _("ul", ST, [
          (m(!0), _(ie, null, ke(o.value, (L) => (m(), je(E, {
            key: L.id,
            node: L,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : $("", !0),
        i.value && u.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: p
        }, h(g(b)("library", "Load more folders")), 9, CT)) : $("", !0)
      ]);
    };
  }
}, TT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, ET = { id: "library-sidebar-filters-heading" }, AT = ["aria-label"], xT = ["value"], OT = ["name", "value"], NT = ["value"], LT = ["value"], RT = {
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
}, QT = ["onClick"], eE = { class: "library-year-filter" }, tE = { for: "library-year-search" }, iE = ["placeholder", "aria-expanded"], nE = ["value"], aE = {
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
}, CE = ["href"], kE = { value: "" }, TE = ["value"], EE = { class: "library-folder-filter" }, AE = { for: "library-folder-search" }, xE = ["placeholder", "title", "aria-expanded"], OE = {
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
}, t2 = ["href"], i2 = ["href"], n2 = ["lang", "dir"], a2 = ["aria-label"], r2 = ["href", "aria-label", "title", "onClick"], o2 = ["title"], s2 = ["href"], l2 = {
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
}, x2 = { class: "library-metadata-review-fields" }, O2 = {
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
}, iA = { key: 0 }, nA = ["href"], aA = {
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
}, xA = { dir: "auto" }, OA = ["href", "onClick"], NA = {
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
}, ex = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, tx = { id: "library-home-attention-heading" }, ix = { class: "library-muted" }, nx = ["href"], ax = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, rx = { class: "library-home-header" }, ox = { class: "library-muted library-catalogue-eyebrow" }, sx = { id: "library-shelves-landing-heading" }, lx = { class: "library-muted" }, cx = ["aria-label"], ux = ["aria-label"], dx = ["href", "aria-label", "onClick"], fx = ["title"], px = { class: "library-empty-actions" }, hx = ["href"], vx = ["href"], gx = ["aria-label"], bx = { class: "library-shelf-tree" }, mx = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, yx = { class: "library-muted" }, _x = { class: "library-empty-actions" }, wx = ["href"], Sx = ["href"], Cx = ["aria-busy"], kx = { class: "library-catalogue-header" }, Tx = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Ex = ["aria-label"], Ax = { class: "library-mobile-filter-count" }, xx = ["aria-label"], Ox = ["value"], Nx = ["name", "value"], Lx = { class: "library-mobile-filter-group" }, Rx = { class: "library-quick-filter-search" }, Ix = ["placeholder"], Px = { value: "" }, $x = ["value"], Fx = { class: "library-publisher-filter" }, Dx = { for: "library-mobile-publisher-search" }, Mx = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], zx = ["value"], Ux = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, jx = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, Bx = ["id", "aria-selected"], Hx = ["onClick"], Vx = { class: "library-publication-filter" }, Kx = { for: "library-mobile-publication-search" }, Gx = ["placeholder", "aria-expanded"], qx = ["value"], Wx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, Yx = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, Xx = ["onClick"], Zx = { class: "library-year-filter" }, Jx = { for: "library-mobile-year-search" }, Qx = ["placeholder", "aria-expanded"], eO = ["value"], tO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, iO = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, nO = ["onClick"], aO = { class: "library-creator-filter" }, rO = { for: "library-mobile-creator-search" }, oO = ["placeholder", "title", "aria-expanded"], sO = ["value"], lO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, cO = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, uO = ["onClick"], dO = { value: "" }, fO = ["value"], pO = { class: "library-subject-filter" }, hO = { for: "library-mobile-subject-search" }, vO = ["placeholder", "title", "aria-expanded"], gO = ["value"], bO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, mO = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, yO = ["onClick"], _O = { class: "library-classification-filter" }, wO = { for: "library-mobile-classification-search" }, SO = ["placeholder", "title", "aria-expanded"], CO = ["value"], kO = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, TO = ["onClick"], EO = { class: "library-mobile-filter-group" }, AO = { value: "" }, xO = ["value"], OO = { class: "library-folder-filter" }, NO = { for: "library-mobile-folder-search" }, LO = ["placeholder", "title", "aria-expanded"], RO = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, IO = ["onClick"], PO = { class: "library-mobile-filter-group" }, $O = { value: "" }, FO = ["value"], DO = { value: "" }, MO = ["value"], zO = { value: "" }, UO = { value: "1" }, jO = { class: "library-mobile-filter-group" }, BO = { class: "library-tag-filter" }, HO = { for: "library-tag-search" }, VO = ["placeholder", "aria-expanded"], KO = ["value"], GO = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, qO = ["onClick"], WO = { value: "title" }, YO = { value: "recent" }, XO = { value: "publicationDate" }, ZO = { value: "publication" }, JO = { value: "lastOpened" }, QO = { value: "format" }, e3 = { value: "compact" }, t3 = { value: "gallery" }, i3 = { value: "list" }, n3 = { value: "shelf" }, a3 = { class: "library-mobile-filter-actions" }, r3 = ["href"], o3 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, s3 = ["aria-label"], l3 = ["aria-label"], c3 = ["name", "value"], u3 = { "data-library-control": "sort" }, d3 = { value: "title" }, f3 = { value: "recent" }, p3 = { value: "publicationDate" }, h3 = { value: "publication" }, v3 = { value: "lastOpened" }, g3 = { value: "format" }, b3 = ["aria-label"], m3 = ["aria-pressed"], y3 = ["aria-pressed"], _3 = ["aria-pressed"], w3 = ["aria-pressed"], S3 = {
  id: "library-collections",
  class: "library-saved-collections"
}, C3 = ["title"], k3 = ["action", "title"], T3 = ["value"], E3 = ["value"], A3 = ["placeholder", "disabled"], x3 = ["disabled", "title"], O3 = ["aria-label"], N3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, L3 = ["title"], R3 = { class: "library-workspace-panel-purpose" }, I3 = { class: "library-workspace-scope-badge" }, P3 = { "aria-live": "polite" }, $3 = ["action"], F3 = ["value"], D3 = ["placeholder"], M3 = ["title"], z3 = ["action"], U3 = ["value"], j3 = ["placeholder"], B3 = ["title"], H3 = ["action"], V3 = ["value"], K3 = ["name", "value"], G3 = ["title"], q3 = ["action"], W3 = ["value"], Y3 = ["name", "value"], X3 = { name: "bulkEditField" }, Z3 = { value: "publicationType" }, J3 = { value: "subtitle" }, Q3 = { value: "creators" }, eN = { value: "publication" }, tN = { value: "publicationDate" }, iN = { value: "language" }, nN = { value: "publisher" }, aN = { value: "subjects" }, rN = { value: "classifications" }, oN = ["placeholder"], sN = ["title"], lN = ["action"], cN = ["value"], uN = ["name", "value"], dN = ["title"], fN = {
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
}, yN = { class: "library-muted library-catalogue-eyebrow" }, _N = ["title"], wN = ["aria-label"], SN = { key: 0 }, CN = { key: 1 }, kN = { key: 2 }, TN = ["aria-label"], EN = { key: 0 }, AN = { key: 1 }, xN = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, ON = { class: "library-muted library-catalogue-eyebrow" }, NN = ["title"], LN = ["aria-label"], RN = ["href"], IN = {
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
}, ZN = ["title"], JN = { class: "library-empty-actions" }, QN = ["href"], eL = { class: "library-muted" }, tL = ["title"], iL = { class: "library-empty-actions" }, nL = ["href"], aL = ["title"], rL = ["aria-label"], oL = ["href", "aria-label", "onClick"], sL = ["title"], lL = {
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
}, xL = { key: 1 }, OL = { key: 2 }, NL = ["dir"], LL = { key: 3 }, RL = {
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
}, iR = {
  key: 1,
  class: "library-cover-context"
}, nR = {
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
}, xR = { id: "library-sidebar-overview-heading" }, OR = {
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
}, i4 = ["disabled"], n4 = {
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
    const t = e, i = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = Object.freeze([
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
        const O = [...new Set([...c.keys()].filter((we) => we === s || we.startsWith(`${s}[`)))], W = O.reduce((we, Re) => we + c.getAll(Re).length, 0);
        if (W > 1 || O.some((we) => we !== s)) {
          for (const we of O) c.delete(we);
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
    const v = /* @__PURE__ */ Lt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), p = /* @__PURE__ */ Lt((v.items || []).map((f) => ({ ...f }))), y = B(() => p), k = B(() => v.shelves || []), E = B(() => v.formats || []), L = B(() => v.publicationTypes?.length ? v.publicationTypes : i), A = B(() => v.publications || []), N = B(() => v.publicationIssueContext || null), D = B(() => v.scanStatuses || []), M = B(() => v.workflowStatuses || []), z = B(() => v.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), C = /* @__PURE__ */ Lt({
      q: v.activeFilters?.q || "",
      view: v.activeFilters?.view || "compact",
      type: v.activeFilters?.type || "",
      publisher: v.activeFilters?.publisher || "",
      publication: v.activeFilters?.publication || "",
      year: v.activeFilters?.year || "",
      language: v.activeFilters?.language || "",
      creator: v.activeFilters?.creator || "",
      format: v.activeFilters?.format || "",
      tag: v.activeFilters?.tag || "",
      shelf: v.activeFilters?.shelf || "",
      folder: v.activeFilters?.folder || "",
      status: v.activeFilters?.status || "",
      workflowStatus: v.activeFilters?.workflowStatus || "",
      subject: v.activeFilters?.subject || "",
      classification: v.activeFilters?.classification || "",
      scannerConflicts: v.activeFilters?.scannerConflicts || "",
      starred: v.activeFilters?.starred || "",
      needsMetadata: v.activeFilters?.needsMetadata || "",
      coverReview: v.activeFilters?.coverReview || "",
      noCreator: v.activeFilters?.noCreator || "",
      noPublication: v.activeFilters?.noPublication || "",
      noDate: v.activeFilters?.noDate || "",
      titleFromFilename: v.activeFilters?.titleFromFilename || "",
      noDescription: v.activeFilters?.noDescription || "",
      unsupportedContainer: v.activeFilters?.unsupportedContainer || "",
      weakMetadata: v.activeFilters?.weakMetadata || "",
      unreviewedImports: v.activeFilters?.unreviewedImports || "",
      sort: v.activeFilters?.sort || "title"
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
    const it = /* @__PURE__ */ Ee(C.folder), ut = /* @__PURE__ */ Ee(!1), at = /* @__PURE__ */ Ee(null), Ft = B(() => at.value || []);
    We(() => C.folder, (f) => {
      it.value = f || "";
    });
    let H = null, w = null, T = 0;
    We(it, (f) => {
      window.clearTimeout(H), w?.abort(), w = null, at.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++T;
      H = window.setTimeout(() => {
        Xg(c, s);
      }, 200);
    });
    const x = /* @__PURE__ */ Ee(C.subject), R = /* @__PURE__ */ Ee(!1), I = /* @__PURE__ */ Ee(null), j = B(() => I.value || []);
    We(() => C.subject, (f) => {
      x.value = f || "";
    });
    let G = null, K = null, Q = 0;
    We(x, (f) => {
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
    let Oe = null, $e = null, ze = 0;
    We(V, (f) => {
      window.clearTimeout(Oe), $e?.abort(), $e = null, oe.value = null;
      const c = String(f || "").trim();
      if (c.length < 3) return;
      const s = ++ze;
      Oe = window.setTimeout(() => {
        Wg(c, s);
      }, 200);
    });
    const Fe = /* @__PURE__ */ Ee(C.tag), He = /* @__PURE__ */ Ee(!1), rt = /* @__PURE__ */ Ee(null), vt = B(() => rt.value || []);
    We(() => C.tag, (f) => {
      Fe.value = f || "";
    });
    let Tt = null, Dt = null, Ei = 0;
    We(Fe, (f) => {
      window.clearTimeout(Tt), Dt?.abort(), Dt = null, rt.value = null;
      const c = String(f || "").trim();
      if (c.length < 2) return;
      const s = ++Ei;
      Tt = window.setTimeout(() => {
        Yg(c, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ Ee(C.year), dt = /* @__PURE__ */ Ee(!1), Di = /* @__PURE__ */ Ee(null), vi = B(() => Di.value || []);
    We(() => C.year, (f) => {
      tt.value = f || "";
    });
    let na = null, An = null, Mi = 0;
    We(tt, (f) => {
      window.clearTimeout(na), An?.abort(), An = null, Di.value = null;
      const c = String(f || "").trim();
      if (c.length < 2) return;
      const s = ++Mi;
      na = window.setTimeout(() => {
        Zg(c, s);
      }, 200);
    });
    const zi = Object.fromEntries(Object.keys(C).map((f) => [f, f === "sort" ? "title" : f === "view" ? "compact" : ""])), pr = window.location.pathname.indexOf(_4), en = pr >= 0 ? window.location.pathname.slice(0, pr) : "", xn = {
      catalogue: `${en}/apps/library/`,
      review: `${en}/apps/library/?scannerConflicts=1`,
      settings: `${en}/settings/user/library`
    };
    function On(f, c) {
      if (typeof f != "string" || f === "") return c;
      try {
        const s = en ? `${en}/` : "/";
        let O = f;
        for (let W = 0; W < 5; W += 1) {
          if (!O.startsWith("/") || O.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(O)) return c;
          const we = new URL(O, window.location.origin);
          if (we.origin !== window.location.origin || !we.pathname.startsWith(s)) return c;
          const Re = O.split(/[?#]/, 1)[0];
          for (const li of Re.split("/")) {
            let Mn = li;
            for (let Ya = 0; Ya < 5; Ya += 1) {
              const Vi = decodeURIComponent(Mn);
              if (/[\\/\u0000-\u001f\u007f]/.test(Vi) || Vi === "." || Vi === "..") return c;
              if (Vi === Mn) break;
              if (Mn = Vi, Ya === 4) return c;
            }
          }
          const Ze = decodeURI(O);
          if (Ze === O) return f;
          O = Ze;
        }
        return c;
      } catch {
        return c;
      }
    }
    const Nn = B(() => On(v.settingsUrl, xn.settings)), gt = B(() => On(v.catalogueRootUrl, xn.catalogue)), ja = B(() => On(v.homeUrl, `${xn.catalogue}?home=1`)), ai = B(() => On(v.shelvesUrl, `${xn.catalogue}?shelves=1`)), Ln = B(() => On(v.reviewUrl || v.scannerConflictReviewUrl, xn.review)), aa = B(() => Object.entries(a).some(([f, c]) => C[f] === c)), Ba = B(() => n.reduce((f, c) => f + Number(bc.value[c.countKey] || 0), 0)), ra = B(() => v.surface === "home"), Rn = B(() => v.surface === "shelves"), hr = B(() => !ra.value && !Rn.value && !aa.value && !C.starred && C.sort !== "lastOpened" && !C.shelf), Uo = B(() => [
      { key: "home", name: b("library", "Home"), href: ja.value, active: ra.value },
      { key: "all", name: b("library", "All publications"), href: gt.value, active: hr.value },
      { key: "starred", name: b("library", "Starred"), href: `${gt.value}?starred=1`, active: C.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${gt.value}?sort=lastOpened`, active: C.sort === "lastOpened" },
      { key: "shelves", name: b("library", "Shelves"), href: ai.value, active: Rn.value || !!C.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${gt.value}#library-collections`, active: !1 }
    ]), vr = B(() => oc.value.map((f) => ({
      key: `collection-${f.id}`,
      rawName: f.name,
      id: f.id,
      name: f.countPending ? f.name : `${f.name} (${ui("library", "%n item", "%n items", Number(f.count || 0))})`,
      href: pb(f.filters),
      active: hb(f.filters)
    }))), Mt = B(() => v.requestToken || "");
    function gi(f, c) {
      const s = String(f?.recordOpenUrl || "");
      if (!s || !Mt.value) return;
      const O = new URLSearchParams({ requesttoken: Mt.value });
      try {
        if (navigator.sendBeacon) {
          const W = new Blob([O.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, W);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: Mt.value },
        body: O,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const jo = B(() => v.catalogueEndpointUrl || "/apps/library/catalogue"), ec = B(() => v.shelfChildrenUrl || "/apps/library/shelves/children"), pt = B(() => v.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), In = B(() => v.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), tc = B(() => v.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Bo = B(() => v.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), gr = B(() => v.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Ho = B(() => v.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Vo = B(() => v.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), ic = B(() => v.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), nc = B(() => v.itemSidebarUrlTemplate || `${en}/apps/library/items/__ITEM_ID__/sidebar`), ac = B(() => v.batchTagUrl || "/apps/library/bulk/tags"), rc = B(() => v.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ui = B(() => v.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ko = B(() => v.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Ha = B(() => v.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ji = B(() => v.scannerConflictReviewUrl || "?scannerConflicts=1");
    v.importHealthSummary, v.importHealthSummary && Object.keys(v.importHealthSummary).length > 0;
    const br = B(() => v.discoveryPage === "publication"), Pn = B(() => v.discoveryPage === "year"), Va = B(() => v.discoveryPage === "creator"), mr = B(() => br.value || Pn.value || Va.value), yr = B(() => v.discoveryTitle || C.publication || C.year || C.creator || ""), Go = B(() => mr.value ? yr.value : b("library", "Library")), oa = B(() => Va.value ? b("library", "Creator") : Pn.value ? b("library", "Publication year") : b("library", "Publication / series")), Ka = B(() => Number(v.rootCount || 0)), Ga = B(() => Number(v.enabledRootCount || 0)), Bi = B(() => Ka.value === 0), tn = B(() => Ka.value > 0 && Ga.value === 0), ri = B(() => ce.value.length > 0), Ai = /* @__PURE__ */ Ee(!1), sa = /* @__PURE__ */ Ee(null), qo = /* @__PURE__ */ Ee(null), _r = {
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
      const c = f.get("batchMetadataField") || "field", s = f.get("batchMetadataApplied") || "0", O = f.get("batchMetadataUnchanged") || "0", W = f.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: c, unchanged: O, skipped: W });
    }), Xo = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Sr = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), oc = B(() => v.savedCollections || []), sc = B(() => v.savedCollectionSaveUrl || "/apps/library/collections"), Zo = B(() => v.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), la = ["compact", "gallery", "list", "shelf"], zt = B(() => la.includes(C.view) ? C.view : "compact"), te = B(() => ({
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
      const O = Yo[f]?.[s];
      return O ? b("library", O) : s;
    }
    function q(f, c) {
      const s = String(C[f] || "").trim(), O = P(f, s), W = b("library", c);
      return {
        key: f,
        label: W,
        value: s,
        displayValue: O,
        title: O ? `${W}: ${s}` : W
      };
    }
    const ce = B(() => Object.entries(_r).map(([f, c]) => q(f, c)).filter((f) => f.value !== "" && !(f.key === "sort" && f.value === "title") && !(f.key === "view" && f.value === "compact"))), ue = B(() => ce.value.filter((f) => !["sort", "view"].includes(f.key))), Ne = B(() => ce.value.length), Xe = Object.freeze([
      { key: "content", label: "Content", keys: ["q", "type", "publisher", "publication", "year", "language", "creator", "format", "subject", "classification", "tag"] },
      { key: "location", label: "Location", keys: ["shelf", "folder"] },
      { key: "review", label: "Review", keys: ["scannerConflicts", "needsMetadata", "coverReview", "noCreator", "noPublication", "noDate", "titleFromFilename", "noDescription", "unsupportedContainer", "weakMetadata", "unreviewedImports", "status"] },
      { key: "personal", label: "Personal / display", keys: ["starred", "workflowStatus"] }
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
    }), nn = B(() => ue.value[0] || null), At = B(() => de.value.trim() !== String(C.q || "").trim()), Sg = B(() => String(C.q || "").trim() !== "" || At.value);
    function oi(f) {
      return ({
        q: de,
        publisher: J,
        publication: re,
        creator: fe,
        subject: x,
        year: tt,
        folder: it,
        classification: V,
        tag: Fe
      }[f]?.value ?? "").trim() !== String(C[f] || "").trim();
    }
    function xi(f) {
      return oi(f) ? f === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function an(f) {
      return { "library-filter-apply--pending": oi(f) };
    }
    const Cg = B(() => Ne.value > 0 ? b("library", "Filters ({count})", { count: Ne.value }) : b("library", "Filters")), kg = B(() => Ne.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: Ne.value }) : b("library", "Open filters panel")), Tg = B(() => ui("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function Eg(f) {
      Ai.value = f.currentTarget?.open === !0, Ai.value && ei(() => {
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
    ]), wd = B(() => Object.entries(d(C)).filter(([f, c]) => !Ag.has(f) && String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), xg = B(() => Object.entries(C).filter(([f, c]) => !["q", "sort", "starred"].includes(f) && String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), Jo = B(() => Object.entries(d(C)).filter(([f, c]) => String(c || "").trim() !== "").map(([f, c]) => ({ key: f, value: c }))), Og = B(() => Jo.value.filter(({ key: f, value: c }) => f !== "q" && !(f === "sort" && c === "title"))), lc = /* @__PURE__ */ Lt({}), Qo = B(() => v.homeRows || { continueReading: [], recentlyAdded: [] }), Sd = B(() => v.homeShelves || []), Cd = B(() => v.shelfTree || []), cc = B(() => v.needsAttention || { count: 0, url: `${gt.value}?needsMetadata=1` }), Oi = /* @__PURE__ */ Ee([]), es = B(() => new Set(Oi.value));
    function kd(f, c) {
      const s = new Set(Oi.value);
      c ? s.add(Number(f)) : s.delete(Number(f)), Oi.value = [...s];
    }
    function Ng(f) {
      Oi.value = f.currentTarget.checked ? y.value.map((c) => Number(c.id)) : [];
    }
    function Lg() {
      const f = new Set(y.value.map((c) => Number(c.id)));
      Oi.value = Oi.value.filter((c) => f.has(c));
    }
    function Rg(f) {
      const c = f.target;
      if (c instanceof HTMLFormElement) {
        c.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of Oi.value) {
          const O = document.createElement("input");
          O.type = "hidden", O.name = "itemIds[]", O.value = String(s), O.dataset.librarySelectedId = "1", c.appendChild(O);
        }
      }
    }
    const Ce = /* @__PURE__ */ Ee(null), ca = /* @__PURE__ */ Ee(null), Xt = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), ua = /* @__PURE__ */ Ee("overview"), Ni = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ Lt({ title: "", publicationDate: "", identifiers: [] }), Td = /* @__PURE__ */ Ee(null), da = /* @__PURE__ */ Ee(null), fa = /* @__PURE__ */ Ee(!1);
    let uc = null, rn = null, ts = null, dc = !1, Cr = null, fc = 0;
    const $n = B(() => ca.value !== null), kr = B(() => Ce.value ? y.value.findIndex((f) => f.id === Ce.value.id) : -1), is = B(() => kr.value > 0 ? y.value[kr.value - 1] : null), ns = B(() => kr.value >= 0 && kr.value < y.value.length - 1 ? y.value[kr.value + 1] : null), Ed = B(() => Mg(Ce.value?.description || "")), pa = B(() => $g(Ce.value?.publicationDate || "")), Ad = B(() => Fg(Ce.value?.language || "")), Ig = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Pg = [
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
    function xd(f, c) {
      const s = new URLSearchParams();
      for (const [O, W] of Object.entries(C)) {
        const we = String(W || "").trim();
        we !== "" && !(O === "sort" && we === "title") && !(O === "view" && we === "compact") && s.set(O, we);
      }
      return s.set(f, String(c || "").trim()), s.delete("page"), o(s);
    }
    function as(f, c) {
      const O = xd(f, c).toString();
      return `${gt.value}${O ? `?${O}` : ""}`;
    }
    function rs(f, c, s) {
      const O = String(s || "").trim();
      if (O === "") return;
      f?.preventDefault?.();
      const W = xd(c, O);
      Ar({ historyMode: "none" }), Ot(null, {
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
        const O = Dg(c);
        if (O === c) break;
        c = O;
      }
      return c = c.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), c;
    }
    function Od(f) {
      return { ...f, publicationDate: Tr(f?.publicationDate) };
    }
    function Nd(f) {
      Ut.title = String(f?.title || ""), Ut.publicationDate = Tr(f?.publicationDate), Ut.identifiers = Array.isArray(f?.identifiers) ? f.identifiers.map((c) => ({ scheme: String(c?.scheme || ""), displayValue: String(c?.displayValue || c?.value || "") })) : [], Object.assign(Ni, { saving: !1, saved: !1, error: "" });
    }
    function zg() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ug(f) {
      Ut.identifiers.splice(f, 1);
    }
    async function jg() {
      const f = Ce.value;
      if (!f?.updateUrl || Ni.saving) return;
      Object.assign(Ni, { saving: !0, saved: !1, error: "" });
      const c = new FormData();
      c.set("requesttoken", Mt.value), c.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const O = f[s];
        c.set(s, Array.isArray(O) ? O.join(", ") : String(O ?? ""));
      }
      c.set("title", Ut.title), c.set("publicationDate", Tr(Ut.publicationDate)), Ut.identifiers.forEach((s, O) => {
        c.set(`identifiers[${O}][scheme]`, s.scheme), c.set(`identifiers[${O}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(f.updateUrl, { method: "POST", body: c, credentials: "same-origin", headers: { Accept: "application/json" } }), O = await s.json().catch(() => ({}));
        if (!s.ok || O.saved !== !0) throw new Error(O.error || b("library", "Metadata could not be saved."));
        f.title = Ut.title.trim(), f.publicationDate = Tr(Ut.publicationDate), f.identifiers = Ut.identifiers.filter((we) => we.scheme.trim() || we.displayValue.trim()).map((we) => ({ ...we }));
        const W = y.value.find((we) => Number(we.id) === Number(f.id));
        W && (W.title = f.title, W.publicationDate = f.publicationDate), Ni.saved = !0;
      } catch (s) {
        Ni.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Ni.saving = !1;
      }
    }
    const Fn = B(() => {
      const f = r("scannerConflicts", C.scannerConflicts) || r("weakMetadata", C.weakMetadata), c = f ? y.value.find((s) => os(s).length > 0) : null;
      return {
        enabled: f,
        item: c,
        fields: c ? os(c) : [],
        reviewNextUrl: ji.value,
        skipUrl: z.value.nextUrl || ji.value
      };
    }), Bg = B(() => n.map((f) => ({
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
      return Ig.filter((O) => Object.prototype.hasOwnProperty.call(c, O)).map((O) => {
        const W = pc(f[O]), we = pc(c[O]), Re = pc(s[O] || f.metadataSource || "scanner"), Ze = Re.includes("filename") || Re.includes("path") ? we : "", li = Re.includes("sidecar") ? we : "";
        return { field: O, currentValue: W, scannerCandidate: we, pathTemplateCandidate: Ze, sidecarValue: li, sourceProvenance: Re, differs: W !== we };
      }).filter((O) => O.differs);
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
      const O = ++ha, W = new AbortController();
      va = W, ca.value = f, ua.value = "overview", Ce.value = s && Number(s.id) === f ? Od(s) : null, Ce.value && Nd(Ce.value), Object.assign(Xt, { loading: !0, error: "", missing: !1 }), c !== "none" && Rd(f, c);
      try {
        const we = nc.value.replace("__ITEM_ID__", encodeURIComponent(String(f))), Re = await fetch(we, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (O !== ha) return;
        if (!Re.ok) {
          Ce.value = null, Xt.missing = Re.status === 404, Xt.error = Re.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Ze = await Re.json();
        if (O !== ha) return;
        if (typeof Ze?.item?.id != "number" || !Number.isSafeInteger(Ze.item.id) || Ze.item.id !== f) {
          Ce.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = Od(Ze.item), Nd(Ce.value), await ei();
      } catch (we) {
        O === ha && we?.name !== "AbortError" && (Ce.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        O === ha && (Xt.loading = !1, va = null);
      }
    }
    function Hi(f, c) {
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
        Cr = null, !(c !== fc || dc || $n.value || !f.isConnected) && f.focus();
      });
    }
    function hc() {
      fc += 1, Cr !== null && (window.cancelAnimationFrame(Cr), Cr = null);
    }
    function xr(f = rn) {
      fa.value = !!f?.matches, $n.value && ei(Id);
    }
    function ss(f) {
      f && Er(Number(f.id), { seed: f });
    }
    const Or = /* @__PURE__ */ Ee(null);
    let jt = 0, qa = null, Wa = null, Nr = null;
    const xt = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function Vg(f) {
      const c = o(new FormData(f));
      c.delete("publicationSearch"), c.delete("creatorSearch"), c.delete("subjectSearch"), c.delete("publisherSearch"), c.delete("classificationSearch"), c.delete("tagSearch"), c.delete("folderSearch"), c.delete("yearSearch");
      for (const s of Array.from(c.keys()))
        String(c.get(s) || "").trim() === "" && c.delete(s);
      return c.delete("page"), c.get("view") === "compact" && c.delete("view"), c.get("sort") === "title" && c.delete("sort"), c;
    }
    async function ga(f, c, s) {
      const O = new URLSearchParams();
      for (const [Re, Ze] of Object.entries(C)) {
        const li = String(Ze || "").trim();
        Re !== f && li !== "" && !(Re === "sort" && li === "title") && !(Re === "view" && li === "compact") && O.set(Re, li);
      }
      O.set(`${f}Search`, c);
      const W = new AbortController();
      f === "creator" ? lt = W : f === "publisher" ? ae = W : f === "subject" ? K = W : f === "classification" ? $e = W : f === "tag" ? Dt = W : f === "folder" ? w = W : An = W;
      const we = f === "creator" ? In.value : f === "publisher" ? tc.value : f === "subject" ? Bo.value : f === "classification" ? gr.value : f === "tag" ? Ho.value : f === "folder" ? Vo.value : ic.value;
      try {
        const Re = await fetch(`${we}?${O}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (!Re.ok) throw new Error(`${f} suggestions request failed: ${Re.status}`);
        const Ze = await Re.json(), li = f === "creator" ? ht : f === "publisher" ? me : f === "subject" ? Q : f === "classification" ? ze : f === "tag" ? Ei : f === "folder" ? T : Mi, Mn = f === "creator" ? fe.value : f === "publisher" ? J.value : f === "subject" ? x.value : f === "classification" ? V.value : f === "tag" ? Fe.value : f === "folder" ? it.value : tt.value;
        s === li && Mn.trim() === c && (f === "creator" ? Te.value = Array.isArray(Ze.creators) ? Ze.creators : [] : f === "publisher" ? U.value = Array.isArray(Ze.publishers) ? Ze.publishers : [] : f === "subject" ? I.value = Array.isArray(Ze.subjects) ? Ze.subjects : [] : f === "classification" ? oe.value = Array.isArray(Ze.classifications) ? Ze.classifications : [] : f === "tag" ? rt.value = Array.isArray(Ze.tags) ? Ze.tags : [] : f === "folder" ? at.value = Array.isArray(Ze.folders) ? Ze.folders : [] : Di.value = Array.isArray(Ze.years) ? Ze.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (f === "creator" && s === ht && (Te.value = null), f === "publisher" && s === me && (U.value = null), f === "subject" && s === Q && (I.value = null), f === "classification" && s === ze && (oe.value = null), f === "tag" && s === Ei && (rt.value = null), f === "folder" && s === T && (at.value = null), f === "year" && s === Mi && (Di.value = null));
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
      const O = new AbortController();
      _e = O;
      try {
        const W = await fetch(`${pt.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
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
        !c.has(s) && Object.prototype.hasOwnProperty.call(f, s) && (v[s] = f[s]);
      Object.assign(C, zi, f.activeFilters || {});
    }
    async function eb() {
      if (v.surface !== "index") return;
      const f = jt, c = JSON.stringify({ ...C }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      const O = new AbortController();
      Wa = O;
      try {
        const W = await fetch(`${jo.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!W.ok) return;
        const we = await W.json();
        if (f !== jt || c !== JSON.stringify({ ...C })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(we, Re) && (v[Re] = we[Re]);
      } catch (W) {
        if (W?.name !== "AbortError") return;
      } finally {
        Wa === O && (Wa = null);
      }
    }
    function tb() {
      Wa?.abort(), Wa = null;
    }
    async function Ot(f, c = null) {
      const s = f?.currentTarget?.tagName === "FORM" ? f.currentTarget : f?.currentTarget?.form;
      if (!s && !c?.params) return;
      const O = o(c?.params ?? Vg(s));
      if (ra.value || Rn.value) {
        Lr(O, gt.value);
        return;
      }
      const W = O.toString(), we = W ? `?${W}` : "", Re = c?.generation ?? ++jt, Ze = u(O), li = c?.historyMode ?? (Ze ? "push" : "replace"), Mn = c?.historyTraversal === !0;
      if (Re !== jt) return;
      tb(), c === null && qa?.abort();
      const Ya = new AbortController();
      qa = Ya, xt.loading = !0, xt.error = "", xt.completed = !1;
      try {
        const Vi = await fetch(jo.value + we, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ya.signal
        });
        if (Re !== jt) return;
        if (!Vi.ok) {
          Mn ? Lr(O) : Ze ? xt.error = b("library", "Could not load this review queue. Try again.") : Lr(O);
          return;
        }
        const Sb = await Vi.json();
        if (Re !== jt) return;
        Qg(Sb), xt.completed = !0, li !== "none" && (history[li === "push" ? "pushState" : "replaceState"]({}, "", W ? `?${W}` : window.location.pathname), $n.value && Ar({ historyMode: "none" }));
      } catch (Vi) {
        Re === jt && Vi?.name !== "AbortError" && (Mn ? Lr(O) : Ze ? xt.error = b("library", "Could not load this review queue. Try again.") : Lr(O));
      } finally {
        Re === jt && (qa = null, xt.loading = !1);
      }
    }
    function Pd() {
      qa?.abort();
      const f = new URLSearchParams(window.location.search), c = Ld();
      f.has("item") && c === null && (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)), c === null ? Ar({ historyMode: "none" }) : Er(c, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === c) || null }), f.delete("item"), Ot(null, {
        params: o(f),
        generation: ++jt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Lr(f, c = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = c, s.hidden = !0;
      for (const [O, W] of f.entries()) {
        const we = document.createElement("input");
        we.type = "hidden", we.name = O, we.value = W, s.appendChild(we);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function si(f, c = null, s = null) {
      if (c === null) {
        Ot(f);
        return;
      }
      Ot({ currentTarget: f }, { params: c, generation: s });
    }
    async function ib(f, c = re.value) {
      C.publication = String(c || "").trim(), re.value = C.publication, Z.value = !1, await ei(), Ot({ currentTarget: f });
    }
    function $d(f, c) {
      ib(c.currentTarget.form, f);
    }
    async function nb(f) {
      C.q = String(de.value || "").trim(), C.publication = String(re.value || "").trim(), C.publisher = String(J.value || "").trim(), C.creator = String(fe.value || "").trim(), C.subject = String(x.value || "").trim(), C.folder = String(it.value || "").trim(), C.year = String(tt.value || "").trim(), Z.value = !1, F.value = !1, Se.value = !1, R.value = !1, ut.value = !1, dt.value = !1, await ei(), Ot({ currentTarget: f });
    }
    async function Dn(f, c, s) {
      C[c] = String(s || "").trim(), c === "creator" ? (fe.value = C.creator, Se.value = !1) : c === "publisher" ? (J.value = C.publisher, F.value = !1) : c === "subject" ? (x.value = C.subject, R.value = !1) : c === "folder" ? (it.value = C.folder, ut.value = !1) : c === "classification" ? (V.value = C.classification, he.value = !1) : c === "tag" ? (Fe.value = C.tag, He.value = !1) : (tt.value = C.year, dt.value = !1), on[c] = -1, await ei(), Ot({ currentTarget: f });
    }
    function Fd(f) {
      nb(f.currentTarget);
    }
    function Dd(f, c) {
      Dn(c.currentTarget.form, "creator", f);
    }
    function Md(f, c) {
      Dn(c.currentTarget.form, "publisher", f);
    }
    function zd(f, c) {
      Dn(c.currentTarget.form, "classification", f);
    }
    function Ud(f, c) {
      Dn(c.currentTarget.form, "tag", f);
    }
    function jd(f, c) {
      Dn(c.currentTarget.form, "folder", f);
    }
    function Bd(f, c = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Dn(f, "subject", c);
    }
    function ab(f) {
      Bd(f.currentTarget.form);
    }
    function Hd(f, c) {
      Bd(c.currentTarget.form, f);
    }
    function Vd(f, c) {
      Dn(c.currentTarget.form, "year", f);
    }
    const on = /* @__PURE__ */ Lt({
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
      const s = on[c];
      return s >= 0 ? vc(f, c, s) : void 0;
    }
    function gc(f, c) {
      F.value = c, c || (on[f] = -1);
    }
    function Gd(f) {
      on[f] = -1, gc(f, !0);
    }
    function ob(f, c, s) {
      Dn(s, f, c);
    }
    function qd(f, c) {
      const s = rb();
      if (f.key === "Escape") {
        gc(c, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(f.key) || s.length === 0) return;
      if (f.key === "Enter") {
        const we = on[c];
        if (we < 0) return;
        f.preventDefault(), ob(c, s[we], f.currentTarget.form);
        return;
      }
      f.preventDefault(), gc(c, !0);
      const O = on[c], W = f.key === "ArrowDown" ? 1 : -1;
      on[c] = O < 0 ? W > 0 ? 0 : s.length - 1 : (O + W + s.length) % s.length;
    }
    function Wd(f) {
      const c = new URLSearchParams();
      for (const [s, O] of Object.entries(C)) {
        const W = String(O || "").trim();
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
      C[f] = f === "sort" ? "title" : f === "view" ? "compact" : "", Ot(null, {
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
        ["sort", "view"].includes(c) || (C[c] = zi[c]);
      Ot(null, {
        params: f,
        generation: ++jt
      }), !ra.value && !Rn.value && ei(() => {
        qo.value?.focus?.();
      });
    }
    function Xd(f) {
      const c = Xe.find((W) => W.key === f), s = new Set(c?.keys || []), O = new URLSearchParams();
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        Re !== "" && !s.has(W) && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && O.set(W, Re);
      }
      return O.delete("page"), O;
    }
    function ls(f) {
      const s = Xd(f).toString();
      return `${gt.value}${s ? `?${s}` : ""}`;
    }
    function cs(f) {
      const c = Xe.find((O) => O.key === f);
      if (!c) return;
      const s = Xd(f);
      for (const O of c.keys) C[O] = zi[O];
      Ot(null, {
        params: s,
        generation: ++jt
      });
    }
    function sb(f) {
      const c = new URL(f.href, window.location.origin).searchParams;
      Ot(null, {
        params: c,
        generation: ++jt
      });
    }
    function lb() {
      return Rr("q");
    }
    const bc = B(() => v.smartViewCounts || {}), cb = B(() => new Set(v.smartViewCountsPending || []));
    function ub(f) {
      return cb.value.has(f) || !Object.prototype.hasOwnProperty.call(bc.value, f) ? "—" : Number(bc.value[f] || 0);
    }
    const Zd = B(() => {
      const f = {};
      for (const [c, s] of Object.entries(C)) {
        const O = String(s || "").trim();
        O !== "" && !(c === "sort" && O === "title") && (f[c] = O);
      }
      return f;
    }), db = B(() => JSON.stringify(Zd.value)), mc = B(() => Object.keys(Zd.value).length > 0);
    function us(f) {
      if (!la.includes(f)) return;
      C.view = f;
      const c = new URLSearchParams();
      for (const [s, O] of Object.entries(d(C))) {
        const W = String(O || "").trim();
        W !== "" && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && c.set(s, W);
      }
      c.delete("page"), Ot(null, {
        params: c,
        generation: ++jt
      });
    }
    function fb(f) {
      const c = o(window.location.search);
      for (const O of Object.keys(_r))
        c.delete(O);
      c.delete("page");
      for (const [O, W] of Object.entries(f))
        String(W || "").trim() !== "" && c.set(O, String(W));
      const s = c.toString();
      return s ? `?${s}` : "?";
    }
    function pb(f) {
      return fb(f || {});
    }
    function hb(f) {
      const s = Object.entries(f && typeof f == "object" ? f : {}).filter(([, O]) => String(O ?? "").trim() !== "");
      return s.length === 0 ? !1 : s.every(([O, W]) => String(C[O] ?? "") === String(W ?? ""));
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
      f.key !== "/" || f.metaKey || f.ctrlKey || f.altKey || f.shiftKey || Qd(f.target) || (f.preventDefault(), Or.value?.focus(), Or.value?.select?.());
    }
    async function _b(f) {
      f.key !== "Escape" || document.activeElement !== Or.value || C.q === "" || (f.preventDefault(), de.value = "", C.q = "", await ei(), si({ currentTarget: Or.value }));
    }
    function wb(f) {
      if (!$n.value || f.metaKey || f.ctrlKey || f.altKey)
        return !1;
      if (f.key === "Escape")
        return f.preventDefault(), Ar(), !0;
      if (f.key === "Tab" && fa.value) {
        if (da.value?.focusTrap) return !1;
        const c = da.value?.$refs?.sidebar || da.value?.$el || da.value, s = [...c?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((we) => !we.hidden && we.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const O = s[0], W = s[s.length - 1];
        if (f.shiftKey && (document.activeElement === O || !c.contains(document.activeElement)))
          return f.preventDefault(), W.focus(), !0;
        if (!f.shiftKey && (document.activeElement === W || !c.contains(document.activeElement)))
          return f.preventDefault(), O.focus(), !0;
      }
      return Qd(f.target) ? !1 : f.key === "ArrowLeft" && is.value ? (f.preventDefault(), ss(is.value), !0) : f.key === "ArrowRight" && ns.value ? (f.preventDefault(), ss(ns.value), !0) : !1;
    }
    function ef(f) {
      wb(f) || (yb(f), _b(f));
    }
    ea(() => {
      window.addEventListener("keydown", ef), window.addEventListener("popstate", Pd), rn = window.matchMedia?.("(max-width: 1023px)") || null, xr(), rn?.addEventListener ? rn.addEventListener("change", xr) : rn?.addListener?.(xr);
      const f = new URLSearchParams(window.location.search), c = Ld();
      f.has("item") && c === null ? (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)) : c !== null && Er(c, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === c) || null }), Nr = window.requestAnimationFrame(() => {
        Nr = null, eb();
      });
    }), fr(() => {
      dc = !0, hc(), window.removeEventListener("keydown", ef), window.removeEventListener("popstate", Pd), window.clearTimeout(se), window.clearTimeout(Le), window.clearTimeout(G), window.clearTimeout(na), _e?.abort(), lt?.abort(), K?.abort(), An?.abort(), jt += 1, Nr !== null && window.cancelAnimationFrame(Nr), Nr = null, Wa?.abort(), qa?.abort(), qa = null, ha += 1, va?.abort(), va = null, rn?.removeEventListener ? rn.removeEventListener("change", xr) : rn?.removeListener?.(xr), rn = null, ts = null;
    });
    const $r = /* @__PURE__ */ Lt({}), Fr = /* @__PURE__ */ Lt({});
    async function tf(f, c) {
      const s = c?.currentTarget?.closest?.("form") || c?.currentTarget;
      if (!s || !f?.starUrl || $r[f.id]) return;
      const O = !!f.starred;
      $r[f.id] = !0, Fr[f.id] = "", f.starred = !O;
      try {
        (await fetch(f.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (f.starred = O, Fr[f.id] = b("library", "Could not update star. Try again."));
      } catch {
        f.starred = O, Fr[f.id] = b("library", "Could not update star. Try again.");
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
                (m(!0), _(ie, null, ke(Uo.value, (s) => (m(), je(g(Xc), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (m(!0), _(ie, null, ke(vr.value, (s) => (m(), je(g(Xc), {
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
                      onClick: (O) => gb(s.id)
                    }, {
                      default: Pe(() => [
                        ge(h(g(b)("library", "Delete collection")), 1)
                      ]),
                      _: 1
                    }, 8, ["aria-label", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["active", "href", "name"]))), 128)),
                Ae(g(Xc), {
                  active: aa.value,
                  href: Ln.value,
                  name: Ba.value > 0 ? `${g(b)("library", "Review")} (${Ba.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Pe(() => [
            l("section", TT, [
              l("h2", ET, h(g(b)("library", "Filters")), 1),
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
                }, null, 8, xT),
                (m(!0), _(ie, null, ke(wd.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, OT))), 128)),
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
                  l("legend", null, h(g(b)("library", "Content")), 1),
                  wt.value.find((s) => s.key === "content")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("content"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[0] || (c[0] = ye((s) => cs("content"), ["prevent"]))
                  }, h(g(b)("library", "Clear Content")), 9, IT)) : $("", !0),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ge(h(g(b)("library", "Search")) + " ", 1),
                      c[113] || (c[113] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Ie(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Or,
                      "onUpdate:modelValue": c[1] || (c[1] = (s) => de.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, $T), [
                      [ft, de.value]
                    ]),
                    oi("q") ? (m(), _("small", FT, h(xi("q")), 1)) : $("", !0)
                  ], 8, PT),
                  l("label", null, [
                    ge(h(g(b)("library", "Type")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[2] || (c[2] = (s) => C.type = s),
                      name: "type",
                      onChange: c[3] || (c[3] = (s) => si(s))
                    }, [
                      l("option", DT, h(g(b)("library", "All types")), 1),
                      (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, MT))), 128))
                    ], 544), [
                      [Zt, C.type]
                    ])
                  ]),
                  l("div", zT, [
                    l("label", UT, h(g(b)("library", "Publisher")), 1),
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
                    oi("publisher") ? (m(), _("small", HT, h(xi("publisher")), 1)) : $("", !0),
                    F.value && Y.value.length > 0 ? (m(), _("ul", VT, [
                      (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                        id: vc("desktop", "publisher", O),
                        key: s,
                        role: "option",
                        "aria-selected": on.publisher === O ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: c[7] || (c[7] = ye(() => {
                          }, ["prevent"])),
                          onClick: (W) => Md(s, W)
                        }, h(s), 41, GT)
                      ], 8, KT))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publisher-apply", an("publisher")])
                    }, h(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", qT, [
                    l("label", WT, h(g(b)("library", "Series / periodical")), 1),
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
                      onKeydown: c[10] || (c[10] = nt((s) => Z.value = !1, ["escape"]))
                    }, null, 40, YT), [
                      [ft, re.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: C.publication
                    }, null, 8, XT),
                    oi("publication") ? (m(), _("small", ZT, h(xi("publication")), 1)) : $("", !0),
                    Z.value && X.value.length > 0 ? (m(), _("ul", JT, [
                      (m(!0), _(ie, null, ke(X.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: c[11] || (c[11] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => $d(s, O)
                        }, h(s), 41, QT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publication-apply", an("publication")])
                    }, h(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", eE, [
                    l("label", tE, h(g(b)("library", "Publication year")), 1),
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
                      "aria-expanded": dt.value && vi.value.length > 0 ? "true" : "false",
                      onFocus: c[13] || (c[13] = (s) => dt.value = !0),
                      onKeydown: c[14] || (c[14] = nt((s) => dt.value = !1, ["escape"]))
                    }, null, 40, iE), [
                      [ft, tt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: C.year
                    }, null, 8, nE),
                    oi("year") ? (m(), _("small", aE, h(xi("year")), 1)) : $("", !0),
                    dt.value && vi.value.length > 0 ? (m(), _("ul", rE, [
                      (m(!0), _(ie, null, ke(vi.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: c[15] || (c[15] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Vd(s, O)
                        }, h(s), 41, oE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-year-apply", an("year")])
                    }, h(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", sE, [
                    l("label", lE, h(g(b)("library", "Creator")), 1),
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
                      onKeydown: c[18] || (c[18] = nt((s) => Se.value = !1, ["escape"]))
                    }, null, 40, cE), [
                      [ft, fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: C.creator
                    }, null, 8, uE),
                    oi("creator") ? (m(), _("small", dE, h(xi("creator")), 1)) : $("", !0),
                    Se.value && Ke.value.length > 0 ? (m(), _("ul", fE, [
                      (m(!0), _(ie, null, ke(Ke.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: c[19] || (c[19] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Dd(s, O)
                        }, h(s), 41, pE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-creator-apply", an("creator")])
                    }, h(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", hE, [
                    l("label", vE, h(g(b)("library", "Nextcloud tag")), 1),
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
                      onKeydown: c[22] || (c[22] = nt((s) => He.value = !1, ["escape"]))
                    }, null, 40, gE), [
                      [ft, Fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: C.tag
                    }, null, 8, bE),
                    He.value && vt.value.length > 0 ? (m(), _("ul", mE, [
                      (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: c[23] || (c[23] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Ud(s, O)
                        }, h(s), 41, yE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-tag-apply", an("tag")])
                    }, h(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Format")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[24] || (c[24] = (s) => C.format = s),
                      name: "format",
                      onChange: c[25] || (c[25] = (s) => si(s))
                    }, [
                      l("option", _E, h(g(b)("library", "All formats")), 1),
                      (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(ds(s)), 9, wE))), 128))
                    ], 544), [
                      [Zt, C.format]
                    ])
                  ])
                ]),
                l("fieldset", SE, [
                  l("legend", null, h(g(b)("library", "Location")), 1),
                  wt.value.find((s) => s.key === "location")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("location"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[26] || (c[26] = ye((s) => cs("location"), ["prevent"]))
                  }, h(g(b)("library", "Clear Location")), 9, CE)) : $("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Shelf")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[27] || (c[27] = (s) => C.shelf = s),
                      name: "shelf",
                      onChange: c[28] || (c[28] = (s) => si(s))
                    }, [
                      l("option", kE, h(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ie, null, ke(k.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, TE))), 128))
                    ], 544), [
                      [Zt, C.shelf]
                    ])
                  ]),
                  l("div", EE, [
                    l("label", AE, h(g(b)("library", "Folder")), 1),
                    Ie(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": c[29] || (c[29] = (s) => it.value = s),
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
                      onKeydown: c[31] || (c[31] = nt((s) => ut.value = !1, ["escape"]))
                    }, null, 40, xE), [
                      [ft, it.value]
                    ]),
                    ut.value && Ft.value.length > 0 ? (m(), _("ul", OE, [
                      (m(!0), _(ie, null, ke(Ft.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: c[32] || (c[32] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => jd(s, O)
                        }, h(s), 41, NE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-folder-apply", an("folder")])
                    }, h(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", LE, [
                  l("legend", null, h(g(b)("library", "Review")), 1),
                  wt.value.find((s) => s.key === "review")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("review"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[33] || (c[33] = ye((s) => cs("review"), ["prevent"]))
                  }, h(g(b)("library", "Clear Review")), 9, RE)) : $("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Scan status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[34] || (c[34] = (s) => C.status = s),
                      name: "status",
                      onChange: c[35] || (c[35] = (s) => si(s))
                    }, [
                      l("option", IE, h(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, PE))), 128))
                    ], 544), [
                      [Zt, C.status]
                    ])
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Workflow status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[36] || (c[36] = (s) => C.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: c[37] || (c[37] = (s) => si(s))
                    }, [
                      l("option", $E, h(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, FE))), 128))
                    ], 544), [
                      [Zt, C.workflowStatus]
                    ])
                  ]),
                  l("div", DE, [
                    l("label", ME, h(g(b)("library", "Subject")), 1),
                    Ie(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": c[38] || (c[38] = (s) => x.value = s),
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
                      onKeydown: c[40] || (c[40] = nt((s) => R.value = !1, ["escape"]))
                    }, null, 40, zE), [
                      [ft, x.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: C.subject
                    }, null, 8, UE),
                    oi("subject") ? (m(), _("small", jE, h(xi("subject")), 1)) : $("", !0),
                    R.value && j.value.length > 0 ? (m(), _("ul", BE, [
                      (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: c[41] || (c[41] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Hd(s, O)
                        }, h(s), 41, HE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "button",
                      class: be(["button secondary library-subject-apply", an("subject")]),
                      onClick: ab
                    }, h(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", VE, [
                    l("label", KE, h(g(b)("library", "Classification")), 1),
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
                      onKeydown: c[44] || (c[44] = nt((s) => he.value = !1, ["escape"]))
                    }, null, 40, GE), [
                      [ft, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: C.classification
                    }, null, 8, qE),
                    he.value && ve.value.length > 0 ? (m(), _("ul", WE, [
                      (m(!0), _(ie, null, ke(ve.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: c[45] || (c[45] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => zd(s, O)
                        }, h(s), 41, YE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-classification-apply", an("classification")])
                    }, h(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Suggested updates")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": c[46] || (c[46] = (s) => C.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: c[47] || (c[47] = (s) => si(s))
                    }, [
                      l("option", XE, h(g(b)("library", "All metadata")), 1),
                      l("option", ZE, h(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Zt, C.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", JE, [
                  l("legend", null, h(g(b)("library", "Personal / display")), 1),
                  wt.value.find((s) => s.key === "personal")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("personal"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: c[48] || (c[48] = ye((s) => cs("personal"), ["prevent"]))
                  }, h(g(b)("library", "Clear Personal / display")), 9, QE)) : $("", !0)
                ]),
                l("button", e2, h(g(b)("library", "Apply filters")), 1),
                ue.value.length > 0 ? (m(), _("a", {
                  key: 2,
                  href: ba(),
                  class: "button secondary",
                  onClick: ye(ma, ["prevent"])
                }, h(g(b)("library", "Clear")), 9, t2)) : $("", !0)
              ], 40, AT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Nn.value
            }, [
              c[114] || (c[114] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, h(g(b)("library", "Settings")), 1)
            ], 8, i2)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(g(u0), null, {
          default: Pe(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: v.language || "en",
              dir: v.direction || "ltr",
              tabindex: "-1"
            }, [
              ce.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, h(g(b)("library", "Active filters")), 1),
                (m(!0), _(ie, null, ke(ce.value, (s) => (m(), _("a", {
                  key: s.key,
                  href: Rr(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: ye((O) => Ir(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    ge(h(s.label), 1),
                    s.displayValue ? (m(), _(ie, { key: 0 }, [
                      ge(":")
                    ], 64)) : $("", !0)
                  ]),
                  s.displayValue ? (m(), _(ie, { key: 0 }, [
                    c[115] || (c[115] = ge(h(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, h(s.displayValue), 9, o2)
                  ], 64)) : $("", !0),
                  c[116] || (c[116] = ge()),
                  c[117] || (c[117] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, r2))), 128)),
                ue.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: ba(),
                  class: "library-active-filter-clear-all",
                  onClick: ye(ma, ["prevent"])
                }, h(g(b)("library", "Clear all")), 9, s2)) : $("", !0)
              ], 8, a2)) : $("", !0),
              aa.value ? (m(), _("section", l2, [
                l("header", c2, [
                  l("p", u2, h(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", d2, h(g(b)("library", "Review")), 1),
                  l("p", null, h(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ie, null, ke(Bg.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: be(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: ye((O) => sb(s), ["prevent"])
                  }, [
                    l("span", null, h(s.label), 1),
                    l("b", null, h(ub(s.countKey)), 1)
                  ], 10, p2))), 128))
                ], 8, f2),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: ye(Ot, ["prevent"])
                }, [
                  (m(!0), _(ie, null, ke(Og.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, v2))), 128)),
                  l("label", null, [
                    ge(h(g(b)("library", "Search within this queue")), 1),
                    Ie(l("input", {
                      "onUpdate:modelValue": c[49] || (c[49] = (s) => C.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, C.q]
                    ])
                  ]),
                  l("button", g2, h(g(b)("library", "Apply")), 1)
                ], 40, h2),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": xt.loading ? "true" : "false"
                }, [
                  xt.loading ? (m(), _("span", m2, h(g(b)("library", "Loading review queue…")), 1)) : $("", !0)
                ], 8, b2),
                xt.error ? (m(), _("p", y2, h(xt.error), 1)) : $("", !0),
                Fn.value.enabled ? (m(), _("section", _2, [
                  l("div", w2, [
                    l("p", S2, h(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, h(g(b)("library", "Review next suggestion")), 9, C2)
                  ]),
                  Fn.value.item ? (m(), _("article", k2, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", T2, h(Fn.value.item.title), 1)
                      ]),
                      l("span", E2, [
                        l("bdi", A2, h(Fn.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", x2, [
                      (m(!0), _(ie, null, ke(Fn.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", O2, h(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", N2, h(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", L2, h(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", R2, h(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", I2, h(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", P2, h(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Fn.value.item.resetFieldUrl,
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
                          l("button", M2, h(g(b)("library", "Use suggested value")), 1)
                        ], 8, $2)
                      ]))), 128))
                    ]),
                    l("footer", z2, [
                      l("a", {
                        class: "button secondary",
                        href: Fn.value.item.detailsUrl
                      }, h(g(b)("library", "Maintenance")), 9, U2),
                      l("a", {
                        class: "button secondary",
                        href: Fn.value.skipUrl
                      }, h(g(b)("library", "Skip to next suggestion")), 9, j2)
                    ])
                  ])) : $("", !0)
                ])) : $("", !0),
                y.value.length === 0 && !xt.loading && !xt.error ? (m(), _("div", B2, [
                  l("h3", null, h(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, h(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: gt.value
                  }, h(g(b)("library", "Back to Library")), 9, H2)
                ])) : (m(), _("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (O) => Hi(s, O)
                        }, [
                          l("bdi", G2, h(s.title), 1)
                        ], 8, K2)
                      ]),
                      s.creators ? (m(), _("p", q2, [
                        l("bdi", W2, h(s.creators), 1)
                      ])) : $("", !0),
                      s.scanError ? (m(), _("p", Y2, [
                        l("bdi", X2, h(s.scanError), 1)
                      ])) : $("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => Hi(s, O)
                      }, h(g(b)("library", "Details")), 9, Z2),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => gi(s, O)
                      }, h(g(b)("library", "Open")), 9, J2)
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
                  }, h(g(b)("library", "Previous")), 9, eA)) : (m(), _("span", tA, h(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", iA, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, nA)) : (m(), _("span", aA, h(g(b)("library", "Next")), 1))
                ], 8, Q2)) : $("", !0)
              ])) : ra.value ? (m(), _("main", rA, [
                l("header", oA, [
                  l("p", sA, h(g(b)("library", "Your library")), 1),
                  l("h2", lA, h(g(b)("library", "Home")), 1)
                ]),
                ue.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(ue.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Rr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((O) => Ir(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ge(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        c[119] || (c[119] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, fA)
                      ], 64)) : $("", !0),
                      c[120] || (c[120] = ge()),
                      c[121] || (c[121] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, dA))), 128))
                  ], 8, uA),
                  l("p", pA, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Et.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, hA),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, vA)
                  ])
                ], 8, cA)) : $("", !0),
                l("section", gA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", bA, h(g(b)("library", "Continue reading")), 1),
                      l("p", mA, h(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?sort=lastOpened`
                    }, h(g(b)("library", "View all")), 9, yA)
                  ]),
                  Qo.value.continueReading.length ? (m(), _("div", _A, [
                    (m(!0), _(ie, null, ke(Qo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => Hi(s, O)
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
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", EA, h(s.title), 1)
                          ], 8, TA)
                        ]),
                        s.creators ? (m(), _("p", AA, [
                          l("bdi", xA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => gi(s, O)
                        }, h(g(b)("library", "Open")), 9, OA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", NA, h(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", LA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", RA, h(g(b)("library", "Recently added")), 1),
                      l("p", IA, h(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?sort=recent`
                    }, h(g(b)("library", "View all")), 9, PA)
                  ]),
                  Qo.value.recentlyAdded.length ? (m(), _("div", $A, [
                    (m(!0), _(ie, null, ke(Qo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => Hi(s, O)
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
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", jA, h(s.title), 1)
                          ], 8, UA)
                        ]),
                        s.creators ? (m(), _("p", BA, [
                          l("bdi", HA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => gi(s, O)
                        }, h(g(b)("library", "Open")), 9, VA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", KA, h(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", GA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", qA, h(g(b)("library", "Shelves")), 1),
                      l("p", WA, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: ai.value }, h(g(b)("library", "View all")), 9, YA)
                  ]),
                  Sd.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ie, null, ke(Sd.value, (s) => (m(), _("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", JA, h(s.shelf), 1)
                      ]),
                      l("span", null, h(g(ui)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, ZA))), 128))
                  ], 8, XA)) : (m(), _("p", QA, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(cc.value.count || 0) > 0 ? (m(), _("aside", ex, [
                  l("div", null, [
                    l("h3", tx, h(g(b)("library", "Needs attention")), 1),
                    l("p", ix, h(g(ui)("library", "%n publication needs better details.", "%n publications need better details.", Number(cc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: cc.value.url
                  }, h(g(b)("library", "Review")), 9, nx)
                ])) : $("", !0)
              ])) : Rn.value ? (m(), _("main", ax, [
                l("header", rx, [
                  l("p", ox, h(g(b)("library", "Your library")), 1),
                  l("h2", sx, h(g(b)("library", "Shelves")), 1),
                  l("p", lx, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                ue.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(ue.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Rr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((O) => Ir(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ge(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        c[122] || (c[122] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, fx)
                      ], 64)) : $("", !0),
                      c[123] || (c[123] = ge()),
                      c[124] || (c[124] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, dx))), 128))
                  ], 8, ux),
                  l("p", px, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Et.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, hx),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, vx)
                  ])
                ], 8, cx)) : $("", !0),
                Cd.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", bx, [
                    (m(!0), _(ie, null, ke(Cd.value, (s) => (m(), je(kT, {
                      key: s.id,
                      node: s,
                      "children-url": ec.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, gx)) : (m(), _("section", mx, [
                  l("h3", null, h(g(b)("library", "Shelves")), 1),
                  l("p", yx, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", _x, [
                    l("a", {
                      class: "button primary",
                      href: Nn.value
                    }, h(g(b)("library", "Add a Library root")), 9, wx),
                    l("a", {
                      class: "button secondary",
                      href: gt.value
                    }, h(g(b)("library", "All publications")), 9, Sx)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: be(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": xt.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": xt.loading ? "true" : "false"
              }, [
                l("header", kx, [
                  mr.value ? (m(), _("p", Tx, h(oa.value), 1)) : $("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: qo,
                    tabindex: "-1"
                  }, h(Go.value), 513)
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
                    l("span", Ax, h(g(ui)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, h(Cg.value), 1)
                  ], 8, Ex),
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
                    }, null, 8, Ox),
                    (m(!0), _(ie, null, ke(wd.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, Nx))), 128)),
                    l("fieldset", Lx, [
                      l("legend", null, h(g(b)("library", "Content")), 1),
                      l("label", Rx, [
                        l("span", null, h(g(b)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: sa,
                          "onUpdate:modelValue": c[50] || (c[50] = (s) => de.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, Ix), [
                          [ft, de.value]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[51] || (c[51] = (s) => C.type = s),
                          name: "type",
                          onChange: c[52] || (c[52] = (s) => si(s))
                        }, [
                          l("option", Px, h(g(b)("library", "All types")), 1),
                          (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, h(s), 9, $x))), 128))
                        ], 544), [
                          [Zt, C.type]
                        ])
                      ]),
                      l("div", Fx, [
                        l("label", Dx, h(g(b)("library", "Publisher")), 1),
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
                        }, null, 40, Mx), [
                          [ft, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: C.publisher
                        }, null, 8, zx),
                        oi("publisher") ? (m(), _("small", Ux, h(xi("publisher")), 1)) : $("", !0),
                        Ai.value && F.value && Y.value.length > 0 ? (m(), _("ul", jx, [
                          (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                            id: vc("mobile", "publisher", O),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": on.publisher === O ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: c[56] || (c[56] = ye(() => {
                              }, ["prevent"])),
                              onClick: (W) => Md(s, W)
                            }, h(s), 41, Hx)
                          ], 8, Bx))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Vx, [
                        l("label", Kx, h(g(b)("library", "Series / periodical")), 1),
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
                          onKeydown: c[59] || (c[59] = nt((s) => Z.value = !1, ["escape"]))
                        }, null, 40, Gx), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: C.publication
                        }, null, 8, qx),
                        oi("publication") ? (m(), _("small", Wx, h(xi("publication")), 1)) : $("", !0),
                        Ai.value && Z.value && X.value.length > 0 ? (m(), _("ul", Yx, [
                          (m(!0), _(ie, null, ke(X.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: c[60] || (c[60] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => $d(s, O)
                            }, h(s), 41, Xx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Zx, [
                        l("label", Jx, h(g(b)("library", "Publication year")), 1),
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
                          "aria-expanded": dt.value && vi.value.length > 0 ? "true" : "false",
                          onFocus: c[62] || (c[62] = (s) => dt.value = !0),
                          onKeydown: c[63] || (c[63] = nt((s) => dt.value = !1, ["escape"]))
                        }, null, 40, Qx), [
                          [ft, tt.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: C.year
                        }, null, 8, eO),
                        oi("year") ? (m(), _("small", tO, h(xi("year")), 1)) : $("", !0),
                        Ai.value && dt.value && vi.value.length > 0 ? (m(), _("ul", iO, [
                          (m(!0), _(ie, null, ke(vi.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: c[64] || (c[64] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Vd(s, O)
                            }, h(s), 41, nO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", aO, [
                        l("label", rO, h(g(b)("library", "Creator")), 1),
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
                          onKeydown: c[67] || (c[67] = nt((s) => Se.value = !1, ["escape"]))
                        }, null, 40, oO), [
                          [ft, fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: C.creator
                        }, null, 8, sO),
                        oi("creator") ? (m(), _("small", lO, h(xi("creator")), 1)) : $("", !0),
                        Ai.value && Se.value && Ke.value.length > 0 ? (m(), _("ul", cO, [
                          (m(!0), _(ie, null, ke(Ke.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: c[68] || (c[68] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Dd(s, O)
                            }, h(s), 41, uO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[69] || (c[69] = (s) => C.format = s),
                          name: "format",
                          onChange: c[70] || (c[70] = (s) => si(s))
                        }, [
                          l("option", dO, h(g(b)("library", "All formats")), 1),
                          (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, h(ds(s)), 9, fO))), 128))
                        ], 544), [
                          [Zt, C.format]
                        ])
                      ]),
                      l("div", pO, [
                        l("label", hO, h(g(b)("library", "Subject")), 1),
                        Ie(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": c[71] || (c[71] = (s) => x.value = s),
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
                          onKeydown: c[73] || (c[73] = nt((s) => R.value = !1, ["escape"]))
                        }, null, 40, vO), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: C.subject
                        }, null, 8, gO),
                        oi("subject") ? (m(), _("small", bO, h(xi("subject")), 1)) : $("", !0),
                        Ai.value && R.value && j.value.length > 0 ? (m(), _("ul", mO, [
                          (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: c[74] || (c[74] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Hd(s, O)
                            }, h(s), 41, yO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", _O, [
                        l("label", wO, h(g(b)("library", "Classification")), 1),
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
                          onKeydown: c[77] || (c[77] = nt((s) => he.value = !1, ["escape"]))
                        }, null, 40, SO), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: C.classification
                        }, null, 8, CO),
                        Ai.value && he.value && ve.value.length > 0 ? (m(), _("ul", kO, [
                          (m(!0), _(ie, null, ke(ve.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: c[78] || (c[78] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => zd(s, O)
                            }, h(s), 41, TO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", EO, [
                      l("legend", null, h(g(b)("library", "Location")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[79] || (c[79] = (s) => C.shelf = s),
                          name: "shelf",
                          onChange: c[80] || (c[80] = (s) => si(s))
                        }, [
                          l("option", AO, h(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ie, null, ke(k.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, h(s), 9, xO))), 128))
                        ], 544), [
                          [Zt, C.shelf]
                        ])
                      ]),
                      l("div", OO, [
                        l("label", NO, h(g(b)("library", "Folder")), 1),
                        Ie(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": c[81] || (c[81] = (s) => it.value = s),
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
                          onKeydown: c[83] || (c[83] = nt((s) => ut.value = !1, ["escape"]))
                        }, null, 40, LO), [
                          [ft, it.value]
                        ]),
                        Ai.value && ut.value && Ft.value.length > 0 ? (m(), _("ul", RO, [
                          (m(!0), _(ie, null, ke(Ft.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: c[84] || (c[84] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => jd(s, O)
                            }, h(s), 41, IO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", PO, [
                      l("legend", null, h(g(b)("library", "Review")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[85] || (c[85] = (s) => C.status = s),
                          name: "status",
                          onChange: c[86] || (c[86] = (s) => si(s))
                        }, [
                          l("option", $O, h(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, h(s), 9, FO))), 128))
                        ], 544), [
                          [Zt, C.status]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[87] || (c[87] = (s) => C.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: c[88] || (c[88] = (s) => si(s))
                        }, [
                          l("option", DO, h(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, h(s), 9, MO))), 128))
                        ], 544), [
                          [Zt, C.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[89] || (c[89] = (s) => C.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: c[90] || (c[90] = (s) => si(s))
                        }, [
                          l("option", zO, h(g(b)("library", "All metadata")), 1),
                          l("option", UO, h(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Zt, C.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", jO, [
                      l("legend", null, h(g(b)("library", "Personal / display")), 1),
                      l("div", BO, [
                        l("label", HO, h(g(b)("library", "Nextcloud tag")), 1),
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
                          onKeydown: c[93] || (c[93] = nt((s) => He.value = !1, ["escape"]))
                        }, null, 40, VO), [
                          [ft, Fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: C.tag
                        }, null, 8, KO),
                        He.value && vt.value.length > 0 ? (m(), _("ul", GO, [
                          (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: c[94] || (c[94] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Ud(s, O)
                            }, h(s), 41, qO)
                          ]))), 128))
                        ])) : $("", !0),
                        l("button", {
                          type: "submit",
                          class: be(["button secondary library-tag-apply", an("tag")])
                        }, h(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[95] || (c[95] = (s) => C.sort = s),
                          name: "sort",
                          onChange: Ot
                        }, [
                          l("option", WO, h(g(b)("library", "Title")), 1),
                          l("option", YO, h(g(b)("library", "Date added")), 1),
                          l("option", XO, h(g(b)("library", "Publication date")), 1),
                          l("option", ZO, h(g(b)("library", "Series")), 1),
                          l("option", JO, h(g(b)("library", "Recently opened")), 1),
                          l("option", QO, h(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Zt, C.sort]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": c[96] || (c[96] = (s) => C.view = s),
                          name: "view",
                          onChange: Ot
                        }, [
                          l("option", e3, h(g(b)("library", "Compact")), 1),
                          l("option", t3, h(g(b)("library", "Gallery")), 1),
                          l("option", i3, h(g(b)("library", "List")), 1),
                          l("option", n3, h(g(b)("library", "Shelf")), 1)
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
                      }, h(g(b)("library", "Clear all")), 9, r3)) : $("", !0),
                      l("button", o3, h(Tg.value), 1)
                    ])
                  ], 40, xx)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: ye(Ot, ["prevent"])
                  }, [
                    (m(!0), _(ie, null, ke(xg.value, (s) => (m(), _("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, c3))), 128)),
                    l("label", u3, [
                      ge(h(g(b)("library", "Sort")), 1),
                      Ie(l("select", {
                        "onUpdate:modelValue": c[97] || (c[97] = (s) => C.sort = s),
                        name: "sort",
                        onChange: Ot
                      }, [
                        l("option", d3, h(g(b)("library", "Title")), 1),
                        l("option", f3, h(g(b)("library", "Date added")), 1),
                        l("option", p3, h(g(b)("library", "Publication date")), 1),
                        l("option", h3, h(g(b)("library", "Series")), 1),
                        l("option", v3, h(g(b)("library", "Recently opened")), 1),
                        l("option", g3, h(g(b)("library", "Format")), 1)
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
                      }, h(g(b)("library", "Compact")), 11, m3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: be({ active: zt.value === "gallery" }),
                        "aria-pressed": zt.value === "gallery" ? "true" : "false",
                        onClick: c[99] || (c[99] = (s) => us("gallery"))
                      }, h(g(b)("library", "Gallery")), 11, y3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: be({ active: zt.value === "list" }),
                        "aria-pressed": zt.value === "list" ? "true" : "false",
                        onClick: c[100] || (c[100] = (s) => us("list"))
                      }, h(g(b)("library", "List")), 11, _3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: be({ active: zt.value === "shelf" }),
                        "aria-pressed": zt.value === "shelf" ? "true" : "false",
                        onClick: c[101] || (c[101] = (s) => us("shelf"))
                      }, h(g(b)("library", "Shelf")), 11, w3)
                    ], 8, b3)
                  ], 40, l3),
                  l("section", S3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, h(g(b)("library", "Collections")), 9, C3),
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
                        ge(h(g(b)("library", "Collection name")), 1),
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
                      }, h(g(b)("library", "Save")), 9, x3)
                    ], 8, k3)
                  ]),
                  Oi.value.length > 0 ? (m(), _("details", {
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
                      }, h(g(b)("library", "Batch actions")), 9, L3),
                      l("small", R3, h(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", I3, h(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1)
                    ]),
                    l("p", P3, h(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1),
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
                          l("span", null, h(g(b)("library", "Add tag")), 1),
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
                        }, h(g(b)("library", "Apply")), 9, M3)
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
                          l("span", null, h(g(b)("library", "Remove tag")), 1),
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
                        }, h(g(b)("library", "Remove")), 9, B3)
                      ], 8, z3),
                      l("form", {
                        method: "post",
                        action: Ui.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Mt.value
                        }, null, 8, V3),
                        (m(!0), _(ie, null, ke(Jo.value, (s) => (m(), _("input", {
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
                        }, h(g(b)("library", "Reset metadata")), 9, G3)
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
                        (m(!0), _(ie, null, ke(Jo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, Y3))), 128)),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Field")), 1),
                          l("select", X3, [
                            l("option", Z3, h(g(b)("library", "Publication type")), 1),
                            l("option", J3, h(g(b)("library", "Subtitle")), 1),
                            l("option", Q3, h(g(b)("library", "Creators")), 1),
                            l("option", eN, h(g(b)("library", "Series / periodical")), 1),
                            l("option", tN, h(g(b)("library", "Publication date")), 1),
                            l("option", iN, h(g(b)("library", "Language")), 1),
                            l("option", nN, h(g(b)("library", "Publisher")), 1),
                            l("option", aN, h(g(b)("library", "Subjects")), 1),
                            l("option", rN, h(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Value")), 1),
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
                        }, h(g(b)("library", "Preview edit")), 9, sN)
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
                        (m(!0), _(ie, null, ke(Jo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, uN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Fresh covers")), 9, dN)
                      ], 8, lN)
                    ], 32)
                  ], 8, O3)) : $("", !0)
                ], 8, s3),
                Xo.value ? (m(), _("p", fN, h(Xo.value), 1)) : $("", !0),
                Sr.value ? (m(), _("p", pN, h(Sr.value), 1)) : $("", !0),
                wr.value ? (m(), _("p", hN, h(wr.value), 1)) : $("", !0),
                l("div", vN, [
                  xt.loading ? (m(), _("span", gN, h(g(b)("library", "Updating catalogue…")), 1)) : xt.completed ? (m(), _("span", bN, h(g(ui)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : $("", !0)
                ]),
                mr.value ? (m(), _("section", mN, [
                  l("p", yN, h(oa.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Va.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : Pn.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, h(yr.value), 9, _N),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, h(g(ui)("library", "%n item", "%n items", z.value.total)), 1),
                    N.value?.earliestYear && N.value?.latestYear ? (m(), _("span", SN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : $("", !0),
                    N.value?.datedCount ? (m(), _("span", CN, h(N.value.datedCount) + " " + h(g(b)("library", "dated")), 1)) : $("", !0),
                    N.value?.undatedCount > 0 ? (m(), _("span", kN, h(N.value.undatedCount) + " " + h(g(b)("library", "undated")), 1)) : $("", !0)
                  ], 8, wN),
                  br.value && N.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, h(g(b)("library", "Publication contents")), 1),
                    l("span", null, h(g(ui)("library", "%n item", "%n items", N.value.itemCount)), 1),
                    N.value.earliestYear && N.value.latestYear ? (m(), _("span", EN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : $("", !0),
                    l("span", null, h(N.value.datedCount) + " " + h(g(b)("library", "with issue/date coverage")), 1),
                    N.value.undatedCount > 0 ? (m(), _("span", AN, h(N.value.undatedCount) + " " + h(g(b)("library", "without dates yet")), 1)) : $("", !0),
                    l("span", null, h(g(b)("library", "read-only grouping")), 1)
                  ], 8, TN)) : $("", !0),
                  br.value && N.value?.issueGroups?.length ? (m(), _("section", xN, [
                    l("div", null, [
                      l("p", ON, h(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, h(g(b)("library", "Read-only issue/date grouping")), 9, NN)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(b)("library", "Visual issue strip")
                    }, [
                      (m(!0), _(ie, null, ke(N.value.issueGroups, (s) => (m(), _("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, h(s.label), 1),
                        l("strong", null, h(s.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        l("small", null, h(g(ui)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, RN))), 128))
                    ], 8, LN),
                    N.value.gapRanges?.length ? (m(), _("p", IN, h(g(b)("library", "Gap")) + ": " + h(N.value.gapRanges.join(", ")), 1)) : $("", !0),
                    (m(!0), _(ie, null, ke(N.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, h(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ie, null, ke(s.items, (O, W) => (m(), _("li", {
                          key: O.itemId
                        }, [
                          l("span", PN, h(O.issueLabel), 1),
                          l("a", {
                            href: O.detailsUrl || "#"
                          }, h(O.title), 9, $N),
                          l("small", null, [
                            ge(h(O.publicationType), 1),
                            O.publicationDate ? (m(), _(ie, { key: 0 }, [
                              ge(" · " + h(O.publicationDate), 1)
                            ], 64)) : $("", !0)
                          ]),
                          l("small", FN, [
                            W > 0 ? (m(), _(ie, { key: 0 }, [
                              ge(h(g(b)("library", "Previous issue")), 1)
                            ], 64)) : $("", !0),
                            W > 0 && W < s.items.length - 1 ? (m(), _(ie, { key: 1 }, [
                              ge(" · ")
                            ], 64)) : $("", !0),
                            W < s.items.length - 1 ? (m(), _(ie, { key: 2 }, [
                              ge(h(g(b)("library", "Next issue")), 1)
                            ], 64)) : $("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    N.value.unknownIssueItems?.length ? (m(), _("details", DN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, h(g(b)("library", "Unknown issue/date")) + " · " + h(N.value.unknownIssueItems.length), 9, MN)
                    ])) : $("", !0)
                  ])) : $("", !0),
                  l("p", null, [
                    l("a", {
                      href: gt.value,
                      class: "button secondary library-discovery-back-link"
                    }, h(g(b)("library", "Back to full catalogue")), 9, zN)
                  ])
                ])) : $("", !0),
                l("div", UN, [
                  l("p", jN, [
                    ge(h(g(b)("library", "Showing")) + " " + h(z.value.from) + "–" + h(z.value.to) + " " + h(g(b)("library", "of")) + " " + h(z.value.total) + " " + h(g(b)("library", "catalogue items")), 1),
                    ue.value.length > 0 ? (m(), _("span", BN, [
                      c[127] || (c[127] = ge(" · ", -1)),
                      l("a", {
                        href: ba(),
                        onClick: ye(ma, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, HN)
                    ])) : $("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", KN, [
                      ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", GN, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, h(g(b)("library", "Previous")), 9, qN)) : (m(), _("span", WN, h(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, h(g(b)("library", "Next")), 9, YN)) : (m(), _("span", XN, h(g(b)("library", "Next")), 1))
                  ], 8, VN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: be(["library-empty-content", { "library-first-run-guidance": Bi.value || tn.value, "library-filter-empty-state": ri.value && !Bi.value && !tn.value }]),
                  role: "status"
                }, [
                  Bi.value ? (m(), _(ie, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, h(g(b)("library", "Start with one Library root")), 9, ZN),
                    l("p", JN, [
                      l("a", {
                        href: Nn.value,
                        class: "button primary"
                      }, h(g(b)("library", "Add a Library root")), 9, QN),
                      l("span", eL, h(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : tn.value ? (m(), _(ie, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, h(g(b)("library", "No enabled Library roots")), 9, tL),
                    l("p", iL, [
                      l("a", {
                        href: Nn.value,
                        class: "button primary"
                      }, h(g(b)("library", "Open Library settings")), 9, nL)
                    ])
                  ], 64)) : ri.value ? (m(), _(ie, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, h(g(b)("library", "No items match these filters")), 9, aL),
                    ue.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ie, null, ke(ue.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Rr(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: ye((O) => Ir(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ge(h(s.label), 1),
                          s.displayValue ? (m(), _(ie, { key: 0 }, [
                            ge(":")
                          ], 64)) : $("", !0)
                        ]),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          c[128] || (c[128] = ge(h(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, h(s.displayValue), 9, sL)
                        ], 64)) : $("", !0),
                        c[129] || (c[129] = ge()),
                        c[130] || (c[130] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, oL))), 128))
                    ], 8, rL)) : $("", !0),
                    nn.value ? (m(), _("p", lL, h(g(b)("library", "Try removing {filter}.", { filter: nn.value.displayValue ? `${nn.value.label}: ${nn.value.displayValue}` : nn.value.label })), 1)) : $("", !0),
                    l("p", cL, [
                      Sg.value ? (m(), _("a", {
                        key: 0,
                        href: lb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: c[102] || (c[102] = ye((s) => Ir("q"), ["prevent"]))
                      }, h(g(b)("library", "Clear search")), 9, uL)) : $("", !0),
                      ue.value.length > 0 ? (m(), _("a", {
                        key: 1,
                        href: ba(),
                        class: "button primary",
                        onClick: ye(ma, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, dL)) : $("", !0)
                    ])
                  ], 64)) : (m(), _(ie, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, h(g(b)("library", "No catalogue items yet")), 9, fL),
                    l("p", pL, [
                      l("a", {
                        href: Nn.value,
                        class: "button primary"
                      }, h(g(b)("library", "Run a scan from settings")), 9, hL)
                    ])
                  ], 64))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("label", vL, [
                  l("input", {
                    type: "checkbox",
                    checked: Oi.value.length === y.value.length,
                    onChange: Ng
                  }, null, 40, gL),
                  ge(" " + h(g(b)("library", "Select all publications on this page")), 1)
                ])) : $("", !0),
                y.value.length > 0 && zt.value === "list" ? (m(), _("ul", bL, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: be(["library-catalogue-list-row", { "library-catalogue-list-row--selected": es.value.has(Number(s.id)), "library-catalogue-list-row--open": $n.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", mL, [
                      l("input", {
                        type: "checkbox",
                        checked: es.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => kd(s.id, O.currentTarget.checked)
                      }, null, 40, yL)
                    ]),
                    l("div", _L, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (O) => Hi(s, O)
                      }, [
                        l("bdi", SL, h(s.title), 1)
                      ], 8, wL),
                      s.creators ? (m(), _("span", CL, [
                        l("bdi", kL, h(s.creators), 1)
                      ])) : $("", !0)
                    ]),
                    l("dl", TL, [
                      s.publication ? (m(), _("div", EL, [
                        l("dt", null, h(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", AL, h(s.publication), 1)
                        ])
                      ])) : $("", !0),
                      s.publicationDate ? (m(), _("div", xL, [
                        l("dt", null, h(g(b)("library", "Publication date")), 1),
                        l("dd", null, h(s.publicationDate), 1)
                      ])) : $("", !0),
                      s.extension || s.publicationType ? (m(), _("div", OL, [
                        l("dt", null, h(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: be(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, h(s.extension ? ds(s.extension) : s.publicationType), 11, NL)
                        ])
                      ])) : $("", !0),
                      s.shelf ? (m(), _("div", LL, [
                        l("dt", null, h(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", RL, h(s.shelf), 1)
                        ])
                      ])) : $("", !0)
                    ]),
                    l("div", IL, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => gi(s, O)
                      }, h(g(b)("library", "Open")), 9, PL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => Hi(s, O)
                      }, h(g(b)("library", "Details")), 9, $L)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: be(["library-cover-gallery", te.value])
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: be(["library-cover-card", { "library-cover-card--cover-loaded": Pr(s) === "loaded", "library-cover-card--cover-error": Pr(s) === "error", "library-cover-card--selected": es.value.has(Number(s.id)), "library-cover-card--open": $n.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", FL, [
                      l("input", {
                        type: "checkbox",
                        checked: es.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => kd(s.id, O.currentTarget.checked)
                      }, null, 40, DL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": $n.value && Number(ca.value) === Number(s.id) ? "true" : "false",
                      onClick: (O) => Hi(s, O)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, h(g(b)("library", "Details")), 9, zL),
                      l("span", UL, [
                        Pr(s) === "loading" ? (m(), _("span", jL)) : $("", !0),
                        l("img", {
                          class: be(["library-cover-image", { "library-cover-image--loaded": Pr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (O) => bb(s),
                          onError: (O) => mb(s)
                        }, null, 42, BL),
                        Pr(s) === "error" ? (m(), _("span", HL, h(g(b)("library", "Cover unavailable")), 1)) : $("", !0)
                      ])
                    ], 8, ML),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ye((O) => tf(s, O), ["prevent"])
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
                        onClick: ye((O) => tf(s, O), ["prevent"])
                      }, h(s.starred ? "★" : "☆"), 11, qL),
                      Fr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, h(Fr[s.id]), 9, WL)) : $("", !0)
                    ], 40, VL),
                    l("div", YL, [
                      l("div", XL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", QL, h(s.title), 1)
                          ], 8, JL)
                        ], 8, ZL),
                        s.creators ? (m(), _("p", eR, [
                          l("bdi", tR, h(s.creators), 1)
                        ])) : $("", !0),
                        Jd(s) ? (m(), _("p", iR, [
                          l("bdi", nR, h(Jd(s)), 1)
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
                    ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", oR, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, sR)) : (m(), _("span", lR, h(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, cR)) : (m(), _("span", uR, h(g(b)("library", "Next")), 1))
                ], 8, aR)) : $("", !0)
              ], 10, Cx))
            ], 8, n2)
          ]),
          _: 1
        }),
        Ae(g(Xk), {
          ref_key: "sidebarComponent",
          ref: da,
          class: "library-native-item-sidebar",
          open: $n.value,
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
              }, h(Ce.value?.title || g(b)("library", "Publication details")), 513),
              Xt.loading && !Ce.value ? (m(), _("p", fR, h(g(b)("library", "Loading publication details…")), 1)) : Xt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xt.missing ? "status" : "alert"
              }, [
                l("p", null, h(Xt.error), 1),
                Xt.missing ? $("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: c[103] || (c[103] = (s) => Er(ca.value, { historyMode: "none" }))
                }, h(g(b)("library", "Try again")), 1))
              ], 8, pR)) : Ce.value ? (m(), _(ie, { key: 2 }, [
                l("p", hR, h(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", vR, [
                  l("span", gR, h(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, bR),
                  l("div", mR, [
                    l("p", yR, [
                      l("bdi", _R, h(Ce.value.publicationType || g(b)("library", "Publication")), 1),
                      Ce.value.extension ? (m(), _("span", wR, [
                        c[132] || (c[132] = ge(" · ", -1)),
                        l("bdi", SR, h(ds(Ce.value.extension)), 1)
                      ])) : $("", !0)
                    ]),
                    l("div", CR, [
                      l("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: c[104] || (c[104] = (s) => gi(Ce.value, s))
                      }, h(g(b)("library", "Open")), 9, kR),
                      Ae(g(pd), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Pe(() => [
                          Ae(g(au), {
                            href: Ce.value.filesUrl
                          }, {
                            default: Pe(() => [
                              ge(h(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(au), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: Pe(() => [
                              ge(h(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Ae(g(au), {
                            href: Ce.value.detailsUrl
                          }, {
                            default: Pe(() => [
                              ge(h(g(b)("library", "Maintenance (legacy)")), 1)
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
                  (m(), _(ie, null, ke(Pg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: be({ active: ua.value === s.key }),
                    "aria-current": ua.value === s.key ? "page" : void 0,
                    onClick: (O) => ua.value = s.key
                  }, h(g(b)("library", s.label)), 11, ER)), 64))
                ], 8, TR),
                ua.value === "overview" ? (m(), _("section", AR, [
                  l("h3", xR, h(g(b)("library", "Overview")), 1),
                  Ed.value ? (m(), _("p", OR, [
                    l("bdi", NR, h(Ed.value), 1)
                  ])) : $("", !0),
                  l("dl", LR, [
                    Ce.value.publication ? (m(), _("div", RR, [
                      l("dt", null, h(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: as("publication", Ce.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: c[105] || (c[105] = (s) => rs(s, "publication", Ce.value.publication))
                        }, [
                          l("bdi", PR, h(Ce.value.publication), 1)
                        ], 8, IR)
                      ])
                    ])) : $("", !0),
                    Ce.value.publicationDate ? (m(), _("div", $R, [
                      l("dt", null, h(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        pa.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: as("year", pa.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: c[106] || (c[106] = (s) => rs(s, "year", pa.value))
                        }, h(pa.value), 9, FR)) : $("", !0),
                        pa.value && Ce.value.publicationDate !== pa.value ? (m(), _("span", DR, " · ")) : $("", !0),
                        Ce.value.publicationDate !== pa.value ? (m(), _("span", MR, h(Ce.value.publicationDate), 1)) : $("", !0)
                      ])
                    ])) : $("", !0),
                    Ce.value.publisher ? (m(), _("div", zR, [
                      l("dt", null, h(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: as("publisher", Ce.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: c[107] || (c[107] = (s) => rs(s, "publisher", Ce.value.publisher))
                        }, [
                          l("bdi", jR, h(Ce.value.publisher), 1)
                        ], 8, UR)
                      ])
                    ])) : $("", !0),
                    Ad.value.length ? (m(), _("div", BR, [
                      l("dt", null, h(g(b)("library", "Language")), 1),
                      l("dd", HR, [
                        (m(!0), _(ie, null, ke(Ad.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: as("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (O) => rs(O, "language", s)
                        }, [
                          l("bdi", KR, h(s), 1)
                        ], 8, VR))), 128))
                      ])
                    ])) : $("", !0),
                    Ce.value.shelf ? (m(), _("div", GR, [
                      l("dt", null, h(g(b)("library", "Shelf")), 1),
                      l("dd", null, h(Ce.value.shelf), 1)
                    ])) : $("", !0)
                  ])
                ])) : ua.value === "metadata" ? (m(), _("section", qR, [
                  l("h3", WR, h(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ye(jg, ["prevent"])
                  }, [
                    l("label", null, [
                      ge(h(g(b)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": c[108] || (c[108] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      ge(h(g(b)("library", "Publication date")), 1),
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
                      l("legend", null, h(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ie, null, ke(Ut.identifiers, (s, O) => (m(), _("div", {
                        key: O,
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
                          onClick: (W) => Ug(O)
                        }, h(g(b)("library", "Remove")), 9, JR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: zg
                      }, h(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", QR, h(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Ni.error ? (m(), _("p", e4, h(Ni.error), 1)) : Ni.saved ? (m(), _("p", t4, h(g(b)("library", "Metadata saved.")), 1)) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Ni.saving
                    }, h(Ni.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, i4)
                  ], 32),
                  os(Ce.value).length ? (m(), _("section", n4, [
                    l("h4", a4, h(g(b)("library", "Scanner suggestions")), 1),
                    l("p", r4, h(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ie, null, ke(os(Ce.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, h(s.field) + " · " + h(s.sourceProvenance), 1),
                        l("dd", null, [
                          ge(h(g(b)("library", "Current")) + ": " + h(s.currentValue || "—"), 1),
                          c[133] || (c[133] = l("br", null, null, -1)),
                          ge(h(g(b)("library", "Suggestion")) + ": " + h(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : $("", !0)
                ])) : (m(), _("section", o4, [
                  l("h3", s4, h(g(b)("library", "Activity")), 1),
                  l("dl", l4, [
                    l("div", null, [
                      l("dt", null, h(g(b)("library", "Scan status")), 1),
                      l("dd", null, h(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (m(), _("div", c4, [
                      l("dt", null, h(g(b)("library", "Workflow")), 1),
                      l("dd", null, h(Ce.value.workflowStatus), 1)
                    ])) : $("", !0),
                    Ce.value.metadataSource ? (m(), _("div", u4, [
                      l("dt", null, h(g(b)("library", "Metadata source")), 1),
                      l("dd", null, h(Ce.value.metadataSource), 1)
                    ])) : $("", !0),
                    Ce.value.cachedPath ? (m(), _("div", d4, [
                      l("dt", null, h(g(b)("library", "File")), 1),
                      l("dd", f4, [
                        Ce.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: c[110] || (c[110] = (s) => gi(Ce.value, s))
                        }, [
                          l("bdi", h4, h(Ce.value.cachedPath), 1)
                        ], 8, p4)) : (m(), _("bdi", v4, h(Ce.value.cachedPath), 1))
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
                    disabled: !is.value,
                    onClick: c[111] || (c[111] = (s) => ss(is.value))
                  }, h(g(b)("library", "Previous item")), 9, b4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !ns.value,
                    onClick: c[112] || (c[112] = (s) => ss(ns.value))
                  }, h(g(b)("library", "Next item")), 9, m4)
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
  const i = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  n_(S4, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  C4(), console.error("[library] Vue startup failed", e);
}
