// @__NO_SIDE_EFFECTS__
function zc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ge = {}, Ua = [], mn = () => {
}, Cf = () => !1, Vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Go = (e) => e.startsWith("onUpdate:"), vt = Object.assign, Uc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _v = Object.prototype.hasOwnProperty, Ye = (e, t) => _v.call(e, t), we = Array.isArray, Mi = (e) => is(e) === "[object Map]", ma = (e) => is(e) === "[object Set]", xu = (e) => is(e) === "[object Date]", Ne = (e) => typeof e == "function", tt = (e) => typeof e == "string", On = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Tf = (e) => (Xe(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), Ef = Object.prototype.toString, is = (e) => Ef.call(e), wv = (e) => is(e).slice(8, -1), Af = (e) => is(e) === "[object Object]", Bc = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Cr = /* @__PURE__ */ zc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ko = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Sv = /-\w/g, Ut = Ko(
  (e) => e.replace(Sv, (t) => t.slice(1).toUpperCase())
), Cv = /\B([A-Z])/g, Si = Ko(
  (e) => e.replace(Cv, "-$1").toLowerCase()
), Wo = Ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sl = Ko(
  (e) => e ? `on${Wo(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Ms = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, kf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Tv = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lu;
const Yo = () => Lu || (Lu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? Ov(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || Xe(e))
    return e;
}
const Ev = /;(?![^(]*\))/g, Av = /:([^]+)/, kv = /\/\*[^]*?\*\//g;
function Ov(e) {
  const t = {};
  return e.replace(kv, "").split(Ev).forEach((n) => {
    if (n) {
      const i = n.split(Av);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (we(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ce(e[n]);
      i && (t += i + " ");
    }
  else if (Xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Hs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Ce(t)), n && (e.style = on(n)), e;
}
const Nv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xv = /* @__PURE__ */ zc(Nv);
function Of(e) {
  return !!e || e === "";
}
function Lv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Bi(e[i], t[i]);
  return n;
}
function Ru(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Bi(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Bi(e, t) {
  if (e === t) return !0;
  let n = xu(e), i = xu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = we(e), i = we(t), n || i)
    return n && i ? Lv(e, t) : !1;
  if (n = Xe(e), i = Xe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Mi(e), i = Mi(t), n || i || (n = ma(e), i = ma(t), n || i))
      return n && i ? Ru(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Bi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Rv(e, t) {
  return e.findIndex((n) => Bi(n, t));
}
const Nf = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : we(e) || Xe(e) && (e.toString === Ef || !Ne(e.toString)) ? Nf(e) ? p(e.value) : JSON.stringify(e, xf, 2) : String(e), xf = (e, t) => Nf(t) ? xf(e, t.value) : Mi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Cl(i, r) + " =>"] = a, n),
    {}
  )
} : ma(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Cl(n))
} : On(t) ? Cl(t) : Xe(t) && !we(t) && !Af(t) ? String(t) : t, Cl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Iv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Tt;
class Pv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Tt && (Tt.active ? (this.parent = Tt, this.index = (Tt.scopes || (Tt.scopes = [])).push(
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
      const n = Tt;
      try {
        return Tt = this, t();
      } finally {
        Tt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Tt, Tt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Tt === this)
        Tt = this.prevScope;
      else {
        let t = Tt;
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
function Dv() {
  return Tt;
}
let et;
const Tl = /* @__PURE__ */ new WeakSet();
class Lf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Tt && (Tt.active ? Tt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Tl.has(this) && (Tl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || If(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Iu(this), Pf(this);
    const t = et, n = An;
    et = this, An = !0;
    try {
      return this.fn();
    } finally {
      Df(this), et = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vc(t);
      this.deps = this.depsTail = void 0, Iu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Tl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    sc(this) && this.run();
  }
  get dirty() {
    return sc(this);
  }
}
let Rf = 0, Tr, Er;
function If(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Er, Er = e;
    return;
  }
  e.next = Tr, Tr = e;
}
function Hc() {
  Rf++;
}
function jc() {
  if (--Rf > 0)
    return;
  if (Er) {
    let t = Er;
    for (Er = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Tr; ) {
    let t = Tr;
    for (Tr = void 0; t; ) {
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
function Pf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Df(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Vc(i), $v(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function sc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($f(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $f(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zr) || (e.globalVersion = zr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !sc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = et, i = An;
  et = e, An = !0;
  try {
    Pf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Et(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, An = i, Df(e), e.flags &= -3;
  }
}
function Vc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Vc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $v(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const Mf = [];
function bi() {
  Mf.push(An), An = !1;
}
function yi() {
  const e = Mf.pop();
  An = e === void 0 ? !0 : e;
}
function Iu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = et;
    et = void 0;
    try {
      t();
    } finally {
      et = n;
    }
  }
}
let zr = 0;
class Mv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!et || !An || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new Mv(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, Ff(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, zr++, this.notify(t);
  }
  notify(t) {
    Hc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      jc();
    }
  }
}
function Ff(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Ff(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const oc = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ Symbol(
  ""
), lc = /* @__PURE__ */ Symbol(
  ""
), Ur = /* @__PURE__ */ Symbol(
  ""
);
function Mt(e, t, n) {
  if (An && et) {
    let i = oc.get(e);
    i || oc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Xo()), a.map = i, a.key = n), a.track();
  }
}
function di(e, t, n, i, a, r) {
  const s = oc.get(e);
  if (!s) {
    zr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Hc(), t === "clear")
    s.forEach(o);
  else {
    const l = we(e), d = l && Bc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Ur || !On(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Ur)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(pa)), Mi(e) && o(s.get(lc)));
          break;
        case "delete":
          l || (o(s.get(pa)), Mi(e) && o(s.get(lc)));
          break;
        case "set":
          Mi(e) && o(s.get(pa));
          break;
      }
  }
  jc();
}
function Ra(e) {
  const t = /* @__PURE__ */ Ke(e);
  return t === e ? t : (Mt(t, "iterate", Ur), /* @__PURE__ */ bn(e) ? t : t.map(Nn));
}
function Zo(e) {
  return Mt(e = /* @__PURE__ */ Ke(e), "iterate", Ur), e;
}
function Wn(e, t) {
  return /* @__PURE__ */ _i(e) ? qa(/* @__PURE__ */ va(e) ? Nn(t) : t) : Nn(t);
}
const Fv = {
  __proto__: null,
  [Symbol.iterator]() {
    return El(this, Symbol.iterator, (e) => Wn(this, e));
  },
  concat(...e) {
    return Ra(this).concat(
      ...e.map((t) => we(t) ? Ra(t) : t)
    );
  },
  entries() {
    return El(this, "entries", (e) => (e[1] = Wn(this, e[1]), e));
  },
  every(e, t) {
    return ai(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ai(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Wn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ai(
      this,
      "find",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ai(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ai(
      this,
      "findLast",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ai(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ai(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Al(this, "includes", e);
  },
  indexOf(...e) {
    return Al(this, "indexOf", e);
  },
  join(e) {
    return Ra(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Al(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ai(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return or(this, "pop");
  },
  push(...e) {
    return or(this, "push", e);
  },
  reduce(e, ...t) {
    return Pu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Pu(this, "reduceRight", e, t);
  },
  shift() {
    return or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ai(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return or(this, "splice", e);
  },
  toReversed() {
    return Ra(this).toReversed();
  },
  toSorted(e) {
    return Ra(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ra(this).toSpliced(...e);
  },
  unshift(...e) {
    return or(this, "unshift", e);
  },
  values() {
    return El(this, "values", (e) => Wn(this, e));
  }
};
function El(e, t, n) {
  const i = Zo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ bn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const zv = Array.prototype;
function ai(e, t, n, i, a, r) {
  const s = Zo(e), o = s !== e && !/* @__PURE__ */ bn(e), l = s[t];
  if (l !== zv[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, S) {
    return n.call(this, Wn(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Pu(e, t, n, i) {
  const a = Zo(e), r = a !== e && !/* @__PURE__ */ bn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Wn(e, d)), n.call(this, d, Wn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Wn(e, l) : l;
}
function Al(e, t, n) {
  const i = /* @__PURE__ */ Ke(e);
  Mt(i, "iterate", Ur);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Wc(n[0]) ? (n[0] = /* @__PURE__ */ Ke(n[0]), i[t](...n)) : a;
}
function or(e, t, n = []) {
  bi(), Hc();
  const i = (/* @__PURE__ */ Ke(e))[t].apply(e, n);
  return jc(), yi(), i;
}
const Uv = /* @__PURE__ */ zc("__proto__,__v_isRef,__isVue"), zf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function Bv(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ Ke(this);
  return Mt(t, "has", e), t.hasOwnProperty(e);
}
class Uf {
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
      return i === (a ? r ? Zv : Vf : r ? jf : Hf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = we(t);
    if (!a) {
      let l;
      if (s && (l = Fv[n]))
        return l;
      if (n === "hasOwnProperty")
        return Bv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Bt(t) ? t : i
    );
    if ((On(n) ? zf.has(n) : Uv(n)) || (a || Mt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Bt(o)) {
      const l = s && Bc(n) ? o : o.value;
      return a && Xe(l) ? /* @__PURE__ */ Br(l) : l;
    }
    return Xe(o) ? a ? /* @__PURE__ */ Br(o) : /* @__PURE__ */ $t(o) : o;
  }
}
class Bf extends Uf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = we(t) && Bc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ _i(r);
      if (!/* @__PURE__ */ bn(i) && !/* @__PURE__ */ _i(i) && (r = /* @__PURE__ */ Ke(r), i = /* @__PURE__ */ Ke(i)), !s && /* @__PURE__ */ Bt(r) && !/* @__PURE__ */ Bt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ye(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Bt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ke(a) && l && (o ? Et(i, r) && di(t, "set", n, i) : di(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ye(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && di(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !zf.has(n)) && Mt(t, "has", n), i;
  }
  ownKeys(t) {
    return Mt(
      t,
      "iterate",
      we(t) ? "length" : pa
    ), Reflect.ownKeys(t);
  }
}
class Hv extends Uf {
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
const jv = /* @__PURE__ */ new Bf(), Vv = /* @__PURE__ */ new Hv(), Gv = /* @__PURE__ */ new Bf(!0);
const cc = (e) => e, Cs = (e) => Reflect.getPrototypeOf(e);
function Kv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ke(a), s = Mi(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? cc : t ? qa : Nn;
    return !t && Mt(
      r,
      "iterate",
      l ? lc : pa
    ), vt(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = d.next();
          return S ? { value: h, done: S } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: S
          };
        }
      }
    );
  };
}
function Ts(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      e || (Et(a, o) && Mt(s, "get", a), Mt(s, "get", o));
      const { has: l } = Cs(s), d = t ? cc : e ? qa : Nn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Mt(/* @__PURE__ */ Ke(a), "iterate", pa), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      return e || (Et(a, o) && Mt(s, "has", a), Mt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ke(o), d = t ? cc : e ? qa : Nn;
      return !e && Mt(l, "iterate", pa), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return vt(
    n,
    e ? {
      add: Ts("add"),
      set: Ts("set"),
      delete: Ts("delete"),
      clear: Ts("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ke(this), s = Cs(r), o = /* @__PURE__ */ Ke(a), l = !t && !/* @__PURE__ */ bn(a) && !/* @__PURE__ */ _i(a) ? o : a;
        return s.has.call(r, l) || Et(a, l) && s.has.call(r, a) || Et(o, l) && s.has.call(r, o) || (r.add(l), di(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ bn(r) && !/* @__PURE__ */ _i(r) && (r = /* @__PURE__ */ Ke(r));
        const s = /* @__PURE__ */ Ke(this), { has: o, get: l } = Cs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ke(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Et(r, u) && di(s, "set", a, r) : di(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ke(this), { has: s, get: o } = Cs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ke(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && di(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ke(this), r = a.size !== 0, s = a.clear();
        return r && di(
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
    n[a] = Kv(a, e, t);
  }), n;
}
function Gc(e, t) {
  const n = Wv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ye(n, a) && a in i ? n : i,
    a,
    r
  );
}
const qv = {
  get: /* @__PURE__ */ Gc(!1, !1)
}, Yv = {
  get: /* @__PURE__ */ Gc(!1, !0)
}, Xv = {
  get: /* @__PURE__ */ Gc(!0, !1)
};
const Hf = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Zv = /* @__PURE__ */ new WeakMap();
function Jv(e) {
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
  return /* @__PURE__ */ _i(e) ? e : Kc(
    e,
    !1,
    jv,
    qv,
    Hf
  );
}
// @__NO_SIDE_EFFECTS__
function Qv(e) {
  return Kc(
    e,
    !1,
    Gv,
    Yv,
    jf
  );
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return Kc(
    e,
    !0,
    Vv,
    Xv,
    Vf
  );
}
function Kc(e, t, n, i, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Jv(wv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return /* @__PURE__ */ _i(e) ? /* @__PURE__ */ va(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ke(t) : e;
}
function eg(e) {
  return !Ye(e, "__v_skip") && Object.isExtensible(e) && kf(e, "__v_skip", !0), e;
}
const Nn = (e) => Xe(e) ? /* @__PURE__ */ $t(e) : e, qa = (e) => Xe(e) ? /* @__PURE__ */ Br(e) : e;
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return Kf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Gf(e) {
  return Kf(e, !0);
}
function Kf(e, t) {
  return /* @__PURE__ */ Bt(e) ? e : new tg(e, t);
}
class tg {
  constructor(t, n) {
    this.dep = new Xo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ke(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ bn(t) || /* @__PURE__ */ _i(t);
    t = i ? t : /* @__PURE__ */ Ke(t), Et(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Bt(e) ? e.value : e;
}
function vi(e) {
  return Ne(e) ? e() : g(e);
}
const ng = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Bt(a) && !/* @__PURE__ */ Bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Wf(e) {
  return /* @__PURE__ */ va(e) ? e : new Proxy(e, ng);
}
class ig {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Xo(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ag(e) {
  return new ig(e);
}
class rg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return If(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $f(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sg(e, t, n = !1) {
  let i, a;
  return Ne(e) ? i = e : (i = e.get, a = e.set), new rg(i, a, n);
}
const Es = {}, js = /* @__PURE__ */ new WeakMap();
let ra;
function og(e, t = !1, n = ra) {
  if (n) {
    let i = js.get(n);
    i || js.set(n, i = []), i.push(e);
  }
}
function lg(e, t, n = Ge) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ bn(F) || a === !1 || a === 0 ? fi(F, 1) : fi(F);
  let u, h, S, E, O = !1, A = !1;
  if (/* @__PURE__ */ Bt(e) ? (h = () => e.value, O = /* @__PURE__ */ bn(e)) : /* @__PURE__ */ va(e) ? (h = () => d(e), O = !0) : we(e) ? (A = !0, O = e.some((F) => /* @__PURE__ */ va(F) || /* @__PURE__ */ bn(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ Bt(F))
      return F.value;
    if (/* @__PURE__ */ va(F))
      return d(F);
    if (Ne(F))
      return l ? l(F, 2) : F();
  })) : Ne(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      bi();
      try {
        S();
      } finally {
        yi();
      }
    }
    const F = ra;
    ra = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      ra = F;
    }
  } : h = mn, t && a) {
    const F = h, le = a === !0 ? 1 / 0 : a;
    h = () => fi(F(), le);
  }
  const L = Dv(), R = () => {
    u.stop(), L && L.active && Uc(L.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...le) => {
      const ne = F(...le);
      return R(), ne;
    };
  }
  let M = A ? new Array(e.length).fill(Es) : Es;
  const K = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const le = u.run();
        if (F || a || O || (A ? le.some((ne, P) => Et(ne, M[P])) : Et(le, M))) {
          S && S();
          const ne = ra;
          ra = u;
          try {
            const P = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === Es ? void 0 : A && M[0] === Es ? [] : M,
              E
            ];
            M = le, l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            ra = ne;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new Lf(h), u.scheduler = s ? () => s(K, !1) : K, E = (F) => og(F, !1, u), S = u.onStop = () => {
    const F = js.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const le of F) le();
      js.delete(u);
    }
  }, t ? i ? K(!0) : M = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), R.pause = u.pause.bind(u), R.resume = u.resume.bind(u), R.stop = R, R;
}
function fi(e, t = 1 / 0, n) {
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Bt(e))
    fi(e.value, t, n);
  else if (we(e))
    for (let i = 0; i < e.length; i++)
      fi(e[i], t, n);
  else if (ma(e) || Mi(e))
    e.forEach((i) => {
      fi(i, t, n);
    });
  else if (Af(e)) {
    for (const i in e)
      fi(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && fi(e[i], t, n);
  }
  return e;
}
function as(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Jo(a, t, n);
  }
}
function yn(e, t, n, i) {
  if (Ne(e)) {
    const a = as(e, t, n, i);
    return a && Tf(a) && a.catch((r) => {
      Jo(r, t, n);
    }), a;
  }
  if (we(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(yn(e[r], t, n, i));
    return a;
  }
}
function Jo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ge;
  if (t) {
    let o = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, l, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      bi(), as(r, null, 10, [
        e,
        l,
        d
      ]), yi();
      return;
    }
  }
  cg(e, n, a, i, s);
}
function cg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Kt = [];
let jn = -1;
const Ba = [];
let Di = null, Ma = 0;
const qf = /* @__PURE__ */ Promise.resolve();
let Vs = null;
function vn(e) {
  const t = Vs || qf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ug(e) {
  let t = jn + 1, n = Kt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Kt[i], r = Hr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function qc(e) {
  if (!(e.flags & 1)) {
    const t = Hr(e), n = Kt[Kt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Hr(n) ? Kt.push(e) : Kt.splice(ug(t), 0, e), e.flags |= 1, Yf();
  }
}
function Yf() {
  Vs || (Vs = qf.then(Jf));
}
function Xf(e) {
  if (!we(e))
    Di && e.id === -1 ? Di.splice(Ma + 1, 0, e) : e.flags & 1 || (Ba.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ba.push(e[t]);
  Yf();
}
function Du(e, t, n = jn + 1) {
  for (; n < Kt.length; n++) {
    const i = Kt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Kt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Zf(e) {
  if (Ba.length) {
    const t = [...new Set(Ba)].sort(
      (n, i) => Hr(n) - Hr(i)
    );
    if (Ba.length = 0, Di) {
      for (let n = 0; n < t.length; n++)
        Di.push(t[n]);
      return;
    }
    for (Di = t, Ma = 0; Ma < Di.length; Ma++) {
      const n = Di[Ma];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Di = null, Ma = 0;
  }
}
const Hr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jf(e) {
  try {
    for (jn = 0; jn < Kt.length; jn++) {
      const t = Kt[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), as(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < Kt.length; jn++) {
      const t = Kt[jn];
      t && (t.flags &= -2);
    }
    jn = -1, Kt.length = 0, Zf(), Vs = null, (Kt.length || Ba.length) && Jf();
  }
}
let Ot = null, Qo = null;
function Gs(e) {
  const t = Ot;
  return Ot = e, Qo = e && e.type.__scopeId || null, t;
}
function dg(e) {
  Qo = e;
}
function fg() {
  Qo = null;
}
const hg = (e) => ke;
function ke(e, t = Ot, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Xs(-1);
    const r = Gs(t), s = gi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = gi.length; l > s; l--) tu();
      Gs(r), i._d && Xs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function qe(e, t) {
  if (Ot === null)
    return e;
  const n = rl(Ot), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ge] = t[a];
    r && (Ne(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && fi(s), i.push({
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
function Qi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (bi(), yn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), yi());
  }
}
function hn(e, t) {
  if (zt) {
    let n = zt.provides;
    const i = zt.parent && zt.parent.provides;
    i === n && (n = zt.provides = Object.create(i)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const i = ya();
  if (i || ja) {
    let a = ja ? ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ne(t) ? t.call(i && i.proxy) : t;
  }
}
const pg = /* @__PURE__ */ Symbol.for("v-scx"), vg = () => Ft(pg);
function gg(e, t) {
  return el(e, null, t);
}
function mg(e, t) {
  return el(
    e,
    null,
    { flush: "sync" }
  );
}
function pt(e, t, n) {
  return el(e, t, n);
}
function el(e, t, n = Ge) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = vt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (qr) {
    if (r === "sync") {
      const E = vg();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = mn, E.resume = mn, E.pause = mn, E;
    }
  }
  const u = zt;
  o.call = (E, O, A) => yn(E, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Gt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, O) => {
    O ? E() : qc(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = lg(e, t, o);
  return qr && (d ? d.push(S) : l && S()), S;
}
function bg(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? Qf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Ne(t) ? r = t : (r = t.handler, n = t);
  const s = os(this), o = el(a, r.bind(i), n);
  return s(), o;
}
function Qf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ri = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ Symbol("_vte"), tl = (e) => e.__isTeleport, oa = (e) => e && (e.disabled || e.disabled === ""), yg = (e) => e && (e.defer || e.defer === ""), $u = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Mu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, uc = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, _g = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: O, createText: A, createComment: L, parentNode: R }
    } = d, M = oa(t.props);
    let { dynamicChildren: K } = t;
    const F = (P, ce, X) => {
      P.shapeFlag & 16 && u(
        P.children,
        ce,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (P = t) => {
      const ce = oa(P.props), X = P.target = uc(P.props, O), ae = dc(X, P, A, E);
      X && (s !== "svg" && $u(X) ? s = "svg" : s !== "mathml" && Mu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), ce || (F(P, X, ae), mr(P, !1)));
    }, ne = (P) => {
      const ce = () => {
        if (Ri.get(P) === ce) {
          if (Ri.delete(P), oa(P.props)) {
            const X = R(P.el) || n;
            F(P, X, P.anchor), mr(P, !0);
          }
          le(P);
        }
      };
      Ri.set(P, ce), Gt(ce, r);
    };
    if (e == null) {
      const P = t.el = A(""), ce = t.anchor = A("");
      if (E(P, n, i), E(ce, n, i), yg(t.props) || r && r.pendingBranch) {
        ne(t);
        return;
      }
      M && (F(t, n, ce), mr(t, !0)), le();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, ce = Ri.get(e);
      if (ce) {
        ce.flags |= 8, Ri.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, me = oa(e.props), J = me ? n : X, te = me ? P : ae;
      if (s === "svg" || $u(X) ? s = "svg" : (s === "mathml" || Mu(X)) && (s = "mathml"), K ? (S(
        e.dynamicChildren,
        K,
        J,
        a,
        r,
        s,
        o
      ), eu(e, t, !0)) : l || h(
        e,
        t,
        J,
        te,
        a,
        r,
        s,
        o,
        !1
      ), M)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : As(
          t,
          n,
          P,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = uc(t.props, O);
        D && (t.target = D, As(
          t,
          D,
          null,
          d,
          0
        ));
      } else me && As(
        t,
        X,
        ae,
        d,
        1
      );
      mr(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: h,
      props: S
    } = e, E = oa(S), O = r || !E, A = Ri.get(e);
    if (A && (A.flags |= 8, Ri.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let L = 0; L < o.length; L++) {
        const R = o[L];
        i(
          R,
          t,
          n,
          O,
          !!R.dynamicChildren
        );
      }
  },
  move: As,
  hydrate: wg
};
function As(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Ri.has(e) && (!h || oa(u)) && l & 16)
    for (let S = 0; S < d.length; S++)
      a(
        d[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function wg(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function S(L, R) {
    let M = R;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, L._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function E(L, R) {
    R.anchor = h(
      s(L),
      R,
      o(L),
      n,
      i,
      a,
      r
    );
  }
  const O = t.target = uc(
    t.props,
    l
  ), A = oa(t.props);
  if (O) {
    const L = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(O, L), t.targetAnchor || dc(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), S(O, L), t.targetAnchor || dc(O, t, u, d), h(
      L && s(L),
      t,
      O,
      n,
      i,
      a,
      r
    ))), mr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const th = _g;
function mr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function dc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[eh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const pn = /* @__PURE__ */ Symbol("_leaveCb"), lr = /* @__PURE__ */ Symbol("_enterCb");
function Sg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vi(() => {
    e.isMounted = !0;
  }), Ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const un = [Function, Array], nh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: un,
  onEnter: un,
  onAfterEnter: un,
  onEnterCancelled: un,
  // leave
  onBeforeLeave: un,
  onLeave: un,
  onAfterLeave: un,
  onLeaveCancelled: un,
  // appear
  onBeforeAppear: un,
  onAppear: un,
  onAfterAppear: un,
  onAppearCancelled: un
}, ih = (e) => {
  const t = e.subTree;
  return t.component ? ih(t.component) : t;
}, Cg = {
  name: "BaseTransition",
  props: nh,
  setup(e, { slots: t }) {
    const n = ya(), i = Sg();
    return () => {
      const a = t.default && sh(t.default(), !0), r = a && a.length ? ah(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ke(e), { mode: o } = s;
      if (i.isLeaving)
        return kl(r);
      const l = Ks(r);
      if (!l)
        return kl(r);
      let d = fc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== kt && jr(l, d);
      let u = n.subTree && Ks(n.subTree);
      if (u && u.type !== kt && !la(u, l) && ih(n).type !== kt) {
        let h = fc(
          u,
          s,
          i,
          n
        );
        if (jr(u, h), o === "out-in" && l.type !== kt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, kl(r);
        o === "in-out" && l.type !== kt ? h.delayLeave = (S, E, O) => {
          const A = rh(
            i,
            u
          );
          A[String(u.key)] = u, S[pn] = () => {
            E(), S[pn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function ah(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== kt) {
        t = n;
        break;
      }
  }
  return t;
}
const Tg = Cg;
function rh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function fc(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: S,
    onLeave: E,
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: L,
    onAppear: R,
    onAfterAppear: M,
    onAppearCancelled: K
  } = t, F = String(e.key), le = rh(n, e), ne = (X, ae) => {
    X && yn(
      X,
      i,
      9,
      ae
    );
  }, P = (X, ae) => {
    const me = ae[1];
    ne(X, ae), we(X) ? X.every((J) => J.length <= 1) && me() : X.length <= 1 && me();
  }, ce = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let ae = l;
      if (!n.isMounted)
        if (r)
          ae = L || l;
        else
          return;
      X[pn] && X[pn](
        !0
        /* cancelled */
      );
      const me = le[F];
      me && la(e, me) && me.el[pn] && me.el[pn](), ne(ae, [X]);
    },
    enter(X) {
      if (le[F] === e) return;
      let ae = d, me = u, J = h;
      if (!n.isMounted)
        if (r)
          ae = R || d, me = M || u, J = K || h;
        else
          return;
      let te = !1;
      X[lr] = ($) => {
        te || (te = !0, $ ? ne(J, [X]) : ne(me, [X]), ce.delayedLeave && ce.delayedLeave(), X[lr] = void 0);
      };
      const D = X[lr].bind(null, !1);
      ae ? P(ae, [X, D]) : D();
    },
    leave(X, ae) {
      const me = String(e.key);
      if (X[lr] && X[lr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ae();
      ne(S, [X]);
      let J = !1;
      X[pn] = (D) => {
        J || (J = !0, ae(), D ? ne(A, [X]) : ne(O, [X]), X[pn] = void 0, le[me] === e && delete le[me]);
      };
      const te = X[pn].bind(null, !1);
      le[me] = e, E ? P(E, [X, te]) : te();
    },
    clone(X) {
      const ae = fc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(ae), ae;
    }
  };
  return ce;
}
function kl(e) {
  if (nl(e))
    return e = Hi(e), e.children = null, e;
}
function Ks(e) {
  if (!nl(e))
    return tl(e.type) && e.children ? ah(e.children) : e;
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
function jr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    jr(
      tl(n.type) && Ks(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ue ? (s.patchFlag & 128 && a++, i = i.concat(
      sh(s.children, t, o)
    )) : (t || s.type !== kt) && i.push(o != null ? Hi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t) {
  return Ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vt({ name: e.name }, t, { setup: e })
  ) : e;
}
function oh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Eg(e) {
  const t = ya(), n = /* @__PURE__ */ Gf(null);
  if (t) {
    const a = t.refs === Ge ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Fu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ws = /* @__PURE__ */ new WeakMap();
function Ar(e, t, n, i, a = !1) {
  if (we(e)) {
    e.forEach(
      (A, L) => Ar(
        A,
        t && (we(t) ? t[L] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ha(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Ar(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? rl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ge ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ke(h), E = h === Ge ? Cf : (A) => Fu(u, A) ? !1 : Ye(S, A), O = (A, L) => !(L && Fu(u, L));
  if (d != null && d !== l) {
    if (zu(t), tt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ Bt(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Ne(l))
    as(l, o, 12, [s, u]);
  else {
    const A = tt(l), L = /* @__PURE__ */ Bt(l);
    if (A || L) {
      const R = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            we(M) && Uc(M, r);
          else if (we(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const K = [r];
            O(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : L && (O(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          R(), Ws.delete(e);
        };
        M.id = -1, Ws.set(e, M), Gt(M, n);
      } else
        zu(e), R();
    }
  }
}
function zu(e) {
  const t = Ws.get(e);
  t && (t.flags |= 8, Ws.delete(e));
}
Yo().requestIdleCallback;
Yo().cancelIdleCallback;
const Ha = (e) => !!e.type.__asyncLoader, nl = (e) => e.type.__isKeepAlive;
function Ag(e, t) {
  lh(e, "a", t);
}
function kg(e, t) {
  lh(e, "da", t);
}
function lh(e, t, n = zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (il(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      nl(a.parent.vnode) && Og(i, t, n, a), a = a.parent;
  }
}
function Og(e, t, n, i) {
  const a = il(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  rs(() => {
    Uc(i[t], a);
  }, n);
}
function il(e, t, n = zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      bi();
      const o = os(n), l = yn(t, n, e, s);
      return o(), yi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const Ci = (e) => (t, n = zt) => {
  (!qr || e === "sp") && il(e, (...i) => t(...i), n);
}, ch = Ci("bm"), Vi = Ci("m"), uh = Ci(
  "bu"
), Ng = Ci("u"), Ya = Ci(
  "bum"
), rs = Ci("um"), xg = Ci(
  "sp"
), Lg = Ci("rtg"), Rg = Ci("rtc");
function Ig(e, t = zt) {
  il("ec", e, t);
}
const Yc = "components", Pg = "directives";
function Be(e, t) {
  return Zc(Yc, e, !0, t) || e;
}
const dh = /* @__PURE__ */ Symbol.for("v-ndc");
function Xc(e) {
  return tt(e) ? Zc(Yc, e, !1) || e : e || dh;
}
function Uu(e) {
  return Zc(Pg, e);
}
function Zc(e, t, n = !0, i = !1) {
  const a = Ot || zt;
  if (a) {
    const r = a.type;
    if (e === Yc) {
      const o = gm(
        r,
        !1
      );
      if (o && (o === t || o === Ut(t) || o === Wo(Ut(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bu(a[e] || r[e], t) || // global registration
      Bu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Bu(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Wo(Ut(t))]);
}
function ze(e, t, n, i) {
  let a;
  const r = n, s = we(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ va(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ bn(e), d = /* @__PURE__ */ _i(e), e = Zo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? qa(Nn(e[u])) : Nn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Xe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Re(e, t, n, i, a, r) {
  if (n == null && (n = {}), Ot.ce || Ot.parent && Ha(Ot.parent) && Ot.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), De(
      ue,
      null,
      [_e("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = gi.length;
  b();
  let l;
  try {
    const d = s && fh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = De(
      ue,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = gi.length; u > o; u--) tu();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function fh(e) {
  return e.some((t) => Gr(t) ? !(t.type === kt || t.type === ue && !fh(t.children)) : !0) ? e : null;
}
const hc = (e) => e ? Ph(e) ? rl(e) : hc(e.parent) : null, kr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => hc(e.parent),
    $root: (e) => hc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => vh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = vn.bind(e.proxy)),
    $watch: (e) => bg.bind(e)
  })
), Ol = (e, t) => e !== Ge && !e.__isScriptSetup && Ye(e, t), Dg = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const S = s[t];
      if (S !== void 0)
        switch (S) {
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
        if (Ol(i, t))
          return s[t] = 1, i[t];
        if (a !== Ge && Ye(a, t))
          return s[t] = 2, a[t];
        if (Ye(r, t))
          return s[t] = 3, r[t];
        if (n !== Ge && Ye(n, t))
          return s[t] = 4, n[t];
        pc && (s[t] = 0);
      }
    }
    const d = kr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Mt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ge && Ye(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ye(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Ol(a, t) ? (a[t] = n, !0) : i !== Ge && Ye(i, t) ? (i[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ge && o[0] !== "$" && Ye(e, o) || Ol(t, o) || Ye(r, o) || Ye(i, o) || Ye(kr, o) || Ye(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function $g() {
  return hh().slots;
}
function Mg() {
  return hh().attrs;
}
function hh(e) {
  const t = ya();
  return t.setupContext || (t.setupContext = $h(t));
}
function qs(e) {
  return we(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Fg(e, t) {
  return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : vt({}, qs(e), qs(t));
}
let pc = !0;
function zg(e) {
  const t = vh(e), n = e.proxy, i = e.ctx;
  pc = !1, t.beforeCreate && Hu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: S,
    beforeUpdate: E,
    updated: O,
    activated: A,
    deactivated: L,
    beforeDestroy: R,
    beforeUnmount: M,
    destroyed: K,
    unmounted: F,
    render: le,
    renderTracked: ne,
    renderTriggered: P,
    errorCaptured: ce,
    serverPrefetch: X,
    // public API
    expose: ae,
    inheritAttrs: me,
    // assets
    components: J,
    directives: te,
    filters: D
  } = t;
  if (d && Ug(d, i, null), s)
    for (const re in s) {
      const ie = s[re];
      Ne(ie) && (i[re] = ie.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    Xe(re) && (e.data = /* @__PURE__ */ $t(re));
  }
  if (pc = !0, r)
    for (const re in r) {
      const ie = r[re], he = Ne(ie) ? ie.bind(n, n) : Ne(ie.get) ? ie.get.bind(n, n) : mn, de = !Ne(ie) && Ne(ie.set) ? ie.set.bind(n) : mn, Te = q({
        get: he,
        set: de
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (ge) => Te.value = ge
      });
    }
  if (o)
    for (const re in o)
      ph(o[re], i, n, re);
  if (l) {
    const re = Ne(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ie) => {
      hn(ie, re[ie]);
    });
  }
  u && Hu(u, e, "c");
  function Y(re, ie) {
    we(ie) ? ie.forEach((he) => re(he.bind(n))) : ie && re(ie.bind(n));
  }
  if (Y(ch, h), Y(Vi, S), Y(uh, E), Y(Ng, O), Y(Ag, A), Y(kg, L), Y(Ig, ce), Y(Rg, ne), Y(Lg, P), Y(Ya, M), Y(rs, F), Y(xg, X), we(ae))
    if (ae.length) {
      const re = e.exposed || (e.exposed = {});
      ae.forEach((ie) => {
        Object.defineProperty(re, ie, {
          get: () => n[ie],
          set: (he) => n[ie] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === mn && (e.render = le), me != null && (e.inheritAttrs = me), J && (e.components = J), te && (e.directives = te), X && oh(e);
}
function Ug(e, t, n = mn) {
  we(e) && (e = vc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Xe(a) ? "default" in a ? r = Ft(
      a.from || i,
      a.default,
      !0
    ) : r = Ft(a.from || i) : r = Ft(a), /* @__PURE__ */ Bt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Hu(e, t, n) {
  yn(
    we(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ph(e, t, n, i) {
  let a = i.includes(".") ? Qf(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    Ne(r) && pt(a, r);
  } else if (Ne(e))
    pt(a, e.bind(n));
  else if (Xe(e))
    if (we(e))
      e.forEach((r) => ph(r, t, n, i));
    else {
      const r = Ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ne(r) && pt(a, r, e);
    }
}
function vh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Ys(l, d, s, !0)
  ), Ys(l, t, s)), Xe(t) && r.set(t, l), l;
}
function Ys(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ys(e, r, n, !0), a && a.forEach(
    (s) => Ys(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Bg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Bg = {
  data: ju,
  props: Vu,
  emits: Vu,
  // objects
  methods: br,
  computed: br,
  // lifecycle
  beforeCreate: Vt,
  created: Vt,
  beforeMount: Vt,
  mounted: Vt,
  beforeUpdate: Vt,
  updated: Vt,
  beforeDestroy: Vt,
  beforeUnmount: Vt,
  destroyed: Vt,
  unmounted: Vt,
  activated: Vt,
  deactivated: Vt,
  errorCaptured: Vt,
  serverPrefetch: Vt,
  // assets
  components: br,
  directives: br,
  // watch
  watch: jg,
  // provide / inject
  provide: ju,
  inject: Hg
};
function ju(e, t) {
  return t ? e ? function() {
    return vt(
      Ne(e) ? e.call(this, this) : e,
      Ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hg(e, t) {
  return br(vc(e), vc(t));
}
function vc(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Vt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function br(e, t) {
  return e ? vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Vu(e, t) {
  return e ? we(e) && we(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vt(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t ?? {})
  ) : t;
}
function jg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = vt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Vt(e[i], t[i]);
  return n;
}
function gh() {
  return {
    app: null,
    config: {
      isNativeTag: Cf,
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
let Vg = 0;
function Gg(e, t) {
  return function(i, a = null) {
    Ne(i) || (i = vt({}, i)), a != null && !Xe(a) && (a = null);
    const r = gh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: Vg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: bm,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && Ne(u.install) ? (s.add(u), u.install(d, ...h)) : Ne(u) && (s.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (r.components[u] = h, d) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, d) : r.directives[u];
      },
      mount(u, h, S) {
        if (!l) {
          const E = d._ceVNode || _e(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, rl(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (yn(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = ja;
        ja = d;
        try {
          return u();
        } finally {
          ja = h;
        }
      }
    };
    return d;
  };
}
let ja = null;
function mh(e, t, n = Ge) {
  const i = ya(), a = Ut(t), r = Si(t), s = bh(e, a), o = ag((l, d) => {
    let u, h = Ge, S;
    return mg(() => {
      const E = e[a];
      Et(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const O = n.set ? n.set(E) : E;
        if (!Et(O, u) && !(h !== Ge && Et(E, h)))
          return;
        const A = i.vnode.props, L = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        L || (u = E, d()), i.emit(`update:${t}`, O), Et(E, h) && (Et(E, O) && !Et(O, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        L && h !== Ge && !Et(O, u)) && d(), h = E, S = O;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ge : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const bh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${Si(t)}Modifiers`];
function Kg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ge;
  let a = n;
  const r = t.startsWith("update:"), s = r && bh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => tt(u) ? u.trim() : u)), s.number && (a = a.map(qo)));
  let o, l = i[o = Sl(t)] || // also try camelCase event handler (#2249)
  i[o = Sl(Ut(t))];
  !l && r && (l = i[o = Sl(Si(t))]), l && yn(
    l,
    e,
    6,
    a
  );
  const d = i[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, yn(
      d,
      e,
      6,
      a
    );
  }
}
const Wg = /* @__PURE__ */ new WeakMap();
function yh(e, t, n = !1) {
  const i = n ? Wg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Ne(e)) {
    const l = (d) => {
      const u = yh(d, t, !0);
      u && (o = !0, vt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Xe(e) && i.set(e, null), null) : (we(r) ? r.forEach((l) => s[l] = null) : vt(s, r), Xe(e) && i.set(e, s), s);
}
function al(e, t) {
  return !e || !Vo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Si(t)) || Ye(e, t));
}
function Gu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: d,
    renderCache: u,
    props: h,
    data: S,
    setupState: E,
    ctx: O,
    inheritAttrs: A
  } = e, L = Gs(e);
  let R, M;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, le = F;
      R = qn(
        d.call(
          le,
          F,
          u,
          h,
          E,
          S,
          O
        )
      ), M = o;
    } else {
      const F = t;
      R = qn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), M = t.props ? o : qg(o);
    }
  } catch (F) {
    gi.length = 0, Jo(F, e, 1), R = _e(kt);
  }
  let K = R;
  if (M && A !== !1) {
    const F = Object.keys(M), { shapeFlag: le } = K;
    F.length && le & 7 && (r && F.some(Go) && (M = Yg(
      M,
      r
    )), K = Hi(K, M, !1, !0));
  }
  if (n.dirs && (K = Hi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = tl(K.type) && Ks(K) || K;
    jr(F, n.transition);
  }
  return R = K, Gs(L), R;
}
const qg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Go(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Xg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Ku(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (_h(s, i, S) && !al(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Ku(i, s, d) : !0 : !!s;
  return !1;
}
function Ku(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (_h(t, e, r) && !al(n, r))
      return !0;
  }
  return !1;
}
function _h(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Xe(i) && Xe(a) ? !Bi(i, a) : i !== a;
}
function Zg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const wh = {}, Sh = () => Object.create(wh), Ch = (e) => Object.getPrototypeOf(e) === wh;
function Jg(e, t, n, i = !1) {
  const a = {}, r = Sh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Th(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Qv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Qg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ke(a), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let S = u[h];
        if (al(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Ye(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const O = Ut(S);
            a[O] = gc(
              l,
              o,
              O,
              E,
              e,
              !1
            );
          }
        else
          E !== r[S] && (r[S] = E, d = !0);
      }
    }
  } else {
    Th(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ye(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Si(h)) === h || !Ye(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = gc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ye(t, h)) && (delete r[h], d = !0);
  }
  d && di(e.attrs, "set", "");
}
function Th(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Cr(l))
        continue;
      const d = t[l];
      let u;
      a && Ye(a, u = Ut(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : al(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ke(n), d = o || Ge;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = gc(
        a,
        l,
        h,
        d[h],
        e,
        !Ye(d, h)
      );
    }
  }
  return s;
}
function gc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ye(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Ne(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = os(a);
          i = d[n] = l.call(
            null,
            t
          ), u();
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
    ] && (i === "" || i === Si(n)) && (i = !0));
  }
  return i;
}
const em = /* @__PURE__ */ new WeakMap();
function Eh(e, t, n = !1) {
  const i = n ? em : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Ne(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Eh(h, t, !0);
      vt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Xe(e) && i.set(e, Ua), Ua;
  if (we(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ut(r[u]);
      Wu(h) && (s[h] = Ge);
    }
  else if (r)
    for (const u in r) {
      const h = Ut(u);
      if (Wu(h)) {
        const S = r[u], E = s[h] = we(S) || Ne(S) ? { type: S } : vt({}, S), O = E.type;
        let A = !1, L = !0;
        if (we(O))
          for (let R = 0; R < O.length; ++R) {
            const M = O[R], K = Ne(M) && M.name;
            if (K === "Boolean") {
              A = !0;
              break;
            } else K === "String" && (L = !1);
          }
        else
          A = Ne(O) && O.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = L, (A || Ye(E, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Xe(e) && i.set(e, d), d;
}
function Wu(e) {
  return e[0] !== "$" && !Cr(e);
}
const Jc = (e) => e === "_" || e === "_ctx" || e === "$stable", Qc = (e) => we(e) ? e.map(qn) : [qn(e)], tm = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => Qc(t(...a)), n);
  return i._c = !1, i;
}, Ah = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Jc(a)) continue;
    const r = e[a];
    if (Ne(r))
      t[a] = tm(a, r, i);
    else if (r != null) {
      const s = Qc(r);
      t[a] = () => s;
    }
  }
}, kh = (e, t) => {
  const n = Qc(t);
  e.slots.default = () => n;
}, Oh = (e, t, n) => {
  for (const i in t)
    (n || !Jc(i)) && (e[i] = t[i]);
}, nm = (e, t, n) => {
  const i = e.slots = Sh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Oh(i, t, n), n && kf(i, "_", a, !0)) : Ah(t, i);
  } else t && kh(e, t);
}, im = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ge;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Oh(a, t, n) : (r = !t.$stable, Ah(t, a)), s = t;
  } else t && (kh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Jc(o) && s[o] == null && delete a[o];
}, Gt = lm;
function am(e) {
  return rm(e);
}
function rm(e, t) {
  const n = Yo();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: S,
    setScopeId: E = mn,
    insertStaticContent: O
  } = e, A = (v, C, k, N = null, x = null, z = null, W = void 0, V = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !la(v, C) && (N = lt(v), ge(v, x, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: j, ref: ye, shapeFlag: se } = C;
    switch (j) {
      case ss:
        L(v, C, k, N);
        break;
      case kt:
        R(v, C, k, N);
        break;
      case Fs:
        v == null && M(C, k, N, W);
        break;
      case ue:
        J(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        break;
      default:
        se & 1 ? le(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        ) : se & 6 ? te(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        ) : (se & 64 || se & 128) && j.process(
          v,
          C,
          k,
          N,
          x,
          z,
          W,
          V,
          Q,
          ln
        );
    }
    ye != null && x ? Ar(ye, v && v.ref, z, C || v, !C) : ye == null && v && v.ref != null && Ar(v.ref, null, z, v, !0);
  }, L = (v, C, k, N) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        N
      );
    else {
      const x = C.el = v.el;
      C.children !== v.children && d(x, C.children);
    }
  }, R = (v, C, k, N) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      N
    ) : C.el = v.el;
  }, M = (v, C, k, N) => {
    [v.el, v.anchor] = O(
      v.children,
      C,
      k,
      N,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: C }, k, N) => {
    let x;
    for (; v && v !== C; )
      x = S(v), i(v, k, N), v = x;
    i(C, k, N);
  }, F = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, le = (v, C, k, N, x, z, W, V, Q) => {
    if (C.type === "svg" ? W = "svg" : C.type === "math" && (W = "mathml"), v == null)
      ne(
        C,
        k,
        N,
        x,
        z,
        W,
        V,
        Q
      );
    else {
      const j = v.el && v.el._isVueCE ? v.el : null;
      try {
        j && j._beginPatch(), X(
          v,
          C,
          x,
          z,
          W,
          V,
          Q
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, ne = (v, C, k, N, x, z, W, V) => {
    let Q, j;
    const { props: ye, shapeFlag: se, transition: be, dirs: ve } = v;
    if (Q = v.el = s(
      v.type,
      z,
      ye && ye.is,
      ye
    ), se & 8 ? u(Q, v.children) : se & 16 && ce(
      v.children,
      Q,
      null,
      N,
      x,
      Nl(v, z),
      W,
      V
    ), ve && Qi(v, null, N, "created"), P(Q, v, v.scopeId, W, N), ye) {
      for (const $e in ye)
        $e !== "value" && !Cr($e) && r(Q, $e, null, ye[$e], z, N);
      "value" in ye && r(Q, "value", null, ye.value, z), (j = ye.onVnodeBeforeMount) && Bn(j, N, v);
    }
    ve && Qi(v, null, N, "beforeMount");
    const xe = sm(x, be);
    xe && be.beforeEnter(Q), i(Q, C, k), ((j = ye && ye.onVnodeMounted) || xe || ve) && Gt(() => {
      j && Bn(j, N, v), xe && be.enter(Q), ve && Qi(v, null, N, "mounted");
    }, x);
  }, P = (v, C, k, N, x) => {
    if (k && E(v, k), N)
      for (let z = 0; z < N.length; z++)
        E(v, N[z]);
    if (x) {
      let z = x.subTree;
      if (C === z || Lh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const W = x.vnode;
        P(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          x.parent
        );
      }
    }
  }, ce = (v, C, k, N, x, z, W, V, Q = 0) => {
    for (let j = Q; j < v.length; j++) {
      const ye = v[j] = V ? ui(v[j]) : qn(v[j]);
      A(
        null,
        ye,
        C,
        k,
        N,
        x,
        z,
        W,
        V
      );
    }
  }, X = (v, C, k, N, x, z, W) => {
    const V = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: j, dirs: ye } = C;
    Q |= v.patchFlag & 16;
    const se = v.props || Ge, be = C.props || Ge;
    let ve;
    if (k && ea(k, !1), (ve = be.onVnodeBeforeUpdate) && Bn(ve, k, C, v), ye && Qi(C, v, k, "beforeUpdate"), k && ea(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!v.dynamicChildren || v.dynamicChildren.length !== j.length) && (Q = 0, W = !1, j = null), (se.innerHTML && be.innerHTML == null || se.textContent && be.textContent == null) && u(V, ""), j ? ae(
      v.dynamicChildren,
      j,
      V,
      k,
      N,
      Nl(C, x),
      z
    ) : W || ie(
      v,
      C,
      V,
      null,
      k,
      N,
      Nl(C, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        me(V, se, be, k, x);
      else if (Q & 2 && se.class !== be.class && r(V, "class", null, be.class, x), Q & 4 && r(V, "style", se.style, be.style, x), Q & 8) {
        const xe = C.dynamicProps;
        for (let $e = 0; $e < xe.length; $e++) {
          const Pe = xe[$e], Qe = se[Pe], at = be[Pe];
          (at !== Qe || Pe === "value") && r(V, Pe, Qe, at, x, k);
        }
      }
      Q & 1 && v.children !== C.children && u(V, C.children);
    } else !W && j == null && me(V, se, be, k, x);
    ((ve = be.onVnodeUpdated) || ye) && Gt(() => {
      ve && Bn(ve, k, C, v), ye && Qi(C, v, k, "updated");
    }, N);
  }, ae = (v, C, k, N, x, z, W) => {
    for (let V = 0; V < C.length; V++) {
      const Q = v[V], j = C[V], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(Q, j) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        j,
        ye,
        null,
        N,
        x,
        z,
        W,
        !0
      );
    }
  }, me = (v, C, k, N, x) => {
    if (C !== k) {
      if (C !== Ge)
        for (const z in C)
          !Cr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            x,
            N
          );
      for (const z in k) {
        if (Cr(z)) continue;
        const W = k[z], V = C[z];
        W !== V && z !== "value" && r(v, z, V, W, x, N);
      }
      "value" in k && r(v, "value", C.value, k.value, x);
    }
  }, J = (v, C, k, N, x, z, W, V, Q) => {
    const j = C.el = v ? v.el : o(""), ye = C.anchor = v ? v.anchor : o("");
    let { patchFlag: se, dynamicChildren: be, slotScopeIds: ve } = C;
    ve && (V = V ? V.concat(ve) : ve), v == null ? (i(j, k, N), i(ye, k, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      ye,
      x,
      z,
      W,
      V,
      Q
    )) : se > 0 && se & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === be.length ? (ae(
      v.dynamicChildren,
      be,
      k,
      x,
      z,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || x && C === x.subTree) && eu(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      ye,
      x,
      z,
      W,
      V,
      Q
    );
  }, te = (v, C, k, N, x, z, W, V, Q) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? x.ctx.activate(
      C,
      k,
      N,
      W,
      Q
    ) : D(
      C,
      k,
      N,
      x,
      z,
      W,
      Q
    ) : $(v, C, Q);
  }, D = (v, C, k, N, x, z, W) => {
    const V = v.component = fm(
      v,
      N,
      x
    );
    if (nl(v) && (V.ctx.renderer = ln), hm(V, !1, W), V.asyncDep) {
      if (x && x.registerDep(V, Y, W), !v.el) {
        const Q = V.subTree = _e(kt);
        R(null, Q, C, k), v.placeholder = Q.el;
      }
    } else
      Y(
        V,
        v,
        C,
        k,
        x,
        z,
        W
      );
  }, $ = (v, C, k) => {
    const N = C.component = v.component;
    if (Xg(v, C, k))
      if (N.asyncDep && !N.asyncResolved) {
        re(N, C, k);
        return;
      } else
        N.next = C, N.update();
    else
      C.el = v.el, N.vnode = C;
  }, Y = (v, C, k, N, x, z, W) => {
    const V = () => {
      if (v.isMounted) {
        let { next: se, bu: be, u: ve, parent: xe, vnode: $e } = v;
        {
          const xt = Nh(v);
          if (xt) {
            se && (se.el = $e.el, re(v, se, W)), xt.asyncDep.then(() => {
              Gt(() => {
                v.isUnmounted || j();
              }, x);
            });
            return;
          }
        }
        let Pe = se, Qe;
        ea(v, !1), se ? (se.el = $e.el, re(v, se, W)) : se = $e, be && Ms(be), (Qe = se.props && se.props.onVnodeBeforeUpdate) && Bn(Qe, xe, se, $e), ea(v, !0);
        const at = Gu(v), St = v.subTree;
        v.subTree = at, A(
          St,
          at,
          // parent may have changed if it's in a teleport
          h(St.el),
          // anchor may have changed if it's in a fragment
          lt(St),
          v,
          x,
          z
        ), se.el = at.el, Pe === null && Zg(v, at.el), ve && Gt(ve, x), (Qe = se.props && se.props.onVnodeUpdated) && Gt(
          () => Bn(Qe, xe, se, $e),
          x
        );
      } else {
        let se;
        const { el: be, props: ve } = C, { bm: xe, m: $e, parent: Pe, root: Qe, type: at } = v, St = Ha(C);
        ea(v, !1), xe && Ms(xe), !St && (se = ve && ve.onVnodeBeforeMount) && Bn(se, Pe, C), ea(v, !0);
        {
          Qe.ce && Qe.ce._hasShadowRoot() && Qe.ce._injectChildStyle(
            at,
            v.parent ? v.parent.type : void 0
          );
          const xt = v.subTree = Gu(v);
          A(
            null,
            xt,
            k,
            N,
            v,
            x,
            z
          ), C.el = xt.el;
        }
        if ($e && Gt($e, x), !St && (se = ve && ve.onVnodeMounted)) {
          const xt = C;
          Gt(
            () => Bn(se, Pe, xt),
            x
          );
        }
        (C.shapeFlag & 256 || Pe && Ha(Pe.vnode) && Pe.vnode.shapeFlag & 256) && v.a && Gt(v.a, x), v.isMounted = !0, C = k = N = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new Lf(V);
    v.scope.off();
    const j = v.update = Q.run.bind(Q), ye = v.job = Q.runIfDirty.bind(Q);
    ye.i = v, ye.id = v.uid, Q.scheduler = () => qc(ye), ea(v, !0), j();
  }, re = (v, C, k) => {
    C.component = v;
    const N = v.vnode.props;
    v.vnode = C, v.next = null, Qg(v, C.props, N, k), im(v, C.children, k), bi(), Du(v), yi();
  }, ie = (v, C, k, N, x, z, W, V, Q = !1) => {
    const j = v && v.children, ye = v ? v.shapeFlag : 0, se = C.children, { patchFlag: be, shapeFlag: ve } = C;
    if (be > 0) {
      if (be & 128) {
        de(
          j,
          se,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        return;
      } else if (be & 256) {
        he(
          j,
          se,
          k,
          N,
          x,
          z,
          W,
          V,
          Q
        );
        return;
      }
    }
    ve & 8 ? (ye & 16 && ot(j, x, z), se !== j && u(k, se)) : ye & 16 ? ve & 16 ? de(
      j,
      se,
      k,
      N,
      x,
      z,
      W,
      V,
      Q
    ) : ot(j, x, z, !0) : (ye & 8 && u(k, ""), ve & 16 && ce(
      se,
      k,
      N,
      x,
      z,
      W,
      V,
      Q
    ));
  }, he = (v, C, k, N, x, z, W, V, Q) => {
    v = v || Ua, C = C || Ua;
    const j = v.length, ye = C.length, se = Math.min(j, ye);
    let be;
    for (be = 0; be < se; be++) {
      const ve = C[be] = Q ? ui(C[be]) : qn(C[be]);
      A(
        v[be],
        ve,
        k,
        null,
        x,
        z,
        W,
        V,
        Q
      );
    }
    j > ye ? ot(
      v,
      x,
      z,
      !0,
      !1,
      se
    ) : ce(
      C,
      k,
      N,
      x,
      z,
      W,
      V,
      Q,
      se
    );
  }, de = (v, C, k, N, x, z, W, V, Q) => {
    let j = 0;
    const ye = C.length;
    let se = v.length - 1, be = ye - 1;
    for (; j <= se && j <= be; ) {
      const ve = v[j], xe = C[j] = Q ? ui(C[j]) : qn(C[j]);
      if (la(ve, xe))
        A(
          ve,
          xe,
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        );
      else
        break;
      j++;
    }
    for (; j <= se && j <= be; ) {
      const ve = v[se], xe = C[be] = Q ? ui(C[be]) : qn(C[be]);
      if (la(ve, xe))
        A(
          ve,
          xe,
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        );
      else
        break;
      se--, be--;
    }
    if (j > se) {
      if (j <= be) {
        const ve = be + 1, xe = ve < ye ? C[ve].el : N;
        for (; j <= be; )
          A(
            null,
            C[j] = Q ? ui(C[j]) : qn(C[j]),
            k,
            xe,
            x,
            z,
            W,
            V,
            Q
          ), j++;
      }
    } else if (j > be)
      for (; j <= se; )
        ge(v[j], x, z, !0), j++;
    else {
      const ve = j, xe = j, $e = /* @__PURE__ */ new Map();
      for (j = xe; j <= be; j++) {
        const dt = C[j] = Q ? ui(C[j]) : qn(C[j]);
        dt.key != null && $e.set(dt.key, j);
      }
      let Pe, Qe = 0;
      const at = be - xe + 1;
      let St = !1, xt = 0;
      const Wt = new Array(at);
      for (j = 0; j < at; j++) Wt[j] = 0;
      for (j = ve; j <= se; j++) {
        const dt = v[j];
        if (Qe >= at) {
          ge(dt, x, z, !0);
          continue;
        }
        let jt;
        if (dt.key != null)
          jt = $e.get(dt.key);
        else
          for (Pe = xe; Pe <= be; Pe++)
            if (Wt[Pe - xe] === 0 && la(dt, C[Pe])) {
              jt = Pe;
              break;
            }
        jt === void 0 ? ge(dt, x, z, !0) : (Wt[jt - xe] = j + 1, jt >= xt ? xt = jt : St = !0, A(
          dt,
          C[jt],
          k,
          null,
          x,
          z,
          W,
          V,
          Q
        ), Qe++);
      }
      const Jn = St ? om(Wt) : Ua;
      for (Pe = Jn.length - 1, j = at - 1; j >= 0; j--) {
        const dt = xe + j, jt = C[dt], Ti = C[dt + 1], Qn = dt + 1 < ye ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ti.el || xh(Ti)
        ) : N;
        Wt[j] === 0 ? A(
          null,
          jt,
          k,
          Qn,
          x,
          z,
          W,
          V,
          Q
        ) : St && (Pe < 0 || j !== Jn[Pe] ? Te(jt, k, Qn, 2) : Pe--);
      }
    }
  }, Te = (v, C, k, N, x = null) => {
    const { el: z, type: W, transition: V, children: Q, shapeFlag: j } = v;
    if (j & 6) {
      Te(v.component.subTree, C, k, N);
      return;
    }
    if (j & 128) {
      v.suspense.move(C, k, N);
      return;
    }
    if (j & 64) {
      W.move(v, C, k, ln);
      return;
    }
    if (W === ue) {
      i(z, C, k);
      for (let se = 0; se < Q.length; se++)
        Te(Q[se], C, k, N);
      i(v.anchor, C, k);
      return;
    }
    if (W === Fs) {
      K(v, C, k);
      return;
    }
    if (N !== 2 && j & 1 && V)
      if (N === 0)
        V.persisted && !z[pn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Gt(() => V.enter(z), x));
      else {
        const { leave: se, delayLeave: be, afterLeave: ve } = V, xe = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, $e = () => {
          const Pe = z._isLeaving || !!z[pn];
          z._isLeaving && z[pn](
            !0
            /* cancelled */
          ), V.persisted && !Pe ? xe() : se(z, () => {
            xe(), ve && ve();
          });
        };
        be ? be(z, xe, $e) : $e();
      }
    else
      i(z, C, k);
  }, ge = (v, C, k, N = !1, x = !1) => {
    const {
      type: z,
      props: W,
      ref: V,
      children: Q,
      dynamicChildren: j,
      shapeFlag: ye,
      patchFlag: se,
      dirs: be,
      cacheIndex: ve,
      memo: xe
    } = v;
    if (se === -2 && (x = !1), V != null && (bi(), Ar(V, null, k, v, !0), yi()), ve != null && (C.renderCache[ve] = void 0), ye & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const $e = ye & 1 && be, Pe = !Ha(v);
    let Qe;
    if (Pe && (Qe = W && W.onVnodeBeforeUnmount) && Bn(Qe, C, v), ye & 6)
      nt(v.component, k, N);
    else {
      if (ye & 128) {
        v.suspense.unmount(k, N);
        return;
      }
      $e && Qi(v, null, C, "beforeUnmount"), ye & 64 ? v.type.remove(
        v,
        C,
        k,
        ln,
        N
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ue || se > 0 && se & 64) ? ot(
        j,
        C,
        k,
        !1,
        !0
      ) : (z === ue && se & 384 || !x && ye & 16) && ot(Q, C, k), N && je(v);
    }
    const at = xe != null && ve == null;
    (Pe && (Qe = W && W.onVnodeUnmounted) || $e || at) && Gt(() => {
      Qe && Bn(Qe, C, v), $e && Qi(v, null, C, "unmounted"), at && (v.el = null);
    }, k);
  }, je = (v) => {
    const { type: C, el: k, anchor: N, transition: x } = v;
    if (C === ue) {
      Ee(k, N);
      return;
    }
    if (C === Fs) {
      F(v);
      return;
    }
    const z = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: W, delayLeave: V } = x, Q = () => W(k, z);
      V ? V(v.el, z, Q) : Q();
    } else
      z();
  }, Ee = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, nt = (v, C, k) => {
    const { bum: N, scope: x, job: z, subTree: W, um: V, m: Q, a: j } = v;
    qu(Q), qu(j), N && Ms(N), x.stop(), z && (z.flags |= 8, ge(W, v, C, k)), V && Gt(V, C), Gt(() => {
      v.isUnmounted = !0;
    }, C);
  }, ot = (v, C, k, N = !1, x = !1, z = 0) => {
    for (let W = z; W < v.length; W++)
      ge(v[W], C, k, N, x);
  }, lt = (v) => {
    if (v.shapeFlag & 6)
      return lt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[eh];
    return k ? S(k) : C;
  };
  let wt = !1;
  const it = (v, C, k) => {
    let N;
    v == null ? C._vnode && (ge(C._vnode, null, null, !0), N = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, wt || (wt = !0, Du(N), Zf(), wt = !1);
  }, ln = {
    p: A,
    um: ge,
    m: Te,
    r: je,
    mt: D,
    mc: ce,
    pc: ie,
    pbc: ae,
    n: lt,
    o: e
  };
  return {
    render: it,
    hydrate: void 0,
    createApp: Gg(it)
  };
}
function Nl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ea({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (we(i) && we(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ui(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && eu(s, o)), o.type === ss && (o.patchFlag === -1 && (o = a[r] = ui(o)), o.el = s.el), o.type === kt && !o.el && (o.el = s.el);
    }
}
function om(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const d = e[i];
    if (d !== 0) {
      if (a = n[n.length - 1], e[a] < d) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < d ? r = o + 1 : s = o;
      d < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Nh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Nh(t);
}
function qu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function xh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? xh(t.subTree) : null;
}
const Lh = (e) => e.__isSuspense;
function lm(e, t) {
  t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : Xf(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), kt = /* @__PURE__ */ Symbol.for("v-cmt"), Fs = /* @__PURE__ */ Symbol.for("v-stc"), gi = [];
let sn = null;
function b(e = !1) {
  gi.push(sn = e ? null : []);
}
function tu() {
  gi.pop(), sn = gi[gi.length - 1] || null;
}
let Vr = 1;
function Xs(e, t = !1) {
  Vr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function Rh(e) {
  return e.dynamicChildren = Vr > 0 ? sn || Ua : null, tu(), Vr > 0 && sn && sn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Rh(
    c(
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
  return Rh(
    _e(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ih = ({ key: e }) => e ?? null, zs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Bt(e) || Ne(e) ? { i: Ot, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === ue ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ih(t),
    ref: t && zs(t),
    scopeId: Qo,
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
    ctx: Ot
  };
  return o ? (Zs(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Vr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const _e = cm;
function cm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === dh) && (e = kt), Gr(e)) {
    const o = Hi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Zs(o, n), Vr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (mm(e) && (e = e.__vccOpts), t) {
    t = Kr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Ce(o)), Xe(l) && (/* @__PURE__ */ Wc(l) && !we(l) && (l = vt({}, l)), t.style = on(l));
  }
  const s = tt(e) ? 1 : Lh(e) ? 128 : tl(e) ? 64 : Xe(e) ? 4 : Ne(e) ? 2 : 0;
  return c(
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
function Kr(e) {
  return e ? /* @__PURE__ */ Wc(e) || Ch(e) ? vt({}, e) : e : null;
}
function Hi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ht(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ih(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? we(r) ? r.concat(zs(t)) : [r, zs(t)] : zs(t)
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
    ssContent: e.ssContent && Hi(e.ssContent),
    ssFallback: e.ssFallback && Hi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && jr(
    u,
    l.clone(u)
  ), u;
}
function Oe(e = " ", t = 0) {
  return _e(ss, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (b(), De(kt, null, e)) : _e(kt, null, e);
}
function qn(e) {
  return e == null || typeof e == "boolean" ? _e(kt) : we(e) ? _e(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gr(e) ? ui(e) : _e(ss, null, String(e));
}
function ui(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hi(e);
}
function Zs(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (we(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Zs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Ch(t) ? t._ctx = Ot : a === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ne(t)) {
    if (i & 65) {
      Zs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ot }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ht(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ce([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Vo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(we(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Go(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Bn(e, t, n, i = null) {
  yn(e, t, 7, [
    n,
    i
  ]);
}
const um = gh();
let dm = 0;
function fm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || um, r = {
    uid: dm++,
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
    scope: new Pv(
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
    propsOptions: Eh(i, a),
    emitsOptions: yh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ge,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ge,
    data: Ge,
    props: Ge,
    attrs: Ge,
    slots: Ge,
    refs: Ge,
    setupState: Ge,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Kg.bind(null, r), e.ce && e.ce(r), r;
}
let zt = null;
const ya = () => zt || Ot;
let Js, Wr;
{
  const e = Yo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Js = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => zt = n
  ), Wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => qr = n
  );
}
const os = (e) => {
  const t = zt;
  return Js(e), e.scope.on(), () => {
    e.scope.off(), Js(t);
  };
}, Yu = () => {
  zt && zt.scope.off(), Js(null);
};
function Ph(e) {
  return e.vnode.shapeFlag & 4;
}
let qr = !1;
function hm(e, t = !1, n = !1) {
  t && Wr(t);
  const { props: i, children: a } = e.vnode, r = Ph(e);
  Jg(e, i, r, t), nm(e, a, n || t);
  const s = r ? pm(e, t) : void 0;
  return t && Wr(!1), s;
}
function pm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dg);
  const { setup: i } = n;
  if (i) {
    bi();
    const a = e.setupContext = i.length > 1 ? $h(e) : null, r = os(e), s = as(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Tf(s);
    if (yi(), r(), (o || e.sp) && !Ha(e) && oh(e), o) {
      if (s.then(Yu, Yu), t)
        return s.then((l) => {
          Wr(!0);
          try {
            Xu(e, l, t);
          } finally {
            Wr(!1);
          }
        }).catch((l) => {
          Jo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Xu(e, s);
  } else
    Dh(e);
}
function Xu(e, t, n) {
  Ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = Wf(t)), Dh(e);
}
function Dh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || mn);
  {
    const a = os(e);
    bi();
    try {
      zg(e);
    } finally {
      yi(), a();
    }
  }
}
const vm = {
  get(e, t) {
    return Mt(e, "get", ""), e[t];
  }
};
function $h(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, vm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wf(eg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in kr)
        return kr[n](e);
    },
    has(t, n) {
      return n in t || n in kr;
    }
  })) : e.proxy;
}
function gm(e, t = !0) {
  return Ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mm(e) {
  return Ne(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ sg(e, t, qr);
function Xt(e, t, n) {
  try {
    Xs(-1);
    const i = arguments.length;
    return i === 2 ? Xe(t) && !we(t) ? Gr(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Gr(n) && (n = [n]), _e(e, t, n));
  } finally {
    Xs(1);
  }
}
const bm = "3.5.42", ym = mn;
let mc;
const Zu = typeof window < "u" && window.trustedTypes;
if (Zu)
  try {
    mc = /* @__PURE__ */ Zu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mh = mc ? (e) => mc.createHTML(e) : (e) => e, _m = "http://www.w3.org/2000/svg", wm = "http://www.w3.org/1998/Math/MathML", ci = typeof document < "u" ? document : null, Ju = ci && /* @__PURE__ */ ci.createElement("template"), Sm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ci.createElementNS(_m, e) : t === "mathml" ? ci.createElementNS(wm, e) : n ? ci.createElement(e, { is: n }) : ci.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ci.createTextNode(e),
  createComment: (e) => ci.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ci.querySelector(e),
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
      Ju.innerHTML = Mh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Ju.content;
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
}, Ni = "transition", cr = "animation", Yr = /* @__PURE__ */ Symbol("_vtc"), Fh = {
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
}, Cm = /* @__PURE__ */ vt(
  {},
  nh,
  Fh
), Tm = (e) => (e.displayName = "Transition", e.props = Cm, e), Em = /* @__PURE__ */ Tm(
  (e, { slots: t }) => Xt(Tg, Am(e), t)
), ta = (e, t = []) => {
  we(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Qu = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Am(e) {
  const t = {};
  for (const J in e)
    J in Fh || (t[J] = e[J]);
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
    appearActiveClass: d = s,
    appearToClass: u = o,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: S = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, O = km(a), A = O && O[0], L = O && O[1], {
    onBeforeEnter: R,
    onEnter: M,
    onEnterCancelled: K,
    onLeave: F,
    onLeaveCancelled: le,
    onBeforeAppear: ne = R,
    onAppear: P = M,
    onAppearCancelled: ce = K
  } = t, X = (J, te, D, $) => {
    J._enterCancelled = $, na(J, te ? u : o), na(J, te ? d : s), D && D();
  }, ae = (J, te) => {
    J._isLeaving = !1, na(J, h), na(J, E), na(J, S), te && te();
  }, me = (J) => (te, D) => {
    const $ = J ? P : M, Y = () => X(te, J, D);
    ta($, [te, Y]), ed(() => {
      na(te, J ? l : r), ri(te, J ? u : o), Qu($) || td(te, i, A, Y);
    });
  };
  return vt(t, {
    onBeforeEnter(J) {
      ta(R, [J]), ri(J, r), ri(J, s);
    },
    onBeforeAppear(J) {
      ta(ne, [J]), ri(J, l), ri(J, d);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(J, te) {
      J._isLeaving = !0;
      const D = () => ae(J, te);
      ri(J, h), J._enterCancelled ? (ri(J, S), ad(J)) : (ad(J), ri(J, S)), ed(() => {
        J._isLeaving && (na(J, h), ri(J, E), Qu(F) || td(J, i, L, D));
      }), ta(F, [J, D]);
    },
    onEnterCancelled(J) {
      X(J, !1, void 0, !0), ta(K, [J]);
    },
    onAppearCancelled(J) {
      X(J, !0, void 0, !0), ta(ce, [J]);
    },
    onLeaveCancelled(J) {
      ae(J), ta(le, [J]);
    }
  });
}
function km(e) {
  if (e == null)
    return null;
  if (Xe(e))
    return [xl(e.enter), xl(e.leave)];
  {
    const t = xl(e);
    return [t, t];
  }
}
function xl(e) {
  return Tv(e);
}
function ri(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yr] || (e[Yr] = /* @__PURE__ */ new Set())).add(t);
}
function na(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Yr];
  n && (n.delete(t), n.size || (e[Yr] = void 0));
}
function ed(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Om = 0;
function td(e, t, n, i) {
  const a = e._endId = ++Om, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Nm(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, S), r();
  }, S = (E) => {
    E.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, S);
}
function Nm(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Ni}Delay`), r = i(`${Ni}Duration`), s = nd(a, r), o = i(`${cr}Delay`), l = i(`${cr}Duration`), d = nd(o, l);
  let u = null, h = 0, S = 0;
  t === Ni ? s > 0 && (u = Ni, h = s, S = r.length) : t === cr ? d > 0 && (u = cr, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Ni : cr : null, S = u ? u === Ni ? r.length : l.length : 0);
  const E = u === Ni && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ni}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function nd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => id(n) + id(e[i])));
}
function id(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ad(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function xm(e, t, n) {
  const i = e[Yr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qs = /* @__PURE__ */ Symbol("_vod"), zh = /* @__PURE__ */ Symbol("_vsh"), Va = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Qs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ur(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ur(e, !0), i.enter(e)) : i.leave(e, () => {
      ur(e, !1);
    }) : ur(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ur(e, t);
  }
};
function ur(e, t) {
  e.style.display = t ? e[Qs] : "none", e[zh] = !t;
}
const Uh = /* @__PURE__ */ Symbol("");
function Lm(e) {
  const t = ya();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => eo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? eo(t.ce, a) : bc(t.subTree, a), n(a);
  };
  uh(() => {
    Xf(i);
  }), Vi(() => {
    pt(i, mn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), rs(() => a.disconnect());
  });
}
function bc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      bc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    eo(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => bc(n, t));
  else if (e.type === Fs) {
    let { el: n, anchor: i } = e;
    for (; n && (eo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function eo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Iv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Uh] = i;
  }
}
const Rm = /(?:^|;)\s*display\s*:/;
function Im(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && yr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && yr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Dm(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || yr(i, s, o) : yr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Uh];
      s && (n += ";" + s), i.cssText = n, r = Rm.test(n);
    }
  } else t && e.removeAttribute("style");
  Qs in e && (e[Qs] = r ? i.display : "", e[zh] && (i.display = "none"));
}
const ks = /\s*!important$/;
function yr(e, t, n) {
  if (we(n))
    n.forEach((i) => yr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ks.test(n) ? e.setProperty(t, n.replace(ks, ""), "important") : e.setProperty(t, n);
  else {
    const i = Pm(e, t);
    ks.test(n) ? e.setProperty(
      Si(i),
      n.replace(ks, ""),
      "important"
    ) : e[i] = n;
  }
}
const rd = ["Webkit", "Moz", "ms"], Ll = {};
function Pm(e, t) {
  const n = Ll[t];
  if (n)
    return n;
  let i = Ut(t);
  if (i !== "filter" && i in e)
    return Ll[t] = i;
  i = Wo(i);
  for (let a = 0; a < rd.length; a++) {
    const r = rd[a] + i;
    if (r in e)
      return Ll[t] = r;
  }
  return t;
}
function Dm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const sd = "http://www.w3.org/1999/xlink";
function od(e, t, n, i, a, r = xv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sd, t.slice(6, t.length)) : e.setAttributeNS(sd, t, n) : n == null || r && !Of(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function ld(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mh(n) : n);
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
    o === "boolean" ? n = Of(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ca(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function $m(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const cd = /* @__PURE__ */ Symbol("_vei");
function Mm(e, t, n, i, a = null) {
  const r = e[cd] || (e[cd] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Um(t);
    if (i) {
      const d = r[t] = jm(
        i,
        a
      );
      ca(e, o, d, l);
    } else s && ($m(e, o, s, l), r[t] = void 0);
  }
}
const Fm = /(Once|Passive|Capture)$/, zm = /^on:?(?:Once|Passive|Capture)$/;
function Um(e) {
  let t, n;
  for (; (n = e.match(Fm)) && !zm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Si(e.slice(2)), t];
}
let Rl = 0;
const Bm = /* @__PURE__ */ Promise.resolve(), Hm = () => Rl || (Bm.then(() => Rl = 0), Rl = Date.now());
function jm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (we(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const d = s[l];
        d && yn(
          d,
          t,
          5,
          o
        );
      }
    } else
      yn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Hm(), n;
}
const ud = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? xm(e, i, s) : t === "style" ? Im(e, n, i) : Vo(t) ? Go(t) || Mm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gm(e, t, i, s)) ? (ld(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && od(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Km(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? ld(e, Ut(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), od(e, t, i, s));
};
function Gm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ud(t) && Ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ud(t) && tt(n) ? !1 : t in e;
}
function Km(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ut(t);
  return Array.isArray(n) ? n.some((a) => Ut(a) === i) : Object.keys(n).some((a) => Ut(a) === i);
}
const to = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return we(t) ? (n) => Ms(t, n) : t;
};
function Wm(e) {
  e.target.composing = !0;
}
function dd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const da = /* @__PURE__ */ Symbol("_assign"), Os = /* @__PURE__ */ Symbol("_initialValue");
function Il(e, t, n) {
  return t && (e = e.trim()), n && (e = qo(e)), e;
}
const Cn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Os] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Os] = e.defaultValue.replace(/\r\n?/g, `
`))), e[da] = to(a);
    const r = i || a.props && a.props.type === "number";
    ca(e, t ? "change" : "input", (s) => {
      s.target.composing || e[da](Il(e.value, n, r));
    }), (n || r) && ca(e, "change", () => {
      e.value = Il(e.value, n, r);
    }), t || (ca(e, "compositionstart", Wm), ca(e, "compositionend", dd), ca(e, "change", dd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Os];
    delete e[Os], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[da](Il(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[da] = to(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? qo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Hn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ca(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? qo(no(l)) : no(l)
      ), r = e.multiple, s = r ? ma(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? we(s) ? a.slice() : a : s
      ];
      try {
        e[da](s);
      } finally {
        vn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[da] = to(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    fd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[da] = to(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !qm(t, n[1], n[0])) && fd(e, t);
  }
};
function qm(e, t, n) {
  if (!n || we(e)) return Bi(e, t);
  if (ma(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function fd(e, t) {
  const n = e.multiple, i = we(t);
  if (!(n && !i && !ma(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = no(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Rv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Bi(no(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function no(e) {
  return "_value" in e ? e._value : e.value;
}
const Ym = ["ctrl", "shift", "alt", "meta"], Xm = {
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
  exact: (e, t) => Ym.some((n) => e[`${n}Key`] && !t.includes(n))
}, We = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Xm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Zm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, At = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = Si(a.key);
    if (t.some(
      (s) => s === r || Zm[s] === r
    ))
      return e(a);
  }));
}, Jm = /* @__PURE__ */ vt({ patchProp: Vm }, Sm);
let hd;
function Qm() {
  return hd || (hd = am(Jm));
}
const eb = ((...e) => {
  const t = Qm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = nb(i);
    if (!a) return;
    const r = t._component;
    !Ne(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, tb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function tb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nb(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function nu(e, t, n) {
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
function pd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function ib(e) {
  if (Array.isArray(e)) return e;
}
function ab(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, d = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (u) {
      d = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw a;
      }
    }
    return o;
  }
}
function rb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sb(e, t) {
  return ib(e) || ab(e, t) || ob(e, t) || rb();
}
function ob(e, t) {
  if (e) {
    if (typeof e == "string") return pd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pd(e, t) : void 0;
  }
}
const Bh = Object.entries, vd = Object.setPrototypeOf, lb = Object.isFrozen, cb = Object.getPrototypeOf, ub = Object.getOwnPropertyDescriptor;
let bt = Object.freeze, _t = Object.seal, Fa = Object.create, Hh = typeof Reflect < "u" && Reflect, yc = Hh.apply, _c = Hh.construct;
bt || (bt = function(t) {
  return t;
});
_t || (_t = function(t) {
  return t;
});
yc || (yc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
_c || (_c = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const sa = gt(Array.prototype.forEach), db = gt(Array.prototype.lastIndexOf), gd = gt(Array.prototype.pop), dr = gt(Array.prototype.push), fb = gt(Array.prototype.splice), Ga = Array.isArray, _r = gt(String.prototype.toLowerCase), Pl = gt(String.prototype.toString), md = gt(String.prototype.match), fr = gt(String.prototype.replace), bd = gt(String.prototype.indexOf), hb = gt(String.prototype.trim), pb = gt(Number.prototype.toString), vb = gt(Boolean.prototype.toString), yd = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), _d = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), Zt = gt(Object.prototype.hasOwnProperty), hr = gt(Object.prototype.toString), Pt = gt(RegExp.prototype.test), ia = gb(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return yc(e, t, i);
  };
}
function gb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return _c(e, n);
  };
}
function Ve(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _r;
  if (vd && vd(e, null), !Ga(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (lb(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function mb(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = Fa(null);
  for (const i of Bh(e)) {
    var n = sb(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ga(r) ? t[a] = mb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function bb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return pb(e);
    case "boolean":
      return vb(e);
    case "bigint":
      return yd ? yd(e) : "0";
    case "symbol":
      return _d ? _d(e) : "Symbol()";
    case "undefined":
      return hr(e);
    case "function":
    case "object": {
      if (e === null)
        return hr(e);
      const t = e, n = Tn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : hr(i);
      }
      return hr(e);
    }
    default:
      return hr(e);
  }
}
function Tn(e, t) {
  for (; e !== null; ) {
    const i = ub(e, t);
    if (i) {
      if (i.get)
        return gt(i.get);
      if (typeof i.value == "function")
        return gt(i.value);
    }
    e = cb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function yb(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const wd = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Dl = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $l = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _b = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ml = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), wb = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sd = bt(["#text"]), Cd = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Fl = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Td = bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ns = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sb = _t(/{{[\w\W]*|^[\w\W]*}}/g), Cb = _t(/<%[\w\W]*|^[\w\W]*%>/g), Tb = _t(/\${[\w\W]*/g), Eb = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ab = _t(/^aria-[\-\w]+$/), Ed = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kb = _t(/^(?:\w+script|data):/i), Ob = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Nb = _t(/^html$/i), xb = _t(/^[a-z][.\w]*(-[.\w]+)+$/i), Ad = _t(/<[/\w!]/g), kd = _t(/<[/\w]/g), Lb = _t(/<\/no(script|embed|frames)/i), Rb = _t(/\/>/i), nn = {
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
}, jh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Ib = bt(Ve({}, jh)), Pb = (function() {
  const e = {};
  return sa(jh, (t) => {
    e[t] = _t(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), bt(e);
})(), Db = function() {
  return typeof window > "u" ? null : window;
}, $b = function(t, n) {
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
}, Od = function() {
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
}, xi = function(t, n, i, a) {
  return Zt(t, n) && Ga(t[n]) ? Ve(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, zl = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function Vh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Db();
  const t = (Z) => Vh(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Tn(S, "cloneNode"), O = Tn(S, "remove"), A = Tn(S, "nextSibling"), L = Tn(S, "childNodes"), R = Tn(S, "parentNode"), M = Tn(S, "shadowRoot"), K = Tn(S, "attributes"), F = s && s.prototype ? Tn(s.prototype, "nodeType") : null, le = s && s.prototype ? Tn(s.prototype, "nodeName") : null, ne = s && s.prototype ? Tn(s.prototype, "ownerDocument") : null, P = function(w) {
    return F ? F(w) : w.nodeType;
  }, ce = function(w) {
    return le ? le(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let X, ae = "", me, J = !1, te = 0;
  const D = function() {
    if (te > 0)
      throw ia('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(w) {
    D(), te++;
    try {
      return X.createHTML(w);
    } finally {
      te--;
    }
  }, Y = function(w) {
    D(), te++;
    try {
      return X.createScriptURL(w);
    } finally {
      te--;
    }
  }, re = function() {
    return J || (me = $b(h, a), J = !0), me;
  }, ie = n, he = ie.implementation, de = ie.createNodeIterator, Te = ie.createDocumentFragment, ge = ie.getElementsByTagName, je = i.importNode;
  let Ee = Od();
  t.isSupported = typeof Bh == "function" && typeof R == "function" && he && he.createHTMLDocument !== void 0;
  const nt = Sb, ot = Cb, lt = Tb, wt = Eb, it = Ab, ln = kb, U = Ob, v = xb;
  let C = Ed, k = null;
  const N = Ve({}, [...wd, ...Dl, ...$l, ...Ml, ...Sd]);
  let x = null;
  const z = Ve({}, [...Cd, ...Fl, ...Td, ...Ns]);
  let W = Object.seal(Fa(null, {
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
  })), V = null, Q = null;
  const j = Object.seal(Fa(null, {
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
  let ye = !0, se = !0, be = !1, ve = !0, xe = !1, $e = !0, Pe = !1, Qe = !1, at = null, St = null, xt = !1, Wt = !1, Jn = !1, dt = !1, jt = !0, Ti = !1;
  const Qn = "user-content-";
  let Wi = !0, qi = !1, xn = {}, ei = null;
  const cs = Ve({}, [
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
  let Xa = null;
  const Za = Ve({}, ["audio", "video", "img", "source", "image", "track"]);
  let us = null;
  const wa = Ve({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ei = "http://www.w3.org/1998/Math/MathML", Yi = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let ti = Jt, Sa = !1, Ca = null;
  const ds = Ve({}, [Ei, Yi, Jt], Pl), fs = bt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ja = Ve({}, fs);
  const Qa = bt(["annotation-xml"]);
  let Lt = Ve({}, Qa);
  const hl = Ve({}, ["title", "style", "font", "a", "script"]);
  let _n = null;
  const pl = ["application/xhtml+xml", "text/html"], Ta = "text/html";
  let rt = null, Ln = null;
  const Ea = n.createElement("form"), er = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Aa = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = an(w), _n = // eslint-disable-next-line unicorn/prefer-includes
    pl.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ta : w.PARSER_MEDIA_TYPE, rt = _n === "application/xhtml+xml" ? Pl : _r, k = xi(w, "ALLOWED_TAGS", N, {
      transform: rt
    }), x = xi(w, "ALLOWED_ATTR", z, {
      transform: rt
    }), Ca = xi(w, "ALLOWED_NAMESPACES", ds, {
      transform: Pl
    }), us = xi(w, "ADD_URI_SAFE_ATTR", wa, {
      transform: rt,
      base: wa
    }), Xa = xi(w, "ADD_DATA_URI_TAGS", Za, {
      transform: rt,
      base: Za
    }), ei = xi(w, "FORBID_CONTENTS", cs, {
      transform: rt
    }), V = xi(w, "FORBID_TAGS", an({}), {
      transform: rt
    }), Q = xi(w, "FORBID_ATTR", an({}), {
      transform: rt
    }), xn = Zt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? an(w.USE_PROFILES) : w.USE_PROFILES : !1, ye = w.ALLOW_ARIA_ATTR !== !1, se = w.ALLOW_DATA_ATTR !== !1, be = w.ALLOW_UNKNOWN_PROTOCOLS || !1, ve = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, Pe = w.WHOLE_DOCUMENT || !1, Wt = w.RETURN_DOM || !1, Jn = w.RETURN_DOM_FRAGMENT || !1, dt = w.RETURN_TRUSTED_TYPE || !1, xt = w.FORCE_BODY || !1, jt = w.SANITIZE_DOM !== !1, Ti = w.SANITIZE_NAMED_PROPS || !1, Wi = w.KEEP_CONTENT !== !1, qi = w.IN_PLACE || !1, C = yb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Ed, ti = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Jt, Ja = zl(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ve({}, fs)
      // Default built-in map
    ), Lt = zl(
      w,
      "HTML_INTEGRATION_POINTS",
      () => Ve({}, Qa)
      // Default built-in map
    );
    const I = zl(w, "CUSTOM_ELEMENT_HANDLING", () => Fa(null));
    if (W = Fa(null), Zt(I, "tagNameCheck") && er(I.tagNameCheck) && (W.tagNameCheck = I.tagNameCheck), Zt(I, "attributeNameCheck") && er(I.attributeNameCheck) && (W.attributeNameCheck = I.attributeNameCheck), Zt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), _t(W), xe && (se = !1), Jn && (Wt = !0), xn && (k = Ve({}, Sd), x = Fa(null), xn.html === !0 && (Ve(k, wd), Ve(x, Cd)), xn.svg === !0 && (Ve(k, Dl), Ve(x, Fl), Ve(x, Ns)), xn.svgFilters === !0 && (Ve(k, $l), Ve(x, Fl), Ve(x, Ns)), xn.mathMl === !0 && (Ve(k, Ml), Ve(x, Td), Ve(x, Ns))), j.tagCheck = null, j.attributeCheck = null, Zt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? j.tagCheck = w.ADD_TAGS : Ga(w.ADD_TAGS) && (k === N && (k = an(k)), Ve(k, w.ADD_TAGS, rt))), Zt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? j.attributeCheck = w.ADD_ATTR : Ga(w.ADD_ATTR) && (x === z && (x = an(x)), Ve(x, w.ADD_ATTR, rt))), Zt(w, "ADD_FORBID_CONTENTS") && Ga(w.ADD_FORBID_CONTENTS) && (ei === cs && (ei = an(ei)), Ve(ei, w.ADD_FORBID_CONTENTS, rt)), Wi && (k["#text"] = !0), Pe && Ve(k, ["html", "head", "body"]), k.table && (Ve(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        ae = $("");
      } catch (oe) {
        throw X = G, oe;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, ae = "") : (X === void 0 && (X = re()), X && typeof ae == "string" && (ae = $("")));
    bt && bt(w), Ln = w;
  }, ka = Ve({}, [...Dl, ...$l, ..._b]), qt = Ve({}, [...Ml, ...wb]), Oa = function(w, I, G) {
    return I.namespaceURI === Jt ? w === "svg" : I.namespaceURI === Ei ? w === "svg" && (G === "annotation-xml" || Ja[G]) : !!ka[w];
  }, hs = function(w, I, G) {
    return I.namespaceURI === Jt ? w === "math" : I.namespaceURI === Yi ? w === "math" && Lt[G] : !!qt[w];
  }, vl = function(w, I, G) {
    return I.namespaceURI === Yi && !Lt[G] || I.namespaceURI === Ei && !Ja[G] ? !1 : !qt[w] && (hl[w] || !ka[w]);
  }, gl = function(w) {
    let I = R(w);
    (!I || !I.tagName) && (I = {
      namespaceURI: ti,
      tagName: "template"
    });
    const G = _r(w.tagName), oe = _r(I.tagName);
    return Ca[w.namespaceURI] ? w.namespaceURI === Yi ? Oa(G, I, oe) : w.namespaceURI === Ei ? hs(G, I, oe) : w.namespaceURI === Jt ? vl(G, I, oe) : !!(_n === "application/xhtml+xml" && Ca[w.namespaceURI]) : !1;
  }, Rn = function(w) {
    dr(t.removed, {
      element: w
    });
    try {
      R(w).removeChild(w);
    } catch {
      if (O(w), !R(w))
        throw ia("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ae = function(w, I, G) {
    try {
      w.removeAttributeNode(I);
    } catch {
      try {
        w.removeAttribute(G);
      } catch {
      }
    }
  }, cn = function(w) {
    Rt(w);
    const I = L(w);
    if (I) {
      const oe = [];
      sa(I, (pe) => {
        dr(oe, pe);
      }), sa(oe, (pe) => {
        try {
          O(pe);
        } catch {
        }
      });
    }
    const G = K(w);
    if (G)
      for (let oe = G.length - 1; oe >= 0; --oe) {
        const pe = G[oe], Se = pe && pe.name;
        typeof Se == "string" && Ae(w, pe, Se);
      }
  }, st = function(w, I, G) {
    if (!G)
      try {
        G = I.getAttributeNode(w);
      } catch {
        G = null;
      }
    dr(t.removed, {
      attribute: G || null,
      from: I
    });
    try {
      G ? I.removeAttributeNode(G) : I.removeAttribute(w);
    } catch {
      try {
        I.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Wt || Jn)
        try {
          Rn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(w, "");
        } catch {
        }
  }, ni = function(w) {
    const I = K(w);
    if (I)
      for (let G = I.length - 1; G >= 0; --G) {
        const oe = I[G], pe = oe && oe.name;
        typeof pe != "string" || x[rt(pe)] || Ae(w, oe, pe);
      }
  }, Rt = function(w) {
    const I = [w];
    for (; I.length > 0; ) {
      const G = I.pop();
      P(G) === nn.element && ni(G);
      const pe = L(G);
      if (pe)
        for (let Se = pe.length - 1; Se >= 0; --Se)
          I.push(pe[Se]);
    }
  }, mt = function(w, I) {
    return $e ? w === "patchsrc" ? !0 : w === "for" && I !== "label" && I !== "output" : !1;
  }, ps = function(w) {
    if (!$e)
      return;
    const I = [w];
    for (; I.length > 0; ) {
      const G = I.pop(), oe = P(G);
      if (oe === nn.processingInstruction || oe === nn.comment && Pt(kd, G.data)) {
        try {
          O(G);
        } catch {
        }
        continue;
      }
      if (oe === nn.element) {
        const Se = G, Me = rt(ce(G));
        try {
          Se.hasAttribute && Se.hasAttribute("patchsrc") && Se.removeAttribute("patchsrc"), Se.hasAttribute && Se.hasAttribute("for") && mt("for", Me) && Se.removeAttribute("for");
        } catch {
        }
      }
      const pe = L(G);
      if (pe)
        for (let Se = pe.length - 1; Se >= 0; --Se)
          I.push(pe[Se]);
    }
  }, In = function(w) {
    let I = null, G = null;
    if (xt)
      w = "<remove></remove>" + w;
    else {
      const Se = md(w, /^[\r\n\t ]+/);
      G = Se && Se[0];
    }
    _n === "application/xhtml+xml" && ti === Jt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const oe = X ? $(w) : w;
    if (ti === Jt)
      try {
        I = new u().parseFromString(oe, _n);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = he.createDocument(ti, "template", null);
      try {
        I.documentElement.innerHTML = Sa ? ae : oe;
      } catch {
      }
    }
    const pe = I.body || I.documentElement;
    return w && G && pe.insertBefore(n.createTextNode(G), pe.childNodes[0] || null), ti === Jt ? ge.call(I, Pe ? "html" : "body")[0] : Pe ? I.documentElement : pe;
  }, Pn = function(w) {
    const I = ne ? ne(w) : w.ownerDocument;
    return de.call(
      I || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ai = function(w) {
    return w = fr(w, nt, " "), w = fr(w, ot, " "), w = fr(w, lt, " "), w;
  }, Qt = function(w) {
    var I;
    w.normalize();
    const G = ne ? ne(w) : w.ownerDocument, oe = de.call(
      G || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let pe = oe.nextNode();
    for (; pe; )
      pe.data = Ai(pe.data), pe = oe.nextNode();
    const Se = (I = w.querySelectorAll) === null || I === void 0 ? void 0 : I.call(w, "template");
    Se && sa(Se, (Me) => {
      Dn(Me.content) && Qt(Me.content);
    });
  }, ii = function(w) {
    const I = le ? le(w) : null;
    return typeof I != "string" || rt(I) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== K(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== F(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== L(w);
  }, Dn = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return F(w) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, wn = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof F(w) == "number";
    } catch {
      return !1;
    }
  };
  function Yt(Z, w, I) {
    Z.length !== 0 && sa(Z, (G) => {
      G.call(t, w, I, Ln);
    });
  }
  const $n = function(w, I) {
    return !!($e && w.hasChildNodes() && !wn(w.firstElementChild) && Pt(Ad, w.textContent) && Pt(Ad, w.innerHTML) || $e && w.namespaceURI === Jt && Ib[I] && (wn(w.firstElementChild) || typeof w.textContent == "string" && Pt(Pb[I], w.textContent)) || w.nodeType === nn.processingInstruction || $e && w.nodeType === nn.comment && Pt(kd, w.data));
  }, Mn = function(w, I) {
    if (w instanceof RegExp)
      return Pt(w, I);
    if (w instanceof Function) {
      for (var G = arguments.length, oe = new Array(G > 2 ? G - 2 : 0), pe = 2; pe < G; pe++)
        oe[pe - 2] = arguments[pe];
      return !!w(I, ...oe);
    }
    return !1;
  }, Na = function(w, I, G) {
    if (!V[I] && tr(I) && Mn(W.tagNameCheck, I))
      return !1;
    if (Wi && !ei[I]) {
      const oe = R(w), pe = L(w);
      if (pe && oe) {
        const Se = pe.length;
        for (let Me = Se - 1; Me >= 0; --Me) {
          const Je = w === G ? E(pe[Me], !0) : pe[Me];
          oe.insertBefore(Je, A(w));
        }
      }
    }
    return Rn(w), !0;
  }, Xi = function(w, I, G, oe) {
    return w.length === 0 ? I : I === G || I === oe ? an(I) : I;
  }, vs = function(w, I) {
    return w === I || R(w) !== null ? !1 : (qi && Rt(w), !0);
  }, gs = function(w, I) {
    if (Yt(Ee.beforeSanitizeElements, w, null), vs(w, I))
      return !0;
    if (ii(w))
      return Rn(w), !0;
    const G = rt(ce(w));
    if (k = Xi(Ee.uponSanitizeElement, k, N, at), Yt(Ee.uponSanitizeElement, w, {
      tagName: G,
      allowedTags: k
    }), vs(w, I))
      return !0;
    if ($n(w, G))
      return Rn(w), !0;
    if (V[G] || !(j.tagCheck instanceof Function && j.tagCheck(G)) && !k[G]) {
      const pe = Na(w, G, I);
      return pe === !1 && Yt(Ee.afterSanitizeElements, w, null), pe;
    }
    if (P(w) === nn.element && !gl(w) || (G === "noscript" || G === "noembed" || G === "noframes") && Pt(Lb, w.innerHTML))
      return Rn(w), !0;
    if (xe && w.nodeType === nn.text) {
      const pe = Ai(w.textContent);
      w.textContent !== pe && (dr(t.removed, {
        element: w.cloneNode()
      }), w.textContent = pe);
    }
    return Yt(Ee.afterSanitizeElements, w, null), !1;
  }, Zi = function(w, I, G) {
    if (Q[I] || mt(I, w) || jt && (I === "id" || I === "name") && (G in n || G in Ea))
      return !1;
    const oe = x[I] || j.attributeCheck instanceof Function && j.attributeCheck(I, w);
    return se && Pt(wt, I) || ye && Pt(it, I) ? !0 : oe ? us[I] || Pt(C, fr(G, U, "")) || (I === "src" || I === "xlink:href" || I === "href") && w !== "script" && bd(G, "data:") === 0 && Xa[w] || be && !Pt(ln, fr(G, U, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      tr(w) && Mn(W.tagNameCheck, w) && Mn(W.attributeNameCheck, I, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && W.allowCustomizedBuiltInElements && Mn(W.tagNameCheck, G)
    );
  }, ms = Ve({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), tr = function(w) {
    return !ms[_r(w)] && Pt(v, w);
  }, ml = function(w, I, G, oe) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !G)
      switch (h.getAttributeType(w, I)) {
        case "TrustedHTML":
          return $(oe);
        case "TrustedScriptURL":
          return Y(oe);
      }
    return oe;
  }, bl = function(w, I, G, oe) {
    try {
      G ? w.setAttributeNS(G, I, oe) : w.setAttribute(I, oe), ii(w) ? Rn(w) : gd(t.removed);
    } catch {
      st(I, w);
    }
  }, bs = function(w) {
    Yt(Ee.beforeSanitizeAttributes, w, null);
    const I = w.attributes;
    if (!I || ii(w))
      return;
    x = Xi(Ee.uponSanitizeAttribute, x, z, St);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let oe = I.length;
    const pe = rt(w.nodeName);
    for (; oe--; ) {
      const Se = I[oe], Me = Se.name, Je = Se.namespaceURI, Ct = Se.value, It = rt(Me), Ji = Ct;
      let ut = Me === "value" ? Ji : hb(Ji);
      if (G.attrName = It, G.attrValue = ut, G.keepAttr = !0, G.forceKeepAttr = void 0, Yt(Ee.uponSanitizeAttribute, w, G), ut = G.attrValue, Ti && (It === "id" || It === "name") && bd(ut, Qn) !== 0 && (st(Me, w, Se), ut = Qn + ut), $e && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ut)) {
        st(Me, w, Se);
        continue;
      }
      if (It === "attributename" && md(ut, "href")) {
        st(Me, w, Se);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          st(Me, w, Se);
          continue;
        }
        if (!ve && Pt(Rb, ut)) {
          st(Me, w, Se);
          continue;
        }
        if (xe && (ut = Ai(ut)), !Zi(pe, It, ut)) {
          st(Me, w, Se);
          continue;
        }
        ut = ml(pe, It, Je, ut), ut !== Ji && bl(w, Me, Je, ut);
      }
    }
    Yt(Ee.afterSanitizeAttributes, w, null);
  }, en = function(w) {
    let I = null;
    const G = Pn(w);
    for (Yt(Ee.beforeSanitizeShadowDOM, w, null); I = G.nextNode(); )
      if (Yt(Ee.uponSanitizeShadowNode, I, null), gs(I, w), bs(I), Dn(I.content) && en(I.content), P(I) === nn.element) {
        const oe = M(I);
        Dn(oe) && (nr(oe), en(oe));
      }
    Yt(Ee.afterSanitizeShadowDOM, w, null);
  }, nr = function(w) {
    const I = [{
      node: w,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const G = I.pop();
      if (G.shadow) {
        en(G.shadow);
        continue;
      }
      const oe = G.node, Se = P(oe) === nn.element, Me = L(oe);
      if (Me)
        for (let Je = Me.length - 1; Je >= 0; --Je)
          I.push({
            node: Me[Je],
            shadow: null
          });
      if (Se) {
        const Je = le ? le(oe) : null;
        if (typeof Je == "string" && rt(Je) === "template") {
          const Ct = oe.content;
          Dn(Ct) && I.push({
            node: Ct,
            shadow: null
          });
        }
      }
      if (Se) {
        const Je = M(oe);
        Dn(Je) && I.push({
          node: null,
          shadow: Je
        }, {
          node: Je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, G = null, oe = null, pe = null;
    if (Sa = !Z, Sa && (Z = "<!-->"), typeof Z != "string" && !wn(Z) && (Z = bb(Z), typeof Z != "string"))
      throw ia("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Qe ? (k = at, x = St) : Aa(w), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = an(k)), Ee.uponSanitizeAttribute.length > 0 && (x = an(x)), t.removed = [];
    const Se = qi && typeof Z != "string" && wn(Z);
    if (Se) {
      ps(Z);
      const Ct = ce(Z);
      if (typeof Ct == "string") {
        const It = rt(Ct);
        if (!k[It] || V[It])
          throw cn(Z), ia("root node is forbidden and cannot be sanitized in-place");
      }
      if (ii(Z))
        throw cn(Z), ia("root node is clobbered and cannot be sanitized in-place");
      try {
        nr(Z);
      } catch (It) {
        throw cn(Z), It;
      }
    } else if (wn(Z))
      I = In("<!---->"), G = I.ownerDocument.importNode(Z, !0), G.nodeType === nn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? I = G : I.appendChild(G), nr(G);
    else {
      if (!Wt && !xe && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return X && dt ? $(Z) : Z;
      if (I = In(Z), !I)
        return Wt ? null : dt ? ae : "";
    }
    I && xt && Rn(I.firstChild);
    const Me = Se ? Z : I;
    try {
      const Ct = Pn(Me);
      for (; oe = Ct.nextNode(); )
        gs(oe, Me), bs(oe), Dn(oe.content) && en(oe.content);
    } catch (Ct) {
      throw Se && (cn(Z), sa(t.removed, (It) => {
        It.element && Rt(It.element);
      })), Ct;
    }
    if (Se)
      return sa(t.removed, (Ct) => {
        Ct.element && Rt(Ct.element);
      }), xe && Qt(Z), Z;
    if (Wt) {
      if (xe && Qt(I), Jn)
        for (pe = Te.call(I.ownerDocument); I.firstChild; )
          pe.appendChild(I.firstChild);
      else
        pe = I;
      return (x.shadowroot || x.shadowrootmode) && (pe = je.call(i, pe, !0)), pe;
    }
    let Je = Pe ? I.outerHTML : I.innerHTML;
    return Pe && k["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Pt(Nb, I.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Je), xe && (Je = Ai(Je)), X && dt ? $(Je) : Je;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Aa(Z), Qe = !0, at = k, St = x;
  }, t.clearConfig = function() {
    Ln = null, Qe = !1, at = null, St = null, X = me, ae = "";
  }, t.isValidAttribute = function(Z, w, I) {
    Ln || Aa({});
    const G = rt(Z), oe = rt(w);
    return Zi(G, oe, I);
  }, t.addHook = function(Z, w) {
    typeof w == "function" && Zt(Ee, Z) && dr(Ee[Z], w);
  }, t.removeHook = function(Z, w) {
    if (Zt(Ee, Z)) {
      if (w !== void 0) {
        const I = db(Ee[Z], w);
        return I === -1 ? void 0 : fb(Ee[Z], I, 1)[0];
      }
      return gd(Ee[Z]);
    }
  }, t.removeHooks = function(Z) {
    Zt(Ee, Z) && (Ee[Z] = []);
  }, t.removeAllHooks = function() {
    Ee = Od();
  }, t;
}
var Gh = Vh();
function iu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ul, Nd;
function Mb() {
  if (Nd) return Ul;
  Nd = 1;
  var e = /["'&<>]/;
  Ul = t;
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
  return Ul;
}
var Fb = Mb();
const io = /* @__PURE__ */ iu(Fb);
function zb() {
  return globalThis._nc_l10n_locale;
}
function Ub() {
  return zb().replaceAll(/_/g, "-");
}
function sl() {
  return globalThis._nc_l10n_language;
}
function Bb(e) {
  const t = sl();
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
function Kh(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function m(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, d = (o.sanitize ? Gh.sanitize : l) || l, u = o.escape ? io : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, L, R) => A.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, (M, K) => {
    if (L === void 0 || !(K in L))
      return u(M);
    const F = L[K];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? io : l)(`${F.value}`) : u(M);
  });
  let O = (a?.bundle ?? Kh(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? S(
    O,
    r,
    s
  ) : O);
}
function Vn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Kh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function Hb(e, t = sl()) {
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
class ao {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? ao.GLOBAL_SCOPE_PERSISTENT : ao.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class jb {
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
    return new ao(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Wh(e) {
  return new jb(e);
}
function Vb() {
  try {
    return nu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Bl, xd;
function qh() {
  if (xd) return Bl;
  xd = 1;
  var e = {};
  return Bl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Bl;
}
var Hl, Ld;
function Yh() {
  if (Ld) return Hl;
  Ld = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Hl = {
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
  }, Hl;
}
var xs = { exports: {} }, Rd;
function Gb() {
  return Rd || (Rd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Yh(), r = qh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], O = (L) => {
      for (const [R, M] of E)
        L = L.split(`${R}*`).join(`${R}{0,${M}}`).split(`${R}+`).join(`${R}{1,${M}}`);
      return L;
    }, A = (L, R, M) => {
      const K = O(R), F = h++;
      r(L, F, R), u[L] = F, l[F] = R, d[F] = K, s[F] = new RegExp(R, M ? "g" : void 0), o[F] = new RegExp(K, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(xs, xs.exports)), xs.exports;
}
var jl, Id;
function Kb() {
  if (Id) return jl;
  Id = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return jl = (i) => i ? typeof i != "object" ? e : i : t, jl;
}
var Vl, Pd;
function Wb() {
  if (Pd) return Vl;
  Pd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Vl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Vl;
}
var Gl, Dd;
function Xh() {
  if (Dd) return Gl;
  Dd = 1;
  const e = qh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Yh(), { safeRe: i, t: a } = Gb(), r = Kb(), { compareIdentifiers: s } = Wb(), o = (d, u) => {
    const h = u.split(".");
    if (h.length > d.length)
      return !1;
    for (let S = 0; S < h.length; S++)
      if (s(d[S], h[S]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(u, h) {
      if (h = r(h), u instanceof l) {
        if (u.loose === !!h.loose && u.includePrerelease === !!h.includePrerelease)
          return u;
        u = u.version;
      } else if (typeof u != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof u}".`);
      if (u.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", u, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
      const S = u.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!S)
        throw new TypeError(`Invalid Version: ${u}`);
      if (this.raw = u, this.major = +S[1], this.minor = +S[2], this.patch = +S[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      S[4] ? this.prerelease = S[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const O = +E;
          if (O >= 0 && O < n)
            return O;
        }
        return E;
      }) : this.prerelease = [], this.build = S[5] ? S[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(u) {
      if (e("SemVer.compare", this.version, this.options, u), !(u instanceof l)) {
        if (typeof u == "string" && u === this.version)
          return 0;
        u = new l(u, this.options);
      }
      return u.version === this.version ? 0 : this.compareMain(u) || this.comparePre(u);
    }
    compareMain(u) {
      return u instanceof l || (u = new l(u, this.options)), this.major < u.major ? -1 : this.major > u.major ? 1 : this.minor < u.minor ? -1 : this.minor > u.minor ? 1 : this.patch < u.patch ? -1 : this.patch > u.patch ? 1 : 0;
    }
    comparePre(u) {
      if (u instanceof l || (u = new l(u, this.options)), this.prerelease.length && !u.prerelease.length)
        return -1;
      if (!this.prerelease.length && u.prerelease.length)
        return 1;
      if (!this.prerelease.length && !u.prerelease.length)
        return 0;
      let h = 0;
      do {
        const S = this.prerelease[h], E = u.prerelease[h];
        if (e("prerelease compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const S = this.build[h], E = u.build[h];
        if (e("build compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, S) {
      if (u.startsWith("pre")) {
        if (!h && S === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const E = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (u) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, S);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, S);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, S), this.inc("pre", h, S);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, S), this.inc("pre", h, S);
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
          const E = Number(S) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let O = this.prerelease.length;
            for (; --O >= 0; )
              typeof this.prerelease[O] == "number" && (this.prerelease[O]++, O = -2);
            if (O === -1) {
              if (h === this.prerelease.join(".") && S === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let O = [h, E];
            if (S === !1 && (O = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = O);
            } else
              this.prerelease = O;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Gl = l, Gl;
}
var Kl, $d;
function qb() {
  if ($d) return Kl;
  $d = 1;
  const e = Xh();
  return Kl = (n, i) => new e(n, i).major, Kl;
}
var Yb = qb();
const Md = /* @__PURE__ */ iu(Yb);
var Wl, Fd;
function Xb() {
  if (Fd) return Wl;
  Fd = 1;
  const e = Xh();
  return Wl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Wl;
}
var ql, zd;
function Zb() {
  if (zd) return ql;
  zd = 1;
  const e = Xb();
  return ql = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, ql;
}
var Jb = Zb();
const Qb = /* @__PURE__ */ iu(Jb);
class ey {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Qb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Md(t.getVersion()) !== Md(this.getVersion()) && console.warn(
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
class ty {
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
let pr = null;
function au() {
  return pr !== null ? pr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? pr = new ey(window._nc_event_bus) : pr = window._nc_event_bus = new ty(), pr);
}
function Zh(e, t) {
  au().subscribe(e, t);
}
function ny(e, t) {
  au().unsubscribe(e, t);
}
function mi(e, ...t) {
  au().emit(e, ...t);
}
const Jh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const iy = Object.prototype.toString, ay = (e) => iy.call(e) === "[object Object]", Ia = () => {
}, ry = /* @__PURE__ */ sy();
function sy() {
  var e, t, n;
  return Jh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Yl(e) {
  return Array.isArray(e) ? e : [e];
}
function oy(e, t, n) {
  return pt(e, t, {
    ...n,
    immediate: !0
  });
}
const Qh = Jh ? window : void 0;
function wr(e) {
  var t;
  const n = vi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ka(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = Yl(vi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return oy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => wr(r))) !== null && i !== void 0 ? i : [Qh].filter((r) => r != null),
      Yl(vi(n.value ? e[1] : e[0])),
      Yl(g(n.value ? e[2] : e[1])),
      vi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = ay(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Ud = !1;
function Bd(e, t, n = {}) {
  const { window: i = Qh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ia,
    cancel: Ia,
    trigger: Ia
  } : Ia;
  if (ry && !Ud) {
    Ud = !0;
    const L = { passive: !0 };
    Array.from(i.document.body.children).forEach((R) => R.addEventListener("click", Ia, L)), i.document.documentElement.addEventListener("click", Ia, L);
  }
  let l = !0;
  const d = (L) => vi(a).some((R) => {
    if (typeof R == "string") return Array.from(i.document.querySelectorAll(R)).some((M) => M === L.target || L.composedPath().includes(M));
    {
      const M = wr(R);
      return M && (L.target === M || L.composedPath().includes(M));
    }
  });
  function u(L) {
    const R = vi(L);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function h(L, R) {
    const M = vi(L), K = M.$.subTree && M.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some((F) => F.el === R.target || R.composedPath().includes(F.el));
  }
  const S = (L) => {
    const R = wr(e);
    if (L.target != null && !(!(R instanceof Element) && u(e) && h(e, L)) && !(!R || R === L.target || L.composedPath().includes(R))) {
      if ("detail" in L && L.detail === 0 && (l = !d(L)), !l) {
        l = !0;
        return;
      }
      t(L);
    }
  };
  let E = !1;
  const O = [
    Ka(i, "click", (L) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(L));
    }, {
      passive: !0,
      capture: r
    }),
    Ka(i, "pointerdown", (L) => {
      const R = wr(e);
      l = !d(L) && !!(R && !L.composedPath().includes(R));
    }, { passive: !0 }),
    s && Ka(i, "blur", (L) => {
      setTimeout(() => {
        const R = wr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !R?.contains(i.document.activeElement) && t(L);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => O.forEach((L) => L());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (L) => {
      l = !0, S(L), l = !1;
    }
  } : A;
}
function ly(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ $t({
    x: 0,
    y: 0
  }), d = q(() => o.x - l.x), u = q(() => o.y - l.y), { max: h, abs: S } = Math, E = q(() => h(S(d.value), S(u.value)) >= n), O = /* @__PURE__ */ Gf(!1), A = q(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), L = (P) => [P.touches[0].clientX, P.touches[0].clientY], R = (P, ce) => {
    o.x = P, o.y = ce;
  }, M = (P, ce) => {
    l.x = P, l.y = ce;
  }, K = {
    passive: s,
    capture: !s
  }, F = (P) => {
    O.value && a?.(P, A.value), O.value = !1;
  }, le = [
    Ka(e, "touchstart", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      R(ce, X), M(ce, X), r?.(P);
    }, K),
    Ka(e, "touchmove", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      M(ce, X), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && P.preventDefault(), !O.value && E.value && (O.value = !0), O.value && i?.(P);
    }, K),
    Ka(e, ["touchend", "touchcancel"], F, K)
  ];
  return {
    isSwiping: O,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => le.forEach((P) => P())
  };
}
var cy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Mg(), r = $g(), s = /* @__PURE__ */ Fe([]), o = q(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => s.value.length), d = /* @__PURE__ */ Fe(null), u = /* @__PURE__ */ Fe(!1), h = /* @__PURE__ */ Fe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Fe({
      splitter: null,
      timeoutId: null
    }), E = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), O = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", M));
    }, L = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: N } = C.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - N : x - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, R = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(P(U)), it("resize", { event: U }, !0);
      }));
    }, M = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), it("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, F(U, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || it("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (it("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, N) => (k.size = N === v ? k.max : k.min, N !== v && (C += k.min), k)), s.value[v].size -= C, it("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), it("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, le = (U, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!C && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let N = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = J(v) + s.value[v].size;
      ae(Math.min(Math.max(x + N * i.keyboardStep, 0), 100)), it("resize", { event: U }, !0), it("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, ne = (U, v) => {
      let C = o.value[v];
      C && it("pane-click", {
        event: U,
        index: C.index,
        pane: C
      });
    }, P = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, ce = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, X = (U) => {
      ae(ce(U));
    }, ae = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: J(v),
        nextPanesSize: te(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), N = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      U = Math.max(Math.min(U, N), k);
      let x = [v, v + 1], z = s.value[x[0]] || null, W = s.value[x[1]] || null, V = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = W !== null && W.max < 100 && U <= 100 - (W.max + te(v + 1));
      if (V || Q) {
        V ? (z.size = z.max, W.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, W.min), W.max)) : (z.size = Math.min(Math.max(100 - W.max - C.prevPanesSize - te(v + 1), z.min), z.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = me(C, U);
        if (!j) return;
        ({ sums: C, panesToResize: x } = j), z = s.value[x[0]] || null, W = s.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), W !== null && (W.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, W.min), W.max));
    }, me = (U, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(C).index, U.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((N, x) => {
          x > k[0] && x <= C && (N.size = N.min, U.prevReachedMinPanes += N.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((N, x) => {
          x > 0 && x <= C && (N.size = N.min, U.prevReachedMinPanes += N.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = J(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((N, x) => {
        x > C && x < k[1] && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : te(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((N, x) => {
        x >= C + 1 && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - te(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, J = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), te = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, v, C = !1) => {
      let k = U - 1, N = document.createElement("div");
      N.classList.add("splitpanes__splitter"), C || (N.onmousedown = (x) => L(x, k), typeof window < "u" && "ontouchstart" in window && (N.ontouchstart = (x) => L(x, k)), N.onclick = (x) => K(x, k + 1), i.keyboardStep && (N.setAttribute("tabindex", "0"), N.setAttribute("role", "separator"), N.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), N.onkeydown = (x) => le(x, k))), N.ondblclick = (x) => F(x, k + 1), v.parentNode.insertBefore(N, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, he = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? re(v, C, !0) : v && re(v, C), v++);
    }, de = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, N] of Object.entries(v)) C[k] = N;
    }, Te = !1, ge = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Te && (Te = !0, vn(() => {
        he(), Ee({ addedPane: s.value[v] }), it("pane-add", { pane: s.value[v] }), Te = !1;
      }));
    }, je = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, N) => k.index = N), vn(() => {
        he(), it("pane-remove", { pane: C }), Ee({ removedPane: {
          ...C
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? ot() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? lt(U) : nt(), u.value && it("resized");
    }, nt = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let N of s.value) N.size = Math.max(Math.min(U, N.max), N.min), v -= N.size, N.size >= N.max && C.push(N.id), N.size <= N.min && k.push(N.id);
      Math.abs(v) > 0.1 && wt(v, C, k);
    }, ot = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let x of s.value) U -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && C.push(x.id);
      let N = 100;
      if (U > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - k), x.max), x.min)), N -= x.size;
        N > 0.1 && wt(N, v, C);
      }
    }, lt = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Q) => V + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, N = k > 0 ? (100 - C) / k : 0, x = 0, z = [], W = [];
      for (let V of s.value) x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && W.push(V.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(N, V.max), V.min)), x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && W.push(V.id);
        Math.abs(x) > 0.1 && wt(x, z, W);
      }
    }, wt = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((N, x) => {
        if (U > 0 && !v.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), W = z - N.size;
          U -= W, N.size = z;
        } else if (!C.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), W = z - N.size;
          U -= W, N.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, it = (U, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...C && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((N) => ({
          min: N.min,
          max: N.max,
          size: N.size
        }))
      });
    };
    pt(() => i.firstSplitter, () => he()), pt(() => i.horizontal, (U) => vn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Vi(() => {
      Y(), he(), Ee(), it("ready"), u.value = !0;
    }), Ya(() => u.value = !1);
    let ln = () => {
      let { class: U, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [E.value, U],
        ...v
      }, r.default?.());
    };
    return hn("panes", s), hn("indexedPanes", o), hn("horizontal", q(() => i.horizontal)), hn("requestUpdate", de), hn("onPaneAdd", ge), hn("onPaneRemove", je), hn("onPaneClick", ne), (U, v) => (b(), De(Xc(ln)));
  }
}), uy = {
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
    let t = e, n = Ft("requestUpdate"), i = Ft("onPaneAdd"), a = Ft("horizontal"), r = Ft("onPaneRemove"), s = Ft("onPaneClick"), o = ya()?.uid, l = Ft("indexedPanes"), d = q(() => l.value[o]), u = /* @__PURE__ */ Fe(null), h = q(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = q(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = q(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), O = q(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return pt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), pt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), pt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Vi(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ya(() => r(o)), (A, L) => (b(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: L[0] ||= (R) => g(s)(R, A._.uid),
      style: on(O.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, dy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", fy = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", hy = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", py = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ru = 1024, ep = ru / 2, ro = (e) => document.documentElement.clientWidth < e, tp = /* @__PURE__ */ Fe(ro(ru)), np = /* @__PURE__ */ Fe(ro(ep));
window.addEventListener("resize", () => {
  tp.value = ro(ru), np.value = ro(ep);
}, { passive: !0 });
function ls() {
  return /* @__PURE__ */ Br(tp);
}
function vy() {
  return /* @__PURE__ */ Br(np);
}
class gy {
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
    return m("", t, n, void 0, { bundle: this.bundle });
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
    return Vn("", t, n, i, a, { bundle: this.bundle });
  }
}
class my {
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
    return this.setLanguage(sl().replace("-", "_"));
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
    const t = new gy((n) => Hb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function by() {
  return new my();
}
const ip = by().detectLanguage().build(), yt = (...e) => ip.gettext(...e);
function Gi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== sl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        ip.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const yy = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], _y = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], wy = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Sy = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Cy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Ty = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Ey = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Ay = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], ky = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Oy = /* @__PURE__ */ Symbol(""), [Ny] = window.OC?.config?.version?.split(".") ?? [], ap = Number.parseInt(Ny ?? "35"), xy = ap < 32, Ki = ap < 34, Ly = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Ry() {
  return Ft(Ly, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Iy = { class: "button-vue__wrapper" }, Py = { class: "button-vue__icon" }, Dy = { class: "button-vue__text" }, $y = /* @__PURE__ */ Nt({
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
    const n = e, i = t, { formBoxItemClass: a } = Ry(), r = Ft(Oy, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = q(() => l.value.startsWith("tertiary")), u = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), S = Ft("NcPopover:trigger:attrs", () => ({}), !1), E = q(() => S()), O = q(() => {
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
          ...E.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(L) {
      o.value && i("update:pressed", !n.pressed), i("click", L);
    }
    return (L, R) => (b(), De(Xc(s.value), Ht({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(xy),
          "button-vue--legacy34": g(Ki)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: ke(() => [
        c("span", Iy, [
          c("span", Py, [
            Re(L.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", Dy, [
            Re(L.$slots, "default", {}, () => [
              Oe(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Yn = /* @__PURE__ */ Ze($y, [["__scopeId", "data-v-47ce59a3"]]), My = ["aria-hidden", "aria-label"], Fy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, zy = ["d"], Uy = ["innerHTML"], By = /* @__PURE__ */ Nt({
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
    Lm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Gh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ce(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Uy)) : (b(), T("svg", Fy, [
        c("path", { d: e.path }, null, 8, zy)
      ]))
    ], 10, My));
  }
}), ol = /* @__PURE__ */ Ze(By, [["__scopeId", "data-v-aaedb1c3"]]);
jy();
function Hy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), mi("csrf-token-update", { token: e, _internal: !0 }));
}
function jy() {
  Zh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Hy(e);
  });
}
Wh("public").persist().build();
let Pa;
function Hd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Vy() {
  if (Pa !== void 0)
    return Pa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Hd(e, "data-user");
  return t === null ? (Pa = null, Pa) : (Pa = {
    uid: t,
    displayName: Hd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Pa);
}
var ht = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ht || {});
class Gy {
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
function Ky(e) {
  return new Gy(e);
}
class Wy {
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
    const t = Vy();
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
function qy() {
  return new Wy(Ky);
}
const ga = qy().detectUser().setApp("@nextcloud/vue").build();
function Yy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let rp = "missing-app-name";
try {
  rp = "library";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Xy = rp;
let Zy = "";
try {
  Zy = "0.1.0-alpha.167";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function sp() {
  return Ft("appName", Xy);
}
const Jy = Yy(() => {
  const e = nu("core", "apps", []), t = sp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), wc = Bb();
Gi(Ey);
const Qy = /* @__PURE__ */ Nt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ls();
    pt(t, n), Vi(() => {
      n(t.value);
    }), Ya(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && mi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), De(g(Yn), {
      "aria-label": g(yt)("Go back to the list"),
      class: Ce(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(yt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        _e(g(ol), {
          directional: "",
          path: g(dy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), e_ = /* @__PURE__ */ Ze(Qy, [["__scopeId", "data-v-a28923a1"]]), jd = Wh("nextcloud").persist().build(), t_ = Vb().theming?.name ?? "Nextcloud", n_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: e_,
    Pane: uy,
    Splitpanes: cy
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
      appName: sp(),
      localizedAppName: Jy(),
      isMobile: ls(),
      isRtl: wc
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
        return ga.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(t_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = ly(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? mi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && mi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      jd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ga.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(jd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ga.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, i_ = {
  key: 0,
  class: "hidden-visually"
}, a_ = { class: "app-content-wrapper__list" }, r_ = {
  key: 1,
  class: "app-content-wrapper"
};
function s_(e, t, n, i, a, r) {
  const s = Be("NcAppContentDetailsToggle"), o = Be("Pane"), l = Be("Splitpanes");
  return b(), T("main", {
    id: "app-content-vue",
    class: Ce(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), T("h1", i_, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (b(), T(ue, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), T("div", {
        key: 0,
        class: Ce(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), De(s, {
          key: 0,
          onClick: We(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        qe(c("div", a_, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Va, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), T("div", r_, [
        _e(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ce(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            _e(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                Re(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            _e(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                Re(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : H("", !0)
    ], 64)) : H("", !0),
    e.$slots.list ? H("", !0) : Re(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const o_ = /* @__PURE__ */ Ze(n_, [["render", s_], ["__scopeId", "data-v-51427d61"]]);
var op = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], so = /* @__PURE__ */ op.join(","), lp = typeof Element > "u", ba = lp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, oo = !lp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, lo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : lo(t.parentNode));
  return s;
}, l_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, cp = function(t, n, i) {
  if (lo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(so));
  return n && ba.call(t, so) && a.unshift(t), a = a.filter(i), a;
}, co = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!lo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = co(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = ba.call(s, so);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !lo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = co(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, up = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ua = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || l_(t)) && !up(t) ? 0 : t.tabIndex;
}, c_ = function(t, n) {
  var i = ua(t);
  return i < 0 && n && !up(t) ? 0 : i;
}, u_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, dp = function(t) {
  return t.tagName === "INPUT";
}, d_ = function(t) {
  return dp(t) && t.type === "hidden";
}, f_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, h_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, p_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || oo(t), i = function(o) {
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
  var r = h_(a, t.form);
  return !r || r === t;
}, v_ = function(t) {
  return dp(t) && t.type === "radio";
}, g_ = function(t) {
  return v_(t) && !p_(t);
}, m_ = function(t) {
  var n, i = t && oo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = oo(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Vd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, b_ = function(t, n) {
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
  var l = ba.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (ba.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = oo(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Vd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (m_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Vd(t);
  return !1;
}, y_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ba.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, uo = function(t, n) {
  return !(n.disabled || d_(n) || b_(n, t) || // For a details element with a summary, the summary element gets the focus
  f_(n) || y_(n));
}, Sc = function(t, n) {
  return !(g_(n) || ua(n) < 0 || !uo(t, n));
}, __ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, fp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = c_(o, s), d = s ? fp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(u_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, w_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = co([t], n.includeContainer, {
    filter: Sc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: __
  }) : i = cp(t, n.includeContainer, Sc.bind(null, n)), fp(i);
}, S_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = co([t], n.includeContainer, {
    filter: uo.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = cp(t, n.includeContainer, uo.bind(null, n)), i;
}, Da = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, so) === !1 ? !1 : Sc(n, t);
}, C_ = /* @__PURE__ */ op.concat("iframe:not([inert]):not([inert] *)").join(","), Xl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, C_) === !1 ? !1 : uo(n, t);
};
function Cc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function T_(e) {
  if (Array.isArray(e)) return Cc(e);
}
function Gd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = hp(e)) || t) {
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
function E_(e, t, n) {
  return (t = x_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function A_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Wd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kd(Object(n), !0).forEach(function(i) {
      E_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function O_(e) {
  return T_(e) || A_(e) || hp(e) || k_();
}
function N_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function x_(e) {
  var t = N_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hp(e, t) {
  if (e) {
    if (typeof e == "string") return Cc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Cc(e, t) : void 0;
  }
}
var hi = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = hi.getActiveTrap(t);
    n !== i && hi.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), hi.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = hi.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = hi.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, L_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, R_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Or = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, I_ = function(t) {
  return Or(t) && !t.shiftKey;
}, P_ = function(t) {
  return Or(t) && t.shiftKey;
}, qd = function(t) {
  return setTimeout(t, 0);
}, vr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Ls = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, D_ = [], su = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || D_, r = Wd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: I_,
    isKeyBackward: P_
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
  }, o, l = function(D, $, Y) {
    return D && D[$] !== void 0 ? D[$] : r[Y || $];
  }, d = function(D, $) {
    var Y = typeof $?.composedPath == "function" ? $.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ie = re.container, he = re.tabbableNodes;
      return ie.contains(D) || Y?.includes(ie) || he.find(function(de) {
        return de === D;
      });
    });
  }, u = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = $.hasFallback, re = Y === void 0 ? !1 : Y, ie = $.params, he = ie === void 0 ? [] : ie, de = r[D];
    if (typeof de == "function" && (de = de.apply(void 0, O_(he))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Te = de;
    if (typeof de == "string") {
      try {
        Te = i.querySelector(de);
      } catch (ge) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(ge.message, '"'));
      }
      if (!Te && !re)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Te;
  }, h = function(D) {
    var $ = D.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, S = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Xl(D, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        D = $;
      else {
        var Y = s.tabbableGroups[0], re = Y && Y.firstTabbableNode;
        D = re || u("fallbackFocus");
      }
    } else D === null && (D = u("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var $ = w_(D, r.tabbableOptions), Y = S_(D, r.tabbableOptions), re = $.length > 0 ? $[0] : void 0, ie = $.length > 0 ? $[$.length - 1] : void 0, he = Y.find(function(ge) {
        return Da(ge);
      }), de = Y.slice().reverse().find(function(ge) {
        return Da(ge);
      }), Te = !!$.find(function(ge) {
        return ua(ge) > 0;
      });
      return {
        container: D,
        tabbableNodes: $,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Te,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: re,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ie,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: he,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: de,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(je) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, nt = $.indexOf(je);
          return nt < 0 ? Ee ? Y.slice(Y.indexOf(je) + 1).find(function(ot) {
            return Da(ot);
          }) : Y.slice(0, Y.indexOf(je)).reverse().find(function(ot) {
            return Da(ot);
          }) : $[nt + (Ee ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(D) {
      return D.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(D) {
      return D.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, O = function(D) {
    if (D !== !1 && D !== h(document)) {
      if (!D || !D.focus) {
        O(S());
        return;
      }
      D.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = D, L_(D) && D.select();
    }
  }, A = function(D) {
    var $ = u("setReturnFocus", {
      params: [D]
    });
    return $ || ($ === !1 ? !1 : D);
  }, L = function(D) {
    var $ = D.target, Y = D.event, re = D.isBackward, ie = re === void 0 ? !1 : re;
    $ = $ || Ls(Y), E();
    var he = null;
    if (s.tabbableGroups.length > 0) {
      var de = d($, Y), Te = de >= 0 ? s.containerGroups[de] : void 0;
      if (de < 0)
        ie ? he = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : he = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var ge = s.tabbableGroups.findIndex(function(wt) {
          var it = wt.firstTabbableNode;
          return $ === it;
        });
        if (ge < 0 && (Te.container === $ || Xl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Te.nextTabbableNode($, !1)) && (ge = de), ge >= 0) {
          var je = ge === 0 ? s.tabbableGroups.length - 1 : ge - 1, Ee = s.tabbableGroups[je];
          he = ua($) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Or(Y) || (he = Te.nextTabbableNode($, !1));
      } else {
        var nt = s.tabbableGroups.findIndex(function(wt) {
          var it = wt.lastTabbableNode;
          return $ === it;
        });
        if (nt < 0 && (Te.container === $ || Xl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Te.nextTabbableNode($)) && (nt = de), nt >= 0) {
          var ot = nt === s.tabbableGroups.length - 1 ? 0 : nt + 1, lt = s.tabbableGroups[ot];
          he = ua($) >= 0 ? lt.firstTabbableNode : lt.firstDomTabbableNode;
        } else Or(Y) || (he = Te.nextTabbableNode($));
      }
    } else
      he = u("fallbackFocus");
    return he;
  }, R = function(D) {
    var $ = Ls(D);
    if (!(d($, D) >= 0)) {
      if (vr(r.clickOutsideDeactivates, D)) {
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
      vr(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, M = function(D) {
    var $ = Ls(D), Y = d($, D) >= 0;
    if (Y || $ instanceof Document)
      Y && (s.mostRecentlyFocusedNode = $);
    else {
      D.stopImmediatePropagation();
      var re, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (ua(s.mostRecentlyFocusedNode) > 0) {
          var he = d(s.mostRecentlyFocusedNode), de = s.containerGroups[he].tabbableNodes;
          if (de.length > 0) {
            var Te = de.findIndex(function(ge) {
              return ge === s.mostRecentlyFocusedNode;
            });
            Te >= 0 && (r.isKeyForward(s.recentNavEvent) ? Te + 1 < de.length && (re = de[Te + 1], ie = !1) : Te - 1 >= 0 && (re = de[Te - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(ge) {
            return ge.tabbableNodes.some(function(je) {
              return ua(je) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (re = L({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(re || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, K = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var Y = L({
      event: D,
      isBackward: $
    });
    Y && (Or(D) && D.preventDefault(), O(Y));
  }, F = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && K(D, r.isKeyBackward(D));
  }, le = function(D) {
    R_(D) && vr(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, ne = function(D) {
    var $ = Ls(D);
    d($, D) >= 0 || vr(r.clickOutsideDeactivates, D) || vr(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, P = function() {
    if (s.active) {
      hi.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function($) {
        s.delayInitialFocusTimer = qd(function() {
          O(S()), $();
        });
      }) : O(S()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ne, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), D;
    }
  }, ce = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), re = Gd(D), ie;
    try {
      for (re.s(); !(ie = re.n()).done; ) {
        var he = ie.value;
        $.add(he);
        for (var de = typeof ShadowRoot < "u" && he.getRootNode() instanceof ShadowRoot, Te = he; Te; ) {
          $.add(Te);
          var ge = Te.parentElement, je = [];
          ge ? je = ge.children : !ge && de && (je = Te.getRootNode().children, ge = Te.getRootNode().host, de = typeof ShadowRoot < "u" && ge.getRootNode() instanceof ShadowRoot);
          var Ee = Gd(je), nt;
          try {
            for (Ee.s(); !(nt = Ee.n()).done; ) {
              var ot = nt.value;
              Y.add(ot);
            }
          } catch (lt) {
            Ee.e(lt);
          } finally {
            Ee.f();
          }
          Te = ge;
        }
      }
    } catch (lt) {
      re.e(lt);
    } finally {
      re.f();
    }
    $.forEach(function(lt) {
      Y.delete(lt);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", R, !0), i.removeEventListener("touchstart", R, !0), i.removeEventListener("click", ne, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", le), o;
  }, ae = function(D) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var Y = D.some(function(ie) {
        var he = Array.from(ie.removedNodes);
        return he.some(function(de) {
          return de === $ || typeof de.contains == "function" && de.contains($);
        });
      });
      if (Y && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        E();
        var re = S();
        O(re);
      }
    }
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ae) : void 0, J = function() {
    me && (me.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      me.observe(D, {
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
    activate: function(D) {
      if (s.active)
        return this;
      var $ = l(D, "onActivate"), Y = l(D, "onPostActivate"), re = l(D, "checkCanFocusTrap"), ie = hi.getActiveTrap(a), he = !1;
      if (ie && !ie.paused) {
        var de;
        (de = ie._setSubtreeIsolation) === null || de === void 0 || de.call(ie, !1), he = !0;
      }
      try {
        re || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var Te = function() {
          re && E();
          var Ee = function() {
            o._setSubtreeIsolation(!0), J(), Y?.({
              trap: o
            });
          }, nt = P();
          nt ? nt.then(Ee) : Ee();
        };
        if (re)
          return re(s.containers.concat()).then(Te, Te), this;
        Te();
      } catch (je) {
        if (ie === hi.getActiveTrap(a) && he) {
          var ge;
          (ge = ie._setSubtreeIsolation) === null || ge === void 0 || ge.call(ie, !0);
        }
        throw je;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var $ = Wd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, J(), hi.deactivateTrap(a, o);
      var Y = l($, "onDeactivate"), re = l($, "onPostDeactivate"), ie = l($, "checkCanReturnFocus"), he = l($, "delayReturnFocus"), de = l($, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Te = function() {
        de && O(A(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, ge = function() {
        he && de ? qd(Te) : Te();
      };
      return de && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(ge, ge), this) : (ge(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var $ = [].concat(D).filter(Boolean);
      return s.containers = $.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && ce(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(D, $) {
        if (s.paused === D)
          return this;
        if (s.paused = D, D) {
          var Y = l($, "onPause"), re = l($, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), J(), re?.({
            trap: o
          });
        } else {
          var ie = l($, "onUnpause"), he = l($, "onPostUnpause");
          ie?.({
            trap: o
          });
          var de = function() {
            E();
            var ge = function() {
              o._setSubtreeIsolation(!0), J(), he?.({
                trap: o
              });
            }, je = P();
            je ? je.then(ge) : ge();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function($) {
          var Y;
          D ? r.isolateSubtrees === "aria-hidden" ? (($.ariaHidden === "true" || ((Y = $.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add($), $.setAttribute("aria-hidden", "true")) : (($.inert || $.hasAttribute("inert")) && s.alreadySilent.add($), $.setAttribute("inert", !0)) : s.alreadySilent.has($) || (r.isolateSubtrees === "aria-hidden" ? $.removeAttribute("aria-hidden") : $.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const pp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), $_ = /* @__PURE__ */ Nt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [pp]: {
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
function M_(e, t, n, i, a, r) {
  return b(), T("ul", {
    ref: "list",
    class: Ce(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Ce(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: on(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Re(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const vp = /* @__PURE__ */ Ze($_, [["render", M_], ["__scopeId", "data-v-3e73e246"]]);
function Xr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function F_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Xr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Xr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const gp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), mp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Gi(Sy);
const z_ = { class: "app-navigation-toggle-wrapper" }, U_ = /* @__PURE__ */ Nt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = mh(e, "open"), n = q(() => t.value ? yt("Close navigation") : yt("Open navigation"));
    return (i, a) => (b(), T("div", z_, [
      _e(g(Yn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          _e(ol, {
            path: g(py),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), B_ = /* @__PURE__ */ Ze(U_, [["__scopeId", "data-v-e8177cc7"]]), H_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], j_ = { class: "app-navigation__search" }, V_ = /* @__PURE__ */ Nt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Ft(
      gp,
      () => ym(),
      !1
    ), a = Eg("appNavigationContainer"), r = ls(), s = /* @__PURE__ */ Fe(!r.value), o = q(() => r.value && s.value);
    gg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), pt(r, () => {
      s.value = !r.value;
    }), pt(o, () => {
      u();
    }), Vi(() => {
      i(!0), Zh("toggle-navigation", d), mi("navigation-toggled", {
        open: s.value
      }), n = su(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Xr(),
        escapeDeactivates: !1
      }), u();
    }), rs(() => {
      i(!1), ny("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        mi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), O = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        mi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * O);
    }
    function d({ open: S }) {
      return l(S);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (S, E) => (b(), T("div", {
      ref: "appNavigationContainer",
      class: Ce(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Ki)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: At(h, ["esc"])
      }, [
        c("div", j_, [
          Re(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ce(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Re(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (b(), De(vp, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Re(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Re(S.$slots, "footer", {}, void 0, !0)
      ], 40, H_),
      _e(B_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), G_ = /* @__PURE__ */ Ze(V_, [["__scopeId", "data-v-37908cd4"]]), K_ = {
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
}, W_ = ["aria-hidden", "aria-label"], q_ = ["fill", "width", "height"], Y_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, X_ = { key: 0 };
function Z_(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Y_, [
        n.title ? (b(), T("title", X_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, q_))
  ], 16, W_);
}
const J_ = /* @__PURE__ */ Ze(K_, [["render", Z_]]), Q_ = {
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
}, e1 = ["aria-hidden", "aria-label"], t1 = ["fill", "width", "height"], n1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, i1 = { key: 0 };
function a1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", n1, [
        n.title ? (b(), T("title", i1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, t1))
  ], 16, e1);
}
const r1 = /* @__PURE__ */ Ze(Q_, [["render", a1]]), s1 = {
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
}, o1 = ["aria-hidden", "aria-label"], l1 = ["fill", "width", "height"], c1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, u1 = { key: 0 };
function d1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", c1, [
        n.title ? (b(), T("title", u1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, l1))
  ], 16, o1);
}
const bp = /* @__PURE__ */ Ze(s1, [["render", d1]]), f1 = {
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
}, h1 = ["aria-hidden", "aria-label"], p1 = ["fill", "width", "height"], v1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, g1 = { key: 0 };
function m1(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", v1, [
        n.title ? (b(), T("title", g1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, p1))
  ], 16, h1);
}
const yp = /* @__PURE__ */ Ze(f1, [["render", m1]]);
Gi(_y);
const b1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: bp,
    IconClose: yp,
    NcButton: Yn
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
    return { isLegacy34: Ki };
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
}, y1 = ["placeholder"];
function _1(e, t, n, i, a, r) {
  const s = Be("IconArrowRight"), o = Be("NcButton"), l = Be("IconClose");
  return b(), T("div", {
    class: Ce(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = We((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = At(We((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = We(() => {
      }, ["stop", "prevent"]))
    }, [
      qe(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, y1), [
        [Cn, r.valueModel]
      ]),
      _e(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: We(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          _e(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      _e(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: We(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          _e(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const w1 = /* @__PURE__ */ Ze(b1, [["render", _1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function ll() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const ou = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), _p = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), S1 = {
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
}, wp = {
  mixins: [S1],
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
      from: _p
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
}, C1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: ol
  },
  mixins: [wp],
  inject: {
    isInSemanticMenu: {
      from: ou,
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
      mdiCheck: fy,
      mdiChevronRight: hy
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
}, T1 = ["role"], E1 = ["aria-label", "disabled", "title", "type"], A1 = { class: "action-button__longtext-wrapper" }, k1 = {
  key: 0,
  class: "action-button__name"
}, O1 = ["textContent"], N1 = {
  key: 2,
  class: "action-button__text"
}, x1 = ["textContent"], L1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function R1(e, t, n, i, a, r) {
  const s = Be("NcIconSvgWrapper");
  return b(), T("li", {
    class: Ce(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ht({
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
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          class: Ce([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", A1, [
        e.name ? (b(), T("strong", k1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (b(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, O1)) : (b(), T("span", N1, p(e.text), 1)),
        n.description ? (b(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, x1)) : H("", !0)
      ]),
      n.isMenu ? (b(), De(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (b(), De(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), T("span", L1)) : H("", !0),
      H("", !0)
    ], 16, E1)
  ], 10, T1);
}
const I1 = /* @__PURE__ */ Ze(C1, [["render", R1], ["__scopeId", "data-v-6c2daf4e"]]);
function P1(e, t = {}) {
  const n = F_();
  pt(e, () => {
    vi(t.disabled) || (vi(e) ? n.pause() : n.unpause());
  }), rs(() => {
    n.unpause();
  });
}
const D1 = ["top", "right", "bottom", "left"], Yd = ["start", "end"], Xd = /* @__PURE__ */ D1.reduce((e, t) => e.concat(t, t + "-" + Yd[0], t + "-" + Yd[1]), []), Zr = Math.min, Tc = Math.max, $1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Sp(e, t, n) {
  return Tc(e, Zr(t, n));
}
function _a(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wi(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function Cp(e) {
  return e === "x" ? "y" : "x";
}
function lu(e) {
  return e === "y" ? "height" : "width";
}
function pi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function cu(e) {
  return Cp(pi(e));
}
function Tp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = cu(e), r = lu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ho(s)), [s, ho(s)];
}
function M1(e) {
  const t = ho(e);
  return [fo(e), t, fo(t)];
}
function fo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Zd = ["left", "right"], Jd = ["right", "left"], F1 = ["top", "bottom"], z1 = ["bottom", "top"];
function U1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Jd : Zd : t ? Zd : Jd;
    case "left":
    case "right":
      return t ? F1 : z1;
    default:
      return [];
  }
}
function B1(e, t, n, i) {
  const a = kn(e);
  let r = U1(wi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(fo)))), r;
}
function ho(e) {
  const t = wi(e);
  return $1[t] + e.slice(t.length);
}
function H1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Ep(e) {
  return typeof e != "number" ? H1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nr(e) {
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
function Qd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = pi(t), s = cu(t), o = lu(s), l = wi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
  let E;
  switch (l) {
    case "top":
      E = {
        x: u,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y: h
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y: h
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  const O = kn(t);
  return O && (E[s] += S * (O === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function j1(e, t) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: S = !1,
    padding: E = 0
  } = _a(t, e), O = Ep(E), L = o[S ? h === "floating" ? "reference" : "floating" : h], R = Nr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(L))) == null || n ? L : L.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, le = Nr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: K,
    strategy: l
  }) : M);
  return {
    top: (R.top - le.top + O.top) / F.y,
    bottom: (le.bottom - R.bottom + O.bottom) / F.y,
    left: (R.left - le.left + O.left) / F.x,
    right: (le.right - R.right + O.right) / F.x
  };
}
const V1 = 50, G1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: j1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Qd(d, i, l), S = i, E = 0;
  const O = {};
  for (let A = 0; A < r.length; A++) {
    const L = r[A];
    if (!L)
      continue;
    const {
      name: R,
      fn: M
    } = L, {
      x: K,
      y: F,
      data: le,
      reset: ne
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: S,
      strategy: a,
      middlewareData: O,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = K ?? u, h = F ?? h, O[R] = {
      ...O[R],
      ...le
    }, ne && E < V1 && (E++, typeof ne == "object" && (ne.placement && (S = ne.placement), ne.rects && (d = ne.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ne.rects), {
      x: u,
      y: h
    } = Qd(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: O
  };
}, K1 = (e) => ({
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
      element: d,
      padding: u = 0
    } = _a(e, t) || {};
    if (d == null)
      return {};
    const h = Ep(u), S = {
      x: n,
      y: i
    }, E = cu(a), O = lu(E), A = await s.getDimensions(d), L = E === "y", R = L ? "top" : "left", M = L ? "bottom" : "right", K = L ? "clientHeight" : "clientWidth", F = r.reference[O] + r.reference[E] - S[E] - r.floating[O], le = S[E] - r.reference[E], ne = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let P = ne ? ne[K] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(ne))) && (P = o.floating[K] || r.floating[O]);
    const ce = F / 2 - le / 2, X = P / 2 - A[O] / 2 - 1, ae = Zr(h[R], X), me = Zr(h[M], X), J = P - A[O] - me, te = P / 2 - A[O] / 2 + ce, D = Sp(ae, te, J), $ = !l.arrow && kn(a) != null && te !== D && r.reference[O] / 2 - (te < ae ? ae : me) - A[O] / 2 < 0, Y = $ ? te < ae ? te - ae : te - J : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: D,
        centerOffset: te - D - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
});
function W1(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => wi(a) === a)).filter((a) => e ? kn(a) === e || (t ? fo(a) !== a : !1) : !0);
}
const q1 = function(e) {
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
        elements: d
      } = t, {
        crossAxis: u = !1,
        alignment: h,
        allowedPlacements: S = Xd,
        autoAlignment: E = !0,
        ...O
      } = _a(e, t), A = h !== void 0 || S === Xd ? W1(h || null, E, S) : S, L = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, R = A[L];
      if (R == null)
        return {};
      if (o !== R)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, O), K = Tp(R, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [M[wi(R)], M[K[0]], M[K[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: R,
        overflows: F
      }], ne = A[L + 1];
      if (ne)
        return {
          data: {
            index: L + 1,
            overflows: le
          },
          reset: {
            placement: ne
          }
        };
      const P = le.map((ae) => {
        const me = kn(ae.placement);
        return [ae.placement, me && u ? (
          // Check along the mainAxis and main crossAxis side.
          ae.overflows.slice(0, 2).reduce((J, te) => J + te, 0)
        ) : (
          // Check only the mainAxis.
          ae.overflows[0]
        ), ae.overflows];
      }).sort((ae, me) => ae[1] - me[1]), X = ((a = P.filter((ae) => ae[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        kn(ae[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || P[0][0];
      return X !== o ? {
        data: {
          index: L + 1,
          overflows: le
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Y1 = function(e) {
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
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: S,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: A = !0,
        ...L
      } = _a(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const R = wi(a), M = pi(o), K = wi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), le = S || (K || !A ? [ho(o)] : M1(o)), ne = O !== "none";
      !S && ne && le.push(...B1(o, A, O, F));
      const P = [o, ...le], ce = await l.detectOverflow(t, L), X = [];
      let ae = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(ce[R]), h) {
        const D = Tp(a, s, F);
        X.push(ce[D[0]], ce[D[1]]);
      }
      if (ae = [...ae, {
        placement: a,
        overflows: X
      }], !X.every((D) => D <= 0)) {
        var me, J;
        const D = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, $ = P[D];
        if ($ && (!(h === "alignment" ? M !== pi($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ae.every((ie) => pi(ie.placement) === M ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: ae
            },
            reset: {
              placement: $
            }
          };
        let Y = (J = ae.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var te;
              const re = (te = ae.filter((ie) => {
                if (ne) {
                  const he = pi(ie.placement);
                  return he === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  he === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((he) => he > 0).reduce((he, de) => he + de, 0)]).sort((ie, he) => ie[1] - he[1])[0]) == null ? void 0 : te[0];
              re && (Y = re);
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
}, X1 = /* @__PURE__ */ new Set(["left", "top"]);
async function Z1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = wi(n), o = kn(n), l = pi(n) === "y", d = X1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = _a(t, e);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: O
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof O == "number" && (E = o === "end" ? O * -1 : O), l ? {
    x: E * u,
    y: S * d
  } : {
    x: S * d,
    y: E * u
  };
}
const J1 = function(e) {
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
      } = t, l = await Z1(t, e);
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
}, Q1 = function(e) {
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
              x: K,
              y: F
            } = M;
            return {
              x: K,
              y: F
            };
          }
        },
        ...d
      } = _a(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = pi(a), E = Cp(S);
      let O = u[E], A = u[S];
      const L = (M, K) => Sp(K + h[M === "y" ? "top" : "left"], K, K - h[M === "y" ? "bottom" : "right"]);
      s && (O = L(E, O)), o && (A = L(S, A));
      const R = l.fn({
        ...t,
        [E]: O,
        [S]: A
      });
      return {
        ...R,
        data: {
          x: R.x - n,
          y: R.y - i,
          enabled: {
            [E]: s,
            [S]: o
          }
        }
      };
    }
  };
}, e0 = function(e) {
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
      } = _a(e, t), l = await a.detectOverflow(t, o), d = wi(n), u = kn(n), h = pi(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const L = E - l.top - l.bottom, R = S - l.left - l.right, M = Zr(E - l[O], L), K = Zr(S - l[A], R), F = t.middlewareData.shift, le = !F;
      let ne = M, P = K;
      F != null && F.enabled.x && (P = R), F != null && F.enabled.y && (ne = L), le && !u && (h ? P = S - 2 * Tc(l.left, l.right) : ne = E - 2 * Tc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: P,
        availableHeight: ne
      });
      const ce = await a.getDimensions(r.floating);
      return S !== ce.width || E !== ce.height ? {
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
function Xn(e) {
  return gn(e).getComputedStyle(e);
}
const ef = Math.min, xr = Math.max, po = Math.round;
function Ap(e) {
  const t = Xn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = po(n) !== a || po(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function ji(e) {
  return Op(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Rs;
function kp() {
  if (Rs) return Rs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Rs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Rs) : navigator.userAgent;
}
function Zn(e) {
  return e instanceof gn(e).HTMLElement;
}
function Fi(e) {
  return e instanceof gn(e).Element;
}
function Op(e) {
  return e instanceof gn(e).Node;
}
function tf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof gn(e).ShadowRoot || e instanceof ShadowRoot;
}
function cl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function t0(e) {
  return ["table", "td", "th"].includes(ji(e));
}
function Ec(e) {
  const t = /firefox/i.test(kp()), n = Xn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Np() {
  return !/^((?!chrome|android).)*safari/i.test(kp());
}
function uu(e) {
  return ["html", "body", "#document"].includes(ji(e));
}
function xp(e) {
  return Fi(e) ? e : e.contextElement;
}
const Lp = { x: 1, y: 1 };
function Wa(e) {
  const t = xp(e);
  if (!Zn(t)) return Lp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Ap(t);
  let s = (r ? po(n.width) : n.width) / i, o = (r ? po(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function Jr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = xp(e);
  let l = Lp;
  t && (i ? Fi(i) && (l = Wa(i)) : l = Wa(e));
  const d = o ? gn(o) : window, u = !Np() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = gn(o), L = i && Fi(i) ? gn(i) : i;
    let R = A.frameElement;
    for (; R && i && L !== A; ) {
      const M = Wa(R), K = R.getBoundingClientRect(), F = getComputedStyle(R);
      K.x += (R.clientLeft + parseFloat(F.paddingLeft)) * M.x, K.y += (R.clientTop + parseFloat(F.paddingTop)) * M.y, h *= M.x, S *= M.y, E *= M.x, O *= M.y, h += K.x, S += K.y, R = gn(R).frameElement;
    }
  }
  return { width: E, height: O, top: S, right: h + E, bottom: S + O, left: h, x: h, y: S };
}
function zi(e) {
  return ((Op(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ul(e) {
  return Fi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Rp(e) {
  return Jr(zi(e)).left + ul(e).scrollLeft;
}
function Qr(e) {
  if (ji(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || tf(e) && e.host || zi(e);
  return tf(t) ? t.host : t;
}
function Ip(e) {
  const t = Qr(e);
  return uu(t) ? t.ownerDocument.body : Zn(t) && cl(t) ? t : Ip(t);
}
function vo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Ip(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = gn(i);
  return a ? t.concat(r, r.visualViewport || [], cl(i) ? i : []) : t.concat(i, vo(i));
}
function nf(e, t, n) {
  return t === "viewport" ? Nr((function(i, a) {
    const r = gn(i), s = zi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = Np();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Fi(t) ? Nr((function(i, a) {
    const r = Jr(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Zn(i) ? Wa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Nr((function(i) {
    const a = zi(i), r = ul(i), s = i.ownerDocument.body, o = xr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = xr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Rp(i);
    const u = -r.scrollTop;
    return Xn(s).direction === "rtl" && (d += xr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(zi(e)));
}
function af(e) {
  return Zn(e) && Xn(e).position !== "fixed" ? e.offsetParent : null;
}
function rf(e) {
  const t = gn(e);
  let n = af(e);
  for (; n && t0(n) && Xn(n).position === "static"; ) n = af(n);
  return n && (ji(n) === "html" || ji(n) === "body" && Xn(n).position === "static" && !Ec(n)) ? t : n || (function(i) {
    let a = Qr(i);
    for (; Zn(a) && !uu(a); ) {
      if (Ec(a)) return a;
      a = Qr(a);
    }
    return null;
  })(e) || t;
}
function n0(e, t, n) {
  const i = Zn(t), a = zi(t), r = Jr(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((ji(t) !== "body" || cl(a)) && (s = ul(t)), Zn(t)) {
    const l = Jr(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Rp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const i0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = vo(d).filter(((L) => Fi(L) && ji(L) !== "body")), E = null;
    const O = Xn(d).position === "fixed";
    let A = O ? Qr(d) : d;
    for (; Fi(A) && !uu(A); ) {
      const L = Xn(A), R = Ec(A);
      (O ? R || E : R || L.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = L : S = S.filter(((M) => M !== A)), A = Qr(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = nf(t, u, a);
    return d.top = xr(h.top, d.top), d.right = ef(h.right, d.right), d.bottom = ef(h.bottom, d.bottom), d.left = xr(h.left, d.left), d;
  }), nf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Zn(n), r = zi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((ji(n) !== "body" || cl(r)) && (s = ul(n)), Zn(n))) {
    const d = Jr(n);
    o = Wa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Fi, getDimensions: function(e) {
  return Zn(e) ? Ap(e) : e.getBoundingClientRect();
}, getOffsetParent: rf, getDocumentElement: zi, getScale: Wa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || rf, r = this.getDimensions;
  return { reference: n0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Xn(e).direction === "rtl" }, a0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: i0, ...n }, r = { ...a.platform, _c: i };
  return G1(e, t, { ...a, platform: r });
}, Ui = {
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
function Ac(e, t) {
  let n = Ui.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Ui.themes[n.$extend] || {} : (n = null, i = Ui[t]) : n = null;
  while (n);
  return i;
}
function r0(e) {
  const t = [e];
  let n = Ui.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ui.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function sf(e) {
  const t = [e];
  let n = Ui.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ui.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let es = !1;
if (typeof window < "u") {
  es = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        es = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Pp = !1;
typeof window < "u" && typeof navigator < "u" && (Pp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const s0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), of = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, lf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function cf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Zl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const En = [];
let aa = null;
const uf = {};
function df(e) {
  let t = uf[e];
  return t || (t = uf[e] = []), t;
}
let kc = function() {
};
typeof window < "u" && (kc = window.Element);
function He(e) {
  return function(t) {
    return Ac(t.theme, e);
  };
}
const Jl = "__floating-vue__popper", Dp = () => /* @__PURE__ */ Nt({
  name: "VPopper",
  provide() {
    return {
      [Jl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Jl]: { default: null }
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
      validator: (e) => s0.includes(e)
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
      type: [String, Object, kc, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, kc],
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
      return (e = this[Jl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(J1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(q1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Q1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Y1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(K1({
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
            let l, d;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : d = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(e0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await a0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), aa && this.instantMove && aa.instantMove && aa !== this.parentPopper) {
        aa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (aa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Zl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...vo(this.$_referenceNode),
        ...vo(this.$_popperNode)
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
        for (let n = 0; n < En.length; n++)
          t = En[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      En.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of sf(this.theme))
        df(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Zl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, cf(En, this), En.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of sf(this.theme)) {
        const i = df(n);
        cf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      aa === this && (aa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Zl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, of, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], of, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, lf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], lf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, es ? {
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
      if (Lr >= e.left && Lr <= e.right && Rr >= e.top && Rr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Lr - Ii, i = Rr - Pi, a = t.left + t.width / 2 - Ii + (t.top + t.height / 2) - Pi + t.width + t.height, r = Ii + n * a, s = Pi + i * a;
        return Is(Ii, Pi, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Is(Ii, Pi, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Is(Ii, Pi, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Is(Ii, Pi, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Pp) {
    const e = es ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => ff(t), e), document.addEventListener("touchend", (t) => hf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => ff(e), !0), window.addEventListener("click", (e) => hf(e, !1), !0);
  window.addEventListener("resize", c0);
}
function ff(e, t) {
  for (let n = 0; n < En.length; n++) {
    const i = En[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function hf(e, t) {
  o0(e, t);
}
function o0(e, t) {
  const n = {};
  for (let i = En.length - 1; i >= 0; i--) {
    const a = En[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && pf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && pf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function pf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || l0(e, n) && !t;
}
function l0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function c0() {
  for (let e = 0; e < En.length; e++)
    En[e].$_computePosition();
}
let Ii = 0, Pi = 0, Lr = 0, Rr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ii = Lr, Pi = Rr, Lr = e.clientX, Rr = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function Is(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const u0 = {
  extends: Dp()
}, du = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function d0(e, t, n, i, a, r) {
  return b(), T("div", {
    ref: "reference",
    class: Ce(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", Hs(Kr(e.slotData)))
  ], 2);
}
const f0 = /* @__PURE__ */ du(u0, [["render", d0]]);
function h0() {
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
let Us;
function Oc() {
  Oc.init || (Oc.init = !0, Us = h0() !== -1);
}
var dl = {
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
    Oc(), vn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Us && this.$el.appendChild(e), e.data = "about:blank", Us || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Us && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const p0 = /* @__PURE__ */ hg();
dg("data-v-b329ee4c");
const v0 = {
  class: "resize-observer",
  tabindex: "-1"
};
fg();
const g0 = /* @__PURE__ */ p0((e, t, n, i, a, r) => (b(), De("div", v0)));
dl.render = g0;
dl.__scopeId = "data-v-b329ee4c";
dl.__file = "src/components/ResizeObserver.vue";
const $p = (e = "theme") => ({
  computed: {
    themeClass() {
      return r0(this[e]);
    }
  }
}), m0 = /* @__PURE__ */ Nt({
  name: "VPopperContent",
  components: {
    ResizeObserver: dl
  },
  mixins: [
    $p()
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
}), b0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], y0 = {
  ref: "inner",
  class: "v-popper__inner"
}, _0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), w0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), S0 = [
  _0,
  w0
];
function C0(e, t, n, i, a, r) {
  const s = Be("ResizeObserver");
  return b(), T("div", {
    id: e.popperId,
    ref: "popover",
    class: Ce(["v-popper__popper", [
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
    style: on(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = At((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: on(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", y0, [
        e.mounted ? (b(), T(ue, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (b(), De(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : H("", !0)
        ], 64)) : H("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: on(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, S0, 4)
    ], 4)
  ], 46, b0);
}
const Mp = /* @__PURE__ */ du(m0, [["render", C0]]), Fp = {
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
let Nc = function() {
};
typeof window < "u" && (Nc = window.Element);
const T0 = /* @__PURE__ */ Nt({
  name: "VPopperWrapper",
  components: {
    Popper: f0,
    PopperContent: Mp
  },
  mixins: [
    Fp,
    $p("finalTheme")
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
      type: [String, Object, Nc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Nc],
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
function E0(e, t, n, i, a, r) {
  const s = Be("PopperContent"), o = Be("Popper");
  return b(), De(o, Ht({ ref: "popper" }, e.$props, {
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
    default: ke(({
      popperId: l,
      isShown: d,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: S,
      show: E,
      hide: O,
      handleResize: A,
      onResize: L,
      classes: R,
      result: M
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: E,
        hide: O
      }),
      _e(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: R,
        result: M,
        onHide: O,
        onResize: L
      }, {
        default: ke(() => [
          Re(e.$slots, "popper", {
            shown: d,
            hide: O
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const fu = /* @__PURE__ */ du(T0, [["render", E0]]), A0 = {
  ...fu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...fu
});
({
  ...fu
});
Dp();
const vf = Ui, k0 = A0, O0 = /* @__PURE__ */ Nt({
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
}), N0 = "_ncPopover_qgtYg", x0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: N0
}, zp = "nc-popover-9";
vf.themes[zp] = structuredClone(vf.themes.dropdown);
const L0 = {
  name: "NcPopover",
  components: {
    Dropdown: k0,
    NcPopoverTriggerProvider: O0
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
      theme: zp
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
      return this.placement === "start" ? wc ? "right" : "left" : this.placement === "end" ? wc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = su(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Xr(),
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
        ga.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function R0(e, t, n, i, a, r) {
  const s = Be("NcPopoverTriggerProvider"), o = Be("Dropdown");
  return b(), De(o, {
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
    popper: ke((l) => [
      Re(e.$slots, "default", Hs(Kr(l)))
    ]),
    default: ke(() => [
      _e(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Re(e.$slots, "trigger", Hs(Kr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const I0 = {
  $style: x0
}, gf = /* @__PURE__ */ Ze(L0, [["render", R0], ["__cssModules", I0]]), P0 = {
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
}, D0 = ["aria-hidden", "aria-label"], $0 = ["fill", "width", "height"], M0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, F0 = { key: 0 };
function z0(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", M0, [
        n.title ? (b(), T("title", F0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, $0))
  ], 16, D0);
}
const U0 = /* @__PURE__ */ Ze(P0, [["render", z0]]);
Gi(yy);
function hu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === kt)
        return !1;
      if (n.type === ue && !hu(n.children))
        return !1;
      if (n.type === ss && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const B0 = ".focusable", H0 = {
  name: "NcActions",
  components: {
    NcButton: Yn,
    NcPopover: gf
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
      [ou]: q(() => this.actionsMenuSemanticType === "menu"),
      [_p]: this.closeMenu
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
      randomId: ll()
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
    P1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(B0);
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
    const e = [], t = (E, O) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          O.push(A);
          return;
        }
        A.type === ue && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const O = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Xt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Xt("span", { class: ["icon", O] })), L = E?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? L : "";
      let M = E?.props?.title;
      this.forceName || M || (M = L);
      const K = { ...E?.props ?? {} }, F = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Xt(
        Yn,
        Ht(
          K,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || L,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (R ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => R,
          icon: () => A
        }
      );
    }, S = (E) => {
      const O = hu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(U0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        gf,
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
          trigger: () => Xt(Yn, {
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
            icon: () => O,
            default: () => this.menuName
          }),
          default: () => Xt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Xt("ul", {
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
    return e.length === 1 && n.length === 1 && !this.forceMenu ? h(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Xt(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(h),
        // render the rest within the popover menu
        a.length > 0 ? Xt(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [S(a)]
        ) : null
      ]
    ) : Xt(
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
        S(e)
      ]
    ));
  }
}, go = /* @__PURE__ */ Ze(H0, [["__scopeId", "data-v-7206c1f1"]]), j0 = ["aria-label"], V0 = ["width", "height"], G0 = ["fill"], K0 = ["fill"], W0 = { key: 0 }, q0 = /* @__PURE__ */ Nt({
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
    return (i, a) => (b(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (b(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, G0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), T("title", W0, p(e.name), 1)) : H("", !0)
        ], 8, K0)
      ], 8, V0))
    ], 8, j0));
  }
}), Up = /* @__PURE__ */ Ze(q0, [["__scopeId", "data-v-cf399190"]]), xc = /* @__PURE__ */ Nt({
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
}), Y0 = {
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
}, X0 = ["aria-hidden", "aria-label"], Z0 = ["fill", "width", "height"], J0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Q0 = { key: 0 };
function ew(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", J0, [
        n.title ? (b(), T("title", Q0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Z0))
  ], 16, X0);
}
const tw = /* @__PURE__ */ Ze(Y0, [["render", ew]]), nw = {
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
}, iw = ["aria-hidden", "aria-label"], aw = ["fill", "width", "height"], rw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, sw = { key: 0 };
function ow(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", rw, [
        n.title ? (b(), T("title", sw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, aw))
  ], 16, iw);
}
const lw = /* @__PURE__ */ Ze(nw, [["render", ow]]);
Gi(Cy);
const cw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Yn,
    ChevronDown: J_,
    ChevronUp: r1
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
    return { isLegacy34: Ki };
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
function uw(e, t, n, i, a, r) {
  const s = Be("ChevronUp"), o = Be("ChevronDown"), l = Be("NcButton");
  return b(), De(l, {
    class: Ce(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      n.open ? (b(), De(s, {
        key: 0,
        size: 20
      })) : (b(), De(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const dw = /* @__PURE__ */ Ze(cw, [["render", uw], ["__scopeId", "data-v-cfbd3794"]]);
Gi(Ty, ky);
const fw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: go,
    NcActionButton: I1,
    NcAppNavigationIconCollapsible: dw,
    NcInputConfirmCancel: w1,
    NcLoadingIcon: Up,
    NcVNodes: xc,
    Pencil: tw,
    Undo: lw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: pp, default: null }
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
      default: () => ll(),
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
      isMobile: ls(),
      isLegacy34: Ki
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && mi("toggle-navigation", { open: !1 }));
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
}, hw = ["id"], pw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], vw = {
  key: 0,
  class: "editingContainer"
}, gw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, mw = { class: "app-navigation-entry__deleted-description" }, bw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, yw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function _w(e, t, n, i, a, r) {
  const s = Be("NcLoadingIcon"), o = Be("NcInputConfirmCancel"), l = Be("Pencil"), d = Be("NcActionButton"), u = Be("Undo"), h = Be("NcActions"), S = Be("NcAppNavigationIconCollapsible");
  return b(), T("li", {
    id: n.id,
    class: Ce([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), De(Xc(r.isRouterLink ? "router-link" : "NcVNodes"), Hs(Kr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: E, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ce(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...L) => r.requestHighlight && r.requestHighlight(...L)),
          onFocusin: t[5] || (t[5] = (...L) => r.requestHighlight && r.requestHighlight(...L))
        }, [
          n.undo ? H("", !0) : (b(), T("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...L) => r.handleBlur && r.handleBlur(...L)),
            onClick: (L) => r.onClick(L, O, E),
            onFocus: t[2] || (t[2] = (...L) => r.handleFocus && r.handleFocus(...L)),
            onKeydown: t[3] || (t[3] = At(We((...L) => r.handleTab && r.handleTab(...L), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ce(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), De(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ce(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (b(), T("div", vw, [
              _e(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (L) => a.editingValue = L),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, pw)),
          n.undo ? (b(), T("div", gw, [
            c("div", mw, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), T("div", {
            key: 2,
            class: Ce(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), T("div", bw, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (b(), De(h, {
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
              icon: ke(() => [
                Re(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                n.editable && !a.editingActive ? (b(), De(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    _e(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Oe(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (b(), De(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    _e(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (b(), De(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: We(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), T("ul", yw, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, hw);
}
const mf = /* @__PURE__ */ Ze(fw, [["render", _w], ["__scopeId", "data-v-01bef41b"]]), Ql = /* @__PURE__ */ new WeakMap(), ww = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Bd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Bd(e, a, Object.assign({ capture: n }, r));
    }
    Ql.set(e, i);
  },
  unmounted(e) {
    const t = Ql.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ql.delete(e);
  }
}, Sw = {
  mounted(e) {
    e.focus();
  }
}, Cw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Tw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Lc = "numeric", Rc = "ascii", Ic = "alpha", Ir = "asciinumeric", Sr = "alphanumeric", Pc = "domain", Bp = "emoji", Ew = "scheme", Aw = "slashscheme", ec = "whitespace";
function kw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function fa(e, t, n) {
  t[Lc] && (t[Ir] = !0, t[Sr] = !0), t[Rc] && (t[Ir] = !0, t[Ic] = !0), t[Ir] && (t[Sr] = !0), t[Ic] && (t[Sr] = !0), t[Sr] && (t[Pc] = !0), t[Bp] && (t[Pc] = !0);
  for (const i in t) {
    const a = kw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function Ow(e, t) {
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
    return t && t.j ? a = t : (a = new rn(t), n && i && fa(t, n, i)), this.jr.push([e, a]), a;
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
          const l = Object.assign(Ow(s.t, i), n);
          fa(r, l, i);
        } else n && fa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), ct = (e, t, n, i, a) => e.tr(t, n, i, a), bf = (e, t, n, i, a) => e.ts(t, n, i, a), ee = (e, t, n, i, a) => e.tt(t, n, i, a), li = "WORD", Dc = "UWORD", Hp = "ASCIINUMERICAL", jp = "ALPHANUMERICAL", ts = "LOCALHOST", $c = "TLD", Mc = "UTLD", Bs = "SCHEME", za = "SLASH_SCHEME", pu = "NUM", Fc = "WS", vu = "NL", Pr = "OPENBRACE", Dr = "CLOSEBRACE", mo = "OPENBRACKET", bo = "CLOSEBRACKET", yo = "OPENPAREN", _o = "CLOSEPAREN", wo = "OPENANGLEBRACKET", So = "CLOSEANGLEBRACKET", Co = "FULLWIDTHLEFTPAREN", To = "FULLWIDTHRIGHTPAREN", Eo = "LEFTCORNERBRACKET", Ao = "RIGHTCORNERBRACKET", ko = "LEFTWHITECORNERBRACKET", Oo = "RIGHTWHITECORNERBRACKET", No = "FULLWIDTHLESSTHAN", xo = "FULLWIDTHGREATERTHAN", Lo = "AMPERSAND", Ro = "APOSTROPHE", Io = "ASTERISK", $i = "AT", Po = "BACKSLASH", Do = "BACKTICK", $o = "CARET", ha = "COLON", gu = "COMMA", Mo = "DOLLAR", Gn = "DOT", Fo = "EQUALS", mu = "EXCLAMATION", fn = "HYPHEN", $r = "PERCENT", zo = "PIPE", Uo = "PLUS", Bo = "POUND", Mr = "QUERY", bu = "QUOTE", Vp = "FULLWIDTHMIDDLEDOT", yu = "SEMI", Kn = "SLASH", Fr = "TILDE", Ho = "UNDERSCORE", Gp = "EMOJI", jo = "SYM";
var Kp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: jp,
  AMPERSAND: Lo,
  APOSTROPHE: Ro,
  ASCIINUMERICAL: Hp,
  ASTERISK: Io,
  AT: $i,
  BACKSLASH: Po,
  BACKTICK: Do,
  CARET: $o,
  CLOSEANGLEBRACKET: So,
  CLOSEBRACE: Dr,
  CLOSEBRACKET: bo,
  CLOSEPAREN: _o,
  COLON: ha,
  COMMA: gu,
  DOLLAR: Mo,
  DOT: Gn,
  EMOJI: Gp,
  EQUALS: Fo,
  EXCLAMATION: mu,
  FULLWIDTHGREATERTHAN: xo,
  FULLWIDTHLEFTPAREN: Co,
  FULLWIDTHLESSTHAN: No,
  FULLWIDTHMIDDLEDOT: Vp,
  FULLWIDTHRIGHTPAREN: To,
  HYPHEN: fn,
  LEFTCORNERBRACKET: Eo,
  LEFTWHITECORNERBRACKET: ko,
  LOCALHOST: ts,
  NL: vu,
  NUM: pu,
  OPENANGLEBRACKET: wo,
  OPENBRACE: Pr,
  OPENBRACKET: mo,
  OPENPAREN: yo,
  PERCENT: $r,
  PIPE: zo,
  PLUS: Uo,
  POUND: Bo,
  QUERY: Mr,
  QUOTE: bu,
  RIGHTCORNERBRACKET: Ao,
  RIGHTWHITECORNERBRACKET: Oo,
  SCHEME: Bs,
  SEMI: yu,
  SLASH: Kn,
  SLASH_SCHEME: za,
  SYM: jo,
  TILDE: Fr,
  TLD: $c,
  UNDERSCORE: Ho,
  UTLD: Mc,
  UWORD: Dc,
  WORD: li,
  WS: Fc
});
const si = /[a-z]/, gr = new RegExp("\\p{L}", "u"), tc = new RegExp("\\p{Emoji}", "u"), oi = /\d/, nc = /\s/, yf = "\r", ic = `
`, Nw = "️", xw = "‍", ac = "￼";
let Ps = null, Ds = null;
function Lw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  Ps == null && (Ps = _f(Cw)), Ds == null && (Ds = _f(Tw)), ee(n, "'", Ro), ee(n, "{", Pr), ee(n, "}", Dr), ee(n, "[", mo), ee(n, "]", bo), ee(n, "(", yo), ee(n, ")", _o), ee(n, "<", wo), ee(n, ">", So), ee(n, "（", Co), ee(n, "）", To), ee(n, "「", Eo), ee(n, "」", Ao), ee(n, "『", ko), ee(n, "』", Oo), ee(n, "＜", No), ee(n, "＞", xo), ee(n, "&", Lo), ee(n, "*", Io), ee(n, "@", $i), ee(n, "`", Do), ee(n, "^", $o), ee(n, ":", ha), ee(n, ",", gu), ee(n, "$", Mo), ee(n, ".", Gn), ee(n, "=", Fo), ee(n, "!", mu), ee(n, "-", fn), ee(n, "%", $r), ee(n, "|", zo), ee(n, "+", Uo), ee(n, "#", Bo), ee(n, "?", Mr), ee(n, '"', bu), ee(n, "/", Kn), ee(n, ";", yu), ee(n, "~", Fr), ee(n, "_", Ho), ee(n, "\\", Po), ee(n, "・", Vp);
  const i = ct(n, oi, pu, {
    [Lc]: !0
  });
  ct(i, oi, i);
  const a = ct(i, si, Hp, {
    [Ir]: !0
  }), r = ct(i, gr, jp, {
    [Sr]: !0
  }), s = ct(n, si, li, {
    [Rc]: !0
  });
  ct(s, oi, a), ct(s, si, s), ct(a, oi, a), ct(a, si, a);
  const o = ct(n, gr, Dc, {
    [Ic]: !0
  });
  ct(o, si), ct(o, oi, r), ct(o, gr, o), ct(r, oi, r), ct(r, si), ct(r, gr, r);
  const l = ee(n, ic, vu, {
    [ec]: !0
  }), d = ee(n, yf, Fc, {
    [ec]: !0
  }), u = ct(n, nc, Fc, {
    [ec]: !0
  });
  ee(n, ac, u), ee(d, ic, l), ee(d, ac, u), ct(d, nc, u), ee(u, yf), ee(u, ic), ct(u, nc, u), ee(u, ac, u);
  const h = ct(n, tc, Gp, {
    [Bp]: !0
  });
  ee(h, "#"), ct(h, tc, h), ee(h, Nw, h);
  const S = ee(h, xw);
  ee(S, "#"), ct(S, tc, h);
  const E = [[si, s], [oi, a]], O = [[si, null], [gr, o], [oi, r]];
  for (let A = 0; A < Ps.length; A++)
    Li(n, Ps[A], $c, li, E);
  for (let A = 0; A < Ds.length; A++)
    Li(n, Ds[A], Mc, Dc, O);
  fa($c, {
    tld: !0,
    ascii: !0
  }, t), fa(Mc, {
    utld: !0,
    alpha: !0
  }, t), Li(n, "file", Bs, li, E), Li(n, "mailto", Bs, li, E), Li(n, "http", za, li, E), Li(n, "https", za, li, E), Li(n, "ftp", za, li, E), Li(n, "ftps", za, li, E), fa(Bs, {
    scheme: !0,
    ascii: !0
  }, t), fa(za, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, L) => A[0] > L[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const L = e[A][0], M = e[A][1] ? {
      [Ew]: !0
    } : {
      [Aw]: !0
    };
    L.indexOf("-") >= 0 ? M[Pc] = !0 : si.test(L) ? oi.test(L) ? M[Ir] = !0 : M[Rc] = !0 : M[Lc] = !0, bf(n, L, L, M);
  }
  return bf(n, "localhost", ts, {
    ascii: !0
  }), n.jd = new rn(jo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Kp)
  };
}
function Wp(e, t) {
  const n = Rw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, d = 0, u = null, h = -1, S = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, S = 0, u = o) : h >= 0 && (h += n[s].length, S++), d += n[s].length, r += n[s].length, s++;
    r -= h, s -= S, d -= h, a.push({
      t: u.t,
      // token type/name
      v: t.slice(r - d, r),
      // string value
      s: r - d,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function Rw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Li(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function _f(e) {
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
const ns = {
  defaultProtocol: "http",
  events: null,
  format: wf,
  formatHref: wf,
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
function _u(e, t = null) {
  let n = Object.assign({}, ns);
  e && (n = Object.assign(n, e instanceof _u ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
_u.prototype = {
  o: ns,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : ns[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function wf(e) {
  return e;
}
function qp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
qp.prototype = {
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
  toObject(e = ns.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), d = e.get("rel", n, t), u = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), d && (s.rel = d), u && Object.assign(s, u), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: h
    };
  }
};
function fl(e, t) {
  class n extends qp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Iw = fl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Sf = fl("text"), Pw = fl("nl"), $s = fl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ns.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ts && e[1].t === ha;
  }
}), dn = (e) => new rn(e);
function Dw({
  groups: e
}) {
  const t = e.domain.concat([Lo, Io, $i, Po, Do, $o, Mo, Fo, fn, pu, $r, zo, Uo, Bo, Kn, jo, Fr, Ho]), n = [Ro, ha, gu, Gn, mu, $r, Mr, bu, yu, wo, So, Pr, Dr, bo, mo, yo, _o, Co, To, Eo, Ao, ko, Oo, No, xo], i = [Lo, Ro, Io, Po, Do, $o, Mo, Fo, fn, Pr, Dr, $r, zo, Uo, Bo, Mr, Kn, jo, Fr, Ho], a = dn(), r = ee(a, Fr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = dn(), o = dn(), l = dn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = ee(s, $i);
  ee(r, $i, d), ee(o, $i, d), ee(l, $i, d);
  const u = ee(r, Gn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = dn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const S = ee(h, Gn);
  Ie(S, e.domain, h);
  const E = dn(Iw);
  Ie(S, e.tld, E), Ie(S, e.utld, E), ee(d, ts, E);
  const O = ee(h, fn);
  ee(O, fn, O), Ie(O, e.domain, h), Ie(E, e.domain, h), ee(E, Gn, S), ee(E, fn, O);
  const A = ee(s, fn), L = ee(s, Gn);
  ee(A, fn, A), Ie(A, e.domain, s), Ie(L, i, r), Ie(L, e.domain, s);
  const R = dn($s);
  Ie(L, e.tld, R), Ie(L, e.utld, R), Ie(R, e.domain, s), Ie(R, i, r), ee(R, Gn, L), ee(R, fn, A), ee(R, $i, d);
  const M = ee(R, ha), K = dn($s);
  Ie(M, e.numeric, K);
  const F = dn($s), le = dn();
  Ie(F, t, F), Ie(F, n, le), Ie(le, t, F), Ie(le, n, le), ee(R, Kn, F), ee(K, Kn, F);
  const ne = ee(o, ha), P = ee(l, ha), ce = ee(P, Kn), X = ee(ce, Kn);
  Ie(o, e.domain, s), ee(o, Gn, L), ee(o, fn, A), Ie(l, e.domain, s), ee(l, Gn, L), ee(l, fn, A), Ie(ne, e.domain, F), ee(ne, Kn, F), ee(ne, Mr, F), Ie(X, e.domain, F), Ie(X, t, F), ee(X, Kn, F);
  const ae = [
    [Pr, Dr],
    // {}
    [mo, bo],
    // []
    [yo, _o],
    // ()
    [wo, So],
    // <>
    [Co, To],
    // （）
    [Eo, Ao],
    // 「」
    [ko, Oo],
    // 『』
    [No, xo]
    // ＜＞
  ];
  for (let me = 0; me < ae.length; me++) {
    const [J, te] = ae[me], D = ee(F, J);
    ee(le, J, D);
    const $ = dn($s);
    Ie(D, t, $);
    const Y = dn();
    Ie(D, n, Y), ee(D, te, F), Ie($, t, $), Ie($, n, Y), Ie(Y, t, $), Ie(Y, n, Y), ee($, te, F), ee(Y, te, F);
  }
  return ee(a, ts, R), ee(a, vu, Pw), {
    start: a,
    tokens: Kp
  };
}
function $w(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, d = null, u = 0, h = null, S = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (d = l || o.go(n[a].t)); )
      l = null, o = d, o.accepts() ? (S = 0, h = o) : S >= 0 && S++, a++, u++;
    if (S < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(rc(Sf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, O = n.slice(a - u, a);
      r.push(rc(E, t, O));
    }
  }
  return s.length > 0 && r.push(rc(Sf, t, s)), r;
}
function rc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Dt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Mw() {
  Dt.scanner = Lw(Dt.customSchemes);
  for (let e = 0; e < Dt.tokenQueue.length; e++)
    Dt.tokenQueue[e][1]({
      scanner: Dt.scanner
    });
  Dt.parser = Dw(Dt.scanner.tokens);
  for (let e = 0; e < Dt.pluginQueue.length; e++)
    Dt.pluginQueue[e][1]({
      scanner: Dt.scanner,
      parser: Dt.parser
    });
  return Dt.initialized = !0, Dt;
}
function Yp(e) {
  return Dt.initialized || Mw(), $w(Dt.parser.start, e, Wp(Dt.scanner.start, e));
}
Yp.scan = Wp;
function Fw(e) {
  const t = new _u({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Bw), n = Yp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(io(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function zw(e) {
  return e.replace(/"/g, "&quot;");
}
function Uw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${zw(i)}"`);
  }
  return t.join(" ");
}
function Bw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${Uw(t)}>${io(n)}</${e}>`;
}
const Hw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = Fw(t.text));
}, jw = ["title"], Vw = /* @__PURE__ */ Nt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Ft("NcAppSidebar:header:ref");
    return (n, i) => qe((b(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Oe(p(e.name), 1)
    ], 8, jw)), [
      [g(Hw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Gw = ["aria-labelledby"], Kw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Ww = ["id"], qw = {
  key: 2,
  class: "empty-content__description"
}, Yw = {
  key: 3,
  class: "empty-content__action"
}, Xw = /* @__PURE__ */ Nt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = ll();
    return (n, i) => (b(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), T("div", Kw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (b(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          Oe(p(e.name), 1)
        ], !0)
      ], 8, Ww)) : H("", !0),
      e.description !== "" || n.$slots.description ? (b(), T("p", qw, [
        Re(n.$slots, "description", {}, () => [
          Oe(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (b(), T("div", Yw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, Gw));
  }
}), Zw = /* @__PURE__ */ Ze(Xw, [["__scopeId", "data-v-8609a4c1"]]), Jw = {
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
}, Qw = ["aria-hidden", "aria-label"], eS = ["fill", "width", "height"], tS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, nS = { key: 0 };
function iS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", tS, [
        n.title ? (b(), T("title", nS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, eS))
  ], 16, Qw);
}
const aS = /* @__PURE__ */ Ze(Jw, [["render", iS]]), rS = {
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
}, sS = ["aria-hidden", "aria-label"], oS = ["fill", "width", "height"], lS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, cS = { key: 0 };
function uS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", lS, [
        n.title ? (b(), T("title", cS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, oS))
  ], 16, sS);
}
const dS = /* @__PURE__ */ Ze(rS, [["render", uS]]), fS = {
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
}, hS = ["aria-hidden", "aria-label"], pS = ["fill", "width", "height"], vS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, gS = { key: 0 };
function mS(e, t, n, i, a, r) {
  return b(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", vS, [
        n.title ? (b(), T("title", gS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, pS))
  ], 16, hS);
}
const bS = /* @__PURE__ */ Ze(fS, [["render", mS]]), yS = ["aria-selected", "tabindex"], _S = /* @__PURE__ */ Nt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Fg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = mh(e, "selected"), n = /* @__PURE__ */ Fe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), T("button", {
      class: Ce(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Ki),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ce([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          _e(xc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              c("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          _e(xc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              c("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ce(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, yS));
  }
}), wS = "_sidebarTabsButton_q3kBA", SS = "_sidebarTabsButton_legacy_KQ4d1", CS = "_sidebarTabsButton_selected_Pjayf", TS = "_sidebarTabsButton_animatedHighlight_uvp-0", ES = "_sidebarTabsButton__name_rlQsL", AS = "_sidebarTabsButton__icon_QzZg4", kS = "_sidebarTabsButton__iconLayer_ZkZan", OS = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", NS = "_sidebarTabsButton__icon_pop_IA0By", xS = "_sidebarTabsButton__legacyIcon_QhcNW", LS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: wS,
  sidebarTabsButton_legacy: SS,
  sidebarTabsButton_selected: CS,
  sidebarTabsButton_animatedHighlight: TS,
  sidebarTabsButton__name: ES,
  sidebarTabsButton__icon: AS,
  sidebarTabsButton__iconLayer: kS,
  sidebarTabsButton__iconLayer_hidden: OS,
  sidebarTabsButton__icon_pop: NS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: xS
}, RS = {
  $style: LS
}, IS = /* @__PURE__ */ Ze(_S, [["__cssModules", RS]]), PS = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: IS
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
      isLegacy34: Ki,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Ub()]) : t.order - n.order), this.updateActive();
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
}, DS = { class: "app-sidebar-tabs" };
function $S(e, t, n, i, a, r) {
  const s = Be("NcAppSidebarTabsButton");
  return b(), T("div", DS, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ce(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = At(We((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = At(We((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = At(We((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = At(We((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = At(We((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = At(We((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = At(We((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), T("div", {
        key: 0,
        class: Ce(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (b(!0), T(ue, null, ze(a.tabs, (o) => (b(), De(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : H("", !0),
    c("div", {
      class: Ce(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const MS = /* @__PURE__ */ Ze(PS, [["render", $S], ["__scopeId", "data-v-74190d2a"]]);
Gi(wy);
const FS = {
  name: "NcAppSidebar",
  components: {
    NcActions: go,
    NcAppSidebarHeader: Vw,
    NcAppSidebarTabs: MS,
    NcButton: Yn,
    NcLoadingIcon: Up,
    NcEmptyContent: Zw,
    IconArrowRight: bp,
    IconClose: yp,
    IconDockRight: aS,
    IconStar: dS,
    IconStarOutline: bS
  },
  directives: {
    Focus: Sw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: ww
  },
  inject: {
    ncContentSelector: {
      from: mp,
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
    const e = /* @__PURE__ */ Fe(null);
    return hn("NcAppSidebar:header:ref", e), {
      uid: ll(),
      isMobile: vy(),
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
    isSlotPopulated: hu,
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
      this.focusTrap || (this.focusTrap = su([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Xr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ga.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, zS = ["aria-labelledby"], US = { class: "app-sidebar-header__info" }, BS = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, HS = { class: "app-sidebar-header__name-container" }, jS = { class: "app-sidebar-header__mainname-container" }, VS = ["placeholder", "value"], GS = ["title"], KS = {
  key: 2,
  class: "app-sidebar-header__description"
};
function WS(e, t, n, i, a, r) {
  const s = Be("IconDockRight"), o = Be("NcButton"), l = Be("NcLoadingIcon"), d = Be("IconStar"), u = Be("IconStarOutline"), h = Be("NcAppSidebarHeader"), S = Be("IconArrowRight"), E = Be("NcActions"), O = Be("IconClose"), A = Be("NcAppSidebarTabs"), L = Be("NcEmptyContent"), R = Uu("focus"), M = Uu("click-outside");
  return b(), De(Em, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      qe(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = At((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), De(th, {
          key: 0,
          to: r.ncContentSelector
        }, [
          _e(o, Ht({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                _e(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: Ce(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (b(), De(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", US, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), T("div", {
                key: 0,
                class: Ce(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = At((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: Ce(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), T("div", BS, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), De(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: We(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (b(), De(l, { key: 0 })) : a.isStarred ? (b(), De(d, {
                          key: 1,
                          size: 20
                        })) : (b(), De(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", HS, [
                  c("div", jS, [
                    qe(_e(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: We(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Va, !n.nameEditable]
                    ]),
                    n.nameEditable ? qe((b(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = We((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      qe(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = At(We((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, VS), [
                        [R]
                      ]),
                      _e(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          _e(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), De(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: ke(() => [
                        Re(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : H("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      Oe(p(n.subname), 1)
                    ], !0)
                  ], 8, GS)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          _e(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: We(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              _e(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), T("div", KS, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        qe(_e(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            Re(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Va, !n.loading]
        ]),
        n.loading ? (b(), De(L, { key: 1 }, {
          icon: ke(() => [
            _e(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, zS), [
        [Va, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const qS = /* @__PURE__ */ Ze(FS, [["render", WS], ["__scopeId", "data-v-c2c6820b"]]), YS = {
  name: "NcActionLink",
  mixins: [wp],
  inject: {
    isInSemanticMenu: {
      from: ou,
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
}, XS = ["role"], ZS = ["download", "href", "aria-label", "target", "title", "role"], JS = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, QS = { class: "action-link__name" }, eC = ["textContent"], tC = ["textContent"], nC = {
  key: 2,
  class: "action-link__text"
};
function iC(e, t, n, i, a, r) {
  return b(), T("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("a", {
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
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Ce(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), T("span", JS, [
        c("strong", QS, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, eC)
      ])) : e.isLongText ? (b(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, tC)) : (b(), T("span", nC, p(e.text), 1)),
      H("", !0)
    ], 8, ZS)
  ], 8, XS);
}
const $a = /* @__PURE__ */ Ze(YS, [["render", iC], ["__scopeId", "data-v-32f01b7a"]]);
Gi(Ay);
const aC = `<!--
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
`, rC = `<!--
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
`, sC = { class: "vue-skip-actions__container" }, oC = { class: "vue-skip-actions__headline" }, lC = { class: "vue-skip-actions__buttons" }, cC = /* @__PURE__ */ Nt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    hn(gp, o), hn(mp, "#content-vue"), hn("appName", q(() => t.appName));
    const n = ls(), i = /* @__PURE__ */ Fe(!1), a = /* @__PURE__ */ Fe(), r = q(() => a.value === "navigation" ? rC : aC);
    ch(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      mi("toggle-navigation", { open: !0 }), vn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), T("div", {
      id: "content-vue",
      class: Ce(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Ki) }]])
    }, [
      (b(), De(th, { to: "#skip-actions" }, [
        c("div", sC, [
          c("div", oC, p(g(yt)("Keyboard navigation help")), 1),
          c("div", lC, [
            qe(_e(Yn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: We(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Oe(p(g(yt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Va, i.value]
            ]),
            _e(Yn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Oe(p(g(yt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          qe(_e(ol, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Va, !g(n)]
          ])
        ])
      ])),
      Re(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), uC = /* @__PURE__ */ Ze(cC, [["__scopeId", "data-v-d13dcb98"]]), dC = { class: "library-shelf-tree-node" }, fC = ["aria-expanded", "aria-label"], hC = ["href"], pC = { class: "library-shelf-summary-title" }, vC = { dir: "auto" }, gC = { class: "library-muted" }, mC = { dir: "auto" }, bC = {
  key: 1,
  role: "status",
  class: "library-muted"
}, yC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, _C = {
  key: 3,
  class: "library-shelf-tree"
}, wC = ["disabled"], SC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Fe(!1), i = /* @__PURE__ */ Fe(!1), a = /* @__PURE__ */ Fe(!1), r = /* @__PURE__ */ Fe(!1), s = /* @__PURE__ */ Fe([]), o = /* @__PURE__ */ Fe(!1), l = /* @__PURE__ */ Fe(0);
    async function d() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await u();
    }
    async function u() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(l.value) }), S = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!S.ok) throw new Error("Shelf children request failed");
          const E = await S.json(), O = Array.isArray(E?.nodes) ? E.nodes : [];
          s.value.push(...O), o.value = E?.hasMore === !0, l.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : s.value.length, i.value = !o.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, S) => {
      const E = Be("ShelfTreeNode", !0);
      return b(), T("li", dC, [
        e.node.hasChildren ? (b(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: d
        }, p(n.value ? "−" : "+"), 9, fC)) : H("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", pC, [
            c("strong", null, [
              c("bdi", vC, p(e.node.label), 1)
            ]),
            c("span", null, p(g(Vn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", gC, [
            c("bdi", mC, p(e.node.path), 1)
          ])
        ], 8, hC),
        a.value ? (b(), T("small", bC, p(g(m)("library", "Loading folders…")), 1)) : r.value ? (b(), T("small", yC, p(g(m)("library", "Could not load folders.")), 1)) : H("", !0),
        n.value && s.value.length ? (b(), T("ul", _C, [
          (b(!0), T(ue, null, ze(s.value, (O) => (b(), De(E, {
            key: O.id,
            node: O,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : H("", !0),
        n.value && o.value ? (b(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(g(m)("library", "Load more folders")), 9, wC)) : H("", !0)
      ]);
    };
  }
}, CC = ["href"], TC = ["lang", "dir"], EC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, AC = { class: "library-review-header" }, kC = { class: "library-muted library-catalogue-eyebrow" }, OC = { id: "library-review-heading" }, NC = ["aria-label"], xC = ["href", "aria-current"], LC = ["aria-label"], RC = ["name", "value"], IC = {
  type: "submit",
  class: "button secondary"
}, PC = ["aria-busy"], DC = { key: 0 }, $C = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, MC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, FC = { class: "library-metadata-review-workbench-copy" }, zC = { class: "library-muted library-catalogue-eyebrow" }, UC = ["title"], BC = {
  key: 0,
  class: "library-metadata-review-card"
}, HC = {
  class: "library-bidi-human",
  dir: "auto"
}, jC = { class: "library-muted" }, VC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, GC = { class: "library-metadata-review-fields" }, KC = {
  class: "library-bidi-human",
  dir: "auto"
}, WC = {
  class: "library-bidi-human",
  dir: "auto"
}, qC = {
  class: "library-bidi-human",
  dir: "auto"
}, YC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, XC = {
  class: "library-bidi-human",
  dir: "auto"
}, ZC = {
  class: "library-bidi-human",
  dir: "auto"
}, JC = ["action"], QC = ["value"], eT = ["value"], tT = {
  type: "submit",
  class: "button secondary"
}, nT = { class: "library-metadata-review-actions" }, iT = ["href"], aT = ["href"], rT = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, sT = ["href"], oT = ["aria-label"], lT = ["onClick"], cT = {
  class: "library-bidi-human",
  dir: "auto"
}, uT = {
  key: 0,
  class: "library-muted"
}, dT = {
  class: "library-bidi-human",
  dir: "auto"
}, fT = {
  key: 1,
  class: "library-scan-error"
}, hT = {
  class: "library-bidi-human",
  dir: "auto"
}, pT = ["onClick"], vT = ["href"], gT = ["aria-label"], mT = ["href"], bT = {
  key: 1,
  class: "library-muted"
}, yT = { key: 0 }, _T = ["href"], wT = {
  key: 3,
  class: "library-muted"
}, ST = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, CT = { class: "library-home-header" }, TT = { class: "library-muted library-catalogue-eyebrow" }, ET = { id: "library-home-heading" }, AT = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, kT = { id: "library-continue-heading" }, OT = { class: "library-muted" }, NT = ["href"], xT = {
  key: 0,
  class: "library-home-card-row"
}, LT = ["onClick"], RT = { class: "library-cover-frame" }, IT = ["src"], PT = { class: "library-cover-summary" }, DT = ["onClick"], $T = { dir: "auto" }, MT = {
  key: 0,
  class: "library-cover-creator"
}, FT = { dir: "auto" }, zT = ["href"], UT = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, BT = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, HT = { id: "library-recent-heading" }, jT = { class: "library-muted" }, VT = ["href"], GT = {
  key: 0,
  class: "library-home-card-row"
}, KT = ["onClick"], WT = { class: "library-cover-frame" }, qT = ["src"], YT = { class: "library-cover-summary" }, XT = ["onClick"], ZT = { dir: "auto" }, JT = {
  key: 0,
  class: "library-cover-creator"
}, QT = { dir: "auto" }, eE = ["href"], tE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, nE = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, iE = { id: "library-home-shelves-heading" }, aE = { class: "library-muted" }, rE = ["href"], sE = ["aria-label"], oE = ["href"], lE = { dir: "auto" }, cE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, uE = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, dE = { id: "library-home-attention-heading" }, fE = { class: "library-muted" }, hE = ["href"], pE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, vE = { class: "library-home-header" }, gE = { class: "library-muted library-catalogue-eyebrow" }, mE = { id: "library-shelves-landing-heading" }, bE = { class: "library-muted" }, yE = ["aria-label"], _E = { class: "library-shelf-tree" }, wE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, SE = { class: "library-muted" }, CE = { class: "library-empty-actions" }, TE = ["href"], EE = ["href"], AE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, kE = { class: "library-catalogue-header" }, OE = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, NE = { id: "library-catalogue-heading" }, xE = ["aria-label"], LE = ["aria-label"], RE = ["name", "value"], IE = { class: "library-quick-search-row" }, PE = ["title"], DE = ["placeholder"], $E = { "data-library-control": "sort" }, ME = { value: "title" }, FE = { value: "recent" }, zE = { value: "publicationDate" }, UE = { value: "publication" }, BE = { value: "lastOpened" }, HE = { value: "format" }, jE = ["aria-label"], VE = ["aria-pressed"], GE = ["aria-pressed"], KE = ["aria-pressed"], WE = ["aria-pressed"], qE = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, YE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, XE = ["title", "aria-label"], ZE = { class: "library-workspace-scope-badge" }, JE = ["aria-label"], QE = { value: "" }, eA = ["value"], tA = { value: "" }, nA = ["value"], iA = { class: "library-publication-filter" }, aA = { for: "library-publication-search" }, rA = ["placeholder", "aria-expanded"], sA = ["value"], oA = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, lA = ["onClick"], cA = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, uA = { class: "library-year-filter" }, dA = { for: "library-year-search" }, fA = ["placeholder", "aria-expanded"], hA = ["value"], pA = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, vA = ["onClick"], gA = {
  type: "submit",
  class: "button secondary library-year-apply"
}, mA = { class: "library-creator-filter" }, bA = { for: "library-creator-search" }, yA = ["placeholder", "title", "aria-expanded"], _A = ["value"], wA = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, SA = ["onClick"], CA = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, TA = ["placeholder"], EA = { value: "" }, AA = ["value"], kA = { value: "" }, OA = ["value"], NA = { value: "" }, xA = ["value"], LA = { value: "" }, RA = ["value"], IA = { value: "" }, PA = ["value"], DA = { value: "" }, $A = ["value"], MA = { value: "" }, FA = { value: "1" }, zA = {
  type: "submit",
  class: "button primary"
}, UA = {
  href: "?",
  class: "button secondary"
}, BA = {
  id: "library-collections",
  class: "library-saved-collections"
}, HA = ["title"], jA = ["action", "title"], VA = ["value"], GA = ["value"], KA = ["placeholder", "disabled"], WA = ["disabled", "title"], qA = ["aria-label"], YA = ["href"], XA = ["action"], ZA = ["value"], JA = {
  type: "submit",
  class: "button tertiary"
}, QA = ["aria-label"], e2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, t2 = ["title"], n2 = { class: "library-workspace-panel-purpose" }, i2 = { class: "library-workspace-scope-badge" }, a2 = { "aria-live": "polite" }, r2 = ["action"], s2 = ["value"], o2 = ["placeholder"], l2 = ["title"], c2 = ["action"], u2 = ["value"], d2 = ["placeholder"], f2 = ["title"], h2 = ["action"], p2 = ["value"], v2 = ["name", "value"], g2 = ["title"], m2 = ["action"], b2 = ["value"], y2 = ["name", "value"], _2 = { name: "bulkEditField" }, w2 = { value: "publicationType" }, S2 = { value: "subtitle" }, C2 = { value: "creators" }, T2 = { value: "publication" }, E2 = { value: "publicationDate" }, A2 = { value: "language" }, k2 = { value: "publisher" }, O2 = { value: "genres" }, N2 = { value: "classifications" }, x2 = ["placeholder"], L2 = ["title"], R2 = ["action"], I2 = ["value"], P2 = ["name", "value"], D2 = ["title"], $2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, M2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, F2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, z2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, U2 = { class: "library-muted library-catalogue-eyebrow" }, B2 = ["title"], H2 = ["aria-label"], j2 = { key: 0 }, V2 = { key: 1 }, G2 = { key: 2 }, K2 = ["aria-label"], W2 = { key: 0 }, q2 = { key: 1 }, Y2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, X2 = { class: "library-muted library-catalogue-eyebrow" }, Z2 = ["title"], J2 = ["aria-label"], Q2 = ["href"], ek = {
  key: 0,
  class: "library-notice"
}, tk = { class: "library-publication-issue-label" }, nk = ["href"], ik = { class: "library-muted" }, ak = {
  key: 1,
  class: "library-publication-unknown-issues"
}, rk = ["title"], sk = ["href"], ok = { class: "library-catalogue-status-row" }, lk = { class: "library-muted library-filter-result-summary" }, ck = { key: 0 }, uk = { href: "?" }, dk = ["aria-label"], fk = { class: "library-pagination-range" }, hk = { key: 0 }, pk = ["href"], vk = {
  key: 1,
  class: "library-muted"
}, gk = ["href"], mk = {
  key: 3,
  class: "library-muted"
}, bk = ["aria-label"], yk = ["href", "aria-label", "onClick"], _k = ["title"], wk = { class: "library-empty-actions" }, Sk = ["href"], Ck = { class: "library-muted" }, Tk = ["title"], Ek = { class: "library-empty-actions" }, Ak = ["href"], kk = ["title"], Ok = { class: "library-empty-actions" }, Nk = ["href"], xk = {
  href: "?",
  class: "button primary"
}, Lk = ["title"], Rk = { class: "library-empty-actions" }, Ik = ["href"], Pk = {
  key: 6,
  class: "library-select-visible"
}, Dk = ["checked"], $k = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, Mk = { class: "library-item-selection" }, Fk = ["checked", "aria-label", "onChange"], zk = { class: "library-catalogue-list-main" }, Uk = ["onClick"], Bk = {
  class: "library-bidi-human",
  dir: "auto"
}, Hk = {
  key: 0,
  class: "library-muted"
}, jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Vk = { class: "library-catalogue-list-metadata" }, Gk = { key: 0 }, Kk = {
  class: "library-bidi-human",
  dir: "auto"
}, Wk = { key: 1 }, qk = { key: 2 }, Yk = ["dir"], Xk = { key: 3 }, Zk = {
  class: "library-bidi-human",
  dir: "auto"
}, Jk = { class: "library-catalogue-list-actions" }, Qk = ["href"], eO = ["onClick"], tO = { class: "library-item-selection" }, nO = ["checked", "aria-label", "onChange"], iO = ["aria-labelledby", "aria-expanded", "onClick"], aO = ["id"], rO = { class: "library-cover-frame" }, sO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, oO = ["src", "onLoad", "onError"], lO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, cO = ["action", "onSubmit"], uO = ["value"], dO = ["value"], fO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], hO = ["data-library-star-error"], pO = { class: "library-cover-summary" }, vO = { class: "library-cover-primary" }, gO = ["id"], mO = ["onClick"], bO = {
  class: "library-bidi-human",
  dir: "auto"
}, yO = {
  key: 0,
  class: "library-cover-creator"
}, _O = {
  class: "library-bidi-human",
  dir: "auto"
}, wO = {
  key: 1,
  class: "library-cover-badges"
}, SO = {
  key: 0,
  class: "library-cover-badge"
}, CO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, TO = {
  key: 1,
  class: "library-cover-context"
}, EO = {
  class: "library-bidi-human",
  dir: "auto"
}, AO = { class: "library-cover-primary-actions" }, kO = ["href"], OO = ["aria-label"], NO = { class: "library-pagination-range" }, xO = { key: 0 }, LO = ["href"], RO = {
  key: 1,
  class: "library-muted"
}, IO = ["href"], PO = {
  key: 3,
  class: "library-muted"
}, DO = { class: "library-sidebar-content" }, $O = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, MO = ["role"], FO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, zO = { class: "library-sidebar-publication-header" }, UO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, BO = ["src"], HO = { class: "library-sidebar-publication-summary" }, jO = { class: "library-muted library-catalogue-eyebrow" }, VO = {
  class: "library-bidi-human",
  dir: "auto"
}, GO = { key: 0 }, KO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, WO = { class: "library-detail-drawer-actions" }, qO = ["href"], YO = ["aria-label"], XO = ["aria-current", "onClick"], ZO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, JO = { id: "library-sidebar-overview-heading" }, QO = {
  key: 0,
  class: "library-sidebar-description"
}, eN = {
  class: "library-bidi-human",
  dir: "auto"
}, tN = { class: "library-detail-drawer-facts" }, nN = { key: 0 }, iN = { key: 1 }, aN = { key: 2 }, rN = { key: 3 }, sN = { key: 4 }, oN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, lN = { id: "library-sidebar-metadata-heading" }, cN = ["placeholder"], uN = ["onUpdate:modelValue", "aria-label", "placeholder"], dN = ["onUpdate:modelValue", "aria-label"], fN = ["onClick"], hN = { class: "library-muted" }, pN = {
  key: 0,
  role: "alert"
}, vN = {
  key: 1,
  role: "status"
}, gN = ["disabled"], mN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, bN = { id: "library-sidebar-suggestions-heading" }, yN = { class: "library-muted" }, _N = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, wN = { id: "library-sidebar-activity-heading" }, SN = { class: "library-detail-drawer-facts" }, CN = { key: 0 }, TN = { key: 1 }, EN = { key: 2 }, AN = { dir: "ltr" }, kN = ["aria-label"], ON = ["disabled"], NN = ["disabled"], xN = 20, LN = "/apps/library", RN = 2147483647, IN = {
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
    function r(_, y) {
      return Object.prototype.hasOwnProperty.call(a, _) && String(y ?? "").trim() === a[_];
    }
    function s(_) {
      const y = new URLSearchParams(_);
      for (const f of Object.keys(a)) {
        const B = [...new Set([...y.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], fe = B.reduce((Le, Ue) => Le + y.getAll(Ue).length, 0);
        if (fe > 1 || B.some((Le) => Le !== f)) {
          for (const Le of B) y.delete(Le);
          continue;
        }
        f !== "status" && fe === 1 && !r(f, y.get(f)) && y.delete(f);
      }
      return y;
    }
    function o(_) {
      return Object.keys(a).some((y) => _.getAll(y).length === 1 && r(y, _.get(y)));
    }
    function l(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([y, f]) => y === "status" || !Object.prototype.hasOwnProperty.call(a, y) || r(y, f)));
    }
    const d = /* @__PURE__ */ $t({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ $t((d.items || []).map((_) => ({ ..._ }))), h = q(() => u), S = q(() => d.shelves || []), E = q(() => d.formats || []), O = q(() => d.publicationTypes?.length ? d.publicationTypes : n), A = q(() => d.publishers || []), L = q(() => d.publications || []), R = q(() => d.publicationIssueContext || null), M = q(() => d.scanStatuses || []), K = q(() => d.workflowStatuses || []), F = q(() => d.genres || []), le = q(() => d.classifications || []), ne = q(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ $t({
      q: d.activeFilters?.q || "",
      view: d.activeFilters?.view || "compact",
      type: d.activeFilters?.type || "",
      publisher: d.activeFilters?.publisher || "",
      publication: d.activeFilters?.publication || "",
      year: d.activeFilters?.year || "",
      creator: d.activeFilters?.creator || "",
      format: d.activeFilters?.format || "",
      tag: d.activeFilters?.tag || "",
      shelf: d.activeFilters?.shelf || "",
      folder: d.activeFilters?.folder || "",
      status: d.activeFilters?.status || "",
      workflowStatus: d.activeFilters?.workflowStatus || "",
      genre: d.activeFilters?.genre || "",
      classification: d.activeFilters?.classification || "",
      scannerConflicts: d.activeFilters?.scannerConflicts || "",
      starred: d.activeFilters?.starred || "",
      needsMetadata: d.activeFilters?.needsMetadata || "",
      coverReview: d.activeFilters?.coverReview || "",
      noCreator: d.activeFilters?.noCreator || "",
      noPublication: d.activeFilters?.noPublication || "",
      noDate: d.activeFilters?.noDate || "",
      titleFromFilename: d.activeFilters?.titleFromFilename || "",
      noDescription: d.activeFilters?.noDescription || "",
      unsupportedContainer: d.activeFilters?.unsupportedContainer || "",
      weakMetadata: d.activeFilters?.weakMetadata || "",
      unreviewedImports: d.activeFilters?.unreviewedImports || "",
      sort: d.activeFilters?.sort || "title"
    });
    for (const _ of Object.keys(a))
      _ !== "status" && (r(_, P[_]) || (P[_] = ""));
    const ce = /* @__PURE__ */ Fe(P.publication), X = /* @__PURE__ */ Fe(!1), ae = /* @__PURE__ */ Fe(null), me = q(() => {
      const _ = ce.value.trim().toLocaleLowerCase();
      return (_ !== "" && ae.value !== null ? ae.value : L.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, xN);
    });
    pt(() => P.publication, (_) => {
      ce.value = _ || "";
    });
    let J = null, te = null, D = 0;
    pt(ce, (_) => {
      window.clearTimeout(J), te?.abort(), te = null, ae.value = null;
      const y = String(_ || "").trim();
      if (y === "") return;
      const f = ++D;
      J = window.setTimeout(() => {
        Jp(y, f);
      }, 200);
    });
    const $ = /* @__PURE__ */ Fe(P.creator), Y = /* @__PURE__ */ Fe(!1), re = /* @__PURE__ */ Fe(null), ie = q(() => re.value || []);
    pt(() => P.creator, (_) => {
      $.value = _ || "";
    });
    let he = null, de = null, Te = 0;
    pt($, (_) => {
      window.clearTimeout(he), de?.abort(), de = null, re.value = null;
      const y = String(_ || "").trim();
      if (y === "") return;
      const f = ++Te;
      he = window.setTimeout(() => {
        Xp(y, f);
      }, 200);
    });
    const ge = /* @__PURE__ */ Fe(P.year), je = /* @__PURE__ */ Fe(!1), Ee = /* @__PURE__ */ Fe(null), nt = q(() => Ee.value || []);
    pt(() => P.year, (_) => {
      ge.value = _ || "";
    });
    let ot = null, lt = null, wt = 0;
    pt(ge, (_) => {
      window.clearTimeout(ot), lt?.abort(), lt = null, Ee.value = null;
      const y = String(_ || "").trim();
      if (y === "") return;
      const f = ++wt;
      ot = window.setTimeout(() => {
        Zp(y, f);
      }, 200);
    });
    const it = Object.fromEntries(Object.keys(P).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), ln = window.location.pathname.indexOf(LN), U = ln >= 0 ? window.location.pathname.slice(0, ln) : "", v = {
      catalogue: `${U}/apps/library/`,
      review: `${U}/apps/library/?scannerConflicts=1`,
      settings: `${U}/settings/user/library`
    };
    function C(_, y) {
      if (typeof _ != "string" || _ === "") return y;
      try {
        const f = U ? `${U}/` : "/";
        let B = _;
        for (let fe = 0; fe < 5; fe += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return y;
          const Le = new URL(B, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return y;
          const Ue = B.split(/[?#]/, 1)[0];
          for (const tn of Ue.split("/")) {
            let Oi = tn;
            for (let La = 0; La < 5; La += 1) {
              const Un = decodeURIComponent(Oi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return y;
              if (Un === Oi) break;
              if (Oi = Un, La === 4) return y;
            }
          }
          const ft = decodeURI(B);
          if (ft === B) return _;
          B = ft;
        }
        return y;
      } catch {
        return y;
      }
    }
    const k = q(() => C(d.settingsUrl, v.settings)), N = q(() => C(d.catalogueRootUrl, v.catalogue)), x = q(() => C(d.homeUrl, `${v.catalogue}?home=1`)), z = q(() => C(d.shelvesUrl, `${v.catalogue}?shelves=1`)), W = q(() => C(d.reviewUrl || d.scannerConflictReviewUrl, v.review)), V = q(() => Object.entries(a).some(([_, y]) => P[_] === y)), Q = q(() => i.reduce((_, y) => _ + Number(Au.value[y.countKey] || 0), 0)), j = q(() => d.surface === "home"), ye = q(() => d.surface === "shelves"), se = q(() => !j.value && !ye.value && !V.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), be = q(() => [
      { key: "home", name: m("library", "Home"), href: x.value, active: j.value },
      { key: "all", name: m("library", "All publications"), href: N.value, active: se.value },
      { key: "starred", name: m("library", "Starred"), href: `${N.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${N.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: z.value, active: ye.value || !!P.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${N.value}#library-collections`, active: !1 }
    ]), ve = q(() => d.requestToken || ""), xe = q(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), $e = q(() => d.shelfChildrenUrl || "/apps/library/shelves/children"), Pe = q(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Qe = q(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), at = q(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), St = q(() => d.itemSidebarUrlTemplate || `${U}/apps/library/items/__ITEM_ID__/sidebar`), xt = q(() => d.batchTagUrl || "/apps/library/bulk/tags"), Wt = q(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Jn = q(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), dt = q(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), jt = q(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ti = q(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Qn = q(() => d.discoveryPage === "publication"), Wi = q(() => d.discoveryPage === "year"), qi = q(() => d.discoveryPage === "creator"), xn = q(() => Qn.value || Wi.value || qi.value), ei = q(() => d.discoveryTitle || P.publication || P.year || P.creator || ""), cs = q(() => xn.value ? ei.value : m("library", "Library")), Xa = q(() => qi.value ? m("library", "Creator") : Wi.value ? m("library", "Publication year") : m("library", "Publication / series")), Za = q(() => Number(d.rootCount || 0)), us = q(() => Number(d.enabledRootCount || 0)), wa = q(() => Za.value === 0), Ei = q(() => Za.value > 0 && us.value === 0), Yi = q(() => _n.value.length > 0), Jt = {
      q: "Search",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
      creator: "Creator",
      format: "Format",
      tag: "Nextcloud tag",
      shelf: "Shelf",
      folder: "Folder",
      status: "Scan status",
      workflowStatus: "Workflow status",
      genre: "Genre",
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
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, ti = q(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const y = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", B = _.get("batchMetadataUnchanged") || "0", fe = _.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: y, unchanged: B, skipped: fe });
    }), Sa = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ca = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ds = q(() => d.savedCollections || []), fs = q(() => d.savedCollectionSaveUrl || "/apps/library/collections"), Ja = q(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Qa = ["compact", "gallery", "list", "shelf"], Lt = q(() => Qa.includes(P.view) ? P.view : "compact"), hl = q(() => ({
      "library-cover-gallery--compact": Lt.value === "compact",
      "library-cover-gallery--gallery": Lt.value === "gallery",
      "library-cover-gallery--shelf": Lt.value === "shelf"
    })), _n = q(() => Object.entries(Jt).map(([_, y]) => ({ key: _, label: m("library", y), value: P[_] || "" })).filter((_) => String(_.value).trim() !== "")), pl = q(() => Object.entries(P).filter(([_, y]) => !["q", "sort", "starred"].includes(_) && String(y || "").trim() !== "").map(([_, y]) => ({ key: _, value: y }))), Ta = q(() => Object.entries(l(P)).filter(([_, y]) => String(y || "").trim() !== "").map(([_, y]) => ({ key: _, value: y }))), rt = q(() => Ta.value.filter(({ key: _, value: y }) => _ !== "q" && !(_ === "sort" && y === "title"))), Ln = /* @__PURE__ */ $t({}), Ea = q(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), er = q(() => d.homeShelves || []), Aa = q(() => d.shelfTree || []), ka = q(() => d.needsAttention || { count: 0, url: `${N.value}?needsMetadata=1` }), qt = /* @__PURE__ */ Fe([]), Oa = q(() => new Set(qt.value));
    function hs(_, y) {
      const f = new Set(qt.value);
      y ? f.add(Number(_)) : f.delete(Number(_)), qt.value = [...f];
    }
    function vl(_) {
      qt.value = _.currentTarget.checked ? h.value.map((y) => Number(y.id)) : [];
    }
    function gl() {
      const _ = new Set(h.value.map((y) => Number(y.id)));
      qt.value = qt.value.filter((y) => _.has(y));
    }
    function Rn(_) {
      const y = _.target;
      if (y instanceof HTMLFormElement) {
        y.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of qt.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", y.appendChild(B);
        }
      }
    }
    const Ae = /* @__PURE__ */ Fe(null), cn = /* @__PURE__ */ Fe(null), st = /* @__PURE__ */ $t({ loading: !1, error: "", missing: !1 }), ni = /* @__PURE__ */ Fe("overview"), Rt = /* @__PURE__ */ $t({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ $t({ title: "", publicationDate: "", identifiers: [] }), ps = /* @__PURE__ */ Fe(null), In = /* @__PURE__ */ Fe(null), Pn = /* @__PURE__ */ Fe(!1);
    let Ai = null, Qt = null, ii = null, Dn = !1, wn = null, Yt = 0;
    const $n = q(() => cn.value !== null), Mn = q(() => Ae.value ? h.value.findIndex((_) => _.id === Ae.value.id) : -1), Na = q(() => Mn.value > 0 ? h.value[Mn.value - 1] : null), Xi = q(() => Mn.value >= 0 && Mn.value < h.value.length - 1 ? h.value[Mn.value + 1] : null), vs = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], gs = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Zi(_) {
      const y = String(_ ?? "").trim(), f = y.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : y;
    }
    function ms(_) {
      return { ..._, publicationDate: Zi(_?.publicationDate) };
    }
    function tr(_) {
      mt.title = String(_?.title || ""), mt.publicationDate = Zi(_?.publicationDate), mt.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((y) => ({ scheme: String(y?.scheme || ""), displayValue: String(y?.displayValue || y?.value || "") })) : [], Object.assign(Rt, { saving: !1, saved: !1, error: "" });
    }
    function ml() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function bl(_) {
      mt.identifiers.splice(_, 1);
    }
    async function bs() {
      const _ = Ae.value;
      if (!_?.updateUrl || Rt.saving) return;
      Object.assign(Rt, { saving: !0, saved: !1, error: "" });
      const y = new FormData();
      y.set("requesttoken", ve.value), y.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const B = _[f];
        y.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      y.set("title", mt.title), y.set("publicationDate", Zi(mt.publicationDate)), mt.identifiers.forEach((f, B) => {
        y.set(`identifiers[${B}][scheme]`, f.scheme), y.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: y, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || m("library", "Metadata could not be saved."));
        _.title = mt.title.trim(), _.publicationDate = Zi(mt.publicationDate), _.identifiers = mt.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const fe = h.value.find((Le) => Number(Le.id) === Number(_.id));
        fe && (fe.title = _.title, fe.publicationDate = _.publicationDate), Rt.saved = !0;
      } catch (f) {
        Rt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        Rt.saving = !1;
      }
    }
    const en = q(() => {
      const _ = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), y = _ ? h.value.find((f) => w(f).length > 0) : null;
      return {
        enabled: _,
        item: y,
        fields: y ? w(y) : [],
        reviewNextUrl: Ti.value,
        skipUrl: ne.value.nextUrl || Ti.value
      };
    }), nr = q(() => i.map((_) => ({
      ..._,
      label: m("library", _.label),
      href: `${N.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String(P[_.key] || "") === _.value
    })));
    function Z(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function w(_) {
      const y = _.fieldValues || {}, f = _.fieldSources || {};
      return vs.filter((B) => Object.prototype.hasOwnProperty.call(y, B)).map((B) => {
        const fe = Z(_[B]), Le = Z(y[B]), Ue = Z(f[B] || _.metadataSource || "scanner"), ft = Ue.includes("filename") || Ue.includes("path") ? Le : "", tn = Ue.includes("sidecar") ? Le : "";
        return { field: B, currentValue: fe, scannerCandidate: Le, pathTemplateCandidate: ft, sidecarValue: tn, sourceProvenance: Ue, differs: fe !== Le };
      }).filter((B) => B.differs);
    }
    let I = 0, G = null;
    function oe() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const y = Number(_[0]);
      return Number.isSafeInteger(y) && y <= RN ? y : null;
    }
    function pe(_, y = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${y}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Se(_, { historyMode: y = "push", seed: f = null } = {}) {
      G?.abort();
      const B = ++I, fe = new AbortController();
      G = fe, cn.value = _, ni.value = "overview", Ae.value = f && Number(f.id) === _ ? ms(f) : null, Ae.value && tr(Ae.value), Object.assign(st, { loading: !0, error: "", missing: !1 }), y !== "none" && pe(_, y);
      try {
        const Le = St.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), Ue = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: fe.signal });
        if (B !== I) return;
        if (!Ue.ok) {
          Ae.value = null, st.missing = Ue.status === 404, st.error = Ue.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const ft = await Ue.json();
        if (B !== I) return;
        if (typeof ft?.item?.id != "number" || !Number.isSafeInteger(ft.item.id) || ft.item.id !== _) {
          Ae.value = null, st.missing = !1, st.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Ae.value = ms(ft.item), tr(Ae.value), await vn();
      } catch (Le) {
        B === I && Le?.name !== "AbortError" && (Ae.value = null, st.missing = !1, st.error = m("library", "Could not load publication details. Try again."));
      } finally {
        B === I && (st.loading = !1, G = null);
      }
    }
    function Me(_, y) {
      Ji(), Ai = y?.currentTarget instanceof HTMLElement ? y.currentTarget : null, Se(Number(_.id), { seed: _ });
    }
    function Je({ historyMode: _ = "push", restoreFocus: y = !0 } = {}) {
      ii = y ? Ai : null, Ai = null, G?.abort(), G = null, I += 1, cn.value = null, Ae.value = null, ni.value = "overview", Object.assign(st, { loading: !1, error: "", missing: !1 }), _ !== "none" && pe(null, _);
    }
    function Ct() {
      Pn.value ? (In.value?.$refs?.sidebar || In.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : ps.value?.focus();
    }
    function It() {
      const _ = ii;
      if (ii = null, Ji(), Dn || !_?.isConnected) return;
      const y = Yt;
      wn = window.requestAnimationFrame(() => {
        wn = null, !(y !== Yt || Dn || $n.value || !_.isConnected) && _.focus();
      });
    }
    function Ji() {
      Yt += 1, wn !== null && (window.cancelAnimationFrame(wn), wn = null);
    }
    function ut(_ = Qt) {
      Pn.value = !!_?.matches, $n.value && vn(Ct);
    }
    function ys(_) {
      _ && Se(Number(_.id), { seed: _ });
    }
    const xa = /* @__PURE__ */ Fe(null);
    let _s = null, Fn = 0, ki = null;
    const Sn = /* @__PURE__ */ $t({ loading: !1, error: "" });
    function wu(_) {
      const y = s(new FormData(_));
      y.delete("publicationSearch"), y.delete("creatorSearch"), y.delete("yearSearch");
      for (const f of Array.from(y.keys()))
        String(y.get(f) || "").trim() === "" && y.delete(f);
      return y.delete("page"), y.get("view") === "compact" && y.delete("view"), y;
    }
    async function Su(_, y, f) {
      const B = new URLSearchParams();
      for (const [Ue, ft] of Object.entries(P)) {
        const tn = String(ft || "").trim();
        Ue !== _ && tn !== "" && !(Ue === "sort" && tn === "title") && !(Ue === "view" && tn === "compact") && B.set(Ue, tn);
      }
      B.set(`${_}Search`, y);
      const fe = new AbortController();
      _ === "creator" ? de = fe : lt = fe;
      const Le = _ === "creator" ? Qe.value : at.value;
      try {
        const Ue = await fetch(`${Le}?${B}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: fe.signal });
        if (!Ue.ok) throw new Error(`${_} suggestions request failed: ${Ue.status}`);
        const ft = await Ue.json(), tn = _ === "creator" ? Te : wt, Oi = _ === "creator" ? $.value : ge.value;
        f === tn && Oi.trim() === y && (_ === "creator" ? re.value = Array.isArray(ft.creators) ? ft.creators : [] : Ee.value = Array.isArray(ft.years) ? ft.years : []);
      } catch (Ue) {
        Ue?.name !== "AbortError" && (_ === "creator" && f === Te && (re.value = null), _ === "year" && f === wt && (Ee.value = null));
      }
    }
    function Xp(_, y) {
      return Su("creator", _, y);
    }
    function Zp(_, y) {
      return Su("year", _, y);
    }
    async function Jp(_, y) {
      const f = new URLSearchParams();
      for (const [fe, Le] of Object.entries(P)) {
        const Ue = String(Le || "").trim();
        fe !== "publication" && Ue !== "" && !(fe === "sort" && Ue === "title") && !(fe === "view" && Ue === "compact") && f.set(fe, Ue);
      }
      f.set("publicationSearch", _);
      const B = new AbortController();
      te = B;
      try {
        const fe = await fetch(`${Pe.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!fe.ok) throw new Error(`Publication suggestions request failed: ${fe.status}`);
        const Le = await fe.json();
        y === D && ce.value.trim() === _ && (ae.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (fe) {
        fe?.name !== "AbortError" && y === D && (ae.value = null);
      } finally {
        y === D && (te = null);
      }
    }
    function Qp(_) {
      u.splice(0, u.length, ...(_.items || []).map((y) => ({ ...y }))), gl();
      for (const y of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(_, y) && (d[y] = _[y]);
      Object.assign(P, it, _.activeFilters || {});
    }
    async function zn(_, y = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !y?.params) return;
      const B = s(y?.params ?? wu(f)), fe = B.toString(), Le = fe ? `?${fe}` : "", Ue = y?.generation ?? ++Fn, ft = o(B), tn = y?.historyMode ?? (ft ? "push" : "replace"), Oi = y?.historyTraversal === !0;
      if (Ue !== Fn) return;
      y === null && ki?.abort();
      const La = new AbortController();
      ki = La, Sn.loading = !0, Sn.error = "";
      try {
        const Un = await fetch(xe.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: La.signal
        });
        if (Ue !== Fn) return;
        if (!Un.ok) {
          Oi ? ws(B) : ft ? Sn.error = m("library", "Could not load this review queue. Try again.") : ws(B);
          return;
        }
        const yv = await Un.json();
        if (Ue !== Fn) return;
        Qp(yv), tn !== "none" && (history[tn === "push" ? "pushState" : "replaceState"]({}, "", fe ? `?${fe}` : window.location.pathname), $n.value && Je({ historyMode: "none" }));
      } catch (Un) {
        Ue === Fn && Un?.name !== "AbortError" && (Oi ? ws(B) : ft ? Sn.error = m("library", "Could not load this review queue. Try again.") : ws(B));
      } finally {
        Ue === Fn && (ki = null, Sn.loading = !1);
      }
    }
    function Cu() {
      ki?.abort();
      const _ = new URLSearchParams(window.location.search), y = oe();
      _.has("item") && y === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), y === null ? Je({ historyMode: "none" }) : Se(y, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === y) || null }), _.delete("item"), zn(null, {
        params: s(_),
        generation: ++Fn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ws(_) {
      const y = document.createElement("form");
      y.method = "get", y.action = window.location.pathname, y.hidden = !0;
      for (const [f, B] of _.entries()) {
        const fe = document.createElement("input");
        fe.type = "hidden", fe.name = f, fe.value = B, y.appendChild(fe);
      }
      document.body.appendChild(y), y.submit(), y.remove();
    }
    function Tu(_, y = null, f = null) {
      if (y === null) {
        zn(_);
        return;
      }
      zn({ currentTarget: _ }, { params: y, generation: f });
    }
    function ev(_) {
      const y = _?.currentTarget?.form;
      if (!y) return;
      window.clearTimeout(_s), window.clearTimeout(J), D += 1, te?.abort(), te = null;
      const f = ++Fn, B = wu(y);
      ki?.abort(), ki = null, _s = window.setTimeout(() => Tu(y, B, f), 350);
    }
    async function tv(_, y = ce.value) {
      P.publication = String(y || "").trim(), ce.value = P.publication, X.value = !1, await vn(), zn({ currentTarget: _ });
    }
    function nv(_, y) {
      tv(y.currentTarget.form, _);
    }
    async function iv(_) {
      P.publication = String(ce.value || "").trim(), P.creator = String($.value || "").trim(), P.year = String(ge.value || "").trim(), X.value = !1, Y.value = !1, je.value = !1, await vn(), zn({ currentTarget: _ });
    }
    async function Eu(_, y, f) {
      P[y] = String(f || "").trim(), y === "creator" ? ($.value = P.creator, Y.value = !1) : (ge.value = P.year, je.value = !1), await vn(), zn({ currentTarget: _ });
    }
    function av(_) {
      iv(_.currentTarget);
    }
    function rv(_, y) {
      Eu(y.currentTarget.form, "creator", _);
    }
    function sv(_, y) {
      Eu(y.currentTarget.form, "year", _);
    }
    function yl(_) {
      const y = new URLSearchParams();
      for (const [B, fe] of Object.entries(P)) {
        const Le = String(fe || "").trim();
        Le !== "" && B !== _ && !(B === "sort" && Le === "title") && !(B === "view" && Le === "compact") && y.set(B, Le);
      }
      const f = y.toString();
      return f ? `?${f}` : "?";
    }
    function ov(_) {
      const y = new URLSearchParams(yl(_));
      P[_] = "", zn(null, {
        params: y,
        generation: ++Fn
      });
    }
    function lv() {
      return yl("q");
    }
    const Au = q(() => d.smartViewCounts || {}), ku = q(() => {
      const _ = {};
      for (const [y, f] of Object.entries(P)) {
        const B = String(f || "").trim();
        B !== "" && !(y === "sort" && B === "title") && (_[y] = B);
      }
      return _;
    }), cv = q(() => JSON.stringify(ku.value)), _l = q(() => Object.keys(ku.value).length > 0);
    function Ss(_) {
      if (!Qa.includes(_)) return;
      P.view = _;
      const y = s(window.location.search);
      _ === "compact" ? y.delete("view") : y.set("view", _), y.delete("page"), history.replaceState({}, "", y.toString() ? `?${y.toString()}` : window.location.pathname);
    }
    function uv(_) {
      const y = s(window.location.search);
      for (const B of Object.keys(Jt))
        y.delete(B);
      y.delete("page");
      for (const [B, fe] of Object.entries(_))
        String(fe || "").trim() !== "" && y.set(B, String(fe));
      const f = y.toString();
      return f ? `?${f}` : "?";
    }
    function dv(_) {
      return uv(_ || {});
    }
    function fv(_) {
      return Ja.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function ir(_) {
      return String(_ || "").toUpperCase();
    }
    function ar(_) {
      return Ln[_.id] || "loading";
    }
    function hv(_) {
      Ln[_.id] = "loaded";
    }
    function pv(_) {
      Ln[_.id] = "error";
    }
    function wl(_) {
      const y = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return y && f ? `${y} · ${f}` : y || f ? y || f : [_?.publicationType, ir(_?.extension)].filter(Boolean).join(" · ");
    }
    function vv(_) {
      const y = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(y);
    }
    function gv(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || vv(_.target) || (_.preventDefault(), xa.value?.focus(), xa.value?.select?.());
    }
    function mv(_) {
      _.key !== "Escape" || document.activeElement !== xa.value || P.q === "" || (_.preventDefault(), P.q = "", xa.value.value = "", window.clearTimeout(_s), Tu({ currentTarget: xa.value }));
    }
    function bv(_) {
      if (!$n.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Je(), !0;
      if (_.key === "Tab" && Pn.value) {
        if (In.value?.focusTrap) return !1;
        const y = In.value?.$refs?.sidebar || In.value?.$el || In.value, f = [...y?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], fe = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === B || !y.contains(document.activeElement)))
          return _.preventDefault(), fe.focus(), !0;
        if (!_.shiftKey && (document.activeElement === fe || !y.contains(document.activeElement)))
          return _.preventDefault(), B.focus(), !0;
      }
      return _.key === "ArrowLeft" && Na.value ? (_.preventDefault(), ys(Na.value), !0) : _.key === "ArrowRight" && Xi.value ? (_.preventDefault(), ys(Xi.value), !0) : !1;
    }
    function Ou(_) {
      bv(_) || (gv(_), mv(_));
    }
    Vi(() => {
      window.addEventListener("keydown", Ou), window.addEventListener("popstate", Cu), Qt = window.matchMedia?.("(max-width: 1023px)") || null, ut(), Qt?.addEventListener ? Qt.addEventListener("change", ut) : Qt?.addListener?.(ut);
      const _ = new URLSearchParams(window.location.search), y = oe();
      _.has("item") && y === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : y !== null && Se(y, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === y) || null });
    }), Ya(() => {
      Dn = !0, Ji(), window.removeEventListener("keydown", Ou), window.removeEventListener("popstate", Cu), window.clearTimeout(_s), window.clearTimeout(J), window.clearTimeout(he), window.clearTimeout(ot), te?.abort(), de?.abort(), lt?.abort(), Fn += 1, ki?.abort(), ki = null, I += 1, G?.abort(), G = null, Qt?.removeEventListener ? Qt.removeEventListener("change", ut) : Qt?.removeListener?.(ut), Qt = null, ii = null;
    });
    const rr = /* @__PURE__ */ $t({}), sr = /* @__PURE__ */ $t({});
    async function Nu(_, y) {
      const f = y?.currentTarget?.closest?.("form") || y?.currentTarget;
      if (!f || !_?.starUrl || rr[_.id]) return;
      const B = !!_.starred;
      rr[_.id] = !0, sr[_.id] = "", _.starred = !B;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = B, sr[_.id] = m("library", "Could not update star. Try again."));
      } catch {
        _.starred = B, sr[_.id] = m("library", "Could not update star. Try again.");
      } finally {
        rr[_.id] = !1;
      }
    }
    return (_, y) => (b(), De(g(uC), { "app-name": "library" }, {
      default: ke(() => [
        _e(g(G_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: ke(() => [
            _e(g(vp), null, {
              default: ke(() => [
                (b(!0), T(ue, null, ze(be.value, (f) => (b(), De(g(mf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                _e(g(mf), {
                  active: V.value,
                  href: W.value,
                  name: Q.value > 0 ? `${g(m)("library", "Review")} (${Q.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: k.value
            }, [
              y[34] || (y[34] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, CC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        _e(g(o_), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              V.value ? (b(), T("section", EC, [
                c("header", AC, [
                  c("p", kC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", OC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), T(ue, null, ze(nr.value, (f) => (b(), T("a", {
                    key: f.key,
                    class: Ce(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(Au.value[f.countKey] || 0)), 1)
                  ], 10, xC))), 128))
                ], 8, NC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: We(zn, ["prevent"])
                }, [
                  (b(!0), T(ue, null, ze(rt.value, (f) => (b(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, RC))), 128)),
                  c("label", null, [
                    Oe(p(g(m)("library", "Search within this queue")), 1),
                    qe(c("input", {
                      "onUpdate:modelValue": y[0] || (y[0] = (f) => P.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Cn, P.q]
                    ])
                  ]),
                  c("button", IC, p(g(m)("library", "Apply")), 1)
                ], 40, LC),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Sn.loading ? "true" : "false"
                }, [
                  Sn.loading ? (b(), T("span", DC, p(g(m)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, PC),
                Sn.error ? (b(), T("p", $C, p(Sn.error), 1)) : H("", !0),
                en.value.enabled ? (b(), T("section", MC, [
                  c("div", FC, [
                    c("p", zC, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, UC)
                  ]),
                  en.value.item ? (b(), T("article", BC, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", HC, p(en.value.item.title), 1)
                      ]),
                      c("span", jC, [
                        c("bdi", VC, p(en.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", GC, [
                      (b(!0), T(ue, null, ze(en.value.fields, (f) => (b(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", KC, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", WC, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", qC, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", YC, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", XC, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", ZC, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: en.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ve.value
                          }, null, 8, QC),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, eT),
                          y[35] || (y[35] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", tT, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, JC)
                      ]))), 128))
                    ]),
                    c("footer", nT, [
                      c("a", {
                        class: "button secondary",
                        href: en.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, iT),
                      c("a", {
                        class: "button secondary",
                        href: en.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, aT)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !Sn.loading && !Sn.error ? (b(), T("div", rT, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: N.value
                  }, p(g(m)("library", "Back to Library")), 9, sT)
                ])) : (b(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), T(ue, null, ze(h.value, (f) => (b(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => Me(f, B)
                        }, [
                          c("bdi", cT, p(f.title), 1)
                        ], 8, lT)
                      ]),
                      f.creators ? (b(), T("p", uT, [
                        c("bdi", dT, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (b(), T("p", fT, [
                        c("bdi", hT, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => Me(f, B)
                      }, p(g(m)("library", "Details")), 9, pT),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, vT)
                    ])
                  ]))), 128))
                ], 8, oT)),
                h.value.length > 0 ? (b(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (b(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, mT)) : (b(), T("span", bT, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (b(), T("span", yT, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.nextUrl ? (b(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, _T)) : (b(), T("span", wT, p(g(m)("library", "Next")), 1))
                ], 8, gT)) : H("", !0)
              ])) : j.value ? (b(), T("main", ST, [
                c("header", CT, [
                  c("p", TT, p(g(m)("library", "Your library")), 1),
                  c("h2", ET, p(g(m)("library", "Home")), 1)
                ]),
                c("section", AT, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", kT, p(g(m)("library", "Continue reading")), 1),
                      c("p", OT, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, NT)
                  ]),
                  Ea.value.continueReading.length ? (b(), T("div", xT, [
                    (b(!0), T(ue, null, ze(Ea.value.continueReading, (f) => (b(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => Me(f, B)
                      }, [
                        c("span", RT, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, IT)
                        ])
                      ], 8, LT),
                      c("div", PT, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => Me(f, B)
                          }, [
                            c("bdi", $T, p(f.title), 1)
                          ], 8, DT)
                        ]),
                        f.creators ? (b(), T("p", MT, [
                          c("bdi", FT, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, zT)
                      ])
                    ]))), 128))
                  ])) : (b(), T("p", UT, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", BT, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", HT, p(g(m)("library", "Recently added")), 1),
                      c("p", jT, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, VT)
                  ]),
                  Ea.value.recentlyAdded.length ? (b(), T("div", GT, [
                    (b(!0), T(ue, null, ze(Ea.value.recentlyAdded, (f) => (b(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => Me(f, B)
                      }, [
                        c("span", WT, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, qT)
                        ])
                      ], 8, KT),
                      c("div", YT, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => Me(f, B)
                          }, [
                            c("bdi", ZT, p(f.title), 1)
                          ], 8, XT)
                        ]),
                        f.creators ? (b(), T("p", JT, [
                          c("bdi", QT, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, eE)
                      ])
                    ]))), 128))
                  ])) : (b(), T("p", tE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", nE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", iE, p(g(m)("library", "Shelves")), 1),
                      c("p", aE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: z.value }, p(g(m)("library", "View all")), 9, rE)
                  ]),
                  er.value.length ? (b(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), T(ue, null, ze(er.value, (f) => (b(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", lE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Vn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, oE))), 128))
                  ], 8, sE)) : (b(), T("p", cE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(ka.value.count || 0) > 0 ? (b(), T("aside", uE, [
                  c("div", null, [
                    c("h3", dE, p(g(m)("library", "Needs attention")), 1),
                    c("p", fE, p(g(Vn)("library", "%n publication needs better details.", "%n publications need better details.", Number(ka.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: ka.value.url
                  }, p(g(m)("library", "Review")), 9, hE)
                ])) : H("", !0)
              ])) : ye.value ? (b(), T("main", pE, [
                c("header", vE, [
                  c("p", gE, p(g(m)("library", "Your library")), 1),
                  c("h2", mE, p(g(m)("library", "Shelves")), 1),
                  c("p", bE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Aa.value.length ? (b(), T("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  c("ul", _E, [
                    (b(!0), T(ue, null, ze(Aa.value, (f) => (b(), De(SC, {
                      key: f.id,
                      node: f,
                      "children-url": $e.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, yE)) : (b(), T("section", wE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", SE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", CE, [
                    c("a", {
                      class: "button primary",
                      href: k.value
                    }, p(g(m)("library", "Add a Library root")), 9, TE),
                    c("a", {
                      class: "button secondary",
                      href: N.value
                    }, p(g(m)("library", "All publications")), 9, EE)
                  ])
                ]))
              ])) : (b(), T("section", AE, [
                c("header", kE, [
                  xn.value ? (b(), T("p", OE, p(Xa.value), 1)) : H("", !0),
                  c("h2", NE, p(cs.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: We(zn, ["prevent"])
                  }, [
                    (b(!0), T(ue, null, ze(pl.value, (f) => (b(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, RE))), 128)),
                    c("div", IE, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          Oe(p(g(m)("library", "Search")) + " ", 1),
                          y[36] || (y[36] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        qe(c("input", {
                          ref_key: "quickSearchInput",
                          ref: xa,
                          "onUpdate:modelValue": y[1] || (y[1] = (f) => P.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: ev
                        }, null, 40, DE), [
                          [Cn, P.q]
                        ])
                      ], 8, PE)
                    ]),
                    c("label", $E, [
                      Oe(p(g(m)("library", "Sort")), 1),
                      qe(c("select", {
                        "onUpdate:modelValue": y[2] || (y[2] = (f) => P.sort = f),
                        name: "sort",
                        onChange: zn
                      }, [
                        c("option", ME, p(g(m)("library", "Title")), 1),
                        c("option", FE, p(g(m)("library", "Date added")), 1),
                        c("option", zE, p(g(m)("library", "Publication date")), 1),
                        c("option", UE, p(g(m)("library", "Series")), 1),
                        c("option", BE, p(g(m)("library", "Recently opened")), 1),
                        c("option", HE, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [Hn, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(m)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ce({ active: Lt.value === "compact" }),
                        "aria-pressed": Lt.value === "compact" ? "true" : "false",
                        onClick: y[3] || (y[3] = (f) => Ss("compact"))
                      }, p(g(m)("library", "Compact")), 11, VE),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ce({ active: Lt.value === "gallery" }),
                        "aria-pressed": Lt.value === "gallery" ? "true" : "false",
                        onClick: y[4] || (y[4] = (f) => Ss("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, GE),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ce({ active: Lt.value === "list" }),
                        "aria-pressed": Lt.value === "list" ? "true" : "false",
                        onClick: y[5] || (y[5] = (f) => Ss("list"))
                      }, p(g(m)("library", "List")), 11, KE),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ce({ active: Lt.value === "shelf" }),
                        "aria-pressed": Lt.value === "shelf" ? "true" : "false",
                        onClick: y[6] || (y[6] = (f) => Ss("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, WE)
                    ], 8, jE)
                  ], 40, LE),
                  c("details", qE, [
                    c("summary", YE, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, XE),
                      c("b", ZE, p(P.shelf ? g(m)("library", "this shelf") : _n.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: We(av, ["prevent"])
                    }, [
                      c("label", null, [
                        Oe(p(g(m)("library", "Type")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[7] || (y[7] = (f) => P.type = f),
                          name: "type"
                        }, [
                          c("option", QE, p(g(m)("library", "All types")), 1),
                          (b(!0), T(ue, null, ze(O.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, eA))), 128))
                        ], 512), [
                          [Hn, P.type]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Publisher")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[8] || (y[8] = (f) => P.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", tA, p(g(m)("library", "All publishers")), 1),
                          (b(!0), T(ue, null, ze(A.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, nA))), 128))
                        ], 512), [
                          [Hn, P.publisher]
                        ])
                      ]),
                      c("div", iA, [
                        c("label", aA, p(g(m)("library", "Series / periodical")), 1),
                        qe(c("input", {
                          id: "library-publication-search",
                          "onUpdate:modelValue": y[9] || (y[9] = (f) => ce.value = f),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-publication-suggestions",
                          "aria-expanded": X.value && me.value.length > 0 ? "true" : "false",
                          onFocus: y[10] || (y[10] = (f) => X.value = !0),
                          onKeydown: y[11] || (y[11] = At((f) => X.value = !1, ["escape"]))
                        }, null, 40, rA), [
                          [Cn, ce.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: P.publication
                        }, null, 8, sA),
                        X.value && me.value.length > 0 ? (b(), T("ul", oA, [
                          (b(!0), T(ue, null, ze(me.value, (f) => (b(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: y[12] || (y[12] = We(() => {
                              }, ["prevent"])),
                              onClick: (B) => nv(f, B)
                            }, p(f), 41, lA)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", cA, p(g(m)("library", "Apply series")), 1)
                      ]),
                      c("div", uA, [
                        c("label", dA, p(g(m)("library", "Publication year")), 1),
                        qe(c("input", {
                          id: "library-year-search",
                          "onUpdate:modelValue": y[13] || (y[13] = (f) => ge.value = f),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-year-suggestions",
                          "aria-expanded": je.value && nt.value.length > 0 ? "true" : "false",
                          onFocus: y[14] || (y[14] = (f) => je.value = !0),
                          onKeydown: y[15] || (y[15] = At((f) => je.value = !1, ["escape"]))
                        }, null, 40, fA), [
                          [Cn, ge.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "year",
                          value: P.year
                        }, null, 8, hA),
                        je.value && nt.value.length > 0 ? (b(), T("ul", pA, [
                          (b(!0), T(ue, null, ze(nt.value, (f) => (b(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: y[16] || (y[16] = We(() => {
                              }, ["prevent"])),
                              onClick: (B) => sv(f, B)
                            }, p(f), 41, vA)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", gA, p(g(m)("library", "Apply year")), 1)
                      ]),
                      c("div", mA, [
                        c("label", bA, p(g(m)("library", "Creator")), 1),
                        qe(c("input", {
                          id: "library-creator-search",
                          "onUpdate:modelValue": y[17] || (y[17] = (f) => $.value = f),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search creators"),
                          title: g(m)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-creator-suggestions",
                          "aria-expanded": Y.value && ie.value.length > 0 ? "true" : "false",
                          onFocus: y[18] || (y[18] = (f) => Y.value = !0),
                          onKeydown: y[19] || (y[19] = At((f) => Y.value = !1, ["escape"]))
                        }, null, 40, yA), [
                          [Cn, $.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "creator",
                          value: P.creator
                        }, null, 8, _A),
                        Y.value && ie.value.length > 0 ? (b(), T("ul", wA, [
                          (b(!0), T(ue, null, ze(ie.value, (f) => (b(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: y[20] || (y[20] = We(() => {
                              }, ["prevent"])),
                              onClick: (B) => rv(f, B)
                            }, p(f), 41, SA)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", CA, p(g(m)("library", "Apply creator")), 1)
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Nextcloud tag")), 1),
                        qe(c("input", {
                          "onUpdate:modelValue": y[21] || (y[21] = (f) => P.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, TA), [
                          [Cn, P.tag]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Format")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[22] || (y[22] = (f) => P.format = f),
                          name: "format"
                        }, [
                          c("option", EA, p(g(m)("library", "All formats")), 1),
                          (b(!0), T(ue, null, ze(E.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(ir(f)), 9, AA))), 128))
                        ], 512), [
                          [Hn, P.format]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Shelf")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[23] || (y[23] = (f) => P.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", kA, p(g(m)("library", "All shelves")), 1),
                          (b(!0), T(ue, null, ze(S.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, OA))), 128))
                        ], 512), [
                          [Hn, P.shelf]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Scan status")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[24] || (y[24] = (f) => P.status = f),
                          name: "status"
                        }, [
                          c("option", NA, p(g(m)("library", "All scan statuses")), 1),
                          (b(!0), T(ue, null, ze(M.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, xA))), 128))
                        ], 512), [
                          [Hn, P.status]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Workflow status")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[25] || (y[25] = (f) => P.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", LA, p(g(m)("library", "All workflow statuses")), 1),
                          (b(!0), T(ue, null, ze(K.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, RA))), 128))
                        ], 512), [
                          [Hn, P.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Genre")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[26] || (y[26] = (f) => P.genre = f),
                          name: "genre"
                        }, [
                          c("option", IA, p(g(m)("library", "All genres")), 1),
                          (b(!0), T(ue, null, ze(F.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, PA))), 128))
                        ], 512), [
                          [Hn, P.genre]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Classification")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[27] || (y[27] = (f) => P.classification = f),
                          name: "classification"
                        }, [
                          c("option", DA, p(g(m)("library", "All classifications")), 1),
                          (b(!0), T(ue, null, ze(le.value, (f) => (b(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, $A))), 128))
                        ], 512), [
                          [Hn, P.classification]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Suggested updates")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": y[28] || (y[28] = (f) => P.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", MA, p(g(m)("library", "All metadata")), 1),
                          c("option", FA, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [Hn, P.scannerConflicts]
                        ])
                      ]),
                      c("button", zA, p(g(m)("library", "Apply filters")), 1),
                      c("a", UA, p(g(m)("library", "Clear")), 1)
                    ], 40, JE)
                  ]),
                  c("section", BA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, HA),
                    c("form", {
                      method: "post",
                      action: fs.value,
                      class: "library-saved-collection-save-form",
                      title: _l.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ve.value
                      }, null, 8, VA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: cv.value
                      }, null, 8, GA),
                      c("label", null, [
                        Oe(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !_l.value,
                          autocomplete: "off"
                        }, null, 8, KA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !_l.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, WA)
                    ], 8, jA),
                    ds.value.length > 0 ? (b(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), T(ue, null, ze(ds.value, (f) => (b(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: dv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Vn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, YA),
                        c("form", {
                          method: "post",
                          action: fv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ve.value
                          }, null, 8, ZA),
                          c("button", JA, p(g(m)("library", "Delete")), 1)
                        ], 8, XA)
                      ]))), 128))
                    ], 8, qA)) : H("", !0)
                  ]),
                  qt.value.length > 0 ? (b(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", e2, [
                      y[37] || (y[37] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, t2),
                      c("small", n2, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", i2, p(g(Vn)("library", "%n publication selected", "%n publications selected", qt.value.length)), 1)
                    ]),
                    c("p", a2, p(g(Vn)("library", "%n publication selected", "%n publications selected", qt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Rn
                    }, [
                      c("form", {
                        method: "post",
                        action: xt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, s2),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, o2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, l2)
                      ], 8, r2),
                      c("form", {
                        method: "post",
                        action: Wt.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, u2),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, d2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, f2)
                      ], 8, c2),
                      c("form", {
                        method: "post",
                        action: Jn.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, p2),
                        (b(!0), T(ue, null, ze(Ta.value, (f) => (b(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, v2))), 128)),
                        y[38] || (y[38] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, g2)
                      ], 8, h2),
                      c("form", {
                        method: "post",
                        action: dt.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, b2),
                        (b(!0), T(ue, null, ze(Ta.value, (f) => (b(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, y2))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", _2, [
                            c("option", w2, p(g(m)("library", "Publication type")), 1),
                            c("option", S2, p(g(m)("library", "Subtitle")), 1),
                            c("option", C2, p(g(m)("library", "Creators")), 1),
                            c("option", T2, p(g(m)("library", "Series / periodical")), 1),
                            c("option", E2, p(g(m)("library", "Publication date")), 1),
                            c("option", A2, p(g(m)("library", "Language")), 1),
                            c("option", k2, p(g(m)("library", "Publisher")), 1),
                            c("option", O2, p(g(m)("library", "Genres")), 1),
                            c("option", N2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, x2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, L2)
                      ], 8, m2),
                      c("form", {
                        method: "post",
                        action: jt.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, I2),
                        (b(!0), T(ue, null, ze(Ta.value, (f) => (b(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, P2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, D2)
                      ], 8, R2)
                    ], 32)
                  ], 8, QA)) : H("", !0)
                ], 8, xE),
                Sa.value ? (b(), T("p", $2, p(Sa.value), 1)) : H("", !0),
                Ca.value ? (b(), T("p", M2, p(Ca.value), 1)) : H("", !0),
                ti.value ? (b(), T("p", F2, p(ti.value), 1)) : H("", !0),
                xn.value ? (b(), T("section", z2, [
                  c("p", U2, p(Xa.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: qi.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : Wi.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(ei.value), 9, B2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Vn)("library", "%n item", "%n items", ne.value.total)), 1),
                    R.value?.earliestYear && R.value?.latestYear ? (b(), T("span", j2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    R.value?.datedCount ? (b(), T("span", V2, p(R.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : H("", !0),
                    R.value?.undatedCount > 0 ? (b(), T("span", G2, p(R.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : H("", !0)
                  ], 8, H2),
                  Qn.value && R.value ? (b(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Vn)("library", "%n item", "%n items", R.value.itemCount)), 1),
                    R.value.earliestYear && R.value.latestYear ? (b(), T("span", W2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(R.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    R.value.undatedCount > 0 ? (b(), T("span", q2, p(R.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, K2)) : H("", !0),
                  Qn.value && R.value?.issueGroups?.length ? (b(), T("section", Y2, [
                    c("div", null, [
                      c("p", X2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, Z2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), T(ue, null, ze(R.value.issueGroups, (f) => (b(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Vn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, Q2))), 128))
                    ], 8, J2),
                    R.value.gapRanges?.length ? (b(), T("p", ek, p(g(m)("library", "Gap")) + ": " + p(R.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (b(!0), T(ue, null, ze(R.value.issueGroups, (f) => (b(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), T(ue, null, ze(f.items, (B, fe) => (b(), T("li", {
                          key: B.itemId
                        }, [
                          c("span", tk, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, nk),
                          c("small", null, [
                            Oe(p(B.publicationType), 1),
                            B.publicationDate ? (b(), T(ue, { key: 0 }, [
                              Oe(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", ik, [
                            fe > 0 ? (b(), T(ue, { key: 0 }, [
                              Oe(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            fe > 0 && fe < f.items.length - 1 ? (b(), T(ue, { key: 1 }, [
                              Oe(" · ")
                            ], 64)) : H("", !0),
                            fe < f.items.length - 1 ? (b(), T(ue, { key: 2 }, [
                              Oe(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    R.value.unknownIssueItems?.length ? (b(), T("details", ak, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(R.value.unknownIssueItems.length), 9, rk)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: N.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, sk)
                  ])
                ])) : H("", !0),
                c("div", ok, [
                  c("p", lk, [
                    Oe(p(g(m)("library", "Showing")) + " " + p(ne.value.from) + "–" + p(ne.value.to) + " " + p(g(m)("library", "of")) + " " + p(ne.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    _n.value.length > 0 ? (b(), T("span", ck, [
                      y[39] || (y[39] = Oe(" · ", -1)),
                      c("a", uk, p(g(m)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", fk, [
                      Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                      ne.value.total > 0 ? (b(), T("span", hk, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                    ]),
                    ne.value.previousUrl ? (b(), T("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, pk)) : (b(), T("span", vk, p(g(m)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (b(), T("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, gk)) : (b(), T("span", mk, p(g(m)("library", "Next")), 1))
                  ], 8, dk)
                ]),
                _n.value.length > 0 ? (b(), T("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), T(ue, null, ze(_n.value, (f) => (b(), T("a", {
                    key: f.key,
                    href: yl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: We((B) => ov(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Oe(" " + p(f.value) + " ", 1),
                    y[40] || (y[40] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, yk))), 128))
                ], 8, bk)) : H("", !0),
                h.value.length === 0 ? (b(), T("div", {
                  key: 5,
                  class: Ce(["library-empty-content", { "library-first-run-guidance": wa.value || Ei.value, "library-filter-empty-state": Yi.value && !wa.value && !Ei.value }]),
                  role: "status"
                }, [
                  wa.value ? (b(), T(ue, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, _k),
                    c("p", wk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, Sk),
                      c("span", Ck, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ei.value ? (b(), T(ue, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, Tk),
                    c("p", Ek, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, Ak)
                    ])
                  ], 64)) : Yi.value ? (b(), T(ue, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, kk),
                    c("p", Ok, [
                      c("a", {
                        href: lv(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, Nk),
                      c("a", xk, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), T(ue, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, Lk),
                    c("p", Rk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, Ik)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (b(), T("label", Pk, [
                  c("input", {
                    type: "checkbox",
                    checked: qt.value.length === h.value.length,
                    onChange: vl
                  }, null, 40, Dk),
                  Oe(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && Lt.value === "list" ? (b(), T("ul", $k, [
                  (b(!0), T(ue, null, ze(h.value, (f) => (b(), T("li", {
                    key: f.id,
                    class: Ce(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Oa.value.has(Number(f.id)), "library-catalogue-list-row--open": $n.value && Number(cn.value) === Number(f.id) }])
                  }, [
                    c("label", Mk, [
                      c("input", {
                        type: "checkbox",
                        checked: Oa.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => hs(f.id, B.currentTarget.checked)
                      }, null, 40, Fk)
                    ]),
                    c("div", zk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => Me(f, B)
                      }, [
                        c("bdi", Bk, p(f.title), 1)
                      ], 8, Uk),
                      f.creators ? (b(), T("span", Hk, [
                        c("bdi", jk, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", Vk, [
                      f.publication ? (b(), T("div", Gk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", Kk, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (b(), T("div", Wk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (b(), T("div", qk, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ce(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? ir(f.extension) : f.publicationType), 11, Yk)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (b(), T("div", Xk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Zk, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", Jk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, Qk),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => Me(f, B)
                      }, p(g(m)("library", "Details")), 9, eO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), T("div", {
                  key: 8,
                  class: Ce(["library-cover-gallery", hl.value])
                }, [
                  (b(!0), T(ue, null, ze(h.value, (f) => (b(), T("article", {
                    key: f.id,
                    class: Ce(["library-cover-card", { "library-cover-card--cover-loaded": ar(f) === "loaded", "library-cover-card--cover-error": ar(f) === "error", "library-cover-card--selected": Oa.value.has(Number(f.id)), "library-cover-card--open": $n.value && Number(cn.value) === Number(f.id) }])
                  }, [
                    c("label", tO, [
                      c("input", {
                        type: "checkbox",
                        checked: Oa.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => hs(f.id, B.currentTarget.checked)
                      }, null, 40, nO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": $n.value && Number(cn.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => Me(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, aO),
                      c("span", rO, [
                        ar(f) === "loading" ? (b(), T("span", sO)) : H("", !0),
                        c("img", {
                          class: Ce(["library-cover-image", { "library-cover-image--loaded": ar(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => hv(f),
                          onError: (B) => pv(f)
                        }, null, 42, oO),
                        ar(f) === "error" ? (b(), T("span", lO, p(g(m)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, iO),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: We((B) => Nu(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ve.value
                      }, null, 8, uO),
                      y[41] || (y[41] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, dO),
                      c("button", {
                        type: "submit",
                        class: Ce(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": rr[f.id] ? "true" : void 0,
                        disabled: rr[f.id],
                        onClick: We((B) => Nu(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, fO),
                      sr[f.id] ? (b(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(sr[f.id]), 9, hO)) : H("", !0)
                    ], 40, cO),
                    c("div", pO, [
                      c("div", vO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => Me(f, B)
                          }, [
                            c("bdi", bO, p(f.title), 1)
                          ], 8, mO)
                        ], 8, gO),
                        f.creators ? (b(), T("p", yO, [
                          c("bdi", _O, p(f.creators), 1)
                        ])) : H("", !0),
                        wl(f) || f.extension ? (b(), T("div", wO, [
                          f.extension ? (b(), T("span", SO, [
                            c("bdi", CO, p(ir(f.extension)), 1)
                          ])) : H("", !0),
                          wl(f) ? (b(), T("p", TO, [
                            c("bdi", EO, p(wl(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", AO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, kO),
                          _e(g(go), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: ke(() => [
                              _e(g($a), {
                                href: f.filesUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(g($a), {
                                href: f.downloadUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(g($a), {
                                href: f.detailsUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : H("", !0),
                h.value.length > 0 ? (b(), T("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", NO, [
                    Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (b(), T("span", xO, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.previousUrl ? (b(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, LO)) : (b(), T("span", RO, p(g(m)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (b(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, IO)) : (b(), T("span", PO, p(g(m)("library", "Next")), 1))
                ], 8, OO)) : H("", !0)
              ]))
            ], 8, TC)
          ]),
          _: 1
        }),
        _e(g(qS), {
          ref_key: "sidebarComponent",
          ref: In,
          class: "library-native-item-sidebar",
          open: $n.value,
          "no-toggle": "",
          loading: st.loading,
          name: Ae.value?.title || g(m)("library", "Publication details"),
          subname: Ae.value?.creators || "",
          role: Pn.value ? "dialog" : void 0,
          "aria-modal": Pn.value ? "true" : void 0,
          "aria-labelledby": Pn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Pn.value && Ae.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Ct,
          onClosed: It,
          onClose: Je
        }, {
          default: ke(() => [
            c("div", DO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: ps,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Ae.value?.title || g(m)("library", "Publication details")), 513),
              st.loading && !Ae.value ? (b(), T("p", $O, p(g(m)("library", "Loading publication details…")), 1)) : st.error ? (b(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: st.missing ? "status" : "alert"
              }, [
                c("p", null, p(st.error), 1),
                st.missing ? H("", !0) : (b(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: y[29] || (y[29] = (f) => Se(cn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, MO)) : Ae.value ? (b(), T(ue, { key: 2 }, [
                c("p", FO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", zO, [
                  c("span", UO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Ae.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, BO),
                  c("div", HO, [
                    c("p", jO, [
                      c("bdi", VO, p(Ae.value.publicationType || g(m)("library", "Publication")), 1),
                      Ae.value.extension ? (b(), T("span", GO, [
                        y[42] || (y[42] = Oe(" · ", -1)),
                        c("bdi", KO, p(ir(Ae.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", WO, [
                      c("a", {
                        class: "button primary",
                        href: Ae.value.openUrl
                      }, p(g(m)("library", "Open")), 9, qO),
                      _e(g(go), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          _e(g($a), {
                            href: Ae.value.filesUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(g($a), {
                            href: Ae.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(g($a), {
                            href: Ae.value.detailsUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                c("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": g(m)("library", "Publication detail sections")
                }, [
                  (b(), T(ue, null, ze(gs, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ce({ active: ni.value === f.key }),
                    "aria-current": ni.value === f.key ? "page" : void 0,
                    onClick: (B) => ni.value = f.key
                  }, p(g(m)("library", f.label)), 11, XO)), 64))
                ], 8, YO),
                ni.value === "overview" ? (b(), T("section", ZO, [
                  c("h3", JO, p(g(m)("library", "Overview")), 1),
                  Ae.value.description ? (b(), T("p", QO, [
                    c("bdi", eN, p(Ae.value.description), 1)
                  ])) : H("", !0),
                  c("dl", tN, [
                    Ae.value.publication ? (b(), T("div", nN, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Ae.value.publication), 1)
                    ])) : H("", !0),
                    Ae.value.publicationDate ? (b(), T("div", iN, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Ae.value.publicationDate), 1)
                    ])) : H("", !0),
                    Ae.value.publisher ? (b(), T("div", aN, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Ae.value.publisher), 1)
                    ])) : H("", !0),
                    Ae.value.language ? (b(), T("div", rN, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Ae.value.language), 1)
                    ])) : H("", !0),
                    Ae.value.shelf ? (b(), T("div", sN, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Ae.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : ni.value === "metadata" ? (b(), T("section", oN, [
                  c("h3", lN, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: We(bs, ["prevent"])
                  }, [
                    c("label", null, [
                      Oe(p(g(m)("library", "Title")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": y[30] || (y[30] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Cn, mt.title]
                      ])
                    ]),
                    c("label", null, [
                      Oe(p(g(m)("library", "Publication date")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": y[31] || (y[31] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, cN), [
                        [Cn, mt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), T(ue, null, ze(mt.identifiers, (f, B) => (b(), T("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        qe(c("input", {
                          "onUpdate:modelValue": (fe) => f.scheme = fe,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, uN), [
                          [Cn, f.scheme]
                        ]),
                        qe(c("input", {
                          "onUpdate:modelValue": (fe) => f.displayValue = fe,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, dN), [
                          [Cn, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (fe) => bl(B)
                        }, p(g(m)("library", "Remove")), 9, fN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ml
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", hN, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Rt.error ? (b(), T("p", pN, p(Rt.error), 1)) : Rt.saved ? (b(), T("p", vN, p(g(m)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Rt.saving
                    }, p(Rt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, gN)
                  ], 32),
                  w(Ae.value).length ? (b(), T("section", mN, [
                    c("h4", bN, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", yN, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), T(ue, null, ze(w(Ae.value), (f) => (b(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Oe(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          y[43] || (y[43] = c("br", null, null, -1)),
                          Oe(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (b(), T("section", _N, [
                  c("h3", wN, p(g(m)("library", "Activity")), 1),
                  c("dl", SN, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Ae.value.scanStatus || "—"), 1)
                    ]),
                    Ae.value.workflowStatus ? (b(), T("div", CN, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Ae.value.workflowStatus), 1)
                    ])) : H("", !0),
                    Ae.value.metadataSource ? (b(), T("div", TN, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Ae.value.metadataSource), 1)
                    ])) : H("", !0),
                    Ae.value.cachedPath ? (b(), T("div", EN, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", AN, p(Ae.value.cachedPath), 1)
                      ])
                    ])) : H("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Na.value,
                    onClick: y[32] || (y[32] = (f) => ys(Na.value))
                  }, p(g(m)("library", "Previous item")), 9, ON),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Xi.value,
                    onClick: y[33] || (y[33] = (f) => ys(Xi.value))
                  }, p(g(m)("library", "Next item")), 9, NN)
                ], 8, kN)
              ], 64)) : H("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function PN() {
  window.LibraryStartupWatchdog?.fail();
}
function DN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = nu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !DN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  eb(IN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  PN(), console.error("[library] Vue startup failed", e);
}
