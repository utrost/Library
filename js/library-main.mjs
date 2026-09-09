// @__NO_SIDE_EFFECTS__
function zi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const xe = {}, Lr = [], qt = () => {
}, bs = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), et = Object.assign, Wi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jo = Object.prototype.hasOwnProperty, Se = (e, t) => jo.call(e, t), ee = Array.isArray, pr = (e) => mn(e) === "[object Map]", Ar = (e) => mn(e) === "[object Set]", _a = (e) => mn(e) === "[object Date]", ue = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", we = (e) => e !== null && typeof e == "object", ys = (e) => (we(e) || ue(e)) && ue(e.then) && ue(e.catch), gs = Object.prototype.toString, mn = (e) => gs.call(e), Vo = (e) => mn(e).slice(8, -1), _s = (e) => mn(e) === "[object Object]", Ki = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ zi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, qo = /-\w/g, Rt = Yn(
  (e) => e.replace(qo, (t) => t.slice(1).toUpperCase())
), Bo = /\B([A-Z])/g, kr = Yn(
  (e) => e.replace(Bo, "-$1").toLowerCase()
), vs = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ui = Yn(
  (e) => e ? `on${vs(e)}` : ""
), Vt = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Ss = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Xn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let va;
const Jn = () => va || (va = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gi(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? Go(n) : Gi(n);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (Ue(e) || we(e))
    return e;
}
const zo = /;(?![^(]*\))/g, Wo = /:([^]+)/, Ko = /\/\*[^]*?\*\//g;
function Go(e) {
  const t = {};
  return e.replace(Ko, "").split(zo).forEach((r) => {
    if (r) {
      const n = r.split(Wo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ur(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ur(e[r]);
      n && (t += n + " ");
    }
  else if (we(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xo = /* @__PURE__ */ zi(Yo);
function Es(e) {
  return !!e || e === "";
}
function Jo(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = hr(e[n], t[n]);
  return r;
}
function Sa(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let a = -1;
    for (let l = 0; l < r.length; l++)
      if (!n[l] && hr(i, r[l])) {
        a = l;
        break;
      }
    if (a < 0) return !1;
    n[a] = 1;
  }
  return !0;
}
function hr(e, t) {
  if (e === t) return !0;
  let r = _a(e), n = _a(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Bt(e), n = Bt(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Jo(e, t) : !1;
  if (r = we(e), n = we(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = pr(e), n = pr(t), r || n || (r = Ar(e), n = Ar(t), r || n))
      return r && n ? Sa(e, t) : !1;
    const i = Object.keys(e).length, a = Object.keys(t).length;
    if (i !== a)
      return !1;
    for (const l in e) {
      const u = e.hasOwnProperty(l), p = t.hasOwnProperty(l);
      if (u && !p || !u && p || !hr(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zo(e, t) {
  return e.findIndex((r) => hr(r, t));
}
const Ts = (e) => !!(e && e.__v_isRef === !0), c = (e) => Ue(e) ? e : e == null ? "" : ee(e) || we(e) && (e.toString === gs || !ue(e.toString)) ? Ts(e) ? c(e.value) : JSON.stringify(e, ws, 2) : String(e), ws = (e, t) => Ts(t) ? ws(e, t.value) : pr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], a) => (r[di(n, a) + " =>"] = i, r),
    {}
  )
} : Ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => di(r))
} : Bt(t) ? di(t) : we(t) && !ee(t) && !_s(t) ? String(t) : t, di = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ye;
class Qo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ye && (Ye.active ? (this.parent = Ye, this.index = (Ye.scopes || (Ye.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, r = n.length; t < r; t++)
          n[t].pause();
      }
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, r = i.length; t < r; t++)
          i[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ye, Ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ye === this)
        Ye = this.prevScope;
      else {
        let t = Ye;
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
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (r = 0, n = i.length; r < n; r++)
          i[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function el() {
  return Ye;
}
let ke;
const fi = /* @__PURE__ */ new WeakSet();
class Cs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ye && (Ye.active ? Ye.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fi.has(this) && (fi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || As(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ea(this), ks(this);
    const t = ke, r = Ot;
    ke = this, Ot = !0;
    try {
      return this.fn();
    } finally {
      Rs(this), ke = t, Ot = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ji(t);
      this.deps = this.depsTail = void 0, Ea(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ii(this) && this.run();
  }
  get dirty() {
    return Ii(this);
  }
}
let xs = 0, nn, an;
function As(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = an, an = e;
    return;
  }
  e.next = nn, nn = e;
}
function Yi() {
  xs++;
}
function Xi() {
  if (--xs > 0)
    return;
  if (an) {
    let t = an;
    for (an = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; nn; ) {
    let t = nn;
    for (nn = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Ji(n), tl(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Os(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Os(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn) || (e.globalVersion = cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ii(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = ke, n = Ot;
  ke = e, Ot = !0;
  try {
    ks(e);
    const i = e.fn(e._value);
    (t.version === 0 || Vt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ke = r, Ot = n, Rs(e), e.flags &= -3;
  }
}
function Ji(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      Ji(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function tl(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ot = !0;
const Ns = [];
function er() {
  Ns.push(Ot), Ot = !1;
}
function tr() {
  const e = Ns.pop();
  Ot = e === void 0 ? !0 : e;
}
function Ea(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = r;
    }
  }
}
let cn = 0;
class rl {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ke || !Ot || ke === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ke)
      r = this.activeLink = new rl(ke, this), ke.deps ? (r.prevDep = ke.depsTail, ke.depsTail.nextDep = r, ke.depsTail = r) : ke.deps = ke.depsTail = r, Ps(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = ke.depsTail, r.nextDep = void 0, ke.depsTail.nextDep = r, ke.depsTail = r, ke.deps === r && (ke.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, cn++, this.notify(t);
  }
  notify(t) {
    Yi();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Xi();
    }
  }
}
function Ps(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ps(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Mi = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ Symbol(
  ""
), Li = /* @__PURE__ */ Symbol(
  ""
), un = /* @__PURE__ */ Symbol(
  ""
);
function Ze(e, t, r) {
  if (Ot && ke) {
    let n = Mi.get(e);
    n || Mi.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Zi()), i.map = n, i.key = r), i.track();
  }
}
function Jt(e, t, r, n, i, a) {
  const l = Mi.get(e);
  if (!l) {
    cn++;
    return;
  }
  const u = (p) => {
    p && p.trigger();
  };
  if (Yi(), t === "clear")
    l.forEach(u);
  else {
    const p = ee(e), v = p && Ki(r);
    if (p && r === "length") {
      const y = Number(n);
      l.forEach((S, P) => {
        (P === "length" || P === un || !Bt(P) && P >= y) && u(S);
      });
    } else
      switch ((r !== void 0 || l.has(void 0)) && u(l.get(r)), v && u(l.get(un)), t) {
        case "add":
          p ? v && u(l.get("length")) : (u(l.get(wr)), pr(e) && u(l.get(Li)));
          break;
        case "delete":
          p || (u(l.get(wr)), pr(e) && u(l.get(Li)));
          break;
        case "set":
          pr(e) && u(l.get(wr));
          break;
      }
  }
  Xi();
}
function Or(e) {
  const t = /* @__PURE__ */ ve(e);
  return t === e ? t : (Ze(t, "iterate", un), /* @__PURE__ */ xt(e) ? t : t.map(Nt));
}
function Zn(e) {
  return Ze(e = /* @__PURE__ */ ve(e), "iterate", un), e;
}
function $t(e, t) {
  return /* @__PURE__ */ rr(e) ? $r(/* @__PURE__ */ Cr(e) ? Nt(t) : t) : Nt(t);
}
const nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return pi(this, Symbol.iterator, (e) => $t(this, e));
  },
  concat(...e) {
    return Or(this).concat(
      ...e.map((t) => ee(t) ? Or(t) : t)
    );
  },
  entries() {
    return pi(this, "entries", (e) => (e[1] = $t(this, e[1]), e));
  },
  every(e, t) {
    return Gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => $t(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Gt(
      this,
      "find",
      e,
      t,
      (r) => $t(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gt(
      this,
      "findLast",
      e,
      t,
      (r) => $t(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hi(this, "includes", e);
  },
  indexOf(...e) {
    return hi(this, "indexOf", e);
  },
  join(e) {
    return Or(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Kr(this, "pop");
  },
  push(...e) {
    return Kr(this, "push", e);
  },
  reduce(e, ...t) {
    return Ta(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ta(this, "reduceRight", e, t);
  },
  shift() {
    return Kr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Kr(this, "splice", e);
  },
  toReversed() {
    return Or(this).toReversed();
  },
  toSorted(e) {
    return Or(this).toSorted(e);
  },
  toSpliced(...e) {
    return Or(this).toSpliced(...e);
  },
  unshift(...e) {
    return Kr(this, "unshift", e);
  },
  values() {
    return pi(this, "values", (e) => $t(this, e));
  }
};
function pi(e, t, r) {
  const n = Zn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const a = i._next();
    return a.done || (a.value = r(a.value)), a;
  }), i;
}
const il = Array.prototype;
function Gt(e, t, r, n, i, a) {
  const l = Zn(e), u = l !== e && !/* @__PURE__ */ xt(e), p = l[t];
  if (p !== il[t]) {
    const S = p.apply(e, a);
    return u ? Nt(S) : S;
  }
  let v = r;
  l !== e && (u ? v = function(S, P) {
    return r.call(this, $t(e, S), P, e);
  } : r.length > 2 && (v = function(S, P) {
    return r.call(this, S, P, e);
  }));
  const y = p.call(l, v, n);
  return u && i ? i(y) : y;
}
function Ta(e, t, r, n) {
  const i = Zn(e), a = i !== e && !/* @__PURE__ */ xt(e);
  let l = r, u = !1;
  i !== e && (a ? (u = n.length === 0, l = function(v, y, S) {
    return u && (u = !1, v = $t(e, v)), r.call(this, v, $t(e, y), S, e);
  }) : r.length > 3 && (l = function(v, y, S) {
    return r.call(this, v, y, S, e);
  }));
  const p = i[t](l, ...n);
  return u ? $t(e, p) : p;
}
function hi(e, t, r) {
  const n = /* @__PURE__ */ ve(e);
  Ze(n, "iterate", un);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ ta(r[0]) ? (r[0] = /* @__PURE__ */ ve(r[0]), n[t](...r)) : i;
}
function Kr(e, t, r = []) {
  er(), Yi();
  const n = (/* @__PURE__ */ ve(e))[t].apply(e, r);
  return Xi(), tr(), n;
}
const al = /* @__PURE__ */ zi("__proto__,__v_isRef,__isVue"), Is = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function sl(e) {
  Bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ve(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
}
class Ms {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (i ? a ? bl : Fs : a ? Ds : Us).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = ee(t);
    if (!i) {
      let p;
      if (l && (p = nl[r]))
        return p;
      if (r === "hasOwnProperty")
        return sl;
    }
    const u = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qe(t) ? t : n
    );
    if ((Bt(r) ? Is.has(r) : al(r)) || (i || Ze(t, "get", r), a))
      return u;
    if (/* @__PURE__ */ Qe(u)) {
      const p = l && Ki(r) ? u : u.value;
      return i && we(p) ? /* @__PURE__ */ Di(p) : p;
    }
    return we(u) ? i ? /* @__PURE__ */ Di(u) : /* @__PURE__ */ fr(u) : u;
  }
}
class Ls extends Ms {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let a = t[r];
    const l = ee(t) && Ki(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ rr(a);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ rr(n) && (a = /* @__PURE__ */ ve(a), n = /* @__PURE__ */ ve(n)), !l && /* @__PURE__ */ Qe(a) && !/* @__PURE__ */ Qe(n))
        return v || (a.value = n), !0;
    }
    const u = l ? Number(r) < t.length : Se(t, r), p = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Qe(t) ? t : i
    );
    return t === /* @__PURE__ */ ve(i) && p && (u ? Vt(n, a) && Jt(t, "set", r, n) : Jt(t, "add", r, n)), p;
  }
  deleteProperty(t, r) {
    const n = Se(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Jt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Bt(r) || !Is.has(r)) && Ze(t, "has", r), n;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      ee(t) ? "length" : wr
    ), Reflect.ownKeys(t);
  }
}
class ol extends Ms {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const ll = /* @__PURE__ */ new Ls(), cl = /* @__PURE__ */ new ol(), ul = /* @__PURE__ */ new Ls(!0);
const Ui = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function dl(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, a = /* @__PURE__ */ ve(i), l = pr(a), u = e === "entries" || e === Symbol.iterator && l, p = e === "keys" && l, v = i[e](...n), y = r ? Ui : t ? $r : Nt;
    return !t && Ze(
      a,
      "iterate",
      p ? Li : wr
    ), et(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: S, done: P } = v.next();
          return P ? { value: S, done: P } : {
            value: u ? [y(S[0]), y(S[1])] : y(S),
            done: P
          };
        }
      }
    );
  };
}
function kn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fl(e, t) {
  const r = {
    get(i) {
      const a = this.__v_raw, l = /* @__PURE__ */ ve(a), u = /* @__PURE__ */ ve(i);
      e || (Vt(i, u) && Ze(l, "get", i), Ze(l, "get", u));
      const { has: p } = An(l), v = t ? Ui : e ? $r : Nt;
      if (p.call(l, i))
        return v(a.get(i));
      if (p.call(l, u))
        return v(a.get(u));
      a !== l && a.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ze(/* @__PURE__ */ ve(i), "iterate", wr), i.size;
    },
    has(i) {
      const a = this.__v_raw, l = /* @__PURE__ */ ve(a), u = /* @__PURE__ */ ve(i);
      return e || (Vt(i, u) && Ze(l, "has", i), Ze(l, "has", u)), i === u ? a.has(i) : a.has(i) || a.has(u);
    },
    forEach(i, a) {
      const l = this, u = l.__v_raw, p = /* @__PURE__ */ ve(u), v = t ? Ui : e ? $r : Nt;
      return !e && Ze(p, "iterate", wr), u.forEach((y, S) => i.call(a, v(y), v(S), l));
    }
  };
  return et(
    r,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(i) {
        const a = /* @__PURE__ */ ve(this), l = An(a), u = /* @__PURE__ */ ve(i), p = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ rr(i) ? u : i;
        return l.has.call(a, p) || Vt(i, p) && l.has.call(a, i) || Vt(u, p) && l.has.call(a, u) || (a.add(p), Jt(a, "add", p, p)), this;
      },
      set(i, a) {
        !t && !/* @__PURE__ */ xt(a) && !/* @__PURE__ */ rr(a) && (a = /* @__PURE__ */ ve(a));
        const l = /* @__PURE__ */ ve(this), { has: u, get: p } = An(l);
        let v = u.call(l, i);
        v || (i = /* @__PURE__ */ ve(i), v = u.call(l, i));
        const y = p.call(l, i);
        return l.set(i, a), v ? Vt(a, y) && Jt(l, "set", i, a) : Jt(l, "add", i, a), this;
      },
      delete(i) {
        const a = /* @__PURE__ */ ve(this), { has: l, get: u } = An(a);
        let p = l.call(a, i);
        p || (i = /* @__PURE__ */ ve(i), p = l.call(a, i)), u && u.call(a, i);
        const v = a.delete(i);
        return p && Jt(a, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ve(this), a = i.size !== 0, l = i.clear();
        return a && Jt(
          i,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = dl(i, e, t);
  }), r;
}
function Qi(e, t) {
  const r = fl(e, t);
  return (n, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Se(r, i) && i in n ? r : n,
    i,
    a
  );
}
const pl = {
  get: /* @__PURE__ */ Qi(!1, !1)
}, hl = {
  get: /* @__PURE__ */ Qi(!1, !0)
}, ml = {
  get: /* @__PURE__ */ Qi(!0, !1)
};
const Us = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
function yl(e) {
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
function fr(e) {
  return /* @__PURE__ */ rr(e) ? e : ea(
    e,
    !1,
    ll,
    pl,
    Us
  );
}
// @__NO_SIDE_EFFECTS__
function gl(e) {
  return ea(
    e,
    !1,
    ul,
    hl,
    Ds
  );
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  return ea(
    e,
    !0,
    cl,
    ml,
    Fs
  );
}
function ea(e, t, r, n, i) {
  if (!we(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const l = yl(Vo(e));
  if (l === 0)
    return e;
  const u = new Proxy(
    e,
    l === 2 ? n : r
  );
  return i.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return /* @__PURE__ */ rr(e) ? /* @__PURE__ */ Cr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ta(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ve(t) : e;
}
function _l(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Ss(e, "__v_skip", !0), e;
}
const Nt = (e) => we(e) ? /* @__PURE__ */ fr(e) : e, $r = (e) => we(e) ? /* @__PURE__ */ Di(e) : e;
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return Sl(e, !1);
}
function Sl(e, t) {
  return /* @__PURE__ */ Qe(e) ? e : new El(e, t);
}
class El {
  constructor(t, r) {
    this.dep = new Zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ve(t), this._value = r ? t : Nt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ rr(t);
    t = n ? t : /* @__PURE__ */ ve(t), Vt(t, r) && (this._rawValue = t, this._value = n ? t : Nt(t), this.dep.trigger());
  }
}
function m(e) {
  return /* @__PURE__ */ Qe(e) ? e.value : e;
}
const Tl = {
  get: (e, t, r) => t === "__v_raw" ? e : m(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Qe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Hs(e) {
  return /* @__PURE__ */ Cr(e) ? e : new Proxy(e, Tl);
}
class wl {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return As(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Os(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, r = !1) {
  let n, i;
  return ue(e) ? n = e : (n = e.get, i = e.set), new wl(n, i, r);
}
const Rn = {}, Fn = /* @__PURE__ */ new WeakMap();
let vr;
function xl(e, t = !1, r = vr) {
  if (r) {
    let n = Fn.get(r);
    n || Fn.set(r, n = []), n.push(e);
  }
}
function Al(e, t, r = xe) {
  const { immediate: n, deep: i, once: a, scheduler: l, augmentJob: u, call: p } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Zt(V, 1) : Zt(V);
  let y, S, P, j, ne = !1, z = !1;
  if (/* @__PURE__ */ Qe(e) ? (S = () => e.value, ne = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ Cr(e) ? (S = () => v(e), ne = !0) : ee(e) ? (z = !0, ne = e.some((V) => /* @__PURE__ */ Cr(V) || /* @__PURE__ */ xt(V)), S = () => e.map((V) => {
    if (/* @__PURE__ */ Qe(V))
      return V.value;
    if (/* @__PURE__ */ Cr(V))
      return v(V);
    if (ue(V))
      return p ? p(V, 2) : V();
  })) : ue(e) ? t ? S = p ? () => p(e, 2) : e : S = () => {
    if (P) {
      er();
      try {
        P();
      } finally {
        tr();
      }
    }
    const V = vr;
    vr = y;
    try {
      return p ? p(e, 3, [j]) : e(j);
    } finally {
      vr = V;
    }
  } : S = qt, t && i) {
    const V = S, le = i === !0 ? 1 / 0 : i;
    S = () => Zt(V(), le);
  }
  const ce = el(), ie = () => {
    y.stop(), ce && ce.active && Wi(ce.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...le) => {
      const Pe = V(...le);
      return ie(), Pe;
    };
  }
  let B = z ? new Array(e.length).fill(Rn) : Rn;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const le = y.run();
        if (V || i || ne || (z ? le.some((Pe, Oe) => Vt(Pe, B[Oe])) : Vt(le, B))) {
          P && P();
          const Pe = vr;
          vr = y;
          try {
            const Oe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              B === Rn ? void 0 : z && B[0] === Rn ? [] : B,
              j
            ];
            B = le, p ? p(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            vr = Pe;
          }
        }
      } else
        y.run();
  };
  return u && u(U), y = new Cs(S), y.scheduler = l ? () => l(U, !1) : U, j = (V) => xl(V, !1, y), P = y.onStop = () => {
    const V = Fn.get(y);
    if (V) {
      if (p)
        p(V, 4);
      else
        for (const le of V) le();
      Fn.delete(y);
    }
  }, t ? n ? U(!0) : B = y.run() : l ? l(U.bind(null, !0), !0) : y.run(), ie.pause = y.pause.bind(y), ie.resume = y.resume.bind(y), ie.stop = ie, ie;
}
function Zt(e, t = 1 / 0, r) {
  if (t <= 0 || !we(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Qe(e))
    Zt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Zt(e[n], t, r);
  else if (Ar(e) || pr(e))
    e.forEach((n) => {
      Zt(n, t, r);
    });
  else if (_s(e)) {
    for (const n in e)
      Zt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Zt(e[n], t, r);
  }
  return e;
}
function bn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Qn(i, t, r);
  }
}
function Pt(e, t, r, n) {
  if (ue(e)) {
    const i = bn(e, t, r, n);
    return i && ys(i) && i.catch((a) => {
      Qn(a, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Pt(e[a], t, r, n));
    return i;
  }
}
function Qn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = t && t.appContext.config || xe;
  if (t) {
    let u = t.parent;
    const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let S = 0; S < y.length; S++)
          if (y[S](e, p, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      er(), bn(a, null, 10, [
        e,
        p,
        v
      ]), tr();
      return;
    }
  }
  kl(e, r, i, n, l);
}
function kl(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ot = [];
let Ht = -1;
const Dr = [];
let dr = null, Ir = 0;
const $s = /* @__PURE__ */ Promise.resolve();
let Hn = null;
function js(e) {
  const t = Hn || $s;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rl(e) {
  let t = Ht + 1, r = ot.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = ot[n], a = dn(i);
    a < e || a === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function ra(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), r = ot[ot.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(r) ? ot.push(e) : ot.splice(Rl(t), 0, e), e.flags |= 1, Vs();
  }
}
function Vs() {
  Hn || (Hn = $s.then(Bs));
}
function Ol(e) {
  if (!ee(e))
    dr && e.id === -1 ? dr.splice(Ir + 1, 0, e) : e.flags & 1 || (Dr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Dr.push(e[t]);
  Vs();
}
function wa(e, t, r = Ht + 1) {
  for (; r < ot.length; r++) {
    const n = ot[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ot.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function qs(e) {
  if (Dr.length) {
    const t = [...new Set(Dr)].sort(
      (r, n) => dn(r) - dn(n)
    );
    if (Dr.length = 0, dr) {
      for (let r = 0; r < t.length; r++)
        dr.push(t[r]);
      return;
    }
    for (dr = t, Ir = 0; Ir < dr.length; Ir++) {
      const r = dr[Ir];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    dr = null, Ir = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bs(e) {
  try {
    for (Ht = 0; Ht < ot.length; Ht++) {
      const t = ot[Ht];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ht < ot.length; Ht++) {
      const t = ot[Ht];
      t && (t.flags &= -2);
    }
    Ht = -1, ot.length = 0, qs(), Hn = null, (ot.length || Dr.length) && Bs();
  }
}
let Ct = null, zs = null;
function $n(e) {
  const t = Ct;
  return Ct = e, zs = e && e.type.__scopeId || null, t;
}
function Nl(e, t = Ct, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && La(-1);
    const a = $n(t), l = xr.length;
    let u;
    try {
      u = e(...i);
    } finally {
      for (let p = xr.length; p > l; p--) go();
      $n(a), n._d && La(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ze(e, t) {
  if (Ct === null)
    return e;
  const r = ii(Ct), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, l, u, p = xe] = t[i];
    a && (ue(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Zt(l), n.push({
      dir: a,
      instance: r,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: p
    }));
  }
  return e;
}
function yr(e, t, r, n) {
  const i = e.dirs, a = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const u = i[l];
    a && (u.oldValue = a[l].value);
    let p = u.dir[n];
    p && (er(), Pt(p, r, 8, [
      e.el,
      u,
      e,
      t
    ]), tr());
  }
}
function Pl(e, t) {
  if (lt) {
    let r = lt.provides;
    const n = lt.parent && lt.parent.provides;
    n === r && (r = lt.provides = Object.create(n)), r[e] = t;
  }
}
function Ln(e, t, r = !1) {
  const n = kc();
  if (n || Fr) {
    let i = Fr ? Fr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ue(t) ? t.call(n && n.proxy) : t;
  }
}
const Il = /* @__PURE__ */ Symbol.for("v-scx"), Ml = () => Ln(Il);
function mi(e, t, r) {
  return Ws(e, t, r);
}
function Ws(e, t, r = xe) {
  const { immediate: n, deep: i, flush: a, once: l } = r, u = et({}, r), p = t && n || !t && a !== "post";
  let v;
  if (hn) {
    if (a === "sync") {
      const j = Ml();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!p) {
      const j = () => {
      };
      return j.stop = qt, j.resume = qt, j.pause = qt, j;
    }
  }
  const y = lt;
  u.call = (j, ne, z) => Pt(j, y, ne, z);
  let S = !1;
  a === "post" ? u.scheduler = (j) => {
    ht(j, y && y.suspense);
  } : a !== "sync" && (S = !0, u.scheduler = (j, ne) => {
    ne ? j() : ra(j);
  }), u.augmentJob = (j) => {
    t && (j.flags |= 4), S && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const P = Al(e, t, u);
  return hn && (v ? v.push(P) : p && P()), P;
}
function Ll(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? Ks(n, e) : () => n[e] : e.bind(n, n);
  let a;
  ue(t) ? a = t : (a = t.handler, r = t);
  const l = yn(this), u = Ws(i, a.bind(n), r);
  return l(), u;
}
function Ks(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Ul = /* @__PURE__ */ Symbol("_vte"), ei = (e) => e.__isTeleport, bi = /* @__PURE__ */ Symbol("_leaveCb");
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== nr) {
        t = r;
        break;
      }
  }
  return t;
}
function Gs(e) {
  if (!ia(e))
    return ei(e.type) && e.children ? Dl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ue(r.default))
      return r.default();
  }
}
function na(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    na(
      ei(r.type) && Gs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ys(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ca(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const jn = /* @__PURE__ */ new WeakMap();
function sn(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (z, ce) => sn(
        z,
        t && (ee(t) ? t[ce] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (on(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && sn(e, t, r, n.component.subTree);
    return;
  }
  const a = n.shapeFlag & 4 ? ii(n.component) : n.el, l = i ? null : a, { i: u, r: p } = e, v = t && t.r, y = u.refs === xe ? u.refs = {} : u.refs, S = u.setupState, P = /* @__PURE__ */ ve(S), j = S === xe ? bs : (z) => Ca(y, z) ? !1 : Se(P, z), ne = (z, ce) => !(ce && Ca(y, ce));
  if (v != null && v !== p) {
    if (xa(t), Ue(v))
      y[v] = null, j(v) && (S[v] = null);
    else if (/* @__PURE__ */ Qe(v)) {
      const z = t;
      ne(v, z.k) && (v.value = null), z.k && (y[z.k] = null);
    }
  }
  if (ue(p))
    bn(p, u, 12, [l, y]);
  else {
    const z = Ue(p), ce = /* @__PURE__ */ Qe(p);
    if (z || ce) {
      const ie = () => {
        if (e.f) {
          const B = z ? j(p) ? S[p] : y[p] : ne() || !e.k ? p.value : y[e.k];
          if (i)
            ee(B) && Wi(B, a);
          else if (ee(B))
            B.includes(a) || B.push(a);
          else if (z)
            y[p] = [a], j(p) && (S[p] = y[p]);
          else {
            const U = [a];
            ne(p, e.k) && (p.value = U), e.k && (y[e.k] = U);
          }
        } else z ? (y[p] = l, j(p) && (S[p] = l)) : ce && (ne(p, e.k) && (p.value = l), e.k && (y[e.k] = l));
      };
      if (l) {
        const B = () => {
          ie(), jn.delete(e);
        };
        B.id = -1, jn.set(e, B), ht(B, r);
      } else
        xa(e), ie();
    }
  }
}
function xa(e) {
  const t = jn.get(e);
  t && (t.flags |= 8, jn.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, ia = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Xs(e, "a", t);
}
function Hl(e, t) {
  Xs(e, "da", t);
}
function Xs(e, t, r = lt) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ti(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      ia(i.parent.vnode) && $l(n, t, r, i), i = i.parent;
  }
}
function $l(e, t, r, n) {
  const i = ti(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Qs(() => {
    Wi(n[t], i);
  }, r);
}
function ti(e, t, r = lt, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...l) => {
      er();
      const u = yn(r), p = Pt(t, r, e, l);
      return u(), tr(), p;
    });
    return n ? i.unshift(a) : i.push(a), a;
  }
}
const ir = (e) => (t, r = lt) => {
  (!hn || e === "sp") && ti(e, (...n) => t(...n), r);
}, jl = ir("bm"), Js = ir("m"), Vl = ir(
  "bu"
), ql = ir("u"), Zs = ir(
  "bum"
), Qs = ir("um"), Bl = ir(
  "sp"
), zl = ir("rtg"), Wl = ir("rtc");
function Kl(e, t = lt) {
  ti("ec", e, t);
}
const Gl = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, r, n) {
  let i;
  const a = r, l = ee(e);
  if (l || Ue(e)) {
    const u = l && /* @__PURE__ */ Cr(e);
    let p = !1, v = !1;
    u && (p = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ rr(e), e = Zn(e)), i = new Array(e.length);
    for (let y = 0, S = e.length; y < S; y++)
      i[y] = t(
        p ? v ? $r(Nt(e[y])) : Nt(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let u = 0; u < e; u++)
      i[u] = t(u + 1, u, void 0, a);
  } else if (we(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (u, p) => t(u, p, void 0, a)
      );
    else {
      const u = Object.keys(e);
      i = new Array(u.length);
      for (let p = 0, v = u.length; p < v; p++) {
        const y = u[p];
        i[p] = t(e[y], y, p, a);
      }
    }
  else
    i = [];
  return i;
}
const Fi = (e) => e ? Eo(e) ? ii(e) : Fi(e.parent) : null, ln = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fi(e.parent),
    $root: (e) => Fi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => to(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ra(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
    $watch: (e) => Ll.bind(e)
  })
), yi = (e, t) => e !== xe && !e.__isScriptSetup && Se(e, t), Yl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: a, accessCache: l, type: u, appContext: p } = e;
    if (t[0] !== "$") {
      const P = l[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (yi(n, t))
          return l[t] = 1, n[t];
        if (i !== xe && Se(i, t))
          return l[t] = 2, i[t];
        if (Se(a, t))
          return l[t] = 3, a[t];
        if (r !== xe && Se(r, t))
          return l[t] = 4, r[t];
        Hi && (l[t] = 0);
      }
    }
    const v = ln[t];
    let y, S;
    if (v)
      return t === "$attrs" && Ze(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== xe && Se(r, t))
      return l[t] = 4, r[t];
    if (
      // global properties
      S = p.config.globalProperties, Se(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: a } = e;
    return yi(i, t) ? (i[t] = r, !0) : n !== xe && Se(n, t) ? (n[t] = r, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: a, type: l }
  }, u) {
    let p;
    return !!(r[u] || e !== xe && u[0] !== "$" && Se(e, u) || yi(t, u) || Se(a, u) || Se(n, u) || Se(ln, u) || Se(i.config.globalProperties, u) || (p = l.__cssModules) && p[u]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Se(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Aa(e) {
  return ee(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Hi = !0;
function Xl(e) {
  const t = to(e), r = e.proxy, n = e.ctx;
  Hi = !1, t.beforeCreate && ka(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: l,
    watch: u,
    provide: p,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: S,
    mounted: P,
    beforeUpdate: j,
    updated: ne,
    activated: z,
    deactivated: ce,
    beforeDestroy: ie,
    beforeUnmount: B,
    destroyed: U,
    unmounted: V,
    render: le,
    renderTracked: Pe,
    renderTriggered: Oe,
    errorCaptured: je,
    serverPrefetch: Ee,
    // public API
    expose: Ie,
    inheritAttrs: tt,
    // assets
    components: ct,
    directives: Ke,
    filters: St
  } = t;
  if (v && Jl(v, n, null), l)
    for (const ye in l) {
      const de = l[ye];
      ue(de) && (n[ye] = de.bind(r));
    }
  if (i) {
    const ye = i.call(r, r);
    we(ye) && (e.data = /* @__PURE__ */ fr(ye));
  }
  if (Hi = !0, a)
    for (const ye in a) {
      const de = a[ye], Ve = ue(de) ? de.bind(r, r) : ue(de.get) ? de.get.bind(r, r) : qt, ge = !ue(de) && ue(de.set) ? de.set.bind(r) : qt, Ce = K({
        get: Ve,
        set: ge
      });
      Object.defineProperty(n, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (qe) => Ce.value = qe
      });
    }
  if (u)
    for (const ye in u)
      eo(u[ye], n, r, ye);
  if (p) {
    const ye = ue(p) ? p.call(r) : p;
    Reflect.ownKeys(ye).forEach((de) => {
      Pl(de, ye[de]);
    });
  }
  y && ka(y, e, "c");
  function Me(ye, de) {
    ee(de) ? de.forEach((Ve) => ye(Ve.bind(r))) : de && ye(de.bind(r));
  }
  if (Me(jl, S), Me(Js, P), Me(Vl, j), Me(ql, ne), Me(Fl, z), Me(Hl, ce), Me(Kl, je), Me(Wl, Pe), Me(zl, Oe), Me(Zs, B), Me(Qs, V), Me(Bl, Ee), ee(Ie))
    if (Ie.length) {
      const ye = e.exposed || (e.exposed = {});
      Ie.forEach((de) => {
        Object.defineProperty(ye, de, {
          get: () => r[de],
          set: (Ve) => r[de] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === qt && (e.render = le), tt != null && (e.inheritAttrs = tt), ct && (e.components = ct), Ke && (e.directives = Ke), Ee && Ys(e);
}
function Jl(e, t, r = qt) {
  ee(e) && (e = $i(e));
  for (const n in e) {
    const i = e[n];
    let a;
    we(i) ? "default" in i ? a = Ln(
      i.from || n,
      i.default,
      !0
    ) : a = Ln(i.from || n) : a = Ln(i), /* @__PURE__ */ Qe(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[n] = a;
  }
}
function ka(e, t, r) {
  Pt(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function eo(e, t, r, n) {
  let i = n.includes(".") ? Ks(r, n) : () => r[n];
  if (Ue(e)) {
    const a = t[e];
    ue(a) && mi(i, a);
  } else if (ue(e))
    mi(i, e.bind(r));
  else if (we(e))
    if (ee(e))
      e.forEach((a) => eo(a, t, r, n));
    else {
      const a = ue(e.handler) ? e.handler.bind(r) : t[e.handler];
      ue(a) && mi(i, a, e);
    }
}
function to(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = e.appContext, u = a.get(t);
  let p;
  return u ? p = u : !i.length && !r && !n ? p = t : (p = {}, i.length && i.forEach(
    (v) => Vn(p, v, l, !0)
  ), Vn(p, t, l)), we(t) && a.set(t, p), p;
}
function Vn(e, t, r, n = !1) {
  const { mixins: i, extends: a } = t;
  a && Vn(e, a, r, !0), i && i.forEach(
    (l) => Vn(e, l, r, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const u = Zl[l] || r && r[l];
      e[l] = u ? u(e[l], t[l]) : t[l];
    }
  return e;
}
const Zl = {
  data: Ra,
  props: Oa,
  emits: Oa,
  // objects
  methods: Qr,
  computed: Qr,
  // lifecycle
  beforeCreate: st,
  created: st,
  beforeMount: st,
  mounted: st,
  beforeUpdate: st,
  updated: st,
  beforeDestroy: st,
  beforeUnmount: st,
  destroyed: st,
  unmounted: st,
  activated: st,
  deactivated: st,
  errorCaptured: st,
  serverPrefetch: st,
  // assets
  components: Qr,
  directives: Qr,
  // watch
  watch: ec,
  // provide / inject
  provide: Ra,
  inject: Ql
};
function Ra(e, t) {
  return t ? e ? function() {
    return et(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Qr($i(e), $i(t));
}
function $i(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function st(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qr(e, t) {
  return e ? et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Oa(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : et(
    /* @__PURE__ */ Object.create(null),
    Aa(e),
    Aa(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = et(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = st(e[n], t[n]);
  return r;
}
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: bs,
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
let tc = 0;
function rc(e, t) {
  return function(n, i = null) {
    ue(n) || (n = et({}, n)), i != null && !we(i) && (i = null);
    const a = ro(), l = /* @__PURE__ */ new WeakSet(), u = [];
    let p = !1;
    const v = a.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Mc,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...S) {
        return l.has(y) || (y && ue(y.install) ? (l.add(y), y.install(v, ...S)) : ue(y) && (l.add(y), y(v, ...S))), v;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), v;
      },
      component(y, S) {
        return S ? (a.components[y] = S, v) : a.components[y];
      },
      directive(y, S) {
        return S ? (a.directives[y] = S, v) : a.directives[y];
      },
      mount(y, S, P) {
        if (!p) {
          const j = v._ceVNode || Qt(n, i);
          return j.appContext = a, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, y, P), p = !0, v._container = y, y.__vue_app__ = v, ii(j.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        p && (Pt(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, S) {
        return a.provides[y] = S, v;
      },
      runWithContext(y) {
        const S = Fr;
        Fr = v;
        try {
          return y();
        } finally {
          Fr = S;
        }
      }
    };
    return v;
  };
}
let Fr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${kr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let i = r;
  const a = t.startsWith("update:"), l = a && nc(n, t.slice(7));
  l && (l.trim && (i = r.map((y) => Ue(y) ? y.trim() : y)), l.number && (i = i.map(Xn)));
  let u, p = n[u = ui(t)] || // also try camelCase event handler (#2249)
  n[u = ui(Rt(t))];
  !p && a && (p = n[u = ui(kr(t))]), p && Pt(
    p,
    e,
    6,
    i
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Pt(
      v,
      e,
      6,
      i
    );
  }
}
const ac = /* @__PURE__ */ new WeakMap();
function no(e, t, r = !1) {
  const n = r ? ac : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let l = {}, u = !1;
  if (!ue(e)) {
    const p = (v) => {
      const y = no(v, t, !0);
      y && (u = !0, et(l, y));
    };
    !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !a && !u ? (we(e) && n.set(e, null), null) : (ee(a) ? a.forEach((p) => l[p] = null) : et(l, a), we(e) && n.set(e, l), l);
}
function ri(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, kr(t)) || Se(e, t));
}
function Na(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [a],
    slots: l,
    attrs: u,
    emit: p,
    render: v,
    renderCache: y,
    props: S,
    data: P,
    setupState: j,
    ctx: ne,
    inheritAttrs: z
  } = e, ce = $n(e);
  let ie, B;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, le = V;
      ie = jt(
        v.call(
          le,
          V,
          y,
          S,
          j,
          P,
          ne
        )
      ), B = u;
    } else {
      const V = t;
      ie = jt(
        V.length > 1 ? V(
          S,
          { attrs: u, slots: l, emit: p }
        ) : V(
          S,
          null
        )
      ), B = t.props ? u : sc(u);
    }
  } catch (V) {
    xr.length = 0, Qn(V, e, 1), ie = Qt(nr);
  }
  let U = ie;
  if (B && z !== !1) {
    const V = Object.keys(B), { shapeFlag: le } = U;
    V.length && le & 7 && (a && V.some(Gn) && (B = oc(
      B,
      a
    )), U = jr(U, B, !1, !0));
  }
  if (r.dirs && (U = jr(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ei(U.type) && Gs(U) || U;
    na(V, r.transition);
  }
  return ie = U, $n(ce), ie;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Kn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, oc = (e, t) => {
  const r = {};
  for (const n in e)
    (!Gn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function lc(e, t, r) {
  const { props: n, children: i, component: a } = e, { props: l, children: u, patchFlag: p } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return n ? Pa(n, l, v) : !!l;
    if (p & 8) {
      const y = t.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        const P = y[S];
        if (io(l, n, P) && !ri(v, P))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? Pa(n, l, v) : !0 : !!l;
  return !1;
}
function Pa(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (io(t, e, a) && !ri(r, a))
      return !0;
  }
  return !1;
}
function io(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && we(n) && we(i) ? !hr(n, i) : n !== i;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const ao = {}, so = () => Object.create(ao), oo = (e) => Object.getPrototypeOf(e) === ao;
function uc(e, t, r, n = !1) {
  const i = {}, a = so();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lo(e, t, i, a);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ gl(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function dc(e, t, r, n) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: l }
  } = e, u = /* @__PURE__ */ ve(i), [p] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const y = e.vnode.dynamicProps;
      for (let S = 0; S < y.length; S++) {
        let P = y[S];
        if (ri(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (p)
          if (Se(a, P))
            j !== a[P] && (a[P] = j, v = !0);
          else {
            const ne = Rt(P);
            i[ne] = ji(
              p,
              u,
              ne,
              j,
              e,
              !1
            );
          }
        else
          j !== a[P] && (a[P] = j, v = !0);
      }
    }
  } else {
    lo(e, t, i, a) && (v = !0);
    let y;
    for (const S in u)
      (!t || // for camelCase
      !Se(t, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = kr(S)) === S || !Se(t, y))) && (p ? r && // for camelCase
      (r[S] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[S] = ji(
        p,
        u,
        S,
        void 0,
        e,
        !0
      )) : delete i[S]);
    if (a !== u)
      for (const S in a)
        (!t || !Se(t, S)) && (delete a[S], v = !0);
  }
  v && Jt(e.attrs, "set", "");
}
function lo(e, t, r, n) {
  const [i, a] = e.propsOptions;
  let l = !1, u;
  if (t)
    for (let p in t) {
      if (rn(p))
        continue;
      const v = t[p];
      let y;
      i && Se(i, y = Rt(p)) ? !a || !a.includes(y) ? r[y] = v : (u || (u = {}))[y] = v : ri(e.emitsOptions, p) || (!(p in n) || v !== n[p]) && (n[p] = v, l = !0);
    }
  if (a) {
    const p = /* @__PURE__ */ ve(r), v = u || xe;
    for (let y = 0; y < a.length; y++) {
      const S = a[y];
      r[S] = ji(
        i,
        p,
        S,
        v[S],
        e,
        !Se(v, S)
      );
    }
  }
  return l;
}
function ji(e, t, r, n, i, a) {
  const l = e[r];
  if (l != null) {
    const u = Se(l, "default");
    if (u && n === void 0) {
      const p = l.default;
      if (l.type !== Function && !l.skipFactory && ue(p)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = yn(i);
          n = v[r] = p.call(
            null,
            t
          ), y();
        }
      } else
        n = p;
      i.ce && i.ce._setProp(r, n);
    }
    l[
      0
      /* shouldCast */
    ] && (a && !u ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === kr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function co(e, t, r = !1) {
  const n = r ? fc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const a = e.props, l = {}, u = [];
  let p = !1;
  if (!ue(e)) {
    const y = (S) => {
      p = !0;
      const [P, j] = co(S, t, !0);
      et(l, P), j && u.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !p)
    return we(e) && n.set(e, Lr), Lr;
  if (ee(a))
    for (let y = 0; y < a.length; y++) {
      const S = Rt(a[y]);
      Ia(S) && (l[S] = xe);
    }
  else if (a)
    for (const y in a) {
      const S = Rt(y);
      if (Ia(S)) {
        const P = a[y], j = l[S] = ee(P) || ue(P) ? { type: P } : et({}, P), ne = j.type;
        let z = !1, ce = !0;
        if (ee(ne))
          for (let ie = 0; ie < ne.length; ++ie) {
            const B = ne[ie], U = ue(B) && B.name;
            if (U === "Boolean") {
              z = !0;
              break;
            } else U === "String" && (ce = !1);
          }
        else
          z = ue(ne) && ne.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = z, j[
          1
          /* shouldCastTrue */
        ] = ce, (z || Se(j, "default")) && u.push(S);
      }
    }
  const v = [l, u];
  return we(e) && n.set(e, v), v;
}
function Ia(e) {
  return e[0] !== "$" && !rn(e);
}
const aa = (e) => e === "_" || e === "_ctx" || e === "$stable", sa = (e) => ee(e) ? e.map(jt) : [jt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Nl((...i) => sa(t(...i)), r);
  return n._c = !1, n;
}, uo = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (aa(i)) continue;
    const a = e[i];
    if (ue(a))
      t[i] = pc(i, a, n);
    else if (a != null) {
      const l = sa(a);
      t[i] = () => l;
    }
  }
}, fo = (e, t) => {
  const r = sa(t);
  e.slots.default = () => r;
}, po = (e, t, r) => {
  for (const n in t)
    (r || !aa(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = so();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (po(n, t, r), r && Ss(n, "_", i, !0)) : uo(t, n);
  } else t && fo(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let a = !0, l = xe;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? r && u === 1 ? a = !1 : po(i, t, r) : (a = !t.$stable, uo(t, i)), l = t;
  } else t && (fo(e, t), l = { default: 1 });
  if (a)
    for (const u in i)
      !aa(u) && l[u] == null && delete i[u];
}, ht = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = Jn();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: a,
    createElement: l,
    createText: u,
    createComment: p,
    setText: v,
    setElementText: y,
    parentNode: S,
    nextSibling: P,
    setScopeId: j = qt,
    insertStaticContent: ne
  } = e, z = (h, b, _, R = null, E = null, A = null, M = void 0, D = null, L = !!b.dynamicChildren) => {
    if (h === b)
      return;
    h && !Gr(h, b) && (R = ut(h), qe(h, E, A, !0), h = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: C, ref: G, shapeFlag: $ } = b;
    switch (C) {
      case ni:
        ce(h, b, _, R);
        break;
      case nr:
        ie(h, b, _, R);
        break;
      case _i:
        h == null && B(b, _, R, M);
        break;
      case Z:
        ct(
          h,
          b,
          _,
          R,
          E,
          A,
          M,
          D,
          L
        );
        break;
      default:
        $ & 1 ? le(
          h,
          b,
          _,
          R,
          E,
          A,
          M,
          D,
          L
        ) : $ & 6 ? Ke(
          h,
          b,
          _,
          R,
          E,
          A,
          M,
          D,
          L
        ) : ($ & 64 || $ & 128) && C.process(
          h,
          b,
          _,
          R,
          E,
          A,
          M,
          D,
          L,
          rt
        );
    }
    G != null && E ? sn(G, h && h.ref, A, b || h, !b) : G == null && h && h.ref != null && sn(h.ref, null, A, h, !0);
  }, ce = (h, b, _, R) => {
    if (h == null)
      n(
        b.el = u(b.children),
        _,
        R
      );
    else {
      const E = b.el = h.el;
      b.children !== h.children && v(E, b.children);
    }
  }, ie = (h, b, _, R) => {
    h == null ? n(
      b.el = p(b.children || ""),
      _,
      R
    ) : b.el = h.el;
  }, B = (h, b, _, R) => {
    [h.el, h.anchor] = ne(
      h.children,
      b,
      _,
      R,
      h.el,
      h.anchor
    );
  }, U = ({ el: h, anchor: b }, _, R) => {
    let E;
    for (; h && h !== b; )
      E = P(h), n(h, _, R), h = E;
    n(b, _, R);
  }, V = ({ el: h, anchor: b }) => {
    let _;
    for (; h && h !== b; )
      _ = P(h), i(h), h = _;
    i(b);
  }, le = (h, b, _, R, E, A, M, D, L) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), h == null)
      Pe(
        b,
        _,
        R,
        E,
        A,
        M,
        D,
        L
      );
    else {
      const C = h.el && h.el._isVueCE ? h.el : null;
      try {
        C && C._beginPatch(), Ee(
          h,
          b,
          E,
          A,
          M,
          D,
          L
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, Pe = (h, b, _, R, E, A, M, D) => {
    let L, C;
    const { props: G, shapeFlag: $, transition: W, dirs: J } = h;
    if (L = h.el = l(
      h.type,
      A,
      G && G.is,
      G
    ), $ & 8 ? y(L, h.children) : $ & 16 && je(
      h.children,
      L,
      null,
      R,
      E,
      gi(h, A),
      M,
      D
    ), J && yr(h, null, R, "created"), Oe(L, h, h.scopeId, M, R), G) {
      for (const O in G)
        O !== "value" && !rn(O) && a(L, O, null, G[O], A, R);
      "value" in G && a(L, "value", null, G.value, A), (C = G.onVnodeBeforeMount) && Ft(C, R, h);
    }
    J && yr(h, null, R, "beforeMount");
    const te = gc(E, W);
    te && W.beforeEnter(L), n(L, b, _), ((C = G && G.onVnodeMounted) || te || J) && ht(() => {
      C && Ft(C, R, h), te && W.enter(L), J && yr(h, null, R, "mounted");
    }, E);
  }, Oe = (h, b, _, R, E) => {
    if (_ && j(h, _), R)
      for (let A = 0; A < R.length; A++)
        j(h, R[A]);
    if (E) {
      let A = E.subTree;
      if (b === A || yo(A.type) && (A.ssContent === b || A.ssFallback === b)) {
        const M = E.vnode;
        Oe(
          h,
          M,
          M.scopeId,
          M.slotScopeIds,
          E.parent
        );
      }
    }
  }, je = (h, b, _, R, E, A, M, D, L = 0) => {
    for (let C = L; C < h.length; C++) {
      const G = h[C] = D ? Xt(h[C]) : jt(h[C]);
      z(
        null,
        G,
        b,
        _,
        R,
        E,
        A,
        M,
        D
      );
    }
  }, Ee = (h, b, _, R, E, A, M) => {
    const D = b.el = h.el;
    let { patchFlag: L, dynamicChildren: C, dirs: G } = b;
    L |= h.patchFlag & 16;
    const $ = h.props || xe, W = b.props || xe;
    let J;
    if (_ && gr(_, !1), (J = W.onVnodeBeforeUpdate) && Ft(J, _, b, h), G && yr(b, h, _, "beforeUpdate"), _ && gr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!h.dynamicChildren || h.dynamicChildren.length !== C.length) && (L = 0, M = !1, C = null), ($.innerHTML && W.innerHTML == null || $.textContent && W.textContent == null) && y(D, ""), C ? Ie(
      h.dynamicChildren,
      C,
      D,
      _,
      R,
      gi(b, E),
      A
    ) : M || de(
      h,
      b,
      D,
      null,
      _,
      R,
      gi(b, E),
      A,
      !1
    ), L > 0) {
      if (L & 16)
        tt(D, $, W, _, E);
      else if (L & 2 && $.class !== W.class && a(D, "class", null, W.class, E), L & 4 && a(D, "style", $.style, W.style, E), L & 8) {
        const te = b.dynamicProps;
        for (let O = 0; O < te.length; O++) {
          const N = te[O], H = $[N], Q = W[N];
          (Q !== H || N === "value") && a(D, N, H, Q, E, _);
        }
      }
      L & 1 && h.children !== b.children && y(D, b.children);
    } else !M && C == null && tt(D, $, W, _, E);
    ((J = W.onVnodeUpdated) || G) && ht(() => {
      J && Ft(J, _, b, h), G && yr(b, h, _, "updated");
    }, R);
  }, Ie = (h, b, _, R, E, A, M) => {
    for (let D = 0; D < b.length; D++) {
      const L = h[D], C = b[D], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Gr(L, C) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? S(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      z(
        L,
        C,
        G,
        null,
        R,
        E,
        A,
        M,
        !0
      );
    }
  }, tt = (h, b, _, R, E) => {
    if (b !== _) {
      if (b !== xe)
        for (const A in b)
          !rn(A) && !(A in _) && a(
            h,
            A,
            b[A],
            null,
            E,
            R
          );
      for (const A in _) {
        if (rn(A)) continue;
        const M = _[A], D = b[A];
        M !== D && A !== "value" && a(h, A, D, M, E, R);
      }
      "value" in _ && a(h, "value", b.value, _.value, E);
    }
  }, ct = (h, b, _, R, E, A, M, D, L) => {
    const C = b.el = h ? h.el : u(""), G = b.anchor = h ? h.anchor : u("");
    let { patchFlag: $, dynamicChildren: W, slotScopeIds: J } = b;
    J && (D = D ? D.concat(J) : J), h == null ? (n(C, _, R), n(G, _, R), je(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      G,
      E,
      A,
      M,
      D,
      L
    )) : $ > 0 && $ & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === W.length ? (Ie(
      h.dynamicChildren,
      W,
      _,
      E,
      A,
      M,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || E && b === E.subTree) && ho(
      h,
      b,
      !0
      /* shallow */
    )) : de(
      h,
      b,
      _,
      G,
      E,
      A,
      M,
      D,
      L
    );
  }, Ke = (h, b, _, R, E, A, M, D, L) => {
    b.slotScopeIds = D, h == null ? b.shapeFlag & 512 ? E.ctx.activate(
      b,
      _,
      R,
      M,
      L
    ) : St(
      b,
      _,
      R,
      E,
      A,
      M,
      L
    ) : De(h, b, L);
  }, St = (h, b, _, R, E, A, M) => {
    const D = h.component = Ac(
      h,
      R,
      E
    );
    if (ia(h) && (D.ctx.renderer = rt), Rc(D, !1, M), D.asyncDep) {
      if (E && E.registerDep(D, Me, M), !h.el) {
        const L = D.subTree = Qt(nr);
        ie(null, L, b, _), h.placeholder = L.el;
      }
    } else
      Me(
        D,
        h,
        b,
        _,
        E,
        A,
        M
      );
  }, De = (h, b, _) => {
    const R = b.component = h.component;
    if (lc(h, b, _))
      if (R.asyncDep && !R.asyncResolved) {
        ye(R, b, _);
        return;
      } else
        R.next = b, R.update();
    else
      b.el = h.el, R.vnode = b;
  }, Me = (h, b, _, R, E, A, M) => {
    const D = () => {
      if (h.isMounted) {
        let { next: $, bu: W, u: J, parent: te, vnode: O } = h;
        {
          const _e = mo(h);
          if (_e) {
            $ && ($.el = O.el, ye(h, $, M)), _e.asyncDep.then(() => {
              ht(() => {
                h.isUnmounted || C();
              }, E);
            });
            return;
          }
        }
        let N = $, H;
        gr(h, !1), $ ? ($.el = O.el, ye(h, $, M)) : $ = O, W && Mn(W), (H = $.props && $.props.onVnodeBeforeUpdate) && Ft(H, te, $, O), gr(h, !0);
        const Q = Na(h), oe = h.subTree;
        h.subTree = Q, z(
          oe,
          Q,
          // parent may have changed if it's in a teleport
          S(oe.el),
          // anchor may have changed if it's in a fragment
          ut(oe),
          h,
          E,
          A
        ), $.el = Q.el, N === null && cc(h, Q.el), J && ht(J, E), (H = $.props && $.props.onVnodeUpdated) && ht(
          () => Ft(H, te, $, O),
          E
        );
      } else {
        let $;
        const { el: W, props: J } = b, { bm: te, m: O, parent: N, root: H, type: Q } = h, oe = on(b);
        gr(h, !1), te && Mn(te), !oe && ($ = J && J.onVnodeBeforeMount) && Ft($, N, b), gr(h, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            Q,
            h.parent ? h.parent.type : void 0
          );
          const _e = h.subTree = Na(h);
          z(
            null,
            _e,
            _,
            R,
            h,
            E,
            A
          ), b.el = _e.el;
        }
        if (O && ht(O, E), !oe && ($ = J && J.onVnodeMounted)) {
          const _e = b;
          ht(
            () => Ft($, N, _e),
            E
          );
        }
        (b.shapeFlag & 256 || N && on(N.vnode) && N.vnode.shapeFlag & 256) && h.a && ht(h.a, E), h.isMounted = !0, b = _ = R = null;
      }
    };
    h.scope.on();
    const L = h.effect = new Cs(D);
    h.scope.off();
    const C = h.update = L.run.bind(L), G = h.job = L.runIfDirty.bind(L);
    G.i = h, G.id = h.uid, L.scheduler = () => ra(G), gr(h, !0), C();
  }, ye = (h, b, _) => {
    b.component = h;
    const R = h.vnode.props;
    h.vnode = b, h.next = null, dc(h, b.props, R, _), mc(h, b.children, _), er(), wa(h), tr();
  }, de = (h, b, _, R, E, A, M, D, L = !1) => {
    const C = h && h.children, G = h ? h.shapeFlag : 0, $ = b.children, { patchFlag: W, shapeFlag: J } = b;
    if (W > 0) {
      if (W & 128) {
        ge(
          C,
          $,
          _,
          R,
          E,
          A,
          M,
          D,
          L
        );
        return;
      } else if (W & 256) {
        Ve(
          C,
          $,
          _,
          R,
          E,
          A,
          M,
          D,
          L
        );
        return;
      }
    }
    J & 8 ? (G & 16 && Be(C, E, A), $ !== C && y(_, $)) : G & 16 ? J & 16 ? ge(
      C,
      $,
      _,
      R,
      E,
      A,
      M,
      D,
      L
    ) : Be(C, E, A, !0) : (G & 8 && y(_, ""), J & 16 && je(
      $,
      _,
      R,
      E,
      A,
      M,
      D,
      L
    ));
  }, Ve = (h, b, _, R, E, A, M, D, L) => {
    h = h || Lr, b = b || Lr;
    const C = h.length, G = b.length, $ = Math.min(C, G);
    let W;
    for (W = 0; W < $; W++) {
      const J = b[W] = L ? Xt(b[W]) : jt(b[W]);
      z(
        h[W],
        J,
        _,
        null,
        E,
        A,
        M,
        D,
        L
      );
    }
    C > G ? Be(
      h,
      E,
      A,
      !0,
      !1,
      $
    ) : je(
      b,
      _,
      R,
      E,
      A,
      M,
      D,
      L,
      $
    );
  }, ge = (h, b, _, R, E, A, M, D, L) => {
    let C = 0;
    const G = b.length;
    let $ = h.length - 1, W = G - 1;
    for (; C <= $ && C <= W; ) {
      const J = h[C], te = b[C] = L ? Xt(b[C]) : jt(b[C]);
      if (Gr(J, te))
        z(
          J,
          te,
          _,
          null,
          E,
          A,
          M,
          D,
          L
        );
      else
        break;
      C++;
    }
    for (; C <= $ && C <= W; ) {
      const J = h[$], te = b[W] = L ? Xt(b[W]) : jt(b[W]);
      if (Gr(J, te))
        z(
          J,
          te,
          _,
          null,
          E,
          A,
          M,
          D,
          L
        );
      else
        break;
      $--, W--;
    }
    if (C > $) {
      if (C <= W) {
        const J = W + 1, te = J < G ? b[J].el : R;
        for (; C <= W; )
          z(
            null,
            b[C] = L ? Xt(b[C]) : jt(b[C]),
            _,
            te,
            E,
            A,
            M,
            D,
            L
          ), C++;
      }
    } else if (C > W)
      for (; C <= $; )
        qe(h[C], E, A, !0), C++;
    else {
      const J = C, te = C, O = /* @__PURE__ */ new Map();
      for (C = te; C <= W; C++) {
        const Re = b[C] = L ? Xt(b[C]) : jt(b[C]);
        Re.key != null && O.set(Re.key, C);
      }
      let N, H = 0;
      const Q = W - te + 1;
      let oe = !1, _e = 0;
      const fe = new Array(Q);
      for (C = 0; C < Q; C++) fe[C] = 0;
      for (C = J; C <= $; C++) {
        const Re = h[C];
        if (H >= Q) {
          qe(Re, E, A, !0);
          continue;
        }
        let Te;
        if (Re.key != null)
          Te = O.get(Re.key);
        else
          for (N = te; N <= W; N++)
            if (fe[N - te] === 0 && Gr(Re, b[N])) {
              Te = N;
              break;
            }
        Te === void 0 ? qe(Re, E, A, !0) : (fe[Te - te] = C + 1, Te >= _e ? _e = Te : oe = !0, z(
          Re,
          b[Te],
          _,
          null,
          E,
          A,
          M,
          D,
          L
        ), H++);
      }
      const Le = oe ? _c(fe) : Lr;
      for (N = Le.length - 1, C = Q - 1; C >= 0; C--) {
        const Re = te + C, Te = b[Re], nt = b[Re + 1], It = Re + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          nt.el || bo(nt)
        ) : R;
        fe[C] === 0 ? z(
          null,
          Te,
          _,
          It,
          E,
          A,
          M,
          D,
          L
        ) : oe && (N < 0 || C !== Le[N] ? Ce(Te, _, It, 2) : N--);
      }
    }
  }, Ce = (h, b, _, R, E = null) => {
    const { el: A, type: M, transition: D, children: L, shapeFlag: C } = h;
    if (C & 6) {
      Ce(h.component.subTree, b, _, R);
      return;
    }
    if (C & 128) {
      h.suspense.move(b, _, R);
      return;
    }
    if (C & 64) {
      M.move(h, b, _, rt);
      return;
    }
    if (M === Z) {
      n(A, b, _);
      for (let $ = 0; $ < L.length; $++)
        Ce(L[$], b, _, R);
      n(h.anchor, b, _);
      return;
    }
    if (M === _i) {
      U(h, b, _);
      return;
    }
    if (R !== 2 && C & 1 && D)
      if (R === 0)
        D.persisted && !A[bi] ? n(A, b, _) : (D.beforeEnter(A), n(A, b, _), ht(() => D.enter(A), E));
      else {
        const { leave: $, delayLeave: W, afterLeave: J } = D, te = () => {
          h.ctx.isUnmounted ? i(A) : n(A, b, _);
        }, O = () => {
          const N = A._isLeaving || !!A[bi];
          A._isLeaving && A[bi](
            !0
            /* cancelled */
          ), D.persisted && !N ? te() : $(A, () => {
            te(), J && J();
          });
        };
        W ? W(A, te, O) : O();
      }
    else
      n(A, b, _);
  }, qe = (h, b, _, R = !1, E = !1) => {
    const {
      type: A,
      props: M,
      ref: D,
      children: L,
      dynamicChildren: C,
      shapeFlag: G,
      patchFlag: $,
      dirs: W,
      cacheIndex: J,
      memo: te
    } = h;
    if ($ === -2 && (E = !1), D != null && (er(), sn(D, null, _, h, !0), tr()), J != null && (b.renderCache[J] = void 0), G & 256) {
      b.ctx.deactivate(h);
      return;
    }
    const O = G & 1 && W, N = !on(h);
    let H;
    if (N && (H = M && M.onVnodeBeforeUnmount) && Ft(H, b, h), G & 6)
      At(h.component, _, R);
    else {
      if (G & 128) {
        h.suspense.unmount(_, R);
        return;
      }
      O && yr(h, null, b, "beforeUnmount"), G & 64 ? h.type.remove(
        h,
        b,
        _,
        rt,
        R
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== Z || $ > 0 && $ & 64) ? Be(
        C,
        b,
        _,
        !1,
        !0
      ) : (A === Z && $ & 384 || !E && G & 16) && Be(L, b, _), R && Xe(h);
    }
    const Q = te != null && J == null;
    (N && (H = M && M.onVnodeUnmounted) || O || Q) && ht(() => {
      H && Ft(H, b, h), O && yr(h, null, b, "unmounted"), Q && (h.el = null);
    }, _);
  }, Xe = (h) => {
    const { type: b, el: _, anchor: R, transition: E } = h;
    if (b === Z) {
      he(_, R);
      return;
    }
    if (b === _i) {
      V(h);
      return;
    }
    const A = () => {
      i(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (h.shapeFlag & 1 && E && !E.persisted) {
      const { leave: M, delayLeave: D } = E, L = () => M(_, A);
      D ? D(h.el, A, L) : L();
    } else
      A();
  }, he = (h, b) => {
    let _;
    for (; h !== b; )
      _ = P(h), i(h), h = _;
    i(b);
  }, At = (h, b, _) => {
    const { bum: R, scope: E, job: A, subTree: M, um: D, m: L, a: C } = h;
    Ma(L), Ma(C), R && Mn(R), E.stop(), A && (A.flags |= 8, qe(M, h, b, _)), D && ht(D, b), ht(() => {
      h.isUnmounted = !0;
    }, b);
  }, Be = (h, b, _, R = !1, E = !1, A = 0) => {
    for (let M = A; M < h.length; M++)
      qe(h[M], b, _, R, E);
  }, ut = (h) => {
    if (h.shapeFlag & 6)
      return ut(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const b = P(h.anchor || h.el), _ = b && b[Ul];
    return _ ? P(_) : b;
  };
  let bt = !1;
  const Et = (h, b, _) => {
    let R;
    h == null ? b._vnode && (qe(b._vnode, null, null, !0), R = b._vnode.component) : z(
      b._vnode || null,
      h,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = h, bt || (bt = !0, wa(R), qs(), bt = !1);
  }, rt = {
    p: z,
    um: qe,
    m: Ce,
    r: Xe,
    mt: St,
    mc: je,
    pc: de,
    pbc: Ie,
    n: ut,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: rc(Et)
  };
}
function gi({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function gr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ho(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let a = 0; a < n.length; a++) {
      const l = n[a];
      let u = i[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[a] = Xt(i[a]), u.el = l.el), !r && u.patchFlag !== -2 && ho(l, u)), u.type === ni && (u.patchFlag === -1 && (u = i[a] = Xt(u)), u.el = l.el), u.type === nr && !u.el && (u.el = l.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, a, l, u;
  const p = e.length;
  for (n = 0; n < p; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (a = 0, l = r.length - 1; a < l; )
        u = a + l >> 1, e[r[u]] < v ? a = u + 1 : l = u;
      v < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, l = r[a - 1]; a-- > 0; )
    r[a] = l, l = t[l];
  return r;
}
function mo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mo(t);
}
function Ma(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bo(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bo(t.subTree) : null;
}
const yo = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Ol(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), ni = /* @__PURE__ */ Symbol.for("v-txt"), nr = /* @__PURE__ */ Symbol.for("v-cmt"), _i = /* @__PURE__ */ Symbol.for("v-stc"), xr = [];
let vt = null;
function T(e = !1) {
  xr.push(vt = e ? null : []);
}
function go() {
  xr.pop(), vt = xr[xr.length - 1] || null;
}
let fn = 1;
function La(e, t = !1) {
  fn += e, e < 0 && vt && t && (vt.hasOnce = !0);
}
function _o(e) {
  return e.dynamicChildren = fn > 0 ? vt || Lr : null, go(), fn > 0 && vt && vt.push(e), e;
}
function w(e, t, r, n, i, a) {
  return _o(
    o(
      e,
      t,
      r,
      n,
      i,
      a,
      !0
    )
  );
}
function Sc(e, t, r, n, i) {
  return _o(
    Qt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Gr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const So = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || /* @__PURE__ */ Qe(e) || ue(e) ? { i: Ct, r: e, k: t, f: !!r } : e : null);
function o(e, t = null, r = null, n = 0, i = null, a = e === Z ? 0 : 1, l = !1, u = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && So(t),
    ref: t && Un(t),
    scopeId: zs,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct
  };
  return u ? (qn(p, r), a & 128 && e.normalize(p)) : r && (p.shapeFlag |= Ue(r) ? 8 : 16), fn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  vt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && vt.push(p), p;
}
const Qt = Ec;
function Ec(e, t = null, r = null, n = 0, i = null, a = !1) {
  if ((!e || e === Gl) && (e = nr), vo(e)) {
    const u = jr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && qn(u, r), fn > 0 && !a && vt && (u.shapeFlag & 6 ? vt[vt.indexOf(e)] = u : vt.push(u)), u.patchFlag = -2, u;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: u, style: p } = t;
    u && !Ue(u) && (t.class = Ur(u)), we(p) && (/* @__PURE__ */ ta(p) && !ee(p) && (p = et({}, p)), t.style = Gi(p));
  }
  const l = Ue(e) ? 1 : yo(e) ? 128 : ei(e) ? 64 : we(e) ? 4 : ue(e) ? 2 : 0;
  return o(
    e,
    t,
    r,
    n,
    i,
    l,
    a,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ ta(e) || oo(e) ? et({}, e) : e : null;
}
function jr(e, t, r = !1, n = !1) {
  const { props: i, ref: a, patchFlag: l, children: u, transition: p } = e, v = t ? wc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && So(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? ee(a) ? a.concat(Un(t)) : [a, Un(t)] : Un(t)
    ) : a,
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
    patchFlag: t && e.type !== Z ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jr(e.ssContent),
    ssFallback: e.ssFallback && jr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && n && na(
    y,
    p.clone(y)
  ), y;
}
function pe(e = " ", t = 0) {
  return Qt(ni, null, e, t);
}
function se(e = "", t = !1) {
  return t ? (T(), Sc(nr, null, e)) : Qt(nr, null, e);
}
function jt(e) {
  return e == null || typeof e == "boolean" ? Qt(nr) : ee(e) ? Qt(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vo(e) ? Xt(e) : Qt(ni, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : jr(e);
}
function qn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !oo(t) ? t._ctx = Ct : i === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (n & 65) {
      qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ct }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [pe(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function wc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Ur([t.class, n.class]));
      else if (i === "style")
        t.style = Gi([t.style, n.style]);
      else if (Kn(i)) {
        const a = t[i], l = n[i];
        l && a !== l && !(ee(a) && a.includes(l)) ? t[i] = a ? [].concat(a, l) : l : l == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Gn(i) && (t[i] = l);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Ft(e, t, r, n = null) {
  Pt(e, t, 7, [
    r,
    n
  ]);
}
const Cc = ro();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Cc, a = {
    uid: xc++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: co(n, i),
    emitsOptions: no(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = ic.bind(null, a), e.ce && e.ce(a), a;
}
let lt = null;
const kc = () => lt || Ct;
let Bn, pn;
{
  const e = Jn(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (a) => {
      i.length > 1 ? i.forEach((l) => l(a)) : i[0](a);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => lt = r
  ), pn = t(
    "__VUE_SSR_SETTERS__",
    (r) => hn = r
  );
}
const yn = (e) => {
  const t = lt;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Ua = () => {
  lt && lt.scope.off(), Bn(null);
};
function Eo(e) {
  return e.vnode.shapeFlag & 4;
}
let hn = !1;
function Rc(e, t = !1, r = !1) {
  t && pn(t);
  const { props: n, children: i } = e.vnode, a = Eo(e);
  uc(e, n, a, t), hc(e, i, r || t);
  const l = a ? Oc(e, t) : void 0;
  return t && pn(!1), l;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yl);
  const { setup: n } = r;
  if (n) {
    er();
    const i = e.setupContext = n.length > 1 ? Pc(e) : null, a = yn(e), l = bn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), u = ys(l);
    if (tr(), a(), (u || e.sp) && !on(e) && Ys(e), u) {
      if (l.then(Ua, Ua), t)
        return l.then((p) => {
          pn(!0);
          try {
            Da(e, p, t);
          } finally {
            pn(!1);
          }
        }).catch((p) => {
          Qn(p, e, 0);
        });
      e.asyncDep = l;
    } else
      Da(e, l);
  } else
    To(e);
}
function Da(e, t, r) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : we(t) && (e.setupState = Hs(t)), To(e);
}
function To(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || qt);
  {
    const i = yn(e);
    er();
    try {
      Xl(e);
    } finally {
      tr(), i();
    }
  }
}
const Nc = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ii(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hs(_l(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ln)
        return ln[r](e);
    },
    has(t, r) {
      return r in t || r in ln;
    }
  })) : e.proxy;
}
function Ic(e) {
  return ue(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ Cl(e, t, hn), Mc = "3.5.42";
let Vi;
const Fa = typeof window < "u" && window.trustedTypes;
if (Fa)
  try {
    Vi = /* @__PURE__ */ Fa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wo = Vi ? (e) => Vi.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, Ha = Yt && /* @__PURE__ */ Yt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Yt.createElementNS(Lc, e) : t === "mathml" ? Yt.createElementNS(Uc, e) : r ? Yt.createElement(e, { is: r }) : Yt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Yt.createTextNode(e),
  createComment: (e) => Yt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, a) {
    const l = r ? r.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      Ha.innerHTML = wo(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Ha.content;
      if (n === "svg" || n === "mathml") {
        const p = u.firstChild;
        for (; p.firstChild; )
          u.appendChild(p.firstChild);
        u.removeChild(p);
      }
      t.insertBefore(u, r);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const $a = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, i = Ue(r);
  let a = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const l of t.split(";")) {
          const u = l.slice(0, l.indexOf(":")).trim();
          r[u] == null && en(n, u, "");
        }
      else
        for (const l in t)
          r[l] == null && en(n, l, "");
    for (const l in r) {
      l === "display" && (a = !0);
      const u = r[l];
      u != null ? zc(
        e,
        l,
        !Ue(t) && t ? t[l] : void 0,
        u
      ) || en(n, l, u) : en(n, l, "");
    }
  } else if (i) {
    if (t !== r) {
      const l = n[jc];
      l && (r += ";" + l), n.cssText = r, a = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  $a in e && (e[$a] = a ? n.display : "", e[$c] && (n.display = "none"));
}
const On = /\s*!important$/;
function en(e, t, r) {
  if (ee(r))
    r.forEach((n) => en(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    On.test(r) ? e.setProperty(t, r.replace(On, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    On.test(r) ? e.setProperty(
      kr(n),
      r.replace(On, ""),
      "important"
    ) : e[n] = r;
  }
}
const ja = ["Webkit", "Moz", "ms"], vi = {};
function Bc(e, t) {
  const r = vi[t];
  if (r)
    return r;
  let n = Rt(t);
  if (n !== "filter" && n in e)
    return vi[t] = n;
  n = vs(n);
  for (let i = 0; i < ja.length; i++) {
    const a = ja[i] + n;
    if (a in e)
      return vi[t] = a;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ue(n) && r === n;
}
const Va = "http://www.w3.org/1999/xlink";
function qa(e, t, r, n, i, a = Xo(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Va, t.slice(6, t.length)) : e.setAttributeNS(Va, t, r) : r == null || a && !Es(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Bt(r) ? String(r) : r
  );
}
function Ba(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? wo(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, p = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (u !== p || !("_value" in e)) && (e.value = p), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let l = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = Es(r) : r == null && u === "string" ? (r = "", l = !0) : u === "number" && (r = 0, l = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function Er(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const za = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const a = e[za] || (e[za] = {}), l = a[t];
  if (n && l)
    l.value = n;
  else {
    const [u, p] = Xc(t);
    if (n) {
      const v = a[t] = Qc(
        n,
        i
      );
      Er(e, u, v, p);
    } else l && (Wc(e, u, l, p), a[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : kr(e.slice(2)), t];
}
let Si = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => Si || (Jc.then(() => Si = 0), Si = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (ee(i)) {
      const a = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        a.call(n), n._stopped = !0;
      };
      const l = i.slice(), u = [n];
      for (let p = 0; p < l.length && !n._stopped; p++) {
        const v = l[p];
        v && Pt(
          v,
          t,
          5,
          u
        );
      }
    } else
      Pt(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Wa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, a) => {
  const l = i === "svg";
  t === "class" ? Hc(e, n, l) : t === "style" ? qc(e, r, n) : Kn(t) ? Gn(t) || Kc(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, l)) ? (Ba(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qa(e, t, n, l, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ue(n))) ? Ba(e, Rt(t), n, a, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), qa(e, t, n, l));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wa(t) && ue(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wa(t) && Ue(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Rt(t);
  return Array.isArray(r) ? r.some((i) => Rt(i) === n) : Object.keys(r).some((i) => Rt(i) === n);
}
const zn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => Mn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Ka(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tr = /* @__PURE__ */ Symbol("_assign"), Nn = /* @__PURE__ */ Symbol("_initialValue");
function Ei(e, t, r) {
  return t && (e = e.trim()), r && (e = Xn(e)), e;
}
const Ti = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[Nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Tr] = zn(i);
    const a = n || i.props && i.props.type === "number";
    Er(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Tr](Ei(e.value, r, a));
    }), (r || a) && Er(e, "change", () => {
      e.value = Ei(e.value, r, a);
    }), t || (Er(e, "compositionstart", nu), Er(e, "compositionend", Ka), Er(e, "change", Ka));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", a = e[Nn];
    delete e[Nn], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Tr](Ei(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: a } }, l) {
    if (e[Tr] = zn(l), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Xn(e.value) : e.value, p = t ?? "";
    if (u === p)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === p) || (e.value = p);
  }
}, at = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Er(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (p) => p.selected).map(
        (p) => r ? Xn(Wn(p)) : Wn(p)
      ), a = e.multiple, l = a ? Ar(e._modelValue) ? new Set(i) : i : i[0], u = e._pendingValue = [
        a,
        a ? ee(l) ? i.slice() : i : l
      ];
      try {
        e[Tr](l);
      } finally {
        js(() => {
          e._pendingValue === u && (e._pendingValue = void 0);
        });
      }
    }), e[Tr] = zn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ga(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Tr] = zn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && Ga(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return hr(e, t);
  if (Ar(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Ga(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !Ar(t))) {
    for (let i = 0, a = e.options.length; i < a; i++) {
      const l = e.options[i], u = Wn(l);
      if (r)
        if (n) {
          const p = typeof u;
          p === "string" || p === "number" ? l.selected = t.some((v) => String(v) === String(u)) : l.selected = Zo(t, u) > -1;
        } else
          l.selected = t.has(u);
      else if (hr(Wn(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Wn(e) {
  return "_value" in e ? e._value : e.value;
}
const au = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => au.some((r) => e[`${r}Key`] && !t.includes(r))
}, Pn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...a) => {
    for (let l = 0; l < t.length; l++) {
      const u = su[t[l]];
      if (u && u(i, t)) return;
    }
    return e(i, ...a);
  }));
}, ou = /* @__PURE__ */ et({ patchProp: eu }, Dc);
let Ya;
function lu() {
  return Ya || (Ya = bc(ou));
}
const cu = ((...e) => {
  const t = lu().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = du(n);
    if (!i) return;
    const a = t._component;
    !ue(a) && !a.render && !a.template && (a.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return Ue(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(n);
  if (i === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const a = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, a), a;
  } catch (a) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: a }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: a });
  }
}
function Xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, l, u = [], p = !0, v = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(p = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); p = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!p && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (v) throw i;
      }
    }
    return u;
  }
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bu(e, t) {
  return pu(e) || hu(e, t) || yu(e, t) || mu();
}
function yu(e, t) {
  if (e) {
    if (typeof e == "string") return Xa(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Xa(e, t) : void 0;
  }
}
const Co = Object.entries, Ja = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let $e = Object.freeze, We = Object.seal, Mr = Object.create, xo = typeof Reflect < "u" && Reflect, qi = xo.apply, Bi = xo.construct;
$e || ($e = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
qi || (qi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  return t.apply(r, i);
});
Bi || (Bi = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Sr = He(Array.prototype.forEach), Su = He(Array.prototype.lastIndexOf), Za = He(Array.prototype.pop), Yr = He(Array.prototype.push), Eu = He(Array.prototype.splice), Hr = Array.isArray, tn = He(String.prototype.toLowerCase), wi = He(String.prototype.toString), Qa = He(String.prototype.match), Xr = He(String.prototype.replace), es = He(String.prototype.indexOf), Tu = He(String.prototype.trim), wu = He(Number.prototype.toString), Cu = He(Boolean.prototype.toString), ts = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), rs = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), mt = He(Object.prototype.hasOwnProperty), Jr = He(Object.prototype.toString), Je = He(RegExp.prototype.test), _r = xu(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return qi(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Bi(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tn;
  if (Ja && Ja(e, null), !Hr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (gu(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    mt(e, t) || (e[t] = null);
  return e;
}
function _t(e) {
  const t = Mr(null);
  for (const n of Co(e)) {
    var r = bu(n, 2);
    const i = r[0], a = r[1];
    mt(e, i) && (Hr(a) ? t[i] = Au(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = _t(a) : t[i] = a);
  }
  return t;
}
function ku(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return wu(e);
    case "boolean":
      return Cu(e);
    case "bigint":
      return ts ? ts(e) : "0";
    case "symbol":
      return rs ? rs(e) : "Symbol()";
    case "undefined":
      return Jr(e);
    case "function":
    case "object": {
      if (e === null)
        return Jr(e);
      const t = e, r = kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Jr(n);
      }
      return Jr(e);
    }
    default:
      return Jr(e);
  }
}
function kt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ru(e) {
  try {
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const ns = $e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ci = $e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xi = $e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = $e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ai = $e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = $e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), is = $e(["#text"]), as = $e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ki = $e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ss = $e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), In = $e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = We(/{{[\w\W]*|^[\w\W]*}}/g), Iu = We(/<%[\w\W]*|^[\w\W]*%>/g), Mu = We(/\${[\w\W]*/g), Lu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = We(/^aria-[\-\w]+$/), os = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), ls = We(/<[/\w!]/g), cs = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), gt = {
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
}, Ao = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = $e(be({}, Ao)), Bu = (function() {
  const e = {};
  return Sr(Ao, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $e(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, us = function() {
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
}, ur = function(t, r, n, i) {
  return mt(t, r) && Hr(t[r]) ? be(i.base ? _t(i.base) : {}, t[r], i.transform) : n;
}, Ri = function(t, r, n) {
  const i = mt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? _t(i) : n();
};
function ko() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => ko(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== gt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, l = e.Node, u = e.Element, p = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, S = e.trustedTypes, P = u.prototype, j = kt(P, "cloneNode"), ne = kt(P, "remove"), z = kt(P, "nextSibling"), ce = kt(P, "childNodes"), ie = kt(P, "parentNode"), B = kt(P, "shadowRoot"), U = kt(P, "attributes"), V = l && l.prototype ? kt(l.prototype, "nodeType") : null, le = l && l.prototype ? kt(l.prototype, "nodeName") : null, Pe = l && l.prototype ? kt(l.prototype, "ownerDocument") : null, Oe = function(d) {
    return V ? V(d) : d.nodeType;
  }, je = function(d) {
    return le ? le(d) : d.nodeName;
  };
  if (typeof a == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Ie = "", tt, ct = !1, Ke = 0;
  const St = function() {
    if (Ke > 0)
      throw _r('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(d) {
    St(), Ke++;
    try {
      return Ee.createHTML(d);
    } finally {
      Ke--;
    }
  }, Me = function(d) {
    St(), Ke++;
    try {
      return Ee.createScriptURL(d);
    } finally {
      Ke--;
    }
  }, ye = function() {
    return ct || (tt = Wu(S, i), ct = !0), tt;
  }, de = r, Ve = de.implementation, ge = de.createNodeIterator, Ce = de.createDocumentFragment, qe = de.getElementsByTagName, Xe = n.importNode;
  let he = us();
  t.isSupported = typeof Co == "function" && typeof ie == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const At = Pu, Be = Iu, ut = Mu, bt = Lu, Et = Uu, rt = Du, dt = Fu, h = $u;
  let b = os, _ = null;
  const R = be({}, [...ns, ...Ci, ...xi, ...Ai, ...is]);
  let E = null;
  const A = be({}, [...as, ...ki, ...ss, ...In]);
  let M = Object.seal(Mr(null, {
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
  })), D = null, L = null;
  const C = Object.seal(Mr(null, {
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
  let G = !0, $ = !0, W = !1, J = !0, te = !1, O = !0, N = !1, H = !1, Q = null, oe = null, _e = !1, fe = !1, Le = !1, Re = !1, Te = !0, nt = !1;
  const It = "user-content-";
  let Mt = !0, mr = !1, Tt = {}, yt = null;
  const ar = be({}, [
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
  let Lt = null;
  const sr = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let wt = null;
  const or = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ut = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", Fe = "http://www.w3.org/1999/xhtml";
  let Wt = Fe, Vr = !1, qr = null;
  const ai = be({}, [Ut, zt, Fe], wi), gn = $e(["mi", "mo", "mn", "ms", "mtext"]);
  let Br = be({}, gn);
  const _n = $e(["annotation-xml"]);
  let zr = be({}, _n);
  const vn = be({}, ["title", "style", "font", "a", "script"]);
  let lr = null;
  const I = ["application/xhtml+xml", "text/html"], x = "text/html";
  let f = null, ae = null;
  const Ge = r.createElement("form"), Kt = function(d) {
    return d instanceof RegExp || d instanceof Function;
  }, si = function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ae && ae === d)
      return;
    (!d || typeof d != "object") && (d = {}), d = _t(d), lr = // eslint-disable-next-line unicorn/prefer-includes
    I.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? x : d.PARSER_MEDIA_TYPE, f = lr === "application/xhtml+xml" ? wi : tn, _ = ur(d, "ALLOWED_TAGS", R, {
      transform: f
    }), E = ur(d, "ALLOWED_ATTR", A, {
      transform: f
    }), qr = ur(d, "ALLOWED_NAMESPACES", ai, {
      transform: wi
    }), wt = ur(d, "ADD_URI_SAFE_ATTR", or, {
      transform: f,
      base: or
    }), Lt = ur(d, "ADD_DATA_URI_TAGS", sr, {
      transform: f,
      base: sr
    }), yt = ur(d, "FORBID_CONTENTS", ar, {
      transform: f
    }), D = ur(d, "FORBID_TAGS", _t({}), {
      transform: f
    }), L = ur(d, "FORBID_ATTR", _t({}), {
      transform: f
    }), Tt = mt(d, "USE_PROFILES") ? d.USE_PROFILES && typeof d.USE_PROFILES == "object" ? _t(d.USE_PROFILES) : d.USE_PROFILES : !1, G = d.ALLOW_ARIA_ATTR !== !1, $ = d.ALLOW_DATA_ATTR !== !1, W = d.ALLOW_UNKNOWN_PROTOCOLS || !1, J = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = d.SAFE_FOR_TEMPLATES || !1, O = d.SAFE_FOR_XML !== !1, N = d.WHOLE_DOCUMENT || !1, fe = d.RETURN_DOM || !1, Le = d.RETURN_DOM_FRAGMENT || !1, Re = d.RETURN_TRUSTED_TYPE || !1, _e = d.FORCE_BODY || !1, Te = d.SANITIZE_DOM !== !1, nt = d.SANITIZE_NAMED_PROPS || !1, Mt = d.KEEP_CONTENT !== !1, mr = d.IN_PLACE || !1, b = Ru(d.ALLOWED_URI_REGEXP) ? d.ALLOWED_URI_REGEXP : os, Wt = typeof d.NAMESPACE == "string" ? d.NAMESPACE : Fe, Br = Ri(
      d,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => be({}, gn)
      // Default built-in map
    ), zr = Ri(
      d,
      "HTML_INTEGRATION_POINTS",
      () => be({}, _n)
      // Default built-in map
    );
    const g = Ri(d, "CUSTOM_ELEMENT_HANDLING", () => Mr(null));
    if (M = Mr(null), mt(g, "tagNameCheck") && Kt(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), mt(g, "attributeNameCheck") && Kt(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), mt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(M), te && ($ = !1), Le && (fe = !0), Tt && (_ = be({}, is), E = Mr(null), Tt.html === !0 && (be(_, ns), be(E, as)), Tt.svg === !0 && (be(_, Ci), be(E, ki), be(E, In)), Tt.svgFilters === !0 && (be(_, xi), be(E, ki), be(E, In)), Tt.mathMl === !0 && (be(_, Ai), be(E, ss), be(E, In))), C.tagCheck = null, C.attributeCheck = null, mt(d, "ADD_TAGS") && (typeof d.ADD_TAGS == "function" ? C.tagCheck = d.ADD_TAGS : Hr(d.ADD_TAGS) && (_ === R && (_ = _t(_)), be(_, d.ADD_TAGS, f))), mt(d, "ADD_ATTR") && (typeof d.ADD_ATTR == "function" ? C.attributeCheck = d.ADD_ATTR : Hr(d.ADD_ATTR) && (E === A && (E = _t(E)), be(E, d.ADD_ATTR, f))), mt(d, "ADD_FORBID_CONTENTS") && Hr(d.ADD_FORBID_CONTENTS) && (yt === ar && (yt = _t(yt)), be(yt, d.ADD_FORBID_CONTENTS, f)), Mt && (_["#text"] = !0), N && be(_, ["html", "head", "body"]), _.table && (be(_, ["tbody"]), delete D.tbody), d.TRUSTED_TYPES_POLICY) {
      if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _r('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _r('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const k = Ee;
      Ee = d.TRUSTED_TYPES_POLICY;
      try {
        Ie = De("");
      } catch (q) {
        throw Ee = k, q;
      }
    } else d.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Ie = "") : (Ee === void 0 && (Ee = ye()), Ee && typeof Ie == "string" && (Ie = De("")));
    $e && $e(d), ae = d;
  }, oa = be({}, [...Ci, ...xi, ...Ou]), la = be({}, [...Ai, ...Nu]), Oo = function(d, g, k) {
    return g.namespaceURI === Fe ? d === "svg" : g.namespaceURI === Ut ? d === "svg" && (k === "annotation-xml" || Br[k]) : !!oa[d];
  }, No = function(d, g, k) {
    return g.namespaceURI === Fe ? d === "math" : g.namespaceURI === zt ? d === "math" && zr[k] : !!la[d];
  }, Po = function(d, g, k) {
    return g.namespaceURI === zt && !zr[k] || g.namespaceURI === Ut && !Br[k] ? !1 : !la[d] && (vn[d] || !oa[d]);
  }, Io = function(d) {
    let g = ie(d);
    (!g || !g.tagName) && (g = {
      namespaceURI: Wt,
      tagName: "template"
    });
    const k = tn(d.tagName), q = tn(g.tagName);
    return qr[d.namespaceURI] ? d.namespaceURI === zt ? Oo(k, g, q) : d.namespaceURI === Ut ? No(k, g, q) : d.namespaceURI === Fe ? Po(k, g, q) : !!(lr === "application/xhtml+xml" && qr[d.namespaceURI]) : !1;
  }, cr = function(d) {
    Yr(t.removed, {
      element: d
    });
    try {
      ie(d).removeChild(d);
    } catch {
      if (ne(d), !ie(d))
        throw _r("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ca = function(d, g, k) {
    try {
      d.removeAttributeNode(g);
    } catch {
      try {
        d.removeAttribute(k);
      } catch {
      }
    }
  }, Sn = function(d) {
    En(d);
    const g = ce(d);
    if (g) {
      const q = [];
      Sr(g, (X) => {
        Yr(q, X);
      }), Sr(q, (X) => {
        try {
          ne(X);
        } catch {
        }
      });
    }
    const k = U(d);
    if (k)
      for (let q = k.length - 1; q >= 0; --q) {
        const X = k[q], re = X && X.name;
        typeof re == "string" && ca(d, X, re);
      }
  }, br = function(d, g, k) {
    if (!k)
      try {
        k = g.getAttributeNode(d);
      } catch {
        k = null;
      }
    Yr(t.removed, {
      attribute: k || null,
      from: g
    });
    try {
      k ? g.removeAttributeNode(k) : g.removeAttribute(d);
    } catch {
      try {
        g.removeAttribute(d);
      } catch {
      }
    }
    if (d === "is")
      if (fe || Le)
        try {
          cr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(d, "");
        } catch {
        }
  }, Mo = function(d) {
    const g = U(d);
    if (g)
      for (let k = g.length - 1; k >= 0; --k) {
        const q = g[k], X = q && q.name;
        typeof X != "string" || E[f(X)] || ca(d, q, X);
      }
  }, En = function(d) {
    const g = [d];
    for (; g.length > 0; ) {
      const k = g.pop();
      Oe(k) === gt.element && Mo(k);
      const X = ce(k);
      if (X)
        for (let re = X.length - 1; re >= 0; --re)
          g.push(X[re]);
    }
  }, ua = function(d, g) {
    return O ? d === "patchsrc" ? !0 : d === "for" && g !== "label" && g !== "output" : !1;
  }, Lo = function(d) {
    if (!O)
      return;
    const g = [d];
    for (; g.length > 0; ) {
      const k = g.pop(), q = Oe(k);
      if (q === gt.processingInstruction || q === gt.comment && Je(cs, k.data)) {
        try {
          ne(k);
        } catch {
        }
        continue;
      }
      if (q === gt.element) {
        const re = k, Ae = f(je(k));
        try {
          re.hasAttribute && re.hasAttribute("patchsrc") && re.removeAttribute("patchsrc"), re.hasAttribute && re.hasAttribute("for") && ua("for", Ae) && re.removeAttribute("for");
        } catch {
        }
      }
      const X = ce(k);
      if (X)
        for (let re = X.length - 1; re >= 0; --re)
          g.push(X[re]);
    }
  }, da = function(d) {
    let g = null, k = null;
    if (_e)
      d = "<remove></remove>" + d;
    else {
      const re = Qa(d, /^[\r\n\t ]+/);
      k = re && re[0];
    }
    lr === "application/xhtml+xml" && Wt === Fe && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
    const q = Ee ? De(d) : d;
    if (Wt === Fe)
      try {
        g = new y().parseFromString(q, lr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ve.createDocument(Wt, "template", null);
      try {
        g.documentElement.innerHTML = Vr ? Ie : q;
      } catch {
      }
    }
    const X = g.body || g.documentElement;
    return d && k && X.insertBefore(r.createTextNode(k), X.childNodes[0] || null), Wt === Fe ? qe.call(g, N ? "html" : "body")[0] : N ? g.documentElement : X;
  }, fa = function(d) {
    const g = Pe ? Pe(d) : d.ownerDocument;
    return ge.call(
      g || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Tn = function(d) {
    return d = Xr(d, At, " "), d = Xr(d, Be, " "), d = Xr(d, ut, " "), d;
  }, oi = function(d) {
    var g;
    d.normalize();
    const k = Pe ? Pe(d) : d.ownerDocument, q = ge.call(
      k || d,
      d,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = q.nextNode();
    for (; X; )
      X.data = Tn(X.data), X = q.nextNode();
    const re = (g = d.querySelectorAll) === null || g === void 0 ? void 0 : g.call(d, "template");
    re && Sr(re, (Ae) => {
      Rr(Ae.content) && oi(Ae.content);
    });
  }, wn = function(d) {
    const g = le ? le(d) : null;
    return typeof g != "string" || f(g) !== "form" ? !1 : typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    d.attributes !== U(d) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    d.nodeType !== V(d) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    d.childNodes !== ce(d);
  }, Rr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return V(d) === gt.documentFragment;
    } catch {
      return !1;
    }
  }, Wr = function(d) {
    if (!V || typeof d != "object" || d === null)
      return !1;
    try {
      return typeof V(d) == "number";
    } catch {
      return !1;
    }
  };
  function Dt(F, d, g) {
    F.length !== 0 && Sr(F, (k) => {
      k.call(t, d, g, ae);
    });
  }
  const Uo = function(d, g) {
    return !!(O && d.hasChildNodes() && !Wr(d.firstElementChild) && Je(ls, d.textContent) && Je(ls, d.innerHTML) || O && d.namespaceURI === Fe && qu[g] && (Wr(d.firstElementChild) || typeof d.textContent == "string" && Je(Bu[g], d.textContent)) || d.nodeType === gt.processingInstruction || O && d.nodeType === gt.comment && Je(cs, d.data));
  }, Cn = function(d, g) {
    if (d instanceof RegExp)
      return Je(d, g);
    if (d instanceof Function) {
      for (var k = arguments.length, q = new Array(k > 2 ? k - 2 : 0), X = 2; X < k; X++)
        q[X - 2] = arguments[X];
      return !!d(g, ...q);
    }
    return !1;
  }, Do = function(d, g, k) {
    if (!D[g] && ya(g) && Cn(M.tagNameCheck, g))
      return !1;
    if (Mt && !yt[g]) {
      const q = ie(d), X = ce(d);
      if (X && q) {
        const re = X.length;
        for (let Ae = re - 1; Ae >= 0; --Ae) {
          const Ne = d === k ? j(X[Ae], !0) : X[Ae];
          q.insertBefore(Ne, z(d));
        }
      }
    }
    return cr(d), !0;
  }, pa = function(d, g, k, q) {
    return d.length === 0 ? g : g === k || g === q ? _t(g) : g;
  }, ha = function(d, g) {
    return d === g || ie(d) !== null ? !1 : (mr && En(d), !0);
  }, ma = function(d, g) {
    if (Dt(he.beforeSanitizeElements, d, null), ha(d, g))
      return !0;
    if (wn(d))
      return cr(d), !0;
    const k = f(je(d));
    if (_ = pa(he.uponSanitizeElement, _, R, Q), Dt(he.uponSanitizeElement, d, {
      tagName: k,
      allowedTags: _
    }), ha(d, g))
      return !0;
    if (Uo(d, k))
      return cr(d), !0;
    if (D[k] || !(C.tagCheck instanceof Function && C.tagCheck(k)) && !_[k]) {
      const X = Do(d, k, g);
      return X === !1 && Dt(he.afterSanitizeElements, d, null), X;
    }
    if (Oe(d) === gt.element && !Io(d) || (k === "noscript" || k === "noembed" || k === "noframes") && Je(ju, d.innerHTML))
      return cr(d), !0;
    if (te && d.nodeType === gt.text) {
      const X = Tn(d.textContent);
      d.textContent !== X && (Yr(t.removed, {
        element: d.cloneNode()
      }), d.textContent = X);
    }
    return Dt(he.afterSanitizeElements, d, null), !1;
  }, ba = function(d, g, k) {
    if (L[g] || ua(g, d) || Te && (g === "id" || g === "name") && (k in r || k in Ge))
      return !1;
    const q = E[g] || C.attributeCheck instanceof Function && C.attributeCheck(g, d);
    return $ && Je(bt, g) || G && Je(Et, g) ? !0 : q ? wt[g] || Je(b, Xr(k, dt, "")) || (g === "src" || g === "xlink:href" || g === "href") && d !== "script" && es(k, "data:") === 0 && Lt[d] || W && !Je(rt, Xr(k, dt, "")) ? !0 : !k : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ya(d) && Cn(M.tagNameCheck, d) && Cn(M.attributeNameCheck, g, d) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && Cn(M.tagNameCheck, k)
    );
  }, Fo = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ya = function(d) {
    return !Fo[tn(d)] && Je(h, d);
  }, Ho = function(d, g, k, q) {
    if (Ee && typeof S == "object" && typeof S.getAttributeType == "function" && !k)
      switch (S.getAttributeType(d, g)) {
        case "TrustedHTML":
          return De(q);
        case "TrustedScriptURL":
          return Me(q);
      }
    return q;
  }, $o = function(d, g, k, q) {
    try {
      k ? d.setAttributeNS(k, g, q) : d.setAttribute(g, q), wn(d) ? cr(d) : Za(t.removed);
    } catch {
      br(g, d);
    }
  }, ga = function(d) {
    Dt(he.beforeSanitizeAttributes, d, null);
    const g = d.attributes;
    if (!g || wn(d))
      return;
    E = pa(he.uponSanitizeAttribute, E, A, oe);
    const k = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let q = g.length;
    const X = f(d.nodeName);
    for (; q--; ) {
      const re = g[q], Ae = re.name, Ne = re.namespaceURI, ft = re.value, pt = f(Ae), ci = ft;
      let it = Ae === "value" ? ci : Tu(ci);
      if (k.attrName = pt, k.attrValue = it, k.keepAttr = !0, k.forceKeepAttr = void 0, Dt(he.uponSanitizeAttribute, d, k), it = k.attrValue, nt && (pt === "id" || pt === "name") && es(it, It) !== 0 && (br(Ae, d, re), it = It + it), O && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, it)) {
        br(Ae, d, re);
        continue;
      }
      if (pt === "attributename" && Qa(it, "href")) {
        br(Ae, d, re);
        continue;
      }
      if (!k.forceKeepAttr) {
        if (!k.keepAttr) {
          br(Ae, d, re);
          continue;
        }
        if (!J && Je(Vu, it)) {
          br(Ae, d, re);
          continue;
        }
        if (te && (it = Tn(it)), !ba(X, pt, it)) {
          br(Ae, d, re);
          continue;
        }
        it = Ho(X, pt, Ne, it), it !== ci && $o(d, Ae, Ne, it);
      }
    }
    Dt(he.afterSanitizeAttributes, d, null);
  }, xn = function(d) {
    let g = null;
    const k = fa(d);
    for (Dt(he.beforeSanitizeShadowDOM, d, null); g = k.nextNode(); )
      if (Dt(he.uponSanitizeShadowNode, g, null), ma(g, d), ga(g), Rr(g.content) && xn(g.content), Oe(g) === gt.element) {
        const q = B(g);
        Rr(q) && (li(q), xn(q));
      }
    Dt(he.afterSanitizeShadowDOM, d, null);
  }, li = function(d) {
    const g = [{
      node: d,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const k = g.pop();
      if (k.shadow) {
        xn(k.shadow);
        continue;
      }
      const q = k.node, re = Oe(q) === gt.element, Ae = ce(q);
      if (Ae)
        for (let Ne = Ae.length - 1; Ne >= 0; --Ne)
          g.push({
            node: Ae[Ne],
            shadow: null
          });
      if (re) {
        const Ne = le ? le(q) : null;
        if (typeof Ne == "string" && f(Ne) === "template") {
          const ft = q.content;
          Rr(ft) && g.push({
            node: ft,
            shadow: null
          });
        }
      }
      if (re) {
        const Ne = B(q);
        Rr(Ne) && g.push({
          node: null,
          shadow: Ne
        }, {
          node: Ne,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, k = null, q = null, X = null;
    if (Vr = !F, Vr && (F = "<!-->"), typeof F != "string" && !Wr(F) && (F = ku(F), typeof F != "string"))
      throw _r("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = Q, E = oe) : si(d), (he.uponSanitizeElement.length > 0 || he.uponSanitizeAttribute.length > 0) && (_ = _t(_)), he.uponSanitizeAttribute.length > 0 && (E = _t(E)), t.removed = [];
    const re = mr && typeof F != "string" && Wr(F);
    if (re) {
      Lo(F);
      const ft = je(F);
      if (typeof ft == "string") {
        const pt = f(ft);
        if (!_[pt] || D[pt])
          throw Sn(F), _r("root node is forbidden and cannot be sanitized in-place");
      }
      if (wn(F))
        throw Sn(F), _r("root node is clobbered and cannot be sanitized in-place");
      try {
        li(F);
      } catch (pt) {
        throw Sn(F), pt;
      }
    } else if (Wr(F))
      g = da("<!---->"), k = g.ownerDocument.importNode(F, !0), k.nodeType === gt.element && k.nodeName === "BODY" || k.nodeName === "HTML" ? g = k : g.appendChild(k), li(k);
    else {
      if (!fe && !te && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && Re ? De(F) : F;
      if (g = da(F), !g)
        return fe ? null : Re ? Ie : "";
    }
    g && _e && cr(g.firstChild);
    const Ae = re ? F : g;
    try {
      const ft = fa(Ae);
      for (; q = ft.nextNode(); )
        ma(q, Ae), ga(q), Rr(q.content) && xn(q.content);
    } catch (ft) {
      throw re && (Sn(F), Sr(t.removed, (pt) => {
        pt.element && En(pt.element);
      })), ft;
    }
    if (re)
      return Sr(t.removed, (ft) => {
        ft.element && En(ft.element);
      }), te && oi(F), F;
    if (fe) {
      if (te && oi(g), Le)
        for (X = Ce.call(g.ownerDocument); g.firstChild; )
          X.appendChild(g.firstChild);
      else
        X = g;
      return (E.shadowroot || E.shadowrootmode) && (X = Xe.call(n, X, !0)), X;
    }
    let Ne = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Je(Hu, g.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ne), te && (Ne = Tn(Ne)), Ee && Re ? De(Ne) : Ne;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    si(F), H = !0, Q = _, oe = E;
  }, t.clearConfig = function() {
    ae = null, H = !1, Q = null, oe = null, Ee = tt, Ie = "";
  }, t.isValidAttribute = function(F, d, g) {
    ae || si({});
    const k = f(F), q = f(d);
    return ba(k, q, g);
  }, t.addHook = function(F, d) {
    typeof d == "function" && mt(he, F) && Yr(he[F], d);
  }, t.removeHook = function(F, d) {
    if (mt(he, F)) {
      if (d !== void 0) {
        const g = Su(he[F], d);
        return g === -1 ? void 0 : Eu(he[F], g, 1)[0];
      }
      return Za(he[F]);
    }
  }, t.removeHooks = function(F) {
    mt(he, F) && (he[F] = []);
  }, t.removeAllHooks = function() {
    he = us();
  }, t;
}
var Ku = ko();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oi, ds;
function Yu() {
  if (ds) return Oi;
  ds = 1;
  var e = /["'&<>]/;
  Oi = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var a, l = "", u = 0, p = 0;
    for (u = i.index; u < n.length; u++) {
      switch (n.charCodeAt(u)) {
        case 34:
          a = "&quot;";
          break;
        case 38:
          a = "&amp;";
          break;
        case 39:
          a = "&#39;";
          break;
        case 60:
          a = "&lt;";
          break;
        case 62:
          a = "&gt;";
          break;
        default:
          continue;
      }
      p !== u && (l += n.substring(p, u)), p = u + 1, l += a;
    }
    return p !== u ? l + n.substring(p, u) : l;
  }
  return Oi;
}
var Xu = Yu();
const fs = /* @__PURE__ */ Gu(Xu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Ju(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function s(e, t, r, n, i) {
  const a = typeof r == "object" ? r : void 0, l = typeof n == "number" ? n : typeof r == "number" ? r : void 0, u = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, p = (z) => z, v = (u.sanitize ? Ku.sanitize : p) || p, y = u.escape ? fs : p, S = (z) => typeof z == "string" || typeof z == "number", P = (z, ce, ie) => z.replace(/%n/g, "" + ie).replace(/{([^{}]*)}/g, (B, U) => {
    if (ce === void 0 || !(U in ce))
      return y(B);
    const V = ce[U];
    return S(V) ? y(`${V}`) : typeof V == "object" && S(V.value) ? (V.escape !== !1 ? fs : p)(`${V.value}`) : y(B);
  });
  let ne = (i?.bundle ?? Ju(e)).translations[t] || t;
  return ne = Array.isArray(ne) ? ne[0] : ne, v(typeof a == "object" || l !== void 0 ? P(
    ne,
    a,
    l
  ) : ne);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, id = ["aria-label"], ad = { class: "library-catalogue-actions-list" }, sd = ["href"], od = ["href"], ld = ["href"], cd = ["href"], ud = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, dd = { class: "library-muted library-catalogue-eyebrow" }, fd = { id: "library-actions-health-heading" }, pd = { class: "library-muted" }, hd = {
  key: 0,
  class: "library-muted"
}, md = {
  key: 1,
  class: "library-notice"
}, bd = {
  key: 2,
  class: "library-muted"
}, yd = {
  key: 0,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-muted"
}, _d = {
  key: 2,
  class: "library-muted"
}, vd = ["disabled"], Sd = { class: "library-actions-health-links" }, Ed = ["href"], Td = ["href"], wd = ["href"], Cd = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Md = { class: "library-muted" }, Ld = ["href"], Ud = ["href"], Dd = ["action"], Fd = ["value"], Hd = {
  type: "submit",
  class: "button secondary"
}, $d = { class: "library-muted" }, jd = ["href"], Vd = ["action"], qd = ["value"], Bd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, Kd = { class: "library-useful-views-copy" }, Gd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-useful-views-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-muted" }, Zd = ["aria-label"], Qd = ["href", "title"], ef = { class: "library-useful-view-count" }, tf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, rf = { class: "library-weak-metadata-dashboard-copy" }, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { id: "library-weak-metadata-heading" }, sf = { class: "library-muted" }, of = ["aria-label"], lf = ["href", "title"], cf = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, uf = { class: "library-saved-collections-copy" }, df = { class: "library-muted library-catalogue-eyebrow" }, ff = { id: "library-saved-collections-heading" }, pf = { class: "library-muted" }, hf = ["action"], mf = ["value"], bf = ["value"], yf = ["placeholder", "disabled"], gf = ["disabled"], _f = {
  key: 0,
  class: "library-muted"
}, vf = ["aria-label"], Sf = ["href"], Ef = ["action"], Tf = ["value"], wf = {
  type: "submit",
  class: "button tertiary"
}, Cf = ["aria-label"], xf = ["name", "value"], Af = { class: "library-quick-search-row" }, kf = { class: "library-quick-filter-search" }, Rf = ["aria-label"], Of = { class: "library-quick-filter-options" }, Nf = { class: "library-quick-filter-option-grid" }, Pf = { value: "title" }, If = { value: "recent" }, Mf = { value: "publicationDate" }, Lf = { value: "publication" }, Uf = { value: "lastOpened" }, Df = { value: "format" }, Ff = { value: "" }, Hf = { value: "1" }, $f = ["value"], jf = ["value"], Vf = ["aria-label"], qf = ["aria-label"], Bf = { class: "library-filter-panel" }, zf = { class: "library-filter-panel-summary" }, Wf = ["aria-label"], Kf = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, Gf = { value: "" }, Yf = ["value"], Xf = { value: "" }, Jf = ["value"], Zf = { value: "" }, Qf = ["value"], ep = { value: "" }, tp = ["value"], rp = { value: "" }, np = ["value"], ip = { value: "" }, ap = ["value"], sp = { value: "" }, op = ["value"], lp = { value: "" }, cp = ["value"], up = { value: "" }, dp = ["value"], fp = { value: "" }, pp = ["value"], hp = { value: "" }, mp = { value: "1" }, bp = { value: "" }, yp = { value: "1" }, gp = { value: "title" }, _p = { value: "recent" }, vp = { value: "publicationDate" }, Sp = { value: "publication" }, Ep = { value: "lastOpened" }, Tp = { value: "format" }, wp = ["value"], Cp = ["value"], xp = ["aria-label"], Ap = ["aria-label"], kp = ["href"], Rp = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Op = { class: "library-muted library-catalogue-eyebrow" }, Np = { id: "library-discovery-heading" }, Pp = { class: "library-muted" }, Ip = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Mp = { key: 0 }, Lp = { key: 1 }, Up = { key: 2 }, Dp = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Fp = { key: 0 }, Hp = { key: 1 }, $p = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, jp = { class: "library-muted library-catalogue-eyebrow" }, Vp = { id: "library-publication-issue-groups-heading" }, qp = { class: "library-muted" }, Bp = {
  key: 0,
  class: "library-notice"
}, zp = { class: "library-publication-issue-label" }, Wp = ["href"], Kp = { class: "library-muted" }, Gp = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Yp = { class: "library-muted" }, Xp = {
  href: "/apps/library/",
  class: "button secondary"
}, Jp = { class: "library-catalogue-status-row" }, Zp = { class: "library-muted library-filter-result-summary" }, Qp = { key: 0 }, eh = { href: "?" }, th = ["aria-label"], rh = { class: "library-pagination-range" }, nh = { key: 0 }, ih = ["href"], ah = {
  key: 1,
  class: "library-muted"
}, sh = ["href"], oh = {
  key: 3,
  class: "library-muted"
}, lh = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, ch = ["aria-label"], uh = { class: "library-settings-count-badge" }, dh = ["action"], fh = ["value"], ph = ["name", "value"], hh = ["placeholder"], mh = {
  type: "submit",
  class: "button primary"
}, bh = { class: "library-muted" }, yh = ["action"], gh = ["value"], _h = ["name", "value"], vh = ["placeholder"], Sh = {
  type: "submit",
  class: "button secondary"
}, Eh = { class: "library-muted" }, Th = ["action"], wh = ["value"], Ch = ["name", "value"], xh = {
  type: "submit",
  class: "button secondary"
}, Ah = { class: "library-muted" }, kh = ["action"], Rh = ["value"], Oh = ["name", "value"], Nh = { name: "bulkEditField" }, Ph = { value: "publicationType" }, Ih = { value: "subtitle" }, Mh = { value: "creators" }, Lh = { value: "publication" }, Uh = { value: "publicationDate" }, Dh = { value: "language" }, Fh = { value: "publisher" }, Hh = { value: "genres" }, $h = { value: "classifications" }, jh = {
  type: "submit",
  class: "button secondary"
}, Vh = { class: "library-muted" }, qh = ["action"], Bh = ["value"], zh = ["name", "value"], Wh = {
  type: "submit",
  class: "button secondary"
}, Kh = { class: "library-muted" }, Gh = { class: "library-discovery-shortcuts" }, Yh = { class: "library-discovery-shortcut-grid" }, Xh = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Jh = { id: "library-periodical-groups-heading" }, Zh = { class: "library-muted" }, Qh = ["href"], em = { class: "library-muted" }, tm = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, rm = { id: "library-periodical-groups-empty-heading" }, nm = { class: "library-muted" }, im = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, am = { id: "library-year-groups-heading" }, sm = ["href"], om = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, lm = { id: "library-creator-groups-heading" }, cm = ["href"], um = ["aria-label"], dm = ["href", "aria-label"], fm = { class: "library-muted" }, pm = { class: "library-empty-actions" }, hm = ["href"], mm = { class: "library-muted" }, bm = { class: "library-muted" }, ym = { class: "library-empty-actions" }, gm = ["href"], _m = { class: "library-muted" }, vm = { class: "library-empty-actions" }, Sm = ["href"], Em = {
  href: "?",
  class: "button primary"
}, Tm = { class: "library-muted" }, wm = { class: "library-empty-actions" }, Cm = ["href"], xm = {
  key: 4,
  class: "library-cover-gallery"
}, Am = ["href", "aria-label"], km = ["src", "alt"], Rm = ["action", "onSubmit"], Om = ["value"], Nm = ["value"], Pm = ["aria-pressed", "title", "aria-label", "onClick"], Im = { class: "library-cover-summary" }, Mm = { class: "library-cover-primary" }, Lm = ["aria-label"], Um = ["href"], Dm = ["onToggle"], Fm = ["aria-label"], Hm = { class: "library-cover-meta" }, $m = {
  key: 0,
  class: "library-creator"
}, jm = { class: "library-cover-detail-list" }, Vm = { class: "library-cover-detail-chip" }, qm = {
  key: 0,
  class: "library-cover-detail-chip"
}, Bm = {
  key: 1,
  class: "library-cover-detail-chip"
}, zm = {
  key: 2,
  class: "library-cover-detail-chip"
}, Wm = {
  key: 3,
  class: "library-cover-detail-chip"
}, Km = {
  key: 4,
  class: "library-cover-detail-chip"
}, Gm = {
  key: 5,
  class: "library-cover-detail-chip"
}, Ym = {
  key: 6,
  class: "library-cover-detail-chip"
}, Xm = {
  key: 1,
  class: "library-muted library-cover-description"
}, Jm = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Zm = { key: 0 }, Qm = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, eb = {
  key: 0,
  class: "library-muted"
}, tb = { class: "library-cover-actions" }, rb = ["href"], nb = ["href"], ib = ["href"], ab = ["aria-label"], sb = { class: "library-pagination-range" }, ob = { key: 0 }, lb = ["href"], cb = {
  key: 1,
  class: "library-muted"
}, ub = ["href"], db = {
  key: 3,
  class: "library-muted"
}, fb = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ fr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), a = /* @__PURE__ */ fr((i.items || []).map((I) => ({ ...I }))), l = K(() => a), u = K(() => i.shelves || []), p = K(() => i.formats || []), v = K(() => i.publications || []), y = K(() => i.publicationSummaries || []), S = K(() => i.publicationIssueContext || null), P = K(() => i.publicationYears || []), j = K(() => i.creators || []), ne = K(() => i.scanStatuses || []), z = K(() => i.workflowStatuses || []), ce = K(() => i.genres || []), ie = K(() => i.classifications || []), B = K(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: l.value.length,
      visible: l.value.length,
      from: l.value.length > 0 ? 1 : 0,
      to: l.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ fr({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      needsMetadata: i.activeFilters?.needsMetadata || "",
      coverReview: i.activeFilters?.coverReview || "",
      noCreator: i.activeFilters?.noCreator || "",
      noPublication: i.activeFilters?.noPublication || "",
      noDate: i.activeFilters?.noDate || "",
      titleFromFilename: i.activeFilters?.titleFromFilename || "",
      noDescription: i.activeFilters?.noDescription || "",
      unsupportedContainer: i.activeFilters?.unsupportedContainer || "",
      weakMetadata: i.activeFilters?.weakMetadata || "",
      unreviewedImports: i.activeFilters?.unreviewedImports || "",
      sort: i.activeFilters?.sort || "title"
    }), V = K(() => i.settingsUrl || ""), le = K(() => i.requestToken || ""), Pe = K(() => i.metadataExportUrl || ""), Oe = K(() => i.metadataSidecarManifestUrl || ""), je = K(() => i.metadataSidecarBundleUrl || ""), Ee = K(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = K(() => i.batchTagUrl || "/apps/library/bulk/tags"), tt = K(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ct = K(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ke = K(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), St = K(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), De = K(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Me = K(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), ye = K(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), de = K(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), Ve = K(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), ge = /* @__PURE__ */ fr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Ce = K(() => ge.summary || {}), qe = K(() => {
      const I = Number(Ce.value.generatedAt || 0);
      return I > 0 ? new Date(I * 1e3).toLocaleString() : "";
    }), Xe = K(() => Ce.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), he = K(() => Ce.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), At = K(() => Ce.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Be = K(() => Ce.value.coverSupportMatrix || At.value.byFormat || []), ut = K(() => Ce.value.environmentCapabilities || {}), bt = K(() => i.discoveryPage === "publication"), Et = K(() => i.discoveryPage === "year"), rt = K(() => i.discoveryPage === "creator"), dt = K(() => bt.value || Et.value || rt.value), h = K(() => i.discoveryTitle || U.publication || U.year || U.creator || ""), b = K(() => dt.value ? h.value : s("library", "Publication catalogue")), _ = K(() => rt.value ? s("library", "Creator") : Et.value ? s("library", "Publication year") : s("library", "Publication / series")), R = K(() => Number(i.rootCount || 0)), E = K(() => Number(i.enabledRootCount || 0)), A = K(() => R.value === 0), M = K(() => R.value > 0 && E.value === 0), D = K(() => J.value.length > 0), L = {
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
    }, C = K(() => {
      if (typeof window > "u") return "";
      const I = new URLSearchParams(window.location.search);
      if (I.get("batchMetadataApplyResult") !== "1") return "";
      const x = I.get("batchMetadataField") || "field", f = I.get("batchMetadataApplied") || "0", ae = I.get("batchMetadataUnchanged") || "0", Ge = I.get("batchMetadataSkipped") || "0";
      return s("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: x, unchanged: ae, skipped: Ge });
    }), G = K(() => i.savedCollections || []), $ = K(() => i.savedCollectionSaveUrl || "/apps/library/collections"), W = K(() => i.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), J = K(() => Object.entries(L).map(([I, x]) => ({ key: I, label: x, value: U[I] || "" })).filter((I) => String(I.value).trim() !== "")), te = K(() => Object.entries(U).filter(([I, x]) => !["q", "sort", "starred"].includes(I) && String(x || "").trim() !== "").map(([I, x]) => ({ key: I, value: x }))), O = K(() => Object.entries(U).filter(([I, x]) => String(x || "").trim() !== "").map(([I, x]) => ({ key: I, value: x }))), N = /* @__PURE__ */ fr({}), H = /* @__PURE__ */ vl(null);
    let Q = null;
    function oe(I) {
      const x = new URLSearchParams(new FormData(I));
      for (const f of Array.from(x.keys()))
        String(x.get(f) || "").trim() === "" && x.delete(f);
      return x.delete("page"), x;
    }
    function _e(I) {
      a.splice(0, a.length, ...(I.items || []).map((x) => ({ ...x })));
      for (const x of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(I, x) && (i[x] = I[x]);
      Object.assign(U, I.activeFilters || {});
    }
    async function fe(I = !1) {
      if (!(ge.loading || ge.refreshing)) {
        I ? ge.refreshing = !0 : ge.loading = !0, ge.error = "";
        try {
          const x = await fetch(`${Ve.value}${I ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!x.ok)
            throw new Error(`Import health request failed: ${x.status}`);
          ge.summary = await x.json(), ge.loaded = !0;
        } catch (x) {
          ge.error = x?.message || String(x);
        } finally {
          ge.loading = !1, ge.refreshing = !1;
        }
      }
    }
    async function Le(I) {
      I && I.currentTarget && I.currentTarget.open !== !0 || ge.loaded || ge.loading || await fe(!1);
    }
    async function Re() {
      await fe(!0);
    }
    async function Te(I) {
      const x = I?.currentTarget?.tagName === "FORM" ? I.currentTarget : I?.currentTarget?.form;
      if (!x) return;
      const ae = oe(x).toString(), Ge = ae ? `?${ae}` : "", Kt = await fetch(Ee.value + Ge, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Kt.ok) {
        x.submit();
        return;
      }
      _e(await Kt.json()), history.replaceState({}, "", ae ? `?${ae}` : window.location.pathname);
    }
    function nt(I) {
      Te(I);
    }
    function It(I) {
      window.clearTimeout(Q), Q = window.setTimeout(() => nt(I), 350);
    }
    function Mt(I) {
      const x = new URLSearchParams();
      for (const [ae, Ge] of Object.entries(U)) {
        const Kt = String(Ge || "").trim();
        Kt !== "" && ae !== I && !(ae === "sort" && Kt === "title") && x.set(ae, Kt);
      }
      const f = x.toString();
      return f ? `?${f}` : "?";
    }
    function mr() {
      return Mt("q");
    }
    const Tt = K(() => i.smartViewCounts || {}), yt = K(() => {
      const I = {};
      for (const [x, f] of Object.entries(U)) {
        const ae = String(f || "").trim();
        ae !== "" && !(x === "sort" && ae === "title") && (I[x] = ae);
      }
      return I;
    }), ar = K(() => JSON.stringify(yt.value)), Lt = K(() => Object.keys(yt.value).length > 0), sr = K(() => [
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
    ]), wt = K(() => [
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
    function or(I) {
      const x = new URLSearchParams(window.location.search);
      for (const ae of Object.keys(L))
        x.delete(ae);
      x.delete("page");
      for (const [ae, Ge] of Object.entries(I))
        String(Ge || "").trim() !== "" && x.set(ae, String(Ge));
      const f = x.toString();
      return f ? `?${f}` : "?";
    }
    function Ut(I) {
      return or(I || {});
    }
    function zt(I) {
      return W.value.replace("__COLLECTION_ID__", encodeURIComponent(String(I || "0")));
    }
    function Fe(I) {
      return String(I || "").toUpperCase();
    }
    function Wt(I) {
      return I.nextcloudTags || [];
    }
    function Vr(I) {
      return y.value.find((f) => f.publication === I)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(I)}`;
    }
    function qr(I) {
      return i.publicationYearLandingUrls?.[I] || `/apps/library/years/${encodeURIComponent(I)}`;
    }
    function ai(I) {
      return i.creatorLandingUrls?.[I] || `/apps/library/creators/${encodeURIComponent(I)}`;
    }
    function gn(I, x) {
      N[I] = !!x?.currentTarget?.open;
    }
    function Br(I) {
      const x = String(I?.tagName || "").toLowerCase();
      return I?.isContentEditable || ["input", "select", "textarea", "button"].includes(x);
    }
    function _n(I) {
      I.key !== "/" || I.metaKey || I.ctrlKey || I.altKey || I.shiftKey || Br(I.target) || (I.preventDefault(), H.value?.focus(), H.value?.select?.());
    }
    function zr(I) {
      I.key !== "Escape" || document.activeElement !== H.value || U.q === "" || (I.preventDefault(), U.q = "", H.value.value = "", window.clearTimeout(Q), nt({ currentTarget: H.value }));
    }
    function vn(I) {
      _n(I), zr(I);
    }
    Js(() => {
      window.addEventListener("keydown", vn);
    }), Zs(() => {
      window.removeEventListener("keydown", vn);
    });
    async function lr(I, x) {
      const f = x?.currentTarget?.closest?.("form") || x?.currentTarget;
      if (!f || !I?.starUrl) return;
      const ae = !!I.starred;
      I.starred = !ae;
      try {
        (await fetch(I.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (I.starred = ae);
      } catch {
        I.starred = ae;
      }
    }
    return (I, x) => (T(), w("div", Zu, [
      o("section", Qu, [
        o("div", ed, [
          o("div", null, [
            dt.value ? (T(), w("p", td, c(_.value), 1)) : se("", !0),
            o("h2", rd, c(b.value), 1),
            o("p", nd, c(dt.value ? m(s)("library", "Browse this focused view; use filters only when you need to narrow it further.") : m(s)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          o("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": m(s)("library", "Library actions")
          }, [
            o("details", {
              class: "library-catalogue-actions-menu",
              onToggle: Le
            }, [
              o("summary", null, c(m(s)("library", "Actions")), 1),
              o("div", ad, [
                o("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, c(m(s)("library", "Settings")), 9, sd),
                Pe.value ? (T(), w("a", {
                  key: 0,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, c(m(s)("library", "Export corrected metadata")), 9, od)) : se("", !0),
                Oe.value ? (T(), w("a", {
                  key: 1,
                  href: Oe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, c(m(s)("library", "Sidecar manifest")), 9, ld)) : se("", !0),
                je.value ? (T(), w("a", {
                  key: 2,
                  href: je.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, c(m(s)("library", "Sidecar ZIP")), 9, cd)) : se("", !0),
                o("div", ud, [
                  o("p", dd, c(m(s)("library", "Import health")), 1),
                  o("h3", fd, c(m(s)("library", "Metadata overview")), 1),
                  o("p", pd, c(m(s)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  ge.loading ? (T(), w("p", hd, c(m(s)("library", "Loading cached metadata overview…")), 1)) : ge.error ? (T(), w("p", md, c(ge.error), 1)) : ge.loaded ? se("", !0) : (T(), w("p", bd, c(m(s)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  ge.loaded ? (T(), w(Z, { key: 3 }, [
                    Ce.value.message ? (T(), w("p", yd, c(Ce.value.message), 1)) : Ce.value.cacheStatus === "missing" ? (T(), w("p", gd, c(m(s)("library", "No cached metadata overview exists yet")), 1)) : se("", !0),
                    qe.value ? (T(), w("p", _d, c(m(s)("library", "Last generated")) + ": " + c(qe.value), 1)) : se("", !0),
                    o("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: ge.refreshing,
                      onClick: Re
                    }, c(ge.refreshing ? m(s)("library", "Refreshing metadata overview…") : m(s)("library", "Refresh metadata overview")), 9, vd),
                    o("div", Sd, [
                      o("a", {
                        class: "button secondary",
                        href: Xe.value.reviewUrl || "?status=metadata_error"
                      }, c(m(s)("library", "Review metadata errors")), 9, Ed),
                      o("a", {
                        class: "button secondary",
                        href: Me.value
                      }, c(m(s)("library", "Full review")), 9, Td),
                      o("a", {
                        class: "button secondary",
                        href: ye.value
                      }, c(m(s)("library", "Export TSV")), 9, wd),
                      o("a", {
                        class: "button secondary",
                        href: de.value
                      }, c(m(s)("library", "Probe covers")), 9, Cd)
                    ]),
                    o("div", xd, [
                      o("article", null, [
                        o("h4", null, c(m(s)("library", "Metadata errors")), 1),
                        o("p", Ad, c(Xe.value.total || 0), 1),
                        o("ul", null, [
                          (T(!0), w(Z, null, me(Xe.value.byExtension, (f) => (T(), w("li", {
                            key: f.extension
                          }, c(Fe(f.extension)) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      o("article", null, [
                        o("h4", null, c(m(s)("library", "Archive/container check")), 1),
                        o("p", kd, c(he.value.mismatches || 0), 1),
                        o("ul", null, [
                          (T(!0), w(Z, null, me(he.value.byExtensionAndContainer, (f) => (T(), w("li", {
                            key: `${f.extension}-${f.actualContainerType}`
                          }, c(Fe(f.extension)) + " · " + c(f.actualContainerType) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      o("article", null, [
                        o("h4", null, c(m(s)("library", "Cover health")), 1),
                        o("p", Rd, c(At.value.note), 1),
                        o("ul", null, [
                          (T(!0), w(Z, null, me(At.value.byFormat, (f) => (T(), w("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}`
                          }, c(Fe(f.extension)) + " · nextcloudPreview: " + c(f.nextcloudPreview) + " · libraryCoverRoute: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ])
                      ]),
                      o("article", null, [
                        o("h4", null, c(m(s)("library", "Cover support matrix")), 1),
                        o("p", Od, c(m(s)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        o("ul", null, [
                          (T(!0), w(Z, null, me(Be.value, (f) => (T(), w("li", {
                            key: `${f.extension}-${f.nextcloudPreview}-${f.libraryCoverRoute}-${f.count}`
                          }, c(Fe(f.extension)) + " · Nextcloud/plugin preview: " + c(f.nextcloudPreview) + " · Library extraction: " + c(f.libraryCoverRoute) + " · " + c(f.count), 1))), 128))
                        ]),
                        o("p", Nd, c(m(s)("library", "Extractor tools")) + ": ZIP=" + c(ut.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + c(ut.value.sevenZipCommand || "missing") + " · RAR=" + c(ut.value.rarCommand || "missing") + " · bsdtar=" + c(ut.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Xe.value.examples?.length ? (T(), w("details", Pd, [
                      o("summary", null, c(m(s)("library", "Example files and suggested actions")), 1),
                      o("ul", null, [
                        (T(!0), w(Z, null, me(Xe.value.examples, (f) => (T(), w("li", {
                          key: `${f.fileId}-${f.path}`
                        }, [
                          o("code", null, c(f.path), 1),
                          o("span", null, c(f.scanStatus) + " · " + c(f.scanError) + " · " + c(f.actualContainerType), 1),
                          o("strong", null, c(f.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : se("", !0)
                  ], 64)) : se("", !0),
                  o("div", Id, [
                    o("article", null, [
                      o("h4", null, c(m(s)("library", "Metadata-error queue")), 1),
                      o("p", Md, c(m(s)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      o("a", {
                        class: "button secondary",
                        href: Xe.value.reviewUrl || "?status=metadata_error"
                      }, c(m(s)("library", "Open metadata-error rows")), 9, Ld),
                      o("a", {
                        class: "button secondary",
                        href: ye.value
                      }, c(m(s)("library", "Export metadata-error rows")), 9, Ud),
                      o("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        o("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, Fd),
                        x[18] || (x[18] = o("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        x[19] || (x[19] = o("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        o("button", Hd, c(m(s)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    o("article", null, [
                      o("h4", null, c(m(s)("library", "Scanner-conflict queue")), 1),
                      o("p", $d, c(m(s)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      o("a", {
                        class: "button secondary",
                        href: De.value
                      }, c(m(s)("library", "Open scanner-conflict rows")), 9, jd),
                      o("form", {
                        method: "post",
                        action: Ie.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        o("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: le.value
                        }, null, 8, qd),
                        x[20] || (x[20] = o("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        x[21] || (x[21] = o("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        o("button", Bd, c(m(s)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, id)
        ]),
        C.value ? (T(), w("p", zd, c(C.value), 1)) : se("", !0),
        o("section", Wd, [
          o("div", Kd, [
            o("p", Gd, c(m(s)("library", "Useful views")), 1),
            o("h3", Yd, c(m(s)("library", "Useful views")), 1),
            o("p", Xd, c(m(s)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            o("p", Jd, c(m(s)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          o("nav", {
            class: "library-useful-view-links",
            "aria-label": m(s)("library", "Built-in useful catalogue views")
          }, [
            (T(!0), w(Z, null, me(sr.value, (f) => (T(), w("a", {
              key: f.key,
              class: "library-useful-view-chip",
              href: or(f.filters),
              title: f.description
            }, [
              o("strong", null, c(m(s)("library", f.label)), 1),
              o("span", null, c(m(s)("library", f.description)), 1),
              o("small", ef, c(Number(Tt.value[f.key] || 0)), 1)
            ], 8, Qd))), 128))
          ], 8, Zd)
        ]),
        o("section", tf, [
          o("div", rf, [
            o("p", nf, c(m(s)("library", "Metadata cleanup")), 1),
            o("h3", af, c(m(s)("library", "Weak metadata cockpit")), 1),
            o("p", sf, c(m(s)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          o("nav", {
            class: "library-weak-metadata-links",
            "aria-label": m(s)("library", "Weak metadata catalogue views")
          }, [
            (T(!0), w(Z, null, me(wt.value, (f) => (T(), w("a", {
              key: f.key,
              class: "library-weak-metadata-card",
              href: or(f.filters),
              title: f.description
            }, [
              o("span", null, [
                o("strong", null, c(m(s)("library", f.label)), 1),
                o("small", null, c(m(s)("library", f.description)), 1)
              ]),
              o("b", null, c(Number(Tt.value[f.key] || 0)), 1)
            ], 8, lf))), 128))
          ], 8, of)
        ]),
        o("section", cf, [
          o("div", uf, [
            o("p", df, c(m(s)("library", "Custom collections")), 1),
            o("h3", ff, c(m(s)("library", "Custom collections")), 1),
            o("p", pf, c(m(s)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          o("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            o("input", {
              type: "hidden",
              name: "requesttoken",
              value: le.value
            }, null, 8, mf),
            o("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: ar.value
            }, null, 8, bf),
            o("label", null, [
              pe(c(m(s)("library", "Collection name")) + " ", 1),
              o("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: m(s)("library", "e.g. Bremen photo books"),
                disabled: !Lt.value,
                autocomplete: "off"
              }, null, 8, yf)
            ]),
            o("button", {
              type: "submit",
              class: "button secondary",
              disabled: !Lt.value
            }, c(m(s)("library", "Save current view")), 9, gf)
          ], 8, hf),
          Lt.value ? se("", !0) : (T(), w("p", _f, c(m(s)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          G.value.length > 0 ? (T(), w("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": m(s)("library", "Saved custom collections")
          }, [
            (T(!0), w(Z, null, me(G.value, (f) => (T(), w("article", {
              key: f.id,
              class: "library-saved-collection-card"
            }, [
              o("a", {
                class: "library-saved-collection-link",
                href: Ut(f.filters)
              }, [
                o("strong", null, c(f.name), 1),
                o("span", null, c(Number(f.count || 0)) + " " + c(m(s)("library", "items")), 1)
              ], 8, Sf),
              o("form", {
                method: "post",
                action: zt(f.id),
                class: "library-saved-collection-delete-form"
              }, [
                o("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: le.value
                }, null, 8, Tf),
                o("button", wf, c(m(s)("library", "Delete")), 1)
              ], 8, Ef)
            ]))), 128))
          ], 8, vf)) : se("", !0)
        ]),
        o("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": m(s)("library", "Quick catalogue filters"),
          onSubmit: Pn(Te, ["prevent"])
        }, [
          (T(!0), w(Z, null, me(te.value, (f) => (T(), w("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, xf))), 128)),
          o("div", Af, [
            o("label", kf, [
              o("span", null, [
                pe(c(m(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                x[22] || (x[22] = o("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              ze(o("input", {
                ref_key: "quickSearchInput",
                ref: H,
                "onUpdate:modelValue": x[0] || (x[0] = (f) => U.q = f),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: It
              }, null, 544), [
                [Ti, U.q]
              ])
            ]),
            o("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(s)("library", "Search catalogue")
            }, c(m(s)("library", "Search")), 9, Rf)
          ]),
          o("details", Of, [
            o("summary", null, c(m(s)("library", "Filter & sort")), 1),
            o("div", Nf, [
              o("label", null, [
                pe(c(m(s)("library", "Sort")) + " ", 1),
                ze(o("select", {
                  "onUpdate:modelValue": x[1] || (x[1] = (f) => U.sort = f),
                  name: "sort",
                  onChange: Te
                }, [
                  o("option", Pf, c(m(s)("library", "Title")), 1),
                  o("option", If, c(m(s)("library", "Recently added")), 1),
                  o("option", Mf, c(m(s)("library", "Publication date")), 1),
                  o("option", Lf, c(m(s)("library", "Series")), 1),
                  o("option", Uf, c(m(s)("library", "Recently opened")), 1),
                  o("option", Df, c(m(s)("library", "Format")), 1)
                ], 544), [
                  [at, U.sort]
                ])
              ]),
              o("label", null, [
                pe(c(m(s)("library", "Starred")) + " ", 1),
                ze(o("select", {
                  "onUpdate:modelValue": x[2] || (x[2] = (f) => U.starred = f),
                  name: "starred",
                  onChange: Te
                }, [
                  o("option", Ff, c(m(s)("library", "All")), 1),
                  o("option", Hf, c(m(s)("library", "Starred")), 1)
                ], 544), [
                  [at, U.starred]
                ])
              ]),
              o("label", null, [
                pe(c(m(s)("library", "Size")) + " ", 1),
                o("select", {
                  value: B.value.limit,
                  name: "limit",
                  onChange: Te
                }, [
                  (T(), w(Z, null, me(n, (f) => o("option", {
                    key: f,
                    value: f
                  }, c(f), 9, jf)), 64))
                ], 40, $f)
              ]),
              o("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": m(s)("library", "Apply catalogue filters")
              }, c(m(s)("library", "Apply filters")), 9, Vf),
              o("a", {
                href: "?",
                class: "button secondary",
                "aria-label": m(s)("library", "Clear catalogue filters")
              }, c(m(s)("library", "Clear all")), 9, qf)
            ])
          ])
        ], 40, Cf),
        o("details", Bf, [
          o("summary", zf, c(m(s)("library", "Show catalogue filters")), 1),
          o("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": m(s)("library", "Catalogue search and filters"),
            onSubmit: Pn(Te, ["prevent"])
          }, [
            o("label", null, [
              pe(c(m(s)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              ze(o("input", {
                "onUpdate:modelValue": x[3] || (x[3] = (f) => U.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Ti, U.q]
              ])
            ]),
            o("p", Kf, c(m(s)("library", "Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            o("label", null, [
              pe(c(m(s)("library", "Type")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[4] || (x[4] = (f) => U.type = f),
                name: "type"
              }, [
                o("option", Gf, c(m(s)("library", "All types")), 1),
                (T(), w(Z, null, me(r, (f) => o("option", {
                  key: f,
                  value: f
                }, c(f), 9, Yf)), 64))
              ], 512), [
                [at, U.type]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Series / periodical")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[5] || (x[5] = (f) => U.publication = f),
                name: "publication"
              }, [
                o("option", Xf, c(m(s)("library", "All series and periodicals")), 1),
                (T(!0), w(Z, null, me(v.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, Jf))), 128))
              ], 512), [
                [at, U.publication]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Publication year")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[6] || (x[6] = (f) => U.year = f),
                name: "year"
              }, [
                o("option", Zf, c(m(s)("library", "All years")), 1),
                (T(!0), w(Z, null, me(P.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, Qf))), 128))
              ], 512), [
                [at, U.year]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Creator")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[7] || (x[7] = (f) => U.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                o("option", ep, c(m(s)("library", "All creators")), 1),
                (T(!0), w(Z, null, me(j.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, tp))), 128))
              ], 512), [
                [at, U.creator]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Nextcloud tag")) + " ", 1),
              ze(o("input", {
                "onUpdate:modelValue": x[8] || (x[8] = (f) => U.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Ti, U.tag]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Format")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[9] || (x[9] = (f) => U.format = f),
                name: "format"
              }, [
                o("option", rp, c(m(s)("library", "All formats")), 1),
                (T(!0), w(Z, null, me(p.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(Fe(f)), 9, np))), 128))
              ], 512), [
                [at, U.format]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Shelf")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[10] || (x[10] = (f) => U.shelf = f),
                name: "shelf"
              }, [
                o("option", ip, c(m(s)("library", "All shelves")), 1),
                (T(!0), w(Z, null, me(u.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, ap))), 128))
              ], 512), [
                [at, U.shelf]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Scan status")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[11] || (x[11] = (f) => U.status = f),
                name: "status"
              }, [
                o("option", sp, c(m(s)("library", "All scan statuses")), 1),
                (T(!0), w(Z, null, me(ne.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, op))), 128))
              ], 512), [
                [at, U.status]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Workflow status")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[12] || (x[12] = (f) => U.workflowStatus = f),
                name: "workflowStatus"
              }, [
                o("option", lp, c(m(s)("library", "All workflow statuses")), 1),
                (T(!0), w(Z, null, me(z.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, cp))), 128))
              ], 512), [
                [at, U.workflowStatus]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Genre")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[13] || (x[13] = (f) => U.genre = f),
                name: "genre"
              }, [
                o("option", up, c(m(s)("library", "All genres")), 1),
                (T(!0), w(Z, null, me(ce.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, dp))), 128))
              ], 512), [
                [at, U.genre]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Classification")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[14] || (x[14] = (f) => U.classification = f),
                name: "classification"
              }, [
                o("option", fp, c(m(s)("library", "All classifications")), 1),
                (T(!0), w(Z, null, me(ie.value, (f) => (T(), w("option", {
                  key: f,
                  value: f
                }, c(f), 9, pp))), 128))
              ], 512), [
                [at, U.classification]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Scanner conflicts")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[15] || (x[15] = (f) => U.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                o("option", hp, c(m(s)("library", "All metadata")), 1),
                o("option", mp, c(m(s)("library", "Needs review")), 1)
              ], 512), [
                [at, U.scannerConflicts]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Starred")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[16] || (x[16] = (f) => U.starred = f),
                name: "starred"
              }, [
                o("option", bp, c(m(s)("library", "All publications")), 1),
                o("option", yp, c(m(s)("library", "Starred only")), 1)
              ], 512), [
                [at, U.starred]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Sort")) + " ", 1),
              ze(o("select", {
                "onUpdate:modelValue": x[17] || (x[17] = (f) => U.sort = f),
                name: "sort"
              }, [
                o("option", gp, c(m(s)("library", "Title")), 1),
                o("option", _p, c(m(s)("library", "Recently added")), 1),
                o("option", vp, c(m(s)("library", "Publication date")), 1),
                o("option", Sp, c(m(s)("library", "Series / periodical")), 1),
                o("option", Ep, c(m(s)("library", "Recently opened")), 1),
                o("option", Tp, c(m(s)("library", "Format")), 1)
              ], 512), [
                [at, U.sort]
              ])
            ]),
            o("label", null, [
              pe(c(m(s)("library", "Page size")) + " ", 1),
              o("select", {
                value: B.value.limit,
                name: "limit"
              }, [
                (T(), w(Z, null, me(n, (f) => o("option", {
                  key: f,
                  value: f
                }, c(f), 9, Cp)), 64))
              ], 8, wp)
            ]),
            o("button", {
              type: "submit",
              class: "button primary",
              "aria-label": m(s)("library", "Apply catalogue filters")
            }, c(m(s)("library", "Apply filters")), 9, xp),
            o("a", {
              href: "?",
              class: "button secondary",
              "aria-label": m(s)("library", "Clear catalogue filters")
            }, c(m(s)("library", "Clear")), 9, Ap),
            o("a", {
              href: De.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, c(m(s)("library", "Review scanner conflicts")), 9, kp)
          ], 40, Wf)
        ]),
        dt.value ? (T(), w("section", Rp, [
          o("p", Op, c(_.value), 1),
          o("h3", Np, c(h.value), 1),
          o("p", Pp, c(rt.value ? m(s)("library", "Items by this creator, sorted by publication context when available.") : Et.value ? m(s)("library", "Items from this publication year, sorted by publication date when available.") : m(s)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          o("div", Ip, [
            o("span", null, c(B.value.total) + " " + c(m(s)("library", "items")), 1),
            S.value?.earliestYear && S.value?.latestYear ? (T(), w("span", Mp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : se("", !0),
            S.value?.datedCount ? (T(), w("span", Lp, c(S.value.datedCount) + " " + c(m(s)("library", "dated")), 1)) : se("", !0),
            S.value?.undatedCount > 0 ? (T(), w("span", Up, c(S.value.undatedCount) + " " + c(m(s)("library", "undated")), 1)) : se("", !0)
          ]),
          bt.value && S.value ? (T(), w("aside", Dp, [
            o("strong", null, c(m(s)("library", "Publication contents")), 1),
            o("span", null, c(S.value.itemCount) + " " + c(m(s)("library", "items")), 1),
            S.value.earliestYear && S.value.latestYear ? (T(), w("span", Fp, c(S.value.earliestYear) + "–" + c(S.value.latestYear), 1)) : se("", !0),
            o("span", null, c(S.value.datedCount) + " " + c(m(s)("library", "with issue/date coverage")), 1),
            S.value.undatedCount > 0 ? (T(), w("span", Hp, c(S.value.undatedCount) + " " + c(m(s)("library", "without dates yet")), 1)) : se("", !0),
            o("span", null, c(m(s)("library", "read-only grouping")), 1)
          ])) : se("", !0),
          bt.value && S.value?.issueGroups?.length ? (T(), w("section", $p, [
            o("div", null, [
              o("p", jp, c(m(s)("library", "Issue order")), 1),
              o("h4", Vp, c(m(s)("library", "Read-only issue/date grouping")), 1),
              o("p", qp, c(m(s)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            S.value.gapRanges?.length ? (T(), w("p", Bp, c(m(s)("library", "Gap")) + ": " + c(S.value.gapRanges.join(", ")), 1)) : se("", !0),
            (T(!0), w(Z, null, me(S.value.issueGroups, (f) => (T(), w("div", {
              key: f.label,
              class: "library-publication-issue-group"
            }, [
              o("h5", null, c(f.label), 1),
              o("ol", null, [
                (T(!0), w(Z, null, me(f.items, (ae, Ge) => (T(), w("li", {
                  key: ae.itemId
                }, [
                  o("span", zp, c(ae.issueLabel), 1),
                  o("a", {
                    href: ae.detailsUrl || "#"
                  }, c(ae.title), 9, Wp),
                  o("small", null, [
                    pe(c(ae.publicationType), 1),
                    ae.publicationDate ? (T(), w(Z, { key: 0 }, [
                      pe(" · " + c(ae.publicationDate), 1)
                    ], 64)) : se("", !0)
                  ]),
                  o("small", Kp, [
                    Ge > 0 ? (T(), w(Z, { key: 0 }, [
                      pe(c(m(s)("library", "Previous issue")), 1)
                    ], 64)) : se("", !0),
                    Ge > 0 && Ge < f.items.length - 1 ? (T(), w(Z, { key: 1 }, [
                      pe(" · ")
                    ], 64)) : se("", !0),
                    Ge < f.items.length - 1 ? (T(), w(Z, { key: 2 }, [
                      pe(c(m(s)("library", "Next issue")), 1)
                    ], 64)) : se("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            S.value.unknownIssueItems?.length ? (T(), w("details", Gp, [
              o("summary", null, c(m(s)("library", "Unknown issue/date")) + " · " + c(S.value.unknownIssueItems.length), 1),
              o("p", Yp, c(m(s)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : se("", !0)
          ])) : se("", !0),
          o("p", null, [
            o("a", Xp, c(m(s)("library", "Back to full catalogue")), 1)
          ])
        ])) : se("", !0),
        o("div", Jp, [
          o("p", Zp, [
            pe(c(m(s)("library", "Showing")) + " " + c(B.value.from) + "–" + c(B.value.to) + " " + c(m(s)("library", "of")) + " " + c(B.value.total) + " " + c(m(s)("library", "catalogue items")), 1),
            J.value.length > 0 ? (T(), w("span", Qp, [
              x[23] || (x[23] = pe(" · ", -1)),
              o("a", eh, c(m(s)("library", "Clear all filters")), 1)
            ])) : se("", !0)
          ]),
          o("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": m(s)("library", "Catalogue pagination")
          }, [
            o("span", rh, [
              pe(c(m(s)("library", "Page")) + " " + c(B.value.page), 1),
              B.value.total > 0 ? (T(), w("span", nh, " · " + c(B.value.from) + "–" + c(B.value.to), 1)) : se("", !0)
            ]),
            B.value.previousUrl ? (T(), w("a", {
              key: 0,
              href: B.value.previousUrl
            }, c(m(s)("library", "Previous")), 9, ih)) : (T(), w("span", ah, c(m(s)("library", "Previous")), 1)),
            B.value.nextUrl ? (T(), w("a", {
              key: 2,
              href: B.value.nextUrl
            }, c(m(s)("library", "Next")), 9, sh)) : (T(), w("span", oh, c(m(s)("library", "Next")), 1))
          ], 8, th)
        ]),
        o("div", lh, [
          o("details", {
            class: "library-batch-actions",
            "aria-label": m(s)("library", "Batch actions for current results")
          }, [
            o("summary", null, [
              pe(c(m(s)("library", "Batch")) + " ", 1),
              o("span", uh, c(B.value.total) + " " + c(m(s)("library", "Current filter result")), 1)
            ]),
            o("form", {
              method: "post",
              action: Ie.value,
              class: "library-batch-tag-form"
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, fh),
              (T(!0), w(Z, null, me(O.value, (f) => (T(), w("input", {
                key: f.key,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, ph))), 128)),
              o("label", null, [
                o("span", null, c(m(s)("library", "Nextcloud tag")), 1),
                o("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(s)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, hh)
              ]),
              o("button", mh, c(m(s)("library", "Apply Nextcloud tag to current results")), 1),
              o("p", bh, c(m(s)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, dh),
            o("form", {
              method: "post",
              action: tt.value,
              class: "library-batch-tag-remove-form"
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, gh),
              (T(!0), w(Z, null, me(O.value, (f) => (T(), w("input", {
                key: `remove-tag-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, _h))), 128)),
              o("label", null, [
                o("span", null, c(m(s)("library", "Nextcloud tag")), 1),
                o("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: m(s)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, vh)
              ]),
              o("button", Sh, c(m(s)("library", "Remove tag from current results")), 1),
              o("p", Eh, c(m(s)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, yh),
            o("form", {
              method: "post",
              action: ct.value,
              class: "library-batch-metadata-reset-form"
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, wh),
              (T(!0), w(Z, null, me(O.value, (f) => (T(), w("input", {
                key: `reset-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Ch))), 128)),
              x[24] || (x[24] = o("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              o("button", xh, c(m(s)("library", "Reset filtered metadata")), 1),
              o("p", Ah, c(m(s)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, Th),
            o("form", {
              method: "post",
              action: Ke.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Rh),
              (T(!0), w(Z, null, me(O.value, (f) => (T(), w("input", {
                key: `edit-preview-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, Oh))), 128)),
              o("label", null, [
                o("span", null, c(m(s)("library", "Metadata field")), 1),
                o("select", Nh, [
                  o("option", Ph, c(m(s)("library", "Publication type")), 1),
                  o("option", Ih, c(m(s)("library", "Subtitle")), 1),
                  o("option", Mh, c(m(s)("library", "Creators")), 1),
                  o("option", Lh, c(m(s)("library", "Series / periodical")), 1),
                  o("option", Uh, c(m(s)("library", "Publication date")), 1),
                  o("option", Dh, c(m(s)("library", "Language")), 1),
                  o("option", Fh, c(m(s)("library", "Publisher")), 1),
                  o("option", Hh, c(m(s)("library", "Genres")), 1),
                  o("option", $h, c(m(s)("library", "Classifications")), 1)
                ])
              ]),
              o("label", null, [
                o("span", null, c(m(s)("library", "Preview value")), 1),
                x[25] || (x[25] = o("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              o("button", jh, c(m(s)("library", "Preview & apply metadata edit")), 1),
              o("p", Vh, c(m(s)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, kh),
            o("form", {
              method: "post",
              action: St.value,
              class: "library-batch-cover-refresh-form"
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Bh),
              (T(!0), w(Z, null, me(O.value, (f) => (T(), w("input", {
                key: `cover-${f.key}`,
                type: "hidden",
                name: f.key,
                value: f.value
              }, null, 8, zh))), 128)),
              o("button", Wh, c(m(s)("library", "Request fresh cover previews")), 1),
              o("p", Kh, c(m(s)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, qh)
          ], 8, ch),
          o("details", Gh, [
            o("summary", null, c(m(s)("library", "Browse")), 1),
            o("div", Yh, [
              y.value.length > 0 ? (T(), w("section", Xh, [
                o("h3", Jh, c(m(s)("library", "Top series and periodicals")), 1),
                o("p", Zh, c(m(s)("library", "Jump into recurring publications with one click.")), 1),
                o("ul", null, [
                  (T(!0), w(Z, null, me(y.value, (f) => (T(), w("li", {
                    key: f.publication
                  }, [
                    o("a", {
                      href: Vr(f.publication)
                    }, c(f.publication), 9, Qh),
                    o("span", em, c(f.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (T(), w("section", tm, [
                o("h3", rm, c(m(s)("library", "No series or periodicals found yet")), 1),
                o("p", nm, c(m(s)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : se("", !0),
              P.value.length > 0 ? (T(), w("section", im, [
                o("h3", am, c(m(s)("library", "Top publication years")), 1),
                o("ul", null, [
                  (T(!0), w(Z, null, me(P.value, (f) => (T(), w("li", { key: f }, [
                    o("a", {
                      href: qr(f)
                    }, c(f), 9, sm)
                  ]))), 128))
                ])
              ])) : se("", !0),
              j.value.length > 0 ? (T(), w("section", om, [
                o("h3", lm, c(m(s)("library", "Top creators")), 1),
                o("ul", null, [
                  (T(!0), w(Z, null, me(j.value, (f) => (T(), w("li", { key: f }, [
                    o("a", {
                      href: ai(f)
                    }, c(f), 9, cm)
                  ]))), 128))
                ])
              ])) : se("", !0)
            ])
          ])
        ]),
        J.value.length > 0 ? (T(), w("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": m(s)("library", "Active filters")
        }, [
          o("span", null, c(m(s)("library", "Active filters")), 1),
          (T(!0), w(Z, null, me(J.value, (f) => (T(), w("a", {
            key: f.key,
            href: Mt(f.key),
            class: "library-filter-chip",
            "aria-label": `${m(s)("library", "Remove filter")}: ${f.label}`
          }, [
            o("strong", null, c(f.label) + ":", 1),
            pe(" " + c(f.value) + " ", 1),
            x[26] || (x[26] = o("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, dm))), 128))
        ], 8, um)) : se("", !0),
        l.value.length === 0 ? (T(), w("div", {
          key: 3,
          class: Ur(["library-empty-content", { "library-first-run-guidance": A.value || M.value, "library-filter-empty-state": D.value && !A.value && !M.value }]),
          role: "status"
        }, [
          A.value ? (T(), w(Z, { key: 0 }, [
            o("h3", null, c(m(s)("library", "Start with one Library root")), 1),
            o("p", fm, c(m(s)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            o("p", pm, [
              o("a", {
                href: V.value,
                class: "button primary"
              }, c(m(s)("library", "Add a Library root")), 9, hm),
              o("span", mm, c(m(s)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : M.value ? (T(), w(Z, { key: 1 }, [
            o("h3", null, c(m(s)("library", "No enabled Library roots")), 1),
            o("p", bm, c(m(s)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            o("p", ym, [
              o("a", {
                href: V.value,
                class: "button primary"
              }, c(m(s)("library", "Open Library settings")), 9, gm)
            ])
          ], 64)) : D.value ? (T(), w(Z, { key: 2 }, [
            o("h3", null, c(m(s)("library", "No matches for the current filters")), 1),
            o("p", _m, c(m(s)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            o("p", vm, [
              o("a", {
                href: mr(),
                class: "button secondary"
              }, c(m(s)("library", "Clear search")), 9, Sm),
              o("a", Em, c(m(s)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (T(), w(Z, { key: 3 }, [
            o("h3", null, c(m(s)("library", "No catalogue items yet")), 1),
            o("p", Tm, c(m(s)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            o("p", wm, [
              o("a", {
                href: V.value,
                class: "button primary"
              }, c(m(s)("library", "Run a scan from settings")), 9, Cm)
            ])
          ], 64))
        ], 2)) : (T(), w("div", xm, [
          (T(!0), w(Z, null, me(l.value, (f) => (T(), w("article", {
            key: f.id,
            class: Ur(["library-cover-card", { "library-cover-card--open": N[f.id] }])
          }, [
            o("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              o("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, km)
            ], 8, Am),
            o("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: Pn((ae) => lr(f, ae), ["prevent"])
            }, [
              o("input", {
                type: "hidden",
                name: "requesttoken",
                value: le.value
              }, null, 8, Om),
              x[27] || (x[27] = o("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              o("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, Nm),
              o("button", {
                type: "submit",
                class: Ur(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? m(s)("library", "Unstar this publication") : m(s)("library", "Star this publication"),
                "aria-label": f.starred ? m(s)("library", "Unstar this publication") : m(s)("library", "Star this publication"),
                onClick: Pn((ae) => lr(f, ae), ["prevent"])
              }, c(f.starred ? "★" : "☆"), 11, Pm)
            ], 40, Rm),
            o("div", Im, [
              o("div", Mm, [
                o("h3", null, [
                  f.starred ? (T(), w("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": m(s)("library", "Starred")
                  }, "★", 8, Lm)) : se("", !0),
                  pe(c(f.title), 1)
                ]),
                o("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, c(m(s)("library", "Read")), 9, Um)
              ]),
              o("details", {
                class: "library-cover-details",
                onToggle: (ae) => gn(f.id, ae)
              }, [
                o("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${m(s)("library", "Show details and actions")}: ${f.title}`
                }, c(m(s)("library", "Details")), 9, Fm),
                o("div", Hm, [
                  f.creators ? (T(), w("p", $m, c(f.creators), 1)) : se("", !0),
                  o("dl", jm, [
                    o("div", Vm, [
                      o("dt", null, c(m(s)("library", "Type")), 1),
                      o("dd", null, c(f.publicationType), 1)
                    ]),
                    f.publication ? (T(), w("div", qm, [
                      o("dt", null, c(m(s)("library", "Series")), 1),
                      o("dd", null, c(f.publication), 1)
                    ])) : se("", !0),
                    f.publicationDate ? (T(), w("div", Bm, [
                      o("dt", null, c(m(s)("library", "Date")), 1),
                      o("dd", null, c(f.publicationDate), 1)
                    ])) : se("", !0),
                    f.workflowStatus ? (T(), w("div", zm, [
                      o("dt", null, c(m(s)("library", "Status")), 1),
                      o("dd", null, c(f.workflowStatus), 1)
                    ])) : se("", !0),
                    f.hasScannerConflict ? (T(), w("div", Wm, [
                      o("dt", null, c(m(s)("library", "Review")), 1),
                      o("dd", null, c(f.scannerConflictCount) + " fields", 1)
                    ])) : se("", !0),
                    f.lastOpenedAt ? (T(), w("div", Km, [
                      o("dt", null, c(m(s)("library", "Last opened")), 1),
                      o("dd", null, c(f.lastOpenedAt), 1)
                    ])) : se("", !0),
                    f.extension ? (T(), w("div", Gm, [
                      o("dt", null, c(m(s)("library", "Format")) + ":", 1),
                      o("dd", null, c(Fe(f.extension)), 1)
                    ])) : se("", !0),
                    f.shelf ? (T(), w("div", Ym, [
                      o("dt", null, c(m(s)("library", "Shelf")), 1),
                      o("dd", null, c(f.shelf), 1)
                    ])) : se("", !0)
                  ]),
                  f.description ? (T(), w("p", Xm, c(f.description), 1)) : se("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (T(), w("p", Jm, [
                    pe(" scanStatus: " + c(f.scanStatus || "unknown"), 1),
                    f.scanError ? (T(), w("span", Zm, " · scanError: " + c(f.scanError), 1)) : se("", !0)
                  ])) : se("", !0),
                  o("div", Qm, [
                    Wt(f).length === 0 ? (T(), w("span", eb, "No Nextcloud tags")) : (T(!0), w(Z, { key: 1 }, me(Wt(f), (ae) => (T(), w("span", {
                      key: ae.id,
                      class: "library-tag"
                    }, c(ae.name), 1))), 128))
                  ]),
                  o("p", tb, [
                    o("a", {
                      href: f.filesUrl
                    }, c(m(s)("library", "Show in Files")), 9, rb),
                    x[28] || (x[28] = pe(" · ", -1)),
                    o("a", {
                      href: f.downloadUrl
                    }, c(m(s)("library", "Download source")), 9, nb),
                    x[29] || (x[29] = pe(" · ", -1)),
                    o("a", {
                      href: f.detailsUrl
                    }, c(m(s)("library", "Details")), 9, ib)
                  ])
                ])
              ], 40, Dm)
            ])
          ], 2))), 128))
        ])),
        l.value.length > 0 ? (T(), w("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": m(s)("library", "Catalogue pagination")
        }, [
          o("span", sb, [
            pe(c(m(s)("library", "Page")) + " " + c(B.value.page), 1),
            B.value.total > 0 ? (T(), w("span", ob, " · " + c(B.value.from) + "–" + c(B.value.to), 1)) : se("", !0)
          ]),
          B.value.previousUrl ? (T(), w("a", {
            key: 0,
            href: B.value.previousUrl
          }, c(m(s)("library", "Previous")), 9, lb)) : (T(), w("span", cb, c(m(s)("library", "Previous")), 1)),
          B.value.nextUrl ? (T(), w("a", {
            key: 2,
            href: B.value.nextUrl
          }, c(m(s)("library", "Next")), 9, ub)) : (T(), w("span", db, c(m(s)("library", "Next")), 1))
        ], 8, ab)) : se("", !0)
      ])
    ]));
  }
}, ps = fu("library", "catalogue", {}), Dn = document.querySelector("#library-vue-root"), hs = {
  ...ps,
  requestToken: Dn?.dataset.requestToken || ps.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function Ro(e) {
  return Y(e).toUpperCase();
}
function pb(e, t, r, n = Y) {
  for (const i of t) {
    const a = document.createElement("option");
    a.value = Y(i), a.textContent = n(i), Y(i) === Y(r) && (a.selected = !0), e.appendChild(a);
  }
}
function ms(e, t, r, n, i = "") {
  const a = document.createElement("label");
  a.textContent = t;
  const l = document.createElement("input");
  l.type = r === "q" ? "search" : "text", l.name = r, l.value = Y(n), l.placeholder = i, a.appendChild(l), e.appendChild(a);
}
function Nr(e, t, r, n, i, a, l = Y) {
  const u = document.createElement("label");
  u.textContent = t;
  const p = document.createElement("select");
  p.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, p.appendChild(v), pb(p, a, n, l), u.appendChild(p), e.appendChild(u);
}
function Pr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function hb(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function mb(e) {
  return Y(e.discoveryPage) === "publication";
}
function bb(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function Ni(e) {
  return Y(e.discoveryPage) === "year";
}
function yb(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Pi(e) {
  return Y(e.discoveryPage) === "creator";
}
function gb(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function _b() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Zr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function vb(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Sb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", s("library", "Catalogue search and filters")), ms(n, s("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Nr(n, s("library", "Type"), "type", r.type, s("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ms(n, s("library", "Nextcloud tag"), "tag", r.tag, "photography"), Nr(n, s("library", "Format"), "format", r.format, s("library", "All formats"), e.formats || [], Ro), Nr(n, s("library", "Shelf"), "shelf", r.shelf, s("library", "All shelves"), e.shelves || []), Nr(n, s("library", "Scan status"), "status", r.status, s("library", "All scan statuses"), e.scanStatuses || []), Nr(n, s("library", "Sort"), "sort", r.sort || "title", s("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Nr(n, s("library", "Page size"), "limit", t.limit || 100, s("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", s("library", "Apply catalogue filters")), i.textContent = s("library", "Apply filters");
  const a = document.createElement("a");
  return a.href = "?", a.className = "button secondary", a.setAttribute("aria-label", s("library", "Clear catalogue filters")), a.textContent = s("library", "Clear"), n.append(i, a), n;
}
function Eb() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", a = document.createElement("p");
  return a.className = "library-notice library-batch-metadata-apply-result", a.textContent = s("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), a;
}
function Tb(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", s("library", "Quick catalogue filters"));
  let i = null;
  const a = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [S, P] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(S) || Y(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = S, j.value = Y(P), n.appendChild(j);
  }
  const l = document.createElement("label");
  l.className = "library-quick-filter-search", l.textContent = s("library", "Search");
  const u = document.createElement("input");
  u.type = "search", u.name = "q", u.value = Y(r.q), u.placeholder = "Camera, Eco, Rolleiflex...", u.addEventListener("input", a), l.appendChild(u), n.appendChild(l);
  const p = [
    [s("library", "Sort"), "sort", r.sort || "title", [["title", s("library", "Title")], ["recent", s("library", "Recently added")], ["publicationDate", s("library", "Publication date")], ["publication", s("library", "Series")], ["lastOpened", s("library", "Recently opened")], ["format", s("library", "Format")]]],
    [s("library", "Starred"), "starred", r.starred || "", [["", s("library", "All")], ["1", s("library", "Starred")]]],
    [s("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [S, P, j, ne] of p) {
    const z = document.createElement("label");
    z.textContent = S;
    const ce = document.createElement("select");
    ce.name = P;
    for (const [ie, B] of ne) {
      const U = document.createElement("option");
      U.value = Y(ie), U.textContent = Y(B), Y(ie) === Y(j) && (U.selected = !0), ce.appendChild(U);
    }
    ce.addEventListener("change", () => n.requestSubmit()), z.appendChild(ce), n.appendChild(z);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", s("library", "Apply catalogue filters")), v.textContent = s("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", s("library", "Clear catalogue filters")), y.textContent = s("library", "Clear all"), n.append(v, y), n;
}
function wb(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), a = Y(e.metadataExportUrl || ""), l = Y(e.batchTagUrl || "/apps/library/bulk/tags"), u = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), p = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), S = document.createElement("div");
  S.className = "library-vue-catalogue library-vue-fallback", S.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ne = document.createElement("div"), z = document.createElement("h2");
  z.id = "library-catalogue-heading", z.textContent = s("library", "Publication catalogue");
  const ce = document.createElement("p");
  ce.className = "library-muted", ce.textContent = s("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ne.append(z, ce);
  const ie = document.createElement("nav");
  if (ie.className = "library-catalogue-toolbar", ie.setAttribute("aria-label", s("library", "Library actions")), i) {
    const O = document.createElement("a");
    O.href = i, O.className = "button secondary", O.setAttribute("aria-label", "Open Library settings"), O.textContent = s("library", "Settings"), ie.appendChild(O);
  }
  if (a) {
    const O = document.createElement("a");
    O.href = a, O.className = "button secondary", O.setAttribute("aria-label", "Export corrected metadata"), O.textContent = s("library", "Export corrected metadata"), ie.appendChild(O);
  }
  if (e.metadataSidecarManifestUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarManifestUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar manifest"), O.textContent = s("library", "Sidecar manifest"), ie.appendChild(O);
  }
  if (e.metadataSidecarBundleUrl) {
    const O = document.createElement("a");
    O.href = e.metadataSidecarBundleUrl, O.className = "button secondary", O.setAttribute("aria-label", "Export sidecar ZIP"), O.textContent = s("library", "Sidecar ZIP"), ie.appendChild(O);
  }
  j.append(ne, ie), P.appendChild(j);
  const B = Eb();
  B && P.appendChild(B), P.appendChild(Tb(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = s("library", "Show catalogue filters"), U.append(V, Sb(e, n)), P.appendChild(U), mb(e) || Ni(e) || Pi(e)) {
    const O = document.createElement("section");
    O.className = "library-discovery-header", O.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Pi(e) ? s("library", "Creator") : Ni(e) ? s("library", "Publication year") : s("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = `${n.total ?? r.length} ${Pi(e) ? s("library", "items by this creator. Sorted by publication context when available.") : Ni(e) ? s("library", "items from this publication year. Sorted by publication date when available.") : s("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const oe = document.createElement("a");
    oe.href = "/apps/library/", oe.className = "button secondary", oe.textContent = s("library", "Back to full catalogue"), O.append(N, H, Q, oe), P.appendChild(O);
  }
  const le = document.createElement("p");
  le.className = "library-muted library-filter-result-summary", le.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Pe = document.createElement("a");
  Pe.href = "?", Pe.textContent = ` ${s("library", "Clear all filters")}`, le.appendChild(Pe), P.appendChild(le);
  const Oe = document.createElement("details");
  Oe.className = "library-batch-actions";
  const je = document.createElement("summary");
  je.textContent = `${s("library", "Batch actions for current results")} (${n.total ?? r.length} ${s("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = l, Ee.className = "library-batch-tag-form";
  const Ie = Pr(e);
  Ie && Ee.appendChild(Ie);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Ee.appendChild(H);
  }
  const tt = document.createElement("label");
  tt.textContent = s("library", "Apply Nextcloud tag to current results");
  const ct = document.createElement("input");
  ct.type = "text", ct.name = "nextcloudTagName", ct.placeholder = "batch-review", tt.appendChild(ct);
  const Ke = document.createElement("button");
  Ke.type = "submit", Ke.className = "button secondary", Ke.textContent = s("library", "Apply Nextcloud tag to current results");
  const St = document.createElement("p");
  St.className = "library-muted", St.textContent = s("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(tt, Ke, St);
  const De = document.createElement("form");
  De.method = "post", De.action = u, De.className = "library-batch-tag-remove-form";
  const Me = Pr(e);
  Me && De.appendChild(Me);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), De.appendChild(H);
  }
  const ye = document.createElement("label");
  ye.textContent = s("library", "Nextcloud tag");
  const de = document.createElement("input");
  de.type = "text", de.name = "nextcloudTagName", de.setAttribute("list", "library-nextcloud-tag-suggestions"), de.placeholder = s("library", "e.g. Review"), de.autocomplete = "off", ye.appendChild(de);
  const Ve = document.createElement("button");
  Ve.type = "submit", Ve.className = "button secondary", Ve.textContent = s("library", "Remove tag from current results");
  const ge = document.createElement("p");
  ge.className = "library-muted", ge.textContent = s("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), De.append(ye, Ve, ge);
  const Ce = document.createElement("form");
  Ce.method = "post", Ce.action = p, Ce.className = "library-batch-metadata-reset-form";
  const qe = Pr(e);
  qe && Ce.appendChild(qe);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Ce.appendChild(H);
  }
  const Xe = document.createElement("input");
  Xe.type = "hidden", Xe.name = "scannerConflicts", Xe.value = "1";
  const he = document.createElement("button");
  he.type = "submit", he.className = "button secondary", he.textContent = s("library", "Reset filtered metadata");
  const At = document.createElement("p");
  At.className = "library-muted", At.textContent = s("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ce.append(Xe, he, At);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = v, Be.className = "library-batch-metadata-edit-preview-form", Be.target = "_blank";
  const ut = Pr(e);
  ut && Be.appendChild(ut);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), Be.appendChild(H);
  }
  const bt = document.createElement("label");
  bt.textContent = s("library", "Metadata field");
  const Et = document.createElement("select");
  Et.name = "bulkEditField";
  for (const [O, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = O, H.textContent = s("library", N), Et.appendChild(H);
  }
  bt.appendChild(Et);
  const rt = document.createElement("label");
  rt.textContent = s("library", "Preview value");
  const dt = document.createElement("input");
  dt.type = "text", dt.name = "bulkEditValue", dt.placeholder = "magazine, de, photography...", dt.autocomplete = "off", rt.appendChild(dt);
  const h = document.createElement("button");
  h.type = "submit", h.className = "button secondary", h.textContent = s("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = s("library", "Preview first, then apply from the review page."), Be.append(bt, rt, h, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const R = Pr(e);
  R && _.appendChild(R);
  for (const [O, N] of Object.entries(e.activeFilters || {})) {
    if (Y(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = O, H.value = Y(N), _.appendChild(H);
  }
  const E = document.createElement("button");
  E.type = "submit", E.className = "button secondary", E.textContent = s("library", "Request fresh cover previews");
  const A = document.createElement("p");
  A.className = "library-muted", A.textContent = s("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(E, A), Oe.append(je, Ee, De, Ce, Be, _), P.appendChild(Oe);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", s("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(D), P.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], C = document.createElement("details");
  C.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = s("library", "Show top series and periodicals"), C.appendChild(G);
  const $ = document.createElement("h3");
  $.textContent = L.length > 0 ? s("library", "Top series and periodicals") : s("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = L.length > 0 ? s("library", "Jump into recurring publications with one click.") : s("library", "Add publication or series names in item details to build this shortcut panel."), C.append($, W), L.length > 0) {
    const O = document.createElement("ul");
    for (const N of L) {
      const H = document.createElement("li"), Q = document.createElement("a");
      Q.href = hb(N.publication, N), Q.textContent = Y(N.publication);
      const oe = document.createElement("span");
      oe.className = "library-muted", oe.textContent = `${N.itemCount} items`, H.append(Q, oe), O.appendChild(H);
    }
    C.appendChild(O);
  }
  P.appendChild(C);
  const J = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (J.length > 0) {
    const O = document.createElement("details");
    O.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = s("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = s("library", "Top publication years");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = s("library", "Jump into dated books, magazines, journals and comics by year.");
    const oe = document.createElement("ul");
    for (const _e of J) {
      const fe = document.createElement("li"), Le = document.createElement("a");
      Le.href = bb(_e, e), Le.textContent = Y(_e), fe.appendChild(Le), oe.appendChild(fe);
    }
    O.append(N, H, Q, oe), P.appendChild(O);
  }
  const te = Array.isArray(e.creators) ? e.creators : [];
  if (te.length > 0) {
    const O = document.createElement("details");
    O.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = s("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = s("library", "Top creators");
    const Q = document.createElement("p");
    Q.className = "library-muted", Q.textContent = s("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const oe = document.createElement("ul");
    for (const _e of te) {
      const fe = document.createElement("li"), Le = document.createElement("a");
      Le.href = yb(_e, e), Le.textContent = Y(_e), fe.appendChild(Le), oe.appendChild(fe);
    }
    O.append(N, H, Q, oe), P.appendChild(O);
  }
  if (r.length === 0) {
    const O = document.createElement("div"), N = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), Q = gb(e);
    O.className = "library-empty-content", (N === 0 || H === 0) && O.classList.add("library-first-run-guidance"), Q && N > 0 && H > 0 && O.classList.add("library-filter-empty-state"), O.setAttribute("role", "status");
    const oe = document.createElement("h3"), _e = document.createElement("p");
    _e.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", N === 0 ? (oe.textContent = s("library", "Start with one Library root"), _e.textContent = s("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Zr(fe, i, "button primary", s("library", "Add a Library root")), vb(fe, s("library", "Run a scan after saving a root"))) : H === 0 ? (oe.textContent = s("library", "No enabled Library roots"), _e.textContent = s("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Zr(fe, i, "button primary", s("library", "Open Library settings"))) : Q ? (oe.textContent = s("library", "No matches for the current filters"), _e.textContent = s("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Zr(fe, _b(), "button secondary", s("library", "Clear search")), Zr(fe, "?", "button primary", s("library", "Clear all filters"))) : (oe.textContent = s("library", "No catalogue items yet"), _e.textContent = s("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Zr(fe, i, "button primary", s("library", "Run a scan from settings"))), O.append(oe, _e, fe), P.appendChild(O);
  } else {
    const O = document.createElement("div");
    O.className = "library-cover-gallery";
    for (const N of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const Q = document.createElement("a");
      Q.className = "library-cover-link", Q.href = Y(N.openUrl || "#"), Q.setAttribute("aria-label", `Read ${Y(N.title || "publication")}`);
      const oe = document.createElement("img");
      oe.className = "library-cover-image", oe.src = Y(N.coverUrl || ""), oe.alt = `Cover for ${Y(N.title || "publication")}`, oe.loading = "lazy", Q.appendChild(oe);
      const _e = Pr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = Y(N.starUrl || ""), fe.className = "library-cover-star-form", _e && fe.appendChild(_e);
      const Le = document.createElement("input");
      Le.type = "hidden", Le.name = "returnTo", Le.value = "catalogue";
      const Re = document.createElement("input");
      Re.type = "hidden", Re.name = "starred", Re.value = N.starred ? "0" : "1";
      const Te = document.createElement("button");
      Te.type = "submit", Te.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Te.setAttribute("aria-pressed", N.starred ? "true" : "false"), Te.setAttribute("aria-label", N.starred ? s("library", "Unstar this publication") : s("library", "Star this publication")), Te.title = N.starred ? s("library", "Unstar this publication") : s("library", "Star this publication"), Te.textContent = N.starred ? "★" : "☆", fe.append(Le, Re, Te);
      const nt = document.createElement("div");
      nt.className = "library-cover-summary";
      const It = document.createElement("h3");
      if (It.textContent = Y(N.title || "Untitled publication"), nt.appendChild(It), N.creators) {
        const wt = document.createElement("p");
        wt.className = "library-creator", wt.textContent = Y(N.creators), nt.appendChild(wt);
      }
      const Mt = document.createElement("dl");
      Mt.className = "library-cover-detail-list";
      const mr = [
        ["Type", Y(N.publicationType || "other")],
        ["Format", N.extension ? Ro(N.extension) : ""],
        ["Shelf", N.shelf ? Y(N.shelf) : ""]
      ].filter(([, wt]) => wt !== "");
      for (const [wt, or] of mr) {
        const Ut = document.createElement("div");
        Ut.className = "library-cover-detail-chip";
        const zt = document.createElement("dt");
        zt.textContent = wt;
        const Fe = document.createElement("dd");
        Fe.textContent = or, Ut.append(zt, Fe), Mt.appendChild(Ut);
      }
      nt.appendChild(Mt);
      const Tt = document.createElement("p"), yt = document.createElement("a");
      yt.href = Y(N.openUrl || "#"), yt.textContent = s("library", "Read");
      const ar = document.createElement("a");
      ar.href = Y(N.filesUrl || "#"), ar.textContent = s("library", "Show in Files");
      const Lt = document.createElement("a");
      Lt.href = Y(N.downloadUrl || "#"), Lt.textContent = s("library", "Download source");
      const sr = document.createElement("a");
      sr.href = Y(N.detailsUrl || "#"), sr.textContent = s("library", "Details"), Tt.append(yt, document.createTextNode(" · "), ar, document.createTextNode(" · "), Lt, document.createTextNode(" · "), sr), nt.appendChild(Tt), H.append(Q, fe, nt), O.appendChild(H);
    }
    P.appendChild(O);
  }
  return S.appendChild(P), S;
}
if (Dn)
  try {
    cu(fb, { state: hs }).mount(Dn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Dn.replaceChildren(wb(hs));
  }
//# sourceMappingURL=library-main.mjs.map
