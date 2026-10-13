// @__NO_SIDE_EFFECTS__
function bd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const tt = {}, Tr = [], Di = () => {
}, Fh = () => !1, eu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tu = (e) => e.startsWith("onUpdate:"), $t = Object.assign, gd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, ym = Object.prototype.hasOwnProperty, lt = (e, t) => ym.call(e, t), Ie = Array.isArray, ba = (e) => as(e) === "[object Map]", Mn = (e) => as(e) === "[object Set]", Uf = (e) => as(e) === "[object Date]", Ue = (e) => typeof e == "function", vt = (e) => typeof e == "string", Ki = (e) => typeof e == "symbol", st = (e) => e !== null && typeof e == "object", Mh = (e) => (st(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), Uh = Object.prototype.toString, as = (e) => Uh.call(e), _m = (e) => as(e).slice(8, -1), zh = (e) => as(e) === "[object Object]", md = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kl = /* @__PURE__ */ bd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), iu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, wm = /-\w/g, Xt = iu(
  (e) => e.replace(wm, (t) => t.slice(1).toUpperCase())
), km = /\B([A-Z])/g, Vn = iu(
  (e) => e.replace(km, "-$1").toLowerCase()
), nu = iu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gu = iu(
  (e) => e ? `on${nu(e)}` : ""
), Ut = (e, t) => !Object.is(e, t), Ks = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, jh = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, au = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sm = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zf;
const ru = () => zf || (zf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pi(e) {
  if (Ie(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = vt(n) ? Em(n) : pi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (vt(e) || st(e))
    return e;
}
const Cm = /;(?![^(]*\))/g, Tm = /:([^]+)/, Am = /\/\*[^]*?\*\//g;
function Em(e) {
  const t = {};
  return e.replace(Am, "").split(Cm).forEach((i) => {
    if (i) {
      const n = i.split(Tm);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (Ie(e))
    for (let i = 0; i < e.length; i++) {
      const n = Te(e[i]);
      n && (t += n + " ");
    }
  else if (st(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Js(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !vt(t) && (e.class = Te(t)), i && (e.style = pi(i)), e;
}
const $m = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xm = /* @__PURE__ */ bd($m);
function Bh(e) {
  return !!e || e === "";
}
function Om(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Un(e[n], t[n]);
  return i;
}
function jf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let l = 0; l < i.length; l++)
      if (!n[l] && Un(a, i[l])) {
        r = l;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Un(e, t) {
  if (e === t) return !0;
  let i = Uf(e), n = Uf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Ki(e), n = Ki(t), i || n)
    return e === t;
  if (i = Ie(e), n = Ie(t), i || n)
    return i && n ? Om(e, t) : !1;
  if (i = st(e), n = st(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = ba(e), n = ba(t), i || n || (i = Mn(e), n = Mn(t), i || n))
      return i && n ? jf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const l in e) {
      const d = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (d && !c || !d && c || !Un(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yd(e, t) {
  return e.findIndex((i) => Un(i, t));
}
const Hh = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Ie(e) || st(e) && (e.toString === Uh || !Ue(e.toString)) ? Hh(e) ? o(e.value) : JSON.stringify(e, Vh, 2) : String(e), Vh = (e, t) => Hh(t) ? Vh(e, t.value) : ba(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[Ku(n, r) + " =>"] = a, i),
    {}
  )
} : Mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Ku(i))
} : Ki(t) ? Ku(t) : st(t) && !Ie(t) && !zh(t) ? String(t) : t, Ku = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ki(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Nm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Mt;
class Rm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Mt && (Mt.active ? (this.parent = Mt, this.index = (Mt.scopes || (Mt.scopes = [])).push(
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
      const i = Mt;
      try {
        return Mt = this, t();
      } finally {
        Mt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mt, Mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Mt === this)
        Mt = this.prevScope;
      else {
        let t = Mt;
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
function Im() {
  return Mt;
}
let ht;
const Wu = /* @__PURE__ */ new WeakSet();
class qh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && (Mt.active ? Mt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wu.has(this) && (Wu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bf(this), Wh(this);
    const t = ht, i = qi;
    ht = this, qi = !0;
    try {
      return this.fn();
    } finally {
      Yh(this), ht = t, qi = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        kd(t);
      this.deps = this.depsTail = void 0, Bf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lc(this) && this.run();
  }
  get dirty() {
    return Lc(this);
  }
}
let Gh = 0, Sl, Cl;
function Kh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cl, Cl = e;
    return;
  }
  e.next = Sl, Sl = e;
}
function _d() {
  Gh++;
}
function wd() {
  if (--Gh > 0)
    return;
  if (Cl) {
    let t = Cl;
    for (Cl = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Sl; ) {
    let t = Sl;
    for (Sl = void 0; t; ) {
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
function Wh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yh(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), kd(n), Lm(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function Lc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ml) || (e.globalVersion = Ml, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = ht, n = qi;
  ht = e, qi = !0;
  try {
    Wh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ut(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = i, qi = n, Yh(e), e.flags &= -3;
  }
}
function kd(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      kd(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Lm(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let qi = !0;
const Xh = [];
function zn() {
  Xh.push(qi), qi = !1;
}
function jn() {
  const e = Xh.pop();
  qi = e === void 0 ? !0 : e;
}
function Bf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = ht;
    ht = void 0;
    try {
      t();
    } finally {
      ht = i;
    }
  }
}
let Ml = 0;
class Pm {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !qi || ht === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== ht)
      i = this.activeLink = new Pm(ht, this), ht.deps ? (i.prevDep = ht.depsTail, ht.depsTail.nextDep = i, ht.depsTail = i) : ht.deps = ht.depsTail = i, Jh(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = ht.depsTail, i.nextDep = void 0, ht.depsTail.nextDep = i, ht.depsTail = i, ht.deps === i && (ht.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, Ml++, this.notify(t);
  }
  notify(t) {
    _d();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      wd();
    }
  }
}
function Jh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Jh(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Ul = /* @__PURE__ */ Symbol(
  ""
);
function Wt(e, t, i) {
  if (qi && ht) {
    let n = Pc.get(e);
    n || Pc.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new lu()), a.map = n, a.key = i), a.track();
  }
}
function Nn(e, t, i, n, a, r) {
  const l = Pc.get(e);
  if (!l) {
    Ml++;
    return;
  }
  const d = (c) => {
    c && c.trigger();
  };
  if (_d(), t === "clear")
    l.forEach(d);
  else {
    const c = Ie(e), g = c && md(i);
    if (c && i === "length") {
      const v = Number(n);
      l.forEach((m, y) => {
        (y === "length" || y === Ul || !Ki(y) && y >= v) && d(m);
      });
    } else
      switch ((i !== void 0 || l.has(void 0)) && d(l.get(i)), g && d(l.get(Ul)), t) {
        case "add":
          c ? g && d(l.get("length")) : (d(l.get(Qa)), ba(e) && d(l.get(Dc)));
          break;
        case "delete":
          c || (d(l.get(Qa)), ba(e) && d(l.get(Dc)));
          break;
        case "set":
          ba(e) && d(l.get(Qa));
          break;
      }
  }
  wd();
}
function gr(e) {
  const t = /* @__PURE__ */ at(e);
  return t === e ? t : (Wt(t, "iterate", Ul), /* @__PURE__ */ Fi(e) ? t : t.map(Wi));
}
function su(e) {
  return Wt(e = /* @__PURE__ */ at(e), "iterate", Ul), e;
}
function rn(e, t) {
  return /* @__PURE__ */ Bn(e) ? Rr(/* @__PURE__ */ er(e) ? Wi(t) : t) : Wi(t);
}
const Dm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yu(this, Symbol.iterator, (e) => rn(this, e));
  },
  concat(...e) {
    return gr(this).concat(
      ...e.map((t) => Ie(t) ? gr(t) : t)
    );
  },
  entries() {
    return Yu(this, "entries", (e) => (e[1] = rn(this, e[1]), e));
  },
  every(e, t) {
    return wn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return wn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => rn(this, n)),
      arguments
    );
  },
  find(e, t) {
    return wn(
      this,
      "find",
      e,
      t,
      (i) => rn(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return wn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return wn(
      this,
      "findLast",
      e,
      t,
      (i) => rn(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return wn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return wn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zu(this, "includes", e);
  },
  indexOf(...e) {
    return Zu(this, "indexOf", e);
  },
  join(e) {
    return gr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return wn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rl(this, "pop");
  },
  push(...e) {
    return rl(this, "push", e);
  },
  reduce(e, ...t) {
    return Hf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hf(this, "reduceRight", e, t);
  },
  shift() {
    return rl(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return wn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rl(this, "splice", e);
  },
  toReversed() {
    return gr(this).toReversed();
  },
  toSorted(e) {
    return gr(this).toSorted(e);
  },
  toSpliced(...e) {
    return gr(this).toSpliced(...e);
  },
  unshift(...e) {
    return rl(this, "unshift", e);
  },
  values() {
    return Yu(this, "values", (e) => rn(this, e));
  }
};
function Yu(e, t, i) {
  const n = su(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Fi(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Fm = Array.prototype;
function wn(e, t, i, n, a, r) {
  const l = su(e), d = l !== e && !/* @__PURE__ */ Fi(e), c = l[t];
  if (c !== Fm[t]) {
    const m = c.apply(e, r);
    return d ? Wi(m) : m;
  }
  let g = i;
  l !== e && (d ? g = function(m, y) {
    return i.call(this, rn(e, m), y, e);
  } : i.length > 2 && (g = function(m, y) {
    return i.call(this, m, y, e);
  }));
  const v = c.call(l, g, n);
  return d && a ? a(v) : v;
}
function Hf(e, t, i, n) {
  const a = su(e), r = a !== e && !/* @__PURE__ */ Fi(e);
  let l = i, d = !1;
  a !== e && (r ? (d = n.length === 0, l = function(g, v, m) {
    return d && (d = !1, g = rn(e, g)), i.call(this, g, rn(e, v), m, e);
  }) : i.length > 3 && (l = function(g, v, m) {
    return i.call(this, g, v, m, e);
  }));
  const c = a[t](l, ...n);
  return d ? rn(e, c) : c;
}
function Zu(e, t, i) {
  const n = /* @__PURE__ */ at(e);
  Wt(n, "iterate", Ul);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Td(i[0]) ? (i[0] = /* @__PURE__ */ at(i[0]), n[t](...i)) : a;
}
function rl(e, t, i = []) {
  zn(), _d();
  const n = (/* @__PURE__ */ at(e))[t].apply(e, i);
  return wd(), jn(), n;
}
const Mm = /* @__PURE__ */ bd("__proto__,__v_isRef,__isVue"), Qh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ki)
);
function Um(e) {
  Ki(e) || (e = String(e));
  const t = /* @__PURE__ */ at(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class ev {
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
      return n === (a ? r ? Ym : av : r ? nv : iv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = Ie(t);
    if (!a) {
      let c;
      if (l && (c = Dm[i]))
        return c;
      if (i === "hasOwnProperty")
        return Um;
    }
    const d = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Jt(t) ? t : n
    );
    if ((Ki(i) ? Qh.has(i) : Mm(i)) || (a || Wt(t, "get", i), r))
      return d;
    if (/* @__PURE__ */ Jt(d)) {
      const c = l && md(i) ? d : d.value;
      return a && st(c) ? /* @__PURE__ */ zl(c) : c;
    }
    return st(d) ? a ? /* @__PURE__ */ zl(d) : /* @__PURE__ */ Nt(d) : d;
  }
}
class tv extends ev {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const l = Ie(t) && md(i);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ Bn(r);
      if (!/* @__PURE__ */ Fi(n) && !/* @__PURE__ */ Bn(n) && (r = /* @__PURE__ */ at(r), n = /* @__PURE__ */ at(n)), !l && /* @__PURE__ */ Jt(r) && !/* @__PURE__ */ Jt(n))
        return g || (r.value = n), !0;
    }
    const d = l ? Number(i) < t.length : lt(t, i), c = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Jt(t) ? t : a
    );
    return t === /* @__PURE__ */ at(a) && c && (d ? Ut(n, r) && Nn(t, "set", i, n) : Nn(t, "add", i, n)), c;
  }
  deleteProperty(t, i) {
    const n = lt(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && Nn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Ki(i) || !Qh.has(i)) && Wt(t, "has", i), n;
  }
  ownKeys(t) {
    return Wt(
      t,
      "iterate",
      Ie(t) ? "length" : Qa
    ), Reflect.ownKeys(t);
  }
}
class zm extends ev {
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
const jm = /* @__PURE__ */ new tv(), Bm = /* @__PURE__ */ new zm(), Hm = /* @__PURE__ */ new tv(!0);
const Fc = (e) => e, Is = (e) => Reflect.getPrototypeOf(e);
function Vm(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ at(a), l = ba(r), d = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, g = a[e](...n), v = i ? Fc : t ? Rr : Wi;
    return !t && Wt(
      r,
      "iterate",
      c ? Dc : Qa
    ), $t(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: m, done: y } = g.next();
          return y ? { value: m, done: y } : {
            value: d ? [v(m[0]), v(m[1])] : v(m),
            done: y
          };
        }
      }
    );
  };
}
function Ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qm(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, l = /* @__PURE__ */ at(r), d = /* @__PURE__ */ at(a);
      e || (Ut(a, d) && Wt(l, "get", a), Wt(l, "get", d));
      const { has: c } = Is(l), g = t ? Fc : e ? Rr : Wi;
      if (c.call(l, a))
        return g(r.get(a));
      if (c.call(l, d))
        return g(r.get(d));
      r !== l && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Wt(/* @__PURE__ */ at(a), "iterate", Qa), a.size;
    },
    has(a) {
      const r = this.__v_raw, l = /* @__PURE__ */ at(r), d = /* @__PURE__ */ at(a);
      return e || (Ut(a, d) && Wt(l, "has", a), Wt(l, "has", d)), a === d ? r.has(a) : r.has(a) || r.has(d);
    },
    forEach(a, r) {
      const l = this, d = l.__v_raw, c = /* @__PURE__ */ at(d), g = t ? Fc : e ? Rr : Wi;
      return !e && Wt(c, "iterate", Qa), d.forEach((v, m) => a.call(r, g(v), g(m), l));
    }
  };
  return $t(
    i,
    e ? {
      add: Ls("add"),
      set: Ls("set"),
      delete: Ls("delete"),
      clear: Ls("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ at(this), l = Is(r), d = /* @__PURE__ */ at(a), c = !t && !/* @__PURE__ */ Fi(a) && !/* @__PURE__ */ Bn(a) ? d : a;
        return l.has.call(r, c) || Ut(a, c) && l.has.call(r, a) || Ut(d, c) && l.has.call(r, d) || (r.add(c), Nn(r, "add", c, c)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Fi(r) && !/* @__PURE__ */ Bn(r) && (r = /* @__PURE__ */ at(r));
        const l = /* @__PURE__ */ at(this), { has: d, get: c } = Is(l);
        let g = d.call(l, a);
        g || (a = /* @__PURE__ */ at(a), g = d.call(l, a));
        const v = c.call(l, a);
        return l.set(a, r), g ? Ut(r, v) && Nn(l, "set", a, r) : Nn(l, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ at(this), { has: l, get: d } = Is(r);
        let c = l.call(r, a);
        c || (a = /* @__PURE__ */ at(a), c = l.call(r, a)), d && d.call(r, a);
        const g = r.delete(a);
        return c && Nn(r, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ at(this), r = a.size !== 0, l = a.clear();
        return r && Nn(
          a,
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
  ].forEach((a) => {
    i[a] = Vm(a, e, t);
  }), i;
}
function Sd(e, t) {
  const i = qm(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    lt(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Gm = {
  get: /* @__PURE__ */ Sd(!1, !1)
}, Km = {
  get: /* @__PURE__ */ Sd(!1, !0)
}, Wm = {
  get: /* @__PURE__ */ Sd(!0, !1)
};
const iv = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), av = /* @__PURE__ */ new WeakMap(), Ym = /* @__PURE__ */ new WeakMap();
function Zm(e) {
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
function Nt(e) {
  return /* @__PURE__ */ Bn(e) ? e : Cd(
    e,
    !1,
    jm,
    Gm,
    iv
  );
}
// @__NO_SIDE_EFFECTS__
function Xm(e) {
  return Cd(
    e,
    !1,
    Hm,
    Km,
    nv
  );
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return Cd(
    e,
    !0,
    Bm,
    Wm,
    av
  );
}
function Cd(e, t, i, n, a) {
  if (!st(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const l = Zm(_m(e));
  if (l === 0)
    return e;
  const d = new Proxy(
    e,
    l === 2 ? n : i
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return /* @__PURE__ */ Bn(e) ? /* @__PURE__ */ er(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Td(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ at(t) : e;
}
function Jm(e) {
  return !lt(e, "__v_skip") && Object.isExtensible(e) && jh(e, "__v_skip", !0), e;
}
const Wi = (e) => st(e) ? /* @__PURE__ */ Nt(e) : e, Rr = (e) => st(e) ? /* @__PURE__ */ zl(e) : e;
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  return lv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return lv(e, !0);
}
function lv(e, t) {
  return /* @__PURE__ */ Jt(e) ? e : new Qm(e, t);
}
class Qm {
  constructor(t, i) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ at(t), this._value = i ? t : Wi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Fi(t) || /* @__PURE__ */ Bn(t);
    t = n ? t : /* @__PURE__ */ at(t), Ut(t, i) && (this._rawValue = t, this._value = n ? t : Wi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ Jt(e) ? e.value : e;
}
function Pn(e) {
  return Ue(e) ? e() : u(e);
}
const ey = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Jt(a) && !/* @__PURE__ */ Jt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function sv(e) {
  return /* @__PURE__ */ er(e) ? e : new Proxy(e, ey);
}
class ty {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new lu(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function iy(e) {
  return new ty(e);
}
class ny {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new lu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ml - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return Kh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ay(e, t, i = !1) {
  let n, a;
  return Ue(e) ? n = e : (n = e.get, a = e.set), new ny(n, a, i);
}
const Ps = {}, Qs = /* @__PURE__ */ new WeakMap();
let Ga;
function ry(e, t = !1, i = Ga) {
  if (i) {
    let n = Qs.get(i);
    n || Qs.set(i, n = []), n.push(e);
  }
}
function ly(e, t, i = tt) {
  const { immediate: n, deep: a, once: r, scheduler: l, augmentJob: d, call: c } = i, g = (I) => a ? I : /* @__PURE__ */ Fi(I) || a === !1 || a === 0 ? Rn(I, 1) : Rn(I);
  let v, m, y, k, T = !1, C = !1;
  if (/* @__PURE__ */ Jt(e) ? (m = () => e.value, T = /* @__PURE__ */ Fi(e)) : /* @__PURE__ */ er(e) ? (m = () => g(e), T = !0) : Ie(e) ? (C = !0, T = e.some((I) => /* @__PURE__ */ er(I) || /* @__PURE__ */ Fi(I)), m = () => e.map((I) => {
    if (/* @__PURE__ */ Jt(I))
      return I.value;
    if (/* @__PURE__ */ er(I))
      return g(I);
    if (Ue(I))
      return c ? c(I, 2) : I();
  })) : Ue(e) ? t ? m = c ? () => c(e, 2) : e : m = () => {
    if (y) {
      zn();
      try {
        y();
      } finally {
        jn();
      }
    }
    const I = Ga;
    Ga = v;
    try {
      return c ? c(e, 3, [k]) : e(k);
    } finally {
      Ga = I;
    }
  } : m = Di, t && a) {
    const I = m, ve = a === !0 ? 1 / 0 : a;
    m = () => Rn(I(), ve);
  }
  const $ = Im(), N = () => {
    v.stop(), $ && $.active && gd($.effects, v);
  };
  if (r && t) {
    const I = t;
    t = (...ve) => {
      const Q = I(...ve);
      return N(), Q;
    };
  }
  let R = C ? new Array(e.length).fill(Ps) : Ps;
  const P = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (t) {
        const ve = v.run();
        if (I || a || T || (C ? ve.some((Q, x) => Ut(Q, R[x])) : Ut(ve, R))) {
          y && y();
          const Q = Ga;
          Ga = v;
          try {
            const x = [
              ve,
              // pass undefined as the old value when it's changed for the first time
              R === Ps ? void 0 : C && R[0] === Ps ? [] : R,
              k
            ];
            R = ve, c ? c(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Ga = Q;
          }
        }
      } else
        v.run();
  };
  return d && d(P), v = new qh(m), v.scheduler = l ? () => l(P, !1) : P, k = (I) => ry(I, !1, v), y = v.onStop = () => {
    const I = Qs.get(v);
    if (I) {
      if (c)
        c(I, 4);
      else
        for (const ve of I) ve();
      Qs.delete(v);
    }
  }, t ? n ? P(!0) : R = v.run() : l ? l(P.bind(null, !0), !0) : v.run(), N.pause = v.pause.bind(v), N.resume = v.resume.bind(v), N.stop = N, N;
}
function Rn(e, t = 1 / 0, i) {
  if (t <= 0 || !st(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Jt(e))
    Rn(e.value, t, i);
  else if (Ie(e))
    for (let n = 0; n < e.length; n++)
      Rn(e[n], t, i);
  else if (Mn(e) || ba(e))
    e.forEach((n) => {
      Rn(n, t, i);
    });
  else if (zh(e)) {
    for (const n in e)
      Rn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rn(e[n], t, i);
  }
  return e;
}
function rs(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    ou(a, t, i);
  }
}
function Mi(e, t, i, n) {
  if (Ue(e)) {
    const a = rs(e, t, i, n);
    return a && Mh(a) && a.catch((r) => {
      ou(r, t, i);
    }), a;
  }
  if (Ie(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Mi(e[r], t, i, n));
    return a;
  }
}
function ou(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || tt;
  if (t) {
    let d = t.parent;
    const c = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let m = 0; m < v.length; m++)
          if (v[m](e, c, g) === !1)
            return;
      }
      d = d.parent;
    }
    if (r) {
      zn(), rs(r, null, 10, [
        e,
        c,
        g
      ]), jn();
      return;
    }
  }
  sy(e, i, a, n, l);
}
function sy(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const oi = [];
let tn = -1;
const Ar = [];
let fa = null, kr = 0;
const ov = /* @__PURE__ */ Promise.resolve();
let eo = null;
function Rt(e) {
  const t = eo || ov;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oy(e) {
  let t = tn + 1, i = oi.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = oi[n], r = jl(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Ad(e) {
  if (!(e.flags & 1)) {
    const t = jl(e), i = oi[oi.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jl(i) ? oi.push(e) : oi.splice(oy(t), 0, e), e.flags |= 1, uv();
  }
}
function uv() {
  eo || (eo = ov.then(fv));
}
function cv(e) {
  if (!Ie(e))
    fa && e.id === -1 ? fa.splice(kr + 1, 0, e) : e.flags & 1 || (Ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ar.push(e[t]);
  uv();
}
function Vf(e, t, i = tn + 1) {
  for (; i < oi.length; i++) {
    const n = oi[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      oi.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function dv(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (i, n) => jl(i) - jl(n)
    );
    if (Ar.length = 0, fa) {
      for (let i = 0; i < t.length; i++)
        fa.push(t[i]);
      return;
    }
    for (fa = t, kr = 0; kr < fa.length; kr++) {
      const i = fa[kr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    fa = null, kr = 0;
  }
}
const jl = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fv(e) {
  try {
    for (tn = 0; tn < oi.length; tn++) {
      const t = oi[tn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; tn < oi.length; tn++) {
      const t = oi[tn];
      t && (t.flags &= -2);
    }
    tn = -1, oi.length = 0, dv(), eo = null, (oi.length || Ar.length) && fv();
  }
}
let jt = null, uu = null;
function to(e) {
  const t = jt;
  return jt = e, uu = e && e.type.__scopeId || null, t;
}
function uy(e) {
  uu = e;
}
function cy() {
  uu = null;
}
const dy = (e) => we;
function we(e, t = jt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && lo(-1);
    const r = to(t), l = Dn.length;
    let d;
    try {
      d = e(...a);
    } finally {
      for (let c = Dn.length; c > l; c--) Ld();
      to(r), n._d && lo(1);
    }
    return d;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ge(e, t) {
  if (jt === null)
    return e;
  const i = vu(jt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, l, d, c = tt] = t[a];
    r && (Ue(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rn(l), n.push({
      dir: r,
      instance: i,
      value: l,
      oldValue: void 0,
      arg: d,
      modifiers: c
    }));
  }
  return e;
}
function za(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let l = 0; l < a.length; l++) {
    const d = a[l];
    r && (d.oldValue = r[l].value);
    let c = d.dir[n];
    c && (zn(), Mi(c, i, 8, [
      e.el,
      d,
      e,
      t
    ]), jn());
  }
}
function Ii(e, t) {
  if (Zt) {
    let i = Zt.provides;
    const n = Zt.parent && Zt.parent.provides;
    n === i && (i = Zt.provides = Object.create(n)), i[e] = t;
  }
}
function Yt(e, t, i = !1) {
  const n = Sa();
  if (n || $r) {
    let a = $r ? $r._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && Ue(t) ? t.call(n && n.proxy) : t;
  }
}
const fy = /* @__PURE__ */ Symbol.for("v-scx"), py = () => Yt(fy);
function hy(e, t) {
  return cu(e, null, t);
}
function vy(e, t) {
  return cu(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, i) {
  return cu(e, t, i);
}
function cu(e, t, i = tt) {
  const { immediate: n, deep: a, flush: r, once: l } = i, d = $t({}, i), c = t && n || !t && r !== "post";
  let g;
  if (Kl) {
    if (r === "sync") {
      const k = py();
      g = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!c) {
      const k = () => {
      };
      return k.stop = Di, k.resume = Di, k.pause = Di, k;
    }
  }
  const v = Zt;
  d.call = (k, T, C) => Mi(k, v, T, C);
  let m = !1;
  r === "post" ? d.scheduler = (k) => {
    si(k, v && v.suspense);
  } : r !== "sync" && (m = !0, d.scheduler = (k, T) => {
    T ? k() : Ad(k);
  }), d.augmentJob = (k) => {
    t && (k.flags |= 4), m && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const y = ly(e, t, d);
  return Kl && (g ? g.push(y) : c && y()), y;
}
function by(e, t, i) {
  const n = this.proxy, a = vt(e) ? e.includes(".") ? pv(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Ue(t) ? r = t : (r = t.handler, i = t);
  const l = os(this), d = cu(a, r.bind(n), i);
  return l(), d;
}
function pv(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const ua = /* @__PURE__ */ new WeakMap(), hv = /* @__PURE__ */ Symbol("_vte"), du = (e) => e.__isTeleport, Wa = (e) => e && (e.disabled || e.disabled === ""), gy = (e) => e && (e.defer || e.defer === ""), qf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, my = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, l, d, c, g) {
    const {
      mc: v,
      pc: m,
      pbc: y,
      o: { insert: k, querySelector: T, createText: C, createComment: $, parentNode: N }
    } = g, R = Wa(t.props);
    let { dynamicChildren: P } = t;
    const I = (x, H, K) => {
      x.shapeFlag & 16 && v(
        x.children,
        H,
        K,
        a,
        r,
        l,
        d,
        c
      );
    }, ve = (x = t) => {
      const H = Wa(x.props), K = x.target = Mc(x.props, T), Z = Uc(K, x, C, k);
      K && (l !== "svg" && qf(K) ? l = "svg" : l !== "mathml" && Gf(K) && (l = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), H || (I(x, K, Z), bl(x, !1)));
    }, Q = (x) => {
      const H = () => {
        if (ua.get(x) === H) {
          if (ua.delete(x), Wa(x.props)) {
            const K = N(x.el) || i;
            I(x, K, x.anchor), bl(x, !0);
          }
          ve(x);
        }
      };
      ua.set(x, H), si(H, r);
    };
    if (e == null) {
      const x = t.el = C(""), H = t.anchor = C("");
      if (k(x, i, n), k(H, i, n), gy(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      R && (I(t, i, H), bl(t, !0)), ve();
    } else {
      t.el = e.el;
      const x = t.anchor = e.anchor, H = ua.get(e);
      if (H) {
        H.flags |= 8, ua.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const K = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, ae = Wa(e.props), j = ae ? i : K, q = ae ? x : Z;
      if (l === "svg" || qf(K) ? l = "svg" : (l === "mathml" || Gf(K)) && (l = "mathml"), P ? (y(
        e.dynamicChildren,
        P,
        j,
        a,
        r,
        l,
        d
      ), Id(e, t, !0)) : c || m(
        e,
        t,
        j,
        q,
        a,
        r,
        l,
        d,
        !1
      ), R)
        ae ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ds(
          t,
          i,
          x,
          g,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const L = Mc(t.props, T);
        L && (t.target = L, Ds(
          t,
          L,
          null,
          g,
          0
        ));
      } else ae && Ds(
        t,
        K,
        Z,
        g,
        1
      );
      bl(t, R);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: l,
      children: d,
      anchor: c,
      targetStart: g,
      targetAnchor: v,
      target: m,
      props: y
    } = e, k = Wa(y), T = r || !k, C = ua.get(e);
    if (C && (C.flags |= 8, ua.delete(e)), m && (a(g), a(v)), r && a(c), !C && (k || m) && l & 16)
      for (let $ = 0; $ < d.length; $++) {
        const N = d[$];
        n(
          N,
          t,
          i,
          T,
          !!N.dynamicChildren
        );
      }
  },
  move: Ds,
  hydrate: yy
};
function Ds(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: l, anchor: d, shapeFlag: c, children: g, props: v } = e, m = r === 2;
  if (m && n(l, t, i), !ua.has(e) && (!m || Wa(v)) && c & 16)
    for (let y = 0; y < g.length; y++)
      a(
        g[y],
        t,
        i,
        2
      );
  m && n(d, t, i);
}
function yy(e, t, i, n, a, r, {
  o: { nextSibling: l, parentNode: d, querySelector: c, insert: g, createText: v }
}, m) {
  function y($, N) {
    let R = N;
    for (; R; ) {
      if (R && R.nodeType === 8) {
        if (R.data === "teleport start anchor")
          t.targetStart = R;
        else if (R.data === "teleport anchor") {
          t.targetAnchor = R, $._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      R = l(R);
    }
  }
  function k($, N) {
    N.anchor = m(
      l($),
      N,
      d($),
      i,
      n,
      a,
      r
    );
  }
  const T = t.target = Mc(
    t.props,
    c
  ), C = Wa(t.props);
  if (T) {
    const $ = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), y(T, $), t.targetAnchor || Uc(
      T,
      t,
      v,
      g,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      d(e) === T ? e : null
    )) : (t.anchor = l(e), y(T, $), t.targetAnchor || Uc(T, t, v, g), m(
      $ && l($),
      t,
      T,
      i,
      n,
      a,
      r
    ))), bl(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Ed = my;
function bl(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function Uc(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), l = t.targetAnchor = i("");
  return r[hv] = l, e && (n(r, e, a), n(l, e, a)), l;
}
const Li = /* @__PURE__ */ Symbol("_leaveCb"), ll = /* @__PURE__ */ Symbol("_enterCb");
function _y() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), Ti(() => {
    e.isUnmounting = !0;
  }), e;
}
const xi = [Function, Array], vv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: xi,
  onEnter: xi,
  onAfterEnter: xi,
  onEnterCancelled: xi,
  // leave
  onBeforeLeave: xi,
  onLeave: xi,
  onAfterLeave: xi,
  onLeaveCancelled: xi,
  // appear
  onBeforeAppear: xi,
  onAppear: xi,
  onAfterAppear: xi,
  onAppearCancelled: xi
}, bv = (e) => {
  const t = e.subTree;
  return t.component ? bv(t.component) : t;
}, wy = {
  name: "BaseTransition",
  props: vv,
  setup(e, { slots: t }) {
    const i = Sa(), n = _y();
    return () => {
      const a = t.default && yv(t.default(), !0), r = a && a.length ? gv(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? E() : void 0
      );
      if (!r)
        return;
      const l = /* @__PURE__ */ at(e), { mode: d } = l;
      if (n.isLeaving)
        return Xu(r);
      const c = io(r);
      if (!c)
        return Xu(r);
      let g = zc(
        c,
        l,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (m) => g = m
      );
      c.type !== zt && Bl(c, g);
      let v = i.subTree && io(i.subTree);
      if (v && v.type !== zt && !Ya(v, c) && bv(i).type !== zt) {
        let m = zc(
          v,
          l,
          n,
          i
        );
        if (Bl(v, m), d === "out-in" && c.type !== zt)
          return n.isLeaving = !0, m.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete m.afterLeave, v = void 0;
          }, Xu(r);
        d === "in-out" && c.type !== zt ? m.delayLeave = (y, k, T) => {
          const C = mv(
            n,
            v
          );
          C[String(v.key)] = v, y[Li] = () => {
            k(), y[Li] = void 0, delete g.delayedLeave, v = void 0;
          }, g.delayedLeave = () => {
            T(), delete g.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function gv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== zt) {
        t = i;
        break;
      }
  }
  return t;
}
const ky = wy;
function mv(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function zc(e, t, i, n, a) {
  const {
    appear: r,
    mode: l,
    persisted: d = !1,
    onBeforeEnter: c,
    onEnter: g,
    onAfterEnter: v,
    onEnterCancelled: m,
    onBeforeLeave: y,
    onLeave: k,
    onAfterLeave: T,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: N,
    onAfterAppear: R,
    onAppearCancelled: P
  } = t, I = String(e.key), ve = mv(i, e), Q = (K, Z) => {
    K && Mi(
      K,
      n,
      9,
      Z
    );
  }, x = (K, Z) => {
    const ae = Z[1];
    Q(K, Z), Ie(K) ? K.every((j) => j.length <= 1) && ae() : K.length <= 1 && ae();
  }, H = {
    mode: l,
    persisted: d,
    beforeEnter(K) {
      let Z = c;
      if (!i.isMounted)
        if (r)
          Z = $ || c;
        else
          return;
      K[Li] && K[Li](
        !0
        /* cancelled */
      );
      const ae = ve[I];
      ae && Ya(e, ae) && ae.el[Li] && ae.el[Li](), Q(Z, [K]);
    },
    enter(K) {
      if (ve[I] === e) return;
      let Z = g, ae = v, j = m;
      if (!i.isMounted)
        if (r)
          Z = N || g, ae = R || v, j = P || m;
        else
          return;
      let q = !1;
      K[ll] = (V) => {
        q || (q = !0, V ? Q(j, [K]) : Q(ae, [K]), H.delayedLeave && H.delayedLeave(), K[ll] = void 0);
      };
      const L = K[ll].bind(null, !1);
      Z ? x(Z, [K, L]) : L();
    },
    leave(K, Z) {
      const ae = String(e.key);
      if (K[ll] && K[ll](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Z();
      Q(y, [K]);
      let j = !1;
      K[Li] = (L) => {
        j || (j = !0, Z(), L ? Q(C, [K]) : Q(T, [K]), K[Li] = void 0, ve[ae] === e && delete ve[ae]);
      };
      const q = K[Li].bind(null, !1);
      ve[ae] = e, k ? x(k, [K, q]) : q();
    },
    clone(K) {
      const Z = zc(
        K,
        t,
        i,
        n,
        a
      );
      return a && a(Z), Z;
    }
  };
  return H;
}
function Xu(e) {
  if (fu(e))
    return e = _a(e), e.children = null, e;
}
function io(e) {
  if (!fu(e))
    return du(e.type) && e.children ? gv(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && Ue(i.default))
      return i.default();
  }
}
function Bl(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    Bl(
      du(i.type) && io(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yv(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let l = e[r];
    const d = i == null ? l.key : String(i) + String(l.key != null ? l.key : r);
    l.type === W ? (l.patchFlag & 128 && a++, n = n.concat(
      yv(l.children, t, d)
    )) : (t || l.type !== zt) && n.push(d != null ? _a(l, { key: d }) : l);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ht(e, t) {
  return Ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sy() {
  const e = Sa();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _v(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cy(e) {
  const t = Sa(), i = /* @__PURE__ */ rv(null);
  if (t) {
    const a = t.refs === tt ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function Kf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const no = /* @__PURE__ */ new WeakMap();
function Tl(e, t, i, n, a = !1) {
  if (Ie(e)) {
    e.forEach(
      (C, $) => Tl(
        C,
        t && (Ie(t) ? t[$] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (Er(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Tl(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? vu(n.component) : n.el, l = a ? null : r, { i: d, r: c } = e, g = t && t.r, v = d.refs === tt ? d.refs = {} : d.refs, m = d.setupState, y = /* @__PURE__ */ at(m), k = m === tt ? Fh : (C) => Kf(v, C) ? !1 : lt(y, C), T = (C, $) => !($ && Kf(v, $));
  if (g != null && g !== c) {
    if (Wf(t), vt(g))
      v[g] = null, k(g) && (m[g] = null);
    else if (/* @__PURE__ */ Jt(g)) {
      const C = t;
      T(g, C.k) && (g.value = null), C.k && (v[C.k] = null);
    }
  }
  if (Ue(c))
    rs(c, d, 12, [l, v]);
  else {
    const C = vt(c), $ = /* @__PURE__ */ Jt(c);
    if (C || $) {
      const N = () => {
        if (e.f) {
          const R = C ? k(c) ? m[c] : v[c] : T() || !e.k ? c.value : v[e.k];
          if (a)
            Ie(R) && gd(R, r);
          else if (Ie(R))
            R.includes(r) || R.push(r);
          else if (C)
            v[c] = [r], k(c) && (m[c] = v[c]);
          else {
            const P = [r];
            T(c, e.k) && (c.value = P), e.k && (v[e.k] = P);
          }
        } else C ? (v[c] = l, k(c) && (m[c] = l)) : $ && (T(c, e.k) && (c.value = l), e.k && (v[e.k] = l));
      };
      if (l) {
        const R = () => {
          N(), no.delete(e);
        };
        R.id = -1, no.set(e, R), si(R, i);
      } else
        Wf(e), N();
    }
  }
}
function Wf(e) {
  const t = no.get(e);
  t && (t.flags |= 8, no.delete(e));
}
ru().requestIdleCallback;
ru().cancelIdleCallback;
const Er = (e) => !!e.type.__asyncLoader, fu = (e) => e.type.__isKeepAlive;
function Ty(e, t) {
  wv(e, "a", t);
}
function Ay(e, t) {
  wv(e, "da", t);
}
function wv(e, t, i = Zt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (pu(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      fu(a.parent.vnode) && Ey(n, t, i, a), a = a.parent;
  }
}
function Ey(e, t, i, n) {
  const a = pu(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ls(() => {
    gd(n[t], a);
  }, i);
}
function pu(e, t, i = Zt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...l) => {
      zn();
      const d = os(i), c = Mi(t, i, e, l);
      return d(), jn(), c;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const qn = (e) => (t, i = Zt) => {
  (!Kl || e === "sp") && pu(e, (...n) => t(...n), i);
}, kv = qn("bm"), xt = qn("m"), Sv = qn(
  "bu"
), $y = qn("u"), Ti = qn(
  "bum"
), ls = qn("um"), xy = qn(
  "sp"
), Oy = qn("rtg"), Ny = qn("rtc");
function Ry(e, t = Zt) {
  pu("ec", e, t);
}
const $d = "components", Iy = "directives";
function Ze(e, t) {
  return Od($d, e, !0, t) || e;
}
const Cv = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return vt(e) ? Od($d, e, !1) || e : e || Cv;
}
function Yf(e) {
  return Od(Iy, e);
}
function Od(e, t, i = !0, n = !1) {
  const a = jt || Zt;
  if (a) {
    const r = a.type;
    if (e === $d) {
      const d = v1(
        r,
        !1
      );
      if (d && (d === t || d === Xt(t) || d === nu(Xt(t))))
        return r;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zf(a[e] || r[e], t) || // global registration
      Zf(a.appContext[e], t)
    );
    return !l && n ? r : l;
  }
}
function Zf(e, t) {
  return e && (e[t] || e[Xt(t)] || e[nu(Xt(t))]);
}
function he(e, t, i, n) {
  let a;
  const r = i, l = Ie(e);
  if (l || vt(e)) {
    const d = l && /* @__PURE__ */ er(e);
    let c = !1, g = !1;
    d && (c = !/* @__PURE__ */ Fi(e), g = /* @__PURE__ */ Bn(e), e = su(e)), a = new Array(e.length);
    for (let v = 0, m = e.length; v < m; v++)
      a[v] = t(
        c ? g ? Rr(Wi(e[v])) : Wi(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, r);
  } else if (st(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, c) => t(d, c, void 0, r)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let c = 0, g = d.length; c < g; c++) {
        const v = d[c];
        a[c] = t(e[v], v, c, r);
      }
    }
  else
    a = [];
  return a;
}
function Be(e, t, i, n, a, r) {
  if (i == null && (i = {}), jt.ce || jt.parent && Er(jt.parent) && jt.parent.ce) {
    const g = i, v = Object.keys(g).length > 0;
    return t !== "default" && (g.name = t), p(), Pe(
      W,
      null,
      [de("slot", g, n && n())],
      v ? -2 : 64
    );
  }
  let l = e[t];
  l && l._c && (l._d = !1);
  const d = Dn.length;
  p();
  let c;
  try {
    const g = l && Tv(l(i)), v = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    g && g.key;
    c = Pe(
      W,
      {
        key: (v && !Ki(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!g && n ? "_fb" : "")
      },
      g || (n ? n() : []),
      g && e._ === 1 ? 64 : -2
    );
  } catch (g) {
    for (let v = Dn.length; v > d; v--) Ld();
    throw g;
  } finally {
    l && l._c && (l._d = !0);
  }
  return !a && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function Tv(e) {
  return e.some((t) => Vl(t) ? !(t.type === zt || t.type === W && !Tv(t.children)) : !0) ? e : null;
}
const jc = (e) => e ? Kv(e) ? vu(e) : jc(e.parent) : null, Al = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $t(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => jc(e.parent),
    $root: (e) => jc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $v(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ad(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => by.bind(e)
  })
), Ju = (e, t) => e !== tt && !e.__isScriptSetup && lt(e, t), Ly = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: l, type: d, appContext: c } = e;
    if (t[0] !== "$") {
      const y = l[t];
      if (y !== void 0)
        switch (y) {
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
        if (Ju(n, t))
          return l[t] = 1, n[t];
        if (a !== tt && lt(a, t))
          return l[t] = 2, a[t];
        if (lt(r, t))
          return l[t] = 3, r[t];
        if (i !== tt && lt(i, t))
          return l[t] = 4, i[t];
        Bc && (l[t] = 0);
      }
    }
    const g = Al[t];
    let v, m;
    if (g)
      return t === "$attrs" && Wt(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== tt && lt(i, t))
      return l[t] = 4, i[t];
    if (
      // global properties
      m = c.config.globalProperties, lt(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Ju(a, t) ? (a[t] = i, !0) : n !== tt && lt(n, t) ? (n[t] = i, !0) : lt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: l }
  }, d) {
    let c;
    return !!(i[d] || e !== tt && d[0] !== "$" && lt(e, d) || Ju(t, d) || lt(r, d) || lt(n, d) || lt(Al, d) || lt(a.config.globalProperties, d) || (c = l.__cssModules) && c[d]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : lt(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Py() {
  return Av().slots;
}
function Dy() {
  return Av().attrs;
}
function Av(e) {
  const t = Sa();
  return t.setupContext || (t.setupContext = Yv(t));
}
function ao(e) {
  return Ie(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Fy(e, t) {
  return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : $t({}, ao(e), ao(t));
}
let Bc = !0;
function My(e) {
  const t = $v(e), i = e.proxy, n = e.ctx;
  Bc = !1, t.beforeCreate && Xf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: l,
    watch: d,
    provide: c,
    inject: g,
    // lifecycle
    created: v,
    beforeMount: m,
    mounted: y,
    beforeUpdate: k,
    updated: T,
    activated: C,
    deactivated: $,
    beforeDestroy: N,
    beforeUnmount: R,
    destroyed: P,
    unmounted: I,
    render: ve,
    renderTracked: Q,
    renderTriggered: x,
    errorCaptured: H,
    serverPrefetch: K,
    // public API
    expose: Z,
    inheritAttrs: ae,
    // assets
    components: j,
    directives: q,
    filters: L
  } = t;
  if (g && Uy(g, n, null), l)
    for (const ne in l) {
      const Y = l[ne];
      Ue(Y) && (n[ne] = Y.bind(i));
    }
  if (a) {
    const ne = a.call(i, i);
    st(ne) && (e.data = /* @__PURE__ */ Nt(ne));
  }
  if (Bc = !0, r)
    for (const ne in r) {
      const Y = r[ne], pe = Ue(Y) ? Y.bind(i, i) : Ue(Y.get) ? Y.get.bind(i, i) : Di, Se = !Ue(Y) && Ue(Y.set) ? Y.set.bind(i) : Di, Le = z({
        get: pe,
        set: Se
      });
      Object.defineProperty(n, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Oe) => Le.value = Oe
      });
    }
  if (d)
    for (const ne in d)
      Ev(d[ne], n, i, ne);
  if (c) {
    const ne = Ue(c) ? c.call(i) : c;
    Reflect.ownKeys(ne).forEach((Y) => {
      Ii(Y, ne[Y]);
    });
  }
  v && Xf(v, e, "c");
  function J(ne, Y) {
    Ie(Y) ? Y.forEach((pe) => ne(pe.bind(i))) : Y && ne(Y.bind(i));
  }
  if (J(kv, m), J(xt, y), J(Sv, k), J($y, T), J(Ty, C), J(Ay, $), J(Ry, H), J(Ny, Q), J(Oy, x), J(Ti, R), J(ls, I), J(xy, K), Ie(Z))
    if (Z.length) {
      const ne = e.exposed || (e.exposed = {});
      Z.forEach((Y) => {
        Object.defineProperty(ne, Y, {
          get: () => i[Y],
          set: (pe) => i[Y] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ve && e.render === Di && (e.render = ve), ae != null && (e.inheritAttrs = ae), j && (e.components = j), q && (e.directives = q), K && _v(e);
}
function Uy(e, t, i = Di) {
  Ie(e) && (e = Hc(e));
  for (const n in e) {
    const a = e[n];
    let r;
    st(a) ? "default" in a ? r = Yt(
      a.from || n,
      a.default,
      !0
    ) : r = Yt(a.from || n) : r = Yt(a), /* @__PURE__ */ Jt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (l) => r.value = l
    }) : t[n] = r;
  }
}
function Xf(e, t, i) {
  Mi(
    Ie(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Ev(e, t, i, n) {
  let a = n.includes(".") ? pv(i, n) : () => i[n];
  if (vt(e)) {
    const r = t[e];
    Ue(r) && qe(a, r);
  } else if (Ue(e))
    qe(a, e.bind(i));
  else if (st(e))
    if (Ie(e))
      e.forEach((r) => Ev(r, t, i, n));
    else {
      const r = Ue(e.handler) ? e.handler.bind(i) : t[e.handler];
      Ue(r) && qe(a, r, e);
    }
}
function $v(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, d = r.get(t);
  let c;
  return d ? c = d : !a.length && !i && !n ? c = t : (c = {}, a.length && a.forEach(
    (g) => ro(c, g, l, !0)
  ), ro(c, t, l)), st(t) && r.set(t, c), c;
}
function ro(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && ro(e, r, i, !0), a && a.forEach(
    (l) => ro(e, l, i, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const d = zy[l] || i && i[l];
      e[l] = d ? d(e[l], t[l]) : t[l];
    }
  return e;
}
const zy = {
  data: Jf,
  props: Qf,
  emits: Qf,
  // objects
  methods: gl,
  computed: gl,
  // lifecycle
  beforeCreate: li,
  created: li,
  beforeMount: li,
  mounted: li,
  beforeUpdate: li,
  updated: li,
  beforeDestroy: li,
  beforeUnmount: li,
  destroyed: li,
  unmounted: li,
  activated: li,
  deactivated: li,
  errorCaptured: li,
  serverPrefetch: li,
  // assets
  components: gl,
  directives: gl,
  // watch
  watch: By,
  // provide / inject
  provide: Jf,
  inject: jy
};
function Jf(e, t) {
  return t ? e ? function() {
    return $t(
      Ue(e) ? e.call(this, this) : e,
      Ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jy(e, t) {
  return gl(Hc(e), Hc(t));
}
function Hc(e) {
  if (Ie(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function li(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gl(e, t) {
  return e ? $t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qf(e, t) {
  return e ? Ie(e) && Ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $t(
    /* @__PURE__ */ Object.create(null),
    ao(e),
    ao(t ?? {})
  ) : t;
}
function By(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = $t(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = li(e[n], t[n]);
  return i;
}
function xv() {
  return {
    app: null,
    config: {
      isNativeTag: Fh,
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
let Hy = 0;
function Vy(e, t) {
  return function(n, a = null) {
    Ue(n) || (n = $t({}, n)), a != null && !st(a) && (a = null);
    const r = xv(), l = /* @__PURE__ */ new WeakSet(), d = [];
    let c = !1;
    const g = r.app = {
      _uid: Hy++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: g1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...m) {
        return l.has(v) || (v && Ue(v.install) ? (l.add(v), v.install(g, ...m)) : Ue(v) && (l.add(v), v(g, ...m))), g;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), g;
      },
      component(v, m) {
        return m ? (r.components[v] = m, g) : r.components[v];
      },
      directive(v, m) {
        return m ? (r.directives[v] = m, g) : r.directives[v];
      },
      mount(v, m, y) {
        if (!c) {
          const k = g._ceVNode || de(n, a);
          return k.appContext = r, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(k, v, y), c = !0, g._container = v, v.__vue_app__ = g, vu(k.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        c && (Mi(
          d,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(v, m) {
        return r.provides[v] = m, g;
      },
      runWithContext(v) {
        const m = $r;
        $r = g;
        try {
          return v();
        } finally {
          $r = m;
        }
      }
    };
    return g;
  };
}
let $r = null;
function Ov(e, t, i = tt) {
  const n = Sa(), a = Xt(t), r = Vn(t), l = Nv(e, a), d = iy((c, g) => {
    let v, m = tt, y;
    return vy(() => {
      const k = e[a];
      Ut(v, k) && (v = k, g());
    }), {
      get() {
        return c(), i.get ? i.get(v) : v;
      },
      set(k) {
        const T = i.set ? i.set(k) : k;
        if (!Ut(T, v) && !(m !== tt && Ut(k, m)))
          return;
        const C = n.vnode.props, $ = !!(C && // check if parent has passed v-model
        (t in C || a in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${a}` in C || `onUpdate:${r}` in C));
        $ || (v = k, g()), n.emit(`update:${t}`, T), Ut(k, m) && (Ut(k, T) && !Ut(T, y) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && m !== tt && !Ut(T, v)) && g(), m = k, y = T;
      }
    };
  });
  return d[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? l || tt : d, done: !1 } : { done: !0 };
      }
    };
  }, d;
}
const Nv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Xt(t)}Modifiers`] || e[`${Vn(t)}Modifiers`];
function qy(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let a = i;
  const r = t.startsWith("update:"), l = r && Nv(n, t.slice(7));
  l && (l.trim && (a = i.map((v) => vt(v) ? v.trim() : v)), l.number && (a = a.map(au)));
  let d, c = n[d = Gu(t)] || // also try camelCase event handler (#2249)
  n[d = Gu(Xt(t))];
  !c && r && (c = n[d = Gu(Vn(t))]), c && Mi(
    c,
    e,
    6,
    a
  );
  const g = n[d + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Mi(
      g,
      e,
      6,
      a
    );
  }
}
const Gy = /* @__PURE__ */ new WeakMap();
function Rv(e, t, i = !1) {
  const n = i ? Gy : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let l = {}, d = !1;
  if (!Ue(e)) {
    const c = (g) => {
      const v = Rv(g, t, !0);
      v && (d = !0, $t(l, v));
    };
    !i && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !d ? (st(e) && n.set(e, null), null) : (Ie(r) ? r.forEach((c) => l[c] = null) : $t(l, r), st(e) && n.set(e, l), l);
}
function hu(e, t) {
  return !e || !eu(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), lt(e, t[0].toLowerCase() + t.slice(1)) || lt(e, Vn(t)) || lt(e, t));
}
function ep(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: l,
    attrs: d,
    emit: c,
    render: g,
    renderCache: v,
    props: m,
    data: y,
    setupState: k,
    ctx: T,
    inheritAttrs: C
  } = e, $ = to(e);
  let N, R;
  try {
    if (i.shapeFlag & 4) {
      const I = a || n, ve = I;
      N = ln(
        g.call(
          ve,
          I,
          v,
          m,
          k,
          y,
          T
        )
      ), R = d;
    } else {
      const I = t;
      N = ln(
        I.length > 1 ? I(
          m,
          { attrs: d, slots: l, emit: c }
        ) : I(
          m,
          null
        )
      ), R = t.props ? d : Ky(d);
    }
  } catch (I) {
    Dn.length = 0, ou(I, e, 1), N = de(zt);
  }
  let P = N;
  if (R && C !== !1) {
    const I = Object.keys(R), { shapeFlag: ve } = P;
    I.length && ve & 7 && (r && I.some(tu) && (R = Wy(
      R,
      r
    )), P = _a(P, R, !1, !0));
  }
  if (i.dirs && (P = _a(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const I = du(P.type) && io(P) || P;
    Bl(I, i.transition);
  }
  return N = P, to($), N;
}
const Ky = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || eu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Wy = (e, t) => {
  const i = {};
  for (const n in e)
    (!tu(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Yy(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: l, children: d, patchFlag: c } = t, g = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? tp(n, l, g) : !!l;
    if (c & 8) {
      const v = t.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        const y = v[m];
        if (Iv(l, n, y) && !hu(g, y))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : n === l ? !1 : n ? l ? tp(n, l, g) : !0 : !!l;
  return !1;
}
function tp(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Iv(t, e, r) && !hu(i, r))
      return !0;
  }
  return !1;
}
function Iv(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && st(n) && st(a) ? !Un(n, a) : n !== a;
}
function Zy({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const Lv = {}, Pv = () => Object.create(Lv), Dv = (e) => Object.getPrototypeOf(e) === Lv;
function Xy(e, t, i, n = !1) {
  const a = {}, r = Pv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fv(e, t, a, r);
  for (const l in e.propsOptions[0])
    l in a || (a[l] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Xm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Jy(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, d = /* @__PURE__ */ at(a), [c] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const v = e.vnode.dynamicProps;
      for (let m = 0; m < v.length; m++) {
        let y = v[m];
        if (hu(e.emitsOptions, y))
          continue;
        const k = t[y];
        if (c)
          if (lt(r, y))
            k !== r[y] && (r[y] = k, g = !0);
          else {
            const T = Xt(y);
            a[T] = Vc(
              c,
              d,
              T,
              k,
              e,
              !1
            );
          }
        else
          k !== r[y] && (r[y] = k, g = !0);
      }
    }
  } else {
    Fv(e, t, a, r) && (g = !0);
    let v;
    for (const m in d)
      (!t || // for camelCase
      !lt(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Vn(m)) === m || !lt(t, v))) && (c ? i && // for camelCase
      (i[m] !== void 0 || // for kebab-case
      i[v] !== void 0) && (a[m] = Vc(
        c,
        d,
        m,
        void 0,
        e,
        !0
      )) : delete a[m]);
    if (r !== d)
      for (const m in r)
        (!t || !lt(t, m)) && (delete r[m], g = !0);
  }
  g && Nn(e.attrs, "set", "");
}
function Fv(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let l = !1, d;
  if (t)
    for (let c in t) {
      if (kl(c))
        continue;
      const g = t[c];
      let v;
      a && lt(a, v = Xt(c)) ? !r || !r.includes(v) ? i[v] = g : (d || (d = {}))[v] = g : hu(e.emitsOptions, c) || (!(c in n) || g !== n[c]) && (n[c] = g, l = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ at(i), g = d || tt;
    for (let v = 0; v < r.length; v++) {
      const m = r[v];
      i[m] = Vc(
        a,
        c,
        m,
        g[m],
        e,
        !lt(g, m)
      );
    }
  }
  return l;
}
function Vc(e, t, i, n, a, r) {
  const l = e[i];
  if (l != null) {
    const d = lt(l, "default");
    if (d && n === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && Ue(c)) {
        const { propsDefaults: g } = a;
        if (i in g)
          n = g[i];
        else {
          const v = os(a);
          n = g[i] = c.call(
            null,
            t
          ), v();
        }
      } else
        n = c;
      a.ce && a.ce._setProp(i, n);
    }
    l[
      0
      /* shouldCast */
    ] && (r && !d ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Vn(i)) && (n = !0));
  }
  return n;
}
const Qy = /* @__PURE__ */ new WeakMap();
function Mv(e, t, i = !1) {
  const n = i ? Qy : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, l = {}, d = [];
  let c = !1;
  if (!Ue(e)) {
    const v = (m) => {
      c = !0;
      const [y, k] = Mv(m, t, !0);
      $t(l, y), k && d.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !c)
    return st(e) && n.set(e, Tr), Tr;
  if (Ie(r))
    for (let v = 0; v < r.length; v++) {
      const m = Xt(r[v]);
      ip(m) && (l[m] = tt);
    }
  else if (r)
    for (const v in r) {
      const m = Xt(v);
      if (ip(m)) {
        const y = r[v], k = l[m] = Ie(y) || Ue(y) ? { type: y } : $t({}, y), T = k.type;
        let C = !1, $ = !0;
        if (Ie(T))
          for (let N = 0; N < T.length; ++N) {
            const R = T[N], P = Ue(R) && R.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          C = Ue(T) && T.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = $, (C || lt(k, "default")) && d.push(m);
      }
    }
  const g = [l, d];
  return st(e) && n.set(e, g), g;
}
function ip(e) {
  return e[0] !== "$" && !kl(e);
}
const Nd = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Ie(e) ? e.map(ln) : [ln(e)], e1 = (e, t, i) => {
  if (t._n)
    return t;
  const n = we((...a) => Rd(t(...a)), i);
  return n._c = !1, n;
}, Uv = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Nd(a)) continue;
    const r = e[a];
    if (Ue(r))
      t[a] = e1(a, r, n);
    else if (r != null) {
      const l = Rd(r);
      t[a] = () => l;
    }
  }
}, zv = (e, t) => {
  const i = Rd(t);
  e.slots.default = () => i;
}, jv = (e, t, i) => {
  for (const n in t)
    (i || !Nd(n)) && (e[n] = t[n]);
}, t1 = (e, t, i) => {
  const n = e.slots = Pv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (jv(n, t, i), i && jh(n, "_", a, !0)) : Uv(t, n);
  } else t && zv(e, t);
}, i1 = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, l = tt;
  if (n.shapeFlag & 32) {
    const d = t._;
    d ? i && d === 1 ? r = !1 : jv(a, t, i) : (r = !t.$stable, Uv(t, a)), l = t;
  } else t && (zv(e, t), l = { default: 1 });
  if (r)
    for (const d in a)
      !Nd(d) && l[d] == null && delete a[d];
}, si = s1;
function n1(e) {
  return a1(e);
}
function a1(e, t) {
  const i = ru();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: l,
    createText: d,
    createComment: c,
    setText: g,
    setElementText: v,
    parentNode: m,
    nextSibling: y,
    setScopeId: k = Di,
    insertStaticContent: T
  } = e, C = (S, O, D, B = null, U = null, X = null, te = void 0, le = null, fe = !!O.dynamicChildren) => {
    if (S === O)
      return;
    S && !Ya(S, O) && (B = Re(S), Oe(S, U, X, !0), S = null), O.patchFlag === -2 && (fe = !1, O.dynamicChildren = null);
    const { type: se, ref: $e, shapeFlag: _e } = O;
    switch (se) {
      case ss:
        $(S, O, D, B);
        break;
      case zt:
        N(S, O, D, B);
        break;
      case Ws:
        S == null && R(O, D, B, te);
        break;
      case W:
        j(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          le,
          fe
        );
        break;
      default:
        _e & 1 ? ve(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          le,
          fe
        ) : _e & 6 ? q(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          le,
          fe
        ) : (_e & 64 || _e & 128) && se.process(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          le,
          fe,
          ut
        );
    }
    $e != null && U ? Tl($e, S && S.ref, X, O || S, !O) : $e == null && S && S.ref != null && Tl(S.ref, null, X, S, !0);
  }, $ = (S, O, D, B) => {
    if (S == null)
      n(
        O.el = d(O.children),
        D,
        B
      );
    else {
      const U = O.el = S.el;
      O.children !== S.children && g(U, O.children);
    }
  }, N = (S, O, D, B) => {
    S == null ? n(
      O.el = c(O.children || ""),
      D,
      B
    ) : O.el = S.el;
  }, R = (S, O, D, B) => {
    [S.el, S.anchor] = T(
      S.children,
      O,
      D,
      B,
      S.el,
      S.anchor
    );
  }, P = ({ el: S, anchor: O }, D, B) => {
    let U;
    for (; S && S !== O; )
      U = y(S), n(S, D, B), S = U;
    n(O, D, B);
  }, I = ({ el: S, anchor: O }) => {
    let D;
    for (; S && S !== O; )
      D = y(S), a(S), S = D;
    a(O);
  }, ve = (S, O, D, B, U, X, te, le, fe) => {
    if (O.type === "svg" ? te = "svg" : O.type === "math" && (te = "mathml"), S == null)
      Q(
        O,
        D,
        B,
        U,
        X,
        te,
        le,
        fe
      );
    else {
      const se = S.el && S.el._isVueCE ? S.el : null;
      try {
        se && se._beginPatch(), K(
          S,
          O,
          U,
          X,
          te,
          le,
          fe
        );
      } finally {
        se && se._endPatch();
      }
    }
  }, Q = (S, O, D, B, U, X, te, le) => {
    let fe, se;
    const { props: $e, shapeFlag: _e, transition: Ce, dirs: xe } = S;
    if (fe = S.el = l(
      S.type,
      X,
      $e && $e.is,
      $e
    ), _e & 8 ? v(fe, S.children) : _e & 16 && H(
      S.children,
      fe,
      null,
      B,
      U,
      Qu(S, X),
      te,
      le
    ), xe && za(S, null, B, "created"), x(fe, S, S.scopeId, te, B), $e) {
      for (const We in $e)
        We !== "value" && !kl(We) && r(fe, We, null, $e[We], X, B);
      "value" in $e && r(fe, "value", null, $e.value, X), (se = $e.onVnodeBeforeMount) && en(se, B, S);
    }
    xe && za(S, null, B, "beforeMount");
    const He = r1(U, Ce);
    He && Ce.beforeEnter(fe), n(fe, O, D), ((se = $e && $e.onVnodeMounted) || He || xe) && si(() => {
      se && en(se, B, S), He && Ce.enter(fe), xe && za(S, null, B, "mounted");
    }, U);
  }, x = (S, O, D, B, U) => {
    if (D && k(S, D), B)
      for (let X = 0; X < B.length; X++)
        k(S, B[X]);
    if (U) {
      let X = U.subTree;
      if (O === X || Vv(X.type) && (X.ssContent === O || X.ssFallback === O)) {
        const te = U.vnode;
        x(
          S,
          te,
          te.scopeId,
          te.slotScopeIds,
          U.parent
        );
      }
    }
  }, H = (S, O, D, B, U, X, te, le, fe = 0) => {
    for (let se = fe; se < S.length; se++) {
      const $e = S[se] = le ? On(S[se]) : ln(S[se]);
      C(
        null,
        $e,
        O,
        D,
        B,
        U,
        X,
        te,
        le
      );
    }
  }, K = (S, O, D, B, U, X, te) => {
    const le = O.el = S.el;
    let { patchFlag: fe, dynamicChildren: se, dirs: $e } = O;
    fe |= S.patchFlag & 16;
    const _e = S.props || tt, Ce = O.props || tt;
    let xe;
    if (D && ja(D, !1), (xe = Ce.onVnodeBeforeUpdate) && en(xe, D, O, S), $e && za(O, S, D, "beforeUpdate"), D && ja(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    se && (!S.dynamicChildren || S.dynamicChildren.length !== se.length) && (fe = 0, te = !1, se = null), (_e.innerHTML && Ce.innerHTML == null || _e.textContent && Ce.textContent == null) && v(le, ""), se ? Z(
      S.dynamicChildren,
      se,
      le,
      D,
      B,
      Qu(O, U),
      X
    ) : te || Y(
      S,
      O,
      le,
      null,
      D,
      B,
      Qu(O, U),
      X,
      !1
    ), fe > 0) {
      if (fe & 16)
        ae(le, _e, Ce, D, U);
      else if (fe & 2 && _e.class !== Ce.class && r(le, "class", null, Ce.class, U), fe & 4 && r(le, "style", _e.style, Ce.style, U), fe & 8) {
        const He = O.dynamicProps;
        for (let We = 0; We < He.length; We++) {
          const Ve = He[We], it = _e[Ve], ct = Ce[Ve];
          (ct !== it || Ve === "value") && r(le, Ve, it, ct, U, D);
        }
      }
      fe & 1 && S.children !== O.children && v(le, O.children);
    } else !te && se == null && ae(le, _e, Ce, D, U);
    ((xe = Ce.onVnodeUpdated) || $e) && si(() => {
      xe && en(xe, D, O, S), $e && za(O, S, D, "updated");
    }, B);
  }, Z = (S, O, D, B, U, X, te) => {
    for (let le = 0; le < O.length; le++) {
      const fe = S[le], se = O[le], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        fe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (fe.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ya(fe, se) || // - In the case of a component, it could contain anything.
        fe.shapeFlag & 198) ? m(fe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      C(
        fe,
        se,
        $e,
        null,
        B,
        U,
        X,
        te,
        !0
      );
    }
  }, ae = (S, O, D, B, U) => {
    if (O !== D) {
      if (O !== tt)
        for (const X in O)
          !kl(X) && !(X in D) && r(
            S,
            X,
            O[X],
            null,
            U,
            B
          );
      for (const X in D) {
        if (kl(X)) continue;
        const te = D[X], le = O[X];
        te !== le && X !== "value" && r(S, X, le, te, U, B);
      }
      "value" in D && r(S, "value", O.value, D.value, U);
    }
  }, j = (S, O, D, B, U, X, te, le, fe) => {
    const se = O.el = S ? S.el : d(""), $e = O.anchor = S ? S.anchor : d("");
    let { patchFlag: _e, dynamicChildren: Ce, slotScopeIds: xe } = O;
    xe && (le = le ? le.concat(xe) : xe), S == null ? (n(se, D, B), n($e, D, B), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      D,
      $e,
      U,
      X,
      te,
      le,
      fe
    )) : _e > 0 && _e & 64 && Ce && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === Ce.length ? (Z(
      S.dynamicChildren,
      Ce,
      D,
      U,
      X,
      te,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || U && O === U.subTree) && Id(
      S,
      O,
      !0
      /* shallow */
    )) : Y(
      S,
      O,
      D,
      $e,
      U,
      X,
      te,
      le,
      fe
    );
  }, q = (S, O, D, B, U, X, te, le, fe) => {
    O.slotScopeIds = le, S == null ? O.shapeFlag & 512 ? U.ctx.activate(
      O,
      D,
      B,
      te,
      fe
    ) : L(
      O,
      D,
      B,
      U,
      X,
      te,
      fe
    ) : V(S, O, fe);
  }, L = (S, O, D, B, U, X, te) => {
    const le = S.component = d1(
      S,
      B,
      U
    );
    if (fu(S) && (le.ctx.renderer = ut), f1(le, !1, te), le.asyncDep) {
      if (U && U.registerDep(le, J, te), !S.el) {
        const fe = le.subTree = de(zt);
        N(null, fe, O, D), S.placeholder = fe.el;
      }
    } else
      J(
        le,
        S,
        O,
        D,
        U,
        X,
        te
      );
  }, V = (S, O, D) => {
    const B = O.component = S.component;
    if (Yy(S, O, D))
      if (B.asyncDep && !B.asyncResolved) {
        ne(B, O, D);
        return;
      } else
        B.next = O, B.update();
    else
      O.el = S.el, B.vnode = O;
  }, J = (S, O, D, B, U, X, te) => {
    const le = () => {
      if (S.isMounted) {
        let { next: _e, bu: Ce, u: xe, parent: He, vnode: We } = S;
        {
          const bt = Bv(S);
          if (bt) {
            _e && (_e.el = We.el, ne(S, _e, te)), bt.asyncDep.then(() => {
              si(() => {
                S.isUnmounted || se();
              }, U);
            });
            return;
          }
        }
        let Ve = _e, it;
        ja(S, !1), _e ? (_e.el = We.el, ne(S, _e, te)) : _e = We, Ce && Ks(Ce), (it = _e.props && _e.props.onVnodeBeforeUpdate) && en(it, He, _e, We), ja(S, !0);
        const ct = ep(S), _t = S.subTree;
        S.subTree = ct, C(
          _t,
          ct,
          // parent may have changed if it's in a teleport
          m(_t.el),
          // anchor may have changed if it's in a fragment
          Re(_t),
          S,
          U,
          X
        ), _e.el = ct.el, Ve === null && Zy(S, ct.el), xe && si(xe, U), (it = _e.props && _e.props.onVnodeUpdated) && si(
          () => en(it, He, _e, We),
          U
        );
      } else {
        let _e;
        const { el: Ce, props: xe } = O, { bm: He, m: We, parent: Ve, root: it, type: ct } = S, _t = Er(O);
        ja(S, !1), He && Ks(He), !_t && (_e = xe && xe.onVnodeBeforeMount) && en(_e, Ve, O), ja(S, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            ct,
            S.parent ? S.parent.type : void 0
          );
          const bt = S.subTree = ep(S);
          C(
            null,
            bt,
            D,
            B,
            S,
            U,
            X
          ), O.el = bt.el;
        }
        if (We && si(We, U), !_t && (_e = xe && xe.onVnodeMounted)) {
          const bt = O;
          si(
            () => en(_e, Ve, bt),
            U
          );
        }
        (O.shapeFlag & 256 || Ve && Er(Ve.vnode) && Ve.vnode.shapeFlag & 256) && S.a && si(S.a, U), S.isMounted = !0, O = D = B = null;
      }
    };
    S.scope.on();
    const fe = S.effect = new qh(le);
    S.scope.off();
    const se = S.update = fe.run.bind(fe), $e = S.job = fe.runIfDirty.bind(fe);
    $e.i = S, $e.id = S.uid, fe.scheduler = () => Ad($e), ja(S, !0), se();
  }, ne = (S, O, D) => {
    O.component = S;
    const B = S.vnode.props;
    S.vnode = O, S.next = null, Jy(S, O.props, B, D), i1(S, O.children, D), zn(), Vf(S), jn();
  }, Y = (S, O, D, B, U, X, te, le, fe = !1) => {
    const se = S && S.children, $e = S ? S.shapeFlag : 0, _e = O.children, { patchFlag: Ce, shapeFlag: xe } = O;
    if (Ce > 0) {
      if (Ce & 128) {
        Se(
          se,
          _e,
          D,
          B,
          U,
          X,
          te,
          le,
          fe
        );
        return;
      } else if (Ce & 256) {
        pe(
          se,
          _e,
          D,
          B,
          U,
          X,
          te,
          le,
          fe
        );
        return;
      }
    }
    xe & 8 ? ($e & 16 && ye(se, U, X), _e !== se && v(D, _e)) : $e & 16 ? xe & 16 ? Se(
      se,
      _e,
      D,
      B,
      U,
      X,
      te,
      le,
      fe
    ) : ye(se, U, X, !0) : ($e & 8 && v(D, ""), xe & 16 && H(
      _e,
      D,
      B,
      U,
      X,
      te,
      le,
      fe
    ));
  }, pe = (S, O, D, B, U, X, te, le, fe) => {
    S = S || Tr, O = O || Tr;
    const se = S.length, $e = O.length, _e = Math.min(se, $e);
    let Ce;
    for (Ce = 0; Ce < _e; Ce++) {
      const xe = O[Ce] = fe ? On(O[Ce]) : ln(O[Ce]);
      C(
        S[Ce],
        xe,
        D,
        null,
        U,
        X,
        te,
        le,
        fe
      );
    }
    se > $e ? ye(
      S,
      U,
      X,
      !0,
      !1,
      _e
    ) : H(
      O,
      D,
      B,
      U,
      X,
      te,
      le,
      fe,
      _e
    );
  }, Se = (S, O, D, B, U, X, te, le, fe) => {
    let se = 0;
    const $e = O.length;
    let _e = S.length - 1, Ce = $e - 1;
    for (; se <= _e && se <= Ce; ) {
      const xe = S[se], He = O[se] = fe ? On(O[se]) : ln(O[se]);
      if (Ya(xe, He))
        C(
          xe,
          He,
          D,
          null,
          U,
          X,
          te,
          le,
          fe
        );
      else
        break;
      se++;
    }
    for (; se <= _e && se <= Ce; ) {
      const xe = S[_e], He = O[Ce] = fe ? On(O[Ce]) : ln(O[Ce]);
      if (Ya(xe, He))
        C(
          xe,
          He,
          D,
          null,
          U,
          X,
          te,
          le,
          fe
        );
      else
        break;
      _e--, Ce--;
    }
    if (se > _e) {
      if (se <= Ce) {
        const xe = Ce + 1, He = xe < $e ? O[xe].el : B;
        for (; se <= Ce; )
          C(
            null,
            O[se] = fe ? On(O[se]) : ln(O[se]),
            D,
            He,
            U,
            X,
            te,
            le,
            fe
          ), se++;
      }
    } else if (se > Ce)
      for (; se <= _e; )
        Oe(S[se], U, X, !0), se++;
    else {
      const xe = se, He = se, We = /* @__PURE__ */ new Map();
      for (se = He; se <= Ce; se++) {
        const kt = O[se] = fe ? On(O[se]) : ln(O[se]);
        kt.key != null && We.set(kt.key, se);
      }
      let Ve, it = 0;
      const ct = Ce - He + 1;
      let _t = !1, bt = 0;
      const ei = new Array(ct);
      for (se = 0; se < ct; se++) ei[se] = 0;
      for (se = xe; se <= _e; se++) {
        const kt = S[se];
        if (it >= ct) {
          Oe(kt, U, X, !0);
          continue;
        }
        let Ot;
        if (kt.key != null)
          Ot = We.get(kt.key);
        else
          for (Ve = He; Ve <= Ce; Ve++)
            if (ei[Ve - He] === 0 && Ya(kt, O[Ve])) {
              Ot = Ve;
              break;
            }
        Ot === void 0 ? Oe(kt, U, X, !0) : (ei[Ot - He] = se + 1, Ot >= bt ? bt = Ot : _t = !0, C(
          kt,
          O[Ot],
          D,
          null,
          U,
          X,
          te,
          le,
          fe
        ), it++);
      }
      const hi = _t ? l1(ei) : Tr;
      for (Ve = hi.length - 1, se = ct - 1; se >= 0; se--) {
        const kt = He + se, Ot = O[kt], Ui = O[kt + 1], Vt = kt + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ui.el || Hv(Ui)
        ) : B;
        ei[se] === 0 ? C(
          null,
          Ot,
          D,
          Vt,
          U,
          X,
          te,
          le,
          fe
        ) : _t && (Ve < 0 || se !== hi[Ve] ? Le(Ot, D, Vt, 2) : Ve--);
      }
    }
  }, Le = (S, O, D, B, U = null) => {
    const { el: X, type: te, transition: le, children: fe, shapeFlag: se } = S;
    if (se & 6) {
      Le(S.component.subTree, O, D, B);
      return;
    }
    if (se & 128) {
      S.suspense.move(O, D, B);
      return;
    }
    if (se & 64) {
      te.move(S, O, D, ut);
      return;
    }
    if (te === W) {
      n(X, O, D);
      for (let _e = 0; _e < fe.length; _e++)
        Le(fe[_e], O, D, B);
      n(S.anchor, O, D);
      return;
    }
    if (te === Ws) {
      P(S, O, D);
      return;
    }
    if (B !== 2 && se & 1 && le)
      if (B === 0)
        le.persisted && !X[Li] ? n(X, O, D) : (le.beforeEnter(X), n(X, O, D), si(() => le.enter(X), U));
      else {
        const { leave: _e, delayLeave: Ce, afterLeave: xe } = le, He = () => {
          S.ctx.isUnmounted ? a(X) : n(X, O, D);
        }, We = () => {
          const Ve = X._isLeaving || !!X[Li];
          X._isLeaving && X[Li](
            !0
            /* cancelled */
          ), le.persisted && !Ve ? He() : _e(X, () => {
            He(), xe && xe();
          });
        };
        Ce ? Ce(X, He, We) : We();
      }
    else
      n(X, O, D);
  }, Oe = (S, O, D, B = !1, U = !1) => {
    const {
      type: X,
      props: te,
      ref: le,
      children: fe,
      dynamicChildren: se,
      shapeFlag: $e,
      patchFlag: _e,
      dirs: Ce,
      cacheIndex: xe,
      memo: He
    } = S;
    if (_e === -2 && (U = !1), le != null && (zn(), Tl(le, null, D, S, !0), jn()), xe != null && (O.renderCache[xe] = void 0), $e & 256) {
      O.ctx.deactivate(S);
      return;
    }
    const We = $e & 1 && Ce, Ve = !Er(S);
    let it;
    if (Ve && (it = te && te.onVnodeBeforeUnmount) && en(it, O, S), $e & 6)
      pt(S.component, D, B);
    else {
      if ($e & 128) {
        S.suspense.unmount(D, B);
        return;
      }
      We && za(S, null, O, "beforeUnmount"), $e & 64 ? S.type.remove(
        S,
        O,
        D,
        ut,
        B
      ) : se && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !se.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== W || _e > 0 && _e & 64) ? ye(
        se,
        O,
        D,
        !1,
        !0
      ) : (X === W && _e & 384 || !U && $e & 16) && ye(fe, O, D), B && Me(S);
    }
    const ct = He != null && xe == null;
    (Ve && (it = te && te.onVnodeUnmounted) || We || ct) && si(() => {
      it && en(it, O, S), We && za(S, null, O, "unmounted"), ct && (S.el = null);
    }, D);
  }, Me = (S) => {
    const { type: O, el: D, anchor: B, transition: U } = S;
    if (O === W) {
      Xe(D, B);
      return;
    }
    if (O === Ws) {
      I(S);
      return;
    }
    const X = () => {
      a(D), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (S.shapeFlag & 1 && U && !U.persisted) {
      const { leave: te, delayLeave: le } = U, fe = () => te(D, X);
      le ? le(S.el, X, fe) : fe();
    } else
      X();
  }, Xe = (S, O) => {
    let D;
    for (; S !== O; )
      D = y(S), a(S), S = D;
    a(O);
  }, pt = (S, O, D) => {
    const { bum: B, scope: U, job: X, subTree: te, um: le, m: fe, a: se } = S;
    np(fe), np(se), B && Ks(B), U.stop(), X && (X.flags |= 8, Oe(te, S, O, D)), le && si(le, O), si(() => {
      S.isUnmounted = !0;
    }, O);
  }, ye = (S, O, D, B = !1, U = !1, X = 0) => {
    for (let te = X; te < S.length; te++)
      Oe(S[te], O, D, B, U);
  }, Re = (S) => {
    if (S.shapeFlag & 6)
      return Re(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const O = y(S.anchor || S.el), D = O && O[hv];
    return D ? y(D) : O;
  };
  let me = !1;
  const De = (S, O, D) => {
    let B;
    S == null ? O._vnode && (Oe(O._vnode, null, null, !0), B = O._vnode.component) : C(
      O._vnode || null,
      S,
      O,
      null,
      null,
      null,
      D
    ), O._vnode = S, me || (me = !0, Vf(B), dv(), me = !1);
  }, ut = {
    p: C,
    um: Oe,
    m: Le,
    r: Me,
    mt: L,
    mc: H,
    pc: Y,
    pbc: Z,
    n: Re,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: Vy(De)
  };
}
function Qu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function ja({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function r1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Ie(n) && Ie(a))
    for (let r = 0; r < n.length; r++) {
      const l = n[r];
      let d = a[r];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[r] = On(a[r]), d.el = l.el), !i && d.patchFlag !== -2 && Id(l, d)), d.type === ss && (d.patchFlag === -1 && (d = a[r] = On(d)), d.el = l.el), d.type === zt && !d.el && (d.el = l.el);
    }
}
function l1(e) {
  const t = e.slice(), i = [0];
  let n, a, r, l, d;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const g = e[n];
    if (g !== 0) {
      if (a = i[i.length - 1], e[a] < g) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, l = i.length - 1; r < l; )
        d = r + l >> 1, e[i[d]] < g ? r = d + 1 : l = d;
      g < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, l = i[r - 1]; r-- > 0; )
    i[r] = l, l = t[l];
  return i;
}
function Bv(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bv(t);
}
function np(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Hv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Hv(t.subTree) : null;
}
const Vv = (e) => e.__isSuspense;
function s1(e, t) {
  t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : cv(e);
}
const W = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), Ws = /* @__PURE__ */ Symbol.for("v-stc"), Dn = [];
let Si = null;
function p(e = !1) {
  Dn.push(Si = e ? null : []);
}
function Ld() {
  Dn.pop(), Si = Dn[Dn.length - 1] || null;
}
let Hl = 1;
function lo(e, t = !1) {
  Hl += e, e < 0 && Si && t && (Si.hasOnce = !0);
}
function qv(e) {
  return e.dynamicChildren = Hl > 0 ? Si || Tr : null, Ld(), Hl > 0 && Si && Si.push(e), e;
}
function h(e, t, i, n, a, r) {
  return qv(
    s(
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
function Pe(e, t, i, n, a) {
  return qv(
    de(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function Vl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ya(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gv = ({ key: e }) => e ?? null, Ys = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ Jt(e) || Ue(e) ? { i: jt, r: e, k: t, f: !!i } : e : null);
function s(e, t = null, i = null, n = 0, a = null, r = e === W ? 0 : 1, l = !1, d = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gv(t),
    ref: t && Ys(t),
    scopeId: uu,
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
    ctx: jt
  };
  return d ? (so(c, i), r & 128 && e.normalize(c)) : i && (c.shapeFlag |= vt(i) ? 8 : 16), Hl > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Si && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Si.push(c), c;
}
const de = o1;
function o1(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Cv) && (e = zt), Vl(e)) {
    const d = _a(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && so(d, i), Hl > 0 && !r && Si && (d.shapeFlag & 6 ? Si[Si.indexOf(e)] = d : Si.push(d)), d.patchFlag = -2, d;
  }
  if (b1(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: d, style: c } = t;
    d && !vt(d) && (t.class = Te(d)), st(c) && (/* @__PURE__ */ Td(c) && !Ie(c) && (c = $t({}, c)), t.style = pi(c));
  }
  const l = vt(e) ? 1 : Vv(e) ? 128 : du(e) ? 64 : st(e) ? 4 : Ue(e) ? 2 : 0;
  return s(
    e,
    t,
    i,
    n,
    a,
    l,
    r,
    !0
  );
}
function ql(e) {
  return e ? /* @__PURE__ */ Td(e) || Dv(e) ? $t({}, e) : e : null;
}
function _a(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: l, children: d, transition: c } = e, g = t ? Qt(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Gv(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Ie(r) ? r.concat(Ys(t)) : [r, Ys(t)] : Ys(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== W ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && _a(e.ssContent),
    ssFallback: e.ssFallback && _a(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Bl(
    v,
    c.clone(v)
  ), v;
}
function ie(e = " ", t = 0) {
  return de(ss, null, e, t);
}
function E(e = "", t = !1) {
  return t ? (p(), Pe(zt, null, e)) : de(zt, null, e);
}
function ln(e) {
  return e == null || typeof e == "boolean" ? de(zt) : Ie(e) ? de(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vl(e) ? On(e) : de(ss, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _a(e);
}
function so(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ie(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), so(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Dv(t) ? t._ctx = jt : a === 3 && jt && (jt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ue(t)) {
    if (n & 65) {
      so(e, { default: t });
      return;
    }
    t = { default: t, _ctx: jt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ie(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Qt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Te([t.class, n.class]));
      else if (a === "style")
        t.style = pi([t.style, n.style]);
      else if (eu(a)) {
        const r = t[a], l = n[a];
        l && r !== l && !(Ie(r) && r.includes(l)) ? t[a] = r ? [].concat(r, l) : l : l == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !tu(a) && (t[a] = l);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function en(e, t, i, n = null) {
  Mi(e, t, 7, [
    i,
    n
  ]);
}
const u1 = xv();
let c1 = 0;
function d1(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || u1, r = {
    uid: c1++,
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
    scope: new Rm(
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
    propsOptions: Mv(n, a),
    emitsOptions: Rv(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qy.bind(null, r), e.ce && e.ce(r), r;
}
let Zt = null;
const Sa = () => Zt || jt;
let oo, Gl;
{
  const e = ru(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((l) => l(r)) : a[0](r);
    };
  };
  oo = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Zt = i
  ), Gl = t(
    "__VUE_SSR_SETTERS__",
    (i) => Kl = i
  );
}
const os = (e) => {
  const t = Zt;
  return oo(e), e.scope.on(), () => {
    e.scope.off(), oo(t);
  };
}, ap = () => {
  Zt && Zt.scope.off(), oo(null);
};
function Kv(e) {
  return e.vnode.shapeFlag & 4;
}
let Kl = !1;
function f1(e, t = !1, i = !1) {
  t && Gl(t);
  const { props: n, children: a } = e.vnode, r = Kv(e);
  Xy(e, n, r, t), t1(e, a, i || t);
  const l = r ? p1(e, t) : void 0;
  return t && Gl(!1), l;
}
function p1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ly);
  const { setup: n } = i;
  if (n) {
    zn();
    const a = e.setupContext = n.length > 1 ? Yv(e) : null, r = os(e), l = rs(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Mh(l);
    if (jn(), r(), (d || e.sp) && !Er(e) && _v(e), d) {
      if (l.then(ap, ap), t)
        return l.then((c) => {
          Gl(!0);
          try {
            rp(e, c, t);
          } finally {
            Gl(!1);
          }
        }).catch((c) => {
          ou(c, e, 0);
        });
      e.asyncDep = l;
    } else
      rp(e, l);
  } else
    Wv(e);
}
function rp(e, t, i) {
  Ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : st(t) && (e.setupState = sv(t)), Wv(e);
}
function Wv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Di);
  {
    const a = os(e);
    zn();
    try {
      My(e);
    } finally {
      jn(), a();
    }
  }
}
const h1 = {
  get(e, t) {
    return Wt(e, "get", ""), e[t];
  }
};
function Yv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, h1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sv(Jm(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in Al)
        return Al[i](e);
    },
    has(t, i) {
      return i in t || i in Al;
    }
  })) : e.proxy;
}
function v1(e, t = !0) {
  return Ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function b1(e) {
  return Ue(e) && "__vccOpts" in e;
}
const z = (e, t) => /* @__PURE__ */ ay(e, t, Kl);
function ci(e, t, i) {
  try {
    lo(-1);
    const n = arguments.length;
    return n === 2 ? st(t) && !Ie(t) ? Vl(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(i) && (i = [i]), de(e, t, i));
  } finally {
    lo(1);
  }
}
const g1 = "3.5.42", m1 = Di;
let qc;
const lp = typeof window < "u" && window.trustedTypes;
if (lp)
  try {
    qc = /* @__PURE__ */ lp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zv = qc ? (e) => qc.createHTML(e) : (e) => e, y1 = "http://www.w3.org/2000/svg", _1 = "http://www.w3.org/1998/Math/MathML", xn = typeof document < "u" ? document : null, sp = xn && /* @__PURE__ */ xn.createElement("template"), w1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? xn.createElementNS(y1, e) : t === "mathml" ? xn.createElementNS(_1, e) : i ? xn.createElement(e, { is: i }) : xn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => xn.createTextNode(e),
  createComment: (e) => xn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, a, r) {
    const l = i ? i.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      sp.innerHTML = Zv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = sp.content;
      if (n === "svg" || n === "mathml") {
        const c = d.firstChild;
        for (; c.firstChild; )
          d.appendChild(c.firstChild);
        d.removeChild(c);
      }
      t.insertBefore(d, i);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, ra = "transition", sl = "animation", Wl = /* @__PURE__ */ Symbol("_vtc"), Xv = {
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
}, k1 = /* @__PURE__ */ $t(
  {},
  vv,
  Xv
), S1 = (e) => (e.displayName = "Transition", e.props = k1, e), C1 = /* @__PURE__ */ S1(
  (e, { slots: t }) => ci(ky, T1(e), t)
), Ba = (e, t = []) => {
  Ie(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, op = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function T1(e) {
  const t = {};
  for (const j in e)
    j in Xv || (t[j] = e[j]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: n,
    duration: a,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: l = `${i}-enter-active`,
    enterToClass: d = `${i}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: g = l,
    appearToClass: v = d,
    leaveFromClass: m = `${i}-leave-from`,
    leaveActiveClass: y = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, T = A1(a), C = T && T[0], $ = T && T[1], {
    onBeforeEnter: N,
    onEnter: R,
    onEnterCancelled: P,
    onLeave: I,
    onLeaveCancelled: ve,
    onBeforeAppear: Q = N,
    onAppear: x = R,
    onAppearCancelled: H = P
  } = t, K = (j, q, L, V) => {
    j._enterCancelled = V, Ha(j, q ? v : d), Ha(j, q ? g : l), L && L();
  }, Z = (j, q) => {
    j._isLeaving = !1, Ha(j, m), Ha(j, k), Ha(j, y), q && q();
  }, ae = (j) => (q, L) => {
    const V = j ? x : R, J = () => K(q, j, L);
    Ba(V, [q, J]), up(() => {
      Ha(q, j ? c : r), kn(q, j ? v : d), op(V) || cp(q, n, C, J);
    });
  };
  return $t(t, {
    onBeforeEnter(j) {
      Ba(N, [j]), kn(j, r), kn(j, l);
    },
    onBeforeAppear(j) {
      Ba(Q, [j]), kn(j, c), kn(j, g);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(j, q) {
      j._isLeaving = !0;
      const L = () => Z(j, q);
      kn(j, m), j._enterCancelled ? (kn(j, y), pp(j)) : (pp(j), kn(j, y)), up(() => {
        j._isLeaving && (Ha(j, m), kn(j, k), op(I) || cp(j, n, $, L));
      }), Ba(I, [j, L]);
    },
    onEnterCancelled(j) {
      K(j, !1, void 0, !0), Ba(P, [j]);
    },
    onAppearCancelled(j) {
      K(j, !0, void 0, !0), Ba(H, [j]);
    },
    onLeaveCancelled(j) {
      Z(j), Ba(ve, [j]);
    }
  });
}
function A1(e) {
  if (e == null)
    return null;
  if (st(e))
    return [ec(e.enter), ec(e.leave)];
  {
    const t = ec(e);
    return [t, t];
  }
}
function ec(e) {
  return Sm(e);
}
function kn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Wl] || (e[Wl] = /* @__PURE__ */ new Set())).add(t);
}
function Ha(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Wl];
  i && (i.delete(t), i.size || (e[Wl] = void 0));
}
function up(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let E1 = 0;
function cp(e, t, i, n) {
  const a = e._endId = ++E1, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: l, timeout: d, propCount: c } = $1(e, t);
  if (!l)
    return n();
  const g = l + "end";
  let v = 0;
  const m = () => {
    e.removeEventListener(g, y), r();
  }, y = (k) => {
    k.target === e && ++v >= c && m();
  };
  setTimeout(() => {
    v < c && m();
  }, d + 1), e.addEventListener(g, y);
}
function $1(e, t) {
  const i = window.getComputedStyle(e), n = (T) => (i[T] || "").split(", "), a = n(`${ra}Delay`), r = n(`${ra}Duration`), l = dp(a, r), d = n(`${sl}Delay`), c = n(`${sl}Duration`), g = dp(d, c);
  let v = null, m = 0, y = 0;
  t === ra ? l > 0 && (v = ra, m = l, y = r.length) : t === sl ? g > 0 && (v = sl, m = g, y = c.length) : (m = Math.max(l, g), v = m > 0 ? l > g ? ra : sl : null, y = v ? v === ra ? r.length : c.length : 0);
  const k = v === ra && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ra}Property`).toString()
  );
  return {
    type: v,
    timeout: m,
    propCount: y,
    hasTransform: k
  };
}
function dp(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => fp(i) + fp(e[n])));
}
function fp(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function pp(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function x1(e, t, i) {
  const n = e[Wl];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const uo = /* @__PURE__ */ Symbol("_vod"), Jv = /* @__PURE__ */ Symbol("_vsh"), tr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[uo] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : ol(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), ol(e, !0), n.enter(e)) : n.leave(e, () => {
      ol(e, !1);
    }) : ol(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ol(e, t);
  }
};
function ol(e, t) {
  e.style.display = t ? e[uo] : "none", e[Jv] = !t;
}
const Qv = /* @__PURE__ */ Symbol("");
function O1(e) {
  const t = Sa();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => co(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? co(t.ce, a) : Gc(t.subTree, a), i(a);
  };
  Sv(() => {
    cv(n);
  }), xt(() => {
    qe(n, Di, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ls(() => a.disconnect());
  });
}
function Gc(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      Gc(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    co(e.el, t);
  else if (e.type === W)
    e.children.forEach((i) => Gc(i, t));
  else if (e.type === Ws) {
    let { el: i, anchor: n } = e;
    for (; i && (co(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function co(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Nm(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[Qv] = n;
  }
}
const N1 = /(?:^|;)\s*display\s*:/;
function R1(e, t, i) {
  const n = e.style, a = vt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (vt(t))
        for (const l of t.split(";")) {
          const d = l.slice(0, l.indexOf(":")).trim();
          i[d] == null && ml(n, d, "");
        }
      else
        for (const l in t)
          i[l] == null && ml(n, l, "");
    for (const l in i) {
      l === "display" && (r = !0);
      const d = i[l];
      d != null ? L1(
        e,
        l,
        !vt(t) && t ? t[l] : void 0,
        d
      ) || ml(n, l, d) : ml(n, l, "");
    }
  } else if (a) {
    if (t !== i) {
      const l = n[Qv];
      l && (i += ";" + l), n.cssText = i, r = N1.test(i);
    }
  } else t && e.removeAttribute("style");
  uo in e && (e[uo] = r ? n.display : "", e[Jv] && (n.display = "none"));
}
const Fs = /\s*!important$/;
function ml(e, t, i) {
  if (Ie(i))
    i.forEach((n) => ml(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    Fs.test(i) ? e.setProperty(t, i.replace(Fs, ""), "important") : e.setProperty(t, i);
  else {
    const n = I1(e, t);
    Fs.test(i) ? e.setProperty(
      Vn(n),
      i.replace(Fs, ""),
      "important"
    ) : e[n] = i;
  }
}
const hp = ["Webkit", "Moz", "ms"], tc = {};
function I1(e, t) {
  const i = tc[t];
  if (i)
    return i;
  let n = Xt(t);
  if (n !== "filter" && n in e)
    return tc[t] = n;
  n = nu(n);
  for (let a = 0; a < hp.length; a++) {
    const r = hp[a] + n;
    if (r in e)
      return tc[t] = r;
  }
  return t;
}
function L1(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(n) && i === n;
}
const vp = "http://www.w3.org/1999/xlink";
function bp(e, t, i, n, a, r = xm(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(vp, t.slice(6, t.length)) : e.setAttributeNS(vp, t, i) : i == null || r && !Bh(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ki(i) ? String(i) : i
  );
}
function gp(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Zv(i) : i);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const d = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (d !== c || !("_value" in e)) && (e.value = c), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let l = !1;
  if (i === "" || i == null) {
    const d = typeof e[t];
    d === "boolean" ? i = Bh(i) : i == null && d === "string" ? (i = "", l = !0) : d === "number" && (i = 0, l = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  l && e.removeAttribute(a || t);
}
function ha(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function P1(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const mp = /* @__PURE__ */ Symbol("_vei");
function D1(e, t, i, n, a = null) {
  const r = e[mp] || (e[mp] = {}), l = r[t];
  if (n && l)
    l.value = n;
  else {
    const [d, c] = U1(t);
    if (n) {
      const g = r[t] = B1(
        n,
        a
      );
      ha(e, d, g, c);
    } else l && (P1(e, d, l, c), r[t] = void 0);
  }
}
const F1 = /(Once|Passive|Capture)$/, M1 = /^on:?(?:Once|Passive|Capture)$/;
function U1(e) {
  let t, i;
  for (; (i = e.match(F1)) && !M1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Vn(e.slice(2)), t];
}
let ic = 0;
const z1 = /* @__PURE__ */ Promise.resolve(), j1 = () => ic || (z1.then(() => ic = 0), ic = Date.now());
function B1(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Ie(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const l = a.slice(), d = [n];
      for (let c = 0; c < l.length && !n._stopped; c++) {
        const g = l[c];
        g && Mi(
          g,
          t,
          5,
          d
        );
      }
    } else
      Mi(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = j1(), i;
}
const yp = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, H1 = (e, t, i, n, a, r) => {
  const l = a === "svg";
  t === "class" ? x1(e, n, l) : t === "style" ? R1(e, i, n) : eu(t) ? tu(t) || D1(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V1(e, t, n, l)) ? (gp(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bp(e, t, n, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (q1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(n))) ? gp(e, Xt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), bp(e, t, n, l));
};
function V1(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yp(t) && Ue(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return yp(t) && vt(i) ? !1 : t in e;
}
function q1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Xt(t);
  return Array.isArray(i) ? i.some((a) => Xt(a) === n) : Object.keys(i).some((a) => Xt(a) === n);
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ie(t) ? (i) => Ks(t, i) : t;
};
function G1(e) {
  e.target.composing = !0;
}
function _p(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign"), Ms = /* @__PURE__ */ Symbol("_initialValue");
function nc(e, t, i) {
  return t && (e = e.trim()), i && (e = au(e)), e;
}
const je = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Ms] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ms] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sn] = Ir(a);
    const r = n || a.props && a.props.type === "number";
    ha(e, t ? "change" : "input", (l) => {
      l.target.composing || e[sn](nc(e.value, i, r));
    }), (i || r) && ha(e, "change", () => {
      e.value = nc(e.value, i, r);
    }), t || (ha(e, "compositionstart", G1), ha(e, "compositionend", _p), ha(e, "change", _p));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[Ms];
    delete e[Ms], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sn](nc(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, l) {
    if (e[sn] = Ir(l), e.composing) return;
    const d = (r || e.type === "number") && !/^0\d/.test(e.value) ? au(e.value) : e.value, c = t ?? "";
    if (d === c)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === c) || (e.value = c);
  }
}, wa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[sn] = Ir(i), ha(e, "change", () => {
      const n = e._modelValue, a = Yl(e), r = e.checked, l = e[sn];
      if (Ie(n)) {
        const d = yd(n, a), c = d !== -1;
        if (r && !c)
          l(n.concat(a));
        else if (!r && c) {
          const g = [...n];
          g.splice(d, 1), l(g);
        }
      } else if (Mn(n)) {
        const d = new Set(n);
        r ? d.add(a) : d.delete(a), l(d);
      } else
        l(eb(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: wp,
  beforeUpdate(e, t, i) {
    e[sn] = Ir(i), wp(e, t, i);
  }
};
function wp(e, { value: t, oldValue: i }, n) {
  e._modelValue = t;
  let a;
  if (Ie(t))
    a = yd(t, n.props.value) > -1;
  else if (Mn(t))
    a = t.has(n.props.value);
  else {
    if (t === i) return;
    a = Un(t, eb(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const rt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, ha(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => i ? au(Yl(c)) : Yl(c)
      ), r = e.multiple, l = r ? Mn(e._modelValue) ? new Set(a) : a : a[0], d = e._pendingValue = [
        r,
        r ? Ie(l) ? a.slice() : a : l
      ];
      try {
        e[sn](l);
      } finally {
        Rt(() => {
          e._pendingValue === d && (e._pendingValue = void 0);
        });
      }
    }), e[sn] = Ir(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    kp(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[sn] = Ir(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !K1(t, i[1], i[0])) && kp(e, t);
  }
};
function K1(e, t, i) {
  if (!i || Ie(e)) return Un(e, t);
  if (Mn(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function kp(e, t) {
  const i = e.multiple, n = Ie(t);
  if (!(i && !n && !Mn(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const l = e.options[a], d = Yl(l);
      if (i)
        if (n) {
          const c = typeof d;
          c === "string" || c === "number" ? l.selected = t.some((g) => String(g) === String(d)) : l.selected = yd(t, d) > -1;
        } else
          l.selected = t.has(d);
      else if (Un(Yl(l), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Yl(e) {
  return "_value" in e ? e._value : e.value;
}
function eb(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const W1 = ["ctrl", "shift", "alt", "meta"], Y1 = {
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
  exact: (e, t) => W1.some((i) => e[`${i}Key`] && !t.includes(i))
}, ke = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let l = 0; l < t.length; l++) {
      const d = Y1[t[l]];
      if (d && d(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Z1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ft = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = Vn(a.key);
    if (t.some(
      (l) => l === r || Z1[l] === r
    ))
      return e(a);
  }));
}, X1 = /* @__PURE__ */ $t({ patchProp: H1 }, w1);
let Sp;
function J1() {
  return Sp || (Sp = n1(X1));
}
const Q1 = ((...e) => {
  const t = J1().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = t_(n);
    if (!a) return;
    const r = t._component;
    !Ue(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const l = i(a, !1, e_(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), l;
  }, t;
});
function e_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function t_(e) {
  return vt(e) ? document.querySelector(e) : e;
}
function fo(e, t, i) {
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
const Cp = (e, t, i) => {
  const n = Object.assign({
    escape: !0
  }, i || {}), a = function(r, l) {
    return l = l || {}, r.replace(
      /{([^{}]*)}/g,
      function(d, c) {
        const g = l[c];
        return n.escape ? encodeURIComponent(typeof g == "string" || typeof g == "number" ? g.toString() : d) : typeof g == "string" || typeof g == "number" ? g.toString() : d;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), a(e, t || {});
}, Ci = (e, t, i) => {
  const n = Object.assign({
    noRewrite: !1
  }, i || {}), a = i?.baseURL ?? i_();
  return window?.OC?.config?.modRewriteWorking === !0 && !n.noRewrite ? a + Cp(e, t, i) : a + "/index.php" + Cp(e, t, i);
};
function i_() {
  let e = window._oc_webroot;
  if (typeof e > "u") {
    e = location.pathname;
    const t = e.indexOf("/index.php/");
    if (t !== -1)
      e = e.slice(0, t);
    else {
      const i = e.indexOf("/", 1);
      e = e.slice(0, i > 0 ? i : void 0);
    }
  }
  return e;
}
function Tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function n_(e) {
  if (Array.isArray(e)) return e;
}
function a_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, l, d = [], c = !0, g = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(c = (n = r.call(i)).done) && (d.push(n.value), d.length !== t); c = !0) ;
    } catch (v) {
      g = !0, a = v;
    } finally {
      try {
        if (!c && i.return != null && (l = i.return(), Object(l) !== l)) return;
      } finally {
        if (g) throw a;
      }
    }
    return d;
  }
}
function r_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l_(e, t) {
  return n_(e) || a_(e, t) || s_(e, t) || r_();
}
function s_(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Tp(e, t) : void 0;
  }
}
const tb = Object.entries, Ap = Object.setPrototypeOf, o_ = Object.isFrozen, ib = Object.getPrototypeOf, nb = Object.getOwnPropertyDescriptor;
let It = Object.freeze, Bt = Object.seal, Sr = Object.create, ab = typeof Reflect < "u" && Reflect, Kc = ab.apply, Wc = ab.construct;
It || (It = function(t) {
  return t;
});
Bt || (Bt = function(t) {
  return t;
});
Kc || (Kc = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
  return t.apply(i, a);
});
Wc || (Wc = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
  return new t(...n);
});
const Sn = wt(Array.prototype.forEach), u_ = wt(Array.prototype.lastIndexOf), Ep = wt(Array.prototype.pop), ul = wt(Array.prototype.push), c_ = wt(Array.prototype.slice), d_ = wt(Array.prototype.splice), xr = Array.isArray, ac = rb(Set), rc = wt(Set.prototype.add), cl = wt(Set.prototype.has), Ka = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), $p = wt(String.prototype.match), dl = wt(String.prototype.replace), xp = wt(String.prototype.indexOf), f_ = wt(String.prototype.trim), p_ = wt(Number.prototype.toString), h_ = wt(Boolean.prototype.toString), Op = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Np = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), di = wt(Object.prototype.hasOwnProperty), fl = wt(Object.prototype.toString), Ft = wt(RegExp.prototype.test), Cn = rb(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
    return Kc(e, t, n);
  };
}
function rb(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
    return Wc(e, i);
  };
}
function et(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ka;
  if (Ap && Ap(e, null), !xr(t)) return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (o_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function v_(e) {
  for (let t = 0; t < e.length; t++) di(e, t) || (e[t] = null);
  return e;
}
function wi(e) {
  const t = Sr(null);
  for (const n of tb(e)) {
    var i = l_(n, 2);
    const a = i[0], r = i[1];
    di(e, a) && (xr(r) ? t[a] = v_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = wi(r) : t[a] = r);
  }
  return t;
}
function b_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return p_(e);
    case "boolean":
      return h_(e);
    case "bigint":
      return Op ? Op(e) : "0";
    case "symbol":
      return Np ? Np(e) : "Symbol()";
    case "undefined":
      return fl(e);
    case "function":
    case "object": {
      if (e === null) return fl(e);
      const t = e, i = Ni(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : fl(n);
      }
      return fl(e);
    }
    default:
      return fl(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const n = nb(e, t);
    if (n) {
      if (n.get) return wt(n.get);
      if (typeof n.value == "function") return wt(n.value);
    }
    e = ib(e);
  }
  function i() {
    return null;
  }
  return i;
}
function g_(e, t) {
  for (; e !== null; ) {
    const i = nb(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = ib(e);
  }
  return null;
}
function m_(e) {
  try {
    return Ft(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rp = It([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), sc = It([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), oc = It([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), y_ = It([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), uc = It([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), __ = It([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Ip = It(["#text"]), Lp = It([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), cc = It([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Pp = It([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Us = It([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), w_ = Bt(/{{[\w\W]*|^[\w\W]*}}/g), k_ = Bt(/<%[\w\W]*|^[\w\W]*%>/g), S_ = Bt(/\${[\w\W]*/g), C_ = Bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), T_ = Bt(/^aria-[\-\w]+$/), Dp = Bt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), A_ = Bt(/^(?:\w+script|data):/i), E_ = Bt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), $_ = Bt(/^html$/i), x_ = Bt(/^[a-z][.\w]*(-[.\w]+)+$/i), dc = Bt(/<[/\w!]/g), Fp = Bt(/<[/\w]/g), O_ = Bt(/<\/no(script|embed|frames)/i), Mp = Bt(/\/>/i), At = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, N_ = It(et({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), R_ = function() {
  return typeof window > "u" ? null : window;
}, I_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  i && i.hasAttribute(a) && (n = i.getAttribute(a));
  const r = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(r, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, Up = function() {
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
}, la = function(t, i, n, a) {
  return di(t, i) && xr(t[i]) ? et(a.base ? wi(a.base) : {}, t[i], a.transform) : n;
}, fc = function(t, i, n) {
  const a = di(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? wi(a) : n();
};
function lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R_();
  const t = (ce) => lb(ce);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== At.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, l = e.Node, d = e.Element, c = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, v = e.trustedTypes, m = d.prototype, y = Ni(m, "cloneNode"), k = Ni(m, "remove"), T = Ni(m, "removeAttributeNode"), C = Ni(m, "nextSibling"), $ = Ni(m, "childNodes"), N = Ni(m, "parentNode"), R = Ni(m, "shadowRoot"), P = Ni(m, "attributes"), I = l && l.prototype ? Ni(l.prototype, "nodeType") : null, ve = l && l.prototype ? Ni(l.prototype, "nodeName") : null, Q = l && l.prototype ? Ni(l.prototype, "ownerDocument") : null, x = function(A) {
    return I ? I(A) : A.nodeType;
  }, H = function(A) {
    return ve ? ve(A) : A.nodeName;
  }, K = g_(m, "namespaceURI"), Z = function(A) {
    return K ? K(A) : A.namespaceURI;
  };
  if (typeof r == "function") {
    const ce = i.createElement("template");
    ce.content && ce.content.ownerDocument && (i = ce.content.ownerDocument);
  }
  let ae, j = "", q, L = !1, V = 0;
  const J = function() {
    if (V > 0) throw Cn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ne = function(A) {
    J(), V++;
    try {
      return ae.createHTML(A);
    } finally {
      V--;
    }
  }, Y = function(A) {
    J(), V++;
    try {
      return ae.createScriptURL(A);
    } finally {
      V--;
    }
  }, pe = function() {
    return L || (q = I_(v, a), L = !0), q;
  }, Se = i, Le = Se.implementation, Oe = Se.createNodeIterator, Me = Se.createDocumentFragment, Xe = Se.getElementsByTagName, pt = n.importNode;
  let ye = Up();
  t.isSupported = typeof tb == "function" && typeof N == "function" && Le && Le.createHTMLDocument !== void 0;
  const Re = w_, me = k_, De = S_, ut = C_, ee = T_, S = A_, O = E_, D = x_;
  let B = Dp, U = null;
  const X = et({}, [
    ...Rp,
    ...sc,
    ...oc,
    ...uc,
    ...Ip
  ]);
  let te = null;
  const le = et({}, [
    ...Lp,
    ...cc,
    ...Pp,
    ...Us
  ]);
  let fe = Object.seal(Sr(null, {
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
  })), se = null, $e = null;
  const _e = Object.seal(Sr(null, {
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
  let Ce = !0, xe = !0, He = !1, We = !0, Ve = !1, it = !0, ct = !1, _t = !1, bt = null, ei = null, hi = !1, kt = !1, Ot = !1, Ui = !1, Vt = !0, vi = !1;
  const Aa = "user-content-";
  let Yi = !0, Ea = !1, Ai = null, Zi = {}, Xi = null;
  const Lr = et({}, [
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
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let dn = null;
  const Gn = et({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Kn = null;
  const Wn = et({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), dt = "http://www.w3.org/1998/Math/MathML", rr = "http://www.w3.org/2000/svg", bi = "http://www.w3.org/1999/xhtml";
  let fn = bi, Yn = !1, lr = null;
  const $a = et({}, [
    dt,
    rr,
    bi
  ], lc), Zn = It([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let pn = et({}, Zn);
  const Xn = It(["annotation-xml"]);
  let hn = et({}, Xn);
  const xa = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Ei = null;
  const Su = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let nt = null, vn = null;
  const Cu = i.createElement("form"), fs = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Pr = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (vn && vn === A) return;
    (!A || typeof A != "object") && (A = {}), A = wi(A), Ei = Su.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? ds : A.PARSER_MEDIA_TYPE, nt = Ei === "application/xhtml+xml" ? lc : Ka, U = la(A, "ALLOWED_TAGS", X, { transform: nt }), te = la(A, "ALLOWED_ATTR", le, { transform: nt }), lr = la(A, "ALLOWED_NAMESPACES", $a, { transform: lc }), Kn = la(A, "ADD_URI_SAFE_ATTR", Wn, {
      transform: nt,
      base: Wn
    }), dn = la(A, "ADD_DATA_URI_TAGS", Gn, {
      transform: nt,
      base: Gn
    }), Xi = la(A, "FORBID_CONTENTS", Lr, { transform: nt }), se = la(A, "FORBID_TAGS", wi({}), { transform: nt }), $e = la(A, "FORBID_ATTR", wi({}), { transform: nt }), Zi = di(A, "USE_PROFILES") ? A.USE_PROFILES && typeof A.USE_PROFILES == "object" ? wi(A.USE_PROFILES) : A.USE_PROFILES : !1, Ce = A.ALLOW_ARIA_ATTR !== !1, xe = A.ALLOW_DATA_ATTR !== !1, He = A.ALLOW_UNKNOWN_PROTOCOLS || !1, We = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ve = A.SAFE_FOR_TEMPLATES || !1, it = A.SAFE_FOR_XML !== !1, ct = A.WHOLE_DOCUMENT || !1, kt = A.RETURN_DOM || !1, Ot = A.RETURN_DOM_FRAGMENT || !1, Ui = A.RETURN_TRUSTED_TYPE || !1, hi = A.FORCE_BODY || !1, Vt = A.SANITIZE_DOM !== !1, vi = A.SANITIZE_NAMED_PROPS || !1, Yi = A.KEEP_CONTENT !== !1, Ea = A.IN_PLACE || !1, B = m_(A.ALLOWED_URI_REGEXP) ? A.ALLOWED_URI_REGEXP : Dp, fn = typeof A.NAMESPACE == "string" ? A.NAMESPACE : bi, pn = fc(A, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Zn)), hn = fc(A, "HTML_INTEGRATION_POINTS", () => et({}, Xn));
    const M = fc(A, "CUSTOM_ELEMENT_HANDLING", () => Sr(null));
    if (fe = Sr(null), di(M, "tagNameCheck") && fs(M.tagNameCheck) && (fe.tagNameCheck = M.tagNameCheck), di(M, "attributeNameCheck") && fs(M.attributeNameCheck) && (fe.attributeNameCheck = M.attributeNameCheck), di(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (fe.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Bt(fe), Ve && (xe = !1), Ot && (kt = !0), Zi && (U = et({}, Ip), te = Sr(null), Zi.html === !0 && (et(U, Rp), et(te, Lp)), Zi.svg === !0 && (et(U, sc), et(te, cc), et(te, Us)), Zi.svgFilters === !0 && (et(U, oc), et(te, cc), et(te, Us)), Zi.mathMl === !0 && (et(U, uc), et(te, Pp), et(te, Us))), _e.tagCheck = null, _e.attributeCheck = null, di(A, "ADD_TAGS") && (typeof A.ADD_TAGS == "function" ? _e.tagCheck = A.ADD_TAGS : xr(A.ADD_TAGS) && (U === X && (U = wi(U)), et(U, A.ADD_TAGS, nt))), di(A, "ADD_ATTR") && (typeof A.ADD_ATTR == "function" ? _e.attributeCheck = A.ADD_ATTR : xr(A.ADD_ATTR) && (te === le && (te = wi(te)), et(te, A.ADD_ATTR, nt))), di(A, "ADD_FORBID_CONTENTS") && xr(A.ADD_FORBID_CONTENTS) && (Xi === Lr && (Xi = wi(Xi)), et(Xi, A.ADD_FORBID_CONTENTS, nt)), Yi && (U["#text"] = !0), ct && et(U, [
      "html",
      "head",
      "body"
    ]), U.table && (et(U, ["tbody"]), delete se.tbody), A.TRUSTED_TYPES_POLICY) {
      if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function") throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Cn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const re = ae;
      ae = A.TRUSTED_TYPES_POLICY;
      try {
        j = ne("");
      } catch (oe) {
        throw ae = re, oe;
      }
    } else A.TRUSTED_TYPES_POLICY === null ? (ae = void 0, j = "") : (ae === void 0 && (ae = pe()), ae && typeof j == "string" && (j = ne("")));
    It && It(A), vn = A;
  }, gt = et({}, [
    ...sc,
    ...oc,
    ...y_
  ]), sr = et({}, [...uc, ...__]), Tu = function(A, M, re) {
    return M.namespaceURI === bi ? A === "svg" : M.namespaceURI === dt ? A === "svg" && (re === "annotation-xml" || pn[re]) : !!gt[A];
  }, Au = function(A, M, re) {
    return M.namespaceURI === bi ? A === "math" : M.namespaceURI === rr ? A === "math" && hn[re] : !!sr[A];
  }, bn = function(A, M, re) {
    return M.namespaceURI === rr && !hn[re] || M.namespaceURI === dt && !pn[re] ? !1 : !sr[A] && (xa[A] || !gt[A]);
  }, Eu = function(A) {
    const M = Z(A), re = Ka(H(A)), oe = N(A);
    let Ne, Fe;
    return oe && x(oe) === At.element ? (Ne = { namespaceURI: Z(oe) }, Fe = Ka(H(oe))) : (Ne = { namespaceURI: fn }, Fe = "template"), lr[M] ? M === rr ? Tu(re, Ne, Fe) : M === dt ? Au(re, Ne, Fe) : M === bi ? bn(re, Ne, Fe) : !!(Ei === "application/xhtml+xml" && lr[M]) : !1;
  }, ti = function(A) {
    ul(t.removed, { element: A });
    try {
      N(A).removeChild(A);
    } catch {
      if (k(A), !N(A)) throw Cn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, or = function(A, M, re) {
    try {
      T(A, M);
    } catch {
      try {
        A.removeAttribute(re);
      } catch {
      }
    }
  }, Dr = function(A) {
    Mr(A);
    const M = $(A);
    M && Sn(c_(M), (oe) => {
      try {
        k(oe);
      } catch {
      }
    });
    const re = x(A) === At.element ? P(A) : null;
    if (re) for (let oe = re.length - 1; oe >= 0; --oe) {
      const Ne = re[oe], Fe = Ne && Ne.name;
      typeof Fe == "string" && or(A, Ne, Fe);
    }
  }, Jn = function(A, M, re) {
    if (!re) try {
      re = M.getAttributeNode(A);
    } catch {
      re = null;
    }
    ul(t.removed, {
      attribute: re || null,
      from: M
    });
    try {
      re ? T(M, re) : M.removeAttribute(A);
    } catch {
      try {
        M.removeAttribute(A);
      } catch {
      }
    }
    if (A === "is")
      if (kt || Ot) try {
        ti(M);
      } catch {
      }
      else try {
        M.setAttribute(A, "");
      } catch {
      }
  }, ps = function(A) {
    const M = P(A);
    if (M)
      for (let re = M.length - 1; re >= 0; --re) {
        const oe = M[re], Ne = oe && oe.name;
        typeof Ne != "string" || te[nt(Ne)] || or(A, oe, Ne);
      }
  }, Fr = function(A, M) {
    let re = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const oe = [A];
    for (; oe.length > 0; ) {
      const Ne = oe.pop();
      if (M(Ne) === !1) continue;
      if (re && x(Ne) === At.element) {
        const Ge = R(Ne);
        zi(Ge) && oe.push(Ge);
      }
      const Fe = $(Ne);
      if (Fe) for (let Ge = Fe.length - 1; Ge >= 0; --Ge) oe.push(Fe[Ge]);
    }
  }, Mr = function(A) {
    Fr(A, (M) => {
      x(M) === At.element && ps(M);
    });
  }, Ur = function(A) {
    const M = [];
    return Fr(A, (re) => {
      M.push(re);
    }, !0), M;
  }, $u = function(A, M) {
    const re = ac();
    Sn(Ur(A), (oe) => {
      x(oe) === At.element && rc(re, oe);
    }), Sn(M, (oe) => {
      x(oe) === At.element && !cl(re, oe) && ps(oe);
    });
  }, hs = function(A, M) {
    let re = !1;
    return Sn(t.removed, (oe) => {
      oe.element && (re = re || oe.element === A, Mr(oe.element));
    }), $u(A, M), re;
  }, xu = 8, Ou = function(A, M) {
    const re = Ai;
    let oe = null;
    const Ne = () => (oe || (oe = ac(), Sn(M, (Fe) => {
      rc(oe, Fe);
    })), oe);
    for (let Fe = 0; ; Fe++) {
      const Ge = Ur(A), mt = [A];
      let Ct = !1;
      if (Sn(Ge, (Tt) => {
        x(Tt) === At.documentFragment ? ul(mt, Tt) : !Ct && !cl(re, Tt) && (Ct = cl(Ne(), Tt));
      }), !Ct) return;
      if (Fe >= xu) throw Cn("the tree kept changing during in-place sanitization; refusing to return it");
      Sn(mt, (Tt, Pt) => {
        Nu(Tt, Pt > 0, A, Ne());
      });
    }
  }, Nu = function(A, M, re, oe) {
    const Ne = ur(A);
    let Fe;
    for (; Fe = Ne.nextNode(); )
      !cl(oe, Fe) || cl(Ai, Fe) || (M && ui(ye.uponSanitizeShadowNode, Fe, null), gi(Fe, re), pr(Fe, re), zi(Fe.content) && ta(Fe.content));
  }, Ru = function(A) {
    Ai && rc(Ai, A);
  }, vs = function(A, M) {
    return it ? A === "patchsrc" ? !0 : A === "for" && M !== "label" && M !== "output" : !1;
  }, Iu = function(A) {
    it && Fr(A, (M) => {
      const re = x(M);
      if (re === At.processingInstruction || re === At.comment && Ft(Fp, M.data)) {
        try {
          k(M);
        } catch {
        }
        return !1;
      }
      if (re === At.element) {
        const oe = M, Ne = nt(H(M));
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && vs("for", Ne) && oe.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, bs = function(A) {
    let M = null, re = null;
    if (hi) A = "<remove></remove>" + A;
    else {
      const Fe = $p(A, /^[\r\n\t ]+/);
      re = Fe && Fe[0];
    }
    Ei === "application/xhtml+xml" && fn === bi && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const oe = ae ? ne(A) : A;
    if (fn === bi) try {
      M = new g().parseFromString(oe, Ei);
    } catch {
    }
    if (!M || !M.documentElement) {
      M = Le.createDocument(fn, "template", null);
      try {
        M.documentElement.innerHTML = Yn ? j : oe;
      } catch {
      }
    }
    const Ne = M.body || M.documentElement;
    return A && re && Ne.insertBefore(i.createTextNode(re), Ne.childNodes[0] || null), fn === bi ? Xe.call(M, ct ? "html" : "body")[0] : ct ? M.documentElement : Ne;
  }, ur = function(A) {
    const M = Q ? Q(A) : A.ownerDocument;
    return Oe.call(M || A, A, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
  }, Qn = function(A) {
    return A = dl(A, Re, " "), A = dl(A, me, " "), A = dl(A, De, " "), A;
  }, Oa = function(A) {
    var M;
    cr(A);
    const re = (M = A.querySelectorAll) === null || M === void 0 ? void 0 : M.call(A, "template");
    re && Sn(re, (oe) => {
      zi(oe.content) && Oa(oe.content);
    });
  }, cr = function(A) {
    A.normalize();
    const M = Q ? Q(A) : A.ownerDocument, re = Oe.call(M || A, A, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null);
    let oe = re.nextNode();
    for (; oe; )
      oe.data = Qn(oe.data), oe = re.nextNode();
  }, ea = function(A) {
    const M = ve ? ve(A) : null;
    return typeof M != "string" || nt(M) !== "form" ? !1 : typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || A.attributes !== P(A) || typeof A.removeAttribute != "function" || typeof A.removeAttributeNode != "function" || typeof A.getAttributeNode != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function" || A.nodeType !== I(A) || A.childNodes !== $(A);
  }, zi = function(A) {
    if (!I || typeof A != "object" || A === null) return !1;
    try {
      return I(A) === At.documentFragment;
    } catch {
      return !1;
    }
  }, Na = function(A) {
    if (!I || typeof A != "object" || A === null) return !1;
    try {
      return typeof I(A) == "number";
    } catch {
      return !1;
    }
  };
  function ui(ce, A, M) {
    ce.length !== 0 && Sn(ce, (re) => {
      re.call(t, A, M, vn);
    });
  }
  const gs = function(A, M) {
    return !!(it && A.hasChildNodes() && !Na(A.firstElementChild) && Ft(dc, A.textContent) && Ft(dc, A.innerHTML) || it && N_[M] && x(A) === At.element && Z(A) === bi && (Na(A.firstElementChild) || typeof A.textContent == "string" && Ft(dc, A.textContent)) || A.nodeType === At.processingInstruction || it && A.nodeType === At.comment && Ft(Fp, A.data));
  }, dr = function(A, M) {
    if (A instanceof RegExp) return Ft(A, M);
    if (A instanceof Function) {
      for (var re = arguments.length, oe = new Array(re > 2 ? re - 2 : 0), Ne = 2; Ne < re; Ne++) oe[Ne - 2] = arguments[Ne];
      return !!A(M, ...oe);
    }
    return !1;
  }, zr = function(A, M, re) {
    if (!se[M] && Br(M) && dr(fe.tagNameCheck, M)) return !1;
    if (Yi && !Xi[M] && !Xi[Ka(M)]) {
      const oe = N(A), Ne = $(A);
      if (Ne && oe) {
        const Fe = Ne.length;
        for (let Ge = Fe - 1; Ge >= 0; --Ge) {
          const mt = A === re ? y(Ne[Ge], !0) : Ne[Ge];
          oe.insertBefore(mt, C(A));
        }
      }
    }
    return ti(A), !0;
  }, fr = function(A, M, re, oe) {
    return A.length === 0 ? M : M === re || M === oe ? wi(M) : M;
  }, gn = function(A, M) {
    return A === M || N(A) !== null ? !1 : (Ea && Mr(A), !0);
  }, gi = function(A, M) {
    if (Ru(A), ui(ye.beforeSanitizeElements, A, null), gn(A, M)) return !0;
    if (ea(A))
      return ti(A), !0;
    const re = nt(H(A));
    if (U = fr(ye.uponSanitizeElement, U, X, bt), ui(ye.uponSanitizeElement, A, {
      tagName: re,
      allowedTags: U
    }), gn(A, M)) return !0;
    if (gs(A, re))
      return ti(A), !0;
    if (se[re] || !(_e.tagCheck instanceof Function && _e.tagCheck(re)) && !U[re]) {
      const oe = zr(A, re, M);
      return oe === !1 && (ui(ye.afterSanitizeElements, A, null), gn(A, M)) ? !0 : oe;
    }
    if (x(A) === At.element && !Eu(A) || (re === "noscript" || re === "noembed" || re === "noframes") && Ft(O_, A.innerHTML))
      return ti(A), !0;
    if (Ve && A.nodeType === At.text) {
      const oe = Qn(A.textContent);
      A.textContent !== oe && (ul(t.removed, { element: A.cloneNode() }), A.textContent = oe);
    }
    return ui(ye.afterSanitizeElements, A, null), gn(A, M);
  }, jr = function(A, M, re) {
    if ($e[M] || vs(M, A) || Vt && (M === "id" || M === "name") && (re in i || re in Cu)) return !1;
    const oe = te[M] || _e.attributeCheck instanceof Function && _e.attributeCheck(M, A);
    return xe && Ft(ut, M) || Ce && Ft(ee, M) ? !0 : oe ? Kn[M] || Ft(B, dl(re, O, "")) || (M === "src" || M === "xlink:href" || M === "href") && A !== "script" && xp(re, "data:") === 0 && dn[A] || He && !Ft(S, dl(re, O, "")) ? !0 : !re : Br(A) && dr(fe.tagNameCheck, A) && dr(fe.attributeNameCheck, M, A) || M === "is" && fe.allowCustomizedBuiltInElements && dr(fe.tagNameCheck, re);
  }, ms = et({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Br = function(A) {
    return !ms[Ka(A)] && Ft(D, A);
  }, Lu = function(A, M, re, oe) {
    if (ae && typeof v == "object" && typeof v.getAttributeType == "function" && !re) switch (v.getAttributeType(A, M)) {
      case "TrustedHTML":
        return ne(oe);
      case "TrustedScriptURL":
        return Y(oe);
    }
    return oe;
  }, Pu = function(A, M, re, oe) {
    try {
      return re ? A.setAttributeNS(re, M, oe) : A.setAttribute(M, oe), ea(A) ? (ti(A), !1) : !0;
    } catch {
      return Jn(M, A), !1;
    }
  }, Hr = function(A, M) {
    return it && Ft(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, M) ? !0 : Ka(A) === "attributename" && $p(M, "href") !== null;
  }, pr = function(A, M) {
    if (ui(ye.beforeSanitizeAttributes, A, null), gn(A, M)) return;
    const re = A.attributes;
    if (!re || ea(A)) return;
    te = fr(ye.uponSanitizeAttribute, te, le, ei);
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: te,
      forceKeepAttr: void 0
    };
    let Ne = re.length;
    const Fe = nt(A.nodeName);
    for (; Ne--; ) {
      const Ge = re[Ne], mt = Ge.name, Ct = Ge.namespaceURI, Tt = Ge.value, Pt = nt(mt), $i = Tt;
      let qt = mt === "value" ? $i : f_($i), ys = !1;
      if (oe.attrName = Pt, oe.attrValue = qt, oe.keepAttr = !0, oe.forceKeepAttr = void 0, ui(ye.uponSanitizeAttribute, A, oe), qt = oe.attrValue, vi && (Pt === "id" || Pt === "name") && xp(qt, Aa) !== 0 && (Jn(mt, A, Ge), qt = Aa + qt, ys = !0), Hr(mt, qt)) {
        Jn(mt, A, Ge);
        continue;
      }
      if (!oe.forceKeepAttr) {
        if (!oe.keepAttr) {
          Jn(mt, A, Ge);
          continue;
        }
        if (!We && Ft(Mp, qt)) {
          Jn(mt, A, Ge);
          continue;
        }
        if (Ve && (qt = Qn(qt)), !jr(Fe, Pt, qt)) {
          Jn(mt, A, Ge);
          continue;
        }
        qt = Lu(Fe, Pt, Ct, qt), qt !== $i && Pu(A, mt, Ct, qt) && ys && Ep(t.removed);
      }
    }
    ui(ye.afterSanitizeAttributes, A, null), gn(A, M);
  }, ta = function(A) {
    let M = null;
    const re = ur(A);
    for (ui(ye.beforeSanitizeShadowDOM, A, null); M = re.nextNode(); )
      if (ui(ye.uponSanitizeShadowNode, M, null), gi(M, A), pr(M, A), zi(M.content) && ta(M.content), x(M) === At.element) {
        const oe = R(M);
        zi(oe) && (Vr(oe), ta(oe));
      }
    Ve && cr(A), ui(ye.afterSanitizeShadowDOM, A, null);
  }, Vr = function(A) {
    const M = [{
      node: A,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const re = M.pop();
      if (re.shadow) {
        ta(re.shadow);
        continue;
      }
      const oe = re.node, Ne = x(oe) === At.element, Fe = $(oe);
      if (Fe) for (let Ge = Fe.length - 1; Ge >= 0; --Ge) M.push({
        node: Fe[Ge],
        shadow: null
      });
      if (Ne) {
        const Ge = ve ? ve(oe) : null;
        if (typeof Ge == "string" && nt(Ge) === "template") {
          const mt = oe.content;
          zi(mt) && M.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (Ne) {
        const Ge = R(oe);
        zi(Ge) && M.push({
          node: null,
          shadow: Ge
        }, {
          node: Ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ce) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, re = null, oe = null, Ne = null;
    if (Yn = !ce, Yn && (ce = "<!-->"), typeof ce != "string" && !Na(ce) && (ce = b_(ce), typeof ce != "string"))
      throw Cn("dirty is not a string, aborting");
    if (!t.isSupported) return ce;
    _t ? (U = bt, te = ei) : Pr(A), (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && (U = wi(U)), ye.uponSanitizeAttribute.length > 0 && (te = wi(te)), t.removed = [];
    const Fe = Ea && typeof ce != "string" && Na(ce);
    let Ge = [];
    const mt = Ai;
    if (Fe) {
      Iu(ce);
      const Pt = H(ce);
      if (typeof Pt == "string") {
        const $i = nt(Pt);
        if (!U[$i] || se[$i])
          throw Dr(ce), Cn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ea(ce))
        throw Dr(ce), Cn("root node is clobbered and cannot be sanitized in-place");
      Ge = Ur(ce), Ai = ac();
    } else if (Na(ce))
      M = bs("<!---->"), re = M.ownerDocument.importNode(ce, !0), re.nodeType === At.element && re.nodeName === "BODY" || re.nodeName === "HTML" ? M = re : M.appendChild(re), Vr(M);
    else {
      if (!kt && !Ve && !ct && ce.indexOf("<") === -1) return ae && Ui ? ne(ce) : ce;
      if (M = bs(ce), !M) return kt ? null : Ui ? j : "";
    }
    M && hi && ti(M.firstChild);
    const Ct = Fe ? ce : M;
    try {
      Fe && Vr(ce);
      const Pt = ur(Ct);
      for (; oe = Pt.nextNode(); )
        gi(oe, Ct), pr(oe, Ct), zi(oe.content) && ta(oe.content);
      Fe && Ou(ce, Ge);
    } catch (Pt) {
      throw Fe && (Dr(ce), hs(ce, Ge)), Pt;
    } finally {
      Ai = mt;
    }
    if (Fe) {
      if (hs(ce, Ge)) throw Cn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ve && Oa(ce), ce;
    }
    if (kt) {
      if (Ve && Oa(M), Ot)
        for (Ne = Me.call(M.ownerDocument); M.firstChild; ) Ne.appendChild(M.firstChild);
      else Ne = M;
      return (te.shadowroot || te.shadowrootmode) && (Ne = pt.call(n, Ne, !0)), Ne;
    }
    let Tt = ct ? M.outerHTML : M.innerHTML;
    return ct && U["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Ft($_, M.ownerDocument.doctype.name) && (Tt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Tt), Ve && (Tt = Qn(Tt)), ae && Ui ? ne(Tt) : Tt;
  }, t.setConfig = function() {
    let ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pr(ce), _t = !0, bt = U, ei = te;
  }, t.clearConfig = function() {
    vn = null, _t = !1, bt = null, ei = null, ae = q, j = "";
  }, t.isValidAttribute = function(ce, A, M) {
    vn || Pr({});
    const re = nt(ce), oe = nt(A);
    return typeof M == "string" && (Hr(A, M) || !We && Ft(Mp, M)) ? !1 : jr(re, oe, M);
  }, t.addHook = function(ce, A) {
    typeof A == "function" && di(ye, ce) && ul(ye[ce], A);
  }, t.removeHook = function(ce, A) {
    if (di(ye, ce)) {
      if (A !== void 0) {
        const M = u_(ye[ce], A);
        return M === -1 ? void 0 : d_(ye[ce], M, 1)[0];
      }
      return Ep(ye[ce]);
    }
  }, t.removeHooks = function(ce) {
    di(ye, ce) && (ye[ce] = []);
  }, t.removeAllHooks = function() {
    ye = Up();
  }, t;
}
var sb = lb();
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pc, zp;
function L_() {
  if (zp) return pc;
  zp = 1;
  var e = /["'&<>]/;
  pc = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, l = "", d = 0, c = 0;
    for (d = a.index; d < n.length; d++) {
      switch (n.charCodeAt(d)) {
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
      c !== d && (l += n.substring(c, d)), c = d + 1, l += r;
    }
    return c !== d ? l + n.substring(c, d) : l;
  }
  return pc;
}
var P_ = L_();
const po = /* @__PURE__ */ Pd(P_);
function ob() {
  return globalThis._nc_l10n_locale;
}
function D_() {
  return ob().replaceAll(/_/g, "-");
}
function us() {
  return globalThis._nc_l10n_language;
}
function F_(e) {
  const t = us();
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
function ub(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function w(e, t, i, n, a) {
  const r = typeof i == "object" ? i : void 0, l = typeof n == "number" ? n : typeof i == "number" ? i : void 0, d = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, c = (C) => C, g = (d.sanitize ? sb.sanitize : c) || c, v = d.escape ? po : c, m = (C) => typeof C == "string" || typeof C == "number", y = (C, $, N) => C.replace(/%n/g, "" + N).replace(/{([^{}]*)}/g, (R, P) => {
    if ($ === void 0 || !(P in $))
      return v(R);
    const I = $[P];
    return m(I) ? v(`${I}`) : typeof I == "object" && m(I.value) ? (I.escape !== !1 ? po : c)(`${I.value}`) : v(R);
  });
  let T = (a?.bundle ?? ub(e)).translations[t] || t;
  return T = Array.isArray(T) ? T[0] : T, g(typeof r == "object" || l !== void 0 ? y(
    T,
    r,
    l
  ) : T);
}
function fi(e, t, i, n, a, r) {
  const l = "_" + t + "_::_" + i + "_", d = r?.bundle ?? ub(e), c = d.translations[l];
  if (typeof c < "u") {
    const g = c;
    if (Array.isArray(g)) {
      const v = d.pluralFunction(n);
      return w(e, g[v], a, n, r);
    }
  }
  return n === 1 ? w(e, t, a, n, r) : w(e, i, a, n, r);
}
function M_(e, t = us()) {
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
function U_(e, t = () => "", i = 256) {
  const n = /* @__PURE__ */ new Map();
  let a;
  return (...r) => {
    if (r.length !== 2 || r.some((g) => typeof g != "string")) return e(...r);
    const l = t();
    l !== a && (n.clear(), a = l);
    const d = JSON.stringify(r);
    if (n.has(d)) return n.get(d);
    const c = e(...r);
    return n.size >= i && n.delete(n.keys().next().value), n.set(d, c), c;
  };
}
class ho {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? ho.GLOBAL_SCOPE_PERSISTENT : ho.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
class z_ {
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
    return new ho(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function cb(e) {
  return new z_(e);
}
function j_() {
  try {
    return fo("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var hc, jp;
function db() {
  if (jp) return hc;
  jp = 1;
  var e = {};
  return hc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, hc;
}
var vc, Bp;
function fb() {
  if (Bp) return vc;
  Bp = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return vc = {
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
  }, vc;
}
var zs = { exports: {} }, Hp;
function B_() {
  return Hp || (Hp = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = fb(), r = db();
    t = e.exports = {};
    const l = t.re = [], d = t.safeRe = [], c = t.src = [], g = t.safeSrc = [], v = t.t = {};
    let m = 0;
    const y = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", a],
      [y, n]
    ], T = ($) => {
      for (const [N, R] of k)
        $ = $.split(`${N}*`).join(`${N}{0,${R}}`).split(`${N}+`).join(`${N}{1,${R}}`);
      return $;
    }, C = ($, N, R) => {
      const P = T(N), I = m++;
      r($, I, N), v[$] = I, c[I] = N, g[I] = P, l[I] = new RegExp(N, R ? "g" : void 0), d[I] = new RegExp(P, R ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${y}*`), C("MAINVERSION", `(${c[v.NUMERICIDENTIFIER]})\\.(${c[v.NUMERICIDENTIFIER]})\\.(${c[v.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${c[v.NUMERICIDENTIFIERLOOSE]})\\.(${c[v.NUMERICIDENTIFIERLOOSE]})\\.(${c[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${c[v.NONNUMERICIDENTIFIER]}|${c[v.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${c[v.NONNUMERICIDENTIFIER]}|${c[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${c[v.PRERELEASEIDENTIFIER]}(?:\\.${c[v.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${c[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[v.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${y}+`), C("BUILD", `(?:\\+(${c[v.BUILDIDENTIFIER]}(?:\\.${c[v.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${c[v.MAINVERSION]}${c[v.PRERELEASE]}?${c[v.BUILD]}?`), C("FULL", `^${c[v.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${c[v.MAINVERSIONLOOSE]}${c[v.PRERELEASELOOSE]}?${c[v.BUILD]}?`), C("LOOSE", `^${c[v.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${c[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${c[v.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${c[v.XRANGEIDENTIFIER]})(?:\\.(${c[v.XRANGEIDENTIFIER]})(?:\\.(${c[v.XRANGEIDENTIFIER]})(?:${c[v.PRERELEASE]})?${c[v.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${c[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[v.XRANGEIDENTIFIERLOOSE]})(?:${c[v.PRERELEASELOOSE]})?${c[v.BUILD]}?)?)?`), C("XRANGE", `^${c[v.GTLT]}\\s*${c[v.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${c[v.GTLT]}\\s*${c[v.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), C("COERCE", `${c[v.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", c[v.COERCEPLAIN] + `(?:${c[v.PRERELEASE]})?(?:${c[v.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", c[v.COERCE], !0), C("COERCERTLFULL", c[v.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${c[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${c[v.LONETILDE]}${c[v.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${c[v.LONETILDE]}${c[v.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${c[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${c[v.LONECARET]}${c[v.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${c[v.LONECARET]}${c[v.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${c[v.GTLT]}\\s*(${c[v.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${c[v.GTLT]}\\s*(${c[v.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${c[v.GTLT]}\\s*(${c[v.LOOSEPLAIN]}|${c[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${c[v.XRANGEPLAIN]})\\s+-\\s+(${c[v.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${c[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[v.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(zs, zs.exports)), zs.exports;
}
var bc, Vp;
function H_() {
  if (Vp) return bc;
  Vp = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return bc = (n) => n ? typeof n != "object" ? e : n : t, bc;
}
var gc, qp;
function V_() {
  if (qp) return gc;
  qp = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), l = e.test(a);
    return r && l && (n = +n, a = +a), n === a ? 0 : r && !l ? -1 : l && !r ? 1 : n < a ? -1 : 1;
  };
  return gc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, gc;
}
var mc, Gp;
function pb() {
  if (Gp) return mc;
  Gp = 1;
  const e = db(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = fb(), { safeRe: n, t: a } = B_(), r = H_(), { compareIdentifiers: l } = V_(), d = (g, v) => {
    const m = v.split(".");
    if (m.length > g.length)
      return !1;
    for (let y = 0; y < m.length; y++)
      if (l(g[y], m[y]) !== 0)
        return !1;
    return !0;
  };
  class c {
    constructor(v, m) {
      if (m = r(m), v instanceof c) {
        if (v.loose === !!m.loose && v.includePrerelease === !!m.includePrerelease)
          return v;
        v = v.version;
      } else if (typeof v != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof v}".`);
      if (v.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", v, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
      const y = v.trim().match(m.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!y)
        throw new TypeError(`Invalid Version: ${v}`);
      if (this.raw = v, this.major = +y[1], this.minor = +y[2], this.patch = +y[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      y[4] ? this.prerelease = y[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const T = +k;
          if (T >= 0 && T < i)
            return T;
        }
        return k;
      }) : this.prerelease = [], this.build = y[5] ? y[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(v) {
      if (e("SemVer.compare", this.version, this.options, v), !(v instanceof c)) {
        if (typeof v == "string" && v === this.version)
          return 0;
        v = new c(v, this.options);
      }
      return v.version === this.version ? 0 : this.compareMain(v) || this.comparePre(v);
    }
    compareMain(v) {
      return v instanceof c || (v = new c(v, this.options)), this.major < v.major ? -1 : this.major > v.major ? 1 : this.minor < v.minor ? -1 : this.minor > v.minor ? 1 : this.patch < v.patch ? -1 : this.patch > v.patch ? 1 : 0;
    }
    comparePre(v) {
      if (v instanceof c || (v = new c(v, this.options)), this.prerelease.length && !v.prerelease.length)
        return -1;
      if (!this.prerelease.length && v.prerelease.length)
        return 1;
      if (!this.prerelease.length && !v.prerelease.length)
        return 0;
      let m = 0;
      do {
        const y = this.prerelease[m], k = v.prerelease[m];
        if (e("prerelease compare", m, y, k), y === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === k)
          continue;
        return l(y, k);
      } while (++m);
    }
    compareBuild(v) {
      v instanceof c || (v = new c(v, this.options));
      let m = 0;
      do {
        const y = this.build[m], k = v.build[m];
        if (e("build compare", m, y, k), y === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (y === void 0)
          return -1;
        if (y === k)
          continue;
        return l(y, k);
      } while (++m);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(v, m, y) {
      if (v.startsWith("pre")) {
        if (!m && y === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (m) {
          const k = `-${m}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!k || k[1] !== m)
            throw new Error(`invalid identifier: ${m}`);
        }
      }
      switch (v) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m, y);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m, y);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", m, y), this.inc("pre", m, y);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", m, y), this.inc("pre", m, y);
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
          const k = Number(y) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let T = this.prerelease.length;
            for (; --T >= 0; )
              typeof this.prerelease[T] == "number" && (this.prerelease[T]++, T = -2);
            if (T === -1) {
              if (m === this.prerelease.join(".") && y === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (m) {
            let T = [m, k];
            if (y === !1 && (T = [m]), d(this.prerelease, m)) {
              const C = this.prerelease[m.split(".").length];
              isNaN(C) && (this.prerelease = T);
            } else
              this.prerelease = T;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${v}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return mc = c, mc;
}
var yc, Kp;
function q_() {
  if (Kp) return yc;
  Kp = 1;
  const e = pb();
  return yc = (i, n) => new e(i, n).major, yc;
}
var G_ = q_();
const Wp = /* @__PURE__ */ Pd(G_);
var _c, Yp;
function K_() {
  if (Yp) return _c;
  Yp = 1;
  const e = pb();
  return _c = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, _c;
}
var wc, Zp;
function W_() {
  if (Zp) return wc;
  Zp = 1;
  const e = K_();
  return wc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, wc;
}
var Y_ = W_();
const Z_ = /* @__PURE__ */ Pd(Y_);
class X_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Z_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Wp(t.getVersion()) !== Wp(this.getVersion()) && console.warn(
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
class J_ {
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
let pl = null;
function Dd() {
  return pl !== null ? pl : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? pl = new X_(window._nc_event_bus) : pl = window._nc_event_bus = new J_(), pl);
}
function hb(e, t) {
  Dd().subscribe(e, t);
}
function Q_(e, t) {
  Dd().unsubscribe(e, t);
}
function Fn(e, ...t) {
  Dd().emit(e, ...t);
}
const vb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const e0 = Object.prototype.toString, t0 = (e) => e0.call(e) === "[object Object]", mr = () => {
}, i0 = /* @__PURE__ */ n0();
function n0() {
  var e, t, i;
  return vb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function kc(e) {
  return Array.isArray(e) ? e : [e];
}
function a0(e, t, i) {
  return qe(e, t, {
    ...i,
    immediate: !0
  });
}
const bb = vb ? window : void 0;
function yl(e) {
  var t;
  const i = Pn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function Or(...e) {
  const t = (n, a, r, l) => (n.addEventListener(a, r, l), () => n.removeEventListener(a, r, l)), i = z(() => {
    const n = kc(Pn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return a0(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => yl(r))) !== null && n !== void 0 ? n : [bb].filter((r) => r != null),
      kc(Pn(i.value ? e[1] : e[0])),
      kc(u(i.value ? e[2] : e[1])),
      Pn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, l], d, c) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const g = t0(l) ? { ...l } : l, v = n.flatMap((m) => a.flatMap((y) => r.map((k) => t(m, y, k, g))));
    c(() => {
      v.forEach((m) => m());
    });
  }, { flush: "post" });
}
let Xp = !1;
function Jp(e, t, i = {}) {
  const { window: n = bb, ignore: a = [], capture: r = !0, detectIframe: l = !1, controls: d = !1 } = i;
  if (!n) return d ? {
    stop: mr,
    cancel: mr,
    trigger: mr
  } : mr;
  if (i0 && !Xp) {
    Xp = !0;
    const $ = { passive: !0 };
    Array.from(n.document.body.children).forEach((N) => N.addEventListener("click", mr, $)), n.document.documentElement.addEventListener("click", mr, $);
  }
  let c = !0;
  const g = ($) => Pn(a).some((N) => {
    if (typeof N == "string") return Array.from(n.document.querySelectorAll(N)).some((R) => R === $.target || $.composedPath().includes(R));
    {
      const R = yl(N);
      return R && ($.target === R || $.composedPath().includes(R));
    }
  });
  function v($) {
    const N = Pn($);
    return N && N.$.subTree.shapeFlag === 16;
  }
  function m($, N) {
    const R = Pn($), P = R.$.subTree && R.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((I) => I.el === N.target || N.composedPath().includes(I.el));
  }
  const y = ($) => {
    const N = yl(e);
    if ($.target != null && !(!(N instanceof Element) && v(e) && m(e, $)) && !(!N || N === $.target || $.composedPath().includes(N))) {
      if ("detail" in $ && $.detail === 0 && (c = !g($)), !c) {
        c = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const T = [
    Or(n, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), y($));
    }, {
      passive: !0,
      capture: r
    }),
    Or(n, "pointerdown", ($) => {
      const N = yl(e);
      c = !g($) && !!(N && !$.composedPath().includes(N));
    }, { passive: !0 }),
    l && Or(n, "blur", ($) => {
      setTimeout(() => {
        const N = yl(e);
        let R = n.document.activeElement;
        for (; R?.shadowRoot; ) R = R.shadowRoot.activeElement;
        R?.tagName === "IFRAME" && !N?.contains(n.document.activeElement) && t($);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => T.forEach(($) => $());
  return d ? {
    stop: C,
    cancel: () => {
      c = !1;
    },
    trigger: ($) => {
      c = !0, y($), c = !1;
    }
  } : C;
}
function r0(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: l = !0 } = t, d = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), c = /* @__PURE__ */ Nt({
    x: 0,
    y: 0
  }), g = z(() => d.x - c.x), v = z(() => d.y - c.y), { max: m, abs: y } = Math, k = z(() => m(y(g.value), y(v.value)) >= i), T = /* @__PURE__ */ rv(!1), C = z(() => k.value ? y(g.value) > y(v.value) ? g.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), $ = (x) => [x.touches[0].clientX, x.touches[0].clientY], N = (x, H) => {
    d.x = x, d.y = H;
  }, R = (x, H) => {
    c.x = x, c.y = H;
  }, P = {
    passive: l,
    capture: !l
  }, I = (x) => {
    T.value && a?.(x, C.value), T.value = !1;
  }, ve = [
    Or(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [H, K] = $(x);
      N(H, K), R(H, K), r?.(x);
    }, P),
    Or(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [H, K] = $(x);
      R(H, K), P.capture && !P.passive && Math.abs(g.value) > Math.abs(v.value) && x.preventDefault(), !T.value && k.value && (T.value = !0), T.value && n?.(x);
    }, P),
    Or(e, ["touchend", "touchcancel"], I, P)
  ];
  return {
    isSwiping: T,
    direction: C,
    coordsStart: d,
    coordsEnd: c,
    lengthX: g,
    lengthY: v,
    stop: () => ve.forEach((x) => x())
  };
}
var l0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = Dy(), r = Py(), l = /* @__PURE__ */ G([]), d = z(() => l.value.reduce((ee, S) => (ee[~~S.id] = S) && ee, {})), c = z(() => l.value.length), g = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), m = /* @__PURE__ */ G({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), y = /* @__PURE__ */ G({
      splitter: null,
      timeoutId: null
    }), k = z(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": m.value.dragging,
      "splitpanes--ready": v.value
    })), T = () => {
      document.addEventListener("mousemove", N, { passive: !1 }), document.addEventListener("mouseup", R), "ontouchstart" in window && (document.addEventListener("touchmove", N, { passive: !1 }), document.addEventListener("touchend", R));
    }, C = () => {
      document.removeEventListener("mousemove", N, { passive: !1 }), document.removeEventListener("mouseup", R), "ontouchstart" in window && (document.removeEventListener("touchmove", N, { passive: !1 }), document.removeEventListener("touchend", R));
    }, $ = (ee, S) => {
      let O = ee.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: D, top: B } = O.getBoundingClientRect(), { clientX: U, clientY: X } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
        m.value.cursorOffset = n.horizontal ? X - B : U - D;
      }
      T(), m.value.mouseDown = !0, m.value.activeSplitter = S, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, N = (ee) => {
      m.value.mouseDown && (ee.preventDefault(), m.value.dragging || (window.getSelection()?.removeAllRanges(), m.value.dragging = !0), requestAnimationFrame(() => {
        K(x(ee)), De("resize", { event: ee }, !0);
      }));
    }, R = (ee) => {
      m.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: ee }, !0)), m.value.mouseDown = !1, m.value.activeSplitter = null, setTimeout(() => {
        m.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ee, S) => {
      "ontouchstart" in window && (ee.preventDefault(), y.value.splitter === S ? (clearTimeout(y.value.timeoutId), y.value.timeoutId = null, I(ee, S), y.value.splitter = null) : (y.value.splitter = S, y.value.timeoutId = setTimeout(() => y.value.splitter = null, 500))), m.value.dragging || De("splitter-click", {
        event: ee,
        index: S
      }, !0);
    }, I = (ee, S) => {
      if (De("splitter-dblclick", {
        event: ee,
        index: S
      }, !0), n.maximizePanes) {
        let O = 0;
        l.value = l.value.map((D, B) => (D.size = B === S ? D.max : D.min, B !== S && (O += D.min), D)), l.value[S].size -= O, De("pane-maximize", {
          event: ee,
          index: S,
          pane: l.value[S]
        }), De("resized", {
          event: ee,
          index: S
        }, !0);
      }
    }, ve = (ee, S) => {
      if (!n.keyboardStep) return;
      let O = n.horizontal ? ee.key === "ArrowDown" : ee.key === "ArrowRight", D = n.horizontal ? ee.key === "ArrowUp" : ee.key === "ArrowLeft";
      if (!O && !D) return;
      ee.preventDefault(), m.value.activeSplitter = S;
      let B = (O ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), U = j(S) + l.value[S].size;
      Z(Math.min(Math.max(U + B * n.keyboardStep, 0), 100)), De("resize", { event: ee }, !0), De("resized", { event: ee }, !0), m.value.activeSplitter = null;
    }, Q = (ee, S) => {
      let O = d.value[S];
      O && De("pane-click", {
        event: ee,
        index: O.index,
        pane: O
      });
    }, x = (ee) => {
      let S = g.value.getBoundingClientRect(), { clientX: O, clientY: D } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
      return {
        x: O - (n.horizontal ? 0 : m.value.cursorOffset) - S.left,
        y: D - (n.horizontal ? m.value.cursorOffset : 0) - S.top
      };
    }, H = (ee) => {
      ee = ee[n.horizontal ? "y" : "x"];
      let S = g.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (ee = S - ee), ee * 100 / S;
    }, K = (ee) => {
      Z(H(ee));
    }, Z = (ee) => {
      let S = m.value.activeSplitter;
      if (S === null || S >= l.value.length - 1) return;
      let O = {
        prevPanesSize: j(S),
        nextPanesSize: q(S),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, D = 0 + (n.pushOtherPanes ? 0 : O.prevPanesSize), B = 100 - (n.pushOtherPanes ? 0 : O.nextPanesSize);
      ee = Math.max(Math.min(ee, B), D);
      let U = [S, S + 1], X = l.value[U[0]] || null, te = l.value[U[1]] || null, le = X !== null && X.max < 100 && ee >= X.max + O.prevPanesSize, fe = te !== null && te.max < 100 && ee <= 100 - (te.max + q(S + 1));
      if (le || fe) {
        le ? (X.size = X.max, te.size = Math.min(Math.max(100 - X.max - O.prevPanesSize - O.nextPanesSize, te.min), te.max)) : (X.size = Math.min(Math.max(100 - te.max - O.prevPanesSize - q(S + 1), X.min), X.max), te.size = te.max);
        return;
      }
      if (n.pushOtherPanes) {
        let se = ae(O, ee);
        if (!se) return;
        ({ sums: O, panesToResize: U } = se), X = l.value[U[0]] || null, te = l.value[U[1]] || null;
      }
      X !== null && (X.size = Math.min(Math.max(ee - O.prevPanesSize - O.prevReachedMinPanes, X.min), X.max)), te !== null && (te.size = Math.min(Math.max(100 - ee - O.nextPanesSize - O.nextReachedMinPanes, te.min), te.max));
    }, ae = (ee, S) => {
      let O = m.value.activeSplitter, D = [O, O + 1];
      if (S < ee.prevPanesSize + l.value[D[0]].min) {
        if (D[0] = L(O).index, ee.prevReachedMinPanes = 0, D[0] < O && l.value.forEach((B, U) => {
          U > D[0] && U <= O && (B.size = B.min, ee.prevReachedMinPanes += B.min);
        }), D[0] === void 0) return ee.prevReachedMinPanes = 0, l.value[0].size = l.value[0].min, l.value.forEach((B, U) => {
          U > 0 && U <= O && (B.size = B.min, ee.prevReachedMinPanes += B.min);
        }), l.value[D[1]].size = 100 - ee.prevReachedMinPanes - l.value[0].min - ee.prevPanesSize - ee.nextPanesSize, null;
        ee.prevPanesSize = j(D[0]);
      }
      return S > 100 - ee.nextPanesSize - l.value[D[1]].min && (D[1] = V(O).index, ee.nextReachedMinPanes = 0, D[1] > O + 1 && l.value.forEach((B, U) => {
        U > O && U < D[1] && (B.size = B.min, ee.nextReachedMinPanes += B.min);
      }), ee.nextPanesSize = D[1] === void 0 ? 0 : q(D[1] - 1), D[1] === void 0) ? (ee.nextReachedMinPanes = 0, l.value.forEach((B, U) => {
        U >= O + 1 && (B.size = B.min, ee.nextReachedMinPanes += B.min);
      }), D[0] !== void 0 && (l.value[D[0]].size = 100 - ee.prevPanesSize - q(D[0] - 1)), null) : {
        sums: ee,
        panesToResize: D
      };
    }, j = (ee) => l.value.reduce((S, O, D) => S + (D < ee ? O.size : 0), 0), q = (ee) => l.value.reduce((S, O, D) => S + (D > ee + 1 ? O.size : 0), 0), L = (ee) => [...l.value].reverse().find((S) => S.index < ee && S.size > S.min) || {}, V = (ee) => l.value.find((S) => S.index > ee + 1 && S.size > S.min) || {}, J = () => {
      let ee = Array.from(g.value?.children || []);
      for (let S of ee) {
        let O = S.classList.contains("splitpanes__pane"), D = S.classList.contains("splitpanes__splitter");
        !O && !D && (S.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ne = (ee, S, O = !1) => {
      let D = ee - 1, B = document.createElement("div");
      B.classList.add("splitpanes__splitter"), O || (B.onmousedown = (U) => $(U, D), typeof window < "u" && "ontouchstart" in window && (B.ontouchstart = (U) => $(U, D)), B.onclick = (U) => P(U, D + 1), n.keyboardStep && (B.setAttribute("tabindex", "0"), B.setAttribute("role", "separator"), B.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), B.onkeydown = (U) => ve(U, D))), B.ondblclick = (U) => I(U, D + 1), S.parentNode.insertBefore(B, S);
    }, Y = (ee) => {
      ee.onmousedown = null, ee.onclick = null, ee.ondblclick = null, ee.onkeydown = null, ee.remove();
    }, pe = () => {
      let ee = Array.from(g.value?.children || []);
      for (let O of ee) O.className.includes("splitpanes__splitter") && Y(O);
      let S = 0;
      for (let O of ee) O.className.includes("splitpanes__pane") && (!S && n.firstSplitter ? ne(S, O, !0) : S && ne(S, O), S++);
    }, Se = ({ uid: ee, ...S }) => {
      let O = d.value[ee];
      for (let [D, B] of Object.entries(S)) O[D] = B;
    }, Le = !1, Oe = (ee) => {
      let S = -1;
      Array.from(g.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && S++, O.isSameNode(ee.el))), l.value.splice(S, 0, {
        ...ee,
        index: S
      }), l.value.forEach((O, D) => O.index = D), v.value && !Le && (Le = !0, Rt(() => {
        pe(), Xe({ addedPane: l.value[S] }), De("pane-add", { pane: l.value[S] }), Le = !1;
      }));
    }, Me = (ee) => {
      let S = l.value.findIndex((D) => D.id === ee);
      l.value[S].el = null;
      let O = l.value.splice(S, 1)[0];
      l.value.forEach((D, B) => D.index = B), Rt(() => {
        pe(), De("pane-remove", { pane: O }), Xe({ removedPane: {
          ...O
        } });
      });
    }, Xe = (ee = {}) => {
      !ee.addedPane && !ee.removedPane ? ye() : l.value.some((S) => S.givenSize !== null || S.min || S.max < 100) ? Re(ee) : pt(), v.value && De("resized");
    }, pt = () => {
      let ee = 100 / c.value, S = 100, O = [], D = [];
      for (let B of l.value) B.size = Math.max(Math.min(ee, B.max), B.min), S -= B.size, B.size >= B.max && O.push(B.id), B.size <= B.min && D.push(B.id);
      Math.abs(S) > 0.1 && me(S, O, D);
    }, ye = () => {
      let ee = 100, S = [], O = [], D = 0;
      for (let U of l.value) ee -= U.size, U.givenSize !== null && D++, U.size >= U.max && S.push(U.id), U.size <= U.min && O.push(U.id);
      let B = 100;
      if (ee > 0.1) {
        for (let U of l.value) U.givenSize === null && (U.size = Math.max(Math.min(ee / (c.value - D), U.max), U.min)), B -= U.size;
        B > 0.1 && me(B, S, O);
      }
    }, Re = ({ addedPane: ee, removedPane: S } = {}) => {
      let O = l.value.reduce((le, fe) => le + (fe.givenSize === null ? 0 : fe.givenSize), 0), D = l.value.filter((le) => le.givenSize === null).length, B = D > 0 ? (100 - O) / D : 0, U = 0, X = [], te = [];
      for (let le of l.value) U -= le.size, le.size >= le.max && X.push(le.id), le.size <= le.min && te.push(le.id);
      if (!(Math.abs(U) < 0.1)) {
        U = 100;
        for (let le of l.value) le.givenSize === null && (le.size = Math.max(Math.min(B, le.max), le.min)), U -= le.size, le.size >= le.max && X.push(le.id), le.size <= le.min && te.push(le.id);
        Math.abs(U) > 0.1 && me(U, X, te);
      }
    }, me = (ee, S, O) => {
      let D;
      D = ee > 0 ? ee / (c.value - S.length) : ee / (c.value - O.length), l.value.forEach((B, U) => {
        if (ee > 0 && !S.includes(B.id)) {
          let X = Math.max(Math.min(B.size + D, B.max), B.min), te = X - B.size;
          ee -= te, B.size = X;
        } else if (!O.includes(B.id)) {
          let X = Math.max(Math.min(B.size + D, B.max), B.min), te = X - B.size;
          ee -= te, B.size = X;
        }
      }), Math.abs(ee) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (ee, S = void 0, O = !1) => {
      let D = S?.index ?? m.value.activeSplitter ?? null;
      i(ee, {
        ...S,
        ...D !== null && { index: D },
        ...O && D !== null && {
          prevPane: l.value[D - +!!n.firstSplitter],
          nextPane: l.value[D + +!n.firstSplitter]
        },
        panes: l.value.map((B) => ({
          min: B.min,
          max: B.max,
          size: B.size
        }))
      });
    };
    qe(() => n.firstSplitter, () => pe()), qe(() => n.horizontal, (ee) => Rt(() => {
      i("direction-changed", {
        horizontal: ee,
        panes: l.value.map((S) => ({
          min: S.min,
          max: S.max,
          size: S.size
        }))
      });
    })), xt(() => {
      J(), pe(), Xe(), De("ready"), v.value = !0;
    }), Ti(() => v.value = !1);
    let ut = () => {
      let { class: ee, ...S } = a;
      return ci("div", {
        ref: g,
        class: [k.value, ee],
        ...S
      }, r.default?.());
    };
    return Ii("panes", l), Ii("indexedPanes", d), Ii("horizontal", z(() => n.horizontal)), Ii("requestUpdate", Se), Ii("onPaneAdd", Oe), Ii("onPaneRemove", Me), Ii("onPaneClick", Q), (ee, S) => (p(), Pe(xd(ut)));
  }
}), s0 = {
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
    let t = e, i = Yt("requestUpdate"), n = Yt("onPaneAdd"), a = Yt("horizontal"), r = Yt("onPaneRemove"), l = Yt("onPaneClick"), d = Sa()?.uid, c = Yt("indexedPanes"), g = z(() => c.value[d]), v = /* @__PURE__ */ G(null), m = z(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), y.value);
    }), y = z(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = z(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), T = z(() => {
      let C = g.value?.size ?? (t.size === void 0 ? void 0 : m.value);
      return C === void 0 ? "" : `${a.value ? "height" : "width"}: ${C}%`;
    });
    return qe(() => m.value, (C) => i({
      uid: d,
      size: C
    })), qe(() => y.value, (C) => i({
      uid: d,
      min: C
    })), qe(() => k.value, (C) => i({
      uid: d,
      max: C
    })), xt(() => {
      n({
        id: d,
        el: v.value,
        min: y.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : m.value,
        size: m.value
      });
    }), Ti(() => r(d)), (C, $) => (p(), h("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: $[0] ||= (N) => u(l)(N, C._.uid),
      style: pi(T.value)
    }, [Be(C.$slots, "default")], 4));
  }
}, o0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", u0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", c0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", d0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Fd = 1024, gb = Fd / 2, vo = (e) => document.documentElement.clientWidth < e, mb = /* @__PURE__ */ G(vo(Fd)), yb = /* @__PURE__ */ G(vo(gb));
window.addEventListener("resize", () => {
  mb.value = vo(Fd), yb.value = vo(gb);
}, { passive: !0 });
function cs() {
  return /* @__PURE__ */ zl(mb);
}
function f0() {
  return /* @__PURE__ */ zl(yb);
}
class p0 {
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
    return w("", t, i, void 0, { bundle: this.bundle });
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
    return fi("", t, i, n, a, { bundle: this.bundle });
  }
}
class h0 {
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
    return this.setLanguage(us().replace("-", "_"));
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
    const t = new p0((i) => M_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function v0() {
  return new h0();
}
const _b = v0().detectLanguage().build(), Lt = (...e) => _b.gettext(...e);
function Ca(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== us() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, l]) => [
          r,
          {
            msgid: r,
            msgid_plural: l.p,
            msgstr: l.v
          }
        ]));
        _b.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const b0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], g0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], m0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], y0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], _0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], w0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], k0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], S0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], C0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const T0 = /* @__PURE__ */ Symbol(""), [A0] = window.OC?.config?.version?.split(".") ?? [], wb = Number.parseInt(A0 ?? "35"), E0 = wb < 32, Ta = wb < 34, $0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function x0() {
  return Yt($0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ot = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, O0 = { class: "button-vue__wrapper" }, N0 = { class: "button-vue__icon" }, R0 = { class: "button-vue__text" }, I0 = /* @__PURE__ */ Ht({
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
    const i = e, n = t, { formBoxItemClass: a } = x0(), r = Yt(T0, null) !== null, l = z(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), d = z(() => l.value === "button" && typeof i.pressed == "boolean"), c = z(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), g = z(() => c.value.startsWith("tertiary")), v = z(() => i.alignment.split("-")[0]), m = z(() => i.alignment.includes("-")), y = Yt("NcPopover:trigger:attrs", () => ({}), !1), k = z(() => y()), T = z(() => {
      if (l.value === "RouterLink")
        return {
          to: i.to,
          activeClass: "active"
        };
      if (l.value === "a")
        return {
          href: i.href || "#",
          target: i.target,
          rel: "nofollow noreferrer noopener",
          download: i.download || void 0
        };
      if (l.value === "button")
        return {
          ...k.value,
          "aria-pressed": i.pressed,
          type: i.type,
          disabled: i.disabled
        };
    });
    function C($) {
      d.value && n("update:pressed", !i.pressed), n("click", $);
    }
    return ($, N) => (p(), Pe(xd(l.value), Qt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${c.value}`]: c.value,
          "button-vue--tertiary": g.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": m.value,
          "button-vue--legacy": u(E0),
          "button-vue--legacy34": u(Ta)
        },
        u(a)
      ]],
      "aria-label": e.ariaLabel
    }, T.value, { onClick: C }), {
      default: we(() => [
        s("span", O0, [
          s("span", N0, [
            Be($.$slots, "icon", {}, void 0, !0)
          ]),
          s("span", R0, [
            Be($.$slots, "default", {}, () => [
              ie(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), on = /* @__PURE__ */ ot(I0, [["__scopeId", "data-v-47ce59a3"]]), L0 = ["aria-hidden", "aria-label"], P0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, D0 = ["d"], F0 = ["innerHTML"], M0 = /* @__PURE__ */ Ht({
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
    O1((a) => ({
      fb515064: i.value
    }));
    const t = e, i = z(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = z(() => {
      if (!t.svg || t.path)
        return;
      const a = sb.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (p(), h("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (p(), h("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, F0)) : (p(), h("svg", P0, [
        s("path", { d: e.path }, null, 8, D0)
      ]))
    ], 10, L0));
  }
}), bu = /* @__PURE__ */ ot(M0, [["__scopeId", "data-v-aaedb1c3"]]);
z0();
function U0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Fn("csrf-token-update", { token: e, _internal: !0 }));
}
function z0() {
  hb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || U0(e);
  });
}
cb("public").persist().build();
let yr;
function Qp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function j0() {
  if (yr !== void 0)
    return yr;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Qp(e, "data-user");
  return t === null ? (yr = null, yr) : (yr = {
    uid: t,
    displayName: Qp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, yr);
}
var Et = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(Et || {});
class B0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + Et[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === Et.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case Et.Debug:
          console.debug(this.formatMessage(i, Et.Debug, n), n);
          break;
        case Et.Info:
          console.info(this.formatMessage(i, Et.Info, n), n);
          break;
        case Et.Warn:
          console.warn(this.formatMessage(i, Et.Warn, n), n);
          break;
        case Et.Error:
          console.error(this.formatMessage(i, Et.Error, n), n);
          break;
        case Et.Fatal:
        default:
          console.error(this.formatMessage(i, Et.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(Et.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(Et.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(Et.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(Et.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(Et.Fatal, t, Object.assign({}, this.context, i));
  }
}
function H0(e) {
  return new B0(e);
}
class V0 {
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
    const t = j0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? Et.Warn, window._oc_debug && (t.context.level = Et.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function q0() {
  return new V0(H0);
}
const ir = q0().detectUser().setApp("@nextcloud/vue").build();
function G0(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let kb = "missing-app-name";
try {
  kb = "library";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const K0 = kb;
let W0 = "";
try {
  W0 = "0.3.0-alpha.1";
} catch {
  ir.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Sb() {
  return Yt("appName", K0);
}
const Y0 = G0(() => {
  const e = fo("core", "apps", []), t = Sb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Yc = F_();
Ca(k0);
const Z0 = /* @__PURE__ */ Ht({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cs();
    qe(t, i), xt(() => {
      i(t.value);
    }), Ti(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && Fn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (p(), Pe(u(on), {
      "aria-label": u(Lt)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Lt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: we(() => [
        de(u(bu), {
          directional: "",
          path: u(o0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), X0 = /* @__PURE__ */ ot(Z0, [["__scopeId", "data-v-a28923a1"]]), eh = cb("nextcloud").persist().build(), J0 = j_().theming?.name ?? "Nextcloud", Q0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: X0,
    Pane: s0,
    Splitpanes: l0
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
      appName: Sb(),
      localizedAppName: Y0(),
      isMobile: cs(),
      isRtl: Yc
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
        return ir.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(J0), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = r0(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Fn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Fn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      eh.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ir.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(eh.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ir.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, ew = {
  key: 0,
  class: "hidden-visually"
}, tw = { class: "app-content-wrapper__list" }, iw = {
  key: 1,
  class: "app-content-wrapper"
};
function nw(e, t, i, n, a, r) {
  const l = Ze("NcAppContentDetailsToggle"), d = Ze("Pane"), c = Ze("Splitpanes");
  return p(), h("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (p(), h("h1", ew, o(i.pageHeading), 1)) : E("", !0),
    e.$slots.list ? (p(), h(W, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (p(), h("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (p(), Pe(l, {
          key: 0,
          onClick: ke(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : E("", !0),
        ge(s("div", tw, [
          Be(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [tr, !i.showDetails]
        ]),
        i.showDetails ? Be(e.$slots, "default", { key: 1 }, void 0, !0) : E("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (p(), h("div", iw, [
        de(c, {
          horizontal: i.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: we(() => [
            de(d, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: we(() => [
                Be(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            de(d, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: we(() => [
                Be(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : E("", !0)
    ], 64)) : E("", !0),
    e.$slots.list ? E("", !0) : Be(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const aw = /* @__PURE__ */ ot(Q0, [["render", nw], ["__scopeId", "data-v-51427d61"]]);
var Cb = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], bo = /* @__PURE__ */ Cb.join(","), Tb = typeof Element > "u", nr = Tb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, go = !Tb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, mo = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", l = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : mo(t.parentNode));
  return l;
}, rw = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Ab = function(t, i, n) {
  if (mo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(bo));
  return i && nr.call(t, bo) && a.unshift(t), a = a.filter(n), a;
}, yo = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var l = r.shift();
    if (!mo(l, !1))
      if (l.tagName === "SLOT") {
        var d = l.assignedElements(), c = d.length ? d : l.children, g = yo(c, !0, n);
        n.flatten ? a.push.apply(a, g) : a.push({
          scopeParent: l,
          candidates: g
        });
      } else {
        var v = nr.call(l, bo);
        v && n.filter(l) && (i || !t.includes(l)) && a.push(l);
        var m = l.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(l), y = !mo(m, !1) && (!n.shadowRootFilter || n.shadowRootFilter(l));
        if (m && y) {
          var k = yo(m === !0 ? l.children : m.children, !0, n);
          n.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: l,
            candidates: k
          });
        } else
          r.unshift.apply(r, l.children);
      }
  }
  return a;
}, Eb = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Za = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || rw(t)) && !Eb(t) ? 0 : t.tabIndex;
}, lw = function(t, i) {
  var n = Za(t);
  return n < 0 && i && !Eb(t) ? 0 : n;
}, sw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, $b = function(t) {
  return t.tagName === "INPUT";
}, ow = function(t) {
  return $b(t) && t.type === "hidden";
}, uw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, cw = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, dw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || go(t), n = function(d) {
    return i.querySelectorAll('input[type="radio"][name="' + d + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (l) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", l.message), !1;
    }
  var r = cw(a, t.form);
  return !r || r === t;
}, fw = function(t) {
  return $b(t) && t.type === "radio";
}, pw = function(t) {
  return fw(t) && !dw(t);
}, hw = function(t) {
  var i, n = t && go(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var l, d, c;
    for (r = !!((l = a) !== null && l !== void 0 && (d = l.ownerDocument) !== null && d !== void 0 && d.contains(a) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !r && a; ) {
      var g, v, m;
      n = go(a), a = (g = n) === null || g === void 0 ? void 0 : g.host, r = !!((v = a) !== null && v !== void 0 && (m = v.ownerDocument) !== null && m !== void 0 && m.contains(a));
    }
  }
  return r;
}, th = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, vw = function(t, i) {
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
  var l = getComputedStyle(t), d = l.visibility;
  if (d === "hidden" || d === "collapse")
    return !0;
  var c = nr.call(t, "details>summary:first-of-type"), g = c ? t.parentElement : t;
  if (nr.call(g, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var v = t; t; ) {
        var m = t.parentElement, y = go(t);
        if (m && !m.shadowRoot && a(m) === !0)
          return th(t);
        t.assignedSlot ? t = t.assignedSlot : !m && y !== t.ownerDocument ? t = y.host : t = m;
      }
      t = v;
    }
    if (hw(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return th(t);
  return !1;
}, bw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return nr.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, _o = function(t, i) {
  return !(i.disabled || ow(i) || vw(i, t) || // For a details element with a summary, the summary element gets the focus
  uw(i) || bw(i));
}, Zc = function(t, i) {
  return !(pw(i) || Za(i) < 0 || !_o(t, i));
}, gw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, xb = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var l = !!a.scopeParent, d = l ? a.scopeParent : a, c = lw(d, l), g = l ? xb(a.candidates) : d;
    c === 0 ? l ? i.push.apply(i, g) : i.push(d) : n.push({
      documentOrder: r,
      tabIndex: c,
      item: a,
      isScope: l,
      content: g
    });
  }), n.sort(sw).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, mw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = yo([t], i.includeContainer, {
    filter: Zc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: gw
  }) : n = Ab(t, i.includeContainer, Zc.bind(null, i)), xb(n);
}, yw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = yo([t], i.includeContainer, {
    filter: _o.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Ab(t, i.includeContainer, _o.bind(null, i)), n;
}, _r = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return nr.call(t, bo) === !1 ? !1 : Zc(i, t);
}, _w = /* @__PURE__ */ Cb.concat("iframe:not([inert]):not([inert] *)").join(","), Sc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return nr.call(t, _w) === !1 ? !1 : _o(i, t);
};
function Xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function ww(e) {
  if (Array.isArray(e)) return Xc(e);
}
function ih(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = Ob(e)) || t) {
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
        e: function(c) {
          throw c;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, l = !0, d = !1;
  return {
    s: function() {
      i = i.call(e);
    },
    n: function() {
      var c = i.next();
      return l = c.done, c;
    },
    e: function(c) {
      d = !0, r = c;
    },
    f: function() {
      try {
        l || i.return == null || i.return();
      } finally {
        if (d) throw r;
      }
    }
  };
}
function kw(e, t, i) {
  return (t = Ew(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function Sw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Cw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nh(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function ah(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nh(Object(i), !0).forEach(function(n) {
      kw(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nh(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Tw(e) {
  return ww(e) || Sw(e) || Ob(e) || Cw();
}
function Aw(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ew(e) {
  var t = Aw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ob(e, t) {
  if (e) {
    if (typeof e == "string") return Xc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Xc(e, t) : void 0;
  }
}
var In = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = In.getActiveTrap(t);
    i !== n && In.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), In.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = In.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = In.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, $w = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, xw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, El = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Ow = function(t) {
  return El(t) && !t.shiftKey;
}, Nw = function(t) {
  return El(t) && t.shiftKey;
}, rh = function(t) {
  return setTimeout(t, 0);
}, hl = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, js = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Rw = [], Md = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || Rw, r = ah({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Ow,
    isKeyBackward: Nw
  }, i), l = {
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
  }, d, c = function(L, V, J) {
    return L && L[V] !== void 0 ? L[V] : r[J || V];
  }, g = function(L, V) {
    var J = typeof V?.composedPath == "function" ? V.composedPath() : void 0;
    return l.containerGroups.findIndex(function(ne) {
      var Y = ne.container, pe = ne.tabbableNodes;
      return Y.contains(L) || J?.includes(Y) || pe.find(function(Se) {
        return Se === L;
      });
    });
  }, v = function(L) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, J = V.hasFallback, ne = J === void 0 ? !1 : J, Y = V.params, pe = Y === void 0 ? [] : Y, Se = r[L];
    if (typeof Se == "function" && (Se = Se.apply(void 0, Tw(pe))), Se === !0 && (Se = void 0), !Se) {
      if (Se === void 0 || Se === !1)
        return Se;
      throw new Error("`".concat(L, "` was specified but was not a node, or did not return a node"));
    }
    var Le = Se;
    if (typeof Se == "string") {
      try {
        Le = n.querySelector(Se);
      } catch (Oe) {
        throw new Error("`".concat(L, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !ne)
        throw new Error("`".concat(L, "` as selector refers to no known node"));
    }
    return Le;
  }, m = function(L) {
    var V = L.activeElement;
    return V ? V.shadowRoot && V.shadowRoot.activeElement !== null ? m(V.shadowRoot) : V : null;
  }, y = function() {
    var L = v("initialFocus", {
      hasFallback: !0
    });
    if (L === !1)
      return !1;
    if (L === void 0 || L && !Sc(L, r.tabbableOptions)) {
      var V = m(n);
      if (g(V) >= 0)
        L = V;
      else {
        var J = l.tabbableGroups[0], ne = J && J.firstTabbableNode;
        L = ne || v("fallbackFocus");
      }
    } else L === null && (L = v("fallbackFocus"));
    if (!L)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return L;
  }, k = function() {
    if (l.containerGroups = l.containers.map(function(L) {
      var V = mw(L, r.tabbableOptions), J = yw(L, r.tabbableOptions), ne = V.length > 0 ? V[0] : void 0, Y = V.length > 0 ? V[V.length - 1] : void 0, pe = J.find(function(Oe) {
        return _r(Oe);
      }), Se = J.slice().reverse().find(function(Oe) {
        return _r(Oe);
      }), Le = !!V.find(function(Oe) {
        return Za(Oe) > 0;
      });
      return {
        container: L,
        tabbableNodes: V,
        focusableNodes: J,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Le,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ne,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: Y,
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
        lastDomTabbableNode: Se,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Me) {
          var Xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, pt = V.indexOf(Me);
          return pt < 0 ? Xe ? J.slice(J.indexOf(Me) + 1).find(function(ye) {
            return _r(ye);
          }) : J.slice(0, J.indexOf(Me)).reverse().find(function(ye) {
            return _r(ye);
          }) : V[pt + (Xe ? 1 : -1)];
        }
      };
    }), l.tabbableGroups = l.containerGroups.filter(function(L) {
      return L.tabbableNodes.length > 0;
    }), l.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (l.containerGroups.find(function(L) {
      return L.posTabIndexesFound;
    }) && l.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, T = function(L) {
    if (L !== !1 && L !== m(document)) {
      if (!L || !L.focus) {
        T(y());
        return;
      }
      L.focus({
        preventScroll: !!r.preventScroll
      }), l.mostRecentlyFocusedNode = L, $w(L) && L.select();
    }
  }, C = function(L) {
    var V = v("setReturnFocus", {
      params: [L]
    });
    return V || (V === !1 ? !1 : L);
  }, $ = function(L) {
    var V = L.target, J = L.event, ne = L.isBackward, Y = ne === void 0 ? !1 : ne;
    V = V || js(J), k();
    var pe = null;
    if (l.tabbableGroups.length > 0) {
      var Se = g(V, J), Le = Se >= 0 ? l.containerGroups[Se] : void 0;
      if (Se < 0)
        Y ? pe = l.tabbableGroups[l.tabbableGroups.length - 1].lastTabbableNode : pe = l.tabbableGroups[0].firstTabbableNode;
      else if (Y) {
        var Oe = l.tabbableGroups.findIndex(function(me) {
          var De = me.firstTabbableNode;
          return V === De;
        });
        if (Oe < 0 && (Le.container === V || Sc(V, r.tabbableOptions) && !_r(V, r.tabbableOptions) && !Le.nextTabbableNode(V, !1)) && (Oe = Se), Oe >= 0) {
          var Me = Oe === 0 ? l.tabbableGroups.length - 1 : Oe - 1, Xe = l.tabbableGroups[Me];
          pe = Za(V) >= 0 ? Xe.lastTabbableNode : Xe.lastDomTabbableNode;
        } else El(J) || (pe = Le.nextTabbableNode(V, !1));
      } else {
        var pt = l.tabbableGroups.findIndex(function(me) {
          var De = me.lastTabbableNode;
          return V === De;
        });
        if (pt < 0 && (Le.container === V || Sc(V, r.tabbableOptions) && !_r(V, r.tabbableOptions) && !Le.nextTabbableNode(V)) && (pt = Se), pt >= 0) {
          var ye = pt === l.tabbableGroups.length - 1 ? 0 : pt + 1, Re = l.tabbableGroups[ye];
          pe = Za(V) >= 0 ? Re.firstTabbableNode : Re.firstDomTabbableNode;
        } else El(J) || (pe = Le.nextTabbableNode(V));
      }
    } else
      pe = v("fallbackFocus");
    return pe;
  }, N = function(L) {
    var V = js(L);
    if (!(g(V, L) >= 0)) {
      if (hl(r.clickOutsideDeactivates, L)) {
        d.deactivate({
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
      hl(r.allowOutsideClick, L) || L.preventDefault();
    }
  }, R = function(L) {
    var V = js(L), J = g(V, L) >= 0;
    if (J || V instanceof Document)
      J && (l.mostRecentlyFocusedNode = V);
    else {
      L.stopImmediatePropagation();
      var ne, Y = !0;
      if (l.mostRecentlyFocusedNode)
        if (Za(l.mostRecentlyFocusedNode) > 0) {
          var pe = g(l.mostRecentlyFocusedNode), Se = l.containerGroups[pe].tabbableNodes;
          if (Se.length > 0) {
            var Le = Se.findIndex(function(Oe) {
              return Oe === l.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(l.recentNavEvent) ? Le + 1 < Se.length && (ne = Se[Le + 1], Y = !1) : Le - 1 >= 0 && (ne = Se[Le - 1], Y = !1));
          }
        } else
          l.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Me) {
              return Za(Me) > 0;
            });
          }) || (Y = !1);
      else
        Y = !1;
      Y && (ne = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: l.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(l.recentNavEvent)
      })), T(ne || l.mostRecentlyFocusedNode || y());
    }
    l.recentNavEvent = void 0;
  }, P = function(L) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    l.recentNavEvent = L;
    var J = $({
      event: L,
      isBackward: V
    });
    J && (El(L) && L.preventDefault(), T(J));
  }, I = function(L) {
    (r.isKeyForward(L) || r.isKeyBackward(L)) && P(L, r.isKeyBackward(L));
  }, ve = function(L) {
    xw(L) && hl(r.escapeDeactivates, L) !== !1 && (L.preventDefault(), d.deactivate());
  }, Q = function(L) {
    var V = js(L);
    g(V, L) >= 0 || hl(r.clickOutsideDeactivates, L) || hl(r.allowOutsideClick, L) || (L.preventDefault(), L.stopImmediatePropagation());
  }, x = function() {
    if (l.active) {
      In.activateTrap(a, d);
      var L;
      return r.delayInitialFocus ? L = new Promise(function(V) {
        l.delayInitialFocusTimer = rh(function() {
          T(y()), V();
        });
      }) : T(y()), n.addEventListener("focusin", R, !0), n.addEventListener("mousedown", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", ve), L;
    }
  }, H = function(L) {
    l.active && !l.paused && d._setSubtreeIsolation(!1), l.adjacentElements.clear(), l.alreadySilent.clear();
    var V = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ne = ih(L), Y;
    try {
      for (ne.s(); !(Y = ne.n()).done; ) {
        var pe = Y.value;
        V.add(pe);
        for (var Se = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, Le = pe; Le; ) {
          V.add(Le);
          var Oe = Le.parentElement, Me = [];
          Oe ? Me = Oe.children : !Oe && Se && (Me = Le.getRootNode().children, Oe = Le.getRootNode().host, Se = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Xe = ih(Me), pt;
          try {
            for (Xe.s(); !(pt = Xe.n()).done; ) {
              var ye = pt.value;
              J.add(ye);
            }
          } catch (Re) {
            Xe.e(Re);
          } finally {
            Xe.f();
          }
          Le = Oe;
        }
      }
    } catch (Re) {
      ne.e(Re);
    } finally {
      ne.f();
    }
    V.forEach(function(Re) {
      J.delete(Re);
    }), l.adjacentElements = J;
  }, K = function() {
    if (l.active)
      return n.removeEventListener("focusin", R, !0), n.removeEventListener("mousedown", N, !0), n.removeEventListener("touchstart", N, !0), n.removeEventListener("click", Q, !0), n.removeEventListener("keydown", I, !0), n.removeEventListener("keydown", ve), d;
  }, Z = function(L) {
    var V = l.mostRecentlyFocusedNode;
    if (V) {
      var J = L.some(function(Y) {
        var pe = Array.from(Y.removedNodes);
        return pe.some(function(Se) {
          return Se === V || typeof Se.contains == "function" && Se.contains(V);
        });
      });
      if (J && l.containers.some(function(Y) {
        return Y?.isConnected;
      })) {
        k();
        var ne = y();
        T(ne);
      }
    }
  }, ae = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Z) : void 0, j = function() {
    ae && (ae.disconnect(), l.active && !l.paused && l.containers.map(function(L) {
      ae.observe(L, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return d = {
    get active() {
      return l.active;
    },
    get paused() {
      return l.paused;
    },
    activate: function(L) {
      if (l.active)
        return this;
      var V = c(L, "onActivate"), J = c(L, "onPostActivate"), ne = c(L, "checkCanFocusTrap"), Y = In.getActiveTrap(a), pe = !1;
      if (Y && !Y.paused) {
        var Se;
        (Se = Y._setSubtreeIsolation) === null || Se === void 0 || Se.call(Y, !1), pe = !0;
      }
      try {
        ne || k(), l.active = !0, l.paused = !1, l.nodeFocusedBeforeActivation = m(n), V?.({
          trap: d
        });
        var Le = function() {
          ne && k();
          var Xe = function() {
            d._setSubtreeIsolation(!0), j(), J?.({
              trap: d
            });
          }, pt = x();
          pt ? pt.then(Xe) : Xe();
        };
        if (ne)
          return ne(l.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Me) {
        if (Y === In.getActiveTrap(a) && pe) {
          var Oe;
          (Oe = Y._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(Y, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(L) {
      if (!l.active)
        return this;
      var V = ah({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, L);
      clearTimeout(l.delayInitialFocusTimer), l.delayInitialFocusTimer = void 0, l.paused || d._setSubtreeIsolation(!1), l.alreadySilent.clear(), K(), l.active = !1, l.paused = !1, j(), In.deactivateTrap(a, d);
      var J = c(V, "onDeactivate"), ne = c(V, "onPostDeactivate"), Y = c(V, "checkCanReturnFocus"), pe = c(V, "delayReturnFocus"), Se = c(V, "returnFocus", "returnFocusOnDeactivate");
      J?.({
        trap: d
      });
      var Le = function() {
        Se && T(C(l.nodeFocusedBeforeActivation)), ne?.({
          trap: d
        });
      }, Oe = function() {
        pe && Se ? rh(Le) : Le();
      };
      return Se && Y ? (Y(C(l.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(L) {
      return l.active ? (l.manuallyPaused = !0, this._setPausedState(!0, L)) : this;
    },
    unpause: function(L) {
      return l.active ? (l.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, L)) : this;
    },
    updateContainerElements: function(L) {
      var V = [].concat(L).filter(Boolean);
      return l.containers = V.map(function(J) {
        return typeof J == "string" ? n.querySelector(J) : J;
      }), r.isolateSubtrees && H(l.containers), l.active && (k(), l.paused || d._setSubtreeIsolation(!0)), j(), this;
    }
  }, Object.defineProperties(d, {
    _isManuallyPaused: {
      value: function() {
        return l.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(L, V) {
        if (l.paused === L)
          return this;
        if (l.paused = L, L) {
          var J = c(V, "onPause"), ne = c(V, "onPostPause");
          J?.({
            trap: d
          }), K(), d._setSubtreeIsolation(!1), j(), ne?.({
            trap: d
          });
        } else {
          var Y = c(V, "onUnpause"), pe = c(V, "onPostUnpause");
          Y?.({
            trap: d
          });
          var Se = function() {
            k();
            var Oe = function() {
              d._setSubtreeIsolation(!0), j(), pe?.({
                trap: d
              });
            }, Me = x();
            Me ? Me.then(Oe) : Oe();
          };
          Se();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(L) {
        r.isolateSubtrees && l.adjacentElements.forEach(function(V) {
          var J;
          L ? r.isolateSubtrees === "aria-hidden" ? ((V.ariaHidden === "true" || ((J = V.getAttribute("aria-hidden")) === null || J === void 0 ? void 0 : J.toLowerCase()) === "true") && l.alreadySilent.add(V), V.setAttribute("aria-hidden", "true")) : ((V.inert || V.hasAttribute("inert")) && l.alreadySilent.add(V), V.setAttribute("inert", !0)) : l.alreadySilent.has(V) || (r.isolateSubtrees === "aria-hidden" ? V.removeAttribute("aria-hidden") : V.removeAttribute("inert"));
        });
      }
    }
  }), d.updateContainerElements(t), d;
};
const Nb = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Iw = /* @__PURE__ */ Ht({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Nb]: {
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
function Lw(e, t, i, n, a, r) {
  return p(), h("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...l) => e.hideNow && e.hideNow(...l)),
    onFocusout: t[1] || (t[1] = (...l) => e.onFocusOut && e.onFocusOut(...l)),
    onScrollPassive: t[2] || (t[2] = (...l) => e.onScroll && e.onScroll(...l))
  }, [
    s("div", {
      class: Te(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: pi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Be(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Rb = /* @__PURE__ */ ot(Iw, [["render", Lw], ["__scopeId", "data-v-3e73e246"]]);
function Zl() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Pw() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Zl()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Zl().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Ib = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Lb = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ca(y0);
const Dw = { class: "app-navigation-toggle-wrapper" }, Fw = /* @__PURE__ */ Ht({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Ov(e, "open"), i = z(() => t.value ? Lt("Close navigation") : Lt("Open navigation"));
    return (n, a) => (p(), h("div", Dw, [
      de(u(on), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: we(() => [
          de(bu, {
            path: u(d0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Mw = /* @__PURE__ */ ot(Fw, [["__scopeId", "data-v-e8177cc7"]]), Uw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], zw = { class: "app-navigation__search" }, jw = /* @__PURE__ */ Ht({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Yt(
      Ib,
      () => m1(),
      !1
    ), a = Cy("appNavigationContainer"), r = cs(), l = /* @__PURE__ */ G(!r.value), d = z(() => r.value && l.value);
    hy(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      l.value = !r.value;
    }), qe(d, () => {
      v();
    }), xt(() => {
      n(!0), hb("toggle-navigation", g), Fn("navigation-toggled", {
        open: l.value
      }), i = Md(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), c(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Zl(),
        escapeDeactivates: !1
      }), v();
    }), ls(() => {
      n(!1), Q_("toggle-navigation", g), i.deactivate();
    });
    function c(y) {
      if (l.value === y) {
        Fn("navigation-toggled", {
          open: l.value
        });
        return;
      }
      l.value = y === void 0 ? !l.value : y;
      const k = getComputedStyle(document.body), T = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Fn("navigation-toggled", {
          open: l.value
        });
      }, 1.5 * T);
    }
    function g({ open: y }) {
      return c(y);
    }
    function v() {
      d.value ? i.activate() : i.deactivate();
    }
    function m() {
      r.value && c(!1);
    }
    return (y, k) => (p(), h("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !l.value,
        "app-navigation--legacy": u(Ta)
      }])
    }, [
      s("nav", {
        id: "app-navigation-vue",
        "aria-hidden": l.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !l.value || void 0,
        onKeydown: ft(m, ["esc"])
      }, [
        s("div", zw, [
          Be(y.$slots, "search", {}, void 0, !0)
        ]),
        s("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !y.$slots.list }])
        }, [
          Be(y.$slots, "default", {}, void 0, !0)
        ], 2),
        y.$slots.list ? (p(), Pe(Rb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: we(() => [
            Be(y.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : E("", !0),
        Be(y.$slots, "footer", {}, void 0, !0)
      ], 40, Uw),
      de(Mw, {
        open: l.value,
        "onUpdate:open": c
      }, null, 8, ["open"])
    ], 2));
  }
}), Bw = /* @__PURE__ */ ot(jw, [["__scopeId", "data-v-37908cd4"]]), Hw = {
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
}, Vw = ["aria-hidden", "aria-label"], qw = ["fill", "width", "height"], Gw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Kw = { key: 0 };
function Ww(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", Gw, [
        i.title ? (p(), h("title", Kw, o(i.title), 1)) : E("", !0)
      ])
    ], 8, qw))
  ], 16, Vw);
}
const Yw = /* @__PURE__ */ ot(Hw, [["render", Ww]]), Zw = {
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
}, Xw = ["aria-hidden", "aria-label"], Jw = ["fill", "width", "height"], Qw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, ek = { key: 0 };
function tk(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", Qw, [
        i.title ? (p(), h("title", ek, o(i.title), 1)) : E("", !0)
      ])
    ], 8, Jw))
  ], 16, Xw);
}
const ik = /* @__PURE__ */ ot(Zw, [["render", tk]]), nk = {
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
}, ak = ["aria-hidden", "aria-label"], rk = ["fill", "width", "height"], lk = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, sk = { key: 0 };
function ok(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", lk, [
        i.title ? (p(), h("title", sk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, rk))
  ], 16, ak);
}
const Pb = /* @__PURE__ */ ot(nk, [["render", ok]]), uk = {
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
}, ck = ["aria-hidden", "aria-label"], dk = ["fill", "width", "height"], fk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, pk = { key: 0 };
function hk(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", fk, [
        i.title ? (p(), h("title", pk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, dk))
  ], 16, ck);
}
const Db = /* @__PURE__ */ ot(uk, [["render", hk]]);
Ca(g0);
const vk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Pb,
    IconClose: Db,
    NcButton: on
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
    return { isLegacy34: Ta };
  },
  data() {
    return {
      labelConfirm: Lt("Confirm changes"),
      labelCancel: Lt("Cancel changes")
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
}, bk = ["placeholder"];
function gk(e, t, i, n, a, r) {
  const l = Ze("IconArrowRight"), d = Ze("NcButton"), c = Ze("IconClose");
  return p(), h("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    s("form", {
      onSubmit: t[1] || (t[1] = ke((...g) => r.confirm && r.confirm(...g), ["prevent"])),
      onKeydown: t[2] || (t[2] = ft(ke((...g) => r.cancel && r.cancel(...g), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ke(() => {
      }, ["stop", "prevent"]))
    }, [
      ge(s("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (g) => r.valueModel = g),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, bk), [
        [je, r.valueModel]
      ]),
      de(d, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ke(r.confirm, ["stop", "prevent"])
      }, {
        icon: we(() => [
          de(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      de(d, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: ke(r.cancel, ["stop", "prevent"])
      }, {
        icon: we(() => [
          de(c, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const mk = /* @__PURE__ */ ot(vk, [["render", gk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function gu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Ud = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Fb = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), yk = {
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
}, Mb = {
  mixins: [yk],
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
      from: Fb
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
}, _k = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: bu
  },
  mixins: [Mb],
  inject: {
    isInSemanticMenu: {
      from: Ud,
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
      mdiCheck: u0,
      mdiChevronRight: c0
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
}, wk = ["role"], kk = ["aria-label", "disabled", "title", "type"], Sk = { class: "action-button__longtext-wrapper" }, Ck = {
  key: 0,
  class: "action-button__name"
}, Tk = ["textContent"], Ak = {
  key: 2,
  class: "action-button__text"
}, Ek = ["textContent"], $k = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function xk(e, t, i, n, a, r) {
  const l = Ze("NcIconSvgWrapper");
  return p(), h("li", {
    class: Te(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    s("button", Qt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: i.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...d) => r.handleClick && r.handleClick(...d))
    }), [
      Be(e.$slots, "icon", {}, () => [
        s("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      s("span", Sk, [
        e.name ? (p(), h("strong", Ck, o(e.name), 1)) : E("", !0),
        e.isLongText ? (p(), h("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, Tk)) : (p(), h("span", Ak, o(e.text), 1)),
        i.description ? (p(), h("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, Ek)) : E("", !0)
      ]),
      i.isMenu ? (p(), Pe(l, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (p(), Pe(l, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (p(), h("span", $k)) : E("", !0),
      E("", !0)
    ], 16, kk)
  ], 10, wk);
}
const Ok = /* @__PURE__ */ ot(_k, [["render", xk], ["__scopeId", "data-v-6c2daf4e"]]);
function Nk(e, t = {}) {
  const i = Pw();
  qe(e, () => {
    Pn(t.disabled) || (Pn(e) ? i.pause() : i.unpause());
  }), ls(() => {
    i.unpause();
  });
}
const Rk = ["top", "right", "bottom", "left"], lh = ["start", "end"], sh = /* @__PURE__ */ Rk.reduce((e, t) => e.concat(t, t + "-" + lh[0], t + "-" + lh[1]), []), Xl = Math.min, Jc = Math.max, Ik = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ub(e, t, i) {
  return Jc(e, Xl(t, i));
}
function ar(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hn(e) {
  return e.split("-")[0];
}
function Gi(e) {
  return e.split("-")[1];
}
function zb(e) {
  return e === "x" ? "y" : "x";
}
function zd(e) {
  return e === "y" ? "height" : "width";
}
function Ln(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function jd(e) {
  return zb(Ln(e));
}
function jb(e, t, i) {
  i === void 0 && (i = !1);
  const n = Gi(e), a = jd(e), r = zd(a);
  let l = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = ko(l)), [l, ko(l)];
}
function Lk(e) {
  const t = ko(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const oh = ["left", "right"], uh = ["right", "left"], Pk = ["top", "bottom"], Dk = ["bottom", "top"];
function Fk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? uh : oh : t ? oh : uh;
    case "left":
    case "right":
      return t ? Pk : Dk;
    default:
      return [];
  }
}
function Mk(e, t, i, n) {
  const a = Gi(e);
  let r = Fk(Hn(e), i === "start", n);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(wo)))), r;
}
function ko(e) {
  const t = Hn(e);
  return Ik[t] + e.slice(t.length);
}
function Uk(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Bb(e) {
  return typeof e != "number" ? Uk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $l(e) {
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
function ch(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = Ln(t), l = jd(t), d = zd(l), c = Hn(t), g = r === "y", v = n.x + n.width / 2 - a.width / 2, m = n.y + n.height / 2 - a.height / 2, y = n[d] / 2 - a[d] / 2;
  let k;
  switch (c) {
    case "top":
      k = {
        x: v,
        y: n.y - a.height
      };
      break;
    case "bottom":
      k = {
        x: v,
        y: n.y + n.height
      };
      break;
    case "right":
      k = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      k = {
        x: n.x - a.width,
        y: m
      };
      break;
    default:
      k = {
        x: n.x,
        y: n.y
      };
  }
  const T = Gi(t);
  return T && (k[l] += y * (T === "end" ? 1 : -1) * (i && g ? -1 : 1)), k;
}
async function zk(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: l,
    elements: d,
    strategy: c
  } = e, {
    boundary: g = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: m = "floating",
    altBoundary: y = !1,
    padding: k = 0
  } = ar(t, e), T = Bb(k), $ = d[y ? m === "floating" ? "reference" : "floating" : m], N = $l(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement($))) == null || i ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(d.floating)),
    boundary: g,
    rootBoundary: v,
    strategy: c
  })), R = m === "floating" ? {
    x: n,
    y: a,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(d.floating)), I = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, ve = $l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: R,
    offsetParent: P,
    strategy: c
  }) : R);
  return {
    top: (N.top - ve.top + T.top) / I.y,
    bottom: (ve.bottom - N.bottom + T.bottom) / I.y,
    left: (N.left - ve.left + T.left) / I.x,
    right: (ve.right - N.right + T.right) / I.x
  };
}
const jk = 50, Bk = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: l
  } = i, d = l.detectOverflow ? l : {
    ...l,
    detectOverflow: zk
  }, c = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let g = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: v,
    y: m
  } = ch(g, n, c), y = n, k = 0;
  const T = {};
  for (let C = 0; C < r.length; C++) {
    const $ = r[C];
    if (!$)
      continue;
    const {
      name: N,
      fn: R
    } = $, {
      x: P,
      y: I,
      data: ve,
      reset: Q
    } = await R({
      x: v,
      y: m,
      initialPlacement: n,
      placement: y,
      strategy: a,
      middlewareData: T,
      rects: g,
      platform: d,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, m = I ?? m, T[N] = {
      ...T[N],
      ...ve
    }, Q && k < jk && (k++, typeof Q == "object" && (Q.placement && (y = Q.placement), Q.rects && (g = Q.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : Q.rects), {
      x: v,
      y: m
    } = ch(g, y, c)), C = -1);
  }
  return {
    x: v,
    y: m,
    placement: y,
    strategy: a,
    middlewareData: T
  };
}, Hk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: l,
      elements: d,
      middlewareData: c
    } = t, {
      element: g,
      padding: v = 0
    } = ar(e, t) || {};
    if (g == null)
      return {};
    const m = Bb(v), y = {
      x: i,
      y: n
    }, k = jd(a), T = zd(k), C = await l.getDimensions(g), $ = k === "y", N = $ ? "top" : "left", R = $ ? "bottom" : "right", P = $ ? "clientHeight" : "clientWidth", I = r.reference[T] + r.reference[k] - y[k] - r.floating[T], ve = y[k] - r.reference[k], Q = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(g));
    let x = Q ? Q[P] : 0;
    (!x || !await (l.isElement == null ? void 0 : l.isElement(Q))) && (x = d.floating[P] || r.floating[T]);
    const H = I / 2 - ve / 2, K = x / 2 - C[T] / 2 - 1, Z = Xl(m[N], K), ae = Xl(m[R], K), j = x - C[T] - ae, q = x / 2 - C[T] / 2 + H, L = Ub(Z, q, j), V = !c.arrow && Gi(a) != null && q !== L && r.reference[T] / 2 - (q < Z ? Z : ae) - C[T] / 2 < 0, J = V ? q < Z ? q - Z : q - j : 0;
    return {
      [k]: y[k] + J,
      data: {
        [k]: L,
        centerOffset: q - L - J,
        ...V && {
          alignmentOffset: J
        }
      },
      reset: V
    };
  }
});
function Vk(e, t, i) {
  return (e ? [...i.filter((a) => Gi(a) === e), ...i.filter((a) => Gi(a) !== e)] : i.filter((a) => Hn(a) === a)).filter((a) => e ? Gi(a) === e || (t ? wo(a) !== a : !1) : !0);
}
const qk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: l,
        placement: d,
        platform: c,
        elements: g
      } = t, {
        crossAxis: v = !1,
        alignment: m,
        allowedPlacements: y = sh,
        autoAlignment: k = !0,
        ...T
      } = ar(e, t), C = m !== void 0 || y === sh ? Vk(m || null, k, y) : y, $ = ((i = l.autoPlacement) == null ? void 0 : i.index) || 0, N = C[$];
      if (N == null)
        return {};
      if (d !== N)
        return {
          reset: {
            placement: C[0]
          }
        };
      const R = await c.detectOverflow(t, T), P = jb(N, r, await (c.isRTL == null ? void 0 : c.isRTL(g.floating))), I = [R[Hn(N)], R[P[0]], R[P[1]]], ve = [...((n = l.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: N,
        overflows: I
      }], Q = C[$ + 1];
      if (Q)
        return {
          data: {
            index: $ + 1,
            overflows: ve
          },
          reset: {
            placement: Q
          }
        };
      const x = ve.map((Z) => {
        const ae = Gi(Z.placement);
        return [Z.placement, ae && v ? (
          // Check along the mainAxis and main crossAxis side.
          Z.overflows.slice(0, 2).reduce((j, q) => j + q, 0)
        ) : (
          // Check only the mainAxis.
          Z.overflows[0]
        ), Z.overflows];
      }).sort((Z, ae) => Z[1] - ae[1]), K = ((a = x.filter((Z) => Z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Gi(Z[0]) ? 2 : 3
      ).every((ae) => ae <= 0))[0]) == null ? void 0 : a[0]) || x[0][0];
      return K !== d ? {
        data: {
          index: $ + 1,
          overflows: ve
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, Gk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: l,
        initialPlacement: d,
        platform: c,
        elements: g
      } = t, {
        mainAxis: v = !0,
        crossAxis: m = !0,
        fallbackPlacements: y,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: C = !0,
        ...$
      } = ar(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const N = Hn(a), R = Ln(d), P = Hn(d) === d, I = await (c.isRTL == null ? void 0 : c.isRTL(g.floating)), ve = y || (P || !C ? [ko(d)] : Lk(d)), Q = T !== "none";
      !y && Q && ve.push(...Mk(d, C, T, I));
      const x = [d, ...ve], H = await c.detectOverflow(t, $), K = [];
      let Z = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (v && K.push(H[N]), m) {
        const L = jb(a, l, I);
        K.push(H[L[0]], H[L[1]]);
      }
      if (Z = [...Z, {
        placement: a,
        overflows: K
      }], !K.every((L) => L <= 0)) {
        var ae, j;
        const L = (((ae = r.flip) == null ? void 0 : ae.index) || 0) + 1, V = x[L];
        if (V && (!(m === "alignment" ? R !== Ln(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((Y) => Ln(Y.placement) === R ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: Z
            },
            reset: {
              placement: V
            }
          };
        let J = (j = Z.filter((ne) => ne.overflows[0] <= 0).sort((ne, Y) => ne.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!J)
          switch (k) {
            case "bestFit": {
              var q;
              const ne = (q = Z.filter((Y) => {
                if (Q) {
                  const pe = Ln(Y.placement);
                  return pe === R || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((pe) => pe > 0).reduce((pe, Se) => pe + Se, 0)]).sort((Y, pe) => Y[1] - pe[1])[0]) == null ? void 0 : q[0];
              ne && (J = ne);
              break;
            }
            case "initialPlacement":
              J = d;
              break;
          }
        if (a !== J)
          return {
            reset: {
              placement: J
            }
          };
      }
      return {};
    }
  };
}, Kk = /* @__PURE__ */ new Set(["left", "top"]);
async function Wk(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = Hn(i), d = Gi(i), c = Ln(i) === "y", g = Kk.has(l) ? -1 : 1, v = r && c ? -1 : 1, m = ar(t, e);
  let {
    mainAxis: y,
    crossAxis: k,
    alignmentAxis: T
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return d && typeof T == "number" && (k = d === "end" ? T * -1 : T), c ? {
    x: k * v,
    y: y * g
  } : {
    x: y * g,
    y: k * v
  };
}
const Yk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: l,
        middlewareData: d
      } = t, c = await Wk(t, e);
      return l === ((i = d.offset) == null ? void 0 : i.placement) && (n = d.arrow) != null && n.alignmentOffset ? {} : {
        x: a + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: l
        }
      };
    }
  };
}, Zk = function(e) {
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
        mainAxis: l = !0,
        crossAxis: d = !1,
        limiter: c = {
          fn: (R) => {
            let {
              x: P,
              y: I
            } = R;
            return {
              x: P,
              y: I
            };
          }
        },
        ...g
      } = ar(e, t), v = {
        x: i,
        y: n
      }, m = await r.detectOverflow(t, g), y = Ln(a), k = zb(y);
      let T = v[k], C = v[y];
      const $ = (R, P) => Ub(P + m[R === "y" ? "top" : "left"], P, P - m[R === "y" ? "bottom" : "right"]);
      l && (T = $(k, T)), d && (C = $(y, C));
      const N = c.fn({
        ...t,
        [k]: T,
        [y]: C
      });
      return {
        ...N,
        data: {
          x: N.x - i,
          y: N.y - n,
          enabled: {
            [k]: l,
            [y]: d
          }
        }
      };
    }
  };
}, Xk = function(e) {
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
        apply: l = () => {
        },
        ...d
      } = ar(e, t), c = await a.detectOverflow(t, d), g = Hn(i), v = Gi(i), m = Ln(i) === "y", {
        width: y,
        height: k
      } = n.floating;
      let T, C;
      g === "top" || g === "bottom" ? (T = g, C = v === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = g, T = v === "end" ? "top" : "bottom");
      const $ = k - c.top - c.bottom, N = y - c.left - c.right, R = Xl(k - c[T], $), P = Xl(y - c[C], N), I = t.middlewareData.shift, ve = !I;
      let Q = R, x = P;
      I != null && I.enabled.x && (x = N), I != null && I.enabled.y && (Q = $), ve && !v && (m ? x = y - 2 * Jc(c.left, c.right) : Q = k - 2 * Jc(c.top, c.bottom)), await l({
        ...t,
        availableWidth: x,
        availableHeight: Q
      });
      const H = await a.getDimensions(r.floating);
      return y !== H.width || k !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pi(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function un(e) {
  return Pi(e).getComputedStyle(e);
}
const dh = Math.min, xl = Math.max, So = Math.round;
function Hb(e) {
  const t = un(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, l = So(i) !== a || So(n) !== r;
  return l && (i = a, n = r), { width: i, height: n, fallback: l };
}
function ka(e) {
  return qb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Bs;
function Vb() {
  if (Bs) return Bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Bs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Bs) : navigator.userAgent;
}
function cn(e) {
  return e instanceof Pi(e).HTMLElement;
}
function ga(e) {
  return e instanceof Pi(e).Element;
}
function qb(e) {
  return e instanceof Pi(e).Node;
}
function fh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Pi(e).ShadowRoot || e instanceof ShadowRoot;
}
function mu(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Jk(e) {
  return ["table", "td", "th"].includes(ka(e));
}
function Qc(e) {
  const t = /firefox/i.test(Vb()), i = un(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function Gb() {
  return !/^((?!chrome|android).)*safari/i.test(Vb());
}
function Bd(e) {
  return ["html", "body", "#document"].includes(ka(e));
}
function Kb(e) {
  return ga(e) ? e : e.contextElement;
}
const Wb = { x: 1, y: 1 };
function Nr(e) {
  const t = Kb(e);
  if (!cn(t)) return Wb;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Hb(t);
  let l = (r ? So(i.width) : i.width) / n, d = (r ? So(i.height) : i.height) / a;
  return l && Number.isFinite(l) || (l = 1), d && Number.isFinite(d) || (d = 1), { x: l, y: d };
}
function Jl(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const l = e.getBoundingClientRect(), d = Kb(e);
  let c = Wb;
  t && (n ? ga(n) && (c = Nr(n)) : c = Nr(e));
  const g = d ? Pi(d) : window, v = !Gb() && i;
  let m = (l.left + (v && ((a = g.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, y = (l.top + (v && ((r = g.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, k = l.width / c.x, T = l.height / c.y;
  if (d) {
    const C = Pi(d), $ = n && ga(n) ? Pi(n) : n;
    let N = C.frameElement;
    for (; N && n && $ !== C; ) {
      const R = Nr(N), P = N.getBoundingClientRect(), I = getComputedStyle(N);
      P.x += (N.clientLeft + parseFloat(I.paddingLeft)) * R.x, P.y += (N.clientTop + parseFloat(I.paddingTop)) * R.y, m *= R.x, y *= R.y, k *= R.x, T *= R.y, m += P.x, y += P.y, N = Pi(N).frameElement;
    }
  }
  return { width: k, height: T, top: y, right: m + k, bottom: y + T, left: m, x: m, y };
}
function ma(e) {
  return ((qb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yu(e) {
  return ga(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Yb(e) {
  return Jl(ma(e)).left + yu(e).scrollLeft;
}
function Ql(e) {
  if (ka(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || fh(e) && e.host || ma(e);
  return fh(t) ? t.host : t;
}
function Zb(e) {
  const t = Ql(e);
  return Bd(t) ? t.ownerDocument.body : cn(t) && mu(t) ? t : Zb(t);
}
function Co(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = Zb(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Pi(n);
  return a ? t.concat(r, r.visualViewport || [], mu(n) ? n : []) : t.concat(n, Co(n));
}
function ph(e, t, i) {
  return t === "viewport" ? $l((function(n, a) {
    const r = Pi(n), l = ma(n), d = r.visualViewport;
    let c = l.clientWidth, g = l.clientHeight, v = 0, m = 0;
    if (d) {
      c = d.width, g = d.height;
      const y = Gb();
      (y || !y && a === "fixed") && (v = d.offsetLeft, m = d.offsetTop);
    }
    return { width: c, height: g, x: v, y: m };
  })(e, i)) : ga(t) ? $l((function(n, a) {
    const r = Jl(n, !0, a === "fixed"), l = r.top + n.clientTop, d = r.left + n.clientLeft, c = cn(n) ? Nr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: d * c.x, y: l * c.y };
  })(t, i)) : $l((function(n) {
    const a = ma(n), r = yu(n), l = n.ownerDocument.body, d = xl(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth), c = xl(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
    let g = -r.scrollLeft + Yb(n);
    const v = -r.scrollTop;
    return un(l).direction === "rtl" && (g += xl(a.clientWidth, l.clientWidth) - d), { width: d, height: c, x: g, y: v };
  })(ma(e)));
}
function hh(e) {
  return cn(e) && un(e).position !== "fixed" ? e.offsetParent : null;
}
function vh(e) {
  const t = Pi(e);
  let i = hh(e);
  for (; i && Jk(i) && un(i).position === "static"; ) i = hh(i);
  return i && (ka(i) === "html" || ka(i) === "body" && un(i).position === "static" && !Qc(i)) ? t : i || (function(n) {
    let a = Ql(n);
    for (; cn(a) && !Bd(a); ) {
      if (Qc(a)) return a;
      a = Ql(a);
    }
    return null;
  })(e) || t;
}
function Qk(e, t, i) {
  const n = cn(t), a = ma(t), r = Jl(e, !0, i === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((ka(t) !== "body" || mu(a)) && (l = yu(t)), cn(t)) {
    const c = Jl(t, !0);
    d.x = c.x + t.clientLeft, d.y = c.y + t.clientTop;
  } else a && (d.x = Yb(a));
  return { x: r.left + l.scrollLeft - d.x, y: r.top + l.scrollTop - d.y, width: r.width, height: r.height };
}
const eS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(g, v) {
    const m = v.get(g);
    if (m) return m;
    let y = Co(g).filter((($) => ga($) && ka($) !== "body")), k = null;
    const T = un(g).position === "fixed";
    let C = T ? Ql(g) : g;
    for (; ga(C) && !Bd(C); ) {
      const $ = un(C), N = Qc(C);
      (T ? N || k : N || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : y = y.filter(((R) => R !== C)), C = Ql(C);
    }
    return v.set(g, y), y;
  })(t, this._c) : [].concat(i), l = [...r, n], d = l[0], c = l.reduce(((g, v) => {
    const m = ph(t, v, a);
    return g.top = xl(m.top, g.top), g.right = dh(m.right, g.right), g.bottom = dh(m.bottom, g.bottom), g.left = xl(m.left, g.left), g;
  }), ph(t, d, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = cn(i), r = ma(i);
  if (i === r) return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((ka(i) !== "body" || mu(r)) && (l = yu(i)), cn(i))) {
    const g = Jl(i);
    d = Nr(i), c.x = g.x + i.clientLeft, c.y = g.y + i.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - l.scrollLeft * d.x + c.x, y: t.y * d.y - l.scrollTop * d.y + c.y };
}, isElement: ga, getDimensions: function(e) {
  return cn(e) ? Hb(e) : e.getBoundingClientRect();
}, getOffsetParent: vh, getDocumentElement: ma, getScale: Nr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || vh, r = this.getDimensions;
  return { reference: Qk(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => un(e).direction === "rtl" }, tS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: eS, ...i }, r = { ...a.platform, _c: n };
  return Bk(e, t, { ...a, platform: r });
}, ya = {
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
function ed(e, t) {
  let i = ya.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = ya.themes[i.$extend] || {} : (i = null, n = ya[t]) : i = null;
  while (i);
  return n;
}
function iS(e) {
  const t = [e];
  let i = ya.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = ya.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function bh(e) {
  const t = [e];
  let i = ya.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = ya.themes[i.$extend] || {}) : i = null;
  while (i);
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
let Xb = !1;
typeof window < "u" && typeof navigator < "u" && (Xb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const nS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), gh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, mh = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function yh(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Cc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Vi = [];
let Va = null;
const _h = {};
function wh(e) {
  let t = _h[e];
  return t || (t = _h[e] = []), t;
}
let td = function() {
};
typeof window < "u" && (td = window.Element);
function Je(e) {
  return function(t) {
    return ed(t.theme, e);
  };
}
const Tc = "__floating-vue__popper", Jb = () => /* @__PURE__ */ Ht({
  name: "VPopper",
  provide() {
    return {
      [Tc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Tc]: { default: null }
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
      default: Je("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Je("positioningDisabled")
    },
    placement: {
      type: String,
      default: Je("placement"),
      validator: (e) => nS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Je("delay")
    },
    distance: {
      type: [Number, String],
      default: Je("distance")
    },
    skidding: {
      type: [Number, String],
      default: Je("skidding")
    },
    triggers: {
      type: Array,
      default: Je("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Je("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Je("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Je("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Je("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Je("popperHideTriggers")
    },
    container: {
      type: [String, Object, td, Boolean],
      default: Je("container")
    },
    boundary: {
      type: [String, td],
      default: Je("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Je("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Je("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Je("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Je("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Je("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Je("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Je("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Je("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Je("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Je("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Je("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Je("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Je("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Je("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Je("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Je("flip")
    },
    shift: {
      type: Boolean,
      default: Je("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Je("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Je("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Je("disposeTimeout")
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
      return (e = this[Tc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Yk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(qk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Zk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Gk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Hk({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let l;
          const { centerOffset: d } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? l = Math.abs(d) > a.reference.width / 2 : l = Math.abs(d) > a.reference.height / 2, {
            data: {
              overflow: l
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: l }) => {
            var d;
            if ((d = l.autoSize) != null && d.skip)
              return {};
            let c, g;
            return r.startsWith("top") || r.startsWith("bottom") ? c = a.reference.width : g = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = c != null ? `${c}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = g != null ? `${g}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Xk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await tS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Va && this.instantMove && Va.instantMove && Va !== this.parentPopper) {
        Va.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Va = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Cc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Co(this.$_referenceNode),
        ...Co(this.$_popperNode)
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
        for (let i = 0; i < Vi.length; i++)
          t = Vi[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Vi.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of bh(this.theme))
        wh(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Cc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, yh(Vi, this), Vi.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of bh(this.theme)) {
        const n = wh(i);
        yh(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Va === this && (Va = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Cc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, gh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], gh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, mh, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], mh, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, es ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, n, a) {
      let r = i;
      n != null && (r = typeof n == "function" ? n(r) : n), r.forEach((l) => {
        const d = t[l];
        d && this.$_registerEventListeners(e, d, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: n, eventType: a, handler: r } = i;
        !e || e === a ? n.forEach((l) => l.removeEventListener(a, r)) : t.push(i);
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
      if (Ol >= e.left && Ol <= e.right && Nl >= e.top && Nl <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = Ol - ca, n = Nl - da, a = t.left + t.width / 2 - ca + (t.top + t.height / 2) - da + t.width + t.height, r = ca + i * a, l = da + n * a;
        return Hs(ca, da, r, l, t.left, t.top, t.left, t.bottom) || // Left edge
        Hs(ca, da, r, l, t.left, t.top, t.right, t.top) || // Top edge
        Hs(ca, da, r, l, t.right, t.top, t.right, t.bottom) || // Right edge
        Hs(ca, da, r, l, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Xb) {
    const e = es ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => kh(t), e), document.addEventListener("touchend", (t) => Sh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => kh(e), !0), window.addEventListener("click", (e) => Sh(e, !1), !0);
  window.addEventListener("resize", lS);
}
function kh(e, t) {
  for (let i = 0; i < Vi.length; i++) {
    const n = Vi[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Sh(e, t) {
  aS(e, t);
}
function aS(e, t) {
  const i = {};
  for (let n = Vi.length - 1; n >= 0; n--) {
    const a = Vi[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Ch(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let d = a.parentPopper;
            for (; d; )
              i[d.randomId] = !0, d = d.parentPopper;
            return;
          }
          let l = a.parentPopper;
          for (; l && Ch(l, l.containsGlobalTarget, e); )
            l.$_handleGlobalClose(e, t), l = l.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Ch(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || rS(e, i) && !t;
}
function rS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function lS() {
  for (let e = 0; e < Vi.length; e++)
    Vi[e].$_computePosition();
}
let ca = 0, da = 0, Ol = 0, Nl = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ca = Ol, da = Nl, Ol = e.clientX, Nl = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function Hs(e, t, i, n, a, r, l, d) {
  const c = ((l - a) * (t - r) - (d - r) * (e - a)) / ((d - r) * (i - e) - (l - a) * (n - t)), g = ((i - e) * (t - r) - (n - t) * (e - a)) / ((d - r) * (i - e) - (l - a) * (n - t));
  return c >= 0 && c <= 1 && g >= 0 && g <= 1;
}
const sS = {
  extends: Jb()
}, Hd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function oS(e, t, i, n, a, r) {
  return p(), h("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Be(e.$slots, "default", Js(ql(e.slotData)))
  ], 2);
}
const uS = /* @__PURE__ */ Hd(sS, [["render", oS]]);
function cS() {
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
let Zs;
function id() {
  id.init || (id.init = !0, Zs = cS() !== -1);
}
var _u = {
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
    id(), Rt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Zs && this.$el.appendChild(e), e.data = "about:blank", Zs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Zs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const dS = /* @__PURE__ */ dy();
uy("data-v-b329ee4c");
const fS = {
  class: "resize-observer",
  tabindex: "-1"
};
cy();
const pS = /* @__PURE__ */ dS((e, t, i, n, a, r) => (p(), Pe("div", fS)));
_u.render = pS;
_u.__scopeId = "data-v-b329ee4c";
_u.__file = "src/components/ResizeObserver.vue";
const Qb = (e = "theme") => ({
  computed: {
    themeClass() {
      return iS(this[e]);
    }
  }
}), hS = /* @__PURE__ */ Ht({
  name: "VPopperContent",
  components: {
    ResizeObserver: _u
  },
  mixins: [
    Qb()
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
}), vS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], bS = {
  ref: "inner",
  class: "v-popper__inner"
}, gS = /* @__PURE__ */ s("div", { class: "v-popper__arrow-outer" }, null, -1), mS = /* @__PURE__ */ s("div", { class: "v-popper__arrow-inner" }, null, -1), yS = [
  gS,
  mS
];
function _S(e, t, i, n, a, r) {
  const l = Ze("ResizeObserver");
  return p(), h("div", {
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
    style: pi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ft((d) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    s("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (d) => e.autoHide && e.$emit("hide"))
    }),
    s("div", {
      class: "v-popper__wrapper",
      style: pi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      s("div", bS, [
        e.mounted ? (p(), h(W, { key: 0 }, [
          s("div", null, [
            Be(e.$slots, "default")
          ]),
          e.handleResize ? (p(), Pe(l, {
            key: 0,
            onNotify: t[1] || (t[1] = (d) => e.$emit("resize", d))
          })) : E("", !0)
        ], 64)) : E("", !0)
      ], 512),
      s("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, yS, 4)
    ], 4)
  ], 46, vS);
}
const eg = /* @__PURE__ */ Hd(hS, [["render", _S]]), tg = {
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
let nd = function() {
};
typeof window < "u" && (nd = window.Element);
const wS = /* @__PURE__ */ Ht({
  name: "VPopperWrapper",
  components: {
    Popper: uS,
    PopperContent: eg
  },
  mixins: [
    tg,
    Qb("finalTheme")
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
      type: [String, Object, nd, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, nd],
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
function kS(e, t, i, n, a, r) {
  const l = Ze("PopperContent"), d = Ze("Popper");
  return p(), Pe(d, Qt({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (c) => e.$emit("update:shown", c)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: we(({
      popperId: c,
      isShown: g,
      shouldMountContent: v,
      skipTransition: m,
      autoHide: y,
      show: k,
      hide: T,
      handleResize: C,
      onResize: $,
      classes: N,
      result: R
    }) => [
      Be(e.$slots, "default", {
        shown: g,
        show: k,
        hide: T
      }),
      de(l, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: g,
        mounted: v,
        "skip-transition": m,
        "auto-hide": y,
        "handle-resize": C,
        classes: N,
        result: R,
        onHide: T,
        onResize: $
      }, {
        default: we(() => [
          Be(e.$slots, "popper", {
            shown: g,
            hide: T
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Vd = /* @__PURE__ */ Hd(wS, [["render", kS]]), SS = {
  ...Vd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Vd
});
({
  ...Vd
});
Jb();
const Th = ya, CS = SS, TS = /* @__PURE__ */ Ht({
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
}), AS = "_ncPopover_qgtYg", ES = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: AS
}, ig = "nc-popover-9";
Th.themes[ig] = structuredClone(Th.themes.dropdown);
const $S = {
  name: "NcPopover",
  components: {
    Dropdown: CS,
    NcPopoverTriggerProvider: TS
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
      theme: ig
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
      return this.placement === "start" ? Yc ? "right" : "left" : this.placement === "end" ? Yc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Md(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Zl(),
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
        ir.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function xS(e, t, i, n, a, r) {
  const l = Ze("NcPopoverTriggerProvider"), d = Ze("Dropdown");
  return p(), Pe(d, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (c) => a.internalShown = c),
      t[1] || (t[1] = (c) => a.internalShown = c)
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
    popper: we((c) => [
      Be(e.$slots, "default", Js(ql(c)))
    ]),
    default: we(() => [
      de(l, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: we((c) => [
          Be(e.$slots, "trigger", Js(ql(c)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const OS = {
  $style: ES
}, Ah = /* @__PURE__ */ ot($S, [["render", xS], ["__cssModules", OS]]), NS = {
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
}, RS = ["aria-hidden", "aria-label"], IS = ["fill", "width", "height"], LS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, PS = { key: 0 };
function DS(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", LS, [
        i.title ? (p(), h("title", PS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, IS))
  ], 16, RS);
}
const FS = /* @__PURE__ */ ot(NS, [["render", DS]]);
Ca(b0);
function qd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === zt)
        return !1;
      if (i.type === W && !qd(i.children))
        return !1;
      if (i.type === ss && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const MS = ".focusable", US = {
  name: "NcActions",
  components: {
    NcButton: on,
    NcPopover: Ah
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
      [Ud]: z(() => this.actionsMenuSemanticType === "menu"),
      [Fb]: this.closeMenu
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
      default: Lt("Actions")
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
      randomId: gu()
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
    Nk(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(MS);
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
    const e = [], t = (k, T) => {
      k.forEach((C) => {
        if (this.isAction(C)) {
          T.push(C);
          return;
        }
        C.type === W && t(C.children, T);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((k) => !n.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], l = ["NcActionInput", "NcActionTextEditable"], d = ["NcActionLink", "NcActionRouter"], c = a.some((k) => l.includes(this.getActionName(k))), g = a.some((k) => r.includes(this.getActionName(k))), v = a.some((k) => d.includes(this.getActionName(k)));
    c ? this.actionsMenuSemanticType = "dialog" : g ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((T) => this.getActionName(T).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const m = (k) => {
      const T = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(T) ? ci("img", { class: "action-item__menutoggle__icon", src: T, alt: "" }) : ci("span", { class: ["icon", T] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), N = this.forceName ? $ : "";
      let R = k?.props?.title;
      this.forceName || R || (R = $);
      const P = { ...k?.props ?? {} }, I = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, ci(
        on,
        Qt(
          P,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || $,
            title: R,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: I,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (N ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => N,
          icon: () => C
        }
      );
    }, y = (k) => {
      const T = qd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ci("span", { class: ["icon", this.defaultIcon] }) : ci(FS, { size: 20 }), C = `${this.randomId}-trigger`;
      return ci(
        Ah,
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
          trigger: () => ci(on, {
            id: C,
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
            icon: () => T,
            default: () => this.menuName
          }),
          default: () => ci("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            ci("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": C,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              k
            ])
          ])
        }
      );
    };
    return e.length === 1 && i.length === 1 && !this.forceMenu ? m(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? ci(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...n.map(m),
        // render the rest within the popover menu
        a.length > 0 ? ci(
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
    ) : ci(
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
}, Gd = /* @__PURE__ */ ot(US, [["__scopeId", "data-v-7206c1f1"]]), zS = ["aria-label"], jS = ["width", "height"], BS = ["fill"], HS = ["fill"], VS = { key: 0 }, qS = /* @__PURE__ */ Ht({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = z(() => {
      const n = ["#777", "#CCC"];
      return t.appearance === "light" ? n : t.appearance === "dark" ? n.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (n, a) => (p(), h("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (p(), h("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        s("path", {
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, BS),
        s("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (p(), h("title", VS, o(e.name), 1)) : E("", !0)
        ], 8, HS)
      ], 8, jS))
    ], 8, zS));
  }
}), ng = /* @__PURE__ */ ot(qS, [["__scopeId", "data-v-cf399190"]]), ad = /* @__PURE__ */ Ht({
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
}), GS = {
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
}, KS = ["aria-hidden", "aria-label"], WS = ["fill", "width", "height"], YS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, ZS = { key: 0 };
function XS(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", YS, [
        i.title ? (p(), h("title", ZS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, WS))
  ], 16, KS);
}
const JS = /* @__PURE__ */ ot(GS, [["render", XS]]), QS = {
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
}, eC = ["aria-hidden", "aria-label"], tC = ["fill", "width", "height"], iC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, nC = { key: 0 };
function aC(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", iC, [
        i.title ? (p(), h("title", nC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, tC))
  ], 16, eC);
}
const rC = /* @__PURE__ */ ot(QS, [["render", aC]]);
Ca(_0);
const lC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: on,
    ChevronDown: Yw,
    ChevronUp: ik
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
    return { isLegacy34: Ta };
  },
  computed: {
    labelButton() {
      return this.open ? Lt("Collapse menu") : Lt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function sC(e, t, i, n, a, r) {
  const l = Ze("ChevronUp"), d = Ze("ChevronDown"), c = Ze("NcButton");
  return p(), Pe(c, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: we(() => [
      i.open ? (p(), Pe(l, {
        key: 0,
        size: 20
      })) : (p(), Pe(d, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const oC = /* @__PURE__ */ ot(lC, [["render", sC], ["__scopeId", "data-v-cfbd3794"]]);
Ca(w0, C0);
const uC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gd,
    NcActionButton: Ok,
    NcAppNavigationIconCollapsible: oC,
    NcInputConfirmCancel: mk,
    NcLoadingIcon: ng,
    NcVNodes: ad,
    Pencil: JS,
    Undo: rC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Nb, default: null }
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
      default: () => gu(),
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
      isLegacy34: Ta
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
      return this.editLabel ? this.editLabel : Lt("Edit item");
    },
    undoButtonAriaLabel() {
      return Lt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && Fn("toggle-navigation", { open: !1 }));
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
}, cC = ["id"], dC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], fC = {
  key: 0,
  class: "editingContainer"
}, pC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, hC = { class: "app-navigation-entry__deleted-description" }, vC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, bC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function gC(e, t, i, n, a, r) {
  const l = Ze("NcLoadingIcon"), d = Ze("NcInputConfirmCancel"), c = Ze("Pencil"), g = Ze("NcActionButton"), v = Ze("Undo"), m = Ze("NcActions"), y = Ze("NcAppNavigationIconCollapsible");
  return p(), h("li", {
    id: i.id,
    class: Te([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (p(), Pe(xd(r.isRouterLink ? "router-link" : "NcVNodes"), Js(ql({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: we(({ href: k, navigate: T, isActive: C }) => [
        s("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && C || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...$) => r.requestHighlight && r.requestHighlight(...$)),
          onFocusin: t[5] || (t[5] = (...$) => r.requestHighlight && r.requestHighlight(...$))
        }, [
          i.undo ? E("", !0) : (p(), h("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && C ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || k || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...$) => r.handleBlur && r.handleBlur(...$)),
            onClick: ($) => r.onClick($, T, k),
            onFocus: t[2] || (t[2] = (...$) => r.handleFocus && r.handleFocus(...$)),
            onKeydown: t[3] || (t[3] = ft(ke((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            s("div", {
              class: Te(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (p(), Pe(l, { key: 0 })) : Be(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && C
              }, void 0, !0)
            ], 2),
            s("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, o(i.name), 3),
            a.editingActive ? (p(), h("div", fC, [
              de(d, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => a.editingValue = $),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && C || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : E("", !0)
          ], 40, dC)),
          i.undo ? (p(), h("div", pC, [
            s("div", hC, o(i.name), 1)
          ])) : E("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (p(), h("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (p(), h("div", vC, [
              Be(e.$slots, "counter", {}, void 0, !0)
            ])) : E("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (p(), Pe(m, {
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
              icon: we(() => [
                Be(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: we(() => [
                i.editable && !a.editingActive ? (p(), Pe(g, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: we(() => [
                    de(c, { size: 20 })
                  ]),
                  default: we(() => [
                    ie(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                i.undo ? (p(), Pe(g, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: we(() => [
                    de(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                Be(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : E("", !0)
          ], 2)) : E("", !0),
          i.allowCollapse && e.$slots.default ? (p(), Pe(y, {
            key: 3,
            active: i.to && C || i.active,
            open: a.opened,
            onClick: ke(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : E("", !0),
          Be(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (p(), h("ul", bC, [
      Be(e.$slots, "default", {}, void 0, !0)
    ])) : E("", !0)
  ], 10, cC);
}
const Tn = /* @__PURE__ */ ot(uC, [["render", gC], ["__scopeId", "data-v-01bef41b"]]), Ac = /* @__PURE__ */ new WeakMap(), mC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = Jp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = Jp(e, a, Object.assign({ capture: i }, r));
    }
    Ac.set(e, n);
  },
  unmounted(e) {
    const t = Ac.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Ac.delete(e);
  }
}, yC = {
  mounted(e) {
    e.focus();
  }
}, _C = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", wC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", rd = "numeric", ld = "ascii", sd = "alpha", Rl = "asciinumeric", _l = "alphanumeric", od = "domain", ag = "emoji", kC = "scheme", SC = "slashscheme", Ec = "whitespace";
function CC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Xa(e, t, i) {
  t[rd] && (t[Rl] = !0, t[_l] = !0), t[ld] && (t[Rl] = !0, t[sd] = !0), t[Rl] && (t[_l] = !0), t[sd] && (t[_l] = !0), t[_l] && (t[od] = !0), t[ag] && (t[od] = !0);
  for (const n in t) {
    const a = CC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function TC(e, t) {
  const i = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (i[n] = !0);
  return i;
}
function ki(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
ki.groups = {};
ki.prototype = {
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
    n = n || ki.groups;
    let a;
    return t && t.j ? a = t : (a = new ki(t), i && n && Xa(t, i, n)), this.jr.push([e, a]), a;
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
    for (let l = 0; l < r - 1; l++)
      a = a.tt(e[l]);
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
    n = n || ki.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let l, d = a.go(e);
    if (d ? (l = new ki(), Object.assign(l.j, d.j), l.jr.push.apply(l.jr, d.jr), l.jd = d.jd, l.t = d.t) : l = new ki(), r) {
      if (n)
        if (l.t && typeof l.t == "string") {
          const c = Object.assign(TC(l.t, n), i);
          Xa(r, c, n);
        } else i && Xa(r, i, n);
      l.t = r;
    }
    return a.j[e] = l, l;
  }
};
const Ke = (e, t, i, n, a) => e.ta(t, i, n, a), St = (e, t, i, n, a) => e.tr(t, i, n, a), Eh = (e, t, i, n, a) => e.ts(t, i, n, a), be = (e, t, i, n, a) => e.tt(t, i, n, a), $n = "WORD", ud = "UWORD", rg = "ASCIINUMERICAL", lg = "ALPHANUMERICAL", ts = "LOCALHOST", cd = "TLD", dd = "UTLD", Xs = "SCHEME", Cr = "SLASH_SCHEME", Kd = "NUM", fd = "WS", Wd = "NL", Il = "OPENBRACE", Ll = "CLOSEBRACE", To = "OPENBRACKET", Ao = "CLOSEBRACKET", Eo = "OPENPAREN", $o = "CLOSEPAREN", xo = "OPENANGLEBRACKET", Oo = "CLOSEANGLEBRACKET", No = "FULLWIDTHLEFTPAREN", Ro = "FULLWIDTHRIGHTPAREN", Io = "LEFTCORNERBRACKET", Lo = "RIGHTCORNERBRACKET", Po = "LEFTWHITECORNERBRACKET", Do = "RIGHTWHITECORNERBRACKET", Fo = "FULLWIDTHLESSTHAN", Mo = "FULLWIDTHGREATERTHAN", Uo = "AMPERSAND", zo = "APOSTROPHE", jo = "ASTERISK", pa = "AT", Bo = "BACKSLASH", Ho = "BACKTICK", Vo = "CARET", Ja = "COLON", Yd = "COMMA", qo = "DOLLAR", nn = "DOT", Go = "EQUALS", Zd = "EXCLAMATION", Ri = "HYPHEN", Pl = "PERCENT", Ko = "PIPE", Wo = "PLUS", Yo = "POUND", Dl = "QUERY", Xd = "QUOTE", sg = "FULLWIDTHMIDDLEDOT", Jd = "SEMI", an = "SLASH", Fl = "TILDE", Zo = "UNDERSCORE", og = "EMOJI", Xo = "SYM";
var ug = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: lg,
  AMPERSAND: Uo,
  APOSTROPHE: zo,
  ASCIINUMERICAL: rg,
  ASTERISK: jo,
  AT: pa,
  BACKSLASH: Bo,
  BACKTICK: Ho,
  CARET: Vo,
  CLOSEANGLEBRACKET: Oo,
  CLOSEBRACE: Ll,
  CLOSEBRACKET: Ao,
  CLOSEPAREN: $o,
  COLON: Ja,
  COMMA: Yd,
  DOLLAR: qo,
  DOT: nn,
  EMOJI: og,
  EQUALS: Go,
  EXCLAMATION: Zd,
  FULLWIDTHGREATERTHAN: Mo,
  FULLWIDTHLEFTPAREN: No,
  FULLWIDTHLESSTHAN: Fo,
  FULLWIDTHMIDDLEDOT: sg,
  FULLWIDTHRIGHTPAREN: Ro,
  HYPHEN: Ri,
  LEFTCORNERBRACKET: Io,
  LEFTWHITECORNERBRACKET: Po,
  LOCALHOST: ts,
  NL: Wd,
  NUM: Kd,
  OPENANGLEBRACKET: xo,
  OPENBRACE: Il,
  OPENBRACKET: To,
  OPENPAREN: Eo,
  PERCENT: Pl,
  PIPE: Ko,
  PLUS: Wo,
  POUND: Yo,
  QUERY: Dl,
  QUOTE: Xd,
  RIGHTCORNERBRACKET: Lo,
  RIGHTWHITECORNERBRACKET: Do,
  SCHEME: Xs,
  SEMI: Jd,
  SLASH: an,
  SLASH_SCHEME: Cr,
  SYM: Xo,
  TILDE: Fl,
  TLD: cd,
  UNDERSCORE: Zo,
  UTLD: dd,
  UWORD: ud,
  WORD: $n,
  WS: fd
});
const An = /[a-z]/, vl = new RegExp("\\p{L}", "u"), $c = new RegExp("\\p{Emoji}", "u"), En = /\d/, xc = /\s/, $h = "\r", Oc = `
`, AC = "️", EC = "‍", Nc = "￼";
let Vs = null, qs = null;
function $C(e = []) {
  const t = {};
  ki.groups = t;
  const i = new ki();
  Vs == null && (Vs = xh(_C)), qs == null && (qs = xh(wC)), be(i, "'", zo), be(i, "{", Il), be(i, "}", Ll), be(i, "[", To), be(i, "]", Ao), be(i, "(", Eo), be(i, ")", $o), be(i, "<", xo), be(i, ">", Oo), be(i, "（", No), be(i, "）", Ro), be(i, "「", Io), be(i, "」", Lo), be(i, "『", Po), be(i, "』", Do), be(i, "＜", Fo), be(i, "＞", Mo), be(i, "&", Uo), be(i, "*", jo), be(i, "@", pa), be(i, "`", Ho), be(i, "^", Vo), be(i, ":", Ja), be(i, ",", Yd), be(i, "$", qo), be(i, ".", nn), be(i, "=", Go), be(i, "!", Zd), be(i, "-", Ri), be(i, "%", Pl), be(i, "|", Ko), be(i, "+", Wo), be(i, "#", Yo), be(i, "?", Dl), be(i, '"', Xd), be(i, "/", an), be(i, ";", Jd), be(i, "~", Fl), be(i, "_", Zo), be(i, "\\", Bo), be(i, "・", sg);
  const n = St(i, En, Kd, {
    [rd]: !0
  });
  St(n, En, n);
  const a = St(n, An, rg, {
    [Rl]: !0
  }), r = St(n, vl, lg, {
    [_l]: !0
  }), l = St(i, An, $n, {
    [ld]: !0
  });
  St(l, En, a), St(l, An, l), St(a, En, a), St(a, An, a);
  const d = St(i, vl, ud, {
    [sd]: !0
  });
  St(d, An), St(d, En, r), St(d, vl, d), St(r, En, r), St(r, An), St(r, vl, r);
  const c = be(i, Oc, Wd, {
    [Ec]: !0
  }), g = be(i, $h, fd, {
    [Ec]: !0
  }), v = St(i, xc, fd, {
    [Ec]: !0
  });
  be(i, Nc, v), be(g, Oc, c), be(g, Nc, v), St(g, xc, v), be(v, $h), be(v, Oc), St(v, xc, v), be(v, Nc, v);
  const m = St(i, $c, og, {
    [ag]: !0
  });
  be(m, "#"), St(m, $c, m), be(m, AC, m);
  const y = be(m, EC);
  be(y, "#"), St(y, $c, m);
  const k = [[An, l], [En, a]], T = [[An, null], [vl, d], [En, r]];
  for (let C = 0; C < Vs.length; C++)
    sa(i, Vs[C], cd, $n, k);
  for (let C = 0; C < qs.length; C++)
    sa(i, qs[C], dd, ud, T);
  Xa(cd, {
    tld: !0,
    ascii: !0
  }, t), Xa(dd, {
    utld: !0,
    alpha: !0
  }, t), sa(i, "file", Xs, $n, k), sa(i, "mailto", Xs, $n, k), sa(i, "http", Cr, $n, k), sa(i, "https", Cr, $n, k), sa(i, "ftp", Cr, $n, k), sa(i, "ftps", Cr, $n, k), Xa(Xs, {
    scheme: !0,
    ascii: !0
  }, t), Xa(Cr, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, $) => C[0] > $[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const $ = e[C][0], R = e[C][1] ? {
      [kC]: !0
    } : {
      [SC]: !0
    };
    $.indexOf("-") >= 0 ? R[od] = !0 : An.test($) ? En.test($) ? R[Rl] = !0 : R[ld] = !0 : R[rd] = !0, Eh(i, $, $, R);
  }
  return Eh(i, "localhost", ts, {
    ascii: !0
  }), i.jd = new ki(Xo), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, ug)
  };
}
function cg(e, t) {
  const i = xC(t.replace(/[A-Z]/g, (d) => d.toLowerCase())), n = i.length, a = [];
  let r = 0, l = 0;
  for (; l < n; ) {
    let d = e, c = null, g = 0, v = null, m = -1, y = -1;
    for (; l < n && (c = d.go(i[l])); )
      d = c, d.accepts() ? (m = 0, y = 0, v = d) : m >= 0 && (m += i[l].length, y++), g += i[l].length, r += i[l].length, l++;
    r -= m, l -= y, g -= m, a.push({
      t: v.t,
      // token type/name
      v: t.slice(r - g, r),
      // string value
      s: r - g,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function xC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, l = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(l), n += l.length;
  }
  return t;
}
function sa(e, t, i, n, a) {
  let r;
  const l = t.length;
  for (let d = 0; d < l - 1; d++) {
    const c = t[d];
    e.j[c] ? r = e.j[c] : (r = new ki(n), r.jr = a.slice(), e.j[c] = r), e = r;
  }
  return r = new ki(i), r.jr = a.slice(), e.j[t[l - 1]] = r, r;
}
function xh(e) {
  const t = [], i = [];
  let n = 0, a = "0123456789";
  for (; n < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[n + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(i.join(""));
      for (let l = parseInt(e.substring(n, n + r), 10); l > 0; l--)
        i.pop();
      n += r;
    } else
      i.push(e[n]), n++;
  }
  return t;
}
const is = {
  defaultProtocol: "http",
  events: null,
  format: Oh,
  formatHref: Oh,
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
function Qd(e, t = null) {
  let i = Object.assign({}, is);
  e && (i = Object.assign(i, e instanceof Qd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
Qd.prototype = {
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
  get(e, t, i) {
    const n = t != null;
    let a = this.o[e];
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : is[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
function Oh(e) {
  return e;
}
function dg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
dg.prototype = {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), l = {}, d = e.get("className", i, t), c = e.get("target", i, t), g = e.get("rel", i, t), v = e.getObj("attributes", i, t), m = e.getObj("events", i, t);
    return l.href = n, d && (l.class = d), c && (l.target = c), g && (l.rel = g), v && Object.assign(l, v), {
      tagName: a,
      attributes: l,
      content: r,
      eventListeners: m
    };
  }
};
function wu(e, t) {
  class i extends dg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const OC = wu("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Nh = wu("text"), NC = wu("nl"), Gs = wu("url", {
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
    return e.length >= 2 && e[0].t !== ts && e[1].t === Ja;
  }
}), Oi = (e) => new ki(e);
function RC({
  groups: e
}) {
  const t = e.domain.concat([Uo, jo, pa, Bo, Ho, Vo, qo, Go, Ri, Kd, Pl, Ko, Wo, Yo, an, Xo, Fl, Zo]), i = [zo, Ja, Yd, nn, Zd, Pl, Dl, Xd, Jd, xo, Oo, Il, Ll, Ao, To, Eo, $o, No, Ro, Io, Lo, Po, Do, Fo, Mo], n = [Uo, zo, jo, Bo, Ho, Vo, qo, Go, Ri, Il, Ll, Pl, Ko, Wo, Yo, Dl, an, Xo, Fl, Zo], a = Oi(), r = be(a, Fl);
  Ke(r, n, r), Ke(r, e.domain, r);
  const l = Oi(), d = Oi(), c = Oi();
  Ke(a, e.domain, l), Ke(a, e.scheme, d), Ke(a, e.slashscheme, c), Ke(l, n, r), Ke(l, e.domain, l);
  const g = be(l, pa);
  be(r, pa, g), be(d, pa, g), be(c, pa, g);
  const v = be(r, nn);
  Ke(v, n, r), Ke(v, e.domain, r);
  const m = Oi();
  Ke(g, e.domain, m), Ke(m, e.domain, m);
  const y = be(m, nn);
  Ke(y, e.domain, m);
  const k = Oi(OC);
  Ke(y, e.tld, k), Ke(y, e.utld, k), be(g, ts, k);
  const T = be(m, Ri);
  be(T, Ri, T), Ke(T, e.domain, m), Ke(k, e.domain, m), be(k, nn, y), be(k, Ri, T);
  const C = be(l, Ri), $ = be(l, nn);
  be(C, Ri, C), Ke(C, e.domain, l), Ke($, n, r), Ke($, e.domain, l);
  const N = Oi(Gs);
  Ke($, e.tld, N), Ke($, e.utld, N), Ke(N, e.domain, l), Ke(N, n, r), be(N, nn, $), be(N, Ri, C), be(N, pa, g);
  const R = be(N, Ja), P = Oi(Gs);
  Ke(R, e.numeric, P);
  const I = Oi(Gs), ve = Oi();
  Ke(I, t, I), Ke(I, i, ve), Ke(ve, t, I), Ke(ve, i, ve), be(N, an, I), be(P, an, I);
  const Q = be(d, Ja), x = be(c, Ja), H = be(x, an), K = be(H, an);
  Ke(d, e.domain, l), be(d, nn, $), be(d, Ri, C), Ke(c, e.domain, l), be(c, nn, $), be(c, Ri, C), Ke(Q, e.domain, I), be(Q, an, I), be(Q, Dl, I), Ke(K, e.domain, I), Ke(K, t, I), be(K, an, I);
  const Z = [
    [Il, Ll],
    // {}
    [To, Ao],
    // []
    [Eo, $o],
    // ()
    [xo, Oo],
    // <>
    [No, Ro],
    // （）
    [Io, Lo],
    // 「」
    [Po, Do],
    // 『』
    [Fo, Mo]
    // ＜＞
  ];
  for (let ae = 0; ae < Z.length; ae++) {
    const [j, q] = Z[ae], L = be(I, j);
    be(ve, j, L);
    const V = Oi(Gs);
    Ke(L, t, V);
    const J = Oi();
    Ke(L, i, J), be(L, q, I), Ke(V, t, V), Ke(V, i, J), Ke(J, t, V), Ke(J, i, J), be(V, q, I), be(J, q, I);
  }
  return be(a, ts, N), be(a, Wd, NC), {
    start: a,
    tokens: ug
  };
}
function IC(e, t, i) {
  let n = i.length, a = 0, r = [], l = [];
  for (; a < n; ) {
    let d = e, c = null, g = null, v = 0, m = null, y = -1;
    for (; a < n && !(c = d.go(i[a].t)); )
      l.push(i[a++]);
    for (; a < n && (g = c || d.go(i[a].t)); )
      c = null, d = g, d.accepts() ? (y = 0, m = d) : y >= 0 && y++, a++, v++;
    if (y < 0)
      a -= v, a < n && (l.push(i[a]), a++);
    else {
      l.length > 0 && (r.push(Rc(Nh, t, l)), l = []), a -= y, v -= y;
      const k = m.t, T = i.slice(a - v, a);
      r.push(Rc(k, t, T));
    }
  }
  return l.length > 0 && r.push(Rc(Nh, t, l)), r;
}
function Rc(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
}
const Kt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function LC() {
  Kt.scanner = $C(Kt.customSchemes);
  for (let e = 0; e < Kt.tokenQueue.length; e++)
    Kt.tokenQueue[e][1]({
      scanner: Kt.scanner
    });
  Kt.parser = RC(Kt.scanner.tokens);
  for (let e = 0; e < Kt.pluginQueue.length; e++)
    Kt.pluginQueue[e][1]({
      scanner: Kt.scanner,
      parser: Kt.parser
    });
  return Kt.initialized = !0, Kt;
}
function fg(e) {
  return Kt.initialized || LC(), IC(Kt.parser.start, e, cg(Kt.scanner.start, e));
}
fg.scan = cg;
function PC(e) {
  const t = new Qd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, MC), i = fg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(po(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function DC(e) {
  return e.replace(/"/g, "&quot;");
}
function FC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${DC(n)}"`);
  }
  return t.join(" ");
}
function MC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${FC(t)}>${po(i)}</${e}>`;
}
const UC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = PC(t.text));
}, zC = ["title"], jC = /* @__PURE__ */ Ht({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Yt("NcAppSidebar:header:ref");
    return (i, n) => ge((p(), h("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ie(o(e.name), 1)
    ], 8, zC)), [
      [u(UC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), BC = ["aria-labelledby"], HC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, VC = ["id"], qC = {
  key: 2,
  class: "empty-content__description"
}, GC = {
  key: 3,
  class: "empty-content__action"
}, KC = /* @__PURE__ */ Ht({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = gu();
    return (i, n) => (p(), h("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (p(), h("div", HC, [
        Be(i.$slots, "icon", {}, void 0, !0)
      ])) : E("", !0),
      e.name !== "" || i.$slots.name ? (p(), h("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        Be(i.$slots, "name", {}, () => [
          ie(o(e.name), 1)
        ], !0)
      ], 8, VC)) : E("", !0),
      e.description !== "" || i.$slots.description ? (p(), h("p", qC, [
        Be(i.$slots, "description", {}, () => [
          ie(o(e.description), 1)
        ], !0)
      ])) : E("", !0),
      i.$slots.action ? (p(), h("div", GC, [
        Be(i.$slots, "action", {}, void 0, !0)
      ])) : E("", !0)
    ], 8, BC));
  }
}), WC = /* @__PURE__ */ ot(KC, [["__scopeId", "data-v-8609a4c1"]]), YC = {
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
}, ZC = ["aria-hidden", "aria-label"], XC = ["fill", "width", "height"], JC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, QC = { key: 0 };
function e2(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", JC, [
        i.title ? (p(), h("title", QC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, XC))
  ], 16, ZC);
}
const t2 = /* @__PURE__ */ ot(YC, [["render", e2]]), i2 = {
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
}, n2 = ["aria-hidden", "aria-label"], a2 = ["fill", "width", "height"], r2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, l2 = { key: 0 };
function s2(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", r2, [
        i.title ? (p(), h("title", l2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, a2))
  ], 16, n2);
}
const o2 = /* @__PURE__ */ ot(i2, [["render", s2]]), u2 = {
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
}, c2 = ["aria-hidden", "aria-label"], d2 = ["fill", "width", "height"], f2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, p2 = { key: 0 };
function h2(e, t, i, n, a, r) {
  return p(), h("span", Qt(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (l) => e.$emit("click", l))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      s("path", f2, [
        i.title ? (p(), h("title", p2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, d2))
  ], 16, c2);
}
const v2 = /* @__PURE__ */ ot(u2, [["render", h2]]), b2 = ["aria-selected", "tabindex"], g2 = /* @__PURE__ */ Ht({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Fy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Ov(e, "selected"), i = /* @__PURE__ */ G(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (p(), h("button", {
      class: Te(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: u(Ta),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      s("span", {
        class: Te([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (l) => i.value = !1)
      }, [
        s("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          de(ad, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: we(() => [
              s("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        s("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          de(ad, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: we(() => [
              s("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      s("span", {
        class: Te(a.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, b2));
  }
}), m2 = "_sidebarTabsButton_q3kBA", y2 = "_sidebarTabsButton_legacy_KQ4d1", _2 = "_sidebarTabsButton_selected_Pjayf", w2 = "_sidebarTabsButton_animatedHighlight_uvp-0", k2 = "_sidebarTabsButton__name_rlQsL", S2 = "_sidebarTabsButton__icon_QzZg4", C2 = "_sidebarTabsButton__iconLayer_ZkZan", T2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", A2 = "_sidebarTabsButton__icon_pop_IA0By", E2 = "_sidebarTabsButton__legacyIcon_QhcNW", $2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: m2,
  sidebarTabsButton_legacy: y2,
  sidebarTabsButton_selected: _2,
  sidebarTabsButton_animatedHighlight: w2,
  sidebarTabsButton__name: k2,
  sidebarTabsButton__icon: S2,
  sidebarTabsButton__iconLayer: C2,
  sidebarTabsButton__iconLayer_hidden: T2,
  sidebarTabsButton__icon_pop: A2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: E2
}, x2 = {
  $style: $2
}, O2 = /* @__PURE__ */ ot(g2, [["__cssModules", x2]]), N2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: O2
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
      isLegacy34: Ta,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [D_()]) : t.order - i.order), this.updateActive();
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
}, R2 = { class: "app-sidebar-tabs" };
function I2(e, t, i, n, a, r) {
  const l = Ze("NcAppSidebarTabsButton");
  return p(), h("div", R2, [
    r.hasMultipleTabs || r.showForSingleTab ? (p(), h("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ft(ke((...d) => r.focusPreviousTab && r.focusPreviousTab(...d), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ft(ke((...d) => r.focusNextTab && r.focusNextTab(...d), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ft(ke((...d) => r.focusActiveTabContent && r.focusActiveTabContent(...d), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ft(ke((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ft(ke((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ft(ke((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ft(ke((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onPointerleave: t[8] || (t[8] = (...d) => r.hideHighlight && r.hideHighlight(...d)),
      onFocusin: t[9] || (t[9] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onFocusout: t[10] || (t[10] = (...d) => r.onHighlightFocusOut && r.onHighlightFocusOut(...d))
    }, [
      a.highlightEnabled ? (p(), h("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: pi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : E("", !0),
      (p(!0), h(W, null, he(a.tabs, (d) => (p(), Pe(l, {
        id: `tab-button-${d.id}`,
        key: d.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${d.id}`,
        selected: a.activeTab === d.id,
        animatedHighlight: a.highlightEnabled,
        tab: d,
        "onUpdate:selected": (c) => r.setActive(d.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : E("", !0),
    s("div", {
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Be(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const L2 = /* @__PURE__ */ ot(N2, [["render", I2], ["__scopeId", "data-v-74190d2a"]]);
Ca(m0);
const P2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gd,
    NcAppSidebarHeader: jC,
    NcAppSidebarTabs: L2,
    NcButton: on,
    NcLoadingIcon: ng,
    NcEmptyContent: WC,
    IconArrowRight: Pb,
    IconClose: Db,
    IconDockRight: t2,
    IconStar: o2,
    IconStarOutline: v2
  },
  directives: {
    Focus: yC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: mC
  },
  inject: {
    ncContentSelector: {
      from: Lb,
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
    const e = /* @__PURE__ */ G(null);
    return Ii("NcAppSidebar:header:ref", e), {
      uid: gu(),
      isMobile: f0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Lt("Change name"),
      closeTranslated: Lt("Close sidebar"),
      favoriteTranslated: Lt("Favorite"),
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
    isSlotPopulated: qd,
    t: Lt,
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
      this.focusTrap || (this.focusTrap = Md([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Zl(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ir.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, D2 = ["aria-labelledby"], F2 = { class: "app-sidebar-header__info" }, M2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, U2 = { class: "app-sidebar-header__name-container" }, z2 = { class: "app-sidebar-header__mainname-container" }, j2 = ["placeholder", "value"], B2 = ["title"], H2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function V2(e, t, i, n, a, r) {
  const l = Ze("IconDockRight"), d = Ze("NcButton"), c = Ze("NcLoadingIcon"), g = Ze("IconStar"), v = Ze("IconStarOutline"), m = Ze("NcAppSidebarHeader"), y = Ze("IconArrowRight"), k = Ze("NcActions"), T = Ze("IconClose"), C = Ze("NcAppSidebarTabs"), $ = Ze("NcEmptyContent"), N = Yf("focus"), R = Yf("click-outside");
  return p(), Pe(C1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: we(() => [
      ge(s("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = ft((...P) => r.onKeydownEsc && r.onKeydownEsc(...P), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (p(), Pe(Ed, {
          key: 0,
          to: r.ncContentSelector
        }, [
          de(d, Qt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: we(() => [
              Be(e.$slots, "toggle-icon", {}, () => [
                de(l, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : E("", !0),
        s("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (p(), Pe(m, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Be(e.$slots, "info", { key: 0 }, () => [
            s("div", F2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (p(), h("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: pi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => r.onFigureClick && r.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = ft((...P) => r.onFigureClick && r.onFigureClick(...P), ["enter"]))
              }, [
                Be(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : E("", !0),
              s("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (p(), h("div", M2, [
                  Be(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (p(), Pe(d, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ke(r.toggleStarred, ["prevent"])
                    }, {
                      icon: we(() => [
                        i.starLoading ? (p(), Pe(c, { key: 0 })) : a.isStarred ? (p(), Pe(g, {
                          key: 1,
                          size: 20
                        })) : (p(), Pe(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : E("", !0)
                  ], !0)
                ])) : E("", !0),
                s("div", U2, [
                  s("div", z2, [
                    ge(de(m, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: ke(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [tr, !i.nameEditable]
                    ]),
                    i.nameEditable ? ge((p(), h("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ke((...P) => r.onSubmitName && r.onSubmitName(...P), ["prevent"]))
                    }, [
                      ge(s("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = ft(ke((...P) => r.onDismissEditing && r.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => r.onNameInput && r.onNameInput(...P))
                      }, null, 40, j2), [
                        [N]
                      ]),
                      de(d, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: we(() => [
                          de(y, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [R, () => r.onSubmitName()]
                    ]) : E("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (p(), Pe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: we(() => [
                        Be(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : E("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (p(), h("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Be(e.$slots, "subname", {}, () => [
                      ie(o(i.subname), 1)
                    ], !0)
                  ], 8, B2)) : E("", !0)
                ])
              ], 2)
            ])
          ], !0),
          de(d, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ke(r.closeSidebar, ["prevent"])
          }, {
            icon: we(() => [
              de(T, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (p(), h("div", H2, [
            Be(e.$slots, "description", {}, void 0, !0)
          ])) : E("", !0)
        ], 2),
        ge(de(C, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: we(() => [
            Be(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [tr, !i.loading]
        ]),
        i.loading ? (p(), Pe($, { key: 1 }, {
          icon: we(() => [
            de(c, { size: 64 })
          ]),
          _: 1
        })) : E("", !0)
      ], 40, D2), [
        [tr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const q2 = /* @__PURE__ */ ot(P2, [["render", V2], ["__scopeId", "data-v-c2c6820b"]]), G2 = {
  name: "NcActionLink",
  mixins: [Mb],
  inject: {
    isInSemanticMenu: {
      from: Ud,
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
}, K2 = ["role"], W2 = ["download", "href", "aria-label", "target", "title", "role"], Y2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, Z2 = { class: "action-link__name" }, X2 = ["textContent"], J2 = ["textContent"], Q2 = {
  key: 2,
  class: "action-link__text"
};
function eT(e, t, i, n, a, r) {
  return p(), h("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    s("a", {
      download: i.download,
      href: i.href,
      "aria-label": e.ariaLabel,
      target: i.target,
      title: i.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l))
    }, [
      Be(e.$slots, "icon", {}, () => [
        s("span", {
          "aria-hidden": "true",
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (p(), h("span", Y2, [
        s("strong", Z2, o(e.name), 1),
        t[1] || (t[1] = s("br", null, null, -1)),
        s("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, X2)
      ])) : e.isLongText ? (p(), h("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, J2)) : (p(), h("span", Q2, o(e.text), 1)),
      E("", !0)
    ], 8, W2)
  ], 8, K2);
}
const Ic = /* @__PURE__ */ ot(G2, [["render", eT], ["__scopeId", "data-v-32f01b7a"]]);
Ca(S0);
const tT = `<!--
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
`, iT = `<!--
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
`, nT = { class: "vue-skip-actions__container" }, aT = { class: "vue-skip-actions__headline" }, rT = { class: "vue-skip-actions__buttons" }, lT = /* @__PURE__ */ Ht({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ii(Ib, d), Ii(Lb, "#content-vue"), Ii("appName", z(() => t.appName));
    const i = cs(), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(), r = z(() => a.value === "navigation" ? iT : tT);
    kv(() => {
      const c = document.getElementById("skip-actions");
      c && (c.innerHTML = "", c.classList.add("vue-skip-actions"));
    });
    function l() {
      Fn("toggle-navigation", { open: !0 }), Rt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function d(c) {
      n.value = c, a.value || (a.value = "navigation");
    }
    return (c, g) => (p(), h("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(Ta) }]])
    }, [
      (p(), Pe(Ed, { to: "#skip-actions" }, [
        s("div", nT, [
          s("div", aT, o(u(Lt)("Keyboard navigation help")), 1),
          s("div", rT, [
            ge(de(on, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ke(l, ["prevent"]),
              onFocusin: g[0] || (g[0] = (v) => a.value = "navigation"),
              onMouseover: g[1] || (g[1] = (v) => a.value = "navigation")
            }, {
              default: we(() => [
                ie(o(u(Lt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [tr, n.value]
            ]),
            de(on, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: g[2] || (g[2] = (v) => a.value = "content"),
              onMouseover: g[3] || (g[3] = (v) => a.value = "content")
            }, {
              default: we(() => [
                ie(o(u(Lt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ge(de(bu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [tr, !u(i)]
          ])
        ])
      ])),
      Be(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), sT = /* @__PURE__ */ ot(lT, [["__scopeId", "data-v-d13dcb98"]]), oT = { class: "library-shelf-tree-node" }, uT = ["aria-expanded", "aria-label"], cT = ["href"], dT = { class: "library-shelf-summary-title" }, fT = { dir: "auto" }, pT = { class: "library-muted" }, hT = { dir: "auto" }, vT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, bT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, gT = {
  key: 3,
  class: "library-shelf-tree"
}, mT = ["disabled"], yT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(!1), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(!1), l = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(0);
    async function g() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await v();
    }
    async function v() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const m = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(c.value) }), y = await fetch(`${t.childrenUrl}?${m}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!y.ok) throw new Error("Shelf children request failed");
          const k = await y.json(), T = Array.isArray(k?.nodes) ? k.nodes : [];
          l.value.push(...T), d.value = k?.hasMore === !0, c.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : l.value.length, n.value = !d.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (m, y) => {
      const k = Ze("ShelfTreeNode", !0);
      return p(), h("li", oT, [
        e.node.hasChildren ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(w)("library", "Collapse {folder}", { folder: e.node.label }) : u(w)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: g
        }, o(i.value ? "−" : "+"), 9, uT)) : E("", !0),
        s("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          s("span", dT, [
            s("strong", null, [
              s("bdi", fT, o(e.node.label), 1)
            ]),
            s("span", null, o(u(fi)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          s("small", pT, [
            s("bdi", hT, o(e.node.path), 1)
          ])
        ], 8, cT),
        a.value ? (p(), h("small", vT, o(u(w)("library", "Loading folders…")), 1)) : r.value ? (p(), h("small", bT, o(u(w)("library", "Could not load folders.")), 1)) : E("", !0),
        i.value && l.value.length ? (p(), h("ul", gT, [
          (p(!0), h(W, null, he(l.value, (T) => (p(), Pe(k, {
            key: T.id,
            node: T,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : E("", !0),
        i.value && d.value ? (p(), h("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: v
        }, o(u(w)("library", "Load more folders")), 9, mT)) : E("", !0)
      ]);
    };
  }
}, _T = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, wT = ["src"], kT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ST = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(typeof IntersectionObserver > "u"), a = /* @__PURE__ */ G("loading");
    let r;
    return qe(() => t.src, () => {
      a.value = "loading";
    }), xt(() => {
      n.value || (r = new IntersectionObserver((l) => {
        l.some((d) => d.isIntersecting) && (n.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), Ti(() => r?.disconnect()), (l, d) => (p(), h("span", {
      ref_key: "frame",
      ref: i,
      class: Te(["library-cover-frame", { "library-cover-frame--error": a.value === "error" }])
    }, [
      a.value === "loading" ? (p(), h("span", _T)) : E("", !0),
      (p(), h("img", {
        key: e.src,
        class: Te(["library-cover-image", { "library-cover-image--loaded": a.value === "loaded" }]),
        src: n.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: d[0] || (d[0] = (c) => a.value = "loaded"),
        onError: d[1] || (d[1] = (c) => a.value = "error")
      }, null, 42, wT)),
      a.value === "error" ? (p(), h("span", kT, o(u(w)("library", "Cover unavailable")), 1)) : E("", !0)
    ], 2));
  }
};
async function Rh(e = "", t = "", i = null) {
  const n = await fetch(`${Ci("/apps/library/api/lists")}${e}`, {
    method: i === null ? "GET" : "POST",
    credentials: "same-origin",
    cache: "no-store",
    headers: { Accept: "application/json", ...i === null ? {} : { "Content-Type": "application/json", requesttoken: t } },
    ...i === null ? {} : { body: JSON.stringify(i) }
  });
  if (!n.ok) {
    const a = n.status === 409 ? w("library", "This list changed in another tab. Reload the list before trying again. Your unsaved text is still here.") : n.status === 404 ? w("library", "This list or entry is no longer available.") : n.status === 422 ? w("library", "Check the name, text length and selected books, then try again.") : w("library", "Could not save or load the list. Check your connection and reload before retrying."), r = new Error(a);
    throw r.status = n.status, r;
  }
  return n.json();
}
const qa = /* @__PURE__ */ new Map();
function va(e = "", t = "", i = null) {
  if (i !== null)
    return qa.clear(), Rh(e, t, i).finally(() => qa.clear());
  if (qa.has(e)) return qa.get(e);
  const n = Rh(e, t).finally(() => {
    qa.get(e) === n && qa.delete(e);
  });
  return qa.set(e, n), n;
}
const CT = ["aria-busy"], TT = { class: "library-list-inline-actions" }, AT = ["disabled", "aria-label"], ET = ["value"], $T = ["disabled"], xT = ["href"], OT = ["href"], NT = {
  key: 0,
  role: "status"
}, RT = {
  key: 1,
  role: "alert"
}, IT = ["disabled"], LT = {
  key: 3,
  role: "status"
}, pd = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(""), l = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G("");
    async function g() {
      l.value = !0, d.value = "";
      try {
        const m = await va(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        a.value = m.lists;
        const y = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(a.value.find((k) => k.id === y)?.id || a.value[0]?.id || "");
      } catch (m) {
        d.value = m.message;
      } finally {
        l.value = !1;
      }
    }
    async function v() {
      const m = a.value.find((k) => k.id === Number(r.value));
      if (l.value || !m || i.itemIds.length === 0) return;
      const y = [...i.itemIds];
      l.value = !0, d.value = "", c.value = "";
      try {
        const k = await va(`/${m.id}/actions`, i.requestToken, { action: "add", revision: m.revision, itemIds: y });
        m.revision = k.revision, c.value = w("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), y.length === 1 && k.skipped === 0 && (m.containsItem = !0), n("added", k);
      } catch (k) {
        d.value = k.message;
      } finally {
        l.value = !1;
      }
    }
    return qe(() => i.itemIds.join(","), () => {
      c.value = "";
    }), xt(g), (m, y) => (p(), h("div", {
      class: "library-add-to-list",
      "aria-busy": l.value ? "true" : "false"
    }, [
      s("div", TT, [
        a.value.length ? ge((p(), h("select", {
          key: 0,
          "onUpdate:modelValue": y[0] || (y[0] = (k) => r.value = k),
          disabled: l.value,
          "aria-label": u(w)("library", "Choose a list"),
          onChange: y[1] || (y[1] = (k) => c.value = "")
        }, [
          (p(!0), h(W, null, he(a.value, (k) => (p(), h("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, ET))), 128))
        ], 40, AT)), [
          [rt, r.value]
        ]) : E("", !0),
        a.value.length ? (p(), h("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: l.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(w)("library", "Add to list")), 9, $T)) : E("", !0),
        !l.value && !a.value.length && !d.value ? (p(), h("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(w)("library", "Create a new list")), 9, xT)) : E("", !0),
        c.value && r.value ? (p(), h("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(w)("library", "Back to list")), 9, OT)) : E("", !0)
      ]),
      l.value ? (p(), h("p", NT, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      d.value ? (p(), h("p", RT, o(d.value), 1)) : E("", !0),
      d.value ? (p(), h("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: l.value,
        onClick: g
      }, o(u(w)("library", "Reload list")), 9, IT)) : E("", !0),
      c.value ? (p(), h("p", LT, o(c.value), 1)) : E("", !0)
    ], 8, CT));
  }
}, PT = ["onKeydown"], DT = ["aria-label", "aria-describedby"], FT = ["id"], Ye = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = Sy(), i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(null), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G({});
    let l;
    const d = `${t}-label`;
    xt(() => {
      const $ = i.value?.closest("label"), N = $?.querySelector("input, select, textarea"), R = i.value?.closest("h1, h2, h3, h4");
      $ && N && !$.htmlFor && (N.id ||= `${t}-control`, $.htmlFor = N.id);
      for (const P of [N, R])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", d);
    });
    async function c() {
      clearTimeout(l), a.value = !0, await Rt(), g();
    }
    function g() {
      if (!i.value || !n.value) return;
      const $ = i.value.getBoundingClientRect(), N = n.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + N + 12 < window.innerHeight ? $.bottom + 8 : $.top - N - 8)}px` };
    }
    function v() {
      clearTimeout(l);
    }
    function m() {
      clearTimeout(l), a.value = !1;
    }
    function y() {
      l = setTimeout(() => {
        i.value?.contains(document.activeElement) || m();
      }, 150);
    }
    function k($) {
      !i.value?.contains($.target) && !n.value?.contains($.target) && m();
    }
    function T($) {
      $.key === "Escape" && m();
    }
    function C($) {
      a.value && (!($.target instanceof Node) || !n.value?.contains($.target)) && g();
    }
    return document.addEventListener("keydown", T), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), Ti(() => {
      clearTimeout(l), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", T);
    }), ($, N) => (p(), h("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: N[0] || (N[0] = (R) => R.pointerType !== "touch" && c()),
      onPointerleave: y,
      onKeydown: ft(ke(m, ["stop", "prevent"]), ["esc"])
    }, [
      s("span", { id: d }, [
        Be($.$slots, "default")
      ]),
      s("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(w)("library", "Help"),
        "aria-describedby": a.value ? u(t) : void 0,
        onFocus: c,
        onBlur: y,
        onClick: ke(c, ["stop", "prevent"])
      }, "?", 40, DT),
      (p(), Pe(Ed, { to: "body" }, [
        a.value ? (p(), h("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: n,
          class: "library-label-help-popup",
          role: "tooltip",
          style: pi(r.value),
          onPointerenter: v,
          onPointerleave: y
        }, o(e.text), 45, FT)) : E("", !0)
      ]))
    ], 40, PT));
  }
}, MT = ["aria-label", "aria-busy"], UT = { class: "library-lists-heading" }, zT = ["href"], jT = ["disabled"], BT = {
  key: 0,
  role: "alert"
}, HT = ["disabled"], VT = {
  key: 2,
  role: "status"
}, qT = {
  key: 3,
  role: "status"
}, GT = ["disabled"], KT = ["disabled"], WT = { class: "library-list-actions" }, YT = ["disabled"], ZT = ["disabled"], XT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, JT = {
  key: 1,
  class: "library-list-actions"
}, QT = ["href"], eA = ["disabled"], tA = ["disabled"], iA = ["aria-label"], nA = ["disabled"], aA = ["disabled"], rA = {
  key: 3,
  class: "library-lists-empty"
}, lA = ["start"], sA = ["id", "onDrop"], oA = { class: "library-list-entry-heading" }, uA = ["draggable", "title", "onDragstart"], cA = ["src"], dA = { class: "library-list-book" }, fA = { key: 0 }, pA = ["href"], hA = { key: 1 }, vA = {
  key: 2,
  dir: "auto"
}, bA = { key: 3 }, gA = ["href"], mA = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, yA = ["onSubmit"], _A = ["disabled"], wA = { class: "library-list-actions" }, kA = ["disabled"], SA = ["disabled"], CA = {
  key: 2,
  class: "library-list-actions"
}, TA = ["disabled", "onClick"], AA = ["disabled", "onClick"], EA = ["disabled", "onClick"], $A = ["disabled", "onClick"], xA = {
  key: 3,
  class: "library-list-confirm"
}, OA = ["disabled", "onClick"], NA = ["disabled"], RA = ["aria-label"], IA = ["disabled"], LA = ["disabled"], PA = {
  key: 1,
  class: "library-lists-empty"
}, DA = { class: "library-list-cards" }, FA = ["href"], MA = { dir: "auto" }, UA = {
  key: 0,
  dir: "auto"
}, zA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), l = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ Nt({ name: "", description: "" }), m = /* @__PURE__ */ G(null), y = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(!1), T = /* @__PURE__ */ G(null), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G(null), N = /* @__PURE__ */ G(Number(new URLSearchParams(window.location.search).get("listId")) || null), R = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = z(() => !l.value && m.value === null);
    async function I(j = 1, q = g.value) {
      l.value = !0, d.value = "";
      try {
        N.value ? r.value = await va(`/${N.value}?page=${j}`) : a.value = (await va()).lists, q || (m.value = null, g.value = !1);
      } catch (L) {
        d.value = L.message;
      } finally {
        l.value = !1;
      }
    }
    function ve() {
      v.name = r.value?.list.name || "", v.description = r.value?.list.description || "", g.value = !0, k.value = !1, d.value = "";
    }
    async function Q() {
      l.value = !0, d.value = "", c.value = "";
      try {
        if (r.value)
          await va(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          N.value = (await va("", i.requestToken, v)).list.id;
          const j = new URL(window.location.href);
          j.searchParams.set("listId", N.value), window.history.replaceState({}, "", j);
        }
        g.value = !1, await I(1, !0), n("changed"), c.value = w("library", "List saved."), await Rt(), $.value?.focus();
      } catch (j) {
        d.value = j.message;
      } finally {
        l.value = !1;
      }
    }
    async function x(j, q) {
      l.value = !0, d.value = "", c.value = "";
      try {
        const L = await va(`/${r.value.list.id}/actions`, i.requestToken, { ...j, revision: r.value.list.revision });
        if (j.action === "delete") {
          r.value = null, N.value = null, k.value = !1;
          const V = new URL(window.location.href);
          V.searchParams.delete("listId"), window.history.replaceState({}, "", V);
        }
        if (m.value = null, T.value = null, j.action === "note") {
          const V = r.value.entries.find((J) => J.id === j.entryId);
          V && (V.note = j.note.trim()), r.value.list.revision = L.revision;
        } else await I(r.value?.page || 1);
        j.action === "delete" && n("changed"), c.value = q, await Rt(), j.action === "move" ? document.getElementById(`library-list-entry-${j.entryId}`)?.focus() : $.value?.focus();
      } catch (L) {
        d.value = L.message;
      } finally {
        l.value = !1;
      }
    }
    function H(j) {
      m.value = j.id, y.value = j.note, T.value = null;
    }
    function K(j, q) {
      return x({ action: "move", entryId: j.id, direction: q }, w("library", "Reading order saved."));
    }
    function Z(j, q) {
      C.value = q.id, j.dataTransfer.setData("text/plain", String(q.id));
    }
    function ae(j) {
      if (C.value === null || !P.value) return;
      const q = C.value;
      return C.value = null, x({ action: "move", entryId: q, beforeId: j }, w("library", "Reading order saved."));
    }
    return xt(async () => {
      await I(), !N.value && new URLSearchParams(window.location.search).get("new") === "1" && ve();
    }), (j, q) => (p(), h("section", {
      class: "library-personal-lists",
      "aria-label": u(w)("library", "Personal lists"),
      "aria-busy": l.value ? "true" : "false"
    }, [
      s("header", UT, [
        s("div", null, [
          N.value ? (p(), h("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(w)("library", "All lists")), 9, zT)) : E("", !0),
          s("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            de(Ye, {
              text: u(w)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: we(() => [
                ie(o(r.value?.list.name || u(w)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !N.value ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: l.value || g.value,
          onClick: ve
        }, o(u(w)("library", "New list")), 9, jT)) : E("", !0)
      ]),
      d.value ? (p(), h("p", BT, o(d.value), 1)) : E("", !0),
      d.value ? (p(), h("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: l.value,
        onClick: q[0] || (q[0] = (L) => I(r.value?.page || 1, !0))
      }, o(u(w)("library", "Reload list")), 9, HT)) : E("", !0),
      c.value ? (p(), h("p", VT, o(c.value), 1)) : E("", !0),
      l.value ? (p(), h("p", qT, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      g.value ? (p(), h("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: ke(Q, ["prevent"])
      }, [
        s("label", null, [
          ie(o(u(w)("library", "List name")), 1),
          ge(s("input", {
            "onUpdate:modelValue": q[1] || (q[1] = (L) => v.name = L),
            required: "",
            maxlength: "120",
            disabled: l.value
          }, null, 8, GT), [
            [je, v.name]
          ])
        ]),
        s("label", null, [
          ie(o(u(w)("library", "Description / list note")), 1),
          ge(s("textarea", {
            "onUpdate:modelValue": q[2] || (q[2] = (L) => v.description = L),
            rows: "3",
            maxlength: "10000",
            disabled: l.value
          }, null, 8, KT), [
            [je, v.description]
          ])
        ]),
        s("div", WT, [
          s("button", {
            type: "submit",
            class: "button primary",
            disabled: l.value || !v.name.trim()
          }, o(u(w)("library", "Save list")), 9, YT),
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: l.value,
            onClick: q[3] || (q[3] = (L) => g.value = !1)
          }, o(u(w)("library", "Cancel")), 9, ZT)
        ])
      ], 32)) : E("", !0),
      r.value ? (p(), h(W, { key: 5 }, [
        r.value.list.description && !g.value ? (p(), h("p", XT, o(r.value.list.description), 1)) : E("", !0),
        g.value ? E("", !0) : (p(), h("div", JT, [
          s("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(w)("library", "Add books from catalogue")), 9, QT),
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: ve
          }, o(u(w)("library", "Edit list")), 9, eA),
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: q[4] || (q[4] = (L) => k.value = !k.value)
          }, o(u(w)("library", "Delete list")), 9, tA)
        ])),
        k.value ? (p(), h("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(w)("library", "Confirm list deletion")
        }, [
          s("p", null, o(u(w)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          s("button", {
            class: "button",
            type: "button",
            disabled: !P.value,
            onClick: q[5] || (q[5] = (L) => x({ action: "delete" }, u(w)("library", "List deleted.")))
          }, o(u(w)("library", "Delete list and notes")), 9, nA),
          s("button", {
            class: "button secondary",
            type: "button",
            disabled: l.value,
            onClick: q[6] || (q[6] = (L) => k.value = !1)
          }, o(u(w)("library", "Cancel")), 9, aA)
        ], 8, iA)) : E("", !0),
        r.value.total === 0 && !l.value ? (p(), h("p", rA, o(u(w)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : E("", !0),
        s("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (p(!0), h(W, null, he(r.value.entries, (L) => (p(), h("li", {
            id: `library-list-entry-${L.id}`,
            key: L.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: q[11] || (q[11] = ke(() => {
            }, ["prevent"])),
            onDrop: ke((V) => ae(L.id), ["prevent"])
          }, [
            s("div", oA, [
              s("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(w)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (V) => Z(V, L),
                onDragend: q[7] || (q[7] = (V) => C.value = null)
              }, "⠿", 40, uA),
              L.book ? (p(), h("img", {
                key: 0,
                src: L.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, cA)) : E("", !0),
              s("div", dA, [
                L.book ? (p(), h("h2", fA, [
                  s("a", {
                    href: L.book.detailsUrl,
                    dir: "auto"
                  }, o(L.book.title), 9, pA)
                ])) : (p(), h("h2", hA, o(u(w)("library", "Unavailable book")), 1)),
                L.book?.creators ? (p(), h("p", vA, o(L.book.creators), 1)) : E("", !0),
                L.book ? E("", !0) : (p(), h("p", bA, o(u(w)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              L.book ? (p(), h("a", {
                key: 1,
                class: "button secondary",
                href: L.book.openUrl
              }, o(u(w)("library", "Open")), 9, gA)) : E("", !0)
            ]),
            L.note && m.value !== L.id ? (p(), h("p", mA, o(L.note), 1)) : E("", !0),
            m.value === L.id ? (p(), h("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: ke((V) => x({ action: "note", entryId: L.id, note: y.value }, u(w)("library", "Note saved.")), ["prevent"])
            }, [
              s("label", null, [
                ie(o(u(w)("library", "Your note for this book in this list")), 1),
                ge(s("textarea", {
                  "onUpdate:modelValue": q[8] || (q[8] = (V) => y.value = V),
                  maxlength: "10000",
                  rows: "3",
                  disabled: l.value
                }, null, 8, _A), [
                  [je, y.value]
                ])
              ]),
              s("div", wA, [
                s("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: l.value
                }, o(u(w)("library", "Save note")), 9, kA),
                s("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: l.value,
                  onClick: q[9] || (q[9] = (V) => m.value = null)
                }, o(u(w)("library", "Cancel")), 9, SA)
              ])
            ], 40, yA)) : (p(), h("div", CA, [
              s("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => H(L)
              }, o(L.note ? u(w)("library", "Edit note") : u(w)("library", "Add note")), 9, TA),
              s("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || L.number === 1,
                onClick: (V) => K(L, "up")
              }, o(u(w)("library", "Move up")), 9, AA),
              s("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || L.number === r.value.total,
                onClick: (V) => K(L, "down")
              }, o(u(w)("library", "Move down")), 9, EA),
              s("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => T.value = L.id
              }, o(u(w)("library", "Remove from list")), 9, $A)
            ])),
            T.value === L.id ? (p(), h("div", xA, [
              s("p", null, o(u(w)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              s("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (V) => x({ action: "remove", entryId: L.id }, u(w)("library", "Book removed from list."))
              }, o(u(w)("library", "Remove entry and note")), 9, OA),
              s("button", {
                type: "button",
                class: "button secondary",
                disabled: l.value,
                onClick: q[10] || (q[10] = (V) => T.value = null)
              }, o(u(w)("library", "Cancel")), 9, NA)
            ])) : E("", !0)
          ], 40, sA))), 128))
        ], 8, lA),
        r.value.pages > 1 ? (p(), h("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(w)("library", "List pages")
        }, [
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: q[12] || (q[12] = (L) => I(r.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, IA),
          s("span", null, o(u(w)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: q[13] || (q[13] = (L) => I(r.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, LA)
        ], 8, RA)) : E("", !0)
      ], 64)) : N.value ? E("", !0) : (p(), h(W, { key: 6 }, [
        u(R) ? (p(), Pe(pd, {
          key: 0,
          "item-ids": [u(R)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: q[14] || (q[14] = (L) => I())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : E("", !0),
        !a.value.length && !l.value && !g.value ? (p(), h("p", PA, o(u(w)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : E("", !0),
        s("ul", DA, [
          (p(!0), h(W, null, he(a.value, (L) => (p(), h("li", {
            key: L.id
          }, [
            s("a", {
              href: `${e.listsUrl}&listId=${L.id}`
            }, [
              s("h2", MA, o(L.name), 1),
              s("p", null, o(u(w)("library", "Books: {count}", { count: L.count })), 1),
              L.description ? (p(), h("p", UA, o(L.description), 1)) : E("", !0)
            ], 8, FA)
          ]))), 128))
        ])
      ], 64))
    ], 8, MT));
  }
}, jA = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, BA = ["aria-busy"], HA = ["href"], VA = { id: "authors-heading" }, qA = {
  key: 1,
  role: "alert"
}, GA = ["disabled"], KA = {
  key: 2,
  role: "status"
}, WA = {
  key: 3,
  role: "status"
}, YA = { for: "author-search" }, ZA = ["disabled"], XA = {
  key: 0,
  role: "status"
}, JA = ["disabled"], QA = {
  key: 1,
  class: "author-directory"
}, eE = ["href"], tE = { dir: "auto" }, iE = { key: 2 }, nE = {
  key: 0,
  role: "status"
}, aE = ["disabled"], rE = ["disabled"], lE = { for: "author-display" }, sE = ["disabled"], oE = { for: "author-sort" }, uE = ["disabled"], cE = { for: "author-given" }, dE = ["disabled"], fE = { for: "author-family" }, pE = ["disabled"], hE = ["disabled"], vE = ["disabled"], bE = { class: "author-books" }, gE = ["href"], mE = { dir: "auto" }, yE = ["aria-label"], _E = ["disabled"], wE = ["disabled"], kE = {
  __name: "Authors",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(""), r = /* @__PURE__ */ G(""), l = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(1), v = /* @__PURE__ */ G(Number(new URLSearchParams(location.search).get("authorId")) || null), m = /* @__PURE__ */ Nt({ display_name: "", sort_name: "", given_name: "", family_name: "" });
    async function y($, N = null) {
      const R = await fetch(Ci("/apps/library/api/authors") + $, {
        credentials: "same-origin",
        cache: "no-store",
        method: N === null ? "GET" : "POST",
        headers: { Accept: "application/json", ...N === null ? {} : { "Content-Type": "application/json", requesttoken: t.requestToken } },
        ...N === null ? {} : { body: JSON.stringify(N) }
      });
      if (!R.ok) throw new Error(R.status === 503 ? w("library", "Author migration must finish before editing. Refresh to check progress.") : R.status === 409 ? w("library", "This author changed in another tab. Reload before saving again. Your draft is preserved.") : w("library", "Could not load or save the author. Check the fields and reload before retrying."));
      return R.json();
    }
    async function k($ = 1) {
      n.value = !0, a.value = "";
      try {
        i.value = await y(v.value ? `/${v.value}?page=${$}` : `?page=${$}&search=${encodeURIComponent(d.value.trim())}&unused=${c.value ? 1 : 0}`), g.value = $;
      } catch (N) {
        a.value = N.message;
      } finally {
        n.value = !1;
      }
    }
    function T() {
      for (const $ of Object.keys(m)) m[$] = i.value.author[$] || "";
      l.value = !0, r.value = "";
    }
    async function C() {
      n.value = !0, a.value = "";
      try {
        i.value = await y(`/${v.value}`, { ...m, revision: Number(i.value.author.revision) }), l.value = !1, g.value = 1, r.value = w("library", "Author saved. Original book credits are preserved.");
      } catch ($) {
        a.value = $.message;
      } finally {
        n.value = !1;
      }
    }
    return xt(() => k()), ($, N) => (p(), h("section", {
      class: "library-authors",
      "aria-busy": n.value,
      "aria-labelledby": "authors-heading"
    }, [
      v.value ? (p(), h("a", {
        key: 0,
        href: `${e.catalogueUrl}?authors=1`
      }, o(u(w)("library", "All authors")), 9, HA)) : E("", !0),
      s("h1", VA, o(i.value?.author?.display_name || u(w)("library", "Authors")), 1),
      a.value ? (p(), h("p", qA, [
        ie(o(a.value) + " ", 1),
        s("button", {
          disabled: n.value,
          onClick: N[0] || (N[0] = (R) => k(g.value))
        }, o(u(w)("library", "Reload")), 9, GA)
      ])) : E("", !0),
      r.value ? (p(), h("p", KA, o(r.value), 1)) : E("", !0),
      n.value ? (p(), h("p", WA, o(u(w)("library", "Loading")), 1)) : E("", !0),
      v.value ? i.value?.author ? (p(), h(W, { key: 5 }, [
        s("p", null, o(u(fi)("library", "%n book", "%n books", i.value.bookCount)), 1),
        i.value.canEdit ? E("", !0) : (p(), h("p", nE, [
          ie(o(u(w)("library", "Author migration must finish before editing. Refresh to check progress.")) + " ", 1),
          s("button", {
            disabled: n.value,
            onClick: N[5] || (N[5] = (R) => k(g.value))
          }, o(u(w)("library", "Refresh")), 9, aE)
        ])),
        l.value ? (p(), h("form", {
          key: 2,
          class: "author-editor",
          onSubmit: ke(C, ["prevent"])
        }, [
          s("p", null, o(u(w)("library", "This edits the shared author record. Book credits and files stay unchanged.")), 1),
          s("label", lE, o(u(w)("library", "Preferred name")), 1),
          ge(s("input", {
            id: "author-display",
            "onUpdate:modelValue": N[6] || (N[6] = (R) => m.display_name = R),
            maxlength: "255",
            required: "",
            disabled: n.value
          }, null, 8, sE), [
            [je, m.display_name]
          ]),
          s("label", oE, [
            ie(o(u(w)("library", "Sort name")) + " ", 1),
            de(Ye, {
              text: u(w)("library", "For example: Doe, John. Controls author directory ordering.")
            }, null, 8, ["text"])
          ]),
          ge(s("input", {
            id: "author-sort",
            "onUpdate:modelValue": N[7] || (N[7] = (R) => m.sort_name = R),
            maxlength: "255",
            required: "",
            disabled: n.value
          }, null, 8, uE), [
            [je, m.sort_name]
          ]),
          s("label", cE, [
            ie(o(u(w)("library", "Given name")) + " ", 1),
            de(Ye, {
              text: u(w)("library", "Optional. Leave empty for organisations or names you cannot safely split.")
            }, null, 8, ["text"])
          ]),
          ge(s("input", {
            id: "author-given",
            "onUpdate:modelValue": N[8] || (N[8] = (R) => m.given_name = R),
            maxlength: "255",
            disabled: n.value
          }, null, 8, dE), [
            [je, m.given_name]
          ]),
          s("label", fE, o(u(w)("library", "Family name")), 1),
          ge(s("input", {
            id: "author-family",
            "onUpdate:modelValue": N[9] || (N[9] = (R) => m.family_name = R),
            maxlength: "255",
            disabled: n.value
          }, null, 8, pE), [
            [je, m.family_name]
          ]),
          s("div", null, [
            s("button", {
              class: "primary",
              disabled: n.value,
              type: "submit"
            }, o(u(w)("library", "Save author")), 9, hE),
            N[13] || (N[13] = ie()),
            s("button", {
              disabled: n.value,
              type: "button",
              onClick: N[10] || (N[10] = (R) => l.value = !1)
            }, o(u(w)("library", "Cancel")), 9, vE)
          ])
        ], 32)) : (p(), h("button", {
          key: 1,
          disabled: n.value || !i.value.canEdit,
          onClick: T
        }, o(u(w)("library", "Edit author")), 9, rE)),
        s("ul", bE, [
          (p(!0), h(W, null, he(i.value.books, (R) => (p(), h("li", {
            key: R.id
          }, [
            s("a", {
              href: u(Ci)("/apps/library/items/{id}", { id: R.id }),
              dir: "auto"
            }, o(R.title), 9, gE),
            s("span", mE, o(u(w)("library", "Original credit: {credit}", { credit: R.creators || "—" })), 1)
          ]))), 128))
        ])
      ], 64)) : E("", !0) : (p(), h(W, { key: 4 }, [
        s("form", {
          class: "author-search",
          onSubmit: N[3] || (N[3] = ke((R) => k(1), ["prevent"]))
        }, [
          s("label", YA, [
            ie(o(u(w)("library", "Search authors")) + " ", 1),
            de(Ye, {
              text: u(w)("library", "Matches the beginning of the preferred name or sort name.")
            }, null, 8, ["text"])
          ]),
          ge(s("input", {
            id: "author-search",
            "onUpdate:modelValue": N[1] || (N[1] = (R) => d.value = R),
            maxlength: "255",
            type: "search"
          }, null, 512), [
            [je, d.value]
          ]),
          s("label", null, [
            ge(s("input", {
              "onUpdate:modelValue": N[2] || (N[2] = (R) => c.value = R),
              type: "checkbox"
            }, null, 512), [
              [wa, c.value]
            ]),
            ie(" " + o(u(w)("library", "Unused authors")), 1)
          ]),
          s("button", {
            disabled: n.value,
            type: "submit"
          }, o(u(w)("library", "Search")), 9, ZA)
        ], 32),
        i.value?.migration && (i.value.migration.pending || i.value.migration.failed || i.value.migration.conflict) ? (p(), h("p", XA, [
          ie(o(u(w)("library", "Author migration: {pending} pending, {failed} failed, {conflict} need review.", i.value.migration)) + " ", 1),
          s("button", {
            disabled: n.value,
            onClick: N[4] || (N[4] = (R) => k(g.value))
          }, o(u(w)("library", "Refresh")), 9, JA)
        ])) : E("", !0),
        i.value ? (p(), h("ul", QA, [
          (p(!0), h(W, null, he(i.value.authors, (R) => (p(), h("li", {
            key: R.id
          }, [
            s("a", {
              href: `${e.catalogueUrl}?authors=1&authorId=${R.id}`,
              dir: "auto"
            }, o(R.display_name), 9, eE),
            s("span", tE, o(R.sort_name), 1),
            s("span", null, o(u(fi)("library", "%n book", "%n books", Number(R.book_count))), 1)
          ]))), 128))
        ])) : E("", !0),
        i.value && !i.value.authors.length ? (p(), h("p", iE, o(u(w)("library", "No authors found.")), 1)) : E("", !0)
      ], 64)),
      i.value ? (p(), h("nav", {
        key: 6,
        class: "author-pagination",
        "aria-label": u(w)("library", "Author pages")
      }, [
        s("button", {
          disabled: n.value || l.value || g.value === 1,
          onClick: N[11] || (N[11] = (R) => k(g.value - 1))
        }, o(u(w)("library", "Previous")), 9, _E),
        s("span", null, o(u(w)("library", "Page {page}", { page: g.value })), 1),
        s("button", {
          disabled: n.value || l.value || !i.value.hasNext,
          onClick: N[12] || (N[12] = (R) => k(g.value + 1))
        }, o(u(w)("library", "Next")), 9, wE)
      ], 8, yE)) : E("", !0)
    ], 8, BA));
  }
}, SE = /* @__PURE__ */ jA(kE, [["__scopeId", "data-v-a5974a56"]]);
function pg(e, t, i) {
  const n = /* @__PURE__ */ G({}), a = /* @__PURE__ */ G("idle");
  let r, l, d = 0;
  return qe([e, t], () => {
    clearTimeout(r), l?.abort();
    const c = ++d;
    n.value = {}, a.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      l = new AbortController();
      try {
        const g = await fetch(Ci("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: l.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!g.ok) throw new Error("lookup_failed");
        const v = await g.json();
        if (c !== d) return;
        n.value = v.items || {}, a.value = v.enabled ? v.status : "disabled";
      } catch (g) {
        c === d && g.name !== "AbortError" && (a.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), Ti(() => {
    d++, clearTimeout(r), l?.abort();
  }), { results: n, status: a };
}
const CE = ["aria-label", "aria-busy"], TE = {
  key: 0,
  role: "status"
}, AE = {
  key: 1,
  role: "alert"
}, EE = {
  key: 2,
  role: "status"
}, $E = { key: 3 }, xE = { key: 4 }, OE = {
  key: 5,
  role: "status"
}, NE = {
  key: 6,
  class: "library-suggestion-list"
}, RE = ["href"], IE = ["disabled", "onClick"], LE = {
  key: 0,
  role: "status"
}, PE = { class: "library-suggestion-list" }, DE = { class: "library-suggestion-comparison" }, FE = ["src"], ME = { class: "library-duplicate-actions" }, UE = ["href"], zE = ["href"], jE = ["disabled", "onClick"], BE = { class: "library-duplicate-actions" }, HE = ["disabled"], VE = ["disabled"], qE = ["disabled"], hg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(0), n = z(() => (i.value, t.itemId ? [t.itemId] : [])), a = z(() => t.enabled), r = z(() => t.requestToken), { results: l, status: d } = pg(n, a, r), c = z(() => l.value[t.itemId]), g = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), m = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(!1), k = { formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") };
    let T = 0;
    async function C(R, P) {
      const I = await fetch(Ci("/apps/library/api/duplicate-suggestions" + R), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!I.ok) throw new Error(I.status === 409 ? w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : w("library", "Could not complete the duplicate review. Please try again."));
      return I.json();
    }
    async function $(R) {
      const P = ++T;
      v.value = !0, m.value = "", y.value = !1;
      try {
        const I = await C(`/compare/${t.itemId}/${R}`);
        P === T && (g.value = I);
      } catch (I) {
        P === T && (m.value = I.message);
      } finally {
        P === T && (v.value = !1);
      }
    }
    async function N(R, P = 0) {
      v.value = !0, m.value = "";
      try {
        await C(`/compare/${g.value.books[0].id}/${g.value.books[1].id}`, { signature: g.value.signature, decision: R, preferredId: P }), y.value = !0, i.value++, g.value = null;
      } catch (I) {
        m.value = I.message;
      } finally {
        v.value = !1;
      }
    }
    return qe(() => [t.itemId, t.compareId], () => {
      T++, g.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (R, P) => (p(), h("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      s("h3", null, o(u(w)("library", "Possible duplicates")), 1),
      u(d) === "pending" ? (p(), h("p", TE, o(u(w)("library", "Checking possible duplicates")), 1)) : E("", !0),
      u(d) === "error" || m.value ? (p(), h("p", AE, o(m.value || u(w)("library", "Could not complete the duplicate review. Please try again.")), 1)) : E("", !0),
      u(d) === "building" || c.value?.status === "partial" ? (p(), h("p", EE, o(u(w)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
      c.value?.status === "unavailable" ? (p(), h("p", $E, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : E("", !0),
      c.value?.status === "checked" && !c.value.count ? (p(), h("p", xE, o(u(w)("library", "No unreviewed suggestions found.")), 1)) : E("", !0),
      y.value ? (p(), h("p", OE, o(u(w)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : E("", !0),
      c.value?.count && !g.value ? (p(), h("ul", NE, [
        (p(!0), h(W, null, he(c.value.matches, (I) => (p(), h("li", {
          key: I.id
        }, [
          e.full ? (p(), h("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (ve) => $(I.id)
          }, [
            s("bdi", null, o(I.title), 1),
            ie(" · " + o(I.format.toUpperCase()), 1)
          ], 8, IE)) : (p(), h("a", {
            key: 0,
            href: I.url
          }, [
            s("bdi", null, o(I.title), 1),
            ie(" · " + o(I.format.toUpperCase()), 1)
          ], 8, RE))
        ]))), 128))
      ])) : E("", !0),
      g.value ? (p(), h(W, { key: 7 }, [
        g.value.reasons.length ? E("", !0) : (p(), h("p", LE, o(u(w)("library", "These books no longer match the current metadata rules.")), 1)),
        s("ul", PE, [
          (p(!0), h(W, null, he(g.value.flags, (I) => (p(), h("li", { key: I }, o(k[I]), 1))), 128))
        ]),
        s("div", DE, [
          (p(!0), h(W, null, he(g.value.books, (I) => (p(), h("article", {
            key: I.id
          }, [
            s("img", {
              src: I.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, FE),
            s("h3", null, [
              s("bdi", null, o(I.title), 1)
            ]),
            s("p", null, [
              s("bdi", null, o(I.authors.join("; ")), 1)
            ]),
            s("p", null, o(I.format.toUpperCase()) + " · " + o(I.language || "—") + " · " + o(I.publicationDate || "—"), 1),
            s("p", null, [
              s("bdi", null, o(I.publisher), 1)
            ]),
            s("p", null, [
              s("bdi", null, o(I.path), 1)
            ]),
            s("div", ME, [
              s("a", {
                class: "button secondary",
                href: I.detailsUrl
              }, o(u(w)("library", "Details")), 9, UE),
              s("a", {
                class: "button secondary",
                href: I.openUrl
              }, o(u(w)("library", "Open")), 9, zE),
              s("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (ve) => N("preferred", I.id)
              }, o(u(w)("library", "Prefer this copy")), 9, jE)
            ])
          ]))), 128))
        ]),
        s("div", BE, [
          s("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (I) => N("keep"))
          }, o(u(w)("library", "Keep both")), 9, HE),
          s("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (I) => N("dismissed"))
          }, o(u(w)("library", "Dismiss match")), 9, VE),
          s("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (I) => N("unreviewed"))
          }, o(u(w)("library", "Reset review decision")), 9, qE)
        ])
      ], 64)) : E("", !0)
    ], 8, CE));
  }
}, GE = ["aria-busy"], KE = ["checked", "disabled"], WE = {
  key: 0,
  role: "alert"
}, YE = {
  key: 1,
  role: "status"
}, ZE = {
  key: 2,
  role: "alert"
}, XE = {
  key: 3,
  role: "status"
}, JE = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G({ enabled: !1, status: "disabled" }), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G("");
    let r = !0, l;
    async function d() {
      try {
        const g = await fetch(Ci("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!g.ok) throw new Error();
        const v = await g.json();
        r && (i.value = v, v.status === "building" && (l = setTimeout(d, 5e3)));
      } catch {
        r && (a.value = w("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function c(g) {
      n.value = !0, a.value = "", clearTimeout(l);
      try {
        const v = await fetch(Ci("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: g.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (l = setTimeout(d, 2e3));
      } catch {
        a.value = w("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        n.value = !1;
      }
    }
    return xt(d), Ti(() => {
      r = !1, clearTimeout(l);
    }), (g, v) => (p(), h("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": n.value ? "true" : "false"
    }, [
      s("label", null, [
        s("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: n.value,
          onChange: c
        }, null, 40, KE),
        de(Ye, {
          text: u(w)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      a.value ? (p(), h("p", WE, o(a.value), 1)) : E("", !0),
      i.value.status === "building" ? (p(), h("p", YE, o(u(w)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : E("", !0),
      i.value.status === "failed" ? (p(), h("p", ZE, o(u(w)("library", "Duplicate scan failed")), 1)) : E("", !0),
      i.value.status === "ready" ? (p(), h("p", XE, o(u(w)("library", "Automatic duplicate suggestions are ready.")), 1)) : E("", !0)
    ], 8, GE));
  }
}, QE = ["aria-label", "aria-busy"], e$ = ["href"], t$ = {
  key: 1,
  role: "alert"
}, i$ = {
  key: 2,
  role: "status"
}, n$ = ["disabled"], a$ = { value: "0" }, r$ = ["value"], l$ = { class: "library-duplicate-checkbox" }, s$ = ["disabled"], o$ = ["disabled"], u$ = ["value", "disabled"], c$ = { value: "" }, d$ = ["value"], f$ = ["aria-label"], p$ = { role: "status" }, h$ = ["value", "max", "aria-label"], v$ = {
  key: 1,
  role: "status"
}, b$ = {
  key: 2,
  role: "alert"
}, g$ = {
  key: 3,
  role: "alert"
}, m$ = { class: "library-duplicate-actions" }, y$ = ["disabled"], _$ = ["disabled"], w$ = ["disabled"], k$ = ["disabled"], S$ = { value: "all" }, C$ = ["value"], T$ = {
  key: 0,
  role: "status"
}, A$ = ["data-pair-id"], E$ = {
  key: 0,
  role: "status"
}, $$ = { class: "library-duplicate-decision" }, x$ = ["aria-label"], O$ = ["aria-label"], N$ = {
  key: 1,
  role: "alert"
}, R$ = { class: "library-duplicate-books" }, I$ = { class: "library-duplicate-book-heading" }, L$ = ["src"], P$ = { dir: "auto" }, D$ = { dir: "auto" }, F$ = { key: 0 }, M$ = { dir: "auto" }, U$ = { dir: "ltr" }, z$ = { dir: "auto" }, j$ = { class: "library-duplicate-actions" }, B$ = ["href"], H$ = ["href"], V$ = ["disabled", "onClick"], q$ = { class: "library-duplicate-actions" }, G$ = ["disabled", "onClick"], K$ = ["disabled", "onClick"], W$ = ["disabled", "onClick"], Y$ = ["aria-label"], Z$ = ["disabled"], X$ = ["disabled"], J$ = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, n = e, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), l = /* @__PURE__ */ G("0"), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(null), g = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G("unreviewed");
    let k, T = !0, C = 0;
    const $ = z(() => c.value?.status === "running"), N = z(() => ({ running: w("library", "Finding possible duplicates"), completed: w("library", "Duplicate scan complete"), cancelled: w("library", "Duplicate scan cancelled"), failed: w("library", "Duplicate scan failed"), limited: w("library", "Duplicate scan reached its limit") })), R = z(() => ({ unreviewed: w("library", "To review"), preferred: w("library", "Preferred copy selected"), keep: w("library", "Keep both"), dismissed: w("library", "Dismissed") })), P = z(() => ({ identical: w("library", "Identical file contents"), isbn: w("library", "Same ISBN"), title_author: w("library", "Same normalized title and authors"), similar_title_author: w("library", "Similar title and matching authors") })), I = z(() => ({ formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") })), ve = (J) => J < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: J < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(J < 1e3 ? J : J / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(J / 1048576) + " " + w("library", "MiB");
    async function Q(J = "", ne) {
      const Y = await fetch(Ci(`/apps/library/api/duplicates${J}`), { credentials: "same-origin", cache: "no-store", method: ne === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: n.requestToken }, ...ne === void 0 ? {} : { body: JSON.stringify(ne) } }), pe = await Y.json().catch(() => ({}));
      if (!Y.ok)
        throw Y.status === 409 ? new Error(w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : pe.error === "decision_limit" ? new Error(w("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : pe.error === "history_limit" ? new Error(w("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : pe.error === "scope_limit" ? new Error(w("library", "This scope is too large. Choose a smaller library root.")) : Y.status === 404 ? new Error(w("library", "This scan or these books are no longer available.")) : new Error(w("library", "Could not complete the duplicate review. Please try again."));
      return pe;
    }
    async function x() {
      const J = await Q();
      T && (a.value = J.roots, r.value = J.scans);
    }
    async function H(J) {
      g.value = !0, v.value = "";
      try {
        await J();
      } catch (ne) {
        T && (v.value = ne.message);
      } finally {
        T && (g.value = !1);
      }
    }
    function K() {
      if (clearTimeout(k), !T || !$.value) return;
      const J = C, ne = c.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${ne}/advance`, {}), !T || J !== C) return;
          const Y = await Q(`/${ne}?page=${c.value.page}&filter=${y.value}`);
          if (!T || J !== C) return;
          c.value = Y, $.value || await x(), K();
        } catch (Y) {
          T && J === C && (v.value = Y.message);
        }
      }, 1500);
    }
    async function Z() {
      await H(async () => {
        c.value = await Q("", { rootId: Number(l.value), contents: d.value }), C++, y.value = "unreviewed", m.value = "", await x(), K();
      });
    }
    async function ae(J, ne = 1) {
      const Y = ++C;
      clearTimeout(k), await H(async () => {
        const pe = await Q(`/${J}?page=${ne}&filter=${y.value}`);
        T && Y === C && (c.value = pe, l.value = String(pe.rootId), d.value = !!pe.contents, K());
      });
    }
    function j(J) {
      y.value = "unreviewed", m.value = "", J.target.value && ae(J.target.value);
    }
    async function q() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/cancel`, {}), c.value = await Q(`/${c.value.id}?filter=${y.value}`), await x();
      });
    }
    async function L() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/discard`, {}), c.value = null, await x();
      });
    }
    async function V(J, ne, Y = 0) {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/pairs/${J.id}`, { signature: J.signature, decision: ne, preferredId: Y }), m.value = w("library", "Review saved. Your files and catalogue metadata were not changed."), c.value = await Q(`/${c.value.id}?page=${c.value.page}&filter=${y.value}`), K();
      });
    }
    return xt(() => H(x)), Ti(() => {
      T = !1, C++, clearTimeout(k);
    }), (J, ne) => (p(), h("section", {
      class: "library-duplicates",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": g.value ? "true" : "false"
    }, [
      s("a", { href: e.reviewUrl }, "← " + o(u(w)("library", "Review")), 9, e$),
      s("h1", null, [
        de(Ye, {
          text: u(w)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      de(JE, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (p(), Pe(hg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : E("", !0),
      v.value ? (p(), h("p", t$, o(v.value), 1)) : E("", !0),
      m.value ? (p(), h("p", i$, o(m.value), 1)) : E("", !0),
      s("form", {
        class: "library-duplicate-toolbar",
        onSubmit: ke(Z, ["prevent"])
      }, [
        s("label", null, [
          ie(o(u(w)("library", "Library root")), 1),
          ge(s("select", {
            "onUpdate:modelValue": ne[0] || (ne[0] = (Y) => l.value = Y),
            disabled: g.value || $.value
          }, [
            s("option", a$, o(u(w)("library", "All library roots")), 1),
            (p(!0), h(W, null, he(a.value, (Y) => (p(), h("option", {
              key: Y.id,
              value: String(Y.id)
            }, o(Y.label), 9, r$))), 128))
          ], 8, n$), [
            [rt, l.value]
          ])
        ]),
        s("label", l$, [
          ge(s("input", {
            "onUpdate:modelValue": ne[1] || (ne[1] = (Y) => d.value = Y),
            type: "checkbox",
            disabled: g.value || $.value
          }, null, 8, s$), [
            [wa, d.value]
          ]),
          de(Ye, {
            text: u(w)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        s("button", {
          class: "button primary",
          disabled: g.value || $.value || !a.value.length
        }, o(u(w)("library", "Find possible duplicates")), 9, o$)
      ], 32),
      s("label", null, [
        de(Ye, {
          text: u(w)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        s("select", {
          value: c.value?.id || "",
          disabled: g.value,
          onChange: j
        }, [
          s("option", c$, o(u(w)("library", "Choose a scan")), 1),
          (p(!0), h(W, null, he(r.value, (Y) => (p(), h("option", {
            key: Y.id,
            value: Y.id
          }, o(new Date(Number(Y.created_at) * 1e3).toLocaleString()) + " · " + o(N.value[Y.status]), 9, d$))), 128))
        ], 40, u$)
      ]),
      c.value ? (p(), h(W, { key: 3 }, [
        s("section", {
          class: "library-duplicate-progress",
          "aria-label": u(w)("library", "Duplicate scan progress")
        }, [
          s("strong", null, o(c.value.rootId ? c.value.label : u(w)("library", "All library roots")), 1),
          s("p", p$, [
            ie(o(N.value[c.value.status]), 1),
            $.value ? (p(), h(W, { key: 0 }, [
              ie(" · " + o(c.value.phase === "index" ? u(w)("library", "Indexing metadata") : u(w)("library", "Comparing candidates")), 1)
            ], 64)) : E("", !0),
            ie(" · " + o(c.value.processed) + "/" + o(c.value.total), 1)
          ]),
          $.value ? (p(), h("progress", {
            key: 0,
            value: c.value.phase === "index" ? c.value.processed : void 0,
            max: Math.max(c.value.total, 1),
            "aria-label": u(w)("library", "Duplicate scan progress")
          }, null, 8, h$)) : E("", !0),
          s("p", null, o(u(w)("library", "Possible matches")) + ": " + o(c.value.matches) + " · " + o(u(w)("library", "Comparisons checked")) + ": " + o(c.value.examined), 1),
          c.value.hashSkipped || c.value.unavailable ? (p(), h("p", v$, o(u(w)("library", "Content checks skipped")) + ": " + o(c.value.hashSkipped) + " · " + o(u(w)("library", "Unavailable books")) + ": " + o(c.value.unavailable), 1)) : E("", !0),
          c.value.status === "limited" ? (p(), h("p", b$, o(u(w)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : E("", !0),
          c.value.status === "failed" ? (p(), h("p", g$, o(u(w)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : E("", !0),
          s("div", m$, [
            $.value ? (p(), h("button", {
              key: 0,
              class: "button secondary",
              disabled: g.value,
              onClick: q
            }, o(u(w)("library", "Cancel scan")), 9, y$)) : E("", !0),
            s("button", {
              class: "button secondary",
              disabled: g.value,
              onClick: ne[2] || (ne[2] = (Y) => ae(c.value.id, c.value.page))
            }, o(u(w)("library", "Refresh results")), 9, _$),
            s("button", {
              class: "button secondary",
              disabled: g.value || $.value,
              onClick: L
            }, o(u(w)("library", "Discard scan")), 9, w$)
          ])
        ], 8, f$),
        s("label", null, [
          ie(o(u(w)("library", "Show comparisons")), 1),
          ge(s("select", {
            "onUpdate:modelValue": ne[3] || (ne[3] = (Y) => y.value = Y),
            disabled: g.value,
            onChange: ne[4] || (ne[4] = (Y) => ae(c.value.id))
          }, [
            s("option", S$, o(u(w)("library", "All")) + " (" + o(c.value.matches) + ")", 1),
            (p(!0), h(W, null, he(R.value, (Y, pe) => (p(), h("option", {
              key: pe,
              value: pe
            }, o(Y) + " (" + o(c.value.counts[pe] || 0) + ")", 9, C$))), 128))
          ], 40, k$), [
            [rt, y.value]
          ])
        ]),
        !c.value.pairs.length && !$.value ? (p(), h("p", T$, o(u(w)("library", "No comparisons in this view.")), 1)) : E("", !0),
        (p(!0), h(W, null, he(c.value.pairs, (Y) => (p(), h("article", {
          key: Y.id,
          class: "library-duplicate-pair",
          "data-pair-id": Y.id
        }, [
          Y.unavailable ? (p(), h("p", E$, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : (p(), h(W, { key: 1 }, [
            s("header", null, [
              s("h2", null, o(Y.reasons.includes("identical") ? u(w)("library", "Identical file contents") : u(w)("library", "Possible duplicates")), 1),
              s("span", $$, o(R.value[Y.decision]), 1)
            ]),
            s("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(w)("library", "Why these books match")
            }, [
              (p(!0), h(W, null, he(Y.reasons, (pe) => (p(), h("li", { key: pe }, o(P.value[pe]), 1))), 128))
            ], 8, x$),
            Y.flags.length ? (p(), h("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(w)("library", "Differences to review")
            }, [
              (p(!0), h(W, null, he(Y.flags, (pe) => (p(), h("li", { key: pe }, o(I.value[pe]), 1))), 128))
            ], 8, O$)) : E("", !0),
            Y.stale ? (p(), h("p", N$, o(u(w)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : E("", !0),
            s("div", R$, [
              (p(!0), h(W, null, he(Y.books, (pe) => (p(), h("section", {
                key: pe.id,
                class: Te(["library-duplicate-book", { "library-duplicate-preferred": Y.preferredId === pe.id }])
              }, [
                s("div", I$, [
                  s("img", {
                    src: pe.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, L$),
                  s("div", null, [
                    s("h3", P$, o(pe.title), 1),
                    s("p", D$, o(pe.authors.join("; ") || "—"), 1),
                    Y.preferredId === pe.id ? (p(), h("strong", F$, o(u(w)("library", "Preferred copy")), 1)) : E("", !0)
                  ])
                ]),
                s("dl", null, [
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "Format")), 1),
                    s("dd", null, o(pe.format.toUpperCase()) + " · " + o(ve(pe.size)), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "Language")), 1),
                    s("dd", null, o(pe.language || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "Publication date")), 1),
                    s("dd", null, o(pe.publicationDate || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "Publisher")), 1),
                    s("dd", M$, o(pe.publisher || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "ISBN")), 1),
                    s("dd", U$, o(pe.isbn.join(", ") || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(u(w)("library", "Location")), 1),
                    s("dd", z$, o(pe.path), 1)
                  ])
                ]),
                s("div", j$, [
                  s("a", {
                    class: "button secondary",
                    href: pe.openUrl
                  }, o(u(w)("library", "Open")), 9, B$),
                  s("a", {
                    class: "button secondary",
                    href: pe.detailsUrl
                  }, o(u(w)("library", "Details")), 9, H$),
                  s("button", {
                    class: "button primary",
                    disabled: g.value || $.value || Y.stale,
                    onClick: (Se) => V(Y, "preferred", pe.id)
                  }, o(u(w)("library", "Prefer this copy")), 9, V$)
                ])
              ], 2))), 128))
            ]),
            s("div", q$, [
              s("button", {
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (pe) => V(Y, "keep")
              }, o(u(w)("library", "Keep both")), 9, G$),
              s("button", {
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (pe) => V(Y, "dismissed")
              }, o(u(w)("library", "Dismiss match")), 9, K$),
              Y.decision !== "unreviewed" ? (p(), h("button", {
                key: 0,
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (pe) => V(Y, "unreviewed")
              }, o(u(w)("library", "Reset review decision")), 9, W$)) : E("", !0)
            ])
          ], 64))
        ], 8, A$))), 128)),
        s("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(w)("library", "Duplicate comparison pages")
        }, [
          s("button", {
            class: "button secondary",
            disabled: g.value || c.value.page === 1,
            onClick: ne[5] || (ne[5] = (Y) => ae(c.value.id, c.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, Z$),
          s("span", null, o(c.value.page), 1),
          s("button", {
            class: "button secondary",
            disabled: g.value || !c.value.hasNext,
            onClick: ne[6] || (ne[6] = (Y) => ae(c.value.id, c.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, X$)
        ], 8, Y$)
      ], 64)) : E("", !0)
    ], 8, QE));
  }
}, ef = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], Q$ = /* @__PURE__ */ new Set([...ef, "ignore", "folder", "folders", "extension"]);
function vg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const n = (m) => m === "%folders%/" ? "folders" : m.slice(1, -1), a = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (a.some((m) => m.includes("%") && !Q$.has(n(m))) || a.filter((m) => m.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, l = !1;
  const d = [];
  function c(m, y, k) {
    if (++r > 5e3) {
      l = !0;
      return;
    }
    if (d.length > 1) return;
    if (m === a.length) {
      y === e.length && d.push(k);
      return;
    }
    const T = a[m];
    if (!T.startsWith("%")) {
      e.startsWith(T, y) && c(m + 1, y + T.length, k);
      return;
    }
    const C = n(T);
    if (C === "folders") {
      c(m + 1, y, k);
      for (let R = y; R < e.length && !l && d.length < 2; R++) e[R] === "/" && c(m + 1, R + 1, k);
      return;
    }
    const $ = e.indexOf("/", y), N = $ < 0 ? e.length : $;
    for (let R = y + 1; R <= N && !l && d.length < 2; R++) {
      const P = e.slice(y, R);
      C === "folder" && R !== N || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || c(m + 1, R, [...k, { key: C, raw: P }]);
    }
  }
  if (c(0, 0, []), l || d.length > 1) return { status: "ambiguous", changes: [] };
  if (!d.length) return { status: "unmatched", changes: [] };
  const g = /* @__PURE__ */ new Map(), v = [];
  for (const { key: m, raw: y } of d[0]) {
    if (!ef.includes(m)) continue;
    let k = y.trim();
    if (g.has(m) && g.get(m) !== k) return { status: "ambiguous", changes: [] };
    if (g.has(m)) continue;
    if (g.set(m, k), m === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (m === "language" && (k = bg(k)), m === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (m === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!gg(m, k)) return { status: "invalid", changes: [] };
    const T = String(i[m] || ""), C = m === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : T === k;
    v.push({ field: m, raw: y, value: k, ...m === "author" ? { values: [k] } : {}, before: T, previewOnly: !1, status: C ? "unchanged" : T.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v };
}
function bg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, n, a) => `${n}-${a.toUpperCase()}`);
}
function gg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const ex = [...ef];
function ns(e) {
  const t = e.split("/"), i = t.pop() || "", n = i.lastIndexOf(".");
  return [...t, n > 0 ? i.slice(0, n) : i];
}
function ku(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function hd(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const n = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return n < 0 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}
function Jo(e) {
  return { version: 1, combineAuthors: !1, parts: ns(e).map((t, i, n) => ku(i === n.length - 1 ? "title" : "ignore")) };
}
function Qo(e, t, i = {}) {
  const n = (m) => ({ status: m, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return n("invalid");
  const a = ns(e);
  if (a.length !== t.parts.length) return n("unmatched");
  const r = /* @__PURE__ */ new Map();
  let l = 0, d = "";
  function c(m, y, k = 0) {
    if (d) return;
    if (++l > 128 || k > 6 || !y) {
      d = "invalid";
      return;
    }
    if (y.split) {
      const { delimiter: N, occurrence: R, children: P } = y.split;
      if (typeof N != "string" || !N || N.length > 100 || !["first", "last", "every"].includes(R) || !Array.isArray(P)) {
        d = "invalid";
        return;
      }
      const I = hd(m, N, R);
      if (I.length !== P.length || I.length < 2) {
        d = "unmatched";
        return;
      }
      I.forEach((ve, Q) => c(ve, P[Q], k + 1));
      return;
    }
    if (y.field === "ignore") return;
    if (!ex.includes(y.field)) {
      d = "invalid";
      return;
    }
    let T = m.trim();
    if (y.prefix) {
      if (!T.startsWith(y.prefix)) {
        d = "unmatched";
        return;
      }
      T = T.slice(y.prefix.length);
    }
    if (y.suffix) {
      if (!T.endsWith(y.suffix)) {
        d = "unmatched";
        return;
      }
      T = T.slice(0, -y.suffix.length);
    }
    if (y.underscores && (T = T.replaceAll("_", " ")), T = T.trim(), y.mapFrom && T === y.mapFrom && (T = y.mapTo.trim()), y.field === "language" && (T = bg(T)), !T || y.field === "year" && !/^\d{4}$/.test(T) || y.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(T)) {
      d = "invalid";
      return;
    }
    if (!gg(y.field, T)) {
      d = "invalid";
      return;
    }
    let C = [T];
    if (y.field === "author") {
      if (C = (y.authorSeparator ? T.split(y.authorSeparator) : C).map((N) => N.trim()), y.reverseName && (C = C.map((N) => {
        const R = N.split(",").map((P) => P.trim());
        return R.length !== 2 || R.some((P) => !P) ? (d = "invalid", N) : `${R[1]} ${R[0]}`;
      }), d))
        return;
      if (C.some((N) => !N || [...N].length > 255)) {
        d = "invalid";
        return;
      }
    }
    const $ = r.get(y.field);
    $ ? y.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...C])], $.raw.push(m)) : JSON.stringify($.values) !== JSON.stringify(C) && (d = "ambiguous") : r.set(y.field, { raw: [m], values: [...new Set(C)] });
  }
  if (a.forEach((m, y) => c(m, t.parts[y])), d) return n(d);
  const g = r.get("author")?.values;
  if (g && (g.length > 32 || [...g.join("; ")].length > 1024)) return n("invalid");
  const v = [...r].map(([m, y]) => {
    const k = y.values.join("; "), T = String(i[m] || ""), C = m === "author" && Array.isArray(i.authors) ? JSON.stringify(y.values) === JSON.stringify(i.authors) : T === k;
    return {
      field: m,
      raw: y.raw.join(" / "),
      value: k,
      values: y.values,
      before: T,
      previewOnly: !1,
      status: C ? "unchanged" : T.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((m) => m.status === "conflict") ? "conflict" : v.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: v };
}
const tx = ["aria-label", "aria-busy"], ix = {
  key: 0,
  role: "alert"
}, nx = ["disabled"], ax = {
  key: 2,
  role: "status"
}, rx = ["disabled"], lx = { class: "library-inference-presets" }, sx = ["disabled"], ox = ["disabled"], ux = ["disabled"], cx = ["aria-label"], dx = ["value", "aria-label"], fx = { class: "library-inference-before-after" }, px = { key: 0 }, hx = ["aria-label"], vx = ["aria-label"], bx = { class: "library-inference-path" }, gx = { class: "library-inference-presets" }, mx = ["disabled"], yx = ["disabled"], _x = ["disabled"], wx = ["disabled"], kx = ["disabled"], Sx = { class: "library-inference-history" }, Cx = ["disabled", "onClick"], mg = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), l = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), m = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), y = z(() => i.results.filter((ae) => ["ready", "conflict"].includes(ae.status) && ae.revision).map((ae) => ({ ...ae, changes: ae.changes.filter((j) => m.has(j.field) && ["ready", "conflict"].includes(j.status)) })).filter((ae) => ae.changes.length)), k = (ae, j) => `${ae.id}:${j.field}`, T = z(() => y.value.map((ae) => ({ id: ae.id, revision: ae.revision, changes: Object.fromEntries(ae.changes.filter((j) => a.value.includes(k(ae, j))).map((j) => [j.field, j.field === "author" ? j.values || [j.value] : j.value])) })).filter((ae) => Object.keys(ae.changes).length)), C = z(() => ({ prepared: w("library", "Awaiting approval"), applied: w("library", "Applied"), undone: w("library", "Undone") }));
    let $ = 0;
    qe(() => JSON.stringify([i.results, i.context]), () => {
      a.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    }), qe(() => JSON.stringify(a.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    });
    function N() {
      a.value = y.value.flatMap((ae) => ae.changes.filter((j) => j.status === "ready").map((j) => k(ae, j)));
    }
    async function R(ae = "", j) {
      const q = await fetch(Ci(`/apps/library/api/inference/batches${ae}`), { credentials: "same-origin", cache: "no-store", method: j === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...j === void 0 ? {} : { body: JSON.stringify(j) } }), L = await q.json();
      if (!q.ok)
        throw q.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(w("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : L.error === "history_limit" ? new Error(w("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : q.status === 404 ? new Error(w("library", "The batch or one of its books is no longer available.")) : new Error(w("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return L;
    }
    async function P() {
      l.value = (await R()).batches;
    }
    async function I(ae) {
      d.value = !0, c.value = "", g.value = "";
      try {
        await ae();
      } catch (j) {
        c.value = j.message;
      } finally {
        d.value = !1;
      }
    }
    function ve() {
      r.value = null, c.value = "", v.value = "", n("changed");
    }
    async function Q() {
      const ae = $;
      await I(async () => {
        const j = await R("", { proposals: T.value, context: i.context });
        ae === $ && (r.value = j), await P();
      });
    }
    async function x(ae) {
      await I(async () => {
        r.value = await R(`/${ae}`), v.value = "";
      });
    }
    async function H() {
      if (!r.value || i.disabled) return;
      const ae = r.value, j = ae.id;
      await I(async () => {
        const q = await R(`/${j}/apply`, {});
        r.value = { ...ae, ...q }, g.value = w("library", "Selected metadata changes were applied. Source files were not changed."), a.value = [], await P(), n("changed");
      });
    }
    async function K() {
      const ae = r.value, j = ae.id;
      await I(async () => {
        const q = await R(`/${j}/undo`, {});
        r.value = { ...ae, ...q }, v.value = "", g.value = w("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), n("changed");
      });
    }
    async function Z() {
      await I(async () => {
        await R(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return xt(() => I(P)), (ae, j) => (p(), h("section", {
      class: "library-inference-apply",
      "aria-label": u(w)("library", "Review and apply metadata"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      s("h2", null, [
        de(Ye, {
          text: e.wholeFolder ? u(w)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(w)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: we(() => [
            ie(o(e.wholeFolder ? u(w)("library", "Review and apply metadata") : u(w)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      c.value ? (p(), h("p", ix, o(c.value), 1)) : E("", !0),
      r.value?.blocked ? (p(), h("button", {
        key: 1,
        class: "button secondary",
        disabled: d.value,
        onClick: ve
      }, o(u(w)("library", "Load sample")), 9, nx)) : E("", !0),
      g.value ? (p(), h("p", ax, o(g.value), 1)) : E("", !0),
      s("fieldset", {
        disabled: d.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        s("div", lx, [
          s("button", {
            class: "button secondary",
            disabled: !y.value.length,
            onClick: N
          }, o(u(w)("library", "Select empty fields")), 9, sx),
          s("button", {
            class: "button secondary",
            disabled: !a.value.length,
            onClick: j[0] || (j[0] = (q) => a.value = [])
          }, o(u(w)("library", "Clear selection")), 9, ox),
          s("button", {
            class: "button primary",
            disabled: !T.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(w)("library", "Review selected changes")) + " (" + o(a.value.length) + ")", 9, ux)
        ]),
        s("div", {
          class: Te(["library-inference-approval-candidates", { "library-inference-approval-scroll": y.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Select metadata fields")
        }, [
          (p(!0), h(W, null, he(y.value, (q) => (p(), h("details", {
            key: q.id,
            class: "library-inference-result"
          }, [
            s("summary", null, o(q.path), 1),
            (p(!0), h(W, null, he(q.changes, (L) => (p(), h("label", {
              key: L.field,
              class: "library-inference-approval-field"
            }, [
              ge(s("input", {
                "onUpdate:modelValue": j[1] || (j[1] = (V) => a.value = V),
                type: "checkbox",
                value: k(q, L),
                "aria-label": `${e.labels[L.field]}: ${q.path}`
              }, null, 8, dx), [
                [wa, a.value]
              ]),
              s("span", null, [
                s("strong", null, o(e.labels[L.field]), 1),
                s("span", fx, [
                  s("span", null, o(L.before || "—"), 1),
                  j[4] || (j[4] = s("span", { "aria-hidden": "true" }, " → ", -1)),
                  s("strong", null, o(L.value), 1)
                ]),
                L.status === "conflict" ? (p(), h("small", px, o(u(w)("library", "Replaces an existing value")), 1)) : E("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, cx)
      ], 8, rx),
      r.value ? (p(), h("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(w)("library", "Confirmed change review")
      }, [
        s("h3", null, o(C.value[r.value.status]), 1),
        s("p", null, [
          de(Ye, {
            text: u(w)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ie(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        s("div", {
          class: Te(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Reviewed metadata changes")
        }, [
          (p(!0), h(W, null, he(r.value.entries, (q) => (p(), h("article", {
            key: q.id
          }, [
            s("h4", bx, o(q.path), 1),
            s("dl", null, [
              (p(!0), h(W, null, he(q.changes, (L) => (p(), h("div", {
                key: L.field
              }, [
                s("dt", null, o(e.labels[L.field]), 1),
                s("dd", null, [
                  s("span", null, o(u(w)("library", "Before")) + ": " + o(L.before || "—"), 1),
                  s("strong", null, o(u(w)("library", "After")) + ": " + o(L.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, vx),
        s("div", gx, [
          r.value.status === "prepared" ? (p(), h("button", {
            key: 0,
            class: "button primary",
            disabled: d.value || e.disabled || r.value.blocked,
            onClick: H
          }, o(u(w)("library", "Apply reviewed changes")), 9, mx)) : E("", !0),
          r.value.status !== "applied" ? (p(), h("button", {
            key: 1,
            class: "button secondary",
            disabled: d.value,
            onClick: Z
          }, o(u(w)("library", "Discard review")), 9, yx)) : E("", !0),
          r.value.status === "applied" && !v.value ? (p(), h("button", {
            key: 2,
            class: "button secondary",
            disabled: d.value || r.value.blocked,
            onClick: j[2] || (j[2] = (q) => v.value = r.value.id)
          }, o(u(w)("library", "Undo this batch")), 9, _x)) : E("", !0),
          v.value ? (p(), h(W, { key: 3 }, [
            s("button", {
              class: "button primary",
              disabled: d.value || r.value.blocked,
              onClick: K
            }, o(u(w)("library", "Confirm undo")), 9, wx),
            s("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: j[3] || (j[3] = (q) => v.value = "")
            }, o(u(w)("library", "Cancel")), 9, kx)
          ], 64)) : E("", !0)
        ])
      ], 8, hx)) : E("", !0),
      s("details", Sx, [
        s("summary", null, o(u(w)("library", "Recent metadata batches")) + " (" + o(l.value.length) + ")", 1),
        s("ul", null, [
          (p(!0), h(W, null, he(l.value, (q) => (p(), h("li", {
            key: q.id
          }, [
            s("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: (L) => x(q.id)
            }, o(new Date(Number(q.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[q.status]), 9, Cx)
          ]))), 128))
        ])
      ])
    ], 8, tx));
  }
}, Tx = { class: "library-inference-rule-trace" }, Ax = { key: 0 }, vd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (p(), h("div", Tx, [
      (p(!0), h(W, null, he(e.result.conflicts || [], (n) => (p(), h("div", {
        key: n.field,
        class: "library-inference-rule-conflict"
      }, [
        s("strong", null, o(u(w)("library", "Conflicting rules")) + ": " + o(e.labels[n.field]), 1),
        s("ul", null, [
          (p(!0), h(W, null, he(n.proposals, (a, r) => (p(), h("li", { key: r }, [
            s("bdi", null, o(a.value), 1),
            s("small", null, o(a.sources.map((l) => l.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (p(), h("details", Ax, [
        s("summary", null, [
          de(Ye, {
            text: u(w)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        s("ul", null, [
          (p(!0), h(W, null, he(e.result.attempts, (n) => (p(), h("li", {
            key: n.id
          }, [
            s("strong", null, o(n.name), 1),
            s("bdi", null, o(n.folder || "/"), 1),
            s("small", null, o(e.statuses[n.status]), 1)
          ]))), 128))
        ])
      ])) : E("", !0)
    ]));
  }
}, Ex = ["aria-label", "aria-busy"], $x = {
  key: 0,
  role: "alert"
}, xx = { class: "library-inference-presets" }, Ox = ["disabled"], Nx = ["value", "disabled"], Rx = { value: "" }, Ix = ["value"], Lx = { class: "library-inference-path" }, Px = { role: "status" }, Dx = ["value", "max", "aria-label"], Fx = { class: "library-inference-presets" }, Mx = ["disabled"], Ux = ["disabled"], zx = ["disabled"], jx = {
  key: 1,
  role: "alert"
}, Bx = {
  key: 2,
  role: "alert"
}, Hx = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, Vx = { key: 1 }, qx = { key: 2 }, Gx = ["disabled"], Kx = { value: "all" }, Wx = ["value"], Yx = ["aria-label"], Zx = { class: "library-inference-path" }, Xx = ["aria-label"], Jx = ["disabled"], Qx = ["disabled"], e3 = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G([]), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(""), l = /* @__PURE__ */ G("all");
    let d, c = 0, g = !0;
    const v = z(() => i.value?.status === "running"), m = z(() => ({ running: w("library", "Analysing"), completed: w("library", "Analysis complete"), cancelled: w("library", "Analysis cancelled"), failed: w("library", "Analysis failed"), limited: w("library", "Analysis limit reached") })), y = z(() => ({ ...t.statuses, unavailable: w("library", "Changed or unavailable books") }));
    async function k(Q = "", x) {
      const H = await fetch(Ci(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: x === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...x === void 0 ? {} : { body: JSON.stringify(x) } }), K = await H.json();
      if (!H.ok)
        throw K.error === "analysis_history_limit" ? new Error(w("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : K.error === "analysis_limit" ? new Error(w("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : H.status === 404 ? new Error(w("library", "This analysis or its folder is no longer available.")) : new Error(w("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return K;
    }
    async function T() {
      const Q = await k();
      g && (n.value = Q.jobs);
    }
    async function C(Q) {
      a.value = !0, r.value = "";
      try {
        await Q();
      } catch (x) {
        g && (r.value = x.message);
      } finally {
        g && (a.value = !1);
      }
    }
    function $() {
      if (clearTimeout(d), !g || !v.value) return;
      const Q = i.value.id, x = c;
      d = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !g || c !== x) return;
          const H = await k(`/${Q}?page=${i.value.page}&filter=${l.value}`);
          if (!g || c !== x) return;
          i.value = H, v.value || await T(), $();
        } catch (H) {
          g && c === x && (r.value = H.message);
        }
      }, 1500);
    }
    async function N() {
      await C(async () => {
        const Q = await k("", { definition: t.definition });
        c++, l.value = "all", i.value = Q, await T(), $();
      });
    }
    async function R(Q, x = 1) {
      const H = ++c;
      clearTimeout(d), await C(async () => {
        const K = await k(`/${Q}?page=${x}&filter=${l.value}`);
        g && H === c && (i.value = K, $());
      });
    }
    function P(Q) {
      l.value = "all", Q.target.value && R(Q.target.value);
    }
    async function I() {
      const Q = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${Q}/cancel`, {}), i.value = await k(`/${Q}?filter=${l.value}`), await T();
      });
    }
    async function ve() {
      const Q = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${Q}/discard`, {}), i.value = null, await T();
      });
    }
    return xt(() => C(T)), Ti(() => {
      g = !1, c++, clearTimeout(d);
    }), (Q, x) => (p(), h("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(w)("library", "Whole-folder analysis"),
      "aria-busy": a.value ? "true" : "false"
    }, [
      s("h2", null, [
        de(Ye, {
          text: u(w)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (p(), h("p", $x, o(r.value), 1)) : E("", !0),
      s("div", xx, [
        s("button", {
          class: "button primary",
          disabled: a.value || e.disabled || v.value,
          onClick: N
        }, o(u(w)("library", "Analyse whole folder")), 9, Ox),
        s("label", null, [
          de(Ye, {
            text: u(w)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          s("select", {
            value: i.value?.id || "",
            disabled: a.value,
            onChange: P
          }, [
            s("option", Rx, o(u(w)("library", "Choose an analysis")), 1),
            (p(!0), h(W, null, he(n.value, (H) => (p(), h("option", {
              key: H.id,
              value: H.id
            }, o(new Date(Number(H.created_at) * 1e3).toLocaleString()) + " · " + o(m.value[H.status]) + " · " + o(H.processed) + "/" + o(H.total), 9, Ix))), 128))
          ], 40, Nx)
        ])
      ]),
      i.value ? (p(), h(W, { key: 1 }, [
        s("p", Lx, o(i.value.scope), 1),
        s("p", Px, o(m.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (p(), h("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(w)("library", "Analysis progress")
        }, null, 8, Dx)) : E("", !0),
        s("div", Fx, [
          v.value ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            disabled: a.value,
            onClick: I
          }, o(u(w)("library", "Cancel analysis")), 9, Mx)) : E("", !0),
          s("button", {
            class: "button secondary",
            disabled: a.value,
            onClick: x[0] || (x[0] = (H) => R(i.value.id, i.value.page))
          }, o(u(w)("library", "Refresh results")), 9, Ux),
          s("button", {
            class: "button secondary",
            disabled: a.value || v.value,
            onClick: ve
          }, o(u(w)("library", "Discard analysis")), 9, zx)
        ]),
        i.value.status === "limited" ? (p(), h("p", jx, o(u(w)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : E("", !0),
        i.value.status === "failed" ? (p(), h("p", Bx, o(u(w)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : E("", !0),
        s("details", null, [
          s("summary", null, o(u(w)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (p(), h("code", Hx, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (p(), h("ul", Vx, [
            (p(!0), h(W, null, he(i.value.definition.assignments, (H) => (p(), h("li", {
              key: H.id
            }, o(H.folder || "/") + " · " + o(H.definition.name), 1))), 128))
          ])) : (p(), h("ul", qx, [
            (p(!0), h(W, null, he(i.value.definition.rule.parts, (H, K) => (p(), h("li", { key: K }, o(K + 1) + " · " + o(e.labels[H.field] || u(w)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        s("label", null, [
          ie(o(u(w)("library", "Show results")), 1),
          ge(s("select", {
            "onUpdate:modelValue": x[1] || (x[1] = (H) => l.value = H),
            disabled: a.value,
            onChange: x[2] || (x[2] = (H) => R(i.value.id))
          }, [
            s("option", Kx, o(u(w)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((H, K) => H + K, 0)) + ")", 1),
            (p(!0), h(W, null, he(y.value, (H, K) => (p(), h("option", {
              key: K,
              value: K
            }, o(H) + " (" + o(i.value.counts[K] || 0) + ")", 9, Wx))), 128))
          ], 40, Gx), [
            [rt, l.value]
          ])
        ]),
        s("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Analysis results")
        }, [
          (p(!0), h(W, null, he(i.value.items, (H) => (p(), h("details", {
            key: H.id,
            class: "library-inference-result"
          }, [
            s("summary", null, [
              s("span", Zx, o(H.path || "—"), 1),
              s("strong", null, o(y.value[H.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (p(), Pe(vd, {
              key: 0,
              result: H,
              labels: e.labels,
              statuses: y.value
            }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
            (p(!0), h(W, null, he(H.changes, (K) => (p(), h("dl", {
              key: K.field
            }, [
              s("dt", null, o(e.labels[K.field]), 1),
              s("dd", null, o(K.before || "—") + " → " + o(K.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, Yx),
        s("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Analysis pages")
        }, [
          s("button", {
            class: "button secondary",
            disabled: a.value || i.value.page === 1,
            onClick: x[3] || (x[3] = (H) => R(i.value.id, i.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, Jx),
          s("span", null, o(i.value.page), 1),
          s("button", {
            class: "button secondary",
            disabled: a.value || !i.value.hasNext,
            onClick: x[4] || (x[4] = (H) => R(i.value.id, i.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, Qx)
        ], 8, Xx),
        de(mg, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: a.value || v.value,
          onChanged: x[5] || (x[5] = (H) => R(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : E("", !0)
    ], 8, Ex));
  }
}, t3 = { class: "library-inference-part" }, i3 = { class: "library-inference-part-source" }, n3 = { class: "library-inference-part-options" }, a3 = { value: "first" }, r3 = { value: "last" }, l3 = { value: "every" }, s3 = {
  key: 0,
  role: "status"
}, o3 = ["aria-label"], u3 = { value: "ignore" }, c3 = ["value"], d3 = { key: 1 }, f3 = { class: "library-inference-part-options" }, p3 = { class: "library-inference-checkbox" }, h3 = {
  key: 2,
  class: "library-inference-part-options"
}, v3 = { value: "none" }, b3 = { value: "semicolon" }, g3 = { value: "and" }, m3 = { value: "custom" }, y3 = { key: 0 }, _3 = ["value"], w3 = { class: "library-inference-checkbox" }, Ih = " and ", k3 = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(t.node.split?.delimiter || " - "), n = /* @__PURE__ */ G(t.node.split?.occurrence || "first"), a = z(() => t.node.split ? hd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = z({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (c) => {
        t.node.authorSeparatorChoice = c, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Ih, custom: t.node.customAuthorSeparator || "" }[c];
      }
    });
    function l(c) {
      t.node.customAuthorSeparator = c.target.value, t.node.authorSeparator = c.target.value;
    }
    function d() {
      const c = hd(t.value, i.value, n.value).length, g = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: n.value,
        children: Array.from({ length: Math.min(32, Math.max(2, c)) }, (v, m) => g[m] || ku(m === 0 ? t.node.field : "ignore"))
      };
    }
    return (c, g) => {
      const v = Ze("InferencePart", !0);
      return p(), h("div", t3, [
        s("bdi", i3, o(e.value || "—"), 1),
        e.node.split ? (p(), h(W, { key: 0 }, [
          s("div", n3, [
            s("label", null, [
              ie(o(u(w)("library", "Separator")), 1),
              ge(s("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (m) => i.value = m),
                maxlength: "100",
                onInput: d
              }, null, 544), [
                [je, i.value]
              ])
            ]),
            s("label", null, [
              ie(o(u(w)("library", "Split at")), 1),
              ge(s("select", {
                "onUpdate:modelValue": g[1] || (g[1] = (m) => n.value = m),
                onChange: d
              }, [
                s("option", a3, o(u(w)("library", "First occurrence")), 1),
                s("option", r3, o(u(w)("library", "Last occurrence")), 1),
                s("option", l3, o(u(w)("library", "Every occurrence")), 1)
              ], 544), [
                [rt, n.value]
              ])
            ])
          ]),
          a.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (p(), h("p", s3, o(u(w)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : E("", !0),
          s("button", {
            class: "button secondary",
            onClick: g[2] || (g[2] = (m) => e.node.split = null)
          }, o(u(w)("library", "Use whole part")), 1),
          (p(!0), h(W, null, he(e.node.split.children, (m, y) => (p(), Pe(v, {
            key: y,
            node: m,
            value: a.value[y] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (p(), h(W, { key: 1 }, [
          s("label", null, [
            ie(o(u(w)("library", "Field")), 1),
            ge(s("select", {
              "onUpdate:modelValue": g[3] || (g[3] = (m) => e.node.field = m),
              "aria-label": `${u(w)("library", "Field")}: ${e.value}`
            }, [
              s("option", u3, o(u(w)("library", "Ignore this part")), 1),
              (p(!0), h(W, null, he(e.fields, (m) => (p(), h("option", {
                key: m[0],
                value: m[0]
              }, o(m[1]), 9, c3))), 128))
            ], 8, o3), [
              [rt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            onClick: d
          }, o(u(w)("library", "Split this part")), 1)) : E("", !0),
          e.node.field !== "ignore" ? (p(), h("details", d3, [
            s("summary", null, o(u(w)("library", "Transform this value")), 1),
            s("div", f3, [
              s("label", null, [
                ie(o(u(w)("library", "Remove prefix")), 1),
                ge(s("input", {
                  "onUpdate:modelValue": g[4] || (g[4] = (m) => e.node.prefix = m),
                  maxlength: "100"
                }, null, 512), [
                  [je, e.node.prefix]
                ])
              ]),
              s("label", null, [
                ie(o(u(w)("library", "Remove suffix")), 1),
                ge(s("input", {
                  "onUpdate:modelValue": g[5] || (g[5] = (m) => e.node.suffix = m),
                  maxlength: "100"
                }, null, 512), [
                  [je, e.node.suffix]
                ])
              ]),
              s("label", p3, [
                ge(s("input", {
                  "onUpdate:modelValue": g[6] || (g[6] = (m) => e.node.underscores = m),
                  type: "checkbox"
                }, null, 512), [
                  [wa, e.node.underscores]
                ]),
                ie(o(u(w)("library", "Replace underscores with spaces")), 1)
              ]),
              s("label", null, [
                de(Ye, {
                  text: u(w)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: we(() => [
                    ie(o(u(w)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ge(s("input", {
                  "onUpdate:modelValue": g[7] || (g[7] = (m) => e.node.mapFrom = m),
                  maxlength: "200"
                }, null, 512), [
                  [je, e.node.mapFrom]
                ])
              ]),
              s("label", null, [
                ie(o(u(w)("library", "Replacement value")), 1),
                ge(s("input", {
                  "onUpdate:modelValue": g[8] || (g[8] = (m) => e.node.mapTo = m),
                  maxlength: "200"
                }, null, 512), [
                  [je, e.node.mapTo]
                ])
              ])
            ])
          ])) : E("", !0),
          e.node.field === "author" ? (p(), h("div", h3, [
            s("label", null, [
              de(Ye, {
                text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(w)("library", "Spaces around the word are required.") : "")
              }, {
                default: we(() => [
                  ie(o(u(w)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              ge(s("select", {
                "onUpdate:modelValue": g[9] || (g[9] = (m) => r.value = m)
              }, [
                s("option", v3, o(u(w)("library", "None (keep one name)")), 1),
                s("option", b3, o(u(w)("library", "Semicolon (;)")), 1),
                g[11] || (g[11] = s("option", { value: "ampersand" }, "&", -1)),
                s("option", g3, o(u(w)("library", "Word separator")) + ": " + o(Ih.trim()), 1),
                s("option", m3, o(u(w)("library", "Custom separator")), 1)
              ], 512), [
                [rt, r.value]
              ])
            ]),
            r.value === "custom" ? (p(), h("label", y3, [
              ie(o(u(w)("library", "Custom separator")), 1),
              s("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: l
              }, null, 40, _3)
            ])) : E("", !0),
            s("label", w3, [
              ge(s("input", {
                "onUpdate:modelValue": g[10] || (g[10] = (m) => e.node.reverseName = m),
                type: "checkbox"
              }, null, 512), [
                [wa, e.node.reverseName]
              ]),
              ie(o(u(w)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : E("", !0)
        ], 64))
      ]);
    };
  }
}, S3 = ["aria-busy"], C3 = ["disabled"], T3 = {
  value: "",
  disabled: ""
}, A3 = ["value"], E3 = ["disabled"], $3 = ["disabled"], x3 = ["disabled"], O3 = ["disabled"], N3 = ["disabled"], R3 = {
  key: 0,
  role: "alert"
}, I3 = ["disabled"], L3 = {
  key: 1,
  role: "status"
}, Lh = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = z(() => i.mode === "guided"), r = z(() => a.value ? JSON.stringify(i.rule) : i.pattern), l = (H) => (H.kind || "pattern") === "guided" ? JSON.stringify(H.rule) : H.pattern, d = /* @__PURE__ */ G([]), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(!1), m = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = z(() => [
      { id: "title", name: w("library", "Title from filename"), pattern: "%folders%/%title%.%extension%", example: "Author/Book title.epub" },
      { id: "by", name: w("library", "Title by Author"), pattern: "%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A Magic Deep and Drowning by Hester Fox.epub" },
      { id: "title-author-year", name: w("library", "Title - Author (Year)"), pattern: "%folders%/%title% - %author% (%year%).%extension%", example: "Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "author-title", name: w("library", "Author - Title"), pattern: "%folders%/%author% - %title%.%extension%", example: "Ada Quill - A Quiet Orchard.epub" },
      { id: "author-folder", name: w("library", "Author folder / Title"), pattern: "%folders%/%author%/%title%.%extension%", example: "Ada Quill/A Quiet Orchard.epub" },
      { id: "series", name: w("library", "Series folder / Number. Title - Author (Year)"), pattern: "%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%", example: "Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub" },
      { id: "series-inline", name: w("library", "Series #Number - Title - Author (Year)"), pattern: "%folders%/%series% #%seriesNumber% - %title% - %author% (%year%).%extension%", example: "Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub" },
      { id: "language-subject", name: w("library", "books / Language_Subject / Title - Author (Year)"), pattern: "books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%", example: "books/english_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub" },
      { id: "language-subject-by", name: w("library", "books / Language_Subject / Title by Author"), pattern: "books/%language%_%subject%/%folders%/%title% by %author%.%extension%", example: "books/english_fiction/A String in Her Tale by Mark Ezra.epub" },
      { id: "series-underscore", name: w("library", "Series folder / Number_Title_Author"), pattern: "%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%", example: "Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub" }
    ]), $ = z(() => [...a.value ? [] : C.value.map((H) => ({ ...H, id: `preset-${H.id}` })).filter((H) => !T.value.includes(H.id)), ...d.value.filter((H) => (H.kind || "pattern") === i.mode)].sort((H, K) => H.name.localeCompare(K.name))), N = z(() => $.value.find((H) => H.id === g.value));
    qe([r, $], () => {
      k.value = "", (!N.value || l(N.value) !== r.value) && (g.value = $.value.find((H) => l(H) === r.value)?.id || "");
    }, { immediate: !0 });
    const R = z(() => [w("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), N.value?.example ? `${w("library", "Example path")}: ${N.value.example}` : ""].filter(Boolean).join(`

`));
    function P(H) {
      const K = $.value.find((Z) => Z.id === H.target.value);
      K && (g.value = K.id, a.value ? n("choose-rule", JSON.parse(JSON.stringify(K.rule))) : n("choose", K.pattern), y.value = "", k.value = "");
    }
    async function I(H = "", K = null) {
      const Z = await fetch(`${Ci("/apps/library/api/inference/patterns")}${H}`, {
        method: K === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...K === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...K === null ? {} : { body: JSON.stringify(K) }
      });
      if (!Z.ok) throw new Error(Z.status === 409 ? w("library", "That name already exists. Choose a different name.") : Z.status === 422 ? w("library", "Check the definition and name. You can save up to 100 rules and patterns.") : w("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Z.json();
    }
    async function ve() {
      v.value = !0, m.value = "";
      try {
        const H = await I();
        d.value = H.patterns, T.value = H.hidden || [];
      } catch (H) {
        m.value = H.message;
      } finally {
        v.value = !1;
      }
    }
    async function Q() {
      v.value = !0, m.value = "", y.value = "";
      try {
        const H = await I("", { name: c.value, ...a.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        d.value = [...d.value, H.saved].sort((K, Z) => K.name.localeCompare(Z.name)), g.value = H.saved.id, c.value = "", y.value = a.value ? w("library", "Rule saved to your account.") : w("library", "Pattern saved to your account.");
      } catch (H) {
        m.value = H.message;
      } finally {
        v.value = !1;
      }
    }
    async function x(H) {
      v.value = !0, m.value = "", y.value = "";
      try {
        await I(`/${H}/delete`, {}), d.value = d.value.filter((K) => K.id !== H), T.value = [...T.value, H], g.value = "", k.value = "", y.value = a.value ? w("library", "Saved rule deleted. The current preview is unchanged.") : w("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (K) {
        m.value = K.message;
      } finally {
        v.value = !1;
      }
    }
    return xt(ve), (H, K) => (p(), h("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      s("label", null, [
        de(Ye, {
          text: a.value ? u(w)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : R.value
        }, {
          default: we(() => [
            ie(o(a.value ? u(w)("library", "Saved rule") : u(w)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ge(s("select", {
          "onUpdate:modelValue": K[0] || (K[0] = (Z) => g.value = Z),
          disabled: v.value,
          onChange: P
        }, [
          s("option", T3, o(a.value ? u(w)("library", "Custom rule") : u(w)("library", "Custom pattern")), 1),
          (p(!0), h(W, null, he($.value, (Z) => (p(), h("option", {
            key: Z.id,
            value: Z.id
          }, o(Z.name), 9, A3))), 128))
        ], 40, C3), [
          [rt, g.value]
        ])
      ]),
      Be(H.$slots, "default"),
      s("form", {
        onSubmit: ke(Q, ["prevent"])
      }, [
        s("label", null, [
          de(Ye, {
            text: u(w)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: we(() => [
              ie(o(a.value ? u(w)("library", "Rule name") : u(w)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(s("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (Z) => c.value = Z),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, E3), [
            [je, c.value]
          ])
        ]),
        s("button", {
          class: "button secondary",
          disabled: v.value || !c.value.trim() || (a.value ? !e.rule : !e.pattern.trim())
        }, o(a.value ? u(w)("library", "Save current rule as new") : u(w)("library", "Save current pattern as new")), 9, $3),
        N.value && !k.value ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: K[2] || (K[2] = (Z) => k.value = N.value.id)
        }, o(a.value ? u(w)("library", "Delete rule") : u(w)("library", "Delete pattern")), 9, x3)) : E("", !0),
        k.value ? (p(), h(W, { key: 1 }, [
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[3] || (K[3] = (Z) => x(k.value))
          }, o(u(w)("library", "Confirm deletion")), 9, O3),
          s("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: K[4] || (K[4] = (Z) => k.value = "")
          }, o(u(w)("library", "Cancel")), 9, N3)
        ], 64)) : E("", !0)
      ], 32),
      m.value ? (p(), h("p", R3, [
        ie(o(m.value) + " ", 1),
        s("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: ve
        }, o(a.value ? u(w)("library", "Reload saved rules") : u(w)("library", "Reload saved patterns")), 9, I3)
      ])) : E("", !0),
      y.value ? (p(), h("p", L3, o(y.value), 1)) : E("", !0)
    ], 8, S3));
  }
}, P3 = ["aria-busy"], D3 = ["disabled"], F3 = {
  value: "",
  disabled: ""
}, M3 = ["value"], U3 = { class: "library-inference-path" }, z3 = { class: "library-inference-checkbox" }, j3 = ["disabled"], B3 = ["disabled"], H3 = {
  key: 0,
  role: "status"
}, V3 = {
  key: 1,
  role: "alert"
}, q3 = ["disabled"], G3 = { key: 2 }, K3 = { class: "library-inference-folder-list" }, W3 = {
  key: 0,
  role: "status"
}, Y3 = ["disabled", "onClick"], Z3 = ["disabled", "onClick"], X3 = ["disabled"], J3 = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), l = /* @__PURE__ */ G(""), d = /* @__PURE__ */ G(!0), c = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), y = z(() => i.disabled || c.value || g.value);
    let k = 0;
    async function T(R, P) {
      const I = await fetch(Ci(`/apps/library/api/inference/${R}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!I.ok) throw new Error(I.status === 409 ? w("library", "This rule is already assigned to this folder.") : I.status === 422 ? w("library", "Check the folder and rule. You can save up to 100 folder assignments.") : I.status === 404 ? w("library", "The folder or saved rule is unavailable. Reload and check your access.") : w("library", "Could not load or save folder rules. Try again."));
      return I.json();
    }
    async function C() {
      const R = ++k, P = i.rootId;
      if (r.value = [], m.value = "", v.value = "", n("loaded", { rootId: P, assignments: [] }), !!P) {
        c.value = !0;
        try {
          const [I, ve] = await Promise.all([T("patterns"), T(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (R !== k) return;
          a.value = I.patterns, r.value = ve.assignments, a.value.some((Q) => Q.id === l.value) || (l.value = ""), n("loaded", { rootId: P, assignments: ve.assignments });
        } catch (I) {
          R === k && (v.value = I.message);
        } finally {
          R === k && (c.value = !1);
        }
      }
    }
    async function $() {
      if (!(y.value || i.scopePending || !l.value)) {
        g.value = !0, v.value = "";
        try {
          await T("folders", { rootId: i.rootId, folder: i.folder, recursive: d.value, definitionId: l.value }), await C();
        } catch (R) {
          v.value = R.message;
        } finally {
          g.value = !1;
        }
      }
    }
    async function N(R) {
      if (!y.value) {
        g.value = !0, v.value = "";
        try {
          await T(`folders/${R}/delete`, {}), await C();
        } catch (P) {
          v.value = P.message;
        } finally {
          g.value = !1;
        }
      }
    }
    return qe(() => i.rootId, C, { immediate: !0 }), Ti(() => {
      k++;
    }), (R, P) => (p(), h("div", {
      class: "library-inference-folder-rules",
      "aria-busy": y.value ? "true" : "false"
    }, [
      s("form", {
        onSubmit: ke($, ["prevent"])
      }, [
        s("label", null, [
          de(Ye, {
            text: u(w)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(s("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (I) => l.value = I),
            disabled: y.value
          }, [
            s("option", F3, o(u(w)("library", "Choose a saved definition")), 1),
            (p(!0), h(W, null, he(a.value, (I) => (p(), h("option", {
              key: I.id,
              value: I.id
            }, o(I.name), 9, M3))), 128))
          ], 8, D3), [
            [rt, l.value]
          ])
        ]),
        s("p", U3, [
          ie(o(u(w)("library", "Assignment folder")) + ": ", 1),
          s("bdi", null, o(e.folder || "/"), 1)
        ]),
        s("label", z3, [
          ge(s("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (I) => d.value = I),
            type: "checkbox",
            disabled: y.value
          }, null, 8, j3), [
            [wa, d.value]
          ]),
          ie(o(u(w)("library", "Use in subfolders")), 1)
        ]),
        s("button", {
          class: "button primary",
          disabled: y.value || e.scopePending || !l.value || !e.rootId
        }, o(u(w)("library", "Assign to this folder")), 9, B3)
      ], 32),
      e.scopePending ? (p(), h("p", H3, o(u(w)("library", "Load the folder before assigning a rule.")), 1)) : E("", !0),
      v.value ? (p(), h("p", V3, o(v.value), 1)) : E("", !0),
      s("button", {
        class: "button secondary",
        disabled: y.value,
        onClick: C
      }, o(u(w)("library", "Reload folder rules")), 9, q3),
      s("h3", null, [
        de(Ye, {
          text: u(w)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !c.value ? (p(), h("p", G3, o(u(w)("library", "No folder rules assigned yet.")), 1)) : E("", !0),
      s("ul", K3, [
        (p(!0), h(W, null, he(r.value, (I) => (p(), h("li", {
          key: I.id,
          class: "library-inference-folder-entry"
        }, [
          s("strong", null, o(I.definition.name), 1),
          s("bdi", null, o(I.folder || "/"), 1),
          s("small", null, o(I.recursive ? u(w)("library", "Includes subfolders") : u(w)("library", "Direct children only")), 1),
          I.available ? E("", !0) : (p(), h("p", W3, o(u(w)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          m.value !== I.id ? (p(), h("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: y.value,
            onClick: (ve) => m.value = I.id
          }, o(u(w)("library", "Remove assignment")), 9, Y3)) : (p(), h(W, { key: 2 }, [
            s("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: (ve) => N(I.id)
            }, o(u(w)("library", "Confirm removal")), 9, Z3),
            s("button", {
              class: "button secondary",
              disabled: y.value,
              onClick: P[2] || (P[2] = (ve) => m.value = "")
            }, o(u(w)("library", "Cancel")), 9, X3)
          ], 64))
        ]))), 128))
      ])
    ], 8, P3));
  }
};
function Q3(e, t, i, n = {}) {
  const a = [t, e].filter(Boolean).join("/"), r = i.filter((d) => d.available && (!d.folder || a.startsWith(`${d.folder}/`))).map((d) => ({ ...d, relative: d.folder ? a.slice(d.folder.length + 1) : a, depth: d.folder ? d.folder.split("/").length : 0 })).filter((d) => d.recursive || !d.relative.includes("/")).sort((d, c) => c.depth - d.depth || d.id.localeCompare(c.id)), l = [];
  for (const d of [...new Set(r.map((c) => c.depth))]) {
    const c = [];
    for (const y of r.filter((k) => k.depth === d)) {
      const k = y.definition, T = k.kind === "guided" ? Qo(y.relative, k.rule, n) : vg(y.relative, k.pattern, n), C = { id: y.id, name: k.name, folder: y.folder };
      l.push({ ...C, status: T.status }), ["ready", "conflict", "unchanged"].includes(T.status) && T.changes.length && c.push({ result: T, source: C });
    }
    if (l.some((y) => y.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: l };
    if (!c.length) continue;
    const g = /* @__PURE__ */ new Map();
    for (const { result: y, source: k } of c) for (const T of y.changes) {
      const C = g.get(T.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(T.values || [T.value]), N = C.get($);
      N ? N.sources.push(k) : C.set($, { ...T, sources: [k] }), g.set(T.field, C);
    }
    const v = [], m = [];
    for (const [y, k] of g)
      k.size > 1 ? m.push({ field: y, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: m.length ? "ambiguous" : v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: m, attempts: l };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: l };
}
const Ph = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), yg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Dh(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && yg.test(e);
}
function wl(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && yg.test(i)) && e.length <= 120;
}
function wr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (wl(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function ri(e, t = {}) {
  return { ...ku(e), ...t };
}
function oa(e, t, ...i) {
  return { ...ku(), split: { delimiter: e, occurrence: t, children: i } };
}
function eO(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || ns(e).length > 64) return [];
  const i = ns(e), n = i.length - 1, a = i[n], r = i.slice(0, -1), l = Jo(e), d = [], c = [];
  let g = a, v = (Z) => Z, m = (Z) => Z, y = "", k = ri("title"), T = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(g), $ = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(g);
  C ? (g = C[1], v = (Z) => oa(" (", "last", Z, ri("year", { suffix: ")" })), d.push("year-parentheses")) : $ && (g = $[1], v = (Z) => oa(" ", "last", Z, ri("year")), d.push("year-trailing"), c.push("year-may-be-title"));
  const N = /^(.*\S) by (.+)$/.exec(g), R = /^(.*\S) - (.+)$/.exec(g), P = N || R, I = !N && R && (wl(R[1]) || Dh(R[1]) && r.some((Z) => wr(Z) === wr(R[1]))), ve = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(g) && g.split(" - ").length === 2;
  I ? (y = R[1], g = R[2], m = (Z) => oa(" - ", "first", ri("author"), Z), d.push("author-first"), c.push("author-needs-review")) : P && !ve && (Dh(P[2]) || wl(P[2])) && (y = P[2], g = P[1], m = (Z) => oa(N ? " by " : " - ", "last", Z, ri("author")), d.push(N ? "author-by" : "author-dash"), r.some((Z) => wr(Z) === wr(y)) ? d.push("author-folder-agrees") : c.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(g), x = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(g);
  if (Q)
    k = oa(" #", "first", ri("series"), oa(" - ", "first", ri("seriesNumber"), ri("title"))), T = !0, d.push("series-inline");
  else if (x && r.length) {
    const Z = r.at(-1);
    !wl(Z) && !(y && wr(Z) === wr(y)) && !Ph.has(Z.toLowerCase()) && !Z.includes("_") && (k = oa(". ", "first", ri("seriesNumber"), ri("title")), l.parts[n - 1] = ri("series"), T = !0, d.push("series-folder"), c.push("series-needs-review"));
  }
  if (l.parts[n] = v(m(k)), !y) {
    const Z = T ? n - 2 : n - 1;
    Z >= 0 && wl(i[Z]) && (l.parts[Z] = ri("author"), d.push("author-comma"), c.push("author-needs-review"));
  }
  for (let Z = r.length - 1; Z >= 0; Z--) {
    if (l.parts[Z].field !== "ignore") continue;
    const ae = r[Z], j = ae.indexOf("_"), q = j < 0 ? ae : ae.slice(0, j);
    if (Ph.has(q.toLowerCase())) {
      l.parts[Z] = j < 0 ? ri("language") : oa("_", "first", ri("language"), ri("genre", { underscores: !0 })), d.push(j < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const H = [], K = (Z, ae, j, q) => {
    const L = Qo(e, ae);
    if (!["ready", "conflict", "unchanged"].includes(L.status)) return;
    const V = t.slice(0, 40).map((ne) => typeof ne == "string" ? ne : ne.path).filter((ne) => typeof ne == "string"), J = V.filter((ne) => ["ready", "conflict", "unchanged"].includes(Qo(ne, ae).status)).length;
    H.push({ id: Z, rule: ae, clues: j, warnings: [...new Set(q)], preview: L.changes, matched: J, total: V.length });
  };
  return d.length && K("detected", l, d, c), K("filename", Jo(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(a) ? ["year-may-be-title"] : []), H;
}
const tO = { class: "library-inference-suggestions" }, iO = ["disabled"], nO = {
  value: "",
  disabled: ""
}, aO = ["value"], rO = {
  key: 0,
  "aria-live": "polite"
}, lO = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G(""), r = z(() => eO(i.path, i.sample)), l = z(() => r.value.find((v) => v.id === a.value)), d = z(() => ({
      "year-parentheses": w("library", "Trailing year in parentheses"),
      "year-trailing": w("library", "Possible trailing year"),
      "author-by": w("library", "Title by Author"),
      "author-dash": w("library", "Title - Author"),
      "author-first": w("library", "Author - Title"),
      "author-folder-agrees": w("library", "Author matches a folder name"),
      "author-comma": w("library", "Possible Surname, Given name folder"),
      "series-inline": w("library", "Series #Number - Title"),
      "series-folder": w("library", "Series folder with a numbered title"),
      "language-folder": w("library", "Recognized language folder"),
      "language-genre-folder": w("library", "Language and genre in one folder"),
      "filename-title": w("library", "Title from filename")
    })), c = z(() => ({
      "year-may-be-title": w("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": w("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": w("library", "Check that the parent folder names a series and the number is its position.")
    }));
    qe(() => i.path, () => {
      a.value = "";
    }), qe(() => JSON.stringify(i.rule), (v) => {
      l.value && JSON.stringify(l.value.rule) !== v && (a.value = "");
    });
    function g(v) {
      a.value = v.target.value, l.value && n("choose", JSON.parse(JSON.stringify(l.value.rule)));
    }
    return (v, m) => (p(), h("div", tO, [
      s("label", null, [
        de(Ye, {
          text: u(w)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (l.value ? `

` + l.value.clues.map((y) => d.value[y]).join(`
`) : "")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ge(s("select", {
          "onUpdate:modelValue": m[0] || (m[0] = (y) => a.value = y),
          disabled: !r.value.length,
          onChange: g
        }, [
          s("option", nO, o(u(w)("library", "Choose a suggestion")), 1),
          (p(!0), h(W, null, he(r.value, (y) => (p(), h("option", {
            key: y.id,
            value: y.id
          }, o(y.id === "filename" ? u(w)("library", "Title from filename") : u(w)("library", "Suggested assignments")), 9, aO))), 128))
        ], 40, iO), [
          [rt, a.value]
        ])
      ]),
      l.value ? (p(), h("div", rO, [
        s("p", null, o(u(w)("library", "{matched} of {total} paths on this page match this structure.", { matched: l.value.matched, total: l.value.total })), 1),
        (p(!0), h(W, null, he(l.value.warnings, (y) => (p(), h("p", {
          key: y,
          class: "library-inference-suggestion-warning"
        }, o(c.value[y]), 1))), 128))
      ])) : E("", !0)
    ]));
  }
}, sO = ["aria-label", "aria-busy"], oO = {
  key: 0,
  role: "alert"
}, uO = {
  key: 1,
  role: "status"
}, cO = { class: "library-inference-step" }, dO = ["disabled"], fO = ["value"], pO = ["disabled", "placeholder"], hO = { class: "library-inference-checkbox" }, vO = ["disabled"], bO = ["disabled"], gO = {
  key: 0,
  class: "library-inference-path"
}, mO = ["aria-label"], yO = ["disabled"], _O = ["disabled", "onClick"], wO = {
  key: 2,
  class: "library-inference-step"
}, kO = { class: "library-inference-editor" }, SO = { class: "library-inference-controls" }, CO = { class: "library-inference-scope" }, TO = ["value"], AO = ["open"], EO = { value: "guided" }, $O = { value: "pattern" }, xO = { value: "folders" }, OO = {
  key: 0,
  role: "status"
}, NO = { class: "library-inference-checkbox" }, RO = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, IO = ["aria-label"], LO = ["title"], PO = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, DO = { class: "library-inference-live-status" }, FO = { key: 1 }, MO = {
  key: 0,
  class: "library-inference-author-chips"
}, UO = {
  key: 1,
  dir: "auto"
}, zO = { dir: "auto" }, jO = { key: 2 }, BO = { dir: "auto" }, HO = { key: 3 }, VO = { key: 2 }, qO = { key: 1 }, GO = {
  class: "library-inference-path",
  dir: "ltr"
}, KO = { class: "library-inference-step" }, WO = { value: "all" }, YO = ["value"], ZO = { key: 0 }, XO = { class: "library-inference-path" }, JO = {
  key: 1,
  class: "library-inference-table-scroll"
}, QO = { key: 2 }, e4 = ["aria-label"], t4 = ["disabled"], i4 = ["disabled"], n4 = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ G([]), i = /* @__PURE__ */ G(""), n = /* @__PURE__ */ G(""), a = /* @__PURE__ */ G(!0), r = /* @__PURE__ */ G([]), l = /* @__PURE__ */ G(1), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G("guided"), N = /* @__PURE__ */ G(0), R = /* @__PURE__ */ G("%folders%/%title%.%extension%"), P = /* @__PURE__ */ G("all"), I = /* @__PURE__ */ G(!0);
    let ve = 0;
    const Q = z(() => [
      ["title", w("library", "Title")],
      ["subtitle", w("library", "Subtitle")],
      ["author", w("library", "Creators")],
      ["series", w("library", "Series")],
      ["seriesNumber", w("library", "Part in series")],
      ["language", w("library", "Language")],
      ["genre", w("library", "Genre")],
      ["publisher", w("library", "Publisher")],
      ["subject", w("library", "Subjects")],
      ["year", w("library", "Publication year")]
    ]), x = z(() => Object.fromEntries(Q.value)), H = z(() => ({
      ready: w("library", "Empty field suggestions"),
      conflict: w("library", "Existing values need review"),
      unmatched: w("library", "Unmatched paths"),
      ambiguous: w("library", "Ambiguous matches"),
      invalid: w("library", "Invalid pattern or value"),
      unchanged: w("library", "No changes")
    })), K = z(() => r.value.map((ye) => ({ ...ye, ...$.value === "folders" ? Q3(ye.path, k.value, T.value, ye.current) : $.value === "guided" ? Qo(ye.path, C.value, ye.current) : vg(ye.path, R.value, ye.current) }))), Z = z(() => K.value.find((ye) => ye.path === m.value)), ae = z(() => K.value.filter((ye) => P.value === "all" || ye.status === P.value)), j = z(() => [...new Set(r.value.filter((ye) => ye.path.includes("/")).map((ye) => ye.path.split("/")[0]))]);
    function q(ye) {
      n.value = [n.value.replace(/\/$/, ""), ye].filter(Boolean).join("/"), Me();
    }
    function L() {
      n.value = n.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const V = z(() => K.value.reduce((ye, Re) => (ye[Re.status] = (ye[Re.status] || 0) + 1, ye), {})), J = z(() => i.value !== y.value || n.value.replace(/^\/+|\/+$/g, "") !== k.value), ne = z(() => ns(m.value));
    function Y() {
      !C.value && m.value && (C.value = Jo(m.value));
    }
    function pe() {
      C.value = Jo(m.value), N.value++, $.value = "guided";
    }
    function Se(ye) {
      C.value = ye, N.value++, $.value = "guided";
    }
    function Le(ye) {
      Se(ye), I.value = !1;
    }
    function Oe(ye) {
      R.value = ye, $.value = "pattern";
    }
    async function Me(ye = 1) {
      const Re = ++ve;
      c.value = !0, g.value = "", r.value = [];
      try {
        const me = new URLSearchParams();
        i.value && (me.set("rootId", i.value), me.set("folder", n.value), me.set("recursive", a.value ? "1" : "0"), me.set("page", String(ye)));
        const De = await fetch(`${Ci("/apps/library/api/inference/sample")}?${me}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(w("library", "Could not load this folder. Check its path and your access."));
        const ut = await De.json();
        if (Re !== ve) return;
        if (t.value = ut.roots, !i.value && (i.value = String(ut.roots[0]?.id || ""), i.value))
          return Me();
        y.value !== i.value && (T.value = []), y.value = i.value;
        const ee = ut.roots.find((S) => String(S.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = ut.scope.slice(ee.length).replace(/^\//, ""), r.value = ut.items || [], l.value = ut.page || 1, d.value = !!ut.hasNext, v.value = ut.scope || "", m.value = r.value[0]?.path || "", Y();
      } catch (me) {
        Re === ve && (g.value = me.message);
      } finally {
        Re === ve && (c.value = !1);
      }
    }
    function Xe(ye) {
      ye.rootId === y.value && (T.value = ye.assignments);
    }
    function pt() {
      n.value = "", Me();
    }
    return xt(() => Me()), (ye, Re) => (p(), h("section", {
      class: "library-inference",
      "aria-label": u(w)("library", "Extract metadata from paths"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      s("h1", null, [
        de(Ye, {
          text: u(w)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: we(() => [
            ie(o(u(w)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      g.value ? (p(), h("p", oO, o(g.value), 1)) : E("", !0),
      c.value ? (p(), h("p", uO, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      s("section", cO, [
        s("h2", null, o(u(w)("library", "1. Choose a folder")), 1),
        s("form", {
          class: "library-inference-scope",
          onSubmit: Re[3] || (Re[3] = ke((me) => Me(), ["prevent"]))
        }, [
          s("label", null, [
            de(Ye, {
              text: u(w)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: we(() => [
                ie(o(u(w)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            ge(s("select", {
              "onUpdate:modelValue": Re[0] || (Re[0] = (me) => i.value = me),
              disabled: c.value || !t.value.length,
              onChange: pt
            }, [
              (p(!0), h(W, null, he(t.value, (me) => (p(), h("option", {
                key: me.id,
                value: String(me.id)
              }, o(me.label), 9, fO))), 128))
            ], 40, dO), [
              [rt, i.value]
            ])
          ]),
          s("label", null, [
            ie(o(u(w)("library", "Subfolder relative to this root")), 1),
            ge(s("input", {
              "onUpdate:modelValue": Re[1] || (Re[1] = (me) => n.value = me),
              type: "text",
              disabled: c.value,
              placeholder: u(w)("library", "Leave empty for the whole root")
            }, null, 8, pO), [
              [je, n.value]
            ])
          ]),
          s("label", hO, [
            ge(s("input", {
              "onUpdate:modelValue": Re[2] || (Re[2] = (me) => a.value = me),
              type: "checkbox",
              disabled: c.value
            }, null, 8, vO), [
              [wa, a.value]
            ]),
            ie(o(u(w)("library", "Include subfolders")), 1)
          ]),
          s("button", {
            class: "button primary",
            disabled: c.value || !i.value
          }, o(u(w)("library", "Load sample")), 9, bO)
        ], 32),
        v.value ? (p(), h("p", gO, o(v.value), 1)) : E("", !0),
        s("div", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Folders in this sample")
        }, [
          n.value ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            disabled: c.value,
            onClick: L
          }, o(u(w)("library", "Parent folder")), 9, yO)) : E("", !0),
          (p(!0), h(W, null, he(j.value, (me) => (p(), h("button", {
            key: me,
            class: "button secondary",
            disabled: c.value,
            onClick: (De) => q(me)
          }, o(me) + "/", 9, _O))), 128))
        ], 8, mO)
      ]),
      r.value.length ? (p(), h("section", wO, [
        s("h2", null, o(u(w)("library", "2. Describe the structure")), 1),
        s("div", kO, [
          s("div", SO, [
            s("div", CO, [
              s("label", null, [
                de(Ye, {
                  text: u(w)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: we(() => [
                    ie(o(u(w)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ge(s("select", {
                  "onUpdate:modelValue": Re[4] || (Re[4] = (me) => m.value = me),
                  onChange: Re[5] || (Re[5] = (me) => Y())
                }, [
                  (p(!0), h(W, null, he(r.value, (me) => (p(), h("option", {
                    key: me.id,
                    value: me.path
                  }, o(me.path), 9, TO))), 128))
                ], 544), [
                  [rt, m.value]
                ])
              ])
            ]),
            de(lO, {
              path: m.value,
              sample: r.value,
              rule: $.value === "guided" ? C.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            s("details", {
              class: "library-inference-customize",
              open: I.value,
              onToggle: Re[9] || (Re[9] = (me) => I.value = me.target.open)
            }, [
              s("summary", null, o(u(w)("library", "Edit pattern")), 1),
              s("label", null, [
                ie(o(u(w)("library", "Rule editor")), 1),
                ge(s("select", {
                  "onUpdate:modelValue": Re[6] || (Re[6] = (me) => $.value = me)
                }, [
                  s("option", EO, o(u(w)("library", "Guided assignments")), 1),
                  s("option", $O, o(u(w)("library", "Advanced pattern")), 1),
                  s("option", xO, o(u(w)("library", "Folder rules")), 1)
                ], 512), [
                  [rt, $.value]
                ])
              ]),
              $.value === "folders" ? (p(), Pe(J3, {
                key: 0,
                "root-id": y.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: c.value,
                "scope-pending": J.value,
                onLoaded: Xe
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : E("", !0),
              $.value === "guided" && C.value ? (p(), h(W, { key: 1 }, [
                de(Lh, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: Se
                }, null, 8, ["rule", "request-token"]),
                s("button", {
                  class: "button secondary",
                  onClick: pe
                }, o(u(w)("library", "Reset assignments from this example")), 1),
                ne.value.length !== C.value.parts.length ? (p(), h("p", OO, o(u(w)("library", "This example has a different folder depth and does not match the rule.")), 1)) : E("", !0),
                (p(!0), h(W, null, he(C.value.parts, (me, De) => (p(), h("div", {
                  key: `${N.value}-${De}`
                }, [
                  s("h3", null, o(De === C.value.parts.length - 1 ? u(w)("library", "Filename") : u(w)("library", "Folder")) + " " + o(De + 1), 1),
                  de(k3, {
                    node: me,
                    value: ne.value[De] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                s("label", NO, [
                  ge(s("input", {
                    "onUpdate:modelValue": Re[7] || (Re[7] = (me) => C.value.combineAuthors = me),
                    type: "checkbox"
                  }, null, 512), [
                    [wa, C.value.combineAuthors]
                  ]),
                  de(Ye, {
                    text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(w)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: we(() => [
                      ie(o(u(w)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : E("", !0),
              $.value === "pattern" ? (p(), h("details", RO, [
                s("summary", null, o(u(w)("library", "Pattern and presets")), 1),
                de(Lh, {
                  pattern: R.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: we(() => [
                    s("label", null, [
                      de(Ye, {
                        text: u(w)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((me) => `%${me[0]}%`).join(" · ")
                      }, {
                        default: we(() => [
                          ie(o(u(w)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(s("input", {
                        "onUpdate:modelValue": Re[8] || (Re[8] = (me) => R.value = me),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [je, R.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : E("", !0)
            ], 40, AO)
          ]),
          s("aside", {
            class: "library-inference-live",
            "aria-label": u(w)("library", "Live preview")
          }, [
            s("h3", null, o(u(w)("library", "Live preview")), 1),
            s("p", {
              class: "library-inference-live-path",
              title: m.value
            }, o(m.value), 9, LO),
            Z.value ? (p(), h("div", PO, [
              s("p", DO, o(H.value[Z.value.status]), 1),
              $.value === "folders" ? (p(), Pe(vd, {
                key: 0,
                result: Z.value,
                labels: x.value,
                statuses: H.value
              }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
              Z.value.changes.length ? (p(), h("dl", FO, [
                (p(!0), h(W, null, he(Z.value.changes, (me) => (p(), h("div", {
                  key: me.field,
                  class: Te(["library-inference-live-field", `library-inference-live-field--${me.status}`])
                }, [
                  s("dt", null, o(x.value[me.field]), 1),
                  s("dd", null, [
                    me.field === "author" && me.values ? (p(), h("span", MO, [
                      (p(!0), h(W, null, he(me.values, (De) => (p(), h("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (p(), h("strong", UO, o(me.value || "—"), 1)),
                    s("small", null, [
                      ie(o(u(w)("library", "Current value")) + ": ", 1),
                      s("span", zO, o(me.before || "—"), 1)
                    ]),
                    me.raw !== me.value ? (p(), h("small", jO, [
                      ie(o(u(w)("library", "Source text")) + ": ", 1),
                      s("span", BO, o(me.raw), 1)
                    ])) : E("", !0),
                    s("small", null, o(H.value[me.status]), 1),
                    me.sources ? (p(), h("small", HO, o(u(w)("library", "Matched rule")) + ": " + o(me.sources.map((De) => De.name).join(", ")), 1)) : E("", !0)
                  ])
                ], 2))), 128))
              ])) : Z.value.conflicts?.length ? E("", !0) : (p(), h("p", VO, o(u(w)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : E("", !0),
            $.value === "pattern" ? (p(), h("details", qO, [
              s("summary", null, o(u(w)("library", "Active pattern")), 1),
              s("code", GO, o(R.value), 1)
            ])) : E("", !0)
          ], 8, IO)
        ])
      ])) : E("", !0),
      s("section", KO, [
        s("h2", null, o(u(w)("library", "3. Review the sample")), 1),
        s("label", null, [
          de(Ye, {
            text: u(w)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: we(() => [
              ie(o(u(w)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(s("select", {
            "onUpdate:modelValue": Re[10] || (Re[10] = (me) => P.value = me)
          }, [
            s("option", WO, o(u(w)("library", "All")) + " (" + o(K.value.length) + ")", 1),
            (p(!0), h(W, null, he(H.value, (me, De) => (p(), h("option", {
              key: De,
              value: De
            }, o(me) + " (" + o(V.value[De] || 0) + ")", 9, YO))), 128))
          ], 512), [
            [rt, P.value]
          ])
        ]),
        !ae.value.length && !c.value ? (p(), h("p", ZO, o(u(w)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : E("", !0),
        (p(!0), h(W, null, he(ae.value, (me) => (p(), h("details", {
          key: me.id,
          class: "library-inference-result"
        }, [
          s("summary", null, [
            s("span", XO, o(me.path), 1),
            s("strong", null, o(H.value[me.status]), 1)
          ]),
          $.value === "folders" ? (p(), Pe(vd, {
            key: 0,
            result: me,
            labels: x.value,
            statuses: H.value
          }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
          me.changes.length ? (p(), h("div", JO, [
            s("table", null, [
              s("thead", null, [
                s("tr", null, [
                  s("th", null, o(u(w)("library", "Field")), 1),
                  s("th", null, o(u(w)("library", "Current value")), 1),
                  s("th", null, o(u(w)("library", "Proposed value")), 1),
                  s("th", null, o(u(w)("library", "Source text")), 1)
                ])
              ]),
              s("tbody", null, [
                (p(!0), h(W, null, he(me.changes, (De) => (p(), h("tr", {
                  key: De.field
                }, [
                  s("th", null, o(x.value[De.field]), 1),
                  s("td", null, o(De.before || "—"), 1),
                  s("td", null, [
                    ie(o(De.value), 1),
                    s("small", null, o(H.value[De.status]), 1)
                  ]),
                  s("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : me.conflicts?.length ? E("", !0) : (p(), h("p", QO, o(u(w)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        s("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Sample pages")
        }, [
          s("button", {
            class: "button secondary",
            disabled: c.value || l.value === 1,
            onClick: Re[11] || (Re[11] = (me) => Me(l.value - 1))
          }, o(u(w)("library", "Previous page")), 9, t4),
          s("span", null, o(l.value), 1),
          s("button", {
            class: "button secondary",
            disabled: c.value || !d.value,
            onClick: Re[12] || (Re[12] = (me) => Me(l.value + 1))
          }, o(u(w)("library", "Next page")), 9, i4)
        ], 8, e4)
      ]),
      de(mg, {
        class: "library-inference-step",
        results: K.value,
        labels: x.value,
        "request-token": e.requestToken,
        disabled: c.value || J.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? R.value : void 0, rule: $.value === "guided" ? C.value : void 0, folderRules: $.value === "folders" ? T.value : void 0, rootId: y.value, folder: k.value }),
        onChanged: Re[13] || (Re[13] = (me) => Me(l.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      de(e3, {
        definition: { mode: $.value, pattern: R.value, rule: C.value, rootId: y.value, folder: k.value, recursive: a.value },
        labels: x.value,
        statuses: H.value,
        "request-token": e.requestToken,
        disabled: c.value || J.value || !y.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, sO));
  }
}, a4 = ["aria-label", "title", "onClick"], r4 = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, l4 = { id: "library-sidebar-filters-heading" }, s4 = ["aria-label"], o4 = ["value"], u4 = ["name", "value"], c4 = ["value"], d4 = ["value"], f4 = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, p4 = ["title"], h4 = ["placeholder"], v4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, b4 = { value: "" }, g4 = ["value"], m4 = { class: "library-publisher-filter" }, y4 = { for: "library-publisher-search" }, _4 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], w4 = ["value"], k4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, S4 = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, C4 = ["id", "aria-selected"], T4 = ["onClick"], A4 = { class: "library-publication-filter" }, E4 = { for: "library-publication-search" }, $4 = ["placeholder", "aria-expanded"], x4 = ["value"], O4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, N4 = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, R4 = ["onClick"], I4 = { class: "library-year-filter" }, L4 = { for: "library-year-search" }, P4 = ["placeholder", "aria-expanded"], D4 = ["value"], F4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, M4 = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, U4 = ["onClick"], z4 = { class: "library-creator-filter" }, j4 = { for: "library-creator-search" }, B4 = ["placeholder", "title", "aria-expanded"], H4 = ["value"], V4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, q4 = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, G4 = ["onClick"], K4 = { class: "library-tag-filter" }, W4 = { for: "library-tag-search" }, Y4 = ["placeholder", "aria-expanded"], Z4 = ["value"], X4 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, J4 = ["onClick"], Q4 = { value: "" }, eN = ["value"], tN = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, iN = { value: "" }, nN = ["value"], aN = { class: "library-folder-filter" }, rN = { for: "library-folder-search" }, lN = ["placeholder", "title", "aria-expanded"], sN = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, oN = ["onClick"], uN = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, cN = { value: "" }, dN = ["value"], fN = { value: "" }, pN = ["value"], hN = { class: "library-subject-filter" }, vN = { for: "library-subject-search" }, bN = ["placeholder", "title", "aria-expanded"], gN = ["value"], mN = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, yN = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, _N = ["onClick"], wN = { class: "library-classification-filter" }, kN = { for: "library-classification-search" }, SN = ["placeholder", "title", "aria-expanded"], CN = ["value"], TN = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, AN = ["onClick"], EN = { value: "" }, $N = { value: "1" }, xN = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, ON = {
  type: "submit",
  class: "button primary"
}, NN = ["href"], RN = ["lang", "dir"], IN = ["aria-label"], LN = ["href", "aria-label", "title", "onClick"], PN = ["title"], DN = ["href"], FN = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, MN = { class: "library-review-header" }, UN = { class: "library-muted library-catalogue-eyebrow" }, zN = { id: "library-review-heading" }, jN = ["aria-label"], BN = ["href", "aria-current", "onClick"], HN = ["aria-label"], VN = ["name", "value"], qN = {
  type: "submit",
  class: "button secondary"
}, GN = ["aria-busy"], KN = { key: 0 }, WN = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, YN = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, ZN = { class: "library-metadata-review-workbench-copy" }, XN = { class: "library-muted library-catalogue-eyebrow" }, JN = ["title"], QN = {
  key: 0,
  class: "library-metadata-review-card"
}, eR = {
  class: "library-bidi-human",
  dir: "auto"
}, tR = { class: "library-muted" }, iR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, nR = { class: "library-metadata-review-fields" }, aR = {
  class: "library-bidi-human",
  dir: "auto"
}, rR = {
  class: "library-bidi-human",
  dir: "auto"
}, lR = {
  class: "library-bidi-human",
  dir: "auto"
}, sR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, oR = {
  class: "library-bidi-human",
  dir: "auto"
}, uR = {
  class: "library-bidi-human",
  dir: "auto"
}, cR = ["action"], dR = ["value"], fR = ["value"], pR = ["disabled", "title"], hR = { class: "library-metadata-review-actions" }, vR = ["href"], bR = ["href"], gR = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, mR = ["href"], yR = ["aria-label"], _R = ["onClick"], wR = {
  class: "library-bidi-human",
  dir: "auto"
}, kR = {
  key: 0,
  class: "library-muted"
}, SR = {
  class: "library-bidi-human",
  dir: "auto"
}, CR = {
  key: 1,
  class: "library-scan-error"
}, TR = {
  class: "library-bidi-human",
  dir: "auto"
}, AR = ["onClick"], ER = ["href", "onClick"], $R = ["aria-label"], xR = ["href"], OR = {
  key: 1,
  class: "library-muted"
}, NR = { key: 0 }, RR = ["href"], IR = {
  key: 3,
  class: "library-muted"
}, LR = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, PR = { class: "library-home-header" }, DR = { class: "library-muted library-catalogue-eyebrow" }, FR = { id: "library-home-heading" }, MR = ["aria-label"], UR = ["aria-label"], zR = ["href", "aria-label", "onClick"], jR = ["title"], BR = { class: "library-empty-actions" }, HR = ["href"], VR = ["href"], qR = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, GR = { id: "library-continue-heading" }, KR = ["href"], WR = {
  key: 0,
  class: "library-home-card-row"
}, YR = ["aria-label", "onClick"], ZR = { class: "library-cover-frame" }, XR = ["src"], JR = { class: "library-cover-summary" }, QR = ["onClick"], eI = { dir: "auto" }, tI = {
  key: 0,
  class: "library-cover-creator"
}, iI = { dir: "auto" }, nI = ["href", "onClick"], aI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, rI = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, lI = { id: "library-recent-heading" }, sI = ["href"], oI = {
  key: 0,
  class: "library-home-card-row"
}, uI = ["aria-label", "onClick"], cI = { class: "library-cover-frame" }, dI = ["src"], fI = { class: "library-cover-summary" }, pI = ["onClick"], hI = { dir: "auto" }, vI = {
  key: 0,
  class: "library-cover-creator"
}, bI = { dir: "auto" }, gI = ["href", "onClick"], mI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, yI = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, _I = { id: "library-home-shelves-heading" }, wI = ["href"], kI = ["aria-label"], SI = ["href"], CI = { dir: "auto" }, TI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, AI = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, EI = { id: "library-home-attention-heading" }, $I = { class: "library-muted" }, xI = ["href"], OI = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, NI = { class: "library-home-header" }, RI = { class: "library-muted library-catalogue-eyebrow" }, II = { id: "library-shelves-landing-heading" }, LI = ["aria-label"], PI = ["aria-label"], DI = ["href", "aria-label", "onClick"], FI = ["title"], MI = { class: "library-empty-actions" }, UI = ["href"], zI = ["href"], jI = ["aria-label"], BI = { class: "library-shelf-tree" }, HI = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, VI = { class: "library-muted" }, qI = { class: "library-empty-actions" }, GI = ["href"], KI = ["href"], WI = ["aria-busy"], YI = { class: "library-catalogue-header" }, ZI = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, XI = ["aria-label"], JI = { class: "library-mobile-filter-count" }, QI = ["aria-label"], eL = ["value"], tL = ["name", "value"], iL = { class: "library-mobile-filter-group" }, nL = { class: "library-quick-filter-search" }, aL = ["placeholder"], rL = { value: "" }, lL = ["value"], sL = { class: "library-publisher-filter" }, oL = { for: "library-mobile-publisher-search" }, uL = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], cL = ["value"], dL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, fL = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, pL = ["id", "aria-selected"], hL = ["onClick"], vL = { class: "library-publication-filter" }, bL = { for: "library-mobile-publication-search" }, gL = ["placeholder", "aria-expanded"], mL = ["value"], yL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, _L = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, wL = ["onClick"], kL = { class: "library-year-filter" }, SL = { for: "library-mobile-year-search" }, CL = ["placeholder", "aria-expanded"], TL = ["value"], AL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, EL = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, $L = ["onClick"], xL = { class: "library-creator-filter" }, OL = { for: "library-mobile-creator-search" }, NL = ["placeholder", "title", "aria-expanded"], RL = ["value"], IL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, LL = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, PL = ["onClick"], DL = { value: "" }, FL = ["value"], ML = { class: "library-subject-filter" }, UL = { for: "library-mobile-subject-search" }, zL = ["placeholder", "title", "aria-expanded"], jL = ["value"], BL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, HL = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, VL = ["onClick"], qL = { class: "library-classification-filter" }, GL = { for: "library-mobile-classification-search" }, KL = ["placeholder", "title", "aria-expanded"], WL = ["value"], YL = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, ZL = ["onClick"], XL = { class: "library-mobile-filter-group" }, JL = { value: "" }, QL = ["value"], eP = { class: "library-folder-filter" }, tP = { for: "library-mobile-folder-search" }, iP = ["placeholder", "title", "aria-expanded"], nP = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, aP = ["onClick"], rP = { class: "library-mobile-filter-group" }, lP = { value: "" }, sP = ["value"], oP = { value: "" }, uP = ["value"], cP = { value: "" }, dP = { value: "1" }, fP = { class: "library-mobile-filter-group" }, pP = { class: "library-tag-filter" }, hP = { for: "library-tag-search" }, vP = ["placeholder", "aria-expanded"], bP = ["value"], gP = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, mP = ["onClick"], yP = { value: "title" }, _P = { value: "recent" }, wP = { value: "publicationDate" }, kP = { value: "publication" }, SP = { value: "lastOpened" }, CP = { value: "format" }, TP = { value: "compact" }, AP = { value: "list" }, EP = { class: "library-mobile-filter-actions" }, $P = ["href"], xP = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, OP = ["aria-label"], NP = { class: "library-catalogue-control-band" }, RP = {
  id: "library-collections",
  class: "library-saved-collections"
}, IP = ["title"], LP = ["action", "title"], PP = ["value"], DP = ["value"], FP = { class: "library-control-label" }, MP = ["placeholder", "disabled"], UP = ["disabled", "title"], zP = ["aria-label"], jP = ["name", "value"], BP = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, HP = { value: "title" }, VP = { value: "recent" }, qP = { value: "publicationDate" }, GP = { value: "publication" }, KP = { value: "lastOpened" }, WP = { value: "format" }, YP = ["aria-label"], ZP = ["aria-pressed"], XP = ["aria-pressed"], JP = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, QP = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, e8 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, t8 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, i8 = { key: 0 }, n8 = { key: 1 }, a8 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, r8 = { class: "library-muted library-catalogue-eyebrow" }, l8 = ["title"], s8 = ["aria-label"], o8 = { key: 0 }, u8 = { key: 1 }, c8 = { key: 2 }, d8 = ["aria-label"], f8 = { key: 0 }, p8 = { key: 1 }, h8 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, v8 = { class: "library-muted library-catalogue-eyebrow" }, b8 = ["title"], g8 = ["aria-label"], m8 = ["href"], y8 = {
  key: 0,
  class: "library-notice"
}, _8 = { class: "library-publication-issue-label" }, w8 = ["href"], k8 = { class: "library-muted" }, S8 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, C8 = ["title"], T8 = ["href"], A8 = { class: "library-catalogue-status-row" }, E8 = { class: "library-muted library-filter-result-summary" }, $8 = ["aria-label"], x8 = { class: "library-pagination-range" }, O8 = { key: 0 }, N8 = ["href"], R8 = {
  key: 1,
  class: "library-muted"
}, I8 = ["href"], L8 = {
  key: 3,
  class: "library-muted"
}, P8 = ["title"], D8 = { class: "library-empty-actions" }, F8 = ["href"], M8 = { class: "library-muted" }, U8 = ["title"], z8 = { class: "library-empty-actions" }, j8 = ["href"], B8 = ["title"], H8 = ["aria-label"], V8 = ["href", "aria-label", "onClick"], q8 = ["title"], G8 = {
  key: 1,
  class: "library-muted"
}, K8 = { class: "library-empty-actions" }, W8 = ["href"], Y8 = ["title"], Z8 = { class: "library-empty-actions" }, X8 = ["href"], J8 = ["aria-label"], Q8 = { class: "library-list-selection-actions" }, e5 = { class: "library-select-visible" }, t5 = ["checked"], i5 = ["title"], n5 = {
  key: 0,
  "aria-live": "polite"
}, a5 = ["aria-label"], r5 = { value: "" }, l5 = { value: "tag" }, s5 = { value: "untag" }, o5 = { value: "edit" }, u5 = { value: "covers" }, c5 = { value: "reset" }, d5 = ["action"], f5 = ["value"], p5 = ["placeholder"], h5 = ["title"], v5 = ["action"], b5 = ["value"], g5 = ["placeholder"], m5 = ["title"], y5 = ["action"], _5 = ["value"], w5 = ["name", "value"], k5 = ["title"], S5 = ["action"], C5 = ["value"], T5 = ["name", "value"], A5 = { name: "bulkEditField" }, E5 = { value: "publicationType" }, $5 = { value: "subtitle" }, x5 = { value: "creators" }, O5 = { value: "publication" }, N5 = { value: "series" }, R5 = { value: "seriesNumber" }, I5 = { value: "genre" }, L5 = { value: "publicationDate" }, P5 = { value: "language" }, D5 = { value: "publisher" }, F5 = { value: "subjects" }, M5 = { value: "classifications" }, U5 = ["placeholder"], z5 = ["title"], j5 = ["action"], B5 = ["value"], H5 = ["name", "value"], V5 = ["title"], q5 = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, G5 = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, K5 = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, W5 = { class: "hidden-visually" }, Y5 = { class: "library-catalogue-list-selection" }, Z5 = { class: "hidden-visually" }, X5 = { class: "library-catalogue-list-cover-heading" }, J5 = { class: "hidden-visually" }, Q5 = { scope: "col" }, eD = { scope: "col" }, tD = { scope: "col" }, iD = { scope: "col" }, nD = { scope: "col" }, aD = { scope: "col" }, rD = { scope: "col" }, lD = { class: "library-catalogue-list-selection" }, sD = { class: "library-item-selection" }, oD = ["checked", "aria-label", "onChange"], uD = { class: "library-catalogue-list-cover-cell" }, cD = ["aria-label", "onClick"], dD = ["src"], fD = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, pD = ["onClick"], hD = {
  class: "library-bidi-human",
  dir: "auto"
}, vD = ["href"], bD = { class: "library-catalogue-list-creators" }, gD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, mD = ["aria-label"], yD = ["datetime"], _D = ["aria-label"], wD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, kD = ["aria-label"], SD = ["dir"], CD = ["aria-label"], TD = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, AD = ["aria-label"], ED = { class: "library-catalogue-list-actions" }, $D = ["href", "onClick"], xD = ["onClick"], OD = { class: "library-item-selection" }, ND = ["checked", "aria-label", "onChange"], RD = ["aria-labelledby", "aria-expanded", "onClick"], ID = ["id"], LD = ["action", "onSubmit"], PD = ["value"], DD = ["value"], FD = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], MD = ["data-library-star-error"], UD = { class: "library-cover-summary" }, zD = { class: "library-cover-primary" }, jD = ["href"], BD = ["id"], HD = ["onClick"], VD = {
  class: "library-bidi-human",
  dir: "auto"
}, qD = {
  key: 1,
  class: "library-cover-creator"
}, GD = {
  class: "library-bidi-human",
  dir: "auto"
}, KD = {
  key: 2,
  class: "library-cover-context"
}, WD = {
  class: "library-bidi-human",
  dir: "auto"
}, YD = ["aria-label"], ZD = { class: "library-pagination-range" }, XD = { key: 0 }, JD = ["href"], QD = {
  key: 1,
  class: "library-muted"
}, eF = ["href"], tF = {
  key: 3,
  class: "library-muted"
}, iF = { class: "library-sidebar-content" }, nF = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, aF = ["role"], rF = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, lF = { class: "library-sidebar-publication-header" }, sF = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, oF = ["src"], uF = { class: "library-sidebar-publication-summary" }, cF = { class: "library-muted library-catalogue-eyebrow" }, dF = {
  class: "library-bidi-human",
  dir: "auto"
}, fF = { key: 0 }, pF = {
  class: "library-bidi-machine",
  dir: "ltr"
}, hF = { class: "library-detail-drawer-actions" }, vF = ["href"], bF = ["aria-label"], gF = ["aria-current", "onClick"], mF = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, yF = { id: "library-sidebar-overview-heading" }, _F = {
  key: 0,
  class: "library-sidebar-description"
}, wF = {
  class: "library-bidi-human",
  dir: "auto"
}, kF = { class: "library-detail-drawer-facts" }, SF = { key: 0 }, CF = ["href", "title"], TF = {
  class: "library-bidi-human",
  dir: "auto"
}, AF = { key: 1 }, EF = ["href", "title"], $F = { key: 1 }, xF = { key: 2 }, OF = { key: 2 }, NF = ["href", "title"], RF = {
  class: "library-bidi-human",
  dir: "auto"
}, IF = { key: 3 }, LF = { class: "library-detail-facet-list" }, PF = ["href", "title", "onClick"], DF = {
  class: "library-bidi-machine",
  dir: "ltr"
}, FF = { key: 4 }, MF = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, UF = { id: "library-sidebar-metadata-heading" }, zF = ["placeholder"], jF = ["onUpdate:modelValue", "aria-label", "placeholder"], BF = ["onUpdate:modelValue", "aria-label"], HF = ["onClick"], VF = {
  key: 0,
  role: "alert"
}, qF = {
  key: 1,
  role: "status"
}, GF = ["disabled"], KF = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, WF = { id: "library-sidebar-suggestions-heading" }, YF = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, ZF = { id: "library-sidebar-activity-heading" }, XF = { class: "library-detail-drawer-facts" }, JF = { key: 0 }, QF = { key: 1 }, eM = { key: 2 }, tM = { class: "library-detail-drawer-file" }, iM = ["href"], nM = { dir: "ltr" }, aM = {
  key: 1,
  dir: "ltr"
}, rM = ["aria-label"], lM = ["href"], sM = { dir: "auto" }, oM = ["aria-label"], uM = ["disabled"], cM = ["disabled"], dM = 20, fM = "/apps/library", pM = 2147483647, hM = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = U_(w, () => `${us()}:${ob()}`), i = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], a = Object.freeze([
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Suggested updates" },
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs details" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "File problems" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Cover problems" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Imported changes" }
    ]), r = Object.freeze({
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
    function l(_, b) {
      return Object.prototype.hasOwnProperty.call(r, _) && String(b ?? "").trim() === r[_];
    }
    function d(_) {
      const b = new URLSearchParams(_);
      for (const f of Object.keys(r)) {
        const F = [...new Set([...b.keys()].filter((Ee) => Ee === f || Ee.startsWith(`${f}[`)))], ue = F.reduce((Ee, ze) => Ee + b.getAll(ze).length, 0);
        if (ue > 1 || F.some((Ee) => Ee !== f)) {
          for (const Ee of F) b.delete(Ee);
          continue;
        }
        f !== "status" && ue === 1 && !l(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function c(_) {
      return Object.keys(r).some((b) => _.getAll(b).length === 1 && l(b, _.get(b)));
    }
    function g(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || l(b, f)));
    }
    const v = Object.freeze(["compact", "list"]);
    function m(_) {
      return v.includes(_) ? _ : "compact";
    }
    const y = /* @__PURE__ */ Nt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Nt((y.items || []).map((_) => ({ ..._ }))), T = z(() => k), C = z(() => y.shelves || []), $ = z(() => y.formats || []), N = z(() => y.publicationTypes?.length ? y.publicationTypes : n), R = z(() => y.publications || []), P = z(() => y.publicationIssueContext || null), I = z(() => y.scanStatuses || []), ve = z(() => y.workflowStatuses || []), Q = z(() => y.cataloguePagination || {
      page: 1,
      limit: 100,
      total: T.value.length,
      visible: T.value.length,
      from: T.value.length > 0 ? 1 : 0,
      to: T.value.length,
      previousUrl: "",
      nextUrl: ""
    }), x = /* @__PURE__ */ Nt({
      q: y.activeFilters?.q || "",
      view: m(y.activeFilters?.view),
      type: y.activeFilters?.type || "",
      publisher: y.activeFilters?.publisher || "",
      publication: y.activeFilters?.publication || "",
      year: y.activeFilters?.year || "",
      language: y.activeFilters?.language || "",
      creator: y.activeFilters?.creator || "",
      format: y.activeFilters?.format || "",
      tag: y.activeFilters?.tag || "",
      shelf: y.activeFilters?.shelf || "",
      folder: y.activeFilters?.folder || "",
      status: y.activeFilters?.status || "",
      workflowStatus: y.activeFilters?.workflowStatus || "",
      subject: y.activeFilters?.subject || "",
      classification: y.activeFilters?.classification || "",
      scannerConflicts: y.activeFilters?.scannerConflicts || "",
      starred: y.activeFilters?.starred || "",
      recentlyOpened: y.activeFilters?.recentlyOpened || "",
      needsMetadata: y.activeFilters?.needsMetadata || "",
      coverReview: y.activeFilters?.coverReview || "",
      noCreator: y.activeFilters?.noCreator || "",
      noPublication: y.activeFilters?.noPublication || "",
      noDate: y.activeFilters?.noDate || "",
      titleFromFilename: y.activeFilters?.titleFromFilename || "",
      noDescription: y.activeFilters?.noDescription || "",
      unsupportedContainer: y.activeFilters?.unsupportedContainer || "",
      weakMetadata: y.activeFilters?.weakMetadata || "",
      unreviewedImports: y.activeFilters?.unreviewedImports || "",
      sort: y.activeFilters?.sort || "title"
    });
    for (const _ of Object.keys(r))
      _ !== "status" && (l(_, x[_]) || (x[_] = ""));
    const H = /* @__PURE__ */ G(x.publication), K = /* @__PURE__ */ G(x.q), Z = /* @__PURE__ */ G(!1), ae = /* @__PURE__ */ G(null), j = z(() => {
      const _ = H.value.trim().toLocaleLowerCase();
      return (_ !== "" && ae.value !== null ? ae.value : R.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, dM);
    });
    qe(() => x.publication, (_) => {
      H.value = _ || "";
    }), qe(() => x.q, (_) => {
      K.value = _ || "";
    });
    let q = null, L = null, V = 0;
    qe(H, (_) => {
      window.clearTimeout(q), L?.abort(), L = null, ae.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++V;
      q = window.setTimeout(() => {
        Yg(b, f);
      }, 200);
    });
    const J = /* @__PURE__ */ G(x.publisher), ne = /* @__PURE__ */ G(!1), Y = /* @__PURE__ */ G(null), pe = z(() => Y.value || []);
    qe(() => x.publisher, (_) => {
      J.value = _ || "";
    });
    let Se = null, Le = null, Oe = 0;
    qe(J, (_) => {
      window.clearTimeout(Se), Le?.abort(), Le = null, Y.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      Se = window.setTimeout(() => {
        Hg(b, f);
      }, 200);
    });
    const Me = /* @__PURE__ */ G(x.creator), Xe = /* @__PURE__ */ G(!1), pt = /* @__PURE__ */ G(null), ye = z(() => pt.value || []);
    qe(() => x.creator, (_) => {
      Me.value = _ || "";
    });
    let Re = null, me = null, De = 0;
    qe(Me, (_) => {
      window.clearTimeout(Re), me?.abort(), me = null, pt.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++De;
      Re = window.setTimeout(() => {
        Bg(b, f);
      }, 200);
    });
    const ut = /* @__PURE__ */ G(x.folder), ee = /* @__PURE__ */ G(!1), S = /* @__PURE__ */ G(null), O = z(() => S.value || []);
    qe(() => x.folder, (_) => {
      ut.value = _ || "";
    });
    let D = null, B = null, U = 0;
    qe(ut, (_) => {
      window.clearTimeout(D), B?.abort(), B = null, S.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++U;
      D = window.setTimeout(() => {
        Kg(b, f);
      }, 200);
    });
    const X = /* @__PURE__ */ G(x.subject), te = /* @__PURE__ */ G(!1), le = /* @__PURE__ */ G(null), fe = z(() => le.value || []);
    qe(() => x.subject, (_) => {
      X.value = _ || "";
    });
    let se = null, $e = null, _e = 0;
    qe(X, (_) => {
      window.clearTimeout(se), $e?.abort(), $e = null, le.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++_e;
      se = window.setTimeout(() => {
        Vg(b, f);
      }, 200);
    });
    const Ce = /* @__PURE__ */ G(x.classification), xe = /* @__PURE__ */ G(!1), He = /* @__PURE__ */ G(null), We = z(() => He.value || []);
    qe(() => x.classification, (_) => {
      Ce.value = _ || "";
    });
    let Ve = null, it = null, ct = 0;
    qe(Ce, (_) => {
      window.clearTimeout(Ve), it?.abort(), it = null, He.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++ct;
      Ve = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const _t = /* @__PURE__ */ G(x.tag), bt = /* @__PURE__ */ G(!1), ei = /* @__PURE__ */ G(null), hi = z(() => ei.value || []);
    qe(() => x.tag, (_) => {
      _t.value = _ || "";
    });
    let kt = null, Ot = null, Ui = 0;
    qe(_t, (_) => {
      window.clearTimeout(kt), Ot?.abort(), Ot = null, ei.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Ui;
      kt = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const Vt = /* @__PURE__ */ G(x.year), vi = /* @__PURE__ */ G(!1), Aa = /* @__PURE__ */ G(null), Yi = z(() => Aa.value || []);
    qe(() => x.year, (_) => {
      Vt.value = _ || "";
    });
    let Ea = null, Ai = null, Zi = 0;
    qe(Vt, (_) => {
      window.clearTimeout(Ea), Ai?.abort(), Ai = null, Aa.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Zi;
      Ea = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const Xi = Object.fromEntries(Object.keys(x).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), Lr = window.location.pathname.indexOf(fM), dn = Lr >= 0 ? window.location.pathname.slice(0, Lr) : "", Gn = {
      catalogue: `${dn}/apps/library/`,
      review: `${dn}/apps/library/?scannerConflicts=1`,
      settings: `${dn}/settings/user/library`
    };
    function Kn(_, b) {
      if (typeof _ != "string" || _ === "") return b;
      try {
        const f = dn ? `${dn}/` : "/";
        let F = _;
        for (let ue = 0; ue < 5; ue += 1) {
          if (!F.startsWith("/") || F.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(F)) return b;
          const Ee = new URL(F, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(f)) return b;
          const ze = F.split(/[?#]/, 1)[0];
          for (const _i of ze.split("/")) {
            let Ji = _i;
            for (let br = 0; br < 5; br += 1) {
              const Qi = decodeURIComponent(Ji);
              if (/[\\/\u0000-\u001f\u007f]/.test(Qi) || Qi === "." || Qi === "..") return b;
              if (Qi === Ji) break;
              if (Ji = Qi, br === 4) return b;
            }
          }
          const Qe = decodeURI(F);
          if (Qe === F) return _;
          F = Qe;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Wn = z(() => Kn(y.settingsUrl, Gn.settings)), dt = z(() => Kn(y.catalogueRootUrl, Gn.catalogue)), rr = z(() => Kn(y.homeUrl, `${Gn.catalogue}?home=1`)), bi = z(() => Kn(y.shelvesUrl, `${Gn.catalogue}?shelves=1`)), fn = z(() => Kn(y.reviewUrl || y.scannerConflictReviewUrl, Gn.review)), Yn = z(() => Object.entries(r).some(([_, b]) => x[_] === b)), lr = z(() => a.reduce((_, b) => _ + Number(Vu.value[b.countKey] || 0), 0)), $a = z(() => y.surface === "home"), Zn = z(() => y.surface === "shelves"), pn = z(() => y.surface === "duplicates"), Xn = z(() => y.surface === "inference"), hn = z(() => y.surface === "authors"), xa = z(() => y.surface === "lists"), Ei = z(() => `${dt.value}?lists=1`), Su = Number(new URLSearchParams(window.location.search).get("addToList")) || null, ds = /* @__PURE__ */ G([]), nt = /* @__PURE__ */ G("");
    async function vn() {
      try {
        ds.value = (await va()).lists;
      } catch {
      }
    }
    xt(vn);
    const Cu = z(() => !hn.value && !pn.value && !Xn.value && !xa.value && !$a.value && !Zn.value && !Yn.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), fs = z(() => [
      { key: "home", name: t("library", "Home"), href: rr.value, active: $a.value },
      { key: "all", name: t("library", "All publications"), href: dt.value, active: Cu.value },
      { key: "starred", name: t("library", "Starred"), href: `${dt.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${dt.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: bi.value, active: Zn.value || !!x.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${dt.value}#library-collections`, active: !1 }
    ]), Pr = z(() => Vr.value.map((_) => ({
      key: `collection-${_.id}`,
      rawName: _.name,
      id: _.id,
      name: _.countPending ? _.name : `${_.name} (${fi("library", "%n item", "%n items", Number(_.count || 0))})`,
      href: cm(_.filters),
      active: dm(_.filters)
    }))), gt = z(() => y.requestToken || ""), sr = z(() => !!y.duplicateSuggestions), Tu = z(() => JSON.stringify(T.value.map((_) => [_.id, _.title, _.creators, _.publicationDate]))), Au = z(() => JSON.parse(Tu.value).map((_) => Number(_[0]))), { results: bn, status: Eu } = pg(Au, sr, gt);
    function ti(_, b) {
      const f = String(_?.recordOpenUrl || "");
      if (!f || !gt.value) return;
      const F = new URLSearchParams({ requesttoken: gt.value });
      try {
        if (navigator.sendBeacon) {
          const ue = new Blob([F.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(f, ue);
          return;
        }
      } catch {
      }
      fetch(f, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: gt.value },
        body: F,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const or = z(() => y.catalogueEndpointUrl || "/apps/library/catalogue"), Dr = z(() => y.shelfChildrenUrl || "/apps/library/shelves/children"), Jn = z(() => y.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), ps = z(() => y.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Fr = z(() => y.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Mr = z(() => y.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ur = z(() => y.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), $u = z(() => y.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), hs = z(() => y.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), xu = z(() => y.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ou = z(() => y.itemSidebarUrlTemplate || `${dn}/apps/library/items/__ITEM_ID__/sidebar`), Nu = z(() => y.batchTagUrl || "/apps/library/bulk/tags"), Ru = z(() => y.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), vs = z(() => y.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Iu = z(() => y.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), bs = z(() => y.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ur = z(() => y.scannerConflictReviewUrl || "?scannerConflicts=1");
    y.importHealthSummary, y.importHealthSummary && Object.keys(y.importHealthSummary).length > 0;
    const Qn = z(() => y.discoveryPage === "publication"), Oa = z(() => y.discoveryPage === "year"), cr = z(() => y.discoveryPage === "creator"), ea = z(() => Qn.value || Oa.value || cr.value), zi = z(() => y.discoveryTitle || x.publication || x.year || x.creator || ""), Na = z(() => ea.value ? zi.value : t("library", "Library")), ui = z(() => cr.value ? t("library", "Creator") : Oa.value ? t("library", "Publication year") : t("library", "Publication / series")), gs = z(() => Number(y.rootCount || 0)), dr = z(() => Number(y.enabledRootCount || 0)), zr = z(() => gs.value === 0), fr = z(() => gs.value > 0 && dr.value === 0), gn = z(() => mt.value.length > 0), gi = /* @__PURE__ */ G(!1), jr = /* @__PURE__ */ G(null), ms = /* @__PURE__ */ G(null), Br = {
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
    }, Lu = {
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
    }, Pu = {
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
        list: "List"
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
    }, Hr = z(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const b = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", F = _.get("batchMetadataUnchanged") || "0", ue = _.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: ue });
    }), pr = z(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ta = z(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Vr = z(() => y.savedCollections || []), ce = z(() => y.savedCollectionSaveUrl || "/apps/library/collections"), A = z(() => y.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), M = v, re = z(() => M.includes(x.view) ? x.view : "compact"), oe = z(() => ({
      "library-cover-gallery--compact": re.value === "compact"
    }));
    function Ne(_) {
      const b = String(_ || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function Fe(_, b) {
      const f = String(b || "").trim();
      if (f === "" || Lu[_] === f) return "";
      if (_ === "format") return f.toUpperCase();
      if (_ === "folder") return Ne(f);
      const F = Pu[_]?.[f];
      return F ? t("library", F) : f;
    }
    function Ge(_, b) {
      const f = String(x[_] || "").trim(), F = Fe(_, f), ue = t("library", b);
      return {
        key: _,
        label: ue,
        value: f,
        displayValue: F,
        title: F ? `${ue}: ${f}` : ue
      };
    }
    const mt = z(() => Object.entries(Br).map(([_, b]) => Ge(_, b)).filter((_) => _.value !== "" && !(_.key === "sort" && _.value === "title") && !(_.key === "view" && _.value === "compact"))), Ct = z(() => mt.value.filter((_) => !["sort", "view"].includes(_.key))), Tt = z(() => mt.value.length), Pt = z(() => {
      const _ = new URLSearchParams();
      for (const f of Ct.value) _.set(f.key, f.value);
      const b = _.toString();
      return `${dt.value}${b ? `?${b}` : ""}`;
    }), $i = z(() => Ct.value[0] || null), qt = z(() => K.value.trim() !== String(x.q || "").trim()), ys = z(() => String(x.q || "").trim() !== "" || qt.value);
    function mi(_) {
      return ({
        q: K,
        publisher: J,
        publication: H,
        creator: Me,
        subject: X,
        year: Vt,
        folder: ut,
        classification: Ce,
        tag: _t
      }[_]?.value ?? "").trim() !== String(x[_] || "").trim();
    }
    function ji(_) {
      return mi(_) ? _ === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function mn(_) {
      return { "library-filter-apply--pending": mi(_) };
    }
    const _g = z(() => Tt.value > 0 ? t("library", "Filters ({count})", { count: Tt.value }) : t("library", "Filters")), wg = z(() => Tt.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: Tt.value }) : t("library", "Open filters panel")), kg = z(() => fi("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function Sg(_) {
      gi.value = _.currentTarget?.open === !0, gi.value && Rt(() => {
        jr.value?.focus?.();
      });
    }
    const Cg = /* @__PURE__ */ new Set([
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
    ]), tf = z(() => Object.entries(g(x)).filter(([_, b]) => !Cg.has(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Tg = z(() => Object.entries(x).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), _s = z(() => Object.entries(g(x)).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Ag = z(() => _s.value.filter(({ key: _, value: b }) => _ !== "q" && !(_ === "sort" && b === "title"))), ws = z(() => y.homeRows || { continueReading: [], recentlyAdded: [] }), nf = z(() => y.homeShelves || []), af = z(() => y.shelfTree || []), Du = z(() => y.needsAttention || { count: 0, url: `${dt.value}?needsMetadata=1` }), ii = /* @__PURE__ */ G([]), ks = z(() => new Set(ii.value));
    function rf(_, b) {
      const f = new Set(ii.value);
      b ? f.add(Number(_)) : f.delete(Number(_)), ii.value = [...f];
    }
    function Eg(_) {
      ii.value = _.currentTarget.checked ? T.value.map((b) => Number(b.id)) : [];
    }
    function $g() {
      const _ = new Set(T.value.map((b) => Number(b.id)));
      ii.value = ii.value.filter((b) => _.has(b));
    }
    function xg(_) {
      const b = _.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ii.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Ae = /* @__PURE__ */ G(null), Ra = /* @__PURE__ */ G(null), ni = /* @__PURE__ */ Nt({ loading: !1, error: "", missing: !1 }), Ia = /* @__PURE__ */ G("overview"), Bi = /* @__PURE__ */ Nt({ saving: !1, saved: !1, error: "" }), yt = /* @__PURE__ */ Nt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), lf = /* @__PURE__ */ G(null), La = /* @__PURE__ */ G(null), Pa = /* @__PURE__ */ G(!1);
    let Fu = null, yn = null, Ss = null, Mu = !1, qr = null, Uu = 0;
    const ia = z(() => Ra.value !== null), Gr = z(() => Ae.value ? T.value.findIndex((_) => _.id === Ae.value.id) : -1), Cs = z(() => Gr.value > 0 ? T.value[Gr.value - 1] : null), Ts = z(() => Gr.value >= 0 && Gr.value < T.value.length - 1 ? T.value[Gr.value + 1] : null), sf = z(() => Pg(Ae.value?.description || "")), Da = z(() => Rg(Ae.value?.publicationDate || "")), of = z(() => Ig(Ae.value?.language || "")), Og = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Ng = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Kr(_) {
      const b = String(_ ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Rg(_) {
      const f = Kr(_).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Ig(_) {
      return String(_ ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function uf(_, b) {
      const f = new URLSearchParams();
      for (const [F, ue] of Object.entries(x)) {
        const Ee = String(ue || "").trim();
        Ee !== "" && !(F === "sort" && Ee === "title") && !(F === "view" && Ee === "compact") && f.set(F, Ee);
      }
      return f.set(_, String(b || "").trim()), f.delete("page"), d(f);
    }
    function As(_, b) {
      const F = uf(_, b).toString();
      return `${dt.value}${F ? `?${F}` : ""}`;
    }
    function Es(_, b, f) {
      const F = String(f || "").trim();
      if (F === "") return;
      _?.preventDefault?.();
      const ue = uf(b, F);
      Yr({ historyMode: "none" }), Gt(null, {
        params: ue,
        generation: ++ai,
        historyMode: "push"
      });
    }
    function Lg(_) {
      return String(_ ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Pg(_) {
      let b = String(_ ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Lg(b);
        if (F === b) break;
        b = F;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function cf(_) {
      return { ..._, publicationDate: Kr(_?.publicationDate) };
    }
    function df(_) {
      for (const b of ["series", "seriesNumber", "genre"]) yt[b] = String(_?.[b] || "");
      yt.title = String(_?.title || ""), yt.publicationDate = Kr(_?.publicationDate), yt.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(Bi, { saving: !1, saved: !1, error: "" });
    }
    function Dg() {
      yt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Fg(_) {
      yt.identifiers.splice(_, 1);
    }
    async function Mg() {
      const _ = Ae.value;
      if (!_?.updateUrl || Bi.saving) return;
      Object.assign(Bi, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", gt.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const F = _[f];
        b.set(f, Array.isArray(F) ? F.join(", ") : String(F ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, yt[f]);
      b.set("title", yt.title), b.set("publicationDate", Kr(yt.publicationDate)), yt.identifiers.forEach((f, F) => {
        b.set(`identifiers[${F}][scheme]`, f.scheme), b.set(`identifiers[${F}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), F = await f.json().catch(() => ({}));
        if (!f.ok || F.saved !== !0) throw new Error(F.error || t("library", "Metadata could not be saved."));
        for (const Ee of ["series", "seriesNumber", "genre"]) _[Ee] = yt[Ee].trim();
        _.title = yt.title.trim(), _.publicationDate = Kr(yt.publicationDate), _.identifiers = yt.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const ue = T.value.find((Ee) => Number(Ee.id) === Number(_.id));
        ue && (ue.title = _.title, ue.publicationDate = _.publicationDate), Bi.saved = !0;
      } catch (f) {
        Bi.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Bi.saving = !1;
      }
    }
    const na = z(() => {
      const _ = l("scannerConflicts", x.scannerConflicts) || l("weakMetadata", x.weakMetadata), b = _ ? T.value.find((f) => $s(f).length > 0) : null;
      return {
        enabled: _,
        item: b,
        fields: b ? $s(b) : [],
        reviewNextUrl: ur.value,
        skipUrl: Q.value.nextUrl || ur.value
      };
    }), Ug = z(() => a.map((_) => ({
      ..._,
      label: t("library", _.label),
      href: `${dt.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String(x[_.key] || "") === _.value
    })));
    function zu(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function $s(_) {
      const b = _.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const F = _.fieldSources || {};
      return Og.filter((ue) => Object.prototype.hasOwnProperty.call(b, ue)).map((ue) => {
        const Ee = zu(_[ue]), ze = zu(b[ue]), Qe = zu(F[ue] || _.metadataSource || "scanner"), _i = Qe.includes("filename") || Qe.includes("path") ? ze : "", Ji = Qe.includes("sidecar") ? ze : "";
        return { field: ue, currentValue: Ee, scannerCandidate: ze, pathTemplateCandidate: _i, sidecarValue: Ji, sourceProvenance: Qe, rejected: f.includes(ue), differs: Ee !== ze };
      }).filter((ue) => ue.differs);
    }
    let Fa = 0, Ma = null;
    function ff() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const b = Number(_[0]);
      return Number.isSafeInteger(b) && b <= pM ? b : null;
    }
    function pf(_, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Wr(_, { historyMode: b = "push", seed: f = null } = {}) {
      Ma?.abort();
      const F = ++Fa, ue = new AbortController();
      Ma = ue, Ra.value = _, Ia.value = "overview", Ae.value = f && Number(f.id) === _ ? cf(f) : null, Ae.value && df(Ae.value), Object.assign(ni, { loading: !0, error: "", missing: !1 }), b !== "none" && pf(_, b);
      try {
        const Ee = Ou.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), ze = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ue.signal });
        if (F !== Fa) return;
        if (!ze.ok) {
          Ae.value = null, ni.missing = ze.status === 404, ni.error = ze.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await ze.json();
        if (F !== Fa) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== _) {
          Ae.value = null, ni.missing = !1, ni.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Ae.value = cf(Qe.item), df(Ae.value), await Rt();
      } catch (Ee) {
        F === Fa && Ee?.name !== "AbortError" && (Ae.value = null, ni.missing = !1, ni.error = t("library", "Could not load publication details. Try again."));
      } finally {
        F === Fa && (ni.loading = !1, Ma = null);
      }
    }
    function Hi(_, b) {
      ju(), Fu = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Wr(Number(_.id), { seed: _ });
    }
    function Yr({ historyMode: _ = "push", restoreFocus: b = !0 } = {}) {
      Ss = b ? Fu : null, Fu = null, Ma?.abort(), Ma = null, Fa += 1, Ra.value = null, Ae.value = null, Ia.value = "overview", Object.assign(ni, { loading: !1, error: "", missing: !1 }), _ !== "none" && pf(null, _);
    }
    function hf() {
      Pa.value ? (La.value?.$refs?.sidebar || La.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : lf.value?.focus();
    }
    function zg() {
      const _ = Ss;
      if (Ss = null, ju(), Mu || !_?.isConnected) return;
      const b = Uu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(b !== Uu || Mu || ia.value || !_.isConnected) && _.focus();
      });
    }
    function ju() {
      Uu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(_ = yn) {
      Pa.value = !!_?.matches, ia.value && Rt(hf);
    }
    function xs(_) {
      _ && Wr(Number(_.id), { seed: _ });
    }
    const Xr = /* @__PURE__ */ G(null);
    let ai = 0, hr = null, vr = null, Jr = null, vf = !1, Qr = null;
    const Dt = /* @__PURE__ */ Nt({ loading: !1, error: "", completed: !1 });
    function jg(_) {
      const b = d(new FormData(_));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Ua(_, b, f) {
      const F = new URLSearchParams();
      for (const [ze, Qe] of Object.entries(x)) {
        const _i = String(Qe || "").trim();
        ze !== _ && _i !== "" && !(ze === "sort" && _i === "title") && !(ze === "view" && _i === "compact") && F.set(ze, _i);
      }
      F.set(`${_}Search`, b);
      const ue = new AbortController();
      _ === "creator" ? me = ue : _ === "publisher" ? Le = ue : _ === "subject" ? $e = ue : _ === "classification" ? it = ue : _ === "tag" ? Ot = ue : _ === "folder" ? B = ue : Ai = ue;
      const Ee = _ === "creator" ? ps.value : _ === "publisher" ? Fr.value : _ === "subject" ? Mr.value : _ === "classification" ? Ur.value : _ === "tag" ? $u.value : _ === "folder" ? hs.value : xu.value;
      try {
        const ze = await fetch(`${Ee}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ue.signal });
        if (!ze.ok) throw new Error(`${_} suggestions request failed: ${ze.status}`);
        const Qe = await ze.json(), _i = _ === "creator" ? De : _ === "publisher" ? Oe : _ === "subject" ? _e : _ === "classification" ? ct : _ === "tag" ? Ui : _ === "folder" ? U : Zi, Ji = _ === "creator" ? Me.value : _ === "publisher" ? J.value : _ === "subject" ? X.value : _ === "classification" ? Ce.value : _ === "tag" ? _t.value : _ === "folder" ? ut.value : Vt.value;
        f === _i && Ji.trim() === b && (_ === "creator" ? pt.value = Array.isArray(Qe.creators) ? Qe.creators : [] : _ === "publisher" ? Y.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : _ === "subject" ? le.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : _ === "classification" ? He.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : _ === "tag" ? ei.value = Array.isArray(Qe.tags) ? Qe.tags : [] : _ === "folder" ? S.value = Array.isArray(Qe.folders) ? Qe.folders : [] : Aa.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (ze) {
        ze?.name !== "AbortError" && (_ === "creator" && f === De && (pt.value = null), _ === "publisher" && f === Oe && (Y.value = null), _ === "subject" && f === _e && (le.value = null), _ === "classification" && f === ct && (He.value = null), _ === "tag" && f === Ui && (ei.value = null), _ === "folder" && f === U && (S.value = null), _ === "year" && f === Zi && (Aa.value = null));
      }
    }
    function Bg(_, b) {
      return Ua("creator", _, b);
    }
    function Hg(_, b) {
      return Ua("publisher", _, b);
    }
    function Vg(_, b) {
      return Ua("subject", _, b);
    }
    function qg(_, b) {
      return Ua("classification", _, b);
    }
    function Gg(_, b) {
      return Ua("tag", _, b);
    }
    function Kg(_, b) {
      return Ua("folder", _, b);
    }
    function Wg(_, b) {
      return Ua("year", _, b);
    }
    async function Yg(_, b) {
      const f = new URLSearchParams();
      for (const [ue, Ee] of Object.entries(x)) {
        const ze = String(Ee || "").trim();
        ue !== "publication" && ze !== "" && !(ue === "sort" && ze === "title") && !(ue === "view" && ze === "compact") && f.set(ue, ze);
      }
      f.set("publicationSearch", _);
      const F = new AbortController();
      L = F;
      try {
        const ue = await fetch(`${Jn.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ue.ok) throw new Error(`Publication suggestions request failed: ${ue.status}`);
        const Ee = await ue.json();
        b === V && H.value.trim() === _ && (ae.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (ue) {
        ue?.name !== "AbortError" && b === V && (ae.value = null);
      } finally {
        b === V && (L = null);
      }
    }
    function Zg(_) {
      k.splice(0, k.length, ...(_.items || []).map((f) => ({ ...f }))), $g();
      const b = new Set(_.facetsDeferred ? [
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
      for (const f of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !b.has(f) && Object.prototype.hasOwnProperty.call(_, f) && (y[f] = _[f]);
      Object.assign(x, Xi, _.activeFilters || {}), x.view = m(x.view);
    }
    async function Xg() {
      if (y.surface !== "index") return;
      const _ = ai, b = JSON.stringify({ ...x }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [ue, Ee] of Object.entries(x)) {
        const ze = String(Ee || "").trim();
        ze !== "" && !(ue === "sort" && ze === "title") && !(ue === "view" && ze === "compact") && f.set(ue, ze);
      }
      const F = new AbortController();
      vr = F;
      try {
        const ue = await fetch(`${or.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ue.ok) return;
        const Ee = await ue.json();
        if (_ !== ai || b !== JSON.stringify({ ...x })) return;
        for (const ze of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, ze) && (y[ze] = Ee[ze]);
      } catch (ue) {
        if (ue?.name !== "AbortError") return;
      } finally {
        vr === F && (vr = null), F.signal.aborted || bf();
      }
    }
    async function bf() {
      if (!Yn.value || vf || Jr) return;
      const _ = new AbortController();
      Jr = _;
      try {
        const b = await fetch(`${or.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: _.signal });
        if (!b.ok || _.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (y.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (y.smartViewCountsPending = f.smartViewCountsPending), vf = !0;
      } catch {
      } finally {
        Jr === _ && (Jr = null);
      }
    }
    function Jg() {
      vr?.abort(), vr = null;
    }
    async function Gt(_, b = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = d(b?.params ?? jg(f));
      if ($a.value || Zn.value) {
        el(F, dt.value);
        return;
      }
      const ue = F.toString(), Ee = ue ? `?${ue}` : "", ze = b?.generation ?? ++ai, Qe = c(F), _i = b?.historyMode ?? (Qe ? "push" : "replace"), Ji = b?.historyTraversal === !0;
      if (ze !== ai) return;
      Jg(), b === null && hr?.abort();
      const br = new AbortController();
      hr = br, Dt.loading = !0, Dt.error = "", Dt.completed = !1;
      try {
        const Qi = await fetch(or.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: br.signal
        });
        if (ze !== ai) return;
        if (!Qi.ok) {
          Ji ? el(F) : Qe ? Dt.error = t("library", "Could not load this review queue. Try again.") : el(F);
          return;
        }
        const mm = await Qi.json();
        if (ze !== ai) return;
        Zg(mm), bf(), Dt.completed = !0, _i !== "none" && (history[_i === "push" ? "pushState" : "replaceState"]({}, "", ue ? `?${ue}` : window.location.pathname), ia.value && Yr({ historyMode: "none" }));
      } catch (Qi) {
        ze === ai && Qi?.name !== "AbortError" && (Ji ? el(F) : Qe ? Dt.error = t("library", "Could not load this review queue. Try again.") : el(F));
      } finally {
        ze === ai && (hr = null, Dt.loading = !1);
      }
    }
    function gf() {
      hr?.abort();
      const _ = new URLSearchParams(window.location.search), b = ff();
      _.has("item") && b === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), _.delete("item"), Gt(null, {
        params: d(_),
        generation: ++ai,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function el(_, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [F, ue] of _.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = F, Ee.value = ue, f.appendChild(Ee);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function yi(_, b = null, f = null) {
      if (b === null) {
        Gt(_);
        return;
      }
      Gt({ currentTarget: _ }, { params: b, generation: f });
    }
    async function Qg(_, b = H.value) {
      x.publication = String(b || "").trim(), H.value = x.publication, Z.value = !1, await Rt(), Gt({ currentTarget: _ });
    }
    function mf(_, b) {
      Qg(b.currentTarget.form, _);
    }
    async function em(_) {
      x.q = String(K.value || "").trim(), x.publication = String(H.value || "").trim(), x.publisher = String(J.value || "").trim(), x.creator = String(Me.value || "").trim(), x.subject = String(X.value || "").trim(), x.folder = String(ut.value || "").trim(), x.year = String(Vt.value || "").trim(), Z.value = !1, ne.value = !1, Xe.value = !1, te.value = !1, ee.value = !1, vi.value = !1, await Rt(), Gt({ currentTarget: _ });
    }
    async function aa(_, b, f) {
      x[b] = String(f || "").trim(), b === "creator" ? (Me.value = x.creator, Xe.value = !1) : b === "publisher" ? (J.value = x.publisher, ne.value = !1) : b === "subject" ? (X.value = x.subject, te.value = !1) : b === "folder" ? (ut.value = x.folder, ee.value = !1) : b === "classification" ? (Ce.value = x.classification, xe.value = !1) : b === "tag" ? (_t.value = x.tag, bt.value = !1) : (Vt.value = x.year, vi.value = !1), _n[b] = -1, await Rt(), Gt({ currentTarget: _ });
    }
    function yf(_) {
      em(_.currentTarget);
    }
    function _f(_, b) {
      aa(b.currentTarget.form, "creator", _);
    }
    function wf(_, b) {
      aa(b.currentTarget.form, "publisher", _);
    }
    function kf(_, b) {
      aa(b.currentTarget.form, "classification", _);
    }
    function Sf(_, b) {
      aa(b.currentTarget.form, "tag", _);
    }
    function Cf(_, b) {
      aa(b.currentTarget.form, "folder", _);
    }
    function Tf(_, b = X.value) {
      window.clearTimeout(se), $e?.abort(), $e = null, aa(_, "subject", b);
    }
    function tm(_) {
      Tf(_.currentTarget.form);
    }
    function Af(_, b) {
      Tf(b.currentTarget.form, _);
    }
    function Ef(_, b) {
      aa(b.currentTarget.form, "year", _);
    }
    const _n = /* @__PURE__ */ Nt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function im(_) {
      return pe.value;
    }
    function Bu(_, b, f) {
      return `library-${_}-${b}-suggestion-${f}`;
    }
    function $f(_, b) {
      const f = _n[b];
      return f >= 0 ? Bu(_, b, f) : void 0;
    }
    function Hu(_, b) {
      ne.value = b, b || (_n[_] = -1);
    }
    function xf(_) {
      _n[_] = -1, Hu(_, !0);
    }
    function nm(_, b, f) {
      aa(f, _, b);
    }
    function Of(_, b) {
      const f = im();
      if (_.key === "Escape") {
        Hu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(_.key) || f.length === 0) return;
      if (_.key === "Enter") {
        const Ee = _n[b];
        if (Ee < 0) return;
        _.preventDefault(), nm(b, f[Ee], _.currentTarget.form);
        return;
      }
      _.preventDefault(), Hu(b, !0);
      const F = _n[b], ue = _.key === "ArrowDown" ? 1 : -1;
      _n[b] = F < 0 ? ue > 0 ? 0 : f.length - 1 : (F + ue + f.length) % f.length;
    }
    function Nf(_) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(x)) {
        const ue = String(F || "").trim();
        ue !== "" && f !== _ && !(f === "sort" && ue === "title") && !(f === "view" && ue === "compact") && b.set(f, ue);
      }
      return b;
    }
    function tl(_) {
      const b = Nf(_).toString();
      return `${dt.value}${b ? `?${b}` : ""}`;
    }
    function il(_) {
      const b = Nf(_);
      x[_] = _ === "sort" ? "title" : _ === "view" ? "compact" : "", Gt(null, {
        params: b,
        generation: ++ai
      });
    }
    function Rf() {
      const _ = new URLSearchParams();
      return x.sort && x.sort !== "title" && _.set("sort", x.sort), x.view && x.view !== "compact" && _.set("view", x.view), _;
    }
    function Os() {
      const _ = Rf().toString();
      return `${dt.value}${_ ? `?${_}` : ""}`;
    }
    function Ns() {
      const _ = Rf();
      for (const b of Object.keys(x))
        ["sort", "view"].includes(b) || (x[b] = Xi[b]);
      Gt(null, {
        params: _,
        generation: ++ai
      }), !$a.value && !Zn.value && Rt(() => {
        ms.value?.focus?.();
      });
    }
    function am(_) {
      const b = new URL(_.href, window.location.origin).searchParams;
      Gt(null, {
        params: b,
        generation: ++ai
      });
    }
    function rm() {
      return tl("q");
    }
    const Vu = z(() => y.smartViewCounts || {}), lm = z(() => new Set(y.smartViewCountsPending || []));
    function sm(_) {
      return lm.value.has(_) || !Object.prototype.hasOwnProperty.call(Vu.value, _) ? "—" : Number(Vu.value[_] || 0);
    }
    const If = z(() => {
      const _ = {};
      for (const [b, f] of Object.entries(x)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (_[b] = F);
      }
      return _;
    }), om = z(() => JSON.stringify(If.value)), qu = z(() => Object.keys(If.value).length > 0);
    function Lf(_) {
      if (!M.includes(_)) return;
      x.view = _;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(g(x))) {
        const ue = String(F || "").trim();
        ue !== "" && !(f === "sort" && ue === "title") && !(f === "view" && ue === "compact") && b.set(f, ue);
      }
      b.delete("page"), Gt(null, {
        params: b,
        generation: ++ai
      });
    }
    function um(_) {
      const b = d(window.location.search);
      for (const F of Object.keys(Br))
        b.delete(F);
      b.delete("page");
      for (const [F, ue] of Object.entries(_)) {
        const Ee = F === "view" ? m(ue) : String(ue || "").trim();
        Ee !== "" && !(F === "view" && Ee === "compact") && b.set(F, Ee);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function cm(_) {
      return um(_ || {});
    }
    function dm(_) {
      const f = Object.entries(_ && typeof _ == "object" ? _ : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, ue]) => String(x[F] ?? "") === String(ue ?? ""));
    }
    function fm(_) {
      return A.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function pm(_) {
      if (!gt.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = fm(_), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = gt.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Rs(_) {
      return String(_ || "").toUpperCase();
    }
    function hm(_) {
      return y.creatorLandingUrls?.[_] || `/apps/library/creators/${encodeURIComponent(_)}`;
    }
    function Pf(_) {
      const b = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Df(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function vm(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || Df(_.target) || (_.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function bm(_) {
      _.key !== "Escape" || document.activeElement !== Xr.value || x.q === "" || (_.preventDefault(), K.value = "", x.q = "", await Rt(), yi({ currentTarget: Xr.value }));
    }
    function gm(_) {
      if (!ia.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Yr(), !0;
      if (_.key === "Tab" && Pa.value) {
        if (La.value?.focusTrap) return !1;
        const b = La.value?.$refs?.sidebar || La.value?.$el || La.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const F = f[0], ue = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === F || !b.contains(document.activeElement)))
          return _.preventDefault(), ue.focus(), !0;
        if (!_.shiftKey && (document.activeElement === ue || !b.contains(document.activeElement)))
          return _.preventDefault(), F.focus(), !0;
      }
      return Df(_.target) ? !1 : _.key === "ArrowLeft" && Cs.value ? (_.preventDefault(), xs(Cs.value), !0) : _.key === "ArrowRight" && Ts.value ? (_.preventDefault(), xs(Ts.value), !0) : !1;
    }
    function Ff(_) {
      document.querySelector("dialog[open]") || gm(_) || (vm(_), bm(_));
    }
    xt(() => {
      if (hn.value || xa.value || Xn.value || pn.value) return;
      window.addEventListener("keydown", Ff), window.addEventListener("popstate", gf), yn = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), yn?.addEventListener ? yn.addEventListener("change", Zr) : yn?.addListener?.(Zr);
      const _ = new URLSearchParams(window.location.search), b = ff();
      _.has("item") && b === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, Xg();
      });
    }), Ti(() => {
      Mu = !0, ju(), window.removeEventListener("keydown", Ff), window.removeEventListener("popstate", gf), window.clearTimeout(q), window.clearTimeout(Re), window.clearTimeout(se), window.clearTimeout(Ea), L?.abort(), me?.abort(), $e?.abort(), Ai?.abort(), ai += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, vr?.abort(), Jr?.abort(), hr?.abort(), hr = null, Fa += 1, Ma?.abort(), Ma = null, yn?.removeEventListener ? yn.removeEventListener("change", Zr) : yn?.removeListener?.(Zr), yn = null, Ss = null;
    });
    const nl = /* @__PURE__ */ Nt({}), al = /* @__PURE__ */ Nt({});
    async function Mf(_, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !_?.starUrl || nl[_.id]) return;
      const F = !!_.starred;
      nl[_.id] = !0, al[_.id] = "", _.starred = !F;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = F, al[_.id] = t("library", "Could not update star. Try again."));
      } catch {
        _.starred = F, al[_.id] = t("library", "Could not update star. Try again.");
      } finally {
        nl[_.id] = !1;
      }
    }
    return (_, b) => (p(), Pe(u(sT), { "app-name": "library" }, {
      default: we(() => [
        de(u(Bw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: we(() => [
            de(u(Rb), null, {
              default: we(() => [
                (p(!0), h(W, null, he(fs.value, (f) => (p(), Pe(u(Tn), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (p(!0), h(W, null, he(Pr.value, (f) => (p(), h("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  de(u(Tn), {
                    class: "library-navigation-saved-collection",
                    active: f.active,
                    href: f.href,
                    name: f.name
                  }, null, 8, ["active", "href", "name"]),
                  s("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    title: `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    onClick: ke((F) => pm(f.id), ["stop", "prevent"])
                  }, "✕", 8, a4)
                ]))), 128)),
                de(u(Tn), {
                  active: hn.value,
                  href: `${dt.value}?authors=1`,
                  name: u(t)("library", "Authors")
                }, null, 8, ["active", "href", "name"]),
                de(u(Tn), {
                  active: xa.value,
                  href: Ei.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                de(u(Tn), {
                  class: "library-navigation-create-list",
                  href: `${Ei.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (p(!0), h(W, null, he(ds.value, (f) => (p(), Pe(u(Tn), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Ei.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                de(u(Tn), {
                  active: Xn.value,
                  href: `${dt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                de(u(Tn), {
                  active: Yn.value,
                  href: fn.value,
                  name: lr.value > 0 ? `${u(t)("library", "Review")} (${lr.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                de(u(Tn), {
                  class: "library-navigation-personal-list",
                  active: pn.value,
                  href: `${dt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: we(() => [
            !hn.value && !xa.value && !Xn.value && !pn.value ? (p(), h("section", r4, [
              s("h2", l4, o(u(t)("library", "Filters")), 1),
              s("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: ke(yf, ["prevent"])
              }, [
                s("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, o4),
                (p(!0), h(W, null, he(tf.value, (f) => (p(), h("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, u4))), 128)),
                x.sort && x.sort !== "title" ? (p(), h("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, c4)) : E("", !0),
                x.view && x.view !== "compact" ? (p(), h("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, d4)) : E("", !0),
                s("fieldset", f4, [
                  s("legend", null, o(u(t)("library", "Content")), 1),
                  s("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    s("span", null, [
                      ie(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = s("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    ge(s("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => K.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, h4), [
                      [je, K.value]
                    ]),
                    mi("q") ? (p(), h("small", v4, o(ji("q")), 1)) : E("", !0)
                  ], 8, p4),
                  s("label", null, [
                    ie(o(u(t)("library", "Type")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => x.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => yi(f))
                    }, [
                      s("option", b4, o(u(t)("library", "All types")), 1),
                      (p(!0), h(W, null, he(N.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, g4))), 128))
                    ], 544), [
                      [rt, x.type]
                    ])
                  ]),
                  s("div", m4, [
                    s("label", y4, o(u(t)("library", "Publisher")), 1),
                    ge(s("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": b[3] || (b[3] = (f) => J.value = f),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": $f("desktop", "publisher"),
                      "aria-expanded": ne.value && pe.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => xf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => Of(f, "publisher"))
                    }, null, 40, _4), [
                      [je, J.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, w4),
                    mi("publisher") ? (p(), h("small", k4, o(ji("publisher")), 1)) : E("", !0),
                    ne.value && pe.value.length > 0 ? (p(), h("ul", S4, [
                      (p(!0), h(W, null, he(pe.value, (f, F) => (p(), h("li", {
                        id: Bu("desktop", "publisher", F),
                        key: f,
                        role: "option",
                        "aria-selected": _n.publisher === F ? "true" : "false"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = ke(() => {
                          }, ["prevent"])),
                          onClick: (ue) => wf(f, ue)
                        }, o(f), 41, T4)
                      ], 8, C4))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-publisher-apply", mn("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  s("div", A4, [
                    s("label", E4, o(u(t)("library", "Series / periodical")), 1),
                    ge(s("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => H.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && j.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => Z.value = !0),
                      onKeydown: b[9] || (b[9] = ft((f) => Z.value = !1, ["escape"]))
                    }, null, 40, $4), [
                      [je, H.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, x4),
                    mi("publication") ? (p(), h("small", O4, o(ji("publication")), 1)) : E("", !0),
                    Z.value && j.value.length > 0 ? (p(), h("ul", N4, [
                      (p(!0), h(W, null, he(j.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => mf(f, F)
                        }, o(f), 41, R4)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-publication-apply", mn("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  s("div", I4, [
                    s("label", L4, o(u(t)("library", "Publication year")), 1),
                    ge(s("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => Vt.value = f),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": vi.value && Yi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => vi.value = !0),
                      onKeydown: b[13] || (b[13] = ft((f) => vi.value = !1, ["escape"]))
                    }, null, 40, P4), [
                      [je, Vt.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, D4),
                    mi("year") ? (p(), h("small", F4, o(ji("year")), 1)) : E("", !0),
                    vi.value && Yi.value.length > 0 ? (p(), h("ul", M4, [
                      (p(!0), h(W, null, he(Yi.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => Ef(f, F)
                        }, o(f), 41, U4)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-year-apply", mn("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  s("div", z4, [
                    s("label", j4, o(u(t)("library", "Creator")), 1),
                    ge(s("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": b[15] || (b[15] = (f) => Me.value = f),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Xe.value && ye.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Xe.value = !0),
                      onKeydown: b[17] || (b[17] = ft((f) => Xe.value = !1, ["escape"]))
                    }, null, 40, B4), [
                      [je, Me.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, H4),
                    mi("creator") ? (p(), h("small", V4, o(ji("creator")), 1)) : E("", !0),
                    Xe.value && ye.value.length > 0 ? (p(), h("ul", q4, [
                      (p(!0), h(W, null, he(ye.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => _f(f, F)
                        }, o(f), 41, G4)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-creator-apply", mn("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  s("div", K4, [
                    s("label", W4, o(u(t)("library", "Nextcloud tag")), 1),
                    ge(s("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => _t.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": bt.value && hi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => bt.value = !0),
                      onKeydown: b[21] || (b[21] = ft((f) => bt.value = !1, ["escape"]))
                    }, null, 40, Y4), [
                      [je, _t.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, Z4),
                    bt.value && hi.value.length > 0 ? (p(), h("ul", X4, [
                      (p(!0), h(W, null, he(hi.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => Sf(f, F)
                        }, o(f), 41, J4)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-tag-apply", mn("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  s("label", null, [
                    ie(o(u(t)("library", "Format")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => x.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => yi(f))
                    }, [
                      s("option", Q4, o(u(t)("library", "All formats")), 1),
                      (p(!0), h(W, null, he($.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(Rs(f)), 9, eN))), 128))
                    ], 544), [
                      [rt, x.format]
                    ])
                  ])
                ]),
                s("fieldset", tN, [
                  s("legend", null, o(u(t)("library", "Location")), 1),
                  s("label", null, [
                    ie(o(u(t)("library", "Shelf")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => x.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => yi(f))
                    }, [
                      s("option", iN, o(u(t)("library", "All shelves")), 1),
                      (p(!0), h(W, null, he(C.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, nN))), 128))
                    ], 544), [
                      [rt, x.shelf]
                    ])
                  ]),
                  s("div", aN, [
                    s("label", rN, o(u(t)("library", "Folder")), 1),
                    ge(s("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => ut.value = f),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Type at least 3 path characters"),
                      title: u(t)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ee.value && O.value.length > 0 ? "true" : "false",
                      onFocus: b[28] || (b[28] = (f) => ee.value = !0),
                      onKeydown: b[29] || (b[29] = ft((f) => ee.value = !1, ["escape"]))
                    }, null, 40, lN), [
                      [je, ut.value]
                    ]),
                    ee.value && O.value.length > 0 ? (p(), h("ul", sN, [
                      (p(!0), h(W, null, he(O.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => Cf(f, F)
                        }, o(f), 41, oN)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-folder-apply", mn("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                s("fieldset", uN, [
                  s("legend", null, o(u(t)("library", "Review")), 1),
                  s("label", null, [
                    ie(o(u(t)("library", "Scan status")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => x.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => yi(f))
                    }, [
                      s("option", cN, o(u(t)("library", "All scan statuses")), 1),
                      (p(!0), h(W, null, he(I.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, dN))), 128))
                    ], 544), [
                      [rt, x.status]
                    ])
                  ]),
                  s("label", null, [
                    ie(o(u(t)("library", "Workflow status")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => x.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => yi(f))
                    }, [
                      s("option", fN, o(u(t)("library", "All workflow statuses")), 1),
                      (p(!0), h(W, null, he(ve.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, pN))), 128))
                    ], 544), [
                      [rt, x.workflowStatus]
                    ])
                  ]),
                  s("div", hN, [
                    s("label", vN, o(u(t)("library", "Subject")), 1),
                    ge(s("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": b[35] || (b[35] = (f) => X.value = f),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search subjects"),
                      title: u(t)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": te.value && fe.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => te.value = !0),
                      onKeydown: b[37] || (b[37] = ft((f) => te.value = !1, ["escape"]))
                    }, null, 40, bN), [
                      [je, X.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, gN),
                    mi("subject") ? (p(), h("small", mN, o(ji("subject")), 1)) : E("", !0),
                    te.value && fe.value.length > 0 ? (p(), h("ul", yN, [
                      (p(!0), h(W, null, he(fe.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => Af(f, F)
                        }, o(f), 41, _N)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "button",
                      class: Te(["button secondary library-subject-apply", mn("subject")]),
                      onClick: tm
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  s("div", wN, [
                    s("label", kN, o(u(t)("library", "Classification")), 1),
                    ge(s("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (f) => Ce.value = f),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": xe.value && We.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => xe.value = !0),
                      onKeydown: b[41] || (b[41] = ft((f) => xe.value = !1, ["escape"]))
                    }, null, 40, SN), [
                      [je, Ce.value]
                    ]),
                    s("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, CN),
                    xe.value && We.value.length > 0 ? (p(), h("ul", TN, [
                      (p(!0), h(W, null, he(We.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = ke(() => {
                          }, ["prevent"])),
                          onClick: (F) => kf(f, F)
                        }, o(f), 41, AN)
                      ]))), 128))
                    ])) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: Te(["button secondary library-classification-apply", mn("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  s("label", null, [
                    ie(o(u(t)("library", "Suggested updates")), 1),
                    ge(s("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => x.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => yi(f))
                    }, [
                      s("option", EN, o(u(t)("library", "All metadata")), 1),
                      s("option", $N, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [rt, x.scannerConflicts]
                    ])
                  ])
                ]),
                s("fieldset", xN, [
                  s("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                s("button", ON, o(u(t)("library", "Apply filters")), 1)
              ], 40, s4)
            ])) : E("", !0),
            s("a", {
              class: "library-navigation-settings-link",
              href: Wn.value
            }, [
              b[113] || (b[113] = s("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              s("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, NN)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        de(u(aw), null, {
          default: we(() => [
            s("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: y.language || "en",
              dir: y.direction || "ltr",
              tabindex: "-1"
            }, [
              pn.value ? (p(), Pe(J$, {
                key: 0,
                "request-token": gt.value,
                "review-url": fn.value
              }, null, 8, ["request-token", "review-url"])) : Xn.value ? (p(), Pe(n4, {
                key: 1,
                "request-token": gt.value
              }, null, 8, ["request-token"])) : hn.value ? (p(), Pe(SE, {
                key: 2,
                "request-token": gt.value,
                "catalogue-url": dt.value
              }, null, 8, ["request-token", "catalogue-url"])) : xa.value ? (p(), Pe(zA, {
                key: 3,
                onChanged: vn,
                "request-token": gt.value,
                "catalogue-url": dt.value,
                "lists-url": Ei.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (p(), h(W, { key: 4 }, [
                mt.value.length > 0 ? (p(), h("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  s("span", null, o(u(t)("library", "Active filters")), 1),
                  (p(!0), h(W, null, he(mt.value, (f) => (p(), h("a", {
                    key: f.key,
                    href: tl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: ke((F) => il(f.key), ["prevent"])
                  }, [
                    s("strong", null, [
                      ie(o(f.label), 1),
                      f.displayValue ? (p(), h(W, { key: 0 }, [
                        ie(":")
                      ], 64)) : E("", !0)
                    ]),
                    f.displayValue ? (p(), h(W, { key: 0 }, [
                      b[114] || (b[114] = ie(o(" "), -1)),
                      s("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, PN)
                    ], 64)) : E("", !0),
                    b[115] || (b[115] = ie()),
                    b[116] || (b[116] = s("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, LN))), 128)),
                  Ct.value.length > 0 ? (p(), h("a", {
                    key: 0,
                    href: Os(),
                    class: "library-active-filter-clear-all",
                    onClick: ke(Ns, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, DN)) : E("", !0)
                ], 8, IN)) : E("", !0),
                Yn.value ? (p(), h("section", FN, [
                  s("header", MN, [
                    s("p", UN, o(u(t)("library", "Metadata cleanup")), 1),
                    s("h2", zN, o(u(t)("library", "Review")), 1),
                    de(Ye, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: we(() => [
                        ie(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  s("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (p(!0), h(W, null, he(Ug.value, (f) => (p(), h("a", {
                      key: f.key,
                      class: Te(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: ke((F) => am(f), ["prevent"])
                    }, [
                      s("span", null, o(f.label), 1),
                      s("b", null, o(sm(f.countKey)), 1)
                    ], 10, BN))), 128))
                  ], 8, jN),
                  s("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: ke(Gt, ["prevent"])
                  }, [
                    (p(!0), h(W, null, he(Ag.value, (f) => (p(), h("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, VN))), 128)),
                    s("label", null, [
                      ie(o(u(t)("library", "Search within this queue")), 1),
                      ge(s("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => x.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [je, x.q]
                      ])
                    ]),
                    s("button", qN, o(u(t)("library", "Apply")), 1)
                  ], 40, HN),
                  s("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Dt.loading ? "true" : "false"
                  }, [
                    Dt.loading ? (p(), h("span", KN, o(u(t)("library", "Loading review queue…")), 1)) : E("", !0)
                  ], 8, GN),
                  Dt.error ? (p(), h("p", WN, o(Dt.error), 1)) : E("", !0),
                  na.value.enabled ? (p(), h("section", YN, [
                    s("div", ZN, [
                      s("p", XN, o(u(t)("library", "Metadata review workbench")), 1),
                      s("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, JN)
                    ]),
                    na.value.item ? (p(), h("article", QN, [
                      s("header", null, [
                        s("strong", null, [
                          s("bdi", eR, o(na.value.item.title), 1)
                        ]),
                        s("span", tR, [
                          s("bdi", iR, o(na.value.item.cachedPath), 1)
                        ])
                      ]),
                      s("div", nR, [
                        (p(!0), h(W, null, he(na.value.fields, (f) => (p(), h("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          s("h4", null, [
                            s("bdi", aR, o(f.field), 1)
                          ]),
                          s("dl", null, [
                            s("div", null, [
                              s("dt", null, o(u(t)("library", "Current value")), 1),
                              s("dd", null, [
                                s("bdi", rR, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            s("div", null, [
                              s("dt", null, o(u(t)("library", "Suggested value")), 1),
                              s("dd", null, [
                                s("bdi", lR, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            s("div", null, [
                              s("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              s("dd", null, [
                                s("bdi", sR, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            s("div", null, [
                              s("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              s("dd", null, [
                                s("bdi", oR, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            s("div", null, [
                              s("dt", null, o(u(t)("library", "Source")), 1),
                              s("dd", null, [
                                s("bdi", uR, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          s("form", {
                            method: "post",
                            action: na.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            s("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: gt.value
                            }, null, 8, dR),
                            s("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, fR),
                            b[117] || (b[117] = s("input", {
                              type: "hidden",
                              name: "returnTo",
                              value: "catalogue"
                            }, null, -1)),
                            s("button", {
                              type: "submit",
                              class: "button secondary",
                              disabled: f.rejected,
                              title: f.rejected ? u(t)("library", "This source value exceeds field limits. Edit the field instead.") : void 0
                            }, o(u(t)("library", "Use suggested value")), 9, pR)
                          ], 8, cR)
                        ]))), 128))
                      ]),
                      s("footer", hR, [
                        s("a", {
                          class: "button secondary",
                          href: na.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, vR),
                        s("a", {
                          class: "button secondary",
                          href: na.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, bR)
                      ])
                    ])) : E("", !0)
                  ])) : E("", !0),
                  T.value.length === 0 && !Dt.loading && !Dt.error ? (p(), h("div", gR, [
                    s("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    s("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    s("a", {
                      class: "button primary",
                      href: dt.value
                    }, o(u(t)("library", "Back to Library")), 9, mR)
                  ])) : (p(), h("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (p(!0), h(W, null, he(T.value, (f) => (p(), h("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      s("div", null, [
                        s("h3", null, [
                          s("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (F) => Hi(f, F)
                          }, [
                            s("bdi", wR, o(f.title), 1)
                          ], 8, _R)
                        ]),
                        f.creators ? (p(), h("p", kR, [
                          s("bdi", SR, o(f.creators), 1)
                        ])) : E("", !0),
                        f.scanError ? (p(), h("p", CR, [
                          s("bdi", TR, o(f.scanError), 1)
                        ])) : E("", !0)
                      ]),
                      s("p", null, [
                        s("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => Hi(f, F)
                        }, o(u(t)("library", "Details")), 9, AR),
                        s("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => ti(f, F)
                        }, o(u(t)("library", "Open")), 9, ER)
                      ])
                    ]))), 128))
                  ], 8, yR)),
                  T.value.length > 0 ? (p(), h("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (p(), h("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, xR)) : (p(), h("span", OR, o(u(t)("library", "Previous")), 1)),
                    s("span", null, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (p(), h("span", NR, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.nextUrl ? (p(), h("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, RR)) : (p(), h("span", IR, o(u(t)("library", "Next")), 1))
                  ], 8, $R)) : E("", !0)
                ])) : $a.value ? (p(), h("main", LR, [
                  s("header", PR, [
                    s("p", DR, o(u(t)("library", "Your library")), 1),
                    s("h2", FR, o(u(t)("library", "Home")), 1)
                  ]),
                  Ct.value.length > 0 ? (p(), h("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    s("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    s("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), h(W, null, he(Ct.value, (f) => (p(), h("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: ke((F) => il(f.key), ["prevent"])
                      }, [
                        s("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (p(), h(W, { key: 0 }, [
                          b[118] || (b[118] = ie(o(" "), -1)),
                          s("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, jR)
                        ], 64)) : E("", !0),
                        b[119] || (b[119] = ie()),
                        b[120] || (b[120] = s("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, zR))), 128))
                    ], 8, UR),
                    s("p", BR, [
                      s("a", {
                        class: "button primary library-filter-callout-view",
                        href: Pt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, HR),
                      s("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: ke(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, VR)
                    ])
                  ], 8, MR)) : E("", !0),
                  s("section", qR, [
                    s("header", null, [
                      s("div", null, [
                        s("h3", GR, [
                          de(Ye, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      s("a", {
                        href: `${dt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, KR)
                    ]),
                    ws.value.continueReading.length ? (p(), h("div", WR, [
                      (p(!0), h(W, null, he(ws.value.continueReading, (f) => (p(), h("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          s("span", ZR, [
                            s("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, XR)
                          ])
                        ], 8, YR),
                        s("div", JR, [
                          s("h4", null, [
                            s("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              s("bdi", eI, o(f.title), 1)
                            ], 8, QR)
                          ]),
                          f.creators ? (p(), h("p", tI, [
                            s("bdi", iI, o(f.creators), 1)
                          ])) : E("", !0),
                          s("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ti(f, F)
                          }, o(u(t)("library", "Open")), 9, nI)
                        ])
                      ]))), 128))
                    ])) : (p(), h("p", aI, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  s("section", rI, [
                    s("header", null, [
                      s("div", null, [
                        s("h3", lI, [
                          de(Ye, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      s("a", {
                        href: `${dt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, sI)
                    ]),
                    ws.value.recentlyAdded.length ? (p(), h("div", oI, [
                      (p(!0), h(W, null, he(ws.value.recentlyAdded, (f) => (p(), h("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        s("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Hi(f, F)
                        }, [
                          s("span", cI, [
                            s("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, dI)
                          ])
                        ], 8, uI),
                        s("div", fI, [
                          s("h4", null, [
                            s("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              s("bdi", hI, o(f.title), 1)
                            ], 8, pI)
                          ]),
                          f.creators ? (p(), h("p", vI, [
                            s("bdi", bI, o(f.creators), 1)
                          ])) : E("", !0),
                          s("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => ti(f, F)
                          }, o(u(t)("library", "Open")), 9, gI)
                        ])
                      ]))), 128))
                    ])) : (p(), h("p", mI, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  s("section", yI, [
                    s("header", null, [
                      s("div", null, [
                        s("h3", _I, [
                          de(Ye, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      s("a", { href: bi.value }, o(u(t)("library", "View all")), 9, wI)
                    ]),
                    nf.value.length ? (p(), h("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (p(!0), h(W, null, he(nf.value, (f) => (p(), h("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        s("strong", null, [
                          s("bdi", CI, o(f.shelf), 1)
                        ]),
                        s("span", null, o(u(fi)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, SI))), 128))
                    ], 8, kI)) : (p(), h("p", TI, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Du.value.count || 0) > 0 ? (p(), h("aside", AI, [
                    s("div", null, [
                      s("h3", EI, o(u(t)("library", "Needs attention")), 1),
                      s("p", $I, o(u(fi)("library", "%n publication needs better details.", "%n publications need better details.", Number(Du.value.count || 0))), 1)
                    ]),
                    s("a", {
                      class: "button tertiary",
                      href: Du.value.url
                    }, o(u(t)("library", "Review")), 9, xI)
                  ])) : E("", !0)
                ])) : Zn.value ? (p(), h("main", OI, [
                  s("header", NI, [
                    s("p", RI, o(u(t)("library", "Your library")), 1),
                    s("h2", II, [
                      de(Ye, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  Ct.value.length > 0 ? (p(), h("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    s("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    s("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), h(W, null, he(Ct.value, (f) => (p(), h("a", {
                        key: `callout-${f.key}`,
                        href: tl(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: ke((F) => il(f.key), ["prevent"])
                      }, [
                        s("strong", null, [
                          ie(o(f.label), 1),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            ie(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (p(), h(W, { key: 0 }, [
                          b[121] || (b[121] = ie(o(" "), -1)),
                          s("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, FI)
                        ], 64)) : E("", !0),
                        b[122] || (b[122] = ie()),
                        b[123] || (b[123] = s("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, DI))), 128))
                    ], 8, PI),
                    s("p", MI, [
                      s("a", {
                        class: "button primary library-filter-callout-view",
                        href: Pt.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, UI),
                      s("a", {
                        class: "button secondary",
                        href: Os(),
                        onClick: ke(Ns, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, zI)
                    ])
                  ], 8, LI)) : E("", !0),
                  af.value.length ? (p(), h("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    s("ul", BI, [
                      (p(!0), h(W, null, he(af.value, (f) => (p(), Pe(yT, {
                        key: f.id,
                        node: f,
                        "children-url": Dr.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, jI)) : (p(), h("section", HI, [
                    s("h3", null, [
                      de(Ye, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    s("p", VI, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    s("p", qI, [
                      s("a", {
                        class: "button primary",
                        href: Wn.value
                      }, o(u(t)("library", "Add a Library root")), 9, GI),
                      s("a", {
                        class: "button secondary",
                        href: dt.value
                      }, o(u(t)("library", "All publications")), 9, KI)
                    ])
                  ]))
                ])) : (p(), h("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Te(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Dt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Dt.loading ? "true" : "false"
                }, [
                  s("header", YI, [
                    ea.value ? (p(), h("p", ZI, o(ui.value), 1)) : E("", !0),
                    s("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: ms,
                      tabindex: "-1"
                    }, o(Na.value), 513)
                  ]),
                  s("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: Sg
                  }, [
                    s("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": wg.value
                    }, [
                      s("span", JI, o(u(fi)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      s("strong", null, o(_g.value), 1)
                    ], 8, XI),
                    s("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: ke(yf, ["prevent"])
                    }, [
                      s("input", {
                        type: "hidden",
                        name: "folder",
                        value: x.folder
                      }, null, 8, eL),
                      (p(!0), h(W, null, he(tf.value, (f) => (p(), h("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, tL))), 128)),
                      s("fieldset", iL, [
                        s("legend", null, o(u(t)("library", "Content")), 1),
                        s("label", nL, [
                          s("span", null, o(u(t)("library", "Search")), 1),
                          ge(s("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: jr,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => K.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, aL), [
                            [je, K.value]
                          ])
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "Type")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => x.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => yi(f))
                          }, [
                            s("option", rL, o(u(t)("library", "All types")), 1),
                            (p(!0), h(W, null, he(N.value, (f) => (p(), h("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, lL))), 128))
                          ], 544), [
                            [rt, x.type]
                          ])
                        ]),
                        s("div", sL, [
                          s("label", oL, o(u(t)("library", "Publisher")), 1),
                          ge(s("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": b[49] || (b[49] = (f) => J.value = f),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": $f("mobile", "publisher"),
                            "aria-expanded": ne.value && pe.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => xf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => Of(f, "publisher"))
                          }, null, 40, uL), [
                            [je, J.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "publisher",
                            value: x.publisher
                          }, null, 8, cL),
                          mi("publisher") ? (p(), h("small", dL, o(ji("publisher")), 1)) : E("", !0),
                          gi.value && ne.value && pe.value.length > 0 ? (p(), h("ul", fL, [
                            (p(!0), h(W, null, he(pe.value, (f, F) => (p(), h("li", {
                              id: Bu("mobile", "publisher", F),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": _n.publisher === F ? "true" : "false"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = ke(() => {
                                }, ["prevent"])),
                                onClick: (ue) => wf(f, ue)
                              }, o(f), 41, hL)
                            ], 8, pL))), 128))
                          ])) : E("", !0)
                        ]),
                        s("div", vL, [
                          s("label", bL, o(u(t)("library", "Series / periodical")), 1),
                          ge(s("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => H.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Z.value && j.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => Z.value = !0),
                            onKeydown: b[55] || (b[55] = ft((f) => Z.value = !1, ["escape"]))
                          }, null, 40, gL), [
                            [je, H.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "publication",
                            value: x.publication
                          }, null, 8, mL),
                          mi("publication") ? (p(), h("small", yL, o(ji("publication")), 1)) : E("", !0),
                          gi.value && Z.value && j.value.length > 0 ? (p(), h("ul", _L, [
                            (p(!0), h(W, null, he(j.value, (f) => (p(), h("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => mf(f, F)
                              }, o(f), 41, wL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        s("div", kL, [
                          s("label", SL, o(u(t)("library", "Publication year")), 1),
                          ge(s("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => Vt.value = f),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": vi.value && Yi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => vi.value = !0),
                            onKeydown: b[59] || (b[59] = ft((f) => vi.value = !1, ["escape"]))
                          }, null, 40, CL), [
                            [je, Vt.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "year",
                            value: x.year
                          }, null, 8, TL),
                          mi("year") ? (p(), h("small", AL, o(ji("year")), 1)) : E("", !0),
                          gi.value && vi.value && Yi.value.length > 0 ? (p(), h("ul", EL, [
                            (p(!0), h(W, null, he(Yi.value, (f) => (p(), h("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => Ef(f, F)
                              }, o(f), 41, $L)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        s("div", xL, [
                          s("label", OL, o(u(t)("library", "Creator")), 1),
                          ge(s("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": b[61] || (b[61] = (f) => Me.value = f),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Xe.value && ye.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Xe.value = !0),
                            onKeydown: b[63] || (b[63] = ft((f) => Xe.value = !1, ["escape"]))
                          }, null, 40, NL), [
                            [je, Me.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "creator",
                            value: x.creator
                          }, null, 8, RL),
                          mi("creator") ? (p(), h("small", IL, o(ji("creator")), 1)) : E("", !0),
                          gi.value && Xe.value && ye.value.length > 0 ? (p(), h("ul", LL, [
                            (p(!0), h(W, null, he(ye.value, (f) => (p(), h("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => _f(f, F)
                              }, o(f), 41, PL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "Format")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => x.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => yi(f))
                          }, [
                            s("option", DL, o(u(t)("library", "All formats")), 1),
                            (p(!0), h(W, null, he($.value, (f) => (p(), h("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Rs(f)), 9, FL))), 128))
                          ], 544), [
                            [rt, x.format]
                          ])
                        ]),
                        s("div", ML, [
                          s("label", UL, o(u(t)("library", "Subject")), 1),
                          ge(s("input", {
                            id: "library-mobile-subject-search",
                            "onUpdate:modelValue": b[67] || (b[67] = (f) => X.value = f),
                            type: "search",
                            name: "subjectSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search subjects"),
                            title: u(t)("library", "Exact subject matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-subject-suggestions",
                            "aria-expanded": te.value && fe.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => te.value = !0),
                            onKeydown: b[69] || (b[69] = ft((f) => te.value = !1, ["escape"]))
                          }, null, 40, zL), [
                            [je, X.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "subject",
                            value: x.subject
                          }, null, 8, jL),
                          mi("subject") ? (p(), h("small", BL, o(ji("subject")), 1)) : E("", !0),
                          gi.value && te.value && fe.value.length > 0 ? (p(), h("ul", HL, [
                            (p(!0), h(W, null, he(fe.value, (f) => (p(), h("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => Af(f, F)
                              }, o(f), 41, VL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        s("div", qL, [
                          s("label", GL, o(u(t)("library", "Classification")), 1),
                          ge(s("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (f) => Ce.value = f),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": xe.value && We.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => xe.value = !0),
                            onKeydown: b[73] || (b[73] = ft((f) => xe.value = !1, ["escape"]))
                          }, null, 40, KL), [
                            [je, Ce.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "classification",
                            value: x.classification
                          }, null, 8, WL),
                          gi.value && xe.value && We.value.length > 0 ? (p(), h("ul", YL, [
                            (p(!0), h(W, null, he(We.value, (f) => (p(), h("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => kf(f, F)
                              }, o(f), 41, ZL)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      s("fieldset", XL, [
                        s("legend", null, o(u(t)("library", "Location")), 1),
                        s("label", null, [
                          ie(o(u(t)("library", "Shelf")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => x.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => yi(f))
                          }, [
                            s("option", JL, o(u(t)("library", "All shelves")), 1),
                            (p(!0), h(W, null, he(C.value, (f) => (p(), h("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, QL))), 128))
                          ], 544), [
                            [rt, x.shelf]
                          ])
                        ]),
                        s("div", eP, [
                          s("label", tP, o(u(t)("library", "Folder")), 1),
                          ge(s("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => ut.value = f),
                            type: "search",
                            name: "folderSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Type at least 3 path characters"),
                            title: u(t)("library", "Select an exact folder path"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-folder-suggestions",
                            "aria-expanded": ee.value && O.value.length > 0 ? "true" : "false",
                            onFocus: b[78] || (b[78] = (f) => ee.value = !0),
                            onKeydown: b[79] || (b[79] = ft((f) => ee.value = !1, ["escape"]))
                          }, null, 40, iP), [
                            [je, ut.value]
                          ]),
                          gi.value && ee.value && O.value.length > 0 ? (p(), h("ul", nP, [
                            (p(!0), h(W, null, he(O.value, (f) => (p(), h("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => Cf(f, F)
                              }, o(f), 41, aP)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      s("fieldset", rP, [
                        s("legend", null, o(u(t)("library", "Review")), 1),
                        s("label", null, [
                          ie(o(u(t)("library", "Scan status")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => x.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => yi(f))
                          }, [
                            s("option", lP, o(u(t)("library", "All scan statuses")), 1),
                            (p(!0), h(W, null, he(I.value, (f) => (p(), h("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, sP))), 128))
                          ], 544), [
                            [rt, x.status]
                          ])
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "Workflow status")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => x.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => yi(f))
                          }, [
                            s("option", oP, o(u(t)("library", "All workflow statuses")), 1),
                            (p(!0), h(W, null, he(ve.value, (f) => (p(), h("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, uP))), 128))
                          ], 544), [
                            [rt, x.workflowStatus]
                          ])
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "Suggested updates")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => x.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => yi(f))
                          }, [
                            s("option", cP, o(u(t)("library", "All metadata")), 1),
                            s("option", dP, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [rt, x.scannerConflicts]
                          ])
                        ])
                      ]),
                      s("fieldset", fP, [
                        s("legend", null, o(u(t)("library", "Personal / display")), 1),
                        s("div", pP, [
                          s("label", hP, o(u(t)("library", "Nextcloud tag")), 1),
                          ge(s("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => _t.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": bt.value && hi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => bt.value = !0),
                            onKeydown: b[89] || (b[89] = ft((f) => bt.value = !1, ["escape"]))
                          }, null, 40, vP), [
                            [je, _t.value]
                          ]),
                          s("input", {
                            type: "hidden",
                            name: "tag",
                            value: x.tag
                          }, null, 8, bP),
                          bt.value && hi.value.length > 0 ? (p(), h("ul", gP, [
                            (p(!0), h(W, null, he(hi.value, (f) => (p(), h("li", {
                              key: f,
                              role: "option"
                            }, [
                              s("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = ke(() => {
                                }, ["prevent"])),
                                onClick: (F) => Sf(f, F)
                              }, o(f), 41, mP)
                            ]))), 128))
                          ])) : E("", !0),
                          s("button", {
                            type: "submit",
                            class: Te(["button secondary library-tag-apply", mn("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "Sort")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Gt
                          }, [
                            s("option", yP, o(u(t)("library", "Title")), 1),
                            s("option", _P, o(u(t)("library", "Date added")), 1),
                            s("option", wP, o(u(t)("library", "Publication date")), 1),
                            s("option", kP, o(u(t)("library", "Series")), 1),
                            s("option", SP, o(u(t)("library", "Recently opened")), 1),
                            s("option", CP, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [rt, x.sort]
                          ])
                        ]),
                        s("label", null, [
                          ie(o(u(t)("library", "View")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => x.view = f),
                            name: "view",
                            onChange: Gt
                          }, [
                            s("option", TP, o(u(t)("library", "Compact")), 1),
                            s("option", AP, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [rt, x.view]
                          ])
                        ])
                      ]),
                      s("div", EP, [
                        Ct.value.length > 0 ? (p(), h("a", {
                          key: 0,
                          href: Os(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: ke(Ns, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, $P)) : E("", !0),
                        s("button", xP, o(kg.value), 1)
                      ])
                    ], 40, QI)
                  ], 32),
                  s("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    s("div", NP, [
                      s("section", RP, [
                        s("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, IP),
                        s("form", {
                          method: "post",
                          action: ce.value,
                          class: "library-saved-collection-save-form",
                          title: qu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          s("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: gt.value
                          }, null, 8, PP),
                          s("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: om.value
                          }, null, 8, DP),
                          s("label", null, [
                            s("span", FP, o(u(t)("library", "Collection name")), 1),
                            s("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !qu.value,
                              autocomplete: "off"
                            }, null, 8, MP)
                          ]),
                          s("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !qu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, UP)
                        ], 8, LP)
                      ]),
                      s("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: ke(Gt, ["prevent"])
                      }, [
                        (p(!0), h(W, null, he(Tg.value, (f) => (p(), h("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, jP))), 128)),
                        s("label", BP, [
                          ie(o(u(t)("library", "Sort")), 1),
                          ge(s("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Gt
                          }, [
                            s("option", HP, o(u(t)("library", "Title")), 1),
                            s("option", VP, o(u(t)("library", "Date added")), 1),
                            s("option", qP, o(u(t)("library", "Publication date")), 1),
                            s("option", GP, o(u(t)("library", "Series")), 1),
                            s("option", KP, o(u(t)("library", "Recently opened")), 1),
                            s("option", WP, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [rt, x.sort]
                          ])
                        ]),
                        s("nav", {
                          class: "library-view-mode-toggle",
                          "data-library-control": "view",
                          "aria-label": u(t)("library", "View")
                        }, [
                          s("button", {
                            type: "button",
                            "data-library-view-mode": "compact",
                            class: Te({ active: re.value === "compact" }),
                            "aria-pressed": re.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Lf("compact"))
                          }, o(u(t)("library", "Compact")), 11, ZP),
                          s("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Te({ active: re.value === "list" }),
                            "aria-pressed": re.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Lf("list"))
                          }, o(u(t)("library", "List")), 11, XP)
                        ], 8, YP)
                      ], 40, zP)
                    ])
                  ], 8, OP),
                  pr.value ? (p(), h("p", JP, o(pr.value), 1)) : E("", !0),
                  ta.value ? (p(), h("p", QP, o(ta.value), 1)) : E("", !0),
                  Hr.value ? (p(), h("p", e8, o(Hr.value), 1)) : E("", !0),
                  s("div", t8, [
                    Dt.loading ? (p(), h("span", i8, o(u(t)("library", "Updating catalogue…")), 1)) : Dt.completed ? (p(), h("span", n8, o(u(fi)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : E("", !0)
                  ]),
                  ea.value ? (p(), h("section", a8, [
                    s("p", r8, o(ui.value), 1),
                    s("h3", {
                      id: "library-discovery-heading",
                      title: cr.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : Oa.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(zi.value), 9, l8),
                    s("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      s("span", null, o(u(fi)("library", "%n item", "%n items", Q.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (p(), h("span", o8, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      P.value?.datedCount ? (p(), h("span", u8, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : E("", !0),
                      P.value?.undatedCount > 0 ? (p(), h("span", c8, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : E("", !0)
                    ], 8, s8),
                    Qn.value && P.value ? (p(), h("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      s("strong", null, o(u(t)("library", "Publication contents")), 1),
                      s("span", null, o(u(fi)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (p(), h("span", f8, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      s("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (p(), h("span", p8, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : E("", !0),
                      s("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, d8)) : E("", !0),
                    Qn.value && P.value?.issueGroups?.length ? (p(), h("section", h8, [
                      s("div", null, [
                        s("p", v8, o(u(t)("library", "Issue order")), 1),
                        s("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, b8)
                      ]),
                      s("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (p(!0), h(W, null, he(P.value.issueGroups, (f) => (p(), h("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          s("span", null, o(f.label), 1),
                          s("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          s("small", null, o(u(fi)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, m8))), 128))
                      ], 8, g8),
                      P.value.gapRanges?.length ? (p(), h("p", y8, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : E("", !0),
                      (p(!0), h(W, null, he(P.value.issueGroups, (f) => (p(), h("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        s("h5", null, o(f.label), 1),
                        s("ol", null, [
                          (p(!0), h(W, null, he(f.items, (F, ue) => (p(), h("li", {
                            key: F.itemId
                          }, [
                            s("span", _8, o(F.issueLabel), 1),
                            s("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, w8),
                            s("small", null, [
                              ie(o(F.publicationType), 1),
                              F.publicationDate ? (p(), h(W, { key: 0 }, [
                                ie(" · " + o(F.publicationDate), 1)
                              ], 64)) : E("", !0)
                            ]),
                            s("small", k8, [
                              ue > 0 ? (p(), h(W, { key: 0 }, [
                                ie(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : E("", !0),
                              ue > 0 && ue < f.items.length - 1 ? (p(), h(W, { key: 1 }, [
                                ie(" · ")
                              ], 64)) : E("", !0),
                              ue < f.items.length - 1 ? (p(), h(W, { key: 2 }, [
                                ie(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : E("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (p(), h("details", S8, [
                        s("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, C8)
                      ])) : E("", !0)
                    ])) : E("", !0),
                    s("p", null, [
                      s("a", {
                        href: dt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, T8)
                    ])
                  ])) : E("", !0),
                  s("div", A8, [
                    s("p", E8, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    s("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      s("span", x8, [
                        ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (p(), h("span", O8, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                      ]),
                      Q.value.previousUrl ? (p(), h("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, N8)) : (p(), h("span", R8, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (p(), h("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, I8)) : (p(), h("span", L8, o(u(t)("library", "Next")), 1))
                    ], 8, $8)
                  ]),
                  T.value.length === 0 ? (p(), h("div", {
                    key: 4,
                    class: Te(["library-empty-content", { "library-first-run-guidance": zr.value || fr.value, "library-filter-empty-state": gn.value && !zr.value && !fr.value }]),
                    role: "status"
                  }, [
                    zr.value ? (p(), h(W, { key: 0 }, [
                      s("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, P8),
                      s("p", D8, [
                        s("a", {
                          href: Wn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, F8),
                        s("span", M8, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : fr.value ? (p(), h(W, { key: 1 }, [
                      s("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, U8),
                      s("p", z8, [
                        s("a", {
                          href: Wn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, j8)
                      ])
                    ], 64)) : gn.value ? (p(), h(W, { key: 2 }, [
                      s("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, B8),
                      Ct.value.length > 0 ? (p(), h("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (p(!0), h(W, null, he(Ct.value, (f) => (p(), h("a", {
                          key: `empty-${f.key}`,
                          href: tl(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: ke((F) => il(f.key), ["prevent"])
                        }, [
                          s("strong", null, [
                            ie(o(f.label), 1),
                            f.displayValue ? (p(), h(W, { key: 0 }, [
                              ie(":")
                            ], 64)) : E("", !0)
                          ]),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            b[124] || (b[124] = ie(o(" "), -1)),
                            s("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, q8)
                          ], 64)) : E("", !0),
                          b[125] || (b[125] = ie()),
                          b[126] || (b[126] = s("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, V8))), 128))
                      ], 8, H8)) : E("", !0),
                      $i.value ? (p(), h("p", G8, o(u(t)("library", "Try removing {filter}.", { filter: $i.value.displayValue ? `${$i.value.label}: ${$i.value.displayValue}` : $i.value.label })), 1)) : E("", !0),
                      s("p", K8, [
                        ys.value ? (p(), h("a", {
                          key: 0,
                          href: rm(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = ke((f) => il("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, W8)) : E("", !0)
                      ])
                    ], 64)) : (p(), h(W, { key: 3 }, [
                      s("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, Y8),
                      s("p", Z8, [
                        s("a", {
                          href: Wn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, X8)
                      ])
                    ], 64))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (p(), h("section", {
                    key: 5,
                    class: Te(["library-list-selection", { "library-list-selection--active": ii.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    s("div", Q8, [
                      s("label", e5, [
                        s("input", {
                          type: "checkbox",
                          checked: ii.value.length === T.value.length,
                          onChange: Eg
                        }, null, 40, t5),
                        s("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, i5)
                      ]),
                      ii.value.length ? (p(), h("span", n5, o(u(fi)("library", "%n publication selected", "%n publications selected", ii.value.length)), 1)) : E("", !0),
                      ge(de(pd, {
                        "item-ids": ii.value,
                        "request-token": gt.value,
                        "lists-url": Ei.value,
                        "preferred-list-id": u(Su)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [tr, ii.value.length]
                      ]),
                      ii.value.length ? ge((p(), h("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => nt.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        s("option", r5, o(u(t)("library", "More actions")), 1),
                        s("option", l5, o(u(t)("library", "Add tag")), 1),
                        s("option", s5, o(u(t)("library", "Remove tag")), 1),
                        s("option", o5, o(u(t)("library", "Preview edit")), 1),
                        s("option", u5, o(u(t)("library", "Fresh covers")), 1),
                        s("option", c5, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, a5)), [
                        [rt, nt.value]
                      ]) : E("", !0)
                    ]),
                    ii.value.length && nt.value ? (p(), h("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: xg
                    }, [
                      nt.value === "tag" ? (p(), h("form", {
                        key: 0,
                        method: "post",
                        action: Nu.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, f5),
                        s("label", null, [
                          s("span", null, o(u(t)("library", "Add tag")), 1),
                          s("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, p5)
                        ]),
                        s("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, h5)
                      ], 8, d5)) : E("", !0),
                      nt.value === "untag" ? (p(), h("form", {
                        key: 1,
                        method: "post",
                        action: Ru.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, b5),
                        s("label", null, [
                          s("span", null, o(u(t)("library", "Remove tag")), 1),
                          s("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, g5)
                        ]),
                        s("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, m5)
                      ], 8, v5)) : E("", !0),
                      nt.value === "reset" ? (p(), h("form", {
                        key: 2,
                        method: "post",
                        action: vs.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, _5),
                        (p(!0), h(W, null, he(_s.value, (f) => (p(), h("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, w5))), 128)),
                        b[127] || (b[127] = s("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        s("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, k5)
                      ], 8, y5)) : E("", !0),
                      nt.value === "edit" ? (p(), h("form", {
                        key: 3,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, C5),
                        (p(!0), h(W, null, he(_s.value, (f) => (p(), h("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, T5))), 128)),
                        s("label", null, [
                          s("span", null, o(u(t)("library", "Field")), 1),
                          s("select", A5, [
                            s("option", E5, o(u(t)("library", "Publication type")), 1),
                            s("option", $5, o(u(t)("library", "Subtitle")), 1),
                            s("option", x5, o(u(t)("library", "Creators")), 1),
                            s("option", O5, o(u(t)("library", "Series / periodical")), 1),
                            s("option", N5, o(u(t)("library", "Series")), 1),
                            s("option", R5, o(u(t)("library", "Part in series")), 1),
                            s("option", I5, o(u(t)("library", "Genre")), 1),
                            s("option", L5, o(u(t)("library", "Publication date")), 1),
                            s("option", P5, o(u(t)("library", "Language")), 1),
                            s("option", D5, o(u(t)("library", "Publisher")), 1),
                            s("option", F5, o(u(t)("library", "Subjects")), 1),
                            s("option", M5, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        s("label", null, [
                          s("span", null, o(u(t)("library", "Value")), 1),
                          s("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, U5)
                        ]),
                        s("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, z5)
                      ], 8, S5)) : E("", !0),
                      nt.value === "covers" ? (p(), h("form", {
                        key: 4,
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, B5),
                        (p(!0), h(W, null, he(_s.value, (f) => (p(), h("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, H5))), 128)),
                        s("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, V5)
                      ], 8, j5)) : E("", !0),
                      s("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => nt.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : E("", !0)
                  ], 10, J8)) : E("", !0),
                  sr.value && (u(Eu) === "building" || Object.values(u(bn)).some((f) => f.status === "partial")) ? (p(), h("p", q5, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
                  T.value.length > 0 && re.value === "list" ? (p(), h("div", G5, [
                    s("table", K5, [
                      s("caption", W5, o(u(t)("library", "Catalogue list")), 1),
                      s("thead", null, [
                        s("tr", null, [
                          s("th", Y5, [
                            s("span", Z5, o(u(t)("library", "Selection")), 1)
                          ]),
                          s("th", X5, [
                            s("span", J5, o(u(t)("library", "Cover")), 1)
                          ]),
                          s("th", Q5, o(u(t)("library", "Title")), 1),
                          s("th", eD, o(u(t)("library", "Creators")), 1),
                          s("th", tD, o(u(t)("library", "Publication date")), 1),
                          s("th", iD, o(u(t)("library", "Series")), 1),
                          s("th", nD, o(u(t)("library", "Format")), 1),
                          s("th", aD, o(u(t)("library", "Shelf")), 1),
                          s("th", rD, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      s("tbody", null, [
                        (p(!0), h(W, null, he(T.value, (f) => (p(), h("tr", {
                          key: f.id,
                          class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": ks.value.has(Number(f.id)), "library-catalogue-list-row--open": ia.value && Number(Ra.value) === Number(f.id) }])
                        }, [
                          s("td", lD, [
                            s("label", sD, [
                              s("input", {
                                type: "checkbox",
                                checked: ks.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => rf(f.id, F.currentTarget.checked)
                              }, null, 40, oD)
                            ])
                          ]),
                          s("td", uD, [
                            s("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (F) => Hi(f, F)
                            }, [
                              s("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, dD)
                            ], 8, cD)
                          ]),
                          s("th", fD, [
                            s("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => Hi(f, F)
                            }, [
                              s("bdi", hD, o(f.title), 1)
                            ], 8, pD),
                            u(bn)[f.id]?.count ? (p(), h("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${dt.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(bn)[f.id].count) + o(u(bn)[f.id].status === "partial" ? "+" : ""), 9, vD)) : E("", !0)
                          ]),
                          s("td", bD, [
                            f.creators ? (p(), h("bdi", gD, o(f.creators), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, mD))
                          ]),
                          s("td", null, [
                            f.publicationDate ? (p(), h("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, yD)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, _D))
                          ]),
                          s("td", null, [
                            f.publication ? (p(), h("bdi", wD, o(f.publication), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, kD))
                          ]),
                          s("td", null, [
                            f.extension || f.publicationType ? (p(), h("bdi", {
                              key: 0,
                              class: Te(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Rs(f.extension) : f.publicationType), 11, SD)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, CD))
                          ]),
                          s("td", null, [
                            f.shelf ? (p(), h("bdi", TD, o(f.shelf), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, AD))
                          ]),
                          s("td", ED, [
                            s("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => ti(f, F)
                            }, o(u(t)("library", "Open")), 9, $D),
                            s("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => Hi(f, F)
                            }, o(u(t)("library", "Details")), 9, xD)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : T.value.length > 0 ? (p(), h("div", {
                    key: 8,
                    class: Te(["library-cover-gallery", oe.value])
                  }, [
                    (p(!0), h(W, null, he(T.value, (f) => (p(), h("article", {
                      key: f.id,
                      class: Te(["library-cover-card", { "library-cover-card--selected": ks.value.has(Number(f.id)), "library-cover-card--open": ia.value && Number(Ra.value) === Number(f.id) }])
                    }, [
                      s("label", OD, [
                        s("input", {
                          type: "checkbox",
                          checked: ks.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => rf(f.id, F.currentTarget.checked)
                        }, null, 40, ND)
                      ]),
                      s("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": ia.value && Number(Ra.value) === Number(f.id) ? "true" : "false",
                        onClick: (F) => Hi(f, F)
                      }, [
                        s("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, ID),
                        de(ST, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, RD),
                      s("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: ke((F) => Mf(f, F), ["prevent"])
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, PD),
                        b[128] || (b[128] = s("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        s("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, DD),
                        s("button", {
                          type: "submit",
                          class: Te(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": nl[f.id] ? "true" : void 0,
                          disabled: nl[f.id],
                          onClick: ke((F) => Mf(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, FD),
                        al[f.id] ? (p(), h("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(al[f.id]), 9, MD)) : E("", !0)
                      ], 40, LD),
                      s("div", UD, [
                        s("div", zD, [
                          u(bn)[f.id]?.count ? (p(), h("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${dt.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(bn)[f.id].count) + o(u(bn)[f.id].status === "partial" ? "+" : ""), 9, jD)) : E("", !0),
                          s("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            s("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Hi(f, F)
                            }, [
                              s("bdi", VD, o(f.title), 1)
                            ], 8, HD)
                          ], 8, BD),
                          f.creators ? (p(), h("p", qD, [
                            s("bdi", GD, o(f.creators), 1)
                          ])) : E("", !0),
                          Pf(f) ? (p(), h("p", KD, [
                            s("bdi", WD, o(Pf(f)), 1)
                          ])) : E("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (p(), h("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    s("span", ZD, [
                      ie(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (p(), h("span", XD, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : E("", !0)
                    ]),
                    Q.value.previousUrl ? (p(), h("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, JD)) : (p(), h("span", QD, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (p(), h("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, eF)) : (p(), h("span", tF, o(u(t)("library", "Next")), 1))
                  ], 8, YD)) : E("", !0)
                ], 10, WI))
              ], 64))
            ], 8, RN)
          ]),
          _: 1
        }),
        de(u(q2), {
          ref_key: "sidebarComponent",
          ref: La,
          class: "library-native-item-sidebar",
          open: ia.value,
          "no-toggle": "",
          loading: ni.loading,
          name: Ae.value?.title || u(t)("library", "Publication details"),
          subname: Ae.value?.creators || "",
          role: Pa.value ? "dialog" : void 0,
          "aria-modal": Pa.value ? "true" : void 0,
          "aria-labelledby": Pa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Pa.value && Ae.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: hf,
          onClosed: zg,
          onClose: Yr
        }, {
          default: we(() => [
            s("div", iF, [
              s("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: lf,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Ae.value?.title || u(t)("library", "Publication details")), 513),
              ni.loading && !Ae.value ? (p(), h("p", nF, o(u(t)("library", "Loading publication details…")), 1)) : ni.error ? (p(), h("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ni.missing ? "status" : "alert"
              }, [
                s("p", null, o(ni.error), 1),
                ni.missing ? E("", !0) : (p(), h("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Wr(Ra.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, aF)) : Ae.value ? (p(), h(W, { key: 2 }, [
                s("p", rF, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                s("div", lF, [
                  s("span", sF, o(u(t)("library", "Cover for")), 1),
                  s("img", {
                    class: "library-detail-drawer-cover",
                    src: Ae.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, oF),
                  s("div", uF, [
                    s("p", cF, [
                      s("bdi", dF, o(Ae.value.publicationType || u(t)("library", "Publication")), 1),
                      Ae.value.extension ? (p(), h("span", fF, [
                        b[129] || (b[129] = ie(" · ", -1)),
                        s("bdi", pF, o(Rs(Ae.value.extension)), 1)
                      ])) : E("", !0)
                    ]),
                    s("div", hF, [
                      s("a", {
                        class: "button primary",
                        href: Ae.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => ti(Ae.value, f))
                      }, o(u(t)("library", "Open")), 9, vF),
                      de(u(Gd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: we(() => [
                          de(u(Ic), {
                            href: Ae.value.filesUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ae.value.downloadUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          de(u(Ic), {
                            href: Ae.value.detailsUrl
                          }, {
                            default: we(() => [
                              ie(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (p(), Pe(pd, {
                  key: Ae.value.id,
                  "item-ids": [Number(Ae.value.id)],
                  "request-token": gt.value,
                  "lists-url": Ei.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                s("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (p(), h(W, null, he(Ng, (f) => s("button", {
                    key: f.key,
                    type: "button",
                    class: Te({ active: Ia.value === f.key }),
                    "aria-current": Ia.value === f.key ? "page" : void 0,
                    onClick: (F) => Ia.value = f.key
                  }, o(u(t)("library", f.label)), 11, gF)), 64))
                ], 8, bF),
                Ia.value === "overview" ? (p(), h("section", mF, [
                  s("h3", yF, o(u(t)("library", "Overview")), 1),
                  sf.value ? (p(), h("p", _F, [
                    s("bdi", wF, o(sf.value), 1)
                  ])) : E("", !0),
                  s("dl", kF, [
                    Ae.value.publication ? (p(), h("div", SF, [
                      s("dt", null, o(u(t)("library", "Series")), 1),
                      s("dd", null, [
                        s("a", {
                          class: "library-detail-facet-link",
                          href: As("publication", Ae.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => Es(f, "publication", Ae.value.publication))
                        }, [
                          s("bdi", TF, o(Ae.value.publication), 1)
                        ], 8, CF)
                      ])
                    ])) : E("", !0),
                    Ae.value.publicationDate ? (p(), h("div", AF, [
                      s("dt", null, o(u(t)("library", "Date")), 1),
                      s("dd", null, [
                        Da.value ? (p(), h("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: As("year", Da.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => Es(f, "year", Da.value))
                        }, o(Da.value), 9, EF)) : E("", !0),
                        Da.value && Ae.value.publicationDate !== Da.value ? (p(), h("span", $F, " · ")) : E("", !0),
                        Ae.value.publicationDate !== Da.value ? (p(), h("span", xF, o(Ae.value.publicationDate), 1)) : E("", !0)
                      ])
                    ])) : E("", !0),
                    Ae.value.publisher ? (p(), h("div", OF, [
                      s("dt", null, o(u(t)("library", "Publisher")), 1),
                      s("dd", null, [
                        s("a", {
                          class: "library-detail-facet-link",
                          href: As("publisher", Ae.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => Es(f, "publisher", Ae.value.publisher))
                        }, [
                          s("bdi", RF, o(Ae.value.publisher), 1)
                        ], 8, NF)
                      ])
                    ])) : E("", !0),
                    of.value.length ? (p(), h("div", IF, [
                      s("dt", null, o(u(t)("library", "Language")), 1),
                      s("dd", LF, [
                        (p(!0), h(W, null, he(of.value, (f) => (p(), h("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: As("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => Es(F, "language", f)
                        }, [
                          s("bdi", DF, o(f), 1)
                        ], 8, PF))), 128))
                      ])
                    ])) : E("", !0),
                    Ae.value.shelf ? (p(), h("div", FF, [
                      s("dt", null, o(u(t)("library", "Shelf")), 1),
                      s("dd", null, o(Ae.value.shelf), 1)
                    ])) : E("", !0)
                  ])
                ])) : Ia.value === "metadata" ? (p(), h("section", MF, [
                  sr.value ? (p(), Pe(hg, {
                    key: `${Ae.value.id}:${Ae.value.title}:${Ae.value.creators}`,
                    "item-id": Number(Ae.value.id),
                    "request-token": gt.value
                  }, null, 8, ["item-id", "request-token"])) : E("", !0),
                  s("h3", UF, o(u(t)("library", "Metadata")), 1),
                  s("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ke(Mg, ["prevent"])
                  }, [
                    s("label", null, [
                      ie(o(u(t)("library", "Title")), 1),
                      ge(s("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => yt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [je, yt.title]
                      ])
                    ]),
                    s("label", null, [
                      de(Ye, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(s("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => yt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [je, yt.series]
                      ])
                    ]),
                    s("label", null, [
                      de(Ye, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(s("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => yt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [je, yt.seriesNumber]
                      ])
                    ]),
                    s("label", null, [
                      de(Ye, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(s("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => yt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [je, yt.genre]
                      ])
                    ]),
                    s("label", null, [
                      ie(o(u(t)("library", "Publication date")), 1),
                      ge(s("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => yt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, zF), [
                        [je, yt.publicationDate]
                      ])
                    ]),
                    s("fieldset", null, [
                      s("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (p(!0), h(W, null, he(yt.identifiers, (f, F) => (p(), h("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        ge(s("input", {
                          "onUpdate:modelValue": (ue) => f.scheme = ue,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, jF), [
                          [je, f.scheme]
                        ]),
                        ge(s("input", {
                          "onUpdate:modelValue": (ue) => f.displayValue = ue,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, BF), [
                          [je, f.displayValue]
                        ]),
                        s("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ue) => Fg(F)
                        }, o(u(t)("library", "Remove")), 9, HF)
                      ]))), 128)),
                      s("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Dg
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    de(Ye, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: we(() => [
                        ie(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Bi.error ? (p(), h("p", VF, o(Bi.error), 1)) : Bi.saved ? (p(), h("p", qF, o(u(t)("library", "Metadata saved.")), 1)) : E("", !0),
                    s("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Bi.saving
                    }, o(Bi.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, GF)
                  ], 32),
                  $s(Ae.value).length ? (p(), h("section", KF, [
                    s("h4", WF, [
                      de(Ye, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: we(() => [
                          ie(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    s("dl", null, [
                      (p(!0), h(W, null, he($s(Ae.value), (f) => (p(), h("div", {
                        key: f.field
                      }, [
                        s("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        s("dd", null, [
                          ie(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = s("br", null, null, -1)),
                          ie(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : E("", !0)
                ])) : (p(), h("section", YF, [
                  s("h3", ZF, o(u(t)("library", "Activity")), 1),
                  s("dl", XF, [
                    s("div", null, [
                      s("dt", null, o(u(t)("library", "Scan status")), 1),
                      s("dd", null, o(Ae.value.scanStatus || "—"), 1)
                    ]),
                    Ae.value.workflowStatus ? (p(), h("div", JF, [
                      s("dt", null, o(u(t)("library", "Workflow")), 1),
                      s("dd", null, o(Ae.value.workflowStatus), 1)
                    ])) : E("", !0),
                    Ae.value.metadataSource ? (p(), h("div", QF, [
                      s("dt", null, o(u(t)("library", "Metadata source")), 1),
                      s("dd", null, o(Ae.value.metadataSource), 1)
                    ])) : E("", !0),
                    Ae.value.cachedPath ? (p(), h("div", eM, [
                      s("dt", null, o(u(t)("library", "File")), 1),
                      s("dd", tM, [
                        Ae.value.openUrl ? (p(), h("a", {
                          key: 0,
                          href: Ae.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => ti(Ae.value, f))
                        }, [
                          s("bdi", nM, o(Ae.value.cachedPath), 1)
                        ], 8, iM)) : (p(), h("bdi", aM, o(Ae.value.cachedPath), 1))
                      ])
                    ])) : E("", !0)
                  ])
                ])),
                Ae.value.authors?.length ? (p(), h("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (p(!0), h(W, null, he(Ae.value.authors, (f) => (p(), h("a", {
                    key: f,
                    class: "button secondary",
                    href: hm(f)
                  }, [
                    s("bdi", sM, o(f), 1)
                  ], 8, lM))), 128))
                ], 8, rM)) : E("", !0),
                s("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  s("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Cs.value,
                    onClick: b[110] || (b[110] = (f) => xs(Cs.value))
                  }, o(u(t)("library", "Previous item")), 9, uM),
                  s("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ts.value,
                    onClick: b[111] || (b[111] = (f) => xs(Ts.value))
                  }, o(u(t)("library", "Next item")), 9, cM)
                ], 8, oM)
              ], 64)) : E("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function vM() {
  window.LibraryStartupWatchdog?.fail();
}
function bM(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = fo("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !bM(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: fo("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Q1(hM, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  vM(), console.error("[library] Vue startup failed", e);
}
