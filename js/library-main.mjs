// @__NO_SIDE_EFFECTS__
function Ec(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ue = {}, Pa = [], bn = () => {
}, Qd = () => !1, Do = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mo = (e) => e.startsWith("onUpdate:"), ct = Object.assign, Tc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mp = Object.prototype.hasOwnProperty, Ve = (e, t) => Mp.call(e, t), be = Array.isArray, xi = (e) => Qr(e) === "[object Map]", fa = (e) => Qr(e) === "[object Set]", ou = (e) => Qr(e) === "[object Date]", ke = (e) => typeof e == "function", tt = (e) => typeof e == "string", Nn = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", ef = (e) => (Ke(e) || ke(e)) && ke(e.then) && ke(e.catch), tf = Object.prototype.toString, Qr = (e) => tf.call(e), Fp = (e) => Qr(e).slice(8, -1), nf = (e) => Qr(e) === "[object Object]", kc = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yr = /* @__PURE__ */ Ec(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $p = /-\w/g, Dt = Fo(
  (e) => e.replace($p, (t) => t.slice(1).toUpperCase())
), zp = /\B([A-Z])/g, vi = Fo(
  (e) => e.replace(zp, "-$1").toLowerCase()
), $o = Fo((e) => e.charAt(0).toUpperCase() + e.slice(1)), ol = Fo(
  (e) => e ? `on${$o(e)}` : ""
), St = (e, t) => !Object.is(e, t), Os = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, af = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, zo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Up = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let lu;
const Uo = () => lu || (lu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yn(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? Vp(i) : yn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || Ke(e))
    return e;
}
const Bp = /;(?![^(]*\))/g, Hp = /:([^]+)/, jp = /\/\*[^]*?\*\//g;
function Vp(e) {
  const t = {};
  return e.replace(jp, "").split(Bp).forEach((n) => {
    if (n) {
      const i = n.split(Hp);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (be(e))
    for (let n = 0; n < e.length; n++) {
      const i = Te(e[n]);
      i && (t += i + " ");
    }
  else if (Ke(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ps(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Te(t)), n && (e.style = yn(n)), e;
}
const Kp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gp = /* @__PURE__ */ Ec(Kp);
function rf(e) {
  return !!e || e === "";
}
function qp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ii(e[i], t[i]);
  return n;
}
function cu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Ii(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ii(e, t) {
  if (e === t) return !0;
  let n = ou(e), i = ou(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Nn(e), i = Nn(t), n || i)
    return e === t;
  if (n = be(e), i = be(t), n || i)
    return n && i ? qp(e, t) : !1;
  if (n = Ke(e), i = Ke(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = xi(e), i = xi(t), n || i || (n = fa(e), i = fa(t), n || i))
      return n && i ? cu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Ii(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wp(e, t) {
  return e.findIndex((n) => Ii(n, t));
}
const sf = (e) => !!(e && e.__v_isRef === !0), d = (e) => tt(e) ? e : e == null ? "" : be(e) || Ke(e) && (e.toString === tf || !ke(e.toString)) ? sf(e) ? d(e.value) : JSON.stringify(e, of, 2) : String(e), of = (e, t) => sf(t) ? of(e, t.value) : xi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[ll(i, r) + " =>"] = a, n),
    {}
  )
} : fa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ll(n))
} : Nn(t) ? ll(t) : Ke(t) && !be(t) && !nf(t) ? String(t) : t, ll = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Yp(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Ct;
class Zp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ct && (Ct.active ? (this.parent = Ct, this.index = (Ct.scopes || (Ct.scopes = [])).push(
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
      const n = Ct;
      try {
        return Ct = this, t();
      } finally {
        Ct = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ct, Ct = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ct === this)
        Ct = this.prevScope;
      else {
        let t = Ct;
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
function Xp() {
  return Ct;
}
let Qe;
const cl = /* @__PURE__ */ new WeakSet();
class lf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ct && (Ct.active ? Ct.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cl.has(this) && (cl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || uf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, uu(this), df(this);
    const t = Qe, n = On;
    Qe = this, On = !0;
    try {
      return this.fn();
    } finally {
      ff(this), Qe = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        xc(t);
      this.deps = this.depsTail = void 0, uu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kl(this) && this.run();
  }
  get dirty() {
    return Kl(this);
  }
}
let cf = 0, _r, wr;
function uf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = wr, wr = e;
    return;
  }
  e.next = _r, _r = e;
}
function Ac() {
  cf++;
}
function Oc() {
  if (--cf > 0)
    return;
  if (wr) {
    let t = wr;
    for (wr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _r; ) {
    let t = _r;
    for (_r = void 0; t; ) {
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
function df(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ff(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), xc(i), Jp(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Kl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dr) || (e.globalVersion = Dr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Qe, i = On;
  Qe = e, On = !0;
  try {
    df(e);
    const a = e.fn(e._value);
    (t.version === 0 || St(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Qe = n, On = i, ff(e), e.flags &= -3;
  }
}
function xc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      xc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const pf = [];
function di() {
  pf.push(On), On = !1;
}
function fi() {
  const e = pf.pop();
  On = e === void 0 ? !0 : e;
}
function uu(e) {
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
let Dr = 0;
class Qp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Qe || !On || Qe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Qe)
      n = this.activeLink = new Qp(Qe, this), Qe.deps ? (n.prevDep = Qe.depsTail, Qe.depsTail.nextDep = n, Qe.depsTail = n) : Qe.deps = Qe.depsTail = n, vf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Qe.depsTail, n.nextDep = void 0, Qe.depsTail.nextDep = n, Qe.depsTail = n, Qe.deps === n && (Qe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Dr++, this.notify(t);
  }
  notify(t) {
    Ac();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Oc();
    }
  }
}
function vf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        vf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Gl = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ Symbol(
  ""
), ql = /* @__PURE__ */ Symbol(
  ""
), Mr = /* @__PURE__ */ Symbol(
  ""
);
function Lt(e, t, n) {
  if (On && Qe) {
    let i = Gl.get(e);
    i || Gl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Bo()), a.map = i, a.key = n), a.track();
  }
}
function ii(e, t, n, i, a, r) {
  const s = Gl.get(e);
  if (!s) {
    Dr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Ac(), t === "clear")
    s.forEach(o);
  else {
    const l = be(e), h = l && kc(n);
    if (l && n === "length") {
      const c = Number(i);
      s.forEach((p, y) => {
        (y === "length" || y === Mr || !Nn(y) && y >= c) && o(p);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), h && o(s.get(Mr)), t) {
        case "add":
          l ? h && o(s.get("length")) : (o(s.get(ca)), xi(e) && o(s.get(ql)));
          break;
        case "delete":
          l || (o(s.get(ca)), xi(e) && o(s.get(ql)));
          break;
        case "set":
          xi(e) && o(s.get(ca));
          break;
      }
  }
  Oc();
}
function Aa(e) {
  const t = /* @__PURE__ */ Be(e);
  return t === e ? t : (Lt(t, "iterate", Mr), /* @__PURE__ */ _n(e) ? t : t.map(Rn));
}
function Ho(e) {
  return Lt(e = /* @__PURE__ */ Be(e), "iterate", Mr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ hi(e) ? Ha(/* @__PURE__ */ ua(e) ? Rn(t) : t) : Rn(t);
}
const ev = {
  __proto__: null,
  [Symbol.iterator]() {
    return ul(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Aa(this).concat(
      ...e.map((t) => be(t) ? Aa(t) : t)
    );
  },
  entries() {
    return ul(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
  },
  every(e, t) {
    return Zn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Zn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Un(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Zn(
      this,
      "find",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Zn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Zn(
      this,
      "findLast",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Zn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Zn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return dl(this, "includes", e);
  },
  indexOf(...e) {
    return dl(this, "indexOf", e);
  },
  join(e) {
    return Aa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return dl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Zn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return nr(this, "pop");
  },
  push(...e) {
    return nr(this, "push", e);
  },
  reduce(e, ...t) {
    return du(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return du(this, "reduceRight", e, t);
  },
  shift() {
    return nr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Zn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return nr(this, "splice", e);
  },
  toReversed() {
    return Aa(this).toReversed();
  },
  toSorted(e) {
    return Aa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Aa(this).toSpliced(...e);
  },
  unshift(...e) {
    return nr(this, "unshift", e);
  },
  values() {
    return ul(this, "values", (e) => Un(this, e));
  }
};
function ul(e, t, n) {
  const i = Ho(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ _n(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const tv = Array.prototype;
function Zn(e, t, n, i, a, r) {
  const s = Ho(e), o = s !== e && !/* @__PURE__ */ _n(e), l = s[t];
  if (l !== tv[t]) {
    const p = l.apply(e, r);
    return o ? Rn(p) : p;
  }
  let h = n;
  s !== e && (o ? h = function(p, y) {
    return n.call(this, Un(e, p), y, e);
  } : n.length > 2 && (h = function(p, y) {
    return n.call(this, p, y, e);
  }));
  const c = l.call(s, h, i);
  return o && a ? a(c) : c;
}
function du(e, t, n, i) {
  const a = Ho(e), r = a !== e && !/* @__PURE__ */ _n(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(h, c, p) {
    return o && (o = !1, h = Un(e, h)), n.call(this, h, Un(e, c), p, e);
  }) : n.length > 3 && (s = function(h, c, p) {
    return n.call(this, h, c, p, e);
  }));
  const l = a[t](s, ...i);
  return o ? Un(e, l) : l;
}
function dl(e, t, n) {
  const i = /* @__PURE__ */ Be(e);
  Lt(i, "iterate", Mr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Lc(n[0]) ? (n[0] = /* @__PURE__ */ Be(n[0]), i[t](...n)) : a;
}
function nr(e, t, n = []) {
  di(), Ac();
  const i = (/* @__PURE__ */ Be(e))[t].apply(e, n);
  return Oc(), fi(), i;
}
const nv = /* @__PURE__ */ Ec("__proto__,__v_isRef,__isVue"), mf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nn)
);
function iv(e) {
  Nn(e) || (e = String(e));
  const t = /* @__PURE__ */ Be(this);
  return Lt(t, "has", e), t.hasOwnProperty(e);
}
class gf {
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
      return i === (a ? r ? hv : wf : r ? _f : yf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = be(t);
    if (!a) {
      let l;
      if (s && (l = ev[n]))
        return l;
      if (n === "hasOwnProperty")
        return iv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Mt(t) ? t : i
    );
    if ((Nn(n) ? mf.has(n) : nv(n)) || (a || Lt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Mt(o)) {
      const l = s && kc(n) ? o : o.value;
      return a && Ke(l) ? /* @__PURE__ */ Fr(l) : l;
    }
    return Ke(o) ? a ? /* @__PURE__ */ Fr(o) : /* @__PURE__ */ jt(o) : o;
  }
}
class bf extends gf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = be(t) && kc(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ hi(r);
      if (!/* @__PURE__ */ _n(i) && !/* @__PURE__ */ hi(i) && (r = /* @__PURE__ */ Be(r), i = /* @__PURE__ */ Be(i)), !s && /* @__PURE__ */ Mt(r) && !/* @__PURE__ */ Mt(i))
        return h || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ve(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Mt(t) ? t : a
    );
    return t === /* @__PURE__ */ Be(a) && l && (o ? St(i, r) && ii(t, "set", n, i) : ii(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ve(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ii(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Nn(n) || !mf.has(n)) && Lt(t, "has", n), i;
  }
  ownKeys(t) {
    return Lt(
      t,
      "iterate",
      be(t) ? "length" : ca
    ), Reflect.ownKeys(t);
  }
}
class av extends gf {
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
const rv = /* @__PURE__ */ new bf(), sv = /* @__PURE__ */ new av(), ov = /* @__PURE__ */ new bf(!0);
const Wl = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function lv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Be(a), s = xi(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, h = a[e](...i), c = n ? Wl : t ? Ha : Rn;
    return !t && Lt(
      r,
      "iterate",
      l ? ql : ca
    ), ct(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: p, done: y } = h.next();
          return y ? { value: p, done: y } : {
            value: o ? [c(p[0]), c(p[1])] : c(p),
            done: y
          };
        }
      }
    );
  };
}
function vs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Be(r), o = /* @__PURE__ */ Be(a);
      e || (St(a, o) && Lt(s, "get", a), Lt(s, "get", o));
      const { has: l } = ps(s), h = t ? Wl : e ? Ha : Rn;
      if (l.call(s, a))
        return h(r.get(a));
      if (l.call(s, o))
        return h(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Lt(/* @__PURE__ */ Be(a), "iterate", ca), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Be(r), o = /* @__PURE__ */ Be(a);
      return e || (St(a, o) && Lt(s, "has", a), Lt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Be(o), h = t ? Wl : e ? Ha : Rn;
      return !e && Lt(l, "iterate", ca), o.forEach((c, p) => a.call(r, h(c), h(p), s));
    }
  };
  return ct(
    n,
    e ? {
      add: vs("add"),
      set: vs("set"),
      delete: vs("delete"),
      clear: vs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Be(this), s = ps(r), o = /* @__PURE__ */ Be(a), l = !t && !/* @__PURE__ */ _n(a) && !/* @__PURE__ */ hi(a) ? o : a;
        return s.has.call(r, l) || St(a, l) && s.has.call(r, a) || St(o, l) && s.has.call(r, o) || (r.add(l), ii(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ _n(r) && !/* @__PURE__ */ hi(r) && (r = /* @__PURE__ */ Be(r));
        const s = /* @__PURE__ */ Be(this), { has: o, get: l } = ps(s);
        let h = o.call(s, a);
        h || (a = /* @__PURE__ */ Be(a), h = o.call(s, a));
        const c = l.call(s, a);
        return s.set(a, r), h ? St(r, c) && ii(s, "set", a, r) : ii(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Be(this), { has: s, get: o } = ps(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Be(a), l = s.call(r, a)), o && o.call(r, a);
        const h = r.delete(a);
        return l && ii(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Be(this), r = a.size !== 0, s = a.clear();
        return r && ii(
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
    n[a] = lv(a, e, t);
  }), n;
}
function Nc(e, t) {
  const n = cv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ve(n, a) && a in i ? n : i,
    a,
    r
  );
}
const uv = {
  get: /* @__PURE__ */ Nc(!1, !1)
}, dv = {
  get: /* @__PURE__ */ Nc(!1, !0)
}, fv = {
  get: /* @__PURE__ */ Nc(!0, !1)
};
const yf = /* @__PURE__ */ new WeakMap(), _f = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), hv = /* @__PURE__ */ new WeakMap();
function pv(e) {
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
function jt(e) {
  return /* @__PURE__ */ hi(e) ? e : Rc(
    e,
    !1,
    rv,
    uv,
    yf
  );
}
// @__NO_SIDE_EFFECTS__
function vv(e) {
  return Rc(
    e,
    !1,
    ov,
    dv,
    _f
  );
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  return Rc(
    e,
    !0,
    sv,
    fv,
    wf
  );
}
function Rc(e, t, n, i, a) {
  if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = pv(Fp(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  return /* @__PURE__ */ hi(e) ? /* @__PURE__ */ ua(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Lc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Be(t) : e;
}
function mv(e) {
  return !Ve(e, "__v_skip") && Object.isExtensible(e) && af(e, "__v_skip", !0), e;
}
const Rn = (e) => Ke(e) ? /* @__PURE__ */ jt(e) : e, Ha = (e) => Ke(e) ? /* @__PURE__ */ Fr(e) : e;
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return Sf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Cf(e) {
  return Sf(e, !0);
}
function Sf(e, t) {
  return /* @__PURE__ */ Mt(e) ? e : new gv(e, t);
}
class gv {
  constructor(t, n) {
    this.dep = new Bo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Be(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ _n(t) || /* @__PURE__ */ hi(t);
    t = i ? t : /* @__PURE__ */ Be(t), St(t, n) && (this._rawValue = t, this._value = i ? t : Rn(t), this.dep.trigger());
  }
}
function f(e) {
  return /* @__PURE__ */ Mt(e) ? e.value : e;
}
function oi(e) {
  return ke(e) ? e() : f(e);
}
const bv = {
  get: (e, t, n) => t === "__v_raw" ? e : f(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Mt(a) && !/* @__PURE__ */ Mt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Ef(e) {
  return /* @__PURE__ */ ua(e) ? e : new Proxy(e, bv);
}
class yv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Bo(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function _v(e) {
  return new yv(e);
}
class wv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Qe !== this)
      return uf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cv(e, t, n = !1) {
  let i, a;
  return ke(e) ? i = e : (i = e.get, a = e.set), new wv(i, a, n);
}
const ms = {}, Ds = /* @__PURE__ */ new WeakMap();
let ea;
function Sv(e, t = !1, n = ea) {
  if (n) {
    let i = Ds.get(n);
    i || Ds.set(n, i = []), i.push(e);
  }
}
function Ev(e, t, n = Ue) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, h = ($) => a ? $ : /* @__PURE__ */ _n($) || a === !1 || a === 0 ? ai($, 1) : ai($);
  let c, p, y, S, x = !1, T = !1;
  if (/* @__PURE__ */ Mt(e) ? (p = () => e.value, x = /* @__PURE__ */ _n(e)) : /* @__PURE__ */ ua(e) ? (p = () => h(e), x = !0) : be(e) ? (T = !0, x = e.some(($) => /* @__PURE__ */ ua($) || /* @__PURE__ */ _n($)), p = () => e.map(($) => {
    if (/* @__PURE__ */ Mt($))
      return $.value;
    if (/* @__PURE__ */ ua($))
      return h($);
    if (ke($))
      return l ? l($, 2) : $();
  })) : ke(e) ? t ? p = l ? () => l(e, 2) : e : p = () => {
    if (y) {
      di();
      try {
        y();
      } finally {
        fi();
      }
    }
    const $ = ea;
    ea = c;
    try {
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      ea = $;
    }
  } : p = bn, t && a) {
    const $ = p, le = a === !0 ? 1 / 0 : a;
    p = () => ai($(), le);
  }
  const R = Xp(), L = () => {
    c.stop(), R && R.active && Tc(R.effects, c);
  };
  if (r && t) {
    const $ = t;
    t = (...le) => {
      const de = $(...le);
      return L(), de;
    };
  }
  let M = T ? new Array(e.length).fill(ms) : ms;
  const j = ($) => {
    if (!(!(c.flags & 1) || !c.dirty && !$))
      if (t) {
        const le = c.run();
        if ($ || a || x || (T ? le.some((de, Q) => St(de, M[Q])) : St(le, M))) {
          y && y();
          const de = ea;
          ea = c;
          try {
            const Q = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === ms ? void 0 : T && M[0] === ms ? [] : M,
              S
            ];
            M = le, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            ea = de;
          }
        }
      } else
        c.run();
  };
  return o && o(j), c = new lf(p), c.scheduler = s ? () => s(j, !1) : j, S = ($) => Sv($, !1, c), y = c.onStop = () => {
    const $ = Ds.get(c);
    if ($) {
      if (l)
        l($, 4);
      else
        for (const le of $) le();
      Ds.delete(c);
    }
  }, t ? i ? j(!0) : M = c.run() : s ? s(j.bind(null, !0), !0) : c.run(), L.pause = c.pause.bind(c), L.resume = c.resume.bind(c), L.stop = L, L;
}
function ai(e, t = 1 / 0, n) {
  if (t <= 0 || !Ke(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Mt(e))
    ai(e.value, t, n);
  else if (be(e))
    for (let i = 0; i < e.length; i++)
      ai(e[i], t, n);
  else if (fa(e) || xi(e))
    e.forEach((i) => {
      ai(i, t, n);
    });
  else if (nf(e)) {
    for (const i in e)
      ai(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ai(e[i], t, n);
  }
  return e;
}
function es(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    jo(a, t, n);
  }
}
function wn(e, t, n, i) {
  if (ke(e)) {
    const a = es(e, t, n, i);
    return a && ef(a) && a.catch((r) => {
      jo(r, t, n);
    }), a;
  }
  if (be(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(wn(e[r], t, n, i));
    return a;
  }
}
function jo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ue;
  if (t) {
    let o = t.parent;
    const l = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let p = 0; p < c.length; p++)
          if (c[p](e, l, h) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      di(), es(r, null, 10, [
        e,
        l,
        h
      ]), fi();
      return;
    }
  }
  Tv(e, n, a, i, s);
}
function Tv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Vt = [];
let Fn = -1;
const Da = [];
let Ai = null, Ra = 0;
const Tf = /* @__PURE__ */ Promise.resolve();
let Ms = null;
function li(e) {
  const t = Ms || Tf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kv(e) {
  let t = Fn + 1, n = Vt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Vt[i], r = $r(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Ic(e) {
  if (!(e.flags & 1)) {
    const t = $r(e), n = Vt[Vt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $r(n) ? Vt.push(e) : Vt.splice(kv(t), 0, e), e.flags |= 1, kf();
  }
}
function kf() {
  Ms || (Ms = Tf.then(xf));
}
function Af(e) {
  if (!be(e))
    Ai && e.id === -1 ? Ai.splice(Ra + 1, 0, e) : e.flags & 1 || (Da.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Da.push(e[t]);
  kf();
}
function fu(e, t, n = Fn + 1) {
  for (; n < Vt.length; n++) {
    const i = Vt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Vt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Of(e) {
  if (Da.length) {
    const t = [...new Set(Da)].sort(
      (n, i) => $r(n) - $r(i)
    );
    if (Da.length = 0, Ai) {
      for (let n = 0; n < t.length; n++)
        Ai.push(t[n]);
      return;
    }
    for (Ai = t, Ra = 0; Ra < Ai.length; Ra++) {
      const n = Ai[Ra];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ai = null, Ra = 0;
  }
}
const $r = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xf(e) {
  try {
    for (Fn = 0; Fn < Vt.length; Fn++) {
      const t = Vt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Vt.length; Fn++) {
      const t = Vt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Vt.length = 0, Of(), Ms = null, (Vt.length || Da.length) && xf();
  }
}
let Tt = null, Vo = null;
function Fs(e) {
  const t = Tt;
  return Tt = e, Vo = e && e.type.__scopeId || null, t;
}
function Av(e) {
  Vo = e;
}
function Ov() {
  Vo = null;
}
const xv = (e) => xe;
function xe(e, t = Tt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Hs(-1);
    const r = Fs(t), s = ci.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ci.length; l > s; l--) Uc();
      Fs(r), i._d && Hs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Je(e, t) {
  if (Tt === null)
    return e;
  const n = Zo(Tt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ue] = t[a];
    r && (ke(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ai(s), i.push({
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
function Wi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (di(), wn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), fi());
  }
}
function vn(e, t) {
  if (Pt) {
    let n = Pt.provides;
    const i = Pt.parent && Pt.parent.provides;
    i === n && (n = Pt.provides = Object.create(i)), n[e] = t;
  }
}
function It(e, t, n = !1) {
  const i = pa();
  if (i || Fa) {
    let a = Fa ? Fa._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && ke(t) ? t.call(i && i.proxy) : t;
  }
}
const Nv = /* @__PURE__ */ Symbol.for("v-scx"), Rv = () => It(Nv);
function Lv(e, t) {
  return Ko(e, null, t);
}
function Iv(e, t) {
  return Ko(
    e,
    null,
    { flush: "sync" }
  );
}
function Yt(e, t, n) {
  return Ko(e, t, n);
}
function Ko(e, t, n = Ue) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = ct({}, n), l = t && i || !t && r !== "post";
  let h;
  if (Vr) {
    if (r === "sync") {
      const S = Rv();
      h = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!l) {
      const S = () => {
      };
      return S.stop = bn, S.resume = bn, S.pause = bn, S;
    }
  }
  const c = Pt;
  o.call = (S, x, T) => wn(S, c, x, T);
  let p = !1;
  r === "post" ? o.scheduler = (S) => {
    Ht(S, c && c.suspense);
  } : r !== "sync" && (p = !0, o.scheduler = (S, x) => {
    x ? S() : Ic(S);
  }), o.augmentJob = (S) => {
    t && (S.flags |= 4), p && (S.flags |= 2, c && (S.id = c.uid, S.i = c));
  };
  const y = Ev(e, t, o);
  return Vr && (h ? h.push(y) : l && y()), y;
}
function Pv(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? Nf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  ke(t) ? r = t : (r = t.handler, n = t);
  const s = is(this), o = Ko(a, r.bind(i), n);
  return s(), o;
}
function Nf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ei = /* @__PURE__ */ new WeakMap(), Rf = /* @__PURE__ */ Symbol("_vte"), Go = (e) => e.__isTeleport, na = (e) => e && (e.disabled || e.disabled === ""), Dv = (e) => e && (e.defer || e.defer === ""), hu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, pu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Yl = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, Mv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, h) {
    const {
      mc: c,
      pc: p,
      pbc: y,
      o: { insert: S, querySelector: x, createText: T, createComment: R, parentNode: L }
    } = h, M = na(t.props);
    let { dynamicChildren: j } = t;
    const $ = (Q, te, D) => {
      Q.shapeFlag & 16 && c(
        Q.children,
        te,
        D,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (Q = t) => {
      const te = na(Q.props), D = Q.target = Yl(Q.props, x), se = Zl(D, Q, T, S);
      D && (s !== "svg" && hu(D) ? s = "svg" : s !== "mathml" && pu(D) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(D), te || ($(Q, D, se), fr(Q, !1)));
    }, de = (Q) => {
      const te = () => {
        if (Ei.get(Q) === te) {
          if (Ei.delete(Q), na(Q.props)) {
            const D = L(Q.el) || n;
            $(Q, D, Q.anchor), fr(Q, !0);
          }
          le(Q);
        }
      };
      Ei.set(Q, te), Ht(te, r);
    };
    if (e == null) {
      const Q = t.el = T(""), te = t.anchor = T("");
      if (S(Q, n, i), S(te, n, i), Dv(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      M && ($(t, n, te), fr(t, !0)), le();
    } else {
      t.el = e.el;
      const Q = t.anchor = e.anchor, te = Ei.get(e);
      if (te) {
        te.flags |= 8, Ei.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const D = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ve = na(e.props), Y = ve ? n : D, ne = ve ? Q : se;
      if (s === "svg" || hu(D) ? s = "svg" : (s === "mathml" || pu(D)) && (s = "mathml"), j ? (y(
        e.dynamicChildren,
        j,
        Y,
        a,
        r,
        s,
        o
      ), zc(e, t, !0)) : l || p(
        e,
        t,
        Y,
        ne,
        a,
        r,
        s,
        o,
        !1
      ), M)
        ve ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : gs(
          t,
          n,
          Q,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = Yl(t.props, x);
        P && (t.target = P, gs(
          t,
          P,
          null,
          h,
          0
        ));
      } else ve && gs(
        t,
        D,
        se,
        h,
        1
      );
      fr(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: h,
      targetAnchor: c,
      target: p,
      props: y
    } = e, S = na(y), x = r || !S, T = Ei.get(e);
    if (T && (T.flags |= 8, Ei.delete(e)), p && (a(h), a(c)), r && a(l), !T && (S || p) && s & 16)
      for (let R = 0; R < o.length; R++) {
        const L = o[R];
        i(
          L,
          t,
          n,
          x,
          !!L.dynamicChildren
        );
      }
  },
  move: gs,
  hydrate: Fv
};
function gs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: h, props: c } = e, p = r === 2;
  if (p && i(s, t, n), !Ei.has(e) && (!p || na(c)) && l & 16)
    for (let y = 0; y < h.length; y++)
      a(
        h[y],
        t,
        n,
        2
      );
  p && i(o, t, n);
}
function Fv(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: h, createText: c }
}, p) {
  function y(R, L) {
    let M = L;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, R._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function S(R, L) {
    L.anchor = p(
      s(R),
      L,
      o(R),
      n,
      i,
      a,
      r
    );
  }
  const x = t.target = Yl(
    t.props,
    l
  ), T = na(t.props);
  if (x) {
    const R = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (T ? (S(e, t), y(x, R), t.targetAnchor || Zl(
      x,
      t,
      c,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === x ? e : null
    )) : (t.anchor = s(e), y(x, R), t.targetAnchor || Zl(x, t, c, h), p(
      R && s(R),
      t,
      x,
      n,
      i,
      a,
      r
    ))), fr(t, T);
  } else T && t.shapeFlag & 16 && (S(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Lf = Mv;
function fr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Zl(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Rf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const mn = /* @__PURE__ */ Symbol("_leaveCb"), ir = /* @__PURE__ */ Symbol("_enterCb");
function $v() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Mi(() => {
    e.isMounted = !0;
  }), ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const fn = [Function, Array], If = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: fn,
  onEnter: fn,
  onAfterEnter: fn,
  onEnterCancelled: fn,
  // leave
  onBeforeLeave: fn,
  onLeave: fn,
  onAfterLeave: fn,
  onLeaveCancelled: fn,
  // appear
  onBeforeAppear: fn,
  onAppear: fn,
  onAfterAppear: fn,
  onAppearCancelled: fn
}, Pf = (e) => {
  const t = e.subTree;
  return t.component ? Pf(t.component) : t;
}, zv = {
  name: "BaseTransition",
  props: If,
  setup(e, { slots: t }) {
    const n = pa(), i = $v();
    return () => {
      const a = t.default && Ff(t.default(), !0), r = a && a.length ? Df(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? B() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Be(e), { mode: o } = s;
      if (i.isLeaving)
        return fl(r);
      const l = $s(r);
      if (!l)
        return fl(r);
      let h = Xl(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => h = p
      );
      l.type !== Et && zr(l, h);
      let c = n.subTree && $s(n.subTree);
      if (c && c.type !== Et && !ia(c, l) && Pf(n).type !== Et) {
        let p = Xl(
          c,
          s,
          i,
          n
        );
        if (zr(c, p), o === "out-in" && l.type !== Et)
          return i.isLeaving = !0, p.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, c = void 0;
          }, fl(r);
        o === "in-out" && l.type !== Et ? p.delayLeave = (y, S, x) => {
          const T = Mf(
            i,
            c
          );
          T[String(c.key)] = c, y[mn] = () => {
            S(), y[mn] = void 0, delete h.delayedLeave, c = void 0;
          }, h.delayedLeave = () => {
            x(), delete h.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Df(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Et) {
        t = n;
        break;
      }
  }
  return t;
}
const Uv = zv;
function Mf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Xl(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: h,
    onAfterEnter: c,
    onEnterCancelled: p,
    onBeforeLeave: y,
    onLeave: S,
    onAfterLeave: x,
    onLeaveCancelled: T,
    onBeforeAppear: R,
    onAppear: L,
    onAfterAppear: M,
    onAppearCancelled: j
  } = t, $ = String(e.key), le = Mf(n, e), de = (D, se) => {
    D && wn(
      D,
      i,
      9,
      se
    );
  }, Q = (D, se) => {
    const ve = se[1];
    de(D, se), be(D) ? D.every((Y) => Y.length <= 1) && ve() : D.length <= 1 && ve();
  }, te = {
    mode: s,
    persisted: o,
    beforeEnter(D) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = R || l;
        else
          return;
      D[mn] && D[mn](
        !0
        /* cancelled */
      );
      const ve = le[$];
      ve && ia(e, ve) && ve.el[mn] && ve.el[mn](), de(se, [D]);
    },
    enter(D) {
      if (le[$] === e) return;
      let se = h, ve = c, Y = p;
      if (!n.isMounted)
        if (r)
          se = L || h, ve = M || c, Y = j || p;
        else
          return;
      let ne = !1;
      D[ir] = (F) => {
        ne || (ne = !0, F ? de(Y, [D]) : de(ve, [D]), te.delayedLeave && te.delayedLeave(), D[ir] = void 0);
      };
      const P = D[ir].bind(null, !1);
      se ? Q(se, [D, P]) : P();
    },
    leave(D, se) {
      const ve = String(e.key);
      if (D[ir] && D[ir](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      de(y, [D]);
      let Y = !1;
      D[mn] = (P) => {
        Y || (Y = !0, se(), P ? de(T, [D]) : de(x, [D]), D[mn] = void 0, le[ve] === e && delete le[ve]);
      };
      const ne = D[mn].bind(null, !1);
      le[ve] = e, S ? Q(S, [D, ne]) : ne();
    },
    clone(D) {
      const se = Xl(
        D,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return te;
}
function fl(e) {
  if (qo(e))
    return e = Pi(e), e.children = null, e;
}
function $s(e) {
  if (!qo(e))
    return Go(e.type) && e.children ? Df(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ke(n.default))
      return n.default();
  }
}
function zr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    zr(
      Go(n.type) && $s(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ff(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ue ? (s.patchFlag & 128 && a++, i = i.concat(
      Ff(s.children, t, o)
    )) : (t || s.type !== Et) && i.push(o != null ? Pi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  return ke(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function $f(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Bv(e) {
  const t = pa(), n = /* @__PURE__ */ Cf(null);
  if (t) {
    const a = t.refs === Ue ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function vu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zs = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n, i, a = !1) {
  if (be(e)) {
    e.forEach(
      (T, R) => Cr(
        T,
        t && (be(t) ? t[R] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ma(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Cr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Zo(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, h = t && t.r, c = o.refs === Ue ? o.refs = {} : o.refs, p = o.setupState, y = /* @__PURE__ */ Be(p), S = p === Ue ? Qd : (T) => vu(c, T) ? !1 : Ve(y, T), x = (T, R) => !(R && vu(c, R));
  if (h != null && h !== l) {
    if (mu(t), tt(h))
      c[h] = null, S(h) && (p[h] = null);
    else if (/* @__PURE__ */ Mt(h)) {
      const T = t;
      x(h, T.k) && (h.value = null), T.k && (c[T.k] = null);
    }
  }
  if (ke(l))
    es(l, o, 12, [s, c]);
  else {
    const T = tt(l), R = /* @__PURE__ */ Mt(l);
    if (T || R) {
      const L = () => {
        if (e.f) {
          const M = T ? S(l) ? p[l] : c[l] : x() || !e.k ? l.value : c[e.k];
          if (a)
            be(M) && Tc(M, r);
          else if (be(M))
            M.includes(r) || M.push(r);
          else if (T)
            c[l] = [r], S(l) && (p[l] = c[l]);
          else {
            const j = [r];
            x(l, e.k) && (l.value = j), e.k && (c[e.k] = j);
          }
        } else T ? (c[l] = s, S(l) && (p[l] = s)) : R && (x(l, e.k) && (l.value = s), e.k && (c[e.k] = s));
      };
      if (s) {
        const M = () => {
          L(), zs.delete(e);
        };
        M.id = -1, zs.set(e, M), Ht(M, n);
      } else
        mu(e), L();
    }
  }
}
function mu(e) {
  const t = zs.get(e);
  t && (t.flags |= 8, zs.delete(e));
}
Uo().requestIdleCallback;
Uo().cancelIdleCallback;
const Ma = (e) => !!e.type.__asyncLoader, qo = (e) => e.type.__isKeepAlive;
function Hv(e, t) {
  zf(e, "a", t);
}
function jv(e, t) {
  zf(e, "da", t);
}
function zf(e, t, n = Pt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Wo(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      qo(a.parent.vnode) && Vv(i, t, n, a), a = a.parent;
  }
}
function Vv(e, t, n, i) {
  const a = Wo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ts(() => {
    Tc(i[t], a);
  }, n);
}
function Wo(e, t, n = Pt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      di();
      const o = is(n), l = wn(t, n, e, s);
      return o(), fi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const mi = (e) => (t, n = Pt) => {
  (!Vr || e === "sp") && Wo(e, (...i) => t(...i), n);
}, Uf = mi("bm"), Mi = mi("m"), Bf = mi(
  "bu"
), Kv = mi("u"), ja = mi(
  "bum"
), ts = mi("um"), Gv = mi(
  "sp"
), qv = mi("rtg"), Wv = mi("rtc");
function Yv(e, t = Pt) {
  Wo("ec", e, t);
}
const Pc = "components", Zv = "directives";
function $e(e, t) {
  return Mc(Pc, e, !0, t) || e;
}
const Hf = /* @__PURE__ */ Symbol.for("v-ndc");
function Dc(e) {
  return tt(e) ? Mc(Pc, e, !1) || e : e || Hf;
}
function gu(e) {
  return Mc(Zv, e);
}
function Mc(e, t, n = !0, i = !1) {
  const a = Tt || Pt;
  if (a) {
    const r = a.type;
    if (e === Pc) {
      const o = Lm(
        r,
        !1
      );
      if (o && (o === t || o === Dt(t) || o === $o(Dt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      bu(a[e] || r[e], t) || // global registration
      bu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function bu(e, t) {
  return e && (e[t] || e[Dt(t)] || e[$o(Dt(t))]);
}
function De(e, t, n, i) {
  let a;
  const r = n, s = be(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ ua(e);
    let l = !1, h = !1;
    o && (l = !/* @__PURE__ */ _n(e), h = /* @__PURE__ */ hi(e), e = Ho(e)), a = new Array(e.length);
    for (let c = 0, p = e.length; c < p; c++)
      a[c] = t(
        l ? h ? Ha(Rn(e[c])) : Rn(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Ke(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, h = o.length; l < h; l++) {
        const c = o[l];
        a[l] = t(e[c], c, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Ne(e, t, n, i, a, r) {
  if (n == null && (n = {}), Tt.ce || Tt.parent && Ma(Tt.parent) && Tt.parent.ce) {
    const h = n, c = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), b(), Me(
      ue,
      null,
      [we("slot", h, i && i())],
      c ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ci.length;
  b();
  let l;
  try {
    const h = s && jf(s(n)), c = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    l = Me(
      ue,
      {
        key: (c && !Nn(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let c = ci.length; c > o; c--) Uc();
    throw h;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function jf(e) {
  return e.some((t) => Br(t) ? !(t.type === Et || t.type === ue && !jf(t.children)) : !0) ? e : null;
}
const Jl = (e) => e ? dh(e) ? Zo(e) : Jl(e.parent) : null, Sr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ct(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Jl(e.parent),
    $root: (e) => Jl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ic(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = li.bind(e.proxy)),
    $watch: (e) => Pv.bind(e)
  })
), hl = (e, t) => e !== Ue && !e.__isScriptSetup && Ve(e, t), Xv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
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
        if (hl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ue && Ve(a, t))
          return s[t] = 2, a[t];
        if (Ve(r, t))
          return s[t] = 3, r[t];
        if (n !== Ue && Ve(n, t))
          return s[t] = 4, n[t];
        Ql && (s[t] = 0);
      }
    }
    const h = Sr[t];
    let c, p;
    if (h)
      return t === "$attrs" && Lt(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ue && Ve(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Ve(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return hl(a, t) ? (a[t] = n, !0) : i !== Ue && Ve(i, t) ? (i[t] = n, !0) : Ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ue && o[0] !== "$" && Ve(e, o) || hl(t, o) || Ve(r, o) || Ve(i, o) || Ve(Sr, o) || Ve(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Jv() {
  return Vf().slots;
}
function Qv() {
  return Vf().attrs;
}
function Vf(e) {
  const t = pa();
  return t.setupContext || (t.setupContext = hh(t));
}
function Us(e) {
  return be(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function em(e, t) {
  return !e || !t ? e || t : be(e) && be(t) ? e.concat(t) : ct({}, Us(e), Us(t));
}
let Ql = !0;
function tm(e) {
  const t = Gf(e), n = e.proxy, i = e.ctx;
  Ql = !1, t.beforeCreate && yu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: h,
    // lifecycle
    created: c,
    beforeMount: p,
    mounted: y,
    beforeUpdate: S,
    updated: x,
    activated: T,
    deactivated: R,
    beforeDestroy: L,
    beforeUnmount: M,
    destroyed: j,
    unmounted: $,
    render: le,
    renderTracked: de,
    renderTriggered: Q,
    errorCaptured: te,
    serverPrefetch: D,
    // public API
    expose: se,
    inheritAttrs: ve,
    // assets
    components: Y,
    directives: ne,
    filters: P
  } = t;
  if (h && nm(h, i, null), s)
    for (const re in s) {
      const ee = s[re];
      ke(ee) && (i[re] = ee.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    Ke(re) && (e.data = /* @__PURE__ */ jt(re));
  }
  if (Ql = !0, r)
    for (const re in r) {
      const ee = r[re], ce = ke(ee) ? ee.bind(n, n) : ke(ee.get) ? ee.get.bind(n, n) : bn, he = !ke(ee) && ke(ee.set) ? ee.set.bind(n) : bn, _e = q({
        get: ce,
        set: he
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (ge) => _e.value = ge
      });
    }
  if (o)
    for (const re in o)
      Kf(o[re], i, n, re);
  if (l) {
    const re = ke(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ee) => {
      vn(ee, re[ee]);
    });
  }
  c && yu(c, e, "c");
  function W(re, ee) {
    be(ee) ? ee.forEach((ce) => re(ce.bind(n))) : ee && re(ee.bind(n));
  }
  if (W(Uf, p), W(Mi, y), W(Bf, S), W(Kv, x), W(Hv, T), W(jv, R), W(Yv, te), W(Wv, de), W(qv, Q), W(ja, M), W(ts, $), W(Gv, D), be(se))
    if (se.length) {
      const re = e.exposed || (e.exposed = {});
      se.forEach((ee) => {
        Object.defineProperty(re, ee, {
          get: () => n[ee],
          set: (ce) => n[ee] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === bn && (e.render = le), ve != null && (e.inheritAttrs = ve), Y && (e.components = Y), ne && (e.directives = ne), D && $f(e);
}
function nm(e, t, n = bn) {
  be(e) && (e = ec(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ke(a) ? "default" in a ? r = It(
      a.from || i,
      a.default,
      !0
    ) : r = It(a.from || i) : r = It(a), /* @__PURE__ */ Mt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function yu(e, t, n) {
  wn(
    be(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Kf(e, t, n, i) {
  let a = i.includes(".") ? Nf(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    ke(r) && Yt(a, r);
  } else if (ke(e))
    Yt(a, e.bind(n));
  else if (Ke(e))
    if (be(e))
      e.forEach((r) => Kf(r, t, n, i));
    else {
      const r = ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      ke(r) && Yt(a, r, e);
    }
}
function Gf(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (h) => Bs(l, h, s, !0)
  ), Bs(l, t, s)), Ke(t) && r.set(t, l), l;
}
function Bs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Bs(e, r, n, !0), a && a.forEach(
    (s) => Bs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = im[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const im = {
  data: _u,
  props: wu,
  emits: wu,
  // objects
  methods: hr,
  computed: hr,
  // lifecycle
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  // assets
  components: hr,
  directives: hr,
  // watch
  watch: rm,
  // provide / inject
  provide: _u,
  inject: am
};
function _u(e, t) {
  return t ? e ? function() {
    return ct(
      ke(e) ? e.call(this, this) : e,
      ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function am(e, t) {
  return hr(ec(e), ec(t));
}
function ec(e) {
  if (be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function hr(e, t) {
  return e ? ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wu(e, t) {
  return e ? be(e) && be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ct(
    /* @__PURE__ */ Object.create(null),
    Us(e),
    Us(t ?? {})
  ) : t;
}
function rm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ct(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Bt(e[i], t[i]);
  return n;
}
function qf() {
  return {
    app: null,
    config: {
      isNativeTag: Qd,
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
let sm = 0;
function om(e, t) {
  return function(i, a = null) {
    ke(i) || (i = ct({}, i)), a != null && !Ke(a) && (a = null);
    const r = qf(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const h = r.app = {
      _uid: sm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Pm,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...p) {
        return s.has(c) || (c && ke(c.install) ? (s.add(c), c.install(h, ...p)) : ke(c) && (s.add(c), c(h, ...p))), h;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), h;
      },
      component(c, p) {
        return p ? (r.components[c] = p, h) : r.components[c];
      },
      directive(c, p) {
        return p ? (r.directives[c] = p, h) : r.directives[c];
      },
      mount(c, p, y) {
        if (!l) {
          const S = h._ceVNode || we(i, a);
          return S.appContext = r, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(S, c, y), l = !0, h._container = c, c.__vue_app__ = h, Zo(S.component);
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        l && (wn(
          o,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(c, p) {
        return r.provides[c] = p, h;
      },
      runWithContext(c) {
        const p = Fa;
        Fa = h;
        try {
          return c();
        } finally {
          Fa = p;
        }
      }
    };
    return h;
  };
}
let Fa = null;
function Wf(e, t, n = Ue) {
  const i = pa(), a = Dt(t), r = vi(t), s = Yf(e, a), o = _v((l, h) => {
    let c, p = Ue, y;
    return Iv(() => {
      const S = e[a];
      St(c, S) && (c = S, h());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(S) {
        const x = n.set ? n.set(S) : S;
        if (!St(x, c) && !(p !== Ue && St(S, p)))
          return;
        const T = i.vnode.props, R = !!(T && // check if parent has passed v-model
        (t in T || a in T || r in T) && (`onUpdate:${t}` in T || `onUpdate:${a}` in T || `onUpdate:${r}` in T));
        R || (c = S, h()), i.emit(`update:${t}`, x), St(S, p) && (St(S, x) && !St(x, y) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        R && p !== Ue && !St(x, c)) && h(), p = S, y = x;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ue : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Yf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${vi(t)}Modifiers`];
function lm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ue;
  let a = n;
  const r = t.startsWith("update:"), s = r && Yf(i, t.slice(7));
  s && (s.trim && (a = n.map((c) => tt(c) ? c.trim() : c)), s.number && (a = a.map(zo)));
  let o, l = i[o = ol(t)] || // also try camelCase event handler (#2249)
  i[o = ol(Dt(t))];
  !l && r && (l = i[o = ol(vi(t))]), l && wn(
    l,
    e,
    6,
    a
  );
  const h = i[o + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, wn(
      h,
      e,
      6,
      a
    );
  }
}
const cm = /* @__PURE__ */ new WeakMap();
function Zf(e, t, n = !1) {
  const i = n ? cm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!ke(e)) {
    const l = (h) => {
      const c = Zf(h, t, !0);
      c && (o = !0, ct(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ke(e) && i.set(e, null), null) : (be(r) ? r.forEach((l) => s[l] = null) : ct(s, r), Ke(e) && i.set(e, s), s);
}
function Yo(e, t) {
  return !e || !Do(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, vi(t)) || Ve(e, t));
}
function Cu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: h,
    renderCache: c,
    props: p,
    data: y,
    setupState: S,
    ctx: x,
    inheritAttrs: T
  } = e, R = Fs(e);
  let L, M;
  try {
    if (n.shapeFlag & 4) {
      const $ = a || i, le = $;
      L = Bn(
        h.call(
          le,
          $,
          c,
          p,
          S,
          y,
          x
        )
      ), M = o;
    } else {
      const $ = t;
      L = Bn(
        $.length > 1 ? $(
          p,
          { attrs: o, slots: s, emit: l }
        ) : $(
          p,
          null
        )
      ), M = t.props ? o : um(o);
    }
  } catch ($) {
    ci.length = 0, jo($, e, 1), L = we(Et);
  }
  let j = L;
  if (M && T !== !1) {
    const $ = Object.keys(M), { shapeFlag: le } = j;
    $.length && le & 7 && (r && $.some(Mo) && (M = dm(
      M,
      r
    )), j = Pi(j, M, !1, !0));
  }
  if (n.dirs && (j = Pi(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = Go(j.type) && $s(j) || j;
    zr($, n.transition);
  }
  return L = j, Fs(R), L;
}
const um = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Do(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dm = (e, t) => {
  const n = {};
  for (const i in e)
    (!Mo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function fm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Su(i, s, h) : !!s;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const y = c[p];
        if (Xf(s, i, y) && !Yo(h, y))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Su(i, s, h) : !0 : !!s;
  return !1;
}
function Su(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Xf(t, e, r) && !Yo(n, r))
      return !0;
  }
  return !1;
}
function Xf(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ke(i) && Ke(a) ? !Ii(i, a) : i !== a;
}
function hm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Jf = {}, Qf = () => Object.create(Jf), eh = (e) => Object.getPrototypeOf(e) === Jf;
function pm(e, t, n, i = !1) {
  const a = {}, r = Qf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), th(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ vv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function vm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Be(a), [l] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let y = c[p];
        if (Yo(e.emitsOptions, y))
          continue;
        const S = t[y];
        if (l)
          if (Ve(r, y))
            S !== r[y] && (r[y] = S, h = !0);
          else {
            const x = Dt(y);
            a[x] = tc(
              l,
              o,
              x,
              S,
              e,
              !1
            );
          }
        else
          S !== r[y] && (r[y] = S, h = !0);
      }
    }
  } else {
    th(e, t, a, r) && (h = !0);
    let c;
    for (const p in o)
      (!t || // for camelCase
      !Ve(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = vi(p)) === p || !Ve(t, c))) && (l ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[c] !== void 0) && (a[p] = tc(
        l,
        o,
        p,
        void 0,
        e,
        !0
      )) : delete a[p]);
    if (r !== o)
      for (const p in r)
        (!t || !Ve(t, p)) && (delete r[p], h = !0);
  }
  h && ii(e.attrs, "set", "");
}
function th(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (yr(l))
        continue;
      const h = t[l];
      let c;
      a && Ve(a, c = Dt(l)) ? !r || !r.includes(c) ? n[c] = h : (o || (o = {}))[c] = h : Yo(e.emitsOptions, l) || (!(l in i) || h !== i[l]) && (i[l] = h, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Be(n), h = o || Ue;
    for (let c = 0; c < r.length; c++) {
      const p = r[c];
      n[p] = tc(
        a,
        l,
        p,
        h[p],
        e,
        !Ve(h, p)
      );
    }
  }
  return s;
}
function tc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ve(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ke(l)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const c = is(a);
          i = h[n] = l.call(
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
    ] && (i === "" || i === vi(n)) && (i = !0));
  }
  return i;
}
const mm = /* @__PURE__ */ new WeakMap();
function nh(e, t, n = !1) {
  const i = n ? mm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!ke(e)) {
    const c = (p) => {
      l = !0;
      const [y, S] = nh(p, t, !0);
      ct(s, y), S && o.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Ke(e) && i.set(e, Pa), Pa;
  if (be(r))
    for (let c = 0; c < r.length; c++) {
      const p = Dt(r[c]);
      Eu(p) && (s[p] = Ue);
    }
  else if (r)
    for (const c in r) {
      const p = Dt(c);
      if (Eu(p)) {
        const y = r[c], S = s[p] = be(y) || ke(y) ? { type: y } : ct({}, y), x = S.type;
        let T = !1, R = !0;
        if (be(x))
          for (let L = 0; L < x.length; ++L) {
            const M = x[L], j = ke(M) && M.name;
            if (j === "Boolean") {
              T = !0;
              break;
            } else j === "String" && (R = !1);
          }
        else
          T = ke(x) && x.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = T, S[
          1
          /* shouldCastTrue */
        ] = R, (T || Ve(S, "default")) && o.push(p);
      }
    }
  const h = [s, o];
  return Ke(e) && i.set(e, h), h;
}
function Eu(e) {
  return e[0] !== "$" && !yr(e);
}
const Fc = (e) => e === "_" || e === "_ctx" || e === "$stable", $c = (e) => be(e) ? e.map(Bn) : [Bn(e)], gm = (e, t, n) => {
  if (t._n)
    return t;
  const i = xe((...a) => $c(t(...a)), n);
  return i._c = !1, i;
}, ih = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Fc(a)) continue;
    const r = e[a];
    if (ke(r))
      t[a] = gm(a, r, i);
    else if (r != null) {
      const s = $c(r);
      t[a] = () => s;
    }
  }
}, ah = (e, t) => {
  const n = $c(t);
  e.slots.default = () => n;
}, rh = (e, t, n) => {
  for (const i in t)
    (n || !Fc(i)) && (e[i] = t[i]);
}, bm = (e, t, n) => {
  const i = e.slots = Qf();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (rh(i, t, n), n && af(i, "_", a, !0)) : ih(t, i);
  } else t && ah(e, t);
}, ym = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ue;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : rh(a, t, n) : (r = !t.$stable, ih(t, a)), s = t;
  } else t && (ah(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Fc(o) && s[o] == null && delete a[o];
}, Ht = Em;
function _m(e) {
  return wm(e);
}
function wm(e, t) {
  const n = Uo();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: h,
    setElementText: c,
    parentNode: p,
    nextSibling: y,
    setScopeId: S = bn,
    insertStaticContent: x
  } = e, T = (g, w, A, O = null, N = null, z = null, V = void 0, K = null, X = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !ia(g, w) && (O = dt(g), ge(g, N, z, !0), g = null), w.patchFlag === -2 && (X = !1, w.dynamicChildren = null);
    const { type: H, ref: me, shapeFlag: ae } = w;
    switch (H) {
      case ns:
        R(g, w, A, O);
        break;
      case Et:
        L(g, w, A, O);
        break;
      case xs:
        g == null && M(w, A, O, V);
        break;
      case ue:
        Y(
          g,
          w,
          A,
          O,
          N,
          z,
          V,
          K,
          X
        );
        break;
      default:
        ae & 1 ? le(
          g,
          w,
          A,
          O,
          N,
          z,
          V,
          K,
          X
        ) : ae & 6 ? ne(
          g,
          w,
          A,
          O,
          N,
          z,
          V,
          K,
          X
        ) : (ae & 64 || ae & 128) && H.process(
          g,
          w,
          A,
          O,
          N,
          z,
          V,
          K,
          X,
          Zt
        );
    }
    me != null && N ? Cr(me, g && g.ref, z, w || g, !w) : me == null && g && g.ref != null && Cr(g.ref, null, z, g, !0);
  }, R = (g, w, A, O) => {
    if (g == null)
      i(
        w.el = o(w.children),
        A,
        O
      );
    else {
      const N = w.el = g.el;
      w.children !== g.children && h(N, w.children);
    }
  }, L = (g, w, A, O) => {
    g == null ? i(
      w.el = l(w.children || ""),
      A,
      O
    ) : w.el = g.el;
  }, M = (g, w, A, O) => {
    [g.el, g.anchor] = x(
      g.children,
      w,
      A,
      O,
      g.el,
      g.anchor
    );
  }, j = ({ el: g, anchor: w }, A, O) => {
    let N;
    for (; g && g !== w; )
      N = y(g), i(g, A, O), g = N;
    i(w, A, O);
  }, $ = ({ el: g, anchor: w }) => {
    let A;
    for (; g && g !== w; )
      A = y(g), a(g), g = A;
    a(w);
  }, le = (g, w, A, O, N, z, V, K, X) => {
    if (w.type === "svg" ? V = "svg" : w.type === "math" && (V = "mathml"), g == null)
      de(
        w,
        A,
        O,
        N,
        z,
        V,
        K,
        X
      );
    else {
      const H = g.el && g.el._isVueCE ? g.el : null;
      try {
        H && H._beginPatch(), D(
          g,
          w,
          N,
          z,
          V,
          K,
          X
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, de = (g, w, A, O, N, z, V, K) => {
    let X, H;
    const { props: me, shapeFlag: ae, transition: fe, dirs: ye } = g;
    if (X = g.el = s(
      g.type,
      z,
      me && me.is,
      me
    ), ae & 8 ? c(X, g.children) : ae & 16 && te(
      g.children,
      X,
      null,
      O,
      N,
      pl(g, z),
      V,
      K
    ), ye && Wi(g, null, O, "created"), Q(X, g, g.scopeId, V, O), me) {
      for (const Ie in me)
        Ie !== "value" && !yr(Ie) && r(X, Ie, null, me[Ie], z, O);
      "value" in me && r(X, "value", null, me.value, z), (H = me.onVnodeBeforeMount) && Mn(H, O, g);
    }
    ye && Wi(g, null, O, "beforeMount");
    const Ae = Cm(N, fe);
    Ae && fe.beforeEnter(X), i(X, w, A), ((H = me && me.onVnodeMounted) || Ae || ye) && Ht(() => {
      H && Mn(H, O, g), Ae && fe.enter(X), ye && Wi(g, null, O, "mounted");
    }, N);
  }, Q = (g, w, A, O, N) => {
    if (A && S(g, A), O)
      for (let z = 0; z < O.length; z++)
        S(g, O[z]);
    if (N) {
      let z = N.subTree;
      if (w === z || lh(z.type) && (z.ssContent === w || z.ssFallback === w)) {
        const V = N.vnode;
        Q(
          g,
          V,
          V.scopeId,
          V.slotScopeIds,
          N.parent
        );
      }
    }
  }, te = (g, w, A, O, N, z, V, K, X = 0) => {
    for (let H = X; H < g.length; H++) {
      const me = g[H] = K ? ni(g[H]) : Bn(g[H]);
      T(
        null,
        me,
        w,
        A,
        O,
        N,
        z,
        V,
        K
      );
    }
  }, D = (g, w, A, O, N, z, V) => {
    const K = w.el = g.el;
    let { patchFlag: X, dynamicChildren: H, dirs: me } = w;
    X |= g.patchFlag & 16;
    const ae = g.props || Ue, fe = w.props || Ue;
    let ye;
    if (A && Yi(A, !1), (ye = fe.onVnodeBeforeUpdate) && Mn(ye, A, w, g), me && Wi(w, g, A, "beforeUpdate"), A && Yi(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!g.dynamicChildren || g.dynamicChildren.length !== H.length) && (X = 0, V = !1, H = null), (ae.innerHTML && fe.innerHTML == null || ae.textContent && fe.textContent == null) && c(K, ""), H ? se(
      g.dynamicChildren,
      H,
      K,
      A,
      O,
      pl(w, N),
      z
    ) : V || ee(
      g,
      w,
      K,
      null,
      A,
      O,
      pl(w, N),
      z,
      !1
    ), X > 0) {
      if (X & 16)
        ve(K, ae, fe, A, N);
      else if (X & 2 && ae.class !== fe.class && r(K, "class", null, fe.class, N), X & 4 && r(K, "style", ae.style, fe.style, N), X & 8) {
        const Ae = w.dynamicProps;
        for (let Ie = 0; Ie < Ae.length; Ie++) {
          const Re = Ae[Ie], Ye = ae[Re], Ze = fe[Re];
          (Ze !== Ye || Re === "value") && r(K, Re, Ye, Ze, N, A);
        }
      }
      X & 1 && g.children !== w.children && c(K, w.children);
    } else !V && H == null && ve(K, ae, fe, A, N);
    ((ye = fe.onVnodeUpdated) || me) && Ht(() => {
      ye && Mn(ye, A, w, g), me && Wi(w, g, A, "updated");
    }, O);
  }, se = (g, w, A, O, N, z, V) => {
    for (let K = 0; K < w.length; K++) {
      const X = g[K], H = w[K], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        X.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (X.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(X, H) || // - In the case of a component, it could contain anything.
        X.shapeFlag & 198) ? p(X.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      T(
        X,
        H,
        me,
        null,
        O,
        N,
        z,
        V,
        !0
      );
    }
  }, ve = (g, w, A, O, N) => {
    if (w !== A) {
      if (w !== Ue)
        for (const z in w)
          !yr(z) && !(z in A) && r(
            g,
            z,
            w[z],
            null,
            N,
            O
          );
      for (const z in A) {
        if (yr(z)) continue;
        const V = A[z], K = w[z];
        V !== K && z !== "value" && r(g, z, K, V, N, O);
      }
      "value" in A && r(g, "value", w.value, A.value, N);
    }
  }, Y = (g, w, A, O, N, z, V, K, X) => {
    const H = w.el = g ? g.el : o(""), me = w.anchor = g ? g.anchor : o("");
    let { patchFlag: ae, dynamicChildren: fe, slotScopeIds: ye } = w;
    ye && (K = K ? K.concat(ye) : ye), g == null ? (i(H, A, O), i(me, A, O), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      A,
      me,
      N,
      z,
      V,
      K,
      X
    )) : ae > 0 && ae & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === fe.length ? (se(
      g.dynamicChildren,
      fe,
      A,
      N,
      z,
      V,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || N && w === N.subTree) && zc(
      g,
      w,
      !0
      /* shallow */
    )) : ee(
      g,
      w,
      A,
      me,
      N,
      z,
      V,
      K,
      X
    );
  }, ne = (g, w, A, O, N, z, V, K, X) => {
    w.slotScopeIds = K, g == null ? w.shapeFlag & 512 ? N.ctx.activate(
      w,
      A,
      O,
      V,
      X
    ) : P(
      w,
      A,
      O,
      N,
      z,
      V,
      X
    ) : F(g, w, X);
  }, P = (g, w, A, O, N, z, V) => {
    const K = g.component = Om(
      g,
      O,
      N
    );
    if (qo(g) && (K.ctx.renderer = Zt), xm(K, !1, V), K.asyncDep) {
      if (N && N.registerDep(K, W, V), !g.el) {
        const X = K.subTree = we(Et);
        L(null, X, w, A), g.placeholder = X.el;
      }
    } else
      W(
        K,
        g,
        w,
        A,
        N,
        z,
        V
      );
  }, F = (g, w, A) => {
    const O = w.component = g.component;
    if (fm(g, w, A))
      if (O.asyncDep && !O.asyncResolved) {
        re(O, w, A);
        return;
      } else
        O.next = w, O.update();
    else
      w.el = g.el, O.vnode = w;
  }, W = (g, w, A, O, N, z, V) => {
    const K = () => {
      if (g.isMounted) {
        let { next: ae, bu: fe, u: ye, parent: Ae, vnode: Ie } = g;
        {
          const _t = sh(g);
          if (_t) {
            ae && (ae.el = Ie.el, re(g, ae, V)), _t.asyncDep.then(() => {
              Ht(() => {
                g.isUnmounted || H();
              }, N);
            });
            return;
          }
        }
        let Re = ae, Ye;
        Yi(g, !1), ae ? (ae.el = Ie.el, re(g, ae, V)) : ae = Ie, fe && Os(fe), (Ye = ae.props && ae.props.onVnodeBeforeUpdate) && Mn(Ye, Ae, ae, Ie), Yi(g, !0);
        const Ze = Cu(g), ft = g.subTree;
        g.subTree = Ze, T(
          ft,
          Ze,
          // parent may have changed if it's in a teleport
          p(ft.el),
          // anchor may have changed if it's in a fragment
          dt(ft),
          g,
          N,
          z
        ), ae.el = Ze.el, Re === null && hm(g, Ze.el), ye && Ht(ye, N), (Ye = ae.props && ae.props.onVnodeUpdated) && Ht(
          () => Mn(Ye, Ae, ae, Ie),
          N
        );
      } else {
        let ae;
        const { el: fe, props: ye } = w, { bm: Ae, m: Ie, parent: Re, root: Ye, type: Ze } = g, ft = Ma(w);
        Yi(g, !1), Ae && Os(Ae), !ft && (ae = ye && ye.onVnodeBeforeMount) && Mn(ae, Re, w), Yi(g, !0);
        {
          Ye.ce && Ye.ce._hasShadowRoot() && Ye.ce._injectChildStyle(
            Ze,
            g.parent ? g.parent.type : void 0
          );
          const _t = g.subTree = Cu(g);
          T(
            null,
            _t,
            A,
            O,
            g,
            N,
            z
          ), w.el = _t.el;
        }
        if (Ie && Ht(Ie, N), !ft && (ae = ye && ye.onVnodeMounted)) {
          const _t = w;
          Ht(
            () => Mn(ae, Re, _t),
            N
          );
        }
        (w.shapeFlag & 256 || Re && Ma(Re.vnode) && Re.vnode.shapeFlag & 256) && g.a && Ht(g.a, N), g.isMounted = !0, w = A = O = null;
      }
    };
    g.scope.on();
    const X = g.effect = new lf(K);
    g.scope.off();
    const H = g.update = X.run.bind(X), me = g.job = X.runIfDirty.bind(X);
    me.i = g, me.id = g.uid, X.scheduler = () => Ic(me), Yi(g, !0), H();
  }, re = (g, w, A) => {
    w.component = g;
    const O = g.vnode.props;
    g.vnode = w, g.next = null, vm(g, w.props, O, A), ym(g, w.children, A), di(), fu(g), fi();
  }, ee = (g, w, A, O, N, z, V, K, X = !1) => {
    const H = g && g.children, me = g ? g.shapeFlag : 0, ae = w.children, { patchFlag: fe, shapeFlag: ye } = w;
    if (fe > 0) {
      if (fe & 128) {
        he(
          H,
          ae,
          A,
          O,
          N,
          z,
          V,
          K,
          X
        );
        return;
      } else if (fe & 256) {
        ce(
          H,
          ae,
          A,
          O,
          N,
          z,
          V,
          K,
          X
        );
        return;
      }
    }
    ye & 8 ? (me & 16 && st(H, N, z), ae !== H && c(A, ae)) : me & 16 ? ye & 16 ? he(
      H,
      ae,
      A,
      O,
      N,
      z,
      V,
      K,
      X
    ) : st(H, N, z, !0) : (me & 8 && c(A, ""), ye & 16 && te(
      ae,
      A,
      O,
      N,
      z,
      V,
      K,
      X
    ));
  }, ce = (g, w, A, O, N, z, V, K, X) => {
    g = g || Pa, w = w || Pa;
    const H = g.length, me = w.length, ae = Math.min(H, me);
    let fe;
    for (fe = 0; fe < ae; fe++) {
      const ye = w[fe] = X ? ni(w[fe]) : Bn(w[fe]);
      T(
        g[fe],
        ye,
        A,
        null,
        N,
        z,
        V,
        K,
        X
      );
    }
    H > me ? st(
      g,
      N,
      z,
      !0,
      !1,
      ae
    ) : te(
      w,
      A,
      O,
      N,
      z,
      V,
      K,
      X,
      ae
    );
  }, he = (g, w, A, O, N, z, V, K, X) => {
    let H = 0;
    const me = w.length;
    let ae = g.length - 1, fe = me - 1;
    for (; H <= ae && H <= fe; ) {
      const ye = g[H], Ae = w[H] = X ? ni(w[H]) : Bn(w[H]);
      if (ia(ye, Ae))
        T(
          ye,
          Ae,
          A,
          null,
          N,
          z,
          V,
          K,
          X
        );
      else
        break;
      H++;
    }
    for (; H <= ae && H <= fe; ) {
      const ye = g[ae], Ae = w[fe] = X ? ni(w[fe]) : Bn(w[fe]);
      if (ia(ye, Ae))
        T(
          ye,
          Ae,
          A,
          null,
          N,
          z,
          V,
          K,
          X
        );
      else
        break;
      ae--, fe--;
    }
    if (H > ae) {
      if (H <= fe) {
        const ye = fe + 1, Ae = ye < me ? w[ye].el : O;
        for (; H <= fe; )
          T(
            null,
            w[H] = X ? ni(w[H]) : Bn(w[H]),
            A,
            Ae,
            N,
            z,
            V,
            K,
            X
          ), H++;
      }
    } else if (H > fe)
      for (; H <= ae; )
        ge(g[H], N, z, !0), H++;
    else {
      const ye = H, Ae = H, Ie = /* @__PURE__ */ new Map();
      for (H = Ae; H <= fe; H++) {
        const rt = w[H] = X ? ni(w[H]) : Bn(w[H]);
        rt.key != null && Ie.set(rt.key, H);
      }
      let Re, Ye = 0;
      const Ze = fe - Ae + 1;
      let ft = !1, _t = 0;
      const zt = new Array(Ze);
      for (H = 0; H < Ze; H++) zt[H] = 0;
      for (H = ye; H <= ae; H++) {
        const rt = g[H];
        if (Ye >= Ze) {
          ge(rt, N, z, !0);
          continue;
        }
        let At;
        if (rt.key != null)
          At = Ie.get(rt.key);
        else
          for (Re = Ae; Re <= fe; Re++)
            if (zt[Re - Ae] === 0 && ia(rt, w[Re])) {
              At = Re;
              break;
            }
        At === void 0 ? ge(rt, N, z, !0) : (zt[At - Ae] = H + 1, At >= _t ? _t = At : ft = !0, T(
          rt,
          w[At],
          A,
          null,
          N,
          z,
          V,
          K,
          X
        ), Ye++);
      }
      const Ln = ft ? Sm(zt) : Pa;
      for (Re = Ln.length - 1, H = Ze - 1; H >= 0; H--) {
        const rt = Ae + H, At = w[rt], zi = w[rt + 1], Ui = rt + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          zi.el || oh(zi)
        ) : O;
        zt[H] === 0 ? T(
          null,
          At,
          A,
          Ui,
          N,
          z,
          V,
          K,
          X
        ) : ft && (Re < 0 || H !== Ln[Re] ? _e(At, A, Ui, 2) : Re--);
      }
    }
  }, _e = (g, w, A, O, N = null) => {
    const { el: z, type: V, transition: K, children: X, shapeFlag: H } = g;
    if (H & 6) {
      _e(g.component.subTree, w, A, O);
      return;
    }
    if (H & 128) {
      g.suspense.move(w, A, O);
      return;
    }
    if (H & 64) {
      V.move(g, w, A, Zt);
      return;
    }
    if (V === ue) {
      i(z, w, A);
      for (let ae = 0; ae < X.length; ae++)
        _e(X[ae], w, A, O);
      i(g.anchor, w, A);
      return;
    }
    if (V === xs) {
      j(g, w, A);
      return;
    }
    if (O !== 2 && H & 1 && K)
      if (O === 0)
        K.persisted && !z[mn] ? i(z, w, A) : (K.beforeEnter(z), i(z, w, A), Ht(() => K.enter(z), N));
      else {
        const { leave: ae, delayLeave: fe, afterLeave: ye } = K, Ae = () => {
          g.ctx.isUnmounted ? a(z) : i(z, w, A);
        }, Ie = () => {
          const Re = z._isLeaving || !!z[mn];
          z._isLeaving && z[mn](
            !0
            /* cancelled */
          ), K.persisted && !Re ? Ae() : ae(z, () => {
            Ae(), ye && ye();
          });
        };
        fe ? fe(z, Ae, Ie) : Ie();
      }
    else
      i(z, w, A);
  }, ge = (g, w, A, O = !1, N = !1) => {
    const {
      type: z,
      props: V,
      ref: K,
      children: X,
      dynamicChildren: H,
      shapeFlag: me,
      patchFlag: ae,
      dirs: fe,
      cacheIndex: ye,
      memo: Ae
    } = g;
    if (ae === -2 && (N = !1), K != null && (di(), Cr(K, null, A, g, !0), fi()), ye != null && (w.renderCache[ye] = void 0), me & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const Ie = me & 1 && fe, Re = !Ma(g);
    let Ye;
    if (Re && (Ye = V && V.onVnodeBeforeUnmount) && Mn(Ye, w, g), me & 6)
      nt(g.component, A, O);
    else {
      if (me & 128) {
        g.suspense.unmount(A, O);
        return;
      }
      Ie && Wi(g, null, w, "beforeUnmount"), me & 64 ? g.type.remove(
        g,
        w,
        A,
        Zt,
        O
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ue || ae > 0 && ae & 64) ? st(
        H,
        w,
        A,
        !1,
        !0
      ) : (z === ue && ae & 384 || !N && me & 16) && st(X, w, A), O && qe(g);
    }
    const Ze = Ae != null && ye == null;
    (Re && (Ye = V && V.onVnodeUnmounted) || Ie || Ze) && Ht(() => {
      Ye && Mn(Ye, w, g), Ie && Wi(g, null, w, "unmounted"), Ze && (g.el = null);
    }, A);
  }, qe = (g) => {
    const { type: w, el: A, anchor: O, transition: N } = g;
    if (w === ue) {
      Ee(A, O);
      return;
    }
    if (w === xs) {
      $(g);
      return;
    }
    const z = () => {
      a(A), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (g.shapeFlag & 1 && N && !N.persisted) {
      const { leave: V, delayLeave: K } = N, X = () => V(A, z);
      K ? K(g.el, z, X) : X();
    } else
      z();
  }, Ee = (g, w) => {
    let A;
    for (; g !== w; )
      A = y(g), a(g), g = A;
    a(w);
  }, nt = (g, w, A) => {
    const { bum: O, scope: N, job: z, subTree: V, um: K, m: X, a: H } = g;
    Tu(X), Tu(H), O && Os(O), N.stop(), z && (z.flags |= 8, ge(V, g, w, A)), K && Ht(K, w), Ht(() => {
      g.isUnmounted = !0;
    }, w);
  }, st = (g, w, A, O = !1, N = !1, z = 0) => {
    for (let V = z; V < g.length; V++)
      ge(g[V], w, A, O, N);
  }, dt = (g) => {
    if (g.shapeFlag & 6)
      return dt(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = y(g.anchor || g.el), A = w && w[Rf];
    return A ? y(A) : w;
  };
  let $t = !1;
  const it = (g, w, A) => {
    let O;
    g == null ? w._vnode && (ge(w._vnode, null, null, !0), O = w._vnode.component) : T(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      A
    ), w._vnode = g, $t || ($t = !0, fu(O), Of(), $t = !1);
  }, Zt = {
    p: T,
    um: ge,
    m: _e,
    r: qe,
    mt: P,
    mc: te,
    pc: ee,
    pbc: se,
    n: dt,
    o: e
  };
  return {
    render: it,
    hydrate: void 0,
    createApp: om(it)
  };
}
function pl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (be(i) && be(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ni(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && zc(s, o)), o.type === ns && (o.patchFlag === -1 && (o = a[r] = ni(o)), o.el = s.el), o.type === Et && !o.el && (o.el = s.el);
    }
}
function Sm(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const h = e[i];
    if (h !== 0) {
      if (a = n[n.length - 1], e[a] < h) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < h ? r = o + 1 : s = o;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function sh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : sh(t);
}
function Tu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function oh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? oh(t.subTree) : null;
}
const lh = (e) => e.__isSuspense;
function Em(e, t) {
  t && t.pendingBranch ? be(e) ? t.effects.push(...e) : t.effects.push(e) : Af(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), ns = /* @__PURE__ */ Symbol.for("v-txt"), Et = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), ci = [];
let sn = null;
function b(e = !1) {
  ci.push(sn = e ? null : []);
}
function Uc() {
  ci.pop(), sn = ci[ci.length - 1] || null;
}
let Ur = 1;
function Hs(e, t = !1) {
  Ur += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function ch(e) {
  return e.dynamicChildren = Ur > 0 ? sn || Pa : null, Uc(), Ur > 0 && sn && sn.push(e), e;
}
function C(e, t, n, i, a, r) {
  return ch(
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
function Me(e, t, n, i, a) {
  return ch(
    we(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const uh = ({ key: e }) => e ?? null, Ns = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Mt(e) || ke(e) ? { i: Tt, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, i = 0, a = null, r = e === ue ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && uh(t),
    ref: t && Ns(t),
    scopeId: Vo,
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
    ctx: Tt
  };
  return o ? (js(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Ur > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const we = Tm;
function Tm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Hf) && (e = Et), Br(e)) {
    const o = Pi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(o, n), Ur > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (Im(e) && (e = e.__vccOpts), t) {
    t = Hr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Te(o)), Ke(l) && (/* @__PURE__ */ Lc(l) && !be(l) && (l = ct({}, l)), t.style = yn(l));
  }
  const s = tt(e) ? 1 : lh(e) ? 128 : Go(e) ? 64 : Ke(e) ? 4 : ke(e) ? 2 : 0;
  return u(
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
function Hr(e) {
  return e ? /* @__PURE__ */ Lc(e) || eh(e) ? ct({}, e) : e : null;
}
function Pi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, h = t ? Ft(a || {}, t) : a, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && uh(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? be(r) ? r.concat(Ns(t)) : [r, Ns(t)] : Ns(t)
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
    patchFlag: t && e.type !== ue ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Pi(e.ssContent),
    ssFallback: e.ssFallback && Pi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && zr(
    c,
    l.clone(c)
  ), c;
}
function Oe(e = " ", t = 0) {
  return we(ns, null, e, t);
}
function B(e = "", t = !1) {
  return t ? (b(), Me(Et, null, e)) : we(Et, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? we(Et) : be(e) ? we(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Br(e) ? ni(e) : we(ns, null, String(e));
}
function ni(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pi(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (be(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), js(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !eh(t) ? t._ctx = Tt : a === 3 && Tt && (Tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ke(t)) {
    if (i & 65) {
      js(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Tt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ft(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Te([t.class, i.class]));
      else if (a === "style")
        t.style = yn([t.style, i.style]);
      else if (Do(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(be(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Mo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Mn(e, t, n, i = null) {
  wn(e, t, 7, [
    n,
    i
  ]);
}
const km = qf();
let Am = 0;
function Om(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || km, r = {
    uid: Am++,
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
    scope: new Zp(
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
    propsOptions: nh(i, a),
    emitsOptions: Zf(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ue,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ue,
    data: Ue,
    props: Ue,
    attrs: Ue,
    slots: Ue,
    refs: Ue,
    setupState: Ue,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = lm.bind(null, r), e.ce && e.ce(r), r;
}
let Pt = null;
const pa = () => Pt || Tt;
let Vs, jr;
{
  const e = Uo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Pt = n
  ), jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Vr = n
  );
}
const is = (e) => {
  const t = Pt;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, ku = () => {
  Pt && Pt.scope.off(), Vs(null);
};
function dh(e) {
  return e.vnode.shapeFlag & 4;
}
let Vr = !1;
function xm(e, t = !1, n = !1) {
  t && jr(t);
  const { props: i, children: a } = e.vnode, r = dh(e);
  pm(e, i, r, t), bm(e, a, n || t);
  const s = r ? Nm(e, t) : void 0;
  return t && jr(!1), s;
}
function Nm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xv);
  const { setup: i } = n;
  if (i) {
    di();
    const a = e.setupContext = i.length > 1 ? hh(e) : null, r = is(e), s = es(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = ef(s);
    if (fi(), r(), (o || e.sp) && !Ma(e) && $f(e), o) {
      if (s.then(ku, ku), t)
        return s.then((l) => {
          jr(!0);
          try {
            Au(e, l, t);
          } finally {
            jr(!1);
          }
        }).catch((l) => {
          jo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Au(e, s);
  } else
    fh(e);
}
function Au(e, t, n) {
  ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Ef(t)), fh(e);
}
function fh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bn);
  {
    const a = is(e);
    di();
    try {
      tm(e);
    } finally {
      fi(), a();
    }
  }
}
const Rm = {
  get(e, t) {
    return Lt(e, "get", ""), e[t];
  }
};
function hh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ef(mv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Sr)
        return Sr[n](e);
    },
    has(t, n) {
      return n in t || n in Sr;
    }
  })) : e.proxy;
}
function Lm(e, t = !0) {
  return ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Im(e) {
  return ke(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ Cv(e, t, Vr);
function Gt(e, t, n) {
  try {
    Hs(-1);
    const i = arguments.length;
    return i === 2 ? Ke(t) && !be(t) ? Br(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Br(n) && (n = [n]), we(e, t, n));
  } finally {
    Hs(1);
  }
}
const Pm = "3.5.42", Dm = bn;
let nc;
const Ou = typeof window < "u" && window.trustedTypes;
if (Ou)
  try {
    nc = /* @__PURE__ */ Ou.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ph = nc ? (e) => nc.createHTML(e) : (e) => e, Mm = "http://www.w3.org/2000/svg", Fm = "http://www.w3.org/1998/Math/MathML", ti = typeof document < "u" ? document : null, xu = ti && /* @__PURE__ */ ti.createElement("template"), $m = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ti.createElementNS(Mm, e) : t === "mathml" ? ti.createElementNS(Fm, e) : n ? ti.createElement(e, { is: n }) : ti.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ti.createTextNode(e),
  createComment: (e) => ti.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ti.querySelector(e),
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
      xu.innerHTML = ph(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = xu.content;
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
}, wi = "transition", ar = "animation", Kr = /* @__PURE__ */ Symbol("_vtc"), vh = {
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
}, zm = /* @__PURE__ */ ct(
  {},
  If,
  vh
), Um = (e) => (e.displayName = "Transition", e.props = zm, e), Bm = /* @__PURE__ */ Um(
  (e, { slots: t }) => Gt(Uv, Hm(e), t)
), Zi = (e, t = []) => {
  be(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Nu = (e) => e ? be(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Hm(e) {
  const t = {};
  for (const Y in e)
    Y in vh || (t[Y] = e[Y]);
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
    appearActiveClass: h = s,
    appearToClass: c = o,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: S = `${n}-leave-to`
  } = e, x = jm(a), T = x && x[0], R = x && x[1], {
    onBeforeEnter: L,
    onEnter: M,
    onEnterCancelled: j,
    onLeave: $,
    onLeaveCancelled: le,
    onBeforeAppear: de = L,
    onAppear: Q = M,
    onAppearCancelled: te = j
  } = t, D = (Y, ne, P, F) => {
    Y._enterCancelled = F, Xi(Y, ne ? c : o), Xi(Y, ne ? h : s), P && P();
  }, se = (Y, ne) => {
    Y._isLeaving = !1, Xi(Y, p), Xi(Y, S), Xi(Y, y), ne && ne();
  }, ve = (Y) => (ne, P) => {
    const F = Y ? Q : M, W = () => D(ne, Y, P);
    Zi(F, [ne, W]), Ru(() => {
      Xi(ne, Y ? l : r), Xn(ne, Y ? c : o), Nu(F) || Lu(ne, i, T, W);
    });
  };
  return ct(t, {
    onBeforeEnter(Y) {
      Zi(L, [Y]), Xn(Y, r), Xn(Y, s);
    },
    onBeforeAppear(Y) {
      Zi(de, [Y]), Xn(Y, l), Xn(Y, h);
    },
    onEnter: ve(!1),
    onAppear: ve(!0),
    onLeave(Y, ne) {
      Y._isLeaving = !0;
      const P = () => se(Y, ne);
      Xn(Y, p), Y._enterCancelled ? (Xn(Y, y), Du(Y)) : (Du(Y), Xn(Y, y)), Ru(() => {
        Y._isLeaving && (Xi(Y, p), Xn(Y, S), Nu($) || Lu(Y, i, R, P));
      }), Zi($, [Y, P]);
    },
    onEnterCancelled(Y) {
      D(Y, !1, void 0, !0), Zi(j, [Y]);
    },
    onAppearCancelled(Y) {
      D(Y, !0, void 0, !0), Zi(te, [Y]);
    },
    onLeaveCancelled(Y) {
      se(Y), Zi(le, [Y]);
    }
  });
}
function jm(e) {
  if (e == null)
    return null;
  if (Ke(e))
    return [vl(e.enter), vl(e.leave)];
  {
    const t = vl(e);
    return [t, t];
  }
}
function vl(e) {
  return Up(e);
}
function Xn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Kr] || (e[Kr] = /* @__PURE__ */ new Set())).add(t);
}
function Xi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Kr];
  n && (n.delete(t), n.size || (e[Kr] = void 0));
}
function Ru(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vm = 0;
function Lu(e, t, n, i) {
  const a = e._endId = ++Vm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Km(e, t);
  if (!s)
    return i();
  const h = s + "end";
  let c = 0;
  const p = () => {
    e.removeEventListener(h, y), r();
  }, y = (S) => {
    S.target === e && ++c >= l && p();
  };
  setTimeout(() => {
    c < l && p();
  }, o + 1), e.addEventListener(h, y);
}
function Km(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${wi}Delay`), r = i(`${wi}Duration`), s = Iu(a, r), o = i(`${ar}Delay`), l = i(`${ar}Duration`), h = Iu(o, l);
  let c = null, p = 0, y = 0;
  t === wi ? s > 0 && (c = wi, p = s, y = r.length) : t === ar ? h > 0 && (c = ar, p = h, y = l.length) : (p = Math.max(s, h), c = p > 0 ? s > h ? wi : ar : null, y = c ? c === wi ? r.length : l.length : 0);
  const S = c === wi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${wi}Property`).toString()
  );
  return {
    type: c,
    timeout: p,
    propCount: y,
    hasTransform: S
  };
}
function Iu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Pu(n) + Pu(e[i])));
}
function Pu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Du(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Gm(e, t, n) {
  const i = e[Kr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ks = /* @__PURE__ */ Symbol("_vod"), mh = /* @__PURE__ */ Symbol("_vsh"), $a = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ks] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : rr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), rr(e, !0), i.enter(e)) : i.leave(e, () => {
      rr(e, !1);
    }) : rr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    rr(e, t);
  }
};
function rr(e, t) {
  e.style.display = t ? e[Ks] : "none", e[mh] = !t;
}
const gh = /* @__PURE__ */ Symbol("");
function qm(e) {
  const t = pa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Gs(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Gs(t.ce, a) : ic(t.subTree, a), n(a);
  };
  Bf(() => {
    Af(i);
  }), Mi(() => {
    Yt(i, bn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ts(() => a.disconnect());
  });
}
function ic(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      ic(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Gs(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => ic(n, t));
  else if (e.type === xs) {
    let { el: n, anchor: i } = e;
    for (; n && (Gs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Gs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Yp(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[gh] = i;
  }
}
const Wm = /(?:^|;)\s*display\s*:/;
function Ym(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && pr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && pr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Xm(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || pr(i, s, o) : pr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[gh];
      s && (n += ";" + s), i.cssText = n, r = Wm.test(n);
    }
  } else t && e.removeAttribute("style");
  Ks in e && (e[Ks] = r ? i.display : "", e[mh] && (i.display = "none"));
}
const bs = /\s*!important$/;
function pr(e, t, n) {
  if (be(n))
    n.forEach((i) => pr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    bs.test(n) ? e.setProperty(t, n.replace(bs, ""), "important") : e.setProperty(t, n);
  else {
    const i = Zm(e, t);
    bs.test(n) ? e.setProperty(
      vi(i),
      n.replace(bs, ""),
      "important"
    ) : e[i] = n;
  }
}
const Mu = ["Webkit", "Moz", "ms"], ml = {};
function Zm(e, t) {
  const n = ml[t];
  if (n)
    return n;
  let i = Dt(t);
  if (i !== "filter" && i in e)
    return ml[t] = i;
  i = $o(i);
  for (let a = 0; a < Mu.length; a++) {
    const r = Mu[a] + i;
    if (r in e)
      return ml[t] = r;
  }
  return t;
}
function Xm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const Fu = "http://www.w3.org/1999/xlink";
function $u(e, t, n, i, a, r = Gp(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fu, t.slice(6, t.length)) : e.setAttributeNS(Fu, t, n) : n == null || r && !rf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Nn(n) ? String(n) : n
  );
}
function zu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ph(n) : n);
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
    o === "boolean" ? n = rf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function aa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Jm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Uu = /* @__PURE__ */ Symbol("_vei");
function Qm(e, t, n, i, a = null) {
  const r = e[Uu] || (e[Uu] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = ng(t);
    if (i) {
      const h = r[t] = rg(
        i,
        a
      );
      aa(e, o, h, l);
    } else s && (Jm(e, o, s, l), r[t] = void 0);
  }
}
const eg = /(Once|Passive|Capture)$/, tg = /^on:?(?:Once|Passive|Capture)$/;
function ng(e) {
  let t, n;
  for (; (n = e.match(eg)) && !tg.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vi(e.slice(2)), t];
}
let gl = 0;
const ig = /* @__PURE__ */ Promise.resolve(), ag = () => gl || (ig.then(() => gl = 0), gl = Date.now());
function rg(e, t) {
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
        const h = s[l];
        h && wn(
          h,
          t,
          5,
          o
        );
      }
    } else
      wn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = ag(), n;
}
const Bu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sg = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Gm(e, i, s) : t === "style" ? Ym(e, n, i) : Do(t) ? Mo(t) || Qm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : og(e, t, i, s)) ? (zu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $u(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (lg(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? zu(e, Dt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), $u(e, t, i, s));
};
function og(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Bu(t) && ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Bu(t) && tt(n) ? !1 : t in e;
}
function lg(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Dt(t);
  return Array.isArray(n) ? n.some((a) => Dt(a) === i) : Object.keys(n).some((a) => Dt(a) === i);
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return be(t) ? (n) => Os(t, n) : t;
};
function cg(e) {
  e.target.composing = !0;
}
function Hu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sa = /* @__PURE__ */ Symbol("_assign"), ys = /* @__PURE__ */ Symbol("_initialValue");
function bl(e, t, n) {
  return t && (e = e.trim()), n && (e = zo(e)), e;
}
const Rs = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[ys] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ys] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sa] = qs(a);
    const r = i || a.props && a.props.type === "number";
    aa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sa](bl(e.value, n, r));
    }), (n || r) && aa(e, "change", () => {
      e.value = bl(e.value, n, r);
    }), t || (aa(e, "compositionstart", cg), aa(e, "compositionend", Hu), aa(e, "change", Hu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[ys];
    delete e[ys], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sa](bl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[sa] = qs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? zo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, tn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, aa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? zo(Ws(l)) : Ws(l)
      ), r = e.multiple, s = r ? fa(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? be(s) ? a.slice() : a : s
      ];
      try {
        e[sa](s);
      } finally {
        li(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[sa] = qs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ju(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[sa] = qs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ug(t, n[1], n[0])) && ju(e, t);
  }
};
function ug(e, t, n) {
  if (!n || be(e)) return Ii(e, t);
  if (fa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function ju(e, t) {
  const n = e.multiple, i = be(t);
  if (!(n && !i && !fa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = Ws(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((h) => String(h) === String(o)) : s.selected = Wp(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ii(Ws(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ws(e) {
  return "_value" in e ? e._value : e.value;
}
const dg = ["ctrl", "shift", "alt", "meta"], fg = {
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
  exact: (e, t) => dg.some((n) => e[`${n}Key`] && !t.includes(n))
}, et = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = fg[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, hg = {
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
    const r = vi(a.key);
    if (t.some(
      (s) => s === r || hg[s] === r
    ))
      return e(a);
  }));
}, pg = /* @__PURE__ */ ct({ patchProp: sg }, $m);
let Vu;
function vg() {
  return Vu || (Vu = _m(pg));
}
const mg = ((...e) => {
  const t = vg().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = bg(i);
    if (!a) return;
    const r = t._component;
    !ke(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, gg(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function gg(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bg(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function Bc(e, t, n) {
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
function Ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function yg(e) {
  if (Array.isArray(e)) return e;
}
function _g(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, h = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (c) {
      h = !0, a = c;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (h) throw a;
      }
    }
    return o;
  }
}
function wg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cg(e, t) {
  return yg(e) || _g(e, t) || Sg(e, t) || wg();
}
function Sg(e, t) {
  if (e) {
    if (typeof e == "string") return Ku(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ku(e, t) : void 0;
  }
}
const bh = Object.entries, Gu = Object.setPrototypeOf, Eg = Object.isFrozen, Tg = Object.getPrototypeOf, kg = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, yt = Object.seal, La = Object.create, yh = typeof Reflect < "u" && Reflect, ac = yh.apply, rc = yh.construct;
gt || (gt = function(t) {
  return t;
});
yt || (yt = function(t) {
  return t;
});
ac || (ac = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
rc || (rc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ta = ut(Array.prototype.forEach), Ag = ut(Array.prototype.lastIndexOf), qu = ut(Array.prototype.pop), sr = ut(Array.prototype.push), Og = ut(Array.prototype.splice), za = Array.isArray, vr = ut(String.prototype.toLowerCase), yl = ut(String.prototype.toString), Wu = ut(String.prototype.match), or = ut(String.prototype.replace), Yu = ut(String.prototype.indexOf), xg = ut(String.prototype.trim), Ng = ut(Number.prototype.toString), Rg = ut(Boolean.prototype.toString), Zu = typeof BigInt > "u" ? null : ut(BigInt.prototype.toString), Xu = typeof Symbol > "u" ? null : ut(Symbol.prototype.toString), qt = ut(Object.prototype.hasOwnProperty), lr = ut(Object.prototype.toString), Nt = ut(RegExp.prototype.test), Ji = Lg(TypeError);
function ut(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return ac(e, t, i);
  };
}
function Lg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return rc(e, n);
  };
}
function ze(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vr;
  if (Gu && Gu(e, null), !za(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Eg(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Ig(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = La(null);
  for (const i of bh(e)) {
    var n = Cg(i, 2);
    const a = n[0], r = n[1];
    qt(e, a) && (za(r) ? t[a] = Ig(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function Pg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ng(e);
    case "boolean":
      return Rg(e);
    case "bigint":
      return Zu ? Zu(e) : "0";
    case "symbol":
      return Xu ? Xu(e) : "Symbol()";
    case "undefined":
      return lr(e);
    case "function":
    case "object": {
      if (e === null)
        return lr(e);
      const t = e, n = kn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : lr(i);
      }
      return lr(e);
    }
    default:
      return lr(e);
  }
}
function kn(e, t) {
  for (; e !== null; ) {
    const i = kg(e, t);
    if (i) {
      if (i.get)
        return ut(i.get);
      if (typeof i.value == "function")
        return ut(i.value);
    }
    e = Tg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Dg(e) {
  try {
    return Nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ju = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _l = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wl = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mg = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Cl = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fg = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Qu = gt(["#text"]), ed = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sl = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), td = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _s = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $g = yt(/{{[\w\W]*|^[\w\W]*}}/g), zg = yt(/<%[\w\W]*|^[\w\W]*%>/g), Ug = yt(/\${[\w\W]*/g), Bg = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Hg = yt(/^aria-[\-\w]+$/), nd = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), jg = yt(/^(?:\w+script|data):/i), Vg = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Kg = yt(/^html$/i), Gg = yt(/^[a-z][.\w]*(-[.\w]+)+$/i), id = yt(/<[/\w!]/g), ad = yt(/<[/\w]/g), qg = yt(/<\/no(script|embed|frames)/i), Wg = yt(/\/>/i), nn = {
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
}, _h = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Yg = gt(ze({}, _h)), Zg = (function() {
  const e = {};
  return ta(_h, (t) => {
    e[t] = yt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), gt(e);
})(), Xg = function() {
  return typeof window > "u" ? null : window;
}, Jg = function(t, n) {
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
}, rd = function() {
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
}, Ci = function(t, n, i, a) {
  return qt(t, n) && za(t[n]) ? ze(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, El = function(t, n, i) {
  const a = qt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function wh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xg();
  const t = (Z) => wh(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, p = e.trustedTypes, y = o.prototype, S = kn(y, "cloneNode"), x = kn(y, "remove"), T = kn(y, "nextSibling"), R = kn(y, "childNodes"), L = kn(y, "parentNode"), M = kn(y, "shadowRoot"), j = kn(y, "attributes"), $ = s && s.prototype ? kn(s.prototype, "nodeType") : null, le = s && s.prototype ? kn(s.prototype, "nodeName") : null, de = s && s.prototype ? kn(s.prototype, "ownerDocument") : null, Q = function(_) {
    return $ ? $(_) : _.nodeType;
  }, te = function(_) {
    return le ? le(_) : _.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let D, se = "", ve, Y = !1, ne = 0;
  const P = function() {
    if (ne > 0)
      throw Ji('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, F = function(_) {
    P(), ne++;
    try {
      return D.createHTML(_);
    } finally {
      ne--;
    }
  }, W = function(_) {
    P(), ne++;
    try {
      return D.createScriptURL(_);
    } finally {
      ne--;
    }
  }, re = function() {
    return Y || (ve = Jg(p, a), Y = !0), ve;
  }, ee = n, ce = ee.implementation, he = ee.createNodeIterator, _e = ee.createDocumentFragment, ge = ee.getElementsByTagName, qe = i.importNode;
  let Ee = rd();
  t.isSupported = typeof bh == "function" && typeof L == "function" && ce && ce.createHTMLDocument !== void 0;
  const nt = $g, st = zg, dt = Ug, $t = Bg, it = Hg, Zt = jg, U = Vg, g = Gg;
  let w = nd, A = null;
  const O = ze({}, [...Ju, ..._l, ...wl, ...Cl, ...Qu]);
  let N = null;
  const z = ze({}, [...ed, ...Sl, ...td, ..._s]);
  let V = Object.seal(La(null, {
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
  })), K = null, X = null;
  const H = Object.seal(La(null, {
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
  let me = !0, ae = !0, fe = !1, ye = !0, Ae = !1, Ie = !0, Re = !1, Ye = !1, Ze = null, ft = null, _t = !1, zt = !1, Ln = !1, rt = !1, At = !0, zi = !1;
  const Ui = "user-content-";
  let ma = !0, Xt = !1, gi = {}, on = null;
  const rs = ze({}, [
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
  let Kn = null;
  const ss = ze({}, ["audio", "video", "img", "source", "image", "track"]);
  let Va = null;
  const ga = ze({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Gn = "http://www.w3.org/1998/Math/MathML", Cn = "http://www.w3.org/2000/svg", ln = "http://www.w3.org/1999/xhtml";
  let Se = ln, bi = !1, ht = null;
  const os = ze({}, [Gn, Cn, ln], yl), In = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let Sn = ze({}, In);
  const ba = gt(["annotation-xml"]);
  let Jt = ze({}, ba);
  const ya = ze({}, ["title", "style", "font", "a", "script"]);
  let qn = null;
  const Bi = ["application/xhtml+xml", "text/html"], Ka = "text/html";
  let We = null, cn = null;
  const _a = n.createElement("form"), Hi = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Ga = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (cn && cn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = an(_), qn = // eslint-disable-next-line unicorn/prefer-includes
    Bi.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Ka : _.PARSER_MEDIA_TYPE, We = qn === "application/xhtml+xml" ? yl : vr, A = Ci(_, "ALLOWED_TAGS", O, {
      transform: We
    }), N = Ci(_, "ALLOWED_ATTR", z, {
      transform: We
    }), ht = Ci(_, "ALLOWED_NAMESPACES", os, {
      transform: yl
    }), Va = Ci(_, "ADD_URI_SAFE_ATTR", ga, {
      transform: We,
      base: ga
    }), Kn = Ci(_, "ADD_DATA_URI_TAGS", ss, {
      transform: We,
      base: ss
    }), on = Ci(_, "FORBID_CONTENTS", rs, {
      transform: We
    }), K = Ci(_, "FORBID_TAGS", an({}), {
      transform: We
    }), X = Ci(_, "FORBID_ATTR", an({}), {
      transform: We
    }), gi = qt(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? an(_.USE_PROFILES) : _.USE_PROFILES : !1, me = _.ALLOW_ARIA_ATTR !== !1, ae = _.ALLOW_DATA_ATTR !== !1, fe = _.ALLOW_UNKNOWN_PROTOCOLS || !1, ye = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ae = _.SAFE_FOR_TEMPLATES || !1, Ie = _.SAFE_FOR_XML !== !1, Re = _.WHOLE_DOCUMENT || !1, zt = _.RETURN_DOM || !1, Ln = _.RETURN_DOM_FRAGMENT || !1, rt = _.RETURN_TRUSTED_TYPE || !1, _t = _.FORCE_BODY || !1, At = _.SANITIZE_DOM !== !1, zi = _.SANITIZE_NAMED_PROPS || !1, ma = _.KEEP_CONTENT !== !1, Xt = _.IN_PLACE || !1, w = Dg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : nd, Se = typeof _.NAMESPACE == "string" ? _.NAMESPACE : ln, Sn = El(
      _,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ze({}, In)
      // Default built-in map
    ), Jt = El(
      _,
      "HTML_INTEGRATION_POINTS",
      () => ze({}, ba)
      // Default built-in map
    );
    const I = El(_, "CUSTOM_ELEMENT_HANDLING", () => La(null));
    if (V = La(null), qt(I, "tagNameCheck") && Hi(I.tagNameCheck) && (V.tagNameCheck = I.tagNameCheck), qt(I, "attributeNameCheck") && Hi(I.attributeNameCheck) && (V.attributeNameCheck = I.attributeNameCheck), qt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), yt(V), Ae && (ae = !1), Ln && (zt = !0), gi && (A = ze({}, Qu), N = La(null), gi.html === !0 && (ze(A, Ju), ze(N, ed)), gi.svg === !0 && (ze(A, _l), ze(N, Sl), ze(N, _s)), gi.svgFilters === !0 && (ze(A, wl), ze(N, Sl), ze(N, _s)), gi.mathMl === !0 && (ze(A, Cl), ze(N, td), ze(N, _s))), H.tagCheck = null, H.attributeCheck = null, qt(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? H.tagCheck = _.ADD_TAGS : za(_.ADD_TAGS) && (A === O && (A = an(A)), ze(A, _.ADD_TAGS, We))), qt(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? H.attributeCheck = _.ADD_ATTR : za(_.ADD_ATTR) && (N === z && (N = an(N)), ze(N, _.ADD_ATTR, We))), qt(_, "ADD_FORBID_CONTENTS") && za(_.ADD_FORBID_CONTENTS) && (on === rs && (on = an(on)), ze(on, _.ADD_FORBID_CONTENTS, We)), ma && (A["#text"] = !0), Re && ze(A, ["html", "head", "body"]), A.table && (ze(A, ["tbody"]), delete K.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = D;
      D = _.TRUSTED_TYPES_POLICY;
      try {
        se = F("");
      } catch (oe) {
        throw D = G, oe;
      }
    } else _.TRUSTED_TYPES_POLICY === null ? (D = void 0, se = "") : (D === void 0 && (D = re()), D && typeof se == "string" && (se = F("")));
    gt && gt(_), cn = _;
  }, ot = ze({}, [..._l, ...wl, ...Mg]), ls = ze({}, [...Cl, ...Fg]), qa = function(_, I, G) {
    return I.namespaceURI === ln ? _ === "svg" : I.namespaceURI === Gn ? _ === "svg" && (G === "annotation-xml" || Sn[G]) : !!ot[_];
  }, wa = function(_, I, G) {
    return I.namespaceURI === ln ? _ === "math" : I.namespaceURI === Cn ? _ === "math" && Jt[G] : !!ls[_];
  }, Wn = function(_, I, G) {
    return I.namespaceURI === Cn && !Jt[G] || I.namespaceURI === Gn && !Sn[G] ? !1 : !ls[_] && (ya[_] || !ot[_]);
  }, Yn = function(_) {
    let I = L(_);
    (!I || !I.tagName) && (I = {
      namespaceURI: Se,
      tagName: "template"
    });
    const G = vr(_.tagName), oe = vr(I.tagName);
    return ht[_.namespaceURI] ? _.namespaceURI === Cn ? qa(G, I, oe) : _.namespaceURI === Gn ? wa(G, I, oe) : _.namespaceURI === ln ? Wn(G, I, oe) : !!(qn === "application/xhtml+xml" && ht[_.namespaceURI]) : !1;
  }, En = function(_) {
    sr(t.removed, {
      element: _
    });
    try {
      L(_).removeChild(_);
    } catch {
      if (x(_), !L(_))
        throw Ji("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Wa = function(_, I, G) {
    try {
      _.removeAttributeNode(I);
    } catch {
      try {
        _.removeAttribute(G);
      } catch {
      }
    }
  }, Pn = function(_) {
    ji(_);
    const I = R(_);
    if (I) {
      const oe = [];
      ta(I, (pe) => {
        sr(oe, pe);
      }), ta(oe, (pe) => {
        try {
          x(pe);
        } catch {
        }
      });
    }
    const G = j(_);
    if (G)
      for (let oe = G.length - 1; oe >= 0; --oe) {
        const pe = G[oe], Ce = pe && pe.name;
        typeof Ce == "string" && Wa(_, pe, Ce);
      }
  }, Tn = function(_, I, G) {
    if (!G)
      try {
        G = I.getAttributeNode(_);
      } catch {
        G = null;
      }
    sr(t.removed, {
      attribute: G || null,
      from: I
    });
    try {
      G ? I.removeAttributeNode(G) : I.removeAttribute(_);
    } catch {
      try {
        I.removeAttribute(_);
      } catch {
      }
    }
    if (_ === "is")
      if (zt || Ln)
        try {
          En(I);
        } catch {
        }
      else
        try {
          I.setAttribute(_, "");
        } catch {
        }
  }, Ca = function(_) {
    const I = j(_);
    if (I)
      for (let G = I.length - 1; G >= 0; --G) {
        const oe = I[G], pe = oe && oe.name;
        typeof pe != "string" || N[We(pe)] || Wa(_, oe, pe);
      }
  }, ji = function(_) {
    const I = [_];
    for (; I.length > 0; ) {
      const G = I.pop();
      Q(G) === nn.element && Ca(G);
      const pe = R(G);
      if (pe)
        for (let Ce = pe.length - 1; Ce >= 0; --Ce)
          I.push(pe[Ce]);
    }
  }, cs = function(_, I) {
    return Ie ? _ === "patchsrc" ? !0 : _ === "for" && I !== "label" && I !== "output" : !1;
  }, Ya = function(_) {
    if (!Ie)
      return;
    const I = [_];
    for (; I.length > 0; ) {
      const G = I.pop(), oe = Q(G);
      if (oe === nn.processingInstruction || oe === nn.comment && Nt(ad, G.data)) {
        try {
          x(G);
        } catch {
        }
        continue;
      }
      if (oe === nn.element) {
        const Ce = G, He = We(te(G));
        try {
          Ce.hasAttribute && Ce.hasAttribute("patchsrc") && Ce.removeAttribute("patchsrc"), Ce.hasAttribute && Ce.hasAttribute("for") && cs("for", He) && Ce.removeAttribute("for");
        } catch {
        }
      }
      const pe = R(G);
      if (pe)
        for (let Ce = pe.length - 1; Ce >= 0; --Ce)
          I.push(pe[Ce]);
    }
  }, yi = function(_) {
    let I = null, G = null;
    if (_t)
      _ = "<remove></remove>" + _;
    else {
      const Ce = Wu(_, /^[\r\n\t ]+/);
      G = Ce && Ce[0];
    }
    qn === "application/xhtml+xml" && Se === ln && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const oe = D ? F(_) : _;
    if (Se === ln)
      try {
        I = new c().parseFromString(oe, qn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = ce.createDocument(Se, "template", null);
      try {
        I.documentElement.innerHTML = bi ? se : oe;
      } catch {
      }
    }
    const pe = I.body || I.documentElement;
    return _ && G && pe.insertBefore(n.createTextNode(G), pe.childNodes[0] || null), Se === ln ? ge.call(I, Re ? "html" : "body")[0] : Re ? I.documentElement : pe;
  }, Vi = function(_) {
    const I = de ? de(_) : _.ownerDocument;
    return he.call(
      I || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, un = function(_) {
    return _ = or(_, nt, " "), _ = or(_, st, " "), _ = or(_, dt, " "), _;
  }, _i = function(_) {
    var I;
    _.normalize();
    const G = de ? de(_) : _.ownerDocument, oe = he.call(
      G || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let pe = oe.nextNode();
    for (; pe; )
      pe.data = un(pe.data), pe = oe.nextNode();
    const Ce = (I = _.querySelectorAll) === null || I === void 0 ? void 0 : I.call(_, "template");
    Ce && ta(Ce, (He) => {
      Ut(He.content) && _i(He.content);
    });
  }, Kt = function(_) {
    const I = le ? le(_) : null;
    return typeof I != "string" || We(I) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== j(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== $(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== R(_);
  }, Ut = function(_) {
    if (!$ || typeof _ != "object" || _ === null)
      return !1;
    try {
      return $(_) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, wt = function(_) {
    if (!$ || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof $(_) == "number";
    } catch {
      return !1;
    }
  };
  function Qt(Z, _, I) {
    Z.length !== 0 && ta(Z, (G) => {
      G.call(t, _, I, cn);
    });
  }
  const al = function(_, I) {
    return !!(Ie && _.hasChildNodes() && !wt(_.firstElementChild) && Nt(id, _.textContent) && Nt(id, _.innerHTML) || Ie && _.namespaceURI === ln && Yg[I] && (wt(_.firstElementChild) || typeof _.textContent == "string" && Nt(Zg[I], _.textContent)) || _.nodeType === nn.processingInstruction || Ie && _.nodeType === nn.comment && Nt(ad, _.data));
  }, Ki = function(_, I) {
    if (_ instanceof RegExp)
      return Nt(_, I);
    if (_ instanceof Function) {
      for (var G = arguments.length, oe = new Array(G > 2 ? G - 2 : 0), pe = 2; pe < G; pe++)
        oe[pe - 2] = arguments[pe];
      return !!_(I, ...oe);
    }
    return !1;
  }, rl = function(_, I, G) {
    if (!K[I] && fs(I) && Ki(V.tagNameCheck, I))
      return !1;
    if (ma && !on[I]) {
      const oe = L(_), pe = R(_);
      if (pe && oe) {
        const Ce = pe.length;
        for (let He = Ce - 1; He >= 0; --He) {
          const Xe = _ === G ? S(pe[He], !0) : pe[He];
          oe.insertBefore(Xe, T(_));
        }
      }
    }
    return En(_), !0;
  }, us = function(_, I, G, oe) {
    return _.length === 0 ? I : I === G || I === oe ? an(I) : I;
  }, dn = function(_, I) {
    return _ === I || L(_) !== null ? !1 : (Xt && ji(_), !0);
  }, Za = function(_, I) {
    if (Qt(Ee.beforeSanitizeElements, _, null), dn(_, I))
      return !0;
    if (Kt(_))
      return En(_), !0;
    const G = We(te(_));
    if (A = us(Ee.uponSanitizeElement, A, O, Ze), Qt(Ee.uponSanitizeElement, _, {
      tagName: G,
      allowedTags: A
    }), dn(_, I))
      return !0;
    if (al(_, G))
      return En(_), !0;
    if (K[G] || !(H.tagCheck instanceof Function && H.tagCheck(G)) && !A[G]) {
      const pe = rl(_, G, I);
      return pe === !1 && Qt(Ee.afterSanitizeElements, _, null), pe;
    }
    if (Q(_) === nn.element && !Yn(_) || (G === "noscript" || G === "noembed" || G === "noframes") && Nt(qg, _.innerHTML))
      return En(_), !0;
    if (Ae && _.nodeType === nn.text) {
      const pe = un(_.textContent);
      _.textContent !== pe && (sr(t.removed, {
        element: _.cloneNode()
      }), _.textContent = pe);
    }
    return Qt(Ee.afterSanitizeElements, _, null), !1;
  }, Gi = function(_, I, G) {
    if (X[I] || cs(I, _) || At && (I === "id" || I === "name") && (G in n || G in _a))
      return !1;
    const oe = N[I] || H.attributeCheck instanceof Function && H.attributeCheck(I, _);
    return ae && Nt($t, I) || me && Nt(it, I) ? !0 : oe ? Va[I] || Nt(w, or(G, U, "")) || (I === "src" || I === "xlink:href" || I === "href") && _ !== "script" && Yu(G, "data:") === 0 && Kn[_] || fe && !Nt(Zt, or(G, U, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      fs(_) && Ki(V.tagNameCheck, _) && Ki(V.attributeNameCheck, I, _) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && V.allowCustomizedBuiltInElements && Ki(V.tagNameCheck, G)
    );
  }, ds = ze({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), fs = function(_) {
    return !ds[vr(_)] && Nt(g, _);
  }, hs = function(_, I, G, oe) {
    if (D && typeof p == "object" && typeof p.getAttributeType == "function" && !G)
      switch (p.getAttributeType(_, I)) {
        case "TrustedHTML":
          return F(oe);
        case "TrustedScriptURL":
          return W(oe);
      }
    return oe;
  }, sl = function(_, I, G, oe) {
    try {
      G ? _.setAttributeNS(G, I, oe) : _.setAttribute(I, oe), Kt(_) ? En(_) : qu(t.removed);
    } catch {
      Tn(I, _);
    }
  }, Sa = function(_) {
    Qt(Ee.beforeSanitizeAttributes, _, null);
    const I = _.attributes;
    if (!I || Kt(_))
      return;
    N = us(Ee.uponSanitizeAttribute, N, z, ft);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let oe = I.length;
    const pe = We(_.nodeName);
    for (; oe--; ) {
      const Ce = I[oe], He = Ce.name, Xe = Ce.namespaceURI, Ot = Ce.value, xt = We(He), Ja = Ot;
      let pt = He === "value" ? Ja : xg(Ja);
      if (G.attrName = xt, G.attrValue = pt, G.keepAttr = !0, G.forceKeepAttr = void 0, Qt(Ee.uponSanitizeAttribute, _, G), pt = G.attrValue, zi && (xt === "id" || xt === "name") && Yu(pt, Ui) !== 0 && (Tn(He, _, Ce), pt = Ui + pt), Ie && Nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        Tn(He, _, Ce);
        continue;
      }
      if (xt === "attributename" && Wu(pt, "href")) {
        Tn(He, _, Ce);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          Tn(He, _, Ce);
          continue;
        }
        if (!ye && Nt(Wg, pt)) {
          Tn(He, _, Ce);
          continue;
        }
        if (Ae && (pt = un(pt)), !Gi(pe, xt, pt)) {
          Tn(He, _, Ce);
          continue;
        }
        pt = hs(pe, xt, Xe, pt), pt !== Ja && sl(_, He, Xe, pt);
      }
    }
    Qt(Ee.afterSanitizeAttributes, _, null);
  }, qi = function(_) {
    let I = null;
    const G = Vi(_);
    for (Qt(Ee.beforeSanitizeShadowDOM, _, null); I = G.nextNode(); )
      if (Qt(Ee.uponSanitizeShadowNode, I, null), Za(I, _), Sa(I), Ut(I.content) && qi(I.content), Q(I) === nn.element) {
        const oe = M(I);
        Ut(oe) && (Xa(oe), qi(oe));
      }
    Qt(Ee.afterSanitizeShadowDOM, _, null);
  }, Xa = function(_) {
    const I = [{
      node: _,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const G = I.pop();
      if (G.shadow) {
        qi(G.shadow);
        continue;
      }
      const oe = G.node, Ce = Q(oe) === nn.element, He = R(oe);
      if (He)
        for (let Xe = He.length - 1; Xe >= 0; --Xe)
          I.push({
            node: He[Xe],
            shadow: null
          });
      if (Ce) {
        const Xe = le ? le(oe) : null;
        if (typeof Xe == "string" && We(Xe) === "template") {
          const Ot = oe.content;
          Ut(Ot) && I.push({
            node: Ot,
            shadow: null
          });
        }
      }
      if (Ce) {
        const Xe = M(oe);
        Ut(Xe) && I.push({
          node: null,
          shadow: Xe
        }, {
          node: Xe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, G = null, oe = null, pe = null;
    if (bi = !Z, bi && (Z = "<!-->"), typeof Z != "string" && !wt(Z) && (Z = Pg(Z), typeof Z != "string"))
      throw Ji("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Ye ? (A = Ze, N = ft) : Ga(_), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (A = an(A)), Ee.uponSanitizeAttribute.length > 0 && (N = an(N)), t.removed = [];
    const Ce = Xt && typeof Z != "string" && wt(Z);
    if (Ce) {
      Ya(Z);
      const Ot = te(Z);
      if (typeof Ot == "string") {
        const xt = We(Ot);
        if (!A[xt] || K[xt])
          throw Pn(Z), Ji("root node is forbidden and cannot be sanitized in-place");
      }
      if (Kt(Z))
        throw Pn(Z), Ji("root node is clobbered and cannot be sanitized in-place");
      try {
        Xa(Z);
      } catch (xt) {
        throw Pn(Z), xt;
      }
    } else if (wt(Z))
      I = yi("<!---->"), G = I.ownerDocument.importNode(Z, !0), G.nodeType === nn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? I = G : I.appendChild(G), Xa(G);
    else {
      if (!zt && !Ae && !Re && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return D && rt ? F(Z) : Z;
      if (I = yi(Z), !I)
        return zt ? null : rt ? se : "";
    }
    I && _t && En(I.firstChild);
    const He = Ce ? Z : I;
    try {
      const Ot = Vi(He);
      for (; oe = Ot.nextNode(); )
        Za(oe, He), Sa(oe), Ut(oe.content) && qi(oe.content);
    } catch (Ot) {
      throw Ce && (Pn(Z), ta(t.removed, (xt) => {
        xt.element && ji(xt.element);
      })), Ot;
    }
    if (Ce)
      return ta(t.removed, (Ot) => {
        Ot.element && ji(Ot.element);
      }), Ae && _i(Z), Z;
    if (zt) {
      if (Ae && _i(I), Ln)
        for (pe = _e.call(I.ownerDocument); I.firstChild; )
          pe.appendChild(I.firstChild);
      else
        pe = I;
      return (N.shadowroot || N.shadowrootmode) && (pe = qe.call(i, pe, !0)), pe;
    }
    let Xe = Re ? I.outerHTML : I.innerHTML;
    return Re && A["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Nt(Kg, I.ownerDocument.doctype.name) && (Xe = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Xe), Ae && (Xe = un(Xe)), D && rt ? F(Xe) : Xe;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ga(Z), Ye = !0, Ze = A, ft = N;
  }, t.clearConfig = function() {
    cn = null, Ye = !1, Ze = null, ft = null, D = ve, se = "";
  }, t.isValidAttribute = function(Z, _, I) {
    cn || Ga({});
    const G = We(Z), oe = We(_);
    return Gi(G, oe, I);
  }, t.addHook = function(Z, _) {
    typeof _ == "function" && qt(Ee, Z) && sr(Ee[Z], _);
  }, t.removeHook = function(Z, _) {
    if (qt(Ee, Z)) {
      if (_ !== void 0) {
        const I = Ag(Ee[Z], _);
        return I === -1 ? void 0 : Og(Ee[Z], I, 1)[0];
      }
      return qu(Ee[Z]);
    }
  }, t.removeHooks = function(Z) {
    qt(Ee, Z) && (Ee[Z] = []);
  }, t.removeAllHooks = function() {
    Ee = rd();
  }, t;
}
var Ch = wh();
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tl, sd;
function Qg() {
  if (sd) return Tl;
  sd = 1;
  var e = /["'&<>]/;
  Tl = t;
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
  return Tl;
}
var eb = Qg();
const Ys = /* @__PURE__ */ Hc(eb);
function tb() {
  return globalThis._nc_l10n_locale;
}
function nb() {
  return tb().replaceAll(/_/g, "-");
}
function Xo() {
  return globalThis._nc_l10n_language;
}
function ib(e) {
  const t = Xo();
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
function Sh(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function v(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (T) => T, h = (o.sanitize ? Ch.sanitize : l) || l, c = o.escape ? Ys : l, p = (T) => typeof T == "string" || typeof T == "number", y = (T, R, L) => T.replace(/%n/g, "" + L).replace(/{([^{}]*)}/g, (M, j) => {
    if (R === void 0 || !(j in R))
      return c(M);
    const $ = R[j];
    return p($) ? c(`${$}`) : typeof $ == "object" && p($.value) ? ($.escape !== !1 ? Ys : l)(`${$.value}`) : c(M);
  });
  let x = (a?.bundle ?? Sh(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, h(typeof r == "object" || s !== void 0 ? y(
    x,
    r,
    s
  ) : x);
}
function mr(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Sh(e), l = o.translations[s];
  if (typeof l < "u") {
    const h = l;
    if (Array.isArray(h)) {
      const c = o.pluralFunction(i);
      return v(e, h[c], a, i, r);
    }
  }
  return i === 1 ? v(e, t, a, i, r) : v(e, n, a, i, r);
}
function ab(e, t = Xo()) {
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
class Zs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Zs.GLOBAL_SCOPE_PERSISTENT : Zs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class rb {
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
    return new Zs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Eh(e) {
  return new rb(e);
}
function sb() {
  try {
    return Bc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var kl, od;
function Th() {
  if (od) return kl;
  od = 1;
  var e = {};
  return kl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, kl;
}
var Al, ld;
function kh() {
  if (ld) return Al;
  ld = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Al = {
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
  }, Al;
}
var ws = { exports: {} }, cd;
function ob() {
  return cd || (cd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = kh(), r = Th();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], h = t.safeSrc = [], c = t.t = {};
    let p = 0;
    const y = "[a-zA-Z0-9-]", S = [
      ["\\s", 1],
      ["\\d", a],
      [y, i]
    ], x = (R) => {
      for (const [L, M] of S)
        R = R.split(`${L}*`).join(`${L}{0,${M}}`).split(`${L}+`).join(`${L}{1,${M}}`);
      return R;
    }, T = (R, L, M) => {
      const j = x(L), $ = p++;
      r(R, $, L), c[R] = $, l[$] = L, h[$] = j, s[$] = new RegExp(L, M ? "g" : void 0), o[$] = new RegExp(j, M ? "g" : void 0);
    };
    T("NUMERICIDENTIFIER", "0|[1-9]\\d*"), T("NUMERICIDENTIFIERLOOSE", "\\d+"), T("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${y}*`), T("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), T("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), T("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), T("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), T("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), T("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), T("BUILDIDENTIFIER", `${y}+`), T("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), T("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), T("FULL", `^${l[c.FULLPLAIN]}$`), T("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), T("LOOSE", `^${l[c.LOOSEPLAIN]}$`), T("GTLT", "((?:<|>)?=?)"), T("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), T("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), T("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), T("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), T("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), T("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), T("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), T("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), T("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), T("COERCERTL", l[c.COERCE], !0), T("COERCERTLFULL", l[c.COERCEFULL], !0), T("LONETILDE", "(?:~>?)"), T("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", T("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), T("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), T("LONECARET", "(?:\\^)"), T("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", T("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), T("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), T("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), T("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), T("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", T("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), T("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), T("STAR", "(<|>)?=?\\s*\\*"), T("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), T("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ws, ws.exports)), ws.exports;
}
var Ol, ud;
function lb() {
  if (ud) return Ol;
  ud = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ol = (i) => i ? typeof i != "object" ? e : i : t, Ol;
}
var xl, dd;
function cb() {
  if (dd) return xl;
  dd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return xl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, xl;
}
var Nl, fd;
function Ah() {
  if (fd) return Nl;
  fd = 1;
  const e = Th(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = kh(), { safeRe: i, t: a } = ob(), r = lb(), { compareIdentifiers: s } = cb(), o = (h, c) => {
    const p = c.split(".");
    if (p.length > h.length)
      return !1;
    for (let y = 0; y < p.length; y++)
      if (s(h[y], p[y]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(c, p) {
      if (p = r(p), c instanceof l) {
        if (c.loose === !!p.loose && c.includePrerelease === !!p.includePrerelease)
          return c;
        c = c.version;
      } else if (typeof c != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
      if (c.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", c, p), this.options = p, this.loose = !!p.loose, this.includePrerelease = !!p.includePrerelease;
      const y = c.trim().match(p.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!y)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +y[1], this.minor = +y[2], this.patch = +y[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      y[4] ? this.prerelease = y[4].split(".").map((S) => {
        if (/^[0-9]+$/.test(S)) {
          const x = +S;
          if (x >= 0 && x < n)
            return x;
        }
        return S;
      }) : this.prerelease = [], this.build = y[5] ? y[5].split(".") : [], this.format();
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
      let p = 0;
      do {
        const y = this.prerelease[p], S = c.prerelease[p];
        if (e("prerelease compare", p, y, S), y === void 0 && S === void 0)
          return 0;
        if (S === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === S)
          continue;
        return s(y, S);
      } while (++p);
    }
    compareBuild(c) {
      c instanceof l || (c = new l(c, this.options));
      let p = 0;
      do {
        const y = this.build[p], S = c.build[p];
        if (e("build compare", p, y, S), y === void 0 && S === void 0)
          return 0;
        if (S === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === S)
          continue;
        return s(y, S);
      } while (++p);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, p, y) {
      if (c.startsWith("pre")) {
        if (!p && y === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (p) {
          const S = `-${p}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!S || S[1] !== p)
            throw new Error(`invalid identifier: ${p}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", p, y);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", p, y);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", p, y), this.inc("pre", p, y);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", p, y), this.inc("pre", p, y);
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
          const S = Number(y) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [S];
          else {
            let x = this.prerelease.length;
            for (; --x >= 0; )
              typeof this.prerelease[x] == "number" && (this.prerelease[x]++, x = -2);
            if (x === -1) {
              if (p === this.prerelease.join(".") && y === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(S);
            }
          }
          if (p) {
            let x = [p, S];
            if (y === !1 && (x = [p]), o(this.prerelease, p)) {
              const T = this.prerelease[p.split(".").length];
              isNaN(T) && (this.prerelease = x);
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
  return Nl = l, Nl;
}
var Rl, hd;
function ub() {
  if (hd) return Rl;
  hd = 1;
  const e = Ah();
  return Rl = (n, i) => new e(n, i).major, Rl;
}
var db = ub();
const pd = /* @__PURE__ */ Hc(db);
var Ll, vd;
function fb() {
  if (vd) return Ll;
  vd = 1;
  const e = Ah();
  return Ll = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Ll;
}
var Il, md;
function hb() {
  if (md) return Il;
  md = 1;
  const e = fb();
  return Il = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Il;
}
var pb = hb();
const vb = /* @__PURE__ */ Hc(pb);
class mb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !vb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : pd(t.getVersion()) !== pd(this.getVersion()) && console.warn(
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
class gb {
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
let cr = null;
function jc() {
  return cr !== null ? cr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? cr = new mb(window._nc_event_bus) : cr = window._nc_event_bus = new gb(), cr);
}
function Oh(e, t) {
  jc().subscribe(e, t);
}
function bb(e, t) {
  jc().unsubscribe(e, t);
}
function ui(e, ...t) {
  jc().emit(e, ...t);
}
const xh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yb = Object.prototype.toString, _b = (e) => yb.call(e) === "[object Object]", Oa = () => {
}, wb = /* @__PURE__ */ Cb();
function Cb() {
  var e, t, n;
  return xh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Pl(e) {
  return Array.isArray(e) ? e : [e];
}
function Sb(e, t, n) {
  return Yt(e, t, {
    ...n,
    immediate: !0
  });
}
const Nh = xh ? window : void 0;
function gr(e) {
  var t;
  const n = oi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ua(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = Pl(oi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Sb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => gr(r))) !== null && i !== void 0 ? i : [Nh].filter((r) => r != null),
      Pl(oi(n.value ? e[1] : e[0])),
      Pl(f(n.value ? e[2] : e[1])),
      oi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = _b(s) ? { ...s } : s, c = i.flatMap((p) => a.flatMap((y) => r.map((S) => t(p, y, S, h))));
    l(() => {
      c.forEach((p) => p());
    });
  }, { flush: "post" });
}
let gd = !1;
function bd(e, t, n = {}) {
  const { window: i = Nh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Oa,
    cancel: Oa,
    trigger: Oa
  } : Oa;
  if (wb && !gd) {
    gd = !0;
    const R = { passive: !0 };
    Array.from(i.document.body.children).forEach((L) => L.addEventListener("click", Oa, R)), i.document.documentElement.addEventListener("click", Oa, R);
  }
  let l = !0;
  const h = (R) => oi(a).some((L) => {
    if (typeof L == "string") return Array.from(i.document.querySelectorAll(L)).some((M) => M === R.target || R.composedPath().includes(M));
    {
      const M = gr(L);
      return M && (R.target === M || R.composedPath().includes(M));
    }
  });
  function c(R) {
    const L = oi(R);
    return L && L.$.subTree.shapeFlag === 16;
  }
  function p(R, L) {
    const M = oi(R), j = M.$.subTree && M.$.subTree.children;
    return j == null || !Array.isArray(j) ? !1 : j.some(($) => $.el === L.target || L.composedPath().includes($.el));
  }
  const y = (R) => {
    const L = gr(e);
    if (R.target != null && !(!(L instanceof Element) && c(e) && p(e, R)) && !(!L || L === R.target || R.composedPath().includes(L))) {
      if ("detail" in R && R.detail === 0 && (l = !h(R)), !l) {
        l = !0;
        return;
      }
      t(R);
    }
  };
  let S = !1;
  const x = [
    Ua(i, "click", (R) => {
      S || (S = !0, setTimeout(() => {
        S = !1;
      }, 0), y(R));
    }, {
      passive: !0,
      capture: r
    }),
    Ua(i, "pointerdown", (R) => {
      const L = gr(e);
      l = !h(R) && !!(L && !R.composedPath().includes(L));
    }, { passive: !0 }),
    s && Ua(i, "blur", (R) => {
      setTimeout(() => {
        const L = gr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !L?.contains(i.document.activeElement) && t(R);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), T = () => x.forEach((R) => R());
  return o ? {
    stop: T,
    cancel: () => {
      l = !1;
    },
    trigger: (R) => {
      l = !0, y(R), l = !1;
    }
  } : T;
}
function Eb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ jt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ jt({
    x: 0,
    y: 0
  }), h = q(() => o.x - l.x), c = q(() => o.y - l.y), { max: p, abs: y } = Math, S = q(() => p(y(h.value), y(c.value)) >= n), x = /* @__PURE__ */ Cf(!1), T = q(() => S.value ? y(h.value) > y(c.value) ? h.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), R = (Q) => [Q.touches[0].clientX, Q.touches[0].clientY], L = (Q, te) => {
    o.x = Q, o.y = te;
  }, M = (Q, te) => {
    l.x = Q, l.y = te;
  }, j = {
    passive: s,
    capture: !s
  }, $ = (Q) => {
    x.value && a?.(Q, T.value), x.value = !1;
  }, le = [
    Ua(e, "touchstart", (Q) => {
      if (Q.touches.length !== 1) return;
      const [te, D] = R(Q);
      L(te, D), M(te, D), r?.(Q);
    }, j),
    Ua(e, "touchmove", (Q) => {
      if (Q.touches.length !== 1) return;
      const [te, D] = R(Q);
      M(te, D), j.capture && !j.passive && Math.abs(h.value) > Math.abs(c.value) && Q.preventDefault(), !x.value && S.value && (x.value = !0), x.value && i?.(Q);
    }, j),
    Ua(e, ["touchend", "touchcancel"], $, j)
  ];
  return {
    isSwiping: x,
    direction: T,
    coordsStart: o,
    coordsEnd: l,
    lengthX: h,
    lengthY: c,
    stop: () => le.forEach((Q) => Q())
  };
}
var Tb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Qv(), r = Jv(), s = /* @__PURE__ */ mt([]), o = q(() => s.value.reduce((U, g) => (U[~~g.id] = g) && U, {})), l = q(() => s.value.length), h = /* @__PURE__ */ mt(null), c = /* @__PURE__ */ mt(!1), p = /* @__PURE__ */ mt({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), y = /* @__PURE__ */ mt({
      splitter: null,
      timeoutId: null
    }), S = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": p.value.dragging,
      "splitpanes--ready": c.value
    })), x = () => {
      document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("touchend", M));
    }, T = () => {
      document.removeEventListener("mousemove", L, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", L, { passive: !1 }), document.removeEventListener("touchend", M));
    }, R = (U, g) => {
      let w = U.target.closest(".splitpanes__splitter");
      if (w) {
        let { left: A, top: O } = w.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        p.value.cursorOffset = i.horizontal ? z - O : N - A;
      }
      x(), p.value.mouseDown = !0, p.value.activeSplitter = g, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, L = (U) => {
      p.value.mouseDown && (U.preventDefault(), p.value.dragging || (window.getSelection()?.removeAllRanges(), p.value.dragging = !0), requestAnimationFrame(() => {
        D(Q(U)), it("resize", { event: U }, !0);
      }));
    }, M = (U) => {
      p.value.dragging && (window.getSelection()?.removeAllRanges(), it("resized", { event: U }, !0)), p.value.mouseDown = !1, p.value.activeSplitter = null, setTimeout(() => {
        p.value.dragging = !1, T(), document.documentElement.style.cursor = "";
      }, 100);
    }, j = (U, g) => {
      "ontouchstart" in window && (U.preventDefault(), y.value.splitter === g ? (clearTimeout(y.value.timeoutId), y.value.timeoutId = null, $(U, g), y.value.splitter = null) : (y.value.splitter = g, y.value.timeoutId = setTimeout(() => y.value.splitter = null, 500))), p.value.dragging || it("splitter-click", {
        event: U,
        index: g
      }, !0);
    }, $ = (U, g) => {
      if (it("splitter-dblclick", {
        event: U,
        index: g
      }, !0), i.maximizePanes) {
        let w = 0;
        s.value = s.value.map((A, O) => (A.size = O === g ? A.max : A.min, O !== g && (w += A.min), A)), s.value[g].size -= w, it("pane-maximize", {
          event: U,
          index: g,
          pane: s.value[g]
        }), it("resized", {
          event: U,
          index: g
        }, !0);
      }
    }, le = (U, g) => {
      if (!i.keyboardStep) return;
      let w = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", A = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!w && !A) return;
      U.preventDefault(), p.value.activeSplitter = g;
      let O = (w ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = Y(g) + s.value[g].size;
      se(Math.min(Math.max(N + O * i.keyboardStep, 0), 100)), it("resize", { event: U }, !0), it("resized", { event: U }, !0), p.value.activeSplitter = null;
    }, de = (U, g) => {
      let w = o.value[g];
      w && it("pane-click", {
        event: U,
        index: w.index,
        pane: w
      });
    }, Q = (U) => {
      let g = h.value.getBoundingClientRect(), { clientX: w, clientY: A } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: w - (i.horizontal ? 0 : p.value.cursorOffset) - g.left,
        y: A - (i.horizontal ? p.value.cursorOffset : 0) - g.top
      };
    }, te = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let g = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = g - U), U * 100 / g;
    }, D = (U) => {
      se(te(U));
    }, se = (U) => {
      let g = p.value.activeSplitter;
      if (g === null || g >= s.value.length - 1) return;
      let w = {
        prevPanesSize: Y(g),
        nextPanesSize: ne(g),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, A = 0 + (i.pushOtherPanes ? 0 : w.prevPanesSize), O = 100 - (i.pushOtherPanes ? 0 : w.nextPanesSize);
      U = Math.max(Math.min(U, O), A);
      let N = [g, g + 1], z = s.value[N[0]] || null, V = s.value[N[1]] || null, K = z !== null && z.max < 100 && U >= z.max + w.prevPanesSize, X = V !== null && V.max < 100 && U <= 100 - (V.max + ne(g + 1));
      if (K || X) {
        K ? (z.size = z.max, V.size = Math.min(Math.max(100 - z.max - w.prevPanesSize - w.nextPanesSize, V.min), V.max)) : (z.size = Math.min(Math.max(100 - V.max - w.prevPanesSize - ne(g + 1), z.min), z.max), V.size = V.max);
        return;
      }
      if (i.pushOtherPanes) {
        let H = ve(w, U);
        if (!H) return;
        ({ sums: w, panesToResize: N } = H), z = s.value[N[0]] || null, V = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - w.prevPanesSize - w.prevReachedMinPanes, z.min), z.max)), V !== null && (V.size = Math.min(Math.max(100 - U - w.nextPanesSize - w.nextReachedMinPanes, V.min), V.max));
    }, ve = (U, g) => {
      let w = p.value.activeSplitter, A = [w, w + 1];
      if (g < U.prevPanesSize + s.value[A[0]].min) {
        if (A[0] = P(w).index, U.prevReachedMinPanes = 0, A[0] < w && s.value.forEach((O, N) => {
          N > A[0] && N <= w && (O.size = O.min, U.prevReachedMinPanes += O.min);
        }), A[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((O, N) => {
          N > 0 && N <= w && (O.size = O.min, U.prevReachedMinPanes += O.min);
        }), s.value[A[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = Y(A[0]);
      }
      return g > 100 - U.nextPanesSize - s.value[A[1]].min && (A[1] = F(w).index, U.nextReachedMinPanes = 0, A[1] > w + 1 && s.value.forEach((O, N) => {
        N > w && N < A[1] && (O.size = O.min, U.nextReachedMinPanes += O.min);
      }), U.nextPanesSize = A[1] === void 0 ? 0 : ne(A[1] - 1), A[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((O, N) => {
        N >= w + 1 && (O.size = O.min, U.nextReachedMinPanes += O.min);
      }), A[0] !== void 0 && (s.value[A[0]].size = 100 - U.prevPanesSize - ne(A[0] - 1)), null) : {
        sums: U,
        panesToResize: A
      };
    }, Y = (U) => s.value.reduce((g, w, A) => g + (A < U ? w.size : 0), 0), ne = (U) => s.value.reduce((g, w, A) => g + (A > U + 1 ? w.size : 0), 0), P = (U) => [...s.value].reverse().find((g) => g.index < U && g.size > g.min) || {}, F = (U) => s.value.find((g) => g.index > U + 1 && g.size > g.min) || {}, W = () => {
      let U = Array.from(h.value?.children || []);
      for (let g of U) {
        let w = g.classList.contains("splitpanes__pane"), A = g.classList.contains("splitpanes__splitter");
        !w && !A && (g.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, g, w = !1) => {
      let A = U - 1, O = document.createElement("div");
      O.classList.add("splitpanes__splitter"), w || (O.onmousedown = (N) => R(N, A), typeof window < "u" && "ontouchstart" in window && (O.ontouchstart = (N) => R(N, A)), O.onclick = (N) => j(N, A + 1), i.keyboardStep && (O.setAttribute("tabindex", "0"), O.setAttribute("role", "separator"), O.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), O.onkeydown = (N) => le(N, A))), O.ondblclick = (N) => $(N, A + 1), g.parentNode.insertBefore(O, g);
    }, ee = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, ce = () => {
      let U = Array.from(h.value?.children || []);
      for (let w of U) w.className.includes("splitpanes__splitter") && ee(w);
      let g = 0;
      for (let w of U) w.className.includes("splitpanes__pane") && (!g && i.firstSplitter ? re(g, w, !0) : g && re(g, w), g++);
    }, he = ({ uid: U, ...g }) => {
      let w = o.value[U];
      for (let [A, O] of Object.entries(g)) w[A] = O;
    }, _e = !1, ge = (U) => {
      let g = -1;
      Array.from(h.value?.children || []).some((w) => (w.className.includes("splitpanes__pane") && g++, w.isSameNode(U.el))), s.value.splice(g, 0, {
        ...U,
        index: g
      }), s.value.forEach((w, A) => w.index = A), c.value && !_e && (_e = !0, li(() => {
        ce(), Ee({ addedPane: s.value[g] }), it("pane-add", { pane: s.value[g] }), _e = !1;
      }));
    }, qe = (U) => {
      let g = s.value.findIndex((A) => A.id === U);
      s.value[g].el = null;
      let w = s.value.splice(g, 1)[0];
      s.value.forEach((A, O) => A.index = O), li(() => {
        ce(), it("pane-remove", { pane: w }), Ee({ removedPane: {
          ...w
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? st() : s.value.some((g) => g.givenSize !== null || g.min || g.max < 100) ? dt(U) : nt(), c.value && it("resized");
    }, nt = () => {
      let U = 100 / l.value, g = 100, w = [], A = [];
      for (let O of s.value) O.size = Math.max(Math.min(U, O.max), O.min), g -= O.size, O.size >= O.max && w.push(O.id), O.size <= O.min && A.push(O.id);
      Math.abs(g) > 0.1 && $t(g, w, A);
    }, st = () => {
      let U = 100, g = [], w = [], A = 0;
      for (let N of s.value) U -= N.size, N.givenSize !== null && A++, N.size >= N.max && g.push(N.id), N.size <= N.min && w.push(N.id);
      let O = 100;
      if (U > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(U / (l.value - A), N.max), N.min)), O -= N.size;
        O > 0.1 && $t(O, g, w);
      }
    }, dt = ({ addedPane: U, removedPane: g } = {}) => {
      let w = s.value.reduce((K, X) => K + (X.givenSize === null ? 0 : X.givenSize), 0), A = s.value.filter((K) => K.givenSize === null).length, O = A > 0 ? (100 - w) / A : 0, N = 0, z = [], V = [];
      for (let K of s.value) N -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && V.push(K.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let K of s.value) K.givenSize === null && (K.size = Math.max(Math.min(O, K.max), K.min)), N -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && V.push(K.id);
        Math.abs(N) > 0.1 && $t(N, z, V);
      }
    }, $t = (U, g, w) => {
      let A;
      A = U > 0 ? U / (l.value - g.length) : U / (l.value - w.length), s.value.forEach((O, N) => {
        if (U > 0 && !g.includes(O.id)) {
          let z = Math.max(Math.min(O.size + A, O.max), O.min), V = z - O.size;
          U -= V, O.size = z;
        } else if (!w.includes(O.id)) {
          let z = Math.max(Math.min(O.size + A, O.max), O.min), V = z - O.size;
          U -= V, O.size = z;
        }
      }), Math.abs(U) > 0.1 && c.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, it = (U, g = void 0, w = !1) => {
      let A = g?.index ?? p.value.activeSplitter ?? null;
      n(U, {
        ...g,
        ...A !== null && { index: A },
        ...w && A !== null && {
          prevPane: s.value[A - +!!i.firstSplitter],
          nextPane: s.value[A + +!i.firstSplitter]
        },
        panes: s.value.map((O) => ({
          min: O.min,
          max: O.max,
          size: O.size
        }))
      });
    };
    Yt(() => i.firstSplitter, () => ce()), Yt(() => i.horizontal, (U) => li(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((g) => ({
          min: g.min,
          max: g.max,
          size: g.size
        }))
      });
    })), Mi(() => {
      W(), ce(), Ee(), it("ready"), c.value = !0;
    }), ja(() => c.value = !1);
    let Zt = () => {
      let { class: U, ...g } = a;
      return Gt("div", {
        ref: h,
        class: [S.value, U],
        ...g
      }, r.default?.());
    };
    return vn("panes", s), vn("indexedPanes", o), vn("horizontal", q(() => i.horizontal)), vn("requestUpdate", he), vn("onPaneAdd", ge), vn("onPaneRemove", qe), vn("onPaneClick", de), (U, g) => (b(), Me(Dc(Zt)));
  }
}), kb = {
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
    let t = e, n = It("requestUpdate"), i = It("onPaneAdd"), a = It("horizontal"), r = It("onPaneRemove"), s = It("onPaneClick"), o = pa()?.uid, l = It("indexedPanes"), h = q(() => l.value[o]), c = /* @__PURE__ */ mt(null), p = q(() => {
      let T = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(T, S.value), y.value);
    }), y = q(() => {
      let T = parseFloat(t.minSize);
      return isNaN(T) ? 0 : T;
    }), S = q(() => {
      let T = parseFloat(t.maxSize);
      return isNaN(T) ? 100 : T;
    }), x = q(() => {
      let T = h.value?.size ?? (t.size === void 0 ? void 0 : p.value);
      return T === void 0 ? "" : `${a.value ? "height" : "width"}: ${T}%`;
    });
    return Yt(() => p.value, (T) => n({
      uid: o,
      size: T
    })), Yt(() => y.value, (T) => n({
      uid: o,
      min: T
    })), Yt(() => S.value, (T) => n({
      uid: o,
      max: T
    })), Mi(() => {
      i({
        id: o,
        el: c.value,
        min: y.value,
        max: S.value,
        givenSize: t.size === void 0 ? null : p.value,
        size: p.value
      });
    }), ja(() => r(o)), (T, R) => (b(), C("div", {
      ref_key: "paneEl",
      ref: c,
      class: "splitpanes__pane",
      onClick: R[0] ||= (L) => f(s)(L, T._.uid),
      style: yn(x.value)
    }, [Ne(T.$slots, "default")], 4));
  }
}, Ab = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Ob = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", xb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Nb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Vc = 1024, Rh = Vc / 2, Xs = (e) => document.documentElement.clientWidth < e, Lh = /* @__PURE__ */ mt(Xs(Vc)), Ih = /* @__PURE__ */ mt(Xs(Rh));
window.addEventListener("resize", () => {
  Lh.value = Xs(Vc), Ih.value = Xs(Rh);
}, { passive: !0 });
function as() {
  return /* @__PURE__ */ Fr(Lh);
}
function Rb() {
  return /* @__PURE__ */ Fr(Ih);
}
class Lb {
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
    return v("", t, n, void 0, { bundle: this.bundle });
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
    return mr("", t, n, i, a, { bundle: this.bundle });
  }
}
class Ib {
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
    return this.setLanguage(Xo().replace("-", "_"));
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
    const t = new Lb((n) => ab(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Pb() {
  return new Ib();
}
const Ph = Pb().detectLanguage().build(), bt = (...e) => Ph.gettext(...e);
function Fi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Xo() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Ph.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Db = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Mb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Fb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], $b = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], zb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Ub = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Bb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Hb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], jb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Vb = /* @__PURE__ */ Symbol(""), [Kb] = window.OC?.config?.version?.split(".") ?? [], Dh = Number.parseInt(Kb ?? "35"), Gb = Dh < 32, $i = Dh < 34, qb = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Wb() {
  return It(qb, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Yb = { class: "button-vue__wrapper" }, Zb = { class: "button-vue__icon" }, Xb = { class: "button-vue__text" }, Jb = /* @__PURE__ */ kt({
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
    const n = e, i = t, { formBoxItemClass: a } = Wb(), r = It(Vb, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = q(() => l.value.startsWith("tertiary")), c = q(() => n.alignment.split("-")[0]), p = q(() => n.alignment.includes("-")), y = It("NcPopover:trigger:attrs", () => ({}), !1), S = q(() => y()), x = q(() => {
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
          ...S.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function T(R) {
      o.value && i("update:pressed", !n.pressed), i("click", R);
    }
    return (R, L) => (b(), Me(Dc(s.value), Ft({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${c.value}`]: c.value !== "center",
          "button-vue--reverse": p.value,
          "button-vue--legacy": f(Gb),
          "button-vue--legacy34": f($i)
        },
        f(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: T }), {
      default: xe(() => [
        u("span", Yb, [
          u("span", Zb, [
            Ne(R.$slots, "icon", {}, void 0, !0)
          ]),
          u("span", Xb, [
            Ne(R.$slots, "default", {}, () => [
              Oe(d(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Hn = /* @__PURE__ */ Ge(Jb, [["__scopeId", "data-v-47ce59a3"]]), Qb = ["aria-hidden", "aria-label"], ey = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ty = ["d"], ny = ["innerHTML"], iy = /* @__PURE__ */ kt({
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
    qm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Ch.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), C("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), C("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, ny)) : (b(), C("svg", ey, [
        u("path", { d: e.path }, null, 8, ty)
      ]))
    ], 10, Qb));
  }
}), Jo = /* @__PURE__ */ Ge(iy, [["__scopeId", "data-v-aaedb1c3"]]);
ry();
function ay(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ui("csrf-token-update", { token: e, _internal: !0 }));
}
function ry() {
  Oh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || ay(e);
  });
}
Eh("public").persist().build();
let xa;
function yd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function sy() {
  if (xa !== void 0)
    return xa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = yd(e, "data-user");
  return t === null ? (xa = null, xa) : (xa = {
    uid: t,
    displayName: yd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, xa);
}
var lt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(lt || {});
class oy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + lt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === lt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case lt.Debug:
          console.debug(this.formatMessage(n, lt.Debug, i), i);
          break;
        case lt.Info:
          console.info(this.formatMessage(n, lt.Info, i), i);
          break;
        case lt.Warn:
          console.warn(this.formatMessage(n, lt.Warn, i), i);
          break;
        case lt.Error:
          console.error(this.formatMessage(n, lt.Error, i), i);
          break;
        case lt.Fatal:
        default:
          console.error(this.formatMessage(n, lt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(lt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(lt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(lt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(lt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(lt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function ly(e) {
  return new oy(e);
}
class cy {
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
    const t = sy();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? lt.Warn, window._oc_debug && (t.context.level = lt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function uy() {
  return new cy(ly);
}
const da = uy().detectUser().setApp("@nextcloud/vue").build();
function dy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Mh = "missing-app-name";
try {
  Mh = "library";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const fy = Mh;
let hy = "";
try {
  hy = "0.1.0-alpha.164";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Fh() {
  return It("appName", fy);
}
const py = dy(() => {
  const e = Bc("core", "apps", []), t = Fh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), sc = ib();
Fi(Bb);
const vy = /* @__PURE__ */ kt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = as();
    Yt(t, n), Mi(() => {
      n(t.value);
    }), ja(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ui("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), Me(f(Hn), {
      "aria-label": f(bt)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": f(t) }]),
      title: f(bt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: xe(() => [
        we(f(Jo), {
          directional: "",
          path: f(Ab)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), my = /* @__PURE__ */ Ge(vy, [["__scopeId", "data-v-a28923a1"]]), _d = Eh("nextcloud").persist().build(), gy = sb().theming?.name ?? "Nextcloud", by = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: my,
    Pane: kb,
    Splitpanes: Tb
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
      appName: Fh(),
      localizedAppName: py(),
      isMobile: as(),
      isRtl: sc
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
        return da.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(gy), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Eb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ui("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ui("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      _d.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), da.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(_d.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return da.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, yy = {
  key: 0,
  class: "hidden-visually"
}, _y = { class: "app-content-wrapper__list" }, wy = {
  key: 1,
  class: "app-content-wrapper"
};
function Cy(e, t, n, i, a, r) {
  const s = $e("NcAppContentDetailsToggle"), o = $e("Pane"), l = $e("Splitpanes");
  return b(), C("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), C("h1", yy, d(n.pageHeading), 1)) : B("", !0),
    e.$slots.list ? (b(), C(ue, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), C("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), Me(s, {
          key: 0,
          onClick: et(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : B("", !0),
        Je(u("div", _y, [
          Ne(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [$a, !n.showDetails]
        ]),
        n.showDetails ? Ne(e.$slots, "default", { key: 1 }, void 0, !0) : B("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), C("div", wy, [
        we(l, {
          horizontal: n.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: xe(() => [
            we(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: xe(() => [
                Ne(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            we(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: xe(() => [
                Ne(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : B("", !0)
    ], 64)) : B("", !0),
    e.$slots.list ? B("", !0) : Ne(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Sy = /* @__PURE__ */ Ge(by, [["render", Cy], ["__scopeId", "data-v-51427d61"]]);
var $h = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Js = /* @__PURE__ */ $h.join(","), zh = typeof Element > "u", ha = zh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qs = !zh && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, eo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : eo(t.parentNode));
  return s;
}, Ey = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Uh = function(t, n, i) {
  if (eo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Js));
  return n && ha.call(t, Js) && a.unshift(t), a = a.filter(i), a;
}, to = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!eo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, h = to(l, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: s,
          candidates: h
        });
      } else {
        var c = ha.call(s, Js);
        c && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var p = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), y = !eo(p, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (p && y) {
          var S = to(p === !0 ? s.children : p.children, !0, i);
          i.flatten ? a.push.apply(a, S) : a.push({
            scopeParent: s,
            candidates: S
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Bh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ra = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Ey(t)) && !Bh(t) ? 0 : t.tabIndex;
}, Ty = function(t, n) {
  var i = ra(t);
  return i < 0 && n && !Bh(t) ? 0 : i;
}, ky = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Hh = function(t) {
  return t.tagName === "INPUT";
}, Ay = function(t) {
  return Hh(t) && t.type === "hidden";
}, Oy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, xy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, Ny = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Qs(t), i = function(o) {
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
  var r = xy(a, t.form);
  return !r || r === t;
}, Ry = function(t) {
  return Hh(t) && t.type === "radio";
}, Ly = function(t) {
  return Ry(t) && !Ny(t);
}, Iy = function(t) {
  var n, i = t && Qs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var h, c, p;
      i = Qs(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((c = a) !== null && c !== void 0 && (p = c.ownerDocument) !== null && p !== void 0 && p.contains(a));
    }
  }
  return r;
}, wd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Py = function(t, n) {
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
  var l = ha.call(t, "details>summary:first-of-type"), h = l ? t.parentElement : t;
  if (ha.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var p = t.parentElement, y = Qs(t);
        if (p && !p.shadowRoot && a(p) === !0)
          return wd(t);
        t.assignedSlot ? t = t.assignedSlot : !p && y !== t.ownerDocument ? t = y.host : t = p;
      }
      t = c;
    }
    if (Iy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return wd(t);
  return !1;
}, Dy = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ha.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, no = function(t, n) {
  return !(n.disabled || Ay(n) || Py(n, t) || // For a details element with a summary, the summary element gets the focus
  Oy(n) || Dy(n));
}, oc = function(t, n) {
  return !(Ly(n) || ra(n) < 0 || !no(t, n));
}, My = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, jh = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Ty(o, s), h = s ? jh(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, h) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: h
    });
  }), i.sort(ky).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Fy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: oc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: My
  }) : i = Uh(t, n.includeContainer, oc.bind(null, n)), jh(i);
}, $y = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: no.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Uh(t, n.includeContainer, no.bind(null, n)), i;
}, Na = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, Js) === !1 ? !1 : oc(n, t);
}, zy = /* @__PURE__ */ $h.concat("iframe:not([inert]):not([inert] *)").join(","), Dl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, zy) === !1 ? !1 : no(n, t);
};
function lc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Uy(e) {
  if (Array.isArray(e)) return lc(e);
}
function Cd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Vh(e)) || t) {
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
function By(e, t, n) {
  return (t = Gy(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Hy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sd(Object(n), !0).forEach(function(i) {
      By(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Vy(e) {
  return Uy(e) || Hy(e) || Vh(e) || jy();
}
function Ky(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gy(e) {
  var t = Ky(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vh(e, t) {
  if (e) {
    if (typeof e == "string") return lc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lc(e, t) : void 0;
  }
}
var ri = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ri.getActiveTrap(t);
    n !== i && ri.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ri.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ri.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ri.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, qy = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Wy = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Er = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Yy = function(t) {
  return Er(t) && !t.shiftKey;
}, Zy = function(t) {
  return Er(t) && t.shiftKey;
}, Td = function(t) {
  return setTimeout(t, 0);
}, ur = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Cs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Xy = [], Kc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || Xy, r = Ed({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Yy,
    isKeyBackward: Zy
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
  }, o, l = function(P, F, W) {
    return P && P[F] !== void 0 ? P[F] : r[W || F];
  }, h = function(P, F) {
    var W = typeof F?.composedPath == "function" ? F.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ee = re.container, ce = re.tabbableNodes;
      return ee.contains(P) || W?.includes(ee) || ce.find(function(he) {
        return he === P;
      });
    });
  }, c = function(P) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = F.hasFallback, re = W === void 0 ? !1 : W, ee = F.params, ce = ee === void 0 ? [] : ee, he = r[P];
    if (typeof he == "function" && (he = he.apply(void 0, Vy(ce))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var _e = he;
    if (typeof he == "string") {
      try {
        _e = i.querySelector(he);
      } catch (ge) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(ge.message, '"'));
      }
      if (!_e && !re)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return _e;
  }, p = function(P) {
    var F = P.activeElement;
    return F ? F.shadowRoot && F.shadowRoot.activeElement !== null ? p(F.shadowRoot) : F : null;
  }, y = function() {
    var P = c("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !Dl(P, r.tabbableOptions)) {
      var F = p(i);
      if (h(F) >= 0)
        P = F;
      else {
        var W = s.tabbableGroups[0], re = W && W.firstTabbableNode;
        P = re || c("fallbackFocus");
      }
    } else P === null && (P = c("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, S = function() {
    if (s.containerGroups = s.containers.map(function(P) {
      var F = Fy(P, r.tabbableOptions), W = $y(P, r.tabbableOptions), re = F.length > 0 ? F[0] : void 0, ee = F.length > 0 ? F[F.length - 1] : void 0, ce = W.find(function(ge) {
        return Na(ge);
      }), he = W.slice().reverse().find(function(ge) {
        return Na(ge);
      }), _e = !!F.find(function(ge) {
        return ra(ge) > 0;
      });
      return {
        container: P,
        tabbableNodes: F,
        focusableNodes: W,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: _e,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: re,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ee,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: ce,
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
        nextTabbableNode: function(qe) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, nt = F.indexOf(qe);
          return nt < 0 ? Ee ? W.slice(W.indexOf(qe) + 1).find(function(st) {
            return Na(st);
          }) : W.slice(0, W.indexOf(qe)).reverse().find(function(st) {
            return Na(st);
          }) : F[nt + (Ee ? 1 : -1)];
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
  }, x = function(P) {
    if (P !== !1 && P !== p(document)) {
      if (!P || !P.focus) {
        x(y());
        return;
      }
      P.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = P, qy(P) && P.select();
    }
  }, T = function(P) {
    var F = c("setReturnFocus", {
      params: [P]
    });
    return F || (F === !1 ? !1 : P);
  }, R = function(P) {
    var F = P.target, W = P.event, re = P.isBackward, ee = re === void 0 ? !1 : re;
    F = F || Cs(W), S();
    var ce = null;
    if (s.tabbableGroups.length > 0) {
      var he = h(F, W), _e = he >= 0 ? s.containerGroups[he] : void 0;
      if (he < 0)
        ee ? ce = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ce = s.tabbableGroups[0].firstTabbableNode;
      else if (ee) {
        var ge = s.tabbableGroups.findIndex(function($t) {
          var it = $t.firstTabbableNode;
          return F === it;
        });
        if (ge < 0 && (_e.container === F || Dl(F, r.tabbableOptions) && !Na(F, r.tabbableOptions) && !_e.nextTabbableNode(F, !1)) && (ge = he), ge >= 0) {
          var qe = ge === 0 ? s.tabbableGroups.length - 1 : ge - 1, Ee = s.tabbableGroups[qe];
          ce = ra(F) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Er(W) || (ce = _e.nextTabbableNode(F, !1));
      } else {
        var nt = s.tabbableGroups.findIndex(function($t) {
          var it = $t.lastTabbableNode;
          return F === it;
        });
        if (nt < 0 && (_e.container === F || Dl(F, r.tabbableOptions) && !Na(F, r.tabbableOptions) && !_e.nextTabbableNode(F)) && (nt = he), nt >= 0) {
          var st = nt === s.tabbableGroups.length - 1 ? 0 : nt + 1, dt = s.tabbableGroups[st];
          ce = ra(F) >= 0 ? dt.firstTabbableNode : dt.firstDomTabbableNode;
        } else Er(W) || (ce = _e.nextTabbableNode(F));
      }
    } else
      ce = c("fallbackFocus");
    return ce;
  }, L = function(P) {
    var F = Cs(P);
    if (!(h(F, P) >= 0)) {
      if (ur(r.clickOutsideDeactivates, P)) {
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
      ur(r.allowOutsideClick, P) || P.preventDefault();
    }
  }, M = function(P) {
    var F = Cs(P), W = h(F, P) >= 0;
    if (W || F instanceof Document)
      W && (s.mostRecentlyFocusedNode = F);
    else {
      P.stopImmediatePropagation();
      var re, ee = !0;
      if (s.mostRecentlyFocusedNode)
        if (ra(s.mostRecentlyFocusedNode) > 0) {
          var ce = h(s.mostRecentlyFocusedNode), he = s.containerGroups[ce].tabbableNodes;
          if (he.length > 0) {
            var _e = he.findIndex(function(ge) {
              return ge === s.mostRecentlyFocusedNode;
            });
            _e >= 0 && (r.isKeyForward(s.recentNavEvent) ? _e + 1 < he.length && (re = he[_e + 1], ee = !1) : _e - 1 >= 0 && (re = he[_e - 1], ee = !1));
          }
        } else
          s.containerGroups.some(function(ge) {
            return ge.tabbableNodes.some(function(qe) {
              return ra(qe) > 0;
            });
          }) || (ee = !1);
      else
        ee = !1;
      ee && (re = R({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), x(re || s.mostRecentlyFocusedNode || y());
    }
    s.recentNavEvent = void 0;
  }, j = function(P) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = P;
    var W = R({
      event: P,
      isBackward: F
    });
    W && (Er(P) && P.preventDefault(), x(W));
  }, $ = function(P) {
    (r.isKeyForward(P) || r.isKeyBackward(P)) && j(P, r.isKeyBackward(P));
  }, le = function(P) {
    Wy(P) && ur(r.escapeDeactivates, P) !== !1 && (P.preventDefault(), o.deactivate());
  }, de = function(P) {
    var F = Cs(P);
    h(F, P) >= 0 || ur(r.clickOutsideDeactivates, P) || ur(r.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, Q = function() {
    if (s.active) {
      ri.activateTrap(a, o);
      var P;
      return r.delayInitialFocus ? P = new Promise(function(F) {
        s.delayInitialFocusTimer = Td(function() {
          x(y()), F();
        });
      }) : x(y()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), P;
    }
  }, te = function(P) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var F = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), re = Cd(P), ee;
    try {
      for (re.s(); !(ee = re.n()).done; ) {
        var ce = ee.value;
        F.add(ce);
        for (var he = typeof ShadowRoot < "u" && ce.getRootNode() instanceof ShadowRoot, _e = ce; _e; ) {
          F.add(_e);
          var ge = _e.parentElement, qe = [];
          ge ? qe = ge.children : !ge && he && (qe = _e.getRootNode().children, ge = _e.getRootNode().host, he = typeof ShadowRoot < "u" && ge.getRootNode() instanceof ShadowRoot);
          var Ee = Cd(qe), nt;
          try {
            for (Ee.s(); !(nt = Ee.n()).done; ) {
              var st = nt.value;
              W.add(st);
            }
          } catch (dt) {
            Ee.e(dt);
          } finally {
            Ee.f();
          }
          _e = ge;
        }
      }
    } catch (dt) {
      re.e(dt);
    } finally {
      re.f();
    }
    F.forEach(function(dt) {
      W.delete(dt);
    }), s.adjacentElements = W;
  }, D = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", L, !0), i.removeEventListener("touchstart", L, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", $, !0), i.removeEventListener("keydown", le), o;
  }, se = function(P) {
    var F = s.mostRecentlyFocusedNode;
    if (F) {
      var W = P.some(function(ee) {
        var ce = Array.from(ee.removedNodes);
        return ce.some(function(he) {
          return he === F || typeof he.contains == "function" && he.contains(F);
        });
      });
      if (W && s.containers.some(function(ee) {
        return ee?.isConnected;
      })) {
        S();
        var re = y();
        x(re);
      }
    }
  }, ve = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, Y = function() {
    ve && (ve.disconnect(), s.active && !s.paused && s.containers.map(function(P) {
      ve.observe(P, {
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
      var F = l(P, "onActivate"), W = l(P, "onPostActivate"), re = l(P, "checkCanFocusTrap"), ee = ri.getActiveTrap(a), ce = !1;
      if (ee && !ee.paused) {
        var he;
        (he = ee._setSubtreeIsolation) === null || he === void 0 || he.call(ee, !1), ce = !0;
      }
      try {
        re || S(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = p(i), F?.({
          trap: o
        });
        var _e = function() {
          re && S();
          var Ee = function() {
            o._setSubtreeIsolation(!0), Y(), W?.({
              trap: o
            });
          }, nt = Q();
          nt ? nt.then(Ee) : Ee();
        };
        if (re)
          return re(s.containers.concat()).then(_e, _e), this;
        _e();
      } catch (qe) {
        if (ee === ri.getActiveTrap(a) && ce) {
          var ge;
          (ge = ee._setSubtreeIsolation) === null || ge === void 0 || ge.call(ee, !0);
        }
        throw qe;
      }
      return this;
    },
    deactivate: function(P) {
      if (!s.active)
        return this;
      var F = Ed({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, P);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), D(), s.active = !1, s.paused = !1, Y(), ri.deactivateTrap(a, o);
      var W = l(F, "onDeactivate"), re = l(F, "onPostDeactivate"), ee = l(F, "checkCanReturnFocus"), ce = l(F, "delayReturnFocus"), he = l(F, "returnFocus", "returnFocusOnDeactivate");
      W?.({
        trap: o
      });
      var _e = function() {
        he && x(T(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, ge = function() {
        ce && he ? Td(_e) : _e();
      };
      return he && ee ? (ee(T(s.nodeFocusedBeforeActivation)).then(ge, ge), this) : (ge(), this);
    },
    pause: function(P) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var F = [].concat(P).filter(Boolean);
      return s.containers = F.map(function(W) {
        return typeof W == "string" ? i.querySelector(W) : W;
      }), r.isolateSubtrees && te(s.containers), s.active && (S(), s.paused || o._setSubtreeIsolation(!0)), Y(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, F) {
        if (s.paused === P)
          return this;
        if (s.paused = P, P) {
          var W = l(F, "onPause"), re = l(F, "onPostPause");
          W?.({
            trap: o
          }), D(), o._setSubtreeIsolation(!1), Y(), re?.({
            trap: o
          });
        } else {
          var ee = l(F, "onUnpause"), ce = l(F, "onPostUnpause");
          ee?.({
            trap: o
          });
          var he = function() {
            S();
            var ge = function() {
              o._setSubtreeIsolation(!0), Y(), ce?.({
                trap: o
              });
            }, qe = Q();
            qe ? qe.then(ge) : ge();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(P) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(F) {
          var W;
          P ? r.isolateSubtrees === "aria-hidden" ? ((F.ariaHidden === "true" || ((W = F.getAttribute("aria-hidden")) === null || W === void 0 ? void 0 : W.toLowerCase()) === "true") && s.alreadySilent.add(F), F.setAttribute("aria-hidden", "true")) : ((F.inert || F.hasAttribute("inert")) && s.alreadySilent.add(F), F.setAttribute("inert", !0)) : s.alreadySilent.has(F) || (r.isolateSubtrees === "aria-hidden" ? F.removeAttribute("aria-hidden") : F.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Kh = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Jy = /* @__PURE__ */ kt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Kh]: {
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
function Qy(e, t, n, i, a, r) {
  return b(), C("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    u("div", {
      class: Te(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: yn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Ne(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Gh = /* @__PURE__ */ Ge(Jy, [["render", Qy], ["__scopeId", "data-v-3e73e246"]]);
function Gr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function e_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Gr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Gr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const qh = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Wh = /* @__PURE__ */ Symbol.for("NcContent:selector");
Fi($b);
const t_ = { class: "app-navigation-toggle-wrapper" }, n_ = /* @__PURE__ */ kt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Wf(e, "open"), n = q(() => t.value ? bt("Close navigation") : bt("Open navigation"));
    return (i, a) => (b(), C("div", t_, [
      we(f(Hn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: xe(() => [
          we(Jo, {
            path: f(Nb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), i_ = /* @__PURE__ */ Ge(n_, [["__scopeId", "data-v-e8177cc7"]]), a_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], r_ = { class: "app-navigation__search" }, s_ = /* @__PURE__ */ kt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = It(
      qh,
      () => Dm(),
      !1
    ), a = Bv("appNavigationContainer"), r = as(), s = /* @__PURE__ */ mt(!r.value), o = q(() => r.value && s.value);
    Lv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Yt(r, () => {
      s.value = !r.value;
    }), Yt(o, () => {
      c();
    }), Mi(() => {
      i(!0), Oh("toggle-navigation", h), ui("navigation-toggled", {
        open: s.value
      }), n = Kc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Gr(),
        escapeDeactivates: !1
      }), c();
    }), ts(() => {
      i(!1), bb("toggle-navigation", h), n.deactivate();
    });
    function l(y) {
      if (s.value === y) {
        ui("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = y === void 0 ? !s.value : y;
      const S = getComputedStyle(document.body), x = parseInt(S.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ui("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * x);
    }
    function h({ open: y }) {
      return l(y);
    }
    function c() {
      o.value ? n.activate() : n.deactivate();
    }
    function p() {
      r.value && l(!1);
    }
    return (y, S) => (b(), C("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": f($i)
      }])
    }, [
      u("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: Wt(p, ["esc"])
      }, [
        u("div", r_, [
          Ne(y.$slots, "search", {}, void 0, !0)
        ]),
        u("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !y.$slots.list }])
        }, [
          Ne(y.$slots, "default", {}, void 0, !0)
        ], 2),
        y.$slots.list ? (b(), Me(Gh, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: xe(() => [
            Ne(y.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : B("", !0),
        Ne(y.$slots, "footer", {}, void 0, !0)
      ], 40, a_),
      we(i_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), o_ = /* @__PURE__ */ Ge(s_, [["__scopeId", "data-v-37908cd4"]]), l_ = {
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
}, c_ = ["aria-hidden", "aria-label"], u_ = ["fill", "width", "height"], d_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, f_ = { key: 0 };
function h_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", d_, [
        n.title ? (b(), C("title", f_, d(n.title), 1)) : B("", !0)
      ])
    ], 8, u_))
  ], 16, c_);
}
const p_ = /* @__PURE__ */ Ge(l_, [["render", h_]]), v_ = {
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
}, m_ = ["aria-hidden", "aria-label"], g_ = ["fill", "width", "height"], b_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, y_ = { key: 0 };
function __(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", b_, [
        n.title ? (b(), C("title", y_, d(n.title), 1)) : B("", !0)
      ])
    ], 8, g_))
  ], 16, m_);
}
const w_ = /* @__PURE__ */ Ge(v_, [["render", __]]), C_ = {
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
}, S_ = ["aria-hidden", "aria-label"], E_ = ["fill", "width", "height"], T_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, k_ = { key: 0 };
function A_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", T_, [
        n.title ? (b(), C("title", k_, d(n.title), 1)) : B("", !0)
      ])
    ], 8, E_))
  ], 16, S_);
}
const Yh = /* @__PURE__ */ Ge(C_, [["render", A_]]), O_ = {
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
}, x_ = ["aria-hidden", "aria-label"], N_ = ["fill", "width", "height"], R_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, L_ = { key: 0 };
function I_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", R_, [
        n.title ? (b(), C("title", L_, d(n.title), 1)) : B("", !0)
      ])
    ], 8, N_))
  ], 16, x_);
}
const Zh = /* @__PURE__ */ Ge(O_, [["render", I_]]);
Fi(Mb);
const P_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Yh,
    IconClose: Zh,
    NcButton: Hn
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
    return { isLegacy34: $i };
  },
  data() {
    return {
      labelConfirm: bt("Confirm changes"),
      labelCancel: bt("Cancel changes")
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
}, D_ = ["placeholder"];
function M_(e, t, n, i, a, r) {
  const s = $e("IconArrowRight"), o = $e("NcButton"), l = $e("IconClose");
  return b(), C("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    u("form", {
      onSubmit: t[1] || (t[1] = et((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = Wt(et((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = et(() => {
      }, ["stop", "prevent"]))
    }, [
      Je(u("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, D_), [
        [Rs, r.valueModel]
      ]),
      we(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: et(r.confirm, ["stop", "prevent"])
      }, {
        icon: xe(() => [
          we(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      we(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: et(r.cancel, ["stop", "prevent"])
      }, {
        icon: xe(() => [
          we(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const F_ = /* @__PURE__ */ Ge(P_, [["render", M_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Qo() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Xh = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Jh = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), $_ = {
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
}, z_ = {
  mixins: [$_],
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
      from: Jh
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
}, U_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Jo
  },
  mixins: [z_],
  inject: {
    isInSemanticMenu: {
      from: Xh,
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
      mdiCheck: Ob,
      mdiChevronRight: xb
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
}, B_ = ["role"], H_ = ["aria-label", "disabled", "title", "type"], j_ = { class: "action-button__longtext-wrapper" }, V_ = {
  key: 0,
  class: "action-button__name"
}, K_ = ["textContent"], G_ = {
  key: 2,
  class: "action-button__text"
}, q_ = ["textContent"], W_ = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Y_(e, t, n, i, a, r) {
  const s = $e("NcIconSvgWrapper");
  return b(), C("li", {
    class: Te(["action", { "action--disabled": n.disabled }]),
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
      onClick: t[0] || (t[0] = (...o) => r.handleClick && r.handleClick(...o))
    }), [
      Ne(e.$slots, "icon", {}, () => [
        u("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: yn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      u("span", j_, [
        e.name ? (b(), C("strong", V_, d(e.name), 1)) : B("", !0),
        e.isLongText ? (b(), C("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: d(e.text)
        }, null, 8, K_)) : (b(), C("span", G_, d(e.text), 1)),
        n.description ? (b(), C("span", {
          key: 3,
          class: "action-button__description",
          textContent: d(n.description)
        }, null, 8, q_)) : B("", !0)
      ]),
      n.isMenu ? (b(), Me(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (b(), Me(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), C("span", W_)) : B("", !0),
      B("", !0)
    ], 16, H_)
  ], 10, B_);
}
const Z_ = /* @__PURE__ */ Ge(U_, [["render", Y_], ["__scopeId", "data-v-6c2daf4e"]]);
function X_(e, t = {}) {
  const n = e_();
  Yt(e, () => {
    oi(t.disabled) || (oi(e) ? n.pause() : n.unpause());
  }), ts(() => {
    n.unpause();
  });
}
const J_ = ["top", "right", "bottom", "left"], kd = ["start", "end"], Ad = /* @__PURE__ */ J_.reduce((e, t) => e.concat(t, t + "-" + kd[0], t + "-" + kd[1]), []), qr = Math.min, cc = Math.max, Q_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qh(e, t, n) {
  return cc(e, qr(t, n));
}
function va(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pi(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function ep(e) {
  return e === "x" ? "y" : "x";
}
function Gc(e) {
  return e === "y" ? "height" : "width";
}
function si(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function qc(e) {
  return ep(si(e));
}
function tp(e, t, n) {
  n === void 0 && (n = !1);
  const i = xn(e), a = qc(e), r = Gc(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ao(s)), [s, ao(s)];
}
function e1(e) {
  const t = ao(e);
  return [io(e), t, io(t)];
}
function io(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Od = ["left", "right"], xd = ["right", "left"], t1 = ["top", "bottom"], n1 = ["bottom", "top"];
function i1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xd : Od : t ? Od : xd;
    case "left":
    case "right":
      return t ? t1 : n1;
    default:
      return [];
  }
}
function a1(e, t, n, i) {
  const a = xn(e);
  let r = i1(pi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(io)))), r;
}
function ao(e) {
  const t = pi(e);
  return Q_[t] + e.slice(t.length);
}
function r1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function np(e) {
  return typeof e != "number" ? r1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tr(e) {
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
function Nd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = si(t), s = qc(t), o = Gc(s), l = pi(t), h = r === "y", c = i.x + i.width / 2 - a.width / 2, p = i.y + i.height / 2 - a.height / 2, y = i[o] / 2 - a[o] / 2;
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
        y: p
      };
      break;
    case "left":
      S = {
        x: i.x - a.width,
        y: p
      };
      break;
    default:
      S = {
        x: i.x,
        y: i.y
      };
  }
  const x = xn(t);
  return x && (S[s] += y * (x === "end" ? 1 : -1) * (n && h ? -1 : 1)), S;
}
async function s1(e, t) {
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
    boundary: h = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: y = !1,
    padding: S = 0
  } = va(t, e), x = np(S), R = o[y ? p === "floating" ? "reference" : "floating" : p], L = Tr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(R))) == null || n ? R : R.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: h,
    rootBoundary: c,
    strategy: l
  })), M = p === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, j = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(j)) && await (r.getScale == null ? void 0 : r.getScale(j)) || {
    x: 1,
    y: 1
  }, le = Tr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: j,
    strategy: l
  }) : M);
  return {
    top: (L.top - le.top + x.top) / $.y,
    bottom: (le.bottom - L.bottom + x.bottom) / $.y,
    left: (L.left - le.left + x.left) / $.x,
    right: (le.right - L.right + x.right) / $.x
  };
}
const o1 = 50, l1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: s1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let h = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = Nd(h, i, l), y = i, S = 0;
  const x = {};
  for (let T = 0; T < r.length; T++) {
    const R = r[T];
    if (!R)
      continue;
    const {
      name: L,
      fn: M
    } = R, {
      x: j,
      y: $,
      data: le,
      reset: de
    } = await M({
      x: c,
      y: p,
      initialPlacement: i,
      placement: y,
      strategy: a,
      middlewareData: x,
      rects: h,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = j ?? c, p = $ ?? p, x[L] = {
      ...x[L],
      ...le
    }, de && S < o1 && (S++, typeof de == "object" && (de.placement && (y = de.placement), de.rects && (h = de.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: c,
      y: p
    } = Nd(h, y, l)), T = -1);
  }
  return {
    x: c,
    y: p,
    placement: y,
    strategy: a,
    middlewareData: x
  };
}, c1 = (e) => ({
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
      element: h,
      padding: c = 0
    } = va(e, t) || {};
    if (h == null)
      return {};
    const p = np(c), y = {
      x: n,
      y: i
    }, S = qc(a), x = Gc(S), T = await s.getDimensions(h), R = S === "y", L = R ? "top" : "left", M = R ? "bottom" : "right", j = R ? "clientHeight" : "clientWidth", $ = r.reference[x] + r.reference[S] - y[S] - r.floating[x], le = y[S] - r.reference[S], de = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(h));
    let Q = de ? de[j] : 0;
    (!Q || !await (s.isElement == null ? void 0 : s.isElement(de))) && (Q = o.floating[j] || r.floating[x]);
    const te = $ / 2 - le / 2, D = Q / 2 - T[x] / 2 - 1, se = qr(p[L], D), ve = qr(p[M], D), Y = Q - T[x] - ve, ne = Q / 2 - T[x] / 2 + te, P = Qh(se, ne, Y), F = !l.arrow && xn(a) != null && ne !== P && r.reference[x] / 2 - (ne < se ? se : ve) - T[x] / 2 < 0, W = F ? ne < se ? ne - se : ne - Y : 0;
    return {
      [S]: y[S] + W,
      data: {
        [S]: P,
        centerOffset: ne - P - W,
        ...F && {
          alignmentOffset: W
        }
      },
      reset: F
    };
  }
});
function u1(e, t, n) {
  return (e ? [...n.filter((a) => xn(a) === e), ...n.filter((a) => xn(a) !== e)] : n.filter((a) => pi(a) === a)).filter((a) => e ? xn(a) === e || (t ? io(a) !== a : !1) : !0);
}
const d1 = function(e) {
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
        elements: h
      } = t, {
        crossAxis: c = !1,
        alignment: p,
        allowedPlacements: y = Ad,
        autoAlignment: S = !0,
        ...x
      } = va(e, t), T = p !== void 0 || y === Ad ? u1(p || null, S, y) : y, R = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, L = T[R];
      if (L == null)
        return {};
      if (o !== L)
        return {
          reset: {
            placement: T[0]
          }
        };
      const M = await l.detectOverflow(t, x), j = tp(L, r, await (l.isRTL == null ? void 0 : l.isRTL(h.floating))), $ = [M[pi(L)], M[j[0]], M[j[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: L,
        overflows: $
      }], de = T[R + 1];
      if (de)
        return {
          data: {
            index: R + 1,
            overflows: le
          },
          reset: {
            placement: de
          }
        };
      const Q = le.map((se) => {
        const ve = xn(se.placement);
        return [se.placement, ve && c ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((Y, ne) => Y + ne, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ve) => se[1] - ve[1]), D = ((a = Q.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        xn(se[0]) ? 2 : 3
      ).every((ve) => ve <= 0))[0]) == null ? void 0 : a[0]) || Q[0][0];
      return D !== o ? {
        data: {
          index: R + 1,
          overflows: le
        },
        reset: {
          placement: D
        }
      } : {};
    }
  };
}, f1 = function(e) {
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
        elements: h
      } = t, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: y,
        fallbackStrategy: S = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: T = !0,
        ...R
      } = va(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const L = pi(a), M = si(o), j = pi(o) === o, $ = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), le = y || (j || !T ? [ao(o)] : e1(o)), de = x !== "none";
      !y && de && le.push(...a1(o, T, x, $));
      const Q = [o, ...le], te = await l.detectOverflow(t, R), D = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && D.push(te[L]), p) {
        const P = tp(a, s, $);
        D.push(te[P[0]], te[P[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: D
      }], !D.every((P) => P <= 0)) {
        var ve, Y;
        const P = (((ve = r.flip) == null ? void 0 : ve.index) || 0) + 1, F = Q[P];
        if (F && (!(p === "alignment" ? M !== si(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ee) => si(ee.placement) === M ? ee.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: se
            },
            reset: {
              placement: F
            }
          };
        let W = (Y = se.filter((re) => re.overflows[0] <= 0).sort((re, ee) => re.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!W)
          switch (S) {
            case "bestFit": {
              var ne;
              const re = (ne = se.filter((ee) => {
                if (de) {
                  const ce = si(ee.placement);
                  return ce === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((ce) => ce > 0).reduce((ce, he) => ce + he, 0)]).sort((ee, ce) => ee[1] - ce[1])[0]) == null ? void 0 : ne[0];
              re && (W = re);
              break;
            }
            case "initialPlacement":
              W = o;
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
}, h1 = /* @__PURE__ */ new Set(["left", "top"]);
async function p1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = pi(n), o = xn(n), l = si(n) === "y", h = h1.has(s) ? -1 : 1, c = r && l ? -1 : 1, p = va(t, e);
  let {
    mainAxis: y,
    crossAxis: S,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return o && typeof x == "number" && (S = o === "end" ? x * -1 : x), l ? {
    x: S * c,
    y: y * h
  } : {
    x: y * h,
    y: S * c
  };
}
const v1 = function(e) {
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
      } = t, l = await p1(t, e);
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
}, m1 = function(e) {
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
          fn: (M) => {
            let {
              x: j,
              y: $
            } = M;
            return {
              x: j,
              y: $
            };
          }
        },
        ...h
      } = va(e, t), c = {
        x: n,
        y: i
      }, p = await r.detectOverflow(t, h), y = si(a), S = ep(y);
      let x = c[S], T = c[y];
      const R = (M, j) => Qh(j + p[M === "y" ? "top" : "left"], j, j - p[M === "y" ? "bottom" : "right"]);
      s && (x = R(S, x)), o && (T = R(y, T));
      const L = l.fn({
        ...t,
        [S]: x,
        [y]: T
      });
      return {
        ...L,
        data: {
          x: L.x - n,
          y: L.y - i,
          enabled: {
            [S]: s,
            [y]: o
          }
        }
      };
    }
  };
}, g1 = function(e) {
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
      } = va(e, t), l = await a.detectOverflow(t, o), h = pi(n), c = xn(n), p = si(n) === "y", {
        width: y,
        height: S
      } = i.floating;
      let x, T;
      h === "top" || h === "bottom" ? (x = h, T = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (T = h, x = c === "end" ? "top" : "bottom");
      const R = S - l.top - l.bottom, L = y - l.left - l.right, M = qr(S - l[x], R), j = qr(y - l[T], L), $ = t.middlewareData.shift, le = !$;
      let de = M, Q = j;
      $ != null && $.enabled.x && (Q = L), $ != null && $.enabled.y && (de = R), le && !c && (p ? Q = y - 2 * cc(l.left, l.right) : de = S - 2 * cc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: Q,
        availableHeight: de
      });
      const te = await a.getDimensions(r.floating);
      return y !== te.width || S !== te.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  return gn(e).getComputedStyle(e);
}
const Rd = Math.min, kr = Math.max, ro = Math.round;
function ip(e) {
  const t = jn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = ro(n) !== a || ro(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Di(e) {
  return rp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ss;
function ap() {
  if (Ss) return Ss;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ss = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Ss) : navigator.userAgent;
}
function Vn(e) {
  return e instanceof gn(e).HTMLElement;
}
function Ni(e) {
  return e instanceof gn(e).Element;
}
function rp(e) {
  return e instanceof gn(e).Node;
}
function Ld(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof gn(e).ShadowRoot || e instanceof ShadowRoot;
}
function el(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = jn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function b1(e) {
  return ["table", "td", "th"].includes(Di(e));
}
function uc(e) {
  const t = /firefox/i.test(ap()), n = jn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function sp() {
  return !/^((?!chrome|android).)*safari/i.test(ap());
}
function Wc(e) {
  return ["html", "body", "#document"].includes(Di(e));
}
function op(e) {
  return Ni(e) ? e : e.contextElement;
}
const lp = { x: 1, y: 1 };
function Ba(e) {
  const t = op(e);
  if (!Vn(t)) return lp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = ip(t);
  let s = (r ? ro(n.width) : n.width) / i, o = (r ? ro(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function Wr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = op(e);
  let l = lp;
  t && (i ? Ni(i) && (l = Ba(i)) : l = Ba(e));
  const h = o ? gn(o) : window, c = !sp() && n;
  let p = (s.left + (c && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, y = (s.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, S = s.width / l.x, x = s.height / l.y;
  if (o) {
    const T = gn(o), R = i && Ni(i) ? gn(i) : i;
    let L = T.frameElement;
    for (; L && i && R !== T; ) {
      const M = Ba(L), j = L.getBoundingClientRect(), $ = getComputedStyle(L);
      j.x += (L.clientLeft + parseFloat($.paddingLeft)) * M.x, j.y += (L.clientTop + parseFloat($.paddingTop)) * M.y, p *= M.x, y *= M.y, S *= M.x, x *= M.y, p += j.x, y += j.y, L = gn(L).frameElement;
    }
  }
  return { width: S, height: x, top: y, right: p + S, bottom: y + x, left: p, x: p, y };
}
function Ri(e) {
  return ((rp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tl(e) {
  return Ni(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function cp(e) {
  return Wr(Ri(e)).left + tl(e).scrollLeft;
}
function Yr(e) {
  if (Di(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ld(e) && e.host || Ri(e);
  return Ld(t) ? t.host : t;
}
function up(e) {
  const t = Yr(e);
  return Wc(t) ? t.ownerDocument.body : Vn(t) && el(t) ? t : up(t);
}
function so(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = up(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = gn(i);
  return a ? t.concat(r, r.visualViewport || [], el(i) ? i : []) : t.concat(i, so(i));
}
function Id(e, t, n) {
  return t === "viewport" ? Tr((function(i, a) {
    const r = gn(i), s = Ri(i), o = r.visualViewport;
    let l = s.clientWidth, h = s.clientHeight, c = 0, p = 0;
    if (o) {
      l = o.width, h = o.height;
      const y = sp();
      (y || !y && a === "fixed") && (c = o.offsetLeft, p = o.offsetTop);
    }
    return { width: l, height: h, x: c, y: p };
  })(e, n)) : Ni(t) ? Tr((function(i, a) {
    const r = Wr(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Vn(i) ? Ba(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Tr((function(i) {
    const a = Ri(i), r = tl(i), s = i.ownerDocument.body, o = kr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = kr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let h = -r.scrollLeft + cp(i);
    const c = -r.scrollTop;
    return jn(s).direction === "rtl" && (h += kr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: h, y: c };
  })(Ri(e)));
}
function Pd(e) {
  return Vn(e) && jn(e).position !== "fixed" ? e.offsetParent : null;
}
function Dd(e) {
  const t = gn(e);
  let n = Pd(e);
  for (; n && b1(n) && jn(n).position === "static"; ) n = Pd(n);
  return n && (Di(n) === "html" || Di(n) === "body" && jn(n).position === "static" && !uc(n)) ? t : n || (function(i) {
    let a = Yr(i);
    for (; Vn(a) && !Wc(a); ) {
      if (uc(a)) return a;
      a = Yr(a);
    }
    return null;
  })(e) || t;
}
function y1(e, t, n) {
  const i = Vn(t), a = Ri(t), r = Wr(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Di(t) !== "body" || el(a)) && (s = tl(t)), Vn(t)) {
    const l = Wr(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = cp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const _1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, c) {
    const p = c.get(h);
    if (p) return p;
    let y = so(h).filter(((R) => Ni(R) && Di(R) !== "body")), S = null;
    const x = jn(h).position === "fixed";
    let T = x ? Yr(h) : h;
    for (; Ni(T) && !Wc(T); ) {
      const R = jn(T), L = uc(T);
      (x ? L || S : L || R.position !== "static" || !S || !["absolute", "fixed"].includes(S.position)) ? S = R : y = y.filter(((M) => M !== T)), T = Yr(T);
    }
    return c.set(h, y), y;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((h, c) => {
    const p = Id(t, c, a);
    return h.top = kr(p.top, h.top), h.right = Rd(p.right, h.right), h.bottom = Rd(p.bottom, h.bottom), h.left = kr(p.left, h.left), h;
  }), Id(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Vn(n), r = Ri(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Di(n) !== "body" || el(r)) && (s = tl(n)), Vn(n))) {
    const h = Wr(n);
    o = Ba(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Ni, getDimensions: function(e) {
  return Vn(e) ? ip(e) : e.getBoundingClientRect();
}, getOffsetParent: Dd, getDocumentElement: Ri, getScale: Ba, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Dd, r = this.getDimensions;
  return { reference: y1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => jn(e).direction === "rtl" }, w1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: _1, ...n }, r = { ...a.platform, _c: i };
  return l1(e, t, { ...a, platform: r });
}, Li = {
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
function dc(e, t) {
  let n = Li.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Li.themes[n.$extend] || {} : (n = null, i = Li[t]) : n = null;
  while (n);
  return i;
}
function C1(e) {
  const t = [e];
  let n = Li.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Li.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Md(e) {
  const t = [e];
  let n = Li.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Li.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Zr = !1;
if (typeof window < "u") {
  Zr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Zr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let dp = !1;
typeof window < "u" && typeof navigator < "u" && (dp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const S1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Fd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, $d = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function zd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Ml() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const An = [];
let Qi = null;
const Ud = {};
function Bd(e) {
  let t = Ud[e];
  return t || (t = Ud[e] = []), t;
}
let fc = function() {
};
typeof window < "u" && (fc = window.Element);
function Fe(e) {
  return function(t) {
    return dc(t.theme, e);
  };
}
const Fl = "__floating-vue__popper", fp = () => /* @__PURE__ */ kt({
  name: "VPopper",
  provide() {
    return {
      [Fl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Fl]: { default: null }
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
      default: Fe("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Fe("positioningDisabled")
    },
    placement: {
      type: String,
      default: Fe("placement"),
      validator: (e) => S1.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Fe("delay")
    },
    distance: {
      type: [Number, String],
      default: Fe("distance")
    },
    skidding: {
      type: [Number, String],
      default: Fe("skidding")
    },
    triggers: {
      type: Array,
      default: Fe("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Fe("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Fe("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Fe("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Fe("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Fe("popperHideTriggers")
    },
    container: {
      type: [String, Object, fc, Boolean],
      default: Fe("container")
    },
    boundary: {
      type: [String, fc],
      default: Fe("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Fe("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Fe("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Fe("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Fe("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Fe("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Fe("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Fe("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Fe("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Fe("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Fe("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Fe("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Fe("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Fe("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Fe("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Fe("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Fe("flip")
    },
    shift: {
      type: Boolean,
      default: Fe("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Fe("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Fe("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Fe("disposeTimeout")
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
      return (e = this[Fl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(v1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(d1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(m1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(f1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(c1({
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
            let l, h;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : h = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = h != null ? `${h}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(g1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await w1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Qi && this.instantMove && Qi.instantMove && Qi !== this.parentPopper) {
        Qi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Qi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ml(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...so(this.$_referenceNode),
        ...so(this.$_popperNode)
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
        for (let n = 0; n < An.length; n++)
          t = An[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      An.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Md(this.theme))
        Bd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ml(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, zd(An, this), An.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Md(this.theme)) {
        const i = Bd(n);
        zd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Qi === this && (Qi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ml(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Fd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Fd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, $d, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], $d, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Zr ? {
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
      if (Ar >= e.left && Ar <= e.right && Or >= e.top && Or <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Ar - Ti, i = Or - ki, a = t.left + t.width / 2 - Ti + (t.top + t.height / 2) - ki + t.width + t.height, r = Ti + n * a, s = ki + i * a;
        return Es(Ti, ki, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Es(Ti, ki, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Es(Ti, ki, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Es(Ti, ki, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (dp) {
    const e = Zr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Hd(t), e), document.addEventListener("touchend", (t) => jd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Hd(e), !0), window.addEventListener("click", (e) => jd(e, !1), !0);
  window.addEventListener("resize", k1);
}
function Hd(e, t) {
  for (let n = 0; n < An.length; n++) {
    const i = An[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function jd(e, t) {
  E1(e, t);
}
function E1(e, t) {
  const n = {};
  for (let i = An.length - 1; i >= 0; i--) {
    const a = An[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Vd(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Vd(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Vd(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || T1(e, n) && !t;
}
function T1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function k1() {
  for (let e = 0; e < An.length; e++)
    An[e].$_computePosition();
}
let Ti = 0, ki = 0, Ar = 0, Or = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ti = Ar, ki = Or, Ar = e.clientX, Or = e.clientY;
}, Zr ? {
  passive: !0
} : void 0);
function Es(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && h >= 0 && h <= 1;
}
const A1 = {
  extends: fp()
}, Yc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function O1(e, t, n, i, a, r) {
  return b(), C("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Ne(e.$slots, "default", Ps(Hr(e.slotData)))
  ], 2);
}
const x1 = /* @__PURE__ */ Yc(A1, [["render", O1]]);
function N1() {
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
let Ls;
function hc() {
  hc.init || (hc.init = !0, Ls = N1() !== -1);
}
var nl = {
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
    hc(), li(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ls && this.$el.appendChild(e), e.data = "about:blank", Ls || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ls && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const R1 = /* @__PURE__ */ xv();
Av("data-v-b329ee4c");
const L1 = {
  class: "resize-observer",
  tabindex: "-1"
};
Ov();
const I1 = /* @__PURE__ */ R1((e, t, n, i, a, r) => (b(), Me("div", L1)));
nl.render = I1;
nl.__scopeId = "data-v-b329ee4c";
nl.__file = "src/components/ResizeObserver.vue";
const hp = (e = "theme") => ({
  computed: {
    themeClass() {
      return C1(this[e]);
    }
  }
}), P1 = /* @__PURE__ */ kt({
  name: "VPopperContent",
  components: {
    ResizeObserver: nl
  },
  mixins: [
    hp()
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
}), D1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], M1 = {
  ref: "inner",
  class: "v-popper__inner"
}, F1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-outer" }, null, -1), $1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-inner" }, null, -1), z1 = [
  F1,
  $1
];
function U1(e, t, n, i, a, r) {
  const s = $e("ResizeObserver");
  return b(), C("div", {
    id: e.popperId,
    ref: "popover",
    class: Te(["v-popper__popper", [
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
    style: yn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Wt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    u("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    u("div", {
      class: "v-popper__wrapper",
      style: yn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      u("div", M1, [
        e.mounted ? (b(), C(ue, { key: 0 }, [
          u("div", null, [
            Ne(e.$slots, "default")
          ]),
          e.handleResize ? (b(), Me(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : B("", !0)
        ], 64)) : B("", !0)
      ], 512),
      u("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: yn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, z1, 4)
    ], 4)
  ], 46, D1);
}
const pp = /* @__PURE__ */ Yc(P1, [["render", U1]]), vp = {
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
let pc = function() {
};
typeof window < "u" && (pc = window.Element);
const B1 = /* @__PURE__ */ kt({
  name: "VPopperWrapper",
  components: {
    Popper: x1,
    PopperContent: pp
  },
  mixins: [
    vp,
    hp("finalTheme")
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
      type: [String, Object, pc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, pc],
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
function H1(e, t, n, i, a, r) {
  const s = $e("PopperContent"), o = $e("Popper");
  return b(), Me(o, Ft({ ref: "popper" }, e.$props, {
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
    default: xe(({
      popperId: l,
      isShown: h,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: y,
      show: S,
      hide: x,
      handleResize: T,
      onResize: R,
      classes: L,
      result: M
    }) => [
      Ne(e.$slots, "default", {
        shown: h,
        show: S,
        hide: x
      }),
      we(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: h,
        mounted: c,
        "skip-transition": p,
        "auto-hide": y,
        "handle-resize": T,
        classes: L,
        result: M,
        onHide: x,
        onResize: R
      }, {
        default: xe(() => [
          Ne(e.$slots, "popper", {
            shown: h,
            hide: x
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Zc = /* @__PURE__ */ Yc(B1, [["render", H1]]), j1 = {
  ...Zc,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Zc
});
({
  ...Zc
});
fp();
const Kd = Li, V1 = j1, K1 = /* @__PURE__ */ kt({
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
}), G1 = "_ncPopover_qgtYg", q1 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: G1
}, mp = "nc-popover-9";
Kd.themes[mp] = structuredClone(Kd.themes.dropdown);
const W1 = {
  name: "NcPopover",
  components: {
    Dropdown: V1,
    NcPopoverTriggerProvider: K1
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
      theme: mp
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
      return this.placement === "start" ? sc ? "right" : "left" : this.placement === "end" ? sc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Kc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Gr(),
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
        da.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function Y1(e, t, n, i, a, r) {
  const s = $e("NcPopoverTriggerProvider"), o = $e("Dropdown");
  return b(), Me(o, {
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
    popper: xe((l) => [
      Ne(e.$slots, "default", Ps(Hr(l)))
    ]),
    default: xe(() => [
      we(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: xe((l) => [
          Ne(e.$slots, "trigger", Ps(Hr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const Z1 = {
  $style: q1
}, Gd = /* @__PURE__ */ Ge(W1, [["render", Y1], ["__cssModules", Z1]]), X1 = {
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
}, J1 = ["aria-hidden", "aria-label"], Q1 = ["fill", "width", "height"], e0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, t0 = { key: 0 };
function n0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", e0, [
        n.title ? (b(), C("title", t0, d(n.title), 1)) : B("", !0)
      ])
    ], 8, Q1))
  ], 16, J1);
}
const i0 = /* @__PURE__ */ Ge(X1, [["render", n0]]);
Fi(Db);
function Xc(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Et)
        return !1;
      if (n.type === ue && !Xc(n.children))
        return !1;
      if (n.type === ns && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const a0 = ".focusable", r0 = {
  name: "NcActions",
  components: {
    NcButton: Hn,
    NcPopover: Gd
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
      [Xh]: q(() => this.actionsMenuSemanticType === "menu"),
      [Jh]: this.closeMenu
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
      default: bt("Actions")
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
      randomId: Qo()
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
    X_(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(a0);
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
      S.forEach((T) => {
        if (this.isAction(T)) {
          x.push(T);
          return;
        }
        T.type === ue && t(T.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((S) => !i.includes(S)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((S) => s.includes(this.getActionName(S))), h = a.some((S) => r.includes(this.getActionName(S))), c = a.some((S) => o.includes(this.getActionName(S)));
    l ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : c ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const p = (S) => {
      const x = S?.props?.icon, T = S?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Gt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Gt("span", { class: ["icon", x] })), R = S?.children?.default?.()?.[0]?.children?.trim(), L = this.forceName ? R : "";
      let M = S?.props?.title;
      this.forceName || M || (M = R);
      const j = { ...S?.props ?? {} }, $ = ["submit", "reset"].includes(j.type) ? j.modelValue : "button";
      return delete j.modelValue, delete j.type, Gt(
        Hn,
        Ft(
          j,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": S?.props?.["aria-label"] || R,
            title: M,
            disabled: this.disabled || S?.props?.disabled,
            pressed: S?.props?.modelValue,
            size: this.size,
            type: $,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (L ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": S?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => L,
          icon: () => T
        }
      );
    }, y = (S) => {
      const x = Xc(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Gt("span", { class: ["icon", this.defaultIcon] }) : Gt(i0, { size: 20 }), T = `${this.randomId}-trigger`;
      return Gt(
        Gd,
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
          trigger: () => Gt(Hn, {
            id: T,
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
          default: () => Gt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Gt("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": T,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              S
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? p(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Gt(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(p),
        // render the rest within the popover menu
        a.length > 0 ? Gt(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [y(a)]
        ) : null
      ]
    ) : Gt(
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
        y(e)
      ]
    ));
  }
}, gp = /* @__PURE__ */ Ge(r0, [["__scopeId", "data-v-7206c1f1"]]), s0 = ["aria-label"], o0 = ["width", "height"], l0 = ["fill"], c0 = ["fill"], u0 = { key: 0 }, d0 = /* @__PURE__ */ kt({
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
    return (i, a) => (b(), C("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (b(), C("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        u("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, l0),
        u("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), C("title", u0, d(e.name), 1)) : B("", !0)
        ], 8, c0)
      ], 8, o0))
    ], 8, s0));
  }
}), bp = /* @__PURE__ */ Ge(d0, [["__scopeId", "data-v-cf399190"]]), vc = /* @__PURE__ */ kt({
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
}), f0 = {
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
}, h0 = ["aria-hidden", "aria-label"], p0 = ["fill", "width", "height"], v0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, m0 = { key: 0 };
function g0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", v0, [
        n.title ? (b(), C("title", m0, d(n.title), 1)) : B("", !0)
      ])
    ], 8, p0))
  ], 16, h0);
}
const b0 = /* @__PURE__ */ Ge(f0, [["render", g0]]), y0 = {
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
}, _0 = ["aria-hidden", "aria-label"], w0 = ["fill", "width", "height"], C0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, S0 = { key: 0 };
function E0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", C0, [
        n.title ? (b(), C("title", S0, d(n.title), 1)) : B("", !0)
      ])
    ], 8, w0))
  ], 16, _0);
}
const T0 = /* @__PURE__ */ Ge(y0, [["render", E0]]);
Fi(zb);
const k0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Hn,
    ChevronDown: p_,
    ChevronUp: w_
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
    return { isLegacy34: $i };
  },
  computed: {
    labelButton() {
      return this.open ? bt("Collapse menu") : bt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function A0(e, t, n, i, a, r) {
  const s = $e("ChevronUp"), o = $e("ChevronDown"), l = $e("NcButton");
  return b(), Me(l, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: xe(() => [
      n.open ? (b(), Me(s, {
        key: 0,
        size: 20
      })) : (b(), Me(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const O0 = /* @__PURE__ */ Ge(k0, [["render", A0], ["__scopeId", "data-v-cfbd3794"]]);
Fi(Ub, jb);
const x0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: gp,
    NcActionButton: Z_,
    NcAppNavigationIconCollapsible: O0,
    NcInputConfirmCancel: F_,
    NcLoadingIcon: bp,
    NcVNodes: vc,
    Pencil: b0,
    Undo: T0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Kh, default: null }
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
      default: () => Qo(),
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
      isMobile: as(),
      isLegacy34: $i
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
      return this.editLabel ? this.editLabel : bt("Edit item");
    },
    undoButtonAriaLabel() {
      return bt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ui("toggle-navigation", { open: !1 }));
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
}, N0 = ["id"], R0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], L0 = {
  key: 0,
  class: "editingContainer"
}, I0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, P0 = { class: "app-navigation-entry__deleted-description" }, D0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, M0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function F0(e, t, n, i, a, r) {
  const s = $e("NcLoadingIcon"), o = $e("NcInputConfirmCancel"), l = $e("Pencil"), h = $e("NcActionButton"), c = $e("Undo"), p = $e("NcActions"), y = $e("NcAppNavigationIconCollapsible");
  return b(), C("li", {
    id: n.id,
    class: Te([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), Me(Dc(r.isRouterLink ? "router-link" : "NcVNodes"), Ps(Hr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: xe(({ href: S, navigate: x, isActive: T }) => [
        u("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && T || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...R) => r.requestHighlight && r.requestHighlight(...R)),
          onFocusin: t[5] || (t[5] = (...R) => r.requestHighlight && r.requestHighlight(...R))
        }, [
          n.undo ? B("", !0) : (b(), C("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && T ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || S || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...R) => r.handleBlur && r.handleBlur(...R)),
            onClick: (R) => r.onClick(R, x, S),
            onFocus: t[2] || (t[2] = (...R) => r.handleFocus && r.handleFocus(...R)),
            onKeydown: t[3] || (t[3] = Wt(et((...R) => r.handleTab && r.handleTab(...R), ["exact"]), ["tab"]))
          }, [
            u("div", {
              class: Te(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), Me(s, { key: 0 })) : Ne(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && T
              }, void 0, !0)
            ], 2),
            u("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, d(n.name), 3),
            a.editingActive ? (b(), C("div", L0, [
              we(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (R) => a.editingValue = R),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && T || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : B("", !0)
          ], 40, R0)),
          n.undo ? (b(), C("div", I0, [
            u("div", P0, d(n.name), 1)
          ])) : B("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), C("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), C("div", D0, [
              Ne(e.$slots, "counter", {}, void 0, !0)
            ])) : B("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (b(), Me(p, {
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
              icon: xe(() => [
                Ne(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: xe(() => [
                n.editable && !a.editingActive ? (b(), Me(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: xe(() => [
                    we(l, { size: 20 })
                  ]),
                  default: xe(() => [
                    Oe(" " + d(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                n.undo ? (b(), Me(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: xe(() => [
                    we(c, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                Ne(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : B("", !0)
          ], 2)) : B("", !0),
          n.allowCollapse && e.$slots.default ? (b(), Me(y, {
            key: 3,
            active: n.to && T || n.active,
            open: a.opened,
            onClick: et(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : B("", !0),
          Ne(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), C("ul", M0, [
      Ne(e.$slots, "default", {}, void 0, !0)
    ])) : B("", !0)
  ], 10, N0);
}
const qd = /* @__PURE__ */ Ge(x0, [["render", F0], ["__scopeId", "data-v-01bef41b"]]), $l = /* @__PURE__ */ new WeakMap(), $0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = bd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = bd(e, a, Object.assign({ capture: n }, r));
    }
    $l.set(e, i);
  },
  unmounted(e) {
    const t = $l.get(e);
    t && typeof t == "function" ? t() : t?.stop(), $l.delete(e);
  }
}, z0 = {
  mounted(e) {
    e.focus();
  }
}, U0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", B0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", mc = "numeric", gc = "ascii", bc = "alpha", xr = "asciinumeric", br = "alphanumeric", yc = "domain", yp = "emoji", H0 = "scheme", j0 = "slashscheme", zl = "whitespace";
function V0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function oa(e, t, n) {
  t[mc] && (t[xr] = !0, t[br] = !0), t[gc] && (t[xr] = !0, t[bc] = !0), t[xr] && (t[br] = !0), t[bc] && (t[br] = !0), t[br] && (t[yc] = !0), t[yp] && (t[yc] = !0);
  for (const i in t) {
    const a = V0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function K0(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function rn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
rn.groups = {};
rn.prototype = {
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
    i = i || rn.groups;
    let a;
    return t && t.j ? a = t : (a = new rn(t), n && i && oa(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || rn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new rn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new rn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(K0(s.t, i), n);
          oa(r, l, i);
        } else n && oa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Le = (e, t, n, i, a) => e.ta(t, n, i, a), at = (e, t, n, i, a) => e.tr(t, n, i, a), Wd = (e, t, n, i, a) => e.ts(t, n, i, a), J = (e, t, n, i, a) => e.tt(t, n, i, a), ei = "WORD", _c = "UWORD", _p = "ASCIINUMERICAL", wp = "ALPHANUMERICAL", Xr = "LOCALHOST", wc = "TLD", Cc = "UTLD", Is = "SCHEME", Ia = "SLASH_SCHEME", Jc = "NUM", Sc = "WS", Qc = "NL", Nr = "OPENBRACE", Rr = "CLOSEBRACE", oo = "OPENBRACKET", lo = "CLOSEBRACKET", co = "OPENPAREN", uo = "CLOSEPAREN", fo = "OPENANGLEBRACKET", ho = "CLOSEANGLEBRACKET", po = "FULLWIDTHLEFTPAREN", vo = "FULLWIDTHRIGHTPAREN", mo = "LEFTCORNERBRACKET", go = "RIGHTCORNERBRACKET", bo = "LEFTWHITECORNERBRACKET", yo = "RIGHTWHITECORNERBRACKET", _o = "FULLWIDTHLESSTHAN", wo = "FULLWIDTHGREATERTHAN", Co = "AMPERSAND", So = "APOSTROPHE", Eo = "ASTERISK", Oi = "AT", To = "BACKSLASH", ko = "BACKTICK", Ao = "CARET", la = "COLON", eu = "COMMA", Oo = "DOLLAR", $n = "DOT", xo = "EQUALS", tu = "EXCLAMATION", pn = "HYPHEN", Lr = "PERCENT", No = "PIPE", Ro = "PLUS", Lo = "POUND", Ir = "QUERY", nu = "QUOTE", Cp = "FULLWIDTHMIDDLEDOT", iu = "SEMI", zn = "SLASH", Pr = "TILDE", Io = "UNDERSCORE", Sp = "EMOJI", Po = "SYM";
var Ep = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: wp,
  AMPERSAND: Co,
  APOSTROPHE: So,
  ASCIINUMERICAL: _p,
  ASTERISK: Eo,
  AT: Oi,
  BACKSLASH: To,
  BACKTICK: ko,
  CARET: Ao,
  CLOSEANGLEBRACKET: ho,
  CLOSEBRACE: Rr,
  CLOSEBRACKET: lo,
  CLOSEPAREN: uo,
  COLON: la,
  COMMA: eu,
  DOLLAR: Oo,
  DOT: $n,
  EMOJI: Sp,
  EQUALS: xo,
  EXCLAMATION: tu,
  FULLWIDTHGREATERTHAN: wo,
  FULLWIDTHLEFTPAREN: po,
  FULLWIDTHLESSTHAN: _o,
  FULLWIDTHMIDDLEDOT: Cp,
  FULLWIDTHRIGHTPAREN: vo,
  HYPHEN: pn,
  LEFTCORNERBRACKET: mo,
  LEFTWHITECORNERBRACKET: bo,
  LOCALHOST: Xr,
  NL: Qc,
  NUM: Jc,
  OPENANGLEBRACKET: fo,
  OPENBRACE: Nr,
  OPENBRACKET: oo,
  OPENPAREN: co,
  PERCENT: Lr,
  PIPE: No,
  PLUS: Ro,
  POUND: Lo,
  QUERY: Ir,
  QUOTE: nu,
  RIGHTCORNERBRACKET: go,
  RIGHTWHITECORNERBRACKET: yo,
  SCHEME: Is,
  SEMI: iu,
  SLASH: zn,
  SLASH_SCHEME: Ia,
  SYM: Po,
  TILDE: Pr,
  TLD: wc,
  UNDERSCORE: Io,
  UTLD: Cc,
  UWORD: _c,
  WORD: ei,
  WS: Sc
});
const Jn = /[a-z]/, dr = new RegExp("\\p{L}", "u"), Ul = new RegExp("\\p{Emoji}", "u"), Qn = /\d/, Bl = /\s/, Yd = "\r", Hl = `
`, G0 = "️", q0 = "‍", jl = "￼";
let Ts = null, ks = null;
function W0(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  Ts == null && (Ts = Zd(U0)), ks == null && (ks = Zd(B0)), J(n, "'", So), J(n, "{", Nr), J(n, "}", Rr), J(n, "[", oo), J(n, "]", lo), J(n, "(", co), J(n, ")", uo), J(n, "<", fo), J(n, ">", ho), J(n, "（", po), J(n, "）", vo), J(n, "「", mo), J(n, "」", go), J(n, "『", bo), J(n, "』", yo), J(n, "＜", _o), J(n, "＞", wo), J(n, "&", Co), J(n, "*", Eo), J(n, "@", Oi), J(n, "`", ko), J(n, "^", Ao), J(n, ":", la), J(n, ",", eu), J(n, "$", Oo), J(n, ".", $n), J(n, "=", xo), J(n, "!", tu), J(n, "-", pn), J(n, "%", Lr), J(n, "|", No), J(n, "+", Ro), J(n, "#", Lo), J(n, "?", Ir), J(n, '"', nu), J(n, "/", zn), J(n, ";", iu), J(n, "~", Pr), J(n, "_", Io), J(n, "\\", To), J(n, "・", Cp);
  const i = at(n, Qn, Jc, {
    [mc]: !0
  });
  at(i, Qn, i);
  const a = at(i, Jn, _p, {
    [xr]: !0
  }), r = at(i, dr, wp, {
    [br]: !0
  }), s = at(n, Jn, ei, {
    [gc]: !0
  });
  at(s, Qn, a), at(s, Jn, s), at(a, Qn, a), at(a, Jn, a);
  const o = at(n, dr, _c, {
    [bc]: !0
  });
  at(o, Jn), at(o, Qn, r), at(o, dr, o), at(r, Qn, r), at(r, Jn), at(r, dr, r);
  const l = J(n, Hl, Qc, {
    [zl]: !0
  }), h = J(n, Yd, Sc, {
    [zl]: !0
  }), c = at(n, Bl, Sc, {
    [zl]: !0
  });
  J(n, jl, c), J(h, Hl, l), J(h, jl, c), at(h, Bl, c), J(c, Yd), J(c, Hl), at(c, Bl, c), J(c, jl, c);
  const p = at(n, Ul, Sp, {
    [yp]: !0
  });
  J(p, "#"), at(p, Ul, p), J(p, G0, p);
  const y = J(p, q0);
  J(y, "#"), at(y, Ul, p);
  const S = [[Jn, s], [Qn, a]], x = [[Jn, null], [dr, o], [Qn, r]];
  for (let T = 0; T < Ts.length; T++)
    Si(n, Ts[T], wc, ei, S);
  for (let T = 0; T < ks.length; T++)
    Si(n, ks[T], Cc, _c, x);
  oa(wc, {
    tld: !0,
    ascii: !0
  }, t), oa(Cc, {
    utld: !0,
    alpha: !0
  }, t), Si(n, "file", Is, ei, S), Si(n, "mailto", Is, ei, S), Si(n, "http", Ia, ei, S), Si(n, "https", Ia, ei, S), Si(n, "ftp", Ia, ei, S), Si(n, "ftps", Ia, ei, S), oa(Is, {
    scheme: !0,
    ascii: !0
  }, t), oa(Ia, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((T, R) => T[0] > R[0] ? 1 : -1);
  for (let T = 0; T < e.length; T++) {
    const R = e[T][0], M = e[T][1] ? {
      [H0]: !0
    } : {
      [j0]: !0
    };
    R.indexOf("-") >= 0 ? M[yc] = !0 : Jn.test(R) ? Qn.test(R) ? M[xr] = !0 : M[gc] = !0 : M[mc] = !0, Wd(n, R, R, M);
  }
  return Wd(n, "localhost", Xr, {
    ascii: !0
  }), n.jd = new rn(Po), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Ep)
  };
}
function Tp(e, t) {
  const n = Y0(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, h = 0, c = null, p = -1, y = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (p = 0, y = 0, c = o) : p >= 0 && (p += n[s].length, y++), h += n[s].length, r += n[s].length, s++;
    r -= p, s -= y, h -= p, a.push({
      t: c.t,
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
function Y0(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Si(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Zd(e) {
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
const Jr = {
  defaultProtocol: "http",
  events: null,
  format: Xd,
  formatHref: Xd,
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
function au(e, t = null) {
  let n = Object.assign({}, Jr);
  e && (n = Object.assign(n, e instanceof au ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
au.prototype = {
  o: Jr,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Jr[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Xd(e) {
  return e;
}
function kp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
kp.prototype = {
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
  toObject(e = Jr.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), h = e.get("rel", n, t), c = e.getObj("attributes", n, t), p = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), h && (s.rel = h), c && Object.assign(s, c), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: p
    };
  }
};
function il(e, t) {
  class n extends kp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Z0 = il("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Jd = il("text"), X0 = il("nl"), As = il("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Jr.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Xr && e[1].t === la;
  }
}), hn = (e) => new rn(e);
function J0({
  groups: e
}) {
  const t = e.domain.concat([Co, Eo, Oi, To, ko, Ao, Oo, xo, pn, Jc, Lr, No, Ro, Lo, zn, Po, Pr, Io]), n = [So, la, eu, $n, tu, Lr, Ir, nu, iu, fo, ho, Nr, Rr, lo, oo, co, uo, po, vo, mo, go, bo, yo, _o, wo], i = [Co, So, Eo, To, ko, Ao, Oo, xo, pn, Nr, Rr, Lr, No, Ro, Lo, Ir, zn, Po, Pr, Io], a = hn(), r = J(a, Pr);
  Le(r, i, r), Le(r, e.domain, r);
  const s = hn(), o = hn(), l = hn();
  Le(a, e.domain, s), Le(a, e.scheme, o), Le(a, e.slashscheme, l), Le(s, i, r), Le(s, e.domain, s);
  const h = J(s, Oi);
  J(r, Oi, h), J(o, Oi, h), J(l, Oi, h);
  const c = J(r, $n);
  Le(c, i, r), Le(c, e.domain, r);
  const p = hn();
  Le(h, e.domain, p), Le(p, e.domain, p);
  const y = J(p, $n);
  Le(y, e.domain, p);
  const S = hn(Z0);
  Le(y, e.tld, S), Le(y, e.utld, S), J(h, Xr, S);
  const x = J(p, pn);
  J(x, pn, x), Le(x, e.domain, p), Le(S, e.domain, p), J(S, $n, y), J(S, pn, x);
  const T = J(s, pn), R = J(s, $n);
  J(T, pn, T), Le(T, e.domain, s), Le(R, i, r), Le(R, e.domain, s);
  const L = hn(As);
  Le(R, e.tld, L), Le(R, e.utld, L), Le(L, e.domain, s), Le(L, i, r), J(L, $n, R), J(L, pn, T), J(L, Oi, h);
  const M = J(L, la), j = hn(As);
  Le(M, e.numeric, j);
  const $ = hn(As), le = hn();
  Le($, t, $), Le($, n, le), Le(le, t, $), Le(le, n, le), J(L, zn, $), J(j, zn, $);
  const de = J(o, la), Q = J(l, la), te = J(Q, zn), D = J(te, zn);
  Le(o, e.domain, s), J(o, $n, R), J(o, pn, T), Le(l, e.domain, s), J(l, $n, R), J(l, pn, T), Le(de, e.domain, $), J(de, zn, $), J(de, Ir, $), Le(D, e.domain, $), Le(D, t, $), J(D, zn, $);
  const se = [
    [Nr, Rr],
    // {}
    [oo, lo],
    // []
    [co, uo],
    // ()
    [fo, ho],
    // <>
    [po, vo],
    // （）
    [mo, go],
    // 「」
    [bo, yo],
    // 『』
    [_o, wo]
    // ＜＞
  ];
  for (let ve = 0; ve < se.length; ve++) {
    const [Y, ne] = se[ve], P = J($, Y);
    J(le, Y, P);
    const F = hn(As);
    Le(P, t, F);
    const W = hn();
    Le(P, n, W), J(P, ne, $), Le(F, t, F), Le(F, n, W), Le(W, t, F), Le(W, n, W), J(F, ne, $), J(W, ne, $);
  }
  return J(a, Xr, L), J(a, Qc, X0), {
    start: a,
    tokens: Ep
  };
}
function Q0(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, h = null, c = 0, p = null, y = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (h = l || o.go(n[a].t)); )
      l = null, o = h, o.accepts() ? (y = 0, p = o) : y >= 0 && y++, a++, c++;
    if (y < 0)
      a -= c, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(Vl(Jd, t, s)), s = []), a -= y, c -= y;
      const S = p.t, x = n.slice(a - c, a);
      r.push(Vl(S, t, x));
    }
  }
  return s.length > 0 && r.push(Vl(Jd, t, s)), r;
}
function Vl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Rt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function ew() {
  Rt.scanner = W0(Rt.customSchemes);
  for (let e = 0; e < Rt.tokenQueue.length; e++)
    Rt.tokenQueue[e][1]({
      scanner: Rt.scanner
    });
  Rt.parser = J0(Rt.scanner.tokens);
  for (let e = 0; e < Rt.pluginQueue.length; e++)
    Rt.pluginQueue[e][1]({
      scanner: Rt.scanner,
      parser: Rt.parser
    });
  return Rt.initialized = !0, Rt;
}
function Ap(e) {
  return Rt.initialized || ew(), Q0(Rt.parser.start, e, Tp(Rt.scanner.start, e));
}
Ap.scan = Tp;
function tw(e) {
  const t = new au({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, aw), n = Ap(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Ys(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function nw(e) {
  return e.replace(/"/g, "&quot;");
}
function iw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${nw(i)}"`);
  }
  return t.join(" ");
}
function aw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${iw(t)}>${Ys(n)}</${e}>`;
}
const rw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = tw(t.text));
}, sw = ["title"], ow = /* @__PURE__ */ kt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = It("NcAppSidebar:header:ref");
    return (n, i) => Je((b(), C("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Oe(d(e.name), 1)
    ], 8, sw)), [
      [f(rw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), lw = ["aria-labelledby"], cw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, uw = ["id"], dw = {
  key: 2,
  class: "empty-content__description"
}, fw = {
  key: 3,
  class: "empty-content__action"
}, hw = /* @__PURE__ */ kt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Qo();
    return (n, i) => (b(), C("div", {
      "aria-labelledby": f(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), C("div", cw, [
        Ne(n.$slots, "icon", {}, void 0, !0)
      ])) : B("", !0),
      e.name !== "" || n.$slots.name ? (b(), C("div", {
        key: 1,
        id: f(t),
        class: "empty-content__name"
      }, [
        Ne(n.$slots, "name", {}, () => [
          Oe(d(e.name), 1)
        ], !0)
      ], 8, uw)) : B("", !0),
      e.description !== "" || n.$slots.description ? (b(), C("p", dw, [
        Ne(n.$slots, "description", {}, () => [
          Oe(d(e.description), 1)
        ], !0)
      ])) : B("", !0),
      n.$slots.action ? (b(), C("div", fw, [
        Ne(n.$slots, "action", {}, void 0, !0)
      ])) : B("", !0)
    ], 8, lw));
  }
}), pw = /* @__PURE__ */ Ge(hw, [["__scopeId", "data-v-8609a4c1"]]), vw = {
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
}, mw = ["aria-hidden", "aria-label"], gw = ["fill", "width", "height"], bw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, yw = { key: 0 };
function _w(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", bw, [
        n.title ? (b(), C("title", yw, d(n.title), 1)) : B("", !0)
      ])
    ], 8, gw))
  ], 16, mw);
}
const ww = /* @__PURE__ */ Ge(vw, [["render", _w]]), Cw = {
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
}, Sw = ["aria-hidden", "aria-label"], Ew = ["fill", "width", "height"], Tw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, kw = { key: 0 };
function Aw(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", Tw, [
        n.title ? (b(), C("title", kw, d(n.title), 1)) : B("", !0)
      ])
    ], 8, Ew))
  ], 16, Sw);
}
const Ow = /* @__PURE__ */ Ge(Cw, [["render", Aw]]), xw = {
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
}, Nw = ["aria-hidden", "aria-label"], Rw = ["fill", "width", "height"], Lw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Iw = { key: 0 };
function Pw(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", Lw, [
        n.title ? (b(), C("title", Iw, d(n.title), 1)) : B("", !0)
      ])
    ], 8, Rw))
  ], 16, Nw);
}
const Dw = /* @__PURE__ */ Ge(xw, [["render", Pw]]), Mw = ["aria-selected", "tabindex"], Fw = /* @__PURE__ */ kt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ em({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Wf(e, "selected"), n = /* @__PURE__ */ mt(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), C("button", {
      class: Te(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: f($i),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      u("span", {
        class: Te([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        u("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          we(vc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: xe(() => [
              u("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        u("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          we(vc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: xe(() => [
              u("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      u("span", {
        class: Te(a.$style.sidebarTabsButton__name)
      }, d(e.tab.name), 3)
    ], 10, Mw));
  }
}), $w = "_sidebarTabsButton_q3kBA", zw = "_sidebarTabsButton_legacy_KQ4d1", Uw = "_sidebarTabsButton_selected_Pjayf", Bw = "_sidebarTabsButton_animatedHighlight_uvp-0", Hw = "_sidebarTabsButton__name_rlQsL", jw = "_sidebarTabsButton__icon_QzZg4", Vw = "_sidebarTabsButton__iconLayer_ZkZan", Kw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Gw = "_sidebarTabsButton__icon_pop_IA0By", qw = "_sidebarTabsButton__legacyIcon_QhcNW", Ww = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: $w,
  sidebarTabsButton_legacy: zw,
  sidebarTabsButton_selected: Uw,
  sidebarTabsButton_animatedHighlight: Bw,
  sidebarTabsButton__name: Hw,
  sidebarTabsButton__icon: jw,
  sidebarTabsButton__iconLayer: Vw,
  sidebarTabsButton__iconLayer_hidden: Kw,
  sidebarTabsButton__icon_pop: Gw,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: qw
}, Yw = {
  $style: Ww
}, Zw = /* @__PURE__ */ Ge(Fw, [["__cssModules", Yw]]), Xw = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: Zw
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
      isLegacy34: $i,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [nb()]) : t.order - n.order), this.updateActive();
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
}, Jw = { class: "app-sidebar-tabs" };
function Qw(e, t, n, i, a, r) {
  const s = $e("NcAppSidebarTabsButton");
  return b(), C("div", Jw, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), C("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Wt(et((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Wt(et((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Wt(et((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Wt(et((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Wt(et((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Wt(et((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Wt(et((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), C("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: yn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : B("", !0),
      (b(!0), C(ue, null, De(a.tabs, (o) => (b(), Me(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : B("", !0),
    u("div", {
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Ne(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const eC = /* @__PURE__ */ Ge(Xw, [["render", Qw], ["__scopeId", "data-v-74190d2a"]]);
Fi(Fb);
const tC = {
  name: "NcAppSidebar",
  components: {
    NcActions: gp,
    NcAppSidebarHeader: ow,
    NcAppSidebarTabs: eC,
    NcButton: Hn,
    NcLoadingIcon: bp,
    NcEmptyContent: pw,
    IconArrowRight: Yh,
    IconClose: Zh,
    IconDockRight: ww,
    IconStar: Ow,
    IconStarOutline: Dw
  },
  directives: {
    Focus: z0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: $0
  },
  inject: {
    ncContentSelector: {
      from: Wh,
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
    const e = /* @__PURE__ */ mt(null);
    return vn("NcAppSidebar:header:ref", e), {
      uid: Qo(),
      isMobile: Rb(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: bt("Change name"),
      closeTranslated: bt("Close sidebar"),
      favoriteTranslated: bt("Favorite"),
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
    isSlotPopulated: Xc,
    t: bt,
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
      this.focusTrap || (this.focusTrap = Kc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Gr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && da.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, nC = ["aria-labelledby"], iC = { class: "app-sidebar-header__info" }, aC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, rC = { class: "app-sidebar-header__name-container" }, sC = { class: "app-sidebar-header__mainname-container" }, oC = ["placeholder", "value"], lC = ["title"], cC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function uC(e, t, n, i, a, r) {
  const s = $e("IconDockRight"), o = $e("NcButton"), l = $e("NcLoadingIcon"), h = $e("IconStar"), c = $e("IconStarOutline"), p = $e("NcAppSidebarHeader"), y = $e("IconArrowRight"), S = $e("NcActions"), x = $e("IconClose"), T = $e("NcAppSidebarTabs"), R = $e("NcEmptyContent"), L = gu("focus"), M = gu("click-outside");
  return b(), Me(Bm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: xe(() => [
      Je(u("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Wt((...j) => r.onKeydownEsc && r.onKeydownEsc(...j), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), Me(Lf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          we(o, Ft({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (j) => e.$emit("update:open", !0))
          }), {
            icon: xe(() => [
              Ne(e.$slots, "toggle-icon", {}, () => [
                we(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : B("", !0),
        u("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (b(), Me(p, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Ne(e.$slots, "info", { key: 0 }, () => [
            u("div", iC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), C("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: yn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...j) => r.onFigureClick && r.onFigureClick(...j)),
                onKeydown: t[2] || (t[2] = Wt((...j) => r.onFigureClick && r.onFigureClick(...j), ["enter"]))
              }, [
                Ne(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : B("", !0),
              u("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), C("div", aC, [
                  Ne(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), Me(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: et(r.toggleStarred, ["prevent"])
                    }, {
                      icon: xe(() => [
                        n.starLoading ? (b(), Me(l, { key: 0 })) : a.isStarred ? (b(), Me(h, {
                          key: 1,
                          size: 20
                        })) : (b(), Me(c, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : B("", !0)
                  ], !0)
                ])) : B("", !0),
                u("div", rC, [
                  u("div", sC, [
                    Je(we(p, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: et(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [$a, !n.nameEditable]
                    ]),
                    n.nameEditable ? Je((b(), C("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = et((...j) => r.onSubmitName && r.onSubmitName(...j), ["prevent"]))
                    }, [
                      Je(u("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Wt(et((...j) => r.onDismissEditing && r.onDismissEditing(...j), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...j) => r.onNameInput && r.onNameInput(...j))
                      }, null, 40, oC), [
                        [L]
                      ]),
                      we(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: xe(() => [
                          we(y, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : B("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), Me(S, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: xe(() => [
                        Ne(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : B("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), C("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Ne(e.$slots, "subname", {}, () => [
                      Oe(d(n.subname), 1)
                    ], !0)
                  ], 8, lC)) : B("", !0)
                ])
              ], 2)
            ])
          ], !0),
          we(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: et(r.closeSidebar, ["prevent"])
          }, {
            icon: xe(() => [
              we(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), C("div", cC, [
            Ne(e.$slots, "description", {}, void 0, !0)
          ])) : B("", !0)
        ], 2),
        Je(we(T, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: xe(() => [
            Ne(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [$a, !n.loading]
        ]),
        n.loading ? (b(), Me(R, { key: 1 }, {
          icon: xe(() => [
            we(l, { size: 64 })
          ]),
          _: 1
        })) : B("", !0)
      ], 40, nC), [
        [$a, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const dC = /* @__PURE__ */ Ge(tC, [["render", uC], ["__scopeId", "data-v-c2c6820b"]]);
Fi(Hb);
const fC = `<!--
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
`, hC = `<!--
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
`, pC = { class: "vue-skip-actions__container" }, vC = { class: "vue-skip-actions__headline" }, mC = { class: "vue-skip-actions__buttons" }, gC = /* @__PURE__ */ kt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    vn(qh, o), vn(Wh, "#content-vue"), vn("appName", q(() => t.appName));
    const n = as(), i = /* @__PURE__ */ mt(!1), a = /* @__PURE__ */ mt(), r = q(() => a.value === "navigation" ? hC : fC);
    Uf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      ui("toggle-navigation", { open: !0 }), li(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, h) => (b(), C("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": f($i) }]])
    }, [
      (b(), Me(Lf, { to: "#skip-actions" }, [
        u("div", pC, [
          u("div", vC, d(f(bt)("Keyboard navigation help")), 1),
          u("div", mC, [
            Je(we(Hn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: et(s, ["prevent"]),
              onFocusin: h[0] || (h[0] = (c) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (c) => a.value = "navigation")
            }, {
              default: xe(() => [
                Oe(d(f(bt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [$a, i.value]
            ]),
            we(Hn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (c) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (c) => a.value = "content")
            }, {
              default: xe(() => [
                Oe(d(f(bt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Je(we(Jo, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [$a, !f(n)]
          ])
        ])
      ])),
      Ne(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), bC = /* @__PURE__ */ Ge(gC, [["__scopeId", "data-v-d13dcb98"]]), yC = ["href"], _C = ["lang", "dir"], wC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, CC = { class: "library-review-header" }, SC = { class: "library-muted library-catalogue-eyebrow" }, EC = { id: "library-review-heading" }, TC = ["aria-label"], kC = ["href", "aria-current"], AC = ["aria-label"], OC = ["name", "value"], xC = {
  type: "submit",
  class: "button secondary"
}, NC = ["aria-busy"], RC = { key: 0 }, LC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, IC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, PC = { class: "library-metadata-review-workbench-copy" }, DC = { class: "library-muted library-catalogue-eyebrow" }, MC = ["title"], FC = {
  key: 0,
  class: "library-metadata-review-card"
}, $C = { class: "library-muted" }, zC = { class: "library-metadata-review-fields" }, UC = ["action"], BC = ["value"], HC = ["value"], jC = {
  type: "submit",
  class: "button secondary"
}, VC = { class: "library-metadata-review-actions" }, KC = ["href"], GC = ["href"], qC = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, WC = ["href"], YC = ["aria-label"], ZC = {
  key: 0,
  class: "library-muted"
}, XC = {
  key: 1,
  class: "library-scan-error"
}, JC = ["href"], QC = ["href"], eS = ["aria-label"], tS = ["href"], nS = {
  key: 1,
  class: "library-muted"
}, iS = { key: 0 }, aS = ["href"], rS = {
  key: 3,
  class: "library-muted"
}, sS = {
  key: 1,
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, oS = ["aria-label"], lS = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, cS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, uS = ["title"], dS = { class: "library-workspace-panel-purpose" }, fS = { class: "library-workspace-scope-badge" }, hS = ["aria-label"], pS = ["name", "value"], vS = { class: "library-quick-search-row" }, mS = ["title"], gS = ["placeholder"], bS = ["aria-label"], yS = { class: "library-quick-filter-options" }, _S = { class: "library-quick-filter-option-grid" }, wS = { value: "title" }, CS = { value: "recent" }, SS = { value: "publicationDate" }, ES = { value: "publication" }, TS = { value: "lastOpened" }, kS = { value: "format" }, AS = { value: "" }, OS = { value: "1" }, xS = ["value"], NS = ["value"], RS = ["aria-label"], LS = ["aria-label"], IS = ["aria-label"], PS = { value: "" }, DS = ["value"], MS = { value: "" }, FS = ["value"], $S = { value: "" }, zS = ["value"], US = ["title"], BS = { value: "" }, HS = ["value"], jS = ["placeholder"], VS = { value: "" }, KS = ["value"], GS = { value: "" }, qS = ["value"], WS = { value: "" }, YS = ["value"], ZS = { value: "" }, XS = ["value"], JS = { value: "" }, QS = ["value"], eE = { value: "" }, tE = ["value"], nE = { value: "" }, iE = { value: "1" }, aE = {
  type: "submit",
  class: "button primary"
}, rE = {
  href: "?",
  class: "button secondary"
}, sE = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, oE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, lE = ["title"], cE = { class: "library-workspace-panel-purpose" }, uE = { class: "library-workspace-scope-badge" }, dE = {
  key: 0,
  class: "library-home-hero-card"
}, fE = ["title"], hE = { class: "library-home-hero-actions" }, pE = ["href"], vE = {
  key: 1,
  class: "library-home-rediscover"
}, mE = { class: "library-muted library-catalogue-eyebrow" }, gE = { class: "library-muted" }, bE = ["aria-label"], yE = ["href", "title"], _E = { class: "library-useful-view-count" }, wE = { class: "library-shortcut-selectors" }, CE = ["title"], SE = { value: "" }, EE = ["value"], TE = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, kE = { value: "" }, AE = ["value"], OE = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, xE = { value: "" }, NE = ["value"], RE = { class: "library-saved-collections" }, LE = ["title"], IE = ["action", "title"], PE = ["value"], DE = ["value"], ME = ["placeholder", "disabled"], FE = ["disabled", "title"], $E = ["aria-label"], zE = ["href"], UE = ["action"], BE = ["value"], HE = {
  type: "submit",
  class: "button tertiary"
}, jE = ["aria-label"], VE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, KE = ["title"], GE = { class: "library-workspace-panel-purpose" }, qE = { class: "library-workspace-scope-badge" }, WE = { class: "library-batch-action-grid" }, YE = ["action"], ZE = ["value"], XE = ["name", "value"], JE = ["placeholder"], QE = ["title"], eT = ["action"], tT = ["value"], nT = ["name", "value"], iT = ["placeholder"], aT = ["title"], rT = ["action"], sT = ["value"], oT = ["name", "value"], lT = ["title"], cT = ["action"], uT = ["value"], dT = ["name", "value"], fT = { name: "bulkEditField" }, hT = { value: "publicationType" }, pT = { value: "subtitle" }, vT = { value: "creators" }, mT = { value: "publication" }, gT = { value: "publicationDate" }, bT = { value: "language" }, yT = { value: "publisher" }, _T = { value: "genres" }, wT = { value: "classifications" }, CT = ["placeholder"], ST = ["title"], ET = ["action"], TT = ["value"], kT = ["name", "value"], AT = ["title"], OT = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, xT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, NT = ["title"], RT = { class: "library-workspace-panel-purpose" }, LT = { class: "library-workspace-scope-badge" }, IT = ["aria-label"], PT = ["href", "title"], DT = ["aria-label"], MT = ["title"], FT = ["href"], $T = ["href"], zT = ["action"], UT = ["value"], BT = {
  type: "submit",
  class: "button secondary"
}, HT = ["title"], jT = ["href"], VT = ["action"], KT = ["value"], GT = {
  type: "submit",
  class: "button secondary"
}, qT = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, WT = { class: "library-metadata-review-workbench-copy" }, YT = { class: "library-muted library-catalogue-eyebrow" }, ZT = ["title"], XT = {
  key: 0,
  class: "library-metadata-review-card"
}, JT = { class: "library-muted" }, QT = { class: "library-metadata-review-fields" }, ek = ["action"], tk = ["value"], nk = ["value"], ik = {
  type: "submit",
  class: "button secondary"
}, ak = { class: "library-metadata-review-actions" }, rk = ["href"], sk = ["href"], ok = {
  key: 1,
  class: "library-muted"
}, lk = ["href"], ck = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, uk = ["title"], dk = { class: "library-workspace-panel-purpose" }, fk = { class: "library-workspace-scope-badge" }, hk = { class: "library-catalogue-actions-list" }, pk = ["href", "aria-label"], vk = ["href", "aria-label"], mk = ["href", "aria-label"], gk = ["href", "aria-label"], bk = { class: "library-actions-health-overview" }, yk = { class: "library-muted library-catalogue-eyebrow" }, _k = ["title"], wk = {
  key: 0,
  class: "library-muted"
}, Ck = {
  key: 1,
  class: "library-notice"
}, Sk = {
  key: 2,
  class: "library-muted"
}, Ek = {
  key: 0,
  class: "library-muted"
}, Tk = {
  key: 1,
  class: "library-muted"
}, kk = {
  key: 2,
  class: "library-muted"
}, Ak = ["disabled"], Ok = { class: "library-actions-health-links" }, xk = ["href"], Nk = ["href"], Rk = ["href"], Lk = ["href"], Ik = { class: "library-actions-health-grid" }, Pk = { class: "library-import-health-number" }, Dk = { class: "library-import-health-number" }, Mk = { class: "library-muted" }, Fk = { class: "library-muted" }, $k = {
  key: 0,
  class: "library-import-health-examples"
}, zk = { class: "library-catalogue-header" }, Uk = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Bk = { id: "library-catalogue-heading" }, Hk = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, jk = {
  key: 1,
  class: "library-notice library-batch-metadata-apply-result"
}, Vk = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Kk = { class: "library-muted library-catalogue-eyebrow" }, Gk = ["title"], qk = ["aria-label"], Wk = { key: 0 }, Yk = { key: 1 }, Zk = { key: 2 }, Xk = ["aria-label"], Jk = { key: 0 }, Qk = { key: 1 }, eA = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, tA = { class: "library-muted library-catalogue-eyebrow" }, nA = ["title"], iA = ["aria-label"], aA = ["href"], rA = {
  key: 0,
  class: "library-notice"
}, sA = { class: "library-publication-issue-label" }, oA = ["href"], lA = { class: "library-muted" }, cA = {
  key: 1,
  class: "library-publication-unknown-issues"
}, uA = ["title"], dA = ["href"], fA = ["aria-label"], hA = ["aria-pressed"], pA = ["aria-pressed"], vA = ["aria-pressed"], mA = { class: "library-catalogue-status-row" }, gA = { class: "library-muted library-filter-result-summary" }, bA = { key: 0 }, yA = { href: "?" }, _A = ["aria-label"], wA = { class: "library-pagination-range" }, CA = { key: 0 }, SA = ["href"], EA = {
  key: 1,
  class: "library-muted"
}, TA = ["href"], kA = {
  key: 3,
  class: "library-muted"
}, AA = ["aria-label"], OA = ["href", "aria-label"], xA = ["title"], NA = { class: "library-empty-actions" }, RA = ["href"], LA = { class: "library-muted" }, IA = ["title"], PA = { class: "library-empty-actions" }, DA = ["href"], MA = ["title"], FA = { class: "library-empty-actions" }, $A = ["href"], zA = {
  href: "?",
  class: "button primary"
}, UA = ["title"], BA = { class: "library-empty-actions" }, HA = ["href"], jA = ["href", "aria-label"], VA = { class: "library-cover-frame" }, KA = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, GA = ["src", "alt", "onLoad", "onError"], qA = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, WA = ["action", "onSubmit"], YA = ["value"], ZA = ["value"], XA = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], JA = ["data-library-star-error"], QA = { class: "library-cover-summary" }, e2 = { class: "library-cover-primary" }, t2 = ["aria-label"], n2 = ["href"], i2 = ["onToggle"], a2 = ["aria-label"], r2 = { class: "library-cover-meta" }, s2 = {
  key: 0,
  class: "library-creator"
}, o2 = { class: "library-cover-detail-list" }, l2 = { class: "library-cover-detail-chip" }, c2 = {
  key: 0,
  class: "library-cover-detail-chip"
}, u2 = {
  key: 1,
  class: "library-cover-detail-chip"
}, d2 = {
  key: 2,
  class: "library-cover-detail-chip"
}, f2 = {
  key: 3,
  class: "library-cover-detail-chip"
}, h2 = {
  key: 4,
  class: "library-cover-detail-chip"
}, p2 = {
  key: 5,
  class: "library-cover-detail-chip"
}, v2 = {
  key: 6,
  class: "library-cover-detail-chip"
}, m2 = {
  key: 1,
  class: "library-muted library-cover-description"
}, g2 = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, b2 = { key: 0 }, y2 = ["aria-label"], _2 = {
  key: 0,
  class: "library-muted"
}, w2 = { class: "library-cover-actions" }, C2 = ["href"], S2 = ["href"], E2 = ["onClick"], T2 = ["href"], k2 = ["aria-label"], A2 = { class: "library-pagination-range" }, O2 = { key: 0 }, x2 = ["href"], N2 = {
  key: 1,
  class: "library-muted"
}, R2 = ["href"], L2 = {
  key: 3,
  class: "library-muted"
}, I2 = {
  class: "library-sidebar-content",
  "aria-live": "polite"
}, P2 = {
  key: 0,
  class: "library-muted",
  role: "status"
}, D2 = ["role"], M2 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted"
}, F2 = ["src", "alt"], $2 = { class: "library-muted library-catalogue-eyebrow" }, z2 = { key: 0 }, U2 = {
  key: 0,
  class: "library-sidebar-description"
}, B2 = { class: "library-detail-drawer-facts" }, H2 = { key: 0 }, j2 = { key: 1 }, V2 = { key: 2 }, K2 = { key: 3 }, G2 = { key: 4 }, q2 = { key: 5 }, W2 = {
  key: 1,
  class: "library-sidebar-provenance",
  "aria-labelledby": "library-sidebar-provenance-heading"
}, Y2 = { id: "library-sidebar-provenance-heading" }, Z2 = {
  key: 0,
  class: "library-muted"
}, X2 = {
  key: 2,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-review-heading"
}, J2 = { id: "library-sidebar-review-heading" }, Q2 = { class: "library-detail-drawer-actions" }, eO = ["href"], tO = ["href"], nO = ["aria-label"], iO = ["disabled"], aO = ["disabled"], rO = "/apps/library", sO = 2147483647, oO = {
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
    ]), r = Object.freeze(Object.fromEntries(a.map(({ key: k, value: E }) => [k, E])));
    function s(k, E) {
      return Object.prototype.hasOwnProperty.call(r, k) && String(E ?? "").trim() === r[k];
    }
    function o(k) {
      const E = new URLSearchParams(k);
      for (const m of Object.keys(r)) {
        const ie = [...new Set([...E.keys()].filter((je) => je === m || je.startsWith(`${m}[`)))], Pe = ie.reduce((je, vt) => je + E.getAll(vt).length, 0);
        if (Pe > 1 || ie.some((je) => je !== m)) {
          for (const je of ie) E.delete(je);
          continue;
        }
        m !== "status" && Pe === 1 && !s(m, E.get(m)) && E.delete(m);
      }
      return E;
    }
    function l(k) {
      return Object.keys(r).some((E) => k.getAll(E).length === 1 && s(E, k.get(E)));
    }
    function h(k) {
      return Object.fromEntries(Object.entries(k || {}).filter(([E, m]) => E === "status" || !Object.prototype.hasOwnProperty.call(r, E) || s(E, m)));
    }
    const c = /* @__PURE__ */ jt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), p = /* @__PURE__ */ jt((c.items || []).map((k) => ({ ...k }))), y = q(() => p), S = q(() => c.shelves || []), x = q(() => c.formats || []), T = q(() => c.publications || []), R = q(() => c.publicationSummaries || []), L = q(() => c.publicationIssueContext || null), M = q(() => c.publicationYears || []), j = q(() => c.creators || []), $ = q(() => c.scanStatuses || []), le = q(() => c.workflowStatuses || []), de = q(() => c.genres || []), Q = q(() => c.classifications || []), te = q(() => c.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ jt({
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
    for (const k of Object.keys(r))
      k !== "status" && (s(k, D[k]) || (D[k] = ""));
    const se = Object.fromEntries(Object.keys(D).map((k) => [k, k === "sort" ? "title" : k === "view" ? "compact" : ""])), ve = window.location.pathname.indexOf(rO), Y = ve >= 0 ? window.location.pathname.slice(0, ve) : "", ne = {
      catalogue: `${Y}/apps/library/`,
      review: `${Y}/apps/library/?scannerConflicts=1`,
      settings: `${Y}/settings/user/library`
    };
    function P(k, E) {
      if (typeof k != "string" || k === "") return E;
      try {
        const m = Y ? `${Y}/` : "/";
        let ie = k;
        for (let Pe = 0; Pe < 5; Pe += 1) {
          if (!ie.startsWith("/") || ie.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(ie)) return E;
          const je = new URL(ie, window.location.origin);
          if (je.origin !== window.location.origin || !je.pathname.startsWith(m)) return E;
          const vt = ie.split(/[?#]/, 1)[0];
          for (const Ea of vt.split("/")) {
            let Ta = Ea;
            for (let ka = 0; ka < 5; ka += 1) {
              const Dn = decodeURIComponent(Ta);
              if (/[\\/\u0000-\u001f\u007f]/.test(Dn) || Dn === "." || Dn === "..") return E;
              if (Dn === Ta) break;
              if (Ta = Dn, ka === 4) return E;
            }
          }
          const en = decodeURI(ie);
          if (en === ie) return k;
          ie = en;
        }
        return E;
      } catch {
        return E;
      }
    }
    const F = q(() => P(c.settingsUrl, ne.settings)), W = q(() => P(c.catalogueRootUrl, ne.catalogue)), re = q(() => P(c.reviewUrl || c.scannerConflictReviewUrl, ne.review)), ee = q(() => Object.entries(r).some(([k, E]) => D[k] === E)), ce = q(() => c.requestToken || ""), he = q(() => c.metadataExportUrl || ""), _e = q(() => c.metadataSidecarManifestUrl || ""), ge = q(() => c.metadataSidecarBundleUrl || ""), qe = q(() => c.catalogueEndpointUrl || "/apps/library/catalogue"), Ee = q(() => c.itemSidebarUrlTemplate || `${Y}/apps/library/items/__ITEM_ID__/sidebar`), nt = q(() => c.batchTagUrl || "/apps/library/bulk/tags"), st = q(() => c.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), dt = q(() => c.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), $t = q(() => c.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), it = q(() => c.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Zt = q(() => c.scannerConflictReviewUrl || "?scannerConflicts=1"), U = q(() => c.metadataErrorsUrl || "/apps/library/health/metadata-errors"), g = q(() => c.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), w = q(() => c.coverProbeUrl || "/apps/library/health/covers/probe"), A = q(() => c.importHealthSummaryUrl || "/apps/library/health/import-summary"), O = /* @__PURE__ */ jt({
      summary: c.importHealthSummary || {},
      loaded: !!(c.importHealthSummary && Object.keys(c.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), N = q(() => O.summary || {}), z = q(() => {
      const k = Number(N.value.generatedAt || 0);
      return k > 0 ? new Date(k * 1e3).toLocaleString() : "";
    }), V = q(() => N.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), K = q(() => N.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), X = q(() => N.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), H = q(() => c.discoveryPage === "publication"), me = q(() => c.discoveryPage === "year"), ae = q(() => c.discoveryPage === "creator"), fe = q(() => H.value || me.value || ae.value), ye = q(() => c.discoveryTitle || D.publication || D.year || D.creator || ""), Ae = q(() => fe.value ? ye.value : v("library", "Library")), Ie = q(() => ae.value ? v("library", "Creator") : me.value ? v("library", "Publication year") : v("library", "Publication / series")), Re = q(() => Number(c.rootCount || 0)), Ye = q(() => Number(c.enabledRootCount || 0)), Ze = q(() => Re.value === 0), ft = q(() => Re.value > 0 && Ye.value === 0), _t = q(() => on.value.length > 0), zt = {
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
    }, Ln = q(() => {
      if (typeof window > "u") return "";
      const k = new URLSearchParams(window.location.search);
      if (k.get("batchMetadataApplyResult") !== "1") return "";
      const E = k.get("batchMetadataField") || "field", m = k.get("batchMetadataApplied") || "0", ie = k.get("batchMetadataUnchanged") || "0", Pe = k.get("batchMetadataSkipped") || "0";
      return v("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: m, field: E, unchanged: ie, skipped: Pe });
    }), rt = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? v("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), At = q(() => c.savedCollections || []), zi = q(() => c.savedCollectionSaveUrl || "/apps/library/collections"), Ui = q(() => c.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ma = ["compact", "gallery", "shelf"], Xt = q(() => ma.includes(D.view) ? D.view : "compact"), gi = q(() => ({
      "library-cover-gallery--compact": Xt.value === "compact",
      "library-cover-gallery--gallery": Xt.value === "gallery",
      "library-cover-gallery--shelf": Xt.value === "shelf"
    })), on = q(() => Object.entries(zt).map(([k, E]) => ({ key: k, label: v("library", E), value: D[k] || "" })).filter((k) => String(k.value).trim() !== "")), rs = q(() => Object.entries(D).filter(([k, E]) => !["q", "sort", "starred"].includes(k) && String(E || "").trim() !== "").map(([k, E]) => ({ key: k, value: E }))), Kn = q(() => Object.entries(h(D)).filter(([k, E]) => String(E || "").trim() !== "").map(([k, E]) => ({ key: k, value: E }))), ss = q(() => Kn.value.filter(({ key: k, value: E }) => k !== "q" && !(k === "sort" && E === "title"))), Va = /* @__PURE__ */ jt({}), ga = /* @__PURE__ */ jt({}), Gn = q(() => y.value.filter((k) => k.starred || k.workflowStatus === "reading" || k.lastOpenedAt).slice(0, 5)), Cn = q(() => y.value.find((k) => k.description || k.publication || k.creators) || y.value[0] || null), ln = q(() => !fe.value && y.value.length > 0), Se = /* @__PURE__ */ mt(null), bi = /* @__PURE__ */ mt(null), ht = /* @__PURE__ */ jt({ loading: !1, error: "", missing: !1 }), os = /* @__PURE__ */ mt(null), In = /* @__PURE__ */ mt(null), Sn = /* @__PURE__ */ mt(!1);
    let ba = null, Jt = null, ya = null, qn = !1, Bi = null, Ka = 0;
    const We = q(() => bi.value !== null), cn = q(() => Se.value ? y.value.findIndex((k) => k.id === Se.value.id) : -1), _a = q(() => cn.value > 0 ? y.value[cn.value - 1] : null), Hi = q(() => cn.value >= 0 && cn.value < y.value.length - 1 ? y.value[cn.value + 1] : null), Ga = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], ot = q(() => {
      const k = s("scannerConflicts", D.scannerConflicts) || s("weakMetadata", D.weakMetadata), E = k ? y.value.find((m) => wa(m).length > 0) : null;
      return {
        enabled: k,
        item: E,
        fields: E ? wa(E) : [],
        reviewNextUrl: Zt.value,
        skipUrl: te.value.nextUrl || Zt.value
      };
    }), ls = q(() => a.map((k) => ({
      ...k,
      label: v("library", k.label),
      href: `${W.value}?${encodeURIComponent(k.key)}=${encodeURIComponent(k.value)}`,
      active: String(D[k.key] || "") === k.value
    })));
    function qa(k) {
      return Array.isArray(k) ? JSON.stringify(k) : k == null ? "" : String(k);
    }
    function wa(k) {
      const E = k.fieldValues || {}, m = k.fieldSources || {};
      return Ga.filter((ie) => Object.prototype.hasOwnProperty.call(E, ie)).map((ie) => {
        const Pe = qa(k[ie]), je = qa(E[ie]), vt = qa(m[ie] || k.metadataSource || "scanner"), en = vt.includes("filename") || vt.includes("path") ? je : "", Ea = vt.includes("sidecar") ? je : "";
        return { field: ie, currentValue: Pe, scannerCandidate: je, pathTemplateCandidate: en, sidecarValue: Ea, sourceProvenance: vt, differs: Pe !== je };
      }).filter((ie) => ie.differs);
    }
    let Wn = 0, Yn = null;
    function En() {
      const k = new URLSearchParams(window.location.search).getAll("item");
      if (k.length !== 1 || !/^[1-9][0-9]*$/.test(k[0])) return null;
      const E = Number(k[0]);
      return Number.isSafeInteger(E) && E <= sO ? E : null;
    }
    function Wa(k, E = "push") {
      const m = new URL(window.location.href);
      m.searchParams.delete("item"), k !== null && m.searchParams.set("item", String(k)), history[`${E}State`]({}, "", `${m.pathname}${m.search}${m.hash}`);
    }
    async function Pn(k, { historyMode: E = "push", seed: m = null } = {}) {
      Yn?.abort();
      const ie = ++Wn, Pe = new AbortController();
      Yn = Pe, bi.value = k, Se.value = m && Number(m.id) === k ? m : null, Object.assign(ht, { loading: !0, error: "", missing: !1 }), E !== "none" && Wa(k, E);
      try {
        const je = Ee.value.replace("__ITEM_ID__", encodeURIComponent(String(k))), vt = await fetch(je, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Pe.signal });
        if (ie !== Wn) return;
        if (!vt.ok) {
          Se.value = null, ht.missing = vt.status === 404, ht.error = vt.status === 404 ? v("library", "This publication is unavailable or you do not have access.") : v("library", "Could not load publication details. Try again.");
          return;
        }
        const en = await vt.json();
        if (ie !== Wn) return;
        if (typeof en?.item?.id != "number" || !Number.isSafeInteger(en.item.id) || en.item.id !== k) {
          Se.value = null, ht.missing = !1, ht.error = v("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = en.item, await li();
      } catch (je) {
        ie === Wn && je?.name !== "AbortError" && (Se.value = null, ht.missing = !1, ht.error = v("library", "Could not load publication details. Try again."));
      } finally {
        ie === Wn && (ht.loading = !1, Yn = null);
      }
    }
    function Tn(k, E) {
      Ya(), ba = E?.currentTarget instanceof HTMLElement ? E.currentTarget : null, Pn(Number(k.id), { seed: k });
    }
    function Ca({ historyMode: k = "push", restoreFocus: E = !0 } = {}) {
      ya = E ? ba : null, ba = null, Yn?.abort(), Yn = null, Wn += 1, bi.value = null, Se.value = null, Object.assign(ht, { loading: !1, error: "", missing: !1 }), k !== "none" && Wa(null, k);
    }
    function ji() {
      Sn.value ? (In.value?.$refs?.sidebar || In.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : os.value?.focus();
    }
    function cs() {
      const k = ya;
      if (ya = null, Ya(), qn || !k?.isConnected) return;
      const E = Ka;
      Bi = window.requestAnimationFrame(() => {
        Bi = null, !(E !== Ka || qn || We.value || !k.isConnected) && k.focus();
      });
    }
    function Ya() {
      Ka += 1, Bi !== null && (window.cancelAnimationFrame(Bi), Bi = null);
    }
    function yi(k = Jt) {
      Sn.value = !!k?.matches, We.value && li(ji);
    }
    function Vi(k) {
      k && Pn(Number(k.id), { seed: k });
    }
    const un = /* @__PURE__ */ mt(null);
    let _i = null, Kt = 0, Ut = null;
    const wt = /* @__PURE__ */ jt({ loading: !1, error: "" });
    function Qt(k) {
      const E = o(new FormData(k));
      for (const m of Array.from(E.keys()))
        String(E.get(m) || "").trim() === "" && E.delete(m);
      return E.delete("page"), E.get("view") === "compact" && E.delete("view"), E;
    }
    function al(k) {
      p.splice(0, p.length, ...(k.items || []).map((E) => ({ ...E })));
      for (const E of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(k, E) && (c[E] = k[E]);
      Object.assign(D, se, k.activeFilters || {});
    }
    async function Ki(k = !1) {
      if (!(O.loading || O.refreshing)) {
        k ? O.refreshing = !0 : O.loading = !0, O.error = "";
        try {
          const E = await fetch(`${A.value}${k ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!E.ok)
            throw new Error(`Import health request failed: ${E.status}`);
          O.summary = await E.json(), O.loaded = !0;
        } catch (E) {
          O.error = E?.message || String(E);
        } finally {
          O.loading = !1, O.refreshing = !1;
        }
      }
    }
    async function rl(k) {
      k && k.currentTarget && k.currentTarget.open !== !0 || O.loaded || O.loading || await Ki(!1);
    }
    async function us() {
      await Ki(!0);
    }
    async function dn(k, E = null) {
      const m = k?.currentTarget?.tagName === "FORM" ? k.currentTarget : k?.currentTarget?.form;
      if (!m && !E?.params) return;
      const ie = o(E?.params ?? Qt(m)), Pe = ie.toString(), je = Pe ? `?${Pe}` : "", vt = E?.generation ?? ++Kt, en = l(ie), Ea = E?.historyMode ?? (en ? "push" : "replace"), Ta = E?.historyTraversal === !0;
      if (vt !== Kt) return;
      E === null && Ut?.abort();
      const ka = new AbortController();
      Ut = ka, wt.loading = !0, wt.error = "";
      try {
        const Dn = await fetch(qe.value + je, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: ka.signal
        });
        if (vt !== Kt) return;
        if (!Dn.ok) {
          Ta ? Gi(ie) : en ? wt.error = v("library", "Could not load this review queue. Try again.") : Gi(ie);
          return;
        }
        const Dp = await Dn.json();
        if (vt !== Kt) return;
        al(Dp), Ea !== "none" && (history[Ea === "push" ? "pushState" : "replaceState"]({}, "", Pe ? `?${Pe}` : window.location.pathname), We.value && Ca({ historyMode: "none" }));
      } catch (Dn) {
        vt === Kt && Dn?.name !== "AbortError" && (Ta ? Gi(ie) : en ? wt.error = v("library", "Could not load this review queue. Try again.") : Gi(ie));
      } finally {
        vt === Kt && (Ut = null, wt.loading = !1);
      }
    }
    function Za() {
      Ut?.abort();
      const k = new URLSearchParams(window.location.search), E = En();
      k.has("item") && E === null && (k.delete("item"), history.replaceState({}, "", `${window.location.pathname}${k.toString() ? `?${k}` : ""}${window.location.hash}`)), E === null ? Ca({ historyMode: "none" }) : Pn(E, { historyMode: "none", seed: y.value.find((m) => Number(m.id) === E) || null }), k.delete("item"), dn(null, {
        params: o(k),
        generation: ++Kt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Gi(k) {
      const E = document.createElement("form");
      E.method = "get", E.action = window.location.pathname, E.hidden = !0;
      for (const [m, ie] of k.entries()) {
        const Pe = document.createElement("input");
        Pe.type = "hidden", Pe.name = m, Pe.value = ie, E.appendChild(Pe);
      }
      document.body.appendChild(E), E.submit(), E.remove();
    }
    function ds(k, E = null, m = null) {
      if (E === null) {
        dn(k);
        return;
      }
      dn({ currentTarget: k }, { params: E, generation: m });
    }
    function fs(k) {
      const E = k?.currentTarget?.form;
      if (!E) return;
      window.clearTimeout(_i);
      const m = ++Kt, ie = Qt(E);
      Ut?.abort(), Ut = null, _i = window.setTimeout(() => ds(E, ie, m), 350);
    }
    function hs(k) {
      const E = new URLSearchParams();
      for (const [ie, Pe] of Object.entries(D)) {
        const je = String(Pe || "").trim();
        je !== "" && ie !== k && !(ie === "sort" && je === "title") && !(ie === "view" && je === "compact") && E.set(ie, je);
      }
      const m = E.toString();
      return m ? `?${m}` : "?";
    }
    function sl() {
      return hs("q");
    }
    const Sa = q(() => c.smartViewCounts || {}), qi = q(() => {
      const k = {};
      for (const [E, m] of Object.entries(D)) {
        const ie = String(m || "").trim();
        ie !== "" && !(E === "sort" && ie === "title") && (k[E] = ie);
      }
      return k;
    }), Xa = q(() => JSON.stringify(qi.value)), Z = q(() => Object.keys(qi.value).length > 0), _ = q(() => [
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
    ]), I = q(() => [
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
    function G(k) {
      if (!ma.includes(k)) return;
      D.view = k;
      const E = o(window.location.search);
      k === "compact" ? E.delete("view") : E.set("view", k), E.delete("page"), history.replaceState({}, "", E.toString() ? `?${E.toString()}` : window.location.pathname);
    }
    function oe(k) {
      const E = o(window.location.search);
      for (const ie of Object.keys(zt))
        E.delete(ie);
      E.delete("page");
      for (const [ie, Pe] of Object.entries(k))
        String(Pe || "").trim() !== "" && E.set(ie, String(Pe));
      const m = E.toString();
      return m ? `?${m}` : "?";
    }
    function pe(k) {
      return oe(k || {});
    }
    function Ce(k) {
      return Ui.value.replace("__COLLECTION_ID__", encodeURIComponent(String(k || "0")));
    }
    function He(k) {
      return String(k || "").toUpperCase();
    }
    function Xe(k) {
      return k.nextcloudTags || [];
    }
    function Ot(k) {
      return R.value.find((m) => m.publication === k)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(k)}`;
    }
    function xt(k) {
      return c.publicationYearLandingUrls?.[k] || `/apps/library/years/${encodeURIComponent(k)}`;
    }
    function Ja(k) {
      return c.creatorLandingUrls?.[k] || `/apps/library/creators/${encodeURIComponent(k)}`;
    }
    function pt(k) {
      const E = k?.target?.value || "";
      E && (window.location.href = E);
    }
    function Qa(k) {
      return ga[k.id] || "loading";
    }
    function Op(k) {
      ga[k.id] = "loaded";
    }
    function xp(k) {
      ga[k.id] = "error";
    }
    function Np(k, E) {
      Va[k] = !!E?.currentTarget?.open;
    }
    function Rp(k) {
      const E = String(k?.tagName || "").toLowerCase();
      return k?.isContentEditable || ["input", "select", "textarea", "button"].includes(E);
    }
    function Lp(k) {
      if (k.key !== "/" || k.metaKey || k.ctrlKey || k.altKey || k.shiftKey || Rp(k.target))
        return;
      k.preventDefault();
      const E = un.value?.closest?.(".library-workspace-panel--refine");
      E && (E.open = !0), un.value?.focus(), un.value?.select?.();
    }
    function Ip(k) {
      k.key !== "Escape" || document.activeElement !== un.value || D.q === "" || (k.preventDefault(), D.q = "", un.value.value = "", window.clearTimeout(_i), ds({ currentTarget: un.value }));
    }
    function Pp(k) {
      if (!We.value || k.metaKey || k.ctrlKey || k.altKey)
        return !1;
      if (k.key === "Escape")
        return k.preventDefault(), Ca(), !0;
      if (k.key === "Tab" && Sn.value) {
        if (In.value?.focusTrap) return !1;
        const E = In.value?.$refs?.sidebar || In.value?.$el || In.value, m = [...E?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((je) => !je.hidden && je.getAttribute("aria-hidden") !== "true");
        if (m.length === 0) return !1;
        const ie = m[0], Pe = m[m.length - 1];
        if (k.shiftKey && (document.activeElement === ie || !E.contains(document.activeElement)))
          return k.preventDefault(), Pe.focus(), !0;
        if (!k.shiftKey && (document.activeElement === Pe || !E.contains(document.activeElement)))
          return k.preventDefault(), ie.focus(), !0;
      }
      return k.key === "ArrowLeft" && _a.value ? (k.preventDefault(), Vi(_a.value), !0) : k.key === "ArrowRight" && Hi.value ? (k.preventDefault(), Vi(Hi.value), !0) : !1;
    }
    function ru(k) {
      Pp(k) || (Lp(k), Ip(k));
    }
    Mi(() => {
      window.addEventListener("keydown", ru), window.addEventListener("popstate", Za), Jt = window.matchMedia?.("(max-width: 1023px)") || null, yi(), Jt?.addEventListener ? Jt.addEventListener("change", yi) : Jt?.addListener?.(yi);
      const k = new URLSearchParams(window.location.search), E = En();
      k.has("item") && E === null ? (k.delete("item"), history.replaceState({}, "", `${window.location.pathname}${k.toString() ? `?${k}` : ""}${window.location.hash}`)) : E !== null && Pn(E, { historyMode: "none", seed: y.value.find((m) => Number(m.id) === E) || null });
    }), ja(() => {
      qn = !0, Ya(), window.removeEventListener("keydown", ru), window.removeEventListener("popstate", Za), window.clearTimeout(_i), Kt += 1, Ut?.abort(), Ut = null, Wn += 1, Yn?.abort(), Yn = null, Jt?.removeEventListener ? Jt.removeEventListener("change", yi) : Jt?.removeListener?.(yi), Jt = null, ya = null;
    });
    const er = /* @__PURE__ */ jt({}), tr = /* @__PURE__ */ jt({});
    async function su(k, E) {
      const m = E?.currentTarget?.closest?.("form") || E?.currentTarget;
      if (!m || !k?.starUrl || er[k.id]) return;
      const ie = !!k.starred;
      er[k.id] = !0, tr[k.id] = "", k.starred = !ie;
      try {
        (await fetch(k.starUrl, {
          method: "POST",
          body: new FormData(m),
          credentials: "same-origin"
        })).ok || (k.starred = ie, tr[k.id] = v("library", "Could not update star. Try again."));
      } catch {
        k.starred = ie, tr[k.id] = v("library", "Could not update star. Try again.");
      } finally {
        er[k.id] = !1;
      }
    }
    return (k, E) => (b(), Me(f(bC), { "app-name": "library" }, {
      default: xe(() => [
        we(f(o_), {
          "aria-label": f(v)("library", "Library navigation")
        }, {
          list: xe(() => [
            we(f(Gh), null, {
              default: xe(() => [
                we(f(qd), {
                  active: !ee.value,
                  href: W.value,
                  name: f(v)("library", "Library")
                }, null, 8, ["active", "href", "name"]),
                we(f(qd), {
                  active: ee.value,
                  href: re.value,
                  name: f(v)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: xe(() => [
            u("a", {
              class: "library-navigation-settings-link",
              href: F.value
            }, [
              E[24] || (E[24] = u("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              u("span", null, d(f(v)("library", "Settings")), 1)
            ], 8, yC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        we(f(Sy), null, {
          default: xe(() => [
            u("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: c.language || "en",
              dir: c.direction || "ltr",
              tabindex: "-1"
            }, [
              ee.value ? (b(), C("section", wC, [
                u("header", CC, [
                  u("p", SC, d(f(v)("library", "Metadata cleanup")), 1),
                  u("h2", EC, d(f(v)("library", "Review")), 1),
                  u("p", null, d(f(v)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                u("nav", {
                  class: "library-review-queues",
                  "aria-label": f(v)("library", "Review queues")
                }, [
                  (b(!0), C(ue, null, De(ls.value, (m) => (b(), C("a", {
                    key: m.key,
                    class: Te(["library-review-queue-link", { active: m.active }]),
                    href: m.href,
                    "aria-current": m.active ? "page" : void 0
                  }, [
                    u("span", null, d(m.label), 1),
                    u("b", null, d(Number(Sa.value[m.countKey] || 0)), 1)
                  ], 10, kC))), 128))
                ], 8, TC),
                u("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": f(v)("library", "Filter current review queue"),
                  onSubmit: et(dn, ["prevent"])
                }, [
                  (b(!0), C(ue, null, De(ss.value, (m) => (b(), C("input", {
                    key: `review-${m.key}`,
                    type: "hidden",
                    name: m.key,
                    value: m.value
                  }, null, 8, OC))), 128)),
                  u("label", null, [
                    Oe(d(f(v)("library", "Search within this queue")), 1),
                    Je(u("input", {
                      "onUpdate:modelValue": E[0] || (E[0] = (m) => D.q = m),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Rs, D.q]
                    ])
                  ]),
                  u("button", xC, d(f(v)("library", "Apply")), 1)
                ], 40, AC),
                u("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": wt.loading ? "true" : "false"
                }, [
                  wt.loading ? (b(), C("span", RC, d(f(v)("library", "Loading review queue…")), 1)) : B("", !0)
                ], 8, NC),
                wt.error ? (b(), C("p", LC, d(wt.error), 1)) : B("", !0),
                ot.value.enabled ? (b(), C("section", IC, [
                  u("div", PC, [
                    u("p", DC, d(f(v)("library", "Metadata review workbench")), 1),
                    u("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: f(v)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                    }, d(f(v)("library", "Review next conflict")), 9, MC)
                  ]),
                  ot.value.item ? (b(), C("article", FC, [
                    u("header", null, [
                      u("strong", null, d(ot.value.item.title), 1),
                      u("span", $C, d(ot.value.item.cachedPath), 1)
                    ]),
                    u("div", zC, [
                      (b(!0), C(ue, null, De(ot.value.fields, (m) => (b(), C("article", {
                        key: m.field,
                        class: "library-metadata-review-field"
                      }, [
                        u("h4", null, d(m.field), 1),
                        u("dl", null, [
                          u("div", null, [
                            u("dt", null, d(f(v)("library", "Current value")), 1),
                            u("dd", null, d(m.currentValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, d(f(v)("library", "scanner candidate")), 1),
                            u("dd", null, d(m.scannerCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, d(f(v)("library", "path-template candidate")), 1),
                            u("dd", null, d(m.pathTemplateCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, d(f(v)("library", "sidecar value")), 1),
                            u("dd", null, d(m.sidecarValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, d(f(v)("library", "source provenance")), 1),
                            u("dd", null, d(m.sourceProvenance || "—"), 1)
                          ])
                        ]),
                        u("form", {
                          method: "post",
                          action: ot.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ce.value
                          }, null, 8, BC),
                          u("input", {
                            type: "hidden",
                            name: "field",
                            value: m.field
                          }, null, 8, HC),
                          E[25] || (E[25] = u("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          u("button", jC, d(f(v)("library", "accept scanner candidate")), 1)
                        ], 8, UC)
                      ]))), 128))
                    ]),
                    u("footer", VC, [
                      u("a", {
                        class: "button secondary",
                        href: ot.value.item.detailsUrl
                      }, d(f(v)("library", "Open full details")), 9, KC),
                      u("a", {
                        class: "button secondary",
                        href: ot.value.skipUrl
                      }, d(f(v)("library", "Skip to next conflict")), 9, GC)
                    ])
                  ])) : B("", !0)
                ])) : B("", !0),
                y.value.length === 0 && !wt.loading && !wt.error ? (b(), C("div", qC, [
                  u("h3", null, d(f(v)("library", "This review queue is clear")), 1),
                  u("p", null, d(f(v)("library", "Choose another queue or return to the catalogue.")), 1),
                  u("a", {
                    class: "button primary",
                    href: W.value
                  }, d(f(v)("library", "Back to Library")), 9, WC)
                ])) : (b(), C("div", {
                  key: 3,
                  class: "library-review-results",
                  "aria-label": f(v)("library", "Review results")
                }, [
                  (b(!0), C(ue, null, De(y.value, (m) => (b(), C("article", {
                    key: m.id,
                    class: "library-review-result-card"
                  }, [
                    u("div", null, [
                      u("h3", null, d(m.title), 1),
                      m.creators ? (b(), C("p", ZC, d(m.creators), 1)) : B("", !0),
                      m.scanError ? (b(), C("p", XC, d(m.scanError), 1)) : B("", !0)
                    ]),
                    u("p", null, [
                      u("a", {
                        class: "button secondary",
                        href: m.detailsUrl
                      }, d(f(v)("library", "Open full details")), 9, JC),
                      u("a", {
                        class: "button primary",
                        href: m.openUrl
                      }, d(f(v)("library", "Read")), 9, QC)
                    ])
                  ]))), 128))
                ], 8, YC)),
                y.value.length > 0 ? (b(), C("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": f(v)("library", "Review pagination")
                }, [
                  te.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: te.value.previousUrl
                  }, d(f(v)("library", "Previous")), 9, tS)) : (b(), C("span", nS, d(f(v)("library", "Previous")), 1)),
                  u("span", null, [
                    Oe(d(f(v)("library", "Page")) + " " + d(te.value.page), 1),
                    te.value.total > 0 ? (b(), C("span", iS, " · " + d(te.value.from) + "–" + d(te.value.to), 1)) : B("", !0)
                  ]),
                  te.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: te.value.nextUrl
                  }, d(f(v)("library", "Next")), 9, aS)) : (b(), C("span", rS, d(f(v)("library", "Next")), 1))
                ], 8, eS)) : B("", !0)
              ])) : (b(), C("section", sS, [
                u("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": f(v)("library", "One catalogue workspace")
                }, [
                  u("details", lS, [
                    u("summary", cS, [
                      E[26] || (E[26] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⌕", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: f(v)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
                      }, d(f(v)("library", "Refine results")), 9, uS),
                      u("small", dS, d(f(v)("library", "Filters, facets and saved filter shortcuts")), 1),
                      u("b", fS, d(D.shelf ? f(v)("library", "this shelf") : on.value.length > 0 ? f(v)("library", "current results") : f(v)("library", "whole catalogue")), 1)
                    ]),
                    u("form", {
                      method: "get",
                      class: "library-quick-filter-bar",
                      "aria-label": f(v)("library", "Quick catalogue filters"),
                      onSubmit: et(dn, ["prevent"])
                    }, [
                      (b(!0), C(ue, null, De(rs.value, (m) => (b(), C("input", {
                        key: m.key,
                        type: "hidden",
                        name: m.key,
                        value: m.value
                      }, null, 8, pS))), 128)),
                      u("div", vS, [
                        u("label", {
                          class: "library-quick-filter-search",
                          title: f(v)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                        }, [
                          u("span", null, [
                            Oe(d(f(v)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                            E[27] || (E[27] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
                          ]),
                          Je(u("input", {
                            ref_key: "quickSearchInput",
                            ref: un,
                            "onUpdate:modelValue": E[1] || (E[1] = (m) => D.q = m),
                            "data-library-quick-search": "",
                            type: "search",
                            name: "q",
                            placeholder: f(v)("library", "Camera, Eco, Rolleiflex, description or folder…"),
                            onInput: fs
                          }, null, 40, gS), [
                            [Rs, D.q]
                          ])
                        ], 8, mS),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          "aria-label": f(v)("library", "Search catalogue")
                        }, d(f(v)("library", "Search")), 9, bS)
                      ]),
                      u("details", yS, [
                        u("summary", null, d(f(v)("library", "Filter & sort")), 1),
                        u("div", _S, [
                          u("label", null, [
                            Oe(d(f(v)("library", "Sort")), 1),
                            Je(u("select", {
                              "onUpdate:modelValue": E[2] || (E[2] = (m) => D.sort = m),
                              name: "sort",
                              onChange: dn
                            }, [
                              u("option", wS, d(f(v)("library", "Title")), 1),
                              u("option", CS, d(f(v)("library", "Recently added")), 1),
                              u("option", SS, d(f(v)("library", "Publication date")), 1),
                              u("option", ES, d(f(v)("library", "Series")), 1),
                              u("option", TS, d(f(v)("library", "Recently opened")), 1),
                              u("option", kS, d(f(v)("library", "Format")), 1)
                            ], 544), [
                              [tn, D.sort]
                            ])
                          ]),
                          u("label", null, [
                            Oe(d(f(v)("library", "Starred")), 1),
                            Je(u("select", {
                              "onUpdate:modelValue": E[3] || (E[3] = (m) => D.starred = m),
                              name: "starred",
                              onChange: dn
                            }, [
                              u("option", AS, d(f(v)("library", "All")), 1),
                              u("option", OS, d(f(v)("library", "Starred")), 1)
                            ], 544), [
                              [tn, D.starred]
                            ])
                          ]),
                          u("label", null, [
                            Oe(d(f(v)("library", "Size")), 1),
                            u("select", {
                              value: te.value.limit,
                              name: "limit",
                              onChange: dn
                            }, [
                              (b(), C(ue, null, De(i, (m) => u("option", {
                                key: m,
                                value: m
                              }, d(m), 9, NS)), 64))
                            ], 40, xS)
                          ]),
                          u("button", {
                            type: "submit",
                            class: "button secondary",
                            "aria-label": f(v)("library", "Apply catalogue filters")
                          }, d(f(v)("library", "Apply filters")), 9, RS),
                          u("a", {
                            href: "?",
                            class: "button secondary",
                            "aria-label": f(v)("library", "Clear catalogue filters")
                          }, d(f(v)("library", "Clear all")), 9, LS)
                        ])
                      ])
                    ], 40, hS),
                    u("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": f(v)("library", "Catalogue search and filters"),
                      onSubmit: et(dn, ["prevent"])
                    }, [
                      u("label", null, [
                        Oe(d(f(v)("library", "Type")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[4] || (E[4] = (m) => D.type = m),
                          name: "type"
                        }, [
                          u("option", PS, d(f(v)("library", "All types")), 1),
                          (b(), C(ue, null, De(n, (m) => u("option", {
                            key: m,
                            value: m
                          }, d(m), 9, DS)), 64))
                        ], 512), [
                          [tn, D.type]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Series / periodical")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[5] || (E[5] = (m) => D.publication = m),
                          name: "publication"
                        }, [
                          u("option", MS, d(f(v)("library", "All series and periodicals")), 1),
                          (b(!0), C(ue, null, De(T.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, FS))), 128))
                        ], 512), [
                          [tn, D.publication]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Publication year")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[6] || (E[6] = (m) => D.year = m),
                          name: "year"
                        }, [
                          u("option", $S, d(f(v)("library", "All years")), 1),
                          (b(!0), C(ue, null, De(M.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, zS))), 128))
                        ], 512), [
                          [tn, D.year]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Creator")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[7] || (E[7] = (m) => D.creator = m),
                          name: "creator",
                          title: f(v)("library", "Exact full-field creator matches only")
                        }, [
                          u("option", BS, d(f(v)("library", "All creators")), 1),
                          (b(!0), C(ue, null, De(j.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, HS))), 128))
                        ], 8, US), [
                          [tn, D.creator]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Nextcloud tag")), 1),
                        Je(u("input", {
                          "onUpdate:modelValue": E[8] || (E[8] = (m) => D.tag = m),
                          type: "text",
                          name: "tag",
                          placeholder: f(v)("library", "photography")
                        }, null, 8, jS), [
                          [Rs, D.tag]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Format")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[9] || (E[9] = (m) => D.format = m),
                          name: "format"
                        }, [
                          u("option", VS, d(f(v)("library", "All formats")), 1),
                          (b(!0), C(ue, null, De(x.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(He(m)), 9, KS))), 128))
                        ], 512), [
                          [tn, D.format]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Shelf")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[10] || (E[10] = (m) => D.shelf = m),
                          name: "shelf"
                        }, [
                          u("option", GS, d(f(v)("library", "All shelves")), 1),
                          (b(!0), C(ue, null, De(S.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, qS))), 128))
                        ], 512), [
                          [tn, D.shelf]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Scan status")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[11] || (E[11] = (m) => D.status = m),
                          name: "status"
                        }, [
                          u("option", WS, d(f(v)("library", "All scan statuses")), 1),
                          (b(!0), C(ue, null, De($.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, YS))), 128))
                        ], 512), [
                          [tn, D.status]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Workflow status")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[12] || (E[12] = (m) => D.workflowStatus = m),
                          name: "workflowStatus"
                        }, [
                          u("option", ZS, d(f(v)("library", "All workflow statuses")), 1),
                          (b(!0), C(ue, null, De(le.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, XS))), 128))
                        ], 512), [
                          [tn, D.workflowStatus]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Genre")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[13] || (E[13] = (m) => D.genre = m),
                          name: "genre"
                        }, [
                          u("option", JS, d(f(v)("library", "All genres")), 1),
                          (b(!0), C(ue, null, De(de.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, QS))), 128))
                        ], 512), [
                          [tn, D.genre]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Classification")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[14] || (E[14] = (m) => D.classification = m),
                          name: "classification"
                        }, [
                          u("option", eE, d(f(v)("library", "All classifications")), 1),
                          (b(!0), C(ue, null, De(Q.value, (m) => (b(), C("option", {
                            key: m,
                            value: m
                          }, d(m), 9, tE))), 128))
                        ], 512), [
                          [tn, D.classification]
                        ])
                      ]),
                      u("label", null, [
                        Oe(d(f(v)("library", "Scanner conflicts")), 1),
                        Je(u("select", {
                          "onUpdate:modelValue": E[15] || (E[15] = (m) => D.scannerConflicts = m),
                          name: "scannerConflicts"
                        }, [
                          u("option", nE, d(f(v)("library", "All metadata")), 1),
                          u("option", iE, d(f(v)("library", "Needs review")), 1)
                        ], 512), [
                          [tn, D.scannerConflicts]
                        ])
                      ]),
                      u("button", aE, d(f(v)("library", "Apply filters")), 1),
                      u("a", rE, d(f(v)("library", "Clear")), 1)
                    ], 40, IS)
                  ]),
                  u("details", sE, [
                    u("summary", oE, [
                      E[28] || (E[28] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "↗", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: f(v)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
                      }, d(f(v)("library", "Browse shortcuts")), 9, lE),
                      u("small", cE, d(f(v)("library", "Continue reading, recently added, rediscover and useful views")), 1),
                      u("b", uE, d(f(v)("library", "whole catalogue")), 1)
                    ]),
                    ln.value ? (b(), C("article", dE, [
                      u("h3", {
                        title: f(v)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
                      }, d(f(v)("library", "Continue reading")), 9, fE),
                      u("div", hE, [
                        Gn.value[0] ? (b(), C("a", {
                          key: 0,
                          class: "button primary",
                          href: Gn.value[0].openUrl
                        }, d(f(v)("library", "Read now")), 9, pE)) : B("", !0),
                        Gn.value[0] ? (b(), C("button", {
                          key: 1,
                          type: "button",
                          class: "button secondary",
                          onClick: E[16] || (E[16] = (m) => Tn(Gn.value[0], m))
                        }, d(f(v)("library", "Details")), 1)) : B("", !0)
                      ])
                    ])) : B("", !0),
                    Cn.value ? (b(), C("article", vE, [
                      u("p", mE, d(f(v)("library", "Rediscover")), 1),
                      u("strong", null, d(Cn.value.title), 1),
                      u("span", gE, d(Cn.value.creators || Cn.value.publication || Cn.value.cachedPath), 1),
                      u("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: E[17] || (E[17] = (m) => Tn(Cn.value, m))
                      }, d(f(v)("library", "Peek")), 1)
                    ])) : B("", !0),
                    u("nav", {
                      class: "library-useful-view-links",
                      "aria-label": f(v)("library", "Useful views")
                    }, [
                      (b(!0), C(ue, null, De(_.value, (m) => (b(), C("a", {
                        key: m.key,
                        class: "library-useful-view-chip",
                        href: oe(m.filters),
                        title: f(v)("library", m.description)
                      }, [
                        u("strong", null, d(f(v)("library", m.label)), 1),
                        u("small", _E, d(Number(Sa.value[m.key] || 0)), 1)
                      ], 8, yE))), 128))
                    ], 8, bE),
                    u("div", wE, [
                      R.value.length > 0 ? (b(), C("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: f(v)("library", "Jump into recurring publications with one click.")
                      }, [
                        u("span", null, d(f(v)("library", "Series / periodicals")), 1),
                        u("select", { onChange: pt }, [
                          u("option", SE, d(f(v)("library", "Choose series")), 1),
                          (b(!0), C(ue, null, De(R.value, (m) => (b(), C("option", {
                            key: m.publication,
                            value: Ot(m.publication)
                          }, d(m.publication) + " · " + d(m.itemCount), 9, EE))), 128))
                        ], 32)
                      ], 8, CE)) : B("", !0),
                      M.value.length > 0 ? (b(), C("label", TE, [
                        u("span", null, d(f(v)("library", "Publication year")), 1),
                        u("select", { onChange: pt }, [
                          u("option", kE, d(f(v)("library", "Choose year")), 1),
                          (b(!0), C(ue, null, De(M.value, (m) => (b(), C("option", {
                            key: m,
                            value: xt(m)
                          }, d(m), 9, AE))), 128))
                        ], 32)
                      ])) : B("", !0),
                      j.value.length > 0 ? (b(), C("label", OE, [
                        u("span", null, d(f(v)("library", "Creator")), 1),
                        u("select", { onChange: pt }, [
                          u("option", xE, d(f(v)("library", "Choose creator")), 1),
                          (b(!0), C(ue, null, De(j.value, (m) => (b(), C("option", {
                            key: m,
                            value: Ja(m)
                          }, d(m), 9, NE))), 128))
                        ], 32)
                      ])) : B("", !0)
                    ]),
                    u("section", RE, [
                      u("h3", {
                        title: f(v)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, d(f(v)("library", "Custom collections")), 9, LE),
                      u("form", {
                        method: "post",
                        action: zi.value,
                        class: "library-saved-collection-save-form",
                        title: Z.value ? "" : f(v)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, PE),
                        u("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: Xa.value
                        }, null, 8, DE),
                        u("label", null, [
                          Oe(d(f(v)("library", "Collection name")), 1),
                          u("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: f(v)("library", "e.g. Bremen photo books"),
                            disabled: !Z.value,
                            autocomplete: "off"
                          }, null, 8, ME)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !Z.value,
                          title: f(v)("library", "Save current view")
                        }, d(f(v)("library", "Save")), 9, FE)
                      ], 8, IE),
                      At.value.length > 0 ? (b(), C("nav", {
                        key: 0,
                        class: "library-saved-collection-links",
                        "aria-label": f(v)("library", "Saved custom collections")
                      }, [
                        (b(!0), C(ue, null, De(At.value, (m) => (b(), C("article", {
                          key: m.id,
                          class: "library-saved-collection-card"
                        }, [
                          u("a", {
                            class: "library-saved-collection-link",
                            href: pe(m.filters)
                          }, [
                            u("strong", null, d(m.name), 1),
                            u("span", null, d(f(mr)("library", "%n item", "%n items", Number(m.count || 0))), 1)
                          ], 8, zE),
                          u("form", {
                            method: "post",
                            action: Ce(m.id),
                            class: "library-saved-collection-delete-form"
                          }, [
                            u("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: ce.value
                            }, null, 8, BE),
                            u("button", HE, d(f(v)("library", "Delete")), 1)
                          ], 8, UE)
                        ]))), 128))
                      ], 8, $E)) : B("", !0)
                    ])
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": f(v)("library", "Batch actions for current results")
                  }, [
                    u("summary", VE, [
                      E[29] || (E[29] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: f(v)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
                      }, d(f(v)("library", "Batch actions")), 9, KE),
                      u("small", GE, d(f(v)("library", "Preview and apply changes to current results")), 1),
                      u("b", qE, d(te.value.total) + " " + d(f(v)("library", "Current filter result")), 1)
                    ]),
                    u("div", WE, [
                      u("form", {
                        method: "post",
                        action: nt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, ZE),
                        (b(!0), C(ue, null, De(Kn.value, (m) => (b(), C("input", {
                          key: m.key,
                          type: "hidden",
                          name: m.key,
                          value: m.value
                        }, null, 8, XE))), 128)),
                        u("label", null, [
                          u("span", null, d(f(v)("library", "Add tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: f(v)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, JE)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          title: f(v)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                        }, d(f(v)("library", "Apply")), 9, QE)
                      ], 8, YE),
                      u("form", {
                        method: "post",
                        action: st.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, tT),
                        (b(!0), C(ue, null, De(Kn.value, (m) => (b(), C("input", {
                          key: `remove-tag-${m.key}`,
                          type: "hidden",
                          name: m.key,
                          value: m.value
                        }, null, 8, nT))), 128)),
                        u("label", null, [
                          u("span", null, d(f(v)("library", "Remove tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: f(v)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, iT)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: f(v)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                        }, d(f(v)("library", "Remove")), 9, aT)
                      ], 8, eT),
                      u("form", {
                        method: "post",
                        action: dt.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, sT),
                        (b(!0), C(ue, null, De(Kn.value, (m) => (b(), C("input", {
                          key: `reset-${m.key}`,
                          type: "hidden",
                          name: m.key,
                          value: m.value
                        }, null, 8, oT))), 128)),
                        E[30] || (E[30] = u("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: f(v)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                        }, d(f(v)("library", "Reset metadata")), 9, lT)
                      ], 8, rT),
                      u("form", {
                        method: "post",
                        action: $t.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, uT),
                        (b(!0), C(ue, null, De(Kn.value, (m) => (b(), C("input", {
                          key: `edit-preview-${m.key}`,
                          type: "hidden",
                          name: m.key,
                          value: m.value
                        }, null, 8, dT))), 128)),
                        u("label", null, [
                          u("span", null, d(f(v)("library", "Field")), 1),
                          u("select", fT, [
                            u("option", hT, d(f(v)("library", "Publication type")), 1),
                            u("option", pT, d(f(v)("library", "Subtitle")), 1),
                            u("option", vT, d(f(v)("library", "Creators")), 1),
                            u("option", mT, d(f(v)("library", "Series / periodical")), 1),
                            u("option", gT, d(f(v)("library", "Publication date")), 1),
                            u("option", bT, d(f(v)("library", "Language")), 1),
                            u("option", yT, d(f(v)("library", "Publisher")), 1),
                            u("option", _T, d(f(v)("library", "Genres")), 1),
                            u("option", wT, d(f(v)("library", "Classifications")), 1)
                          ])
                        ]),
                        u("label", null, [
                          u("span", null, d(f(v)("library", "Value")), 1),
                          u("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: f(v)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, CT)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: f(v)("library", "Preview first, then apply from the review page.")
                        }, d(f(v)("library", "Preview edit")), 9, ST)
                      ], 8, cT),
                      u("form", {
                        method: "post",
                        action: it.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ce.value
                        }, null, 8, TT),
                        (b(!0), C(ue, null, De(Kn.value, (m) => (b(), C("input", {
                          key: `cover-${m.key}`,
                          type: "hidden",
                          name: m.key,
                          value: m.value
                        }, null, 8, kT))), 128)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: f(v)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                        }, d(f(v)("library", "Fresh covers")), 9, AT)
                      ], 8, ET)
                    ])
                  ], 8, jE),
                  u("details", OT, [
                    u("summary", xT, [
                      E[31] || (E[31] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "!", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: f(v)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
                      }, d(f(v)("library", "Review queue")), 9, NT),
                      u("small", RT, d(f(v)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
                      u("b", LT, d(f(v)("library", "current results")), 1)
                    ]),
                    u("nav", {
                      class: "library-weak-metadata-links",
                      "aria-label": f(v)("library", "Weak metadata catalogue views")
                    }, [
                      (b(!0), C(ue, null, De(I.value, (m) => (b(), C("a", {
                        key: m.key,
                        class: "library-weak-metadata-card",
                        href: oe(m.filters),
                        title: f(v)("library", m.description)
                      }, [
                        u("span", null, [
                          u("strong", null, d(f(v)("library", m.label)), 1)
                        ]),
                        u("b", null, d(Number(Sa.value[m.key] || 0)), 1)
                      ], 8, PT))), 128))
                    ], 8, IT),
                    u("div", {
                      class: "library-review-queue-actions",
                      "aria-label": f(v)("library", "Review queue shortcuts")
                    }, [
                      u("article", {
                        title: f(v)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
                      }, [
                        u("h4", null, d(f(v)("library", "Metadata-error queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: V.value.reviewUrl || "?status=metadata_error"
                        }, d(f(v)("library", "Open metadata-error rows")), 9, FT),
                        u("a", {
                          class: "button secondary",
                          href: g.value
                        }, d(f(v)("library", "Export metadata-error rows")), 9, $T),
                        u("form", {
                          method: "post",
                          action: nt.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ce.value
                          }, null, 8, UT),
                          E[32] || (E[32] = u("input", {
                            type: "hidden",
                            name: "status",
                            value: "metadata_error"
                          }, null, -1)),
                          E[33] || (E[33] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-metadata-error"
                          }, null, -1)),
                          u("button", BT, d(f(v)("library", "Tag metadata-error rows")), 1)
                        ], 8, zT)
                      ], 8, MT),
                      u("article", {
                        title: f(v)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
                      }, [
                        u("h4", null, d(f(v)("library", "Scanner-conflict queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: Zt.value
                        }, d(f(v)("library", "Review scanner conflicts")), 9, jT),
                        u("form", {
                          method: "post",
                          action: nt.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ce.value
                          }, null, 8, KT),
                          E[34] || (E[34] = u("input", {
                            type: "hidden",
                            name: "scannerConflicts",
                            value: "1"
                          }, null, -1)),
                          E[35] || (E[35] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-scanner-conflict"
                          }, null, -1)),
                          u("button", GT, d(f(v)("library", "Tag scanner-conflict rows")), 1)
                        ], 8, VT)
                      ], 8, HT)
                    ], 8, DT),
                    ot.value.enabled ? (b(), C("section", qT, [
                      u("div", WT, [
                        u("p", YT, d(f(v)("library", "Metadata review workbench")), 1),
                        u("h3", {
                          id: "library-metadata-review-workbench-heading",
                          title: f(v)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                        }, d(f(v)("library", "Review next conflict")), 9, ZT)
                      ]),
                      ot.value.item ? (b(), C("article", XT, [
                        u("header", null, [
                          u("strong", null, d(ot.value.item.title), 1),
                          u("span", JT, d(ot.value.item.cachedPath), 1)
                        ]),
                        u("div", QT, [
                          (b(!0), C(ue, null, De(ot.value.fields, (m) => (b(), C("article", {
                            key: m.field,
                            class: "library-metadata-review-field"
                          }, [
                            u("h4", null, d(m.field), 1),
                            u("dl", null, [
                              u("div", null, [
                                u("dt", null, d(f(v)("library", "Current value")), 1),
                                u("dd", null, d(m.currentValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, d(f(v)("library", "scanner candidate")), 1),
                                u("dd", null, d(m.scannerCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, d(f(v)("library", "path-template candidate")), 1),
                                u("dd", null, d(m.pathTemplateCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, d(f(v)("library", "sidecar value")), 1),
                                u("dd", null, d(m.sidecarValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, d(f(v)("library", "source provenance")), 1),
                                u("dd", null, d(m.sourceProvenance || "—"), 1)
                              ])
                            ]),
                            u("form", {
                              method: "post",
                              action: ot.value.item.resetFieldUrl,
                              class: "library-metadata-review-accept-form"
                            }, [
                              u("input", {
                                type: "hidden",
                                name: "requesttoken",
                                value: ce.value
                              }, null, 8, tk),
                              u("input", {
                                type: "hidden",
                                name: "field",
                                value: m.field
                              }, null, 8, nk),
                              E[36] || (E[36] = u("input", {
                                type: "hidden",
                                name: "returnTo",
                                value: "catalogue"
                              }, null, -1)),
                              u("button", ik, d(f(v)("library", "accept scanner candidate")), 1)
                            ], 8, ek)
                          ]))), 128))
                        ]),
                        u("footer", ak, [
                          u("a", {
                            class: "button secondary",
                            href: ot.value.item.detailsUrl
                          }, d(f(v)("library", "Open full details")), 9, rk),
                          u("a", {
                            class: "button secondary",
                            href: ot.value.skipUrl
                          }, d(f(v)("library", "Skip to next conflict")), 9, sk)
                        ])
                      ])) : (b(), C("p", ok, d(f(v)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
                      u("a", {
                        class: "button secondary",
                        href: ot.value.reviewNextUrl
                      }, d(f(v)("library", "Review next conflict")), 9, lk)
                    ])) : B("", !0)
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--admin",
                    "data-workspace-panel": "admin",
                    onToggle: rl
                  }, [
                    u("summary", ck, [
                      E[37] || (E[37] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⚙", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: f(v)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
                      }, d(f(v)("library", "Admin tools")), 9, uk),
                      u("small", dk, d(f(v)("library", "Roots, scans, exports and repair operations")), 1),
                      u("b", fk, d(f(v)("library", "all enabled roots")), 1)
                    ]),
                    u("div", hk, [
                      u("a", {
                        href: F.value,
                        class: "button secondary",
                        "aria-label": f(v)("library", "Open Library settings")
                      }, d(f(v)("library", "Settings")), 9, pk),
                      he.value ? (b(), C("a", {
                        key: 0,
                        href: he.value,
                        class: "button secondary",
                        "aria-label": f(v)("library", "Export corrected metadata")
                      }, d(f(v)("library", "Export corrected metadata")), 9, vk)) : B("", !0),
                      _e.value ? (b(), C("a", {
                        key: 1,
                        href: _e.value,
                        class: "button secondary",
                        "aria-label": f(v)("library", "Export sidecar manifest")
                      }, d(f(v)("library", "Sidecar manifest")), 9, mk)) : B("", !0),
                      ge.value ? (b(), C("a", {
                        key: 2,
                        href: ge.value,
                        class: "button secondary",
                        "aria-label": f(v)("library", "Export sidecar ZIP")
                      }, d(f(v)("library", "Sidecar ZIP")), 9, gk)) : B("", !0)
                    ]),
                    u("div", bk, [
                      u("p", yk, d(f(v)("library", "Import health")), 1),
                      u("h3", {
                        title: f(v)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
                      }, d(f(v)("library", "Metadata overview")), 9, _k),
                      O.loading ? (b(), C("p", wk, d(f(v)("library", "Loading cached metadata overview…")), 1)) : O.error ? (b(), C("p", Ck, d(O.error), 1)) : O.loaded ? B("", !0) : (b(), C("p", Sk, d(f(v)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
                      O.loaded ? (b(), C(ue, { key: 3 }, [
                        N.value.message ? (b(), C("p", Ek, d(N.value.message), 1)) : N.value.cacheStatus === "missing" ? (b(), C("p", Tk, d(f(v)("library", "No cached metadata overview exists yet")), 1)) : B("", !0),
                        z.value ? (b(), C("p", kk, d(f(v)("library", "Last generated")) + ": " + d(z.value), 1)) : B("", !0),
                        u("button", {
                          type: "button",
                          class: "button secondary library-import-health-refresh",
                          disabled: O.refreshing,
                          onClick: us
                        }, d(O.refreshing ? f(v)("library", "Refreshing metadata overview…") : f(v)("library", "Refresh metadata overview")), 9, Ak),
                        u("div", Ok, [
                          u("a", {
                            class: "button secondary",
                            href: V.value.reviewUrl || "?status=metadata_error"
                          }, d(f(v)("library", "Review metadata errors")), 9, xk),
                          u("a", {
                            class: "button secondary",
                            href: U.value
                          }, d(f(v)("library", "Full review")), 9, Nk),
                          u("a", {
                            class: "button secondary",
                            href: g.value
                          }, d(f(v)("library", "Export TSV")), 9, Rk),
                          u("a", {
                            class: "button secondary",
                            href: w.value
                          }, d(f(v)("library", "Probe covers")), 9, Lk)
                        ]),
                        u("div", Ik, [
                          u("article", null, [
                            u("h4", null, d(f(v)("library", "Metadata errors")), 1),
                            u("p", Pk, d(V.value.total || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, d(f(v)("library", "Archive/container check")), 1),
                            u("p", Dk, d(K.value.mismatches || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, d(f(v)("library", "Cover health")), 1),
                            u("p", Mk, d(X.value.note), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, d(f(v)("library", "Cover support matrix")), 1),
                            u("p", Fk, d(f(v)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                          ]),
                          V.value.examples?.length ? (b(), C("details", $k, [
                            u("summary", null, d(f(v)("library", "Example files and suggested actions")), 1),
                            u("ul", null, [
                              (b(!0), C(ue, null, De(V.value.examples, (m) => (b(), C("li", {
                                key: `${m.fileId}-${m.path}`
                              }, [
                                u("code", null, d(m.path), 1),
                                u("span", null, d(m.scanStatus) + " · " + d(m.scanError) + " · " + d(m.actualContainerType), 1),
                                u("strong", null, d(m.suggestedRepairAction), 1)
                              ]))), 128))
                            ])
                          ])) : B("", !0)
                        ])
                      ], 64)) : B("", !0)
                    ])
                  ], 32)
                ], 8, oS),
                u("div", zk, [
                  u("div", null, [
                    fe.value ? (b(), C("p", Uk, d(Ie.value), 1)) : B("", !0),
                    u("h2", Bk, d(Ae.value), 1)
                  ])
                ]),
                rt.value ? (b(), C("p", Hk, d(rt.value), 1)) : B("", !0),
                Ln.value ? (b(), C("p", jk, d(Ln.value), 1)) : B("", !0),
                fe.value ? (b(), C("section", Vk, [
                  u("p", Kk, d(Ie.value), 1),
                  u("h3", {
                    id: "library-discovery-heading",
                    title: ae.value ? f(v)("library", "Items by this creator, sorted by publication context when available.") : me.value ? f(v)("library", "Items from this publication year, sorted by publication date when available.") : f(v)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, d(ye.value), 9, Gk),
                  u("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": f(v)("library", "Discovery summary")
                  }, [
                    u("span", null, d(f(mr)("library", "%n item", "%n items", te.value.total)), 1),
                    L.value?.earliestYear && L.value?.latestYear ? (b(), C("span", Wk, d(L.value.earliestYear) + "–" + d(L.value.latestYear), 1)) : B("", !0),
                    L.value?.datedCount ? (b(), C("span", Yk, d(L.value.datedCount) + " " + d(f(v)("library", "dated")), 1)) : B("", !0),
                    L.value?.undatedCount > 0 ? (b(), C("span", Zk, d(L.value.undatedCount) + " " + d(f(v)("library", "undated")), 1)) : B("", !0)
                  ], 8, qk),
                  H.value && L.value ? (b(), C("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": f(v)("library", "Publication issue/date context")
                  }, [
                    u("strong", null, d(f(v)("library", "Publication contents")), 1),
                    u("span", null, d(f(mr)("library", "%n item", "%n items", L.value.itemCount)), 1),
                    L.value.earliestYear && L.value.latestYear ? (b(), C("span", Jk, d(L.value.earliestYear) + "–" + d(L.value.latestYear), 1)) : B("", !0),
                    u("span", null, d(L.value.datedCount) + " " + d(f(v)("library", "with issue/date coverage")), 1),
                    L.value.undatedCount > 0 ? (b(), C("span", Qk, d(L.value.undatedCount) + " " + d(f(v)("library", "without dates yet")), 1)) : B("", !0),
                    u("span", null, d(f(v)("library", "read-only grouping")), 1)
                  ], 8, Xk)) : B("", !0),
                  H.value && L.value?.issueGroups?.length ? (b(), C("section", eA, [
                    u("div", null, [
                      u("p", tA, d(f(v)("library", "Issue order")), 1),
                      u("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: f(v)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, d(f(v)("library", "Read-only issue/date grouping")), 9, nA)
                    ]),
                    u("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": f(v)("library", "Visual issue strip")
                    }, [
                      (b(!0), C(ue, null, De(L.value.issueGroups, (m) => (b(), C("a", {
                        key: `strip-${m.label}`,
                        class: "library-issue-strip-card",
                        href: m.items?.[0]?.detailsUrl || "#"
                      }, [
                        u("span", null, d(m.label), 1),
                        u("strong", null, d(m.items?.[0]?.issueLabel || f(v)("library", "Issue")), 1),
                        u("small", null, d(f(mr)("library", "%n item", "%n items", m.items?.length || 0)), 1)
                      ], 8, aA))), 128))
                    ], 8, iA),
                    L.value.gapRanges?.length ? (b(), C("p", rA, d(f(v)("library", "Gap")) + ": " + d(L.value.gapRanges.join(", ")), 1)) : B("", !0),
                    (b(!0), C(ue, null, De(L.value.issueGroups, (m) => (b(), C("div", {
                      key: m.label,
                      class: "library-publication-issue-group"
                    }, [
                      u("h5", null, d(m.label), 1),
                      u("ol", null, [
                        (b(!0), C(ue, null, De(m.items, (ie, Pe) => (b(), C("li", {
                          key: ie.itemId
                        }, [
                          u("span", sA, d(ie.issueLabel), 1),
                          u("a", {
                            href: ie.detailsUrl || "#"
                          }, d(ie.title), 9, oA),
                          u("small", null, [
                            Oe(d(ie.publicationType), 1),
                            ie.publicationDate ? (b(), C(ue, { key: 0 }, [
                              Oe(" · " + d(ie.publicationDate), 1)
                            ], 64)) : B("", !0)
                          ]),
                          u("small", lA, [
                            Pe > 0 ? (b(), C(ue, { key: 0 }, [
                              Oe(d(f(v)("library", "Previous issue")), 1)
                            ], 64)) : B("", !0),
                            Pe > 0 && Pe < m.items.length - 1 ? (b(), C(ue, { key: 1 }, [
                              Oe(" · ")
                            ], 64)) : B("", !0),
                            Pe < m.items.length - 1 ? (b(), C(ue, { key: 2 }, [
                              Oe(d(f(v)("library", "Next issue")), 1)
                            ], 64)) : B("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    L.value.unknownIssueItems?.length ? (b(), C("details", cA, [
                      u("summary", {
                        title: f(v)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, d(f(v)("library", "Unknown issue/date")) + " · " + d(L.value.unknownIssueItems.length), 9, uA)
                    ])) : B("", !0)
                  ])) : B("", !0),
                  u("p", null, [
                    u("a", {
                      href: W.value,
                      class: "button secondary library-discovery-back-link"
                    }, d(f(v)("library", "Back to full catalogue")), 9, dA)
                  ])
                ])) : B("", !0),
                u("nav", {
                  class: "library-view-mode-toggle",
                  "aria-label": f(v)("library", "Cover view mode")
                }, [
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "compact",
                    class: Te({ active: Xt.value === "compact" }),
                    "aria-pressed": Xt.value === "compact" ? "true" : "false",
                    onClick: E[18] || (E[18] = (m) => G("compact"))
                  }, d(f(v)("library", "Compact")), 11, hA),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "gallery",
                    class: Te({ active: Xt.value === "gallery" }),
                    "aria-pressed": Xt.value === "gallery" ? "true" : "false",
                    onClick: E[19] || (E[19] = (m) => G("gallery"))
                  }, d(f(v)("library", "Gallery")), 11, pA),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "shelf",
                    class: Te({ active: Xt.value === "shelf" }),
                    "aria-pressed": Xt.value === "shelf" ? "true" : "false",
                    onClick: E[20] || (E[20] = (m) => G("shelf"))
                  }, d(f(v)("library", "Shelf")), 11, vA)
                ], 8, fA),
                u("div", mA, [
                  u("p", gA, [
                    Oe(d(f(v)("library", "Showing")) + " " + d(te.value.from) + "–" + d(te.value.to) + " " + d(f(v)("library", "of")) + " " + d(te.value.total) + " " + d(f(v)("library", "catalogue items")), 1),
                    on.value.length > 0 ? (b(), C("span", bA, [
                      E[38] || (E[38] = Oe(" · ", -1)),
                      u("a", yA, d(f(v)("library", "Clear all filters")), 1)
                    ])) : B("", !0)
                  ]),
                  u("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": f(v)("library", "Catalogue pagination")
                  }, [
                    u("span", wA, [
                      Oe(d(f(v)("library", "Page")) + " " + d(te.value.page), 1),
                      te.value.total > 0 ? (b(), C("span", CA, " · " + d(te.value.from) + "–" + d(te.value.to), 1)) : B("", !0)
                    ]),
                    te.value.previousUrl ? (b(), C("a", {
                      key: 0,
                      href: te.value.previousUrl
                    }, d(f(v)("library", "Previous")), 9, SA)) : (b(), C("span", EA, d(f(v)("library", "Previous")), 1)),
                    te.value.nextUrl ? (b(), C("a", {
                      key: 2,
                      href: te.value.nextUrl
                    }, d(f(v)("library", "Next")), 9, TA)) : (b(), C("span", kA, d(f(v)("library", "Next")), 1))
                  ], 8, _A)
                ]),
                on.value.length > 0 ? (b(), C("nav", {
                  key: 3,
                  class: "library-active-filter-chips",
                  "aria-label": f(v)("library", "Active filters")
                }, [
                  u("span", null, d(f(v)("library", "Active filters")), 1),
                  (b(!0), C(ue, null, De(on.value, (m) => (b(), C("a", {
                    key: m.key,
                    href: hs(m.key),
                    class: "library-filter-chip",
                    "aria-label": `${f(v)("library", "Remove filter")}: ${m.label}`
                  }, [
                    u("strong", null, d(m.label) + ":", 1),
                    Oe(" " + d(m.value) + " ", 1),
                    E[39] || (E[39] = u("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, OA))), 128))
                ], 8, AA)) : B("", !0),
                y.value.length === 0 ? (b(), C("div", {
                  key: 4,
                  class: Te(["library-empty-content", { "library-first-run-guidance": Ze.value || ft.value, "library-filter-empty-state": _t.value && !Ze.value && !ft.value }]),
                  role: "status"
                }, [
                  Ze.value ? (b(), C(ue, { key: 0 }, [
                    u("h3", {
                      title: f(v)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, d(f(v)("library", "Start with one Library root")), 9, xA),
                    u("p", NA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, d(f(v)("library", "Add a Library root")), 9, RA),
                      u("span", LA, d(f(v)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : ft.value ? (b(), C(ue, { key: 1 }, [
                    u("h3", {
                      title: f(v)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, d(f(v)("library", "No enabled Library roots")), 9, IA),
                    u("p", PA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, d(f(v)("library", "Open Library settings")), 9, DA)
                    ])
                  ], 64)) : _t.value ? (b(), C(ue, { key: 2 }, [
                    u("h3", {
                      title: f(v)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, d(f(v)("library", "No matches for the current filters")), 9, MA),
                    u("p", FA, [
                      u("a", {
                        href: sl(),
                        class: "button secondary"
                      }, d(f(v)("library", "Clear search")), 9, $A),
                      u("a", zA, d(f(v)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), C(ue, { key: 3 }, [
                    u("h3", {
                      title: f(v)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, d(f(v)("library", "No catalogue items yet")), 9, UA),
                    u("p", BA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, d(f(v)("library", "Run a scan from settings")), 9, HA)
                    ])
                  ], 64))
                ], 2)) : (b(), C("div", {
                  key: 5,
                  class: Te(["library-cover-gallery", gi.value])
                }, [
                  (b(!0), C(ue, null, De(y.value, (m) => (b(), C("article", {
                    key: m.id,
                    class: Te(["library-cover-card", { "library-cover-card--open": Va[m.id], "library-cover-card--cover-loaded": Qa(m) === "loaded", "library-cover-card--cover-error": Qa(m) === "error" }])
                  }, [
                    u("a", {
                      class: "library-cover-link",
                      href: m.openUrl,
                      "aria-label": f(v)("library", "Read {title}", { title: m.title })
                    }, [
                      u("span", VA, [
                        Qa(m) === "loading" ? (b(), C("span", KA)) : B("", !0),
                        u("img", {
                          class: Te(["library-cover-image", { "library-cover-image--loaded": Qa(m) === "loaded" }]),
                          src: m.coverUrl,
                          alt: f(v)("library", "Cover for {title}", { title: m.title }),
                          loading: "lazy",
                          onLoad: (ie) => Op(m),
                          onError: (ie) => xp(m)
                        }, null, 42, GA),
                        Qa(m) === "error" ? (b(), C("span", qA, d(f(v)("library", "Cover unavailable")), 1)) : B("", !0)
                      ])
                    ], 8, jA),
                    u("form", {
                      method: "post",
                      action: m.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: et((ie) => su(m, ie), ["prevent"])
                    }, [
                      u("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ce.value
                      }, null, 8, YA),
                      E[40] || (E[40] = u("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      u("input", {
                        type: "hidden",
                        name: "starred",
                        value: m.starred ? "0" : "1"
                      }, null, 8, ZA),
                      u("button", {
                        type: "submit",
                        class: Te(["library-cover-star-button", { "library-cover-star-button--starred": m.starred }]),
                        "aria-pressed": m.starred ? "true" : "false",
                        title: m.starred ? f(v)("library", "Unstar this publication") : f(v)("library", "Star this publication"),
                        "aria-label": m.starred ? f(v)("library", "Unstar this publication") : f(v)("library", "Star this publication"),
                        "aria-busy": er[m.id] ? "true" : void 0,
                        disabled: er[m.id],
                        onClick: et((ie) => su(m, ie), ["prevent"])
                      }, d(m.starred ? "★" : "☆"), 11, XA),
                      tr[m.id] ? (b(), C("span", {
                        key: 0,
                        "data-library-star-error": m.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, d(tr[m.id]), 9, JA)) : B("", !0)
                    ], 40, WA),
                    u("div", QA, [
                      u("div", e2, [
                        u("h3", null, [
                          m.starred ? (b(), C("span", {
                            key: 0,
                            class: "library-star-marker",
                            "aria-label": f(v)("library", "Starred")
                          }, "★", 8, t2)) : B("", !0),
                          Oe(d(m.title), 1)
                        ]),
                        u("a", {
                          class: "library-cover-read",
                          href: m.openUrl
                        }, d(f(v)("library", "Read")), 9, n2)
                      ]),
                      u("details", {
                        class: "library-cover-details",
                        onToggle: (ie) => Np(m.id, ie)
                      }, [
                        u("summary", {
                          class: "library-cover-details-summary",
                          "aria-label": `${f(v)("library", "Show details and actions")}: ${m.title}`
                        }, d(f(v)("library", "Details")), 9, a2),
                        u("div", r2, [
                          m.creators ? (b(), C("p", s2, d(m.creators), 1)) : B("", !0),
                          u("dl", o2, [
                            u("div", l2, [
                              u("dt", null, d(f(v)("library", "Type")), 1),
                              u("dd", null, d(m.publicationType), 1)
                            ]),
                            m.publication ? (b(), C("div", c2, [
                              u("dt", null, d(f(v)("library", "Series")), 1),
                              u("dd", null, d(m.publication), 1)
                            ])) : B("", !0),
                            m.publicationDate ? (b(), C("div", u2, [
                              u("dt", null, d(f(v)("library", "Date")), 1),
                              u("dd", null, d(m.publicationDate), 1)
                            ])) : B("", !0),
                            m.workflowStatus ? (b(), C("div", d2, [
                              u("dt", null, d(f(v)("library", "Status")), 1),
                              u("dd", null, d(m.workflowStatus), 1)
                            ])) : B("", !0),
                            m.hasScannerConflict ? (b(), C("div", f2, [
                              u("dt", null, d(f(v)("library", "Review")), 1),
                              u("dd", null, d(f(v)("library", "{count} fields", { count: m.scannerConflictCount })), 1)
                            ])) : B("", !0),
                            m.lastOpenedAt ? (b(), C("div", h2, [
                              u("dt", null, d(f(v)("library", "Last opened")), 1),
                              u("dd", null, d(m.lastOpenedAt), 1)
                            ])) : B("", !0),
                            m.extension ? (b(), C("div", p2, [
                              u("dt", null, d(f(v)("library", "Format")) + ":", 1),
                              u("dd", null, d(He(m.extension)), 1)
                            ])) : B("", !0),
                            m.shelf ? (b(), C("div", v2, [
                              u("dt", null, d(f(v)("library", "Shelf")), 1),
                              u("dd", null, d(m.shelf), 1)
                            ])) : B("", !0)
                          ]),
                          m.description ? (b(), C("p", m2, d(m.description), 1)) : B("", !0),
                          m.scanStatus !== "indexed" || m.scanError ? (b(), C("p", g2, [
                            Oe(d(f(v)("library", "Scan status")) + ": " + d(m.scanStatus || f(v)("library", "unknown")), 1),
                            m.scanError ? (b(), C("span", b2, " · " + d(f(v)("library", "Scan error")) + ": " + d(m.scanError), 1)) : B("", !0)
                          ])) : B("", !0),
                          u("div", {
                            class: "library-nextcloud-tags library-cover-tags",
                            "aria-label": f(v)("library", "Nextcloud tags")
                          }, [
                            Xe(m).length === 0 ? (b(), C("span", _2, d(f(v)("library", "No Nextcloud tags")), 1)) : (b(!0), C(ue, { key: 1 }, De(Xe(m), (ie) => (b(), C("span", {
                              key: ie.id,
                              class: "library-tag"
                            }, d(ie.name), 1))), 128))
                          ], 8, y2),
                          u("p", w2, [
                            u("a", {
                              href: m.filesUrl
                            }, d(f(v)("library", "Show in Files")), 9, C2),
                            E[41] || (E[41] = Oe(" · ", -1)),
                            u("a", {
                              href: m.downloadUrl
                            }, d(f(v)("library", "Download source")), 9, S2),
                            E[42] || (E[42] = Oe(" · ", -1)),
                            u("button", {
                              type: "button",
                              class: "library-link-button library-cover-details-drawer-button",
                              onClick: (ie) => Tn(m, ie)
                            }, d(f(v)("library", "Quick details")), 9, E2),
                            E[43] || (E[43] = Oe(" · ", -1)),
                            u("a", {
                              href: m.detailsUrl
                            }, d(f(v)("library", "Open full details")), 9, T2)
                          ])
                        ])
                      ], 40, i2)
                    ])
                  ], 2))), 128))
                ], 2)),
                y.value.length > 0 ? (b(), C("nav", {
                  key: 6,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": f(v)("library", "Catalogue pagination")
                }, [
                  u("span", A2, [
                    Oe(d(f(v)("library", "Page")) + " " + d(te.value.page), 1),
                    te.value.total > 0 ? (b(), C("span", O2, " · " + d(te.value.from) + "–" + d(te.value.to), 1)) : B("", !0)
                  ]),
                  te.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: te.value.previousUrl
                  }, d(f(v)("library", "Previous")), 9, x2)) : (b(), C("span", N2, d(f(v)("library", "Previous")), 1)),
                  te.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: te.value.nextUrl
                  }, d(f(v)("library", "Next")), 9, R2)) : (b(), C("span", L2, d(f(v)("library", "Next")), 1))
                ], 8, k2)) : B("", !0)
              ]))
            ], 8, _C)
          ]),
          _: 1
        }),
        we(f(dC), {
          ref_key: "sidebarComponent",
          ref: In,
          class: "library-native-item-sidebar",
          open: We.value,
          "no-toggle": "",
          loading: ht.loading,
          name: Se.value?.title || f(v)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: Sn.value ? "dialog" : void 0,
          "aria-modal": Sn.value ? "true" : void 0,
          "aria-labelledby": Sn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Sn.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: ji,
          onClosed: cs,
          onClose: Ca
        }, {
          default: xe(() => [
            u("div", I2, [
              u("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: os,
                class: "hidden-visually",
                tabindex: "-1"
              }, d(Se.value?.title || f(v)("library", "Publication details")), 513),
              ht.loading && !Se.value ? (b(), C("p", P2, d(f(v)("library", "Loading publication details…")), 1)) : ht.error ? (b(), C("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ht.missing ? "status" : "alert"
              }, [
                u("p", null, d(ht.error), 1),
                ht.missing ? B("", !0) : (b(), C("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: E[21] || (E[21] = (m) => Pn(bi.value, { historyMode: "none" }))
                }, d(f(v)("library", "Try again")), 1))
              ], 8, D2)) : Se.value ? (b(), C(ue, { key: 2 }, [
                u("p", M2, d(f(v)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                u("img", {
                  class: "library-detail-drawer-cover",
                  src: Se.value.coverUrl,
                  alt: `${f(v)("library", "Cover for")} ${Se.value.title}`,
                  loading: "lazy"
                }, null, 8, F2),
                u("p", $2, [
                  Oe(d(Se.value.publicationType || f(v)("library", "Publication")), 1),
                  Se.value.extension ? (b(), C("span", z2, " · " + d(He(Se.value.extension)), 1)) : B("", !0)
                ]),
                Se.value.description ? (b(), C("p", U2, d(Se.value.description), 1)) : B("", !0),
                u("dl", B2, [
                  Se.value.publication ? (b(), C("div", H2, [
                    u("dt", null, d(f(v)("library", "Series")), 1),
                    u("dd", null, d(Se.value.publication), 1)
                  ])) : B("", !0),
                  Se.value.publicationDate ? (b(), C("div", j2, [
                    u("dt", null, d(f(v)("library", "Date")), 1),
                    u("dd", null, d(Se.value.publicationDate), 1)
                  ])) : B("", !0),
                  Se.value.publisher ? (b(), C("div", V2, [
                    u("dt", null, d(f(v)("library", "Publisher")), 1),
                    u("dd", null, d(Se.value.publisher), 1)
                  ])) : B("", !0),
                  Se.value.language ? (b(), C("div", K2, [
                    u("dt", null, d(f(v)("library", "Language")), 1),
                    u("dd", null, d(Se.value.language), 1)
                  ])) : B("", !0),
                  Se.value.shelf ? (b(), C("div", G2, [
                    u("dt", null, d(f(v)("library", "Shelf")), 1),
                    u("dd", null, d(Se.value.shelf), 1)
                  ])) : B("", !0),
                  Se.value.cachedPath ? (b(), C("div", q2, [
                    u("dt", null, d(f(v)("library", "File")), 1),
                    u("dd", null, d(Se.value.cachedPath), 1)
                  ])) : B("", !0)
                ]),
                Se.value.metadataSource || Object.keys(Se.value.fieldSources || {}).length ? (b(), C("section", W2, [
                  u("h3", Y2, d(f(v)("library", "Metadata provenance")), 1),
                  Se.value.metadataSource ? (b(), C("p", Z2, d(f(v)("library", "Primary source")) + ": " + d(Se.value.metadataSource), 1)) : B("", !0),
                  u("dl", null, [
                    (b(!0), C(ue, null, De(Se.value.fieldSources, (m, ie) => (b(), C("div", { key: ie }, [
                      u("dt", null, d(ie), 1),
                      u("dd", null, d(m), 1)
                    ]))), 128))
                  ])
                ])) : B("", !0),
                wa(Se.value).length ? (b(), C("section", X2, [
                  u("h3", J2, d(f(v)("library", "Review context")), 1),
                  u("dl", null, [
                    (b(!0), C(ue, null, De(wa(Se.value), (m) => (b(), C("div", {
                      key: m.field
                    }, [
                      u("dt", null, d(m.field) + " · " + d(m.sourceProvenance), 1),
                      u("dd", null, d(m.currentValue || "—") + " → " + d(m.scannerCandidate || "—"), 1)
                    ]))), 128))
                  ])
                ])) : B("", !0),
                u("p", Q2, [
                  u("a", {
                    class: "button primary",
                    href: Se.value.openUrl
                  }, d(f(v)("library", "Read")), 9, eO),
                  u("a", {
                    class: "button secondary",
                    href: Se.value.detailsUrl
                  }, d(f(v)("library", "Open full details")), 9, tO)
                ]),
                u("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": f(v)("library", "Browse neighbouring items")
                }, [
                  u("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !_a.value,
                    onClick: E[22] || (E[22] = (m) => Vi(_a.value))
                  }, d(f(v)("library", "Previous item")), 9, iO),
                  u("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Hi.value,
                    onClick: E[23] || (E[23] = (m) => Vi(Hi.value))
                  }, d(f(v)("library", "Next item")), 9, aO)
                ], 8, nO)
              ], 64)) : B("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function lO() {
  window.LibraryStartupWatchdog?.fail();
}
function cO(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Bc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !cO(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  mg(oO, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  lO(), console.error("[library] Vue startup failed", e);
}
