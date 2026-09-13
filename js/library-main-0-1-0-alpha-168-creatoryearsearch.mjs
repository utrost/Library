// @__NO_SIDE_EFFECTS__
function Fc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const je = {}, Ha = [], mn = () => {
}, Sf = () => !1, Ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jo = (e) => e.startsWith("onUpdate:"), gt = Object.assign, zc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yv = Object.prototype.hasOwnProperty, Ye = (e, t) => yv.call(e, t), Ce = Array.isArray, Pi = (e) => as(e) === "[object Map]", ya = (e) => as(e) === "[object Set]", Nu = (e) => as(e) === "[object Date]", Ne = (e) => typeof e == "function", tt = (e) => typeof e == "string", On = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Cf = (e) => (Xe(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), Tf = Object.prototype.toString, as = (e) => Tf.call(e), _v = (e) => as(e).slice(8, -1), Ef = (e) => as(e) === "[object Object]", Uc = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tr = /* @__PURE__ */ Fc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, wv = /-\w/g, Ut = Vo(
  (e) => e.replace(wv, (t) => t.slice(1).toUpperCase())
), Sv = /\B([A-Z])/g, yi = Vo(
  (e) => e.replace(Sv, "-$1").toLowerCase()
), Go = Vo((e) => e.charAt(0).toUpperCase() + e.slice(1)), wl = Vo(
  (e) => e ? `on${Go(e)}` : ""
), At = (e, t) => !Object.is(e, t), Ds = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Af = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Ko = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Cv = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xu;
const Wo = () => xu || (xu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (Ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? kv(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || Xe(e))
    return e;
}
const Tv = /;(?![^(]*\))/g, Ev = /:([^]+)/, Av = /\/\*[^]*?\*\//g;
function kv(e) {
  const t = {};
  return e.replace(Av, "").split(Tv).forEach((n) => {
    if (n) {
      const i = n.split(Ev);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (Ce(e))
    for (let n = 0; n < e.length; n++) {
      const i = Te(e[n]);
      i && (t += i + " ");
    }
  else if (Xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Us(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Te(t)), n && (e.style = on(n)), e;
}
const Ov = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nv = /* @__PURE__ */ Fc(Ov);
function kf(e) {
  return !!e || e === "";
}
function xv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Fi(e[i], t[i]);
  return n;
}
function Lu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Fi(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Fi(e, t) {
  if (e === t) return !0;
  let n = Nu(e), i = Nu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = Ce(e), i = Ce(t), n || i)
    return n && i ? xv(e, t) : !1;
  if (n = Xe(e), i = Xe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Pi(e), i = Pi(t), n || i || (n = ya(e), i = ya(t), n || i))
      return n && i ? Lu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Fi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Lv(e, t) {
  return e.findIndex((n) => Fi(n, t));
}
const Of = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : Ce(e) || Xe(e) && (e.toString === Tf || !Ne(e.toString)) ? Of(e) ? p(e.value) : JSON.stringify(e, Nf, 2) : String(e), Nf = (e, t) => Of(t) ? Nf(e, t.value) : Pi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Sl(i, r) + " =>"] = a, n),
    {}
  )
} : ya(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sl(n))
} : On(t) ? Sl(t) : Xe(t) && !Ce(t) && !Ef(t) ? String(t) : t, Sl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Rv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class Iv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Et && (Et.active ? (this.parent = Et, this.index = (Et.scopes || (Et.scopes = [])).push(
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
      const n = Et;
      try {
        return Et = this, t();
      } finally {
        Et = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Et, Et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Et === this)
        Et = this.prevScope;
      else {
        let t = Et;
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
function Pv() {
  return Et;
}
let et;
const Cl = /* @__PURE__ */ new WeakSet();
class xf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cl.has(this) && (Cl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ru(this), If(this);
    const t = et, n = An;
    et = this, An = !0;
    try {
      return this.fn();
    } finally {
      Pf(this), et = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        jc(t);
      this.deps = this.depsTail = void 0, Ru(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    rc(this) && this.run();
  }
  get dirty() {
    return rc(this);
  }
}
let Lf = 0, Er, Ar;
function Rf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ar, Ar = e;
    return;
  }
  e.next = Er, Er = e;
}
function Bc() {
  Lf++;
}
function Hc() {
  if (--Lf > 0)
    return;
  if (Ar) {
    let t = Ar;
    for (Ar = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Er; ) {
    let t = Er;
    for (Er = void 0; t; ) {
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
function If(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), jc(i), Dv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function rc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Df(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Df(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ur) || (e.globalVersion = Ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = et, i = An;
  et = e, An = !0;
  try {
    If(e);
    const a = e.fn(e._value);
    (t.version === 0 || At(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, An = i, Pf(e), e.flags &= -3;
  }
}
function jc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      jc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Dv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const Mf = [];
function vi() {
  Mf.push(An), An = !1;
}
function gi() {
  const e = Mf.pop();
  An = e === void 0 ? !0 : e;
}
function Ru(e) {
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
let Ur = 0;
class Mv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!et || !An || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new Mv(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, $f(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ur++, this.notify(t);
  }
  notify(t) {
    Bc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hc();
    }
  }
}
function $f(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        $f(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const sc = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ Symbol(
  ""
), oc = /* @__PURE__ */ Symbol(
  ""
), Br = /* @__PURE__ */ Symbol(
  ""
);
function $t(e, t, n) {
  if (An && et) {
    let i = sc.get(e);
    i || sc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new qo()), a.map = i, a.key = n), a.track();
  }
}
function li(e, t, n, i, a, r) {
  const s = sc.get(e);
  if (!s) {
    Ur++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Bc(), t === "clear")
    s.forEach(o);
  else {
    const l = Ce(e), d = l && Uc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Br || !On(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Br)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ga)), Pi(e) && o(s.get(oc)));
          break;
        case "delete":
          l || (o(s.get(ga)), Pi(e) && o(s.get(oc)));
          break;
        case "set":
          Pi(e) && o(s.get(ga));
          break;
      }
  }
  Hc();
}
function Pa(e) {
  const t = /* @__PURE__ */ Ge(e);
  return t === e ? t : ($t(t, "iterate", Br), /* @__PURE__ */ bn(e) ? t : t.map(Nn));
}
function Yo(e) {
  return $t(e = /* @__PURE__ */ Ge(e), "iterate", Br), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ mi(e) ? Xa(/* @__PURE__ */ ma(e) ? Nn(t) : t) : Nn(t);
}
const $v = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tl(this, Symbol.iterator, (e) => Bn(this, e));
  },
  concat(...e) {
    return Pa(this).concat(
      ...e.map((t) => Ce(t) ? Pa(t) : t)
    );
  },
  entries() {
    return Tl(this, "entries", (e) => (e[1] = Bn(this, e[1]), e));
  },
  every(e, t) {
    return ti(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ti(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ti(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ti(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ti(
      this,
      "findLast",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ti(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ti(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return El(this, "includes", e);
  },
  indexOf(...e) {
    return El(this, "indexOf", e);
  },
  join(e) {
    return Pa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return El(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ti(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lr(this, "pop");
  },
  push(...e) {
    return lr(this, "push", e);
  },
  reduce(e, ...t) {
    return Iu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Iu(this, "reduceRight", e, t);
  },
  shift() {
    return lr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ti(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lr(this, "splice", e);
  },
  toReversed() {
    return Pa(this).toReversed();
  },
  toSorted(e) {
    return Pa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pa(this).toSpliced(...e);
  },
  unshift(...e) {
    return lr(this, "unshift", e);
  },
  values() {
    return Tl(this, "values", (e) => Bn(this, e));
  }
};
function Tl(e, t, n) {
  const i = Yo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ bn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Fv = Array.prototype;
function ti(e, t, n, i, a, r) {
  const s = Yo(e), o = s !== e && !/* @__PURE__ */ bn(e), l = s[t];
  if (l !== Fv[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, S) {
    return n.call(this, Bn(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Iu(e, t, n, i) {
  const a = Yo(e), r = a !== e && !/* @__PURE__ */ bn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Bn(e, d)), n.call(this, d, Bn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Bn(e, l) : l;
}
function El(e, t, n) {
  const i = /* @__PURE__ */ Ge(e);
  $t(i, "iterate", Br);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Kc(n[0]) ? (n[0] = /* @__PURE__ */ Ge(n[0]), i[t](...n)) : a;
}
function lr(e, t, n = []) {
  vi(), Bc();
  const i = (/* @__PURE__ */ Ge(e))[t].apply(e, n);
  return Hc(), gi(), i;
}
const zv = /* @__PURE__ */ Fc("__proto__,__v_isRef,__isVue"), Ff = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function Uv(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ Ge(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class zf {
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
      return i === (a ? r ? Xv : jf : r ? Hf : Bf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Ce(t);
    if (!a) {
      let l;
      if (s && (l = $v[n]))
        return l;
      if (n === "hasOwnProperty")
        return Uv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Bt(t) ? t : i
    );
    if ((On(n) ? Ff.has(n) : zv(n)) || (a || $t(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Bt(o)) {
      const l = s && Uc(n) ? o : o.value;
      return a && Xe(l) ? /* @__PURE__ */ Hr(l) : l;
    }
    return Xe(o) ? a ? /* @__PURE__ */ Hr(o) : /* @__PURE__ */ Mt(o) : o;
  }
}
class Uf extends zf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = Ce(t) && Uc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ mi(r);
      if (!/* @__PURE__ */ bn(i) && !/* @__PURE__ */ mi(i) && (r = /* @__PURE__ */ Ge(r), i = /* @__PURE__ */ Ge(i)), !s && /* @__PURE__ */ Bt(r) && !/* @__PURE__ */ Bt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ye(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Bt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ge(a) && l && (o ? At(i, r) && li(t, "set", n, i) : li(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ye(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && li(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !Ff.has(n)) && $t(t, "has", n), i;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      Ce(t) ? "length" : ga
    ), Reflect.ownKeys(t);
  }
}
class Bv extends zf {
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
const Hv = /* @__PURE__ */ new Uf(), jv = /* @__PURE__ */ new Bv(), Vv = /* @__PURE__ */ new Uf(!0);
const lc = (e) => e, ws = (e) => Reflect.getPrototypeOf(e);
function Gv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ge(a), s = Pi(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? lc : t ? Xa : Nn;
    return !t && $t(
      r,
      "iterate",
      l ? oc : ga
    ), gt(
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
function Ss(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      e || (At(a, o) && $t(s, "get", a), $t(s, "get", o));
      const { has: l } = ws(s), d = t ? lc : e ? Xa : Nn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && $t(/* @__PURE__ */ Ge(a), "iterate", ga), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      return e || (At(a, o) && $t(s, "has", a), $t(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ge(o), d = t ? lc : e ? Xa : Nn;
      return !e && $t(l, "iterate", ga), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return gt(
    n,
    e ? {
      add: Ss("add"),
      set: Ss("set"),
      delete: Ss("delete"),
      clear: Ss("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ge(this), s = ws(r), o = /* @__PURE__ */ Ge(a), l = !t && !/* @__PURE__ */ bn(a) && !/* @__PURE__ */ mi(a) ? o : a;
        return s.has.call(r, l) || At(a, l) && s.has.call(r, a) || At(o, l) && s.has.call(r, o) || (r.add(l), li(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ bn(r) && !/* @__PURE__ */ mi(r) && (r = /* @__PURE__ */ Ge(r));
        const s = /* @__PURE__ */ Ge(this), { has: o, get: l } = ws(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ge(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? At(r, u) && li(s, "set", a, r) : li(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ge(this), { has: s, get: o } = ws(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ge(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && li(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ge(this), r = a.size !== 0, s = a.clear();
        return r && li(
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
    n[a] = Gv(a, e, t);
  }), n;
}
function Vc(e, t) {
  const n = Kv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ye(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Wv = {
  get: /* @__PURE__ */ Vc(!1, !1)
}, qv = {
  get: /* @__PURE__ */ Vc(!1, !0)
}, Yv = {
  get: /* @__PURE__ */ Vc(!0, !1)
};
const Bf = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), Xv = /* @__PURE__ */ new WeakMap();
function Zv(e) {
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
function Mt(e) {
  return /* @__PURE__ */ mi(e) ? e : Gc(
    e,
    !1,
    Hv,
    Wv,
    Bf
  );
}
// @__NO_SIDE_EFFECTS__
function Jv(e) {
  return Gc(
    e,
    !1,
    Vv,
    qv,
    Hf
  );
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return Gc(
    e,
    !0,
    jv,
    Yv,
    jf
  );
}
function Gc(e, t, n, i, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Zv(_v(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ma(e) {
  return /* @__PURE__ */ mi(e) ? /* @__PURE__ */ ma(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ge(t) : e;
}
function Qv(e) {
  return !Ye(e, "__v_skip") && Object.isExtensible(e) && Af(e, "__v_skip", !0), e;
}
const Nn = (e) => Xe(e) ? /* @__PURE__ */ Mt(e) : e, Xa = (e) => Xe(e) ? /* @__PURE__ */ Hr(e) : e;
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return Gf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Vf(e) {
  return Gf(e, !0);
}
function Gf(e, t) {
  return /* @__PURE__ */ Bt(e) ? e : new eg(e, t);
}
class eg {
  constructor(t, n) {
    this.dep = new qo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ge(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ bn(t) || /* @__PURE__ */ mi(t);
    t = i ? t : /* @__PURE__ */ Ge(t), At(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Bt(e) ? e.value : e;
}
function fi(e) {
  return Ne(e) ? e() : g(e);
}
const tg = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Bt(a) && !/* @__PURE__ */ Bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Kf(e) {
  return /* @__PURE__ */ ma(e) ? e : new Proxy(e, tg);
}
class ng {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new qo(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ig(e) {
  return new ng(e);
}
class ag {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return Rf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Df(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function rg(e, t, n = !1) {
  let i, a;
  return Ne(e) ? i = e : (i = e.get, a = e.set), new ag(i, a, n);
}
const Cs = {}, Bs = /* @__PURE__ */ new WeakMap();
let oa;
function sg(e, t = !1, n = oa) {
  if (n) {
    let i = Bs.get(n);
    i || Bs.set(n, i = []), i.push(e);
  }
}
function og(e, t, n = je) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ bn(F) || a === !1 || a === 0 ? ci(F, 1) : ci(F);
  let u, h, S, E, O = !1, A = !1;
  if (/* @__PURE__ */ Bt(e) ? (h = () => e.value, O = /* @__PURE__ */ bn(e)) : /* @__PURE__ */ ma(e) ? (h = () => d(e), O = !0) : Ce(e) ? (A = !0, O = e.some((F) => /* @__PURE__ */ ma(F) || /* @__PURE__ */ bn(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ Bt(F))
      return F.value;
    if (/* @__PURE__ */ ma(F))
      return d(F);
    if (Ne(F))
      return l ? l(F, 2) : F();
  })) : Ne(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      vi();
      try {
        S();
      } finally {
        gi();
      }
    }
    const F = oa;
    oa = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      oa = F;
    }
  } : h = mn, t && a) {
    const F = h, le = a === !0 ? 1 / 0 : a;
    h = () => ci(F(), le);
  }
  const L = Pv(), R = () => {
    u.stop(), L && L.active && zc(L.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...le) => {
      const ne = F(...le);
      return R(), ne;
    };
  }
  let $ = A ? new Array(e.length).fill(Cs) : Cs;
  const G = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const le = u.run();
        if (F || a || O || (A ? le.some((ne, P) => At(ne, $[P])) : At(le, $))) {
          S && S();
          const ne = oa;
          oa = u;
          try {
            const P = [
              le,
              // pass undefined as the old value when it's changed for the first time
              $ === Cs ? void 0 : A && $[0] === Cs ? [] : $,
              E
            ];
            $ = le, l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            );
          } finally {
            oa = ne;
          }
        }
      } else
        u.run();
  };
  return o && o(G), u = new xf(h), u.scheduler = s ? () => s(G, !1) : G, E = (F) => sg(F, !1, u), S = u.onStop = () => {
    const F = Bs.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const le of F) le();
      Bs.delete(u);
    }
  }, t ? i ? G(!0) : $ = u.run() : s ? s(G.bind(null, !0), !0) : u.run(), R.pause = u.pause.bind(u), R.resume = u.resume.bind(u), R.stop = R, R;
}
function ci(e, t = 1 / 0, n) {
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Bt(e))
    ci(e.value, t, n);
  else if (Ce(e))
    for (let i = 0; i < e.length; i++)
      ci(e[i], t, n);
  else if (ya(e) || Pi(e))
    e.forEach((i) => {
      ci(i, t, n);
    });
  else if (Ef(e)) {
    for (const i in e)
      ci(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ci(e[i], t, n);
  }
  return e;
}
function rs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Xo(a, t, n);
  }
}
function yn(e, t, n, i) {
  if (Ne(e)) {
    const a = rs(e, t, n, i);
    return a && Cf(a) && a.catch((r) => {
      Xo(r, t, n);
    }), a;
  }
  if (Ce(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(yn(e[r], t, n, i));
    return a;
  }
}
function Xo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || je;
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
      vi(), rs(r, null, 10, [
        e,
        l,
        d
      ]), gi();
      return;
    }
  }
  lg(e, n, a, i, s);
}
function lg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Wt = [];
let Fn = -1;
const ja = [];
let Ri = null, za = 0;
const Wf = /* @__PURE__ */ Promise.resolve();
let Hs = null;
function vn(e) {
  const t = Hs || Wf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cg(e) {
  let t = Fn + 1, n = Wt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Wt[i], r = jr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Wc(e) {
  if (!(e.flags & 1)) {
    const t = jr(e), n = Wt[Wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jr(n) ? Wt.push(e) : Wt.splice(cg(t), 0, e), e.flags |= 1, qf();
  }
}
function qf() {
  Hs || (Hs = Wf.then(Zf));
}
function Yf(e) {
  if (!Ce(e))
    Ri && e.id === -1 ? Ri.splice(za + 1, 0, e) : e.flags & 1 || (ja.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      ja.push(e[t]);
  qf();
}
function Pu(e, t, n = Fn + 1) {
  for (; n < Wt.length; n++) {
    const i = Wt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Wt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Xf(e) {
  if (ja.length) {
    const t = [...new Set(ja)].sort(
      (n, i) => jr(n) - jr(i)
    );
    if (ja.length = 0, Ri) {
      for (let n = 0; n < t.length; n++)
        Ri.push(t[n]);
      return;
    }
    for (Ri = t, za = 0; za < Ri.length; za++) {
      const n = Ri[za];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ri = null, za = 0;
  }
}
const jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zf(e) {
  try {
    for (Fn = 0; Fn < Wt.length; Fn++) {
      const t = Wt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Wt.length; Fn++) {
      const t = Wt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Wt.length = 0, Xf(), Hs = null, (Wt.length || ja.length) && Zf();
  }
}
let Nt = null, Zo = null;
function js(e) {
  const t = Nt;
  return Nt = e, Zo = e && e.type.__scopeId || null, t;
}
function ug(e) {
  Zo = e;
}
function dg() {
  Zo = null;
}
const fg = (e) => ke;
function ke(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && qs(-1);
    const r = js(t), s = hi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = hi.length; l > s; l--) eu();
      js(r), i._d && qs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function We(e, t) {
  if (Nt === null)
    return e;
  const n = il(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = je] = t[a];
    r && (Ne(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ci(s), i.push({
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
function ta(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (vi(), yn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), gi());
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
  const i = wa();
  if (i || Ga) {
    let a = Ga ? Ga._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ne(t) ? t.call(i && i.proxy) : t;
  }
}
const hg = /* @__PURE__ */ Symbol.for("v-scx"), pg = () => Ft(hg);
function vg(e, t) {
  return Jo(e, null, t);
}
function gg(e, t) {
  return Jo(
    e,
    null,
    { flush: "sync" }
  );
}
function vt(e, t, n) {
  return Jo(e, t, n);
}
function Jo(e, t, n = je) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = gt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Yr) {
    if (r === "sync") {
      const E = pg();
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
    Kt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, O) => {
    O ? E() : Wc(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = og(e, t, o);
  return Yr && (d ? d.push(S) : l && S()), S;
}
function mg(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? Jf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Ne(t) ? r = t : (r = t.handler, n = t);
  const s = ls(this), o = Jo(a, r.bind(i), n);
  return s(), o;
}
function Jf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ni = /* @__PURE__ */ new WeakMap(), Qf = /* @__PURE__ */ Symbol("_vte"), Qo = (e) => e.__isTeleport, ca = (e) => e && (e.disabled || e.disabled === ""), bg = (e) => e && (e.defer || e.defer === ""), Du = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Mu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cc = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, yg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: O, createText: A, createComment: L, parentNode: R }
    } = d, $ = ca(t.props);
    let { dynamicChildren: G } = t;
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
      const ce = ca(P.props), X = P.target = cc(P.props, O), ae = uc(X, P, A, E);
      X && (s !== "svg" && Du(X) ? s = "svg" : s !== "mathml" && Mu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), ce || (F(P, X, ae), br(P, !1)));
    }, ne = (P) => {
      const ce = () => {
        if (Ni.get(P) === ce) {
          if (Ni.delete(P), ca(P.props)) {
            const X = R(P.el) || n;
            F(P, X, P.anchor), br(P, !0);
          }
          le(P);
        }
      };
      Ni.set(P, ce), Kt(ce, r);
    };
    if (e == null) {
      const P = t.el = A(""), ce = t.anchor = A("");
      if (E(P, n, i), E(ce, n, i), bg(t.props) || r && r.pendingBranch) {
        ne(t);
        return;
      }
      $ && (F(t, n, ce), br(t, !0)), le();
    } else {
      t.el = e.el;
      const P = t.anchor = e.anchor, ce = Ni.get(e);
      if (ce) {
        ce.flags |= 8, Ni.delete(e), ne(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, me = ca(e.props), J = me ? n : X, te = me ? P : ae;
      if (s === "svg" || Du(X) ? s = "svg" : (s === "mathml" || Mu(X)) && (s = "mathml"), G ? (S(
        e.dynamicChildren,
        G,
        J,
        a,
        r,
        s,
        o
      ), Qc(e, t, !0)) : l || h(
        e,
        t,
        J,
        te,
        a,
        r,
        s,
        o,
        !1
      ), $)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ts(
          t,
          n,
          P,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = cc(t.props, O);
        D && (t.target = D, Ts(
          t,
          D,
          null,
          d,
          0
        ));
      } else me && Ts(
        t,
        X,
        ae,
        d,
        1
      );
      br(t, $);
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
    } = e, E = ca(S), O = r || !E, A = Ni.get(e);
    if (A && (A.flags |= 8, Ni.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
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
  move: Ts,
  hydrate: _g
};
function Ts(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Ni.has(e) && (!h || ca(u)) && l & 16)
    for (let S = 0; S < d.length; S++)
      a(
        d[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function _g(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function S(L, R) {
    let $ = R;
    for (; $; ) {
      if ($ && $.nodeType === 8) {
        if ($.data === "teleport start anchor")
          t.targetStart = $;
        else if ($.data === "teleport anchor") {
          t.targetAnchor = $, L._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      $ = s($);
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
  const O = t.target = cc(
    t.props,
    l
  ), A = ca(t.props);
  if (O) {
    const L = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(O, L), t.targetAnchor || uc(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), S(O, L), t.targetAnchor || uc(O, t, u, d), h(
      L && s(L),
      t,
      O,
      n,
      i,
      a,
      r
    ))), br(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const eh = yg;
function br(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function uc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Qf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const pn = /* @__PURE__ */ Symbol("_leaveCb"), cr = /* @__PURE__ */ Symbol("_enterCb");
function wg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Bi(() => {
    e.isMounted = !0;
  }), Za(() => {
    e.isUnmounting = !0;
  }), e;
}
const un = [Function, Array], th = {
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
}, nh = (e) => {
  const t = e.subTree;
  return t.component ? nh(t.component) : t;
}, Sg = {
  name: "BaseTransition",
  props: th,
  setup(e, { slots: t }) {
    const n = wa(), i = wg();
    return () => {
      const a = t.default && rh(t.default(), !0), r = a && a.length ? ih(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ge(e), { mode: o } = s;
      if (i.isLeaving)
        return Al(r);
      const l = Vs(r);
      if (!l)
        return Al(r);
      let d = dc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Ot && Vr(l, d);
      let u = n.subTree && Vs(n.subTree);
      if (u && u.type !== Ot && !ua(u, l) && nh(n).type !== Ot) {
        let h = dc(
          u,
          s,
          i,
          n
        );
        if (Vr(u, h), o === "out-in" && l.type !== Ot)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Al(r);
        o === "in-out" && l.type !== Ot ? h.delayLeave = (S, E, O) => {
          const A = ah(
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
function ih(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
const Cg = Sg;
function ah(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function dc(e, t, n, i, a) {
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
    onAfterAppear: $,
    onAppearCancelled: G
  } = t, F = String(e.key), le = ah(n, e), ne = (X, ae) => {
    X && yn(
      X,
      i,
      9,
      ae
    );
  }, P = (X, ae) => {
    const me = ae[1];
    ne(X, ae), Ce(X) ? X.every((J) => J.length <= 1) && me() : X.length <= 1 && me();
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
      me && ua(e, me) && me.el[pn] && me.el[pn](), ne(ae, [X]);
    },
    enter(X) {
      if (le[F] === e) return;
      let ae = d, me = u, J = h;
      if (!n.isMounted)
        if (r)
          ae = R || d, me = $ || u, J = G || h;
        else
          return;
      let te = !1;
      X[cr] = (M) => {
        te || (te = !0, M ? ne(J, [X]) : ne(me, [X]), ce.delayedLeave && ce.delayedLeave(), X[cr] = void 0);
      };
      const D = X[cr].bind(null, !1);
      ae ? P(ae, [X, D]) : D();
    },
    leave(X, ae) {
      const me = String(e.key);
      if (X[cr] && X[cr](
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
      const ae = dc(
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
function Al(e) {
  if (el(e))
    return e = zi(e), e.children = null, e;
}
function Vs(e) {
  if (!el(e))
    return Qo(e.type) && e.children ? ih(e.children) : e;
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
function Vr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vr(
      Qo(n.type) && Vs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === he ? (s.patchFlag & 128 && a++, i = i.concat(
      rh(s.children, t, o)
    )) : (t || s.type !== Ot) && i.push(o != null ? zi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  return Ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, t, { setup: e })
  ) : e;
}
function sh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Tg(e) {
  const t = wa(), n = /* @__PURE__ */ Vf(null);
  if (t) {
    const a = t.refs === je ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function $u(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Gs = /* @__PURE__ */ new WeakMap();
function kr(e, t, n, i, a = !1) {
  if (Ce(e)) {
    e.forEach(
      (A, L) => kr(
        A,
        t && (Ce(t) ? t[L] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Va(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && kr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? il(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === je ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ge(h), E = h === je ? Sf : (A) => $u(u, A) ? !1 : Ye(S, A), O = (A, L) => !(L && $u(u, L));
  if (d != null && d !== l) {
    if (Fu(t), tt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ Bt(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Ne(l))
    rs(l, o, 12, [s, u]);
  else {
    const A = tt(l), L = /* @__PURE__ */ Bt(l);
    if (A || L) {
      const R = () => {
        if (e.f) {
          const $ = A ? E(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            Ce($) && zc($, r);
          else if (Ce($))
            $.includes(r) || $.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const G = [r];
            O(l, e.k) && (l.value = G), e.k && (u[e.k] = G);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : L && (O(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const $ = () => {
          R(), Gs.delete(e);
        };
        $.id = -1, Gs.set(e, $), Kt($, n);
      } else
        Fu(e), R();
    }
  }
}
function Fu(e) {
  const t = Gs.get(e);
  t && (t.flags |= 8, Gs.delete(e));
}
Wo().requestIdleCallback;
Wo().cancelIdleCallback;
const Va = (e) => !!e.type.__asyncLoader, el = (e) => e.type.__isKeepAlive;
function Eg(e, t) {
  oh(e, "a", t);
}
function Ag(e, t) {
  oh(e, "da", t);
}
function oh(e, t, n = zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (tl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      el(a.parent.vnode) && kg(i, t, n, a), a = a.parent;
  }
}
function kg(e, t, n, i) {
  const a = tl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ss(() => {
    zc(i[t], a);
  }, n);
}
function tl(e, t, n = zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      vi();
      const o = ls(n), l = yn(t, n, e, s);
      return o(), gi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const _i = (e) => (t, n = zt) => {
  (!Yr || e === "sp") && tl(e, (...i) => t(...i), n);
}, lh = _i("bm"), Bi = _i("m"), ch = _i(
  "bu"
), Og = _i("u"), Za = _i(
  "bum"
), ss = _i("um"), Ng = _i(
  "sp"
), xg = _i("rtg"), Lg = _i("rtc");
function Rg(e, t = zt) {
  tl("ec", e, t);
}
const qc = "components", Ig = "directives";
function Ue(e, t) {
  return Xc(qc, e, !0, t) || e;
}
const uh = /* @__PURE__ */ Symbol.for("v-ndc");
function Yc(e) {
  return tt(e) ? Xc(qc, e, !1) || e : e || uh;
}
function zu(e) {
  return Xc(Ig, e);
}
function Xc(e, t, n = !0, i = !1) {
  const a = Nt || zt;
  if (a) {
    const r = a.type;
    if (e === qc) {
      const o = vm(
        r,
        !1
      );
      if (o && (o === t || o === Ut(t) || o === Go(Ut(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Uu(a[e] || r[e], t) || // global registration
      Uu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Uu(e, t) {
  return e && (e[t] || e[Ut(t)] || e[Go(Ut(t))]);
}
function Fe(e, t, n, i) {
  let a;
  const r = n, s = Ce(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ ma(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ bn(e), d = /* @__PURE__ */ mi(e), e = Yo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Xa(Nn(e[u])) : Nn(e[u]) : e[u],
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
  if (n == null && (n = {}), Nt.ce || Nt.parent && Va(Nt.parent) && Nt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), w(), Me(
      he,
      null,
      [we("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = hi.length;
  w();
  let l;
  try {
    const d = s && dh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = Me(
      he,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = hi.length; u > o; u--) eu();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function dh(e) {
  return e.some((t) => Kr(t) ? !(t.type === Ot || t.type === he && !dh(t.children)) : !0) ? e : null;
}
const fc = (e) => e ? Ih(e) ? il(e) : fc(e.parent) : null, Or = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fc(e.parent),
    $root: (e) => fc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ph(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = vn.bind(e.proxy)),
    $watch: (e) => mg.bind(e)
  })
), kl = (e, t) => e !== je && !e.__isScriptSetup && Ye(e, t), Pg = {
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
        if (kl(i, t))
          return s[t] = 1, i[t];
        if (a !== je && Ye(a, t))
          return s[t] = 2, a[t];
        if (Ye(r, t))
          return s[t] = 3, r[t];
        if (n !== je && Ye(n, t))
          return s[t] = 4, n[t];
        hc && (s[t] = 0);
      }
    }
    const d = Or[t];
    let u, h;
    if (d)
      return t === "$attrs" && $t(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== je && Ye(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ye(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return kl(a, t) ? (a[t] = n, !0) : i !== je && Ye(i, t) ? (i[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== je && o[0] !== "$" && Ye(e, o) || kl(t, o) || Ye(r, o) || Ye(i, o) || Ye(Or, o) || Ye(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Dg() {
  return fh().slots;
}
function Mg() {
  return fh().attrs;
}
function fh(e) {
  const t = wa();
  return t.setupContext || (t.setupContext = Dh(t));
}
function Ks(e) {
  return Ce(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function $g(e, t) {
  return !e || !t ? e || t : Ce(e) && Ce(t) ? e.concat(t) : gt({}, Ks(e), Ks(t));
}
let hc = !0;
function Fg(e) {
  const t = ph(e), n = e.proxy, i = e.ctx;
  hc = !1, t.beforeCreate && Bu(t.beforeCreate, e, "bc");
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
    beforeUnmount: $,
    destroyed: G,
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
  if (d && zg(d, i, null), s)
    for (const re in s) {
      const ie = s[re];
      Ne(ie) && (i[re] = ie.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    Xe(re) && (e.data = /* @__PURE__ */ Mt(re));
  }
  if (hc = !0, r)
    for (const re in r) {
      const ie = r[re], pe = Ne(ie) ? ie.bind(n, n) : Ne(ie.get) ? ie.get.bind(n, n) : mn, de = !Ne(ie) && Ne(ie.set) ? ie.set.bind(n) : mn, Ee = q({
        get: pe,
        set: de
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (ge) => Ee.value = ge
      });
    }
  if (o)
    for (const re in o)
      hh(o[re], i, n, re);
  if (l) {
    const re = Ne(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ie) => {
      hn(ie, re[ie]);
    });
  }
  u && Bu(u, e, "c");
  function Y(re, ie) {
    Ce(ie) ? ie.forEach((pe) => re(pe.bind(n))) : ie && re(ie.bind(n));
  }
  if (Y(lh, h), Y(Bi, S), Y(ch, E), Y(Og, O), Y(Eg, A), Y(Ag, L), Y(Rg, ce), Y(Lg, ne), Y(xg, P), Y(Za, $), Y(ss, F), Y(Ng, X), Ce(ae))
    if (ae.length) {
      const re = e.exposed || (e.exposed = {});
      ae.forEach((ie) => {
        Object.defineProperty(re, ie, {
          get: () => n[ie],
          set: (pe) => n[ie] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === mn && (e.render = le), me != null && (e.inheritAttrs = me), J && (e.components = J), te && (e.directives = te), X && sh(e);
}
function zg(e, t, n = mn) {
  Ce(e) && (e = pc(e));
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
function Bu(e, t, n) {
  yn(
    Ce(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function hh(e, t, n, i) {
  let a = i.includes(".") ? Jf(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    Ne(r) && vt(a, r);
  } else if (Ne(e))
    vt(a, e.bind(n));
  else if (Xe(e))
    if (Ce(e))
      e.forEach((r) => hh(r, t, n, i));
    else {
      const r = Ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ne(r) && vt(a, r, e);
    }
}
function ph(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Ws(l, d, s, !0)
  ), Ws(l, t, s)), Xe(t) && r.set(t, l), l;
}
function Ws(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ws(e, r, n, !0), a && a.forEach(
    (s) => Ws(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Ug[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Ug = {
  data: Hu,
  props: ju,
  emits: ju,
  // objects
  methods: yr,
  computed: yr,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: yr,
  directives: yr,
  // watch
  watch: Hg,
  // provide / inject
  provide: Hu,
  inject: Bg
};
function Hu(e, t) {
  return t ? e ? function() {
    return gt(
      Ne(e) ? e.call(this, this) : e,
      Ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bg(e, t) {
  return yr(pc(e), pc(t));
}
function pc(e) {
  if (Ce(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function yr(e, t) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ju(e, t) {
  return e ? Ce(e) && Ce(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gt(
    /* @__PURE__ */ Object.create(null),
    Ks(e),
    Ks(t ?? {})
  ) : t;
}
function Hg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = gt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Gt(e[i], t[i]);
  return n;
}
function vh() {
  return {
    app: null,
    config: {
      isNativeTag: Sf,
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
let jg = 0;
function Vg(e, t) {
  return function(i, a = null) {
    Ne(i) || (i = gt({}, i)), a != null && !Xe(a) && (a = null);
    const r = vh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: jg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: mm,
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
          const E = d._ceVNode || we(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, il(E.component);
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
        const h = Ga;
        Ga = d;
        try {
          return u();
        } finally {
          Ga = h;
        }
      }
    };
    return d;
  };
}
let Ga = null;
function gh(e, t, n = je) {
  const i = wa(), a = Ut(t), r = yi(t), s = mh(e, a), o = ig((l, d) => {
    let u, h = je, S;
    return gg(() => {
      const E = e[a];
      At(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const O = n.set ? n.set(E) : E;
        if (!At(O, u) && !(h !== je && At(E, h)))
          return;
        const A = i.vnode.props, L = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        L || (u = E, d()), i.emit(`update:${t}`, O), At(E, h) && (At(E, O) && !At(O, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        L && h !== je && !At(O, u)) && d(), h = E, S = O;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || je : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const mh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${yi(t)}Modifiers`];
function Gg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || je;
  let a = n;
  const r = t.startsWith("update:"), s = r && mh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => tt(u) ? u.trim() : u)), s.number && (a = a.map(Ko)));
  let o, l = i[o = wl(t)] || // also try camelCase event handler (#2249)
  i[o = wl(Ut(t))];
  !l && r && (l = i[o = wl(yi(t))]), l && yn(
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
const Kg = /* @__PURE__ */ new WeakMap();
function bh(e, t, n = !1) {
  const i = n ? Kg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Ne(e)) {
    const l = (d) => {
      const u = bh(d, t, !0);
      u && (o = !0, gt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Xe(e) && i.set(e, null), null) : (Ce(r) ? r.forEach((l) => s[l] = null) : gt(s, r), Xe(e) && i.set(e, s), s);
}
function nl(e, t) {
  return !e || !Ho(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, yi(t)) || Ye(e, t));
}
function Vu(e) {
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
  } = e, L = js(e);
  let R, $;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, le = F;
      R = Hn(
        d.call(
          le,
          F,
          u,
          h,
          E,
          S,
          O
        )
      ), $ = o;
    } else {
      const F = t;
      R = Hn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), $ = t.props ? o : Wg(o);
    }
  } catch (F) {
    hi.length = 0, Xo(F, e, 1), R = we(Ot);
  }
  let G = R;
  if ($ && A !== !1) {
    const F = Object.keys($), { shapeFlag: le } = G;
    F.length && le & 7 && (r && F.some(jo) && ($ = qg(
      $,
      r
    )), G = zi(G, $, !1, !0));
  }
  if (n.dirs && (G = zi(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Qo(G.type) && Vs(G) || G;
    Vr(F, n.transition);
  }
  return R = G, js(L), R;
}
const Wg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ho(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qg = (e, t) => {
  const n = {};
  for (const i in e)
    (!jo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Yg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Gu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (yh(s, i, S) && !nl(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Gu(i, s, d) : !0 : !!s;
  return !1;
}
function Gu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (yh(t, e, r) && !nl(n, r))
      return !0;
  }
  return !1;
}
function yh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Xe(i) && Xe(a) ? !Fi(i, a) : i !== a;
}
function Xg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const _h = {}, wh = () => Object.create(_h), Sh = (e) => Object.getPrototypeOf(e) === _h;
function Zg(e, t, n, i = !1) {
  const a = {}, r = wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ch(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Jv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Jg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ge(a), [l] = e.propsOptions;
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
        if (nl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Ye(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const O = Ut(S);
            a[O] = vc(
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
    Ch(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ye(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = yi(h)) === h || !Ye(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = vc(
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
  d && li(e.attrs, "set", "");
}
function Ch(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Tr(l))
        continue;
      const d = t[l];
      let u;
      a && Ye(a, u = Ut(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : nl(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ge(n), d = o || je;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = vc(
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
function vc(e, t, n, i, a, r) {
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
          const u = ls(a);
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
    ] && (i === "" || i === yi(n)) && (i = !0));
  }
  return i;
}
const Qg = /* @__PURE__ */ new WeakMap();
function Th(e, t, n = !1) {
  const i = n ? Qg : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Ne(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Th(h, t, !0);
      gt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Xe(e) && i.set(e, Ha), Ha;
  if (Ce(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ut(r[u]);
      Ku(h) && (s[h] = je);
    }
  else if (r)
    for (const u in r) {
      const h = Ut(u);
      if (Ku(h)) {
        const S = r[u], E = s[h] = Ce(S) || Ne(S) ? { type: S } : gt({}, S), O = E.type;
        let A = !1, L = !0;
        if (Ce(O))
          for (let R = 0; R < O.length; ++R) {
            const $ = O[R], G = Ne($) && $.name;
            if (G === "Boolean") {
              A = !0;
              break;
            } else G === "String" && (L = !1);
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
function Ku(e) {
  return e[0] !== "$" && !Tr(e);
}
const Zc = (e) => e === "_" || e === "_ctx" || e === "$stable", Jc = (e) => Ce(e) ? e.map(Hn) : [Hn(e)], em = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => Jc(t(...a)), n);
  return i._c = !1, i;
}, Eh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Zc(a)) continue;
    const r = e[a];
    if (Ne(r))
      t[a] = em(a, r, i);
    else if (r != null) {
      const s = Jc(r);
      t[a] = () => s;
    }
  }
}, Ah = (e, t) => {
  const n = Jc(t);
  e.slots.default = () => n;
}, kh = (e, t, n) => {
  for (const i in t)
    (n || !Zc(i)) && (e[i] = t[i]);
}, tm = (e, t, n) => {
  const i = e.slots = wh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (kh(i, t, n), n && Af(i, "_", a, !0)) : Eh(t, i);
  } else t && Ah(e, t);
}, nm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = je;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : kh(a, t, n) : (r = !t.$stable, Eh(t, a)), s = t;
  } else t && (Ah(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Zc(o) && s[o] == null && delete a[o];
}, Kt = om;
function im(e) {
  return am(e);
}
function am(e, t) {
  const n = Wo();
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
  } = e, A = (v, C, k, N = null, x = null, z = null, K = void 0, V = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !ua(v, C) && (N = ot(v), ge(v, x, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: j, ref: _e, shapeFlag: se } = C;
    switch (j) {
      case os:
        L(v, C, k, N);
        break;
      case Ot:
        R(v, C, k, N);
        break;
      case Ms:
        v == null && $(C, k, N, K);
        break;
      case he:
        J(
          v,
          C,
          k,
          N,
          x,
          z,
          K,
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
          K,
          V,
          Q
        ) : se & 6 ? te(
          v,
          C,
          k,
          N,
          x,
          z,
          K,
          V,
          Q
        ) : (se & 64 || se & 128) && j.process(
          v,
          C,
          k,
          N,
          x,
          z,
          K,
          V,
          Q,
          ln
        );
    }
    _e != null && x ? kr(_e, v && v.ref, z, C || v, !C) : _e == null && v && v.ref != null && kr(v.ref, null, z, v, !0);
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
  }, $ = (v, C, k, N) => {
    [v.el, v.anchor] = O(
      v.children,
      C,
      k,
      N,
      v.el,
      v.anchor
    );
  }, G = ({ el: v, anchor: C }, k, N) => {
    let x;
    for (; v && v !== C; )
      x = S(v), i(v, k, N), v = x;
    i(C, k, N);
  }, F = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, le = (v, C, k, N, x, z, K, V, Q) => {
    if (C.type === "svg" ? K = "svg" : C.type === "math" && (K = "mathml"), v == null)
      ne(
        C,
        k,
        N,
        x,
        z,
        K,
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
          K,
          V,
          Q
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, ne = (v, C, k, N, x, z, K, V) => {
    let Q, j;
    const { props: _e, shapeFlag: se, transition: be, dirs: ve } = v;
    if (Q = v.el = s(
      v.type,
      z,
      _e && _e.is,
      _e
    ), se & 8 ? u(Q, v.children) : se & 16 && ce(
      v.children,
      Q,
      null,
      N,
      x,
      Ol(v, z),
      K,
      V
    ), ve && ta(v, null, N, "created"), P(Q, v, v.scopeId, K, N), _e) {
      for (const De in _e)
        De !== "value" && !Tr(De) && r(Q, De, null, _e[De], z, N);
      "value" in _e && r(Q, "value", null, _e.value, z), (j = _e.onVnodeBeforeMount) && Dn(j, N, v);
    }
    ve && ta(v, null, N, "beforeMount");
    const xe = rm(x, be);
    xe && be.beforeEnter(Q), i(Q, C, k), ((j = _e && _e.onVnodeMounted) || xe || ve) && Kt(() => {
      j && Dn(j, N, v), xe && be.enter(Q), ve && ta(v, null, N, "mounted");
    }, x);
  }, P = (v, C, k, N, x) => {
    if (k && E(v, k), N)
      for (let z = 0; z < N.length; z++)
        E(v, N[z]);
    if (x) {
      let z = x.subTree;
      if (C === z || xh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const K = x.vnode;
        P(
          v,
          K,
          K.scopeId,
          K.slotScopeIds,
          x.parent
        );
      }
    }
  }, ce = (v, C, k, N, x, z, K, V, Q = 0) => {
    for (let j = Q; j < v.length; j++) {
      const _e = v[j] = V ? oi(v[j]) : Hn(v[j]);
      A(
        null,
        _e,
        C,
        k,
        N,
        x,
        z,
        K,
        V
      );
    }
  }, X = (v, C, k, N, x, z, K) => {
    const V = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: j, dirs: _e } = C;
    Q |= v.patchFlag & 16;
    const se = v.props || je, be = C.props || je;
    let ve;
    if (k && na(k, !1), (ve = be.onVnodeBeforeUpdate) && Dn(ve, k, C, v), _e && ta(C, v, k, "beforeUpdate"), k && na(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!v.dynamicChildren || v.dynamicChildren.length !== j.length) && (Q = 0, K = !1, j = null), (se.innerHTML && be.innerHTML == null || se.textContent && be.textContent == null) && u(V, ""), j ? ae(
      v.dynamicChildren,
      j,
      V,
      k,
      N,
      Ol(C, x),
      z
    ) : K || ie(
      v,
      C,
      V,
      null,
      k,
      N,
      Ol(C, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        me(V, se, be, k, x);
      else if (Q & 2 && se.class !== be.class && r(V, "class", null, be.class, x), Q & 4 && r(V, "style", se.style, be.style, x), Q & 8) {
        const xe = C.dynamicProps;
        for (let De = 0; De < xe.length; De++) {
          const Pe = xe[De], Je = se[Pe], rt = be[Pe];
          (rt !== Je || Pe === "value") && r(V, Pe, Je, rt, x, k);
        }
      }
      Q & 1 && v.children !== C.children && u(V, C.children);
    } else !K && j == null && me(V, se, be, k, x);
    ((ve = be.onVnodeUpdated) || _e) && Kt(() => {
      ve && Dn(ve, k, C, v), _e && ta(C, v, k, "updated");
    }, N);
  }, ae = (v, C, k, N, x, z, K) => {
    for (let V = 0; V < C.length; V++) {
      const Q = v[V], j = C[V], _e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ua(Q, j) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        j,
        _e,
        null,
        N,
        x,
        z,
        K,
        !0
      );
    }
  }, me = (v, C, k, N, x) => {
    if (C !== k) {
      if (C !== je)
        for (const z in C)
          !Tr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            x,
            N
          );
      for (const z in k) {
        if (Tr(z)) continue;
        const K = k[z], V = C[z];
        K !== V && z !== "value" && r(v, z, V, K, x, N);
      }
      "value" in k && r(v, "value", C.value, k.value, x);
    }
  }, J = (v, C, k, N, x, z, K, V, Q) => {
    const j = C.el = v ? v.el : o(""), _e = C.anchor = v ? v.anchor : o("");
    let { patchFlag: se, dynamicChildren: be, slotScopeIds: ve } = C;
    ve && (V = V ? V.concat(ve) : ve), v == null ? (i(j, k, N), i(_e, k, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      _e,
      x,
      z,
      K,
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
      K,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || x && C === x.subTree) && Qc(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      _e,
      x,
      z,
      K,
      V,
      Q
    );
  }, te = (v, C, k, N, x, z, K, V, Q) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? x.ctx.activate(
      C,
      k,
      N,
      K,
      Q
    ) : D(
      C,
      k,
      N,
      x,
      z,
      K,
      Q
    ) : M(v, C, Q);
  }, D = (v, C, k, N, x, z, K) => {
    const V = v.component = dm(
      v,
      N,
      x
    );
    if (el(v) && (V.ctx.renderer = ln), fm(V, !1, K), V.asyncDep) {
      if (x && x.registerDep(V, Y, K), !v.el) {
        const Q = V.subTree = we(Ot);
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
        K
      );
  }, M = (v, C, k) => {
    const N = C.component = v.component;
    if (Yg(v, C, k))
      if (N.asyncDep && !N.asyncResolved) {
        re(N, C, k);
        return;
      } else
        N.next = C, N.update();
    else
      C.el = v.el, N.vnode = C;
  }, Y = (v, C, k, N, x, z, K) => {
    const V = () => {
      if (v.isMounted) {
        let { next: se, bu: be, u: ve, parent: xe, vnode: De } = v;
        {
          const Lt = Oh(v);
          if (Lt) {
            se && (se.el = De.el, re(v, se, K)), Lt.asyncDep.then(() => {
              Kt(() => {
                v.isUnmounted || j();
              }, x);
            });
            return;
          }
        }
        let Pe = se, Je;
        na(v, !1), se ? (se.el = De.el, re(v, se, K)) : se = De, be && Ds(be), (Je = se.props && se.props.onVnodeBeforeUpdate) && Dn(Je, xe, se, De), na(v, !0);
        const rt = Vu(v), Tt = v.subTree;
        v.subTree = rt, A(
          Tt,
          rt,
          // parent may have changed if it's in a teleport
          h(Tt.el),
          // anchor may have changed if it's in a fragment
          ot(Tt),
          v,
          x,
          z
        ), se.el = rt.el, Pe === null && Xg(v, rt.el), ve && Kt(ve, x), (Je = se.props && se.props.onVnodeUpdated) && Kt(
          () => Dn(Je, xe, se, De),
          x
        );
      } else {
        let se;
        const { el: be, props: ve } = C, { bm: xe, m: De, parent: Pe, root: Je, type: rt } = v, Tt = Va(C);
        na(v, !1), xe && Ds(xe), !Tt && (se = ve && ve.onVnodeBeforeMount) && Dn(se, Pe, C), na(v, !0);
        {
          Je.ce && Je.ce._hasShadowRoot() && Je.ce._injectChildStyle(
            rt,
            v.parent ? v.parent.type : void 0
          );
          const Lt = v.subTree = Vu(v);
          A(
            null,
            Lt,
            k,
            N,
            v,
            x,
            z
          ), C.el = Lt.el;
        }
        if (De && Kt(De, x), !Tt && (se = ve && ve.onVnodeMounted)) {
          const Lt = C;
          Kt(
            () => Dn(se, Pe, Lt),
            x
          );
        }
        (C.shapeFlag & 256 || Pe && Va(Pe.vnode) && Pe.vnode.shapeFlag & 256) && v.a && Kt(v.a, x), v.isMounted = !0, C = k = N = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new xf(V);
    v.scope.off();
    const j = v.update = Q.run.bind(Q), _e = v.job = Q.runIfDirty.bind(Q);
    _e.i = v, _e.id = v.uid, Q.scheduler = () => Wc(_e), na(v, !0), j();
  }, re = (v, C, k) => {
    C.component = v;
    const N = v.vnode.props;
    v.vnode = C, v.next = null, Jg(v, C.props, N, k), nm(v, C.children, k), vi(), Pu(v), gi();
  }, ie = (v, C, k, N, x, z, K, V, Q = !1) => {
    const j = v && v.children, _e = v ? v.shapeFlag : 0, se = C.children, { patchFlag: be, shapeFlag: ve } = C;
    if (be > 0) {
      if (be & 128) {
        de(
          j,
          se,
          k,
          N,
          x,
          z,
          K,
          V,
          Q
        );
        return;
      } else if (be & 256) {
        pe(
          j,
          se,
          k,
          N,
          x,
          z,
          K,
          V,
          Q
        );
        return;
      }
    }
    ve & 8 ? (_e & 16 && st(j, x, z), se !== j && u(k, se)) : _e & 16 ? ve & 16 ? de(
      j,
      se,
      k,
      N,
      x,
      z,
      K,
      V,
      Q
    ) : st(j, x, z, !0) : (_e & 8 && u(k, ""), ve & 16 && ce(
      se,
      k,
      N,
      x,
      z,
      K,
      V,
      Q
    ));
  }, pe = (v, C, k, N, x, z, K, V, Q) => {
    v = v || Ha, C = C || Ha;
    const j = v.length, _e = C.length, se = Math.min(j, _e);
    let be;
    for (be = 0; be < se; be++) {
      const ve = C[be] = Q ? oi(C[be]) : Hn(C[be]);
      A(
        v[be],
        ve,
        k,
        null,
        x,
        z,
        K,
        V,
        Q
      );
    }
    j > _e ? st(
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
      K,
      V,
      Q,
      se
    );
  }, de = (v, C, k, N, x, z, K, V, Q) => {
    let j = 0;
    const _e = C.length;
    let se = v.length - 1, be = _e - 1;
    for (; j <= se && j <= be; ) {
      const ve = v[j], xe = C[j] = Q ? oi(C[j]) : Hn(C[j]);
      if (ua(ve, xe))
        A(
          ve,
          xe,
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        );
      else
        break;
      j++;
    }
    for (; j <= se && j <= be; ) {
      const ve = v[se], xe = C[be] = Q ? oi(C[be]) : Hn(C[be]);
      if (ua(ve, xe))
        A(
          ve,
          xe,
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        );
      else
        break;
      se--, be--;
    }
    if (j > se) {
      if (j <= be) {
        const ve = be + 1, xe = ve < _e ? C[ve].el : N;
        for (; j <= be; )
          A(
            null,
            C[j] = Q ? oi(C[j]) : Hn(C[j]),
            k,
            xe,
            x,
            z,
            K,
            V,
            Q
          ), j++;
      }
    } else if (j > be)
      for (; j <= se; )
        ge(v[j], x, z, !0), j++;
    else {
      const ve = j, xe = j, De = /* @__PURE__ */ new Map();
      for (j = xe; j <= be; j++) {
        const ut = C[j] = Q ? oi(C[j]) : Hn(C[j]);
        ut.key != null && De.set(ut.key, j);
      }
      let Pe, Je = 0;
      const rt = be - xe + 1;
      let Tt = !1, Lt = 0;
      const qt = new Array(rt);
      for (j = 0; j < rt; j++) qt[j] = 0;
      for (j = ve; j <= se; j++) {
        const ut = v[j];
        if (Je >= rt) {
          ge(ut, x, z, !0);
          continue;
        }
        let Rt;
        if (ut.key != null)
          Rt = De.get(ut.key);
        else
          for (Pe = xe; Pe <= be; Pe++)
            if (qt[Pe - xe] === 0 && ua(ut, C[Pe])) {
              Rt = Pe;
              break;
            }
        Rt === void 0 ? ge(ut, x, z, !0) : (qt[Rt - xe] = j + 1, Rt >= Lt ? Lt = Rt : Tt = !0, A(
          ut,
          C[Rt],
          k,
          null,
          x,
          z,
          K,
          V,
          Q
        ), Je++);
      }
      const Kn = Tt ? sm(qt) : Ha;
      for (Pe = Kn.length - 1, j = rt - 1; j >= 0; j--) {
        const ut = xe + j, Rt = C[ut], Wn = C[ut + 1], qn = ut + 1 < _e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Wn.el || Nh(Wn)
        ) : N;
        qt[j] === 0 ? A(
          null,
          Rt,
          k,
          qn,
          x,
          z,
          K,
          V,
          Q
        ) : Tt && (Pe < 0 || j !== Kn[Pe] ? Ee(Rt, k, qn, 2) : Pe--);
      }
    }
  }, Ee = (v, C, k, N, x = null) => {
    const { el: z, type: K, transition: V, children: Q, shapeFlag: j } = v;
    if (j & 6) {
      Ee(v.component.subTree, C, k, N);
      return;
    }
    if (j & 128) {
      v.suspense.move(C, k, N);
      return;
    }
    if (j & 64) {
      K.move(v, C, k, ln);
      return;
    }
    if (K === he) {
      i(z, C, k);
      for (let se = 0; se < Q.length; se++)
        Ee(Q[se], C, k, N);
      i(v.anchor, C, k);
      return;
    }
    if (K === Ms) {
      G(v, C, k);
      return;
    }
    if (N !== 2 && j & 1 && V)
      if (N === 0)
        V.persisted && !z[pn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Kt(() => V.enter(z), x));
      else {
        const { leave: se, delayLeave: be, afterLeave: ve } = V, xe = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, De = () => {
          const Pe = z._isLeaving || !!z[pn];
          z._isLeaving && z[pn](
            !0
            /* cancelled */
          ), V.persisted && !Pe ? xe() : se(z, () => {
            xe(), ve && ve();
          });
        };
        be ? be(z, xe, De) : De();
      }
    else
      i(z, C, k);
  }, ge = (v, C, k, N = !1, x = !1) => {
    const {
      type: z,
      props: K,
      ref: V,
      children: Q,
      dynamicChildren: j,
      shapeFlag: _e,
      patchFlag: se,
      dirs: be,
      cacheIndex: ve,
      memo: xe
    } = v;
    if (se === -2 && (x = !1), V != null && (vi(), kr(V, null, k, v, !0), gi()), ve != null && (C.renderCache[ve] = void 0), _e & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const De = _e & 1 && be, Pe = !Va(v);
    let Je;
    if (Pe && (Je = K && K.onVnodeBeforeUnmount) && Dn(Je, C, v), _e & 6)
      it(v.component, k, N);
    else {
      if (_e & 128) {
        v.suspense.unmount(k, N);
        return;
      }
      De && ta(v, null, C, "beforeUnmount"), _e & 64 ? v.type.remove(
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
      (z !== he || se > 0 && se & 64) ? st(
        j,
        C,
        k,
        !1,
        !0
      ) : (z === he && se & 384 || !x && _e & 16) && st(Q, C, k), N && Be(v);
    }
    const rt = xe != null && ve == null;
    (Pe && (Je = K && K.onVnodeUnmounted) || De || rt) && Kt(() => {
      Je && Dn(Je, C, v), De && ta(v, null, C, "unmounted"), rt && (v.el = null);
    }, k);
  }, Be = (v) => {
    const { type: C, el: k, anchor: N, transition: x } = v;
    if (C === he) {
      Ae(k, N);
      return;
    }
    if (C === Ms) {
      F(v);
      return;
    }
    const z = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: K, delayLeave: V } = x, Q = () => K(k, z);
      V ? V(v.el, z, Q) : Q();
    } else
      z();
  }, Ae = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, it = (v, C, k) => {
    const { bum: N, scope: x, job: z, subTree: K, um: V, m: Q, a: j } = v;
    Wu(Q), Wu(j), N && Ds(N), x.stop(), z && (z.flags |= 8, ge(K, v, C, k)), V && Kt(V, C), Kt(() => {
      v.isUnmounted = !0;
    }, C);
  }, st = (v, C, k, N = !1, x = !1, z = 0) => {
    for (let K = z; K < v.length; K++)
      ge(v[K], C, k, N, x);
  }, ot = (v) => {
    if (v.shapeFlag & 6)
      return ot(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[Qf];
    return k ? S(k) : C;
  };
  let Ct = !1;
  const at = (v, C, k) => {
    let N;
    v == null ? C._vnode && (ge(C._vnode, null, null, !0), N = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, Ct || (Ct = !0, Pu(N), Xf(), Ct = !1);
  }, ln = {
    p: A,
    um: ge,
    m: Ee,
    r: Be,
    mt: D,
    mc: ce,
    pc: ie,
    pbc: ae,
    n: ot,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: Vg(at)
  };
}
function Ol({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function na({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ce(i) && Ce(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = oi(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Qc(s, o)), o.type === os && (o.patchFlag === -1 && (o = a[r] = oi(o)), o.el = s.el), o.type === Ot && !o.el && (o.el = s.el);
    }
}
function sm(e) {
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
function Oh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Oh(t);
}
function Wu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Nh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Nh(t.subTree) : null;
}
const xh = (e) => e.__isSuspense;
function om(e, t) {
  t && t.pendingBranch ? Ce(e) ? t.effects.push(...e) : t.effects.push(e) : Yf(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), os = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), Ms = /* @__PURE__ */ Symbol.for("v-stc"), hi = [];
let sn = null;
function w(e = !1) {
  hi.push(sn = e ? null : []);
}
function eu() {
  hi.pop(), sn = hi[hi.length - 1] || null;
}
let Gr = 1;
function qs(e, t = !1) {
  Gr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function Lh(e) {
  return e.dynamicChildren = Gr > 0 ? sn || Ha : null, eu(), Gr > 0 && sn && sn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Lh(
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
function Me(e, t, n, i, a) {
  return Lh(
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
function Kr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ua(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rh = ({ key: e }) => e ?? null, $s = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Bt(e) || Ne(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === he ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rh(t),
    ref: t && $s(t),
    scopeId: Zo,
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
    ctx: Nt
  };
  return o ? (Ys(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Gr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const we = lm;
function lm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === uh) && (e = Ot), Kr(e)) {
    const o = zi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ys(o, n), Gr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (gm(e) && (e = e.__vccOpts), t) {
    t = Wr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Te(o)), Xe(l) && (/* @__PURE__ */ Kc(l) && !Ce(l) && (l = gt({}, l)), t.style = on(l));
  }
  const s = tt(e) ? 1 : xh(e) ? 128 : Qo(e) ? 64 : Xe(e) ? 4 : Ne(e) ? 2 : 0;
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
function Wr(e) {
  return e ? /* @__PURE__ */ Kc(e) || Sh(e) ? gt({}, e) : e : null;
}
function zi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ht(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Rh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Ce(r) ? r.concat($s(t)) : [r, $s(t)] : $s(t)
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
    patchFlag: t && e.type !== he ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && zi(e.ssContent),
    ssFallback: e.ssFallback && zi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Vr(
    u,
    l.clone(u)
  ), u;
}
function Oe(e = " ", t = 0) {
  return we(os, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (w(), Me(Ot, null, e)) : we(Ot, null, e);
}
function Hn(e) {
  return e == null || typeof e == "boolean" ? we(Ot) : Ce(e) ? we(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Kr(e) ? oi(e) : we(os, null, String(e));
}
function oi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zi(e);
}
function Ys(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ce(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ys(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Sh(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ne(t)) {
    if (i & 65) {
      Ys(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
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
        t.class !== i.class && (t.class = Te([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Ho(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(Ce(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !jo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  yn(e, t, 7, [
    n,
    i
  ]);
}
const cm = vh();
let um = 0;
function dm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || cm, r = {
    uid: um++,
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
    scope: new Iv(
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
    propsOptions: Th(i, a),
    emitsOptions: bh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: je,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: je,
    data: je,
    props: je,
    attrs: je,
    slots: je,
    refs: je,
    setupState: je,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Gg.bind(null, r), e.ce && e.ce(r), r;
}
let zt = null;
const wa = () => zt || Nt;
let Xs, qr;
{
  const e = Wo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Xs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => zt = n
  ), qr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yr = n
  );
}
const ls = (e) => {
  const t = zt;
  return Xs(e), e.scope.on(), () => {
    e.scope.off(), Xs(t);
  };
}, qu = () => {
  zt && zt.scope.off(), Xs(null);
};
function Ih(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = !1;
function fm(e, t = !1, n = !1) {
  t && qr(t);
  const { props: i, children: a } = e.vnode, r = Ih(e);
  Zg(e, i, r, t), tm(e, a, n || t);
  const s = r ? hm(e, t) : void 0;
  return t && qr(!1), s;
}
function hm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pg);
  const { setup: i } = n;
  if (i) {
    vi();
    const a = e.setupContext = i.length > 1 ? Dh(e) : null, r = ls(e), s = rs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Cf(s);
    if (gi(), r(), (o || e.sp) && !Va(e) && sh(e), o) {
      if (s.then(qu, qu), t)
        return s.then((l) => {
          qr(!0);
          try {
            Yu(e, l, t);
          } finally {
            qr(!1);
          }
        }).catch((l) => {
          Xo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Yu(e, s);
  } else
    Ph(e);
}
function Yu(e, t, n) {
  Ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = Kf(t)), Ph(e);
}
function Ph(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || mn);
  {
    const a = ls(e);
    vi();
    try {
      Fg(e);
    } finally {
      gi(), a();
    }
  }
}
const pm = {
  get(e, t) {
    return $t(e, "get", ""), e[t];
  }
};
function Dh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Kf(Qv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Or)
        return Or[n](e);
    },
    has(t, n) {
      return n in t || n in Or;
    }
  })) : e.proxy;
}
function vm(e, t = !0) {
  return Ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gm(e) {
  return Ne(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ rg(e, t, Yr);
function Zt(e, t, n) {
  try {
    qs(-1);
    const i = arguments.length;
    return i === 2 ? Xe(t) && !Ce(t) ? Kr(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Kr(n) && (n = [n]), we(e, t, n));
  } finally {
    qs(1);
  }
}
const mm = "3.5.42", bm = mn;
let gc;
const Xu = typeof window < "u" && window.trustedTypes;
if (Xu)
  try {
    gc = /* @__PURE__ */ Xu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mh = gc ? (e) => gc.createHTML(e) : (e) => e, ym = "http://www.w3.org/2000/svg", _m = "http://www.w3.org/1998/Math/MathML", si = typeof document < "u" ? document : null, Zu = si && /* @__PURE__ */ si.createElement("template"), wm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? si.createElementNS(ym, e) : t === "mathml" ? si.createElementNS(_m, e) : n ? si.createElement(e, { is: n }) : si.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => si.createTextNode(e),
  createComment: (e) => si.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => si.querySelector(e),
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
      Zu.innerHTML = Mh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Zu.content;
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
}, Ai = "transition", ur = "animation", Xr = /* @__PURE__ */ Symbol("_vtc"), $h = {
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
}, Sm = /* @__PURE__ */ gt(
  {},
  th,
  $h
), Cm = (e) => (e.displayName = "Transition", e.props = Sm, e), Tm = /* @__PURE__ */ Cm(
  (e, { slots: t }) => Zt(Cg, Em(e), t)
), ia = (e, t = []) => {
  Ce(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ju = (e) => e ? Ce(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Em(e) {
  const t = {};
  for (const J in e)
    J in $h || (t[J] = e[J]);
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
  } = e, O = Am(a), A = O && O[0], L = O && O[1], {
    onBeforeEnter: R,
    onEnter: $,
    onEnterCancelled: G,
    onLeave: F,
    onLeaveCancelled: le,
    onBeforeAppear: ne = R,
    onAppear: P = $,
    onAppearCancelled: ce = G
  } = t, X = (J, te, D, M) => {
    J._enterCancelled = M, aa(J, te ? u : o), aa(J, te ? d : s), D && D();
  }, ae = (J, te) => {
    J._isLeaving = !1, aa(J, h), aa(J, E), aa(J, S), te && te();
  }, me = (J) => (te, D) => {
    const M = J ? P : $, Y = () => X(te, J, D);
    ia(M, [te, Y]), Qu(() => {
      aa(te, J ? l : r), ni(te, J ? u : o), Ju(M) || ed(te, i, A, Y);
    });
  };
  return gt(t, {
    onBeforeEnter(J) {
      ia(R, [J]), ni(J, r), ni(J, s);
    },
    onBeforeAppear(J) {
      ia(ne, [J]), ni(J, l), ni(J, d);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(J, te) {
      J._isLeaving = !0;
      const D = () => ae(J, te);
      ni(J, h), J._enterCancelled ? (ni(J, S), id(J)) : (id(J), ni(J, S)), Qu(() => {
        J._isLeaving && (aa(J, h), ni(J, E), Ju(F) || ed(J, i, L, D));
      }), ia(F, [J, D]);
    },
    onEnterCancelled(J) {
      X(J, !1, void 0, !0), ia(G, [J]);
    },
    onAppearCancelled(J) {
      X(J, !0, void 0, !0), ia(ce, [J]);
    },
    onLeaveCancelled(J) {
      ae(J), ia(le, [J]);
    }
  });
}
function Am(e) {
  if (e == null)
    return null;
  if (Xe(e))
    return [Nl(e.enter), Nl(e.leave)];
  {
    const t = Nl(e);
    return [t, t];
  }
}
function Nl(e) {
  return Cv(e);
}
function ni(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Xr] || (e[Xr] = /* @__PURE__ */ new Set())).add(t);
}
function aa(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Xr];
  n && (n.delete(t), n.size || (e[Xr] = void 0));
}
function Qu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let km = 0;
function ed(e, t, n, i) {
  const a = e._endId = ++km, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Om(e, t);
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
function Om(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Ai}Delay`), r = i(`${Ai}Duration`), s = td(a, r), o = i(`${ur}Delay`), l = i(`${ur}Duration`), d = td(o, l);
  let u = null, h = 0, S = 0;
  t === Ai ? s > 0 && (u = Ai, h = s, S = r.length) : t === ur ? d > 0 && (u = ur, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Ai : ur : null, S = u ? u === Ai ? r.length : l.length : 0);
  const E = u === Ai && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ai}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function td(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => nd(n) + nd(e[i])));
}
function nd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function id(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Nm(e, t, n) {
  const i = e[Xr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zs = /* @__PURE__ */ Symbol("_vod"), Fh = /* @__PURE__ */ Symbol("_vsh"), Ka = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Zs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : dr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), dr(e, !0), i.enter(e)) : i.leave(e, () => {
      dr(e, !1);
    }) : dr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    dr(e, t);
  }
};
function dr(e, t) {
  e.style.display = t ? e[Zs] : "none", e[Fh] = !t;
}
const zh = /* @__PURE__ */ Symbol("");
function xm(e) {
  const t = wa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Js(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Js(t.ce, a) : mc(t.subTree, a), n(a);
  };
  ch(() => {
    Yf(i);
  }), Bi(() => {
    vt(i, mn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ss(() => a.disconnect());
  });
}
function mc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      mc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Js(e.el, t);
  else if (e.type === he)
    e.children.forEach((n) => mc(n, t));
  else if (e.type === Ms) {
    let { el: n, anchor: i } = e;
    for (; n && (Js(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Js(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Rv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[zh] = i;
  }
}
const Lm = /(?:^|;)\s*display\s*:/;
function Rm(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && _r(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && _r(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Pm(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || _r(i, s, o) : _r(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[zh];
      s && (n += ";" + s), i.cssText = n, r = Lm.test(n);
    }
  } else t && e.removeAttribute("style");
  Zs in e && (e[Zs] = r ? i.display : "", e[Fh] && (i.display = "none"));
}
const Es = /\s*!important$/;
function _r(e, t, n) {
  if (Ce(n))
    n.forEach((i) => _r(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Es.test(n) ? e.setProperty(t, n.replace(Es, ""), "important") : e.setProperty(t, n);
  else {
    const i = Im(e, t);
    Es.test(n) ? e.setProperty(
      yi(i),
      n.replace(Es, ""),
      "important"
    ) : e[i] = n;
  }
}
const ad = ["Webkit", "Moz", "ms"], xl = {};
function Im(e, t) {
  const n = xl[t];
  if (n)
    return n;
  let i = Ut(t);
  if (i !== "filter" && i in e)
    return xl[t] = i;
  i = Go(i);
  for (let a = 0; a < ad.length; a++) {
    const r = ad[a] + i;
    if (r in e)
      return xl[t] = r;
  }
  return t;
}
function Pm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const rd = "http://www.w3.org/1999/xlink";
function sd(e, t, n, i, a, r = Nv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rd, t.slice(6, t.length)) : e.setAttributeNS(rd, t, n) : n == null || r && !kf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function od(e, t, n, i, a) {
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
    o === "boolean" ? n = kf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function da(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Dm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ld = /* @__PURE__ */ Symbol("_vei");
function Mm(e, t, n, i, a = null) {
  const r = e[ld] || (e[ld] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = zm(t);
    if (i) {
      const d = r[t] = Hm(
        i,
        a
      );
      da(e, o, d, l);
    } else s && (Dm(e, o, s, l), r[t] = void 0);
  }
}
const $m = /(Once|Passive|Capture)$/, Fm = /^on:?(?:Once|Passive|Capture)$/;
function zm(e) {
  let t, n;
  for (; (n = e.match($m)) && !Fm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yi(e.slice(2)), t];
}
let Ll = 0;
const Um = /* @__PURE__ */ Promise.resolve(), Bm = () => Ll || (Um.then(() => Ll = 0), Ll = Date.now());
function Hm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Ce(a)) {
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
  return n.value = e, n.attached = Bm(), n;
}
const cd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Nm(e, i, s) : t === "style" ? Rm(e, n, i) : Ho(t) ? jo(t) || Mm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vm(e, t, i, s)) ? (od(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Gm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? od(e, Ut(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), sd(e, t, i, s));
};
function Vm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && cd(t) && Ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return cd(t) && tt(n) ? !1 : t in e;
}
function Gm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ut(t);
  return Array.isArray(n) ? n.some((a) => Ut(a) === i) : Object.keys(n).some((a) => Ut(a) === i);
}
const Qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ce(t) ? (n) => Ds(t, n) : t;
};
function Km(e) {
  e.target.composing = !0;
}
function ud(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ha = /* @__PURE__ */ Symbol("_assign"), As = /* @__PURE__ */ Symbol("_initialValue");
function Rl(e, t, n) {
  return t && (e = e.trim()), n && (e = Ko(e)), e;
}
const Cn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[As] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[As] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ha] = Qs(a);
    const r = i || a.props && a.props.type === "number";
    da(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ha](Rl(e.value, n, r));
    }), (n || r) && da(e, "change", () => {
      e.value = Rl(e.value, n, r);
    }), t || (da(e, "compositionstart", Km), da(e, "compositionend", ud), da(e, "change", ud));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[As];
    delete e[As], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[ha](Rl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[ha] = Qs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ko(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Mn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, da(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Ko(eo(l)) : eo(l)
      ), r = e.multiple, s = r ? ya(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? Ce(s) ? a.slice() : a : s
      ];
      try {
        e[ha](s);
      } finally {
        vn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[ha] = Qs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    dd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ha] = Qs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Wm(t, n[1], n[0])) && dd(e, t);
  }
};
function Wm(e, t, n) {
  if (!n || Ce(e)) return Fi(e, t);
  if (ya(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function dd(e, t) {
  const n = e.multiple, i = Ce(t);
  if (!(n && !i && !ya(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = eo(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Lv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Fi(eo(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function eo(e) {
  return "_value" in e ? e._value : e.value;
}
const qm = ["ctrl", "shift", "alt", "meta"], Ym = {
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
  exact: (e, t) => qm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ke = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Ym[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Xm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, kt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = yi(a.key);
    if (t.some(
      (s) => s === r || Xm[s] === r
    ))
      return e(a);
  }));
}, Zm = /* @__PURE__ */ gt({ patchProp: jm }, wm);
let fd;
function Jm() {
  return fd || (fd = im(Zm));
}
const Qm = ((...e) => {
  const t = Jm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = tb(i);
    if (!a) return;
    const r = t._component;
    !Ne(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, eb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function eb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tb(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function tu(e, t, n) {
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
function hd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function nb(e) {
  if (Array.isArray(e)) return e;
}
function ib(e, t) {
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
function ab() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rb(e, t) {
  return nb(e) || ib(e, t) || sb(e, t) || ab();
}
function sb(e, t) {
  if (e) {
    if (typeof e == "string") return hd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hd(e, t) : void 0;
  }
}
const Uh = Object.entries, pd = Object.setPrototypeOf, ob = Object.isFrozen, lb = Object.getPrototypeOf, cb = Object.getOwnPropertyDescriptor;
let yt = Object.freeze, St = Object.seal, Ua = Object.create, Bh = typeof Reflect < "u" && Reflect, bc = Bh.apply, yc = Bh.construct;
yt || (yt = function(t) {
  return t;
});
St || (St = function(t) {
  return t;
});
bc || (bc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
yc || (yc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const la = mt(Array.prototype.forEach), ub = mt(Array.prototype.lastIndexOf), vd = mt(Array.prototype.pop), fr = mt(Array.prototype.push), db = mt(Array.prototype.splice), Wa = Array.isArray, wr = mt(String.prototype.toLowerCase), Il = mt(String.prototype.toString), gd = mt(String.prototype.match), hr = mt(String.prototype.replace), md = mt(String.prototype.indexOf), fb = mt(String.prototype.trim), hb = mt(Number.prototype.toString), pb = mt(Boolean.prototype.toString), bd = typeof BigInt > "u" ? null : mt(BigInt.prototype.toString), yd = typeof Symbol > "u" ? null : mt(Symbol.prototype.toString), Jt = mt(Object.prototype.hasOwnProperty), pr = mt(Object.prototype.toString), Pt = mt(RegExp.prototype.test), ra = vb(TypeError);
function mt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return bc(e, t, i);
  };
}
function vb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return yc(e, n);
  };
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wr;
  if (pd && pd(e, null), !Wa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (ob(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function gb(e) {
  for (let t = 0; t < e.length; t++)
    Jt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = Ua(null);
  for (const i of Uh(e)) {
    var n = rb(i, 2);
    const a = n[0], r = n[1];
    Jt(e, a) && (Wa(r) ? t[a] = gb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function mb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return hb(e);
    case "boolean":
      return pb(e);
    case "bigint":
      return bd ? bd(e) : "0";
    case "symbol":
      return yd ? yd(e) : "Symbol()";
    case "undefined":
      return pr(e);
    case "function":
    case "object": {
      if (e === null)
        return pr(e);
      const t = e, n = Tn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : pr(i);
      }
      return pr(e);
    }
    default:
      return pr(e);
  }
}
function Tn(e, t) {
  for (; e !== null; ) {
    const i = cb(e, t);
    if (i) {
      if (i.get)
        return mt(i.get);
      if (typeof i.value == "function")
        return mt(i.value);
    }
    e = lb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function bb(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const _d = yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pl = yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Dl = yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yb = yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ml = yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), _b = yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wd = yt(["#text"]), Sd = yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $l = yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cd = yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ks = yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), wb = St(/{{[\w\W]*|^[\w\W]*}}/g), Sb = St(/<%[\w\W]*|^[\w\W]*%>/g), Cb = St(/\${[\w\W]*/g), Tb = St(/^data-[\-\w.\u00B7-\uFFFF]+$/), Eb = St(/^aria-[\-\w]+$/), Td = St(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ab = St(/^(?:\w+script|data):/i), kb = St(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ob = St(/^html$/i), Nb = St(/^[a-z][.\w]*(-[.\w]+)+$/i), Ed = St(/<[/\w!]/g), Ad = St(/<[/\w]/g), xb = St(/<\/no(script|embed|frames)/i), Lb = St(/\/>/i), nn = {
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
}, Hh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Rb = yt(He({}, Hh)), Ib = (function() {
  const e = {};
  return la(Hh, (t) => {
    e[t] = St(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), yt(e);
})(), Pb = function() {
  return typeof window > "u" ? null : window;
}, Db = function(t, n) {
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
}, kd = function() {
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
}, ki = function(t, n, i, a) {
  return Jt(t, n) && Wa(t[n]) ? He(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, Fl = function(t, n, i) {
  const a = Jt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function jh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pb();
  const t = (Z) => jh(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Tn(S, "cloneNode"), O = Tn(S, "remove"), A = Tn(S, "nextSibling"), L = Tn(S, "childNodes"), R = Tn(S, "parentNode"), $ = Tn(S, "shadowRoot"), G = Tn(S, "attributes"), F = s && s.prototype ? Tn(s.prototype, "nodeType") : null, le = s && s.prototype ? Tn(s.prototype, "nodeName") : null, ne = s && s.prototype ? Tn(s.prototype, "ownerDocument") : null, P = function(y) {
    return F ? F(y) : y.nodeType;
  }, ce = function(y) {
    return le ? le(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let X, ae = "", me, J = !1, te = 0;
  const D = function() {
    if (te > 0)
      throw ra('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(y) {
    D(), te++;
    try {
      return X.createHTML(y);
    } finally {
      te--;
    }
  }, Y = function(y) {
    D(), te++;
    try {
      return X.createScriptURL(y);
    } finally {
      te--;
    }
  }, re = function() {
    return J || (me = Db(h, a), J = !0), me;
  }, ie = n, pe = ie.implementation, de = ie.createNodeIterator, Ee = ie.createDocumentFragment, ge = ie.getElementsByTagName, Be = i.importNode;
  let Ae = kd();
  t.isSupported = typeof Uh == "function" && typeof R == "function" && pe && pe.createHTMLDocument !== void 0;
  const it = wb, st = Sb, ot = Cb, Ct = Tb, at = Eb, ln = Ab, U = kb, v = Nb;
  let C = Td, k = null;
  const N = He({}, [..._d, ...Pl, ...Dl, ...Ml, ...wd]);
  let x = null;
  const z = He({}, [...Sd, ...$l, ...Cd, ...ks]);
  let K = Object.seal(Ua(null, {
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
  const j = Object.seal(Ua(null, {
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
  let _e = !0, se = !0, be = !1, ve = !0, xe = !1, De = !0, Pe = !1, Je = !1, rt = null, Tt = null, Lt = !1, qt = !1, Kn = !1, ut = !1, Rt = !0, Wn = !1;
  const qn = "user-content-";
  let Vi = !0, Gi = !1, Yn = {}, wi = null;
  const Ja = He({}, [
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
  let Qa = null;
  const us = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ca = null;
  const Ta = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ki = "http://www.w3.org/1998/Math/MathML", Wi = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml";
  let Xn = Qt, Ea = !1, Aa = null;
  const dl = He({}, [Ki, Wi, Qt], Il), ds = yt(["mi", "mo", "mn", "ms", "mtext"]);
  let ka = He({}, ds);
  const jt = yt(["annotation-xml"]);
  let er = He({}, jt);
  const qi = He({}, ["title", "style", "font", "a", "script"]);
  let Yi = null;
  const Oa = ["application/xhtml+xml", "text/html"], fl = "text/html";
  let nt = null, _n = null;
  const fs = n.createElement("form"), tr = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Xi = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_n && _n === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = an(y), Yi = // eslint-disable-next-line unicorn/prefer-includes
    Oa.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? fl : y.PARSER_MEDIA_TYPE, nt = Yi === "application/xhtml+xml" ? Il : wr, k = ki(y, "ALLOWED_TAGS", N, {
      transform: nt
    }), x = ki(y, "ALLOWED_ATTR", z, {
      transform: nt
    }), Aa = ki(y, "ALLOWED_NAMESPACES", dl, {
      transform: Il
    }), Ca = ki(y, "ADD_URI_SAFE_ATTR", Ta, {
      transform: nt,
      base: Ta
    }), Qa = ki(y, "ADD_DATA_URI_TAGS", us, {
      transform: nt,
      base: us
    }), wi = ki(y, "FORBID_CONTENTS", Ja, {
      transform: nt
    }), V = ki(y, "FORBID_TAGS", an({}), {
      transform: nt
    }), Q = ki(y, "FORBID_ATTR", an({}), {
      transform: nt
    }), Yn = Jt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? an(y.USE_PROFILES) : y.USE_PROFILES : !1, _e = y.ALLOW_ARIA_ATTR !== !1, se = y.ALLOW_DATA_ATTR !== !1, be = y.ALLOW_UNKNOWN_PROTOCOLS || !1, ve = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = y.SAFE_FOR_TEMPLATES || !1, De = y.SAFE_FOR_XML !== !1, Pe = y.WHOLE_DOCUMENT || !1, qt = y.RETURN_DOM || !1, Kn = y.RETURN_DOM_FRAGMENT || !1, ut = y.RETURN_TRUSTED_TYPE || !1, Lt = y.FORCE_BODY || !1, Rt = y.SANITIZE_DOM !== !1, Wn = y.SANITIZE_NAMED_PROPS || !1, Vi = y.KEEP_CONTENT !== !1, Gi = y.IN_PLACE || !1, C = bb(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Td, Xn = typeof y.NAMESPACE == "string" ? y.NAMESPACE : Qt, ka = Fl(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => He({}, ds)
      // Default built-in map
    ), er = Fl(
      y,
      "HTML_INTEGRATION_POINTS",
      () => He({}, jt)
      // Default built-in map
    );
    const I = Fl(y, "CUSTOM_ELEMENT_HANDLING", () => Ua(null));
    if (K = Ua(null), Jt(I, "tagNameCheck") && tr(I.tagNameCheck) && (K.tagNameCheck = I.tagNameCheck), Jt(I, "attributeNameCheck") && tr(I.attributeNameCheck) && (K.attributeNameCheck = I.attributeNameCheck), Jt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), St(K), xe && (se = !1), Kn && (qt = !0), Yn && (k = He({}, wd), x = Ua(null), Yn.html === !0 && (He(k, _d), He(x, Sd)), Yn.svg === !0 && (He(k, Pl), He(x, $l), He(x, ks)), Yn.svgFilters === !0 && (He(k, Dl), He(x, $l), He(x, ks)), Yn.mathMl === !0 && (He(k, Ml), He(x, Cd), He(x, ks))), j.tagCheck = null, j.attributeCheck = null, Jt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? j.tagCheck = y.ADD_TAGS : Wa(y.ADD_TAGS) && (k === N && (k = an(k)), He(k, y.ADD_TAGS, nt))), Jt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? j.attributeCheck = y.ADD_ATTR : Wa(y.ADD_ATTR) && (x === z && (x = an(x)), He(x, y.ADD_ATTR, nt))), Jt(y, "ADD_FORBID_CONTENTS") && Wa(y.ADD_FORBID_CONTENTS) && (wi === Ja && (wi = an(wi)), He(wi, y.ADD_FORBID_CONTENTS, nt)), Vi && (k["#text"] = !0), Pe && He(k, ["html", "head", "body"]), k.table && (He(k, ["tbody"]), delete V.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ra('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ra('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = X;
      X = y.TRUSTED_TYPES_POLICY;
      try {
        ae = M("");
      } catch (oe) {
        throw X = W, oe;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (X = void 0, ae = "") : (X === void 0 && (X = re()), X && typeof ae == "string" && (ae = M("")));
    yt && yt(y), _n = y;
  }, Yt = He({}, [...Pl, ...Dl, ...yb]), Zi = He({}, [...Ml, ..._b]), hs = function(y, I, W) {
    return I.namespaceURI === Qt ? y === "svg" : I.namespaceURI === Ki ? y === "svg" && (W === "annotation-xml" || ka[W]) : !!Yt[y];
  }, hl = function(y, I, W) {
    return I.namespaceURI === Qt ? y === "math" : I.namespaceURI === Wi ? y === "math" && er[W] : !!Zi[y];
  }, pl = function(y, I, W) {
    return I.namespaceURI === Wi && !er[W] || I.namespaceURI === Ki && !ka[W] ? !1 : !Zi[y] && (qi[y] || !Yt[y]);
  }, vl = function(y) {
    let I = R(y);
    (!I || !I.tagName) && (I = {
      namespaceURI: Xn,
      tagName: "template"
    });
    const W = wr(y.tagName), oe = wr(I.tagName);
    return Aa[y.namespaceURI] ? y.namespaceURI === Wi ? hs(W, I, oe) : y.namespaceURI === Ki ? hl(W, I, oe) : y.namespaceURI === Qt ? pl(W, I, oe) : !!(Yi === "application/xhtml+xml" && Aa[y.namespaceURI]) : !1;
  }, Se = function(y) {
    fr(t.removed, {
      element: y
    });
    try {
      R(y).removeChild(y);
    } catch {
      if (O(y), !R(y))
        throw ra("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, xn = function(y, I, W) {
    try {
      y.removeAttributeNode(I);
    } catch {
      try {
        y.removeAttribute(W);
      } catch {
      }
    }
  }, dt = function(y) {
    ct(y);
    const I = L(y);
    if (I) {
      const oe = [];
      la(I, (ue) => {
        fr(oe, ue);
      }), la(oe, (ue) => {
        try {
          O(ue);
        } catch {
        }
      });
    }
    const W = G(y);
    if (W)
      for (let oe = W.length - 1; oe >= 0; --oe) {
        const ue = W[oe], ye = ue && ue.name;
        typeof ye == "string" && xn(y, ue, ye);
      }
  }, Vt = function(y, I, W) {
    if (!W)
      try {
        W = I.getAttributeNode(y);
      } catch {
        W = null;
      }
    fr(t.removed, {
      attribute: W || null,
      from: I
    });
    try {
      W ? I.removeAttributeNode(W) : I.removeAttribute(y);
    } catch {
      try {
        I.removeAttribute(y);
      } catch {
      }
    }
    if (y === "is")
      if (qt || Kn)
        try {
          Se(I);
        } catch {
        }
      else
        try {
          I.setAttribute(y, "");
        } catch {
        }
  }, en = function(y) {
    const I = G(y);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const oe = I[W], ue = oe && oe.name;
        typeof ue != "string" || x[nt(ue)] || xn(y, oe, ue);
      }
  }, ct = function(y) {
    const I = [y];
    for (; I.length > 0; ) {
      const W = I.pop();
      P(W) === nn.element && en(W);
      const ue = L(W);
      if (ue)
        for (let ye = ue.length - 1; ye >= 0; --ye)
          I.push(ue[ye]);
    }
  }, nr = function(y, I) {
    return De ? y === "patchsrc" ? !0 : y === "for" && I !== "label" && I !== "output" : !1;
  }, Zn = function(y) {
    if (!De)
      return;
    const I = [y];
    for (; I.length > 0; ) {
      const W = I.pop(), oe = P(W);
      if (oe === nn.processingInstruction || oe === nn.comment && Pt(Ad, W.data)) {
        try {
          O(W);
        } catch {
        }
        continue;
      }
      if (oe === nn.element) {
        const ye = W, Ve = nt(ce(W));
        try {
          ye.hasAttribute && ye.hasAttribute("patchsrc") && ye.removeAttribute("patchsrc"), ye.hasAttribute && ye.hasAttribute("for") && nr("for", Ve) && ye.removeAttribute("for");
        } catch {
        }
      }
      const ue = L(W);
      if (ue)
        for (let ye = ue.length - 1; ye >= 0; --ye)
          I.push(ue[ye]);
    }
  }, Ln = function(y) {
    let I = null, W = null;
    if (Lt)
      y = "<remove></remove>" + y;
    else {
      const ye = gd(y, /^[\r\n\t ]+/);
      W = ye && ye[0];
    }
    Yi === "application/xhtml+xml" && Xn === Qt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const oe = X ? M(y) : y;
    if (Xn === Qt)
      try {
        I = new u().parseFromString(oe, Yi);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = pe.createDocument(Xn, "template", null);
      try {
        I.documentElement.innerHTML = Ea ? ae : oe;
      } catch {
      }
    }
    const ue = I.body || I.documentElement;
    return y && W && ue.insertBefore(n.createTextNode(W), ue.childNodes[0] || null), Xn === Qt ? ge.call(I, Pe ? "html" : "body")[0] : Pe ? I.documentElement : ue;
  }, Na = function(y) {
    const I = ne ? ne(y) : y.ownerDocument;
    return de.call(
      I || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xt = function(y) {
    return y = hr(y, it, " "), y = hr(y, st, " "), y = hr(y, ot, " "), y;
  }, Si = function(y) {
    var I;
    y.normalize();
    const W = ne ? ne(y) : y.ownerDocument, oe = de.call(
      W || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = oe.nextNode();
    for (; ue; )
      ue.data = Xt(ue.data), ue = oe.nextNode();
    const ye = (I = y.querySelectorAll) === null || I === void 0 ? void 0 : I.call(y, "template");
    ye && la(ye, (Ve) => {
      cn(Ve.content) && Si(Ve.content);
    });
  }, Ci = function(y) {
    const I = le ? le(y) : null;
    return typeof I != "string" || nt(I) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== G(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== F(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== L(y);
  }, cn = function(y) {
    if (!F || typeof y != "object" || y === null)
      return !1;
    try {
      return F(y) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, Jn = function(y) {
    if (!F || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof F(y) == "number";
    } catch {
      return !1;
    }
  };
  function bt(Z, y, I) {
    Z.length !== 0 && la(Z, (W) => {
      W.call(t, y, I, _n);
    });
  }
  const Ji = function(y, I) {
    return !!(De && y.hasChildNodes() && !Jn(y.firstElementChild) && Pt(Ed, y.textContent) && Pt(Ed, y.innerHTML) || De && y.namespaceURI === Qt && Rb[I] && (Jn(y.firstElementChild) || typeof y.textContent == "string" && Pt(Ib[I], y.textContent)) || y.nodeType === nn.processingInstruction || De && y.nodeType === nn.comment && Pt(Ad, y.data));
  }, Qn = function(y, I) {
    if (y instanceof RegExp)
      return Pt(y, I);
    if (y instanceof Function) {
      for (var W = arguments.length, oe = new Array(W > 2 ? W - 2 : 0), ue = 2; ue < W; ue++)
        oe[ue - 2] = arguments[ue];
      return !!y(I, ...oe);
    }
    return !1;
  }, xa = function(y, I, W) {
    if (!V[I] && ms(I) && Qn(K.tagNameCheck, I))
      return !1;
    if (Vi && !wi[I]) {
      const oe = R(y), ue = L(y);
      if (ue && oe) {
        const ye = ue.length;
        for (let Ve = ye - 1; Ve >= 0; --Ve) {
          const Qe = y === W ? E(ue[Ve], !0) : ue[Ve];
          oe.insertBefore(Qe, A(y));
        }
      }
    }
    return Se(y), !0;
  }, ps = function(y, I, W, oe) {
    return y.length === 0 ? I : I === W || I === oe ? an(I) : I;
  }, vs = function(y, I) {
    return y === I || R(y) !== null ? !1 : (Gi && ct(y), !0);
  }, Qi = function(y, I) {
    if (bt(Ae.beforeSanitizeElements, y, null), vs(y, I))
      return !0;
    if (Ci(y))
      return Se(y), !0;
    const W = nt(ce(y));
    if (k = ps(Ae.uponSanitizeElement, k, N, rt), bt(Ae.uponSanitizeElement, y, {
      tagName: W,
      allowedTags: k
    }), vs(y, I))
      return !0;
    if (Ji(y, W))
      return Se(y), !0;
    if (V[W] || !(j.tagCheck instanceof Function && j.tagCheck(W)) && !k[W]) {
      const ue = xa(y, W, I);
      return ue === !1 && bt(Ae.afterSanitizeElements, y, null), ue;
    }
    if (P(y) === nn.element && !vl(y) || (W === "noscript" || W === "noembed" || W === "noframes") && Pt(xb, y.innerHTML))
      return Se(y), !0;
    if (xe && y.nodeType === nn.text) {
      const ue = Xt(y.textContent);
      y.textContent !== ue && (fr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = ue);
    }
    return bt(Ae.afterSanitizeElements, y, null), !1;
  }, ir = function(y, I, W) {
    if (Q[I] || nr(I, y) || Rt && (I === "id" || I === "name") && (W in n || W in fs))
      return !1;
    const oe = x[I] || j.attributeCheck instanceof Function && j.attributeCheck(I, y);
    return se && Pt(Ct, I) || _e && Pt(at, I) ? !0 : oe ? Ca[I] || Pt(C, hr(W, U, "")) || (I === "src" || I === "xlink:href" || I === "href") && y !== "script" && md(W, "data:") === 0 && Qa[y] || be && !Pt(ln, hr(W, U, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ms(y) && Qn(K.tagNameCheck, y) && Qn(K.attributeNameCheck, I, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && K.allowCustomizedBuiltInElements && Qn(K.tagNameCheck, W)
    );
  }, gs = He({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ms = function(y) {
    return !gs[wr(y)] && Pt(v, y);
  }, gl = function(y, I, W, oe) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !W)
      switch (h.getAttributeType(y, I)) {
        case "TrustedHTML":
          return M(oe);
        case "TrustedScriptURL":
          return Y(oe);
      }
    return oe;
  }, ml = function(y, I, W, oe) {
    try {
      W ? y.setAttributeNS(W, I, oe) : y.setAttribute(I, oe), Ci(y) ? Se(y) : vd(t.removed);
    } catch {
      Vt(I, y);
    }
  }, wn = function(y) {
    bt(Ae.beforeSanitizeAttributes, y, null);
    const I = y.attributes;
    if (!I || Ci(y))
      return;
    x = ps(Ae.uponSanitizeAttribute, x, z, Tt);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let oe = I.length;
    const ue = nt(y.nodeName);
    for (; oe--; ) {
      const ye = I[oe], Ve = ye.name, Qe = ye.namespaceURI, It = ye.value, _t = nt(Ve), ei = It;
      let ft = Ve === "value" ? ei : fb(ei);
      if (W.attrName = _t, W.attrValue = ft, W.keepAttr = !0, W.forceKeepAttr = void 0, bt(Ae.uponSanitizeAttribute, y, W), ft = W.attrValue, Wn && (_t === "id" || _t === "name") && md(ft, qn) !== 0 && (Vt(Ve, y, ye), ft = qn + ft), De && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        Vt(Ve, y, ye);
        continue;
      }
      if (_t === "attributename" && gd(ft, "href")) {
        Vt(Ve, y, ye);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          Vt(Ve, y, ye);
          continue;
        }
        if (!ve && Pt(Lb, ft)) {
          Vt(Ve, y, ye);
          continue;
        }
        if (xe && (ft = Xt(ft)), !ir(ue, _t, ft)) {
          Vt(Ve, y, ye);
          continue;
        }
        ft = gl(ue, _t, Qe, ft), ft !== ei && ml(y, Ve, Qe, ft);
      }
    }
    bt(Ae.afterSanitizeAttributes, y, null);
  }, La = function(y) {
    let I = null;
    const W = Na(y);
    for (bt(Ae.beforeSanitizeShadowDOM, y, null); I = W.nextNode(); )
      if (bt(Ae.uponSanitizeShadowNode, I, null), Qi(I, y), wn(I), cn(I.content) && La(I.content), P(I) === nn.element) {
        const oe = $(I);
        cn(oe) && (ea(oe), La(oe));
      }
    bt(Ae.afterSanitizeShadowDOM, y, null);
  }, ea = function(y) {
    const I = [{
      node: y,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const W = I.pop();
      if (W.shadow) {
        La(W.shadow);
        continue;
      }
      const oe = W.node, ye = P(oe) === nn.element, Ve = L(oe);
      if (Ve)
        for (let Qe = Ve.length - 1; Qe >= 0; --Qe)
          I.push({
            node: Ve[Qe],
            shadow: null
          });
      if (ye) {
        const Qe = le ? le(oe) : null;
        if (typeof Qe == "string" && nt(Qe) === "template") {
          const It = oe.content;
          cn(It) && I.push({
            node: It,
            shadow: null
          });
        }
      }
      if (ye) {
        const Qe = $(oe);
        cn(Qe) && I.push({
          node: null,
          shadow: Qe
        }, {
          node: Qe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, W = null, oe = null, ue = null;
    if (Ea = !Z, Ea && (Z = "<!-->"), typeof Z != "string" && !Jn(Z) && (Z = mb(Z), typeof Z != "string"))
      throw ra("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Je ? (k = rt, x = Tt) : Xi(y), (Ae.uponSanitizeElement.length > 0 || Ae.uponSanitizeAttribute.length > 0) && (k = an(k)), Ae.uponSanitizeAttribute.length > 0 && (x = an(x)), t.removed = [];
    const ye = Gi && typeof Z != "string" && Jn(Z);
    if (ye) {
      Zn(Z);
      const It = ce(Z);
      if (typeof It == "string") {
        const _t = nt(It);
        if (!k[_t] || V[_t])
          throw dt(Z), ra("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ci(Z))
        throw dt(Z), ra("root node is clobbered and cannot be sanitized in-place");
      try {
        ea(Z);
      } catch (_t) {
        throw dt(Z), _t;
      }
    } else if (Jn(Z))
      I = Ln("<!---->"), W = I.ownerDocument.importNode(Z, !0), W.nodeType === nn.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? I = W : I.appendChild(W), ea(W);
    else {
      if (!qt && !xe && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return X && ut ? M(Z) : Z;
      if (I = Ln(Z), !I)
        return qt ? null : ut ? ae : "";
    }
    I && Lt && Se(I.firstChild);
    const Ve = ye ? Z : I;
    try {
      const It = Na(Ve);
      for (; oe = It.nextNode(); )
        Qi(oe, Ve), wn(oe), cn(oe.content) && La(oe.content);
    } catch (It) {
      throw ye && (dt(Z), la(t.removed, (_t) => {
        _t.element && ct(_t.element);
      })), It;
    }
    if (ye)
      return la(t.removed, (It) => {
        It.element && ct(It.element);
      }), xe && Si(Z), Z;
    if (qt) {
      if (xe && Si(I), Kn)
        for (ue = Ee.call(I.ownerDocument); I.firstChild; )
          ue.appendChild(I.firstChild);
      else
        ue = I;
      return (x.shadowroot || x.shadowrootmode) && (ue = Be.call(i, ue, !0)), ue;
    }
    let Qe = Pe ? I.outerHTML : I.innerHTML;
    return Pe && k["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Pt(Ob, I.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + Qe), xe && (Qe = Xt(Qe)), X && ut ? M(Qe) : Qe;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xi(Z), Je = !0, rt = k, Tt = x;
  }, t.clearConfig = function() {
    _n = null, Je = !1, rt = null, Tt = null, X = me, ae = "";
  }, t.isValidAttribute = function(Z, y, I) {
    _n || Xi({});
    const W = nt(Z), oe = nt(y);
    return ir(W, oe, I);
  }, t.addHook = function(Z, y) {
    typeof y == "function" && Jt(Ae, Z) && fr(Ae[Z], y);
  }, t.removeHook = function(Z, y) {
    if (Jt(Ae, Z)) {
      if (y !== void 0) {
        const I = ub(Ae[Z], y);
        return I === -1 ? void 0 : db(Ae[Z], I, 1)[0];
      }
      return vd(Ae[Z]);
    }
  }, t.removeHooks = function(Z) {
    Jt(Ae, Z) && (Ae[Z] = []);
  }, t.removeAllHooks = function() {
    Ae = kd();
  }, t;
}
var Vh = jh();
function nu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zl, Od;
function Mb() {
  if (Od) return zl;
  Od = 1;
  var e = /["'&<>]/;
  zl = t;
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
  return zl;
}
var $b = Mb();
const to = /* @__PURE__ */ nu($b);
function Fb() {
  return globalThis._nc_l10n_locale;
}
function zb() {
  return Fb().replaceAll(/_/g, "-");
}
function al() {
  return globalThis._nc_l10n_language;
}
function Ub(e) {
  const t = al();
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
function Gh(e) {
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
  }, l = (A) => A, d = (o.sanitize ? Vh.sanitize : l) || l, u = o.escape ? to : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, L, R) => A.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, ($, G) => {
    if (L === void 0 || !(G in L))
      return u($);
    const F = L[G];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? to : l)(`${F.value}`) : u($);
  });
  let O = (a?.bundle ?? Gh(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? S(
    O,
    r,
    s
  ) : O);
}
function $n(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Gh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function Bb(e, t = al()) {
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
class no {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? no.GLOBAL_SCOPE_PERSISTENT : no.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Hb {
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
    return new no(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Kh(e) {
  return new Hb(e);
}
function jb() {
  try {
    return tu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Ul, Nd;
function Wh() {
  if (Nd) return Ul;
  Nd = 1;
  var e = {};
  return Ul = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Ul;
}
var Bl, xd;
function qh() {
  if (xd) return Bl;
  xd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Bl = {
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
  }, Bl;
}
var Os = { exports: {} }, Ld;
function Vb() {
  return Ld || (Ld = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = qh(), r = Wh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], O = (L) => {
      for (const [R, $] of E)
        L = L.split(`${R}*`).join(`${R}{0,${$}}`).split(`${R}+`).join(`${R}{1,${$}}`);
      return L;
    }, A = (L, R, $) => {
      const G = O(R), F = h++;
      r(L, F, R), u[L] = F, l[F] = R, d[F] = G, s[F] = new RegExp(R, $ ? "g" : void 0), o[F] = new RegExp(G, $ ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Os, Os.exports)), Os.exports;
}
var Hl, Rd;
function Gb() {
  if (Rd) return Hl;
  Rd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Hl = (i) => i ? typeof i != "object" ? e : i : t, Hl;
}
var jl, Id;
function Kb() {
  if (Id) return jl;
  Id = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return jl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, jl;
}
var Vl, Pd;
function Yh() {
  if (Pd) return Vl;
  Pd = 1;
  const e = Wh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = qh(), { safeRe: i, t: a } = Vb(), r = Gb(), { compareIdentifiers: s } = Kb(), o = (d, u) => {
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
  return Vl = l, Vl;
}
var Gl, Dd;
function Wb() {
  if (Dd) return Gl;
  Dd = 1;
  const e = Yh();
  return Gl = (n, i) => new e(n, i).major, Gl;
}
var qb = Wb();
const Md = /* @__PURE__ */ nu(qb);
var Kl, $d;
function Yb() {
  if ($d) return Kl;
  $d = 1;
  const e = Yh();
  return Kl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Kl;
}
var Wl, Fd;
function Xb() {
  if (Fd) return Wl;
  Fd = 1;
  const e = Yb();
  return Wl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Wl;
}
var Zb = Xb();
const Jb = /* @__PURE__ */ nu(Zb);
class Qb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Jb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Md(t.getVersion()) !== Md(this.getVersion()) && console.warn(
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
class ey {
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
let vr = null;
function iu() {
  return vr !== null ? vr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? vr = new Qb(window._nc_event_bus) : vr = window._nc_event_bus = new ey(), vr);
}
function Xh(e, t) {
  iu().subscribe(e, t);
}
function ty(e, t) {
  iu().unsubscribe(e, t);
}
function pi(e, ...t) {
  iu().emit(e, ...t);
}
const Zh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ny = Object.prototype.toString, iy = (e) => ny.call(e) === "[object Object]", Da = () => {
}, ay = /* @__PURE__ */ ry();
function ry() {
  var e, t, n;
  return Zh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function ql(e) {
  return Array.isArray(e) ? e : [e];
}
function sy(e, t, n) {
  return vt(e, t, {
    ...n,
    immediate: !0
  });
}
const Jh = Zh ? window : void 0;
function Sr(e) {
  var t;
  const n = fi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function qa(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = ql(fi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return sy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Sr(r))) !== null && i !== void 0 ? i : [Jh].filter((r) => r != null),
      ql(fi(n.value ? e[1] : e[0])),
      ql(g(n.value ? e[2] : e[1])),
      fi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = iy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let zd = !1;
function Ud(e, t, n = {}) {
  const { window: i = Jh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Da,
    cancel: Da,
    trigger: Da
  } : Da;
  if (ay && !zd) {
    zd = !0;
    const L = { passive: !0 };
    Array.from(i.document.body.children).forEach((R) => R.addEventListener("click", Da, L)), i.document.documentElement.addEventListener("click", Da, L);
  }
  let l = !0;
  const d = (L) => fi(a).some((R) => {
    if (typeof R == "string") return Array.from(i.document.querySelectorAll(R)).some(($) => $ === L.target || L.composedPath().includes($));
    {
      const $ = Sr(R);
      return $ && (L.target === $ || L.composedPath().includes($));
    }
  });
  function u(L) {
    const R = fi(L);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function h(L, R) {
    const $ = fi(L), G = $.$.subTree && $.$.subTree.children;
    return G == null || !Array.isArray(G) ? !1 : G.some((F) => F.el === R.target || R.composedPath().includes(F.el));
  }
  const S = (L) => {
    const R = Sr(e);
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
    qa(i, "click", (L) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(L));
    }, {
      passive: !0,
      capture: r
    }),
    qa(i, "pointerdown", (L) => {
      const R = Sr(e);
      l = !d(L) && !!(R && !L.composedPath().includes(R));
    }, { passive: !0 }),
    s && qa(i, "blur", (L) => {
      setTimeout(() => {
        const R = Sr(e);
        let $ = i.document.activeElement;
        for (; $?.shadowRoot; ) $ = $.shadowRoot.activeElement;
        $?.tagName === "IFRAME" && !R?.contains(i.document.activeElement) && t(L);
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
function oy(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), d = q(() => o.x - l.x), u = q(() => o.y - l.y), { max: h, abs: S } = Math, E = q(() => h(S(d.value), S(u.value)) >= n), O = /* @__PURE__ */ Vf(!1), A = q(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), L = (P) => [P.touches[0].clientX, P.touches[0].clientY], R = (P, ce) => {
    o.x = P, o.y = ce;
  }, $ = (P, ce) => {
    l.x = P, l.y = ce;
  }, G = {
    passive: s,
    capture: !s
  }, F = (P) => {
    O.value && a?.(P, A.value), O.value = !1;
  }, le = [
    qa(e, "touchstart", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      R(ce, X), $(ce, X), r?.(P);
    }, G),
    qa(e, "touchmove", (P) => {
      if (P.touches.length !== 1) return;
      const [ce, X] = L(P);
      $(ce, X), G.capture && !G.passive && Math.abs(d.value) > Math.abs(u.value) && P.preventDefault(), !O.value && E.value && (O.value = !0), O.value && i?.(P);
    }, G),
    qa(e, ["touchend", "touchcancel"], F, G)
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
var ly = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Mg(), r = Dg(), s = /* @__PURE__ */ qe([]), o = q(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => s.value.length), d = /* @__PURE__ */ qe(null), u = /* @__PURE__ */ qe(!1), h = /* @__PURE__ */ qe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ qe({
      splitter: null,
      timeoutId: null
    }), E = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), O = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", $), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", $));
    }, A = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", $), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", $));
    }, L = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: N } = C.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - N : x - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, R = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(P(U)), at("resize", { event: U }, !0);
      }));
    }, $ = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, G = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, F(U, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || at("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (at("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, N) => (k.size = N === v ? k.max : k.min, N !== v && (C += k.min), k)), s.value[v].size -= C, at("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), at("resized", {
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
      ae(Math.min(Math.max(x + N * i.keyboardStep, 0), 100)), at("resize", { event: U }, !0), at("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, ne = (U, v) => {
      let C = o.value[v];
      C && at("pane-click", {
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
      let x = [v, v + 1], z = s.value[x[0]] || null, K = s.value[x[1]] || null, V = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = K !== null && K.max < 100 && U <= 100 - (K.max + te(v + 1));
      if (V || Q) {
        V ? (z.size = z.max, K.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, K.min), K.max)) : (z.size = Math.min(Math.max(100 - K.max - C.prevPanesSize - te(v + 1), z.min), z.max), K.size = K.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = me(C, U);
        if (!j) return;
        ({ sums: C, panesToResize: x } = j), z = s.value[x[0]] || null, K = s.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), K !== null && (K.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, K.min), K.max));
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
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = M(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((N, x) => {
        x > C && x < k[1] && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : te(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((N, x) => {
        x >= C + 1 && (N.size = N.min, U.nextReachedMinPanes += N.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - te(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, J = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), te = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, M = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, v, C = !1) => {
      let k = U - 1, N = document.createElement("div");
      N.classList.add("splitpanes__splitter"), C || (N.onmousedown = (x) => L(x, k), typeof window < "u" && "ontouchstart" in window && (N.ontouchstart = (x) => L(x, k)), N.onclick = (x) => G(x, k + 1), i.keyboardStep && (N.setAttribute("tabindex", "0"), N.setAttribute("role", "separator"), N.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), N.onkeydown = (x) => le(x, k))), N.ondblclick = (x) => F(x, k + 1), v.parentNode.insertBefore(N, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, pe = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? re(v, C, !0) : v && re(v, C), v++);
    }, de = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, N] of Object.entries(v)) C[k] = N;
    }, Ee = !1, ge = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Ee && (Ee = !0, vn(() => {
        pe(), Ae({ addedPane: s.value[v] }), at("pane-add", { pane: s.value[v] }), Ee = !1;
      }));
    }, Be = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, N) => k.index = N), vn(() => {
        pe(), at("pane-remove", { pane: C }), Ae({ removedPane: {
          ...C
        } });
      });
    }, Ae = (U = {}) => {
      !U.addedPane && !U.removedPane ? st() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? ot(U) : it(), u.value && at("resized");
    }, it = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let N of s.value) N.size = Math.max(Math.min(U, N.max), N.min), v -= N.size, N.size >= N.max && C.push(N.id), N.size <= N.min && k.push(N.id);
      Math.abs(v) > 0.1 && Ct(v, C, k);
    }, st = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let x of s.value) U -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && C.push(x.id);
      let N = 100;
      if (U > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - k), x.max), x.min)), N -= x.size;
        N > 0.1 && Ct(N, v, C);
      }
    }, ot = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Q) => V + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, N = k > 0 ? (100 - C) / k : 0, x = 0, z = [], K = [];
      for (let V of s.value) x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && K.push(V.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(N, V.max), V.min)), x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && K.push(V.id);
        Math.abs(x) > 0.1 && Ct(x, z, K);
      }
    }, Ct = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((N, x) => {
        if (U > 0 && !v.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), K = z - N.size;
          U -= K, N.size = z;
        } else if (!C.includes(N.id)) {
          let z = Math.max(Math.min(N.size + k, N.max), N.min), K = z - N.size;
          U -= K, N.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (U, v = void 0, C = !1) => {
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
    vt(() => i.firstSplitter, () => pe()), vt(() => i.horizontal, (U) => vn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Bi(() => {
      Y(), pe(), Ae(), at("ready"), u.value = !0;
    }), Za(() => u.value = !1);
    let ln = () => {
      let { class: U, ...v } = a;
      return Zt("div", {
        ref: d,
        class: [E.value, U],
        ...v
      }, r.default?.());
    };
    return hn("panes", s), hn("indexedPanes", o), hn("horizontal", q(() => i.horizontal)), hn("requestUpdate", de), hn("onPaneAdd", ge), hn("onPaneRemove", Be), hn("onPaneClick", ne), (U, v) => (w(), Me(Yc(ln)));
  }
}), cy = {
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
    let t = e, n = Ft("requestUpdate"), i = Ft("onPaneAdd"), a = Ft("horizontal"), r = Ft("onPaneRemove"), s = Ft("onPaneClick"), o = wa()?.uid, l = Ft("indexedPanes"), d = q(() => l.value[o]), u = /* @__PURE__ */ qe(null), h = q(() => {
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
    return vt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), vt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), vt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Bi(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Za(() => r(o)), (A, L) => (w(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: L[0] ||= (R) => g(s)(R, A._.uid),
      style: on(O.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, uy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", dy = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", fy = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", hy = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const au = 1024, Qh = au / 2, io = (e) => document.documentElement.clientWidth < e, ep = /* @__PURE__ */ qe(io(au)), tp = /* @__PURE__ */ qe(io(Qh));
window.addEventListener("resize", () => {
  ep.value = io(au), tp.value = io(Qh);
}, { passive: !0 });
function cs() {
  return /* @__PURE__ */ Hr(ep);
}
function py() {
  return /* @__PURE__ */ Hr(tp);
}
class vy {
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
    return $n("", t, n, i, a, { bundle: this.bundle });
  }
}
class gy {
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
    return this.setLanguage(al().replace("-", "_"));
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
    const t = new vy((n) => Bb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function my() {
  return new gy();
}
const np = my().detectLanguage().build(), wt = (...e) => np.gettext(...e);
function Hi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== al() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        np.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const by = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], yy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], _y = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], wy = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Sy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Cy = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Ty = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Ey = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Ay = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const ky = /* @__PURE__ */ Symbol(""), [Oy] = window.OC?.config?.version?.split(".") ?? [], ip = Number.parseInt(Oy ?? "35"), Ny = ip < 32, ji = ip < 34, xy = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Ly() {
  return Ft(xy, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Ry = { class: "button-vue__wrapper" }, Iy = { class: "button-vue__icon" }, Py = { class: "button-vue__text" }, Dy = /* @__PURE__ */ xt({
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
    const n = e, i = t, { formBoxItemClass: a } = Ly(), r = Ft(ky, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = q(() => l.value.startsWith("tertiary")), u = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), S = Ft("NcPopover:trigger:attrs", () => ({}), !1), E = q(() => S()), O = q(() => {
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
    return (L, R) => (w(), Me(Yc(s.value), Ht({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Ny),
          "button-vue--legacy34": g(ji)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: ke(() => [
        c("span", Ry, [
          c("span", Iy, [
            Re(L.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", Py, [
            Re(L.$slots, "default", {}, () => [
              Oe(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ Ze(Dy, [["__scopeId", "data-v-47ce59a3"]]), My = ["aria-hidden", "aria-label"], $y = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Fy = ["d"], zy = ["innerHTML"], Uy = /* @__PURE__ */ xt({
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
    xm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Vh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (w(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (w(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, zy)) : (w(), T("svg", $y, [
        c("path", { d: e.path }, null, 8, Fy)
      ]))
    ], 10, My));
  }
}), rl = /* @__PURE__ */ Ze(Uy, [["__scopeId", "data-v-aaedb1c3"]]);
Hy();
function By(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), pi("csrf-token-update", { token: e, _internal: !0 }));
}
function Hy() {
  Xh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || By(e);
  });
}
Kh("public").persist().build();
let Ma;
function Bd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function jy() {
  if (Ma !== void 0)
    return Ma;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Bd(e, "data-user");
  return t === null ? (Ma = null, Ma) : (Ma = {
    uid: t,
    displayName: Bd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ma);
}
var pt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(pt || {});
class Vy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + pt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === pt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case pt.Debug:
          console.debug(this.formatMessage(n, pt.Debug, i), i);
          break;
        case pt.Info:
          console.info(this.formatMessage(n, pt.Info, i), i);
          break;
        case pt.Warn:
          console.warn(this.formatMessage(n, pt.Warn, i), i);
          break;
        case pt.Error:
          console.error(this.formatMessage(n, pt.Error, i), i);
          break;
        case pt.Fatal:
        default:
          console.error(this.formatMessage(n, pt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(pt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(pt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(pt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(pt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(pt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Gy(e) {
  return new Vy(e);
}
class Ky {
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
    const t = jy();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? pt.Warn, window._oc_debug && (t.context.level = pt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Wy() {
  return new Ky(Gy);
}
const ba = Wy().detectUser().setApp("@nextcloud/vue").build();
function qy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let ap = "missing-app-name";
try {
  ap = "library";
} catch {
  ba.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Yy = ap;
let Xy = "";
try {
  Xy = "0.1.0-alpha.167";
} catch {
  ba.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function rp() {
  return Ft("appName", Yy);
}
const Zy = qy(() => {
  const e = tu("core", "apps", []), t = rp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), _c = Ub();
Hi(Ty);
const Jy = /* @__PURE__ */ xt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cs();
    vt(t, n), Bi(() => {
      n(t.value);
    }), Za(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && pi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (w(), Me(g(jn), {
      "aria-label": g(wt)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(wt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        we(g(rl), {
          directional: "",
          path: g(uy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Qy = /* @__PURE__ */ Ze(Jy, [["__scopeId", "data-v-a28923a1"]]), Hd = Kh("nextcloud").persist().build(), e_ = jb().theming?.name ?? "Nextcloud", t_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Qy,
    Pane: cy,
    Splitpanes: ly
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
      appName: rp(),
      localizedAppName: Zy(),
      isMobile: cs(),
      isRtl: _c
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
        return ba.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(e_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = oy(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? pi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && pi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Hd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ba.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Hd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ba.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, n_ = {
  key: 0,
  class: "hidden-visually"
}, i_ = { class: "app-content-wrapper__list" }, a_ = {
  key: 1,
  class: "app-content-wrapper"
};
function r_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return w(), T("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (w(), T("h1", n_, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (w(), T(he, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (w(), T("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (w(), Me(s, {
          key: 0,
          onClick: Ke(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        We(c("div", i_, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ka, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (w(), T("div", a_, [
        we(l, {
          horizontal: n.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            we(o, {
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
            we(o, {
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
const s_ = /* @__PURE__ */ Ze(t_, [["render", r_], ["__scopeId", "data-v-51427d61"]]);
var sp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ao = /* @__PURE__ */ sp.join(","), op = typeof Element > "u", _a = op ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ro = !op && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, so = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : so(t.parentNode));
  return s;
}, o_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, lp = function(t, n, i) {
  if (so(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(ao));
  return n && _a.call(t, ao) && a.unshift(t), a = a.filter(i), a;
}, oo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!so(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = oo(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = _a.call(s, ao);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !so(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = oo(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, cp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, fa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || o_(t)) && !cp(t) ? 0 : t.tabIndex;
}, l_ = function(t, n) {
  var i = fa(t);
  return i < 0 && n && !cp(t) ? 0 : i;
}, c_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, up = function(t) {
  return t.tagName === "INPUT";
}, u_ = function(t) {
  return up(t) && t.type === "hidden";
}, d_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, f_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, h_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || ro(t), i = function(o) {
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
  var r = f_(a, t.form);
  return !r || r === t;
}, p_ = function(t) {
  return up(t) && t.type === "radio";
}, v_ = function(t) {
  return p_(t) && !h_(t);
}, g_ = function(t) {
  var n, i = t && ro(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = ro(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, jd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, m_ = function(t, n) {
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
  var l = _a.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (_a.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = ro(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return jd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (g_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return jd(t);
  return !1;
}, b_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return _a.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, lo = function(t, n) {
  return !(n.disabled || u_(n) || m_(n, t) || // For a details element with a summary, the summary element gets the focus
  d_(n) || b_(n));
}, wc = function(t, n) {
  return !(v_(n) || fa(n) < 0 || !lo(t, n));
}, y_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, dp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = l_(o, s), d = s ? dp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(c_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, __ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = oo([t], n.includeContainer, {
    filter: wc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: y_
  }) : i = lp(t, n.includeContainer, wc.bind(null, n)), dp(i);
}, w_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = oo([t], n.includeContainer, {
    filter: lo.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = lp(t, n.includeContainer, lo.bind(null, n)), i;
}, $a = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return _a.call(t, ao) === !1 ? !1 : wc(n, t);
}, S_ = /* @__PURE__ */ sp.concat("iframe:not([inert]):not([inert] *)").join(","), Yl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return _a.call(t, S_) === !1 ? !1 : lo(n, t);
};
function Sc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function C_(e) {
  if (Array.isArray(e)) return Sc(e);
}
function Vd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = fp(e)) || t) {
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
function T_(e, t, n) {
  return (t = N_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function E_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function A_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gd(Object(n), !0).forEach(function(i) {
      T_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function k_(e) {
  return C_(e) || E_(e) || fp(e) || A_();
}
function O_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N_(e) {
  var t = O_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fp(e, t) {
  if (e) {
    if (typeof e == "string") return Sc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sc(e, t) : void 0;
  }
}
var ui = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ui.getActiveTrap(t);
    n !== i && ui.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ui.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ui.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ui.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, x_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, L_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Nr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, R_ = function(t) {
  return Nr(t) && !t.shiftKey;
}, I_ = function(t) {
  return Nr(t) && t.shiftKey;
}, Wd = function(t) {
  return setTimeout(t, 0);
}, gr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Ns = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, P_ = [], ru = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || P_, r = Kd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: R_,
    isKeyBackward: I_
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
  }, o, l = function(D, M, Y) {
    return D && D[M] !== void 0 ? D[M] : r[Y || M];
  }, d = function(D, M) {
    var Y = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ie = re.container, pe = re.tabbableNodes;
      return ie.contains(D) || Y?.includes(ie) || pe.find(function(de) {
        return de === D;
      });
    });
  }, u = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = M.hasFallback, re = Y === void 0 ? !1 : Y, ie = M.params, pe = ie === void 0 ? [] : ie, de = r[D];
    if (typeof de == "function" && (de = de.apply(void 0, k_(pe))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Ee = de;
    if (typeof de == "string") {
      try {
        Ee = i.querySelector(de);
      } catch (ge) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(ge.message, '"'));
      }
      if (!Ee && !re)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Ee;
  }, h = function(D) {
    var M = D.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? h(M.shadowRoot) : M : null;
  }, S = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Yl(D, r.tabbableOptions)) {
      var M = h(i);
      if (d(M) >= 0)
        D = M;
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
      var M = __(D, r.tabbableOptions), Y = w_(D, r.tabbableOptions), re = M.length > 0 ? M[0] : void 0, ie = M.length > 0 ? M[M.length - 1] : void 0, pe = Y.find(function(ge) {
        return $a(ge);
      }), de = Y.slice().reverse().find(function(ge) {
        return $a(ge);
      }), Ee = !!M.find(function(ge) {
        return fa(ge) > 0;
      });
      return {
        container: D,
        tabbableNodes: M,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ee,
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
        firstDomTabbableNode: pe,
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
        nextTabbableNode: function(Be) {
          var Ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, it = M.indexOf(Be);
          return it < 0 ? Ae ? Y.slice(Y.indexOf(Be) + 1).find(function(st) {
            return $a(st);
          }) : Y.slice(0, Y.indexOf(Be)).reverse().find(function(st) {
            return $a(st);
          }) : M[it + (Ae ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = D, x_(D) && D.select();
    }
  }, A = function(D) {
    var M = u("setReturnFocus", {
      params: [D]
    });
    return M || (M === !1 ? !1 : D);
  }, L = function(D) {
    var M = D.target, Y = D.event, re = D.isBackward, ie = re === void 0 ? !1 : re;
    M = M || Ns(Y), E();
    var pe = null;
    if (s.tabbableGroups.length > 0) {
      var de = d(M, Y), Ee = de >= 0 ? s.containerGroups[de] : void 0;
      if (de < 0)
        ie ? pe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : pe = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var ge = s.tabbableGroups.findIndex(function(Ct) {
          var at = Ct.firstTabbableNode;
          return M === at;
        });
        if (ge < 0 && (Ee.container === M || Yl(M, r.tabbableOptions) && !$a(M, r.tabbableOptions) && !Ee.nextTabbableNode(M, !1)) && (ge = de), ge >= 0) {
          var Be = ge === 0 ? s.tabbableGroups.length - 1 : ge - 1, Ae = s.tabbableGroups[Be];
          pe = fa(M) >= 0 ? Ae.lastTabbableNode : Ae.lastDomTabbableNode;
        } else Nr(Y) || (pe = Ee.nextTabbableNode(M, !1));
      } else {
        var it = s.tabbableGroups.findIndex(function(Ct) {
          var at = Ct.lastTabbableNode;
          return M === at;
        });
        if (it < 0 && (Ee.container === M || Yl(M, r.tabbableOptions) && !$a(M, r.tabbableOptions) && !Ee.nextTabbableNode(M)) && (it = de), it >= 0) {
          var st = it === s.tabbableGroups.length - 1 ? 0 : it + 1, ot = s.tabbableGroups[st];
          pe = fa(M) >= 0 ? ot.firstTabbableNode : ot.firstDomTabbableNode;
        } else Nr(Y) || (pe = Ee.nextTabbableNode(M));
      }
    } else
      pe = u("fallbackFocus");
    return pe;
  }, R = function(D) {
    var M = Ns(D);
    if (!(d(M, D) >= 0)) {
      if (gr(r.clickOutsideDeactivates, D)) {
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
      gr(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, $ = function(D) {
    var M = Ns(D), Y = d(M, D) >= 0;
    if (Y || M instanceof Document)
      Y && (s.mostRecentlyFocusedNode = M);
    else {
      D.stopImmediatePropagation();
      var re, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (fa(s.mostRecentlyFocusedNode) > 0) {
          var pe = d(s.mostRecentlyFocusedNode), de = s.containerGroups[pe].tabbableNodes;
          if (de.length > 0) {
            var Ee = de.findIndex(function(ge) {
              return ge === s.mostRecentlyFocusedNode;
            });
            Ee >= 0 && (r.isKeyForward(s.recentNavEvent) ? Ee + 1 < de.length && (re = de[Ee + 1], ie = !1) : Ee - 1 >= 0 && (re = de[Ee - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(ge) {
            return ge.tabbableNodes.some(function(Be) {
              return fa(Be) > 0;
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
  }, G = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var Y = L({
      event: D,
      isBackward: M
    });
    Y && (Nr(D) && D.preventDefault(), O(Y));
  }, F = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && G(D, r.isKeyBackward(D));
  }, le = function(D) {
    L_(D) && gr(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, ne = function(D) {
    var M = Ns(D);
    d(M, D) >= 0 || gr(r.clickOutsideDeactivates, D) || gr(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, P = function() {
    if (s.active) {
      ui.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function(M) {
        s.delayInitialFocusTimer = Wd(function() {
          O(S()), M();
        });
      }) : O(S()), i.addEventListener("focusin", $, !0), i.addEventListener("mousedown", R, {
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
    var M = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), re = Vd(D), ie;
    try {
      for (re.s(); !(ie = re.n()).done; ) {
        var pe = ie.value;
        M.add(pe);
        for (var de = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, Ee = pe; Ee; ) {
          M.add(Ee);
          var ge = Ee.parentElement, Be = [];
          ge ? Be = ge.children : !ge && de && (Be = Ee.getRootNode().children, ge = Ee.getRootNode().host, de = typeof ShadowRoot < "u" && ge.getRootNode() instanceof ShadowRoot);
          var Ae = Vd(Be), it;
          try {
            for (Ae.s(); !(it = Ae.n()).done; ) {
              var st = it.value;
              Y.add(st);
            }
          } catch (ot) {
            Ae.e(ot);
          } finally {
            Ae.f();
          }
          Ee = ge;
        }
      }
    } catch (ot) {
      re.e(ot);
    } finally {
      re.f();
    }
    M.forEach(function(ot) {
      Y.delete(ot);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", $, !0), i.removeEventListener("mousedown", R, !0), i.removeEventListener("touchstart", R, !0), i.removeEventListener("click", ne, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", le), o;
  }, ae = function(D) {
    var M = s.mostRecentlyFocusedNode;
    if (M) {
      var Y = D.some(function(ie) {
        var pe = Array.from(ie.removedNodes);
        return pe.some(function(de) {
          return de === M || typeof de.contains == "function" && de.contains(M);
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
      var M = l(D, "onActivate"), Y = l(D, "onPostActivate"), re = l(D, "checkCanFocusTrap"), ie = ui.getActiveTrap(a), pe = !1;
      if (ie && !ie.paused) {
        var de;
        (de = ie._setSubtreeIsolation) === null || de === void 0 || de.call(ie, !1), pe = !0;
      }
      try {
        re || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), M?.({
          trap: o
        });
        var Ee = function() {
          re && E();
          var Ae = function() {
            o._setSubtreeIsolation(!0), J(), Y?.({
              trap: o
            });
          }, it = P();
          it ? it.then(Ae) : Ae();
        };
        if (re)
          return re(s.containers.concat()).then(Ee, Ee), this;
        Ee();
      } catch (Be) {
        if (ie === ui.getActiveTrap(a) && pe) {
          var ge;
          (ge = ie._setSubtreeIsolation) === null || ge === void 0 || ge.call(ie, !0);
        }
        throw Be;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var M = Kd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, J(), ui.deactivateTrap(a, o);
      var Y = l(M, "onDeactivate"), re = l(M, "onPostDeactivate"), ie = l(M, "checkCanReturnFocus"), pe = l(M, "delayReturnFocus"), de = l(M, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Ee = function() {
        de && O(A(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, ge = function() {
        pe && de ? Wd(Ee) : Ee();
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
      var M = [].concat(D).filter(Boolean);
      return s.containers = M.map(function(Y) {
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
      value: function(D, M) {
        if (s.paused === D)
          return this;
        if (s.paused = D, D) {
          var Y = l(M, "onPause"), re = l(M, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), J(), re?.({
            trap: o
          });
        } else {
          var ie = l(M, "onUnpause"), pe = l(M, "onPostUnpause");
          ie?.({
            trap: o
          });
          var de = function() {
            E();
            var ge = function() {
              o._setSubtreeIsolation(!0), J(), pe?.({
                trap: o
              });
            }, Be = P();
            Be ? Be.then(ge) : ge();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(M) {
          var Y;
          D ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((Y = M.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && s.alreadySilent.add(M), M.setAttribute("inert", !0)) : s.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const hp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), D_ = /* @__PURE__ */ xt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [hp]: {
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
  return w(), T("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Te(["app-navigation-list__highlight", {
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
const pp = /* @__PURE__ */ Ze(D_, [["render", M_], ["__scopeId", "data-v-3e73e246"]]);
function Zr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function $_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Zr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Zr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const vp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), gp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Hi(wy);
const F_ = { class: "app-navigation-toggle-wrapper" }, z_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = gh(e, "open"), n = q(() => t.value ? wt("Close navigation") : wt("Open navigation"));
    return (i, a) => (w(), T("div", F_, [
      we(g(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          we(rl, {
            path: g(hy),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), U_ = /* @__PURE__ */ Ze(z_, [["__scopeId", "data-v-e8177cc7"]]), B_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], H_ = { class: "app-navigation__search" }, j_ = /* @__PURE__ */ xt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Ft(
      vp,
      () => bm(),
      !1
    ), a = Tg("appNavigationContainer"), r = cs(), s = /* @__PURE__ */ qe(!r.value), o = q(() => r.value && s.value);
    vg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), vt(r, () => {
      s.value = !r.value;
    }), vt(o, () => {
      u();
    }), Bi(() => {
      i(!0), Xh("toggle-navigation", d), pi("navigation-toggled", {
        open: s.value
      }), n = ru(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Zr(),
        escapeDeactivates: !1
      }), u();
    }), ss(() => {
      i(!1), ty("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        pi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), O = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        pi("navigation-toggled", {
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
    return (S, E) => (w(), T("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(ji)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: kt(h, ["esc"])
      }, [
        c("div", H_, [
          Re(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Re(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (w(), Me(pp, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Re(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Re(S.$slots, "footer", {}, void 0, !0)
      ], 40, B_),
      we(U_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), V_ = /* @__PURE__ */ Ze(j_, [["__scopeId", "data-v-37908cd4"]]), G_ = {
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
}, K_ = ["aria-hidden", "aria-label"], W_ = ["fill", "width", "height"], q_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Y_ = { key: 0 };
function X_(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", q_, [
        n.title ? (w(), T("title", Y_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, W_))
  ], 16, K_);
}
const Z_ = /* @__PURE__ */ Ze(G_, [["render", X_]]), J_ = {
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
}, Q_ = ["aria-hidden", "aria-label"], e1 = ["fill", "width", "height"], t1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, n1 = { key: 0 };
function i1(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", t1, [
        n.title ? (w(), T("title", n1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, e1))
  ], 16, Q_);
}
const a1 = /* @__PURE__ */ Ze(J_, [["render", i1]]), r1 = {
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
}, s1 = ["aria-hidden", "aria-label"], o1 = ["fill", "width", "height"], l1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, c1 = { key: 0 };
function u1(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", l1, [
        n.title ? (w(), T("title", c1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, o1))
  ], 16, s1);
}
const mp = /* @__PURE__ */ Ze(r1, [["render", u1]]), d1 = {
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
}, f1 = ["aria-hidden", "aria-label"], h1 = ["fill", "width", "height"], p1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, v1 = { key: 0 };
function g1(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", p1, [
        n.title ? (w(), T("title", v1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, h1))
  ], 16, f1);
}
const bp = /* @__PURE__ */ Ze(d1, [["render", g1]]);
Hi(yy);
const m1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: mp,
    IconClose: bp,
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
    return { isLegacy34: ji };
  },
  data() {
    return {
      labelConfirm: wt("Confirm changes"),
      labelCancel: wt("Cancel changes")
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
}, b1 = ["placeholder"];
function y1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return w(), T("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ke((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = kt(Ke((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ke(() => {
      }, ["stop", "prevent"]))
    }, [
      We(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, b1), [
        [Cn, r.valueModel]
      ]),
      we(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ke(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          we(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      we(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ke(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          we(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const _1 = /* @__PURE__ */ Ze(m1, [["render", y1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function sl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const su = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), yp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), w1 = {
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
}, _p = {
  mixins: [w1],
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
      from: yp
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
}, S1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: rl
  },
  mixins: [_p],
  inject: {
    isInSemanticMenu: {
      from: su,
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
      mdiCheck: dy,
      mdiChevronRight: fy
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
}, C1 = ["role"], T1 = ["aria-label", "disabled", "title", "type"], E1 = { class: "action-button__longtext-wrapper" }, A1 = {
  key: 0,
  class: "action-button__name"
}, k1 = ["textContent"], O1 = {
  key: 2,
  class: "action-button__text"
}, N1 = ["textContent"], x1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function L1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return w(), T("li", {
    class: Te(["action", { "action--disabled": n.disabled }]),
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
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", E1, [
        e.name ? (w(), T("strong", A1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (w(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, k1)) : (w(), T("span", O1, p(e.text), 1)),
        n.description ? (w(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, N1)) : H("", !0)
      ]),
      n.isMenu ? (w(), Me(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (w(), Me(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (w(), T("span", x1)) : H("", !0),
      H("", !0)
    ], 16, T1)
  ], 10, C1);
}
const R1 = /* @__PURE__ */ Ze(S1, [["render", L1], ["__scopeId", "data-v-6c2daf4e"]]);
function I1(e, t = {}) {
  const n = $_();
  vt(e, () => {
    fi(t.disabled) || (fi(e) ? n.pause() : n.unpause());
  }), ss(() => {
    n.unpause();
  });
}
const P1 = ["top", "right", "bottom", "left"], qd = ["start", "end"], Yd = /* @__PURE__ */ P1.reduce((e, t) => e.concat(t, t + "-" + qd[0], t + "-" + qd[1]), []), Jr = Math.min, Cc = Math.max, D1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wp(e, t, n) {
  return Cc(e, Jr(t, n));
}
function Sa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bi(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function Sp(e) {
  return e === "x" ? "y" : "x";
}
function ou(e) {
  return e === "y" ? "height" : "width";
}
function di(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function lu(e) {
  return Sp(di(e));
}
function Cp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = lu(e), r = ou(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = uo(s)), [s, uo(s)];
}
function M1(e) {
  const t = uo(e);
  return [co(e), t, co(t)];
}
function co(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Xd = ["left", "right"], Zd = ["right", "left"], $1 = ["top", "bottom"], F1 = ["bottom", "top"];
function z1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Zd : Xd : t ? Xd : Zd;
    case "left":
    case "right":
      return t ? $1 : F1;
    default:
      return [];
  }
}
function U1(e, t, n, i) {
  const a = kn(e);
  let r = z1(bi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(co)))), r;
}
function uo(e) {
  const t = bi(e);
  return D1[t] + e.slice(t.length);
}
function B1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Tp(e) {
  return typeof e != "number" ? B1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xr(e) {
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
function Jd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = di(t), s = lu(t), o = ou(s), l = bi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
async function H1(e, t) {
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
  } = Sa(t, e), O = Tp(E), L = o[S ? h === "floating" ? "reference" : "floating" : h], R = xr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(L))) == null || n ? L : L.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), $ = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || {
    x: 1,
    y: 1
  }, le = xr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: $,
    offsetParent: G,
    strategy: l
  }) : $);
  return {
    top: (R.top - le.top + O.top) / F.y,
    bottom: (le.bottom - R.bottom + O.bottom) / F.y,
    left: (R.left - le.left + O.left) / F.x,
    right: (le.right - R.right + O.right) / F.x
  };
}
const j1 = 50, V1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: H1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Jd(d, i, l), S = i, E = 0;
  const O = {};
  for (let A = 0; A < r.length; A++) {
    const L = r[A];
    if (!L)
      continue;
    const {
      name: R,
      fn: $
    } = L, {
      x: G,
      y: F,
      data: le,
      reset: ne
    } = await $({
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
    u = G ?? u, h = F ?? h, O[R] = {
      ...O[R],
      ...le
    }, ne && E < j1 && (E++, typeof ne == "object" && (ne.placement && (S = ne.placement), ne.rects && (d = ne.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ne.rects), {
      x: u,
      y: h
    } = Jd(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: O
  };
}, G1 = (e) => ({
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
    } = Sa(e, t) || {};
    if (d == null)
      return {};
    const h = Tp(u), S = {
      x: n,
      y: i
    }, E = lu(a), O = ou(E), A = await s.getDimensions(d), L = E === "y", R = L ? "top" : "left", $ = L ? "bottom" : "right", G = L ? "clientHeight" : "clientWidth", F = r.reference[O] + r.reference[E] - S[E] - r.floating[O], le = S[E] - r.reference[E], ne = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let P = ne ? ne[G] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(ne))) && (P = o.floating[G] || r.floating[O]);
    const ce = F / 2 - le / 2, X = P / 2 - A[O] / 2 - 1, ae = Jr(h[R], X), me = Jr(h[$], X), J = P - A[O] - me, te = P / 2 - A[O] / 2 + ce, D = wp(ae, te, J), M = !l.arrow && kn(a) != null && te !== D && r.reference[O] / 2 - (te < ae ? ae : me) - A[O] / 2 < 0, Y = M ? te < ae ? te - ae : te - J : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: D,
        centerOffset: te - D - Y,
        ...M && {
          alignmentOffset: Y
        }
      },
      reset: M
    };
  }
});
function K1(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => bi(a) === a)).filter((a) => e ? kn(a) === e || (t ? co(a) !== a : !1) : !0);
}
const W1 = function(e) {
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
        allowedPlacements: S = Yd,
        autoAlignment: E = !0,
        ...O
      } = Sa(e, t), A = h !== void 0 || S === Yd ? K1(h || null, E, S) : S, L = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, R = A[L];
      if (R == null)
        return {};
      if (o !== R)
        return {
          reset: {
            placement: A[0]
          }
        };
      const $ = await l.detectOverflow(t, O), G = Cp(R, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [$[bi(R)], $[G[0]], $[G[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
}, q1 = function(e) {
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
      } = Sa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const R = bi(a), $ = di(o), G = bi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), le = S || (G || !A ? [uo(o)] : M1(o)), ne = O !== "none";
      !S && ne && le.push(...U1(o, A, O, F));
      const P = [o, ...le], ce = await l.detectOverflow(t, L), X = [];
      let ae = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(ce[R]), h) {
        const D = Cp(a, s, F);
        X.push(ce[D[0]], ce[D[1]]);
      }
      if (ae = [...ae, {
        placement: a,
        overflows: X
      }], !X.every((D) => D <= 0)) {
        var me, J;
        const D = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, M = P[D];
        if (M && (!(h === "alignment" ? $ !== di(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ae.every((ie) => di(ie.placement) === $ ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: ae
            },
            reset: {
              placement: M
            }
          };
        let Y = (J = ae.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var te;
              const re = (te = ae.filter((ie) => {
                if (ne) {
                  const pe = di(ie.placement);
                  return pe === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((pe) => pe > 0).reduce((pe, de) => pe + de, 0)]).sort((ie, pe) => ie[1] - pe[1])[0]) == null ? void 0 : te[0];
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
}, Y1 = /* @__PURE__ */ new Set(["left", "top"]);
async function X1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = bi(n), o = kn(n), l = di(n) === "y", d = Y1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = Sa(t, e);
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
const Z1 = function(e) {
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
      } = t, l = await X1(t, e);
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
}, J1 = function(e) {
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
          fn: ($) => {
            let {
              x: G,
              y: F
            } = $;
            return {
              x: G,
              y: F
            };
          }
        },
        ...d
      } = Sa(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = di(a), E = Sp(S);
      let O = u[E], A = u[S];
      const L = ($, G) => wp(G + h[$ === "y" ? "top" : "left"], G, G - h[$ === "y" ? "bottom" : "right"]);
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
}, Q1 = function(e) {
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
      } = Sa(e, t), l = await a.detectOverflow(t, o), d = bi(n), u = kn(n), h = di(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const L = E - l.top - l.bottom, R = S - l.left - l.right, $ = Jr(E - l[O], L), G = Jr(S - l[A], R), F = t.middlewareData.shift, le = !F;
      let ne = $, P = G;
      F != null && F.enabled.x && (P = R), F != null && F.enabled.y && (ne = L), le && !u && (h ? P = S - 2 * Cc(l.left, l.right) : ne = E - 2 * Cc(l.top, l.bottom)), await s({
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
function Vn(e) {
  return gn(e).getComputedStyle(e);
}
const Qd = Math.min, Lr = Math.max, fo = Math.round;
function Ep(e) {
  const t = Vn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = fo(n) !== a || fo(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Ui(e) {
  return kp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let xs;
function Ap() {
  if (xs) return xs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (xs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), xs) : navigator.userAgent;
}
function Gn(e) {
  return e instanceof gn(e).HTMLElement;
}
function Di(e) {
  return e instanceof gn(e).Element;
}
function kp(e) {
  return e instanceof gn(e).Node;
}
function ef(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof gn(e).ShadowRoot || e instanceof ShadowRoot;
}
function ol(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function e0(e) {
  return ["table", "td", "th"].includes(Ui(e));
}
function Tc(e) {
  const t = /firefox/i.test(Ap()), n = Vn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Op() {
  return !/^((?!chrome|android).)*safari/i.test(Ap());
}
function cu(e) {
  return ["html", "body", "#document"].includes(Ui(e));
}
function Np(e) {
  return Di(e) ? e : e.contextElement;
}
const xp = { x: 1, y: 1 };
function Ya(e) {
  const t = Np(e);
  if (!Gn(t)) return xp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Ep(t);
  let s = (r ? fo(n.width) : n.width) / i, o = (r ? fo(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function Qr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Np(e);
  let l = xp;
  t && (i ? Di(i) && (l = Ya(i)) : l = Ya(e));
  const d = o ? gn(o) : window, u = !Op() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = gn(o), L = i && Di(i) ? gn(i) : i;
    let R = A.frameElement;
    for (; R && i && L !== A; ) {
      const $ = Ya(R), G = R.getBoundingClientRect(), F = getComputedStyle(R);
      G.x += (R.clientLeft + parseFloat(F.paddingLeft)) * $.x, G.y += (R.clientTop + parseFloat(F.paddingTop)) * $.y, h *= $.x, S *= $.y, E *= $.x, O *= $.y, h += G.x, S += G.y, R = gn(R).frameElement;
    }
  }
  return { width: E, height: O, top: S, right: h + E, bottom: S + O, left: h, x: h, y: S };
}
function Mi(e) {
  return ((kp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ll(e) {
  return Di(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Lp(e) {
  return Qr(Mi(e)).left + ll(e).scrollLeft;
}
function es(e) {
  if (Ui(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ef(e) && e.host || Mi(e);
  return ef(t) ? t.host : t;
}
function Rp(e) {
  const t = es(e);
  return cu(t) ? t.ownerDocument.body : Gn(t) && ol(t) ? t : Rp(t);
}
function ho(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Rp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = gn(i);
  return a ? t.concat(r, r.visualViewport || [], ol(i) ? i : []) : t.concat(i, ho(i));
}
function tf(e, t, n) {
  return t === "viewport" ? xr((function(i, a) {
    const r = gn(i), s = Mi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = Op();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Di(t) ? xr((function(i, a) {
    const r = Qr(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Gn(i) ? Ya(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : xr((function(i) {
    const a = Mi(i), r = ll(i), s = i.ownerDocument.body, o = Lr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Lr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Lp(i);
    const u = -r.scrollTop;
    return Vn(s).direction === "rtl" && (d += Lr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Mi(e)));
}
function nf(e) {
  return Gn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null;
}
function af(e) {
  const t = gn(e);
  let n = nf(e);
  for (; n && e0(n) && Vn(n).position === "static"; ) n = nf(n);
  return n && (Ui(n) === "html" || Ui(n) === "body" && Vn(n).position === "static" && !Tc(n)) ? t : n || (function(i) {
    let a = es(i);
    for (; Gn(a) && !cu(a); ) {
      if (Tc(a)) return a;
      a = es(a);
    }
    return null;
  })(e) || t;
}
function t0(e, t, n) {
  const i = Gn(t), a = Mi(t), r = Qr(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Ui(t) !== "body" || ol(a)) && (s = ll(t)), Gn(t)) {
    const l = Qr(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Lp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const n0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = ho(d).filter(((L) => Di(L) && Ui(L) !== "body")), E = null;
    const O = Vn(d).position === "fixed";
    let A = O ? es(d) : d;
    for (; Di(A) && !cu(A); ) {
      const L = Vn(A), R = Tc(A);
      (O ? R || E : R || L.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = L : S = S.filter((($) => $ !== A)), A = es(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = tf(t, u, a);
    return d.top = Lr(h.top, d.top), d.right = Qd(h.right, d.right), d.bottom = Qd(h.bottom, d.bottom), d.left = Lr(h.left, d.left), d;
  }), tf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Gn(n), r = Mi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ui(n) !== "body" || ol(r)) && (s = ll(n)), Gn(n))) {
    const d = Qr(n);
    o = Ya(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Di, getDimensions: function(e) {
  return Gn(e) ? Ep(e) : e.getBoundingClientRect();
}, getOffsetParent: af, getDocumentElement: Mi, getScale: Ya, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || af, r = this.getDimensions;
  return { reference: t0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Vn(e).direction === "rtl" }, i0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: n0, ...n }, r = { ...a.platform, _c: i };
  return V1(e, t, { ...a, platform: r });
}, $i = {
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
function Ec(e, t) {
  let n = $i.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = $i.themes[n.$extend] || {} : (n = null, i = $i[t]) : n = null;
  while (n);
  return i;
}
function a0(e) {
  const t = [e];
  let n = $i.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = $i.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function rf(e) {
  const t = [e];
  let n = $i.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = $i.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let ts = !1;
if (typeof window < "u") {
  ts = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ts = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Ip = !1;
typeof window < "u" && typeof navigator < "u" && (Ip = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const r0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), sf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, of = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function lf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Xl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const En = [];
let sa = null;
const cf = {};
function uf(e) {
  let t = cf[e];
  return t || (t = cf[e] = []), t;
}
let Ac = function() {
};
typeof window < "u" && (Ac = window.Element);
function ze(e) {
  return function(t) {
    return Ec(t.theme, e);
  };
}
const Zl = "__floating-vue__popper", Pp = () => /* @__PURE__ */ xt({
  name: "VPopper",
  provide() {
    return {
      [Zl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Zl]: { default: null }
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
      validator: (e) => r0.includes(e)
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
      type: [String, Object, Ac, Boolean],
      default: ze("container")
    },
    boundary: {
      type: [String, Ac],
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
      return (e = this[Zl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Z1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(W1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(J1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(q1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(G1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Q1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await i0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), sa && this.instantMove && sa.instantMove && sa !== this.parentPopper) {
        sa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (sa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Xl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ho(this.$_referenceNode),
        ...ho(this.$_popperNode)
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
      for (const t of rf(this.theme))
        uf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Xl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, lf(En, this), En.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of rf(this.theme)) {
        const i = uf(n);
        lf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      sa === this && (sa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Xl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, sf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], sf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, of, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], of, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, ts ? {
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
      if (Rr >= e.left && Rr <= e.right && Ir >= e.top && Ir <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Rr - xi, i = Ir - Li, a = t.left + t.width / 2 - xi + (t.top + t.height / 2) - Li + t.width + t.height, r = xi + n * a, s = Li + i * a;
        return Ls(xi, Li, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ls(xi, Li, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ls(xi, Li, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ls(xi, Li, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Ip) {
    const e = ts ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => df(t), e), document.addEventListener("touchend", (t) => ff(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => df(e), !0), window.addEventListener("click", (e) => ff(e, !1), !0);
  window.addEventListener("resize", l0);
}
function df(e, t) {
  for (let n = 0; n < En.length; n++) {
    const i = En[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function ff(e, t) {
  s0(e, t);
}
function s0(e, t) {
  const n = {};
  for (let i = En.length - 1; i >= 0; i--) {
    const a = En[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && hf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && hf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function hf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || o0(e, n) && !t;
}
function o0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function l0() {
  for (let e = 0; e < En.length; e++)
    En[e].$_computePosition();
}
let xi = 0, Li = 0, Rr = 0, Ir = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  xi = Rr, Li = Ir, Rr = e.clientX, Ir = e.clientY;
}, ts ? {
  passive: !0
} : void 0);
function Ls(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const c0 = {
  extends: Pp()
}, uu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function u0(e, t, n, i, a, r) {
  return w(), T("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", Us(Wr(e.slotData)))
  ], 2);
}
const d0 = /* @__PURE__ */ uu(c0, [["render", u0]]);
function f0() {
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
let Fs;
function kc() {
  kc.init || (kc.init = !0, Fs = f0() !== -1);
}
var cl = {
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
    kc(), vn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Fs && this.$el.appendChild(e), e.data = "about:blank", Fs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Fs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const h0 = /* @__PURE__ */ fg();
ug("data-v-b329ee4c");
const p0 = {
  class: "resize-observer",
  tabindex: "-1"
};
dg();
const v0 = /* @__PURE__ */ h0((e, t, n, i, a, r) => (w(), Me("div", p0)));
cl.render = v0;
cl.__scopeId = "data-v-b329ee4c";
cl.__file = "src/components/ResizeObserver.vue";
const Dp = (e = "theme") => ({
  computed: {
    themeClass() {
      return a0(this[e]);
    }
  }
}), g0 = /* @__PURE__ */ xt({
  name: "VPopperContent",
  components: {
    ResizeObserver: cl
  },
  mixins: [
    Dp()
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
}), m0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], b0 = {
  ref: "inner",
  class: "v-popper__inner"
}, y0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), _0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), w0 = [
  y0,
  _0
];
function S0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return w(), T("div", {
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
    style: on(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = kt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      c("div", b0, [
        e.mounted ? (w(), T(he, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (w(), Me(s, {
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
      }, w0, 4)
    ], 4)
  ], 46, m0);
}
const Mp = /* @__PURE__ */ uu(g0, [["render", S0]]), $p = {
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
let Oc = function() {
};
typeof window < "u" && (Oc = window.Element);
const C0 = /* @__PURE__ */ xt({
  name: "VPopperWrapper",
  components: {
    Popper: d0,
    PopperContent: Mp
  },
  mixins: [
    $p,
    Dp("finalTheme")
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
      type: [String, Object, Oc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Oc],
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
function T0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return w(), Me(o, Ht({ ref: "popper" }, e.$props, {
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
      result: $
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: E,
        hide: O
      }),
      we(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: R,
        result: $,
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
const du = /* @__PURE__ */ uu(C0, [["render", T0]]), E0 = {
  ...du,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...du
});
({
  ...du
});
Pp();
const pf = $i, A0 = E0, k0 = /* @__PURE__ */ xt({
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
}), O0 = "_ncPopover_qgtYg", N0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: O0
}, Fp = "nc-popover-9";
pf.themes[Fp] = structuredClone(pf.themes.dropdown);
const x0 = {
  name: "NcPopover",
  components: {
    Dropdown: A0,
    NcPopoverTriggerProvider: k0
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
      theme: Fp
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
      return this.placement === "start" ? _c ? "right" : "left" : this.placement === "end" ? _c ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = ru(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Zr(),
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
        ba.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function L0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return w(), Me(o, {
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
      Re(e.$slots, "default", Us(Wr(l)))
    ]),
    default: ke(() => [
      we(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Re(e.$slots, "trigger", Us(Wr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const R0 = {
  $style: N0
}, vf = /* @__PURE__ */ Ze(x0, [["render", L0], ["__cssModules", R0]]), I0 = {
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
}, P0 = ["aria-hidden", "aria-label"], D0 = ["fill", "width", "height"], M0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, $0 = { key: 0 };
function F0(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", M0, [
        n.title ? (w(), T("title", $0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, D0))
  ], 16, P0);
}
const z0 = /* @__PURE__ */ Ze(I0, [["render", F0]]);
Hi(by);
function fu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ot)
        return !1;
      if (n.type === he && !fu(n.children))
        return !1;
      if (n.type === os && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const U0 = ".focusable", B0 = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: vf
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
      [su]: q(() => this.actionsMenuSemanticType === "menu"),
      [yp]: this.closeMenu
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
      default: wt("Actions")
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
      randomId: sl()
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
    I1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(U0);
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
        A.type === he && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const O = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Zt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Zt("span", { class: ["icon", O] })), L = E?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? L : "";
      let $ = E?.props?.title;
      this.forceName || $ || ($ = L);
      const G = { ...E?.props ?? {} }, F = ["submit", "reset"].includes(G.type) ? G.modelValue : "button";
      return delete G.modelValue, delete G.type, Zt(
        jn,
        Ht(
          G,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || L,
            title: $,
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
      const O = fu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Zt("span", { class: ["icon", this.defaultIcon] }) : Zt(z0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Zt(
        vf,
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
          trigger: () => Zt(jn, {
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
          default: () => Zt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Zt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? Zt(
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
        a.length > 0 ? Zt(
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
    ) : Zt(
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
}, po = /* @__PURE__ */ Ze(B0, [["__scopeId", "data-v-7206c1f1"]]), H0 = ["aria-label"], j0 = ["width", "height"], V0 = ["fill"], G0 = ["fill"], K0 = { key: 0 }, W0 = /* @__PURE__ */ xt({
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
    return (i, a) => (w(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (w(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, V0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (w(), T("title", K0, p(e.name), 1)) : H("", !0)
        ], 8, G0)
      ], 8, j0))
    ], 8, H0));
  }
}), zp = /* @__PURE__ */ Ze(W0, [["__scopeId", "data-v-cf399190"]]), Nc = /* @__PURE__ */ xt({
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
}), q0 = {
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
}, Y0 = ["aria-hidden", "aria-label"], X0 = ["fill", "width", "height"], Z0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, J0 = { key: 0 };
function Q0(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Z0, [
        n.title ? (w(), T("title", J0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, X0))
  ], 16, Y0);
}
const ew = /* @__PURE__ */ Ze(q0, [["render", Q0]]), tw = {
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
}, nw = ["aria-hidden", "aria-label"], iw = ["fill", "width", "height"], aw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, rw = { key: 0 };
function sw(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", aw, [
        n.title ? (w(), T("title", rw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, iw))
  ], 16, nw);
}
const ow = /* @__PURE__ */ Ze(tw, [["render", sw]]);
Hi(Sy);
const lw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: Z_,
    ChevronUp: a1
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
    return { isLegacy34: ji };
  },
  computed: {
    labelButton() {
      return this.open ? wt("Collapse menu") : wt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function cw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return w(), Me(l, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      n.open ? (w(), Me(s, {
        key: 0,
        size: 20
      })) : (w(), Me(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const uw = /* @__PURE__ */ Ze(lw, [["render", cw], ["__scopeId", "data-v-cfbd3794"]]);
Hi(Cy, Ay);
const dw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: po,
    NcActionButton: R1,
    NcAppNavigationIconCollapsible: uw,
    NcInputConfirmCancel: _1,
    NcLoadingIcon: zp,
    NcVNodes: Nc,
    Pencil: ew,
    Undo: ow
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: hp, default: null }
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
      default: () => sl(),
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
      isMobile: cs(),
      isLegacy34: ji
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
      return this.editLabel ? this.editLabel : wt("Edit item");
    },
    undoButtonAriaLabel() {
      return wt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && pi("toggle-navigation", { open: !1 }));
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
}, fw = ["id"], hw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], pw = {
  key: 0,
  class: "editingContainer"
}, vw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, gw = { class: "app-navigation-entry__deleted-description" }, mw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, bw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function yw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return w(), T("li", {
    id: n.id,
    class: Te([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (w(), Me(Yc(r.isRouterLink ? "router-link" : "NcVNodes"), Us(Wr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: E, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...L) => r.requestHighlight && r.requestHighlight(...L)),
          onFocusin: t[5] || (t[5] = (...L) => r.requestHighlight && r.requestHighlight(...L))
        }, [
          n.undo ? H("", !0) : (w(), T("a", {
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
            onKeydown: t[3] || (t[3] = kt(Ke((...L) => r.handleTab && r.handleTab(...L), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Te(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (w(), Me(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (w(), T("div", pw, [
              we(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (L) => a.editingValue = L),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, hw)),
          n.undo ? (w(), T("div", vw, [
            c("div", gw, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (w(), T("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (w(), T("div", mw, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (w(), Me(h, {
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
                n.editable && !a.editingActive ? (w(), Me(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    we(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Oe(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (w(), Me(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    we(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (w(), Me(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ke(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (w(), T("ul", bw, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, fw);
}
const gf = /* @__PURE__ */ Ze(dw, [["render", yw], ["__scopeId", "data-v-01bef41b"]]), Jl = /* @__PURE__ */ new WeakMap(), _w = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Ud(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Ud(e, a, Object.assign({ capture: n }, r));
    }
    Jl.set(e, i);
  },
  unmounted(e) {
    const t = Jl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Jl.delete(e);
  }
}, ww = {
  mounted(e) {
    e.focus();
  }
}, Sw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Cw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", xc = "numeric", Lc = "ascii", Rc = "alpha", Pr = "asciinumeric", Cr = "alphanumeric", Ic = "domain", Up = "emoji", Tw = "scheme", Ew = "slashscheme", Ql = "whitespace";
function Aw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function pa(e, t, n) {
  t[xc] && (t[Pr] = !0, t[Cr] = !0), t[Lc] && (t[Pr] = !0, t[Rc] = !0), t[Pr] && (t[Cr] = !0), t[Rc] && (t[Cr] = !0), t[Cr] && (t[Ic] = !0), t[Up] && (t[Ic] = !0);
  for (const i in t) {
    const a = Aw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function kw(e, t) {
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
    return t && t.j ? a = t : (a = new rn(t), n && i && pa(t, n, i)), this.jr.push([e, a]), a;
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
          const l = Object.assign(kw(s.t, i), n);
          pa(r, l, i);
        } else n && pa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), lt = (e, t, n, i, a) => e.tr(t, n, i, a), mf = (e, t, n, i, a) => e.ts(t, n, i, a), ee = (e, t, n, i, a) => e.tt(t, n, i, a), ri = "WORD", Pc = "UWORD", Bp = "ASCIINUMERICAL", Hp = "ALPHANUMERICAL", ns = "LOCALHOST", Dc = "TLD", Mc = "UTLD", zs = "SCHEME", Ba = "SLASH_SCHEME", hu = "NUM", $c = "WS", pu = "NL", Dr = "OPENBRACE", Mr = "CLOSEBRACE", vo = "OPENBRACKET", go = "CLOSEBRACKET", mo = "OPENPAREN", bo = "CLOSEPAREN", yo = "OPENANGLEBRACKET", _o = "CLOSEANGLEBRACKET", wo = "FULLWIDTHLEFTPAREN", So = "FULLWIDTHRIGHTPAREN", Co = "LEFTCORNERBRACKET", To = "RIGHTCORNERBRACKET", Eo = "LEFTWHITECORNERBRACKET", Ao = "RIGHTWHITECORNERBRACKET", ko = "FULLWIDTHLESSTHAN", Oo = "FULLWIDTHGREATERTHAN", No = "AMPERSAND", xo = "APOSTROPHE", Lo = "ASTERISK", Ii = "AT", Ro = "BACKSLASH", Io = "BACKTICK", Po = "CARET", va = "COLON", vu = "COMMA", Do = "DOLLAR", zn = "DOT", Mo = "EQUALS", gu = "EXCLAMATION", fn = "HYPHEN", $r = "PERCENT", $o = "PIPE", Fo = "PLUS", zo = "POUND", Fr = "QUERY", mu = "QUOTE", jp = "FULLWIDTHMIDDLEDOT", bu = "SEMI", Un = "SLASH", zr = "TILDE", Uo = "UNDERSCORE", Vp = "EMOJI", Bo = "SYM";
var Gp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Hp,
  AMPERSAND: No,
  APOSTROPHE: xo,
  ASCIINUMERICAL: Bp,
  ASTERISK: Lo,
  AT: Ii,
  BACKSLASH: Ro,
  BACKTICK: Io,
  CARET: Po,
  CLOSEANGLEBRACKET: _o,
  CLOSEBRACE: Mr,
  CLOSEBRACKET: go,
  CLOSEPAREN: bo,
  COLON: va,
  COMMA: vu,
  DOLLAR: Do,
  DOT: zn,
  EMOJI: Vp,
  EQUALS: Mo,
  EXCLAMATION: gu,
  FULLWIDTHGREATERTHAN: Oo,
  FULLWIDTHLEFTPAREN: wo,
  FULLWIDTHLESSTHAN: ko,
  FULLWIDTHMIDDLEDOT: jp,
  FULLWIDTHRIGHTPAREN: So,
  HYPHEN: fn,
  LEFTCORNERBRACKET: Co,
  LEFTWHITECORNERBRACKET: Eo,
  LOCALHOST: ns,
  NL: pu,
  NUM: hu,
  OPENANGLEBRACKET: yo,
  OPENBRACE: Dr,
  OPENBRACKET: vo,
  OPENPAREN: mo,
  PERCENT: $r,
  PIPE: $o,
  PLUS: Fo,
  POUND: zo,
  QUERY: Fr,
  QUOTE: mu,
  RIGHTCORNERBRACKET: To,
  RIGHTWHITECORNERBRACKET: Ao,
  SCHEME: zs,
  SEMI: bu,
  SLASH: Un,
  SLASH_SCHEME: Ba,
  SYM: Bo,
  TILDE: zr,
  TLD: Dc,
  UNDERSCORE: Uo,
  UTLD: Mc,
  UWORD: Pc,
  WORD: ri,
  WS: $c
});
const ii = /[a-z]/, mr = new RegExp("\\p{L}", "u"), ec = new RegExp("\\p{Emoji}", "u"), ai = /\d/, tc = /\s/, bf = "\r", nc = `
`, Ow = "️", Nw = "‍", ic = "￼";
let Rs = null, Is = null;
function xw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  Rs == null && (Rs = yf(Sw)), Is == null && (Is = yf(Cw)), ee(n, "'", xo), ee(n, "{", Dr), ee(n, "}", Mr), ee(n, "[", vo), ee(n, "]", go), ee(n, "(", mo), ee(n, ")", bo), ee(n, "<", yo), ee(n, ">", _o), ee(n, "（", wo), ee(n, "）", So), ee(n, "「", Co), ee(n, "」", To), ee(n, "『", Eo), ee(n, "』", Ao), ee(n, "＜", ko), ee(n, "＞", Oo), ee(n, "&", No), ee(n, "*", Lo), ee(n, "@", Ii), ee(n, "`", Io), ee(n, "^", Po), ee(n, ":", va), ee(n, ",", vu), ee(n, "$", Do), ee(n, ".", zn), ee(n, "=", Mo), ee(n, "!", gu), ee(n, "-", fn), ee(n, "%", $r), ee(n, "|", $o), ee(n, "+", Fo), ee(n, "#", zo), ee(n, "?", Fr), ee(n, '"', mu), ee(n, "/", Un), ee(n, ";", bu), ee(n, "~", zr), ee(n, "_", Uo), ee(n, "\\", Ro), ee(n, "・", jp);
  const i = lt(n, ai, hu, {
    [xc]: !0
  });
  lt(i, ai, i);
  const a = lt(i, ii, Bp, {
    [Pr]: !0
  }), r = lt(i, mr, Hp, {
    [Cr]: !0
  }), s = lt(n, ii, ri, {
    [Lc]: !0
  });
  lt(s, ai, a), lt(s, ii, s), lt(a, ai, a), lt(a, ii, a);
  const o = lt(n, mr, Pc, {
    [Rc]: !0
  });
  lt(o, ii), lt(o, ai, r), lt(o, mr, o), lt(r, ai, r), lt(r, ii), lt(r, mr, r);
  const l = ee(n, nc, pu, {
    [Ql]: !0
  }), d = ee(n, bf, $c, {
    [Ql]: !0
  }), u = lt(n, tc, $c, {
    [Ql]: !0
  });
  ee(n, ic, u), ee(d, nc, l), ee(d, ic, u), lt(d, tc, u), ee(u, bf), ee(u, nc), lt(u, tc, u), ee(u, ic, u);
  const h = lt(n, ec, Vp, {
    [Up]: !0
  });
  ee(h, "#"), lt(h, ec, h), ee(h, Ow, h);
  const S = ee(h, Nw);
  ee(S, "#"), lt(S, ec, h);
  const E = [[ii, s], [ai, a]], O = [[ii, null], [mr, o], [ai, r]];
  for (let A = 0; A < Rs.length; A++)
    Oi(n, Rs[A], Dc, ri, E);
  for (let A = 0; A < Is.length; A++)
    Oi(n, Is[A], Mc, Pc, O);
  pa(Dc, {
    tld: !0,
    ascii: !0
  }, t), pa(Mc, {
    utld: !0,
    alpha: !0
  }, t), Oi(n, "file", zs, ri, E), Oi(n, "mailto", zs, ri, E), Oi(n, "http", Ba, ri, E), Oi(n, "https", Ba, ri, E), Oi(n, "ftp", Ba, ri, E), Oi(n, "ftps", Ba, ri, E), pa(zs, {
    scheme: !0,
    ascii: !0
  }, t), pa(Ba, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, L) => A[0] > L[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const L = e[A][0], $ = e[A][1] ? {
      [Tw]: !0
    } : {
      [Ew]: !0
    };
    L.indexOf("-") >= 0 ? $[Ic] = !0 : ii.test(L) ? ai.test(L) ? $[Pr] = !0 : $[Lc] = !0 : $[xc] = !0, mf(n, L, L, $);
  }
  return mf(n, "localhost", ns, {
    ascii: !0
  }), n.jd = new rn(Bo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Gp)
  };
}
function Kp(e, t) {
  const n = Lw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function Lw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Oi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function yf(e) {
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
const is = {
  defaultProtocol: "http",
  events: null,
  format: _f,
  formatHref: _f,
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
function yu(e, t = null) {
  let n = Object.assign({}, is);
  e && (n = Object.assign(n, e instanceof yu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
yu.prototype = {
  o: is,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : is[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function _f(e) {
  return e;
}
function Wp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Wp.prototype = {
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
  toObject(e = is.defaultProtocol) {
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
function ul(e, t) {
  class n extends Wp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Rw = ul("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), wf = ul("text"), Iw = ul("nl"), Ps = ul("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = is.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ns && e[1].t === va;
  }
}), dn = (e) => new rn(e);
function Pw({
  groups: e
}) {
  const t = e.domain.concat([No, Lo, Ii, Ro, Io, Po, Do, Mo, fn, hu, $r, $o, Fo, zo, Un, Bo, zr, Uo]), n = [xo, va, vu, zn, gu, $r, Fr, mu, bu, yo, _o, Dr, Mr, go, vo, mo, bo, wo, So, Co, To, Eo, Ao, ko, Oo], i = [No, xo, Lo, Ro, Io, Po, Do, Mo, fn, Dr, Mr, $r, $o, Fo, zo, Fr, Un, Bo, zr, Uo], a = dn(), r = ee(a, zr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = dn(), o = dn(), l = dn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = ee(s, Ii);
  ee(r, Ii, d), ee(o, Ii, d), ee(l, Ii, d);
  const u = ee(r, zn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = dn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const S = ee(h, zn);
  Ie(S, e.domain, h);
  const E = dn(Rw);
  Ie(S, e.tld, E), Ie(S, e.utld, E), ee(d, ns, E);
  const O = ee(h, fn);
  ee(O, fn, O), Ie(O, e.domain, h), Ie(E, e.domain, h), ee(E, zn, S), ee(E, fn, O);
  const A = ee(s, fn), L = ee(s, zn);
  ee(A, fn, A), Ie(A, e.domain, s), Ie(L, i, r), Ie(L, e.domain, s);
  const R = dn(Ps);
  Ie(L, e.tld, R), Ie(L, e.utld, R), Ie(R, e.domain, s), Ie(R, i, r), ee(R, zn, L), ee(R, fn, A), ee(R, Ii, d);
  const $ = ee(R, va), G = dn(Ps);
  Ie($, e.numeric, G);
  const F = dn(Ps), le = dn();
  Ie(F, t, F), Ie(F, n, le), Ie(le, t, F), Ie(le, n, le), ee(R, Un, F), ee(G, Un, F);
  const ne = ee(o, va), P = ee(l, va), ce = ee(P, Un), X = ee(ce, Un);
  Ie(o, e.domain, s), ee(o, zn, L), ee(o, fn, A), Ie(l, e.domain, s), ee(l, zn, L), ee(l, fn, A), Ie(ne, e.domain, F), ee(ne, Un, F), ee(ne, Fr, F), Ie(X, e.domain, F), Ie(X, t, F), ee(X, Un, F);
  const ae = [
    [Dr, Mr],
    // {}
    [vo, go],
    // []
    [mo, bo],
    // ()
    [yo, _o],
    // <>
    [wo, So],
    // （）
    [Co, To],
    // 「」
    [Eo, Ao],
    // 『』
    [ko, Oo]
    // ＜＞
  ];
  for (let me = 0; me < ae.length; me++) {
    const [J, te] = ae[me], D = ee(F, J);
    ee(le, J, D);
    const M = dn(Ps);
    Ie(D, t, M);
    const Y = dn();
    Ie(D, n, Y), ee(D, te, F), Ie(M, t, M), Ie(M, n, Y), Ie(Y, t, M), Ie(Y, n, Y), ee(M, te, F), ee(Y, te, F);
  }
  return ee(a, ns, R), ee(a, pu, Iw), {
    start: a,
    tokens: Gp
  };
}
function Dw(e, t, n) {
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
      s.length > 0 && (r.push(ac(wf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, O = n.slice(a - u, a);
      r.push(ac(E, t, O));
    }
  }
  return s.length > 0 && r.push(ac(wf, t, s)), r;
}
function ac(e, t, n) {
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
  Dt.scanner = xw(Dt.customSchemes);
  for (let e = 0; e < Dt.tokenQueue.length; e++)
    Dt.tokenQueue[e][1]({
      scanner: Dt.scanner
    });
  Dt.parser = Pw(Dt.scanner.tokens);
  for (let e = 0; e < Dt.pluginQueue.length; e++)
    Dt.pluginQueue[e][1]({
      scanner: Dt.scanner,
      parser: Dt.parser
    });
  return Dt.initialized = !0, Dt;
}
function qp(e) {
  return Dt.initialized || Mw(), Dw(Dt.parser.start, e, Kp(Dt.scanner.start, e));
}
qp.scan = Kp;
function $w(e) {
  const t = new yu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Uw), n = qp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(to(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function Fw(e) {
  return e.replace(/"/g, "&quot;");
}
function zw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${Fw(i)}"`);
  }
  return t.join(" ");
}
function Uw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${zw(t)}>${to(n)}</${e}>`;
}
const Bw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = $w(t.text));
}, Hw = ["title"], jw = /* @__PURE__ */ xt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Ft("NcAppSidebar:header:ref");
    return (n, i) => We((w(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Oe(p(e.name), 1)
    ], 8, Hw)), [
      [g(Bw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Vw = ["aria-labelledby"], Gw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Kw = ["id"], Ww = {
  key: 2,
  class: "empty-content__description"
}, qw = {
  key: 3,
  class: "empty-content__action"
}, Yw = /* @__PURE__ */ xt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = sl();
    return (n, i) => (w(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (w(), T("div", Gw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (w(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          Oe(p(e.name), 1)
        ], !0)
      ], 8, Kw)) : H("", !0),
      e.description !== "" || n.$slots.description ? (w(), T("p", Ww, [
        Re(n.$slots, "description", {}, () => [
          Oe(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (w(), T("div", qw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, Vw));
  }
}), Xw = /* @__PURE__ */ Ze(Yw, [["__scopeId", "data-v-8609a4c1"]]), Zw = {
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
}, Jw = ["aria-hidden", "aria-label"], Qw = ["fill", "width", "height"], eS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, tS = { key: 0 };
function nS(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", eS, [
        n.title ? (w(), T("title", tS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Qw))
  ], 16, Jw);
}
const iS = /* @__PURE__ */ Ze(Zw, [["render", nS]]), aS = {
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
}, rS = ["aria-hidden", "aria-label"], sS = ["fill", "width", "height"], oS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, lS = { key: 0 };
function cS(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", oS, [
        n.title ? (w(), T("title", lS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, sS))
  ], 16, rS);
}
const uS = /* @__PURE__ */ Ze(aS, [["render", cS]]), dS = {
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
}, fS = ["aria-hidden", "aria-label"], hS = ["fill", "width", "height"], pS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, vS = { key: 0 };
function gS(e, t, n, i, a, r) {
  return w(), T("span", Ht(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", pS, [
        n.title ? (w(), T("title", vS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, hS))
  ], 16, fS);
}
const mS = /* @__PURE__ */ Ze(dS, [["render", gS]]), bS = ["aria-selected", "tabindex"], yS = /* @__PURE__ */ xt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ $g({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = gh(e, "selected"), n = /* @__PURE__ */ qe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (w(), T("button", {
      class: Te(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(ji),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Te([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          we(Nc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              c("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          we(Nc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              c("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Te(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, bS));
  }
}), _S = "_sidebarTabsButton_q3kBA", wS = "_sidebarTabsButton_legacy_KQ4d1", SS = "_sidebarTabsButton_selected_Pjayf", CS = "_sidebarTabsButton_animatedHighlight_uvp-0", TS = "_sidebarTabsButton__name_rlQsL", ES = "_sidebarTabsButton__icon_QzZg4", AS = "_sidebarTabsButton__iconLayer_ZkZan", kS = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", OS = "_sidebarTabsButton__icon_pop_IA0By", NS = "_sidebarTabsButton__legacyIcon_QhcNW", xS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: _S,
  sidebarTabsButton_legacy: wS,
  sidebarTabsButton_selected: SS,
  sidebarTabsButton_animatedHighlight: CS,
  sidebarTabsButton__name: TS,
  sidebarTabsButton__icon: ES,
  sidebarTabsButton__iconLayer: AS,
  sidebarTabsButton__iconLayer_hidden: kS,
  sidebarTabsButton__icon_pop: OS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: NS
}, LS = {
  $style: xS
}, RS = /* @__PURE__ */ Ze(yS, [["__cssModules", LS]]), IS = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: RS
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
      isLegacy34: ji,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [zb()]) : t.order - n.order), this.updateActive();
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
}, PS = { class: "app-sidebar-tabs" };
function DS(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return w(), T("div", PS, [
    r.hasMultipleTabs || r.showForSingleTab ? (w(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = kt(Ke((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = kt(Ke((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = kt(Ke((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = kt(Ke((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = kt(Ke((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = kt(Ke((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = kt(Ke((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (w(), T("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (w(!0), T(he, null, Fe(a.tabs, (o) => (w(), Me(s, {
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
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const MS = /* @__PURE__ */ Ze(IS, [["render", DS], ["__scopeId", "data-v-74190d2a"]]);
Hi(_y);
const $S = {
  name: "NcAppSidebar",
  components: {
    NcActions: po,
    NcAppSidebarHeader: jw,
    NcAppSidebarTabs: MS,
    NcButton: jn,
    NcLoadingIcon: zp,
    NcEmptyContent: Xw,
    IconArrowRight: mp,
    IconClose: bp,
    IconDockRight: iS,
    IconStar: uS,
    IconStarOutline: mS
  },
  directives: {
    Focus: ww,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: _w
  },
  inject: {
    ncContentSelector: {
      from: gp,
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
    const e = /* @__PURE__ */ qe(null);
    return hn("NcAppSidebar:header:ref", e), {
      uid: sl(),
      isMobile: py(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: wt("Change name"),
      closeTranslated: wt("Close sidebar"),
      favoriteTranslated: wt("Favorite"),
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
    isSlotPopulated: fu,
    t: wt,
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
      this.focusTrap || (this.focusTrap = ru([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Zr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ba.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, FS = ["aria-labelledby"], zS = { class: "app-sidebar-header__info" }, US = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, BS = { class: "app-sidebar-header__name-container" }, HS = { class: "app-sidebar-header__mainname-container" }, jS = ["placeholder", "value"], VS = ["title"], GS = {
  key: 2,
  class: "app-sidebar-header__description"
};
function KS(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), O = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), L = Ue("NcEmptyContent"), R = zu("focus"), $ = zu("click-outside");
  return w(), Me(Tm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      We(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = kt((...G) => r.onKeydownEsc && r.onKeydownEsc(...G), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (w(), Me(eh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          we(o, Ht({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (G) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                we(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (w(), Me(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", zS, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (w(), T("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...G) => r.onFigureClick && r.onFigureClick(...G)),
                onKeydown: t[2] || (t[2] = kt((...G) => r.onFigureClick && r.onFigureClick(...G), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (w(), T("div", US, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (w(), Me(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ke(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (w(), Me(l, { key: 0 })) : a.isStarred ? (w(), Me(d, {
                          key: 1,
                          size: 20
                        })) : (w(), Me(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", BS, [
                  c("div", HS, [
                    We(we(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ke(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ka, !n.nameEditable]
                    ]),
                    n.nameEditable ? We((w(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ke((...G) => r.onSubmitName && r.onSubmitName(...G), ["prevent"]))
                    }, [
                      We(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = kt(Ke((...G) => r.onDismissEditing && r.onDismissEditing(...G), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...G) => r.onNameInput && r.onNameInput(...G))
                      }, null, 40, jS), [
                        [R]
                      ]),
                      we(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          we(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [$, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (w(), Me(E, {
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
                  n.subname.trim() !== "" || e.$slots.subname ? (w(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      Oe(p(n.subname), 1)
                    ], !0)
                  ], 8, VS)) : H("", !0)
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
            onClick: Ke(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              we(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (w(), T("div", GS, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        We(we(A, {
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
          [Ka, !n.loading]
        ]),
        n.loading ? (w(), Me(L, { key: 1 }, {
          icon: ke(() => [
            we(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, FS), [
        [Ka, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const WS = /* @__PURE__ */ Ze($S, [["render", KS], ["__scopeId", "data-v-c2c6820b"]]), qS = {
  name: "NcActionLink",
  mixins: [_p],
  inject: {
    isInSemanticMenu: {
      from: su,
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
}, YS = ["role"], XS = ["download", "href", "aria-label", "target", "title", "role"], ZS = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, JS = { class: "action-link__name" }, QS = ["textContent"], eC = ["textContent"], tC = {
  key: 2,
  class: "action-link__text"
};
function nC(e, t, n, i, a, r) {
  return w(), T("li", {
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
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (w(), T("span", ZS, [
        c("strong", JS, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, QS)
      ])) : e.isLongText ? (w(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, eC)) : (w(), T("span", tC, p(e.text), 1)),
      H("", !0)
    ], 8, XS)
  ], 8, YS);
}
const Fa = /* @__PURE__ */ Ze(qS, [["render", nC], ["__scopeId", "data-v-32f01b7a"]]);
Hi(Ey);
const iC = `<!--
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
`, aC = `<!--
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
`, rC = { class: "vue-skip-actions__container" }, sC = { class: "vue-skip-actions__headline" }, oC = { class: "vue-skip-actions__buttons" }, lC = /* @__PURE__ */ xt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    hn(vp, o), hn(gp, "#content-vue"), hn("appName", q(() => t.appName));
    const n = cs(), i = /* @__PURE__ */ qe(!1), a = /* @__PURE__ */ qe(), r = q(() => a.value === "navigation" ? aC : iC);
    lh(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      pi("toggle-navigation", { open: !0 }), vn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (w(), T("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(ji) }]])
    }, [
      (w(), Me(eh, { to: "#skip-actions" }, [
        c("div", rC, [
          c("div", sC, p(g(wt)("Keyboard navigation help")), 1),
          c("div", oC, [
            We(we(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ke(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Oe(p(g(wt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ka, i.value]
            ]),
            we(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Oe(p(g(wt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          We(we(rl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ka, !g(n)]
          ])
        ])
      ])),
      Re(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), cC = /* @__PURE__ */ Ze(lC, [["__scopeId", "data-v-d13dcb98"]]), uC = ["href"], dC = ["lang", "dir"], fC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, hC = { class: "library-review-header" }, pC = { class: "library-muted library-catalogue-eyebrow" }, vC = { id: "library-review-heading" }, gC = ["aria-label"], mC = ["href", "aria-current"], bC = ["aria-label"], yC = ["name", "value"], _C = {
  type: "submit",
  class: "button secondary"
}, wC = ["aria-busy"], SC = { key: 0 }, CC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, TC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, EC = { class: "library-metadata-review-workbench-copy" }, AC = { class: "library-muted library-catalogue-eyebrow" }, kC = ["title"], OC = {
  key: 0,
  class: "library-metadata-review-card"
}, NC = {
  class: "library-bidi-human",
  dir: "auto"
}, xC = { class: "library-muted" }, LC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, RC = { class: "library-metadata-review-fields" }, IC = {
  class: "library-bidi-human",
  dir: "auto"
}, PC = {
  class: "library-bidi-human",
  dir: "auto"
}, DC = {
  class: "library-bidi-human",
  dir: "auto"
}, MC = {
  class: "library-bidi-machine",
  dir: "ltr"
}, $C = {
  class: "library-bidi-human",
  dir: "auto"
}, FC = {
  class: "library-bidi-human",
  dir: "auto"
}, zC = ["action"], UC = ["value"], BC = ["value"], HC = {
  type: "submit",
  class: "button secondary"
}, jC = { class: "library-metadata-review-actions" }, VC = ["href"], GC = ["href"], KC = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, WC = ["href"], qC = ["aria-label"], YC = ["onClick"], XC = {
  class: "library-bidi-human",
  dir: "auto"
}, ZC = {
  key: 0,
  class: "library-muted"
}, JC = {
  class: "library-bidi-human",
  dir: "auto"
}, QC = {
  key: 1,
  class: "library-scan-error"
}, eT = {
  class: "library-bidi-human",
  dir: "auto"
}, tT = ["onClick"], nT = ["href"], iT = ["aria-label"], aT = ["href"], rT = {
  key: 1,
  class: "library-muted"
}, sT = { key: 0 }, oT = ["href"], lT = {
  key: 3,
  class: "library-muted"
}, cT = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, uT = { class: "library-home-header" }, dT = { class: "library-muted library-catalogue-eyebrow" }, fT = { id: "library-home-heading" }, hT = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, pT = { id: "library-continue-heading" }, vT = { class: "library-muted" }, gT = ["href"], mT = {
  key: 0,
  class: "library-home-card-row"
}, bT = ["onClick"], yT = { class: "library-cover-frame" }, _T = ["src"], wT = { class: "library-cover-summary" }, ST = ["onClick"], CT = { dir: "auto" }, TT = {
  key: 0,
  class: "library-cover-creator"
}, ET = { dir: "auto" }, AT = ["href"], kT = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, OT = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, NT = { id: "library-recent-heading" }, xT = { class: "library-muted" }, LT = ["href"], RT = {
  key: 0,
  class: "library-home-card-row"
}, IT = ["onClick"], PT = { class: "library-cover-frame" }, DT = ["src"], MT = { class: "library-cover-summary" }, $T = ["onClick"], FT = { dir: "auto" }, zT = {
  key: 0,
  class: "library-cover-creator"
}, UT = { dir: "auto" }, BT = ["href"], HT = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, jT = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, VT = { id: "library-home-shelves-heading" }, GT = { class: "library-muted" }, KT = ["href"], WT = ["aria-label"], qT = ["href"], YT = { dir: "auto" }, XT = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, ZT = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, JT = { id: "library-home-attention-heading" }, QT = { class: "library-muted" }, eE = ["href"], tE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, nE = { class: "library-home-header" }, iE = { class: "library-muted library-catalogue-eyebrow" }, aE = { id: "library-shelves-landing-heading" }, rE = { class: "library-muted" }, sE = ["aria-label"], oE = ["href"], lE = { class: "library-shelf-summary-title" }, cE = { dir: "auto" }, uE = { class: "library-muted" }, dE = { dir: "auto" }, fE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, hE = { class: "library-muted" }, pE = { class: "library-empty-actions" }, vE = ["href"], gE = ["href"], mE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, bE = { class: "library-catalogue-header" }, yE = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, _E = { id: "library-catalogue-heading" }, wE = ["aria-label"], SE = ["aria-label"], CE = ["name", "value"], TE = { class: "library-quick-search-row" }, EE = ["title"], AE = ["placeholder"], kE = { "data-library-control": "sort" }, OE = { value: "title" }, NE = { value: "recent" }, xE = { value: "publicationDate" }, LE = { value: "publication" }, RE = { value: "lastOpened" }, IE = { value: "format" }, PE = ["aria-label"], DE = ["aria-pressed"], ME = ["aria-pressed"], $E = ["aria-pressed"], FE = ["aria-pressed"], zE = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, UE = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, BE = ["title", "aria-label"], HE = { class: "library-workspace-scope-badge" }, jE = ["aria-label"], VE = { value: "" }, GE = ["value"], KE = { value: "" }, WE = ["value"], qE = { class: "library-publication-filter" }, YE = { for: "library-publication-search" }, XE = ["placeholder", "aria-expanded"], ZE = ["value"], JE = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, QE = ["onClick"], eA = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, tA = { class: "library-year-filter" }, nA = { for: "library-year-search" }, iA = ["placeholder", "aria-expanded"], aA = ["value"], rA = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, sA = ["onClick"], oA = {
  type: "submit",
  class: "button secondary library-year-apply"
}, lA = { class: "library-creator-filter" }, cA = { for: "library-creator-search" }, uA = ["placeholder", "title", "aria-expanded"], dA = ["value"], fA = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, hA = ["onClick"], pA = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, vA = ["placeholder"], gA = { value: "" }, mA = ["value"], bA = { value: "" }, yA = ["value"], _A = { value: "" }, wA = ["value"], SA = { value: "" }, CA = ["value"], TA = { value: "" }, EA = ["value"], AA = { value: "" }, kA = ["value"], OA = { value: "" }, NA = { value: "1" }, xA = {
  type: "submit",
  class: "button primary"
}, LA = {
  href: "?",
  class: "button secondary"
}, RA = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, IA = { id: "library-shelves-heading" }, PA = {
  id: "library-collections",
  class: "library-saved-collections"
}, DA = ["title"], MA = ["action", "title"], $A = ["value"], FA = ["value"], zA = ["placeholder", "disabled"], UA = ["disabled", "title"], BA = ["aria-label"], HA = ["href"], jA = ["action"], VA = ["value"], GA = {
  type: "submit",
  class: "button tertiary"
}, KA = ["aria-label"], WA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, qA = ["title"], YA = { class: "library-workspace-panel-purpose" }, XA = { class: "library-workspace-scope-badge" }, ZA = { "aria-live": "polite" }, JA = ["action"], QA = ["value"], e2 = ["placeholder"], t2 = ["title"], n2 = ["action"], i2 = ["value"], a2 = ["placeholder"], r2 = ["title"], s2 = ["action"], o2 = ["value"], l2 = ["name", "value"], c2 = ["title"], u2 = ["action"], d2 = ["value"], f2 = ["name", "value"], h2 = { name: "bulkEditField" }, p2 = { value: "publicationType" }, v2 = { value: "subtitle" }, g2 = { value: "creators" }, m2 = { value: "publication" }, b2 = { value: "publicationDate" }, y2 = { value: "language" }, _2 = { value: "publisher" }, w2 = { value: "genres" }, S2 = { value: "classifications" }, C2 = ["placeholder"], T2 = ["title"], E2 = ["action"], A2 = ["value"], k2 = ["name", "value"], O2 = ["title"], N2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, x2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, L2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, R2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, I2 = { class: "library-muted library-catalogue-eyebrow" }, P2 = ["title"], D2 = ["aria-label"], M2 = { key: 0 }, $2 = { key: 1 }, F2 = { key: 2 }, z2 = ["aria-label"], U2 = { key: 0 }, B2 = { key: 1 }, H2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, j2 = { class: "library-muted library-catalogue-eyebrow" }, V2 = ["title"], G2 = ["aria-label"], K2 = ["href"], W2 = {
  key: 0,
  class: "library-notice"
}, q2 = { class: "library-publication-issue-label" }, Y2 = ["href"], X2 = { class: "library-muted" }, Z2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, J2 = ["title"], Q2 = ["href"], ek = { class: "library-catalogue-status-row" }, tk = { class: "library-muted library-filter-result-summary" }, nk = { key: 0 }, ik = { href: "?" }, ak = ["aria-label"], rk = { class: "library-pagination-range" }, sk = { key: 0 }, ok = ["href"], lk = {
  key: 1,
  class: "library-muted"
}, ck = ["href"], uk = {
  key: 3,
  class: "library-muted"
}, dk = ["aria-label"], fk = ["href", "aria-label", "onClick"], hk = ["title"], pk = { class: "library-empty-actions" }, vk = ["href"], gk = { class: "library-muted" }, mk = ["title"], bk = { class: "library-empty-actions" }, yk = ["href"], _k = ["title"], wk = { class: "library-empty-actions" }, Sk = ["href"], Ck = {
  href: "?",
  class: "button primary"
}, Tk = ["title"], Ek = { class: "library-empty-actions" }, Ak = ["href"], kk = {
  key: 6,
  class: "library-select-visible"
}, Ok = ["checked"], Nk = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, xk = { class: "library-item-selection" }, Lk = ["checked", "aria-label", "onChange"], Rk = { class: "library-catalogue-list-main" }, Ik = ["onClick"], Pk = {
  class: "library-bidi-human",
  dir: "auto"
}, Dk = {
  key: 0,
  class: "library-muted"
}, Mk = {
  class: "library-bidi-human",
  dir: "auto"
}, $k = { class: "library-catalogue-list-metadata" }, Fk = { key: 0 }, zk = {
  class: "library-bidi-human",
  dir: "auto"
}, Uk = { key: 1 }, Bk = { key: 2 }, Hk = ["dir"], jk = { key: 3 }, Vk = {
  class: "library-bidi-human",
  dir: "auto"
}, Gk = { class: "library-catalogue-list-actions" }, Kk = ["href"], Wk = ["onClick"], qk = { class: "library-item-selection" }, Yk = ["checked", "aria-label", "onChange"], Xk = ["aria-labelledby", "aria-expanded", "onClick"], Zk = ["id"], Jk = { class: "library-cover-frame" }, Qk = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, eO = ["src", "onLoad", "onError"], tO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, nO = ["action", "onSubmit"], iO = ["value"], aO = ["value"], rO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], sO = ["data-library-star-error"], oO = { class: "library-cover-summary" }, lO = { class: "library-cover-primary" }, cO = ["id"], uO = ["onClick"], dO = {
  class: "library-bidi-human",
  dir: "auto"
}, fO = {
  key: 0,
  class: "library-cover-creator"
}, hO = {
  class: "library-bidi-human",
  dir: "auto"
}, pO = {
  key: 1,
  class: "library-cover-badges"
}, vO = {
  key: 0,
  class: "library-cover-badge"
}, gO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, mO = {
  key: 1,
  class: "library-cover-context"
}, bO = {
  class: "library-bidi-human",
  dir: "auto"
}, yO = { class: "library-cover-primary-actions" }, _O = ["href"], wO = ["aria-label"], SO = { class: "library-pagination-range" }, CO = { key: 0 }, TO = ["href"], EO = {
  key: 1,
  class: "library-muted"
}, AO = ["href"], kO = {
  key: 3,
  class: "library-muted"
}, OO = { class: "library-sidebar-content" }, NO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, xO = ["role"], LO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, RO = { class: "library-sidebar-publication-header" }, IO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, PO = ["src"], DO = { class: "library-sidebar-publication-summary" }, MO = { class: "library-muted library-catalogue-eyebrow" }, $O = {
  class: "library-bidi-human",
  dir: "auto"
}, FO = { key: 0 }, zO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, UO = { class: "library-detail-drawer-actions" }, BO = ["href"], HO = ["aria-label"], jO = ["aria-current", "onClick"], VO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, GO = { id: "library-sidebar-overview-heading" }, KO = {
  key: 0,
  class: "library-sidebar-description"
}, WO = {
  class: "library-bidi-human",
  dir: "auto"
}, qO = { class: "library-detail-drawer-facts" }, YO = { key: 0 }, XO = { key: 1 }, ZO = { key: 2 }, JO = { key: 3 }, QO = { key: 4 }, eN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, tN = { id: "library-sidebar-metadata-heading" }, nN = ["placeholder"], iN = ["onUpdate:modelValue", "aria-label", "placeholder"], aN = ["onUpdate:modelValue", "aria-label"], rN = ["onClick"], sN = { class: "library-muted" }, oN = {
  key: 0,
  role: "alert"
}, lN = {
  key: 1,
  role: "status"
}, cN = ["disabled"], uN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, dN = { id: "library-sidebar-suggestions-heading" }, fN = { class: "library-muted" }, hN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, pN = { id: "library-sidebar-activity-heading" }, vN = { class: "library-detail-drawer-facts" }, gN = { key: 0 }, mN = { key: 1 }, bN = { key: 2 }, yN = { dir: "ltr" }, _N = ["aria-label"], wN = ["disabled"], SN = ["disabled"], CN = 20, TN = "/apps/library", EN = 2147483647, AN = {
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
    function r(_, b) {
      return Object.prototype.hasOwnProperty.call(a, _) && String(b ?? "").trim() === a[_];
    }
    function s(_) {
      const b = new URLSearchParams(_);
      for (const f of Object.keys(a)) {
        const B = [...new Set([...b.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], fe = B.reduce((Le, $e) => Le + b.getAll($e).length, 0);
        if (fe > 1 || B.some((Le) => Le !== f)) {
          for (const Le of B) b.delete(Le);
          continue;
        }
        f !== "status" && fe === 1 && !r(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function o(_) {
      return Object.keys(a).some((b) => _.getAll(b).length === 1 && r(b, _.get(b)));
    }
    function l(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(a, b) || r(b, f)));
    }
    const d = /* @__PURE__ */ Mt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Mt((d.items || []).map((_) => ({ ..._ }))), h = q(() => u), S = q(() => d.shelves || []), E = q(() => d.formats || []), O = q(() => d.publicationTypes?.length ? d.publicationTypes : n), A = q(() => d.publishers || []), L = q(() => d.publications || []), R = q(() => d.publicationIssueContext || null), $ = q(() => d.scanStatuses || []), G = q(() => d.workflowStatuses || []), F = q(() => d.genres || []), le = q(() => d.classifications || []), ne = q(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Mt({
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
    const ce = /* @__PURE__ */ qe(P.publication), X = /* @__PURE__ */ qe(!1), ae = /* @__PURE__ */ qe(null), me = q(() => {
      const _ = ce.value.trim().toLocaleLowerCase();
      return (_ !== "" && ae.value !== null ? ae.value : L.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, CN);
    });
    vt(() => P.publication, (_) => {
      ce.value = _ || "";
    });
    let J = null, te = null, D = 0;
    vt(ce, (_) => {
      window.clearTimeout(J), te?.abort(), te = null, ae.value = null;
      const b = String(_ || "").trim();
      if (b === "") return;
      const f = ++D;
      J = window.setTimeout(() => {
        Zp(b, f);
      }, 200);
    });
    const M = /* @__PURE__ */ qe(P.creator), Y = /* @__PURE__ */ qe(!1), re = /* @__PURE__ */ qe(null), ie = q(() => re.value || []);
    vt(() => P.creator, (_) => {
      M.value = _ || "";
    });
    let pe = null, de = null, Ee = 0;
    vt(M, (_) => {
      window.clearTimeout(pe), de?.abort(), de = null, re.value = null;
      const b = String(_ || "").trim();
      if (b === "") return;
      const f = ++Ee;
      pe = window.setTimeout(() => {
        Yp(b, f);
      }, 200);
    });
    const ge = /* @__PURE__ */ qe(P.year), Be = /* @__PURE__ */ qe(!1), Ae = /* @__PURE__ */ qe(null), it = q(() => Ae.value || []);
    vt(() => P.year, (_) => {
      ge.value = _ || "";
    });
    let st = null, ot = null, Ct = 0;
    vt(ge, (_) => {
      window.clearTimeout(st), ot?.abort(), ot = null, Ae.value = null;
      const b = String(_ || "").trim();
      if (b === "") return;
      const f = ++Ct;
      st = window.setTimeout(() => {
        Xp(b, f);
      }, 200);
    });
    const at = Object.fromEntries(Object.keys(P).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), ln = window.location.pathname.indexOf(TN), U = ln >= 0 ? window.location.pathname.slice(0, ln) : "", v = {
      catalogue: `${U}/apps/library/`,
      review: `${U}/apps/library/?scannerConflicts=1`,
      settings: `${U}/settings/user/library`
    };
    function C(_, b) {
      if (typeof _ != "string" || _ === "") return b;
      try {
        const f = U ? `${U}/` : "/";
        let B = _;
        for (let fe = 0; fe < 5; fe += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return b;
          const Le = new URL(B, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return b;
          const $e = B.split(/[?#]/, 1)[0];
          for (const tn of $e.split("/")) {
            let Ei = tn;
            for (let Ia = 0; Ia < 5; Ia += 1) {
              const Pn = decodeURIComponent(Ei);
              if (/[\\/\u0000-\u001f\u007f]/.test(Pn) || Pn === "." || Pn === "..") return b;
              if (Pn === Ei) break;
              if (Ei = Pn, Ia === 4) return b;
            }
          }
          const ht = decodeURI(B);
          if (ht === B) return _;
          B = ht;
        }
        return b;
      } catch {
        return b;
      }
    }
    const k = q(() => C(d.settingsUrl, v.settings)), N = q(() => C(d.catalogueRootUrl, v.catalogue)), x = q(() => C(d.homeUrl, `${v.catalogue}?home=1`)), z = q(() => C(d.shelvesUrl, `${v.catalogue}?shelves=1`)), K = q(() => C(d.reviewUrl || d.scannerConflictReviewUrl, v.review)), V = q(() => Object.entries(a).some(([_, b]) => P[_] === b)), Q = q(() => i.reduce((_, b) => _ + Number(Eu.value[b.countKey] || 0), 0)), j = q(() => d.surface === "home"), _e = q(() => d.surface === "shelves"), se = q(() => !j.value && !_e.value && !V.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), be = q(() => [
      { key: "home", name: m("library", "Home"), href: x.value, active: j.value },
      { key: "all", name: m("library", "All publications"), href: N.value, active: se.value },
      { key: "starred", name: m("library", "Starred"), href: `${N.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${N.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: z.value, active: _e.value || !!P.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${N.value}#library-collections`, active: !1 }
    ]), ve = q(() => d.requestToken || ""), xe = q(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), De = q(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Pe = q(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Je = q(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), rt = q(() => d.itemSidebarUrlTemplate || `${U}/apps/library/items/__ITEM_ID__/sidebar`), Tt = q(() => d.batchTagUrl || "/apps/library/bulk/tags"), Lt = q(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), qt = q(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Kn = q(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ut = q(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Rt = q(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Wn = q(() => d.discoveryPage === "publication"), qn = q(() => d.discoveryPage === "year"), Vi = q(() => d.discoveryPage === "creator"), Gi = q(() => Wn.value || qn.value || Vi.value), Yn = q(() => d.discoveryTitle || P.publication || P.year || P.creator || ""), wi = q(() => Gi.value ? Yn.value : m("library", "Library")), Ja = q(() => Vi.value ? m("library", "Creator") : qn.value ? m("library", "Publication year") : m("library", "Publication / series")), Qa = q(() => Number(d.rootCount || 0)), us = q(() => Number(d.enabledRootCount || 0)), Ca = q(() => Qa.value === 0), Ta = q(() => Qa.value > 0 && us.value === 0), Ki = q(() => qi.value.length > 0), Wi = {
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
    }, Qt = q(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const b = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", B = _.get("batchMetadataUnchanged") || "0", fe = _.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: B, skipped: fe });
    }), Xn = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ea = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Aa = q(() => d.savedCollections || []), dl = q(() => d.savedCollectionSaveUrl || "/apps/library/collections"), ds = q(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ka = ["compact", "gallery", "list", "shelf"], jt = q(() => ka.includes(P.view) ? P.view : "compact"), er = q(() => ({
      "library-cover-gallery--compact": jt.value === "compact",
      "library-cover-gallery--gallery": jt.value === "gallery",
      "library-cover-gallery--shelf": jt.value === "shelf"
    })), qi = q(() => Object.entries(Wi).map(([_, b]) => ({ key: _, label: m("library", b), value: P[_] || "" })).filter((_) => String(_.value).trim() !== "")), Yi = q(() => Object.entries(P).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Oa = q(() => Object.entries(l(P)).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), fl = q(() => Oa.value.filter(({ key: _, value: b }) => _ !== "q" && !(_ === "sort" && b === "title"))), nt = /* @__PURE__ */ Mt({}), _n = q(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), fs = q(() => d.homeShelves || []), tr = q(() => d.shelfSummaries || []), Xi = q(() => d.needsAttention || { count: 0, url: `${N.value}?needsMetadata=1` }), Yt = /* @__PURE__ */ qe([]), Zi = q(() => new Set(Yt.value));
    function hs(_, b) {
      const f = new Set(Yt.value);
      b ? f.add(Number(_)) : f.delete(Number(_)), Yt.value = [...f];
    }
    function hl(_) {
      Yt.value = _.currentTarget.checked ? h.value.map((b) => Number(b.id)) : [];
    }
    function pl() {
      const _ = new Set(h.value.map((b) => Number(b.id)));
      Yt.value = Yt.value.filter((b) => _.has(b));
    }
    function vl(_) {
      const b = _.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Yt.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", b.appendChild(B);
        }
      }
    }
    const Se = /* @__PURE__ */ qe(null), xn = /* @__PURE__ */ qe(null), dt = /* @__PURE__ */ Mt({ loading: !1, error: "", missing: !1 }), Vt = /* @__PURE__ */ qe("overview"), en = /* @__PURE__ */ Mt({ saving: !1, saved: !1, error: "" }), ct = /* @__PURE__ */ Mt({ title: "", publicationDate: "", identifiers: [] }), nr = /* @__PURE__ */ qe(null), Zn = /* @__PURE__ */ qe(null), Ln = /* @__PURE__ */ qe(!1);
    let Na = null, Xt = null, Si = null, Ci = !1, cn = null, Jn = 0;
    const bt = q(() => xn.value !== null), Ji = q(() => Se.value ? h.value.findIndex((_) => _.id === Se.value.id) : -1), Qn = q(() => Ji.value > 0 ? h.value[Ji.value - 1] : null), xa = q(() => Ji.value >= 0 && Ji.value < h.value.length - 1 ? h.value[Ji.value + 1] : null), ps = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], vs = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Qi(_) {
      const b = String(_ ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function ir(_) {
      return { ..._, publicationDate: Qi(_?.publicationDate) };
    }
    function gs(_) {
      ct.title = String(_?.title || ""), ct.publicationDate = Qi(_?.publicationDate), ct.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(en, { saving: !1, saved: !1, error: "" });
    }
    function ms() {
      ct.identifiers.push({ scheme: "", displayValue: "" });
    }
    function gl(_) {
      ct.identifiers.splice(_, 1);
    }
    async function ml() {
      const _ = Se.value;
      if (!_?.updateUrl || en.saving) return;
      Object.assign(en, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", ve.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const B = _[f];
        b.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      b.set("title", ct.title), b.set("publicationDate", Qi(ct.publicationDate)), ct.identifiers.forEach((f, B) => {
        b.set(`identifiers[${B}][scheme]`, f.scheme), b.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || m("library", "Metadata could not be saved."));
        _.title = ct.title.trim(), _.publicationDate = Qi(ct.publicationDate), _.identifiers = ct.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const fe = h.value.find((Le) => Number(Le.id) === Number(_.id));
        fe && (fe.title = _.title, fe.publicationDate = _.publicationDate), en.saved = !0;
      } catch (f) {
        en.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        en.saving = !1;
      }
    }
    const wn = q(() => {
      const _ = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), b = _ ? h.value.find((f) => Z(f).length > 0) : null;
      return {
        enabled: _,
        item: b,
        fields: b ? Z(b) : [],
        reviewNextUrl: Rt.value,
        skipUrl: ne.value.nextUrl || Rt.value
      };
    }), La = q(() => i.map((_) => ({
      ..._,
      label: m("library", _.label),
      href: `${N.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String(P[_.key] || "") === _.value
    })));
    function ea(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function Z(_) {
      const b = _.fieldValues || {}, f = _.fieldSources || {};
      return ps.filter((B) => Object.prototype.hasOwnProperty.call(b, B)).map((B) => {
        const fe = ea(_[B]), Le = ea(b[B]), $e = ea(f[B] || _.metadataSource || "scanner"), ht = $e.includes("filename") || $e.includes("path") ? Le : "", tn = $e.includes("sidecar") ? Le : "";
        return { field: B, currentValue: fe, scannerCandidate: Le, pathTemplateCandidate: ht, sidecarValue: tn, sourceProvenance: $e, differs: fe !== Le };
      }).filter((B) => B.differs);
    }
    let y = 0, I = null;
    function W() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const b = Number(_[0]);
      return Number.isSafeInteger(b) && b <= EN ? b : null;
    }
    function oe(_, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function ue(_, { historyMode: b = "push", seed: f = null } = {}) {
      I?.abort();
      const B = ++y, fe = new AbortController();
      I = fe, xn.value = _, Vt.value = "overview", Se.value = f && Number(f.id) === _ ? ir(f) : null, Se.value && gs(Se.value), Object.assign(dt, { loading: !0, error: "", missing: !1 }), b !== "none" && oe(_, b);
      try {
        const Le = rt.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), $e = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: fe.signal });
        if (B !== y) return;
        if (!$e.ok) {
          Se.value = null, dt.missing = $e.status === 404, dt.error = $e.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const ht = await $e.json();
        if (B !== y) return;
        if (typeof ht?.item?.id != "number" || !Number.isSafeInteger(ht.item.id) || ht.item.id !== _) {
          Se.value = null, dt.missing = !1, dt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = ir(ht.item), gs(Se.value), await vn();
      } catch (Le) {
        B === y && Le?.name !== "AbortError" && (Se.value = null, dt.missing = !1, dt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        B === y && (dt.loading = !1, I = null);
      }
    }
    function ye(_, b) {
      _t(), Na = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, ue(Number(_.id), { seed: _ });
    }
    function Ve({ historyMode: _ = "push", restoreFocus: b = !0 } = {}) {
      Si = b ? Na : null, Na = null, I?.abort(), I = null, y += 1, xn.value = null, Se.value = null, Vt.value = "overview", Object.assign(dt, { loading: !1, error: "", missing: !1 }), _ !== "none" && oe(null, _);
    }
    function Qe() {
      Ln.value ? (Zn.value?.$refs?.sidebar || Zn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : nr.value?.focus();
    }
    function It() {
      const _ = Si;
      if (Si = null, _t(), Ci || !_?.isConnected) return;
      const b = Jn;
      cn = window.requestAnimationFrame(() => {
        cn = null, !(b !== Jn || Ci || bt.value || !_.isConnected) && _.focus();
      });
    }
    function _t() {
      Jn += 1, cn !== null && (window.cancelAnimationFrame(cn), cn = null);
    }
    function ei(_ = Xt) {
      Ln.value = !!_?.matches, bt.value && vn(Qe);
    }
    function ft(_) {
      _ && ue(Number(_.id), { seed: _ });
    }
    const Ra = /* @__PURE__ */ qe(null);
    let bs = null, Rn = 0, Ti = null;
    const Sn = /* @__PURE__ */ Mt({ loading: !1, error: "" });
    function _u(_) {
      const b = s(new FormData(_));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b;
    }
    async function wu(_, b, f) {
      const B = new URLSearchParams();
      for (const [$e, ht] of Object.entries(P)) {
        const tn = String(ht || "").trim();
        $e !== _ && tn !== "" && !($e === "sort" && tn === "title") && !($e === "view" && tn === "compact") && B.set($e, tn);
      }
      B.set(`${_}Search`, b);
      const fe = new AbortController();
      _ === "creator" ? de = fe : ot = fe;
      const Le = _ === "creator" ? Pe.value : Je.value;
      try {
        const $e = await fetch(`${Le}?${B}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: fe.signal });
        if (!$e.ok) throw new Error(`${_} suggestions request failed: ${$e.status}`);
        const ht = await $e.json(), tn = _ === "creator" ? Ee : Ct, Ei = _ === "creator" ? M.value : ge.value;
        f === tn && Ei.trim() === b && (_ === "creator" ? re.value = Array.isArray(ht.creators) ? ht.creators : [] : Ae.value = Array.isArray(ht.years) ? ht.years : []);
      } catch ($e) {
        $e?.name !== "AbortError" && (_ === "creator" && f === Ee && (re.value = null), _ === "year" && f === Ct && (Ae.value = null));
      }
    }
    function Yp(_, b) {
      return wu("creator", _, b);
    }
    function Xp(_, b) {
      return wu("year", _, b);
    }
    async function Zp(_, b) {
      const f = new URLSearchParams();
      for (const [fe, Le] of Object.entries(P)) {
        const $e = String(Le || "").trim();
        fe !== "publication" && $e !== "" && !(fe === "sort" && $e === "title") && !(fe === "view" && $e === "compact") && f.set(fe, $e);
      }
      f.set("publicationSearch", _);
      const B = new AbortController();
      te = B;
      try {
        const fe = await fetch(`${De.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!fe.ok) throw new Error(`Publication suggestions request failed: ${fe.status}`);
        const Le = await fe.json();
        b === D && ce.value.trim() === _ && (ae.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (fe) {
        fe?.name !== "AbortError" && b === D && (ae.value = null);
      } finally {
        b === D && (te = null);
      }
    }
    function Jp(_) {
      u.splice(0, u.length, ...(_.items || []).map((b) => ({ ...b }))), pl();
      for (const b of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(_, b) && (d[b] = _[b]);
      Object.assign(P, at, _.activeFilters || {});
    }
    async function In(_, b = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !b?.params) return;
      const B = s(b?.params ?? _u(f)), fe = B.toString(), Le = fe ? `?${fe}` : "", $e = b?.generation ?? ++Rn, ht = o(B), tn = b?.historyMode ?? (ht ? "push" : "replace"), Ei = b?.historyTraversal === !0;
      if ($e !== Rn) return;
      b === null && Ti?.abort();
      const Ia = new AbortController();
      Ti = Ia, Sn.loading = !0, Sn.error = "";
      try {
        const Pn = await fetch(xe.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ia.signal
        });
        if ($e !== Rn) return;
        if (!Pn.ok) {
          Ei ? ys(B) : ht ? Sn.error = m("library", "Could not load this review queue. Try again.") : ys(B);
          return;
        }
        const bv = await Pn.json();
        if ($e !== Rn) return;
        Jp(bv), tn !== "none" && (history[tn === "push" ? "pushState" : "replaceState"]({}, "", fe ? `?${fe}` : window.location.pathname), bt.value && Ve({ historyMode: "none" }));
      } catch (Pn) {
        $e === Rn && Pn?.name !== "AbortError" && (Ei ? ys(B) : ht ? Sn.error = m("library", "Could not load this review queue. Try again.") : ys(B));
      } finally {
        $e === Rn && (Ti = null, Sn.loading = !1);
      }
    }
    function Su() {
      Ti?.abort();
      const _ = new URLSearchParams(window.location.search), b = W();
      _.has("item") && b === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), b === null ? Ve({ historyMode: "none" }) : ue(b, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === b) || null }), _.delete("item"), In(null, {
        params: s(_),
        generation: ++Rn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ys(_) {
      const b = document.createElement("form");
      b.method = "get", b.action = window.location.pathname, b.hidden = !0;
      for (const [f, B] of _.entries()) {
        const fe = document.createElement("input");
        fe.type = "hidden", fe.name = f, fe.value = B, b.appendChild(fe);
      }
      document.body.appendChild(b), b.submit(), b.remove();
    }
    function Cu(_, b = null, f = null) {
      if (b === null) {
        In(_);
        return;
      }
      In({ currentTarget: _ }, { params: b, generation: f });
    }
    function Qp(_) {
      const b = _?.currentTarget?.form;
      if (!b) return;
      window.clearTimeout(bs), window.clearTimeout(J), D += 1, te?.abort(), te = null;
      const f = ++Rn, B = _u(b);
      Ti?.abort(), Ti = null, bs = window.setTimeout(() => Cu(b, B, f), 350);
    }
    async function ev(_, b = ce.value) {
      P.publication = String(b || "").trim(), ce.value = P.publication, X.value = !1, await vn(), In({ currentTarget: _ });
    }
    function tv(_, b) {
      ev(b.currentTarget.form, _);
    }
    async function nv(_) {
      P.publication = String(ce.value || "").trim(), P.creator = String(M.value || "").trim(), P.year = String(ge.value || "").trim(), X.value = !1, Y.value = !1, Be.value = !1, await vn(), In({ currentTarget: _ });
    }
    async function Tu(_, b, f) {
      P[b] = String(f || "").trim(), b === "creator" ? (M.value = P.creator, Y.value = !1) : (ge.value = P.year, Be.value = !1), await vn(), In({ currentTarget: _ });
    }
    function iv(_) {
      nv(_.currentTarget);
    }
    function av(_, b) {
      Tu(b.currentTarget.form, "creator", _);
    }
    function rv(_, b) {
      Tu(b.currentTarget.form, "year", _);
    }
    function bl(_) {
      const b = new URLSearchParams();
      for (const [B, fe] of Object.entries(P)) {
        const Le = String(fe || "").trim();
        Le !== "" && B !== _ && !(B === "sort" && Le === "title") && !(B === "view" && Le === "compact") && b.set(B, Le);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function sv(_) {
      const b = new URLSearchParams(bl(_));
      In(null, {
        params: b,
        generation: ++Rn
      });
    }
    function ov() {
      return bl("q");
    }
    const Eu = q(() => d.smartViewCounts || {}), Au = q(() => {
      const _ = {};
      for (const [b, f] of Object.entries(P)) {
        const B = String(f || "").trim();
        B !== "" && !(b === "sort" && B === "title") && (_[b] = B);
      }
      return _;
    }), lv = q(() => JSON.stringify(Au.value)), yl = q(() => Object.keys(Au.value).length > 0);
    function _s(_) {
      if (!ka.includes(_)) return;
      P.view = _;
      const b = s(window.location.search);
      _ === "compact" ? b.delete("view") : b.set("view", _), b.delete("page"), history.replaceState({}, "", b.toString() ? `?${b.toString()}` : window.location.pathname);
    }
    function cv(_) {
      const b = s(window.location.search);
      for (const B of Object.keys(Wi))
        b.delete(B);
      b.delete("page");
      for (const [B, fe] of Object.entries(_))
        String(fe || "").trim() !== "" && b.set(B, String(fe));
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function uv(_) {
      return cv(_ || {});
    }
    function dv(_) {
      return ds.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function ar(_) {
      return String(_ || "").toUpperCase();
    }
    function rr(_) {
      return nt[_.id] || "loading";
    }
    function fv(_) {
      nt[_.id] = "loaded";
    }
    function hv(_) {
      nt[_.id] = "error";
    }
    function _l(_) {
      const b = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f ? b || f : [_?.publicationType, ar(_?.extension)].filter(Boolean).join(" · ");
    }
    function pv(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function vv(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || pv(_.target) || (_.preventDefault(), Ra.value?.focus(), Ra.value?.select?.());
    }
    function gv(_) {
      _.key !== "Escape" || document.activeElement !== Ra.value || P.q === "" || (_.preventDefault(), P.q = "", Ra.value.value = "", window.clearTimeout(bs), Cu({ currentTarget: Ra.value }));
    }
    function mv(_) {
      if (!bt.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Ve(), !0;
      if (_.key === "Tab" && Ln.value) {
        if (Zn.value?.focusTrap) return !1;
        const b = Zn.value?.$refs?.sidebar || Zn.value?.$el || Zn.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], fe = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === B || !b.contains(document.activeElement)))
          return _.preventDefault(), fe.focus(), !0;
        if (!_.shiftKey && (document.activeElement === fe || !b.contains(document.activeElement)))
          return _.preventDefault(), B.focus(), !0;
      }
      return _.key === "ArrowLeft" && Qn.value ? (_.preventDefault(), ft(Qn.value), !0) : _.key === "ArrowRight" && xa.value ? (_.preventDefault(), ft(xa.value), !0) : !1;
    }
    function ku(_) {
      mv(_) || (vv(_), gv(_));
    }
    Bi(() => {
      window.addEventListener("keydown", ku), window.addEventListener("popstate", Su), Xt = window.matchMedia?.("(max-width: 1023px)") || null, ei(), Xt?.addEventListener ? Xt.addEventListener("change", ei) : Xt?.addListener?.(ei);
      const _ = new URLSearchParams(window.location.search), b = W();
      _.has("item") && b === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : b !== null && ue(b, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === b) || null });
    }), Za(() => {
      Ci = !0, _t(), window.removeEventListener("keydown", ku), window.removeEventListener("popstate", Su), window.clearTimeout(bs), window.clearTimeout(J), window.clearTimeout(pe), window.clearTimeout(st), te?.abort(), de?.abort(), ot?.abort(), Rn += 1, Ti?.abort(), Ti = null, y += 1, I?.abort(), I = null, Xt?.removeEventListener ? Xt.removeEventListener("change", ei) : Xt?.removeListener?.(ei), Xt = null, Si = null;
    });
    const sr = /* @__PURE__ */ Mt({}), or = /* @__PURE__ */ Mt({});
    async function Ou(_, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !_?.starUrl || sr[_.id]) return;
      const B = !!_.starred;
      sr[_.id] = !0, or[_.id] = "", _.starred = !B;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = B, or[_.id] = m("library", "Could not update star. Try again."));
      } catch {
        _.starred = B, or[_.id] = m("library", "Could not update star. Try again.");
      } finally {
        sr[_.id] = !1;
      }
    }
    return (_, b) => (w(), Me(g(cC), { "app-name": "library" }, {
      default: ke(() => [
        we(g(V_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: ke(() => [
            we(g(pp), null, {
              default: ke(() => [
                (w(!0), T(he, null, Fe(be.value, (f) => (w(), Me(g(gf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                we(g(gf), {
                  active: V.value,
                  href: K.value,
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
              b[34] || (b[34] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, uC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        we(g(s_), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              V.value ? (w(), T("section", fC, [
                c("header", hC, [
                  c("p", pC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", vC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (w(!0), T(he, null, Fe(La.value, (f) => (w(), T("a", {
                    key: f.key,
                    class: Te(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(Eu.value[f.countKey] || 0)), 1)
                  ], 10, mC))), 128))
                ], 8, gC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Ke(In, ["prevent"])
                }, [
                  (w(!0), T(he, null, Fe(fl.value, (f) => (w(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, yC))), 128)),
                  c("label", null, [
                    Oe(p(g(m)("library", "Search within this queue")), 1),
                    We(c("input", {
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => P.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Cn, P.q]
                    ])
                  ]),
                  c("button", _C, p(g(m)("library", "Apply")), 1)
                ], 40, bC),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Sn.loading ? "true" : "false"
                }, [
                  Sn.loading ? (w(), T("span", SC, p(g(m)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, wC),
                Sn.error ? (w(), T("p", CC, p(Sn.error), 1)) : H("", !0),
                wn.value.enabled ? (w(), T("section", TC, [
                  c("div", EC, [
                    c("p", AC, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, kC)
                  ]),
                  wn.value.item ? (w(), T("article", OC, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", NC, p(wn.value.item.title), 1)
                      ]),
                      c("span", xC, [
                        c("bdi", LC, p(wn.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", RC, [
                      (w(!0), T(he, null, Fe(wn.value.fields, (f) => (w(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", IC, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", PC, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", DC, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", MC, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", $C, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", FC, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: wn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ve.value
                          }, null, 8, UC),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, BC),
                          b[35] || (b[35] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", HC, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, zC)
                      ]))), 128))
                    ]),
                    c("footer", jC, [
                      c("a", {
                        class: "button secondary",
                        href: wn.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, VC),
                      c("a", {
                        class: "button secondary",
                        href: wn.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, GC)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !Sn.loading && !Sn.error ? (w(), T("div", KC, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: N.value
                  }, p(g(m)("library", "Back to Library")), 9, WC)
                ])) : (w(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (w(!0), T(he, null, Fe(h.value, (f) => (w(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => ye(f, B)
                        }, [
                          c("bdi", XC, p(f.title), 1)
                        ], 8, YC)
                      ]),
                      f.creators ? (w(), T("p", ZC, [
                        c("bdi", JC, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (w(), T("p", QC, [
                        c("bdi", eT, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => ye(f, B)
                      }, p(g(m)("library", "Details")), 9, tT),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, nT)
                    ])
                  ]))), 128))
                ], 8, qC)),
                h.value.length > 0 ? (w(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (w(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, aT)) : (w(), T("span", rT, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (w(), T("span", sT, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.nextUrl ? (w(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, oT)) : (w(), T("span", lT, p(g(m)("library", "Next")), 1))
                ], 8, iT)) : H("", !0)
              ])) : j.value ? (w(), T("main", cT, [
                c("header", uT, [
                  c("p", dT, p(g(m)("library", "Your library")), 1),
                  c("h2", fT, p(g(m)("library", "Home")), 1)
                ]),
                c("section", hT, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", pT, p(g(m)("library", "Continue reading")), 1),
                      c("p", vT, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, gT)
                  ]),
                  _n.value.continueReading.length ? (w(), T("div", mT, [
                    (w(!0), T(he, null, Fe(_n.value.continueReading, (f) => (w(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => ye(f, B)
                      }, [
                        c("span", yT, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, _T)
                        ])
                      ], 8, bT),
                      c("div", wT, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => ye(f, B)
                          }, [
                            c("bdi", CT, p(f.title), 1)
                          ], 8, ST)
                        ]),
                        f.creators ? (w(), T("p", TT, [
                          c("bdi", ET, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, AT)
                      ])
                    ]))), 128))
                  ])) : (w(), T("p", kT, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", OT, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", NT, p(g(m)("library", "Recently added")), 1),
                      c("p", xT, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${N.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, LT)
                  ]),
                  _n.value.recentlyAdded.length ? (w(), T("div", RT, [
                    (w(!0), T(he, null, Fe(_n.value.recentlyAdded, (f) => (w(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => ye(f, B)
                      }, [
                        c("span", PT, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, DT)
                        ])
                      ], 8, IT),
                      c("div", MT, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => ye(f, B)
                          }, [
                            c("bdi", FT, p(f.title), 1)
                          ], 8, $T)
                        ]),
                        f.creators ? (w(), T("p", zT, [
                          c("bdi", UT, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, BT)
                      ])
                    ]))), 128))
                  ])) : (w(), T("p", HT, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", jT, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", VT, p(g(m)("library", "Shelves")), 1),
                      c("p", GT, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: z.value }, p(g(m)("library", "View all")), 9, KT)
                  ]),
                  fs.value.length ? (w(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (w(!0), T(he, null, Fe(fs.value, (f) => (w(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", YT, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g($n)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, qT))), 128))
                  ], 8, WT)) : (w(), T("p", XT, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Xi.value.count || 0) > 0 ? (w(), T("aside", ZT, [
                  c("div", null, [
                    c("h3", JT, p(g(m)("library", "Needs attention")), 1),
                    c("p", QT, p(g($n)("library", "%n publication needs better details.", "%n publications need better details.", Number(Xi.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Xi.value.url
                  }, p(g(m)("library", "Review")), 9, eE)
                ])) : H("", !0)
              ])) : _e.value ? (w(), T("main", tE, [
                c("header", nE, [
                  c("p", iE, p(g(m)("library", "Your library")), 1),
                  c("h2", aE, p(g(m)("library", "Shelves")), 1),
                  c("p", rE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                tr.value.length ? (w(), T("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (w(!0), T(he, null, Fe(tr.value, (f) => (w(), T("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", lE, [
                      c("strong", null, [
                        c("bdi", cE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g($n)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", uE, [
                      c("bdi", dE, p(f.path), 1)
                    ])
                  ], 8, oE))), 128))
                ], 8, sE)) : (w(), T("section", fE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", hE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", pE, [
                    c("a", {
                      class: "button primary",
                      href: k.value
                    }, p(g(m)("library", "Add a Library root")), 9, vE),
                    c("a", {
                      class: "button secondary",
                      href: N.value
                    }, p(g(m)("library", "All publications")), 9, gE)
                  ])
                ]))
              ])) : (w(), T("section", mE, [
                c("header", bE, [
                  Gi.value ? (w(), T("p", yE, p(Ja.value), 1)) : H("", !0),
                  c("h2", _E, p(wi.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Ke(In, ["prevent"])
                  }, [
                    (w(!0), T(he, null, Fe(Yi.value, (f) => (w(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, CE))), 128)),
                    c("div", TE, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          Oe(p(g(m)("library", "Search")) + " ", 1),
                          b[36] || (b[36] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        We(c("input", {
                          ref_key: "quickSearchInput",
                          ref: Ra,
                          "onUpdate:modelValue": b[1] || (b[1] = (f) => P.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: Qp
                        }, null, 40, AE), [
                          [Cn, P.q]
                        ])
                      ], 8, EE)
                    ]),
                    c("label", kE, [
                      Oe(p(g(m)("library", "Sort")), 1),
                      We(c("select", {
                        "onUpdate:modelValue": b[2] || (b[2] = (f) => P.sort = f),
                        name: "sort",
                        onChange: In
                      }, [
                        c("option", OE, p(g(m)("library", "Title")), 1),
                        c("option", NE, p(g(m)("library", "Date added")), 1),
                        c("option", xE, p(g(m)("library", "Publication date")), 1),
                        c("option", LE, p(g(m)("library", "Series")), 1),
                        c("option", RE, p(g(m)("library", "Recently opened")), 1),
                        c("option", IE, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [Mn, P.sort]
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
                        class: Te({ active: jt.value === "compact" }),
                        "aria-pressed": jt.value === "compact" ? "true" : "false",
                        onClick: b[3] || (b[3] = (f) => _s("compact"))
                      }, p(g(m)("library", "Compact")), 11, DE),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Te({ active: jt.value === "gallery" }),
                        "aria-pressed": jt.value === "gallery" ? "true" : "false",
                        onClick: b[4] || (b[4] = (f) => _s("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, ME),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Te({ active: jt.value === "list" }),
                        "aria-pressed": jt.value === "list" ? "true" : "false",
                        onClick: b[5] || (b[5] = (f) => _s("list"))
                      }, p(g(m)("library", "List")), 11, $E),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Te({ active: jt.value === "shelf" }),
                        "aria-pressed": jt.value === "shelf" ? "true" : "false",
                        onClick: b[6] || (b[6] = (f) => _s("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, FE)
                    ], 8, PE)
                  ], 40, SE),
                  c("details", zE, [
                    c("summary", UE, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, BE),
                      c("b", HE, p(P.shelf ? g(m)("library", "this shelf") : qi.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Ke(iv, ["prevent"])
                    }, [
                      c("label", null, [
                        Oe(p(g(m)("library", "Type")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[7] || (b[7] = (f) => P.type = f),
                          name: "type"
                        }, [
                          c("option", VE, p(g(m)("library", "All types")), 1),
                          (w(!0), T(he, null, Fe(O.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, GE))), 128))
                        ], 512), [
                          [Mn, P.type]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Publisher")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[8] || (b[8] = (f) => P.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", KE, p(g(m)("library", "All publishers")), 1),
                          (w(!0), T(he, null, Fe(A.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, WE))), 128))
                        ], 512), [
                          [Mn, P.publisher]
                        ])
                      ]),
                      c("div", qE, [
                        c("label", YE, p(g(m)("library", "Series / periodical")), 1),
                        We(c("input", {
                          id: "library-publication-search",
                          "onUpdate:modelValue": b[9] || (b[9] = (f) => ce.value = f),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-publication-suggestions",
                          "aria-expanded": X.value && me.value.length > 0 ? "true" : "false",
                          onFocus: b[10] || (b[10] = (f) => X.value = !0),
                          onKeydown: b[11] || (b[11] = kt((f) => X.value = !1, ["escape"]))
                        }, null, 40, XE), [
                          [Cn, ce.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: P.publication
                        }, null, 8, ZE),
                        X.value && me.value.length > 0 ? (w(), T("ul", JE, [
                          (w(!0), T(he, null, Fe(me.value, (f) => (w(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: b[12] || (b[12] = Ke(() => {
                              }, ["prevent"])),
                              onClick: (B) => tv(f, B)
                            }, p(f), 41, QE)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", eA, p(g(m)("library", "Apply series")), 1)
                      ]),
                      c("div", tA, [
                        c("label", nA, p(g(m)("library", "Publication year")), 1),
                        We(c("input", {
                          id: "library-year-search",
                          "onUpdate:modelValue": b[13] || (b[13] = (f) => ge.value = f),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-year-suggestions",
                          "aria-expanded": Be.value && it.value.length > 0 ? "true" : "false",
                          onFocus: b[14] || (b[14] = (f) => Be.value = !0),
                          onKeydown: b[15] || (b[15] = kt((f) => Be.value = !1, ["escape"]))
                        }, null, 40, iA), [
                          [Cn, ge.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "year",
                          value: P.year
                        }, null, 8, aA),
                        Be.value && it.value.length > 0 ? (w(), T("ul", rA, [
                          (w(!0), T(he, null, Fe(it.value, (f) => (w(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: b[16] || (b[16] = Ke(() => {
                              }, ["prevent"])),
                              onClick: (B) => rv(f, B)
                            }, p(f), 41, sA)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", oA, p(g(m)("library", "Apply year")), 1)
                      ]),
                      c("div", lA, [
                        c("label", cA, p(g(m)("library", "Creator")), 1),
                        We(c("input", {
                          id: "library-creator-search",
                          "onUpdate:modelValue": b[17] || (b[17] = (f) => M.value = f),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search creators"),
                          title: g(m)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-creator-suggestions",
                          "aria-expanded": Y.value && ie.value.length > 0 ? "true" : "false",
                          onFocus: b[18] || (b[18] = (f) => Y.value = !0),
                          onKeydown: b[19] || (b[19] = kt((f) => Y.value = !1, ["escape"]))
                        }, null, 40, uA), [
                          [Cn, M.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "creator",
                          value: P.creator
                        }, null, 8, dA),
                        Y.value && ie.value.length > 0 ? (w(), T("ul", fA, [
                          (w(!0), T(he, null, Fe(ie.value, (f) => (w(), T("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: b[20] || (b[20] = Ke(() => {
                              }, ["prevent"])),
                              onClick: (B) => av(f, B)
                            }, p(f), 41, hA)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", pA, p(g(m)("library", "Apply creator")), 1)
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Nextcloud tag")), 1),
                        We(c("input", {
                          "onUpdate:modelValue": b[21] || (b[21] = (f) => P.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, vA), [
                          [Cn, P.tag]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Format")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[22] || (b[22] = (f) => P.format = f),
                          name: "format"
                        }, [
                          c("option", gA, p(g(m)("library", "All formats")), 1),
                          (w(!0), T(he, null, Fe(E.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(ar(f)), 9, mA))), 128))
                        ], 512), [
                          [Mn, P.format]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Shelf")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[23] || (b[23] = (f) => P.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", bA, p(g(m)("library", "All shelves")), 1),
                          (w(!0), T(he, null, Fe(S.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, yA))), 128))
                        ], 512), [
                          [Mn, P.shelf]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Scan status")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[24] || (b[24] = (f) => P.status = f),
                          name: "status"
                        }, [
                          c("option", _A, p(g(m)("library", "All scan statuses")), 1),
                          (w(!0), T(he, null, Fe($.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, wA))), 128))
                        ], 512), [
                          [Mn, P.status]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Workflow status")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[25] || (b[25] = (f) => P.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", SA, p(g(m)("library", "All workflow statuses")), 1),
                          (w(!0), T(he, null, Fe(G.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, CA))), 128))
                        ], 512), [
                          [Mn, P.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Genre")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[26] || (b[26] = (f) => P.genre = f),
                          name: "genre"
                        }, [
                          c("option", TA, p(g(m)("library", "All genres")), 1),
                          (w(!0), T(he, null, Fe(F.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, EA))), 128))
                        ], 512), [
                          [Mn, P.genre]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Classification")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[27] || (b[27] = (f) => P.classification = f),
                          name: "classification"
                        }, [
                          c("option", AA, p(g(m)("library", "All classifications")), 1),
                          (w(!0), T(he, null, Fe(le.value, (f) => (w(), T("option", {
                            key: f,
                            value: f
                          }, p(f), 9, kA))), 128))
                        ], 512), [
                          [Mn, P.classification]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Suggested updates")), 1),
                        We(c("select", {
                          "onUpdate:modelValue": b[28] || (b[28] = (f) => P.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", OA, p(g(m)("library", "All metadata")), 1),
                          c("option", NA, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [Mn, P.scannerConflicts]
                        ])
                      ]),
                      c("button", xA, p(g(m)("library", "Apply filters")), 1),
                      c("a", LA, p(g(m)("library", "Clear")), 1)
                    ], 40, jE)
                  ]),
                  c("section", RA, [
                    c("h3", IA, p(g(m)("library", "Shelves")), 1)
                  ]),
                  c("section", PA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, DA),
                    c("form", {
                      method: "post",
                      action: dl.value,
                      class: "library-saved-collection-save-form",
                      title: yl.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ve.value
                      }, null, 8, $A),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: lv.value
                      }, null, 8, FA),
                      c("label", null, [
                        Oe(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !yl.value,
                          autocomplete: "off"
                        }, null, 8, zA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !yl.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, UA)
                    ], 8, MA),
                    Aa.value.length > 0 ? (w(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (w(!0), T(he, null, Fe(Aa.value, (f) => (w(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: uv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g($n)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, HA),
                        c("form", {
                          method: "post",
                          action: dv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ve.value
                          }, null, 8, VA),
                          c("button", GA, p(g(m)("library", "Delete")), 1)
                        ], 8, jA)
                      ]))), 128))
                    ], 8, BA)) : H("", !0)
                  ]),
                  Yt.value.length > 0 ? (w(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", WA, [
                      b[37] || (b[37] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, qA),
                      c("small", YA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", XA, p(g($n)("library", "%n publication selected", "%n publications selected", Yt.value.length)), 1)
                    ]),
                    c("p", ZA, p(g($n)("library", "%n publication selected", "%n publications selected", Yt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: vl
                    }, [
                      c("form", {
                        method: "post",
                        action: Tt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, QA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, e2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, t2)
                      ], 8, JA),
                      c("form", {
                        method: "post",
                        action: Lt.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, i2),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, a2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, r2)
                      ], 8, n2),
                      c("form", {
                        method: "post",
                        action: qt.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, o2),
                        (w(!0), T(he, null, Fe(Oa.value, (f) => (w(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, l2))), 128)),
                        b[38] || (b[38] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, c2)
                      ], 8, s2),
                      c("form", {
                        method: "post",
                        action: Kn.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, d2),
                        (w(!0), T(he, null, Fe(Oa.value, (f) => (w(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, f2))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", h2, [
                            c("option", p2, p(g(m)("library", "Publication type")), 1),
                            c("option", v2, p(g(m)("library", "Subtitle")), 1),
                            c("option", g2, p(g(m)("library", "Creators")), 1),
                            c("option", m2, p(g(m)("library", "Series / periodical")), 1),
                            c("option", b2, p(g(m)("library", "Publication date")), 1),
                            c("option", y2, p(g(m)("library", "Language")), 1),
                            c("option", _2, p(g(m)("library", "Publisher")), 1),
                            c("option", w2, p(g(m)("library", "Genres")), 1),
                            c("option", S2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, C2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, T2)
                      ], 8, u2),
                      c("form", {
                        method: "post",
                        action: ut.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ve.value
                        }, null, 8, A2),
                        (w(!0), T(he, null, Fe(Oa.value, (f) => (w(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, k2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, O2)
                      ], 8, E2)
                    ], 32)
                  ], 8, KA)) : H("", !0)
                ], 8, wE),
                Xn.value ? (w(), T("p", N2, p(Xn.value), 1)) : H("", !0),
                Ea.value ? (w(), T("p", x2, p(Ea.value), 1)) : H("", !0),
                Qt.value ? (w(), T("p", L2, p(Qt.value), 1)) : H("", !0),
                Gi.value ? (w(), T("section", R2, [
                  c("p", I2, p(Ja.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: Vi.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : qn.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Yn.value), 9, P2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g($n)("library", "%n item", "%n items", ne.value.total)), 1),
                    R.value?.earliestYear && R.value?.latestYear ? (w(), T("span", M2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    R.value?.datedCount ? (w(), T("span", $2, p(R.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : H("", !0),
                    R.value?.undatedCount > 0 ? (w(), T("span", F2, p(R.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : H("", !0)
                  ], 8, D2),
                  Wn.value && R.value ? (w(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g($n)("library", "%n item", "%n items", R.value.itemCount)), 1),
                    R.value.earliestYear && R.value.latestYear ? (w(), T("span", U2, p(R.value.earliestYear) + "–" + p(R.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(R.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    R.value.undatedCount > 0 ? (w(), T("span", B2, p(R.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, z2)) : H("", !0),
                  Wn.value && R.value?.issueGroups?.length ? (w(), T("section", H2, [
                    c("div", null, [
                      c("p", j2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, V2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (w(!0), T(he, null, Fe(R.value.issueGroups, (f) => (w(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g($n)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, K2))), 128))
                    ], 8, G2),
                    R.value.gapRanges?.length ? (w(), T("p", W2, p(g(m)("library", "Gap")) + ": " + p(R.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (w(!0), T(he, null, Fe(R.value.issueGroups, (f) => (w(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (w(!0), T(he, null, Fe(f.items, (B, fe) => (w(), T("li", {
                          key: B.itemId
                        }, [
                          c("span", q2, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, Y2),
                          c("small", null, [
                            Oe(p(B.publicationType), 1),
                            B.publicationDate ? (w(), T(he, { key: 0 }, [
                              Oe(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", X2, [
                            fe > 0 ? (w(), T(he, { key: 0 }, [
                              Oe(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            fe > 0 && fe < f.items.length - 1 ? (w(), T(he, { key: 1 }, [
                              Oe(" · ")
                            ], 64)) : H("", !0),
                            fe < f.items.length - 1 ? (w(), T(he, { key: 2 }, [
                              Oe(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    R.value.unknownIssueItems?.length ? (w(), T("details", Z2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(R.value.unknownIssueItems.length), 9, J2)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: N.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, Q2)
                  ])
                ])) : H("", !0),
                c("div", ek, [
                  c("p", tk, [
                    Oe(p(g(m)("library", "Showing")) + " " + p(ne.value.from) + "–" + p(ne.value.to) + " " + p(g(m)("library", "of")) + " " + p(ne.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    qi.value.length > 0 ? (w(), T("span", nk, [
                      b[39] || (b[39] = Oe(" · ", -1)),
                      c("a", ik, p(g(m)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", rk, [
                      Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                      ne.value.total > 0 ? (w(), T("span", sk, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                    ]),
                    ne.value.previousUrl ? (w(), T("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, ok)) : (w(), T("span", lk, p(g(m)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (w(), T("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, ck)) : (w(), T("span", uk, p(g(m)("library", "Next")), 1))
                  ], 8, ak)
                ]),
                qi.value.length > 0 ? (w(), T("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (w(!0), T(he, null, Fe(qi.value, (f) => (w(), T("a", {
                    key: f.key,
                    href: bl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Ke((B) => sv(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Oe(" " + p(f.value) + " ", 1),
                    b[40] || (b[40] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, fk))), 128))
                ], 8, dk)) : H("", !0),
                h.value.length === 0 ? (w(), T("div", {
                  key: 5,
                  class: Te(["library-empty-content", { "library-first-run-guidance": Ca.value || Ta.value, "library-filter-empty-state": Ki.value && !Ca.value && !Ta.value }]),
                  role: "status"
                }, [
                  Ca.value ? (w(), T(he, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, hk),
                    c("p", pk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, vk),
                      c("span", gk, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ta.value ? (w(), T(he, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, mk),
                    c("p", bk, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, yk)
                    ])
                  ], 64)) : Ki.value ? (w(), T(he, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, _k),
                    c("p", wk, [
                      c("a", {
                        href: ov(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, Sk),
                      c("a", Ck, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (w(), T(he, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, Tk),
                    c("p", Ek, [
                      c("a", {
                        href: k.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, Ak)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (w(), T("label", kk, [
                  c("input", {
                    type: "checkbox",
                    checked: Yt.value.length === h.value.length,
                    onChange: hl
                  }, null, 40, Ok),
                  Oe(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && jt.value === "list" ? (w(), T("ul", Nk, [
                  (w(!0), T(he, null, Fe(h.value, (f) => (w(), T("li", {
                    key: f.id,
                    class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Zi.value.has(Number(f.id)), "library-catalogue-list-row--open": bt.value && Number(xn.value) === Number(f.id) }])
                  }, [
                    c("label", xk, [
                      c("input", {
                        type: "checkbox",
                        checked: Zi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => hs(f.id, B.currentTarget.checked)
                      }, null, 40, Lk)
                    ]),
                    c("div", Rk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => ye(f, B)
                      }, [
                        c("bdi", Pk, p(f.title), 1)
                      ], 8, Ik),
                      f.creators ? (w(), T("span", Dk, [
                        c("bdi", Mk, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", $k, [
                      f.publication ? (w(), T("div", Fk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", zk, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (w(), T("div", Uk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (w(), T("div", Bk, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Te(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? ar(f.extension) : f.publicationType), 11, Hk)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (w(), T("div", jk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Vk, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", Gk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, Kk),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => ye(f, B)
                      }, p(g(m)("library", "Details")), 9, Wk)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (w(), T("div", {
                  key: 8,
                  class: Te(["library-cover-gallery", er.value])
                }, [
                  (w(!0), T(he, null, Fe(h.value, (f) => (w(), T("article", {
                    key: f.id,
                    class: Te(["library-cover-card", { "library-cover-card--cover-loaded": rr(f) === "loaded", "library-cover-card--cover-error": rr(f) === "error", "library-cover-card--selected": Zi.value.has(Number(f.id)), "library-cover-card--open": bt.value && Number(xn.value) === Number(f.id) }])
                  }, [
                    c("label", qk, [
                      c("input", {
                        type: "checkbox",
                        checked: Zi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => hs(f.id, B.currentTarget.checked)
                      }, null, 40, Yk)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": bt.value && Number(xn.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => ye(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, Zk),
                      c("span", Jk, [
                        rr(f) === "loading" ? (w(), T("span", Qk)) : H("", !0),
                        c("img", {
                          class: Te(["library-cover-image", { "library-cover-image--loaded": rr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => fv(f),
                          onError: (B) => hv(f)
                        }, null, 42, eO),
                        rr(f) === "error" ? (w(), T("span", tO, p(g(m)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, Xk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ke((B) => Ou(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ve.value
                      }, null, 8, iO),
                      b[41] || (b[41] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, aO),
                      c("button", {
                        type: "submit",
                        class: Te(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": sr[f.id] ? "true" : void 0,
                        disabled: sr[f.id],
                        onClick: Ke((B) => Ou(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, rO),
                      or[f.id] ? (w(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(or[f.id]), 9, sO)) : H("", !0)
                    ], 40, nO),
                    c("div", oO, [
                      c("div", lO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => ye(f, B)
                          }, [
                            c("bdi", dO, p(f.title), 1)
                          ], 8, uO)
                        ], 8, cO),
                        f.creators ? (w(), T("p", fO, [
                          c("bdi", hO, p(f.creators), 1)
                        ])) : H("", !0),
                        _l(f) || f.extension ? (w(), T("div", pO, [
                          f.extension ? (w(), T("span", vO, [
                            c("bdi", gO, p(ar(f.extension)), 1)
                          ])) : H("", !0),
                          _l(f) ? (w(), T("p", mO, [
                            c("bdi", bO, p(_l(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", yO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, _O),
                          we(g(po), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: ke(() => [
                              we(g(Fa), {
                                href: f.filesUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              we(g(Fa), {
                                href: f.downloadUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              we(g(Fa), {
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
                h.value.length > 0 ? (w(), T("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", SO, [
                    Oe(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (w(), T("span", CO, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.previousUrl ? (w(), T("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, TO)) : (w(), T("span", EO, p(g(m)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (w(), T("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, AO)) : (w(), T("span", kO, p(g(m)("library", "Next")), 1))
                ], 8, wO)) : H("", !0)
              ]))
            ], 8, dC)
          ]),
          _: 1
        }),
        we(g(WS), {
          ref_key: "sidebarComponent",
          ref: Zn,
          class: "library-native-item-sidebar",
          open: bt.value,
          "no-toggle": "",
          loading: dt.loading,
          name: Se.value?.title || g(m)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: Ln.value ? "dialog" : void 0,
          "aria-modal": Ln.value ? "true" : void 0,
          "aria-labelledby": Ln.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Ln.value && Se.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Qe,
          onClosed: It,
          onClose: Ve
        }, {
          default: ke(() => [
            c("div", OO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: nr,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Se.value?.title || g(m)("library", "Publication details")), 513),
              dt.loading && !Se.value ? (w(), T("p", NO, p(g(m)("library", "Loading publication details…")), 1)) : dt.error ? (w(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: dt.missing ? "status" : "alert"
              }, [
                c("p", null, p(dt.error), 1),
                dt.missing ? H("", !0) : (w(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[29] || (b[29] = (f) => ue(xn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, xO)) : Se.value ? (w(), T(he, { key: 2 }, [
                c("p", LO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", RO, [
                  c("span", IO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Se.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, PO),
                  c("div", DO, [
                    c("p", MO, [
                      c("bdi", $O, p(Se.value.publicationType || g(m)("library", "Publication")), 1),
                      Se.value.extension ? (w(), T("span", FO, [
                        b[42] || (b[42] = Oe(" · ", -1)),
                        c("bdi", zO, p(ar(Se.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", UO, [
                      c("a", {
                        class: "button primary",
                        href: Se.value.openUrl
                      }, p(g(m)("library", "Open")), 9, BO),
                      we(g(po), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          we(g(Fa), {
                            href: Se.value.filesUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          we(g(Fa), {
                            href: Se.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          we(g(Fa), {
                            href: Se.value.detailsUrl
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
                  (w(), T(he, null, Fe(vs, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Te({ active: Vt.value === f.key }),
                    "aria-current": Vt.value === f.key ? "page" : void 0,
                    onClick: (B) => Vt.value = f.key
                  }, p(g(m)("library", f.label)), 11, jO)), 64))
                ], 8, HO),
                Vt.value === "overview" ? (w(), T("section", VO, [
                  c("h3", GO, p(g(m)("library", "Overview")), 1),
                  Se.value.description ? (w(), T("p", KO, [
                    c("bdi", WO, p(Se.value.description), 1)
                  ])) : H("", !0),
                  c("dl", qO, [
                    Se.value.publication ? (w(), T("div", YO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Se.value.publication), 1)
                    ])) : H("", !0),
                    Se.value.publicationDate ? (w(), T("div", XO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Se.value.publicationDate), 1)
                    ])) : H("", !0),
                    Se.value.publisher ? (w(), T("div", ZO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Se.value.publisher), 1)
                    ])) : H("", !0),
                    Se.value.language ? (w(), T("div", JO, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Se.value.language), 1)
                    ])) : H("", !0),
                    Se.value.shelf ? (w(), T("div", QO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Se.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Vt.value === "metadata" ? (w(), T("section", eN, [
                  c("h3", tN, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ke(ml, ["prevent"])
                  }, [
                    c("label", null, [
                      Oe(p(g(m)("library", "Title")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": b[30] || (b[30] = (f) => ct.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Cn, ct.title]
                      ])
                    ]),
                    c("label", null, [
                      Oe(p(g(m)("library", "Publication date")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": b[31] || (b[31] = (f) => ct.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, nN), [
                        [Cn, ct.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (w(!0), T(he, null, Fe(ct.identifiers, (f, B) => (w(), T("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        We(c("input", {
                          "onUpdate:modelValue": (fe) => f.scheme = fe,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, iN), [
                          [Cn, f.scheme]
                        ]),
                        We(c("input", {
                          "onUpdate:modelValue": (fe) => f.displayValue = fe,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, aN), [
                          [Cn, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (fe) => gl(B)
                        }, p(g(m)("library", "Remove")), 9, rN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ms
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", sN, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    en.error ? (w(), T("p", oN, p(en.error), 1)) : en.saved ? (w(), T("p", lN, p(g(m)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: en.saving
                    }, p(en.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, cN)
                  ], 32),
                  Z(Se.value).length ? (w(), T("section", uN, [
                    c("h4", dN, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", fN, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (w(!0), T(he, null, Fe(Z(Se.value), (f) => (w(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Oe(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          b[43] || (b[43] = c("br", null, null, -1)),
                          Oe(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (w(), T("section", hN, [
                  c("h3", pN, p(g(m)("library", "Activity")), 1),
                  c("dl", vN, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Se.value.scanStatus || "—"), 1)
                    ]),
                    Se.value.workflowStatus ? (w(), T("div", gN, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Se.value.workflowStatus), 1)
                    ])) : H("", !0),
                    Se.value.metadataSource ? (w(), T("div", mN, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Se.value.metadataSource), 1)
                    ])) : H("", !0),
                    Se.value.cachedPath ? (w(), T("div", bN, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", yN, p(Se.value.cachedPath), 1)
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
                    disabled: !Qn.value,
                    onClick: b[32] || (b[32] = (f) => ft(Qn.value))
                  }, p(g(m)("library", "Previous item")), 9, wN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !xa.value,
                    onClick: b[33] || (b[33] = (f) => ft(xa.value))
                  }, p(g(m)("library", "Next item")), 9, SN)
                ], 8, _N)
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
function kN() {
  window.LibraryStartupWatchdog?.fail();
}
function ON(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = tu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !ON(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Qm(AN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  kN(), console.error("[library] Vue startup failed", e);
}
